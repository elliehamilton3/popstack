webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/resume/personalDetails.component.tsx":
/*!*********************************************************!*\
  !*** ./components/resume/personalDetails.component.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_circle_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/circle.icon */ \"./components/icons/circle.icon.tsx\");\n/* harmony import */ var _resumeSection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resumeSection.component */ \"./components/resume/resumeSection.component.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ellie/Developer/popstack/packages/ui/components/resume/personalDetails.component.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n // import AddIcon from \"@material-ui/icons/Add\";\n\n // const useStyles = makeStyles((theme) => ({\n//   button: {\n//     justifyContent: \"space-between\",\n//     color: lighten(theme.palette.common.black, 0.4),\n//     padding: \"10px 16px\",\n//   },\n//   icon: {\n//     color: lighten(theme.palette.primary.light, 0.7),\n//   },\n// }));\n\nvar PersonalDetailsSection = function PersonalDetailsSection(_ref) {\n  var firstName = _ref.firstName,\n      lastName = _ref.lastName,\n      email = _ref.email,\n      title = _ref.title,\n      phoneNumber = _ref.phoneNumber,\n      _onChange = _ref.onChange,\n      _ref$loading = _ref.loading,\n      loading = _ref$loading === void 0 ? false : _ref$loading;\n  // const classes = useStyles();\n  return __jsx(_resumeSection_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    loading: loading,\n    icon: __jsx(_icons_circle_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      fontSize: \"large\",\n      style: {\n        fill: \"#FFD84C\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }),\n    heading: \"Personal Details\",\n    subtitle: \"Summarise your professional career in 2 or 3 sentences.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    alignItems: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"TextField\"], {\n    id: \"firstName\",\n    name: \"firstName\",\n    helperText: \"First name\",\n    fullWidth: true,\n    variant: \"filled\",\n    defaultValue: firstName,\n    onChange: function onChange() {\n      return _onChange();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, loading && __jsx(Skeleton, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 27\n    }\n  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"TextField\"], {\n    id: \"lastName\",\n    name: \"lastName\",\n    helperText: \"Last name\",\n    fullWidth: true,\n    variant: \"filled\",\n    defaultValue: lastName,\n    onChange: function onChange() {\n      return _onChange();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    alignItems: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"TextField\"], {\n    id: \"email\",\n    name: \"email\",\n    helperText: \"Email address\",\n    fullWidth: true,\n    variant: \"filled\",\n    defaultValue: email,\n    onChange: function onChange() {\n      return _onChange();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"TextField\"], {\n    id: \"phoneNumber\",\n    name: \"phoneNumber\",\n    type: \"number\",\n    helperText: \"Phone number\",\n    fullWidth: true,\n    variant: \"filled\",\n    defaultValue: phoneNumber,\n    onChange: function onChange() {\n      return _onChange();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    alignItems: \"flex-end\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"TextField\"], {\n    id: \"title\",\n    name: \"title\",\n    helperText: \"Job title\",\n    fullWidth: true,\n    variant: \"filled\",\n    defaultValue: title,\n    onChange: function onChange() {\n      return _onChange();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_c = PersonalDetailsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PersonalDetailsSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"PersonalDetailsSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUvcGVyc29uYWxEZXRhaWxzLmNvbXBvbmVudC50c3g/MDYwNSJdLCJuYW1lcyI6WyJQZXJzb25hbERldGFpbHNTZWN0aW9uIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInRpdGxlIiwicGhvbmVOdW1iZXIiLCJvbkNoYW5nZSIsImxvYWRpbmciLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFPQTtDQUVBOztDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLElBQU1BLHNCQUFzRSxHQUFHLFNBQXpFQSxzQkFBeUUsT0FBd0c7QUFBQSxNQUF0R0MsU0FBc0csUUFBdEdBLFNBQXNHO0FBQUEsTUFBM0ZDLFFBQTJGLFFBQTNGQSxRQUEyRjtBQUFBLE1BQWpGQyxLQUFpRixRQUFqRkEsS0FBaUY7QUFBQSxNQUExRUMsS0FBMEUsUUFBMUVBLEtBQTBFO0FBQUEsTUFBbkVDLFdBQW1FLFFBQW5FQSxXQUFtRTtBQUFBLE1BQXREQyxTQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSwwQkFBNUNDLE9BQTRDO0FBQUEsTUFBNUNBLE9BQTRDLDZCQUFsQyxLQUFrQztBQUNyTDtBQUNBLFNBQ0UsTUFBQyxnRUFBRDtBQUNFLFdBQU8sRUFBRUEsT0FEWDtBQUVFLFFBQUksRUFBRSxNQUFDLDBEQUFEO0FBQVksY0FBUSxFQUFDLE9BQXJCO0FBQTZCLFdBQUssRUFBRTtBQUFDQyxZQUFJLEVBQUU7QUFBUCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRlI7QUFHRSxXQUFPLEVBQUMsa0JBSFY7QUFJRSxZQUFRLEVBQUMseURBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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TUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsY0FBVSxFQUFDLFVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGNBQVUsRUFBQyxXQUhiO0FBSUUsYUFBUyxNQUpYO0FBS0UsV0FBTyxFQUFDLFFBTFY7QUFNRSxnQkFBWSxFQUFFRixLQU5oQjtBQU9FLFlBQVEsRUFBRTtBQUFBLGFBQU1FLFNBQVEsRUFBZDtBQUFBLEtBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQTdERixDQURGO0FBMEZELENBNUZEOztLQUFNTixzQjtBQThGU0EscUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Jlc3VtZS9wZXJzb25hbERldGFpbHMuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIC8vIEJ1dHRvbixcbiAgR3JpZCxcbiAgVGV4dEZpZWxkLFxuICAvLyBtYWtlU3R5bGVzLFxuICAvLyBsaWdodGVuLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaXJjbGVJY29uIGZyb20gXCIuLi9pY29ucy9jaXJjbGUuaWNvblwiO1xuLy8gaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcbmltcG9ydCBSZXN1bWVTZWN0aW9uIGZyb20gXCIuL3Jlc3VtZVNlY3Rpb24uY29tcG9uZW50XCI7XG5cbi8vIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuLy8gICBidXR0b246IHtcbi8vICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4vLyAgICAgY29sb3I6IGxpZ2h0ZW4odGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssIDAuNCksXG4vLyAgICAgcGFkZGluZzogXCIxMHB4IDE2cHhcIixcbi8vICAgfSxcbi8vICAgaWNvbjoge1xuLy8gICAgIGNvbG9yOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCwgMC43KSxcbi8vICAgfSxcbi8vIH0pKTtcbmV4cG9ydCBpbnRlcmZhY2UgSVBlcnNvbmFsRGV0YWlsc1Byb3BzIHtcbiAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICBsYXN0TmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lTnVtYmVyPzogbnVtYmVyO1xuICB0aXRsZT86IHN0cmluZztcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG4gIGxvYWRpbmc/OiBib29sZWFuO1xufVxuXG5jb25zdCBQZXJzb25hbERldGFpbHNTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUGVyc29uYWxEZXRhaWxzUHJvcHM+ID0gKHtmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgdGl0bGUsIHBob25lTnVtYmVyLCBvbkNoYW5nZSwgbG9hZGluZyA9IGZhbHNlfTogSVBlcnNvbmFsRGV0YWlsc1Byb3BzKSA9PiB7XG4gIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8UmVzdW1lU2VjdGlvblxuICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgIGljb249ezxDaXJjbGVJY29uIGZvbnRTaXplPVwibGFyZ2VcIiBzdHlsZT17e2ZpbGw6IFwiI0ZGRDg0Q1wifX0vPn1cbiAgICAgIGhlYWRpbmc9XCJQZXJzb25hbCBEZXRhaWxzXCJcbiAgICAgIHN1YnRpdGxlPVwiU3VtbWFyaXNlIHlvdXIgcHJvZmVzc2lvbmFsIGNhcmVlciBpbiAyIG9yIDMgc2VudGVuY2VzLlwiXG4gICAgPiBcbiAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiRmlyc3QgbmFtZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8U2tlbGV0b24gLz4gfVxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiTGFzdCBuYW1lXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJFbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwicGhvbmVOdW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVOdW1iZXJcIlxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIlBob25lIG51bWJlclwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiSm9iIHRpdGxlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBlbmRJY29uPXs8QWRkSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBjdXN0b20gZmllbGRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1Jlc3VtZVNlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbERldGFpbHNTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/resume/personalDetails.component.tsx\n");

/***/ })

})