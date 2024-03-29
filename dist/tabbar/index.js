import { SpuiComponent } from '../common/component';
import { iphonex } from '../mixins/iphonex';
SpuiComponent({
  mixins: [iphonex],
  relation: {
    name: 'tabbar-item',
    type: 'descendant',

    linked(target) {
      this.data.items.push(target);
      setTimeout(() => {
        this.setActiveItem();
      });
    },

    unlinked(target) {
      this.data.items = this.data.items.filter(item => item !== target);
      setTimeout(() => {
        this.setActiveItem();
      });
    }

  },
  props: {
    active: Number,
    activeColor: String,
    fixed: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  data: {
    items: [],
    currentActive: -1
  },
  watch: {
    active(active) {
      this.set({
        currentActive: active
      });
      this.setActiveItem();
    }

  },

  created() {
    this.set({
      currentActive: this.data.active
    });
  },

  methods: {
    setActiveItem() {
      this.data.items.forEach((item, index) => {
        item.setActive({
          active: index === this.data.currentActive,
          color: this.data.activeColor
        });
      });
    },

    onChange(child) {
      const active = this.data.items.indexOf(child);

      if (active !== this.data.currentActive && active !== -1) {
        this.$emit('change', active);
        this.set({
          currentActive: active
        });
        this.setActiveItem();
      }
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmJhci9pbmRleC50cyJdLCJuYW1lcyI6WyJTcHVpQ29tcG9uZW50IiwiaXBob25leCIsIm1peGlucyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJkYXRhIiwiaXRlbXMiLCJwdXNoIiwic2V0VGltZW91dCIsInNldEFjdGl2ZUl0ZW0iLCJ1bmxpbmtlZCIsImZpbHRlciIsIml0ZW0iLCJwcm9wcyIsImFjdGl2ZSIsIk51bWJlciIsImFjdGl2ZUNvbG9yIiwiU3RyaW5nIiwiZml4ZWQiLCJCb29sZWFuIiwidmFsdWUiLCJ6SW5kZXgiLCJjdXJyZW50QWN0aXZlIiwid2F0Y2giLCJzZXQiLCJjcmVhdGVkIiwibWV0aG9kcyIsImZvckVhY2giLCJpbmRleCIsInNldEFjdGl2ZSIsImNvbG9yIiwib25DaGFuZ2UiLCJjaGlsZCIsImluZGV4T2YiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsYUFBVCxRQUE4QixxQkFBOUI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLG1CQUF4QjtBQUVBRCxhQUFhLENBQUM7QUFDWkUsRUFBQUEsTUFBTSxFQUFFLENBQUNELE9BQUQsQ0FESTtBQUdaRSxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFLGFBREU7QUFFUkMsSUFBQUEsSUFBSSxFQUFFLFlBRkU7O0FBR1JDLElBQUFBLE1BQU0sQ0FBQ0MsTUFBRCxFQUF3QjtBQUM1QixXQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLENBQXFCSCxNQUFyQjtBQUNBSSxNQUFBQSxVQUFVLENBQUMsTUFBSztBQUNkLGFBQUtDLGFBQUw7QUFDRCxPQUZTLENBQVY7QUFHRCxLQVJPOztBQVNSQyxJQUFBQSxRQUFRLENBQUNOLE1BQUQsRUFBd0I7QUFDOUIsV0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQkssTUFBaEIsQ0FBdUJDLElBQUksSUFBSUEsSUFBSSxLQUFLUixNQUF4QyxDQUFsQjtBQUNBSSxNQUFBQSxVQUFVLENBQUMsTUFBSztBQUNkLGFBQUtDLGFBQUw7QUFDRCxPQUZTLENBQVY7QUFHRDs7QUFkTyxHQUhFO0FBb0JaSSxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFQyxNQURIO0FBRUxDLElBQUFBLFdBQVcsRUFBRUMsTUFGUjtBQUdMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTGhCLE1BQUFBLElBQUksRUFBRWlCLE9BREQ7QUFFTEMsTUFBQUEsS0FBSyxFQUFFO0FBRkYsS0FIRjtBQU9MQyxJQUFBQSxNQUFNLEVBQUU7QUFDTm5CLE1BQUFBLElBQUksRUFBRWEsTUFEQTtBQUVOSyxNQUFBQSxLQUFLLEVBQUU7QUFGRDtBQVBILEdBcEJLO0FBaUNaZixFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsS0FBSyxFQUFFLEVBREg7QUFFSmdCLElBQUFBLGFBQWEsRUFBRSxDQUFDO0FBRlosR0FqQ007QUFzQ1pDLEVBQUFBLEtBQUssRUFBRTtBQUNMVCxJQUFBQSxNQUFNLENBQUNBLE1BQUQsRUFBTztBQUNYLFdBQUtVLEdBQUwsQ0FBUztBQUFFRixRQUFBQSxhQUFhLEVBQUVSO0FBQWpCLE9BQVQ7QUFDQSxXQUFLTCxhQUFMO0FBQ0Q7O0FBSkksR0F0Q0s7O0FBNkNaZ0IsRUFBQUEsT0FBTyxHQUFBO0FBQ0wsU0FBS0QsR0FBTCxDQUFTO0FBQUVGLE1BQUFBLGFBQWEsRUFBRSxLQUFLakIsSUFBTCxDQUFVUztBQUEzQixLQUFUO0FBQ0QsR0EvQ1c7O0FBaURaWSxFQUFBQSxPQUFPLEVBQUU7QUFDUGpCLElBQUFBLGFBQWEsR0FBQTtBQUNYLFdBQUtKLElBQUwsQ0FBVUMsS0FBVixDQUFnQnFCLE9BQWhCLENBQXdCLENBQUNmLElBQUQsRUFBT2dCLEtBQVAsS0FBZ0I7QUFDdENoQixRQUFBQSxJQUFJLENBQUNpQixTQUFMLENBQWU7QUFDYmYsVUFBQUEsTUFBTSxFQUFFYyxLQUFLLEtBQUssS0FBS3ZCLElBQUwsQ0FBVWlCLGFBRGY7QUFFYlEsVUFBQUEsS0FBSyxFQUFFLEtBQUt6QixJQUFMLENBQVVXO0FBRkosU0FBZjtBQUlELE9BTEQ7QUFNRCxLQVJNOztBQVVQZSxJQUFBQSxRQUFRLENBQUNDLEtBQUQsRUFBTTtBQUNaLFlBQU1sQixNQUFNLEdBQUcsS0FBS1QsSUFBTCxDQUFVQyxLQUFWLENBQWdCMkIsT0FBaEIsQ0FBd0JELEtBQXhCLENBQWY7O0FBQ0EsVUFBSWxCLE1BQU0sS0FBSyxLQUFLVCxJQUFMLENBQVVpQixhQUFyQixJQUFzQ1IsTUFBTSxLQUFLLENBQUMsQ0FBdEQsRUFBeUQ7QUFDdkQsYUFBS29CLEtBQUwsQ0FBVyxRQUFYLEVBQXFCcEIsTUFBckI7QUFDQSxhQUFLVSxHQUFMLENBQVM7QUFBRUYsVUFBQUEsYUFBYSxFQUFFUjtBQUFqQixTQUFUO0FBQ0EsYUFBS0wsYUFBTDtBQUNEO0FBQ0Y7O0FBakJNO0FBakRHLENBQUQsQ0FBYiIsImZpbGUiOiJ0YWJiYXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHVpQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlwaG9uZXggfSBmcm9tICcuLi9taXhpbnMvaXBob25leCc7XHJcblxyXG5TcHVpQ29tcG9uZW50KHtcclxuICBtaXhpbnM6IFtpcGhvbmV4XSxcclxuXHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICd0YWJiYXItaXRlbScsXHJcbiAgICB0eXBlOiAnZGVzY2VuZGFudCcsXHJcbiAgICBsaW5rZWQodGFyZ2V0OiBXZWFwcC5Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5kYXRhLml0ZW1zLnB1c2godGFyZ2V0KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVubGlua2VkKHRhcmdldDogV2VhcHAuQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuZGF0YS5pdGVtcyA9IHRoaXMuZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcHJvcHM6IHtcclxuICAgIGFjdGl2ZTogTnVtYmVyLFxyXG4gICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcclxuICAgIGZpeGVkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgekluZGV4OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDFcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiB7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjdXJyZW50QWN0aXZlOiAtMVxyXG4gIH0sXHJcblxyXG4gIHdhdGNoOiB7XHJcbiAgICBhY3RpdmUoYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuc2V0KHsgY3VycmVudEFjdGl2ZTogYWN0aXZlIH0pO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zZXQoeyBjdXJyZW50QWN0aXZlOiB0aGlzLmRhdGEuYWN0aXZlIH0pO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNldEFjdGl2ZUl0ZW0oKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc2V0QWN0aXZlKHtcclxuICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IHRoaXMuZGF0YS5jdXJyZW50QWN0aXZlLFxyXG4gICAgICAgICAgY29sb3I6IHRoaXMuZGF0YS5hY3RpdmVDb2xvclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DaGFuZ2UoY2hpbGQpIHtcclxuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5kYXRhLml0ZW1zLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmRhdGEuY3VycmVudEFjdGl2ZSAmJiBhY3RpdmUgIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgYWN0aXZlKTtcclxuICAgICAgICB0aGlzLnNldCh7IGN1cnJlbnRBY3RpdmU6IGFjdGl2ZSB9KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==
