//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hdImgPath:
      {
        url:'../../images/hd-1-1.png'
      },
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://science.china.com.cn/images/attachement/jpg/site555/20160429/e89a8ffb1393188d1aa50e.jpg'
      }, {
        link: '/pages/logs/logs',
        url: 'http://img.mp.itc.cn/upload/20170328/dc5d989207b140c193af3ed1877df459_th.jpeg'
      }, {
        link: '/pages/mine/mine',
        url: 'http://imgqn.koudaitong.com/upload_files/2015/04/02/Fu4Klzx4_eNVsRx-M-50no9nw5QH.jpg%21580x580.jpg'
      } ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,  
    //模拟主页下方周花图片
    imgListUrls:[
      { url:'http://img12.360buyimg.com/n0/jfs/t2776/34/1608531371/473881/ebf94fef/5743c1d0Nce7561a5.jpg'},
      { url: 'http://img2.bsw360.cn/2016/1/25/20160125194107627.jpg' },
      { url: 'http://imgcdn.guoku.com/images/310/87baa099909c7d313033373328ace2fa.jpg' },
      { url: 'http://img12.360buyimg.com/cms/jfs/t2635/253/2578092342/203462/27d3204c/576b5e7bN352b1a3a.jpg' },
      { url: 'http://imgqn.koudaitong.com/upload_files/2015/03/31/FrrAfBTgSyHxDZORPnH3Dc_J3R3Z.jpg' }
    ],  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
