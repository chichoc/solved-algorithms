function solution(lottos, win_nums) {
    let minWinNum = 0;
    let countOfZero = 0;
    
    for (let lotto of lottos) {
        if (lotto === 0) countOfZero++;
        else if (win_nums.includes(lotto)) minWinNum++;   
    }
    
    return [minWinNum + countOfZero, minWinNum].map(num => num > 1 ? 7 - num : 6);
}