/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()(); // ...\n\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n@media (prefers-reduced-motion: no-preference) {\\n  .App-logo {\\n    animation: App-logo-spin infinite 20s linear;\\n  }\\n}\\n\\n.App-header {\\n  background-color: #282c34;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n@keyframes App-logo-spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _component_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Home */ \"./src/component/Home.js\");\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/component/Home.css":
/*!********************************!*\
  !*** ./src/component/Home.css ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* global styles */\\n\\nbody {\\n  background-color: #f2f2f2;\\n  font-size: 100%;\\n  font-family: -apple-system,BlinkMacSystemFont,\\\"Segoe UI\\\",Roboto,\\\"Helvetica Neue\\\",Arial,\\\"Noto Sans\\\",sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\",\\\"Segoe UI Symbol\\\",\\\"Noto Color Emoji\\\";\\n  line-height: 1.5;\\n\\tmargin: 0 auto !important; \\n\\tfloat: none !important; \\n  padding: 1rem;\\n}\\n\\n*, ::after, ::before {\\n  box-sizing: border-box;\\n}\\n\\n\\n/* grid styles */\\n\\n.container { \\n  max-width: 1440px;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  background-color: #f2f2f2;\\n}\\n\\n.column {\\n  --columns: 12; /* number of columns in the grid system */\\n  --width: var(--width-mobile, 0); /* width of the element */\\n  \\n  background-color: #f2f2f2;\\n  border-radius: 8px;\\n  padding: 10px;\\n  flex-basis: calc(var(--width) / var(--columns) * 100%);\\n}\\n\\n\\n.card{\\ntext-align:left;\\npadding:1rem;\\nbackground-color: #fff;\\nborder-radius: 10px;\\nmargin: 0px 5px 15px 5px;\\nwidth:98%;\\ndisplay: inline-table;\\n}\\n\\n.card img{\\nwidth:100%;\\nheight:auto;\\npadding:10px;\\nbackground-color:#f2f2f2;\\n}\\n\\n.card p{\\n\\tfont-size: .9rem;\\n}\\n\\n.filterWrapper{\\n\\t\\tbackground-color: #fff;\\n    border-radius: 10px;\\n\\t\\n}\\n\\n.filterOption{     \\n\\t\\twidth: 40%; \\n    display: inline-block;\\n    text-align: center;\\n    margin: 10px;\\n    padding: 8px;\\n    border-radius: 5px;\\n    border: none;\\n}\\n\\n.lightGreen{\\n    background-color: #c5e09b;\\n}\\n\\n.darkGreen{\\n    background-color: #7cba01;\\n}\\n    \\n\\n.filterTitle{\\n\\t\\twidth : 80%;\\n\\t\\tborder-bottom: 2px solid #000;\\n\\t\\tmargin: 20px auto 0px auto;\\n\\t\\ttext-align: center;\\n}\\n\\n\\n.heading{\\n\\t\\tpadding: 20px 20px 0px 20px;\\n\\t\\tfont-weight: bold;\\n\\t\\ttext-align: left;\\n}\\n\\n\\n@media (min-width: 701px) {\\n  .column {\\n    --width-tablet: var(--width-mobile);\\n    --width: var(--width-tablet);\\n  }\\n     \\n\\t\\t.filterOption{width: 30%;}\\n\\t\\t.card{width: 47%; height: max-content;}\\n}\\n\\n@media (min-width: 1025px) {\\n  .column {\\n    --width-desktop: var(--width-tablet);\\n    --width: var(--width-desktop);\\n  }\\n  .filterOption{width: 30%;}\\n  .card{width: 23%; height: max-content;}\\n}\\n\\n\\n/* sections */\\n\\n.header {\\n  --width-mobile: 12;\\n\\tbackground-color:#f2f2f2;\\n\\tpadding: 10px;\\n\\tfont-weight: bold;\\n\\ttext-align: left;\\n\\tfont-size: 1.4rem;\\n}\\n\\n.content {\\n  --width-mobile: 12;\\n  --width-tablet: 8;\\n  --width-desktop: 9;\\n  height: max-content;\\n  text-align: left;\\n}\\n\\n.sidebar {\\n  --width-mobile: 12;\\n   --width-tablet: 4;\\n  --width-desktop: 3;\\n  height: max-content;\\n}\\n\\n.footer{\\n\\tpadding: 10px;\\n\\tfont-weight: bold;\\n\\tfont-size: 1rem;\\n\\tmargin: 0 auto;\\n\\twidth: 100%;\\n\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/component/Home.css?");

/***/ }),

/***/ "./src/component/Home.js":
/*!*******************************!*\
  !*** ./src/component/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ \"./src/component/Home.css\");\n\n\n\n\nconst Home = () => {\n  // holds the response data from API\n  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]); // selected \"Launch Year\" from Filter\n\n  const [launchYear, setLaunchYear] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"); // selected \"Success Launch\" from Filter\n\n  const [successLaunch, setSuccessLaunch] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"); // selected \"Success Landing\" from Filter\n\n  const [successLand, setSuccessLand] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"); // A flag/check to process the data to display/execute set of code snippet\n\n  const [isDataLoaded, setIsDataLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    /*\n     * When the isDataLoaded is set false, make API request and set isDataLoaded to true\n     * Preparing params payload based on filters selection for the API request \n     * preparing URL params to be set based on filter selection\n     */\n    if (!isDataLoaded) {\n      let params = {\n        limit: 100\n      };\n      let urlParams = \"\";\n\n      if (launchYear) {\n        params.launch_year = launchYear;\n        urlParams += urlParams ? \"&launch_year=\" + launchYear : \"?launch_year=\" + launchYear;\n      }\n\n      if (successLaunch) {\n        params.launch_success = successLaunch;\n        urlParams += urlParams ? \"&launch_success=\" + successLaunch : \"?launch_success=\" + successLaunch;\n      }\n\n      if (successLand) {\n        params.land_success = successLand;\n        urlParams += urlParams ? \"&land_success=\" + successLand : \"?land_success=\" + successLand;\n      }\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://api.spacexdata.com/v3/launches\", {\n        params: params\n      }).then(res => {\n        let data = res.data;\n        setData(data);\n        setIsDataLoaded(true); // change URL based on filtered data\t\t\t\n\n        window.history.pushState(null, \"\", \"/\" + urlParams);\n      });\n    }\n  }, [isDataLoaded, launchYear, successLaunch, successLand]);\n  /*\n   * An event when \"Launch Year\" is filtered\n   * To toggle selection/deselection, setting state value \n   */\n\n  const handleClickLaunchYear = event => {\n    let selectedLaunchYear = parseInt(event.target.innerText);\n\n    if (selectedLaunchYear === launchYear) {\n      selectedLaunchYear = \"\";\n    }\n\n    setLaunchYear(selectedLaunchYear);\n    setIsDataLoaded(false);\n  };\n  /*\n   * An event when \"Successful Launch\" is filtered\n   * To toggle selection/deselection, setting state value \n   */\n\n\n  const handleClickLaunchSuccess = event => {\n    let selectedLaunchSuccess = event.target.innerText;\n\n    if (selectedLaunchSuccess === successLaunch) {\n      selectedLaunchSuccess = \"\";\n    }\n\n    setSuccessLaunch(selectedLaunchSuccess);\n    setIsDataLoaded(false);\n  };\n  /*\n   * An event when \"Successful Landing\" is filtered\n   * To toggle selection/deselection, setting state value \n   */\n\n\n  const handleClickLandSuccess = event => {\n    let selectedLandSuccess = event.target.innerText;\n\n    if (selectedLandSuccess === successLand) {\n      selectedLandSuccess = \"\";\n    }\n\n    setSuccessLand(selectedLandSuccess);\n    setIsDataLoaded(false);\n  }; // Array for \"Launch Year\" filter\n\n\n  let years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];\n  let displayYears = [];\n\n  for (const [i, v] of years.entries()) {\n    let launchYearClass = \"lightGreen\";\n\n    if (v === parseInt(launchYear)) {\n      launchYearClass = \"darkGreen\";\n    }\n\n    displayYears.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: `filterOption ${launchYearClass}`,\n      id: `year${i}`,\n      key: `keyYear${i}`,\n      onClick: handleClickLaunchYear\n    }, v));\n  }\n\n  ; // Successful Launch filter \n\n  let launchStatus = [\"true\", \"false\"];\n  let displayLaunchStatus = [];\n\n  for (const [i, v] of launchStatus.entries()) {\n    let successClass = \"lightGreen\";\n\n    if (v === successLaunch) {\n      successClass = \"darkGreen\";\n    }\n\n    displayLaunchStatus.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: `filterOption ${successClass}`,\n      id: `launch${i}`,\n      key: `keySuccess${i}`,\n      onClick: handleClickLaunchSuccess\n    }, v));\n  }\n\n  ; // Successful Landing filter\t\n\n  let landStatus = [\"true\", \"false\"];\n  let displayLandStatus = [];\n\n  for (const [i, v] of landStatus.entries()) {\n    let successClass = \"lightGreen\";\n\n    if (v === successLand) {\n      successClass = \"darkGreen\";\n    }\n\n    displayLandStatus.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: `filterOption ${successClass}`,\n      id: `land${i}`,\n      key: `keyLand${i}`,\n      onClick: handleClickLandSuccess\n    }, v));\n  }\n\n  ; // preparing view data from response state data\t\n\n  let cardsData = data.map((value, index) => {\n    let launchStatusValue = \"\";\n\n    if (value.launch_success !== null) {\n      launchStatusValue = value.launch_success.toString();\n    }\n\n    ;\n    let landSuccess = \"\";\n\n    if (value.rocket.first_stage.cores[0].land_success !== null) {\n      landSuccess = value.rocket.first_stage.cores[0].land_success.toString();\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card\",\n      key: value.flight_number\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      alt: value.mission_name,\n      src: value.links.mission_patch_small\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, value.mission_name, \" #\", value.flight_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Mission Ids : \"), value.mission_id.join(\", \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Launch year : \"), value.launch_year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Successful launch : \"), launchStatusValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"Successful landing : \"), landSuccess));\n  }); // If Launch Programs data available, display else display message with image\t\t\n\n  let bodyData = cardsData.length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: \"content column\"\n  }, cardsData) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: \"20px\",\n      margin: \"0 auto\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      paddingBottom: \"0px\",\n      margin: \"60px 0 30px 0 \"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      fontSize: \"100px\"\n    },\n    role: \"img\",\n    \"aria-label\": \"No Data\",\n    alt: \"Invalid input\"\n  }, \"\\uD83D\\uDE1F\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      padding: \"0px 0px 10px 0px \",\n      margin: \"0px 0px 0px 0px\"\n    }\n  }, \"There is no data available for selected filter/s. \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Please try again with new selections!!!\"));\n  /* \n   * if data flag is true, display left panel (Filter options) and right panel \n     (launch programs view) othewise display a loader\n   */\n\n  return isDataLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"header column\"\n  }, \"SpaceX Launch Programs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n    className: \"sidebar column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filterWrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"heading\"\n  }, \"Filters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filterTitle\"\n  }, \"Launch Year\"), displayYears, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filterTitle\"\n  }, \"Successful Launch\"), displayLaunchStatus, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filterTitle\"\n  }, \"Successful Landing\"), displayLandStatus)), bodyData, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    className: \"footer\"\n  }, \"Developed By : Swati Agarwal\"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"loading...\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/component/Home.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });