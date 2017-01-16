/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,s;for(var c in b)if(b.hasOwnProperty(c)){if(e=[],t=b[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),T.push((a?"":"no-")+s.join("-"))}}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function s(e,n,r,a){var s,c,l,d,u="modernizr",f=o("div"),p=i();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=a?a[r]:u+(r+1),f.appendChild(l);return s=o("style"),s.type="text/css",s.id="s"+u,(p.fake?p:f).appendChild(s),p.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),c=n(f,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=d,w.offsetHeight):f.parentNode.removeChild(f),!!c}function c(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?w.className.baseVal=t:w.className=t)}function l(e,t){if("object"==typeof e)for(var n in e)E(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),a=Modernizr[r[0]];if(2==r.length&&(a=a[r[1]]),"undefined"!=typeof a)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),c([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(u(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+u(t[a])+":"+r+")");return o=o.join(" or "),s("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,a,i){function s(){l&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(a,"undefined")){var c=f(e,a);if(!r(c,"undefined"))return c}for(var l,u,m,g,h,v=["modernizr","tspan"];!N.style;)l=!0,N.modElem=o(v.shift()),N.style=N.modElem.style;for(m=e.length,u=0;m>u;u++)if(g=e[u],h=N.style[g],d(g,"-")&&(g=p(g)),N.style[g]!==n){if(i||r(a,"undefined"))return s(),"pfx"==t?g:!0;try{N.style[g]=a}catch(y){}if(N.style[g]!=h)return s(),"pfx"==t?g:!0}return s(),!1}function g(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?g(a,n||t):a);return!1}function v(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,a,o):(s=(e+" "+z.join(i+" ")+i).split(" "),h(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var T=[],w=t.documentElement,S="svg"===w.nodeName.toLowerCase();S||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,l(t)}function o(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function l(e){e||(e=t);var r=o(e);return!b.shivCSS||d||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var d,u,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:a};e.html5=b,l(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var C=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return s("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=C;var E;!function(){var e={}.hasOwnProperty;E=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){x.addTest=l});var k="Moz O ms Webkit",_=x._config.usePrefixes?k.split(" "):[];x._cssomPrefixes=_;var P={elem:o("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style});var z=x._config.usePrefixes?k.toLowerCase().split(" "):[];x._domPrefixes=z,x.testAllProps=v;var R=function(t){var r,a=M.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;a>i;i++){var s=M[i],c=s.toUpperCase()+"_"+r;if(c in o)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=R;var $=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=p(e)),t?v(e,t,n):v(e,"pfx"))},A=x.testStyles=s,O=x.testProp=function(e,t,r){return m([e],n,t,r)};x.testAllProps=y;var L=function(){function e(e,t){var a;return e?(t&&"string"!=typeof t||(t=o(t||"div")),e="on"+e,a=e in t,!a&&r&&(t.setAttribute||(t=o("div")),t.setAttribute(e,""),a="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),a):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=L;var M=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];x._prefixes=M;var B=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,a=533>t&&e.match(/android/gi);return n||a||r}();B?Modernizr.addTest("fontface",!1):A('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",y("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("hsla",function(){var e=o("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",d(e.backgroundColor,"rgba")||d(e.backgroundColor,"hsla")}),Modernizr.addTest("multiplebgs",function(){var e=o("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=o("a").style;return e.cssText=M.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=o("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("textshadow",O("textShadow","1px 1px")),Modernizr.addTest("cssanimations",y("animationName","a",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),A('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",a=0,i=M.length-1;i>a;a++)e=0===a?"to ":"",r+=t+M[a]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=o("a"),c=s.style;return c.cssText=r,(""+c.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("cssreflections",y("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)});var j="CSS"in e&&"supports"in e.CSS,F="supportsCSS"in e;Modernizr.addTest("supports",j||F),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",A(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("canvas",function(){var e=o("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof o("canvas").getContext("2d").fillText}),Modernizr.addTest("hashchange",function(){return L("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("audio",function(){var e=o("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("video",function(){var e=o("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t});var I;try{I=$("indexedDB",e)}catch(D){}Modernizr.addTest("indexeddb",!!I),I&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in I);var W=o("input"),q="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),V={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)V[t[n]]=!!(t[n]in W);return V.list&&(V.list=!(!o("datalist")||!e.HTMLDataListElement)),V}(q);var H="search tel url email datetime date month week time datetime-local number range color".split(" "),U={};Modernizr.inputtypes=function(e){for(var r,a,o,i=e.length,s="1)",c=0;i>c;c++)W.setAttribute("type",r=e[c]),o="text"!==W.type&&"style"in W,o&&(W.value=s,W.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&W.style.WebkitAppearance!==n?(w.appendChild(W),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(W,null).WebkitAppearance&&0!==W.offsetHeight,w.removeChild(W)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?W.checkValidity&&W.checkValidity()===!1:W.value!=s)),U[e[c]]=!!o;return U}(H),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("inlinesvg",function(){var e=o("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var G={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("webgl",function(){var t=o("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),a(),delete x.addTest,delete x.addAsyncTest;for(var J=0;J<Modernizr._q.length;J++)Modernizr._q[J]();e.Modernizr=Modernizr}(window,document);
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("jqueryI18next",e):t.jqueryI18next=e()}(this,function(){"use strict";function t(t,a){function r(n,a,r){function i(t,n){return s.parseDefaultValueFromContent?e["extends"]({},t,{defaultValue:n}):t}if(0!==a.length){var o="text";if(0===a.indexOf("[")){var f=a.split("]");a=f[1],o=f[0].substr(1,f[0].length-1)}if(a.indexOf(";")===a.length-1&&(a=a.substr(0,a.length-2)),"html"===o)n.html(t.t(a,i(r,n.html())));else if("text"===o)n.text(t.t(a,i(r,n.text())));else if("prepend"===o)n.prepend(t.t(a,i(r,n.html())));else if("append"===o)n.append(t.t(a,i(r,n.html())));else if(0===o.indexOf("data-")){var l=o.substr("data-".length),d=t.t(a,i(r,n.data(l)));n.data(l,d),n.attr(o,d)}else n.attr(o,t.t(a,i(r,n.attr(o))))}}function i(t,n){var i=t.attr(s.selectorAttr);if(i||"undefined"==typeof i||i===!1||(i=t.text()||t.val()),i){var o=t,f=t.data(s.targetAttr);if(f&&(o=t.find(f)||t),n||s.useOptionsAttr!==!0||(n=t.data(s.optionsAttr)),n=n||{},i.indexOf(";")>=0){var l=i.split(";");a.each(l,function(t,e){""!==e&&r(o,e,n)})}else r(o,i,n);if(s.useOptionsAttr===!0){var d={};d=e["extends"]({clone:d},n),delete d.lng,t.data(s.optionsAttr,d)}}}function o(t){return this.each(function(){i(a(this),t);var e=a(this).find("["+s.selectorAttr+"]");e.each(function(){i(a(this),t)})})}var s=arguments.length<=2||void 0===arguments[2]?{}:arguments[2];s=e["extends"]({},n,s),a[s.tName]=t.t.bind(t),a[s.i18nName]=t,a.fn[s.handleName]=o}var e={};e["extends"]=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};var n={tName:"t",i18nName:"i18n",handleName:"localize",selectorAttr:"data-i18n",targetAttr:"i18n-target",optionsAttr:"i18n-options",useOptionsAttr:!1,parseDefaultValueFromContent:!0},a={init:t};return a});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.i18next=e()}(this,function(){"use strict";function t(t){return null==t?"":""+t}function e(t,e,n){t.forEach(function(t){e[t]&&(n[t]=e[t])})}function n(t,e,n){function o(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}for(var r="string"!=typeof e?[].concat(e):e.split(".");r.length>1;){if(!t)return{};var i=o(r.shift());!t[i]&&n&&(t[i]=new n),t=t[i]}return t?{obj:t,k:o(r.shift())}:{}}function o(t,e,o){var r=n(t,e,Object),i=r.obj,s=r.k;i[s]=o}function r(t,e,o,r){var i=n(t,e,Object),s=i.obj,a=i.k;s[a]=s[a]||[],r&&(s[a]=s[a].concat(o)),r||s[a].push(o)}function i(t,e){var o=n(t,e),r=o.obj,i=o.k;if(r)return r[i]}function s(t,e,n){for(var o in e)o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof e[o]||e[o]instanceof String?n&&(t[o]=e[o]):s(t[o],e[o],n):t[o]=e[o];return t}function a(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function u(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,function(t){return P[t]}):t}function l(t){return t.interpolation={unescapeSuffix:"HTML"},t.interpolation.prefix=t.interpolationPrefix||"__",t.interpolation.suffix=t.interpolationSuffix||"__",t.interpolation.escapeValue=t.escapeInterpolation||!1,t.interpolation.nestingPrefix=t.reusePrefix||"$t(",t.interpolation.nestingSuffix=t.reuseSuffix||")",t}function c(t){return t.resStore&&(t.resources=t.resStore),t.ns&&t.ns.defaultNs?(t.defaultNS=t.ns.defaultNs,t.ns=t.ns.namespaces):t.defaultNS=t.ns||"translation",t.fallbackToDefaultNS&&t.defaultNS&&(t.fallbackNS=t.defaultNS),t.saveMissing=t.sendMissing,t.saveMissingTo=t.sendMissingTo||"current",t.returnNull=!t.fallbackOnNull,t.returnEmptyString=!t.fallbackOnEmpty,t.returnObjects=t.returnObjectTrees,t.joinArrays="\n",t.returnedObjectHandler=t.objectTreeKeyHandler,t.parseMissingKeyHandler=t.parseMissingKey,t.appendNamespaceToMissingKey=!0,t.nsSeparator=t.nsseparator,t.keySeparator=t.keyseparator,"sprintf"===t.shortcutFunction&&(t.overloadTranslationOptionHandler=function(t){for(var e=[],n=1;n<t.length;n++)e.push(t[n]);return{postProcess:"sprintf",sprintf:e}}),t.whitelist=t.lngWhitelist,t.preload=t.preload,"current"===t.load&&(t.load="currentOnly"),"unspecific"===t.load&&(t.load="languageOnly"),t.backend=t.backend||{},t.backend.loadPath=t.resGetPath||"locales/__lng__/__ns__.json",t.backend.addPath=t.resPostPath||"locales/add/__lng__/__ns__",t.backend.allowMultiLoading=t.dynamicLoad,t.cache=t.cache||{},t.cache.prefix="res_",t.cache.expirationTime=6048e5,t.cache.enabled=!!t.useLocalStorage,t=l(t),t.defaultVariables&&(t.interpolation.defaultVariables=t.defaultVariables),t}function p(t){return t=l(t),t.joinArrays="\n",t}function f(t){return(t.interpolationPrefix||t.interpolationSuffix||t.escapeInterpolation)&&(t=l(t)),t.nsSeparator=t.nsseparator,t.keySeparator=t.keyseparator,t.returnObjects=t.returnObjectTrees,t}function g(t){t.lng=function(){return j.deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."),t.services.languageUtils.toResolveHierarchy(t.language)[0]},t.preload=function(e,n){j.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"),t.loadLanguages(e,n)},t.setLng=function(e,n,o){return j.deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."),"function"==typeof n&&(o=n,n={}),n||(n={}),n.fixLng===!0&&o?o(null,t.getFixedT(e)):void t.changeLanguage(e,o)},t.addPostProcessor=function(e,n){j.deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"),t.use({type:"postProcessor",name:e,process:n})}}function h(t){return t.charAt(0).toUpperCase()+t.slice(1)}function d(){var t={};return T.forEach(function(e){e.lngs.forEach(function(n){return t[n]={numbers:e.nr,plurals:A[e.fc]}})}),t}function v(t,e){for(var n=t.indexOf(e);n!==-1;)t.splice(n,1),n=t.indexOf(e)}function y(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",saveMissing:!1,saveMissingTo:"fallback",missingKeyHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,overloadTranslationOptionHandler:function(t){return{defaultValue:t[1]}},interpolation:{escapeValue:!0,format:function(t,e,n){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",defaultVariables:void 0}}}function b(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.whitelist&&t.whitelist.indexOf("cimode")<0&&t.whitelist.push("cimode"),t}var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},x=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},S=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},w=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},L=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),N={type:"logger",log:function(t){this._output("log",t)},warn:function(t){this._output("warn",t)},error:function(t){this._output("error",t)},_output:function(t,e){console&&console[t]&&console[t].apply(console,Array.prototype.slice.call(e))}},O=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];x(this,t),this.subs=[],this.init(e,n)}return t.prototype.init=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];this.prefix=e.prefix||"i18next:",this.logger=t||N,this.options=e,this.debug=e.debug!==!1},t.prototype.setDebug=function(t){this.debug=t,this.subs.forEach(function(e){e.setDebug(t)})},t.prototype.log=function(){this.forward(arguments,"log","",!0)},t.prototype.warn=function(){this.forward(arguments,"warn","",!0)},t.prototype.error=function(){this.forward(arguments,"error","")},t.prototype.deprecate=function(){this.forward(arguments,"warn","WARNING DEPRECATED: ",!0)},t.prototype.forward=function(t,e,n,o){o&&!this.debug||("string"==typeof t[0]&&(t[0]=n+this.prefix+" "+t[0]),this.logger[e](t))},t.prototype.create=function(e){var n=new t(this.logger,k({prefix:this.prefix+":"+e+":"},this.options));return this.subs.push(n),n},t}(),j=new O,R=function(){function t(){x(this,t),this.observers={}}return t.prototype.on=function(t,e){var n=this;t.split(" ").forEach(function(t){n.observers[t]=n.observers[t]||[],n.observers[t].push(e)})},t.prototype.off=function(t,e){var n=this;this.observers[t]&&this.observers[t].forEach(function(){if(e){var o=n.observers[t].indexOf(e);o>-1&&n.observers[t].splice(o,1)}else delete n.observers[t]})},t.prototype.emit=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];this.observers[t]&&this.observers[t].forEach(function(t){t.apply(void 0,n)}),this.observers["*"]&&this.observers["*"].forEach(function(e){var o;e.apply(e,(o=[t]).concat.apply(o,n))})},t}(),P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},C=function(t){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments.length<=1||void 0===arguments[1]?{ns:["translation"],defaultNS:"translation"}:arguments[1];x(this,e);var r=w(this,t.call(this));return r.data=n,r.options=o,r}return S(e,t),e.prototype.addNamespaces=function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)},e.prototype.removeNamespaces=function(t){var e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)},e.prototype.getResource=function(t,e,n){var o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],r=o.keySeparator||this.options.keySeparator;void 0===r&&(r=".");var s=[t,e];return n&&"string"!=typeof n&&(s=s.concat(n)),n&&"string"==typeof n&&(s=s.concat(r?n.split(r):n)),t.indexOf(".")>-1&&(s=t.split(".")),i(this.data,s)},e.prototype.addResource=function(t,e,n,r){var i=arguments.length<=4||void 0===arguments[4]?{silent:!1}:arguments[4],s=this.options.keySeparator;void 0===s&&(s=".");var a=[t,e];n&&(a=a.concat(s?n.split(s):n)),t.indexOf(".")>-1&&(a=t.split("."),r=e,e=a[1]),this.addNamespaces(e),o(this.data,a,r),i.silent||this.emit("added",t,e,n,r)},e.prototype.addResources=function(t,e,n){for(var o in n)"string"==typeof n[o]&&this.addResource(t,e,o,n[o],{silent:!0});this.emit("added",t,e,n)},e.prototype.addResourceBundle=function(t,e,n,r,a){var u=[t,e];t.indexOf(".")>-1&&(u=t.split("."),r=n,n=e,e=u[1]),this.addNamespaces(e);var l=i(this.data,u)||{};r?s(l,n,a):l=k({},l,n),o(this.data,u,l),this.emit("added",t,e,n)},e.prototype.removeResourceBundle=function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)},e.prototype.hasResourceBundle=function(t,e){return void 0!==this.getResource(t,e)},e.prototype.getResourceBundle=function(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?k({},this.getResource(t,e)):this.getResource(t,e)},e.prototype.toJSON=function(){return this.data},e}(R),E={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,e,n,o,r){var i=this;return t.forEach(function(t){i.processors[t]&&(e=i.processors[t].process(e,n,o,r))}),e}},_=function(t){function n(o){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];x(this,n);var i=w(this,t.call(this));return e(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector"],o,i),i.options=r,i.logger=j.create("translator"),i}return S(n,t),n.prototype.changeLanguage=function(t){t&&(this.language=t)},n.prototype.exists=function(t){var e=arguments.length<=1||void 0===arguments[1]?{interpolation:{}}:arguments[1];return"v1"===this.options.compatibilityAPI&&(e=f(e)),void 0!==this.resolve(t,e)},n.prototype.extractFromKey=function(t,e){var n=e.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var o=e.ns||this.options.defaultNS;if(n&&t.indexOf(n)>-1){var r=t.split(n);o=r[0],t=r[1]}return"string"==typeof o&&(o=[o]),{key:t,namespaces:o}},n.prototype.translate=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if("object"!==("undefined"==typeof e?"undefined":m(e))?e=this.options.overloadTranslationOptionHandler(arguments):"v1"===this.options.compatibilityAPI&&(e=f(e)),void 0===t||null===t||""===t)return"";"number"==typeof t&&(t=String(t)),"string"==typeof t&&(t=[t]);var n=e.lng||this.language;if(n&&"cimode"===n.toLowerCase())return t[t.length-1];var o=e.keySeparator||this.options.keySeparator||".",r=this.extractFromKey(t[t.length-1],e),i=r.key,s=r.namespaces,a=s[s.length-1],u=this.resolve(t,e),l=Object.prototype.toString.apply(u),c=["[object Number]","[object Function]","[object RegExp]"],p=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays;if(u&&"string"!=typeof u&&c.indexOf(l)<0&&(!p||"[object Array]"!==l)){if(!e.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(i,u,e):"key '"+i+" ("+this.language+")' returned an object instead of string.";var g="[object Array]"===l?[]:{};for(var h in u)g[h]=this.translate(""+i+o+h,k({joinArrays:!1,ns:s},e));u=g}else if(p&&"[object Array]"===l)u=u.join(p),u&&(u=this.extendTranslation(u,i,e));else{var d=!1,v=!1;if(this.isValidLookup(u)||void 0===e.defaultValue||(d=!0,u=e.defaultValue),this.isValidLookup(u)||(v=!0,u=i),v||d){this.logger.log("missingKey",n,a,i,u);var y=[];if("fallback"===this.options.saveMissingTo&&this.options.fallbackLng&&this.options.fallbackLng[0])for(var b=0;b<this.options.fallbackLng.length;b++)y.push(this.options.fallbackLng[b]);else"all"===this.options.saveMissingTo?y=this.languageUtils.toResolveHierarchy(e.lng||this.language):y.push(e.lng||this.language);this.options.saveMissing&&(this.options.missingKeyHandler?this.options.missingKeyHandler(y,a,i,u):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(y,a,i,u)),this.emit("missingKey",y,a,i,u)}u=this.extendTranslation(u,i,e),v&&u===i&&this.options.appendNamespaceToMissingKey&&(u=a+":"+i),v&&this.options.parseMissingKeyHandler&&(u=this.options.parseMissingKeyHandler(u))}return u},n.prototype.extendTranslation=function(t,e,n){var o=this;n.interpolation&&this.interpolator.init(n);var r=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(r=k({},this.options.interpolation.defaultVariables,r)),t=this.interpolator.interpolate(t,r,this.language),t=this.interpolator.nest(t,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return o.translate.apply(o,e)},n),n.interpolation&&this.interpolator.reset();var i=n.postProcess||this.options.postProcess,s="string"==typeof i?[i]:i;return void 0!==t&&s&&s.length&&n.applyPostProcessor!==!1&&(t=E.handle(s,t,e,n,this)),t},n.prototype.resolve=function(t){var e=this,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=void 0;return"string"==typeof t&&(t=[t]),t.forEach(function(t){if(!e.isValidLookup(o)){var r=e.extractFromKey(t,n),i=r.key,s=r.namespaces;e.options.fallbackNS&&(s=s.concat(e.options.fallbackNS));var a=void 0!==n.count&&"string"!=typeof n.count,u=void 0!==n.context&&"string"==typeof n.context&&""!==n.context,l=n.lngs?n.lngs:e.languageUtils.toResolveHierarchy(n.lng||e.language);s.forEach(function(t){e.isValidLookup(o)||l.forEach(function(r){if(!e.isValidLookup(o)){var s=i,l=[s],c=void 0;a&&(c=e.pluralResolver.getSuffix(r,n.count)),a&&u&&l.push(s+c),u&&l.push(s+=""+e.options.contextSeparator+n.context),a&&l.push(s+=c);for(var p=void 0;p=l.pop();)e.isValidLookup(o)||(o=e.getResource(r,t,p,n))}})})}}),o},n.prototype.isValidLookup=function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)},n.prototype.getResource=function(t,e,n){var o=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];return this.resourceStore.getResource(t,e,n,o)},n}(R),M=function(){function t(e){x(this,t),this.options=e,this.whitelist=this.options.whitelist||!1,this.logger=j.create("languageUtils")}return t.prototype.getLanguagePartFromCode=function(t){if(t.indexOf("-")<0)return t;var e=["NB-NO","NN-NO","nb-NO","nn-NO","nb-no","nn-no"],n=t.split("-");return this.formatLanguageCode(e.indexOf(t)>-1?n[1].toLowerCase():n[0])},t.prototype.formatLanguageCode=function(t){if("string"==typeof t&&t.indexOf("-")>-1){var e=["hans","hant","latn","cyrl","cans","mong","arab"],n=t.split("-");return this.options.lowerCaseLng?n=n.map(function(t){return t.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=h(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=h(n[1].toLowerCase())),e.indexOf(n[2].toLowerCase())>-1&&(n[2]=h(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t},t.prototype.isWhitelisted=function(t,e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist&&!e)&&(t=this.getLanguagePartFromCode(t)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(t)>-1},t.prototype.toResolveHierarchy=function(t,e){var n=this;e=e||this.options.fallbackLng||[],"string"==typeof e&&(e=[e]);var o=[],r=function(t){var e=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];n.isWhitelisted(t,e)?o.push(t):n.logger.warn("rejecting non-whitelisted language code: "+t)};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(t),!0),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(t))):"string"==typeof t&&r(this.formatLanguageCode(t)),e.forEach(function(t){o.indexOf(t)<0&&r(n.formatLanguageCode(t))}),o},t}(),T=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","es_ar","et","eu","fi","fo","fur","fy","gl","gu","ha","he","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt","pt_br","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],A={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0===t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0===t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)}},H=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];x(this,t),this.languageUtils=e,this.options=n,this.logger=j.create("pluralResolver"),this.rules=d()}return t.prototype.addRule=function(t,e){this.rules[t]=e},t.prototype.getRule=function(t){return this.rules[this.languageUtils.getLanguagePartFromCode(t)]},t.prototype.needsPlural=function(t){var e=this.getRule(t);return!(e&&e.numbers.length<=1)},t.prototype.getSuffix=function(t,e){var n=this,o=this.getRule(t);if(!o)return this.logger.warn("no plural rule found for: "+t),"";var r=function(){if(1===o.numbers.length)return{v:""};var t=o.noAbs?o.plurals(e):o.plurals(Math.abs(e)),r=o.numbers[t];2===o.numbers.length&&1===o.numbers[0]&&(2===r?r="plural":1===r&&(r=""));var i=function(){return n.options.prepend&&r.toString()?n.options.prepend+r.toString():r.toString()};return"v1"===n.options.compatibilityJSON?1===r?{v:""}:"number"==typeof r?{v:"_plural_"+r.toString()}:{v:i()}:"v2"===n.options.compatibilityJSON||2===o.numbers.length&&1===o.numbers[0]?{v:i()}:2===o.numbers.length&&1===o.numbers[0]?{v:i()}:{v:n.options.prepend&&t.toString()?n.options.prepend+t.toString():t.toString()}}();return"object"===("undefined"==typeof r?"undefined":m(r))?r.v:void 0},t}(),V=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];x(this,e),this.logger=j.create("interpolator"),this.init(t,!0)}return e.prototype.init=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];e&&(this.options=t,this.format=t.interpolation&&t.interpolation.format||function(t){return t}),t.interpolation||(t.interpolation={escapeValue:!0});var n=t.interpolation;this.escapeValue=n.escapeValue,this.prefix=n.prefix?a(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?a(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?a(n.formatSeparator):n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?a(n.nestingPrefix):n.nestingPrefixEscaped||a("$t("),this.nestingSuffix=n.nestingSuffix?a(n.nestingSuffix):n.nestingSuffixEscaped||a(")");var o=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(o,"g");var r=this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(r,"g");var i=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(i,"g")},e.prototype.reset=function(){this.options&&this.init(this.options)},e.prototype.interpolate=function(e,n,o){function r(t){return t.replace(/\$/g,"$$$$")}for(var s=this,a=void 0,l=void 0,c=function(t){if(t.indexOf(s.formatSeparator)<0)return i(n,t);var e=t.split(s.formatSeparator),r=e.shift().trim(),a=e.join(s.formatSeparator).trim();return s.format(i(n,r),a,o)};a=this.regexpUnescape.exec(e);){var p=c(a[1].trim());e=e.replace(a[0],p),this.regexpUnescape.lastIndex=0}for(;a=this.regexp.exec(e);)l=c(a[1].trim()),"string"!=typeof l&&(l=t(l)),l||(this.logger.warn("missed to pass in variable "+a[1]+" for interpolating "+e),l=""),l=r(this.escapeValue?u(l):l),e=e.replace(a[0],l),this.regexp.lastIndex=0;return e},e.prototype.nest=function(e,n){function o(t){return t.replace(/\$/g,"$$$$")}function r(t){if(t.indexOf(",")<0)return t;var e=t.split(",");t=e.shift();var n=e.join(",");n=this.interpolate(n,l);try{l=JSON.parse(n)}catch(e){this.logger.error("failed parsing options string in nesting for key "+t,e)}return t}var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],s=void 0,a=void 0,l=JSON.parse(JSON.stringify(i));for(l.applyPostProcessor=!1;s=this.nestingRegexp.exec(e);)a=n(r.call(this,s[1].trim()),l),"string"!=typeof a&&(a=t(a)),a||(this.logger.warn("missed to pass in variable "+s[1]+" for interpolating "+e),a=""),a=o(this.escapeValue?u(a):a),e=e.replace(s[0],a),this.regexp.lastIndex=0;return e},e}(),U=function(t){function e(n,o,r){var i=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];x(this,e);var s=w(this,t.call(this));return s.backend=n,s.store=o,s.services=r,s.options=i,s.logger=j.create("backendConnector"),s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(r,i.backend,i),s}return S(e,t),e.prototype.queueLoad=function(t,e,n){var o=this,r=[],i=[],s=[],a=[];return t.forEach(function(t){var n=!0;e.forEach(function(e){var s=t+"|"+e;o.store.hasResourceBundle(t,e)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?i.indexOf(s)<0&&i.push(s):(o.state[s]=1,n=!1,i.indexOf(s)<0&&i.push(s),r.indexOf(s)<0&&r.push(s),a.indexOf(e)<0&&a.push(e)))}),n||s.push(t)}),(r.length||i.length)&&this.queue.push({pending:i,loaded:{},errors:[],callback:n}),{toLoad:r,pending:i,toLoadLanguages:s,toLoadNamespaces:a}},e.prototype.loaded=function(t,e,n){var o=this,i=t.split("|"),s=L(i,2),a=s[0],u=s[1];e&&this.emit("failedLoading",a,u,e),n&&this.store.addResourceBundle(a,u,n),this.state[t]=e?-1:2,this.queue.forEach(function(n){r(n.loaded,[a],u),v(n.pending,t),e&&n.errors.push(e),0!==n.pending.length||n.done||(n.errors.length?n.callback(n.errors):n.callback(),o.emit("loaded",n.loaded),n.done=!0)}),this.queue=this.queue.filter(function(t){return!t.done})},e.prototype.read=function(t,e,n,o,r,i){var s=this;return o||(o=0),r||(r=250),t.length?void this.backend[n](t,e,function(a,u){return a&&u&&o<5?void setTimeout(function(){s.read.call(s,t,e,n,++o,2*r,i)},r):void i(a,u)}):i(null,{})},e.prototype.load=function(t,e,n){var o=this;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();var r=k({},this.backend.options,this.options.backend);"string"==typeof t&&(t=this.services.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);var s=this.queueLoad(t,e,n);return s.toLoad.length?void(r.allowMultiLoading&&this.backend.readMulti?this.read(s.toLoadLanguages,s.toLoadNamespaces,"readMulti",null,null,function(t,e){t&&o.logger.warn("loading namespaces "+s.toLoadNamespaces.join(", ")+" for languages "+s.toLoadLanguages.join(", ")+" via multiloading failed",t),!t&&e&&o.logger.log("loaded namespaces "+s.toLoadNamespaces.join(", ")+" for languages "+s.toLoadLanguages.join(", ")+" via multiloading",e),s.toLoad.forEach(function(n){var r=n.split("|"),s=L(r,2),a=s[0],u=s[1],l=i(e,[a,u]);if(l)o.loaded(n,t,l);else{var c="loading namespace "+u+" for language "+a+" via multiloading failed";o.loaded(n,c),o.logger.error(c)}})}):!function(){var t=function(t){var e=this,n=t.split("|"),o=L(n,2),r=o[0],i=o[1];this.read(r,i,"read",null,null,function(n,o){n&&e.logger.warn("loading namespace "+i+" for language "+r+" failed",n),!n&&o&&e.logger.log("loaded namespace "+i+" for language "+r,o),e.loaded(t,n,o)})};s.toLoad.forEach(function(e){t.call(o,e)})}()):void(s.pending.length||n())},e.prototype.reload=function(t,e){var n=this;this.backend||this.logger.warn("No backend was added via i18next.use. Will not load resources.");var o=k({},this.backend.options,this.options.backend);"string"==typeof t&&(t=this.services.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]),o.allowMultiLoading&&this.backend.readMulti?this.read(t,e,"readMulti",null,null,function(o,r){o&&n.logger.warn("reloading namespaces "+e.join(", ")+" for languages "+t.join(", ")+" via multiloading failed",o),!o&&r&&n.logger.log("reloaded namespaces "+e.join(", ")+" for languages "+t.join(", ")+" via multiloading",r),t.forEach(function(t){e.forEach(function(e){var s=i(r,[t,e]);if(s)n.loaded(t+"|"+e,o,s);else{var a="reloading namespace "+e+" for language "+t+" via multiloading failed";n.loaded(t+"|"+e,a),n.logger.error(a)}})})}):!function(){var o=function(t){var e=this,n=t.split("|"),o=L(n,2),r=o[0],i=o[1];this.read(r,i,"read",null,null,function(n,o){n&&e.logger.warn("reloading namespace "+i+" for language "+r+" failed",n),!n&&o&&e.logger.log("reloaded namespace "+i+" for language "+r,o),e.loaded(t,n,o)})};t.forEach(function(t){e.forEach(function(e){o.call(n,t+"|"+e)})})}()},e.prototype.saveMissing=function(t,e,n,o){this.backend&&this.backend.create&&this.backend.create(t,e,n,o),t&&t[0]&&this.store.addResource(t[0],e,n,o)},e}(R),I=function(t){function e(n,o,r){var i=arguments.length<=3||void 0===arguments[3]?{}:arguments[3];x(this,e);var s=w(this,t.call(this));return s.cache=n,s.store=o,s.services=r,s.options=i,s.logger=j.create("cacheConnector"),s.cache&&s.cache.init&&s.cache.init(r,i.cache,i),s}return S(e,t),e.prototype.load=function(t,e,n){var o=this;if(!this.cache)return n&&n();var r=k({},this.cache.options,this.options.cache);"string"==typeof t&&(t=this.services.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]),r.enabled?this.cache.load(t,function(e,r){if(e&&o.logger.error("loading languages "+t.join(", ")+" from cache failed",e),r)for(var i in r)for(var s in r[i])if("i18nStamp"!==s){var a=r[i][s];a&&o.store.addResourceBundle(i,s,a)}n&&n()}):n&&n()},e.prototype.save=function(){this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data)},e}(R),K=function(t){function e(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments[1];x(this,e);var r=w(this,t.call(this));return r.options=b(n),r.services={},r.logger=j,r.modules={},o&&!r.isInitialized&&r.init(n,o),r}return S(e,t),e.prototype.init=function(t,e){function n(t){if(t)return"function"==typeof t?new t:t}var o=this;if("function"==typeof t&&(e=t,t={}),t||(t={}),"v1"===t.compatibilityAPI?this.options=k({},y(),b(c(t)),{}):"v1"===t.compatibilityJSON?this.options=k({},y(),b(p(t)),{}):this.options=k({},y(),this.options,b(t)),e||(e=function(){}),!this.options.isClone){this.modules.logger?j.init(n(this.modules.logger),this.options):j.init(null,this.options);var r=new M(this.options);this.store=new C(this.options.resources,this.options);var i=this.services;i.logger=j,i.resourceStore=this.store,i.resourceStore.on("added removed",function(t,e){i.cacheConnector.save()}),i.languageUtils=r,i.pluralResolver=new H(r,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON}),i.interpolator=new V(this.options),i.backendConnector=new U(n(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o.emit.apply(o,[t].concat(n))}),i.backendConnector.on("loaded",function(t){i.cacheConnector.save()}),i.cacheConnector=new I(n(this.modules.cache),i.resourceStore,i,this.options),i.cacheConnector.on("*",function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o.emit.apply(o,[t].concat(n))}),this.modules.languageDetector&&(i.languageDetector=n(this.modules.languageDetector),i.languageDetector.init(i,this.options.detection,this.options)),this.translator=new _(this.services,this.options),this.translator.on("*",function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o.emit.apply(o,[t].concat(n))})}var s=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle"];s.forEach(function(t){o[t]=function(){return this.store[t].apply(this.store,arguments)}}),"v1"===this.options.compatibilityAPI&&g(this);var a=function(){o.changeLanguage(o.options.lng,function(t,n){o.emit("initialized",o.options),o.logger.log("initialized",o.options),e(t,n)})};return this.options.resources||!this.options.initImmediate?a():setTimeout(a,0),this},e.prototype.loadResources=function(t){var e=this;if(t||(t=function(){}),this.options.resources)t(null);else{var n=function(){if(e.language&&"cimode"===e.language.toLowerCase())return{v:t()};var n=[],o=function(t){var o=e.services.languageUtils.toResolveHierarchy(t);o.forEach(function(t){n.indexOf(t)<0&&n.push(t)})};o(e.language),e.options.preload&&e.options.preload.forEach(function(t){o(t)}),e.services.cacheConnector.load(n,e.options.ns,function(){e.services.backendConnector.load(n,e.options.ns,t)})}();if("object"===("undefined"==typeof n?"undefined":m(n)))return n.v}},e.prototype.reloadResources=function(t,e){t||(t=this.languages),e||(e=this.options.ns),this.services.backendConnector.reload(t,e)},e.prototype.use=function(t){return"backend"===t.type&&(this.modules.backend=t),
"cache"===t.type&&(this.modules.cache=t),("logger"===t.type||t.log&&t.warn&&t.warn)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"postProcessor"===t.type&&E.addPostProcessor(t),this},e.prototype.changeLanguage=function(t,e){var n=this,o=function(o){t&&(n.emit("languageChanged",t),n.logger.log("languageChanged",t)),e&&e(o,function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return n.t.apply(n,e)})};!t&&this.services.languageDetector&&(t=this.services.languageDetector.detect()),t&&(this.language=t,this.languages=this.services.languageUtils.toResolveHierarchy(t),this.translator.changeLanguage(t),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage(t)),this.loadResources(function(t){o(t)})},e.prototype.getFixedT=function(t,e){var n=this,o=function t(e,o){return o=o||{},o.lng=o.lng||t.lng,o.ns=o.ns||t.ns,n.t(e,o)};return o.lng=t,o.ns=e,o},e.prototype.t=function(){return this.translator&&this.translator.translate.apply(this.translator,arguments)},e.prototype.exists=function(){return this.translator&&this.translator.exists.apply(this.translator,arguments)},e.prototype.setDefaultNamespace=function(t){this.options.defaultNS=t},e.prototype.loadNamespaces=function(t,e){var n=this;return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach(function(t){n.options.ns.indexOf(t)<0&&n.options.ns.push(t)}),void this.loadResources(e)):e&&e()},e.prototype.loadLanguages=function(t,e){"string"==typeof t&&(t=[t]);var n=this.options.preload||[],o=t.filter(function(t){return n.indexOf(t)<0});return o.length?(this.options.preload=n.concat(o),void this.loadResources(e)):e()},e.prototype.dir=function(t){t||(t=this.language);var e=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"];return e.indexOf(this.services.languageUtils.getLanguagePartFromCode(t))>=0?"rtl":"ltr"},e.prototype.createInstance=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];return new e(t,n)},e.prototype.cloneInstance=function(){var t=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments[1],r=new e(k({},n,this.options,{isClone:!0}),o),i=["store","translator","services","language"];return i.forEach(function(e){r[e]=t[e]}),r},e}(R),D=new K;return D});
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.i18nextXHRBackend=n()}(this,function(){"use strict";function t(t){return i.call(a.call(arguments,1),function(n){if(n)for(var e in n)void 0===t[e]&&(t[e]=n[e])}),t}function n(t,n,e,o,i){if(o&&"object"===("undefined"==typeof o?"undefined":r(o))){var a="",s=encodeURIComponent;for(var l in o)a+="&"+s(l)+"="+s(o[l]);o=a.slice(1)+(i?"":"&_t="+new Date)}try{var c=new(XMLHttpRequest||ActiveXObject)("MSXML2.XMLHTTP.3.0");c.open(o?"POST":"GET",t,1),n.crossDomain||c.setRequestHeader("X-Requested-With","XMLHttpRequest"),o&&c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.onreadystatechange=function(){c.readyState>3&&e&&e(c.responseText,c)},c.send(o)}catch(t){window.console&&console.log(t)}}function e(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,crossDomain:!1,ajax:n}}var o=[],i=o.forEach,a=o.slice,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},s=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),c=function(){function n(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];s(this,n),this.init(t,e),this.type="backend"}return l(n,[{key:"init",value:function(n){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];this.services=n,this.options=t(o,this.options||{},e())}},{key:"readMulti",value:function(t,n,e){var o=this.services.interpolator.interpolate(this.options.loadPath,{lng:t.join("+"),ns:n.join("+")});this.loadUrl(o,e)}},{key:"read",value:function(t,n,e){var o=this.services.interpolator.interpolate(this.options.loadPath,{lng:t,ns:n});this.loadUrl(o,e)}},{key:"loadUrl",value:function(t,n){var e=this;this.options.ajax(t,this.options,function(o,i){if(i.status>=500&&i.status<600)return n("failed loading "+t,!0);if(i.status>=400&&i.status<500)return n("failed loading "+t,!1);var a=void 0,r=void 0;try{a=e.options.parse(o,t)}catch(n){r="failed parsing "+t+" to json"}return r?n(r,!1):void n(null,a)})}},{key:"create",value:function(t,n,e,o){var i=this;"string"==typeof t&&(t=[t]);var a={};a[e]=o||"",t.forEach(function(t){var e=i.services.interpolator.interpolate(i.options.addPath,{lng:t,ns:n});i.options.ajax(e,i.options,function(t,n){},a)})}}]),n}();return c.type="backend",c});
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */


(function (factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	}
	else if (typeof module != "undefined" && typeof module.exports != "undefined") {
		module.exports = factory();
	}
	else if (typeof Package !== "undefined") {
		Sortable = factory();  // export for Meteor.js
	}
	else {
		/* jshint sub:true */
		window["Sortable"] = factory();
	}
})(function () {
	"use strict";

	var dragEl,
		parentEl,
		ghostEl,
		cloneEl,
		rootEl,
		nextEl,

		scrollEl,
		scrollParentEl,

		lastEl,
		lastCSS,
		lastParentCSS,

		oldIndex,
		newIndex,

		activeGroup,
		autoScroll = {},

		tapEvt,
		touchEvt,

		moved,

		/** @const */
		RSPACE = /\s+/g,

		expando = 'Sortable' + (new Date).getTime(),

		win = window,
		document = win.document,
		parseInt = win.parseInt,

		supportDraggable = !!('draggable' in document.createElement('div')),
		supportCssPointerEvents = (function (el) {
			el = document.createElement('x');
			el.style.cssText = 'pointer-events:auto';
			return el.style.pointerEvents === 'auto';
		})(),

		_silent = false,

		abs = Math.abs,
		slice = [].slice,

		touchDragOverListeners = [],

		_autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl) {
			// Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
			if (rootEl && options.scroll) {
				var el,
					rect,
					sens = options.scrollSensitivity,
					speed = options.scrollSpeed,

					x = evt.clientX,
					y = evt.clientY,

					winWidth = window.innerWidth,
					winHeight = window.innerHeight,

					vx,
					vy
				;

				// Delect scrollEl
				if (scrollParentEl !== rootEl) {
					scrollEl = options.scroll;
					scrollParentEl = rootEl;

					if (scrollEl === true) {
						scrollEl = rootEl;

						do {
							if ((scrollEl.offsetWidth < scrollEl.scrollWidth) ||
								(scrollEl.offsetHeight < scrollEl.scrollHeight)
							) {
								break;
							}
							/* jshint boss:true */
						} while (scrollEl = scrollEl.parentNode);
					}
				}

				if (scrollEl) {
					el = scrollEl;
					rect = scrollEl.getBoundingClientRect();
					vx = (abs(rect.right - x) <= sens) - (abs(rect.left - x) <= sens);
					vy = (abs(rect.bottom - y) <= sens) - (abs(rect.top - y) <= sens);
				}


				if (!(vx || vy)) {
					vx = (winWidth - x <= sens) - (x <= sens);
					vy = (winHeight - y <= sens) - (y <= sens);

					/* jshint expr:true */
					(vx || vy) && (el = win);
				}


				if (autoScroll.vx !== vx || autoScroll.vy !== vy || autoScroll.el !== el) {
					autoScroll.el = el;
					autoScroll.vx = vx;
					autoScroll.vy = vy;

					clearInterval(autoScroll.pid);

					if (el) {
						autoScroll.pid = setInterval(function () {
							if (el === win) {
								win.scrollTo(win.pageXOffset + vx * speed, win.pageYOffset + vy * speed);
							} else {
								vy && (el.scrollTop += vy * speed);
								vx && (el.scrollLeft += vx * speed);
							}
						}, 24);
					}
				}
			}
		}, 30),

		_prepareGroup = function (options) {
			var group = options.group;

			if (!group || typeof group != 'object') {
				group = options.group = {name: group};
			}

			['pull', 'put'].forEach(function (key) {
				if (!(key in group)) {
					group[key] = true;
				}
			});

			options.groups = ' ' + group.name + (group.put.join ? ' ' + group.put.join(' ') : '') + ' ';
		}
	;



	/**
	 * @class  Sortable
	 * @param  {HTMLElement}  el
	 * @param  {Object}       [options]
	 */
	function Sortable(el, options) {
		if (!(el && el.nodeType && el.nodeType === 1)) {
			throw 'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(el);
		}

		this.el = el; // root element
		this.options = options = _extend({}, options);


		// Export instance
		el[expando] = this;


		// Default options
		var defaults = {
			group: Math.random(),
			sort: true,
			disabled: false,
			store: null,
			handle: null,
			scroll: true,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			draggable: /[uo]l/i.test(el.nodeName) ? 'li' : '>*',
			ghostClass: 'sortable-ghost',
			chosenClass: 'sortable-chosen',
			ignore: 'a, img',
			filter: null,
			animation: 0,
			setData: function (dataTransfer, dragEl) {
				dataTransfer.setData('Text', dragEl.textContent);
			},
			dropBubble: false,
			dragoverBubble: false,
			dataIdAttr: 'data-id',
			delay: 0,
			forceFallback: false,
			fallbackClass: 'sortable-fallback',
			fallbackOnBody: false
		};


		// Set default options
		for (var name in defaults) {
			!(name in options) && (options[name] = defaults[name]);
		}

		_prepareGroup(options);

		// Bind all private methods
		for (var fn in this) {
			if (fn.charAt(0) === '_') {
				this[fn] = this[fn].bind(this);
			}
		}

		// Setup drag mode
		this.nativeDraggable = options.forceFallback ? false : supportDraggable;

		// Bind events
		_on(el, 'mousedown', this._onTapStart);
		_on(el, 'touchstart', this._onTapStart);

		if (this.nativeDraggable) {
			_on(el, 'dragover', this);
			_on(el, 'dragenter', this);
		}

		touchDragOverListeners.push(this._onDragOver);

		// Restore sorting
		options.store && this.sort(options.store.get(this));
	}


	Sortable.prototype = /** @lends Sortable.prototype */ {
		constructor: Sortable,

		_onTapStart: function (/** Event|TouchEvent */evt) {
			var _this = this,
				el = this.el,
				options = this.options,
				type = evt.type,
				touch = evt.touches && evt.touches[0],
				target = (touch || evt).target,
				originalTarget = target,
				filter = options.filter;


			if (type === 'mousedown' && evt.button !== 0 || options.disabled) {
				return; // only left button or enabled
			}

			target = _closest(target, options.draggable, el);

			if (!target) {
				return;
			}

			// get the index of the dragged element within its parent
			oldIndex = _index(target);

			// Check filter
			if (typeof filter === 'function') {
				if (filter.call(this, evt, target, this)) {
					_dispatchEvent(_this, originalTarget, 'filter', target, el, oldIndex);
					evt.preventDefault();
					return; // cancel dnd
				}
			}
			else if (filter) {
				filter = filter.split(',').some(function (criteria) {
					criteria = _closest(originalTarget, criteria.trim(), el);

					if (criteria) {
						_dispatchEvent(_this, criteria, 'filter', target, el, oldIndex);
						return true;
					}
				});

				if (filter) {
					evt.preventDefault();
					return; // cancel dnd
				}
			}


			if (options.handle && !_closest(originalTarget, options.handle, el)) {
				return;
			}


			// Prepare `dragstart`
			this._prepareDragStart(evt, touch, target);
		},

		_prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target) {
			var _this = this,
				el = _this.el,
				options = _this.options,
				ownerDocument = el.ownerDocument,
				dragStartFn;

			if (target && !dragEl && (target.parentNode === el)) {
				tapEvt = evt;

				rootEl = el;
				dragEl = target;
				parentEl = dragEl.parentNode;
				nextEl = dragEl.nextSibling;
				activeGroup = options.group;

				dragStartFn = function () {
					// Delayed drag has been triggered
					// we can re-enable the events: touchmove/mousemove
					_this._disableDelayedDrag();

					// Make the element draggable
					dragEl.draggable = true;

					// Chosen item
					_toggleClass(dragEl, _this.options.chosenClass, true);

					// Bind the events: dragstart/dragend
					_this._triggerDragStart(touch);
				};

				// Disable "draggable"
				options.ignore.split(',').forEach(function (criteria) {
					_find(dragEl, criteria.trim(), _disableDraggable);
				});

				_on(ownerDocument, 'mouseup', _this._onDrop);
				_on(ownerDocument, 'touchend', _this._onDrop);
				_on(ownerDocument, 'touchcancel', _this._onDrop);

				if (options.delay) {
					// If the user moves the pointer or let go the click or touch
					// before the delay has been reached:
					// disable the delayed drag
					_on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchend', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
					_on(ownerDocument, 'mousemove', _this._disableDelayedDrag);
					_on(ownerDocument, 'touchmove', _this._disableDelayedDrag);

					_this._dragStartTimer = setTimeout(dragStartFn, options.delay);
				} else {
					dragStartFn();
				}
			}
		},

		_disableDelayedDrag: function () {
			var ownerDocument = this.el.ownerDocument;

			clearTimeout(this._dragStartTimer);
			_off(ownerDocument, 'mouseup', this._disableDelayedDrag);
			_off(ownerDocument, 'touchend', this._disableDelayedDrag);
			_off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
			_off(ownerDocument, 'mousemove', this._disableDelayedDrag);
			_off(ownerDocument, 'touchmove', this._disableDelayedDrag);
		},

		_triggerDragStart: function (/** Touch */touch) {
			if (touch) {
				// Touch device support
				tapEvt = {
					target: dragEl,
					clientX: touch.clientX,
					clientY: touch.clientY
				};

				this._onDragStart(tapEvt, 'touch');
			}
			else if (!this.nativeDraggable) {
				this._onDragStart(tapEvt, true);
			}
			else {
				_on(dragEl, 'dragend', this);
				_on(rootEl, 'dragstart', this._onDragStart);
			}

			try {
				if (document.selection) {
					document.selection.empty();
				} else {
					window.getSelection().removeAllRanges();
				}
			} catch (err) {
			}
		},

		_dragStarted: function () {
			if (rootEl && dragEl) {
				// Apply effect
				_toggleClass(dragEl, this.options.ghostClass, true);

				Sortable.active = this;

				// Drag start event
				_dispatchEvent(this, rootEl, 'start', dragEl, rootEl, oldIndex);
			}
		},

		_emulateDragOver: function () {
			if (touchEvt) {
				if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY) {
					return;
				}

				this._lastX = touchEvt.clientX;
				this._lastY = touchEvt.clientY;

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', 'none');
				}

				var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY),
					parent = target,
					groupName = ' ' + this.options.group.name + '',
					i = touchDragOverListeners.length;

				if (parent) {
					do {
						if (parent[expando] && parent[expando].options.groups.indexOf(groupName) > -1) {
							while (i--) {
								touchDragOverListeners[i]({
									clientX: touchEvt.clientX,
									clientY: touchEvt.clientY,
									target: target,
									rootEl: parent
								});
							}

							break;
						}

						target = parent; // store last element
					}
					/* jshint boss:true */
					while (parent = parent.parentNode);
				}

				if (!supportCssPointerEvents) {
					_css(ghostEl, 'display', '');
				}
			}
		},


		_onTouchMove: function (/**TouchEvent*/evt) {
			if (tapEvt) {
				// only set the status to dragging, when we are actually dragging
				if (!Sortable.active) {
					this._dragStarted();
				}

				// as well as creating the ghost element on the document body
				this._appendGhost();

				var touch = evt.touches ? evt.touches[0] : evt,
					dx = touch.clientX - tapEvt.clientX,
					dy = touch.clientY - tapEvt.clientY,
					translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

				moved = true;
				touchEvt = touch;

				_css(ghostEl, 'webkitTransform', translate3d);
				_css(ghostEl, 'mozTransform', translate3d);
				_css(ghostEl, 'msTransform', translate3d);
				_css(ghostEl, 'transform', translate3d);

				evt.preventDefault();
			}
		},

		_appendGhost: function () {
			if (!ghostEl) {
				var rect = dragEl.getBoundingClientRect(),
					css = _css(dragEl),
					options = this.options,
					ghostRect;

				ghostEl = dragEl.cloneNode(true);

				_toggleClass(ghostEl, options.ghostClass, false);
				_toggleClass(ghostEl, options.fallbackClass, true);

				_css(ghostEl, 'top', rect.top - parseInt(css.marginTop, 10));
				_css(ghostEl, 'left', rect.left - parseInt(css.marginLeft, 10));
				_css(ghostEl, 'width', rect.width);
				_css(ghostEl, 'height', rect.height);
				_css(ghostEl, 'opacity', '0.8');
				_css(ghostEl, 'position', 'fixed');
				_css(ghostEl, 'zIndex', '100000');
				_css(ghostEl, 'pointerEvents', 'none');

				options.fallbackOnBody && document.body.appendChild(ghostEl) || rootEl.appendChild(ghostEl);

				// Fixing dimensions.
				ghostRect = ghostEl.getBoundingClientRect();
				_css(ghostEl, 'width', rect.width * 2 - ghostRect.width);
				_css(ghostEl, 'height', rect.height * 2 - ghostRect.height);
			}
		},

		_onDragStart: function (/**Event*/evt, /**boolean*/useFallback) {
			var dataTransfer = evt.dataTransfer,
				options = this.options;

			this._offUpEvents();

			if (activeGroup.pull == 'clone') {
				cloneEl = dragEl.cloneNode(true);
				_css(cloneEl, 'display', 'none');
				rootEl.insertBefore(cloneEl, dragEl);
			}

			if (useFallback) {

				if (useFallback === 'touch') {
					// Bind touch events
					_on(document, 'touchmove', this._onTouchMove);
					_on(document, 'touchend', this._onDrop);
					_on(document, 'touchcancel', this._onDrop);
				} else {
					// Old brwoser
					_on(document, 'mousemove', this._onTouchMove);
					_on(document, 'mouseup', this._onDrop);
				}

				this._loopId = setInterval(this._emulateDragOver, 50);
			}
			else {
				if (dataTransfer) {
					dataTransfer.effectAllowed = 'move';
					options.setData && options.setData.call(this, dataTransfer, dragEl);
				}

				_on(document, 'drop', this);
				setTimeout(this._dragStarted, 0);
			}
		},

		_onDragOver: function (/**Event*/evt) {
			var el = this.el,
				target,
				dragRect,
				revert,
				options = this.options,
				group = options.group,
				groupPut = group.put,
				isOwner = (activeGroup === group),
				canSort = options.sort;

			if (evt.preventDefault !== void 0) {
				evt.preventDefault();
				!options.dragoverBubble && evt.stopPropagation();
			}

			moved = true;

			if (activeGroup && !options.disabled &&
				(isOwner
					? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
					: activeGroup.pull && groupPut && (
						(activeGroup.name === group.name) || // by Name
						(groupPut.indexOf && ~groupPut.indexOf(activeGroup.name)) // by Array
					)
				) &&
				(evt.rootEl === void 0 || evt.rootEl === this.el) // touch fallback
			) {
				// Smart auto-scrolling
				_autoScroll(evt, options, this.el);

				if (_silent) {
					return;
				}

				target = _closest(evt.target, options.draggable, el);
				dragRect = dragEl.getBoundingClientRect();

				if (revert) {
					_cloneHide(true);

					if (cloneEl || nextEl) {
						rootEl.insertBefore(dragEl, cloneEl || nextEl);
					}
					else if (!canSort) {
						rootEl.appendChild(dragEl);
					}

					return;
				}


				if ((el.children.length === 0) || (el.children[0] === ghostEl) ||
					(el === evt.target) && (target = _ghostIsLast(el, evt))
				) {

					if (target) {
						if (target.animated) {
							return;
						}

						targetRect = target.getBoundingClientRect();
					}

					_cloneHide(isOwner);

					if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect) !== false) {
						if (!dragEl.contains(el)) {
							el.appendChild(dragEl);
							parentEl = el; // actualization
						}

						this._animate(dragRect, dragEl);
						target && this._animate(targetRect, target);
					}
				}
				else if (target && !target.animated && target !== dragEl && (target.parentNode[expando] !== void 0)) {
					if (lastEl !== target) {
						lastEl = target;
						lastCSS = _css(target);
						lastParentCSS = _css(target.parentNode);
					}


					var targetRect = target.getBoundingClientRect(),
						width = targetRect.right - targetRect.left,
						height = targetRect.bottom - targetRect.top,
						floating = /left|right|inline/.test(lastCSS.cssFloat + lastCSS.display)
							|| (lastParentCSS.display == 'flex' && lastParentCSS['flex-direction'].indexOf('row') === 0),
						isWide = (target.offsetWidth > dragEl.offsetWidth),
						isLong = (target.offsetHeight > dragEl.offsetHeight),
						halfway = (floating ? (evt.clientX - targetRect.left) / width : (evt.clientY - targetRect.top) / height) > 0.5,
						nextSibling = target.nextElementSibling,
						moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect),
						after
					;

					if (moveVector !== false) {
						_silent = true;
						setTimeout(_unsilent, 30);

						_cloneHide(isOwner);

						if (moveVector === 1 || moveVector === -1) {
							after = (moveVector === 1);
						}
						else if (floating) {
							var elTop = dragEl.offsetTop,
								tgTop = target.offsetTop;

							if (elTop === tgTop) {
								after = (target.previousElementSibling === dragEl) && !isWide || halfway && isWide;
							} else {
								after = tgTop > elTop;
							}
						} else {
							after = (nextSibling !== dragEl) && !isLong || halfway && isLong;
						}

						if (!dragEl.contains(el)) {
							if (after && !nextSibling) {
								el.appendChild(dragEl);
							} else {
								target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
							}
						}

						parentEl = dragEl.parentNode; // actualization

						this._animate(dragRect, dragEl);
						this._animate(targetRect, target);
					}
				}
			}
		},

		_animate: function (prevRect, target) {
			var ms = this.options.animation;

			if (ms) {
				var currentRect = target.getBoundingClientRect();

				_css(target, 'transition', 'none');
				_css(target, 'transform', 'translate3d('
					+ (prevRect.left - currentRect.left) + 'px,'
					+ (prevRect.top - currentRect.top) + 'px,0)'
				);

				target.offsetWidth; // repaint

				_css(target, 'transition', 'all ' + ms + 'ms');
				_css(target, 'transform', 'translate3d(0,0,0)');

				clearTimeout(target.animated);
				target.animated = setTimeout(function () {
					_css(target, 'transition', '');
					_css(target, 'transform', '');
					target.animated = false;
				}, ms);
			}
		},

		_offUpEvents: function () {
			var ownerDocument = this.el.ownerDocument;

			_off(document, 'touchmove', this._onTouchMove);
			_off(ownerDocument, 'mouseup', this._onDrop);
			_off(ownerDocument, 'touchend', this._onDrop);
			_off(ownerDocument, 'touchcancel', this._onDrop);
		},

		_onDrop: function (/**Event*/evt) {
			var el = this.el,
				options = this.options;

			clearInterval(this._loopId);
			clearInterval(autoScroll.pid);
			clearTimeout(this._dragStartTimer);

			// Unbind events
			_off(document, 'mousemove', this._onTouchMove);

			if (this.nativeDraggable) {
				_off(document, 'drop', this);
				_off(el, 'dragstart', this._onDragStart);
			}

			this._offUpEvents();

			if (evt) {
				if (moved) {
					evt.preventDefault();
					!options.dropBubble && evt.stopPropagation();
				}

				ghostEl && ghostEl.parentNode.removeChild(ghostEl);

				if (dragEl) {
					if (this.nativeDraggable) {
						_off(dragEl, 'dragend', this);
					}

					_disableDraggable(dragEl);

					// Remove class's
					_toggleClass(dragEl, this.options.ghostClass, false);
					_toggleClass(dragEl, this.options.chosenClass, false);

					if (rootEl !== parentEl) {
						newIndex = _index(dragEl);

						if (newIndex >= 0) {
							// drag from one list and drop into another
							_dispatchEvent(null, parentEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);

							// Add event
							_dispatchEvent(null, parentEl, 'add', dragEl, rootEl, oldIndex, newIndex);

							// Remove event
							_dispatchEvent(this, rootEl, 'remove', dragEl, rootEl, oldIndex, newIndex);
						}
					}
					else {
						// Remove clone
						cloneEl && cloneEl.parentNode.removeChild(cloneEl);

						if (dragEl.nextSibling !== nextEl) {
							// Get the index of the dragged element within its parent
							newIndex = _index(dragEl);

							if (newIndex >= 0) {
								// drag & drop within the same list
								_dispatchEvent(this, rootEl, 'update', dragEl, rootEl, oldIndex, newIndex);
								_dispatchEvent(this, rootEl, 'sort', dragEl, rootEl, oldIndex, newIndex);
							}
						}
					}

					if (Sortable.active) {
						if (newIndex === null || newIndex === -1) {
							newIndex = oldIndex;
						}

						_dispatchEvent(this, rootEl, 'end', dragEl, rootEl, oldIndex, newIndex);

						// Save sorting
						this.save();
					}
				}

				// Nulling
				rootEl =
				dragEl =
				parentEl =
				ghostEl =
				nextEl =
				cloneEl =

				scrollEl =
				scrollParentEl =

				tapEvt =
				touchEvt =

				moved =
				newIndex =

				lastEl =
				lastCSS =

				activeGroup =
				Sortable.active = null;
			}
		},


		handleEvent: function (/**Event*/evt) {
			var type = evt.type;

			if (type === 'dragover' || type === 'dragenter') {
				if (dragEl) {
					this._onDragOver(evt);
					_globalDragOver(evt);
				}
			}
			else if (type === 'drop' || type === 'dragend') {
				this._onDrop(evt);
			}
		},


		/**
		 * Serializes the item into an array of string.
		 * @returns {String[]}
		 */
		toArray: function () {
			var order = [],
				el,
				children = this.el.children,
				i = 0,
				n = children.length,
				options = this.options;

			for (; i < n; i++) {
				el = children[i];
				if (_closest(el, options.draggable, this.el)) {
					order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
				}
			}

			return order;
		},


		/**
		 * Sorts the elements according to the array.
		 * @param  {String[]}  order  order of the items
		 */
		sort: function (order) {
			var items = {}, rootEl = this.el;

			this.toArray().forEach(function (id, i) {
				var el = rootEl.children[i];

				if (_closest(el, this.options.draggable, rootEl)) {
					items[id] = el;
				}
			}, this);

			order.forEach(function (id) {
				if (items[id]) {
					rootEl.removeChild(items[id]);
					rootEl.appendChild(items[id]);
				}
			});
		},


		/**
		 * Save the current sorting
		 */
		save: function () {
			var store = this.options.store;
			store && store.set(this);
		},


		/**
		 * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
		 * @param   {HTMLElement}  el
		 * @param   {String}       [selector]  default: `options.draggable`
		 * @returns {HTMLElement|null}
		 */
		closest: function (el, selector) {
			return _closest(el, selector || this.options.draggable, this.el);
		},


		/**
		 * Set/get option
		 * @param   {string} name
		 * @param   {*}      [value]
		 * @returns {*}
		 */
		option: function (name, value) {
			var options = this.options;

			if (value === void 0) {
				return options[name];
			} else {
				options[name] = value;

				if (name === 'group') {
					_prepareGroup(options);
				}
			}
		},


		/**
		 * Destroy
		 */
		destroy: function () {
			var el = this.el;

			el[expando] = null;

			_off(el, 'mousedown', this._onTapStart);
			_off(el, 'touchstart', this._onTapStart);

			if (this.nativeDraggable) {
				_off(el, 'dragover', this);
				_off(el, 'dragenter', this);
			}

			// Remove draggable attributes
			Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
				el.removeAttribute('draggable');
			});

			touchDragOverListeners.splice(touchDragOverListeners.indexOf(this._onDragOver), 1);

			this._onDrop();

			this.el = el = null;
		}
	};


	function _cloneHide(state) {
		if (cloneEl && (cloneEl.state !== state)) {
			_css(cloneEl, 'display', state ? 'none' : '');
			!state && cloneEl.state && rootEl.insertBefore(cloneEl, dragEl);
			cloneEl.state = state;
		}
	}


	function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx) {
		if (el) {
			ctx = ctx || document;
			selector = selector.split('.');

			var tag = selector.shift().toUpperCase(),
				re = new RegExp('\\s(' + selector.join('|') + ')(?=\\s)', 'g');

			do {
				if (
					(tag === '>*' && el.parentNode === ctx) || (
						(tag === '' || el.nodeName.toUpperCase() == tag) &&
						(!selector.length || ((' ' + el.className + ' ').match(re) || []).length == selector.length)
					)
				) {
					return el;
				}
			}
			while (el !== ctx && (el = el.parentNode));
		}

		return null;
	}


	function _globalDragOver(/**Event*/evt) {
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}
		evt.preventDefault();
	}


	function _on(el, event, fn) {
		el.addEventListener(event, fn, false);
	}


	function _off(el, event, fn) {
		el.removeEventListener(event, fn, false);
	}


	function _toggleClass(el, name, state) {
		if (el) {
			if (el.classList) {
				el.classList[state ? 'add' : 'remove'](name);
			}
			else {
				var className = (' ' + el.className + ' ').replace(RSPACE, ' ').replace(' ' + name + ' ', ' ');
				el.className = (className + (state ? ' ' + name : '')).replace(RSPACE, ' ');
			}
		}
	}


	function _css(el, prop, val) {
		var style = el && el.style;

		if (style) {
			if (val === void 0) {
				if (document.defaultView && document.defaultView.getComputedStyle) {
					val = document.defaultView.getComputedStyle(el, '');
				}
				else if (el.currentStyle) {
					val = el.currentStyle;
				}

				return prop === void 0 ? val : val[prop];
			}
			else {
				if (!(prop in style)) {
					prop = '-webkit-' + prop;
				}

				style[prop] = val + (typeof val === 'string' ? '' : 'px');
			}
		}
	}


	function _find(ctx, tagName, iterator) {
		if (ctx) {
			var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

			if (iterator) {
				for (; i < n; i++) {
					iterator(list[i], i);
				}
			}

			return list;
		}

		return [];
	}



	function _dispatchEvent(sortable, rootEl, name, targetEl, fromEl, startIndex, newIndex) {
		var evt = document.createEvent('Event'),
			options = (sortable || rootEl[expando]).options,
			onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);

		evt.initEvent(name, true, true);

		evt.to = rootEl;
		evt.from = fromEl || rootEl;
		evt.item = targetEl || rootEl;
		evt.clone = cloneEl;

		evt.oldIndex = startIndex;
		evt.newIndex = newIndex;

		rootEl.dispatchEvent(evt);

		if (options[onName]) {
			options[onName].call(sortable, evt);
		}
	}


	function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect) {
		var evt,
			sortable = fromEl[expando],
			onMoveFn = sortable.options.onMove,
			retVal;

		evt = document.createEvent('Event');
		evt.initEvent('move', true, true);

		evt.to = toEl;
		evt.from = fromEl;
		evt.dragged = dragEl;
		evt.draggedRect = dragRect;
		evt.related = targetEl || toEl;
		evt.relatedRect = targetRect || toEl.getBoundingClientRect();

		fromEl.dispatchEvent(evt);

		if (onMoveFn) {
			retVal = onMoveFn.call(sortable, evt);
		}

		return retVal;
	}


	function _disableDraggable(el) {
		el.draggable = false;
	}


	function _unsilent() {
		_silent = false;
	}


	/** @returns {HTMLElement|false} */
	function _ghostIsLast(el, evt) {
		var lastEl = el.lastElementChild,
				rect = lastEl.getBoundingClientRect();

		return ((evt.clientY - (rect.top + rect.height) > 5) || (evt.clientX - (rect.right + rect.width) > 5)) && lastEl; // min delta
	}


	/**
	 * Generate id
	 * @param   {HTMLElement} el
	 * @returns {String}
	 * @private
	 */
	function _generateId(el) {
		var str = el.tagName + el.className + el.src + el.href + el.textContent,
			i = str.length,
			sum = 0;

		while (i--) {
			sum += str.charCodeAt(i);
		}

		return sum.toString(36);
	}

	/**
	 * Returns the index of an element within its parent
	 * @param  {HTMLElement} el
	 * @return {number}
	 */
	function _index(el) {
		var index = 0;

		if (!el || !el.parentNode) {
			return -1;
		}

		while (el && (el = el.previousElementSibling)) {
			if (el.nodeName.toUpperCase() !== 'TEMPLATE') {
				index++;
			}
		}

		return index;
	}

	function _throttle(callback, ms) {
		var args, _this;

		return function () {
			if (args === void 0) {
				args = arguments;
				_this = this;

				setTimeout(function () {
					if (args.length === 1) {
						callback.call(_this, args[0]);
					} else {
						callback.apply(_this, args);
					}

					args = void 0;
				}, ms);
			}
		};
	}

	function _extend(dst, src) {
		if (dst && src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) {
					dst[key] = src[key];
				}
			}
		}

		return dst;
	}


	// Export utils
	Sortable.utils = {
		on: _on,
		off: _off,
		css: _css,
		find: _find,
		is: function (el, selector) {
			return !!_closest(el, selector, el);
		},
		extend: _extend,
		throttle: _throttle,
		closest: _closest,
		toggleClass: _toggleClass,
		index: _index
	};


	/**
	 * Create sortable instance
	 * @param {HTMLElement}  el
	 * @param {Object}      [options]
	 */
	Sortable.create = function (el, options) {
		return new Sortable(el, options);
	};


	// Export
	Sortable.version = '1.4.2';
	return Sortable;
});

/*!
 * Draggabilly PACKAGED v2.1.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

!function(t,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(e){i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("jquery")):t.jQueryBridget=i(t,t.jQuery)}(window,function(t,i){function e(e,r,a){function d(t,i,n){var o,r="$()."+e+'("'+i+'")';return t.each(function(t,d){var h=a.data(d,e);if(!h)return void s(e+" not initialized. Cannot call methods, i.e. "+r);var u=h[i];if(!u||"_"==i.charAt(0))return void s(r+" is not a valid method");var c=u.apply(h,n);o=void 0===o?c:o}),void 0!==o?o:t}function h(t,i){t.each(function(t,n){var o=a.data(n,e);o?(o.option(i),o._init()):(o=new r(n,i),a.data(n,e,o))})}a=a||i||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[e]=function(t){if("string"==typeof t){var i=o.call(arguments,1);return d(this,t,i)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=e)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(i||t.jQuery),e}),function(t,i){"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():t.getSize=i()}(window,function(){function t(t){var i=parseFloat(t),e=-1==t.indexOf("%")&&!isNaN(i);return e&&i}function i(){}function e(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0;h>i;i++){var e=d[i];t[e]=0}return t}function n(t){var i=getComputedStyle(t);return i||a("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}function o(){if(!u){u=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(i);var o=n(i);r.isBoxSizeOuter=s=200==t(o.width),e.removeChild(i)}}function r(i){if(o(),"string"==typeof i&&(i=document.querySelector(i)),i&&"object"==typeof i&&i.nodeType){var r=n(i);if("none"==r.display)return e();var a={};a.width=i.offsetWidth,a.height=i.offsetHeight;for(var u=a.isBorderBox="border-box"==r.boxSizing,c=0;h>c;c++){var p=d[c],f=r[p],g=parseFloat(f);a[p]=isNaN(g)?0:g}var l=a.paddingLeft+a.paddingRight,v=a.paddingTop+a.paddingBottom,m=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,P=a.borderTopWidth+a.borderBottomWidth,E=u&&s,_=t(r.width);_!==!1&&(a.width=_+(E?0:l+b));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:v+P)),a.innerWidth=a.width-(l+b),a.innerHeight=a.height-(v+P),a.outerWidth=a.width+m,a.outerHeight=a.height+y,a}}var s,a="undefined"==typeof console?i:function(t){console.error(t)},d=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=d.length,u=!1;return r}),function(t,i){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",i):"object"==typeof module&&module.exports?module.exports=i():t.EvEmitter=i()}("undefined"!=typeof window?window:this,function(){function t(){}var i=t.prototype;return i.on=function(t,i){if(t&&i){var e=this._events=this._events||{},n=e[t]=e[t]||[];return-1==n.indexOf(i)&&n.push(i),this}},i.once=function(t,i){if(t&&i){this.on(t,i);var e=this._onceEvents=this._onceEvents||{},n=e[t]=e[t]||{};return n[i]=!0,this}},i.off=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=e.indexOf(i);return-1!=n&&e.splice(n,1),this}},i.emitEvent=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=0,o=e[n];i=i||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,i),n+=s?0:1,o=e[n]}return this}},t}),function(t,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.Unipointer=i(t,t.EvEmitter)}(window,function(t,i){function e(){}function n(){}var o=n.prototype=Object.create(i.prototype);o.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o._bindStartEvent=function(i,e){e=void 0===e?!0:!!e;var n=e?"addEventListener":"removeEventListener";t.navigator.pointerEnabled?i[n]("pointerdown",this):t.navigator.msPointerEnabled?i[n]("MSPointerDown",this):(i[n]("mousedown",this),i[n]("touchstart",this))},o.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},o.getTouch=function(t){for(var i=0;i<t.length;i++){var e=t[i];if(e.identifier==this.pointerIdentifier)return e}},o.onmousedown=function(t){var i=t.button;i&&0!==i&&1!==i||this._pointerDown(t,t)},o.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.onMSPointerDown=o.onpointerdown=function(t){this._pointerDown(t,t)},o._pointerDown=function(t,i){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDown(t,i))},o.pointerDown=function(t,i){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};return o._bindPostStartEvents=function(i){if(i){var e=r[i.type];e.forEach(function(i){t.addEventListener(i,this)},this),this._boundPointerEvents=e}},o._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(i){t.removeEventListener(i,this)},this),delete this._boundPointerEvents)},o.onmousemove=function(t){this._pointerMove(t,t)},o.onMSPointerMove=o.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.ontouchmove=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerMove(t,i)},o._pointerMove=function(t,i){this.pointerMove(t,i)},o.pointerMove=function(t,i){this.emitEvent("pointerMove",[t,i])},o.onmouseup=function(t){this._pointerUp(t,t)},o.onMSPointerUp=o.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.ontouchend=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerUp(t,i)},o._pointerUp=function(t,i){this._pointerDone(),this.pointerUp(t,i)},o.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i])},o._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.pointerDone=e,o.onMSPointerCancel=o.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.ontouchcancel=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerCancel(t,i)},o._pointerCancel=function(t,i){this._pointerDone(),this.pointerCancel(t,i)},o.pointerCancel=function(t,i){this.emitEvent("pointerCancel",[t,i])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}),function(t,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("unipointer")):t.Unidragger=i(t,t.Unipointer)}(window,function(t,i){function e(){}function n(){}var o=n.prototype=Object.create(i.prototype);o.bindHandles=function(){this._bindHandles(!0)},o.unbindHandles=function(){this._bindHandles(!1)};var r=t.navigator;return o._bindHandles=function(t){t=void 0===t?!0:!!t;var i;i=r.pointerEnabled?function(i){i.style.touchAction=t?"none":""}:r.msPointerEnabled?function(i){i.style.msTouchAction=t?"none":""}:e;for(var n=t?"addEventListener":"removeEventListener",o=0;o<this.handles.length;o++){var s=this.handles[o];this._bindStartEvent(s,t),i(s),s[n]("click",this)}},o.pointerDown=function(t,i){if("INPUT"==t.target.nodeName&&"range"==t.target.type)return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(t,i);var e=document.activeElement;e&&e.blur&&e.blur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i])},o._dragPointerDown=function(t,e){this.pointerDownPoint=i.getPointerPoint(e);var n=this.canPreventDefaultOnPointerDown(t,e);n&&t.preventDefault()},o.canPreventDefaultOnPointerDown=function(t){return"SELECT"!=t.target.nodeName},o.pointerMove=function(t,i){var e=this._dragPointerMove(t,i);this.emitEvent("pointerMove",[t,i,e]),this._dragMove(t,i,e)},o._dragPointerMove=function(t,e){var n=i.getPointerPoint(e),o={x:n.x-this.pointerDownPoint.x,y:n.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,e),o},o.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},o.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i]),this._dragPointerUp(t,i)},o._dragPointerUp=function(t,i){this.isDragging?this._dragEnd(t,i):this._staticClick(t,i)},o._dragStart=function(t,e){this.isDragging=!0,this.dragStartPoint=i.getPointerPoint(e),this.isPreventingClicks=!0,this.dragStart(t,e)},o.dragStart=function(t,i){this.emitEvent("dragStart",[t,i])},o._dragMove=function(t,i,e){this.isDragging&&this.dragMove(t,i,e)},o.dragMove=function(t,i,e){t.preventDefault(),this.emitEvent("dragMove",[t,i,e])},o._dragEnd=function(t,i){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,i)},o.dragEnd=function(t,i){this.emitEvent("dragEnd",[t,i])},o.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},o._staticClick=function(t,i){if(!this.isIgnoringMouseUp||"mouseup"!=t.type){var e=t.target.nodeName;("INPUT"==e||"TEXTAREA"==e)&&t.target.focus(),this.staticClick(t,i),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400))}},o.staticClick=function(t,i){this.emitEvent("staticClick",[t,i])},n.getPointerPoint=i.getPointerPoint,n}),function(t,i){"function"==typeof define&&define.amd?define(["get-size/get-size","unidragger/unidragger"],function(e,n){return i(t,e,n)}):"object"==typeof module&&module.exports?module.exports=i(t,require("get-size"),require("unidragger")):t.Draggabilly=i(t,t.getSize,t.Unidragger)}(window,function(t,i,e){function n(){}function o(t,i){for(var e in i)t[e]=i[e];return t}function r(t){return t instanceof HTMLElement}function s(t,i){this.element="string"==typeof t?d.querySelector(t):t,f&&(this.$element=f(this.element)),this.options=o({},this.constructor.defaults),this.option(i),this._create()}function a(t,i,e){return e=e||"round",i?Math[e](t/i)*i:t}var d=t.document,h=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame,u=0;h||(h=function(t){var i=(new Date).getTime(),e=Math.max(0,16-(i-u)),n=setTimeout(t,e);return u=i+e,n});var c=d.documentElement,p="string"==typeof c.style.transform?"transform":"WebkitTransform",f=t.jQuery,g=s.prototype=Object.create(e.prototype);s.defaults={},g.option=function(t){o(this.options,t)};var l={relative:!0,absolute:!0,fixed:!0};return g._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=o({},this.position);var t=getComputedStyle(this.element);l[t.position]||(this.element.style.position="relative"),this.enable(),this.setHandles()},g.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},g.dispatchEvent=function(i,e,n){var o=[e].concat(n);this.emitEvent(i,o);var r=t.jQuery;if(r&&this.$element)if(e){var s=r.Event(e);s.type=i,this.$element.trigger(s,n)}else this.$element.trigger(i,n)},g._getPosition=function(){var t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},g._getPositionCoord=function(t,e){if(-1!=t.indexOf("%")){var n=i(this.element.parentNode);return n?parseFloat(t)/100*n[e]:0}return parseInt(t,10)},g._addTransformPosition=function(t){var i=t[p];if(0===i.indexOf("matrix")){var e=i.split(","),n=0===i.indexOf("matrix3d")?12:4,o=parseInt(e[n],10),r=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=r}},g.pointerDown=function(t,i){this._dragPointerDown(t,i);var e=d.activeElement;e&&e.blur&&e!=d.body&&e.blur(),this._bindPostStartEvents(t),this.element.classList.add("is-pointer-down"),this.dispatchEvent("pointerDown",t,[i])},g.pointerMove=function(t,i){var e=this._dragPointerMove(t,i);this.dispatchEvent("pointerMove",t,[i,e]),this._dragMove(t,i,e)},g.dragStart=function(t,i){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[i]),this.animate())},g.measureContainment=function(){var t=this.options.containment;if(t){var e=r(t)?t:"string"==typeof t?d.querySelector(t):this.element.parentNode,n=i(this.element),o=i(e),s=this.element.getBoundingClientRect(),a=e.getBoundingClientRect(),h=o.borderLeftWidth+o.borderRightWidth,u=o.borderTopWidth+o.borderBottomWidth,c=this.relativeStartPosition={x:s.left-(a.left+o.borderLeftWidth),y:s.top-(a.top+o.borderTopWidth)};this.containSize={width:o.width-h-c.x-n.width,height:o.height-u-c.y-n.height}}},g.dragMove=function(t,i,e){if(this.isEnabled){var n=e.x,o=e.y,r=this.options.grid,s=r&&r[0],d=r&&r[1];n=a(n,s),o=a(o,d),n=this.containDrag("x",n,s),o=this.containDrag("y",o,d),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[i,e])}},g.containDrag=function(t,i,e){if(!this.options.containment)return i;var n="x"==t?"width":"height",o=this.relativeStartPosition[t],r=a(-o,e,"ceil"),s=this.containSize[n];return s=a(s,e,"floor"),Math.min(s,Math.max(r,i))},g.pointerUp=function(t,i){this.element.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[i]),this._dragPointerUp(t,i)},g.dragEnd=function(t,i){this.isEnabled&&(p&&(this.element.style[p]="",this.setLeftTop()),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[i]))},g.animate=function(){if(this.isDragging){this.positionDrag();var t=this;h(function(){t.animate()})}},g.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},g.positionDrag=function(){this.element.style[p]="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},g.staticClick=function(t,i){this.dispatchEvent("staticClick",t,[i])},g.enable=function(){this.isEnabled=!0},g.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},g.destroy=function(){this.disable(),this.element.style[p]="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},g._init=n,f&&f.bridget&&f.bridget("draggabilly",s),s});
/**
 * @preserve jQuery DateTimePicker plugin v2.4.5
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * (c) 2014, Chupurnov Valeriy.
 */
/*global document,window,jQuery,setTimeout,clearTimeout,HighlightedDate,getCurrentValue*/
(function ($) {
	'use strict';
	var default_options  = {
		i18n: {
			ar: { // Arabic
				months: [
					"كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
				],
				dayOfWeek: [
					"ن", "ث", "ع", "خ", "ج", "س", "ح"
				]
			},
			ro: { // Romanian
				months: [
					"ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"
				],
				dayOfWeek: [
					"l", "ma", "mi", "j", "v", "s", "d"
				]
			},
			id: { // Indonesian
				months: [
					"Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
				],
				dayOfWeek: [
					"Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"
				]
			},
			is: { // Icelandic
				months: [
					"Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"
				],
				dayOfWeek: [
					"Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"
				]
			},
			bg: { // Bulgarian
				months: [
					"Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
				],
				dayOfWeek: [
					"Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				]
			},
			fa: { // Persian/Farsi
				months: [
					'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
				],
				dayOfWeek: [
					'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
				]
			},
			ru: { // Russian
				months: [
					'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
				],
				dayOfWeek: [
					"Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				]
			},
			uk: { // Ukrainian
				months: [
					'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
				],
				dayOfWeek: [
					"Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"
				]
			},
			en: { // English
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeek: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				]
			},
			el: { // Ελληνικά
				months: [
					"Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
				],
				dayOfWeek: [
					"Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
				]
			},
			de: { // German
				months: [
					'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
				],
				dayOfWeek: [
					"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
				]
			},
			nl: { // Dutch
				months: [
					"januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
				],
				dayOfWeek: [
					"zo", "ma", "di", "wo", "do", "vr", "za"
				]
			},
			tr: { // Turkish
				months: [
					"Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
				],
				dayOfWeek: [
					"Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
				]
			},
			fr: { //French
				months: [
					"Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
				],
				dayOfWeek: [
					"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
				]
			},
			es: { // Spanish
				months: [
					"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
				]
			},
			th: { // Thai
				months: [
					'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
				],
				dayOfWeek: [
					'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
				]
			},
			pl: { // Polish
				months: [
					"styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
				],
				dayOfWeek: [
					"nd", "pn", "wt", "śr", "cz", "pt", "sb"
				]
			},
			pt: { // Portuguese
				months: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeek: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
				]
			},
			ch: { // Simplified Chinese
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeek: [
					"日", "一", "二", "三", "四", "五", "六"
				]
			},
			se: { // Swedish
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",  "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
				]
			},
			kr: { // Korean
				months: [
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				dayOfWeek: [
					"일", "월", "화", "수", "목", "금", "토"
				]
			},
			it: { // Italian
				months: [
					"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
				]
			},
			da: { // Dansk
				months: [
					"January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
				]
			},
			no: { // Norwegian
				months: [
					"Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
				],
				dayOfWeek: [
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"
				]
			},
			ja: { // Japanese
				months: [
					"1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
				],
				dayOfWeek: [
					"日", "月", "火", "水", "木", "金", "土"
				]
			},
			vi: { // Vietnamese
				months: [
					"Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
				],
				dayOfWeek: [
					"CN", "T2", "T3", "T4", "T5", "T6", "T7"
				]
			},
			sl: { // Slovenščina
				months: [
					"Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
				]
			},
			cs: { // Čeština
				months: [
					"Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
				],
				dayOfWeek: [
					"Ne", "Po", "Út", "St", "Čt", "Pá", "So"
				]
			},
			hu: { // Hungarian
				months: [
					"Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
				],
				dayOfWeek: [
					"Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"
				]
			},
			az: { //Azerbaijanian (Azeri)
				months: [
					"Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
				],
				dayOfWeek: [
					"B", "Be", "Ça", "Ç", "Ca", "C", "Ş"
				]
			},
			bs: { //Bosanski
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeek: [
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
				]
			},
			ca: { //Català
				months: [
					"Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
				],
				dayOfWeek: [
					"Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"
				]
			},
			'en-GB': { //English (British)
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeek: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				]
			},
			et: { //"Eesti"
				months: [
					"Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
				],
				dayOfWeek: [
					"P", "E", "T", "K", "N", "R", "L"
				]
			},
			eu: { //Euskara
				months: [
					"Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
				],
				dayOfWeek: [
					"Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."
				]
			},
			fi: { //Finnish (Suomi)
				months: [
					"Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
				],
				dayOfWeek: [
					"Su", "Ma", "Ti", "Ke", "To", "Pe", "La"
				]
			},
			gl: { //Galego
				months: [
					"Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"
				]
			},
			hr: { //Hrvatski
				months: [
					"Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
				],
				dayOfWeek: [
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"
				]
			},
			ko: { //Korean (한국어)
				months: [
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				dayOfWeek: [
					"일", "월", "화", "수", "목", "금", "토"
				]
			},
			lt: { //Lithuanian (lietuvių)
				months: [
					"Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
				],
				dayOfWeek: [
					"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"
				]
			},
			lv: { //Latvian (Latviešu)
				months: [
					"Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
				],
				dayOfWeek: [
					"Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"
				]
			},
			mk: { //Macedonian (Македонски)
				months: [
					"јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
				],
				dayOfWeek: [
					"нед", "пон", "вто", "сре", "чет", "пет", "саб"
				]
			},
			mn: { //Mongolian (Монгол)
				months: [
					"1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
				],
				dayOfWeek: [
					"Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"
				]
			},
			'pt-BR': { //Português(Brasil)
				months: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeek: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
				]
			},
			sk: { //Slovenčina
				months: [
					"Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
				],
				dayOfWeek: [
					"Ne", "Po", "Ut", "St", "Št", "Pi", "So"
				]
			},
			sq: { //Albanian (Shqip)
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeek: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				]
			},
			'sr-YU': { //Serbian (Srpski)
				months: [
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],
				dayOfWeek: [
					"Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"
				]
			},
			sr: { //Serbian Cyrillic (Српски)
				months: [
					"јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
				],
				dayOfWeek: [
					"нед", "пон", "уто", "сре", "чет", "пет", "суб"
				]
			},
			sv: { //Svenska
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
				]
			},
			'zh-TW': { //Traditional Chinese (繁體中文)
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeek: [
					"日", "一", "二", "三", "四", "五", "六"
				]
			},
			zh: { //Simplified Chinese (简体中文)
				months: [
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
				],
				dayOfWeek: [
					"日", "一", "二", "三", "四", "五", "六"
				]
			},
			he: { //Hebrew (עברית)
				months: [
					'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
				],
				dayOfWeek: [
					'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
				]
			},
			hy: { // Armenian
				months: [
					"Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
				],
				dayOfWeek: [
					"Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"
				]
			},
            kg: { // Kyrgyz
                months: [
                    'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
                ],
                dayOfWeek: [
                    "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"
                ]
            }
		},
		value: '',
		lang: 'en',

		format:	'Y/m/d H:i',
		formatTime:	'H:i',
		formatDate:	'Y/m/d',

		startDate:	false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
		step: 60,
		monthChangeSpinner: true,

		closeOnDateSelect: false,
		closeOnTimeSelect: true,
		closeOnWithoutClick: true,
		closeOnInputClick: true,

		timepicker: true,
		datepicker: true,
		weeks: false,

		defaultTime: false,	// use formatTime format (ex. '10:00' for formatTime:	'H:i')
		defaultDate: false,	// use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

		minDate: false,
		maxDate: false,
		minTime: false,
		maxTime: false,
		disabledMinTime: false,
		disabledMaxTime: false,

		allowTimes: [],
		opened: false,
		initTime: true,
		inline: false,
		theme: '',

		onSelectDate: function () {},
		onSelectTime: function () {},
		onChangeMonth: function () {},
		onChangeYear: function () {},
		onChangeDateTime: function () {},
		onShow: function () {},
		onClose: function () {},
		onGenerate: function () {},

		withoutCopyright: true,
		inverseButton: false,
		hours12: false,
		next: 'xdsoft_next',
		prev : 'xdsoft_prev',
		dayOfWeekStart: 0,
		parentID: 'body',
		timeHeightInTimePicker: 25,
		timepickerScrollbar: true,
		todayButton: true,
		prevButton: true,
		nextButton: true,
		defaultSelect: true,

		scrollMonth: true,
		scrollTime: true,
		scrollInput: true,

		lazyInit: false,
		mask: false,
		validateOnBlur: true,
		allowBlank: true,
		yearStart: 1950,
		yearEnd: 2050,
		monthStart: 0,
		monthEnd: 11,
		style: '',
		id: '',
		fixed: false,
		roundTime: 'round', // ceil, floor
		className: '',
		weekends: [],
		highlightedDates: [],
		highlightedPeriods: [],
		disabledDates : [],
		disabledWeekDays: [],
		yearOffset: 0,
		beforeShowDay: null,

		enterLikeTab: true,
        showApplyButton: false
	};
	// fix for ie8
	if (!window.getComputedStyle) {
		window.getComputedStyle = function (el, pseudo) {
			this.el = el;
			this.getPropertyValue = function (prop) {
				var re = /(\-([a-z]){1})/g;
				if (prop === 'float') {
					prop = 'styleFloat';
				}
				if (re.test(prop)) {
					prop = prop.replace(re, function (a, b, c) {
						return c.toUpperCase();
					});
				}
				return el.currentStyle[prop] || null;
			};
			return this;
		};
	}
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (obj, start) {
			var i, j;
			for (i = (start || 0), j = this.length; i < j; i += 1) {
				if (this[i] === obj) { return i; }
			}
			return -1;
		};
	}
	Date.prototype.countDaysInMonth = function () {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
	};
	$.fn.xdsoftScroller = function (percent) {
		return this.each(function () {
			var timeboxparent = $(this),
				pointerEventToXY = function (e) {
					var out = {x: 0, y: 0},
						touch;
					if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
						touch  = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						out.x = touch.clientX;
						out.y = touch.clientY;
					} else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
						out.x = e.clientX;
						out.y = e.clientY;
					}
					return out;
				},
				move = 0,
				timebox,
				parentHeight,
				height,
				scrollbar,
				scroller,
				maximumOffset = 100,
				start = false,
				startY = 0,
				startTop = 0,
				h1 = 0,
				touchStart = false,
				startTopScroll = 0,
				calcOffset = function () {};
			if (percent === 'hide') {
				timeboxparent.find('.xdsoft_scrollbar').hide();
				return;
			}
			if (!$(this).hasClass('xdsoft_scroller_box')) {
				timebox = timeboxparent.children().eq(0);
				parentHeight = timeboxparent[0].clientHeight;
				height = timebox[0].offsetHeight;
				scrollbar = $('<div class="xdsoft_scrollbar"></div>');
				scroller = $('<div class="xdsoft_scroller"></div>');
				scrollbar.append(scroller);

				timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
				calcOffset = function calcOffset(event) {
					var offset = pointerEventToXY(event).y - startY + startTopScroll;
					if (offset < 0) {
						offset = 0;
					}
					if (offset + scroller[0].offsetHeight > h1) {
						offset = h1 - scroller[0].offsetHeight;
					}
					timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
				};

				scroller
					.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
						}

						startY = pointerEventToXY(event).y;
						startTopScroll = parseInt(scroller.css('margin-top'), 10);
						h1 = scrollbar[0].offsetHeight;

						if (event.type === 'mousedown') {
							if (document) {
								$(document.body).addClass('xdsoft_noselect');
							}
							$([document.body, window]).on('mouseup.xdsoft_scroller', function arguments_callee() {
								$([document.body, window]).off('mouseup.xdsoft_scroller', arguments_callee)
									.off('mousemove.xdsoft_scroller', calcOffset)
									.removeClass('xdsoft_noselect');
							});
							$(document.body).on('mousemove.xdsoft_scroller', calcOffset);
						} else {
							touchStart = true;
							event.stopPropagation();
							event.preventDefault();
						}
					})
					.on('touchmove', function (event) {
						if (touchStart) {
							event.preventDefault();
							calcOffset(event);
						}
					})
					.on('touchend touchcancel', function (event) {
						touchStart =  false;
						startTopScroll = 0;
					});

				timeboxparent
					.on('scroll_element.xdsoft_scroller', function (event, percentage) {
						if (!parentHeight) {
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
						}
						percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;

						scroller.css('margin-top', maximumOffset * percentage);

						setTimeout(function () {
							timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
						}, 10);
					})
					.on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
						var percent, sh;
						parentHeight = timeboxparent[0].clientHeight;
						height = timebox[0].offsetHeight;
						percent = parentHeight / height;
						sh = percent * scrollbar[0].offsetHeight;
						if (percent > 1) {
							scroller.hide();
						} else {
							scroller.show();
							scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
							maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
							if (noTriggerScroll !== true) {
								timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
							}
						}
					});

				timeboxparent.on('mousewheel', function (event) {
					var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

					top = top - (event.deltaY * 20);
					if (top < 0) {
						top = 0;
					}

					timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
					event.stopPropagation();
					return false;
				});

				timeboxparent.on('touchstart', function (event) {
					start = pointerEventToXY(event);
					startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
				});

				timeboxparent.on('touchmove', function (event) {
					if (start) {
						event.preventDefault();
						var coord = pointerEventToXY(event);
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
					}
				});

				timeboxparent.on('touchend touchcancel', function (event) {
					start = false;
					startTop = 0;
				});
			}
			timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
		});
	};

	$.fn.datetimepicker = function (opt) {
		var KEY0 = 48,
			KEY9 = 57,
			_KEY0 = 96,
			_KEY9 = 105,
			CTRLKEY = 17,
			DEL = 46,
			ENTER = 13,
			ESC = 27,
			BACKSPACE = 8,
			ARROWLEFT = 37,
			ARROWUP = 38,
			ARROWRIGHT = 39,
			ARROWDOWN = 40,
			TAB = 9,
			F5 = 116,
			AKEY = 65,
			CKEY = 67,
			VKEY = 86,
			ZKEY = 90,
			YKEY = 89,
			ctrlDown	=	false,
			options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),

			lazyInitTimer = 0,
			createDateTimePicker,
			destroyDateTimePicker,

			lazyInit = function (input) {
				input
					.on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function initOnActionCallback(event) {
						if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
							return;
						}
						clearTimeout(lazyInitTimer);
						lazyInitTimer = setTimeout(function () {

							if (!input.data('xdsoft_datetimepicker')) {
								createDateTimePicker(input);
							}
							input
								.off('open.xdsoft focusin.xdsoft mousedown.xdsoft', initOnActionCallback)
								.trigger('open.xdsoft');
						}, 100);
					});
			};

		createDateTimePicker = function (input) {
			var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
				xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				datepicker = $('<div class="xdsoft_datepicker active"></div>'),
				mounth_picker = $('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
					'<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +
					'<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +
					'<button type="button" class="xdsoft_next"></button></div>'),
				calendar = $('<div class="xdsoft_calendar"></div>'),
				timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
				timebox = $('<div class="xdsoft_time_variant"></div>'),
                applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
				/*scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
				scroller = $('<div class="xdsoft_scroller"></div>'),*/
				monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
				yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
				triggerAfterOpen = false,
				XDSoft_datetime,
				//scroll_element,
				xchangeTimer,
				timerclick,
				current_time_index,
				setPos,
				timer = 0,
				timer1 = 0,
				_xdsoft_datetime;

			if (options.id) {
				datetimepicker.attr('id', options.id);
			}
			if (options.style) {
				datetimepicker.attr('style', options.style);
			}
			if (options.weeks) {
				datetimepicker.addClass('xdsoft_showweeks');
			}

			datetimepicker.addClass('xdsoft_' + options.theme);
			datetimepicker.addClass(options.className);

			mounth_picker
				.find('.xdsoft_month span')
					.after(monthselect);
			mounth_picker
				.find('.xdsoft_year span')
					.after(yearselect);

			mounth_picker
				.find('.xdsoft_month,.xdsoft_year')
					.on('mousedown.xdsoft', function (event) {
					var select = $(this).find('.xdsoft_select').eq(0),
						val = 0,
						top = 0,
						visible = select.is(':visible'),
						items,
						i;

					mounth_picker
						.find('.xdsoft_select')
							.hide();
					if (_xdsoft_datetime.currentTime) {
						val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
					}

					select[visible ? 'hide' : 'show']();
					for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
						if (items.eq(i).data('value') === val) {
							break;
						} else {
							top += items[0].offsetHeight;
						}
					}

					select.xdsoftScroller(top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
					event.stopPropagation();
					return false;
				});

			mounth_picker
				.find('.xdsoft_select')
					.xdsoftScroller()
				.on('mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
				})
				.on('mousedown.xdsoft', '.xdsoft_option', function (event) {

					if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
					}

					var year = _xdsoft_datetime.currentTime.getFullYear();
					if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
						_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
					}

					$(this).parent().parent().hide();

					datetimepicker.trigger('xchange.xdsoft');
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
				});

			datetimepicker.setOptions = function (_options) {
				var highlightedDates = {},
					getCaretPos = function (input) {
						try {
							if (document.selection && document.selection.createRange) {
								var range = document.selection.createRange();
								return range.getBookmark().charCodeAt(2) - 2;
							}
							if (input.setSelectionRange) {
								return input.selectionStart;
							}
						} catch (e) {
							return 0;
						}
					},
					setCaretPos = function (node, pos) {
						node = (typeof node === "string" || node instanceof String) ? document.getElementById(node) : node;
						if (!node) {
							return false;
						}
						if (node.createTextRange) {
							var textRange = node.createTextRange();
							textRange.collapse(true);
							textRange.moveEnd('character', pos);
							textRange.moveStart('character', pos);
							textRange.select();
							return true;
						}
						if (node.setSelectionRange) {
							node.setSelectionRange(pos, pos);
							return true;
						}
						return false;
					},
					isValidValue = function (mask, value) {
						var reg = mask
							.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')
							.replace(/_/g, '{digit+}')
							.replace(/([0-9]{1})/g, '{digit$1}')
							.replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')
							.replace(/\{digit[\+]\}/g, '[0-9_]{1}');
						return (new RegExp(reg)).test(value);
					};
				options = $.extend(true, {}, options, _options);

				if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
					options.allowTimes = $.extend(true, [], _options.allowTimes);
				}

				if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
					options.weekends = $.extend(true, [], _options.weekends);
				}

				if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
					$.each(_options.highlightedDates, function (index, value) {
						var splitData = $.map(value.split(','), $.trim),
							exDesc,
							hDate = new HighlightedDate(Date.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]), // date, desc, style
							keyDate = hDate.date.dateFormat(options.formatDate);
						if (highlightedDates[keyDate] !== undefined) {
							exDesc = highlightedDates[keyDate].desc;
							if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
								highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
							}
						} else {
							highlightedDates[keyDate] = hDate;
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
					highlightedDates = $.extend(true, [], options.highlightedDates);
					$.each(_options.highlightedPeriods, function (index, value) {
						var splitData = $.map(value.split(','), $.trim),
							dateTest = Date.parseDate(splitData[0], options.formatDate), // start date
							dateEnd = Date.parseDate(splitData[1], options.formatDate),
							desc = splitData[2],
							hDate,
							keyDate,
							exDesc,
							style = splitData[3];

						while (dateTest <= dateEnd) {
							hDate = new HighlightedDate(dateTest, desc, style);
							keyDate = dateTest.dateFormat(options.formatDate);
							dateTest.setDate(dateTest.getDate() + 1);
							if (highlightedDates[keyDate] !== undefined) {
								exDesc = highlightedDates[keyDate].desc;
								if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
									highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
								}
							} else {
								highlightedDates[keyDate] = hDate;
							}
						}
					});

					options.highlightedDates = $.extend(true, [], highlightedDates);
				}

				if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
					options.disabledDates = $.extend(true, [], _options.disabledDates);
				}

				if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
				    options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
				}

				if ((options.open || options.opened) && (!options.inline)) {
					input.trigger('open.xdsoft');
				}

				if (options.inline) {
					triggerAfterOpen = true;
					datetimepicker.addClass('xdsoft_inline');
					input.after(datetimepicker).hide();
				}

				if (options.inverseButton) {
					options.next = 'xdsoft_prev';
					options.prev = 'xdsoft_next';
				}

				if (options.datepicker) {
					datepicker.addClass('active');
				} else {
					datepicker.removeClass('active');
				}

				if (options.timepicker) {
					timepicker.addClass('active');
				} else {
					timepicker.removeClass('active');
				}

				if (options.value) {
					_xdsoft_datetime.setCurrentTime(options.value);
					if (input && input.val) {
						input.val(_xdsoft_datetime.str);
					}
				}

				if (isNaN(options.dayOfWeekStart)) {
					options.dayOfWeekStart = 0;
				} else {
					options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
				}

				if (!options.timepickerScrollbar) {
					timeboxparent.xdsoftScroller('hide');
				}

				if (options.minDate && /^-(.*)$/.test(options.minDate)) {
					options.minDate = _xdsoft_datetime.strToDateTime(options.minDate).dateFormat(options.formatDate);
				}

				if (options.maxDate &&  /^\+(.*)$/.test(options.maxDate)) {
					options.maxDate = _xdsoft_datetime.strToDateTime(options.maxDate).dateFormat(options.formatDate);
				}

				applyButton.toggle(options.showApplyButton);

				mounth_picker
					.find('.xdsoft_today_button')
						.css('visibility', !options.todayButton ? 'hidden' : 'visible');

				mounth_picker
					.find('.' + options.prev)
						.css('visibility', !options.prevButton ? 'hidden' : 'visible');

				mounth_picker
					.find('.' + options.next)
						.css('visibility', !options.nextButton ? 'hidden' : 'visible');

				if (options.mask) {
					input.off('keydown.xdsoft');

					if (options.mask === true) {
						options.mask = options.format
							.replace(/Y/g, '9999')
							.replace(/F/g, '9999')
							.replace(/m/g, '19')
							.replace(/d/g, '39')
							.replace(/H/g, '29')
							.replace(/i/g, '59')
							.replace(/s/g, '59');
					}

					if ($.type(options.mask) === 'string') {
						if (!isValidValue(options.mask, input.val())) {
							input.val(options.mask.replace(/[0-9]/g, '_'));
						}

						input.on('keydown.xdsoft', function (event) {
							var val = this.value,
								key = event.which,
								pos,
								digit;

							if (((key >= KEY0 && key <= KEY9) || (key >= _KEY0 && key <= _KEY9)) || (key === BACKSPACE || key === DEL)) {
								pos = getCaretPos(this);
								digit = (key !== BACKSPACE && key !== DEL) ? String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key) : '_';

								if ((key === BACKSPACE || key === DEL) && pos) {
									pos -= 1;
									digit = '_';
								}

								while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
									pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
								}

								val = val.substr(0, pos) + digit + val.substr(pos + 1);
								if ($.trim(val) === '') {
									val = options.mask.replace(/[0-9]/g, '_');
								} else {
									if (pos === options.mask.length) {
										event.preventDefault();
										return false;
									}
								}

								pos += (key === BACKSPACE || key === DEL) ? 0 : 1;
								while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
									pos += (key === BACKSPACE || key === DEL) ? -1 : 1;
								}

								if (isValidValue(options.mask, val)) {
									this.value = val;
									setCaretPos(this, pos);
								} else if ($.trim(val) === '') {
									this.value = options.mask.replace(/[0-9]/g, '_');
								} else {
									input.trigger('error_input.xdsoft');
								}
							} else {
								if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
									return true;
								}
							}

							event.preventDefault();
							return false;
						});
					}
				}
				if (options.validateOnBlur) {
					input
						.off('blur.xdsoft')
						.on('blur.xdsoft', function () {
							if (options.allowBlank && !$.trim($(this).val()).length) {
								$(this).val(null);
								datetimepicker.data('xdsoft_datetime').empty();
							} else if (!Date.parseDate($(this).val(), options.format)) {
								var splittedHours   = +([$(this).val()[0], $(this).val()[1]].join('')),
									splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));

								// parse the numbers as 0312 => 03:12
								if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
									$(this).val([splittedHours, splittedMinutes].map(function (item) {
										return item > 9 ? item : '0' + item;
									}).join(':'));
								} else {
									$(this).val((_xdsoft_datetime.now()).dateFormat(options.format));
								}

								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							} else {
								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
							}

							datetimepicker.trigger('changedatetime.xdsoft');
						});
				}
				options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;

				datetimepicker
					.trigger('xchange.xdsoft')
					.trigger('afterOpen.xdsoft');
			};

			datetimepicker
				.data('options', options)
				.on('mousedown.xdsoft', function (event) {
					event.stopPropagation();
					event.preventDefault();
					yearselect.hide();
					monthselect.hide();
					return false;
				});

			//scroll_element = timepicker.find('.xdsoft_time_box');
			timeboxparent.append(timebox);
			timeboxparent.xdsoftScroller();

			datetimepicker.on('afterOpen.xdsoft', function () {
				timeboxparent.xdsoftScroller();
			});

			datetimepicker
				.append(datepicker)
				.append(timepicker);

			if (options.withoutCopyright !== true) {
				datetimepicker
					.append(xdsoft_copyright);
			}

			datepicker
				.append(mounth_picker)
				.append(calendar)
				.append(applyButton);

			$(options.parentID)
				.append(datetimepicker);

			XDSoft_datetime = function () {
				var _this = this;
				_this.now = function (norecursion) {
					var d = new Date(),
						date,
						time;

					if (!norecursion && options.defaultDate) {
						date = _this.strToDateTime(options.defaultDate);
						d.setFullYear(date.getFullYear());
						d.setMonth(date.getMonth());
						d.setDate(date.getDate());
					}

					if (options.yearOffset) {
						d.setFullYear(d.getFullYear() + options.yearOffset);
					}

					if (!norecursion && options.defaultTime) {
						time = _this.strtotime(options.defaultTime);
						d.setHours(time.getHours());
						d.setMinutes(time.getMinutes());
					}
					return d;
				};

				_this.isValidDate = function (d) {
					if (Object.prototype.toString.call(d) !== "[object Date]") {
						return false;
					}
					return !isNaN(d.getTime());
				};

				_this.setCurrentTime = function (dTime) {
					_this.currentTime = (typeof dTime === 'string') ? _this.strToDateTime(dTime) : _this.isValidDate(dTime) ? dTime : _this.now();
					datetimepicker.trigger('xchange.xdsoft');
				};

				_this.empty = function () {
					_this.currentTime = null;
				};

				_this.getCurrentTime = function (dTime) {
					return _this.currentTime;
				};

				_this.nextMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() + 1,
						year;
					if (month === 12) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
						month = 0;
					}

					year = _this.currentTime.getFullYear();

					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);

					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}

					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.prevMonth = function () {

					if (_this.currentTime === undefined || _this.currentTime === null) {
						_this.currentTime = _this.now();
					}

					var month = _this.currentTime.getMonth() - 1;
					if (month === -1) {
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
						month = 11;
					}
					_this.currentTime.setDate(
						Math.min(
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),
							_this.currentTime.getDate()
						)
					);
					_this.currentTime.setMonth(month);
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					datetimepicker.trigger('xchange.xdsoft');
					return month;
				};

				_this.getWeekOfYear = function (datetime) {
					var onejan = new Date(datetime.getFullYear(), 0, 1);
					return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
				};

				_this.strToDateTime = function (sDateTime) {
					var tmpDate = [], timeOffset, currentTime;

					if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
						return sDateTime;
					}

					tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);
					if (tmpDate) {
						tmpDate[2] = Date.parseDate(tmpDate[2], options.formatDate);
					}
					if (tmpDate  && tmpDate[2]) {
						timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
						currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
					} else {
						currentTime = sDateTime ? Date.parseDate(sDateTime, options.format) : _this.now();
					}

					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now();
					}

					return currentTime;
				};

				_this.strToDate = function (sDate) {
					if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
						return sDate;
					}

					var currentTime = sDate ? Date.parseDate(sDate, options.formatDate) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.strtotime = function (sTime) {
					if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
						return sTime;
					}
					var currentTime = sTime ? Date.parseDate(sTime, options.formatTime) : _this.now(true);
					if (!_this.isValidDate(currentTime)) {
						currentTime = _this.now(true);
					}
					return currentTime;
				};

				_this.str = function () {
					return _this.currentTime.dateFormat(options.format);
				};
				_this.currentTime = this.now();
			};

			_xdsoft_datetime = new XDSoft_datetime();

			applyButton.on('click', function (e) {//pathbrite
                e.preventDefault();
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(getCurrentValue());
                input.val(_xdsoft_datetime.str());
                datetimepicker.trigger('close.xdsoft');
            });
			mounth_picker
				.find('.xdsoft_today_button')
				.on('mousedown.xdsoft', function () {
					datetimepicker.data('changed', true);
					_xdsoft_datetime.setCurrentTime(0);
					datetimepicker.trigger('afterOpen.xdsoft');
				}).on('dblclick.xdsoft', function () {
					var currentDate = _xdsoft_datetime.getCurrentTime(), minDate, maxDate;
					currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
					minDate = _xdsoft_datetime.strToDate(options.minDate);
					minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
					if (currentDate < minDate) {
						return;
					}
					maxDate = _xdsoft_datetime.strToDate(options.maxDate);
					maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
					if (currentDate > maxDate) {
						return;
					}
					input.val(_xdsoft_datetime.str());
					datetimepicker.trigger('close.xdsoft');
				});
			mounth_picker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false;

					(function arguments_callee1(v) {
						if ($this.hasClass(options.next)) {
							_xdsoft_datetime.nextMonth();
						} else if ($this.hasClass(options.prev)) {
							_xdsoft_datetime.prevMonth();
						}
						if (options.monthChangeSpinner) {
							if (!stop) {
								timer = setTimeout(arguments_callee1, v || 100);
							}
						}
					}(500));

					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee2() {
						clearTimeout(timer);
						stop = true;
						$([document.body, window]).off('mouseup.xdsoft', arguments_callee2);
					});
				});

			timepicker
				.find('.xdsoft_prev,.xdsoft_next')
				.on('mousedown.xdsoft', function () {
					var $this = $(this),
						timer = 0,
						stop = false,
						period = 110;
					(function arguments_callee4(v) {
						var pheight = timeboxparent[0].clientHeight,
							height = timebox[0].offsetHeight,
							top = Math.abs(parseInt(timebox.css('marginTop'), 10));
						if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {
							timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
						} else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
							timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
						}
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox.css('marginTop'), 10) / (height - pheight))]);
						period = (period > 10) ? 10 : period - 10;
						if (!stop) {
							timer = setTimeout(arguments_callee4, v || period);
						}
					}(500));
					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee5() {
						clearTimeout(timer);
						stop = true;
						$([document.body, window])
							.off('mouseup.xdsoft', arguments_callee5);
					});
				});

			xchangeTimer = 0;
			// base handler - generating a calendar and timepicker
			datetimepicker
				.on('xchange.xdsoft', function (event) {
					clearTimeout(xchangeTimer);
					xchangeTimer = setTimeout(function () {

						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						}

						var table =	'',
							start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
							i = 0,
							j,
							today = _xdsoft_datetime.now(),
							maxDate = false,
							minDate = false,
							hDate,
							day,
							d,
							y,
							m,
							w,
							classes = [],
							customDateSettings,
							newRow = true,
							time = '',
							h = '',
							line_time,
							description;

						while (start.getDay() !== options.dayOfWeekStart) {
							start.setDate(start.getDate() - 1);
						}

						table += '<table><thead><tr>';

						if (options.weeks) {
							table += '<th></th>';
						}

						for (j = 0; j < 7; j += 1) {
							table += '<th>' + options.i18n[options.lang].dayOfWeek[(j + options.dayOfWeekStart) % 7] + '</th>';
						}

						table += '</tr></thead>';
						table += '<tbody>';

						if (options.maxDate !== false) {
							maxDate = _xdsoft_datetime.strToDate(options.maxDate);
							maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
						}

						if (options.minDate !== false) {
							minDate = _xdsoft_datetime.strToDate(options.minDate);
							minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
						}

						while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
							classes = [];
							i += 1;

							day = start.getDay();
							d = start.getDate();
							y = start.getFullYear();
							m = start.getMonth();
							w = _xdsoft_datetime.getWeekOfYear(start);
							description = '';

							classes.push('xdsoft_date');

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
								customDateSettings = options.beforeShowDay.call(datetimepicker, start);
							} else {
								customDateSettings = null;
							}

							if ((maxDate !== false && start > maxDate) || (minDate !== false && start < minDate) || (customDateSettings && customDateSettings[0] === false)) {
								classes.push('xdsoft_disabled');
							} else if (options.disabledDates.indexOf(start.dateFormat(options.formatDate)) !== -1) {
								classes.push('xdsoft_disabled');
							} else if (options.disabledWeekDays.indexOf(day) !== -1) {
							    classes.push('xdsoft_disabled');
							}

							if (customDateSettings && customDateSettings[1] !== "") {
								classes.push(customDateSettings[1]);
							}

							if (_xdsoft_datetime.currentTime.getMonth() !== m) {
								classes.push('xdsoft_other_month');
							}

							if ((options.defaultSelect || datetimepicker.data('changed')) && _xdsoft_datetime.currentTime.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
								classes.push('xdsoft_current');
							}

							if (today.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
								classes.push('xdsoft_today');
							}

							if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(start.dateFormat(options.formatDate)) !== -1) {
								classes.push('xdsoft_weekend');
							}

							if (options.highlightedDates[start.dateFormat(options.formatDate)] !== undefined) {
								hDate = options.highlightedDates[start.dateFormat(options.formatDate)];
								classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
								description = hDate.desc === undefined ? '' : hDate.desc;
							}

							if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
								classes.push(options.beforeShowDay(start));
							}

							if (newRow) {
								table += '<tr>';
								newRow = false;
								if (options.weeks) {
									table += '<th>' + w + '</th>';
								}
							}

							table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' +
										'<div>' + d + '</div>' +
									'</td>';

							if (start.getDay() === options.dayOfWeekStartPrev) {
								table += '</tr>';
								newRow = true;
							}

							start.setDate(d + 1);
						}
						table += '</tbody></table>';

						calendar.html(table);

						mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[options.lang].months[_xdsoft_datetime.currentTime.getMonth()]);
						mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

						// generate timebox
						time = '';
						h = '';
						m = '';
						line_time = function line_time(h, m) {
							var now = _xdsoft_datetime.now(), optionDateTime, current_time;
							now.setHours(h);
							h = parseInt(now.getHours(), 10);
							now.setMinutes(m);
							m = parseInt(now.getMinutes(), 10);
							optionDateTime = new Date(_xdsoft_datetime.currentTime);
							optionDateTime.setHours(h);
							optionDateTime.setMinutes(m);
							classes = [];
							if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || (options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime()) || (options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime())) {
								classes.push('xdsoft_disabled');
							}
							if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || ((options.disabledMinTime !== false && now.getTime() > _xdsoft_datetime.strtotime(options.disabledMinTime).getTime()) && (options.disabledMaxTime !== false && now.getTime() < _xdsoft_datetime.strtotime(options.disabledMaxTime).getTime()))) {
								classes.push('xdsoft_disabled');
							}

							current_time = new Date(_xdsoft_datetime.currentTime);
							current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));
							current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);

							if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
								if (options.defaultSelect || datetimepicker.data('changed')) {
									classes.push('xdsoft_current');
								} else if (options.initTime) {
									classes.push('xdsoft_init_time');
								}
							}
							if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
								classes.push('xdsoft_today');
							}
							time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + now.dateFormat(options.formatTime) + '</div>';
						};

						if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
							for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
								for (j = 0; j < 60; j += options.step) {
									h = (i < 10 ? '0' : '') + i;
									m = (j < 10 ? '0' : '') + j;
									line_time(h, m);
								}
							}
						} else {
							for (i = 0; i < options.allowTimes.length; i += 1) {
								h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
								m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
								line_time(h, m);
							}
						}

						timebox.html(time);

						opt = '';
						i = 0;

						for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
						}
						yearselect.children().eq(0)
												.html(opt);

						for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[options.lang].months[i] + '</div>';
						}
						monthselect.children().eq(0).html(opt);
						$(datetimepicker)
							.trigger('generate.xdsoft');
					}, 10);
					event.stopPropagation();
				})
				.on('afterOpen.xdsoft', function () {
					if (options.timepicker) {
						var classType, pheight, height, top;
						if (timebox.find('.xdsoft_current').length) {
							classType = '.xdsoft_current';
						} else if (timebox.find('.xdsoft_init_time').length) {
							classType = '.xdsoft_init_time';
						}
						if (classType) {
							pheight = timeboxparent[0].clientHeight;
							height = timebox[0].offsetHeight;
							top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
							if ((height - pheight) < top) {
								top = height - pheight;
							}
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
						} else {
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
						}
					}
				});

			timerclick = 0;
			calendar
				.on('click.xdsoft', 'td', function (xdevent) {
					xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
					timerclick += 1;
					var $this = $(this),
						currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}

					currentTime.setDate(1);
					currentTime.setFullYear($this.data('year'));
					currentTime.setMonth($this.data('month'));
					currentTime.setDate($this.data('date'));

					datetimepicker.trigger('select.xdsoft', [currentTime]);

					input.val(_xdsoft_datetime.str());
					if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === false && !options.timepicker))) && !options.inline) {
						datetimepicker.trigger('close.xdsoft');
					}

					if (options.onSelectDate &&	$.isFunction(options.onSelectDate)) {
						options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}

					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
					setTimeout(function () {
						timerclick = 0;
					}, 200);
				});

			timebox
				.on('click.xdsoft', 'div', function (xdevent) {
					xdevent.stopPropagation();
					var $this = $(this),
						currentTime = _xdsoft_datetime.currentTime;

					if (currentTime === undefined || currentTime === null) {
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();
						currentTime = _xdsoft_datetime.currentTime;
					}

					if ($this.hasClass('xdsoft_disabled')) {
						return false;
					}
					currentTime.setHours($this.data('hour'));
					currentTime.setMinutes($this.data('minute'));
					datetimepicker.trigger('select.xdsoft', [currentTime]);

					datetimepicker.data('input').val(_xdsoft_datetime.str());

                    if (options.inline !== true && options.closeOnTimeSelect === true) {
                        datetimepicker.trigger('close.xdsoft');
                    }

					if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
						options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
					}
					datetimepicker.data('changed', true);
					datetimepicker.trigger('xchange.xdsoft');
					datetimepicker.trigger('changedatetime.xdsoft');
				});


			datepicker
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollMonth) {
						return true;
					}
					if (event.deltaY < 0) {
						_xdsoft_datetime.nextMonth();
					} else {
						_xdsoft_datetime.prevMonth();
					}
					return false;
				});

			input
				.on('mousewheel.xdsoft', function (event) {
					if (!options.scrollInput) {
						return true;
					}
					if (!options.datepicker && options.timepicker) {
						current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
						if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
							current_time_index += event.deltaY;
						}
						if (timebox.children().eq(current_time_index).length) {
							timebox.children().eq(current_time_index).trigger('mousedown');
						}
						return false;
					}
					if (options.datepicker && !options.timepicker) {
						datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
						if (input.val) {
							input.val(_xdsoft_datetime.str());
						}
						datetimepicker.trigger('changedatetime.xdsoft');
						return false;
					}
				});

			datetimepicker
				.on('changedatetime.xdsoft', function (event) {
					if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
						var $input = datetimepicker.data('input');
						options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
						delete options.value;
						$input.trigger('change');
					}
				})
				.on('generate.xdsoft', function () {
					if (options.onGenerate && $.isFunction(options.onGenerate)) {
						options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
					}
					if (triggerAfterOpen) {
						datetimepicker.trigger('afterOpen.xdsoft');
						triggerAfterOpen = false;
					}
				})
				.on('click.xdsoft', function (xdevent) {
					xdevent.stopPropagation();
				});

			current_time_index = 0;

			setPos = function () {
				var offset = datetimepicker.data('input').offset(), top = offset.top + datetimepicker.data('input')[0].offsetHeight - 1, left = offset.left, position = "absolute", node;
				if (options.fixed) {
					top -= $(window).scrollTop();
					left -= $(window).scrollLeft();
					position = "fixed";
				} else {
					if (top + datetimepicker[0].offsetHeight > $(window).height() + $(window).scrollTop()) {
						top = offset.top - datetimepicker[0].offsetHeight + 1;
					}
					if (top < 0) {
						top = 0;
					}
					if (left + datetimepicker[0].offsetWidth > $(window).width()) {
						left = $(window).width() - datetimepicker[0].offsetWidth;
					}
				}

				node = datetimepicker[0];
				do {
					node = node.parentNode;
					if (window.getComputedStyle(node).getPropertyValue('position') === 'relative' && $(window).width() >= node.offsetWidth) {
						left = left - (($(window).width() - node.offsetWidth) / 2);
						break;
					}
				} while (node.nodeName !== 'HTML');
				datetimepicker.css({
					left: left,
					top: top,
					position: position
				});
			};
			datetimepicker
				.on('open.xdsoft', function (event) {
					var onShow = true;
					if (options.onShow && $.isFunction(options.onShow)) {
						onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onShow !== false) {
						datetimepicker.show();
						setPos();
						$(window)
							.off('resize.xdsoft', setPos)
							.on('resize.xdsoft', setPos);

						if (options.closeOnWithoutClick) {
							$([document.body, window]).on('mousedown.xdsoft', function arguments_callee6() {
								datetimepicker.trigger('close.xdsoft');
								$([document.body, window]).off('mousedown.xdsoft', arguments_callee6);
							});
						}
					}
				})
				.on('close.xdsoft', function (event) {
					var onClose = true;
					mounth_picker
						.find('.xdsoft_month,.xdsoft_year')
							.find('.xdsoft_select')
								.hide();
					if (options.onClose && $.isFunction(options.onClose)) {
						onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}
					if (onClose !== false && !options.opened && !options.inline) {
						datetimepicker.hide();
					}
					event.stopPropagation();
				})
				.on('toggle.xdsoft', function (event) {
					if (datetimepicker.is(':visible')) {
						datetimepicker.trigger('close.xdsoft');
					} else {
						datetimepicker.trigger('open.xdsoft');
					}
				})
				.data('input', input);

			timer = 0;
			timer1 = 0;

			datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
			datetimepicker.setOptions(options);

			function getCurrentValue() {
				var ct = false, time;

				if (options.startDate) {
					ct = _xdsoft_datetime.strToDate(options.startDate);
				} else {
					ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
					if (ct) {
						ct = _xdsoft_datetime.strToDateTime(ct);
					} else if (options.defaultDate) {
						ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
						if (options.defaultTime) {
							time = _xdsoft_datetime.strtotime(options.defaultTime);
							ct.setHours(time.getHours());
							ct.setMinutes(time.getMinutes());
						}
					}
				}

				if (ct && _xdsoft_datetime.isValidDate(ct)) {
					datetimepicker.data('changed', true);
				} else {
					ct = '';
				}

				return ct || 0;
			}

			_xdsoft_datetime.setCurrentTime(getCurrentValue());

			input
				.data('xdsoft_datetimepicker', datetimepicker)
				.on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function (event) {
					if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
						return;
					}
					clearTimeout(timer);
					timer = setTimeout(function () {
						if (input.is(':disabled')) {
							return;
						}

						triggerAfterOpen = true;
						_xdsoft_datetime.setCurrentTime(getCurrentValue());

						datetimepicker.trigger('open.xdsoft');
					}, 100);
				})
				.on('keydown.xdsoft', function (event) {
					var val = this.value, elementSelector,
						key = event.which;
					if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
						elementSelector = $("input:visible,textarea:visible");
						datetimepicker.trigger('close.xdsoft');
						elementSelector.eq(elementSelector.index(this) + 1).focus();
						return false;
					}
					if ([TAB].indexOf(key) !== -1) {
						datetimepicker.trigger('close.xdsoft');
						return true;
					}
				});
		};
		destroyDateTimePicker = function (input) {
			var datetimepicker = input.data('xdsoft_datetimepicker');
			if (datetimepicker) {
				datetimepicker.data('xdsoft_datetime', null);
				datetimepicker.remove();
				input
					.data('xdsoft_datetimepicker', null)
					.off('.xdsoft');
				$(window).off('resize.xdsoft');
				$([window, document.body]).off('mousedown.xdsoft');
				if (input.unmousewheel) {
					input.unmousewheel();
				}
			}
		};
		$(document)
			.off('keydown.xdsoftctrl keyup.xdsoftctrl')
			.on('keydown.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = true;
				}
			})
			.on('keyup.xdsoftctrl', function (e) {
				if (e.keyCode === CTRLKEY) {
					ctrlDown = false;
				}
			});
		return this.each(function () {
			var datetimepicker = $(this).data('xdsoft_datetimepicker'), $input;
			if (datetimepicker) {
				if ($.type(opt) === 'string') {
					switch (opt) {
					case 'show':
						$(this).select().focus();
						datetimepicker.trigger('open.xdsoft');
						break;
					case 'hide':
						datetimepicker.trigger('close.xdsoft');
						break;
					case 'toggle':
						datetimepicker.trigger('toggle.xdsoft');
						break;
					case 'destroy':
						destroyDateTimePicker($(this));
						break;
					case 'reset':
						this.value = this.defaultValue;
						if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value, options.format))) {
							datetimepicker.data('changed', false);
						}
						datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
						break;
					case 'validate':
						$input = datetimepicker.data('input');
						$input.trigger('blur.xdsoft');
						break;
					}
				} else {
					datetimepicker
						.setOptions(opt);
				}
				return 0;
			}
			if ($.type(opt) !== 'string') {
				if (!options.lazyInit || options.open || options.inline) {
					createDateTimePicker($(this));
				} else {
					lazyInit($(this));
				}
			}
		});
	};
	$.fn.datetimepicker.defaults = default_options;
}(jQuery));

function HighlightedDate(date, desc, style) {
	"use strict";
	this.date = date;
	this.desc = desc;
	this.style = style;
}

(function () {

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

// Parse and Format Library
//http://www.xaprb.com/blog/2005/12/12/javascript-closures-for-runtime-efficiency/
/*
 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the
 * Free Software Foundation, version 2.1.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
 * details.
 */
Date.parseFunctions={count:0};Date.parseRegexes=[];Date.formatFunctions={count:0};Date.prototype.dateFormat=function(b){if(b=="unixtime"){return parseInt(this.getTime()/1000);}if(Date.formatFunctions[b]==null){Date.createNewFormat(b);}var a=Date.formatFunctions[b];return this[a]();};Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;var codePrefix="Date.prototype."+funcName+" = function() {return ";var code="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;code+="'"+String.escape(ch)+"' + ";}else{code+=Date.getFormatCode(ch);}}}if(code.length==0){code="\"\"";}else{code=code.substring(0,code.length-3);}eval(codePrefix+code+";}");};Date.getFormatCode=function(a){switch(a){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(a)+"' + ";}};Date.parseDate=function(a,c){if(c=="unixtime"){return new Date(!isNaN(parseInt(a))?parseInt(a)*1000:0);}if(Date.parseFunctions[c]==null){Date.createParser(c);}var b=Date.parseFunctions[c];return Date[b](a);};Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++;var regexNum=Date.parseRegexes.length;var currentGroup=1;Date.parseFunctions[format]=funcName;var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {";var regex="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;regex+=String.escape(ch);}else{obj=Date.formatCodeToRegex(ch,currentGroup);currentGroup+=obj.g;regex+=obj.s;if(obj.g&&obj.c){code+=obj.c;}}}}code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$",'i');eval(code);};Date.formatCodeToRegex=function(b,a){switch(b){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+a+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+a+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+a+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+a+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+a+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+a+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(b)};}};Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");};Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0");};Date.prototype.getDayOfYear=function(){var a=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var b=0;b<this.getMonth();++b){a+=Date.daysInMonth[b];}return a+this.getDate();};Date.prototype.getWeekOfYear=function(){var b=this.getDayOfYear()+(4-this.getDay());var a=new Date(this.getFullYear(),0,1);var c=(7-a.getDay()+4);return String.leftPad(Math.ceil((b-c)/7)+1,2,"0");};Date.prototype.isLeapYear=function(){var a=this.getFullYear();return((a&3)==0&&(a%100||(a%400==0&&a)));};Date.prototype.getFirstDayOfMonth=function(){var a=(this.getDay()-(this.getDate()-1))%7;return(a<0)?(a+7):a;};Date.prototype.getLastDayOfMonth=function(){var a=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return(a<0)?(a+7):a;};Date.prototype.getDaysInMonth=function(){Date.daysInMonth[1]=this.isLeapYear()?29:28;return Date.daysInMonth[this.getMonth()];};Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};String.escape=function(a){return a.replace(/('|\\)/g,"\\$1");};String.leftPad=function(d,b,c){var a=new String(d);if(c==null){c=" ";}while(a.length<b){a=c+a;}return a;};Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.y2kYear=50;Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"};
}());

//Dialog的基类

(function () {
	function IMDialog (opt) {
		this.opt = opt;
	}

	IMDialog.prototype.showOverlay = function () {
		var height1 = parseInt($('.keno .main').css('height'));
		var height2 = parseInt($('.keno .left-nav').css('height') || 0);
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('modal-dialog-deactive');
		this.zone.addClass('modal-dialog-active');
		this.zone.find('.dialog-wrapper').css({'opacity':'1'});
	};

	IMDialog.prototype.hideOverlay = function () {
		this.zone.removeClass('modal-dialog-active');
		this.zone.addClass('modal-dialog-deactive');
		this.zone.find(".money input").val(0);
		this.zone.find('.chips ul').find('li.selected').removeClass('selected');
	};
	IMDialog.prototype.hideFlyinto = function () {
		var that = this;
		var RecordLeft = $('.bet-record').position().left;
		this.zone.find('.dialog-wrapper').animate({
			top:'0px',
			left:RecordLeft+350+'px',
			width:'0',
			height:'0',
			opacity: '0'
		},500);
		setTimeout(function(){
			that.zone.find('.dialog-wrapper').css({'top':'50%','left':'50%','width':'395px','height':'auto'});
			that.zone.removeClass('modal-dialog-active');
			that.zone.addClass('modal-dialog-deactive');
		},'600')
	};
	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.showContentOverlay = function () {
		var height1 = parseInt($('.keno .main').css('height'));
		var height2 = parseInt($('.keno .left-nav').css('height') || 0);
		var height  = Math.max(height1, height2) + 'px';

		$('body').css('overflow-y', 'hidden');
		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('content-dialog-deactive');
		this.zone.addClass('content-dialog-active');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.hideContentOverlay = function () {
		$('body').css('overflow-y', 'auto');
		this.zone.removeClass('content-dialog-active');
		this.zone.addClass('content-dialog-deactive');
	};

	IMDialog.prototype.bindOverlayEvents = function () {
		var that = this;

		this.isPC = !Util.isMobile.any();

		if (this.isPC) {
			this.zone.find('.dialog').css('transition', 'all .5s');
		}

		this.zone.next('.overlay').click(function () {
			that.hide();
		});
	};

	window.IMDialog = IMDialog;
}());
(function () {
	function BeanLoader (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = this.init();
	}

	BeanLoader.prototype.init = function () {
		var temp = 	'<div class="bean-overlay" id="' + this.id + '">' +
						'<div class="img">' +
							'<img class="pacman-img" src="../img/pacman.gif" />' +
						'</div>' +
						'<div class="announcement" data-i18n="announcement1"></div>' +
						'<div class="announcement" data-i18n="announcement2"></div>' +
					'</div>';

		return temp;
	};

	BeanLoader.prototype.getDom = function () {
		return this.el;
	};

	BeanLoader.prototype.show = function () {
		this.zone.show();
	};

	BeanLoader.prototype.hide = function () {
		this.zone.hide();
	};

	BeanLoader.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);
	};

	window.BeanLoader = BeanLoader;
}());


/*
** 继承自IMDialog
*/

(function () {
	function ConfirmDialog (opt) {
		IMDialog.call(this, (opt || {}));

		this.text = this.opt.text;
		this.el   = this.initDom();
	}

	ConfirmDialog.prototype = new IMDialog();

	ConfirmDialog.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: 'cancel',
			className: 'cancel-button'
		});

		this.ok = new IMButton({
			text: 'ok',
			className: 'ok-button'
		});

		temp = 	'<div class="confirm-dialog">' +
					'<div class="dialog-wrapper" style="z-index: 199">' +
						'<div class="dialog">' +
							'<div class="title" data-i18n="reminder">温馨提示</div>'+
							'<div class="content">' +
								this.text +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay5"></div>';

		return temp;
	};

	ConfirmDialog.prototype.getDom = function () {
		return this.el;
	};

	ConfirmDialog.prototype.show = function (text) {
		this.zone.find('.content').text(text);
		this.zone.find('.content').text(text);
		this.showOverlay();
	};
	ConfirmDialog.prototype.showConfirm = function (text1,text2) {
		this.zone.find('.content').empty();
		var str = '';
		str +='<div class="totalMoney"><span data-i18n="allBetAmount"></span><span>'+Util.addDotToNumber(text2,2)+'</span></div>';
		this.zone.find('.content').append(str);
		app.initI18next(this.zone);
		this.showOverlay();
	};

	ConfirmDialog.prototype.hide = function () {
		this.hideOverlay();
	};

	ConfirmDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('.confirm-dialog');
		this.zone.localize();
		
		this.zone.find('.cancel-button').click(function () {
			if ((that.opt.cancelCallback) && (typeof that.opt.cancelCallback === 'function')) {
				that.opt.cancelCallback();
			}

			that.hide();
		});

		this.zone.find('.ok-button').click(function () {
			if ((that.opt.okCallback) && (typeof that.opt.okCallback === 'function')) {
				that.opt.okCallback();
			}

			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.ConfirmDialog = ConfirmDialog;
}());

(function () {

	function CountdownProgress (opt) {
		this.id        = opt.id;
		this.opt       = opt;
		this.totalTime = opt.totalTime;
		this.el        = this.initDom();
	}

	CountdownProgress.prototype.initDom = function () {
		var temp =	'<div class="countdown-progress" id="' + this.id + '">' +
						'<div class="filler"></div>' +
					'</div>';
		
		return temp;
	};

	CountdownProgress.prototype.getDom = function () {
		return this.el;
	};

	CountdownProgress.prototype.set = function (leftTime, totalTime) {
		var per = parseFloat(leftTime / totalTime) * 100 + '%';

		if (leftTime > 30) {
			this.zone.find('.filler').css({
				'background-color': '#58BE79',
				'width': per
			});
		} else {
			this.zone.find('.filler').css({
				'background-color': '#E77353',
				'width': per
			});
		}
	};

	CountdownProgress.prototype.startAnimation = function (callback) {
		var filler = this.zone.find('.filler');

		filler.animate({'width': '0%'}, 1000, function () {
			callback();
		});
	};

	CountdownProgress.prototype.bindEvents = function (callback) {
		this.zone = $('#' + this.id);
	};

	window.CountdownProgress = CountdownProgress;
}());


(function () {

	function IMButton (opt) {
		this.id   = opt.id;
		this.opt  = opt;
		this.isPC = !Util.isMobile.any();
		this.el   = this.initDom();
	}

	IMButton.prototype.getDom = function () {
		return this.el;
	};

	IMButton.prototype.initDom = function () {
		var classes         = 'im-button';
		var padClass        = this.isPC?' btn-hover': '';
		var additionalClass = (this.opt.className?(' ' + this.opt.className): '');

		classes += additionalClass + padClass;

		var temp = 	'<button' + (this.id?(' id="' + this.id + '"'): '') + ' class="' + classes + '">' +
						'<div class="im-button-wrapper">' +
							'<div class="button-overturn im-button-row1">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text" data-i18n="' + this.opt.text + '"></span>' +
							'</div>' +
							'<div class="button-overturn im-button-row2">' +
							'</div>' +
							'<div class="button-overturn im-button-row3">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text" data-i18n="' + this.opt.text + '"></span>' +
							'</div>' +
						'</div>' +
					'</button>';
		return temp;
	};

	IMButton.prototype.disabled = function () {
		if(!this.zone) this.zone = $('#' + this.id);
		this.zone.attr('disabled', 'disabled');
		this.zone.addClass('btn-disabled');
		this.zone.removeClass('btn-hover');
	};

	IMButton.prototype.enabled = function () {
		if(!this.zone) this.zone = $('#' + this.id);
		this.zone.removeAttr('disabled');
		this.zone.addClass('btn-hover');
		this.zone.removeClass('btn-disabled');
	};

	IMButton.prototype.inProgress = function () {
		this.setImage('../img/loading.png');
		this.setText('提交中');

		if (this.isPC) {
			this.zone.removeClass('btn-hover');
		}
	};

	IMButton.prototype.recover = function () {
		if (this.opt.imgSrc) {
			this.setImage(this.opt.imgSrc);
		}
		
		this.setText(this.opt.text);

		if (this.isPC) {
			this.zone.addClass('btn-hover');
		}
	};

	IMButton.prototype.setImage = function (src) {
		if(!this.zone) this.zone = $('#' + this.id);
		this.zone.find('img').attr('src', src);
	};

	IMButton.prototype.setText = function (text) {
		if(!this.zone) this.zone = $('#' + this.id);
		this.zone.find('.text').text(text);
	};

	IMButton.prototype.bindEvents = function (callback) {
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';
		this.zone = $('#' + this.id);

		this.zone.bind(clickOrtouch, function () {
			if (typeof callback === 'function') {
				callback();
			}
		});
	};

	window.IMButton = IMButton;
}());


(function () {

	function IMCheckBox (opt) {
		this.opt = opt || {};
		this.el = this.initDom();
	}

	IMCheckBox.prototype.getDom = function () {
		return this.el;
	};

	IMCheckBox.prototype.initDom = function () {
		var temp = 	'<div class="im-checkbox' +
							(this.opt.checked? ' checked': '')  + '"' + 
							(this.opt.id?(' id="' + this.opt.id + '"'): '') + 
							(this.opt.value?(' data-value="' + this.opt.value + '"'): '') +
							'>' +
						'<div class="circle"></div>' +
						(this.opt.text? ('<span class="text">' + this.opt.text + '</span>'): '') +
					'</div>';

		return temp;
	};

	IMCheckBox.prototype.bindEvents = function () {
	};

	window.IMCheckBox = IMCheckBox;
}());


(function () {
	function IMDatetimepicker (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-datetimepicker ' + this.opt.className + '">' +
						'<div class="time-label" data-i18n = "'+this.opt.i18n+'" >' + this.opt.text + '</div>' +
	                    '<input type="text"/>' +
	                '</div>';
	}

	IMDatetimepicker.prototype.getDom = function () {
		return this.el;
	};
	IMDatetimepicker.prototype.setDateFormat = function () {
		$('.im-datetimepicker input').datetimepicker({
			format:'Y-m-d H:m:s',
			formatDate:'Y-m-d H:m:s'
		});
	};
	IMDatetimepicker.prototype.disableTime = function () {
		$('.im-datetimepicker.betTime input').datetimepicker({
			timepicker:false,
			format:'Y-m-d',
			formatDate:'Y-m-d'
		});
	};

	window.IMDatetimepicker = IMDatetimepicker;
}());
(function () {
	function IMOverlay (opt) {
		this.opt = opt;
		this.el = '<div class="im-overlay"></div>';

		opt.position.append(this.el);
		this.zone = opt.position.children('.im-overlay');
	}

	IMOverlay.prototype.show = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.css('height', height);
		//$('body').find('.keno').removeClass('pageHide');
		this.zone.show();
	};
	IMOverlay.prototype.showImg = function () {
		$('body').find('.keno').addClass('pageHide');
		var str = '<div class="overlay-loading"></div>';
		$('body').append(str);
		$('body').css('background-color','')
	};
	IMOverlay.prototype.hideImg = function () {
		$('.overlay-loading').remove();
		$('body').find('.keno').removeClass('pageHide');
		$('body').css('background-color','#2E3656')
	};
	IMOverlay.prototype.hide = function () {
		this.zone.hide();
		//$('body').find('.keno').addClass('pageHide');
	};

	window.IMOverlay = IMOverlay;
}());


(function () {
	function IMPager (opt) {
		this.opt            = opt;
		this.id             = this.opt.id;
		this.currentPage    = 1;
		this.totalPage      = 1;
		this.pageRange      = 4;
		this.firstItemValue = 1;
		this.el             = this.initDom();
		this.pageSize      = 10;
	}

	IMPager.prototype.initDom = function () {
		var temp;

        temp  = '<ul class="im-pager" id="' + this.id + '">' +
					'<li><a class="btn first"    href="#">第一页</a></li>' +
					'<li><a class="btn previous" href="#">上一页</a></li>' +
					'<li><a class="item selected" href="#" data-value="1">1</a></li>' +
					'<li><a class="item"     	 href="#" data-value="2">2</a></li>' +
					'<li><a class="item"     	 href="#" data-value="3">3</a></li>' +
					'<li><a class="item"     	 href="#" data-value="4">4</a></li>' +
					'<li><a class="item more"    href="#">...</a></li>' +
					'<li><a class="btn next"     href="#">下一页</a></li>' +
					'<li><a class="btn last"     href="#">最后一页</a></li>' +
                '</ul>';

		return temp;
	};

	IMPager.prototype.getDom = function () {
		return this.el;
	};

	IMPager.prototype.reloadPageItem = function (start) {
		var i;
		var items = this.zone.find('.item');
		for (i = 0; i < this.pageRange; i++) {
			if (start + i <= this.totalPage) {
				if(start + i < 0) continue;
				$(items[i]).text(start + i);
				$(items[i]).attr('data-value', start + i);
				$(items[i]).show();
			} else {
				$(items[i]).hide();
			}
		}

	};
	IMPager.prototype.isDisable = function(){
		var zone = this.zone;
		if(this.currentPage == 1){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.first').addClass('btn-disabled');
			zone.find('.previous').addClass('btn-disabled');

			if(this.currentPage == this.totalPage){
				zone.find('.next').addClass('btn-disabled');
				zone.find('.last').addClass('btn-disabled');
				zone.find('.more').hide();
			}else{
				if( this.totalPage <= 4){
					zone.find('.more').hide();
				}else{
					zone.find('.more').show();
				}
			}

		}else if(this.currentPage == this.totalPage){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.next').addClass('btn-disabled');
			zone.find('.last').addClass('btn-disabled');
			zone.find('.more').hide();
		}else{
			zone.find('.more').show();
			zone.find('.btn').removeClass('btn-disabled');
		}
	};
	IMPager.prototype.setSelected = function (value) {
		var i;
		var items = this.zone.find('.item');
		for (i = 0; i < 4; i++) {
			if (parseInt($(items[i]).attr('data-value')) === this.currentPage) {
				items.removeClass('selected');
				$(items[i]).addClass('selected');
			}
		}
	};

	IMPager.prototype.bindEvents = function () {
		var that = this;
		var page,page2;
		this.zone = $('#' + this.id);

		this.reloadPageItem(this.currentPage);
		that.isDisable();
		this.zone.delegate('a', 'click', function () {
			if ($(this).hasClass('first')) {
				that.currentPage = 1;
				that.firstItemValue = 1;
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('last')) {
				that.currentPage = that.totalPage;
				that.firstItemValue = parseInt(that.totalPage/that.pageRange) * that.pageRange;
				if(that.totalPage%that.pageRange != 0){
					that.firstItemValue++
				}
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('previous')) {
				if (that.currentPage > 1) {
					if (that.currentPage === that.firstItemValue) {
						that.firstItemValue -= that.pageRange;
						if(that.firstItemValue == 0){
							that.firstItemValue = 1
						}
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage -= 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('next')) {
				if (that.currentPage < that.totalPage) {
					if (that.currentPage === (that.firstItemValue + (that.pageRange - 1))) {
						that.firstItemValue += that.pageRange;
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage += 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('more')) {
				that.zone.find('.item').removeClass('selected');
				that.firstItemValue = parseInt(that.zone.find('.item:first').attr('data-value'));

				if (that.firstItemValue + (that.pageRange - 1) < that.totalPage) {
					that.firstItemValue += that.pageRange;
					that.currentPage = that.firstItemValue;
					that.reloadPageItem(that.firstItemValue);
				}

				that.setSelected();
			} else {
				that.currentPage = parseInt($(this).attr('data-value'));
				that.setSelected();
			}
			that.isDisable();
			if(that.totalPage - that.totalPage%that.pageRange < that.currentPage){
				that.zone.find('.more').hide();
			}else{
				that.zone.find('.more').show();
			}
			//修改-DB
			if(that.id.indexOf('bet') != 'draw-results-xzqk-pager1'){
				if(!that.bettingRecords){
					that.bettingRecords = app.bettingRecords;
				}
				if(page != that.currentPage){
					that.bettingRecords.refreshHtml();
					page = that.currentPage;
				}
			}else{
				if(page2 != that.currentPage){
					that.drawResults = app.drawResults;
					that.drawResults.refreshHtml();
					page2 = that.currentPage;
				}
			}
		});

	};

	window.IMPager = IMPager;
}());


(function () {
	function IMTip (opt) {
		this.opt = opt;
		this.el = this.init();
	}

	IMTip.prototype.init = function () {
		var temp = 	'<div class="im-tip">' +
						'<div class="tip-content"></div>' +
						'<div class="arrow"></div>' +
					'</div>';
		return temp;
	};

	IMTip.prototype.getDom = function () {
		return this.el;
	};

	IMTip.prototype.show = function (left, top, text) {
		this.zone = $('.im-tip');
		this.zone.find('.tip-content').text(text);

		this.zone.css({
			'display': 'inline-block',
			'left': left,
			'top': top
		});
	};

	IMTip.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMTip = IMTip;
}());


/*
** 继承自IMDialog
*/

(function () {
	function BetDialog (opt) {
		IMDialog.call(this, opt || {});
		this.id  = this.opt.id;
		this.opt = opt || {};
		this.data= {};
		this.el  = this.initDom();
	}

	BetDialog.prototype = new IMDialog();
	
	BetDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: 'sure bet',
			className: 'sure',
			id: this.id + '-sure'
		});

		temp = 	'<div class="bet-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="header">' +
								'<div class="row1">' +
									'<span class="dialog-title" data-i18n="bet-dialog-title"></span>' +
									'<img class="close" src="../img/close.png"></img>' +
								'</div>' +

								'<div class="bet-content">' +
									'<div class="table">' +
										'<div class="thead">' +
											'<div class="tr">' +
												'<div class="td td1">' +
													'<span data-i18n="bet-issue"></span>' +
												'</div>' +
												'<div class="td td2">' +
													'<span data-i18n="bet-game"></span>' +
												'</div>' +
												'<div class="td td3">' +
													'<span data-i18n="bet content"></span>' +
												'</div>' +
												'<div class="td td4">' +
													'<span data-i18n="times"></span>' +
												'</div>' +
												'<div class="td td5">' +
												'</div>' +
											'</div>' +
										'</div>' +

										'<div class="tbody" style="height: 0px">' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="money">' +
								'<div class="row1">' +
									'<span class="tzje" data-i18n="stake"></span>' +
									'<span class="tzxe-value">5-3000</span>' +
									'<span class="tzxe-title" data-i18n="bet-range"></span>' +
									'<div class="clear"></div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="input-outer">' +
										'<span class="money-icon">¥</span>' +
										'<input type="text" name="tzje-value">' +
									'</div>' +
  								'</div>' +
							'</div>' +

							'<div class="chips">' +
								'<ul>' +
									'<li>5</li>' +
									'<li>10</li>' +
									'<li>50</li>' +
									'<li>100</li>' +
									'<li>500</li>' +
								'</ul>' +
							'</div>' +

							'<div class="footer">' +
								'<div class="row1">' +
									'<span data-i18n="max payout"></span>' +
								'</div>' +

								'<div class="row2">' +
									'<span class="money-icon">¥</span>' +
									'<span class="kyje-value">3131242.13</span>' +
								'</div>' +

								'<div class="row3">' +
									this.sure.getDom() +
								'</div>' +
							'</div>' +
							'<div style="height: 1px;"></div>' +   //我也不知道为何要加这，反正不加就有问题
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	BetDialog.prototype.getDom = function () {
		return this.el;
	};
	BetDialog.prototype.getOddsOrOddsParlay = function(type,betType,betItem){
		var odds = '';
		if(betItem.length == 0) return '0';
		if(Global.betOdds.length == 0) return '';
		var betOdds = Global.betOdds.filter(function(item,index){
			return item.betType == betType;
		})[0];
		if(betType != 'Ball'){
			odds = betOdds.items.filter(function(item,index){
				return item.betItem == betItem;
			})[0][type];
		}else{
			var oddsList = betOdds.items.filter(function(item,index){
				return item.betItem == betItem.length.toString();
			})[0];
			odds = oddsList.odds;
			for(var i = 2;;i++){
				if(oddsList['odds'+i]){
					if( odds < oddsList['odds'+i]){
						odds = oddsList['odds'+i]
					}
				}else{
					break;
				}
			}
		}
		return odds;
	};
	//获得oddsParlay相乘的结果
	BetDialog.prototype.getMultiplyOddsParlay = function(){
		var oddsParlay =  Global.betZoneData[0].oddsParlay;
		for(var i = 1; i< Global.betZoneData.length;i++){
			if(Global.betZoneData[i].oddsParlay){
				oddsParlay = Global.betZoneData[i].oddsParlay * oddsParlay
			}
		}
		return oddsParlay;
	};
	BetDialog.prototype.cleanCoverDom = function(){
		for(var i = 0; i < app.gameHtmlArr.length; i++){
			if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed){
				var zone = app[app.gameHtmlArr[i].id].zone;
				zone.find('.market-close-overlay').hide();
				zone.find('.market-close-overlay').css('opacity','0');
				zone.find('.coverDom-tie').hide();
				zone.find('.coverDom-tie').parent().removeClass('coverDom');
				zone.find('.coverDom-5E').hide();
				zone.find('.coverDom-5E').parent().removeClass('coverDom');
				zone.find('.coverDom-UD').hide();
				zone.find('.coverDom-UD').parent().removeClass('coverDom');
				zone.find('.coverDom-UDH').hide();
				zone.find('.coverDom-UDH').parent().removeClass('coverDom');
				zone.find('.coverDom-OES').hide();
				zone.find('.coverDom-OES').parent().removeClass('coverDom')
			}
		}
	};
	//遮挡
	BetDialog.prototype.coverDom = function(){
		if(Global.betZoneData.length == 1){
			this.cleanCoverDom();
			if(Global.betZoneData[0].betType == 'Ball' || Global.betZoneData[0].betType == '5E' || Global.betZoneData[0].betType == 'UD' || Global.betZoneData[0].betType == 'OES' || Global.betZoneData[0].betType == 'BS' && Global.betZoneData[0].betItem[0] == 'Tie'){
				for(var i = 0; i < app.gameHtmlArr.length; i++){
					if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed && Global.betZoneData[0].market != app.gameHtmlArr[i].market){
						var zone = app[app.gameHtmlArr[i].id].zone;
						zone.find('.market-close-overlay').show();
						zone.find('.market-close-overlay').css('opacity','0.85');
					}
				}
			}else{
				for(var i = 0; i < app.gameHtmlArr.length; i++){
					if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed && Global.betZoneData[0].market != app.gameHtmlArr[i].market){
						var zone = app[app.gameHtmlArr[i].id].zone;
						zone.find('.coverDom-tie').show();
						zone.find('.coverDom-tie').parent().addClass('coverDom');
						zone.find('.coverDom-5E').show();
						zone.find('.coverDom-5E').parent().addClass('coverDom');
						zone.find('.coverDom-UD').show();
						zone.find('.coverDom-UD').parent().addClass('coverDom');
						zone.find('.coverDom-UDH').show();
						zone.find('.coverDom-UDH').parent().addClass('coverDom');
						zone.find('.coverDom-OES').show();
						zone.find('.coverDom-OES').parent().addClass('coverDom')
					}
				}
			}
		}else if(Global.betZoneData.length > 1){
			this.cleanCoverDom();
			for(var i = 0; i < app.gameHtmlArr.length; i++){
				if(!app[app.gameHtmlArr[i].market + "_KenoSocket"].drawData.marketClosed){
					var zone = app[app.gameHtmlArr[i].id].zone;
					zone.find('.coverDom-tie').show();
					zone.find('.coverDom-tie').parent().addClass('coverDom');
					zone.find('.coverDom-5E').show();
					zone.find('.coverDom-5E').parent().addClass('coverDom');
					zone.find('.coverDom-UD').show();
					zone.find('.coverDom-UD').parent().addClass('coverDom');
					zone.find('.coverDom-UDH').show();
					zone.find('.coverDom-UDH').parent().addClass('coverDom');
					zone.find('.coverDom-OES').show();
					zone.find('.coverDom-OES').parent().addClass('coverDom')
				}
			}
		}
	};
	BetDialog.prototype.parlayLimitOrder = function(odds){
		var list = [];
		for(var i = 0; i < Global.parlayLimit.length; i++){
			list.push(parseInt(Global.parlayLimit[i].betItem))
		}
		list = list.sort(function(a,b){
			return a>b ? 1:-1;
		});
		var num;
		for(var j = 0; j < list.length; j++){
			if(list[0] == odds){
				num = list[0];
				break;
			}
			if(list[j] < odds && odds <= list[j+1]){
				num = list[j +1];
				break;
			}
		}
		var text = Global.parlayLimit.filter(function(item,index){
			return item.betItem == num.toString();
		})[0]
		return text;
	}

	BetDialog.prototype.addRecord = function (plateId, data) {
		// data = {
		// 	issue: '2016010819',
		// 	nation: '加拿大',
		// 	betContent: '01,02,03,04,05',
		// 	betTimes: '1.5'
		// };

		var tbody  = this.zone.find('.bet-content .table .tbody');
		var table = this.zone.find('.bet-content .table');
		var tzxe = this.zone.find('.tzxe-value');
		this.data = data;
		var repeatInd = null;
		for(var i = 0; i< Global.betZoneData.length; i++){
			if(data.market == Global.betZoneData[i].market){
				repeatInd = i;
				break;
			}
		}
		if(repeatInd || repeatInd == 0){
			Global.betZoneData[repeatInd] ={
				"betType": data.betType,
				"issue":data.issue,
				"nation":data.nation,
				"betContent":data.betContent,
				"market": data.market,
				"gameCode": "KN",
				"betItem": [data.betItem],
				odds:this.getOddsOrOddsParlay('odds',data.betType,data.betItem),
				oddsParlay:this.getOddsOrOddsParlay('oddsParlay',data.betType,data.betItem)
			};
		}else{
			Global.betZoneData.push({
				"betType": data.betType,
				"issue":data.issue,
				"nation":data.nation,
				"betContent":data.betContent,
				"market": data.market,
				"gameCode": "KN",
				"betItem": [data.betItem],
				odds:this.getOddsOrOddsParlay('odds',data.betType,data.betItem),
				oddsParlay:this.getOddsOrOddsParlay('oddsParlay',data.betType,data.betItem)
			});
		}
		this.coverDom();
		tbody.remove();
		//tbody[0].style.height = 0;
		if(Global.betZoneData.length == 1){
			var tzxeTitle = Global.gameLimit.filter(function(item,index){
				return item.betType == data.betType && item.betItem == data.betItem
			})[0];
			if(tzxeTitle)tzxe.text(tzxeTitle.min + '-' +tzxeTitle.max);
		}else{
			var odds = this.getMultiplyOddsParlay();
			var text = this.parlayLimitOrder(odds);
			tzxe.text(text.min + '-' +text.max);
		}

		//var len    = tbody.children('.tr').length;
		//var top    = len*33.75;
		//var height = parseFloat(tbody[0].style.height);
		var betData = Global.betZoneData;
		var temp = '';
		for(var i = 0; i < betData.length; i++){
		 temp +=	'<div class="tbody" style="height: 34px">' +
					  '<div class="tr" data-value="' + plateId + '">' +
						'<div class="td td1">' +
							betData[i].issue +
						'</div>' +
						'<div class="td td2" data-i18n="'+betData[i].nation+'">' +
						'</div>' +
						'<div class="td td3" data-i18n="'+betData[i].betItem[0]+'">' +
							betData[i].betContent +
						'</div>' +
						'<div class="td td4">' +
							'x' + betData[i].odds +
						'</div>' +
						'<div class="td td5">' +
							'<img class="small-close" src="../img/small-close.png"></img>' +
						'</div>' +
					'</div>' +
			     '</div>';
		}
		table.append(temp);
		app.initI18next(table.find('.tbody'));
		//tbody[0].style.height =  height + 33.75 + 'px';
		//this.zone.find("[name=tzje-value]").val('0');
		this.zone.find(".chips ul li").removeClass('selected');
		this.setKyjeValue();
		this.data[plateId] = data;
	};

	BetDialog.prototype.deleteRecord = function (tr) {
		var i;
		var index;
		var height;
		var timeout;
		var rowheight    = 33.75;
		var tbody        = this.zone.find('.bet-content .table .tbody');
		var tbodyHeight  = parseFloat(tr.parents('.table').height());
		var trs          = tbody.children('.tr');
		var index        = tr.index();
		var that         = this;
		var plateId      = tr.attr('data-value');

		tr.animate({right: '100%'}, 350, function () {
			for (i = trs.length - 1; i > index; i--) {
				trs[i].style.top = trs[i-1].style.top;
			}

			timeout = setTimeout(function () {
				tbody.parents('.table').css('height', tbodyHeight - rowheight + 'px');
				clearTimeout(timeout);
				tr.parents('.tbody').remove();
				delete that.data[plateId];
				window.app.betDialogDeleteLock = false;
			}, 150);
		});
	};

	BetDialog.prototype.deleteAllRecord = function (tr) {
		var tbody = this.zone.find('.bet-content .table');
		
		tbody.find('.tbody').remove();
		//tbody[0].style.height = '0';

		this.data = {};
		this.removeSelected();
		this.cleanCoverDom();
		Global.betZoneData = [];
	};

	BetDialog.prototype.hasData = function (plateId) {
		return this.data[plateId];
	};

	BetDialog.prototype.show = function (data) {
		var that = this;
		this.showOverlay();
	};

	BetDialog.prototype.isHide = function () {
		return this.zone.css('visibility') === 'hidden';

	};

	BetDialog.prototype.hide = function () {
		this.deleteAllRecord();
		this.hideFlyinto();
	};
	BetDialog.prototype.closehide = function () {
		this.deleteAllRecord();
		this.hideOverlay();
	};
	BetDialog.prototype.removeSelected = function(){
		for(var x = 0; x < app.gameHtmlArr.length; x++){
			app['plate_'+app.gameHtmlArr[x].market].zone.find('.column ').removeClass('selected');
			app['plate_'+app.gameHtmlArr[x].market].zone.find('.ball ').removeClass('selected');
		}
		for(var i = 0; i < Global.betZoneData.length; i++){
			if(Global.betZoneData[i].betType != 'Ball'){
				app['plate_'+Global.betZoneData[i].market].zone.find('[bettype="'+Global.betZoneData[i].betType+'"][betitem="'+Global.betZoneData[i].betItem.toString()+'"]').parent().addClass('selected')
			}else{
				app['plate_'+Global.betZoneData[i].market].zone.find('.ball ').removeClass('selected')
			}
		}

	};

	BetDialog.prototype.setKyjeValue = function(){
		var that = this;
		var kyjeValue = that.zone.find('.kyje-value');
		if(Global.betZoneData.length == 0) return false;
		if(Global.betZoneData.length == 1){
			kyjeValue.text( Util.addDotToNumber(parseFloat(that.zone.find("[name=tzje-value]").val()) * Global.betZoneData[0].odds,2));
		}else{
			kyjeValue.text( Util.addDotToNumber(parseFloat(that.zone.find("[name=tzje-value]").val()) * that.getMultiplyOddsParlay(),2));
		}
	};

	BetDialog.prototype.cleanValue = function(){
		var that = this;
		var kyjeValue = that.zone.find('.kyje-value');
		var inpVal = that.zone.find('[name="tzje-value"]');
		kyjeValue.text('0');
		inpVal.val('0')
	};

	BetDialog.prototype.bindEvents = function () {
		var chipUl;
		var inpChange;
		var that = this;
		var lock = false;
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';

		this.zone = $('#' + this.id);

		this.zone.find('.dialog-wrapper').draggabilly({
			containment: '.keno',
			handle: '.dialog-wrapper .header'
		});
		inpChange = this.zone.find('input');
		chipUl = this.zone.find('.chips ul');
		this.zone.find('.close').bind(clickOrtouch, function () {
			Global.betZoneData = [];
			that.removeSelected();
			that.closehide();
			that.sure.enabled();
		});

		var confirmSure = function () {
			var betAmount = that.zone.find("[name=tzje-value]").val();
			var fw = that.zone.find('.tzxe-value').text().split('-');
			if(betAmount == 0){
				app.noticeDialog.show({
					dataI18nText: 'noMoney',
					buttonName: "sure",
					autoHide: true,
					timeout: 3000
				});
				return false;
			}else if(parseInt(fw[0]) > parseInt(betAmount) || parseInt(betAmount) > parseInt(fw[1])){
				app.noticeDialog.show({
					dataI18nText: '11110',
					buttonName: "sure",
					autoHide: true,
					timeout: 3000
				});
				return false;
			}
			var betNowCallback = function(){
				if (typeof that.okCallback === 'function') {
					that.okCallback(betAmount);
				}
				that.sure.disabled();
			};
			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					okCallback: function () {
						betNowCallback.bind(that)();
					}
				});
				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}
			that.confirmDialog.showConfirm('', betAmount);
			//that.hide();

		};
		this.sure.bindEvents(confirmSure);
		inpChange.on('input',function(e){
			if(e.keyCode == 37 || e.keyCode == 38|| e.keyCode == 39 || e.keyCode == 40)return false;
			$(this).val($(this).val().replace(/\D/gi,""));
			that.setKyjeValue();
		})
		chipUl.delegate('li', clickOrtouch, function () {
			chipUl.find('li.selected').removeClass('selected');
			$(this).addClass('selected');
			//alert(22);
			var initialMoney = $('.money').find('input').val() || 0;
			var MoneyValue = parseInt($(this).text()) + parseInt(initialMoney);
			$('.money').find('input').animate({fontSize:'30px'},0).animate({fontSize:'15px'},300);
			$('.money').find('input').val(MoneyValue);
			that.setKyjeValue();
		});

		this.zone.delegate('.small-close', clickOrtouch, function () {
			if (!window.app.betDialogDeleteLock) {
				window.app.betDialogDeleteLock = true;
				Global.betZoneData.splice($(this).parents('.tbody').index() -1,1);
				that.deleteRecord( $(this).parents('.tr') );
				that.removeSelected($(this).parents('.tbody').index() -1);
				if(Global.betZoneData.length == 0){
					that.cleanCoverDom();
					that.closehide();
				}
				that.sure.enabled();
				that.coverDom();
				that.setKyjeValue();
			}
		});

		this.bindOverlayEvents();
	};

	window.BetDialog = BetDialog;
}());

/*
 *  投注记录 下拉界面 BettingRecords.js
 *  继承自: IMDialog
 */

(function () {
	function BettingRecords (opt,num) {
		IMDialog.call(this, (opt || {}));

		this.data = {
			1: 	[
			    ],

		    2:  [
	    		]
	    };
		this.tabType = 1;
		this.el = this.initDom();
	}

	BettingRecords.prototype = new IMDialog();

	BettingRecords.prototype.initDom = function () {
		var temp;

		this.searchButton = new IMButton({
			text: 'search',
			className: 'search',
			id:'search'
		});

		this.exportButton = new IMButton({
			text: 'export',
			className: 'export',
			id:'export'
		});

		this.pager1 = new IMPager({id: 'betting-records-pager'});
		this.pager2 = new IMPager({id: 'chase-records-pager'});
		this.tip    = new IMTip();

		temp = 	'<div class="betting-records">' +
					'<div class="dialog-wrapper">' +
						'<div class="row">' +
							'<div class="head-height">' +
								'<ul class="tabs">' +
									'<li class="tab1 active"><span data-i18n="bettings"></span></li>' +
									'<li class="tab2"><span data-i18n="history"></span></li>' +
								'</ul>' +

								'<div class="stick"></div>' +
							'</div>' +
 
							'<div class="head-height" style="margin-left:5%">' +
								'<div class="zone2">' +
									this.createDatetimePicker() +
									this.searchButton.getDom() +
								'</div>' +
							'</div>' +

							'<div class="head-height" style="float:right;">' +
								'<div class="zone3">' +
									this.exportButton.getDom() +
									'<span class="close-icon">✕</span>' +
								'</div>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +

						'<div class="cont content1">' +
							'<div class="table-zone">' +
								this.createTable('1') +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager1.getDom() +
							'</div>' +
						'</div>' +
						
						'<div class="cont content2">' +
							'<div class="table-zone">' +
								this.createTable('2') +
							'</div>' +

							'<div class="summary-zone">' +
								this.createSummary('0.00', '0.00', '0.00') +
							'</div>' +

							'<div class="pager-zone">' +
								this.pager2.getDom() +
							'</div>' +
						'</div>' +

						this.tip.getDom() +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1" style="top: .7rem"></div>';

		return temp;
	};

	BettingRecords.prototype.createDatetimePicker = function () {
		this.startTime    = new IMDatetimepicker({className: 'starttime', text:'开始',i18n:'startTime'});
		this.endTime      = new IMDatetimepicker({className: 'endtime', text:'结束',i18n:'endTime'});

		return this.startTime.getDom() + this.endTime.getDom();
	};

	BettingRecords.prototype.createSummary = function (stake, validBet, winloss) {
		var temp =	'<span class="text" data-i18n="stake"></span>' +
					'<span>:</span>' +
					'<span class="value">' + stake + '</span>' +
					'<span class="text" data-i18n="valid bet"></span>' +
					'<span>:</span>' +
					'<span class="value">' + validBet + '</span>' +
					'<span class="text" data-i18n="win/loss"></span>' +
					'<span>:</span>' +
					'<span class="value">' + winloss + '</span>';

		return temp;
	};

	BettingRecords.prototype.getDom = function () {
		return this.el;
	};
	BettingRecords.prototype.getValue = function(){
		var that = this;
		//下注情况
		if(this.tabType == 1){
			var req = {
				"page":{
					"pageNo":this.pager1.currentPage,
					"pageSize":this.pager1.pageSize
				}
			};
			$('.keno').find('.content1').find('tbody').html('');
			service.betList(req,function(res){
				if(res.code == 0){
					that.betList = res.list;
					that.data[1] = [];

					for(var i = 0; i< res.list.length; i++){
						that.data[1].push([
							i < 9?'0'+(i + 1):(i+1),
							res.list[i].ticketId,
							res.list[i].betTime,
							res.list[i].betType == undefined ?'parlay':res.list[i].betType,
							res.list[i].betCount,
							Util.addDotToNumber(res.list[i].betAmount,4),
							Util.addDotToNumber(res.list[i].odds*res.list[i].betAmount/2,4),
							res.list[i].parlayItems == undefined?res.list[i].betItem:res.list[i].parlayItems
						])
					}
					if(that.pager1.totalPage != res.page.pageCount){
						that.pager1.totalPage = res.page.pageCount || 1;
						that.pager1.initDom();
						app.bettingRecords.zone.find('.content1 .pager-zone ').empty();
						app.bettingRecords.zone.find('.content1 .pager-zone ').append(that.pager1.getDom());
						that.pager1.bindEvents();
					}
				}else{
					app.noticeDialog.show({
						dataI18nText: res.code,
						buttonName: "sure",
						autoHide: true,
						timeout: 3000
					});
				};
				var html = that.createRows('1');
				$('.keno').find('.content1').find('tbody').html(html);
				app.initI18next($('.keno').find('.content1').find('tbody'));
			})
		}else{
			//历史记录
			var req = {
				"page": {
					"pageNo":this.pager2.currentPage,
					"pageSize":this.pager2.pageSize
				},
				"beginDate": $('.zone2').find('.starttime').find('input').val().split(' ')[0],
				"beginTime": $('.zone2').find('.starttime').find('input').val().split(' ')[1],
				"endDate": $('.zone2').find('.endtime').find('input').val().split(' ')[0],
				"endTime": $('.zone2').find('.endtime').find('input').val().split(' ')[1],
				"gameCode":"KN"
			}

			$('.keno').find('.content2').find('tbody').html('');
			service.betHistory(req,function(res){
				if(res.code == 0){
					that.betList = res.list;
					that.data[2] = [];
					that.pager2.totalPage = res.page.pageCount;
					$(that.zone.find('.content2').find('.summary-zone .value')[0]).text(Util.addDotToNumber(res.totalBetAmount || 0,2));
					$(that.zone.find('.content2').find('.summary-zone .value')[1]).text(Util.addDotToNumber(res.totalBetAmount || 0,2));
					$(that.zone.find('.content2').find('.summary-zone .value')[2]).text(Util.addDotToNumber(res.totalWlAmt || 0,2));
					for(var i = 0; i< res.list.length; i++){
						that.data[2].push([
							i < 10?'0'+(i + 1):(i+1),
							res.list[i].ticketId,
							res.list[i].betTime,
							'web',
							res.list[i].market+'_'+res.list[i].drawNumber+'_'+ res.list[i].betItem+'_'+res.list[i].odds,
							Util.addDotToNumber(res.list[i].betAmount,2),
							Util.addDotToNumber(res.list[i].betAmount,2),
							Util.addDotToNumber(res.list[i].wlAmt,2)
						])
					}
					if(that.pager2.totalPage != res.page.pageCount){
						that.pager2.totalPage = res.page.pageCount || 1;
						that.pager2.initDom();
						app.bettingRecords.zone.find('.content2 .pager-zone ').empty();
						app.bettingRecords.zone.find('.content2 .pager-zone ').append(that.pager2.getDom());
						that.pager2.bindEvents();
					}
				}else{
					app.noticeDialog.show({
						dataI18nText: res.code,
						buttonName: "sure",
						autoHide: true,
						timeout: 3000
					});
				};
				var html = that.createRows('2');
				$('.keno').find('.content2').find('tbody').html(html);
				app.initI18next($('.keno').find('.content2').find('tbody'));
			})
		}
	};

	BettingRecords.prototype.refreshHtml = function(){
		this.getValue();
	};

	BettingRecords.prototype.show = function () {
		this.showContentOverlay();
	};

	BettingRecords.prototype.hide = function (flag) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.bet-record').removeClass('highlight');
				$('.keno > .header').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;
			}, 300);
		} else {
			$('.bet-record').removeClass('highlight');
		}
	};

	BettingRecords.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	BettingRecords.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	BettingRecords.prototype.bindEvents = function (state) {
		var left;
		var content;
		var content1;
		var content2;
		var tabs;
		var zone2;
		var chaseTable;
		var temp;
		var that = this;
		var today = new Date();

		this.startTime.setDateFormat();
		this.endTime.setDateFormat();
		this.zone  = $('.betting-records');
		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		zone2      = this.zone.find('.zone2');
		content1   = this.zone.find('.content1');
		content2   = this.zone.find('.content2');
		historyTable = this.zone.find('.content2 table');

        today = today.formatDate();
        this.zone.find('.starttime input').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime input').datetimepicker({value: today + ' 23:59', lang: 'en'});

		this.zone.find('.close-icon').click(function () {
			that.hide();
		});

		tabs.delegate('li', 'click', function () {
			tabs.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				content1.show();
				zone2.hide();
				that.tabType = 1;
				that.getValue(1);
			} else if ($(this).hasClass('tab2')) {
				left = 120;
				content2.show();
				zone2.show();
				that.tabType = 2;
				that.getValue(2);
			}

			$(this).parents('.head-height').find('.stick').css('left', left + 'px');
		});

		historyTable.delegate('td', 'click', function () {
			temp = $(this).children('span');

			if (temp && temp.hasClass('order-detail')) {
				if (!that.chaseOrderDetail) {
					that.historyOrderDetail = new HistoryOrderDetail({id: 'history-order-detail'});
					$('body').append(that.historyOrderDetail.getDom());
					that.historyOrderDetail.bindEvents();
				}

				that.historyOrderDetail.show({'canCancel': 1});
				that.historyOrderDetail.setVal($(this).parent().index());
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});
		this.searchButton.bindEvents(that.refreshHtml.bind(that));
		this.pager1.bindEvents();
		this.pager2.bindEvents();
		this.bindOverlayEvents();
		this.zone.localize();
	};

	BettingRecords.prototype.createTable = function (type) {
		var i;
		var temp = '';
		var header = {
			'1': [
				'no', 'ticket no', 'bet time', 'market types', 'odds-pl', 'stake', 'max payout', 'bet details'
			],
			'2': [
				'no','ticket no', 'bet time', 'platform','bettings', 'stake', 'valid bet', 'win/loss'
			]
		};

		var columns = header[type];
		var width;
		if(Util.isMobile.ios() && type == '1'){
			width = '100% !important'
		}
		temp =	'<table class="overflowTable">' +
					'<thead style="width: '+width+'">' +
						'<tr>';

		for (i = 0; i < columns.length; i++) {
			temp +=			'<td data-i18n="' + columns[i] + '"></td>';
		}

		temp +=				'</tr>' +
					'</thead>' +

					'<tbody>' +
						this.createRows(type) +
					'</tbody>' +
				'</table>';

		return temp;
	};

	BettingRecords.prototype.createRows = function (type) {
		var i,j;
		var temp = '';
		var data = this.data[type];

		for (i = 0; i < data.length; i++) {
			if(i%2 == 0){
				temp +=	'<tr>';
			}else{
				temp +=	'<tr>';
			}
			for (j = 0; j < data[i].length; j++) {
				//if (type === '1' && j === 7) {
				//	temp += '<td class="bet-content" ><span data-i18n="' + this.betList[i].betType + '"></span> ： <span data-i18n="' + data[i][j] + '">' + data[i][j] + '</span></td>';
				//} else
				if (type === '2' && j === 4) {
					var list = data[i][j].split('_');
					temp += '<td>' +
								'<span data-i18n="'+list[0]+'"></span>&numsp;' +
								'<span>'+list[1]+'</span>&numsp;' +
								'<span data-i18n="'+list[2]+'">'+list[2]+'</span>&numsp;@' +
								'<span>'+list[3]+'</span>&numsp;' +
							'</td>';
				} else if(type == '1' && j === 3){
					temp += '<td><span data-i18n = "'+this.betList[i].gameCode+'"></span><span data-i18n = "'+data[i][j]+'"></span></td>';
				}else if(type == '1' && j === 7){
					if(this.betList[i].betItem){
						temp += '<td style ="text-align: left"><span data-i18n = "'+this.betList[i].market+'"></span><span>'+this.betList[i].drawNumber+'</span><br>';
						if(isNaN(this.betList[i].betItem)){
							temp += '<span data-i18n="'+this.betList[i].betItem+'">'+this.betList[i].betItem+'</span>';
						}else{
							temp += '<span>'+this.betList[i].betItem+'</span>';
						}
						temp +='<span>@'+this.betList[i].odds+'</span></td>'
					}else{
						var num = '';
						if(this.betList[i].parlayItems.length == 2)num = 'two-CY';
						if(this.betList[i].parlayItems.length == 3)num = 'three-CY';
						if(this.betList[i].parlayItems.length == 4)num = 'four-CY';
						if(this.betList[i].parlayItems.length == 5)num = 'five-CY';
						if(this.betList[i].parlayItems.length == 6)num = 'six-CY';
						temp += '<td style ="text-align: left">';
						temp += '<span data-i18n="'+num+'"></span>';
						temp +='<span> @&numsp;'+this.betList[i].odds+'</span><br>';
						for(var x = 0; x < this.betList[i].parlayItems.length; x ++){
							if(isNaN(this.betList[i].parlayItems[x].betItem[0])){
								temp += '<span data-i18n="'+this.betList[i].parlayItems[x].betItem[0]+'"></span>';
							}else{
								temp += '<span></span>';
							}
							temp +=' @ ';
							temp += '<span data-i18n = "'+this.betList[i].parlayItems[x].market+'"></span>';
							temp += '('+this.betList[i].parlayItems[x].drawNumber+')';
							temp +='<br>'
						}
						temp +='</td>'
					}

				}else if (type === '2' && j === 7) {
					if(data[i][j] > 0){
						temp += '<td style="color: red">' + data[i][j] + '</td>';
					}else{
						temp += '<td>' + data[i][j] + '</td>';
					}
				}else{
					temp += '<td>' + data[i][j] + '</td>';
				}
			}

			temp += '</tr>';
		}

		return temp;
	};

	window.BettingRecords = BettingRecords;
}());


(function () {
	function DrawingAnimation (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = this.init();
	}

	DrawingAnimation.prototype.init = function () {
		var temp = 	'<div class="drawing-animation" id="' + this.id + '">' +
						'<div class="info">' +
							'<span class="title issue left">0972</span>' +
							'<span class="title left" data-i18n="balls-drawing"></span>' +
							
							'<div class="summary right">' +
								'<span class="text" data-i18n="exScore"></span>' +
								'<span class="text total">0</span>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +
						'<div class="wrapper">' +
							'<div class="balls"></div>' +
						'</div>' +
					'</div>';

		return temp;
	};

	DrawingAnimation.prototype.getDom = function () {
		return this.el;
	};

	DrawingAnimation.prototype.show = function (arr) {
		var that = this;
		this.zone.show();
		this.startAnimation(arr);

		setTimeout(function(){
			that.hide();
		}, 1000 * 25);
	};

	DrawingAnimation.prototype.startAnimation = function (originalArr) {
		var i;
		var balls;
		var temp = '';
		var ballSize = 0.4;
		var leftGap = 0.23;
		var interval;
		var timeout;
		var t;
		var animationZone = this.zone.find('.balls');
		var total = this.zone.find('.total');
		var start = 0;
		var arr = originalArr.slice(0);
		var analysisTypes = ['BS', 'UD', 'OTE', 'OE', '5E'];

		for(i = 0; i < analysisTypes.length; i++){
			arr.push(AnalysisObj['get' + analysisTypes[i]](originalArr));
		}

		// arr = 	[
		// 			'01', '02', '03', '04', '05', '06', '07', '08', '09', '10', 
		// 		  	'11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '大', '上', '奇','单', '金'
		// 		];

		for (i = 0 ; i < arr.length; i++) {
			if (i < 13) {
				temp += '<div class="ball up">' + arr[i] + '</div>';
			} else {
				if (i < 20) {
					temp += '<div class="ball down">' + arr[i] + '</div>';
				}else{
					temp += '<div class="ball down" data-i18n="' + arr[i] +'">' + '</div>';
				}
			}
		}

		animationZone.html(temp);
		app.initI18next(animationZone);
		balls = animationZone.children('.ball');
		i = 0;
		t = 400;
		interval = setInterval(function () {
			if (i === 26) {
				clearTimeout(timeout);
				clearInterval(interval);
				return;
			}

			$(balls[i]).css({
				opacity: 1,
				transition: 'transform ' + t/2000 + 's',
				transform: 'scale(2,2)'
			});

			setTimeout(function () {
				if (i < 13) {
					$(balls[i]).css({
						opacity: 1,
						left: leftGap + i * ballSize + 'rem',
						margin: 0,
						transform: 'scale(1,1)',
						transition: 'all ' + t/2000 + 's'
					});
				} else {
						$(balls[i]).css({
							opacity: 1,
							left: leftGap + (i - 13) * ballSize + 'rem',
							margin: 0,
							transform: 'scale(1,1)',
							transition: 'all ' + t/2000 + 's'
						});
				}

				if (i < 20) {
					start += parseInt($(balls[i]).text());
				}

				if (i === 25) {
					total.text(start);
				}

				i++;
			}, t/2)
		}, t);
	};

	DrawingAnimation.prototype.hide = function () {
		this.zone.hide();
	};

	DrawingAnimation.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);
	};

	window.DrawingAnimation = DrawingAnimation;
}());


/*
 *  投注记录 下拉界面 DrawResults.js
 *  继承自: IMDialog
 */
(function () {
	var req = {};
	function DrawResults (opt,num) {
		IMDialog.call(this, (opt || {}));

		this.data = [];
		this.tabType = 1;
		this.el = this.initDom();
		req = {
			"gameCode":"KN",
			"market":"BJ",
			"page":{
				"pageNo":this.pager1.currentPage,
				"pageSize":this.pager1.pageSize
			}
		};
	}
	DrawResults.prototype = new IMDialog();

	DrawResults.prototype.initDom = function () {
		var temp;

		this.searchButton = new IMButton({
			text: 'search',
			className: 'search',
			id:'searchReportResult'
		});

		this.exportButton = new IMButton({
			text: 'export',
			className: 'export',
			id:'export'
		});

		this.pager1 = new IMPager({id: 'draw-results-xzqk-pager1'});
		this.tip    = new IMTip();

		temp = 	'<div class="draw-results-dialog">' +
			'<div class="dialog-wrapper">' +
			'<div class="row">' +
			'<div class="head-height">' +
			'<ul class="tabs">' +
			'<li class="tab1 active"><span data-i18n="draw results"></span></li>' +
			'</ul>' +

			'<div class="stick"></div>' +
			'</div>'+

			'<div class="head-height" style="margin-left:2%">' +
			'<div class="zone2">'+this.createSelectDom()
			+'<span data-i18n="bet-issue"></span>'+'<input type="text" name="issueVal"  class="issueVal"/>'+
			this.createDatetimePicker() +
			this.searchButton.getDom() +
			'</div>' +
			'</div>' +

			'<div class="head-height" style="float: right;">' +
			'<div class="zone3">' +
			this.exportButton.getDom() +
			'<span class="close-icon">✕</span>' +
			'</div>' +
			'</div>' +

			'<div class="clear"></div>' +
			'</div>' +

			'<div class="cont content1">' +
			'<div class="table-zone">' +
			this.createTable() +
			'</div>' +
			'<div class="pager-zone">' +
			this.pager1.getDom() +
			'</div>' +
			'</div>' +
			this.tip.getDom()+
			'</div>'  +
			'</div>' +

			'<div class="overlay overlay1" style="top: .7rem"></div>';
		return temp;

	};

	DrawResults.prototype.createDatetimePicker = function () {
		this.betDate    = new IMDatetimepicker({className: 'betTime', text:'查询日期',i18n:'betDate'});
		return this.betDate.getDom();
	};


	DrawResults.prototype.getDom = function () {
		return this.el;
	};

	DrawResults.prototype.getValue = function(){
		var that = this;

		service.reportResult(req,function(res){
			if(res.code == 0){
				that.betList = res.list;
				that.data = [];
				for(var i = 0; i< res.list.length; i++){
					res.list[i].officialResultTime = res.list[i].officialResultTime || "-";
					that.data.push([
						res.list[i].number,
						res.list[i].time,
						res.list[i].officialResultTime,
						res.list[i].result.replace("[","").replace("]","").split(",")
					])
				}

				if(that.pager1.totalPage !=  res.page.pageCount){
					that.pager1.totalPage =  res.page.pageCount || 1;
					that.pager1.initDom();
					app.drawResults.zone.find('.content1 .pager-zone ').empty();
					app.drawResults.zone.find('.content1 .pager-zone ').append(that.pager1.getDom());
					that.pager1.bindEvents();
				}

			};
			var html = that.createRows();
			$('.keno').find('.content1').find('tbody').html(html);
			app.initI18next($('.keno').find('.content1').find('tbody'))
		})
	};

	DrawResults.prototype.refreshHtml = function(){
		this.getValue();
	};

	DrawResults.prototype.show = function () {
		this.showContentOverlay();
	};

	DrawResults.prototype.hide = function (flag) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.draw-results').removeClass('highlight');
				$('.keno > .header').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;
			}, 300);
		} else {
			$('.draw-results').removeClass('highlight');
		}
	};

	DrawResults.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}
		return false;
	};

	DrawResults.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	DrawResults.prototype.createSelectDom = function(){
		var el = '';
		el+='<div class="areaSelect">'
			+'<p></p>'
			+'<ul style="display: none;">'
			+'<li data-i18n="BJ"></li>'
			+'<li data-i18n="CA"></li>'
			+'<li data-i18n="AU"></li>'
			+'<li data-i18n="SK"></li>'
			+'<li data-i18n="MT"></li>'
			+'<li data-i18n="WCA"></li>'
			+'</ul>'
			+'</div>'
		return el;
	}
	DrawResults.prototype.bindEvents = function (state) {
		var left;
		var content;
		var content1;
		var tabs;
		var zone2;
		var temp;
		var that = this;
		var today = new Date();

		this.zone  = $('.draw-results-dialog');

		this.betDate.disableTime();

		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		zone2      = this.zone.find('.zone2');
		content1   = this.zone.find('.content1');

		zone2.show();
		today = today.formatDate();

		this.zone.find('.betTime input').datetimepicker({value: today, lang: 'en'});

		this.zone.find('.close-icon').click(function () {
			that.hide();
		});

		var areaSlect = this.zone.find('.areaSelect');
		//禁用时间控件
		that.zone.find(".issueVal").bind('input propertychange',function(){
			var inputVal = $(this).val().replace(/[^\d]/g,"");
			$(this).val(inputVal);
			if($(this).val().length > 0)that.zone.find(".betTime").find("input").attr("disabled","true");
			else that.zone.find(".betTime").find("input").removeAttr("disabled");
		});
		//搜索
		$("#searchReportResult").click(function(){
			req = {
				"gameCode": "KN",
				"market": areaSlect.find("p").attr("data-i18n"),
				"drawDate":  that.zone.find(".betTime").find("input").val(),
				"drawNumber": that.zone.find(".issueVal").val(),
				"page": {
					"pageNo": that.pager1.currentPage,
					"pageSize": that.pager1.pageSize
				}
			};
			that.getValue();

		})
		//select事件 空白处
		$(document).click(function(){
			if(window.event.target.parentElement.className != "areaSelect"){
				areaSlect.find('ul').hide();
			}else{
				areaSlect.find('ul').toggle();
			}
		})

		if(areaSlect.find('p').text() == ''){
			areaSlect.find('p').attr("data-i18n","BJ");
		}
		areaSlect.find('ul').delegate('li','click',function(){
			areaSlect.find('p').attr("data-i18n",$(this).attr("data-i18n"));
			app.initI18next(areaSlect.find('p'));
		});


		this.pager1.bindEvents();
		this.bindOverlayEvents();
		this.zone.localize();
	};

	DrawResults.prototype.createTable = function () {
		var temp = '';
		var header = [
			['bet-issue', 'betDate','officialDate'],
			['totalNum','big','odd','up','o/t/e','5E']
		]

		var columns1 = header[0];
		var columns2 = header[1];


		temp =	'<table>' + '<thead>' + '<tr>';

		for (var i = 0; i < columns1.length; i++) {
			temp +=	'<td data-i18n="' + columns1[i] + '"></td>';
		}
		for(var i=1;i<21;i++){
			temp +=	'<td>'+i+'</td>';
		}
		for (var i = 0; i < columns2.length; i++) {
			temp +=	'<td data-i18n="' + columns2[i] + '"></td>';
		}

		temp +=	'</tr>' + '</thead>' + '<tbody>' + this.createRows() + '</tbody>' + '</table>';
		return temp;
	};

	DrawResults.prototype.createRows = function () {
		var temp = '';
		var data = this.data;
		var analyArr = ['getPB','getBS','getOE','getUD','getOTE','get5E'];

		for (i = 0; i < data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < data[i].length; j++) {
				if(typeof data[i][j] != "object"){
					temp += '<td>' + data[i][j] + '</td>';
				}else{
					for(var k = 0;k<data[i][j].length;k++){
						temp += '<td>' + data[i][j][k] + '</td>';
					}
					for(var k = 0;k<analyArr.length;k++){
						var funName = analyArr[k];
						result = AnalysisObj[funName](data[i][j]);
						if(typeof result == "number"){
							temp +=	'<td>'+result+'</td>';
						}else{
							temp +=	'<td data-i18n="' + result + '"></td>';
						}
					}
				}
			}
			temp += '</tr>';
		}
		return temp;
	};

	window.DrawResults = DrawResults;
}());


/*
** 继承自IMDialog
*/

(function () {
	function HistoryOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.el = this.initDom();
	}

	HistoryOrderDetail.prototype = new IMDialog();

	HistoryOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: 'bet cancel',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png'
		});

		this.ok = new IMButton({
			text: 'ok',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="history-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="close-dialog">✕</div>' +
							'<div class="content">' +
								'<table cellspacing="0">' +
									'<tbody>' +
										'<tr class="even ticketId">' +
											'<td class="text" data-i18n="ticket no"></td>' +
											'<td class="value">160321077</td>' +
										'</tr>' +
										'<tr class="odd time">' +
											'<td class="text" data-i18n="bet time"></td>' +
											'<td class="value">08/08/2016 14:15:43</td>' +
										'</tr>' +
										'<tr class="even platform">' +
											'<td class="text" data-i18n="platform"></td>' +
											'<td class="value">WEB</td>' +
										'</tr>' +
										'<tr class="odd marketTypes">' +
											'<td class="text" data-i18n="market types"></td>' +
											'<td class="value"><span class="market">快乐彩</span>、<span class="types">单双</span></td>' +
										'</tr>' +
										'<tr class="even odds-pl">' +
											'<td class="text" data-i18n="odds-pl"></td>' +
											'<td class="value">1倍</td>' +
										'</tr>' +
										'<tr class="stake">' +
											'<td class="text" data-i18n="stake"></td>' +
											'<td class="value">3123131</td>' +
										'</tr>' +
										'<tr class="even winOrLoss">' +
											'<td class="text" data-i18n="win/loss"></td>' +
											'<td class="value">3123131</td>' +
										'</tr>' +
										'<tr class="odd result">' +
											'<td class="text" data-i18n="bet result"></td>' +
											'<td class="value">中奖</td>' +
										'</tr>' +
										'<tr class="even details">' +
											'<td class="text" data-i18n="bet details"></td>' +
											'<td class="value"></td>' +
										'</tr>' +
									'</tbody>' +
								'</table>' +

								'<div class="number-content" data-i18n="bet content"></div>' +

								'<div class="textarea">' +
									'<textarea></textarea>' +
								'</div>' +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="overlay overlay2"></div>';

		return temp;
	};

	HistoryOrderDetail.prototype.getDom = function () {
		return this.el;
	};
	HistoryOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.ticketId = data.ticketId;
		this.showOverlay();
	};

	HistoryOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};
	HistoryOrderDetail.prototype.setVal = function(index){
		var data = app.bettingRecords.betList[index];
		this.zone.find('.ticketId').find('.value').text(data.ticketId);
		this.zone.find('.time').find('.value').text(data.betTime);
		this.zone.find('.platform').find('.value').text('WEB');
		this.zone.find('.marketTypes').find('.market').attr('data-i18n',data.market);
		this.zone.find('.marketTypes').find('.types').attr('data-i18n',data.betType);
		this.zone.find('.odds-pl').find('.value').text(data.odds);
		this.zone.find('.stake').find('.value').text(Util.addDotToNumber(data.betAmount,2));
		this.zone.find('.winOrLoss').find('.value').text(Util.addDotToNumber(data.wlAmt,2));
		this.zone.find('.result').find('.value').text(data.win == true ? '中奖':"没中");
		this.zone.find('.details').find('.value').text(data.selection);
	};
	HistoryOrderDetail.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);
		this.zone.localize();

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			if ($(this).parent('.cancel').hasClass('can-not-cancel')) {
				return;
			}

			var okCallback = function () {
				var req = {
					ticketId:that.ticketId
				};
				var obj = [];
				if(typeof(app) != 'undefined'){
					obj = app;
				}else{
					obj = recordsQuery
				}
				service.cancelBetHistory(req,function(res){
					if(res.code == 0){
						that.hide();
						obj.noticeDialog.show({
							subTitle : "取消成功",
							text: "取消成功",
							buttonName: "确定",
							autoHide: true,
							timeout: 3000
						});
						if(typeof(app) != 'undefined'){
							app.bettingRecords.getBetHistory();
						}else{
							recordsQuery.getBetHistory();
						}
						that.hide();
					}else{
						obj.noticeDialog.show({
							subTitle : "取消失败",
							text: Local[res.code],
							buttonName: "确定",
							autoHide: true,
							timeout: 3000
						});
					}
				})
			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '确定取消当前投注吗？',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消当前投注吗？');
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.HistoryOrderDetail = HistoryOrderDetail;
}());

/*
** 继承自IMDialog
*/

(function () {
	function NoticeDialog (opt) {
		IMDialog.call(this, opt || {});
		this.id  = this.opt.id;
		this.opt = opt || {};
		this.el  = this.initDom();
	}

	NoticeDialog.prototype = new IMDialog();
	
	NoticeDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: 'sure',
			className: 'sure',
			id: this.id + '-sure'
		});

		temp = 	'<div class="notice-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog' + (this.opt.dataI18nSubTitle?'': ' no-sub-title') + '">' +
							'<div class="title" data-i18n ="reminder">温馨提示</div>' +
							'<div class="image">' +
								'<img src="../img/notice.png">' +
							'</div>' +
							'<div class="sub-title" data-i18n = "'+this.opt.dataI18nSubTitle+'">' +
							'</div>' +
							'<div class="content" data-i18n = "'+this.opt.dataI18nText+'">' +
							'</div>' +

							'<div class="button-zone">' +
								this.sure.getDom() +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' + 

				'<div class="overlay overlay4"></div>';

		return temp;
	};

	NoticeDialog.prototype.getDom = function () {
		return this.el;
	};

	NoticeDialog.prototype.show = function (data) {
		var timeout;
		var that = this;

		if (data.okCallback) {
			this.okCallback = data.okCallback;
		} else {
			this.okCallback = null;
		}

		if (data.dataI18nSubTitle) {
			this.zone.find('.sub-title').show();
			this.zone.find('.sub-title').attr('data-i18n',data.dataI18nSubTitle);
		} else {
			this.zone.find('.dialog').addClass('no-sub-title');
		}

		this.zone.find('.content').attr('data-i18n',data.dataI18nText);
		this.zone.find('.button-zone .im-button .text').text(data.buttonName);
		app.initI18next($('#'+this.id));
		this.showOverlay();
		if (data.autoHide) {
			this.timeout = setTimeout(function () {
				that.hide();
			}, data.timeout || 3000);
		}
	};

	NoticeDialog.prototype.hide = function () {
		if (this.okCallback) this.okCallback();
		clearTimeout(this.timeout);
		this.hideOverlay();
	};

	NoticeDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);
		button = this.zone.find('.sure');

		button.click(function (e) {
			e.preventDefault();

			if (typeof that.okCallback === 'function') {
				that.okCallback();
			}
			clearTimeout(this.timeout);
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.NoticeDialog = NoticeDialog;
}());

(function () {

	var CHUNKWIDTH = 5.26;

	function Plate (opt) {
		this.id   	= opt.id;
		this.market = opt.id.split('_')[1];
		this.opt  	= opt;
		this.isPC 	= !Util.isMobile.any();
		this.languageType = Util.getQueryString("language")  || 'zh';
		this.data   = [];
		this.el   	= this.initDom();
		this.routePageData = this.initRoutePageData();
	}

	Plate.prototype.initRoutePageData = function() {
		var anasysisTypes = ['BS','OE','OTE','UD','PB','5E'];
		var routePageData = {};
		for(var i = 0; i < anasysisTypes.length; i++){
			routePageData[anasysisTypes[i]] = {
				pageIndex: 0,
				dataLenght:0,
				tabIndex: i
			};	
		};
		return routePageData;
	}

	Plate.prototype.getDom = function () {
		return this.el;
	};

	Plate.prototype.initDom = function () {
		var temp;
		var imageMap = {
			'beijing': {
				flag: '../img/china-flag.png',
				landmark: '../img/china-landmark.png'
			},
			'canada': {
				flag: '../img/canada-flag.png',
				landmark: '../img/canada-landmark.png'
			},
			'australia': {
				flag: '../img/australia-flag.png',
				landmark: '../img/australia-landmark.png'
			},
			'slovakia': {
				flag: '../img/slovakia-flag.png',
				landmark: '../img/slovakia-landmark.png'
			},
			'malta': {
				flag: '../img/malta-flag.png',
				landmark: '../img/malta-landmark.png'
			},
			'west-canada': {
				flag: '../img/canada-flag.png',
				landmark: '../img/canada-landmark.png'
			}
		};

		this.countdownProgress = new CountdownProgress({
			id: this.id + '-progress',
			totalTime: this.opt.totalTime
		});

		this.beanLoader = new BeanLoader({
			id: this.id + '-beanLoader'
		});

		this.drawingAnimation = new DrawingAnimation({
			id: this.id + '-drawing-animation'
		});

		temp = 	'<div class="plate' + ((this.languageType == "en") ? " english" : "") + '" id="' + this.id + '">' +
					'<div class="plate-head-zone">' +
						'<div class="landmark ' + this.opt.location + '">' +
							'<div class="nation" data-i18n="' + this.opt.location + '">' +
							'</div>' +
						'</div>' +

						'<div class="head-info">' +
							'<div class="flag-zone">' +
								'<div class="flag-outer">' +
									'<img class="flag-outer" src="' + imageMap[this.opt.location].flag + '"></img>' +
								'</div>' +
							'</div>' +

							'<div class="time">' +
								'<div class="draw-issue">' +
									'<div class="draw-status">' +
										'<span data-i18n="startBetting"></span>' +
									'</div>' +

									'<div class="issue">' +
										'<span class ="draw-number">NO.</span>' +
									'</div>' +
								'</div>' +

								'<div class="count-down"></div>' +
							'</div>' +

							'<div class="category">' +
								'<span class="playing-item qw selected" data-i18n="special rule"></span>' +
								'<span class="playing-item rx" data-i18n="selective rule"></span>' +
							'</div>' +
						'</div>' +
						this.countdownProgress.getDom() +
					'</div>' +

					'<div class="plate-play-zone">' +
						this.createQwPlate() +
						this.createRxPlate() +
						this.beanLoader.getDom() +
					'</div>' +

					'<div class="plate-info-zone">' +
						this.createDrawRoute() +
						this.createDrawDetail() +
						this.drawingAnimation.getDom() +
					'</div>' +
					this.createMarketCloseOverlay() +
					this.createRouteMapTip() +
				'</div>';

		return temp;
	};

	Plate.prototype.createQwOdds = function(betType,betItem){
		var odds = '';
		if(Global.betOdds.length == 0) return '';
		var betOdds = Global.betOdds.filter(function(item,index){
			return item.betType == betType;
		})[0];
		odds = betOdds.items.filter(function(item,index){
			return item.betItem == betItem;
		})[0].odds;
		return odds;
	};

	Plate.prototype.createQwPlate = function () {
		var i;
		var j;
		var that = this;
		var width;
		var arr = [
			[
				{text: 'big', value: '1.95',betItem:'Big',betType: "BS"},
				{text: 'exScore', value: '1.95',betItem:'Tie',betType: "BS"},
				{text: 'small', value: '1.95',betItem:'Small',betType: "BS"}
			],
			[
				{text: 'up', value: '1.95',betItem:'Up',betType: "UD"},
				{text: 'tie-up-down', value: '1.95',betItem:'Tie',betType: "UD"},
				{text: 'down', value: '1.95',betItem:'Down',betType: "UD"}
			],
			[
				{text: 'odds', value: '1.95',betItem:'Odds',betType:'OES'},
				{text: 'tie-odds-evens', value: '1.95',betItem:'Tie',betType:'OES'},
				{text: 'evens', value: '1.95',betItem:'Evens',betType:'OES'}
			],
			[
				{text: 'odd', value: '1.95',betItem:'Odd',betType:'OE'},
				{text: 'even', value: '1.95',betItem:'Even',betType:'OE'}
			],
			[
				{text: 'big odd', value: '1.95',betItem:'BigOdd',betType:'BSOE'},
				{text: 'small odd', value: '1.95',betItem:'SmallOdd',betType:'BSOE'},
				{text: 'big even', value: '1.95',betItem:'BigEven',betType:'BSOE'},
				{text: 'small even', value: '1.95',betItem:'SmallEven',betType:'BSOE'}
			],
			[
				{text: 'gold', value: '1.95',betItem:'Gold',betType:"5E"},
				{text: 'wood', value: '1.95',betItem:'Wood',betType:"5E"},
				{text: 'water', value: '1.95',betItem:'Water',betType:"5E"},
				{text: 'fire', value: '1.95',betItem:'Fire',betType:"5E"},
				{text: 'earth', value: '1.95',betItem:'Earth',betType:"5E"}
			]
		];
		for(var x = 0; x < arr.length; x++){
			for(var y = 0;y < arr[x].length; y++){
				arr[x][y].value = that.createQwOdds(arr[x][y].betType,arr[x][y].betItem)
			}
		}
		if(Global.betOdds.length == 0){
			var temp = 	'<div class="qw-plate">';
		}else{
			var temp = 	'';
		}
		for (i = 0; i < arr.length; i++) {
			temp += 	'<div class="row">';

			for (j = 0; j < arr[i].length; j++) {
				width = Number(100/arr[i].length);

				temp += 	'<div class="column' + (this.isPC?' hover-class':'') + '" style="width: ' + width + '%">' +
								'<div class="text" data-i18n="' +  arr[i][j].text + '" betType = "'+arr[i][j].betType+'" betItem = "'+arr[i][j].betItem+'"></div>' +

								'<div class="value">' +
								'×' + arr[i][j].value +
								'</div>';
				if(arr[i][j].betType == 'BS' && arr[i][j].betItem == 'Tie'){
					temp += '<div class="coverDom-tie"></div>'
				}else if(arr[i][j].betType == '5E'){
					temp += '<div class="coverDom-5E"></div>'
				}else if(arr[i][j].betType == 'UD'){
					if (arr[i][j].betItem == 'Tie') {
						temp += '<div class="coverDom-UDH"></div>'
					}else{
						temp += '<div class="coverDom-UD"></div>'
					}
				}else if(arr[i][j].betType == 'OES'){
					temp += '<div class="coverDom-OES"></div>'
				}
				temp += '</div>'
			}

			temp +=		'</div>'
		}

		temp +=		'</div>';

		return temp;
	};

	Plate.prototype.createRxPlate = function () {
		var i;
		var j;
		var count = 0;
		var temp = 	'<div class="rx-plate">';

		for (i = 1; i <= 80; i++) {
			if (i%12 === 1) {
				temp += '<div class="row">';

				temp += '<div class="column">'+
							'<div class="ball" ball="'+i+'">' +
								i +
							'</div>' +
						'</div>';
			} else if (i%12 === 0 || i === 80) {
				temp += '<div class="column">'+
							'<div class="ball"  ball="'+i+'">' +
								i +
							'</div>' +
						'</div>' +
					'</div>';
			} else {
				temp += '<div class="column">'+
							'<div class="ball"  ball="'+i+'">' +
								i +
							'</div>' +
						'</div>';
			}
		}

		temp += 	'</div>';

		return temp;
	};

	Plate.prototype.createMarketCloseOverlay = function() {
		var temp = '<div class="market-close-overlay">' +
			'</div>';
		return temp;
	}

	Plate.prototype.createRouteMapTip = function() {
		var temp = '<div class="routeTip">' +
						'<span class="numberTip"></span>' +
						'<span class="valueTip"></span>' +
					'</div>';
		return temp;
	}

	Plate.prototype.setRouteMapTip = function(value, number, event){
		if (value) {
			var routeTip = this.zone.find('.routeTip');
			routeTip.find('.numberTip').text(number);
			routeTip.find('.valueTip').text('[' + value + ']');
			routeTip.css({
				left: event.clientX + 2,
				top: event.clientY + 2
			});
			routeTip.show();			
		}
	}

	Plate.prototype.createAnimation1 = function () {
		var temp = 	'<div class="animation-overlay">' +
						'<div class="animation-wrapper">' +
							'<img src="../img/face-open.png" />' +
							'<div class="beans">' +
								'<div class="beans-wrapper">' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
									'<div class="bean"></div>' +
								'</div>' +
							'</div>' +

							'<div class="announcement">' +
								'本期选号已经结束，已进入下一期投注！本期开奖号码随后公布！' +
							'</div>' +
						'</div>' +
					'</div>';

		return temp;
	};

	Plate.prototype.startAnimation1 = function () {
		var face      = this.zone.find('.animation-wrapper img');
		var beans     = this.zone.find('.beans');
		var firstBean = beans.find('.bean:first-child');
		var left      = parseInt(beans.css('left'));
		var count     = 300;
		var count2    = 600;
		var that      = this;

		var interval1 = setInterval(function () {
			if (count%2 === 0) {
				face.attr('src', '../img/face-open.png');
			} else {
				face.attr('src', '../img/face-close.png');
			}

			count --;

			if (count === 0) {
				clearInterval(interval1);
				clearInterval(interval2);
				return;
			}
		}, 300);

		var interval2 = setInterval(function () {
			if (count%2 === 0) {
				beans.css('left', left - 10 + 'px');
			} else {
				beans.css('left', left + 'px');
			}
		}, 100);
	};

	Plate.prototype.createDrawRoute = function () {
		var temp =	'<div class="draw-route">' +
			'<div class="wrapper">' +
			'<div class="left-zone">' +
			'<ul class="status">' +
			'<li class="selected"><span data-i18n="b/s"></span></li>' +
			'<li><span data-i18n="o/e"></span></li>' +
			'<li><span data-i18n="o/t/e"></span></li>' +
			'<li><span data-i18n="u/d"></span></li>' +
			'<li><span data-i18n="pb"></span></li>' +
			'<li><span data-i18n="5e"></span></li>' +
			'<div class="circle" data-i18n="b/s"></div>' +
			'</ul>' +

			'<div class="map">' +
			this.createRouteTable() +
			'</div>' +
			'</div>' +

			'<div class="draw-route-naver">' +
			'<div class="arrow">' +
			'<img src="../img/left-arrow.png" height=15 width=15/>' +
			'</div>' +
			'<div class="text" data-i18n="draw detail"></div>' +
			'</div>' +
			'</div>' +
			'</div>';

		return temp;
	};

	Plate.prototype.createRouteTable = function () {
		var i;
		var j = 0;
		var temp = "";
		for(var x = 0;x < 6;x++){
			var tabInx = "table_"+x;
			temp += '<div class="table '+tabInx+'">' +
				'<div class="table_left" nav-index = "' + x + '"></div>'+
				'<div class="tbody">';

			for (i = 0; i < 5; i++) {
				temp += 		'<div class="tr" tab-tr = "'+i+'">';

				for (j = 0; j < 20; j++) {
					temp +=			'<div class="td" tab-td = "'+j+'"><span></span></div>';
				}

				temp += 		'</div>';
			}

			temp +=			'</div>' +
				'<div class="table_right" nav-index = "' + x + '"></div>'+
				'</div>';
		}


		return temp;
	};

	Plate.prototype.createDrawDetail = function () {
		var temp = 	'<div class="draw-detail">' +
			'<div class="wrapper">' +
			'<div class="draw-detail-naver">' +
			'<div class="arrow">' +
			'<img src="../img/left-arrow.png" height=15 width=15/>' +
			'</div>' +
			'<div class="text" data-i18n="draw map"></div>' +
			'</div>' +

			'<div class="timeline">' +
			'<div class="play">' +
			'<div class="prev">' +
			'<img src="../img/timeline-left.png"/>' +
			'</div>' +

			'<div class="next">' +
			'<img src="../img/timeline-right.png"/>' +
			'</div>' +
			'</div>' +

			'<div class="timeline-slider">' +
			'<div class="chunks-line" style="left: 0rem">'+
					this.addDetailChunk() +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>';

		return temp;
	};

	//更新
	Plate.prototype.setDetailChunk = function(){
		var temp = this.addDetailChunk();
		this.zone.find('.chunks-line').html(temp);
		app.initI18next(this.zone);
		this.resetChunksLineWidth();
	};

	//初始化
	Plate.prototype.addDetailChunk = function () {
		this.data.reverse();
		var temp = '';
		var list = this.data;
		var Chunklist = [];
		var num = [];
		var y = 0;
		for(var i = 0; i < Math.ceil(list.length/4); i++){
			for(var j = 0; j < 4; j++){
				if(i == Math.ceil(list.length/4) - 1 && list.length%4 == j && j != 0){
					break;
				}
				num.push(list[y]);
				y++;
			}
			Chunklist.push(num);
			num = [];
		}
		for(var i = Chunklist.length-1 ; i >=0; i--){
			temp +=	'<div class="chunk">';
			for(var j = 0; j < Chunklist[i].length; j++){
				if(i == Chunklist.length - 1 &&  Chunklist[i].length != 4){
					if(Chunklist[i].length == 1){
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][0]);
						temp +='<div class="clear"></div>';
						temp += '</div>'
					}
					if(Chunklist[i].length == 2){
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][1]);
						temp += this.createDetailItem('left-item',Chunklist[i][0]);
						temp +='<div class="clear"></div>';
						temp += '</div>'
					}
					if(Chunklist[i].length == 3){
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][1]);
						temp += this.createDetailItem('left-item',Chunklist[i][0]);
						temp +='<div class="clear"></div>';
						temp += '</div>';
						temp += '<div class="chunk-up">';
						temp += this.createDetailItem('left-item',Chunklist[i][2]);
						temp +='<div class="clear"></div>';
						temp += '</div>'
					}
					break;
				}
				if(j == 0){
					temp += '<div class="chunk-up">';
					temp += this.createDetailItem('left-item',Chunklist[i][j]);
				}
				if(j == 1){
					temp += this.createDetailItem('right-item',Chunklist[i][j]);
					temp +='<div class="clear"></div>';
					temp += '</div>'
				}
				if(j == 2){
					temp += '<div class="chunk-up">';
					temp += this.createDetailItem('left-item',Chunklist[i][j])
				}
				if(j == 3){
					temp += this.createDetailItem('right-item',Chunklist[i][j])
					temp +='<div class="clear"></div>';
					temp += '</div>'
				}
			}

			temp += '</div>'
		}

		return temp;
	};

	Plate.prototype.setValue = function(anasysisType,index){
		var that = this;
		if(index == undefined) index = 0;
		var tableIdx=".table_" + index;
		var dom = $('#' + this.id).find('.map').find(tableIdx).find(".tbody");
		var tr;
		var td;
		var repeatVal;
		var num = AnalysisObj.getRouterMap(this.data, anasysisType);
		var y = 0;
		var cute;

		for(var i = 0; i< num.length; i++){
			for(var j = 0; j < num[i].length; j++){
				if (i > dom.find('[tab-tr='+j+']').find('[tab-td]').length - 1) {
					//格子不够 动态再加一个
					cute = '<div class="td" tab-td = "'+ i +'"><span></span></div>';
					dom.find('[tab-tr='+j+']').append(cute);
				}
				if(typeof num[i][j].value == 'number'){
					dom.find('[tab-tr='+j+']')
						.find('[tab-td='+i+']')
						.children()
						.text(num[i][j].value)
						.attr('number',num[i][j].number);
				}else{
					dom.find('[tab-tr='+j+']')
						.find('[tab-td='+i+']')
						.children()
						.attr('data-i18n',num[i][j].value)
						.attr('number',num[i][j].number);
				}
				that.setColorValue(dom.find('[tab-tr='+j+']').find('[tab-td='+i+']'),num[i][j].value,anasysisType);
			}
		}
		if (num.length > 20) {
			dom[0].style.left = (0.264 - (num.length - 20) * 0.2376) + "rem";
		}
		else{
			dom[0].style.left = 0.264 + 'rem';
		}
		dom[0].style.right = 0.264 + 'rem';

		this.routePageData[anasysisType].pageIndex = 0;
		this.routePageData[anasysisType].dataLenght = num.length;
	};

	Plate.prototype.setColorValue = function(dom,val,anasysisType){
		if(anasysisType != 'PB'){
			var color = '';
			var colorList = [
				['上','up','router_U','大','big','router_B','奇','odds','router_Odd','火','fire','router_Fi','单','odd','router_Single'],
				['下','down','router_D','小','small','router_S','偶','evens','router_Eevn','双','even','router_Double'],
				['和','tie','木','wood'],
				['金','gold','router_Go'],
				['水','water','router_Wa'],
				['土','earth','router_Ea']
			];
			if(colorList[0].indexOf(val) >= 0)color = '#cf0000';
			if(colorList[1].indexOf(val) >= 0)color = '#585858';
			if(colorList[2].indexOf(val) >= 0)color = '#12b70f';
			if(colorList[3].indexOf(val) >= 0)color = '#f7941d';
			if(colorList[4].indexOf(val) >= 0)color = '#0000ff';
			if(colorList[5].indexOf(val) >= 0)color = '#603913';
			dom.css('color',color);
		}else{
			dom.children().addClass('TabScale')
		}
	};
	
	Plate.prototype.toggleRoute = function(index){
		var dom = $('#' +this.id).find('.map');
		 dom.find(".table").hide();

		if(index == undefined) index = 0;
		var tableIdx=".table_"+index;
		dom.find(tableIdx).show();
	};

	Plate.prototype.resetChunksLineWidth = function () {
		var chunksLine = this.zone.find('.chunks-line');
		var len   = chunksLine.find('.chunk').length;
		var width = CHUNKWIDTH;
		chunksLine.css({
			'width': len*width + 'rem',
			'left': (0 - (len - 1) * width) + 'rem'
		});
		chunksLine.find('.chunk').css('width', width + 'rem');

		this.startleft = 0 - (len - 1) * width;
	};

	Plate.prototype.createDetailItem = function (className,data) {
		var i;
		var j;
		var result = data.result.replace(/[\[\]]/g,'').split(',');
		var temp = '<div class="item ' + className + '">' +
			'<div class="item-wrapper">' +
			'<div class="info">' +
			'<span class="text">NO.</span>' +
			'<span class="issue">'+data.number+'</span>' +
			'<span class="text" data-i18n="total"></span>' +
			'<span class="total">'+AnalysisObj.getPB(result)+'</span>' +
			'</div>' +

			'<div class="table">' +
			'<div class="tbody">';

		for (i = 0; i < 2; i++) {
			temp +=					'<div class="row">';

			for (j = 0; j < 13; j++) {
				if (i === 0) {
					if (j === 10) {
						temp +=			'<div class="td value1"><span data-i18n="'+AnalysisObj.getBS(result)+'" number = "'+data.number+'">'+AnalysisObj.getBS(result)+'</span></div>';
					} else if (j === 11) {
						temp +=			'<div class="td value2"><span data-i18n="'+AnalysisObj.getUD(result)+'" number = "'+data.number+'">'+AnalysisObj.getUD(result)+'</span></div>';
					} else if (j === 12) {
						temp +=			'<div class="td value3"><span data-i18n="'+AnalysisObj.getOTE(result)+'" number = "'+data.number+'">'+AnalysisObj.getOTE(result)+'</span></div>';
					} else {
						temp +=			'<div class="td"><span number = "'+data.number+'">'+result[j]+'</span></div>';
					}
				} else {
					if (j === 10) {
						temp +=			'<div class="td value4"><span data-i18n= "'+AnalysisObj.getOE(result)+'" number = "'+data.number+'">'+AnalysisObj.getOE(result)+'</span></div>';
					} else  if (j === 11) {
						temp +=			'<div class="td value5"><span data-i18n="'+AnalysisObj.get5E(result)+'" number = "'+data.number+'">'+AnalysisObj.get5E(result)+'</span></div>';
					} else if(j === 12){
						temp +=			'<div class="td value6"></div>';
					}else{
						temp +=			'<div class="td" number = "'+data.number+'"><span>'+result[j + 10]+'</span></div>';
					}
				}
			}

			temp +=					'</div>';
		}

		temp  +=				'</div>' +
			'</div>' +
			'</div>' +
			'</div>';

		return temp;
	};

	Plate.prototype.setProgress = function (leftTime, totalTime) {
		this.countdownProgress.set(leftTime, totalTime);
	};

	Plate.prototype.startCountdown = function () {
		var countdown = this.zone.find('.count-down');
		var that      = this;
		var drawData;
		var leftTime;
		var serverTime;
		var beginTime;
		var closeTime;
		var endTime;
		var totalTime;
		var now;
		var min;
		var sec;

		var callback = function () {
			setInterval(function () {
				drawData = app[that.market + '_KenoSocket'].drawData;
				if (!drawData.marketClosed) {
					now = new Date();
					serverTime 	= new Date().getTime() + window.jetLag;
					beginTime 	= Util.getDateByDateString(drawData.beginTime).getTime();
					closeTime 	= Util.getDateByDateString(drawData.closeTime).getTime();
					endTime 	= Util.getDateByDateString(drawData.endTime).getTime();
					totalTime 	= Math.round((endTime - beginTime) / 1000);
					
					count 		= Math.round((closeTime - serverTime) / 1000);
					min 		= parseInt(count / 60) < 10 ? '0' + parseInt(count / 60) : parseInt(count / 60);
					sec 		= parseInt(count % 60) < 10 ? '0' + parseInt(count % 60) : parseInt(count % 60);
					
					if (serverTime > endTime) {
						countdown.html('00:00');
						return;
					}

					countdown.html(min + ':' + sec);
					that.setProgress(count, totalTime);

					//进入下一期
					if (count == 0 || serverTime > closeTime) {
						that.beanLoader.show();
						setTimeout(function(){
							that.beanLoader.hide();
						},5000);
						app[that.market + '_KenoSocket'].updateDraw();

						//当前彩期结束10秒后获取下一期的
						setTimeout(function(){
							app[that.market + "_KenoSocket"].getMarket();
						},endTime - closeTime + 10000);
					}
				}

			}, 1000);
		};

		this.countdownProgress.startAnimation(callback.bind(this));
	};

	Plate.prototype.showBetDialog = function (data) {
		if (app.betDialogDeleteLock) {
			return;
		}

		if (app.betDialog.isHide()) {
			app.betDialog.show();
			app.betDialog.addRecord(this.id,data);
			app.betDialog.okCallback = function(betAmount){
				PlaceBet.kenoPlaceBet(betAmount);
			}
		} else {
			if (!app.betDialog.hasData(this.id) || app.betDialog.hasData(this.id)) {
				app.betDialog.addRecord(this.id,data);
			}
		}
	};

	Plate.prototype.bindEvents = function (callback) {
		var qwPlate;
		var rxPlate;
		var ballRX = [];
		var drawRoute;
		var drawDetail;
		var chunksLine;
		var statusUl;
		var width;
		var left;
		var len;
		var circle;
		var index;
		var lock = false;
		var that = this;
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';

		this.zone  = $('#' + this.id);
		qwPlate    = this.zone.find('.qw-plate');
		rxPlate    = this.zone.find('.rx-plate');
		drawRoute  = this.zone.find('.draw-route');
		drawDetail = this.zone.find('.draw-detail');
		chunksLine = drawDetail.find('.chunks-line');
		statusUl   = drawRoute.find('ul.status');
		circle     = statusUl.children('.circle');

		this.zone.delegate('.playing-item', 'click', function () {
			that.zone.find('.playing-item').removeClass('selected');

			if ($(this).hasClass('qw')) {
				qwPlate.css('left', '0');
				rxPlate.css('left', '100%');
				that.nation = 'qw';
			} else {
				qwPlate.css('left', '-100%');
				rxPlate.css('left', '0');
				that.nation = 'rx';
			}

			$(this).addClass('selected');
		});

		this.zone.delegate('.table_left','click', function(){
			var index = parseInt($(this).attr('nav-index'));
			var currentPageData;
			for(var key in that.routePageData){
				if (that.routePageData[key]['tabIndex'] == index) {
					currentPageData = that.routePageData[key];
				}
			};

			var left = parseFloat($(this).next()[0].style.left.replace('rem',''));
			var right = parseFloat($(this).next()[0].style.right.replace('rem',''));

			if (currentPageData.dataLenght > 20 && currentPageData.pageIndex < currentPageData.dataLenght - 20) {
				currentPageData.pageIndex++;
				$(this).next()[0].style.left = (left + 0.2376) + 'rem';
				$(this).next()[0].style.right = (right - 0.2376) + 'rem';
			}
		});

		this.zone.delegate('.table_right', 'click', function() {
			var index = parseInt($(this).attr('nav-index'));
			var currentPageData;
			for(var key in that.routePageData){
				if (that.routePageData[key]['tabIndex'] == index) {
					currentPageData = that.routePageData[key];
				}
			};

			var left = parseFloat($(this).prev()[0].style.left.replace('rem',''));
			var right = parseFloat($(this).prev()[0].style.right.replace('rem',''));

			if (currentPageData.dataLenght > 20 && currentPageData.pageIndex > 0) {
				currentPageData.pageIndex--;
				$(this).prev()[0].style.left = (left - 0.2376) + 'rem';
				$(this).prev()[0].style.right = (right + 0.2376) + 'rem';
			}
		});

		this.zone.delegate('.draw-route .tbody .td > span','mouseover', function(e){
			var number = $(this).attr('number');
			var value = $(this).text();
			that.setRouteMapTip(value, number, e);
		}).delegate('.draw-route .tbody .td > span','mouseout', function(e){
			that.zone.find('.routeTip').hide();
		});

		this.zone.delegate('.routeTip', 'mouseover', function(event) {
			$(this).show();
		}).delegate('.routeTip', 'mouseout', function(event) {
			$(this).hide();
		});

		statusUl.delegate('li', 'click', function () {
			statusUl.children('li').removeClass('selected');
			$(this).addClass('selected');
			var dataI18n = $(this).children().attr('data-i18n');
			index = $(this).index();
			circle.html(i18next.t($(this).children('span').attr('data-i18n')));
			circle.css('left', (index * 0.869 + 0.12) + 'rem');
			circle.attr('data-i18n',dataI18n);
			that.toggleRoute(index);
			app.initI18next($('#' +that.id).find('.map .tbody'))
		});

		qwPlate.delegate('.column', 'click', function () {
			qwPlate.find('.column').removeClass('selected');
			$(this).addClass('selected');
			var data = {
				issue: app[that.market+'_KenoSocket'].drawData.drawNumber,
				nation: qwPlate.parents('.plate').attr('id').split('_')[1],
				betContent: $(this).find('.text').text(),
				betType:$(this).find('.text').attr('bettype'),
				betItem:$(this).find('.text').attr('betitem'),
				market:that.market
			};
			that.showBetDialog(data);
		});

		rxPlate.delegate('.ball', 'click', function () {
			if(rxPlate.find('.selected').length == 1 && $(this).hasClass('selected')) return false;
			if(rxPlate.find('.selected').length != ballRX.length && ballRX.length != 0)ballRX = [];
			if(ballRX.length < 5 || $(this).hasClass('selected')){
				var text = $(this).text();
				if(text < 10){
					text = '0' + text
				}
				if($(this).hasClass('selected')){
					var index = ballRX.indexOf(text);
					ballRX.splice(index,1);
				}else{
					ballRX.push(text);
				}
				$(this).toggleClass('selected');
			}
			var data = {
				issue: app[that.market+'_KenoSocket'].drawData.drawNumber,
				nation: qwPlate.parents('.plate').attr('id').split('_')[1],
				betContent: ballRX.toString(),
				betType:'Ball',
				betItem:ballRX,
				market:that.market
			};
			that.showBetDialog(data);
		});

		drawRoute.find('.draw-route-naver').click(function () {
			drawRoute.css('left', '-100%');
			drawDetail.css('left', '0');
		});

		drawDetail.find('.draw-detail-naver').click(function () {
			drawRoute.css('left', '0');
			drawDetail.css('left', '100%');
		});

		drawDetail.find('.prev').click(function () {
			if (lock) {
				return;
			}

			lock = true;

			width = CHUNKWIDTH;

			if (Math.round(that.startleft) === 0) {
				lock = false;
				return;
			}

			that.startleft += width;
			chunksLine.css('left', that.startleft + 'rem');

			var timeout = setTimeout(function () {
				lock = false;
				clearTimeout(timeout);
			}, 500);
		});

		drawDetail.find('.next').click(function () {
			if (lock) {
				return;
			}

			lock = true;

			width = CHUNKWIDTH;
			len   = chunksLine.find('.chunk').length;

			if (that.startleft === (0 - (len-1) * width)) {
				lock = false;
				return;
			}

			that.startleft -= width;
			chunksLine.css('left', that.startleft + 'rem');

			var timeout = setTimeout(function () {
				lock = false;
				clearTimeout(timeout);
			}, 500);
		});

		this.resetChunksLineWidth();
		this.countdownProgress.bindEvents();
		this.beanLoader.bindEvents();
		this.drawingAnimation.bindEvents();
	};

	window.Plate = Plate;
}());


/*
 *  用户反馈 下拉界面 UserFeedback.js
 */

(function () {
	function UserFeedback (opt) {
		IMDialog.call(this, (opt || {}));
		this.el = this.initDom();
		this.getFeedBackQeustion();
	}

	UserFeedback.prototype = new IMDialog();

	UserFeedback.prototype.initDom = function () {
		var temp;

		this.submit     = new IMButton({
			text: 'submit feedback',
			className: 'submit-feedback',
			id:'submitFeedback'
		});

		this.sure = new IMButton({
			text: 'ok',
			className: 'sure',
			id:'userFeedSure'
		});

		temp = 	'<div class="user-feedback">' +
			'<div class="dialog-wrapper">' +
			'<div class="page1">' +
				// '<div class="introduction">' +
				// 	'用30秒，让我们为您更好的服务!' +
				// '</div>' +

				// '<div class="survey survey1">' +
				// 	'<div class="title">' +
				// 		'<div class="number">1</div>' +
				// 		'<div class="text">您觉得这次改版最满意的地方是?</div>' +
				// 	'</div>' +

				// 	'<ul>' +
				// 		'<li>' +
				// 			this.checkbox1.getDom() +
				// 		'</li>' +
				// 		'<li>' +
				// 			this.checkbox2.getDom() +
				// 		'</li>' +
				// 		'<li>' +
				// 			this.checkbox3.getDom() +
				// 		'</li>' +
				// 		'<li>' +
				// 			this.checkbox4.getDom() +
				// 		'</li>' +
				// 	'</ul>' +
				// '</div>' +

				// '<div class="survey survey2">' +
				// 	'<div class="title">' +
				// 		'<div class="number">2</div>' +
				// 		'<div class="text">您觉得还需要改进的地方是?</div>' +
				// 	'</div>' +

				// 	'<ul>' +
				// 		'<li>' +
				// 			this.checkbox5.getDom() +
				// 		'</li>' +
				// 		'<li>' +
				// 			this.checkbox6.getDom() +
				// 		'</li>' +
				// 		'<li>' +
				// 			this.checkbox7.getDom() +
				// 		'</li>' +
				// 		'<li>' +
				// 			this.checkbox8.getDom() +
				// 		'</li>' +
				// 	'</ul>' +
				// '</div>' +

			this.submit.getDom() +
			'</div>' +

			'<div class="page2">' +
			'<div class="smile">' +
			'<img src="../img/smile.png">' +
			'</div>' +

			'<div class="text1">' +
			'提交成功' +
			'</div>' +

			'<div class="text2">' +
			'谢谢您宝贵的意见，我们会做的更好' +
			'</div>' +

			this.sure.getDom() +
			'</div>' +
			'</div>' +
			'</div>' +

			'<div class="overlay overlay1"></div>';

		return temp;
	};

	UserFeedback.prototype.getDom = function () {
		return this.el;
	};

	UserFeedback.prototype.show = function () {
		this.showContentOverlay();
	};

	UserFeedback.prototype.hide = function (flag, callback) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.feedback').removeClass('highlight');
				$('.nav-title').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;

				if (typeof callback === 'function') {
					callback();
				}
			}, 300);
		} else {
			$('.feedback').removeClass('highlight');
		}
	};

	UserFeedback.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	UserFeedback.prototype.setButVal = function(){
		if(app.languageType == 'en'){
			this.submit.setText('submit feedback');
			this.sure.setText('sure');
		}else{
			this.submit.setText('提交反馈');
			this.sure.setText('确定');
		}
	}

	UserFeedback.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	UserFeedback.prototype.bindEvents = function () {
		var submit;
		var sure;
		var page1;
		var page2;
		var that = this;

		this.zone = $('.user-feedback');

		submit = this.zone.find('.submit-feedback');
		sure   = this.zone.find('.sure');
		page1  = this.zone.find('.page1');
		page2  = this.zone.find('.page2');

		submit.click(function () {
			that.commitFeedBack(page1, page2);
		});

		sure.click(function () {
			clearTimeout(that.timeout);
			page1.show();
			page2.hide();
			that.hide();
		});

		this.zone.delegate('.im-checkbox', 'click', function (e) {
			$(this).toggleClass('checked');
		});

		this.bindOverlayEvents();
	};

	UserFeedback.prototype.getFeedBackQeustion = function() {
		var html = '';
		var that = this;
		var checkboxObj = {};
		var groupName;

		service.paperQuestion({}, function(res) {
			if (res.code == 0) {
				that.setButVal();
				var questions = res.paper.questions;
				if (questions.length > 0) {
					that.paperId = res.paper.id;
					for (var i = 0; i < questions.length; i++) {
						groupName = questions[i].id;
						for (var key in questions[i]) {
							if (key != 'id' && key != 'content') {
								if (!checkboxObj[groupName]) {
									checkboxObj[groupName] = [];
								}
								if (questions[i][key]!="") {
									checkboxObj[groupName].push(new IMCheckBox({ id: key, text: questions[i][key], value: key.replace('selection','') }));
								}
							}
						}
					}

					html += '<div class="introduction">' + res.paper.title + '</div>';
					for(var j = 0; j < questions.length; j++){
						groupName = questions[j].id;
						html += '<div class="survey survey'+ (j + 1) +'" questionsId = '+res.paper.questions[j].id+'>';
						html += '<div class="title">' +
							'<div class="number">' + (j + 1) + '</div>' +
							'<div class="text">' + questions[j].content + '</div>' +
							'</div>';
						html += '<ul>';
						for(var k = 0; k < checkboxObj[groupName].length; k++){
							html += '<li>'+
								checkboxObj[groupName][k].getDom() +
								'</li>';
						}
						html += '</ul>';
						html += '</div>';
					}
					$(html).insertBefore(that.zone.find('.submit-feedback'));
				}

			}else{
				Util.errorModel(res.code);
			}
		});
	};

	UserFeedback.prototype.commitFeedBack = function(page1, page2) {
		var that = this;
		var req = {
			paperId: that.paperId,
			answer: []
		};
		var $survey = $('.survey');
		$survey.each(function(index, item){
			var imCheck = $(item).find('.im-checkbox.checked');
			var questionId =  $(item).attr('questionsId');
			if (imCheck.length > 0) {
				req.answer.push({
					questionId: questionId,
					selection: []
				});
				$.each(imCheck,function(index, el){
					if ($(el).hasClass('checked')) {
						req.answer[req.answer.length - 1].selection.push($(el).attr('data-value'))
					}
				});
			}
		});
		if (req.answer.length == 0) return;
		service.paperAnswer(req, function(res) {
			if (res.code == 0) {
				//清除
				$('.survey').find('.im-checkbox').removeClass('checked');
				page1.hide();
				page2.show();

				that.timeout = setTimeout(function(){
					page1.show();
					page2.hide();
				},5000);
			}else{
				Util.errorModel(res.code);
			}
		});
	}


	window.UserFeedback = UserFeedback;
}());

(function () {
	function UserGuide (opt,num) {
		IMDialog.call(this, (opt || {}));
		this.el = this.initDom();
	}

	UserGuide.prototype = new IMDialog();

	UserGuide.prototype.initDom = function () {
		var temp;

		temp = 	'<div class="user-guide">' +
					'<div class="dialog-wrapper">' +
						this.getContent() +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1"></div>';

		return temp;
	};

	UserGuide.prototype.getDom = function () {
		return this.el;
	};

	UserGuide.prototype.getContent = function () {
		if (i18next.language === 'zh') {
			return '<table class="zh-table" width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td height="2%" colspan="3" bgcolor="#FFF">&nbsp;</td></tr><tr><td width="22" bgcolor="#FFF">&nbsp;</td><td width="96%"><table width="98%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td><br class="clear-both"></td></tr><tr><td><p class="titles">规则</p><p class="subTitles">快乐彩</p><p>快乐彩以中国（北京）、加拿大、加拿大西部、俄勒冈及斯洛伐克地区的官方结果为准。由1至80的号码中随机摇出20个数字作为开奖号码，依这20个号码变化成各式不同的玩法，在根据猜中的号码个数或玩法可以获得不同等级的奖金。此游戏的开奖时间和相对应地区的KENO完全同步。</p><p>您可连串投注不同市场的盘口。</p><p>KENO游戏分为七种玩法，分别是“大小”、“单双”、“奇偶”、“上下”、“五行”、“珠仔”和“大小单双过关”。各种玩法如下：</p><ol><li><a href="#1">大小，即总数大小</a></li><li><a href="#2">单双，即总数单双</a></li><li><a href="#3">奇偶</a></li><li><a href="#4">上下</a></li><li><a href="#5">五行, 即总数五行</a></li><li><a href="#6">珠仔，即选号玩法</a></li><li><a href="#7">大小单双过关，即总数大小单双过关</a></li></ol><div class="faqQuestion">1. 大小，即总数大小<a name="1" id="currencies"></a></div><br><div class="faqAnswer"><p>投注20个号码的总和。        当20个号码总和为810时，游戏将自动退还投注在“大”、“小”、“大单”、“小单”、“大双”、“小双”这六个选项的注金；当过关注单中包含以上六个选项中的一项或几项时，此过关注单将被自动取消，投注本金将被自动退还。</p><p>大小玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>大</td><td>810</td><td>小</td></tr><tr class="row1"><td>赔率</td><td>1.95</td><td>108</td><td>1.95</td></tr></tbody></table><p>例如：开彩号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，则总数小。下注“小”为赢，反之则输。<br></p></div><div class="backToTop"><a href="#top">返回顶部</a></div><div class="faqQuestion">2. 单双，即总数单双<a name="2" id="deposit"></a></div><br><div class="faqAnswer"><p>开出的20个号码的总和为奇数，则为总单；这一总和为偶数，则为总双。<br>    下表是单双玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>单</td><td>双</td></tr><tr class="row1"><td>赔率</td><td>1.95</td><td>1.95</td></tr></tbody></table><p>例如：开奖号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是奇数693，则是总单。下注“单”为赢，反之则输。</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">3. 奇偶<a name="3" id="withdraw"></a></div><br><div class="faqAnswer"><p>开出的20个中奖号码中，如奇数号码数目占多数（超过10个），则为奇盘，投注“奇”者中奖；偶数号码占多数（超过10个），则为偶盘，投注“偶”者中奖；如果奇数和偶数号码数目相同时（均为   10个），则为和，投注“和”者中奖。<br>              奇偶玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>奇</td><td>和</td><td>偶</td></tr><tr class="row1"><td>赔率</td><td>2.3</td><td>4.3</td><td>2.3</td></tr></tbody></table><br><p>例如：开奖号码为1，3，5，7，9，11，13，15，17，19，21，22，24，26，28，30，32，34，46，68，   其中奇数11个偶数9个，此期为奇盘。下注“奇”为赢，反之则输</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">4. 上下<a name="4" id="receive"></a></div><br><div class="faqAnswer"><p>号码1至40为上盘号码，41至80为下盘号码。开出的20个开奖号码中：如上盘号码占多数（超过10个）时，此局为上盘；下盘号码占多数时为下盘；上下盘号码在此局开出的数目相同时（各10个数字），此局为和盘。<br>    上下玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="300" border="0"><tbody><tr class="rowHeader"><td>-</td><td>上</td><td>和</td><td>下</td></tr><tr class="row1"><td>赔率</td><td>2.3</td><td>4.3</td><td>2.3</td></tr></tbody></table><p>例如：此局开出1，2，3，4，5，6，7，8，9，10，11，12，13，14，15，16，17，18，19，20。此局为上盘。下注“上”为赢，反之则输。</p><p>&nbsp;</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">5. 五行，即总数五行<a name="5" id="receive"></a></div><br><div class="faqAnswer"><p>开出的20个号码的总和分在5个段，以金、木、水、火、土命名：金（210～695）、木（696～763）、水（764～855）、火（856～923）和土（924～1410）。<br>    五行玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="500" border="0"><tbody><tr class="rowHeader"><td>-</td><td>金</td><td>木</td><td>水</td><td>火</td><td>土</td></tr><tr class="row1"><td>赔率</td><td>9.2</td><td>4.6</td><td>2.4</td><td>4.6</td><td>9.2</td></tr></tbody></table><p>例如：开奖号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，则总分数在210－695段内，则开出的是“金”。下注“金”为赢，反之则输。</p><p>&nbsp;</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">6. 珠仔，即选号玩法<a name="6" id="receive"></a></div><div class="faqAnswer"><p>珠仔玩法是在80个号码中选出1至5个号码组合成一组进行的投注。对照投注号码与中奖号码，根据所选号码与中奖号码相符的个数多少（顺序不限）而知中奖等级。<br>    珠仔玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="600" border="0"><tbody><tr class="rowHeader"><td>-</td><td>选5</td><td>选4</td><td>选3</td><td>选2</td><td>选1</td></tr><tr class="row1"><td>中 5</td><td>251</td><td>无</td><td>无</td><td>无</td><td>无</td></tr><tr class="row2"><td>中 4</td><td>21</td><td>51</td><td>无</td><td>无</td><td>无</td></tr><tr class="row1"><td>中 3</td><td>3.0</td><td>6.0</td><td>20.3</td><td>无</td><td>无</td></tr><tr class="row2"><td>中 2</td><td>无</td><td>2.0</td><td>2.3</td><td>10.3</td><td>无</td></tr><tr class="row1"><td>中 1</td><td>无</td><td>无</td><td>无</td><td>无</td><td>3.3</td></tr><tr class="row2"><td>中 0</td><td>无</td><td>无</td><td>无</td><td>无</td><td>无</td></tr></tbody></table><br><p>例如：投注1，2，3 三个号码为一个组合，该期开奖号码中包含1，2，3 三个数字，则视为投注‘3中3’的玩法者中奖；若开出号码中只有1，2则视为投注‘3中2’的玩法者中奖。<br></p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div><div class="faqQuestion">7. 大小单双过关，即总数大小单双过关<a name="7" id="receive"></a></div><br><div class="faqAnswer"><p>开出的20个号码的总和的游戏，分为“大单”，“小单”，“大双”和“小双”。<br>    总和大于810为“总数大”,小于810为“总数小”；<br>    总和为偶数叫“双”，奇数叫“单”；<br>    通过大小和单双组合产生“大单”，“小单”，“大双”和“小双”四种结果。<br>    五行玩法的赔率：</p><table bordercolor="#ffffff" cellspacing="1" cellpadding="5" width="400" border="0"><tbody><tr class="rowHeader"><td>-</td><td>大单</td><td>小单</td><td>大双</td><td>小双</td></tr><tr class="row1"><td>赔率</td><td>3.7</td><td>3.7</td><td>3.7</td><td>3.7</td></tr></tbody></table><br><p>例如：开奖号码为01、04、05、10、11、13、20、27、30、32、33、36、40、47、54、59、61、64、67、79，总和是693，总和小于810，并且是奇数，则为“小单”。下注“小单”为赢，反之则输。</p><br><p><strong>市场连串投注</strong><br>    连串指的是同一个投注单中有最少2个选择的投注。所有所选择的投注取得胜利，则连串胜利，也将按照赔率进行支付。如果有一个或者多个所选择的投注输掉，则输掉整个连串。“大/小”中的“和”和“五行”不参与连串投注。期号结果如果发生任何形式的暂停，终止或者取消，则连串投注无效。</p></div><div class="backToTop"><a href="#top">返回顶部</a><a href="#top"></a></div></td></tr></tbody></table></td><td width="22" bgcolor="#FFF">&nbsp;</td></tr><tr><td colspan="3" bgcolor="#FFF" height="20">&nbsp;</td></tr></tbody></table>';
		} else {
			return '<table class="en-table" border=0 cellpadding=0 cellspacing=0 width="100%" align=center><tr><td bgcolor=#FFF colspan=3 height=2%><tr><td bgcolor=#FFF width=2%><td width=96%><table border=0 cellpadding=0 cellspacing=0 width=98% align=center><tr><td><br class=clear-both><tr><td><p class=titles>Rules<p class=subTitles>Keno<p>Keno results are currently based on Chinese (Beijing), Canadian, West Canadian, Oregon & Slovakian Keno official results. KENO is played with 20 numbered balls drawn randomly from 80 numbered balls ranging from 01 to 80. The combination of these 20 numbers were divided and segregated into several variations and different kinds of bet type each with their own payout calculations and rates.<br><br>The official result timing strictly corresponds with each region the game was extracted from.<br><br>KENO is divided into several types namely:<br><strong>BIG/SMALL<br>ODD/EVEN<br>ODDS/EVENS<br>UP/DOWN<br>FIVE RANGES<br>PEARL BALL</strong><br><strong>BIG/SMALL & ODD/EVEN Parlay</strong><br><br>On top of placing single bets in each market location, you can choose to place bet across different markets simultaneously and make a parlay bet in the lobby screen.<p>Each bet types can be explained in detail as follows.<ol><li><a href=#1>BIG, SMALL, ACTUAL/EXACT SCORE</a><li><a href=#2>ODD, EVEN</a><li><a href=#3>ODDS, EVENS, TIE</a><li><a href=#4>UP, DOWN, TIE</a><li><a href=#5>Five Ranges (GOLD, WOOD, WATER, FIRE & EARTH)</a><li><a href=#6>Pearl Ball</a><li><a href=#7>Big/Small & Odd/Even Parlay</a></ol><div class=faqQuestion>1. Bet Type: BIG, SMALL, ACTUAL/EXACT SCORE <a id=currencies></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>BIG<td>810<td>SMALL<tr class=row1><td>odds<td>1.95<td>108<td>1.95</table><br>When the sum of 20 numbered balls drawn is equal to 810, all the stake bets on market:"big", "small", "big odd", "small odd", "big even", "small even" will be automatically refunded; all the parlay bets will be cancelled if you choose any of above markets in combo bet and stakes will be refunded.<br><br><strong>BIG:</strong> The sum of the 20 numbered balls drawn is greater than 810.<br><strong>SMALL:</strong> The sum of the 20 numbered balls drawn is smaller than 810.<br><strong>EXACT SCORE:</strong> The sum of the 20 numbered balls drawn is equal to 810.<br><br><strong>Example Draw result</strong>: 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Total SUM :</strong> 693<br><strong>Bet Result:</strong> 693 are smaller than 810, therefore “SMALL” wins.<br><strong>Wager:</strong> USD 100<br><strong>Payout:</strong> USD 100 x 1.95 = USD 195.</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>2. Bet Type: ODD, EVEN <a id=deposit></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>ODD<td>EVEN<tr class=row1><td>odds<td>1.95<td>1.95</table><br><strong>ODD:</strong> The last digit from the total sum of the 20 numbered balls drawn resulting to an odd number.<br><strong>EVEN:</strong> The last digit from the total sum of the 20 numbered balls drawn resulting to an even number.<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Total SUM:</strong> 693<br><strong>Bet Result:</strong> Last digit from 693 is three(3). Three(3) is an odd number therefore “ODD” bet wins.<br><strong>Wager:</strong> USD 100 <strong>Payout:</strong> USD 100 x 1.95 = USD195.<br><br>* Number zero(0) is an even number and there are no draw/tie in this bet type.</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>3. Bet Type: ODDS, EVENS, TIE <a id=withdraw></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>ODD<td>Tie<td>EVENS<tr class=row1><td>odds<td>2.3<td>4.3<td>2.3</table><br><strong>ODDS:</strong> From the 20 numbered balls drawn, more than ten of these numbers are odd numbers.<br><strong>EVENS:</strong> From the 20 numbered balls drawn, more than ten of these numbers are even numbers.<br><strong>TIE:</strong> From the 20 numbered balls drawn, there are exactly ten odd numbers and ten even numbers.<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Bet Result:</strong> There are 11 odd numbers (01,05,11,13,27,33,47,59,61,67 & 79) and 9 even numbers (04,10,20,30,32,36,40,54 & 64). There are more odd numbers compared to even numbers, therefore “ODD NUMBERS” bet wins.<br><strong>Wager:</strong> USD 100 Payout: USD 100 x 2.3 = USD 230</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>4. Bet Type: UP, DOWN, TIE <a id=receive></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=300><tr class=rowHeader><td><td>UP<td>TIE<td>DOWN<tr class=row1><td>odds<td>2.3<td>4.3<td>2.3</table><p><strong>UP:</strong> From the 20 numbered balls drawn, more than ten of these numbers fall in the range of 01 - 40.<br><strong>DOWN:</strong> From the 20 numbered balls drawn, more than ten of these numbers fall in the range of 41 - 80.<br><strong>TIE:</strong> From the 20 numbered balls drawn, there are exactly ten numbers from the range 01 -40 and ten numbers from the range 41 – 80.<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Bet Result:</strong> There are 13 numbers (01,04,05,10,11,13,20,27,30,32,33,36 & 40) which ranges between 01 – 40 and 7 numbers (47,54,59,61,64,67 & 79) that ranges between 41 - 80. Therefore “UP” bet wins.<br><strong>Wager:</strong> USD 100<br><strong>Payout:</strong> USD 100 x 2.3 = USD 230</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>5. Bet Type: Five Ranges (GOLD, WOOD, WATER, FIRE & EARTH) <a id=receive></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=500><tr class=rowHeader><td><td>GOLD<td>WOOD<td>WATER<td>FIRE<td>EARTH<tr class=row1><td>odds<td>9.2<td>4.6<td>2.4<td>4.6<td>9.2</table><p><strong>GOLD:</strong> The sum of the 20 numbered balls drawn, ranges from 210-695.<br><strong>WOOD:</strong> The sum of the 20 numbered balls drawn, ranges from 696-763.<br><strong>WATER:</strong> The sum of the 20 numbered balls drawn, ranges from 764-855.<br><strong>FIRE:</strong> The sum of the 20 numbered balls drawn, ranges from 856-923.<br><strong>EARTH:</strong> The sum of the 20 numbered balls drawn, ranges from 924-1410<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79.<br><strong>Total sum:</strong> 693<br><strong>Bet Result:</strong> 693 falls between the range of 210 – 695. Therefore “GOLD” bet wins Wager: USD 100.<br><strong>Payout:</strong> USD 100 x 9.2 = USD 920</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>6. Bet Type: Pearl Ball <a id=receive></a></div><div class=faqAnswer><p>In Pearl Ball, player has the option to choose between 1 to 5 number selections from the range 01 to 80. System draws 20 numbers ranging from 01 – 80. The payout is based on the number of hits against the number of selections that the player has chosen. Sequence is not a factor for the payout.<br><br>The table below shows the payout rate:<table border=0 cellpadding=5 cellspacing=1 width=600><tr class=rowHeader><td><td>5 Selections<td>4 Selections<td>3 Selections<td>2 Selections<td>1 Selections<tr class=row1><td>Hit 5<td>251<td>non<td>non<td>non<td>non<tr class=row2><td>Hit 4<td>21<td>51<td>non<td>non<td>non<tr class=row1><td>Hit 3<td>3.0<td>6.0<td>20.3<td>non<td>non<tr class=row2><td>Hit 2<td>non<td>2.0<td>2.3<td>10.3<td>non<tr class=row1><td>Hits 1<td>non<td>non<td>non<td>non<td>3.3<tr class=row2><td>Hits 0<td>non<td>non<td>non<td>non<td>non</table><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Selections:</strong> 06, 20, 30 & 67<br><strong>Bet Result: </strong>4 selections, 3 Hits (20, 30 & 67) <strong>Wager: </strong>USD 100 <strong>Payout:</strong> USD 100 x 6.0 = USD 600</div><div class=backToTop><a href=#top>Back to Top</a></div><div class=faqQuestion>7. Bet Type: Big/Small & Odd/Even Parlay <a id=receive></a></div><br><div class=faqAnswer><table border=0 cellpadding=5 cellspacing=1 width=400><tr class=rowHeader><td><td>BIG/ODD<td>SMALL/ODD<td>BIG/EVEN<td>SMALL/EVEN<tr class=row1><td>odds<td>3.7<td>3.7<td>3.7<td>3.7</table><br><strong>BIG/ODD:</strong> The sum of the 20 numbered balls drawn is greater than 810 and the last digit from the total sum of the 20 numbered balls resulting to an odd number.<br><strong>SMALL/ODD:</strong> The sum of the 20 numbered balls drawn is smaller than 810 and the last digit from the total sum of the 20 numbered balls resulting to an odd number.<br><strong>BIG/EVEN: </strong>The sum of the 20 numbered balls drawn is greater than 810 and the last digit from the total sum of the 20 numbered balls resulting to an even number.<br><strong>SMALL/EVEN:</strong> The sum of the 20 numbered balls drawn is smaller than 810 and the last digit from the total sum of the 20 numbered balls resulting to an even number<br><br><strong>Example Draw result:</strong> 01, 04, 05, 10, 11, 13, 20, 27, 30, 32, 33, 36, 40, 47, 54, 59, 61, 64, 67 & 79<br><strong>Bet Result:</strong> The total sum is 693. 693 is smaller than 810 and the last digit 3 is an odd number. Therefore “SMALL/ODD” bet wins. <strong>Wager:</strong> USD 100 <strong>Payout:</strong> USD 100 x 3.7 = USD 370<br><p><strong>Parlay bets across markets</strong><br>Parlay refers to bets in a combination of a minimum of two selections placed as one wager. If all selections should win then the Parlay wins and will be paid at the odds as stated. If one (or more) selection should fail to win, then the Parlay loses. Parlay bets cannot be wagered on <strong>ExScore</strong> and <strong>Five Ranges</strong> bets. Parlay bets are deem void should a game result draw is cancelled due to any form of suspension, termination or cancellation of draw results.</div><div class=backToTop><a href=#top>Back to Top</a></div></table><td bgcolor=#FFF width=2%><tr><td bgcolor=#FFF colspan=3 height=20></table>';
		}
	};

	UserGuide.prototype.show = function () {
		this.zone.find('.dialog-wrapper').html(this.getContent());
		this.showContentOverlay();
	};

	UserGuide.prototype.hide = function (flag) {
		var that = this;

		this.hideContentOverlay();

		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.game-guide').removeClass('highlight');
				$('.keno > .header').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;
			}, 300);
		} else {
			$('.game-guide').removeClass('highlight');
		}
	};

	UserGuide.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	UserGuide.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	UserGuide.prototype.refresh = function () {
		this.zone.find('.dialog-wrapper').html(this.getContent());
	};

	UserGuide.prototype.bindEvents = function () {
		this.zone = $('.user-guide');
		this.bindOverlayEvents();
	};

	window.UserGuide = UserGuide;
}());

var mm = mm || {};
mm.config = {};

mm.getSerialNo = function() {
    return new Date().format("yyyyMMddhhmmss") + Math.random();
};

mm.isFunction = function(obj) {
    return typeof obj == 'function';
};

mm.getConfig = function(){
    $.ajax({
        url: '../config/service.json',
        async: false,
        success: function(data){
            mm.config['service'] = data.service;
            mm.config['debug'] = data.debug;
        },
        cache:false
    });
}

mm.consoleLog = function(data){
    if (mm.config.debug) {
        console.log(data);
    }
}

mm.Commands = {
    LOGIN: 1,
    ACCTINFO: 3,

    SERVERTIME: 6,
    DRAWINFO: 20,
    BETODDS: 21,
    GAMELIMIT: 22,

    RESULTLIST: 37,

    BETLIST: 123,
    BETHISTORY: 125,
    REPORTRESULT:124,

    PAPERQUESTION: 121,
    PAPERANSWER: 122,
    PLACEBET:40
};

mm.Service = function() {
    var _url = null;
    var _socket = null;
    var _queue = [];
    var _register = [];
    var _session = [];
    var that = this;

    mm.Service.it = this;

    var _connect = function() {
        if (!mm.config["service"]) mm.getConfig();
        _url = mm.config["service"];
        mm.consoleLog("connect:" + _url);
        _socket = new WebSocket(_url);
        _socket.onopen = _onOpen;
        _socket.onclose = _onClose;
        _socket.onerror = _onError;
        _socket.onmessage = _onMessage;
    };

    var _send = function(command, dat, callback, sender, isMask) {
        isMask = isMask == undefined ? true : isMask;

        if (_socket && _socket.readyState == 1) {
            var serialNo = mm.getSerialNo();
            _register[serialNo] = { callback: callback, sender: sender, isMask: isMask };

            dat = dat || {};
            dat.serialNo = serialNo;
            if (command != mm.Commands.LOGIN) {
                dat.sessionId = _session["sessionId"];
                dat.token = _session["token"];
            }

            var jsData = command + "." + JSON.stringify(dat);
            _socket.send(jsData);
            return mm.consoleLog("Send:::::" + jsData);
        }

        _queue.push({
            command: command,
            dat: dat,
            callback: callback,
            sender: sender
        });
        if (!_socket || _socket.readyState == _socket.CLOSED) _connect();
    };

    /******* event ********/
    var _onOpen = function() {
        mm.consoleLog("socket open");
        while (_queue.length > 0) {
            var data = _queue.shift();
            _send(data.command, data.dat, data.callback, data.sender);
        }
    };
    var _onClose = function() {
        mm.consoleLog("socket closed");
        that.onClose();
    };
    var _onError = function() {
        mm.consoleLog("socket err");
        that.onError();
    };
    var _onMessage = function(e) {
        mm.consoleLog("Receive:::::" + e.data);
        var service = mm.Service.it;
        var obj = _getObject(e.data);
        if (!obj) return;

        var command = obj.command,
            dat = obj.dat;
        if (command == mm.Commands.LOGIN) {

            _session["sessionId"] = dat.sessionId;
            _session["token"] = dat.token;
            window.session = dat.sessionId;
            window.token = dat.token;
        }

        if (command > 0) {
            var serialNo = dat.serialNo,
                fns = _register[serialNo];
            if (!fns) return;
            delete _register[serialNo];
            that.deal(dat, fns);

        } else {
            // push message
            var fns = _register[command];
            if (fns && fns.callback && mm.isFunction(fns.callback)) fns.callback.call(fns.sender, dat);
        }
    };

    this.bindPushEvent = function(command, callback, sender) {
        _register[command] = { callback: callback, sender: sender };
    };

    this.unBindPushEvent = function(command, callback, sender) {
        delete _register[command];
    };

    /***** util *****/
    var _getObject = function(str) {
        try {
            var i = str.indexOf("{");
            return { command: parseInt(str.substr(0, i)), dat: JSON.parse(str.substr(i)) };
        } catch (e) {
            mm.consoleLog("parse json err");
            return null;
        }
    };

    /*********** api ************/
    //101
    this.login = function(req, callback, sender) {
        _send(mm.Commands.LOGIN, req, callback, sender);
    };

    //3
    this.queryAcctInfo = function(req, callback, sender) {
        _send(mm.Commands.ACCTINFO, req, callback, sender);
    }

    //121
    this.paperQuestion = function(req, callback, sender) {
        _send(mm.Commands.PAPERQUESTION, req, callback, sender);
    };

    //122
    this.paperAnswer = function(req, callback, sender) {
        _send(mm.Commands.PAPERANSWER, req, callback, sender);
    }

    //37
    this.queryResultList =  function(req, callback, sender) {
        _send(mm.Commands.RESULTLIST, req, callback, sender);
    }

    //123
    this.betList = function(req, callback, sender) {
        _send(mm.Commands.BETLIST, req, callback, sender);
    }

    //125
    this.betHistory = function(req, callback, sender) {
        _send(mm.Commands.BETHISTORY, req, callback, sender);
    }

    //124
    this.reportResult = function(req,callback,sender) {
        _send(mm.Commands.REPORTRESULT, req, callback, sender);
    }

    //6
    this.queryServerTime = function(req, callback, sender) {
        _send(mm.Commands.SERVERTIME, req, callback, sender);
    };

    //20
    this.queryDrawInfo = function(req, callback, sender) {
        _send(mm.Commands.DRAWINFO, req, callback, sender);
    };

    //21
    this.queryBetOdds = function(req, callback, sender) {
        _send(mm.Commands.BETODDS, req, callback, sender);
    };

    //22
    this.queryGameLimit = function(req, callback, sender) {
        _send(mm.Commands.GAMELIMIT, req, callback, sender);
    };

    this.placeBet =  function(req, callback, sender) {
        _send(mm.Commands.PLACEBET, req, callback, sender);
    };

    //fix bug firefox < 48
    window.onbeforeunload = function() {
        mm.consoleLog('page refresh');
        _socket.close();
    }

};

mm.Service.prototype.deal = function(dat, fns) {
    delete dat.sessionId;
    delete dat.token;
    delete dat.serialNo;
    var callback = fns.callback,
        sender = fns.sender;
    if (mm.isFunction(callback)) callback.call(sender, dat);
};

mm.Service.prototype.onClose = function() {};
mm.Service.prototype.onError = function() {};

mm.Service.create = function() {
    mm.Service.it = mm.Service.it || new mm.Service();
    return mm.Service.it;
};

var service = mm.Service.create();

(function() {
    'use strict';

    var MILLI_SECONDS_PER_DAY = 24*60*60*1000;

    function Util () {}

    Util.prototype.initPlaceHolder = function(lang) {
        $('input, textarea').placeholder();
    };
    
    Util.prototype.initIE8 = function(lang) {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        
        if (msie > 0) {
            if (ua.substring(msie + 5, msie + 8) === '8.0') {
                $('body').addClass('ie8');
            }
        }
    };
    
    Util.prototype.getTimepickerLang = function() {
        var lang = localStorage.getItem('*lang');
        var dict = {
            'zh-cn': 'zh',
            'zh-tw': 'zh-TW',
            'en-us': 'en'
        }

        return dict[lang];
    };

    Util.prototype.getQueryString = function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    };

    Util.prototype.getDatatableLanguageConfig = function() {
        var temp = {
            'lengthMenu': i18n.t('show') + " _MENU_ " + i18n.t('records-per-page'),
            'emptyTable': i18n.t('no-data-available'),
            'paginate': {
                'next':     i18n.t('next-page'),
                'previous': i18n.t('previous-page')
            }
        };
        
        return temp;
    };

    Util.prototype.initI18next = function(lang, callback) {
        if (typeof lang == 'function') {
            callback = lang;
            lang = '';
        }

        var localePath  = '../data/i18n/';
        var browserLang = navigator.language || navigator.userLanguage;
        var storageLang = localStorage.getItem('*lang');
        var l           = lang || storageLang|| browserLang.toLowerCase();
        
        var options = {
            sendType: 'GET',
            lng: l,
            resGetPath: localePath + l + '.json',
            useLocalStorage: false,
            getAsync: false
        };
        
        if (i18n.lng() && i18n.lng() === lang) {
            return;
        }
        
        if(i18n.lng()) {
            i18n.setLng(lang, options);
        } else {
            i18n.init(options, function(){
                if (callback) {
                    callback();
                }
            });
        }
        
        if (localStorage) {
            localStorage.setItem('*lang', l);
        }

        $('body').i18n();
    };

    Util.prototype.createTable = function(options) {
        /*
        ** options = {
        **     titles: [],
        **     id: '',
        **     rownum: '',
        **     colnum: ''
        ** }
        */
        var i;

        var temp =  '<table id="' + options.id + '"cellspacing="0">' +

                        '<thead>' +
        
                            '<tr>';

        for (i = 0; i < options.titles.length; i++) {
            temp +=             '<td>' + options.titles[i] + '</td>';
        }

        temp +=             '</tr>' +

                        '</thead>' +

                        '<tbody>' +

                            this.createTableRow(options.rownum, options.colnum) +

                        '</tbody>' +
        
                    '</table>';

        return temp;
    };

    Util.prototype.createTableRow = function(rownum, colnum) {
        var i;
        var j;
        var temp = '';

        for (i = 0; i < rownum; i++) {
            if (i%2 === 0) {
                temp += '<tr class="odd">';
            } else {
                temp += '<tr class="even">';
            }
            
            for (j = 0; j < colnum; j++) {
                temp +=  '<td>--</td>';
            }
            
            temp += '</tr>';
        }

        return temp;
    };

    Util.prototype.fillTableRows = function(data, rows) {
        var i;
        var j;
        var tr;
        var cols;

        for (i = 0; i < rows.length; i++) {
            tr = rows[i];
            cols = $(tr).children('td');

            for (j = 0; j < cols.length; j++) {
                if (!data[i] || !data[i][j]) {
                    $(cols[j]).text('--');
                } else {
                    $(cols[j]).text(data[i][j]);
                }
            }
        }
    };

    Util.prototype.addTableRows = function(data, tbody) {
        var i;
        var j;
        var coldata;
        var temp = '';
        
        for (i = 0; i < data.length; i++) {
            coldata = data[i];
            
            temp += '<tr>';
            for (j = 0; j < coldata.length; j++) {
                temp += '<td>' +  coldata[j] + '</td>';
            }
            temp += '</tr>';
        }

        $(temp).appendTo(tbody);
    };

    Util.prototype.getIntervalDate = function (startDate, interval) {
        var temp = new Date(startDate.getTime() + MILLI_SECONDS_PER_DAY*interval);
        return temp;
    };

    Util.prototype.isMobile = {
        android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        blackberry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        ios7up: function() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS [7|8|9]_\d/i);
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        ipad: function () {
            var ios = this.ios();
            return !!(ios && ios[0] === 'iPad');
        },
        any: function() {
            return (this.android() || this.blackberry() || this.ios() || this.opera() || this.windows());
        }
    };

    Util.prototype.SetInterval = function (callback, n) {
        var testTimeout;
        var i         = 0;
        var count     = 0;
        var startTime = new Date().getTime();

        var fixed = function() {
            var offset = new Date().getTime() - (startTime + count * 1000);
            var next   = 1000 - offset;

            callback();
            
            if (next < 0) {
                next = 0;
            }

           var fixedTimeout = setTimeout(fixed, next);
            
            while (i++ >= n) {
                clearTimeout(testTimeout);
                clearTimeout(fixedTimeout);
            }
        };
        
        testTimeout = setTimeout(fixed, 1000);
    };

    /* ----- Date ----- */
    /**
     * Format a date as 'yyyy/MM/dd hh/mm'
     */
    Date.prototype.formatDateAndTime = function () {
        return this.formatDate() +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes()) +
               ':' + (this.getSeconds() < 10 ? '0' + this.getSeconds(): this.getSeconds());
    };

    /**
     * Format a date as 'MM-dd hh:mm'
     */
    Date.prototype.formatShortDateAndTime = function () {
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               '-' + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate()) +
               '\u00A0\u00A0' +
               (this.getHours() < 10 ? '0' + this.getHours(): this.getHours()) +
               ':' + (this.getMinutes() < 10 ? '0' + this.getMinutes(): this.getMinutes());
    };

    /**
     * Format a date as 'yyyy/MM/dd'
     */
    Date.prototype.formatDate = function (divider) {
        divider = divider || '/';
        return this.getFullYear() + divider + this.formatShortDate(divider);
    };

    /**
     * Format a date as 'MM/dd'
     */
    Date.prototype.formatShortDate = function (divider) {
        divider = divider || '/';
        return ((this.getMonth() + 1) < 10 ? '0' + (this.getMonth() + 1): (this.getMonth() + 1)) +
               divider + (this.getDate() < 10 ? '0' + this.getDate(): this.getDate());
    };

    Util.prototype.getDateByDateString = function(dataString){
        var arr = dataString.replace(/-| |:/g,',').split(',');
        var date = new Date(arr[0], parseInt(arr[1]) - 1, arr[2], arr[3], arr[4], arr[5]);
        return date;
    }

    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    }

    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    Util.prototype.addDotToNumber=function(num,dotLength){
        dotLength = dotLength || 2;
        num = num.toString().replace(/\$|\,/g,'');  
        if(isNaN(num))  num = "0.00";  
        var sign = (num == (num = Math.abs(num)));  
        num = Math.floor(num * Math.pow(10, dotLength) + 0.50000000001);  
        var cents = num % Math.pow(10, dotLength);  
        num = Math.floor(num / Math.pow(10, dotLength)).toString();
        if (dotLength == 2) {
            if (parseInt(cents) < 10)  cents = '0' + cents;
        }  
        if (dotLength == 3) {
            if (parseInt(cents) < 10) cents = '00' + cents;
            if (10 < parseInt(cents) && parseInt(cents) < 100) cents = '0' + cents;
        }
        if (dotLength == 4) {
            if (parseInt(cents) < 10) cents = '000' + cents;
            if (10 <= parseInt(cents) && parseInt(cents) < 100) cents = '00' + cents;
            if (100 <= parseInt(cents) && parseInt(cents) < 1000) cents = '0' + cents;
        }
        for (var i = 0; i < Math.floor((num.length - ( 1 + i )) / 3); i++)  
        num = num.substring(0,num.length - (4 * i + 3)) +','+ num.substring(num.length - (4 * i + 3)); 
        // if(isCents == false) return (((sign)? '' : '-') + num);
        return (((sign)? '' : '-') + num + '.' + cents); 
    };


    window.Util = new Util();
}());

AnalysisObj = {
    //珠仔
    getPB: function(data) {
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        return result;
    },

    //大小
    getBS: function(data) {
        var result = 0;
        var dataType;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        if (result < 810) {
            dataType = 'router_S';
        } else if (result == 810) {
            dataType = 'router_H';
        } else if (result > 810) {
            dataType = 'router_B';
        }
        return dataType;
    },

    //单双
    getOE: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        if (result % 2 == 0) {
            dataType = 'router_Double';
        } else if (result % 2 != 0) {
            dataType = 'router_Single';
        }
        return dataType;
    },

    //上下
    getUD: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            if (parseInt(data[i]) > 40)
                result += 1;
        }
        if (result == 10) {
            dataType = 'router_UDH';
        } else if (result > 10) {
            dataType = 'router_U';
        } else if (result < 10) {
            dataType = 'router_D';
        }
        return dataType;
    },

    //奇偶
    getOTE: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            if (parseInt(data[i]) % 2 == 0)
                result += 1;
        }
        if (result == 10) {
            dataType = 'router_OEH';
        } else if (result > 10) {
            dataType = 'router_Eevn'
        } else if (result < 10) {
            dataType = 'router_Odd'
        }
        return dataType;
    },

    //五行
    get5E: function(data) {
        var dataType;
        var result = 0;
        for (var i = 0; i < data.length; i++) {
            result += parseInt(data[i]);
        }
        if (210 <= result && result < 696) {
            dataType = 'router_Go';
        }
        if (696 <= result && result < 764) {
            dataType = 'router_Wo';
        }
        if (764 <= result && result < 855) {
            dataType = 'router_Wa';
        }
        if (855 <= result && result < 924) {
            dataType = 'router_Fi';
        }
        if (924 <= result && result <= 1410) {
            dataType = 'router_Ea';
        }
        return dataType;
    },

    //获取路子
    getRouterMap: function(originalData, anasysisType) {
        var data = [];

        originalData.sort(function(item1, item2) {
            return parseInt(item1.number) > parseInt(item2.number);
        });

        for (var i = 0; i < originalData.length; i++) {
            var tempArr = originalData[i].result.replace(/\[|\]/g, '').split(',');
            tempArr.drawNumber = originalData[i].number;
            data.push(tempArr);
        };

        var mapResult = this.getMapResult(data, anasysisType);
        var result = this.initUIResult();
        var nextIndex = {
            colume: 0,
            row: 0
        };

        if (anasysisType == 'PB')
            return this.getPBRouterMap(data, anasysisType);

        for (var i = 0; i < mapResult.length; i++) {
            if (i == 0) {
                result[0][0] = mapResult[i];
                nextIndex.row++;
            } else {
                if (mapResult[i].value != mapResult[i - 1].value) {
                    //另起一列 行为0
                    nextIndex.row = 0;
                    nextIndex.colume = this.calcColumeIndex(result);
                    result[nextIndex.colume][nextIndex.row] = mapResult[i];
                    nextIndex.row++;
                } else {
                    //连续相同
                    //1、先往下试试
                    //2、如果超过索引或指定各自被占用  则向右边移动
                    if (nextIndex.row == 5 || result[nextIndex.colume][nextIndex.row].value != '') {
                        nextIndex.row--;
                        nextIndex.colume++;
                        (nextIndex.colume > result.length - 1) && result.push([
                            { value: '', number: '' },
                            { value: '', number: '' },
                            { value: '', number: '' },
                            { value: '', number: '' },
                            { value: '', number: '' }
                        ]);
                        result[nextIndex.colume][nextIndex.row] = mapResult[i];
                        nextIndex.row++;
                    } else {
                        result[nextIndex.colume][nextIndex.row] = mapResult[i];
                        nextIndex.row++;
                    }
                }
            }
        }

        return result;
    },

    //珠仔的路子
    getPBRouterMap: function(data, anasysisType) {
        var mapResult = this.getMapResult(data, anasysisType);
        var result = this.initUIResult();
        var nextIndex = {
            colume: 0,
            row: 0
        };

        for (var i = 0; i < data.length; i++) {
            result[nextIndex.colume][nextIndex.row] = mapResult[i];
            nextIndex.row++;
            if (nextIndex.row == 5) {
                nextIndex.row = 0;
                nextIndex.colume++;
            }
        }

        return result;
    },

    getMapResult: function(data, anasysisType) {
        var result = [];
        var that = this;
        data.forEach(function(item) {
            result.push({
                value: that['get' + anasysisType](item),
                number: item.drawNumber
            });
        });
        return result;
    },

    initUIResult: function() {
        var result = [];
        for (var i = 0; i < 20; i++) {
            var item = [
                { value: '', number: '' },
                { value: '', number: '' },
                { value: '', number: '' },
                { value: '', number: '' },
                { value: '', number: '' }
            ];
            result.push(item);
        }
        return result;
    },

    calcColumeIndex: function(result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i][0].value == '') {
                return i;
            }
        }
        result.push([
            { value: '', number: '' },
            { value: '', number: '' },
            { value: '', number: '' },
            { value: '', number: '' },
            { value: '', number: '' }
        ]);
        return (i + 1);
    }
};

Global = {
	
	//赔率
	betOdds:[],

	//下注限制
	gameLimit: [],

	//混投下注限制
	parlayLimit: [],

	//投注篮
	betZoneData:[
	]
};
$(function() {
    (function init(callback) {

        var login = function() {
            var acctId = Util.getQueryString("acctId");
            var sessionId = Util.getQueryString("sid");
            var token = Util.getQueryString("token");
            acctId = (acctId == null || acctId == "") ? "test_player" : acctId;
            var req = {
                /* acctId: "TESTPLAYER17@TEST",*/
                acctId: sessionId == null ? acctId : null,
                passwd: sessionId == null ? "000000" : null,
                sessionId: sessionId,
                token: token
            };
            app.overlay.show();
            app.overlay.showImg();
            service.login(req, function(res) {
                if (res.code == 0) {
                    app.money = Util.addDotToNumber(res.acct.balance, 2);
                    app.header.find('.money').text(app.money);
                    app.header.find('.name').text(res.acct.acctId);

                    prepare();
                }
            });
        }

        var prepare = function() {
            window.req2resTimeArr = [];
            queryServerTime(6);
            queryGameSetting();
        }

        //获取服务器时间
        var queryServerTime = function(requstTimes) {
            var t1 = (new Date()).getTime(),
                t2 = 0;
            service.queryServerTime({}, function(res) {
                t2 = (new Date()).getTime();
                if (res.code == 0) {
                    if (requstTimes > 0) {
                        window.req2resTimeArr.push(t2 - t1);
                        requstTimes--;
                        queryServerTime(requstTimes);
                    } else {
                        window.req2resTimeArr.push(t2 - t1);
                        var serverTime = window.req2resTimeArr.reduce(function(prev, cur) {
                            return prev + cur;
                        }) / (2 * 6) + res.timeMillis;
                        window.jetLag = serverTime - t2; //服务器与本地时间差
                        queryMarket();
                    }
                }
            });
        }

        //获取市场信息
        var queryMarket = function() {
            service.queryDrawInfo({ gameCode: 'KN' }, function(res) {
                app.overlay.hideImg();
                if (res.code == 0) {
                    var data = res.list;
                    var market = '';
                    for (var i = 0; i < data.length; i++) {
                        market = data[i].market;
                        app[market + '_KenoSocket'] = new KenoSocket(market);
                        app[market + '_KenoSocket'].drawData = data[i];
                        if (!data[i].marketClosed && app[market + '_KenoSocket'].awaitUpdateDraw()) {
                            app[market + '_KenoSocket'].drawData = data[i].nextDraw; 
                        }
                        
                        app['plate_' + market].startCountdown();
                        if (!data[i].marketClosed) {
                            app['plate_' + market].zone.find('.draw-number').text('NO.' + data[i].drawNumber);
                            app[market + '_KenoSocket'].queryPlateResult();
                        }else{
                            app['plate_' + market].zone.find('.market-close-overlay').show();
                            app['plate_' + market].zone.find('.draw-status').addClass('ts');
                            app['plate_' + market].zone.find('.draw-status').find('span').attr('data-i18n','closed');
                            app['plate_' + market].zone.find('.draw-status').find('span').text(i18next.store.data[i18next.language].translation['closed']);
                        }
                    }
                } else {
                    app.noticeDialog.show({
                        dataI18nText: res.code,
                        buttonName: "sure",
                        autoHide: true,
                        timeout: 3000
                    });
                }

            })
        };

        //获取赔率 下注限制等信息
        var queryGameSetting = function() {
            service.queryBetOdds({ gameCode: 'KN' }, function(res) {
                if (res.code == 0) {
                    Global.betOdds = res.list[0].list;
                    service.queryGameLimit({ gameCode: 'KN' }, function(res2) {
                        if (res2.code == 0) {
                            Global.gameLimit = res2.list[0].list;
                            for(var i = 0; i < app.gameHtmlArr.length; i++){
                                app[app.gameHtmlArr[i].id].zone.find('.qw-plate').html(app[app.gameHtmlArr[i].id].createQwPlate());
                                app.initI18next(app[app.gameHtmlArr[i].id].zone);
                            }

                            //混投下注限制
                            service.queryGameLimit({ gameCode: 'PL'}, function(res3){
                                if (res3.code == 0) {
                                    Global.parlayLimit = res3.list[0].list;
                                }
                            });
                        }
                    });
                }
            });
        };

        login();

    })();

    function KenoSocket(market) {
        this.gameCode = 'KN';
        this.market = market;
    }

    KenoSocket.prototype.getMarket = function() {
        var req = {
            gameCode: 'KN',
            market: this.market
        };
        var that = this;
        service.queryDrawInfo(req, function(res) {
            if (res.code == 0) {
                if (res.list[0].nextDraw) {
                    app['plate_' + that.market].zone.find('.draw-number').text('NO.' + res.list[0].drawNumber);
                    that.drawData.nextDraw = res.list[0].nextDraw;
                }else{
                    that.drawData.nextDraw = null;
                }
            } else {
                that.drawData.nextDraw = null;
                app.noticeDialog.show({
                    dataI18nText: res.code,
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000
                });
            }
        });
    }

    KenoSocket.prototype.updateDraw = function() {
        if (this.drawData.nextDraw) {
            this.drawData.beginTime = this.drawData.nextDraw.beginTime;
            this.drawData.endTime = this.drawData.nextDraw.endTime;
            this.drawData.closeTime = this.drawData.nextDraw.closeTime;
            this.drawData.drawNumber = this.drawData.nextDraw.drawNumber;
            this.drawData.drawId = this.drawData.nextDraw.drawId;
            this.drawData.marketClosed = this.drawData.nextDraw.marketClosed; 
        }
    }

    KenoSocket.prototype.awaitUpdateDraw = function () {
        var that = this;
        var closeTime = Util.getDateByDateString(this.drawData.closeTime).getTime();
        var endTime = Util.getDateByDateString(this.drawData.endTime).getTime();
        var serverTime = new Date().getTime() + window.jetLag;
        var now = new Date();
        now.setTime(closeTime - serverTime - 480 * 60);
        var timeleft = now.format('hh:mm:ss');
        var flag = ((closeTime < serverTime && serverTime < endTime) || timeleft == '00:00:00') ? true : false;

        if (flag) {
            that.intervalId = setInterval(function(){
                serverTime = new Date().getTime() + window.jetLag;
                if (serverTime > endTime + 1000 * 10) { //endtime 10秒后再取
                    that.getMarket();
                    clearInterval(that.intervalId);
                }
            }, 1000);
        }
        return flag;
    }

    //当天开奖结果
    KenoSocket.prototype.queryPlateResult = function() {
        var req = {
            gameCode: 'KN',
            market: this.market
        };
        service.queryResultList(req, function(res){
            if (res.code == 0) {
                var currentPlate = app['plate_' + req.market];
                var result = res.list;
                currentPlate.data = result;
                //1、绑定路子
                currentPlate.setValue('BS', 0);
                currentPlate.setValue('OE', 1);
                currentPlate.setValue('OTE', 2);
                currentPlate.setValue('UD', 3);
                currentPlate.setValue('PB', 4);
                currentPlate.setValue('5E', 5);
                //2、绑定详情
                currentPlate.setDetailChunk();
            }else{
                app.noticeDialog.show({
                    dataI18nText: res.code,
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000
                });
            }
        });
    };


    window.KenoSocket = KenoSocket;
});

var PlaceBet = {
    kenoPlaceBet:function(betAmount){
        if(betAmount == 0){
            return false;
        }
        var data = Global.betZoneData;
        if(data.length == 1){
            var req = {
                "betType": data[0].betType,
                "market": data[0].market,
                "gameCode": data[0].gameCode,
                "items": [{
                    betItem:data[0].betType == 'Ball'?data[0].betItem[0]:data[0].betItem,
                    drawType:data[0].betType
                }],
                "drawId": app[data[0].market +'_KenoSocket'].drawData.drawId,
                "betAmount": betAmount,
                "odds":data[0].odds
            }
        }else{
            var req = {
                "parlayItems":[],
                "gameCode": 'PL',
                "betAmount": betAmount,
                "odds":1
            };
            var odds = 1;
            for(var i = 0; i < data.length; i++){
                req.parlayItems.push({
                    "betType": data[i].betType,
                    "market": data[i].market,
                    "gameCode":data[i].gameCode,
                    "betItem": data[i].betItem,
                    "drawId": app[data[i].market +'_KenoSocket'].drawData.drawId,
                    "drawNumber": app[data[i].market +'_KenoSocket'].drawData.drawNumber,
                    "odds": data[i].oddsParlay
                });
                req.odds =  req.odds * data[i].oddsParlay
            }
            req.odds = Math.floor(req.odds*10)/10;
        }
        var okCallback = function(){
            app.betDialog.cleanCoverDom();
            app.betDialog.sure.enabled();
            app.betDialog.cleanValue();
        };
        service.placeBet(req,function(res){
            if(res.code == 0){
                app.betDialog.hide();
                app.setDot('history',1);
                app.setMoney(res.balance);
                Global.betZoneData = [];
                app.betDialog.removeSelected();
                app.noticeDialog.show({
                    dataI18nText: 'betSuccess',
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000,
                    okCallback:okCallback
                });
            }else{
                app.noticeDialog.show({
                    dataI18nText: res.code,
                    buttonName: "sure",
                    autoHide: true,
                    timeout: 3000,
                    okCallback:function(){
                        app.betDialog.sure.enabled();
                    }
                });
            }
        })
    }
};
$(function() {

    // Kickout = -1;
    // AcctInfoUpdated = -3;
    // OddsChanged = -5;
    // PushNotice = -7;
    // MarketOpen = -9;
    // MarketClosed = -10;
    // DrawClosed = -11;
    // DrawAward = -12;
    //当市场开启了 才处理它的推送消息

    PushMessage = {
        marketOpen: function() {
            service.bindPushEvent(-9, function(res) {
                var currentKenoSocket = app[res.market + '_KenoSocket'];
                var currentPlate = app['plate_' + res.market];
                currentKenoSocket.drawData = res.currentDraw;
                if (currentKenoSocket.awaitUpdateDraw()) {
                    currentKenoSocket.updateDraw();
                }
                currentPlate.zone.find('.market-close-overlay').hide();
                currentPlate.zone.find('.draw-status').removeClass('ts');
                currentPlate.zone.find('.draw-status').find('span').attr('data-i18n','startBetting');
                currentPlate.zone.find('.draw-status').find('span').text(i18next.store.data[i18next.language].translation['startBetting']);
            });
            return this;
        },

        marketClose: function() {
            service.bindPushEvent(-10, function(res) {
                var currentKenoSocket = app[res.market + '_KenoSocket'];
                var currentPlate = app['plate_' + res.market];
                currentKenoSocket.drawData.marketClosed = true;
                currentPlate.zone.find('.market-close-overlay').show();
                currentPlate.zone.find('.draw-status').addClass('ts');
                currentPlate.zone.find('.draw-status').find('span').attr('data-i18n','closed');
                currentPlate.zone.find('.draw-status').find('span').text(i18next.store.data[i18next.language].translation['closed']);
                currentPlate.zone.find('.count-down').text('');
                currentPlate.zone.find('.filler').css('width','0%');
            });
            return this;
        },

        drawAward: function() {
            service.bindPushEvent(-12, function(res) {
                var awardData = {
                    number: res.drawNumber,
                    result: res.result
                };
                var currentPlate = app['plate_' + res.market];
                currentPlate.data.push(awardData);

                //1、绑定路子
                currentPlate.setValue('BS', 0);
                currentPlate.setValue('OE', 1);
                currentPlate.setValue('OTE', 2);
                currentPlate.setValue('UD', 3);
                currentPlate.setValue('PB', 4);
                currentPlate.setValue('5E', 5);
                //2、绑定详情
                currentPlate.setDetailChunk();
                //3、开奖动画
                currentPlate.drawingAnimation.show(res.result.replace(/\[|\]/g, '').split(','));
            });
            return this;
        },

        acctInfoUpdate: function() {
            service.bindPushEvent(-3, function() {
                servive.queryAcctInfo({}, function(res) {
                    if (res.code == 0) {
                        app.money = Util.addDotToNumber(res.acct.balance, 2);
                        app.header.find('.money').text(app.money);
                    }
                });
            });
            return this;
        }
    };

    PushMessage
        .marketOpen()
        .marketClose()
        .drawAward()
        .acctInfoUpdate();

    //每隔5分钟取一次balance       
    setTimeout(function() {
        setInterval(function() {
            service.queryAcctInfo({}, function(res) {
                if (res.code == 0) {
                    app.money = Util.addDotToNumber(res.acct.balance, 2);
                    app.header.find('.money').text(app.money);
                }
            });
        }, 1000 * 60 * 5);
    }, 1000 * 60 * 5);
});

/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.money  = '192,256,456';
		this.id     = 'keno-page';
		this.zone   = $('.keno');
		this.header = this.zone.children('.header');
		this.main   = this.zone.children('.main');
		this.languageType = Util.getQueryString("language")  || 'zh';
		this.dic = {};
		this.gameHtmlArr = [];
		this.betDialogDeleteLock = false;

		this.createOverlay();
		this.createPlate();
		this.init();
		this.bindEvents();
		this.showNoticeDialog();
		this.createBetDialog();
		this.initI18next();


        if (Util.isMobile.any() && window.FastClick) {
            FastClick.attach(document.body);
        }
	}

	app.prototype.init = function () {
		var el = $('.main')[0];
		var sortable = new Sortable(el, {
			delay: 0,
			animation: 150,
		    ghostClass: "sortable-ghost",
		    chosenClass: "sortable-chosen",
		    draggable: ".plate",
		    handle: ".landmark"
		});
	};

	app.prototype.createPlate = function () {
		var i;
		var temp;
		var arr = [
			{
				id: 'plate_BJ',
				location: 'beijing',
				market:'BJ'
			},
			{
				id: 'plate_CA',
				location: 'canada',
				market:'CA'
			},
			{
				id: 'plate_AU',
				location: 'australia',
				market:'AU'
			},
			{
				id: 'plate_SK',
				location: 'slovakia',
				market:'SK'
			},
			{
				id: 'plate_MT',
				location: 'malta',
				market:'MT'
			},
			{
				id: 'plate_WCA',
				location: 'west-canada',
				market:'WCA'
			}
		];
		this.gameHtmlArr = arr;
		for(var i = 0; i < arr.length; i++){
			this[arr[i].id] = new Plate(arr[i]);
			temp = this[arr[i].id].getDom();
			this.main.append(temp);
			this[arr[i].id].bindEvents();
		}

		this.main.append('<div class="clear"></div>');
	};

	app.prototype.initI18next = function (elem) {
		var that = this;
		if (!this.i18n) {
			this.i18n = i18next.use(i18nextXHRBackend).init({
				"lngs": ["zh","en"],
				"fallbackLng": ["zh","en"],
				"backend": {
					"loadPath": "../locales/{{lng}}/{{ns}}.json"
				}
		    }, function (err, t) {
		    	that.i18n.changeLanguage(that.languageType);
				jqueryI18next.init(that.i18n, $);
				elem = elem || $('body');
				elem.localize();
			});
		}else{
		    that.i18n.changeLanguage(that.languageType);
			jqueryI18next.init(that.i18n, $);
			elem = elem || $('body');
			elem.localize();
		}
	};

	app.prototype.showComfirmDialog = function () {
		this.confirmDialog = new ConfirmDialog({text: '你确定要修改吗？'});
		$('body').append(this.confirmDialog.getDom());
		this.confirmDialog.bindEvents();
		this.confirmDialog.show();
	};

	app.prototype.showNoticeDialog = function () {
		this.noticeDialog = new NoticeDialog({id: 'app-notice-dialog'});
		$('body').append(this.noticeDialog.getDom());
		this.noticeDialog.bindEvents();

        var width  = parseInt(screen.width);
        var height = parseInt(screen.height);
        var max    = Math.max(width, height);
        var min    = Math.min(width, height);

        if (Util.isMobile.any() && max >= 1024 && min < 1024) {
			this.noticeDialog.show({
				text: '检测到您的设备尺寸较小， 请横屏显示!',
				buttonName: '确定'
			});
        }
	};

	app.prototype.createBetDialog = function () {
		this.betDialog = new BetDialog({id: 'app-bet-dialog'});
		$('body').append(this.betDialog.getDom());
		this.betDialog.bindEvents();
	};
	app.prototype.createOverlay = function () {
		var that = this;
		this.overlay = new IMOverlay({position: $('.bet')});
	};
	//set dot
	app.prototype.setDot = function(type,num){
		var dom = this.zone.find('.header');
		//开奖结果
			if(type == 'results'){
				dom.find('.draw-results').find('.dot').show();
				var dot = dom.find('.draw-results').find('.dot span').text() || 0;
				dom.find('.draw-results').find('.dot span').text(parseInt(num) + parseInt(dot))
			}else{
				dom.find('.bet-record').find('.dot').show();
				var dot = dom.find('.bet-record').find('.dot span').text() || 0;
				dom.find('.bet-record').find('.dot span').text(parseInt(dot) + parseInt(num))
			}
	};
	app.prototype.setMoney = function(money){
		this.zone.find('.money').text(Util.addDotToNumber(money),2);
	}
	app.prototype.anyoneHasTimeout = function () {
		return 	this.userFeedback && this.userFeedback.hasTimeout() ||
				this.userGuide && this.userGuide.hasTimeout() ||
				this.bettingRecords && this.bettingRecords.hasTimeout() ||
				this.drawResults && this.drawResults.hasTimeout();
	};

	app.prototype.anyoneOpen = function () {
		if (this.userFeedback && this.userFeedback.isOpen()) {
			return this.userFeedback;
		}

		if (this.userGuide && this.userGuide.isOpen()) {
			return this.userGuide;
		}

		if (this.bettingRecords && this.bettingRecords.isOpen()) {
			return this.bettingRecords;
		}

		if (this.drawResults && this.drawResults.isOpen()) {
			return this.drawResults;
		}
	};

	app.prototype.bindEvents = function () {
		var header    = this.header;
		var logoarr   = header.find('.logo-arr');
		var biglogo   = header.find('.big-logo');
		var that      = this;
		var obj;
		var tar;
		var data;
		var dict = {
			'bettingRecords'  : {son: 'bettingRecords', father: BettingRecords},
			'userFeedback'    : {son: 'userFeedback',   father: UserFeedback},
			'userGuide'       : {son: 'userGuide',      father: UserGuide},
			'drawResults'     : {son: 'drawResults',    father: DrawResults}
		};

		header.find('.top-item').click(function () {
			if (that.anyoneHasTimeout()) {
				return;
			}

			obj  = that.anyoneOpen();
			tar  = $(this).attr('data-value');
			data = dict[tar];

			/* 关闭已经打开的
			*/
			if (obj) {                                     //有人打开了
				if (!(obj instanceof data.father)) {       //是别人打开了
					obj.hide(true);
				} else {                                   //是自己打开了, 关上就返回
					obj.hide();
					return;
				}
			}

			/* 打开被点击
			*/
			if (!that[data.son]) {                //如果这个对象还没有new过
				that[data.son] = new (data.father)({
					id: data.son
				});
				$('.keno').append(that[data.son].getDom());
				that[data.son].bindEvents();
			}
			if(data.son != 'userFeedback' && data.son != 'userGuide'){
				that[data.son].getValue();
			}
			$(this).children('.dot').hide();
			$(this).children('.dot').children().text('0');
			that[data.son].show();
			$(this).addClass('highlight');
			$('.keno > .header').addClass('higher-z-index');
		});

		header.find('.secret').click(function () {
			var temp;
			var val;
			if ($(this).children('a').attr('data-i18n') === 'hide balance') {
				temp = 'show balance';
				header.find('.money').text('-----');
				if(that.languageType === 'en'){
					val = 'show'
				}else{
					val = '显示'
				}
			} else {
				temp = 'hide balance';
				header.find('.money').text(that.money);
				if(that.languageType === 'en'){
					val = 'hide'
				}else{
					val = '隐藏'
				}
			}

			$(this).children('a').attr('data-i18n', temp);
			$(this).children('a').text(val);
		});

		header.find('.lang').click(function () {
			var i18n;
			var lang = $(this).attr('data-value');

			if (lang === 'en') {
				that.languageType = 'en';
				$('.plate').addClass('english');
			} else {
				that.languageType = 'zh';
				$('.plate').removeClass('english');
			}

			that.initI18next();
			if (that.userGuide) {
				if (that.userGuide.isOpen())
					that.userGuide.refresh();
			}
		});

		if (Util.isMobile.any()) {
			logoarr.click(function () {
				biglogo.toggle();
			});
		} else {
			logoarr.mouseover(function () {
				biglogo.show();
			}).mouseout(function () {
				biglogo.hide();
			});
		}
	};

	window.app = new app();
})();