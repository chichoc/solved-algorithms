function solution(nums) {
    let answer = 0;
    const numsLen = nums.length;
    for (let i = 0; i < numsLen - 2; i++) {
        for (let j = i + 1; j < numsLen - 1; j++) {
            for (let k = j + 1; k < numsLen; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) answer++;
            }
        }
    }
    return answer;
}

function isPrime(num) {
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}