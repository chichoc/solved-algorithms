function solution(s) {
    const sToArray = s.slice(2, -2).split('},{')
                        .map(str => str.split(','))
                        .sort((a, b) => a.length - b.length);
    return sToArray.reduce((tup, arr) => [...tup, arr.find(elem => !tup.includes(elem))], []).map(x => +x);
}