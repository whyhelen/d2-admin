(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0899"],{"545a":function(t,n){t.exports="你可以点击每个演示卡片右上角的刷新按钮检查每次 `mock` 不同的结果\n\n官方演示页面 [http://mockjs.com/examples.html](http://mockjs.com/examples.html)\n\n官方 `Wiki` [https://github.com/nuysoft/Mock/wiki/Getting-Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)"},c725:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("d2-container",[e("template",{slot:"header"},[t._v("数据占位符")]),e("d2-markdown",{staticClass:"d2-mb",attrs:{source:t.doc}}),t._l(t.settingDPD,function(n,o){return e("d2-demo-mock-card",{key:o,staticStyle:{"margin-bottom":"0px !important"},attrs:{title:n.title,code:JSON.stringify(n.json,null,2),mock:t.mockResult[o]},on:{reload:function(n){t.doMock(o)}}})})],2)},c=[],i=(e("ac6a"),e("cadf"),e("551c"),e("097d"),e("2b0e")),s=e("2ef0"),l=e("96eb"),a=e.n(l),d=[{title:"占位符演示",json:{name:{first:"@FIRST",middle:"@FIRST",last:"@LAST",full:"@first @middle @last"}}}],u=e("545a"),r=e.n(u),m={components:{"d2-demo-mock-card":function(){return e.e("chunk-1198").then(e.bind(null,"4923"))}},data:function(){return{mockResult:[],settingDPD:d,settingDPDClone:Object(s["cloneDeep"])(d),doc:r.a}},mounted:function(){var t=this;this.settingDPD.forEach(function(n,e){t.doMock(e)})},methods:{doMock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i["default"].set(this.mockResult,t,JSON.stringify(a.a.mock(this.settingDPDClone[t].json),null,2))}}},f=m,k=e("2877"),h=Object(k["a"])(f,o,c,!1,null,null,null);h.options.__file="dpd.vue";n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-0899.356e604d.js.map