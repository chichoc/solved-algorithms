function solution(n){
    return Array.from(n + '', Number).reduce((prev, current) => prev + current);
}