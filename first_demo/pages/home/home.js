// var postsData = require('../../data/data.js')
var appInstance = getApp()
Page({
  data: {
    count: 0,
    is_empty: true,
    rec_key: {},
    banner_key: {},
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
      url: 'https://192.168.142.128/api/content/REC/recimfor/?page=0',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Authorization': 'Token ' + appInstance.globalData.servertoken,
      }, // 设置请求的 header
      success: function (res) {
        that.setData({ rec_key: res.data });
        that.setData({ banner_key: res.data });
        that.setData({ count: 1 });
        that.setData({ is_empty: false });
      },
    })
  },

  geticons: function (event) {
    var that = this;
    wx.request({
      url: 'https://192.168.142.128/api/icon/',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'Authorization': 'Token ' + appInstance.globalData.servertoken, }, // 设置请求的 header
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
  },
  scrollupper: function (event) {
    var that = this;
    var reccon = this.data.rec_key;
    var rec_count = this.data.count
    var empty = this.data.is_empty;
    if (empty) {
      console.log("又加载错了，初始没有获取到内容，不要再下拉了")
    }
    else {
      wx.request({
        url: 'https://192.168.142.128/api/content/REC/recimfor/?page=' + rec_count,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: { 'Authorization': 'Token ' + appInstance.globalData.servertoken,}, // 设置请求的 header
        success: function (res) {
          rec_count = rec_count + 1;
          reccon = reccon.concat(res.data);
          that.setData({ rec_key: reccon });
          that.setData({ count: rec_count });
        },
      })
    };

  }
})