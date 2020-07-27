webpackHotUpdate("index",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _common = __webpack_require__(/*! src/utils/common */ \"./src/utils/common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vuex2.default);\n\nexports.default = new _vuex2.default.Store({\n  plugins: [],\n  state: {\n    notes: []\n  },\n  getters: {\n    notes: function notes(state) {\n      return state.notes;\n    }\n  },\n  mutations: {\n    SET_STATE: function SET_STATE(state, payload) {\n      (0, _assign2.default)(state, payload);\n    },\n    NOTE_ADD: function NOTE_ADD(state, payload) {\n      payload.id = (0, _common.generateID)();\n      state.notes.push(payload);\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(state, payload) {\n      console.log(state.notes);\n      state.notes.find(function (item, index) {\n        console.log(item);\n        if (item.id == payload.id) {\n          console.log(item);\n          state.notes.splice(index, 1);\n          return;\n        }\n      });\n    },\n    NOTE_EDIT: function NOTE_EDIT(state, payload) {\n      state.notes.find(function (item, index) {\n        if (item.id == payload.id) {\n          state.notes.splice(index, 1, payload);\n          return;\n        }\n      });\n    }\n  },\n  actions: {\n    NOTE_ADD: function NOTE_ADD(context, payload) {\n      context.commit('NOTE_ADD', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_EDIT: function NOTE_EDIT(context, payload) {\n      context.commit('NOTE_EDIT', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(context, payload) {\n      context.commit('NOTE_REMOVE', payload);\n      context.dispatch('SAVE_STATE');\n    },\n\n    SAVE_STATE: function SAVE_STATE(context, payload) {\n      localStorage.setItem('state', (0, _stringify2.default)(context.state));\n    },\n\n    LOAD_STATE: function LOAD_STATE(context, payload) {\n      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));\n    }\n  },\n  modules: {}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJwbHVnaW5zIiwic3RhdGUiLCJub3RlcyIsImdldHRlcnMiLCJtdXRhdGlvbnMiLCJTRVRfU1RBVEUiLCJwYXlsb2FkIiwiTk9URV9BREQiLCJpZCIsInB1c2giLCJOT1RFX1JFTU9WRSIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwiaXRlbSIsImluZGV4Iiwic3BsaWNlIiwiTk9URV9FRElUIiwiYWN0aW9ucyIsImNvbnRleHQiLCJjb21taXQiLCJkaXNwYXRjaCIsIlNBVkVfU1RBVEUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9BRF9TVEFURSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJtb2R1bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFJQTs7OztBQUZBQSxjQUFJQyxHQUFKLENBQVFDLGNBQVI7O2tCQUllLElBQUlBLGVBQUtDLEtBQVQsQ0FBZTtBQUM1QkMsV0FBUyxFQURtQjtBQUk1QkMsU0FBTztBQUNMQyxXQUFPO0FBREYsR0FKcUI7QUFPNUJDLFdBQVM7QUFDUEQsV0FBTyxzQkFBUztBQUNkLGFBQU9ELE1BQU1DLEtBQWI7QUFDRDtBQUhNLEdBUG1CO0FBWTVCRSxhQUFXO0FBQ1RDLGVBQVcsbUJBQUNKLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM3Qiw0QkFBY0wsS0FBZCxFQUFxQkssT0FBckI7QUFDRCxLQUhRO0FBSVRDLGNBQVUsa0JBQUNOLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM1QkEsY0FBUUUsRUFBUixHQUFhLHlCQUFiO0FBQ0FQLFlBQU1DLEtBQU4sQ0FBWU8sSUFBWixDQUFpQkgsT0FBakI7QUFDRCxLQVBRO0FBUVRJLGlCQUFhLHFCQUFDVCxLQUFELEVBQVFLLE9BQVIsRUFBb0I7QUFDL0JLLGNBQVFDLEdBQVIsQ0FBWVgsTUFBTUMsS0FBbEI7QUFDQUQsWUFBTUMsS0FBTixDQUFZVyxJQUFaLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoQ0osZ0JBQVFDLEdBQVIsQ0FBWUUsSUFBWjtBQUNBLFlBQUlBLEtBQUtOLEVBQUwsSUFBV0YsUUFBUUUsRUFBdkIsRUFBMkI7QUFDekJHLGtCQUFRQyxHQUFSLENBQVlFLElBQVo7QUFDQWIsZ0JBQU1DLEtBQU4sQ0FBWWMsTUFBWixDQUFtQkQsS0FBbkIsRUFBMEIsQ0FBMUI7QUFDQTtBQUNEO0FBQ0YsT0FQRDtBQVFELEtBbEJRO0FBbUJURSxlQUFXLG1CQUFDaEIsS0FBRCxFQUFRSyxPQUFSLEVBQW9CO0FBQzdCTCxZQUFNQyxLQUFOLENBQVlXLElBQVosQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2hDLFlBQUlELEtBQUtOLEVBQUwsSUFBV0YsUUFBUUUsRUFBdkIsRUFBMkI7QUFDekJQLGdCQUFNQyxLQUFOLENBQVljLE1BQVosQ0FBbUJELEtBQW5CLEVBQTBCLENBQTFCLEVBQTZCVCxPQUE3QjtBQUNBO0FBQ0Q7QUFDRixPQUxEO0FBTUQ7QUExQlEsR0FaaUI7QUF3QzVCWSxXQUFTO0FBQ1BYLGNBQVUsa0JBQUNZLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUM5QmEsY0FBUUMsTUFBUixDQUFlLFVBQWYsRUFBMkJkLE9BQTNCO0FBQ0FhLGNBQVFFLFFBQVIsQ0FBaUIsWUFBakI7QUFDRCxLQUpNO0FBS1BKLGVBQVcsbUJBQUNFLE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUMvQmEsY0FBUUMsTUFBUixDQUFlLFdBQWYsRUFBNEJkLE9BQTVCO0FBQ0FhLGNBQVFFLFFBQVIsQ0FBaUIsWUFBakI7QUFDRCxLQVJNO0FBU1BYLGlCQUFhLHFCQUFDUyxPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDakNhLGNBQVFDLE1BQVIsQ0FBZSxhQUFmLEVBQThCZCxPQUE5QjtBQUNBYSxjQUFRRSxRQUFSLENBQWlCLFlBQWpCO0FBQ0QsS0FaTTs7QUFjUEMsZ0JBQVksb0JBQUNILE9BQUQsRUFBVWIsT0FBVixFQUFzQjtBQUNoQ2lCLG1CQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCLHlCQUFlTCxRQUFRbEIsS0FBdkIsQ0FBOUI7QUFDRCxLQWhCTTs7QUFrQlB3QixnQkFBWSxvQkFBQ04sT0FBRCxFQUFVYixPQUFWLEVBQXNCO0FBQ2hDYSxjQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0Qk0sS0FBS0MsS0FBTCxDQUFXSixhQUFhSyxPQUFiLENBQXFCLE9BQXJCLENBQVgsQ0FBNUI7QUFDRDtBQXBCTSxHQXhDbUI7QUE4RDVCQyxXQUFTO0FBOURtQixDQUFmLEMiLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xyXG5cclxuVnVlLnVzZShWdWV4KTtcclxuXHJcbmltcG9ydCB7IGdlbmVyYXRlSUQgfSBmcm9tICdzcmMvdXRpbHMvY29tbW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuICBwbHVnaW5zOiBbXHJcblxyXG4gIF0sXHJcbiAgc3RhdGU6IHtcclxuICAgIG5vdGVzOiBbXSxcclxuICB9LFxyXG4gIGdldHRlcnM6IHtcclxuICAgIG5vdGVzOiBzdGF0ZSA9PiB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS5ub3RlcztcclxuICAgIH0sXHJcbiAgfSxcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIFNFVF9TVEFURTogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIE5PVEVfQUREOiAoc3RhdGUsIHBheWxvYWQpID0+IHtcclxuICAgICAgcGF5bG9hZC5pZCA9IGdlbmVyYXRlSUQoKTtcclxuICAgICAgc3RhdGUubm90ZXMucHVzaChwYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBOT1RFX1JFTU9WRTogKHN0YXRlLCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLm5vdGVzKTtcclxuICAgICAgc3RhdGUubm90ZXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PSBwYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgIHN0YXRlLm5vdGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBOT1RFX0VESVQ6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBzdGF0ZS5ub3Rlcy5maW5kKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IHBheWxvYWQuaWQpIHtcclxuICAgICAgICAgIHN0YXRlLm5vdGVzLnNwbGljZShpbmRleCwgMSwgcGF5bG9hZCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBOT1RFX0FERDogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgY29udGV4dC5jb21taXQoJ05PVEVfQUREJywgcGF5bG9hZCk7XHJcbiAgICAgIGNvbnRleHQuZGlzcGF0Y2goJ1NBVkVfU1RBVEUnKTtcclxuICAgIH0sXHJcbiAgICBOT1RFX0VESVQ6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KCdOT1RFX0VESVQnLCBwYXlsb2FkKTtcclxuICAgICAgY29udGV4dC5kaXNwYXRjaCgnU0FWRV9TVEFURScpO1xyXG4gICAgfSxcclxuICAgIE5PVEVfUkVNT1ZFOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdCgnTk9URV9SRU1PVkUnLCBwYXlsb2FkKTtcclxuICAgICAgY29udGV4dC5kaXNwYXRjaCgnU0FWRV9TVEFURScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBTQVZFX1NUQVRFOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCBKU09OLnN0cmluZ2lmeShjb250ZXh0LnN0YXRlKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIExPQURfU1RBVEU6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KCdTRVRfU1RBVEUnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpKSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW9kdWxlczoge30sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})