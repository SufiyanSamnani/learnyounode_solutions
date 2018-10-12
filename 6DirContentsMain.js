var filterModule = require('./DirModule.js')

filterModule(process.argv[2], process.argv[3], showList)

function showList(err, filteredList) {
    //if(err) console.log(err)
    for(i=0;i<filteredList.length;i++) {
        console.log(filteredList[i])
    }
}