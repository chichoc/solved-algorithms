function solution(lottos, win_nums) {
    const rankingOfDifferNum = [1, 2, 3, 4, 5, 6, 6];
    const minWinNum = lottos.filter(num => win_nums.includes(num)).length;
    const maxWinNum = minWinNum + lottos.filter(num => num === 0).length;
    return [rankingOfDifferNum[6 - maxWinNum], rankingOfDifferNum[6 - minWinNum]];
}