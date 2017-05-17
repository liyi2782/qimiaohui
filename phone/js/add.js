//加载分类
(function(){
    $.get("http://192.168.99.126:8003/type/list_app",function(res){
        $("#load_type").empty();
        console.log(res);
        var a = JSON.parse(res);//将字符串res解析成json格式
        var b = a.data;         //定义变量
        if(a.success){          //判断
            console.log(b);     //打印a的data内容
            for(i=0;i<b.length;i++){//根据下标循环输出
                console.log(b[i]);//打印data中的内容
                console.log(b[i].id);//打印data的id
                console.log(b[i].typename);
                $("#load_type").append('<option value ="'+b[i].id+'">'+ b[i].typename + '</option>');
            }
        }
    });
})();
function onChangeSelect(){
    select_num=document.getElementById("load_type").value;//获取点击分类的id
    console.log(select_num);//打印点击分类的id
}
var img_length = 1;//图片最大1MB
var img_maxcount = 3;//最多选中图片张数
var up_imgcount = 0;//上传图片张数记录
var img_arr;
$("#div_imgfile").click(function () {//打开文件选择对话框
    if ($(".lookimg").length >= img_maxcount) {
        alert("一次最多上传" + img_maxcount + "张图片");
        return;
    }
    var cre_file = document.createElement("input");
    if ($(".imgfile").length <= $(".lookimg").length) {//个数不足则新创建对象
        cre_file.setAttribute("type", "file");
        cre_file.setAttribute("class", "imgfile");
        cre_file.setAttribute("accept", ".png,.jpg,.jpeg");
        cre_file.setAttribute("num", up_imgcount);//记录此对象对应的编号
        $("#div_imgfile").after(cre_file);
    }else { //否则获取最后未使用对象
        cre_file = $(".imgfile").eq(0).get(0);
    }
    return $(cre_file).click();//打开对象选择框
});
//创建预览图，在动态创建的file元素onchange事件中处理
$(".imgfile").live("change", function () {
    if ($(this).val().length > 0) {//判断是否有选中图片
        //判断图片格式是否正确
        var format = $(this).val().substr($(this).val().length - 3, 3);
        if (format != "png" && format != "jpg" && format != "peg") {
            alert("文件格式不正确！！！");
            return;
        }
        //判断图片是否过大，当前设置1MB
        
        var file = this.files[0];//获取file文件对象
        size=file.size;
        if (file.size > (img_length * 1024 * 1024)) {
            alert("图片大小不能超过" + img_length + "MB");
            $(this).val("");
            return;
        }
        
        //创建预览外层
        var prevdiv = document.createElement("div");
        prevdiv.setAttribute("class", "lookimg");
        //创建内层img对象
        var preview = document.createElement("img");
        $(prevdiv).append(preview);
        //创建删除按钮
        $("#div_imglook").append("<div class='delimg'>删除</div>");
        //记录此对象对应编号
        prevdiv.setAttribute("num", $(this).attr("num"));
        //对象注入界面
        $("#div_imglook").children("div:last").before(prevdiv);
        up_imgcount++;//编号增长防重复
        //预览功能 start
        var reader = new FileReader();//创建读取对象
        reader.onloadend = function () {
            preview.src = reader.result;//读取加载，将图片编码绑定到元素
        }
        if (file) {//如果对象正确
            reader.readAsDataURL(file);//获取图片编码
        } else {
            preview.src = "";//返回空值
        }
        //预览功能 end
    }
});

//删除图片
$(".delimg").live("click", function () {
    $(".lookimg").remove();//移除图片file
    $(".delimg").remove();//移除图片file
});

//确定上传按钮
$("#btn_ImgUpStart").click(function (){
    if ($(".lookimg").length <= 0) {
        alert("还未选择需要上传的图片");
        return;
    }
    //循环所有已存在的图片对象，准备上传
    for (var i = 0; i < $(".lookimg").length; i++) {
        var nowlook = $(".lookimg").eq(i);//当前操作的图片预览对象
        nowlook.index = i;
        //如果当前图片已经上传，则不再重复上传
        if (nowlook.attr("ISUP") == "1")
            continue;
        //上传图片准备
        var img_ind = nowlook.attr("num");//图片下标
        var name=$("#mwname").val();//图片名称
        var desc=$("#mw_des").val();//美物描述
        img_route = $(".imgfile[num=" + img_ind + "]").eq(0).val();//获取上传图片路径，为获取图片类型使用
        console.log(img_route);//打印上传图片路径
        var img_endfour = img_route.substr(img_route.length - 4, 4);//截取路径后四位，判断图片类型
        var img_fomate = "jpeg"; //图片类型
        if (img_endfour.trim() == ".jpg"){
            img_fomate = "jpg";
        }else if (img_endfour.trim() == ".png"){
            img_fomate = "png";
        }
        console.log(name);      //打印图片名称
        console.log(size);      //打印图片大小
        console.log(desc);      //打印图片描述
        console.log(img_fomate);//打印图片类型
        $.get("http://192.168.99.126:8003/qn/token/picture",function(data){
            console.log(data);
            var img_token = JSON.parse(data);
            console.log(img_token);
            token=img_token.token;
            key=img_token.key;
            putb64(img_route,img_token);

        });
        
        function putb64(base64, res) {
            var qi_token;
            qi_token = res.token;
            qi_key = res.key;
            var pic = base64.split(',')[1];
            var url = 'http://up.qiniu.com/putb64/-1/key/' + qi_key; // 上传的图片地址
            var xhr = new XMLHttpRequest();
            console.log(pic);
            console.log(url);
            console.log(xhr);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    var res = JSON.parse(xhr.responseText);
                    // callback(JSON.parse(xhr.responseText)); //回调返回的数据
                    //返回的图片地址
                    console.log('https://oq1hf74i0.bkt.clouddn.com/' + res.key)
                    img_arr=('https://oq1hf74i0.bkt.clouddn.com/' + res.key);
                    console.log(img_arr)
                    ajax_img();
                }
            }
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/octet-stream");
            xhr.setRequestHeader("Authorization", "UpToken " + qi_token);
            xhr.send(pic);
        };
function ajax_img(){
 $.ajax({//图片正式开始上传
            type: "POST",
            url: "http://192.168.99.126:8003/picture/add_picture",
            data:'name='+name+'&imgurl='+img_arr+'&size='+size+'&type='+select_num+'&path='+1+'&desc='+desc,
            dataType: "json",
            success: function (res) {
                if (!res.cuccess) {
                    console.log(res.data)
                }
                else {//图片上传成功回调
                    console.log("成功")
                }
            }
        });   
}
        
    }
});








appcan.button("#nav-left", "btn-act",function() {appcan.window.close(-1);});