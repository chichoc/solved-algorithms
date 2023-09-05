function solution(tickets) {
    const answers = [];
    const arrival = {};
    const lenOfAnswer = tickets.length + 1;
    
    // 객체로 저장
    for (const ticket of tickets) {
        const [start, end] = ticket;
        
        if (arrival[start]) arrival[start].push(end);
        else arrival[start] = [end];
        
        if (!arrival[end]) arrival[end] = [];
    }
    
    
    // 모두 방문하는 공항경로 저장
    dfs('ICN', 1, ['ICN'], {...arrival});
    
    // 알파벳 순서 비교
    return getFirstAlphabetically();
    
    
    function dfs(curr, count, course, arrivalToVisit) {
        if (count === lenOfAnswer) {
            answers.push(course);
            return;
        };
        for (const [idx, airport] of Object.entries(arrivalToVisit[curr])) {
            const newArrivalToVisit = JSON.parse(JSON.stringify(arrivalToVisit));
            newArrivalToVisit[curr].splice(idx, 1);
            dfs(airport, count + 1, [...course, airport], newArrivalToVisit);
        }
    }
    
    function getFirstAlphabetically() {
        let firstAlphabetically = answers[0];
        for (let i = 1; i < answers.length; i++) {
            const currentArray = answers[i];
            if (JSON.stringify(currentArray) < JSON.stringify(firstAlphabetically)) firstAlphabetically = currentArray;
        }
        return firstAlphabetically;
    }
    
}