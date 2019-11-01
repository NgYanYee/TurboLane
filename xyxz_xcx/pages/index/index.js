//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		navs: [],
		slide: [],
		commend: [],
		userInfo: {},
    multiArray: [['数码电子', '书籍', '生活用品', '化妆品', '零食', '服饰']],
    multiIndex: [0],
    // orders: [{
    //   image: '1.png',
    //   publisher: 'Gemmius X',
    //   title: '索尼——————————',
    //   'type': '电子产品',
    //   publishTimes: '2018`11111',
    //   times: '111',
    //   images: [{
    //     url: '1.png'
    //   }, {
    //       url: '1.png'
    //     }]
    // }]
    orders: [],
    obj: {
      '0': 'digital',
      '1': 'books',
      '2': 'daily',
      '3': 'cosmetics',
      4: 'snacks',
      5: 'costume'
    }
	},
	onLoad: function () {
		var that = this
		app.util.footer(that);
		//初始化导航数据
    this.getData('digital')
	},
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value[0])
    this.setData({
      multiIndex: e.detail.value
    })
    this.getData(this.data.obj[e.detail.value[0]])
  },
  bindMultiPickerColumnChange: function (e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    // var data = {
    //   multiArray: this.data.multiArray,
    //   multiIndex: this.data.multiIndex
    // };
    // data.multiIndex[e.detail.column] = e.detail.value;
    // switch (e.detail.column) {
    //   case 0:
    //     switch (data.multiIndex[0]) {
    //       case 0:
    //         data.multiArray[1] = ['全部物品'];
    //         break;
    //       case 1:
    //         data.multiArray[1] = ['电子产品', '耳机', '手环'];
    //         break;
    //       case 2:
    //         data.multiArray[1] = ['计算机学院', '自动化学院'];
    //         break;
    //     }
    //     data.multiIndex[1] = 0;
    //     data.multiIndex[2] = 0;
    //     break;
    //     data.multiIndex[2] = 0;
    //     console.log(data.multiIndex);
    //     break;
    // }
    // this.setData(data);
  },
  getData: function (id) {
    var $this = this;
    app.util.request({
      url: 'entry/wxapp/GetGoods',
      data: {
        'type': id
      },
      method: 'post',
      success: function (response) {
        console.log(response.data.data.orders)
        let orders = response.data.data.orders
        for(let obj of orders) {
          obj.image = 'https://zx.sumrugh.xyz/addons/xyxz_xcx/upload/' + obj.image
        }
        $this.setData({
          'orders': orders || []
        });
      }
    });
  },
  navicat: function (e) {
    console.log(e.currentTarget.dataset.id | '1')
    wx.navigateTo({
      url: "./detail/detail?id=" + (e.currentTarget.dataset.id | '1'),
      success: function () {
        console.log('跳转到news页面成功')// success              
      },
      fail: function () {
        console.log('跳转到news页面失败')
      }
    })
  }
});
