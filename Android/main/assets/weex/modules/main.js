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
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/5e5106a7a740b240e6eb7385dad769f8", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(14);
	__webpack_require__(16);

	;
	    __webpack_require__(1);
	    var stream = __weex_require__('@weex-module/stream');
	    var modal = __weex_require__('@weex-module/modal');
	    __weex_module__.exports = {

	     data:function () {return {
	            refresh_display:'hide',
	            jokeArray:[],
	            test:'s-test',
	            msg:'下拉刷新'
	         }},

	        methods:{
	            onrefresh:function(e){
	                var self = this;
	                self.msg = '下拉刷新';
	                self.refresh_display = 'show';
	                this.$call('timer','setTimeout',function(){
	                   self.refresh_display = 'hide';
	                },2000);
	                self.refresh();
	            },

	            refresh:function(){
	                    var self = this;
	                    var url = 'https://api.leancloud.cn/1.1/classes/joke?limit=20&&order=-createdAt&&';
	                    stream.fetch({
	                            method:'GET',
	                            url:url,
	                            headers:{
	                                'X-LC-Id':'zksrg6fpR18GjAsv0eHPs4Kz-gzGzoHsz', 
	                                'X-LC-Key':'XfkYkvCvsJ1FkhEqzdTsMnNC',
	                                'content-type':'application/json'
	                            },
	                    },function(ret){
	                            if(!ret.ok){
	                                modal.toast({'message':'你的手机网络出问题啦!','duration':2});
	                            }else{
	                                self.jokeArray.splice(0,self.jokeArray.length);
	                                var json = JSON.parse(ret.data);
	                                for(var i = 0;i<json.results.length;i++){
	                                    self.jokeArray.push(json.results[i]);
	                                }
	                            }
	                    });
	               }

	          },
	         created: function(){
	               var self = this;
	                stream.fetch({ 
	                            method:'GET', 
	                            url:'https://api.leancloud.cn/1.1/classes/joke?limit=10&&order=-createdAt&&', 
	                            headers:{ 
	                                'X-LC-Id':'zksrg6fpR18GjAsv0eHPs4Kz-gzGzoHsz', 
	                                'X-LC-Key':' XfkYkvCvsJ1FkhEqzdTsMnNC', 
	                                'Content-Type':'application/json' 
	                            } },
	                         function(ret){ 
	                                    if(!ret.ok){ 
	                                    modal.toast({"message":"Network Error!",'duration':2}); 
	                                   }else{ 
	                                        var json = JSON.parse(ret.data); 
	                                        for(var i = 0; i < json.results.length;i++){
	                                            self.jokeArray.push(json.results[i]);
	                                        }
	                             } },
	                             function(res){  }
	                  );
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "tab-question"
	  ],
	  "children": [
	    {
	      "type": "navbar",
	      "attr": {
	        "title": "笑话部落格"
	      }
	    },
	    {
	      "type": "list",
	      "children": [
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "attr": {
	            "display": function () {return this.refresh_display}
	          },
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "children": [
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "indicator"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "refresh-arrow"
	              ],
	              "style": {
	                "textAlign": "center",
	                "color": "rgb(238,162,54)"
	              },
	              "shown": function () {return this.refresh_display==='hide'},
	              "attr": {
	                "value": function () {return this.msg}
	              }
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "children": [
	            {
	              "type": "scroller",
	              "children": [
	                {
	                  "type": "joke_item",
	                  "repeat": function () {return this.jokeArray}
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "line"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "indicator": {
	    "width": 60,
	    "height": 60,
	    "color": "#889967"
	  },
	  "refresh-view": {
	    "height": 100,
	    "width": 750,
	    "alignItems": "center"
	  },
	  "line": {
	    "width": 750,
	    "height": 20,
	    "backgroundColor": "#EDEDED"
	  },
	  "tab-question": {
	    "marginBottom": 150
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/5e5106a7a740b240e6eb7385dad769f8", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/index", [], function(__weex_require__, exports, __weex_module__){

	;
	  __webpack_require__(2);
	  __webpack_require__(3);
	  __webpack_require__(4);
	  __webpack_require__(5);
	  __webpack_require__(6);
	  __webpack_require__(7);
	  __webpack_require__(8);
	  __webpack_require__(9);
	  __webpack_require__(10);
	  __webpack_require__(11);
	  __webpack_require__(12);

	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-button", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      size: 'large',
	      value: ''
	    }},
	    methods: {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-hn", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      level: 1,
	      value: ''
	    }},
	    methods: {}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-list-item", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      bgColor: '#ffffff'
	    }},
	    methods: {
	      touchstart: function() {
	        // FIXME android touch
	        // TODO adaptive opposite bgColor
	//        this.bgColor = '#e6e6e6';
	      },
	      touchend: function() {
	        // FIXME android touchend not triggered
	//        this.bgColor = '#ffffff';
	      }
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-panel", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'default',
	      title: '',
	      paddingBody: 20,
	      paddingHead: 20,
	      dataClass: '', // FIXME transfer class
	      border: 0
	    }},
	    ready: function() {
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	})
	})

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tip", [], function(__weex_require__, exports, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      type: 'success',
	      value: ''
	    }}
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-countdown", [], function(__weex_require__, exports, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function() {
	        if (this.remain <= 0) {
	            return;
	        }
	        // this.isWeb = this.$getConfig().env.platform === 'Web';
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', Object.assign({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', Object.assign({}, this.time));
	                }
	                this._app.updateActions(); 
	            }
	        },
	        format: function(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	            // console.log(remain, this.D, this.h, this.hh, this.H, this.HH, this.m, this.MM, this.s, this.ss, this.S, this.SS);
	            return remain > 0;
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden"
	  }
	})
	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-marquee", [], function(__weex_require__, exports, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function () {
	        if (this.interval > 0
	                && this.step > 0
	                && this.duration > 0) {
	            this.nextTick();    
	        }
	    },
	    methods: {
	        nextTick: function() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function() {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	              styles: {
	                transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	              },
	              timingFunction: 'ease',
	              duration: self.duration
	            }, function() {
	                self.index = (self.index + 1) % (self.count);
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function() {
	            this.outofview = false;
	        },
	        disappeared: function() {
	            this.outofview = true;
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	})
	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-navbar", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',

	          //导航条背景色
	          backgroundColor: 'black',

	          //导航条高度
	          height: 88,

	          //导航条标题 
	          title: "",

	          //导航条标题颜色
	          titleColor: 'black',

	          //右侧按钮图片
	          rightItemSrc: '',

	          //右侧按钮标题
	          rightItemTitle: '',

	          //右侧按钮标题颜色
	          rightItemColor: 'black',

	          //左侧按钮图片
	          leftItemSrc: '',

	          //左侧按钮标题
	          leftItemTitle: '',

	          //左侧按钮颜色
	          leftItemColor: 'black',
	        }},
	        methods: {
	          onclickrightitem: function (e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	          },
	          onclickleftitem: function (e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	})
	})

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-navpage", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(9);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',
	          backgroundColor: 'black',
	          height: 88,
	          title: "",
	          titleColor: 'black',
	          rightItemSrc: '',
	          rightItemTitle: '',
	          rightItemColor: 'black',
	          leftItemSrc: '',
	          leftItemTitle: '',
	          leftItemColor: 'black',
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
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	})
	})

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-tabbar", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(12);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          tabItems: [ ],
	          selectedIndex: 0,
	          selectedColor: '#73D0F4',
	          unselectedColor: '#D8D8D8',
	        }},
	        created: function () {
	          this.selected(this.selectedIndex);

	          this.$on('tabItem.onClick',function(e){
	            var detail= e.detail;
	            this.selectedIndex = detail.index;
	            this.selected(detail.index);

	            var params = {
	              index: detail.index
	            };
	            this.$dispatch('tabBar.onClick', params);
	          });
	        },
	        methods: {
	            selected: function(index) {
	              for(var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if(i == index){
	                  tabItem.icon = tabItem.selectedImage;
	                  tabItem.titleColor = this.selectedColor;
	                  tabItem.visibility = 'visible';
	                }
	                else {
	                  tabItem.icon = tabItem.image;
	                  tabItem.titleColor = this.unselectedColor;
	                  tabItem.visibility = 'hidden';
	                }
	              }
	            },  
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 160
	  }
	})
	})

/***/ },
/* 12 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-tabitem", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          index: 0,
	          title: '',
	          titleColor: '#000000',
	          icon: '',
	          backgroundColor: '#ffffff',
	        }},
	        methods: {
	          onclickitem: function (e) {
	            var vm = this;
	            var params = {
	              index: vm.index
	            };
	            vm.$dispatch('tabItem.onClick', params);
	          }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 100
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 20,
	    "width": 50,
	    "height": 50
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20,
	    "fontWeight": "bold"
	  }
	})
	})

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/navbar", [], function(__weex_require__, exports, __weex_module__){

	;
	    __webpack_require__(1);
	    __weex_module__.exports = {
	        data:function () {return {
	            title:''
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "nav_bar"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flex": 1
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "nav_text"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": "#FFFFFF"
	              },
	              "attr": {
	                "value": function () {return this.title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flex": 1
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "nav_line"
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "nav_bar": {
	    "flexDirection": "row",
	    "height": 100,
	    "backgroundColor": "#73D0F4"
	  },
	  "nav_text": {
	    "fontWeight": "bold",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "nav_line": {
	    "height": 1,
	    "backgroundColor": "#D8D8D8"
	  }
	})
	})

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/joke_item", [], function(__weex_require__, exports, __weex_module__){

	;
	    __webpack_require__(1);
	    var modal = __weex_require__('@weex-module/modal');
	    var stream = __weex_require__('@weex-module/stream');
	    var storage = __weex_require__('@weex-module/storage');
	    __weex_module__.exports = {

	        created:function(){
	            var self = this;
	            if(self.url != ""){
	                self.showimg = true;
	            }
	        },

	        data:function () {return {
	            username:'',
	            creatAt:'',
	            jokecontent:'',
	            up:'',
	            reply:'',
	            down:'',
	            objectId:'',
	            url:'',
	            showimg:false
	        }},

	        methods:{
	            clipbo:function(){
	                var self = this;
	                var content = self.jokecontent;
	                __weex_require__('@weex-module/clipboard').setString(content);
	                modal.toast({'message':'已复制笑话到剪贴板!','duration':1});
	            },
	            share:function(){
	                var self = this;
	                var content = self.jokecontent;
	                __weex_require__('@weex-module/myModule').share(content);
	            },
	            gotoreply:function(e){
	                var self = this;
	                var id = e.target.attr.obj;
	                var content = self.jokecontent;
	                storage.setItem('id',id,function(e){
	                    if(e.data == 'undefined'){
	                    }else{
	                        modal.toast({'message':'Fail..','duration':2});
	                    }
	                });

	                storage.setItem('content',content,function(e){
	                    if(e.data == 'undefined'){
	                    }else{
	                        modal.toast({'message':'Fail..','duration':2});
	                    }

	                });

	                __weex_require__('@weex-module/myModule').comment(id,content);

	            },
	            upAction:function(e){
	                var self = this;
	                self.up++;
	                var id = e.target.attr.obj;
	                self.http('up',self.up,id);
	            },
	            downAction:function(e){
	                var self = this;
	                self.down++;
	                var id = e.target.attr.obj;
	                self.http('down',self.down,id);
	            },
	            longpress:function(e){
	                var self = this;
	                var joke = self.jokecontent;
	                var url = 'https://leancloud.cn:443/1.1/classes/collection';
	                var col = '{"id":3,"content":"'+joke+'"}';
	                stream.fetch({
	                     method:'POST',
	                     url:url,
	                     headers:{
	                        'X-LC-Id':'zksrg6fpR18GjAsv0eHPs4Kz-gzGzoHsz', 
	                        'X-LC-Key':'XfkYkvCvsJ1FkhEqzdTsMnNC',
	                        'content-type':'application/json'
	                     },
	                     body:col
	                },function(ret){
	                     if(!ret.ok){
	                            modal.toast({'message':'你的手机网络出问题啦!','duration':2});
	                       }else{
	                            modal.toast({'message':'收藏成功','duration':1});
	                       }
	                });
	            },
	            http:function(action,number,id){

	                var baseUrl = 'https://leancloud.cn:443/1.1/classes/joke/';
	                var url = baseUrl+id;
	                var change = '';

	                if(action == 'up' || action == 'down' ){
	                   change = '{"' + action + '":' + number + '}';
	                }


	                stream.fetch({
	                     method:'PUT',
	                     url:url,
	                     headers:{
	                        'X-LC-Id':'zksrg6fpR18GjAsv0eHPs4Kz-gzGzoHsz', 
	                        'X-LC-Key':'XfkYkvCvsJ1FkhEqzdTsMnNC',
	                        'content-type':'application/json'
	                     },
	                     body:change
	                },function(ret){
	                       if(!ret.ok){
	                            modal.toast({'message':'网络出错，操作失败!','duration':1});
	                       }
	                });


	            }
	        }

	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "joke-wrapper"
	      ],
	      "events": {
	        "longpress": "longpress"
	      },
	      "attr": {
	        "obj": function () {return this.objectId}
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "joke-title"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "user-avatar"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "user-info"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "user-name-text"
	                  ],
	                  "attr": {
	                    "value": function () {return this.username}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "user-time"
	                  ],
	                  "style": {
	                    "opacity": 0.4,
	                    "fontSize": 25
	                  },
	                  "attr": {
	                    "value": function () {return this.createdAt}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "joke-content"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "joke-content-text"
	              ],
	              "style": {
	                "fontSize": 30
	              },
	              "attr": {
	                "value": function () {return this.jokecontent}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "joke-image"
	          ],
	          "shown": function () {return this.showimg},
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "j-image"
	              ],
	              "style": {
	                "width": 300,
	                "height": 400
	              },
	              "attr": {
	                "resize": "cover",
	                "src": function () {return this.url}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "joke-bottom"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "joke-love"
	              ],
	              "events": {
	                "click": "upAction"
	              },
	              "attr": {
	                "obj": function () {return this.objectId}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "img"
	                  ],
	                  "attr": {
	                    "src": "http://i1.piimg.com/567571/4d57ec77fa2c27b0.png"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt"
	                  ],
	                  "attr": {
	                    "value": function () {return this.up}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "joke-reply"
	              ],
	              "events": {
	                "click": "gotoreply"
	              },
	              "attr": {
	                "obj": function () {return this.objectId}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "img"
	                  ],
	                  "attr": {
	                    "src": "http://i1.piimg.com/567571/c046122d57e5da9e.png"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "joke-like"
	              ],
	              "events": {
	                "click": "downAction"
	              },
	              "attr": {
	                "obj": function () {return this.objectId}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "img"
	                  ],
	                  "attr": {
	                    "src": "http://ww3.sinaimg.cn/large/0060lm7Tgw1fb5ogq3cv3j300q00n0f2.jpg"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "txt"
	                  ],
	                  "attr": {
	                    "value": function () {return this.down}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "joke-share"
	              ],
	              "events": {
	                "click": "share"
	              },
	              "attr": {
	                "obj": function () {return this.objectId}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "img"
	                  ],
	                  "attr": {
	                    "src": "http://ww1.sinaimg.cn/large/0060lm7Tgw1fbbe3xef2oj303h02owec.jpg"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "joke-image": {
	    "marginLeft": 20,
	    "marginTop": 10
	  },
	  "joke-wrapper": {
	    "flexDirection": "column",
	    "borderTopWidth": 20,
	    "borderTopColor": "#EDEDED"
	  },
	  "joke-title": {
	    "alignItems": "center",
	    "height": 120,
	    "flexDirection": "row",
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "joke-bottom": {
	    "marginTop": 15,
	    "marginBottom": 15,
	    "flexDirection": "row",
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "joke-content": {
	    "marginLeft": 20,
	    "marginRight": 20
	  },
	  "joke-love": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "joke-reply": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "joke-like": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "joke-share": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "user-avatar": {
	    "width": 80,
	    "height": 80,
	    "borderRadius": 40,
	    "backgroundColor": "#7ACC20"
	  },
	  "user-info": {
	    "marginLeft": 10
	  },
	  "img": {
	    "width": 40,
	    "height": 40
	  },
	  "txt": {
	    "opacity": 0.3,
	    "fontSize": 30
	  }
	})
	})

/***/ }
/******/ ]);