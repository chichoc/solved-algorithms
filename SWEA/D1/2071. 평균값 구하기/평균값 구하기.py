#import sys
#sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T + 1):
   
    datas = list(map(int, input().split()))
    average = round(sum(datas) / 10)

    print(f"#{test_case} {average}")
    
  