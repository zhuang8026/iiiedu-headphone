const express = require('express');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const router = express.Router();

//http://localhost:3009/seller/
router.get('/', (req, res)=>{
    res.send('seller')
});

//http://localhost:3009/sellers/list
router.get('/list',(req,res)=>{
    const sql = "SELECT *, SUM(`orders`.`delivery`='已送達') AS delivery_arrived, SUM(`orders`.`delivery`='未出貨') AS unsent,SUM(`orders`.`delivery`='配送中') AS sending FROM orders GROUP BY`orders`.`delivery`";
    db.query(sql)
    .then((result)=>{
        console.log(result)
        res.json(result[0]);
});
})
//http://localhost:3009/seller/my-sale

//http://localhost:3009/seller/order
////http://localhost:3009/seller/refund
//http://localhost:3009/seller/seller-product
//http://localhost:3009/seller/seller-account





module.exports = router;
