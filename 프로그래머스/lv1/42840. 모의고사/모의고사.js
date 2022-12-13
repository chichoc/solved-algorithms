function solution(answers) {
    const count = Array.from({length: 3}).fill(0);
    const answer = [];
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        [person1, person2, person3].forEach((p, pi) => (p[i % p.length] === answers[i]) && count[pi]++);
    }
    
    const max = Math.max(...count);
    count.forEach((c, i) => c === max && answer.push(i + 1));
    return answer;
}