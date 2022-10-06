function solution(s) {
    const answer = {changeCount: 0, removeCount: 0};
    while(s !== '1') {
        answer.removeCount += [...s].filter(s => +s === 0).length;
        s = s.replaceAll(0, '').length.toString(2);
        answer.changeCount += 1;
    }
    return Object.values(answer);
}