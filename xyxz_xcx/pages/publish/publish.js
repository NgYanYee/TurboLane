// we7/pages/publish/publish.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      {
        name:"书籍",
        enName: "books"
      },
      {
        name: "数码电子",
        enName: "digital"
      },
      {
        name: "生活用品",
        enName: "daily"
      },
      {
        name: "美妆个护",
        enName: "cosmetics"
      },
      {
        name: "零食",
        enName: "snacks"
      },
      {
        name: "书籍",
        enName: "books"
      },
      {
        name: "服饰",
        enName: "costume"
      },
    ],
    
    sorted: {
      name: "",
      list: []
    },
    imageSrc: "",
    goodsInfo: {
      title: "",
      details: ""
    },
    location: "",
    price: 1,
    index: 0
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    app.util.request({
      'url': 'entry/wxapp/AuthUser',
      'cachetime': '30',
      success: function (res) {
        // if (!res.data.message.errno) {
        //   console.log(res.data.message.message)
        //   that.setData({
        //     navs: res.data.message.message,
        //   })
        // }
      }
    });
  },

  radiochange: function (e) {
    console.log('radio发生change事件，携带的value值为：', e.detail.value)
    // this.setData({
    //   multiIndex: e.detail.value
    // })

  },
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        // 限制最多只能留下3张照片
        this.setData({
          imageSrc: tempFilePaths[0]
        })

      }
    })
  },

  removeImage() {
    this.setData({
      imageSrc: ""
    })
  },

  handleImagePreview(e) {
    const imageSrc = this.data.imageSrc
    wx.previewImage({
      current: imageSrc,  //当前预览的图片
      urls: [imageSrc],  //所有要预览的图片
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
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