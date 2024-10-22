const express= require('express')
const morgan = require('morgan')
const cors = require('cors')
const router= require('./routes/cliente.route')
const server=express()

server.use(express.json())
server.use(morgan())
server.use(cors())

server.use(require('./routes/cliente.route'))

server.set('port', process.env.PORT || 3000)

server.listen(server.get('port'))

console.log('servidor corriendo en el puerto:' +server.get('port'))