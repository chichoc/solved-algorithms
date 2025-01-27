function solution(s) {
    return s.split(' ').map((word) => changeCase([...word])).join(' ');
}

function changeCase(array) {
    const changedWord = array.map((char, index) => index % 2 ? char.toLowerCase() : char.toUpperCase());
    return changedWord.join('');
}