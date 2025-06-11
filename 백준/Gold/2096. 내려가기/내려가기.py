import sys
input = sys.stdin.readline

def solution():
    n = int(input())
    mx1, mx2, mx3 = map(int, input().split())
    mn1, mn2, mn3 = mx1, mx2, mx3

    for _ in range(1, n):
        nmx1, nmx2, nmx3 = map(int, input().split())
        nmn1, nmn2, nmn3 = nmx1, nmx2, nmx3

        nmx1 += max(mx1, mx2)
        nmx2 += max(mx1, mx2, mx3)
        nmx3 += max(mx2, mx3)
        mx1, mx2, mx3 = nmx1, nmx2, nmx3

        nmn1 += min(mn1, mn2)
        nmn2 += min(mn1, mn2, mn3)
        nmn3 += min(mn2, mn3)
        mn1, mn2, mn3 = nmn1, nmn2, nmn3

    print(max(mx1, mx2, mx3), min(mn1, mn2, mn3))

if __name__ == "__main__":
    solution()