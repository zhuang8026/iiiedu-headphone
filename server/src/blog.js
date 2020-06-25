const express = require('express');
const fileUpload = require('express-fileupload');
const upload = require(__dirname + '/upload-module');
const moment = require('moment-timezone');
const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);
const multer = require('multer');
const db = require(__dirname + '/db_connect');
const cors = require('cors');
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
app.use(cors());
app.use('/avatar', express.static('uploads'));

// blogAdd
// app.use('/blogAdd', require(__dirname+'/blogAdd.js'));

//================================================== session ==============================================================
// (未完成)
// app.use('/my',require(__dirname + '/admins/admin2'));



router.get('/try-session', (req, res) => {
    req.session.my_var = req.session.my_var || 0;
    req.session.my_var++;

    res.json({
        my_var: req.session.my_var,
        session: req.session
    })
})

//================================================== blog root ==============================================================
// http://localhost:3009/blog
router.get('/', (req, res) => {
    res.send('blog root => 請輸入您要的url');
});

//================================================== blogList ==============================================================
// (測試ok)

// 所有文章(分頁)的function
const getAllBlogList = async (req) => {
    const perPage = 12;
    let page = parseInt(req.params.page) || 1;
    const output = {
        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    const [r1] = await db.query(`SELECT COUNT(1) num FROM blogs`);

    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    const sql = `SELECT * FROM blogs ORDER BY blogId LIMIT ${(page - 1) * perPage}, ${perPage}`
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

// (個人)所有文章(分頁)的function
const getUserBlogList = async (req) => {
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
    const [r1] = await db.query(`SELECT COUNT(1) num FROM blogs WHERE id='${id}'`);
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    const sql = `SELECT * FROM blogs WHERE id=${id} ORDER BY blogId desc LIMIT ${(page - 1) * perPage}, ${perPage}`
    const [r2] = await db.query(sql);
    if (r2) output.rows = r2;
    // 將r2裡的Date改成正常時間格式
    for (let i of r2) {
        // 要先放到moment才能使用.format('YYYY-MM-DD')
        i.blogExpectedTime = moment(i.blogExpectedTime).format('DD-YY-MM');
        i.blogPublishTime = moment(i.blogPublishTime).format('DD-YY-MM');
        i.blogUpdateTime = moment(i.blogUpdateTime).format('DD-YY-MM');
    }
    return output;
};

// 所有文章
// http://localhost:3009/blog/listAllBlog
router.get("/listAllBlog", (req, res) => {
    console.log('========== react(get) -> 所有文章 ==========')
    const sql = `SELECT * FROM blogs ORDER BY blogId desc`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

// 所有文章(分頁)
// http://localhost:3009/blog/listAllBlog/(第幾頁)
router.get('/listAllBlog/:page?', async (req, res) => {
    console.log('========== react(get) -> 所有文章(分頁) ==========')
    const output = await getAllBlogList(req);
    res.json(output);
})

// (個人)所有文章
// http://localhost:3009/blog/listUserBlog/(個人id編號)
router.get("/listUserBlog/:id", (req, res) => {
    console.log('========== react(get) -> (個人)所有文章 ==========')
    let id = req.params.id;
    let sql = `SELECT * FROM blogs WHERE id=${id}`;
    let output = {}
    db.query(sql)
        .then(results => {
            output.results = results;
            res.json(results[0])
            return db.query(sql);
        })
});

// (個人)所有文章(分頁)
// http://localhost:3009/blog/listUserBlog/(個人id編號)/(第幾頁)
router.post('/listUserBlog/:id/:page?', async (req, res) => {
    console.log('========== react(送會員id) -> (個人)所有文章(分頁) ==========')
    console.log('req.body = ', req.body)
    const output = await getUserBlogList(req);
    res.json(output);
})

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
    console.log('========== react(送id和新增文章) -> 新增部落格文章 ==========')
    console.log('req.body = ', [req.body])
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
router.get('/del/:blogId', (req, res) => {
    // 找檔頭裡面有沒有'Referer'，就是有沒有從哪裡來
    // let referer = req.get('Referer'); 
    let referer = 1;
    let blogId = req.params.blogId;
    const sql = `DELETE FROM blogs WHERE blogId=${blogId}`;
    db.query(sql, [req.params.blogId])
        .then(([r]) => {
            res.json(req.params);
            // if(referer){
            //     // 如果有則回到原本那一頁
            //     res.redirect(referer)
            // } else {
            //     // 如果沒有則回到第一頁
            //     // res.redirect('/address-book/list')
            // }
        })
})

//================================================== blogEdit ==============================================================
// (測試ok)
// 編輯部落格文章
// http://localhost:3009/blog/edit/(部落格編號)
// 提交表單才要改成PUT
router.post('/edit/:blogId', upload.none(), (req, res) => {
    const output = {
        success: false,
        body: req.body
    }

    // let blogId = parseInt(req.body.blogId);
    let blogId = req.params.blogId;

    let editBlogTitle = req.body.editBlogTitle;
    let editBlogContent01 = req.body.editBlogContent01;
    let editBlogContent02 = req.body.editBlogContent02;

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
// (半完成)
// 搜尋所有文章(分頁)的function
const getSearchAllList = async (req) => {
    // 給資料的部分可改成接req.body的資料
    const searchInput = '%9%';  // 給字串
    const searchSort = '4';     // 給排序方式
    const searchOrder = '2';    // 給正逆向
    const perPage = 20;         // 給每頁幾筆
    let page = 1;               // 給當前頁
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
    toCount += ` WHERE id LIKE '%9%' OR blogTitle LIKE '%9%' OR blogContent01 LIKE '%9%'`;
    toSearch += ` WHERE id LIKE '%9%' OR blogTitle LIKE '%9%' OR blogContent01 LIKE '%9%'`;
    //依case加上ORDER BY
    if (searchSort) {
        switch (searchSort) {
            case '1':
                toCount += " ORDER BY blogExpectedDate";
                toSearch += " ORDER BY blogExpectedDate";
                break;
            case '2':
                toCount += " ORDER BY blogPublishDate";
                toSearch += " ORDER BY blogPublishDate";
                break;
            case '3':
                toCount += " ORDER BY blogUpdateDate";
                toSearch += " ORDER BY blogUpdateDate";
                break;
            case '4':
                toCount += " ORDER BY blogId";
                toSearch += " ORDER BY blogId";
                break;
            case '5':
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
            case '1':
                toCount += " ASC";
                toSearch += " ASC";
                break;
            case '2':
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
    console.log(output)
    // 將r2裡的Date改成正常時間格式
    for (let i of r2) {
        // 要先放到moment才能使用.format('YYYY-MM-DD')
        i.blogExpectedTime = moment(i.blogExpectedTime).format('DD-YY-MM');
        i.blogPublishTime = moment(i.blogPublishTime).format('DD-YY-MM');
        i.blogUpdateTime = moment(i.blogUpdateTime).format('DD-YY-MM');
    }
    return output;
};


// 搜尋所有文章(分頁)
// http://localhost:3009/blog/searchAllBlog/
router.get('/searchAllBlog/', async (req, res) => {
    const output = await getSearchAllList(req);
    res.json(output);
})


//================================================== 圖片上傳 ==============================================================
// (未完成)

const doUpload = async (req) => {
    const extMap = {
        'image/jpeg': '.jpg',
        'image/jpg': '.jpg',
        'image/png': '.png',
        'image/gif': '.gif',
    }


    // storage是處理儲存區
    const storage = multer.diskStorage({
        // cb是callback function
        destination: (req, file, cb) => {
            cb(null, __dirname + '/../../client/public/user_img')
        },
        filename: (req, file, cb) => {
            //使用uuid
            let ext = extMap[file.mimetype];
            // 檔名 + ext(副檔名);
            cb(null, file.originalname +'-'+ Date.now() + ext)

            // cb(null, req.file.originalname)
            // cb(null, filename)
        }
    });

    // fileFilter是處理檔案類型
    // 如果傳5個檔案，則這邊會被呼叫5次，req被呼叫5次都是同一個req，file一次接一個，不在規則內就過濾掉。
    let fileFilter = (req, file, cb) => {
        // !!將後面的東西轉換成布林值
        // 下面表示如果file的mime type沒有在extMap裡面，則不通過。
        cb(null, !!extMap[file.mimetype]);
    };

    const upload = multer({ storage, fileFilter });

    return upload;
}

// 搜尋所有文章(分頁)
// http://localhost:3009/blog/try-upload/
router.post('/try-upload/', upload.single('avatar'), async (req, res) => {
    const output = await doUpload(req);
    res.json(output);
    // res.json({
    //     filename: req.file.filename,
    //     body: req.body
    // });
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
