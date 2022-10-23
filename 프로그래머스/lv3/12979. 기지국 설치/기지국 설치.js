function solution(n, stations, w) {
    let answer = 0;
    const spaceW = w * 2 + 1;
    stations.reduce((prev, curr, idx) => {
        const apartment = curr - w - prev;
        answer += apartment > 0 ? Math.ceil(apartment / spaceW) : 0;
        if (idx === stations.length - 1 && curr + w < n) {
            const apartment = n - (curr + w);
            return answer += apartment > 0 ? Math.ceil(apartment / spaceW) : 0;
        }
        return curr + w + 1;
    }, 1)
    return answer;
}