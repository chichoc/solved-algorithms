function solution(s) {
    const answer = s.split(' ').map((word) => changeCase([...word]))
    return answer.join(' ');
}

function changeCase(array) {
    const changedWord = array.map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
    return changedWord.join('');
}