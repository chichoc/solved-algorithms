import sys

N = int(sys.stdin.readline().strip())
answer = 0
sum = {}

for i in range(1, N + 1):
    word = sys.stdin.readline().strip()
    word_length = len(word)
    for idx in range(0, word_length):
        join = ''.join([str(10 ** (word_length - idx - 1)), word[idx]])
        if sum.get(word[idx]):
            sum[word[idx]] += 10 ** (word_length - idx - 1)
        else:
            sum[word[idx]] = 10 ** (word_length - idx - 1)
    

sorted_sum = list(dict(sorted(sum.items(), key=lambda item: item[1], reverse=True)).values())
sorted_sum_length = len(sorted_sum)

for i in range(0, sorted_sum_length):
    answer += (9 - i) * sorted_sum[i]


print(answer)