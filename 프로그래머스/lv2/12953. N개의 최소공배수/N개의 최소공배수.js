function solution(arr) {
    let answer = 1;
    for (let i = 0; i < arr.length; i++) {
        const num = answer > 1 ? answer : arr[i] ;
        answer = num * arr[i] / GCD(arr[i], num);
    }
    return answer;
}

function GCD(num1, num2) {
    while (num2 > 0) {
        const r = num1 % num2;
        num1 = num2;
        num2 = r;
    }
    return num1;
}