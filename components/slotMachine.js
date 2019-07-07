// components/slotM.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    intervalTime: { // 各列动画开始的间隔时间 最小值 300ms
      type: Number,
      value: 300
    },
    itemWidth: { // 元素宽度
      type: Number,
      value: 200
    },
    itemHeight: { // 元素高度
      type: Number,
      value: 200
    },
    speed: { // 中间时刻动画速度，开始和结束时递减
      type: Number,
      value: 40
    },
    turn: { // 第一列的圈数，每列递增2圈，需保证最后一列是最后停下来的
      type: Number,
      value: 20
    },
    items: {
      type:Array,
      value:[],
      observer: function (newVal, oldVal, changedPath) {
        if (newVal) {
          let uiItems=JSON.parse(JSON.stringify(this.data.items))
          uiItems.push(this.data.items[0])
          this.setData({
            uiItems: uiItems,
          })
        }
      }
    },
    /** 初始状态时各个的位置 items的下标 */
    startPosition:{
      type:Array,
      value:[0,0,0],
      observer: function (newVal, oldVal, changedPath) {
        if (newVal) {
          this.makeUiItems(newVal)
        }
      }
    },
    /** 初始状态时各个的位置 items的下标 */
    endPosition:{
      type: Array,
      value:[0,0,0]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    uiItems:[],
    isRunning:false,
    transY:[]
  },
  lifetimes: {
    attached: function () {
      this.makeUiItems(this.data.startPosition);
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    makeUiItems(position){
      let transY = position.map((item) => {
        return item * this.data.itemHeight
      })
      this.setData({
        transY: transY,
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
      let columnInstance = [];
      for (var i = 0; i < data.startPosition.length; i++) {
        let itemInstance = {
          currentTurn:1,
          currentTransY: data.startPosition[i] * data.itemHeight,
          totalTransY: data.startPosition[i] * data.itemHeight,
          endTransY: data.endPosition[i] * data.itemHeight,
          handle:null
        }
        columnInstance.push(itemInstance)
      }
      let intervalTime = data.intervalTime > 300 ? data.intervalTime:300
      const totalHeight=data.itemHeight*data.items.length
      this.timer=setInterval(()=>{
        columnInstance.forEach((item,i)=>{
          item.handle=setTimeout(()=>{   
            let startY = data.startPosition[i] * data.itemHeight;
            let endY = data.endPosition[i] * data.itemHeight;
            // 为保证依次停下，每列圈数递增2
            let totalTurn = data.turn + i * 2;
            // 设置速度，开始结束缓慢
            let speed = (totalTurn / 2 - Math.abs(totalTurn / 2 - item.currentTurn)) * data.speed / (totalTurn / 2);

            item.currentTransY+=speed;
            item.totalTransY +=speed

            if (item.currentTransY >= totalHeight) {
              item.currentTransY -= totalHeight
            }
            if (item.totalTransY >= totalHeight * item.currentTurn) {
              item.currentTurn++
            }
            //马上快要停下
            if (item.currentTurn >= totalTurn - 1){
              if (item.currentTransY >= item.endTransY) {
                item.currentTransY = item.endTransY
                if (i === columnInstance.length - 1) {
                  this.setData({
                    isRunning: false
                  })
                }
              }
            }       
          },intervalTime*i)
        })

        let transY = columnInstance.map((item) => {
          return item.currentTransY
        })
        this.setData({
          transY: transY,
        })
        if(!this.data.isRunning){
          clearInterval(this.timer)
          columnInstance.map((t) => {
            clearTimeout(t.handle)
          })
        }
      },1000/60)
    }
  }
})
