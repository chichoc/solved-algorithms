function solution(k, tangerine) {
    let answer = 0;
    const count = new Map();
    
    tangerine.forEach(t => count.set(t, (count.get(t) || 0) + 1));
    const countOfArray = [...count.values()].sort((a, b) => b - a);
    
    for (const value of countOfArray) {
        answer++;
        if (k > value) k -= value;
        else break;
    }
    return answer;
}