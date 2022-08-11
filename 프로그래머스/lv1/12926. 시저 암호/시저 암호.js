function solution(s, n) {
    return s.split('').map((alpha) => {
        if (alpha === ' ') return ' ';
        let unicode = alpha.charCodeAt(0) + n;
        if ((alpha.charCodeAt(0) <= 90 && 90 - alpha.charCodeAt(0) < n) || unicode > 122) unicode = unicode - 26;
        return String.fromCharCode(unicode)
    }).join('');
}