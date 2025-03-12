function solution(diffs, times, limit) {
    let answer = 0;
    const diffsLen = diffs.length;
    
    // 퍼즐 풀기
    function solvePuzzle(level) {
        let totalTime = 0;
        for (let i = 0; i < diffsLen; i++) {
            if (diffs[i] <= level) {
                totalTime += times[i];
            } else {
                totalTime += (diffs[i] - level) * (times[i -1] + times[i]) + times[i];
            }
        }
        return totalTime;
    }
    
    // level별 계산
    let startLevel = 1;
    let endLevel = 100000;
    
    while (startLevel <= endLevel) {
        let mid = Math.floor((startLevel + endLevel) / 2);
        const result = solvePuzzle(mid);
        if (result < limit) {
            endLevel = mid - 1;
            answer = mid;
        } else if (result > limit) {
            startLevel = mid + 1;
        } else {
            return answer = mid;
        }
    }
   
    return answer;
}