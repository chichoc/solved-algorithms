// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const input = [];

rl.on("line", function(line) {
	input.push(line);
	rl.close();
}).on("close", function() {
	solution();
	process.exit();
});

function solution() {
	let trimedInput = input[0].trim();
	if (trimedInput.length === 0) console.log(0);
	else console.log(trimedInput.split(/\s+/).length);
}