function solution(n, arr1, arr2) {
    var answer = [];
    return arr1.map((row, index) => {
        // 2진수로 변환
        const [changeRowOfArr1, changeRowOfArr2] = [row, arr2[index]].map(rowOfArray => {
            const changeRow = ChangeBinaryNum(rowOfArray);
            return '0'.repeat(n - changeRow.length) + changeRow;
        });
        // 1 = #, 0 = ' '로 변환
        return [...changeRowOfArr1].map((num, index) => [num, changeRowOfArr2[index]].some(n => +n === 1) ? '#' : ' ').join('');
    });
}

function ChangeBinaryNum(num) {
   return num ? ChangeBinaryNum(parseInt(num / 2)) + num % 2 : '';
}