// multer 處理檔案上傳
const multer = require('multer');

// uuid 
const {v4: uuidv4 } = require('uuid');
// uuidv4();
// console.log(uuidv4());

const extMap = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
}

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{    // 文件上传路径
        cb(null, __dirname + '/../../client/public/user_img')
    },
    filename: (req, file, cb)=>{        // 文件上传之后名称
        console.log('upload-module-file', file)
        // console.log('upload-module-req', req)
        // console.log('file.mimetype', file.mimetype)
        // cb(null, req.file.originalname)
        
        let ext = extMap[file.mimetype];
        cb(null, Date.now() + ext)

        // cb(null, file.originalname)

        // if(ext) {
        //     // console.log(uuidv4()+ext)
        //     cb(null, uuidv4()+ext);
        // }else {
        //     cd(new Error('无副档名'));
        // }
        
    }
});

// fileFilter是處理檔案類型
// 如果傳5個檔案，則這邊會被呼叫5次，req被呼叫5次都是同一個req，file一次接一個，不在規則內就過濾掉。
const fileFilter = (req, file, cb)=>{
    // !!將後面的東西轉換成布林值
    // 下面表示如果file的mime type沒有在extMap裡面，則不通過。
    cb(null, !!extMap[file.mimetype]);
}

const upload = multer({storage, fileFilter});
// upload.none() ===> 僅接受文本字段
// encoding	文件的編碼類型

module.exports = upload;