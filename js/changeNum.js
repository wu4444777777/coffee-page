function changeNum(numId,flag){
    var tom=document.getElementById(numId);
    if(flag=='add'){
        tom.value++;
    }
    if(flag=='minus'){
        if (tom.value > 1) {
            tom.value=tom.value-1;
        }
    }
    getSubTotal(tom.parentNode.parentNode.parentNode.id);
    productCount();
}