const express = require('express')
const cors = require('cors')
const socketio= require('socket.io')
const osu = require('node-os-utils')

const server= express()
const cpu= osu.cpu

server.set('port', process.env.PORT || 3000)

server.use(cors())

const servidor=server.listen(server.get('port'), ()=>{
    console.log(`la conexion fue establecida en puerto ${server.get('port')}`)
})

const io= socketio(servidor)

io.on('connect', socket =>{

    setInterval(()=>{
        socket.emit('infoPc', {cpuUso:cpu.usage(),
            cpuLibre: cpu.free(),
            disco: drive.info(),
            memLibre: mem.free(),
            memUsada: mem.used(),
            red: netstat.stats()
        
        })
    },1000)
    
})