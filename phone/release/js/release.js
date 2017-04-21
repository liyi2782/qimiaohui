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

	
})($);