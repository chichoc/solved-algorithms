# import sys
# sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T + 1):
   data = int(input())
   print(f'#{test_case}', data**2)