webpackHotUpdate("index",{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/dist/index.min.js??ref--1-1!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.note\n    ? _c(\n        \"div\",\n        { staticClass: \"app-note-view\" },\n        [\n          _c(\"router-link\", { staticClass: \"back-btn\", attrs: { to: \"/\" } }, [\n            _c(\n              \"svg\",\n              {\n                staticStyle: { \"enable-background\": \"new 0 0 512 512\" },\n                attrs: {\n                  height: \"512px\",\n                  version: \"1.1\",\n                  viewBox: \"0 0 512 512\",\n                  width: \"512px\",\n                  \"xml:space\": \"preserve\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n                  \"svg-inline\": \"\",\n                  role: \"presentation\",\n                  focusable: \"false\",\n                  tabindex: \"-1\"\n                }\n              },\n              [\n                _c(\"path\", {\n                  attrs: {\n                    d:\n                      \"M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z\"\n                  }\n                })\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"main-section\" }, [\n            _c(\"header\", [\n              _c(\"h1\", [\n                _vm._v(\"\\n        \" + _vm._s(_vm.note.title) + \"\\n      \")\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"controls\" }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"remove-btn secondary-btn\",\n                    on: { click: _vm.removeNote }\n                  },\n                  [_vm._v(\"Remove\")]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"save-btn primary-btn\",\n                    on: { click: _vm.saveNote }\n                  },\n                  [_vm._v(\"Save\")]\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"note-wrap\" },\n              [\n                _c(\"NoteEditor\", {\n                  model: {\n                    value: _vm.note.text,\n                    callback: function($$v) {\n                      _vm.$set(_vm.note, \"text\", $$v)\n                    },\n                    expression: \"note.text\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"todo-list\" }, [\n                  _c(\"h2\", [\n                    _c(\"span\", [_vm._v(\"\\n            Todo List\\n          \")]),\n                    _vm._v(\" \"),\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"add-todo-btn secondary-btn\",\n                        on: { click: _vm.addTodo }\n                      },\n                      [_vm._v(\"New Task\")]\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"t-todos\" },\n                    [\n                      _vm._l(_vm.note.todos, function(todo, index) {\n                        return _c(\n                          \"div\",\n                          { key: todo.id, staticClass: \"todo\" },\n                          [\n                            _c(\"div\", { staticClass: \"counter\" }, [\n                              _vm._v(_vm._s(index + 1) + \".\")\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"Todo\", {\n                              attrs: { todo: todo },\n                              on: {\n                                remove: function($event) {\n                                  return _vm.onTodoRemove(todo)\n                                }\n                              }\n                            })\n                          ],\n                          1\n                        )\n                      }),\n                      _vm._v(\" \"),\n                      _vm.note.todos.length == 0\n                        ? _c(\"div\", { staticClass: \"empty-label\" }, [\n                            _vm._v(\"\\n            No tasks yet\\n          \")\n                          ])\n                        : _vm._e()\n                    ],\n                    2\n                  )\n                ])\n              ],\n              1\n            )\n          ])\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ZpZXdzL05vdGVWaWV3LnZ1ZT9lOTg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrQkFBK0I7QUFDeEM7QUFDQSw2QkFBNkIsa0NBQWtDLFVBQVUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUNBQXlDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkJBQTJCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7QUFDQSx1Q0FBdUMseUJBQXlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtc3ZnLWlubGluZS1sb2FkZXIvZGlzdC9pbmRleC5taW4uanM/IS4vc3JjL2FwcC92aWV3cy9Ob3RlVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjI3MDI2OWYmc2NvcGVkPXRydWUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ubm90ZVxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwLW5vdGUtdmlld1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFjay1idG5cIiwgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImVuYWJsZS1iYWNrZ3JvdW5kXCI6IFwibmV3IDAgMCA1MTIgNTEyXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUxMnB4XCIsXG4gICAgICAgICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMVwiLFxuICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgNTEyIDUxMlwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTEycHhcIixcbiAgICAgICAgICAgICAgICAgIFwieG1sOnNwYWNlXCI6IFwicHJlc2VydmVcIixcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICBcInhtbG5zOnhsaW5rXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgICAgICAgICAgICAgICAgXCJzdmctaW5saW5lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgXCJNNDA1LjIsMjMyLjlMMTI2LjgsNjcuMmMtMy40LTItNi45LTMuMi0xMC45LTMuMmMtMTAuOSwwLTE5LjgsOS0xOS44LDIwSDk2djM0NGgwLjFjMCwxMSw4LjksMjAsMTkuOCwyMCAgYzQuMSwwLDcuNS0xLjQsMTEuMi0zLjRsMjc4LjEtMTY1LjVjNi42LTUuNSwxMC44LTEzLjgsMTAuOC0yMy4xQzQxNiwyNDYuNyw0MTEuOCwyMzguNSw0MDUuMiwyMzIuOXpcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbi1zZWN0aW9uXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoZWFkZXJcIiwgW1xuICAgICAgICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5ub3RlLnRpdGxlKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmVtb3ZlLWJ0biBzZWNvbmRhcnktYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVtb3ZlTm90ZSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlbW92ZVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzYXZlLWJ0biBwcmltYXJ5LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNhdmVOb3RlIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJub3RlLXdyYXBcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJOb3RlRWRpdG9yXCIsIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubm90ZS50ZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm5vdGUsIFwidGV4dFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibm90ZS50ZXh0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9kby1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgVG9kbyBMaXN0XFxuICAgICAgICAgIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFkZC10b2RvLWJ0biBzZWNvbmRhcnktYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZFRvZG8gfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk5ldyBUYXNrXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0LXRvZG9zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubm90ZS50b2RvcywgZnVuY3Rpb24odG9kbywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHRvZG8uaWQsIHN0YXRpY0NsYXNzOiBcInRvZG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb3VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpbmRleCArIDEpICsgXCIuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRvZG9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG9kbzogdG9kbyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uVG9kb1JlbW92ZSh0b2RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdGUudG9kb3MubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbXB0eS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBObyB0YXNrcyB5ZXRcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-svg-inline-loader/dist/index.min.js?!./src/app/views/NoteView.vue?vue&type=template&id=6270269f&scoped=true&\n");

/***/ })

})