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

router.post('/userUpload', upload.single('avatafile_upload'), (req, res)=>{
    console.log(req.body); // 图片以外的资料
    console.log(req.file); // 图片上传
    const output = {
        success: false,
        uploadedImg: '',
        nickname: '',
        errorMsg: ''
    }
    output.nickname = req.body.nickname || '';
    //req.file 官网有说明
    if(req.file && req.file.originalname){

        switch(req.file.mimetype){
            case 'image/png':
            case 'image/jpeg':
                // rename 是node.js api
                // rename 功能是 修改文件名称，可更改文件的存放路径
                // fs.rename(oldPath, newPath, [callback(err)])
                fs.rename(req.file.path, './public/img/'+ req.file.originalname, error=>{
                    if(!error){
                        output.success = true;
                        output.uploadedImg = '/img/' + req.file.originalname;
                    }
                    // res.render('try-upload.ejs', output);
                })
                break;
            default:
                // unlink 是node.js api
                fs.unlink(req.file.path, error=>{
                    output.errorMsg = '檔案類型錯誤'
                })
        }
    }
});

module.exports = router;
