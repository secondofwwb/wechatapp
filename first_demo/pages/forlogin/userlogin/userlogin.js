Page({
  data:{

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
  },
  refusebut:function(event){
      wx.switchTab({
        url: "../../home/home"
      });
  },

  agreebut:function(event){
      console.log('1');
      wx.redirectTo({
        url: '../usercenter/usercenter'
      })
  },

  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})