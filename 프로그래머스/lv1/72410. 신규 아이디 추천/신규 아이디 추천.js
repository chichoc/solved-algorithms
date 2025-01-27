function solution(new_id) {
    const idToSuggest = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .padEnd(1, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const length = idToSuggest.length;
    return idToSuggest.padEnd(3, idToSuggest[length - 1])
}