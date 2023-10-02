/* dist/js/coreUtilities.bundle.min.js */
!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=71)}([function(t,e,r){"use strict";function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var k=r(42),I=r(44);function E(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=i,e.resolve=function(t,e){return i(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?i(t,!1,!0).resolveObject(e):e},e.format=function(t){I.isString(t)&&(t=i(t));return t instanceof E?t.format():E.prototype.format.call(t)},e.Url=E;var L=/^([a-z0-9.+-]+:)/i,n=/:[0-9]*$/,F=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,o=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),B=["'"].concat(o),D=["%","/","?",";","#"].concat(B),_=["/","?","#"],$=/^[+a-z0-9A-Z_-]{0,63}$/,z=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,H={javascript:!0,"javascript:":!0},M={javascript:!0,"javascript:":!0},X={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},Q=r(45);function i(t,e,r){if(t&&I.isObject(t)&&t instanceof E)return t;var n=new E;return n.parse(t,e,r),n}E.prototype.parse=function(t,e,r){if(!I.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+q(t));var n=t.indexOf("?"),o=-1!==n&&n<t.indexOf("#")?"?":"#",i=t.split(o);i[0]=i[0].replace(/\\/g,"/");var s=t=i.join(o);if(s=s.trim(),!r&&1===t.split("#").length){var a=F.exec(s);if(a)return this.path=s,this.href=s,this.pathname=a[1],a[2]?(this.search=a[2],this.query=e?Q.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var u=L.exec(s);if(u){var c=(u=u[0]).toLowerCase();this.protocol=c,s=s.substr(u.length)}if(r||u||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var f="//"===s.substr(0,2);!f||u&&M[u]||(s=s.substr(2),this.slashes=!0)}if(!M[u]&&(f||u&&!X[u])){for(var l,h,p=-1,d=0;d<_.length;d++){-1!==(m=s.indexOf(_[d]))&&(-1===p||m<p)&&(p=m)}-1!==(h=-1===p?s.lastIndexOf("@"):s.lastIndexOf("@",p))&&(l=s.slice(0,h),s=s.slice(h+1),this.auth=decodeURIComponent(l)),p=-1;for(d=0;d<D.length;d++){var m;-1!==(m=s.indexOf(D[d]))&&(-1===p||m<p)&&(p=m)}-1===p&&(p=s.length),this.host=s.slice(0,p),s=s.slice(p),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var v=this.hostname.split(/\./),g=(d=0,v.length);d<g;d++){var b=v[d];if(b&&!b.match($)){for(var w="",x=0,j=b.length;x<j;x++)127<b.charCodeAt(x)?w+="x":w+=b[x];if(!w.match($)){var S=v.slice(0,d),O=v.slice(d+1),C=b.match(z);C&&(S.push(C[1]),O.unshift(C[2])),O.length&&(s="/"+O.join(".")+s),this.hostname=S.join(".");break}}}255<this.hostname.length?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=k.toASCII(this.hostname));var A=this.port?":"+this.port:"",E=this.hostname||"";this.host=E+A,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==s[0]&&(s="/"+s))}if(!H[c])for(d=0,g=B.length;d<g;d++){var R=B[d];if(-1!==s.indexOf(R)){var T=encodeURIComponent(R);T===R&&(T=escape(R)),s=s.split(R).join(T)}}var P=s.indexOf("#");-1!==P&&(this.hash=s.substr(P),s=s.slice(0,P));var U=s.indexOf("?");if(-1!==U?(this.search=s.substr(U),this.query=s.substr(U+1),e&&(this.query=Q.parse(this.query)),s=s.slice(0,U)):e&&(this.search="",this.query={}),s&&(this.pathname=s),X[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){A=this.pathname||"";var N=this.search||"";this.path=A+N}return this.href=this.format(),this},E.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,i="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&I.isObject(this.query)&&Object.keys(this.query).length&&(i=Q.stringify(this.query));var s=this.search||i&&"?"+i||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||X[e])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o=o||"",n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),e+o+(r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(s=s.replace("#","%23"))+n},E.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},E.prototype.resolveObject=function(t){if(I.isString(t)){var e=new E;e.parse(t,!1,!0),t=e}for(var r=new E,n=Object.keys(this),o=0;o<n.length;o++){var i=n[o];r[i]=this[i]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var s=Object.keys(t),a=0;a<s.length;a++){var u=s[a];"protocol"!==u&&(r[u]=t[u])}return X[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!X[t.protocol]){for(var c=Object.keys(t),f=0;f<c.length;f++){var l=c[f];r[l]=t[l]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||M[t.protocol])r.pathname=t.pathname;else{for(var h=(t.pathname||"").split("/");h.length&&!(t.host=h.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==h[0]&&h.unshift(""),h.length<2&&h.unshift(""),r.pathname=h.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var p=r.pathname||"",d=r.search||"";r.path=p+d}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var m=r.pathname&&"/"===r.pathname.charAt(0),y=t.host||t.pathname&&"/"===t.pathname.charAt(0),v=y||m||r.host&&t.pathname,g=v,b=r.pathname&&r.pathname.split("/")||[],w=(h=t.pathname&&t.pathname.split("/")||[],r.protocol&&!X[r.protocol]);if(w&&(r.hostname="",r.port=null,r.host&&(""===b[0]?b[0]=r.host:b.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===h[0]?h[0]=t.host:h.unshift(t.host)),t.host=null),v=v&&(""===h[0]||""===b[0])),y)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,b=h;else if(h.length)(b=b||[]).pop(),b=b.concat(h),r.search=t.search,r.query=t.query;else if(!I.isNullOrUndefined(t.search)){if(w)r.hostname=r.host=b.shift(),(C=!!(r.host&&0<r.host.indexOf("@"))&&r.host.split("@"))&&(r.auth=C.shift(),r.host=r.hostname=C.shift());return r.search=t.search,r.query=t.query,I.isNull(r.pathname)&&I.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!b.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var x=b.slice(-1)[0],j=(r.host||t.host||1<b.length)&&("."===x||".."===x)||""===x,S=0,O=b.length;0<=O;O--)"."===(x=b[O])?b.splice(O,1):".."===x?(b.splice(O,1),S++):S&&(b.splice(O,1),S--);if(!v&&!g)for(;S--;)b.unshift("..");!v||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),j&&"/"!==b.join("/").substr(-1)&&b.push("");var C,A=""===b[0]||b[0]&&"/"===b[0].charAt(0);w&&(r.hostname=r.host=A?"":b.length?b.shift():"",(C=!!(r.host&&0<r.host.indexOf("@"))&&r.host.split("@"))&&(r.auth=C.shift(),r.host=r.hostname=C.shift()));return(v=v||r.host&&b.length)&&!A&&b.unshift(""),b.length?r.pathname=b.join("/"):(r.pathname=null,r.path=null),I.isNull(r.pathname)&&I.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},E.prototype.parseHost=function(){var t=this.host,e=n.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,r){"use strict";var n=r(6),s=r.n(n),a=r(3),u="x-csrf-token",c=a.XsrfToken.getToken();s.a.interceptors.request.use(function(t){var e=t.method,r=t.noCache,n=t.headers,o=Object.assign({},t);return"post"!==e&&"patch"!==e&&"delete"!==e||(c=c||a.XsrfToken.getToken(),r&&(o.headers=n||{},o["Cache-Control"]="no-cache, no-store, must-revalidate",o.Pragma="no-cache",o.Expires=0),o.headers[u]=c),o},null),s.a.interceptors.response.use(null,function(t){var e=t.response,r=e.status,n=e.headers,o=e.config,i=n[u];return 403===r&&i?(o.headers[u]=i,c=i,a.XsrfToken.setToken(i),s.a.request(o)):Promise.reject(t)}),e.a=s.a},,function(t,e){t.exports=Roblox},function(t,e,r){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(15),n=r(25),s=Object.prototype.toString;function a(t){return"[object Array]"===s.call(t)}function u(t){return null!==t&&"object"===i(t)}function c(t){return"[object Function]"===s.call(t)}function f(t,e){if(null!=t)if("object"!==i(t)&&(t=[t]),a(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:n,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:u,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:c,isStream:function(t){return u(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function r(){var n={};function t(t,e){"object"===i(n[e])&&"object"===i(t)?n[e]=r(n[e],t):n[e]=t}for(var e=0,o=arguments.length;e<o;e++)f(arguments[e],t);return n},extend:function(r,t,n){return f(t,function(t,e){r[e]=n&&"function"==typeof t?o(t,n):t}),r},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},,function(t,e,r){t.exports=r(24)},function(t,e,r){"use strict";function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n=r(48),o=r(49),m=r(50);function s(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function y(t,e){return e.decode?o(t):t}function a(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function u(t){var e=(t=a(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function c(t,e){var r=function(t){var n;switch(t.arrayFormat){case"index":return function(t,e,r){n=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),n?(void 0===r[t]&&(r[t]={}),r[t][n[1]]=e):r[t]=e};case"bracket":return function(t,e,r){n=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),n?void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=[e]:r[t]=e};case"comma":return function(t,e,r){var n="string"==typeof e&&-1<e.split("").indexOf(",")?e.split(","):e;r[t]=n};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var o=!0,i=!1,s=void 0;try{for(var a,u=t.split("&")[Symbol.iterator]();!(o=(a=u.next()).done);o=!0){var c=a.value,f=p(m(c.replace(/\+/g," "),"="),2),l=f[0],h=f[1];h=void 0===h?null:y(h,e),e.parseNumbers&&!Number.isNaN(Number(h))&&"string"==typeof h&&""!==h.trim()?h=Number(h):!e.parseBooleans||null===h||"true"!==h.toLowerCase()&&"false"!==h.toLowerCase()||(h="true"===h.toLowerCase()),r(y(l,e),h,n)}}catch(t){i=!0,s=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw s}}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(function(t,e){var r=n[e];return Boolean(r)&&"object"===d(r)&&!Array.isArray(r)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===d(e)?t(Object.keys(e)).sort(function(t,e){return Number(t)-Number(e)}).map(function(t){return e[t]}):e}(r):t[e]=r,t},Object.create(null))}e.extract=u,e.parse=c,e.stringify=function(r,n){if(!r)return"";var o=function(o){switch(o.arrayFormat){case"index":return function(n){return function(t,e){var r=t.length;return void 0===e?t:[].concat(i(t),null===e?[[s(n,o),"[",r,"]"].join("")]:[[s(n,o),"[",s(r,o),"]=",s(e,o)].join("")])}};case"bracket":return function(r){return function(t,e){return void 0===e?t:[].concat(i(t),null===e?[[s(r,o),"[]"].join("")]:[[s(r,o),"[]=",s(e,o)].join("")])}};case"comma":return function(n){return function(t,e,r){return null==e||0===e.length?t:0===r?[[s(n,o),"=",s(e,o)].join("")]:[[t,s(e,o)].join(",")]}};default:return function(r){return function(t,e){return void 0===e?t:[].concat(i(t),null===e?[s(r,o)]:[[s(r,o),"=",s(e,o)].join("")])}}}}(n=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},n)),t=Object.keys(r);return!1!==n.sort&&t.sort(n.sort),t.map(function(t){var e=r[t];return void 0===e?"":null===e?s(t,n):Array.isArray(e)?e.reduce(o(t),[]).join("&"):s(t,n)+"="+s(e,n)}).filter(function(t){return 0<t.length}).join("&")},e.parseUrl=function(t,e){return{url:a(t).split("?")[0]||"",query:c(u(t),e)}}},function(e,t){(function(t){e.exports=t}).call(this,{})},function(a,t,u){"use strict";(function(t){var r=u(4),n=u(28),e={"Content-Type":"application/x-www-form-urlencoded"};function o(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i,s={adapter:("undefined"!=typeof XMLHttpRequest?i=u(16):void 0!==t&&(i=u(16)),i),transformRequest:[function(t,e){return n(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(o(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(o(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return 200<=t&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){s.headers[t]={}}),r.forEach(["post","put","patch"],function(t){s.headers[t]=r.merge(e)}),a.exports=s}).call(this,u(27))},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){"use strict";var n=r(1);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s={get:"get",post:"post",delete:"delete",patch:"patch"};function a(t,e){t.headers&&(e.headers=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.headers,{},t.headers))}function u(t,e){return e||Promise.reject("no config found"),Object(n.a)(function(t,e){return function(t,e){t.withCredentials&&(e.withCredentials=t.withCredentials)}(e,t),function(t,e){t.retryable&&(e.retryable=t.retryable)}(e,t),function(t,e){t.noCache&&(e.headers={"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:0})}(e,t),a(e,t),t}(t,e))}e.a={methods:s,get:function(t,e){return u({method:s.get,url:t.url,params:e},t)},post:function(t,e){return u({method:s.post,url:t.url,data:e},t)},delete:function(t){return u({method:s.delete,url:t.url},t)},patch:function(t,e){return u({method:s.patch,url:t.url,data:e},t)},buildBatchPromises:function(t,e,r,n){for(var o=[],i=0,s=t.slice(i,e);0<s.length;){var a={userIds:s};n?o.push(this.post(r,a)):o.push(this.get(r,a)),i++,s=t.slice(i*e,i*e+e)}return Promise.all(o)}}},function(t,e,r){"use strict";function n(t){var e=0<arguments.length&&void 0!==t?t:window.location.search;return e!==o&&(o=e,i=c.a.parse(e)),i}var o,i,s=r(0),a=r.n(s),u=r(7),c=r.n(u);e.a={parseQueryString:n,composeQueryString:function(t){var e=0<arguments.length&&void 0!==t?t:{};return c.a.stringify(e)},getQueryParam:function(t){return i||n(),i[t]},formatUrl:a.a.format,resolveUrl:a.a.resolve,parseUrl:a.a.parse,parseUrlAndQueryString:c.a.parseUrl,extractQueryString:c.a.extractQueryString}},,,function(t,e,r){"use strict";t.exports=function(r,n){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];return r.apply(n,t)}}},function(t,e,f){"use strict";var l=f(4),h=f(29),p=f(31),d=f(32),m=f(33),y=f(17);t.exports=function(c){return new Promise(function(r,n){var o=c.data,i=c.headers;l.isFormData(o)&&delete i["Content-Type"];var s=new XMLHttpRequest;if(c.auth){var t=c.auth.username||"",e=c.auth.password||"";i.Authorization="Basic "+btoa(t+":"+e)}if(s.open(c.method.toUpperCase(),p(c.url,c.params,c.paramsSerializer),!0),s.timeout=c.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in s?d(s.getAllResponseHeaders()):null,e={data:c.responseType&&"text"!==c.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:t,config:c,request:s};h(r,n,e),s=null}},s.onerror=function(){n(y("Network Error",c,null,s)),s=null},s.ontimeout=function(){n(y("timeout of "+c.timeout+"ms exceeded",c,"ECONNABORTED",s)),s=null},l.isStandardBrowserEnv()){var a=f(34),u=(c.withCredentials||m(c.url))&&c.xsrfCookieName?a.read(c.xsrfCookieName):void 0;u&&(i[c.xsrfHeaderName]=u)}if("setRequestHeader"in s&&l.forEach(i,function(t,e){void 0===o&&"content-type"===e.toLowerCase()?delete i[e]:s.setRequestHeader(e,t)}),c.withCredentials&&(s.withCredentials=!0),c.responseType)try{s.responseType=c.responseType}catch(t){if("json"!==c.responseType)throw t}"function"==typeof c.onDownloadProgress&&s.addEventListener("progress",c.onDownloadProgress),"function"==typeof c.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",c.onUploadProgress),c.cancelToken&&c.cancelToken.promise.then(function(t){s&&(s.abort(),n(t),s=null)}),void 0===o&&(o=null),s.send(o)})}},function(t,e,r){"use strict";var s=r(30);t.exports=function(t,e,r,n,o){var i=new Error(t);return s(i,e,r,n,o)}},function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},,,,,function(t,e,r){"use strict";var n=r(4),o=r(15),i=r(26),s=r(9);function a(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r}var u=a(s);u.Axios=i,u.create=function(t){return a(n.merge(s,t))},u.Cancel=r(19),u.CancelToken=r(40),u.isCancel=r(18),u.all=function(t){return Promise.all(t)},u.spread=r(41),t.exports=u,t.exports.default=u},function(t,e){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},function(t,e,r){"use strict";var o=r(9),i=r(4),n=r(35),s=r(36);function a(t){this.defaults=t,this.interceptors={request:new n,response:new n}}a.prototype.request=function(t,e){"string"==typeof t&&(t=i.merge({url:arguments[0]},e)),(t=i.merge(o,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var r=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){r.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){r.push(t.fulfilled,t.rejected)});r.length;)n=n.then(r.shift(),r.shift());return n},i.forEach(["delete","get","head","options"],function(r){a.prototype[r]=function(t,e){return this.request(i.merge(e||{},{method:r,url:t}))}}),i.forEach(["post","put","patch"],function(n){a.prototype[n]=function(t,e,r){return this.request(i.merge(r||{},{method:n,url:t,data:e}))}}),t.exports=a},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],f=!1,l=-1;function h(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&p())}function p(){if(!f){var t=a(h);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||f||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";var o=r(4);t.exports=function(r,n){o.forEach(r,function(t,e){e!==n&&e.toUpperCase()===n.toUpperCase()&&(r[n]=t,delete r[e])})}},function(t,e,r){"use strict";var o=r(17);t.exports=function(t,e,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(o("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},function(t,e,r){"use strict";var i=r(4);function s(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var n;if(r)n=r(e);else if(i.isURLSearchParams(e))n=e.toString();else{var o=[];i.forEach(e,function(t,e){null!=t&&(i.isArray(t)?e+="[]":t=[t],i.forEach(t,function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),o.push(s(e)+"="+s(t))}))}),n=o.join("&")}return n&&(t+=(-1===t.indexOf("?")?"?":"&")+n),t}},function(t,e,r){"use strict";var i=r(4),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,n,o={};return t&&i.forEach(t.split("\n"),function(t){if(n=t.indexOf(":"),e=i.trim(t.substr(0,n)).toLowerCase(),r=i.trim(t.substr(n+1)),e){if(o[e]&&0<=s.indexOf(e))return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([r]):o[e]?o[e]+", "+r:r}}),o}},function(t,e,r){"use strict";var n,o,i,s=r(4);function a(t){var e=t;return o&&(i.setAttribute("href",e),e=i.href),i.setAttribute("href",e),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}t.exports=s.isStandardBrowserEnv()?(o=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n=a(window.location.href),function(t){var e=s.isString(t)?a(t):t;return e.protocol===n.protocol&&e.host===n.host}):function(){return!0}},function(t,e,r){"use strict";var a=r(4);t.exports=a.isStandardBrowserEnv()?{write:function(t,e,r,n,o,i){var s=[];s.push(t+"="+encodeURIComponent(e)),a.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),a.isString(n)&&s.push("path="+n),a.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,r){"use strict";var n=r(4);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},t.exports=o},function(t,e,r){"use strict";var n=r(4),o=r(37),i=r(18),s=r(9),a=r(38),u=r(39);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(t,e,r){"use strict";var n=r(4);t.exports=function(e,r,t){return n.forEach(t,function(t){e=t(e,r)}),e}},function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,r){"use strict";var n=r(19);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new n(t),e(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},t.exports=o},function(t,e,r){"use strict";t.exports=function(e){return function(t){return e.apply(null,t)}}},function(t,I,L){(function(U,N){var q;function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! https://mths.be/punycode v1.3.2 by @mathias */!function(t){var e="object"==k(I)&&I&&!I.nodeType&&I,r="object"==k(U)&&U&&!U.nodeType&&U,n="object"==(void 0===N?"undefined":k(N))&&N;n.global!==n&&n.window!==n&&n.self!==n||(t=n);var o,i,v=2147483647,g=36,b=1,w=26,s=38,a=700,x=72,j=128,S="-",u=/^xn--/,c=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,l={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},h=g-b,O=Math.floor,C=String.fromCharCode;function A(t){throw RangeError(l[t])}function p(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function d(t,e){var r=t.split("@"),n="";return 1<r.length&&(n=r[0]+"@",t=r[1]),n+p((t=t.replace(f,".")).split("."),e).join(".")}function E(t){for(var e,r,n=[],o=0,i=t.length;o<i;)55296<=(e=t.charCodeAt(o++))&&e<=56319&&o<i?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}function R(t){return p(t,function(t){var e="";return 65535<t&&(e+=C((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=C(t)}).join("")}function T(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function P(t,e,r){var n=0;for(t=r?O(t/a):t>>1,t+=O(t/e);h*w>>1<t;n+=g)t=O(t/h);return O(n+(h+1)*t/(t+s))}function m(t){var e,r,n,o,i,s,a,u,c,f,l,h=[],p=t.length,d=0,m=j,y=x;for((r=t.lastIndexOf(S))<0&&(r=0),n=0;n<r;++n)128<=t.charCodeAt(n)&&A("not-basic"),h.push(t.charCodeAt(n));for(o=0<r?r+1:0;o<p;){for(i=d,s=1,a=g;p<=o&&A("invalid-input"),l=t.charCodeAt(o++),(g<=(u=l-48<10?l-22:l-65<26?l-65:l-97<26?l-97:g)||u>O((v-d)/s))&&A("overflow"),d+=u*s,!(u<(c=a<=y?b:y+w<=a?w:a-y));a+=g)s>O(v/(f=g-c))&&A("overflow"),s*=f;y=P(d-i,e=h.length+1,0==i),O(d/e)>v-m&&A("overflow"),m+=O(d/e),d%=e,h.splice(d++,0,m)}return R(h)}function y(t){var e,r,n,o,i,s,a,u,c,f,l,h,p,d,m,y=[];for(h=(t=E(t)).length,e=j,i=x,s=r=0;s<h;++s)(l=t[s])<128&&y.push(C(l));for(n=o=y.length,o&&y.push(S);n<h;){for(a=v,s=0;s<h;++s)e<=(l=t[s])&&l<a&&(a=l);for(a-e>O((v-r)/(p=n+1))&&A("overflow"),r+=(a-e)*p,e=a,s=0;s<h;++s)if((l=t[s])<e&&++r>v&&A("overflow"),l==e){for(u=r,c=g;!(u<(f=c<=i?b:i+w<=c?w:c-i));c+=g)m=u-f,d=g-f,y.push(C(T(f+m%d,0))),u=O(m/d);y.push(C(T(u,0))),i=P(r,p,n==o),r=0,++n}++r,++e}return y.join("")}if(o={version:"1.3.2",ucs2:{decode:E,encode:R},decode:m,encode:y,toASCII:function(t){return d(t,function(t){return c.test(t)?"xn--"+y(t):t})},toUnicode:function(t){return d(t,function(t){return u.test(t)?m(t.slice(4).toLowerCase()):t})}},"object"==k(L(8))&&L(8))void 0===(q=function(){return o}.call(I,L,I,U))||(U.exports=q);else if(e&&r)if(U.exports==e)r.exports=o;else for(i in o)o.hasOwnProperty(i)&&(e[i]=o[i]);else t.punycode=o}(this)}).call(this,L(43)(t),L(10))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"===n(t)&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,e,r){"use strict";e.decode=e.parse=r(46),e.encode=e.stringify=r(47)},function(t,e,r){"use strict";t.exports=function(t,e,r,n){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var i=/\+/g;t=t.split(e);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var a,u,c=t.length;0<s&&s<c&&(c=s);for(var f=0;f<c;++f){var l,h,p,d,m=t[f].replace(i,"%20"),y=m.indexOf(r);h=0<=y?(l=m.substr(0,y),m.substr(y+1)):(l=m,""),p=decodeURIComponent(l),d=decodeURIComponent(h),a=o,u=p,Object.prototype.hasOwnProperty.call(a,u)?v(o[p])?o[p].push(d):o[p]=[o[p],d]:o[p]=d}return o};var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){switch(i(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}}t.exports=function(r,n,o,t){return n=n||"&",o=o||"=",null===r&&(r=void 0),"object"===i(r)?u(c(r),function(t){var e=encodeURIComponent(s(t))+o;return a(r[t])?u(r[t],function(t){return e+encodeURIComponent(s(t))}).join(n):e+encodeURIComponent(s(r[t]))}).join(n):t?encodeURIComponent(s(t))+o+encodeURIComponent(s(r)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function u(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var c=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())})}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="%[a-f0-9]{2}",i=new RegExp(o,"gi"),a=new RegExp("("+o+")+","gi");function s(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],s(r),s(n))}function u(e){try{return decodeURIComponent(e)}catch(t){for(var r=e.match(i),n=1;n<r.length;n++)r=(e=s(r,n).join("")).match(i);return e}}t.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+n(e)+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var n=u(r[0]);n!==r[0]&&(e[r[0]]=n)}r=a.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),i=0;i<o.length;i++){var s=o[i];t=t.replace(new RegExp(s,"g"),e[s])}return t}(e)}}},function(t,e,r){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.r(e);function n(){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.promise=new Promise(function(t,e){r.resolve=t,r.reject=e}),this.then=this.promise.then.bind(this.promise),this.catch=this.promise.catch.bind(this.promise),this.finally=this.promise.finally.bind(this.promise)}var o,i,s=Object.freeze({ok:200,accepted:202,movedPermanently:301,badRequest:400,unauthorized:401,forbidden:403,notFound:404,methodNotAllowed:405,conflict:409,payloadTooLarge:413,tooManyAttempts:429,serverError:500,serviceUnavailable:503}),a=r(11);(i=o=o||{}).RollerCoaster="RollerCoaster",i.Landing="Landing";var u=o,c=(f.getInternalPageName=function(){if(!f.internalPageName){var t=document.querySelector('meta[name="page-meta"]');t&&t.dataset&&t.dataset.internalPageName&&(f.internalPageName=t.dataset.internalPageName)}return f.internalPageName},f.isLandingPage=function(){var t=f.getInternalPageName();return t===u.Landing||t===u.RollerCoaster},f);function f(){}var l={PageNames:u,PageNameProvider:c},h=r(12);window.CoreUtilities={defer:function(){return new n},httpResponseCodes:s,httpService:a.a,pageName:l,ready:function(t){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()},urlService:h.a}}]);

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CoreUtilities");