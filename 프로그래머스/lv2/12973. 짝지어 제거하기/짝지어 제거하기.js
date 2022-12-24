function solution(s){
    if(s.length % 2 !== 0) return 0;

    const answer = [];
    const a = [...s];

    for(let i = 0; i < a.length; i++) {        
        if (a[i] == answer[answer.length - 1]) {
            answer.pop();
            continue
        }
        answer.push(a[i])
        if (a.length - i < answer.length) return 0;
    }
    return 1;
}