import './slider.css';
import './btn.css';

import Slider from './module';

import {getData} from 'api/getData';

getData('https://www.imooc.com/api/mall-PC/index/slider/slider?icode=J6DDC8E3E7A8BF54C');

const slider = new Slider(document.querySelector('.slider'), {
    initialIndex: 2,
    animation:false,
    // 切换速度，单位 ms
    speed:300,
    // 自动切换，单位 ms
    autoplay:1000
});

const leftbtnEl = document.getElementById('leftbtn');
const rightbtnEl = document.getElementById('rightbtn');

leftbtnEl.addEventListener(
    'click',
    ()=>{
        slider.prev();
    },
    false
);
rightbtnEl.addEventListener(
    'click',
    ()=>{
        slider.next()
    },
    false
);

const bannerEl = document.getElementById('banner');
bannerEl.addEventListener(
    'mouseenter',
    ()=>{
        slider.pause();
    },
    false
);
bannerEl.addEventListener(
    'mouseleave',
    ()=>{
        slider.autoplay();
    },
    false
);