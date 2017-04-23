// var postsData = require('../../data/data.js')


Page({
    data: {

    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        var titlename = options.iconname;
        var dataid = options.typeid;
        this.getdata(dataid,titlename);

    },
    getdata: function (dataid,titlename) {
        var that = this;
        wx.request({
            url: 'http://192.168.142.128:8000/api/content/',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                "content-Type": "json"
            }, // 设置请求的 header
            success: function (res) {
                console.log(res)
                that.setpostdata(res.data,dataid,titlename)
            },
            fail: function () {
                console.log("fail")
            }
        })
    },
    setpostdata: function (postsData,dataid,titlename) {
        var contentdata = new Array();
        for (var i = 0; i < postsData.length; i++) {
            if (postsData[i].contenttypeid == dataid) {
                contentdata.push(postsData[i])
            }
        };
        this.setData({ content_key: contentdata });
        this.setData({ title_key: titlename });
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    },
    onContentid: function (event) {
        var contentid = event.currentTarget.dataset.contentid;
        wx.navigateTo({
            url: "/pages/contentdetail/contentdetail?id=" + contentid
        })
    }
})