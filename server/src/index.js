// 引入
const express = require('express'); // es5 // express => npm install --save express 

// 建立 web server 物件
const app = express();

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

// session
const session = require('express-session');                     // npm install express-session
const MysqlStore = require('express-mysql-session')(session);   // npm install express-mysql-session
const db = require(__dirname + '/db_connect');
const sessionStore = new MysqlStore({}, db);

app.use(session({
    saveUninitialized: false,
    resave: false, // 沒變更內容是否強制回存
    // secret = 加密用的字串，透過這個值去比對，可以自訂
    secret: '加密用的字串', 
    store: sessionStore,
    cookie: {
        maxAge: 1200000, // session的存活時間 單位毫秒
    }
}));

const cors = require('cors');

const whitelist = [undefined, 'http://localhost:3000']
const corsOptions = {
    credentials: true,
    origin: function(origin, callback){
        // 方法一
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true);
        } else {
            callback(null, false);
        }
        // 方法二
        // callback(null, true); // 这样是允许全部IP使用，这样就不用 whitelist
    }
};
app.use(cors(corsOptions));

app.get('/', (req, res)=>{ // req=> 请求 res => 響應
    res.send('hello! welcome to william node.js api.');
});

// 存储session 
app.use((req, res, next)=>{
    res.locals.sess = req.session || {}; // sess 是自己定义的session名称

    next();
});

// 會員
app.use('/members', require(__dirname+'/members.js'));

// app.use('/register', require(__dirname+'/register.js'));

// 產品
app.use('/products', require(__dirname+'/products.js'));

// 404
app.use((req, res)=>{
    res.type('text/html');  // 类型
    res.status(404);        // 状态码
    res.send(`<img src="https://media3.giphy.com/media/jpWFza0noYgb6fOucQ/source.gif" alt="404">`);
})

// server 侦听
app.listen(3009, ()=>{
    console.log('server started use 3009 please, William control')
})