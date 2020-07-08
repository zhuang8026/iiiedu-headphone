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
    let _files = req.body.itemMoreImg;

    const output = {
        success: false,
        insertId: null,
        rows: []
    }
    const sql = "INSERT INTO items (`itemName`,`itemImg`, `colorid`, `itemsbrand`, `itemstype`,`itemPrice`, `itemQty`, `itemsales`, `itemsstar`, `itemstoreNumber`,`itemscontent`, `itemsweight`, `itemsdrive`, `itemsfrequency`, `itemsSensitivity`,`itemsconnect`, `itemsmains`, `itemsEndurance`, `itemswatertight`, `itemsfeature`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
    const [rr] = await db.query(sql, [
        itemName, itemImg, colorid, itemsbrand, itemstype,
        itemPrice, itemQty, itemsales, itemsstar, itemstoreNumber,
        itemscontent, itemsweight, itemsdrive, itemsfrequency, itemsSensitivity,
        itemsconnect, itemsmains, itemsEndurance, itemswatertight, itemsfeature
    ])
    // 抓剛剛新增的id
    const items_id = rr.insertId;
    // 自己設值
    output.success = true;
    output.insertId = items_id;
    console.log('結果 ======> ', items_id)
    doAddImgsOnDatabase(items_id, _files);
    return output;
}

// 新增資料庫圖片
const doAddImgsOnDatabase = async (_id, _files) => {
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
        .then(([results]) => {
            output.rows = results;
            output.success = true;
            console.log('output3 =========> ', output);
            // return output;
            // res.json(output.rows);
        })

}

//================================================== root ==============================================================
// http://localhost:3009/superseller_callback/
router.get('/', (req, res) => {
    res.send('superseller_callback root 測試ok');
});

//================================================== 新增 ==============================================================
// (測試ok)
// 新增產品+圖片檔名寫入資料庫
// http://localhost:3009/superseller_callback/add
router.post('/add', async (req, res) => {
    const output = await doAddItems(req);

    res.json(output);
})

//================================================== 圖片上傳 ==============================================================
// (可上傳)
// 上傳檔案
// http://localhost:3009/superseller_callback/try-upload/
router.post('/try-upload/', upload.array('file'), async (req, res) => {
    console.log('========== react(post) superseller_plus -> 上傳檔案 ==========')
    // let point = 0;
    res.json(req.files)
})

//================================================== 測試區 ==============================================================

// http://localhost:3009/superseller_callback/try-post
router.post('/try-post', (req, res) => {
    req.body.contentType = req.get('Content-Type'); // 取得檔頭  
    req.body.pageTitle = '測試表單-Json'
    req.body.txt = '測試一下'
    res.json(req.body)
})

//================================================================================================================
module.exports = router;
