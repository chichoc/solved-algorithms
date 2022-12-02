function solution(left, right) {
    // 모두 더하고 제곱수를 두 번 빼기 (제곱수가 처음에 더해졌으므로)
    let sum = (left + right) / 2 * (right - left + 1);
    let i = Math.ceil(Math.sqrt(left));
    while (i ** 2 <= right) sum -= (i++ ** 2) * 2
    return sum;
}