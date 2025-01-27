function solution(arr, divisor) {
    const answer = arr.filter(num => num % divisor === 0);
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}