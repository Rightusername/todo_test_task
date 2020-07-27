webpackHotUpdate("index",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _common = __webpack_require__(/*! src/utils/common */ \"./src/utils/common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vuex2.default);\n\nexports.default = new _vuex2.default.Store({\n  plugins: [],\n  state: {\n    notes: []\n  },\n  getters: {\n    notes: function notes(state) {\n      return state.notes;\n    }\n  },\n  mutations: {\n    SET_STATE: function SET_STATE(state, payload) {\n      (0, _assign2.default)(state, payload);\n    },\n    NOTE_ADD: function NOTE_ADD(state, payload) {\n      payload.id = (0, _common.generateID)();\n      state.notes.push(payload);\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(state, id) {\n      var index = state.notes.findIndex(function (item) {\n        console.log(item.id == id);\n        if (item.id == id) {\n          return;\n        }\n      });\n      console.log(index);\n      if (index) {\n        state.notes.splice(index, 1);\n      }\n    },\n    NOTE_EDIT: function NOTE_EDIT(state, payload) {\n      var index = state.notes.findIndex(function (item) {\n        return item.id == payload.id;\n      });\n      if (index) {\n        state.notes.splice(index, 1, payload);\n      }\n    }\n  },\n  actions: {\n    NOTE_ADD: function NOTE_ADD(context, payload) {\n      context.commit('NOTE_ADD', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_EDIT: function NOTE_EDIT(context, payload) {\n      context.commit('NOTE_EDIT', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(context, payload) {\n      context.commit('NOTE_REMOVE', payload);\n      // context.dispatch('SAVE_STATE');\n    },\n\n    SAVE_STATE: function SAVE_STATE(context, payload) {\n      localStorage.setItem('state', (0, _stringify2.default)(context.state));\n    },\n\n    LOAD_STATE: function LOAD_STATE(context, payload) {\n      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));\n    }\n  },\n  modules: {}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJwbHVnaW5zIiwic3RhdGUiLCJub3RlcyIsImdldHRlcnMiLCJtdXRhdGlvbnMiLCJTRVRfU1RBVEUiLCJwYXlsb2FkIiwiTk9URV9BREQiLCJpZCIsInB1c2giLCJOT1RFX1JFTU9WRSIsImluZGV4IiwiZmluZEluZGV4IiwiY29uc29sZSIsImxvZyIsIml0ZW0iLCJzcGxpY2UiLCJOT1RFX0VESVQiLCJhY3Rpb25zIiwiY29udGV4dCIsImNvbW1pdCIsImRpc3BhdGNoIiwiU0FWRV9TVEFURSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJMT0FEX1NUQVRFIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsIm1vZHVsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUlBOzs7O0FBRkFBLGNBQUlDLEdBQUosQ0FBUUMsY0FBUjs7a0JBSWUsSUFBSUEsZUFBS0MsS0FBVCxDQUFlO0FBQzVCQyxXQUFTLEVBRG1CO0FBSTVCQyxTQUFPO0FBQ0xDLFdBQU87QUFERixHQUpxQjtBQU81QkMsV0FBUztBQUNQRCxXQUFPLHNCQUFTO0FBQ2QsYUFBT0QsTUFBTUMsS0FBYjtBQUNEO0FBSE0sR0FQbUI7QUFZNUJFLGFBQVc7QUFDVEMsZUFBVyxtQkFBQ0osS0FBRCxFQUFRSyxPQUFSLEVBQW9CO0FBQzdCLDRCQUFjTCxLQUFkLEVBQXFCSyxPQUFyQjtBQUNELEtBSFE7QUFJVEMsY0FBVSxrQkFBQ04sS0FBRCxFQUFRSyxPQUFSLEVBQW9CO0FBQzVCQSxjQUFRRSxFQUFSLEdBQWEseUJBQWI7QUFDQVAsWUFBTUMsS0FBTixDQUFZTyxJQUFaLENBQWlCSCxPQUFqQjtBQUNELEtBUFE7QUFRVEksaUJBQWEscUJBQUNULEtBQUQsRUFBUU8sRUFBUixFQUFlO0FBQzFCLFVBQUlHLFFBQVFWLE1BQU1DLEtBQU4sQ0FBWVUsU0FBWixDQUFzQixnQkFBUTtBQUN4Q0MsZ0JBQVFDLEdBQVIsQ0FBWUMsS0FBS1AsRUFBTCxJQUFXQSxFQUF2QjtBQUNBLFlBQUlPLEtBQUtQLEVBQUwsSUFBV0EsRUFBZixFQUFtQjtBQUNqQjtBQUNEO0FBQ0YsT0FMVyxDQUFaO0FBTUFLLGNBQVFDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLFVBQUlBLEtBQUosRUFBVztBQUNUVixjQUFNQyxLQUFOLENBQVljLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLENBQTFCO0FBQ0Q7QUFDRixLQW5CUTtBQW9CVE0sZUFBVyxtQkFBQ2hCLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM3QixVQUFJSyxRQUFRVixNQUFNQyxLQUFOLENBQVlVLFNBQVosQ0FBc0I7QUFBQSxlQUFRRyxLQUFLUCxFQUFMLElBQVdGLFFBQVFFLEVBQTNCO0FBQUEsT0FBdEIsQ0FBWjtBQUNBLFVBQUlHLEtBQUosRUFBVztBQUNUVixjQUFNQyxLQUFOLENBQVljLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLENBQTFCLEVBQTZCTCxPQUE3QjtBQUNEO0FBQ0Y7QUF6QlEsR0FaaUI7QUF1QzVCWSxXQUFTO0FBQ1BYLGNBQVUsa0JBQUNZLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUM5QmEsY0FBUUMsTUFBUixDQUFlLFVBQWYsRUFBMkJkLE9BQTNCO0FBQ0FhLGNBQVFFLFFBQVIsQ0FBaUIsWUFBakI7QUFDRCxLQUpNO0FBS1BKLGVBQVcsbUJBQUNFLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUMvQmEsY0FBUUMsTUFBUixDQUFlLFdBQWYsRUFBNEJkLE9BQTVCO0FBQ0FhLGNBQVFFLFFBQVIsQ0FBaUIsWUFBakI7QUFDRCxLQVJNO0FBU1BYLGlCQUFhLHFCQUFDUyxPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDakNhLGNBQVFDLE1BQVIsQ0FBZSxhQUFmLEVBQThCZCxPQUE5QjtBQUNBO0FBQ0QsS0FaTTs7QUFjUGdCLGdCQUFZLG9CQUFDSCxPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDaENpQixtQkFBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4Qix5QkFBZUwsUUFBUWxCLEtBQXZCLENBQTlCO0FBQ0QsS0FoQk07O0FBa0JQd0IsZ0JBQVksb0JBQUNOLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUNoQ2EsY0FBUUMsTUFBUixDQUFlLFdBQWYsRUFBNEJNLEtBQUtDLEtBQUwsQ0FBV0osYUFBYUssT0FBYixDQUFxQixPQUFyQixDQUFYLENBQTVCO0FBQ0Q7QUFwQk0sR0F2Q21CO0FBNkQ1QkMsV0FBUztBQTdEbUIsQ0FBZixDIiwiZmlsZSI6Ii4vc3JjL3N0b3JlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcclxuXHJcblZ1ZS51c2UoVnVleCk7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSAnc3JjL3V0aWxzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgcGx1Z2luczogW1xyXG5cclxuICBdLFxyXG4gIHN0YXRlOiB7XHJcbiAgICBub3RlczogW10sXHJcbiAgfSxcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBub3Rlczogc3RhdGUgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGUubm90ZXM7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICBTRVRfU1RBVEU6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLCBwYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBOT1RFX0FERDogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIHBheWxvYWQuaWQgPSBnZW5lcmF0ZUlEKCk7XHJcbiAgICAgIHN0YXRlLm5vdGVzLnB1c2gocGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgTk9URV9SRU1PVkU6IChzdGF0ZSwgaWQpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gc3RhdGUubm90ZXMuZmluZEluZGV4KGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQgPT0gaWQpO1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IGlkKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICBpZiAoaW5kZXgpIHtcclxuICAgICAgICBzdGF0ZS5ub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgTk9URV9FRElUOiAoc3RhdGUsIHBheWxvYWQpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gc3RhdGUubm90ZXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PSBwYXlsb2FkLmlkKTtcclxuICAgICAgaWYgKGluZGV4KSB7XHJcbiAgICAgICAgc3RhdGUubm90ZXMuc3BsaWNlKGluZGV4LCAxLCBwYXlsb2FkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIE5PVEVfQUREOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdCgnTk9URV9BREQnLCBwYXlsb2FkKTtcclxuICAgICAgY29udGV4dC5kaXNwYXRjaCgnU0FWRV9TVEFURScpO1xyXG4gICAgfSxcclxuICAgIE5PVEVfRURJVDogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgY29udGV4dC5jb21taXQoJ05PVEVfRURJVCcsIHBheWxvYWQpO1xyXG4gICAgICBjb250ZXh0LmRpc3BhdGNoKCdTQVZFX1NUQVRFJyk7XHJcbiAgICB9LFxyXG4gICAgTk9URV9SRU1PVkU6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KCdOT1RFX1JFTU9WRScsIHBheWxvYWQpO1xyXG4gICAgICAvLyBjb250ZXh0LmRpc3BhdGNoKCdTQVZFX1NUQVRFJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIFNBVkVfU1RBVEU6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZScsIEpTT04uc3RyaW5naWZ5KGNvbnRleHQuc3RhdGUpKTtcclxuICAgIH0sXHJcblxyXG4gICAgTE9BRF9TVEFURTogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgY29udGV4dC5jb21taXQoJ1NFVF9TVEFURScsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRlJykpKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb2R1bGVzOiB7fSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})