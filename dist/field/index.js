import { SpuiComponent } from '../common/component';
SpuiComponent({
  field: true,
  classes: ['input-class'],
  props: {
    icon: String,
    label: String,
    error: Boolean,
    fixed: Boolean,
    focus: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    disabled: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    required: Boolean,
    iconClass: String,
    clearable: Boolean,
    inputAlign: String,
    customClass: String,
    confirmType: String,
    confirmHold: Boolean,
    errorMessage: String,
    placeholder: String,
    customStyle: String,
    useIconSlot: Boolean,
    useButtonSlot: Boolean,
    showConfirmBar: {
      type: Boolean,
      value: true
    },
    placeholderStyle: String,
    adjustPosition: {
      type: Boolean,
      value: true
    },
    cursorSpacing: {
      type: Number,
      value: 50
    },
    maxlength: {
      type: Number,
      value: -1
    },
    type: {
      type: String,
      value: 'text'
    },
    border: {
      type: Boolean,
      value: true
    },
    titleWidth: {
      type: String,
      value: '90px'
    }
  },
  data: {
    showClear: false
  },

  beforeCreate() {
    this.focused = false;
  },

  methods: {
    onInput(event) {
      const {
        value = ''
      } = event.detail || {};
      this.set({
        value,
        showClear: this.getShowClear(value)
      }, () => {
        this.$emit('input', value);
        this.$emit('change', value);
      });
    },

    onFocus(event) {
      const {
        value = '',
        height = 0
      } = event.detail || {};
      this.$emit('focus', {
        value,
        height
      });
      this.focused = true;
      this.set({
        showClear: this.getShowClear()
      });
    },

    onBlur(event) {
      const {
        value = '',
        cursor = 0
      } = event.detail || {};
      this.$emit('blur', {
        value,
        cursor
      });
      this.focused = false;
      this.set({
        showClear: this.getShowClear()
      });
    },

    onClickIcon() {
      this.$emit('click-icon');
    },

    getShowClear(value) {
      value = value === undefined ? this.data.value : value;
      return this.data.clearable && this.focused && value && !this.data.readonly;
    },

    onClear() {
      this.set({
        value: '',
        showClear: this.getShowClear('')
      }, () => {
        this.$emit('input', '');
        this.$emit('change', '');
        this.$emit('clear', '');
      });
    },

    onConfirm() {
      this.$emit('confirm', this.data.value);
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkL2luZGV4LnRzIl0sIm5hbWVzIjpbIlNwdWlDb21wb25lbnQiLCJmaWVsZCIsImNsYXNzZXMiLCJwcm9wcyIsImljb24iLCJTdHJpbmciLCJsYWJlbCIsImVycm9yIiwiQm9vbGVhbiIsImZpeGVkIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiaW5wdXRBbGlnbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybVR5cGUiLCJjb25maXJtSG9sZCIsImVycm9yTWVzc2FnZSIsInBsYWNlaG9sZGVyIiwiY3VzdG9tU3R5bGUiLCJ1c2VJY29uU2xvdCIsInVzZUJ1dHRvblNsb3QiLCJzaG93Q29uZmlybUJhciIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyU3R5bGUiLCJhZGp1c3RQb3NpdGlvbiIsImN1cnNvclNwYWNpbmciLCJOdW1iZXIiLCJtYXhsZW5ndGgiLCJib3JkZXIiLCJ0aXRsZVdpZHRoIiwiZGF0YSIsInNob3dDbGVhciIsImJlZm9yZUNyZWF0ZSIsImZvY3VzZWQiLCJtZXRob2RzIiwib25JbnB1dCIsImV2ZW50IiwiZGV0YWlsIiwic2V0IiwiZ2V0U2hvd0NsZWFyIiwiJGVtaXQiLCJvbkZvY3VzIiwiaGVpZ2h0Iiwib25CbHVyIiwiY3Vyc29yIiwib25DbGlja0ljb24iLCJ1bmRlZmluZWQiLCJvbkNsZWFyIiwib25Db25maXJtIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxhQUFULFFBQThCLHFCQUE5QjtBQUVBQSxhQUFhLENBQUM7QUFDWkMsRUFBQUEsS0FBSyxFQUFFLElBREs7QUFHWkMsRUFBQUEsT0FBTyxFQUFFLENBQUMsYUFBRCxDQUhHO0FBS1pDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUVDLE1BREQ7QUFFTEMsSUFBQUEsS0FBSyxFQUFFRCxNQUZGO0FBR0xFLElBQUFBLEtBQUssRUFBRUMsT0FIRjtBQUlMQyxJQUFBQSxLQUFLLEVBQUVELE9BSkY7QUFLTEUsSUFBQUEsS0FBSyxFQUFFRixPQUxGO0FBTUxHLElBQUFBLE1BQU0sRUFBRUgsT0FOSDtBQU9MSSxJQUFBQSxNQUFNLEVBQUVKLE9BUEg7QUFRTEssSUFBQUEsUUFBUSxFQUFFUixNQVJMO0FBU0xTLElBQUFBLFFBQVEsRUFBRU4sT0FUTDtBQVVMTyxJQUFBQSxRQUFRLEVBQUVQLE9BVkw7QUFXTFEsSUFBQUEsUUFBUSxFQUFFUixPQVhMO0FBWUxTLElBQUFBLFFBQVEsRUFBRVQsT0FaTDtBQWFMVSxJQUFBQSxTQUFTLEVBQUViLE1BYk47QUFjTGMsSUFBQUEsU0FBUyxFQUFFWCxPQWROO0FBZUxZLElBQUFBLFVBQVUsRUFBRWYsTUFmUDtBQWdCTGdCLElBQUFBLFdBQVcsRUFBRWhCLE1BaEJSO0FBaUJMaUIsSUFBQUEsV0FBVyxFQUFFakIsTUFqQlI7QUFrQkxrQixJQUFBQSxXQUFXLEVBQUVmLE9BbEJSO0FBbUJMZ0IsSUFBQUEsWUFBWSxFQUFFbkIsTUFuQlQ7QUFvQkxvQixJQUFBQSxXQUFXLEVBQUVwQixNQXBCUjtBQXFCTHFCLElBQUFBLFdBQVcsRUFBRXJCLE1BckJSO0FBc0JMc0IsSUFBQUEsV0FBVyxFQUFFbkIsT0F0QlI7QUF1QkxvQixJQUFBQSxhQUFhLEVBQUVwQixPQXZCVjtBQXdCTHFCLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxJQUFJLEVBQUV0QixPQURRO0FBRWR1QixNQUFBQSxLQUFLLEVBQUU7QUFGTyxLQXhCWDtBQTRCTEMsSUFBQUEsZ0JBQWdCLEVBQUUzQixNQTVCYjtBQTZCTDRCLElBQUFBLGNBQWMsRUFBRTtBQUNkSCxNQUFBQSxJQUFJLEVBQUV0QixPQURRO0FBRWR1QixNQUFBQSxLQUFLLEVBQUU7QUFGTyxLQTdCWDtBQWlDTEcsSUFBQUEsYUFBYSxFQUFFO0FBQ2JKLE1BQUFBLElBQUksRUFBRUssTUFETztBQUViSixNQUFBQSxLQUFLLEVBQUU7QUFGTSxLQWpDVjtBQXFDTEssSUFBQUEsU0FBUyxFQUFFO0FBQ1ROLE1BQUFBLElBQUksRUFBRUssTUFERztBQUVUSixNQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUZDLEtBckNOO0FBeUNMRCxJQUFBQSxJQUFJLEVBQUU7QUFDSkEsTUFBQUEsSUFBSSxFQUFFekIsTUFERjtBQUVKMEIsTUFBQUEsS0FBSyxFQUFFO0FBRkgsS0F6Q0Q7QUE2Q0xNLElBQUFBLE1BQU0sRUFBRTtBQUNOUCxNQUFBQSxJQUFJLEVBQUV0QixPQURBO0FBRU51QixNQUFBQSxLQUFLLEVBQUU7QUFGRCxLQTdDSDtBQWlETE8sSUFBQUEsVUFBVSxFQUFFO0FBQ1ZSLE1BQUFBLElBQUksRUFBRXpCLE1BREk7QUFFVjBCLE1BQUFBLEtBQUssRUFBRTtBQUZHO0FBakRQLEdBTEs7QUE0RFpRLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxTQUFTLEVBQUU7QUFEUCxHQTVETTs7QUFnRVpDLEVBQUFBLFlBQVksR0FBQTtBQUNWLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0QsR0FsRVc7O0FBb0VaQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsT0FBTyxDQUFDQyxLQUFELEVBQW1CO0FBQ3hCLFlBQU07QUFBRWQsUUFBQUEsS0FBSyxHQUFHO0FBQVYsVUFBaUJjLEtBQUssQ0FBQ0MsTUFBTixJQUFnQixFQUF2QztBQUVBLFdBQUtDLEdBQUwsQ0FBUztBQUNQaEIsUUFBQUEsS0FETztBQUVQUyxRQUFBQSxTQUFTLEVBQUUsS0FBS1EsWUFBTCxDQUFrQmpCLEtBQWxCO0FBRkosT0FBVCxFQUdHLE1BQUs7QUFDTixhQUFLa0IsS0FBTCxDQUFXLE9BQVgsRUFBb0JsQixLQUFwQjtBQUNBLGFBQUtrQixLQUFMLENBQVcsUUFBWCxFQUFxQmxCLEtBQXJCO0FBQ0QsT0FORDtBQU9ELEtBWE07O0FBYVBtQixJQUFBQSxPQUFPLENBQUNMLEtBQUQsRUFBbUI7QUFDeEIsWUFBTTtBQUFFZCxRQUFBQSxLQUFLLEdBQUcsRUFBVjtBQUFjb0IsUUFBQUEsTUFBTSxHQUFHO0FBQXZCLFVBQTZCTixLQUFLLENBQUNDLE1BQU4sSUFBZ0IsRUFBbkQ7QUFDQSxXQUFLRyxLQUFMLENBQVcsT0FBWCxFQUFvQjtBQUFFbEIsUUFBQUEsS0FBRjtBQUFTb0IsUUFBQUE7QUFBVCxPQUFwQjtBQUNBLFdBQUtULE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS0ssR0FBTCxDQUFTO0FBQ1BQLFFBQUFBLFNBQVMsRUFBRSxLQUFLUSxZQUFMO0FBREosT0FBVDtBQUdELEtBcEJNOztBQXNCUEksSUFBQUEsTUFBTSxDQUFDUCxLQUFELEVBQW1CO0FBQ3ZCLFlBQU07QUFBRWQsUUFBQUEsS0FBSyxHQUFHLEVBQVY7QUFBY3NCLFFBQUFBLE1BQU0sR0FBRztBQUF2QixVQUE2QlIsS0FBSyxDQUFDQyxNQUFOLElBQWdCLEVBQW5EO0FBQ0EsV0FBS0csS0FBTCxDQUFXLE1BQVgsRUFBbUI7QUFBRWxCLFFBQUFBLEtBQUY7QUFBU3NCLFFBQUFBO0FBQVQsT0FBbkI7QUFDQSxXQUFLWCxPQUFMLEdBQWUsS0FBZjtBQUNBLFdBQUtLLEdBQUwsQ0FBUztBQUNQUCxRQUFBQSxTQUFTLEVBQUUsS0FBS1EsWUFBTDtBQURKLE9BQVQ7QUFHRCxLQTdCTTs7QUErQlBNLElBQUFBLFdBQVcsR0FBQTtBQUNULFdBQUtMLEtBQUwsQ0FBVyxZQUFYO0FBQ0QsS0FqQ007O0FBbUNQRCxJQUFBQSxZQUFZLENBQUNqQixLQUFELEVBQWU7QUFDekJBLE1BQUFBLEtBQUssR0FBR0EsS0FBSyxLQUFLd0IsU0FBVixHQUFzQixLQUFLaEIsSUFBTCxDQUFVUixLQUFoQyxHQUF3Q0EsS0FBaEQ7QUFDQSxhQUNFLEtBQUtRLElBQUwsQ0FBVXBCLFNBQVYsSUFBdUIsS0FBS3VCLE9BQTVCLElBQXVDWCxLQUF2QyxJQUFnRCxDQUFDLEtBQUtRLElBQUwsQ0FBVXZCLFFBRDdEO0FBR0QsS0F4Q007O0FBMENQd0MsSUFBQUEsT0FBTyxHQUFBO0FBQ0wsV0FBS1QsR0FBTCxDQUFTO0FBQ1BoQixRQUFBQSxLQUFLLEVBQUUsRUFEQTtBQUVQUyxRQUFBQSxTQUFTLEVBQUUsS0FBS1EsWUFBTCxDQUFrQixFQUFsQjtBQUZKLE9BQVQsRUFHRyxNQUFLO0FBQ04sYUFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0IsRUFBcEI7QUFDQSxhQUFLQSxLQUFMLENBQVcsUUFBWCxFQUFxQixFQUFyQjtBQUNBLGFBQUtBLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEVBQXBCO0FBQ0QsT0FQRDtBQVFELEtBbkRNOztBQXFEUFEsSUFBQUEsU0FBUyxHQUFBO0FBQ1AsV0FBS1IsS0FBTCxDQUFXLFNBQVgsRUFBc0IsS0FBS1YsSUFBTCxDQUFVUixLQUFoQztBQUNEOztBQXZETTtBQXBFRyxDQUFELENBQWIiLCJmaWxlIjoiZmllbGQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHVpQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblxyXG5TcHVpQ29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuXHJcbiAgY2xhc3NlczogWydpbnB1dC1jbGFzcyddLFxyXG5cclxuICBwcm9wczoge1xyXG4gICAgaWNvbjogU3RyaW5nLFxyXG4gICAgbGFiZWw6IFN0cmluZyxcclxuICAgIGVycm9yOiBCb29sZWFuLFxyXG4gICAgZml4ZWQ6IEJvb2xlYW4sXHJcbiAgICBmb2N1czogQm9vbGVhbixcclxuICAgIGNlbnRlcjogQm9vbGVhbixcclxuICAgIGlzTGluazogQm9vbGVhbixcclxuICAgIGxlZnRJY29uOiBTdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIGF1dG9zaXplOiBCb29sZWFuLFxyXG4gICAgcmVhZG9ubHk6IEJvb2xlYW4sXHJcbiAgICByZXF1aXJlZDogQm9vbGVhbixcclxuICAgIGljb25DbGFzczogU3RyaW5nLFxyXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxyXG4gICAgaW5wdXRBbGlnbjogU3RyaW5nLFxyXG4gICAgY3VzdG9tQ2xhc3M6IFN0cmluZyxcclxuICAgIGNvbmZpcm1UeXBlOiBTdHJpbmcsXHJcbiAgICBjb25maXJtSG9sZDogQm9vbGVhbixcclxuICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcclxuICAgIHVzZUJ1dHRvblNsb3Q6IEJvb2xlYW4sXHJcbiAgICBzaG93Q29uZmlybUJhcjoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBsYWNlaG9sZGVyU3R5bGU6IFN0cmluZyxcclxuICAgIGFkanVzdFBvc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY3Vyc29yU3BhY2luZzoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiA1MFxyXG4gICAgfSxcclxuICAgIG1heGxlbmd0aDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAtMVxyXG4gICAgfSxcclxuICAgIHR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ3RleHQnXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGl0bGVXaWR0aDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnOTBweCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiB7XHJcbiAgICBzaG93Q2xlYXI6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25JbnB1dChldmVudDogV2VhcHAuRXZlbnQpIHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSA9ICcnIH0gPSBldmVudC5kZXRhaWwgfHwge307XHJcblxyXG4gICAgICB0aGlzLnNldCh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcih2YWx1ZSlcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRm9jdXMoZXZlbnQ6IFdlYXBwLkV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUgPSAnJywgaGVpZ2h0ID0gMCB9ID0gZXZlbnQuZGV0YWlsIHx8IHt9O1xyXG4gICAgICB0aGlzLiRlbWl0KCdmb2N1cycsIHsgdmFsdWUsIGhlaWdodCB9KTtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXQoe1xyXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CbHVyKGV2ZW50OiBXZWFwcC5FdmVudCkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlID0gJycsIGN1cnNvciA9IDAgfSA9IGV2ZW50LmRldGFpbCB8fCB7fTtcclxuICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIHsgdmFsdWUsIGN1cnNvciB9KTtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2V0KHtcclxuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKClcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2tJY29uKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdjbGljay1pY29uJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFNob3dDbGVhcih2YWx1ZT86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLmRhdGEudmFsdWUgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICB0aGlzLmRhdGEuY2xlYXJhYmxlICYmIHRoaXMuZm9jdXNlZCAmJiB2YWx1ZSAmJiAhdGhpcy5kYXRhLnJlYWRvbmx5XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xlYXIoKSB7XHJcbiAgICAgIHRoaXMuc2V0KHtcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcignJylcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgJycpO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsICcnKTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjbGVhcicsICcnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29uZmlybSgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY29uZmlybScsIHRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19