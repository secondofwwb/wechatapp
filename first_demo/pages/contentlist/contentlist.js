var postsData = require('../../data/data.js')

Page({
    data: {

    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        var titlename = options.iconname;
        var dataid = options.typeid; 
        var contentdata=new Array();
        for (var i = 0;i<postsData.postcons.length;i++){
            if (postsData.postcons[i].contenttypeid == dataid){
                contentdata.push(postsData.postcons[i])
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
    onContentid:function(event){
        var contentid = event.currentTarget.dataset.contentid;
        wx.navigateTo({
          url: "/pages/contentdetail/contentdetail?id=" + contentid
        })
    }
})