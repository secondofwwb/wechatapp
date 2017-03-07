var postsData = require('../../data/data.js')

Page({
    data: {

    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        this.setData({rec_key:postsData.postcons});
        this.setData({icons_key:postsData.posticons});
        this.setData({banners_key:postsData.posbanners});
},
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    },
    onTap:function(){
      wx.navigateTo({
        url: "/pages/contentlist/contentlist"
      });
    }
})