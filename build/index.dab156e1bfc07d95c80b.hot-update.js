webpackHotUpdate("index",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.note\n    ? _c(\n        \"div\",\n        { staticClass: \"app-note-view\" },\n        [\n          _c(\"router-link\", { staticClass: \"back-btn\", attrs: { to: \"/\" } }, [\n            _c(\n              \"svg\",\n              {\n                staticStyle: { \"enable-background\": \"new 0 0 512 512\" },\n                attrs: {\n                  height: \"512px\",\n                  version: \"1.1\",\n                  viewBox: \"0 0 512 512\",\n                  width: \"512px\",\n                  \"xml:space\": \"preserve\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                  \"svg-inline\": \"\",\n                  role: \"presentation\",\n                  focusable: \"false\",\n                  tabindex: \"-1\"\n                }\n              },\n              [\n                _c(\"path\", {\n                  attrs: {\n                    d:\n                      \"M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z\"\n                  }\n                })\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"main-section\" }, [\n            _c(\"header\", [\n              _c(\"h1\", [\n                _vm._v(\"\\n        \" + _vm._s(_vm.note.title) + \"\\n      \")\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                {\n                  staticClass: \"save-btn secondary-btn\",\n                  on: { click: _vm.saveNote }\n                },\n                [_vm._v(\"Save\")]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"note-wrap\" },\n              [\n                _c(\"NoteEditor\", {\n                  model: {\n                    value: _vm.note.text,\n                    callback: function($$v) {\n                      _vm.$set(_vm.note, \"text\", $$v)\n                    },\n                    expression: \"note.text\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"todo-list\" }, [\n                  _c(\"h2\", [\n                    _c(\"span\", [_vm._v(\"\\n            Todo List\\n          \")]),\n                    _vm._v(\" \"),\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"add-todo-btn primary-btn\",\n                        on: { click: _vm.addTodo }\n                      },\n                      [_vm._v(\"New Task\")]\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"t-todos\" },\n                    [\n                      _vm._l(_vm.note.todos, function(todo, index) {\n                        return _c(\n                          \"div\",\n                          { key: todo.id, staticClass: \"todo\" },\n                          [\n                            _c(\"div\", { staticClass: \"counter\" }, [\n                              _vm._v(_vm._s(index + 1) + \".\")\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"Todo\", {\n                              attrs: { todo: todo },\n                              on: {\n                                remove: function($event) {\n                                  return _vm.onTodoRemove(todo)\n                                }\n                              }\n                            })\n                          ],\n                          1\n                        )\n                      }),\n                      _vm._v(\" \"),\n                      _vm.note.todos.length == 0\n                        ? _c(\"div\", { staticClass: \"empty-label\" }, [\n                            _vm._v(\"\\n            No tasks yet\\n          \")\n                          ])\n                        : _vm._e()\n                    ],\n                    2\n                  )\n                ])\n              ],\n              1\n            )\n          ])\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL05vdGVWaWV3LnZ1ZT9lOTg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrQkFBK0I7QUFDeEM7QUFDQSw2QkFBNkIsa0NBQWtDLFVBQVUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUNBQXlDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9EO0FBQ0EsdUNBQXVDLHlCQUF5QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxxQ0FBcUMsNkJBQTZCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLXN2Zy1pbmxpbmUtbG9hZGVyL2Rpc3QvaW5kZXgubWluLmpzPyEuL3NyYy9hcHAvdmlld3MvTm90ZVZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyNzAyNjlmJnNjb3BlZD10cnVlJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLm5vdGVcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC1ub3RlLXZpZXdcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IHN0YXRpY0NsYXNzOiBcImJhY2stYnRuXCIsIGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJlbmFibGUtYmFja2dyb3VuZFwiOiBcIm5ldyAwIDAgNTEyIDUxMlwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MTJweFwiLFxuICAgICAgICAgICAgICAgICAgdmVyc2lvbjogXCIxLjFcIixcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIDUxMiA1MTJcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUxMnB4XCIsXG4gICAgICAgICAgICAgICAgICBcInhtbDpzcGFjZVwiOiBcInByZXNlcnZlXCIsXG4gICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgICAgXCJ4bWxuczp4bGlua1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICAgICAgICAgICAgICAgIFwic3ZnLWlubGluZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgIFwiTTQwNS4yLDIzMi45TDEyNi44LDY3LjJjLTMuNC0yLTYuOS0zLjItMTAuOS0zLjJjLTEwLjksMC0xOS44LDktMTkuOCwyMEg5NnYzNDRoMC4xYzAsMTEsOC45LDIwLDE5LjgsMjAgIGM0LjEsMCw3LjUtMS40LDExLjItMy40bDI3OC4xLTE2NS41YzYuNi01LjUsMTAuOC0xMy44LDEwLjgtMjMuMUM0MTYsMjQ2LjcsNDExLjgsMjM4LjUsNDA1LjIsMjMyLjl6XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW4tc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaGVhZGVyXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0ubm90ZS50aXRsZSkgKyBcIlxcbiAgICAgIFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0biBzZWNvbmRhcnktYnRuXCIsXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmVOb3RlIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJub3RlLXdyYXBcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJOb3RlRWRpdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubm90ZS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm5vdGUsIFwidGV4dFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibm90ZS50ZXh0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9kby1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgVG9kbyBMaXN0XFxuICAgICAgICAgIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFkZC10b2RvLWJ0biBwcmltYXJ5LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hZGRUb2RvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXcgVGFza1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidC10b2Rvc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm5vdGUudG9kb3MsIGZ1bmN0aW9uKHRvZG8sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiB0b2RvLmlkLCBzdGF0aWNDbGFzczogXCJ0b2RvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY291bnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaW5kZXggKyAxKSArIFwiLlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJUb2RvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvZG86IHRvZG8gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblRvZG9SZW1vdmUodG9kbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RlLnRvZG9zLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1wdHktbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgTm8gdGFza3MgeWV0XFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true&\n");

/***/ })

})