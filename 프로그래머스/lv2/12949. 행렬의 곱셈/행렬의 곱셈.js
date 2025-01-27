function solution(arr1, arr2) {
    return arr1.map(row => arr2[0].map((_, j) => row.reduce((sum, elem, k) => sum + elem * arr2[k][j], 0)));
}