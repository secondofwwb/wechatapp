var postsData = require('../../data/data.js')

Page({
  data: {

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var contentid = options.id;   //获取传递过来的id
    var is_rec = options.recimfor;
    this.data.curcontentid = contentid;
    var contentdata = new Array();
    if (is_rec == 1) {
      for (var i = 0; i < postsData.postreccontent.length; i++) {
        if (postsData.postreccontent[i].contentid == contentid) {
          contentdata.push(postsData.postreccontent[i])
        }
      }
    }
    else {
      for (var i = 0; i < postsData.postcons.length; i++) {
        if (postsData.postcons[i].contentid == contentid) {
          contentdata.push(postsData.postcons[i])
        }
      }
    };

    this.setData({ content_key: contentdata[0] });

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
      title:be_collected?"收藏成功":"取消收藏"
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