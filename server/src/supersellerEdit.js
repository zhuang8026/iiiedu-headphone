const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const upload2 = require(__dirname + '/upload');

const router = express.Router();

var multer = require('multer')

router.get('/', (req, res)=>{
    res.send('超級賣家修改 api')
});

// 賣家商品 修改
// http://localhost:3009/supersellerEdit/sellerDelete
router.post('/sellerDelete', upload.none(), (req, res)=>{ 
    // router.post('/edit', upload.none(), (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
        const output = {
            success: false,
        }
        let id = req.body.id;
    
        const sql = "DELETE FROM `items` WHERE itemId=?"; 
        // console.log(id);
        db.query(sql, [id])                   
            .then(([results])=>{
                // console.log(results);
                output.results = results;
                if(results.affectedRows){
                    output.success = true;
                }
                // console.log(output);
                res.json(output);
            })
    
    })

module.exports = router;
