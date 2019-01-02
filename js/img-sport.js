window.onload = function () {
    var slider = document.getElementById("slider");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName('span');
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;
    var animated = false;
    var timer;
    // 小圆点设置
    function showButton() {
        for (var i = 0; i < buttons.length;i++){
            if (buttons[i].className == "on"){
                buttons[i].className = "";
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }
    // 添加事件绑定
    function animate(offset) {
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;// 位移总的时间
        var interval = 10;// 位移间隔时间
        var speed = offset/(time/interval);// 每次的位移量
        // 位移的判断
        function go() {
            if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 &&parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + 'px';
                // 设置定时器
                setTimeout(go,interval);
            }
            else{
                animated = false;
                list.style.left = newLeft + 'px';
                if (newLeft >-762){
                    list.style.left = -3790 + 'px';
                }
                if(newLeft < -3790){
                    list.style.left = -762 + 'px';
                }
            }
        }
        go();
    }
    // 自动播放
    function play() {
        // 设置定时器
        timer = setInterval(function () {
            next.onclick();
        },2000);
    }
    function stop() {
        // 清除定时器
        clearInterval(timer);
    }
    next.onclick = function () {
        if(index == 5){
            index = 1;
        }
        else{
            index += 1;
        }
        showButton();
         if (!animated) {
             animate(-762);
         }
    };
    prev.onclick = function () {
        if(index == 1){
            index = 5;
        }
        else{
            index -= 1;
        }
        showButton();
        animate(762);
    };
    // 小圆点的点击设置
    for (var i = 0; i <buttons.length; i++){
       buttons[i].onclick = function () {
           if(this.className == "on"){
               return;
           }
           var myIndex = parseInt(this.getAttribute('index'));
           var offset = -762 * (myIndex - index);
           animate(offset);
           index = myIndex;
           showButton();
           if (!animated){
               animate(offset);
           }
       }
    }
    slider.onmouseover = stop;
    slider.onmouseout = play;
    play();
};