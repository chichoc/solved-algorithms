function solution(word) {
    return [...word].reduce((sum, char, idx) => sum + 1 + 'AEIOU'.indexOf(char) * ~~(781 / 5 ** idx), 0);
}

// A  AA  AAA  AAAA  AAAAA
// 1 + 5 + 25 + 125 + 625