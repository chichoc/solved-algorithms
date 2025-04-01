// https://leetcode.com/problems/number-of-islands?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  let answer = 0;

  const checkGridOver = (row, col) => {
    if (row < 0 || row >= rowLen || col < 0 || col >= colLen) {
      return true;
    } else return false;
  };

  const findIsland = (row, col, visited) => {
    visited[row][col] = true;
    for (let i = 0; i < 4; i++) {
      const [nextRow, nextCol] = [row + dr[i], col + dc[i]];
      if (checkGridOver(nextRow, nextCol)) continue;
      if (visited[nextRow][nextCol]) continue;
      if (grid[nextRow][nextCol] === '0') continue;
      findIsland(nextRow, nextCol, visited);
    }
  };

  const visited = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
  for (let r = 0; r < rowLen; r++) {
    for (let c = 0; c < colLen; c++) {
      if (visited[r][c]) continue;
      if (grid[r][c] === '0') continue;
      findIsland(r, c, visited);
      answer++;
    }
  }
  return answer;
};
