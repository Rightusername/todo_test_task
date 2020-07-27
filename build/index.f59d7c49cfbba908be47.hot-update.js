webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/Main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _ConfirmModal = __webpack_require__(/*! app/components/modals/ConfirmModal.vue */ \"./src/app/components/modals/ConfirmModal.vue\");\n\nvar _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);\n\nvar _NoteCreateModal = __webpack_require__(/*! app/components/modals/NoteCreateModal.vue */ \"./src/app/components/modals/NoteCreateModal.vue\");\n\nvar _NoteCreateModal2 = _interopRequireDefault(_NoteCreateModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  name: 'Main',\n  components: {},\n  data: function data() {\n    return {};\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['notes'])),\n\n  created: function created() {},\n  beforeDestroy: function beforeDestroy() {},\n  mounted: function mounted() {},\n\n\n  methods: {\n    createNote: function createNote() {\n      this.$modal.show(_NoteCreateModal2.default, {}, {\n        transition: 'fade'\n      });\n    },\n    removeNote: function removeNote(note) {\n      var _this = this;\n\n      this.$modal.show(_ConfirmModal2.default, {\n        data: {\n          title: 'Remove note',\n          text: 'Are you sure you want to remove this note?',\n          btns: {\n            confirm: {\n              title: 'Remove',\n              callback: function callback() {\n                _this.$store.dispatch('NOTE_REMOVE', note.id);\n              }\n            }\n          }\n        }\n      }, {\n        transition: 'fade'\n      });\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC92aWV3cy9NYWluLnZ1ZT9kNjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFnREE7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVBO0FBQ0EsY0FEQTtBQUVBLGdCQUZBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsR0FMQTs7QUFNQSx1Q0FDQSxnQ0FEQSxDQU5BOztBQVVBLFNBVkEscUJBVUEsRUFWQTtBQVlBLGVBWkEsMkJBWUEsRUFaQTtBQWNBLFNBZEEscUJBY0EsRUFkQTs7O0FBZ0JBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBLHVCQUNBLHlCQURBLEVBRUEsRUFGQSxFQUdBO0FBQ0E7QUFEQSxPQUhBO0FBT0EsS0FUQTtBQVVBLGNBVkEsc0JBVUEsSUFWQSxFQVVBO0FBQUE7O0FBQ0EsdUJBQ0Esc0JBREEsRUFFQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw0REFGQTtBQUdBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFIQTtBQURBLE9BRkEsRUFnQkE7QUFDQTtBQURBLE9BaEJBO0FBb0JBO0FBL0JBO0FBaEJBLEMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvdmlld3MvTWFpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJhcHAtbWFpblwiPlxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGgxPlxyXG4gICAgICAgIE5vdGVzXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcmltYXJ5LWJ0blwiIEBjbGljaz1cImNyZWF0ZU5vdGVcIj5DcmVhdGUgTm90ZTwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm5vdGVzLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vLW5vdGVzXCIgdi1pZj1cIiFub3RlcyB8fCBub3Rlcy5sZW5ndGggPT0gMFwiPk5vIG5vdGVzPC9kaXY+XHJcbiAgICAgIDxyb3V0ZXItbGlua1xyXG4gICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBub3Rlc1wiXHJcbiAgICAgICAgOmtleT1cIml0ZW0uaWRcIlxyXG4gICAgICAgIGNsYXNzPVwibm90ZVwiXHJcbiAgICAgICAgOnRvPVwiJy9ub3RlLycgKyBpdGVtLmlkXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmUtbm90ZS1idG5cIiBAY2xpY2suc3RvcC5wcmV2ZW50PVwicmVtb3ZlTm90ZShpdGVtKVwiPlxyXG4gICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuXHQgdmlld0JveD1cIjAgMCA1MTIuMDAxIDUxMi4wMDFcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgdi1iaW5kOnN2Zy1pbmxpbmU9XCInJ1wiIHYtYmluZDpyb2xlPVwiJ3ByZXNlbnRhdGlvbidcIiB2LWJpbmQ6Zm9jdXNhYmxlPVwiJ2ZhbHNlJ1wiIHYtYmluZDp0YWJpbmRleD1cIictMSdcIj5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8cGF0aCBmaWxsPVwiIzg4ODg4OFwiIGQ9XCJNNTA1LjkyMiw0NzYuNTY3TDI4NS4zNTUsMjU2TDUwNS45MiwzNS40MzVjOC4xMDYtOC4xMDUsOC4xMDYtMjEuMjQ4LDAtMjkuMzU0Yy04LjEwNS04LjEwNi0yMS4yNDgtOC4xMDYtMjkuMzU0LDBcclxuXHRcdFx0TDI1Ni4wMDEsMjI2LjY0NkwzNS40MzQsNi4wODFjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMGMtOC4xMDYsOC4xMDUtOC4xMDYsMjEuMjQ4LDAsMjkuMzU0TDIyNi42NDYsMjU2TDYuMDgsNDc2LjU2N1xyXG5cdFx0XHRjLTguMTA2LDguMTA2LTguMTA2LDIxLjI0OCwwLDI5LjM1NGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBsMjIwLjU2Ny0yMjAuNTY3bDIyMC41NjcsMjIwLjU2N1xyXG5cdFx0XHRjOC4xMDUsOC4xMDUsMjEuMjQ4LDguMTA2LDI5LjM1NCwwUzUxNC4wMjgsNDg0LjY3Myw1MDUuOTIyLDQ3Ni41Njd6XCIvPlxyXG5cdDwvZz5cclxuPC9nPlxyXG5cclxuPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3sgaW5kZXggKyAxIH19LiB7eyBpdGVtLnRpdGxlIH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9zXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtZm9yPVwiKHRvZG8sIHRvZG9JbmRleCkgaW4gaXRlbS50b2Rvc1wiXHJcbiAgICAgICAgICAgIDprZXk9XCJ0b2RvLmlkXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0b2RvXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwieyBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkIH1cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby10aXRsZVwiPnt7IHRvZG9JbmRleCArIDEgfX0uIHt7IHRvZG8udGl0bGUgfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XHJcblxyXG5pbXBvcnQgQ29uZnJpbU1vZGFsIGZyb20gJ2FwcC9jb21wb25lbnRzL21vZGFscy9Db25maXJtTW9kYWwudnVlJztcclxuaW1wb3J0IE5vdGVDcmVhdGVNb2RhbCBmcm9tICdhcHAvY29tcG9uZW50cy9tb2RhbHMvTm90ZUNyZWF0ZU1vZGFsLnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01haW4nLFxyXG4gIGNvbXBvbmVudHM6IHt9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwR2V0dGVycyhbJ25vdGVzJ10pLFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQoKSB7fSxcclxuXHJcbiAgYmVmb3JlRGVzdHJveSgpIHt9LFxyXG5cclxuICBtb3VudGVkKCkge30sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNyZWF0ZU5vdGUoKSB7XHJcbiAgICAgIHRoaXMuJG1vZGFsLnNob3coXHJcbiAgICAgICAgTm90ZUNyZWF0ZU1vZGFsLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdmYWRlJyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlTm90ZShub3RlKSB7XHJcbiAgICAgIHRoaXMuJG1vZGFsLnNob3coXHJcbiAgICAgICAgQ29uZnJpbU1vZGFsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSZW1vdmUgbm90ZScsXHJcbiAgICAgICAgICAgIHRleHQ6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgbm90ZT8nLFxyXG4gICAgICAgICAgICBidG5zOiB7XHJcbiAgICAgICAgICAgICAgY29uZmlybToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdSZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ05PVEVfUkVNT1ZFJywgbm90ZS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ2ZhZGUnLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbkBpbXBvcnQgJ35zdHlsZXMvX21peGlucy5zY3NzJztcclxuXHJcbi5hcHAtbWFpbiB7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICBoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm5vdGVzLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICBAaW5jbHVkZSBzY3JvbGxiYXIoMnB4KTtcclxuXHJcbiAgICAubm90ZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWMtYnRuLWJnKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VjLWJ0bi1ib3JkZXItY29sb3IpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVtb3ZlLW5vdGUtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudG9kb3Mge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDdweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC50b2RvIHtcclxuICAgICAgICAgIC50b2RvLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmNvbXBsZXRlZCB7XHJcbiAgICAgICAgICAgIC50b2RvLXRpdGxlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2VjLWJ0bi1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=template&id=dc0ca4be&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/Main.vue?vue&type=template&id=dc0ca4be&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"app-main\" }, [\n    _c(\"header\", [\n      _c(\"h1\", [_vm._v(\"\\n        Notes\\n      \")]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"primary-btn\", on: { click: _vm.createNote } }, [\n        _vm._v(\"Create Note\")\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"notes-list\" },\n      [\n        !_vm.notes || _vm.notes.length == 0\n          ? _c(\"div\", { staticClass: \"no-notes\" }, [_vm._v(\"No notes\")])\n          : _vm._e(),\n        _vm._v(\" \"),\n        _vm._l(_vm.notes, function(item, index) {\n          return _c(\n            \"router-link\",\n            {\n              key: item.id,\n              staticClass: \"note\",\n              attrs: { to: \"/note/\" + item.id }\n            },\n            [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"remove-note-btn\",\n                  on: {\n                    click: function($event) {\n                      $event.stopPropagation()\n                      $event.preventDefault()\n                      return _vm.removeNote(item)\n                    }\n                  }\n                },\n                [\n                  _c(\n                    \"svg\",\n                    {\n                      staticStyle: {\n                        \"enable-background\": \"new 0 0 512.001 512.001\"\n                      },\n                      attrs: {\n                        version: \"1.1\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                        x: \"0px\",\n                        y: \"0px\",\n                        viewBox: \"0 0 512.001 512.001\",\n                        \"xml:space\": \"preserve\",\n                        \"svg-inline\": \"\",\n                        role: \"presentation\",\n                        focusable: \"false\",\n                        tabindex: \"-1\"\n                      }\n                    },\n                    [\n                      _c(\"g\", [\n                        _c(\"g\", [\n                          _c(\"path\", {\n                            attrs: {\n                              fill: \"#888888\",\n                              d:\n                                \"M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0\\n\\t\\t\\tL256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567\\n\\t\\t\\tc-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567\\n\\t\\t\\tc8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z\"\n                            }\n                          })\n                        ])\n                      ])\n                    ]\n                  )\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"title\" }, [\n                _vm._v(_vm._s(index + 1) + \". \" + _vm._s(item.title))\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"todos\" },\n                _vm._l(item.todos, function(todo, todoIndex) {\n                  return _c(\n                    \"div\",\n                    {\n                      key: todo.id,\n                      staticClass: \"todo\",\n                      class: { completed: todo.completed }\n                    },\n                    [\n                      _c(\"div\", { staticClass: \"todo-title\" }, [\n                        _vm._v(\n                          _vm._s(todoIndex + 1) + \". \" + _vm._s(todo.title)\n                        )\n                      ])\n                    ]\n                  )\n                }),\n                0\n              )\n            ]\n          )\n        })\n      ],\n      2\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL01haW4udnVlPzcyZTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0Msd0JBQXdCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQSxpQ0FBaUMsNEJBQTRCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvdmlld3MvTWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGMwY2E0YmUmc2NvcGVkPXRydWUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFwcC1tYWluXCIgfSwgW1xuICAgIF9jKFwiaGVhZGVyXCIsIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlxcbiAgICAgICAgTm90ZXNcXG4gICAgICBcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByaW1hcnktYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlTm90ZSB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ3JlYXRlIE5vdGVcIilcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGVzLWxpc3RcIiB9LFxuICAgICAgW1xuICAgICAgICAhX3ZtLm5vdGVzIHx8IF92bS5ub3Rlcy5sZW5ndGggPT0gMFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuby1ub3Rlc1wiIH0sIFtfdm0uX3YoXCJObyBub3Rlc1wiKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5ub3RlcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogaXRlbS5pZCxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90ZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvbm90ZS9cIiArIGl0ZW0uaWQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZW1vdmUtbm90ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlTm90ZShpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZS1iYWNrZ3JvdW5kXCI6IFwibmV3IDAgMCA1MTIuMDAxIDUxMi4wMDFcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IFwiMS4xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ4bWxuczp4bGlua1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgNTEyLjAwMSA1MTIuMDAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInhtbDpzcGFjZVwiOiBcInByZXNlcnZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN2Zy1pbmxpbmVcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImdcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJnXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjODg4ODg4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk01MDUuOTIyLDQ3Ni41NjdMMjg1LjM1NSwyNTZMNTA1LjkyLDM1LjQzNWM4LjEwNi04LjEwNSw4LjEwNi0yMS4yNDgsMC0yOS4zNTRjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMFxcblxcdFxcdFxcdEwyNTYuMDAxLDIyNi42NDZMMzUuNDM0LDYuMDgxYy04LjEwNS04LjEwNi0yMS4yNDgtOC4xMDYtMjkuMzU0LDBjLTguMTA2LDguMTA1LTguMTA2LDIxLjI0OCwwLDI5LjM1NEwyMjYuNjQ2LDI1Nkw2LjA4LDQ3Ni41NjdcXG5cXHRcXHRcXHRjLTguMTA2LDguMTA2LTguMTA2LDIxLjI0OCwwLDI5LjM1NGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBsMjIwLjU2Ny0yMjAuNTY3bDIyMC41NjcsMjIwLjU2N1xcblxcdFxcdFxcdGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBTNTE0LjAyOCw0ODQuNjczLDUwNS45MjIsNDc2LjU2N3pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGluZGV4ICsgMSkgKyBcIi4gXCIgKyBfdm0uX3MoaXRlbS50aXRsZSkpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9kb3NcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLnRvZG9zLCBmdW5jdGlvbih0b2RvLCB0b2RvSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogdG9kby5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2RvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvZG8tdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0b2RvSW5kZXggKyAxKSArIFwiLiBcIiArIF92bS5fcyh0b2RvLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=template&id=dc0ca4be&scoped=true&\n");

/***/ })

})