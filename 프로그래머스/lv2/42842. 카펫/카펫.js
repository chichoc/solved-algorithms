function solution(brown, yellow) {
    let i = 0;
    while (++i) {
        if (yellow % i) continue;
        const y = yellow / i;
        if ((y + 2) * (i + 2) === brown + yellow) return [y + 2, i + 2];
    }
}