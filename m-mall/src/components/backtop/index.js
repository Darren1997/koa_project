import './backtop.css';
import 'icons/iconfont.css';

const CHANGED_CLASS_NAME = 'backtop-hidden';
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';
// let state = INIT_STATE;


class Backtop{
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer){
        // console.log(1);
        this.el = el;
        this.critical_point = critical_point;
        this.scrollContainer = scrollContainer;
        this.eventEl = eventEl;
        this.setState(INIT_STATE);
        this.bindEvent();
    }
    setState(state){
        this.state = state;
    }
    bindEvent(){
        this.eventEl.addEventListener('scroll', ()=>{
            // console.log(1);
            if(this.needChange()){
                // console.log(1);
                this.change();
                this.setState(CHANGED_STATE);
            }else if(this.needReset()){
                // console.log(1);
                this.reset();
                this.setState(INIT_STATE);
            }
            // console.log(scrollContainer.scrollTop);
        },false);
        this.el.addEventListener('click', ()=>{
            this.scrollTo();
        }, false);
    }
    scrollTo(top=0, left=0){
        this.scrollContainer.scrollTo({
            top,
            left,
            behavior : 'smooth'
        });
    }
    needReset(){
        return this.state == CHANGED_STATE && this.scrollContainer.scrollTop <= this.critical_point;
    }
    needChange(){
        return this.state == INIT_STATE && this.scrollContainer.scrollTop > this.critical_point;
    }
    change(){
        this.el.classList.remove(CHANGED_CLASS_NAME);
    }
    reset(){
        this.el.classList.add(CHANGED_CLASS_NAME);
    }
}

export default Backtop;