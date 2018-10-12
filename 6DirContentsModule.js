var fs = require('fs')
let outputList = undefined
let filteredList = []

module.exports = function (dirpath, extn, callback) {
    fs.readdir(dirpath, 'utf8', function readComplete(err, dirContents) {
        if(err) return callback(err);
        outputList = dirContents;
        for(i=0;i<outputList.length;i++) {
            if(outputList[i].includes("." + extn)) {
               filteredList.push(outputList[i])
            }    
        }
        callback(null, filteredList)
    })
}