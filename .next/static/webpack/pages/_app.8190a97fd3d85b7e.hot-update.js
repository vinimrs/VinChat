"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _public_flaticon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/flaticon.png */ \"./public/flaticon.png\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _UI_LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/LoadingPage */ \"./src/UI/LoadingPage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n        global: true,\n        jstyleSheet: true,\n        children: \"\\n\\t\\t\\t* {\\n\\t\\t\\t\\tmargin: 0;\\n\\t\\t\\t\\tpadding: 0;\\n\\t\\t\\t\\tbox-sizing: border-box;\\n\\t\\t\\t\\tlist-style: none;\\n\\t\\t\\t}\\n\\t\\t\\tbody {\\n\\t\\t\\t\\tfont-family: \\\"Open Sans\\\", sans-serif;\\n\\t\\t\\t}\\n\\t\\t\\t/* App fit Height */\\n\\t\\t\\thtml,\\n\\t\\t\\tbody,\\n\\t\\t\\t#__next {\\n\\t\\t\\t\\tmin-height: 100vh;\\n\\t\\t\\t\\tdisplay: flex;\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t#__next {\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t#__next > * {\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t/* ./App fit Height */\\n\\t\\t\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, this));\n}\n_c = GlobalStyle;\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(), loading = ref[0], setLoading = ref[1];\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        route.events.on('routeChangeStart', function() {\n            return setLoading(true);\n        });\n        // route.events.off('routeChangeStart', handleRouteChangeComplete);\n        route.events.on('routeChangeComplete', function() {\n            return setLoading(false);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"VinChat - Plataforma de Conversas\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: _public_flaticon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                color: \"linear-gradient(90deg, \".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.secondary[700], \" 30%, \").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600], \" 100%)\"),\n                height: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_LoadingPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 59\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(MyApp, \"u9/WRxpj+9AdqoeOa77NEBBYBsg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c1 = MyApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2xCO0FBQ2E7QUFDTztBQUNUO0FBQ0k7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRWxDUSxXQUFXLEdBQUcsQ0FBQztJQUN2QixNQUFNLDZFQUNKQyxDQUFLO1FBQUNDLE1BQU07UUFBQ0MsV0FBVztrQkFBRyxDQXlCNUI7Ozs7OztBQUVGLENBQUM7S0E3QlFILFdBQVc7QUErQkwsUUFBUSxDQUFDSSxLQUFLLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNoRCxHQUFLLENBQXlCUixHQUFVLEdBQVZBLCtDQUFRLElBQS9CUyxPQUFPLEdBQWdCVCxHQUFVLEtBQXhCVSxVQUFVLEdBQUlWLEdBQVU7SUFDeEMsR0FBSyxDQUFDVyxLQUFLLEdBQUdiLHNEQUFTO0lBRXZCQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JZLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBa0IsbUJBQUUsUUFBUTtZQUFGSCxNQUFNLENBQU5BLFVBQVUsQ0FBQyxJQUFJOztRQUN6RCxFQUFtRTtRQUNuRUMsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRSxRQUFRO1lBQUZILE1BQU0sQ0FBTkEsVUFBVSxDQUFDLEtBQUs7O0lBQ2pFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNOzt3RkFFR2Ysa0RBQUk7O2dHQUNBbUIsQ0FBSztrQ0FBQyxDQUFpQzs7Ozs7O2dHQUN2Q0MsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUF1Qzs7Ozs7O2dHQUNwRUMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBRXZCLGdFQUFZOzs7Ozs7Ozs7Ozs7d0ZBRXRDSyxXQUFXOzs7Ozt3RkFDWFIsMkRBQWE7Z0JBQ1Y0QixLQUFLLEVBQUcsQ0FBdUIseUJBQWdEMUIsTUFBbUMsQ0FBakZBLHFFQUFxQyxFQUFDLENBQU0sU0FBc0MsTUFBTSxDQUExQ0EsbUVBQW1DLEVBQUMsQ0FBTTtnQkFDekgrQixNQUFNLEVBQUUsQ0FBQzs7Ozs7O2FBRVhsQixPQUFPLCtFQUFLRixTQUFTLG9CQUFLQyxTQUFTOzs7O21HQUFVUCx1REFBVzs7Ozs7OztBQUl0RSxDQUFDO0dBMUJ1QkssS0FBSzs7UUFFWFIsa0RBQVM7OztNQUZIUSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHROUHJvZ3Jlc3MgZnJvbSBcIm5leHRqcy1wcm9ncmVzc2JhclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nO1xyXG5pbXBvcnQgZmxhdGljb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9mbGF0aWNvbi5wbmdcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSBcIi4uL1VJL0xvYWRpbmdQYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBHbG9iYWxTdHlsZSgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PHN0eWxlIGdsb2JhbCBqc3R5bGVTaGVldD57YFxyXG5cdFx0XHQqIHtcclxuXHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ym9keSB7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcblx0XHRcdH1cclxuXHRcdFx0LyogQXBwIGZpdCBIZWlnaHQgKi9cclxuXHRcdFx0aHRtbCxcclxuXHRcdFx0Ym9keSxcclxuXHRcdFx0I19fbmV4dCB7XHJcblx0XHRcdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdCNfX25leHQge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0I19fbmV4dCA+ICoge1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0LyogLi9BcHAgZml0IEhlaWdodCAqL1xyXG5cdFx0YH08L3N0eWxlPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGUuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgLy8gcm91dGUuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlQ29tcGxldGUpO1xyXG4gICAgICAgIHJvdXRlLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+VmluQ2hhdCAtIFBsYXRhZm9ybWEgZGUgQ29udmVyc2FzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtmbGF0aWNvbi5zcmN9IC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxOZXh0TlByb2dyZXNzIFxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2BsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnlbNzAwXX0gMzAlLCAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdfSAxMDAlKWB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHshbG9hZGluZyA/ICg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KSA6ICg8TG9hZGluZ1BhZ2UgLz4pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiTmV4dE5Qcm9ncmVzcyIsIkhlYWQiLCJhcHBDb25maWciLCJmbGF0aWNvbiIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9hZGluZ1BhZ2UiLCJHbG9iYWxTdHlsZSIsInN0eWxlIiwiZ2xvYmFsIiwianN0eWxlU2hlZXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGUiLCJldmVudHMiLCJvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJzcmMiLCJjb2xvciIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwicHJpbWFyeSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

});