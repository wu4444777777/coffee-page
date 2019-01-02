var add=document.getElementById("addCount");
var del=document.getElementById("minusCount");
var val=document.getElementsByClassName("noclick")[0];
var value=val.value;
add.onclick=function(){
    addn();
}

del.onclick=function(){
    deln();
}

function addn(){//你可以给另一个按钮绑定加法事件，直接调用就可以实现
    value++;
    val.innerHTML=value;
}
function deln(){//你可以给另一个按钮绑定减法法事件，直接调用就可以实现
    if(value!=0){
        value--;
        val.innerHTML=value;
    }else{
        val.innerHTML=0;
    }
}

var addList = new Array();
var id = 4;
var image = document.getElementById("imgSrc").attributes[1].nodeValue;
var name = document.getElementById("proName").innerHTML;
var number = document.getElementById("count").innerHTML;
console.log(number);
var total = parseFloat(document.getElementById("realPrice").innerHTML.substring(1))*parseInt(number);
addList.push(new Add(id,name,image,total,number));
function Add(id,name,image,total,number){
    this.id = id;
    this.image = image;
    this.name = name;
    this.total = total;
    this.number = number;
}
function addCart(){
    var url = encodeURI(encodeURI("shoppingCart.html?order="+JSON.stringify(addList)));
    window.open(url);
}
function addOrder(){
    var url = encodeURI(encodeURI("order.html?order="+JSON.stringify(addList)));
    window.open(url);
}