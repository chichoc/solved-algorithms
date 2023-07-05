const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const friendStatus = Array.from({ length: N }, () => Array(N).fill(0));

// 서로 친구 조사
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (inputs[i + 1][j] === 'N' || i === j) continue;
    friendStatus[i][j] = 1;
    friendStatus[j][i] = 1;
  }
}

if (findMax(friendStatus) === N - 1) return console.log(N - 1);

// 2-친구 조사
for (let i = 0; i < N; i++) {
  const otherFriends = new Set();
  for (let j = 0; j < N; j++) {
    if (friendStatus[i][j] !== 1 || i === j) continue;
    friendStatus[j].forEach((status, idx) => status === 1 && otherFriends.add(idx));
  }
  otherFriends.forEach((o) => {
    if (i !== o && friendStatus[i][o] !== 1) friendStatus[i][o] = 2;
  });
}

function findMax(arr) {
  const numberOfArr = [];
  for (const a of arr) {
    numberOfArr.push(a.filter((elem) => elem > 0).length);
  }
  return Math.max(...numberOfArr);
}

console.log(findMax(friendStatus));
