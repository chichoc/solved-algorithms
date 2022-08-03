function solution(arr) {
    const smallestNumIndex = arr.indexOf(Math.min(...arr));
    arr.splice(smallestNumIndex, 1);
    return arr.length ? arr : [-1];
}