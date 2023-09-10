const http = require('http')
const { Socket } = require('socket.io')

const server=http.createServer()

const io = require('socket.io')(server, {
    cors:{
        origin: '*'
    }

})

io. on('connection',(socket)=>{
    console.log("Conectado al servidor")

})

server.listen(3000)
