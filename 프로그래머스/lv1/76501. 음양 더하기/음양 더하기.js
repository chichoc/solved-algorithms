function solution(absolutes, signs) {
    return absolutes.reduce((sum, curr, index) => signs[index] ? sum += curr : sum -= curr, 0);
}