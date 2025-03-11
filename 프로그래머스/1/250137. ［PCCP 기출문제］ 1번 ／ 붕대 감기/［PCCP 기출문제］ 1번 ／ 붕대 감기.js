function solution(bandage, health, attacks) {
    let currHealth = health;
    let currSec = 1;
    let continuous = 0;
    const [t, x, y] = bandage;
    
    function recover(startSec, endSec, afterHealth) {
        const diffSec = endSec - startSec;
        afterHealth += diffSec * x;
        if (diffSec >= t) {
            afterHealth += y * Math.floor(diffSec / t);
        }
        return afterHealth;
    }
    
    for (const [attackTime, attackAmount] of attacks) {
        const recoveredHealth = recover(currSec, attackTime, currHealth)
        currHealth = Math.min(health, recoveredHealth);
        
        currHealth -= attackAmount;
        if (currHealth <= 0) return -1;
        
        currSec = attackTime + 1;
    }
    
    
    return currHealth;
}