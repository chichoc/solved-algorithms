function solution(survey, choices) {
    const type = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]; 
    const scoreList = {};
    type.forEach(([t1, t2]) => {
        scoreList[t1] = 0;
        scoreList[t2] = 0;
    });
    survey.forEach((type, index) => {
        const choiceScore = choices[index];
        if (choiceScore === 4) return;
        typeToAddScore = choiceScore < 4 ? type[0] : type[1];
        scoreList[typeToAddScore] += Math.abs(4 - choiceScore);
    });
    type.forEach(compareType => compareType.sort((t1, t2) => scoreList[t2] - scoreList[t1]));
    return type.map(types => types[0]).join('');
}