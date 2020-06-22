const express = require('express');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const router = express.Router();

//http://localhost:3009/seller/
router.get('/list',(res,req)=>{
    // res.send('賣家中心')
    const sql = "SELECT * FROM `orders` ORDER BY `payment` DESC";
    
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        // console.log(results);
        res.json(results);
    });
});
//http://localhost:3009/seller/my-sale

//http://localhost:3009/seller/order
////http://localhost:3009/seller/refund
//http://localhost:3009/seller/seller-product
//http://localhost:3009/seller/seller-account





module.exports = router;
