# 第2节 CSS3选择器
1. id是唯一的
2. 原子类
    1. 在做网页项目前，可以将所有的常用字号、文字颜色、行高、外边距、内边距等都设置为单独的类
3. 后代选择器：在CSS选择器中，使用空格表示后代
4. 交集选择器：标签名和类名之间不留空格，表示选择该标签该类名的元素
5. 并集选择器：之间留逗号
6. 伪类：伪类是添加到选择器的描述性词语，指定要选择的元素的特殊状态，超级链接拥有4个特殊状态，例如a:hover，要按顺序编写伪类才能生效
7. 子选择器：例如div&gt;p，选择div的子标签p，必须为父子关系
8. 相邻兄弟选择器：例如img+p，选中图片后面紧跟着的段落
9. 通用兄弟选择器：例如p~span，选中p元素之后的所有同层级span元素
10. 序号选择器：
    
    :first-child：第一个子元素

    :last-child：最后一个子元素

    :nth-child(3)：第三个子元素

    :nth-of-type(3)：第三个某类型子元素，将选择同种标签指定序号的子元素

    :nth-last-child(3)：倒数第三个子元素

    :nth-last-of-type(3)：倒数第三个某类型子元素

    例如： 
    
        div p:first-child ： 表示选择div下第一个子元素并且为p标签
11. 属性选择器：

        img[alt]：选择有alt属性的img标签
12. CSS3新增伪类
13. 伪元素

        例子

        a::before{
            content: 'T'
        }
        //在所有a标签的内容前添加T
        a::after{
            content: 'Y'
        }
        //在所有a标签的内容后添加T
14. CSS权重大小：id权重 > class > 标签权重
15. 复杂选择器可以通过（id的个数，class的个数，标签的个数）的形式，计算权重

        权重(2,1,2) #box1 div .box2 #box3 p {
                        color: green;
                    }
16. 如果我们需要将某个选择器的某条属性提升权重，可以在属 性后面写!important

    ★很多公司不使用  

        .spec{
            color: blue !important
        }


# 第3节 文本与字体属性
1. font-family：一般英语字体放到前面，后面的字体是前面的字体的“后备”字体，字体名称中有空格或中文，必须用引号包裹
2. font属性可以用来作为font-style，font-weight，font-size，line-height和font-family属性的合写
3. 盒子的总宽度 = width + 左右padding + 左右border
4. 竖直方向的margin有塌陷现象：小的margin会塌陷到大的margin中，从而margin不叠加，只以大值为准
5. 一些元素（比如body、ul、p等）都有默认的margi，在开始制作网页的时候，要将它们清除

        *{
            margin:0;
            padding:0;
        }
        <!-- *是通配符选择器 -->
6. 将盒子添加了box-sizing:border-box;之后，盒子的width、height数字就表示盒子实际占有的宽高（不含margin）了，即padding、border变为“内缩”的，不再“外扩”
7. 行内元素不能设置宽高
8. img和表单元素是特殊的行内块，它们既能够设置宽度高度，也能够并排显示
9. 使用display:none;可以将元素隐藏，元素将彻底放弃位置，如同没有写他的标签一样
10. 使用visibility:hidder;也可以将元素隐藏，但是元素不放弃自己的位置