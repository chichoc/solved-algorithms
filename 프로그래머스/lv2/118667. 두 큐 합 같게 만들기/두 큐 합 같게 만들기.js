function solution(queue1, queue2) {
    let sum1 = add(queue1);
    const halfSum = [queue1, queue2].reduce((s, arr) => s + add(arr), 0) / 2;
    const q = [...queue1, ...queue2];
    let pointer1 = 0;
    let pointer2 = queue1.length;
    
    for (let count = 0; count < queue1.length * 3; count++) {
        if (sum1 === halfSum) return count;
        sum1 = sum1 > halfSum 
            ? sum1 - q[pointer1++ % q.length]
            : sum1 + q[pointer2++ % q.length];
    }
    return -1;
};

function add(arr) {
    return arr.reduce((sum, cur) => sum + cur, 0);
}