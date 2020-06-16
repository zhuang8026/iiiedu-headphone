const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('產品列表')
});


const getDataList = async (req)=>{ 
    const perPage = 5;
    let page = parseInt(req.params.page) || 1;

    const output = {
        // page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    console.log(output);
    const [r1] = await db.query("SELECT COUNT(1) num FROM `items`");
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows/perPage);
    // if(page < 1) page=1;
    // if(page > output.totalPages) page=output.totalPages;
    // if( output.totalPages===0) page=0;
    output.page = page;

    if(! output.page) output;
    
    // const sql = `SELECT * FROM items LIMIT ${(page-1)*perPage}, ${perPage}`;
    // const [r2] = await db.query(sql);
    // if(r2) output.rows = r2;
    // for(let i of r2){
    //     i.created_at = moment(i.created_at).format('YYYY-MM-DD');
    // }
    return output;
};

router.get('/products/:page?', async (req, res)=>{
    const output = await getDataList(req);
    // output.baseUrl = req.baseUrl;
    // console.log(output.baseUrl);
    console.log(req);

    // if(req.session.adminWill){
    //     res.render('address-book/list.ejs', output);
    // } else {
    //     res.render('address-book/list-no-admin.ejs', output);
    // }
})

// 呼叫 api 
router.get('/products/api/:page?', async (req, res)=>{
    console.log(req);
    const output = await getDataList(req);
    // res.json(output);
})


module.exports = router;