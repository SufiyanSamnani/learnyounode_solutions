var fs = require('fs');
var path = require('path');

function generateFileList(callback) {
    fs.readdir(process.argv[2], 'utf8', function readComplete(err, dirContents) {
        let listOfFiles = dirContents;
        callback(listOfFiles);
    })
}

function displayList(fileList) {
    for(i=0;i<fileList.length;i++) {
        if(fileList[i].includes("." + process.argv[3])) {
            console.log(fileList[i]);
        }
    }
}

generateFileList(displayList);