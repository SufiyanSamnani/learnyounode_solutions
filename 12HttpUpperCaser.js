const http = require('http')
const t2m = require('through2-map')

let server = http.createServer(function(req,res) {
    if (req.method === 'POST') {
        req.pipe(t2m(function (block) {
            return block.toString().toUpperCase()
        })).pipe(res)
    }
})

server.listen(Number(process.argv[2]))