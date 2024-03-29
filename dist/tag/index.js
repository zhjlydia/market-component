import { SpuiComponent } from '../common/component';
import { RED, BLUE, GREEN } from '../common/color';
const DEFAULT_COLOR = '#999';
const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
};
SpuiComponent({
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String
  },
  computed: {
    style() {
      const color = this.data.color || COLOR_MAP[this.data.type] || DEFAULT_COLOR;
      const key = this.data.plain ? 'color' : 'background-color';
      const style = {
        [key]: color
      };

      if (this.data.textColor) {
        style.color = this.data.textColor;
      }

      return Object.keys(style).map(key => `${key}: ${style[key]}`).join(';');
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZy9pbmRleC50cyJdLCJuYW1lcyI6WyJTcHVpQ29tcG9uZW50IiwiUkVEIiwiQkxVRSIsIkdSRUVOIiwiREVGQVVMVF9DT0xPUiIsIkNPTE9SX01BUCIsImRhbmdlciIsInByaW1hcnkiLCJzdWNjZXNzIiwicHJvcHMiLCJzaXplIiwiU3RyaW5nIiwidHlwZSIsIm1hcmsiLCJCb29sZWFuIiwiY29sb3IiLCJwbGFpbiIsInJvdW5kIiwidGV4dENvbG9yIiwiY29tcHV0ZWQiLCJzdHlsZSIsImRhdGEiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsYUFBVCxRQUE4QixxQkFBOUI7QUFDQSxTQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLEtBQXBCLFFBQWlDLGlCQUFqQztBQUVBLE1BQU1DLGFBQWEsR0FBRyxNQUF0QjtBQUNBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsTUFBTSxFQUFFTCxHQURRO0FBRWhCTSxFQUFBQSxPQUFPLEVBQUVMLElBRk87QUFHaEJNLEVBQUFBLE9BQU8sRUFBRUw7QUFITyxDQUFsQjtBQVVBSCxhQUFhLENBQUM7QUFDWlMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsTUFERDtBQUVMQyxJQUFBQSxJQUFJLEVBQUVELE1BRkQ7QUFHTEUsSUFBQUEsSUFBSSxFQUFFQyxPQUhEO0FBSUxDLElBQUFBLEtBQUssRUFBRUosTUFKRjtBQUtMSyxJQUFBQSxLQUFLLEVBQUVGLE9BTEY7QUFNTEcsSUFBQUEsS0FBSyxFQUFFSCxPQU5GO0FBT0xJLElBQUFBLFNBQVMsRUFBRVA7QUFQTixHQURLO0FBV1pRLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEdBQUE7QUFDSCxZQUFNTCxLQUFLLEdBQUcsS0FBS00sSUFBTCxDQUFVTixLQUFWLElBQW1CVixTQUFTLENBQUMsS0FBS2dCLElBQUwsQ0FBVVQsSUFBWCxDQUE1QixJQUFnRFIsYUFBOUQ7QUFDQSxZQUFNa0IsR0FBRyxHQUFHLEtBQUtELElBQUwsQ0FBVUwsS0FBVixHQUFrQixPQUFsQixHQUE0QixrQkFBeEM7QUFDQSxZQUFNSSxLQUFLLEdBQUc7QUFBRSxTQUFDRSxHQUFELEdBQU9QO0FBQVQsT0FBZDs7QUFFQSxVQUFJLEtBQUtNLElBQUwsQ0FBVUgsU0FBZCxFQUF5QjtBQUN2QkUsUUFBQUEsS0FBSyxDQUFDTCxLQUFOLEdBQWMsS0FBS00sSUFBTCxDQUFVSCxTQUF4QjtBQUNEOztBQUVELGFBQU9LLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CSyxHQUFuQixDQUF1QkgsR0FBRyxJQUFJLEdBQUdBLEdBQUcsS0FBS0YsS0FBSyxDQUFDRSxHQUFELENBQUssRUFBbkQsRUFBdURJLElBQXZELENBQTRELEdBQTVELENBQVA7QUFDRDs7QUFYTztBQVhFLENBQUQsQ0FBYiIsImZpbGUiOiJ0YWcvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHVpQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJFRCwgQkxVRSwgR1JFRU4gfSBmcm9tICcuLi9jb21tb24vY29sb3InO1xyXG5cclxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjOTk5JztcclxuY29uc3QgQ09MT1JfTUFQID0ge1xyXG4gIGRhbmdlcjogUkVELFxyXG4gIHByaW1hcnk6IEJMVUUsXHJcbiAgc3VjY2VzczogR1JFRU5cclxufTtcclxuXHJcbnR5cGUgU3R5bGUgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuU3B1aUNvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHNpemU6IFN0cmluZyxcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIG1hcms6IEJvb2xlYW4sXHJcbiAgICBjb2xvcjogU3RyaW5nLFxyXG4gICAgcGxhaW46IEJvb2xlYW4sXHJcbiAgICByb3VuZDogQm9vbGVhbixcclxuICAgIHRleHRDb2xvcjogU3RyaW5nXHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHN0eWxlKCkge1xyXG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMuZGF0YS5jb2xvciB8fCBDT0xPUl9NQVBbdGhpcy5kYXRhLnR5cGVdIHx8IERFRkFVTFRfQ09MT1I7XHJcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuZGF0YS5wbGFpbiA/ICdjb2xvcicgOiAnYmFja2dyb3VuZC1jb2xvcic7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0geyBba2V5XTogY29sb3IgfSBhcyBTdHlsZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEudGV4dENvbG9yKSB7XHJcbiAgICAgICAgc3R5bGUuY29sb3IgPSB0aGlzLmRhdGEudGV4dENvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLm1hcChrZXkgPT4gYCR7a2V5fTogJHtzdHlsZVtrZXldfWApLmpvaW4oJzsnKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=
