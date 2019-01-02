window.onload =function(){
    var searchUrl = JSON.parse(JSON.stringify(decodeURI(decodeURI(location.search.substring(1,window.location.search.length)))));
    var order = searchUrl.split("=");
    orderList = JSON.parse(order[1]);

    function ShopDetail(id,name,image,price,number){
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.number = number;
    }
    var commodity1 = [
        new ShopDetail(1,"盖百霖遮盖液第四代（标注装）","img/recommend2.jpg","45.21"),
        new ShopDetail(2,"仙灵骨葆片（薄膜衣）0.3g*100s","img/recommend4.jpg","45.21"),
        new ShopDetail(3,"三勒浆抗疲劳液30ml*5支","img/recommend3.jpg","45.21"),
        new ShopDetail(4,"扶他林 双氯芬酸钠肠溶片","img/detail1.png","260.00"),
        new ShopDetail(5,"盖百霖遮盖液第四代（标注装）","img/recommend2.jpg","45.21"),
        new ShopDetail(6,"仙灵骨葆片（薄膜衣）0.3g*100s","img/recommend4.jpg","45.21"),
        new ShopDetail(7,"三勒浆抗疲劳液30ml*5支","img/recommend3.jpg","45.21"),
        new ShopDetail(8,"扶他林 双氯芬酸钠肠溶片","img/detail1.png","260.00")
    ];
    var shoppingShow = "";
    for(var detail of commodity1){
        for(var i = 0;i < orderList.length;i ++){
            if(detail["id"] == orderList[i].id){
                shoppingShow += "<tr class=\"product1\" id='product"+orderList[i].id+"'>\n" +
                    "<td class=\"special1\"><img src='"+detail["image"]+"' alt=\"\"></td>\n" +
                    "<td class=\"special3\">\n" +
                    "<p>"+detail["name"]+"</p>\n" +
                    "</td>\n" +
                    "<td class=\"special2\">"+detail["price"]+"</td>\n" +
                    "<td class=\"special4\"><span id=\"proNum\">"+orderList[i].number+"</span></td>\n" +
                    " <td class=\"special5\">"+orderList[i].total+"</td>\n" +
                    "</tr>"
                document.getElementById("shoppingClink").innerHTML = shoppingShow;
            }
        }
    }
};
var totalPrice = 0;
var totalInput = document.getElementById("total");
function account() {
    for (var i = 0; i < orderList.length; i++) {
        totalPrice = parseInt(totalPrice) + parseInt(orderList[i].total);
    }
    if (totalInput.innerHTML == "") {
        totalInput.innerHTML = totalPrice.toFixed(2);
    }
    var conf = confirm("总价是：" + totalPrice + "\n请支付！");
    if (conf) {
        alert("支付成功！货物会尽快到您的手上！");
    }
}