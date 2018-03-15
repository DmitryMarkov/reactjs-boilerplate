(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define("HelloWorld", ["react", "react-router-dom"], factory);
	else if(typeof exports === 'object')
		exports["HelloWorld"] = factory(require("react"), require("react-router-dom"));
	else
		root["HelloWorld"] = factory(root["React"], root["ReactRouterDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _icon = __webpack_require__(4);

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloWorld = function HelloWorld() {
  return _react2.default.createElement(
    'div',
    { className: 'hello-world' },
    _react2.default.createElement(
      'h1',
      null,
      _react2.default.createElement('img', { src: _icon2.default, alt: 'world' }),
      'Hello World!!!'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      'Go home'
    )
  );
};

var _default = HelloWorld;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HelloWorld, 'HelloWorld', 'C:/Users/munab/Documents/reactjs-sandbox/src/components/HelloWorld/HelloWorld.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/munab/Documents/reactjs-sandbox/src/components/HelloWorld/HelloWorld.jsx');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0Ljk0NyAyNC45NDciIGhlaWdodD0iMjQuOTQ3cHgiIGlkPSJDYXBhXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0Ljk0NyAyNC45NDciIHdpZHRoPSIyNC45NDdweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTEyLjQ3NCwwQzUuNTk2LDAsMCw1LjU5NiwwLDEyLjQ3NHM1LjU5NywxMi40NzQsMTIuNDc1LDEyLjQ3NHMxMi40NzQtNS41OTYsMTIuNDc0LTEyLjQ3NFMxOS4zNTIsMCwxMi40NzQsMHogICBNMTYuMDA5LDcuODU4YzAuMDcsMC4yMzksMC4yMjMsMC41MDMsMC40NjIsMC43OThsMC4wOTYsMC4xMzFjMC4wNCwwLjA1NSwwLjA5MiwwLjExNCwwLjE0MiwwLjE3MyAgYy0wLjE0NC0wLjA0LTAuMzI2LTAuMDg2LTAuNTU0LTAuMTM2bC0wLjMxMi0wLjk1MUMxNS45MDYsNy44NzEsMTUuOTYxLDcuODY1LDE2LjAwOSw3Ljg1OHogTTE0LjgzNSw4LjA4NWwwLjMzMiwwLjUzMSAgbC0wLjAyNywwLjAwM0wxNSw4LjcyOWMtMC4xMDYsMC4wODYtMC45LDAuMDU1LTEuMTgxLTAuMDZjLTAuMDA4LTAuMDQyLTAuMDIxLTAuMTAyLTAuMDM3LTAuMTdsMC4xNTUsMC4xMTVsMC4yMTEtMC4wMzUgIEMxNC41MDIsOC41MiwxNC43MjcsOC4yOTEsMTQuODM1LDguMDg1eiBNMTIuNDc0LDIzLjU4OGMtMi41OTIsMC01LjA2Mi0wLjg5MS03LjA0Ni0yLjUyNGMwLjA5OS0wLjA2MiwwLjE3OC0wLjEyMSwwLjIyNy0wLjE2MiAgbDAuMjYxLTAuMjE5bC0wLjIzMi0wLjY5N2wwLjMzNy0xLjA2MmwwLjAyOC0wLjE2OWMwLTAuNDA1LTAuMTYxLTAuODczLTAuNTg5LTAuOTU3Yy0wLjA0OS0wLjAyLTAuMTc1LTAuMjE5LTAuMjUtMC4yNzIgIGMtMC4yMTMtMC4xNTYtMC4zODItMC4zODUtMC41ODktMC4zODVjMCwwLTAuMDAxLDAtMC4wMDIsMGMtMC4wMzgsMC0wLjE0NiwwLjA2MS0wLjIxMSwwLjAxOGMtMC4wNTgtMC4wMzctMC4xMzQtMC4wMjUtMC4yMTYtMC4wNjYgIGMtMC4wNDktMC4wMjMtMC4xMzEtMC4wMzYtMC4xMi0wLjAyYy0wLjA3OS0wLjExNi0wLjE4Ni0wLjI4NS0wLjI4Mi0wLjUzMWMtMC4wNzctMC4yMTUtMC4xNDYtMC4zMjItMC41MDgtMC43MjkgIGMtMC4yMzgtMC4yNy0wLjI5NS0wLjMyOS0wLjUxNS0wLjQzMmwtMC4wOTItMC4wNDJjLTAuMDkzLTAuMDQ2LTAuMTU0LTAuMDkzLTAuMjE0LTAuMTM2Yy0wLjA5NS0wLjA2OC0wLjIxMy0wLjE1NC0wLjM4NC0wLjIyNCAgYy0wLjE0NC0wLjA1OS0wLjE5LTAuMDk0LTAuMzI5LTAuMjEyYy0wLjA1LTAuMDQ1LTAuMTA5LTAuMDk1LTAuMTgtMC4xNDFDMS40MywxMy45MjIsMS4zNiwxMy4xOTksMS4zNiwxMi40NzRsMC4wMDItMC4xMzggIGMwLjExLTAuMjg2LDAuMjEyLTAuNzcxLDAuMTYzLTEuMDE3Yy0wLjAwMy0wLjA2MiwwLjAzNi0wLjI1NiwwLjA2LTAuMzcxYzAuMDQxLTAuMjAyLDAuMDc2LTAuNDAyLDAuMDcyLTAuNSAgYzAuMDIxLTAuMDg0LDAuMTctMC4zMTIsMC4yNDktMC40MzRjMC4xMDUtMC4xNjIsMC4xOTUtMC4zMTIsMC4yMzYtMC40MTJDMi4xODQsOS41LDIuNDE1LDkuMTQ1LDIuNTU0LDguOTMybDAuMjMyLTAuMzY0ICBDMi44NDcsOC40NzMsMi45ODgsOC4yNDgsMi45MzQsOEMzLjE5Nyw3LjgxNCwzLjUzNiw3LjU3MywzLjU4LDcuNTM2QzMuNjM0LDcuNDgyLDQuMDg2LDYuOTg4LDMuNjIzLDYuMTMgIEMzLjYwOCw2LjEwMiwzLjc4Miw2LjA4LDMuNzc1LDYuMDY4YzAuMDM5LTAuMDcyLDAuMjc1LTAuMTksMC4yNzUtMC4zNDhWNS42ODNjMC0wLjMwNSwwLjExOS0wLjU0NCwwLjM4Ny0wLjU0NGgwLjE2NiAgYzAuMDYsMCwwLjExOS0wLjE3NSwwLjE3NC0wLjE4NWwwLjQwOCwwLjA5OUw2LjAzLDQuNjk3TDYuMTIsNC41MWMwLjAwMS0wLjAwMSwwLjA5LTAuMTczLDAuMjc4LTAuMzA3ICBjMC4yOC0wLjIwMSwwLjM2NS0wLjMyOCwwLjQ5Ni0wLjU0NUw2LjQ5MywzLjM1N0w2Ljk2NiwzLjU3QzcuMDIxLDMuNTE2LDcuMTMyLDMuMTQ3LDcuNDIsMi44MzggIGMwLjMzNS0wLjM2LDAuNTI3LTAuNjk4LDAuNTA1LTAuNjk4aDAuMjA5bDAuMTQ4LDAuMDk0QzguMzI3LDIuMTg0LDguNTE1LDIuMTA0LDguNjYsMS45MDhjMS45MjUtMC43MDYsNC4wNDgtMC43OTMsNi4wNDgtMC4zODUgIGMtMC4yNjQsMC4wMDYtMC41MTIsMC4xMTktMC44OSwwLjNjLTAuMDkyLDAuMDQ0LTAuMTc0LDAuMTAyLTAuMjIzLDAuMTE4Yy0wLjA4NiwwLjAyMS0wLjIxNiwwLjA4Mi0wLjM1MywwLjE0NCAgYy0wLjA4MywwLjAzNi0wLjIzNywwLjEwOC0wLjI1NSwwLjExNmMtMC4zNDEsMC0wLjYzNSwwLjI4MS0wLjg2OSwwLjU4OGMtMC4yOTMsMC41MzMtMC4yMjIsMC44NTQtMC4xMjgsMS4wMTJsMC4xOTIsMC4zMzloMC4xMzkgIGMtMC4xODIsMC0wLjM1MSwwLjI2Ni0wLjQ1NiwwLjM1OEwxMS4zNiwzLjg3NWwtMC40NzctMS4wMDZsLTAuODM0LDAuNzJ2MC4zNzNMOS41MzgsMy43ODdMOS4wMiw0Ljg2N2wwLjczOCwxLjAxOGwwLjI5My0wLjI1OCAgdjAuMDdsMC40NjgtMC4xMTljLTAuMDExLDAuMTE4LTAuMDM1LDAuMjM0LDAuMDA0LDAuMzQybC0xLjM3LDAuMzE4bDAuMTE4LDAuNTFjMC4wMjEsMC4wODIsMC4wMjYsMC4yNDMsMC4wMzMsMC4zNCAgQzkuMTE2LDcuODM0LDkuMjg2LDguMDYxLDkuMzUzLDguMTQ4bDAuMTIzLDAuMTM2QzkuMzAzLDguNDU5LDkuMTg5LDguNjU0LDkuMTMyLDguNzVjLTAuMDc4LDAuMDkxLTAuMjIsMC4yNTItMC4yNSwwLjQ5ICBDOC44MzcsOS4yOTcsOC43MzcsOS4zODgsOC42NjYsOS40MzZMOC41NzUsOS40OTJjLTAuMzI4LDAuMjAxLTAuNjM1LDAuNDAyLTAuNzksMC42NkM3LjU5MiwxMC40NzcsNy40NywxMC43NjIsNy40MjQsMTEgIGMtMC4wNTMsMC4yNjUtMC4wNTMsMC40NzItMC4wNTMsMC43ODVjMCwwLjA5Ni0wLjAwNSwwLjE3OC0wLjAxLDAuMjU0Yy0wLjAxLDAuMTY2LTAuMDIxLDAuMzM4LDAuMDE3LDAuNTYyICBjMC4wOCwwLjQ3OSwwLjczOSwxLjMzOSwwLjc0OCwxLjM1YzAuMjA2LDAuMjU4LDAuNDUsMC41NDcsMC43MzMsMC43MTVjMC4xNDYsMC4wODgsMC4zMzUsMC4yNDQsMC40MTMsMC4zMSAgYzAuMTg4LDAuMjIxLDAuNjI1LDAuNDExLDEuMDUzLDAuMjQ4YzAuMTItMC4wNDYsMC4yNDEtMC4wNjgsMC4zNTgtMC4wOTZjMC4yMTYtMC4wNDgsMC40NjItMC4xMDEsMC43MDQtMC4yMzggIGMwLjA1Ni0wLjAzMiwwLjEwNi0wLjA2MSwwLjE1Mi0wLjA4MmMwLjE4NywwLjMxMSwwLjU3MSwwLjQ2NSwwLjk2LDAuMzM3bDAuMDA4LTAuMDAzYzAuMDEzLDAuMDgsMC4wMjUsMC4xNTQsMC4wMzgsMC4yMjMgIGMwLjAxNCwwLjA2OCwwLjAyNiwwLjEyNywwLjAyNSwwLjI0NWMtMC4wMDgsMC4xNy0wLjAyMywwLjQ4NywwLjIzNSwwLjc0N2MwLjA1MSwwLjA1MSwwLjEyNywwLjExMiwwLjIwOSwwLjE4ICBjMC4wMzUsMC4wMjcsMC4wODcsMC4wNjgsMC4xMjcsMC4xMDRjMC4wMTcsMC4yMTQsMC4wNjIsMC41NzIsMC4xNzQsMC43OTVjMC4wNTQsMC4xMDUsMC4wNjgsMC4xODYsMC4wODcsMC4xNSAgYy0wLjA5NSwwLjE4OC0wLjI4MiwwLjY5OS0wLjMwMSwwLjc2M2MtMC4xMTYsMC41MjItMC4wNDksMC43MjEtMC4wMjksMC43NzhjMC4wODEsMC4yNSwwLjIzMywwLjQ4NCwwLjQ2NSwwLjcxNSAgYzAuMDI4LDAuMDI4LDAuMDQxLDAuMDY5LDAuMDY4LDAuMTdjMC4wMzIsMC4xMTYsMC4wNzUsMC4yNzQsMC4xODUsMC40MjFjMC4wNDQsMC4wNjIsMC4xNDUsMC4zMTgsMC4xOTUsMC40NzNsMC4wNjMsMC4zNDggIGwtMC4wMDEsMC45NjVsMC41NzItMC4wODJjMCwwLDAuOTM4LTAuMTM3LDEuMTIxLTAuMTgzYzAuMjEzLTAuMDU1LDAuOTM0LTAuMzg4LDEuMTkzLTAuNjQ2YzAuMTMyLTAuMTMyLDAuMTk1LTAuMjU1LDAuMjM3LTAuMzM3ICBjMC4wMzQtMC4wNjMsMC4wMzgtMC4wNzEsMC4wNzEtMC4xYzAuMjE0LTAuMTcsMC42MDMtMC40NjksMC42MDMtMC40NjlsMC4yMTEtMC4xNjJsLTAuMDQ2LTAuNzI5bDAuMzU5LTAuNDg0bDAuMzA2LTAuMzEyICBjLTAuMDcyLDAuMTcyLTAuMTYzLDAuMzk2LTAuMTk2LDAuNTI3Yy0wLjA2LDAuMjM4LTAuMDIsMC41MjUsMC4xNywwLjc2NmwwLjIyMiwwLjEzOGgwLjI0M2wwLjE3OSwwLjA2NyAgYzAuMTg2LTAuMDYxLDAuMzMzLTAuMTUzLDAuNDc4LTAuMjkxYzAuMDQ0LTAuMDQyLDAuMDg2LTAuMDYxLDAuMTEzLTAuMDgxYzAuMjczLTAuMTgsMC41MzctMC42NCwwLjYtMC44ODZsMC4xNzMtMC42NCAgYzAuMDUtMC4xOTksMC4xMDEtMC41ODMsMC4xMDEtMC43NjVjMC0wLjE4MS0wLjA0OC0wLjM4MS0wLjA1OC0wLjQybC0wLjMxMy0xLjI2M2wtMC44NzUsMS42NDRjLTAuMTI4LDAuMDYyLTAuMjIsMC4xMi0wLjMwMywwLjE4ICBjMC4wMDEtMC4wNzYtMC4wMDYtMC4xMzgtMC4wMTUtMC4xN2MtMC4wMjEtMC4wODQtMC4wNjUtMC40NzEtMC4xMDQtMC44MjZjMC4wNjItMC4xMywwLjE0My0wLjI4MSwwLjE4OS0wLjM0NiAgYzAuMDgyLTAuMTA5LDAuMTI5LTAuMjE4LDAuMTY2LTAuMzA0YzAuMDQ1LTAuMTA0LDAuMDY3LTAuMTUzLDAuMTQtMC4yMTVjMC4yNjktMC4yMjMsMC40NDktMC40NzEsMC41ODItMC42NTJsMC4xMDQtMC4xMzkgIGMwLjE0My0wLjE4OCwwLjM2Ni0wLjQ4OCwwLjQ0LTAuNjA0YzAuMTIzLTAuMTgzLDAuMjA4LTAuNTExLDAuMjQ3LTAuNjg4bDAuMTU5LTAuNzIybC0wLjU5OSwwLjFjMC4wNzItMC4wMzYsMC4xMzctMC4wNywwLjE4MS0wLjEgIGMwLjAzNS0wLjAyMywwLjA5Ni0wLjA1OCwwLjE2NS0wLjA5N2MwLjI3My0wLjE1MywwLjQ3Ny0wLjI3MSwwLjYwNC0wLjM5OGwwLjI2OC0wLjE5NWMwLjIzNS0wLjE1NiwwLjUyOC0wLjM1MSwwLjU2NS0wLjY4OCAgYzAuMDUyLDAuMDQxLDAuMTA3LDAuMDgsMC4xNzEsMC4xMWMwLjA0MywwLjAyNywwLjE0NiwwLjE0LDAuMjI5LDAuMjQ0YzAuMDYyLDAuMTQ2LDAuMjE4LDAuNTE0LDAuMjUsMC42NDMgIGMwLjAyMiwwLjA4NywwLjA4NywwLjI0OSwwLjE1OCwwLjQxOGMwLjA1NSwwLjEyOCwwLjExNSwwLjI2MywwLjEyOCwwLjI3NWMwLDAuMTEzLDAuMDUxLDAuNDUxLDAuMjM5LDAuNjY2ICBDMjIuNzM1LDE5LjQwOCwxOC4wODMsMjMuNTg4LDEyLjQ3NCwyMy41ODh6IE0xMi42MzQsNy42NDFjLTAuMDA0LDAtMC4wMTMsMC4wMDItMC4wMTYsMC4wMDJjLTAuMDQ3LTAuMDA5LTAuMTk1LTAuMDU3LTAuMzEyLTAuMTAzICBsLTAuMTEyLTAuMDQ0bC0wLjExOSwwLjAxMWMtMC4wNDIsMC4wMDUtMC4xMDQsMC4wMTMtMC4xNzIsMC4wMjFjMC4wMDQtMC4wMDYsMC4wMTQtMC4wMjEsMC4wMTctMC4wMjQgIGMwLjAzNS0wLjA1MywwLjA2OC0wLjEwMywwLjIwMy0wLjE0NmMwLjI0Ny0wLjA4MywwLjM4LTAuMTk4LDAuNDI2LTAuMjU4YzAuMDcxLTAuMDIyLDAuMjQtMC4wNTYsMC4zNzYtMC4wNzhsMC4yMSwwLjEzOSAgYzAuMDYyLDAuMDc0LDAuMTUsMC4xNTYsMC4yNzcsMC4yMzZsLTAuNzk5LDAuMjI4TDEyLjYzNCw3LjY0MXoiLz48L3N2Zz4="

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./HelloWorld.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./HelloWorld.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".hello-world h1 {\n  color: tomato;\n  font-family: 'Roboto-Thin';\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.hello-world img {\n  margin-right: 10px; }\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});