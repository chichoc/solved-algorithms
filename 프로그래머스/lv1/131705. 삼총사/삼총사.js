function solution(number) {
    let answer = 0;
    const numLen = number.length;
    
    for (let i = 0; i < numLen - 2; i++) {
        for (let j = i + 1; j < numLen - 1; j++) {
            for (let k = j + 1; k < numLen; k++) {
                if (number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }
    
    return answer;
}