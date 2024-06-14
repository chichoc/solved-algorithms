// Run by Node.js
const readline = require('readline');
const input = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input.push(line);
		rl.close();
	}
	solution();
	process.exit();
})();

function solution() {
	const [N, M] = input[0].split(' ').map(Number);
	console.log(N*M)
}