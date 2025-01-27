function solution(s) {
    const sArray = s.split(' ');
    return sArray.reduce((arr, curr) => [Math.min(arr[0], curr), Math.max(arr[1], curr)], [sArray[0], sArray[0]]).join(' ');
}