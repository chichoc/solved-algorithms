function solution(name) {
    const nameLen = name.length;
    let changeAlphabet = 0;
    let minMoves = nameLen - 1;
    
    for (let i = 0; i < name.length; i++) {
        let changeNum = name.charCodeAt(i);
        changeAlphabet += changeNum < 78 ? changeNum - 65 : 91 - changeNum;
        
        // 연속되는 A 갯수
        let index = i + 1;
        while (index < name.length && name[index] === 'A') index++;
        
        // 순서대로, 도중에 뒤로, 처음부터 뒷부분(BBBBAAAAAAAB) 중 이동수가 적은 것을 선택
        minMoves = Math.min(minMoves, i * 2 + nameLen - index, (nameLen - index) * 2 + i);
    }

    return changeAlphabet + minMoves;
}
// 참고: https://velog.io/@jeeseob5761/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1