// https://school.programmers.co.kr/learn/courses/15008/lessons/121685
// 참고한 풀이: https://programming4myself.tistory.com/88
function solution(queries) {
    const answer = [];

    for (let [g, idx] of queries) {
        answer.push(findLastGen(g, idx));
    }
    return answer;
}

function findLastGen(g, idx) {
    let parent = 'Rr';
    const stack = [];
    idx -= 1;
        
    for (let i = g; i > 1; i--) {
        stack.push(idx % 4);
        idx = Math.floor(idx / 4);
    }
    
    while (stack.length) {
        const curr = stack.pop();
        if (curr === 0) return 'RR';
        else if (curr === 3) return 'rr';
    }
    return 'Rr';
}
