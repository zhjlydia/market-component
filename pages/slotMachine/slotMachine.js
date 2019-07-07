//index.js
//获取应用实例
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      id: 1,
      url: "../image/item1.jpg"
    }, {
      id: 2,
      url: "../image/item2.jpg"
    }, {
      id: 3,
      url: "../image/item3.jpg"
    }],
    startPosition:[0,1,2]
  },
  /* 
   *初始化加载数据
   */
  onLoad(options) {

  },
  /* 
   *"抽奖点击事件"
   */
  start() {
    console.log("hh")
    this.selectComponent('#slot-machine').start();
  }
})