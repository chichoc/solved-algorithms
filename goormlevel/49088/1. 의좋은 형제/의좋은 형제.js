// Run by Node.js
const readline = require('readline');
const input = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input.push(line)
		rl.close();
	}
	
	solution();
	process.exit();
})();

function solution() {
	const answer = input[0].split(' ').map(Number);
	const D = +input[1];
	
	for (let i = 1; i <= D; i++) {
		if (i % 2) {
			[answer[0], answer[1]] = giveHalf(answer[0], answer[1]);
		} else {
			[answer[1], answer[0]] = giveHalf(answer[1], answer[0]);
		}
	}
	
	console.log(answer.join(' '));
}

function giveHalf(sender, receiver) {
	const half = Math.ceil(sender / 2);
	return [sender - half, receiver + half];
}