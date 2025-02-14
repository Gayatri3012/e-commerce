"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\login.js */ \"(api)/./src/pages/api/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/login\",\n        pathname: \"/api/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmxvZ2luJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTVDcGFnZXMlNUNhcGklNUNsb2dpbi5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUN3RDtBQUN4RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsb0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG9EQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2UtY29tbWVyY2UvPzA5MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3NyY1xcXFxwYWdlc1xcXFxhcGlcXFxcbG9naW4uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpblwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_CONNECTION_URL);\n        const db = client.db(\"e-commerce\");\n        const users = db.collection(\"users\");\n        try {\n            const user = await users.findOne({\n                email: data.email\n            });\n            if (!user) {\n                res.status(400).json({\n                    message: \"Please enter valid credentials.\"\n                });\n            }\n            const isEqual = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(data.password, user.password);\n            if (!isEqual) {\n                res.status(400).json({\n                    message: \"Incorrect password.\"\n                });\n            }\n            res.status(200).json({\n                message: \"Login successful\",\n                userId: user._id\n            });\n        } catch (err) {\n            console.error(err);\n        }\n        client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ1I7QUFHZixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBR0QsSUFBSUUsTUFBTSxLQUFLLFFBQU87UUFDdkIsTUFBTUMsT0FBT0gsSUFBSUksSUFBSTtRQUVyQixNQUFNQyxTQUFTLE1BQU1SLGdEQUFXQSxDQUFDUyxPQUFPLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CO1FBQ3pFLE1BQU1DLEtBQUtMLE9BQU9LLEVBQUUsQ0FBQztRQUVyQixNQUFNQyxRQUFRRCxHQUFHRSxVQUFVLENBQUM7UUFFNUIsSUFBRztZQUNDLE1BQU1DLE9BQU8sTUFBTUYsTUFBTUcsT0FBTyxDQUFDO2dCQUFDQyxPQUFRWixLQUFLWSxLQUFLO1lBQUE7WUFDcEQsSUFBRyxDQUFDRixNQUFLO2dCQUNQWixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFDQyxTQUFTO2dCQUFpQztZQUNsRTtZQUNBLE1BQU1DLFVBQVUsTUFBTXJCLHVEQUFjLENBQUNLLEtBQUtrQixRQUFRLEVBQUVSLEtBQUtRLFFBQVE7WUFDakUsSUFBRyxDQUFDRixTQUFRO2dCQUNSbEIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBQ0MsU0FBUztnQkFBcUI7WUFDeEQ7WUFFQWpCLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVM7Z0JBQW9CSSxRQUFRVCxLQUFLVSxHQUFHO1lBQUE7UUFDdkUsRUFBQyxPQUFNQyxLQUFJO1lBQ1BDLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDbEI7UUFFQW5CLE9BQU9zQixLQUFLO0lBQ2Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2UtY29tbWVyY2UvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIFxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19DT05ORUNUSU9OX1VSTCk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYignZS1jb21tZXJjZScpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJzID0gZGIuY29sbGVjdGlvbigndXNlcnMnKTtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzLmZpbmRPbmUoe2VtYWlsIDogZGF0YS5lbWFpbH0pO1xyXG4gICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOiAnUGxlYXNlIGVudGVyIHZhbGlkIGNyZWRlbnRpYWxzLid9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0VxdWFsID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoZGF0YS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgaWYoIWlzRXF1YWwpe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogJ0luY29ycmVjdCBwYXNzd29yZC4nfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsIHVzZXJJZDogdXNlci5faWR9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiYmNyeXB0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19DT05ORUNUSU9OX1VSTCIsImRiIiwidXNlcnMiLCJjb2xsZWN0aW9uIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaXNFcXVhbCIsImNvbXBhcmUiLCJwYXNzd29yZCIsInVzZXJJZCIsIl9pZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();