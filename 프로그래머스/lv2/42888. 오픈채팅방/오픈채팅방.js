function solution(record) {
    const userInfo = new Map();
    const action = [];
    const guideMapping = {
        Enter: '들어왔습니다.', 
        Leave: '나갔습니다.'
    };
    
    record.forEach(phrase => saveMsg(phrase, userInfo, action));
    
    return action.map(([guide, id]) => {
        return `${userInfo.get(id)}님이 ${guideMapping[guide]}`;
    });;
}

function saveMsg(string, map, array) {
    const [guide, id, nick] = string.split(' ');
    if (guide !== 'Leave') map.set(id, nick);
    if (guide !== 'Change') array.push([guide, id]);
}