function solution(n, m) {
    const gcd = GCD(n, m);
    return [gcd, n * m / gcd];
}

function GCD(n, m) {
    if (m % n === 0) return n;
    return GCD(m % n, n);
}