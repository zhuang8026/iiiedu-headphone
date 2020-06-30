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
router.post("/add", upload.none(), async (req, res) => {
  console.log(req.body);
  const output = {
    success: false,
    error: "",
    status: 0,
    body: req.body,
  };
  const sql =
    "INSERT INTO `orders`(`userId`,`total`,`orderRemark`,`delivery`,`payment`) VALUES(?,?,?,?,?)";

  const [r] = await db.query(sql, [
    req.body.userId,
    req.body.total,
    req.body.orderRemark,
    req.body.delivery,
    req.body.payment,
  ]);
  if (r) {
    output.result = r;
    output.success = true;
    console.log("result:", r);
  }
  // result.insertId;
  res.json(output);
});

//取最新訂單
//http://localhost:3009/order/newOrderId
router.get("/newOrderId", async (req, res) => {
  const output = {
    success: false,
    error: "",
  };
  const sql = "SELECT `orderId` FROM `orders` ORDER BY `orderId` DESC LIMIT 1";

  const r = await db.query(sql);
  if (r) output.row = r;
  res.json(output);
});

// module.exports = router;

//新增訂單明細表
//http://localhost:3009/order/addOrderDetails

// router.post("/addOrderDetails", upload.none(), async (req, res) => {
router.post("/addOrderDetails", async (req, res) => {

  // req.body = [{"id":"116","itemName":"普通禮物卡","itemBrand":"禮物卡","itemImg":"gift-card-1.jpg","itemPrice":"3000","amount":2},{"id":"117","itemName":"經典禮物卡","itemBrand":"禮物卡","itemImg":"gift-card-2.jpg","itemPrice":"6000","amount":2},{"id":"118","itemName":"尊榮禮物卡","itemBrand":"禮物卡","itemImg":"gift-card-3.jpg","itemPrice":"9000","amount":2},{"id":"99","itemName":"A8000","itemBrand":"Final","itemImg":"f9.png","itemPrice":"59000","amount":1},{"id":"46","itemName":"AMBEO_SMART_HEADSET","itemBrand":"Senheier","itemImg":"se1.png","itemPrice":"9900","amount":1},{"id":"10","itemName":"AONIC_215","itemBrand":"Shure","itemImg":"sh1.png","itemPrice":"13500","amount":2},{"id":"17","itemName":"AONIC_50","itemBrand":"Shure","itemImg":"sh8.png","itemPrice":"11000","amount":1}];

  const mycart = req.body.mycartDisplay;
  let total = 0;
  mycart.forEach(el=>{
    total += parseInt(el.itemPrice);
  });

  const sql1 =
    "INSERT INTO `orders`(`userId`,`total`,`orderRemark`,`delivery`,`payment`) VALUES(?,?,?,?,?)";
    const [rr] = await db.query(sql1, [
      req.body.userId,
      total,
      req.body.orderRemark,
      req.body.delivery,
      req.body.payment,
    ]);

    const order_id = rr.insertId;
    const sql2 =
    "INSERT INTO `order_details`(`orderId`,`itemId`,`checkPrice`,`checkQty`) VALUES(?,?,?,?)";

    const orderDetailIds = [];
    for(let el of mycart){
      let [r2] = await db.query(sql2, [
        order_id,
        el.id,
        el.itemPrice,
        el.amount
      ]);
      orderDetailIds.push(r2.insertId);
    }


  //console.log(req.body.mycartDisplay);
  return res.json(orderDetailIds);



  // {"id":"116","itemName":"普通禮物卡","itemBrand":"禮物卡","itemImg":"gift-card-1.jpg","itemPrice":"3000","amount":2}





  console.log("req.body", req.body);
  // console.log("req.body.itemName", req.body[0].itemName);
  const output = {
    success: false,
    error: "",
    status: 0,
    body: req.body,
  };
  const sql =
    "INSERT INTO `order_details`(`orderId`,`itemId`,`checkPrice`,`checkQty`) VALUES(?,?,?,?)";

  const [r] = await db.query(sql, [
    req.body.orderId,
    req.body.itemId,
    req.body.checkPrice,
    req.body.checkQty,
  ]);
  if (r) {
    output.result = r;
    output.success = true;
    console.log("result:", r);
  }

  res.json(output);
});

//以下暫時註解
// router.post('/addOrderDetails', upload.none(), async (req, res)=>{
//   console.log(req.body)
//       const output ={
//         success: false,
//         error:'',
//         status: 0,
//         body: req.body,
//       }
//       const sql = "INSERT INTO `order_details`(`orderId`,`itemId`,`checkPrice`,`checkQty`) VALUES(?,?,?,?)"

//       const [r] = await db.query(sql , [
//         req.body.orderId,
//         req.body.itemId,
//         req.body.checkPrice,
//         req.body.checkQty,
//         ])
//       if (r) {
//           output.result = r;
//           output.success = true;
//           console.log('result:', r);
//         }

//       res.json(output);
//     })
//以上暫時註解

module.exports = router;
