function solution(n, times) {
    let start = 0;
    let end = Math.max(...times) * n;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const possibleN = times.reduce((sum, curr) => sum += Math.floor(mid / curr), 0);
        if (possibleN >= n) end = mid - 1;
        else start = mid + 1;
    }
    return start;
}