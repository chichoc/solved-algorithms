function solution(skill, skill_trees) {
    let answer = 0;
    const skillArr = [...skill];
    for (tree of skill_trees) {
        const filteredTree = [...tree].map(t => skillArr.some(s => s === t) ? t : '').join('');
        if (filteredTree.length === 0) {
            answer++;
            continue;
        }
        const idxArr = [...filteredTree].map(e => skillArr.indexOf(e));
        if (idxArr.every((e, i) => e === i)) answer++;
    }
    return answer;
}