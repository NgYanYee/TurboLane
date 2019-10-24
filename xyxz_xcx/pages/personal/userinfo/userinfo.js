// xyxz_xcx/pages/personal/userinfo/userinfo.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    studentId: "",
    address: "",
    wechat: "",
    phone: "",
    college:"",
    submitState: true
  },

  formSubmit: function(e) {
    if(this.data.submitState == false) {
      wx.showToast({
        title: '资料审核中',
        icon: 'none',
        image: '',
        duration: 1,
        mask: true,
        complete: function(res) {
          wx.redirectTo({
            url: "xyxz_xcx/pages/personal/personal"
          })
        },
      })
    }
    var that = this
    var formId = e.detail.formId
    console.log(e.detail.formId)
    
    app.util.request({
      'url': 'entry/wxapp/PostUser',
      'cachetime': '30',
      'data': {
        studentId: that.data.studentId,
        studentName: that.data.name,
        college: that.data.college,
        address: that.data.address,
        phone: that.data.phone,
        wechat: that.data.wechat,
        formid: formId
      },
      success: function (res) {
        console.log(res)
        // this.setData({
        //   comments: res.data.liuyan
        // })
        if(res.data.sts == "success") {
          wx.showToast({
            title: '提交成功'
          })
        }
      }
    });

  },

  watchInput: function(e) {
    let item = e.currentTarget.dataset.model;
    this.setData({
      [item]: e.detail.value
    })
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
        // this.setData({
        //   comments: res.data.liuyan
        // })
        if(res.data.status == 1) {
          this.setData({
            submitState: false
          })
        } else if(res.data.status == 2) {
          this.setData({
            studentId: res.data.studentId,
            name: that.data.studentName,
            college: res.data.college,
            address: res.data.address,
            phone: res.data.phone,
            wechat: res.data.wechat,
            submitState: true
          })
        } else {
          this.setData({
            submitState: true
          })
        }
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