function solution(operations) {
    const queue = [];
    operations.forEach(oper => {
        const [command, num] = oper.split(' ');
        if (command === 'I') return queue.push(+num);
        if (!queue.length) return;
        const removeElem = num < 0 ? Math.min(...queue) : Math.max(...queue);
        queue.splice(queue.indexOf(removeElem), 1);
    })
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}
