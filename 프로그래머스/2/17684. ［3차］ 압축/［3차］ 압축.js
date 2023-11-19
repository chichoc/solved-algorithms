function solution(msg) {
    let pos = 0;
    const dict = [];
    const answer = [];
    
    // 사전 초기화
    for(let i = 65; i <= 90; i++) {
        dict.push(String.fromCharCode(i));
    }
    
    for(let i = 0; i < msg.length; i++) {
        if (i < pos) continue;
        const w = findDictString(msg.slice(i));
        pos += w.length;
        answer.push(dict.indexOf(w) + 1)
        
        if (i === msg.length - 1) break;
        const wc = w + msg[i + w.length];
        dict.push(wc);
    }
    
    function findDictString(string) {
        const dictLen = dict.length;
        for(let i = dictLen; i > -1; i--) {
            if (string.startsWith(dict[i])) return dict[i];
        }
    }
    
    return answer;
}