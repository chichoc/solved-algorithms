function solution(n) {
    const countNum = count(n);
    while(true) {
        n++;
        if (countNum === count(n)) return n;
    }
}
function count(num) {
    return [...num.toString(2)].filter(b => b === '1').length;
}