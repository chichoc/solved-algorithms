function solution(n) {
    const ternaryNum = [];
    while (n !== 0) {
        ternaryNum.unshift(n % 3);
        n = Math.floor(n / 3);
    }
    // 3진법으로 변환 후 뒤집은 수를 다시 10진수로 변환하려면 뒤(오른쪽)에서부터 곱해야하는 3의 제곱수가 커짐 -> 이 점을 활용하여 0부터 시작하는 idx를 활용하여 뒤집지 않고 연산
    return ternaryNum.reduce((sum, curr, idx) => sum + (curr * 3 ** idx), 0)
}