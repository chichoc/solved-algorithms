function solution(numbers) {
    const allNumbers = Array.from({length: 10}, (e, i) => i)
    return allNumbers.reduce((sum, curr) => numbers.includes(curr) ? sum : sum + curr, 0)
}