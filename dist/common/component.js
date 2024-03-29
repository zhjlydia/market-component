import { basic } from '../mixins/basic';
import { observe } from '../mixins/observer/index';

function mapKeys(source, target, map) {
  Object.keys(map).forEach(key => {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function SpuiComponent(SpuiOptions = {}) {
  const options = {};
  mapKeys(SpuiOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  const {
    relation
  } = SpuiOptions;

  if (relation) {
    options.relations = Object.assign(options.relations || {}, {
      [`../${relation.name}/index`]: relation
    });
  } // add default externalClasses


  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(basic); // map field to form-field behavior

  if (SpuiOptions.field) {
    options.behaviors.push('wx://form-field');
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  observe(SpuiOptions, options);
  Component(options);
}

export { SpuiComponent };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnQudHMiXSwibmFtZXMiOlsiYmFzaWMiLCJvYnNlcnZlIiwibWFwS2V5cyIsInNvdXJjZSIsInRhcmdldCIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiU3B1aUNvbXBvbmVudCIsIlNwdWlPcHRpb25zIiwib3B0aW9ucyIsImRhdGEiLCJwcm9wcyIsIm1peGlucyIsIm1ldGhvZHMiLCJiZWZvcmVDcmVhdGUiLCJjcmVhdGVkIiwibW91bnRlZCIsInJlbGF0aW9ucyIsImRlc3Ryb3llZCIsImNsYXNzZXMiLCJyZWxhdGlvbiIsImFzc2lnbiIsIm5hbWUiLCJleHRlcm5hbENsYXNzZXMiLCJwdXNoIiwiYmVoYXZpb3JzIiwiZmllbGQiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEtBQVQsUUFBc0IsaUJBQXRCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QiwwQkFBeEI7O0FBTUEsU0FBU0MsT0FBVCxDQUFpQkMsTUFBakIsRUFBaUNDLE1BQWpDLEVBQWlEQyxHQUFqRCxFQUE0RDtBQUMxREMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLE9BQWpCLENBQXlCQyxHQUFHLElBQUc7QUFDN0IsUUFBSU4sTUFBTSxDQUFDTSxHQUFELENBQVYsRUFBaUI7QUFDZkwsTUFBQUEsTUFBTSxDQUFDQyxHQUFHLENBQUNJLEdBQUQsQ0FBSixDQUFOLEdBQW1CTixNQUFNLENBQUNNLEdBQUQsQ0FBekI7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFFRCxTQUFTQyxhQUFULENBQ0VDLFdBQUEsR0FPSSxFQVJOLEVBUVE7QUFFTixRQUFNQyxPQUFPLEdBQVEsRUFBckI7QUFFQVYsRUFBQUEsT0FBTyxDQUFDUyxXQUFELEVBQWNDLE9BQWQsRUFBdUI7QUFDNUJDLElBQUFBLElBQUksRUFBRSxNQURzQjtBQUU1QkMsSUFBQUEsS0FBSyxFQUFFLFlBRnFCO0FBRzVCQyxJQUFBQSxNQUFNLEVBQUUsV0FIb0I7QUFJNUJDLElBQUFBLE9BQU8sRUFBRSxTQUptQjtBQUs1QkMsSUFBQUEsWUFBWSxFQUFFLFNBTGM7QUFNNUJDLElBQUFBLE9BQU8sRUFBRSxVQU5tQjtBQU81QkMsSUFBQUEsT0FBTyxFQUFFLE9BUG1CO0FBUTVCQyxJQUFBQSxTQUFTLEVBQUUsV0FSaUI7QUFTNUJDLElBQUFBLFNBQVMsRUFBRSxVQVRpQjtBQVU1QkMsSUFBQUEsT0FBTyxFQUFFO0FBVm1CLEdBQXZCLENBQVA7QUFhQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBZVosV0FBckI7O0FBQ0EsTUFBSVksUUFBSixFQUFjO0FBQ1pYLElBQUFBLE9BQU8sQ0FBQ1EsU0FBUixHQUFvQmQsTUFBTSxDQUFDa0IsTUFBUCxDQUFjWixPQUFPLENBQUNRLFNBQVIsSUFBcUIsRUFBbkMsRUFBdUM7QUFDekQsT0FBQyxNQUFNRyxRQUFRLENBQUNFLElBQUksUUFBcEIsR0FBK0JGO0FBRDBCLEtBQXZDLENBQXBCO0FBR0QsR0F0QkssQ0F3Qk47OztBQUNBWCxFQUFBQSxPQUFPLENBQUNjLGVBQVIsR0FBMEJkLE9BQU8sQ0FBQ2MsZUFBUixJQUEyQixFQUFyRDtBQUNBZCxFQUFBQSxPQUFPLENBQUNjLGVBQVIsQ0FBd0JDLElBQXhCLENBQTZCLGNBQTdCLEVBMUJNLENBNEJOOztBQUNBZixFQUFBQSxPQUFPLENBQUNnQixTQUFSLEdBQW9CaEIsT0FBTyxDQUFDZ0IsU0FBUixJQUFxQixFQUF6QztBQUNBaEIsRUFBQUEsT0FBTyxDQUFDZ0IsU0FBUixDQUFrQkQsSUFBbEIsQ0FBdUIzQixLQUF2QixFQTlCTSxDQWdDTjs7QUFDQSxNQUFJVyxXQUFXLENBQUNrQixLQUFoQixFQUF1QjtBQUNyQmpCLElBQUFBLE9BQU8sQ0FBQ2dCLFNBQVIsQ0FBa0JELElBQWxCLENBQXVCLGlCQUF2QjtBQUNELEdBbkNLLENBcUNOOzs7QUFDQWYsRUFBQUEsT0FBTyxDQUFDQSxPQUFSLEdBQWtCO0FBQ2hCa0IsSUFBQUEsYUFBYSxFQUFFLElBREM7QUFFaEJDLElBQUFBLGNBQWMsRUFBRTtBQUZBLEdBQWxCO0FBS0E5QixFQUFBQSxPQUFPLENBQUNVLFdBQUQsRUFBY0MsT0FBZCxDQUFQO0FBQ0FvQixFQUFBQSxTQUFTLENBQUNwQixPQUFELENBQVQ7QUFDRDs7QUFFRCxTQUFTRixhQUFUIiwiZmlsZSI6ImNvbW1vbi9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNpYyB9IGZyb20gJy4uL21peGlucy9iYXNpYyc7XHJcbmltcG9ydCB7IG9ic2VydmUgfSBmcm9tICcuLi9taXhpbnMvb2JzZXJ2ZXIvaW5kZXgnO1xyXG5pbXBvcnQge1xyXG4gIFNwdWlDb21wb25lbnRPcHRpb25zLFxyXG4gIENvbWJpbmVkQ29tcG9uZW50SW5zdGFuY2VcclxufSBmcm9tICcuLi8uLi90eXBlcy9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiBtYXBLZXlzKHNvdXJjZTogb2JqZWN0LCB0YXJnZXQ6IG9iamVjdCwgbWFwOiBvYmplY3QpIHtcclxuICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGlmIChzb3VyY2Vba2V5XSkge1xyXG4gICAgICB0YXJnZXRbbWFwW2tleV1dID0gc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwdWlDb21wb25lbnQ8RGF0YSwgUHJvcHMsIFdhdGNoLCBNZXRob2RzLCBDb21wdXRlZD4oXHJcbiAgU3B1aU9wdGlvbnM6IFNwdWlDb21wb25lbnRPcHRpb25zPFxyXG4gICAgRGF0YSxcclxuICAgIFByb3BzLFxyXG4gICAgV2F0Y2gsXHJcbiAgICBNZXRob2RzLFxyXG4gICAgQ29tcHV0ZWQsXHJcbiAgICBDb21iaW5lZENvbXBvbmVudEluc3RhbmNlPERhdGEsIFByb3BzLCBXYXRjaCwgTWV0aG9kcywgQ29tcHV0ZWQ+XHJcbiAgPiA9IHt9XHJcbik6IHZvaWQge1xyXG4gIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICBtYXBLZXlzKFNwdWlPcHRpb25zLCBvcHRpb25zLCB7XHJcbiAgICBkYXRhOiAnZGF0YScsXHJcbiAgICBwcm9wczogJ3Byb3BlcnRpZXMnLFxyXG4gICAgbWl4aW5zOiAnYmVoYXZpb3JzJyxcclxuICAgIG1ldGhvZHM6ICdtZXRob2RzJyxcclxuICAgIGJlZm9yZUNyZWF0ZTogJ2NyZWF0ZWQnLFxyXG4gICAgY3JlYXRlZDogJ2F0dGFjaGVkJyxcclxuICAgIG1vdW50ZWQ6ICdyZWFkeScsXHJcbiAgICByZWxhdGlvbnM6ICdyZWxhdGlvbnMnLFxyXG4gICAgZGVzdHJveWVkOiAnZGV0YWNoZWQnLFxyXG4gICAgY2xhc3NlczogJ2V4dGVybmFsQ2xhc3NlcydcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyByZWxhdGlvbiB9ID0gU3B1aU9wdGlvbnM7XHJcbiAgaWYgKHJlbGF0aW9uKSB7XHJcbiAgICBvcHRpb25zLnJlbGF0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucy5yZWxhdGlvbnMgfHwge30sIHtcclxuICAgICAgW2AuLi8ke3JlbGF0aW9uLm5hbWV9L2luZGV4YF06IHJlbGF0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGFkZCBkZWZhdWx0IGV4dGVybmFsQ2xhc3Nlc1xyXG4gIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gb3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XHJcbiAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMucHVzaCgnY3VzdG9tLWNsYXNzJyk7XHJcblxyXG4gIC8vIGFkZCBkZWZhdWx0IGJlaGF2aW9yc1xyXG4gIG9wdGlvbnMuYmVoYXZpb3JzID0gb3B0aW9ucy5iZWhhdmlvcnMgfHwgW107XHJcbiAgb3B0aW9ucy5iZWhhdmlvcnMucHVzaChiYXNpYyk7XHJcblxyXG4gIC8vIG1hcCBmaWVsZCB0byBmb3JtLWZpZWxkIGJlaGF2aW9yXHJcbiAgaWYgKFNwdWlPcHRpb25zLmZpZWxkKSB7XHJcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKCd3eDovL2Zvcm0tZmllbGQnKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZCBkZWZhdWx0IG9wdGlvbnNcclxuICBvcHRpb25zLm9wdGlvbnMgPSB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcclxuICB9O1xyXG5cclxuICBvYnNlcnZlKFNwdWlPcHRpb25zLCBvcHRpb25zKTtcclxuICBDb21wb25lbnQob3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwdWlDb21wb25lbnQgfTtcclxuIl19
