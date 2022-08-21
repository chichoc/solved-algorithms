function solution(n) {
    let answer = 0;
    const num = Array(n - 1).fill(true);
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (!num[i - 2]) continue;
        for (let j = i * i; j < n + 1; j += i){
            if (!num[j - 2]) continue;
            num[j - 2] = false;
            answer++;
        }
    }
    return n - answer - 1;
}