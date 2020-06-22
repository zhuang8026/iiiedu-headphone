const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const router = express.Router();

router.use((req,res,next)=>{
/*
// 這裡要記錄session的資料
*/
    //如果他有設定就會拿到值,會有一個isLogin的值傳到login-test-login.ejs
    //有登入把帳號設定給他
    //登入之後顯示暱稱

    res.locals.user_access  = req.session.user_access || false,
    res.locals.username = req.session.username || false,
    res.locals.name = req.session.name || false,
    res.locals.password = req.session.password || false,
    // console.log('res.locals',res.locals);
    next();

});

// 登入 - william-0616
// post -> http://localhost:3009/members/login
router.post('/login', (req, res)=>{
    //登入邏輯
    // const sql = "SELECT * FROM `users` WHERE `username`=? AND `pwd`=SHA1(?)";
    const sql = "SELECT `id`, `username`, `name`, `pwd` FROM `users`";

    let username = req.body.username;
    let pwd = req.body.pwd;

    const loginInfo = {
        success: false, //登入許可
        username: "",   //儲存使用者帳號
        access:"",      //儲存使用者權限
        name:"",        //儲存使用者姓名
        password:"",
    }

    db.query(sql)
        .then((result)=>{
            // res.json(result);
            //使用者從前端傳過來的資料進行與資料庫比對
            result[0].forEach((value, index)=>{
                // console.log(value)
                if(username === value.username && pwd === value.pwd){
                    // console.log("yes!");
                    loginInfo.success = true;
                    loginInfo.access = "擁有使用權限";
                    loginInfo.username = value.username;
                    loginInfo.name = value.name;
                    loginInfo.password = value.pwd;
                }
            })
            
            if(loginInfo.success) {
                req.session.username = loginInfo.username
                req.session.name = loginInfo.name
                req.session.password = loginInfo.password
                req.session.user_access = loginInfo.access
                // console.log('req.session',req.session)

                res.json({
                    loginInfo,
                    session: req.session
                })//傳輸資料到前端
                
            } else {
                // console.log('false',req.session)
                res.json(loginInfo)
            }
        })
});

// 登出 - william-0616
// get -> http://localhost:3009/members/logout
router.get('/logout',(req, res)=>{
    // delete req.session.username;
    // delete req.session.name;
    // delete req.session.password;
    // delete req.session.user_access;
    // console.log('logout',req.session);
    // res.send("session 刪除成功");

    // 清除所有的session
    req.session = null
    
    res.clearCookie('skey')
    res.status(200).json({ status: 0, message: '登出成功' })

    // res.redirect('/members/login'); // 從哪裡來
});

// 取得會員資料
router.get('/user/:username?/:pwd?', (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    // console.log('session', req.session)
    let username = req.params.username;
    let pwd = req.params.pwd;

    const sql = `SELECT * FROM users WHERE username='${username}' AND pwd ='${pwd}'`; 
    db.query(sql)
        .then(([result])=>{
            result[0].birthday = moment(result[0].birthday).format('YYYY-MM-DD');
            // const fm = 'YYYY-MM-DD';
            // for(let i of result){
            //     i.birthday = moment(i.birthday).format(fm);
            // }
            // console.log('result', result)
            res.json(result);
        })
})

module.exports = router;
