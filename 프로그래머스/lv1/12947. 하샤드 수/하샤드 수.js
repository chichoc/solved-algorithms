function solution(num) {
    const sum = Array.from(String(num), Number).reduce((prev, current) => prev + current);
    return !(num % sum);
}