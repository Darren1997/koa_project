import './content.css';
import render from './content.art';

class Content{
    constructor(el){
        this.el = el;
    }
    set(data){
        // console.log(render({
        //     content : data
        // }));
        this.el.innerHTML = render({
            contents : data
        });
        // console.log(this.el);
    }
}

export default Content;