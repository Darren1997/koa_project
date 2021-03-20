# 第1节-浮动与定位
1. 浮动的元素不再区分块级和行内元素，一律能够设置宽高
2. BFC(块级格式化上下文)是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

    创建BFC：

        方法一：float的值不是none
        方法二：position的值不是static或者relative
        方法三：display的值是inline-block、flex或者inline-flex
        方法四：overflow：hidden
    BFC可以取消margin塌陷
3. 清除浮动
        
        方法一：让内部有浮动的父盒子形成BFC
        方法二：给后面的父盒子设置clear：both属性。clear表示清除浮动对自己的影响，both表示左右浮动都清除。副作用margin失效，不常用
        方法三：使用::after伪元素给盒子添加最后一个子元素，并且给::after设置clear:both，然后转为块级元素
        方法四：在两个父盒子之间“隔墙”，隔一个携带clear:both的盒子
4. 子绝(absolute)父相(relative)
5. 由于position:relative这个属性并没有脱离文档流的，所以元素本身所占的位置会保留
6. 浏览器私有前缀，面试需要
7. 使用background-position属性实现CSS精灵
8. transform:retate();---旋转---
            
        :scale();   ---扩缩---大于1是扩大，小于1是缩小
        :skew(x斜切角度, y斜切角度);    ---斜切变形---
        :translate(向左位移, 向右位移);   ---位移---
        :rotateX(角度); ---绕横轴旋转---
        :rotateY(角度); ---绕纵轴旋转---
        上面两个属性加perspective（用在父盒子）可以实现3D旋转
        当元素进行3D旋转后，即可继续添加translateX()、translateY()、translateZ()属性让元素在空间进行移动