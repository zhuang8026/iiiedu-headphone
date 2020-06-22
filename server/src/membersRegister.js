const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('註冊api')
});

// 註冊 
router.post('/Add', (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    const output = {
        success: false,
    }
    
    let memberId = "";
    let idd = '1';
    memberId = `M${moment(new Date()).format('YYMM')}${idd.padStart(4, '0')}`;

    console.log(memberId);
    let name = req.body.name;
    let username = req.body.username;
    let pwd = req.body.pwd;

    const sql = "INSERT INTO `users`(`name`, `username`, `pwd`) VALUES (?, ?, ?)"; 
    console.log('req.body',[req.body])
    db.query(sql, [name, username, pwd])
        .then((result)=>{
            console.log('result',result)
            output.results = result;
            if(result.affectedRows && r.insertId){
                output.success = true;
            }
            res.json(output);
        })
})

module.exports = router;
