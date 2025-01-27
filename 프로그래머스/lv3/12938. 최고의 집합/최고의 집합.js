function solution(n, s) {
    if (n > s) return [-1];
    const addIdx = n - s % n;
    return Array(n).fill(0).map((_, i) => i < addIdx ? Math.floor(s / n) : Math.ceil(s / n));
}