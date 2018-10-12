let inputArgs = process.argv;
let sumInput = 0;
for(let i=2;i<inputArgs.length;i++) {
	sumInput = sumInput + Number(inputArgs[i]);
}
console.log(sumInput);
