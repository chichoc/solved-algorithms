import math

T = int(input())
datas = list(map(int, input().split()))

center = math.floor(T/2)
datas.sort()

print(datas[center])