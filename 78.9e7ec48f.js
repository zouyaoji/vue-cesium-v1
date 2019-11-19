(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"9FSj":function(s,t,a){var l,n,v;n=[t],void 0===(v="function"==typeof(l=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{polyline1:{},positions1:[{lng:90,lat:20,height:1e4},{lng:120,lat:20,height:1e4}],material1:void 0,polyline2:{},positions2:[{lng:90,lat:30,height:1e4},{lng:120,lat:30,height:1e4}],material2:void 0,polyline3:{},positions3:[],material3:void 0}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.material1=t.Color.RED,this.material2=new t.PolylineGlowMaterialProperty({glowPower:.2,color:t.Color.BLUE}),this.material3=new t.PolylineArrowMaterialProperty(t.Color.PURPLE),this.positions3=[{lng:90,lat:40,height:1e4},{lng:120,lat:40,height:1e4}]}}},s.exports=t.default})?l.apply(t,n):l)||(s.exports=v)},aftW:function(s,t,a){s.exports=a("uns1")},kX6U:function(s,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n});var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("折线")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加线实体到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{polyline:s.polyline1},on:{"update:polyline":function(t){s.polyline1=t}}},[a("polyline-graphics",{attrs:{positions:s.positions1,material:s.material1,width:5,clampToGround:!1,heightPositions:""}})],1),s._v(" "),a("entity",{attrs:{polyline:s.polyline2},on:{"update:polyline":function(t){s.polyline2=t}}},[a("polyline-graphics",{attrs:{positions:s.positions2,material:s.material2,width:10}})],1),s._v(" "),a("entity",{attrs:{polyline:s.polyline3},on:{"update:polyline":function(t){s.polyline3=t}}},[a("polyline-graphics",{attrs:{positions:s.positions3,material:s.material3,width:10}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4)],1)},n=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("polyline-graphics")]),this._v(" 折线组件，作为"),t("code",{pre:!0},[this._v("entity")]),this._v("的子组件添加包折线对象的实体到场景。折线对象描述的是折线，前两个位置定义线段，每个附加位置定义前一个位置的线段。 这些段可以是线性连接点，大弧度或夹紧到地形。如示例所示。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polyline.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polyline1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"positions1"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":clampToGround")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("heightPositions")]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polyline.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polyline2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"positions2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polyline.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polyline3"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"positions3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polyline-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polyline1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions1")]),s._v(": [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("90")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("120")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(" }],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polyline2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions2")]),s._v(": [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("90")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("120")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(" }],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polyline3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions3")]),s._v(": [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("90")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("120")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("10000")]),s._v(" }],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.RED\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineGlowMaterialProperty({\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("glowPower")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.2")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.Color.BLUE\n        })\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线是否可显示。")])]),s._v(" "),a("tr",[a("td",[s._v("positions")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定表示线条的位置数组。 "),a("strong",[s._v("结构：[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]")])])]),s._v(" "),a("tr",[a("td",[s._v("width")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线的宽度（像素）。")])]),s._v(" "),a("tr",[a("td",[s._v("granularity")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定用于绘制线的材质。")])]),s._v(" "),a("tr",[a("td",[s._v("depthFailMaterial")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定用于绘制低于地形的线的材质。")])]),s._v(" "),a("tr",[a("td",[s._v("arcType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线条类型。 "),a("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("clampToGround")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线是否贴地。")])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定这些是否投射或接收来自每个光源的阴影。 "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("classificationType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定相机到线的距离。 "),a("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定相机到线的距离。 "),a("strong",[s._v("结构：{ near: number, far: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("zIndex")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定用于排序地面几何的 zIndex。 仅当"),a("code",{pre:!0},[s._v("clampToGround")]),s._v("为真且支持地形上的折线时才有效。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("官方文档 "),t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html"}},[this._v("PolylineGraphics")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}]},uns1:function(s,t,a){"use strict";a.r(t);var l=a("9FSj"),n=a.n(l);for(var v in l)"default"!==v&&function(s){a.d(t,s,function(){return l[s]})}(v);var r=a("kX6U"),_=a("JFUb"),e=Object(_.a)(n.a,r.a,r.b,!1,null,null,null);t.default=e.exports}}]);