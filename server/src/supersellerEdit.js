const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const uploadOne = require(__dirname + '/suppersellerUpload');
// const uploadMore = require(__dirname + '/suppersellerUploadMore'); // 多圖上傳失敗

const router = express.Router();

var multer = require('multer')

router.get('/', (req, res)=>{
    res.send('超級賣家修改 api')
});

// 賣家 商品
// http://localhost:3009/supersellerEdit/sellerProduct
router.post("/sellerProduct", upload.none(), (req, res) => {
    // console.log('========== react(get) -> (個人)所有訂單 ==========') 
    let id = req.body.id;
    let sql =  `SELECT *,users.id, users.username, users.name, users.shopopen 
                FROM 
                    items 
                LEFT JOIN 
                    users 
                ON 
                    items.itemstoreNumber = users.id 
                LEFT JOIN 
                    items_type 
                ON 
                    items_type.typeid = items.itemstype 
                WHERE 
                    users.isActivated = 1 
                AND 
                    users.shopopen = 1 
                AND 
                    users.id = ?`;
    db.query(sql, [id])
        .then(results => {
            res.json(results[0])
        })
});

// 賣家 訂單
// http://localhost:3009/supersellerEdit/sellerOrder
router.post("/sellerOrder", upload.none(), (req, res) => {
    let id = req.body.id;
    let username = req.body.username;

    let sql =  `SELECT *
                    FROM orders
                    LEFT JOIN 
                        (SELECT users.id, users.username, users.name FROM users WHERE users.isActivated=1 AND users.shopopen=1 AND users.id = ?) AS user 
                    ON 
                        orders.userId = user.id 
                    LEFT JOIN 
                        payment_types AS pay
                    ON 
                        pay.payment = orders.deliveryState
                    INNER JOIN  
                        order_details AS details
                    ON 
                        details.orderId = orders.orderId
                    WHERE
                        user.username = ?`;
    db.query(sql, [id, username])
        .then(results => {
            // console.log(results[0])
            // for(let i of results[0]){
            //     i.created_at = moment(i.created_at).format('YYYY-MM-DD');
            // }
            res.json(results[0])
        })
});

// 賣家商品 刪除
// http://localhost:3009/supersellerEdit/sellerDelete
router.post('/sellerDelete', upload.none(), (req, res)=>{ 
// router.post('/edit', upload.none(), (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    const output = {
        success: false,
    }
    let id = req.body.id;

    const sql = "DELETE FROM `items` WHERE itemId=?"; 
    // console.log(id);
    db.query(sql, [id])                   
        .then(([results])=>{
            // console.log(results);
            output.results = results;
            if(results.affectedRows){
                output.success = true;
            }
            // console.log(output);
            res.json(output);
        })

})

// 賣家 我的錢包
// http://localhost:3009/supersellerEdit/sellerWallet
router.post("/sellerWallet", upload.none(), (req, res) => {
    let id = req.body.id;
    // let username = req.body.username;

    // let sql =  `SELECT *
    //                 FROM orders
    //                 LEFT JOIN 
    //                     (SELECT users.id, users.username, users.name FROM users WHERE users.isActivated=1 AND users.shopopen=1 AND users.id = ?) AS user 
    //                 ON 
    //                     orders.userId = user.id 
    //                 LEFT JOIN 
    //                     paymentstate_types
    //                 ON 
    //                     paymentstate_types.paymentState = orders.paymentState
    //                 LEFT JOIN 
    //                     payment_types AS pay
    //                 ON 
    //                     pay.payment = orders.deliveryState
    //                 LEFT JOIN 
    //                     delivery_types
    //                 ON
    //                     delivery_types.delivery = orders.delivery
    //                 INNER JOIN  
    //                     order_details AS details
    //                 ON 
    //                     details.orderId = orders.orderId
    //                 WHERE
    //                     user.username = ?
    //                 AND
    //                     paymentstate_types.paymentState = 2`;
    let sql =  `SELECT *
                FROM 
                    order_details
                INNER JOIN 
                    items
                ON 
                    order_details.itemId = items.itemId
                INNER JOIN 
                    orders
                ON 
                    order_details.orderId = orders.orderId
                INNER JOIN
                    payment_types
                ON 
                    payment_types.payment = orders.payment
                INNER JOIN
                    delivery_types
                ON 
                    delivery_types.delivery = orders.delivery
                INNER JOIN 
                    deliverystate_types
                ON 
                    deliverystate_types.deliveryState = orders.deliveryState
                INNER JOIN 
                    paymentstate_types
                ON 
                    paymentstate_types.paymentState = orders.paymentState
                INNER JOIN 
                    users
                ON 
                    users.id = items.itemstoreNumber
                WHERE 
                    users.id =?
                AND
                    paymentstate_types.paymentState = 2
                ORDER BY 
                orders.orderId ASC`;
    db.query(sql, [id])
        .then(results => {
            // console.log(results)
            for(let i of results[0]){
                i.created_at = moment(i.created_at).format('YYYY-MM-DD');
            }
            res.json(results[0])
        })
});

// 賣家 我的錢包 時間查找
// http://localhost:3009/supersellerEdit/sellerWalletData
router.post("/sellerWalletData", upload.none(), (req, res) => {
    let id = req.body.id;
    let username = req.body.username;
    let years = req.body.years;
    let months = req.body.months;

    let sql =  `SELECT *
                    FROM orders
                    LEFT JOIN 
                        (SELECT users.id, users.username, users.name FROM users WHERE users.isActivated=1 AND users.shopopen=1 AND users.id = ?) AS user 
                    ON 
                        orders.userId = user.id 
                    LEFT JOIN 
                        paymentstate_types
                    ON 
                        paymentstate_types.paymentState = orders.paymentState
                    LEFT JOIN 
                        payment_types AS pay
                    ON 
                        pay.payment = orders.deliveryState
                    LEFT JOIN 
                        delivery_types
                    ON
                        delivery_types.delivery = orders.delivery
                    INNER JOIN  
                        order_details AS details
                    ON 
                        details.orderId = orders.orderId
                    WHERE
                        user.username = ?
                    AND
                        paymentstate_types.paymentState = 2
                    AND
                        YEAR(details.created_at)= ? 
                    AND 
                        MONTH(details.created_at)= ? `;
    db.query(sql, [id, username, years, months])
        .then(results => {
            // console.log(results)
            for(let i of results[0]){
                i.created_at = moment(i.created_at).format('YYYY-MM-DD');
            }
            res.json(results[0])
        })
});


// 測試  ok  可使用 圖片上傳 - 20200625 / 會員圖片 修改 
// http://localhost:3009/supersellerEdit/upload
// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
router.post('/upload',function(req, res) {
    uploadOne(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
        // return res.status(200).send(req.file)
        return res.status(200).json(req.file)
    })
});


// 產品 多圖上傳 api - 失敗
// router.post('/uploadMore',function(req, res) {
//     uploadMore(req, res, function (err) {
//             if (err instanceof multer.MulterError) {
//                 return res.status(500).json(err)
//             } else if (err) {
//                 return res.status(500).json(err)
//             }
//         // return res.status(200).send(req.file)
//         return res.status(200).json(req.file)
//     })
// });

module.exports = router;
