(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {appcan.window.close(-1);});
    appcan.button("#nav-right", "btn-act",
    function() {});
    appcan.button(".nav-btn", function() {
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

	// appcan.ready(function() {
        // });
        // var lv = appcan.listview({
            // selector : "#listview",
            // type : "thinLineTmp",
            // hasIcon : false,
            // hasAngle : true,
            // hasSubTitle : true
        // });
        // lv.set([{
            // title : "区域",
            // subTitle : "不限"
        // }, {
            // title : "区域",
            // subTitle : "不限"
        // }, {
            // title : "区域",
            // subTitle : "不限"
        // }, {
            // title : "区域",
            // subTitle : "不限"
        // }]);
        // lv.on('click', function(ele, context, obj, subobj) {
            // //appcan.window.open(context.pagename,context.pageurl,10);
        // })
})($);