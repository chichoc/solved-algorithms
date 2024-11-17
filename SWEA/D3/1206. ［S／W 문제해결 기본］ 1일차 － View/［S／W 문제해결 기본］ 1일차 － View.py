for i in range(1, 11):
    answer = 0
    T = int(input())
    datas = list(map(int, input().split()))

    for j in range(2, T - 2):
        left_max = max(datas[j-2], datas[j-1])
        right_max = max(datas[j+2], datas[j+1])
        answer += max(0, datas[j] - max(left_max, right_max))
    print(f'#{i}', answer)
