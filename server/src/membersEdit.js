const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();
const sql = "INSERT INTO `users`(`username`, `pwd`, `name`) VALUES (?, ?, ?)";

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

// 會員基本資料 + 圖片 修改
// http://localhost:3009/membersEdit/userUpload
router.post('/userUpload', upload.single('file_upload'), (req, res)=>{
    console.log(req.body); // 图片以外的资料
    console.log(req.file); // 图片上传
    // return res.send('hh');
    const output = {
        success: false,
        uploadedImg: '',
        errorMsg: '',
        file: req.file,
        body: req.body
    }

    const sql = "UPDATE `users` SET `name`=?, `phoneNumber`=?, `gender`=?, `userlogo`=?, `birthday`=? WHERE `id`=?"; 

    db.query(sql, [req.body.name, req.body.phoneNumber, req.body.gender, req.file.filename, req.body.birthday, req.body.id ])                   
        .then(([results])=>{
            console.log(results)
            output.results = results;
            if(results.affectedRows && results.changedRows){
                output.success = true;
            }
            // console.log(output);
            res.json(output);
        })
});

module.exports = router;
