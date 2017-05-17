

function SetCode() {//获取验证码
    var mobile=$("#phone").val();
    var code=$("#code").val();
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
    // console.log(mobile,code);
    if(mobile.length==0){ 
        alert('请输入手机号码！'); 
        return ; 
    }else if(mobile.length!=11){ 
        alert('请输入有效的手机号码！'); 
        return ; 
    }else if(!myreg.test(mobile)){ 
        alert('请输入有效的手机号码！'); 
        return ; 
    }else{
        $.ajax({//一个ajax
            type:"POST",//以post方式与后台沟通
            url:"http://192.168.99.126:8003/users/get_code",//与此页沟通
            dataType:"json",//返回的值以json方式解释
            data:'mobile='+mobile+'&code_type='+'register',//发送数据，分别是u、p
            success:function(res){//如果调用成功
                console.log(res);
                if (!res.success) {
                    console.log(res.data);
                } else{
                    console.log("1111");
                    getnum();
                }; 
            }
        })
    };

}
var count=60;
function getnum(){//60秒重发倒计时
    console.log('5555')
    $("#btnSendCode").attr("a");
    $("#btnSendCode").val(count+"秒");
    count--;
    if (count>0) {
        setTimeout(getnum,1000);
    } else{
        $("#btnSendCode").val("获取验证码");
        $("#btnSendCode").attr("a");
        count=60;
    };
}
function len(s) {//长度判断
var l = 0;//若为汉字之类的字符则占两个。
var a = s.split("");
for (var i=0;i<a.length;i++) {
 if (a[i].charCodeAt(0)<299) {
 l++;
 } else {
 l+=2;
 }
}
return l;
}

function register(){//函数login();
  console.log("register");
  var username=$("#name").val();//取框中的用户名
  var password=$("#pass").val();//取框中的密码
  var twopass=$("#repass").val();//取框中二次密码
  var mobile=$("#phone").val();//取框中的手机号
  var code=$("#code").val();//取框中的用户名
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
  // console.log(username,mobile,code,password,comf_password);
  if (!username) {
      alert("请填写用户名")
      return;
  }else if(len(username)<4){
      alert("用户名不能小于4位")
      return;
  }else if(!mobile){
      alert("请填写手机号")
      return;
  }else if(mobile.length!=11){ 
      alert('请输入有效的手机号码！'); 
      return; 
  }else if(!myreg.test(mobile)){ 
      alert('请输入有效的手机号码！'); 
      return; 
  }else if(!password){
      alert("请填写密码")
      return;
  }else if(password.length<8){
      alert("长度要求8-16个字符")
      return;
  }else if(password.length>16){
      alert("长度要求8-16个字符")
      return;
  }else if(!twopass){
      alert("请填写确认密码")
      return;
  }else if(password!==twopass){
      alert("两次密码输入不同")
      return;
  }else if(!code){
      alert("验证码为空")
      return;
  }else{
      $.ajax({//一个ajax
          type:"POST",//以post方式与后台沟通
          url:"http://192.168.99.126:8003/users/add_user",//与此页沟通
          dataType:"json",//返回的值以json方式解释
          data:'username='+username+'&mobile='+mobile+'&password='+password+'&comf_password='+twopass+'&code='+code,//发送数据，分别是u、p
          success:function(msg){//如果调用成功
             console.log(msg);
             if (!msg.success) {
                console.log("验证成功");
                appcan.window.open('to_login','login.html',2);
             } else{
                console.log(msg.data);
             }; 
          }
      })      
  };
  
}