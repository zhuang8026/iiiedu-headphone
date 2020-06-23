const express = require('express');
const db = require(__dirname + '/db_connect');

const router = express.Router();


router.get('/likes', (req, res)=>{
    let user_id = 1;

    const sql = `SELECT * FROM myfav WHERE user_id=${user_id} ORDER BY created_at DESC`;
    db.query(sql)
    .then(([r])=>{
        res.json(r);
    })



})
module.exports = router;
