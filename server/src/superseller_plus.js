const express = require('express');
const fileUpload = require('express-fileupload');
const upload = require(__dirname + '/upload-module-superseller');
const multer = require('multer');
const db = require(__dirname + '/db_connect');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const { serialize } = require('v8');

const router = express.Router();
// 建立 web server 物件
const app = express();

// enable files upload
// 啟動檔案上傳
app.use(fileUpload({
    createParentPath: true
}));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(morgan('dev'));
// app.use(cors());
app.use('/avatar', express.static('uploads'));

//================================================== root ==============================================================
// http://localhost:3009/superseller_plus/
router.get('/', (req, res) => {
    res.send('superseller_plus root 測試ok');
});

//================================================== 新增 ==============================================================
// (測試ok)
// 新增產品
// http://localhost:3009/superseller_plus/add
router.post('/add', upload.none(), (req, res) => {
    // 有資料過來就改成 req.body.XXXXXXXXX;
    let itemName = req.body.itemName;
    let itemImg = req.body.itemImg;
    let colorid = req.body.colorid;
    let itemsbrand = req.body.itemsbrand;
    let itemstype = req.body.itemstype;
    let itemPrice = req.body.itemPrice;
    let itemQty = req.body.itemQty;
    let itemsales = req.body.itemsales;
    let itemsstar = req.body.itemsstar;
    let itemstoreNumber = req.body.itemstoreNumber;
    let itemscontent = req.body.itemscontent;
    let itemsweight = req.body.itemsweight;
    let itemsdrive = req.body.itemsdrive;
    let itemsfrequency = req.body.itemsfrequency;
    let itemsSensitivity = req.body.itemsSensitivity;
    let itemsconnect = req.body.itemsconnect;
    let itemsmains = req.body.itemsmains;
    let itemsEndurance = req.body.itemsEndurance;
    let itemswatertight = req.body.itemswatertight;
    let itemsfeature = req.body.itemsfeature;
    const output = {
        success: false,
        rows: []
    }
    const sql = "INSERT INTO items (`itemName`,`itemImg`, `colorid`, `itemsbrand`, `itemstype`,`itemPrice`, `itemQty`, `itemsales`, `itemsstar`, `itemstoreNumber`,`itemscontent`, `itemsweight`, `itemsdrive`, `itemsfrequency`, `itemsSensitivity`,`itemsconnect`, `itemsmains`, `itemsEndurance`, `itemswatertight`, `itemsfeature`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [
        itemName, itemImg, colorid, itemsbrand, itemstype,
        itemPrice, itemQty, itemsales, itemsstar, itemstoreNumber,
        itemscontent, itemsweight, itemsdrive, itemsfrequency, itemsSensitivity,
        itemsconnect, itemsmains, itemsEndurance, itemswatertight, itemsfeature
    ])
        .then(([results]) => {
            output.results = results;
            output.success = true;
            console.log(output);
            // res.json(output);
        })
    // res.json(req.body);
})

//================================================== 圖片上傳 ==============================================================
// (可上傳)
// 上傳檔案
// http://localhost:3009/superseller_plus/try-upload/
router.post('/try-upload/', upload.array('avatar'), async (req, res) => {
    console.log('========== react(post) superseller_plus -> 上傳檔案 ==========')
    // let point = 0;
    const output = {
        success: false,
        rows: []
    }
    let itemId = 9999;
    // 列出files所有上傳檔名
    // for(let i=0;i<req.files.length;i++){
    //     console.log('req.file = ', req.files[i].originalname);
    // }

    let multiple_Image, multiple_Image01, multiple_Image02, multiple_Image03, multiple_Image04;
    let sql = "INSERT INTO multiple_images (`itemId`,`multiple_Image`, `multiple_Image01`, `multiple_Image02`, `multiple_Image03`, `multiple_Image04`) VALUES (?,?,?,?,?,?)";
    for (let i = 0; i < 5; i++) {
        if (i < req.files.length) {
            if (i == 0) multiple_Image = req.files[i].originalname;
            if (i == 1) multiple_Image01 = req.files[i].originalname;
            if (i == 2) multiple_Image02 = req.files[i].originalname;
            if (i == 3) multiple_Image03 = req.files[i].originalname;
            if (i == 4) multiple_Image04 = req.files[i].originalname;
        }
        else {
            if (i == 1) multiple_Image01 = '';
            if (i == 2) multiple_Image02 = '';
            if (i == 3) multiple_Image03 = '';
            if (i == 4) multiple_Image04 = '';
        }
    }
    db.query(sql, [itemId,multiple_Image, multiple_Image01, multiple_Image02, multiple_Image03, multiple_Image04])
        .then(([r]) => {
            output.rows = r;
            output.success = true;
            console.log(output.rows);
            res.json(output.rows);
        })
})

//================================================== 測試區 ==============================================================


router.post('/try-post', (req, res) => {
    req.body.contentType = req.get('Content-Type'); // 取得檔頭  
    req.body.pageTitle = '測試表單-Json'
    req.body.txt = '測試一下'
    res.json(req.body)
})

//================================================================================================================
module.exports = router;
