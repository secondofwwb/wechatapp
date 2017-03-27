Page({
  data:{
    
  },
  onLoad:function(options){
      var firstinfo={
          username:"请登录",
          useravatar:'/images/icons/en.jpg',
      };
      this.setData({
        userinfor: firstinfo
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