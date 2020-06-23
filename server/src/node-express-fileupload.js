const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

// enable files upload
// 啟動檔案上傳
app.use(fileUpload({
    createParentPath: true
}));

// 加入其它的middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//讓uploads目錄公開
// https://expressjs.com/zh-tw/starter/static-files.html
//app.use(express.static('uploads'));
// 如果想要改網址路徑用下面的
// 您可以透過 /static 路徑字首，來載入 uploads 目錄中的檔案。
app.use('/avatar', express.static('uploads'));

// 單檔上傳測試
/*--------------------------*/
app.post('/upload-avatar', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //使用輸入框的名稱來獲取上傳檔案 (例如 "avatar")
            let avatar = req.files.avatar;
            
            //使用 mv() 方法來移動上傳檔案到要放置的目錄裡 (例如 "uploads")
            avatar.mv('./uploads/' + avatar.name);

            //送出回應
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
/*--------------------------*/

    // 多檔上傳測試
    /*--------------------------*/
    app.post('/upload-photos', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let data = []; 
    
            //loop all files
            _.forEach(_.keysIn(req.files.photos), (key) => {
                let photo = req.files.photos[key];
                
                //move photo to uploads directory
                photo.mv('./uploads/' + photo.name);

                //push file details
                data.push({
                    name: photo.name,
                    mimetype: photo.mimetype,
                    size: photo.size
                });
            });
    
            //return response
            res.send({
                status: true,
                message: 'Files are uploaded',
                data: data
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
/*--------------------------*/

//啟動，預設3000埠
const port = process.env.PORT || 3008;

app.listen(port, () => 
    console.log(`App is listening on port ${port}.`)
);