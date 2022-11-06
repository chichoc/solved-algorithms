function solution(clothes) {
    const clothesLen = {};
    clothes.forEach(c => clothesLen[c[1]] ? clothesLen[c[1]]++ : clothesLen[c[1]] = 1);
    return Object.values(clothesLen).reduce((sum, curr) => sum * (curr + 1), 1) - 1;
    // (계산된 경우의 수) * (해당 종류의 개수 + 1(착용하지 않는 경우))  - 1(모두 착용하지 않는 경우)
}
