function solution(progresses, speeds) {
    const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let standardDay = days[0];
    const answer = [0];
    let answerIndex = 0;
    
    days.forEach((day) => {
        if (day <= standardDay) answer[answerIndex] ++;
        else {
            standardDay = day;
            answer[++answerIndex] = 1;
        }
    });
    return answer;
}