function solution(s, n) {
    return s.split('').map((alpha) => {
        if (alpha === ' ') return ' ';
        let unicode = alpha.charCodeAt(0);
        return String.fromCharCode(unicode > 90 ?
      (unicode + n - 97) % 26 + 97 : (unicode + n - 65) % 26 + 65);
    }).join('');
}