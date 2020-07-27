webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/Main.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _ConfirmModal = __webpack_require__(/*! app/components/modals/ConfirmModal.vue */ \"./src/app/components/modals/ConfirmModal.vue\");\n\nvar _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);\n\nvar _NoteCreateModal = __webpack_require__(/*! app/components/modals/NoteCreateModal.vue */ \"./src/app/components/modals/NoteCreateModal.vue\");\n\nvar _NoteCreateModal2 = _interopRequireDefault(_NoteCreateModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  name: 'Main',\n  components: {},\n  data: function data() {\n    return {};\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['notes'])),\n\n  created: function created() {},\n  beforeDestroy: function beforeDestroy() {},\n  mounted: function mounted() {\n    // this.openConfirm();\n  },\n\n\n  methods: {\n    createNote: function createNote() {\n      this.$modal.show(_NoteCreateModal2.default, {}, {\n        transition: 'fade'\n      });\n    },\n    openConfirm: function openConfirm() {\n      this.$modal.show(_ConfirmModal2.default, {\n        data: {\n          title: 't',\n          text: 's',\n          btns: {\n            confirm: {\n              title: 23\n            }\n          }\n        }\n      }, {\n        transition: 'fade'\n      });\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC92aWV3cy9NYWluLnZ1ZT9kNjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFtQkE7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVBO0FBQ0EsY0FEQTtBQUVBLGdCQUZBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsR0FMQTs7QUFNQSx1Q0FDQSxnQ0FEQSxDQU5BOztBQVVBLFNBVkEscUJBVUEsRUFWQTtBQVlBLGVBWkEsMkJBWUEsRUFaQTtBQWNBLFNBZEEscUJBY0E7QUFDQTtBQUNBLEdBaEJBOzs7QUFrQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0EsdUJBQ0EseUJBREEsRUFFQSxFQUZBLEVBR0E7QUFDQTtBQURBLE9BSEE7QUFPQSxLQVRBO0FBVUEsZUFWQSx5QkFVQTtBQUNBLHVCQUNBLHNCQURBLEVBRUE7QUFDQTtBQUNBLG9CQURBO0FBRUEsbUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBSEE7QUFEQSxPQUZBLEVBYUE7QUFDQTtBQURBLE9BYkE7QUFpQkE7QUE1QkE7QUFsQkEsQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtc3ZnLWlubGluZS1sb2FkZXIvZGlzdC9pbmRleC5taW4uanM/IS4vc3JjL2FwcC92aWV3cy9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFwcC1tYWluXCI+XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8aDE+XHJcbiAgICAgICAgTm90ZXNcclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzcz1cInByaW1hcnktYnRuXCIgQGNsaWNrPVwiY3JlYXRlTm90ZVwiPkNyZWF0ZSBOb3RlPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibm90ZXMtbGlzdFwiPlxyXG4gICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJub3RlXCIgdi1mb3I9XCJpdGVtIGluIG5vdGVzXCIgOmtleT1cIml0ZW0uaWRcIiA6dG89XCInL25vdGUvJyArIGl0ZW0uaWRcIj5cclxuICAgICAgICB7eyBpdGVtLnRpdGxlIH19XHJcbiAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XHJcblxyXG5pbXBvcnQgQ29uZnJpbU1vZGFsIGZyb20gJ2FwcC9jb21wb25lbnRzL21vZGFscy9Db25maXJtTW9kYWwudnVlJztcclxuaW1wb3J0IE5vdGVDcmVhdGVNb2RhbCBmcm9tICdhcHAvY29tcG9uZW50cy9tb2RhbHMvTm90ZUNyZWF0ZU1vZGFsLnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01haW4nLFxyXG4gIGNvbXBvbmVudHM6IHt9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwR2V0dGVycyhbJ25vdGVzJ10pLFxyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQoKSB7fSxcclxuXHJcbiAgYmVmb3JlRGVzdHJveSgpIHt9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgLy8gdGhpcy5vcGVuQ29uZmlybSgpO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNyZWF0ZU5vdGUoKSB7XHJcbiAgICAgIHRoaXMuJG1vZGFsLnNob3coXHJcbiAgICAgICAgTm90ZUNyZWF0ZU1vZGFsLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdmYWRlJyxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgb3BlbkNvbmZpcm0oKSB7XHJcbiAgICAgIHRoaXMuJG1vZGFsLnNob3coXHJcbiAgICAgICAgQ29uZnJpbU1vZGFsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICd0JyxcclxuICAgICAgICAgICAgdGV4dDogJ3MnLFxyXG4gICAgICAgICAgICBidG5zOiB7XHJcbiAgICAgICAgICAgICAgY29uZmlybToge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDIzLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ2ZhZGUnLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5hcHAtbWFpbiB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm5vdGVzLWxpc3Qge1xyXG4gICAgLm5vdGUge1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=template&id=dc0ca4be&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/Main.vue?vue&type=template&id=dc0ca4be&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"app-main\" }, [\n    _c(\"header\", [\n      _c(\"h1\", [_vm._v(\"\\n      Notes\\n    \")]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"primary-btn\", on: { click: _vm.createNote } }, [\n        _vm._v(\"Create Note\")\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"notes-list\" },\n      _vm._l(_vm.notes, function(item) {\n        return _c(\n          \"router-link\",\n          {\n            key: item.id,\n            staticClass: \"note\",\n            attrs: { to: \"/note/\" + item.id }\n          },\n          [_vm._v(\"\\n      \" + _vm._s(item.title) + \"\\n    \")]\n        )\n      }),\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL01haW4udnVlPzcyZTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0Msd0JBQXdCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvdmlld3MvTWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGMwY2E0YmUmc2NvcGVkPXRydWUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFwcC1tYWluXCIgfSwgW1xuICAgIF9jKFwiaGVhZGVyXCIsIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlxcbiAgICAgIE5vdGVzXFxuICAgIFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJpbWFyeS1idG5cIiwgb246IHsgY2xpY2s6IF92bS5jcmVhdGVOb3RlIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJDcmVhdGUgTm90ZVwiKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibm90ZXMtbGlzdFwiIH0sXG4gICAgICBfdm0uX2woX3ZtLm5vdGVzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL25vdGUvXCIgKyBpdGVtLmlkIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhpdGVtLnRpdGxlKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/Main.vue?vue&type=template&id=dc0ca4be&scoped=true&\n");

/***/ })

})