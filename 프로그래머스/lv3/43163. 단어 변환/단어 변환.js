function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    const visited = [[begin, 0]];
    
    while(visited) {
        const [curr, count] = visited.shift();
        if (curr === target) return count;
        for (const word of words) {
            if (!isChanged(word, curr)) continue;
            visited.push([word, count + 1]);
        }
    }
}

function isChanged(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++){
        if (word1[i] !== word2[i]) diff++;
        if (diff > 1) return false;
    }
   return true;
}