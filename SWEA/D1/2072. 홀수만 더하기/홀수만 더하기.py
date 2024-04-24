T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    datas =map(int, input().split())
    sum = 0
    
    for data in datas:
        if data % 2 == 0: continue
        sum += data

    print(f"#{test_case} {sum}")
    # ///////////////////////////////////////////////////////////////////////////////////
