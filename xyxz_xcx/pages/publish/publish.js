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
        name: "服饰",
        enName: "costume"
      },
    ],
    
    sort: "books",
    imageSrc: "",
    title: "",
    descrip: "",
    price: 1,
    index: 0,
    imgURL: ""
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    app.util.request({
      'url': 'entry/wxapp/AuthUser',
      'cachetime': '30',
      success: function (res) {
        console.log(res)
        if(res.data.status == 0) {
          wx.navigateTo({
            url: '../personal/userinfo/userinfo',
          })
        }
        // if (!res.data.message.errno) {
        //   console.log(res.data.message.message)
        //   that.setData({
        //     navs: res.data.message.message,
        //   })
        // }
      }
    });
  },

  
  chooseImage(e) {
    var that = this
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
        wx.uploadFile({
          url: 'https://zx.sumrugh.xyz/addons/xyxz_xcx/upload.php', 
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            "content-type": "multipart/form-data"
          },
          success: function (res) {
            console.log(res)
            if(res.data.sts == "fail") {
              wx.showToast({
                title: '上传图片失败，请重新选择图片',
                icon:'none'
              })
            }
            else {
              wx.showToast({
                title: '上传图片成功',
                icon: 'success'
              })
              that.setData({
                imgURL: "https://zx.sumrugh.xyz/addons/xyxz_xcx/upload/" + res.data.url
            
              })
            //do something
            }
          }
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
    var index = e.detail.value
    var value = this.data.category[index].enName
    this.setData({
      index: e.detail.value,
      sort: value
    })
    
  },

  inputWatch: function(e) {
    let item = e.currentTarget.dataset.model;
    this.setData({
      [item]: e.detail.value
    })
  },
  publish: function() {
    var that = this
    app.util.request({
      'url': 'entry/wxapp/PostGoods',
      'cachetime': '30',
      'data': {
        title: that.data.title,  // 物品名字
        descrip: that.data.descrip, // 描述
        'type': that.data.sort,   // 物品类别
        price: that.data.price,
        image: that.data.imgURL
      },
      success: function (res) {
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          complete: function (res) {
            wx.redirectTo({
              url: '/we7/pages/index/index'
            })
          },
        })

        console.log(res)
        // if (!res.data.message.errno) {
        //   console.log(res.data.message.message)
        //   that.setData({
        //     navs: res.data.message.message,
        //   })
        // }
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