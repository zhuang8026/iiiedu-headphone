const express = require('express');
const moment = require('moment-timezone');
const session = require('express-session');   
const MysqlStore = require('express-mysql-session')(session);
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');
const cors = require('cors');
const fs = require('fs'); 


const router = express.Router();

// 建立 web server 物件
const app = express();




// middleware
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());




// blogAdd
// app.use('/blogAdd', require(__dirname+'/blogAdd.js'));




//================================================== session ==============================================================
// (未完成)
// app.use('/my',require(__dirname + '/admins/admin2'));



router.get('/try-session', (req, res)=>{
    req.session.my_var = req.session.my_var || 0;
    req.session.my_var++;

    res.json({
        my_var: req.session.my_var,
        session: req.session
    })
})

//================================================== blog root ==============================================================
// http://localhost:3009/blog
router.get('/', (req, res)=>{ 
    res.send('blog root => 請輸入您要的url');
});

//================================================== blogList ==============================================================
// (測試ok)

// 所有文章(分頁)的function
const getAllBlogList = async (req) => {
    const perPage = 5;
    let page = parseInt(req.params.page) || 1;    
    const output = {
        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    const [r1]= await db.query(`SELECT COUNT(1) num FROM blogs`);
    
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    const sql = `SELECT * FROM blogs ORDER BY blogId desc LIMIT ${(page - 1) * perPage}, ${perPage}`
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

// (個人)所有文章(分頁)的function
const getUserBlogList = async (req) => {
    const perPage = 5;
    let page = parseInt(req.params.page) || 1;
    let id = parseInt(req.params.id);
    const output = {
        id:id,
        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    console.log(id)
    const [r1]= await db.query(`SELECT COUNT(1) num FROM blogs WHERE id=${id}`);
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
    const sql = "SELECT * FROM `blogs`ORDER BY blogId desc";
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

// 所有文章(分頁)
// http://localhost:3009/blog/listAllBlog/(第幾頁)
router.get('/listAllBlog/:page?', async (req, res) => {
    const output = await getAllBlogList(req);
    res.json(output);
})

// (個人)所有文章
// http://localhost:3009/blog/listUserBlog/(個人id編號)
router.get("/listUserBlog/:id", (req, res) => {
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
router.get('/listUserBlog/:id/:page?', async (req, res) => {
    const output = await getUserBlogList(req);
    res.json(output);
})

//================================================== blogAdd ==============================================================
// (測試ok)
// 新增部落格文章
// http://localhost:3009/blog/add
router.get('/add', upload.none(), (req, res)=>{
    const output = {
        success: false
    }
    const sql = "INSERT INTO blogs set ?";
    // 沒有創建時間的input欄位，就直接給它函數方法
    req.body.id = 9999; 
    req.body.blogTitle = 9999 ; 
    req.body.blogContent01 = 9999 ; 
    req.body.blogContent01_img01 = 9999 ;   
    req.body.blogContent02 = 9999 ; 
    req.body.blogContent02_img01 = 9999 ;   
    db.query(sql, [req.body])
        .then(([r])=>{
            output.results = r;
            if(r.affectedRows && r.insertId){
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
router.get('/del/:blogId', (req, res)=>{
    // 找檔頭裡面有沒有'Referer'，就是有沒有從哪裡來
    // let referer = req.get('Referer'); 
    let referer=1;
    let blogId = req.params.blogId;
    const sql = `DELETE FROM blogs WHERE blogId=${blogId}`;
    db.query(sql, [req.params.blogId])
        .then(([r])=>{
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
router.post('/edit/:blogId', upload.none(), (req, res)=>{
    const output = {
        success: false,
        body: req.body
    }
    // let blogId = parseInt(req.body.blogId);
    let blogId = req.params.blogId;
    req.body.blogTitle = 9988 ; 
    if(! blogId){
        output.error = '沒有主鍵';
        return res.json(output);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    }
    const sql = "UPDATE `blogs` SET ? WHERE blogId=?";
    // 把req.body.blogId刪掉，但宣告的blogId還存在
    delete req.body.blogId;
    db.query(sql, [req.body, blogId])
        .then(([r])=>{
            output.results = r;
            
            if(r.affectedRows && r.changedRows){
                output.success = true;
            }
            res.json(output);
        })
})

//================================================== blogSearch ==============================================================
// (未完成)
// 搜尋結果(分頁)的func
const getSearchList = async (req) => {
    const perPage = 5;
    let page = parseInt(req.params.page) || 1;    
    const output = {


        page: page,
        perPage: perPage,
        totalRows: 0, // 總共有幾筆資料
        totalPages: 0, //總共有幾頁
        rows: []
    }
    const [r1]= await db.query(`SELECT COUNT(1) num FROM blogs`);
    
    output.totalRows = r1[0].num;
    output.totalPages = Math.ceil(output.totalRows / perPage);
    if (page < 1) page = 1;
    if (page > output.totalPages) page = output.totalPages;
    if (output.totalPages === 0) page = 0;
    output.page = page;
    if (!output.page) {
        return output;
    }
    const sql = `SELECT * FROM blogs ORDER BY blogId desc LIMIT ${(page - 1) * perPage}, ${perPage}`
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


//================================================== 圖片上傳 ==============================================================
// (未完成)
// 測試upload
app.post('/try-upload', upload.single('avatar'),(req, res)=>{
    console.log(req.file);
    console.log(req.body);
    const output = {
        success: false,
        uploadedImg: '',
        nickname: '',
        errorMsg: ''
    }
    output.nickname = req.body.nickname || '';
    if(req.file && req.file.originalname){
        // 判斷是否為圖檔
        // 下面的寫法，不管是png還是jpeg都會進入fs.rename
        switch(req.file.mimetype){
            case 'image/png':
            case 'image/jpeg':
                // 將檔案搬至公開的資料夾
                fs.rename(req.file.path, './public/img/'+ req.file.originalname, error=>{
                    if(!error){
                        output.success = true;
                        output.uploadedImg = '/img/' + req.file.originalname;
                    }
                    res.render('try-upload', output);
                })
                break;
            default:
                fs.unlink(req.file.path, error=>{
                    output.errorMsg = '檔案類型錯誤'
                    res.render('try-upload', output);
                })  // 刪除暫存檔
        }
    }
    // 上面使用render，send就要拿掉。
    // res.send('ok')
});


//================================================== 測試區 ==============================================================


router.post('/try-post', (req, res)=>{
    req.body.contentType = req.get('Content-Type'); // 取得檔頭  
    req.body.pageTitle = '測試表單-Json'
    req.body.txt='測試一下'
    res.json(req.body)
})


//================================================================================================================
module.exports = router;
