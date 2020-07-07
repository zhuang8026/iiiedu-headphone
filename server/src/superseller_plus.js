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

// function
// 新增商品
const doAddItems = async (req) => {
    let itemName = '111';
    let itemImg = '111';
    let colorid = 1;
    let itemsbrand = '111';
    let itemstype = '111';
    let itemPrice = 1;
    let itemQty = 1;
    let itemsales = 1;
    let itemsstar = 1;
    let itemstoreNumber = 1;
    let itemscontent = '111';
    let itemsweight = '111';
    let itemsdrive = '111';
    let itemsfrequency = '111';
    let itemsSensitivity = '111';
    let itemsconnect = '111';
    let itemsmains = '111';
    let itemsEndurance = '111';
    let itemswatertight = '111';
    let itemsfeature = '111';
    let _files=['cgdkddkdpv.jpeg','coknhlkgdv.png','coknhlkocv.jpeg'];
    // 有資料過來就改成 req.body.XXXXXXXXX;
    // let itemName = req.body.itemName;
    // let itemImg = req.body.itemImg;
    // let colorid = req.body.colorid;
    // let itemsbrand = req.body.itemsbrand;
    // let itemstype = req.body.itemstype;
    // let itemPrice = req.body.itemPrice;
    // let itemQty = req.body.itemQty;
    // let itemsales = req.body.itemsales;
    // let itemsstar = req.body.itemsstar;
    // let itemstoreNumber = req.body.itemstoreNumber;
    // let itemscontent = req.body.itemscontent;
    // let itemsweight = req.body.itemsweight;
    // let itemsdrive = req.body.itemsdrive;
    // let itemsfrequency = req.body.itemsfrequency;
    // let itemsSensitivity = req.body.itemsSensitivity;
    // let itemsconnect = req.body.itemsconnect;
    // let itemsmains = req.body.itemsmains;
    // let itemsEndurance = req.body.itemsEndurance;
    // let itemswatertight = req.body.itemswatertight;
    // let itemsfeature = req.body.itemsfeature;
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
            output.success = true;
            
            doSearchItems(itemName,_files);
            // output.rows = outputWithId.rows;
            // console.log('結果 ======> ', outputWithId)
            // return output;
            // res.json(output);
        })

}

// 查詢商品id
const doSearchItems = async (_itemName,_files) => {
    let itemName = _itemName;
    const output = {
        success: false,
        rows: []
    }
    let _r = `SELECT LAST_INSERT_ID();`;
    const [r1] = await db.query(_r);
    if (r1) output.rows = r1;
    console.log('last ====> ', output.rows[0]['LAST_INSERT_ID()']);
    doAddImgsOnDatabase(output.rows[0]['LAST_INSERT_ID()'],_files);
    
    // return output_2;
}

// 新增資料庫圖片
const doAddImgsOnDatabase = async (_id,_files) => {
    const output = {
        success: false,
        rows: []
    }
    let itemId = _id;
    // 列出files所有上傳檔名
    // for(let i=0;i<req.files.length;i++){
    //     console.log('req.file = ', req.files[i].originalname);
    // }

    let multiple_Image, multiple_Image01, multiple_Image02, multiple_Image03, multiple_Image04;
    let sql = "INSERT INTO multiple_images (`itemId`,`multiple_Image`, `multiple_Image01`, `multiple_Image02`, `multiple_Image03`, `multiple_Image04`) VALUES (?,?,?,?,?,?)";
    for (let i = 0; i < 5; i++) {
        if (i < _files.length) {
            if (i == 0) multiple_Image = _files[i];
            if (i == 1) multiple_Image01 = _files[i];
            if (i == 2) multiple_Image02 = _files[i];
            if (i == 3) multiple_Image03 = _files[i];
            if (i == 4) multiple_Image04 = _files[i];
        }
        else {
            if (i == 1) multiple_Image01 = '';
            if (i == 2) multiple_Image02 = '';
            if (i == 3) multiple_Image03 = '';
            if (i == 4) multiple_Image04 = '';
        }
    }
    db.query(sql, [itemId, multiple_Image, multiple_Image01, multiple_Image02, multiple_Image03, multiple_Image04])
        .then(([r]) => {
            output.rows = r;
            output.success = true;
            console.log('output3 =========> ',output);
            // return output;
            // res.json(output.rows);
        })

}

//================================================== root ==============================================================
// http://localhost:3009/superseller_plus/
router.get('/', (req, res) => {
    res.send('superseller_plus root 測試ok');
});

//================================================== 新增 ==============================================================
// (測試ok)
// 新增產品
// http://localhost:3009/superseller_plus/add
router.post('/add', async (req, res) => {
    const output = await doAddItems(req);
    
    res.json(output);
})

//================================================== 圖片上傳 ==============================================================
// (可上傳)
// 上傳檔案
// http://localhost:3009/superseller_plus/try-upload/
router.post('/try-upload/', upload.array('avatar'), async (req, res) => {
    console.log('========== react(post) superseller_plus -> 上傳檔案 ==========')
    // let point = 0;
    res.json(req.files)
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
