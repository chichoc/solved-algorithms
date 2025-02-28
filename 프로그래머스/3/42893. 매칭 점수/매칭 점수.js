function solution(word, pages) {
    let answer = 0;
    const pageLen = pages.length;
    const pageNames = Array(pageLen).fill('');
    const pageInfos = Array.from({length: pageLen}, () => ({inners:[]}))
    const matchingScore = [];
    
    function findTag(body, tagName) {
        const regex = new RegExp(`<${tagName}[^>]+>`, 'g')
        return body.match(regex)
    }
    
    function findAttr(meta, attribute) {
        const regex = new RegExp(`${attribute}="([^"]+)"`)
        const match = meta.match(regex);
        return match ? match[1].replace('https://', '') : null;
    }
    
    function checkDefaultScore(body) {
        const regex = new RegExp(`(?:^|[^a-zA-Z])${word}(?=[^a-zA-Z]|$)`, "gi");
        const result = body.match(regex);
        return result ? result.length : 0;
    }
    
    function findLinks(body) {
        const aTags = findTag(body, 'a');
        return aTags?.map(tag => findAttr(tag, 'href')) || [];
    }
    
    function calculateLinkScore(i) {
        return pageInfos[i].default / pageInfos[i].link
    }
    
    for (let i = 0; i < pageLen; i++) {
        // 웹페이지 url 찾기 (meta 태그의 content 속성)
        const metaTags = findTag(pages[i], 'meta');
        metaTags.forEach(tag => {
            if (!tag.includes('content')) return true;
            pageNames[i] = findAttr(tag, 'content');
        })
        
        // 기본 점수 계산
        pageInfos[i].default = checkDefaultScore(pages[i]);
    }
    
    // 외부 링크 찾기
    for (let i = 0; i < pageLen; i++) {
        const links = findLinks(pages[i]);
        pageInfos[i].link = links.length;
        links.forEach(link => {
            const idx = pageNames.indexOf(link);
            if (idx < 0) return;
            else pageInfos[pageNames.indexOf(link)].inners.push(i)
        })
    }
    
    // 링크 & 매칭 점수 계산
    for (let i = 0; i < pageLen; i++) {
        let score = pageInfos[i].default;
        pageInfos[i].inners.forEach(inner => score += calculateLinkScore(inner))
        matchingScore.push(score);
    }
    
    return matchingScore.indexOf(Math.max(...matchingScore))
}