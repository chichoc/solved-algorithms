function solution(N, stages) {
    let failureRate = [];
    for (let i = 1; i <= N; i++){
        let reach = stages.filter(s => s >= i).length;
        let curr = stages.filter(s => s === i).length;
        failureRate.push([i, curr / reach]);
    }
    return failureRate.sort((a, b) => b[1] - a[1]).map(a => a[0]);
}