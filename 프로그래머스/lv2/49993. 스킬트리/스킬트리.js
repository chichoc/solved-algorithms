function solution(skill, skill_trees) {
    function isCorrect(tree) {
        let test = skill.split('');
        for (var i = 0; i < tree.length; i++) {
            // skill에 해당하지 않거나 skill 순서에 맞게 해당된 경우
            if (!skill.includes(tree[i]) || tree[i] === test.shift()) continue;
            return false;
        }
        return true;
    }
    return skill_trees.filter(isCorrect).length;
}