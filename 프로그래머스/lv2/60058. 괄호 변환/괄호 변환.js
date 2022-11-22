function reverse(str) {
    return str.slice(1, str.length - 1).split('').map(c => c === '(' ? ')' : '(').join('')
}
function solution(p) {
    // 1단계
    if (p === '') return '';
    // 2단계
    let balance = 0;
    let pivot = 0;
    do { balance += p[pivot++] === '(' ? 1 : -1 } while (balance !== 0);
    const [u, v] = [p.slice(0, pivot), solution(p.slice(pivot))];
    // 3-4단계 (균형잡힌 괄호 문자열은 (로 시작하면 무조건 올바른 괄호 문자열)
    if (u[0] ==='(') return u + v;
    else return '(' + v + ')'+ reverse(u);
}
