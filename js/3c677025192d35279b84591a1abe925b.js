;// bundle: page___2007dfe6d39bd28d4fb466e00ee467c9_m
;// files: PageStyleNotifications.js, utilities/robloxAds.js, history.js/jquery.history.js, utilities/popover.js, Navigation/ShopAmazon.js, GenericConfirmation.js

;// PageStyleNotifications.js
$(function(){$(".pagification .pagification-showall, .pagification .pagification-collapse").click(function(){$(this).parents(".pagification-body").toggleClass("collapsed")})});

;// utilities/robloxAds.js
"use strict";var Roblox=Roblox||{};Roblox.AdsHelper=Roblox.AdsHelper||{},Roblox.AdsLibrary={},Roblox.AdsLibrary.adsIdList=["Skyscraper-Adp-Left","Skyscraper-Adp-Right","Leaderboard-Abp","GamePageAdDiv1","GamePageAdDiv2","GamePageAdDiv3","ProfilePageAdDiv1","ProfilePageAdDiv2"],Roblox.AdsLibrary.adsParameters={"Skyscraper-Adp-Left":{element:$("#Skyscraper-Adp-Left"),template:null,fitTwoAds:!0,fitOneAd:!1,isSkyscraper:!0},"Skyscraper-Adp-Right":{element:$("#Skyscraper-Adp-Right"),tempalte:null,fitTwoAds:!0,fitOneAd:!0,isSkyscraper:!0},"Leaderboard-Abp":{element:$("#Leaderboard-Abp"),tempalte:null,fitTwoAds:!0,fitOneAd:!0,isLeaderboard:!0},GamePageAdDiv1:{element:$("#GamePageAdDiv1"),template:null,isPageAd:!0},GamePageAdDiv2:{element:$("#GamePageAdDiv2"),template:null,isPageAd:!0},GamePageAdDiv3:{element:$("#GamePageAdDiv3"),template:null,isPageAd:!0},ProfilePageAdDiv1:{element:$("#ProfilePageAdDiv1"),template:null,isPageAd:!0},ProfilePageAdDiv2:{element:$("#ProfilePageAdDiv2"),template:null,isPageAd:!0}},Roblox.AdsHelper.AdRefresher=function(){function c(n){return!n||!$.trim($(n).html())}function h(n){t.push(n)}function s(){return googletag.pubadsReady}function r(n){var u,f,e,i;typeof n=="undefined"&&(n=v),u=!1;for(f in t){if(e="#"+t[f]+" [data-js-adtype]",i=$(e),typeof i=="undefined")return;if(i.attr("data-js-adtype")==="iframead")o(i);else if(i.attr("data-js-adtype")==="gptAd")if(s())u=!0;else if(n>0){setTimeout(function(){r(--n)},y);break}}u&&googletag.cmd.push(function(){googletag.pubads().refresh()})}function o(n){var i=n.attr("src"),r,u,t;typeof i=="string"&&(r=i.indexOf("?")<0?"?":"&",u=i+r+"nocache="+(new Date).getMilliseconds().toString(),typeof n[0]!="undefined")&&(t=n[0].contentDocument,t===undefined&&(t=n[0].contentWindow),t.location.href!=="about:blank"&&t.location.replace(u))}function n(n,t,i){i.length&&c(i)&&(i.append(n),r())}function b(){for(var u=$(window).width(),f,r,t,i=0;i<Roblox.AdsLibrary.adsIdList.length;i++)r=Roblox.AdsLibrary.adsIdList[i],t=Roblox.AdsLibrary.adsParameters[r],t&&!t.template&&(f=t.element,t.template=f.html());for(i=0;i<Roblox.AdsLibrary.adsIdList.length;i++)(r=Roblox.AdsLibrary.adsIdList[i],t=Roblox.AdsLibrary.adsParameters[r],t)&&(t.isSkyscraper?u>=e&&t.fitTwoAds?n(t.template,r,t.element):u<e&&u>=l?t.fitOneAd?n(t.template,r,t.element):t.element.empty():t.element.empty():t.isLeaderboard?u<p?t.element.empty():n(t.template,r,t.element):t.isPageAd&&(u<w?t.element.empty():n(t.template,r,t.element)))}var t=[],i=20,u=970,f=160,p=728,y=100,v=16,e=$("[data-max-width-for-two-ads]").attr("data-max-width-for-two-ads")||u+f*2+48-i,l=$("[data-max-width-for-one-ads]").attr("data-max-width-for-one-ads")||u+f+24-i,a=1024,w=a-i;return{registerAd:h,refreshAds:r,adjustAdsFitScreen:b,getAds:n}}(),Roblox.AdsHelper.DynamicAdCreator=function(){function n(){var n=$(".dynamic-ad").filter(".unpopulated");n.each(function(n,t){var i=$(t),u=i.attr("data-ad-slot"),f=parseInt(i.attr("data-ad-width")),e=parseInt(i.attr("data-ad-height")),r=i.children(".ad-slot").attr("id");googletag.cmd.push(function(){var n=googletag.defineSlot(u,[f,e],r).addService(googletag.pubads());googletag.display(r),googletag.pubads().refresh([n])}),i.removeClass("unpopulated")})}return{populateNewAds:n}}(),$(function(){$(window).resize(function(){Roblox.AdsHelper.AdRefresher.adjustAdsFitScreen()})});

;// history.js/jquery.history.js
typeof JSON!="object"&&(JSON={}),function(){"use strict";function i(n){return n<10?"0"+n:n}function f(n){return o.lastIndex=0,o.test(n)?'"'+n.replace(o,function(n){var t=s[n];return typeof t=="string"?t:"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function r(i,e){var s,l,h,a,v=n,c,o=e[i];o&&typeof o=="object"&&typeof o.toJSON=="function"&&(o=o.toJSON(i)),typeof t=="function"&&(o=t.call(e,i,o));switch(typeof o){case"string":return f(o);case"number":return isFinite(o)?String(o):"null";case"boolean":case"null":return String(o);case"object":if(!o)return"null";if(n+=u,c=[],Object.prototype.toString.apply(o)==="[object Array]"){for(a=o.length,s=0;s<a;s+=1)c[s]=r(s,o)||"null";return h=c.length===0?"[]":n?"[\n"+n+c.join(",\n"+n)+"\n"+v+"]":"["+c.join(",")+"]",n=v,h}if(t&&typeof t=="object")for(a=t.length,s=0;s<a;s+=1)typeof t[s]=="string"&&(l=t[s],h=r(l,o),h&&c.push(f(l)+(n?": ":":")+h));else for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(h=r(l,o),h&&c.push(f(l)+(n?": ":":")+h));return h=c.length===0?"{}":n?"{\n"+n+c.join(",\n"+n)+"\n"+v+"}":"{"+c.join(",")+"}",n=v,h}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+i(this.getUTCMonth()+1)+"-"+i(this.getUTCDate())+"T"+i(this.getUTCHours())+":"+i(this.getUTCMinutes())+":"+i(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n,u,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},t;typeof JSON.stringify!="function"&&(JSON.stringify=function(i,f,e){var o;if(n="",u="",typeof e=="number")for(o=0;o<e;o+=1)u+=" ";else typeof e=="string"&&(u=e);if(t=f,!f||typeof f=="function"||typeof f=="object"&&typeof f.length=="number")return r("",{"":i});throw new Error("JSON.stringify");}),typeof JSON.parse!="function"&&(JSON.parse=function(n,t){function r(n,i){var f,e,u=n[i];if(u&&typeof u=="object")for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&(e=r(u,f),e!==undefined?u[f]=e:delete u[f]);return t.call(n,i,u)}var i;if(n=String(n),e.lastIndex=0,e.test(n)&&(n=n.replace(e,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return i=eval("("+n+")"),typeof t=="function"?r({"":i},""):i;throw new SyntaxError("JSON.parse");})}(),function(n,t){"use strict";var i=n.History=n.History||{},r=n.jQuery;if(typeof i.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");i.Adapter={bind:function(n,t,i){r(n).bind(t,i)},trigger:function(n,t,i){r(n).trigger(t,i)},extractEventData:function(n,i,r){return i&&i.originalEvent&&i.originalEvent[n]||r&&r[n]||t},onDomLoad:function(n){r(n)}},typeof i.init!="undefined"&&i.init()}(window),function(n){"use strict";var r=n.document,f=n.setTimeout||f,e=n.clearTimeout||e,u=n.setInterval||u,i=n.History=n.History||{};if(typeof i.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");i.initHtml4=function(){if(typeof i.initHtml4.initialized!="undefined")return!1;i.initHtml4.initialized=!0,i.enabled=!0,i.savedHashes=[],i.isLastHash=function(n){var r=i.getHashByIndex(),t;return t=n===r,t},i.isHashEqual=function(n,t){return n=encodeURIComponent(n).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),n===t},i.saveHash=function(n){return i.isLastHash(n)?!1:(i.savedHashes.push(n),!0)},i.getHashByIndex=function(n){var t=null;return t=typeof n=="undefined"?i.savedHashes[i.savedHashes.length-1]:n<0?i.savedHashes[i.savedHashes.length+n]:i.savedHashes[n],t},i.discardedHashes={},i.discardedStates={},i.discardState=function(n,t,r){var f=i.getHashByState(n),u;return u={discardedState:n,backState:r,forwardState:t},i.discardedStates[f]=u,!0},i.discardHash=function(n,t,r){var u={discardedHash:n,backState:r,forwardState:t};return i.discardedHashes[n]=u,!0},i.discardedState=function(n){var r=i.getHashByState(n),t;return t=i.discardedStates[r]||!1,t},i.discardedHash=function(n){return i.discardedHashes[n]||!1},i.recycleState=function(n){var t=i.getHashByState(n);return i.discardedState(n)&&delete i.discardedStates[t],!0},i.emulated.hashChange&&(i.hashChangeInit=function(){i.checkerFunction=null;var f="",s,t,e,o,h=Boolean(i.getHash());return i.isInternetExplorer()?(s="historyjs-iframe",t=r.createElement("iframe"),t.setAttribute("id",s),t.setAttribute("src","#"),t.style.display="none",r.body.appendChild(t),t.contentWindow.document.open(),t.contentWindow.document.close(),e="",o=!1,i.checkerFunction=function(){if(o)return!1;o=!0;var u=i.getHash(),r=i.getHash(t.contentWindow.document);return u!==f?(f=u,r!==u&&(e=r=u,t.contentWindow.document.open(),t.contentWindow.document.close(),t.contentWindow.document.location.hash=i.escapeHash(u)),i.Adapter.trigger(n,"hashchange")):r!==e&&(e=r,h&&r===""?i.back():i.setHash(r,!1)),o=!1,!0}):i.checkerFunction=function(){var t=i.getHash()||"";return t!==f&&(f=t,i.Adapter.trigger(n,"hashchange")),!0},i.intervalList.push(u(i.checkerFunction,i.options.hashChangeInterval)),!0},i.Adapter.onDomLoad(i.hashChangeInit)),i.emulated.pushState&&(i.onHashChange=function(t){var e=t&&t.newURL||i.getLocationHref(),u=i.getHashByUrl(e),r=null,o=null,s=null,f;return i.isLastHash(u)?(i.busy(!1),!1):(i.doubleCheckComplete(),i.saveHash(u),u&&i.isTraditionalAnchor(u)?(i.Adapter.trigger(n,"anchorchange"),i.busy(!1),!1):(r=i.extractState(i.getFullUrl(u||i.getLocationHref()),!0),i.isLastSavedState(r)?(i.busy(!1),!1):(o=i.getHashByState(r),f=i.discardedState(r),f?(i.getHashByIndex(-2)===i.getHashByState(f.forwardState)?i.back(!1):i.forward(!1),!1):(i.pushState(r.data,r.title,encodeURI(r.url),!1),!0))))},i.Adapter.bind(n,"hashchange",i.onHashChange),i.pushState=function(t,r,u,f){if(u=encodeURI(u).replace(/%25/g,"%"),i.getHashByUrl(u))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(f!==!1&&i.busy())return i.pushQueue({scope:i,callback:i.pushState,args:arguments,queue:f}),!1;i.busy(!0);var e=i.createStateObject(t,r,u),o=i.getHashByState(e),s=i.getState(!1),h=i.getHashByState(s),c=i.getHash(),l=i.expectedStateId==e.id;return i.storeState(e),i.expectedStateId=e.id,i.recycleState(e),i.setTitle(e),o===h?(i.busy(!1),!1):(i.saveState(e),l||i.Adapter.trigger(n,"statechange"),!i.isHashEqual(o,c)&&!i.isHashEqual(o,i.getShortUrl(i.getLocationHref()))&&i.setHash(o,!1),i.busy(!1),!0)},i.replaceState=function(t,r,u,f){if(u=encodeURI(u).replace(/%25/g,"%"),i.getHashByUrl(u))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(f!==!1&&i.busy())return i.pushQueue({scope:i,callback:i.replaceState,args:arguments,queue:f}),!1;i.busy(!0);var e=i.createStateObject(t,r,u),s=i.getHashByState(e),o=i.getState(!1),h=i.getHashByState(o),c=i.getStateByIndex(-2);return i.discardState(o,e,c),s===h?(i.storeState(e),i.expectedStateId=e.id,i.recycleState(e),i.setTitle(e),i.saveState(e),i.Adapter.trigger(n,"statechange"),i.busy(!1)):i.pushState(e.data,e.title,e.url,!1),!0}),i.emulated.pushState&&i.getHash()&&!i.emulated.hashChange&&i.Adapter.onDomLoad(function(){i.Adapter.trigger(n,"hashchange")})},typeof i.init!="undefined"&&i.init()}(window),function(n,t){"use strict";var e=n.console||t,r=n.document,o=n.navigator,f=n.sessionStorage||!1,h=n.setTimeout,c=n.clearTimeout,l=n.setInterval,a=n.clearInterval,u=n.JSON,v=n.alert,i=n.History=n.History||{},s=n.history;try{f.setItem("TEST","1"),f.removeItem("TEST")}catch(y){f=!1}if(u.stringify=u.stringify||u.encode,u.parse=u.parse||u.decode,typeof i.init!="undefined")throw new Error("History.js Core has already been loaded...");i.init=function(){return typeof i.Adapter=="undefined"?!1:(typeof i.initCore!="undefined"&&i.initCore(),typeof i.initHtml4!="undefined"&&i.initHtml4(),!0)},i.initCore=function(){if(typeof i.initCore.initialized!="undefined")return!1;if(i.initCore.initialized=!0,i.options=i.options||{},i.options.hashChangeInterval=i.options.hashChangeInterval||100,i.options.safariPollInterval=i.options.safariPollInterval||500,i.options.doubleCheckInterval=i.options.doubleCheckInterval||500,i.options.disableSuid=i.options.disableSuid||!1,i.options.storeInterval=i.options.storeInterval||1e3,i.options.busyDelay=i.options.busyDelay||250,i.options.debug=i.options.debug||!1,i.options.initialTitle=i.options.initialTitle||r.title,i.options.html4Mode=i.options.html4Mode||!1,i.options.delayInit=i.options.delayInit||!1,i.intervalList=[],i.clearAllIntervals=function(){var n,t=i.intervalList;if(typeof t!="undefined"&&t!==null){for(n=0;n<t.length;n++)a(t[n]);i.intervalList=null}},i.debug=function(){(i.options.debug||!1)&&i.log.apply(i,arguments)},i.log=function(){var s=typeof e!="undefined"&&typeof e.log!="undefined"&&typeof e.log.apply!="undefined",t=r.getElementById("log"),n,f,h,o,i;for(s?(o=Array.prototype.slice.call(arguments),n=o.shift(),typeof e.debug!="undefined"?e.debug.apply(e,[n,o]):e.log.apply(e,[n,o])):n="\n"+arguments[0]+"\n",f=1,h=arguments.length;f<h;++f){if(i=arguments[f],typeof i=="object"&&typeof u!="undefined")try{i=u.stringify(i)}catch(c){}n+="\n"+i+"\n"}return t?(t.value+=n+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):s||v(n),!0},i.getInternetExplorerMajorVersion=function(){return i.getInternetExplorerMajorVersion.cached=typeof i.getInternetExplorerMajorVersion.cached!="undefined"?i.getInternetExplorerMajorVersion.cached:function(){for(var n=3,t=r.createElement("div"),i=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++n+"]><i></i><![endif]-->")&&i[0];);return n>4?n:!1}()},i.isInternetExplorer=function(){return i.isInternetExplorer.cached=typeof i.isInternetExplorer.cached!="undefined"?i.isInternetExplorer.cached:Boolean(i.getInternetExplorerMajorVersion())},i.emulated=i.options.html4Mode?{pushState:!0,hashChange:!0}:{pushState:!Boolean(n.history&&n.history.pushState&&n.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(o.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(o.userAgent)),hashChange:Boolean(!("onhashchange"in n||"onhashchange"in r)||i.isInternetExplorer()&&i.getInternetExplorerMajorVersion()<8)},i.enabled=!i.emulated.pushState,i.bugs={setHash:Boolean(!i.emulated.pushState&&o.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),safariPoll:Boolean(!i.emulated.pushState&&o.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)),ieDoubleCheck:Boolean(i.isInternetExplorer()&&i.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(i.isInternetExplorer()&&i.getInternetExplorerMajorVersion()<7)},i.isEmptyObject=function(n){for(var t in n)if(n.hasOwnProperty(t))return!1;return!0},i.cloneObject=function(n){var i,t;return n?(i=u.stringify(n),t=u.parse(i)):t={},t},i.getRootUrl=function(){var n=r.location.protocol+"//"+(r.location.hostname||r.location.host);return(r.location.port||!1)&&(n+=":"+r.location.port),n+="/",n},i.getBaseHref=function(){var i=r.getElementsByTagName("base"),t=null,n="";return i.length===1&&(t=i[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},i.getBaseUrl=function(){return i.getBaseHref()||i.getBasePageUrl()||i.getRootUrl()},i.getPageUrl=function(){var r=i.getState(!1,!1),t=(r||{}).url||i.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(n){return/\./.test(n)?n:n+"/"}),n},i.getBasePageUrl=function(){return i.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(n){return/[^\/]$/.test(n)?"":n}).replace(/\/+$/,"")+"/"},i.getFullUrl=function(n,t){var r=n,u=n.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(n)||(r=u==="/"?i.getRootUrl()+n.replace(/^\/+/,""):u==="#"?i.getPageUrl().replace(/#.*/,"")+n:u==="?"?i.getPageUrl().replace(/[\?#].*/,"")+n:t?i.getBaseUrl()+n.replace(/^(\.\/)+/,""):i.getBasePageUrl()+n.replace(/^(\.\/)+/,"")),r.replace(/\#$/,"")},i.getShortUrl=function(n){var t=n,r=i.getBaseUrl(),u=i.getRootUrl();return i.emulated.pushState&&(t=t.replace(r,"")),t=t.replace(u,"/"),i.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},i.getLocationHref=function(n){return n=n||r,n.URL===n.location.href?n.location.href:n.location.href===decodeURIComponent(n.URL)?n.URL:n.location.hash&&decodeURIComponent(n.location.href.replace(/^[^#]+/,""))===n.location.hash?n.location.href:n.URL.indexOf("#")==-1&&n.location.href.indexOf("#")!=-1?n.location.href:n.URL||n.location.href},i.store={},i.idToState=i.idToState||{},i.stateToId=i.stateToId||{},i.urlToId=i.urlToId||{},i.storedStates=i.storedStates||[],i.savedStates=i.savedStates||[],i.normalizeStore=function(){i.store.idToState=i.store.idToState||{},i.store.urlToId=i.store.urlToId||{},i.store.stateToId=i.store.stateToId||{}},i.getState=function(n,t){typeof n=="undefined"&&(n=!0),typeof t=="undefined"&&(t=!0);var r=i.getLastSavedState();return!r&&t&&(r=i.createStateObject()),n&&(r=i.cloneObject(r),r.url=r.cleanUrl||r.url),r},i.getIdByState=function(n){var t=i.extractId(n.url),r;if(!t)if(r=i.getStateString(n),typeof i.stateToId[r]!="undefined")t=i.stateToId[r];else if(typeof i.store.stateToId[r]!="undefined")t=i.store.stateToId[r];else{for(;;)if(t=+new Date+String(Math.random()).replace(/\D/g,""),typeof i.idToState[t]=="undefined"&&typeof i.store.idToState[t]=="undefined")break;i.stateToId[r]=t,i.idToState[t]=n}return t},i.normalizeState=function(n){var t,r;return(n&&typeof n=="object"||(n={}),typeof n.normalized!="undefined")?n:(n.data&&typeof n.data=="object"||(n.data={}),t={},t.normalized=!0,t.title=n.title||"",t.url=i.getFullUrl(n.url?n.url:i.getLocationHref()),t.hash=i.getShortUrl(t.url),t.data=i.cloneObject(n.data),t.id=i.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,r=!i.isEmptyObject(t.data),(t.title||r)&&i.options.disableSuid!==!0&&(t.hash=i.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=i.getFullUrl(t.hash),(i.emulated.pushState||i.bugs.safariPoll)&&i.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},i.createStateObject=function(n,t,r){var u={data:n,title:t,url:r};return u=i.normalizeState(u),u},i.getStateById=function(n){n=String(n);return i.idToState[n]||i.store.idToState[n]||t},i.getStateString=function(n){var t,r,f;return t=i.normalizeState(n),r={data:t.data,title:n.title,url:n.url},f=u.stringify(r),f},i.getStateId=function(n){var t,r;return t=i.normalizeState(n),r=t.id,r},i.getHashByState=function(n){var t,r;return t=i.normalizeState(n),r=t.hash,r},i.extractId=function(n){var r,t,u,i;return i=n.indexOf("#")!=-1?n.split("#")[0]:n,t=/(.*)\&_suid=([0-9]+)$/.exec(i),u=t?t[1]||n:n,r=t?String(t[2]||""):"",r||!1},i.isTraditionalAnchor=function(n){return!/[\/\?\.]/.test(n)},i.extractState=function(n,t){var r=null,u,f;return t=t||!1,u=i.extractId(n),u&&(r=i.getStateById(u)),r||(f=i.getFullUrl(n),u=i.getIdByUrl(f)||!1,u&&(r=i.getStateById(u)),!r&&t&&!i.isTraditionalAnchor(n)&&(r=i.createStateObject(null,null,f))),r},i.getIdByUrl=function(n){return i.urlToId[n]||i.store.urlToId[n]||t},i.getLastSavedState=function(){return i.savedStates[i.savedStates.length-1]||t},i.getLastStoredState=function(){return i.storedStates[i.storedStates.length-1]||t},i.hasUrlDuplicate=function(n){var r=!1,t;return t=i.extractState(n.url),r=t&&t.id!==n.id,r},i.storeState=function(n){return i.urlToId[n.url]=n.id,i.storedStates.push(i.cloneObject(n)),n},i.isLastSavedState=function(n){var t=!1,r,u,f;return i.savedStates.length&&(r=n.id,u=i.getLastSavedState(),f=u.id,t=r===f),t},i.saveState=function(n){return i.isLastSavedState(n)?!1:(i.savedStates.push(i.cloneObject(n)),!0)},i.getStateByIndex=function(n){var t=null;return t=typeof n=="undefined"?i.savedStates[i.savedStates.length-1]:n<0?i.savedStates[i.savedStates.length+n]:i.savedStates[n],t},i.getCurrentIndex=function(){var n=null;return n=i.savedStates.length<1?0:i.savedStates.length-1,n},i.getHash=function(n){var r=i.getLocationHref(n),t;return t=i.getHashByUrl(r),t},i.unescapeHash=function(n){var t=i.normalizeHash(n);return t=decodeURIComponent(t),t},i.normalizeHash=function(n){return n.replace(/[^#]*#/,"").replace(/#.*/,"")},i.setHash=function(n,t){var u,f;return t!==!1&&i.busy()?(i.pushQueue({scope:i,callback:i.setHash,args:arguments,queue:t}),!1):(i.busy(!0),u=i.extractState(n,!0),u&&!i.emulated.pushState?i.pushState(u.data,u.title,u.url,!1):i.getHash()!==n&&(i.bugs.setHash?(f=i.getPageUrl(),i.pushState(null,null,f+"#"+n,!1)):r.location.hash=n),i)},i.escapeHash=function(t){var r=i.normalizeHash(t);return r=n.encodeURIComponent(r),i.bugs.hashEscape||(r=r.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),r},i.getHashByUrl=function(n){var t=String(n).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=i.unescapeHash(t),t},i.setTitle=function(n){var t=n.title,u;t||(u=i.getStateByIndex(0),u&&u.url===n.url&&(t=u.title||i.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(f){}return r.title=t,i},i.queues=[],i.busy=function(n){if(typeof n!="undefined"?i.busy.flag=n:typeof i.busy.flag=="undefined"&&(i.busy.flag=!1),!i.busy.flag){c(i.busy.timeout);var t=function(){var n,r,u;if(!i.busy.flag)for(n=i.queues.length-1;n>=0;--n)(r=i.queues[n],r.length!==0)&&(u=r.shift(),i.fireQueueItem(u),i.busy.timeout=h(t,i.options.busyDelay))};i.busy.timeout=h(t,i.options.busyDelay)}return i.busy.flag},i.busy.flag=!1,i.fireQueueItem=function(n){return n.callback.apply(n.scope||i,n.args||[])},i.pushQueue=function(n){return i.queues[n.queue||0]=i.queues[n.queue||0]||[],i.queues[n.queue||0].push(n),i},i.queue=function(n,t){return typeof n=="function"&&(n={callback:n}),typeof t!="undefined"&&(n.queue=t),i.busy()?i.pushQueue(n):i.fireQueueItem(n),i},i.clearQueue=function(){return i.busy.flag=!1,i.queues=[],i},i.stateChanged=!1,i.doubleChecker=!1,i.doubleCheckComplete=function(){return i.stateChanged=!0,i.doubleCheckClear(),i},i.doubleCheckClear=function(){return i.doubleChecker&&(c(i.doubleChecker),i.doubleChecker=!1),i},i.doubleCheck=function(n){return i.stateChanged=!1,i.doubleCheckClear(),i.bugs.ieDoubleCheck&&(i.doubleChecker=h(function(){return i.doubleCheckClear(),i.stateChanged||n(),!0},i.options.doubleCheckInterval)),i},i.safariStatePoll=function(){var r=i.extractState(i.getLocationHref()),t;if(!i.isLastSavedState(r))return t=r,t||(t=i.createStateObject()),i.Adapter.trigger(n,"popstate"),i},i.back=function(n){return n!==!1&&i.busy()?(i.pushQueue({scope:i,callback:i.back,args:arguments,queue:n}),!1):(i.busy(!0),i.doubleCheck(function(){i.back(!1)}),s.go(-1),!0)},i.forward=function(n){return n!==!1&&i.busy()?(i.pushQueue({scope:i,callback:i.forward,args:arguments,queue:n}),!1):(i.busy(!0),i.doubleCheck(function(){i.forward(!1)}),s.go(1),!0)},i.go=function(n,t){var r;if(n>0)for(r=1;r<=n;++r)i.forward(t);else{if(!(n<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(r=-1;r>=n;--r)i.back(t)}return i},i.emulated.pushState){var p=function(){};i.pushState=i.pushState||p,i.replaceState=i.replaceState||p}else i.onPopState=function(t,r){var e=!1,u=!1,o,f;return i.doubleCheckComplete(),o=i.getHash(),o?(f=i.extractState(o||i.getLocationHref(),!0),f?i.replaceState(f.data,f.title,f.url,!1):(i.Adapter.trigger(n,"anchorchange"),i.busy(!1)),i.expectedStateId=!1,!1):(e=i.Adapter.extractEventData("state",t,r)||!1,u=e?i.getStateById(e):i.expectedStateId?i.getStateById(i.expectedStateId):i.extractState(i.getLocationHref()),u||(u=i.createStateObject(null,null,i.getLocationHref())),i.expectedStateId=!1,i.isLastSavedState(u)?(i.busy(!1),!1):(i.storeState(u),i.saveState(u),i.setTitle(u),i.Adapter.trigger(n,"statechange"),i.busy(!1),!0))},i.Adapter.bind(n,"popstate",i.onPopState),i.pushState=function(t,r,u,f){if(i.getHashByUrl(u)&&i.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&i.busy())return i.pushQueue({scope:i,callback:i.pushState,args:arguments,queue:f}),!1;i.busy(!0);var e=i.createStateObject(t,r,u);return i.isLastSavedState(e)?i.busy(!1):(i.storeState(e),i.expectedStateId=e.id,s.pushState(e.id,e.title,e.url),i.Adapter.trigger(n,"popstate")),!0},i.replaceState=function(t,r,u,f){if(i.getHashByUrl(u)&&i.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&i.busy())return i.pushQueue({scope:i,callback:i.replaceState,args:arguments,queue:f}),!1;i.busy(!0);var e=i.createStateObject(t,r,u);return i.isLastSavedState(e)?i.busy(!1):(i.storeState(e),i.expectedStateId=e.id,s.replaceState(e.id,e.title,e.url),i.Adapter.trigger(n,"popstate")),!0};if(f){try{i.store=u.parse(f.getItem("History.store"))||{}}catch(w){i.store={}}i.normalizeStore()}else i.store={},i.normalizeStore();i.Adapter.bind(n,"unload",i.clearAllIntervals),i.saveState(i.storeState(i.extractState(i.getLocationHref(),!0))),f&&(i.onUnload=function(){var n,t,r;try{n=u.parse(f.getItem("History.store"))||{}}catch(e){n={}}n.idToState=n.idToState||{},n.urlToId=n.urlToId||{},n.stateToId=n.stateToId||{};for(t in i.idToState)i.idToState.hasOwnProperty(t)&&(n.idToState[t]=i.idToState[t]);for(t in i.urlToId)i.urlToId.hasOwnProperty(t)&&(n.urlToId[t]=i.urlToId[t]);for(t in i.stateToId)i.stateToId.hasOwnProperty(t)&&(n.stateToId[t]=i.stateToId[t]);i.store=n,i.normalizeStore(),r=u.stringify(n);try{f.setItem("History.store",r)}catch(o){if(o.code!==DOMException.QUOTA_EXCEEDED_ERR)throw o;f.length&&(f.removeItem("History.store"),f.setItem("History.store",r))}},i.intervalList.push(l(i.onUnload,i.options.storeInterval)),i.Adapter.bind(n,"beforeunload",i.onUnload),i.Adapter.bind(n,"unload",i.onUnload)),i.emulated.pushState||(i.bugs.safariPoll&&i.intervalList.push(l(i.safariStatePoll,i.options.safariPollInterval)),(o.vendor==="Apple Computer, Inc."||(o.appCodeName||"")==="Mozilla")&&(i.Adapter.bind(n,"hashchange",function(){i.Adapter.trigger(n,"popstate")}),i.getHash()&&i.Adapter.onDomLoad(function(){i.Adapter.trigger(n,"hashchange")})))},(!i.options||!i.options.delayInit)&&i.init()}(window);

;// utilities/popover.js
var Roblox=Roblox||{};Roblox.Popover=function(){"use strict";function u(n,i){var u=$(n),f=$(i),e=$(t),h=e.outerWidth(),c=u.find(r).outerWidth(),l=e.offset().left,o=0,s;(u.hasClass("bottom")||u.hasClass("top"))&&(s=$("body").outerWidth()-parseInt(f.width()+f.offset().left),o=$("body").outerWidth()-l-s-h/2-c/2,u.find(r).css("right",o))}function f(t){return t.data("hiddenClassName")&&(n=t.data("hiddenClassName")),n}function o(){$(t).on("click touchstart",function(t){var s=$(this).data("bind"),h=s?"#"+s:i,r=$(h),c=$(this).data("container"),l=c?"#"+c:e,o;n=f(r),r.hasClass("manual")||r.toggleClass(n),o=!r.hasClass(n),$(document).triggerHandler("Roblox.Popover.Status",{isOpen:o,eventType:t.type}),o&&u(h,l)})}function s(){$("body").on("click touchstart",function(r){$(t).each(function(){var u=$(this).data("bind"),t=u?$("#"+u):$(i),o="roblox-popover-open-always",e="roblox-popover-close";if(n=f(t),$(t).hasClass(o)&&!$(r.target).hasClass(e))return!1;!$(r.target).hasClass(e)&&($(this).is(r.target)||$(this).has(r.target).length!==0||t.has(r.target).length!==0||t.hasClass(n)||r.type!=="click")||(t.addClass(n),$(document).triggerHandler("Roblox.Popover.Status",{isHidden:!0,eventType:r.type}))})})}function h(){o(),s()}var t=".roblox-popover",i=".roblox-popover-content",e=".roblox-popover-container",r=".arrow",n="hidden";return $(function(){h()}),{setUpTrianglePosition:u}}();

;// Navigation/ShopAmazon.js
Roblox=Roblox||{},Roblox.ShopAmazon=function(){function t(){$("a.roblox-shop-interstitial").on("click",function(n){n.preventDefault(),Roblox.Dialog.open({titleText:"You are leaving ROBLOX",bodyContent:r(),allowHtmlContentInBody:!0,acceptText:"Continue to Shop",declineText:"Cancel",xToCancel:!0,acceptColor:Roblox.Dialog.green,declineColor:Roblox.Dialog.white,onAccept:i})})}function i(){window.open(n,"_blank")}function r(){return"<p>Your are about to visit our amazon store. You will be redirected to ROBLOX merchandise store on <a class='text-link' target='_blank' href='"+n+"' >Amazon.com</a>.</p> <p>Please note that you need to be over 18 to purchase products online. The amazon store is not part of ROBLOX.com and is governed by a separate privacy policy.</p>"}function u(){t()}var n="https://www.amazon.com/roblox?&_encoding=UTF8&tag=r05d13-20&linkCode=ur2&linkId=4ba2e1ad82f781c8e8cc98329b1066d0&camp=1789&creative=9325";$(function(){u()})}();

;// GenericConfirmation.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.GenericConfirmation=="undefined"&&(Roblox.GenericConfirmation=function(){function w(){n.isOpen=!1,t()}function k(t){var a,e,o,s,l;n.isOpen=!0,a={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.Resources.GenericConfirmation.yes,declineText:Roblox.Resources.GenericConfirmation.No,acceptColor:u,declineColor:f,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){}},t=$.extend({},a,t),c.overlayClose=t.dismissable,c.escClose=t.dismissable,e=$(i),e.html(t.acceptText),e.attr("class","btn-large "+t.acceptColor),e.unbind(),e.bind("click",function(){return v(e)?!1:(t.fieldValidationRequired?nt(t.onAccept):h(t.onAccept),!1)}),o=$(r),o.html(t.declineText),o.attr("class","btn-large "+t.declineColor),o.unbind(),o.bind("click",function(){return v(o)?!1:(h(t.onDecline),!1)}),$('[data-modal-handle="confirmation"] div.Title').text(t.titleText),s=$("[data-modal-handle='confirmation']"),t.imageUrl==null?s.addClass("noImage"):(s.find("img.GenericModalImage").attr("src",t.imageUrl),s.removeClass("noImage")),t.allowHtmlContentInBody?$("[data-modal-handle='confirmation'] div.Message").html(t.bodyContent):$("[data-modal-handle='confirmation'] div.Message").text(t.bodyContent),$.trim(t.footerText)==""?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide():$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show(),t.allowHtmlContentInFooter?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(t.footerText):$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(t.footerText),$("[data-modal-handle='confirmation']").modal(c),l=$("a.genericmodal-close"),l.unbind(),l.bind("click",function(){return h(t.onCancel),!1}),t.xToCancel||l.hide(),t.onOpenCallback()}function a(n){n.hasClass(f)?n.addClass(s):n.hasClass(l)?n.addClass(e):n.hasClass(u)&&n.addClass(o)}function v(n){return n.hasClass(o)||n.hasClass(s)||n.hasClass(e)?!0:!1}function b(){var n=$(i),t=$(r);a(n),a(t)}function g(){var u=$(i),t=$(r),n=o+" "+s+" "+e;u.removeClass(n),t.removeClass(n)}function p(){if(n.isOpen){var t=$(i);t.click()}}function y(){var n=$(r);n.click()}function t(t){n.isOpen=!1,typeof t!="undefined"?$.modal.close(t):$.modal.close()}function h(n){t(),typeof n=="function"&&n()}function nt(n){if(typeof n=="function"){var i=n();if(i!=="undefined"&&i==!1)return!1}t()}var l="btn-primary",u="btn-neutral",f="btn-negative",e="btn-disabled-primary",o="btn-disabled-neutral",s="btn-disabled-negative",d="btn-none",i="#roblox-confirm-btn",r="#roblox-decline-btn",n={isOpen:!1},c={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"},onClose:w};return{open:k,close:t,disableButtons:b,enableButtons:g,clickYes:p,clickNo:y,status:n,green:l,blue:u,gray:f,none:d}}()),$(document).keypress(function(n){Roblox.GenericConfirmation.status.isOpen&&n.which===13&&Roblox.GenericConfirmation.clickYes()});