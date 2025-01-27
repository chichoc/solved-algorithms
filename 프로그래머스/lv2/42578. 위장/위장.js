function solution(clothes) {
    const map = new Map();
    let count = 1;

    for(let [c, t] of clothes) map.set(t, (map.get(t) || 0) + 1);
    for(let v of map.values()) count *= (v + 1);
    return count - 1;
    // (계산된 경우의 수) * (해당 종류의 개수 + 1(착용하지 않는 경우))  - 1(모두 착용하지 않는 경우)
}