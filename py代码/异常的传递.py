# 需求1：尝试只读打开test.txt文件，存在读取内容，不存在提示用户
# 需求2：读取内容，循环读取，当无内容时退出循环，如果用户意外终止，提示用户已经被意外终止

try:
    f=open('test.txt')
    try:
        #尝试循环内容
        while True:
            con = f.readline()
            if len(con)<=0:
                break
            print(con)
    except:
        print('程序意外终止！')
    finally:
        f.close()
        print('文件关闭！')

except:
    print('文件不存在！')