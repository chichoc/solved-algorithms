function solution(n, info) {
    let answer = Array(11).fill(0);
    let maxDiff = 0;
    
    shot(0, 0, 0, 0, answer);
    
    function shot (peachScore, ryanScore, count, score, scoreBoard) {
        if (n < count) return;
        
        if (score > 10) {
            let scoreDiff = ryanScore - peachScore;
            
            if (maxDiff < scoreDiff) {
                scoreBoard[10] = n - count;
                maxDiff = scoreDiff;
                answer = scoreBoard;
            }
            return;
        }
        
        if (n > count) {
            const copyOfScoreBoard = [...scoreBoard];
            const countToAdd = info[10 - score] + 1;
            copyOfScoreBoard[10 - score] = countToAdd;
            shot(peachScore, ryanScore + score, count + countToAdd, score + 1, copyOfScoreBoard);
        }
        
        if (info[10 - score] > 0) {
            shot(peachScore + score, ryanScore, count, score + 1, scoreBoard);
        } else {
            shot(peachScore, ryanScore, count, score + 1, scoreBoard);
        }
    }
    
    return maxDiff === 0 ? [-1] : answer;
}


