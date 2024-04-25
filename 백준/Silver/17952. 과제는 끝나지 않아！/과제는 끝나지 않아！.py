import sys

N = int(sys.stdin.readline().strip())
answer = 0
homeworks = []

for i in range(1, N + 1):
    h = list(map(int, sys.stdin.readline().split()))
    
    if h[0] == 1:
        homeworks.append([h[1], h[2] - 1])
    elif homeworks:
        homeworks[len(homeworks) - 1][1] -= 1
    
    if len(homeworks) > 0 and homeworks[len(homeworks) - 1][1] == 0:
        [PA, PT] = homeworks.pop()
        answer += PA

print(answer)