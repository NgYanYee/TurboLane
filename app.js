var util = require('we7/resource/js/util.js');
App({
    onLaunch: function (res) {
      // wx.getSetting({
      //   success: res => {
      //     if (res.authSetting['scope.userInfo']) {
      //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      //       wx.getUserInfo({
      //         success: res => {
      //           // 可以将 res 发送给后台解码出 unionId
      //           this.globalData.userInfo = res.userInfo

      //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      //           // 所以此处加入 callback 以防止这种情况
      //           if (this.userInfoReadyCallback) {
      //             this.userInfoReadyCallback(res)
      //           }
      //         }
      //       })
      //     } else {
      //       // 未授权，跳转到授权页面
      //       wx.reLaunch({
      //         url: "/xyxz_xcx/pages/auth/auth",
      //       })
      //     }
      //  }
      // })

    },
    onShow: function (res) {
    },
    onHide: function () {
    },
    onError: function (msg) {
        console.log(msg)
    },
    //加载微擎工具类
    util: util,
    //导航菜单，微擎将会自己实现一个导航菜单，结构与小程序导航菜单相同
    //用户信息，sessionid是用户是否登录的凭证
    userInfo: {
        sessionid: null,
    },
    "tabBar": {
        "color": "#999",
        "selectedColor": "#54a2e7",
        "borderStyle": "#fff",
        "backgroundColor": "#fff",
        "list": [
            {
            "pagePath": "/xyxz_xcx/pages/index/index",
                "iconPath": "/we7/resource/icon/home.png",
            "selectedIconPath": "/we7/resource/icon/homeselect.png",
                "text": "首页"
            },
            // {
            //   "pagePath": "/we7/pages/category/category",
            //   "iconPath": "/we7/resource/icon/category.png",
            //   "selectedIconPath": "/we7/resource/icon/category-selected.png",
            //     "text": "分类"
            // },
            {
              "pagePath": "/xyxz_xcx/pages/publish/publish",
              "iconPath": "/we7/resource/icon/push.png",
              "selectedIconPath": "/we7/resource/icon/push.png",
              "text": "发布"
            },
            {
              "pagePath": "/xyxz_xcx/pages/personal/personal",
              "iconPath": "/we7/resource/icon/user.png",
              "selectedIconPath": "/we7/resource/icon/userselect.png",
                "text": "我的"
            }
        ]
    },
    siteInfo: require('siteinfo.js')
});