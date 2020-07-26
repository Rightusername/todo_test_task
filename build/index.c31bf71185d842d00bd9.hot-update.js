webpackHotUpdate("index",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/NoteView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _cloneDeep = __webpack_require__(/*! lodash-es/cloneDeep */ \"./node_modules/lodash-es/cloneDeep.js\");\n\nvar _cloneDeep2 = _interopRequireDefault(_cloneDeep);\n\nvar _NoteEditor = __webpack_require__(/*! app/components/NoteEditor.vue */ \"./src/app/components/NoteEditor.vue\");\n\nvar _NoteEditor2 = _interopRequireDefault(_NoteEditor);\n\nvar _Todo = __webpack_require__(/*! app/components/Todo.vue */ \"./src/app/components/Todo.vue\");\n\nvar _Todo2 = _interopRequireDefault(_Todo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  name: 'NoteView',\n  components: {\n    NoteEditor: _NoteEditor2.default,\n    Todo: _Todo2.default\n  },\n  data: function data() {\n    return {\n      note: null\n    };\n  },\n\n  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['notes'])),\n\n  created: function created() {\n    var _this = this;\n\n    this.note = (0, _cloneDeep2.default)(this.notes.find(function (i) {\n      return i.id == _this.$route.params.id;\n    }), true);\n    if (!this.note) {\n      this.$router.push('/');\n    }\n  },\n  beforeDestroy: function beforeDestroy() {},\n  mounted: function mounted() {},\n\n\n  methods: {\n    saveNote: function saveNote() {\n      this.$store.dispatch('NOTE_EDIT', this.note);\n    },\n    onTodoRemove: function onTodoRemove(todo) {\n      var _this2 = this;\n\n      this.note.todos.find(function (item, index) {\n        if (item && item.id == todo.id) {\n          _this2.note.todos.splice(index, 1);\n          return;\n        }\n      });\n    }\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC92aWV3cy9Ob3RlVmlldy52dWU/ZTI2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBb0JBOztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRUE7QUFDQSxrQkFEQTtBQUVBO0FBQ0Esb0NBREE7QUFFQTtBQUZBLEdBRkE7QUFNQSxNQU5BLGtCQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FWQTs7QUFXQSx1Q0FDQSxnQ0FEQSxDQVhBOztBQWdCQSxTQWhCQSxxQkFnQkE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJCQTtBQXVCQSxlQXZCQSwyQkF1QkEsRUF2QkE7QUF5QkEsU0F6QkEscUJBeUJBLENBQ0EsQ0ExQkE7OztBQTRCQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxnQkFMQSx3QkFLQSxJQUxBLEVBS0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU1BO0FBWkE7QUE1QkEsQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtc3ZnLWlubGluZS1sb2FkZXIvZGlzdC9pbmRleC5taW4uanM/IS4vc3JjL2FwcC92aWV3cy9Ob3RlVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgdi1pZj1cIm5vdGVcIiBjbGFzcz1cImFwcC1ub3RlLXZpZXdcIj5cclxuICAgIHt7IG5vdGUudGl0bGUgfX1cclxuICAgIDxOb3RlRWRpdG9yIHYtbW9kZWw9XCJub3RlLnRleHRcIiAvPlxyXG4gICAgPGgyPlRvZG8gTGlzdDwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidC10b2Rvc1wiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiKHRvZG8sIGluZGV4KSBpbiBub3RlLnRvZG9zXCIgOmtleT1cInRvZG8uaWRcIiBjbGFzcz1cInRvZG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPnt7IGluZGV4ICsgMSB9fS48L2Rpdj5cclxuICAgICAgICA8VG9kbyA6dG9kbz1cInRvZG9cIiBAcmVtb3ZlPVwib25Ub2RvUmVtb3ZlKHRvZG8pXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS1sYWJlbFwiIHYtaWY9XCJub3RlLnRvZG9zLmxlbmd0aCA9PSAwXCI+XHJcbiAgICAgICAgTm8gdGFza3MgeWV0XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cm91dGVyLWxpbmsgdG89XCIvXCI+YmFjazwvcm91dGVyLWxpbms+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2F2ZS1idG5cIiBAY2xpY2s9XCJzYXZlTm90ZVwiPnNhdmU8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcclxuXHJcbmltcG9ydCBjbG9uZWRlZXAgZnJvbSAnbG9kYXNoLWVzL2Nsb25lRGVlcCc7XHJcblxyXG5pbXBvcnQgTm90ZUVkaXRvciBmcm9tICdhcHAvY29tcG9uZW50cy9Ob3RlRWRpdG9yLnZ1ZSc7XHJcbmltcG9ydCBUb2RvIGZyb20gJ2FwcC9jb21wb25lbnRzL1RvZG8udnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnTm90ZVZpZXcnLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIE5vdGVFZGl0b3IsXHJcbiAgICBUb2RvLFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdGU6IG51bGwsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcEdldHRlcnMoWydub3RlcyddKSxcclxuICB9LFxyXG5cclxuXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMubm90ZSA9IGNsb25lZGVlcCh0aGlzLm5vdGVzLmZpbmQoaSA9PiBpLmlkID09IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCksIHRydWUpO1xyXG4gICAgaWYgKCF0aGlzLm5vdGUpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBiZWZvcmVEZXN0cm95KCkge30sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2F2ZU5vdGUoKSB7XHJcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdOT1RFX0VESVQnLCB0aGlzLm5vdGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvZG9SZW1vdmUodG9kbykge1xyXG4gICAgICB0aGlzLm5vdGUudG9kb3MuZmluZCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLmlkID09IHRvZG8uaWQpIHtcclxuICAgICAgICAgIHRoaXMubm90ZS50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0ICd+c3R5bGVzL19taXhpbnMuc2Nzcyc7XHJcblxyXG4uYXBwLW5vdGUtdmlldyB7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnQtdG9kb3Mge1xyXG4gICAgLnRvZG8ge1xyXG4gICAgICAuY291bnRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=script&lang=js&\n");

/***/ })

})