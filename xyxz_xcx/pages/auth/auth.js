// xyxz_xcx/pages/auth/auth.js
var app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onAuth(result) {
    var that = this;
      
    app.util.getUserInfo(function () {
      if (result.detail.userInfo) {
        //获取用户数据
        var userdata = {
          avatar: result.detail.userInfo.avatarUrl,
          nickname: result.detail.userInfo.nickName,
        }
        console.log(userdata)
        app.util.request({
          'url': 'entry/wxapp/addUser',
          'cachetime': '30',
          'data': userdata,
          success: function (res) {
            console.log(res)
          }
        });
      } else {
        console.log("请授权啦,不然咋用呀");
      }
    },result.detail)
    wx.reLaunch({
      url: '../index/index',
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.getSetting({
      success(res) {
        console.log(res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo'] == true) {
          wx.reLaunch({
            url: '../index/index',
          })
        }
      }
    })
  }
})
