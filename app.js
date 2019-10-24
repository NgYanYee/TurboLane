var util = require('we7/resource/js/util.js');
App({
    onLaunch: function (res) {

      
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
            "pagePath": "/we7/pages/index/index",
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