function solution(n) {
    let answer = 1;
    for (let i = 1; i < n / 2; i++) {
        let sum = 0, add = i;
        while (sum < n) {
            sum += add;
            add++;
        }
        if (sum === n) answer++;
    }
    return answer;
}