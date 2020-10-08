age = 18
name = 'TOM'
weight = 75.5
stu_id = 1

print('今年我的年龄是%d岁' % age)

print('我的名字是%s' % name)

print('我的体重是%.2f公斤' % weight)  # 保留两位小数位

print('我的学号是%03d' % stu_id)  # 表示输出的整数显示位数，不足以0补全，超出当前位数则原样输出

print('我的名字是%s，今年%d岁了' % (name, age))

print('我的名字是%s，明年%d岁了' % (name, age+1))

print('我的名字是%s，今年%d岁了，体重%.2f公斤，学号是%03d' % (name, age, weight,stu_id))
