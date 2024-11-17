# import sys
# sys.stdin = open("input.txt", "r")

nums = [2, 3, 5, 7, 11]

T = int(input())

for test_case in range(1, T + 1):
   data = int(input())
   result = []
   
   for num in nums:
      count = 0
      while data % num == 0:
         data = data / num
         count += 1
      result.append(count)

   print(f'#{test_case}', *result)
   
   