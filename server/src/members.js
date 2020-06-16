const express = require('express');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
// const moment = require('moment-timezone'); // 外面永远都只会执行一次，这里需要再一次引入

const router = express.Router();

// 202020525 
router.get('/', (req, res)=>{
    res.send('sql')
    // res.redirect(req.baseUrl + '/list');
});

router.post('/login', upload.none(), (req, res)=>{
    //res.render('address-book/login');
    const  output = {
        body: req.body,
        success: false
    }
    const sql = "SELECT `sid`, `account`, `nickname` FROM admins WHERE account=? AND password=SHA1(?)";
    db.query(sql, [req.body.account, req.body.password])
        .then(([result])=>{
            if(result && result.length){
                req.session.adminWill = result[0]; // admin 这是自己定义的，将result的资料赋值给 admin
                output.success = true;
            }
            console.log(result)
            res.json(output);
        })
});

module.exports = router;
