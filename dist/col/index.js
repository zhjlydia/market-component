import { SpuiComponent } from '../common/component';
SpuiComponent({
  relation: {
    name: 'row',
    type: 'ancestor'
  },
  props: {
    span: Number,
    offset: Number
  },
  data: {
    style: ''
  },
  methods: {
    setGutter(gutter) {
      const padding = `${gutter / 2}px`;
      const style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';

      if (style !== this.data.style) {
        this.set({
          style
        });
      }
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbC9pbmRleC50cyJdLCJuYW1lcyI6WyJTcHVpQ29tcG9uZW50IiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsInByb3BzIiwic3BhbiIsIk51bWJlciIsIm9mZnNldCIsImRhdGEiLCJzdHlsZSIsIm1ldGhvZHMiLCJzZXRHdXR0ZXIiLCJndXR0ZXIiLCJwYWRkaW5nIiwic2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxhQUFULFFBQThCLHFCQUE5QjtBQUVBQSxhQUFhLENBQUM7QUFDWkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRSxLQURFO0FBRVJDLElBQUFBLElBQUksRUFBRTtBQUZFLEdBREU7QUFNWkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsTUFERDtBQUVMQyxJQUFBQSxNQUFNLEVBQUVEO0FBRkgsR0FOSztBQVdaRSxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsS0FBSyxFQUFFO0FBREgsR0FYTTtBQWVaQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsU0FBUyxDQUFDQyxNQUFELEVBQWU7QUFDdEIsWUFBTUMsT0FBTyxHQUFHLEdBQUdELE1BQU0sR0FBRyxDQUFDLElBQTdCO0FBQ0EsWUFBTUgsS0FBSyxHQUFHRyxNQUFNLEdBQUcsaUJBQWlCQyxPQUFPLG9CQUFvQkEsT0FBTyxHQUF0RCxHQUE0RCxFQUFoRjs7QUFDQSxVQUFJSixLQUFLLEtBQUssS0FBS0QsSUFBTCxDQUFVQyxLQUF4QixFQUErQjtBQUM3QixhQUFLSyxHQUFMLENBQVM7QUFBRUwsVUFBQUE7QUFBRixTQUFUO0FBQ0Q7QUFDRjs7QUFQTTtBQWZHLENBQUQsQ0FBYiIsImZpbGUiOiJjb2wvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHVpQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblxyXG5TcHVpQ29tcG9uZW50KHtcclxuICByZWxhdGlvbjoge1xyXG4gICAgbmFtZTogJ3JvdycsXHJcbiAgICB0eXBlOiAnYW5jZXN0b3InXHJcbiAgfSxcclxuXHJcbiAgcHJvcHM6IHtcclxuICAgIHNwYW46IE51bWJlcixcclxuICAgIG9mZnNldDogTnVtYmVyXHJcbiAgfSxcclxuXHJcbiAgZGF0YToge1xyXG4gICAgc3R5bGU6ICcnXHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0R3V0dGVyKGd1dHRlcjogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBgJHtndXR0ZXIgLyAyfXB4YDtcclxuICAgICAgY29uc3Qgc3R5bGUgPSBndXR0ZXIgPyBgcGFkZGluZy1sZWZ0OiAke3BhZGRpbmd9OyBwYWRkaW5nLXJpZ2h0OiAke3BhZGRpbmd9O2AgOiAnJztcclxuICAgICAgaWYgKHN0eWxlICE9PSB0aGlzLmRhdGEuc3R5bGUpIHtcclxuICAgICAgICB0aGlzLnNldCh7IHN0eWxlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19