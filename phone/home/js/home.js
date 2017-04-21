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
    // var tabview = appcan.tab({
        // selector : "#tabview",
        // hasIcon : false,
        // hasAnim : true,
        // hasLabel : true,
        // hasBadge : false,
        // data : [{
            // label : '旅行',
//             
        // }, {
            // label : '美物',
        // }, {
            // label : '专栏',
        // }]
    // });
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
            // label : "搜索",
            // icon : "fa-search"
        // }, {
            // label : "分类",
            // icon : "fa-list",
        // }, {
            // label : "我的",
            // icon : "fa-user"
        // }, {
            // label : "功能",
            // icon : "fa-th-large"
        // }]
    // });

	function read(e) {
        if (isPhone && e.type == 'click')
            return;
        openNewWin('', '');
    }
/*mvvm*/
var Service = new MVVM.Service({
    pretreatment: function(data, option) {
        return data;
    },
    dosuccess: function(data, option) {
        return data;
    },
    doerror: function(e, err, option) {
        return err;
    },
    validate: function(data, option) {
        return 0;
    },
    ajaxCall: function(data, option) {
        var self = this;
        var data = [{
            "bookImg" : "\'home/css/myImg/book1.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/book2.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/book3.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/book4.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/book5.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/book6.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/book7.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/book8.png\'",
        }, {
            "bookImg" : "\'home/css/myImg/bookAdd.png\'",
        }];
        option.success(self.dosuccess(data, option));
        /*appcan.request.ajax({
                url: "",
                type: "GET",
                data: this.pretreatment(data, option),
                dataType: "",
                contentType: "application/x-www-form-urlencoded",
                success: function(data) {
                    var res = self.validate(data, option);
                    if (!res) option.success(self.dosuccess(data, option));
                    else option.error(self.doerror(data, res, option));
                },
                error: function(e, err) {
                    option.error(self.doerror(e, err, option));
                }
            });*/
    }
});
var Model_Collection = MVVM.Model.extend({
    defaults: {},
    computeds: {  
    },
    sync: function(method, model, options) {
        switch (method) {
        case "create":

            break;
        case "update":

            break;
        case "patch":

            break;
        case "delete":

            break;
        default:
            break;
        }
    }
})
var Collection = new(MVVM.Collection.extend({
    initialize: function() {
        return;
    },
    parse: function(data) {
        return data;
    },
    model: Model_Collection,
    sync: function(method, collection, options) {
        switch (method) {
        case "read":
            Service.request({}, options);
            break;
        default:
            break;
        }
    }
}))();
var ViewModel = new(MVVM.ViewModel.extend({
    el: "#bookList",
    initialize: function() {
        this.collection.fetch({})
        return;
    },
    collection: Collection

}))();

})($);