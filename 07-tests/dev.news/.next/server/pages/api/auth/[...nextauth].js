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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: \"read:user\"\n  })],\n  // Callbacks are asynchronous functions you can use to control what happens when an action is performed.\n  // https://next-auth.js.org/configuration/callbacks\n  callbacks: {\n    async session(session) {\n      try {\n        // Para buscar se o usuário já tem uma inscrição ativa.\n        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_status'), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch (err) {\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn(user, account, profile) {\n      try {\n        const {\n          email\n        } = user;\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query( // FQL +> Fauna query language\n        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If( // Se\n        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not( // Não\n        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists( // Existe\n        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match( // Um usuário que tenha esse email\n        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), {\n          data: {\n            email\n          }\n        }), // Else\n        faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n      } catch (err) {\n        console.log(err);\n        return false;\n      }\n\n      return true;\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsaUVBQWVFLGdEQUFRLENBQUM7QUFDdEJHLEVBQUFBLFNBQVMsRUFBRSxDQUNURixpRUFBQSxDQUFpQjtBQUNmSSxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEUDtBQUVmQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFGWDtBQUdmQyxJQUFBQSxLQUFLLEVBQUU7QUFIUSxHQUFqQixDQURTLENBRFc7QUFRdEI7QUFDQTtBQUNBQyxFQUFBQSxTQUFTLEVBQUU7QUFDVCxVQUFNQyxPQUFOLENBQWNBLE9BQWQsRUFBdUI7QUFDckIsVUFBRztBQUNEO0FBQ0EsY0FBTUMsc0JBQXNCLEdBQUcsTUFBTVosd0RBQUEsQ0FDbkNILDhDQUFBLENBQ0VBLHVEQUFBLENBQWUsQ0FDYkEsZ0RBQUEsQ0FDRUEsZ0RBQUEsQ0FBUSwwQkFBUixDQURGLEVBRUVBLGlEQUFBLENBQ0UsS0FERixFQUVFQSw4Q0FBQSxDQUNFQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLGVBQVIsQ0FERixFQUVFQSxtREFBQSxDQUFXYyxPQUFPLENBQUNRLElBQVIsQ0FBYUMsS0FBeEIsQ0FGRixDQURGLENBRkYsQ0FGRixDQURhLEVBYWJ2QixnREFBQSxDQUNFQSxnREFBQSxDQUFRLHdCQUFSLENBREYsRUFFRSxRQUZGLENBYmEsQ0FBZixDQURGLENBRG1DLENBQXJDO0FBdUJBLCtDQUFXYyxPQUFYO0FBQW9CVSxVQUFBQSxrQkFBa0IsRUFBRVQ7QUFBeEM7QUFDRCxPQTFCRCxDQTBCRSxPQUFNVSxHQUFOLEVBQVc7QUFDWCwrQ0FBV1gsT0FBWDtBQUFvQlUsVUFBQUEsa0JBQWtCLEVBQUU7QUFBeEM7QUFDRDtBQUNGLEtBL0JROztBQWdDVCxVQUFNRSxNQUFOLENBQWFKLElBQWIsRUFBbUJLLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFzQztBQUNwQyxVQUFJO0FBQ0YsY0FBTTtBQUFDTCxVQUFBQTtBQUFELFlBQVVELElBQWhCO0FBRUEsY0FBTW5CLHdEQUFBLEVBQ0o7QUFFQUgsUUFBQUEsNkNBQUEsRUFBTTtBQUNKQSxRQUFBQSw4Q0FBQSxFQUFPO0FBQ0xBLFFBQUFBLGlEQUFBLEVBQVU7QUFDUkEsUUFBQUEsZ0RBQUEsRUFBUztBQUNQQSxRQUFBQSxnREFBQSxDQUFRLGVBQVIsQ0FERixFQUVFQSxtREFBQSxDQUFXc0IsSUFBSSxDQUFDQyxLQUFoQixDQUZGLENBREYsQ0FERixDQURGLEVBU0V2QixpREFBQSxDQUNFQSxxREFBQSxDQUFhLE9BQWIsQ0FERixFQUVFO0FBQUNrQyxVQUFBQSxJQUFJLEVBQUU7QUFBQ1gsWUFBQUE7QUFBRDtBQUFQLFNBRkYsQ0FURixFQVlLO0FBQ0h2QixRQUFBQSw4Q0FBQSxDQUNFQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLGVBQVIsQ0FERixFQUVFQSxtREFBQSxDQUFXc0IsSUFBSSxDQUFDQyxLQUFoQixDQUZGLENBREYsQ0FiRixDQUhJLENBQU47QUF5QkQsT0E1QkQsQ0E0QkUsT0FBTUUsR0FBTixFQUFXO0FBQ1hVLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWCxHQUFaO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7O0FBbkVRO0FBVlcsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovLzAzLWRldm5ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cXVlcnkgYXMgcX0gZnJvbSAnZmF1bmFkYidcblxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiXG5cbmltcG9ydCB7ZmF1bmF9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5hJ1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgc2NvcGU6IFwicmVhZDp1c2VyXCJcbiAgICB9KSxcbiAgXSxcbiAgLy8gQ2FsbGJhY2tzIGFyZSBhc3luY2hyb25vdXMgZnVuY3Rpb25zIHlvdSBjYW4gdXNlIHRvIGNvbnRyb2wgd2hhdCBoYXBwZW5zIHdoZW4gYW4gYWN0aW9uIGlzIHBlcmZvcm1lZC5cbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vY2FsbGJhY2tzXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbikge1xuICAgICAgdHJ5e1xuICAgICAgICAvLyBQYXJhIGJ1c2NhciBzZSBvIHVzdcOhcmlvIGrDoSB0ZW0gdW1hIGluc2NyacOnw6NvIGF0aXZhLlxuICAgICAgICBjb25zdCB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uID0gYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICBxLkludGVyc2VjdGlvbihbXG4gICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgcS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3VzZXJfcmVmJyksXG4gICAgICAgICAgICAgICAgcS5TZWxlY3QoXG4gICAgICAgICAgICAgICAgICBcInJlZlwiLFxuICAgICAgICAgICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV9zdGF0dXMnKSxcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIHsuLi5zZXNzaW9uLCBhY3RpdmVTdWJzY3JpcHRpb246IHVzZXJBY3RpdmVTdWJzY3JpcHRpb259XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICByZXR1cm4gey4uLnNlc3Npb24sIGFjdGl2ZVN1YnNjcmlwdGlvbjogbnVsbH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlICkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2VtYWlsfSA9IHVzZXJcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgIC8vIEZRTCArPiBGYXVuYSBxdWVyeSBsYW5ndWFnZVxuXG4gICAgICAgICAgcS5JZiggLy8gU2VcbiAgICAgICAgICAgIHEuTm90KCAvLyBOw6NvXG4gICAgICAgICAgICAgIHEuRXhpc3RzKCAvLyBFeGlzdGVcbiAgICAgICAgICAgICAgICBxLk1hdGNoKCAvLyBVbSB1c3XDoXJpbyBxdWUgdGVuaGEgZXNzZSBlbWFpbFxuICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHEuQ3JlYXRlKFxuICAgICAgICAgICAgICBxLkNvbGxlY3Rpb24oJ3VzZXJzJyksXG4gICAgICAgICAgICAgIHtkYXRhOiB7ZW1haWx9fVxuICAgICAgICAgICAgKSwgLy8gRWxzZVxuICAgICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxufSkiXSwibmFtZXMiOlsicXVlcnkiLCJxIiwiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJmYXVuYSIsInByb3ZpZGVycyIsIkdpdEh1YiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsInNjb3BlIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXJBY3RpdmVTdWJzY3JpcHRpb24iLCJHZXQiLCJJbnRlcnNlY3Rpb24iLCJNYXRjaCIsIkluZGV4IiwiU2VsZWN0IiwiQ2FzZWZvbGQiLCJ1c2VyIiwiZW1haWwiLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJlcnIiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsIklmIiwiTm90IiwiRXhpc3RzIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUcsSUFBSUQsMkNBQUosQ0FBVztBQUM5QkUsRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEVSxDQUFYLENBQWQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMy1kZXZuZXdzLy4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzPzhmNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDbGllbnR9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXG59KSJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();