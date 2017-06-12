(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("phone", [], factory);
	else if(typeof exports === 'object')
		exports["phone"] = factory();
	else
		root["phone"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/Users/liupan/Documents/project-formal/vue-phone-model/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(7)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(2),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'v-phone',
  props: {
    openUrl: {
      default: 'http://liu-pan.cc',
      type: String,
      required: true
    },
    showToolBar: {
      default: 'auto',
      type: [Boolean, String]
    },
    phone: {
      default: 'i5',
      type: String
    }
  },
  data: function data() {
    return {
      loading: false,
      time: ':',
      url: '',
      ToolBarShow: 'auto',
      webTitle: '',
      webTitleShow: false
    };
  },
  watch: {
    openUrl: function openUrl(val) {
      console.log(val);
      this.url = val;
    },
    url: function url(val) {
      console.log(val);
      this.webTitleShow = true;
      if (val.indexOf('http://') !== 0 && val.indexOf('https://') !== 0) {
        this.url = 'http://' + val;
      }
      this.$emit('input', val);
    }
  },
  methods: {
    loaded: function loaded() {
      this.webTitleShow = true;
      this.checkMeta();
      this.getTitle();
    },
    checkTime: function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    timer: function timer() {
      var _this = this;

      var now = new Date();
      var h = this.checkTime(now.getHours());
      var m = this.checkTime(now.getMinutes());
      this.time = h + ":" + m;
      setTimeout(function () {
        _this.timer();
      }, 1000 * 60);
    },
    bindHashchange: function bindHashchange() {
      var _this2 = this;

      var F = this.$refs.iframe;
      var FW = F.contentWindow;
      FW.addEventListener('hashchange', function () {
        console.log(FW.location);
        _this2.url = FW.location.href;
      });
    },
    checkMeta: function checkMeta() {
      var F = this.$refs.iframe;
      var FW = F.contentWindow;
      var webApp = FW.document.querySelector('head meta[name="apple-mobile-web-app-capable"]');

      if (this.ToolBarShow === 'auto' && webApp) {
        this.ToolBarShow = false;
      }
    },
    getTitle: function getTitle() {
      var F = this.$refs.iframe;
      this.webTitle = F.contentWindow.document.title;
    }
  },
  created: function created() {
    this.timer();
    this.url = this.openUrl;
    this.ToolBarShow = this.showToolBar;
  },
  mounted: function mounted() {}
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      attrs: {
        "id": "vue-phone-model"
      }
    }, [_c('div', {
      staticClass: "phone-wrap",
      class: _vm.phone
    }, [_c('div', {
      staticClass: "phone-box",
      class: {
        'has-web-bar': _vm.ToolBarShow
      }
    }, [_vm._m(0), _vm._v(" "), _c('div', {
      staticClass: "phone-button"
    }), _vm._v(" "), _c('div', {
      staticClass: "phone-tool-bar"
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm.time))]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('div', {
      staticClass: "phone"
    }, [_c('div', {
      staticClass: "web-bar web-top-bar"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: _vm.url,
        expression: "url",
        modifiers: {
          "lazy": true
        }
      }, {
        name: "show",
        rawName: "v-show",
        value: !_vm.webTitleShow,
        expression: "!webTitleShow"
      }],
      attrs: {
        "type": "text",
        "name": "url"
      },
      domProps: {
        "value": _vm.url
      },
      on: {
        "blur": function blur($event) {
          _vm.webTitleShow = true;
        },
        "change": function change($event) {
          _vm.url = $event.target.value;
        }
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.webTitleShow,
        expression: "webTitleShow"
      }],
      staticClass: "web-title",
      on: {
        "click": function click($event) {
          _vm.webTitleShow = false;
        }
      }
    }, [_vm._v(_vm._s(_vm.webTitle))])]), _vm._v(" "), _c('iframe', {
      ref: "iframe",
      attrs: {
        "src": _vm.url
      },
      on: {
        "load": _vm.loaded
      }
    })], 1)])])]);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('div', {
      staticClass: "phone-receiver-wrap"
    }, [_c('i', {
      staticClass: "phone-camera"
    }), _vm._v(" "), _c('div', {
      staticClass: "phone-receiver"
    })]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
    return _c('span', {
      staticClass: "network"
    }, [_vm._v("4G\n          "), _c('i', {
      staticClass: "power"
    })]);
  }] };

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Phone_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Phone_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Phone_vue__);

__WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n#vue-phone-model .phone-wrap {\n  border-bottom: 75px solid #383735;\n  border-top: 50px solid #383735;\n  border-left: 15px solid #383735;\n  border-right: 15px solid #383735;\n  border-radius: 50px;\n  width: 320px;\n  height: 568px;\n}\n#vue-phone-model .phone-wrap.i6 {\n  width: 375px;\n  height: 667px;\n}\n#vue-phone-model .phone-receiver-wrap {\n  position: absolute;\n  width: 100%;\n  z-index: 5;\n  top: -25px;\n  text-align: center;\n}\n#vue-phone-model .phone-camera {\n  width: 6px;\n  height: 6px;\n  border-radius: 30px;\n  background: #92969f;\n  float: left;\n  margin-left: 40%;\n  margin-top: 1px;\n  vertical-align: middle;\n}\n#vue-phone-model .phone-receiver {\n  background: #1c1d22;\n  width: 52px;\n  height: 6px;\n  float: left;\n  margin-left: 6px;\n  border-radius: 50px;\n  box-shadow: 1px 2px #52514e;\n}\n#vue-phone-model .phone-button {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: #464646;\n  border: 2px solid #2f2f2f;\n  border-radius: 50%;\n  bottom: -70px;\n  left: 135px;\n  z-index: 9;\n  box-shadow: inset 0px 0px 2px 1px rgba(111, 111, 111, 0.4);\n}\n#vue-phone-model .phone-tool-bar {\n  width: 100%;\n  height: 20px;\n  background: #000;\n  color: #fff;\n  font-size: 12px;\n  overflow: hidden;\n  line-height: 20px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  border-top: 2px solid #282828;\n  border-bottom: none;\n  margin-top: -20px;\n}\n#vue-phone-model .phone-tool-bar .time {\n  float: left;\n}\n#vue-phone-model .phone-tool-bar .network {\n  float: right;\n}\n#vue-phone-model .phone-tool-bar .power {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 7px;\n  border-radius: 5px;\n  overflow: hidden;\n  border: 1px solid #fff;\n}\n#vue-phone-model .phone-tool-bar .power::before {\n  content: '';\n  display: inline-block;\n  width: 80%;\n  height: 100%;\n  background: #fff;\n  position: absolute;\n  top: 0;\n  right: -1px;\n}\n#vue-phone-model .phone-box {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  box-sizing: border-box;\n  padding-top: 20px;\n  border: 2px solid #282828;\n  border-top: none;\n}\n#vue-phone-model .has-web-bar .phone {\n  /*padding: 35px 0 35px 0;*/\n  padding: 35px 0 0 0;\n  box-sizing: border-box;\n}\n#vue-phone-model .has-web-bar .web-bar {\n  display: block;\n}\n#vue-phone-model .web-bar {\n  display: none;\n  width: 100%;\n  height: 35px;\n  background: #fbfbfb;\n  box-sizing: border-box;\n}\n#vue-phone-model .web-top-bar {\n  border-bottom: 1px solid #ccc;\n  margin-top: -35px;\n  padding: 3px 5px;\n}\n#vue-phone-model .web-top-bar .web-title {\n  font-size: 12px;\n  line-height: 30px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-indent: 5px;\n}\n#vue-phone-model .web-top-bar input,\n#vue-phone-model .web-top-bar .web-title {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 5px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  color: #92969f;\n  font-weight: 300;\n}\n#vue-phone-model input:focus,\n#vue-phone-model input:active {\n  outline: none;\n}\n#vue-phone-model .web-bottom-bar {\n  border-top: 1px solid #ccc;\n  margin-bottom: -35px;\n}\n#vue-phone-model .phone {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fff;\n}\n#vue-phone-model .phone iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n  box-sizing: border-box;\n}\n\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("6e238363", content, true);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});