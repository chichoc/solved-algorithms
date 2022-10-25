function solution(clothes) {
    const clothesLen = {};
    clothes.forEach(c => clothesLen[c[1]] ? clothesLen[c[1]]++ : clothesLen[c[1]] = 1);
    const sortedLen = Object.values(clothesLen).sort((a, b) => a - b);
    return sortedLen.reduce((sum, curr) => sum * (curr + 1), 1) - 1;
}