webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/resume/resumeSection.component.tsx":
/*!*******************************************************!*\
  !*** ./components/resume/resumeSection.component.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab */ \"./node_modules/@material-ui/lab/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ellie/Developer/popstack/packages/ui/components/resume/resumeSection.component.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ResumeSection = function ResumeSection(_ref) {\n  var icon = _ref.icon,\n      heading = _ref.heading,\n      subtitle = _ref.subtitle,\n      children = _ref.children,\n      _ref$loading = _ref.loading,\n      loading = _ref$loading === void 0 ? false : _ref$loading;\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    pb: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, !loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, icon), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    variant: \"h3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, \" \", loading ? __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__[\"Skeleton\"], {\n    width: \"25%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 49\n    }\n  }) : heading)), subtitle && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    variant: \"subtitle1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, loading ? __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__[\"Skeleton\"], {\n    width: \"50%\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 57\n    }\n  }) : subtitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_c = ResumeSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResumeSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResumeSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lU2VjdGlvbi5jb21wb25lbnQudHN4P2JkMTMiXSwibmFtZXMiOlsiUmVzdW1lU2VjdGlvbiIsImljb24iLCJoZWFkaW5nIiwic3VidGl0bGUiLCJjaGlsZHJlbiIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxhQUEyRCxHQUFHLFNBQTlEQSxhQUE4RCxPQU16QztBQUFBLE1BTHpCQyxJQUt5QixRQUx6QkEsSUFLeUI7QUFBQSxNQUp6QkMsT0FJeUIsUUFKekJBLE9BSXlCO0FBQUEsTUFIekJDLFFBR3lCLFFBSHpCQSxRQUd5QjtBQUFBLE1BRnpCQyxRQUV5QixRQUZ6QkEsUUFFeUI7QUFBQSwwQkFEekJDLE9BQ3lCO0FBQUEsTUFEekJBLE9BQ3lCLDZCQURmLEtBQ2U7QUFDekIsU0FDRSxNQUFDLHFEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLE1BQXBCO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUF3QyxXQUFPLEVBQUUsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLENBQUNBLE9BQUQsSUFBWSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWUosSUFBWixDQURkLEVBRUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTRCSSxPQUFPLEdBQUcsTUFBQyx5REFBRDtBQUFVLFNBQUssRUFBQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBNkJILE9BQWhFLENBREYsQ0FGRixFQUtHQyxRQUFRLElBQ1AsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDRSxPQUFPLEdBQUcsTUFBQyx5REFBRDtBQUFVLFNBQUssRUFBQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBNEJGLFFBQXJFLENBREYsQ0FOSixFQVVFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFZQyxRQUFaLENBVkYsQ0FERixDQURGO0FBZ0JELENBdkJEOztLQUFNSixhO0FBeUJTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZVNlY3Rpb24uY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xuZXhwb3J0IGludGVyZmFjZSBJUmVzdW1lU2VjdGlvblByb3BzIHtcbiAgaWNvbjogUmVhY3ROb2RlO1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbn1cblxuY29uc3QgUmVzdW1lU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVJlc3VtZVNlY3Rpb25Qcm9wcz4gPSAoe1xuICBpY29uLFxuICBoZWFkaW5nLFxuICBzdWJ0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIGxvYWRpbmcgPSBmYWxzZSxcbn06IElSZXN1bWVTZWN0aW9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHBiPXs4fT5cbiAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgeyAhbG9hZGluZyAmJiA8R3JpZCBpdGVtPntpY29ufTwvR3JpZD59XG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+IHsgbG9hZGluZyA/IDxTa2VsZXRvbiB3aWR0aD1cIjI1JVwiIC8+OiBoZWFkaW5nfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+eyBsb2FkaW5nID8gPFNrZWxldG9uIHdpZHRoPVwiNTAlXCIgLz46c3VidGl0bGV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKX1cbiAgICAgICAgPEdyaWQgaXRlbT57Y2hpbGRyZW59PC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/resume/resumeSection.component.tsx\n");

/***/ })

})