const express = require("express");
const upload = require(__dirname + "/upload-module");
const db = require(__dirname + "/db_connect");
const router = express.Router();

//取得訂單資料列表(成功)
const getOrderList = async (req) => {
  const output = {
    rows: [],
  };

  const sql = "SELECT * FROM `orders`";
  const [r] = await db.query(sql);
  output.rows = r;
  return output;
};

//http://localhost:3009/order/list
router.get("/list", async (req, res) => {
  const output = await getOrderList(req);

  res.json(output);
});

//新增訂單(未完成)
//http://localhost:3009/order/add
router.post('/add', upload.none(), async (req, res)=>{
console.log(req.body)
    const output ={
      success: false,
      error:'',
      status: 0,
      body: req.body,
    }
    const sql = "INSERT INTO `orders`(`userId`,`total`,`orderRemark`,`delivery`,`payment`) VALUES(?,?,?,?,?)"
  
  
    const [r] = await db.query(sql , [
      req.body.userId,
      req.body.total,
      req.body.orderRemark,
      req.body.delivery,
      req.body.payment,
      ])
    if (r) {
        output.result = r;
        output.success = true;
        console.log('result:', r);
      }
    
    res.json(output);
  })

//取最新訂單
//http://localhost:3009/order/newOrderId
router.get('/newOrderId', async (req, res)=>{
        const output ={
        success: false,
        error:'',            
      }
      const sql = "SELECT `orderId` FROM `orders` ORDER BY `orderId` DESC LIMIT 1"
      
      const r = await db.query(sql)
      if (r)output.row=r
      res.json(output)
    }) 
    

module.exports = router;

//新增訂單明細表
//http://localhost:3009/order/addOrderDetails
router.post('/addOrderDetails', upload.none(), async (req, res)=>{
  console.log(req.body)
      const output ={
        success: false,
        error:'',
        status: 0,
        body: req.body,
      }
      const sql = "INSERT INTO `order_details`(`orderId`,`itemId`,`checkPrice`,`checkQty`) VALUES(?,?,?,?)"
    
    
      const [r] = await db.query(sql , [
        req.body.orderId,
        req.body.itemId,
        req.body.checkPrice,
        req.body.checkQty,        
        ])
      if (r) {
          output.result = r;
          output.success = true;
          console.log('result:', r);
        }
      
      res.json(output);
    })