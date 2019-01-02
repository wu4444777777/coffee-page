window.onload = function() {
    var searchUrl = JSON.parse(JSON.stringify(decodeURI(decodeURI(window.location.search.substring(1,window.location.search.length)))));
    var buy = searchUrl.split("=");
    var buyList = buy[1];
    var buy2 = JSON.parse(buyList);


    function ShopDetail(id, name, image, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
    }

    var commodity1 = [
        new ShopDetail(1, "盖百霖遮盖液第四代（标注装）", "img/recommend2.jpg", "45.21"),
        new ShopDetail(2, "仙灵骨葆片（薄膜衣）0.3g*100s", "img/recommend4.jpg", "45.21"),
        new ShopDetail(3, "三勒浆抗疲劳液30ml*5支", "img/recommend3.jpg", "45.21"),
        new ShopDetail(4, "扶他林 双氯芬酸钠肠溶片", "img/detail1.png", "260.00"),
        new ShopDetail(5, "盖百霖遮盖液第四代（标注装）", "img/recommend3.jpg", "45.21"),
        new ShopDetail(6, "仙灵骨葆片（薄膜衣）0.3g*100s", "img/recommend4.jpg", "45.21"),
        new ShopDetail(7, "三勒浆抗疲劳液30ml*5支", "img/recommend3.jpg", "45.21"),
        new ShopDetail(8, "扶他林 双氯芬酸钠肠溶片", "img/detail1.png", "260.00"),
    ];
    var shoppingShow = "";
    for (var detail of commodity1) {
        for (var i = 0; i < buy2.length; i++) {
            if (detail["id"] == buy2[i].id) {
                shoppingShow +=
                    "<tr class=\"product1\" id='product" + buy2[i].id + "'>" +
                    "<td class=\"special5\">" +
                    "<input id='ipt"+buy2[i].id+"' name=\"cartCheckBox\" onclick=\"selectSingle('num_" + detail["id"] + "')\" type=\"checkbox\">" +
                    "</td>\n" +
                    "<td class=\"special1\">" +
                    "<img src='" + detail["image"] + "' alt=\"\">" +
                    "</td>\n" +
                    "<td class=\"special3\">\n" +
                    "<a href='detail.html'>" + detail["name"] + "</a>\n" +
                    "</td>\n" +
                    "<td class=\"special2\">" + detail["price"] + "</td>\n" +
                    "<td class=\"special4\">\n" +
                    "<div class=\"addSub\">\n" +
                    "<button class=\"hand\" onclick=\"changeNum('num_" + buy2[i].id + "','minus')\">-</button>\n" +
                    "<input name='inpt' type=\"text\" value='" + buy2[i].number+"' id='num_"+ buy2[i].id +"' onblur=\"getSubTotal('product" + buy2[i].id + "')\">\n" +
                    "<button class=\"hand\" onclick=\"changeNum('num_" + buy2[i].id + "','add')\">+</button>\n" +
                    "</div>\n" +
                    "</td>" +
                    "<td class=\"special7\" id='total"+buy2[i].id+"'>"+detail["price"]+"</td>\n" +
                    "<td class=\"special6\">\n" +
                    "<a href=\"javascript:\" onclick=\"deleteRow(" + buy2[i].id + ");\"><img src=\"img/delete.svg\" alt=\"\">删除</a>\n" +
                    "</td>" +
                    "</tr>"
                document.getElementById("shoppingContent").innerHTML = shoppingShow;
            }
        }
    }
};
var newBuyList = new Array();


function SelectDetail(id,number,total) {
    this.id = id;
    this.number = number;
    this.total = total;
}
function skip(){
    var checkInputs = document.getElementsByName("cartCheckBox");
    for(var i = 0;i< checkInputs.length;i ++){
        if(checkInputs[i].checked){
            var getId = checkInputs[i].id.substring(3);
            var getNum = document.getElementById("num_"+getId).value;
            var getTotal = document.getElementById("total"+getId).innerHTML;
            newBuyList.push(new SelectDetail(getId,getNum,getTotal));
        }
    }
    var url = encodeURI(encodeURI("order.html?order="+JSON.stringify(newBuyList)));
    window.open(url);
}