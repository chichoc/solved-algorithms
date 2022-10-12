function solution(n, a = n + 1) {
    return count(n) === count(a) ? a : solution(n, a + 1);
}
function count(num) {
    return num.toString(2).match(/1/g).length;
}