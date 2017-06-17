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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(6)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(9),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VBrowser',
    props: {
        openData: {
            default: {
                title: '坚果空间',
                url: 'http://liu-pan.cc',
                showToolBar: 'auto'
            },
            type: Object
        }
    },
    data: function data() {
        return {
            loading: false,
            url: '',
            webTitle: '',
            webTitleShow: false
        };
    },
    watch: {
        url: function url(val) {
            console.log(val);
            this.webTitleShow = true;
            if (val.indexOf('http://') !== 0 && val.indexOf('https://') !== 0) {
                this.url = 'http://' + val;
            }
        }
    },
    methods: {
        loaded: function loaded() {
            this.webTitleShow = true;
            this.checkMeta();
            this.getTitle();
        },
        back: function back() {
            var F = this.$refs.iframe;
            var FW = F.contentWindow;
            FW.history.back();
        },
        forward: function forward() {
            var FW = this.getFw();
            FW.history.forward();
        },
        reload: function reload() {
            var FW = this.getFw();
            FW.location.reload();
        },
        bindHashchange: function bindHashchange() {
            var _this = this;

            var FW = this.getFw();
            FW.addEventListener('hashchange', function () {
                console.log(FW.location);
                _this.url = FW.location.href;
            });
        },
        checkMeta: function checkMeta() {
            var FW = this.getFw();
            var webApp = FW.document.querySelector('head meta[name="apple-mobile-web-app-capable"]');

            if (this.openData.showToolBar === 'auto' && webApp) {
                this.openData.showToolBar = false;
            }
        },
        getFw: function getFw() {
            var F = this.$refs.iframe;
            var FW = F.contentWindow;
            return FW;
        },
        getTitle: function getTitle() {
            var F = this.$refs.iframe;
            this.webTitle = F.contentWindow.document.title;
        }
    },
    created: function created() {
        this.webTitle = this.openData.title;
    }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Browser_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Browser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Browser_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'v-phone',
    components: {
        VBrowser: __WEBPACK_IMPORTED_MODULE_0__Browser_vue___default.a
    },
    props: {
        phone: {
            default: 'i5',
            type: String
        },
        list: {
            default: function _default() {
                return [{
                    title: '坚果空间',
                    url: 'http://liu-pan.cc',
                    showToolBar: true,
                    open: false
                }];
            },
            type: Array
        }
    },
    data: function data() {
        return {
            opened: false,
            openData: {},
            desktopStyle: {},
            time: ':'
        };
    },

    methods: {
        hide: function hide() {
            this.opened = false;
        },
        open: function open(item) {
            this.openData = item;
            this.opened = item.open = true;
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
        }
    },
    created: function created() {
        var _this2 = this;

        this.timer();
        this.list.some(function (item) {
            if (item.open === true) {
                _this2.open(item);

                return true;
            }
        });
    }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Phone_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Phone_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Phone_vue__);

__WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__Phone_vue___default.a);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(5)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(8),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "browser-wrap",
    attrs: {
      "id": "browser"
    }
  }, [_c('div', {
    staticClass: "browser-box",
    class: {
      'has-web-bar': _vm.openData.showToolBar
    }
  }, [_c('div', {
    staticClass: "web-bar web-top-bar"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.url),
      expression: "url",
      modifiers: {
        "lazy": true
      }
    }, {
      name: "show",
      rawName: "v-show",
      value: (!_vm.webTitleShow),
      expression: "!webTitleShow"
    }],
    attrs: {
      "type": "text",
      "name": "url"
    },
    domProps: {
      "value": (_vm.url)
    },
    on: {
      "blur": function($event) {
        _vm.webTitleShow = true
      },
      "change": function($event) {
        _vm.url = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.webTitleShow),
      expression: "webTitleShow"
    }],
    staticClass: "web-title",
    on: {
      "click": function($event) {
        _vm.webTitleShow = false
      }
    }
  }, [_c('i', {
    staticClass: "v-icon bg-icon"
  }), _vm._v(_vm._s(_vm.webTitle))])]), _vm._v(" "), _c('iframe', {
    ref: "iframe",
    attrs: {
      "src": _vm.openData.url
    },
    on: {
      "load": _vm.loaded
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "web-bar web-bottom-bar"
  }, [_c('span', {
    on: {
      "click": _vm.back
    }
  }, [_c('i', {
    staticClass: "v-icon bg-back"
  })]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.forward
    }
  }, [_c('i', {
    staticClass: "v-icon bg-forward"
  })]), _vm._v(" "), _c('span', {
    staticClass: "reload",
    on: {
      "click": _vm.reload
    }
  }, [_c('i', {
    staticClass: "v-icon bg-reload"
  })])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "vue-phone-model"
    }
  }, [_c('div', {
    staticClass: "phone-wrap",
    class: _vm.phone
  }, [_c('div', {
    staticClass: "phone-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "phone-button",
    on: {
      "click": _vm.hide
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "phone-tool-bar"
  }, [_c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.time))]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('div', {
    staticClass: "phone-desktop",
    style: (_vm.desktopStyle)
  }, [_vm._l((_vm.list), function(item, $index) {
    return _c('div', {
      key: $index,
      staticClass: "app-icon-box",
      on: {
        "click": function($event) {
          _vm.open(item)
        }
      }
    }, [_c('div', {
      staticClass: "app-icon"
    }, [_c('img', {
      attrs: {
        "src": item.icon
      }
    })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.title))])])
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "v-zoom"
    }
  }, [_c('v-browser', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.opened),
      expression: "opened"
    }],
    attrs: {
      "open-data": _vm.openData
    }
  })], 1)], 2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "phone-receiver-wrap"
  }, [_c('i', {
    staticClass: "phone-camera"
  }), _vm._v(" "), _c('div', {
    staticClass: "phone-receiver"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "network"
  }, [_vm._v("4G\n                    "), _c('i', {
    staticClass: "power"
  })])
}]}

/***/ })
/******/ ]);
});