webpackHotUpdate("index",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Todo.vue?vue&type=template&id=660b9508&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/components/Todo.vue?vue&type=template&id=660b9508&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"app-todo\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"title\",\n        on: {\n          click: function($event) {\n            return _vm.edit(_vm.todo)\n          }\n        }\n      },\n      [\n        !_vm.editable ? _c(\"p\", [_vm._v(_vm._s(_vm.todo.title))]) : _vm._e(),\n        _vm._v(\" \"),\n        _vm.editable\n          ? _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.todo.title,\n                  expression: \"todo.title\"\n                }\n              ],\n              staticClass: \"t-input\",\n              attrs: { placeholder: \"Task description\", type: \"text\" },\n              domProps: { value: _vm.todo.title },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(_vm.todo, \"title\", $event.target.value)\n                }\n              }\n            })\n          : _vm._e()\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"controls\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"edit-todo-btn\",\n          on: {\n            click: function($event) {\n              return _vm.edit(_vm.todo)\n            }\n          }\n        },\n        [_vm._v(\"\\n        edit\\n      \")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"remove-todo-btn\",\n          on: {\n            click: function($event) {\n              return _vm.remove(_vm.todo)\n            }\n          }\n        },\n        [\n          _c(\n            \"svg\",\n            {\n              staticStyle: { \"enable-background\": \"new 0 0 512.001 512.001\" },\n              attrs: {\n                version: \"1.1\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                x: \"0px\",\n                y: \"0px\",\n                viewBox: \"0 0 512.001 512.001\",\n                \"xml:space\": \"preserve\",\n                \"svg-inline\": \"\",\n                role: \"presentation\",\n                focusable: \"false\",\n                tabindex: \"-1\"\n              }\n            },\n            [\n              _c(\"g\", [\n                _c(\"g\", [\n                  _c(\"path\", {\n                    attrs: {\n                      fill: \"#888888\",\n                      d:\n                        \"M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0\\n\\t\\t\\tL256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567\\n\\t\\t\\tc-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567\\n\\t\\t\\tc8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z\"\n                    }\n                  })\n                ])\n              ])\n            ]\n          )\n        ]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvVG9kby52dWU/YTYxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQWdEO0FBQ3RFLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQWlEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtc3ZnLWlubGluZS1sb2FkZXIvZGlzdC9pbmRleC5taW4uanM/IS4vc3JjL2FwcC9jb21wb25lbnRzL1RvZG8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2MGI5NTA4JnNjb3BlZD10cnVlJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcHAtdG9kb1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0KF92bS50b2RvKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgIV92bS5lZGl0YWJsZSA/IF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udG9kby50aXRsZSkpXSkgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVkaXRhYmxlXG4gICAgICAgICAgPyBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50b2RvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0b2RvLnRpdGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtaW5wdXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiVGFzayBkZXNjcmlwdGlvblwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRvZG8udGl0bGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udG9kbywgXCJ0aXRsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbHNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVkaXQtdG9kby1idG5cIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXQoX3ZtLnRvZG8pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBlZGl0XFxuICAgICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJlbW92ZS10b2RvLWJ0blwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlKF92bS50b2RvKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJlbmFibGUtYmFja2dyb3VuZFwiOiBcIm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxXCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMVwiLFxuICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgXCJ4bWxuczp4bGlua1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICAgICAgICAgICAgICB4OiBcIjBweFwiLFxuICAgICAgICAgICAgICAgIHk6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgNTEyLjAwMSA1MTIuMDAxXCIsXG4gICAgICAgICAgICAgICAgXCJ4bWw6c3BhY2VcIjogXCJwcmVzZXJ2ZVwiLFxuICAgICAgICAgICAgICAgIFwic3ZnLWlubGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImdcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZ1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiIzg4ODg4OFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk01MDUuOTIyLDQ3Ni41NjdMMjg1LjM1NSwyNTZMNTA1LjkyLDM1LjQzNWM4LjEwNi04LjEwNSw4LjEwNi0yMS4yNDgsMC0yOS4zNTRjLTguMTA1LTguMTA2LTIxLjI0OC04LjEwNi0yOS4zNTQsMFxcblxcdFxcdFxcdEwyNTYuMDAxLDIyNi42NDZMMzUuNDM0LDYuMDgxYy04LjEwNS04LjEwNi0yMS4yNDgtOC4xMDYtMjkuMzU0LDBjLTguMTA2LDguMTA1LTguMTA2LDIxLjI0OCwwLDI5LjM1NEwyMjYuNjQ2LDI1Nkw2LjA4LDQ3Ni41NjdcXG5cXHRcXHRcXHRjLTguMTA2LDguMTA2LTguMTA2LDIxLjI0OCwwLDI5LjM1NGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBsMjIwLjU2Ny0yMjAuNTY3bDIyMC41NjcsMjIwLjU2N1xcblxcdFxcdFxcdGM4LjEwNSw4LjEwNSwyMS4yNDgsOC4xMDYsMjkuMzU0LDBTNTE0LjAyOCw0ODQuNjczLDUwNS45MjIsNDc2LjU2N3pcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/components/Todo.vue?vue&type=template&id=660b9508&scoped=true&\n");

/***/ })

})