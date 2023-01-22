function solution(elements) {
    const sumSet = new Set(elements);
    for (let i = 2; i <= elements.length; i++) {
        const extendedElements = elements.concat(elements.slice(0, i));
        for (let start = 0; start < elements.length; start++) {
            sumSet.add(extendedElements.slice(start, start + i).reduce((sum, curr) => sum + curr, 0));
        }
    }
    return sumSet.size;
}