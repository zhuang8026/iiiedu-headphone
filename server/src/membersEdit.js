const express = require('express');                     // router
const moment = require('moment-timezone');              // 時間修改
const upload = require(__dirname + '/upload-module');   // 圖片上傳
const db = require(__dirname + '/db_connect');          // mysql 連結

const upload2 = require(__dirname + '/upload');         // 圖片上傳

const router = express.Router();                        // router

var multer = require('multer');                         // 圖片上傳 

var nodemailer = require('nodemailer');                 // gmail api 

router.get('/', (req, res)=>{
    res.send('會員修改 api')
});

// 會員地址修改
// http://localhost:3009/membersEdit/edit
router.post('/edit', (req, res)=>{ 
// router.post('/edit', upload.none(), (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    const output = {
        success: false,
    }
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber;
    let address = req.body.address;
    let id = req.body.id;

    const sql = "UPDATE `users` SET `name`=?, `phoneNumber`=?, `address`=? WHERE `id`=?"; 
    // console.log(id);
    db.query(sql, [name, phoneNumber, address, id])                   
        .then(([results])=>{
            output.results = results;
            if(results.affectedRows && results.changedRows){
                output.success = true;
            }
            // console.log(output);
            res.json(output);
        })

})

// 會員信用卡修改
// http://localhost:3009/membersEdit/bank
router.post('/bank', upload.none(), (req, res)=>{ 
    const output = {
        success: false,
    }
    let card = req.body.card;
    let pin = req.body.pin;
    let id = req.body.id;

    const sql = "UPDATE `users` SET `card`=?, `pin`=? WHERE `id`=? "; 
    
    // console.log(id);
    db.query(sql, [card, pin, id])                   
        .then(([results])=>{
            console.log(results)
            output.results = results;
            if(results.affectedRows && results.changedRows){
                output.success = true;
            }
            // console.log(output);
            res.json(output);
        })

})

// 會員基本資料 修改
// http://localhost:3009/membersEdit/userUpload
router.post('/userUpload', upload.none() ,(req, res)=>{
    // console.log(req.body); // 图片以外的资料
    // console.log(req.file); // 图片上传
    // return res.send('hh');
    const output = {
        success: false,
        // uploadedImg: '',
        // errorMsg: '',
        // file: req.file,
        // body: req.body
    }

    const sql = "UPDATE `users` SET `name`=?, `phoneNumber`=?, `gender`=?, `userlogo`=?, `birthday`=? WHERE `id`=?"; 

    db.query(sql, [req.body.name, req.body.phoneNumber, req.body.gender, req.body.userlogo, req.body.birthday, req.body.id ])                   
    // db.query(sql, [req.body.name, req.body.phoneNumber, req.body.gender, req.file.filename, req.body.birthday, req.body.id ])                   
        .then(([results])=>{
            // console.log('results', results)
            output.results = results;
            if(results.affectedRows && results.changedRows){
                output.success = true;
            }
            // console.log(output);
            res.json(output);
        })
});

// 會員圖片 修改 - 不使用
// http://localhost:3009/membersEdit/imgUpload
// router.post('/imgUpload', upload.single('file_upload'), (req, res)=>{
//     // console.log('req.file', req.file);
//     // console.log('req', req); // 可看到 所有的 request(取得客户端资料) 内容
//     // console.log('imgUpload',req.File)  // 無接收到 client資料
//     res.json({
//         // filename: req.file.filename,
//         filename: req.name,
//         body: req.body
//     });
//     // res.end("ok");
// });


// 測試  ok  可使用 圖片上傳 - 20200625 / 會員圖片 修改 
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
router.post('/upload',function(req, res) {
    upload2(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
        // return res.status(200).send(req.file)
        return res.status(200).json(req.file)
    })
});


// 會員密碼修改
// http://localhost:3009/membersEdit/newpassword
router.post('/newpassword', (req, res)=>{ 
    const output = {
        success: false,
    }

    let pwd = req.body.pwd;
    let id = req.body.id;

    const sql = "UPDATE `users` SET `pwd` = ? WHERE `users`.`id` = ?"; 
    // console.log(id);

    db.query(sql, [pwd, id])                   
        .then(([results])=>{
            // console.log(results)
            output.results = results;
            if(results.affectedRows && results.changedRows){
                output.success = true;
            }
            // console.log(output);
            res.json(output);
        })
})

// 會員gmail api 找回密碼 驗證 
// http://localhost:3009/membersEdit/membersForget
router.post('/membersForget', (req, res)=>{ 
    // const output = {
    //     success: false,
    // }

    let email = req.body.username;
    let randomNum = parseInt(Math.random()*1000000);
    // let name = req.body.name;

    // let name = req.body.name || '';
    // let email = req.body.email;
    console.log(email)

    let transporter = nodemailer.createTransport({ // 宣告發信物件
        service: 'Gmail',
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true,
        auth: {
            // type: 'OAuth2',
            user: 'zhuang8026@gmail.com',
            pass: 'zj199126h',
            // serviceClient: '896736742121-60o5vgegttum1r3oub83ubjlkvhkfbhj.apps.googleusercontent.com',
            // privateKey: 'XYYv27ZXhwKKp5piYdcQdpix',
        }
    });

    let options = {
        //寄件者
        from: 'zhuang8026@gmail.com',
        //收件者
        to: `${email}`, 
        //副本
        // cc: 'account3@gmail.com',
        //密件副本
        // bcc: 'account4@gmail.com',
        //主旨
        subject: '這是 node.js 發送的測試信件 - 來自 otis store', // Subject line
        //純文字
        text: 'wiliam test', // plaintext body
        //嵌入 html 的內文
        html: '<h2>wiliam test</h2> <a href="https://treefonts.com/"> treefonts </a> <img src="https://img1.wsimg.com/isteam/ip/aad4bbdc-98b2-4a8c-8dc9-14912aca6db0/treefonts_logo.png/:/rs=h:400/qt=q:95"><p>驗證碼:'+ randomNum +'</p>', 
        //附件檔案
        // attachments: [ {
        //     filename: 'text01.txt',
        //     content: ''
        // }, {
        //     filename: 'unnamed.jpg',
        //     path: '../public/blogs_img/logo.png'
        // }]
    };

    //發送信件方法
    transporter.sendMail(options, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('訊息發送: ' + info.response);
            res.send('訊息發送: ' + info.response)
        }
    });


    // return res.redirect(303, '/thankyou');

})


// 會員訂單查詢 父層
// http://localhost:3009/membersEdit/membersOrder
router.post('/membersOrder', upload.none(), (req, res)=>{ 
    const output = {
        success: false,
    }
    let id = req.body.id;
    let username = req.body.username;

    let sql =  `SELECT *
                    FROM orders
                    LEFT JOIN 
                        users 
                    ON 
                        orders.userId = users.id
                    LEFT JOIN 
                        paymentstate_types
                    ON 
                        paymentstate_types.paymentState = orders.paymentState
                    LEFT JOIN 
                        delivery_types
                    ON
                        delivery_types.delivery = orders.delivery
                    LEFT JOIN 
                        payment_types AS pay
                    ON 
                        pay.payment = orders.deliveryState
                    WHERE
                        users.id = ?
                    And
                        users.username = ?`;

    db.query(sql, [id, username])                   
        .then(([results])=>{
            output.results = results;
            output.success = true;
            for(let i of results){
                i.created_at = moment(i.created_at).format('YYYY-MM-DD');
            }
            res.json(output);
        })
})


// 會員訂單查詢 子層
// http://localhost:3009/membersEdit/membersOrderDetail/1000520522
router.get('/membersOrderDetail/:orderId', upload.none(), (req, res)=>{ 
    const output = {
        success: false,
    }
    let orderId = req.params.orderId;

    let sql =  `SELECT *
                    FROM orders
                    LEFT JOIN 
                        users 
                    ON 
                        orders.userId = users.id 
                    LEFT JOIN 
                        paymentstate_types
                    ON 
                        paymentstate_types.paymentState = orders.paymentState
                    LEFT JOIN 
                        payment_types AS pay
                    ON 
                        pay.payment = orders.deliveryState
                    LEFT JOIN 
                        delivery_types
                    ON
                        delivery_types.delivery = orders.delivery
                    INNER JOIN  
                        order_details AS details
                    ON 
                        details.orderId = orders.orderId
                    LEFT JOIN  
                        items
                    ON 
                        details.itemId = items.itemId
                    WHERE
                        orders.orderId = ?`;

    db.query(sql, [orderId])                   
        .then(([results])=>{
            output.results = results;
            output.success = true;
            for(let i of results){
                i.created_at = moment(i.created_at).format('YYYY-MM-DD');
            }
            res.json(output);
        })
})


// 成為賣家 api
// http://localhost:3009/membersEdit/membersChangeSeller
router.post('/membersChangeSeller', upload.none(), (req, res)=>{ 

    // let isActivated = req.body.isActivated;
    // let shopopen = req.body.shopopen;
    let id = req.body.id;

    const output = {
        success: false,
    }
    let sql = "UPDATE `users` SET `isActivated`=1, `shopopen`=1 WHERE `users`.`id`=? ";

    db.query(sql, [id])                   
        .then(([results])=>{
            console.log(results)
            output.results = results;
            if(results.affectedRows && results.changedRows){
                output.success = true;
            }
            // for(let i of results){
            //     i.created_at = moment(i.created_at).format('YYYY-MM-DD');
            // }
            res.json(output);
        })
})

module.exports = router;
