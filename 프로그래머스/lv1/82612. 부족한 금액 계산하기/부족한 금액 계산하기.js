function solution(price, money, count) {
    const sum = price * ((count + 1) * count / 2);
    return sum > money ? sum - money : 0;
}