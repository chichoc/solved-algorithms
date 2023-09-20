function solution(want, number, discount) {
    let answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        if (checkAllWant(discount.slice(i, i + 10), want, number)) answer++;
    }
    return answer;
}

function checkAllWant(dArr, wArr, nArr) {
    for (let i = 0; i < wArr.length; i++) {
        for (let j = 0; j < nArr[i]; j++) {
            const idx = dArr.indexOf(wArr[i]);
            if (idx >= 0) dArr.splice(idx, 1);
            else return false;
        }
    }
    return true;
}