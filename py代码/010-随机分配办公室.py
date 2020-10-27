#需求：8位老师，三个办公室，将8个老师随机分配到3个办公室
import random

teachers = ['A','B','C','D','E','F','G','H']
offices = [[],[],[]]

for name in teachers:
    num = random.randint(0, 2)
    offices[num].append(name)

for office in offices:
    print(f'办公室的人数是{len(office)}，老师分别是：')
    for name in office:
        print(name)

