function solution(n, works) {
    const sortedWorks = works.sort((a, b) => b - a);
    
    while (n > 0) {
        const max = sortedWorks[0];
        if (max === 0) return 0;
        for (let i = 0; i < works.length; i++) {
            if (sortedWorks[i] >= max) {
                sortedWorks[i]--;
                n--;
            }
            if (n === 0) break;
        }
    }
    return works.reduce((sum, num) => sum + num ** 2, 0);
}