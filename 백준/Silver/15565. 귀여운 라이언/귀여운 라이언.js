const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, K] = inputs[0].split(' ').map(Number);
const dolls = inputs[1].split(' ').map(Number);
const lyan = 1;
let minSize = Infinity;
let start = 0,
  end = 0;
let numberOfLyan = 0;

while (end <= N) {
  if (numberOfLyan < K) {
    if (dolls[end] === lyan) numberOfLyan++;
    end++;
  } else {
    if (dolls[start] === lyan) numberOfLyan--;
    start++;
  }

  if (numberOfLyan === K) {
    minSize = Math.min(minSize, end - start);
  }
}

console.log(minSize === Infinity ? -1 : minSize);

/**
 * 회고
 * - 투포인터 어떻게 푸는지 몰라서 매번 라이언 위치를 찾고 슬라이싱..그래서 시초->메초?공초? 뜸
 *   정해진 유형이라 빠르게 파악하는게 중요
 * - K개 이상이지만 가장 작은 집합의 크기를 구하는거라 K개인 경우만 체크하면 됨
 * - 백준 기준 가장 빠른 풀이는 이중 반복문이지만 O(N)이 더 효율적이라 생각되어 위 코드로 수정
 */
