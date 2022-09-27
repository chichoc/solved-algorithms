function solution(s) {
    const sArray = s.split(' ');
    return Math.min(...sArray) + ' ' + Math.max(...sArray);
}