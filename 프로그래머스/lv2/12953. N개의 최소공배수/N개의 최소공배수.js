function solution(arr) {
    let answer = arr[0];
    for (let i = 1; i < arr.length ; i++) {
        answer = arr[i] * answer / GCD(arr[i], answer);
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