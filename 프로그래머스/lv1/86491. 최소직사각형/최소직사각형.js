function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    sizes.forEach(size => {
        const [w, h] = size.sort((a, b) => b - a);
        if (w > maxW) maxW = w;
        if (h > maxH) maxH = h;
    })
    
    return maxW * maxH;
}