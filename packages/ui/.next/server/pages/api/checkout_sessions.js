module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/checkout_sessions/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/checkout_sessions/index.ts":
/*!**********************************************!*\
  !*** ./pages/api/checkout_sessions/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0___default.a(process.env.STRIPE_SECRET_KEY, {\n  // https://github.com/stripe/stripe-node#configuration\n  apiVersion: '2020-08-27'\n});\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    try {\n      let price;\n      const trial = [];\n\n      if (req.body.priceId === \"oneweek\") {\n        price = process.env.WEEK_PRICE_ID;\n        trial.push({\n          price: process.env.MONTHLY_PRICE_ID,\n          quantity: 1\n        });\n      }\n\n      ;\n      if (req.body.priceId === \"monthly\") price = process.env.MONTHLY_PRICE_ID;\n      if (req.body.priceId === \"yearly\") price = process.env.YEARLY_PRICE_ID; // Create Checkout Sessions from body params.\n\n      const params = {\n        mode: \"subscription\",\n        payment_method_types: [\"card\"],\n        line_items: [{\n          price,\n          quantity: 1\n        }, ...trial],\n        subscription_data: trial.length > 0 ? {\n          trial_period_days: 7\n        } : undefined,\n        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,\n        cancel_url: `${req.headers.origin}/pricing`\n      }; // console.log(params)\n\n      const checkoutSession = await stripe.checkout.sessions.create(params);\n      res.status(200).json(checkoutSession);\n    } catch (err) {\n      res.status(500).json({\n        statusCode: 500,\n        message: err.message\n      });\n    }\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method Not Allowed');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvaW5kZXgudHM/MDg1ZiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJhcGlWZXJzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByaWNlIiwidHJpYWwiLCJib2R5IiwicHJpY2VJZCIsIldFRUtfUFJJQ0VfSUQiLCJwdXNoIiwiTU9OVEhMWV9QUklDRV9JRCIsInF1YW50aXR5IiwiWUVBUkxZX1BSSUNFX0lEIiwicGFyYW1zIiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibGluZV9pdGVtcyIsInN1YnNjcmlwdGlvbl9kYXRhIiwibGVuZ3RoIiwidHJpYWxfcGVyaW9kX2RheXMiLCJ1bmRlZmluZWQiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwiY2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyw2Q0FBSixDQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQXZCLEVBQTJDO0FBQ3hEO0FBQ0FDLFlBQVUsRUFBRTtBQUY0QyxDQUEzQyxDQUFmO0FBS2UsZUFBZUMsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRixVQUFJQyxLQUFKO0FBQ0EsWUFBTUMsS0FBVyxHQUFHLEVBQXBCOztBQUNBLFVBQUdKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTQyxPQUFULEtBQXFCLFNBQXhCLEVBQW1DO0FBQ2pDSCxhQUFLLEdBQUdSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxhQUFwQjtBQUNBSCxhQUFLLENBQUNJLElBQU4sQ0FBWTtBQUNWTCxlQUFLLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxnQkFEVDtBQUVWQyxrQkFBUSxFQUFFO0FBRkEsU0FBWjtBQUtEOztBQUFBO0FBQ0QsVUFBR1YsR0FBRyxDQUFDSyxJQUFKLENBQVNDLE9BQVQsS0FBcUIsU0FBeEIsRUFBbUNILEtBQUssR0FBR1IsT0FBTyxDQUFDQyxHQUFSLENBQVlhLGdCQUFwQjtBQUNuQyxVQUFHVCxHQUFHLENBQUNLLElBQUosQ0FBU0MsT0FBVCxLQUFxQixRQUF4QixFQUFrQ0gsS0FBSyxHQUFHUixPQUFPLENBQUNDLEdBQVIsQ0FBWWUsZUFBcEIsQ0FaaEMsQ0FhRjs7QUFDQSxZQUFNQyxNQUEyQyxHQUFHO0FBQ2xEQyxZQUFJLEVBQUUsY0FENEM7QUFFbERDLDRCQUFvQixFQUFFLENBQUMsTUFBRCxDQUY0QjtBQUdsREMsa0JBQVUsRUFBRSxDQUNWO0FBQ0VaLGVBREY7QUFFRU8sa0JBQVEsRUFBRTtBQUZaLFNBRFUsRUFLVixHQUFHTixLQUxPLENBSHNDO0FBVWxEWSx5QkFBaUIsRUFBRVosS0FBSyxDQUFDYSxNQUFOLEdBQWUsQ0FBZixHQUFtQjtBQUFDQywyQkFBaUIsRUFBRTtBQUFwQixTQUFuQixHQUEyQ0MsU0FWWjtBQVdsREMsbUJBQVcsRUFBRyxHQUFFcEIsR0FBRyxDQUFDcUIsT0FBSixDQUFZQyxNQUFPLDBDQVhlO0FBWWxEQyxrQkFBVSxFQUFHLEdBQUV2QixHQUFHLENBQUNxQixPQUFKLENBQVlDLE1BQU87QUFaZ0IsT0FBcEQsQ0FkRSxDQTRCRjs7QUFDQSxZQUFNRSxlQUF3QyxHQUFHLE1BQU0vQixNQUFNLENBQUNnQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FDckRmLE1BRHFELENBQXZEO0FBSUFYLFNBQUcsQ0FBQzJCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsZUFBckI7QUFDRCxLQWxDRCxDQWtDRSxPQUFPTSxHQUFQLEVBQVk7QUFDWjdCLFNBQUcsQ0FBQzJCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRSxrQkFBVSxFQUFFLEdBQWQ7QUFBbUJDLGVBQU8sRUFBRUYsR0FBRyxDQUFDRTtBQUFoQyxPQUFyQjtBQUNEO0FBQ0YsR0F0Q0QsTUFzQ087QUFDTC9CLE9BQUcsQ0FBQ2dDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0FoQyxPQUFHLENBQUMyQixNQUFKLENBQVcsR0FBWCxFQUFnQk0sR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jaGVja291dF9zZXNzaW9ucy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5pbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSdcbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkhLCB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHJpcGUvc3RyaXBlLW5vZGUjY29uZmlndXJhdGlvblxuICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHByaWNlO1xuICAgICAgY29uc3QgdHJpYWw6YW55W10gPSBbXTtcbiAgICAgIGlmKHJlcS5ib2R5LnByaWNlSWQgPT09IFwib25ld2Vla1wiKSB7IFxuICAgICAgICBwcmljZSA9IHByb2Nlc3MuZW52LldFRUtfUFJJQ0VfSUQgXG4gICAgICAgIHRyaWFsLnB1c2goIHtcbiAgICAgICAgICBwcmljZTogcHJvY2Vzcy5lbnYuTU9OVEhMWV9QUklDRV9JRCAsXG4gICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgaWYocmVxLmJvZHkucHJpY2VJZCA9PT0gXCJtb250aGx5XCIpIHByaWNlID0gcHJvY2Vzcy5lbnYuTU9OVEhMWV9QUklDRV9JRDtcbiAgICAgIGlmKHJlcS5ib2R5LnByaWNlSWQgPT09IFwieWVhcmx5XCIpIHByaWNlID0gcHJvY2Vzcy5lbnYuWUVBUkxZX1BSSUNFX0lEO1xuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXG4gICAgICBjb25zdCBwYXJhbXM6IFN0cmlwZS5DaGVja291dC5TZXNzaW9uQ3JlYXRlUGFyYW1zID0ge1xuICAgICAgICBtb2RlOiBcInN1YnNjcmlwdGlvblwiLFxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi50cmlhbFxuICAgICAgICBdLFxuICAgICAgICBzdWJzY3JpcHRpb25fZGF0YTogdHJpYWwubGVuZ3RoID4gMCA/IHt0cmlhbF9wZXJpb2RfZGF5czogN30gOnVuZGVmaW5lZCxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vcmVzdWx0P3Nlc3Npb25faWQ9e0NIRUNLT1VUX1NFU1NJT05fSUR9YCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9wcmljaW5nYCxcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcylcbiAgICAgIGNvbnN0IGNoZWNrb3V0U2Vzc2lvbjogU3RyaXBlLkNoZWNrb3V0LlNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKFxuICAgICAgICBwYXJhbXNcbiAgICAgIClcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oY2hlY2tvdXRTZXNzaW9uKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdGF0dXNDb2RlOiA1MDAsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/checkout_sessions/index.ts\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stripe\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJpcGVcIj9mNWFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN0cmlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmlwZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///stripe\n");

/***/ })

/******/ });