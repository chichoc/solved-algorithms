function solution(s) {
    let lengths = [];
    for (let unit = 1; unit <= s.length / 2; unit++) {
        let string = '';
        let repeatedWord;
        let wordCount = 0;
        
        const loopCount = Math.floor(s.length / unit);
        [...Array(loopCount).keys()].forEach((index) => {
            const slicedWord = s.slice(index * unit, (index + 1) * unit);
            if (repeatedWord !== slicedWord) {
                if (wordCount > 1) string += wordCount;
                if (repeatedWord) string += repeatedWord;
                repeatedWord = slicedWord;
                wordCount = 1;
            } else if (repeatedWord === slicedWord) wordCount++;
            if (index === loopCount - 1) {
                if (wordCount > 1) string += wordCount;
                string += slicedWord;
            }
        });
        if (s.length % unit) string += s.slice(-s.length % unit);
        lengths.push(string.length);
    }
    return lengths.length ? Math.min(...lengths) : 1;
}