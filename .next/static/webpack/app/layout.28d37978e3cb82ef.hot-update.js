"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cc50b8b14cf1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/ZjAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNjNTBiOGIxNGNmMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./app/components/back-to-top/index.tsx":
/*!**********************************************!*\
  !*** ./app/components/back-to-top/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BackToTop\": function() { return /* binding */ BackToTop; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/tb */ \"(app-client)/./node_modules/react-icons/tb/index.esm.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ \"(app-client)/./app/components/button/index.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BackToTop auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BackToTop = ()=>{\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        if (!show && window.scrollY > 500) setShow(true);\n        if (show && window.scrollY <= 500) setShow(false);\n    }, [\n        show\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        handleScroll\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n        children: show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            className: \"fixed right-4 bottom-4 z-20\",\n            initial: {\n                opacity: 0,\n                right: -10\n            },\n            animate: {\n                opacity: 1,\n                right: 16\n            },\n            exit: {\n                opacity: 0,\n                right: -10\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                onClick: scrollToTop,\n                className: \"shadow-lg shadow-cyan-400/20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_5__.TbArrowNarrowUp, {\n                    size: 20\n                }, void 0, false, {\n                    fileName: \"/home/arthutepio/Meus Projetos/Arthutepio.github.io/app/components/back-to-top/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/arthutepio/Meus Projetos/Arthutepio.github.io/app/components/back-to-top/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/arthutepio/Meus Projetos/Arthutepio.github.io/app/components/back-to-top/index.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/arthutepio/Meus Projetos/Arthutepio.github.io/app/components/back-to-top/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BackToTop, \"WZzyIcueUVHkcaRqxWB+Aq5FYlw=\");\n_c = BackToTop;\nvar _c;\n$RefreshReg$(_c, \"BackToTop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvYmFjay10by10b3AvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDZDtBQUNxQjtBQUNDO0FBRWpELE1BQU1PLFlBQVksSUFBTTs7SUFDN0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFFdEMsTUFBTUksY0FBYyxJQUFNO1FBQ3hCQyxPQUFPQyxRQUFRLENBQUM7WUFBRUMsS0FBSztZQUFHQyxVQUFVO1FBQVM7SUFDL0M7SUFDQSxNQUFNQyxlQUFlWCxrREFBV0EsQ0FBQyxJQUFNO1FBQ3JDLElBQUksQ0FBQ0ksUUFBUUcsT0FBT0ssT0FBTyxHQUFHLEtBQUtQLFFBQVEsSUFBSTtRQUMvQyxJQUFJRCxRQUFRRyxPQUFPSyxPQUFPLElBQUksS0FBS1AsUUFBUSxLQUFLO0lBQ2xELEdBQUc7UUFBQ0Q7S0FBSztJQUVUSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RNLE9BQU9NLGdCQUFnQixDQUFDLFVBQVVGO1FBQ2xDLE9BQU8sSUFBTUosT0FBT08sbUJBQW1CLENBQUMsVUFBVUg7SUFDcEQsR0FBRztRQUFDQTtLQUFhO0lBRWpCLHFCQUNFLDhEQUFDYiwwREFBZUE7a0JBQ2JNLHNCQUNDLDhEQUFDTCxxREFBVTtZQUNUaUIsV0FBVTtZQUNWQyxTQUFTO2dCQUFFQyxTQUFTO2dCQUFHQyxPQUFPLENBQUM7WUFBRztZQUNsQ0MsU0FBUztnQkFBRUYsU0FBUztnQkFBR0MsT0FBTztZQUFHO1lBQ2pDRSxNQUFNO2dCQUFFSCxTQUFTO2dCQUFHQyxPQUFPLENBQUM7WUFBRztzQkFFL0IsNEVBQUN0QiwyQ0FBTUE7Z0JBQ0x5QixTQUFTaEI7Z0JBQ1RVLFdBQVU7MEJBRVYsNEVBQUNwQiwyREFBZUE7b0JBQUMyQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkMsRUFBQztHQW5DWXBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2JhY2stdG8tdG9wL2luZGV4LnRzeD82MDliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBUYkFycm93TmFycm93VXAgfSBmcm9tICdyZWFjdC1pY29ucy90YidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBCYWNrVG9Ub3AgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gIH1cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghc2hvdyAmJiB3aW5kb3cuc2Nyb2xsWSA+IDUwMCkgc2V0U2hvdyh0cnVlKVxuICAgIGlmIChzaG93ICYmIHdpbmRvdy5zY3JvbGxZIDw9IDUwMCkgc2V0U2hvdyhmYWxzZSlcbiAgfSwgW3Nob3ddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgfSwgW2hhbmRsZVNjcm9sbF0pXG5cbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAge3Nob3cgJiYgKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHJpZ2h0LTQgYm90dG9tLTQgei0yMFwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCByaWdodDogLTEwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCByaWdodDogMTYgfX1cbiAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHJpZ2h0OiAtMTAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LWxnIHNoYWRvdy1jeWFuLTQwMC8yMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRiQXJyb3dOYXJyb3dVcCBzaXplPXsyMH0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRiQXJyb3dOYXJyb3dVcCIsIkJ1dHRvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCYWNrVG9Ub3AiLCJzaG93Iiwic2V0U2hvdyIsInNjcm9sbFRvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwicmlnaHQiLCJhbmltYXRlIiwiZXhpdCIsIm9uQ2xpY2siLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/back-to-top/index.tsx\n"));

/***/ })

});