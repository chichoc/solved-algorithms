function solution(dartResult) {
    const scores = [];
    const bonus = {S : 1, D: 2, T: 3};
    const num = dartResult.split(/\D/).flatMap(x => !!x ? x : []);
    const char = dartResult.split(/\d/).flatMap(x => !!x ? x : []);
    for (let i = 0; i < num.length; i++) {
        const [b, o] = [...char[i]];
        const option = o === '*' ? 2 : (o === '#' ? -1 : 1);
        if (i > 0 && o === '*') scores.push(scores.pop() * 2);
        scores.push(num[i] ** bonus[b] * option);
    }
    return scores.reduce((sum, score) => sum + score, 0);
}