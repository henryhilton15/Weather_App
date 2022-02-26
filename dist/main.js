/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! night.jpeg */ "./src/night.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Noto Sans', sans-serif;\n  }\n  \n  html {\n    font-size: 62.5%;\n  }\n  \n  html,\n  body {\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  .main-container {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n\n  img{\n    position: absolute;\n    top: 30%;\n    width: 30%;\n    margin-left: 60%;\n  }\n  \n  header {\n    height: 5.5rem;\n    position: relative;\n  }\n  \n  form {\n    height: 100%;\n  }\n  \n  .form-group {\n    float: right;\n    height: 80%;\n    position: relative;\n    margin: 2.5rem 3.5rem 0 0;\n  }\n  \n  .submit-btn {\n    position: absolute;\n    top: 27%;\n    left: 6%;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n  \n  .search-icon {\n    color: #f3f3f3;\n    font-size: 1.8rem;\n  }\n  \n  input[type='text'] {\n    width: 24rem;\n    height: 100%;\n    border: none;\n    outline: none;\n    background: rgba(255, 255, 255, 0.2);\n    padding: 0 0 0.3rem 4.5rem;\n    color: #ffffff;\n    font-size: 1.6rem;\n    border-radius: 0.5rem;\n  }\n  \n  input[type='text']::placeholder {\n    color: #f3f3f3;\n  }\n  \n  .error-msg {\n    display: hidden;\n    position: absolute;\n    left: 2rem;\n    color: #ff3333;\n    font-size: 15px;\n    display: none;\n    margin-top: 10px;\n  }\n  \n  .main-weather-display {\n    position: absolute;\n    top: 30%;\n    width: 90%;\n    margin-left: 10%;\n    color: #f3f3f3;\n  }\n  \n  .condition {\n    font-size: 2.2rem;\n    letter-spacing: 0.1rem;\n    padding-left: 0.3rem;\n    margin-bottom: 5px;\n  }\n  \n  .location {\n    font-size: 4rem;\n    line-height: 3.5rem;\n    margin-bottom: 1rem;\n    font-weight: 800;\n    letter-spacing: 0.1rem;\n  }\n  \n  .degrees {\n    font-size: 15rem;\n    font-weight: 900;\n    font-family: 'Nunito', sans-serif;\n    position: relative;\n  }\n  \n  .degrees::after {\n    content: '\\00B0 F';\n    font-size: 3rem;\n    position: absolute;\n    top: 1.8rem;\n    left: 17.3rem;\n  }\n  \n  \n  .weather-details {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.5rem;\n    font-weight: 900;\n    letter-spacing: 0.1rem;\n    position: absolute;\n    border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n    top: 45%;\n    left: 22.5rem;\n    height: 10rem;\n    padding-left: 3.5rem;\n    justify-content: space-between;\n  }\n  \n  .feels-like {\n    position: relative;\n  }\n  \n  .feels-like::after {\n    content: '\\00B0 F';\n    position: absolute;\n    bottom: 1.1rem;\n    left: 11.4rem;\n    font-size: 1rem;\n  }\n  \n  .humidity::after {\n    content: '%';\n  }\n  \n  .fade-in {\n    animation: fadeIn 0.2s;\n  }\n  \n  .fade-in2 {\n    animation: fadeIn2 1.1s;\n  }\n  \n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n      top: 6rem;\n    }\n    100% {\n      opacity: 0.5;\n      top: 4.4rem;\n    }\n  }\n  \n  @keyframes fadeIn2 {\n    0% {\n      opacity: 0.1;\n      transform: scale(0.9, 0.9);\n    }\n    100% {\n      opacity: 1;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oCAAoC;EACtC;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;IAEE,WAAW;IACX,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,yDAAmC;IACnC,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,kBAAkB;EACpB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,0BAA0B;IAC1B,cAAc;IACd,iBAAiB;IACjB,qBAAqB;EACvB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,eAAe;IACf,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,iBAAiB;IACjB,sBAAsB;IACtB,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,iCAAiC;IACjC,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,aAAa;EACf;;;EAGA;IACE,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,kDAAkD;IAClD,QAAQ;IACR,aAAa;IACb,aAAa;IACb,oBAAoB;IACpB,8BAA8B;EAChC;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE;MACE,UAAU;MACV,SAAS;IACX;IACA;MACE,YAAY;MACZ,WAAW;IACb;EACF;;EAEA;IACE;MACE,YAAY;MACZ,0BAA0B;IAC5B;IACA;MACE,UAAU;IACZ;EACF","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Noto Sans', sans-serif;\n  }\n  \n  html {\n    font-size: 62.5%;\n  }\n  \n  html,\n  body {\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  .main-container {\n    background-image: url('night.jpeg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n\n  img{\n    position: absolute;\n    top: 30%;\n    width: 30%;\n    margin-left: 60%;\n  }\n  \n  header {\n    height: 5.5rem;\n    position: relative;\n  }\n  \n  form {\n    height: 100%;\n  }\n  \n  .form-group {\n    float: right;\n    height: 80%;\n    position: relative;\n    margin: 2.5rem 3.5rem 0 0;\n  }\n  \n  .submit-btn {\n    position: absolute;\n    top: 27%;\n    left: 6%;\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n  \n  .search-icon {\n    color: #f3f3f3;\n    font-size: 1.8rem;\n  }\n  \n  input[type='text'] {\n    width: 24rem;\n    height: 100%;\n    border: none;\n    outline: none;\n    background: rgba(255, 255, 255, 0.2);\n    padding: 0 0 0.3rem 4.5rem;\n    color: #ffffff;\n    font-size: 1.6rem;\n    border-radius: 0.5rem;\n  }\n  \n  input[type='text']::placeholder {\n    color: #f3f3f3;\n  }\n  \n  .error-msg {\n    display: hidden;\n    position: absolute;\n    left: 2rem;\n    color: #ff3333;\n    font-size: 15px;\n    display: none;\n    margin-top: 10px;\n  }\n  \n  .main-weather-display {\n    position: absolute;\n    top: 30%;\n    width: 90%;\n    margin-left: 10%;\n    color: #f3f3f3;\n  }\n  \n  .condition {\n    font-size: 2.2rem;\n    letter-spacing: 0.1rem;\n    padding-left: 0.3rem;\n    margin-bottom: 5px;\n  }\n  \n  .location {\n    font-size: 4rem;\n    line-height: 3.5rem;\n    margin-bottom: 1rem;\n    font-weight: 800;\n    letter-spacing: 0.1rem;\n  }\n  \n  .degrees {\n    font-size: 15rem;\n    font-weight: 900;\n    font-family: 'Nunito', sans-serif;\n    position: relative;\n  }\n  \n  .degrees::after {\n    content: '\\00B0 F';\n    font-size: 3rem;\n    position: absolute;\n    top: 1.8rem;\n    left: 17.3rem;\n  }\n  \n  \n  .weather-details {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.5rem;\n    font-weight: 900;\n    letter-spacing: 0.1rem;\n    position: absolute;\n    border-left: 0.2rem solid rgba(255, 255, 255, 0.5);\n    top: 45%;\n    left: 22.5rem;\n    height: 10rem;\n    padding-left: 3.5rem;\n    justify-content: space-between;\n  }\n  \n  .feels-like {\n    position: relative;\n  }\n  \n  .feels-like::after {\n    content: '\\00B0 F';\n    position: absolute;\n    bottom: 1.1rem;\n    left: 11.4rem;\n    font-size: 1rem;\n  }\n  \n  .humidity::after {\n    content: '%';\n  }\n  \n  .fade-in {\n    animation: fadeIn 0.2s;\n  }\n  \n  .fade-in2 {\n    animation: fadeIn2 1.1s;\n  }\n  \n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n      top: 6rem;\n    }\n    100% {\n      opacity: 0.5;\n      top: 4.4rem;\n    }\n  }\n  \n  @keyframes fadeIn2 {\n    0% {\n      opacity: 0.1;\n      transform: scale(0.9, 0.9);\n    }\n    100% {\n      opacity: 1;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUI": () => (/* binding */ loadUI),
/* harmony export */   "triggerError": () => (/* binding */ triggerError),
/* harmony export */   "clearError": () => (/* binding */ clearError)
/* harmony export */ });
/* harmony import */ var _night_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./night.jpeg */ "./src/night.jpeg");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */



async function loadUI() {
  createHTML();
  const data = await (0,_api__WEBPACK_IMPORTED_MODULE_1__["default"])('Hanover, New Hampshire');
  updateWeatherDisplay(data);
}

function createHTML() {
  const main = document.createElement('div');
  main.className = 'main-container';
  document.body.appendChild(main);

  const header = document.createElement('header');
  main.appendChild(header);

  createForm(header);

  const weatherDisplay = document.createElement('div');
  weatherDisplay.className = 'main-weather-display';
  main.appendChild(weatherDisplay);

  const gif = document.createElement('img');
  gif.className = 'gif';
  main.appendChild(gif);

  createDisplay(weatherDisplay);
}

function createForm(header) {
  const form = document.createElement('form');
  form.addEventListener('submit', handleSubmit);
  header.appendChild(form);

  const formGroup = document.createElement('div');
  formGroup.className = 'form-group';
  form.appendChild(formGroup);

  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit-btn';
  submitBtn.addEventListener('click', handleSubmit);
  formGroup.appendChild(submitBtn);

  const inputSearch = document.createElement('input');
  inputSearch.type = 'text';
  inputSearch.placeholder = 'Search a City';
  formGroup.appendChild(inputSearch);

  const errorMsg = document.createElement('span');
  errorMsg.classList = 'error-msg';
  errorMsg.textContent = "Can't find that city!";
  formGroup.appendChild(errorMsg);

  const searchIcon = document.createElement('p');
  searchIcon.className = 'search-icon';
  searchIcon.textContent = '🔍';
  submitBtn.appendChild(searchIcon);
}

function createDisplay(weatherDisplay) {
  const generalInfo = document.createElement('div');
  generalInfo.className = 'general-info';
  weatherDisplay.appendChild(generalInfo);

  createGeneralInfo(generalInfo);

  const detailInfo = document.createElement('div');
  detailInfo.className = 'weather-details';
  weatherDisplay.appendChild(detailInfo);

  createDetailInfo(detailInfo);
}

function createGeneralInfo(generalInfo) {
  const condition = document.createElement('p');
  condition.className = 'condition';
  generalInfo.appendChild(condition);

  const location = document.createElement('h1');
  location.className = 'location';
  generalInfo.appendChild(location);

  const degrees = document.createElement('span');
  degrees.className = 'degrees';
  generalInfo.appendChild(degrees);
}

function createDetailInfo(detailInfo) {
  const feelsLike = document.createElement('p');
  feelsLike.className = 'feels-like';
  detailInfo.appendChild(feelsLike);

  const wind = document.createElement('p');
  wind.className = 'wind-mph';
  detailInfo.appendChild(wind);

  const humidity = document.createElement('p');
  humidity.className = 'humidity';
  detailInfo.appendChild(humidity);
}

function updateWeatherDisplay(newData) {
  if (newData == null) return;
  const weatherInfo = document.getElementsByClassName('main-weather-display');
  Array.from(weatherInfo).forEach((div) => {
    if (div.classList.contains('fade-in2')) {
      div.classList.remove('fade-in2');
      div.offsetWidth;
      div.classList.add('fade-in2');
    } else {
      div.classList.add('fade-in2');
    }
  });

  document.querySelector('.condition').textContent = newData.condition;
  document.querySelector('.location').textContent = `${newData.location}, ${newData.region}`;
  document.querySelector('.degrees').textContent = newData.currentTemp.f;
  document.querySelector('.feels-like').textContent = `Feels Like: ${newData.feelsLike.f}`;
  document.querySelector('.wind-mph').textContent = `Wind: ${newData.wind} mph`;
  document.querySelector('.humidity').textContent = `Humidity: ${newData.humidity}`;
}

function handleSubmit(e) {
  e.preventDefault();
  fetchWeather();
}

async function fetchWeather() {
  const input = document.querySelector('input[type="text"]');
  const userLocation = input.value;
  const newData = await (0,_api__WEBPACK_IMPORTED_MODULE_1__["default"])(userLocation);
  updateWeatherDisplay(newData);
}

function triggerError() {
  const error = document.querySelector('.error-msg');
  error.style.display = 'block';
  if (error.classList.contains('fade-in')) {
    error.style.display = 'none';
    error.classList.remove('fade-in2');
    error.offsetWidth;
    error.classList.add('fade-in');
    error.style.display = 'block';
  } else {
    error.classList.add('fade-in');
  }
}

function clearError() {
  const error = document.querySelector('.error-msg');
  error.style.display = 'none';
}




/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchWeatherAPI)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */


async function fetchWeatherAPI(userLocation) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${userLocation}`, { mode: 'cors' });
    const rawData = await response.json();
    const cleanData = parseJSON(rawData);
    (0,_UI__WEBPACK_IMPORTED_MODULE_0__.clearError)();
    loadGif(cleanData.condition);
    return cleanData;
  } catch {
    (0,_UI__WEBPACK_IMPORTED_MODULE_0__.triggerError)();
    return null;
  }
}

function parseJSON(rawData) {
  // grab all the data i want to display on the page
  const myData = {
    condition: rawData.current.condition.text,
    feelsLike: {
      f: Math.round(rawData.current.feelslike_f),
      c: Math.round(rawData.current.feelslike_c),
    },
    currentTemp: {
      f: Math.round(rawData.current.temp_f),
      c: Math.round(rawData.current.temp_c),
    },
    wind: Math.round(rawData.current.wind_mph),
    humidity: rawData.current.humidity,
    location: rawData.location.name.toUpperCase(),
  };

  // if in the US, add state
  // if not, add country
  if (rawData.location.country === 'United States of America') {
    myData.region = rawData.location.region.toUpperCase();
  } else {
    myData.region = rawData.location.country.toUpperCase();
  }

  return myData;
}

async function loadGif(text) {
  const img = document.querySelector('img');
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IUtY7B7h0x01MII4L6Kh8lcVyZXfGNFE&s=${text}`, { mode: 'cors' });
  const JSON = await response.json();
  img.src = JSON.data.images.original.url;
}


/***/ }),

/***/ "./src/night.jpeg":
/*!************************!*\
  !*** ./src/night.jpeg ***!
  \************************/
/***/ ((module) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



(0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadUI)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwibmlnaHQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIFxcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxuICB9XFxuICBcXG4gIGh0bWwsXFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICBcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbiAgfVxcbiAgXFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDUuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgXFxuICBmb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuZm9ybS1ncm91cCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAyLjVyZW0gMy41cmVtIDAgMDtcXG4gIH1cXG4gIFxcbiAgLnN1Ym1pdC1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjclO1xcbiAgICBsZWZ0OiA2JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5zZWFyY2gtaWNvbiB7XFxuICAgIGNvbG9yOiAjZjNmM2YzO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG4gIFxcbiAgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxuICBcXG4gIGlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gIH1cXG4gIFxcbiAgLmVycm9yLW1zZyB7XFxuICAgIGRpc3BsYXk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAycmVtO1xcbiAgICBjb2xvcjogI2ZmMzMzMztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAubWFpbi13ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gIH1cXG4gIFxcbiAgLmNvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcbiAgXFxuICAubG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB9XFxuICBcXG4gIC5kZWdyZWVzIHtcXG4gICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICBcXG4gIC5kZWdyZWVzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMDBCMCBGJztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMS44cmVtO1xcbiAgICBsZWZ0OiAxNy4zcmVtO1xcbiAgfVxcbiAgXFxuICBcXG4gIC53ZWF0aGVyLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgdG9wOiA0NSU7XFxuICAgIGxlZnQ6IDIyLjVyZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICBcXG4gIC5mZWVscy1saWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgXFxuICAuZmVlbHMtbGlrZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcXDAwQjAgRic7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxLjFyZW07XFxuICAgIGxlZnQ6IDExLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLmh1bWlkaXR5OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICclJztcXG4gIH1cXG4gIFxcbiAgLmZhZGUtaW4ge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xcbiAgfVxcbiAgXFxuICAuZmFkZS1pbjIge1xcbiAgICBhbmltYXRpb246IGZhZGVJbjIgMS4xcztcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0b3A6IDZyZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgIHRvcDogNC40cmVtO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZmFkZUluMiB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwLjE7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx5REFBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1Isa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtFQUNmOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtEQUFrRDtJQUNsRCxRQUFRO0lBQ1IsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDVixTQUFTO0lBQ1g7SUFDQTtNQUNFLFlBQVk7TUFDWixXQUFXO0lBQ2I7RUFDRjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtNQUNaLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgfVxcbiAgXFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG4gIH1cXG4gIFxcbiAgaHRtbCxcXG4gIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG4gIFxcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCduaWdodC5qcGVnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbiAgfVxcbiAgXFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDUuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgXFxuICBmb3JtIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuZm9ybS1ncm91cCB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAyLjVyZW0gMy41cmVtIDAgMDtcXG4gIH1cXG4gIFxcbiAgLnN1Ym1pdC1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjclO1xcbiAgICBsZWZ0OiA2JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5zZWFyY2gtaWNvbiB7XFxuICAgIGNvbG9yOiAjZjNmM2YzO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG4gIFxcbiAgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gICAgd2lkdGg6IDI0cmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgICBwYWRkaW5nOiAwIDAgMC4zcmVtIDQuNXJlbTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxuICBcXG4gIGlucHV0W3R5cGU9J3RleHQnXTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gIH1cXG4gIFxcbiAgLmVycm9yLW1zZyB7XFxuICAgIGRpc3BsYXk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAycmVtO1xcbiAgICBjb2xvcjogI2ZmMzMzMztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAubWFpbi13ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gIH1cXG4gIFxcbiAgLmNvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcbiAgXFxuICAubG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICB9XFxuICBcXG4gIC5kZWdyZWVzIHtcXG4gICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICBcXG4gIC5kZWdyZWVzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMDBCMCBGJztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMS44cmVtO1xcbiAgICBsZWZ0OiAxNy4zcmVtO1xcbiAgfVxcbiAgXFxuICBcXG4gIC53ZWF0aGVyLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItbGVmdDogMC4ycmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgdG9wOiA0NSU7XFxuICAgIGxlZnQ6IDIyLjVyZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICBcXG4gIC5mZWVscy1saWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgXFxuICAuZmVlbHMtbGlrZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcXDAwQjAgRic7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxLjFyZW07XFxuICAgIGxlZnQ6IDExLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIFxcbiAgLmh1bWlkaXR5OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICclJztcXG4gIH1cXG4gIFxcbiAgLmZhZGUtaW4ge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xcbiAgfVxcbiAgXFxuICAuZmFkZS1pbjIge1xcbiAgICBhbmltYXRpb246IGZhZGVJbjIgMS4xcztcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0b3A6IDZyZW07XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgIHRvcDogNC40cmVtO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgZmFkZUluMiB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwLjE7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCAnLi9uaWdodC5qcGVnJztcbmltcG9ydCBmZXRjaFdlYXRoZXJBUEkgZnJvbSAnLi9hcGknO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkVUkoKSB7XG4gIGNyZWF0ZUhUTUwoKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckFQSSgnSGFub3ZlciwgTmV3IEhhbXBzaGlyZScpO1xuICB1cGRhdGVXZWF0aGVyRGlzcGxheShkYXRhKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSFRNTCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTmFtZSA9ICdtYWluLWNvbnRhaW5lcic7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjcmVhdGVGb3JtKGhlYWRlcik7XG5cbiAgY29uc3Qgd2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckRpc3BsYXkuY2xhc3NOYW1lID0gJ21haW4td2VhdGhlci1kaXNwbGF5JztcbiAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyRGlzcGxheSk7XG5cbiAgY29uc3QgZ2lmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGdpZi5jbGFzc05hbWUgPSAnZ2lmJztcbiAgbWFpbi5hcHBlbmRDaGlsZChnaWYpO1xuXG4gIGNyZWF0ZURpc3BsYXkod2VhdGhlckRpc3BsYXkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKGhlYWRlcikge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUdyb3VwLmNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwJztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtR3JvdXApO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdC1idG4nO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTdWJtaXQpO1xuICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0U2VhcmNoLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0U2VhcmNoLnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBhIENpdHknO1xuICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXRTZWFyY2gpO1xuXG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlcnJvck1zZy5jbGFzc0xpc3QgPSAnZXJyb3ItbXNnJztcbiAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIkNhbid0IGZpbmQgdGhhdCBjaXR5IVwiO1xuICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZXJyb3JNc2cpO1xuXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNlYXJjaEljb24uY2xhc3NOYW1lID0gJ3NlYXJjaC1pY29uJztcbiAgc2VhcmNoSWNvbi50ZXh0Q29udGVudCA9ICfwn5SNJztcbiAgc3VibWl0QnRuLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXNwbGF5KHdlYXRoZXJEaXNwbGF5KSB7XG4gIGNvbnN0IGdlbmVyYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdlbmVyYWxJbmZvLmNsYXNzTmFtZSA9ICdnZW5lcmFsLWluZm8nO1xuICB3ZWF0aGVyRGlzcGxheS5hcHBlbmRDaGlsZChnZW5lcmFsSW5mbyk7XG5cbiAgY3JlYXRlR2VuZXJhbEluZm8oZ2VuZXJhbEluZm8pO1xuXG4gIGNvbnN0IGRldGFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGV0YWlsSW5mby5jbGFzc05hbWUgPSAnd2VhdGhlci1kZXRhaWxzJztcbiAgd2VhdGhlckRpc3BsYXkuYXBwZW5kQ2hpbGQoZGV0YWlsSW5mbyk7XG5cbiAgY3JlYXRlRGV0YWlsSW5mbyhkZXRhaWxJbmZvKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2VuZXJhbEluZm8oZ2VuZXJhbEluZm8pIHtcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25kaXRpb24uY2xhc3NOYW1lID0gJ2NvbmRpdGlvbic7XG4gIGdlbmVyYWxJbmZvLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBsb2NhdGlvbi5jbGFzc05hbWUgPSAnbG9jYXRpb24nO1xuICBnZW5lcmFsSW5mby5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgY29uc3QgZGVncmVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVncmVlcy5jbGFzc05hbWUgPSAnZGVncmVlcyc7XG4gIGdlbmVyYWxJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZXMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWxJbmZvKGRldGFpbEluZm8pIHtcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmZWVsc0xpa2UuY2xhc3NOYW1lID0gJ2ZlZWxzLWxpa2UnO1xuICBkZXRhaWxJbmZvLmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2luZC5jbGFzc05hbWUgPSAnd2luZC1tcGgnO1xuICBkZXRhaWxJbmZvLmFwcGVuZENoaWxkKHdpbmQpO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBodW1pZGl0eS5jbGFzc05hbWUgPSAnaHVtaWRpdHknO1xuICBkZXRhaWxJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlckRpc3BsYXkobmV3RGF0YSkge1xuICBpZiAobmV3RGF0YSA9PSBudWxsKSByZXR1cm47XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi13ZWF0aGVyLWRpc3BsYXknKTtcbiAgQXJyYXkuZnJvbSh3ZWF0aGVySW5mbykuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhZGUtaW4yJykpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluMicpO1xuICAgICAgZGl2Lm9mZnNldFdpZHRoO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdmYWRlLWluMicpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpLnRleHRDb250ZW50ID0gbmV3RGF0YS5jb25kaXRpb247XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpLnRleHRDb250ZW50ID0gYCR7bmV3RGF0YS5sb2NhdGlvbn0sICR7bmV3RGF0YS5yZWdpb259YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZ3JlZXMnKS50ZXh0Q29udGVudCA9IG5ld0RhdGEuY3VycmVudFRlbXAuZjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke25ld0RhdGEuZmVlbHNMaWtlLmZ9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtbXBoJykudGV4dENvbnRlbnQgPSBgV2luZDogJHtuZXdEYXRhLndpbmR9IG1waGA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke25ld0RhdGEuaHVtaWRpdHl9YDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBmZXRjaFdlYXRoZXIoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG4gIGNvbnN0IHVzZXJMb2NhdGlvbiA9IGlucHV0LnZhbHVlO1xuICBjb25zdCBuZXdEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyQVBJKHVzZXJMb2NhdGlvbik7XG4gIHVwZGF0ZVdlYXRoZXJEaXNwbGF5KG5ld0RhdGEpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyRXJyb3IoKSB7XG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1zZycpO1xuICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgaWYgKGVycm9yLmNsYXNzTGlzdC5jb250YWlucygnZmFkZS1pbicpKSB7XG4gICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluMicpO1xuICAgIGVycm9yLm9mZnNldFdpZHRoO1xuICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJFcnJvcigpIHtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbXNnJyk7XG4gIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmV4cG9ydCB7XG4gIGxvYWRVSSxcbiAgdHJpZ2dlckVycm9yLFxuICBjbGVhckVycm9yLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7IHRyaWdnZXJFcnJvciwgY2xlYXJFcnJvciB9IGZyb20gJy4vVUknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJBUEkodXNlckxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xOTg2NDgwNjU2ZWM0OTBkOTUwMjA0OTIzMjAyNjExJnE9JHt1c2VyTG9jYXRpb259YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjbGVhbkRhdGEgPSBwYXJzZUpTT04ocmF3RGF0YSk7XG4gICAgY2xlYXJFcnJvcigpO1xuICAgIGxvYWRHaWYoY2xlYW5EYXRhLmNvbmRpdGlvbik7XG4gICAgcmV0dXJuIGNsZWFuRGF0YTtcbiAgfSBjYXRjaCB7XG4gICAgdHJpZ2dlckVycm9yKCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VKU09OKHJhd0RhdGEpIHtcbiAgLy8gZ3JhYiBhbGwgdGhlIGRhdGEgaSB3YW50IHRvIGRpc3BsYXkgb24gdGhlIHBhZ2VcbiAgY29uc3QgbXlEYXRhID0ge1xuICAgIGNvbmRpdGlvbjogcmF3RGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGZlZWxzTGlrZToge1xuICAgICAgZjogTWF0aC5yb3VuZChyYXdEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YpLFxuICAgICAgYzogTWF0aC5yb3VuZChyYXdEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MpLFxuICAgIH0sXG4gICAgY3VycmVudFRlbXA6IHtcbiAgICAgIGY6IE1hdGgucm91bmQocmF3RGF0YS5jdXJyZW50LnRlbXBfZiksXG4gICAgICBjOiBNYXRoLnJvdW5kKHJhd0RhdGEuY3VycmVudC50ZW1wX2MpLFxuICAgIH0sXG4gICAgd2luZDogTWF0aC5yb3VuZChyYXdEYXRhLmN1cnJlbnQud2luZF9tcGgpLFxuICAgIGh1bWlkaXR5OiByYXdEYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgbG9jYXRpb246IHJhd0RhdGEubG9jYXRpb24ubmFtZS50b1VwcGVyQ2FzZSgpLFxuICB9O1xuXG4gIC8vIGlmIGluIHRoZSBVUywgYWRkIHN0YXRlXG4gIC8vIGlmIG5vdCwgYWRkIGNvdW50cnlcbiAgaWYgKHJhd0RhdGEubG9jYXRpb24uY291bnRyeSA9PT0gJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScpIHtcbiAgICBteURhdGEucmVnaW9uID0gcmF3RGF0YS5sb2NhdGlvbi5yZWdpb24udG9VcHBlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBteURhdGEucmVnaW9uID0gcmF3RGF0YS5sb2NhdGlvbi5jb3VudHJ5LnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICByZXR1cm4gbXlEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkR2lmKHRleHQpIHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUlVdFk3QjdoMHgwMU1JSTRMNktoOGxjVnlaWGZHTkZFJnM9JHt0ZXh0fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBpbWcuc3JjID0gSlNPTi5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbG9hZFVJIH0gZnJvbSAnLi9VSSc7XG5cbmxvYWRVSSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9