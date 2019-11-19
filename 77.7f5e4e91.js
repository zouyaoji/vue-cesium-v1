(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"16uM":function(s,t,a){var l,n,r;n=[t],void 0===(r="function"==typeof(l=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{description:"Hello Vue Cesium",polygon1:{},hierarchy1:[{lng:-115,lat:37},{lng:-115,lat:32},{lng:-107,lat:33},{lng:-102,lat:31},{lng:-102,lat:35}],material1:"red",polygon2:{},hierarchy2:[],material2:"GREEN",polygon3:{},hierarchy3:[],material3:{},outlineColor3:{},polygon4:{},hierarchy4:{positions:[{lng:-99,lat:30},{lng:-85,lat:30},{lng:-85,lat:40},{lng:-99,lat:40}],holes:[{positions:[{lng:-97,lat:31},{lng:-97,lat:39},{lng:-87,lat:39},{lng:-87,lat:31}],holes:[{positions:[{lng:-95,lat:33},{lng:-89,lat:33},{lng:-89,lat:37},{lng:-95,lat:37}],holes:[{positions:[{lng:-93,lat:34},{lng:-91,lat:34},{lng:-91,lat:36},{lng:-93,lat:36}]}]}]}]},material4:{},polygon5:{},hierarchy5:[],material5:{},outlineColor5:"BLACK",polygon6:{},hierarchy6:[],material6:{},arcType6:{},outlineColor6:{}}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.hierarchy2=[{lng:-108,lat:42},{lng:-100,lat:42},{lng:-104,lat:40}],this.hierarchy3=[{lng:-108,lat:25,height:1e5},{lng:-100,lat:25,height:1e5},{lng:-100,lat:30,height:1e5},{lng:-108,lat:30,height:1e5}],this.materia3=t.Color.ORANGE.withAlpha(.5),this.material4=t.Color.BLUE.withAlpha(.5),this.material5=t.Color.CYAN.withAlpha(.5),this.hierarchy6=[{lng:-120,lat:45},{lng:-80,lat:45},{lng:-80,lat:55},{lng:-120,lat:55}],this.material6=t.Color.PURPLE,this.outlineColor6=t.Color.MAGENTA},subReady:function(s){s.Cesium;var t=s.viewer;t.zoomTo(t.entities)}}},s.exports=t.default})?l.apply(t,n):l)||(s.exports=r)},"82O5":function(s,t,a){"use strict";a.r(t);var l=a("16uM"),n=a.n(l);for(var r in l)"default"!==r&&function(s){a.d(t,s,function(){return l[s]})}(r);var _=a("9/0+"),v=a("JFUb"),e=Object(v.a)(n.a,_.a,_.b,!1,null,null,null);t.default=e.exports},"9/0+":function(s,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return n});var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("多边形")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加多边形到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{description:s.description,polygon:s.polygon1},on:{"update:polygon":function(t){s.polygon1=t}}},[a("polygon-graphics",{attrs:{hierarchy:s.hierarchy1,material:s.material1}})],1),s._v(" "),a("entity",{attrs:{description:s.description,polygon:s.polygon2},on:{"update:polygon":function(t){s.polygon2=t}}},[a("polygon-graphics",{attrs:{hierarchy:s.hierarchy2,material:s.material2,extrudedHeight:5e5,closeTop:!1,closeBottom:!1}})],1),s._v(" "),a("entity",{attrs:{description:s.description,polygon:s.polygon3},on:{"update:polygon":function(t){s.polygon3=t}}},[a("polygon-graphics",{attrs:{hierarchy:s.hierarchy3,material:s.material3,extrudedHeight:0,perPositionHeight:!0,outline:!0,outlineColor:s.outlineColor3}})],1),s._v(" "),a("entity",{attrs:{description:s.description,polygon:s.polygon4},on:{"update:polygon":function(t){s.polygon4=t}}},[a("polygon-graphics",{attrs:{hierarchy:s.hierarchy4,material:s.material4,height:0,outline:!0}})],1),s._v(" "),a("entity",{attrs:{description:s.description,polygon:s.polygon5},on:{"update:polygon":function(t){s.polygon5=t}}},[a("polygon-graphics",{attrs:{hierarchy:s.hierarchy5,material:s.material5,perPositionHeight:!0,outline:!0,outlineColor:s.outlineColor5}})],1),s._v(" "),a("entity",{attrs:{description:s.description,polygon:s.polygon6},on:{"update:polygon":function(t){s.polygon6=t}}},[a("polygon-graphics",{attrs:{hierarchy:s.hierarchy6,material:s.material6,extrudedHeight:5e4,outline:!0,outlineColor:s.outlineColor6},on:{ready:s.subReady}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(6)],1)},n=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("polygon-graphics")]),this._v(" 多边形组件，作为"),t("code",{pre:!0},[this._v("entity")]),this._v("的子组件添加包含面的实体到场景。描述由构成外部形状和任何嵌套孔的线性环的层次结构定义的多边形。 多边形符合地球的曲率，可以放置在地面上或海拔高度，并且可以选择性地挤压成一个体积，如示例所示。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polygon.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polygon1"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":hierarchy")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hierarchy1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polygon.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polygon2"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":hierarchy")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hierarchy2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"500000.0"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":closeTop")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":closeBottom")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polygon.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polygon3"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":hierarchy")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hierarchy3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":perPositionHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor3"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polygon.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polygon4"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":hierarchy")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hierarchy4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polygon.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polygon5"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":hierarchy")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hierarchy5"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material5"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":perPositionHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor5"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":polygon.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"polygon6"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":hierarchy")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"hierarchy6"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material6"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"50000"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor6"')]),s._v("\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n        >")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("polygon-graphics")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polygon1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("hierarchy1")]),s._v(": [\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-115")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("37.0")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-115")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("32.0")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-107")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("33.0")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-102")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("31.0")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-102")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("35.0")]),s._v(" }\n        ],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polygon2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("hierarchy2")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'GREEN'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polygon3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("hierarchy3")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor3")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polygon4")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("hierarchy4")]),s._v(": {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-99.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v(" },\n            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-85.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v(" },\n            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-85.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-99.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" }\n          ],\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n            {\n              "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-97.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("31.0")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-97.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("39.0")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-87.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("39.0")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-87.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("31.0")]),s._v(" }\n              ],\n              "),a("span",{attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n                {\n                  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                    { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-95.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("33.0")]),s._v(" },\n                    { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-89.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("33.0")]),s._v(" },\n                    { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-89.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("37.0")]),s._v(" },\n                    { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-95.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("37.0")]),s._v(" }\n                  ],\n                  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n                    {\n                      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                        { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-93.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("34.0")]),s._v(" },\n                        { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-91.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("34.0")]),s._v(" },\n                        { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-91.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v(" },\n                        { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-93.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("36.0")]),s._v(" }\n                      ]\n                    }\n                  ]\n                }\n              ]\n            }\n          ]\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material4")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polygon5")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("hierarchy5")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material5")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor5")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'BLACK'")]),s._v(",\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("polygon6")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("hierarchy6")]),s._v(": [],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material6")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("arcType6")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor6")]),s._v(": {}\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".hierarchy2 = [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-108.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("42.0")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-100.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("42.0")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-104.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" }]\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".hierarchy3 = [\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-108.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("25.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100000")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-100.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("25.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100000")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-100.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100000")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-108.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100000")]),s._v(" }\n        ]\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".materia3 = Cesium.Color.ORANGE.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material4 = Cesium.Color.BLUE.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material5 = Cesium.Color.CYAN.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".hierarchy6 = [\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-120.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("45.0")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-80.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("45.0")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-80.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("55.0")]),s._v(" },\n          { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-120.0")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("55.0")]),s._v(" }\n        ]\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material6 = Cesium.Color.PURPLE\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor6 = Cesium.Color.MAGENTA\n      },\n      subReady(cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        viewer.zoomTo(viewer.entities)\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 是否显示。")])]),s._v(" "),a("tr",[a("td",[s._v("hierarchy")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的 PolygonHierarchy 属性。")])]),s._v(" "),a("tr",[a("td",[s._v("height")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 的高度。")])]),s._v(" "),a("tr",[a("td",[s._v("heightReference")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 高度模式。 "),a("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸高度。")])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeightReference")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸的高度模式。 "),a("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("stRotation")]),s._v(" "),a("td",[s._v("Number|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 纹理按正北方向逆时针旋转角度。")])]),s._v(" "),a("tr",[a("td",[s._v("granularity")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定每个经纬度之间的采样粒度。")])]),s._v(" "),a("tr",[a("td",[s._v("fill")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 是否填充材质。")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'white'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 材质。")])]),s._v(" "),a("tr",[a("td",[s._v("outline")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 是否绘制轮廓线。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'black'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 轮廓线颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 轮廓线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("perPositionHeight")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 是否使用每个位置的高度。")])]),s._v(" "),a("tr",[a("td",[s._v("closeTop")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸出来的顶部是否闭合。")])]),s._v(" "),a("tr",[a("td",[s._v("closeBottom")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 拉伸出来的底部是否闭合。")])]),s._v(" "),a("tr",[a("td",[s._v("arcType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 线条类型。"),a("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 是否投射或接收阴影。 "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 随相机距离改变是否显示参数。"),a("strong",[s._v("结构：{ near: number, far: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("classificationType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 贴对象模式。 "),a("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("zIndex")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 polygon 顺序，没有高度和拉伸高度时有效。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("hierarchy 结构")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("// Array")]),s._v("\n[{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("// Object")]),s._v("\n{\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n    {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n        positions: [{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n        "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      ]\n    }\n  ]\n}\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("官方文档 "),t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html"}},[this._v("PolygonGraphics")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}]},u1lh:function(s,t,a){s.exports=a("82O5")}}]);