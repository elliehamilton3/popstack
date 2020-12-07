module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controllers/auth.controller.tsx":
/*!*****************************************!*\
  !*** ./controllers/auth.controller.tsx ***!
  \*****************************************/
/*! exports provided: scope, AuthController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope\", function() { return scope; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthController\", function() { return AuthController; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-react */ \"@auth0/auth0-react\");\n/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/ui/controllers/auth.controller.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst scope = [\"openid\", \"profile\", \"email\", \"read:current_user\", \"update:current_user_metadata\"].join(' ');\n\nconst onRedirectCallback = appState => {// const {user} = useAuth0();\n  //   window.history.replaceState({}, document.title, window.location.pathname);\n  //   const browserHistory = historyInit();\n  //   browserHistory.replace((appState && appState.returnTo) || window.location.pathname);\n  // Get the user\n  // If doesn't exist post?\n};\n\nconst AuthController = ({\n  children\n}) => {\n  return __jsx(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__[\"Auth0Provider\"], {\n    domain: \"auth.popstack.co\" || false,\n    clientId: \"xchtaTjCz0VG7tNXmPc9Psvo805kfLQB\" || false,\n    redirectUri: \"http://localhost:3000\",\n    scope: scope // cacheLocation=\"localstorage\"\n    ,\n    useRefreshTokens: true,\n    onRedirectCallback: onRedirectCallback,\n    audience: \"https://popstack.api\" || false,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, children);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthController);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIudHN4P2VkY2IiXSwibmFtZXMiOlsic2NvcGUiLCJqb2luIiwib25SZWRpcmVjdENhbGxiYWNrIiwiYXBwU3RhdGUiLCJBdXRoQ29udHJvbGxlciIsImNoaWxkcmVuIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLEtBQUssR0FBRyxDQUNuQixRQURtQixFQUVuQixTQUZtQixFQUduQixPQUhtQixFQUluQixtQkFKbUIsRUFLbkIsOEJBTG1CLEVBTW5CQyxJQU5tQixDQU1kLEdBTmMsQ0FBZDs7QUFRUCxNQUFNQyxrQkFBa0IsR0FBSUMsUUFBRCxJQUFtQixDQUM1QztBQUNGO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDRCxDQVBEOztBQVNPLE1BQU1DLGNBQXVDLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdkUsU0FDRSxNQUFDLGdFQUFEO0FBQ0UsVUFBTSxFQUFFQyxrQkFBQSxJQUF3QyxLQURsRDtBQUVFLFlBQVEsRUFBRUEsa0NBQUEsSUFBMkMsS0FGdkQ7QUFHRSxlQUFXLEVBQUVBLHVCQUhmO0FBSUUsU0FBSyxFQUFFTixLQUpULENBS0U7QUFMRjtBQU1FLG9CQUFnQixFQUFFLElBTnBCO0FBT0Usc0JBQWtCLEVBQUVFLGtCQVB0QjtBQVFFLFlBQVEsRUFBRUksc0JBQUEsSUFBMEMsS0FSdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLRCxRQVZMLENBREY7QUFjRCxDQWZNO0FBaUJRRCw2RUFBZiIsImZpbGUiOiIuL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0aDBQcm92aWRlciB9IGZyb20gJ0BhdXRoMC9hdXRoMC1yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBzY29wZSA9IFtcbiAgXCJvcGVuaWRcIixcbiAgXCJwcm9maWxlXCIsXG4gIFwiZW1haWxcIixcbiAgXCJyZWFkOmN1cnJlbnRfdXNlclwiLFxuICBcInVwZGF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGFcIlxuXS5qb2luKCcgJyk7XG5cbmNvbnN0IG9uUmVkaXJlY3RDYWxsYmFjayA9IChhcHBTdGF0ZTogYW55KSA9PiB7XG4gIC8vIGNvbnN0IHt1c2VyfSA9IHVzZUF1dGgwKCk7XG4vLyAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4vLyAgIGNvbnN0IGJyb3dzZXJIaXN0b3J5ID0gaGlzdG9yeUluaXQoKTtcbi8vICAgYnJvd3Nlckhpc3RvcnkucmVwbGFjZSgoYXBwU3RhdGUgJiYgYXBwU3RhdGUucmV0dXJuVG8pIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIC8vIEdldCB0aGUgdXNlclxuICAvLyBJZiBkb2Vzbid0IGV4aXN0IHBvc3Q/XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRyb2xsZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBdXRoMFByb3ZpZGVyXG4gICAgICBkb21haW49e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTiB8fCBcIlwifVxuICAgICAgY2xpZW50SWQ9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0NMSUVOVF9JRCB8fCBcIlwifVxuICAgICAgcmVkaXJlY3RVcmk9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFRElSRUNUX1VSSX1cbiAgICAgIHNjb3BlPXtzY29wZX1cbiAgICAgIC8vIGNhY2hlTG9jYXRpb249XCJsb2NhbHN0b3JhZ2VcIlxuICAgICAgdXNlUmVmcmVzaFRva2Vucz17dHJ1ZX1cbiAgICAgIG9uUmVkaXJlY3RDYWxsYmFjaz17b25SZWRpcmVjdENhbGxiYWNrfVxuICAgICAgYXVkaWVuY2U9e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0FVRElFTkNFIHx8IFwiXCJ9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGgwUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udHJvbGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./controllers/auth.controller.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cache\", function() { return cache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./controllers/auth.controller.tsx\");\nvar _jsxFileName = \"/ui/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nconst cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_5___default()({\n  key: 'css'\n});\nfunction App(props) {\n  const {\n    Component,\n    pageProps\n  } = props;\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return __jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__[\"CacheProvider\"], {\n    value: cache,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"Popstack\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })), __jsx(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  })))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbImNhY2hlIiwiY3JlYXRlQ2FjaGUiLCJrZXkiLCJBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsS0FBSyxHQUFHQyxxREFBVyxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBekI7QUFFUSxTQUFTQyxHQUFULENBQWFDLEtBQWIsRUFBOEI7QUFDM0MsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBMkJGLEtBQWpDO0FBRUFHLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQjtBQUNBLFVBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFsQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDYkEsZUFBUyxDQUFDRyxhQUFWLENBQXlCQyxXQUF6QixDQUFxQ0osU0FBckM7QUFDRDtBQUNGLEdBTkQsRUFNRyxFQU5IO0FBUUEsU0FDRSxNQUFDLDREQUFEO0FBQWUsU0FBSyxFQUFFVCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHFDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVjLHFEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLFNBQUQsZUFBZVIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSEYsQ0FEQSxDQUxGLENBREY7QUFlRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgQXV0aENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyJztcblxuZXhwb3J0IGNvbnN0IGNhY2hlID0gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHM6IEFwcFByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2NhY2hlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9wc3RhY2s8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEF1dGhDb250cm9sbGVyPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9BdXRoQ29udHJvbGxlcj5cbiAgICA8L0NhY2hlUHJvdmlkZXI+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable @typescript-eslint/indent */\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: \"#0057FF\",\n      dark: \"#0046CF\"\n    },\n    secondary: {\n      main: \"#FF8C4C\"\n    },\n    common: {\n      black: \"#0C0C0C\"\n    }\n  },\n  typography: {\n    fontFamily: [\"Inter\", \"Helvetica\", \"Arial\", \"Sans-serif\"].join(\",\"),\n    button: {\n      textTransform: \"none\"\n    },\n    h1: {\n      fontSize: \"2.5rem\",\n      lineHeight: \"1.2\",\n      fontWeight: 700,\n      \"@media (max-width: 600px)\": {\n        fontSize: \"2rem\"\n      }\n    },\n    h2: {\n      fontSize: \"1.375rem\",\n      fontWeight: 600,\n      lineHeight: \"1.2\",\n      \"@media (max-width: 600px)\": {\n        fontSize: \"1.25rem\"\n      }\n    },\n    h3: {\n      fontSize: \"1.25rem\",\n      lineHeight: \"1.25\",\n      \"@media (max-width: 600px)\": {\n        fontSize: \"1.125rem\"\n      }\n    },\n    subtitle1: {\n      fontSize: \"0.9375rem\",\n      lineHeight: 1.2,\n      opacity: 0.7\n    },\n    body1: {\n      fontSize: \"0.875rem\",\n      lineHeight: 1.375,\n      fontWeight: 300\n    },\n    body2: {\n      fontSize: \"1rem\",\n      lineHeight: 1.375,\n      fontWeight: 700\n    }\n  },\n  overrides: {\n    MuiOutlinedInput: {\n      root: {\n        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.95),\n        \"&:hover $notchedOutline\": {\n          borderColor: \"#0057FF\",\n          borderWidth: \"2px\"\n        },\n        \"&$focused $notchedOutline\": {\n          borderWidth: \"1px\"\n        }\n      },\n      focused: {},\n      notchedOutline: {}\n    },\n    MuiFilledInput: {\n      root: {\n        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.95),\n        borderBottomColor: \"#0057FF\",\n        \"&:hover\": {\n          backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.9)\n        },\n        \"&$focused\": {\n          backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.9)\n        }\n      },\n      focused: {},\n      underline: {\n        \"&::before\": {\n          borderBottomColor: \"#0057FF\"\n        },\n        \"&:hover\": {\n          \"&::before\": {\n            borderBottomColor: \"#0057FF\"\n          }\n        }\n      },\n      input: {\n        padding: \"20px 12px 10px\"\n      }\n    },\n    MuiFormHelperText: {\n      contained: {\n        marginLeft: \"0px\",\n        marginTop: \"0px\",\n        marginBottom: \"6px\"\n      }\n    },\n    MuiSkeleton: {\n      root: {\n        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.9)\n      }\n    },\n    MuiAutocomplete: {\n      inputRoot: {\n        padding: \"11px 8px 1px !important\"\n      }\n    },\n    MuiFormControl: {\n      root: {\n        flexDirection: \"column-reverse\"\n      }\n    },\n    MuiAppBar: {\n      root: {\n        boxShadow: \"none\"\n      }\n    },\n    MuiToolbar: {\n      root: {\n        backgroundColor: \"#fff\",\n        color: \"#0C0C0C\"\n      }\n    },\n    MuiButton: {\n      outlined: {\n        border: \"1px solid #1C1A1A\",\n        padding: \"18px 26px\"\n      },\n      outlinedSecondary: {\n        color: \"#1C1A1A\",\n        border: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.7),\n        borderStyle: \"dashed\",\n        borderWidth: \"1px\",\n        \"&:hover\": {\n          border: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.7),\n          borderStyle: \"dashed\",\n          borderWidth: \"1px\",\n          backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.96)\n        }\n      },\n      outlinedSizeSmall: {\n        padding: \"10px 20px\"\n      },\n      contained: {\n        padding: \"18px 26px\"\n      },\n      containedSizeSmall: {\n        padding: \"10px 20px\"\n      }\n    },\n    MuiAccordion: {\n      root: {\n        boxShadow: \"none\",\n        border: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"lighten\"])(\"#0057FF\", 0.7),\n        borderWidth: \"1px\",\n        borderStyle: \"solid\"\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdGhlbWUudHM/ODlhNiJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZGFyayIsInNlY29uZGFyeSIsImNvbW1vbiIsImJsYWNrIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiYnV0dG9uIiwidGV4dFRyYW5zZm9ybSIsImgxIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImgyIiwiaDMiLCJzdWJ0aXRsZTEiLCJvcGFjaXR5IiwiYm9keTEiLCJib2R5MiIsIm92ZXJyaWRlcyIsIk11aU91dGxpbmVkSW5wdXQiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHRlbiIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJmb2N1c2VkIiwibm90Y2hlZE91dGxpbmUiLCJNdWlGaWxsZWRJbnB1dCIsImJvcmRlckJvdHRvbUNvbG9yIiwidW5kZXJsaW5lIiwiaW5wdXQiLCJwYWRkaW5nIiwiTXVpRm9ybUhlbHBlclRleHQiLCJjb250YWluZWQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTXVpU2tlbGV0b24iLCJNdWlBdXRvY29tcGxldGUiLCJpbnB1dFJvb3QiLCJNdWlGb3JtQ29udHJvbCIsImZsZXhEaXJlY3Rpb24iLCJNdWlBcHBCYXIiLCJib3hTaGFkb3ciLCJNdWlUb29sYmFyIiwiY29sb3IiLCJNdWlCdXR0b24iLCJvdXRsaW5lZCIsImJvcmRlciIsIm91dGxpbmVkU2Vjb25kYXJ5IiwiYm9yZGVyU3R5bGUiLCJvdXRsaW5lZFNpemVTbWFsbCIsImNvbnRhaW5lZFNpemVTbWFsbCIsIk11aUFjY29yZGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBLE1BQU1BLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FB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RTtBQUNKdUIsaUJBQVMsRUFBRSxNQURQO0FBRUpLLGNBQU0sRUFBRTFCLHdFQUFPLENBQUMsU0FBRCxFQUFZLEdBQVosQ0FGWDtBQUdKRSxtQkFBVyxFQUFFLEtBSFQ7QUFJSjBCLG1CQUFXLEVBQUU7QUFKVDtBQURNO0FBekZMO0FBekRnQixDQUFELENBQTVCO0FBNkpleEQsb0VBQWYiLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvaW5kZW50ICovXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgbGlnaHRlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBTa2VsZXRvbkNsYXNzS2V5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbic7XG5pbXBvcnQgeyBBdXRvY29tcGxldGVDbGFzc0tleSB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlJztcblxuZGVjbGFyZSBtb2R1bGUgJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9vdmVycmlkZXMnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnROYW1lVG9DbGFzc0tleSB7XG4gICAgTXVpU2tlbGV0b246IFNrZWxldG9uQ2xhc3NLZXk7XG4gICAgTXVpQXV0b2NvbXBsZXRlOiBBdXRvY29tcGxldGVDbGFzc0tleTtcbiAgfVxufVxuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IFwiIzAwNTdGRlwiLFxuICAgICAgZGFyazogXCIjMDA0NkNGXCJcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogXCIjRkY4QzRDXCIsXG4gICAgfSxcbiAgICBjb21tb246IHtcbiAgICAgIGJsYWNrOiBcIiMwQzBDMENcIixcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogW1wiSW50ZXJcIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBcIlNhbnMtc2VyaWZcIl0uam9pbihcIixcIiksXG4gICAgYnV0dG9uOiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogXCIyLjVyZW1cIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS4yXCIsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIjoge1xuICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICB9XG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IFwiMS4zNzVyZW1cIixcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS4yXCIsXG4gICAgICBcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIjoge1xuICAgICAgICBmb250U2l6ZTogXCIxLjI1cmVtXCIsXG4gICAgICB9XG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxuICAgICAgbGluZUhlaWdodDogXCIxLjI1XCIsXG4gICAgICBcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIjoge1xuICAgICAgICBmb250U2l6ZTogXCIxLjEyNXJlbVwiLFxuICAgICAgfVxuICAgIH0sXG4gICAgc3VidGl0bGUxOiB7XG4gICAgICBmb250U2l6ZTogXCIwLjkzNzVyZW1cIixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICB9LFxuICAgIGJvZHkxOiB7XG4gICAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiLFxuICAgICAgbGluZUhlaWdodDogMS4zNzUsXG4gICAgICBmb250V2VpZ2h0OiAzMDBcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM3NSxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB9LFxuICB9LFxuICBvdmVycmlkZXM6IHtcbiAgICBNdWlPdXRsaW5lZElucHV0OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHRlbihcIiMwMDU3RkZcIiwgMC45NSksXG4gICAgICAgIFwiJjpob3ZlciAkbm90Y2hlZE91dGxpbmVcIjoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMwMDU3RkZcIixcbiAgICAgICAgICBib3JkZXJXaWR0aDogXCIycHhcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCImJGZvY3VzZWQgJG5vdGNoZWRPdXRsaW5lXCI6IHtcbiAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmb2N1c2VkOiB7fSxcbiAgICAgIG5vdGNoZWRPdXRsaW5lOiB7fSxcbiAgICB9LFxuICAgIE11aUZpbGxlZElucHV0OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHRlbihcIiMwMDU3RkZcIiwgMC45NSksXG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBcIiMwMDU3RkZcIixcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ZW4oXCIjMDA1N0ZGXCIsIDAuOSksXG4gICAgICAgIH0sXG4gICAgICAgIFwiJiRmb2N1c2VkXCI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ZW4oXCIjMDA1N0ZGXCIsIDAuOSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZm9jdXNlZDoge30sXG4gICAgICB1bmRlcmxpbmU6IHtcbiAgICAgICAgXCImOjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBcIiMwMDU3RkZcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICBcIiY6OmJlZm9yZVwiOiB7XG4gICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogXCIjMDA1N0ZGXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbnB1dDogeyBwYWRkaW5nOiBcIjIwcHggMTJweCAxMHB4XCIgfSxcbiAgICB9LFxuXG4gICAgTXVpRm9ybUhlbHBlclRleHQ6IHtcbiAgICAgIGNvbnRhaW5lZDogeyBtYXJnaW5MZWZ0OiBcIjBweFwiLCBtYXJnaW5Ub3A6IFwiMHB4XCIsIG1hcmdpbkJvdHRvbTogXCI2cHhcIiB9LFxuICAgIH0sXG4gICAgTXVpU2tlbGV0b246IHsgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGVuKFwiIzAwNTdGRlwiLCAwLjkpLFxuICAgIH19LFxuICAgIE11aUF1dG9jb21wbGV0ZToge1xuICAgIGlucHV0Um9vdDoge1xuICAgICAgcGFkZGluZzogXCIxMXB4IDhweCAxcHggIWltcG9ydGFudFwiLFxuICAgIH0gIH0sXG4gICAgTXVpRm9ybUNvbnRyb2w6IHsgcm9vdDogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIgfSB9LFxuICAgIE11aUFwcEJhcjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRvb2xiYXI6IHsgXG4gICAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgY29sb3I6IFwiIzBDMEMwQ1wiXG4gICAgfX0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBvdXRsaW5lZDoge1xuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMxQzFBMUFcIixcbiAgICAgICAgcGFkZGluZzogXCIxOHB4IDI2cHhcIlxuICAgICAgfSxcbiAgICAgIG91dGxpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICAgIGNvbG9yOiBcIiMxQzFBMUFcIixcbiAgICAgICAgYm9yZGVyOiBsaWdodGVuKFwiIzAwNTdGRlwiLCAwLjcpLFxuICAgICAgICBib3JkZXJTdHlsZTogXCJkYXNoZWRcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG5cbiAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICBib3JkZXI6IGxpZ2h0ZW4oXCIjMDA1N0ZGXCIsIDAuNyksXG4gICAgICAgICAgYm9yZGVyU3R5bGU6IFwiZGFzaGVkXCIsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGVuKFwiIzAwNTdGRlwiLCAwLjk2KSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvdXRsaW5lZFNpemVTbWFsbDoge1xuICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiXG4gICAgICB9LFxuICAgICAgY29udGFpbmVkOiB7XG4gICAgICAgIHBhZGRpbmc6IFwiMThweCAyNnB4XCJcbiAgICAgIH0sXG4gICAgICBjb250YWluZWRTaXplU21hbGw6IHtcbiAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHhcIlxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpQWNjb3JkaW9uOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgIGJvcmRlcjogbGlnaHRlbihcIiMwMDU3RkZcIiwgMC43KSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXG4gICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@auth0/auth0-react":
/*!*************************************!*\
  !*** external "@auth0/auth0-react" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@auth0/auth0-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvYXV0aDAtcmVhY3RcIj9kZmE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhdXRoMC9hdXRoMC1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9hdXRoMC1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@auth0/auth0-react\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/cache\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jYWNoZVwiP2Q4YzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGVtb3Rpb24vY2FjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jYWNoZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/cache\n");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiPzZkMDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGVtb3Rpb24vcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/react\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });