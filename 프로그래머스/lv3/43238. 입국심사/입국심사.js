function solution(n, times) {
    let start = 0;
    let end = Math.max(...times) * n;
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        let possibleN = 0;
        for (let i = 0; i < times.length; i++) {
            possibleN += Math.floor(mid / times[i]);
        }
        if (possibleN >= n) end = mid;
        else start = mid + 1;
    }
    return start;
}