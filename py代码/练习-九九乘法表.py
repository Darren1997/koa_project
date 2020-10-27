a=1
b=1
while a<=9:
    b=1
    while b<=a:
        print(f'{b}*{a}={a*b}',end=' ')
        b+=1
    a+=1
    print()

str1='itheima'
for i in str1:
    if i == 'e':
        print('遇到e不打印')
        continue
    print(i)

