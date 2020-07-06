const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const upload2 = require(__dirname + '/upload');

const router = express.Router();

var multer = require('multer')

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

// 會員訂單查詢
// http://localhost:3009/membersEdit/membersOrder
router.post('/membersOrder', (req, res)=>{ 
    const output = {
        success: false,
    }
    let id = req.body.id;

    const sql = "UPDATE `users` SET `pwd` = ? WHERE `users`.`id` = ?"; 

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

module.exports = router;
