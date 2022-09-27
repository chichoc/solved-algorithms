function solution(s) {
    const sArray = s.split(' ');
    sArray.sort((a, b) => a - b);
    return sArray[0] + ' ' + sArray[sArray.length - 1];
}