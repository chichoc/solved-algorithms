function solution(n){
    return Array.from(n.toString(2), num => +num).reduce((a, b) => a + b);
}