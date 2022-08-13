function solution(s) {
    return [4, 6].some((l) => l === s.length) && ![...s].some(isNaN);
}