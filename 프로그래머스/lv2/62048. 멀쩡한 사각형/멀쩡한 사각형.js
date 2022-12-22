function solution(w, h) {
    const slope = h / w;
    let bottomOfSlope = 0;
    
    for (let i = 1; i <= w; i++) {
        bottomOfSlope += Math.ceil(slope * i);
    }
    return (w * h - bottomOfSlope) * 2;
}