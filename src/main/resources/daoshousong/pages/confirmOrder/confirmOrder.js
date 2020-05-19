let app = getApp();
let payWay = [{
  "id": 1,
  "package": "支付宝支付"
}, {
  "id": 2,
  "package": "微信支付"
}, {
  "id": 3,
  "package": "银行卡支付"
}]
Page({
  //页面的初始数据
  data: {
    // tableNum: "",
    stname: null,
    stimg: null,
    // 地址信息
    hasAddress: false,
    address: null,
    confirmOrder: [],
    // 输入框中的用餐人数
    // diner_num: 0,
    // 用餐人数输入框获取焦点
    // diner_numF: false,
    // 备注信息
    remarks: "",
    //支付方式列表
    payWayList: [],
    // 购物车数据
    cartList: [],
    totalPrice: 0,
    totalNum: 0,
    // 遮罩
    maskFlag: true,
  },
  // 生命周期函数--监听页面加载
  onLoad: function(options) {
    var that = this;
    // let tableNum = Options.tableNum;
    var arr = wx.getStorageSync('cart') || [];
    for (var i in arr) {
      this.data.totalPrice += arr[i].quantity * arr[i].price;
      this.data.totalNum += arr[i].quantity
    }
    this.setData({
      // tableNum: tableNum,
      stname: options.stname,
      stimg: options.stimg,
      cartList: arr,
      totalPrice: this.data.totalPrice.toFixed(2),
      totalNum: this.data.totalNum
    })
    console.log("获取的商家名", this.data.stname)
  },
  // 点击数字，输入框出现对应数字
  // getDinnerNUM: function(e) {
  //   var dinnerNum = e.currentTarget.dataset.num;
  //   // var diner_num = this.data.diner_num;
  //   // 点击“输”，获取焦点，
  //   if (dinnerNum == 0) {
  //     this.setData({
  //       diner_numF: true,
  //     })
  //     this.getDinerNum();
  //   } else {
  //     this.setData({
  //       diner_num: dinnerNum
  //     });
  //   }
  // },
  //打开支付方式弹窗
  choosePayWay: function() {
    var payWayList = this.data.payWayList
    var that = this;
    var rd_session = wx.getStorageSync('rd_session') || [];
    that.setData({
      payWayList: payWay
    });

    // 支付方式打开动画
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease-in-out',
      delay: 0
    });
    that.animation = animation;
    animation.translate(0, -285).step();
    that.setData({
      animationData: that.animation.export(),
    });
    that.setData({
      maskFlag: false,
    });
  },
  // 支付方式关闭方法
  closePayWay: function() {
    var that = this
    // 支付方式关闭动画
    that.animation.translate(0, 285).step();
    that.setData({
      animationData: that.animation.export()
    });
    that.setData({
      maskFlag: true
    });
  },
  // 获取输入的用餐人数
  // getDinerNum: function(e) {
  //   var diner_num = this.data.diner_num;
  //   this.setData({
  //     diner_num: diner_num
  //   })
  // },
  // 获取备注信息
  getRemark: function(e) {
    var remarks = this.data.remarks;
    this.setData({
      remarks: e.detail.value
    })
  },
  //提交订单
  submitOrder: function(e) {
    let that = this;
    // let tableNum = that.data.tableNum;

    //校验是否填写手机号
    let phone = app.globalData.userInfo.realphone
    console.log("手机号" + phone)
    if (phone == '' || phone == undefined) {
      wx.showModal({
        title: '提示',
        content: '请填写手机号',
        success: (res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '../change/change',
            })
          }
        })
      })
      return
    }


    let arr = wx.getStorageSync('cart') || [];

    let goods_arr = [];
    arr.forEach(order => {
      console.log(order);
      var goods = new Object();
      goods.foodId = order.id;
      goods.foodQuantity = order.quantity;
      goods_arr.push(goods)
    })

    let goods_josn = JSON.stringify(goods_arr);
    console.log(goods_josn)
    // let diner_num = this.data.diner_num; //用餐人数
    let dinerNum;
    let remarks = this.data.remarks; //备注信息
    let payId = e.currentTarget.dataset.id;
    let rd_session = wx.getStorageSync('rd_session') || [];
    // if (diner_num == 0) {
    //   that.setData({
    //     diner_num: 1
    //   })
    // }
    // var peoples = this.data.diner_num
    // console.log("用餐人数：" + peoples)
    console.log("备注：" + remarks)
    // console.log("桌号" + tableNum)

    wx.request({
      url: app.globalData.baseUrl + '/userOrder/create',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        openid: app.globalData.openid,
        name: app.globalData.userInfo.nickName,
        phone: app.globalData.userInfo.realphone,
        stname: that.data.stname,
        address: that.data.address,
        items: goods_josn
      },
      success: function(res) {
        // var rescode = res.data.code
        console.log("支付成功", res.data)
        if (res && res.data && res.data.data) {
          // 支付方式关闭动画
          that.animation.translate(0, 285).step();
          that.setData({
            animationData: that.animation.export()
          });
          that.setData({
            maskFlag: true
          });
          wx.showToast({
            title: '下单成功！',
          })
          wx.setStorageSync('cart', "")
          wx.switchTab({
            url: '../index/index',
          })
        } else {
          // 支付方式关闭动画
          that.animation.translate(0, 285).step();
          that.setData({
            animationData: that.animation.export()
          });
          that.setData({
            maskFlag: true
          });
        }

      }
    })

  },
  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    // let that = this;
    // wx.getStorage({
    //   key: 'address',
    //   success(res) {
    //     that.setData({
    //       address: res.data,
    //       hasAddress: true
    //     })
    //   }
    // })
    console.log("运行onshow")
    let that = this;
    var openid = app.globalData.openid;
    if (openid === null || openid === undefined) {
      app.getOpenid();
      wx.showToast({ //这里提示失败原因
        title: 'openid为空！',
        duration: 1500
      })
      return;
    }
    if (app.globalData.userInfo) {
      console.log("修改个人信息页", app.globalData.userInfo)
      that.setData({
        username: app.globalData.userInfo.nickName,
        phone: app.globalData.userInfo.realphone,
        address: app.globalData.userInfo.realaddress,
        hasAddress: true
        // zhuohao: app.globalData.userInfo.realzhuohao,
        //renshu: app.globalData.userInfo.realrenshu
      })
    }
  }

})