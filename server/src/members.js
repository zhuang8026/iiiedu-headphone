const express = require('express');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const moment = require('moment-timezone'); // npm install moment-timezone

const router = express.Router();

// 202020525 
router.get('/', (req, res)=>{
    res.send('sql')
    // res.redirect(req.baseUrl + '/list');
});

// 登入 - william-0616
router.post('/login', upload.none(), (req, res)=>{
    //res.render('address-book/login');
    const  output = {
        body: req.body,
        success: false
    }
    const sql = "SELECT * FROM `users` WHERE `username`=? AND `pwd`=SHA1(?)";
    db.query(sql, [req.body.username, req.body.pwd])
        .then(([result])=>{
            if(result && result.length){
                req.session.adminWill = result[0]; // admin 这是自己定义的，将result的资料赋值给 admin
                output.success = true;
            }
            console.log(result)
            res.json(output);
        })
});

// 登出 - william-0616
router.get('/logout',(req, res)=>{
    delete req.session.adminWill;
    console.log(req.session);
    res.redirect('/members/login'); // 從哪裡來
});


module.exports = router;
