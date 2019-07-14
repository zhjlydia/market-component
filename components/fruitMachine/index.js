
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /** 最小时间间隔(ms)  */
    baseInterval: {
      type: Number,
      value: 40
    },
    /** 最大时间间隔(ms)  */
    maxInterval: {
      type: Number,
      value: 300
    },
    /** 圈数 */
    turn: {
      type: Number,
      value: 5
    },
    /** 图片元素列表*/
    items: {
      type:Array,
      value:[],
      observer: function (newVal, oldVal, changedPath) {
        if (newVal) {
          this.makeUiItems(newVal)
        }
      }
    },
    /** 结束时的下标 */
    endPosition:{
      type: Number,
      value:0
    },
    order:{
      type: Array,
      value: [0,1,2,3,4,5,6,7]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    uiItems:[],
    isRunning:false,
    currentIndex:0
  },
  lifetimes: {
    attached: function () {
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    makeUiItems(items) {
      let uiItems = JSON.parse(JSON.stringify(this.data.items))
      this.setData({
        uiItems: uiItems,
      })
    },
    start(){
      let data=this.data;
      if(data.isRunning){
        return
      }
      this.setData({
        isRunning:true
      })
      this.currentCount=0
      this.totalCount = (data.turn + 1) * data.items.length + data.endPosition
      this.run()
    },
    run(){
      let data=this.data;
      if (this.currentCount < this.totalCount ){
        let currentIndex = data.currentIndex
        if (++currentIndex > data.items.length-1) {
          currentIndex = 0;
        }
        this.setData({
          currentIndex: currentIndex
        })
        this.currentCount++
        const interval = this.easeInterval(
          this.currentCount,
          data.baseInterval,
          data.maxInterval,
          this.totalCount
        );
        setTimeout(this.run.bind(this), interval)
      }
      else{
        this.setData({
          isRunning: false
        })
      }  
    },
    easeInterval(start, base, max, end) {
      return max * (start / end) + base;
    }
  }
})
