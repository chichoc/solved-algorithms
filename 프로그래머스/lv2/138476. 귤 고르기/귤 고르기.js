function solution(k, tangerine) {
    let answer = 0;
    const count = {};
    
    tangerine.forEach(t => count[t] = (count[t] || 0) + 1);
    const countOfArray = Object.values(count).sort((a, b) => b - a);
    
    for (const value of countOfArray) {
        answer++;
        if (k > value) k -= value;
        else break;
    }
    return answer;
}