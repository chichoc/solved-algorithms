function solution(command) {
    const answer = [0, 0];
    const directions = [2, 1, -2, -1];
    let idx = 0;
    
    for (const char of command) {
        switch (char) {
            case 'R':
                if (++idx === 4) idx = 0;
                break;
            case 'L':
                if (--idx === -1) idx = 3;
                break;
            case 'G':
                const directG = directions[idx];
                directG > 0 ? answer[directG - 1]++: answer[Math.abs(directG + 1)]--;
                break;
            case 'B':
                const directB = directions[idx];
                directB > 0 ? answer[directB - 1]--: answer[Math.abs(directB + 1)]++;
        }
    }
    return answer;
}
