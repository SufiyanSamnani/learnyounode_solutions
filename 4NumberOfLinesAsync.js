var fs = require('fs');
var lineTotal = undefined;

function calculateTotal(callback) {
	fs.readFile(process.argv[2], "utf8", function waitUntilRead(err, data) {
		lineTotal = data.split('\n').length - 1;
		callback();
	})
}

function displayTotal() {
	console.log(lineTotal);
}

calculateTotal(displayTotal);


