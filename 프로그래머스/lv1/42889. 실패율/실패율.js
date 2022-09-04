function solution(N, stages) {
    let failureCount = Array(N + 1).fill(0);
    stages.forEach(userStage => failureCount[--userStage]++);
    
    let failureRate = [...Array(N).keys()].map((e, i) => [i + 1, 0]);
    failureRate.reduce((challengedUsers, element, index)=> {
        element[1] = failureCount[index] / challengedUsers;
        return challengedUsers - failureCount[index];
    }, stages.length);
    
    return failureRate.sort((a, b) => b[1] - a[1]).map(e => e[0]);
}