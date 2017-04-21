(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {appcan.window.close(-1);});
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
            // badge:'1'
        // }, {
            // label : "好友",
            // icon : "fa-user"
        // }, {
            // label : "&nbsp;",
            // icon : ""
        // }, {
            // label : "搜索",
            // icon : "fa-search"
        // }, {
            // label : "更多",
            // icon : "fa-ellipsis-h"
        // }]
    // });

	
        var lv1 = appcan.listview({
            selector : "#listview1",
            type : "thinLine",
            hasIcon : false,
            hasAngle : false,
            hasControl : true,
        });
        lv1.set([{
            title : '<ul class="ub t-bla ub-ac ">' + '<li class="lis-icon-s ub ub-ac ub-pc">' + '<div class="ub-img setImg2 uwh-pS1"></div>' + '</li>' + '<li class="ub-f1 ut-s ulev-app1">允许按用户名搜索我</li>' + '</ul>',
            "switchBtn" : {
                value : false,
                mini : true
            }
        }, {
            title : '<ul class="ub t-bla ub-ac">' + '<li class="lis-icon-s ub ub-ac ub-pc">' + '<div class="ub-img setImg3 uwh-pS1"></div>' + '</li>' + '<li class="ub-f1 ut-s ulev-app1">新消息通知</li>' + '</ul>',
            "switchBtn" : {
                value : true,
                mini : true
            }
        }, {
            title : '<ul class="ub t-bla ub-ac">' + '<li class="lis-icon-s ub ub-ac ub-pc">' + '<div class="ub-img setImg4 uwh-pS1"></div>' + '</li>' + '<li class="ub-f1 ut-s ulev-app1">定位</li>' + '</ul>',
            "switchBtn" : {
                value : false,
                mini : true
            }
        }]);

        lv1.on("switch:change", function(ele, obj) {
            //  lv1.updateItem(ele,"title","Switch:"+obj.switchBtn.value);
        })
	var lv2 = appcan.listview({
            selector : "#listview2",
            type : "thinLine",
            hasIcon : false,
            hasAngle : false,
            hasControl : true,
        });
        lv2.set([{
            title : '<ul class="ub t-bla ub-ac">' + '<li class="lis-icon-s ub ub-ac ub-pc">' + '<div class="ub-img setImg6 uwh-pS1"></div>' + '</li>' + '<li class="ub-f1 ut-s ulev-app1">关于</li>' + '</ul>',
            "switchBtn" : {
                value : true,
                mini : true
            }
        }]);

        lv2.on("switch:change", function(ele, obj) {
            //  lv1.updateItem(ele,"title","Switch:"+obj.switchBtn.value);
        })
})($);