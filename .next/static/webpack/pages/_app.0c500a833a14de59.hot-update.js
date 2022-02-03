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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _public_flaticon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/flaticon.png */ \"./public/flaticon.png\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _UI_LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/LoadingPage */ \"./src/UI/LoadingPage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n        global: true,\n        jstyleSheet: true,\n        children: \"\\n\\t\\t\\t* {\\n\\t\\t\\t\\tmargin: 0;\\n\\t\\t\\t\\tpadding: 0;\\n\\t\\t\\t\\tbox-sizing: border-box;\\n\\t\\t\\t\\tlist-style: none;\\n\\t\\t\\t}\\n\\t\\t\\tbody {\\n\\t\\t\\t\\tfont-family: \\\"Open Sans\\\", sans-serif;\\n\\t\\t\\t}\\n\\t\\t\\t/* App fit Height */\\n\\t\\t\\thtml,\\n\\t\\t\\tbody,\\n\\t\\t\\t#__next {\\n\\t\\t\\t\\tmin-height: 100vh;\\n\\t\\t\\t\\tdisplay: flex;\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t#__next {\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t#__next > * {\\n\\t\\t\\t\\tflex: 1;\\n\\t\\t\\t}\\n\\t\\t\\t/* ./App fit Height */\\n\\t\\t\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, this));\n}\n_c = GlobalStyle;\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(), loading = ref[0], setLoading = ref[1];\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        route.events.on('routeChangeStart', function(url) {\n            return setLoading(true);\n        });\n        // route.events.off('routeChangeStart', handleRouteChangeComplete);\n        route.events.on('routeChangeComplete', function(url) {\n            return setLoading(false);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"VinChat - Plataforma de Conversas\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: _public_flaticon_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_1___default()), {\n                color: \"linear-gradient(90deg, \".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.secondary[700], \" 30%, \").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600], \" 100%)\"),\n                height: 5\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_LoadingPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 59\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(MyApp, \"u9/WRxpj+9AdqoeOa77NEBBYBsg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c1 = MyApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2xCO0FBQ2E7QUFDTztBQUNUO0FBQ0k7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRWxDUSxXQUFXLEdBQUcsQ0FBQztJQUN2QixNQUFNLDZFQUNKQyxDQUFLO1FBQUNDLE1BQU07UUFBQ0MsV0FBVztrQkFBRyxDQXlCNUI7Ozs7OztBQUVGLENBQUM7S0E3QlFILFdBQVc7QUErQkwsUUFBUSxDQUFDSSxLQUFLLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNoRCxHQUFLLENBQXlCUixHQUFVLEdBQVZBLCtDQUFRLElBQS9CUyxPQUFPLEdBQWdCVCxHQUFVLEtBQXhCVSxVQUFVLEdBQUlWLEdBQVU7SUFDeEMsR0FBSyxDQUFDVyxLQUFLLEdBQUdiLHNEQUFTO0lBRXZCQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JZLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBa0IsbUJBQUUsUUFBUSxDQUFQQyxHQUFHO1lBQUtKLE1BQU0sQ0FBTkEsVUFBVSxDQUFDLElBQUk7O1FBQzVELEVBQW1FO1FBQ25FQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQXFCLHNCQUFFLFFBQVEsQ0FBUEMsR0FBRztZQUFLSixNQUFNLENBQU5BLFVBQVUsQ0FBQyxLQUFLOztJQUNwRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTTs7d0ZBRUdmLGtEQUFJOztnR0FDQW9CLENBQUs7a0NBQUMsQ0FBaUM7Ozs7OztnR0FDdkNDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBdUM7Ozs7OztnR0FDcEVDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUV4QixnRUFBWTs7Ozs7Ozs7Ozs7O3dGQUV0Q0ssV0FBVzs7Ozs7d0ZBQ1hSLDJEQUFhO2dCQUNWNkIsS0FBSyxFQUFHLENBQXVCLHlCQUFnRDNCLE1BQW1DLENBQWpGQSxxRUFBcUMsRUFBQyxDQUFNLFNBQXNDLE1BQU0sQ0FBMUNBLG1FQUFtQyxFQUFDLENBQU07Z0JBQ3pIZ0MsTUFBTSxFQUFFLENBQUM7Ozs7OzthQUVYbkIsT0FBTywrRUFBS0YsU0FBUyxvQkFBS0MsU0FBUzs7OzttR0FBVVAsdURBQVc7Ozs7Ozs7QUFJdEUsQ0FBQztHQTFCdUJLLEtBQUs7O1FBRVhSLGtEQUFTOzs7TUFGSFEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qc29uJztcclxuaW1wb3J0IGZsYXRpY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvZmxhdGljb24ucG5nXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gXCIuLi9VSS9Mb2FkaW5nUGFnZVwiO1xyXG5cclxuZnVuY3Rpb24gR2xvYmFsU3R5bGUoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxzdHlsZSBnbG9iYWwganN0eWxlU2hlZXQ+e2BcclxuXHRcdFx0KiB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8qIEFwcCBmaXQgSGVpZ2h0ICovXHJcblx0XHRcdGh0bWwsXHJcblx0XHRcdGJvZHksXHJcblx0XHRcdCNfX25leHQge1xyXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0fVxyXG5cdFx0XHQjX19uZXh0IHtcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdCNfX25leHQgPiAqIHtcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8qIC4vQXBwIGZpdCBIZWlnaHQgKi9cclxuXHRcdGB9PC9zdHlsZT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICh1cmwpID0+IHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIC8vIHJvdXRlLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZUNvbXBsZXRlKTtcclxuICAgICAgICByb3V0ZS5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAodXJsKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlZpbkNoYXQgLSBQbGF0YWZvcm1hIGRlIENvbnZlcnNhczwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17ZmxhdGljb24uc3JjfSAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgICAgICA8TmV4dE5Qcm9ncmVzcyBcclxuICAgICAgICAgICAgICAgIGNvbG9yPXtgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5WzcwMF19IDMwJSwgJHthcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXX0gMTAwJSlgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7IWxvYWRpbmcgPyAoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPikgOiAoPExvYWRpbmdQYWdlIC8+KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIk5leHROUHJvZ3Jlc3MiLCJIZWFkIiwiYXBwQ29uZmlnIiwiZmxhdGljb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdQYWdlIiwiR2xvYmFsU3R5bGUiLCJzdHlsZSIsImdsb2JhbCIsImpzdHlsZVNoZWV0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlIiwiZXZlbnRzIiwib24iLCJ1cmwiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic3JjIiwiY29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInNlY29uZGFyeSIsInByaW1hcnkiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

});