// https://leetcode.com/problems/number-of-islands?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = function (grid) {
  const rowLen = grid.length,
    colLen = grid[0].length;
  const dr = [-1, 1, 0, 0],
    dc = [0, 0, -1, 1];
  const visited = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
  let answer = 0;

  const checkGridOver = (row, col) => {
    if (row < 0 || row >= rowLen || col < 0 || col >= colLen) {
      return true;
    } else return false;
  };

  const findIsland = (row, col) => {
    visited[row][col] = true;
    for (let i = 0; i < 4; i++) {
      const [nextRow, nextCol] = [row + dr[i], col + dc[i]];
      if (checkGridOver(nextRow, nextCol)) continue;
      if (visited[nextRow][nextCol] || grid[nextRow][nextCol] === '0') continue;
      findIsland(nextRow, nextCol);
    }
  };

  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (visited[r][c] || grid[r][c] === '0') continue;
      answer++;
      findIsland(r, c);
    }
  }
  return answer;
};

/** 회고
 - 기본적인 dfs 문제
 - visited[r][c] || grid[r][c] === '0' 반복됨
 */
