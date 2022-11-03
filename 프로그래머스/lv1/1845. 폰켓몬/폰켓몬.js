function solution(nums) {
    const maxCount = nums.length / 2;
    const setOfNumsLen = new Set(nums).size;
    return maxCount < setOfNumsLen ? maxCount: setOfNumsLen;
}