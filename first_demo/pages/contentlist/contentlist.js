
Page({
  data: {
    allcontent: {},
    is_empty: true,
    contentcount: 0,
    content_key:{},
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var titlename = options.iconname;
    var dataid = options.typeid;
    this.setData({ dataid_key: dataid });
    this.getdata(dataid, titlename);

  },
  getdata: function (dataid, titlename) {
    var that = this;
    wx.request({
      url: 'http://192.168.142.128:8000/api/content/' + dataid + '/contentbytype/?page=0',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "content-Type": "json"
      }, // 设置请求的 header
      success: function (res) {
        that.setData({ content_key: res.data });
        that.setData({ title_key: titlename });
        that.setData({ is_empty: false });
        that.setData({ contentcount: 1 });
      },
      fail: function () {
        console.log("fail");
      }
    })
  },
  onContentid: function (event) {
    var contentid = event.currentTarget.dataset.contentid;
    wx.navigateTo({
      url: "/pages/contentdetail/contentdetail?id=" + contentid
    })
  },
  scrollupper: function (event) {
    var that = this;
    var count = this.data.contentcount;
    var empty = this.data.is_empty;
    var content = this.data.content_key;
    console.log(content);
    if (empty) {
      console.log("加载错误")
    }
    else {
      wx.request({
        url: 'http://192.168.142.128:8000/api/content/' + this.data.dataid_key + '/contentbytype/?page=' + count,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECTd
        header: {
          "content-Type": "json"
        }, // 设置请求的 header
        success: function (res) {
          content = content.concat(res.data);
          that.setData({ content_key: content});
          that.setData({ isempty: false });
          count = count+1;
          that.setData({ contentcount : count});
        },
        fail: function () {
          console.log("fail")
        }
      })
    };

  },

})