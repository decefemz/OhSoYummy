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

/***/ "./components/layouts/Hero/Slider/index.js":
/*!*************************************************!*\
  !*** ./components/layouts/Hero/Slider/index.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SliderHero; }\n/* harmony export */ });\n/* harmony import */ var C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/react */ \"./node_modules/keen-slider/react.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./components/layouts/Hero/Slider/styles.js\");\n/* harmony import */ var _compounds_FancyImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../compounds/FancyImage */ \"./components/compounds/FancyImage/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"C:\\\\Projekts\\\\Programming\\\\WEBDEV\\\\OhSoYummy\\\\components\\\\layouts\\\\Hero\\\\Slider\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SliderHero() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      loaded = _useState2[0],\n      setLoaded = _useState2[1];\n\n  var _useKeenSlider = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_3__.useKeenSlider)({\n    initial: 0,\n    slides: {\n      perView: 1\n    },\n    slideChanged: function slideChanged(slider) {\n      setCurrentSlide(slider.track.details.rel);\n    },\n    created: function created() {\n      setLoaded(true);\n    }\n  }),\n      _useKeenSlider2 = (0,C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useKeenSlider, 2),\n      sliderRef = _useKeenSlider2[0],\n      instanceRef = _useKeenSlider2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"navigation-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        ref: sliderRef,\n        className: \"keen-slider\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.SlideCont, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_compounds_FancyImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.SlideCont, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_compounds_FancyImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide \",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.SlideCont, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_compounds_FancyImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this), loaded && instanceRef.current && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Arrow, {\n          left: true,\n          onClick: function onClick(e) {\n            var _instanceRef$current;\n\n            return e.stopPropagation() || ((_instanceRef$current = instanceRef.current) === null || _instanceRef$current === void 0 ? void 0 : _instanceRef$current.prev());\n          },\n          disabled: currentSlide === 0\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Arrow, {\n          onClick: function onClick(e) {\n            var _instanceRef$current2;\n\n            return e.stopPropagation() || ((_instanceRef$current2 = instanceRef.current) === null || _instanceRef$current2 === void 0 ? void 0 : _instanceRef$current2.next());\n          },\n          disabled: currentSlide === instanceRef.current.track.details.slides.length - 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this), loaded && instanceRef.current && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"dots\",\n      children: (0,C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(instanceRef.current.track.details.slides.length).keys()).map(function (idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            var _instanceRef$current3;\n\n            (_instanceRef$current3 = instanceRef.current) === null || _instanceRef$current3 === void 0 ? void 0 : _instanceRef$current3.moveToIdx(idx);\n          },\n          className: \"dot\" + (currentSlide === idx ? \" active\" : \"\")\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 29\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SliderHero, \"/1VYE9xzxvCha90S5ZFm6feWOsk=\", false, function () {\n  return [keen_slider_react__WEBPACK_IMPORTED_MODULE_3__.useKeenSlider];\n});\n\n_c = SliderHero;\n\nfunction Arrow(props) {\n  var disabeld = props.disabled ? \" arrow--disabled\" : \"\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"svg\", {\n    onClick: props.onClick,\n    className: \"arrow \".concat(props.left ? \"arrow--left\" : \"arrow--right\", \" \").concat(disabeld),\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\",\n    children: [props.left && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"path\", {\n      d: \"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 17\n    }, this), !props.left && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"path\", {\n      d: \"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = Arrow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SliderHero\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvSGVyby9TbGlkZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU00sVUFBVCxHQUFzQjtFQUFBOztFQUFBOztFQUNqQyxnQkFBd0NMLCtDQUFRLENBQUMsQ0FBRCxDQUFoRDtFQUFBLElBQU9NLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBQ0EsaUJBQTRCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7RUFBQSxJQUFPUSxNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFDQSxxQkFBaUNSLGdFQUFhLENBQUM7SUFDM0NTLE9BQU8sRUFBRSxDQURrQztJQUUzQ0MsTUFBTSxFQUFFO01BQ0pDLE9BQU8sRUFBRTtJQURMLENBRm1DO0lBSzNDQyxZQUwyQyx3QkFLOUJDLE1BTDhCLEVBS3RCO01BQ2pCUCxlQUFlLENBQUNPLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxPQUFiLENBQXFCQyxHQUF0QixDQUFmO0lBQ0gsQ0FQMEM7SUFRM0NDLE9BUjJDLHFCQVFqQztNQUNOVCxTQUFTLENBQUMsSUFBRCxDQUFUO0lBQ0g7RUFWMEMsQ0FBRCxDQUE5QztFQUFBO0VBQUEsSUFBT1UsU0FBUDtFQUFBLElBQWtCQyxXQUFsQjs7RUFlQSxvQkFDSSw4REFBQyw0Q0FBRDtJQUFBLHdCQUNJO01BQUssU0FBUyxFQUFDLG9CQUFmO01BQUEsd0JBRUk7UUFBSyxHQUFHLEVBQUVELFNBQVY7UUFBcUIsU0FBUyxFQUFDLGFBQS9CO1FBQUEsd0JBQ0k7VUFBSyxTQUFTLEVBQUMsb0JBQWY7VUFBQSx1QkFDSSw4REFBQyw4Q0FBRDtZQUFBLHVCQUNJLDhEQUFDLDZEQUFEO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFESjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREo7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURKLGVBTUk7VUFBSyxTQUFTLEVBQUMsb0JBQWY7VUFBQSx1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QUFBLFFBWFI7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFnQkg7O01BbEJRTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvSGVyby9TbGlkZXIvaW5kZXguanM/MWYyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VLZWVuU2xpZGVyIH0gZnJvbSBcImtlZW4tc2xpZGVyL3JlYWN0XCJcclxuaW1wb3J0IFwia2Vlbi1zbGlkZXIva2Vlbi1zbGlkZXIubWluLmNzc1wiXHJcbmltcG9ydCB7IFdyYXBwZXIsIFNsaWRlQ29udCB9IGZyb20gXCIuL3N0eWxlc1wiXHJcbmltcG9ydCBGYW5jeUltYWdlIGZyb20gXCIuLi8uLi8uLi9jb21wb3VuZHMvRmFuY3lJbWFnZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJIZXJvKCkge1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc2xpZGVyUmVmLCBpbnN0YW5jZVJlZl0gPSB1c2VLZWVuU2xpZGVyKHtcclxuICAgICAgICBpbml0aWFsOiAwLFxyXG4gICAgICAgIHNsaWRlczoge1xyXG4gICAgICAgICAgICBwZXJWaWV3OiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbGlkZUNoYW5nZWQoc2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRTbGlkZShzbGlkZXIudHJhY2suZGV0YWlscy5yZWwpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSlcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3NsaWRlclJlZn0gY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVDb250PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhbmN5SW1hZ2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZUNvbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlQ29udD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYW5jeUltYWdlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVDb250PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVDb250PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhbmN5SW1hZ2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZUNvbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7bG9hZGVkICYmIGluc3RhbmNlUmVmLmN1cnJlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKSB8fCBpbnN0YW5jZVJlZi5jdXJyZW50Py5wcmV2KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U2xpZGUgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCkgfHwgaW5zdGFuY2VSZWYuY3VycmVudD8ubmV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlUmVmLmN1cnJlbnQudHJhY2suZGV0YWlscy5zbGlkZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkZWQgJiYgaW5zdGFuY2VSZWYuY3VycmVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5BcnJheShpbnN0YW5jZVJlZi5jdXJyZW50LnRyYWNrLmRldGFpbHMuc2xpZGVzLmxlbmd0aCkua2V5cygpLFxyXG4gICAgICAgICAgICAgICAgICAgIF0ubWFwKChpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlUmVmLmN1cnJlbnQ/Lm1vdmVUb0lkeChpZHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZG90XCIgKyAoY3VycmVudFNsaWRlID09PSBpZHggPyBcIiBhY3RpdmVcIiA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFycm93KHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNhYmVsZCA9IHByb3BzLmRpc2FibGVkID8gXCIgYXJyb3ctLWRpc2FibGVkXCIgOiBcIlwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXJyb3cgJHtwcm9wcy5sZWZ0ID8gXCJhcnJvdy0tbGVmdFwiIDogXCJhcnJvdy0tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgfSAke2Rpc2FiZWxkfWB9XHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5sZWZ0ICYmIChcclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuNjcgMGwyLjgzIDIuODI5LTkuMzM5IDkuMTc1IDkuMzM5IDkuMTY3LTIuODMgMi44MjktMTIuMTctMTEuOTk2elwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshcHJvcHMubGVmdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUgM2wzLjA1Ny0zIDExLjk0MyAxMi0xMS45NDMgMTItMy4wNTctMyA5LTl6XCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUtlZW5TbGlkZXIiLCJXcmFwcGVyIiwiU2xpZGVDb250IiwiRmFuY3lJbWFnZSIsIlNsaWRlckhlcm8iLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJpbml0aWFsIiwic2xpZGVzIiwicGVyVmlldyIsInNsaWRlQ2hhbmdlZCIsInNsaWRlciIsInRyYWNrIiwiZGV0YWlscyIsInJlbCIsImNyZWF0ZWQiLCJzbGlkZXJSZWYiLCJpbnN0YW5jZVJlZiIsImN1cnJlbnQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldiIsIm5leHQiLCJsZW5ndGgiLCJBcnJheSIsImtleXMiLCJtYXAiLCJpZHgiLCJtb3ZlVG9JZHgiLCJBcnJvdyIsInByb3BzIiwiZGlzYWJlbGQiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/Hero/Slider/index.js\n"));

/***/ })

});