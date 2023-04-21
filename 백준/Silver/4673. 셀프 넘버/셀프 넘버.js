const seflNums = Array(10001).fill(true);
const answer = [];

for (let i = 1; i < 10000; i++) {
  const sum = i + [...i.toString()].reduce((sum, digit) => sum + digit * 1, 0);
    if (sum <= 10000) seflNums[sum] = false;
}

for (let i = 1; i <= 10000; i++) {
  if (seflNums[i]) answer.push(i);
}

console.log(answer.join('\n'));