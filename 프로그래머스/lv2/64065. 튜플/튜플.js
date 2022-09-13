function solution(s) {
    const sToArray = s.replace(/^{|}$/g, '').split('},').map(str => str.replace(/^{|}$/g, '').split(',')).sort((a, b) => a.length - b.length);
    return sToArray.reduce((tup, arr) => [...tup, arr.find(elem => !tup.includes(elem))], []).map(x => +x);
}