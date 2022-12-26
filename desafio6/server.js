//conf del server
const { log } = require('console')
const { Socket } = require('dgram')
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()

//config del socket

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const mensajes = []

//middlewere

app.use(express.static('public'));

//01. establecer conex con el cliente

io.on('connection', socket => {

    //02.enviamoos mensajes al cliente
    socket.emit('mensajes', mensajes)

    socket.on('mensaje', data => {
        //1ero
        /* io.sockets.emit('mensajes', data) */
        mensajes.push({ socketid: socket.id, mensaje: data })
        io.sockets.emit('mensajes', mensajes)
    })
});






const PORT = 8080

const server = httpServer.listen(PORT, () => {
    console.log('serVer on');

})

server.on('error', error => console.log(`error en servidor ${error}`))