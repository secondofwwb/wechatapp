//app.js
App({
  globalData:{
    servertoken:{},
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    this.connect_server();
  },
  connect_server:function(event){
    var that = this;
    wx.request({
      url: 'https://192.168.142.128/api/token/',
      data:{
        username: 'wechatapp',
        password: 'wechat_1234',
      },
      method: 'POST',
      header:{
      },
      success: function (res) {
        that.globalData.servertoken = res.data.token;
      }
    })
  }
  // getUserInfo:function(cb){
  //   var that = this
  //   if(this.globalData.userInfo){
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   }else{
  //     //调用登录接口
  //     wx.login({
  //       success: function () {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             that.globalData.userInfo = res.userInfo
  //             typeof cb == "function" && cb(that.globalData.userInfo)
  //           }
  //         })
  //       }
  //     })
  //   }
  // },
  // globalData:{
  //   userInfo:null
  // }
})
