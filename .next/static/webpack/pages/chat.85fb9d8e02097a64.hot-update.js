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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var _this = this;\n    var handleChange = function handleChange(e) {\n        setMensagem(e.target.value);\n        console.log(listaMensagens);\n    };\n    var handleNovaMensagem = function handleNovaMensagem(e, novaMensagem) {\n        var mensagemCompleta = {\n            de: 'Vinicius',\n            id: listaMensagens.length + 1,\n            texto: novaMensagem\n        };\n        if (e.key === \"Enter\") {\n            e.preventDefault();\n            setListaMensagens(_toConsumableArray(listaMensagens).concat([\n                mensagemCompleta, \n            ]));\n            setMensagem(\"\");\n        }\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaMensagens = ref1[0], setListaMensagens = ref1[1];\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        listaMensagens.map(function(mensagem) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"mensagem.texto}\"\n                            }, mensagem.id, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, _this));\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                onChange: handleChange,\n                                onKeyPress: function(e) {\n                                    return handleNovaMensagem(e, mensagem1);\n                                },\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 88,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 81,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 45,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 125,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 126,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 116,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(param) {\n    var mensagens = param.mensagens;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: mensagens.map(function(mensagem) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                // key={mensagem.id}\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 169,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 179,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 180,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                        lineNumber: 164,\n                        columnNumber: 6\n                    }, _this),\n                    mensagem\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                lineNumber: 151,\n                columnNumber: 5\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 139,\n        columnNumber: 3\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUNEVyxHQUFHLEVBQUcsQ0FBc0M7Ozs7Ozt3R0FFNUN4RSxzREFBSTtnQ0FBQ3FFLEdBQUcsRUFBQyxDQUFROzs7Ozs7d0dBQ2pCckUsc0RBQUk7Z0NBQ0oyQixVQUFVLEVBQUUsQ0FBQztvQ0FDWjhDLFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCbkMsS0FBSyxFQUFFakMsb0VBQW9DO2dDQUM1QyxDQUFDO2dDQUNEK0QsR0FBRyxFQUFDLENBQU07MENBRVQsR0FBRyxDQUFDTSxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUkvQmxELFFBQVE7Ozs7Ozs7UUFFWCxDQUFDOzs7Ozs7QUFHSixDQUFDO01BNURReUMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuXHQvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cdGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2xpc3RhTWVuc2FnZW5zLCBzZXRMaXN0YU1lbnNhZ2Vuc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcblx0XHRzZXRNZW5zYWdlbShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRjb25zb2xlLmxvZyhsaXN0YU1lbnNhZ2Vucyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0oZSwgbm92YU1lbnNhZ2VtKSB7XHJcbiAgICAgICAgY29uc3QgbWVuc2FnZW1Db21wbGV0YSA9IHtcclxuICAgICAgICAgICAgZGU6ICdWaW5pY2l1cycsXHJcbiAgICAgICAgICAgIGlkOiBsaXN0YU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxyXG4gICAgICAgICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldExpc3RhTWVuc2FnZW5zKFtcclxuICAgICAgICAgICAgICAgIC4uLmxpc3RhTWVuc2FnZW5zLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FnZW1Db21wbGV0YSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHNldE1lbnNhZ2VtKFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0Ly8gLi9TdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKWAsXHJcblx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRcdGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuXHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PEJveFxyXG5cdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSlcIixcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0XHRcdG1heFdpZHRoOiBcIjk1JVwiLFxyXG5cdFx0XHRcdFx0bWF4SGVpZ2h0OiBcIjk1dmhcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiMzJweFwiLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjgwJVwiLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuXHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0ey8qIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhTWVuc2FnZW5zfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdGFNZW5zYWdlbnMubWFwKG1lbnNhZ2VtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWVuc2FnZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnNhZ2VtLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcblx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdGFzPVwiZm9ybVwiXHJcblx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dEZpZWxkXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e21lbnNhZ2VtfVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dGFyZWFcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0b25LZXlQcmVzcz17KGUpID0+IGhhbmRsZU5vdmFNZW5zYWdlbShlLCBtZW5zYWdlbSl9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBcIjBcIixcclxuXHRcdFx0XHRcdFx0XHRcdHJlc2l6ZTogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjZweCA4cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHQgdmFyaWFudD1cImhlYWRpbmc1XCI+Q2hhdDwvVGV4dD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxyXG5cdFx0XHRcdFx0Y29sb3JWYXJpYW50PVwibmV1dHJhbFwiXHJcblx0XHRcdFx0XHRsYWJlbD1cIkxvZ291dFwiXHJcblx0XHRcdFx0XHRocmVmPVwiL1wiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTGlzdCh7IG1lbnNhZ2VucyB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0dGFnPVwidWxcIlxyXG5cdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0b3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiLFxyXG5cdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0e21lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XHJcblx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdC8vIGtleT17bWVuc2FnZW0uaWR9XHJcblx0XHRcdFx0XHR0YWc9XCJsaVwiXHJcblx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCI2cHhcIixcclxuXHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEycHhcIixcclxuXHRcdFx0XHRcdFx0aG92ZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XHJcblx0XHRcdFx0XHRcdFx0XHRhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMjBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjIwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogXCI4cHhcIixcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PFRleHQgdGFnPVwic3Ryb25nXCI+ey8qIHttZW5zYWdlbS5kZX0gKi99PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6IFwiOHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0dGFnPVwic3BhblwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHR7Lyoge21lbnNhZ2VtLnRleHRvfSAqL31cclxuXHRcdFx0XHRcdHttZW5zYWdlbX1cclxuXHRcdFx0XHQ8L1RleHQ+O1xyXG5cdFx0XHR9KX1cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRNZW5zYWdlbSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImxpc3RhTWVuc2FnZW5zIiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW1Db21wbGV0YSIsImRlIiwiaWQiLCJsZW5ndGgiLCJ0ZXh0byIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic2V0TGlzdGFNZW5zYWdlbnMiLCJtZW5zYWdlbSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwibWFwIiwibGkiLCJhcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJ0YWciLCJvdmVyZmxvdyIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});