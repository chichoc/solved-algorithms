function solution(begin, target, words) {
    const visited = {[begin] : 0};
    const queue = [begin];
    
    while(queue.length) {
        const curr = queue.shift();
        if (curr === target) break;
        for (const word of words) {
            if (isChanged(word, curr) && !visited[word]) {
                visited[word] = visited[curr] + 1;
                queue.push(word);
            }
        }
    }
    return visited[target] || 0;
}

function isChanged(word1, word2) {
    let diff = 0;
    [...word1].forEach((char, index) => word2[index] !== char && diff++)
    return diff === 1 ? true : false;
}