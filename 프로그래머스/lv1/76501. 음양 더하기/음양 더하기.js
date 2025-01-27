function solution(absolutes, signs) {
    return absolutes.reduce((sum, curr, index) => (signs[index] ? 1 : -1) * curr + sum, 0);
}