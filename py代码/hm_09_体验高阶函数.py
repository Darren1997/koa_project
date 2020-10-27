# 需求：任意两个数字，先进行数字处理（绝对值或四舍五入）再求和计算
# 1.写法一
# def add_num(a, b):
#     return abs(a)+abs(b)

# result = add_num(-1.1, 1.9)
# print(result)


# 2.写法二：高阶函数
def sun_num(a, b, f):
    return f(a)+f(b)

result1 = sun_num(-1, 5, abs)
print(result1)

result2 = sun_num(1.1, 4.9, round)
print(result2)