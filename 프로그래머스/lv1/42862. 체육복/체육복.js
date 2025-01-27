function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b); reserve.sort((a, b) => a - b);
    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));
    return n - realLost.filter(lNum => { 
        const borrowOther = realReserve.find(rNum => Math.abs(rNum - lNum) === 1) 
        if(!borrowOther) return true;
        realReserve.splice(realReserve.indexOf(borrowOther), 1);
    }).length;
}