var app = require('express')();
var http = require('http').Server(app); 
var io = require('socket.io')(http);

io.on('connection',function(socket){
console.log('usuario conectado xxxx');
});

http.listen(3000,function(){
console.log(' http://127.0.0.1:3000');
});

