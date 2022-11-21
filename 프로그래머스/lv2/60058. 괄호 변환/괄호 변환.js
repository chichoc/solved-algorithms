function solution(p) {
    let answer = '';
    let count = {};
    
    function makeCorrect(str) {
        // 1단계
        if (str === '') return '';
        // 2단계
        count = {'(': 0, ')': 0};
        const indexToSplit = [...str].findIndex((char, index) => {
            count[char]++;
            if (count['(']=== count[')']) return true;
        });
        const [u, v] = [str.substring(0, indexToSplit + 1), str.substring(indexToSplit + 1)];
        // 3단계
        count = {'(': 0, ')': 0};
        if ([...u].every(c => {
            count[c]++;
            return (count['('] < count[')']) ? false :  true;
        })) {
            answer += u;
            makeCorrect(v);
        } else {
        // 4단계
            answer += '(';
            makeCorrect(v);
            answer += ')'+ u.slice(1, u.length - 1).split('').map(c => c === '(' ? ')' : '(').join('');
        }
    }
    makeCorrect(p);
    return answer;
}

