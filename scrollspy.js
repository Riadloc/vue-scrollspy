!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define("vue-use-scrollspy",["vue"],t):"object"==typeof exports?exports["vue-use-scrollspy"]=t(require("vue")):e["vue-use-scrollspy"]=t(e.vue)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function i(e,t){let n,r=0;return function(){const o=+new Date,i=t-(o-r);i<=0?(n&&(clearTimeout(n),n=null),r=o,e()):(clearTimeout(n),n=setTimeout(()=>{r=o,n=null,e()},i))}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={props:{tag:{type:String,default:"div"},items:{type:Array,default:function(){return[]}},el:{type:String},current:{type:String},activeClass:{type:String},offset:{type:Number,default:0}},data:()=>({targets:[],activeIndex:-1}),computed:{rootEl(){return this.el?document.querySelector(this.el):window}},mounted(){this.init(),this.onEvent()},beforeDestroy(){this.offEvent()},methods:{init(){this.current&&(this.activeIndex=this.items.indexOf(this.current)),this.targets=this.items.map(e=>document.querySelector(e)),this.spy()},onEvent(){this.fn=i(this.spy,500),this.rootEl.addEventListener("scroll",this.fn)},offEvent(){this.rootEl.removeEventListener("scroll",this.fn)},handleSpy(){i(this.spy,1e3)},spy(){const e=this.targets,t=this.items;let n,r=!1;for(let t=0;t<e.length;t++){const o=e[t];!r&&this.isInView(o)&&(n=t,r=!0)}this.activeIndex=n;let o=n&&t[n];this.current!==o&&(this.$emit("update:current",o),this.$emit("on-update",o))},isInView(e){if(!e)return!1;const t=e.getBoundingClientRect();let n;n=this.el?document.querySelector(this.el).getBoundingClientRect():{top:0,height:window.innerHeight};const r=this.getScrollDimensions().scrollTop,o=n.height,i=r+t.top-n.top+this.offset,s=r+o;return i+t.height>r&&i<s},getScrollDimensions(){let e;if(this.el){e=document.querySelector(this.el).scrollTop}else e=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop;return{scrollTop:e}},processClassName(e,t){const n=e.split(" ");let r=n.indexOf(this.activeClass);return this.activeIndex===t?~r||n.push(this.activeClass):~r&&n.splice(r,1),n.join(" ").trim()}},render:function(e){const t=this.tag;let n=this.$slots.default;return e(t,(n=n.filter(e=>e.tag)).map((e,t)=>{let n=(e.data||{}).staticClass,r=void 0===n?"":n;return r=this.processClassName(r,t),s({},e,{data:s({},e.data,{staticClass:r})})}))}};t.default=o.a.extend(l)}])});