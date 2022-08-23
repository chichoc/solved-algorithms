function solution(participant, completion) {
    const completeObj = {};
    completion.forEach(name => completeObj[name] = (completeObj[name] | 0) + 1);
    return participant.find(name => !completeObj[name]--)
    // participant.find(name => !completion[name]--, completion.map(name => completion[name] = (completion[name] | 0) + 1))
}