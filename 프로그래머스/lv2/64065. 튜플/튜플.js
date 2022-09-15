function solution(s) {
    const sToArray = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
                        .sort((a, b) => a.length - b.length);
    return sToArray.reduce((tup, arr, index) => {
        if (index) return [...tup, arr.find(elem => !tup.includes(elem))];
        return arr;
    }, []);
}