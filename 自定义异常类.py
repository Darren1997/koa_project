# 1.自定义异常类，继承Exception，魔法方法有init和str（设置异常描述信息）
class ShortInputError(Exception):
    def __init__(self, length, min_len):
        self.length = length
        self.min_len = min_len
    def __str__(self):
        return f'您输入的密码长度是{self.length}，密码长度不能少于{self.min_len}'


def mian():
    try:
        con = input('请输入密码：')
        if len(con) < 3:
            # 2.抛出异常
            raise ShortInputError(len(con), 3)
    # 3.捕获该异常
    except Exception as result:
        print(result)
    else:
        print('密码已经输入完成！')

mian()