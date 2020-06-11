// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shanshilist:[
      {
        "id": 1,
        "title": "食品热量表",
      },
      {
        "id": 2,
        "title": "膳食纤维表",
      },
      {
        "id":3,
        "title": "宝妈专栏",
      },
      {
        "id": 4,
        "title": "一周安排",
      },
      {
        "id": 5,
        "title": "减肥专区",
      },
      {
        "id": 6,
        "title": "血糖病人",
      },

      

    ],

  },

  // 添加绑定事件,跳转详情页面
  toshanshi: function (e) {
    var list = JSON.stringify(this.data.shanshilist);        //获取餐品列表
    let index = e.currentTarget.dataset.index;              //获取餐品index
    console.log("index为：" + e.currentTarget.dataset.index);     //检验是否获取成功
    wx.navigateTo({
      url: '/pages/shanshi/shanshi?index=' + index + '&shanshilist=' + list
    });
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