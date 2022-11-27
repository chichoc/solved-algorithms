function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    while (people.length) {
        const weight = people.pop();
        if (limit - weight >= people[0]) people.shift();
        answer++;
    }
    return answer;
}