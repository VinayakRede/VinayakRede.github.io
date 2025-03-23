/*! modernizr 3.6.0 (Custom Build) | MIT */
!function(A,e,t){function n(A,e){return typeof A===e}function a(){var A,e,t,a,r,o,w;for(var i in Q)if(Q.hasOwnProperty(i)){if(A=[],e=Q[i],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(a=n(e.fn,"function")?e.fn():e.fn,r=0;r<A.length;r++)o=A[r],w=o.split("."),1===w.length?Modernizr[w[0]]=a:(!Modernizr[w[0]]||Modernizr[w[0]]instanceof Boolean||(Modernizr[w[0]]=new Boolean(Modernizr[w[0]])),Modernizr[w[0]][w[1]]=a),v.push((a?"":"no-")+w.join("-"))}}function r(A){var e=h.className,t=Modernizr._config.classPrefix||"";if(V&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),V?h.className.baseVal=e:h.className=e)}function o(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):V?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function w(A,e){return!!~(""+A).indexOf(e)}function i(){var A=e.body;return A||(A=o(V?"svg":"body"),A.fake=!0),A}function D(A,t,n,a){var r,w,D,s,d="modernizr",P=o("div"),l=i();if(parseInt(n,10))for(;n--;)D=o("div"),D.id=a?a[n]:d+(n+1),P.appendChild(D);return r=o("style"),r.type="text/css",r.id="s"+d,(l.fake?l:P).appendChild(r),l.appendChild(P),r.styleSheet?r.styleSheet.cssText=A:r.appendChild(e.createTextNode(A)),P.id=d,l.fake&&(l.style.background="",l.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(l)),w=t(P,A),l.fake?(l.parentNode.removeChild(l),h.style.overflow=s,h.offsetHeight):P.parentNode.removeChild(P),!!w}function s(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function d(A,e){if("object"==typeof A)for(var t in A)O(A,t)&&d(t,A[t]);else{A=A.toLowerCase();var n=A.split("."),a=Modernizr[n[0]];if(2==n.length&&(a=a[n[1]]),"undefined"!=typeof a)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),r([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function P(A,e){return function(){return A.apply(e,arguments)}}function l(A,e,t){var a;for(var r in A)if(A[r]in e)return t===!1?A[r]:(a=e[A[r]],n(a,"function")?P(a,t||e):a);return!1}function u(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(e,t,n){var a;if("getComputedStyle"in A){a=getComputedStyle.call(A,e,t);var r=A.console;if(null!==a)n&&(a=a.getPropertyValue(n));else if(r){var o=r.error?"error":"log";r[o].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else a=!t&&e.currentStyle&&e.currentStyle[n];return a}function f(e,n){var a=e.length;if("CSS"in A&&"supports"in A.CSS){for(;a--;)if(A.CSS.supports(u(e[a]),n))return!0;return!1}if("CSSSupportsRule"in A){for(var r=[];a--;)r.push("("+u(e[a])+":"+n+")");return r=r.join(" or "),D("@supports ("+r+") { #modernizr { position: absolute; } }",function(A){return"absolute"==c(A,null,"position")})}return t}function g(A,e,a,r){function i(){d&&(delete N.style,delete N.modElem)}if(r=n(r,"undefined")?!1:r,!n(a,"undefined")){var D=f(A,a);if(!n(D,"undefined"))return D}for(var d,P,l,u,c,g=["modernizr","tspan","samp"];!N.style&&g.length;)d=!0,N.modElem=o(g.shift()),N.style=N.modElem.style;for(l=A.length,P=0;l>P;P++)if(u=A[P],c=N.style[u],w(u,"-")&&(u=s(u)),N.style[u]!==t){if(r||n(a,"undefined"))return i(),"pfx"==e?u:!0;try{N.style[u]=a}catch(p){}if(N.style[u]!=c)return i(),"pfx"==e?u:!0}return i(),!1}function p(A,e,t,a,r){var o=A.charAt(0).toUpperCase()+A.slice(1),w=(A+" "+J.join(o+" ")+o).split(" ");return n(e,"string")||n(e,"undefined")?g(w,e,a,r):(w=(A+" "+S.join(o+" ")+o).split(" "),l(w,e,t))}function B(A,e,n){return p(A,t,t,e,n)}function E(A,e){var t=A.deleteDatabase(e);t.onsuccess=function(){d("indexeddb.deletedatabase",!0)},t.onerror=function(){d("indexeddb.deletedatabase",!1)}}var v=[],Q=[],m={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){Q.push({name:A,fn:e,options:t})},addAsyncTest:function(A){Q.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=m,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in A),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol?A.history&&"pushState"in A.history:!1}),Modernizr.addTest("postmessage","postMessage"in A),Modernizr.addTest("svg",!!e.createElementNS&&!!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var C=!1;try{C="WebSocket"in A&&2===A.WebSocket.CLOSING}catch(I){}Modernizr.addTest("websockets",C),Modernizr.addTest("passiveeventlisteners",function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});A.addEventListener("test",null,t)}catch(n){}return e}),Modernizr.addTest("localstorage",function(){var A="modernizr";try{return localStorage.setItem(A,A),localStorage.removeItem(A),!0}catch(e){return!1}}),Modernizr.addTest("sessionstorage",function(){var A="modernizr";try{return sessionStorage.setItem(A,A),sessionStorage.removeItem(A),!0}catch(e){return!1}}),Modernizr.addTest("webworkers","Worker"in A);var y=m._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];m._prefixes=y;var h=e.documentElement,V="svg"===h.nodeName.toLowerCase(),q="Moz O ms Webkit",S=m._config.usePrefixes?q.toLowerCase().split(" "):[];m._domPrefixes=S;var b=function(){function A(A,e){var a;return A?(e&&"string"!=typeof e||(e=o(e||"div")),A="on"+A,a=A in e,!a&&n&&(e.setAttribute||(e=o("div")),e.setAttribute(A,""),a="function"==typeof e[A],e[A]!==t&&(e[A]=t),e.removeAttribute(A)),a):!1}var n=!("onblur"in e.documentElement);return A}();m.hasEvent=b,Modernizr.addTest("hashchange",function(){return b("hashchange",A)===!1?!1:e.documentMode===t||e.documentMode>7}),Modernizr.addTest("audio",function(){var A=o("audio"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),e.mp3=A.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),e.opus=A.canPlayType('audio/ogg; codecs="opus"')||A.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),e.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),e.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return e}),Modernizr.addTest("canvas",function(){var A=o("canvas");return!(!A.getContext||!A.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof o("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var A=o("video"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e}),Modernizr.addTest("webgl",function(){var e=o("canvas"),t="probablySupportsContext"in e?"probablySupportsContext":"supportsContext";return t in e?e[t]("webgl")||e[t]("experimental-webgl"):"WebGLRenderingContext"in A}),Modernizr.addTest("cssgradients",function(){for(var A,e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",a=0,r=y.length-1;r>a;a++)A=0===a?"to ":"",n+=e+y[a]+"linear-gradient("+A+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=e+"-webkit-"+t);var w=o("a"),i=w.style;return i.cssText=n,(""+i.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var A=o("a").style;return A.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(A.background)}),Modernizr.addTest("opacity",function(){var A=o("a").style;return A.cssText=y.join("opacity:.55;"),/^0.55$/.test(A.opacity)}),Modernizr.addTest("rgba",function(){var A=o("a").style;return A.cssText="background-color:rgba(150,255,150,.5)",(""+A.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var A=o("input");return A.type="file",!A.disabled}),Modernizr.addTest("formattribute",function(){var A,t=o("form"),n=o("input"),a=o("div"),r="formtest"+(new Date).getTime(),w=!1;t.id=r;try{n.setAttribute("form",r)}catch(i){e.createAttribute&&(A=e.createAttribute("form"),A.nodeValue=r,n.setAttributeNode(A))}return a.appendChild(t),a.appendChild(n),h.appendChild(a),w=t.elements&&1===t.elements.length&&n.form==t,a.parentNode.removeChild(a),w}),Modernizr.addTest("inputformenctype",!!("formEnctype"in o("input")),{aliases:["input-formenctype"]}),Modernizr.addTest("inputformtarget",!!("formtarget"in o("input")),{aliases:["input-formtarget"]}),Modernizr.addTest("inlinesvg",function(){var A=o("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)});var M=o("input"),R="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),U={};Modernizr.input=function(e){for(var t=0,n=e.length;n>t;t++)U[e[t]]=!!(e[t]in M);return U.list&&(U.list=!(!o("datalist")||!A.HTMLDataListElement)),U}(R);var x="search tel url email datetime date month week time datetime-local number range color".split(" "),Z={};Modernizr.inputtypes=function(A){for(var n,a,r,o=A.length,w="1)",i=0;o>i;i++)M.setAttribute("type",n=A[i]),r="text"!==M.type&&"style"in M,r&&(M.value=w,M.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&M.style.WebkitAppearance!==t?(h.appendChild(M),a=e.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(M,null).WebkitAppearance&&0!==M.offsetHeight,h.removeChild(M)):/^(search|tel)$/.test(n)||(r=/^(url|email)$/.test(n)?M.checkValidity&&M.checkValidity()===!1:M.value!=w)),Z[A[i]]=!!r;return Z}(x),Modernizr.addTest("hsla",function(){var A=o("a").style;return A.cssText="background-color:hsla(120,40%,100%,.5)",w(A.backgroundColor,"rgba")||w(A.backgroundColor,"hsla")});var T="CSS"in A&&"supports"in A.CSS,W="supportsCSS"in A;Modernizr.addTest("supports",T||W);var k={}.toString;Modernizr.addTest("svgclippaths",function(){return!!e.createElementNS&&/SVGClipPath/.test(k.call(e.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!e.createElementNS&&/SVGAnimate/.test(k.call(e.createElementNS("http://www.w3.org/2000/svg","animate")))});var K=function(){var e=A.matchMedia||A.msMatchMedia;return e?function(A){var t=e(A);return t&&t.matches||!1}:function(e){var t=!1;return D("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(A.getComputedStyle?A.getComputedStyle(e,null):e.currentStyle).position}),t}}();m.mq=K;var z=m.testStyles=D;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in A||A.DocumentTouch&&e instanceof DocumentTouch)t=!0;else{var n=["@media (",y.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(n,function(A){t=9===A.offsetTop})}return t});var F=function(){var A=navigator.userAgent,e=A.match(/w(eb)?osbrowser/gi),t=A.match(/windows phone/gi)&&A.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return e||t}();F?Modernizr.addTest("fontface",!1):z('@font-face {font-family:"font";src:url("https://")}',function(A,t){var n=e.getElementById("smodernizr"),a=n.sheet||n.styleSheet,r=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",o=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",o)}),z('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(A){Modernizr.addTest("generatedcontent",A.offsetHeight>=6)});var J=m._config.usePrefixes?q.split(" "):[];m._cssomPrefixes=J;var G=function(e){var n,a=y.length,r=A.CSSRule;if("undefined"==typeof r)return t;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in r)return"@"+e;for(var o=0;a>o;o++){var w=y[o],i=w.toUpperCase()+"_"+n;if(i in r)return"@-"+w.toLowerCase()+"-"+e}return!1};m.atRule=G;var O;!function(){var A={}.hasOwnProperty;O=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),m._l={},m.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},m._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){m.addTest=d}),Modernizr.addTest("hovermq",K("(hover)")),Modernizr.addTest("pointermq",K("(pointer:coarse),(pointer:fine),(pointer:none)")),Modernizr.addAsyncTest(function(){function A(n){clearTimeout(e);var r=n!==t&&"loadeddata"===n.type?!0:!1;a.removeEventListener("loadeddata",A,!1),d("audiopreload",r),a.parentNode&&a.parentNode.removeChild(a)}var e,n=300,a=o("audio"),r=a.style;if(!(Modernizr.audio&&"preload"in a))return void d("audiopreload",!1);r.position="absolute",r.height=0,r.width=0;try{if(Modernizr.audio.mp3)a.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)a.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)a.src="data:audio/ogg;base64,T2dnUwACAAAAAAAAAAD/QwAAAAAAAM2LVKsBHgF2b3JiaXMAAAAAAUSsAAAAAAAAgLsAAAAAAAC4AU9nZ1MAAAAAAAAAAAAA/0MAAAEAAADmvOe6Dy3/////////////////MgN2b3JiaXMdAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAwNzA2MjIAAAAAAQV2b3JiaXMfQkNWAQAAAQAYY1QpRplS0kqJGXOUMUaZYpJKiaWEFkJInXMUU6k515xrrLm1IIQQGlNQKQWZUo5SaRljkCkFmVIQS0kldBI6J51jEFtJwdaYa4tBthyEDZpSTCnElFKKQggZU4wpxZRSSkIHJXQOOuYcU45KKEG4nHOrtZaWY4updJJK5yRkTEJIKYWSSgelU05CSDWW1lIpHXNSUmpB6CCEEEK2IIQNgtCQVQAAAQDAQBAasgoAUAAAEIqhGIoChIasAgAyAAAEoCiO4iiOIzmSY0kWEBqyCgAAAgAQAADAcBRJkRTJsSRL0ixL00RRVX3VNlVV9nVd13Vd13UgNGQVAAABAEBIp5mlGiDCDGQYCA1ZBQAgAAAARijCEANCQ1YBAAABAABiKDmIJrTmfHOOg2Y5aCrF5nRwItXmSW4q5uacc845J5tzxjjnnHOKcmYxaCa05pxzEoNmKWgmtOacc57E5kFrqrTmnHPGOaeDcUYY55xzmrTmQWo21uaccxa0pjlqLsXmnHMi5eZJbS7V5pxzzjnnnHPOOeecc6oXp3NwTjjnnHOi9uZabkIX55xzPhmne3NCOOecc84555xzzjnnnHOC0JBVAAAQAABBGDaGcacgSJ+jgRhFiGnIpAfdo8MkaAxyCqlHo6ORUuoglFTGSSmdIDRkFQAACAAAIYQUUkghhRRSSCGFFFKIIYYYYsgpp5yCCiqppKKKMsoss8wyyyyzzDLrsLPOOuwwxBBDDK20EktNtdVYY62555xrDtJaaa211koppZRSSikIDVkFAIAAABAIGWSQQUYhhRRSiCGmnHLKKaigAkJDVgEAgAAAAgAAADzJc0RHdERHdERHdERHdETHczxHlERJlERJtEzL1ExPFVXVlV1b1mXd9m1hF3bd93Xf93Xj14VhWZZlWZZlWZZlWZZlWZZlWYLQkFUAAAgAAIAQQgghhRRSSCGlGGPMMeegk1BCIDRkFQAACAAgAAAAwFEcxXEkR3IkyZIsSZM0S7M8zdM8TfREURRN01RFV3RF3bRF2ZRN13RN2XRVWbVdWbZt2dZtX5Zt3/d93/d93/d93/d93/d1HQgNWQUASAAA6EiOpEiKpEiO4ziSJAGhIasAABkAAAEAKIqjOI7jSJIkSZakSZ7lWaJmaqZneqqoAqEhqwAAQAAAAQAAAAAAKJriKabiKaLiOaIjSqJlWqKmaq4om7Lruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7rui4QGrIKAJAAANCRHMmRHEmRFEmRHMkBQkNWAQAyAAACAHAMx5AUybEsS9M8zdM8TfRET/RMTxVd0QVCQ1YBAIAAAAIAAAAAADAkw1IsR3M0SZRUS7VUTbVUSxVVT1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTVN0zRNIDRkJQAABADAYo3B5SAhJSXl3hDCEJOeMSYhtV4hBJGS3jEGFYOeMqIMct5C4xCDHggNWREARAEAAMYgxxBzyDlHqZMSOeeodJQa5xyljlJnKcWYYs0oldhSrI1zjlJHraOUYiwtdpRSjanGAgAAAhwAAAIshEJDVgQAUQAAhDFIKaQUYow5p5xDjCnnmHOGMeYcc44556B0UirnnHROSsQYc445p5xzUjonlXNOSiehAACAAAcAgAALodCQFQFAnACAQZI8T/I0UZQ0TxRFU3RdUTRd1/I81fRMU1U90VRVU1Vt2VRVWZY8zzQ901RVzzRV1VRVWTZVVZZFVdVt03V123RV3ZZt2/ddWxZ2UVVt3VRd2zdV1/Zd2fZ9WdZ1Y/I8VfVM03U903Rl1XVtW3VdXfdMU5ZN15Vl03Vt25VlXXdl2fc103Rd01Vl2XRd2XZlV7ddWfZ903WF35VlX1dlWRh2XfeFW9eV5XRd3VdlVzdWWfZ9W9eF4dZ1YZk8T1U903RdzzRdV3VdX1dd19Y105Rl03Vt2VRdWXZl2fddV9Z1zzRl2XRd2zZdV5ZdWfZ9V5Z13XRdX1dlWfhVV/Z1WdeV4dZt4Tdd1/dVWfaFV5Z14dZ1Ybl1XRg+VfV9U3aF4XRl39eF31luXTiW0XV9YZVt4VhlWTl+4ViW3feVZXRdX1ht2RhWWRaGX/id5fZ943h1XRlu3efMuu8Mx++k+8rT1W1jmX3dWWZfd47hGDq/8OOpqq+brisMpywLv+3rxrP7vrKMruv7qiwLvyrbwrHrvvP8vrAso+z6wmrLwrDatjHcvm4sv3Acy2vryjHrvlG2dXxfeArD83R1XXlmXcf2dXTjRzh+ygAAgAEHAIAAE8pAoSErAoA4AQCPJImiZFmiKFmWKIqm6LqiaLqupGmmqWmeaVqaZ5qmaaqyKZquLGmaaVqeZpqap5mmaJqua5qmrIqmKcumasqyaZqy7LqybbuubNuiacqyaZqybJqmLLuyq9uu7Oq6pFmmqXmeaWqeZ5qmasqyaZquq3meanqeaKqeKKqqaqqqraqqLFueZ5qa6KmmJ4qqaqqmrZqqKsumqtqyaaq2bKqqbbuq7Pqybeu6aaqybaqmLZuqatuu7OqyLNu6L2maaWqeZ5qa55mmaZqybJqqK1uep5qeKKqq5ommaqqqLJumqsqW55mqJ4qq6omea5qqKsumatqqaZq2bKqqLZumKsuubfu+68qybqqqbJuqauumasqybMu+78qq7oqmKcumqtqyaaqyLduy78uyrPuiacqyaaqybaqqLsuybRuzbPu6aJqybaqmLZuqKtuyLfu6LNu678qub6uqrOuyLfu67vqucOu6MLyybPuqrPq6K9u6b+sy2/Z9RNOUZVM1bdtUVVl2Zdn2Zdv2fdE0bVtVVVs2TdW2ZVn2fVm2bWE0Tdk2VVXWTdW0bVmWbWG2ZeF2Zdm3ZVv2ddeVdV/XfePXZd3murLty7Kt+6qr+rbu+8Jw667wCgAAGHAAAAgwoQwUGrISAIgCAACMYYwxCI1SzjkHoVHKOecgZM5BCCGVzDkIIZSSOQehlJQy5yCUklIIoZSUWgshlJRSawUAABQ4AAAE2KApsThAoSErAYBUAACD41iW55miatqyY0meJ4qqqaq27UiW54miaaqqbVueJ4qmqaqu6+ua54miaaqq6+q6aJqmqaqu67q6Lpqiqaqq67qyrpumqqquK7uy7Oumqqqq68quLPvCqrquK8uybevCsKqu68qybNu2b9y6ruu+7/vCka3rui78wjEMRwEA4AkOAEAFNqyOcFI0FlhoyEoAIAMAgDAGIYMQQgYhhJBSSiGllBIAADDgAAAQYEIZKDRkRQAQJwAAGEMppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkgppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void d("audiopreload",!1);a.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(w){return void d("audiopreload",!1)}a.setAttribute("preload","auto"),a.style.cssText="display:none",h.appendChild(a),setTimeout(function(){a.addEventListener("loadeddata",A,!1),e=setTimeout(A,n)},0)});var Y={elem:o("modernizr")};Modernizr._q.push(function(){delete Y.elem});var N={style:Y.elem.style};Modernizr._q.unshift(function(){delete N.style});var H=m.testProp=function(A,e,n){return g([A],t,e,n)};Modernizr.addTest("textshadow",H("textShadow","1px 1px")),m.testAllProps=p,m.testAllProps=B,Modernizr.addTest("cssanimations",B("animationName","a",!0)),Modernizr.addTest("backgroundsize",B("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",B("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",B("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",B("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var A=!1,e=B("columnCount");try{A=!!e,A&&(A=new Boolean(A))}catch(t){}return A});for(var A,e,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],n=0;n<t.length;n++)A=t[n].toLowerCase(),e=B("column"+t[n]),("breakbefore"===A||"breakafter"===A||"breakinside"==A)&&(e=e||B(t[n])),Modernizr.addTest("csscolumns."+A,e)}(),Modernizr.addTest("flexbox",B("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",B("boxDirection","reverse",!0)),Modernizr.addTest("cssreflections",B("boxReflect","above",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return B("filter","blur(2px)");var A=o("a");return A.style.cssText=y.join("filter:blur(2px); "),!!A.style.length&&(e.documentMode===t||e.documentMode>9)}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&B("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!B("perspective","1px",!0)}),Modernizr.addTest("csstransitions",B("transition","all",!0));var X=m.prefixed=function(A,e,t){return 0===A.indexOf("@")?G(A):(-1!=A.indexOf("-")&&(A=s(A)),e?p(A,e,t):p(A,"pfx"))};Modernizr.addAsyncTest(function(){var e;try{e=X("indexedDB",A)}catch(t){}if(e){var n="modernizr-"+Math.random(),a=e.open(n);a.onerror=function(){a.error&&"InvalidStateError"===a.error.name?d("indexeddb",!1):(d("indexeddb",!0),E(e,n))},a.onsuccess=function(){d("indexeddb",!0),E(e,n)}}else d("indexeddb",!1)}),a(),r(v),delete m.addTest,delete m.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();A.Modernizr=Modernizr}(window,document);

/* Owl Carousel v2.3.4 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/* jQuery FlexSlider v2.6.3 */
!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt","");var c=""!==s.attr("data-thumb-alt")?c=' alt="'+s.attr("data-thumb-alt")+'"':"";if(a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+c+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var d=s.attr("data-thumbcaption");""!==d&&void 0!==d&&(a+='<span class="'+i+'caption">'+d+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;""!==l&&l!==e.type||(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),""!==l&&l!==e.type||($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,y=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!y||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,y=!1,x=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),x=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:x,o=d?x:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){x=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-x,y=d?Math.abs(m)<Math.abs(x-o):Math.abs(m)<Math.abs(b-o);var t=500;(!y||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!y&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).innerHeight()},e):t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:!n.atEnd||n.currentSlide!==a||0!==e||"next"!==n.direction:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!1||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
                                                            
                                                            /*! fancyBox v2.1.7 fancyapps.com | fancyapps.com/fancybox/#license */
(function(t,J,f,x){var L=f("html"),q=f(t),p=f(J),b=f.fancybox=function(){b.open.apply(this,arguments)},K=navigator.userAgent.match(/msie/i),D=null,u=J.createTouch!==x,v=function(a){return a&&a.hasOwnProperty&&a instanceof f},r=function(a){return a&&"string"===f.type(a)},G=function(a){return r(a)&&0<a.indexOf("%")},m=function(a,c){var d=parseInt(a,10)||0;c&&G(a)&&(d*=b.getViewport()[c]/100);return Math.ceil(d)},y=function(a,b){return m(a,b)+"px"};f.extend(b,{version:"2.1.7",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(K?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',loading:'<div id="fancybox-loading"><div></div></div>'},openEffect:"fade",
openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},
previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,c){if(a&&(f.isPlainObject(c)||(c={}),!1!==b.close(!0)))return f.isArray(a)||(a=v(a)?f(a).get():[a]),f.each(a,function(d,e){var k={},g,l,h,n,m;"object"===f.type(e)&&(e.nodeType&&(e=f(e)),v(e)?(k={href:e.data("fancybox-href")||e.attr("href"),title:f("<div/>").text(e.data("fancybox-title")||
e.attr("title")||"").html(),isDom:!0,element:e},f.metadata&&f.extend(!0,k,e.metadata())):k=e);g=c.href||k.href||(r(e)?e:null);l=c.title!==x?c.title:k.title||"";n=(h=c.content||k.content)?"html":c.type||k.type;!n&&k.isDom&&(n=e.data("fancybox-type"),n||(n=(n=e.prop("class").match(/fancybox\.(\w+)/))?n[1]:null));r(g)&&(n||(b.isImage(g)?n="image":b.isSWF(g)?n="swf":"#"===g.charAt(0)?n="inline":r(e)&&(n="html",h=e)),"ajax"===n&&(m=g.split(/\s+/,2),g=m.shift(),m=m.shift()));h||("inline"===n?g?h=f(r(g)?
g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(h=e):"html"===n?h=g:n||g||!k.isDom||(n="inline",h=e));f.extend(k,{href:g,type:n,content:h,title:l,selector:m});a[d]=k}),b.opts=f.extend(!0,{},b.defaults,c),c.keys!==x&&(b.opts.keys=c.keys?f.extend({},b.defaults.keys,c.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1===b.trigger("onCancel")||(b.hideLoading(),a&&(b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&
a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a)))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var c=function(){clearTimeout(b.player.timer)},
d=function(){c();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,b.current.playSpeed))},e=function(){c();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":e,"onUpdate.player":d,"beforeLoad.player":c}),d(),b.trigger("onPlayStart")):e()},next:function(a){var c=b.current;c&&(r(a)||(a=c.direction.next),b.jumpto(c.index+
1,a,"next"))},prev:function(a){var c=b.current;c&&(r(a)||(a=c.direction.prev),b.jumpto(c.index-1,a,"prev"))},jumpto:function(a,c,d){var e=b.current;e&&(a=m(a),b.direction=c||e.direction[a>=e.index?"next":"prev"],b.router=d||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==x&&(b.cancel(),b._start(a)))},reposition:function(a,c){var d=b.current,e=d?d.wrap:null,k;e&&(k=b._getPosition(c),a&&"scroll"===a.type?(delete k.position,e.stop(!0,!0).animate(k,200)):(e.css(k),
d.pos=f.extend({},d.dim,k)))},update:function(a){var c=a&&a.originalEvent&&a.originalEvent.type,d=!c||"orientationchange"===c;d&&(clearTimeout(D),D=null);b.isOpen&&!D&&(D=setTimeout(function(){var e=b.current;e&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(d||"load"===c||"resize"===c&&e.autoResize)&&b._setDimension(),"scroll"===c&&e.canShrink||b.reposition(a),b.trigger("onUpdate"),D=null)},d&&!u?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,
u&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,c;b.hideLoading();a=f(b.opts.tpl.loading).click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(c=b.getViewport(),a.css({position:"absolute",top:.5*c.h+c.y,left:.5*c.w+c.x}));b.trigger("onLoading")},getViewport:function(){var a=
b.current&&b.current.locked||!1,c={x:q.scrollLeft(),y:q.scrollTop()};a&&a.length?(c.w=a[0].clientWidth,c.h=a[0].clientHeight):(c.w=u&&t.innerWidth?t.innerWidth:q.width(),c.h=u&&t.innerHeight?t.innerHeight:q.height());return c},unbindEvents:function(){b.wrap&&v(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,c;a&&(q.bind("orientationchange.fb"+(u?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(c=a.keys)&&p.bind("keydown.fb",
function(d){var e=d.which||d.keyCode,k=d.target||d.srcElement;if(27===e&&b.coming)return!1;d.ctrlKey||d.altKey||d.shiftKey||d.metaKey||k&&(k.type||f(k).is("[contenteditable]"))||f.each(c,function(c,k){if(1<a.group.length&&k[e]!==x)return b[c](k[e]),d.preventDefault(),!1;if(-1<f.inArray(e,k))return b[c](),d.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(c,e,k,g){for(var d=f(c.target||null),h=!1;d.length&&!(h||d.is(".fancybox-skin")||d.is(".fancybox-wrap"));)h=
(h=d[0])&&!(h.style.overflow&&"hidden"===h.style.overflow)&&(h.clientWidth&&h.scrollWidth>h.clientWidth||h.clientHeight&&h.scrollHeight>h.clientHeight),d=f(d).parent();0!==e&&!h&&1<b.group.length&&!a.canShrink&&(0<g||0<k?b.prev(0<g?"down":"left"):(0>g||0>k)&&b.next(0>g?"up":"right"),c.preventDefault())}))},trigger:function(a,c){var d,e=c||b.coming||b.current;if(e){f.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1)));if(!1===d)return!1;e.helpers&&f.each(e.helpers,function(c,
d){if(d&&b.helpers[c]&&f.isFunction(b.helpers[c][a]))b.helpers[c][a](f.extend(!0,{},b.helpers[c].defaults,d),e)})}p.trigger(a)},isImage:function(a){return r(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return r(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var c={},d,e;a=m(a);d=b.group[a]||null;if(!d)return!1;c=f.extend(!0,{},b.opts,d);d=c.margin;e=c.padding;"number"===f.type(d)&&(c.margin=[d,d,d,d]);"number"===f.type(e)&&(c.padding=
[e,e,e,e]);c.modal&&f.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});c.autoSize&&(c.autoWidth=c.autoHeight=!0);"auto"===c.width&&(c.autoWidth=!0);"auto"===c.height&&(c.autoHeight=!0);c.group=b.group;c.index=a;b.coming=c;if(!1===b.trigger("beforeLoad"))b.coming=null;else{e=c.type;d=c.href;if(!e)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===
e||"swf"===e)c.autoHeight=c.autoWidth=!1,c.scrolling="visible";"image"===e&&(c.aspectRatio=!0);"iframe"===e&&u&&(c.scrolling="scroll");c.wrap=f(c.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+e+" fancybox-tmp "+c.wrapCSS).appendTo(c.parent||"body");f.extend(c,{skin:f(".fancybox-skin",c.wrap),outer:f(".fancybox-outer",c.wrap),inner:f(".fancybox-inner",c.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){c.skin.css("padding"+b,y(c.padding[a]))});b.trigger("onReady");
if("inline"===e||"html"===e){if(!c.content||!c.content.length)return b._error("content")}else if(!d)return b._error("href");"image"===e?b._loadImage():"ajax"===e?b._loadAjax():"iframe"===e?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,d){b.coming&&"abort"!==d?b._error("ajax",a):b.hideLoading()},success:function(c,d){"success"===d&&(a.content=c,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,
c=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(d){}});a.iframe.preload&&(b.showLoading(),c.one("load",function(){f(this).data("ready",1);u||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=c.appendTo(a.inner);a.iframe.preload||
b._afterLoad()},_preloadImages:function(){var a=b.group,c=b.current,d=a.length,e=c.preload?Math.min(c.preload,d-1):0,f,g;for(g=1;g<=e;g+=1)f=a[(c.index+g)%d],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,c=b.current,d,e,k,g,l;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,c))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{c&&(b.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
b.unbindEvents();d=a.content;e=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:c});g=a.href;switch(e){case "inline":case "ajax":case "html":a.selector?d=f("<div>").html(d).find(a.selector):v(d)&&(d.data("fancybox-placeholder")||d.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),d=d.show().detach(),a.wrap.bind("onReset",function(){f(this).find(d).length&&d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":d=a.tpl.image.replace(/\{href\}/g,g);break;case "swf":d='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',l="",f.each(a.swf,function(a,b){d+='<param name="'+a+'" value="'+b+'"></param>';l+=" "+a+'="'+b+'"'}),d+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}v(d)&&d.parent().is(a.inner)||a.inner.append(d);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if(c.prevMethod)b.transitions[c.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),c=0,d,e=b.wrap,k=b.skin,g=b.inner,l=b.current;d=l.width;var h=l.height,n=l.minWidth,w=l.minHeight,p=l.maxWidth,
q=l.maxHeight,u=l.scrolling,r=l.scrollOutside?l.scrollbarWidth:0,z=l.margin,A=m(z[1]+z[3]),t=m(z[0]+z[2]),x,B,v,E,C,H,D,F,I;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");z=m(k.outerWidth(!0)-k.width());x=m(k.outerHeight(!0)-k.height());B=A+z;v=t+x;E=G(d)?(a.w-B)*m(d)/100:d;C=G(h)?(a.h-v)*m(h)/100:h;if("iframe"===l.type){if(I=l.content,l.autoHeight&&I&&1===I.data("ready"))try{I[0].contentWindow.document.location&&(g.width(E).height(9999),H=I.contents().find("body"),r&&H.css("overflow-x",
"hidden"),C=H.outerHeight(!0))}catch(M){}}else if(l.autoWidth||l.autoHeight)g.addClass("fancybox-tmp"),l.autoWidth||g.width(E),l.autoHeight||g.height(C),l.autoWidth&&(E=g.width()),l.autoHeight&&(C=g.height()),g.removeClass("fancybox-tmp");d=m(E);h=m(C);F=E/C;n=m(G(n)?m(n,"w")-B:n);p=m(G(p)?m(p,"w")-B:p);w=m(G(w)?m(w,"h")-v:w);q=m(G(q)?m(q,"h")-v:q);H=p;D=q;l.fitToView&&(p=Math.min(a.w-B,p),q=Math.min(a.h-v,q));B=a.w-A;t=a.h-t;l.aspectRatio?(d>p&&(d=p,h=m(d/F)),h>q&&(h=q,d=m(h*F)),d<n&&(d=n,h=m(d/
F)),h<w&&(h=w,d=m(h*F))):(d=Math.max(n,Math.min(d,p)),l.autoHeight&&"iframe"!==l.type&&(g.width(d),h=g.height()),h=Math.max(w,Math.min(h,q)));if(l.fitToView)if(g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height(),l.aspectRatio)for(;(a>B||A>t)&&d>n&&h>w&&!(19<c++);)h=Math.max(w,Math.min(q,h-10)),d=m(h*F),d<n&&(d=n,h=m(d/F)),d>p&&(d=p,h=m(d/F)),g.width(d).height(h),e.width(d+z),a=e.width(),A=e.height();else d=Math.max(n,Math.min(d,d-(a-B))),h=Math.max(w,Math.min(h,h-(A-t)));r&&"auto"===u&&h<C&&
d+z+r<B&&(d+=r);g.width(d).height(h);e.width(d+z);a=e.width();A=e.height();c=(a>B||A>t)&&d>n&&h>w;d=l.aspectRatio?d<H&&h<D&&d<E&&h<C:(d<H||h<D)&&(d<E||h<C);f.extend(l,{dim:{width:y(a),height:y(A)},origWidth:E,origHeight:C,canShrink:c,canExpand:d,wPadding:z,hPadding:x,wrapSpace:A-k.outerHeight(!0),skinSpace:k.height()-h});!I&&l.autoHeight&&h>w&&h<q&&!d&&g.height("auto")},_getPosition:function(a){var c=b.current,d=b.getViewport(),e=c.margin,f=b.wrap.width()+e[1]+e[3],g=b.wrap.height()+e[0]+e[2],e={position:"absolute",
top:e[0],left:e[3]};c.autoCenter&&c.fixed&&!a&&g<=d.h&&f<=d.w?e.position="fixed":c.locked||(e.top+=d.y,e.left+=d.x);e.top=y(Math.max(e.top,e.top+(d.h-g)*c.topRatio));e.left=y(Math.max(e.left,e.left+(d.w-f)*c.leftRatio));return e},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened").hide().show(0),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(c){f(c.target).is("a")||
f(c.target).parent().is("a")||(c.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=
!1,b.play(!0)):b.play(!1))},_afterZoomOut:function(a){a=a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,c=a.element,d=a.orig,e={},f=50,g=50,l=a.hPadding,h=a.wPadding,n=b.getViewport();!d&&a.isDom&&c.is(":visible")&&(d=c.find("img:first"),d.length||(d=c));v(d)?
(e=d.offset(),d.is("img")&&(f=d.outerWidth(),g=d.outerHeight())):(e.top=n.y+(n.h-g)*a.topRatio,e.left=n.x+(n.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)e.top-=n.y,e.left-=n.x;return e={top:y(e.top-l*a.topRatio),left:y(e.left-h*a.leftRatio),width:y(f+h),height:y(g+l)}},step:function(a,c){var d,e,f=c.prop;e=b.current;var g=e.wrapSpace,l=e.skinSpace;if("width"===f||"height"===f)d=c.end===c.start?1:(a-c.start)/(c.end-c.start),b.isClosing&&(d=1-d),e="width"===f?e.wPadding:e.hPadding,
e=a-e,b.skin[f](m("width"===f?e:e-g*d)),b.inner[f](m("width"===f?e:e-g*d-l*d))},zoomIn:function(){var a=b.current,c=a.pos,d=a.openEffect,e="elastic"===d,k=f.extend({opacity:1},c);delete k.position;e?(c=this.getOrigPosition(),a.openOpacity&&(c.opacity=.1)):"fade"===d&&(c.opacity=.1);b.wrap.css(c).animate(k,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,c=a.closeEffect,d="elastic"===c,e={opacity:.1};d&&(e=this.getOrigPosition(),
a.closeOpacity&&(e.opacity=.1));b.wrap.animate(e,{duration:"none"===c?0:a.closeSpeed,easing:a.closeEasing,step:d?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,c=a.nextEffect,d=a.pos,e={opacity:1},f=b.direction,g;d.opacity=.1;"elastic"===c&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(d[g]=y(m(d[g])-200),e[g]="+=200px"):(d[g]=y(m(d[g])+200),e[g]="-=200px"));"none"===c?b._afterZoomIn():b.wrap.css(d).animate(e,{duration:a.nextSpeed,easing:a.nextEasing,
complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,c=a.prevEffect,d={opacity:.1},e=b.direction;"elastic"===c&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px");a.wrap.animate(d,{duration:"none"===c?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){var c;a=f.extend({},
this.defaults,a);this.overlay&&this.close();c=b.coming?b.coming.parent:a.parent;this.overlay=f('<div class="fancybox-overlay"></div>').appendTo(c&&c.length?c:"body");this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var c=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&
this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():c.close(),!1});this.overlay.css(a.css).show()},close:function(){q.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");
K?(b=Math.max(J.documentElement.offsetWidth,J.body.offsetWidth),p.width()>b&&(a=p.width())):p.width()>q.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var d=this.overlay;f(".fancybox-overlay").stop(!0,!0);d||this.create(a);a.locked&&this.fixed&&b.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&f("*:not(object)").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=q.scrollTop(),this.scrollH=q.scrollLeft(),this.el.addClass("fancybox-lock"),q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",
position:"bottom"},beforeShow:function(a){var c=b.current,d=c.title,e=a.type;f.isFunction(d)&&(d=d.call(c.element,c));if(r(d)&&""!==f.trim(d)){c=f('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>");switch(e){case "inside":e=b.skin;break;case "outside":e=b.wrap;break;case "over":e=b.inner;break;default:e=b.skin,c.appendTo("body"),K&&c.width(c.width()),c.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(m(c.css("margin-bottom")))}c["top"===a.position?"prependTo":
"appendTo"](e)}}};f.fn.fancybox=function(a){var c,d=f(this),e=this.selector||"",k=function(g){var l=f(this).blur(),h=c,k,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||l.is(".fancybox-wrap")||(k=a.groupAttr||"data-fancybox-group",m=l.attr(k),m||(k="rel",m=l.get(0)[k]),m&&""!==m&&"nofollow"!==m&&(l=e.length?f(e):d,l=l.filter("["+k+'="'+m+'"]'),h=l.index(this)),a.index=h,!1!==b.open(l,a)&&g.preventDefault())};a=a||{};c=a.index||0;e&&!1!==a.live?p.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')",
"click.fb-start",k):d.unbind("click.fb-start").bind("click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,c;f.scrollbarWidth===x&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});f.support.fixedPosition===x&&(f.support.fixedPosition=function(){var a=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(t).width();L.addClass("fancybox-lock-test");c=f(t).width();L.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(c-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

 /*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 */
;(function ($) {
	
	var F = $.fancybox;	
	F.helpers.buttons = {
		defaults : {
			skipSingle : false, 
			position   : 'top', 
			tpl        : '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
		},

		list : null,
		buttons: null,

		beforeLoad: function (opts, obj) {			
			if (opts.skipSingle && obj.group.length < 2) {
				obj.helpers.buttons = false;
				obj.closeBtn = true;

				return;
			}
			
			obj.margin[ opts.position === 'bottom' ? 2 : 0 ] += 30;
		},

		onPlayStart: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
			}
		},

		onPlayEnd: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
			}
		},

		afterShow: function (opts, obj) {
			var buttons = this.buttons;

			if (!buttons) {
				this.list = $(opts.tpl).addClass(opts.position).appendTo('body');

				buttons = {
					prev   : this.list.find('.btnPrev').click( F.prev ),
					next   : this.list.find('.btnNext').click( F.next ),
					play   : this.list.find('.btnPlay').click( F.play ),
					toggle : this.list.find('.btnToggle').click( F.toggle ),
					close  : this.list.find('.btnClose').click( F.close )
				}
			}

			
			if (obj.index > 0 || obj.loop) {
				buttons.prev.removeClass('btnDisabled');
			} else {
				buttons.prev.addClass('btnDisabled');
			}

			
			if (obj.loop || obj.index < obj.group.length - 1) {
				buttons.next.removeClass('btnDisabled');
				buttons.play.removeClass('btnDisabled');

			} else {
				buttons.next.addClass('btnDisabled');
				buttons.play.addClass('btnDisabled');
			}

			this.buttons = buttons;

			this.onUpdate(opts, obj);
		},

		onUpdate: function (opts, obj) {
			var toggle;

			if (!this.buttons) {
				return;
			}

			toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

			
			if (obj.canShrink) {
				toggle.addClass('btnToggleOn');

			} else if (!obj.canExpand) {
				toggle.addClass('btnDisabled');
			}
		},

		beforeClose: function () {
			if (this.list) {
				this.list.remove();
			}

			this.list    = null;
			this.buttons = null;
		}
	};

}(jQuery));

 /*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 */
;(function ($) {
	
	var F = $.fancybox;	
	F.helpers.thumbs = {
		defaults : {
			width    : 50,      
			height   : 50,       
			position : 'bottom', 
			source   : function ( item ) { 
				var href;
				if (item.element) {
					href = $(item.element).find('img').attr('src');
				}

				if (!href && item.type === 'image' && item.href) {
					href = item.href;
				}

				return href;
			}
		},

		wrap  : null,
		list  : null,
		width : 0,

		init: function (opts, obj) {
			var that = this,
				list,
				thumbWidth  = opts.width,
				thumbHeight = opts.height,
				thumbSource = opts.source;
			
			list = '';
			for (var n = 0; n < obj.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
			this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);
			
			$.each(obj.group, function (i) {
				var el   = obj.group[ i ],
					href = thumbSource( el );

				if (!href) {
					return;
				}

				$("<img />").on("load", function () {
					var width  = this.width,
						height = this.height,
						widthRatio, heightRatio, parent;

					if (!that.list || !width || !height) {
						return;
					}
					
					widthRatio  = width / thumbWidth;
					heightRatio = height / thumbHeight;

					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width  = Math.floor(width / heightRatio);
							height = thumbHeight;

						} else {
							width  = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					$(this).css({
						width  : width,
						height : height,
						top    : Math.floor(thumbHeight / 2 - height / 2),
						left   : Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					$(this).hide().appendTo(parent).fadeIn(300);

				})
				.attr('src',   href)
				.attr('title', el.title);
			});
			
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
		},

		beforeLoad: function (opts, obj) {			
			if (obj.group.length < 2) {
				obj.helpers.thumbs = false;

				return;
			}
			
			obj.margin[ opts.position === 'top' ? 0 : 2 ] += ((opts.height) + 15);
		},

		afterShow: function (opts, obj) {			
			if (this.list) {
				this.onUpdate(opts, obj);

			} else {
				this.init(opts, obj);
			}
			
			this.list.children().removeClass('active').eq(obj.index).addClass('active');
		},
		
		onUpdate: function (opts, obj) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeClose: function () {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap  = null;
			this.list  = null;
			this.width = 0;
		}
	}
        

}(jQuery));
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
*/
;(function ($) {
	"use strict";	
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';
			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}
			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});
			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}
			return url;
		};
	
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1,
                    			ps: 'docs',
                    			controls: 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + $.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));

/*
 * SmartMenus jQuery v0.9.7
 * http://www.smartmenus.org/
 */

(function($) {

	var menuTrees = [],
		IE = !!window.createPopup, 
		mouse = false, 
		mouseDetectionEnabled = false;

	
	function initMouseDetection(disable) {
		var eNS = '.smartmenus_mouse';
		if (!mouseDetectionEnabled && !disable) {			
			
			var firstTime = true,
				lastMove = null;
			$(document).bind(getEventsNS([
				['mousemove', function(e) {
					var thisMove = { x: e.pageX, y: e.pageY, timeStamp: new Date().getTime() };
					if (lastMove) {
						var deltaX = Math.abs(lastMove.x - thisMove.x),
							deltaY = Math.abs(lastMove.y - thisMove.y);
	 					if ((deltaX > 0 || deltaY > 0) && deltaX <= 2 && deltaY <= 2 && thisMove.timeStamp - lastMove.timeStamp <= 300) {
							mouse = true;							
							if (firstTime) {
								var $a = $(e.target).closest('a');
								if ($a.is('a')) {
									$.each(menuTrees, function() {
										if ($.contains(this.$root[0], $a[0])) {
											this.itemEnter({ currentTarget: $a[0] });
											return false;
										}
									});
								}
								firstTime = false;
							}
						}
					}
					lastMove = thisMove;
				}],
				[touchEvents() ? 'touchstart' : 'pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut', function(e) {
					if (isTouchEvent(e.originalEvent)) {
						mouse = false;
					}
				}]
			], eNS));
			mouseDetectionEnabled = true;
		} else if (mouseDetectionEnabled && disable) {
			$(document).unbind(eNS);
			mouseDetectionEnabled = false;
		}
	}

	function isTouchEvent(e) {
		return !/^(4|mouse)$/.test(e.pointerType);
	}
	
	function touchEvents() {
		return 'ontouchstart' in window;
	}
	
	function getEventsNS(defArr, eNS) {
		if (!eNS) {
			eNS = '';
		}
		var obj = {};
		$.each(defArr, function(index, value) {
			obj[value[0].split(' ').join(eNS + ' ') + eNS] = value[1];
		});
		return obj;
	}

	$.SmartMenus = function(elm, options) {
		this.$root = $(elm);
		this.opts = options;
		this.rootId = ''; 
		this.$subArrow = null;
		this.subMenus = []; 
		this.activatedItems = [];
		this.visibleSubMenus = [];
		this.showTimeout = 0;
		this.hideTimeout = 0;
		this.scrollTimeout = 0;
		this.clickActivated = false;
		this.zIndexInc = 0;
		this.$firstLink = null;
		this.$firstSub = null;
		this.disabled = false;
		this.$disableOverlay = null;
		this.isTouchScrolling = false;
		this.init();
	};

	$.extend($.SmartMenus, {
		hideAll: function() {
			$.each(menuTrees, function() {
				this.menuHideAll();
			});
		},
		destroy: function() {
			while (menuTrees.length) {
				menuTrees[0].destroy();
			}
			initMouseDetection(true);
		},
		prototype: {
			init: function(refresh) {
				var self = this;

				if (!refresh) {
					menuTrees.push(this);

					this.rootId = (new Date().getTime() + Math.random() + '').replace(/\D/g, '');

					if (this.$root.hasClass('sm-rtl')) {
						this.opts.rightToLeftSubMenus = true;
					}
					
					var eNS = '.smartmenus';
					this.$root
						.data('smartmenus', this)
						.attr('data-smartmenus-id', this.rootId)
						.dataSM('level', 1)
						.bind(getEventsNS([
							['mouseover focusin', $.proxy(this.rootOver, this)],
							['mouseout focusout', $.proxy(this.rootOut, this)]
						], eNS))
						.delegate('a', getEventsNS([
							['mouseenter', $.proxy(this.itemEnter, this)],
							['mouseleave', $.proxy(this.itemLeave, this)],
							['mousedown', $.proxy(this.itemDown, this)],
							['focus', $.proxy(this.itemFocus, this)],
							['blur', $.proxy(this.itemBlur, this)],
							['click', $.proxy(this.itemClick, this)],
							['touchend', $.proxy(this.itemTouchEnd, this)]
						], eNS));
					
					eNS += this.rootId;
					if (this.opts.hideOnClick) {
						$(document).bind(getEventsNS([
							['touchstart', $.proxy(this.docTouchStart, this)],
							['touchmove', $.proxy(this.docTouchMove, this)],
							['touchend', $.proxy(this.docTouchEnd, this)],							
							['click', $.proxy(this.docClick, this)]
						], eNS));
					}					
					$(window).bind(getEventsNS([['resize orientationchange', $.proxy(this.winResize, this)]], eNS));
					if (this.opts.subIndicators) {
						this.$subArrow = $('<span/>').addClass('sub-arrow');
						if (this.opts.subIndicatorsText) {
							this.$subArrow.html(this.opts.subIndicatorsText);
						}                                                
					}					
					initMouseDetection();
				}
				
				this.$firstSub = this.$root.find('ul').each(function() { self.menuInit($(this)); }).eq(0);
				this.$firstLink = this.$root.find('a').eq(0);				
				if (this.opts.markCurrentItem) {
					var reDefaultDoc = /(index|default)\.[^#\?\/]*/i,
						reHash = /#.*/,
						locHref = window.location.href.replace(reDefaultDoc, ''),
						locHrefNoHash = locHref.replace(reHash, '');
					this.$root.find('a').each(function() {
						var href = this.href.replace(reDefaultDoc, ''),
							$this = $(this);
						if (href == locHref || href == locHrefNoHash) {
							$this.addClass('current');
							if (self.opts.markCurrentTree) {
								$this.parent().parentsUntil('[data-smartmenus-id]', 'li').children('a').addClass('current');
							}
						}
					});
				}
			},
			destroy: function() {
				this.menuHideAll();
				var eNS = '.smartmenus';
				this.$root
					.removeData('smartmenus')
					.removeAttr('data-smartmenus-id')
					.removeDataSM('level')
					.unbind(eNS)
					.undelegate(eNS);
				eNS += this.rootId;
				$(document).unbind(eNS);
				$(window).unbind(eNS);
				if (this.opts.subIndicators) {
					this.$subArrow = null;
				}
				var self = this;
				$.each(this.subMenus, function() {
					if (this.hasClass('mega-menu')) {
						this.find('ul').removeDataSM('in-mega');
					}
					if (this.dataSM('shown-before')) {
						if (self.opts.subMenusMinWidth || self.opts.subMenusMaxWidth) {
							this.css({ width: '', minWidth: '', maxWidth: '' }).removeClass('sm-nowrap');
						}
						if (this.dataSM('scroll-arrows')) {
							this.dataSM('scroll-arrows').remove();
						}
						this.css({ zIndex: '', top: '', left: '', marginLeft: '', marginTop: '', display: '' });
					}
					if (self.opts.subIndicators) {
						this.dataSM('parent-a').removeClass('has-submenu').children('span.sub-arrow').remove();
					}
					this.removeDataSM('shown-before')
						.removeDataSM('ie-shim')
						.removeDataSM('scroll-arrows')
						.removeDataSM('parent-a')
						.removeDataSM('level')
						.removeDataSM('beforefirstshowfired')
						.parent().removeDataSM('sub');
				});
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.$root = null;
				this.$firstLink = null;
				this.$firstSub = null;
				if (this.$disableOverlay) {
					this.$disableOverlay.remove();
					this.$disableOverlay = null;
				}
				menuTrees.splice($.inArray(this, menuTrees), 1);
			},
			disable: function(noOverlay) {
				if (!this.disabled) {
					this.menuHideAll();					
					if (!noOverlay && !this.opts.isPopup && this.$root.is(':visible')) {
						var pos = this.$root.offset();
						this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>').css({
							position: 'absolute',
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight(),
							zIndex: this.getStartZIndex(true),
							opacity: 0
						}).appendTo(document.body);
					}
					this.disabled = true;
				}
			},
			docClick: function(e) {
				if (this.isTouchScrolling) {
					this.isTouchScrolling = false;
					return;
				}				
				if (this.visibleSubMenus.length && !$.contains(this.$root[0], e.target) || $(e.target).is('a')) {
					this.menuHideAll();
				}
			},
			docTouchEnd: function(e) {
				if (!this.lastTouch) {
					return;
				}
				if (this.visibleSubMenus.length && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !$.contains(this.$root[0], this.lastTouch.target))) {
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}					
					var self = this;
					this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, 350);
				}
				this.lastTouch = null;
			},
			docTouchMove: function(e) {
				if (!this.lastTouch) {
					return;
				}
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch.x2 = touchPoint.pageX;
				this.lastTouch.y2 = touchPoint.pageY;
			},
			docTouchStart: function(e) {
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch = { x1: touchPoint.pageX, y1: touchPoint.pageY, target: touchPoint.target };
			},
			enable: function() {
				if (this.disabled) {
					if (this.$disableOverlay) {
						this.$disableOverlay.remove();
						this.$disableOverlay = null;
					}
					this.disabled = false;
				}
			},
			getClosestMenu: function(elm) {
				var $closestMenu = $(elm).closest('ul');
				while ($closestMenu.dataSM('in-mega')) {
					$closestMenu = $closestMenu.parent().closest('ul');
				}
				return $closestMenu[0] || null;
			},
			getHeight: function($elm) {
				return this.getOffset($elm, true);
			},			
			getOffset: function($elm, height) {
				var old;
				if ($elm.css('display') == 'none') {
					old = { position: $elm[0].style.position, visibility: $elm[0].style.visibility };
					$elm.css({ position: 'absolute', visibility: 'hidden' }).show();
				}
				var box = $elm[0].getBoundingClientRect && $elm[0].getBoundingClientRect(),
					val = box && (height ? box.height || box.bottom - box.top : box.width || box.right - box.left);
				if (!val && val !== 0) {
					val = height ? $elm[0].offsetHeight : $elm[0].offsetWidth;
				}
				if (old) {
					$elm.hide().css(old);
				}
				return val;
			},
			getStartZIndex: function(root) {
				var zIndex = parseInt(this[root ? '$root' : '$firstSub'].css('z-index'));
				if (!root && isNaN(zIndex)) {
					zIndex = parseInt(this.$root.css('z-index'));
				}
				return !isNaN(zIndex) ? zIndex : 1;
			},
			getTouchPoint: function(e) {
				return e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;
			},
			getViewport: function(height) {
				var name = height ? 'Height' : 'Width',
					val = document.documentElement['client' + name],
					val2 = window['inner' + name];
				if (val2) {
					val = Math.min(val, val2);
				}
				return val;
			},
			getViewportHeight: function() {
				return this.getViewport(true);
			},
			getViewportWidth: function() {
				return this.getViewport();
			},
			getWidth: function($elm) {
				return this.getOffset($elm);
			},
			handleEvents: function() {
				return !this.disabled && this.isCSSOn();
			},
			handleItemEvents: function($a) {
				return this.handleEvents() && !this.isLinkInMegaMenu($a);
			},
			isCollapsible: function() {
				return this.$firstSub.css('position') == 'static';
			},
			isCSSOn: function() {
				return this.$firstLink.css('display') == 'block';
			},
			isFixed: function() {
				var isFixed = this.$root.css('position') == 'fixed';
				if (!isFixed) {
					this.$root.parentsUntil('body').each(function() {
						if ($(this).css('position') == 'fixed') {
							isFixed = true;
							return false;
						}
					});
				}
				return isFixed;
			},
			isLinkInMegaMenu: function($a) {
				return !$a.parent().parent().dataSM('level');
			},
			isTouchMode: function() {
				return !mouse || this.isCollapsible();
			},
			itemActivate: function($a) {
				var $li = $a.parent(),
					$ul = $li.parent(),
					level = $ul.dataSM('level');				
				if (level > 1 && (!this.activatedItems[level - 2] || this.activatedItems[level - 2][0] != $ul.dataSM('parent-a')[0])) {
					var self = this;
					$($ul.parentsUntil('[data-smartmenus-id]', 'ul').get().reverse()).add($ul).each(function() {
						self.itemActivate($(this).dataSM('parent-a'));
					});
				}				
				if (this.visibleSubMenus.length > level) {
					this.menuHideSubMenus(!this.activatedItems[level - 1] || this.activatedItems[level - 1][0] != $a[0] ? level - 1 : level);
				}				
				this.activatedItems[level - 1] = $a;
				this.visibleSubMenus[level - 1] = $ul;
				if (this.$root.triggerHandler('activate.smapi', $a[0]) === false) {
					return;
				}				
				var $sub = $li.dataSM('sub');
				if ($sub && (this.isTouchMode() || (!this.opts.showOnClick || this.clickActivated))) {
					this.menuShow($sub);
				}
			},
			itemBlur: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				this.$root.triggerHandler('blur.smapi', $a[0]);
			},
			itemClick: function(e) {
				if (this.isTouchScrolling) {
					this.isTouchScrolling = false;
					e.stopPropagation();
					return false;
				}
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				$a.removeDataSM('mousedown');
				if (this.$root.triggerHandler('click.smapi', $a[0]) === false) {
					return false;
				}
				var $sub = $a.parent().dataSM('sub');
				if (this.isTouchMode()) {					
					if ($a.dataSM('href')) {
						$a.attr('href', $a.dataSM('href')).removeDataSM('href');
					}					
					if ($sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'))) {						
						this.itemActivate($a);						
						if ($sub.is(':visible')) {
							return false;
						}
					}
				} else if (this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 && $sub) {
					this.clickActivated = true;
					this.menuShow($sub);
					return false;
				}
				if ($a.hasClass('disabled')) {
					return false;
				}
				if (this.$root.triggerHandler('select.smapi', $a[0]) === false) {
					return false;
				}
			},
			itemDown: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				$a.dataSM('mousedown', true);
			},
			itemEnter: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
					var self = this;
					this.showTimeout = setTimeout(function() { self.itemActivate($a); }, this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 ? 1 : this.opts.showTimeout);
				}
				this.$root.triggerHandler('mouseenter.smapi', $a[0]);
			},
			itemFocus: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				
				if ((!this.isTouchMode() || !$a.dataSM('mousedown')) && (!this.activatedItems.length || this.activatedItems[this.activatedItems.length - 1][0] != $a[0])) {
					this.itemActivate($a);
				}
				this.$root.triggerHandler('focus.smapi', $a[0]);
			},
			itemLeave: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					if ($a[0].blur) {
						$a[0].blur();
					}
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
				}
				$a.removeDataSM('mousedown');
				this.$root.triggerHandler('mouseleave.smapi', $a[0]);
			},
			itemTouchEnd: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				
				var $sub = $a.parent().dataSM('sub');
				if ($a.attr('href').charAt(0) !== '#' && $sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'))) {
					$a.dataSM('href', $a.attr('href'));
					$a.attr('href', '#');
				}
			},
			menuFixLayout: function($ul) {				
				if (!$ul.dataSM('shown-before')) {
					$ul.hide().dataSM('shown-before', true);
				}
			},
			menuHide: function($sub) {
				if (this.$root.triggerHandler('beforehide.smapi', $sub[0]) === false) {
					return;
				}
				$sub.stop(true, true);
				if ($sub.is(':visible')) {
					var complete = function() {						
						$sub.css('z-index', '');
					};					
					if (this.isCollapsible()) {
						if (this.opts.collapsibleHideFunction) {
							this.opts.collapsibleHideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.collapsibleHideDuration, complete);
						}
					} else {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.hideDuration, complete);
						}
					}					
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').remove();
					}					
					if ($sub.dataSM('scroll')) {
						this.menuScrollStop($sub);
						$sub.css({ 'touch-action': '', '-ms-touch-action': '' })
							.unbind('.smartmenus_scroll').removeDataSM('scroll').dataSM('scroll-arrows').hide();
					}					
					$sub.dataSM('parent-a').removeClass('highlighted');
					var level = $sub.dataSM('level');
					this.activatedItems.splice(level - 1, 1);
					this.visibleSubMenus.splice(level - 1, 1);
					this.$root.triggerHandler('hide.smapi', $sub[0]);
				}
			},
			menuHideAll: function() {
				if (this.showTimeout) {
					clearTimeout(this.showTimeout);
					this.showTimeout = 0;
				}				
				this.menuHideSubMenus();				
				if (this.opts.isPopup) {
					this.$root.stop(true, true);
					if (this.$root.is(':visible')) {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, this.$root);
						} else {
							this.$root.hide(this.opts.hideDuration);
						}						
						if (this.$root.dataSM('ie-shim')) {
							this.$root.dataSM('ie-shim').remove();
						}
					}
				}
				this.activatedItems = [];
				this.visibleSubMenus = [];
				this.clickActivated = false;				
				this.zIndexInc = 0;
			},
			menuHideSubMenus: function(level) {
				if (!level)
					level = 0;
				for (var i = this.visibleSubMenus.length - 1; i > level; i--) {
					this.menuHide(this.visibleSubMenus[i]);
				}
			},
			menuIframeShim: function($ul) {				
				if (IE && this.opts.overlapControlsInIE && !$ul.dataSM('ie-shim')) {
					$ul.dataSM('ie-shim', $('<iframe/>').attr({ src: 'javascript:0', tabindex: -9 })
						.css({ position: 'absolute', top: 'auto', left: '0', opacity: 0, border: '0' })
					);
				}
			},
			menuInit: function($ul) {
				if (!$ul.dataSM('in-mega')) {
					this.subMenus.push($ul);					
					if ($ul.hasClass('mega-menu')) {
						$ul.find('ul').dataSM('in-mega', true);
					}					
					var level = 2,
						par = $ul[0];
					while ((par = par.parentNode.parentNode) != this.$root[0]) {
						level++;
					}					
					$ul.dataSM('parent-a', $ul.prevAll('a').eq(-1))
						.dataSM('level', level)
						.parent().dataSM('sub', $ul);					
					if (this.opts.subIndicators) {
						$ul.dataSM('parent-a').addClass('has-submenu')[this.opts.subIndicatorsPos](this.$subArrow.clone());
					}
				}
			},
			menuPosition: function($sub) {
				var $a = $sub.dataSM('parent-a'),
					$ul = $sub.parent().parent(),
					level = $sub.dataSM('level'),
					subW = this.getWidth($sub),
					subH = this.getHeight($sub),
					itemOffset = $a.offset(),
					itemX = itemOffset.left,
					itemY = itemOffset.top,
					itemW = this.getWidth($a),
					itemH = this.getHeight($a),
					$win = $(window),
					winX = $win.scrollLeft(),
					winY = $win.scrollTop(),
					winW = this.getViewportWidth(),
					winH = this.getViewportHeight(),
					horizontalParent = $ul.hasClass('sm') && !$ul.hasClass('sm-vertical'),
					subOffsetX = level == 2 ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
					subOffsetY = level == 2 ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY,
					x, y;
				if (horizontalParent) {
					x = this.opts.rightToLeftSubMenus ? itemW - subW - subOffsetX : subOffsetX;
					y = this.opts.bottomToTopSubMenus ? -subH - subOffsetY : itemH + subOffsetY;
				} else {
					x = this.opts.rightToLeftSubMenus ? subOffsetX - subW : itemW - subOffsetX;
					y = this.opts.bottomToTopSubMenus ? itemH - subOffsetY - subH : subOffsetY;
				}
				if (this.opts.keepInViewport && !this.isCollapsible()) {
					var absX = itemX + x,
						absY = itemY + y;
					if (this.opts.rightToLeftSubMenus && absX < winX) {
						x = horizontalParent ? winX - absX + x : itemW - subOffsetX;
					} else if (!this.opts.rightToLeftSubMenus && absX + subW > winX + winW) {
						x = horizontalParent ? winX + winW - subW - absX + x : subOffsetX - subW;
					}
					if (!horizontalParent) {
						if (subH < winH && absY + subH > winY + winH) {
							y += winY + winH - subH - absY;
						} else if (subH >= winH || absY < winY) {
							y += winY - absY;
						}
					}
					
					if (horizontalParent && (absY + subH > winY + winH + 0.49 || absY < winY) || !horizontalParent && subH > winH + 0.49) {
						var self = this;
						if (!$sub.dataSM('scroll-arrows')) {
							$sub.dataSM('scroll-arrows', $([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], $('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]])
								.bind({
									mouseenter: function() {
										$sub.dataSM('scroll').up = $(this).hasClass('scroll-up');
										self.menuScroll($sub);
									},
									mouseleave: function(e) {
										self.menuScrollStop($sub);
										self.menuScrollOut($sub, e);
									},
									'mousewheel DOMMouseScroll': function(e) { e.preventDefault(); }
								})
								.insertAfter($sub)
							);
						}
						
						var eNS = '.smartmenus_scroll';
						$sub.dataSM('scroll', {
								step: 1,
								
								itemH: itemH,
								subH: subH,
								arrowDownH: this.getHeight($sub.dataSM('scroll-arrows').eq(1))
							})
							.bind(getEventsNS([
								['mouseover', function(e) { self.menuScrollOver($sub, e); }],
								['mouseout', function(e) { self.menuScrollOut($sub, e); }],
								['mousewheel DOMMouseScroll', function(e) { self.menuScrollMousewheel($sub, e); }]
							], eNS))
							.dataSM('scroll-arrows').css({ top: 'auto', left: '0', marginLeft: x + (parseInt($sub.css('border-left-width')) || 0), width: subW - (parseInt($sub.css('border-left-width')) || 0) - (parseInt($sub.css('border-right-width')) || 0), zIndex: $sub.css('z-index') })
								.eq(horizontalParent && this.opts.bottomToTopSubMenus ? 0 : 1).show();
						
						if (this.isFixed()) {
							$sub.css({ 'touch-action': 'none', '-ms-touch-action': 'none' })
								.bind(getEventsNS([
									[touchEvents() ? 'touchstart touchmove touchend' : 'pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp', function(e) {
										self.menuScrollTouch($sub, e);
									}]
								], eNS));
						}
					}
				}
				$sub.css({ top: 'auto', left: '0', marginLeft: x, marginTop: y - itemH });				
				this.menuIframeShim($sub);
				if ($sub.dataSM('ie-shim')) {
					$sub.dataSM('ie-shim').css({ zIndex: $sub.css('z-index'), width: subW, height: subH, marginLeft: x, marginTop: y - itemH });
				}
			},
			menuScroll: function($sub, once, step) {
				var data = $sub.dataSM('scroll'),
					$arrows = $sub.dataSM('scroll-arrows'),
					y = parseFloat($sub.css('margin-top')),
					end = data.up ? data.upEnd : data.downEnd,
					diff;
				if (!once && data.velocity) {
					data.velocity *= 0.9;
					diff = data.velocity;
					if (diff < 0.5) {
						this.menuScrollStop($sub);
						return;
					}
				} else {
					diff = step || (once || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(data.step));
				}
				
				var level = $sub.dataSM('level');
				if (this.visibleSubMenus.length > level) {
					this.menuHideSubMenus(level - 1);
				}
				var newY = data.up && end <= y || !data.up && end >= y ? y : (Math.abs(end - y) > diff ? y + (data.up ? diff : -diff) : end);
				$sub.add($sub.dataSM('ie-shim')).css('margin-top', newY);
				
				if (mouse && (data.up && newY > data.downEnd || !data.up && newY < data.upEnd)) {
					$arrows.eq(data.up ? 1 : 0).show();
				}
				
				if (newY == end) {
					if (mouse) {
						$arrows.eq(data.up ? 0 : 1).hide();
					}
					this.menuScrollStop($sub);
				} else if (!once) {
					if (this.opts.scrollAccelerate && data.step < this.opts.scrollStep) {
						data.step += 0.5;
					}
					var self = this;
					this.scrollTimeout = setTimeout(function() { self.menuScroll($sub); }, this.opts.scrollInterval);
				}
			},
			menuScrollMousewheel: function($sub, e) {
				if (this.getClosestMenu(e.target) == $sub[0]) {
					e = e.originalEvent;
					var up = (e.wheelDelta || -e.detail) > 0;
					if ($sub.dataSM('scroll-arrows').eq(up ? 0 : 1).is(':visible')) {
						$sub.dataSM('scroll').up = up;
						this.menuScroll($sub, true);
					}
				}
				e.preventDefault();
			},
			menuScrollOut: function($sub, e) {
				if (mouse) {
					if (!/^scroll-(up|down)/.test((e.relatedTarget || '').className) && ($sub[0] != e.relatedTarget && !$.contains($sub[0], e.relatedTarget) || this.getClosestMenu(e.relatedTarget) != $sub[0])) {
						$sub.dataSM('scroll-arrows').css('visibility', 'hidden');
					}
				}
			},
			menuScrollOver: function($sub, e) {
				if (mouse) {
					if (!/^scroll-(up|down)/.test(e.target.className) && this.getClosestMenu(e.target) == $sub[0]) {
						this.menuScrollRefreshData($sub);
						var data = $sub.dataSM('scroll');
						$sub.dataSM('scroll-arrows').eq(0).css('margin-top', data.upEnd).end()
							.eq(1).css('margin-top', data.downEnd + data.subH - data.arrowDownH).end()
							.css('visibility', 'visible');
					}
				}
			},
			menuScrollRefreshData: function($sub) {
				var data = $sub.dataSM('scroll'),
					$win = $(window),
					vportY = $win.scrollTop() - $sub.dataSM('parent-a').offset().top - data.itemH;
				$.extend(data, {
					upEnd: vportY,
					downEnd: vportY + this.getViewportHeight() - data.subH
				});
			},
			menuScrollStop: function($sub) {
				if (this.scrollTimeout) {
					clearTimeout(this.scrollTimeout);
					this.scrollTimeout = 0;
					$.extend($sub.dataSM('scroll'), {
						step: 1,
						velocity: 0
					});
					return true;
				}
			},
			menuScrollTouch: function($sub, e) {
				e = e.originalEvent;
				if (isTouchEvent(e)) {
					var touchPoint = this.getTouchPoint(e);					
					if (this.getClosestMenu(touchPoint.target) == $sub[0]) {
						var data = $sub.dataSM('scroll');
						if (/(start|down)$/i.test(e.type)) {
							if (this.menuScrollStop($sub)) {								
								e.preventDefault();
								this.isTouchScrolling = true;
							} else {
								this.isTouchScrolling = false;
							}							
							this.menuScrollRefreshData($sub);
							
							$.extend(data, {
								touchY: touchPoint.pageY,
								touchTimestamp: e.timeStamp,
								velocity: 0
							});
						} else if (/move$/i.test(e.type)) {
							var prevY = data.touchY;
							if (prevY !== undefined && prevY != touchPoint.pageY) {
								this.isTouchScrolling = true;
								$.extend(data, {
									up: prevY < touchPoint.pageY,
									touchY: touchPoint.pageY,
									touchTimestamp: e.timeStamp,
									velocity: data.velocity + Math.abs(touchPoint.pageY - prevY) * 0.5
								});
								this.menuScroll($sub, true, Math.abs(data.touchY - prevY));
							}
							e.preventDefault();
						} else { 
							if (data.touchY !== undefined) {								
								if (e.timeStamp - data.touchTimestamp < 120 && data.velocity > 0) {
									data.velocity *= 0.5;
									this.menuScrollStop($sub);
									this.menuScroll($sub);
									e.preventDefault();
								}
								delete data.touchY;
							}
						}
					}
				}
			},
			menuShow: function($sub) {
				if (!$sub.dataSM('beforefirstshowfired')) {
					$sub.dataSM('beforefirstshowfired', true);
					if (this.$root.triggerHandler('beforefirstshow.smapi', $sub[0]) === false) {
						return;
					}
				}
				if (this.$root.triggerHandler('beforeshow.smapi', $sub[0]) === false) {
					return;
				}
				this.menuFixLayout($sub);
				$sub.stop(true, true);
				if (!$sub.is(':visible')) {					
					$sub.css('z-index', this.zIndexInc = (this.zIndexInc || this.getStartZIndex()) + 1);					
					if (this.opts.keepHighlighted || this.isCollapsible()) {
						$sub.dataSM('parent-a').addClass('highlighted');
					}					
					if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
						$sub.css({ width: 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
						if (this.opts.subMenusMinWidth) {
						 	$sub.css('min-width', this.opts.subMenusMinWidth);
						}
						if (this.opts.subMenusMaxWidth) {
						 	var noMaxWidth = this.getWidth($sub);
						 	$sub.css('max-width', this.opts.subMenusMaxWidth);
							if (noMaxWidth > this.getWidth($sub)) {
								$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
							}
						}
					}
					this.menuPosition($sub);					
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').insertBefore($sub);
					}
					var complete = function() {						
						$sub.css('overflow', '');
					};
					
					if (this.isCollapsible()) {
						if (this.opts.collapsibleShowFunction) {
							this.opts.collapsibleShowFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.collapsibleShowDuration, complete);
						}
					} else {
						if (this.opts.showFunction) {
							this.opts.showFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.showDuration, complete);
						}
					}					
					this.visibleSubMenus[$sub.dataSM('level') - 1] = $sub;
					this.$root.triggerHandler('show.smapi', $sub[0]);
				}
			},
			popupHide: function(noHideTimeout) {
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				var self = this;
				this.hideTimeout = setTimeout(function() {
					self.menuHideAll();
				}, noHideTimeout ? 1 : this.opts.hideTimeout);
			},
			popupShow: function(left, top) {
				if (!this.opts.isPopup) {
					alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				this.menuFixLayout(this.$root);
				this.$root.stop(true, true);
				if (!this.$root.is(':visible')) {
					this.$root.css({ left: left, top: top });					
					this.menuIframeShim(this.$root);
					if (this.$root.dataSM('ie-shim')) {
						this.$root.dataSM('ie-shim').css({ zIndex: this.$root.css('z-index'), width: this.getWidth(this.$root), height: this.getHeight(this.$root), left: left, top: top }).insertBefore(this.$root);
					}					
					var self = this,
						complete = function() {
							self.$root.css('overflow', '');
						};
					if (this.opts.showFunction) {
						this.opts.showFunction.call(this, this.$root, complete);
					} else {
						this.$root.show(this.opts.showDuration, complete);
					}
					this.visibleSubMenus[0] = this.$root;
				}
			},
			refresh: function() {
				this.menuHideAll();
				this.$root.find('ul').each(function() {
						var $this = $(this);
						if ($this.dataSM('scroll-arrows')) {
							$this.dataSM('scroll-arrows').remove();
						}
					})
					.removeDataSM('in-mega')
					.removeDataSM('shown-before')
					.removeDataSM('ie-shim')
					.removeDataSM('scroll-arrows')
					.removeDataSM('parent-a')
					.removeDataSM('level')
					.removeDataSM('beforefirstshowfired');
				this.$root.find('a.has-submenu').removeClass('has-submenu')
					.parent().removeDataSM('sub');
				if (this.opts.subIndicators) {
					this.$root.find('span.sub-arrow').remove();
				}
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.subMenus = [];
				this.init(true);
			},
			rootOut: function(e) {
				if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				if (!this.opts.showOnClick || !this.opts.hideOnClick) {
					var self = this;
					this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, this.opts.hideTimeout);
				}
			},
			rootOver: function(e) {
				if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
			},
			winResize: function(e) {
				if (!this.handleEvents()) {					
					if (this.$disableOverlay) {
						var pos = this.$root.offset();
	 					this.$disableOverlay.css({
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight()
						});
					}
					return;
				}
				
				if (!this.isCollapsible() && (!('onorientationchange' in window) || e.type == 'orientationchange')) {
					if (this.activatedItems.length) {
						this.activatedItems[this.activatedItems.length - 1][0].blur();
					}
					this.menuHideAll();
				}
			}
		}
	});

	$.fn.dataSM = function(key, val) {
		if (val) {
			return this.data(key + '_smartmenus', val);
		}
		return this.data(key + '_smartmenus');
	}

	$.fn.removeDataSM = function(key) {
		return this.removeData(key + '_smartmenus');
	}

	$.fn.smartmenus = function(options) {
		if (typeof options == 'string') {
			var args = arguments,
				method = options;
			Array.prototype.shift.call(args);
			return this.each(function() {
				var smartmenus = $(this).data('smartmenus');
				if (smartmenus && smartmenus[method]) {
					smartmenus[method].apply(smartmenus, args);
				}
			});
		}
		var opts = $.extend({}, $.fn.smartmenus.defaults, options);
		return this.each(function() {
			new $.SmartMenus(this, opts);
		});
	}

	
	$.fn.smartmenus.defaults = {
		isPopup:		false,		
		mainMenuSubOffsetX:	0,		
		mainMenuSubOffsetY:	0,		
		subMenusSubOffsetX:	0,
		subMenusSubOffsetY:	0,
		subMenusMinWidth:	'10em',
		subMenusMaxWidth:	'80em',
		subIndicators: 		true,
		subIndicatorsPos: 	'prepend',
		subIndicatorsText:	'+',
		scrollStep: 		30,
		scrollInterval:		30,
		scrollAccelerate:	true,
		showTimeout:		0,
		hideTimeout:		0,
		showDuration:		0,
		showFunction:		null,
		hideDuration:		0,		
		hideFunction:		function($ul, complete) { $ul.fadeOut(200, complete); },			
		collapsibleShowDuration:0,		
		collapsibleShowFunction:function($ul, complete) { $ul.slideDown(200, complete); },
		collapsibleHideDuration:0,		
		collapsibleHideFunction:function($ul, complete) { $ul.slideUp(200, complete); },
		showOnClick:		false,
		hideOnClick:		false,
		keepInViewport:		true,
		keepHighlighted:	true,
		markCurrentItem:	false,
		markCurrentTree:	true,
		rightToLeftSubMenus:	false,
		bottomToTopSubMenus:	false,
		overlapControlsInIE:	true
	};

})(jQuery);

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*!
 * jQuery mmenu v7.2.2
 * @requires jQuery 1.7.0 or later
*/
!function(h){var n,p,o,a,t,f="mmenu",e="7.2.2";h[f]&&h[f].version>e||(h[f]=function(t,e,n){return this.$menu=t,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=e,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},h[f].version=e,h[f].uniqueId=0,h[f].wrappers={},h[f].addons={},h[f].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},h[f].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,language:null,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},h[f].prototype={getInstance:function(){return this},initPanels:function(t){this._initPanels(t)},openPanel:function(t,e){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+p.panel)||(t=t.closest("."+p.panel)),t.is("."+p.panel))){var n=this;if("boolean"!=typeof e&&(e=!0),t.parent("."+p.listitem+"_vertical").length)t.parents("."+p.listitem+"_vertical").addClass(p.listitem+"_opened").children("."+p.panel).removeClass(p.hidden),this.openPanel(t.parents("."+p.panel).not(function(){return h(this).parent("."+p.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(p.panel+"_opened"))return;var i=this.$pnls.children("."+p.panel),s=this.$pnls.children("."+p.panel+"_opened");if(!h[f].support.csstransitions)return s.addClass(p.hidden).removeClass(p.panel+"_opened"),t.removeClass(p.hidden).addClass(p.panel+"_opened"),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);i.not(t).removeClass(p.panel+"_opened-parent");for(var a=t.data(o.parent);a;)(a=a.closest("."+p.panel)).parent("."+p.listitem+"_vertical").length||a.addClass(p.panel+"_opened-parent"),a=a.data(o.parent);i.removeClass(p.panel+"_highest").not(s).not(t).addClass(p.hidden),t.removeClass(p.hidden);var r=function(){s.removeClass(p.panel+"_opened"),t.addClass(p.panel+"_opened"),t.hasClass(p.panel+"_opened-parent")?(s.addClass(p.panel+"_highest"),t.removeClass(p.panel+"_opened-parent")):(s.addClass(p.panel+"_opened-parent"),t.addClass(p.panel+"_highest")),n.trigger("openPanel:start",t)},l=function(){s.removeClass(p.panel+"_highest").addClass(p.hidden),t.removeClass(p.panel+"_highest"),n.trigger("openPanel:finish",t)};e&&!t.hasClass(p.panel+"_noanimation")?setTimeout(function(){n.__transitionend(t,function(){l()},n.conf.transitionDuration),r()},n.conf.openingInterval):(r(),l())}this.trigger("openPanel:after",t)}},closePanel:function(t){this.trigger("closePanel:before",t);var e=t.parent();e.hasClass(p.listitem+"_vertical")&&(e.removeClass(p.listitem+"_opened"),t.addClass(p.hidden),this.trigger("closePanel",t)),this.trigger("closePanel:after",t)},closeAllPanels:function(t){this.trigger("closeAllPanels:before"),this.$pnls.find("."+p.listview).children().removeClass(p.listitem+"_selected").filter("."+p.listitem+"_vertical").removeClass(p.listitem+"_opened");var e=this.$pnls.children("."+p.panel),n=t&&t.length?t:e.first();this.$pnls.children("."+p.panel).not(n).removeClass(p.panel+"_opened").removeClass(p.panel+"_opened-parent").removeClass(p.panel+"_highest").addClass(p.hidden),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},togglePanel:function(t){var e=t.parent();e.hasClass(p.listitem+"_vertical")&&this[e.hasClass(p.listitem+"_opened")?"closePanel":"openPanel"](t)},setSelected:function(t){this.trigger("setSelected:before",t),this.$menu.find("."+p.listitem+"_selected").removeClass(p.listitem+"_selected"),t.addClass(p.listitem+"_selected"),this.trigger("setSelected:after",t)},bind:function(t,e){this.cbck[t]=this.cbck[t]||[],this.cbck[t].push(e)},trigger:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.cbck[e])for(var n=0,i=this.cbck[e].length;n<i;n++)this.cbck[e][n].apply(this,t)},matchMedia:function(t,e,n){var i={yes:e,no:n};this.mtch[t]=this.mtch[t]||[],this.mtch[t].push(i)},i18n:function(t){return h[f].i18n(t,this.conf.language)},_initHooks:function(){for(var t in this.opts.hooks)this.bind(t,this.opts.hooks[t])},_initWrappers:function(){this.trigger("initWrappers:before");for(var t=0;t<this.opts.wrappers.length;t++){var e=h[f].wrappers[this.opts.wrappers[t]];"function"==typeof e&&e.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){var t;for(t in this.trigger("initAddons:before"),h[f].addons)h[f].addons[t].add.call(this),h[f].addons[t].add=function(){};for(t in h[f].addons)h[f].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;for(var t in this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions}),this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?p.menu+"_"+this.opts.extensions[t].join(" "+p.menu+"_"):"",this.opts.extensions[t]&&function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){h(this).attr("id",p.mm(h(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=h('<div class="'+p.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(p.menu).parent().addClass(p.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var i=h(),s=this,a=function(t){t.filter(s.conf.panelNodetype).each(function(t){var e=s._initPanel(h(this));if(e){s._initNavbar(e),s._initListview(e),i=i.add(e);var n=e.children("."+p.listview).children("li").children(s.conf.panelNodetype).add(e.children("."+s.conf.classNames.panel));n.length&&a(n)}})};a(t),this.trigger("initPanels:after",i)},_initPanel:function(t){this.trigger("initPanel:before",t);if(t.hasClass(p.panel))return t;if(this.__refactorClass(t,this.conf.classNames.panel,p.panel),this.__refactorClass(t,this.conf.classNames.nopanel,p.nopanel),this.__refactorClass(t,this.conf.classNames.inset,p.listview+"_inset"),t.filter("."+p.listview+"_inset").addClass(p.nopanel),t.hasClass(p.nopanel))return!1;var e=t.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;t.removeClass(this.conf.classNames.vertical);var n=t.attr("id")||this.__getUniqueId();t.is("ul, ol")&&(t.removeAttr("id"),t.wrap("<div />"),t=t.parent()),t.attr("id",n),t.addClass(p.panel+" "+p.hidden);var i=t.parent("li");return e?i.addClass(p.listitem+"_vertical"):t.appendTo(this.$pnls),i.length&&(i.data(o.child,t),t.data(o.parent,i)),this.trigger("initPanel:after",t),t},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+p.navbar).length){var e=t.data(o.parent),n=h('<div class="'+p.navbar+'" />'),i=this.__getPanelTitle(t,this.opts.navbar.title),s="";if(e&&e.length){if(e.hasClass(p.listitem+"_vertical"))return;if(e.parent().is("."+p.listview))var a=e.children("a, span").not("."+p.btn+"_next");else a=e.closest("."+p.panel).find('a[href="#'+t.attr("id")+'"]');var r=(e=(a=a.first()).closest("."+p.panel)).attr("id");switch(i=this.__getPanelTitle(t,h("<span>"+a.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":s=a.attr("href");break;case"parent":s="#"+r}n.append('<a class="'+p.btn+" "+p.btn+"_prev "+p.navbar+'__btn" href="#'+r+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(p.panel+"_has-navbar"),n.append('<a class="'+p.navbar+'__title"'+(s.length?' href="'+s+'"':"")+">"+i+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var e=this.__childAddBack(t,"ul, ol");this.__refactorClass(e,this.conf.classNames.nolistview,p.nolistview);var n=e.not("."+p.nolistview).addClass(p.listview).children().addClass(p.listitem);this.__refactorClass(n,this.conf.classNames.selected,p.listitem+"_selected"),this.__refactorClass(n,this.conf.classNames.divider,p.listitem+"_divider"),this.__refactorClass(n,this.conf.classNames.spacer,p.listitem+"_spacer"),n.children("a, span").not("."+p.btn).addClass(p.listitem+"__text");var i=t.data(o.parent);if(i&&i.is("."+p.listitem)&&!i.children("."+p.btn).length){var s=i.children("a, span").first(),a=h('<a class="'+p.btn+" "+p.btn+"_next "+p.listitem+'__btn" href="#'+t.attr("id")+'" />');a.insertAfter(s),s.is("span")&&(a.addClass(p.listitem+"__text").html(s.html()),s.remove())}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var t=this.$pnls.find("."+p.listitem+"_selected").removeClass(p.listitem+"_selected").last().addClass(p.listitem+"_selected"),e=t.length?t.closest("."+p.panel):this.$pnls.children("."+p.panel).first();this.openPanel(e,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var c=this;t.$body.on(a.click+"-oncanvas","a[href]",function(t){var e=h(this),n=e.attr("href"),i=c.$menu.find(e).length,s=e.is("."+p.listitem+" > a"),a=e.is('[rel="external"]')||e.is('[target="_blank"]');if(i&&1<n.length&&"#"==n.slice(0,1))try{var r=c.$menu.find(n);if(r.is("."+p.panel))return c[e.parent().hasClass(p.listitem+"_vertical")?"togglePanel":"openPanel"](r),void t.preventDefault()}catch(t){}var l={close:null,setSelected:null,preventDefault:"#"==n.slice(0,1)};for(var o in h[f].addons){var d=h[f].addons[o].clickAnchor.call(c,e,i,s,a);if(d){if("boolean"==typeof d)return void t.preventDefault();"object"==typeof d&&(l=h.extend({},l,d))}}i&&s&&!a&&(c.__valueOrFn(e,c.opts.onClick.setSelected,l.setSelected)&&c.setSelected(h(t.target).parent()),c.__valueOrFn(e,c.opts.onClick.preventDefault,l.preventDefault)&&t.preventDefault(),c.__valueOrFn(e,c.opts.onClick.close,l.close)&&c.opts.offCanvas&&"function"==typeof c.close&&c.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var n=this;for(var i in this.mtch)!function(){var e=i,t=window.matchMedia(e);n._fireMatchMedia(e,t),t.addListener(function(t){n._fireMatchMedia(e,t)})}()},_fireMatchMedia:function(t,e){for(var n=e.matches?"yes":"no",i=0;i<this.mtch[t].length;i++)this.mtch[t][i][n].call(this)},_getOriginalMenuId:function(){var t=this.$menu.attr("id");return this.conf.clone&&t&&t.length&&(t=p.umm(t)),t},__api:function(){var n=this,i={};return h.each(this._api,function(t){var e=this;i[e]=function(){var t=n[e].apply(n,arguments);return void 0===t?i:t}}),i},__valueOrFn:function(t,e,n){if("function"==typeof e){var i=e.call(t[0]);if(void 0!==i)return i}return"function"!=typeof e&&void 0!==e||void 0===n?e:n},__getPanelTitle:function(t,e){var n;return"function"==typeof this.opts.navbar.title&&(n=this.opts.navbar.title.call(t[0])),void 0===n&&(n=t.data(o.title)),void 0!==n?n:"string"==typeof e?this.i18n(e):this.i18n(h[f].defaults.navbar.title)},__refactorClass:function(t,e,n){return t.filter("."+e).removeClass(e).addClass(n)},__findAddBack:function(t,e){return t.find(e).add(t.filter(e))},__childAddBack:function(t,e){return t.children(e).add(t.filter(e))},__filterListItems:function(t){return t.not("."+p.listitem+"_divider").not("."+p.hidden)},__filterListItemAnchors:function(t){return this.__filterListItems(t).children("a").not("."+p.btn+"_next")},__openPanelWoAnimation:function(t){t.hasClass(p.panel+"_noanimation")||(t.addClass(p.panel+"_noanimation"),this.__transitionend(t,function(){t.removeClass(p.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(t))},__transitionend:function(e,n,t){var i=!1,s=function(t){void 0!==t&&t.target!=e[0]||(i||(e.off(a.transitionend),e.off(a.webkitTransitionEnd),n.call(e[0])),i=!0)};e.on(a.transitionend,s),e.on(a.webkitTransitionEnd,s),setTimeout(s,1.1*t)},__getUniqueId:function(){return p.mm(h[f].uniqueId++)}},h.fn[f]=function(n,i){!function(){if(h[f].glbl)return;t={$wndw:h(window),$docu:h(document),$html:h("html"),$body:h("body")},p={},o={},a={},h.each([p,o,a],function(t,i){i.add=function(t){t=t.split(" ");for(var e=0,n=t.length;e<n;e++)i[t[e]]=i.mm(t[e])}}),p.mm=function(t){return"mm-"+t},p.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),p.umm=function(t){return"mm-"==t.slice(0,3)&&(t=t.slice(3)),t},o.mm=function(t){return"mm-"+t},o.add("parent child title"),a.mm=function(t){return t+".mm"},a.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),h[f]._c=p,h[f]._d=o,h[f]._e=a,h[f].glbl=t}(),n=h.extend(!0,{},h[f].defaults,n),i=h.extend(!0,{},h[f].configuration,i);var s=h();return this.each(function(){var t=h(this);if(!t.data(f)){var e=new h[f](t,n,i);e.$menu.data(f,e.__api()),s=s.add(e.$menu)}}),s},h[f].i18n=(n={},function(t,e){switch(typeof t){case"object":return"string"==typeof e&&(void 0===n[e]&&(n[e]={}),h.extend(n[e],t)),n;case"string":return"string"==typeof e&&void 0!==n[e]&&n[e][t]||t;case"undefined":default:return n}}),h[f].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:"undefined"==typeof Modernizr||void 0===Modernizr.csstransitions||Modernizr.csstransitions})}(jQuery);
!function(r){var s,i,o,a,t="mmenu",p="offCanvas";r[t].addons[p]={setup:function(){if(this.opts[p]){var e=this.opts[p],i=this.conf[p];a=r[t].glbl,this._api=r.merge(this._api,["open","close","setPage"]),"object"!=typeof e&&(e={}),e=this.opts[p]=r.extend(!0,{},r[t].defaults[p],e),"string"!=typeof i.page.selector&&(i.page.selector="> "+i.page.nodetype),this.vars.opened=!1;var o=[s.menu+"_offcanvas"];this.bind("initMenu:after",function(){var e=this;this._initBlocker(),this.setPage(a.$page),this["_initWindow_"+p](),this.$menu.addClass(o.join(" ")).parent("."+s.wrapper).removeClass(s.wrapper),this.$menu[i.menu.insertMethod](i.menu.insertSelector);var t=window.location.hash;if(t){var n=this._getOriginalMenuId();n&&n==t.slice(1)&&setTimeout(function(){e.open()},1e3)}}),this.bind("setPage:after",function(e){a.$blck&&a.$blck.children("a").attr("href","#"+e.attr("id"))}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initBlocker:after:sr-text",function(){a.$blck.children("a").html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu)))})}},add:function(){s=r[t]._c,i=r[t]._d,o=r[t]._e,s.add("slideout page no-csstransforms3d"),i.add("style")},clickAnchor:function(e,t){var n=this;if(this.opts[p]){var i=this._getOriginalMenuId();if(i&&e.is('[href="#'+i+'"]')){if(t)return this.open(),!0;var o=e.closest("."+s.menu);if(o.length){var r=o.data("mmenu");if(r&&r.close)return r.close(),n.__transitionend(o,function(){n.open()},n.conf.transitionDuration),!0}return this.open(),!0}if(a.$page)return(i=a.$page.first().attr("id"))&&e.is('[href="#'+i+'"]')?(this.close(),!0):void 0}}},r[t].defaults[p]={blockUI:!0,moveBackground:!0},r[t].configuration[p]={menu:{insertMethod:"prependTo",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[],wrapIfNeeded:!0}},r[t].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},r[t].prototype._openSetup=function(){var e=this,t=this.opts[p];this.closeAllOthers(),a.$page.each(function(){r(this).data(i.style,r(this).attr("style")||"")}),a.$wndw.trigger(o.resize+"-"+p,[!0]);var n=[s.wrapper+"_opened"];t.blockUI&&n.push(s.wrapper+"_blocking"),"modal"==t.blockUI&&n.push(s.wrapper+"_modal"),t.moveBackground&&n.push(s.wrapper+"_background"),a.$html.addClass(n.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.menu+"_opened")},r[t].prototype._openFinish=function(){var e=this;this.__transitionend(a.$page.first(),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),a.$html.addClass(s.wrapper+"_opening")},r[t].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var t=this;this.__transitionend(a.$page.first(),function(){t.$menu.removeClass(s.menu+"_opened");var e=[s.wrapper+"_opened",s.wrapper+"_blocking",s.wrapper+"_modal",s.wrapper+"_background"];a.$html.removeClass(e.join(" ")),a.$page.each(function(){var e=r(this).data(i.style);r(this).attr("style",e)}),t.vars.opened=!1,t.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),a.$html.removeClass(s.wrapper+"_opening"),this.trigger("close:after")}},r[t].prototype.closeAllOthers=function(){a.$body.find("."+s.menu+"_offcanvas").not(this.$menu).each(function(){var e=r(this).data(t);e&&e.close&&e.close()})},r[t].prototype.setPage=function(e){this.trigger("setPage:before",e);var t=this,n=this.conf[p];e&&e.length||(e=a.$body.find(n.page.selector).not("."+s.menu).not("."+s.wrapper+"__blocker"),n.page.noSelector.length&&(e=e.not(n.page.noSelector.join(", "))),1<e.length&&n.page.wrapIfNeeded&&(e=e.wrapAll("<"+this.conf[p].page.nodetype+" />").parent())),e.addClass(s.page+" "+s.slideout).each(function(){r(this).attr("id",r(this).attr("id")||t.__getUniqueId())}),a.$page=e,this.trigger("setPage:after",e)},r[t].prototype["_initWindow_"+p]=function(){a.$wndw.off(o.keydown+"-"+p).on(o.keydown+"-"+p,function(e){if(a.$html.hasClass(s.wrapper+"_opened")&&9==e.keyCode)return e.preventDefault(),!1});var i=0;a.$wndw.off(o.resize+"-"+p).on(o.resize+"-"+p,function(e,t){if(1==a.$page.length&&(t||a.$html.hasClass(s.wrapper+"_opened"))){var n=a.$wndw.height();(t||n!=i)&&(i=n,a.$page.css("minHeight",n))}})},r[t].prototype._initBlocker=function(){var t=this,e=this.opts[p],n=this.conf[p];this.trigger("initBlocker:before"),e.blockUI&&(a.$blck||(a.$blck=r('<div class="'+s.wrapper+"__blocker "+s.slideout+'" />').append("<a />")),a.$blck.appendTo(n.menu.insertSelector).off(o.touchstart+"-"+p+" "+o.touchmove+"-"+p).on(o.touchstart+"-"+p+" "+o.touchmove+"-"+p,function(e){e.preventDefault(),e.stopPropagation(),a.$blck.trigger(o.mousedown+"-"+p)}).off(o.mousedown+"-"+p).on(o.mousedown+"-"+p,function(e){e.preventDefault(),a.$html.hasClass(s.wrapper+"_modal")||(t.closeAllOthers(),t.close())}),this.trigger("initBlocker:after"))}}(jQuery);
!function(n){var s,o,i="mmenu",e="screenReader";n[i].addons[e]={setup:function(){var r=this,t=this.opts[e],a=this.conf[e];n[i].glbl,"boolean"==typeof t&&(t={aria:t,text:t}),"object"!=typeof t&&(t={}),(t=this.opts[e]=n.extend(!0,{},n[i].defaults[e],t)).aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("initOpened:after",function(){this.trigger("initOpened:after:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+s.listview).children().each(function(){r.__sr_aria(n(this),"hidden",n(this).is("."+s.hidden))})}),this.bind("openPanel:start",function(t){var i=this.$menu.find("."+s.panel).not(t).not(t.parents("."+s.panel)),n=t.add(t.find("."+s.listitem+"_vertical ."+s.listitem+"_opened").children("."+s.panel));this.__sr_aria(i,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(t){this.__sr_aria(t,"hidden",!0)}),this.bind("initPanels:after",function(t){var i=t.find("."+s.btn).each(function(){r.__sr_aria(n(this),"owns",n(this).attr("href").replace("#",""))});this.__sr_aria(i,"haspopup",!0)}),this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar);this.__sr_aria(i,"hidden",!t.hasClass(s.panel+"_has-navbar"))}),t.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar),n=!!i.children("."+s.btn+"_prev").length;this.__sr_aria(i.children("."+s.title),"hidden",n)})),t.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])}),this.bind("initBlocker:after",function(){this.trigger("initBlocker:after:sr-text")})}),this.bind("initNavbar:after",function(t){var i=t.children("."+s.navbar),n=this.i18n(a.text.closeSubmenu);i.children("."+s.btn+"_prev").html(this.__sr_text(n))}),this.bind("initListview:after",function(t){var i=t.data(o.parent);if(i&&i.length){var n=i.children("."+s.btn+"_next"),e=this.i18n(a.text[n.parent().is("."+s.listitem+"_vertical")?"toggleSubmenu":"openSubmenu"]);n.append(r.__sr_text(e))}}))},add:function(){s=n[i]._c,o=n[i]._d,n[i]._e,s.add("sronly")},clickAnchor:function(t,i){}},n[i].defaults[e]={aria:!0,text:!0},n[i].configuration[e]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},n[i].prototype.__sr_aria=function(t,i,n){t.prop("aria-"+i,n)[n?"attr":"removeAttr"]("aria-"+i,n)},n[i].prototype.__sr_role=function(t,i){t.prop("role",i)[i?"attr":"removeAttr"]("role",i)},n[i].prototype.__sr_text=function(t){return'<span class="'+s.sronly+'">'+t+"</span>"}}(jQuery);
!function(n){var e,r,s,t="mmenu",i="scrollBugFix";n[t].addons[i]={setup:function(){var o=this.opts[i];this.conf[i];s=n[t].glbl,n[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof o&&(o={fix:o}),"object"!=typeof o&&(o={}),(o=this.opts[i]=n.extend(!0,{},n[t].defaults[i],o)).fix&&(this.bind("open:start",function(){this.$pnls.children("."+e.panel+"_opened").scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+i]()})))},add:function(){e=n[t]._c,n[t]._d,r=n[t]._e},clickAnchor:function(o,t){}},n[t].defaults[i]={fix:!0},n[t].prototype["_initWindow_"+i]=function(){var o=this;n(document).off(r.touchmove+"-"+i).on(r.touchmove+"-"+i,function(o){s.$html.hasClass(e.wrapper+"_opened")&&o.preventDefault()});var t=!1;s.$body.off(r.touchstart+"-"+i).on(r.touchstart+"-"+i,"."+e.panels+"> ."+e.panel,function(o){s.$html.hasClass(e.wrapper+"_opened")&&(t||(t=!0,0===o.currentTarget.scrollTop?o.currentTarget.scrollTop=1:o.currentTarget.scrollHeight===o.currentTarget.scrollTop+o.currentTarget.offsetHeight&&(o.currentTarget.scrollTop-=1),t=!1))}).off(r.touchmove+"-"+i).on(r.touchmove+"-"+i,"."+e.panels+"> ."+e.panel,function(o){s.$html.hasClass(e.wrapper+"_opened")&&n(this)[0].scrollHeight>n(this).innerHeight()&&o.stopPropagation()}),s.$wndw.off(r.orientationchange+"-"+i).on(r.orientationchange+"-"+i,function(){o.$pnls.children("."+e.panel+"_opened").scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}}(jQuery);
!function(s){var a,e="mmenu",i="autoHeight";s[e].addons[i]={setup:function(){var h=this.opts[i];this.conf[i];if(s[e].glbl,"boolean"==typeof h&&h&&(h={height:"auto"}),"string"==typeof h&&(h={height:h}),"object"!=typeof h&&(h={}),"auto"==(h=this.opts[i]=s.extend(!0,{},s[e].defaults[i],h)).height||"highest"==h.height){this.bind("initMenu:after",function(){this.$menu.addClass(a.menu+"_autoheight")});var t=function(t){if(!this.opts.offCanvas||this.vars.opened){var e=Math.max(parseInt(this.$pnls.css("top"),10),0)||0,i=Math.max(parseInt(this.$pnls.css("bottom"),10),0)||0,n=0;this.$menu.addClass(a.menu+"_autoheight-measuring"),"auto"==h.height?((t=t||this.$pnls.children("."+a.panel+"_opened")).parent("."+a.listitem+"_vertical").length&&(t=t.parents("."+a.panel).not(function(){return s(this).parent("."+a.listitem+"_vertical").length})),t.length||(t=this.$pnls.children("."+a.panel)),n=t.first().outerHeight()):"highest"==h.height&&this.$pnls.children("."+a.panel).each(function(){var t=s(this);t.parent("."+a.listitem+"_vertical").length&&(t=t.parents("."+a.panel).not(function(){return s(this).parent("."+a.listitem+"_vertical").length})),n=Math.max(n,t.first().outerHeight())}),this.$menu.height(n+e+i).removeClass(a.menu+"_autoheight-measuring")}};this.opts.offCanvas&&this.bind("open:start",t),"highest"==h.height&&this.bind("initPanels:after",t),"auto"==h.height&&(this.bind("updateListview",t),this.bind("openPanel:start",t),this.bind("closePanel",t))}},add:function(){a=s[e]._c,s[e]._d,s[e]._e.add("resize")},clickAnchor:function(t,e){}},s[e].defaults[i]={height:"default"}}(jQuery);
!function(s){var a,h="mmenu",c="backButton";s[h].addons[c]={setup:function(){if(this.opts.offCanvas){var o=this,n=this.opts[c];this.conf[c];s[h].glbl,"boolean"==typeof n&&(n={close:n}),"object"!=typeof n&&(n={}),n=s.extend(!0,{},s[h].defaults[c],n);var e="#"+this.$menu.attr("id");if(n.close){var i=[];function t(){i=[e],this.$pnls.children("."+a.panel+"_opened-parent").add(o.$pnls.children("."+a.panel+"_opened")).each(function(){i.push("#"+s(this).attr("id"))})}this.bind("open:finish",function(){history.pushState(null,document.title,e)}),this.bind("open:finish",t),this.bind("openPanel:finish",t),this.bind("close:finish",function(){i=[],history.back(),history.pushState(null,document.title,location.pathname+location.search)}),s(window).on("popstate",function(n){if(o.vars.opened&&i.length){var t=(i=i.slice(0,-1))[i.length-1];t==e?o.close():(o.openPanel(s(t)),history.pushState(null,document.title,e))}})}n.open&&s(window).on("popstate",function(n){o.vars.opened||location.hash!=e||o.open()})}},add:function(){window.history&&window.history.pushState?(a=s[h]._c,s[h]._d,s[h]._e):s[h].addons[c].setup=function(){}},clickAnchor:function(n,t){}},s[h].defaults[c]={close:!1,open:!1}}(jQuery);
!function(t){var o,d,n="mmenu",p="columns";t[n].addons[p]={setup:function(){var i=this.opts[p];this.conf[p];if(t[n].glbl,"boolean"==typeof i&&(i={add:i}),"number"==typeof i&&(i={add:!0,visible:i}),"object"!=typeof i&&(i={}),"number"==typeof i.visible&&(i.visible={min:i.visible,max:i.visible}),(i=this.opts[p]=t.extend(!0,{},t[n].defaults[p],i)).add){i.visible.min=Math.max(1,Math.min(6,i.visible.min)),i.visible.max=Math.max(i.visible.min,Math.min(6,i.visible.max));for(var a="",s="",e=0;e<=i.visible.max;e++)a+=" "+o.menu+"_columns-"+e,s+=" "+o.panel+"_columns-"+e;a.length&&(a=a.slice(1),s=s.slice(1));var l=s+" "+o.panel+"_opened "+o.panel+"_opened-parent "+o.panel+"_highest";this.bind("openPanel:before",function(e){var n=e.data(d.parent);if(n&&(n=n.closest("."+o.panel)).length){var i=n.attr("class");if(i&&(i=i.split(o.panel+"_columns-")[1]))for(i=parseInt(i.split(" ")[0],10)+1;0<i;){var a=this.$pnls.children("."+o.panel+"_columns-"+i);if(!a.length){i=-1;break}i++,a.removeClass(l).addClass(o.hidden)}}}),this.bind("openPanel:start",function(e){var n=this.$pnls.children("."+o.panel+"_opened-parent").length;e.hasClass(o.panel+"_opened-parent")||n++,n=Math.min(i.visible.max,Math.max(i.visible.min,n)),this.$menu.removeClass(a).addClass(o.menu+"_columns-"+n),this.$pnls.children("."+o.panel).removeClass(s).filter("."+o.panel+"_opened-parent").add(e).slice(-i.visible.max).each(function(e){t(this).addClass(o.panel+"_columns-"+e)})})}},add:function(){o=t[n]._c,d=t[n]._d,t[n]._e},clickAnchor:function(e,n){}},t[n].defaults[p]={add:!1,visible:{min:1,max:3}}}(jQuery);
!function(a){var s,d,n="mmenu",c="counters";a[n].addons[c]={setup:function(){var i=this,e=this.opts[c];this.conf[c];if(a[n].glbl,"boolean"==typeof e&&(e={add:e,update:e}),"object"!=typeof e&&(e={}),e=this.opts[c]=a.extend(!0,{},a[n].defaults[c],e),this.bind("initListview:after",function(t){var n=this.conf.classNames[c].counter;this.__refactorClass(t.find("."+n),n,s.counter)}),e.add&&this.bind("initListview:after",function(t){var n;switch(e.addTo){case"panels":n=t;break;default:n=t.filter(e.addTo)}n.each(function(){var t=a(this).data(d.parent);t&&(t.find("."+s.counter).length||t.children("."+s.btn).prepend(a('<span class="'+s.counter+'" />')))})}),e.update){var t=function(t){(t=t||this.$pnls.children("."+s.panel)).each(function(){var t=a(this),n=t.data(d.parent);if(n){var e=n.find("."+s.counter);e.length&&(t=t.children("."+s.listview)).length&&e.html(i.__filterListItems(t.children()).length)}})};this.bind("initListview:after",t),this.bind("updateListview",t)}},add:function(){s=a[n]._c,d=a[n]._d,a[n]._e,s.add("counter")},clickAnchor:function(t,n){}},a[n].defaults[c]={add:!1,addTo:"panels",count:!1},a[n].configuration.classNames[c]={counter:"Counter"}}(jQuery);
!function(d){var l,i,t="mmenu",a="dividers";d[t].addons[a]={setup:function(){var e=this,n=this.opts[a];this.conf[a];if(d[t].glbl,"boolean"==typeof n&&(n={add:n,fixed:n}),"object"!=typeof n&&(n={}),(n=this.opts[a]=d.extend(!0,{},d[t].defaults[a],n)).type&&this.bind("initMenu:after",function(){this.$menu.addClass(l.menu+"_"+a+"-"+n.type)}),n.add&&this.bind("initListview:after",function(i){var t;switch(n.addTo){case"panels":t=i;break;default:t=i.filter(n.addTo)}t.length&&(t.children("."+l.listitem+"_divider").remove(),t.find("."+l.listview).each(function(){var t="";e.__filterListItems(d(this).children()).each(function(){var i=d.trim(d(this).children("a, span").text()).slice(0,1).toLowerCase();i!=t&&i.length&&(t=i,d('<li class="'+l.listitem+" "+l.listitem+'_divider">'+i+"</li>").insertBefore(this))})}))}),n.fixed){this.bind("initPanels:after",function(){void 0===this.$fixeddivider&&(this.$fixeddivider=d('<ul class="'+l.listview+" "+l.listview+'_fixeddivider"><li class="'+l.listitem+" "+l.listitem+'_divider"></li></ul>').appendTo(this.$pnls).children())});var s=function(i){if(!(i=i||this.$pnls.children("."+l.panel+"_opened")).is(":hidden")){var t=i.find("."+l.listitem+"_divider").not("."+l.hidden),e=i.scrollTop()||0,n="";t.each(function(){d(this).position().top+e<e+1&&(n=d(this).text())}),this.$fixeddivider.text(n),this.$pnls[n.length?"addClass":"removeClass"](l.panel+"_dividers")}};this.bind("open:start",s),this.bind("openPanel:start",s),this.bind("updateListview",s),this.bind("initPanel:after",function(t){t.off(i.scroll+"-"+a+" "+i.touchmove+"-"+a).on(i.scroll+"-"+a+" "+i.touchmove+"-"+a,function(i){t.hasClass(l.panel+"_opened")&&s.call(e,t)})})}},add:function(){l=d[t]._c,d[t]._d,(i=d[t]._e).add("scroll")},clickAnchor:function(i,t){}},d[t].defaults[a]={add:!1,addTo:"panels",fixed:!1,type:null}}(jQuery);
!function(y){var x,p,o,n="mmenu",O="drag";function $(n,e,t){return n<e&&(n=e),t<n&&(n=t),n}y[n].addons[O]={setup:function(){if(this.opts.offCanvas){var e=this.opts[O],t=this.conf[O];o=y[n].glbl,"boolean"==typeof e&&(e={menu:e,panels:e}),"object"!=typeof e&&(e={}),"boolean"==typeof e.menu&&(e.menu={open:e.menu}),"object"!=typeof e.menu&&(e.menu={}),"boolean"==typeof e.panels&&(e.panels={close:e.panels}),"object"!=typeof e.panels&&(e.panels={}),(e=this.opts[O]=y.extend(!0,{},y[n].defaults[O],e)).menu.open&&this.bind("setPage:after",function(){(function(e,t,o){var i,a,s,r,p=this,c={events:"panleft panright",typeLower:"x",typeUpper:"X",open_dir:"right",close_dir:"left",negative:!1},d="width",u=c.open_dir,f=function(n){n<=e.maxStartPos&&(m=1)},l=function(){return y("."+x.slideout)},m=0,h=0,g=0,n=this.opts.extensions.all,_=void 0===n?"left":-1<n.indexOf(x.menu+"_position-right")?"right":-1<n.indexOf(x.menu+"_position-top")?"top":-1<n.indexOf(x.menu+"_position-bottom")?"bottom":"left",v=void 0===n?"back":-1<n.indexOf(x.menu+"_position-top")||-1<n.indexOf(x.menu+"_position-bottom")||-1<n.indexOf(x.menu+"_position-front")?"front":"back";switch(_){case"top":case"bottom":c.events="panup pandown",c.typeLower="y",c.typeUpper="Y",d="height"}switch(_){case"right":case"bottom":c.negative=!0,f=function(n){n>=o.$wndw[d]()-e.maxStartPos&&(m=1)}}switch(_){case"right":c.open_dir="left",c.close_dir="right";break;case"top":c.open_dir="down",c.close_dir="up";break;case"bottom":c.open_dir="up",c.close_dir="down"}switch(v){case"front":l=function(){return p.$menu}}var b=this.__valueOrFn(this.$menu,e.node,o.$page);"string"==typeof b&&(b=y(b));var w=new Hammer(b[0],this.opts[O].vendors.hammer);w.on("panstart",function(n){f(n.center[c.typeLower]),r=l(),u=c.open_dir}),w.on(c.events+" panend",function(n){0<m&&n.preventDefault()}),w.on(c.events,function(n){if(i=n["delta"+c.typeUpper],c.negative&&(i=-i),i!=h&&(u=h<=i?c.open_dir:c.close_dir),(h=i)>e.threshold&&1==m){if(o.$html.hasClass(x.wrapper+"_opened"))return;m=2,p._openSetup(),p.trigger("open:start"),o.$html.addClass(x.dragging),g=$(o.$wndw[d]()*t[d].perc,t[d].min,t[d].max)}2==m&&(a=$(h,10,g)-("front"==v?g:0),c.negative&&(a=-a),s="translate"+c.typeUpper+"("+a+"px )",r.css({"-webkit-transform":"-webkit-"+s,transform:s}))}),w.on("panend",function(n){2==m&&(o.$html.removeClass(x.dragging),r.css("transform",""),p[u==c.open_dir?"_openFinish":"close"]()),m=0})}).call(this,e.menu,t.menu,o)}),e.panels.close&&this.bind("initPanel:after",function(n){(function(n,e,t,o){var i=this,a=n.data(p.parent);if(a){a=a.closest("."+x.panel);var s=new Hammer(n[0],i.opts[O].vendors.hammer),r=null;s.on("panright",function(n){r||(i.openPanel(a),r=setTimeout(function(){clearTimeout(r),r=null},i.conf.openingInterval+i.conf.transitionDuration))})}}).call(this,n,e.panels,t.panels,o)})}},add:function(){if("function"!=typeof Hammer||Hammer.VERSION<2)return y[n].addons[O].add=function(){},void(y[n].addons[O].setup=function(){});x=y[n]._c,p=y[n]._d,y[n]._e,x.add("dragging")},clickAnchor:function(n,e){}},y[n].defaults[O]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},y[n].configuration[O]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}}}(jQuery);
!function(n){var $,s,a,y,t="mmenu",f="dropdown";n[t].addons[f]={setup:function(){if(this.opts.offCanvas){var o=this,x=this.opts[f],b=this.conf[f];if(y=n[t].glbl,"boolean"==typeof x&&x&&(x={drop:x}),"object"!=typeof x&&(x={}),"string"==typeof x.position&&(x.position={of:x.position}),(x=this.opts[f]=n.extend(!0,{},n[t].defaults[f],x)).drop){var g;this.bind("initMenu:after",function(){if(this.$menu.addClass($.menu+"_"+f),"string"!=typeof x.position.of){var t=this._getOriginalMenuId();t&&t.length&&(x.position.of='[href="#'+t+'"]')}"string"==typeof x.position.of&&(g=n(x.position.of),x.event=x.event.split(" "),1==x.event.length&&(x.event[1]=x.event[0]),"hover"==x.event[0]&&g.on(a.mouseenter+"-"+f,function(){o.open()}),"hover"==x.event[1]&&this.$menu.on(a.mouseleave+"-"+f,function(){o.close()}))}),this.bind("open:start",function(){this.$menu.data(s.style,this.$menu.attr("style")||""),y.$html.addClass($.wrapper+"_dropdown")}),this.bind("close:finish",function(){this.$menu.attr("style",this.$menu.data(s.style)),y.$html.removeClass($.wrapper+"_dropdown")});var e=function(t,o){var e,i,n=o[0],s=o[1],a="x"==t?"scrollLeft":"scrollTop",f="x"==t?"outerWidth":"outerHeight",r="x"==t?"left":"top",p="x"==t?"right":"bottom",l="x"==t?"width":"height",h="x"==t?"maxWidth":"maxHeight",u=null,d=y.$wndw[a](),c=g.offset()[r]-=d,m=c+g[f](),v=y.$wndw[l](),w=b.offset.button[t]+b.offset.viewport[t];if(x.position[t])switch(x.position[t]){case"left":case"bottom":u="after";break;case"right":case"top":u="before"}return null===u&&(u=c+(m-c)/2<v/2?"after":"before"),"after"==u?(i=v-((e="x"==t?c:m)+w),n[r]=e+b.offset.button[t],n[p]="auto",x.tip&&s.push($.menu+"_tip-"+("x"==t?"left":"top"))):(i=(e="x"==t?m:c)-w,n[p]="calc( 100% - "+(e-b.offset.button[t])+"px )",n[r]="auto",x.tip&&s.push($.menu+"_tip-"+("x"==t?"right":"bottom"))),x.fitViewport&&(n[h]=Math.min(b[l].max,i)),[n,s]},i=function(t){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(s.style));var o=[{},[]];o=e.call(this,"y",o),o=e.call(this,"x",o),this.$menu.css(o[0]),x.tip&&this.$menu.removeClass($.tipleft+" "+$.tipright+" "+$.tiptop+" "+$.tipbottom).addClass(o[1].join(" "))}};this.bind("open:start",i),y.$wndw.on(a.resize+"-"+f,function(t){i.call(o)}),this.opts.offCanvas.blockUI||y.$wndw.on(a.scroll+"-"+f,function(t){i.call(o)})}}},add:function(){$=n[t]._c,s=n[t]._d,a=n[t]._e,$.add("dropdown"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(t,o){}},n[t].defaults[f]={drop:!1,fitViewport:!0,event:"click",position:{},tip:!0},n[t].configuration[f]={offset:{button:{x:-5,y:5},viewport:{x:20,y:20}},height:{max:880},width:{max:440}}}(jQuery);
!function(c){var f,a,s="mmenu",d="fixedElements";c[s].addons[d]={setup:function(){if(this.opts.offCanvas){this.opts[d];var o=this.conf[d];a=c[s].glbl;this.bind("setPage:after",function(s){var t=this.conf.classNames[d].fixed,i=s.find("."+t);this.__refactorClass(i,t,f.slideout),i[o.elemInsertMethod](o.elemInsertSelector);var e=this.conf.classNames[d].sticky,n=s.find("."+e);this.__refactorClass(n,e,f.sticky),(n=s.find("."+f.sticky)).length&&(this.bind("open:start",function(){if("hidden"==a.$html.css("overflow")){var s=a.$wndw.scrollTop()+o.sticky.offset;n.each(function(){c(this).css("top",parseInt(c(this).css("top"),10)+s)})}}),this.bind("close:finish",function(){n.css("top","")}))})}},add:function(){f=c[s]._c,c[s]._d,c[s]._e,f.add("sticky")},clickAnchor:function(s,t){}},c[s].configuration[d]={sticky:{offset:0},elemInsertMethod:"appendTo",elemInsertSelector:"body"},c[s].configuration.classNames[d]={fixed:"Fixed",sticky:"Sticky"}}(jQuery);
!function(c){var d,s,a,n="mmenu",t="iconbar";c[n].addons[t]={setup:function(){var e=this,o=this.opts[t];this.conf[t];if(c[n].glbl,o instanceof Array&&(o={add:!0,top:o}),o.add){var r=null;if(c.each(["top","bottom"],function(a,n){var t=o[n];t instanceof Array||(t=[t]);for(var e=c('<div class="'+d.iconbar+"__"+n+'" />'),i=0,s=t.length;i<s;i++)e.append(t[i]);e.children().length&&(r||(r=c('<div class="'+d.iconbar+'" />')),r.append(e))}),r&&(this.bind("initMenu:after",function(){var a=d.menu+"_iconbar";o.size&&(a+=" "+d.menu+"_iconbar-"+o.size),this.$menu.addClass(a).prepend(r)}),"tabs"==o.type)){r.addClass(d.iconbar+"_tabs");var i=r.find("a");i.on(a.click+"-"+t,function(a){var n=c(this);if(n.hasClass(d.iconbar+"__tab_selected"))a.stopImmediatePropagation();else try{var t=c(n.attr("href"));t.hasClass(d.panel)&&(a.preventDefault(),a.stopImmediatePropagation(),e.openPanel(t,!1))}catch(a){}}),this.bind("openPanel:start",function a(n){i.removeClass(d.iconbar+"__tab_selected");var t=i.filter('[href="#'+n.attr("id")+'"]');if(t.length)t.addClass(d.iconbar+"__tab_selected");else{var e=n.data(s.parent);e&&e.length&&a(e.closest("."+d.panel))}})}}},add:function(){d=c[n]._c,s=c[n]._d,a=c[n]._e,d.add(t)},clickAnchor:function(a,n){}},c[n].defaults[t]={add:!1,top:[],bottom:[]},c[n].configuration[t]={}}(jQuery);
!function(s){var d,r="mmenu",o="iconPanels";s[r].addons[o]={setup:function(){var n=this,a=this.opts[o],t=(this.conf[o],!1);s[r].glbl,"boolean"==typeof a&&(a={add:a}),"number"!=typeof a&&"string"!=typeof a||(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),"first"==a.visible&&(t=!0,a.visible=1),(a=this.opts[o]=s.extend(!0,{},s[r].defaults[o],a)).visible=Math.min(3,Math.max(1,a.visible)),a.visible++;var l="";if(!t){for(var e=0;e<=a.visible;e++)l+=" "+d.panel+"_iconpanel-"+e;l.length&&(l=l.slice(1))}if(a.add){var i=function(e){if(!e.parent("."+d.listitem+"_vertical").length){var i=n.$pnls.children("."+d.panel);t?i.removeClass(d.panel+"_iconpanel-first").first().addClass(d.panel+"_iconpanel-first"):i.removeClass(l).filter("."+d.panel+"_opened-parent").removeClass(d.hidden).not(function(){return s(this).parent("."+d.listitem+"_vertical").length}).add(e).slice(-a.visible).each(function(e){s(this).addClass(d.panel+"_iconpanel-"+e)})}};this.bind("initMenu:after",function(){var e=[d.menu+"_iconpanel"];a.size&&e.push(d.menu+"_iconpanel-"+a.size),a.hideNavbar&&e.push(d.menu+"_hidenavbar"),a.hideDivider&&e.push(d.menu+"_hidedivider"),this.$menu.addClass(e.join(" "))}),this.bind("openPanel:start",i),this.bind("initPanels:after",function(e){i.call(n,n.$pnls.children("."+d.panel+"_opened"))}),this.bind("initListview:after",function(e){!a.blockPanel||e.parent("."+d.listitem+"_vertical").length||e.children("."+d.panel+"__blocker").length||e.prepend('<a href="#'+e.closest("."+d.panel).attr("id")+'" class="'+d.panel+'__blocker" />')})}},add:function(){d=s[r]._c,s[r]._d,s[r]._e},clickAnchor:function(e,i){}},s[r].defaults[o]={add:!1,blockPanel:!0,hideDivider:!1,hideNavbar:!0,visible:3}}(jQuery);
!function(s){var o,d,a,i,r="mmenu",c="keyboardNavigation";s[r].addons[c]={setup:function(){if(!s[r].support.touch){var e=this.opts[c];this.conf[c];if(i=s[r].glbl,"boolean"!=typeof e&&"string"!=typeof e||(e={enable:e}),"object"!=typeof e&&(e={}),(e=this.opts[c]=s.extend(!0,{},s[r].defaults[c],e)).enable){var n=s('<button class="'+o.tabstart+'" />'),t=s('<button class="'+o.tabend+'" />'),a=s('<button class="'+o.tabend+'" />');this.bind("initMenu:after",function(){e.enhance&&this.$menu.addClass(o.menu+"_keyboardfocus"),this["_initWindow_"+c](e.enhance)}),this.bind("initOpened:before",function(){this.$menu.prepend(n).append(t).children("."+o.mm("navbars-top")+", ."+o.mm("navbars-bottom")).children("."+o.navbar).children("a."+o.title).attr("tabindex",-1)}),this.bind("initBlocker:after",function(){i.$blck.append(a).children("a").addClass(o.tabstart)}),this.bind("open:finish",function(){f.call(this,null,e.enable)}),this.bind("openPanel:finish",function(n){f.call(this,n,e.enable)}),this.bind("initOpened:after:sr-aria",function(){var n=this.$menu.add(i.$blck).children("."+o.tabstart+", ."+o.tabend);this.__sr_aria(n,"hidden",!0),this.__sr_role(n,"presentation")})}}},add:function(){o=s[r]._c,d=s[r]._d,a=s[r]._e,o.add("tabstart tabend"),a.add("focusin keydown")},clickAnchor:function(n,e){}},s[r].defaults[c]={enable:!1,enhance:!1},s[r].configuration[c]={},s[r].prototype["_initWindow_"+c]=function(n){i.$wndw.off(a.keydown+"-offCanvas"),i.$wndw.off(a.focusin+"-"+c).on(a.focusin+"-"+c,function(n){if(i.$html.hasClass(o.wrapper+"_opened")){var e=s(n.target);if(e.is("."+o.tabend)){var t=s();e.parent().is("."+o.menu)&&i.$blck&&(t=i.$blck),e.parent().is("."+o.wrapper+"__blocker")&&(t=i.$body.find("."+o.menu+"_offcanvas").filter("."+o.menu+"_opened")),t.length||(t=e.parent()),t.children("."+o.tabstart).focus()}}}),i.$wndw.off(a.keydown+"-"+c).on(a.keydown+"-"+c,function(n){var e=s(n.target),t=e.closest("."+o.menu);if(t.length){t.data("mmenu");if(e.is("input, textarea"));else switch(n.keyCode){case 13:(e.is(".mm-toggle")||e.is(".mm-check"))&&e.trigger(a.click);break;case 32:case 37:case 38:case 39:case 40:n.preventDefault()}}}),n&&i.$wndw.off(a.keydown+"-"+c).on(a.keydown+"-"+c,function(n){var e=s(n.target),t=e.closest("."+o.menu);if(t.length){var a=t.data("mmenu");if(e.is("input"))switch(n.keyCode){case 27:e.val("")}else switch(n.keyCode){case 8:var i=t.find("."+o.panel+"_opened").data(d.parent);i&&i.length&&a.openPanel(i.closest("."+o.panel));break;case 27:t.hasClass(o.menu+"_offcanvas")&&a.close()}}})};var l="input, select, textarea, button, label, a[href]";function f(n,e){n=n||this.$pnls.children("."+o.panel+"_opened");var t=s(),a=this.$menu.children("."+o.mm("navbars_top")+", ."+o.mm("navbars_bottom")).children("."+o.navbar);a.find(l).filter(":focus").length||("default"==e&&((t=n.children("."+o.listview).find("a[href]").not("."+o.hidden)).length||(t=n.find(l).not("."+o.hidden)),t.length||(t=a.find(l).not("."+o.hidden))),t.length||(t=this.$menu.children("."+o.tabstart)),t.first().focus())}}(jQuery);
!function(e){var i,l="mmenu",t="lazySubmenus";e[l].addons[t]={setup:function(){var n=this.opts[t];this.conf[t];e[l].glbl,"boolean"==typeof n&&(n={load:n}),"object"!=typeof n&&(n={}),(n=this.opts[t]=e.extend(!0,{},e[l].defaults[t],n)).load&&(this.bind("initMenu:after",function(){this.$pnls.find("li").children(this.conf.panelNodetype).not("."+i.inset).not("."+i.nolistview).not("."+i.nopanel).addClass(i.panel+"_lazysubmenu "+i.nolistview+" "+i.nopanel)}),this.bind("initPanels:before",function(n){n=n||this.$pnls.children(this.conf.panelNodetype),this.__findAddBack(n,"."+i.panel+"_lazysubmenu").not("."+i.panel+"_lazysubmenu ."+i.panel+"_lazysubmenu").removeClass(i.panel+"_lazysubmenu "+i.nolistview+" "+i.nopanel)}),this.bind("initOpened:before",function(){var n=this.$pnls.find("."+this.conf.classNames.selected).parents("."+i.panel+"_lazysubmenu");n.length&&(n.removeClass(i.panel+"_lazysubmenu "+i.nolistview+" "+i.nopanel),this.initPanels(n.last()))}),this.bind("openPanel:before",function(n){var e=this.__findAddBack(n,"."+i.panel+"_lazysubmenu").not("."+i.panel+"_lazysubmenu ."+i.panel+"_lazysubmenu");e.length&&this.initPanels(e)}))},add:function(){i=e[l]._c,e[l]._d,e[l]._e},clickAnchor:function(n,e){}},e[l].defaults[t]={load:!1},e[l].configuration[t]={}}(jQuery);
!function(b){var p,h="mmenu",m="navbars";b[h].addons[m]={setup:function(){var d=this,l=this.opts[m],v=this.conf[m];if(b[h].glbl,void 0!==l){l instanceof Array||(l=[l]);var f={},u={};l.length&&(b.each(l,function(n){var t=l[n];"boolean"==typeof t&&t&&(t={}),"object"!=typeof t&&(t={}),void 0===t.content&&(t.content=["prev","title"]),t.content instanceof Array||(t.content=[t.content]),t=b.extend(!0,{},d.opts.navbar,t);var a=b('<div class="'+p.navbar+'" />'),e=t.height;"number"!=typeof e?e=1:1<(e=Math.min(4,Math.max(1,e)))&&a.addClass(p.navbar+"_size-"+e);var o=t.position;switch(o){case"bottom":break;default:o="top"}f[o]||(f[o]=0),f[o]+=e,u[o]||(u[o]=b('<div class="'+p.navbars+"_"+o+'" />')),u[o].append(a);for(var r=0,s=t.content.length;r<s;r++){var i=b[h].addons[m][t.content[r]]||null;i?i.call(d,a,t,v):((i=t.content[r])instanceof b||(i=b(t.content[r])),a.append(i))}var c=b[h].addons[m][t.type]||null;c&&c.call(d,a,t,v),a.children("."+p.btn).length&&a.addClass(p.navbar+"_has-btns")}),this.bind("initMenu:after",function(){for(var n in f)this.$menu.addClass(p.menu+"_navbar_"+n+"-"+f[n]),this.$menu["bottom"==n?"append":"prepend"](u[n])}))}},add:function(){p=b[h]._c,b[h]._d,b[h]._e,p.add(m)},clickAnchor:function(n,t){}},b[h].configuration[m]={breadcrumbs:{separator:"/",removeFirst:!1}},b[h].configuration.classNames[m]={}}(jQuery);
!function(f){var o,i,a,c="mmenu",d="pageScroll";f[c].addons[d]={setup:function(){var n=this,t=this.opts[d],s=this.conf[d];if(a=f[c].glbl,"boolean"==typeof t&&(t={scroll:t}),(t=this.opts[d]=f.extend(!0,{},f[c].defaults[d],t)).scroll&&this.bind("close:finish",function(){h(s.scrollOffset)}),t.update){var e=[],r=[];(n=this).bind("initListview:after",function(t){n.__filterListItemAnchors(t.find("."+o.listview).children("li")).each(function(){var t=f(this).attr("href");p(t)&&e.push(t)}),r=e.reverse()});var l=-1;a.$wndw.on(i.scroll+"-"+d,function(t){for(var e=a.$wndw.scrollTop(),i=0;i<r.length;i++)if(f(r[i]).offset().top<e+s.updateOffset){l!==i&&(l=i,n.setSelected(n.__filterListItemAnchors(n.$pnls.children("."+o.panel+"_opened").find("."+o.listview).children("li")).filter('[href="'+r[i]+'"]').parent()));break}})}},add:function(){o=f[c]._c,f[c]._d,i=f[c]._e},clickAnchor:function(t,e,i){if(s=!1,e&&i&&this.opts.offCanvas&&this.opts[d].scroll&&a.$page&&a.$page.length){var n=t.attr("href");if(p(n)){if(s=f(n),!this.$menu.is("."+o.menu+"_sidebar-expanded")||!a.$html.is("."+o.wrapper+"_sidebar-expanded"))return{close:!0};h(this.conf[d].scrollOffset)}}}},f[c].defaults[d]={scroll:!1,update:!1};var s=!(f[c].configuration[d]={scrollOffset:0,updateOffset:50});function h(t){s&&s.length&&s.is(":visible")&&a.$html.add(a.$body).animate({scrollTop:s.offset().top+t}),s=!1}function p(t){try{return!("#"==t||"#"!=t.slice(0,1)||!a.$page.find(t).length)}catch(t){return!1}}}(jQuery);
!function(o){var f,u,h,n="mmenu",_="searchfield";function l(e,n){if(n)for(var s in n)e.attr(s,n[s])}o[n].addons[_]={setup:function(){var a=this,t=this.opts[_],e=this.conf[_];o[n].glbl,"boolean"==typeof t&&(t={add:t}),"object"!=typeof t&&(t={}),"boolean"==typeof t.panel&&(t.panel={add:t.panel}),"object"!=typeof t.panel&&(t.panel={}),t.add&&("panel"==t.addTo&&(t.panel.add=!0),t.panel.add&&(t.showSubPanels=!1,t.panel.splash&&(t.cancel=!0)),t=this.opts[_]=o.extend(!0,{},o[n].defaults[_],t),e=this.conf[_]=o.extend(!0,{},o[n].configuration[_],e),this.bind("close:start",function(){this.$menu.find("."+f.searchfield).children("input").blur()}),this.bind("initPanels:after",function(e){var n,s=o();switch(t.panel.add&&(s=this._initSearchPanel(e)),t.addTo){case"panels":n=e;break;case"panel":n=s;break;default:n=this.$menu.find(t.addTo)}(n.each(function(){var e=a._initSearchfield(o(this));t.search&&e.length&&a._initSearching(e)}),t.noResults)&&(t.panel.add?s:e).each(function(){a._initNoResultsMsg(o(this))})}))},add:function(){f=o[n]._c,u=o[n]._d,h=o[n]._e,f.add("searchfield"),u.add("searchfield"),h.add("input focus blur")},clickAnchor:function(e,n){if(e.hasClass(f.searchfield+"__btn")){if(e.hasClass(f.btn+"_close")){var s=e.closest("."+f.searchfield).find("input");return s.val(""),this.search(s),!0}if(e.hasClass(f.btn+"_next"))return e.closest("."+f.searchfield).submit(),!0}}},o[n].defaults[_]={add:!1,addTo:"panels",noResults:"No results found.",placeholder:"Search",panel:{add:!1,dividers:!0,fx:"none",id:null,splash:null,title:"Search"},search:!0,showTextItems:!1,showSubPanels:!0},o[n].configuration[_]={clear:!1,form:!1,input:!1,submit:!1},o[n].prototype._initSearchPanel=function(e){var n=this.opts[_];this.conf[_];if(this.$pnls.children("."+f.panel+"_search").length)return o();var s=o('<div class="'+f.panel+'_search " />').append("<ul />").appendTo(this.$pnls);switch(n.panel.id&&s.attr("id",n.panel.id),n.panel.title&&s.attr("data-mm-title",n.panel.title),n.panel.fx){case!1:break;case"none":s.addClass(f.panel+"_noanimation");break;default:s.addClass(f.panel+"_fx-"+n.panel.fx)}return n.panel.splash&&s.append('<div class="'+f.panel+'__searchsplash">'+n.panel.splash+"</div>"),this._initPanels(s),s},o[n].prototype._initSearchfield=function(e){var n=this.opts[_],s=this.conf[_];if(e.parent("."+f.listitem+"_vertical").length)return o();if(e.find("."+f.searchfield).length)return e.find("."+f.searchfield);var a=o("<"+(s.form?"form":"div")+' class="'+f.searchfield+'" />'),t=o('<div class="'+f.searchfield+'__input" />'),i=o('<input placeholder="'+this.i18n(n.placeholder)+'" type="text" autocomplete="off" />');return t.append(i).appendTo(a),e.prepend(a),e.hasClass(f.panel)&&e.addClass(f.panel+"_has-searchfield"),l(i,s.input),s.clear&&o('<a class="'+f.btn+" "+f.btn+"_close "+f.searchfield+'__btn" href="#" />').appendTo(t),l(a,s.form),s.form&&s.submit&&!s.clear&&o('<a class="'+f.btn+" "+f.btn+"_next "+f.searchfield+'__btn" href="#" />').appendTo(t),n.cancel&&o('<a href="#" class="'+f.searchfield+'__cancel">'+this.i18n("cancel")+"</a>").appendTo(a),a},o[n].prototype._initSearching=function(e){var n=this,s=this.opts[_],a=(this.conf[_],{});e.closest("."+f.panel+"_search").length?(a.$pnls=this.$pnls.find("."+f.panel),a.$nrsp=e.closest("."+f.panel)):e.closest("."+f.panel).length?(a.$pnls=e.closest("."+f.panel),a.$nrsp=a.$pnls):(a.$pnls=this.$pnls.find("."+f.panel),a.$nrsp=this.$menu),a.$pnls=a.$pnls.not(function(){return o(this).parent("."+f.listitem+"_vertical").length}),s.panel.add&&(a.$pnls=a.$pnls.not("."+f.panel+"_search"));var t=e.find("input"),i=e.find("."+f.searchfield+"__cancel"),l=this.$pnls.children("."+f.panel+"_search"),d=a.$pnls.find("."+f.listitem);a.$itms=d.not("."+f.listitem+"_divider"),a.$dvdr=d.filter("."+f.listitem+"_divider"),s.panel.add&&s.panel.splash&&t.off(h.focus+"-"+_+"-splash").on(h.focus+"-"+_+"-splash",function(e){n.openPanel(l)}),s.cancel&&(t.off(h.focus+"-"+_+"-cancel").on(h.focus+"-"+_+"-cancel",function(e){i.addClass(f.searchfield+"__cancel-active")}),i.off(h.click+"-"+_+"-splash").on(h.click+"-"+_+"-splash",function(e){e.preventDefault(),o(this).removeClass(f.searchfield+"__cancel-active"),l.hasClass(f.panel+"_opened")&&n.openPanel(n.$pnls.children("."+f.panel+"_opened-parent").last())})),s.panel.add&&"panel"==s.addTo&&this.bind("openPanel:finish",function(e){e[0]===l[0]&&t.focus()}),t.data(u.searchfield,a).off(h.input+"-"+_).on(h.input+"-"+_,function(e){(function(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1})(e.keyCode)||n.search(t)}),this.search(t)},o[n].prototype._initNoResultsMsg=function(e){var n=this.opts[_];this.conf[_];if(e.closest("."+f.panel).length||(e=this.$pnls.children("."+f.panel).first()),!e.children("."+f.panel+"__noresultsmsg").length){var s=e.children("."+f.listview).first(),a=o('<div class="'+f.panel+"__noresultsmsg "+f.hidden+'" />').append(this.i18n(n.noResults));s.length?a.insertAfter(s):a.prependTo(e)}},o[n].prototype.search=function(a,s){var t=this,i=this.opts[_];this.conf[_];a=a||this.$menu.find("."+f.searchfield).chidren("input").first(),s=(s=s||a.val()).toLowerCase().trim();var e=a.data(u.searchfield),n=a.closest("."+f.searchfield).find("."+f.btn),l=this.$pnls.children("."+f.panel+"_search"),d=e.$pnls,h=e.$itms,r=e.$dvdr,c=e.$nrsp;if(h.removeClass(f.listitem+"_nosubitems").find("."+f.btn+"_fullwidth-search").removeClass(f.btn+"_fullwidth-search "+f.btn+"_fullwidth"),l.children("."+f.listview).empty(),d.scrollTop(0),s.length){if(h.add(r).addClass(f.hidden),h.each(function(){var e=o(this),n="a";(i.showTextItems||i.showSubPanels&&e.find("."+f.btn+"_next"))&&(n="a, span"),-1<e.children(n).not("."+f.btn+"_next").text().toLowerCase().indexOf(s)&&e.removeClass(f.hidden)}),i.panel.add){var p=o();d.each(function(){var e=t.__filterListItems(o(this).find("."+f.listitem)).clone(!0);e.length&&(i.panel.dividers&&(p=p.add('<li class="'+f.listitem+" "+f.listitem+'_divider">'+o(this).find("."+f.navbar+"__title").text()+"</li>")),p=p.add(e))}),p.find("."+f.mm("toggle")).remove().end().find("."+f.mm("check")).remove().end().find("."+f.btn).remove(),l.children("."+f.listview).append(p),this.openPanel(l)}else i.showSubPanels&&d.each(function(e){var n=o(this);t.__filterListItems(n.find("."+f.listitem)).each(function(){var e=o(this).data(u.child);e&&e.find("."+f.listview).children().removeClass(f.hidden)})}),o(d.get().reverse()).each(function(e){var n=o(this),s=n.data(u.parent);s&&(t.__filterListItems(n.find("."+f.listitem)).length?s.hasClass(f.hidden)&&s.removeClass(f.hidden).children("."+f.btn+"_next").not("."+f.btn+"_fullwidth").addClass(f.btn+"_fullwidth").addClass(f.btn+"_fullwidth-search"):a.closest("."+f.panel).length||((n.hasClass(f.panel+"_opened")||n.hasClass(f.panel+"_opened-parent"))&&setTimeout(function(){t.openPanel(s.closest("."+f.panel))},(e+1)*(1.5*t.conf.openingInterval)),s.addClass(f.listitem+"_nosubitems")))}),this.__filterListItems(d.find("."+f.listitem)).each(function(){o(this).prevAll("."+f.listitem+"_divider").first().removeClass(f.hidden)});n.removeClass(f.hidden),c.find("."+f.panel+"__noresultsmsg")[h.not("."+f.hidden).length?"addClass":"removeClass"](f.hidden),i.panel.add&&(i.panel.splash&&l.find("."+f.panel+"__searchsplash").addClass(f.hidden),h.add(r).removeClass(f.hidden))}else h.add(r).removeClass(f.hidden),n.addClass(f.hidden),c.find("."+f.panel+"__noresultsmsg").addClass(f.hidden),i.panel.add&&(i.panel.splash?l.find("."+f.panel+"__searchsplash").removeClass(f.hidden):a.closest("."+f.panel+"_search").length||this.openPanel(this.$pnls.children("."+f.panel+"_opened-parent").last()));this.trigger("updateListview")}}(jQuery);
!function(d){var h,t,e="mmenu",o="sectionIndexer";d[e].addons[o]={setup:function(){var s=this,i=this.opts[o];this.conf[o];d[e].glbl,"boolean"==typeof i&&(i={add:i}),"object"!=typeof i&&(i={}),i=this.opts[o]=d.extend(!0,{},d[e].defaults[o],i);var r=null;this.bind("initPanels:after",function(e){if(i.add){var a;switch(i.addTo){case"panels":a=e;break;default:a=(a=d(i.addTo,this.$menu)).filter("."+h.panel)}a.find("."+h.listitem+"_divider").closest("."+h.panel).addClass(h.panel+"_has-sectionindexer"),r||(r=d('<div class="'+h.sectionindexer+'" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>')).on(t.mouseover+"-"+o+" "+t.touchstart+"-"+o,"a",function(e){var a=d(e.target).attr("href").slice(1),n=s.$pnls.children("."+h.panel+"_opened"),i=n.find("."+h.listview),r=-1,t=n.scrollTop();n.scrollTop(0),i.children("."+h.listitem+"_divider").not("."+h.hidden).each(function(){r<0&&a==d(this).text().slice(0,1).toLowerCase()&&(r=d(this).position().top)}),n.scrollTop(-1<r?r:t)});var n=function(e){e=e||this.$pnls.children("."+h.panel+"_opened"),this.$menu[(e.hasClass(h.panel+"_has-sectionindexer")?"add":"remove")+"Class"](h.menu+"_has-sectionindexer")};this.bind("openPanel:start",n),this.bind("initPanels:after",n)}})},add:function(){h=d[e]._c,d[e]._d,t=d[e]._e,h.add("sectionindexer"),t.add("mouseover")},clickAnchor:function(e,a){if(e.parent().is("."+h.indexer))return!0}},d[e].defaults[o]={add:!1,addTo:"panels"}}(jQuery);
!function(t){var s,a,l="mmenu",r="setSelected";t[l].addons[r]={setup:function(){var n=this,e=this.opts[r];this.conf[r];if(t[l].glbl,"boolean"==typeof e&&(e={hover:e,parent:e}),"object"!=typeof e&&(e={}),"detect"==(e=this.opts[r]=t.extend(!0,{},t[l].defaults[r],e)).current){var i=function(e){e=e.split("?")[0].split("#")[0];var t=n.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');t.length?n.setSelected(t.parent(),!0):(e=e.split("/").slice(0,-1)).length&&i(e.join("/"))};this.bind("initMenu:after",function(){i(window.location.href)})}else e.current||this.bind("initListview:after",function(e){e.find("."+s.listview).children("."+s.listitem+"_selected").removeClass(s.listitem+"_selected")});e.hover&&this.bind("initMenu:after",function(){this.$menu.addClass(s.menu+"_selected-hover")}),e.parent&&(this.bind("openPanel:finish",function(e){this.$pnls.find("."+s.listview).find("."+s.listitem+"_selected-parent").removeClass(s.listitem+"_selected-parent");for(var t=e.data(a.parent);t;)t.not("."+s.listitem+"_vertical").addClass(s.listitem+"_selected-parent"),t=t.closest("."+s.panel).data(a.parent)}),this.bind("initMenu:after",function(){this.$menu.addClass(s.menu+"_selected-parent")}))},add:function(){s=t[l]._c,a=t[l]._d,t[l]._e},clickAnchor:function(e,t){}},t[l].defaults[r]={current:!0,hover:!1,parent:!1}}(jQuery);
!function(a){var n,t,l="mmenu",i="sidebar";a[l].addons[i]={setup:function(){if(this.opts.offCanvas){var e=this.opts[i];this.conf[i];t=a[l].glbl,("string"==typeof e||"boolean"==typeof e&&e||"number"==typeof e)&&(e={expanded:e}),"object"!=typeof e&&(e={}),"boolean"==typeof e.collapsed&&e.collapsed&&(e.collapsed="all"),"string"!=typeof e.collapsed&&"number"!=typeof e.collapsed||(e.collapsed={use:e.collapsed}),"object"!=typeof e.collapsed&&(e.collapsed={}),"number"==typeof e.collapsed.use&&(e.collapsed.use="(min-width: "+e.collapsed.use+"px)"),"boolean"==typeof e.expanded&&e.expanded&&(e.expanded="all"),"string"!=typeof e.expanded&&"number"!=typeof e.expanded||(e.expanded={use:e.expanded}),"object"!=typeof e.expanded&&(e.expanded={}),"number"==typeof e.expanded.use&&(e.expanded.use="(min-width: "+e.expanded.use+"px)"),e=this.opts[i]=a.extend(!0,{},a[l].defaults[i],e);var d=n.wrapper+"_sidebar-collapsed";e.collapsed.size&&(d+=" "+n.wrapper+"_sidebar-collapsed-"+e.collapsed.size);var s=n.wrapper+"_sidebar-expanded";e.expanded.size&&(s+=" "+n.wrapper+"_sidebar-expanded-"+e.expanded.size),e.collapsed.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_sidebar-collapsed"),e.collapsed.blockMenu&&this.opts.offCanvas&&!this.$menu.children("."+n.menu+"__blocker").length&&this.$menu.prepend('<a class="'+n.menu+'__blocker" href="#'+this.$menu.attr("id")+'" />'),e.collapsed.hideNavbar&&this.$menu.addClass(n.menu+"_hidenavbar"),e.collapsed.hideDivider&&this.$menu.addClass(n.menu+"_hidedivider")}),"boolean"==typeof e.collapsed.use?this.bind("initMenu:after",function(){t.$html.addClass(d)}):this.matchMedia(e.collapsed.use,function(){t.$html.addClass(d)},function(){t.$html.removeClass(d)})),e.expanded.use&&(this.bind("initMenu:after",function(){this.$menu.addClass(n.menu+"_sidebar-expanded")}),"boolean"==typeof e.expanded.use?this.bind("initMenu:after",function(){t.$html.addClass(s),this.open()}):this.matchMedia(e.expanded.use,function(){t.$html.addClass(s),t.$html.hasClass(n.wrapper+"_sidebar-closed")||this.open()},function(){t.$html.removeClass(s),this.close()}),this.bind("close:start",function(){t.$html.hasClass(s)&&t.$html.addClass(n.wrapper+"_sidebar-closed")}),this.bind("open:start",function(){t.$html.removeClass(n.wrapper+"_sidebar-closed")}))}},add:function(){n=a[l]._c,a[l]._d,a[l]._e},clickAnchor:function(e,d,s){if(this.opts[i].expanded.use&&t.$html.is("."+n.wrapper+"_sidebar-expanded")&&d&&s)return{close:!1}}},a[l].defaults[i]={collapsed:{use:!1,blockMenu:!0,hideDivider:!1,hideNavbar:!0},expanded:{use:!1}},a[l].configuration[i]={}}(jQuery);
!function(n){var l,t="mmenu",e="toggles";n[t].addons[e]={setup:function(){var s=this;this.opts[e],this.conf[e];n[t].glbl,this.bind("initPanels:after",function(t){this.__refactorClass(t.find("input"),this.conf.classNames[e].toggle,l.toggle),this.__refactorClass(t.find("input"),this.conf.classNames[e].check,l.check),t.find("input."+l.toggle+", input."+l.check).each(function(){var t=n(this),e=t.closest("li"),c=t.hasClass(l.toggle)?"toggle":"check",i=t.attr("id")||s.__getUniqueId();e.children('label[for="'+i+'"]').length||(t.attr("id",i),e.prepend(t),n('<label for="'+i+'" class="'+l[c]+'"></label>').insertAfter(e.children("."+l.listitem+"__text").last()))})})},add:function(){l=n[t]._c,n[t]._d,n[t]._e,l.add("toggle check")},clickAnchor:function(t,e){}},n[t].configuration.classNames[e]={toggle:"Toggle",check:"Check"}}(jQuery);
!function(d){var s="mmenu";d[s].addons.navbars.breadcrumbs=function(a,r,i){var n=this,b=d[s]._c,c=d[s]._d;b.add("separator");var e=d('<span class="'+b.navbar+'__breadcrumbs" />').appendTo(a);this.bind("initNavbar:after",function(a){if(!a.children("."+b.navbar).children("."+b.navbar+"__breadcrumbs").length){a.removeClass(b.panel+"_has-navbar");for(var r=[],n=d('<span class="'+b.navbar+'__breadcrumbs"></span>'),e=a,s=!0;e&&e.length;){if(e.is("."+b.panel)||(e=e.closest("."+b.panel)),!e.parent("."+b.listitem+"_vertical").length){var t=e.children("."+b.navbar).children("."+b.navbar+"__title").text();t.length&&r.unshift(s?"<span>"+t+"</span>":'<a href="#'+e.attr("id")+'">'+t+"</a>"),s=!1}e=e.data(c.parent)}i.breadcrumbs.removeFirst&&r.shift(),n.append(r.join('<span class="'+b.separator+'">'+i.breadcrumbs.separator+"</span>")).appendTo(a.children("."+b.navbar))}}),this.bind("openPanel:start",function(a){var r=a.find("."+b.navbar+"__breadcrumbs");r.length&&e.html(r.html()||"")}),this.bind("initNavbar:after:sr-aria",function(a){a.children("."+b.navbar).children("."+b.breadcrumbs).children("a").each(function(){n.__sr_aria(d(this),"owns",d(this).attr("href").slice(1))})})}}(jQuery);
!function(s){var r="mmenu";s[r].addons.navbars.close=function(t,e){var n=s[r]._c;s[r].glbl;n.add("close");var a=s('<a class="'+n.btn+" "+n.btn+"_close "+n.navbar+'__btn" href="#" />').appendTo(t);this.bind("setPage:after",function(t){a.attr("href","#"+t.attr("id"))}),this.bind("setPage:after:sr-text",function(t){a.html(this.__sr_text(this.i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(a,"owns",a.attr("href").slice(1))})}}(jQuery);
!function(h){var d="mmenu",o="navbars";h[d].addons[o].next=function(a,n){var t,e,s,r=h[d]._c,i=h('<a class="'+r.btn+" "+r.btn+"_next "+r.navbar+'__btn" href="#" />').appendTo(a);this.bind("openPanel:start",function(a){t=a.find("."+this.conf.classNames[o].panelNext),e=t.attr("href"),s=t.html(),e?i.attr("href",e):i.removeAttr("href"),i[e||s?"removeClass":"addClass"](r.hidden),i.html(s)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(i,"hidden",i.hasClass(r.hidden)),this.__sr_aria(i,"owns",(i.attr("href")||"").slice(1))})},h[d].configuration.classNames[o].panelNext="Next"}(jQuery);
!function(h){var l="mmenu",d="navbars";h[l].addons[d].prev=function(a,n){var r,e,t,i=h[l]._c,s=h('<a class="'+i.btn+" "+i.btn+"_prev "+i.navbar+'__btn" href="#" />').appendTo(a);this.bind("initNavbar:after",function(a){a.removeClass(i.panel+"_has-navbar")}),this.bind("openPanel:start",function(a){a.parent("."+i.listitem+"_vertical").length||((r=a.find("."+this.conf.classNames[d].panelPrev)).length||(r=a.children("."+i.navbar).children("."+i.btn+"_prev")),e=r.attr("href"),t=r.html(),e?s.attr("href",e):s.removeAttr("href"),s[e||t?"removeClass":"addClass"](i.hidden),s.html(t))}),this.bind("initNavbar:after:sr-aria",function(a){var n=a.children("."+i.navbar);this.__sr_aria(n,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(s,"hidden",s.hasClass(i.hidden)),this.__sr_aria(s,"owns",(s.attr("href")||"").slice(1))})},h[l].configuration.classNames[d].panelPrev="Prev"}(jQuery);
!function(t){var a="mmenu";t[a].addons.navbars.searchfield=function(s,e){t[a]._c;"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=s}}(jQuery);
!function(i){var o="mmenu",c="navbars";i[o].addons[c].tabs=function(a,e,t){var s=i[o]._c,r=i[o]._d,n=i[o]._e,l=this,d=a.children("a");a.addClass(s.navbar+"_tabs").parent().addClass(s.navbars+"_has-tabs"),d.on(n.click+"-"+c,function(a){a.preventDefault();var e=i(this);if(e.hasClass(s.navbar+"__tab_selected"))a.stopImmediatePropagation();else try{l.openPanel(i(e.attr("href")),!1),a.stopImmediatePropagation()}catch(a){}}),this.bind("openPanel:start",function a(e){d.removeClass(s.navbar+"__tab_selected");var t=d.filter('[href="#'+e.attr("id")+'"]');if(t.length)t.addClass(s.navbar+"__tab_selected");else{var n=e.data(r.parent);n&&n.length&&a(n.closest("."+s.panel))}})}}(jQuery);
!function(h){var d="mmenu",o="navbars";h[d].addons[o].title=function(t,a){var e,n,i,r,s=h[d]._c,l=h('<a class="'+s.navbar+'__title" />').appendTo(t);this.bind("openPanel:start",function(t){t.parent("."+s.listitem+"_vertical").length||((i=t.find("."+this.conf.classNames[o].panelTitle)).length||(i=t.children("."+s.navbar).children("."+s.navbar+"__title")),e=i.attr("href"),n=i.html()||a.title,e?l.attr("href",e):l.removeAttr("href"),l[e||n?"removeClass":"addClass"](s.hidden),l.html(n))}),this.bind("openPanel:start:sr-aria",function(t){if(this.opts.screenReader.text&&(r||(r=this.$menu.children("."+s.navbars+"_top, ."+s.navbars+"_bottom").children("."+s.navbar).children("."+s.btn+"_prev")),r.length)){var a=!0;"parent"==this.opts.navbar.titleLink&&(a=!r.hasClass(s.hidden)),this.__sr_aria(l,"hidden",a)}})},h[d].configuration.classNames[o].panelTitle="Title"}(jQuery);
jQuery.mmenu.wrappers.angular=function(){this.opts.onClick={close:!0,preventDefault:!1,setSelected:!0}};
!function(a){a.mmenu.wrappers.bootstrap3=function(){if(this.$menu.hasClass("navbar-collapse")){this.conf.classNames.selected="active",this.conf.classNames.divider="divider",this.conf.clone=!0,this.opts.hooks=this.opts.hooks||{};for(var n="",a=["nav-tabs","nav-pills","navbar-nav"],e=0;e<a.length;e++)if(this.$menu.find("."+a[e]).length){n=a[e];break}n.length&&(this.opts.hooks["initMenu:before"]=function(){"navbar-nav"==n&&this.$menu.wrapInner("<div />")},this.opts.hooks["initMenu:after"]=function(){t.menu.call(this),t.dropdown.call(this),t[n.split("nav-").join("").split("-nav").join("")].call(this)})}};var t={menu:function(){this.$menu.find(".nav").removeClass("nav").end().find(".sr-only").remove().end().find(".divider:empty").remove();for(var n=["role","aria-haspopup","aria-expanded"],a=0;a<n.length;a++)this.$menu.find("["+n[a]+"]").removeAttr(n[a])},dropdown:function(){var n=this.$menu.find(".dropdown");n.removeClass("dropdown"),n.children(".dropdown-toggle").find(".caret").remove().end().each(function(){a(this).replaceWith("<span>"+a(this).html()+"</span>")}),n.children(".dropdown-menu").removeClass("dropdown-menu")},tabs:function(){this.$menu.find(".nav-tabs").removeClass("nav-tabs")},pills:function(){this.$menu.find(".nav-pills").removeClass("nav-pills")},navbar:function(){var a=this;this.$menu.removeClass("collapse navbar-collapse").find('[class*="navbar-"]').removeClass("navbar-left navbar-right navbar-nav navbar-text navbar-btn");var n=this.$menu.find(".navbar-form");this.conf.searchform={form:{action:n.attr("action"),method:n.attr("method")},input:{name:n.find("input").attr("name")},submit:!0},n.remove(),(this.$orig||this.$menu).closest(".navbar").find(".navbar-header").find(".navbar-toggle").off("click").on("click",function(n){a.open(),n.stopImmediatePropagation(),n.preventDefault()})}}}(jQuery);
!function(i){function s(n){for(var a=i("<a />"),e=["href","title","target"],t=0;t<e.length;t++)void 0!==n.attr(e[t])&&a.attr(e[t],n.attr(e[t]));return a.html(n.html()),a.find(".sr-only").remove(),a}function o(n){var e=i("<ul />");return n.children().each(function(){var n=i(this),a=i("<li />");n.hasClass("dropdown-divider")?a.addClass("Divider"):n.hasClass("dropdown-item")&&a.append(s(n)),e.append(a)}),e}i.mmenu.wrappers.bootstrap4=function(){var e=this;if(this.$menu.hasClass("navbar-collapse")){this.conf.clone=!1;var n=i("<nav />"),r=i("<div />");n.append(r),this.$menu.children().each(function(){var n,t,a=i(this);switch(!0){case a.hasClass("navbar-nav"):r.append((n=a,t=i("<ul />"),n.find(".nav-item").each(function(){var n=i(this),a=i("<li />");if(n.hasClass("active")&&a.addClass("Selected"),!n.hasClass("nav-link")){var e=n.children(".dropdown-menu");e.length&&a.append(o(e)),n=n.children(".nav-link")}a.prepend(s(n)),t.append(a)}),t));break;case a.hasClass("dropdown-menu"):r.append(o(a));break;case a.hasClass("form-inline"):e.conf.searchfield.form={action:a.attr("action")||null,method:a.attr("method")||null},e.conf.searchfield.input={name:a.find("input").attr("name")||null},e.conf.searchfield.clear=!1,e.conf.searchfield.submit=!0;break;default:r.append(a.clone(!0))}}),this.bind("initMenu:before",function(){n.prependTo("body"),this.$menu=n}),this.$menu.parent().find(".navbar-toggler").removeAttr("data-target").removeAttr("aria-controls").off("click").on("click",function(n){n.preventDefault(),n.stopImmediatePropagation(),e[e.vars.opened?"close":"open"]()})}}}(jQuery);
!function(n){n.mmenu.wrappers.jqueryMobile=function(){var t=this;this.opts.onClick.close=!1,this.conf.offCanvas.page.selector="div.ui-page-active",n("body").on("pagecontainerchange",function(e,n){"function"==typeof t.close&&(t.close(),t.setPage(n.toPage))}),this.bind("initAnchors:after",function(){n("body").on("click",".mm-listview a",function(e){e.isDefaultPrevented()||(e.preventDefault(),n("body").pagecontainer("change",n(this).attr("href")))})})}}(jQuery);
jQuery.mmenu.wrappers.magento=function(){this.conf.classNames.selected="active"};
jQuery.mmenu.wrappers.olark=function(){this.conf.offCanvas.page.noSelector.push("#olark")};
!function(o){var r="mmenu";o[r].wrappers.turbolinks=function(){var n,t;o(document).on("turbolinks:before-visit",function(){t=o("html"),n=t.attr("class"),n=o.grep(n.split(/\s+/),function(n){return!/mm-/.test(n)}).join(" ")}).on("turbolinks:load",function(){void 0!==t&&(t.attr("class",n),o[r].glbl=!1)})}}(jQuery);
!function(s){s.mmenu.wrappers.wordpress=function(){this.conf.classNames.selected="current-menu-item",s("#wpadminbar").css("position","fixed").addClass("mm-slideout")}}(jQuery);
jQuery.mmenu.i18n({Menu:"Menü"},"de");
jQuery.mmenu.i18n({"Close menu":"Menü schließen","Close submenu":"Untermenü schließen","Open submenu":"Untermenü öffnen","Toggle submenu":"Untermenü wechseln"},"de");
jQuery.mmenu.i18n({Search:"Suche","No results found.":"Keine Ergebnisse gefunden.",cancel:"beenden"},"de");
jQuery.mmenu.i18n({Menu:"Menu"},"nl");
jQuery.mmenu.i18n({"Close menu":"Menu sluiten","Close submenu":"Submenu sluiten","Open submenu":"Submenu openen","Toggle submenu":"Submenu wisselen"},"nl");
jQuery.mmenu.i18n({Search:"Zoeken","No results found.":"Geen resultaten gevonden.",cancel:"annuleren"},"nl");
jQuery.mmenu.i18n({Menu:"Меню"},"ru");
jQuery.mmenu.i18n({"Close menu":"Закрыть меню","Close submenu":"Закрыть подменю","Open submenu":"Открыть подменю","Toggle submenu":"Переключить подменю"},"ru");
jQuery.mmenu.i18n({Search:"Найти","No results found.":"Ничего не найдено.","Search results":"Результаты поиска"},"ru");
return true;
}));

/*!
 * jQuery Browser Plugin 0.0.7
 * https://github.com/gabceb/jquery-browser-plugin
*/
/*global window: false */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    
    define(['jquery'], function($) {
      factory($);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
   
    module.exports = factory(require('jquery'));
  } else {
   
    factory(window.jQuery);
  }
}(function(jQuery) {
  "use strict";

  function uaMatch( ua ) {
   
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }
  
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }
   
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    if ( browser.rv || browser.edge ) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }
    
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }
   
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }
 
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }
    
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }
    
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }
    
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }    
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }
  
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;
  
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
}));

/*
* SmoothScroll for websites v1.2.1
* Licensed under the terms of the MIT license.
  - Michael Herf     (Pulse Algorithm)
*/
(function($) {
    $.extend({
        webkitSmoothScroll: function(){
              
            
            var defaultOptions = {

              
                frameRate        : 120, 
                animationTime    : 600, 
                stepSize         : 135,               
                pulseAlgorithm   : true,
                pulseScale       : 7,
                pulseNormalize   : 1,               
                accelerationDelta : 20,  
                accelerationMax   : 1,                  
                keyboardSupport   : true,  
                arrowScroll       : 50,                    
                touchpadSupport   : true,
                fixedBackground   : true, 
                excluded          : ""    
            };

            var options = defaultOptions;
           
            var isExcluded = false;
            var isFrame = false;
            var direction = { x: 0, y: 0 };
            var initDone  = false;
            var root = document.documentElement;
            var activeElement;
            var observer;
            var deltaBuffer = [ 120, 120, 120 ];

            var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
                        pageup: 33, pagedown: 34, end: 35, home: 36 };


            /***********************************************
             * SETTINGS
             ***********************************************/

            var options = defaultOptions;


            /***********************************************
             * INITIALIZE
             ***********************************************/

            function initTest() {

                var disableKeyboard = false; 
                
                // disable keyboard support if anything above requested it
                if (disableKeyboard) {
                    removeEvent("keydown", keydown);
                }

                if (options.keyboardSupport && !disableKeyboard) {
                    addEvent("keydown", keydown);
                }
            }

            /**
             * Sets up scrolls array, determines if frames are involved.
             */
            function init() {
              
                if (!document.body) return;

                var body = document.body;
                var html = document.documentElement;
                var windowHeight = window.innerHeight; 
                var scrollHeight = body.scrollHeight;
                
                
                root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
                activeElement = body;
                
                initTest();
                initDone = true;

                
                if (top != self) {
                    isFrame = true;
                }

                /**
                 * This fixes a bug where the areas left and right to 
                 * the content does not trigger the onmousewheel event
                 * on some pages. e.g.: html, body { height: 100% }
                 */
                else if (scrollHeight > windowHeight &&
                        (body.offsetHeight <= windowHeight || 
                         html.offsetHeight <= windowHeight)) {

                    
                    var pending = false;
                    var refresh = function () {
                        if (!pending && html.scrollHeight != document.height) {
                            pending = true; 
                            setTimeout(function () {
                                html.style.height = document.height + 'px';
                                pending = false;
                            }, 500); 
                        }
                    };
                    html.style.height = 'auto';
                    setTimeout(refresh, 10);

                    
                    if (root.offsetHeight <= windowHeight) {
                        var underlay = document.createElement("div"); 	
                        underlay.style.clear = "both";
                        body.appendChild(underlay);
                    }
                }

                
                if (!options.fixedBackground && !isExcluded) {
                    body.style.backgroundAttachment = "scroll";
                    html.style.backgroundAttachment = "scroll";
                }
            }


            /************************************************
             * SCROLLING 
             ************************************************/
             
            var que = [];
            var pending = false;
            var lastScroll = +new Date;

            /**
             * Pushes scroll actions to the scrolling queue.
             */
            function scrollArray(elem, left, top, delay) {
                
                delay || (delay = 1000);
                directionCheck(left, top);

                if (options.accelerationMax != 1) {
                    var now = +new Date;
                    var elapsed = now - lastScroll;
                    if (elapsed < options.accelerationDelta) {
                        var factor = (1 + (30 / elapsed)) / 2;
                        if (factor > 1) {
                            factor = Math.min(factor, options.accelerationMax);
                            left *= factor;
                            top  *= factor;
                        }
                    }
                    lastScroll = +new Date;
                }          
                
               
                que.push({
                    x: left, 
                    y: top, 
                    lastX: (left < 0) ? 0.99 : -0.99,
                    lastY: (top  < 0) ? 0.99 : -0.99, 
                    start: +new Date
                });
                    
                
                if (pending) {
                    return;
                }  

                var scrollWindow = (elem === document.body);
                
                var step = function (time) {
                    
                    var now = +new Date;
                    var scrollX = 0;
                    var scrollY = 0; 
                
                    for (var i = 0; i < que.length; i++) {
                        
                        var item = que[i];
                        var elapsed  = now - item.start;
                        var finished = (elapsed >= options.animationTime);                        
                        
                        var position = (finished) ? 1 : elapsed / options.animationTime;                        
                        
                        if (options.pulseAlgorithm) {
                            position = pulse(position);
                        }                        
                        
                        var x = (item.x * position - item.lastX) >> 0;
                        var y = (item.y * position - item.lastY) >> 0;                        
                        
                        scrollX += x;
                        scrollY += y;                                   
                        
                        item.lastX += x;
                        item.lastY += y;
                    
                        if (finished) {
                            que.splice(i, 1); i--;
                        }           
                    }
                    
                    if (scrollWindow) {
                        window.scrollBy(scrollX, scrollY);
                    } 
                    else {
                        if (scrollX) elem.scrollLeft += scrollX;
                        if (scrollY) elem.scrollTop  += scrollY;                    
                    }                    
                    
                    if (!left && !top) {
                        que = [];
                    }
                    
                    if (que.length) { 
                        requestFrame(step, elem, (delay / options.frameRate + 1)); 
                    } else { 
                        pending = false;
                    }
                };                
                
                requestFrame(step, elem, 0);
                pending = true;
            }


            /***********************************************
             * EVENTS
             ***********************************************/

            /**
             * Mouse wheel handler.
             * @param {Object} event
             */
            function wheel(event) {

                if (!initDone) {
                    init();
                }
                
                var target = event.target;
                var overflowing = overflowingAncestor(target);                
                   
                if (!overflowing || event.defaultPrevented ||
                    isNodeName(activeElement, "embed") ||
                   (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
                    return true;
                }

                var deltaX = event.wheelDeltaX || 0;
                var deltaY = event.wheelDeltaY || 0;                
                
                if (!deltaX && !deltaY) {
                    deltaY = event.wheelDelta || 0;
                }
               
                if (!options.touchpadSupport && isTouchpad(deltaY)) {
                    return true;
                }
               
                if (Math.abs(deltaX) > 1.2) {
                    deltaX *= options.stepSize / 120;
                }
                if (Math.abs(deltaY) > 1.2) {
                    deltaY *= options.stepSize / 120;
                }
                
                scrollArray(overflowing, -deltaX, -deltaY);
                event.preventDefault();
            }

            /**
             * Keydown event handler.
             * @param {Object} event
             */
            function keydown(event) {

                var target   = event.target;
                var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                              (event.shiftKey && event.keyCode !== key.spacebar);                
                
                if ( /input|textarea|select|embed/i.test(target.nodeName) ||
                     target.isContentEditable || 
                     event.defaultPrevented   ||
                     modifier ) {
                  return true;
                }               
                if (isNodeName(target, "button") &&
                    event.keyCode === key.spacebar) {
                  return true;
                }
                
                var shift, x = 0, y = 0;
                var elem = overflowingAncestor(activeElement);
                var clientHeight = elem.clientHeight;

                if (elem == document.body) {
                    clientHeight = window.innerHeight;
                }

                switch (event.keyCode) {
                    case key.up:
                        y = -options.arrowScroll;
                        break;
                    case key.down:
                        y = options.arrowScroll;
                        break;         
                    case key.spacebar: 
                        shift = event.shiftKey ? 1 : -1;
                        y = -shift * clientHeight * 0.9;
                        break;
                    case key.pageup:
                        y = -clientHeight * 0.9;
                        break;
                    case key.pagedown:
                        y = clientHeight * 0.9;
                        break;
                    case key.home:
                        y = -elem.scrollTop;
                        break;
                    case key.end:
                        var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                        y = (damt > 0) ? damt+10 : 0;
                        break;
                    case key.left:
                        x = -options.arrowScroll;
                        break;
                    case key.right:
                        x = options.arrowScroll;
                        break;            
                    default:
                        return true; 
                }

                scrollArray(elem, x, y);
                event.preventDefault();
            }

            /**
             * Mousedown event only for updating activeElement
             */
            function mousedown(event) {
                activeElement = event.target;
            }


            /***********************************************
             * OVERFLOW
             ***********************************************/
             
            var cache = {}; 
            setInterval(function () { cache = {}; }, 10 * 1000);

            var uniqueID = (function () {
                var i = 0;
                return function (el) {
                    return el.uniqueID || (el.uniqueID = i++);
                };
            })();

            function setCache(elems, overflowing) {
                for (var i = elems.length; i--;)
                    cache[uniqueID(elems[i])] = overflowing;
                return overflowing;
            }

            function overflowingAncestor(el) {
                var elems = [];
                var rootScrollHeight = root.scrollHeight;
                do {
                    var cached = cache[uniqueID(el)];
                    if (cached) {
                        return setCache(elems, cached);
                    }
                    elems.push(el);
                    if (rootScrollHeight === el.scrollHeight) {
                        if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                            return setCache(elems, document.body); 
                        }
                    } else if (el.clientHeight + 10 < el.scrollHeight) {
                        overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
                        if (overflow === "scroll" || overflow === "auto") {
                            return setCache(elems, el);
                        }
                    }
                } while (el = el.parentNode);
            }


            /***********************************************
             * HELPERS
             ***********************************************/

            function addEvent(type, fn, bubble) {
                window.addEventListener(type, fn, (bubble||false));
            }

            function removeEvent(type, fn, bubble) {
                window.removeEventListener(type, fn, (bubble||false));  
            }

            function isNodeName(el, tag) {
                return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
            }

            function directionCheck(x, y) {
                x = (x > 0) ? 1 : -1;
                y = (y > 0) ? 1 : -1;
                if (direction.x !== x || direction.y !== y) {
                    direction.x = x;
                    direction.y = y;
                    que = [];
                    lastScroll = 0;
                }
            }

            var deltaBufferTimer;

            function isTouchpad(deltaY) {
                if (!deltaY) return;
                deltaY = Math.abs(deltaY)
                deltaBuffer.push(deltaY);
                deltaBuffer.shift();
                clearTimeout(deltaBufferTimer);
                var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
                                    isDivisible(deltaBuffer[1], 120) &&
                                    isDivisible(deltaBuffer[2], 120));
                return !allDivisable;
            } 

            function isDivisible(n, divisor) {
                return (Math.floor(n / divisor) == n / divisor);
            }

            var requestFrame = (function () {
                  return  window.requestAnimationFrame       || 
                          window.webkitRequestAnimationFrame || 
                          function (callback, element, delay) {
                              window.setTimeout(callback, delay || (1000/60));
                          };
            })();


            /***********************************************
             * PULSE
             ***********************************************/
             
            function pulse_(x) {
                var val, start, expx;
                
                x = x * options.pulseScale;
                if (x < 1) { 
                    val = x - (1 - Math.exp(-x));
                } else {     
                   
                    start = Math.exp(-1);
                    
                    x -= 1;
                    expx = 1 - Math.exp(-x);
                    val = start + (expx * (1 - start));
                }
                return val * options.pulseNormalize;
            }

            function pulse(x) {
                if (x >= 1) return 1;
                if (x <= 0) return 0;

                if (options.pulseNormalize == 1) {
                    options.pulseNormalize /= pulse_(1);
                }
                return pulse_(x);
            }

            var isChrome = /chrome/i.test(window.navigator.userAgent);
            var wheelEvent = null;
            if ("onwheel" in document.createElement("div"))
            	wheelEvent = "wheel";
            else if ("onmousewheel" in document.createElement("div"))
            	wheelEvent = "mousewheel";

            if (wheelEvent && isChrome) {
            	addEvent(wheelEvent, wheel);
            	addEvent("mousedown", mousedown);
            	addEvent("load", init);
            }

        }
    });
})(jQuery);

/*!
Waypoints - 4.0.0
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*/


jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});