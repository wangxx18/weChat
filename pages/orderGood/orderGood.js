// orderGood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time_num: 1,//选中的月份
    user_msg:0,
    userName:"",
    provinceName: "",
    cityName: "",
    countyName: "",
    detailInfo: "",
    telNumber: "",
    orderType: "",//订单类型周花0 拼团1
    imgListUrls: 
      { url: 'http://img12.360buyimg.com/n0/jfs/t2776/34/1608531371/473881/ebf94fef/5743c1d0Nce7561a5.jpg', allIndex: 0 ,price:99.9}
      
  },
  timeClick: function (e) {
    this.setData({
      time_num: e.target.dataset.num
    })
  },
  chooseAddress: function(e){
    var that = this;
    console.log(111111111);
    wx.chooseAddress({
      success: function (res) {
        that.setData({
          userName: res.userName,
          provinceName: res.provinceName,
          cityName: res.cityName,
          countyName: res.countyName,
          detailInfo: res.detailInfo,
          telNumber: res.telNumber,
          user_msg: 1
        })
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderType: options.orderType
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