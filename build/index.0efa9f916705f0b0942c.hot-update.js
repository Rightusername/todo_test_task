webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/Note.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _quillMin = __webpack_require__(/*! src/utils/libs/quill.min.js */ \"./src/utils/libs/quill.min.js\");\n\nvar _quillMin2 = _interopRequireDefault(_quillMin);\n\nvar _ConfirmModal = __webpack_require__(/*! app/components/modals/ConfirmModal.vue */ \"./src/app/components/modals/ConfirmModal.vue\");\n\nvar _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  name: 'Note',\n  components: {},\n  props: {\n    item: {\n      type: Object,\n      requred: true\n    },\n    index: {\n      type: Number\n    }\n  },\n  data: function data() {\n    return {\n      quill: null\n    };\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)([])),\n\n  mounted: function mounted() {\n    this.quill = new _quillMin2.default(this.$refs.text, {\n      modules: {\n        toolbar: false\n      },\n      theme: 'snow'\n    });\n    this.quill.setContents(this.item.text);\n  },\n\n  methods: {\n    removeNote: function removeNote(note) {\n      var _this = this;\n\n      this.$modal.show(_ConfirmModal2.default, {\n        data: {\n          title: 'Remove note',\n          text: 'Are you sure you want to remove this note?',\n          btns: {\n            confirm: {\n              title: 'Remove',\n              callback: function callback() {\n                _this.$store.dispatch('NOTE_REMOVE', note.id);\n              }\n            }\n          }\n        }\n      }, {\n        transition: 'fade'\n      });\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL05vdGUudnVlPzVjZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWdDQTs7QUFFQTs7OztBQUVBOzs7Ozs7a0JBRUE7QUFDQSxjQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBO0FBREE7QUFMQSxHQUhBO0FBWUEsTUFaQSxrQkFZQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBaEJBOztBQWlCQSx1Q0FDQSx5QkFEQSxDQWpCQTs7QUFxQkEsU0FyQkEscUJBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBREEsT0FEQTtBQUlBO0FBSkE7QUFNQTtBQUNBLEdBN0JBOztBQThCQTtBQUNBLGNBREEsc0JBQ0EsSUFEQSxFQUNBO0FBQUE7O0FBQ0EsdUJBQ0Esc0JBREEsRUFFQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw0REFGQTtBQUdBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFIQTtBQURBLE9BRkEsRUFnQkE7QUFDQTtBQURBLE9BaEJBO0FBb0JBO0FBdEJBO0FBOUJBLEMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvY29tcG9uZW50cy9Ob3RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxyb3V0ZXItbGluayBjbGFzcz1cImFwcC1ub3RlXCIgOnRvPVwiJy9ub3RlLycgKyBpdGVtLmlkXCI+XG4gICAgPGRpdiBjbGFzcz1cInJlbW92ZS1ub3RlLWJ0blwiIEBjbGljay5zdG9wLnByZXZlbnQ9XCJyZW1vdmVOb3RlKGl0ZW0pXCI+XG4gICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB2aWV3Qm94PVwiMCAwIDUxMi4wMDEgNTEyLjAwMVwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB2LWJpbmQ6c3ZnLWlubGluZT1cIicnXCIgdi1iaW5kOnJvbGU9XCIncHJlc2VudGF0aW9uJ1wiIHYtYmluZDpmb2N1c2FibGU9XCInZmFsc2UnXCIgdi1iaW5kOnRhYmluZGV4PVwiJy0xJ1wiPlxyXG48Zz5cclxuXHQ8Zz5cclxuXHRcdDxwYXRoIGZpbGw9XCIjODg4ODg4XCIgZD1cIk01MDUuOTIyLDQ3Ni41NjdMMjg1LjM1NSwyNTZMNTA1LjkyLDM1LjQzNWM4LjEwNi04LjEwNSw4LjEwNi0yMS4yNDgsMC0yOS4zNTRjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMFxyXG5cdFx0XHRMMjU2LjAwMSwyMjYuNjQ2TDM1LjQzNCw2LjA4MWMtOC4xMDUtOC4xMDYtMjEuMjQ4LTguMTA2LTI5LjM1NCwwYy04LjEwNiw4LjEwNS04LjEwNiwyMS4yNDgsMCwyOS4zNTRMMjI2LjY0NiwyNTZMNi4wOCw0NzYuNTY3XHJcblx0XHRcdGMtOC4xMDYsOC4xMDYtOC4xMDYsMjEuMjQ4LDAsMjkuMzU0YzguMTA1LDguMTA1LDIxLjI0OCw4LjEwNiwyOS4zNTQsMGwyMjAuNTY3LTIyMC41NjdsMjIwLjU2NywyMjAuNTY3XHJcblx0XHRcdGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBTNTE0LjAyOCw0ODQuNjczLDUwNS45MjIsNDc2LjU2N3pcIi8+XHJcblx0PC9nPlxyXG48L2c+XHJcblxyXG48L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBpbmRleCArIDEgfX0uIHt7IGl0ZW0udGl0bGUgfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIHJlZj1cInRleHRcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidG9kb3NcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1mb3I9XCIodG9kbywgdG9kb0luZGV4KSBpbiBpdGVtLnRvZG9zXCJcbiAgICAgICAgOmtleT1cInRvZG8uaWRcIlxuICAgICAgICBjbGFzcz1cInRvZG9cIlxuICAgICAgICA6Y2xhc3M9XCJ7IGNvbXBsZXRlZDogdG9kby5jb21wbGV0ZWQgfVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+e3sgdG9kb0luZGV4ICsgMSB9fS4ge3sgdG9kby50aXRsZSB9fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvcm91dGVyLWxpbms+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuXG5pbXBvcnQgUXVpbGwgZnJvbSAnc3JjL3V0aWxzL2xpYnMvcXVpbGwubWluLmpzJztcblxuaW1wb3J0IENvbmZyaW1Nb2RhbCBmcm9tICdhcHAvY29tcG9uZW50cy9tb2RhbHMvQ29uZmlybU1vZGFsLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ05vdGUnLFxuICBjb21wb25lbnRzOiB7fSxcbiAgcHJvcHM6IHtcbiAgICBpdGVtOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1cmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBxdWlsbDogbnVsbCxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW10pLFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5xdWlsbCA9IG5ldyBRdWlsbCh0aGlzLiRyZWZzLnRleHQsIHtcbiAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgdG9vbGJhcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgdGhlbWU6ICdzbm93JyxcbiAgICB9KTtcbiAgICB0aGlzLnF1aWxsLnNldENvbnRlbnRzKHRoaXMuaXRlbS50ZXh0KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHJlbW92ZU5vdGUobm90ZSkge1xuICAgICAgdGhpcy4kbW9kYWwuc2hvdyhcbiAgICAgICAgQ29uZnJpbU1vZGFsLFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdSZW1vdmUgbm90ZScsXG4gICAgICAgICAgICB0ZXh0OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIG5vdGU/JyxcbiAgICAgICAgICAgIGJ0bnM6IHtcbiAgICAgICAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVtb3ZlJyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ05PVEVfUkVNT1ZFJywgbm90ZS5pZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRyYW5zaXRpb246ICdmYWRlJyxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uYXBwLW5vdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2VjLWJ0bi1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlYy1idG4tYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvZGVlcC8gLnFsLWVkaXRvciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gIH1cblxuICAucmVtb3ZlLW5vdGUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDogN3B4O1xuICAgIHBhZGRpbmc6IDZweDtcblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgLnRvZG9zIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC50b2RvIHtcbiAgICAgIC50b2RvLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgJi5jb21wbGV0ZWQge1xuICAgICAgICAudG9kby10aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlYy1idG4tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Note.vue?vue&type=script&lang=js&\n");

/***/ })

})