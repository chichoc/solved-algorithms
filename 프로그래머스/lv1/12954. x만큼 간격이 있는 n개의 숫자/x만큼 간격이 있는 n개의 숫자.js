function solution(x, n) {
    var answer = [];
    [...Array(n).keys()].map(elem => answer.push(x * (elem + 1)));
    return answer;
}