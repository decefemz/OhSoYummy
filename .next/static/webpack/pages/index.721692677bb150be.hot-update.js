"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/Navbar/Menubar/index.jsx":
/*!*****************************************************!*\
  !*** ./components/layouts/Navbar/Menubar/index.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuBar; }\n/* harmony export */ });\n/* harmony import */ var react_sliding_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-sliding-pane */ \"./node_modules/react-sliding-pane/dist/react-sliding-pane.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_sliding_pane_dist_react_sliding_pane_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sliding-pane/dist/react-sliding-pane.css */ \"./node_modules/react-sliding-pane/dist/react-sliding-pane.css\");\n/* harmony import */ var react_sliding_pane_dist_react_sliding_pane_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sliding_pane_dist_react_sliding_pane_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Projekts\\\\Programming\\\\WEBDEV\\\\OhSoYummy\\\\components\\\\layouts\\\\Navbar\\\\Menubar\\\\index.jsx\";\n\n\n\n\nfunction MenuBar(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_sliding_pane__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      closeIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        children: \"Some div containing custom close icon.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 28\n      }, this),\n      isOpen: props.state,\n      title: \"Hey, it is optional pane title.  I can be React component too.\",\n      from: \"bottom\",\n      width: \"100%\",\n      onRequestClose: function onRequestClose() {\n        return props.close();\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        children: \"And I am pane content on left.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n_c = MenuBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuBar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvTmF2YmFyL01lbnViYXIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTRSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtFQUNuQyxvQkFDSTtJQUFBLHVCQUNJLDhEQUFDLDBEQUFEO01BQ0ksU0FBUyxlQUFFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRGY7TUFFSSxNQUFNLEVBQUVBLEtBQUssQ0FBQ0MsS0FGbEI7TUFHSSxLQUFLLEVBQUMsZ0VBSFY7TUFJSSxJQUFJLEVBQUMsUUFKVDtNQUtJLEtBQUssRUFBQyxNQUxWO01BTUksY0FBYyxFQUFFO1FBQUEsT0FBTUQsS0FBSyxDQUFDRSxLQUFOLEVBQU47TUFBQSxDQU5wQjtNQUFBLHVCQVFJO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBUko7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURKO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQWNIO0tBZnVCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvTmF2YmFyL01lbnViYXIvaW5kZXguanN4P2U4MGIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBTbGlkaW5nUGFuZSBmcm9tIFwicmVhY3Qtc2xpZGluZy1wYW5lXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwicmVhY3Qtc2xpZGluZy1wYW5lL2Rpc3QvcmVhY3Qtc2xpZGluZy1wYW5lLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUJhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U2xpZGluZ1BhbmVcclxuICAgICAgICAgICAgICAgIGNsb3NlSWNvbj17PGRpdj5Tb21lIGRpdiBjb250YWluaW5nIGN1c3RvbSBjbG9zZSBpY29uLjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIGlzT3Blbj17cHJvcHMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkhleSwgaXQgaXMgb3B0aW9uYWwgcGFuZSB0aXRsZS4gIEkgY2FuIGJlIFJlYWN0IGNvbXBvbmVudCB0b28uXCJcclxuICAgICAgICAgICAgICAgIGZyb209XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXsoKSA9PiBwcm9wcy5jbG9zZSgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkFuZCBJIGFtIHBhbmUgY29udGVudCBvbiBsZWZ0LjwvZGl2PlxyXG4gICAgICAgICAgICA8L1NsaWRpbmdQYW5lPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTbGlkaW5nUGFuZSIsIlJlYWN0IiwiTWVudUJhciIsInByb3BzIiwic3RhdGUiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/Navbar/Menubar/index.jsx\n"));

/***/ })

});