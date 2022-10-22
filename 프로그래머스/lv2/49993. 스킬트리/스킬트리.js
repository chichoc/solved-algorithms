function solution(skill, skill_trees) {
    const regex = new RegExp(`[^${skill}]`, 'g');
    return skill_trees
            .map(e => e.replace(regex, ''))
            .filter(e => skill.indexOf(e) === 0 || e === '').length;
}