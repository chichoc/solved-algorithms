// https://softeer.ai/practice/6246
const inputs = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((input) => input.split(' ').map(Number));
const [n, m] = inputs[0];
const board = inputs.slice(1, n + 1);
const positions = inputs.slice(n + 1).map(([row, col]) => [row - 1, col - 1]);
const dRow = [1, -1, 0, 0];
const dCol = [0, 0, -1, 1];
let answer = 0;

function isValidMove(row, col) {
  if (row < 0 || row >= n || col < 0 || col >= n) return false;
  if (board[row][col] === 1) return false;
  return true;
}

function dfs(currRow, currCol, posIdx) {
  if (posIdx === m) return answer++;
  if (positions[posIdx][0] === currRow && positions[posIdx][1] === currCol) return dfs(currRow, currCol, posIdx + 1);

  for (let i = 0; i < 4; i++) {
    const [newRow, newCol] = [currRow + dRow[i], currCol + dCol[i]];
    if (!isValidMove(newRow, newCol) || visited[newRow][newCol]) continue;

    visited[newRow][newCol] = true;
    dfs(newRow, newCol, posIdx);
    visited[newRow][newCol] = false;
  }
}

const visited = Array.from({ length: n }, () => Array(n).fill(false));
const [startRow, startCol] = positions[0];
visited[startRow][startCol] = true;
dfs(startRow, startCol, 0);

console.log(answer);

/** 회고
 * 전형적인 dfs 문제인데 디버깅 오래 걸림
 * 에러1 - 문제에서 주어진 입력값 중 칸의 위치가 1부터 시작하는 것을 놓침
 * 에러2 - stack을 복사하지 않고 그대로 사용하여 stack이 비어있는 경우 발생
 * 결과값 다름 - visited를 복사하지 않아 제대로 순회하지 못함
 * 개선시 참고한 풀이: https://velog.io/@youhyeoneee/소프티어-순서대로-방문하기
 */
