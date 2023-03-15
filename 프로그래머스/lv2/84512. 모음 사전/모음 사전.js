function solution(word) {
    const order = { A: 0, E: 1, I: 2, O: 3, U: 4};
    return [...word].reduce((sum, char, idx) => sum + 1 + order[char] * (5 ** (5 - idx) - 1) / 4, 0);
}

// A  AA  AAA  AAAA  AAAAA
// 1 + 5 + 25 + 125 + 625