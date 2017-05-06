
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
            url: 'http://192.168.142.128:8000/api/content/' + dataid + '/contentbytype/',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                "content-Type": "json"
            }, // 设置请求的 header
            success: function (res) {
                that.setData({ content_key: res.data });
                that.setData({ title_key: titlename });
            },
            fail: function () {
                console.log("fail")
            }
        })
    },
    onContentid: function (event) {
        var contentid = event.currentTarget.dataset.contentid;
        wx.navigateTo({
            url: "/pages/contentdetail/contentdetail?id=" + contentid
        })
    }
})