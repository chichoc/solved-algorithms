function solution(dartResult) {
    const bonuses = {S : 1, D: 2, T: 3};
    const options = {'*': 2, '#': -1, undefined: 1};

    const darts = dartResult.match(/\d.?\D/g);
    
    for (let i = 0; i < darts.length; i++) {
        const [d, s, b, o] = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
        if (darts[i - 1] && o === '*') darts[i - 1] *= options[o];
        darts[i] = s ** bonuses[b] * options[o];
    }
    return darts.reduce((sum, score) => sum + score, 0);
}