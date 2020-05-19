const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [], //顶部轮播图
    storeList: [], //精选店家
    //导航菜单
    navList: [{
        "id": 1,
        "name": "新品商家",
        "src": "../../image/c1.png",
      },
      {
        "id": 2,
        "name": "营养搭配",
        "src": "../../image/c2.png",
      },
      {
        "id": 3,
        "name": "智能推荐",
        "src": "../../image/c3.png",
      },
      {
        "id": 4,
        "name": "膳食表",
        "src": "../../image/c4.png",
      },
      {
        "id": 5,
        "name": "新品商家",
        "src": "../../image/c5.png",
      },
      {
        "id": 6,
        "name": "营养搭配",
        "src": "../../image/c6.png",
      },
      {
        "id": 7,
        "name": "智能推荐",
        "src": "../../image/c7.png",
      },
      {
        "id": 8,
        "name": "膳食表",
        "src": "../../image/c8.png",
      }
    ],



    // 精选商家
    // storeList: [

    //   {
    //     "id": 1,
    //     "sname": "兰州拉面",
    //     "src": "../../image/store/store1.jpg",
    //   },
    //   {
    //     "id": 2,
    //     "sname": "黄焖鸡米饭",
    //     "src": "../../image/store/store2.jpg",
    //   },
    //   {
    //     "id": 3,
    //     "sname": "沙县小吃",
    //     "src": "../../image/store/store3.jpg",
    //   },
    //   {
    //     "id": 4,
    //     "sname": "桂林米粉",
    //     "src": "../../image/store/store4.jpg",
    //   },
    //   {
    //     "id": 5,
    //     "sname": "老爹锅贴",
    //     "src": "../../image/store/store5.jpg",
    //   },
    //   {
    //     "id": 6,
    //     "sname": "过桥米线",
    //     "src": "../../image/store/store6.jpg",
    //   }
    // ]
  },

  onLoad: function(options) {
    this.getTopBanner(); //请求顶部轮播图
    this.getStore(); //请求商店信息
  },

  //获取首页顶部轮播图
  getTopBanner() {
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + '/wxPicture/getAll',
      success: function(res) {
        console.log("请求到的轮播图", res)
        if (res && res.data && res.data.data && res.data.data.length > 0) {
          let dataList = res.data.data;
          console.log("请求到的轮播图", dataList)
          that.setData({
            banner: dataList
          })
        } else {
          that.setData({
            list: []
          })
        }
      },
      fail(res) {
        console.log("请求轮播图失败", res)
      }
    })
  },

  //获取商店信息
  getStore() {
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + '/store/getAll',
      success: function(res) {
        console.log("请求到的商店信息", res)
        if (res && res.data && res.data.data && res.data.data.length > 0) {
          let sdataList = res.data.data;
          console.log("请求到的商店信息", sdataList)
          that.setData({
            storeList: sdataList
          })
        } else {
          that.setData({
            list: []
          })
        }
      }
    })
  },
  // navtap(e) {
  //   var navList = this.data.navList;
  //   var id = e.currentTarget.id;
  //   console.log(e);    
  //   if (navList.id == 4) {
  //     wx.showToast({
  //       icon: 'none',
  //       title: '膳食表',
  //     })
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})