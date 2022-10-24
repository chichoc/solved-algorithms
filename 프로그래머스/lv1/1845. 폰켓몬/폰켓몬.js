function solution(nums) {
    const maxCount = nums.length / 2;
    const numsMapLength = [...new Set(nums)].length;
    return maxCount / numsMapLength >= 1 ? numsMapLength : maxCount % numsMapLength;
}