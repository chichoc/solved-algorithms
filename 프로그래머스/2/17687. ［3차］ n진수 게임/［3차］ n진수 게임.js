function solution(n, t, m, p) {
    const numbers = [];
    let answer = '';
    let tubeIdx = p - 1;
    
    for (let i = 0; i <= t * m; i++) {
        let num = i.toString(n);
        
        if (n >= 10) {
            num = numToAlphabet(num, n);
        }
        
        numbers.push(...num);
    }
    
    for (let count = 0; count < t; count++) {
        answer += numbers[tubeIdx];
        tubeIdx += m;
    }
    
    return answer;
}

function numToAlphabet(number, radix) {
    return (number + '').toString(radix).toUpperCase();
}