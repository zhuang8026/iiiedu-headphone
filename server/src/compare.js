const express = require('express');
// const MysqlStore = require('express-mysql-session')(session);
// const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const cors = require('cors');
// const fs = require('fs');
const router = express.Router();

// 建立 web server 物件
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// (個人)所有商品
// http://localhost:3009/compare/listCompareUserProduct
router.post("/CompareUserProduct", (req, res) => {
    console.log('========== react(get) -> (個人)所有文章 ==========') 
    let id = req.body.id;
    let sql = `SELECT *,users.id,users.username,users.name,users.shopopen FROM items LEFT JOIN users ON items.itemstoreNumber=users.id WHERE users.isActivated=1 AND users.shopopen=1 AND users.id =${id}`;
    let output = {}
    db.query(sql,[id])
        .then(results => {
            output.results = results;
            res.json(results[0])
            // return db.query(sql);
        })
});
module.exports = router;

