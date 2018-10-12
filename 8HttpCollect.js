var http = require('http')
let outputData = ''

http.get(process.argv[2], function loadComplete (response) {
    response.setEncoding("utf8");
    response.on("data", function collectData (data) {
        outputData += data
    }) 
    response.on("end", function displayOutput () {
        console.log(outputData.length)
        console.log(outputData)
    })
});