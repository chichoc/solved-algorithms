function solution(numbers, target) {
    let answer = 0;
    const marks = [-1, 1];
    const numbersLen = numbers.length;
    function bfs(i, sum) {
        if (i === numbersLen) return sum === target && ++answer;
        marks.forEach(m => bfs(i + 1, sum + m * numbers[i]))
    }
    bfs(0, 0);
    return answer;
}