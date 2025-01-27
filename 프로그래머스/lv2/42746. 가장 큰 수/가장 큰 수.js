function solution(numbers) {
    const buckets = [];
    for (const n of numbers){
        const s = String(n), l = s.length;
        let digit = '';
        for (let i = 0; i < 4; i++){
            digit += s[l > i ? i : i % l];
        }
        digit = 9999 - digit;
        buckets[digit] = buckets[digit] ? buckets[digit] + s : s;
    }
    const answer = buckets.join``;
    return answer[0] === '0' ? '0' : answer;
}