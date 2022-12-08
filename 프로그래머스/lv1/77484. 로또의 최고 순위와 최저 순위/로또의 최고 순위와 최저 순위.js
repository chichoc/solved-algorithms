function solution(lottos, win_nums) {
    const rankingOfWinNum = [6, 6, 5, 4, 3, 2, 1];
    
    const minWinNum = lottos.filter(num => win_nums.includes(num)).length;
    const maxWinNum = minWinNum + lottos.filter(num => !num).length;
    
    return [rankingOfWinNum[maxWinNum], rankingOfWinNum[minWinNum]];
}