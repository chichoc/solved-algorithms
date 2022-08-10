function solution(n) {
    if (n < 2) return n;
    return [...Array(n - 2).keys()].reduce((prev, curr) => n % (curr + 2) === 0 ? prev + curr + 2 : prev, (1 + n));
}