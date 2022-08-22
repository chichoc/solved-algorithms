function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((p,i) => p !== completion[i]);
}