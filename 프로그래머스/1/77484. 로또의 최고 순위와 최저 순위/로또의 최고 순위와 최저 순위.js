function solution(lottos, win_nums) {
    let rankBest = 0;
    let rankWorst = 0;
    const ranks = [6, 6, 5, 4, 3, 2, 1];
    // const ranks = {2: 5, 3: 4, 4: 3, 5: 2, 6: 1};
    
    const lottosNum = lottos.filter(num => num > 0);
    const hiddenNum = lottos.length - lottosNum.length;
    const correctNum = lottosNum.filter(num => win_nums.includes(num)).length;
    
    return [ranks[correctNum + hiddenNum], ranks[correctNum]];
}