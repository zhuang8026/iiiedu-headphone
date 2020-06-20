const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const router = express.Router();

router.get('/add', upload.none(), (req, res)=>{
    const output = {
        success: false
    }
    const sql = "INSERT INTO blogs set ?";
    // 沒有創建時間的input欄位，就直接給它函數方法
    req.body.id = 9999; 
    req.body.blogTitle = 9999 ; 
    req.body.blogContent01 = 9999 ; 
    req.body.blogContent01_img01 = 9999 ;   
    req.body.blogContent02 = 9999 ; 
    req.body.blogContent02_img01 = 9999 ;   
    db.query(sql, [req.body])
        .then(([r])=>{
            output.results = r;
            if(r.affectedRows && r.insertId){
                output.success = true;
            }
            res.json(output);
        })
    // res.json(req.body);
})

module.exports = router;