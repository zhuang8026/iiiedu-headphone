const express = require('express');
const fileUpload = require('express-fileupload');
const upload = require(__dirname + '/upload-module-blogs');
// const upload2 = require(__dirname + '/upload');
const moment = require('moment-timezone');
const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);
const multer = require('multer');
const db = require(__dirname + '/db_connect');
// const cors = require('cors');
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

// blogAdd
// app.use('/blogAdd', require(__dirname+'/blogAdd.js'));

// 搜尋所有文章(分頁)的function
const getSearchAllList = async (req) => {
    // 給資料的部分可改成接req.body的資料           
    let searchInput = '%9%';                          // 給字串
    let searchSort = req.body.searchSort;             // 給排序方式
    let searchOrder = req.body.searchOrder;           // 給正逆向
    let page = req.body.page;                         // 給當前頁
    let perPage = parseInt(req.body.perPage) || 12;   // 給每頁幾筆    
    // let page = parseInt(req.params.page) || 1;
    const output = {
        searchInput: searchInput,    // 字串
        searchSort: searchSort,      // 排序方式
        searchOrder: searchOrder,    // 正逆向
        page: page,                  // 當前頁 
        perPage: perPage,            // 每頁幾筆
        totalRows: 0,                // 總共有幾筆資料
        totalPages: 0,               // 總共有幾頁
        rows: []                     // 資料 
    }
    //設變數，toCount給計算頁數的sql用，toSearch給找出當頁的sql用。
    let toCount = `SELECT COUNT(1) num FROM blogs`;
    let toSearch = `SELECT * FROM blogs`;
    //分別加上LIKE搜尋    
    // toCount += ` WHERE blogTitle LIKE '%耳機%' OR blogContent01 LIKE '%耳機%' OR blogContent02 LIKE '%耳機%'`;
    // toSearch += ` WHERE blogTitle LIKE '%耳機%' OR blogContent01 LIKE '%耳機%' OR blogContent02 LIKE '%耳機%'`;
    //依case加上ORDER BY
    if (searchSort) {
        switch (searchSort) {
            case '依發文日期':
                toCount += " ORDER BY blogPublishDate";
                toSearch += " ORDER BY blogPublishDate";
                break;
            case '依修改日期':
                toCount += " ORDER BY blogUpdateDate";
                toSearch += " ORDER BY blogUpdateDate";
                break;
            case '依部落格編號':
                toCount += " ORDER BY blogId";
                toSearch += " ORDER BY blogId";
                break;
            case '依作者':
                toCount += " ORDER BY id";
                toSearch += " ORDER BY id";
                break;
            default:
                break;
        }
    }
    // 依case加上ASC/DESC
    if (searchOrder) {
        switch (searchOrder) {
            case 'ASC':
                toCount += " ASC";
                toSearch += " ASC";
                break;
            case 'DESC':
                toCount += " DESC";
                toSearch += " DESC";
                break;
            default:
                break;
        }
    }
    // 取出sql符合的總共有幾筆
    const [r1] = await db.query(toCount);
    // 算資料給output
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    // 加上當前頁的LIMIT
    toSearch += ` LIMIT ${(page - 1) * perPage}, ${perPage}`;
    // 丟給sql去取出當前頁的資料
    const sql = toSearch;
    const [r2] = await db.query(sql);
    if (r2) output.rows = r2;
    // console.log(output)
    // 將r2裡的Date改成正常時間格式
    for (let i of r2) {
        // 要先放到moment才能使用.format('YYYY-MM-DD')
        i.blogExpectedTime = moment(i.blogExpectedTime).format('DD-YY-MM');
        i.blogPublishTime = moment(i.blogPublishTime).format('DD-YY-MM');
        i.blogUpdateTime = moment(i.blogUpdateTime).format('DD-YY-MM');
    }
    return output;
};

// 搜尋(個人)所有文章(分頁)的function
const getSearchUserList = async (req) => {
    // 給資料的部分可改成接req.body的資料
    let id = req.body.id;                             // 給id
    let searchInput = '%9%';                          // 給字串
    let searchSort = req.body.searchSort;             // 給排序方式
    let searchOrder = req.body.searchOrder;           // 給正逆向
    let page = req.body.page;                         // 給當前頁
    let perPage = parseInt(req.body.perPage) || 12;   // 給每頁幾筆    
    // let page = parseInt(req.params.page) || 1;
    const output = {
        id: id,                      // id
        searchInput: searchInput,    // 字串
        searchSort: searchSort,      // 排序方式
        searchOrder: searchOrder,    // 正逆向
        page: page,                  // 當前頁 
        perPage: perPage,            // 每頁幾筆
        totalRows: 0,                // 總共有幾筆資料
        totalPages: 0,               // 總共有幾頁
        rows: []                     // 資料 
    }
    //設變數，toCount給計算頁數的sql用，toSearch給找出當頁的sql用。
    let toCount = `SELECT COUNT(1) num FROM blogs WHERE id='${id}'`;
    let toSearch = `SELECT * FROM blogs WHERE id='${id}'`;
    //分別加上LIKE搜尋    
    // toCount += ` WHERE blogTitle LIKE '%9%' OR blogContent01 LIKE '%9%' OR blogContent02 LIKE '%9%'`;
    // toSearch += ` WHERE blogTitle LIKE '%9%' OR blogContent01 LIKE '%9%' OR blogContent02 LIKE '%9%'`;
    //依case加上ORDER BY
    if (searchSort) {
        switch (searchSort) {
            case '依發文日期':
                toCount += " ORDER BY blogPublishDate";
                toSearch += " ORDER BY blogPublishDate";
                break;
            case '依修改日期':
                toCount += " ORDER BY blogUpdateDate";
                toSearch += " ORDER BY blogUpdateDate";
                break;
            case '依部落格編號':
                toCount += " ORDER BY blogId";
                toSearch += " ORDER BY blogId";
                break;
            default:
                break;
        }
    }
    // 依case加上ASC/DESC
    if (searchOrder) {
        switch (searchOrder) {
            case 'ASC':
                toCount += " ASC";
                toSearch += " ASC";
                break;
            case 'DESC':
                toCount += " DESC";
                toSearch += " DESC";
                break;
            default:
                break;
        }
    }
    // 取出sql符合的總共有幾筆
    const [r1] = await db.query(toCount);
    // 算資料給output
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    // 加上當前頁的LIMIT
    toSearch += ` LIMIT ${(page - 1) * perPage}, ${perPage}`;
    // 丟給sql去取出當前頁的資料
    const sql = toSearch;
    const [r2] = await db.query(sql);
    if (r2) output.rows = r2;
    // console.log(output)
    // 將r2裡的Date改成正常時間格式
    for (let i of r2) {
        // 要先放到moment才能使用.format('YYYY-MM-DD')
        i.blogExpectedTime = moment(i.blogExpectedTime).format('DD-YY-MM');
        i.blogPublishTime = moment(i.blogPublishTime).format('DD-YY-MM');
        i.blogUpdateTime = moment(i.blogUpdateTime).format('DD-YY-MM');
    }
    return output;
};

// 搜尋回文的function
const get_r_List = async (req) => {             
    let blogId = req.body.blogId;                              
    const output = {
        blogId:blogId,
        rows: []                     
    }
    //設變數
    let _r = `SELECT * FROM blogs_reply WHERE blogId=${blogId} ORDER BY b_r_date DESC`;        
    // 取出sql符合的rows
    const [r1] = await db.query(_r);            
    if (r1) output.rows = r1;
    // console.log(output)
    // 將r2裡的Date改成正常時間格式
    // for (let i of r2) {
    //     // 要先放到moment才能使用.format('YYYY-MM-DD')
    //     i.blogExpectedTime = moment(i.blogExpectedTime).format('DD-YY-MM');
    //     i.blogPublishTime = moment(i.blogPublishTime).format('DD-YY-MM');
    //     i.blogUpdateTime = moment(i.blogUpdateTime).format('DD-YY-MM');
    // }
    return output;
};

//================================================== blog root ==============================================================
// http://localhost:3009/blog
router.get('/', (req, res) => {
    res.send('blog root');
});

//================================================== blogAdd ==============================================================
// (測試ok)
// 新增部落格文章
// http://localhost:3009/blog/add
// router.get('/add', (req, res)=>{
router.post('/add', upload.none(), (req, res) => {
    let id = req.body.id;
    let blogTitle = req.body.blogTitle;
    let blogContent01 = req.body.blogContent01;
    let blogContent02 = req.body.blogContent02;
    const output = {
        success: false,
        id: id,
        blogTitle: blogTitle,
        blogContent01: blogContent01,
        blogContent02: blogContent02,
        rows: []
    }
    const sql = "INSERT INTO `blogs`(`id`,`blogTitle`,`blogContent01`,`blogContent02`) VALUES (?, ?, ?, ?)";
    console.log('========== react(post)id和文章 -> 新增部落格文章 ==========')
    console.log('req.body = ', req.body)
    db.query(sql, [id, blogTitle, blogContent01, blogContent02])
        .then(([r]) => {
            output.results = r;
            if (r.affectedRows && r.insertId) {
                output.success = true;
            }
            res.json(output);
        })
    // res.json(req.body);
})

//================================================== blogDelete ==============================================================
// (測試ok)
// 刪除部落格文章
// http://localhost:3009/blog/del/(部落格編號)
router.post('/del/', async (req, res) => {
    // 找檔頭裡面有沒有'Referer'，就是有沒有從哪裡來
    // let referer = req.get('Referer'); 
    let referer = 1;
    let id = req.body.id;
    let blogId = req.body.blogId;

    const sql = `DELETE FROM blogs WHERE blogId=${blogId}`;
    db.query(sql, [req.params.blogId])
        .then(([r]) => {

        })
})

//================================================== blogEdit ==============================================================
// (測試ok)
// 編輯部落格文章
// http://localhost:3009/blog/edit/
// 提交表單才要改成PUT
router.post('/edit/', upload.none(), (req, res) => {
    const output = {
        success: false,
        body: req.body
    }

    // let blogId = parseInt(req.body.blogId);
    let blogId = req.body.blogId;
    let editBlogTitle = req.body.editBlogTitle;
    let editBlogContent01 = req.body.editBlogContent01;
    let editBlogContent02 = req.body.editBlogContent02;
    console.log('更新的blogId ----> ', blogId);
    const sql = "UPDATE `blogs` SET `blogTitle`=?, `blogContent01`=?, `blogContent02`=? WHERE `blogId`=?";

    if (!blogId) {
        output.error = '沒有主鍵';
        return res.json(output);
    }
    // const sql = "UPDATE `blogs` SET ? WHERE blogId=?";
    // 把req.body.blogId刪掉，但宣告的blogId還存在
    delete req.body.blogId;
    db.query(sql, [editBlogTitle, editBlogContent01, editBlogContent02, blogId])
        .then(([r]) => {
            output.results = r;
            if (r.affectedRows && r.changedRows) {
                output.success = true;
            }
            res.json(output);
        })
})

//================================================== blogSearch ==============================================================
// (測試ok)
// 搜尋所有文章(分頁)
// http://localhost:3009/blog/searchAllBlog/
router.post('/searchAllBlog/', async (req, res) => {
    const output = await getSearchAllList(req);
    res.json(output);
})
// (測試ok)
// 搜尋(個人)所有文章(分頁)
// http://localhost:3009/blog/searchUserBlog/
router.post('/searchUserBlog/', async (req, res) => {
    const output = await getSearchUserList(req);
    res.json(output);
})

//================================================== blogId取文章 ==============================================================
// (測試ok)
// 搜尋(個人)所有文章(分頁)
// http://localhost:3009/blog/getDetail/
router.post('/getDetail/', async (req, res) => {
    const output = {
        success: false,
        body: req.body
    }
    let blogId = req.body.blogId;
    console.log('blogId -> ', blogId)
    if (!blogId) {
        output.error = '沒有主鍵';
        return res.json(output);
    }
    const sql = `SELECT * FROM blogs WHERE blogID=${blogId}`;

    db.query(sql)
        .then(([r]) => {
            output.results = r;
            if (r.affectedRows && r.changedRows) {
                output.success = true;
            }
            res.json(output);
        })

    // const output = await getSearchUserList(req);    
    // res.json(output);
})


//================================================== 圖片上傳 ==============================================================
// (可上傳)



// 上傳檔案
// http://localhost:3009/blog/try-upload/
router.post('/try-upload/', upload.single('avatar'), async (req, res) => {
    console.log('========== react(post) 圖片 -> 上傳檔案 ==========')
    console.log('req.file = ', req.file.filename)
    res.json({
        filename: req.file.filename,
        body: req.body
    });

})

//================================================== 部落格回文 ==============================================================

// (未測試)
// 部落格回文
// http://localhost:3009/blog/add-reply
// router.get('/add', (req, res)=>{
router.post('/add-reply', upload.none(), (req, res) => {
    let blogId = req.body.blogId;
    let id = 0;
    let r_nick = '訪客';
    let b_r_content = req.body.b_r_content;
    let b_r_replys = 0;
    const output = {
        success: false,
        blogId: blogId,
        id: id,
        r_nick: r_nick,
        b_r_content: b_r_content,
        b_r_replys: b_r_replys,
        rows: []
    }
    const sql = "INSERT INTO `blogs_reply`(`blogId`,`id`,`r_nick`,`b_r_content`,`b_r_replys`) VALUES (?, ?, ?, ?, ?)";
    console.log('========== react(post) -> 部落格回文 ==========')
    console.log('req.body = ', req.body)
    db.query(sql, [blogId, id, r_nick, b_r_content, b_r_replys])
        .then(([r]) => {
            output.results = r;
            output.success = true;
            res.send(output);
        })
})

// 搜尋回文
// http://localhost:3009/blog/list_reply/
router.post('/list_reply/', async (req, res) => {
    const output = await get_r_List(req);
    res.json(output);
})

//================================================== 測試區 ==============================================================


router.post('/try-post', (req, res) => {
    req.body.contentType = req.get('Content-Type'); // 取得檔頭  
    req.body.pageTitle = '測試表單-Json'
    req.body.txt = '測試一下'
    res.json(req.body)
})


//================================================================================================================
module.exports = router;
