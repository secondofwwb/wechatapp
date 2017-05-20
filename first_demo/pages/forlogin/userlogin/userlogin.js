Page({
  data: {

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // String2
  },
  refusebut: function (event) {
    wx.switchTab({
      url: "../../home/home"
    });
  },

  agreebut: function (event) {
    var that = this;
    that.userlogin();
    wx.reLaunch({
      url: '../usercenter/usercenter'
    })
  },

  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },

  userlogin: function () {
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + res.code + '&grant_type=' + authorization_code,
            data: {
              code: res.code
            }
          })
        }
        else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }

      }

    })
  },
})

