webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/NoteView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _cloneDeep = __webpack_require__(/*! lodash-es/cloneDeep */ \"./node_modules/lodash-es/cloneDeep.js\");\n\nvar _cloneDeep2 = _interopRequireDefault(_cloneDeep);\n\nvar _common = __webpack_require__(/*! ../../utils/common */ \"./src/utils/common.js\");\n\nvar _events = __webpack_require__(/*! ../../utils/events */ \"./src/utils/events.js\");\n\nvar _NoteEditor = __webpack_require__(/*! app/components/NoteEditor.vue */ \"./src/app/components/NoteEditor.vue\");\n\nvar _NoteEditor2 = _interopRequireDefault(_NoteEditor);\n\nvar _Todo = __webpack_require__(/*! app/components/Todo.vue */ \"./src/app/components/Todo.vue\");\n\nvar _Todo2 = _interopRequireDefault(_Todo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'NoteView',\n  components: {\n    NoteEditor: _NoteEditor2.default,\n    Todo: _Todo2.default\n  },\n  data: function data() {\n    return {\n      note: null\n    };\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['notes'])),\n\n  created: function created() {\n    var _this = this;\n\n    this.note = (0, _cloneDeep2.default)(this.notes.find(function (i) {\n      return i.id == _this.$route.params.id;\n    }), true);\n    if (!this.note) {\n      this.$router.push('/');\n    }\n  },\n  beforeDestroy: function beforeDestroy() {},\n  mounted: function mounted() {},\n\n\n  methods: {\n    saveNote: function saveNote() {\n      this.$store.dispatch('NOTE_EDIT', this.note);\n    },\n    addTodo: function addTodo() {\n      var todo = {\n        title: '',\n        completed: false,\n        id: (0, _common.generateID)()\n      };\n      this.note.todos.push(todo);\n      setTimeout(function () {\n        _events.events.emit('TODO_SET_EDITABLE', todo.id);\n      }, 50);\n    },\n    onTodoRemove: function onTodoRemove(todo) {\n      var _this2 = this;\n\n      this.note.todos.find(function (item, index) {\n        if (item && item.id == todo.id) {\n          _this2.note.todos.splice(index, 1);\n          return;\n        }\n      });\n    }\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC92aWV3cy9Ob3RlVmlldy52dWU/ZTI2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZ0NBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQ0Esb0NBREE7QUFFQTtBQUZBLEdBRkE7QUFNQSxNQU5BLGtCQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FWQTs7QUFXQSx1Q0FDQSxnQ0FEQSxDQVhBOztBQWVBLFNBZkEscUJBZUE7QUFBQTs7QUFDQSx5Q0FDQTtBQUFBO0FBQUEsTUFEQSxFQUVBLElBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxHQXZCQTtBQXlCQSxlQXpCQSwyQkF5QkEsRUF6QkE7QUEyQkEsU0EzQkEscUJBMkJBLEVBM0JBOzs7QUE2QkE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsV0FMQSxxQkFLQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsRUFGQTtBQUdBLEtBZkE7QUFpQkEsZ0JBakJBLHdCQWlCQSxJQWpCQSxFQWlCQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUF4QkE7QUE3QkEsQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtc3ZnLWlubGluZS1sb2FkZXIvZGlzdC9pbmRleC5taW4uanM/IS4vc3JjL2FwcC92aWV3cy9Ob3RlVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cIm5vdGVcIiBjbGFzcz1cImFwcC1ub3RlLXZpZXdcIj5cclxuICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cImJhY2stYnRuXCI+XHJcbiAgICAgIDxzdmcgaGVpZ2h0PVwiNTEycHhcIiAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEycHhcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2LWJpbmQ6c3ZnLWlubGluZT1cIicnXCIgdi1iaW5kOnJvbGU9XCIncHJlc2VudGF0aW9uJ1wiIHYtYmluZDpmb2N1c2FibGU9XCInZmFsc2UnXCIgdi1iaW5kOnRhYmluZGV4PVwiJy0xJ1wiPjxwYXRoIGQ9XCJNNDA1LjIsMjMyLjlMMTI2LjgsNjcuMmMtMy40LTItNi45LTMuMi0xMC45LTMuMmMtMTAuOSwwLTE5LjgsOS0xOS44LDIwSDk2djM0NGgwLjFjMCwxMSw4LjksMjAsMTkuOCwyMCAgYzQuMSwwLDcuNS0xLjQsMTEuMi0zLjRsMjc4LjEtMTY1LjVjNi42LTUuNSwxMC44LTEzLjgsMTAuOC0yMy4xQzQxNiwyNDYuNyw0MTEuOCwyMzguNSw0MDUuMiwyMzIuOXpcIi8+PC9zdmc+XHJcbiAgICA8L3JvdXRlci1saW5rPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluLXNlY3Rpb25cIj5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIHt7IG5vdGUudGl0bGUgfX1cclxuICAgICAgPC9oMT5cclxuICAgICAgPE5vdGVFZGl0b3Igdi1tb2RlbD1cIm5vdGUudGV4dFwiIC8+XHJcbiAgICAgIDxoMj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFRvZG8gTGlzdFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRvZG8tYnRuXCIgQGNsaWNrPVwiYWRkVG9kb1wiPk5ldyBUYXNrPC9kaXY+XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0LXRvZG9zXCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cIih0b2RvLCBpbmRleCkgaW4gbm90ZS50b2Rvc1wiIDprZXk9XCJ0b2RvLmlkXCIgY2xhc3M9XCJ0b2RvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPnt7IGluZGV4ICsgMSB9fS48L2Rpdj5cclxuICAgICAgICAgIDxUb2RvIDp0b2RvPVwidG9kb1wiIEByZW1vdmU9XCJvblRvZG9SZW1vdmUodG9kbylcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIm5vdGUudG9kb3MubGVuZ3RoID09IDBcIiBjbGFzcz1cImVtcHR5LWxhYmVsXCI+XHJcbiAgICAgICAgICBObyB0YXNrcyB5ZXRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzYXZlLWJ0blwiIEBjbGljaz1cInNhdmVOb3RlXCI+c2F2ZTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XHJcblxyXG5pbXBvcnQgY2xvbmVkZWVwIGZyb20gJ2xvZGFzaC1lcy9jbG9uZURlZXAnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uJztcclxuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnRzJztcclxuXHJcbmltcG9ydCBOb3RlRWRpdG9yIGZyb20gJ2FwcC9jb21wb25lbnRzL05vdGVFZGl0b3IudnVlJztcclxuaW1wb3J0IFRvZG8gZnJvbSAnYXBwL2NvbXBvbmVudHMvVG9kby52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdOb3RlVmlldycsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgTm90ZUVkaXRvcixcclxuICAgIFRvZG8sXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90ZTogbnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwR2V0dGVycyhbJ25vdGVzJ10pLFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLm5vdGUgPSBjbG9uZWRlZXAoXHJcbiAgICAgIHRoaXMubm90ZXMuZmluZChpID0+IGkuaWQgPT0gdGhpcy4kcm91dGUucGFyYW1zLmlkKSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGlmICghdGhpcy5ub3RlKSB7XHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYmVmb3JlRGVzdHJveSgpIHt9LFxyXG5cclxuICBtb3VudGVkKCkge30sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNhdmVOb3RlKCkge1xyXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTk9URV9FRElUJywgdGhpcy5ub3RlKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG9kbygpIHtcclxuICAgICAgbGV0IHRvZG8gPSB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgaWQ6IGdlbmVyYXRlSUQoKSxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5ub3RlLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50cy5lbWl0KCdUT0RPX1NFVF9FRElUQUJMRScsIHRvZG8uaWQpO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG9kb1JlbW92ZSh0b2RvKSB7XHJcbiAgICAgIHRoaXMubm90ZS50b2Rvcy5maW5kKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0uaWQgPT0gdG9kby5pZCkge1xyXG4gICAgICAgICAgdGhpcy5ub3RlLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbkBpbXBvcnQgJ35zdHlsZXMvX21peGlucy5zY3NzJztcclxuXHJcbi5hcHAtbm90ZS12aWV3IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZGFya2VzdC1jb2xvcik7XHJcblxyXG4gIC5iYWNrLWJ0biB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlucHV0LWJnKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcclxuICAgICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogdmFyKC0taW5wdXQtY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlucHV0LWJvcmRlci1jb2xvcikgMCUsIHRyYW5zcGFyZW50IDMwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICY6OmFmdGVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGVYKDNweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLXNlY3Rpb24ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAudC10b2RvcyB7XHJcbiAgICAgIC50b2RvIHtcclxuICAgICAgICAuY291bnRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.note\n    ? _c(\n        \"div\",\n        { staticClass: \"app-note-view\" },\n        [\n          _c(\"router-link\", { staticClass: \"back-btn\", attrs: { to: \"/\" } }, [\n            _c(\n              \"svg\",\n              {\n                staticStyle: { \"enable-background\": \"new 0 0 512 512\" },\n                attrs: {\n                  height: \"512px\",\n                  version: \"1.1\",\n                  viewBox: \"0 0 512 512\",\n                  width: \"512px\",\n                  \"xml:space\": \"preserve\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                  \"svg-inline\": \"\",\n                  role: \"presentation\",\n                  focusable: \"false\",\n                  tabindex: \"-1\"\n                }\n              },\n              [\n                _c(\"path\", {\n                  attrs: {\n                    d:\n                      \"M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z\"\n                  }\n                })\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"main-section\" },\n            [\n              _c(\"h1\", [\n                _vm._v(\"\\n      \" + _vm._s(_vm.note.title) + \"\\n    \")\n              ]),\n              _vm._v(\" \"),\n              _c(\"NoteEditor\", {\n                model: {\n                  value: _vm.note.text,\n                  callback: function($$v) {\n                    _vm.$set(_vm.note, \"text\", $$v)\n                  },\n                  expression: \"note.text\"\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"h2\", [\n                _c(\"span\", [_vm._v(\"\\n        Todo List\\n      \")]),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"add-todo-btn\", on: { click: _vm.addTodo } },\n                  [_vm._v(\"New Task\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"t-todos\" },\n                [\n                  _vm._l(_vm.note.todos, function(todo, index) {\n                    return _c(\n                      \"div\",\n                      { key: todo.id, staticClass: \"todo\" },\n                      [\n                        _c(\"div\", { staticClass: \"counter\" }, [\n                          _vm._v(_vm._s(index + 1) + \".\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"Todo\", {\n                          attrs: { todo: todo },\n                          on: {\n                            remove: function($event) {\n                              return _vm.onTodoRemove(todo)\n                            }\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  }),\n                  _vm._v(\" \"),\n                  _vm.note.todos.length == 0\n                    ? _c(\"div\", { staticClass: \"empty-label\" }, [\n                        _vm._v(\"\\n        No tasks yet\\n      \")\n                      ])\n                    : _vm._e()\n                ],\n                2\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"save-btn\", on: { click: _vm.saveNote } },\n                [_vm._v(\"save\")]\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL05vdGVWaWV3LnZ1ZT9lOTg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrQkFBK0I7QUFDeEM7QUFDQSw2QkFBNkIsa0NBQWtDLFVBQVUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUNBQXlDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUMscUJBQXFCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQSxtQ0FBbUMseUJBQXlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtCQUErQixzQkFBc0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1zdmctaW5saW5lLWxvYWRlci9kaXN0L2luZGV4Lm1pbi5qcz8hLi9zcmMvYXBwL3ZpZXdzL05vdGVWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjcwMjY5ZiZzY29wZWQ9dHJ1ZSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5ub3RlXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhcHAtbm90ZS12aWV3XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBzdGF0aWNDbGFzczogXCJiYWNrLWJ0blwiLCBhdHRyczogeyB0bzogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZW5hYmxlLWJhY2tncm91bmRcIjogXCJuZXcgMCAwIDUxMiA1MTJcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTEycHhcIixcbiAgICAgICAgICAgICAgICAgIHZlcnNpb246IFwiMS4xXCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCA1MTIgNTEyXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MTJweFwiLFxuICAgICAgICAgICAgICAgICAgXCJ4bWw6c3BhY2VcIjogXCJwcmVzZXJ2ZVwiLFxuICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgIFwieG1sbnM6eGxpbmtcIjogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgICAgICAgICAgICAgICBcInN2Zy1pbmxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICBcIk00MDUuMiwyMzIuOUwxMjYuOCw2Ny4yYy0zLjQtMi02LjktMy4yLTEwLjktMy4yYy0xMC45LDAtMTkuOCw5LTE5LjgsMjBIOTZ2MzQ0aDAuMWMwLDExLDguOSwyMCwxOS44LDIwICBjNC4xLDAsNy41LTEuNCwxMS4yLTMuNGwyNzguMS0xNjUuNWM2LjYtNS41LDEwLjgtMTMuOCwxMC44LTIzLjFDNDE2LDI0Ni43LDQxMS44LDIzOC41LDQwNS4yLDIzMi45elwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluLXNlY3Rpb25cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ubm90ZS50aXRsZSkgKyBcIlxcbiAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiTm90ZUVkaXRvclwiLCB7XG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubm90ZS50ZXh0LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubm90ZSwgXCJ0ZXh0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5vdGUudGV4dFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJcXG4gICAgICAgIFRvZG8gTGlzdFxcbiAgICAgIFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhZGQtdG9kby1idG5cIiwgb246IHsgY2xpY2s6IF92bS5hZGRUb2RvIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXcgVGFza1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidC10b2Rvc1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ub3RlLnRvZG9zLCBmdW5jdGlvbih0b2RvLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogdG9kby5pZCwgc3RhdGljQ2xhc3M6IFwidG9kb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGluZGV4ICsgMSkgKyBcIi5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVG9kb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvZG86IHRvZG8gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblRvZG9SZW1vdmUodG9kbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5ub3RlLnRvZG9zLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXB0eS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgTm8gdGFza3MgeWV0XFxuICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2F2ZS1idG5cIiwgb246IHsgY2xpY2s6IF92bS5zYXZlTm90ZSB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInNhdmVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true&\n");

/***/ })

})