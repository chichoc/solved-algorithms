T = 10

for test_case in range(1, T + 1):
    limit = int(input())
    nums = list(map(int, input().split()))
    for i in range(1, limit + 1):
        max_num = max(nums)
        max_idx = nums.index(max_num)

        min_num = min(nums)
        min_idx = nums.index(min_num)

        nums[max_idx] -= 1
        nums[min_idx] += 1

    print(f'#{test_case} {max(nums) - min(nums)}')