function solution(phone_number) {
    const lastFourNumbers = phone_number.slice(-4)
    const answer = '*'.repeat(phone_number.length - 4) + lastFourNumbers
    return answer;
}