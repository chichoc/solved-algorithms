function solution(priorities, location) {
    const waitingList = priorities.map((p, i) => [i, p]);
    return print(waitingList).findIndex((arr) => arr[0] === location) + 1;
}

const print = (waiting) => {
    if (waiting.length <= 1) return waiting;
    const maxPrior = Math.max(...waiting.map(elem => elem[1]));
    for (const docu of waiting.slice()){
        if (docu[1] === maxPrior) return [docu, ...print(waiting.slice(1))]
        else waiting.push(waiting.shift());
    }
    
}