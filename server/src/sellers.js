const express = require('express');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const router = express.Router();

//http://localhost:3009/sellers/
router.get('/', (req, res)=>{
    res.send('seller')
});

//http://localhost:3009/sellers/list
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
    console.log(output);
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
//所有資料
router.get('/list',(req,res)=>{
    const sql = "SELECT *, SUM(`orders`.`delivery`='已送達') AS delivery_arrived, SUM(`orders`.`delivery`='未出貨') AS unsent,SUM(`orders`.`delivery`='配送中') AS sending FROM orders GROUP BY`orders`.`delivery`";
    db.query(sql)
    .then((result)=>{
        console.log(result)
        res.json(result[0]);
});
})
//http://localhost:3009/sellers/my-sale

//http://localhost:3009/sellers/order
//http://localhost:3009/sellers/refund

//http://localhost:3009/sellers/seller-product/detail/:id
router.get("/seller-product/detail/:id?", (req, res) => {
    // console.log(req.params.id);
    let id = req.params.id;
    let sql = `SELECT *,users.id,users.username,users.name,users.shopopen FROM items LEFT JOIN users ON items.itemstoreNumber=users.id WHERE users.isActivated=1 AND users.shopopen=1 AND users.id =${id}`;
    let output = {}
    db.query(sql)
        .then(results =>{
            // if (error) throw error;
            // console.log(results);
            output.results = results;
            console.log(results[0])
            res.json(results[0])
        });
    });
//http://localhost:3009/sellers/seller-account

//http://localhost:3009/sellers/add-product
router.post('/add-product',upload.none(),(req,res)=>{
        let itemName = req.body.itemName;
        let colorid = req.body.colorid;
        let itemsbrand = req.body.itemsbrand;
        let itemstype = req.body.itemstype;
        let itemPrice = req.body.itemPrice;
        let i=itemQty = req.body.itemQty;
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
            itemsfeature:itemsfeature
        }
        const sql = "`INSERT INTO `items`(`itemName`, `itemImg`, `colorid`, `itemsbrand`, `itemstype`,`itemPrice`, `itemQty`,`itemsales`, `itemscontent`, `itemsweight`, `itemsdrive`, `itemsfrequency`, `itemsSensitivity`, `itemsconnect`, `itemsmains`, `itemsEndurance`, `itemswatertight`, `itemsfeature`) VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; 
        console.log('req.body',[req.body])
        db.query(sql, [itemName, 
            itemImg, 
            colorid, 
            itemsbrand, 
            itemstype,
            itemPrice, 
            itemQty,
            itemsales, 
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
                console.log('result',result)
                output.results = result;
                if(result.affectedRows && r.insertId){
                    output.success = true;
                }
                res.json(output);
            })
    })





module.exports = router;
