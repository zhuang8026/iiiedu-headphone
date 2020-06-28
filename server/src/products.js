const express = require('express');
const moment = require('moment-timezone');
// const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();

//http://localhost:3009/products/ 
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

// SELECT `itemsbrand` FROM `items` WHERE 1
// 所有資料
// http://localhost:3009/products/list
router.get("/list/:getname?", (req, res) => {

    console.log('getname:', req.params.getname)
    let getname = req.params.getname;
    let output = [];
    // const sql = `SELECT * FROM items WHERE itemsbrand = ?`;
    const sql = "SELECT * FROM `items`";
    db.query(sql)
    .then((results)=>{
        // console.log(results)
        
        // 
        function strpos(haystack, needle, start) {
            if (typeof(start)==="undefined") {
                start = 0;
            }
            if (!needle) {
                return 0;
            }
            var j = 0;
            for (var i = start; i < haystack.length && j < needle.length; i++) {
                if (haystack.charAt(i) === needle.charAt(j)) {
                    j++;
                } else {
                    j = 0;
                }
            }
            if (j === needle.length) {
                return i - needle.length;
            }
            return -1;
        }

        results[0].forEach((item, index, array)=>{
            // console.log(item['itemName']);
            if(strpos(item['itemName'].toLowerCase(), getname.toLowerCase(), 0) !== -1 ) {
                console.log(item['itemName'])
                // output.push(item['itemName'])
                output.push(item)
            } else {
                console.log(`不符合${index}`)
            }
        })

        // res.json(results[0]);
        res.json(output);
    });
});

// 所有brand
// http://localhost:3009/products/brand
router.get("/brand", (req, res) => {
    const sql = "SELECT `itemsbrand` FROM `items` WHERE 1";
    let output = {}
    let audioTechnica =[]
    let AKG =[]
    let BangOlufsen =[]
    let Final =[]
    let Grado =[]
    let Shure =[]
    let SONY =[]
    let Senheier =[]
    db.query(sql, (error, results, fields) => {
        if (error) throw error;    
        for (let [key, value] of Object.entries(results)) {
            // console.log(`${key}: ${value}`); 
            // console.log(value['itemsbrand']); 
            switch(value['itemsbrand']) {
                case 'audioTechnica':
                    audioTechnica.push(value['itemsbrand']);
                    output.audioTechnica = audioTechnica.length
                break;
                case 'AKG':
                    AKG.push(value['itemsbrand']);
                    output.AKG = AKG.length
                break;
                case 'BangOlufsen':
                    BangOlufsen.push(value['itemsbrand']);
                    output.BangOlufsen = BangOlufsen.length
                break;
                case 'Final':
                    Final.push(value['itemsbrand']);
                    output.Final = Final.length
                break;
                case 'Grado':
                    Grado.push(value['itemsbrand']);
                    output.Grado = Grado.length
                break;
                case 'Shure':
                    Shure.push(value['itemsbrand']);
                    output.Shure = Shure.length
                break;
                case 'SONY':
                    SONY.push(value['itemsbrand']);
                    output.SONY = SONY.length
                break;
                case 'Senheier':
                    Senheier.push(value['itemsbrand']);
                    output.Senheier = Senheier.length
                break;
            }
        }
        res.json(output);
    });

});

// 分頁
// http://localhost:3009/products/listpage/1 (Page) ~ ... 
router.get('/listpage/:page?', async (req, res)=>{
    // console.log(req);
    const output = await getDataList(req);
    // console.log(output)
    res.json(output);
})

// 單筆資料
// http://localhost:3009/products/detail/2
router.get("/detail/:id", (req, res) => {
    // console.log(req.params.id);
    let id = req.params.id;
    // let sql = `SELECT * FROM items WHERE itemId=${id}`;
    let sql = "SELECT * FROM `items` AS `it` INNER JOIN `multiple_images` AS `mu` ON `it`.`itemId` = `mu`.`itemId` WHERE `it`.`itemId`="+id;
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
});


// 點擊 menu 篩選
const getDataListChange = async (req)=>{ 
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
    const [r1] = await db.query("SELECT COUNT(1) num FROM items AS it INNER JOIN multiple_images AS mu ON it.itemId = mu.itemId WHERE it.itemsbrand=?",[req.params.type]);
    // console.log(r1[0])
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
    let sql = `SELECT * FROM items AS it INNER JOIN multiple_images AS mu ON it.itemId = mu.itemId WHERE it.itemsbrand=? ORDER BY itemName ASC LIMIT ${(page-1)*perPage}, ${perPage}`;
    const [r2] = await db.query(sql, [req.params.type]);
    if(r2) output.rows = r2;
    for(let i of r2){
        i.created_at = moment(i.created_at).format('YYYY-MM-DD');
    }
    return output;
};

// http://localhost:3009/products/1/sony 
router.get('/:type?', async (req, res)=>{
    // console.log(req);
    const output = await getDataListChange(req);
    // console.log(output)
    res.json(output);
})




// 點擊 menu 篩選 不使用
// http://localhost:3009/products/shure
// router.get("/:type?", (req, res) => {
//     // let sql = "SELECT * FROM items WHERE itemsbrand=?";
//     let sql = "SELECT * FROM items AS it INNER JOIN multiple_images AS mu ON it.itemId = mu.itemId WHERE it.itemsbrand=?";
//     db.query(sql, [req.params.type])
//         .then((result)=>{
//             // console.log(result)
//             res.json(result[0]);
//         })
// });


module.exports = router;