function solution(x, n) {
    return Array(n).fill(x).map((elem, index) => elem * (index + 1) )
}