function solution(price, money, count) {
    let sum = 0;
    for (let i = 1; i < count + 1; i++) {
        sum += price * i;
    }
    const answer = sum - money;

    return answer > 0 ? answer : 0;
}