webpackHotUpdate("index",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _common = __webpack_require__(/*! src/utils/common */ \"./src/utils/common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vuex2.default);\n\nexports.default = new _vuex2.default.Store({\n  plugins: [],\n  state: {\n    notes: []\n  },\n  getters: {\n    notes: function notes(state) {\n      return state.notes;\n    }\n  },\n  mutations: {\n    SET_STATE: function SET_STATE(state, payload) {\n      (0, _assign2.default)(state, payload);\n    },\n    NOTE_ADD: function NOTE_ADD(state, payload) {\n      payload.id = (0, _common.generateID)();\n      state.notes.push(payload);\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(state, id) {\n      state.notes.find(function (item, index) {\n        console.log(item);\n        if (item.id == id) {\n          state.notes.splice(index, 1);\n          return;\n        }\n      });\n    },\n    NOTE_EDIT: function NOTE_EDIT(state, payload) {\n      state.notes.find(function (item, index) {\n        if (item.id == payload.id) {\n          state.notes.splice(index, 1, payload);\n          return;\n        }\n      });\n    }\n  },\n  actions: {\n    NOTE_ADD: function NOTE_ADD(context, payload) {\n      context.commit('NOTE_ADD', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_EDIT: function NOTE_EDIT(context, payload) {\n      context.commit('NOTE_EDIT', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(context, payload) {\n      context.commit('NOTE_REMOVE', payload);\n      // context.dispatch('SAVE_STATE');\n    },\n\n    SAVE_STATE: function SAVE_STATE(context, payload) {\n      localStorage.setItem('state', (0, _stringify2.default)(context.state));\n    },\n\n    LOAD_STATE: function LOAD_STATE(context, payload) {\n      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));\n    }\n  },\n  modules: {}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJwbHVnaW5zIiwic3RhdGUiLCJub3RlcyIsImdldHRlcnMiLCJtdXRhdGlvbnMiLCJTRVRfU1RBVEUiLCJwYXlsb2FkIiwiTk9URV9BREQiLCJpZCIsInB1c2giLCJOT1RFX1JFTU9WRSIsImZpbmQiLCJpdGVtIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwiTk9URV9FRElUIiwiYWN0aW9ucyIsImNvbnRleHQiLCJjb21taXQiLCJkaXNwYXRjaCIsIlNBVkVfU1RBVEUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9BRF9TVEFURSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJtb2R1bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFJQTs7OztBQUZBQSxjQUFJQyxHQUFKLENBQVFDLGNBQVI7O2tCQUllLElBQUlBLGVBQUtDLEtBQVQsQ0FBZTtBQUM1QkMsV0FBUyxFQURtQjtBQUk1QkMsU0FBTztBQUNMQyxXQUFPO0FBREYsR0FKcUI7QUFPNUJDLFdBQVM7QUFDUEQsV0FBTyxzQkFBUztBQUNkLGFBQU9ELE1BQU1DLEtBQWI7QUFDRDtBQUhNLEdBUG1CO0FBWTVCRSxhQUFXO0FBQ1RDLGVBQVcsbUJBQUNKLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM3Qiw0QkFBY0wsS0FBZCxFQUFxQkssT0FBckI7QUFDRCxLQUhRO0FBSVRDLGNBQVUsa0JBQUNOLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM1QkEsY0FBUUUsRUFBUixHQUFhLHlCQUFiO0FBQ0FQLFlBQU1DLEtBQU4sQ0FBWU8sSUFBWixDQUFpQkgsT0FBakI7QUFDRCxLQVBRO0FBUVRJLGlCQUFhLHFCQUFDVCxLQUFELEVBQVFPLEVBQVIsRUFBZTtBQUMxQlAsWUFBTUMsS0FBTixDQUFZUyxJQUFaLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoQ0MsZ0JBQVFDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLFlBQUlBLEtBQUtKLEVBQUwsSUFBV0EsRUFBZixFQUFtQjtBQUNqQlAsZ0JBQU1DLEtBQU4sQ0FBWWMsTUFBWixDQUFtQkgsS0FBbkIsRUFBMEIsQ0FBMUI7QUFDQTtBQUNEO0FBQ0YsT0FORDtBQU9ELEtBaEJRO0FBaUJUSSxlQUFXLG1CQUFDaEIsS0FBRCxFQUFRSyxPQUFSLEVBQW9CO0FBQzdCTCxZQUFNQyxLQUFOLENBQVlTLElBQVosQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2hDLFlBQUlELEtBQUtKLEVBQUwsSUFBV0YsUUFBUUUsRUFBdkIsRUFBMkI7QUFDekJQLGdCQUFNQyxLQUFOLENBQVljLE1BQVosQ0FBbUJILEtBQW5CLEVBQTBCLENBQTFCLEVBQTZCUCxPQUE3QjtBQUNBO0FBQ0Q7QUFDRixPQUxEO0FBTUQ7QUF4QlEsR0FaaUI7QUFzQzVCWSxXQUFTO0FBQ1BYLGNBQVUsa0JBQUNZLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUM5QmEsY0FBUUMsTUFBUixDQUFlLFVBQWYsRUFBMkJkLE9BQTNCO0FBQ0FhLGNBQVFFLFFBQVIsQ0FBaUIsWUFBakI7QUFDRCxLQUpNO0FBS1BKLGVBQVcsbUJBQUNFLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUMvQmEsY0FBUUMsTUFBUixDQUFlLFdBQWYsRUFBNEJkLE9BQTVCO0FBQ0FhLGNBQVFFLFFBQVIsQ0FBaUIsWUFBakI7QUFDRCxLQVJNO0FBU1BYLGlCQUFhLHFCQUFDUyxPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDakNhLGNBQVFDLE1BQVIsQ0FBZSxhQUFmLEVBQThCZCxPQUE5QjtBQUNBO0FBQ0QsS0FaTTs7QUFjUGdCLGdCQUFZLG9CQUFDSCxPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDaENpQixtQkFBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4Qix5QkFBZUwsUUFBUWxCLEtBQXZCLENBQTlCO0FBQ0QsS0FoQk07O0FBa0JQd0IsZ0JBQVksb0JBQUNOLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUNoQ2EsY0FBUUMsTUFBUixDQUFlLFdBQWYsRUFBNEJNLEtBQUtDLEtBQUwsQ0FBV0osYUFBYUssT0FBYixDQUFxQixPQUFyQixDQUFYLENBQTVCO0FBQ0Q7QUFwQk0sR0F0Q21CO0FBNEQ1QkMsV0FBUztBQTVEbUIsQ0FBZixDIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcclxuXHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSAnc3JjL3V0aWxzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgcGx1Z2luczogW1xyXG5cclxuICBdLFxyXG4gIHN0YXRlOiB7XHJcbiAgICBub3RlczogW10sXHJcbiAgfSxcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBub3Rlczogc3RhdGUgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGUubm90ZXM7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICBTRVRfU1RBVEU6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLCBwYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBOT1RFX0FERDogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIHBheWxvYWQuaWQgPSBnZW5lcmF0ZUlEKCk7XHJcbiAgICAgIHN0YXRlLm5vdGVzLnB1c2gocGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgTk9URV9SRU1PVkU6IChzdGF0ZSwgaWQpID0+IHtcclxuICAgICAgc3RhdGUubm90ZXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgc3RhdGUubm90ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIE5PVEVfRURJVDogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIHN0YXRlLm5vdGVzLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT0gcGF5bG9hZC5pZCkge1xyXG4gICAgICAgICAgc3RhdGUubm90ZXMuc3BsaWNlKGluZGV4LCAxLCBwYXlsb2FkKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIE5PVEVfQUREOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdCgnTk9URV9BREQnLCBwYXlsb2FkKTtcclxuICAgICAgY29udGV4dC5kaXNwYXRjaCgnU0FWRV9TVEFURScpO1xyXG4gICAgfSxcclxuICAgIE5PVEVfRURJVDogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgY29udGV4dC5jb21taXQoJ05PVEVfRURJVCcsIHBheWxvYWQpO1xyXG4gICAgICBjb250ZXh0LmRpc3BhdGNoKCdTQVZFX1NUQVRFJyk7XHJcbiAgICB9LFxyXG4gICAgTk9URV9SRU1PVkU6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KCdOT1RFX1JFTU9WRScsIHBheWxvYWQpO1xyXG4gICAgICAvLyBjb250ZXh0LmRpc3BhdGNoKCdTQVZFX1NUQVRFJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIFNBVkVfU1RBVEU6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsIEpTT04uc3RyaW5naWZ5KGNvbnRleHQuc3RhdGUpKTtcclxuICAgIH0sXHJcblxyXG4gICAgTE9BRF9TVEFURTogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgY29udGV4dC5jb21taXQoJ1NFVF9TVEFURScsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRlJykpKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb2R1bGVzOiB7fSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})