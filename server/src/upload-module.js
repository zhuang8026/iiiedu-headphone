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
        cb(null, __dirname + '/../public/img-uploads')
    },
    filename: (req, file, cb)=>{        // 文件上传之后名称
        // cb(null, req.file.originalname)
        let ext = extMap[file.mimetype];
        if(ext) {
            // console.log(uuidv4()+ext)
            cb(null, uuidv4()+ext);
        }else {
            cd(new Error('无副档名'));
        }
        
    }
});

const fileFilter = (req, file, cb)=>{
    cb(null, !!extMap[file.mimetype]);
}

const upload = multer({storage, fileFilter});
// upload.none() ===> 僅接受文本字段
// encoding	文件的編碼類型

module.exports = upload;