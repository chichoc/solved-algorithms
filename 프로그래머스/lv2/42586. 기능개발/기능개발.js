function solution(progresses, speeds) {
    const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let standardDay = 0;
    let count = 0;
    const answer = [];
    days.forEach((day, index) => {
        if (standardDay < day) {
            if (count > 0) answer.push(count);
            standardDay = day;
            count = 1;
        } else count++;
        if (index === days.length - 1) answer.push(count);
    });
    return answer;
}