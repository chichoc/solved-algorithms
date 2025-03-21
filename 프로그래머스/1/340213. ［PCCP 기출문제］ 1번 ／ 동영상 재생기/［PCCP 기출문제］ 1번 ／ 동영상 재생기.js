function solution(video_len, pos, op_start, op_end, commands) {
    let answer = calculateTime(pos);
    const maxTime = calculateTime(video_len);
    const opStartTime = calculateTime(op_start)
    const opEndTime = calculateTime(op_end)
    
    function calculateTime(string) {
        const [minute, second] = string.split(':').map(Number);
        return minute * 60 + second;
    }
    
    function formatTime(number) {
        const minute = Math.floor(number / 60);
        const second = number % 60;
        return `${minute < 10 ? 0 : ''}${minute}:${second < 10 ? 0 : ''}${second}`;
    }
    
    function moveOpeningEnd(number) {
        if (number < opStartTime || number > opEndTime) return;
        answer = opEndTime;
    }
    
    function play(command) {
        moveOpeningEnd(answer)
        switch(command) {
            case 'prev':
                answer -= 10;
                if (answer < 0) answer = 0;
                break;
            case 'next':
                answer += 10;
                if (answer > maxTime) answer = maxTime;
                break;
        }
    }
    
    for (const command of commands) {
        play(command)
    }
    
    moveOpeningEnd(answer);
    return formatTime(answer);
}