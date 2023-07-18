const word = require('fs').readFileSync(0).toString().trim();
const newWords = [];

// 단어 자르기
for (let i = 1; i < word.length - 1; i++) {
  const first = reverseWord(word.slice(0, i));
  for (let j = i + 1; j < word.length; j++) {
    const second = reverseWord(word.slice(i, j));
    const third = reverseWord(word.slice(j));
    newWords.push(first + second + third);
  }
}

function reverseWord(word) {
  return [...word].reverse().join('');
}

// 만들 수 있는 단어 정렬
newWords.sort();

console.log(newWords[0]);