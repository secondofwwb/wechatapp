var postsData = require('../../data/data.js')

Page({
    data: {

    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        this.setData({ rec_key: postsData.postreccontent});
        this.setData({ icons_key: postsData.posticons });
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    },
    bannertap:function(event){
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
        wx.navigateTo({
            url: "/pages/contentdetail/contentdetail?id=" + contentid
        });
    }
})