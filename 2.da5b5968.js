(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{BJZl:function(e,i,t){var n,r,o;r=[i,t("iwog")],void 0===(o="function"==typeof(n=function(i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,r=(n=t)&&n.__esModule?n:{default:n},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.default={inject:{$services:"services"},provide:function(){return e={},i="services",t=this.getServices(),i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e;var e,i,t},methods:{getServices:function(){return(0,r.default)({},this.$services||{})},isEmptyObj:function(e){for(var i in e)return!1;return!0},processArray:function(e){for(var i=e.length-1;i>=0;i--)"object"===o(e[i])&&this.removeNullItem(e[i],e,i);return 0===e.length},proccessObject:function(e){for(var i in e)null===e[i]||void 0===e[i]?delete e[i]:"object"===o(e[i])&&this.isEmptyObj(e[i])&&delete e[i]},removeNullItem:function(e,i,t){var n={}.toString.call(e);"[object Array]"===n?this.processArray(e):"[object Object]"===n&&this.proccessObject(e)}},beforeCreate:function(){for(var e=this.$parent;e&&(null==e._provided||null==e._provided.services);)e=e.$parent;null!=e&&null!=e._provided.services||delete this.$options.inject.$services}},e.exports=i.default})?n.apply(i,r):n)||(e.exports=o)},CyRr:function(e,i,t){"use strict";t.r(i);var n=t("ji+2"),r=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,function(){return n[e]})}(o);var a=t("J79+"),s=t("JFUb"),c=Object(s.a)(r.a,a.a,a.b,!1,null,null,null);i.default=c.exports},DgvE:function(e,i,t){var n,r,o;r=[i],void 0===(o="function"==typeof(n=function(e){"use strict";function i(e){return e&&new Cesium.Cartesian2(e.x,e.y)}function t(e){return"undefined"==typeof Cesium?e:e&&e.hasOwnProperty("x")?new Cesium.Cartesian3(e.x,e.y,e.z):e&&e.hasOwnProperty("lng")?Cesium.Cartesian3.fromDegrees(e.lng,e.lat,e.height):e}function n(e){if(e&&e instanceof Array&&e[0]instanceof Cesium.Cartesian3)return e;var i=[];return e.forEach(function(e){i.push(e.lng),i.push(e.lat),i.push(e.height)}),i.length>=3?Cesium.Cartesian3.fromDegreesArrayHeights(i):e}function r(e){return e&&new Cesium.Quaternion(e.x,e.y,e.z,e.w)}function o(e){return e&&new Cesium.NearFarScalar(e.near,e.nearValue,e.far,e.farValue)}function a(e){return e&&new Cesium.DistanceDisplayCondition(e.near,e.far)}function s(e){return"undefined"==typeof Cesium?e:e instanceof Cesium.Color?e:e instanceof Array?new Cesium.Color(e[0],e[1],e[2],e[3]):"string"==typeof e?Cesium.Color.fromCssColorString(e):e}Object.defineProperty(e,"__esModule",{value:!0}),e.isFunction=function(e){return"function"==typeof e},e.lnglatValidator=function(e,i){return!!/^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/.test(e)&&!!/^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/.test(i)},e.makeCartesian2=i,e.makeCartesian3=t,e.makeCartesian3Array=n,e.makeCartesian2Array=function(e){var i=[];return e.forEach(function(e){i.push(new Cesium.Cartesian2(e.x,e.y))}),i},e.makeQuaternion=r,e.makePolygonHierarchy=function(e){return"undefined"==typeof Cesium?e:e instanceof Array&&e.length>=3?new Cesium.PolygonHierarchy(n(e)):(Cesium.defined(e.positions)&&(e.positions=n(e.positions),function e(i){i.forEach(function(i){i.positions=n(i.positions),i.holes&&e(i.holes)})}(e.holes)),e)},e.makeNearFarScalar=o,e.makeDistanceDisplayCondition=a,e.makeColor=s,e.makeMaterial=function(e){return e instanceof Array||"string"==typeof e&&!/(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(e)?s(e):e},e.makeRectangle=function(e){return"undefined"==typeof Cesium?e:e&&Cesium.Rectangle.fromDegrees(e.west,e.south,e.east,e.north)},e.makeBoundingRectangle=function(e){return e&&new Cesium.BoundingRectangle(e.x,e.y,e.width,e.height)},e.makePlane=function(e){return Cesium.Cartesian3.normalize(t(e.normal),e.normal),new Cesium.Plane(e.normal,e.distance)},e.makeTranslationRotationScale=function(e){return e&&new Cesium.TranslationRotationScale(t(e.translation),r(e.rotation),t(e.scale))},e.makePointOptions=function(e){var i=e.color,n=e.disableDepthTestDistance,r=e.distanceDisplayCondition,c=e.id,l=e.outlineColor,d=e.outlineWidth,u=e.pixelSize,m=e.position,f=e.scaleByDistance,v=e.show,h=e.translucencyByDistance;return{color:s(i),disableDepthTestDistance:n,distanceDisplayCondition:a(r),id:c,outlineColor:s(l),outlineWidth:d,pixelSize:u,position:t(m),scaleByDistance:o(f),show:v,translucencyByDistance:o(h)}},e.makePolylineOptions=function(e){var i=e.show,t=e.width,r=e.loop,o=e.material,s=e.positions,c=e.id,l=e.distanceDisplayCondition;return{show:i,width:t,loop:r,material:o,positions:n(s),id:c,distanceDisplayCondition:a(l)}},e.makeLabelOptions=function(e){var n=e.backgroundColor,r=e.backgroundPadding,c=e.disableDepthTestDistance,l=e.distanceDisplayCondition,d=e.eyeOffset,u=e.fillColor,m=e.font,f=e.heightReference,v=e.horizontalOrigin,h=e.id,y=e.outlineColor,p=e.outlineWidth,g=e.pixelOffset,w=e.pixelOffsetScaleByDistance,C=e.position,b=e.scale,B=e.scaleByDistance,P=e.show,D=e.showBackground,k=e.labelStyle,M=e.text,_=e.totalScale,E=e.translucencyByDistance,S=e.verticalOrigin;return{backgroundColor:s(n),backgroundPadding:i(r),disableDepthTestDistance:c,distanceDisplayCondition:a(l),eyeOffset:t(d),fillColor:s(u),font:m,heightReference:f,horizontalOrigin:v,id:h,outlineColor:s(y),outlineWidth:p,pixelOffset:i(g),pixelOffsetScaleByDistance:o(w),position:t(C),scale:b,scaleByDistance:o(B),show:P,showBackground:D,style:k,text:M,totalScale:_,translucencyByDistance:o(E),verticalOrigin:S}},e.makeBillboardptions=function(e){var n=e.alignedAxis,r=e.color,c=e.disableDepthTestDistance,l=e.distanceDisplayCondition,d=e.eyeOffset,u=e.height,m=e.heightReference,f=e.horizontalOrigin,v=e.id,h=e.image,y=e.pixelOffset,p=e.pixelOffsetScaleByDistance,g=e.position,w=e.rotation,C=e.scale,b=e.scaleByDistance,B=e.show,P=e.sizeInMeters,D=e.translucencyByDistance,k=e.verticalOrigin,M=e.width;return{alignedAxis:t(n),color:s(r),disableDepthTestDistance:c,distanceDisplayCondition:a(l),eyeOffset:t(d),height:u,heightReference:m,horizontalOrigin:f,id:v,image:h,pixelOffset:i(y),pixelOffsetScaleByDistance:o(p),position:t(g),rotation:w,scale:C,scaleByDistance:o(b),show:B,sizeInMeters:P,translucencyByDistance:o(D),verticalOrigin:k,width:M}},e.checkType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},e.toKebabCase=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).replace(/^-/,"")},e.getDocumentByClassName=function(e,i){var t=void 0,n={};try{Array.prototype.slice.call(e).forEach(function(e){if(e.className===i)throw t=e,n})}catch(e){if(e!==n)throw e}return t}})?n.apply(i,r):n)||(e.exports=o)},HgmE:function(e,i,t){var n,r,o;r=[i,t("WprB"),t("DgvE")],void 0===(o="function"==typeof(n=function(i,t,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){var r=this,o=i||t.Events[(0,n.toKebabCase)(this.$options._componentTag)];o&&o.forEach(function(i){if(e[i]){var t=r.$listeners[i];t&&e[i].addEventListener(t.fns)}})},e.exports=i.default})?n.apply(i,r):n)||(e.exports=o)},"J79+":function(e,i,t){"use strict";t.d(i,"a",function(){return n}),t.d(i,"b",function(){return r});var n=function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"viewer",staticStyle:{width:"100%",height:"100%"},attrs:{id:"cesiumContainer"}},[this._t("default")],2)},r=[]},WprB:function(e,i,t){var n,r,o;r=[i],void 0===(o="function"==typeof(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Events={"cesium-viewer":["selectedEntityChanged","trackedEntityChanged"],"cesium-3dtileset":["allTilesLoaded","initialTilesLoaded","loadProgress","tileFailed","tileLoad","tileUnload","tileVisible"],"imagery-layer-events":["errorEvent"],"entity-events":["definitionChanged"],"viewer-mouse-events":["LEFT_CLICK","LEFT_DOUBLE_CLICK","LEFT_DOWN","LEFT_UP","MIDDLE_CLICK","MIDDLE_DOWN","MIDDLE_UP","MOUSE_MOVE","PINCH_END","PINCH_MOVE","PINCH_START","RIGHT_CLICK","RIGHT_DOWN","RIGHT_UP","WHEEL"],"datasource-events":["changedEvent","errorEvent","loadingEvent"],"viewer-children-events":[{name:"imageryLayers",events:["layerAdded","layerMoved","layerRemoved","layerShownOrHidden"]},{name:"dataSources",events:["dataSourceAdded","dataSourceMoved","dataSourceRemoved"]},{name:"entities",events:["collectionChanged"]},{name:"scene",events:["morphComplete","morphStart","postRender","postUpdate","preRender","preUpdate","renderError","terrainProviderChanged"]},{name:"camera",events:["changed","moveEnd","moveStart"]},{name:"clock",events:["onStop","onTick"]},{name:"terrainProvider",events:["errorEvent"]}]}})?n.apply(i,r):n)||(e.exports=o)},iwog:function(e,i,t){var n,r,o;r=[i,t("pHxd")],void 0===(o="function"==typeof(n=function(i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(){for(var e=void 0,i=arguments.length,t=Array(i),n=0;n<i;n++)t[n]=arguments[n];return"object"!==o(t[t.length-1])&&(e=t.pop()),t.slice(1).reduce(function(i,t,n){return(0,r.default)(i,t,e)},t[0])};var n,r=(n=t)&&n.__esModule?n:{default:n},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=i.default})?n.apply(i,r):n)||(e.exports=o)},"ji+2":function(e,i,t){(function(n){var r,o,a,s;s=function(i,t,r,o,a,s,c){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=m(t),d=m(o),u=m(a);function m(e){return e&&e.__esModule?e:{default:e}}i.default={name:"cesium-viewer",mixins:[d.default],props:{cesiumPath:String,animation:{type:Boolean,default:!1},baseLayerPicker:{type:Boolean,default:!1},fullscreenButton:{type:Boolean,default:!1},vrButton:{type:Boolean,default:!1},geocoder:{type:Boolean,default:!1},homeButton:{type:Boolean,default:!1},infoBox:{type:Boolean,default:!0},sceneModePicker:{type:Boolean,default:!1},selectionIndicator:{type:Boolean,default:!0},timeline:{type:Boolean,default:!1},navigationHelpButton:{type:Boolean,default:!1},navigationInstructionsInitiallyVisible:{type:Boolean,default:!1},scene3DOnly:{type:Boolean,default:!1},shouldAnimate:{type:Boolean,default:!1},clockViewModel:Object,selectedImageryProviderViewModel:Object,imageryProviderViewModels:Object,selectedTerrainProviderViewModel:Object,terrainProviderViewModels:Object,imageryProvider:Object,terrainProvider:Object,skyBox:Object,skyAtmosphere:Object,fullscreenElement:{type:Element|String},useDefaultRenderLoop:{type:Boolean,default:!0},targetFrameRate:Number,showRenderLoopErrors:{type:Boolean,default:!0},automaticallyTrackDataSourceClocks:{type:Boolean,default:!0},contextOptions:Object,sceneMode:{type:Number,default:3},mapProjection:Object,globe:Object,orderIndependentTranslucency:{type:Boolean,default:!0},creditContainer:String,creditViewport:String,dataSources:Object,terrainExaggeration:{type:Number,default:1},shadows:{type:Boolean,default:!1},terrainShadows:{type:Number,default:3},mapMode2D:{type:Number,default:1},projectionPicker:{type:Boolean,default:!1},requestRenderMode:{type:Boolean,default:!1},maximumRenderTimeChange:{type:Number,default:0},navigation:{type:Boolean,default:!1},logo:{type:Boolean,default:!0},accessToken:String,camera:{type:Object,default:function(){return{position:{lng:105,lat:29.999999999999993,height:19059568.497290563},heading:360,pitch:-90,roll:0}}}},watch:{selectionIndicator:function(e){var i=this.Cesium,t=this.viewer,n=this.viewerContainer;if(!i.defined(t.selectionIndicator)||t.selectionIndicator.isDestroyed()||e){if(!i.defined(t.selectionIndicator)||t.selectionIndicator.isDestroyed()){var r=document.createElement("div");r.className="cesium-viewer-selectionIndicatorContainer",n.appendChild(r);var o=new i.SelectionIndicator(r,t.scene);t._selectionIndicator=o}}else{t.selectionIndicator.destroy(),t._selectionIndicator=void 0;var a=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-selectionIndicatorContainer");n.removeChild(a)}},infoBox:function(e){var i=this.Cesium,t=this.viewer,n=this.viewerContainer;if(!i.defined(t.infoBox)||t.infoBox.isDestroyed()||e){if(!i.defined(t.infoBox)||t.infoBox.isDestroyed()){var r=document.createElement("div");r.className="cesium-viewer-infoBoxContainer",n.appendChild(r);var o=new i.InfoBox(r),a=o.viewModel;t._eventHelper.add(a.cameraClicked,t._onInfoBoxCameraClicked,t),t._eventHelper.add(a.closeClicked,t._onInfoBoxClockClicked,t),t._infoBox=o,t._forceResize=!0,t.resize()}}else{t.infoBox.destroy(),t._infoBox=void 0;var c=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-infoBoxContainer");n.removeChild(c)}},geocoder:function(e){var i=this.Cesium,t=this.viewer,n=this.resizeToolbar,r=this.viewerContainer,o=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-toolbar");if(!i.defined(t.geocoder)||t.geocoder.isDestroyed()||e){if(!i.defined(t.geocoder)||t.geocoder.isDestroyed()){var a=document.createElement("div");a.className="cesium-viewer-geocoderContainer",o.appendChild(a);var c=new i.Geocoder({container:a,geocoderServices:i.defined(this.geocoder)?i.isArray(this.geocoder)?this.geocoder:[this.geocoder]:void 0,scene:t.scene,viewer:t});t._eventHelper.add(c.viewModel.search.beforeExecute,t._clearObjects,t),t._geocoder=c,n(o,a)}}else{t.geocoder.destroy(),t._geocoder=void 0;var l=(0,s.getDocumentByClassName)(o.children,"cesium-viewer-geocoderContainer");o.removeChild(l)}},homeButton:function(e){var i=this.Cesium,t=this.viewer,n=this.resizeToolbar,r=this.viewerContainer,o=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-toolbar");if(!i.defined(t.homeButton)||t.homeButton.isDestroyed()||e){if(!i.defined(t.homeButton)||t.homeButton.isDestroyed()){var a=new i.HomeButton(o,t.scene);i.defined(t.geocoder)&&t._eventHelper.add(a.viewModel.command.afterExecute,function(){var e=t.geocoder.viewModel;e.searchText="",e.isSearchInProgress&&e.search()}),t._eventHelper.add(a.viewModel.command.beforeExecute,t._clearTrackedObject,t),t._homeButton=a,n(o,a)}}else t.homeButton.destroy(),t._homeButton=void 0},sceneModePicker:function(e){var i=this.Cesium,t=this.viewer,n=this.resizeToolbar,r=this.viewerContainer,o=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-toolbar");if(!i.defined(t.sceneModePicker)||t.sceneModePicker.isDestroyed()||e){if(!i.defined(t.sceneModePicker)||t.sceneModePicker.isDestroyed()){if(!0===this.sceneModePicker&&this.scene3DOnly)throw new i.DeveloperError("options.sceneModePicker is not available when options.scene3DOnly is set to true.");if(!this.scene3DOnly&&!0===this.sceneModePicker){var a=new i.SceneModePicker(o,t.scene);t._sceneModePicker=a,n(o,a)}}}else t.sceneModePicker.destroy(),t._sceneModePicker=void 0},projectionPicker:function(e){var i=this.Cesium,t=this.viewer,n=this.resizeToolbar,r=this.viewerContainer,o=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-toolbar");if(!i.defined(t.projectionPicker)||t.projectionPicker.isDestroyed()||e){if(!i.defined(t.projectionPicker)||t.projectionPicker.isDestroyed()){var a=new i.ProjectionPicker(o,t.scene);t._projectionPicker=a,n(o,a)}}else t.projectionPicker.destroy(),t._projectionPicker=void 0},baseLayerPicker:function(e){var i=this.Cesium,t=this.viewer,n=this.resizeToolbar,r=this.viewerContainer,o=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-toolbar");if(!i.defined(t.baseLayerPicker)||t.baseLayerPicker.isDestroyed()||e){if(!i.defined(t.baseLayerPicker)||t.baseLayerPicker.isDestroyed()){var a=!(i.defined(t.globe)&&!1===this.globe||i.defined(t.baseLayerPicker)&&!1===this.baseLayerPicker);if(a&&i.defined(this.imageryProvider))throw new i.DeveloperError("options.imageryProvider is not available when using the BaseLayerPicker widget.\nEither specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.");if(!a&&i.defined(this.selectedImageryProviderViewModel))throw new i.DeveloperError("options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.\nEither specify options.imageryProvider instead or set options.baseLayerPicker to true.");if(a&&i.defined(this.terrainProvider))throw new i.DeveloperError("options.terrainProvider is not available when using the BaseLayerPicker widget.\nEither specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.");if(!a&&i.defined(this.selectedTerrainProviderViewModel))throw new i.DeveloperError("options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.\nEither specify options.terrainProvider instead or set options.baseLayerPicker to true.");if(a){t.imageryLayers.removeAll();var c=i.defaultValue(this.imageryProviderViewModels,i.createDefaultImageryProviderViewModels()),l=i.defaultValue(this.terrainProviderViewModels,i.createDefaultTerrainProviderViewModels()),d=new i.BaseLayerPicker(o,{globe:t.scene.globe,imageryProviderViewModels:c,selectedImageryProviderViewModel:c[0],terrainProviderViewModels:l,selectedTerrainProviderViewModel:l[0]}),u=o.getElementsByClassName("cesium-baseLayerPicker-dropDown")[0];t._baseLayerPickerDropDown=u,t._baseLayerPicker=d,n(o,d)}}}else t.imageryLayers.removeAll(),t.baseLayerPicker.destroy(),t._baseLayerPicker=void 0,i.defined(i.SuperMapImageryProvider)?t.imageryLayers.add(new i.ImageryLayer(new i.SingleTileImageryProvider({url:i.buildModuleUrl("Assets/Textures/GlobalBkLayer.jpg")}))):t.imageryLayers.addImageryProvider(i.createTileMapServiceImageryProvider({url:i.buildModuleUrl("Assets/Textures/NaturalEarthII")}))},navigationHelpButton:function(e){var i=this.Cesium,t=this.viewer,n=this.resizeToolbar,r=this.viewerContainer,o=(0,s.getDocumentByClassName)(r.children,"cesium-viewer-toolbar");if(!i.defined(t.navigationHelpButton)||t.navigationHelpButton.isDestroyed()||e){if(!i.defined(t.navigationHelpButton)||t.navigationHelpButton.isDestroyed()){var a=!0;try{if(i.defined(window.localStorage)){var c=window.localStorage.getItem("cesium-hasSeenNavHelp");i.defined(c)&&Boolean(c)?a=!1:window.localStorage.setItem("cesium-hasSeenNavHelp","true")}}catch(e){}var l=new i.NavigationHelpButton({container:o,instructionsInitiallyVisible:i.defaultValue(this.navigationInstructionsInitiallyVisible,a)});t._navigationHelpButton=l,n(o,l)}}else t.navigationHelpButton.destroy(),t._navigationHelpButton=void 0},animation:function(e){var i=this.Cesium,t=this.viewer,n=this.viewerContainer;if(!i.defined(t.animation)||t.animation.isDestroyed()||e){if(!i.defined(t.animation)||t.animation.isDestroyed()){var r=document.createElement("div");r.className="cesium-viewer-animationContainer",this.viewerContainer.appendChild(r);var o=new i.Animation(r,new i.AnimationViewModel(t.clockViewModel));t._animation=o,t._forceResize=!0,t.resize()}}else{t.animation.destroy();var a=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-animationContainer");n.removeChild(a),t._animation=void 0,t._forceResize=!0,t.resize()}},timeline:function(e){var i=this.Cesium,t=this.viewer,n=this.viewerContainer,r=this.onTimelineScrubfunction;if(!i.defined(t.timeline)||t.timeline.isDestroyed()||e){if(!i.defined(t.timeline)||t.timeline.isDestroyed()){var o=document.createElement("div");o.className="cesium-viewer-timelineContainer",n.appendChild(o);var a=new i.Timeline(o,t.clock);a.addEventListener("settime",r,!1),a.zoomTo(t.clock.startTime,t.clock.stopTime),t._timeline=a,t._forceResize=!0,t.resize()}}else{t.timeline.destroy(),t._timeline=void 0;var c=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-timelineContainer");n.removeChild(c),t._forceResize=!0,t.resize()}},fullscreenButton:function(e){var i=this.Cesium,t=this.viewer,n=this.viewerContainer;if(!i.defined(t.fullscreenButton)||t.fullscreenButton.isDestroyed()||e){if(!i.defined(t.fullscreenButton)||t.fullscreenButton.isDestroyed()){var r=document.createElement("div");r.className="cesium-viewer-fullscreenContainer",n.appendChild(r);var o=new i.FullscreenButton(r,this.$refs.viewer);t._fullscreenButton=o,t._forceResize=!0,t.resize()}}else{t.fullscreenButton.destroy(),t._fullscreenButton=void 0;var a=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-fullscreenContainer");n.removeChild(a),t._forceResize=!0,t.resize()}},fullscreenElement:function(e){var i=this.Cesium,t=this.viewer;i.defined(t.fullscreenButton)&&i.defined(e)&&(this.viewer.fullscreenButton.viewModel.fullscreenElement=e)},vrButton:function(e){var i=this.Cesium,t=this.viewer,n=this.viewerContainer,r=this.enableVRUI;if(!i.defined(t.vrButton)||t.vrButton.isDestroyed()||e){if(!i.defined(t.vrButton)||t.vrButton.isDestroyed()){var o=document.createElement("div");o.className="cesium-viewer-vrContainer",n.appendChild(o);var a=new i.VRButton(o,t.scene,n),c=a.viewModel._command;a.viewModel._command=function(e){c(),r(t,e.isVRMode)},t._vrButton=a,t._forceResize=!0,t.resize()}}else{t.vrButton.destroy(),t._vrButton=void 0;var l=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-vrContainer");n.removeChild(l),t._forceResize=!0,t.resize()}},useDefaultRenderLoop:function(e){this.viewer.useDefaultRenderLoop=e},navigation:function(e){var i=this.Cesium,t=this.viewer,n=this.viewerContainer;if(i.defined(t.navigation)&&!e){t.navigation.viewModel.eventHelper.removeAll(),i.destroyObject(t.navigation.viewModel),t._navigation=void 0;var r=(0,s.getDocumentByClassName)(n.children,"cesium-viewer-navigationContainer");n.removeChild(r)}else if(!i.defined(t.navigation)){var o=document.createElement("div");o.className="cesium-viewer-navigationContainer",n.appendChild(o);var a=new i.Navigation({container:o,viewer:t,scene:t.scene});t._navigation=a,t._forceResize=!0,t.resize()}},sceneMode:function(e){var i=this.Cesium,t=this.viewer;i.SceneMode.COLUMBUS_VIEW!==e&&i.SceneMode.MORPHING!==e&&i.SceneMode.SCENE2D!==e&&i.SceneMode.SCENE3D!==e||(t.scene.mode=e)},shouldAnimate:function(e){this.viewer.clock.shouldAnimate=e},terrainExaggeration:function(e){this.viewer.scene._terrainExaggeration=e},shadows:function(e){this.viewer.scene.shadowMap.enabled=e},terrainProvider:function(e){this.viewer.terrainProvider=e},camera:{handler:function(e){var i=this.Cesium;this.viewer.camera.setView({destination:i.Cartesian3.fromDegrees(e.position.lng,e.position.lat,e.position.height),orientation:{heading:i.Math.toRadians(e.heading),pitch:i.Math.toRadians(e.pitch),roll:i.Math.toRadians(e.roll)}})},deep:!0},imageryProvider:function(e,i){var t=this.Cesium,n=this.viewer;if(t.defined(e)){for(var r=0;r<n.imageryLayers.length;r++)n.imageryLayers[r].imageryProvider===i&&n.imageryLayers.remove(n.imageryLayers[r]);n.imageryLayers.addImageryProvider(e)}}},methods:{onTimelineScrubfunction:function(e){var i=e.clock;i.currentTime=e.timeJulian,i.shouldAnimate=!1},resizeToolbar:function(e,i){Array.prototype.slice.call(e.children).forEach(function(e){switch(e.className){case"cesium-viewer-geocoderContainer":e.customIndex=1;break;case"cesium-button cesium-toolbar-button cesium-home-button":e.customIndex=2;break;case"cesium-sceneModePicker-wrapper cesium-toolbar-button":e.customIndex=3;break;case"cesium-projectionPicker-wrapper cesium-toolbar-button":e.customIndex=4;break;case"cesium-button cesium-toolbar-button":case"cesium-baseLayerPicker-dropDown":e.customIndex=5;break;case"cesium-navigationHelpButton-wrapper":e.customIndex=6}});var t=[];Array.prototype.slice.call(e.children).forEach(function(e){t.push(e)}),t.sort(function(e,i){return e.customIndex-i.customIndex});for(var n=0;n<t.length;n++)e.appendChild(t[n])},enableVRUI:function(e,i){var t=this.Cesium,n=e._geocoder,r=e._homeButton,o=e._sceneModePicker,a=e._projectionPicker,s=e._baseLayerPicker,c=e._animation,l=e._timeline,d=e._fullscreenButton,u=e._infoBox,m=e._selectionIndicator,f=i?"hidden":"visible";if(t.defined(n)&&(n.container.style.visibility=f),t.defined(r)&&(r.container.style.visibility=f),t.defined(o)&&(o.container.style.visibility=f),t.defined(a)&&(a.container.style.visibility=f),t.defined(s)&&(s.container.style.visibility=f),t.defined(c)&&(c.container.style.visibility=f),t.defined(l)&&(l.container.style.visibility=f),t.defined(d)&&d.viewModel.isFullscreenEnabled&&(d.container.style.visibility=f),t.defined(u)&&(u.container.style.visibility=f),t.defined(m)&&(m.container.style.visibility=f),e._container){var v=i||!t.defined(d)?0:d.container.clientWidth;e._vrButton.container.style.right=v+"px",e.forceResize()}},init:function(e){var i=this;if(!this.viewer){var t=this.$refs.viewer,n=this.accessToken?this.accessToken:void 0!==this._Cesium&&this._Cesium().hasOwnProperty("accessToken")?this._Cesium().accessToken:this.accessToken;e.Ion.defaultAccessToken=n;var o=this.animation,a=this.baseLayerPicker,c=this.fullscreenButton,d=this.vrButton,u=this.geocoder,m=this.homeButton,f=this.infoBox,v=this.sceneModePicker,h=this.selectionIndicator,y=this.timeline,p=this.navigationHelpButton,g=this.navigationInstructionsInitiallyVisible,w=this.scene3DOnly,C=this.shouldAnimate,b=this.clockViewModel,B=this.selectedImageryProviderViewModel,P=this.imageryProviderViewModels,D=this.selectedTerrainProviderViewModel,k=this.terrainProviderViewModels,M=this.imageryProvider,_=this.terrainProvider,E=this.skyBox,S=this.skyAtmosphere,I=this.fullscreenElement,x=this.useDefaultRenderLoop,O=this.targetFrameRate,T=this.showRenderLoopErrors,L=this.automaticallyTrackDataSourceClocks,j=this.contextOptions,N=this.sceneMode,R=this.mapProjection,V=this.globe,z=this.orderIndependentTranslucency,A=this.creditContainer,H=this.creditViewport,$=this.dataSources,W=this.terrainExaggeration,U=this.shadows,F=this.terrainShadows,J=this.mapMode2D,G=this.projectionPicker,K=this.requestRenderMode,q=this.maximumRenderTimeChange,Z=this.navigation,Q=e.buildModuleUrl("Assets/Textures/NaturalEarthII"),X={animation:o,baseLayerPicker:a,fullscreenButton:c,vrButton:d,geocoder:u,homeButton:m,infoBox:f,sceneModePicker:v,selectionIndicator:h,timeline:y,navigationHelpButton:p,navigationInstructionsInitiallyVisible:g,scene3DOnly:w,shouldAnimate:C,clockViewModel:b,selectedImageryProviderViewModel:B,imageryProviderViewModels:P,selectedTerrainProviderViewModel:D,terrainProviderViewModels:k,imageryProvider:this.isEmptyObj(M)?e.defined(e.TileMapServiceImageryProvider)?new e.TileMapServiceImageryProvider({url:Q}):e.createTileMapServiceImageryProvider({url:Q}):M,terrainProvider:_,skyBox:E,skyAtmosphere:S,fullscreenElement:this.isEmptyObj(I)?this.$refs.viewer:I,useDefaultRenderLoop:x,targetFrameRate:O,showRenderLoopErrors:T,automaticallyTrackDataSourceClocks:L,contextOptions:j,sceneMode:N,mapProjection:R,globe:V,orderIndependentTranslucency:z,creditContainer:A,creditViewport:H,dataSources:$,terrainExaggeration:W,shadows:U,terrainShadows:F,mapMode2D:J,projectionPicker:G,requestRenderMode:K,maximumRenderTimeChange:q,navigation:Z};this.removeNullItem(X);var Y=new e.Viewer(t,X);this.viewer=Y,l.default.call(this,Y),r.Events["viewer-children-events"].forEach(function(e){l.default.call(i,Y[e.name],e.events)});var ee=new e.ScreenSpaceEventHandler(Y.canvas);r.Events["viewer-mouse-events"].forEach(function(t){var n=i.$listeners[t];n&&ee.setInputAction(n.fns,e.ScreenSpaceEventType[t])}),e.defined(this.camera)&&Y.camera.setView({destination:e.Cartesian3.fromDegrees(this.camera.position.lng,this.camera.position.lat,this.camera.position.height),orientation:{heading:e.Math.toRadians(this.camera.heading),pitch:e.Math.toRadians(this.camera.pitch),roll:e.Math.toRadians(this.camera.roll)}});var ie=this;if(Y.camera.changed.addEventListener(function(){var t=ie.$listeners["update:camera"],n=Y.camera.positionCartographic,r={position:{lng:e.Math.toDegrees(n.longitude),lat:e.Math.toDegrees(n.latitude),height:n.height},heading:e.Math.toDegrees(Y.camera.heading),pitch:e.Math.toDegrees(Y.camera.pitch),roll:e.Math.toDegrees(Y.camera.roll)};t&&i.$emit("update:camera",r)}),this.viewerContainer=(0,s.getDocumentByClassName)(this.$refs.viewer.children,"cesium-viewer"),e.defined(e.SuperMapImageryProvider)&&!this.logo){var te=Y.scene.frameState.creditDisplay;te.container.removeChild(te._imageContainer)}this.logo||(Y.cesiumWidget.creditContainer.style.display="none"),this.$emit("ready",{Cesium:e,viewer:Y})}},initViewer:function(e){this.Cesium=e,this.init(e)},getCesiumScript:function(){if(n.Cesium)return n.Cesium._preloader?n.Cesium._preloader:Promise.resolve(n.Cesium);var e=this.cesiumPath?this.cesiumPath:void 0!==this._Cesium&&this._Cesium().hasOwnProperty("cesiumPath")?this._Cesium().cesiumPath:"https://unpkg.com/cesium/Build/Cesium/Cesium.js";return n.Cesium={},n.Cesium._preloader=new Promise(function(i,t){n._initCesium=function(){i(n.Cesium),n.Cesium._preloader=null,n._initCesium=null};var r=c.dirname(e),o=document.createElement("link");o.rel="stylesheet",n.document.head.appendChild(o),o.href=r+"/Widgets/widgets.css";var a=document.createElement("script");n.document.body.appendChild(a),a.src=e,a.onload=function(){if(n._initCesium(),n.Cesium.SuperMapImageryProvider){var e=document.createElement("script");n.document.body.appendChild(e),e.src=r+"/Workers/zlib.min.js"}}}),n.Cesium._preloader},reset:function(){var e=this.getCesiumScript,i=this.initViewer;e().then(i)},getServices:function(){var e=this;return(0,u.default)({},{get Cesium(){return e.Cesium},get viewer(){return e.viewer}})}},mounted:function(){this.reset()},destroyed:function(){if(n.Cesium){var e=document.getElementsByTagName("script"),i=[],t=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var c=a.value;c.src.indexOf("/Cesium.js")>-1&&i.push(c),n.Cesium.SuperMapImageryProvider&&c.src.indexOf("/Workers/zlib.min.js")>-1&&i.push(c)}}catch(e){r=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(r)throw o}}i.forEach(function(e){document.getElementsByTagName("body")[0].removeChild(e)});var l=document.getElementsByTagName("link"),d=!0,u=!1,m=void 0;try{for(var f,v=l[Symbol.iterator]();!(d=(f=v.next()).done);d=!0){var h=f.value;h.href.indexOf("Widgets/widgets.css")>-1&&document.getElementsByTagName("head")[0].removeChild(h)}}catch(e){u=!0,m=e}finally{try{!d&&v.return&&v.return()}finally{if(u)throw m}}n.Cesium=null}}},e.exports=i.default},o=[i,t("HgmE"),t("WprB"),t("BJZl"),t("iwog"),t("DgvE"),t("33yf")],void 0===(a="function"==typeof(r=s)?r.apply(i,o):r)||(e.exports=a)}).call(this,t("yLpj"))}}]);