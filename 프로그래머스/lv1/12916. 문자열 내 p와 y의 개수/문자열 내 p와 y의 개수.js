function solution(s){
    let p = 0, y = 0;
    [...s].forEach((a) => {
        if (a === 'p' || a === 'P') p++;
        if (a == 'y' || a == 'Y') y++;
    })
    return p === y;
}