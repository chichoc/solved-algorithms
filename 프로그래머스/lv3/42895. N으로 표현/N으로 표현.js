function solution(N, number) {
    let answer = 9;
    function dfs(value, count) {
        if (count > 8) return;
        if (value === number) return answer = Math.min(answer, count);
        let numberToAdd = 0;
        for (let i = 1; i < 9 - count; i++) {
            numberToAdd = numberToAdd * 10 + N;
            const nextCount = count + i;
            dfs(value + numberToAdd, nextCount);
            dfs(value - numberToAdd, nextCount);
            dfs(value / numberToAdd, nextCount);
            dfs(value * numberToAdd, nextCount);
        }
    }
    dfs(0, 0);
    return answer > 8 ? -1 : answer;
}