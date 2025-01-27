# import sys
# sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T + 1):
    # datas = list(map(int, sys.stdin.readline().split()))
    datas = list(map(int, input().split()))
    
    print(f"#{test_case} {max(datas)}")