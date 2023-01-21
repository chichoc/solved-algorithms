function solution(elements) {
    const sumSet = new Set();
    elements.forEach(elem => sumSet.add(elem));
    for (let i = 1; i < elements.length; i++) {
        let end = 0;
        for (let start = 0; start < elements.length; start++) {
            end = start + i;
            const arrToAdd = (end < elements.length) ? elements.slice(start, end + 1) : elements.slice(start).concat(elements.slice(0, end - elements.length + 1));
            sumSet.add(arrToAdd.reduce((sum, curr) => sum + curr, 0));
        }
    }
    return sumSet.size;
}