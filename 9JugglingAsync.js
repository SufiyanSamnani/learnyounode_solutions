const http = require('http')
const bl = require('bl')
let urlArray = [process.argv[2], process.argv[3], process.argv[4]]
let outputData = []
let count= 0

function displayOutput() {
    for(let i = 0; i < 3; i++) {
        console.log(outputData[i])
    }
}

function httpget(array_index) {
    http.get(urlArray[array_index], function (response) {        
        response.setEncoding("utf8")
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            outputData[array_index] = data.toString()
            count++
            if(count === 3) {
                displayOutput()
            }
       }))
    })
}

for (let i = 0; i < 3; i++) {
    httpget(i)
}