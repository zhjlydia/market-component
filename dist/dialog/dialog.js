let queue = [];

function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

const Dialog = options => {
  options = Object.assign({}, Dialog.currentOptions, options);
  return new Promise((resolve, reject) => {
    const context = options.context || getContext();
    const dialog = context.selectComponent(options.selector);
    delete options.selector;

    if (dialog) {
      dialog.set(Object.assign({
        onCancel: reject,
        onConfirm: resolve
      }, options));
      queue.push(dialog);
    } else {
      console.warn('未找到 spui-dialog 节点，请确认 selector 及 context 是否正确');
    }
  });
};

Dialog.defaultOptions = {
  show: true,
  title: '',
  message: '',
  zIndex: 100,
  overlay: true,
  asyncClose: false,
  messageAlign: '',
  transition: 'scale',
  selector: '#spui-dialog',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};
Dialog.alert = Dialog;

Dialog.confirm = options => Dialog(Object.assign({
  showCancelButton: true
}, options));

Dialog.close = () => {
  queue.forEach(dialog => {
    dialog.close();
  });
  queue = [];
};

Dialog.stopLoading = () => {
  queue.forEach(dialog => {
    dialog.stopLoading();
  });
};

Dialog.setDefaultOptions = options => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = Object.assign({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();
export default Dialog;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy9kaWFsb2cudHMiXSwibmFtZXMiOlsicXVldWUiLCJnZXRDb250ZXh0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJEaWFsb2ciLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VycmVudE9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnRleHQiLCJkaWFsb2ciLCJzZWxlY3RDb21wb25lbnQiLCJzZWxlY3RvciIsInNldCIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwicHVzaCIsImNvbnNvbGUiLCJ3YXJuIiwiZGVmYXVsdE9wdGlvbnMiLCJzaG93IiwidGl0bGUiLCJtZXNzYWdlIiwiekluZGV4Iiwib3ZlcmxheSIsImFzeW5jQ2xvc2UiLCJtZXNzYWdlQWxpZ24iLCJ0cmFuc2l0aW9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd0NvbmZpcm1CdXR0b24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsImNvbmZpcm1CdXR0b25PcGVuVHlwZSIsImFsZXJ0IiwiY29uZmlybSIsImNsb3NlIiwiZm9yRWFjaCIsInN0b3BMb2FkaW5nIiwic2V0RGVmYXVsdE9wdGlvbnMiLCJyZXNldERlZmF1bHRPcHRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxLQUFLLEdBQUcsRUFBWjs7QUFtQ0EsU0FBU0MsVUFBVCxHQUFtQjtBQUNqQixRQUFNQyxLQUFLLEdBQUdDLGVBQWUsRUFBN0I7QUFDQSxTQUFPRCxLQUFLLENBQUNBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQWhCLENBQVo7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQVdDLE9BQU8sSUFBRztBQUMvQkEsRUFBQUEsT0FBTyxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQSxFQUFBLEVBQ0ZILE1BQU0sQ0FBQ0ksY0FETCxFQUVGSCxPQUZFLENBQVA7QUFLQSxTQUFPLElBQUlJLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBb0I7QUFDckMsVUFBTUMsT0FBTyxHQUFHUCxPQUFPLENBQUNPLE9BQVIsSUFBbUJaLFVBQVUsRUFBN0M7QUFDQSxVQUFNYSxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsZUFBUixDQUF3QlQsT0FBTyxDQUFDVSxRQUFoQyxDQUFmO0FBQ0EsV0FBT1YsT0FBTyxDQUFDVSxRQUFmOztBQUVBLFFBQUlGLE1BQUosRUFBWTtBQUNWQSxNQUFBQSxNQUFNLENBQUNHLEdBQVAsQ0FBVVYsTUFBQSxDQUFBQyxNQUFBLENBQUE7QUFDUlUsUUFBQUEsUUFBUSxFQUFFTixNQURGO0FBRVJPLFFBQUFBLFNBQVMsRUFBRVI7QUFGSCxPQUFBLEVBR0xMLE9BSEssQ0FBVjtBQUtBTixNQUFBQSxLQUFLLENBQUNvQixJQUFOLENBQVdOLE1BQVg7QUFDRCxLQVBELE1BT087QUFDTE8sTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsZ0RBQWI7QUFDRDtBQUNGLEdBZk0sQ0FBUDtBQWdCRCxDQXRCRDs7QUF3QkFqQixNQUFNLENBQUNrQixjQUFQLEdBQXdCO0FBQ3RCQyxFQUFBQSxJQUFJLEVBQUUsSUFEZ0I7QUFFdEJDLEVBQUFBLEtBQUssRUFBRSxFQUZlO0FBR3RCQyxFQUFBQSxPQUFPLEVBQUUsRUFIYTtBQUl0QkMsRUFBQUEsTUFBTSxFQUFFLEdBSmM7QUFLdEJDLEVBQUFBLE9BQU8sRUFBRSxJQUxhO0FBTXRCQyxFQUFBQSxVQUFVLEVBQUUsS0FOVTtBQU90QkMsRUFBQUEsWUFBWSxFQUFFLEVBUFE7QUFRdEJDLEVBQUFBLFVBQVUsRUFBRSxPQVJVO0FBU3RCZixFQUFBQSxRQUFRLEVBQUUsY0FUWTtBQVV0QmdCLEVBQUFBLGlCQUFpQixFQUFFLElBVkc7QUFXdEJDLEVBQUFBLGdCQUFnQixFQUFFLElBWEk7QUFZdEJDLEVBQUFBLGlCQUFpQixFQUFFLElBWkc7QUFhdEJDLEVBQUFBLGdCQUFnQixFQUFFLEtBYkk7QUFjdEJDLEVBQUFBLG1CQUFtQixFQUFFLEtBZEM7QUFldEJDLEVBQUFBLHFCQUFxQixFQUFFO0FBZkQsQ0FBeEI7QUFrQkFoQyxNQUFNLENBQUNpQyxLQUFQLEdBQWVqQyxNQUFmOztBQUVBQSxNQUFNLENBQUNrQyxPQUFQLEdBQWlCakMsT0FBTyxJQUN0QkQsTUFBTSxDQUFBRSxNQUFBLENBQUFDLE1BQUEsQ0FBQTtBQUNKMkIsRUFBQUEsZ0JBQWdCLEVBQUU7QUFEZCxDQUFBLEVBRUQ3QixPQUZDLENBQUEsQ0FEUjs7QUFNQUQsTUFBTSxDQUFDbUMsS0FBUCxHQUFlLE1BQUs7QUFDbEJ4QyxFQUFBQSxLQUFLLENBQUN5QyxPQUFOLENBQWMzQixNQUFNLElBQUc7QUFDckJBLElBQUFBLE1BQU0sQ0FBQzBCLEtBQVA7QUFDRCxHQUZEO0FBR0F4QyxFQUFBQSxLQUFLLEdBQUcsRUFBUjtBQUNELENBTEQ7O0FBT0FLLE1BQU0sQ0FBQ3FDLFdBQVAsR0FBcUIsTUFBSztBQUN4QjFDLEVBQUFBLEtBQUssQ0FBQ3lDLE9BQU4sQ0FBYzNCLE1BQU0sSUFBRztBQUNyQkEsSUFBQUEsTUFBTSxDQUFDNEIsV0FBUDtBQUNELEdBRkQ7QUFHRCxDQUpEOztBQU1BckMsTUFBTSxDQUFDc0MsaUJBQVAsR0FBMkJyQyxPQUFPLElBQUc7QUFDbkNDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxNQUFNLENBQUNJLGNBQXJCLEVBQXFDSCxPQUFyQztBQUNELENBRkQ7O0FBSUFELE1BQU0sQ0FBQ3VDLG1CQUFQLEdBQTZCLE1BQUs7QUFDaEN2QyxFQUFBQSxNQUFNLENBQUNJLGNBQVAsR0FBcUJGLE1BQUEsQ0FBQUMsTUFBQSxDQUFBLEVBQUEsRUFBUUgsTUFBTSxDQUFDa0IsY0FBZixDQUFyQjtBQUNELENBRkQ7O0FBSUFsQixNQUFNLENBQUN1QyxtQkFBUDtBQUVBLGVBQWV2QyxNQUFmIiwiZmlsZSI6ImRpYWxvZy9kaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcXVldWUgPSBbXTtcclxuXHJcbnR5cGUgRGlhbG9nQWN0aW9uID0gJ2NvbmZpcm0nIHwgJ2NhbmNlbCc7XHJcbnR5cGUgRGlhbG9nT3B0aW9ucyA9IHtcclxuICBzaG93PzogYm9vbGVhbjtcclxuICB0aXRsZT86IHN0cmluZztcclxuICB6SW5kZXg/OiBudW1iZXI7XHJcbiAgY29udGV4dD86IGFueTtcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gIG92ZXJsYXk/OiBib29sZWFuO1xyXG4gIHNlbGVjdG9yPzogc3RyaW5nO1xyXG4gIHRyYW5zaXRpb24/OiBzdHJpbmc7XHJcbiAgYXN5bmNDbG9zZT86IGJvb2xlYW47XHJcbiAgbWVzc2FnZUFsaWduPzogc3RyaW5nO1xyXG4gIGNvbmZpcm1CdXR0b25UZXh0Pzogc3RyaW5nO1xyXG4gIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmc7XHJcbiAgc2hvd0NvbmZpcm1CdXR0b24/OiBib29sZWFuO1xyXG4gIHNob3dDYW5jZWxCdXR0b24/OiBib29sZWFuO1xyXG4gIGNsb3NlT25DbGlja092ZXJsYXk/OiBib29sZWFuO1xyXG4gIGNvbmZpcm1CdXR0b25PcGVuVHlwZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIERpYWxvZyB7XHJcbiAgKG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpOiBQcm9taXNlPERpYWxvZ0FjdGlvbj47XHJcbiAgYWxlcnQ/OiAob3B0aW9uczogRGlhbG9nT3B0aW9ucykgPT4gUHJvbWlzZTxEaWFsb2dBY3Rpb24+O1xyXG4gIGNvbmZpcm0/OiAob3B0aW9uczogRGlhbG9nT3B0aW9ucykgPT4gUHJvbWlzZTxEaWFsb2dBY3Rpb24+O1xyXG4gIGNsb3NlPzogKCkgPT4gdm9pZDtcclxuICBzdG9wTG9hZGluZz86ICgpID0+IHZvaWQ7XHJcbiAgaW5zdGFsbD86ICgpID0+IHZvaWQ7XHJcbiAgc2V0RGVmYXVsdE9wdGlvbnM/OiAob3B0aW9uczogRGlhbG9nT3B0aW9ucykgPT4gdm9pZDtcclxuICByZXNldERlZmF1bHRPcHRpb25zPzogKCkgPT4gdm9pZDtcclxuICBkZWZhdWx0T3B0aW9ucz86IERpYWxvZ09wdGlvbnM7XHJcbiAgY3VycmVudE9wdGlvbnM/OiBEaWFsb2dPcHRpb25zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xyXG4gIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgcmV0dXJuIHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG5jb25zdCBEaWFsb2c6IERpYWxvZyA9IG9wdGlvbnMgPT4ge1xyXG4gIG9wdGlvbnMgPSB7XHJcbiAgICAuLi5EaWFsb2cuY3VycmVudE9wdGlvbnMsXHJcbiAgICAuLi5vcHRpb25zXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgfHwgZ2V0Q29udGV4dCgpO1xyXG4gICAgY29uc3QgZGlhbG9nID0gY29udGV4dC5zZWxlY3RDb21wb25lbnQob3B0aW9ucy5zZWxlY3Rvcik7XHJcbiAgICBkZWxldGUgb3B0aW9ucy5zZWxlY3RvcjtcclxuXHJcbiAgICBpZiAoZGlhbG9nKSB7XHJcbiAgICAgIGRpYWxvZy5zZXQoe1xyXG4gICAgICAgIG9uQ2FuY2VsOiByZWplY3QsXHJcbiAgICAgICAgb25Db25maXJtOiByZXNvbHZlLFxyXG4gICAgICAgIC4uLm9wdGlvbnNcclxuICAgICAgfSk7XHJcbiAgICAgIHF1ZXVlLnB1c2goZGlhbG9nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybign5pyq5om+5YiwIHNwdWktZGlhbG9nIOiKgueCue+8jOivt+ehruiupCBzZWxlY3RvciDlj4ogY29udGV4dCDmmK/lkKbmraPnoa4nKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbkRpYWxvZy5kZWZhdWx0T3B0aW9ucyA9IHtcclxuICBzaG93OiB0cnVlLFxyXG4gIHRpdGxlOiAnJyxcclxuICBtZXNzYWdlOiAnJyxcclxuICB6SW5kZXg6IDEwMCxcclxuICBvdmVybGF5OiB0cnVlLFxyXG4gIGFzeW5jQ2xvc2U6IGZhbHNlLFxyXG4gIG1lc3NhZ2VBbGlnbjogJycsXHJcbiAgdHJhbnNpdGlvbjogJ3NjYWxlJyxcclxuICBzZWxlY3RvcjogJyNzcHVpLWRpYWxvZycsXHJcbiAgY29uZmlybUJ1dHRvblRleHQ6ICfnoa7orqQnLFxyXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICflj5bmtognLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxyXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gIGNsb3NlT25DbGlja092ZXJsYXk6IGZhbHNlLFxyXG4gIGNvbmZpcm1CdXR0b25PcGVuVHlwZTogJydcclxufTtcclxuXHJcbkRpYWxvZy5hbGVydCA9IERpYWxvZztcclxuXHJcbkRpYWxvZy5jb25maXJtID0gb3B0aW9ucyA9PlxyXG4gIERpYWxvZyh7XHJcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgLi4ub3B0aW9uc1xyXG4gIH0pO1xyXG5cclxuRGlhbG9nLmNsb3NlID0gKCkgPT4ge1xyXG4gIHF1ZXVlLmZvckVhY2goZGlhbG9nID0+IHtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gIH0pO1xyXG4gIHF1ZXVlID0gW107XHJcbn07XHJcblxyXG5EaWFsb2cuc3RvcExvYWRpbmcgPSAoKSA9PiB7XHJcbiAgcXVldWUuZm9yRWFjaChkaWFsb2cgPT4ge1xyXG4gICAgZGlhbG9nLnN0b3BMb2FkaW5nKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5EaWFsb2cuc2V0RGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zID0+IHtcclxuICBPYmplY3QuYXNzaWduKERpYWxvZy5jdXJyZW50T3B0aW9ucywgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5EaWFsb2cucmVzZXREZWZhdWx0T3B0aW9ucyA9ICgpID0+IHtcclxuICBEaWFsb2cuY3VycmVudE9wdGlvbnMgPSB7IC4uLkRpYWxvZy5kZWZhdWx0T3B0aW9ucyB9O1xyXG59O1xyXG5cclxuRGlhbG9nLnJlc2V0RGVmYXVsdE9wdGlvbnMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcclxuIl19
