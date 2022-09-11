function solution(n, k) {
    const changeN = n.toString(k);
    return changeN.split('0').filter(num => num > 1 && checkPrime(num)).length;
}

function checkPrime(num) {
    if (num % 2 === 0) return num == 2 ? true : false;
    for (let i = 3; i < Math.sqrt(num) + 1; i += 2){
        if (num % i === 0) return false;
    }
    return true
}