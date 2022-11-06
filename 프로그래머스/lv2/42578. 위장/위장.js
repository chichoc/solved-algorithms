function solution(clothes) {
    const LengthOfClothes= {};
    clothes.forEach(([clothing, type]) => LengthOfClothes[type] = (LengthOfClothes[type] || 0) + 1);
    return Object.values(LengthOfClothes).reduce((sum, curr) => sum * (curr + 1), 1) - 1;
    // (계산된 경우의 수) * (해당 종류의 개수 + 1(착용하지 않는 경우))  - 1(모두 착용하지 않는 경우)
}
