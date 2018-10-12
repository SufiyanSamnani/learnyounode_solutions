var http = require('http')

http.get(process.argv[2], function processComplete (response) {
    response.setEncoding("utf8");
    response.on("data", function displayOutput (data) {
        console.log(data)
    })
})