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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleChange = function handleChange(e) {\n        setMensagem(e.target.value);\n        console.log(listaMensagens);\n    };\n    var handleNovaMensagem = function handleNovaMensagem(e, novaMensagem) {\n        var mensagemCompleta = {\n            de: 'Vinicius',\n            id: listaMensagens.length + 1,\n            texto: novaMensagem\n        };\n        if (e.key === \"Enter\") {\n            e.preventDefault();\n            setListaMensagens([\n                mensagemCompleta, \n            ].concat(_toConsumableArray(listaMensagens)));\n            setMensagem(\"\");\n        }\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaMensagens = ref1[0], setListaMensagens = ref1[1];\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaMensagens\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 72,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    value: mensagem,\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    type: \"textarea\",\n                                    onChange: handleChange,\n                                    onKeyPress: function(e) {\n                                        return handleNovaMensagem(e, mensagem);\n                                    },\n                                    styleSheet: {\n                                        width: \"100%\",\n                                        minWidth: '450px',\n                                        border: \"0\",\n                                        resize: \"none\",\n                                        borderRadius: \"5px\",\n                                        padding: \"6px 8px\",\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: \"12px\",\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"submit\",\n                                    label: \"Enviar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                    },\n                                    onClick: handleMensagemEnviada()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 81,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 45,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 141,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 142,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 132,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(param) {\n    var mensagens = param.mensagens;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"auto\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/vinir07.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 187,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 197,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 198,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                        lineNumber: 182,\n                        columnNumber: 25\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                lineNumber: 169,\n                columnNumber: 21\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 155,\n        columnNumber: 3\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksRUFBRSxDQUFLO3dCQUN2QixDQUFDOzt3R0FFQXRFLHVEQUFLO2dDQUNGeUIsVUFBVSxFQUFFLENBQUM7b0NBQ1QrQixLQUFLLEVBQUUsQ0FBTTtvQ0FDYmIsTUFBTSxFQUFFLENBQU07b0NBQ2RELFlBQVksRUFBRSxDQUFLO29DQUNuQmhCLE9BQU8sRUFBRSxDQUFjO29DQUN2QmtDLFdBQVcsRUFBRSxDQUFLO2dDQUN0QixDQUFDO2dDQUNEa0IsR0FBRyxFQUFHLENBQThCOzs7Ozs7d0dBRXZDaEYsc0RBQUk7Z0NBQUM0RSxHQUFHLEVBQUMsQ0FBUTswQ0FBRWxELFFBQVEsQ0FBQ1AsRUFBRTs7Ozs7O3dHQUM5Qm5CLHNEQUFJO2dDQUNEMkIsVUFBVSxFQUFFLENBQUM7b0NBQ1RzRCxRQUFRLEVBQUUsQ0FBTTtvQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO29DQUNqQjNDLEtBQUssRUFBRWpDLG9FQUFvQztnQ0FDL0MsQ0FBQztnQ0FDRHNFLEdBQUcsRUFBQyxDQUFNOzBDQUVULEdBQUcsQ0FBQ08sSUFBSSxHQUFHQyxrQkFBa0I7Ozs7Ozs7Ozs7OztvQkFHckMxRCxRQUFRLENBQUNKLEtBQUs7O2VBdkNWSSxRQUFRLENBQUNOLEVBQUU7Ozs7O1FBMENyQyxDQUFDOzs7Ozs7QUFHSixDQUFDO01BOURRK0IsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuXHQvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cdGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2xpc3RhTWVuc2FnZW5zLCBzZXRMaXN0YU1lbnNhZ2Vuc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcblx0XHRzZXRNZW5zYWdlbShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRjb25zb2xlLmxvZyhsaXN0YU1lbnNhZ2Vucyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0oZSwgbm92YU1lbnNhZ2VtKSB7XHJcbiAgICAgICAgY29uc3QgbWVuc2FnZW1Db21wbGV0YSA9IHtcclxuICAgICAgICAgICAgZGU6ICdWaW5pY2l1cycsXHJcbiAgICAgICAgICAgIGlkOiBsaXN0YU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldExpc3RhTWVuc2FnZW5zKFtcclxuICAgICAgICAgICAgICAgIG1lbnNhZ2VtQ29tcGxldGEsXHJcbiAgICAgICAgICAgICAgICAuLi5saXN0YU1lbnNhZ2VucyxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHNldE1lbnNhZ2VtKFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0Ly8gLi9TdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKWAsXHJcblx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuXHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PEJveFxyXG5cdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRcdG1heFdpZHRoOiBcIjk1JVwiLFxyXG5cdFx0XHRcdFx0bWF4SGVpZ2h0OiBcIjk1dmhcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiMzJweFwiLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjgwJVwiLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFNZW5zYWdlbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtsaXN0YU1lbnNhZ2Vucy5tYXAobWVuc2FnZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXttZW5zYWdlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfToge21lbnNhZ2VtLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX0gKi99XHJcblxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRhcz1cImZvcm1cIlxyXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXttZW5zYWdlbX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRhcmVhXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVOb3ZhTWVuc2FnZW0oZSwgbWVuc2FnZW0pfVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzQ1MHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogXCIwXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRyZXNpemU6IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCI2cHggOHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpblJpZ2h0OiBcIjEycHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiRW52aWFyXCJcclxuXHRcdFx0XHRcdFx0XHRmdWxsV2lkdGhcclxuXHRcdFx0XHRcdFx0XHRidXR0b25Db2xvcnM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyYXN0Q29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcblx0XHRcdFx0XHRcdFx0XHRtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yTGlnaHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFpbkNvbG9yU3Ryb25nOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVuc2FnZW1FbnZpYWRhKCl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcblx0XHRcdFx0XHRjb2xvclZhcmlhbnQ9XCJuZXV0cmFsXCJcclxuXHRcdFx0XHRcdGxhYmVsPVwiTG9nb3V0XCJcclxuXHRcdFx0XHRcdGhyZWY9XCIvXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHsgbWVuc2FnZW5zIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveFxyXG5cdFx0XHR0YWc9XCJ1bFwiXHJcblx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCIsXHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiLFxyXG5cdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0e21lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cImxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92aW5pcjA3LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+e21lbnNhZ2VtLmRlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cdFx0XHR9KX1cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRNZW5zYWdlbSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImxpc3RhTWVuc2FnZW5zIiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW1Db21wbGV0YSIsImRlIiwiaWQiLCJsZW5ndGgiLCJ0ZXh0byIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic2V0TGlzdGFNZW5zYWdlbnMiLCJtZW5zYWdlbSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsIndpZHRoIiwibWluV2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsImxhYmVsIiwiZnVsbFdpZHRoIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwib25DbGljayIsImhhbmRsZU1lbnNhZ2VtRW52aWFkYSIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJocmVmIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});