import { SpuiComponent } from '../common/component';
SpuiComponent({
  classes: ['title-class'],
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClickLeft() {
      this.$emit('click-left');
    },

    onClickRight() {
      this.$emit('click-right');
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIvaW5kZXgudHMiXSwibmFtZXMiOlsiU3B1aUNvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZml4ZWQiLCJCb29sZWFuIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJib3JkZXIiLCJ0eXBlIiwidmFsdWUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCIkZW1pdCIsIm9uQ2xpY2tSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsYUFBVCxRQUE4QixxQkFBOUI7QUFFQUEsYUFBYSxDQUFDO0FBQ1pDLEVBQUFBLE9BQU8sRUFBRSxDQUFDLGFBQUQsQ0FERztBQUdaQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsS0FBSyxFQUFFQyxNQURGO0FBRUxDLElBQUFBLEtBQUssRUFBRUMsT0FGRjtBQUdMQyxJQUFBQSxRQUFRLEVBQUVILE1BSEw7QUFJTEksSUFBQUEsU0FBUyxFQUFFSixNQUpOO0FBS0xLLElBQUFBLFNBQVMsRUFBRUgsT0FMTjtBQU1MSSxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsSUFBSSxFQUFFTCxPQURBO0FBRU5NLE1BQUFBLEtBQUssRUFBRTtBQUZELEtBTkg7QUFVTEMsSUFBQUEsTUFBTSxFQUFFO0FBQ05GLE1BQUFBLElBQUksRUFBRUcsTUFEQTtBQUVORixNQUFBQSxLQUFLLEVBQUU7QUFGRDtBQVZILEdBSEs7QUFtQlpHLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxXQUFXLEdBQUE7QUFDVCxXQUFLQyxLQUFMLENBQVcsWUFBWDtBQUNELEtBSE07O0FBS1BDLElBQUFBLFlBQVksR0FBQTtBQUNWLFdBQUtELEtBQUwsQ0FBVyxhQUFYO0FBQ0Q7O0FBUE07QUFuQkcsQ0FBRCxDQUFiIiwiZmlsZSI6Im5hdi1iYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHVpQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblxyXG5TcHVpQ29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ3RpdGxlLWNsYXNzJ10sXHJcblxyXG4gIHByb3BzOiB7XHJcbiAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgZml4ZWQ6IEJvb2xlYW4sXHJcbiAgICBsZWZ0VGV4dDogU3RyaW5nLFxyXG4gICAgcmlnaHRUZXh0OiBTdHJpbmcsXHJcbiAgICBsZWZ0QXJyb3c6IEJvb2xlYW4sXHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICB6SW5kZXg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2tMZWZ0KCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdjbGljay1sZWZ0Jyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2tSaWdodCgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2stcmlnaHQnKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=
