const input = require('fs').readFileSync(0).toString().trim();

console.log(input.length > 0 ? input.split(' ').length : 0);
