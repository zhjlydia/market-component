//index.js
//获取应用实例
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{ url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }, { url: "../../image/item1.jpg", text: "奖品1" }],
    endPosition:1
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
    this.selectComponent('#fruit-machine').start();
  }
})