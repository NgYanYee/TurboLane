// we7/pages/publish/publish.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      {
        name: "书籍",
        list: ['环境学院', '计算机学院', '物理学院']

      },
      {
        name: "其他物品",
        list: ['电子产品', '美妆/护肤', '服装', '饰品', '零食']
      }
    ],
    
    sorted: {
      name: "",
      list: []
    },
    photos: [
      
    ],
    goodsInfo: {
      title: "",
      details: ""
    },
    location: "",
    price: 1

    
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