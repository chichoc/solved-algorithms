function solution(queue1, queue2) {
    let subtract = queue1.reduce((sum, curr, idx) => sum + curr - queue2[idx], 0) / 2;
    let answer = 0;
    const maxCount = queue1.length * 2;
    let [i, j] = [0, 0];
    
    while(subtract !== 0 && answer < maxCount * 2) {
        if (subtract > 0) {
            const elem = queue1[i++];
            subtract -= elem;
            queue2.push(elem);
        } else {
            const elem = queue2[j++];
            subtract += elem;
            queue1.push(elem);
        }
        answer++;
    }
    return subtract === 0 ? answer : -1;
}
  