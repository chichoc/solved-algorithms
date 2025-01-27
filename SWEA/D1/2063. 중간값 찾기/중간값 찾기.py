# import sys, math
# sys.stdin = open("input.txt", "r")
import math

T = int(input())
# datas = list(map(int, sys.stdin.readline().split()))
datas = list(map(int, input().split()))

center = math.floor(T/2)
datas.sort()

print(datas[center])