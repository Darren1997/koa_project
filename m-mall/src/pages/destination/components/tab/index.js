import './tab.css';
import {getData, getDelayedData} from 'api/getData';

const URL = 'https://www.imooc.com/api/mall-wepApp/destination/content';

class Tab{
    constructor(el){
        this.itemEls = el.querySelectorAll('.tab-item');
    }

    setActiveItem(index){
        for(const itemEl of this.itemEls){
            itemEl.classList.remove('tab-item-active');
        }
        this.itemEls[index].classList.add('tab-item-active');
    }

    to(index){
        if(this.dataPromise && this.dataPromise.xhr){
            this.dataPromise.xhr.abort();
        }
        this.setActiveItem(index);
        this.dataPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`);
        return this.dataPromise;
    }
}

export default Tab;