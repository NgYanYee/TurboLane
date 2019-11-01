// xyxz_xcx/pages/auth/auth.js
var app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onAuth(result) {
    var that = this;
    console.log('1111', result.detail.userInfo)
    app.util.getUserInfo(function (userInfo) {
      console.log('2222')
      if (result.detail.userInfo) {
        // console,log('222')
        //获取用户数据
        var userdata = {
          avatar: result.detail.userInfo.avatarUrl,
          nickname: result.detail.userInfo.nickName,
        }
        app.util.request({
          'url': 'entry/wxapp/addUser',
          'cachetime': '30',
          'data': userdata,
          success: function (res) {
            // console.log(res)
            wx.reLaunch({
              url: '../index/index',
            })
          }
        });
      } else {
        console.log("请授权啦,不然咋用呀");
      }
    })
    
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo'] == true) {
          wx.reLaunch({
            url: '../index/index',
          })
        }
      }
    })
  }
})
