function Slider(el, options){
    var defaults = {
        initIndex: 0,
        speed: 300,
        hasIndicator: false
    };
    this.options = {};
    this.options.initIndex = typeof options.initIndex !== 'undefined' ? options.initIndex : defaults.initIndex;
    this.options.speed = typeof options.speed !== 'undefined' ? options.speed : defaults.speed;
    this.options.hasIndicator = typeof options.hasIndicator !== 'undefined' ? options.hasIndicator : defaults.hasIndicator;

    this.el = el;
    this.itemContainer = el.querySelector('.slider-item-container');
    this.items = this.itemContainer.children;
    this.distancePerSlider = this.items[0].offsetWidth;

    this.minIndex = 0;
    this.maxIndex = this.items.length - 1;
    this.index = this._adjustIndex(this.options.initIndex);

    this.move(this.getDistanceByIndex(this.index));

    if(this.options.hasIndicator){
        this._createIndicators();
        this._setIndicatorActive(this.index);
    }
}
Slider.prototype.to = function(index,cd){
    var self = this;
    this.index = this._adjustIndex(index);
    this._setTransitionSpeed(this.options.speed);
    this.move(this.getDistanceByIndex(this.index));
    if(this.options.hasIndicator){
        this._setIndicatorActive(this.index);
    }
    this.itemContainer.addEventListener('transitionend', function(){
        self._setTransitionSpeed(0);
        if(typeof cd === 'function'){
            cd();
        }
    }, false);
};
Slider.prototype.prev = function(cd){
    this.to(this.index - 1,cd);
};
Slider.prototype.next = function(cd){
    this.to(this.index + 1,cd);
};
Slider.prototype._adjustIndex = function(index){
    if(index < this.minIndex)   index = this.minIndex;
    if(index > this.maxIndex)   index = this.maxIndex;
    return index;
};
Slider.prototype.move = function(distance){
    var el = this.el.querySelector('.slider-item-container');
    el.style.transform = 'translate3D('+distance+'px,0,0)';
};
Slider.prototype.getDistanceByIndex = function(index){
    return -index * this.distancePerSlider;
};
Slider.prototype._createIndicators = function(){
    var el = document.getElementById('slider-indicator-container');
    var html = '';
    for(var i = 0; i <= this.maxIndex; i++){
        html += '<span class="indicator"></span>'
    }
    el.innerHTML = html;
};
Slider.prototype._setIndicatorActive = function(index){
    this.indicators = this.indicators || this.el.querySelectorAll('.indicator');
    for(var i = 0; i < this.indicators.length; i++){
        this.indicators[i].classList.remove('slider-indicator-active');
    }
    this.indicators[index].classList.add('slider-indicator-active');
};
Slider.prototype._setTransitionSpeed = function(speed){
    this.itemContainer.style.transition = 'transform '+speed+'ms';
}
Slider.prototype.getItemContainer = function(){
    return this.itemContainer;
}
Slider.prototype.getIndex = function(){
    return this.index;
}
Slider.prototype.getDistancePerSlider = function(){
    return this.distancePerSlider;
}