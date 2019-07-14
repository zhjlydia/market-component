import { SpuiComponent } from '../common/component';
import { touch } from '../mixins/touch';
const THRESHOLD = 0.15;
SpuiComponent({
  props: {
    disabled: Boolean,
    leftWidth: {
      type: Number,
      value: 0
    },
    rightWidth: {
      type: Number,
      value: 0
    },
    asyncClose: Boolean
  },
  mixins: [touch],
  data: {
    offset: 0,
    draging: false
  },
  computed: {
    wrapperStyle() {
      const {
        offset,
        draging
      } = this.data;
      const transform = `translate3d(${offset}px, 0, 0)`;
      const transition = draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)';
      return `
        -webkit-transform: ${transform};
        -webkit-transition: ${transition};
        transform: ${transform};
        transition: ${transition};
      `;
    }

  },
  methods: {
    onTransitionend() {
      this.swipe = false;
    },

    open(position) {
      const {
        leftWidth,
        rightWidth
      } = this.data;
      const offset = position === 'left' ? leftWidth : -rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },

    close() {
      this.set({
        offset: 0
      });
    },

    resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },

    swipeMove(offset = 0) {
      this.set({
        offset
      });
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },

    swipeLeaveTransition(direction) {
      const {
        offset,
        leftWidth,
        rightWidth
      } = this.data;
      const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },

    startDrag(event) {
      if (this.data.disabled) {
        return;
      }

      this.set({
        draging: true
      });
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.data.offset;
      }
    },

    onDrag(event) {
      if (this.data.disabled) {
        return;
      }

      this.touchMove(event);
      const {
        deltaX
      } = this;
      const {
        leftWidth,
        rightWidth
      } = this.data;

      if (deltaX < 0 && (-deltaX > rightWidth || !rightWidth) || deltaX > 0 && (deltaX > leftWidth || deltaX > 0 && !leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        this.swipeMove(deltaX);
      }
    },

    endDrag() {
      if (this.data.disabled) {
        return;
      }

      this.set({
        draging: false
      });

      if (this.swiping) {
        this.swipeLeaveTransition(this.data.offset > 0 ? -1 : 1);
      }
    },

    onClick(event) {
      const {
        key: position = 'outside'
      } = event.currentTarget.dataset;
      this.$emit('click', position);

      if (!this.data.offset) {
        return;
      }

      if (this.data.asyncClose) {
        this.$emit('close', {
          position,
          instance: this
        });
      } else {
        this.swipeMove(0);
      }
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlLWNlbGwvaW5kZXgudHMiXSwibmFtZXMiOlsiU3B1aUNvbXBvbmVudCIsInRvdWNoIiwiVEhSRVNIT0xEIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJsZWZ0V2lkdGgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJyaWdodFdpZHRoIiwiYXN5bmNDbG9zZSIsIm1peGlucyIsImRhdGEiLCJvZmZzZXQiLCJkcmFnaW5nIiwiY29tcHV0ZWQiLCJ3cmFwcGVyU3R5bGUiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwibWV0aG9kcyIsIm9uVHJhbnNpdGlvbmVuZCIsInN3aXBlIiwib3BlbiIsInBvc2l0aW9uIiwic3dpcGVNb3ZlIiwicmVzZXRTd2lwZVN0YXR1cyIsImNsb3NlIiwic2V0Iiwic3dpcGluZyIsIm9wZW5lZCIsInN3aXBlTGVhdmVUcmFuc2l0aW9uIiwiZGlyZWN0aW9uIiwidGhyZXNob2xkIiwic3RhcnREcmFnIiwiZXZlbnQiLCJ0b3VjaFN0YXJ0Iiwic3RhcnRYIiwib25EcmFnIiwidG91Y2hNb3ZlIiwiZGVsdGFYIiwiZW5kRHJhZyIsIm9uQ2xpY2siLCJrZXkiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0IiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGFBQVQsUUFBOEIscUJBQTlCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixpQkFBdEI7QUFFQSxNQUFNQyxTQUFTLEdBQUcsSUFBbEI7QUFFQUYsYUFBYSxDQUFDO0FBQ1pHLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUVDLE9BREw7QUFFTEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RDLE1BQUFBLElBQUksRUFBRUMsTUFERztBQUVUQyxNQUFBQSxLQUFLLEVBQUU7QUFGRSxLQUZOO0FBTUxDLElBQUFBLFVBQVUsRUFBRTtBQUNWSCxNQUFBQSxJQUFJLEVBQUVDLE1BREk7QUFFVkMsTUFBQUEsS0FBSyxFQUFFO0FBRkcs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QUFHO0FBQWxCLFVBQWdDVyxLQUFLLENBQUNTLGFBQU4sQ0FBb0JDLE9BQTFEO0FBQ0EsV0FBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0J0QixRQUFwQjs7QUFFQSxVQUFJLENBQUMsS0FBS1gsSUFBTCxDQUFVQyxNQUFmLEVBQXVCO0FBQ3JCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLRCxJQUFMLENBQVVGLFVBQWQsRUFBMEI7QUFDeEIsYUFBS21DLEtBQUwsQ0FBVyxPQUFYLEVBQW9CO0FBQUV0QixVQUFBQSxRQUFGO0FBQVl1QixVQUFBQSxRQUFRLEVBQUU7QUFBdEIsU0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLdEIsU0FBTCxDQUFlLENBQWY7QUFDRDtBQUNGOztBQXBHTTtBQW5DRyxDQUFELENBQWIiLCJmaWxlIjoic3dpcGUtY2VsbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwdWlDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG91Y2ggfSBmcm9tICcuLi9taXhpbnMvdG91Y2gnO1xyXG5cclxuY29uc3QgVEhSRVNIT0xEID0gMC4xNTtcclxuXHJcblNwdWlDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIGxlZnRXaWR0aDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgcmlnaHRXaWR0aDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgYXN5bmNDbG9zZTogQm9vbGVhblxyXG4gIH0sXHJcblxyXG4gIG1peGluczogW3RvdWNoXSxcclxuXHJcbiAgZGF0YToge1xyXG4gICAgb2Zmc2V0OiAwLFxyXG4gICAgZHJhZ2luZzogZmFsc2VcclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgd3JhcHBlclN0eWxlKCkge1xyXG4gICAgICBjb25zdCB7IG9mZnNldCwgZHJhZ2luZyB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtvZmZzZXR9cHgsIDAsIDApYDtcclxuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IGRyYWdpbmcgPyAnbm9uZScgOiAnLjZzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxKSc7XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICR7dHJhbnNmb3JtfTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICR7dHJhbnNpdGlvbn07XHJcbiAgICAgICAgdHJhbnNmb3JtOiAke3RyYW5zZm9ybX07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJHt0cmFuc2l0aW9ufTtcclxuICAgICAgYDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvblRyYW5zaXRpb25lbmQoKSB7XHJcbiAgICAgIHRoaXMuc3dpcGUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgb3Blbihwb3NpdGlvbikge1xyXG4gICAgICBjb25zdCB7IGxlZnRXaWR0aCwgcmlnaHRXaWR0aCB9ID0gdGhpcy5kYXRhO1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gbGVmdFdpZHRoIDogLXJpZ2h0V2lkdGg7XHJcbiAgICAgIHRoaXMuc3dpcGVNb3ZlKG9mZnNldCk7XHJcbiAgICAgIHRoaXMucmVzZXRTd2lwZVN0YXR1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgdGhpcy5zZXQoeyBvZmZzZXQ6IDAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0U3dpcGVTdGF0dXMoKSB7XHJcbiAgICAgIHRoaXMuc3dpcGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHN3aXBlTW92ZShvZmZzZXQgPSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0KHsgb2Zmc2V0IH0pO1xyXG4gICAgICBvZmZzZXQgJiYgKHRoaXMuc3dpcGluZyA9IHRydWUpO1xyXG4gICAgICAhb2Zmc2V0ICYmICh0aGlzLm9wZW5lZCA9IGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3dpcGVMZWF2ZVRyYW5zaXRpb24oZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHsgb2Zmc2V0LCBsZWZ0V2lkdGgsIHJpZ2h0V2lkdGggfSA9IHRoaXMuZGF0YTtcclxuICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5vcGVuZWQgPyAxIC0gVEhSRVNIT0xEIDogVEhSRVNIT0xEO1xyXG5cclxuICAgICAgLy8gcmlnaHRcclxuICAgICAgaWYgKGRpcmVjdGlvbiA+IDAgJiYgLW9mZnNldCA+IHJpZ2h0V2lkdGggKiB0aHJlc2hvbGQgJiYgcmlnaHRXaWR0aCA+IDApIHtcclxuICAgICAgICB0aGlzLm9wZW4oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgLy8gbGVmdFxyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA8IDAgJiYgb2Zmc2V0ID4gbGVmdFdpZHRoICogdGhyZXNob2xkICYmIGxlZnRXaWR0aCA+IDApIHtcclxuICAgICAgICB0aGlzLm9wZW4oJ2xlZnQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN3aXBlTW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0RHJhZyhldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldCh7IGRyYWdpbmc6IHRydWUgfSk7XHJcbiAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WCAtPSB0aGlzLmRhdGEub2Zmc2V0O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRHJhZyhldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvdWNoTW92ZShldmVudCk7XHJcbiAgICAgIGNvbnN0IHsgZGVsdGFYIH0gPSB0aGlzO1xyXG4gICAgICBjb25zdCB7IGxlZnRXaWR0aCwgcmlnaHRXaWR0aCB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIChkZWx0YVggPCAwICYmICgtZGVsdGFYID4gcmlnaHRXaWR0aCB8fCAhcmlnaHRXaWR0aCkpIHx8XHJcbiAgICAgICAgKGRlbHRhWCA+IDAgJiYgKGRlbHRhWCA+IGxlZnRXaWR0aCB8fCAoZGVsdGFYID4gMCAmJiAhbGVmdFdpZHRoKSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICB0aGlzLnN3aXBlTW92ZShkZWx0YVgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVuZERyYWcoKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0KHsgZHJhZ2luZzogZmFsc2UgfSk7XHJcbiAgICAgIGlmICh0aGlzLnN3aXBpbmcpIHtcclxuICAgICAgICB0aGlzLnN3aXBlTGVhdmVUcmFuc2l0aW9uKHRoaXMuZGF0YS5vZmZzZXQgPiAwID8gLTEgOiAxKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHsga2V5OiBwb3NpdGlvbiA9ICdvdXRzaWRlJyB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5kYXRhLm9mZnNldCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCB7IHBvc2l0aW9uLCBpbnN0YW5jZTogdGhpcyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN3aXBlTW92ZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==
