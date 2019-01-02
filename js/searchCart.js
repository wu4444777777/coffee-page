// window.onload = function(){
    //按钮加减
    function changeNum(numId,flag){
        var putBox = document.getElementById(numId);
        if(flag == "add"){
            putBox.value ++;
        }
        if(flag == "sub"){
            if(putBox.value > 1){
                putBox.value --;
            }
        }
    }
    //json传值
    var commodity1 = [
        {
            "id" : 1,
            "name" : "盖百霖遮盖液第四代（标注装）",
            "img" : "img/recommend2.jpg",
            "money" : "45.00"
        },
        {
            "id" : 2,
            "name" : "仙灵骨葆片（薄膜衣）0.3g*100s",
            "img" : "img/recommend4.jpg",
            "money" : "45.00"
        },
        {
            "id" : 3,
            "name" : "三勒浆抗疲劳液30ml*5支",
            "img" : "img/recommend3.jpg",
            "money" : "45.00"
        },
        {
            "id" : 4,
            "name" : "扶他林 双氯芬酸钠肠溶片",
            "img" : "img/detail1.png",
            "money" : "45.00"
        },
        {
            "id" : 5,
            "name" : "盖百霖遮盖液第四代（标注装）",
            "img" : "img/recommend2.jpg",
            "money" : "45.00"
        },
        {
            "id" : 6,
            "name" : "仙灵骨葆片（薄膜衣）0.3g*100s",
            "img" : "img/recommend4.jpg",
            "money" : "45.00"
        },
        {
            "id" : 7,
            "name" : "三勒浆抗疲劳液30ml*5支",
            "img" : "img/recommend3.jpg",
            "money" : "45.00"
        },
        {
            "id" : 8,
            "name" : "扶他林 双氯芬酸钠肠溶片",
            "img" : "img/detail1.png",
            "money" : "45.00"
        }
    ];
    var shoppingShow = "";
    for(var i of commodity1){
        shoppingShow  += "<div class=\"crpp1\">\n" +
            "<img src='"+i["img"]+"' alt=\"\">\n" +
            "<h5>盖百霖遮盖液第四代（标注版）</h5>\n" +
            "<div class=\"money\">￥45</div>\n" +
            "<div class=\"shopbox\">\n" +
            "<button class=\"add\" onclick=\"changeNum('num"+i["id"]+"','sub')\">-</button>\n" +
            "<input type=\"text\" value=\"1\" id=\"num"+i["id"]+"\">\n" +
            "<button class=\"sub\" onclick=\"changeNum('num"+i["id"]+"','add')\">+</button>\n" +
            "</div>\n" +
            "<div class=\"shoppingCar\">\n" +
            "<p class=\"saveshop\"><img src=\"img/save.svg\" alt=\"\">收藏</p>\n" +
            "<button class=\"joinshop\" onclick=\"buy("+i["id"]+")\"><img src=\"img/购物车.png\" alt=\"\">加入购物车</button>\n" +
            "</div>\n" +
            "</div>"
    }
    document.getElementById("crp-product").innerHTML += shoppingShow;
    var buyList = new Array();

    function BuyDetail(id,number){
        this.id = id;
        this.number = number;
    }
    function buy(id){
        var number = document.getElementById("num"+id).value;
        buyList.push(new BuyDetail(id,number));
        var shopNum = document.getElementById("special");
        shopNum.innerHTML = parseInt(shopNum.childNodes[0].textContent) + parseInt(number);
        console.log(buyList);
    }
    function add(){
        var url = encodeURI(encodeURI("shoppingCart.html?buy="+JSON.stringify(buyList)));
        window.open(url);
        // window.open("shoppingCart.html?json="+json);
    }
// }