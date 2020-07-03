const express = require('express');
// const MysqlStore = require('express-mysql-session')(session);
// const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const moment =require('moment-timezone')
const cors = require('cors');
// const fs = require('fs');
const router = express.Router();

const upload = require(__dirname + '/upload-module');

// 建立 web server 物件
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//http://localhost:3009/supersellerorder/ 
router.get('/', (req, res)=>{
    res.send('產品列表')
    
});

const getDataList = async (req)=>{ 
    // console.log(req)
    const perPage = 16;
    let page = parseInt(req.params.page) || 1;
    // let typeBrands = req.params.type || '';
    // console.log('page',page)
    // console.log('types',typeBrands)
    const output = {
        // types: typeBrands,
        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    // console.log(output);
    const [r1] = await db.query("SELECT COUNT(1) num FROM `items`");
    // console.log(r1)
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows/perPage);
    if(page < 1) page=1;
    if(page > output.totalPages) page=output.totalPages;
    if( output.totalPages===0) page=0;
    output.page = page;

    if(! output.page) output;

    // const brands = `SELECT * FROM items WHERE itemsbrand=${typeBrands}`;
    // console.log(brands)

    // const sql = `SELECT * FROM items WHERE itemsbrand=${typeBrands} LIMIT ${(page-1)*perPage}, ${perPage}`;
    const sql = `SELECT * FROM items ORDER BY itemName ASC LIMIT ${(page-1)*perPage}, ${perPage}`;
    const [r2] = await db.query(sql);
    if(r2) output.rows = r2;
    for(let i of r2){
        i.created_at = moment(i.created_at).format('YYYY-MM-DD');
    }
    return output;
};


//http://localhost:3009/sellers/
router.get('/', (req, res)=>{
    res.send('seller')
});

//http://localhost:3009/supersellerorder/list
//所有資料
router.get('/list',(req,res)=>{
    const sql = "SELECT *  FROM orders";
    db.query(sql)
    .then((result)=>{
        console.log(result)
        res.json(result[0]);
});
})

//=========haven't tried =====================

// 所有文章(分頁)的function
const getSellerOrderDataList = async (req)=>{ 
    const perPage = 12;
    let page = parseInt(req.params.page) || 1;

    const output = {
        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    // console.log(output);
    const [r1] = await db.query("SELECT COUNT(1) num FROM `orders`");
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows/perPage);
    if(page < 1) page=1;
    if(page > output.totalPages) page=output.totalPages;
    if( output.totalPages===0) page=0;
    output.page = page;

    if(! output.page) output;
    
    const sql = `SELECT * FROM orders ORDER BY orderId LIMIT ${(page-1)*perPage}, ${perPage}`;
    const [r2] = await db.query(sql);
    if(r2) output.rows = r2;
    return output;
};

// (個人)所有文章(分頁)的function
const getSellerIdOrderList = async (req) => {
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
    const [r1] = await db.query(`SELECT COUNT(1) num FROM orders 
    JOIN users 
    ON users.username = orders.username
    WHERE users.id=${id}`);
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    const sql = `SELECT COUNT(1) num FROM orders 
    JOIN users 
    ON users.username = orders.username
    WHERE users.id=${id} ORDER BY itemId desc LIMIT ${(page - 1) * perPage}, ${perPage}`
    const [r2] = await db.query(sql);
    if (r2) output.rows = r2;
    return output;
};

// 所有產品
// http://localhost:3009/superseller/listAllSellerOrder/(第幾頁)
router.get('/listAllSellerOrder/:page?', async (req, res) => {
    // console.log('========== react(get) -> 所有文章(分頁) ==========') 
    const output = await getSellerOrderDataList(req);
    res.json(output);
})

// (個人)所有訂單
// http://localhost:3009/superseller/listSellerUserOrder
router.post("/listSellerUserOrder", upload.none(), (req, res) => {
    // console.log('========== react(get) -> (個人)所有訂單 ==========') 
    let id = req.body.id;
    let sql = `SELECT * FROM orders AS t1 
    JOIN (SELECT users.id,users.username,users.name FROM users WHERE users.isActivated=1 AND users.shopopen=1 AND users.id = ?) AS t2 
    ON t1.username=t2.username 
    JOIN (SELECT payment_types.paymentTypeId,payment_types.paymentTypeName FROM payment_types)AS t3 
    ON t3.paymentTypeId = t1.paymentTypeId
    JOIN (SELECT * FROM items) AS t4
    on t4.itemId = t1.itemsId`;
    let output = []
    db.query(sql, [id])
        .then(results => {
            // console.log(results[0])
            // output.results = results;
            res.json(results[0])
            // return db.query(sql);
        })
});

// (個人)所有商品(分頁)
// http://localhost:3009/superseller/listSellerUserOrder/(個人id編號)/(第幾頁)
router.post('/listSellerUserOrder/:id/:page?', async (req, res) => {    
    // console.log('========== react(送會員id) -> (個人)所有文章(分頁) ==========')
    // console.log('req.body = ',req.body)
    const output = await getSellerIdOrderList(req);
    res.json(output);
})

// (個人)所有商品
// http://localhost:3009/superseller/listSellerUserProduct
router.post("/listSellerUserProduct", upload.none(), (req, res) => {
    // console.log('========== react(get) -> (個人)所有訂單 ==========') 
    let id = req.body.id;
    let sql = `SELECT *,users.id,users.username,users.name,users.shopopen FROM items LEFT JOIN users ON items.itemstoreNumber=users.id WHERE users.isActivated=1 AND users.shopopen=1 AND users.id =${id}`;
    // let output = []
    db.query(sql, [id])
        .then(results => {
            // console.log(results[0])
            // output.results = results;
            res.json(results[0])
            // return db.query(sql);
        })
});

//http://localhost:3009/superseller/add-product
router.post('/add-product',(req,res)=>{
        let id = req.body.id;
        let itemName = req.body.itemName;
        // let itemImg = req.body.itemImg;
        // let colorid = req.body.colorid;
        let itemsbrand = req.body.itemsbrand;
        let itemstype = req.body.itemstype;
        let itemPrice = req.body.itemPrice;
        let itemQty = req.body.itemQty;
        // let itemsales = req.body.itemsales;
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
            // itemImg:itemImg, 
            // colorid:colorids,
            itemsbrand:itemsbrand,
            itemstype:itemstype, 
            itemPrice:itemPrice, 
            itemQty:itemQty, 
            // itemsales:itemsales, 
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

        const sql = "INSERT INTO `items`(`itemName`,`itemsbrand`,`itemstype`,`itemPrice`, `itemQty`, `itemscontent`, `itemsweight`, `itemsdrive`, `itemsfrequency`, `itemsSensitivity`, `itemsconnect`, `itemsmains`, `itemsEndurance`, `itemswatertight`, `itemsfeature`) VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
        // console.log('req.body',[req.body])
        db.query(sql, [itemName,itemsbrand,itemstype,itemPrice, itemQty,id ,
            itemscontent, itemsweight, itemsdrive, itemsfrequency, 
            itemsSensitivity, itemsconnect, itemsmains, itemsEndurance, 
            itemswatertight, itemsfeature ])
            .then(([r])=>{
                // console.log('result',r)
                output.results = r;
                if(r.affectedRows && r.insertId){
                    output.success = true;
                }
                res.json(output);
            })
    })


module.exports = router; 