tc = 10
len = 100

for test_case in range(1, tc + 1):
    # 값 저장
    answer = 0
    input()
    array = []
    sums = {'row': [0] * 100, 'col': [0] * 100, 'cross': [0] * 2}
    for i in range(0, len):
        row = list(map(int, input().split()))
        array.append(row)
        sums['row'][i] = sum(row)
   
    # 열의 합 구하기
    for i in range(0, len):
        for j in range(0, len):
            sums['col'][i] += array[j][i]

    # 대각선의 합 구하기
    for i in range(0, len):
        sums['cross'][0] += array[i][i]
        sums['cross'][1] += array[i][len - i - 1]
    
    max_row = max(sums['row'])
    max_col = max(sums['col'])
    max_cross = max(sums['cross'])

    print(f'#{test_case} {max(max_row, max_col, max_cross)}')