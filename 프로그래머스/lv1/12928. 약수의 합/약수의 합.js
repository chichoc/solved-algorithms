function solution(n) {
    if (n < 2) return n;
    const squareRoot = Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : 0;
    const loopCount = squareRoot ? Math.sqrt(n) - 2 : parseInt(Math.sqrt(n)) - 1;
    return [...Array(loopCount).keys()].reduce((prev, curr) => n % (curr + 2) === 0 ? prev + (curr + 2) + (n / (curr + 2)) : prev, (1 + n + squareRoot));
}