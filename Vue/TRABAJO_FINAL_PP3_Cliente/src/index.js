const express = require('express')
const cors = require('cors')
const socketio= require('socket.io')
const osu = require('node-os-utils')

const cpu= osu.cpu
const disco= osu.drive
const mem= osu.mem
const netstat = osu.netstat

const server= express()


server.set('port', process.env.PORT || 3000)

server.use(cors())

const servidor=server.listen(server.get('port'), ()=>{
    console.log(`la conexion fue establecida en puerto ${server.get('port')}`)
})

const io= socketio(servidor)

io.on('connect', socket =>{

    setInterval(()=>{
        cpu.usage()
        .then(info => {
            socket.emit("cpu",{data: info})
        })
        mem.info()
        .then(info => {
            socket.emit("mem",{data: info})
        })
        
        socket.emit("osInfo",osu.os.hostname())
        socket.emit("osIP",osu.os.ip())
        

    })
            
    },1000)
