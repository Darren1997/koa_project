// 添加键盘控制
import {LEFT_KETCODE, LIFT_KEYCODE, RIGHT_KETCODE} from './constants.js';

const keyboard = {
    bindEvent(slider){
        document.addEventListener(
            'keyup',
            ev => {
                if(ev.keyCode === LEFT_KETCODE){
                    // console.log(1);
                    slider.prev();
                }else if(ev.keyCode === RIGHT_KETCODE){
                    slider.next();
                }
            },
            false
        );
    }
};

export default keyboard;