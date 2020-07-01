const multer = require('multer');

const {v4: uuidv4 } = require('uuid');

console.log(uuidv4());

// 自訂檔案類型規則
const extMap = {
    'image/jpg': '.jpg',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
}   

// storage是處理儲存區
const storage = multer.diskStorage({
    // cb是callback function
    destination : (req, file, cb)=>{
        cb(null, __dirname + '/../public/blogs_img/')
    },
    filename: (req, files, cb)=>{
        //使用uuid
        let ext = extMap[files.mimetype];
        // let filename = uuidv4() + ext;
        cb(null, files.originalname)

        // cb(null, req.file.originalname)
        // cb(null, filename)
    }
});

// fileFilter是處理檔案類型
// 如果傳5個檔案，則這邊會被呼叫5次，req被呼叫5次都是同一個req，file一次接一個，不在規則內就過濾掉。
let fileFilter = (req, file, cb)=>{
    // !!將後面的東西轉換成布林值
    // 下面表示如果file的mime type沒有在extMap裡面，則不通過。
    cb(null, !!extMap[file.mimetype]);
    };

const upload = multer({storage, fileFilter});

module.exports = upload;




