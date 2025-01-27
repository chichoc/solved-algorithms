function solution(n, stations, w) {
    let answer = 0;
    const spaceW = w * 2 + 1;
    const endStation = stations.reduce((prev, curr) => {
        const apartment = curr - w - prev;
        answer += Math.ceil(apartment / spaceW);
        return curr + w + 1;
    }, 1)
    if (endStation <= n) answer += Math.ceil((n - endStation + 1) / spaceW)
    return answer;
}