const express = require("express");
const upload = require(__dirname + "/upload-module");
const db = require(__dirname + "/db_connect");
const router = express.Router();

//取得訂單資料列表function
const getOrderList = async (req) => {
  const output = {
    rows: [],
  };

  const sql = "SELECT * FROM `orders`";
  const [r] = await db.query(sql);
  output.rows = r;
  return output;
};

//取得訂單資料列表router
//http://localhost:3009/order/list
router.get("/list", async (req, res) => {
  const output = await getOrderList(req);

  res.json(output);
});

//新增訂單&訂單明細表router
//http://localhost:3009/order/addOrderDetails

// router.post("/addOrderDetails", upload.none(), async (req, res) => {
router.post("/addOrderDetails", async (req, res) => {
  // const mycart = req.body.mycartDisplay;
  const mycart = req.body.req.body.mycart;
  // let total = 0;
  // mycart.forEach(el=>{
  //   total += parseInt(el.itemPrice);
  // });

  const sql1 =
    "INSERT INTO `orders`(`userId`,`total`,`orderRemark`,`delivery`,`payment`) VALUES(?,?,?,?,?)";
  const [rr] = await db.query(sql1, [
    req.body.userId,
    // total,
    req.body.total,
    req.body.orderRemark,
    req.body.delivery,
    req.body.payment,
  ]);

  const order_id = rr.insertId;
  const sql2 =
    "INSERT INTO `order_details`(`orderId`,`itemId`,`checkPrice`,`checkQty`) VALUES(?,?,?,?)";

  const orderDetailIds = [];
  for (let el of mycart) {
    let [r2] = await db.query(sql2, [order_id, el.id, el.itemPrice, el.amount]);
    orderDetailIds.push(r2.insertId);
  }
  return res.json(orderDetailIds);
});

//取得最新訂單function
const getNewOrder = async (req) => {
  const output = {
    rows: [],
  };

  const sql = "SELECT * FROM `orders` ORDER BY `orderId` DESC LIMIT 1";
  const [r] = await db.query(sql);
  output.rows = r;
  return output;
};

//取最新訂單router
//http://localhost:3009/order/newOrder
router.get("/newOrder", async (req, res) => {
  const output = await getNewOrder(req);
  res.json(output);
});

module.exports = router;
