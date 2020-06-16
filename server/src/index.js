// 引入
const express = require('express'); // es5 // express => npm install --save express 

// 建立 web server 物件
const app = express();

app.get('/', (req, res)=>{ // req=> 请求 res => 響應
    res.send('hello! welcome to william node.js api.');
});

// let members = require(__dirname+'/members.js')
// app.use('/members', members);
app.use('/members', require(__dirname+'/members.js'));

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