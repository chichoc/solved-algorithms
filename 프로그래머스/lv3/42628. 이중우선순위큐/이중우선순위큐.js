function solution(operations) {
    const queue = [];
    function swap(num) {
        if (!queue.length) return queue.push(num);
        let flag = false, i = 0;
        while(!flag) {
            if (num <= queue[i]) i++;
            else {
                queue.splice(i, 0, num);
                flag = true;
            }
        }
    }
    operations.forEach(oper => {
        const [command, num] = oper.split(' ');
        if (command === 'I') return swap(+num);
        if (!queue.length) return;
        num < 0 ? queue.pop() : queue.shift();
    })
    return queue.length ? [queue[0], queue[queue.length - 1]] : [0, 0];
}