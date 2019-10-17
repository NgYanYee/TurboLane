// we7/pages/oders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentView: '1',
    orders: [{
      publisher: '焦子豪',
      title: 'FPGQ开发版',
      'type': '电子产品',
      publishTime: '2019-08-10 14:41:32',
      times: 1211,
      id: '1'
    }]
  },
  tabItemTap: function (e) {
    var _dataSet = e.currentTarget.dataset,
      index = parseInt(_dataSet.view) - 1;
    // this.showLoading()
    this.setData({
      currentView: _dataSet.view,
      // cart: this.data.alltype[index],
    });
    // Service.getData(this.init, {
    //   userId: app.globalData.userId,
    //   orderState: index
    // }, app.globalData.url + '/order/show')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})