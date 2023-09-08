function solution(ability) {
    let answer = 0;
    const numberOfSports = ability[0].length;
    const numberOfStudents = ability.length;
    const pickedIdx = [];
    
    ability.sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2]);
    
    pick(0, [], 0)
    
    function pick(sport, pickedIdx, sum) {
        if (sport === numberOfSports) {
            if (answer < sum) answer = sum;
            return;
        }
        for (let stuIdx = 0; stuIdx < numberOfStudents; stuIdx++) {
            if (pickedIdx.includes(stuIdx)) continue;
            pick(sport + 1, [...pickedIdx, stuIdx], sum + ability[stuIdx][sport]);
        }
    }
    return answer;
}
