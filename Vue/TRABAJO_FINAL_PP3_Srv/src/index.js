const express = require('express')
const cors = require('cors')
const socketio= require('socket.io')

const server= express()

server.set('port', process.env.PORT || 3000)

server.use(cors())

const servidor=server.listen(server.get('port'), ()=>{
    console.log(`la conexion fue establecida en puerto ${server.get('port')}`)
})

const io= socketio(servidor)

io.on('connect', socket =>{

    setInterval(()=>{
        socket.emit('dato', Math.random())
    },1000)
    
})