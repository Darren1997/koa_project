(function(){
    // alert('hello');
    var img_ul = document.getElementById('img_ul');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var circle_ol = document.getElementById('circle_ol');
    var circle_li = circle_ol.querySelectorAll('li');
    // console.log(circle_li);
    var idd = 0;
    var cdd = 0;
    // 节流锁
    var lock = true;

    var img_li = img_ul.firstElementChild.cloneNode(true);
    img_ul.appendChild(img_li);

    
    right_btn.onclick = right_btn_handle;

    function right_btn_handle(){
        if(!lock) return;
        lock = false;
        img_ul.style.transition = 'transform .5s ease 0s';
        idd ++;
        img_ul.style.transform = 'translateX('+ -16.666 * idd +'%)';    
        if(idd>4){
            setTimeout(function(){
                img_ul.style.transition = 'none';
                idd = 0;
                img_ul.style.transform = 'translateX('+ -16.666 * idd +'%)';
            }, 500);
        }
        circleChange();
        setTimeout(function(){
            lock = true;
        }, 500);
    }

    left_btn.onclick = function(){
        if(!lock) return;
        if(idd<=0){
            lock = false;
            img_ul.style.transition = 'none';
            idd = 5;
            img_ul.style.transform = 'translateX('+ -16.666 * idd +'%)';
            setTimeout(function(){
                img_ul.style.transition = 'transform .5s ease 0s';
                idd = 4;
                img_ul.style.transform = 'translateX('+ -16.666 * idd +'%)';
                circleChange();
            }, 0);
            setTimeout(function(){
                lock = true;
            }, 600);
        }
        else{
            lock = false;
            idd --;
            img_ul.style.transform = 'translateX('+ -16.666 * idd +'%)';
            circleChange();
            setTimeout(function(){
                lock = true;
            }, 500);
        }
    }

    circle_ol.onclick = function(e){
       if(e.target.nodeName == 'LI'){
           idd = Number(e.target.getAttribute('data-i'));
           img_ul.style.transition = 'transform .5s ease 0s'
           img_ul.style.transform = 'translateX('+ -16.666 * idd +'%)';
           circleChange();
       }
    }
    

    function circleChange(){
        circle_li[cdd].className = '';
        if(idd == 0 || idd == 5){
            circle_li[0].className = 'cursor';
            cdd = 0
        }else{
            circle_li[idd].className = 'cursor';
            cdd = idd
        }
    }

    var timer = setInterval(right_btn_handle, 2000);

    var banner = document.getElementById('banner');

    banner.onmouseleave = function(){
        clearInterval(timer);
        timer = setInterval(right_btn_handle, 2000);
    }

    banner.onmouseenter = function(){
        clearInterval(timer);
    }

    var l_meun = document.getElementById('l_meun');

    l_meun.onmouseenter = function(){
        circle_ol.style.zIndex = '0';
    }
    l_meun.onmouseleave = function(){
        circle_ol.style.zIndex = '9999';
    }

})();