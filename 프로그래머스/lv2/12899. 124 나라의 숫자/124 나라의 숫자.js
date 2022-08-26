function solution(n) {
    const arr = [4, 1, 2];
    let answer = '';
    while (n > 0) {
        answer = arr[n % 3] + answer;
        n = n % 3 ? Math.floor(n / 3) : Math.floor(n / 3) - 1;
    };
    return answer
}