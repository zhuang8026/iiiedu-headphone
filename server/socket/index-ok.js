const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('socket start');
});

io.on('connection', function(socket){
  //console.log(socket)
    console.log('a user connected');
    //監聽透過 connection 傳進來的事件
    socket.on('getMessage', message => {
        //回傳 message 給發送訊息的 Client
        socket.emit('getMessage', message)
    })
});

http.listen(5555, function(){
    console.log('SOCKET.io server work - please use localhost:5555, William control');
});