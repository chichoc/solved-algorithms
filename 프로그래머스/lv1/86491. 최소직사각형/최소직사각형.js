function solution(sizes) {
    const [maxW, maxH] = sizes.reduce(([prevW, prevH], [w, h]) => [Math.max(prevW, Math.max(w, h)), Math.max(prevH, Math.min(w, h))], [0, 0])
    return maxW * maxH;
}