import { SpuiComponent } from '../common/component';
SpuiComponent({
  field: true,
  classes: ['icon-class'],
  props: {
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      value: 20
    },
    icon: {
      type: String,
      value: 'star'
    },
    voidIcon: {
      type: String,
      value: 'star-o'
    },
    color: {
      type: String,
      value: '#ffd21e'
    },
    voidColor: {
      type: String,
      value: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      value: '#bdbdbd'
    },
    count: {
      type: Number,
      value: 5
    },
    value: {
      type: Number,
      value: 0
    }
  },
  data: {
    innerValue: 0
  },
  watch: {
    value(value) {
      if (value !== this.data.innerValue) {
        this.set({
          innerValue: value
        });
      }
    }

  },
  computed: {
    list() {
      const {
        count,
        innerValue
      } = this.data;
      return Array.from({
        length: count
      }, (_, index) => index < innerValue);
    }

  },
  methods: {
    onSelect(event) {
      const {
        data
      } = this;
      const {
        index
      } = event.currentTarget.dataset;

      if (!data.disabled && !data.readonly) {
        this.set({
          innerValue: index + 1
        });
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    },

    onTouchMove(event) {
      const {
        clientX,
        clientY
      } = event.touches[0];
      this.getRect('.spui-rate__item', true).then(list => {
        const target = list.find(item => clientX >= item.left && clientX <= item.right && clientY >= item.top && clientY <= item.bottom);

        if (target != null) {
          this.onSelect(Object.assign({}, event, {
            currentTarget: target
          }));
        }
      });
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUvaW5kZXgudHMiXSwibmFtZXMiOlsiU3B1aUNvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwicmVhZG9ubHkiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJzaXplIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsInZvaWRJY29uIiwiY29sb3IiLCJ2b2lkQ29sb3IiLCJkaXNhYmxlZENvbG9yIiwiY291bnQiLCJkYXRhIiwiaW5uZXJWYWx1ZSIsIndhdGNoIiwic2V0IiwiY29tcHV0ZWQiLCJsaXN0IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0Iiwib25Ub3VjaE1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsInRvdWNoZXMiLCJnZXRSZWN0IiwidGhlbiIsInRhcmdldCIsImZpbmQiLCJpdGVtIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxhQUFULFFBQThCLHFCQUE5QjtBQUVBQSxhQUFhLENBQUM7QUFDWkMsRUFBQUEsS0FBSyxFQUFFLElBREs7QUFHWkMsRUFBQUEsT0FBTyxFQUFFLENBQUMsWUFBRCxDQUhHO0FBS1pDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUVDLE9BREw7QUFFTEMsSUFBQUEsUUFBUSxFQUFFRCxPQUZMO0FBR0xFLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUVDLE1BREY7QUFFSkMsTUFBQUEsS0FBSyxFQUFFO0FBRkgsS0FIRDtBQU9MQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkgsTUFBQUEsSUFBSSxFQUFFSSxNQURGO0FBRUpGLE1BQUFBLEtBQUssRUFBRTtBQUZILEtBUEQ7QUFXTEcsSUFBQUEsUUFBUSxFQUFFO0FBQ1JM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Q0FBYWtCLE1BQUEsQ0FBQUMsTUFBQSxDQUFBLEVBQUEsRUFDUmxCLEtBRFEsRUFDSDtBQUNSQyxZQUFBQSxhQUFhLEVBQUVTO0FBRFAsV0FERyxDQUFiO0FBSUQ7QUFDRixPQWREO0FBZUQ7O0FBN0JNO0FBN0RHLENBQUQsQ0FBYiIsImZpbGUiOiJyYXRlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3B1aUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5cclxuU3B1aUNvbXBvbmVudCh7XHJcbiAgZmllbGQ6IHRydWUsXHJcblxyXG4gIGNsYXNzZXM6IFsnaWNvbi1jbGFzcyddLFxyXG5cclxuICBwcm9wczoge1xyXG4gICAgcmVhZG9ubHk6IEJvb2xlYW4sXHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIHNpemU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMjBcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdzdGFyJ1xyXG4gICAgfSxcclxuICAgIHZvaWRJY29uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdzdGFyLW8nXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJyNmZmQyMWUnXHJcbiAgICB9LFxyXG4gICAgdm9pZENvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcjYzdjN2M3J1xyXG4gICAgfSxcclxuICAgIGRpc2FibGVkQ29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJyNiZGJkYmQnXHJcbiAgICB9LFxyXG4gICAgY291bnQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogNVxyXG4gICAgfSxcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiB7XHJcbiAgICBpbm5lclZhbHVlOiAwXHJcbiAgfSxcclxuXHJcbiAgd2F0Y2g6IHtcclxuICAgIHZhbHVlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5kYXRhLmlubmVyVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldCh7IGlubmVyVmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGxpc3QoKSB7XHJcbiAgICAgIGNvbnN0IHsgY291bnQsIGlubmVyVmFsdWUgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sIChfLCBpbmRleCkgPT4gaW5kZXggPCBpbm5lclZhbHVlKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvblNlbGVjdChldmVudDogV2VhcHAuRXZlbnQpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzO1xyXG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgIGlmICghZGF0YS5kaXNhYmxlZCAmJiAhZGF0YS5yZWFkb25seSkge1xyXG4gICAgICAgIHRoaXMuc2V0KHsgaW5uZXJWYWx1ZTogaW5kZXggKyAxIH0pO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgaW5kZXggKyAxKTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpbmRleCArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBXZWFwcC5Ub3VjaEV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQudG91Y2hlc1swXTtcclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVjdCgnLnNwdWktcmF0ZV9faXRlbScsIHRydWUpLnRoZW4obGlzdCA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbGlzdC5maW5kKFxyXG4gICAgICAgICAgaXRlbSA9PlxyXG4gICAgICAgICAgICBjbGllbnRYID49IGl0ZW0ubGVmdCAmJlxyXG4gICAgICAgICAgICBjbGllbnRYIDw9IGl0ZW0ucmlnaHQgJiZcclxuICAgICAgICAgICAgY2xpZW50WSA+PSBpdGVtLnRvcCAmJlxyXG4gICAgICAgICAgICBjbGllbnRZIDw9IGl0ZW0uYm90dG9tXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMub25TZWxlY3Qoe1xyXG4gICAgICAgICAgICAuLi5ldmVudCxcclxuICAgICAgICAgICAgY3VycmVudFRhcmdldDogdGFyZ2V0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==
