function solution(s){
    let bracket = 0;
     for (let i = 0; i < s.length; i++){
         s[i] === '(' ? bracket++ : bracket--;
         if (bracket < 0) return false;
     }
    return bracket === 0 ? true : false;
}