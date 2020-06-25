const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();

//http://localhost:3009/products/ 
router.get('/', (req, res)=>{
    res.send('產品列表')
    
});

const getDataList = async (req)=>{ 
    const perPage = 12;
    let page = parseInt(req.params.page) || 1;

    const output = {
        // page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    // console.log(output);
    const [r1] = await db.query("SELECT COUNT(1) num FROM `items`");
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows/perPage);
    if(page < 1) page=1;
    if(page > output.totalPages) page=output.totalPages;
    if( output.totalPages===0) page=0;
    output.page = page;

    if(! output.page) output;
    
    const sql = `SELECT * FROM items LIMIT ${(page-1)*perPage}, ${perPage}`;
    const [r2] = await db.query(sql);
    if(r2) output.rows = r2;
    for(let i of r2){
        i.created_at = moment(i.created_at).format('YYYY-MM-DD');
    }
    return output;
};


// 所有資料
// http://localhost:3009/products/list
router.get("/list", (req, res) => {
    const sql = "SELECT * FROM `items`";

    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        // console.log(results);
        res.json(results);
    });

});

// 分頁
// http://localhost:3009/products/listpage/1 (Page) ~ ... 
router.get('/listpage/:page?', async (req, res)=>{
    // console.log(req);
    const output = await getDataList(req);
    res.json(output);
})

// 單筆資料
// http://localhost:3009/products/detail/2
router.get("/detail/:id", (req, res) => {
    // console.log(req.params.id);
    let id = req.params.id;
    let sql = `SELECT * FROM items WHERE itemId=${id}`;
    let output = {}
    db.query(sql)
        .then(results =>{
            // if (error) throw error;
            // console.log(results);
            output.results = results;
            let relatedProduct = results[0];
            // console.log(relatedProduct[0])
            res.json(relatedProduct[0])
            // sql = `SELECT * FROM items WHERE product_category = '${relatedProduct.product_category}' AND product_id != ${relatedProduct.product_id}`;
            // console.log(sql)
            // return db.query(sql);
        })
        // .then(results => {
        //     console.log(results)
        //     // output.relatedProducts = results
        //     res.json(output);  
        // })
    });



module.exports = router;