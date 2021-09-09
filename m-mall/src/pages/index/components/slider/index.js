import 'swiper/swiper-bundle.min.css';
import './slider.css';

import Swiper from 'swiper/swiper-bundle.min';

import render from './slider.art';

import config,{SWIPER_CONTAINER_CLASS, URL, LAYOUT_ID} from './config';
import {getData,getDelayedData} from 'api/getData';

getData(URL).then(
    data=>{
        document.getElementById(LAYOUT_ID).innerHTML = render({
        ...config,
        ...{
            imgs : data,
            }
        });
        var mySwiper = new Swiper (SWIPER_CONTAINER_CLASS, config); 
    });
