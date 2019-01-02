var proTotal = document.getElementById("proNum");

//小计
function getSubTotal(tr){
    tds=document.getElementById(tr);
    var price = parseFloat(tds.cells[3].innerHTML).toFixed(2);//获取价格
    var count = parseFloat(tds.cells[4].getElementsByTagName('input')[0].value);//获取数量
    var SubTotal = price * count;
    tds.cells[5].innerHTML = SubTotal.toFixed(2);//四舍五入
}
//商品总价
function productCount(){
    var checkAllInputs = document.getElementById('allCheckBox');
    var tableTr=document.getElementById("shopping").getElementsByTagName("tr");
    var total=0;      //所有商品的总计
    console.log(tableTr);
    if(tableTr.length==3){
        checkAllInputs.checked=false;
    }
    var checkInputs = document.getElementsByName("cartCheckBox");
    for(var i=0;i< checkInputs.length;i++){
        var price=0;     //每一行商品的单价
        var nums=0;    //每一行商品的数量

        if(checkInputs[i].checked) { //判断复选框是否被选中
            var c = checkInputs[i].parentNode.parentNode;
            price = c.childNodes[6].innerHTML;  //选中行商品的单价
            nums = c.childNodes[8].childNodes[1].childNodes[3].value; //选中行商品的数量()
            total += price*nums;//所有商品的总计的和 = 每一个商品的单价 x 数量   相加
            c.childNodes[9].innerHTML = (price*nums).toFixed(2);  //商品小计 =商品的单价 x 数量
        } else {
            total += 0;
        }
    }
    document.getElementById("total").innerHTML = total.toFixed(2);
}
window.location.onload = productCount; //onload函数，让页面加载后自动计算商品总额

/*复选框全选或全不选效果*/
function selectAll(){
    var checkInputs = document.getElementsByName("cartCheckBox");
    var checkAllInputs = document.getElementById('allCheckBox');
    var numIpt = document.getElementsByName("inpt");
    for(var i=0;i< checkInputs.length;i++){
        checkInputs[i].checked=checkAllInputs.checked;
        if(checkInputs[i].checked){
            proTotal.innerHTML = parseInt(proTotal.innerHTML) + parseInt(numIpt[i].value);
        }else if(checkInputs[i].unchecked){
            proTotal.innerHTML = 0;
        }
    }
}

/*根据单个复选框的选择情况确定全选复选框是否被选中*/
function selectSingle(numId){
    checkInputs = document.getElementsByName("cartCheckBox");
    var checkAllInputs = document.getElementById('allCheckBox');
    var proSelect = (document.getElementById(numId)).value;
    var count=0;
    for(var i=0;i< checkInputs.length;i++){
        if(checkInputs[i].checked) {
            count++;
        }
        if (count === checkInputs.length ) {//判断是否全选
            checkAllInputs.checked = true;
            selectAll();
        } else {
            checkAllInputs.checked=false;
        }
    }
    proTotal.innerHTML = parseInt(proTotal.innerHTML) + parseInt(proSelect);
    productCount();
}

/*删除单行商品*/
function deleteRow(id){
    var conf = confirm("确定删除吗？");
    if(conf){
        var t = document.getElementById("product"+id);
        var proSelect = document.getElementById("num_"+id).value;
        t.parentNode.removeChild(t);
        productCount();
        proTotal.innerHTML = parseInt(proTotal.innerHTML) - parseInt(proSelect);
    }
}

/*删除选中行的商品*/
function deleteSelectRow(){
    // var trList = document.getElementById();
    var conf2 = confirm("亲，确定好了吗，真的要删除吗？");
    var inp = document.getElementsByName("cartCheckBox");
    if(conf2){
        for(var i = 0;i <= inp.length-1;i ++){
            if(inp[i].checked){
                for(var j = 1;j <= 8;j ++){
                    var ipt = document.getElementById("ipt"+j);
                    if(ipt == inp[i]){
                        var proTr = document.getElementById("product"+j);
                        proTr.remove();
                        inp.checked = false;
                        productCount();
                    }
                }
            }else if(inp == null){
                return;
            }
        }
    }
}
