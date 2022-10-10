function solution(n) {
    const countNum = count(n);
    while(n++) {
        if (countNum === count(n)) return n;
    }
}
function count(num) {
    return num.toString(2).match(/1/g).length;
}