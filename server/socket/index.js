const express = require('express')
const app = express()

//將 express 放進 http 中開啟 Server 的 3000 port ，正確開啟後會在 console 中印出訊息
const server = require('http').Server(app)
    .listen(5555,()=>{console.log('socket open server 5555 !')})

//將啟動的 Server 送給 socket.io 處理
const io = require('socket.io')(server)

/*上方為此寫法的簡寫：
    const socket = require('socket.io')
    const io = socket(server)
*/

//監聽 Server 連線後的所有事件，並捕捉事件 socket 執行
// io.on('connection', socket => {
//     //經過連線後在 console 中印出訊息
//     console.log('success connect!')
//     //監聽透過 connection 傳進來的事件
//     socket.on('getMessage', message => {
//         /*只回傳給發送訊息的 client*/
//         socket.emit('getMessage', message)

//         /*回傳給所有連結著的 client*/
//         io.sockets.emit('getMessageAll', message)
//     })

// })

io.on('connection', (socket)=>{ 
    console.log('server socket is connected!');
    socket.on('getMessage', function(msg){
        console.log('msg form client:' + msg);
        // socket.send('server says:' + msg); // 只會傳到 server端 / 無廣播功能
        
        // 將client端收到的訊息到達server端，再從server端發送到另一端client端
        socket.broadcast.emit('ServerMsg', msg); //類似廣播功能
    });
});