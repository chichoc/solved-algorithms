function solution(n)
{
    let ans = 1;
    while (n !== 1) {
        if (n % 2 === 1) {
            n -= 1;
            ans++;
        }
        n /= 2;
    }
    return ans;
}
// 5000, 2500, 1250, 625, 312(624), 156, 78, 39, 19(38), 9(18), 4(8), 2, 1