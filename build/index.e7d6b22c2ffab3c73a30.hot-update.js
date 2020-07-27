webpackHotUpdate("index",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"./node_modules/babel-runtime/core-js/json/stringify.js\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _common = __webpack_require__(/*! src/utils/common */ \"./src/utils/common.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vuex2.default);\n\nexports.default = new _vuex2.default.Store({\n  plugins: [],\n  state: {\n    notes: []\n  },\n  getters: {\n    notes: function notes(state) {\n      return state.notes;\n    }\n  },\n  mutations: {\n    SET_STATE: function SET_STATE(state, payload) {\n      (0, _assign2.default)(state, payload);\n    },\n    NOTE_ADD: function NOTE_ADD(state, payload) {\n      payload.id = (0, _common.generateID)();\n      state.notes.push(payload);\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(state, id) {\n      state.notes.find(function (item, index) {\n        console.log(item, id);\n        if (item.id == id) {\n          state.notes.splice(index, 1);\n          return;\n        }\n      });\n    },\n    NOTE_EDIT: function NOTE_EDIT(state, payload) {\n      state.notes.find(function (item, index) {\n        if (item.id == payload.id) {\n          state.notes.splice(index, 1, payload);\n          return;\n        }\n      });\n    }\n  },\n  actions: {\n    NOTE_ADD: function NOTE_ADD(context, payload) {\n      context.commit('NOTE_ADD', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_EDIT: function NOTE_EDIT(context, payload) {\n      context.commit('NOTE_EDIT', payload);\n      context.dispatch('SAVE_STATE');\n    },\n    NOTE_REMOVE: function NOTE_REMOVE(context, payload) {\n      context.commit('NOTE_REMOVE', payload);\n      // context.dispatch('SAVE_STATE');\n    },\n\n    SAVE_STATE: function SAVE_STATE(context, payload) {\n      localStorage.setItem('state', (0, _stringify2.default)(context.state));\n    },\n\n    LOAD_STATE: function LOAD_STATE(context, payload) {\n      context.commit('SET_STATE', JSON.parse(localStorage.getItem('state')));\n    }\n  },\n  modules: {}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJwbHVnaW5zIiwic3RhdGUiLCJub3RlcyIsImdldHRlcnMiLCJtdXRhdGlvbnMiLCJTRVRfU1RBVEUiLCJwYXlsb2FkIiwiTk9URV9BREQiLCJpZCIsInB1c2giLCJOT1RFX1JFTU9WRSIsImZpbmQiLCJpdGVtIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwiTk9URV9FRElUIiwiYWN0aW9ucyIsImNvbnRleHQiLCJjb21taXQiLCJkaXNwYXRjaCIsIlNBVkVfU1RBVEUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTE9BRF9TVEFURSIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJtb2R1bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFJQTs7OztBQUZBQSxjQUFJQyxHQUFKLENBQVFDLGNBQVI7O2tCQUllLElBQUlBLGVBQUtDLEtBQVQsQ0FBZTtBQUM1QkMsV0FBUyxFQURtQjtBQUk1QkMsU0FBTztBQUNMQyxXQUFPO0FBREYsR0FKcUI7QUFPNUJDLFdBQVM7QUFDUEQsV0FBTyxzQkFBUztBQUNkLGFBQU9ELE1BQU1DLEtBQWI7QUFDRDtBQUhNLEdBUG1CO0FBWTVCRSxhQUFXO0FBQ1RDLGVBQVcsbUJBQUNKLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM3Qiw0QkFBY0wsS0FBZCxFQUFxQkssT0FBckI7QUFDRCxLQUhRO0FBSVRDLGNBQVUsa0JBQUNOLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM1QkEsY0FBUUUsRUFBUixHQUFhLHlCQUFiO0FBQ0FQLFlBQU1DLEtBQU4sQ0FBWU8sSUFBWixDQUFpQkgsT0FBakI7QUFDRCxLQVBRO0FBUVRJLGlCQUFhLHFCQUFDVCxLQUFELEVBQVFPLEVBQVIsRUFBZTtBQUMxQlAsWUFBTUMsS0FBTixDQUFZUyxJQUFaLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoQ0MsZ0JBQVFDLEdBQVIsQ0FBWUgsSUFBWixFQUFrQkosRUFBbEI7QUFDQSxZQUFJSSxLQUFLSixFQUFMLElBQVdBLEVBQWYsRUFBbUI7QUFDakJQLGdCQUFNQyxLQUFOLENBQVljLE1BQVosQ0FBbUJILEtBQW5CLEVBQTBCLENBQTFCO0FBQ0E7QUFDRDtBQUNGLE9BTkQ7QUFPRCxLQWhCUTtBQWlCVEksZUFBVyxtQkFBQ2hCLEtBQUQsRUFBUUssT0FBUixFQUFvQjtBQUM3QkwsWUFBTUMsS0FBTixDQUFZUyxJQUFaLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoQyxZQUFJRCxLQUFLSixFQUFMLElBQVdGLFFBQVFFLEVBQXZCLEVBQTJCO0FBQ3pCUCxnQkFBTUMsS0FBTixDQUFZYyxNQUFaLENBQW1CSCxLQUFuQixFQUEwQixDQUExQixFQUE2QlAsT0FBN0I7QUFDQTtBQUNEO0FBQ0YsT0FMRDtBQU1EO0FBeEJRLEdBWmlCO0FBc0M1QlksV0FBUztBQUNQWCxjQUFVLGtCQUFDWSxPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDOUJhLGNBQVFDLE1BQVIsQ0FBZSxVQUFmLEVBQTJCZCxPQUEzQjtBQUNBYSxjQUFRRSxRQUFSLENBQWlCLFlBQWpCO0FBQ0QsS0FKTTtBQUtQSixlQUFXLG1CQUFDRSxPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDL0JhLGNBQVFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCZCxPQUE1QjtBQUNBYSxjQUFRRSxRQUFSLENBQWlCLFlBQWpCO0FBQ0QsS0FSTTtBQVNQWCxpQkFBYSxxQkFBQ1MsT0FBRCxFQUFVYixPQUFWLEVBQXNCO0FBQ2pDYSxjQUFRQyxNQUFSLENBQWUsYUFBZixFQUE4QmQsT0FBOUI7QUFDQTtBQUNELEtBWk07O0FBY1BnQixnQkFBWSxvQkFBQ0gsT0FBRCxFQUFVYixPQUFWLEVBQXNCO0FBQ2hDaUIsbUJBQWFDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIseUJBQWVMLFFBQVFsQixLQUF2QixDQUE5QjtBQUNELEtBaEJNOztBQWtCUHdCLGdCQUFZLG9CQUFDTixPQUFELEVBQVViLE9BQVYsRUFBc0I7QUFDaENhLGNBQVFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCTSxLQUFLQyxLQUFMLENBQVdKLGFBQWFLLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWCxDQUE1QjtBQUNEO0FBcEJNLEdBdENtQjtBQTRENUJDLFdBQVM7QUE1RG1CLENBQWYsQyIsImZpbGUiOiIuL3NyYy9zdG9yZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XHJcblxyXG5WdWUudXNlKFZ1ZXgpO1xyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVJRCB9IGZyb20gJ3NyYy91dGlscy9jb21tb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4gIHBsdWdpbnM6IFtcclxuXHJcbiAgXSxcclxuICBzdGF0ZToge1xyXG4gICAgbm90ZXM6IFtdLFxyXG4gIH0sXHJcbiAgZ2V0dGVyczoge1xyXG4gICAgbm90ZXM6IHN0YXRlID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLm5vdGVzO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgU0VUX1NUQVRFOiAoc3RhdGUsIHBheWxvYWQpID0+IHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgcGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gICAgTk9URV9BREQ6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBwYXlsb2FkLmlkID0gZ2VuZXJhdGVJRCgpO1xyXG4gICAgICBzdGF0ZS5ub3Rlcy5wdXNoKHBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIE5PVEVfUkVNT1ZFOiAoc3RhdGUsIGlkKSA9PiB7XHJcbiAgICAgIHN0YXRlLm5vdGVzLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSwgaWQpO1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IGlkKSB7XHJcbiAgICAgICAgICBzdGF0ZS5ub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgTk9URV9FRElUOiAoc3RhdGUsIHBheWxvYWQpID0+IHtcclxuICAgICAgc3RhdGUubm90ZXMuZmluZCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PSBwYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICBzdGF0ZS5ub3Rlcy5zcGxpY2UoaW5kZXgsIDEsIHBheWxvYWQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWN0aW9uczoge1xyXG4gICAgTk9URV9BREQ6IChjb250ZXh0LCBwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KCdOT1RFX0FERCcsIHBheWxvYWQpO1xyXG4gICAgICBjb250ZXh0LmRpc3BhdGNoKCdTQVZFX1NUQVRFJyk7XHJcbiAgICB9LFxyXG4gICAgTk9URV9FRElUOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdCgnTk9URV9FRElUJywgcGF5bG9hZCk7XHJcbiAgICAgIGNvbnRleHQuZGlzcGF0Y2goJ1NBVkVfU1RBVEUnKTtcclxuICAgIH0sXHJcbiAgICBOT1RFX1JFTU9WRTogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgY29udGV4dC5jb21taXQoJ05PVEVfUkVNT1ZFJywgcGF5bG9hZCk7XHJcbiAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2goJ1NBVkVfU1RBVEUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgU0FWRV9TVEFURTogKGNvbnRleHQsIHBheWxvYWQpID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgSlNPTi5zdHJpbmdpZnkoY29udGV4dC5zdGF0ZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBMT0FEX1NUQVRFOiAoY29udGV4dCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdCgnU0VUX1NUQVRFJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGUnKSkpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vZHVsZXM6IHt9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})