T = int(input())

for test_case in range(0, T):
   datas = list(map(int, input().split()))
   result = '='
   if datas[0] > datas[1]:
      result = '>'
   elif datas[0] < datas[1]:
       result = '<'
   
   print(f"#{test_case + 1} {result}")