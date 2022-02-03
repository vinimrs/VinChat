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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _public_flaticon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/flaticon.png */ \"./public/flaticon.png\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _UI_LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/LoadingPage */ \"./src/UI/LoadingPage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n        global: true,\n        jstyleSheet: true,\n        children: \"\\n\\t\\t\\t* {\\n\\t\\t\\t\\tmargin: 0;\\n\\t\\t\\t\\tpadding: 0;\\n\\t\\t\\t\\tbox-sizing: border-box;\\n\\t\\t\\t\\tlist-style: none;\\n\\t\\t\\t}\\n\\t\\t\\tbody {\\n\\t\\t\\t\\tfont-family: \\\"Open Sans\\\", sans-serif;\\n\\t\\t\\t}\\n\\t\\t\\t/* App fit Height */\\n\\t\\t\\thtml,\\n\\t\\t\\tbody,\\n\\t\\t\\t#__next {\\n\\t\\t\\t\\tmin-height: 100vh;\\n\\t\\t\\t\\tdisplay: flex;\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t#__next {\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t#__next > * {\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t/* ./App fit Height */\\n\\t\\t\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, this));\n}\n_c = GlobalStyle;\nfunction MyApp(param1) {\n    var Component = param1.Component, pageProps = param1.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(), loading = ref[0], setLoading = ref[1];\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var handleRouteChangeStart = function(url, param) {\n            var shallow = param.shallow;\n            setLoading(true);\n        };\n        var handleRouteChangeComplete = function(url, param) {\n            var shallow = param.shallow;\n            console.log(\"App is changing to \".concat(url, \" \").concat(shallow ? 'with' : 'without', \" shallow routing\"));\n            setLoading(false);\n        };\n        route.events.on('routeChangeStart', setLoading(true));\n        // route.events.off('routeChangeStart', handleRouteChangeComplete);\n        route.events.on('routeChangeComplete', setLoading(true));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"VinChat - Plataforma de Conversas\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: _public_flaticon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                color: \"linear-gradient(90deg, \".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.secondary[700], \" 30%, \").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600], \" 100%)\"),\n                height: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 75,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_LoadingPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 75,\n                columnNumber: 59\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(MyApp, \"u9/WRxpj+9AdqoeOa77NEBBYBsg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c1 = MyApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2xCO0FBQ2E7QUFDTztBQUNUO0FBQ0k7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRWxDUSxXQUFXLEdBQUcsQ0FBQztJQUN2QixNQUFNLDZFQUNKQyxDQUFLO1FBQUNDLE1BQU07UUFBQ0MsV0FBVztrQkFBRyxDQXlCNUI7Ozs7OztBQUVGLENBQUM7S0E3QlFILFdBQVc7QUErQkwsUUFBUSxDQUFDSSxLQUFLLENBQUMsTUFBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsTUFBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixNQUF3QixDQUFYQSxTQUFTOztJQUNoRCxHQUFLLENBQXlCUixHQUFVLEdBQVZBLCtDQUFRLElBQS9CUyxPQUFPLEdBQWdCVCxHQUFVLEtBQXhCVSxVQUFVLEdBQUlWLEdBQVU7SUFDeEMsR0FBSyxDQUFDVyxLQUFLLEdBQUdiLHNEQUFTO0lBRXZCQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2IsR0FBSyxDQUFDYSxzQkFBc0IsR0FBRyxRQUFRLENBQVBDLEdBQUcsU0FBZ0IsQ0FBQztnQkFBZEMsT0FBTyxTQUFQQSxPQUFPO1lBQ3pDSixVQUFVLENBQUMsSUFBSTtRQUNuQixDQUFDO1FBRUQsR0FBSyxDQUFDSyx5QkFBeUIsR0FBRyxRQUFRLENBQVBGLEdBQUcsU0FBZ0IsQ0FBQztnQkFBZEMsT0FBTyxTQUFQQSxPQUFPO1lBQzVDRSxPQUFPLENBQUNDLEdBQUcsQ0FDTixDQUFtQixxQkFDbEJILE1BQTRCLENBRFJELEdBQUcsRUFBQyxDQUFDLElBRTFCLE1BQWdCLENBRGZDLE9BQU8sR0FBRyxDQUFNLFFBQUcsQ0FBUyxVQUM3QixDQUFnQjtZQUVyQkosVUFBVSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztRQUVEQyxLQUFLLENBQUNPLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQWtCLG1CQUFFVCxVQUFVLENBQUMsSUFBSTtRQUNuRCxFQUFtRTtRQUNuRUMsS0FBSyxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRVQsVUFBVSxDQUFDLElBQUk7SUFDMUQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU07O3dGQUVHZixrREFBSTs7Z0dBQ0F5QixDQUFLO2tDQUFDLENBQWlDOzs7Ozs7Z0dBQ3ZDQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQXVDOzs7Ozs7Z0dBQ3BFQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFFN0IsZ0VBQVk7Ozs7Ozs7Ozs7Ozt3RkFFdENLLFdBQVc7Ozs7O3dGQUNYUiwyREFBYTtnQkFDVmtDLEtBQUssRUFBRyxDQUF1Qix5QkFBZ0RoQyxNQUFtQyxDQUFqRkEscUVBQXFDLEVBQUMsQ0FBTSxTQUFzQyxNQUFNLENBQTFDQSxtRUFBbUMsRUFBQyxDQUFNO2dCQUN6SHFDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7YUFFWHhCLE9BQU8sK0VBQUtGLFNBQVMsb0JBQUtDLFNBQVM7Ozs7bUdBQVVQLHVEQUFXOzs7Ozs7O0FBSXRFLENBQUM7R0F2Q3VCSyxLQUFLOztRQUVYUixrREFBUzs7O01BRkhRLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dE5Qcm9ncmVzcyBmcm9tIFwibmV4dGpzLXByb2dyZXNzYmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbic7XHJcbmltcG9ydCBmbGF0aWNvbiBmcm9tIFwiLi4vLi4vcHVibGljL2ZsYXRpY29uLnBuZ1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tIFwiLi4vVUkvTG9hZGluZ1BhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c3R5bGUgZ2xvYmFsIGpzdHlsZVNoZWV0PntgXHJcblx0XHRcdCoge1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvKiBBcHAgZml0IEhlaWdodCAqL1xyXG5cdFx0XHRodG1sLFxyXG5cdFx0XHRib2R5LFxyXG5cdFx0XHQjX19uZXh0IHtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0I19fbmV4dCB7XHJcblx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQjX19uZXh0ID4gKiB7XHJcblx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvKiAuL0FwcCBmaXQgSGVpZ2h0ICovXHJcblx0XHRgfTwvc3R5bGU+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCwge3NoYWxsb3d9KSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlID0gKHVybCwge3NoYWxsb3d9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYEFwcCBpcyBjaGFuZ2luZyB0byAke3VybH0gJHtcclxuICAgICAgICAgICAgICAgICAgc2hhbGxvdyA/ICd3aXRoJyA6ICd3aXRob3V0J1xyXG4gICAgICAgICAgICAgICAgfSBzaGFsbG93IHJvdXRpbmdgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZS5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBzZXRMb2FkaW5nKHRydWUpKTtcclxuICAgICAgICAvLyByb3V0ZS5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2VDb21wbGV0ZSk7XHJcbiAgICAgICAgcm91dGUuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlZpbkNoYXQgLSBQbGF0YWZvcm1hIGRlIENvbnZlcnNhczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17ZmxhdGljb24uc3JjfSAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgICAgICA8TmV4dE5Qcm9ncmVzcyBcclxuICAgICAgICAgICAgICAgIGNvbG9yPXtgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5WzcwMF19IDMwJSwgJHthcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXX0gMTAwJSlgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgPyAoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPikgOiAoPExvYWRpbmdQYWdlIC8+KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIk5leHROUHJvZ3Jlc3MiLCJIZWFkIiwiYXBwQ29uZmlnIiwiZmxhdGljb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdQYWdlIiwiR2xvYmFsU3R5bGUiLCJzdHlsZSIsImdsb2JhbCIsImpzdHlsZVNoZWV0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlIiwiaGFuZGxlUm91dGVDaGFuZ2VTdGFydCIsInVybCIsInNoYWxsb3ciLCJoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIm9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNyYyIsImNvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJwcmltYXJ5IiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

});