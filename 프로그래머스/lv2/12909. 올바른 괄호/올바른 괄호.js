function solution(s){
    let count = 0;
     for (const bracket of s){
          count += bracket === '(' ? 1 : -1;
         if (count < 0) return false;
     }
    return count === 0;
}