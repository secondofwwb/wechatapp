// var postsData = require('../../data/data.js')
var appInstance = getApp()
Page({
  data: {

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var contentid = options.id;   //获取传递过来的id
    var is_rec = options.recimfor;
    this.data.curcontentid = contentid;
    this.getcontentdetail(contentid,is_rec);
    var sw_collected = wx.getStorageSync('sw_collection');
    if (sw_collected) {
      var be_collected = sw_collected[contentid];
      this.setData({
        switch_collection: be_collected
      })
    }
    else {
      var sw_collected = {};
      sw_collected[contentid] = false;
      wx.setStorageSync('sw_collection', sw_collected);
    }
  },

  getcontentdetail: function (contentid, is_rec) {
    var that = this;
    wx.request({
      url: 'https://192.168.142.128/api/content/' + contentid + '/contentbyid/',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Authorization': 'Token ' + appInstance.globalData.servertoken,
      }, // 设置请求的 header
      success: function (res) {
        that.setData({ content_key: res.data });
      }
    })
  },
  oncollection: function (event) {
    var sw_collected = wx.getStorageSync('sw_collection');
    var be_collected = sw_collected[this.data.curcontentid];
    be_collected = !be_collected;
    sw_collected[this.data.curcontentid] = be_collected;
    wx.setStorageSync('sw_collection', sw_collected);
    this.setData({
      switch_collection: be_collected
    });

    wx.showToast({
      title: be_collected ? "收藏成功" : "取消收藏"
    })
  },
  onshare: function (event) {
    wx.showActionSheet({
      itemList: [
        "分享给微信好友",
        "分享到朋友圈",
        "分享到到QQ",
      ],
      success: function (res) {
        //功能待实现
      },
    })
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})