import { SpuiComponent } from '../common/component';
import { iphonex } from '../mixins/iphonex';
SpuiComponent({
  mixins: [iphonex],
  classes: ['bar-class', 'price-class', 'button-class'],
  props: {
    tip: null,
    type: Number,
    price: null,
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonText: String,
    currency: {
      type: String,
      value: '¥'
    },
    buttonType: {
      type: String,
      value: 'danger'
    }
  },
  computed: {
    hasPrice() {
      return typeof this.data.price === 'number';
    },

    priceStr() {
      return (this.data.price / 100).toFixed(2);
    },

    tipStr() {
      const {
        tip
      } = this.data;
      return typeof tip === 'string' ? tip : '';
    }

  },
  methods: {
    onSubmit(event) {
      this.$emit('submit', event.detail);
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1iYXIvaW5kZXgudHMiXSwibmFtZXMiOlsiU3B1aUNvbXBvbmVudCIsImlwaG9uZXgiLCJtaXhpbnMiLCJjbGFzc2VzIiwicHJvcHMiLCJ0aXAiLCJ0eXBlIiwiTnVtYmVyIiwicHJpY2UiLCJsYWJlbCIsIlN0cmluZyIsImxvYWRpbmciLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJidXR0b25UZXh0IiwiY3VycmVuY3kiLCJ2YWx1ZSIsImJ1dHRvblR5cGUiLCJjb21wdXRlZCIsImhhc1ByaWNlIiwiZGF0YSIsInByaWNlU3RyIiwidG9GaXhlZCIsInRpcFN0ciIsIm1ldGhvZHMiLCJvblN1Ym1pdCIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGFBQVQsUUFBOEIscUJBQTlCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixtQkFBeEI7QUFFQUQsYUFBYSxDQUFDO0FBQ1pFLEVBQUFBLE1BQU0sRUFBRSxDQUFDRCxPQUFELENBREk7QUFHWkUsRUFBQUEsT0FBTyxFQUFFLENBQ1AsV0FETyxFQUVQLGFBRk8sRUFHUCxjQUhPLENBSEc7QUFTWkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEdBQUcsRUFBRSxJQURBO0FBRUxDLElBQUFBLElBQUksRUFBRUMsTUFGRDtBQUdMQyxJQUFBQSxLQUFLLEVBQUUsSUFIRjtBQUlMQyxJQUFBQSxLQUFLLEVBQUVDLE1BSkY7QUFLTEMsSUFBQUEsT0FBTyxFQUFFQyxPQUxKO0FBTUxDLElBQUFBLFFBQVEsRUFBRUQsT0FOTDtBQU9MRSxJQUFBQSxVQUFVLEVBQUVKLE1BUFA7QUFRTEssSUFBQUEsUUFBUSxFQUFFO0FBQ1JULE1BQUFBLElBQUksRUFBRUksTUFERTtBQUVSTSxNQUFBQSxLQUFLLEVBQUU7QUFGQyxLQVJMO0FBWUxDLElBQUFBLFVBQVUsRUFBRTtBQUNWWCxNQUFBQSxJQUFJLEVBQUVJLE1BREk7QUFFVk0sTUFBQUEsS0FBSyxFQUFFO0FBRkc7QUFaUCxHQVRLO0FBMkJaRSxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxHQUFBO0FBQ04sYUFBTyxPQUFPLEtBQUtDLElBQUwsQ0FBVVosS0FBakIsS0FBMkIsUUFBbEM7QUFDRCxLQUhPOztBQUtSYSxJQUFBQSxRQUFRLEdBQUE7QUFDTixhQUFPLENBQUMsS0FBS0QsSUFBTCxDQUFVWixLQUFWLEdBQWtCLEdBQW5CLEVBQXdCYyxPQUF4QixDQUFnQyxDQUFoQyxDQUFQO0FBQ0QsS0FQTzs7QUFTUkMsSUFBQUEsTUFBTSxHQUFBO0FBQ0osWUFBTTtBQUFFbEIsUUFBQUE7QUFBRixVQUFVLEtBQUtlLElBQXJCO0FBQ0EsYUFBTyxPQUFPZixHQUFQLEtBQWUsUUFBZixHQUEwQkEsR0FBMUIsR0FBZ0MsRUFBdkM7QUFDRDs7QUFaTyxHQTNCRTtBQTBDWm1CLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxRQUFRLENBQUNDLEtBQUQsRUFBbUI7QUFDekIsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELEtBQUssQ0FBQ0UsTUFBM0I7QUFDRDs7QUFITTtBQTFDRyxDQUFELENBQWIiLCJmaWxlIjoic3VibWl0LWJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwdWlDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXBob25leCB9IGZyb20gJy4uL21peGlucy9pcGhvbmV4JztcclxuXHJcblNwdWlDb21wb25lbnQoe1xyXG4gIG1peGluczogW2lwaG9uZXhdLFxyXG5cclxuICBjbGFzc2VzOiBbXHJcbiAgICAnYmFyLWNsYXNzJyxcclxuICAgICdwcmljZS1jbGFzcycsXHJcbiAgICAnYnV0dG9uLWNsYXNzJ1xyXG4gIF0sXHJcblxyXG4gIHByb3BzOiB7XHJcbiAgICB0aXA6IG51bGwsXHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBwcmljZTogbnVsbCxcclxuICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBidXR0b25UZXh0OiBTdHJpbmcsXHJcbiAgICBjdXJyZW5jeToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnwqUnXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uVHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnZGFuZ2VyJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBoYXNQcmljZSgpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmRhdGEucHJpY2UgPT09ICdudW1iZXInO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcmljZVN0cigpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmRhdGEucHJpY2UgLyAxMDApLnRvRml4ZWQoMik7XHJcbiAgICB9LFxyXG5cclxuICAgIHRpcFN0cigpIHtcclxuICAgICAgY29uc3QgeyB0aXAgfSA9IHRoaXMuZGF0YTtcclxuICAgICAgcmV0dXJuIHR5cGVvZiB0aXAgPT09ICdzdHJpbmcnID8gdGlwIDogJyc7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25TdWJtaXQoZXZlbnQ6IFdlYXBwLkV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdCcsIGV2ZW50LmRldGFpbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19
