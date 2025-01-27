function solution(priorities, location) {
    const waitingList = priorities.map((p, i) => [i, p]);
    let count = 0;
    while(true){
        let cur = waitingList.shift();
        if (waitingList.some(arr => arr[1] > cur[1])) waitingList.push(cur);
        else {
            count++;
            if (cur[0] === location) return count;
        }
    }
}