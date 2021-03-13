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