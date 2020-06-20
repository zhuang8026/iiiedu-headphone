const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();
const sql = "INSERT INTO `users`(`username`, `pwd`, `name`) VALUES (?, ?, ?)";

router.get('/', (req, res)=>{
    res.send('註冊api')
});

// 註冊 
router.post('/Add', (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    const output = {
        success: false,
    }
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

router.post('/newAdd', upload.none(), (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    const output = {
        success: false
    }
    let name = req.body.name;
    let username = req.body.username;
    let pwd = req.body.pwd;
    // let gender = '1';
    // let phoneNumber = '0988888888';
    // let card = '1234-5555-8448-8888';
    // let birthday = '2020-01-17';
    // let address = '台北市中山區林森北路1號';

    // const sql = "INSERT INTO address_book set ?"; // node.js 使用，phpmyadmin 不能使用
    // req.body.created_at = new Date();             // created_at 對應到的是 mysql的 欄位
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
    // res.json({ok:'ok'});
    // res.json(req.body);
})


module.exports = router;
