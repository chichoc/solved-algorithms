function solution(record) {
    var answer = [];
    const userId = new Map();
    
    record.map((phrase) => saveUser(phrase, userId));
    const guideString = { Enter: '들어왔습니다.', Leave: '나갔습니다.' };
    record.map((phrase) => {
        const word = phrase.split(' ');
        if (word[0] === 'Change') return;
        answer.push( userId.get(word[1]) + '님이 ' + guideString[word[0]]);
    })
    return answer;
}

function saveUser(string, map) {
    const word = string.split(' ');
    if (word[0] === 'Leave') return;
    map.set(word[1], word[2]);
}