function solution(new_id) {
    const idToSuggest = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const length = idToSuggest.length;
    return length > 2 ? idToSuggest : idToSuggest + idToSuggest.slice(-1).repeat(3 - length);
}