const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();
const sql = "INSERT INTO `users`(`username`, `pwd`, `name`) VALUES (?, ?, ?)";

router.get('/', (req, res)=>{
    res.send('會員修改')
});

// 會員修改
router.post('/edit', upload.none(), (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    // let name = req.body.name;
    // let username = req.body.username;
    // let pwd = req.body.pwd;
    // // let gender = '1';
    // let phoneNumber = '0988888888';
    // let card = '1234-5555-8448-8888';
    // let birthday = '2020-01-17';
    // let address = '台北市中山區林森北路1號';
    const sql = "INSERT INTO `users`(`name`,`username`, `pwd`) VALUES (?, ?, ?)"; // phpmyadmin 能使用
    db.query(sql, [name, username, pwd])                        // 和php "?" 對應 值 一樣 
        .then(([r])=>{
            output.results = r;
            // console.log("r.insertId", r.insertId)
            if(r.affectedRows && r.insertId){
                output.success = true;
            }
            res.json(output);
        })

})


module.exports = router;
