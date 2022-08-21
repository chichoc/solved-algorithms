function solution(n) {
    let answer = 0;
    const num = Array(n - 1).fill(true);
    for (let i = 2; i < n + 1; i++){
        if (!num[i - 2]) continue;
        for (let j = i * 2; j < n + 1; j += i){
            num[j - 2] = false;
        }
    }
    num.forEach(a => a && answer++);
    return answer;
}