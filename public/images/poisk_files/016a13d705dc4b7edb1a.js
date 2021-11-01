/*! v:46959 b:adblock c:rum */
(window["pcodeJsonp46959kfNHlSzmXq"]=window["pcodeJsonp46959kfNHlSzmXq"]||[]).push([[32],{1365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pushPeriodicTask=t.initPeriodicStats=void 0;var r,i=[];function o(){var e=!1;i.forEach((function(t){t()&&(e=!0)})),e||clearInterval(r)}t.initPeriodicStats=function(e){var t=e.getSetting("periodicStatsIntervalMs");t||null===t||(t=15e3),t&&(r=window.setInterval(o,t)),addEventListener("beforeunload",o)},t.pushPeriodicTask=function(e){i.push(e)}},1576:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0,t.time=function(e){if(!l.enabled)return;l._deltaMarks[e]=[z()]},t.timeEnd=function(e,t){if(!l.enabled)return;var n=l._deltaMarks[e];if(!n||0===n.length)return;n.push(z(),t),D(e)},t.send=m,t.sendTimeMark=g,t.init=function(e,t){if(!l.enabled)return;l._settings=e,l._vars=t,y=function(){var e=l._vars;return Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t]).replace(/\*/g,"%2A")}))}(),h=y.concat(["143.2129="+s]),l.enabled&&!window.yandex_context_rum_inited&&(!function(){addEventListener("visibilitychange",(function e(){l.vsChanged=!0,removeEventListener("visibilitychange",e)})),addEventListener("scroll",(function e(t){l.isUserScroll=!0,l.firstScrollTimestamp=t.timeStamp,removeEventListener("scroll",e)}));try{new u((function(e,t){var n=e.getEntriesByType("navigation")[0];if(n){t&&t.disconnect();var r=[];Q(r,n),G(r),X("690.2096.2892",y.concat(r))}})).observe({type:"navigation",buffered:!0})}catch(e){}if(window.PerformanceLongTaskTiming){var e=function(e,t){return(e=e.concat(t)).length>300&&(e=e.slice(e.length-300)),e},t=l._tti={events:[],eventsAfterTTI:[],fired:!1,observer:new u((function(n){var r=n.getEntries();t.events=e(t.events,r),t.fired&&(t.eventsAfterTTI=e(t.eventsAfterTTI,r))}))};try{t.observer.observe({type:"longtask",buffered:!0})}catch(e){}}}(),function(e){if(!l.enabled)return;function t(){removeEventListener("DOMContentLoaded",t),removeEventListener("load",t),e()}"loading"===document.readyState?(addEventListener("DOMContentLoaded",t),addEventListener("load",t)):e()}(k),window.yandex_context_rum_inited=!0);return l},t.isRumInited=function(){return window.yandex_context_rum_inited},t.sendResTiming=C,t.sendDelta=D,t.sendAccumulatedDelta=I,t.finalizeLayoutShiftScore=U,t.finalizeLargestContentfulPaint=V,t.getTime=z,t.getSetting=H,t.sendCounter=X,t.getMarkCommonVars=K,t.isValidYaBroRender=function(e){void 0===e&&(e=[Z,W,$,ee]);return e.every((function(e){return!l[e]}))},t.sendElementTiming=void 0;var a=window.performance,c=a.timing,s=c.navigationStart,u=window.PerformanceObserver,d="function"==typeof a.getEntriesByType,l={enabled:!!(u&&a&&c&&s&&a.now),vsStart:document.visibilityState,vsChanged:!1,isUserInteract:!1,isUserScroll:!1,loadEventDelayPassed:!1,get isLoadEventDelayPassed(){return function(){if(!1===l.loadEventDelayPassed){window.performance.timing.loadEventStart+3e4<Date.now()&&(l.loadEventDelayPassed=!0)}return l.loadEventDelayPassed}()},get isVisibilityChanged(){return A()},_defTimes:[],_defRes:[],_deltaMarks:{},_accumulatedDeltas:{},_settings:{},_vars:{}};var f,v=[];function m(e,t){if(l.enabled){clearTimeout(f);var n=H("slots"),r=H("experiments"),i=H("reqid"),o=["/reqid="+i,e?"/path="+e:"",n?"/slots="+n.join(";"):"",r?"/experiments="+r.join(";"):"",t?"/vars="+t:"","/*"];l._settings.isDevMode&&console.log("RUM_LOG",{reqid:i,path:e,slots:n,experiments:r,vars:t.split(",").map((function(e){return decodeURIComponent(e)}))}),v.push(o.join("")),v.length<42?f=setTimeout(p,15):p()}}function p(){var e=H("clck"),t=v.join("\r\n");if((v=[],f=null,e)&&!(navigator.sendBeacon&&navigator.sendBeacon(e,t))){var n=new XMLHttpRequest;n.open("POST",e),n.send(t)}}function g(e,t,n){if(l.enabled){void 0===t&&(t=z());var r=K(e);r.push("207="+N(t)),F(r,n)&&X(b,r)}}var y,h,b="690.2096.207",E={connectEnd:2116,connectStart:2114,decodedBodySize:2886,domComplete:2124,domContentLoadedEventEnd:2131,domContentLoadedEventStart:2123,domInteractive:2770,domLoading:2769,domainLookupEnd:2113,domainLookupStart:2112,duration:2136,encodedBodySize:2887,entryType:2888,fetchStart:2111,initiatorType:2889,loadEventEnd:2126,loadEventStart:2125,nextHopProtocol:2890,redirectCount:1385,redirectEnd:2110,redirectStart:2109,requestStart:2117,responseEnd:2120,responseStart:2119,secureConnectionStart:2115,startTime:2322,transferSize:2323,type:76,unloadEventEnd:2128,unloadEventStart:2127,workerStart:2137},S={visible:1,hidden:2,prerender:3},w={bluetooth:2064,cellular:2065,ethernet:2066,none:1229,wifi:2067,wimax:2068,other:861,unknown:836},T={"first-paint":2793,"first-contentful-paint":2794},_=Object.keys(T).length;function k(){setTimeout((function(){for(var e=l._defRes;e.length;){var t=e.shift();C(t[0],t[1])}for(var n=l._defTimes;n.length;){var r=n.shift();g(r[0],r[1],r[2])}Object.keys(l._deltaMarks).forEach((function(e){D(e)})),L(),function e(){if(!d||!H("forcePaintTimeSending")&&A())return;for(var t=a.getEntriesByType("paint"),n=0;n<t.length;n++){var r=t[n],i=T[r.name];i&&!j[r.name]&&(j[r.name]=!0,M++,g("1926."+i,r.startTime))}if(M<_)try{new u((function(t,n){e(),n&&n.disconnect()})).observe({entryTypes:["paint"]})}catch(e){}}(),function(){try{new u((function(e,t){var n=e.getEntries()[0];if(n){var r=n.processingStart-n.startTime;l.isUserInteract=!0,D("first-input",r),t.disconnect()}})).observe({type:"first-input",buffered:!0})}catch(e){}}(),H("sendAutoElementTiming")&&q(),function(e,t){if(!l._tti)return;var n=z(),r=function(e,r,i){g("2795",r,{2796.2797:Y(i,t),689.2322:N(n)}),l._tti.fired=!0};!function e(){var i,o=z(),a=l._tti.events||[],c=a.length,s=t||n;0!==c&&(i=a[c-1],s=Math.max(s,Math.floor(i.startTime+i.duration))),o-s>=3e3?r(0,s,a):o-s>=2e4?r(0,(t||n)+2e4,a):setTimeout(e,1e3)}()}(),"complete"===document.readyState?O():addEventListener("load",O),addEventListener("beforeunload",R)}),0)}function O(){H("disableOnLoadTasks")||(removeEventListener("load",O),function(){var e=new u((function(e){var t=e.getEntries();null==P&&(P=0);for(var n=0;n<t.length;n++){var r=t[n];r.hadRecentInput||(P+=r.value)}}));try{e.observe({type:"layout-shift",buffered:!0})}catch(e){}addEventListener("visibilitychange",(function t(){if("hidden"===document.visibilityState){removeEventListener("visibilitychange",t);try{"function"==typeof e.takeRecords&&e.takeRecords(),e.disconnect()}catch(e){}U()}})),addEventListener("beforeunload",U)}(),function(){if(!u||!H("forcePaintTimeSending")&&A())return;var e=new u((function(e){for(var t=e.getEntries(),n=0;n<t.length;n++){var r=t[n];x=r.renderTime||r.loadTime}B||(g("largest-contentful-paint",x),B=!0)}));try{e.observe({type:"largest-contentful-paint",buffered:!0})}catch(e){}addEventListener("visibilitychange",(function t(){if("hidden"===document.visibilityState){removeEventListener("visibilitychange",t);try{"function"==typeof e.takeRecords&&e.takeRecords(),e.disconnect()}catch(e){}V()}})),addEventListener("beforeunload",V)}())}function L(){var e=c.domContentLoadedEventStart,t=c.domContentLoadedEventEnd;if(0!==e||0!==t){var n=y.concat(["2129="+s,"1036="+(c.domainLookupStart-s),"1037="+(c.domainLookupEnd-c.domainLookupStart),"1038="+(c.connectEnd-c.connectStart),c.secureConnectionStart&&"1383="+(c.connectEnd-c.secureConnectionStart),"1039="+(c.responseStart-c.connectEnd),"1040="+(c.responseEnd-c.responseStart),"1040.906="+(c.responseEnd-c.domainLookupStart),"1310.2084="+(c.domLoading-c.responseStart),"1310.2085="+(c.domInteractive-c.responseStart),"1310.1309="+(t-e),"1310.1007="+(e-c.responseStart),navigator.deviceMemory&&"3140="+navigator.deviceMemory,navigator.hardwareConcurrency&&"3141="+navigator.hardwareConcurrency]);Object.keys(E).forEach((function(e){e in c&&c[e]&&n.push(E[e]+"="+N(c[e],s))})),l.vsStart?(n.push("1484="+(S[l.vsStart]||2771)),l.vsChanged&&n.push("1484.719=1")):n.push("1484="+S["visible"]);var r=a.navigation||{};r&&(r.redirectCount&&n.push("1384.1385="+r.redirectCount),1!==r.type&&2!==r.type||n.push("770.76="+r.type)),G(n),X("690.1033",n)}else setTimeout(L,50)}var P,j={},M=0;function C(e,t){!function(e,t){J.href=e;var n=J.href,r=0,i=100;setTimeout((function e(){var o=a.getEntriesByName(n);if(o.length)return t(o);r++<10?(setTimeout(e,i),i+=i):t(null)}),0)}(t,(function(n){if(n){var r=K(e);H("sendUrlInResTiming")&&r.push("13="+encodeURIComponent(t)),Q(r,n[0]),X("690.2096.2044",r)}}))}function D(e,t,n){var r,i,o=l._deltaMarks[e];if(void 0!==t?r=(i=z())-t:o&&(r=o[0],i=o[1],n=o[2]),void 0!==r&&void 0!==i){var a=K(e);a.push("207.2154="+N(r),"207.1428="+N(i),"2877="+N(i-r)),F(a,n)&&(X("690.2096.2877",a),delete l._deltaMarks[e])}}function I(e,t,n){l._accumulatedDeltas[e]||(l._accumulatedDeltas[e]={count:0,sumDelta:0,deltaVars:{}}),l._accumulatedDeltas[e].count++,l._accumulatedDeltas[e].sumDelta+=t,l._accumulatedDeltas[e].deltaVars=i({},l._accumulatedDeltas[e].deltaVars,{},n)}function R(){Object.keys(l._accumulatedDeltas).forEach((function(e){var t=l._accumulatedDeltas[e];D(e,t.sumDelta,{"-additional":encodeURIComponent(n.lv["json"].stringify(i({},t.deltaVars,{count:t.count})))})}))}function U(){if(null!=P){var e=Math.round(1e6*P)/1e6;X("690.2096.4004",y.concat("s="+e)),P=null}}l.sendAccumulatedDelta=I;var x=null,B=!1;function V(){null!=x&&(g("largest-contentful-paint",x),x=null)}var q=function(){if(H("forcePaintTimeSending")||!A()){var e=H("elementTimingEntryFilter"),t=function(t){return"function"!=typeof e||e(t)};try{var n=new u((function(e){for(var r=e.getEntries(),i=0;i<r.length;i++){var o=r[i];if(l.isUserInteract){n.disconnect();break}t(o)&&g("element-timing."+o.identifier,o.startTime)}}));n.observe({type:"element",buffered:!0,allowTGOFromShadowDOM:!0})}catch(e){}}};function z(){return a.now()}function A(){return l.vsStart&&("visible"!==l.vsStart||l.vsChanged)}function H(e){var t=l._settings[e];return null===t?null:t||""}function N(e,t){return"string"==typeof e?encodeURIComponent(e):Math.round(1e3*(e-(t||0)))/1e3}function X(e,t){m(e,t.filter(Boolean).join(","))}function F(e,t){if(t){var n=e.reduce((function(e,t,n){"string"==typeof t&&(e[t.split("=")[0]]=n);return e}),{});Object.keys(t).forEach((function(r){if("function"!=typeof t[r]){var i=n[r],o=r+"="+t[r];void 0===i?e.push(o):e[i]=o}}))}return!0}function G(e){var t=navigator.connection;t&&e.push("2437="+(w[t.type]||2771),void 0!==t.downlinkMax&&"2439="+t.downlinkMax,t.effectiveType&&"2870="+t.effectiveType,void 0!==t.rtt&&"rtt="+t.rtt,void 0!==t.downlink&&"dwl="+t.downlink)}t.sendElementTiming=q;var J=document.createElement("link");function Y(e,t){return t=t||0,(e=e||[]).filter((function(e){return e.startTime-t>=-50})).map((function(e){var t=e.name?e.name.split("-").map((function(e){return e[0]})).join(""):"u",n=Math.floor(e.startTime);return t+"-"+n+"-"+Math.floor(n+e.duration)})).join(".")}function K(e){return h.concat(["1701="+e])}function Q(e,t){Object.keys(E).forEach((function(n){if(n in t){var r=t[n];(r||0===r)&&e.push(E[n]+"="+N(r))}}))}var W="isUserScroll",Z="isUserInteract",$="isVisibilityChanged",ee="isLoadEventDelayPassed"},1577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initScrollStats=void 0;var r=[],i=[];function o(e){for(var t=0,n=0;n<e.length;++n)t+=e[n]*e[n];return Math.sqrt(t/e.length)}t.initScrollStats=function(e){e.getSetting("scrollMetric")&&(!function(e){var t,n,i=!1;addEventListener("scroll",(function(){var o=e.getTime();i?r.push(o-t):i=!0,t=o,clearTimeout(n),n=window.setTimeout((function(){i=!1}),500)}))}(e),n(1365).pushPeriodicTask((function(){if(r.length){var t=e.getMarkCommonVars().concat(["d="+o(r)]);e.sendCounter("690.2096.768",t),r=[]}return!0}))),e.getSetting("scrollLatencyMetric")&&function(){try{if(!window.PerformanceScrollUpdateLatency)return!1;new PerformanceObserver((function(e){e.getEntries().forEach((function(e){i.push(e.duration)}))})).observe({entryTypes:["scrollUpdateLatency"]})}catch(e){return!1}return!0}()&&n(1365).pushPeriodicTask((function(){if(i.length){var t=e.getMarkCommonVars().concat(["d="+o(i)]);e.sendCounter("690.2096.768.2373",t),i=[]}return!0}))}},534:function(e,t,n){"use strict";var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]},o=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e["default"]=t},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t}(n(1576));e.exports=r(r({},a),{init:function(e,t){var r=a.init(e,t);return n(1365).initPeriodicStats(a),n(1577).initScrollStats(a),r}})}}]);