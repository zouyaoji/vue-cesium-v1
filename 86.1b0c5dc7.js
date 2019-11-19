(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{DFbn:function(s,a,t){"use strict";t.d(a,"a",function(){return v}),t.d(a,"b",function(){return l});var v=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("BingMaps 影像 Provider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("添加 BingMaps 影像服务图层到场景")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{on:{ready:s.ready}},[t("imagery-layer",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[t("bingmaps-imagery-provider",{attrs:{url:s.url,bmKey:s.bmKey,mapStyle:s.mapStyle}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("透明度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(a){s.alpha=a},expression:"alpha"}}),s._v(" "),t("span",[s._v("亮度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(a){s.brightness=a},expression:"brightness"}}),s._v(" "),t("span",[s._v("对比度")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(a){s.contrast=a},expression:"contrast"}}),s._v(" "),t("span",[s._v("切换服务")]),s._v(" "),t("md-select",{attrs:{placeholder:"请选择服务"},model:{value:s.mapStyle,callback:function(a){s.mapStyle=a},expression:"mapStyle"}},s._l(s.options,function(a){return t("md-option",{key:a.value,attrs:{value:a.value}},[s._v("\n            "+s._s(a.label)+"\n          ")])}))],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(4)],1)},l=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("bingmaps-imagery-provider")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("透明度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("亮度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("对比度"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("切换服务"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mapStyle"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"请选择服务"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("bingmaps-imagery-provider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":bmKey")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"bmKey"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":mapStyle")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"mapStyle"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("bingmaps-imagery-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://dev.virtualearth.net'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("bmKey")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'AqgBIfrBG50dl7Ykc9nANoj5UJnIxg5YyEZu-UE7sY_sHoZT1db1jGZAalBsU73w'")]),s._v(", "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 可到(https://www.bingmapsportal.com/)申请Key。")]),s._v("\n        mapStyle: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Road'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Aerial'")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Aerial'")]),s._v("\n          },\n          {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'AerialWithLabels'")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'AerialWithLabels'")]),s._v("\n          },\n          {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Road'")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Road'")]),s._v("\n          },\n          {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'CanvasDark'")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'CanvasDark'")]),s._v("\n          }\n        ],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("url")]),s._v(" "),t("td",[s._v("String | Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v("指定服务地址。")])]),s._v(" "),t("tr",[t("td",[s._v("bmKey")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("指定 BingMaps 地图 API 秘钥，可到"),t("a",{attrs:{href:"https://www.bingmapsportal.com/"}},[s._v("https://www.bingmapsportal.com/")]),s._v("申请 Key。")])]),s._v(" "),t("tr",[t("td",[s._v("tileProtocol")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("指定地图是 http 还是 https 加载，默认与页面相同。")])]),s._v(" "),t("tr",[t("td",[s._v("mapStyle")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("'Aerial'")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("指定加载的 BingMaps 类型。")])]),s._v(" "),t("tr",[t("td",[s._v("culture")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("''")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("指定服务的描述信息。")])]),s._v(" "),t("tr",[t("td",[s._v("ellipsoid")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("参考椭球体")])]),s._v(" "),t("tr",[t("td",[s._v("tileDiscardPolicy")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("指定 tile 无效时是否被舍弃。")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("官方文档 "),a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html"}},[this._v("BingMapsImageryProvider")])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])]),s._v(" "),t("tr",[t("td",[s._v("errorEvent")]),s._v(" "),t("td",[s._v("TileProviderError")]),s._v(" "),t("td",[s._v("当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。")])]),s._v(" "),t("tr",[t("td",[s._v("readyPromise")]),s._v(" "),t("td",[s._v("ImageryProvider")]),s._v(" "),t("td",[s._v("当图层可用时触发, 返回 ImageryProvider 实例。")])])])])}]},"Wf+N":function(s,a,t){var v,l,r;l=[a],void 0===(r="function"==typeof(v=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{url:"https://dev.virtualearth.net",bmKey:"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",mapStyle:"Road",options:[{value:"Aerial",label:"Aerial"},{value:"AerialWithLabels",label:"AerialWithLabels"},{value:"Road",label:"Road"},{value:"CanvasDark",label:"CanvasDark"}],alpha:1,brightness:1,contrast:1,terrainProvider:null}},methods:{ready:function(s){s.Cesium,s.viewer}}},s.exports=a.default})?v.apply(a,l):v)||(s.exports=r)},qFNu:function(s,a,t){s.exports=t("zdwt")},zdwt:function(s,a,t){"use strict";t.r(a);var v=t("Wf+N"),l=t.n(v);for(var r in v)"default"!==r&&function(s){t.d(a,s,function(){return v[s]})}(r);var n=t("DFbn"),_=t("JFUb"),e=Object(_.a)(l.a,n.a,n.b,!1,null,null,null);a.default=e.exports}}]);