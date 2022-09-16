function solution(str1, str2) {
    let answer = 0;
    const str1ToArray = strToArray(str1, str1.length);
    const str2ToArray = strToArray(str2, str2.length);
    if (!str1ToArray.length && !str2ToArray.length) return 65536;
    
    let multiIntersectionLen = 0, multiUnionLen = 0
    const union = new Set([...str1ToArray, ...str2ToArray]);
     for (const slice of union) {
        const str1Count = str1ToArray.filter(x => x === slice).length;
        const str2Count = str2ToArray.filter(x => x === slice).length;
        multiIntersectionLen += Math.min(str1Count, str2Count)
        multiUnionLen += Math.max(str1Count, str2Count)
    }
    answer = multiUnionLen === 0 ? 65536 : Math.floor(multiIntersectionLen / multiUnionLen * 65536)
    return answer;
}

function strToArray(str, len) { 
    const array = [];
     for (let i = 0; i < len - 1; i ++) {
         const slicedStr = str.slice(i, i + 2);
        const onlyAlphabet = /^[a-zA-Z]+$/;
         if (onlyAlphabet.test(slicedStr)) array.push(slicedStr.toLowerCase());
    }
    return array;
}