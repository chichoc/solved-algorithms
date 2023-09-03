function solution(s) {
    let answer = 0;
    const len = s.length;
    const stack = [...s];
    
    for (let i = 0; i < len; i++) {
        if (check(stack.join(''))) answer++;
        if (i !== len - 1) stack.push(stack.shift());
    }
    
    function check(str) {
        const closeChars = [];
        
        for (const char of str) {
            if (['(', '[', '{'].includes(char)) {
                switch (char) {
                    case '(':
                        closeChars.unshift(')');
                        break;
                    case '[':
                        closeChars.unshift(']');
                        break;
                    case '{':
                        closeChars.unshift('}');
                }
            } else {
                if (closeChars.length === 0) return false;
                if (closeChars[0] !== char) return false;
                else closeChars.shift();
            }
        }
        return closeChars.length > 0 ? false : true
    }
    
    return answer;
}