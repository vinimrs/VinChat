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

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar SUPABASE_API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMDU5NCwiZXhwIjoxOTU4OTA2NTk0fQ.YM105BCPMAwKQHJTsZarKFFvw0JyL4fl_DMjYkTN4ds\";\nvar SUPABASE_URL = \"https://hvwecieyitwycexeynyd.supabase.co\";\nvar supabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(SUPABASE_URL, SUPABASE_API_KEY);\nvar getMensagens = function() {\n    return supabaseClient.from(\"mensagens\").select(\"*\").order('id', {\n        ascending: false\n    }).then(function(param) {\n        var data = param.data;\n        return data;\n    });\n};\nvar setMensagem = function(textoMensagem, usuario) {\n    return supabaseClient.from(\"mensagens\").insert({\n        de: usuario,\n        texto: textoMensagem\n    }).then(function(param) {\n        var data = param.data;\n        return data[0];\n    });\n};\nvar deletaMensagem = function(mensagemId) {\n    return supabaseClient.from(\"mensagens\").delete().match({\n        id: mensagemId\n    }).then(function(dados) {\n        return dados;\n    });\n};\nvar escutaEmTempoReal = function() {\n    return supabaseClient.from('mensagens').on('INSERT', function(dados) {\n        console.log('');\n    }).subscribe();\n};\nvar api = {\n    getMensagens: getMensagens,\n    setMensagem: setMensagem,\n    deletaMensagem: deletaMensagem\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9EO0FBRXBELEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQ3JCLENBQXFKO0FBQ3RKLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQTBDO0FBQy9ELEdBQUssQ0FBQ0MsY0FBYyxHQUFHSCxtRUFBWSxDQUFDRSxZQUFZLEVBQUVELGdCQUFnQjtBQUVsRSxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUMzQixNQUFNLENBQUNELGNBQWMsQ0FDbkJFLElBQUksQ0FBQyxDQUFXLFlBQ2hCQyxNQUFNLENBQUMsQ0FBRyxJQUNKQyxLQUFLLENBQUMsQ0FBSSxLQUFFLENBQUM7UUFBQ0MsU0FBUyxFQUFFLEtBQUs7SUFBQyxDQUFDLEVBQ3RDQyxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJOztBQUMxQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUSxDQUFQQyxhQUFhLEVBQUVDLE9BQU8sRUFBSyxDQUFDO0lBQ2hELE1BQU0sQ0FBQ1YsY0FBYyxDQUNuQkUsSUFBSSxDQUFDLENBQVcsWUFDaEJTLE1BQU0sQ0FBQyxDQUFDO1FBQUNDLEVBQUUsRUFBRUYsT0FBTztRQUFFRyxLQUFLLEVBQUVKLGFBQWE7SUFBQyxDQUFDLEVBQzVDSCxJQUFJLENBQUMsUUFBUTtZQUFMQyxJQUFJLFNBQUpBLElBQUk7UUFBT0EsTUFBTSxDQUFOQSxJQUFJLENBQUMsQ0FBQzs7QUFDNUIsQ0FBQztBQUVELEdBQUssQ0FBQ08sY0FBYyxHQUFHLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7SUFDdkMsTUFBTSxDQUFDZixjQUFjLENBQ1RFLElBQUksQ0FBQyxDQUFXLFlBQ2hCYyxNQUFNLEdBQ05DLEtBQUssQ0FBQyxDQUFDO1FBQUNDLEVBQUUsRUFBRUgsVUFBVTtJQUFDLENBQUMsRUFDeEJULElBQUksQ0FBQyxRQUFRLENBQVBhLEtBQUs7UUFBS0EsTUFBTSxDQUFOQSxLQUFLOztBQUNsQyxDQUFDO0FBRUQsR0FBSyxDQUFDQyxpQkFBaUIsR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUM3QixNQUFNLENBQUNwQixjQUFjLENBQ1pFLElBQUksQ0FBQyxDQUFXLFlBQ2hCbUIsRUFBRSxDQUFDLENBQVEsU0FBRSxRQUFRLENBQVBGLEtBQUssRUFBSyxDQUFDO1FBQ3RCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFFO0lBQ2xCLENBQUMsRUFDQUMsU0FBUztBQUN0QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBQztJQUNaeEIsWUFBWSxFQUFaQSxZQUFZO0lBQ1pPLFdBQVcsRUFBWEEsV0FBVztJQUNSTSxjQUFjLEVBQWRBLGNBQWM7QUFDbEIsQ0FBQztBQUVELCtEQUFlVyxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2luZGV4LmpzPzFhZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5cclxuY29uc3QgU1VQQUJBU0VfQVBJX0tFWSA9XHJcblx0XCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKeWIyeGxJam9pWVc1dmJpSXNJbWxoZENJNk1UWTBNek16TURVNU5Dd2laWGh3SWpveE9UVTRPVEEyTlRrMGZRLllNMTA1QkNQTUF3S1FISlRzWmFyS0ZGdncwSnlMNGZsX0RNallrVE40ZHNcIjtcclxuY29uc3QgU1VQQUJBU0VfVVJMID0gXCJodHRwczovL2h2d2VjaWV5aXR3eWNleGV5bnlkLnN1cGFiYXNlLmNvXCI7XHJcbmNvbnN0IHN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQVBJX0tFWSk7XHJcblxyXG5jb25zdCBnZXRNZW5zYWdlbnMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIHN1cGFiYXNlQ2xpZW50XHJcblx0XHQuZnJvbShcIm1lbnNhZ2Vuc1wiKVxyXG5cdFx0LnNlbGVjdChcIipcIilcclxuICAgICAgICAub3JkZXIoJ2lkJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcblx0XHQudGhlbigoeyBkYXRhIH0pID0+IGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0TWVuc2FnZW0gPSAodGV4dG9NZW5zYWdlbSwgdXN1YXJpbykgPT4ge1xyXG5cdHJldHVybiBzdXBhYmFzZUNsaWVudFxyXG5cdFx0LmZyb20oXCJtZW5zYWdlbnNcIilcclxuXHRcdC5pbnNlcnQoeyBkZTogdXN1YXJpbywgdGV4dG86IHRleHRvTWVuc2FnZW0gfSlcclxuXHRcdC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YVswXSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGFNZW5zYWdlbSA9IChtZW5zYWdlbUlkKSA9PiB7XHJcblx0cmV0dXJuIHN1cGFiYXNlQ2xpZW50XHJcbiAgICAgICAgICAgIC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcbiAgICAgICAgICAgIC5kZWxldGUoKVxyXG4gICAgICAgICAgICAubWF0Y2goeyBpZDogbWVuc2FnZW1JZCB9KVxyXG4gICAgICAgICAgICAudGhlbigoZGFkb3MpID0+IGRhZG9zKTtcclxufTtcclxuXHJcbmNvbnN0IGVzY3V0YUVtVGVtcG9SZWFsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN1cGFiYXNlQ2xpZW50XHJcbiAgICAgICAgICAgIC5mcm9tKCdtZW5zYWdlbnMnKVxyXG4gICAgICAgICAgICAub24oJ0lOU0VSVCcsIChkYWRvcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJycpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKTtcclxufTtcclxuXHJcbmNvbnN0IGFwaSA9IHtcclxuXHRnZXRNZW5zYWdlbnMsXHJcblx0c2V0TWVuc2FnZW0sXHJcbiAgICBkZWxldGFNZW5zYWdlbSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FQSV9LRVkiLCJTVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUNsaWVudCIsImdldE1lbnNhZ2VucyIsImZyb20iLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsInRoZW4iLCJkYXRhIiwic2V0TWVuc2FnZW0iLCJ0ZXh0b01lbnNhZ2VtIiwidXN1YXJpbyIsImluc2VydCIsImRlIiwidGV4dG8iLCJkZWxldGFNZW5zYWdlbSIsIm1lbnNhZ2VtSWQiLCJkZWxldGUiLCJtYXRjaCIsImlkIiwiZGFkb3MiLCJlc2N1dGFFbVRlbXBvUmVhbCIsIm9uIiwiY29uc29sZSIsImxvZyIsInN1YnNjcmliZSIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ })

});