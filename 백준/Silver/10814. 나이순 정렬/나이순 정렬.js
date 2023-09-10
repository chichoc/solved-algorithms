const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const members = inputs.slice(1).map((member, idx) => [...member.split(' '), idx]);

members.sort((a, b) => a[0] - b[0] || a[2] - b[2]);

console.log(members.map(([age, name]) => `${age} ${name}`).join('\n'));