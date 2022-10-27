function solution(skill, skill_trees) {
    function isCorrect(tree) {
        let skillArr = skill.split('');
        for (const t of tree){
            // skill에 해당하지 않거나 skill 순서에 맞게 해당된 경우
            if (!skill.includes(t) || t === skillArr.shift()) continue;
            if (skillArr.length < 0) break;
            return false;
        }
        return true;
    }
    return skill_trees.filter(isCorrect).length;
}