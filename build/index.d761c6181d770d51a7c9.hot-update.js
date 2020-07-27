webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/Note.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _ConfirmModal = __webpack_require__(/*! app/components/modals/ConfirmModal.vue */ \"./src/app/components/modals/ConfirmModal.vue\");\n\nvar _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'Note',\n  components: {},\n  data: function data() {\n    return {};\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)([])),\n\n  mounted: function mounted() {},\n\n  methods: {\n    removeNote: function removeNote(note) {\n      var _this = this;\n\n      this.$modal.show(_ConfirmModal2.default, {\n        data: {\n          title: 'Remove note',\n          text: 'Are you sure you want to remove this note?',\n          btns: {\n            confirm: {\n              title: 'Remove',\n              callback: function callback() {\n                _this.$store.dispatch('NOTE_REMOVE', note.id);\n              }\n            }\n          }\n        }\n      }, {\n        transition: 'fade'\n      });\n    }\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL05vdGUudnVlPzVjZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQXFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFHQTtBQUNBLGNBREE7QUFFQSxnQkFGQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLEdBTEE7O0FBTUEsdUNBQ0EseUJBREEsQ0FOQTs7QUFVQSxTQVZBLHFCQVVBLEVBVkE7O0FBV0E7QUFDQSxjQURBLHNCQUNBLElBREEsRUFDQTtBQUFBOztBQUNBLHVCQUNBLHNCQURBLEVBRUE7QUFDQTtBQUNBLDhCQURBO0FBRUEsNERBRkE7QUFHQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBSEE7QUFEQSxPQUZBLEVBZ0JBO0FBQ0E7QUFEQSxPQWhCQTtBQW9CQTtBQXRCQTtBQVhBLEMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvY29tcG9uZW50cy9Ob3RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhcHAtbm90ZVwiPlxuICAgIDxyb3V0ZXItbGlua1xuICAgICAgY2xhc3M9XCJub3RlXCJcbiAgICAgIDp0bz1cIicvbm90ZS8nICsgaXRlbS5pZFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInJlbW92ZS1ub3RlLWJ0blwiIEBjbGljay5zdG9wLnByZXZlbnQ9XCJyZW1vdmVOb3RlKGl0ZW0pXCI+XG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcblx0IHZpZXdCb3g9XCIwIDAgNTEyLjAwMSA1MTIuMDAxXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHYtYmluZDpzdmctaW5saW5lPVwiJydcIiB2LWJpbmQ6cm9sZT1cIidwcmVzZW50YXRpb24nXCIgdi1iaW5kOmZvY3VzYWJsZT1cIidmYWxzZSdcIiB2LWJpbmQ6dGFiaW5kZXg9XCInLTEnXCI+XHJcbjxnPlxyXG5cdDxnPlxyXG5cdFx0PHBhdGggZmlsbD1cIiM4ODg4ODhcIiBkPVwiTTUwNS45MjIsNDc2LjU2N0wyODUuMzU1LDI1Nkw1MDUuOTIsMzUuNDM1YzguMTA2LTguMTA1LDguMTA2LTIxLjI0OCwwLTI5LjM1NGMtOC4xMDUtOC4xMDYtMjEuMjQ4LTguMTA2LTI5LjM1NCwwXHJcblx0XHRcdEwyNTYuMDAxLDIyNi42NDZMMzUuNDM0LDYuMDgxYy04LjEwNS04LjEwNi0yMS4yNDgtOC4xMDYtMjkuMzU0LDBjLTguMTA2LDguMTA1LTguMTA2LDIxLjI0OCwwLDI5LjM1NEwyMjYuNjQ2LDI1Nkw2LjA4LDQ3Ni41NjdcclxuXHRcdFx0Yy04LjEwNiw4LjEwNi04LjEwNiwyMS4yNDgsMCwyOS4zNTRjOC4xMDUsOC4xMDUsMjEuMjQ4LDguMTA2LDI5LjM1NCwwbDIyMC41NjctMjIwLjU2N2wyMjAuNTY3LDIyMC41NjdcclxuXHRcdFx0YzguMTA1LDguMTA1LDIxLjI0OCw4LjEwNiwyOS4zNTQsMFM1MTQuMDI4LDQ4NC42NzMsNTA1LjkyMiw0NzYuNTY3elwiLz5cclxuXHQ8L2c+XHJcbjwvZz5cclxuXHJcbjwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBpbmRleCArIDEgfX0uIHt7IGl0ZW0udGl0bGUgfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb3NcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtZm9yPVwiKHRvZG8sIHRvZG9JbmRleCkgaW4gaXRlbS50b2Rvc1wiXG4gICAgICAgICAgOmtleT1cInRvZG8uaWRcIlxuICAgICAgICAgIGNsYXNzPVwidG9kb1wiXG4gICAgICAgICAgOmNsYXNzPVwieyBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tdGl0bGVcIj57eyB0b2RvSW5kZXggKyAxIH19LiB7eyB0b2RvLnRpdGxlIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9yb3V0ZXItbGluaz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuXG5pbXBvcnQgQ29uZnJpbU1vZGFsIGZyb20gJ2FwcC9jb21wb25lbnRzL21vZGFscy9Db25maXJtTW9kYWwudnVlJztcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdOb3RlJyxcbiAgY29tcG9uZW50czoge30sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW10pLFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIHJlbW92ZU5vdGUobm90ZSkge1xuICAgICAgdGhpcy4kbW9kYWwuc2hvdyhcbiAgICAgICAgQ29uZnJpbU1vZGFsLFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdSZW1vdmUgbm90ZScsXG4gICAgICAgICAgICB0ZXh0OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG5vdGU/JyxcbiAgICAgICAgICAgIGJ0bnM6IHtcbiAgICAgICAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVtb3ZlJyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ05PVEVfUkVNT1ZFJywgbm90ZS5pZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRyYW5zaXRpb246ICdmYWRlJyxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uYXBwLW5vdGUge1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=template&id=118526b4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/Note.vue?vue&type=template&id=118526b4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"app-note\" },\n    [\n      _c(\n        \"router-link\",\n        { staticClass: \"note\", attrs: { to: \"/note/\" + _vm.item.id } },\n        [\n          _c(\n            \"div\",\n            {\n              staticClass: \"remove-note-btn\",\n              on: {\n                click: function($event) {\n                  $event.stopPropagation()\n                  $event.preventDefault()\n                  return _vm.removeNote(_vm.item)\n                }\n              }\n            },\n            [\n              _c(\n                \"svg\",\n                {\n                  staticStyle: {\n                    \"enable-background\": \"new 0 0 512.001 512.001\"\n                  },\n                  attrs: {\n                    version: \"1.1\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                    x: \"0px\",\n                    y: \"0px\",\n                    viewBox: \"0 0 512.001 512.001\",\n                    \"xml:space\": \"preserve\",\n                    \"svg-inline\": \"\",\n                    role: \"presentation\",\n                    focusable: \"false\",\n                    tabindex: \"-1\"\n                  }\n                },\n                [\n                  _c(\"g\", [\n                    _c(\"g\", [\n                      _c(\"path\", {\n                        attrs: {\n                          fill: \"#888888\",\n                          d:\n                            \"M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0\\n\\t\\t\\tL256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567\\n\\t\\t\\tc-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567\\n\\t\\t\\tc8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z\"\n                        }\n                      })\n                    ])\n                  ])\n                ]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"title\" }, [\n            _vm._v(_vm._s(_vm.index + 1) + \". \" + _vm._s(_vm.item.title))\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"text\" }, [_vm._v(_vm._s(_vm.item.text))]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"todos\" },\n            _vm._l(_vm.item.todos, function(todo, todoIndex) {\n              return _c(\n                \"div\",\n                {\n                  key: todo.id,\n                  staticClass: \"todo\",\n                  class: { completed: todo.completed }\n                },\n                [\n                  _c(\"div\", { staticClass: \"todo-title\" }, [\n                    _vm._v(_vm._s(todoIndex + 1) + \". \" + _vm._s(todo.title))\n                  ])\n                ]\n              )\n            }),\n            0\n          )\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvTm90ZS52dWU/M2RjZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBCQUEwQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhCQUE4Qiw2QkFBNkIsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0EsNkJBQTZCLDRCQUE0QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvY29tcG9uZW50cy9Ob3RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTg1MjZiNCZzY29wZWQ9dHJ1ZSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhcHAtbm90ZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJub3RlXCIsIGF0dHJzOiB7IHRvOiBcIi9ub3RlL1wiICsgX3ZtLml0ZW0uaWQgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZW1vdmUtbm90ZS1idG5cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZU5vdGUoX3ZtLml0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlLWJhY2tncm91bmRcIjogXCJuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogXCIxLjFcIixcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ4bWxuczp4bGlua1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgeDogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgeTogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgNTEyLjAwMSA1MTIuMDAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwieG1sOnNwYWNlXCI6IFwicHJlc2VydmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdmctaW5saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImdcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImdcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiM4ODg4ODhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk01MDUuOTIyLDQ3Ni41NjdMMjg1LjM1NSwyNTZMNTA1LjkyLDM1LjQzNWM4LjEwNi04LjEwNSw4LjEwNi0yMS4yNDgsMC0yOS4zNTRjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMFxcblxcdFxcdFxcdEwyNTYuMDAxLDIyNi42NDZMMzUuNDM0LDYuMDgxYy04LjEwNS04LjEwNi0yMS4yNDgtOC4xMDYtMjkuMzU0LDBjLTguMTA2LDguMTA1LTguMTA2LDIxLjI0OCwwLDI5LjM1NEwyMjYuNjQ2LDI1Nkw2LjA4LDQ3Ni41NjdcXG5cXHRcXHRcXHRjLTguMTA2LDguMTA2LTguMTA2LDIxLjI0OCwwLDI5LjM1NGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBsMjIwLjU2Ny0yMjAuNTY3bDIyMC41NjcsMjIwLjU2N1xcblxcdFxcdFxcdGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBTNTE0LjAyOCw0ODQuNjczLDUwNS45MjIsNDc2LjU2N3pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5kZXggKyAxKSArIFwiLiBcIiArIF92bS5fcyhfdm0uaXRlbS50aXRsZSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS50ZXh0KSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9kb3NcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtLnRvZG9zLCBmdW5jdGlvbih0b2RvLCB0b2RvSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiB0b2RvLmlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9kb1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvZG8tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModG9kb0luZGV4ICsgMSkgKyBcIi4gXCIgKyBfdm0uX3ModG9kby50aXRsZSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=template&id=118526b4&scoped=true&\n");

/***/ })

})