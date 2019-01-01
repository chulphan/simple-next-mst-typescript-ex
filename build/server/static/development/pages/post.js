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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_rehydrateStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils/rehydrateStore */ "./src/utils/rehydrateStore.ts");
/* harmony import */ var _src_components_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/comments */ "./src/components/comments.tsx");
/* harmony import */ var _src_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utils/fetcher */ "./src/utils/fetcher.ts");
/* harmony import */ var _src_components_goback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/goback */ "./src/components/goback.tsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\chkim\\Desktop\\study-next-mst\\clone-book-store\\pages\\post.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var PostPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostPage, _React$Component);

  _createClass(PostPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query, postId, post, comments, init;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query;
                postId = query.id;
                _context.next = 4;
                return Object(_src_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["getPostById"])(postId);

              case 4:
                post = _context.sent;
                _context.next = 7;
                return Object(_src_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__["getPostComments"])(postId);

              case 7:
                comments = _context.sent;
                post.comments = comments;
                _context.next = 11;
                return Object(_src_utils_rehydrateStore__WEBPACK_IMPORTED_MODULE_3__["initStore"])(!!req, {
                  posts: [post]
                });

              case 11:
                init = _context.sent;

                if (req) {
                  react_helmet__WEBPACK_IMPORTED_MODULE_7___default.a.renderStatic();
                }

                return _context.abrupt("return", {
                  initialState: init.initialState,
                  postId: postId,
                  title: post.title,
                  desc: post.body
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function PostPage(props) {
    var _this;

    _classCallCheck(this, PostPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostPage).call(this, props));
    _this.store = Object(_src_utils_rehydrateStore__WEBPACK_IMPORTED_MODULE_3__["rehydrateStore"])(_this.props.initialState);
    return _this;
  }

  _createClass(PostPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          postId = _this$props.postId,
          title = _this$props.title,
          desc = _this$props.desc;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: this.store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7___default.a, {
        meta: [{
          property: "og:title",
          content: title
        }, {
          property: "og:description",
          content: desc
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_goback__WEBPACK_IMPORTED_MODULE_6__["Goback"], {
        text: "Go back to all Posts",
        linkPath: "/posts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_comments__WEBPACK_IMPORTED_MODULE_4__["default"], {
        postId: postId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })));
    }
  }]);

  return PostPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/components/comments.tsx":
/*!*************************************!*\
  !*** ./src/components/comments.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _postView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postView */ "./src/components/postView.tsx");
var _jsxFileName = "C:\\Users\\chkim\\Desktop\\study-next-mst\\clone-book-store\\src\\components\\comments.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Comments =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, _getPrototypeOf(Comments).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          store = _this$props.store,
          postId = _this$props.postId;
      var post = store.getPost(parseInt(postId));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_postView__WEBPACK_IMPORTED_MODULE_2__["PostView"], {
        post: post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, post.comments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: comment.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "http://tachyons.io/img/avatar-mrmrs.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, comment.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, comment.email)));
      })));
    }
  }]);

  return Comments;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])("store")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(Comments)));

/***/ }),

/***/ "./src/components/goback.tsx":
/*!***********************************!*\
  !*** ./src/components/goback.tsx ***!
  \***********************************/
/*! exports provided: Goback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goback", function() { return Goback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\chkim\\Desktop\\study-next-mst\\clone-book-store\\src\\components\\goback.tsx";


var Goback = function Goback(_ref) {
  var text = _ref.text,
      linkPath = _ref.linkPath;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: linkPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, text))));
};

/***/ }),

/***/ "./src/components/postView.tsx":
/*!*************************************!*\
  !*** ./src/components/postView.tsx ***!
  \*************************************/
/*! exports provided: PostView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostView", function() { return PostView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\chkim\\Desktop\\study-next-mst\\clone-book-store\\src\\components\\postView.tsx";


var PostView = function PostView(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    key: post.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: "/post",
      query: {
        id: post.id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/300/200/?random",
    width: 300,
    height: 200,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, post.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "by user: ", post.userId)))));
};

/***/ }),

/***/ "./src/models/store.ts":
/*!*****************************!*\
  !*** ./src/models/store.ts ***!
  \*****************************/
/*! exports provided: albumStore, alStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "albumStore", function() { return albumStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alStore", function() { return alStore; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);

var Photo = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("Photo", {
  albumId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  title: "",
  url: "",
  thumbnailUrl: ""
});
var Album = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("Album", {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  userId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  photos: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(Photo), [])
});
var Comments = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("Comments", {
  postId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  name: "",
  email: "",
  body: ""
});
var Post = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("Post", {
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  userId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].number,
  title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  body: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string,
  comments: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(Comments), [])
});
var albumStore = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("store", {
  albums: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(Album), []),
  posts: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(Post), []),
  toggle: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false)
}).actions(function (self) {
  return {
    toggler: function toggler() {
      self.toggle = !self.toggle;
    },
    sortAlbumsAlphabetically: function sortAlbumsAlphabetically() {
      return self.albums.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    },
    getPostByUserId: function getPostByUserId(id) {
      return self.posts.filter(function (_ref) {
        var userId = _ref.userId;
        return userId === id;
      });
    },
    getAllPostUserIds: function getAllPostUserIds() {
      return self.posts.map(function (_ref2) {
        var userId = _ref2.userId;
        return userId;
      }).filter(function (userId, pos, array) {
        var indexOf = array.indexOf(userId);
        return indexOf === pos;
      });
    }
  };
}).views(function (self) {
  return {
    getPost: function getPost(postId) {
      return self.posts.find(function (p) {
        return p.id === postId;
      });
    },
    getAlbum: function getAlbum(albumId) {
      return self.albums.find(function (a) {
        return a.id === albumId;
      });
    }
  };
});
var alStore = albumStore.create();

/***/ }),

/***/ "./src/utils/fetcher.ts":
/*!******************************!*\
  !*** ./src/utils/fetcher.ts ***!
  \******************************/
/*! exports provided: fetcher, getAlbums, getAlbumPhotos, getAlbumById, getPosts, getPostComments, getPostById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetcher", function() { return fetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumPhotos", function() { return getAlbumPhotos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumById", function() { return getAlbumById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostComments", function() { return getPostComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostById", function() { return getPostById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var fetcher =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return node_fetch__WEBPACK_IMPORTED_MODULE_1___default()("https://jsonplaceholder.typicode.com/".concat(url));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", json);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function fetcher(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getAlbums = function getAlbums() {
  return fetcher("albums");
};
var getAlbumPhotos = function getAlbumPhotos(id) {
  return fetcher("albums/".concat(id, "/photos"));
};
var getAlbumById = function getAlbumById(id) {
  return fetcher("albums/".concat(id));
};
var getPosts = function getPosts() {
  return fetcher("posts");
};
var getPostComments = function getPostComments(id) {
  return fetcher("posts/".concat(id, "/comments"));
};
var getPostById = function getPostById(id) {
  return fetcher("posts/".concat(id));
};

/***/ }),

/***/ "./src/utils/rehydrateStore.ts":
/*!*************************************!*\
  !*** ./src/utils/rehydrateStore.ts ***!
  \*************************************/
/*! exports provided: rehydrateStore, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rehydrateStore", function() { return rehydrateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/store */ "./src/models/store.ts");


var rehydrateStore = function rehydrateStore(initialState) {
  initialState && Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applySnapshot"])(_models_store__WEBPACK_IMPORTED_MODULE_1__["alStore"], initialState);
  return _models_store__WEBPACK_IMPORTED_MODULE_1__["alStore"];
};
var store = null;
var initStore = function initStore(isServer, response) {
  if (!isServer) {
    console.log("response ", response);
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applySnapshot"])(_models_store__WEBPACK_IMPORTED_MODULE_1__["alStore"], response);
    return _models_store__WEBPACK_IMPORTED_MODULE_1__["albumStore"];
  }

  store = _models_store__WEBPACK_IMPORTED_MODULE_1__["albumStore"].create(response);
  return {
    initialState: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["getSnapshot"])(store)
  };
};

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/post.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/post.tsx */"./pages/post.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-state-tree":
/*!**********************************!*\
  !*** external "mobx-state-tree" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });
//# sourceMappingURL=post.js.map