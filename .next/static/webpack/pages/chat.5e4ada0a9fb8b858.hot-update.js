"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleChange = function handleChange(e) {\n        console.log(e);\n        setMensagem(e.target.value);\n        console.log(mensagem);\n    };\n    var handleSubmit = function handleSubmit() {\n        setListaMensagens(mensagem);\n        console.log(listaMensagens);\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaMensagens = ref1[0], setListaMensagens = ref1[1];\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaMensagens\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 62,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem,\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                onChange: handleChange,\n                                onKeyPress: function(e) {\n                                    console.log(e);\n                                },\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 71,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 64,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 35,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 110,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 111,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 101,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(param) {\n    var mensagens = param.mensagens;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: mensagens.map(function(mensagem) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                // key={mensagem.id}\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 154,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 164,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 165,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                        lineNumber: 149,\n                        columnNumber: 6\n                    }, _this),\n                    mensagem\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                lineNumber: 136,\n                columnNumber: 5\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 124,\n        columnNumber: 3\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuXHQvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cdGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2xpc3RhTWVuc2FnZW5zLCBzZXRMaXN0YU1lbnNhZ2Vuc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblx0XHRzZXRNZW5zYWdlbShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRjb25zb2xlLmxvZyhtZW5zYWdlbSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcblx0XHRzZXRMaXN0YU1lbnNhZ2VucyhtZW5zYWdlbSk7XHJcblx0XHRjb25zb2xlLmxvZyhsaXN0YU1lbnNhZ2Vucyk7XHJcblx0fVxyXG5cdC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveFxyXG5cdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG5cdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRmbGV4OiAxLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXHJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogXCI5NSVcIixcclxuXHRcdFx0XHRcdG1heEhlaWdodDogXCI5NXZoXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiBcIjMycHhcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogXCI4MCVcIixcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcblx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhTWVuc2FnZW5zfSAvPlxyXG5cclxuXHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0YXM9XCJmb3JtXCJcclxuXHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bWVuc2FnZW19XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0YXJlYVwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBcIjBcIixcclxuXHRcdFx0XHRcdFx0XHRcdHJlc2l6ZTogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjZweCA4cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHQgdmFyaWFudD1cImhlYWRpbmc1XCI+Q2hhdDwvVGV4dD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxyXG5cdFx0XHRcdFx0Y29sb3JWYXJpYW50PVwibmV1dHJhbFwiXHJcblx0XHRcdFx0XHRsYWJlbD1cIkxvZ291dFwiXHJcblx0XHRcdFx0XHRocmVmPVwiL1wiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdCh7IG1lbnNhZ2VucyB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0dGFnPVwidWxcIlxyXG5cdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiLFxyXG5cdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0e21lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XHJcblx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdC8vIGtleT17bWVuc2FnZW0uaWR9XHJcblx0XHRcdFx0XHR0YWc9XCJsaVwiXHJcblx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCI2cHhcIixcclxuXHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEycHhcIixcclxuXHRcdFx0XHRcdFx0aG92ZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMjBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjIwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogXCI4cHhcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PFRleHQgdGFnPVwic3Ryb25nXCI+ey8qIHttZW5zYWdlbS5kZX0gKi99PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6IFwiOHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0dGFnPVwic3BhblwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHR7Lyoge21lbnNhZ2VtLnRleHRvfSAqL31cclxuXHRcdFx0XHRcdHttZW5zYWdlbX1cclxuXHRcdFx0XHQ8L1RleHQ+O1xyXG5cdFx0XHR9KX1cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwic2V0TWVuc2FnZW0iLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1lbnNhZ2VtIiwiaGFuZGxlU3VibWl0Iiwic2V0TGlzdGFNZW5zYWdlbnMiLCJsaXN0YU1lbnNhZ2VucyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});