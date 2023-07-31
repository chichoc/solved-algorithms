const N = require('fs').readFileSync(0).toString().trim();
console.log([...N].sort((a, b) => b - a).join(''));
