webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/TransitionPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/TransitionPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar DEFAULT_TRANSITION = null;\nvar DEFAULT_TRANSITION_MODE = 'in-out';\n\nexports.default = {\n  name: 'TransitionPage',\n  data: function data() {\n    return {\n      prevHeight: 0,\n      transitionName: DEFAULT_TRANSITION,\n      transitionMode: DEFAULT_TRANSITION_MODE,\n      transitionEnterActiveClass: '',\n      transitionLeaveActiveClass: '',\n      to: null,\n      from: null\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    this.$router.beforeEach(function (to, from, next) {\n      _this.to = to;\n      _this.from = from;\n      var transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;\n\n      if (to.meta.transitionName) {\n        _this.transitionEnterActiveClass = transitionName + '-enter-active';\n      } else {\n        _this.transitionEnterActiveClass = null;\n      }\n      if (from.meta.transitionName) {\n        _this.transitionLeaveActiveClass = transitionName + '-leave-active';\n      } else {\n        _this.transitionLeaveActiveClass = null;\n      }\n\n      _this.transitionName = transitionName;\n\n      next();\n    });\n  },\n\n  methods: {\n    beforeLeave: function beforeLeave(element) {\n      this.prevHeight = getComputedStyle(element).height;\n    },\n    enter: function enter(element) {\n      var _getComputedStyle = getComputedStyle(element),\n          height = _getComputedStyle.height;\n\n      element.style.height = this.prevHeight;\n\n      setTimeout(function () {\n        element.style.height = height;\n      });\n    },\n    afterEnter: function afterEnter(element) {\n      element.style.height = '100%';\n    }\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL1RyYW5zaXRpb25QYWdlLnZ1ZT80ZmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7a0JBRUE7QUFDQSx3QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsd0NBRkE7QUFHQSw2Q0FIQTtBQUlBLG9DQUpBO0FBS0Esb0NBTEE7QUFNQSxjQU5BO0FBT0E7QUFQQTtBQVNBLEdBWkE7QUFhQSxTQWJBLHFCQWFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBbkJBO0FBb0JBLEdBbENBOztBQW1DQTtBQUNBLGVBREEsdUJBQ0EsT0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxpQkFJQSxPQUpBLEVBSUE7QUFBQSw4QkFDQSx5QkFEQTtBQUFBLFVBQ0EsTUFEQSxxQkFDQSxNQURBOztBQUdBOztBQUVBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FaQTtBQWFBLGNBYkEsc0JBYUEsT0FiQSxFQWFBO0FBQ0E7QUFDQTtBQWZBO0FBbkNBLEMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvY29tcG9uZW50cy9UcmFuc2l0aW9uUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIDpuYW1lPVwidHJhbnNpdGlvbk5hbWVcIlxuICAgIDptb2RlPVwidHJhbnNpdGlvbk1vZGVcIlxuICAgIDplbnRlci1hY3RpdmUtY2xhc3M9XCJ0cmFuc2l0aW9uRW50ZXJBY3RpdmVDbGFzc1wiXG4gICAgOmxlYXZlLWFjdGl2ZS1jbGFzcz1cInRyYW5zaXRpb25MZWF2ZUFjdGl2ZUNsYXNzXCJcbiAgICBAYmVmb3JlTGVhdmU9XCJiZWZvcmVMZWF2ZVwiXG4gICAgQGVudGVyPVwiZW50ZXJcIlxuICAgIEBhZnRlckVudGVyPVwiYWZ0ZXJFbnRlclwiXG4gID5cbiAgICA8c2xvdCAvPlxuICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3QgREVGQVVMVF9UUkFOU0lUSU9OID0gbnVsbDtcbmNvbnN0IERFRkFVTFRfVFJBTlNJVElPTl9NT0RFID0gJ2luLW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1RyYW5zaXRpb25QYWdlJyxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJldkhlaWdodDogMCxcbiAgICAgIHRyYW5zaXRpb25OYW1lOiBERUZBVUxUX1RSQU5TSVRJT04sXG4gICAgICB0cmFuc2l0aW9uTW9kZTogREVGQVVMVF9UUkFOU0lUSU9OX01PREUsXG4gICAgICB0cmFuc2l0aW9uRW50ZXJBY3RpdmVDbGFzczogJycsXG4gICAgICB0cmFuc2l0aW9uTGVhdmVBY3RpdmVDbGFzczogJycsXG4gICAgICB0bzogbnVsbCxcbiAgICAgIGZyb206IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLiRyb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICBsZXQgdHJhbnNpdGlvbk5hbWUgPSB0by5tZXRhLnRyYW5zaXRpb25OYW1lIHx8IGZyb20ubWV0YS50cmFuc2l0aW9uTmFtZSB8fCBERUZBVUxUX1RSQU5TSVRJT047XG5cbiAgICAgIGlmICh0by5tZXRhLnRyYW5zaXRpb25OYW1lKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVudGVyQWN0aXZlQ2xhc3MgPSBgJHt0cmFuc2l0aW9uTmFtZX0tZW50ZXItYWN0aXZlYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVudGVyQWN0aXZlQ2xhc3MgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGZyb20ubWV0YS50cmFuc2l0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25MZWF2ZUFjdGl2ZUNsYXNzID0gYCR7dHJhbnNpdGlvbk5hbWV9LWxlYXZlLWFjdGl2ZWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25MZWF2ZUFjdGl2ZUNsYXNzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmFuc2l0aW9uTmFtZSA9IHRyYW5zaXRpb25OYW1lO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiZWZvcmVMZWF2ZShlbGVtZW50KSB7XG4gICAgICB0aGlzLnByZXZIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmhlaWdodDtcbiAgICB9LFxuICAgIGVudGVyKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMucHJldkhlaWdodDtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlckVudGVyKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5zbGlkZS1sZWZ0LWVudGVyLWFjdGl2ZSwgLnNsaWRlLWxlZnQtbGVhdmUtYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG4uc2xpZGUtbGVmdC1lbnRlciwgLnNsaWRlLWxlZnQtbGVhdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG4uc2xpZGUtbGVmdC1sZWF2ZS10byB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cbi5mYWRlLWxlZnQtZW50ZXItYWN0aXZlLCAuZmFkZS1sZWZ0LWxlYXZlLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cywgb3BhY2l0eSAwLjI1cztcbn1cbi5mYWRlLWxlZnQtZW50ZXIsIC5mYWRlLWxlZnQtbGVhdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMyUpO1xuICBvcGFjaXR5OiAwO1xufVxuLmZhZGUtbGVmdC1sZWF2ZS10byB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1JSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cblxuLmZhZGUtZW50ZXItYWN0aXZlLCAuZmFkZS1sZWF2ZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5mYWRlLWVudGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5mYWRlLWxlYXZlLFxuLmZhZGUtbGVhdmUtdG8ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/TransitionPage.vue?vue&type=script&lang=js&\n");

/***/ })

})