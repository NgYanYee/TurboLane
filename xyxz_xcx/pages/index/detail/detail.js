// we7/pages/index/detail/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: {
      // goodsName: 'dfsfs1000xm2',
      // publishTimes: '2019-08-22 06:22:ss',
      // times: '221',
      // images: [{
      //   url: '../1.png'
      // }, {
      //     url: '../1.png'
      // }],
      // descrip: '19年大大所大所大所大所大所大所大大所大所大大所大所大所大大所付所付·',
      // 'type': '电子产品',
      // price: 111,
      // publisher: '吕同学',
      // wechat: 13533260067,
      // phone: '13533260067',
      // liuyan: [{
      //   name: '111',
      //   content: 'asdassssssssssssssssssssssssssssssssssssssssssssssssss'
      // }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.getData(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getData: function(id) {
    var $this = this;
    app.util.request({
      url: 'entry/wxapp/GetGoodsDetail',
      data: {
        id: id
      },
      method: 'post',
      success: function (response) {
        $this.setData({
          'orders': response.data.data.orders
        });
      }
    });
  }
})