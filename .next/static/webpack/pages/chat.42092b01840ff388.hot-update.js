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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleChange = function handleChange(e) {\n        setMensagem(e.target.value);\n    };\n    var handleNovaMensagem = function handleNovaMensagem(e, novaMensagem) {\n        var mensagemCompleta = {\n            de: \"Vinicius\",\n            id: listaMensagens.length + 1,\n            texto: novaMensagem\n        };\n        setListaMensagens([\n            mensagemCompleta\n        ].concat(_toConsumableArray(listaMensagens)));\n        setMensagem(\"\");\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaMensagens = ref1[0], setListaMensagens = ref1[1];\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 52,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaMensagens\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 65,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    value: mensagem,\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    type: \"textarea\",\n                                    onChange: handleChange,\n                                    onKeyPress: function(e) {\n                                        if (e.key === \"Enter\") {\n                                            e.preventDefault();\n                                            handleNovaMensagem(e, mensagem);\n                                        }\n                                    },\n                                    styleSheet: {\n                                        width: \"100%\",\n                                        minWidth: \"450px\",\n                                        border: \"0\",\n                                        resize: \"none\",\n                                        borderRadius: \"5px\",\n                                        padding: \"6px 8px\",\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: \"12px\",\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"submit\",\n                                    label: \"Enviar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                    },\n                                    onClick: handleNovaMensagem(mensagem)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 74,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 38,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 139,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 140,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 130,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(param) {\n    var mensagens = param.mensagens;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"auto\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/vinir07.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 184,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 194,\n                                columnNumber: 8\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 195,\n                                columnNumber: 8\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                        lineNumber: 179,\n                        columnNumber: 7\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                lineNumber: 166,\n                columnNumber: 6\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 153,\n        columnNumber: 3\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7d0JBQ3BCLENBQUM7O3dHQUVBbkUsdURBQUs7Z0NBQ0xxQixVQUFVLEVBQUUsQ0FBQztvQ0FDWmlDLEtBQUssRUFBRSxDQUFNO29DQUNiZixNQUFNLEVBQUUsQ0FBTTtvQ0FDZEQsWUFBWSxFQUFFLENBQUs7b0NBQ25CaEIsT0FBTyxFQUFFLENBQWM7b0NBQ3ZCb0MsV0FBVyxFQUFFLENBQUs7Z0NBQ25CLENBQUM7Z0NBQ0RpQixHQUFHLEVBQUcsQ0FBOEI7Ozs7Ozt3R0FFcEM3RSxzREFBSTtnQ0FBQ3lFLEdBQUcsRUFBQyxDQUFROzBDQUFFbkQsUUFBUSxDQUFDTixFQUFFOzs7Ozs7d0dBQzlCaEIsc0RBQUk7Z0NBQ0p1QixVQUFVLEVBQUUsQ0FBQztvQ0FDWnVELFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCNUMsS0FBSyxFQUFFN0Isb0VBQW9DO2dDQUM1QyxDQUFDO2dDQUNEbUUsR0FBRyxFQUFDLENBQU07MENBRVQsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUcvQjNELFFBQVEsQ0FBQ0YsS0FBSzs7ZUF2Q1ZFLFFBQVEsQ0FBQ0wsRUFBRTs7Ozs7UUEwQ25CLENBQUM7Ozs7OztBQUdKLENBQUM7TUE3RFE4QixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG5cdC8vIFN1YSBsw7NnaWNhIHZhaSBhcXVpXHJcblx0Y29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHRjb25zdCBbbGlzdGFNZW5zYWdlbnMsIHNldExpc3RhTWVuc2FnZW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuXHRcdHNldE1lbnNhZ2VtKGUudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU5vdmFNZW5zYWdlbShlLCBub3ZhTWVuc2FnZW0pIHtcclxuXHRcdGNvbnN0IG1lbnNhZ2VtQ29tcGxldGEgPSB7XHJcblx0XHRcdGRlOiBcIlZpbmljaXVzXCIsXHJcblx0XHRcdGlkOiBsaXN0YU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxyXG5cdFx0XHR0ZXh0bzogbm92YU1lbnNhZ2VtLFxyXG5cdFx0fTtcclxuXHRcdHNldExpc3RhTWVuc2FnZW5zKFttZW5zYWdlbUNvbXBsZXRhLCAuLi5saXN0YU1lbnNhZ2Vuc10pO1xyXG5cdFx0c2V0TWVuc2FnZW0oXCJcIik7XHJcblx0fVxyXG5cdC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveFxyXG5cdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG5cdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRmbGV4OiAxLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXHJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogXCI5NSVcIixcclxuXHRcdFx0XHRcdG1heEhlaWdodDogXCI5NXZoXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiBcIjMycHhcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogXCI4MCVcIixcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcblx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhTWVuc2FnZW5zfSAvPlxyXG5cdFx0XHRcdFx0ey8qIHtsaXN0YU1lbnNhZ2Vucy5tYXAobWVuc2FnZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttZW5zYWdlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfToge21lbnNhZ2VtLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX0gKi99XHJcblxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRhcz1cImZvcm1cIlxyXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXttZW5zYWdlbX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRhcmVhXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZU5vdmFNZW5zYWdlbShlLCBtZW5zYWdlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRtaW5XaWR0aDogXCI0NTBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBcIjBcIixcclxuXHRcdFx0XHRcdFx0XHRcdHJlc2l6ZTogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjZweCA4cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJFbnZpYXJcIlxyXG5cdFx0XHRcdFx0XHRcdGZ1bGxXaWR0aFxyXG5cdFx0XHRcdFx0XHRcdGJ1dHRvbkNvbG9ycz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29udHJhc3RDb2xvcjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuXHRcdFx0XHRcdFx0XHRcdG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcblx0XHRcdFx0XHRcdFx0XHRtYWluQ29sb3JMaWdodDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcblx0XHRcdFx0XHRcdFx0XHRtYWluQ29sb3JTdHJvbmc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEJveFxyXG5cdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nNVwiPkNoYXQ8L1RleHQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcclxuXHRcdFx0XHRcdGNvbG9yVmFyaWFudD1cIm5ldXRyYWxcIlxyXG5cdFx0XHRcdFx0bGFiZWw9XCJMb2dvdXRcIlxyXG5cdFx0XHRcdFx0aHJlZj1cIi9cIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QoeyBtZW5zYWdlbnMgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdHRhZz1cInVsXCJcclxuXHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdG92ZXJmbG93OiBcImF1dG9cIixcclxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcblx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHR7bWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdFx0a2V5PXttZW5zYWdlbS5pZH1cclxuXHRcdFx0XHRcdFx0dGFnPVwibGlcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiNnB4XCIsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEycHhcIixcclxuXHRcdFx0XHRcdFx0XHRob3Zlcjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjIwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjIwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogXCI4cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vdmluaXIwNy5wbmdgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgdGFnPVwic3Ryb25nXCI+e21lbnNhZ2VtLmRlfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6IFwiOHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGFnPVwic3BhblwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0e21lbnNhZ2VtLnRleHRvfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pfVxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldE1lbnNhZ2VtIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbUNvbXBsZXRhIiwiZGUiLCJpZCIsImxpc3RhTWVuc2FnZW5zIiwibGVuZ3RoIiwidGV4dG8iLCJzZXRMaXN0YU1lbnNhZ2VucyIsIm1lbnNhZ2VtIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ3aWR0aCIsIm1pbldpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJsYWJlbCIsImZ1bGxXaWR0aCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsIm9uQ2xpY2siLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwiaHJlZiIsInRhZyIsIm92ZXJmbG93IiwibWFwIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});