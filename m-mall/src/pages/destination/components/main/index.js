import './main.css';

import Tab from '../tab';
import Content from  '../content';
import {get, set} from 'utils/sessionStorage';

const tabEl = document.querySelector('.tab');


const tab = new Tab(tabEl);

const content = new Content(document.getElementById('destination-content'));

// tab.to(1).then(data => {
//     content.set(data);
// });
const index = 0;
const tabItems = tabEl.querySelectorAll('.tab-item');

tabEl.addEventListener('click', ev => {
    // console.log(ev.target);
    const itemEl = ev.target;
    // console.log(index);
    if(itemEl.classList.contains('tab-item')){
        // console.log(itemEl.dataset.id - 1);
        const index = itemEl.dataset.id - 1;

        const storageName = `destination_content_${index}`;
        console.log(storageName);
        const storageContent = get(storageName);

        if(storageContent){
            tab.setActiveItem(index);
            content.set(storageContent);
        }else{
            const tabPromise = tab.to(index);
            tabPromise.then(data => {
            content.set(data);
            set(storageName, data);
            });
        }
    }
}, false);

tabItems[index].click();