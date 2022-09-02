function solution(new_id) {
    if (!new_id.length) return 'a';
    const strToRemove = /[^0-9a-z-_.]/g;
    const consecutivePeriod = /[.]{2,}/g;
    let idToSuggest = new_id
        .toLowerCase()
        .replace(strToRemove, '')
        .replace(consecutivePeriod, '.')
        .replace(/[.]$/, '')
        .replace(/^[.]/, '');
    if (idToSuggest.length >= 16) return idToSuggest.slice(0, 15).replace(/[.]$/, '');
    if (!idToSuggest.length) idToSuggest = 'a';
    if (idToSuggest.length <= 2) return idToSuggest + idToSuggest.slice(-1).repeat(3 - idToSuggest.length);
    return idToSuggest
}