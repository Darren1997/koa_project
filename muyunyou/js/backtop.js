(function(){
    var backtop = document.getElementById('backtop');
    // var scrollTop = document.documentElement.scrollTop;
    var timer;

    backtop.onclick = function(){
        clearInterval(timer);
        timer = setInterval(function(){
            document.documentElement.scrollTop -= 100;
            if(document.documentElement.scrollTop<=0){
                clearInterval(timer);
            }
        }, 20);
    }

    window.onscroll = function(){
        // clearInterval(timer);
        if(document.documentElement.scrollTop <= 0){
            backtop.style.display = 'none';
        }
        else{
            backtop.style.display = 'block';
        }
    }

})();