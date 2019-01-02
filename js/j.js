function Error(error){
    this.error = error;
}
var newError = new Array();

$(".tipbox").hide();

//昵称
$("#username").blur(function(){
    var username = document.getElementById("username").value;
    var userError = document.getElementById("userError").innerHTML;
    if(username != ""){
        if(username.length < 4 || username.length > 16) {
            $("#userError").show().html("昵称长度不符合规范(3-6位)，请重输！");
            newError.push(new Error(userError));
        }
    }else {
        $("#userError").show().html("用户名不能为空！");
        newError.push(new Error(userError));
    }
    $(this).focus(function(){
        $("#userError").hide();
        $("#tipBox").hide();
    })
});

//密码
$("#password").blur(function(){
    password = document.getElementById("password").value;
    var passError = document.getElementById("passError").innerHTML;
    var passPatt = /^[a-zA-Z]\w{5,17}$/;
    if(!passPatt.test(password)){
        $("#passError").show().html("密码格式不对，请重输！");
        newError.push(new Error(passError));
    }else
        $("#passError").html("");
    $(this).focus(function(){
        $("#passError").hide();
    })
});

//再次确认密码
$("#secPass").blur(function(){
    var secPass = document.getElementById("secPass").value;
    var secError = document.getElementById("secError").innerHTML;
    if(secPass != password){
        $("#secError").show().html("两次密码输入不一致，请重输！");
        $("#secPass").html("");
        newError.push(new Error(secError));
    }else
        $("#secError").html("");
    $(this).focus(function(){
        $("#secError").hide();
    })
});

//手机
$("#telephone").blur(function(){
    var telephone = document.getElementById("telephone").value;
    var phoneError = document.getElementById("phoneError").innerHTML;
    var phonePatt = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if(!phonePatt.test(telephone)){
        $("#phoneError").show().html("手机格式不正确！");
        newError.push(new Error(phoneError));
    }
    else
        $("#phoneError").html("");
    $(this).focus(function(){
        $("#phoneError").hide();
    })
});

//邮箱
$("#email").blur(function(){
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError").innerHTML;
    var emailPatt = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if(!emailPatt.test(email)){
        $("#emailError").show().html("邮箱格式不正确!");
        newError.push(new Error(emailError));
    }else
        $("#emailError").html("");
    $(this).focus(function(){
        $("#emailError").hide();
    })
});

//qq
$("#qq").blur(function(){
    var qq = document.getElementById("qq").value;
    var qqError = document.getElementById("qqError").innerHTML;
    var qqPatt = /^[1-9][0-9]{4,10}$/;
    if(!qqPatt.test(qq)){
        $("#qqError").show().html("qq格式不正确!");
        newError.push(new Error(qqError));
    }else
        $("#qqError").html("");
    $(this).focus(function(){
        $("#qqError").hide();
    })
});

function check(){
    if(newError != null){
        window.location.reload();
    }
}