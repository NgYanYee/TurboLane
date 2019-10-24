//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		navs: [],
		slide: [],
		commend: [],
		userInfo: {},
    multiArray: [['全部','物品', '书籍'],['全部物品']],
    multiIndex: [0, 0],
    orders: [{
      image: '1.png',
      publisher: 'Gemmius X',
      title: '索尼——————————',
      'type': '电子产品',
      publishTimes: '2018`11111',
      times: '111',
      images: [{
        url: '1.png'
      }, {
          url: '1.png'
        }]
    }]
	},
	onLoad: function () {
		var that = this
		app.util.footer(that);
		//初始化导航数据
		// app.util.request({
		// 	'url': 'wxapp/home/nav',
		// 	'cachetime': '30',
		// 	success: function (res) {
		// 		if (!res.data.message.errno) {
		// 			console.log(res.data.message.message)
		// 			that.setData({
		// 				navs: res.data.message.message,
		// 			})
		// 		}
		// 	}
		// });
		// app.util.request({
		// 	'url': 'wxapp/home/slide',
		// 	'cachetime': '30',
		// 	success: function (res) {
		// 		if (!res.data.message.errno) {
		// 			that.setData({
		// 				slide: res.data.message.message,
		// 			})
		// 		}
		// 	}
		// });
		// app.util.request({
		// 	url: 'wxapp/home/commend',
		// 	cachetime: '30',
		// 	success: function (res) {
		// 		if (!res.data.message.errno) {
		// 			that.setData({
		// 				commend: res.data.message.message,
		// 			})
		// 		}
		// 	}
		// });
    this.getData('全部')
	},
  bindMultiPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', this.data.multiArray[1][e.detail.value[1]])
    this.setData({
      multiIndex: e.detail.value
    })
    this.getData(this.data.multiArray[1][e.detail.value[1]])
  },
  bindMultiPickerColumnChange: function (e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['全部物品'];
            break;
          case 1:
            data.multiArray[1] = ['电子产品', '耳机', '手环'];
            break;
          case 2:
            data.multiArray[1] = ['计算机学院', '自动化学院'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  getData: function (id) {
    var $this = this;
    app.util.request({
      url: 'entry/wxapp/detail',
      data: {
        'type': id
      },
      method: 'post',
      success: function (response) {
        $this.setData({
          'orders': response.data.data
        });
      }
    });
  }
});
