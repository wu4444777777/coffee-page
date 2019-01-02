$(function () {
    var switcher = document.getElementById("s-choose");
    var forms = document.getElementById("forms");

    //获取选项卡（点击切换）
    var switchContent = switcher.getElementsByTagName("a");
    //获取选项卡的内容（要切换的内容）
    var formsContent = forms.getElementsByTagName("form");
    for(var i=0 ; i<switchContent.length ; i++) {
        //定义index变量，以便让tab按钮和tab内容相互对应
        switchContent[i].index = i;
        //移除全部tab样式和tab内容
        switchContent[i].onclick = function () {
            for (var i = 0; i < switchContent.length; i++) {
                switchContent[i].className="";
                formsContent[i].style.display = "none";
            }
            //为当前tab添加样式
            this.className = "active";
            //显示当前tab对应的内容
            formsContent[this.index].style.display="block";
        }
    }
});


function check() {
    Username = document.getElementById("username").value;
    Password = document.getElementById("password").value;
    PasswordConfirm = document.getElementById("passwordConfirm").value;
    Cellphone = document.getElementById("cellphone").value;
    Btn0 = document.getElementById("btn");
    Btn = document.getElementById("span");
    Btn1 = document.getElementById("btn-mm");
    Btn2 = document.getElementById("btn-cc");
    var patt1 =  /^(?![+$)(?![a-zA-Z]+$)[A-Za-z_][A-Za-z_0-9]{0,}$/;
    var patt2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{0,12}$/;
    var patt3 = /^(13[0-9]|17[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|16[4]|18[0-9])\d{8}$/;
    if(Username == "" && Password == "") {
        Btn.innerHTML = "必填";
        Btn0.innerHTML = "必填";
    }else if(!patt1.test(Username) || !patt2.test(Password)) {
            alert("用户名和密码不符合规范，请重新输入");

    }else if(PasswordConfirm != Password){
            Btn1.innerHTML = "请两次密码输入一致";

    }else if(!patt3.test(Cellphone)){
            Btn2.innerHTML = "手机号码格式错误";

    } else{
        window.location.href="medicalIndex.html";
    }
    document.getElementById("username").value= '';
    document.getElementById("password").value= '';
    document.getElementById("passwordConfirm").value = '';
    document.getElementById("cellphone").value = '';
}
function check1() {
    Username = document.getElementById("username1").value;
    Password = document.getElementById("password1").value;
    PasswordConfirm = document.getElementById("passwordConfirm1").value;
    Cellphone = document.getElementById("cellphone1").value;
    Btn0 = document.getElementById("btn1");
    Btn = document.getElementById("span1");
    Btn1 = document.getElementById("btn-mm1");
    Btn2 = document.getElementById("btn-cc1");
    var patt1 =  /^(?![+$)(?![a-zA-Z]+$)[A-Za-z_][A-Za-z_0-9]{0,}$/;
    var patt2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{0,12}$/;
    var patt3 = /^(13[0-9]|17[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|16[4]|18[0-9])\d{8}$/;
    if(Username == "" && Password == "") {
        Btn.innerHTML = "必填";
        Btn0.innerHTML = "必填";
    }else if(!patt1.test(Username) || !patt2.test(Password)) {
        alert("用户名和密码不符合规范，请重新输入");

    }else if(PasswordConfirm != Password){
        Btn1.innerHTML = "请两次密码输入一致";

    }else if(!patt3.test(Cellphone)){
        Btn2.innerHTML = "手机号码格式错误";

    } else{
        window.location.href="medicalIndex.html";
    }
    document.getElementById("username1").value= '';
    document.getElementById("password1").value= '';
    document.getElementById("passwordConfirm1").value = '';
    document.getElementById("cellphone1").value = '';
}

