function changeNum(numId,flag){
    var tom = document.getElementById(numId);
    if(flag == 'add'){
        tom.value++;
    }
    if(flag == 'minus'){
        if(tom.value > 1){
            tom.value = tom.value-1;
        }
    }
}
function MyDetail(id,name,image,price){
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
}
var shopping = [
    new MyDetail(1,"九康快速心电检测仪 心电仪PC-80B","img/recommend4.jpg","45.00"),
    new MyDetail(2,"盖百霖遮盖液第四代（标注装）","img/recommend3.jpg","45.00"),
    new MyDetail(3,"仙灵骨葆片（薄膜衣）0.3g*100s","img/recommend2.jpg","45.00"),
    new MyDetail(4,"三勒浆抗疲劳液30ml*5支","img/recommend4.jpg","45.00")
];
var shoppingShow = "";
for(var detail of shopping){
    shoppingShow +=(" <tr class=\"product1\" id='product"+detail["id"]+" '>\n" +
                   " <td class=\"special1\">" +
                   " <image src='"+detail["image"]+"'alt=\"\">"+
                   " </td>\n" +
                   " <td class=\"special3\">\n" +
                   " <p>"+detail["name"]+"</p>\n" +
                   " </td>\n" +
                   " <td class=\"special2\"><p>"+detail["price"]+"</p></td>\n" +
                   " <td class=\"special4\">\n" +
                   " <div class=\"addSub\">\n" +
                   " <button onclick=\"changeNum('num_"+detail["id"]+"','minus')\">-</button>\n" +
                   " <input type=\"text\" value=\"1\" id=\"num_"+detail["id"]+"\">\n" +
                   " <button onclick=\"changeNum('num_"+detail["id"]+"','add')\">+</button>\n" +
                   " </div>\n" +
                   " </td>\n" +
                   " <td class=\"special2\">45.00</td>\n" +
                   " </tr>")
}
document.getElementById("shoppingClink").innerHTML += shoppingShow;