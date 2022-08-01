function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++){
        const sum = arr1[i].map((num, idx) => num + arr2[i][idx])
        answer[i] = sum;
    }
    return answer;
}