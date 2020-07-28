webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/Note.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _quillMin = __webpack_require__(/*! src/utils/libs/quill.min.js */ \"./src/utils/libs/quill.min.js\");\n\nvar _quillMin2 = _interopRequireDefault(_quillMin);\n\nvar _ConfirmModal = __webpack_require__(/*! app/components/modals/ConfirmModal.vue */ \"./src/app/components/modals/ConfirmModal.vue\");\n\nvar _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  name: 'Note',\n  components: {},\n  props: {\n    item: {\n      type: Object,\n      requred: true\n    },\n    index: {\n      type: Number\n    }\n  },\n  data: function data() {\n    return {\n      quill: null\n    };\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)([])),\n\n  mounted: function mounted() {\n    this.quill = new _quillMin2.default();\n    this.quill.setContents(this.item.text);\n  },\n\n  methods: {\n    removeNote: function removeNote(note) {\n      var _this = this;\n\n      this.$modal.show(_ConfirmModal2.default, {\n        data: {\n          title: 'Remove note',\n          text: 'Are you sure you want to remove this note?',\n          btns: {\n            confirm: {\n              title: 'Remove',\n              callback: function callback() {\n                _this.$store.dispatch('NOTE_REMOVE', note.id);\n              }\n            }\n          }\n        }\n      }, {\n        transition: 'fade'\n      });\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL05vdGUudnVlPzVjZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWtDQTs7QUFFQTs7OztBQUVBOzs7Ozs7a0JBRUE7QUFDQSxjQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBO0FBREE7QUFMQSxHQUhBO0FBWUEsTUFaQSxrQkFZQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBaEJBOztBQWlCQSx1Q0FDQSx5QkFEQSxDQWpCQTs7QUFxQkEsU0FyQkEscUJBcUJBO0FBQ0E7QUFDQTtBQUNBLEdBeEJBOztBQXlCQTtBQUNBLGNBREEsc0JBQ0EsSUFEQSxFQUNBO0FBQUE7O0FBQ0EsdUJBQ0Esc0JBREEsRUFFQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw0REFGQTtBQUdBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFIQTtBQURBLE9BRkEsRUFnQkE7QUFDQTtBQURBLE9BaEJBO0FBb0JBO0FBdEJBO0FBekJBLEMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvY29tcG9uZW50cy9Ob3RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhcHAtbm90ZVwiPlxuICAgIDxyb3V0ZXItbGluayBjbGFzcz1cIm5vdGVcIiA6dG89XCInL25vdGUvJyArIGl0ZW0uaWRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmUtbm90ZS1idG5cIiBAY2xpY2suc3RvcC5wcmV2ZW50PVwicmVtb3ZlTm90ZShpdGVtKVwiPlxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB2aWV3Qm94PVwiMCAwIDUxMi4wMDEgNTEyLjAwMVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB2LWJpbmQ6c3ZnLWlubGluZT1cIicnXCIgdi1iaW5kOnJvbGU9XCIncHJlc2VudGF0aW9uJ1wiIHYtYmluZDpmb2N1c2FibGU9XCInZmFsc2UnXCIgdi1iaW5kOnRhYmluZGV4PVwiJy0xJ1wiPlxyXG48Zz5cclxuXHQ8Zz5cclxuXHRcdDxwYXRoIGZpbGw9XCIjODg4ODg4XCIgZD1cIk01MDUuOTIyLDQ3Ni41NjdMMjg1LjM1NSwyNTZMNTA1LjkyLDM1LjQzNWM4LjEwNi04LjEwNSw4LjEwNi0yMS4yNDgsMC0yOS4zNTRjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMFxyXG5cdFx0XHRMMjU2LjAwMSwyMjYuNjQ2TDM1LjQzNCw2LjA4MWMtOC4xMDUtOC4xMDYtMjEuMjQ4LTguMTA2LTI5LjM1NCwwYy04LjEwNiw4LjEwNS04LjEwNiwyMS4yNDgsMCwyOS4zNTRMMjI2LjY0NiwyNTZMNi4wOCw0NzYuNTY3XHJcblx0XHRcdGMtOC4xMDYsOC4xMDYtOC4xMDYsMjEuMjQ4LDAsMjkuMzU0YzguMTA1LDguMTA1LDIxLjI0OCw4LjEwNiwyOS4zNTQsMGwyMjAuNTY3LTIyMC41NjdsMjIwLjU2NywyMjAuNTY3XHJcblx0XHRcdGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBTNTE0LjAyOCw0ODQuNjczLDUwNS45MjIsNDc2LjU2N3pcIi8+XHJcblx0PC9nPlxyXG48L2c+XHJcblxyXG48L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3sgaW5kZXggKyAxIH19LiB7eyBpdGVtLnRpdGxlIH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPnt7IGl0ZW0udGV4dCB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRvZG9zXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWZvcj1cIih0b2RvLCB0b2RvSW5kZXgpIGluIGl0ZW0udG9kb3NcIlxuICAgICAgICAgIDprZXk9XCJ0b2RvLmlkXCJcbiAgICAgICAgICBjbGFzcz1cInRvZG9cIlxuICAgICAgICAgIDpjbGFzcz1cInsgY29tcGxldGVkOiB0b2RvLmNvbXBsZXRlZCB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+e3sgdG9kb0luZGV4ICsgMSB9fS4ge3sgdG9kby50aXRsZSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcm91dGVyLWxpbms+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcblxuaW1wb3J0IFF1aWxsIGZyb20gJ3NyYy91dGlscy9saWJzL3F1aWxsLm1pbi5qcyc7XG5cbmltcG9ydCBDb25mcmltTW9kYWwgZnJvbSAnYXBwL2NvbXBvbmVudHMvbW9kYWxzL0NvbmZpcm1Nb2RhbC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdOb3RlJyxcbiAgY29tcG9uZW50czoge30sXG4gIHByb3BzOiB7XG4gICAgaXRlbToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVpbGw6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFtdKSxcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucXVpbGwgPSBuZXcgUXVpbGwoKTtcbiAgICB0aGlzLnF1aWxsLnNldENvbnRlbnRzKHRoaXMuaXRlbS50ZXh0KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlbW92ZU5vdGUobm90ZSkge1xuICAgICAgdGhpcy4kbW9kYWwuc2hvdyhcbiAgICAgICAgQ29uZnJpbU1vZGFsLFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdSZW1vdmUgbm90ZScsXG4gICAgICAgICAgICB0ZXh0OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG5vdGU/JyxcbiAgICAgICAgICAgIGJ0bnM6IHtcbiAgICAgICAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVtb3ZlJyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ05PVEVfUkVNT1ZFJywgbm90ZS5pZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRyYW5zaXRpb246ICdmYWRlJyxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uYXBwLW5vdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2VjLWJ0bi1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlYy1idG4tYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAucmVtb3ZlLW5vdGUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDogN3B4O1xuICAgIHBhZGRpbmc6IDZweDtcblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgLnRvZG9zIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogMTA3cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAudG9kbyB7XG4gICAgICAudG9kby10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgICYuY29tcGxldGVkIHtcbiAgICAgICAgLnRvZG8tdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWMtYnRuLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=script&lang=js&\n");

/***/ })

})