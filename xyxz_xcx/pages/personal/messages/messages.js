// xyxz_xcx/pages/personal/messages/messages.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [
      {
        name: "wuwuw",
        content: "请问还在吗",
        id: ''
      },
      {
        name: "wuwuw",
        content: "就大佛爱师姐佛山第几件事东风街",
        id: ''
      },
      {
        name: "wuwuw",
        content: "请问还在吗",
        id: ''
      },
      {
        name: "wuwuw",
        content: "请问还在吗",
        id: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.util.request({
      'url': 'entry/wxapp/GetComments',
      'cachetime': '30',
      success: function (res) {
        console.log(res)
        this.setData({
          comments: res.data.data.liuyan
        })
      }
    });
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