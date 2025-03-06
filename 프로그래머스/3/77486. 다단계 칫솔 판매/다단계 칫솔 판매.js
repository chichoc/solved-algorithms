function solution(enroll, referral, seller, amount) {
    const sellerLength = seller.length;
    const enrollLength = enroll.length;
    const amounts = amount.map(a => a * 100);
    const answer = {};
    
    function calculateBenefit(pay) {
        const charge = Math.floor(pay * 0.1);
        return [pay - charge, charge];
    }
    
    function checkBenefit(name, pay) {
        if (!enroll.includes(name)) return;
        
        const [benefit, charge] = calculateBenefit(pay);
        answer[name] += benefit;
        if (charge === 0) return;
        
        const next = tree[name];
        if (next === '-') return;
         checkBenefit(next, charge);   
    }
    
    // 객체로 저장: 정답(enrollName: amount)/ 계층(enrollName: referralName) 
    const tree = {};
    for (let i = 0; i < enrollLength; i++) {
        tree[enroll[i]] = referral[i];
        answer[enroll[i]] = 0;
    }
    
    // amount 순회하며 이익금 계산
    for (let i = 0; i < sellerLength; i++) {
        checkBenefit(seller[i], amounts[i]);
    }
    
    return Object.values(answer);
}