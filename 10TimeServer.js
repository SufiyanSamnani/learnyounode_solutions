const net = require('net')

function currentTime() {
    let now = new Date()
    return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes()
}

let server = net.createServer(function (socket) {
    socket.end(currentTime() + '\n')
})

server.listen(Number(process.argv[2]))