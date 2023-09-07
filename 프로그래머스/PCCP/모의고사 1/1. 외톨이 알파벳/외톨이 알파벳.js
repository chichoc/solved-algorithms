function solution(input_string) {
    const answer = [];
    const alphabets = [];
    
    for (const input_char of input_string) {
        if (alphabets.includes(input_char)) continue;
        else {
            if (checkSolo(input_char, input_string)) answer.push(input_char)
        }
        alphabets.push(input_char);
    }
    return answer.length > 0 ? answer.sort().join('') : 'N';
}
    
function checkSolo(char, string) {
    const lenOfString = string.length;
    const indexes = [];
    
    for (let i = 0; i < lenOfString; i++) {
        if (string[i] === char) indexes.push(i);
    }
    
    for (let i = 1; i < indexes.length; i++) {
        if (indexes[i] !== indexes[i - 1] + 1) return true;
    }
    
    return false;
}
