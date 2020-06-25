const express = require('express');
// const MysqlStore = require('express-mysql-session')(session);
// const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const cors = require('cors');
// const fs = require('fs');
const router = express.Router();

// 建立 web server 物件
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//＝＝＝＝＝＝＝＝＝alice success===========

//http://localhost:3009/sellers/
router.get('/', (req, res)=>{
    res.send('seller')
});

//http://localhost:3009/sellers/list
//所有資料
router.get('/list',(req,res)=>{
    const sql = "SELECT *, SUM(`orders`.`delivery`='已送達') AS delivery_arrived, SUM(`orders`.`delivery`='未出貨') AS unsent,SUM(`orders`.`delivery`='配送中') AS sending FROM orders GROUP BY`orders`.`delivery`";
    db.query(sql)
    .then((result)=>{
        console.log(result)
        res.json(result[0]);
});
})

//=========haven't tried =====================

// 所有文章(分頁)的function
const getSellerProductDataList = async (req)=>{ 
    const perPage = 12;
    let page = parseInt(req.params.page) || 1;

    const output = {
        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    console.log(output);
    const [r1] = await db.query("SELECT COUNT(1) num FROM `items`");
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows/perPage);
    if(page < 1) page=1;
    if(page > output.totalPages) page=output.totalPages;
    if( output.totalPages===0) page=0;
    output.page = page;

    if(! output.page) output;
    
    const sql = `SELECT * FROM items ORDER BY itemstoreNumber LIMIT ${(page-1)*perPage}, ${perPage}`;
    const [r2] = await db.query(sql);
    if(r2) output.rows = r2;
    // for(let i of r2){
    //     i.created_at = moment(i.created_at).format('YYYY-MM-DD');
    // }
    return output;
};

// (個人)所有文章(分頁)的function
const getSellerIdProductList = async (req) => {
    const perPage = 12;
    let page = parseInt(req.params.page) || 1;
    let id = req.body.id;
    const output = {
        id: id,
        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    // console.log(id)
    const [r1] = await db.query(`SELECT COUNT(1) num FROM items WHERE itemstoreNumber='${id}'`);
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    const sql = `SELECT * FROM items WHERE itemstoreNumber=${id} ORDER BY itemId desc LIMIT ${(page - 1) * perPage}, ${perPage}`
    const [r2] = await db.query(sql);
    if (r2) output.rows = r2;
    // 將r2裡的Date改成正常時間格式
    // for (let i of r2) {
    //     // 要先放到moment才能使用.format('YYYY-MM-DD')
    //     i.blogExpectedTime = moment(i.blogExpectedTime).format('DD-YY-MM');
    //     i.blogPublishTime = moment(i.blogPublishTime).format('DD-YY-MM');
    //     i.blogUpdateTime = moment(i.blogUpdateTime).format('DD-YY-MM');
    // }
    return output;
};

// 所有產品
// http://localhost:3009/sellers/listAllSellerProduct
router.get("/listAllSellerProduct", (req, res) => {
    console.log('========== react(get) -> 所有文章 ==========')    
    const sql = `SELECT * FROM items ORDER BY itemstoreNumber desc`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});
// http://localhost:3009/sellers/listAllSellerProduct/(第幾頁)
router.get('/listAllSellerProduct/:page?', async (req, res) => {
    console.log('========== react(get) -> 所有文章(分頁) ==========') 
    const output = await getSellerProductDataList(req);
    res.json(output);
})

// (個人)所有商品
// http://localhost:3009/sellers/listSellerUserProduct/(個人id編號)
router.get("/listSellerUserProduct/:id", (req, res) => {
    console.log('========== react(get) -> (個人)所有文章 ==========') 
    let id = req.params.id;
    let sql = `SELECT *,users.id,users.username,users.name,users.shopopen FROM items LEFT JOIN users ON items.itemstoreNumber=users.id WHERE users.isActivated=1 AND users.shopopen=1 AND users.id =${id}`;
    let output = {}
    db.query(sql)
        .then(results => {
            output.results = results;
            res.json(results[0])
            return db.query(sql);
        })
});

// (個人)所有商品(分頁)
// http://localhost:3009/sellers/seller-product/(個人id編號)/(第幾頁)
router.post('/listSellerUserProduct/:id/:page?', async (req, res) => {    
    console.log('========== react(送會員id) -> (個人)所有文章(分頁) ==========')
    console.log('req.body = ',req.body)
    const output = await getSellerIdProductList(req);
    res.json(output);
})
//http://localhost:3009/sellers/my-sale

//http://localhost:3009/sellers/order
//http://localhost:3009/sellers/refund

// //http://localhost:3009/sellers/seller-product/detail/:id
// router.get("/seller-product/detail/:id?", (req, res) => {
//     // console.log(req.params.id);
//     let id = req.params.id;
//     let sql = `SELECT *,users.id,users.username,users.name,users.shopopen FROM items LEFT JOIN users ON items.itemstoreNumber=users.id WHERE users.isActivated=1 AND users.shopopen=1 AND users.id =${id}`;
//     let output = {}
//     db.query(sql)
//         .then(results =>{
//             // if (error) throw error;
//             // console.log(results);
//             output.results = results;
//             console.log(results[0])
//             res.json(results[0])
//         });
//     });

//http://localhost:3009/sellers/add-product
router.post('/add-product',(req,res)=>{
        let id = req.body.id;
        let itemName = req.body.itemName;
        let itemImg = req.body.itemImg;
        let colorid = req.body.colorid;
        let itemsbrand = req.body.itemsbrand;
        let itemstype = req.body.itemstype;
        let itemPrice = req.body.itemPrice;
        let itemQty = req.body.itemQty;
        let itemsales = req.body.itemsales;
        let itemscontent = req.body.itemscontent;
        let itemsweight = req.body.itemsweight;
        let itemsdrive = req.body.itemsdrive;
        let itemsfrequency = req.body.itemsfrequency;
        let itemsSensitivity = req.body.itemsSensitivity;
        let itemsconnect = req.body.itemsconnect;
        let itemsmains = req.body.itemsmains;
        let itemsEndurance = req.body.itemsEndurance;
        let itemswatertight = req.body.itemswatertight;
        let itemsfeature  = req.body.itemsfeature ;

        const output = {
            success: false,
            itemstoreNumber:id,
            itemName:itemName,
            itemImg:itemImg, 
            colorid:colorid,
            itemsbrand:itemsbrand, 
            itemstype:itemstype, 
            itemPrice:itemPrice, 
            itemQty:itemQty, 
            itemsales:itemsales, 
            itemscontent:itemscontent, 
            itemsweight:itemsweight, 
            itemsdrive:itemsdrive, 
            itemsfrequency:itemsfrequency, 
            itemsSensitivity:itemsSensitivity,  
            itemsconnect:itemsconnect, 
            itemsmains:itemsmains, 
            itemsEndurance:itemsEndurance, 
            itemswatertight:itemswatertight, 
            itemsfeature:itemsfeature,
            rows:[]
        }
        const sql = "INSERT INTO `items`(`itemName`, `itemImg`, `colorid`, `itemsbrand`, `itemstype`,`itemPrice`, `itemQty`,`itemsales`, `itemstoreNumber`,`itemscontent`, `itemsweight`, `itemsdrive`, `itemsfrequency`, `itemsSensitivity`, `itemsconnect`, `itemsmains`, `itemsEndurance`, `itemswatertight`, `itemsfeature`) VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
        console.log('req.body',[req.body])
        db.query(sql, [itemName, 
            itemImg, 
            colorid, 
            itemsbrand, 
            itemstype,
            itemPrice, 
            itemQty,
            itemsales,
            id ,
            itemscontent, 
            itemsweight, 
            itemsdrive, 
            itemsfrequency, 
            itemsSensitivity, 
            itemsconnect, 
            itemsmains, 
            itemsEndurance, 
            itemswatertight, 
            itemsfeature ])
            .then(([r])=>{
                console.log('result',r)
                output.results = r;
                if(r.affectedRows && r.insertId){
                    output.success = true;
                }
                res.json(output);
            })
    })





module.exports = router;
