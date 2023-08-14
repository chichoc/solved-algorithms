const N = +require('fs').readFileSync(0).toString().trim();
let end = false;

function dfs(sequence, count) {
  if (end) return;
  if (count === N) {
    end = true;
    return console.log(sequence);
  }
  for (let n = 1; n <= 3; n++) {
    const temp = sequence + n;
    if (isGood(temp, count + 1)) dfs(temp, count + 1);
  }
}

function isGood(str, len) {
  for (let l = 1; l <= len / 2; l++) {
    const point = len - l;
    if (str.slice(point - l, point) === str.slice(-l)) return false;
  }
  return true;
}

dfs('1', 1);