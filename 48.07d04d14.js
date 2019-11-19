(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{PdSk:function(s,a,t){var e,r,n;r=[a],void 0===(n="function"==typeof(e=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{appearance:null,geometry:null,image:"https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png",rectangle:{west:102.5,south:29.5,east:106.5,north:33.5},interleave:!0,asynchronous:!0}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance,t=a.Cesium,e=a.viewer;e.camera.setView({destination:new t.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}}),this.appearance=new t.MaterialAppearance({material:new t.Material({fabric:{type:"Image",uniforms:{image:this.image}}})}),this.play()},play:function(){var s=["https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/2.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/3.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/4.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/5.png"],a=0,t=this;setInterval(function(){t.appearance.material.uniforms.image=s[a],5==++a&&(a=0)},500)}}},s.exports=a.default})?e.apply(a,r):e)||(s.exports=n)},RqRb:function(s,a,t){"use strict";t.r(a);var e=t("PdSk"),r=t.n(e);for(var n in e)"default"!==n&&function(s){t.d(a,s,function(){return e[s]})}(n);var v=t("obLo"),l=t("JFUb"),_=Object(l.a)(r.a,v.a,v.b,!1,null,null,null);a.default=_.exports},f4Mq:function(s,a,t){s.exports=t("RqRb")},obLo:function(s,a,t){"use strict";t.d(a,"a",function(){return e}),t.d(a,"b",function(){return r});var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("GroundPrimitive")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("add a RectangleGeometry to viewer")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("cesium-viewer",{on:{ready:s.ready}},[t("cesium-terrain-provider"),s._v(" "),t("ground-primitive",{attrs:{appearance:s.appearance,asynchronous:s.asynchronous,interleave:s.interleave}},[t("geometry-instance",{attrs:{geometry:s.geometry}},[t("rectangle-geometry",{attrs:{rectangle:s.rectangle}})],1)],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},r=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("ground-primitive")]),s._v(" The component loads the geometry object of the "),t("code",{pre:!0},[s._v("Primitive API")]),s._v(". According to the Cesium organization, you need to wrap "),t("code",{pre:!0},[s._v("geometry-instance")]),s._v(" as an intermediate component to add the collection object "),t("code",{pre:!0},[s._v("Geometry")]),s._v(". Compared to "),t("code",{pre:!0},[s._v("primitive")]),s._v(", "),t("code",{pre:!0},[s._v("ground-primitive")]),s._v(" supports adding geodetic objects, "),t("code",{pre:!0},[s._v("CircleGeometry")]),s._v(", "),t("code",{pre:!0},[s._v("CorridorGeometry")]),s._v(", "),t("code",{pre:!0},[s._v("EllipseGeometry")]),s._v(", "),t("code",{pre:!0},[s._v("PolygonGeometry")]),s._v(", and "),t("code",{pre:!0},[s._v("RectangleGeometry")]),s._v(".")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-terrain-provider")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-terrain-provider")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ground-primitive")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":asynchronous")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"asynchronous"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":interleave")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"interleave"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("geometry-instance")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":geometry")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-geometry")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":rectangle")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"rectangle"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-geometry")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("geometry-instance")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ground-primitive")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("rectangle")]),s._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("102.5")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("106.5")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("interleave")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("asynchronous")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.camera.setView({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{attrs:{class:"hljs-number"}},[s._v("-1432246.8223880068")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("5761224.588247942")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("3297281.1889481535")]),s._v("),\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("6.20312220367255")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("-0.9937536846355606")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.002443376981836387")]),s._v("\n          }\n        })\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.MaterialAppearance({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Material({\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("fabric")]),s._v(": {\n              "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Image'")]),s._v(",\n              "),t("span",{attrs:{class:"hljs-attr"}},[s._v("uniforms")]),s._v(": {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".image\n              }\n            }\n          })\n        })\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".play()\n      },\n      play() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" urls = [\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/2.png'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/3.png'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/4.png'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/5.png'")]),s._v("\n        ]\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" _this = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        setInterval("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n          _this.appearance.material.uniforms.image = urls[i]\n          i++\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (i === "),t("span",{attrs:{class:"hljs-number"}},[s._v("5")]),s._v(") i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        }, "),t("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v(")\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("Reference official document "),a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html"}},[this._v("GroundPrimitive")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])])])])}]}}]);