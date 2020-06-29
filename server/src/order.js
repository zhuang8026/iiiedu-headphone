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
    const sql = "INSERT INTO `orders`(`username`,`payment`,`delivery`,`orderRemark`) VALUES(?,?,?,?)"
  
  
    const [r] = await db.query(sql , [
      req.body.id,
      req.body.payment,
      req.body.delivery,
      req.body.orderRemark,
      ])
    if (r) {
        output.result = r;
        output.success = true;
        console.log('result:', r);
      }
    res.json(output);
  })




module.exports = router;
