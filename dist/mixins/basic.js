export const basic = Behavior({
  methods: {
    $emit() {
      this.triggerEvent.apply(this, arguments);
    },

    getRect(selector, all) {
      return new Promise(resolve => {
        wx.createSelectorQuery().in(this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(rect => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9iYXNpYy50cyJdLCJuYW1lcyI6WyJiYXNpYyIsIkJlaGF2aW9yIiwibWV0aG9kcyIsIiRlbWl0IiwidHJpZ2dlckV2ZW50IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXRSZWN0Iiwic2VsZWN0b3IiLCJhbGwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImV4ZWMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUM7QUFDNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEdBQUE7QUFDSCxXQUFLQyxZQUFMLENBQWtCQyxLQUFsQixDQUF3QixJQUF4QixFQUE4QkMsU0FBOUI7QUFDRCxLQUhNOztBQUtQQyxJQUFBQSxPQUFPLENBQUNDLFFBQUQsRUFBV0MsR0FBWCxFQUFjO0FBQ25CLGFBQU8sSUFBSUMsT0FBSixDQUFZQyxPQUFPLElBQUc7QUFDM0JDLFFBQUFBLEVBQUUsQ0FBQ0MsbUJBQUgsR0FDR0MsRUFESCxDQUNNLElBRE4sRUFDWUwsR0FBRyxHQUFHLFdBQUgsR0FBaUIsUUFEaEMsRUFDMENELFFBRDFDLEVBRUdPLGtCQUZILENBRXNCQyxJQUFJLElBQUc7QUFDekIsY0FBSVAsR0FBRyxJQUFJUSxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsSUFBZCxDQUFQLElBQThCQSxJQUFJLENBQUNHLE1BQXZDLEVBQStDO0FBQzdDUixZQUFBQSxPQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNEOztBQUVELGNBQUksQ0FBQ1AsR0FBRCxJQUFRTyxJQUFaLEVBQWtCO0FBQ2hCTCxZQUFBQSxPQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNEO0FBQ0YsU0FWSCxFQVdHSSxJQVhIO0FBWUQsT0FiTSxDQUFQO0FBY0Q7O0FBcEJNO0FBRG1CLENBQUQsQ0FBdEIiLCJmaWxlIjoibWl4aW5zL2Jhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJhc2ljID0gQmVoYXZpb3Ioe1xyXG4gIG1ldGhvZHM6IHtcclxuICAgICRlbWl0KCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRSZWN0KHNlbGVjdG9yLCBhbGwpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxyXG4gICAgICAgICAgLmluKHRoaXMpW2FsbCA/ICdzZWxlY3RBbGwnIDogJ3NlbGVjdCddKHNlbGVjdG9yKVxyXG4gICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChyZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZWN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFhbGwgJiYgcmVjdCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZXhlYygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=
