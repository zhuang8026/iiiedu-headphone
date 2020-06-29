// (個人)所有商品
// http://localhost:3009/sellers/listSellerUserProduct
router.post("/listSellerUserProduct", (req, res) => {
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