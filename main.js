/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display-todos.js":
/*!******************************!*\
  !*** ./src/display-todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Display all todo items on the DOM\r\nfunction displayTodos(todoList) {\r\n\r\n  const todoListElement = document.createElement(\"div\");\r\n  todoListElement.id = \"todo-list\";\r\n\r\n  todoList.forEach(todoItem => {\r\n    const todo = document.createElement(\"div\");\r\n    todo.classList.add(\"todo\");\r\n\r\n    const completedButton = document.createElement(\"button\");\r\n    completedButton.type = \"button\";\r\n\r\n    completedButton.addEventListener(\"click\", function () {\r\n      completedButton.innerHTML = '<img src=\"../assets/icons/checkbox-outline.svg\">';\r\n    });\r\n\r\n    completedButton.classList.add(\"completed-button\")\r\n    const completedButtonIcon = document.createElement(\"img\");\r\n    completedButtonIcon.src = \"../assets/icons/checkbox-blank-outline.svg\";\r\n    completedButton.appendChild(completedButtonIcon);\r\n    todo.appendChild(completedButton);\r\n\r\n    const todoTitle = document.createElement(\"h3\");\r\n    todoTitle.classList.add(\"todo-title\");\r\n    todoTitle.textContent = todoItem.title;\r\n    todo.appendChild(todoTitle);\r\n\r\n    todoListElement.appendChild(todo);\r\n  });\r\n\r\n  return todoListElement;\r\n  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodos);\n\n//# sourceURL=webpack://odin-todo-list/./src/display-todos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ \"./src/todo-item.js\");\n/* harmony import */ var _display_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-todos */ \"./src/display-todos.js\");\n/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-form */ \"./src/todo-form.js\");\n\r\n\r\n\r\n\r\nlet todoItemList = new Array();\r\n// todoItemList.push(new todoItem(false, \"test todo 1\", \"test desc\", null, null));\r\n// todoItemList.push(new todoItem(false, \"test todo 2\", \"test desc\", null, null));\r\n// todoItemList.push(new todoItem(false, \"test todo 3\", \"test desc\", null, null));\r\n// todoItemList.push(new todoItem(false, \"test todo 4\", \"test desc\", null, null));\r\n// todoItemList.push(new todoItem(false, \"test todo 5\", \"test desc\", null, null));\r\n// todoItemList.push(new todoItem(false, \"test todo 6\", \"test desc\", null, null));\r\n\r\nconst body = document.body;\r\n\r\nlet todoList = (0,_display_todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoItemList);\r\nbody.appendChild(todoList);\r\n\r\nconst addButton = document.getElementById(\"add-todo-button\");\r\naddButton.addEventListener(\"click\", function () {\r\n  const newTodoForm = new _todo_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  newTodoForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n    const todoToSubmit = new _todo_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n      false,\r\n      newTodoForm.elements[\"todo-form-title\"].value,\r\n      newTodoForm.elements[\"todo-form-description\"].value,\r\n      newTodoForm.elements[\"todo-form-date\"].value,\r\n      null\r\n    );\r\n    todoItemList.unshift(todoToSubmit);\r\n    todoList.remove();\r\n    todoList = (0,_display_todos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoItemList);\r\n    body.appendChild(todoList);\r\n  });\r\n\r\n  todoList.insertBefore(newTodoForm, todoList.firstChild);\r\n});\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo-form.js":
/*!**************************!*\
  !*** ./src/todo-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction todoForm () {\r\n\r\n  const todoForm = document.createElement(\"form\");\r\n  todoForm.action = \"/add-todo\";\r\n  todoForm.method = \"post\";\r\n  todoForm.id = \"todo-form\";\r\n  todoForm.autocomplete = \"off\";\r\n\r\n  const todoFormLeftSection = document.createElement(\"div\");\r\n  todoFormLeftSection.classList.add(\"todo-form-left-section\");\r\n\r\n  const todoFormCompletedButton = document.createElement(\"div\");\r\n  todoFormCompletedButton.type = \"button\";\r\n  todoFormCompletedButton.id = \"todo-form-completed-button\";\r\n\r\n  const completedButtonImage = document.createElement(\"img\");\r\n  completedButtonImage.src = \"../assets/icons/checkbox-blank-outline.svg\";\r\n\r\n  todoFormCompletedButton.appendChild(completedButtonImage);\r\n  todoFormLeftSection.appendChild(todoFormCompletedButton);\r\n  todoForm.appendChild(todoFormLeftSection);\r\n\r\n  const todoFormMiddleSection = document.createElement(\"div\");\r\n  todoFormMiddleSection.classList.add(\"todo-form-middle-section\");\r\n\r\n  const todoFormTitle = document.createElement(\"input\");\r\n  todoFormTitle.type = \"text\";\r\n  todoFormTitle.id = \"todo-form-title\";\r\n  todoFormTitle.placeholder = \"new todo\";\r\n  todoFormMiddleSection.appendChild(todoFormTitle);\r\n\r\n  const todoFormDescription = document.createElement(\"textarea\");\r\n  todoFormDescription.id = \"todo-form-description\";\r\n  todoFormDescription.placeholder = \"description\";\r\n  todoFormDescription.rows = \"4\";\r\n  todoFormMiddleSection.appendChild(todoFormDescription);\r\n  todoForm.appendChild(todoFormMiddleSection);\r\n\r\n  const todoFormRightSection = document.createElement(\"div\");\r\n  todoFormRightSection.classList.add(\"todo-form-right-section\");\r\n\r\n  const todoFormDate = document.createElement(\"input\");\r\n  todoFormDate.type = \"date\";\r\n  todoFormDate.id = \"todo-form-date\";\r\n  todoFormRightSection.appendChild(todoFormDate);\r\n\r\n  const todoFormBottomRight = document.createElement(\"div\");\r\n  todoFormBottomRight.classList.add(\"todo-form-bottom-right\");\r\n\r\n  const todoFormSubmitButton = document.createElement(\"button\");\r\n  todoFormSubmitButton.type = \"submit\";\r\n  todoFormSubmitButton.id = \"todo-form-submit-button\";\r\n\r\n  const submitButtonImage = document.createElement(\"img\");\r\n  submitButtonImage.src = \"../assets/icons/check.svg\";\r\n\r\n  todoFormSubmitButton.appendChild(submitButtonImage);\r\n  todoFormBottomRight.appendChild(todoFormSubmitButton);\r\n\r\n  const todoFormDeleteButton = document.createElement(\"button\");\r\n  todoFormDeleteButton.type = \"button\";\r\n  todoFormDeleteButton.id = \"todo-form-delete-button\";\r\n\r\n  todoFormDeleteButton.addEventListener(\"click\", function () {\r\n    todoForm.remove();\r\n  });\r\n\r\n  const deleteButtonImage = document.createElement(\"img\");\r\n  deleteButtonImage.src = \"../assets/icons/trash-can-outline.svg\";\r\n\r\n  todoFormDeleteButton.appendChild(deleteButtonImage);\r\n  todoFormBottomRight.appendChild(todoFormDeleteButton);\r\n  todoFormRightSection.appendChild(todoFormBottomRight);\r\n  todoForm.appendChild(todoFormRightSection);\r\n\r\n  return todoForm;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoForm);\n\n//# sourceURL=webpack://odin-todo-list/./src/todo-form.js?");

/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass todoItem {\r\n\r\n  constructor(isCompleted, title, description, dueDate, project) {\r\n    // Indicates todo item completion\r\n    this.isCompleted = isCompleted;\r\n    // Title of the todo item\r\n    this.title = title;\r\n    // Description for the todo item\r\n    this.description = description;\r\n    // Due date for the todo item\r\n    this.dueDate = dueDate;\r\n    // Project the todo item belongs to\r\n    this.project = project;\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);\n\n//# sourceURL=webpack://odin-todo-list/./src/todo-item.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;