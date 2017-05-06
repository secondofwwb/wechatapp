// var postsData = require('../../data/data.js')

Page({
    data: {

    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        this.getrec();
        this.geticons();
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    },

    getrec: function (event) {
        var that = this;
        wx.request({
            url: 'http://192.168.142.128:8000/api/content/REC/recimfor/',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: { "content-Type": "json" }, // 设置请求的 header
            success: function (res) {
                that.setData({ rec_key: res.data });
            },
        })
    },

    geticons: function (event) {
        var that = this;
        wx.request({
            url: 'http://192.168.142.128:8000/api/icon/',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: { "content-Type": "json" }, // 设置请求的 header
            success: function (res) {
                 that.setData({ icons_key: res.data });
            },
        })
    },

    bannertap: function (event) {
        var contentid = event.currentTarget.dataset.contentid;
        wx.navigateTo({
            url: "/pages/contentdetail/contentdetail?id=" + contentid
        });
    },
    onTap: function (event) {
        var labelid = event.currentTarget.dataset.labelid;
        var icon_name = event.currentTarget.dataset.iconname;
        wx.navigateTo({
            url: "/pages/contentlist/contentlist?typeid=" + labelid + "&iconname=" + icon_name
        });
    },
    recTap: function (event) {
        var contentid = event.currentTarget.dataset.contentid;
        var recimfor = event.currentTarget.dataset.recimfor;
        wx.navigateTo({
            url: "/pages/contentdetail/contentdetail?id=" + contentid + "&recimfor=" + recimfor
        });
    }
})