const http = require('http')
const url = require('url')

function timeParse (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime (time) {
    return {
        unixtime: time.getTime()
    }
}

let server = http.createServer(function (req, res) {
    let parsedUrl = url.parse(req.url, true)
    let time = new Date(parsedUrl.query.iso)
    let output
    
    if (/^\/api\/parsetime/.test(req.url)) {
        output = timeParse(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
        output = unixTime(time)
    }

    if (output) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(output))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(Number(process.argv[2]))