export const touch = Behavior({
  methods: {
    touchStart(event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },

    touchMove(event) {
      const touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy90b3VjaC50cyJdLCJuYW1lcyI6WyJ0b3VjaCIsIkJlaGF2aW9yIiwibWV0aG9kcyIsInRvdWNoU3RhcnQiLCJldmVudCIsImRpcmVjdGlvbiIsImRlbHRhWCIsImRlbHRhWSIsIm9mZnNldFgiLCJvZmZzZXRZIiwic3RhcnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJzdGFydFkiLCJjbGllbnRZIiwidG91Y2hNb3ZlIiwiTWF0aCIsImFicyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQztBQUM1QkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFVBQVUsQ0FBQ0MsS0FBRCxFQUF3QjtBQUNoQyxXQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxXQUFLQyxNQUFMLEdBQWNOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsRUFBaUJDLE9BQS9CO0FBQ0EsV0FBS0MsTUFBTCxHQUFjVCxLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLEVBQWlCRyxPQUEvQjtBQUNELEtBVE07O0FBV1BDLElBQUFBLFNBQVMsQ0FBQ1gsS0FBRCxFQUF3QjtBQUMvQixZQUFNSixLQUFLLEdBQUdJLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FBZDtBQUNBLFdBQUtMLE1BQUwsR0FBY04sS0FBSyxDQUFDWSxPQUFOLEdBQWdCLEtBQUtGLE1BQW5DO0FBQ0EsV0FBS0gsTUFBTCxHQUFjUCxLQUFLLENBQUNjLE9BQU4sR0FBZ0IsS0FBS0QsTUFBbkM7QUFDQSxXQUFLTCxPQUFMLEdBQWVRLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtYLE1BQWQsQ0FBZjtBQUNBLFdBQUtHLE9BQUwsR0FBZU8sSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS1YsTUFBZCxDQUFmO0FBQ0EsV0FBS0YsU0FBTCxHQUFpQixLQUFLRyxPQUFMLEdBQWUsS0FBS0MsT0FBcEIsR0FBOEIsWUFBOUIsR0FBNkMsS0FBS0QsT0FBTCxHQUFlLEtBQUtDLE9BQXBCLEdBQThCLFVBQTlCLEdBQTJDLEVBQXpHO0FBQ0Q7O0FBbEJNO0FBRG1CLENBQUQsQ0FBdEIiLCJmaWxlIjoibWl4aW5zL3RvdWNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRvdWNoID0gQmVoYXZpb3Ioe1xyXG4gIG1ldGhvZHM6IHtcclxuICAgIHRvdWNoU3RhcnQoZXZlbnQ6IFdlYXBwLlRvdWNoRXZlbnQpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnJztcclxuICAgICAgdGhpcy5kZWx0YVggPSAwO1xyXG4gICAgICB0aGlzLmRlbHRhWSA9IDA7XHJcbiAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XHJcbiAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XHJcbiAgICAgIHRoaXMuc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgIH0sXHJcblxyXG4gICAgdG91Y2hNb3ZlKGV2ZW50OiBXZWFwcC5Ub3VjaEV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcclxuICAgICAgdGhpcy5kZWx0YVggPSB0b3VjaC5jbGllbnRYIC0gdGhpcy5zdGFydFg7XHJcbiAgICAgIHRoaXMuZGVsdGFZID0gdG91Y2guY2xpZW50WSAtIHRoaXMuc3RhcnRZO1xyXG4gICAgICB0aGlzLm9mZnNldFggPSBNYXRoLmFicyh0aGlzLmRlbHRhWCk7XHJcbiAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGguYWJzKHRoaXMuZGVsdGFZKTtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLm9mZnNldFggPiB0aGlzLm9mZnNldFkgPyAnaG9yaXpvbnRhbCcgOiB0aGlzLm9mZnNldFggPCB0aGlzLm9mZnNldFkgPyAndmVydGljYWwnIDogJyc7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19
