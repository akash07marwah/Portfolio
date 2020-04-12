module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layouts/BaseLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/BaseLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Header */ "./components/shared/Header.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\91704\\Desktop\\Portfolio\\components\\layouts\\BaseLayout.js";




var BaseLayout = function BaseLayout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\91704\\Desktop\\Portfolio\\components\\shared\\Header.js";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 14
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __self: this,
        className: "jsx-1820219620",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 14
        }
      }, title), this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __self: this,
        className: "jsx-1820219620" + " " + "custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 14
        }
      }, " I am styled! "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __self: this,
        className: "jsx-1820219620" + " " + "customFromFile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      }, " I am styled! "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-1820219620",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 29
        }
      }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 14
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-1820219620",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 34
        }
      }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/portfolio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-1820219620",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 38
        }
      }, "Portfolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/blogs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 14
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-1820219620",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 34
        }
      }, "Blogs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/cv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __self: this,
        className: "jsx-1820219620",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 31
        }
      }, "CV")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1820219620",
        css: "a.jsx-1820219620{font-size :20px;}.custom.jsx-1820219620{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcOTE3MDRcXERlc2t0b3BcXFBvcnRmb2xpb1xcY29tcG9uZW50c1xcc2hhcmVkXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JpQixBQUdzQyxBQUlyQixVQUFDLE1BSEEiLCJmaWxlIjoiQzpcXFVzZXJzXFw5MTcwNFxcRGVza3RvcFxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxzaGFyZWRcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gIHRoaXMucHJvcHMudGl0bGU7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXN0b21cIj4gSSBhbSBzdHlsZWQhIDwvcD5cclxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1c3RvbUZyb21GaWxlXCI+IEkgYW0gc3R5bGVkISA8L3A+XHJcblxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPjxhPlBvcnRmb2xpbzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dzXCI+PGE+QmxvZ3M8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdlwiPjxhPkNWPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIC5jdXN0b217XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJlZFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=C:\\Users\\91704\\Desktop\\Portfolio\\components\\shared\\Header.js */"
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared/Header */ "./components/shared/Header.js");
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
var _jsxFileName = "C:\\Users\\91704\\Desktop\\Portfolio\\pages\\about.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var About = /*#__PURE__*/function (_React$Component) {
  _inherits(About, _React$Component);

  var _super = _createSuper(About);

  function About() {
    _classCallCheck(this, About);

    return _super.apply(this, arguments);
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }, " I am About Page from Class!"));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map