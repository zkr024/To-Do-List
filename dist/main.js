/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  margin: 100px auto;\\r\\n  width: 500px;\\r\\n  box-shadow: 1px 1px 15px 8px #888;\\r\\n}\\r\\n\\r\\n.top {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 10px 15px;\\r\\n  border-bottom: 1px solid #555;\\r\\n}\\r\\n\\r\\n.top h2 {\\r\\n  margin: 0;\\r\\n  font-family: arial, sans-serif;\\r\\n  font-weight: 300;\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n.load {\\r\\n  font-size: 20px;\\r\\n  color: #555;\\r\\n}\\r\\n\\r\\n#warning {\\r\\n  margin-left: 15px;\\r\\n  color: #f00;\\r\\n}\\r\\n\\r\\n.addListContainer {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 10px 15px;\\r\\n  border-bottom: 1px solid #555;\\r\\n}\\r\\n\\r\\n.addList {\\r\\n  width: 80%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.add {\\r\\n  font-size: 15px;\\r\\n  color: #555;\\r\\n  margin-right: 3px;\\r\\n}\\r\\n\\r\\n.listContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n#list {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.activity {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 10px 15px;\\r\\n  border-bottom: 1px solid #555;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.activity p {\\r\\n  margin: 0 0 0 10px;\\r\\n  width: 70%;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.decoration {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.move,\\r\\n.delete {\\r\\n  align-self: flex-end;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  bottom: 4px;\\r\\n  color: #555;\\r\\n  margin-right: 15px;\\r\\n}\\r\\n\\r\\n.clearAll {\\r\\n  text-decoration: none;\\r\\n  color: #777;\\r\\n  padding: 10px 0;\\r\\n  background-color: #ddd;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_loadevents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadevents.js */ \"./src/modules/loadevents.js\");\n\r\n\r\n\r\n(0,_modules_loadevents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nclass Tasks {\r\n  constructor() {\r\n    this.activityData = {};\r\n    this.activities = [];\r\n    this.activitiesDone = [];\r\n  }\r\n\r\n  addRecord(activity, completed, index) {\r\n    this.activityData = { activity, completed, index };\r\n    this.activities.push(this.activityData);\r\n  }\r\n\r\n  local() {\r\n    window.localStorage.setItem('activities', JSON.stringify(this.activities));\r\n    this.updateList();\r\n  }\r\n\r\n  loadLocal() {\r\n    window.localStorage.setItem('activities', JSON.stringify(this.activities));\r\n  }\r\n\r\n  doneActivities() {\r\n    window.localStorage.setItem('done', JSON.stringify(this.activitiesDone));\r\n  }\r\n\r\n  updateList() {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.innerHTML = '';\r\n    this.activities = JSON.parse(localStorage.getItem('activities'));\r\n    if (this.activities === null) {\r\n      this.activities = [];\r\n    }\r\n    this.activities.forEach((element) => {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.innerHTML += `\r\n          <li class=\"activity\" completed = ${element.completed} index = ${element.index}>\r\n            <input type=\"checkbox\" class=\"checkbox\">\r\n            <p class= 'toDo' contenteditable=\"true\">${element.activity}</p>\r\n            <a class=\"move\">\r\n              <span class=\"material-icons-outlined\">more_vert</span>\r\n            </a>\r\n            <a class=\"delete hide\">\r\n              <span class=\"material-icons-outlined\">delete</span>\r\n            </a>\r\n          </li>\r\n        `;\r\n    });\r\n  }\r\n\r\n  eliminate(data) {\r\n    const indexArray = this.activities.findIndex((element) => element.activity === data);\r\n    this.activities.splice(indexArray, 1);\r\n    for (let i = 0; i < this.activities.length; i += 1) {\r\n      this.activities[i].index = i + 1;\r\n    }\r\n    this.local();\r\n  }\r\n\r\n  replace(data, position) {\r\n    position = parseInt(position, 10);\r\n    const item = {\r\n      activity: data,\r\n      completed: false,\r\n      index: position,\r\n    };\r\n    this.activities.splice(position - 1, 1, item);\r\n    this.local();\r\n  }\r\n\r\n  checkMark(data, status, position) {\r\n    position = parseInt(position, 10);\r\n    const item = {\r\n      activity: data,\r\n      completed: status,\r\n      index: position,\r\n    };\r\n    this.activities.splice(position - 1, 1, item);\r\n    this.loadLocal();\r\n    this.doneActivities();\r\n  }\r\n\r\n  removeTemp(data) {\r\n    const indexArray = this.activitiesDone.findIndex((element) => element === data);\r\n    this.activitiesDone.splice(indexArray, 1);\r\n    this.doneActivities();\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/class.js?");

/***/ }),

/***/ "./src/modules/eventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"completed\": () => (/* binding */ completed),\n/* harmony export */   \"deleteActivity\": () => (/* binding */ deleteActivity),\n/* harmony export */   \"editActivity\": () => (/* binding */ editActivity),\n/* harmony export */   \"load\": () => (/* binding */ load),\n/* harmony export */   \"newActivity\": () => (/* binding */ newActivity),\n/* harmony export */   \"preventEnter\": () => (/* binding */ preventEnter)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class.js */ \"./src/modules/class.js\");\n\r\n\r\n\r\nconst tasks = new _class_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nconst newActivity = _variables_js__WEBPACK_IMPORTED_MODULE_0__.addListContainer.addEventListener('keyup', (e) => {\r\n  if (e.keyCode === 13) {\r\n    if (e.target.value === '') {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.warning.innerHTML = 'Please enter a task';\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.warning.classList.remove('hide');\r\n      setTimeout(() => {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.warning.innerHTML = '';\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.warning.classList.add('hide');\r\n      }, 2000);\r\n    } else {\r\n      const newValue = e.target.value;\r\n      tasks.addRecord(newValue, false, tasks.activities.length + 1);\r\n      tasks.local();\r\n      e.target.value = '';\r\n    }\r\n  }\r\n});\r\n\r\nconst deleteActivity = _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('click', (e) => {\r\n  if (e.target.tagName === 'P') {\r\n    e.path[1].childNodes[5].classList.add('hide');\r\n    e.path[1].childNodes[7].classList.remove('hide');\r\n  } else if (e.target.innerHTML === 'delete') {\r\n    const value = e.path[2].childNodes[3].innerHTML;\r\n    tasks.eliminate(value);\r\n  }\r\n});\r\n\r\nconst preventEnter = _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('keydown', (e) => {\r\n  if (e.keyCode === 13) {\r\n    e.preventDefault();\r\n  }\r\n});\r\n\r\nconst editActivity = _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('keyup', (e) => {\r\n  if (e.keyCode === 13) {\r\n    const newValue = e.target.innerHTML;\r\n    const position = e.path[1].attributes[2].value;\r\n    tasks.replace(newValue, position);\r\n  }\r\n});\r\n\r\nconst completed = _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.addEventListener('click', (e) => {\r\n  if (e.target && e.target.tagName === 'INPUT') {\r\n    let status;\r\n    let position;\r\n    let data;\r\n\r\n    if (e.target.checked) {\r\n      status = e.target.parentNode.attributes.completed.value;\r\n      status = true;\r\n      data = e.target.parentNode.childNodes[3].innerHTML;\r\n      position = e.target.parentNode.attributes[2].value;\r\n      e.target.parentNode.classList.toggle('decoration');\r\n      tasks.activitiesDone.push(data);\r\n      tasks.checkMark(data, status, position);\r\n    } else {\r\n      status = e.target.parentNode.attributes.completed.value;\r\n      status = false;\r\n      data = e.target.parentNode.childNodes[3].innerHTML;\r\n      position = e.target.parentNode.attributes[2].value;\r\n      e.target.parentNode.classList.toggle('decoration');\r\n      tasks.removeTemp(data);\r\n      tasks.checkMark(data, status, position);\r\n    }\r\n  }\r\n});\r\n\r\nconst clearAll = _variables_js__WEBPACK_IMPORTED_MODULE_0__.clear.addEventListener('click', () => {\r\n  tasks.activitiesDone = JSON.parse(localStorage.getItem('done'));\r\n  if (tasks.activitiesDone === null) {\r\n    tasks.activitiesDone = [];\r\n  }\r\n  tasks.activitiesDone.forEach((element) => tasks.eliminate(element));\r\n  tasks.activitiesDone = [];\r\n});\r\n\r\nconst load = document.addEventListener('DOMContentLoaded', () => {\r\n  tasks.updateList();\r\n  for (let i = 0; i < tasks.activities.length; i += 1) {\r\n    if (tasks.activities[i].completed) {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.children[i].classList.toggle('decoration');\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.list.children[i].children[0].checked = true;\r\n    }\r\n  }\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/modules/eventListeners.js?");

/***/ }),

/***/ "./src/modules/loadevents.js":
/*!***********************************!*\
  !*** ./src/modules/loadevents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ \"./src/modules/eventListeners.js\");\n\r\n\r\nconst loadEvents = () => {\r\n  _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.load();\r\n  _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.newActivity();\r\n  _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.deleteActivity();\r\n  _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.preventEnter();\r\n  _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.editActivity();\r\n  _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.completed();\r\n  _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.clearAll();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadEvents);\n\n//# sourceURL=webpack://to-do-list/./src/modules/loadevents.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListContainer\": () => (/* binding */ addListContainer),\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"warning\": () => (/* binding */ warning)\n/* harmony export */ });\nconst list = document.getElementById('list');\r\nconst addListContainer = document.querySelector('.addListContainer');\r\nconst clear = document.querySelector('.clearAll');\r\nconst warning = document.getElementById('warning');\n\n//# sourceURL=webpack://to-do-list/./src/modules/variables.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;