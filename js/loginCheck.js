function check(){
    username = document.getElementById("user").value;
    password = document.getElementById("pass").value;
    btn = document.getElementById("btn");
    tipUser = document.getElementById("code-msg");
    tipPass = document.getElementById("pwd-msg");
    tipBtn = document.getElementById("btn-msg");
    var patt1 =  /^(?![+$)(?![a-zA-Z]+$)[A-Za-z_][A-Za-z_0-9]{0,}$/;
    var patt2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{0,12}$/;
    if(username == "" && password ==""){
        tipUser.innerHTML = "用户名不能为空！";
        tipPass.innerHTML = "密码不能为空！";
        tipUser.style.display = "block";
        tipPass.style.display = "block";
    }else if(!patt1.test(username) || !patt2.test(password)){
        tipBtn.innerHTML = "用户名和密码不符合规范，请重新输入！";
        tipBtn.style.display = "block";
    }else if(username == "_admin1237" && password == "123456admin"){
        window.location.href = "news.html";
    }else{
        tipBtn.innerHTML = "登陆失败，请重新登陆！";
    }
    document.getElementById("user").value = '';
    document.getElementById("pass").value = '';
    document.getElementById("user").focus();
}
btn.addEventListener("mouseover", function(){
    tipUser.style.display = "none";
    tipPass.style.display = "none";
    tipBtn.style.display = "none";
},true);