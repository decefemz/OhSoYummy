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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SliderHero; }\n/* harmony export */ });\n/* harmony import */ var C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/react */ \"./node_modules/keen-slider/react.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style */ \"./components/layouts/Hero/style.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"C:\\\\Projekts\\\\Programming\\\\WEBDEV\\\\OhSoYummy\\\\components\\\\layouts\\\\Hero\\\\Slider\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SliderHero() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      loaded = _useState2[0],\n      setLoaded = _useState2[1]; // const [sliderRef, instanceRef] = useKeenSlider({\n  //     initial: 0,\n  //     slideChanged(slider) {\n  //         setCurrentSlide(slider.track.details.rel)\n  //     },\n  //     created() {\n  //         setLoaded(true)\n  //     },\n  // })\n\n\n  var _useKeenSlider = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_3__.useKeenSlider)({\n    loop: true\n  }, [function (slider) {\n    var timeout;\n    var mouseOver = false;\n\n    function clearNextTimeout() {\n      clearTimeout(timeout);\n    }\n\n    function nextTimeout() {\n      clearTimeout(timeout);\n      if (mouseOver) return;\n      timeout = setTimeout(function () {\n        slider.next();\n      }, 6000);\n    }\n\n    slider.on(\"created\", function () {\n      slider.container.addEventListener(\"mouseover\", function () {\n        mouseOver = true;\n        clearNextTimeout();\n      });\n      slider.container.addEventListener(\"mouseout\", function () {\n        mouseOver = false;\n        nextTimeout();\n      });\n      nextTimeout();\n    });\n    slider.on(\"dragStarted\", clearNextTimeout);\n    slider.on(\"animationEnded\", nextTimeout);\n    slider.on(\"updated\", nextTimeout);\n  }]),\n      _useKeenSlider2 = (0,C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useKeenSlider, 1),\n      sliderRef = _useKeenSlider2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"navigation-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        ref: sliderRef,\n        className: \"keen-slider\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide number-slide1\",\n          children: \"1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide number-slide2\",\n          children: \"2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide number-slide3\",\n          children: \"3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide number-slide4\",\n          children: \"4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide number-slide5\",\n          children: \"5\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"keen-slider__slide number-slide6\",\n          children: \"6\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this), loaded && instanceRef.current && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Arrow, {\n          left: true,\n          onClick: function onClick(e) {\n            var _instanceRef$current;\n\n            return e.stopPropagation() || ((_instanceRef$current = instanceRef.current) === null || _instanceRef$current === void 0 ? void 0 : _instanceRef$current.prev());\n          },\n          disabled: currentSlide === 0\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Arrow, {\n          onClick: function onClick(e) {\n            var _instanceRef$current2;\n\n            return e.stopPropagation() || ((_instanceRef$current2 = instanceRef.current) === null || _instanceRef$current2 === void 0 ? void 0 : _instanceRef$current2.next());\n          },\n          disabled: currentSlide === instanceRef.current.track.details.slides.length - 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, this), loaded && instanceRef.current && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"dots\",\n      children: (0,C_Projekts_Programming_WEBDEV_OhSoYummy_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Array(instanceRef.current.track.details.slides.length).keys()).map(function (idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            var _instanceRef$current3;\n\n            (_instanceRef$current3 = instanceRef.current) === null || _instanceRef$current3 === void 0 ? void 0 : _instanceRef$current3.moveToIdx(idx);\n          },\n          className: \"dot\" + (currentSlide === idx ? \" active\" : \"\")\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 29\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SliderHero, \"V+YG5KaX63tZIZ3ETR51yMPjtXk=\", false, function () {\n  return [keen_slider_react__WEBPACK_IMPORTED_MODULE_3__.useKeenSlider];\n});\n\n_c = SliderHero;\n\nfunction Arrow(props) {\n  var disabeld = props.disabled ? \" arrow--disabled\" : \"\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"svg\", {\n    onClick: props.onClick,\n    className: \"arrow \".concat(props.left ? \"arrow--left\" : \"arrow--right\", \" \").concat(disabeld),\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\",\n    children: [props.left && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 17\n    }, this), !props.left && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 112,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = Arrow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SliderHero\");\n$RefreshReg$(_c2, \"Arrow\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvSGVyby9TbGlkZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0ksVUFBVCxHQUFzQjtFQUFBOztFQUFBOztFQUNqQyxnQkFBd0NILCtDQUFRLENBQUMsQ0FBRCxDQUFoRDtFQUFBLElBQU9JLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBQ0EsaUJBQTRCTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7RUFBQSxJQUFPTSxNQUFQO0VBQUEsSUFBZUMsU0FBZixpQkFGaUMsQ0FHakM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7RUFFQSxxQkFBb0JOLGdFQUFhLENBQzdCO0lBQ0lPLElBQUksRUFBRTtFQURWLENBRDZCLEVBSTdCLENBQ0ksVUFBQ0MsTUFBRCxFQUFZO0lBQ1IsSUFBSUMsT0FBSjtJQUNBLElBQUlDLFNBQVMsR0FBRyxLQUFoQjs7SUFDQSxTQUFTQyxnQkFBVCxHQUE0QjtNQUN4QkMsWUFBWSxDQUFDSCxPQUFELENBQVo7SUFDSDs7SUFDRCxTQUFTSSxXQUFULEdBQXVCO01BQ25CRCxZQUFZLENBQUNILE9BQUQsQ0FBWjtNQUNBLElBQUlDLFNBQUosRUFBZTtNQUNmRCxPQUFPLEdBQUdLLFVBQVUsQ0FBQyxZQUFNO1FBQ3ZCTixNQUFNLENBQUNPLElBQVA7TUFDSCxDQUZtQixFQUVqQixJQUZpQixDQUFwQjtJQUdIOztJQUNEUCxNQUFNLENBQUNRLEVBQVAsQ0FBVSxTQUFWLEVBQXFCLFlBQU07TUFDdkJSLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQkMsZ0JBQWpCLENBQWtDLFdBQWxDLEVBQStDLFlBQU07UUFDakRSLFNBQVMsR0FBRyxJQUFaO1FBQ0FDLGdCQUFnQjtNQUNuQixDQUhEO01BSUFILE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQkMsZ0JBQWpCLENBQWtDLFVBQWxDLEVBQThDLFlBQU07UUFD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QTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFvREg7O0dBckd1QjlCO1VBYUFGOzs7S0FiQUU7O0FBdUd4QixTQUFTZ0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0VBQ2xCLElBQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLEdBQWlCLGtCQUFqQixHQUFzQyxFQUF2RDtFQUNBLG9CQUNJO0lBQ0ksT0FBTyxFQUFFRixLQUFLLENBQUNHLE9BRG5CO0lBRUksU0FBUyxrQkFBV0gsS0FBSyxDQUFDSSxJQUFOLEdBQWEsYUFBYixHQUE2QixjQUF4QyxjQUNESCxRQURDLENBRmI7SUFJSSxLQUFLLEVBQUMsNEJBSlY7SUFLSSxPQUFPLEVBQUMsV0FMWjtJQUFBLFdBT0tELEtBQUssQ0FBQ0ksSUFBTixpQkFDRztNQUFNLENBQUMsRUFBQztJQUFSO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFSUixFQVVLLENBQUNKLEtBQUssQ0FBQ0ksSUFBUCxpQkFDRztNQUFNLENBQUMsRUFBQztJQUFSO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFYUjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQWdCSDs7TUFsQlFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9IZXJvL1NsaWRlci9pbmRleC5qcz8xZjJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZUtlZW5TbGlkZXIgfSBmcm9tIFwia2Vlbi1zbGlkZXIvcmVhY3RcIlxyXG5pbXBvcnQgXCJrZWVuLXNsaWRlci9rZWVuLXNsaWRlci5taW4uY3NzXCJcclxuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9zdHlsZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJIZXJvKCkge1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyBjb25zdCBbc2xpZGVyUmVmLCBpbnN0YW5jZVJlZl0gPSB1c2VLZWVuU2xpZGVyKHtcclxuICAgIC8vICAgICBpbml0aWFsOiAwLFxyXG4gICAgLy8gICAgIHNsaWRlQ2hhbmdlZChzbGlkZXIpIHtcclxuICAgIC8vICAgICAgICAgc2V0Q3VycmVudFNsaWRlKHNsaWRlci50cmFjay5kZXRhaWxzLnJlbClcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAvLyAgICAgICAgIHNldExvYWRlZCh0cnVlKVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIGNvbnN0IFtzbGlkZXJSZWZdID0gdXNlS2VlblNsaWRlcihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIChzbGlkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lb3V0XHJcbiAgICAgICAgICAgICAgICBsZXQgbW91c2VPdmVyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNsZWFyTmV4dFRpbWVvdXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBuZXh0VGltZW91dCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW91c2VPdmVyKSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlci5uZXh0KClcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MDAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLm9uKFwiY3JlYXRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VPdmVyID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhck5leHRUaW1lb3V0KClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VPdmVyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWVvdXQoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNsaWRlci5vbihcImRyYWdTdGFydGVkXCIsIGNsZWFyTmV4dFRpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIub24oXCJhbmltYXRpb25FbmRlZFwiLCBuZXh0VGltZW91dClcclxuICAgICAgICAgICAgICAgIHNsaWRlci5vbihcInVwZGF0ZWRcIiwgbmV4dFRpbWVvdXQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c2xpZGVyUmVmfSBjbGFzc05hbWU9XCJrZWVuLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTFcIj4xPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgbnVtYmVyLXNsaWRlMlwiPjI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZSBudW1iZXItc2xpZGUzXCI+MzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTRcIj40PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWVuLXNsaWRlcl9fc2xpZGUgbnVtYmVyLXNsaWRlNVwiPjU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZSBudW1iZXItc2xpZGU2XCI+NjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGVkICYmIGluc3RhbmNlUmVmLmN1cnJlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKSB8fCBpbnN0YW5jZVJlZi5jdXJyZW50Py5wcmV2KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50U2xpZGUgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCkgfHwgaW5zdGFuY2VSZWYuY3VycmVudD8ubmV4dCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlUmVmLmN1cnJlbnQudHJhY2suZGV0YWlscy5zbGlkZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsb2FkZWQgJiYgaW5zdGFuY2VSZWYuY3VycmVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5BcnJheShpbnN0YW5jZVJlZi5jdXJyZW50LnRyYWNrLmRldGFpbHMuc2xpZGVzLmxlbmd0aCkua2V5cygpLFxyXG4gICAgICAgICAgICAgICAgICAgIF0ubWFwKChpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlUmVmLmN1cnJlbnQ/Lm1vdmVUb0lkeChpZHgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZG90XCIgKyAoY3VycmVudFNsaWRlID09PSBpZHggPyBcIiBhY3RpdmVcIiA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFycm93KHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNhYmVsZCA9IHByb3BzLmRpc2FibGVkID8gXCIgYXJyb3ctLWRpc2FibGVkXCIgOiBcIlwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXJyb3cgJHtwcm9wcy5sZWZ0ID8gXCJhcnJvdy0tbGVmdFwiIDogXCJhcnJvdy0tcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgfSAke2Rpc2FiZWxkfWB9XHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5sZWZ0ICYmIChcclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYuNjcgMGwyLjgzIDIuODI5LTkuMzM5IDkuMTc1IDkuMzM5IDkuMTY3LTIuODMgMi44MjktMTIuMTctMTEuOTk2elwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshcHJvcHMubGVmdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUgM2wzLjA1Ny0zIDExLjk0MyAxMi0xMS45NDMgMTItMy4wNTctMyA5LTl6XCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUtlZW5TbGlkZXIiLCJXcmFwcGVyIiwiU2xpZGVySGVybyIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImxvYWRlZCIsInNldExvYWRlZCIsImxvb3AiLCJzbGlkZXIiLCJ0aW1lb3V0IiwibW91c2VPdmVyIiwiY2xlYXJOZXh0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm5leHRUaW1lb3V0Iiwic2V0VGltZW91dCIsIm5leHQiLCJvbiIsImNvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGlkZXJSZWYiLCJpbnN0YW5jZVJlZiIsImN1cnJlbnQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldiIsInRyYWNrIiwiZGV0YWlscyIsInNsaWRlcyIsImxlbmd0aCIsIkFycmF5Iiwia2V5cyIsIm1hcCIsImlkeCIsIm1vdmVUb0lkeCIsIkFycm93IiwicHJvcHMiLCJkaXNhYmVsZCIsImRpc2FibGVkIiwib25DbGljayIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/Hero/Slider/index.js\n"));

/***/ })

});