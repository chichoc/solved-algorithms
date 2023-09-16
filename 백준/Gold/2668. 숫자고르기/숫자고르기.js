const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = +inputs[0];
const nums = inputs.slice(1).map((input) => input - 1);
const answer = [];
const visited = Array(N).fill(false);

// 첫째 줄과 둘째 줄 숫자 같은 경우
for (let i = 0; i < N; i++) {
  if (i !== nums[i]) continue;
  visited[i] = true;
  answer.push(i + 1);
}

for (let i = 0; i < N; i++) {
  if (visited[i]) continue;
  const [idxs, values] = dfs(i, [i], []);
  if (checkSame(idxs, values)) idxs.forEach((idx) => !answer.includes(idx + 1) && answer.push(idx + 1));
}


function dfs(idx, visitIdx, visitValue) {
  const numToVisit = nums[idx];
  visitValue.push(numToVisit);

  if (!visited[numToVisit] && !visitIdx.includes(numToVisit))
    return dfs(numToVisit, [...visitIdx, numToVisit], visitValue);
  else return [visitIdx, visitValue];
}

function checkSame(arr1, arr2) {
  return arr1.every((a) => arr2.includes(a));
}

console.log(`${answer.length}\n${answer.sort((a, b) => a - b).join('\n')}`);