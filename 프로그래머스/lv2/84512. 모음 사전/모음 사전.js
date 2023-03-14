function solution(word) {
    let answer = 0;
    const order = { A: 0, E: 1, I: 2, O: 3, U: 4};
    const wordLen = word.length;
    
    for (let i = 0; i < wordLen; i++) {
        answer += 1 + order[word[i]] * (5 ** (5 - i) - 1) / 4
    }
    return answer;
}

// A  AA  AAA  AAAA  AAAAA AAAAE
// 1 + 5 + 25 + 125 + 625