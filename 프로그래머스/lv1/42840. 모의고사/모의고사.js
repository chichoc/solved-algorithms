function solution(answers) {
    const count = Array.from({length: 3}).fill(0);
    const answer = [];
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const index = [0, 0, 0];
    for (const answer of answers) {
        [person1, person2, person3].forEach((p, i) => (p[index[i]] === answer) && count[i]++);
        index.forEach((i, idx) => {
            if (idx === 0 && i === 4) index[0] = 0;
            else if (idx === 1 && i === 7) index[1] = 0;
            else if (idx === 2 && i === 9) index[2] = 0;
            else index[idx]++;
        });
    }
    count.forEach((c, i) => c === Math.max(...count) && answer.push(i + 1));
    return answer.sort((a, b) => a - b);
}