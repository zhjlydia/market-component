//index.js
//获取应用实例
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: ["../../image/item1.jpg", "../../image/item2.jpg", "../../image/item3.jpg"],
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