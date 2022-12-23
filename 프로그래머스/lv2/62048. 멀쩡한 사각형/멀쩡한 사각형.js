function solution(w, h) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    // gcd * ((w/gcd) + (h/gcd) - 1) = w + h - gcd
    return w * h - (w + h - gcd(w, h));
}