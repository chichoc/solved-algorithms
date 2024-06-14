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
	let result = input[0].trim().split(/\s+/).length;
	console.log(result === 1 ? 0 : result);
}