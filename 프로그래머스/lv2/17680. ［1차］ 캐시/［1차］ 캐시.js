function solution(cacheSize, cities) {
    if (!cacheSize) return cities.length * 5;
    const cache = [cities[0].toLowerCase()];
    return cities.slice(1).reduce((time, city) => {
        const lowerCity = city.toLowerCase();
        const hitIndex = cache.indexOf(lowerCity);
        if (hitIndex !== -1) {
            cache.length === cacheSize && cache.splice(hitIndex, 1);
            cache.push(lowerCity);
            return time += 1;
        } else {
            cache.length === cacheSize && cache.shift();
            cache.push(lowerCity);
            return time += 5;
        }
    }, 5);
}