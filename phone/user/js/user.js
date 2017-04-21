(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {});
    appcan.button("#nav-right", "btn-act",
    function() {});
    appcan.button(".nav-btn", "btn-act", function() {
            //appcan.window.close(-1);
        })
    appcan.ready(function() {
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent").trigger("more", this);
        }).hide();
    })

    // var tabview_Tab = appcan.tab({
        // selector: $("#Tab"),
        // hasIcon: true,
        // hasAnim: false,
        // hasLabel: true,
        // hasBadge: false,
        // index: 0,
        // data : [{
            // label : "首页",
            // icon : "fa-home",
            // badge:'1',
            // url:"my.html"
        // }, {
            // label : "搜索",
            // icon : "fa-search"
        // }, {
            // label : "发布",
            // icon : "fa-edit"
        // }, {
            // label : "我的",
            // icon : "fa-user"
        // }, {
            // label : "功能",
            // icon : "fa-th-large"
        // }]
    // });

    
	appcan.ready(function() {
        })
        // var lv1 = appcan.listview({
            // selector : "#listview1",
            // type : "thickLine",
            // hasIcon : true,
            // hasAngle : true,
            // hasSubTitle : false,
            // multiLine : 1
        // });
        // lv1.set([{
            // icon : 'user/css/myImg/myImg6.png',
            // title : '<div class="ub"><div class="umar-ar3">用户名</div><div class="sc-bg-alert uc-a1 uinn3 ulev-2 bc-text-head">V<span class="ulev-2">2</span>会员</div></div>',
            // describe : '帐号：admin'
        // }]);
        var lv1 = appcan.listview({
            selector : "#listview1",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            hasSubTitle : true,
            multiLine : 1
        });
        lv1.set([{
            icon : 'user/css/myImg/myImg1.png',
            title : '新美物--此时的杏花',
            subTitle : '由<span style="color:#FF7E68">磊土</span>推荐'
        }, {
            icon : 'user/css/myImg/myImg1.png',
            title : '新美物--此时的杏花',
            subTitle : '由<span style="color:#FF7E68">磊土</span>推荐'
        }, {
            icon : 'user/css/myImg/myImg1.png',
            title : '新美物--此时的杏花',
            subTitle : '由<span style="color:#FF7E68">磊土</span>推荐'
        },{
            icon : '',
            title : '<strong>查看更多通知</strong>',
            subTitle : ''
        }]);
        var lv2 = appcan.listview({
            selector : "#listview2",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv2.set([{
            icon : '',
            // title : '<div class="ub">表情包<div class=" uwh-FP2 uc-a-FP1 sc-bg-alert bc-text-head ulev-4 ufm1 ub ub-ac ub-pc">NEW</div></div>'    
            title:'<strong>排行榜</strong>'
        }]);
        var lv3 = appcan.listview({
            selector : "#listview3",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv3.set([
            {
            icon : '',
            title : '<strong>发现好友</strong>',
            subTitle : ''
        },{
            icon : '',
            title : '在奇妙滙发现好友'
        },{
            icon : '',
            title : '邀请好友',
            subTitle : ''
        },{
            icon : '',
            title : '邀请好友二维码',
            subTitle : ''
        }]);
        var lv4 = appcan.listview({
            selector : "#listview4",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv4.set([{
            icon : '',
            title:'<strong>账号</strong>'
        },{
            icon : '',
            title : '编辑我的资料',
            subTitle : ''
        },{
            icon : '',
            title : '我的支付信息',
            subTitle : ''
        }]);
        var lv5 = appcan.listview({
            selector : "#listview5",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv5.set([{
            icon : '',
            title:'<strong>通知设定</strong>'
        },{
            icon : '',
            title : '应用内通知',
            subTitle : ''
        },{
            icon : '',
            title : '邮件通知',
            subTitle : ''
        }]);
        var lv6 = appcan.listview({
            selector : "#listview6",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv6.set([{
            icon : '',
            title:'<strong>密码</strong>'
        },{
            icon : '',
            title : '变更密码',
            subTitle : ''
        },{
            icon : '',
            title : '重设密码',
            subTitle : ''
        }]);
        var lv7 = appcan.listview({
            selector : "#listview7",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv7.set([{
            icon : '',
            title:'<strong>建议/意见反馈</strong>'
        },{
            icon : '',
            title : '用户信息保护条例',
            subTitle : ''
        },{
            icon : '',
            title : '联系我们',
            subTitle : ''
        }]);
        var lv8 = appcan.listview({
            selector : "#listview8",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv8.set([{
            icon : '',
            title:'<strong>清空图片缓存</strong>'
        }]);
        var lv9 = appcan.listview({
            selector : "#listview9",
            type : "thinLine",
            hasIcon : true,
            hasAngle : true,
            multiLine : 1
        });
        lv9.set([{
            icon : '',
            title:'<strong>登录</strong>'
        }]);
})($);