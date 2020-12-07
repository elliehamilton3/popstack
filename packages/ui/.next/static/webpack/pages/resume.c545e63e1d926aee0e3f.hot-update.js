webpackHotUpdate_N_E("pages/resume",{

/***/ "./components/resume/resumePreview.component.tsx":
/*!*******************************************************!*\
  !*** ./components/resume/resumePreview.component.tsx ***!
  \*******************************************************/
/*! exports provided: generatePdfDocument, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generatePdfDocument\", function() { return generatePdfDocument; });\n/* harmony import */ var _Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pdfDocument_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdfDocument.component */ \"./components/resume/pdfDocument.component.tsx\");\n/* harmony import */ var _pdfDocument2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdfDocument2.component */ \"./components/resume/pdfDocument2.component.tsx\");\n/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-pdf/renderer */ \"./node_modules/@react-pdf/renderer/dist/react-pdf.browser.es.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_pdf_dist_esm_entry_webpack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pdf/dist/esm/entry.webpack */ \"./node_modules/react-pdf/dist/esm/entry.webpack.js\");\n/* harmony import */ var blob_stream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! blob-stream */ \"./node_modules/blob-stream/index.js\");\n/* harmony import */ var blob_stream__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(blob_stream__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _resumeLoadingPlaceholder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resumeLoadingPlaceholder.component */ \"./components/resume/resumeLoadingPlaceholder.component.tsx\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ellie/Developer/popstack/packages/ui/components/resume/resumePreview.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    paper: {\n      marginTop: \"40px\",\n      minHeight: \"calc(100vh - 192px)\",\n      minWidth: 0\n    },\n    pdfStyles: {\n      \"& canvas\": {\n        borderRadius: \"4px\",\n        height: \"calc(100vh - 200px) !important\",\n        width: \"auto !important\"\n      },\n      \"& div div div\": {\n        display: \"none\"\n      }\n    },\n    box: {\n      backgroundColor: \"#2F80ED\",\n      padding: \"40px\",\n      height: \"calc(100vh - 64px)\",\n      \"@media (min-width: 960px)\": {\n        position: \"fixed\",\n        width: \"50%\",\n        top: \"64px\",\n        padding: 0\n      }\n    },\n    button: {\n      backgroundColor: theme.palette.common.white\n    },\n    pageWidth: {\n      width: \"calc(67vh - 96px)\",\n      \"@media (max-width: 440px)\": {\n        maxWidth: \"260px\"\n      }\n    }\n  };\n});\nvar generatePdfDocument = /*#__PURE__*/function () {\n  var _ref = Object(_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(documentData, resumeStyle) {\n    var blob, _blob;\n\n    return _Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(resumeStyle === 2)) {\n              _context.next = 7;\n              break;\n            }\n\n            _context.next = 3;\n            return Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__[\"pdf\"])(__jsx(_pdfDocument2_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, documentData, {\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 28\n              }\n            }))).toBlob();\n\n          case 3:\n            blob = _context.sent;\n            Object(file_saver__WEBPACK_IMPORTED_MODULE_8__[\"saveAs\"])(blob, \"cv.pdf\");\n            _context.next = 12;\n            break;\n\n          case 7:\n            if (!(resumeStyle === 1)) {\n              _context.next = 12;\n              break;\n            }\n\n            _context.next = 10;\n            return Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__[\"pdf\"])(__jsx(_pdfDocument_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, documentData, {\n              __self: _this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 28\n              }\n            }))).toBlob();\n\n          case 10:\n            _blob = _context.sent;\n            Object(file_saver__WEBPACK_IMPORTED_MODULE_8__[\"saveAs\"])(_blob, \"cv.pdf\");\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function generatePdfDocument(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar ResumePreview = function ResumePreview(_ref2) {\n  _s();\n\n  var resume = _ref2.resume,\n      resumeStyle = _ref2.resumeStyle;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      generatedResume = _useState[0],\n      setGeneratedResume = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      numPages = _useState2[0],\n      setNumPages = _useState2[1];\n\n  var bufferToUrl = /*#__PURE__*/function () {\n    var _ref3 = Object(_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(buffer) {\n      var stream, url;\n      return _Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              stream = buffer.pipe(blob_stream__WEBPACK_IMPORTED_MODULE_10___default()());\n              _context2.next = 3;\n              return new Promise(function (resolve, reject) {\n                stream.on('finish', function () {\n                  resolve(stream.toBlobURL('application/pdf'));\n                });\n                stream.on('error', reject);\n              });\n\n            case 3:\n              url = _context2.sent;\n              setGeneratedResume(url ? url : \"\");\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function bufferToUrl(_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (resume) {\n      if (resumeStyle === 2) {\n        Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__[\"pdf\"])(__jsx(_pdfDocument2_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, resume, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }\n        }))).toBuffer().then(bufferToUrl);\n      } else if (resumeStyle === 1) {\n        Object(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_7__[\"pdf\"])(__jsx(_pdfDocument_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_Users_ellie_Developer_popstack_packages_ui_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, resume, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }\n        }))).toBuffer().then(bufferToUrl);\n      }\n    }\n  }, [resumeStyle, resume]); // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n  function onDocumentLoadSuccess(_ref4) {\n    var numPages = _ref4.numPages;\n    setNumPages(numPages);\n  }\n\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    className: classes.box,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    alignItems: \"center\",\n    direction: \"column\",\n    spacing: 2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    className: classes.pageWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Paper\"], {\n    elevation: 8,\n    className: \"\".concat(classes.paper, \" \").concat(generatedResume && classes.pdfStyles),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, !generatedResume ? __jsx(_resumeLoadingPlaceholder_component__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }) : __jsx(react_pdf_dist_esm_entry_webpack__WEBPACK_IMPORTED_MODULE_9__[\"Document\"], {\n    file: generatedResume,\n    onLoadSuccess: onDocumentLoadSuccess,\n    loading: __jsx(_resumeLoadingPlaceholder_component__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 22\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, __jsx(react_pdf_dist_esm_entry_webpack__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n    pageNumber: numPages,\n    style: {\n      width: \"0px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 13\n    }\n  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"contained\",\n    className: classes.button,\n    disabled: !resume // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n    ,\n    onClick: function onClick() {\n      return generatePdfDocument(resume, resumeStyle);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 25\n    }\n  }, \"Download as PDF\"))));\n};\n\n_s(ResumePreview, \"0840JTAYHOa5/lKh5y0LegUXC1g=\", false, function () {\n  return [useStyles];\n});\n\n_c = ResumePreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResumePreview);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResumePreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lUHJldmlldy5jb21wb25lbnQudHN4P2I0NTkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsInBkZlN0eWxlcyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImJveCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwb3NpdGlvbiIsInRvcCIsImJ1dHRvbiIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsInBhZ2VXaWR0aCIsIm1heFdpZHRoIiwiZ2VuZXJhdGVQZGZEb2N1bWVudCIsImRvY3VtZW50RGF0YSIsInJlc3VtZVN0eWxlIiwicGRmIiwidG9CbG9iIiwiYmxvYiIsInNhdmVBcyIsIlJlc3VtZVByZXZpZXciLCJyZXN1bWUiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJnZW5lcmF0ZWRSZXN1bWUiLCJzZXRHZW5lcmF0ZWRSZXN1bWUiLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwiYnVmZmVyVG9VcmwiLCJidWZmZXIiLCJzdHJlYW0iLCJwaXBlIiwiYmxvYlN0cmVhbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJ0b0Jsb2JVUkwiLCJ1cmwiLCJ1c2VFZmZlY3QiLCJ0b0J1ZmZlciIsInRoZW4iLCJvbkRvY3VtZW50TG9hZFN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxNQUROO0FBRUhDLGVBQVMsRUFBRyxxQkFGVDtBQUdIQyxj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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGxCLENBbkJBLENBREYsQ0FERjtBQW1DRCxDQXpFRDs7R0FBTUssYTtVQUlZOUIsUzs7O0tBSlo4QixhO0FBMkVTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZVByZXZpZXcuY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgUGFwZXIsIFR5cG9ncmFwaHksIG1ha2VTdHlsZXMsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQZGZEb2N1bWVudCBmcm9tIFwiLi9wZGZEb2N1bWVudC5jb21wb25lbnRcIjtcbmltcG9ydCBQZGZEb2N1bWVudDIgZnJvbSBcIi4vcGRmRG9jdW1lbnQyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcGRmIH0gZnJvbSBcIkByZWFjdC1wZGYvcmVuZGVyZXJcIjtcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gXCJmaWxlLXNhdmVyXCI7XG5pbXBvcnQge1xuICBEb2N1bWVudCBhcyBEb2MsXG4gIFBhZ2UgYXMgRG9jUGFnZSxcbn0gZnJvbSBcInJlYWN0LXBkZi9kaXN0L2VzbS9lbnRyeS53ZWJwYWNrXCI7XG5pbXBvcnQgeyBSZXN1bWUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3Jlc3VtZS5pbnRlcmZhY2VcIjtcbmltcG9ydCBibG9iU3RyZWFtIGZyb20gJ2Jsb2Itc3RyZWFtJztcbmltcG9ydCBSZXN1bWVMb2FkaW5nUGxhY2Vob2xkZXIgZnJvbSBcIi4vcmVzdW1lTG9hZGluZ1BsYWNlaG9sZGVyLmNvbXBvbmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bWVQcmV2aWV3UHJvcHMge1xuICByZXN1bWU6IFJlc3VtZSB8IHVuZGVmaW5lZDtcbiAgcmVzdW1lU3R5bGU6IDEgfCAyO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxuICAgICAgbWluSGVpZ2h0OiAgXCJjYWxjKDEwMHZoIC0gMTkycHgpXCIsXG4gICAgICBtaW5XaWR0aDogMCxcbiAgfSxcbiAgcGRmU3R5bGVzOiB7XG4gICAgXCImIGNhbnZhc1wiOiB7XG4gIFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuXG4gICAgICAgIGhlaWdodDogXCJjYWxjKDEwMHZoIC0gMjAwcHgpICFpbXBvcnRhbnRcIixcbiAgICAgICAgd2lkdGg6IFwiYXV0byAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgICBcIiYgZGl2IGRpdiBkaXZcIjoge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSxcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMyRjgwRURcIixcbiAgICBwYWRkaW5nOiBcIjQwcHhcIixcbiAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDY0cHgpXCIsXG4gICAgXCJAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgIHRvcDogXCI2NHB4XCIsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgIH1cbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZVxuICB9LFxuICBwYWdlV2lkdGg6IHtcbiAgICB3aWR0aDogXCJjYWxjKDY3dmggLSA5NnB4KVwiLFxuICAgIFwiQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KVwiOiB7XG4gICAgICBtYXhXaWR0aDogXCIyNjBweFwiXG4gICAgfVxuICB9XG59KSk7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVBkZkRvY3VtZW50ID0gYXN5bmMgKGRvY3VtZW50RGF0YTogUmVzdW1lLCByZXN1bWVTdHlsZTogbnVtYmVyKSA9PiB7XG4gIGlmKHJlc3VtZVN0eWxlID09PSAyKSB7XG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHBkZig8UGRmRG9jdW1lbnQyIHsuLi5kb2N1bWVudERhdGF9IC8+KS50b0Jsb2IoKTtcbiAgICBzYXZlQXMoYmxvYiwgXCJjdi5wZGZcIik7XG4gIH1cbiAgZWxzZSBpZihyZXN1bWVTdHlsZSA9PT0gMSkge1xuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBwZGYoPFBkZkRvY3VtZW50IHsuLi5kb2N1bWVudERhdGF9IC8+KS50b0Jsb2IoKTtcbiAgICBzYXZlQXMoYmxvYiwgXCJjdi5wZGZcIik7XG4gIH1cbn07XG5cbmNvbnN0IFJlc3VtZVByZXZpZXc6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElSZXN1bWVQcmV2aWV3UHJvcHM+ID0gKHtcbiAgcmVzdW1lLFxuICByZXN1bWVTdHlsZVxufTogSVJlc3VtZVByZXZpZXdQcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtnZW5lcmF0ZWRSZXN1bWUsIHNldEdlbmVyYXRlZFJlc3VtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtudW1QYWdlcywgc2V0TnVtUGFnZXNdID0gdXNlU3RhdGUoMSk7XG4gIFxuICBjb25zdCBidWZmZXJUb1VybCA9IGFzeW5jIChidWZmZXI6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYnVmZmVyLnBpcGUoYmxvYlN0cmVhbSgpKTtcblxuICAgICAgY29uc3QgdXJsOnN0cmluZyA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc3RyZWFtLm9uKCdmaW5pc2gnLCAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShzdHJlYW0udG9CbG9iVVJMKCdhcHBsaWNhdGlvbi9wZGYnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRHZW5lcmF0ZWRSZXN1bWUodXJsID8gdXJsIDogXCJcIik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHJlc3VtZSkge1xuICAgICAgaWYocmVzdW1lU3R5bGUgPT09IDIpIHtcbiAgICAgICAgcGRmKDxQZGZEb2N1bWVudDIgey4uLnJlc3VtZSF9IC8+KS50b0J1ZmZlcigpLnRoZW4oYnVmZmVyVG9VcmwpXG4gICAgICB9XG4gICAgICBlbHNlIGlmKHJlc3VtZVN0eWxlID09PSAxKSB7XG4gICAgICAgIHBkZig8UGRmRG9jdW1lbnQgey4uLnJlc3VtZSF9IC8+KS50b0J1ZmZlcigpLnRoZW4oYnVmZmVyVG9VcmwpXG4gICAgICB9XG4gICAgfSAgXG4gIH0sIFtyZXN1bWVTdHlsZSwgcmVzdW1lXSk7XG5cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBmdW5jdGlvbiBvbkRvY3VtZW50TG9hZFN1Y2Nlc3MoeyBudW1QYWdlcyB9OiBhbnkpIHtcbiAgICBzZXROdW1QYWdlcyhudW1QYWdlcyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlV2lkdGh9PlxuICAgICAgPFBhcGVyXG4gICAgICAgIGVsZXZhdGlvbj17OH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnBhcGVyfSAke2dlbmVyYXRlZFJlc3VtZSAmJiBjbGFzc2VzLnBkZlN0eWxlc31gfVxuICAgICAgPlxuICAgICAgICB7IWdlbmVyYXRlZFJlc3VtZSA/IChcbiAgICAgICAgICA8UmVzdW1lTG9hZGluZ1BsYWNlaG9sZGVyIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPERvY1xuICAgICAgICAgICAgZmlsZT17Z2VuZXJhdGVkUmVzdW1lfVxuICAgICAgICAgICAgb25Mb2FkU3VjY2Vzcz17b25Eb2N1bWVudExvYWRTdWNjZXNzfVxuICAgICAgICAgICAgbG9hZGluZz17PFJlc3VtZUxvYWRpbmdQbGFjZWhvbGRlciAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RG9jUGFnZSBwYWdlTnVtYmVyPXtudW1QYWdlc30gc3R5bGU9e3sgd2lkdGg6IFwiMHB4XCIgfX0gLz5cbiAgICAgICAgICA8L0RvYz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFyZXN1bWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdlbmVyYXRlUGRmRG9jdW1lbnQocmVzdW1lISwgcmVzdW1lU3R5bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBhcyBQREZcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZVByZXZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/resume/resumePreview.component.tsx\n");

/***/ })

})