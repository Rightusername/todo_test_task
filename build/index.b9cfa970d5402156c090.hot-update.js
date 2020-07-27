webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Todo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/Todo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _downOutside = __webpack_require__(/*! src/utils/directives/down-outside */ \"./src/utils/directives/down-outside.js\");\n\nvar _events = __webpack_require__(/*! ../../utils/events */ \"./src/utils/events.js\");\n\nvar _Checkbox = __webpack_require__(/*! app/components/ui/Checkbox.vue */ \"./src/app/components/ui/Checkbox.vue\");\n\nvar _Checkbox2 = _interopRequireDefault(_Checkbox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'Todo',\n  components: {\n    Checkbox: _Checkbox2.default\n  },\n  directives: {\n    downOutside: _downOutside.downOutside\n  },\n  props: {\n    todo: {\n      type: Object,\n      required: true\n    },\n    lastCreatedTask: {\n      type: Object,\n      default: null\n    }\n  },\n  data: function data() {\n    return {\n      editable: false\n    };\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)([])),\n\n  mounted: function mounted() {\n    // events.addListener('TODO_SET_EDITABLE', this.onSetEditable);\n  },\n  destroyed: function destroyed() {\n    // events.removeListener('TODO_SET_EDITABLE', this.onSetEditable); // TODO fix TODO_SET_EDITABLE\n  },\n\n  methods: {\n    onSetEditable: function onSetEditable(id) {\n      if (this.todo.id == id) {\n        this.edit();\n      }\n    },\n    remove: function remove() {\n      this.$emit('remove', this.todo);\n    },\n    noedit: function noedit() {\n      this.editable = false;\n    },\n    edit: function edit() {\n      var _this = this;\n\n      this.editable = true;\n      setTimeout(function () {\n        _this.$refs.titleInput.focus();\n      }, 50);\n    },\n    save: function save() {\n      this.editable = false;\n    }\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC9jb21wb25lbnRzL1RvZG8udnVlP2E1NmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQTJCQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUVBO0FBQ0EsY0FEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0E7QUFDQTtBQURBLEdBTEE7QUFRQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUxBLEdBUkE7QUFrQkEsTUFsQkEsa0JBa0JBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0F0QkE7O0FBdUJBLHVDQUNBLHlCQURBLENBdkJBOztBQTJCQSxTQTNCQSxxQkEyQkE7QUFDQTtBQUNBLEdBN0JBO0FBOEJBLFdBOUJBLHVCQThCQTtBQUNBO0FBQ0EsR0FoQ0E7O0FBaUNBO0FBQ0EsaUJBREEseUJBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFVBTkEsb0JBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQSxVQVRBLG9CQVNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsUUFaQSxrQkFZQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsRUFFQSxFQUZBO0FBR0EsS0FqQkE7QUFrQkEsUUFsQkEsa0JBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQWpDQSxDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1zdmctaW5saW5lLWxvYWRlci9kaXN0L2luZGV4Lm1pbi5qcz8hLi9zcmMvYXBwL2NvbXBvbmVudHMvVG9kby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYXBwLXRvZG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUtd3JhcFwiIEBjbGljaz1cImVkaXQodG9kbylcIiB2LWRvd24tb3V0c2lkZT1cIm5vZWRpdFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiIHYtaWY9XCIhZWRpdGFibGVcIj57e3RvZG8udGl0bGV9fTwvcD5cbiAgICAgIDx0ZXh0YXJlYSByb3dzPVwiM1wiIHJlZj1cInRpdGxlSW5wdXRcIiB2LWlmPVwiZWRpdGFibGVcIiB2LW1vZGVsPVwidG9kby50aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0aXRsZVwiID48L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlbW92ZS1idG5cIiBAY2xpY2s9XCJyZW1vdmVcIj5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuXHQgdmlld0JveD1cIjAgMCA1MTIuMDAxIDUxMi4wMDFcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgdi1iaW5kOnN2Zy1pbmxpbmU9XCInJ1wiIHYtYmluZDpyb2xlPVwiJ3ByZXNlbnRhdGlvbidcIiB2LWJpbmQ6Zm9jdXNhYmxlPVwiJ2ZhbHNlJ1wiIHYtYmluZDp0YWJpbmRleD1cIictMSdcIj5cclxuPGc+XHJcblx0PGc+XHJcblx0XHQ8cGF0aCBmaWxsPVwiIzg4ODg4OFwiIGQ9XCJNNTA1LjkyMiw0NzYuNTY3TDI4NS4zNTUsMjU2TDUwNS45MiwzNS40MzVjOC4xMDYtOC4xMDUsOC4xMDYtMjEuMjQ4LDAtMjkuMzU0Yy04LjEwNS04LjEwNi0yMS4yNDgtOC4xMDYtMjkuMzU0LDBcclxuXHRcdFx0TDI1Ni4wMDEsMjI2LjY0NkwzNS40MzQsNi4wODFjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMGMtOC4xMDYsOC4xMDUtOC4xMDYsMjEuMjQ4LDAsMjkuMzU0TDIyNi42NDYsMjU2TDYuMDgsNDc2LjU2N1xyXG5cdFx0XHRjLTguMTA2LDguMTA2LTguMTA2LDIxLjI0OCwwLDI5LjM1NGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBsMjIwLjU2Ny0yMjAuNTY3bDIyMC41NjcsMjIwLjU2N1xyXG5cdFx0XHRjOC4xMDUsOC4xMDUsMjEuMjQ4LDguMTA2LDI5LjM1NCwwUzUxNC4wMjgsNDg0LjY3Myw1MDUuOTIyLDQ3Ni41Njd6XCIvPlxyXG5cdDwvZz5cclxuPC9nPlxyXG5cclxuPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDaGVja2JveCB2LW1vZGVsPVwidG9kby5jb21wbGV0ZWRcIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBkb3duT3V0c2lkZSB9IGZyb20gJ3NyYy91dGlscy9kaXJlY3RpdmVzL2Rvd24tb3V0c2lkZSc7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudHMnO1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnYXBwL2NvbXBvbmVudHMvdWkvQ2hlY2tib3gudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9kbycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDaGVja2JveCxcbiAgfSxcbiAgZGlyZWN0aXZlczoge1xuICAgIGRvd25PdXRzaWRlLFxuICB9LFxuICBwcm9wczoge1xuICAgIHRvZG86IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbGFzdENyZWF0ZWRUYXNrOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW10pLFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gZXZlbnRzLmFkZExpc3RlbmVyKCdUT0RPX1NFVF9FRElUQUJMRScsIHRoaXMub25TZXRFZGl0YWJsZSk7XG4gIH0sXG4gIGRlc3Ryb3llZCgpIHtcbiAgICAvLyBldmVudHMucmVtb3ZlTGlzdGVuZXIoJ1RPRE9fU0VUX0VESVRBQkxFJywgdGhpcy5vblNldEVkaXRhYmxlKTsgLy8gVE9ETyBmaXggVE9ET19TRVRfRURJVEFCTEVcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uU2V0RWRpdGFibGUoaWQpIHtcbiAgICAgIGlmICh0aGlzLnRvZG8uaWQgPT0gaWQpIHtcbiAgICAgICAgdGhpcy5lZGl0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdyZW1vdmUnLCB0aGlzLnRvZG8pO1xuICAgIH0sXG4gICAgbm9lZGl0KCkge1xuICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgZWRpdCgpIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJHJlZnMudGl0bGVJbnB1dC5mb2N1cygpO1xuICAgICAgfSwgNTApO1xuICAgIH0sXG4gICAgc2F2ZSgpIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbkBpbXBvcnQgJ35zdHlsZXMvX21peGlucy5zY3NzJztcblxuLmFwcC10b2RvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC50aXRsZS13cmFwIHtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAudGl0bGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHAudGl0bGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgdGV4dGFyZWEudGl0bGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2VjLWJ0bi1iZyk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlYy1idG4tYm9yZGVyLWNvbG9yKTtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBAaW5jbHVkZSBzY3JvbGxiYXIoMnB4KTtcbiAgICB9XG4gIFxuICB9XG5cblxuICAuY29udHJvbHMge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAucmVtb3ZlLWJ0biB7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcblxuICAgICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Todo.vue?vue&type=script&lang=js&\n");

/***/ })

})