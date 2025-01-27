function solution(n, words) {
    let lastAlpha = '';
    for (const [index, word] of words.entries()) {
        if (index !== words.indexOf(word) || (index && lastAlpha !== word[0])) return [index % n + 1, parseInt(index / n) + 1];
    lastAlpha = word[word.length - 1];
    }
    return [0, 0];
}
