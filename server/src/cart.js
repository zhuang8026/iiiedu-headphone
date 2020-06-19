const express = require('express');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const router = express.Router();

// 所有資料
router.get("/cart", (req, res) => {
    const sql = "SELECT * FROM `cart`";

    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        // console.log(results);
        res.json(results);
    });

});

module.exports = router;
