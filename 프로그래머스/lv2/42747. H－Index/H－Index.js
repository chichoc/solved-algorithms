function solution(citations) {
    citations.sort((a, b) => b - a);
    for (let citation = citations.length; citation > 0; citation--) {
        const h = citations.filter(c => c >= citation).length;
        if (h >= citation) return citation;
    }
    return 0;
}