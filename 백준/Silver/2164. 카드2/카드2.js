const N = +require('fs').readFileSync(0).toString().trim();
const binary = [...N.toString(2)];
binary.shift();
console.log(parseInt(binary.join(''), 2) * 2 || N);