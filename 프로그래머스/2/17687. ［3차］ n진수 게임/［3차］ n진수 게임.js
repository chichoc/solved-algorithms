function solution(n, t, m, p) {
    const numbers = [];
    let answer = '';
    let lengthOfNumbers = 0
    
    for (let i = 0; i <= t*m; i++) {
        let num = i.toString(n);
        
        if (n >= 10) num = numToAlphabet(num, n);
        if (num.length > 1) num = num.split('');
        
        numbers.push(...num);
    }
    
    lengthOfNumbers = numbers.length;
    
    for (let j = p - 1, count = 0; count < t; j += m, count += 1) {
        answer += numbers[j];
    }
    
    console.log(numbers);
    
    return answer;
}

function numToAlphabet(number, radix) {
    return (number + '').toString(radix).toUpperCase();
}