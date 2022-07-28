function solution(phone_number) {
    let answer = '';
    const lastFourNumbers = phone_number.slice(-4)
    answer = '*'.repeat(phone_number.length - 4) + lastFourNumbers
    return answer;
}