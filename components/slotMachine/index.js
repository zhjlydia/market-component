// components/slotM.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /** 各列动画开始的间隔时间 最小值 300ms */
    intervalTime: {
      type: Number,
      value: 300
    },
    /** 元素宽度 */
    itemWidth: {
      type: Number,
      value: 200
    },
    /** 元素高度 */
    itemHeight: {
      type: Number,
      value: 200
    },
    /** 最大动画速度，开始和结束时递减 */
    speed: {
      type: Number,
      value: 30
    },
    /** 第一列的圈数，每列递增2圈，需保证最后一列是最后停下来的 */
    turn: {
      type: Number,
      value: 20
    },
    /** 图片元素列表 字符串形式 string[] */
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
          this.makeTransItems(newVal)
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
      this.makeTransItems(this.data.startPosition);
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    makeTransItems(position){
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
          speed:0,
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
            if ((item.currentTurn < totalTurn - 3) && item.speed < data.speed){
              item.speed+=0.2
            }
            if ((item.currentTurn >= totalTurn - 3)&& item.speed>=5){
              item.speed-=1
            }
            item.currentTransY+=item.speed;
            item.totalTransY +=item.speed

            if (item.currentTransY >= totalHeight) {
              item.currentTransY -= totalHeight
            }
            if (item.totalTransY >= totalHeight * item.currentTurn) {
              item.currentTurn++
            }
            //马上快要停下
            if (item.currentTurn > totalTurn - 1){
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
