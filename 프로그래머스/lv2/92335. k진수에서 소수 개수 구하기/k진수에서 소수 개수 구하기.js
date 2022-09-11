function solution(n, k) {
    const changeN = n.toString(k).split('0');
    return changeN.filter(num => num > 1 && checkPrime(num)).length;
}

function checkPrime(num) {
    if (num % 2 === 0) return num == 2 ? true : false;
    for (let i = 3; i <= Math.sqrt(num); i += 2){
        if (num % i === 0) return false;
    }
    return true;
}