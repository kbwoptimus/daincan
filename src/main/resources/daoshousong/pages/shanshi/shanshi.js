// pages/shanshi/shanshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shanshiList: [],
    index: "",
    detailList: [
      {
        "id": 1,
        "title":"食品热量表",
        "src":"https://7761-waimai1-ao00d-1300871711.tcb.qcloud.la/USER/table/%E7%83%AD%E9%87%8F.png?sign=bbf7561986f919507f372d9ff3df1409&t=1576808325"
      },
      {
        "id": 2,
        "title": "膳食纤维表",
        "src": "cloud://waimai1-ao00d.7761-waimai1-ao00d-1300871711/USER/table/膳食纤维.jpg"
      },
      {
        "id": 3,
        "title": "宝妈专栏",
        "src": "cloud://waimai1-ao00d.7761-waimai1-ao00d-1300871711/USER/table/宝妈.jpg"
      },
      {
        "id": 4,
        "title": "一周安排",
        "src": "cloud://waimai1-ao00d.7761-waimai1-ao00d-1300871711/USER/table/一周安排.jpg"
      },
      {
        "id": 5,
        "title": "减肥专区",
        "src": "cloud://waimai1-ao00d.7761-waimai1-ao00d-1300871711/USER/table/减肥.jpg"
      },
      {
        "id": 6,
        "title": "血糖病人",
        "src": "cloud://waimai1-ao00d.7761-waimai1-ao00d-1300871711/USER/table/糖尿.jpg"
      },


    ]
  },

// 预览图片
  previewImg: function (e) {
    let imgData = e.currentTarget.dataset.src
    console.log("eeee", imgData[0])
    console.log("图片s", imgData[0])
    wx.previewImage({
      //当前显示图片
      current: imgData[0],
    // 需要预览的图片http链接列表
      urls: [imgData[0]]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shanshi = JSON.parse(options.shanshilist);           //获得数组
    var index = options.index;                              //获得餐品id
    //查看传值是否成功
    console.log(shanshi);
    console.log(index);
    console.log(shanshi[index].id);
    this.setData({
      shanshiList: shanshi,
      index: index
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