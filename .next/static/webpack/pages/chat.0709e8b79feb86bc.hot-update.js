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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var _this = this;\n    var handleChange = function handleChange(e) {\n        setMensagem(e.target.value);\n        console.log(listaMensagens);\n    };\n    var handleNovaMensagem = function handleNovaMensagem(e, novaMensagem) {\n        var mensagemCompleta = {\n            de: 'Vinicius',\n            id: listaMensagens.length + 1,\n            texto: novaMensagem\n        };\n        if (e.key === \"Enter\") {\n            e.preventDefault();\n            setListaMensagens(_toConsumableArray(listaMensagens).concat([\n                mensagemCompleta, \n            ]));\n            setMensagem(\"\");\n        }\n    };\n    _s();\n    // Sua lógica vai aqui\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaMensagens = ref1[0], setListaMensagens = ref1[1];\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        listaMensagens.map(function(mensagem) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    mensagem.de,\n                                    \": \",\n                                    mensagem.texto\n                                ]\n                            }, mensagem.id, true, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, _this));\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                onChange: handleChange,\n                                onKeyPress: function(e) {\n                                    return handleNovaMensagem(e, mensagem1);\n                                },\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 88,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                            lineNumber: 81,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 45,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, this));\n};\n_s(ChatPage, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 125,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                    lineNumber: 126,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n            lineNumber: 116,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(param) {\n    var mensagens = param.mensagens;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: mensagens.map(function(mensagem) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 169,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 179,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                                lineNumber: 180,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                        lineNumber: 164,\n                        columnNumber: 6\n                    }, _this),\n                    mensagem\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n                lineNumber: 151,\n                columnNumber: 5\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vini-\\\\OneDrive\\\\Documentos\\\\Alura\\\\imersao-react-4\\\\pages\\\\chat.js\",\n        lineNumber: 139,\n        columnNumber: 3\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDdkJpQyxXQUFXLEVBQUUsQ0FBSztnQ0FDbkIsQ0FBQztnQ0FDRFcsR0FBRyxFQUFHLENBQXNDOzs7Ozs7d0dBRTVDeEUsc0RBQUk7Z0NBQUNxRSxHQUFHLEVBQUMsQ0FBUTswQ0FBRTNDLFFBQVEsQ0FBQ1AsRUFBRTs7Ozs7O3dHQUM5Qm5CLHNEQUFJO2dDQUNKMkIsVUFBVSxFQUFFLENBQUM7b0NBQ1o4QyxRQUFRLEVBQUUsQ0FBTTtvQ0FDaEJDLFVBQVUsRUFBRSxDQUFLO29DQUNqQm5DLEtBQUssRUFBRWpDLG9FQUFvQztnQ0FDNUMsQ0FBQztnQ0FDRCtELEdBQUcsRUFBQyxDQUFNOzBDQUVULEdBQUcsQ0FBQ00sSUFBSSxHQUFHQyxrQkFBa0I7Ozs7Ozs7Ozs7OztvQkFJL0JsRCxRQUFROztlQXhDSkEsUUFBUSxDQUFDTixFQUFFOzs7OztRQTBDbEIsQ0FBQzs7Ozs7O0FBR0osQ0FBQztNQTVEUStDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcblx0Ly8gU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuXHRjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtsaXN0YU1lbnNhZ2Vucywgc2V0TGlzdGFNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG5cdFx0c2V0TWVuc2FnZW0oZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0Y29uc29sZS5sb2cobGlzdGFNZW5zYWdlbnMpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKGUsIG5vdmFNZW5zYWdlbSkge1xyXG4gICAgICAgIGNvbnN0IG1lbnNhZ2VtQ29tcGxldGEgPSB7XHJcbiAgICAgICAgICAgIGRlOiAnVmluaWNpdXMnLFxyXG4gICAgICAgICAgICBpZDogbGlzdGFNZW5zYWdlbnMubGVuZ3RoICsgMSxcclxuICAgICAgICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRMaXN0YU1lbnNhZ2VucyhbXHJcbiAgICAgICAgICAgICAgICAuLi5saXN0YU1lbnNhZ2VucyxcclxuICAgICAgICAgICAgICAgIG1lbnNhZ2VtQ29tcGxldGEsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBzZXRNZW5zYWdlbShcIlwiKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cdC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveFxyXG5cdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG5cdFx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcblx0XHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdFx0Y29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRmbGV4OiAxLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXHJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRtYXhXaWR0aDogXCI5NSVcIixcclxuXHRcdFx0XHRcdG1heEhlaWdodDogXCI5NXZoXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiBcIjMycHhcIixcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEhlYWRlciAvPlxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRcdGZsZXg6IDEsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogXCI4MCVcIixcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzYwMF0sXHJcblx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsvKiA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YU1lbnNhZ2Vuc30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RhTWVuc2FnZW5zLm1hcChtZW5zYWdlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21lbnNhZ2VtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9OiB7bWVuc2FnZW0udGV4dG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuXHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0YXM9XCJmb3JtXCJcclxuXHRcdFx0XHRcdFx0c3R5bGVTaGVldD17e1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bWVuc2FnZW19XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0YXJlYVwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0XHRvbktleVByZXNzPXsoZSkgPT4gaGFuZGxlTm92YU1lbnNhZ2VtKGUsIG1lbnNhZ2VtKX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IFwiMFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVzaXplOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiNnB4IDhweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogXCIxMnB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcblx0XHRcdFx0XHRjb2xvclZhcmlhbnQ9XCJuZXV0cmFsXCJcclxuXHRcdFx0XHRcdGxhYmVsPVwiTG9nb3V0XCJcclxuXHRcdFx0XHRcdGhyZWY9XCIvXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHsgbWVuc2FnZW5zIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveFxyXG5cdFx0XHR0YWc9XCJ1bFwiXHJcblx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJzY3JvbGxcIixcclxuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXHJcblx0XHRcdFx0ZmxleDogMSxcclxuXHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHR7bWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcclxuXHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0a2V5PXttZW5zYWdlbS5pZH1cclxuXHRcdFx0XHRcdHRhZz1cImxpXCJcclxuXHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjZweFwiLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxyXG5cdFx0XHRcdFx0XHRob3Zlcjoge1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjpcclxuXHRcdFx0XHRcdFx0XHRcdGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRzdHlsZVNoZWV0PXt7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIyMHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMjBweFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpblJpZ2h0OiBcIjhweFwiLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCB0YWc9XCJzdHJvbmdcIj57bWVuc2FnZW0uZGV9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlU2hlZXQ9e3tcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6IFwiOHB4XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0dGFnPVwic3BhblwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHR7Lyoge21lbnNhZ2VtLnRleHRvfSAqL31cclxuXHRcdFx0XHRcdHttZW5zYWdlbX1cclxuXHRcdFx0XHQ8L1RleHQ+O1xyXG5cdFx0XHR9KX1cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRNZW5zYWdlbSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImxpc3RhTWVuc2FnZW5zIiwiaGFuZGxlTm92YU1lbnNhZ2VtIiwibm92YU1lbnNhZ2VtIiwibWVuc2FnZW1Db21wbGV0YSIsImRlIiwiaWQiLCJsZW5ndGgiLCJ0ZXh0byIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic2V0TGlzdGFNZW5zYWdlbnMiLCJtZW5zYWdlbSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwibWFwIiwibGkiLCJhcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJ0YWciLCJvdmVyZmxvdyIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});