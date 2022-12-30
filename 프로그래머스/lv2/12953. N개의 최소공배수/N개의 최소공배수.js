function solution(arr) {
    return arr.reduce((answer, num) => num * answer / GCD(num, answer));
}

function GCD(num1, num2) {
    return num1 % num2 ? GCD(num2, num1 % num2) : num2;
}