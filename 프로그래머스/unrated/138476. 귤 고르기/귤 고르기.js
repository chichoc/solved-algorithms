function solution(k, tangerine) {
    let answer = 0;
    let sum = 0;
    const count = new Map();
    
    tangerine.forEach(t => {
        let value = count.get(t) || 0;
        count.set(t, ++value);
    });
    
    const countOfArray = Array.from(count);
    countOfArray.sort((a, b) => b[1] - a[1]);
    
    for (const [key, value] of countOfArray) {
        sum += value;
        answer++;
        if (k <= sum) return answer;
    } 
}