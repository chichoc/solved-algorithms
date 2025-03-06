function solution(enroll, referral, seller, amount) {
  const sellerLength = seller.length;
  const enrollLength = enroll.length;
  const amounts = amount.map((a) => a * 100);
  const answer = {};

  function calculateBenefit(pay) {
    const charge = Math.floor(pay * 0.1);
    return [pay - charge, charge];
  }

  function checkBenefit(name, pay) {
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
  /** 회고
   - 오답1 (76.9/100): 런타임에러(테케2) & 시간초과(테케1)
   런타임 에러가 발생하여 enroll에 없는 이름이 seller에 있을까 싶어 if (!enroll.includes(name)) return; 코드를 추가했으나 잘못 짚었음
   수수료(charge)가 없는 경우 재귀 종료시키니까 통과 - 왜 런타임에러가 발생했는지 의문
   참고 링크:https://velog.io/@zioo/프로그래머스-다단계-칫솔-판매Python
 */
}
