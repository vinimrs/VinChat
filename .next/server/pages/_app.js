"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./config.json
var config = __webpack_require__(181);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@skynexui/components"
var components_ = __webpack_require__(704);
// EXTERNAL MODULE: ./src/UI/LoadingComponent.js
var LoadingComponent = __webpack_require__(59);
;// CONCATENATED MODULE: ./src/UI/LoadingPage.js



function LoadingPage() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_.Box, {
        styleSheet: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "#111111",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingComponent/* default */.Z, {})
    }));
}
/* harmony default export */ const UI_LoadingPage = (LoadingPage);

;// CONCATENATED MODULE: ./src/pages/_app.js








function GlobalStyle() {
    return jsx_runtime_.jsx((style_default()), {
        id: "bb42e76dec0a303c",
        children: "*{margin:0;\npadding:0;\nbox-sizing:border-box;\nlist-style:none}\nbody{font-family:\"Open Sans\", sans-serif}\nhtml, body, #__next{min-height:100vh;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1}\n#__next{-webkit-flex:1;\n-ms-flex:1;\nflex:1}\n#__next>*{-webkit-flex:1;\n-ms-flex:1;\nflex:1}"
    });
}
function MyApp({ Component , pageProps  }) {
    const { /*#__PURE__*/ 0: loading , 1: setLoading  } = (0,external_react_.useState)();
    const route = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        route.events.on('routeChangeStart', ()=>setLoading(true)
        );
        // route.events.off('routeChangeStart', handleRouteChangeComplete);
        route.events.on('routeChangeComplete', ()=>setLoading(false)
        );
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "VinChat - Plataforma de Conversas"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/flaticon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                color: `linear-gradient(90deg, ${config/* theme.colors.secondary.700 */.rS.O.BD.qy} 30%, ${config/* theme.colors.primary.600 */.rS.O.T$.RW} 100%)`,
                height: 5
            }),
            !loading ? /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }) : /*#__PURE__*/ jsx_runtime_.jsx(UI_LoadingPage, {})
        ]
    }));
};


/***/ }),

/***/ 704:
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [181,59], () => (__webpack_exec__(640)));
module.exports = __webpack_exports__;

})();