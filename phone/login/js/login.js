//登录
function login(){//函数login();
  console.log("login");
  var mobile=$("#phone").val();//取框中的用户名
  var password=$("#pass").val();//取框中的密码
  $.ajax({//一个ajax
      type:"POST",//以post方式与后台沟通
      url:"http://192.168.99.126:8003/users/log_in",//与此页沟通
      dataType:"json",//返回的值以json方式解释
      data:'mobile='+mobile+'&password='+password,//发送数据，分别是u、p
      success:function(res){//如果调用成功
          console.log(res);
          console.log(res.info.access_token);
          if (!res.success) {
              console.log("登录失败");
          } else{
              console.log(res.data);
              var token=res.info.access_token;
              alert(token);
              localStorage.c_token = token;
          }; 
          
      }
  })
}