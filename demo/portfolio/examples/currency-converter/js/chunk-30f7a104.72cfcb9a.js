(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30f7a104"],{"2d67":function(e,t,c){},"4bcf":function(e,t,c){"use strict";var r=c("2d67"),a=c.n(r);a.a},dae5:function(e,t,c){"use strict";c.r(t);var r=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"current"},[c("div",{staticClass:"selector-wrap"},[c("cur-select",{staticStyle:{margin:"0 auto"},attrs:{data:e.data,selected:e.selected[0],favorite:e.favorite[0]},on:{change:function(t){return e.setSelectedFav(0,t)}}})],1),c("div",{staticClass:"eden"},[e._v("1 =")]),c("hr"),c("div",{staticClass:"items"},[e._l(e.data,(function(t,r){return[r!=e.selected[0]?c("div",{key:r,staticClass:"item"},[c("span",{staticClass:"flag",style:{backgroundImage:"url(http://www.nbrb.by/i/flags/flags/4x3/"+r.substr(0,2)+".svg)"}}),c("span",{staticClass:"value"},[e._v(e._s(e.fixNumbers(t)))]),c("span",{staticClass:"key"},[e._v(e._s(r.toLowerCase()))])]):e._e()]}))],2)])},a=[],s=(c("a4d3"),c("4de4"),c("4160"),c("b680"),c("e439"),c("dbb4"),c("b64b"),c("acd8"),c("159b"),c("2fa7")),n=c("d722"),i=c("5935"),o=c("d80f");function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function u(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(c,!0).forEach((function(t){Object(s["a"])(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(c).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var d={name:"current",components:{CurSelect:o["a"]},computed:u({},Object(i["b"])("app",["value","selected","favorite"]),{},Object(i["b"])("curr",["data","base"])),created:function(){this.changeSelect(this.selected[0])},methods:{setSelectedFav:function(e,t){this.$store.commit("app/setSelectedFav",u({id:e},t)),"selected"==t.type&&this.changeSelect(t.value)},fixNumbers:function(e){return parseFloat(e.toFixed(2)).toLocaleString()},changeSelect:function(e){var t=this;Object(n["a"])(e).then((function(e){t.$store.commit("curr/update",e)})).catch((function(e){console.error(e.message)}))}}},f=d,b=(c("4bcf"),c("2877")),p=Object(b["a"])(f,r,a,!1,null,"54fc6b98",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-30f7a104.72cfcb9a.js.map