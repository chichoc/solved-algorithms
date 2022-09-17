function solution(str1, str2) {
    let answer = 0;
    const str1ToArray = strToArray(str1, str1.length);
    const str2ToArray = strToArray(str2, str2.length);
    const str1ToArrayLen = str1ToArray.length;
    const str2ToArrayLen = str2ToArray.length;
    if (!str1ToArrayLen && !str2ToArrayLen) return 65536;
    
    let interSection = 0;
    str1ToArray.forEach(str => {
        const indexInStr2Array = str2ToArray.indexOf(str)
        if (indexInStr2Array !== -1) {
            str2ToArray.splice(indexInStr2Array, 1);
            interSection++;
        }
    });
    answer = interSection / (str1ToArrayLen + str2ToArrayLen - interSection);
    return Math.floor(answer * 65536);
}

function strToArray(str) { 
    const array = [];
     for (let i = 0; i < str.length - 1; i++) {
         const slicedStr = str.slice(i, i + 2);
         const onlyAlphabet = /^[a-zA-Z]+$/;
         if (onlyAlphabet.test(slicedStr)) array.push(slicedStr.toLowerCase());
    }
    return array;
}