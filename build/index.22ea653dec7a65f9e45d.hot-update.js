webpackHotUpdate("index",{

/***/ "./src/app/router.js":
/*!***************************!*\
  !*** ./src/app/router.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vueRouter = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n\nvar _vueRouter2 = _interopRequireDefault(_vueRouter);\n\nvar _Main = __webpack_require__(/*! ./views/Main.vue */ \"./src/app/views/Main.vue\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _NoteView = __webpack_require__(/*! ./views/NoteView.vue */ \"./src/app/views/NoteView.vue\");\n\nvar _NoteView2 = _interopRequireDefault(_NoteView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vueRouter2.default);\n\nvar router = new _vueRouter2.default({\n  mode: 'hash',\n  routes: [{\n    path: '/',\n    component: _Main2.default\n  }, {\n    path: '/note/:id',\n    component: _NoteView2.default,\n    meta: { transitionName: 'fade-left' }\n  }]\n});\nrouter.afterEach(function (to, from) {\n  _vue2.default.nextTick(function () {\n    document.title = to.meta.title ? to.meta.title : 'Todo List';\n  });\n});\n\nexports.default = router;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3JvdXRlci5qcz9jZmUwIl0sIm5hbWVzIjpbIlZ1ZSIsInVzZSIsIlJvdXRlciIsInJvdXRlciIsIm1vZGUiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiTWFpbiIsIk5vdGVWaWV3IiwibWV0YSIsInRyYW5zaXRpb25OYW1lIiwiYWZ0ZXJFYWNoIiwidG8iLCJmcm9tIiwibmV4dFRpY2siLCJkb2N1bWVudCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLGNBQUlDLEdBQUosQ0FBUUMsbUJBQVI7O0FBRUEsSUFBTUMsU0FBUyxJQUFJRCxtQkFBSixDQUFXO0FBQ3hCRSxRQUFNLE1BRGtCO0FBRXhCQyxVQUFRLENBQ047QUFDRUMsVUFBTSxHQURSO0FBRUVDLGVBQVdDO0FBRmIsR0FETSxFQUtOO0FBQ0VGLFVBQU0sV0FEUjtBQUVFQyxlQUFXRSxrQkFGYjtBQUdFQyxVQUFNLEVBQUVDLGdCQUFnQixXQUFsQjtBQUhSLEdBTE07QUFGZ0IsQ0FBWCxDQUFmO0FBY0FSLE9BQU9TLFNBQVAsQ0FBaUIsVUFBQ0MsRUFBRCxFQUFLQyxJQUFMLEVBQWM7QUFDN0JkLGdCQUFJZSxRQUFKLENBQWEsWUFBTTtBQUNqQkMsYUFBU0MsS0FBVCxHQUFpQkosR0FBR0gsSUFBSCxDQUFRTyxLQUFSLEdBQWdCSixHQUFHSCxJQUFILENBQVFPLEtBQXhCLEdBQWdDLFdBQWpEO0FBQ0QsR0FGRDtBQUdELENBSkQ7O2tCQU1lZCxNIiwiZmlsZSI6Ii4vc3JjL2FwcC9yb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vdmlld3MvTWFpbi52dWUnO1xyXG5pbXBvcnQgTm90ZVZpZXcgZnJvbSAnLi92aWV3cy9Ob3RlVmlldy52dWUnO1xyXG5cclxuVnVlLnVzZShSb3V0ZXIpO1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcih7XHJcbiAgbW9kZTogJ2hhc2gnLFxyXG4gIHJvdXRlczogW1xyXG4gICAge1xyXG4gICAgICBwYXRoOiAnLycsXHJcbiAgICAgIGNvbXBvbmVudDogTWFpbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6ICcvbm90ZS86aWQnLFxyXG4gICAgICBjb21wb25lbnQ6IE5vdGVWaWV3LFxyXG4gICAgICBtZXRhOiB7IHRyYW5zaXRpb25OYW1lOiAnZmFkZS1sZWZ0JyB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59KTtcclxucm91dGVyLmFmdGVyRWFjaCgodG8sIGZyb20pID0+IHtcclxuICBWdWUubmV4dFRpY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSB0by5tZXRhLnRpdGxlID8gdG8ubWV0YS50aXRsZSA6ICdUb2RvIExpc3QnO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/router.js\n");

/***/ })

})