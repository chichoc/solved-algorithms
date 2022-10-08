function solution(n, s) {
    if (n > s) return [-1];
    let array = Array(n).fill(0).map(el => Math.floor(s / n));
    for (let i = n - 1; i >= n - s % n; i--) array[i]++;
    return array;
}

