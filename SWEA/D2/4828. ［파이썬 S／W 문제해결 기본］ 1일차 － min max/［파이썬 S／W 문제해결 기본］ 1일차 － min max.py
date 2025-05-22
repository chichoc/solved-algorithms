T = int(input())

for test_case in range(1, T + 1):
    input()
    nums = list(map(int, input().split()))
    answer = max(nums) - min(nums)
    print(f'#{test_case} {answer}')