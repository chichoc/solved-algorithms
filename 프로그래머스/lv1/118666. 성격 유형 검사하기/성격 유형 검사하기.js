function solution(survey, choices) {
    const types = ['RT', 'CF', 'JM', 'AN']; 
    const scoreList = {};
    types.forEach(type => type.split('').forEach(char => scoreList[char] = 0));
                 
    survey.forEach(([disagree, agree], index) => {
        const choiceScore = choices[index];
        if (choiceScore === 4) return;
        scoreList[choiceScore < 4 ? disagree : agree] += Math.abs(4 - choiceScore);
    });
    
    return types.map(([t1, t2]) => scoreList[t2] > scoreList[t1] ? t2 : t1).join('');
}