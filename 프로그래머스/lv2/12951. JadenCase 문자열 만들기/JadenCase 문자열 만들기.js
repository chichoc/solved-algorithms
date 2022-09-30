function solution(s) {
    return s.split(' ').map(word => word[0] ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word).join(' ');
}