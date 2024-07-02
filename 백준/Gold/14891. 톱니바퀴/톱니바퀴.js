const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const numberOfGears = 4;
const gears = inputs.slice(0, numberOfGears).map((input) => input.split('').map(Number));
const K = inputs[numberOfGears];
const orders = inputs
  .slice(numberOfGears + 1)
  .map((input) => input.split(' ').map((str, idx) => (idx === 0 ? Number(str) - 1 : Number(str))));
const clockwise = 1;

function rotateClock(array) {
  return [array[7], ...array.slice(0, 7)];
}
function rotateCounterClock(array) {
  return [...array.slice(1), array[0]];
}

function addGearScore(array) {
  const sPole = 1;
  let result = 0;

  for (let i = 0; i < numberOfGears; i++) {
    if (array[i][0] === sPole) result += 2 ** i;
  }
  return result;
}

for (const [gearIdx, direct] of orders) {
  const currGear = gears[gearIdx];
  const rights = gears.map((gear) => gear[2]);
  const lefts = gears.map((gear) => gear[6]);

  const directs = Array(numberOfGears).fill(0);
  directs[gearIdx] = direct;
  gears[gearIdx] = direct === clockwise ? rotateClock(currGear) : rotateCounterClock(currGear);

  for (let i = gearIdx - 1; i >= 0; i--) {
    const nextGear = gears[i];
      
    if (rights[i] === lefts[i + 1]) break;
    if (directs[i + 1] === clockwise) {
      gears[i] = rotateCounterClock(nextGear);
      directs[i] = clockwise * -1;
    } else {
      gears[i] = rotateClock(nextGear);
      directs[i] = clockwise;
    }
  }

  for (let i = gearIdx; i < numberOfGears - 1; i++) {
    const nextGear = gears[i + 1];

    if (rights[i] === lefts[i + 1]) break;
    if (directs[i] === clockwise) {
      gears[i + 1] = rotateCounterClock(nextGear);
      directs[i + 1] = clockwise * -1;
    } else {
      gears[i + 1] = rotateClock(nextGear);
      directs[i + 1] = clockwise;
    }
  }
}

console.log(addGearScore(gears));