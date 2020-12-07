webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/resume/employmentSection.component.tsx":
/*!***********************************************************!*\
  !*** ./components/resume/employmentSection.component.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Add */ \"./node_modules/@material-ui/icons/Add.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resumeSection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resumeSection.component */ \"./components/resume/resumeSection.component.tsx\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Remove */ \"./node_modules/@material-ui/icons/Remove.js\");\n/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _employment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employment.component */ \"./components/resume/employment.component.tsx\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _icons_teardrop_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/teardrop.icon */ \"./components/icons/teardrop.icon.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ellie/Developer/popstack/packages/ui/components/resume/employmentSection.component.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    icon: {\n      color: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"lighten\"])(theme.palette.primary.light, 0.7)\n    },\n    closedAccordion: {\n      border: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"lighten\"])(\"#0057FF\", 0.7),\n      borderStyle: \"dashed\",\n      borderWidth: \"1px\"\n    }\n  };\n});\n\nvar EmploymentSection = function EmploymentSection(_ref) {\n  _s();\n\n  var employment = _ref.employment,\n      onChange = _ref.onChange;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      expanded = _useState[0],\n      setExpanded = _useState[1];\n\n  return __jsx(_resumeSection_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    icon: __jsx(_icons_teardrop_icon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      fontSize: \"large\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }),\n    heading: \"Employment history\",\n    subtitle: \"Include your last 10 years of relevant experience and dates in this section. List your most recent position first.\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, employment && employment.map(function (job, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      item: true,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AccordionSummary\"], {\n      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        className: classes.icon,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 25\n        }\n      }),\n      \"aria-controls\": \"panel1a-content\",\n      id: \"panel1a-header\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      direction: \"column\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      item: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 19\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n      variant: \"body2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 21\n      }\n    }, job.title, \" at \", job.company)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      item: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 19\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 21\n      }\n    }, moment__WEBPACK_IMPORTED_MODULE_7___default()(job.dateFrom).format(\"MMMM YYYY\"), \" - \", moment__WEBPACK_IMPORTED_MODULE_7___default()(job.dateTo).format(\"MMMM YYYY\"))))), __jsx(_employment_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      job: job,\n      number: i,\n      onChange: onChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 11\n      }\n    })));\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Accordion\"], {\n    expanded: expanded,\n    className: \"\".concat(!expanded && classes.closedAccordion),\n    onChange: function onChange() {\n      return setExpanded(!expanded);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AccordionSummary\"], {\n    expandIcon: expanded ? __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      className: classes.icon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }\n    }) : __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      className: classes.icon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }\n    }),\n    \"aria-controls\": \"panel1a-content\",\n    id: \"panel1a-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    justify: \"space-between\",\n    alignItems: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 21\n    }\n  }, \"Add employment history\")))))), __jsx(_employment_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    job: {\n      company: \"\",\n      title: \"\",\n      location: \"\",\n      description: \"\",\n      dateFrom: null,\n      dateTo: null\n    },\n    number: employment.length,\n    onChange: onChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  })))));\n};\n\n_s(EmploymentSection, \"h4ZSQ0ae6nPGs2BiQgjY3xQWnvE=\", false, function () {\n  return [useStyles];\n});\n\n_c = EmploymentSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmploymentSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmploymentSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUvZW1wbG95bWVudFNlY3Rpb24uY29tcG9uZW50LnRzeD9mMDBiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImljb24iLCJjb2xvciIsImxpZ2h0ZW4iLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0IiwiY2xvc2VkQWNjb3JkaW9uIiwiYm9yZGVyIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsIkVtcGxveW1lbnRTZWN0aW9uIiwiZW1wbG95bWVudCIsIm9uQ2hhbmdlIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsIm1hcCIsImpvYiIsImkiLCJ0aXRsZSIsImNvbXBhbnkiLCJtb21lbnQiLCJkYXRlRnJvbSIsImZvcm1hdCIsImRhdGVUbyIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRUMsaUVBQU8sQ0FBQ0gsS0FBSyxDQUFDSSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEtBQXZCLEVBQThCLEdBQTlCO0FBRFYsS0FEaUM7QUFJdkNDLG1CQUFlLEVBQUU7QUFDZkMsWUFBTSxFQUFFTCxpRUFBTyxDQUFDLFNBQUQsRUFBWSxHQUFaLENBREE7QUFFZk0saUJBQVcsRUFBRSxRQUZFO0FBR2ZDLGlCQUFXLEVBQUU7QUFIRTtBQUpzQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFnQkEsSUFBTUMsaUJBQW1FLEdBQUcsU0FBdEVBLGlCQUFzRSxPQUFxRDtBQUFBOztBQUFBLE1BQW5EQyxVQUFtRCxRQUFuREEsVUFBbUQ7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0FBQy9ILE1BQU1DLE9BQU8sR0FBR2hCLFNBQVMsRUFBekI7O0FBRCtILGtCQUUvRmlCLHNEQUFRLENBQUMsS0FBRCxDQUZ1RjtBQUFBLE1BRXhIQyxRQUZ3SDtBQUFBLE1BRTlHQyxXQUY4Rzs7QUFJL0gsU0FDRSxNQUFDLGdFQUFEO0FBQ0UsUUFBSSxFQUFFLE1BQUMsNERBQUQ7QUFBYyxjQUFRLEVBQUMsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURSO0FBRUUsV0FBTyxFQUFDLG9CQUZWO0FBR0UsWUFBUSxFQUFDLG9IQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NMLFVBQVUsSUFBSUEsVUFBVSxDQUFDTSxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsV0FDOUIsTUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFNBQUcsRUFBRUEsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFDRSxnQkFBVSxFQUFFLE1BQUMsb0VBQUQ7QUFBZ0IsaUJBQVMsRUFBRU4sT0FBTyxDQUFDYixJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGQ7QUFFRSx1QkFBYyxpQkFGaEI7QUFHRSxRQUFFLEVBQUMsZ0JBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1NLE1BQUMsc0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsZUFBUyxFQUFDLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNkJrQixHQUFHLENBQUNFLEtBQWpDLFVBQTRDRixHQUFHLENBQUNHLE9BQWhELENBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhQyw2Q0FBTSxDQUFDSixHQUFHLENBQUNLLFFBQUwsQ0FBTixDQUFxQkMsTUFBckIsQ0FBNEIsV0FBNUIsQ0FBYixTQUEwREYsNkNBQU0sQ0FBQ0osR0FBRyxDQUFDTyxNQUFMLENBQU4sQ0FBbUJELE1BQW5CLENBQTBCLFdBQTFCLENBQTFELENBREYsQ0FKRixDQU5OLENBREYsRUFpQkUsTUFBQyw2REFBRDtBQUFnQixTQUFHLEVBQUVOLEdBQXJCO0FBQTBCLFlBQU0sRUFBRUMsQ0FBbEM7QUFBcUMsY0FBUSxFQUFFUCxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BakJGLENBREYsQ0FEOEI7QUFBQSxHQUFmLENBRGYsRUF1QkEsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLFlBQVEsRUFBRUcsUUFEWjtBQUVFLGFBQVMsWUFBSyxDQUFDQSxRQUFELElBQWFGLE9BQU8sQ0FBQ1AsZUFBMUIsQ0FGWDtBQUdFLFlBQVEsRUFBRTtBQUFBLGFBQU1VLFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxrRUFBRDtBQUNFLGNBQVUsRUFDUkEsUUFBUSxHQUNOLE1BQUMsZ0VBQUQ7QUFBWSxlQUFTLEVBQUVGLE9BQU8sQ0FBQ2IsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURNLEdBR04sTUFBQyw2REFBRDtBQUFTLGVBQVMsRUFBRWEsT0FBTyxDQUFDYixJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTE47QUFRRSxxQkFBYyxpQkFSaEI7QUFTRSxNQUFFLEVBQUMsZ0JBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFDLGVBQXhCO0FBQXdDLGNBQVUsRUFBQyxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixDQURGLENBREYsQ0FERixDQVhGLENBTEYsRUEwQkUsTUFBQyw2REFBRDtBQUFnQixPQUFHLEVBQUU7QUFBQ3FCLGFBQU8sRUFBRSxFQUFWO0FBQWNELFdBQUssRUFBRSxFQUFyQjtBQUF5Qk0sY0FBUSxFQUFFLEVBQW5DO0FBQXVDQyxpQkFBVyxFQUFFLEVBQXBEO0FBQXdESixjQUFRLEVBQUUsSUFBbEU7QUFBd0VFLFlBQU0sRUFBRTtBQUFoRixLQUFyQjtBQUE0RyxVQUFNLEVBQUVkLFVBQVUsQ0FBQ2lCLE1BQS9IO0FBQXVJLFlBQVEsRUFBRWhCLFFBQWpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsQ0FERixDQXZCQSxDQVBGLENBREY7QUFnRUQsQ0FwRUQ7O0dBQU1GLGlCO1VBQ1liLFM7OztLQURaYSxpQjtBQXNFU0EsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Jlc3VtZS9lbXBsb3ltZW50U2VjdGlvbi5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgR3JpZCxcbiAgbWFrZVN0eWxlcyxcbiAgbGlnaHRlbixcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25TdW1tYXJ5LFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xuaW1wb3J0IFJlc3VtZVNlY3Rpb24gZnJvbSBcIi4vcmVzdW1lU2VjdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlXCI7XG5pbXBvcnQgeyBFbXBsb3ltZW50IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9yZXN1bWUuaW50ZXJmYWNlXCI7XG5pbXBvcnQgRW1wbG95bWVudEZvcm0gZnJvbSBcIi4vZW1wbG95bWVudC5jb21wb25lbnRcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFRlYXJkcm9wSWNvbiBmcm9tIFwiLi4vaWNvbnMvdGVhcmRyb3AuaWNvblwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaWNvbjoge1xuICAgIGNvbG9yOiBsaWdodGVuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCwgMC43KSxcbiAgfSxcbiAgY2xvc2VkQWNjb3JkaW9uOiB7XG4gICAgYm9yZGVyOiBsaWdodGVuKFwiIzAwNTdGRlwiLCAwLjcpLFxuICAgIGJvcmRlclN0eWxlOiBcImRhc2hlZFwiLFxuICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICB9LFxufSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFbXBsb3ltZW50U2VjdGlvblByb3BzIHtcbiAgZW1wbG95bWVudD86IEVtcGxveW1lbnRbXTtcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEVtcGxveW1lbnRTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJRW1wbG95bWVudFNlY3Rpb25Qcm9wcz4gPSAoe2VtcGxveW1lbnQsIG9uQ2hhbmdlfTogSUVtcGxveW1lbnRTZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxSZXN1bWVTZWN0aW9uXG4gICAgICBpY29uPXs8VGVhcmRyb3BJY29uIGZvbnRTaXplPVwibGFyZ2VcIi8+fVxuICAgICAgaGVhZGluZz1cIkVtcGxveW1lbnQgaGlzdG9yeVwiXG4gICAgICBzdWJ0aXRsZT1cIkluY2x1ZGUgeW91ciBsYXN0IDEwIHllYXJzIG9mIHJlbGV2YW50IGV4cGVyaWVuY2UgYW5kXG4gICAgICBkYXRlcyBpbiB0aGlzIHNlY3Rpb24uIExpc3QgeW91ciBtb3N0IHJlY2VudCBwb3NpdGlvblxuICAgICAgZmlyc3QuXCJcbiAgICA+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICB7ZW1wbG95bWVudCAmJiBlbXBsb3ltZW50Lm1hcCgoam9iLCBpKSA9PiBcbiAgICAgIDxHcmlkIGl0ZW0ga2V5PXtpfT5cbiAgICAgICAgPEFjY29yZGlvbj5cbiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPn1cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIlxuICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgICAgPlxuICAgICAgXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+e2pvYi50aXRsZX0gYXQge2pvYi5jb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pnttb21lbnQoam9iLmRhdGVGcm9tKS5mb3JtYXQoXCJNTU1NIFlZWVlcIil9IC0ge21vbWVudChqb2IuZGF0ZVRvKS5mb3JtYXQoXCJNTU1NIFlZWVlcIil9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICA8RW1wbG95bWVudEZvcm0gam9iPXtqb2J9IG51bWJlcj17aX0gb25DaGFuZ2U9e29uQ2hhbmdlfS8+XG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9HcmlkPil9XG4gICAgICA8R3JpZCBpdGVtPlxuICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7IWV4cGFuZGVkICYmIGNsYXNzZXMuY2xvc2VkQWNjb3JkaW9ufWB9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9XG4gICAgICAgID5cbiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgZXhwYW5kSWNvbj17XG4gICAgICAgICAgICAgIGV4cGFuZGVkID8gKFxuICAgICAgICAgICAgICAgIDxSZW1vdmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxBZGRJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcbiAgICAgICAgICAgIGlkPVwicGFuZWwxYS1oZWFkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5BZGQgZW1wbG95bWVudCBoaXN0b3J5PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICA8RW1wbG95bWVudEZvcm0gam9iPXt7Y29tcGFueTogXCJcIiwgdGl0bGU6IFwiXCIsIGxvY2F0aW9uOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgZGF0ZUZyb206IG51bGwsIGRhdGVUbzogbnVsbH19IG51bWJlcj17ZW1wbG95bWVudC5sZW5ndGh9IG9uQ2hhbmdlPXtvbkNoYW5nZX0vPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1Jlc3VtZVNlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbXBsb3ltZW50U2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/resume/employmentSection.component.tsx\n");

/***/ })

})