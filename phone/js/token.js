//token
(function(){ 
    var q_token = localStorage.c_token;
    console.log(q_token);
    $.ajaxSetup({　
        timeout: 3000,
        dataType: 'html',
        success:function(data){
            console.log(data); 
        },
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization','Bearer '+q_token);
        },
　　})
})();
