T = int(input())

for test_case in range(1, T + 1):
    input()
    nums = list(map(int, input().split()))
    nums.sort()
    nums_type = set(nums)

    maxCount = 0
    answer = 0
    for num in nums_type:
        result = nums.count(num)
        if result >= maxCount:
            maxCount = result
            answer = num
    print(f'#{test_case} {answer}')