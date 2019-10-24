// xyxz_xcx/pages/auth/auth.js
var app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onAuth(result) {
    var that = this;
    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.record']) {
    //       wx.authorize({
    //         scope: 'scope.record',
    //         success() {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           wx.startRecord()
    //         }
    //       })
    //     }
    //   }
    // })
    app.util.getUserInfo(function () {
      if (result.detail.userInfo) {
        //获取用户数据
        var userdata = {
          avatar: result.detail.userInfo.avatarUrl,
          name: result.detail.userInfo.nickName,
        }
      } else {
        console.log("请授权啦,不然咋用呀");
      }
    },result.detail)
    wx.reLaunch({
      url: '../index/index',
    })
  },
  // onAuth() {
  //   wx.getSetting({
  //     success: (res) => {
  //       console.log(res.authSetting)
  //       if (res.authSetting['scope.userInfo']) {
  //         wx.reLaunch({
  //           url: '../index/index',
  //         })
  //       }
  //     }
  //   })
  // },
})
