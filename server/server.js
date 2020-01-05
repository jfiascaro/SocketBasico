const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializar el socket.io mantiene la conversación directa del backend
// se cambia el let por module.exports.io
//let io = socketIO(server);
module.exports.io = socketIO(server);
// con esto le decimos al server que use el archivo /sockets/socket.js
require('./sockets/socket');




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});