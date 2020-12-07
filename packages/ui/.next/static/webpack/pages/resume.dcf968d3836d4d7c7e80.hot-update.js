webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/resume/link.component.tsx":
/*!**********************************************!*\
  !*** ./components/resume/link.component.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ellie/Developer/popstack/packages/ui/components/resume/link.component.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar LinkForm = function LinkForm(_ref) {\n  var _ref$link = _ref.link,\n      title = _ref$link.title,\n      link = _ref$link.link,\n      number = _ref.number,\n      onChange = _ref.onChange;\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AccordionDetails\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    alignItems: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    id: \"links-title-\".concat(number),\n    name: \"links-title-\".concat(number),\n    helperText: \"Title\",\n    fullWidth: true,\n    variant: \"filled\",\n    defaultValue: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    id: \"links-link-\".concat(number),\n    name: \"links-link-\".concat(number),\n    helperText: \"Link\",\n    fullWidth: true,\n    variant: \"filled\",\n    defaultValue: link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    container: true,\n    justify: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"outlined\",\n    onClick: function onClick() {\n      return onChange();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Add to my resume\")))));\n};\n\n_c = LinkForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"LinkForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUvbGluay5jb21wb25lbnQudHN4PzllMTUiXSwibmFtZXMiOlsiTGlua0Zvcm0iLCJsaW5rIiwidGl0bGUiLCJudW1iZXIiLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBU0EsSUFBTUEsUUFBaUQsR0FBRyxTQUFwREEsUUFBb0QsT0FFcEM7QUFBQSx1QkFEcEJDLElBQ29CO0FBQUEsTUFEYkMsS0FDYSxhQURiQSxLQUNhO0FBQUEsTUFETkQsSUFDTSxhQUROQSxJQUNNO0FBQUEsTUFEQ0UsTUFDRCxRQURDQSxNQUNEO0FBQUEsTUFEU0MsUUFDVCxRQURTQSxRQUNUO0FBQ3BCLFNBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsY0FBVSxFQUFDLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSx3QkFBaUJELE1BQWpCLENBREo7QUFFRSxRQUFJLHdCQUFpQkEsTUFBakIsQ0FGTjtBQUdFLGNBQVUsRUFBQyxPQUhiO0FBSUUsYUFBUyxNQUpYO0FBS0UsV0FBTyxFQUFDLFFBTFY7QUFNRSxnQkFBWSxFQUFFRCxLQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVdFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLHVCQUFnQkMsTUFBaEIsQ0FESjtBQUVFLFFBQUksdUJBQWdCQSxNQUFoQixDQUZOO0FBR0UsY0FBVSxFQUFDLE1BSGI7QUFJRSxhQUFTLE1BSlg7QUFLRSxXQUFPLEVBQUMsUUFMVjtBQU1FLGdCQUFZLEVBQUVGLElBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLEVBcUJFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLE1BQXBCO0FBQXFCLFdBQU8sRUFBQyxVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNBLFdBQU8sRUFBQyxVQURSO0FBRUEsV0FBTyxFQUFFO0FBQUEsYUFBTUcsUUFBUSxFQUFkO0FBQUEsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREEsQ0FyQkYsQ0FEQSxDQURGO0FBb0NELENBdkNEOztLQUFNSixRO0FBeUNTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVzdW1lL2xpbmsuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY29yZGlvbkRldGFpbHMsIEdyaWQsIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9yZXN1bWUuaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtGb3JtUHJvcHMge1xuICBsaW5rOiBMaW5rO1xuICBudW1iZXI6IG51bWJlcjtcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IExpbmtGb3JtOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJTGlua0Zvcm1Qcm9wcz4gPSAoe1xuICBsaW5rOiB7dGl0bGUsIGxpbmt9LCBudW1iZXIsIG9uQ2hhbmdlXG59OiBJTGlua0Zvcm1Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBpZD17YGxpbmtzLXRpdGxlLSR7bnVtYmVyfWB9XG4gICAgICAgICAgbmFtZT17YGxpbmtzLXRpdGxlLSR7bnVtYmVyfWB9XG4gICAgICAgICAgaGVscGVyVGV4dD1cIlRpdGxlXCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPXtgbGlua3MtbGluay0ke251bWJlcn1gfVxuICAgICAgICAgIG5hbWU9e2BsaW5rcy1saW5rLSR7bnVtYmVyfWB9XG4gICAgICAgICAgaGVscGVyVGV4dD1cIkxpbmtcIlxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bGlua31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgPEdyaWQgaXRlbSA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoKX1cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgPkFkZCB0byBteSByZXN1bWU8L0J1dHRvbj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/resume/link.component.tsx\n");

/***/ })

})