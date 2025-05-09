const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, K] = inputs[0].split(' ').map(Number);
const nums = inputs[1].split(' ').map(Number);

const count = Array(100001).fill(0);
let left = 0;
let right = 0;
let maxLen = 0;

while (right < N) {
  if (count[nums[right]] + 1 <= K) {
    count[nums[right]]++;
    right++;
  } else {
    count[nums[left]]--;
    left++;
  }

  maxLen = Math.max(maxLen, right - left);
}

console.log(maxLen);

/**
 * 처음: 어찌저찌 풂 - 앞에서 순회하며 특정 수가 K개 넘으면 가장 인접한 수부터 배열 재생성 -> 메모리 비효율
 * 개선: [귀여운라이언]과 동일하게 투포인터 - 다른 점은 K개 이하인 최대 길이이므로 K개 이하인 경우에만 오른쪽으로 늘림 (K개 초과하면 왼쪽 점점 줄어들어 오른쪽부터 다시 재시작)
 */
