webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Todo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/Todo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _downOutside = __webpack_require__(/*! src/utils/directives/down-outside */ \"./src/utils/directives/down-outside.js\");\n\nvar _events = __webpack_require__(/*! ../../utils/events */ \"./src/utils/events.js\");\n\nvar _Checkbox = __webpack_require__(/*! app/components/ui/Checkbox.vue */ \"./src/app/components/ui/Checkbox.vue\");\n\nvar _Checkbox2 = _interopRequireDefault(_Checkbox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'Todo',\n  components: {\n    Checkbox: _Checkbox2.default\n  },\n  directives: {\n    downOutside: _downOutside.downOutside\n  },\n  props: {\n    todo: {\n      type: Object,\n      required: true\n    },\n    lastCreatedTask: {\n      type: Object,\n      default: null\n    }\n  },\n  data: function data() {\n    return {\n      editable: false\n    };\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)([])),\n\n  mounted: function mounted() {\n    // events.addListener('TODO_SET_EDITABLE', this.onSetEditable);\n    if (this.lastCreatedTask.id == this.todo.id) {\n      this.edit();\n    }\n  },\n  destroyed: function destroyed() {\n    // events.removeListener('TODO_SET_EDITABLE', this.onSetEditable); // TODO fix TODO_SET_EDITABLE\n  },\n\n  methods: {\n    onSetEditable: function onSetEditable(id) {\n      if (this.todo.id == id) {\n        this.edit();\n      }\n    },\n    remove: function remove() {\n      this.$emit('remove', this.todo);\n    },\n    noedit: function noedit() {\n      this.editable = false;\n    },\n    edit: function edit() {\n      var _this = this;\n\n      this.editable = true;\n      setTimeout(function () {\n        _this.$refs.titleInput.focus();\n      }, 50);\n    },\n    save: function save() {\n      this.editable = false;\n    }\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL1RvZG8udnVlP2E1NmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQTJCQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUVBO0FBQ0EsY0FEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0E7QUFDQTtBQURBLEdBTEE7QUFRQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUxBLEdBUkE7QUFrQkEsTUFsQkEsa0JBa0JBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0F0QkE7O0FBdUJBLHVDQUNBLHlCQURBLENBdkJBOztBQTJCQSxTQTNCQSxxQkEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBaENBO0FBaUNBLFdBakNBLHVCQWlDQTtBQUNBO0FBQ0EsR0FuQ0E7O0FBb0NBO0FBQ0EsaUJBREEseUJBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFVBTkEsb0JBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQSxVQVRBLG9CQVNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsUUFaQSxrQkFZQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxFQUZBO0FBR0EsS0FqQkE7QUFrQkEsUUFsQkEsa0JBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQXBDQSxDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1zdmctaW5saW5lLWxvYWRlci9kaXN0L2luZGV4Lm1pbi5qcz8hLi9zcmMvYXBwL2NvbXBvbmVudHMvVG9kby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYXBwLXRvZG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUtd3JhcFwiIEBjbGljaz1cImVkaXQodG9kbylcIiB2LWRvd24tb3V0c2lkZT1cIm5vZWRpdFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiIHYtaWY9XCIhZWRpdGFibGVcIj57e3RvZG8udGl0bGV9fTwvcD5cbiAgICAgIDx0ZXh0YXJlYSByb3dzPVwiM1wiIHJlZj1cInRpdGxlSW5wdXRcIiB2LWlmPVwiZWRpdGFibGVcIiB2LW1vZGVsPVwidG9kby50aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0aXRsZVwiID48L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlbW92ZS1idG5cIiBAY2xpY2s9XCJyZW1vdmVcIj5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuXHQgdmlld0JveD1cIjAgMCA1MTIuMDAxIDUxMi4wMDFcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgdi1iaW5kOnN2Zy1pbmxpbmU9XCInJ1wiIHYtYmluZDpyb2xlPVwiJ3ByZXNlbnRhdGlvbidcIiB2LWJpbmQ6Zm9jdXNhYmxlPVwiJ2ZhbHNlJ1wiIHYtYmluZDp0YWJpbmRleD1cIictMSdcIj5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8cGF0aCBmaWxsPVwiIzg4ODg4OFwiIGQ9XCJNNTA1LjkyMiw0NzYuNTY3TDI4NS4zNTUsMjU2TDUwNS45MiwzNS40MzVjOC4xMDYtOC4xMDUsOC4xMDYtMjEuMjQ4LDAtMjkuMzU0Yy04LjEwNS04LjEwNi0yMS4yNDgtOC4xMDYtMjkuMzU0LDBcclxuXHRcdFx0TDI1Ni4wMDEsMjI2LjY0NkwzNS40MzQsNi4wODFjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMGMtOC4xMDYsOC4xMDUtOC4xMDYsMjEuMjQ4LDAsMjkuMzU0TDIyNi42NDYsMjU2TDYuMDgsNDc2LjU2N1xyXG5cdFx0XHRjLTguMTA2LDguMTA2LTguMTA2LDIxLjI0OCwwLDI5LjM1NGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBsMjIwLjU2Ny0yMjAuNTY3bDIyMC41NjcsMjIwLjU2N1xyXG5cdFx0XHRjOC4xMDUsOC4xMDUsMjEuMjQ4LDguMTA2LDI5LjM1NCwwUzUxNC4wMjgsNDg0LjY3Myw1MDUuOTIyLDQ3Ni41Njd6XCIvPlxyXG5cdDwvZz5cclxuPC9nPlxyXG5cclxuPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDaGVja2JveCB2LW1vZGVsPVwidG9kby5jb21wbGV0ZWRcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBkb3duT3V0c2lkZSB9IGZyb20gJ3NyYy91dGlscy9kaXJlY3RpdmVzL2Rvd24tb3V0c2lkZSc7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudHMnO1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnYXBwL2NvbXBvbmVudHMvdWkvQ2hlY2tib3gudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9kbycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDaGVja2JveCxcbiAgfSxcbiAgZGlyZWN0aXZlczoge1xuICAgIGRvd25PdXRzaWRlLFxuICB9LFxuICBwcm9wczoge1xuICAgIHRvZG86IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbGFzdENyZWF0ZWRUYXNrOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW10pLFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gZXZlbnRzLmFkZExpc3RlbmVyKCdUT0RPX1NFVF9FRElUQUJMRScsIHRoaXMub25TZXRFZGl0YWJsZSk7XG4gICAgaWYgKHRoaXMubGFzdENyZWF0ZWRUYXNrLmlkID09IHRoaXMudG9kby5pZCkge1xuICAgICAgdGhpcy5lZGl0KCk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95ZWQoKSB7XG4gICAgLy8gZXZlbnRzLnJlbW92ZUxpc3RlbmVyKCdUT0RPX1NFVF9FRElUQUJMRScsIHRoaXMub25TZXRFZGl0YWJsZSk7IC8vIFRPRE8gZml4IFRPRE9fU0VUX0VESVRBQkxFXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNldEVkaXRhYmxlKGlkKSB7XG4gICAgICBpZiAodGhpcy50b2RvLmlkID09IGlkKSB7XG4gICAgICAgIHRoaXMuZWRpdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlKCkge1xuICAgICAgdGhpcy4kZW1pdCgncmVtb3ZlJywgdGhpcy50b2RvKTtcbiAgICB9LFxuICAgIG5vZWRpdCgpIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGVkaXQoKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLnRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIH0sIDUwKTtcbiAgICB9LFxuICAgIHNhdmUoKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlID0gZmFsc2U7XG4gICAgfVxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5AaW1wb3J0ICd+c3R5bGVzL19taXhpbnMuc2Nzcyc7XG5cbi5hcHAtdG9kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUtd3JhcCB7XG4gICAgZmxleC1ncm93OiAxO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBwLnRpdGxlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIHRleHRhcmVhLnRpdGxlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlYy1idG4tYmcpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWMtYnRuLWJvcmRlci1jb2xvcik7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgQGluY2x1ZGUgc2Nyb2xsYmFyKDJweCk7XG4gICAgfVxuICBcbiAgfVxuXG5cbiAgLmNvbnRyb2xzIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgLnJlbW92ZS1idG4ge1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Todo.vue?vue&type=script&lang=js&\n");

/***/ })

})