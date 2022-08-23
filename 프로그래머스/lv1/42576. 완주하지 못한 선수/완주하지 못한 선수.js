function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        const a = participant[i];
        map.set(a, (map.get(a) || 0) + 1);
        
        if (i < completion.length) {
            const b = completion[i];
            map.set(b, (map.get(b) || 0) - 1);
        }
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }
}