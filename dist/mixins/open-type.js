export const openType = Behavior({
  properties: {
    openType: String
  },
  methods: {
    bindGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },

    bindContact(event) {
      this.$emit('contact', event.detail);
    },

    bindGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },

    bindOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    },

    bindError(event) {
      this.$emit('error', event.detail);
    }

  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9vcGVuLXR5cGUudHMiXSwibmFtZXMiOlsib3BlblR5cGUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJTdHJpbmciLCJtZXRob2RzIiwiYmluZEdldFVzZXJJbmZvIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCIsImJpbmRDb250YWN0IiwiYmluZEdldFBob25lTnVtYmVyIiwiYmluZE9wZW5TZXR0aW5nIiwiYmluZEVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDO0FBQy9CQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkYsSUFBQUEsUUFBUSxFQUFFRztBQURBLEdBRG1CO0FBSy9CQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsZUFBZSxDQUFDQyxLQUFELEVBQTRCO0FBQ3pDLFdBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxLQUFLLENBQUNFLE1BQWhDO0FBQ0QsS0FITTs7QUFLUEMsSUFBQUEsV0FBVyxDQUFDSCxLQUFELEVBQTRCO0FBQ3JDLFdBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCRCxLQUFLLENBQUNFLE1BQTVCO0FBQ0QsS0FQTTs7QUFTUEUsSUFBQUEsa0JBQWtCLENBQUNKLEtBQUQsRUFBNEI7QUFDNUMsV0FBS0MsS0FBTCxDQUFXLGdCQUFYLEVBQTZCRCxLQUFLLENBQUNFLE1BQW5DO0FBQ0QsS0FYTTs7QUFhUEcsSUFBQUEsZUFBZSxDQUFDTCxLQUFELEVBQTRCO0FBQ3pDLFdBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxLQUFLLENBQUNFLE1BQWhDO0FBQ0QsS0FmTTs7QUFpQlBJLElBQUFBLFNBQVMsQ0FBQ04sS0FBRCxFQUE0QjtBQUNuQyxXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsS0FBSyxDQUFDRSxNQUExQjtBQUNEOztBQW5CTTtBQUxzQixDQUFELENBQXpCIiwiZmlsZSI6Im1peGlucy9vcGVuLXR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgb3BlblR5cGUgPSBCZWhhdmlvcih7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgb3BlblR5cGU6IFN0cmluZ1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGJpbmRHZXRVc2VySW5mbyhldmVudDogUGFydGlhbDxXZWFwcC5FdmVudD4pIHtcclxuICAgICAgdGhpcy4kZW1pdCgnZ2V0dXNlcmluZm8nLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBiaW5kQ29udGFjdChldmVudDogUGFydGlhbDxXZWFwcC5FdmVudD4pIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY29udGFjdCcsIGV2ZW50LmRldGFpbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGJpbmRHZXRQaG9uZU51bWJlcihldmVudDogUGFydGlhbDxXZWFwcC5FdmVudD4pIHtcclxuICAgICAgdGhpcy4kZW1pdCgnZ2V0cGhvbmVudW1iZXInLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBiaW5kT3BlblNldHRpbmcoZXZlbnQ6IFBhcnRpYWw8V2VhcHAuRXZlbnQ+KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ29wZW5zZXR0aW5nJywgZXZlbnQuZGV0YWlsKTtcclxuICAgIH0sXHJcblxyXG4gICAgYmluZEVycm9yKGV2ZW50OiBQYXJ0aWFsPFdlYXBwLkV2ZW50Pikge1xyXG4gICAgICB0aGlzLiRlbWl0KCdlcnJvcicsIGV2ZW50LmRldGFpbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19