/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/011fc61f5cb6752d887702512b60d53c", [], function(__weex_require__, exports, __weex_module__){

	;

	    __weex_module__.exports = {

	        data:function () {return {
	            comment:''
	        }}

	    }


	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "devide"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "col"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "col-image"
	          ],
	          "attr": {
	            "src": "http://ww1.sinaimg.cn/large/0060lm7Tgw1fbdh0mmgdnj302i01rq2t.jpg"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "comment"
	          ],
	          "attr": {
	            "value": function () {return this.comment}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "col": {
	    "flexDirection": "row",
	    "height": 100,
	    "alignItems": "center"
	  },
	  "devide": {
	    "height": 5,
	    "backgroundColor": "#D8D8D8"
	  },
	  "col-image": {
	    "width": 100,
	    "height": 75
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/011fc61f5cb6752d887702512b60d53c", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);