function solution(n, left, right) {

    const answer = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n) + 1;
        const col = i % n + 1;
        answer.push(Math.max(row, col))
    }
    return answer;
// 1차원 배열 생성
//     const answer = new Array(n**2).fill(n);
//     for (let i = 0; i < n; i++) {
//         fillArray(i)
//     }
    
//     function fillArray(currNum) {
//         for (let r = 0; r <= currNum; r++) {
//             for (let c = 0; c <= currNum; c++) {
//                 const idx = r * n + c;
//                 answer[idx] = Math.min(answer[idx], currNum + 1);
//             }
//         }
//     }
//     return answer.slice(left, right + 1);
}