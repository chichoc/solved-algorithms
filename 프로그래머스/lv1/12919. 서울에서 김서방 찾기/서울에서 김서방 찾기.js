function solution(seoul) {
    const index = seoul.findIndex((s, i) => s === 'Kim');
    return `김서방은 ${index}에 있다`;
}