var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["全部", "待付款", "已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    imgListUrls: [
      { url: 'http://img12.360buyimg.com/n0/jfs/t2776/34/1608531371/473881/ebf94fef/5743c1d0Nce7561a5.jpg',allIndex:0 },
      { url: 'http://img2.bsw360.cn/2016/1/25/20160125194107627.jpg', allIndex: 1 },
      { url: 'http://imgcdn.guoku.com/images/310/87baa099909c7d313033373328ace2fa.jpg', allIndex: 1 },
      { url: 'http://img12.360buyimg.com/cms/jfs/t2635/253/2578092342/203462/27d3204c/576b5e7bN352b1a3a.jpg', allIndex: 0 },
      { url: 'http://imgqn.koudaitong.com/upload_files/2015/03/31/FrrAfBTgSyHxDZORPnH3Dc_J3R3Z.jpg', allIndex: 0}
    ],
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});