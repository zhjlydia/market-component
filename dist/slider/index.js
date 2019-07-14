import { SpuiComponent } from '../common/component';
import { touch } from '../mixins/touch';
SpuiComponent({
  mixins: [touch],
  props: {
    disabled: Boolean,
    useButtonSlot: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      value: 100
    },
    min: {
      type: Number,
      value: 0
    },
    step: {
      type: Number,
      value: 1
    },
    value: {
      type: Number,
      value: 0
    },
    barHeight: {
      type: String,
      value: '2px'
    }
  },
  watch: {
    value(value) {
      this.updateValue(value, false);
    }

  },

  created() {
    this.updateValue(this.data.value);
  },

  methods: {
    onTouchStart(event) {
      if (this.data.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.data.value);
    },

    onTouchMove(event) {
      if (this.data.disabled) return;
      this.touchMove(event);
      this.getRect('.spui-slider').then(rect => {
        const diff = this.deltaX / rect.width * 100;
        this.updateValue(this.startValue + diff);
      });
    },

    onTouchEnd() {
      if (this.data.disabled) return;
      this.updateValue(this.data.value, true);
    },

    onClick(event) {
      if (this.data.disabled) return;
      this.getRect(rect => {
        const value = (event.detail.x - rect.left) / rect.width * 100;
        this.updateValue(value, true);
      });
    },

    updateValue(value, end) {
      value = this.format(value);
      this.set({
        value,
        barStyle: `width: ${value}%; height: ${this.data.barHeight};`
      });
      this.$emit('drag', {
        value
      });

      if (end) {
        this.$emit('change', value);
      }
    },

    format(value) {
      const {
        max,
        min,
        step
      } = this.data;
      return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci9pbmRleC50cyJdLCJuYW1lcyI6WyJTcHVpQ29tcG9uZW50IiwidG91Y2giLCJtaXhpbnMiLCJwcm9wcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsInVzZUJ1dHRvblNsb3QiLCJhY3RpdmVDb2xvciIsIlN0cmluZyIsImluYWN0aXZlQ29sb3IiLCJtYXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtaW4iLCJzdGVwIiwiYmFySGVpZ2h0Iiwid2F0Y2giLCJ1cGRhdGVWYWx1ZSIsImNyZWF0ZWQiLCJkYXRhIiwibWV0aG9kcyIsIm9uVG91Y2hTdGFydCIsImV2ZW50IiwidG91Y2hTdGFydCIsInN0YXJ0VmFsdWUiLCJmb3JtYXQiLCJvblRvdWNoTW92ZSIsInRvdWNoTW92ZSIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsImRpZmYiLCJkZWx0YVgiLCJ3aWR0aCIsIm9uVG91Y2hFbmQiLCJvbkNsaWNrIiwiZGV0YWlsIiwieCIsImxlZnQiLCJlbmQiLCJzZXQiLCJiYXJTdHlsZSIsIiRlbWl0IiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxhQUFULFFBQThCLHFCQUE5QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsaUJBQXRCO0FBRUFELGFBQWEsQ0FBQztBQUNaRSxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0QsS0FBRCxDQURJO0FBR1pFLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUVDLE9BREw7QUFFTEMsSUFBQUEsYUFBYSxFQUFFRCxPQUZWO0FBR0xFLElBQUFBLFdBQVcsRUFBRUMsTUFIUjtBQUlMQyxJQUFBQSxhQUFhLEVBQUVELE1BSlY7QUFLTEUsSUFBQUEsR0FBRyxFQUFFO0FBQ0hDLE1BQUFBLElBQUksRUFBRUMsTUFESDtBQUVIQyxNQUFBQSxLQUFLLEVBQUU7QUFGSixLQUxBO0FBU0xDLElBQUFBLEdBQUcsRUFBRTtBQUNISCxNQUFBQSxJQUFJLEVBQUVDLE1BREg7QUFFSEMsTUFBQUEsS0FB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QUFPSSxRQUFBQSxHQUFQO0FBQVlDLFFBQUFBO0FBQVosVUFBcUIsS0FBS0ssSUFBaEM7QUFDQSxhQUFPd0IsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ2xDLEdBQUwsQ0FBU0ksR0FBVCxFQUFjOEIsSUFBSSxDQUFDOUIsR0FBTCxDQUFTRCxLQUFULEVBQWdCSCxHQUFoQixDQUFkLElBQXNDSyxJQUFqRCxJQUF5REEsSUFBaEU7QUFDRDs7QUFsRE07QUF4Q0csQ0FBRCxDQUFiIiwiZmlsZSI6InNsaWRlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwdWlDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG91Y2ggfSBmcm9tICcuLi9taXhpbnMvdG91Y2gnO1xyXG5cclxuU3B1aUNvbXBvbmVudCh7XHJcbiAgbWl4aW5zOiBbdG91Y2hdLFxyXG5cclxuICBwcm9wczoge1xyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICB1c2VCdXR0b25TbG90OiBCb29sZWFuLFxyXG4gICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcclxuICAgIGluYWN0aXZlQ29sb3I6IFN0cmluZyxcclxuICAgIG1heDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxMDBcclxuICAgIH0sXHJcbiAgICBtaW46IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIHN0ZXA6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfSxcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcbiAgICBiYXJIZWlnaHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJzJweCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB3YXRjaDoge1xyXG4gICAgdmFsdWUodmFsdWUpIHtcclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBXZWFwcC5Ub3VjaEV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XHJcbiAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRoaXMuZm9ybWF0KHRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBXZWFwcC5Ub3VjaEV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMudG91Y2hNb3ZlKGV2ZW50KTtcclxuICAgICAgdGhpcy5nZXRSZWN0KCcuc3B1aS1zbGlkZXInKS50aGVuKHJlY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLmRlbHRhWCAvIHJlY3Qud2lkdGggKiAxMDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnN0YXJ0VmFsdWUgKyBkaWZmKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLmRhdGEudmFsdWUsIHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrKGV2ZW50OiBXZWFwcC5Ub3VjaEV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVjdChyZWN0ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IChldmVudC5kZXRhaWwueCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoICogMTAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVmFsdWUodmFsdWUsIGVuZCkge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0KHZhbHVlKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0KHtcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBiYXJTdHlsZTogYHdpZHRoOiAke3ZhbHVlfSU7IGhlaWdodDogJHt0aGlzLmRhdGEuYmFySGVpZ2h0fTtgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kZW1pdCgnZHJhZycsIHsgdmFsdWUgfSk7XHJcblxyXG4gICAgICBpZiAoZW5kKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGZvcm1hdCh2YWx1ZSkge1xyXG4gICAgICBjb25zdCB7IG1heCwgbWluLCBzdGVwIH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpIC8gc3RlcCkgKiBzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==
