function solution(cacheSize, cities) {
    if (!cacheSize) return cities.length * 5;
    const cache = [];
    let time = 0;
    cities.forEach(city => {
        const lowerCity = city.toLowerCase();
        const hitIndex = cache.indexOf(lowerCity);
        if (hitIndex !== -1) {
            cache.splice(hitIndex, 1);
            time ++;
        } else {
            cache.length === cacheSize && cache.shift();
            time += 5;
        }
        cache.push(lowerCity);
    });
    return time;
}