function solution(n, lost, reserve) {
    lost.sort(); reserve.sort();
    lost.slice().forEach((stu, index) => {
        if (reserve.includes(stu)) {
        lost.splice(lost.indexOf(stu), 1);
        reserve.splice(reserve.indexOf(stu), 1);
        }
    });
    let notBorrowed = lost.length;
    for (const lostStu of lost){
        if (!reserve.length) break;
        const reservedLost = [lostStu - 1, lostStu + 1].find(v => reserve.indexOf(v) !== -1);
        if (reservedLost) {
            reserve.splice(reserve.indexOf(reservedLost), 1);
            notBorrowed--;
        }
    }
    return n - notBorrowed;
}