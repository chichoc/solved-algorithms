function solution(fees, records) {
    // 차 번호 순으로 정렬
    const recordsArray = records.map(record => record.split(" ")).sort((a, b) => a[1] - b[1]);
    const time = {};
    [... new Set(recordsArray.map(record => record[1]))].forEach(num => time[num] = 0);
    
    recordsArray.reduce((record1, record2, index) => {
        // in in (서로 다름) / in out (서로 같음)/ out in (서로 같거나 다름)/ out out x
        if (record1[2] === 'IN'){
            if (record1[1] === record2[1]) time[record1[1]] += getMinutes(record2[0], record1[0]);
            else if (record2[2] === 'IN' && index === recordsArray.length - 1) {
                time[record1[1]] += getMinutes('23:59', record1[0]);
                time[record2[1]] += getMinutes('23:59', record2[0]);
            } else if (record2[2] === 'IN') time[record1[1]] += getMinutes('23:59', record1[0]);
        } else if (index === recordsArray.length - 1) time[record2[1]] += getMinutes('23:59', record2[0]);
        return record2;
    });
    
    if (records.length === 1) time[recordsArray[0][1]] += getMinutes('23:59', recordsArray[0][0]);
    
    return Object.entries(time).sort((a, b) => a[0] - b[0]).map(time => {
        if (fees[0] < time[1]) {
            return fees[1] + Math.ceil((time[1] - fees[0])/fees[2]) * fees[3];
        } else return fees[1];
    })
}

function getMinutes(str1, str2) {
    let answer = 0;
    const time = [str1, str2].map(str => str.split(':'));
    const minute = time[0][1] - time[1][1];
    answer += minute >= 0 ? minute : minute + 60;
    if (time[0][1] < time[1][1]) time[0][0] -= 1;
    answer += (time[0][0] - time[1][0]) * 60;
    return answer;
}
