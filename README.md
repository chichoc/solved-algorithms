# solved-algorithms

- [구현 (시뮬레이션)](#1)
- [탐욕법 (Greedy)](#2)
- [완전탐색](#3)
- [DP](#4)
- [이분탐색](#5)
- [그래프](#6)

## 구현 (시뮬레이션) <a id="1"></a>

- ### 문자열 처리
- ### 정규식 활용
  | 문제 번호 |                                                                                                    문제                                                                                                    | 난이도 | 출처                                                                            | 비고                                                                                                                                                                            |
  | --------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | 17682     | [[1차] 다트 게임](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/12977.%E2%80%85%EC%86%8C%EC%88%98%E2%80%85%EB%A7%8C%EB%93%A4%EA%B8%B0) |  Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/17682) | [2018 KAKAO BLIND RECRUITMENT](https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/#2-%EB%8B%A4%ED%8A%B8-%EA%B2%8C%EC%9E%84%EB%82%9C%EC%9D%B4%EB%8F%84-%ED%95%98) |

## 탐욕법 (Greedy) <a id="2"></a>

| 문제 번호 |                                                                                       문제                                                                                        | 난이도 | 출처                                                                            | 비고 |
| --------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: | ------------------------------------------------------------------------------- | ---- |
| 42862     |      [체육복](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/42862.%E2%80%85%EC%B2%B4%EC%9C%A1%EB%B3%B5)       |  Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42862) |      |
| 42860     | [조이스틱](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/42860.%E2%80%85%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1) |  Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42860) |      |
| 42885     | [구명보트](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/42885.%E2%80%85%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8) |  Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42885) |      |

## 완전탐색 <a id="3"></a>

- ### Brute-force

  | 문제 번호 |                                                                                                  문제                                                                                                  | 난이도 | 출처                                                                            | 비고                        |
  | --------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: | ------------------------------------------------------------------------------- | --------------------------- |
  | 12977     | [소수 만들기](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv1/12977.%E2%80%85%EC%86%8C%EC%88%98%E2%80%85%EB%A7%8C%EB%93%A4%EA%B8%B0) |  Lv. 1 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/12977) | Summer/Winter Coding(~2018) |

- ### DFS/BFS

  - #### DFS

    | 문제 번호 |                                                                                            문제                                                                                             | 난이도 | 출처                                                                            | 비고                                                                                                                                                         |
    | --------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | 43162     |      [네트워크](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/43162.%E2%80%85%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC)      |  Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43162) |                                                                                                                                                              |
    | 92343     | [양과 늑대](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/92343.%E2%80%85%EC%96%91%EA%B3%BC%E2%80%85%EB%8A%91%EB%8C%80) |  Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/92343) | [2022 KAKAO BLIND RECRUITMENT](https://tech.kakao.com/2022/01/14/2022-kakao-recruitment-round-1/#%EB%AC%B8%EC%A0%9C-5-%EC%96%91%EA%B3%BC-%EB%8A%91%EB%8C%80) |

    - ##### Backtracking

  - #### BFS
    | 문제 번호 |                                                                                                                 문제                                                                                                                  | 난이도 | 출처                                                                            | 비고 |
    | --------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: | ------------------------------------------------------------------------------- | ---- |
    | 1844      | [게임 맵 최단거리](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/1844.%E2%80%85%EA%B2%8C%EC%9E%84%E2%80%85%EB%A7%B5%E2%80%85%EC%B5%9C%EB%8B%A8%EA%B1%B0%EB%A6%AC) |  Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/1844)  |
    | 43165     |                      [타겟 넘버](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv2/43165.%E2%80%85%ED%83%80%EA%B2%9F%E2%80%85%EB%84%98%EB%B2%84)                      |  Lv. 2 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43165) |
    | 43163     |                      [단어 변환](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/43163.%E2%80%85%EB%8B%A8%EC%96%B4%E2%80%85%EB%B3%80%ED%99%98)                      |  Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43163) |

- ### 순열/조합

## DP <a id="4"></a>

| 문제 번호 |                                                                                             문제                                                                                              | 난이도 | 출처                                                                            | 비고 |
| --------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: | ------------------------------------------------------------------------------- | ---- |
| 42895     | [N으로 표현](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/42895.%E2%80%85N%EC%9C%BC%EB%A1%9C%E2%80%85%ED%91%9C%ED%98%84) |  Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/42895) |

## 이분탐색 <a id="5"></a>

| 문제 번호 |                                                                                       문제                                                                                        | 난이도 | 출처                                                                            | 비고 |
| --------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: | ------------------------------------------------------------------------------- | ---- |
| 43238     | [입국심사](https://github.com/chichoc/solved-algorithms/tree/main/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4/lv3/43238.%E2%80%85%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC) |  Lv. 3 | [프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/43238) |

## 그래프 <a id="6"></a>
