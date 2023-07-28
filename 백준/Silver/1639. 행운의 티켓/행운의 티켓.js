const input = require('fs').readFileSync(0).toString().trim();
const lenOfInput = input.length;
let maxLen = 0;

for (let start = 0; start < lenOfInput - 1; start++) {
  for (let end = lenOfInput - 1; end > start; end--) {
    if ((end - start + 1) % 2 !== 0) continue;
    const slicedStr = input.slice(start, end + 1);
    if (checkSum(slicedStr)) maxLen = Math.max(slicedStr.length, maxLen);
  }
}

function checkSum(str) {
  let leftSum = 0;
  let rightSum = 0;
  const lenOfStr = str.length;

  for (let i = 0; i < lenOfStr; i++) {
    if (i < lenOfStr / 2) leftSum += +str[i];
    else rightSum += +str[i];
  }
  return leftSum === rightSum ? true : false;
}

console.log(maxLen);