function solution(w, h) {
    let c = 0;
    for (let i = 0; i < w; i++) {
        c += Math.ceil(h * (i + 1) / w) - Math.floor(h * i / w);
        // 자바스크립트는 64bit형식의 IEEE 754 기반이라 소수점 정밀도 부분에서 오류 발생 (테스트 6 실패)
    }
    return w * h - c;
}