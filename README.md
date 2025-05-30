# solved-algorithms

효율성 테스트가 있는 문제: 해당 문제 이름'+'  
한 번에 통과하지 못한 문제: \*해당 문제 이름  
풀이 참고해서 통과한 문제: \#해당 문제 이름  
더 효율적인 풀이 확인할 문제: \@해당 문제 이름  
<span style='background-color:#fff5b1'>\* 중에서 # 추가해야할 것 생각해보기!</span>

- [구현 (시뮬레이션)](#1)
- [탐욕법 (Greedy)](#2)
- [완전탐색](#3)
- [DP](#4)
- [분할정복](#5)
- [슬라이딩 윈도우||투포인터](#6)
- [우선순위 큐](#7)
- [그래프](#8)
- [SQL](#9)

## 구현 (시뮬레이션) <a id="1"></a>

| 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
| --- | :-: | --: | --- | --- |
| 82612 | [부족한 금액 계산하기](https://github.com/chichoc/solved-algorithms/tree/44f0f01f1033a361aef6586a2fcffd196cf33e08/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/82612.%E2%80%85%EB%B6%80%EC%A1%B1%ED%95%9C%E2%80%85%EA%B8%88%EC%95%A1%E2%80%85%EA%B3%84%EC%82%B0%ED%95%98%EA%B8%B0) | Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/82612) | 네이버 2021 상반기 1번과 비슷 |
| 2577 | [숫자의 개수](https://github.com/chichoc/solved-algorithms/tree/a008b98d221089f596504d12c984c78933a2d45d/%EB%B0%B1%EC%A4%80/Bronze/2577.%E2%80%85%EC%88%AB%EC%9E%90%EC%9D%98%E2%80%85%EA%B0%9C%EC%88%98) | Bronze 2 | [백준](https://www.acmicpc.net/problem/2577) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 1110 | [더하기 사이클](https://github.com/chichoc/solved-algorithms/tree/7a6e83917ad077bdf9ea565eebe3df7cc8d8c2a8/%EB%B0%B1%EC%A4%80/Bronze/1110.%E2%80%85%EB%8D%94%ED%95%98%EA%B8%B0%E2%80%85%EC%82%AC%EC%9D%B4%ED%81%B4) | Bronze 1 | [백준](https://www.acmicpc.net/problem/1110) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 1193 | @[분수찾기](https://github.com/chichoc/solved-algorithms/tree/a7166b33aba824f201af57d1f864e2ca88e6f970/%EB%B0%B1%EC%A4%80/Silver/1193.%E2%80%85%EB%B6%84%EC%88%98%EC%B0%BE%EA%B8%B0) | Silver 5 | [백준](https://www.acmicpc.net/problem/1193) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 1531 | @\*[투명](https://github.com/chichoc/solved-algorithms/tree/5538ea4d73c99550812a049332e4693446a34e88/%EB%B0%B1%EC%A4%80/Silver/1531.%E2%80%85%ED%88%AC%EB%AA%85) | Silver 5 | [백준](https://www.acmicpc.net/problem/1531) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 1676 | \*#[팩토리얼 0의 개수](https://github.com/chichoc/solved-algorithms/tree/ed1cc3c614dd8e157088991ba88ab124d9e880aa/%EB%B0%B1%EC%A4%80/Silver/1676.%E2%80%85%ED%8C%A9%ED%86%A0%EB%A6%AC%EC%96%BC%E2%80%850%EC%9D%98%E2%80%85%EA%B0%9C%EC%88%98) | Silver 5 | [백준](https://www.acmicpc.net/problem/1676) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 2563 | @\*#[색종이](https://github.com/chichoc/solved-algorithms/tree/424d41ced014c4d7edd7a29f876feb9062de7686/%EB%B0%B1%EC%A4%80/Silver/2563.%E2%80%85%EC%83%89%EC%A2%85%EC%9D%B4) | Silver 5 | [백준](https://www.acmicpc.net/problem/2563) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) | [참고한 풀이](https://ggcoding.tistory.com/123) |
| 17478 | @\*[재귀함수가 뭔가요?](https://github.com/chichoc/solved-algorithms/tree/7bf0cf2ee620f9c8470bacc67d2be49b50b1a855/%EB%B0%B1%EC%A4%80/Silver/17478.%E2%80%85%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98%EA%B0%80%E2%80%85%EB%AD%94%EA%B0%80%EC%9A%94%EF%BC%9F) | Silver 5 | [백준](https://www.acmicpc.net/problem/17478) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) | [참고한 풀이](https://kk3june.tistory.com/58) |
| 1158 | @[요세푸스 문제](https://github.com/chichoc/solved-algorithms/tree/722c5f1797bde8d32b90a95f433a204ccea57a40/%EB%B0%B1%EC%A4%80/Silver/1158.%E2%80%85%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4%E2%80%85%EB%AC%B8%EC%A0%9C) | Silver 4 | [백준](https://www.acmicpc.net/problem/1158) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 1002 | @\*#[터렛](https://github.com/chichoc/solved-algorithms/tree/e8488675047df8e595b0da90528fb0f20245a39a/%EB%B0%B1%EC%A4%80/Silver/1002.%E2%80%85%ED%84%B0%EB%A0%9B) | Silver 3 | [백준](https://www.acmicpc.net/problem/1002) | [참고한 풀이](https://wookgu.tistory.com/18) |
| 1024 | @[수열의 합](https://github.com/chichoc/solved-algorithms/tree/07db3419005909d6273b4f1e154021522c1dec32/%EB%B0%B1%EC%A4%80/Silver/1024.%E2%80%85%EC%88%98%EC%97%B4%EC%9D%98%E2%80%85%ED%95%A9) | Silver 2 | [백준](https://www.acmicpc.net/problem/1024) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 1138 | @\*[한 줄로 서기](https://github.com/chichoc/solved-algorithms/tree/1caf4c8db95e6dbe7cbd6eb005bf2059d003dce1/%EB%B0%B1%EC%A4%80/Silver/1138.%E2%80%85%ED%95%9C%E2%80%85%EC%A4%84%EB%A1%9C%E2%80%85%EC%84%9C%EA%B8%B0) | Silver 2 | [백준](https://www.acmicpc.net/problem/1138) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 1500 | @\*[최대 곱](https://github.com/chichoc/solved-algorithms/tree/611397926ddf21a3fd5f31c849914a1131e6125a/%EB%B0%B1%EC%A4%80/Silver/1500.%E2%80%85%EC%B5%9C%EB%8C%80%E2%80%85%EA%B3%B1) | Silver 2 | [백준](https://www.acmicpc.net/problem/1500) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) | 수학 |
| 16918 | @\*[봄버맨](https://github.com/chichoc/solved-algorithms/tree/main/%EB%B0%B1%EC%A4%80/Silver/16918.%E2%80%85%EB%B4%84%EB%B2%84%EB%A7%A8) | Silver 1 | [백준](https://www.acmicpc.net/problem/16918) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 21608 | @\*[상어 초등학교](https://github.com/chichoc/solved-algorithms/tree/a4ee3cbc3074544fc672c689918d8ff31c25617f/%EB%B0%B1%EC%A4%80/Gold/21608.%E2%80%85%EC%83%81%EC%96%B4%E2%80%85%EC%B4%88%EB%93%B1%ED%95%99%EA%B5%90) | Gold 5 | [백준](https://www.acmicpc.net/problem/21608) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 17144 | @\*#[미세먼지 안녕!](https://github.com/chichoc/solved-algorithms/tree/37dbb47d25b62a91a8a7ed6a76484a157ebc1f0c/%EB%B0%B1%EC%A4%80/Gold/17144.%E2%80%85%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80%E2%80%85%EC%95%88%EB%85%95%EF%BC%81) | Gold 4 | [백준](https://www.acmicpc.net/problem/17144) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
| 20056 | @\*#[마법사 상어와 파이어볼](https://github.com/chichoc/solved-algorithms/tree/10bcd54f8673151d63033445fe714fca93586402/%EB%B0%B1%EC%A4%80/Gold/20056.%E2%80%85%EB%A7%88%EB%B2%95%EC%82%AC%E2%80%85%EC%83%81%EC%96%B4%EC%99%80%E2%80%85%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B3%BC) | Gold 4 | [백준](https://www.acmicpc.net/problem/20056) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |

- ### 문자열 처리

  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 11720 | [숫자의 합](https://github.com/chichoc/solved-algorithms/tree/918b946065f858a72ced8dd91ade61218f3819e2/%EB%B0%B1%EC%A4%80/Bronze/11720.%E2%80%85%EC%88%AB%EC%9E%90%EC%9D%98%E2%80%85%ED%95%A9) | Bronze 4 | [백준](https://www.acmicpc.net/problem/11720) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) |  |
  | 1152 | [단어의 개수](https://github.com/chichoc/solved-algorithms/tree/b7b24b5d7b0f526de4a0f205dc36c63386154e8e/%EB%B0%B1%EC%A4%80/Bronze/1152.%E2%80%85%EB%8B%A8%EC%96%B4%EC%9D%98%E2%80%85%EA%B0%9C%EC%88%98) | Bronze 2 | [백준](https://www.acmicpc.net/problem/1152) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) |  |
  | 2675 | [문자열 반복](https://github.com/chichoc/solved-algorithms/tree/2bee0ed8759d9475aa763b1440b36b5dfb4cc0d6/%EB%B0%B1%EC%A4%80/Bronze/2675.%E2%80%85%EB%AC%B8%EC%9E%90%EC%97%B4%E2%80%85%EB%B0%98%EB%B3%B5) | Bronze 2 | [백준](https://www.acmicpc.net/problem/2675) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) [gnyr2011#A](https://www.acmicpc.net/category/detail/5) |  |
  | 1316 | [그룹 단어 체커](https://github.com/chichoc/solved-algorithms/tree/ae48001d0728f15301165a25f5a92c9dd1e16f02/%EB%B0%B1%EC%A4%80/Silver/1316.%E2%80%85%EA%B7%B8%EB%A3%B9%E2%80%85%EB%8B%A8%EC%96%B4%E2%80%85%EC%B2%B4%EC%BB%A4) | Silver 5 | [백준](https://www.acmicpc.net/problem/1316) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) |  |
  | 1427 | [소트인사이드](https://github.com/chichoc/solved-algorithms/tree/e4560fef649925d1422ec20928f330e08cccb95d/%EB%B0%B1%EC%A4%80/Silver/1427.%E2%80%85%EC%86%8C%ED%8A%B8%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C) | Silver 5 | [백준](https://www.acmicpc.net/problem/1427) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) |  |
  | 1302 | [베스트셀러](https://github.com/chichoc/solved-algorithms/tree/57ba35b2f520336b062b45d6cfa37794a77bc129/%EB%B0%B1%EC%A4%80/Silver/1302.%E2%80%85%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%85%80%EB%9F%AC) | Silver 4 | [백준](https://www.acmicpc.net/problem/1302) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) |  |
  | 1755 | [숫자놀이](https://github.com/chichoc/solved-algorithms/tree/2a2991a91a04eff3216bec3bfe338b554b798b54/%EB%B0%B1%EC%A4%80/Silver/1755.%E2%80%85%EC%88%AB%EC%9E%90%EB%86%80%EC%9D%B4) | Silver 4 | [백준](https://www.acmicpc.net/problem/1755) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) |  |
  | 19948 | @\*#[음유시인 영재](https://github.com/chichoc/solved-algorithms/tree/93b52be6ca654a731d8be66f660846939b6e5c99/%EB%B0%B1%EC%A4%80/Silver/19948.%E2%80%85%EC%9D%8C%EC%9C%A0%EC%8B%9C%EC%9D%B8%E2%80%85%EC%98%81%EC%9E%AC) | Silver 3 | [백준](https://www.acmicpc.net/problem/19948) [문자열](https://www.acmicpc.net/problemset?sort=ac_desc&algo=158) | [참고한 풀이](https://jaekwan.tistory.com/161) |

- ### 정렬

  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 11650 | [좌표 정렬하기](https://github.com/chichoc/solved-algorithms/tree/469ac801cd4709ca4532c813b1059385296a8b0f/%EB%B0%B1%EC%A4%80/Silver/11650.%E2%80%85%EC%A2%8C%ED%91%9C%E2%80%85%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0) | Silver 5 | [백준](https://www.acmicpc.net/problem/11650) |  |
  | 1764 | @\*#[듣보잡](https://github.com/chichoc/solved-algorithms/tree/43f0dfd20febce20bb5a9d7e55b2c25187c9d42d/%EB%B0%B1%EC%A4%80/Silver/1764.%E2%80%85%EB%93%A3%EB%B3%B4%EC%9E%A1) | Silver 4 | [백준](https://www.acmicpc.net/problem/1764) | [참고한 풀이](https://s0ojin.tistory.com/57) |
  | 18110 | [solved.ac](https://github.com/chichoc/solved-algorithms/tree/928f236130fb6729ff9e0cdbc447e452cd94f3f2/%EB%B0%B1%EC%A4%80/Silver/18110.%E2%80%85solved%EF%BC%8Eac) | Silver 4 | [백준](https://www.acmicpc.net/problem/18110) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) [sogang2019#A](https://www.acmicpc.net/category/693) |  |
  | 2108 | @[통계학](https://github.com/chichoc/solved-algorithms/tree/695600759e6f6c63218e77ee40d019fbe709dd45/%EB%B0%B1%EC%A4%80/Silver/2108.%E2%80%85%ED%86%B5%EA%B3%84%ED%95%99) | Silver 3 | [백준](https://www.acmicpc.net/problem/2108) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) |  |
  | 5052 | @\*#[전화번호 목록](https://github.com/chichoc/solved-algorithms/tree/26a3317d53e8d45e9346f2baf8acd1c04b08e4cb/%EB%B0%B1%EC%A4%80/Gold/5052.%E2%80%85%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8%E2%80%85%EB%AA%A9%EB%A1%9D) | Gold 4 | [백준](https://www.acmicpc.net/problem/5052) [구현](https://www.acmicpc.net/problemset?sort=ac_desc&algo=102) | [참고한 풀이](https://juyami.tistory.com/105) |

- ### 정규식 활용
  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 17682 | [[1차] 다트 게임](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/12977.%E2%80%85%EC%86%8C%EC%88%98%E2%80%85%EB%A7%8C%EB%93%A4%EA%B8%B0) | Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/17682) | [2018 KAKAO BLIND RECRUITMENT](https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/#2-%EB%8B%A4%ED%8A%B8-%EA%B2%8C%EC%9E%84%EB%82%9C%EC%9D%B4%EB%8F%84-%ED%95%98) |
- ### 스택/큐
  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 42583 | [\*다리를 지나는 트럭](https://github.com/chichoc/solved-algorithms/tree/1599ff21531055d941ae6505d32398d254575a02/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/42583.%E2%80%85%EB%8B%A4%EB%A6%AC%EB%A5%BC%E2%80%85%EC%A7%80%EB%82%98%EB%8A%94%E2%80%85%ED%8A%B8%EB%9F%AD) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42583) | 큐 |
  | 11866 | @[요세푸스 문제 0](https://github.com/chichoc/solved-algorithms/tree/319587d491fec1c761fdc2df5acc130de910b677/%EB%B0%B1%EC%A4%80/Silver/11866.%E2%80%85%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4%E2%80%85%EB%AC%B8%EC%A0%9C%E2%80%850) | Silver 5 | [백준](https://www.acmicpc.net/problem/11866) | 큐? |
  | 9012 | [괄호](https://github.com/chichoc/solved-algorithms/tree/7252cef7209ef135fa958adf966cce4aea0b0a18/%EB%B0%B1%EC%A4%80/Silver/9012.%E2%80%85%EA%B4%84%ED%98%B8) | Silver 4 | [백준](https://www.acmicpc.net/problem/9012) |  |
  | 2164 | @\*[카드2](https://github.com/chichoc/solved-algorithms/tree/6a514a84641f0b308b5c69259c8a7fa58c2c9900/%EB%B0%B1%EC%A4%80/Silver/2164.%E2%80%85%EC%B9%B4%EB%93%9C2) | Silver 4 | [백준](https://www.acmicpc.net/problem/2164) [직접 광탈](https://www.acmicpc.net/workbook/view/4357) | 큐? [참고한 풀이](https://hanch-dev.tistory.com/8) |
  | 9012 | [괄호](https://github.com/chichoc/solved-algorithms/tree/7252cef7209ef135fa958adf966cce4aea0b0a18/%EB%B0%B1%EC%A4%80/Silver/9012.%E2%80%85%EA%B4%84%ED%98%B8) | Silver 4 | [백준](https://www.acmicpc.net/problem/9012) |  |
  | 10773 | [제로](https://github.com/chichoc/solved-algorithms/tree/47b1d7496f775b8802728b83bd85e69ffdb1f5b9/%EB%B0%B1%EC%A4%80/Silver/10773.%E2%80%85%EC%A0%9C%EB%A1%9C) | Silver 4 | [백준](https://www.acmicpc.net/problem/10773) [CCC2015S#1](https://www.acmicpc.net/category/detail/1345) |  |
  | 10828 | [스택](https://github.com/chichoc/solved-algorithms/tree/5bc65f332111c6ed96189e54c13f02bc36d676bf/%EB%B0%B1%EC%A4%80/Silver/10828.%E2%80%85%EC%8A%A4%ED%83%9D) | Silver 4 | [백준](https://www.acmicpc.net/problem/10828) | 스택 |
  | 10845 | [큐](https://github.com/chichoc/solved-algorithms/tree/61329a4805520cc6f1130d651f9c56cc928fafd1/%EB%B0%B1%EC%A4%80/Silver/10845.%E2%80%85%ED%81%90) | Silver 4 | [백준](https://www.acmicpc.net/problem/10845) |  |
  | 1966 | @[프린터 큐](https://github.com/chichoc/solved-algorithms/tree/93ce1d46e4365351e6ca2039034a61f02e9cd8ce/%EB%B0%B1%EC%A4%80/Silver/1966.%E2%80%85%ED%94%84%EB%A6%B0%ED%84%B0%E2%80%85%ED%81%90) | Silver 3 | [백준](https://www.acmicpc.net/problem/1966) |  |
  | 17413 | @[단어 뒤집기2](https://github.com/chichoc/solved-algorithms/tree/de9d98c91face6b6051b4a8bd36e8a9b3e73919a/%EB%B0%B1%EC%A4%80/Silver/17413.%E2%80%85%EB%8B%A8%EC%96%B4%E2%80%85%EB%92%A4%EC%A7%91%EA%B8%B0%E2%80%852) | Silver 3 | [백준](https://www.acmicpc.net/problem/17413) |  |
  | 1966 | @[쇠막대기](https://github.com/chichoc/solved-algorithms/tree/ccd4246efad4f69a2b48a9e9606d102953586d0e/%EB%B0%B1%EC%A4%80/Silver/10799.%E2%80%85%EC%87%A0%EB%A7%89%EB%8C%80%EA%B8%B0) | Silver 2 | [백준](https://www.acmicpc.net/problem/10799) |  |
- ### 비트마스킹
  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 1094 | @[막대기](https://github.com/chichoc/solved-algorithms/tree/4dff2f7fc62b9cd354b5a58f63698fa331425436/%EB%B0%B1%EC%A4%80/Silver/1094.%E2%80%85%EB%A7%89%EB%8C%80%EA%B8%B0) | Silver 5 | [백준](https://www.acmicpc.net/problem/1094) |

## 탐욕법 (Greedy) <a id="2"></a>

| 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
| --- | :-: | --: | --- | --- |
| 42862 | \*[체육복](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/42862.%E2%80%85%EC%B2%B4%EC%9C%A1%EB%B3%B5) | Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42862) |  |
| 42860 | [조이스틱](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/42860.%E2%80%85%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42860) |  |
| 42885 | [구명보트](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/42885.%E2%80%85%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8)\+ | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42885) |  |
| 12927 | [야근 지수](https://github.com/chichoc/solved-algorithms/tree/1599ff21531055d941ae6505d32398d254575a02/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/12927.%E2%80%85%EC%95%BC%EA%B7%BC%E2%80%85%EC%A7%80%EC%88%98)\+ | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/12927) |  |
| 1026 | @[보물](https://github.com/chichoc/solved-algorithms/tree/c0ccf3c671fbbef7e870a1ddebf95d5382378b21/%EB%B0%B1%EC%A4%80/Silver/1026.%E2%80%85%EB%B3%B4%EB%AC%BC) | Silver 4 | [백준](https://www.acmicpc.net/problem/1026) |
| 1049 | @[기타줄](https://github.com/chichoc/solved-algorithms/tree/b924756be0bab1ef76086e31636645750fe7c821/%EB%B0%B1%EC%A4%80/Silver/1049.%E2%80%85%EA%B8%B0%ED%83%80%EC%A4%84) | Silver 4 | [백준](https://www.acmicpc.net/problem/1049) |
| 2217 | @\*#[로프](https://github.com/chichoc/solved-algorithms/tree/f2955e190214590d0148f415a678ab00ee045569/%EB%B0%B1%EC%A4%80/Silver/2217.%E2%80%85%EB%A1%9C%ED%94%84) | Silver 4 | [백준](https://www.acmicpc.net/problem/2217) | [참고한 풀이](https://junghyeonsu.tistory.com/233) |
| 2839 | [설탕 배달](https://github.com/chichoc/solved-algorithms/tree/0bb23284cb9de9f7c40e1db1d94b7d02d6ae540d/%EB%B0%B1%EC%A4%80/Silver/2839.%E2%80%85%EC%84%A4%ED%83%95%E2%80%85%EB%B0%B0%EB%8B%AC) | Silver 4 | [백준](https://www.acmicpc.net/problem/2839) [COCI#7](https://www.acmicpc.net/category/detail/81) |
| 11047 | [동전 0](https://github.com/chichoc/solved-algorithms/tree/eadbdfa3a26af5f7a2902028709a3c5fe19be478/%EB%B0%B1%EC%A4%80/Silver/11047.%E2%80%85%EB%8F%99%EC%A0%84%E2%80%850) | Silver 4 | [백준](https://www.acmicpc.net/problem/11047) |
| 11399 | [ATM](https://github.com/chichoc/solved-algorithms/tree/6bcc5fed87aa0e376ee35ee1fb4e965321ade31d/%EB%B0%B1%EC%A4%80/Silver/11399.%E2%80%85ATM) | Silver 4 | [백준](https://www.acmicpc.net/problem/11399) |
| 19941 | @\*#[햄버거 분배](https://github.com/chichoc/solved-algorithms/tree/a3e98a9d30800613e0fad75a87ad0bcf3077c54f/%EB%B0%B1%EC%A4%80/Silver/19941.%E2%80%85%ED%96%84%EB%B2%84%EA%B1%B0%E2%80%85%EB%B6%84%EB%B0%B0) | Silver 3 | [백준](https://www.acmicpc.net/problem/19941) | [참고한 풀이](https://kimbangg.tistory.com/246) |
| 1541 | @\*#[잃어버린 괄호](https://github.com/chichoc/solved-algorithms/tree/d34608ce8c0f86263019a4baf95b7a15d0a928e0/%EB%B0%B1%EC%A4%80/Silver/1541.%E2%80%85%EC%9E%83%EC%96%B4%EB%B2%84%EB%A6%B0%E2%80%85%EA%B4%84%ED%98%B8) | Silver 2 | [백준](https://www.acmicpc.net/problem/1541) | [참고한 풀이](https://velog.io/@hyejin_nk/%EB%B0%B1%EC%A4%80) |
| 1080 | @\*#[행렬](https://github.com/chichoc/solved-algorithms/tree/7df5b9e55b58bc34d96812c6606e9333a959bc5d/%EB%B0%B1%EC%A4%80/Silver/1080.%E2%80%85%ED%96%89%EB%A0%AC) | Silver 1 | [백준](https://www.acmicpc.net/problem/1080) | [참고한 풀이](https://velog.io/@bkdragon0228/%EB%B0%B1%EC%A4%80-1080-%ED%96%89%EB%A0%AC) |
| 2141 | @\*[우체국](https://github.com/chichoc/solved-algorithms/tree/9cbe99ba11b12f5cb7be3d931e42ff2b8bb59d14/%EB%B0%B1%EC%A4%80/Gold/2141.%E2%80%85%EC%9A%B0%EC%B2%B4%EA%B5%AD) | Gold 4 | [백준](https://www.acmicpc.net/problem/2141) | [참고한 풀이](https://junghyeonsu.tistory.com/280) |
| 8980 | @\*[택배](https://github.com/chichoc/solved-algorithms/tree/4dd8a41b7df2e97c8e5f2fcb8085e921c10c0a68/%EB%B0%B1%EC%A4%80/Gold/8980.%E2%80%85%ED%83%9D%EB%B0%B0) | Gold 2 | [백준](https://www.acmicpc.net/problem/8980) [KOI 2013초등부#2](https://www.acmicpc.net/category/254) | [참고한 풀이](https://ingong.github.io/PS/BOJ%208980%20%ED%83%9D%EB%B0%B0/) |

<!-- 아래부터 효율성 테스트 여부 확인하기 -->

## 완전탐색 <a id="3"></a>

- ### Brute-force

  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 12977 | [소수 만들기](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/12977.%E2%80%85%EC%86%8C%EC%88%98%E2%80%85%EB%A7%8C%EB%93%A4%EA%B8%B0) | Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/12977) | Summer/Winter Coding(~2018) |
  | 86491 | [최소직사각형](https://github.com/chichoc/solved-algorithms/tree/ab5ad7955ea5d252234f99313d2c20bf581a06ea/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/86491.%E2%80%85%EC%B5%9C%EC%86%8C%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95) | Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/86491) |  |
  | 131705 | [삼총사](https://github.com/chichoc/solved-algorithms/tree/364d1870df560faafc05d15af094ca813f1d2e08/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/131705.%E2%80%85%EC%82%BC%EC%B4%9D%EC%82%AC) | Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/131705) |  |
  | 84512 | [모음 사전](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/84512.%E2%80%85%EB%AA%A8%EC%9D%8C%E2%80%85%EC%82%AC%EC%A0%84) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/84512) |  |
  | 1251 | [단어 나누기](https://github.com/chichoc/solved-algorithms/tree/0a91f5991e865ac8302fb26ef1a854261b4642cd/%EB%B0%B1%EC%A4%80/Silver/1251.%E2%80%85%EB%8B%A8%EC%96%B4%E2%80%85%EB%82%98%EB%88%84%EA%B8%B0) | Silver 5 | [백준](https://www.acmicpc.net/problem/1251) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 4673 | [셀프 넘버](https://github.com/chichoc/solved-algorithms/tree/e357db12c47004071fbb56137ec29cb0e3f329cf/%EB%B0%B1%EC%A4%80/Silver/4673.%E2%80%85%EC%85%80%ED%94%84%E2%80%85%EB%84%98%EB%B2%84) | Silver 5 | [백준](https://www.acmicpc.net/problem/4673) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 7568 | @[덩치](https://github.com/chichoc/solved-algorithms/tree/205dbf3dca3854635b23433dbc76fc30e940c6a2/%EB%B0%B1%EC%A4%80/Silver/7568.%E2%80%85%EB%8D%A9%EC%B9%98) | Silver 5 | [백준](https://www.acmicpc.net/problem/7568) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 1018 | @[체스판 다시 칠하기](https://github.com/chichoc/solved-algorithms/tree/35a786f732ee0d5617e941ad35a8b349ed2eaf7c/%EB%B0%B1%EC%A4%80/Silver/1018.%E2%80%85%EC%B2%B4%EC%8A%A4%ED%8C%90%E2%80%85%EB%8B%A4%EC%8B%9C%E2%80%85%EC%B9%A0%ED%95%98%EA%B8%B0) | Silver 4 | [백준](https://www.acmicpc.net/problem/1018) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 1057 | @\*[토너먼트](https://github.com/chichoc/solved-algorithms/tree/e84fa822aea897acf4f3b2fa0de054d734add581/%EB%B0%B1%EC%A4%80/Silver/1057.%E2%80%85%ED%86%A0%EB%84%88%EB%A8%BC%ED%8A%B8) | Silver 4 | [백준](https://www.acmicpc.net/problem/1057) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 1059 | @\*#[좋은 구간](https://github.com/chichoc/solved-algorithms/tree/246b17e3d55229b2fc447a1afd6c0dead2e7477a/%EB%B0%B1%EC%A4%80/Silver/1059.%E2%80%85%EC%A2%8B%EC%9D%80%E2%80%85%EA%B5%AC%EA%B0%84) | Silver 4 | [백준](https://www.acmicpc.net/problem/1059) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125)[정렬](https://www.acmicpc.net/problemset?sort=ac_desc&algo=97) | [참고한 풀이](https://jiyeongstar.tistory.com/130) |
  | 1120 | @\*[문자열](https://github.com/chichoc/solved-algorithms/tree/9397df48d276a005586c82f3f4ff53617001bd39/%EB%B0%B1%EC%A4%80/Silver/1120.%E2%80%85%EB%AC%B8%EC%9E%90%EC%97%B4) | Silver 4 | [백준](https://www.acmicpc.net/problem/1120) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 1543 | @[문서 검색](https://github.com/chichoc/solved-algorithms/tree/410bcc968ab95c7745f3854b332b1a808d20ef06/%EB%B0%B1%EC%A4%80/Silver/1543.%E2%80%85%EB%AC%B8%EC%84%9C%E2%80%85%EA%B2%80%EC%83%89) | Silver 4 | [백준](https://www.acmicpc.net/problem/1543) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 1544 | @\*[사이클 단어](https://github.com/chichoc/solved-algorithms/tree/01c98fd60fde8ca53fb1aafcdc48a4ec5c9d9fbf/%EB%B0%B1%EC%A4%80/Silver/1544.%E2%80%85%EC%82%AC%EC%9D%B4%ED%81%B4%E2%80%85%EB%8B%A8%EC%96%B4) | Silver 4 | [백준](https://www.acmicpc.net/problem/1544) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 1639 | @[행운의 티켓](https://github.com/chichoc/solved-algorithms/tree/ca1357ad5a8e0858111e021a8c1b52b057270ba9/%EB%B0%B1%EC%A4%80/Silver/1639.%E2%80%85%ED%96%89%EC%9A%B4%EC%9D%98%E2%80%85%ED%8B%B0%EC%BC%93) | Silver 4 | [백준](https://www.acmicpc.net/problem/1639) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) | 다른 풀이 못 찾음 |
  | 1051 | [숫자 정사각형](https://github.com/chichoc/solved-algorithms/tree/4bb75366527cb64a8d358e709c6dd7f71f51c41e/%EB%B0%B1%EC%A4%80/Silver/1051.%E2%80%85%EC%88%AB%EC%9E%90%E2%80%85%EC%A0%95%EC%82%AC%EA%B0%81%ED%98%95) | Silver 3 | [백준](https://www.acmicpc.net/problem/1051) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) |  |
  | 14501 | @[퇴사](https://github.com/chichoc/solved-algorithms/tree/75602b5b730e2f0ad84bef12b334ab49e4d4b93e/%EB%B0%B1%EC%A4%80/Silver/14501.%E2%80%85%ED%87%B4%EC%82%AC) | Silver 3 | [백준](https://www.acmicpc.net/problem/14501) [브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) [삼성 SW 역량 기출](https://www.acmicpc.net/workbook/view/1152) |  |
  | 1058 | @\*[친구](https://github.com/chichoc/solved-algorithms/tree/983d21039b8d54f7d92a15e09d4c8b82da85b448/%EB%B0%B1%EC%A4%80/Silver/1058.%E2%80%85%EC%B9%9C%EA%B5%AC) | Silver 2 | [백준](https://www.acmicpc.net/problem/1058)[브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) [플로이드–워셜](https://www.acmicpc.net/problemset?sort=ac_desc&algo=31) |  |
  | 1535 | @[안녕](https://github.com/chichoc/solved-algorithms/tree/a09f4a00a645d5d3a205f37c6d48edab21f85657/%EB%B0%B1%EC%A4%80/Silver/1535.%E2%80%85%EC%95%88%EB%85%95) | Silver 2 | [백준](https://www.acmicpc.net/problem/1535)[브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) [다이나믹 프로그래밍](https://www.acmicpc.net/problemset?sort=ac_desc&algo=25)[배낭문제](https://www.acmicpc.net/problemset?sort=ac_desc&algo=148) |  |

- ### DFS/BFS

  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 2606 | \*[바이러스](https://github.com/chichoc/solved-algorithms/tree/c2643d10fec4eacf06efe670fc8fdd56fedab8a1/%EB%B0%B1%EC%A4%80/Silver/2606.%E2%80%85%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4) | Silver 3 | [백준](https://www.acmicpc.net/problem/2606) |
  | 1260 | [DFS와 BFS](https://github.com/chichoc/solved-algorithms/tree/bbaaccf064b12eb89d64d58cfdbd437705419ea5/%EB%B0%B1%EC%A4%80/Silver/1260.%E2%80%85DFS%EC%99%80%E2%80%85BFS) | Silver 2 | [백준](https://www.acmicpc.net/problem/1260) |
  | 8061 | @[Bitmap](https://github.com/chichoc/solved-alghttps://github.com/chichoc/solved-algorithms/tree/917cae0c9cff33b63ba52a58cd9acb2abe7c21f8/%EB%B0%B1%EC%A4%80/Silver/8061.%E2%80%85Bitmap) | Silver 2 | [백준](https://www.acmicpc.net/problem/8061) |
  | 2583 | @\*[영역 구하기](https://github.com/chichoc/solved-algorithms/tree/6ac99b85d156fd0c0ad19d5e7a1a6f779db01f7e/%EB%B0%B1%EC%A4%80/Silver/2583.%E2%80%85%EC%98%81%EC%97%AD%E2%80%85%EA%B5%AC%ED%95%98%EA%B8%B0) | Silver 1 | [백준](https://www.acmicpc.net/problem/2583) |  |
  | 2667 | @[단지번호붙이기](https://github.com/chichoc/solved-algorithms/tree/cf95fe8d50960c7282c0ff81acb91ae87401721c/%EB%B0%B1%EC%A4%80/Silver/2667.%E2%80%85%EB%8B%A8%EC%A7%80%EB%B2%88%ED%98%B8%EB%B6%99%EC%9D%B4%EA%B8%B0) | Silver 1 | [백준](https://www.acmicpc.net/problem/2667) | [KOI1996초등부#1](https://www.acmicpc.net/category/82) |
  | 10026 | @[적록색약](https://github.com/chichoc/solved-algorithms/tree/e144c987ca8709b58696ea0514dd73e9e4ed9b50/%EB%B0%B1%EC%A4%80/Gold/10026.%E2%80%85%EC%A0%81%EB%A1%9D%EC%83%89%EC%95%BD) | Gold 5 | [백준](https://www.acmicpc.net/problem/10026) |  |
  | 14502 | @\*#[연구소](https://github.com/chichoc/solved-algorithms/tree/ef55b26f0b60898e215e0d672a1d9dd50d0da6d1/%EB%B0%B1%EC%A4%80/Gold/14502.%E2%80%85%EC%97%B0%EA%B5%AC%EC%86%8C) | Gold 4 | [백준](https://www.acmicpc.net/problem/14502) | [참고한 풀이](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-14502-%EC%97%B0%EA%B5%AC%EC%86%8C-javascript) |
  | 2638 | @\*#[치즈](https://github.com/chichoc/solved-algorithms/tree/a85622f0eb49ea59bbd1107b3963a0bcd22a964b/%EB%B0%B1%EC%A4%80/Gold/2638.%E2%80%85%EC%B9%98%EC%A6%88) | Gold 3 | [백준](https://www.acmicpc.net/problem/2638) | [참고한 풀이](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-2638-%EC%B9%98%EC%A6%88-javascript) |

  - #### DFS

    | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
    | --- | :-: | --: | --- | --- |
    | 43162 | \*[네트워크](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/43162.%E2%80%85%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC) | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43162) |  |
    | 92343 | [양과 늑대](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/92343.%E2%80%85%EC%96%91%EA%B3%BC%E2%80%85%EB%8A%91%EB%8C%80) | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/92343) | [2022 KAKAO BLIND RECRUITMENT](https://tech.kakao.com/2022/01/14/2022-kakao-recruitment-round-1/#%EB%AC%B8%EC%A0%9C-5-%EC%96%91%EA%B3%BC-%EB%8A%91%EB%8C%80) |

    - ##### Backtracking
      | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
      | --- | :-: | --: | --- | --- |
      | 15649 | [N과 M (1)](https://github.com/chichoc/solved-algorithms/tree/f1109721c73b4f76a0b47e21e1da25d64a05b628/%EB%B0%B1%EC%A4%80/Silver/15649.%E2%80%85N%EA%B3%BC%E2%80%85M%E2%80%85%EF%BC%881%EF%BC%89) | Silver 3 | [백준](https://www.acmicpc.net/problem/15649) [백트래킹](https://www.acmicpc.net/problemset?sort=ac_desc&algo=5) |  |
      | 15650 | [N과 M (2)](https://github.com/chichoc/solved-algorithms/tree/0c3ae01279921fb8f12820039801e9a61a453110/%EB%B0%B1%EC%A4%80/Silver/15650.%E2%80%85N%EA%B3%BC%E2%80%85M%E2%80%85%EF%BC%882%EF%BC%89) | Silver 3 | [백준](https://www.acmicpc.net/problem/15650) [백트래킹](https://www.acmicpc.net/problemset?sort=ac_desc&algo=5) |  |
      | 15651 | [N과 M (3)](https://github.com/chichoc/solved-algorithms/tree/64fe0d7e2160b8a3e7e00396e8913d6d20a7efb5/%EB%B0%B1%EC%A4%80/Silver/15651.%E2%80%85N%EA%B3%BC%E2%80%85M%E2%80%85%EF%BC%883%EF%BC%89) | Silver 3 | [백준](https://www.acmicpc.net/problem/15651) [백트래킹](https://www.acmicpc.net/problemset?sort=ac_desc&algo=5) |  |
      | 15652 | @[N과 M (4)](https://github.com/chichoc/solved-algorithms/tree/bfb095589c9181aa9c9fcaff2dafa86a13575548/%EB%B0%B1%EC%A4%80/Silver/15652.%E2%80%85N%EA%B3%BC%E2%80%85M%E2%80%85%EF%BC%884%EF%BC%89) | Silver 3 | [백준](https://www.acmicpc.net/problem/15652) [백트래킹](https://www.acmicpc.net/problemset?sort=ac_desc&algo=5) |  |
      | 1182 | [부분수열의 합](https://github.com/chichoc/solved-algorithms/tree/8940682f90a950c1dba81fb5386e9a08648dfb17/%EB%B0%B1%EC%A4%80/Silver/1182.%E2%80%85%EB%B6%80%EB%B6%84%EC%88%98%EC%97%B4%EC%9D%98%E2%80%85%ED%95%A9) | Silver 2 | [백준](https://www.acmicpc.net/problem/1182) |  |
      | 14889 | [스타트와 링크](https://github.com/chichoc/solved-algorithms/tree/3afd859f5d8baf8cb2f1d6a0461c0e6a000ac3d6/%EB%B0%B1%EC%A4%80/Silver/14889.%E2%80%85%EC%8A%A4%ED%83%80%ED%8A%B8%EC%99%80%E2%80%85%EB%A7%81%ED%81%AC) | Silver 2 | [백준](https://www.acmicpc.net/problem/14889) |  |
      | 14888 | [연산자 끼워넣기](https://github.com/chichoc/solved-algorithms/tree/6434e724d3278fc236060635b268bfe26b048c5d/%EB%B0%B1%EC%A4%80/Silver/14888.%E2%80%85%EC%97%B0%EC%82%B0%EC%9E%90%E2%80%85%EB%81%BC%EC%9B%8C%EB%84%A3%EA%B8%B0) | Silver 1 | [백준](https://www.acmicpc.net/problem/14888) |  |
      | 15686 | @\*[치킨 배달](https://github.com/chichoc/solved-algorithms/tree/8306bd672a41b9fd36afb2a18ad9e59a98c25658/%EB%B0%B1%EC%A4%80/Gold/15686.%E2%80%85%EC%B9%98%ED%82%A8%E2%80%85%EB%B0%B0%EB%8B%AC) | Gold 5 | [백준](https://www.acmicpc.net/problem/15686) |  |
      | 15684 | @\*#[사다리 조작](https://github.com/chichoc/solved-algorithms/tree/16df606accc5f796fa11b66a0d09cbef80805abb/%EB%B0%B1%EC%A4%80/Gold/15684.%E2%80%85%EC%82%AC%EB%8B%A4%EB%A6%AC%E2%80%85%EC%A1%B0%EC%9E%91) | Gold 3 | [백준](https://www.acmicpc.net/problem/15684) |  |
      | 17136 | @\*#[색종이 붙이기](https://github.com/chichoc/solved-algorithms/tree/2e5c6b33604bdc97afc823590a5d082a98c588f7/%EB%B0%B1%EC%A4%80/Gold/17136.%E2%80%85%EC%83%89%EC%A2%85%EC%9D%B4%E2%80%85%EB%B6%99%EC%9D%B4%EA%B8%B0) | Gold 2 | [백준](https://www.acmicpc.net/problem/17136) | [참고한 풀이](https://koguri.tistory.com/110) |

  - #### BFS
    | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
    | --- | :-: | --: | --- | --- |
    | 1844 | [게임 맵 최단거리](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/1844.%E2%80%85%EA%B2%8C%EC%9E%84%E2%80%85%EB%A7%B5%E2%80%85%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/1844) |
    | 43165 | [타겟 넘버](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/43165.%E2%80%85%ED%83%80%EA%B2%9F%E2%80%85%EB%84%98%EB%B2%84) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43165) |
    | 43163 | [단어 변환](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/43163.%E2%80%85%EB%8B%A8%EC%96%B4%E2%80%85%EB%B3%80%ED%99%98) | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43163) |
    | 16234 | @\*#[인구 이동](https://github.com/chichoc/solved-algorithms/tree/070895602a12b8acc0d127d25c00317787f7663c/%EB%B0%B1%EC%A4%80/Gold/16234.%E2%80%85%EC%9D%B8%EA%B5%AC%E2%80%85%EC%9D%B4%EB%8F%99) | Gold 4 | [백준](https://www.acmicpc.net/problem/16234) | [참고한 풀이](https://tesseractjh.tistory.com/205) |

- ### 순열/조합
  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 1844 | [게임 맵 최단거리](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/1844.%E2%80%85%EA%B2%8C%EC%9E%84%E2%80%85%EB%A7%B5%E2%80%85%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/1844) |
  | 10872 | [팩토리얼](https://github.com/chichoc/solved-algorithms/tree/ad42ece761cf55909ddc33a11f201756a88b356f/%EB%B0%B1%EC%A4%80/Bronze/10872.%E2%80%85%ED%8C%A9%ED%86%A0%EB%A6%AC%EC%96%BC) | Bronze 5 | [백준](https://www.acmicpc.net/problem/10872) [조합](https://www.acmicpc.net/problemset?sort=ac_desc&algo=6) |  |
  | 1010 | @[다리 놓기](https://github.com/chichoc/solved-algorithms/tree/f4167ee73f2925141c24b3a87b3c351d2168c6f4/%EB%B0%B1%EC%A4%80/Silver/1010.%E2%80%85%EB%8B%A4%EB%A6%AC%E2%80%85%EB%86%93%EA%B8%B0) | Silver 5 | [백준](https://www.acmicpc.net/problem/1010) [조합](https://www.acmicpc.net/problemset?sort=ac_desc&algo=6) |  |
  | 6603 | [로또](https://github.com/chichoc/solved-algorithms/tree/d37966f31f70be19a0c579ebcf4114c17995b003/%EB%B0%B1%EC%A4%80/Silver/6603.%E2%80%85%EB%A1%9C%EB%98%90) | Silver 2 | [백준](https://www.acmicpc.net/problem/6603) [조합](https://www.acmicpc.net/problemset?sort=ac_desc&algo=6) |  |

## DP <a id="4"></a>

| 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
| --- | :-: | --: | --- | --- |
| 42895 | [N으로 표현](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/42895.%E2%80%85N%EC%9C%BC%EB%A1%9C%E2%80%85%ED%91%9C%ED%98%84) | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42895) |
| 24416 | [알고리즘 수업 - 피보나치 수 1](https://github.com/chichoc/solved-algorithms/tree/f8a46977a0889209162a845a9486e774932a12c3/%EB%B0%B1%EC%A4%80/Bronze/24416.%E2%80%85%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%E2%80%85%EC%88%98%EC%97%85%E2%80%85%EF%BC%8D%E2%80%85%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%E2%80%85%EC%88%98%E2%80%851) | Bronze 1 | [백준](https://www.acmicpc.net/problem/24416) [동적계획법1](https://www.acmicpc.net/step/16) |
| 2839 | [설탕 배달](https://github.com/chichoc/solved-algorithms/tree/0bb23284cb9de9f7c40e1db1d94b7d02d6ae540d/%EB%B0%B1%EC%A4%80/Silver/2839.%E2%80%85%EC%84%A4%ED%83%95%E2%80%85%EB%B0%B0%EB%8B%AC) | Silver 4 | [백준](https://www.acmicpc.net/problem/2839) [COCI#7](https://www.acmicpc.net/category/detail/81) |
| 1003 | \*[피보나치 함수](https://github.com/chichoc/solved-algorithms/tree/b06141abdcc105269ee780ee4360f32f3428881b/%EB%B0%B1%EC%A4%80/Silver/1003.%E2%80%85%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%E2%80%85%ED%95%A8%EC%88%98) | Silver 3 | [백준](https://www.acmicpc.net/problem/1003) |
| 1904 | [01타일](https://github.com/chichoc/solved-algorithms/tree/896026da0a9a945c6d159e5c4c04d7b03a9e1161/%EB%B0%B1%EC%A4%80/Silver/1904.%E2%80%8501%ED%83%80%EC%9D%BC) | Silver 3 | [백준](https://www.acmicpc.net/problem/1904) [동적계획법1](https://www.acmicpc.net/step/16) |
| 2193 | @\*#[이친수](https://github.com/chichoc/solved-algorithms/tree/f999ca25be28c39957e82cfdb40c406127d285e1/%EB%B0%B1%EC%A4%80/Silver/2193.%E2%80%85%EC%9D%B4%EC%B9%9C%EC%88%98) | Silver 3 | [백준](https://www.acmicpc.net/problem/2193) | [참고한 풀이](https://velog.io/@rjsgy0815/Node.js-%EB%B0%B1%EC%A4%80-No.2193-%EC%9D%B4%EC%B9%9C%EC%88%98-Primary-Number-Dynamic-Programming) |
| 9461 | [파도반 수열](https://github.com/chichoc/solved-algorithms/tree/e242d1ee353f80bc716f6c8f3bea417cc3fbe766/%EB%B0%B1%EC%A4%80/Silver/9461.%E2%80%85%ED%8C%8C%EB%8F%84%EB%B0%98%E2%80%85%EC%88%98%EC%97%B4) | Silver 3 | [백준](https://www.acmicpc.net/problem/9461) [동적계획법1](https://www.acmicpc.net/step/16) [korea2013#G](https://www.acmicpc.net/category/detail/1169) |
| 11727 | @\*#[2×n 타일링 2](https://github.com/chichoc/solved-algorithms/tree/6742ec92bea3a5b0437fda81acad5327edcb7aa6/%EB%B0%B1%EC%A4%80/Silver/11727.%E2%80%852%C3%97n%E2%80%85%ED%83%80%EC%9D%BC%EB%A7%81%E2%80%852) | Silver 3 | [백준](https://www.acmicpc.net/problem/11727) | [참고한 풀이](https://velog.io/@song961003/%EB%B0%B1%EC%A4%80-11727-2-x-n-%ED%83%80%EC%9D%BC%EB%A7%81-2-JS) |
| 9184 | [신나는 함수 실행](https://github.com/chichoc/solved-algorithms/tree/28ad974ceb8a3666cd9a1e03e50153e442ce33e9/%EB%B0%B1%EC%A4%80/Silver/9184.%E2%80%85%EC%8B%A0%EB%82%98%EB%8A%94%E2%80%85%ED%95%A8%EC%88%98%E2%80%85%EC%8B%A4%ED%96%89) | Silver 2 | [백준](https://www.acmicpc.net/problem/9184) [동적계획법1](https://www.acmicpc.net/step/16) [pacnw1999](https://www.acmicpc.net/category/detail/1106) |
| 1149 | @\*#[RGB거리](https://github.com/chichoc/solved-algorithms/tree/80406929907f2cbfb8474ee3933030ce3c29b8d4/%EB%B0%B1%EC%A4%80/Silver/1149.%E2%80%85RGB%EA%B1%B0%EB%A6%AC#silver-i-rgb%EA%B1%B0%EB%A6%AC---1149) | Silver 1 | [백준](hhttps://www.acmicpc.net/problem/1149) | [참고한 풀이](https://junghyeonsu.tistory.com/201) |
| 1309 | [동물원](https://github.com/chichoc/solved-algorithms/tree/ee728a9a515972f6725270352e72ced284241bb5/%EB%B0%B1%EC%A4%80/Silver/1309.%E2%80%85%EB%8F%99%EB%AC%BC%EC%9B%90) | Silver 1 | [백준](https://www.acmicpc.net/problem/1309) [다이나믹 프로그래밍](https://www.acmicpc.net/problemset?sort=ac_desc&algo=25) | [참고한 풀이](https://parkparkpark.tistory.com/135) |
| 5582 | \*#[공통 부분 문자열](https://github.com/chichoc/solved-algorithms/blob/54337837ed11bd25a485ff2d7a90448931f952c1/%EB%B0%B1%EC%A4%80/Gold/5582.%E2%80%85%EA%B3%B5%ED%86%B5%E2%80%85%EB%B6%80%EB%B6%84%E2%80%85%EB%AC%B8%EC%9E%90%EC%97%B4/%EA%B3%B5%ED%86%B5%E2%80%85%EB%B6%80%EB%B6%84%E2%80%85%EB%AC%B8%EC%9E%90%EC%97%B4.js) | Gold 5 | [백준](https://www.acmicpc.net/problem/5582) | [참고한 풀이](https://dailylifeofdeveloper.tistory.com/114) |

## 분할정복 <a id="5"></a>

| 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
| --- | :-: | --: | --- | --- |
| 2447 | @[별 찍기 - 10](https://github.com/chichoc/solved-algorithms/tree/1cb4c6e56206431b846b9b9dfe8328fa6a7b45c5/%EB%B0%B1%EC%A4%80/Gold/4256.%E2%80%85%ED%8A%B8%EB%A6%AC) | Gold 5 | [백준](https://www.acmicpc.net/problem/2447) |  |
| 4256 | @\*#[트리](https://github.com/chichoc/solved-algorithms/tree/1cb4c6e56206431b846b9b9dfe8328fa6a7b45c5/%EB%B0%B1%EC%A4%80/Gold/4256.%E2%80%85%ED%8A%B8%EB%A6%AC) | Gold 3 | [백준](https://www.acmicpc.net/problem/4256) [internet2013#L](https://www.acmicpc.net/category/detail/1124) | [참고한 풀이](https://seokjin2.tistory.com/56) |

### 이분탐색

| 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
| --- | :-: | --: | --- | --- |
| 43238 | [입국심사](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/43238.%E2%80%85%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC) | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43238) |
| 10815 | @\*[숫자 카드](https://github.com/chichoc/solved-algorithms/tree/1a6e760635057fb39a8de4d44bc9fdb4ef28c7ac/%EB%B0%B1%EC%A4%80/Silver/10815.%E2%80%85%EC%88%AB%EC%9E%90%E2%80%85%EC%B9%B4%EB%93%9C) | Silver 5 | [백준](https://www.acmicpc.net/problem/10815) [이분 탐색](https://www.acmicpc.net/problemset?sort=ac_desc&algo=12) |
| 1920 | \*[수 찾기](https://github.com/chichoc/solved-algorithms/tree/8dd228b97045f6c395a653b36e1be9b85d62571e/%EB%B0%B1%EC%A4%80/Silver/1920.%E2%80%85%EC%88%98%E2%80%85%EC%B0%BE%EA%B8%B0) | Silver 4 | [백준](https://www.acmicpc.net/problem/1920) [이분 탐색](https://www.acmicpc.net/problemset?sort=ac_desc&algo=12) |
| 1072 | @\*#[게임](https://github.com/chichoc/solved-algorithms/tree/97b9565cd48ba4f3e7ee1c3563a27120a6dc885a/%EB%B0%B1%EC%A4%80/Silver/1072.%E2%80%85%EA%B2%8C%EC%9E%84) | Silver 3 | [백준](https://www.acmicpc.net/problem/1072) [이분 탐색](https://www.acmicpc.net/problemset?sort=ac_desc&algo=12) |
| 1654 | \*[랜선 자르기](https://github.com/chichoc/solved-algorithms/tree/7e53d84982129f136f550fee2a5e70d25bcb581e/%EB%B0%B1%EC%A4%80/Silver/1654.%E2%80%85%EB%9E%9C%EC%84%A0%E2%80%85%EC%9E%90%EB%A5%B4%EA%B8%B0) | Silver 2 | [백준](https://www.acmicpc.net/problem/1654) [이분 탐색](https://www.acmicpc.net/problemset?sort=ac_desc&algo=12) |
| 12738 | @\*#[가장 긴 증가하는 부분 수열 3](https://github.com/chichoc/solved-algorithms/tree/fc94f79ae296dcf466d5e08eb968e9cd44283c90/%EB%B0%B1%EC%A4%80/Gold/12738.%E2%80%85%EA%B0%80%EC%9E%A5%E2%80%85%EA%B8%B4%E2%80%85%EC%A6%9D%EA%B0%80%ED%95%98%EB%8A%94%E2%80%85%EB%B6%80%EB%B6%84%E2%80%85%EC%88%98%EC%97%B4%E2%80%8530) | Gold 2 | [백준](https://www.acmicpc.net/problem/12738) [이분 탐색](https://www.acmicpc.net/problemset?sort=ac_desc&algo=12) | [참고한 풀이](https://velog.io/@arthur/12738.-%EA%B0%80%EC%9E%A5-%EA%B8%B4-%EC%A6%9D%EA%B0%80%ED%95%98%EB%8A%94-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4-3-node.js-javascript) |

## 슬라이딩 윈도우||투포인터 <a id="6"></a>

| 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
| --- | :-: | --: | --- | --- |
| 2531 | \#[회전 초밥](https://github.com/chichoc/solved-algorithms/tree/0ba795487b4c27f818de66267c4d576150f39f1a/%EB%B0%B1%EC%A4%80/Silver/2531.%E2%80%85%ED%9A%8C%EC%A0%84%E2%80%85%EC%B4%88%EB%B0%A5) | Silver 1 | [백준](https://www.acmicpc.net/problem/2531) |  |
| 15565 | \*#[귀여운 라이언](https://github.com/chichoc/solved-algorithms/tree/f1c4e9bfa29d8933066d835941099fe5fc210589/%EB%B0%B1%EC%A4%80/Silver/15565.%E2%80%85%EA%B7%80%EC%97%AC%EC%9A%B4%E2%80%85%EB%9D%BC%EC%9D%B4%EC%96%B8) | Silver 1 | [백준](https://www.acmicpc.net/problem/15565) |  |
| 20922 | \*#[겹치는 건 싫어](https://github.com/chichoc/solved-algorithms/tree/52c96151dfea5b260e87a46f2c14d7d9bede30c5/%EB%B0%B1%EC%A4%80/Silver/20922.%E2%80%85%EA%B2%B9%EC%B9%98%EB%8A%94%E2%80%85%EA%B1%B4%E2%80%85%EC%8B%AB%EC%96%B4) | Silver 1 | [백준](https://www.acmicpc.net/problem/20922) |  |

## 우선순위 큐 <a id="7"></a>

| 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
| --- | :-: | --: | --- | --- |
| 1927 | \*[최소 힙](https://github.com/chichoc/solved-algorithms/tree/c2e37fe66966a3315fcaa10a5d042542c38fc7c1/%EB%B0%B1%EC%A4%80/Silver/1927.%E2%80%85%EC%B5%9C%EC%86%8C%E2%80%85%ED%9E%99) | Silver 2 | [프로그래머스](https://www.acmicpc.net/problem/1927) |
| 1715 | @\*#[카드 정렬하기](https://github.com/chichoc/solved-algorithms/tree/fd6d35d363220165b16bbe5c4b6199b2cb03779f/%EB%B0%B1%EC%A4%80/Gold/1715.%E2%80%85%EC%B9%B4%EB%93%9C%E2%80%85%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0) | Gold 4 | [백준](https://www.acmicpc.net/problem/1715) | [참고한 풀이](https://tesseractjh.tistory.com/273) |

## 그래프 <a id="8"></a>

- ### 다익스트라 최단 경로
- ### 플로이드 워셜
- | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 1058 | @\*[친구](https://github.com/chichoc/solved-algorithms/tree/983d21039b8d54f7d92a15e09d4c8b82da85b448/%EB%B0%B1%EC%A4%80/Silver/1058.%E2%80%85%EC%B9%9C%EA%B5%AC) | Silver 2 | [백준](https://www.acmicpc.net/problem/1058)[브루트포스](https://www.acmicpc.net/problemset?sort=ac_desc&algo=125) [플로이드–워셜](https://www.acmicpc.net/problemset?sort=ac_desc&algo=31) |  |

- ### 서로소
- ### 신장 트리
- ### 위상 정렬

## SQL <a id="9"></a>

- ### NULL
- | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 59410 | [NULL 처리하기](https://github.com/chichoc/solved-algorithms/tree/12446d4b62ee5bb409f98ea3ba6410b433dc0b10/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/59410.%E2%80%85NULL%E2%80%85%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/59410) |

- ### SUM MAX MIN
  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 59408 | [중복 제거하기](https://github.com/chichoc/solved-algorithms/tree/74d98bfb150fcb6cf91665ef38cef24d08231be4/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/59408.%E2%80%85%EC%A4%91%EB%B3%B5%E2%80%85%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/59408) |
- ### GROUP BY

  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 59040 | [고양이와 개는 몇 마리 있을까](https://github.com/chichoc/solved-algorithms/tree/4e421dac59d1280dae7b221fa59d5841b4588964/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/59040.%E2%80%85%EA%B3%A0%EC%96%91%EC%9D%B4%EC%99%80%E2%80%85%EA%B0%9C%EB%8A%94%E2%80%85%EB%AA%87%E2%80%85%EB%A7%88%EB%A6%AC%E2%80%85%EC%9E%88%EC%9D%84%EA%B9%8C) | Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/59040) |  |
  | 131123 | @[즐겨찾기가 가장 많은 식당 정보 출력하기](https://github.com/chichoc/solved-algorithms/tree/75453ed647615dbb53190aac67efc7cdec120d07/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/3/131123.%E2%80%85%EC%A6%90%EA%B2%A8%EC%B0%BE%EA%B8%B0%EA%B0%80%E2%80%85%EA%B0%80%EC%9E%A5%E2%80%85%EB%A7%8E%EC%9D%80%E2%80%85%EC%8B%9D%EB%8B%B9%E2%80%85%EC%A0%95%EB%B3%B4%E2%80%85%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0) | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/131123) | [참고할 풀이](https://jaehwaseo.tistory.com/24) |
  | 62284 | [우유와 요거트가 담긴 장바구니](https://github.com/chichoc/solved-algorithms/tree/4e421dac59d1280dae7b221fa59d5841b4588964/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv4/62284.%E2%80%85%EC%9A%B0%EC%9C%A0%EC%99%80%E2%80%85%EC%9A%94%EA%B1%B0%ED%8A%B8%EA%B0%80%E2%80%85%EB%8B%B4%EA%B8%B4%E2%80%85%EC%9E%A5%EB%B0%94%EA%B5%AC%EB%8B%88) | Lv. 4 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/62284) | Summer/Winter Coding(~2019) |

- ### JOIN

  | 문제 번호 | 문제 이름 | 난이도 | 출처 | 비고 |
  | --- | :-: | --: | --- | --- |
  | 59042 | [없어진 기록 찾기](https://github.com/chichoc/solved-algorithms/tree/51b9c001c89fd6fd33e78f77604784e61b527979/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/59042.%E2%80%85%EC%97%86%EC%96%B4%EC%A7%84%E2%80%85%EA%B8%B0%EB%A1%9D%E2%80%85%EC%B0%BE%EA%B8%B0) | Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/59042) |  |
