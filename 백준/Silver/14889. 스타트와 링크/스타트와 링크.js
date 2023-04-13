const input = require('fs').readFileSync(0).toString().split('\n');
const N = +input[0];
const skills = [];

const teamA = [], teamB = [];
let minDiff = 987654321;

for (let i = 1; i < N + 1; i++) {
  skills.push(input[i].split(' ').map(Number));
}

makeTeam(0);
console.log(minDiff);

function makeTeam(count) {
  if (count === N) {
    if (teamA.length === N / 2) {
      const diff = teamCompare(teamA, teamB);
      if (minDiff > diff) minDiff = diff;
    }
    return;
  }
  if (teamA.length !== 1 || teamB.length !== N - 1) {
    if (teamA.length < N / 2) {
      teamA.push(count);
      makeTeam(count + 1);
      teamA.pop();
    }
    teamB.push(count);
    makeTeam(count + 1);
    teamB.pop();
  }
}

function teamCompare(arr1, arr2) {
  let score1 = 0;
  let score2 = 0;

  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      score1 += skills[arr1[i]][arr1[j]] + skills[arr1[j]][arr1[i]];
      score2 += skills[arr2[i]][arr2[j]] + skills[arr2[j]][arr2[i]];
    }
  }
  return Math.abs(score1 - score2);
}
