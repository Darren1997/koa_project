import {ELEMENT_NODE_TYPE, SLIDER_ANIMATION_CLASS_NAME} from './constants'
import DEFAULTS from './defaults';

class BaseSlider{
    constructor(el, options){
        if(el.nodeType !== ELEMENT_NODE_TYPE){
            throw new Error('实例化的时候，请传入DOM元素！');
        }

        this.options = {
            ...DEFAULTS,
            ...options
        };

        const sliderEL = el;
        const sliderComtentEL = sliderEL.querySelector('.slider-content');
        // console.log(sliderComtentEL);
        const sliderComtentELs = sliderComtentEL.querySelectorAll('.slider-item');

        // 添加到this上，方便使用
        this.sliderEL = sliderEL;
        this.sliderComtentEL = sliderComtentEL;
        this.sliderComtentELs = sliderComtentELs;

        this.minIndex = 0;
        this.maxIndex = sliderComtentELs.length - 1;
        this.currIndex = this.getCorrectedIndex(this.options.initialIndex);

        // 每个slider-item的宽度（每次移动的距离）
        this.itemWidth = sliderComtentELs[0].offsetWidth;

        this.init();
    }

    // 初始化
    init(){
        // 为每个slider-item设置宽度
        this.setItemsWidth();

        // 为每个slider-content设置宽度
        this.setContentWidth();

        // 切换到初始索引 initialIndex
        this.move(this.getDistance());

        // 开启动画
        if(this.options.animation){
            this.openAnimation();
        }

        // 自动切换
        if(this.options.autoplay){
            this.autoplay();
        }
    }

    // 切换到index索引对应的幻灯片
    to(index){
        index = this.getCorrectedIndex(index);
        if(this.currIndex == index) return;
        // console.log(1);
        this.currIndex = index;
        const distance = this.getDistance();
        if(this.options.animation){
            this.moveWithAnimation(distance);
        }else{
            this.move(distance);
        }
    }

    // 切换上一张
    prev(){
        // console.log(this.currIndex);
        this.to(this.currIndex - 1);
    }

    // 切换下一张
    next(){
        this.to(this.currIndex + 1);
    }

    // 自动切换
    autoplay(){
        const {autoplay} = this.options;
        if(autoplay <= 0) return;
        this.pause();
        this.autoplayTimer = setInterval(()=>{
            // console.log(1);
            this.next();
        }, autoplay);
    }

    // 暂停自动切换
    pause(){
        clearInterval(this.autoplayTimer);
    }

    // 开启动画
    openAnimation(){
        this.sliderComtentEL.classList.add(SLIDER_ANIMATION_CLASS_NAME);
    }

    // 关闭动画
    closeAnimation(){
        this.setAnimationSpeed(0);
    }

    // 设置切换动画速度
    setAnimationSpeed(speed = this.options.speed){
        this.sliderComtentEL.style.transitionDuration = `${speed}ms`;
    }

    // 获取移动的距离
    getDistance(index = this.currIndex){
        return -this.itemWidth * index;
    }

    // 不带动画的移动
    move(distance){
        this.sliderComtentEL.style.transform = `translate3d(${distance}px, 0px, 0px)`;
    }

    // 带动画的移动
    moveWithAnimation(distance){
        // console.log(1);
        this.setAnimationSpeed();
        this.move(distance);
        this.sliderComtentEL.addEventListener(
            'transitionend',
            ()=>{
                this.closeAnimation();
            },
            false
        );
    }

    // 为每个slider-item设置宽度
    setItemsWidth(){
        for(const item of this.sliderComtentELs){
            item.style.width = `${this.itemWidth}px`;
        }
    }

    // 为每个slider-content设置宽度
    setContentWidth(){
        this.sliderComtentEL.style.width = `${this.itemWidth * this.sliderComtentELs.length}px`;
    }

    // 获取修正后的索引值
    getCorrectedIndex(index){
        if(index<this.minIndex)  return this.maxIndex;
        if(index>this.maxIndex) return this.minIndex;
        return index;
    }
}

export default BaseSlider;