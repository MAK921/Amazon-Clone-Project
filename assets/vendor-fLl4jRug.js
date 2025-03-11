import{g as Ap,r as de,a as Sp,R as $c,w as sv,T as ov,j as Pe}from"./react-vendor-DODQmM8I.js";var dc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function av(){return Jh||(Jh=1,function(n){function e(j,W){var G=j.length;j.push(W);e:for(;0<G;){var ce=G-1>>>1,ye=j[ce];if(0<i(ye,W))j[ce]=W,j[G]=ye,G=ce;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var W=j[0],G=j.pop();if(G!==W){j[0]=G;e:for(var ce=0,ye=j.length,yn=ye>>>1;ce<yn;){var rt=2*(ce+1)-1,Te=j[rt],Et=rt+1,Tt=j[Et];if(0>i(Te,G))Et<ye&&0>i(Tt,Te)?(j[ce]=Tt,j[Et]=G,ce=Et):(j[ce]=Te,j[rt]=G,ce=rt);else if(Et<ye&&0>i(Tt,G))j[ce]=Tt,j[Et]=G,ce=Et;else break e}}return W}function i(j,W){var G=j.sortIndex-W.sortIndex;return G!==0?G:j.id-W.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();n.unstable_now=function(){return o.now()-c}}var u=[],l=[],d=1,f=null,g=3,v=!1,y=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function x(j){for(var W=t(l);W!==null;){if(W.callback===null)r(l);else if(W.startTime<=j)r(l),W.sortIndex=W.expirationTime,e(u,W);else break;W=t(l)}}function V(j){if(T=!1,x(j),!y)if(t(u)!==null)y=!0,Y();else{var W=t(l);W!==null&&pe(V,W.startTime-j)}}var F=!1,B=-1,b=5,w=-1;function E(){return!(n.unstable_now()-w<b)}function m(){if(F){var j=n.unstable_now();w=j;var W=!0;try{e:{y=!1,T&&(T=!1,C(B),B=-1),v=!0;var G=g;try{t:{for(x(j),f=t(u);f!==null&&!(f.expirationTime>j&&E());){var ce=f.callback;if(typeof ce=="function"){f.callback=null,g=f.priorityLevel;var ye=ce(f.expirationTime<=j);if(j=n.unstable_now(),typeof ye=="function"){f.callback=ye,x(j),W=!0;break t}f===t(u)&&r(u),x(j)}else r(u);f=t(u)}if(f!==null)W=!0;else{var yn=t(l);yn!==null&&pe(V,yn.startTime-j),W=!1}}break e}finally{f=null,g=G,v=!1}W=void 0}}finally{W?A():F=!1}}}var A;if(typeof N=="function")A=function(){N(m)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,I=R.port2;R.port1.onmessage=m,A=function(){I.postMessage(null)}}else A=function(){S(m,0)};function Y(){F||(F=!0,A())}function pe(j,W){B=S(function(){j(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){y||v||(y=!0,Y())},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(j){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var G=g;g=W;try{return j()}finally{g=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var G=g;g=j;try{return W()}finally{g=G}},n.unstable_scheduleCallback=function(j,W,G){var ce=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ce+G:ce):G=ce,j){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=G+ye,j={id:d++,callback:W,priorityLevel:j,startTime:G,expirationTime:ye,sortIndex:-1},G>ce?(j.sortIndex=G,e(l,j),t(u)===null&&j===t(l)&&(T?(C(B),B=-1):T=!0,pe(V,G-ce))):(j.sortIndex=ye,e(u,j),y||v||(y=!0,Y())),j},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(j){var W=g;return function(){var G=g;g=W;try{return j.apply(this,arguments)}finally{g=G}}}}(fc)),fc}var Yh;function AO(){return Yh||(Yh=1,dc.exports=av()),dc.exports}var Ai={},Xh;function cv(){if(Xh)return Ai;Xh=1,Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.parse=o,Ai.serialize=l;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,s=(()=>{const g=function(){};return g.prototype=Object.create(null),g})();function o(g,v){const y=new s,T=g.length;if(T<2)return y;const S=(v==null?void 0:v.decode)||d;let C=0;do{const N=g.indexOf("=",C);if(N===-1)break;const x=g.indexOf(";",C),V=x===-1?T:x;if(N>V){C=g.lastIndexOf(";",N-1)+1;continue}const F=c(g,C,N),B=u(g,N,F),b=g.slice(F,B);if(y[b]===void 0){let w=c(g,N+1,V),E=u(g,V,w);const m=S(g.slice(w,E));y[b]=m}C=V+1}while(C<T);return y}function c(g,v,y){do{const T=g.charCodeAt(v);if(T!==32&&T!==9)return v}while(++v<y);return y}function u(g,v,y){for(;v>y;){const T=g.charCodeAt(--v);if(T!==32&&T!==9)return v+1}return y}function l(g,v,y){const T=(y==null?void 0:y.encode)||encodeURIComponent;if(!n.test(g))throw new TypeError(`argument name is invalid: ${g}`);const S=T(v);if(!e.test(S))throw new TypeError(`argument val is invalid: ${v}`);let C=g+"="+S;if(!y)return C;if(y.maxAge!==void 0){if(!Number.isInteger(y.maxAge))throw new TypeError(`option maxAge is invalid: ${y.maxAge}`);C+="; Max-Age="+y.maxAge}if(y.domain){if(!t.test(y.domain))throw new TypeError(`option domain is invalid: ${y.domain}`);C+="; Domain="+y.domain}if(y.path){if(!r.test(y.path))throw new TypeError(`option path is invalid: ${y.path}`);C+="; Path="+y.path}if(y.expires){if(!f(y.expires)||!Number.isFinite(y.expires.valueOf()))throw new TypeError(`option expires is invalid: ${y.expires}`);C+="; Expires="+y.expires.toUTCString()}if(y.httpOnly&&(C+="; HttpOnly"),y.secure&&(C+="; Secure"),y.partitioned&&(C+="; Partitioned"),y.priority)switch(typeof y.priority=="string"?y.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${y.priority}`)}if(y.sameSite)switch(typeof y.sameSite=="string"?y.sameSite.toLowerCase():y.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${y.sameSite}`)}return C}function d(g){if(g.indexOf("%")===-1)return g;try{return decodeURIComponent(g)}catch{return g}}function f(g){return i.call(g)==="[object Date]"}return Ai}cv();var pc={exports:{}},mc,Zh;function lv(){if(Zh)return mc;Zh=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return mc=n,mc}var gc,ed;function uv(){if(ed)return gc;ed=1;var n=lv();function e(){}function t(){}return t.resetWarningCache=e,gc=function(){function r(o,c,u,l,d,f){if(f!==n){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}r.isRequired=r;function i(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:t,resetWarningCache:e};return s.PropTypes=s,s},gc}var td;function hv(){return td||(td=1,pc.exports=uv()()),pc.exports}var yc={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var nd;function SO(){return nd||(nd=1,function(n){(function(){var e={}.hasOwnProperty;function t(){for(var s="",o=0;o<arguments.length;o++){var c=arguments[o];c&&(s=i(s,r(c)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var c in s)e.call(s,c)&&s[c]&&(o=i(o,c));return o}function i(s,o){return o?s?s+" "+o:s+o:s}n.exports?(t.default=t,n.exports=t):window.classNames=t})()}(yc)),yc.exports}function Rp(n,e){return function(){return n.apply(e,arguments)}}const{toString:dv}=Object.prototype,{getPrototypeOf:Pl}=Object,ta=(n=>e=>{const t=dv.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),xt=n=>(n=n.toLowerCase(),e=>ta(e)===n),na=n=>e=>typeof e===n,{isArray:ei}=Array,ts=na("undefined");function fv(n){return n!==null&&!ts(n)&&n.constructor!==null&&!ts(n.constructor)&&_t(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Cp=xt("ArrayBuffer");function pv(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Cp(n.buffer),e}const mv=na("string"),_t=na("function"),Pp=na("number"),ra=n=>n!==null&&typeof n=="object",gv=n=>n===!0||n===!1,uo=n=>{if(ta(n)!=="object")return!1;const e=Pl(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},yv=xt("Date"),_v=xt("File"),vv=xt("Blob"),wv=xt("FileList"),Ev=n=>ra(n)&&_t(n.pipe),Tv=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||_t(n.append)&&((e=ta(n))==="formdata"||e==="object"&&_t(n.toString)&&n.toString()==="[object FormData]"))},Iv=xt("URLSearchParams"),[bv,Av,Sv,Rv]=["ReadableStream","Request","Response","Headers"].map(xt),Cv=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _s(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),ei(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let c;for(r=0;r<o;r++)c=s[r],e.call(null,n[c],c,n)}}function kp(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const Jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Op=n=>!ts(n)&&n!==Jn;function jc(){const{caseless:n}=Op(this)&&this||{},e={},t=(r,i)=>{const s=n&&kp(e,i)||i;uo(e[s])&&uo(r)?e[s]=jc(e[s],r):uo(r)?e[s]=jc({},r):ei(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&_s(arguments[r],t);return e}const Pv=(n,e,t,{allOwnKeys:r}={})=>(_s(e,(i,s)=>{t&&_t(i)?n[s]=Rp(i,t):n[s]=i},{allOwnKeys:r}),n),kv=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Ov=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Nv=(n,e,t,r)=>{let i,s,o;const c={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),s=i.length;s-- >0;)o=i[s],(!r||r(o,n,e))&&!c[o]&&(e[o]=n[o],c[o]=!0);n=t!==!1&&Pl(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Dv=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},xv=n=>{if(!n)return null;if(ei(n))return n;let e=n.length;if(!Pp(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Vv=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Pl(Uint8Array)),Lv=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(n,s[0],s[1])}},Mv=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},Fv=xt("HTMLFormElement"),Uv=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),rd=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Bv=xt("RegExp"),Np=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};_s(t,(i,s)=>{let o;(o=e(i,s,n))!==!1&&(r[s]=o||i)}),Object.defineProperties(n,r)},$v=n=>{Np(n,(e,t)=>{if(_t(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(_t(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},jv=(n,e)=>{const t={},r=i=>{i.forEach(s=>{t[s]=!0})};return ei(n)?r(n):r(String(n).split(e)),t},qv=()=>{},zv=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Hv(n){return!!(n&&_t(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Wv=n=>{const e=new Array(10),t=(r,i)=>{if(ra(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=ei(r)?[]:{};return _s(r,(o,c)=>{const u=t(o,i+1);!ts(u)&&(s[c]=u)}),e[i]=void 0,s}}return r};return t(n,0)},Gv=xt("AsyncFunction"),Kv=n=>n&&(ra(n)||_t(n))&&_t(n.then)&&_t(n.catch),Dp=((n,e)=>n?setImmediate:e?((t,r)=>(Jn.addEventListener("message",({source:i,data:s})=>{i===Jn&&s===t&&r.length&&r.shift()()},!1),i=>{r.push(i),Jn.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",_t(Jn.postMessage)),Qv=typeof queueMicrotask<"u"?queueMicrotask.bind(Jn):typeof process<"u"&&process.nextTick||Dp,O={isArray:ei,isArrayBuffer:Cp,isBuffer:fv,isFormData:Tv,isArrayBufferView:pv,isString:mv,isNumber:Pp,isBoolean:gv,isObject:ra,isPlainObject:uo,isReadableStream:bv,isRequest:Av,isResponse:Sv,isHeaders:Rv,isUndefined:ts,isDate:yv,isFile:_v,isBlob:vv,isRegExp:Bv,isFunction:_t,isStream:Ev,isURLSearchParams:Iv,isTypedArray:Vv,isFileList:wv,forEach:_s,merge:jc,extend:Pv,trim:Cv,stripBOM:kv,inherits:Ov,toFlatObject:Nv,kindOf:ta,kindOfTest:xt,endsWith:Dv,toArray:xv,forEachEntry:Lv,matchAll:Mv,isHTMLForm:Fv,hasOwnProperty:rd,hasOwnProp:rd,reduceDescriptors:Np,freezeMethods:$v,toObjectSet:jv,toCamelCase:Uv,noop:qv,toFiniteNumber:zv,findKey:kp,global:Jn,isContextDefined:Op,isSpecCompliantForm:Hv,toJSONObject:Wv,isAsyncFn:Gv,isThenable:Kv,setImmediate:Dp,asap:Qv};function X(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}O.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const xp=X.prototype,Vp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Vp[n]={value:n}});Object.defineProperties(X,Vp);Object.defineProperty(xp,"isAxiosError",{value:!0});X.from=(n,e,t,r,i,s)=>{const o=Object.create(xp);return O.toFlatObject(n,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError"),X.call(o,n.message,e,t,r,i),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const Jv=null;function qc(n){return O.isPlainObject(n)||O.isArray(n)}function Lp(n){return O.endsWith(n,"[]")?n.slice(0,-2):n}function id(n,e,t){return n?n.concat(e).map(function(i,s){return i=Lp(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function Yv(n){return O.isArray(n)&&!n.some(qc)}const Xv=O.toFlatObject(O,{},null,function(e){return/^is[A-Z]/.test(e)});function ia(n,e,t){if(!O.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=O.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,S){return!O.isUndefined(S[T])});const r=t.metaTokens,i=t.visitor||d,s=t.dots,o=t.indexes,u=(t.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(e);if(!O.isFunction(i))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(O.isDate(y))return y.toISOString();if(!u&&O.isBlob(y))throw new X("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(y)||O.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,T,S){let C=y;if(y&&!S&&typeof y=="object"){if(O.endsWith(T,"{}"))T=r?T:T.slice(0,-2),y=JSON.stringify(y);else if(O.isArray(y)&&Yv(y)||(O.isFileList(y)||O.endsWith(T,"[]"))&&(C=O.toArray(y)))return T=Lp(T),C.forEach(function(x,V){!(O.isUndefined(x)||x===null)&&e.append(o===!0?id([T],V,s):o===null?T:T+"[]",l(x))}),!1}return qc(y)?!0:(e.append(id(S,T,s),l(y)),!1)}const f=[],g=Object.assign(Xv,{defaultVisitor:d,convertValue:l,isVisitable:qc});function v(y,T){if(!O.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+T.join("."));f.push(y),O.forEach(y,function(C,N){(!(O.isUndefined(C)||C===null)&&i.call(e,C,O.isString(N)?N.trim():N,T,g))===!0&&v(C,T?T.concat(N):[N])}),f.pop()}}if(!O.isObject(n))throw new TypeError("data must be an object");return v(n),e}function sd(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function kl(n,e){this._pairs=[],n&&ia(n,this,e)}const Mp=kl.prototype;Mp.append=function(e,t){this._pairs.push([e,t])};Mp.toString=function(e){const t=e?function(r){return e.call(this,r,sd)}:sd;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function Zv(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fp(n,e,t){if(!e)return n;const r=t&&t.encode||Zv;O.isFunction(t)&&(t={serialize:t});const i=t&&t.serialize;let s;if(i?s=i(e,t):s=O.isURLSearchParams(e)?e.toString():new kl(e,t).toString(r),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class od{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){O.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Up={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ew=typeof URLSearchParams<"u"?URLSearchParams:kl,tw=typeof FormData<"u"?FormData:null,nw=typeof Blob<"u"?Blob:null,rw={isBrowser:!0,classes:{URLSearchParams:ew,FormData:tw,Blob:nw},protocols:["http","https","file","blob","url","data"]},Ol=typeof window<"u"&&typeof document<"u",zc=typeof navigator=="object"&&navigator||void 0,iw=Ol&&(!zc||["ReactNative","NativeScript","NS"].indexOf(zc.product)<0),sw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ow=Ol&&window.location.href||"http://localhost",aw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ol,hasStandardBrowserEnv:iw,hasStandardBrowserWebWorkerEnv:sw,navigator:zc,origin:ow},Symbol.toStringTag,{value:"Module"})),nt={...aw,...rw};function cw(n,e){return ia(n,new nt.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,s){return nt.isNode&&O.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function lw(n){return O.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function uw(n){const e={},t=Object.keys(n);let r;const i=t.length;let s;for(r=0;r<i;r++)s=t[r],e[s]=n[s];return e}function Bp(n){function e(t,r,i,s){let o=t[s++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),u=s>=t.length;return o=!o&&O.isArray(i)?i.length:o,u?(O.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!c):((!i[o]||!O.isObject(i[o]))&&(i[o]=[]),e(t,r,i[o],s)&&O.isArray(i[o])&&(i[o]=uw(i[o])),!c)}if(O.isFormData(n)&&O.isFunction(n.entries)){const t={};return O.forEachEntry(n,(r,i)=>{e(lw(r),i,t,0)}),t}return null}function hw(n,e,t){if(O.isString(n))try{return(e||JSON.parse)(n),O.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const vs={transitional:Up,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=O.isObject(e);if(s&&O.isHTMLForm(e)&&(e=new FormData(e)),O.isFormData(e))return i?JSON.stringify(Bp(e)):e;if(O.isArrayBuffer(e)||O.isBuffer(e)||O.isStream(e)||O.isFile(e)||O.isBlob(e)||O.isReadableStream(e))return e;if(O.isArrayBufferView(e))return e.buffer;if(O.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cw(e,this.formSerializer).toString();if((c=O.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ia(c?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),hw(e)):e}],transformResponse:[function(e){const t=this.transitional||vs.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(O.isResponse(e)||O.isReadableStream(e))return e;if(e&&O.isString(e)&&(r&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(c){if(o)throw c.name==="SyntaxError"?X.from(c,X.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],n=>{vs.headers[n]={}});const dw=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fw=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!t||e[t]&&dw[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},ad=Symbol("internals");function Si(n){return n&&String(n).trim().toLowerCase()}function ho(n){return n===!1||n==null?n:O.isArray(n)?n.map(ho):String(n)}function pw(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const mw=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function _c(n,e,t,r,i){if(O.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!O.isString(e)){if(O.isString(r))return e.indexOf(r)!==-1;if(O.isRegExp(r))return r.test(e)}}function gw(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function yw(n,e){const t=O.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}let ut=class{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function s(c,u,l){const d=Si(u);if(!d)throw new Error("header name must be a non-empty string");const f=O.findKey(i,d);(!f||i[f]===void 0||l===!0||l===void 0&&i[f]!==!1)&&(i[f||u]=ho(c))}const o=(c,u)=>O.forEach(c,(l,d)=>s(l,d,u));if(O.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(O.isString(e)&&(e=e.trim())&&!mw(e))o(fw(e),t);else if(O.isHeaders(e))for(const[c,u]of e.entries())s(u,c,r);else e!=null&&s(t,e,r);return this}get(e,t){if(e=Si(e),e){const r=O.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return pw(i);if(O.isFunction(t))return t.call(this,i,r);if(O.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Si(e),e){const r=O.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||_c(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function s(o){if(o=Si(o),o){const c=O.findKey(r,o);c&&(!t||_c(r,r[c],c,t))&&(delete r[c],i=!0)}}return O.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const s=t[r];(!e||_c(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,r={};return O.forEach(this,(i,s)=>{const o=O.findKey(r,s);if(o){t[o]=ho(i),delete t[s];return}const c=e?gw(s):String(s).trim();c!==s&&delete t[s],t[c]=ho(i),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return O.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&O.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[ad]=this[ad]={accessors:{}}).accessors,i=this.prototype;function s(o){const c=Si(o);r[c]||(yw(i,o),r[c]=!0)}return O.isArray(e)?e.forEach(s):s(e),this}};ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(ut.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});O.freezeMethods(ut);function vc(n,e){const t=this||vs,r=e||t,i=ut.from(r.headers);let s=r.data;return O.forEach(n,function(c){s=c.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function $p(n){return!!(n&&n.__CANCEL__)}function ti(n,e,t){X.call(this,n??"canceled",X.ERR_CANCELED,e,t),this.name="CanceledError"}O.inherits(ti,X,{__CANCEL__:!0});function jp(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new X("Request failed with status code "+t.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function _w(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function vw(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const l=Date.now(),d=r[s];o||(o=l),t[i]=u,r[i]=l;let f=s,g=0;for(;f!==i;)g+=t[f++],f=f%n;if(i=(i+1)%n,i===s&&(s=(s+1)%n),l-o<e)return;const v=d&&l-d;return v?Math.round(g*1e3/v):void 0}}function ww(n,e){let t=0,r=1e3/e,i,s;const o=(l,d=Date.now())=>{t=d,i=null,s&&(clearTimeout(s),s=null),n.apply(null,l)};return[(...l)=>{const d=Date.now(),f=d-t;f>=r?o(l,d):(i=l,s||(s=setTimeout(()=>{s=null,o(i)},r-f)))},()=>i&&o(i)]}const Po=(n,e,t=3)=>{let r=0;const i=vw(50,250);return ww(s=>{const o=s.loaded,c=s.lengthComputable?s.total:void 0,u=o-r,l=i(u),d=o<=c;r=o;const f={loaded:o,total:c,progress:c?o/c:void 0,bytes:u,rate:l||void 0,estimated:l&&c&&d?(c-o)/l:void 0,event:s,lengthComputable:c!=null,[e?"download":"upload"]:!0};n(f)},t)},cd=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},ld=n=>(...e)=>O.asap(()=>n(...e)),Ew=nt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,nt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(nt.origin),nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent)):()=>!0,Tw=nt.hasStandardBrowserEnv?{write(n,e,t,r,i,s){const o=[n+"="+encodeURIComponent(e)];O.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),O.isString(r)&&o.push("path="+r),O.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Iw(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function bw(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function qp(n,e,t){let r=!Iw(e);return n&&r||t==!1?bw(n,e):e}const ud=n=>n instanceof ut?{...n}:n;function rr(n,e){e=e||{};const t={};function r(l,d,f,g){return O.isPlainObject(l)&&O.isPlainObject(d)?O.merge.call({caseless:g},l,d):O.isPlainObject(d)?O.merge({},d):O.isArray(d)?d.slice():d}function i(l,d,f,g){if(O.isUndefined(d)){if(!O.isUndefined(l))return r(void 0,l,f,g)}else return r(l,d,f,g)}function s(l,d){if(!O.isUndefined(d))return r(void 0,d)}function o(l,d){if(O.isUndefined(d)){if(!O.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function c(l,d,f){if(f in e)return r(l,d);if(f in n)return r(void 0,l)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(l,d,f)=>i(ud(l),ud(d),f,!0)};return O.forEach(Object.keys(Object.assign({},n,e)),function(d){const f=u[d]||i,g=f(n[d],e[d],d);O.isUndefined(g)&&f!==c||(t[d]=g)}),t}const zp=n=>{const e=rr({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:c}=e;e.headers=o=ut.from(o),e.url=Fp(qp(e.baseURL,e.url),n.params,n.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let u;if(O.isFormData(t)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[l,...d]=u?u.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...d].join("; "))}}if(nt.hasStandardBrowserEnv&&(r&&O.isFunction(r)&&(r=r(e)),r||r!==!1&&Ew(e.url))){const l=i&&s&&Tw.read(s);l&&o.set(i,l)}return e},Aw=typeof XMLHttpRequest<"u",Sw=Aw&&function(n){return new Promise(function(t,r){const i=zp(n);let s=i.data;const o=ut.from(i.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:l}=i,d,f,g,v,y;function T(){v&&v(),y&&y(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let S=new XMLHttpRequest;S.open(i.method.toUpperCase(),i.url,!0),S.timeout=i.timeout;function C(){if(!S)return;const x=ut.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),F={data:!c||c==="text"||c==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:x,config:n,request:S};jp(function(b){t(b),T()},function(b){r(b),T()},F),S=null}"onloadend"in S?S.onloadend=C:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(C)},S.onabort=function(){S&&(r(new X("Request aborted",X.ECONNABORTED,n,S)),S=null)},S.onerror=function(){r(new X("Network Error",X.ERR_NETWORK,n,S)),S=null},S.ontimeout=function(){let V=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const F=i.transitional||Up;i.timeoutErrorMessage&&(V=i.timeoutErrorMessage),r(new X(V,F.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,n,S)),S=null},s===void 0&&o.setContentType(null),"setRequestHeader"in S&&O.forEach(o.toJSON(),function(V,F){S.setRequestHeader(F,V)}),O.isUndefined(i.withCredentials)||(S.withCredentials=!!i.withCredentials),c&&c!=="json"&&(S.responseType=i.responseType),l&&([g,y]=Po(l,!0),S.addEventListener("progress",g)),u&&S.upload&&([f,v]=Po(u),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",v)),(i.cancelToken||i.signal)&&(d=x=>{S&&(r(!x||x.type?new ti(null,n,S):x),S.abort(),S=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const N=_w(i.url);if(N&&nt.protocols.indexOf(N)===-1){r(new X("Unsupported protocol "+N+":",X.ERR_BAD_REQUEST,n));return}S.send(s||null)})},Rw=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,i;const s=function(l){if(!i){i=!0,c();const d=l instanceof Error?l:this.reason;r.abort(d instanceof X?d:new ti(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new X(`timeout ${e} of ms exceeded`,X.ETIMEDOUT))},e);const c=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),n=null)};n.forEach(l=>l.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>O.asap(c),u}},Cw=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,i;for(;r<t;)i=r+e,yield n.slice(r,i),r=i},Pw=async function*(n,e){for await(const t of kw(n))yield*Cw(t,e)},kw=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},hd=(n,e,t,r)=>{const i=Pw(n,e);let s=0,o,c=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:d}=await i.next();if(l){c(),u.close();return}let f=d.byteLength;if(t){let g=s+=f;t(g)}u.enqueue(new Uint8Array(d))}catch(l){throw c(l),l}},cancel(u){return c(u),i.return()}},{highWaterMark:2})},sa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Hp=sa&&typeof ReadableStream=="function",Ow=sa&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Wp=(n,...e)=>{try{return!!n(...e)}catch{return!1}},Nw=Hp&&Wp(()=>{let n=!1;const e=new Request(nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),dd=64*1024,Hc=Hp&&Wp(()=>O.isReadableStream(new Response("").body)),ko={stream:Hc&&(n=>n.body)};sa&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ko[e]&&(ko[e]=O.isFunction(n[e])?t=>t[e]():(t,r)=>{throw new X(`Response type '${e}' is not supported`,X.ERR_NOT_SUPPORT,r)})})})(new Response);const Dw=async n=>{if(n==null)return 0;if(O.isBlob(n))return n.size;if(O.isSpecCompliantForm(n))return(await new Request(nt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(O.isArrayBufferView(n)||O.isArrayBuffer(n))return n.byteLength;if(O.isURLSearchParams(n)&&(n=n+""),O.isString(n))return(await Ow(n)).byteLength},xw=async(n,e)=>{const t=O.toFiniteNumber(n.getContentLength());return t??Dw(e)},Vw=sa&&(async n=>{let{url:e,method:t,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:c,onUploadProgress:u,responseType:l,headers:d,withCredentials:f="same-origin",fetchOptions:g}=zp(n);l=l?(l+"").toLowerCase():"text";let v=Rw([i,s&&s.toAbortSignal()],o),y;const T=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let S;try{if(u&&Nw&&t!=="get"&&t!=="head"&&(S=await xw(d,r))!==0){let F=new Request(e,{method:"POST",body:r,duplex:"half"}),B;if(O.isFormData(r)&&(B=F.headers.get("content-type"))&&d.setContentType(B),F.body){const[b,w]=cd(S,Po(ld(u)));r=hd(F.body,dd,b,w)}}O.isString(f)||(f=f?"include":"omit");const C="credentials"in Request.prototype;y=new Request(e,{...g,signal:v,method:t.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:C?f:void 0});let N=await fetch(y);const x=Hc&&(l==="stream"||l==="response");if(Hc&&(c||x&&T)){const F={};["status","statusText","headers"].forEach(E=>{F[E]=N[E]});const B=O.toFiniteNumber(N.headers.get("content-length")),[b,w]=c&&cd(B,Po(ld(c),!0))||[];N=new Response(hd(N.body,dd,b,()=>{w&&w(),T&&T()}),F)}l=l||"text";let V=await ko[O.findKey(ko,l)||"text"](N,n);return!x&&T&&T(),await new Promise((F,B)=>{jp(F,B,{data:V,headers:ut.from(N.headers),status:N.status,statusText:N.statusText,config:n,request:y})})}catch(C){throw T&&T(),C&&C.name==="TypeError"&&/fetch/i.test(C.message)?Object.assign(new X("Network Error",X.ERR_NETWORK,n,y),{cause:C.cause||C}):X.from(C,C&&C.code,n,y)}}),Wc={http:Jv,xhr:Sw,fetch:Vw};O.forEach(Wc,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const fd=n=>`- ${n}`,Lw=n=>O.isFunction(n)||n===null||n===!1,Gp={getAdapter:n=>{n=O.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let s=0;s<e;s++){t=n[s];let o;if(r=t,!Lw(t)&&(r=Wc[(o=String(t)).toLowerCase()],r===void 0))throw new X(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(fd).join(`
`):" "+fd(s[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Wc};function wc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ti(null,n)}function pd(n){return wc(n),n.headers=ut.from(n.headers),n.data=vc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Gp.getAdapter(n.adapter||vs.adapter)(n).then(function(r){return wc(n),r.data=vc.call(n,n.transformResponse,r),r.headers=ut.from(r.headers),r},function(r){return $p(r)||(wc(n),r&&r.response&&(r.response.data=vc.call(n,n.transformResponse,r.response),r.response.headers=ut.from(r.response.headers))),Promise.reject(r)})}const Kp="1.8.1",oa={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{oa[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const md={};oa.transitional=function(e,t,r){function i(s,o){return"[Axios v"+Kp+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,c)=>{if(e===!1)throw new X(i(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!md[o]&&(md[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,c):!0}};oa.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Mw(n,e,t){if(typeof n!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const c=n[s],u=c===void 0||o(c,s,n);if(u!==!0)throw new X("option "+s+" must be "+u,X.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new X("Unknown option "+s,X.ERR_BAD_OPTION)}}const fo={assertOptions:Mw,validators:oa},Mt=fo.validators;let Zn=class{constructor(e){this.defaults=e,this.interceptors={request:new od,response:new od}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=rr(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;r!==void 0&&fo.assertOptions(r,{silentJSONParsing:Mt.transitional(Mt.boolean),forcedJSONParsing:Mt.transitional(Mt.boolean),clarifyTimeoutError:Mt.transitional(Mt.boolean)},!1),i!=null&&(O.isFunction(i)?t.paramsSerializer={serialize:i}:fo.assertOptions(i,{encode:Mt.function,serialize:Mt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),fo.assertOptions(t,{baseUrl:Mt.spelling("baseURL"),withXsrfToken:Mt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&O.merge(s.common,s[t.method]);s&&O.forEach(["delete","get","head","post","put","patch","common"],y=>{delete s[y]}),t.headers=ut.concat(o,s);const c=[];let u=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(t)===!1||(u=u&&T.synchronous,c.unshift(T.fulfilled,T.rejected))});const l=[];this.interceptors.response.forEach(function(T){l.push(T.fulfilled,T.rejected)});let d,f=0,g;if(!u){const y=[pd.bind(this),void 0];for(y.unshift.apply(y,c),y.push.apply(y,l),g=y.length,d=Promise.resolve(t);f<g;)d=d.then(y[f++],y[f++]);return d}g=c.length;let v=t;for(f=0;f<g;){const y=c[f++],T=c[f++];try{v=y(v)}catch(S){T.call(this,S);break}}try{d=pd.call(this,v)}catch(y){return Promise.reject(y)}for(f=0,g=l.length;f<g;)d=d.then(l[f++],l[f++]);return d}getUri(e){e=rr(this.defaults,e);const t=qp(e.baseURL,e.url,e.allowAbsoluteUrls);return Fp(t,e.params,e.paramsSerializer)}};O.forEach(["delete","get","head","options"],function(e){Zn.prototype[e]=function(t,r){return this.request(rr(r||{},{method:e,url:t,data:(r||{}).data}))}});O.forEach(["post","put","patch"],function(e){function t(r){return function(s,o,c){return this.request(rr(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Zn.prototype[e]=t(),Zn.prototype[e+"Form"]=t(!0)});let Fw=class Qp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(c=>{r.subscribe(c),s=c}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,c){r.reason||(r.reason=new ti(s,o,c),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Qp(function(i){e=i}),cancel:e}}};function Uw(n){return function(t){return n.apply(null,t)}}function Bw(n){return O.isObject(n)&&n.isAxiosError===!0}const Gc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gc).forEach(([n,e])=>{Gc[e]=n});function Jp(n){const e=new Zn(n),t=Rp(Zn.prototype.request,e);return O.extend(t,Zn.prototype,e,{allOwnKeys:!0}),O.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return Jp(rr(n,i))},t}const Le=Jp(vs);Le.Axios=Zn;Le.CanceledError=ti;Le.CancelToken=Fw;Le.isCancel=$p;Le.VERSION=Kp;Le.toFormData=ia;Le.AxiosError=X;Le.Cancel=Le.CanceledError;Le.all=function(e){return Promise.all(e)};Le.spread=Uw;Le.isAxiosError=Bw;Le.mergeConfig=rr;Le.AxiosHeaders=ut;Le.formToJSON=n=>Bp(O.isHTMLForm(n)?new FormData(n):n);Le.getAdapter=Gp.getAdapter;Le.HttpStatusCode=Gc;Le.default=Le;const{Axios:PO,AxiosError:kO,CanceledError:OO,isCancel:NO,CancelToken:DO,VERSION:xO,all:VO,Cancel:LO,isAxiosError:MO,spread:FO,toFormData:UO,AxiosHeaders:BO,HttpStatusCode:$O,formToJSON:jO,getAdapter:qO,mergeConfig:zO}=Le;var $w=hv();const HO=Ap($w);function Yp(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Yp(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function zi(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Yp(n))&&(r&&(r+=" "),r+=e);return r}function Xp(n,e=Number.MIN_SAFE_INTEGER,t=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(n,t))}const jw={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function Zp(n,e,t=void 0){const r={};for(const i in n){const s=n[i];let o="",c=!0;for(let u=0;u<s.length;u+=1){const l=s[u];l&&(o+=(c===!0?"":" ")+e(l),c=!1,t&&t[l]&&(o+=" "+t[l]))}r[i]=o}return r}const qw=de.createContext(),zw=()=>de.useContext(qw)??!1;function gd(n){try{return n.matches(":focus-visible")}catch{}return!1}function nn(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function em(n){if(de.isValidElement(n)||Sp.isValidElementType(n)||!nn(n))return n;const e={};return Object.keys(n).forEach(t=>{e[t]=em(n[t])}),e}function vt(n,e,t={clone:!0}){const r=t.clone?{...n}:n;return nn(n)&&nn(e)&&Object.keys(e).forEach(i=>{de.isValidElement(e[i])||Sp.isValidElementType(e[i])?r[i]=e[i]:nn(e[i])&&Object.prototype.hasOwnProperty.call(n,i)&&nn(n[i])?r[i]=vt(n[i],e[i],t):t.clone?r[i]=nn(e[i])?em(e[i]):e[i]:r[i]=e[i]}),r}function ir(n,...e){const t=new URL(`https://mui.com/production-error/?code=${n}`);return e.forEach(r=>t.searchParams.append("args[]",r)),`Minified MUI error #${n}; visit ${t} for the full message.`}function kn(n){if(typeof n!="string")throw new Error(ir(7));return n.charAt(0).toUpperCase()+n.slice(1)}function Hw(n,e){typeof n=="function"?n(e):n&&(n.current=e)}let yd=0;function Ww(n){const[e,t]=de.useState(n),r=n||e;return de.useEffect(()=>{e==null&&(yd+=1,t(`mui-${yd}`))},[e]),r}const Gw={...$c},_d=Gw.useId;function tm(n){if(_d!==void 0){const e=_d();return n??e}return Ww(n)}function Kw({controlled:n,default:e,name:t,state:r="value"}){const{current:i}=de.useRef(n!==void 0),[s,o]=de.useState(e),c=i?n:s,u=de.useCallback(l=>{i||o(l)},[]);return[c,u]}function Qw(...n){return de.useMemo(()=>n.every(e=>e==null)?null:e=>{n.forEach(t=>{Hw(t,e)})},n)}function Kc(n,e){const t={...e};for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const i=r;if(i==="components"||i==="slots")t[i]={...n[i],...t[i]};else if(i==="componentsProps"||i==="slotProps"){const s=n[i],o=e[i];if(!o)t[i]=s||{};else if(!s)t[i]=o;else{t[i]={...o};for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c)){const u=c;t[i][u]=Kc(s[u],o[u])}}}else t[i]===void 0&&(t[i]=n[i])}return t}const vd=n=>n,Jw=()=>{let n=vd;return{configure(e){n=e},generate(e){return n(e)},reset(){n=vd}}},Yw=Jw(),Xw={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Nl(n,e,t="Mui"){const r=Xw[e];return r?`${t}-${r}`:`${Yw.generate(n)}-${e}`}function nm(n,e,t="Mui"){const r={};return e.forEach(i=>{r[i]=Nl(n,i,t)}),r}function Hi(n,e){return e?vt(n,e,{clone:!1}):n}function Zw(n,e){if(!n.containerQueries)return e;const t=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,i)=>{var o,c;const s=/min-width:\s*([0-9.]+)/;return+(((o=r.match(s))==null?void 0:o[1])||0)-+(((c=i.match(s))==null?void 0:c[1])||0)});return t.length?t.reduce((r,i)=>{const s=e[i];return delete r[i],r[i]=s,r},{...e}):e}function eE(n,e){return e==="@"||e.startsWith("@")&&(n.some(t=>e.startsWith(`@${t}`))||!!e.match(/^@\d/))}function tE(n,e){const t=e.match(/^@([^/]+)?\/?(.+)?$/);if(!t)return null;const[,r,i]=t,s=Number.isNaN(+r)?r||0:+r;return n.containerQueries(i).up(s)}function nE(n){const e=(s,o)=>s.replace("@media",o?`@container ${o}`:"@container");function t(s,o){s.up=(...c)=>e(n.breakpoints.up(...c),o),s.down=(...c)=>e(n.breakpoints.down(...c),o),s.between=(...c)=>e(n.breakpoints.between(...c),o),s.only=(...c)=>e(n.breakpoints.only(...c),o),s.not=(...c)=>{const u=e(n.breakpoints.not(...c),o);return u.includes("not all and")?u.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):u}}const r={},i=s=>(t(r,s),r);return t(i),{...n,containerQueries:i}}const aa={xs:0,sm:600,md:900,lg:1200,xl:1536},wd={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${aa[n]}px)`},rE={containerQueries:n=>({up:e=>{let t=typeof e=="number"?e:aa[e]||e;return typeof t=="number"&&(t=`${t}px`),n?`@container ${n} (min-width:${t})`:`@container (min-width:${t})`}})};function ln(n,e,t){const r=n.theme||{};if(Array.isArray(e)){const s=r.breakpoints||wd;return e.reduce((o,c,u)=>(o[s.up(s.keys[u])]=t(e[u]),o),{})}if(typeof e=="object"){const s=r.breakpoints||wd;return Object.keys(e).reduce((o,c)=>{if(eE(s.keys,c)){const u=tE(r.containerQueries?r:rE,c);u&&(o[u]=t(e[c],c))}else if(Object.keys(s.values||aa).includes(c)){const u=s.up(c);o[u]=t(e[c],c)}else{const u=c;o[u]=e[u]}return o},{})}return t(e)}function iE(n={}){var t;return((t=n.keys)==null?void 0:t.reduce((r,i)=>{const s=n.up(i);return r[s]={},r},{}))||{}}function sE(n,e){return n.reduce((t,r)=>{const i=t[r];return(!i||Object.keys(i).length===0)&&delete t[r],t},e)}function ca(n,e,t=!0){if(!e||typeof e!="string")return null;if(n&&n.vars&&t){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,n);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,n)}function Oo(n,e,t,r=t){let i;return typeof n=="function"?i=n(t):Array.isArray(n)?i=n[t]||r:i=ca(n,t)||r,e&&(i=e(i,r,n)),i}function ke(n){const{prop:e,cssProperty:t=n.prop,themeKey:r,transform:i}=n,s=o=>{if(o[e]==null)return null;const c=o[e],u=o.theme,l=ca(u,r)||{};return ln(o,c,f=>{let g=Oo(l,i,f);return f===g&&typeof f=="string"&&(g=Oo(l,i,`${e}${f==="default"?"":kn(f)}`,f)),t===!1?g:{[t]:g}})};return s.propTypes={},s.filterProps=[e],s}function oE(n){const e={};return t=>(e[t]===void 0&&(e[t]=n(t)),e[t])}const aE={m:"margin",p:"padding"},cE={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Ed={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},lE=oE(n=>{if(n.length>2)if(Ed[n])n=Ed[n];else return[n];const[e,t]=n.split(""),r=aE[e],i=cE[t]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),Dl=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],xl=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Dl,...xl];function ws(n,e,t,r){const i=ca(n,e,!0)??t;return typeof i=="number"||typeof i=="string"?s=>typeof s=="string"?s:typeof i=="string"?`calc(${s} * ${i})`:i*s:Array.isArray(i)?s=>{if(typeof s=="string")return s;const o=Math.abs(s),c=i[o];return s>=0?c:typeof c=="number"?-c:`-${c}`}:typeof i=="function"?i:()=>{}}function Vl(n){return ws(n,"spacing",8)}function Es(n,e){return typeof e=="string"||e==null?e:n(e)}function uE(n,e){return t=>n.reduce((r,i)=>(r[i]=Es(e,t),r),{})}function hE(n,e,t,r){if(!e.includes(t))return null;const i=lE(t),s=uE(i,r),o=n[t];return ln(n,o,s)}function rm(n,e){const t=Vl(n.theme);return Object.keys(n).map(r=>hE(n,e,r,t)).reduce(Hi,{})}function be(n){return rm(n,Dl)}be.propTypes={};be.filterProps=Dl;function Ae(n){return rm(n,xl)}Ae.propTypes={};Ae.filterProps=xl;function la(...n){const e=n.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),t=r=>Object.keys(r).reduce((i,s)=>e[s]?Hi(i,e[s](r)):i,{});return t.propTypes={},t.filterProps=n.reduce((r,i)=>r.concat(i.filterProps),[]),t}function It(n){return typeof n!="number"?n:`${n}px solid`}function Rt(n,e){return ke({prop:n,themeKey:"borders",transform:e})}const dE=Rt("border",It),fE=Rt("borderTop",It),pE=Rt("borderRight",It),mE=Rt("borderBottom",It),gE=Rt("borderLeft",It),yE=Rt("borderColor"),_E=Rt("borderTopColor"),vE=Rt("borderRightColor"),wE=Rt("borderBottomColor"),EE=Rt("borderLeftColor"),TE=Rt("outline",It),IE=Rt("outlineColor"),ua=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const e=ws(n.theme,"shape.borderRadius",4),t=r=>({borderRadius:Es(e,r)});return ln(n,n.borderRadius,t)}return null};ua.propTypes={};ua.filterProps=["borderRadius"];la(dE,fE,pE,mE,gE,yE,_E,vE,wE,EE,ua,TE,IE);const ha=n=>{if(n.gap!==void 0&&n.gap!==null){const e=ws(n.theme,"spacing",8),t=r=>({gap:Es(e,r)});return ln(n,n.gap,t)}return null};ha.propTypes={};ha.filterProps=["gap"];const da=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const e=ws(n.theme,"spacing",8),t=r=>({columnGap:Es(e,r)});return ln(n,n.columnGap,t)}return null};da.propTypes={};da.filterProps=["columnGap"];const fa=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const e=ws(n.theme,"spacing",8),t=r=>({rowGap:Es(e,r)});return ln(n,n.rowGap,t)}return null};fa.propTypes={};fa.filterProps=["rowGap"];const bE=ke({prop:"gridColumn"}),AE=ke({prop:"gridRow"}),SE=ke({prop:"gridAutoFlow"}),RE=ke({prop:"gridAutoColumns"}),CE=ke({prop:"gridAutoRows"}),PE=ke({prop:"gridTemplateColumns"}),kE=ke({prop:"gridTemplateRows"}),OE=ke({prop:"gridTemplateAreas"}),NE=ke({prop:"gridArea"});la(ha,da,fa,bE,AE,SE,RE,CE,PE,kE,OE,NE);function Nr(n,e){return e==="grey"?e:n}const DE=ke({prop:"color",themeKey:"palette",transform:Nr}),xE=ke({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Nr}),VE=ke({prop:"backgroundColor",themeKey:"palette",transform:Nr});la(DE,xE,VE);function gt(n){return n<=1&&n!==0?`${n*100}%`:n}const LE=ke({prop:"width",transform:gt}),Ll=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const e=t=>{var i,s,o,c,u;const r=((o=(s=(i=n.theme)==null?void 0:i.breakpoints)==null?void 0:s.values)==null?void 0:o[t])||aa[t];return r?((u=(c=n.theme)==null?void 0:c.breakpoints)==null?void 0:u.unit)!=="px"?{maxWidth:`${r}${n.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:gt(t)}};return ln(n,n.maxWidth,e)}return null};Ll.filterProps=["maxWidth"];const ME=ke({prop:"minWidth",transform:gt}),FE=ke({prop:"height",transform:gt}),UE=ke({prop:"maxHeight",transform:gt}),BE=ke({prop:"minHeight",transform:gt});ke({prop:"size",cssProperty:"width",transform:gt});ke({prop:"size",cssProperty:"height",transform:gt});const $E=ke({prop:"boxSizing"});la(LE,Ll,ME,FE,UE,BE,$E);const pa={border:{themeKey:"borders",transform:It},borderTop:{themeKey:"borders",transform:It},borderRight:{themeKey:"borders",transform:It},borderBottom:{themeKey:"borders",transform:It},borderLeft:{themeKey:"borders",transform:It},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:It},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ua},color:{themeKey:"palette",transform:Nr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Nr},backgroundColor:{themeKey:"palette",transform:Nr},p:{style:Ae},pt:{style:Ae},pr:{style:Ae},pb:{style:Ae},pl:{style:Ae},px:{style:Ae},py:{style:Ae},padding:{style:Ae},paddingTop:{style:Ae},paddingRight:{style:Ae},paddingBottom:{style:Ae},paddingLeft:{style:Ae},paddingX:{style:Ae},paddingY:{style:Ae},paddingInline:{style:Ae},paddingInlineStart:{style:Ae},paddingInlineEnd:{style:Ae},paddingBlock:{style:Ae},paddingBlockStart:{style:Ae},paddingBlockEnd:{style:Ae},m:{style:be},mt:{style:be},mr:{style:be},mb:{style:be},ml:{style:be},mx:{style:be},my:{style:be},margin:{style:be},marginTop:{style:be},marginRight:{style:be},marginBottom:{style:be},marginLeft:{style:be},marginX:{style:be},marginY:{style:be},marginInline:{style:be},marginInlineStart:{style:be},marginInlineEnd:{style:be},marginBlock:{style:be},marginBlockStart:{style:be},marginBlockEnd:{style:be},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ha},rowGap:{style:fa},columnGap:{style:da},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:gt},maxWidth:{style:Ll},minWidth:{transform:gt},height:{transform:gt},maxHeight:{transform:gt},minHeight:{transform:gt},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function jE(...n){const e=n.reduce((r,i)=>r.concat(Object.keys(i)),[]),t=new Set(e);return n.every(r=>t.size===Object.keys(r).length)}function qE(n,e){return typeof n=="function"?n(e):n}function zE(){function n(t,r,i,s){const o={[t]:r,theme:i},c=s[t];if(!c)return{[t]:r};const{cssProperty:u=t,themeKey:l,transform:d,style:f}=c;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[t]:r};const g=ca(i,l)||{};return f?f(o):ln(o,r,y=>{let T=Oo(g,d,y);return y===T&&typeof y=="string"&&(T=Oo(g,d,`${t}${y==="default"?"":kn(y)}`,y)),u===!1?T:{[u]:T}})}function e(t){const{sx:r,theme:i={}}=t||{};if(!r)return null;const s=i.unstable_sxConfig??pa;function o(c){let u=c;if(typeof c=="function")u=c(i);else if(typeof c!="object")return c;if(!u)return null;const l=iE(i.breakpoints),d=Object.keys(l);let f=l;return Object.keys(u).forEach(g=>{const v=qE(u[g],i);if(v!=null)if(typeof v=="object")if(s[g])f=Hi(f,n(g,v,i,s));else{const y=ln({theme:i},v,T=>({[g]:T}));jE(y,v)?f[g]=e({sx:v,theme:i}):f=Hi(f,y)}else f=Hi(f,n(g,v,i,s))}),Zw(i,sE(d,f))}return Array.isArray(r)?r.map(o):o(r)}return e}const Br=zE();Br.filterProps=["sx"];function Qc(){return Qc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Qc.apply(null,arguments)}function HE(n){if(n.sheet)return n.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===n)return document.styleSheets[e]}function WE(n){var e=document.createElement("style");return e.setAttribute("data-emotion",n.key),n.nonce!==void 0&&e.setAttribute("nonce",n.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var GE=function(){function n(t){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=n.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(WE(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=HE(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},n}(),Ze="-ms-",No="-moz-",se="-webkit-",im="comm",Ml="rule",Fl="decl",KE="@import",sm="@keyframes",QE="@layer",JE=Math.abs,ma=String.fromCharCode,YE=Object.assign;function XE(n,e){return We(n,0)^45?(((e<<2^We(n,0))<<2^We(n,1))<<2^We(n,2))<<2^We(n,3):0}function om(n){return n.trim()}function ZE(n,e){return(n=e.exec(n))?n[0]:n}function oe(n,e,t){return n.replace(e,t)}function Jc(n,e){return n.indexOf(e)}function We(n,e){return n.charCodeAt(e)|0}function ns(n,e,t){return n.slice(e,t)}function Bt(n){return n.length}function Ul(n){return n.length}function Zs(n,e){return e.push(n),n}function eT(n,e){return n.map(e).join("")}var ga=1,$r=1,am=0,dt=0,xe=0,ni="";function ya(n,e,t,r,i,s,o){return{value:n,root:e,parent:t,type:r,props:i,children:s,line:ga,column:$r,length:o,return:""}}function Ri(n,e){return YE(ya("",null,null,"",null,null,0),n,{length:-n.length},e)}function tT(){return xe}function nT(){return xe=dt>0?We(ni,--dt):0,$r--,xe===10&&($r=1,ga--),xe}function wt(){return xe=dt<am?We(ni,dt++):0,$r++,xe===10&&($r=1,ga++),xe}function Gt(){return We(ni,dt)}function po(){return dt}function Ts(n,e){return ns(ni,n,e)}function rs(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cm(n){return ga=$r=1,am=Bt(ni=n),dt=0,[]}function lm(n){return ni="",n}function mo(n){return om(Ts(dt-1,Yc(n===91?n+2:n===40?n+1:n)))}function rT(n){for(;(xe=Gt())&&xe<33;)wt();return rs(n)>2||rs(xe)>3?"":" "}function iT(n,e){for(;--e&&wt()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return Ts(n,po()+(e<6&&Gt()==32&&wt()==32))}function Yc(n){for(;wt();)switch(xe){case n:return dt;case 34:case 39:n!==34&&n!==39&&Yc(xe);break;case 40:n===41&&Yc(n);break;case 92:wt();break}return dt}function sT(n,e){for(;wt()&&n+xe!==57;)if(n+xe===84&&Gt()===47)break;return"/*"+Ts(e,dt-1)+"*"+ma(n===47?n:wt())}function oT(n){for(;!rs(Gt());)wt();return Ts(n,dt)}function aT(n){return lm(go("",null,null,null,[""],n=cm(n),0,[0],n))}function go(n,e,t,r,i,s,o,c,u){for(var l=0,d=0,f=o,g=0,v=0,y=0,T=1,S=1,C=1,N=0,x="",V=i,F=s,B=r,b=x;S;)switch(y=N,N=wt()){case 40:if(y!=108&&We(b,f-1)==58){Jc(b+=oe(mo(N),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:b+=mo(N);break;case 9:case 10:case 13:case 32:b+=rT(y);break;case 92:b+=iT(po()-1,7);continue;case 47:switch(Gt()){case 42:case 47:Zs(cT(sT(wt(),po()),e,t),u);break;default:b+="/"}break;case 123*T:c[l++]=Bt(b)*C;case 125*T:case 59:case 0:switch(N){case 0:case 125:S=0;case 59+d:C==-1&&(b=oe(b,/\f/g,"")),v>0&&Bt(b)-f&&Zs(v>32?Id(b+";",r,t,f-1):Id(oe(b," ","")+";",r,t,f-2),u);break;case 59:b+=";";default:if(Zs(B=Td(b,e,t,l,d,i,c,x,V=[],F=[],f),s),N===123)if(d===0)go(b,e,B,B,V,s,f,c,F);else switch(g===99&&We(b,3)===110?100:g){case 100:case 108:case 109:case 115:go(n,B,B,r&&Zs(Td(n,B,B,0,0,i,c,x,i,V=[],f),F),i,F,f,c,r?V:F);break;default:go(b,B,B,B,[""],F,0,c,F)}}l=d=v=0,T=C=1,x=b="",f=o;break;case 58:f=1+Bt(b),v=y;default:if(T<1){if(N==123)--T;else if(N==125&&T++==0&&nT()==125)continue}switch(b+=ma(N),N*T){case 38:C=d>0?1:(b+="\f",-1);break;case 44:c[l++]=(Bt(b)-1)*C,C=1;break;case 64:Gt()===45&&(b+=mo(wt())),g=Gt(),d=f=Bt(x=b+=oT(po())),N++;break;case 45:y===45&&Bt(b)==2&&(T=0)}}return s}function Td(n,e,t,r,i,s,o,c,u,l,d){for(var f=i-1,g=i===0?s:[""],v=Ul(g),y=0,T=0,S=0;y<r;++y)for(var C=0,N=ns(n,f+1,f=JE(T=o[y])),x=n;C<v;++C)(x=om(T>0?g[C]+" "+N:oe(N,/&\f/g,g[C])))&&(u[S++]=x);return ya(n,e,t,i===0?Ml:c,u,l,d)}function cT(n,e,t){return ya(n,e,t,im,ma(tT()),ns(n,2,-2),0)}function Id(n,e,t,r){return ya(n,e,t,Fl,ns(n,0,r),ns(n,r+1,-1),r)}function Dr(n,e){for(var t="",r=Ul(n),i=0;i<r;i++)t+=e(n[i],i,n,e)||"";return t}function lT(n,e,t,r){switch(n.type){case QE:if(n.children.length)break;case KE:case Fl:return n.return=n.return||n.value;case im:return"";case sm:return n.return=n.value+"{"+Dr(n.children,r)+"}";case Ml:n.value=n.props.join(",")}return Bt(t=Dr(n.children,r))?n.return=n.value+"{"+t+"}":""}function uT(n){var e=Ul(n);return function(t,r,i,s){for(var o="",c=0;c<e;c++)o+=n[c](t,r,i,s)||"";return o}}function hT(n){return function(e){e.root||(e=e.return)&&n(e)}}function um(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var dT=function(e,t,r){for(var i=0,s=0;i=s,s=Gt(),i===38&&s===12&&(t[r]=1),!rs(s);)wt();return Ts(e,dt)},fT=function(e,t){var r=-1,i=44;do switch(rs(i)){case 0:i===38&&Gt()===12&&(t[r]=1),e[r]+=dT(dt-1,t,r);break;case 2:e[r]+=mo(i);break;case 4:if(i===44){e[++r]=Gt()===58?"&\f":"",t[r]=e[r].length;break}default:e[r]+=ma(i)}while(i=wt());return e},pT=function(e,t){return lm(fT(cm(e),t))},bd=new WeakMap,mT=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!bd.get(r))&&!i){bd.set(e,!0);for(var s=[],o=pT(t,s),c=r.props,u=0,l=0;u<o.length;u++)for(var d=0;d<c.length;d++,l++)e.props[l]=s[u]?o[u].replace(/&\f/g,c[d]):c[d]+" "+o[u]}}},gT=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function hm(n,e){switch(XE(n,e)){case 5103:return se+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return se+n+No+n+Ze+n+n;case 6828:case 4268:return se+n+Ze+n+n;case 6165:return se+n+Ze+"flex-"+n+n;case 5187:return se+n+oe(n,/(\w+).+(:[^]+)/,se+"box-$1$2"+Ze+"flex-$1$2")+n;case 5443:return se+n+Ze+"flex-item-"+oe(n,/flex-|-self/,"")+n;case 4675:return se+n+Ze+"flex-line-pack"+oe(n,/align-content|flex-|-self/,"")+n;case 5548:return se+n+Ze+oe(n,"shrink","negative")+n;case 5292:return se+n+Ze+oe(n,"basis","preferred-size")+n;case 6060:return se+"box-"+oe(n,"-grow","")+se+n+Ze+oe(n,"grow","positive")+n;case 4554:return se+oe(n,/([^-])(transform)/g,"$1"+se+"$2")+n;case 6187:return oe(oe(oe(n,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),n,"")+n;case 5495:case 3959:return oe(n,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return oe(oe(n,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+n+n;case 4095:case 3583:case 4068:case 2532:return oe(n,/(.+)-inline(.+)/,se+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bt(n)-1-e>6)switch(We(n,e+1)){case 109:if(We(n,e+4)!==45)break;case 102:return oe(n,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+No+(We(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Jc(n,"stretch")?hm(oe(n,"stretch","fill-available"),e)+n:n}break;case 4949:if(We(n,e+1)!==115)break;case 6444:switch(We(n,Bt(n)-3-(~Jc(n,"!important")&&10))){case 107:return oe(n,":",":"+se)+n;case 101:return oe(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(We(n,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+Ze+"$2box$3")+n}break;case 5936:switch(We(n,e+11)){case 114:return se+n+Ze+oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return se+n+Ze+oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return se+n+Ze+oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return se+n+Ze+n+n}return n}var yT=function(e,t,r,i){if(e.length>-1&&!e.return)switch(e.type){case Fl:e.return=hm(e.value,e.length);break;case sm:return Dr([Ri(e,{value:oe(e.value,"@","@"+se)})],i);case Ml:if(e.length)return eT(e.props,function(s){switch(ZE(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dr([Ri(e,{props:[oe(s,/:(read-\w+)/,":"+No+"$1")]})],i);case"::placeholder":return Dr([Ri(e,{props:[oe(s,/:(plac\w+)/,":"+se+"input-$1")]}),Ri(e,{props:[oe(s,/:(plac\w+)/,":"+No+"$1")]}),Ri(e,{props:[oe(s,/:(plac\w+)/,Ze+"input-$1")]})],i)}return""})}},_T=[yT],WO=function(e){var t=e.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(T){var S=T.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(T),T.setAttribute("data-s",""))})}var i=e.stylisPlugins||_T,s={},o,c=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(T){for(var S=T.getAttribute("data-emotion").split(" "),C=1;C<S.length;C++)s[S[C]]=!0;c.push(T)});var u,l=[mT,gT];{var d,f=[lT,hT(function(T){d.insert(T)})],g=uT(l.concat(i,f)),v=function(S){return Dr(aT(S),g)};u=function(S,C,N,x){d=N,v(S?S+"{"+C.styles+"}":C.styles),x&&(y.inserted[C.name]=!0)}}var y={key:t,sheet:new GE({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return y.sheet.hydrate(c),y},vT=!0;function wT(n,e,t){var r="";return t.split(" ").forEach(function(i){n[i]!==void 0?e.push(n[i]+";"):i&&(r+=i+" ")}),r}var dm=function(e,t,r){var i=e.key+"-"+t.name;(r===!1||vT===!1)&&e.registered[i]===void 0&&(e.registered[i]=t.styles)},ET=function(e,t,r){dm(e,t,r);var i=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function TT(n){for(var e=0,t,r=0,i=n.length;i>=4;++r,i-=4)t=n.charCodeAt(r)&255|(n.charCodeAt(++r)&255)<<8|(n.charCodeAt(++r)&255)<<16|(n.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(n.charCodeAt(r+2)&255)<<16;case 2:e^=(n.charCodeAt(r+1)&255)<<8;case 1:e^=n.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var IT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bT=/[A-Z]|^ms/g,AT=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fm=function(e){return e.charCodeAt(1)===45},Ad=function(e){return e!=null&&typeof e!="boolean"},Ec=um(function(n){return fm(n)?n:n.replace(bT,"-$&").toLowerCase()}),Sd=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(AT,function(r,i,s){return $t={name:i,styles:s,next:$t},i})}return IT[e]!==1&&!fm(e)&&typeof t=="number"&&t!==0?t+"px":t};function is(n,e,t){if(t==null)return"";var r=t;if(r.__emotion_styles!==void 0)return r;switch(typeof t){case"boolean":return"";case"object":{var i=t;if(i.anim===1)return $t={name:i.name,styles:i.styles,next:$t},i.name;var s=t;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)$t={name:o.name,styles:o.styles,next:$t},o=o.next;var c=s.styles+";";return c}return ST(n,e,t)}case"function":{if(n!==void 0){var u=$t,l=t(n);return $t=u,is(n,e,l)}break}}var d=t;if(e==null)return d;var f=e[d];return f!==void 0?f:d}function ST(n,e,t){var r="";if(Array.isArray(t))for(var i=0;i<t.length;i++)r+=is(n,e,t[i])+";";else for(var s in t){var o=t[s];if(typeof o!="object"){var c=o;e!=null&&e[c]!==void 0?r+=s+"{"+e[c]+"}":Ad(c)&&(r+=Ec(s)+":"+Sd(s,c)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var u=0;u<o.length;u++)Ad(o[u])&&(r+=Ec(s)+":"+Sd(s,o[u])+";");else{var l=is(n,e,o);switch(s){case"animation":case"animationName":{r+=Ec(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var Rd=/label:\s*([^\s;{]+)\s*(;|$)/g,$t;function pm(n,e,t){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var r=!0,i="";$t=void 0;var s=n[0];if(s==null||s.raw===void 0)r=!1,i+=is(t,e,s);else{var o=s;i+=o[0]}for(var c=1;c<n.length;c++)if(i+=is(t,e,n[c]),r){var u=s;i+=u[c]}Rd.lastIndex=0;for(var l="",d;(d=Rd.exec(i))!==null;)l+="-"+d[1];var f=TT(i)+l;return{name:f,styles:i,next:$t}}var RT=function(e){return e()},CT=$c.useInsertionEffect?$c.useInsertionEffect:!1,PT=CT||RT,kT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,OT=um(function(n){return kT.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),NT=OT,DT=function(e){return e!=="theme"},Cd=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?NT:DT},Pd=function(e,t,r){var i;if(t){var s=t.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},xT=function(e){var t=e.cache,r=e.serialized,i=e.isStringTag;return dm(t,r,i),PT(function(){return ET(t,r,i)}),null},VT=function n(e,t){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;t!==void 0&&(s=t.label,o=t.target);var c=Pd(e,t,r),u=c||Cd(i),l=!u("as");return function(){var d=arguments,f=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{var g=d[0];f.push(g[0]);for(var v=d.length,y=1;y<v;y++)f.push(d[y],g[y])}var T=sv(function(S,C,N){var x=l&&S.as||i,V="",F=[],B=S;if(S.theme==null){B={};for(var b in S)B[b]=S[b];B.theme=de.useContext(ov)}typeof S.className=="string"?V=wT(C.registered,F,S.className):S.className!=null&&(V=S.className+" ");var w=pm(f.concat(F),C.registered,B);V+=C.key+"-"+w.name,o!==void 0&&(V+=" "+o);var E=l&&c===void 0?Cd(x):u,m={};for(var A in S)l&&A==="as"||E(A)&&(m[A]=S[A]);return m.className=V,N&&(m.ref=N),de.createElement(de.Fragment,null,de.createElement(xT,{cache:C,serialized:w,isStringTag:typeof x=="string"}),de.createElement(x,m))});return T.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",T.defaultProps=e.defaultProps,T.__emotion_real=T,T.__emotion_base=i,T.__emotion_styles=f,T.__emotion_forwardProp=c,Object.defineProperty(T,"toString",{value:function(){return"."+o}}),T.withComponent=function(S,C){var N=n(S,Qc({},t,C,{shouldForwardProp:Pd(T,C,!0)}));return N.apply(void 0,f)},T}},LT=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Xc=VT.bind(null);LT.forEach(function(n){Xc[n]=Xc(n)});/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MT(n,e){return Xc(n,e)}function FT(n,e){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=e(n.__emotion_styles))}const kd=[];function Od(n){return kd[0]=n,pm(kd)}const UT=n=>{const e=Object.keys(n).map(t=>({key:t,val:n[t]}))||[];return e.sort((t,r)=>t.val-r.val),e.reduce((t,r)=>({...t,[r.key]:r.val}),{})};function BT(n){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:r=5,...i}=n,s=UT(e),o=Object.keys(s);function c(g){return`@media (min-width:${typeof e[g]=="number"?e[g]:g}${t})`}function u(g){return`@media (max-width:${(typeof e[g]=="number"?e[g]:g)-r/100}${t})`}function l(g,v){const y=o.indexOf(v);return`@media (min-width:${typeof e[g]=="number"?e[g]:g}${t}) and (max-width:${(y!==-1&&typeof e[o[y]]=="number"?e[o[y]]:v)-r/100}${t})`}function d(g){return o.indexOf(g)+1<o.length?l(g,o[o.indexOf(g)+1]):c(g)}function f(g){const v=o.indexOf(g);return v===0?c(o[1]):v===o.length-1?u(o[v]):l(g,o[o.indexOf(g)+1]).replace("@media","@media not all and")}return{keys:o,values:s,up:c,down:u,between:l,only:d,not:f,unit:t,...i}}const $T={borderRadius:4};function mm(n=8,e=Vl({spacing:n})){if(n.mui)return n;const t=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return t.mui=!0,t}function jT(n,e){var r;const t=this;if(t.vars){if(!((r=t.colorSchemes)!=null&&r[n])||typeof t.getColorSchemeSelector!="function")return{};let i=t.getColorSchemeSelector(n);return i==="&"?e:((i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:e})}return t.palette.mode===n?e:{}}function gm(n={},...e){const{breakpoints:t={},palette:r={},spacing:i,shape:s={},...o}=n,c=BT(t),u=mm(i);let l=vt({breakpoints:c,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:u,shape:{...$T,...s}},o);return l=nE(l),l.applyStyles=jT,l=e.reduce((d,f)=>vt(d,f),l),l.unstable_sxConfig={...pa,...o==null?void 0:o.unstable_sxConfig},l.unstable_sx=function(f){return Br({sx:f,theme:this})},l}function ym(n){const{variants:e,...t}=n,r={variants:e,style:Od(t),isProcessed:!0};return r.style===t||e&&e.forEach(i=>{typeof i.style!="function"&&(i.style=Od(i.style))}),r}const qT=gm();function Tc(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function zT(n){return n?(e,t)=>t[n]:null}function HT(n,e,t){n.theme=KT(n.theme)?t:n.theme[e]||n.theme}function yo(n,e){const t=typeof e=="function"?e(n):e;if(Array.isArray(t))return t.flatMap(r=>yo(n,r));if(Array.isArray(t==null?void 0:t.variants)){let r;if(t.isProcessed)r=t.style;else{const{variants:i,...s}=t;r=s}return _m(n,t.variants,[r])}return t!=null&&t.isProcessed?t.style:t}function _m(n,e,t=[]){var i;let r;e:for(let s=0;s<e.length;s+=1){const o=e[s];if(typeof o.props=="function"){if(r??(r={...n,...n.ownerState,ownerState:n.ownerState}),!o.props(r))continue}else for(const c in o.props)if(n[c]!==o.props[c]&&((i=n.ownerState)==null?void 0:i[c])!==o.props[c])continue e;typeof o.style=="function"?(r??(r={...n,...n.ownerState,ownerState:n.ownerState}),t.push(o.style(r))):t.push(o.style)}return t}function WT(n={}){const{themeId:e,defaultTheme:t=qT,rootShouldForwardProp:r=Tc,slotShouldForwardProp:i=Tc}=n;function s(c){HT(c,e,t)}return(c,u={})=>{FT(c,F=>F.filter(B=>B!==Br));const{name:l,slot:d,skipVariantsResolver:f,skipSx:g,overridesResolver:v=zT(JT(d)),...y}=u,T=f!==void 0?f:d&&d!=="Root"&&d!=="root"||!1,S=g||!1;let C=Tc;d==="Root"||d==="root"?C=r:d?C=i:QT(c)&&(C=void 0);const N=MT(c,{shouldForwardProp:C,label:GT(),...y}),x=F=>{if(typeof F=="function"&&F.__emotion_real!==F)return function(b){return yo(b,F)};if(nn(F)){const B=ym(F);return B.variants?function(w){return yo(w,B)}:B.style}return F},V=(...F)=>{const B=[],b=F.map(x),w=[];if(B.push(s),l&&v&&w.push(function(R){var j,W;const Y=(W=(j=R.theme.components)==null?void 0:j[l])==null?void 0:W.styleOverrides;if(!Y)return null;const pe={};for(const G in Y)pe[G]=yo(R,Y[G]);return v(R,pe)}),l&&!T&&w.push(function(R){var pe,j;const I=R.theme,Y=(j=(pe=I==null?void 0:I.components)==null?void 0:pe[l])==null?void 0:j.variants;return Y?_m(R,Y):null}),S||w.push(Br),Array.isArray(b[0])){const A=b.shift(),R=new Array(B.length).fill(""),I=new Array(w.length).fill("");let Y;Y=[...R,...A,...I],Y.raw=[...R,...A.raw,...I],B.unshift(Y)}const E=[...B,...b,...w],m=N(...E);return c.muiName&&(m.muiName=c.muiName),m};return N.withConfig&&(V.withConfig=N.withConfig),V}}function GT(n,e){return void 0}function KT(n){for(const e in n)return!1;return!0}function QT(n){return typeof n=="string"&&n.charCodeAt(0)>96}function JT(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}function Bl(n,e=0,t=1){return Xp(n,e,t)}function YT(n){n=n.slice(1);const e=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let t=n.match(e);return t&&t[0].length===1&&(t=t.map(r=>r+r)),t?`rgb${t.length===4?"a":""}(${t.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function On(n){if(n.type)return n;if(n.charAt(0)==="#")return On(YT(n));const e=n.indexOf("("),t=n.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(t))throw new Error(ir(9,n));let r=n.substring(e+1,n.length-1),i;if(t==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(i))throw new Error(ir(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:t,values:r,colorSpace:i}}const XT=n=>{const e=On(n);return e.values.slice(0,3).map((t,r)=>e.type.includes("hsl")&&r!==0?`${t}%`:t).join(" ")},Li=(n,e)=>{try{return XT(n)}catch{return n}};function _a(n){const{type:e,colorSpace:t}=n;let{values:r}=n;return e.includes("rgb")?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${t} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function vm(n){n=On(n);const{values:e}=n,t=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(l,d=(l+t/30)%12)=>i-s*Math.max(Math.min(d-3,9-d,1),-1);let c="rgb";const u=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return n.type==="hsla"&&(c+="a",u.push(e[3])),_a({type:c,values:u})}function Zc(n){n=On(n);let e=n.type==="hsl"||n.type==="hsla"?On(vm(n)).values:n.values;return e=e.map(t=>(n.type!=="color"&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function ZT(n,e){const t=Zc(n),r=Zc(e);return(Math.max(t,r)+.05)/(Math.min(t,r)+.05)}function e0(n,e){return n=On(n),e=Bl(e),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${e}`:n.values[3]=e,_a(n)}function eo(n,e,t){try{return e0(n,e)}catch{return n}}function $l(n,e){if(n=On(n),e=Bl(e),n.type.includes("hsl"))n.values[2]*=1-e;else if(n.type.includes("rgb")||n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]*=1-e;return _a(n)}function ue(n,e,t){try{return $l(n,e)}catch{return n}}function jl(n,e){if(n=On(n),e=Bl(e),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*e;else if(n.type.includes("rgb"))for(let t=0;t<3;t+=1)n.values[t]+=(255-n.values[t])*e;else if(n.type.includes("color"))for(let t=0;t<3;t+=1)n.values[t]+=(1-n.values[t])*e;return _a(n)}function he(n,e,t){try{return jl(n,e)}catch{return n}}function t0(n,e=.15){return Zc(n)>.5?$l(n,e):jl(n,e)}function to(n,e,t){try{return t0(n,e)}catch{return n}}const n0=de.createContext(void 0);function r0(n){const{theme:e,name:t,props:r}=n;if(!e||!e.components||!e.components[t])return r;const i=e.components[t];return i.defaultProps?Kc(i.defaultProps,r):!i.styleOverrides&&!i.variants?Kc(i,r):r}function i0({props:n,name:e}){const t=de.useContext(n0);return r0({props:n,name:e,theme:{components:t}})}const Nd={theme:void 0};function s0(n){let e,t;return function(i){let s=e;return(s===void 0||i.theme!==t)&&(Nd.theme=i.theme,s=ym(n(Nd)),e=s,t=i.theme),s}}function o0(n=""){function e(...r){if(!r.length)return"";const i=r[0];return typeof i=="string"&&!i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${i}${e(...r.slice(1))})`:`, ${i}`}return(r,...i)=>`var(--${n?`${n}-`:""}${r}${e(...i)})`}const Dd=(n,e,t,r=[])=>{let i=n;e.forEach((s,o)=>{o===e.length-1?Array.isArray(i)?i[Number(s)]=t:i&&typeof i=="object"&&(i[s]=t):i&&typeof i=="object"&&(i[s]||(i[s]=r.includes(s)?[]:{}),i=i[s])})},a0=(n,e,t)=>{function r(i,s=[],o=[]){Object.entries(i).forEach(([c,u])=>{(!t||t&&!t([...s,c]))&&u!=null&&(typeof u=="object"&&Object.keys(u).length>0?r(u,[...s,c],Array.isArray(u)?[...o,c]:o):e([...s,c],u,o))})}r(n)},c0=(n,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>n.includes(r))||n[n.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Ic(n,e){const{prefix:t,shouldSkipGeneratingVar:r}=e||{},i={},s={},o={};return a0(n,(c,u,l)=>{if((typeof u=="string"||typeof u=="number")&&(!r||!r(c,u))){const d=`--${t?`${t}-`:""}${c.join("-")}`,f=c0(c,u);Object.assign(i,{[d]:f}),Dd(s,c,`var(${d})`,l),Dd(o,c,`var(${d}, ${f})`,l)}},c=>c[0]==="vars"),{css:i,vars:s,varsWithDefaults:o}}function l0(n,e={}){const{getSelector:t=S,disableCssColorScheme:r,colorSchemeSelector:i}=e,{colorSchemes:s={},components:o,defaultColorScheme:c="light",...u}=n,{vars:l,css:d,varsWithDefaults:f}=Ic(u,e);let g=f;const v={},{[c]:y,...T}=s;if(Object.entries(T||{}).forEach(([x,V])=>{const{vars:F,css:B,varsWithDefaults:b}=Ic(V,e);g=vt(g,b),v[x]={css:B,vars:F}}),y){const{css:x,vars:V,varsWithDefaults:F}=Ic(y,e);g=vt(g,F),v[c]={css:x,vars:V}}function S(x,V){var B,b;let F=i;if(i==="class"&&(F=".%s"),i==="data"&&(F="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(F=`[${i}="%s"]`),x){if(F==="media")return n.defaultColorScheme===x?":root":{[`@media (prefers-color-scheme: ${((b=(B=s[x])==null?void 0:B.palette)==null?void 0:b.mode)||x})`]:{":root":V}};if(F)return n.defaultColorScheme===x?`:root, ${F.replace("%s",String(x))}`:F.replace("%s",String(x))}return":root"}return{vars:g,generateThemeVars:()=>{let x={...l};return Object.entries(v).forEach(([,{vars:V}])=>{x=vt(x,V)}),x},generateStyleSheets:()=>{var w,E;const x=[],V=n.defaultColorScheme||"light";function F(m,A){Object.keys(A).length&&x.push(typeof m=="string"?{[m]:{...A}}:m)}F(t(void 0,{...d}),d);const{[V]:B,...b}=v;if(B){const{css:m}=B,A=(E=(w=s[V])==null?void 0:w.palette)==null?void 0:E.mode,R=!r&&A?{colorScheme:A,...m}:{...m};F(t(V,{...R}),R)}return Object.entries(b).forEach(([m,{css:A}])=>{var Y,pe;const R=(pe=(Y=s[m])==null?void 0:Y.palette)==null?void 0:pe.mode,I=!r&&R?{colorScheme:R,...A}:{...A};F(t(m,{...I}),I)}),x}}}function u0(n){return function(t){return n==="media"?`@media (prefers-color-scheme: ${t})`:n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${t}"] &`:n==="class"?`.${t} &`:n==="data"?`[data-${t}] &`:`${n.replace("%s",t)} &`:"&"}}const ss={black:"#000",white:"#fff"},h0={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Er={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Tr={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Ci={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},Ir={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},br={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},Ar={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function wm(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ss.white,default:ss.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const d0=wm();function Em(){return{text:{primary:ss.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ss.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const xd=Em();function Vd(n,e,t,r){const i=r.light||r,s=r.dark||r*1.5;n[e]||(n.hasOwnProperty(t)?n[e]=n[t]:e==="light"?n.light=jl(n.main,i):e==="dark"&&(n.dark=$l(n.main,s)))}function f0(n="light"){return n==="dark"?{main:Ir[200],light:Ir[50],dark:Ir[400]}:{main:Ir[700],light:Ir[400],dark:Ir[800]}}function p0(n="light"){return n==="dark"?{main:Er[200],light:Er[50],dark:Er[400]}:{main:Er[500],light:Er[300],dark:Er[700]}}function m0(n="light"){return n==="dark"?{main:Tr[500],light:Tr[300],dark:Tr[700]}:{main:Tr[700],light:Tr[400],dark:Tr[800]}}function g0(n="light"){return n==="dark"?{main:br[400],light:br[300],dark:br[700]}:{main:br[700],light:br[500],dark:br[900]}}function y0(n="light"){return n==="dark"?{main:Ar[400],light:Ar[300],dark:Ar[700]}:{main:Ar[800],light:Ar[500],dark:Ar[900]}}function _0(n="light"){return n==="dark"?{main:Ci[400],light:Ci[300],dark:Ci[700]}:{main:"#ed6c02",light:Ci[500],dark:Ci[900]}}function ql(n){const{mode:e="light",contrastThreshold:t=3,tonalOffset:r=.2,...i}=n,s=n.primary||f0(e),o=n.secondary||p0(e),c=n.error||m0(e),u=n.info||g0(e),l=n.success||y0(e),d=n.warning||_0(e);function f(T){return ZT(T,xd.text.primary)>=t?xd.text.primary:d0.text.primary}const g=({color:T,name:S,mainShade:C=500,lightShade:N=300,darkShade:x=700})=>{if(T={...T},!T.main&&T[C]&&(T.main=T[C]),!T.hasOwnProperty("main"))throw new Error(ir(11,S?` (${S})`:"",C));if(typeof T.main!="string")throw new Error(ir(12,S?` (${S})`:"",JSON.stringify(T.main)));return Vd(T,"light",N,r),Vd(T,"dark",x,r),T.contrastText||(T.contrastText=f(T.main)),T};let v;return e==="light"?v=wm():e==="dark"&&(v=Em()),vt({common:{...ss},mode:e,primary:g({color:s,name:"primary"}),secondary:g({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:g({color:c,name:"error"}),warning:g({color:d,name:"warning"}),info:g({color:u,name:"info"}),success:g({color:l,name:"success"}),grey:h0,contrastThreshold:t,getContrastText:f,augmentColor:g,tonalOffset:r,...v},i)}function v0(n){const e={};return Object.entries(n).forEach(r=>{const[i,s]=r;typeof s=="object"&&(e[i]=`${s.fontStyle?`${s.fontStyle} `:""}${s.fontVariant?`${s.fontVariant} `:""}${s.fontWeight?`${s.fontWeight} `:""}${s.fontStretch?`${s.fontStretch} `:""}${s.fontSize||""}${s.lineHeight?`/${s.lineHeight} `:""}${s.fontFamily||""}`)}),e}function w0(n,e){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...e}}function E0(n){return Math.round(n*1e5)/1e5}const Ld={textTransform:"uppercase"},Md='"Roboto", "Helvetica", "Arial", sans-serif';function T0(n,e){const{fontFamily:t=Md,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:c=700,htmlFontSize:u=16,allVariants:l,pxToRem:d,...f}=typeof e=="function"?e(n):e,g=r/14,v=d||(S=>`${S/u*g}rem`),y=(S,C,N,x,V)=>({fontFamily:t,fontWeight:S,fontSize:v(C),lineHeight:N,...t===Md?{letterSpacing:`${E0(x/C)}em`}:{},...V,...l}),T={h1:y(i,96,1.167,-1.5),h2:y(i,60,1.2,-.5),h3:y(s,48,1.167,0),h4:y(s,34,1.235,.25),h5:y(s,24,1.334,0),h6:y(o,20,1.6,.15),subtitle1:y(s,16,1.75,.15),subtitle2:y(o,14,1.57,.1),body1:y(s,16,1.5,.15),body2:y(s,14,1.43,.15),button:y(o,14,1.75,.4,Ld),caption:y(s,12,1.66,.4),overline:y(s,12,2.66,1,Ld),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return vt({htmlFontSize:u,pxToRem:v,fontFamily:t,fontSize:r,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:c,...T},f,{clone:!1})}const I0=.2,b0=.14,A0=.12;function _e(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${I0})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${b0})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${A0})`].join(",")}const S0=["none",_e(0,2,1,-1,0,1,1,0,0,1,3,0),_e(0,3,1,-2,0,2,2,0,0,1,5,0),_e(0,3,3,-2,0,3,4,0,0,1,8,0),_e(0,2,4,-1,0,4,5,0,0,1,10,0),_e(0,3,5,-1,0,5,8,0,0,1,14,0),_e(0,3,5,-1,0,6,10,0,0,1,18,0),_e(0,4,5,-2,0,7,10,1,0,2,16,1),_e(0,5,5,-3,0,8,10,1,0,3,14,2),_e(0,5,6,-3,0,9,12,1,0,3,16,2),_e(0,6,6,-3,0,10,14,1,0,4,18,3),_e(0,6,7,-4,0,11,15,1,0,4,20,3),_e(0,7,8,-4,0,12,17,2,0,5,22,4),_e(0,7,8,-4,0,13,19,2,0,5,24,4),_e(0,7,9,-4,0,14,21,2,0,5,26,4),_e(0,8,9,-5,0,15,22,2,0,6,28,5),_e(0,8,10,-5,0,16,24,2,0,6,30,5),_e(0,8,11,-5,0,17,26,2,0,6,32,5),_e(0,9,11,-5,0,18,28,2,0,7,34,6),_e(0,9,12,-6,0,19,29,2,0,7,36,6),_e(0,10,13,-6,0,20,31,3,0,8,38,7),_e(0,10,13,-6,0,21,33,3,0,8,40,7),_e(0,10,14,-6,0,22,35,3,0,8,42,7),_e(0,11,14,-7,0,23,36,3,0,9,44,8),_e(0,11,15,-7,0,24,38,3,0,9,46,8)],R0={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},C0={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Fd(n){return`${Math.round(n)}ms`}function P0(n){if(!n)return 0;const e=n/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function k0(n){const e={...R0,...n.easing},t={...C0,...n.duration};return{getAutoHeightDuration:P0,create:(i=["all"],s={})=>{const{duration:o=t.standard,easing:c=e.easeInOut,delay:u=0,...l}=s;return(Array.isArray(i)?i:[i]).map(d=>`${d} ${typeof o=="string"?o:Fd(o)} ${c} ${typeof u=="string"?u:Fd(u)}`).join(",")},...n,easing:e,duration:t}}const O0={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function N0(n){return nn(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function Tm(n={}){const e={...n};function t(r){const i=Object.entries(r);for(let s=0;s<i.length;s++){const[o,c]=i[s];!N0(c)||o.startsWith("unstable_")?delete r[o]:nn(c)&&(r[o]={...c},t(r[o]))}}return t(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function el(n={},...e){const{breakpoints:t,mixins:r={},spacing:i,palette:s={},transitions:o={},typography:c={},shape:u,...l}=n;if(n.vars)throw new Error(ir(20));const d=ql(s),f=gm(n);let g=vt(f,{mixins:w0(f.breakpoints,r),palette:d,shadows:S0.slice(),typography:T0(d,c),transitions:k0(o),zIndex:{...O0}});return g=vt(g,l),g=e.reduce((v,y)=>vt(v,y),g),g.unstable_sxConfig={...pa,...l==null?void 0:l.unstable_sxConfig},g.unstable_sx=function(y){return Br({sx:y,theme:this})},g.toRuntimeSource=Tm,g}function D0(n){let e;return n<1?e=5.11916*n**2:e=4.5*Math.log(n+1)+2,Math.round(e*10)/1e3}const x0=[...Array(25)].map((n,e)=>{if(e===0)return"none";const t=D0(e);return`linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`});function Im(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function bm(n){return n==="dark"?x0:[]}function V0(n){const{palette:e={mode:"light"},opacity:t,overlays:r,...i}=n,s=ql(e);return{palette:s,opacity:{...Im(s.mode),...t},overlays:r||bm(s.mode),...i}}function L0(n){var e;return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!((e=n[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const M0=n=>[...[...Array(25)].map((e,t)=>`--${n?`${n}-`:""}overlays-${t}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],F0=n=>(e,t)=>{const r=n.rootSelector||":root",i=n.colorSchemeSelector;let s=i;if(i==="class"&&(s=".%s"),i==="data"&&(s="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(s=`[${i}="%s"]`),n.defaultColorScheme===e){if(e==="dark"){const o={};return M0(n.cssVarPrefix).forEach(c=>{o[c]=t[c],delete t[c]}),s==="media"?{[r]:t,"@media (prefers-color-scheme: dark)":{[r]:o}}:s?{[s.replace("%s",e)]:o,[`${r}, ${s.replace("%s",e)}`]:t}:{[r]:{...t,...o}}}if(s&&s!=="media")return`${r}, ${s.replace("%s",String(e))}`}else if(e){if(s==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:t}};if(s)return s.replace("%s",String(e))}return r};function U0(n,e){e.forEach(t=>{n[t]||(n[t]={})})}function D(n,e,t){!n[e]&&t&&(n[e]=t)}function Mi(n){return typeof n!="string"||!n.startsWith("hsl")?n:vm(n)}function tn(n,e){`${e}Channel`in n||(n[`${e}Channel`]=Li(Mi(n[e])))}function B0(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const Ft=n=>{try{return n()}catch{}},$0=(n="mui")=>o0(n);function bc(n,e,t,r){if(!e)return;e=e===!0?{}:e;const i=r==="dark"?"dark":"light";if(!t){n[r]=V0({...e,palette:{mode:i,...e==null?void 0:e.palette}});return}const{palette:s,...o}=el({...t,palette:{mode:i,...e==null?void 0:e.palette}});return n[r]={...e,palette:s,opacity:{...Im(i),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||bm(i)},o}function j0(n={},...e){const{colorSchemes:t={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:s="mui",shouldSkipGeneratingVar:o=L0,colorSchemeSelector:c=t.light&&t.dark?"media":void 0,rootSelector:u=":root",...l}=n,d=Object.keys(t)[0],f=r||(t.light&&d!=="light"?"light":d),g=$0(s),{[f]:v,light:y,dark:T,...S}=t,C={...S};let N=v;if((f==="dark"&&!("dark"in t)||f==="light"&&!("light"in t))&&(N=!0),!N)throw new Error(ir(21,f));const x=bc(C,N,l,f);y&&!C.light&&bc(C,y,void 0,"light"),T&&!C.dark&&bc(C,T,void 0,"dark");let V={defaultColorScheme:f,...x,cssVarPrefix:s,colorSchemeSelector:c,rootSelector:u,getCssVar:g,colorSchemes:C,font:{...v0(x.typography),...x.font},spacing:B0(l.spacing)};Object.keys(V.colorSchemes).forEach(E=>{const m=V.colorSchemes[E].palette,A=R=>{const I=R.split("-"),Y=I[1],pe=I[2];return g(R,m[Y][pe])};if(m.mode==="light"&&(D(m.common,"background","#fff"),D(m.common,"onBackground","#000")),m.mode==="dark"&&(D(m.common,"background","#000"),D(m.common,"onBackground","#fff")),U0(m,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),m.mode==="light"){D(m.Alert,"errorColor",ue(m.error.light,.6)),D(m.Alert,"infoColor",ue(m.info.light,.6)),D(m.Alert,"successColor",ue(m.success.light,.6)),D(m.Alert,"warningColor",ue(m.warning.light,.6)),D(m.Alert,"errorFilledBg",A("palette-error-main")),D(m.Alert,"infoFilledBg",A("palette-info-main")),D(m.Alert,"successFilledBg",A("palette-success-main")),D(m.Alert,"warningFilledBg",A("palette-warning-main")),D(m.Alert,"errorFilledColor",Ft(()=>m.getContrastText(m.error.main))),D(m.Alert,"infoFilledColor",Ft(()=>m.getContrastText(m.info.main))),D(m.Alert,"successFilledColor",Ft(()=>m.getContrastText(m.success.main))),D(m.Alert,"warningFilledColor",Ft(()=>m.getContrastText(m.warning.main))),D(m.Alert,"errorStandardBg",he(m.error.light,.9)),D(m.Alert,"infoStandardBg",he(m.info.light,.9)),D(m.Alert,"successStandardBg",he(m.success.light,.9)),D(m.Alert,"warningStandardBg",he(m.warning.light,.9)),D(m.Alert,"errorIconColor",A("palette-error-main")),D(m.Alert,"infoIconColor",A("palette-info-main")),D(m.Alert,"successIconColor",A("palette-success-main")),D(m.Alert,"warningIconColor",A("palette-warning-main")),D(m.AppBar,"defaultBg",A("palette-grey-100")),D(m.Avatar,"defaultBg",A("palette-grey-400")),D(m.Button,"inheritContainedBg",A("palette-grey-300")),D(m.Button,"inheritContainedHoverBg",A("palette-grey-A100")),D(m.Chip,"defaultBorder",A("palette-grey-400")),D(m.Chip,"defaultAvatarColor",A("palette-grey-700")),D(m.Chip,"defaultIconColor",A("palette-grey-700")),D(m.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),D(m.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),D(m.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),D(m.LinearProgress,"primaryBg",he(m.primary.main,.62)),D(m.LinearProgress,"secondaryBg",he(m.secondary.main,.62)),D(m.LinearProgress,"errorBg",he(m.error.main,.62)),D(m.LinearProgress,"infoBg",he(m.info.main,.62)),D(m.LinearProgress,"successBg",he(m.success.main,.62)),D(m.LinearProgress,"warningBg",he(m.warning.main,.62)),D(m.Skeleton,"bg",`rgba(${A("palette-text-primaryChannel")} / 0.11)`),D(m.Slider,"primaryTrack",he(m.primary.main,.62)),D(m.Slider,"secondaryTrack",he(m.secondary.main,.62)),D(m.Slider,"errorTrack",he(m.error.main,.62)),D(m.Slider,"infoTrack",he(m.info.main,.62)),D(m.Slider,"successTrack",he(m.success.main,.62)),D(m.Slider,"warningTrack",he(m.warning.main,.62));const R=to(m.background.default,.8);D(m.SnackbarContent,"bg",R),D(m.SnackbarContent,"color",Ft(()=>m.getContrastText(R))),D(m.SpeedDialAction,"fabHoverBg",to(m.background.paper,.15)),D(m.StepConnector,"border",A("palette-grey-400")),D(m.StepContent,"border",A("palette-grey-400")),D(m.Switch,"defaultColor",A("palette-common-white")),D(m.Switch,"defaultDisabledColor",A("palette-grey-100")),D(m.Switch,"primaryDisabledColor",he(m.primary.main,.62)),D(m.Switch,"secondaryDisabledColor",he(m.secondary.main,.62)),D(m.Switch,"errorDisabledColor",he(m.error.main,.62)),D(m.Switch,"infoDisabledColor",he(m.info.main,.62)),D(m.Switch,"successDisabledColor",he(m.success.main,.62)),D(m.Switch,"warningDisabledColor",he(m.warning.main,.62)),D(m.TableCell,"border",he(eo(m.divider,1),.88)),D(m.Tooltip,"bg",eo(m.grey[700],.92))}if(m.mode==="dark"){D(m.Alert,"errorColor",he(m.error.light,.6)),D(m.Alert,"infoColor",he(m.info.light,.6)),D(m.Alert,"successColor",he(m.success.light,.6)),D(m.Alert,"warningColor",he(m.warning.light,.6)),D(m.Alert,"errorFilledBg",A("palette-error-dark")),D(m.Alert,"infoFilledBg",A("palette-info-dark")),D(m.Alert,"successFilledBg",A("palette-success-dark")),D(m.Alert,"warningFilledBg",A("palette-warning-dark")),D(m.Alert,"errorFilledColor",Ft(()=>m.getContrastText(m.error.dark))),D(m.Alert,"infoFilledColor",Ft(()=>m.getContrastText(m.info.dark))),D(m.Alert,"successFilledColor",Ft(()=>m.getContrastText(m.success.dark))),D(m.Alert,"warningFilledColor",Ft(()=>m.getContrastText(m.warning.dark))),D(m.Alert,"errorStandardBg",ue(m.error.light,.9)),D(m.Alert,"infoStandardBg",ue(m.info.light,.9)),D(m.Alert,"successStandardBg",ue(m.success.light,.9)),D(m.Alert,"warningStandardBg",ue(m.warning.light,.9)),D(m.Alert,"errorIconColor",A("palette-error-main")),D(m.Alert,"infoIconColor",A("palette-info-main")),D(m.Alert,"successIconColor",A("palette-success-main")),D(m.Alert,"warningIconColor",A("palette-warning-main")),D(m.AppBar,"defaultBg",A("palette-grey-900")),D(m.AppBar,"darkBg",A("palette-background-paper")),D(m.AppBar,"darkColor",A("palette-text-primary")),D(m.Avatar,"defaultBg",A("palette-grey-600")),D(m.Button,"inheritContainedBg",A("palette-grey-800")),D(m.Button,"inheritContainedHoverBg",A("palette-grey-700")),D(m.Chip,"defaultBorder",A("palette-grey-700")),D(m.Chip,"defaultAvatarColor",A("palette-grey-300")),D(m.Chip,"defaultIconColor",A("palette-grey-300")),D(m.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),D(m.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),D(m.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),D(m.LinearProgress,"primaryBg",ue(m.primary.main,.5)),D(m.LinearProgress,"secondaryBg",ue(m.secondary.main,.5)),D(m.LinearProgress,"errorBg",ue(m.error.main,.5)),D(m.LinearProgress,"infoBg",ue(m.info.main,.5)),D(m.LinearProgress,"successBg",ue(m.success.main,.5)),D(m.LinearProgress,"warningBg",ue(m.warning.main,.5)),D(m.Skeleton,"bg",`rgba(${A("palette-text-primaryChannel")} / 0.13)`),D(m.Slider,"primaryTrack",ue(m.primary.main,.5)),D(m.Slider,"secondaryTrack",ue(m.secondary.main,.5)),D(m.Slider,"errorTrack",ue(m.error.main,.5)),D(m.Slider,"infoTrack",ue(m.info.main,.5)),D(m.Slider,"successTrack",ue(m.success.main,.5)),D(m.Slider,"warningTrack",ue(m.warning.main,.5));const R=to(m.background.default,.98);D(m.SnackbarContent,"bg",R),D(m.SnackbarContent,"color",Ft(()=>m.getContrastText(R))),D(m.SpeedDialAction,"fabHoverBg",to(m.background.paper,.15)),D(m.StepConnector,"border",A("palette-grey-600")),D(m.StepContent,"border",A("palette-grey-600")),D(m.Switch,"defaultColor",A("palette-grey-300")),D(m.Switch,"defaultDisabledColor",A("palette-grey-600")),D(m.Switch,"primaryDisabledColor",ue(m.primary.main,.55)),D(m.Switch,"secondaryDisabledColor",ue(m.secondary.main,.55)),D(m.Switch,"errorDisabledColor",ue(m.error.main,.55)),D(m.Switch,"infoDisabledColor",ue(m.info.main,.55)),D(m.Switch,"successDisabledColor",ue(m.success.main,.55)),D(m.Switch,"warningDisabledColor",ue(m.warning.main,.55)),D(m.TableCell,"border",ue(eo(m.divider,1),.68)),D(m.Tooltip,"bg",eo(m.grey[700],.92))}tn(m.background,"default"),tn(m.background,"paper"),tn(m.common,"background"),tn(m.common,"onBackground"),tn(m,"divider"),Object.keys(m).forEach(R=>{const I=m[R];R!=="tonalOffset"&&I&&typeof I=="object"&&(I.main&&D(m[R],"mainChannel",Li(Mi(I.main))),I.light&&D(m[R],"lightChannel",Li(Mi(I.light))),I.dark&&D(m[R],"darkChannel",Li(Mi(I.dark))),I.contrastText&&D(m[R],"contrastTextChannel",Li(Mi(I.contrastText))),R==="text"&&(tn(m[R],"primary"),tn(m[R],"secondary")),R==="action"&&(I.active&&tn(m[R],"active"),I.selected&&tn(m[R],"selected")))})}),V=e.reduce((E,m)=>vt(E,m),V);const F={prefix:s,disableCssColorScheme:i,shouldSkipGeneratingVar:o,getSelector:F0(V)},{vars:B,generateThemeVars:b,generateStyleSheets:w}=l0(V,F);return V.vars=B,Object.entries(V.colorSchemes[V.defaultColorScheme]).forEach(([E,m])=>{V[E]=m}),V.generateThemeVars=b,V.generateStyleSheets=w,V.generateSpacing=function(){return mm(l.spacing,Vl(this))},V.getColorSchemeSelector=u0(c),V.spacing=V.generateSpacing(),V.shouldSkipGeneratingVar=o,V.unstable_sxConfig={...pa,...l==null?void 0:l.unstable_sxConfig},V.unstable_sx=function(m){return Br({sx:m,theme:this})},V.toRuntimeSource=Tm,V}function Ud(n,e,t){n.colorSchemes&&t&&(n.colorSchemes[e]={...t!==!0&&t,palette:ql({...t===!0?{}:t.palette,mode:e})})}function q0(n={},...e){const{palette:t,cssVariables:r=!1,colorSchemes:i=t?void 0:{light:!0},defaultColorScheme:s=t==null?void 0:t.mode,...o}=n,c=s||"light",u=i==null?void 0:i[c],l={...i,...t?{[c]:{...typeof u!="boolean"&&u,palette:t}}:void 0};if(r===!1){if(!("colorSchemes"in n))return el(n,...e);let d=t;"palette"in n||l[c]&&(l[c]!==!0?d=l[c].palette:c==="dark"&&(d={mode:"dark"}));const f=el({...n,palette:d},...e);return f.defaultColorScheme=c,f.colorSchemes=l,f.palette.mode==="light"&&(f.colorSchemes.light={...l.light!==!0&&l.light,palette:f.palette},Ud(f,"dark",l.dark)),f.palette.mode==="dark"&&(f.colorSchemes.dark={...l.dark!==!0&&l.dark,palette:f.palette},Ud(f,"light",l.light)),f}return!t&&!("light"in l)&&c==="light"&&(l.light=!0),j0({...o,colorSchemes:l,defaultColorScheme:c,...typeof r!="boolean"&&r},...e)}const z0=q0(),H0="$$material";function Am(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const W0=n=>Am(n)&&n!=="classes",Is=WT({themeId:H0,defaultTheme:z0,rootShouldForwardProp:W0}),zl=s0;function Sm(n){return i0(n)}function G0(n){return Nl("MuiSvgIcon",n)}nm("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const K0=n=>{const{color:e,fontSize:t,classes:r}=n,i={root:["root",e!=="inherit"&&`color${kn(e)}`,`fontSize${kn(t)}`]};return Zp(i,G0,r)},Q0=Is("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.color!=="inherit"&&e[`color${kn(t.color)}`],e[`fontSize${kn(t.fontSize)}`]]}})(zl(({theme:n})=>{var e,t,r,i,s,o,c,u,l,d,f,g,v,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(i=(e=n.transitions)==null?void 0:e.create)==null?void 0:i.call(e,"fill",{duration:(r=(t=(n.vars??n).transitions)==null?void 0:t.duration)==null?void 0:r.shorter}),variants:[{props:T=>!T.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((o=(s=n.typography)==null?void 0:s.pxToRem)==null?void 0:o.call(s,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((u=(c=n.typography)==null?void 0:c.pxToRem)==null?void 0:u.call(c,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((d=(l=n.typography)==null?void 0:l.pxToRem)==null?void 0:d.call(l,35))||"2.1875rem"}},...Object.entries((n.vars??n).palette).filter(([,T])=>T&&T.main).map(([T])=>{var S,C;return{props:{color:T},style:{color:(C=(S=(n.vars??n).palette)==null?void 0:S[T])==null?void 0:C.main}}}),{props:{color:"action"},style:{color:(g=(f=(n.vars??n).palette)==null?void 0:f.action)==null?void 0:g.active}},{props:{color:"disabled"},style:{color:(y=(v=(n.vars??n).palette)==null?void 0:v.action)==null?void 0:y.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),tl=de.forwardRef(function(e,t){const r=Sm({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:c="svg",fontSize:u="medium",htmlColor:l,inheritViewBox:d=!1,titleAccess:f,viewBox:g="0 0 24 24",...v}=r,y=de.isValidElement(i)&&i.type==="svg",T={...r,color:o,component:c,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:g,hasSvgAsChild:y},S={};d||(S.viewBox=g);const C=K0(T);return Pe.jsxs(Q0,{as:c,className:zi(C.root,s),focusable:"false",color:l,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:t,...S,...v,...y&&i.props,ownerState:T,children:[y?i.props.children:i,f?Pe.jsx("title",{children:f}):null]})});tl.muiName="SvgIcon";function Rm(n,e){function t(r,i){return Pe.jsx(tl,{"data-testid":`${e}Icon`,ref:i,...r,children:n})}return t.muiName=tl.muiName,de.memo(de.forwardRef(t))}const J0=Rm(Pe.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Y0=Rm(Pe.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function X0(n){return Nl("MuiRating",n)}const Pi=nm("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function Z0(n){const e=n.toString().split(".")[1];return e?e.length:0}function Ac(n,e){if(n==null)return n;const t=Math.round(n/e)*e;return Number(t.toFixed(Z0(e)))}const eI=n=>{const{classes:e,size:t,readOnly:r,disabled:i,emptyValueFocused:s,focusVisible:o}=n,c={root:["root",`size${kn(t)}`,i&&"disabled",o&&"focusVisible",r&&"readOnly"],label:["label","pristine"],labelEmptyValue:[s&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Zp(c,X0,e)},tI=Is("span",{name:"MuiRating",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[{[`& .${Pi.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${kn(t.size)}`],t.readOnly&&e.readOnly]}})(zl(({theme:n})=>({display:"inline-flex",position:"relative",fontSize:n.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${Pi.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Pi.focusVisible} .${Pi.iconActive}`]:{outline:"1px solid #999"},[`& .${Pi.visuallyHidden}`]:jw,variants:[{props:{size:"small"},style:{fontSize:n.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:n.typography.pxToRem(30)}},{props:({ownerState:e})=>e.readOnly,style:{pointerEvents:"none"}}]}))),Cm=Is("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:n},e)=>[e.label,n.emptyValueFocused&&e.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:n})=>n.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),nI=Is("span",{name:"MuiRating",slot:"Icon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(zl(({theme:n})=>({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:e})=>e.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:e})=>e.iconEmpty,style:{color:(n.vars||n).palette.action.disabled}}]}))),rI=Is("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:n=>Am(n)&&n!=="iconActive",overridesResolver:(n,e)=>{const{iconActive:t}=n;return[e.decimal,t&&e.iconActive]}})({position:"relative",variants:[{props:({iconActive:n})=>n,style:{transform:"scale(1.2)"}}]});function iI(n){const{value:e,...t}=n;return Pe.jsx("span",{...t})}function Bd(n){const{classes:e,disabled:t,emptyIcon:r,focus:i,getLabelText:s,highlightSelectedOnly:o,hover:c,icon:u,IconContainerComponent:l,isActive:d,itemValue:f,labelProps:g,name:v,onBlur:y,onChange:T,onClick:S,onFocus:C,readOnly:N,ownerState:x,ratingValue:V,ratingValueRounded:F}=n,B=o?f===V:f<=V,b=f<=c,w=f<=i,E=f===F,m=`${v}-${tm()}`,A=Pe.jsx(nI,{as:l,value:f,className:zi(e.icon,B?e.iconFilled:e.iconEmpty,b&&e.iconHover,w&&e.iconFocus,d&&e.iconActive),ownerState:{...x,iconEmpty:!B,iconFilled:B,iconHover:b,iconFocus:w,iconActive:d},children:r&&!B?r:u});return N?Pe.jsx("span",{...g,children:A}):Pe.jsxs(de.Fragment,{children:[Pe.jsxs(Cm,{ownerState:{...x,emptyValueFocused:void 0},htmlFor:m,...g,children:[A,Pe.jsx("span",{className:e.visuallyHidden,children:s(f)})]}),Pe.jsx("input",{className:e.visuallyHidden,onFocus:C,onBlur:y,onChange:T,onClick:S,disabled:t,value:f,id:m,type:"radio",name:v,checked:E})]})}const sI=Pe.jsx(J0,{fontSize:"inherit"}),oI=Pe.jsx(Y0,{fontSize:"inherit"});function aI(n){return`${n||"0"} Star${n!==1?"s":""}`}const GO=de.forwardRef(function(e,t){const r=Sm({name:"MuiRating",props:e}),{component:i="span",className:s,defaultValue:o=null,disabled:c=!1,emptyIcon:u=oI,emptyLabelText:l="Empty",getLabelText:d=aI,highlightSelectedOnly:f=!1,icon:g=sI,IconContainerComponent:v=iI,max:y=5,name:T,onChange:S,onChangeActive:C,onMouseLeave:N,onMouseMove:x,precision:V=1,readOnly:F=!1,size:B="medium",value:b,...w}=r,E=tm(T),[m,A]=Kw({controlled:b,default:o,name:"Rating"}),R=Ac(m,V),I=zw(),[{hover:Y,focus:pe},j]=de.useState({hover:-1,focus:-1});let W=R;Y!==-1&&(W=Y),pe!==-1&&(W=pe);const[G,ce]=de.useState(!1),ye=de.useRef(),yn=Qw(ye,t),rt=fe=>{x&&x(fe);const Oe=ye.current,{right:it,left:_n,width:Xt}=Oe.getBoundingClientRect();let vn;I?vn=(it-fe.clientX)/Xt:vn=(fe.clientX-_n)/Xt;let Ct=Ac(y*vn+V/2,V);Ct=Xp(Ct,V,y),j(Lt=>Lt.hover===Ct&&Lt.focus===Ct?Lt:{hover:Ct,focus:Ct}),ce(!1),C&&Y!==Ct&&C(fe,Ct)},Te=fe=>{N&&N(fe);const Oe=-1;j({hover:Oe,focus:Oe}),C&&Y!==Oe&&C(fe,Oe)},Et=fe=>{let Oe=fe.target.value===""?null:parseFloat(fe.target.value);Y!==-1&&(Oe=Y),A(Oe),S&&S(fe,Oe)},Tt=fe=>{fe.clientX===0&&fe.clientY===0||(j({hover:-1,focus:-1}),A(null),S&&parseFloat(fe.target.value)===R&&S(fe,null))},Wa=fe=>{gd(fe.target)&&ce(!0);const Oe=parseFloat(fe.target.value);j(it=>({hover:it.hover,focus:Oe}))},gr=fe=>{if(Y!==-1)return;gd(fe.target)||ce(!1);const Oe=-1;j(it=>({hover:it.hover,focus:Oe}))},[Ga,Ls]=de.useState(!1),Vt={...r,component:i,defaultValue:o,disabled:c,emptyIcon:u,emptyLabelText:l,emptyValueFocused:Ga,focusVisible:G,getLabelText:d,icon:g,IconContainerComponent:v,max:y,precision:V,readOnly:F,size:B},ft=eI(Vt);return Pe.jsxs(tI,{as:i,ref:yn,onMouseMove:rt,onMouseLeave:Te,className:zi(ft.root,s,F&&"MuiRating-readOnly"),ownerState:Vt,role:F?"img":null,"aria-label":F?d(W):null,...w,children:[Array.from(new Array(y)).map((fe,Oe)=>{const it=Oe+1,_n={classes:ft,disabled:c,emptyIcon:u,focus:pe,getLabelText:d,highlightSelectedOnly:f,hover:Y,icon:g,IconContainerComponent:v,name:E,onBlur:gr,onChange:Et,onClick:Tt,onFocus:Wa,ratingValue:W,ratingValueRounded:R,readOnly:F,ownerState:Vt},Xt=it===Math.ceil(W)&&(Y!==-1||pe!==-1);if(V<1){const vn=Array.from(new Array(1/V));return Pe.jsx(rI,{className:zi(ft.decimal,Xt&&ft.iconActive),ownerState:Vt,iconActive:Xt,children:vn.map((Ct,Lt)=>{const zn=Ac(it-1+(Lt+1)*V,V);return Pe.jsx(Bd,{..._n,isActive:!1,itemValue:zn,labelProps:{style:vn.length-1===Lt?{}:{width:zn===W?`${(Lt+1)*V*100}%`:"0%",overflow:"hidden",position:"absolute"}}},zn)})},it)}return Pe.jsx(Bd,{..._n,isActive:Xt,itemValue:it},it)}),!F&&!c&&Pe.jsxs(Cm,{className:zi(ft.label,ft.labelEmptyValue),ownerState:Vt,children:[Pe.jsx("input",{className:ft.visuallyHidden,value:"",id:`${E}-empty`,type:"radio",name:E,checked:R==null,onFocus:()=>Ls(!0),onBlur:()=>Ls(!1),onChange:Et}),Pe.jsx("span",{className:ft.visuallyHidden,children:l})]})]})});var _o={exports:{}};/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */var cI=_o.exports,$d;function lI(){return $d||($d=1,function(n){(function(e,t){n.exports?n.exports=t():e.numeral=t()})(cI,function(){var e,t,r="2.0.6",i={},s={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},c={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};function u(l,d){this._input=l,this._value=d}return e=function(l){var d,f,g,v;if(e.isNumeral(l))d=l.value();else if(l===0||typeof l>"u")d=0;else if(l===null||t.isNaN(l))d=null;else if(typeof l=="string")if(c.zeroFormat&&l===c.zeroFormat)d=0;else if(c.nullFormat&&l===c.nullFormat||!l.replace(/[^0-9]+/g,"").length)d=null;else{for(f in i)if(v=typeof i[f].regexps.unformat=="function"?i[f].regexps.unformat():i[f].regexps.unformat,v&&l.match(v)){g=i[f].unformat;break}g=g||e._.stringToNumber,d=g(l)}else d=Number(l)||null;return new u(l,d)},e.version=r,e.isNumeral=function(l){return l instanceof u},e._=t={numberToFormat:function(l,d,f){var g=s[e.options.currentLocale],v=!1,y=!1,T=0,S="",C=1e12,N=1e9,x=1e6,V=1e3,F="",B=!1,b,w,E,m,A,R,I;if(l=l||0,w=Math.abs(l),e._.includes(d,"(")?(v=!0,d=d.replace(/[\(|\)]/g,"")):(e._.includes(d,"+")||e._.includes(d,"-"))&&(A=e._.includes(d,"+")?d.indexOf("+"):l<0?d.indexOf("-"):-1,d=d.replace(/[\+|\-]/g,"")),e._.includes(d,"a")&&(b=d.match(/a(k|m|b|t)?/),b=b?b[1]:!1,e._.includes(d," a")&&(S=" "),d=d.replace(new RegExp(S+"a[kmbt]?"),""),w>=C&&!b||b==="t"?(S+=g.abbreviations.trillion,l=l/C):w<C&&w>=N&&!b||b==="b"?(S+=g.abbreviations.billion,l=l/N):w<N&&w>=x&&!b||b==="m"?(S+=g.abbreviations.million,l=l/x):(w<x&&w>=V&&!b||b==="k")&&(S+=g.abbreviations.thousand,l=l/V)),e._.includes(d,"[.]")&&(y=!0,d=d.replace("[.]",".")),E=l.toString().split(".")[0],m=d.split(".")[1],R=d.indexOf(","),T=(d.split(".")[0].split(",")[0].match(/0/g)||[]).length,m?(e._.includes(m,"[")?(m=m.replace("]",""),m=m.split("["),F=e._.toFixed(l,m[0].length+m[1].length,f,m[1].length)):F=e._.toFixed(l,m.length,f),E=F.split(".")[0],e._.includes(F,".")?F=g.delimiters.decimal+F.split(".")[1]:F="",y&&Number(F.slice(1))===0&&(F="")):E=e._.toFixed(l,0,f),S&&!b&&Number(E)>=1e3&&S!==g.abbreviations.trillion)switch(E=String(Number(E)/1e3),S){case g.abbreviations.thousand:S=g.abbreviations.million;break;case g.abbreviations.million:S=g.abbreviations.billion;break;case g.abbreviations.billion:S=g.abbreviations.trillion;break}if(e._.includes(E,"-")&&(E=E.slice(1),B=!0),E.length<T)for(var Y=T-E.length;Y>0;Y--)E="0"+E;return R>-1&&(E=E.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+g.delimiters.thousands)),d.indexOf(".")===0&&(E=""),I=E+F+(S||""),v?I=(v&&B?"(":"")+I+(v&&B?")":""):A>=0?I=A===0?(B?"-":"+")+I:I+(B?"-":"+"):B&&(I="-"+I),I},stringToNumber:function(l){var d=s[c.currentLocale],f=l,g={thousand:3,million:6,billion:9,trillion:12},v,y,T;if(c.zeroFormat&&l===c.zeroFormat)y=0;else if(c.nullFormat&&l===c.nullFormat||!l.replace(/[^0-9]+/g,"").length)y=null;else{y=1,d.delimiters.decimal!=="."&&(l=l.replace(/\./g,"").replace(d.delimiters.decimal,"."));for(v in g)if(T=new RegExp("[^a-zA-Z]"+d.abbreviations[v]+"(?:\\)|(\\"+d.currency.symbol+")?(?:\\))?)?$"),f.match(T)){y*=Math.pow(10,g[v]);break}y*=(l.split("-").length+Math.min(l.split("(").length-1,l.split(")").length-1))%2?1:-1,l=l.replace(/[^0-9\.]+/g,""),y*=Number(l)}return y},isNaN:function(l){return typeof l=="number"&&isNaN(l)},includes:function(l,d){return l.indexOf(d)!==-1},insert:function(l,d,f){return l.slice(0,f)+d+l.slice(f)},reduce:function(l,d){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof d!="function")throw new TypeError(d+" is not a function");var f=Object(l),g=f.length>>>0,v=0,y;if(arguments.length===3)y=arguments[2];else{for(;v<g&&!(v in f);)v++;if(v>=g)throw new TypeError("Reduce of empty array with no initial value");y=f[v++]}for(;v<g;v++)v in f&&(y=d(y,f[v],v,f));return y},multiplier:function(l){var d=l.toString().split(".");return d.length<2?1:Math.pow(10,d[1].length)},correctionFactor:function(){var l=Array.prototype.slice.call(arguments);return l.reduce(function(d,f){var g=t.multiplier(f);return d>g?d:g},1)},toFixed:function(l,d,f,g){var v=l.toString().split("."),y=d-(g||0),T,S,C,N;return v.length===2?T=Math.min(Math.max(v[1].length,y),d):T=y,C=Math.pow(10,T),N=(f(l+"e+"+T)/C).toFixed(T),g>d-T&&(S=new RegExp("\\.?0{1,"+(g-(d-T))+"}$"),N=N.replace(S,"")),N}},e.options=c,e.formats=i,e.locales=s,e.locale=function(l){return l&&(c.currentLocale=l.toLowerCase()),c.currentLocale},e.localeData=function(l){if(!l)return s[c.currentLocale];if(l=l.toLowerCase(),!s[l])throw new Error("Unknown locale : "+l);return s[l]},e.reset=function(){for(var l in o)c[l]=o[l]},e.zeroFormat=function(l){c.zeroFormat=typeof l=="string"?l:null},e.nullFormat=function(l){c.nullFormat=typeof l=="string"?l:null},e.defaultFormat=function(l){c.defaultFormat=typeof l=="string"?l:"0.0"},e.register=function(l,d,f){if(d=d.toLowerCase(),this[l+"s"][d])throw new TypeError(d+" "+l+" already registered.");return this[l+"s"][d]=f,f},e.validate=function(l,d){var f,g,v,y,T,S,C,N;if(typeof l!="string"&&(l+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",l)),l=l.trim(),l.match(/^\d+$/))return!0;if(l==="")return!1;try{C=e.localeData(d)}catch{C=e.localeData(e.locale())}return v=C.currency.symbol,T=C.abbreviations,f=C.delimiters.decimal,C.delimiters.thousands==="."?g="\\.":g=C.delimiters.thousands,N=l.match(/^[^\d]+/),N!==null&&(l=l.substr(1),N[0]!==v)||(N=l.match(/[^\d]+$/),N!==null&&(l=l.slice(0,-1),N[0]!==T.thousand&&N[0]!==T.million&&N[0]!==T.billion&&N[0]!==T.trillion))?!1:(S=new RegExp(g+"{2}"),l.match(/[^\d.,]/g)?!1:(y=l.split(f),y.length>2?!1:y.length<2?!!y[0].match(/^\d+.*\d$/)&&!y[0].match(S):y[0].length===1?!!y[0].match(/^\d+$/)&&!y[0].match(S)&&!!y[1].match(/^\d+$/):!!y[0].match(/^\d+.*\d$/)&&!y[0].match(S)&&!!y[1].match(/^\d+$/)))},e.fn=u.prototype={clone:function(){return e(this)},format:function(l,d){var f=this._value,g=l||c.defaultFormat,v,y,T;if(d=d||Math.round,f===0&&c.zeroFormat!==null)y=c.zeroFormat;else if(f===null&&c.nullFormat!==null)y=c.nullFormat;else{for(v in i)if(g.match(i[v].regexps.format)){T=i[v].format;break}T=T||e._.numberToFormat,y=T(f,g,d)}return y},value:function(){return this._value},input:function(){return this._input},set:function(l){return this._value=Number(l),this},add:function(l){var d=t.correctionFactor.call(null,this._value,l);function f(g,v,y,T){return g+Math.round(d*v)}return this._value=t.reduce([this._value,l],f,0)/d,this},subtract:function(l){var d=t.correctionFactor.call(null,this._value,l);function f(g,v,y,T){return g-Math.round(d*v)}return this._value=t.reduce([l],f,Math.round(this._value*d))/d,this},multiply:function(l){function d(f,g,v,y){var T=t.correctionFactor(f,g);return Math.round(f*T)*Math.round(g*T)/Math.round(T*T)}return this._value=t.reduce([this._value,l],d,1),this},divide:function(l){function d(f,g,v,y){var T=t.correctionFactor(f,g);return Math.round(f*T)/Math.round(g*T)}return this._value=t.reduce([this._value,l],d),this},difference:function(l){return Math.abs(e(this._value).subtract(l).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(l){var d=l%10;return~~(l%100/10)===1?"th":d===1?"st":d===2?"nd":d===3?"rd":"th"},currency:{symbol:"$"}}),function(){e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(l,d,f){var g=e._.includes(d," BPS")?" ":"",v;return l=l*1e4,d=d.replace(/\s?BPS/,""),v=e._.numberToFormat(l,d,f),e._.includes(v,")")?(v=v.split(""),v.splice(-1,0,g+"BPS"),v=v.join("")):v=v+g+"BPS",v},unformat:function(l){return+(e._.stringToNumber(l)*1e-4).toFixed(15)}})}(),function(){var l={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},d={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},f=l.suffixes.concat(d.suffixes.filter(function(v){return l.suffixes.indexOf(v)<0})),g=f.join("|");g="("+g.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(g)},format:function(v,y,T){var S,C=e._.includes(y,"ib")?d:l,N=e._.includes(y," b")||e._.includes(y," ib")?" ":"",x,V,F;for(y=y.replace(/\s?i?b/,""),x=0;x<=C.suffixes.length;x++)if(V=Math.pow(C.base,x),F=Math.pow(C.base,x+1),v===null||v===0||v>=V&&v<F){N+=C.suffixes[x],V>0&&(v=v/V);break}return S=e._.numberToFormat(v,y,T),S+N},unformat:function(v){var y=e._.stringToNumber(v),T,S;if(y){for(T=l.suffixes.length-1;T>=0;T--){if(e._.includes(v,l.suffixes[T])){S=Math.pow(l.base,T);break}if(e._.includes(v,d.suffixes[T])){S=Math.pow(d.base,T);break}}y*=S||1}return y}})}(),function(){e.register("format","currency",{regexps:{format:/(\$)/},format:function(l,d,f){var g=e.locales[e.options.currentLocale],v={before:d.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:d.match(/([\+|\-|\)|\s|\$]*)$/)[0]},y,T,S;for(d=d.replace(/\s?\$\s?/,""),y=e._.numberToFormat(l,d,f),l>=0?(v.before=v.before.replace(/[\-\(]/,""),v.after=v.after.replace(/[\-\)]/,"")):l<0&&!e._.includes(v.before,"-")&&!e._.includes(v.before,"(")&&(v.before="-"+v.before),S=0;S<v.before.length;S++)switch(T=v.before[S],T){case"$":y=e._.insert(y,g.currency.symbol,S);break;case" ":y=e._.insert(y," ",S+g.currency.symbol.length-1);break}for(S=v.after.length-1;S>=0;S--)switch(T=v.after[S],T){case"$":y=S===v.after.length-1?y+g.currency.symbol:e._.insert(y,g.currency.symbol,-(v.after.length-(1+S)));break;case" ":y=S===v.after.length-1?y+" ":e._.insert(y," ",-(v.after.length-(1+S)+g.currency.symbol.length-1));break}return y}})}(),function(){e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(l,d,f){var g,v=typeof l=="number"&&!e._.isNaN(l)?l.toExponential():"0e+0",y=v.split("e");return d=d.replace(/e[\+|\-]{1}0/,""),g=e._.numberToFormat(Number(y[0]),d,f),g+"e"+y[1]},unformat:function(l){var d=e._.includes(l,"e+")?l.split("e+"):l.split("e-"),f=Number(d[0]),g=Number(d[1]);g=e._.includes(l,"e-")?g*=-1:g;function v(y,T,S,C){var N=e._.correctionFactor(y,T),x=y*N*(T*N)/(N*N);return x}return e._.reduce([f,Math.pow(10,g)],v,1)}})}(),function(){e.register("format","ordinal",{regexps:{format:/(o)/},format:function(l,d,f){var g=e.locales[e.options.currentLocale],v,y=e._.includes(d," o")?" ":"";return d=d.replace(/\s?o/,""),y+=g.ordinal(l),v=e._.numberToFormat(l,d,f),v+y}})}(),function(){e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(l,d,f){var g=e._.includes(d," %")?" ":"",v;return e.options.scalePercentBy100&&(l=l*100),d=d.replace(/\s?\%/,""),v=e._.numberToFormat(l,d,f),e._.includes(v,")")?(v=v.split(""),v.splice(-1,0,g+"%"),v=v.join("")):v=v+g+"%",v},unformat:function(l){var d=e._.stringToNumber(l);return e.options.scalePercentBy100?d*.01:d}})}(),function(){e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(l,d,f){var g=Math.floor(l/60/60),v=Math.floor((l-g*60*60)/60),y=Math.round(l-g*60*60-v*60);return g+":"+(v<10?"0"+v:v)+":"+(y<10?"0"+y:y)},unformat:function(l){var d=l.split(":"),f=0;return d.length===3?(f=f+Number(d[0])*60*60,f=f+Number(d[1])*60,f=f+Number(d[2])):d.length===2&&(f=f+Number(d[0])*60,f=f+Number(d[1])),Number(f)}})}(),e})}(_o)),_o.exports}var uI=lI();const KO=Ap(uI);var jd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hI=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,l=u?n[i+2]:0,d=s>>2,f=(s&3)<<4|c>>4;let g=(c&15)<<2|l>>6,v=l&63;u||(v=64,o||(g=64)),r.push(t[d],t[f],t[g],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||l==null||f==null)throw new dI;const g=s<<2|c>>4;if(r.push(g),l!==64){const v=c<<4&240|l>>2;if(r.push(v),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fI=function(n){const e=Pm(n);return km.encodeByteArray(e,!0)},Do=function(n){return fI(n).replace(/\./g,"")},Hl=function(n){try{return km.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function xo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!pI(t)||(n[t]=xo(n[t],e[t]));return n}function pI(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=()=>Om().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof jd>"u")return;const n=jd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hl(n[1]);return e&&JSON.parse(e)},va=()=>{try{return mI()||gI()||yI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nm=n=>{var e,t;return(t=(e=va())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_I=n=>{const e=Nm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dm=()=>{var n;return(n=va())===null||n===void 0?void 0:n.config},xm=n=>{var e;return(e=va())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Do(JSON.stringify(t)),Do(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Wl(){var n;const e=(n=va())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TI(){return typeof window<"u"||Vm()}function Vm(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function II(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mm(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bI(){return!Wl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vo(){try{return typeof indexedDB=="object"}catch{return!1}}function AI(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=SI,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RI(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new at(i,c,r)}}function RI(n,e){return n.replace(CI,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const CI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function PI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Lo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(zd(s)&&zd(o)){if(!Lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function zd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Or(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Fm(n,e){const t=new kI(n,e);return t.subscribe.bind(t)}class kI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");OI(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Sc),i.error===void 0&&(i.error=Sc),i.complete===void 0&&(i.complete=Sc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n){return n&&n._delegate?n._delegate:n}class un{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new vI;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xI(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DI(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DI(n){return n===Qn?void 0:n}function xI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new NI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=[];var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Bm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},VI=ee.INFO,LI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},MI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=LI[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=VI,this._logHandler=MI,this._userLogHandler=null,Kl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}function FI(n){Kl.forEach(e=>{e.setLogLevel(n)})}function UI(n,e){for(const t of Kl){let r=null;e&&e.level&&(r=Bm[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const c=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&n({level:ee[s].toLowerCase(),message:c,args:o,type:i.name})}}}const BI=(n,e)=>e.some(t=>n instanceof t);let Hd,Wd;function $I(){return Hd||(Hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jI(){return Wd||(Wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $m=new WeakMap,nl=new WeakMap,jm=new WeakMap,Rc=new WeakMap,Ql=new WeakMap;function qI(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Sn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$m.set(t,n)}).catch(()=>{}),Ql.set(e,n),e}function zI(n){if(nl.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});nl.set(n,e)}let rl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function HI(n){rl=n(rl)}function WI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Cc(this),e,...t);return jm.set(r,e.sort?e.sort():[e]),Sn(r)}:jI().includes(n)?function(...e){return n.apply(Cc(this),e),Sn($m.get(this))}:function(...e){return Sn(n.apply(Cc(this),e))}}function GI(n){return typeof n=="function"?WI(n):(n instanceof IDBTransaction&&zI(n),BI(n,$I())?new Proxy(n,rl):n)}function Sn(n){if(n instanceof IDBRequest)return qI(n);if(Rc.has(n))return Rc.get(n);const e=GI(n);return e!==n&&(Rc.set(n,e),Ql.set(e,n)),e}const Cc=n=>Ql.get(n);function KI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Sn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Sn(o.result),u.oldVersion,u.newVersion,Sn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const QI=["get","getKey","getAll","getAllKeys","count"],JI=["put","add","delete","clear"],Pc=new Map;function Gd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=JI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QI.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),i&&u.done]))[0]};return Pc.set(e,s),s}HI(n=>({...n,get:(e,t,r)=>Gd(e,t)||n.get(e,t,r),has:(e,t)=>!!Gd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(XI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function XI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mo="@firebase/app",il="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new wa("@firebase/app"),ZI="@firebase/app-compat",eb="@firebase/analytics-compat",tb="@firebase/analytics",nb="@firebase/app-check-compat",rb="@firebase/app-check",ib="@firebase/auth",sb="@firebase/auth-compat",ob="@firebase/database",ab="@firebase/data-connect",cb="@firebase/database-compat",lb="@firebase/functions",ub="@firebase/functions-compat",hb="@firebase/installations",db="@firebase/installations-compat",fb="@firebase/messaging",pb="@firebase/messaging-compat",mb="@firebase/performance",gb="@firebase/performance-compat",yb="@firebase/remote-config",_b="@firebase/remote-config-compat",vb="@firebase/storage",wb="@firebase/storage-compat",Eb="@firebase/firestore",Tb="@firebase/vertexai",Ib="@firebase/firestore-compat",bb="firebase",Ab="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="[DEFAULT]",Sb={[Mo]:"fire-core",[ZI]:"fire-core-compat",[tb]:"fire-analytics",[eb]:"fire-analytics-compat",[rb]:"fire-app-check",[nb]:"fire-app-check-compat",[ib]:"fire-auth",[sb]:"fire-auth-compat",[ob]:"fire-rtdb",[ab]:"fire-data-connect",[cb]:"fire-rtdb-compat",[lb]:"fire-fn",[ub]:"fire-fn-compat",[hb]:"fire-iid",[db]:"fire-iid-compat",[fb]:"fire-fcm",[pb]:"fire-fcm-compat",[mb]:"fire-perf",[gb]:"fire-perf-compat",[yb]:"fire-rc",[_b]:"fire-rc-compat",[vb]:"fire-gcs",[wb]:"fire-gcs-compat",[Eb]:"fire-fst",[Ib]:"fire-fst-compat",[Tb]:"fire-vertex","fire-js":"fire-js",[bb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Map,jr=new Map,qr=new Map;function os(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qm(n,e){n.container.addOrOverwriteComponent(e)}function xn(n){const e=n.name;if(qr.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,n);for(const t of Dn.values())os(t,n);for(const t of jr.values())os(t,n);return!0}function bs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Rb(n,e,t=Nn){bs(n,e).clearInstance(t)}function zm(n){return n.options!==void 0}function ve(n){return n==null?!1:n.settings!==void 0}function Cb(){qr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new lr("app","Firebase",Pb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e){const t=Hl(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const i=JSON.parse(t).exp*1e3,s=new Date().getTime();i-s<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class kb extends Hm{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const c=e;super(c.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._serverConfig.authIdToken&&Kd(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Kd(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Ot(Mo,il,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Xl(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw At.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=Ab;function Jl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(t||(t=Dm()),!t)throw At.create("no-options");const s=Dn.get(i);if(s){if(Lo(t,s.options)&&Lo(r,s.config))return s;throw At.create("duplicate-app",{appName:i})}const o=new Um(i);for(const u of qr.values())o.addComponent(u);const c=new Hm(t,r,o);return Dn.set(i,c),c}function Ob(n,e){if(TI()&&!Vm())throw At.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;zm(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=l=>[...l].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw At.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=jr.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const c=new Um(s);for(const l of qr.values())c.addComponent(l);const u=new kb(t,e,s,c);return jr.set(s,u),u}function Yl(n=Nn){const e=Dn.get(n);if(!e&&n===Nn&&Dm())return Jl();if(!e)throw At.create("no-app",{appName:n});return e}function Nb(){return Array.from(Dn.values())}async function Xl(n){let e=!1;const t=n.name;Dn.has(t)?(e=!0,Dn.delete(t)):jr.has(t)&&n.decRefCount()<=0&&(jr.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Ot(n,e,t){var r;let i=(r=Sb[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(c.join(" "));return}xn(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Wm(n,e){if(n!==null&&typeof n!="function")throw At.create("invalid-log-argument");UI(n,e)}function Gm(n){FI(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="firebase-heartbeat-database",xb=1,as="firebase-heartbeat-store";let kc=null;function Km(){return kc||(kc=KI(Db,xb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(as)}catch(t){console.warn(t)}}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),kc}async function Vb(n){try{const t=(await Km()).transaction(as),r=await t.objectStore(as).get(Qm(n));return await t.done,r}catch(e){if(e instanceof at)hn.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(t.message)}}}async function Qd(n,e){try{const r=(await Km()).transaction(as,"readwrite");await r.objectStore(as).put(e,Qm(n)),await r.done}catch(t){if(t instanceof at)hn.warn(t.message);else{const r=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hn.warn(r.message)}}}function Qm(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=1024,Mb=30;class Fb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Mb){const o=$b(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jd(),{heartbeatsToSend:r,unsentEntries:i}=Ub(this._heartbeatsCache.heartbeats),s=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return hn.warn(t),""}}}function Jd(){return new Date().toISOString().substring(0,10)}function Ub(n,e=Lb){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Bb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vo()?AI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yd(n){return Do(JSON.stringify({version:2,heartbeats:n})).length}function $b(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(n){xn(new un("platform-logger",e=>new YI(e),"PRIVATE")),xn(new un("heartbeat",e=>new Fb(e),"PRIVATE")),Ot(Mo,il,n),Ot(Mo,il,"esm2017"),Ot("fire-js","")}jb("");const qb=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:at,SDK_VERSION:jn,_DEFAULT_ENTRY_NAME:Nn,_addComponent:os,_addOrOverwriteComponent:qm,_apps:Dn,_clearComponents:Cb,_components:qr,_getProvider:bs,_isFirebaseApp:zm,_isFirebaseServerApp:ve,_registerComponent:xn,_removeServiceInstance:Rb,_serverApps:jr,deleteApp:Xl,getApp:Yl,getApps:Nb,initializeApp:Jl,initializeServerApp:Ob,onLog:Wm,registerVersion:Ot,setLogLevel:Gm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t){this._delegate=e,this.firebase=t,os(e,new un("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Xl(this._delegate)))}_getService(e,t=Nn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Nn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){os(this._delegate,e)}_addOrOverwriteComponent(e){qm(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Xd=new lr("app-compat","Firebase",Hb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ot,setLogLevel:Gm,onLog:Wm,apps:null,SDK_VERSION:jn,INTERNAL:{registerComponent:c,removeApp:r,useAsService:u,modularAPIs:qb}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Nn,!qd(e,l))throw Xd.create("no-app",{appName:l});return e[l]}i.App=n;function s(l,d={}){const f=Jl(l,d);if(qd(e,f.name))return e[f.name];const g=new n(f,t);return e[f.name]=g,g}function o(){return Object.keys(e).map(l=>e[l])}function c(l){const d=l.name,f=d.replace("-compat","");if(xn(l)&&l.type==="PUBLIC"){const g=(v=i())=>{if(typeof v[f]!="function")throw Xd.create("invalid-app-argument",{appName:d});return v[f]()};l.serviceProps!==void 0&&xo(g,l.serviceProps),t[f]=g,n.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,l.multipleInstances?v:[])}}return l.type==="PUBLIC"?t[f]:null}function u(l,d){return d==="serverAuth"?null:d}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){const n=Wb(zb);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Jm,extendNamespace:e,createSubscribe:Fm,ErrorFactory:lr,deepExtend:xo});function e(t){xo(n,t)}return n}const Gb=Jm();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new wa("@firebase/app-compat"),Kb="@firebase/app-compat",Qb="0.2.50";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(n){Ot(Kb,Qb,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=Om();if(n.firebase!==void 0){Zd.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Zd.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Ea=Gb;Jb();var Yb="firebase",Xb="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ea.registerVersion(Yb,Xb,"app-compat");function Zl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const ki={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Sr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eA=Zb,tA=Ym,Xm=new lr("auth","Firebase",Ym());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new wa("@firebase/auth");function nA(n,...e){Fo.logLevel<=ee.WARN&&Fo.warn(`Auth (${jn}): ${n}`,...e)}function vo(n,...e){Fo.logLevel<=ee.ERROR&&Fo.error(`Auth (${jn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,...e){throw tu(n,...e)}function Fe(n,...e){return tu(n,...e)}function eu(n,e,t){const r=Object.assign(Object.assign({},tA()),{[e]:t});return new lr("auth","Firebase",r).create(e,{appName:n.name})}function je(n){return eu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ii(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&qe(n,"argument-error"),eu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xm.create(n,...e)}function U(n,e,...t){if(!n)throw tu(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vo(e),new Error(e)}function Nt(n,e){n||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function nu(){return ef()==="http:"||ef()==="https:"}function ef(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nu()||Lm()||"connection"in navigator)?navigator.onLine:!0}function iA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=EI()||Gl()}get(){return rA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,e){Nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new As(3e4,6e4);function Se(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Re(n,e,t,r,i={}){return eg(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=ri(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:u},s);return II()||(l.referrerPolicy="no-referrer"),Zm.fetch()(tg(n,n.config.apiHost,t,c),l)})}async function eg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},sA),e);try{const i=new cA(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ui(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ui(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ui(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw eu(n,d,l);qe(n,d)}}catch(i){if(i instanceof at)throw i;qe(n,"network-request-failed",{message:String(i)})}}async function mn(n,e,t,r,i={}){const s=await Re(n,e,t,r,i);return"mfaPendingCredential"in s&&qe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function tg(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ru(n.config,i):`${n.config.apiScheme}://${i}`}function aA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),oA.get())})}}function Ui(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Fe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n){return n!==void 0&&n.getResponse!==void 0}function nf(n){return n!==void 0&&n.enterprise!==void 0}class ng{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return aA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(n){return(await Re(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function rg(n,e){return Re(n,"GET","/v2/recaptchaConfig",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(n,e){return Re(n,"POST","/v1/accounts:delete",e)}async function hA(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function ig(n,e){return Re(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dA(n,e=!1){const t=Z(n),r=await t.getIdToken(e),i=Ta(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wi(Oc(i.auth_time)),issuedAtTime:Wi(Oc(i.iat)),expirationTime:Wi(Oc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oc(n){return Number(n)*1e3}function Ta(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hl(t);return i?JSON.parse(i):(vo("Failed to decode base64 JWT payload"),null)}catch(i){return vo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rf(n){const e=Ta(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&fA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function fA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(n){var e;const t=n.auth,r=await n.getIdToken(),i=await dn(n,ig(t,{idToken:r}));U(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sg(s.providerUserInfo):[],c=gA(n.providerData,o),u=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),d=u?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new sl(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function mA(n){const e=Z(n);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gA(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sg(n){return n.map(e=>{var{providerId:t}=e,r=Zl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(n,e){const t=await eg(n,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=tg(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Zm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _A(n,e){return Re(n,"POST","/v2/accounts:revokeToken",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=rf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await yA(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new xr;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await dn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dA(this,e)}reload(){return mA(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ve(this.auth.app))return Promise.reject(je(this.auth));const e=await this.getIdToken();return await dn(this,uA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,u,l,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,v=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,C=(l=t.createdAt)!==null&&l!==void 0?l:void 0,N=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:V,isAnonymous:F,providerData:B,stsTokenManager:b}=t;U(x&&b,e,"internal-error");const w=xr.fromJSON(this.name,b);U(typeof x=="string",e,"internal-error"),In(f,e.name),In(g,e.name),U(typeof V=="boolean",e,"internal-error"),U(typeof F=="boolean",e,"internal-error"),In(v,e.name),In(y,e.name),In(T,e.name),In(S,e.name),In(C,e.name),In(N,e.name);const E=new rn({uid:x,auth:e,email:g,emailVerified:V,displayName:f,isAnonymous:F,photoURL:y,phoneNumber:v,tenantId:T,stsTokenManager:w,createdAt:C,lastLoginAt:N});return B&&Array.isArray(B)&&(E.providerData=B.map(m=>Object.assign({},m))),S&&(E._redirectEventId=S),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new xr;i.updateFromServerResponse(t);const s=new rn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ls(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new xr;c.updateFromIdToken(r);const u=new rn({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,l),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new Map;function yt(n){Nt(n instanceof Function,"Expected a class definition");let e=sf.get(n);return e?(Nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}og.type="NONE";const zr=og;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n,e,t){return`firebase:${n}:${e}:${t}`}class Vr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=er(this.userKey,i.apiKey,s),this.fullPersistenceKey=er("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vr(yt(zr),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||yt(zr);const o=er(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){const f=rn._fromJSON(e,d);l!==s&&(c=f),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vr(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Vr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ug(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ag(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hg(e))return"Blackberry";if(dg(e))return"Webos";if(cg(e))return"Safari";if((e.includes("chrome/")||lg(e))&&!e.includes("edge/"))return"Chrome";if(Ss(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ag(n=Me()){return/firefox\//i.test(n)}function cg(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lg(n=Me()){return/crios\//i.test(n)}function ug(n=Me()){return/iemobile/i.test(n)}function Ss(n=Me()){return/android/i.test(n)}function hg(n=Me()){return/blackberry/i.test(n)}function dg(n=Me()){return/webos/i.test(n)}function Rs(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vA(n=Me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function wA(n=Me()){var e;return Rs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EA(){return Mm()&&document.documentMode===10}function fg(n=Me()){return Rs(n)||Ss(n)||dg(n)||hg(n)||/windows phone/i.test(n)||ug(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n,e=[]){let t;switch(n){case"Browser":t=of(Me());break;case"Worker":t=`${of(Me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(n,e={}){return Re(n,"GET","/v2/passwordPolicy",Se(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=6;class AA{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:bA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.beforeStateQueue=new TA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ig(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ve(this.app))return Promise.reject(je(this));const t=e?Z(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ve(this.app)?Promise.reject(je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ve(this.app)?Promise.reject(je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IA(this),t=new AA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await _A(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&nA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function we(n){return Z(n)}class af{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fm(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RA(n){Cs=n}function iu(n){return Cs.loadJS(n)}function CA(){return Cs.recaptchaV2Script}function PA(){return Cs.recaptchaEnterpriseScript}function kA(){return Cs.gapiScript}function mg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=500,NA=6e4,no=1e12;class DA{constructor(e){this.auth=e,this.counter=no,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new LA(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||no;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||no;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||no;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class xA{constructor(){this.enterprise=new VA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class VA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class LA{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;U(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=MA(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},NA)},OA))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function MA(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const FA="recaptcha-enterprise",Gi="NO_RECAPTCHA";class gg{constructor(e){this.type=FA,this.auth=we(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{rg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new ng(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;nf(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Gi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&nf(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=PA();u.length!==0&&(u+=c),iu(u).then(()=>{i(c,s,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Oi(n,e,t,r=!1,i=!1){const s=new gg(n);let o;if(i)o=Gi;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Rn(n,e,t,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Oi(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Oi(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const c=await Oi(n,e,t);return r(n,c).catch(async u=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const d=await Oi(n,e,t,!1,!0);return r(n,d)}return Promise.reject(u)})}else{const c=await Oi(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(i+" provider is not supported.")}async function UA(n){const e=we(n),t=await rg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new ng(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new gg(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(n,e){const t=bs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Lo(s,e??{}))return i;qe(i,"already-initialized")}return t.initialize({options:e})}function $A(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(yt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yg(n,e,t){const r=we(n);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=_g(e),{host:o,port:c}=jA(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qA()}function _g(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function jA(n){const e=_g(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cf(o)}}}function cf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(n,e){return Re(n,"POST","/v1/accounts:resetPassword",Se(n,e))}async function zA(n,e){return Re(n,"POST","/v1/accounts:update",e)}async function HA(n,e){return Re(n,"POST","/v1/accounts:signUp",e)}async function WA(n,e){return Re(n,"POST","/v1/accounts:update",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(n,e){return mn(n,"POST","/v1/accounts:signInWithPassword",Se(n,e))}async function Ia(n,e){return Re(n,"POST","/v1/accounts:sendOobCode",Se(n,e))}async function KA(n,e){return Ia(n,e)}async function QA(n,e){return Ia(n,e)}async function JA(n,e){return Ia(n,e)}async function YA(n,e){return Ia(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(n,e){return mn(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))}async function ZA(n,e){return mn(n,"POST","/v1/accounts:signInWithEmailLink",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends si{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new us(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new us(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rn(e,t,"signInWithPassword",GA,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return XA(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rn(e,r,"signUpPassword",HA,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ZA(e,{idToken:t,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(n,e){return mn(n,"POST","/v1/accounts:signInWithIdp",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="http://localhost";class Jt extends si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Zl(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return an(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,an(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,an(e,t)}buildRequest(){const e={requestUri:eS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ri(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(n,e){return Re(n,"POST","/v1/accounts:sendVerificationCode",Se(n,e))}async function tS(n,e){return mn(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e))}async function nS(n,e){const t=await mn(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,e));if(t.temporaryProof)throw Ui(n,"account-exists-with-different-credential",t);return t}const rS={USER_NOT_FOUND:"user-not-found"};async function iS(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return mn(n,"POST","/v1/accounts:signInWithPhoneNumber",Se(n,t),rS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends si{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new tr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tS(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return iS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new tr({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oS(n){const e=Or(Fi(n)).link,t=e?Or(Fi(e)).deep_link_id:null,r=Or(Fi(n)).deep_link_id;return(r?Or(Fi(r)).link:null)||r||t||e||n}class ba{constructor(e){var t,r,i,s,o,c;const u=Or(Fi(e)),l=(t=u.apiKey)!==null&&t!==void 0?t:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=sS((i=u.mode)!==null&&i!==void 0?i:null);U(l&&d&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=oS(e);try{return new ba(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,t){return us._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ba.parseLink(t);return U(r,"argument-error"),us._fromEmailAndCode(e,r.code,r.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends gn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Lr extends oi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),Jt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),Jt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Lr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Lr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!t&&!s||!c)return null;try{return new Lr(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends oi{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return qt.credential(t,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends oi{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="http://localhost";class Hr extends si{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return an(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,an(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,an(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Hr(r,s)}static _create(e,t){return new Hr(e,t)}buildRequest(){return{requestUri:aS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="saml.";class Uo extends gn{constructor(e){U(e.startsWith(cS),"argument-error"),super(e)}static credentialFromResult(e){return Uo.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Uo.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Hr.fromJSON(e);return U(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Hr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends oi{constructor(){super("twitter.com")}static credential(e,t){return Jt._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(n,e){return mn(n,"POST","/v1/accounts:signUp",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await rn._fromIdTokenResponse(e,r,i),o=uf(r);return new St({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=uf(r);return new St({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function uf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(n){var e;if(ve(n.app))return Promise.reject(je(n));const t=we(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new St({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await wg(t,{returnSecureToken:!0}),i=await St._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends at{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Bo(e,t,r,i)}}function Eg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(n,e){const t=Z(n);await Aa(!0,t,e);const{providerUserInfo:r}=await hA(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Tg(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function su(n,e,t=!1){const r=await dn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return St._forOperation(n,"link",r)}async function Aa(n,e,t){await ls(e);const r=Tg(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";U(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(n,e,t=!1){const{auth:r}=n;if(ve(r.app))return Promise.reject(je(r));const i="reauthenticate";try{const s=await dn(n,Eg(r,i,e,n),t);U(s.idToken,r,"internal-error");const o=Ta(s.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(n.uid===c,r,"user-mismatch"),St._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(n,e,t=!1){if(ve(n.app))return Promise.reject(je(n));const r="signIn",i=await Eg(n,r,e),s=await St._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Sa(n,e){return bg(we(n),e)}async function Ag(n,e){const t=Z(n);return await Aa(!1,t,e.providerId),su(t,e)}async function Sg(n,e){return Ig(Z(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(n,e){return mn(n,"POST","/v1/accounts:signInWithCustomToken",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(n,e){if(ve(n.app))return Promise.reject(je(n));const t=we(n),r=await hS(t,{token:e,returnSecureToken:!0}),i=await St._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ou._fromServerResponse(e,t):"totpInfo"in t?au._fromServerResponse(e,t):qe(e,"internal-error")}}class ou extends Ps{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ou(t)}}class au extends Ps{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new au(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n,e,t){var r;U(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),U(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),U(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(U(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(U(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(n){const e=we(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fS(n,e,t){const r=we(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ra(r,i,t),await Rn(r,i,"getOobCode",QA,"EMAIL_PASSWORD_PROVIDER")}async function pS(n,e,t){await vg(Z(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cu(n),r})}async function mS(n,e){await WA(Z(n),{oobCode:e})}async function Rg(n,e){const t=Z(n),r=await vg(t,{oobCode:e}),i=r.requestType;switch(U(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(r.mfaInfo,t,"internal-error");default:U(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Ps._fromServerResponse(we(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function gS(n,e){const{data:t}=await Rg(Z(n),e);return t.email}async function yS(n,e,t){if(ve(n.app))return Promise.reject(je(n));const r=we(n),o=await Rn(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wg,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&cu(n),u}),c=await St._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function _S(n,e,t){return ve(n.app)?Promise.reject(je(n)):Sa(Z(n),qn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cu(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(n,e,t){const r=we(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){U(c.handleCodeInApp,r,"argument-error"),c&&Ra(r,o,c)}s(i,t),await Rn(r,i,"getOobCode",JA,"EMAIL_PASSWORD_PROVIDER")}function wS(n,e){const t=ba.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function ES(n,e,t){if(ve(n.app))return Promise.reject(je(n));const r=Z(n),i=qn.credentialWithLink(e,t||cs());return U(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Sa(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(n,e){return Re(n,"POST","/v1/accounts:createAuthUri",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(n,e){const t=nu()?cs():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await TS(Z(n),r);return i||[]}async function bS(n,e){const t=Z(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ra(t.auth,i,e);const{email:s}=await KA(t.auth,i);s!==n.email&&await n.reload()}async function AS(n,e,t){const r=Z(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ra(r.auth,s,t);const{email:o}=await YA(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(n,e){return Re(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Z(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await dn(r,SS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function CS(n,e){const t=Z(n);return ve(t.auth.app)?Promise.reject(je(t.auth)):Cg(t,e,null)}function PS(n,e){return Cg(Z(n),null,e)}async function Cg(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await dn(n,zA(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Ta(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Mr(s,c)}}if(!r)return null;switch(r){case"facebook.com":return new OS(s,i);case"github.com":return new NS(s,i);case"google.com":return new DS(s,i);case"twitter.com":return new xS(s,i,n.screenName||null);case"custom":case"anonymous":return new Mr(s,null);default:return new Mr(s,r,i)}}class Mr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Pg extends Mr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class OS extends Mr{constructor(e,t){super(e,"facebook.com",t)}}class NS extends Pg{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class DS extends Mr{constructor(e,t){super(e,"google.com",t)}}class xS extends Pg{constructor(e,t,r){super(e,"twitter.com",t,r)}}function VS(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:kS(t)}function LS(n,e,t,r){return Z(n).onIdTokenChanged(e,t,r)}function MS(n,e,t){return Z(n).beforeAuthStateChanged(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Yn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Yn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Yn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Yn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=we(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(c=>Ps._fromServerResponse(r,c));U(i.mfaPendingCredential,r,"internal-error");const o=Yn._fromMfaPendingCredential(i.mfaPendingCredential);return new lu(o,s,async c=>{const u=await c._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const d=await St._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return U(t.user,r,"internal-error"),St._forOperation(t.user,t.operationType,l);default:qe(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function FS(n,e){var t;const r=Z(n),i=e;return U(e.customData.operationType,r,"argument-error"),U((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),lu._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:start",Se(n,e))}function US(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:finalize",Se(n,e))}function BS(n,e){return Re(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Se(n,e))}class uu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Ps._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new uu(e)}async getSession(){return Yn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await dn(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await dn(this.user,BS(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Nc=new WeakMap;function $S(n){const e=Z(n);return Nc.has(e)||Nc.set(e,uu._fromUser(e)),Nc.get(e)}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=1e3,qS=10;class Og extends kg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qS):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Og.type="LOCAL";const Ca=Og;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends kg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ng.type="SESSION";const Vn=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async l=>l(t.origin,s)),u=await zS(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const l=ks("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return window}function WS(n){De().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function GS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function QS(){return hu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="firebaseLocalStorageDb",JS=1,jo="firebaseLocalStorage",xg="fbase_key";class Os{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ka(n,e){return n.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function YS(){const n=indexedDB.deleteDatabase(Dg);return new Os(n).toPromise()}function ol(){const n=indexedDB.open(Dg,JS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(jo,{keyPath:xg})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await YS(),e(await ol()))})})}async function df(n,e,t){const r=ka(n,!0).put({[xg]:e,value:t});return new Os(r).toPromise()}async function XS(n,e){const t=ka(n,!1).get(e),r=await new Os(t).toPromise();return r===void 0?null:r.value}function ff(n,e){const t=ka(n,!0).delete(e);return new Os(t).toPromise()}const ZS=800,eR=3;class Vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>eR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(QS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await GS(),!this.activeServiceWorker)return;this.sender=new HS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await df(e,$o,"1"),await ff(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>XS(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ff(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ka(i,!1).getAll();return new Os(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vg.type="LOCAL";const Wr=Vg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:start",Se(n,e))}function tR(n,e){return Re(n,"POST","/v2/accounts/mfaSignIn:finalize",Se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=mg("rcb"),nR=new As(3e4,6e4);class rR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=De().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return U(iR(t),e,"argument-error"),this.shouldResolveImmediately(t)&&tf(De().grecaptcha)?Promise.resolve(De().grecaptcha):new Promise((r,i)=>{const s=De().setTimeout(()=>{i(Fe(e,"network-request-failed"))},nR.get());De()[Dc]=()=>{De().clearTimeout(s),delete De()[Dc];const c=De().grecaptcha;if(!c||!tf(c)){i(Fe(e,"internal-error"));return}const u=c.render;c.render=(l,d)=>{const f=u(l,d);return this.counter++,f},this.hostLanguage=t,r(c)};const o=`${CA()}?${ri({onload:Dc,render:"explicit",hl:t})}`;iu(o).catch(()=>{clearTimeout(s),i(Fe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=De().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iR(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class sR{async load(e){return new DA(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="recaptcha",oR={theme:"light",type:"image"};let aR=class{constructor(e,t,r=Object.assign({},oR)){this.parameters=r,this.type=Ki,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=we(e),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;U(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sR:new rR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=De()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(nu()&&!hu(),this.auth,"internal-error"),await cR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await lA(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function cR(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=tr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function lR(n,e,t){if(ve(n.app))return Promise.reject(je(n));const r=we(n),i=await Oa(r,e,Z(t));return new du(i,s=>Sa(r,s))}async function uR(n,e,t){const r=Z(n);await Aa(!1,r,"phone");const i=await Oa(r.auth,e,Z(t));return new du(i,s=>Ag(r,s))}async function hR(n,e,t){const r=Z(n);if(ve(r.auth.app))return Promise.reject(je(r.auth));const i=await Oa(r.auth,e,Z(t));return new du(i,s=>Sg(r,s))}async function Oa(n,e,t){var r;if(!n._getRecaptchaConfig())try{await UA(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){U(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Rn(n,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Gi){U((t==null?void 0:t.type)===Ki,d,"argument-error");const g=await xc(d,f,t);return hf(d,g)}return hf(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{U(s.type==="signin",n,"internal-error");const o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;U(o,n,"missing-multi-factor-info");const c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Rn(n,c,"mfaSmsSignIn",async(f,g)=>{if(g.phoneSignInInfo.captchaResponse===Gi){U((t==null?void 0:t.type)===Ki,f,"argument-error");const v=await xc(f,g,t);return pf(f,v)}return pf(f,g)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Rn(n,s,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===Gi){U((t==null?void 0:t.type)===Ki,l,"argument-error");const f=await xc(l,d,t);return lf(l,f)}return lf(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function dR(n,e){const t=Z(n);if(ve(t.auth.app))return Promise.reject(je(t.auth));await su(t,e)}async function xc(n,e,t){U(t.type===Ki,n,"argument-error");const r=await t.verify();U(typeof r=="string",n,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=class wo{constructor(e){this.providerId=wo.PROVIDER_ID,this.auth=we(e)}verifyPhoneNumber(e,t){return Oa(this.auth,e,Z(t))}static credential(e,t){return tr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wo.credentialFromTaggedObject(t)}static credentialFromError(e){return wo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?tr._fromTokenResponse(t,r):null}};sr.PROVIDER_ID="phone";sr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n,e){return e?yt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,t){return an(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fR(n){return bg(n.auth,new fu(n),n.bypassAuthState)}function pR(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Ig(t,new fu(n),n.bypassAuthState)}async function mR(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),su(t,new fu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fR;case"linkViaPopup":case"linkViaRedirect":return mR;case"reauthViaPopup":case"reauthViaRedirect":return pR;default:qe(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new As(2e3,1e4);async function yR(n,e,t){if(ve(n.app))return Promise.reject(Fe(n,"operation-not-supported-in-this-environment"));const r=we(n);ii(n,e,gn);const i=ur(r,t);return new sn(r,"signInViaPopup",e,i).executeNotNull()}async function _R(n,e,t){const r=Z(n);if(ve(r.auth.app))return Promise.reject(Fe(r.auth,"operation-not-supported-in-this-environment"));ii(r.auth,e,gn);const i=ur(r.auth,t);return new sn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function vR(n,e,t){const r=Z(n);ii(r.auth,e,gn);const i=ur(r.auth,t);return new sn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class sn extends Lg{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gR.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="pendingRedirect",Qi=new Map;class ER extends Lg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Qi.get(this.auth._key());if(!e){try{const r=await TR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Qi.set(this.auth._key(),e)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TR(n,e){const t=Fg(e),r=Mg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function pu(n,e){return Mg(n)._set(Fg(e),"true")}function IR(){Qi.clear()}function mu(n,e){Qi.set(n._key(),e)}function Mg(n){return yt(n._redirectPersistence)}function Fg(n){return er(wR,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n,e,t){return AR(n,e,t)}async function AR(n,e,t){if(ve(n.app))return Promise.reject(je(n));const r=we(n);ii(n,e,gn),await r._initializationPromise;const i=ur(r,t);return await pu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function SR(n,e,t){return RR(n,e,t)}async function RR(n,e,t){const r=Z(n);if(ii(r.auth,e,gn),ve(r.auth.app))return Promise.reject(je(r.auth));await r.auth._initializationPromise;const i=ur(r.auth,t);await pu(i,r.auth);const s=await Ug(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function CR(n,e,t){return PR(n,e,t)}async function PR(n,e,t){const r=Z(n);ii(r.auth,e,gn),await r.auth._initializationPromise;const i=ur(r.auth,t);await Aa(!1,r,e.providerId),await pu(i,r.auth);const s=await Ug(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function kR(n,e){return await we(n)._initializationPromise,Na(n,e,!1)}async function Na(n,e,t=!1){if(ve(n.app))return Promise.reject(je(n));const r=we(n),i=ur(r,e),o=await new ER(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ug(n){const e=ks(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=10*60*1e3;class Bg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$g(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(mf(e))}saveEventToCache(e){this.cachedEventUids.add(mf(e)),this.lastProcessedEventTime=Date.now()}}function mf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $g({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $g(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(n,e={}){return Re(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xR=/^https?/;async function VR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jg(n);for(const t of e)try{if(LR(t))return}catch{}qe(n,"unauthorized-domain")}function LR(n){const e=cs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!xR.test(t))return!1;if(DR.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new As(3e4,6e4);function gf(){const n=De().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function FR(n){return new Promise((e,t)=>{var r,i,s;function o(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),t(Fe(n,"network-request-failed"))},timeout:MR.get()})}if(!((i=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=De().gapi)===null||s===void 0)&&s.load)o();else{const c=mg("iframefcb");return De()[c]=()=>{gapi.load?o():t(Fe(n,"network-request-failed"))},iu(`${kA()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function UR(n){return Eo=Eo||FR(n),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new As(5e3,15e3),$R="__/auth/iframe",jR="emulator/auth/iframe",qR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HR(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ru(e,jR):`https://${n.config.authDomain}/${$R}`,r={apiKey:e.apiKey,appName:n.name,v:jn},i=zR.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ri(r).slice(1)}`}async function WR(n){const e=await UR(n),t=De().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:HR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(n,"network-request-failed"),c=De().setTimeout(()=>{s(o)},BR.get());function u(){De().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KR=500,QR=600,JR="_blank",YR="http://localhost";class yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XR(n,e,t,r=KR,i=QR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},GR),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Me().toLowerCase();t&&(c=lg(l)?JR:t),ag(l)&&(e=e||YR,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[v,y])=>`${g}${v}=${y},`,"");if(wA(l)&&c!=="_self")return ZR(e||"",c),new yf(null);const f=window.open(e||"",c,d);U(f,n,"popup-blocked");try{f.focus()}catch{}return new yf(f)}function ZR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="__/auth/handler",tC="emulator/auth/handler",nC=encodeURIComponent("fac");async function al(n,e,t,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jn,eventId:i};if(e instanceof gn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",PI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof oi){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await n._getAppCheckToken(),l=u?`#${nC}=${encodeURIComponent(u)}`:"";return`${rC(n)}?${ri(c).slice(1)}${l}`}function rC({config:n}){return n.emulator?ru(n,tC):`https://${n.authDomain}/${eC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="webStorageSupport";class iC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vn,this._completeRedirectFn=Na,this._overrideRedirectResult=mu}async _openPopup(e,t,r,i){var s;Nt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await al(e,t,r,cs(),i);return XR(e,o,ks())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await al(e,t,r,cs(),i);return WS(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Nt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await WR(e),r=new Bg(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vc,{type:Vc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vc];o!==void 0&&t(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fg()||cg()||Rs()}}const qg=iC;class sC{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Wt("unexpected MultiFactorSessionType")}}}class gu extends sC{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gu(e)}_finalizeEnroll(e,t,r){return US(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return tR(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class zg{constructor(){}static assertion(e){return gu._fromCredential(e)}}zg.FACTOR_ID="phone";var _f="@firebase/auth",vf="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cC(n){xn(new un("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pg(n)},l=new SA(r,i,s,u);return $A(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new un("auth-internal",e=>{const t=we(e.getProvider("auth").getImmediate());return(r=>new oC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(_f,vf,aC(n)),Ot(_f,vf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=5*60,uC=xm("authIdTokenMaxAge")||lC;let wf=null;const hC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uC)return;const i=t==null?void 0:t.token;wf!==i&&(wf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YO(n=Yl()){const e=bs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=BA(n,{popupRedirectResolver:qg,persistence:[Wr,Ca,Vn]}),r=xm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hC(s.toString());MS(t,o,()=>o(t.currentUser)),LS(t,c=>o(c))}}const i=Nm("auth");return i&&yg(t,`http://${i}`),t}function dC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}RA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Fe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",dC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cC("Browser");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,Hg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,w){function E(){}E.prototype=w.prototype,b.D=w.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(m,A,R){for(var I=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)I[Y-2]=arguments[Y];return w.prototype[A].apply(m,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,w,E){E||(E=0);var m=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)m[A]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(A=0;16>A;++A)m[A]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=b.g[0],E=b.g[1],A=b.g[2];var R=b.g[3],I=w+(R^E&(A^R))+m[0]+3614090360&4294967295;w=E+(I<<7&4294967295|I>>>25),I=R+(A^w&(E^A))+m[1]+3905402710&4294967295,R=w+(I<<12&4294967295|I>>>20),I=A+(E^R&(w^E))+m[2]+606105819&4294967295,A=R+(I<<17&4294967295|I>>>15),I=E+(w^A&(R^w))+m[3]+3250441966&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(R^E&(A^R))+m[4]+4118548399&4294967295,w=E+(I<<7&4294967295|I>>>25),I=R+(A^w&(E^A))+m[5]+1200080426&4294967295,R=w+(I<<12&4294967295|I>>>20),I=A+(E^R&(w^E))+m[6]+2821735955&4294967295,A=R+(I<<17&4294967295|I>>>15),I=E+(w^A&(R^w))+m[7]+4249261313&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(R^E&(A^R))+m[8]+1770035416&4294967295,w=E+(I<<7&4294967295|I>>>25),I=R+(A^w&(E^A))+m[9]+2336552879&4294967295,R=w+(I<<12&4294967295|I>>>20),I=A+(E^R&(w^E))+m[10]+4294925233&4294967295,A=R+(I<<17&4294967295|I>>>15),I=E+(w^A&(R^w))+m[11]+2304563134&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(R^E&(A^R))+m[12]+1804603682&4294967295,w=E+(I<<7&4294967295|I>>>25),I=R+(A^w&(E^A))+m[13]+4254626195&4294967295,R=w+(I<<12&4294967295|I>>>20),I=A+(E^R&(w^E))+m[14]+2792965006&4294967295,A=R+(I<<17&4294967295|I>>>15),I=E+(w^A&(R^w))+m[15]+1236535329&4294967295,E=A+(I<<22&4294967295|I>>>10),I=w+(A^R&(E^A))+m[1]+4129170786&4294967295,w=E+(I<<5&4294967295|I>>>27),I=R+(E^A&(w^E))+m[6]+3225465664&4294967295,R=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(R^w))+m[11]+643717713&4294967295,A=R+(I<<14&4294967295|I>>>18),I=E+(R^w&(A^R))+m[0]+3921069994&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(A^R&(E^A))+m[5]+3593408605&4294967295,w=E+(I<<5&4294967295|I>>>27),I=R+(E^A&(w^E))+m[10]+38016083&4294967295,R=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(R^w))+m[15]+3634488961&4294967295,A=R+(I<<14&4294967295|I>>>18),I=E+(R^w&(A^R))+m[4]+3889429448&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(A^R&(E^A))+m[9]+568446438&4294967295,w=E+(I<<5&4294967295|I>>>27),I=R+(E^A&(w^E))+m[14]+3275163606&4294967295,R=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(R^w))+m[3]+4107603335&4294967295,A=R+(I<<14&4294967295|I>>>18),I=E+(R^w&(A^R))+m[8]+1163531501&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(A^R&(E^A))+m[13]+2850285829&4294967295,w=E+(I<<5&4294967295|I>>>27),I=R+(E^A&(w^E))+m[2]+4243563512&4294967295,R=w+(I<<9&4294967295|I>>>23),I=A+(w^E&(R^w))+m[7]+1735328473&4294967295,A=R+(I<<14&4294967295|I>>>18),I=E+(R^w&(A^R))+m[12]+2368359562&4294967295,E=A+(I<<20&4294967295|I>>>12),I=w+(E^A^R)+m[5]+4294588738&4294967295,w=E+(I<<4&4294967295|I>>>28),I=R+(w^E^A)+m[8]+2272392833&4294967295,R=w+(I<<11&4294967295|I>>>21),I=A+(R^w^E)+m[11]+1839030562&4294967295,A=R+(I<<16&4294967295|I>>>16),I=E+(A^R^w)+m[14]+4259657740&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(E^A^R)+m[1]+2763975236&4294967295,w=E+(I<<4&4294967295|I>>>28),I=R+(w^E^A)+m[4]+1272893353&4294967295,R=w+(I<<11&4294967295|I>>>21),I=A+(R^w^E)+m[7]+4139469664&4294967295,A=R+(I<<16&4294967295|I>>>16),I=E+(A^R^w)+m[10]+3200236656&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(E^A^R)+m[13]+681279174&4294967295,w=E+(I<<4&4294967295|I>>>28),I=R+(w^E^A)+m[0]+3936430074&4294967295,R=w+(I<<11&4294967295|I>>>21),I=A+(R^w^E)+m[3]+3572445317&4294967295,A=R+(I<<16&4294967295|I>>>16),I=E+(A^R^w)+m[6]+76029189&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(E^A^R)+m[9]+3654602809&4294967295,w=E+(I<<4&4294967295|I>>>28),I=R+(w^E^A)+m[12]+3873151461&4294967295,R=w+(I<<11&4294967295|I>>>21),I=A+(R^w^E)+m[15]+530742520&4294967295,A=R+(I<<16&4294967295|I>>>16),I=E+(A^R^w)+m[2]+3299628645&4294967295,E=A+(I<<23&4294967295|I>>>9),I=w+(A^(E|~R))+m[0]+4096336452&4294967295,w=E+(I<<6&4294967295|I>>>26),I=R+(E^(w|~A))+m[7]+1126891415&4294967295,R=w+(I<<10&4294967295|I>>>22),I=A+(w^(R|~E))+m[14]+2878612391&4294967295,A=R+(I<<15&4294967295|I>>>17),I=E+(R^(A|~w))+m[5]+4237533241&4294967295,E=A+(I<<21&4294967295|I>>>11),I=w+(A^(E|~R))+m[12]+1700485571&4294967295,w=E+(I<<6&4294967295|I>>>26),I=R+(E^(w|~A))+m[3]+2399980690&4294967295,R=w+(I<<10&4294967295|I>>>22),I=A+(w^(R|~E))+m[10]+4293915773&4294967295,A=R+(I<<15&4294967295|I>>>17),I=E+(R^(A|~w))+m[1]+2240044497&4294967295,E=A+(I<<21&4294967295|I>>>11),I=w+(A^(E|~R))+m[8]+1873313359&4294967295,w=E+(I<<6&4294967295|I>>>26),I=R+(E^(w|~A))+m[15]+4264355552&4294967295,R=w+(I<<10&4294967295|I>>>22),I=A+(w^(R|~E))+m[6]+2734768916&4294967295,A=R+(I<<15&4294967295|I>>>17),I=E+(R^(A|~w))+m[13]+1309151649&4294967295,E=A+(I<<21&4294967295|I>>>11),I=w+(A^(E|~R))+m[4]+4149444226&4294967295,w=E+(I<<6&4294967295|I>>>26),I=R+(E^(w|~A))+m[11]+3174756917&4294967295,R=w+(I<<10&4294967295|I>>>22),I=A+(w^(R|~E))+m[2]+718787259&4294967295,A=R+(I<<15&4294967295|I>>>17),I=E+(R^(A|~w))+m[9]+3951481745&4294967295,b.g[0]=b.g[0]+w&4294967295,b.g[1]=b.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,w){w===void 0&&(w=b.length);for(var E=w-this.blockSize,m=this.B,A=this.h,R=0;R<w;){if(A==0)for(;R<=E;)i(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<w;)if(m[A++]=b.charCodeAt(R++),A==this.blockSize){i(this,m),A=0;break}}else for(;R<w;)if(m[A++]=b[R++],A==this.blockSize){i(this,m),A=0;break}}this.h=A,this.o+=w},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var w=1;w<b.length-8;++w)b[w]=0;var E=8*this.o;for(w=b.length-8;w<b.length;++w)b[w]=E&255,E/=256;for(this.u(b),b=Array(16),w=E=0;4>w;++w)for(var m=0;32>m;m+=8)b[E++]=this.g[w]>>>m&255;return b};function s(b,w){var E=c;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=w(b)}function o(b,w){this.h=w;for(var E=[],m=!0,A=b.length-1;0<=A;A--){var R=b[A]|0;m&&R==w||(E[A]=R,m=!1)}this.g=E}var c={};function u(b){return-128<=b&&128>b?s(b,function(w){return new o([w|0],0>w?-1:0)}):new o([b|0],0>b?-1:0)}function l(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return S(l(-b));for(var w=[],E=1,m=0;b>=E;m++)w[m]=b/E|0,E*=4294967296;return new o(w,0)}function d(b,w){if(b.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b.charAt(0)=="-")return S(d(b.substring(1),w));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=l(Math.pow(w,8)),m=f,A=0;A<b.length;A+=8){var R=Math.min(8,b.length-A),I=parseInt(b.substring(A,A+R),w);8>R?(R=l(Math.pow(w,R)),m=m.j(R).add(l(I))):(m=m.j(E),m=m.add(l(I)))}return m}var f=u(0),g=u(1),v=u(16777216);n=o.prototype,n.m=function(){if(T(this))return-S(this).m();for(var b=0,w=1,E=0;E<this.g.length;E++){var m=this.i(E);b+=(0<=m?m:4294967296+m)*w,w*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(y(this))return"0";if(T(this))return"-"+S(this).toString(b);for(var w=l(Math.pow(b,6)),E=this,m="";;){var A=V(E,w).g;E=C(E,A.j(w));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=A,y(E))return R+m;for(;6>R.length;)R="0"+R;m=R+m}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function y(b){if(b.h!=0)return!1;for(var w=0;w<b.g.length;w++)if(b.g[w]!=0)return!1;return!0}function T(b){return b.h==-1}n.l=function(b){return b=C(this,b),T(b)?-1:y(b)?0:1};function S(b){for(var w=b.g.length,E=[],m=0;m<w;m++)E[m]=~b.g[m];return new o(E,~b.h).add(g)}n.abs=function(){return T(this)?S(this):this},n.add=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],m=0,A=0;A<=w;A++){var R=m+(this.i(A)&65535)+(b.i(A)&65535),I=(R>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);m=I>>>16,R&=65535,I&=65535,E[A]=I<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function C(b,w){return b.add(S(w))}n.j=function(b){if(y(this)||y(b))return f;if(T(this))return T(b)?S(this).j(S(b)):S(S(this).j(b));if(T(b))return S(this.j(S(b)));if(0>this.l(v)&&0>b.l(v))return l(this.m()*b.m());for(var w=this.g.length+b.g.length,E=[],m=0;m<2*w;m++)E[m]=0;for(m=0;m<this.g.length;m++)for(var A=0;A<b.g.length;A++){var R=this.i(m)>>>16,I=this.i(m)&65535,Y=b.i(A)>>>16,pe=b.i(A)&65535;E[2*m+2*A]+=I*pe,N(E,2*m+2*A),E[2*m+2*A+1]+=R*pe,N(E,2*m+2*A+1),E[2*m+2*A+1]+=I*Y,N(E,2*m+2*A+1),E[2*m+2*A+2]+=R*Y,N(E,2*m+2*A+2)}for(m=0;m<w;m++)E[m]=E[2*m+1]<<16|E[2*m];for(m=w;m<2*w;m++)E[m]=0;return new o(E,0)};function N(b,w){for(;(b[w]&65535)!=b[w];)b[w+1]+=b[w]>>>16,b[w]&=65535,w++}function x(b,w){this.g=b,this.h=w}function V(b,w){if(y(w))throw Error("division by zero");if(y(b))return new x(f,f);if(T(b))return w=V(S(b),w),new x(S(w.g),S(w.h));if(T(w))return w=V(b,S(w)),new x(S(w.g),w.h);if(30<b.g.length){if(T(b)||T(w))throw Error("slowDivide_ only works with positive integers.");for(var E=g,m=w;0>=m.l(b);)E=F(E),m=F(m);var A=B(E,1),R=B(m,1);for(m=B(m,2),E=B(E,2);!y(m);){var I=R.add(m);0>=I.l(b)&&(A=A.add(E),R=I),m=B(m,1),E=B(E,1)}return w=C(b,A.j(w)),new x(A,w)}for(A=f;0<=b.l(w);){for(E=Math.max(1,Math.floor(b.m()/w.m())),m=Math.ceil(Math.log(E)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),R=l(E),I=R.j(w);T(I)||0<I.l(b);)E-=m,R=l(E),I=R.j(w);y(R)&&(R=g),A=A.add(R),b=C(b,I)}return new x(A,b)}n.A=function(b){return V(this,b).h},n.and=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],m=0;m<w;m++)E[m]=this.i(m)&b.i(m);return new o(E,this.h&b.h)},n.or=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],m=0;m<w;m++)E[m]=this.i(m)|b.i(m);return new o(E,this.h|b.h)},n.xor=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],m=0;m<w;m++)E[m]=this.i(m)^b.i(m);return new o(E,this.h^b.h)};function F(b){for(var w=b.g.length+1,E=[],m=0;m<w;m++)E[m]=b.i(m)<<1|b.i(m-1)>>>31;return new o(E,b.h)}function B(b,w){var E=w>>5;w%=32;for(var m=b.g.length-E,A=[],R=0;R<m;R++)A[R]=0<w?b.i(R+E)>>>w|b.i(R+E+1)<<32-w:b.i(R+E);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Cn=o}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wg,Bi,Gg,To,cl,Kg,Qg,Jg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var P=a[_];if(!(P in p))break e;p=p[P]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,_=!1,P={next:function(){if(!_&&p<a.length){var k=p++;return{value:h(k,a[k]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function v(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function y(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,P,k){for(var $=Array(arguments.length-2),le=2;le<arguments.length;le++)$[le-2]=arguments[le];return h.prototype[P].apply(_,$)}}function T(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function S(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const P=a.length||0,k=_.length||0;a.length=P+k;for(let $=0;$<k;$++)a[P+$]=_[$]}else a.push(_)}}class C{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function B(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function b(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function w(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(a,h){let p,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(p in _)a[p]=_[p];for(let k=0;k<E.length;k++)p=E[k],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function A(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function R(a){c.setTimeout(()=>{throw a},0)}function I(){var a=ce;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Y{constructor(){this.h=this.g=null}add(h,p){const _=pe.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var pe=new C(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let W,G=!1,ce=new Y,ye=()=>{const a=c.Promise.resolve(void 0);W=()=>{a.then(yn)}};var yn=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(p){R(p)}var h=pe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}G=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Et=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,h),c.removeEventListener("test",p,h)}catch{}return a}();function Tt(a,h){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{V(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wa[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tt.aa.h.call(this)}}y(Tt,Te);var Wa={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gr="closure_listenable_"+(1e6*Math.random()|0),Ga=0;function Ls(a,h,p,_,P){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=P,this.key=++Ga,this.da=this.fa=!1}function Vt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ft(a){this.src=a,this.g={},this.h=0}ft.prototype.add=function(a,h,p,_,P){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var $=Oe(a,h,_,P);return-1<$?(h=a[$],p||(h.fa=!1)):(h=new Ls(h,this.src,k,!!_,P),h.fa=p,a.push(h)),h};function fe(a,h){var p=h.type;if(p in a.g){var _=a.g[p],P=Array.prototype.indexOf.call(_,h,void 0),k;(k=0<=P)&&Array.prototype.splice.call(_,P,1),k&&(Vt(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Oe(a,h,p,_){for(var P=0;P<a.length;++P){var k=a[P];if(!k.da&&k.listener==h&&k.capture==!!p&&k.ha==_)return P}return-1}var it="closure_lm_"+(1e6*Math.random()|0),_n={};function Xt(a,h,p,_,P){if(Array.isArray(h)){for(var k=0;k<h.length;k++)Xt(a,h[k],p,_,P);return null}return p=eh(p),a&&a[gr]?a.K(h,p,l(_)?!!_.capture:!1,P):vn(a,h,p,!1,_,P)}function vn(a,h,p,_,P,k){if(!h)throw Error("Invalid event type");var $=l(P)?!!P.capture:!!P,le=Ka(a);if(le||(a[it]=le=new ft(a)),p=le.add(h,p,_,$,k),p.proxy)return p;if(_=Ct(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Et||(P=$),P===void 0&&(P=!1),a.addEventListener(h.toString(),_,P);else if(a.attachEvent)a.attachEvent(Zu(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ct(){function a(p){return h.call(a.src,a.listener,p)}const h=N_;return a}function Lt(a,h,p,_,P){if(Array.isArray(h))for(var k=0;k<h.length;k++)Lt(a,h[k],p,_,P);else _=l(_)?!!_.capture:!!_,p=eh(p),a&&a[gr]?(a=a.i,h=String(h).toString(),h in a.g&&(k=a.g[h],p=Oe(k,p,_,P),-1<p&&(Vt(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete a.g[h],a.h--)))):a&&(a=Ka(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Oe(h,p,_,P)),(p=-1<a?h[a]:null)&&zn(p))}function zn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gr])fe(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Zu(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Ka(h))?(fe(p,a),p.h==0&&(p.src=null,h[it]=null)):Vt(a)}}}function Zu(a){return a in _n?_n[a]:_n[a]="on"+a}function N_(a,h){if(a.da)a=!0;else{h=new Tt(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&zn(a),a=p.call(_,h)}return a}function Ka(a){return a=a[it],a instanceof ft?a:null}var Qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function eh(a){return typeof a=="function"?a:(a[Qa]||(a[Qa]=function(h){return a.handleEvent(h)}),a[Qa])}function Qe(){rt.call(this),this.i=new ft(this),this.M=this,this.F=null}y(Qe,rt),Qe.prototype[gr]=!0,Qe.prototype.removeEventListener=function(a,h,p,_){Lt(this,a,h,p,_)};function st(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Te(h,a);else if(h instanceof Te)h.target=h.target||a;else{var P=h;h=new Te(_,a),m(h,P)}if(P=!0,p)for(var k=p.length-1;0<=k;k--){var $=h.g=p[k];P=Ms($,_,!0,h)&&P}if($=h.g=a,P=Ms($,_,!0,h)&&P,P=Ms($,_,!1,h)&&P,p)for(k=0;k<p.length;k++)$=h.g=p[k],P=Ms($,_,!1,h)&&P}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)Vt(p[_]);delete a.g[h],a.h--}}this.F=null},Qe.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},Qe.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Ms(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,k=0;k<h.length;++k){var $=h[k];if($&&!$.da&&$.capture==p){var le=$.listener,ze=$.ha||$.src;$.fa&&fe(a.i,$),P=le.call(ze,_)!==!1&&P}}return P&&!_.defaultPrevented}function th(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function nh(a){a.g=th(()=>{a.g=null,a.i&&(a.i=!1,nh(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class D_ extends rt{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:nh(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(a){rt.call(this),this.h=a,this.g={}}y(di,rt);var rh=[];function ih(a){B(a.g,function(h,p){this.g.hasOwnProperty(p)&&zn(h)},a),a.g={}}di.prototype.N=function(){di.aa.N.call(this),ih(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ja=c.JSON.stringify,x_=c.JSON.parse,V_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ya(){}Ya.prototype.h=null;function sh(a){return a.h||(a.h=a.i())}function oh(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xa(){Te.call(this,"d")}y(Xa,Te);function Za(){Te.call(this,"c")}y(Za,Te);var Hn={},ah=null;function Fs(){return ah=ah||new Qe}Hn.La="serverreachability";function ch(a){Te.call(this,Hn.La,a)}y(ch,Te);function pi(a){const h=Fs();st(h,new ch(h))}Hn.STAT_EVENT="statevent";function lh(a,h){Te.call(this,Hn.STAT_EVENT,a),this.stat=h}y(lh,Te);function ot(a){const h=Fs();st(h,new lh(h,a))}Hn.Ma="timingevent";function uh(a,h){Te.call(this,Hn.Ma,a),this.size=h}y(uh,Te);function mi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function gi(){this.g=!0}gi.prototype.xa=function(){this.g=!1};function L_(a,h,p,_,P,k){a.info(function(){if(a.g)if(k)for(var $="",le=k.split("&"),ze=0;ze<le.length;ze++){var ie=le[ze].split("=");if(1<ie.length){var Je=ie[0];ie=ie[1];var Ye=Je.split("_");$=2<=Ye.length&&Ye[1]=="type"?$+(Je+"="+ie+"&"):$+(Je+"=redacted&")}}else $=null;else $=k;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+h+`
`+p+`
`+$})}function M_(a,h,p,_,P,k,$){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+h+`
`+p+`
`+k+" "+$})}function yr(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+U_(a,p)+(_?" "+_:"")})}function F_(a,h){a.info(function(){return"TIMEOUT: "+h})}gi.prototype.info=function(){};function U_(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return Ja(p)}catch{return h}}var Us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ec;function Bs(){}y(Bs,Ya),Bs.prototype.g=function(){return new XMLHttpRequest},Bs.prototype.i=function(){return{}},ec=new Bs;function wn(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dh}function dh(){this.i=null,this.g="",this.h=!1}var fh={},tc={};function nc(a,h,p){a.L=1,a.v=zs(Zt(h)),a.m=p,a.P=!0,ph(a,null)}function ph(a,h){a.F=Date.now(),$s(a),a.A=Zt(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Ch(p.i,"t",_),a.C=0,p=a.j.J,a.h=new dh,a.g=Wh(a.j,p?h:null,!a.m),0<a.O&&(a.M=new D_(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(rh[0]=P.toString()),P=rh);for(var k=0;k<P.length;k++){var $=Xt(p,P[k],_||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),pi(),L_(a.i,a.u,a.A,a.l,a.R,a.m)}wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&en(a)==3?h.j():this.Y(a)},wn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=en(this.g);var h=this.g.Ba();const wr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Vh(this.g)))){this.J||Ye!=4||h==7||(h==8||0>=wr?pi(3):pi(2)),rc(this);var p=this.g.Z();this.X=p;t:if(mh(this)){var _=Vh(this.g);a="";var P=_.length,k=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wn(this),yi(this);var $="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(k&&h==P-1)});_.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,M_(this.i,this.u,this.A,this.l,this.R,Ye,p),this.o){if(this.T&&!this.K){t:{if(this.g){var le,ze=this.g;if((le=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(le)){var ie=le;break t}}ie=null}if(p=ie)yr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ic(this,p);else{this.o=!1,this.s=3,ot(12),Wn(this),yi(this);break e}}if(this.P){p=!0;let Pt;for(;!this.J&&this.C<$.length;)if(Pt=B_(this,$),Pt==tc){Ye==4&&(this.s=4,ot(14),p=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==fh){this.s=4,ot(15),yr(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else yr(this.i,this.l,Pt,null),ic(this,Pt);if(mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||$.length!=0||this.h.h||(this.s=1,ot(16),p=!1),this.o=this.o&&p,!p)yr(this.i,this.l,$,"[Invalid Chunked Response]"),Wn(this),yi(this);else if(0<$.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),uc(Je),Je.M=!0,ot(11))}}else yr(this.i,this.l,$,null),ic(this,$);Ye==4&&Wn(this),this.o&&!this.J&&(Ye==4?jh(this.j,this):(this.o=!1,$s(this)))}else rv(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Wn(this),yi(this)}}}catch{}finally{}};function mh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function B_(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?tc:(p=Number(h.substring(p,_)),isNaN(p)?fh:(_+=1,_+p>h.length?tc:(h=h.slice(_,_+p),a.C=_+p,h)))}wn.prototype.cancel=function(){this.J=!0,Wn(this)};function $s(a){a.S=Date.now()+a.I,gh(a,a.I)}function gh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=mi(g(a.ba,a),h)}function rc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(F_(this.i,this.A),this.L!=2&&(pi(),ot(17)),Wn(this),this.s=2,yi(this)):gh(this,this.S-a)};function yi(a){a.j.G==0||a.J||jh(a.j,a)}function Wn(a){rc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ih(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ic(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||sc(p.h,a))){if(!a.K&&sc(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Js(p),Ks(p);else break e;lc(p),ot(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=mi(g(p.Za,p),6e3));if(1>=vh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Kn(p,11)}else if((a.K||p.g==a)&&Js(p),!N(h))for(P=p.Da.g.parse(h),h=0;h<P.length;h++){let ie=P[h];if(p.T=ie[0],ie=ie[1],p.G==2)if(ie[0]=="c"){p.K=ie[1],p.ia=ie[2];const Je=ie[3];Je!=null&&(p.la=Je,p.j.info("VER="+p.la));const Ye=ie[4];Ye!=null&&(p.Aa=Ye,p.j.info("SVER="+p.Aa));const wr=ie[5];wr!=null&&typeof wr=="number"&&0<wr&&(_=1.5*wr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Pt=a.g;if(Pt){const Xs=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var k=_.h;k.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(oc(k,k.h),k.h=null))}if(_.D){const hc=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;hc&&(_.ya=hc,me(_.I,_.D,hc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var $=a;if(_.qa=Hh(_,_.J?_.ia:null,_.W),$.K){wh(_.h,$);var le=$,ze=_.L;ze&&(le.I=ze),le.B&&(rc(le),$s(le)),_.g=$}else Bh(_);0<p.i.length&&Qs(p)}else ie[0]!="stop"&&ie[0]!="close"||Kn(p,7);else p.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Kn(p,7):cc(p):ie[0]!="noop"&&p.l&&p.l.ta(ie),p.v=0)}}pi(4)}catch{}}var $_=class{constructor(a,h){this.g=a,this.map=h}};function yh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _h(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vh(a){return a.h?1:a.g?a.g.size:0}function sc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function oc(a,h){a.g?a.g.add(h):a.h=h}function wh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}yh.prototype.cancel=function(){if(this.i=Eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Eh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return T(a.i)}function j_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function q_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function Th(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=q_(a),_=j_(a),P=_.length,k=0;k<P;k++)h.call(void 0,_[k],p&&p[k],a)}var Ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z_(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),P=null;if(0<=_){var k=a[p].substring(0,_);P=a[p].substring(_+1)}else k=a[p];h(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Gn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Gn){this.h=a.h,js(this,a.j),this.o=a.o,this.g=a.g,qs(this,a.s),this.l=a.l;var h=a.i,p=new wi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),bh(this,p),this.m=a.m}else a&&(h=String(a).match(Ih))?(this.h=!1,js(this,h[1]||"",!0),this.o=_i(h[2]||""),this.g=_i(h[3]||"",!0),qs(this,h[4]),this.l=_i(h[5]||"",!0),bh(this,h[6]||"",!0),this.m=_i(h[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Gn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(vi(h,Ah,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(vi(h,Ah,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(vi(p,p.charAt(0)=="/"?G_:W_,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",vi(p,Q_)),a.join("")};function Zt(a){return new Gn(a)}function js(a,h,p){a.j=p?_i(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function qs(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function bh(a,h,p){h instanceof wi?(a.i=h,J_(a.i,a.h)):(p||(h=vi(h,K_)),a.i=new wi(h,a.h))}function me(a,h,p){a.i.set(h,p)}function zs(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _i(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,H_),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function H_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ah=/[#\/\?@]/g,W_=/[#\?:]/g,G_=/[#\?]/g,K_=/[#\?@]/g,Q_=/#/g;function wi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function En(a){a.g||(a.g=new Map,a.h=0,a.i&&z_(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=wi.prototype,n.add=function(a,h){En(this),this.i=null,a=_r(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Sh(a,h){En(a),h=_r(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rh(a,h){return En(a),h=_r(a,h),a.g.has(h)}n.forEach=function(a,h){En(this),this.g.forEach(function(p,_){p.forEach(function(P){a.call(h,P,_,this)},this)},this)},n.na=function(){En(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const P=a[_];for(let k=0;k<P.length;k++)p.push(h[_])}return p},n.V=function(a){En(this);let h=[];if(typeof a=="string")Rh(this,a)&&(h=h.concat(this.g.get(_r(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},n.set=function(a,h){return En(this),this.i=null,a=_r(this,a),Rh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ch(a,h,p){Sh(a,h),0<p.length&&(a.i=null,a.g.set(_r(a,h),T(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const k=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var P=k;$[_]!==""&&(P+="="+encodeURIComponent(String($[_]))),a.push(P)}}return this.i=a.join("&")};function _r(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function J_(a,h){h&&!a.j&&(En(a),a.i=null,a.g.forEach(function(p,_){var P=_.toLowerCase();_!=P&&(Sh(this,_),Ch(this,P,p))},a)),a.j=h}function Y_(a,h){const p=new gi;if(c.Image){const _=new Image;_.onload=v(Tn,p,"TestLoadImage: loaded",!0,h,_),_.onerror=v(Tn,p,"TestLoadImage: error",!1,h,_),_.onabort=v(Tn,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=v(Tn,p,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function X_(a,h){const p=new gi,_=new AbortController,P=setTimeout(()=>{_.abort(),Tn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(k=>{clearTimeout(P),k.ok?Tn(p,"TestPingServer: ok",!0,h):Tn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Tn(p,"TestPingServer: error",!1,h)})}function Tn(a,h,p,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(p)}catch{}}function Z_(){this.g=new V_}function ev(a,h,p){const _=p||"";try{Th(a,function(P,k){let $=P;l(P)&&($=Ja(P)),h.push(_+k+"="+encodeURIComponent($))})}catch(P){throw h.push(_+"type="+encodeURIComponent("_badmap")),P}}function Hs(a){this.l=a.Ub||null,this.j=a.eb||!1}y(Hs,Ya),Hs.prototype.g=function(){return new Ws(this.l,this.j)},Hs.prototype.i=function(a){return function(){return a}}({});function Ws(a,h){Qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Ws,Qe),n=Ws.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ti(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ph(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ph(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ei(this):Ti(this),this.readyState==3&&Ph(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Ei(this))},n.Qa=function(a){this.g&&(this.response=a,Ei(this))},n.ga=function(){this.g&&Ei(this)};function Ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ti(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function kh(a){let h="";return B(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function ac(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=kh(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):me(a,h,p))}function Ie(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Ie,Qe);var tv=/^https?$/i,nv=["POST","PUT"];n=Ie.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ec.g(),this.v=this.o?sh(this.o):sh(ec),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){Oh(this,k);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)p.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const k of _.keys())p.set(k,_.get(k));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(nv,h,void 0))||_||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,$]of p)this.g.setRequestHeader(k,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){Oh(this,k)}};function Oh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Nh(a),Gs(a)}function Nh(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),Gs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gs(this,!0)),Ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Dh(this):this.bb())},n.bb=function(){Dh(this)};function Dh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||en(a)!=4||a.Z()!=2)){if(a.u&&en(a)==4)th(a.Ea,0,a);else if(st(a,"readystatechange"),en(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=$===0){var P=String(a.D).match(Ih)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),_=!tv.test(P?P.toLowerCase():"")}p=_}if(p)st(a,"complete"),st(a,"success");else{a.m=6;try{var k=2<en(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",Nh(a)}}finally{Gs(a)}}}}function Gs(a,h){if(a.g){xh(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||st(a,"ready");try{p.onreadystatechange=_}catch{}}}function xh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function en(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),x_(h)}};function Vh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function rv(a){const h={};a=(a.g&&2<=en(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(N(a[_]))continue;var p=A(a[_]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=h[P]||[];h[P]=k,k.push(p)}b(h,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ii(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Lh(a){this.Aa=0,this.i=[],this.j=new gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ii("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ii("baseRetryDelayMs",5e3,a),this.cb=Ii("retryDelaySeedMs",1e4,a),this.Wa=Ii("forwardChannelMaxRetries",2,a),this.wa=Ii("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new yh(a&&a.concurrentRequestLimit),this.Da=new Z_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Lh.prototype,n.la=8,n.G=1,n.connect=function(a,h,p,_){ot(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Hh(this,null,this.W),Qs(this)};function cc(a){if(Mh(a),a.G==3){var h=a.U++,p=Zt(a.I);if(me(p,"SID",a.K),me(p,"RID",h),me(p,"TYPE","terminate"),bi(a,p),h=new wn(a,a.j,h),h.L=2,h.v=zs(Zt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=h.v,p=!0),p||(h.g=Wh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),$s(h)}zh(a)}function Ks(a){a.g&&(uc(a),a.g.cancel(),a.g=null)}function Mh(a){Ks(a),a.u&&(c.clearTimeout(a.u),a.u=null),Js(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Qs(a){if(!_h(a.h)&&!a.s){a.s=!0;var h=a.Ga;W||ye(),G||(W(),G=!0),ce.add(h,a),a.B=0}}function iv(a,h){return vh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=mi(g(a.Ga,a,h),qh(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new wn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=w(k),m(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Uh(this,P,h),p=Zt(this.I),me(p,"RID",a),me(p,"CVER",22),this.D&&me(p,"X-HTTP-Session-Id",this.D),bi(this,p),k&&(this.O?h="headers="+encodeURIComponent(String(kh(k)))+"&"+h:this.m&&ac(p,this.m,k)),oc(this.h,P),this.Ua&&me(p,"TYPE","init"),this.P?(me(p,"$req",h),me(p,"SID","null"),P.T=!0,nc(P,p,null)):nc(P,p,h),this.G=2}}else this.G==3&&(a?Fh(this,a):this.i.length==0||_h(this.h)||Fh(this))};function Fh(a,h){var p;h?p=h.l:p=a.U++;const _=Zt(a.I);me(_,"SID",a.K),me(_,"RID",p),me(_,"AID",a.T),bi(a,_),a.m&&a.o&&ac(_,a.m,a.o),p=new wn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Uh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),oc(a.h,p),nc(p,_,h)}function bi(a,h){a.H&&B(a.H,function(p,_){me(h,_,p)}),a.l&&Th({},function(p,_){me(h,_,p)})}function Uh(a,h,p){p=Math.min(a.i.length,p);var _=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let k=-1;for(;;){const $=["count="+p];k==-1?0<p?(k=P[0].g,$.push("ofs="+k)):k=0:$.push("ofs="+k);let le=!0;for(let ze=0;ze<p;ze++){let ie=P[ze].g;const Je=P[ze].map;if(ie-=k,0>ie)k=Math.max(0,P[ze].g-100),le=!1;else try{ev(Je,$,"req"+ie+"_")}catch{_&&_(Je)}}if(le){_=$.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function Bh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;W||ye(),G||(W(),G=!0),ce.add(h,a),a.v=0}}function lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=mi(g(a.Fa,a),qh(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,$h(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=mi(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ks(this),$h(this))};function uc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function $h(a){a.g=new wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Zt(a.qa);me(h,"RID","rpc"),me(h,"SID",a.K),me(h,"AID",a.T),me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(h,"TO",a.ja),me(h,"TYPE","xmlhttp"),bi(a,h),a.m&&a.o&&ac(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=zs(Zt(h)),p.m=null,p.P=!0,ph(p,a)}n.Za=function(){this.C!=null&&(this.C=null,Ks(this),lc(this),ot(19))};function Js(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function jh(a,h){var p=null;if(a.g==h){Js(a),uc(a),a.g=null;var _=2}else if(sc(a.h,h))p=h.D,wh(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;_=Fs(),st(_,new uh(_,p)),Qs(a)}else Bh(a);else if(P=h.s,P==3||P==0&&0<h.X||!(_==1&&iv(a,h)||_==2&&lc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),P){case 1:Kn(a,5);break;case 4:Kn(a,10);break;case 3:Kn(a,6);break;default:Kn(a,2)}}}function qh(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Kn(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),_=a.Xa;const P=!_;_=new Gn(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||js(_,"https"),zs(_),P?Y_(_.toString(),p):X_(_.toString(),p)}else ot(2);a.G=0,a.l&&a.l.sa(h),zh(a),Mh(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function zh(a){if(a.G=0,a.ka=[],a.l){const h=Eh(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.ra()}}function Hh(a,h,p){var _=p instanceof Gn?Zt(p):new Gn(p);if(_.g!="")h&&(_.g=h+"."+_.g),qs(_,_.s);else{var P=c.location;_=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var k=new Gn(null);_&&js(k,_),h&&(k.g=h),P&&qs(k,P),p&&(k.l=p),_=k}return p=a.D,h=a.ya,p&&h&&me(_,p,h),me(_,"VER",a.la),bi(a,_),_}function Wh(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ie(new Hs({eb:p})):new Ie(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gh(){}n=Gh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ys(){}Ys.prototype.g=function(a,h){return new pt(a,h)};function pt(a,h){Qe.call(this),this.g=new Lh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new vr(this)}y(pt,Qe),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){cc(this.g)},pt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ja(a),a=p);h.i.push(new $_(h.Ya++,a)),h.G==3&&Qs(h)},pt.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,pt.aa.N.call(this)};function Kh(a){Xa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}y(Kh,Xa);function Qh(){Za.call(this),this.status=1}y(Qh,Za);function vr(a){this.g=a}y(vr,Gh),vr.prototype.ua=function(){st(this.g,"a")},vr.prototype.ta=function(a){st(this.g,new Kh(a))},vr.prototype.sa=function(a){st(this.g,new Qh)},vr.prototype.ra=function(){st(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,Jg=function(){return new Ys},Qg=function(){return Fs()},Kg=Hn,cl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Us.NO_ERROR=0,Us.TIMEOUT=8,Us.HTTP_ERROR=6,To=Us,hh.COMPLETE="complete",Gg=hh,oh.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Bi=oh,Ie.prototype.listenOnce=Ie.prototype.L,Ie.prototype.getLastError=Ie.prototype.Ka,Ie.prototype.getLastErrorCode=Ie.prototype.Ba,Ie.prototype.getStatus=Ie.prototype.Z,Ie.prototype.getResponseJson=Ie.prototype.Oa,Ie.prototype.getResponseText=Ie.prototype.oa,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Ha,Wg=Ie}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const Tf="@firebase/firestore",If="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new wa("@firebase/firestore");function Rr(){return or.logLevel}function q(n,...e){if(or.logLevel<=ee.DEBUG){const t=e.map(yu);or.debug(`Firestore (${ai}): ${n}`,...t)}}function fn(n,...e){if(or.logLevel<=ee.ERROR){const t=e.map(yu);or.error(`Firestore (${ai}): ${n}`,...t)}}function Gr(n,...e){if(or.logLevel<=ee.WARN){const t=e.map(yu);or.warn(`Firestore (${ai}): ${n}`,...t)}}function yu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n="Unexpected state"){const e=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: `+n;throw fn(e),new Error(e)}function ae(n,e){n||K()}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class pC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mC{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Yg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new et(e)}}class gC{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yC{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new gC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ve(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ae(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new bf(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ae(typeof t.token=="string"),this.R=t.token,new bf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function Kr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=-62135596800,Sf=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Sf);return new Ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Af)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sf}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Af;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ue(0,0))}static max(){return new Q(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="__name__";class Ut{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ut.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Ut.isNumericId(e),i=Ut.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ut.extractNumericId(e).compare(Ut.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cn.fromString(e.substring(4,e.length-2))}}class ge extends Ut{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const wC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Ut{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return wC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rf}static keyField(){return new Ge([Rf])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ge.fromString(e))}static fromName(e){return new H(ge.fromString(e).popFirst(5))}static empty(){return new H(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ge(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=-1;function EC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new Ln(i,H.empty(),e)}function TC(n){return new Ln(n.readTime,n.key,hs)}class Ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ln(Q.min(),H.empty(),hs)}static max(){return new Ln(Q.max(),H.empty(),hs)}}function IC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==bC)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(i=>i?L.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new L((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const l=u;t(e[l]).next(d=>{o[l]=d,++c,c===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new L((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function SC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function li(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Da.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=-1;function xa(n){return n==null}function qo(n){return n===0&&1/n==-1/0}function RC(n){return typeof n=="number"&&Number.isInteger(n)&&!qo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="";function CC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cf(e)),e=PC(n.get(t),e);return Cf(e)}function PC(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Zg:t+="";break;default:t+=s}}return t}function Cf(n){return n+Zg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ey(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new He(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,i,s){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new kt([])}unionWith(e){let t=new Be(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ty("Invalid base64 string: "+s):s}}(e);return new Ke(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const kC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(n){if(ae(!!n),typeof n=="string"){let e=0;const t=kC.exec(n);if(ae(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(n.seconds),nanos:Ce(n.nanos)}}function Ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fn(n){return typeof n=="string"?Ke.fromBase64String(n):Ke.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="server_timestamp",ry="__type__",iy="__previous_value__",sy="__local_write_time__";function vu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ry])===null||t===void 0?void 0:t.stringValue)===ny}function Va(n){const e=n.mapValue.fields[iy];return vu(e)?Va(e):e}function ds(n){const e=Mn(n.mapValue.fields[sy].timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t,r,i,s,o,c,u,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l}}const zo="(default)";class fs{constructor(e,t){this.projectId=e,this.database=t||zo}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database===zo}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="__type__",NC="__max__",so={mapValue:{}},ay="__vector__",Ho="value";function Un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vu(n)?4:xC(n)?9007199254740991:DC(n)?10:11:K()}function Yt(n,e){if(n===e)return!0;const t=Un(n);if(t!==Un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ds(n).isEqual(ds(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Mn(i.timestampValue),c=Mn(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Fn(i.bytesValue).isEqual(Fn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),c=Ce(s.doubleValue);return o===c?qo(o)===qo(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Kr(n.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Pf(o)!==Pf(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Yt(o[u],c[u])))return!1;return!0}(n,e);default:return K()}}function ps(n,e){return(n.values||[]).find(t=>Yt(t,e))!==void 0}function Qr(n,e){if(n===e)return 0;const t=Un(n),r=Un(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Of(n.timestampValue,e.timestampValue);case 4:return Of(ds(n),ds(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(s,o){const c=Fn(s),u=Fn(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const d=ne(c[l],u[l]);if(d!==0)return d}return ne(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=ne(Ce(s.latitude),Ce(o.latitude));return c!==0?c:ne(Ce(s.longitude),Ce(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Nf(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,l,d;const f=s.fields||{},g=o.fields||{},v=(c=f[Ho])===null||c===void 0?void 0:c.arrayValue,y=(u=g[Ho])===null||u===void 0?void 0:u.arrayValue,T=ne(((l=v==null?void 0:v.values)===null||l===void 0?void 0:l.length)||0,((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0);return T!==0?T:Nf(v,y)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===so.mapValue&&o===so.mapValue)return 0;if(s===so.mapValue)return 1;if(o===so.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const g=ne(u[f],d[f]);if(g!==0)return g;const v=Qr(c[u[f]],l[d[f]]);if(v!==0)return v}return ne(u.length,d.length)}(n.mapValue,e.mapValue);default:throw K()}}function Of(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=Mn(n),r=Mn(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function Nf(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Qr(t[i],r[i]);if(s)return s}return ne(t.length,r.length)}function Jr(n){return ll(n)}function ll(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Mn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ll(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ll(t.fields[o])}`;return i+"}"}(n.mapValue):K()}function Io(n){switch(Un(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Va(n);return e?16+Io(e):16;case 5:return 2*n.stringValue.length;case 6:return Fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Io(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return hr(r.fields,(s,o)=>{i+=s.length+Io(o)}),i}(n.mapValue);default:throw K()}}function Df(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ul(n){return!!n&&"integerValue"in n}function wu(n){return!!n&&"arrayValue"in n}function xf(n){return!!n&&"nullValue"in n}function Vf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bo(n){return!!n&&"mapValue"in n}function DC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[oy])===null||t===void 0?void 0:t.stringValue)===ay}function Ji(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ji(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ji(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===NC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(t)}setAll(e){let t=Ge.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Ji(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());bo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];bo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){hr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(Ji(this.value))}}function cy(n){const e=[];return hr(n.fields,(t,r)=>{const i=new Ge([t]);if(bo(r)){const s=cy(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new tt(e,0,Q.min(),Q.min(),Q.min(),bt.empty(),0)}static newFoundDocument(e,t,r,i){return new tt(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new tt(e,2,t,Q.min(),Q.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,Q.min(),Q.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t){this.position=e,this.inclusive=t}}function Lf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),t.key):r=Qr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Yt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t="asc"){this.field=e,this.dir=t}}function VC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{}class Ve extends ly{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new MC(e,t,r):t==="array-contains"?new BC(e,r):t==="in"?new $C(e,r):t==="not-in"?new jC(e,r):t==="array-contains-any"?new qC(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new FC(e,r):new UC(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qr(t,this.value)):t!==null&&Un(this.value)===Un(t)&&this.matchesComparison(Qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends ly{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Dt(e,t)}matches(e){return uy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function uy(n){return n.op==="and"}function hy(n){return LC(n)&&uy(n)}function LC(n){for(const e of n.filters)if(e instanceof Dt)return!1;return!0}function hl(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+Jr(n.value);if(hy(n))return n.filters.map(e=>hl(e)).join(",");{const e=n.filters.map(t=>hl(t)).join(",");return`${n.op}(${e})`}}function dy(n,e){return n instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&Yt(r.value,i.value)}(n,e):n instanceof Dt?function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&dy(o,i.filters[c]),!0):!1}(n,e):void K()}function fy(n){return n instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Jr(t.value)}`}(n):n instanceof Dt?function(t){return t.op.toString()+" {"+t.getFilters().map(fy).join(" ,")+"}"}(n):"Filter"}class MC extends Ve{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class FC extends Ve{constructor(e,t){super(e,"in",t),this.keys=py("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class UC extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=py("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function py(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}class BC extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wu(t)&&ps(t.arrayValue,this.value)}}class $C extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class jC extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ps(this.value.arrayValue,t)}}class qC extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ps(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.le=null}}function Ff(n,e=null,t=[],r=[],i=null,s=null,o=null){return new zC(n,e,t,r,i,s,o)}function Eu(n){const e=J(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>hl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Jr(r)).join(",")),e.le=t}return e.le}function Tu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!VC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dy(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Mf(n.startAt,e.startAt)&&Mf(n.endAt,e.endAt)}function dl(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function HC(n,e,t,r,i,s,o,c){return new ui(n,e,t,r,i,s,o,c)}function Iu(n){return new ui(n)}function Uf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function my(n){return n.collectionGroup!==null}function Yi(n){const e=J(n);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Be(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(c=c.add(l.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new ms(s,r))}),t.has(Ge.keyField().canonicalString())||e.he.push(new ms(Ge.keyField(),r))}return e.he}function Kt(n){const e=J(n);return e.Pe||(e.Pe=WC(e,Yi(n))),e.Pe}function WC(n,e){if(n.limitType==="F")return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ms(i.field,s)});const t=n.endAt?new Wo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Wo(n.startAt.position,n.startAt.inclusive):null;return Ff(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function fl(n,e){const t=n.filters.concat([e]);return new ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pl(n,e,t){return new ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function La(n,e){return Tu(Kt(n),Kt(e))&&n.limitType===e.limitType}function gy(n){return`${Eu(Kt(n))}|lt:${n.limitType}`}function Cr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>fy(i)).join(", ")}]`),xa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Jr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Jr(i)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function Ma(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Yi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const l=Lf(o,c,u);return o.inclusive?l<=0:l<0}(r.startAt,Yi(r),i)||r.endAt&&!function(o,c,u){const l=Lf(o,c,u);return o.inclusive?l>=0:l>0}(r.endAt,Yi(r),i))}(n,e)}function GC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yy(n){return(e,t)=>{let r=!1;for(const i of Yi(n)){const s=KC(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KC(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),l=c.data.field(s);return u!==null&&l!==null?Qr(u,l):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ey(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=new Ee(H.comparator);function pn(){return QC}const _y=new Ee(H.comparator);function $i(...n){let e=_y;for(const t of n)e=e.insert(t.key,t);return e}function vy(n){let e=_y;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xn(){return Xi()}function wy(){return Xi()}function Xi(){return new dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const JC=new Ee(H.comparator),YC=new Be(H.comparator);function te(...n){let e=YC;for(const t of n)e=e.add(t);return e}const XC=new Be(ne);function ZC(){return XC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(e)?"-0":e}}function Ey(n){return{integerValue:""+n}}function eP(n,e){return RC(e)?Ey(e):bu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this._=void 0}}function tP(n,e,t){return n instanceof Go?function(i,s){const o={fields:{[ry]:{stringValue:ny},[sy]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&vu(s)&&(s=Va(s)),s&&(o.fields[iy]=s),{mapValue:o}}(t,e):n instanceof gs?Iy(n,e):n instanceof ys?by(n,e):function(i,s){const o=Ty(i,s),c=Bf(o)+Bf(i.Ie);return ul(o)&&ul(i.Ie)?Ey(c):bu(i.serializer,c)}(n,e)}function nP(n,e,t){return n instanceof gs?Iy(n,e):n instanceof ys?by(n,e):t}function Ty(n,e){return n instanceof Ko?function(r){return ul(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Go extends Fa{}class gs extends Fa{constructor(e){super(),this.elements=e}}function Iy(n,e){const t=Ay(e);for(const r of n.elements)t.some(i=>Yt(i,r))||t.push(r);return{arrayValue:{values:t}}}class ys extends Fa{constructor(e){super(),this.elements=e}}function by(n,e){let t=Ay(e);for(const r of n.elements)t=t.filter(i=>!Yt(i,r));return{arrayValue:{values:t}}}class Ko extends Fa{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Bf(n){return Ce(n.integerValue||n.doubleValue)}function Ay(n){return wu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function rP(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof gs&&i instanceof gs||r instanceof ys&&i instanceof ys?Kr(r.elements,i.elements,Yt):r instanceof Ko&&i instanceof Ko?Yt(r.Ie,i.Ie):r instanceof Go&&i instanceof Go}(n.transform,e.transform)}class iP{constructor(e,t){this.version=e,this.transformResults=t}}class cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ua{}function Sy(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Cy(n.key,cn.none()):new Ns(n.key,n.data,cn.none());{const t=n.data,r=bt.empty();let i=new Be(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fr(n.key,r,new kt(i.toArray()),cn.none())}}function sP(n,e,t){n instanceof Ns?function(i,s,o){const c=i.value.clone(),u=jf(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof fr?function(i,s,o){if(!Ao(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=jf(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ry(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zi(n,e,t,r){return n instanceof Ns?function(s,o,c,u){if(!Ao(s.precondition,o))return c;const l=s.value.clone(),d=qf(s.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof fr?function(s,o,c,u){if(!Ao(s.precondition,o))return c;const l=qf(s.fieldTransforms,u,o),d=o.data;return d.setAll(Ry(s)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,c){return Ao(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function oP(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Ty(r.transform,i||null);s!=null&&(t===null&&(t=bt.empty()),t.set(r.field,s))}return t||null}function $f(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Kr(r,i,(s,o)=>rP(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ns extends Ua{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fr extends Ua{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ry(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jf(n,e,t){const r=new Map;ae(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,nP(o,c,t[i]))}return r}function qf(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,tP(s,o,e))}return r}class Cy extends Ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aP extends Ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sP(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wy();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=Sy(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&Kr(this.mutations,e.mutations,(t,r)=>$f(t,r))&&Kr(this.baseMutations,e.baseMutations,(t,r)=>$f(t,r))}}class Au{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ae(e.mutations.length===r.length);let i=function(){return JC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Au(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,re;function hP(n){switch(n){case M.OK:return K();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K()}}function Py(n){if(n===void 0)return fn("GRPC error has no .code"),M.UNKNOWN;switch(n){case Ne.OK:return M.OK;case Ne.CANCELLED:return M.CANCELLED;case Ne.UNKNOWN:return M.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return M.INTERNAL;case Ne.UNAVAILABLE:return M.UNAVAILABLE;case Ne.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ne.NOT_FOUND:return M.NOT_FOUND;case Ne.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ne.ABORTED:return M.ABORTED;case Ne.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ne.DATA_LOSS:return M.DATA_LOSS;default:return K()}}(re=Ne||(Ne={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new Cn([4294967295,4294967295],0);function zf(n){const e=dP().encode(n),t=new Hg;return t.update(e),new Uint8Array(t.digest())}function Hf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cn([t,r],0),new Cn([i,s],0)]}class Su{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ji(`Invalid padding: ${t}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ji(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Cn.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(Cn.fromNumber(r)));return i.compare(fP)===1&&(i=new Cn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=zf(e),[r,i]=Hf(t);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Su(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ee===0)return;const t=zf(e),[r,i]=Hf(t);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ba(Q.min(),i,new Ee(ne),pn(),te())}}class Ds{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ds(r,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class ky{constructor(e,t){this.targetId=e,this.ge=t}}class Oy{constructor(e,t,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Wf{constructor(){this.pe=0,this.ye=Gf(),this.we=Ke.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=te(),t=te(),r=te();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Ds(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Gf()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ae(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class pP{constructor(e){this.ke=e,this.qe=new Map,this.Qe=pn(),this.$e=oo(),this.Ke=oo(),this.Ue=new Ee(ne)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(dl(s))if(r===0){const o=new H(s.path);this.ze(t,o,tt.newNoDocument(o,Q.min()))}else ae(r===1);else{const o=this.et(t);if(o!==r){const c=this.tt(e),u=c?this.nt(c,e,o):1;if(u!==0){this.Ye(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,l)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=Fn(r).toUint8Array()}catch(u){if(u instanceof ty)return Gr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Su(o,i,s)}catch(u){return Gr(u instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ee===0?null:c}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.ke.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,o)=>{const c=this.Xe(o);if(c){if(s.current&&dl(c.target)){const u=new H(c.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,tt.newNoDocument(u,e))}s.ve&&(t.set(o,s.Fe()),s.Me())}});let r=te();this.Ke.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const l=this.Xe(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new Ba(e,t,this.Ue,this.Qe,r);return this.Qe=pn(),this.$e=oo(),this.Ke=oo(),this.Ue=new Ee(ne),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Wf,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Be(ne),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Be(ne),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Wf),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function oo(){return new Ee(H.comparator)}function Gf(){return new Ee(H.comparator)}const mP={asc:"ASCENDING",desc:"DESCENDING"},gP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yP={and:"AND",or:"OR"};class _P{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ml(n,e){return n.useProto3Json||xa(e)?e:{value:e}}function Qo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ny(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vP(n,e){return Qo(n,e.toTimestamp())}function Qt(n){return ae(!!n),Q.fromTimestamp(function(t){const r=Mn(t);return new Ue(r.seconds,r.nanos)}(n))}function Ru(n,e){return gl(n,e).canonicalString()}function gl(n,e){const t=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Dy(n){const e=ge.fromString(n);return ae(Fy(e)),e}function yl(n,e){return Ru(n.databaseId,e.path)}function Lc(n,e){const t=Dy(e);if(t.get(1)!==n.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Vy(t))}function xy(n,e){return Ru(n.databaseId,e)}function wP(n){const e=Dy(n);return e.length===4?ge.emptyPath():Vy(e)}function _l(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vy(n){return ae(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Kf(n,e,t){return{name:yl(n,e),fields:t.value.mapValue.fields}}function EP(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,d){return l.useProto3Json?(ae(d===void 0||typeof d=="string"),Ke.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ke.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(l){const d=l.code===void 0?M.UNKNOWN:Py(l.code);return new z(d,l.message||"")}(o);t=new Oy(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lc(n,r.document.name),s=Qt(r.document.updateTime),o=r.document.createTime?Qt(r.document.createTime):Q.min(),c=new bt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,c),l=r.targetIds||[],d=r.removedTargetIds||[];t=new So(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lc(n,r.document),s=r.readTime?Qt(r.readTime):Q.min(),o=tt.newNoDocument(i,s),c=r.removedTargetIds||[];t=new So([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lc(n,r.document),s=r.removedTargetIds||[];t=new So([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uP(i,s),c=r.targetId;t=new ky(c,o)}}return t}function TP(n,e){let t;if(e instanceof Ns)t={update:Kf(n,e.key,e.value)};else if(e instanceof Cy)t={delete:yl(n,e.key)};else if(e instanceof fr)t={update:Kf(n,e.key,e.data),updateMask:OP(e.fieldMask)};else{if(!(e instanceof aP))return K();t={verify:yl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Go)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ko)return{fieldPath:o.field.canonicalString(),increment:c.Ie};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(n,e.precondition)),t}function IP(n,e){return n&&n.length>0?(ae(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Qt(i.updateTime):Qt(s);return o.isEqual(Q.min())&&(o=Qt(s)),new iP(o,i.transformResults||[])}(t,e))):[]}function bP(n,e){return{documents:[xy(n,e.path)]}}function AP(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=xy(n,i);const s=function(l){if(l.length!==0)return My(Dt.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(l){if(l.length!==0)return l.map(d=>function(g){return{field:Pr(g.field),direction:CP(g.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ml(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ht:t,parent:i}}function SP(n){let e=wP(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ae(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const g=Ly(f);return g instanceof Dt&&hy(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(y){return new ms(kr(y.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(f){let g;return g=typeof f=="object"?f.value:f,xa(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(f){const g=!!f.before,v=f.values||[];return new Wo(v,g)}(t.startAt));let l=null;return t.endAt&&(l=function(f){const g=!f.before,v=f.values||[];return new Wo(v,g)}(t.endAt)),HC(e,i,o,s,c,"F",u,l)}function RP(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ly(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=kr(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=kr(t.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=kr(t.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kr(t.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return Ve.create(kr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Dt.create(t.compositeFilter.filters.map(r=>Ly(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function CP(n){return mP[n]}function PP(n){return gP[n]}function kP(n){return yP[n]}function Pr(n){return{fieldPath:n.canonicalString()}}function kr(n){return Ge.fromServerFormat(n.fieldPath)}function My(n){return n instanceof Ve?function(t){if(t.op==="=="){if(Vf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NAN"}};if(xf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NAN"}};if(xf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(t.field),op:PP(t.op),value:t.value}}}(n):n instanceof Dt?function(t){const r=t.getFilters().map(i=>My(i));return r.length===1?r[0]:{compositeFilter:{op:kP(t.op),filters:r}}}(n):K()}function OP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,r,i,s=Q.min(),o=Q.min(),c=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.Tt=e}}function DP(n){const e=SP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.Tn=new VP}addToCollectionParentIndex(e,t){return this.Tn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Ln.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class VP{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Be(ge.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uy=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(Uy,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Yr(0)}static Un(){return new Yr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="LruGarbageCollector",LP=1048576;function Yf([n,e],[t,r]){const i=ne(n,t);return i===0?ne(e,r):i}class MP{constructor(e){this.Hn=e,this.buffer=new Be(Yf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FP{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){q(Jf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){li(t)?q(Jf,"Ignoring IndexedDB error during garbage collection: ",t):await ci(t)}await this.er(3e5)})}}class UP{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Da.ae);const r=new MP(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Qf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qf):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,s,o,c,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,c=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(l=Date.now(),Rr()<=ee.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${f} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function BP(n,e){return new UP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(){this.changes=new dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zi(r.mutation,i,kt.empty(),Ue.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=te()){const i=Xn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=$i();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Xn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,te()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=pn();const o=Xi(),c=function(){return Xi()}();return t.forEach((u,l)=>{const d=r.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof fr)?s=s.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Zi(d.mutation,l,d.mutation.getFieldMask(),Ue.now())):o.set(l.key,kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,d)=>o.set(l,d)),t.forEach((l,d)=>{var f;return c.set(l,new jP(d,(f=o.get(l))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Xi();let i=new Ee((o,c)=>o-c),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const l=t.get(u);if(l===null)return;let d=r.get(u)||kt.empty();d=c.applyToLocalView(l,d),r.set(u,d);const f=(i.get(c.batchId)||te()).add(u);i=i.insert(c.batchId,f)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,d=u.value,f=wy();d.forEach(g=>{if(!s.has(g)){const v=Sy(t.get(g),r.get(g));v!==null&&f.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):my(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):L.resolve(Xn());let c=hs,u=s;return o.next(l=>L.forEach(l,(d,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,te())).next(d=>({batchId:c,changes:vy(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=$i();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=$i();return this.indexManager.getCollectionParents(e,s).next(c=>L.forEach(c,u=>{const l=function(f,g){return new ui(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,tt.newInvalidDocument(d)))});let c=$i();return o.forEach((u,l)=>{const d=s.get(u);d!==void 0&&Zi(d.mutation,l,kt.empty(),Ue.now()),Ma(t,l)&&(c=c.insert(u,l))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return L.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Qt(i.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:DP(i.bundledQuery),readTime:Qt(i.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.overlays=new Ee(H.comparator),this.Rr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xn();return L.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Et(e,t,s)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const i=Xn(),s=t.length+1,o=new H(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ee((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let d=s.get(l.largestBatchId);d===null&&(d=Xn(),s=s.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const c=Xn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,d)=>c.set(l,d)),!(c.size()>=i)););return L.resolve(c)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lP(t,r));let s=this.Rr.get(t);s===void 0&&(s=te(),this.Rr.set(t,s)),this.Rr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.Vr=new Be($e.mr),this.gr=new Be($e.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new $e(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new $e(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new H(new ge([])),r=new $e(t,e),i=new $e(t,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new H(new ge([])),r=new $e(t,e),i=new $e(t,e+1);let s=te();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new $e(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return H.comparator(e.key,t.key)||ne(e.Cr,t.Cr)}static pr(e,t){return ne(e.Cr,t.Cr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Be($e.mr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cP(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Mr=this.Mr.add(new $e(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?_u:this.Fr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),i=new $e(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const c=this.Or(o.Cr);s.push(c)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(ne);return t.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],c=>{r=r.add(c.Cr)})}),L.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new $e(new H(s),0);let c=new Be(ne);return this.Mr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(c=c.add(u.Cr)),!0)},o),L.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ae(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return L.forEach(t.mutations,i=>{const s=new $e(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new $e(t,0),i=this.Mr.firstAfterOrEqual(r);return L.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.kr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=pn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=pn();const o=t.path,c=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:l,value:{document:d}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||IC(TC(d),r)<=0||(i.has(d.key)||Ma(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K()}qr(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new QP(this)}getSize(e){return L.resolve(this.size)}}class QP extends $P{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.persistence=e,this.Qr=new dr(t=>Eu(t),Tu),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Cu,this.targetCount=0,this.Ur=Yr.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),L.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Yr(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.zn(t),L.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Qr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.Kr.Sr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Da(0),this.zr=!1,this.zr=!0,this.jr=new WP,this.referenceDelegate=e(this),this.Hr=new JP(this),this.indexManager=new xP,this.remoteDocumentCache=function(i){return new KP(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new NP(t),this.Yr=new zP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new HP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new GP(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new YP(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return L.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class YP extends AC{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.ti=new Cu,this.ni=null}static ri(e){return new Pu(e)}get ii(){if(this.ni)return this.ni;throw K()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),L.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ii,r=>{const i=H.fromPath(r);return this.si(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return L.or([()=>L.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Jo{constructor(e,t){this.persistence=e,this.oi=new dr(r=>CC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=BP(this,t)}static ri(e,t){return new Jo(e,t)}Zr(){}Xr(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return L.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?L.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,t).next(c=>{c||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),L.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Io(e.data.value)),t}ar(e,t,r){return L.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=te(),i=te();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ku(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return bI()?8:SC(Me())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.rs(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XP;return this._s(e,t,o).next(c=>{if(s.result=c,this.Xi)return this.us(e,t,o,c.size)})}).next(()=>s.result)}us(e,t,r,i){return r.documentReadCount<this.es?(Rr()<=ee.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),L.resolve()):(Rr()<=ee.DEBUG&&q("QueryEngine","Query:",Cr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Rr()<=ee.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):L.resolve())}rs(e,t){if(Uf(t))return L.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=pl(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.ns.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.cs(t,c);return this.ls(t,l,o,u.readTime)?this.rs(e,pl(t,null,"F")):this.hs(e,l,t,u)}))})))}ss(e,t,r,i){return Uf(t)||i.isEqual(Q.min())?L.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(t,s);return this.ls(t,o,r,i)?L.resolve(null):(Rr()<=ee.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cr(t)),this.hs(e,o,t,EC(i,hs)).next(c=>c))})}cs(e,t){let r=new Be(yy(e));return t.forEach((i,s)=>{Ma(e,s)&&(r=r.add(s))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,r){return Rr()<=ee.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Cr(t)),this.ns.getDocumentsMatchingQuery(e,t,Ln.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="LocalStore",ek=3e8;class tk{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new Ee(ne),this.Is=new dr(s=>Eu(s),Tu),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qP(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function nk(n,e,t,r){return new tk(n,e,t,r)}async function $y(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=te();for(const l of i){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of s){c.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(l=>({Rs:l,removedBatchIds:o,addedBatchIds:c}))})})}function rk(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,l,d){const f=l.batch,g=f.keys();let v=L.resolve();return g.forEach(y=>{v=v.next(()=>d.getEntry(u,y)).next(T=>{const S=l.docVersions.get(y);ae(S!==null),T.version.compareTo(S)<0&&(f.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),d.addEntry(T)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(u,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=te();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function jy(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function ik(n,e){const t=J(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const c=[];e.targetChanges.forEach((d,f)=>{const g=i.get(f);if(!g)return;c.push(t.Hr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Hr.addMatchingKeys(s,d.addedDocuments,f)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Ke.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(T,S,C){return T.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=ek?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,v,d)&&c.push(t.Hr.updateTargetData(s,v))});let u=pn(),l=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),c.push(sk(s,o,e.documentUpdates).next(d=>{u=d.Vs,l=d.fs})),!r.isEqual(Q.min())){const d=t.Hr.getLastRemoteSnapshotVersion(s).next(f=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(d)}return L.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(t.Ts=i,s))}function sk(n,e,t){let r=te(),i=te();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=pn();return t.forEach((c,u)=>{const l=s.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):q(Ou,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),{Vs:o,fs:i}})}function ok(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_u),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ak(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):t.Hr.allocateTargetId(r).next(o=>(i=new bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function vl(n,e,t){const r=J(n),i=r.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!li(o))throw o;q(Ou,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function Xf(n,e,t){const r=J(n);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,d){const f=J(u),g=f.Is.get(d);return g!==void 0?L.resolve(f.Ts.get(g)):f.Hr.getTargetData(l,d)}(r,o,Kt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,t?i:Q.min(),t?s:te())).next(c=>(ck(r,GC(e),c),{documents:c,gs:s})))}function ck(n,e,t){let r=n.Es.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Es.set(e,r)}class Zf{constructor(){this.activeTargetIds=ZC()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lk{constructor(){this.ho=new Zf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Zf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="ConnectivityMonitor";class tp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){q(ep,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){q(ep,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao=null;function wl(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="RestConnection",hk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dk{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===zo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,s){const o=wl(),c=this.bo(e,t.toUriEncodedString());q(Mc,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,c,u,r).then(l=>(q(Mc,`Received RPC '${e}' ${o}: `,l),l),l=>{throw Gr(Mc,`RPC '${e}' ${o} failed with error: `,l,"url: ",c,"request:",r),l})}Co(e,t,r,i,s,o){return this.So(e,t,r,i,s)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ai}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,t){const r=hk[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class pk extends dk{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=wl();return new Promise((o,c)=>{const u=new Wg;u.setWithCredentials(!0),u.listenOnce(Gg.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case To.NO_ERROR:const d=u.getResponseJson();q(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case To.TIMEOUT:q(Xe,`RPC '${e}' ${s} timed out`),c(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const f=u.getStatus();if(q(Xe,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const y=function(S){const C=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(C)>=0?C:M.UNKNOWN}(v.status);c(new z(y,v.message))}else c(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new z(M.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(Xe,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);q(Xe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",l,r,15)})}Wo(e,t,r){const i=wl(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jg(),c=Qg(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(Xe,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let g=!1,v=!1;const y=new fk({Fo:S=>{v?q(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(g||(q(Xe,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),q(Xe,`RPC '${e}' stream ${i} sending:`,S),f.send(S))},Mo:()=>f.close()}),T=(S,C,N)=>{S.listen(C,x=>{try{N(x)}catch(V){setTimeout(()=>{throw V},0)}})};return T(f,Bi.EventType.OPEN,()=>{v||(q(Xe,`RPC '${e}' stream ${i} transport opened.`),y.Qo())}),T(f,Bi.EventType.CLOSE,()=>{v||(v=!0,q(Xe,`RPC '${e}' stream ${i} transport closed`),y.Ko())}),T(f,Bi.EventType.ERROR,S=>{v||(v=!0,Gr(Xe,`RPC '${e}' stream ${i} transport errored:`,S),y.Ko(new z(M.UNAVAILABLE,"The operation could not be completed")))}),T(f,Bi.EventType.MESSAGE,S=>{var C;if(!v){const N=S.data[0];ae(!!N);const x=N,V=(x==null?void 0:x.error)||((C=x[0])===null||C===void 0?void 0:C.error);if(V){q(Xe,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let B=function(E){const m=Ne[E];if(m!==void 0)return Py(m)}(F),b=V.message;B===void 0&&(B=M.INTERNAL,b="Unknown error status: "+F+" with message "+V.message),v=!0,y.Ko(new z(B,b)),f.close()}else q(Xe,`RPC '${e}' stream ${i} received:`,N),y.Uo(N)}}),T(c,Kg.STAT_EVENT,S=>{S.stat===cl.PROXY?q(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===cl.NOPROXY&&q(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.$o()},0),y}}function Fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n){return new _P(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="PersistentStream";class zy{constructor(e,t,r,i,s,o,c,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new qy(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(fn(t.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return q(np,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(q(np,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mk extends zy{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=EP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Qt(o.readTime):Q.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=_l(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=dl(u)?{documents:bP(s,u)}:{query:AP(s,u).ht},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Ny(s,o.resumeToken);const l=ml(s,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=Qo(s,o.snapshotVersion.toTimestamp());const l=ml(s,o.expectedCount);l!==null&&(c.expectedCount=l)}return c}(this.serializer,e);const r=RP(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=_l(this.serializer),t.removeTarget=e,this.I_(t)}}class gk extends zy{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=IP(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=_l(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>TP(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{}class _k extends yk{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,gl(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Co(e,t,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Co(e,gl(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class vk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(fn(t),this.N_=!1):q("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="RemoteStore";class wk{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{pr(this)&&(q(ar,"Restarting streams for network reachability change."),await async function(u){const l=J(u);l.W_.add(4),await xs(l),l.j_.set("Unknown"),l.W_.delete(4),await ja(l)}(this))})}),this.j_=new vk(r,i)}}async function ja(n){if(pr(n))for(const e of n.G_)await e(!0)}async function xs(n){for(const e of n.G_)await e(!1)}function Hy(n,e){const t=J(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Vu(t)?xu(t):hi(t).c_()&&Du(t,e))}function Nu(n,e){const t=J(n),r=hi(t);t.U_.delete(e),r.c_()&&Wy(t,e),t.U_.size===0&&(r.c_()?r.P_():pr(t)&&t.j_.set("Unknown"))}function Du(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hi(n).y_(e)}function Wy(n,e){n.H_.Ne(e),hi(n).w_(e)}function xu(n){n.H_=new pP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),hi(n).start(),n.j_.B_()}function Vu(n){return pr(n)&&!hi(n).u_()&&n.U_.size>0}function pr(n){return J(n).W_.size===0}function Gy(n){n.H_=void 0}async function Ek(n){n.j_.set("Online")}async function Tk(n){n.U_.forEach((e,t)=>{Du(n,e)})}async function Ik(n,e){Gy(n),Vu(n)?(n.j_.q_(e),xu(n)):n.j_.set("Unknown")}async function bk(n,e,t){if(n.j_.set("Online"),e instanceof Oy&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.U_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.U_.delete(c),i.H_.removeTarget(c))}(n,e)}catch(r){q(ar,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yo(n,r)}else if(e instanceof So?n.H_.We(e):e instanceof ky?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Q.min()))try{const r=await jy(n.localStore);t.compareTo(r)>=0&&await function(s,o){const c=s.H_.ot(o);return c.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.U_.get(l);d&&s.U_.set(l,d.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,l)=>{const d=s.U_.get(u);if(!d)return;s.U_.set(u,d.withResumeToken(Ke.EMPTY_BYTE_STRING,d.snapshotVersion)),Wy(s,u);const f=new bn(d.target,u,l,d.sequenceNumber);Du(s,f)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){q(ar,"Failed to raise snapshot:",r),await Yo(n,r)}}async function Yo(n,e,t){if(!li(e))throw e;n.W_.add(1),await xs(n),n.j_.set("Offline"),t||(t=()=>jy(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(ar,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ja(n)})}function Ky(n,e){return e().catch(t=>Yo(n,t,e))}async function qa(n){const e=J(n),t=Bn(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:_u;for(;Ak(e);)try{const i=await ok(e.localStore,r);if(i===null){e.K_.length===0&&t.P_();break}r=i.batchId,Sk(e,i)}catch(i){await Yo(e,i)}Qy(e)&&Jy(e)}function Ak(n){return pr(n)&&n.K_.length<10}function Sk(n,e){n.K_.push(e);const t=Bn(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Qy(n){return pr(n)&&!Bn(n).u_()&&n.K_.length>0}function Jy(n){Bn(n).start()}async function Rk(n){Bn(n).C_()}async function Ck(n){const e=Bn(n);for(const t of n.K_)e.b_(t.mutations)}async function Pk(n,e,t){const r=n.K_.shift(),i=Au.from(r,e,t);await Ky(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await qa(n)}async function kk(n,e){e&&Bn(n).S_&&await async function(r,i){if(function(o){return hP(o)&&o!==M.ABORTED}(i.code)){const s=r.K_.shift();Bn(r).h_(),await Ky(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qa(r)}}(n,e),Qy(n)&&Jy(n)}async function rp(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),q(ar,"RemoteStore received new credentials");const r=pr(t);t.W_.add(3),await xs(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ja(t)}async function Ok(n,e){const t=J(n);e?(t.W_.delete(2),await ja(t)):e||(t.W_.add(2),await xs(t),t.j_.set("Unknown"))}function hi(n){return n.J_||(n.J_=function(t,r,i){const s=J(t);return s.M_(),new mk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:Ek.bind(null,n),No:Tk.bind(null,n),Lo:Ik.bind(null,n),p_:bk.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Vu(n)?xu(n):n.j_.set("Unknown")):(await n.J_.stop(),Gy(n))})),n.J_}function Bn(n){return n.Y_||(n.Y_=function(t,r,i){const s=J(t);return s.M_(),new gk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Rk.bind(null,n),Lo:kk.bind(null,n),D_:Ck.bind(null,n),v_:Pk.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await qa(n)):(await n.Y_.stop(),n.K_.length>0&&(q(ar,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Lu(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mu(n,e){if(fn("AsyncQueue",`${e}: ${n}`),li(n))return new z(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{static emptySet(e){return new Fr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=$i(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.Z_=new Ee(H.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):K():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Xr{constructor(e,t,r,i,s,o,c,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Xr(e,t,Fr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&La(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Dk{constructor(){this.queries=sp(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=sp(),s.forEach((o,c)=>{for(const u of c.ta)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function sp(){return new dr(n=>gy(n),La)}async function xk(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new Nk,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Mu(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&Fu(t)}async function Vk(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Lk(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.ta)c.oa(i)&&(r=!0);o.ea=i}}r&&Fu(t)}function Mk(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(t);r.queries.delete(e)}function Fu(n){n.ia.forEach(e=>{e.next()})}var El,op;(op=El||(El={}))._a="default",op.Cache="cache";class Fk{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==El.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.key=e}}class Xy{constructor(e){this.key=e}}class Uk{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=te(),this.mutatedKeys=te(),this.ya=yy(e),this.wa=new Fr(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new ip,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const g=i.get(d),v=Ma(this.query,f)?f:null,y=!!g&&this.mutatedKeys.has(g.key),T=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let S=!1;g&&v?g.data.isEqual(v.data)?y!==T&&(r.track({type:3,doc:v}),S=!0):this.va(g,v)||(r.track({type:2,doc:v}),S=!0,(u&&this.ya(v,u)>0||l&&this.ya(v,l)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),S=!0):g&&!v&&(r.track({type:1,doc:g}),S=!0,(u||l)&&(c=!0)),S&&(v?(o=o.add(v),s=T?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:c,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,f)=>function(v,y){const T=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return T(v)-T(y)}(d.type,f.type)||this.ya(d.doc,f.doc)),this.Ca(r),i=i!=null&&i;const c=t&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,l=u!==this.ga;return this.ga=u,o.length!==0||l?{snapshot:new Xr(this.query,e.wa,s,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ip,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=te(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Xy(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new Yy(r))}),t}Oa(e){this.fa=e.gs,this.pa=te();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Xr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Uu="SyncEngine";class Bk{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $k{constructor(e){this.key=e,this.Ba=!1}}class jk{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new dr(c=>gy(c),La),this.qa=new Map,this.Qa=new Set,this.$a=new Ee(H.comparator),this.Ka=new Map,this.Ua=new Cu,this.Wa={},this.Ga=new Map,this.za=Yr.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function qk(n,e,t=!0){const r=i_(n);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Zy(r,e,t,!0),i}async function zk(n,e){const t=i_(n);await Zy(t,e,!0,!1)}async function Zy(n,e,t,r){const i=await ak(n.localStore,Kt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await Hk(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Hy(n.remoteStore,i),c}async function Hk(n,e,t,r,i){n.Ha=(f,g,v)=>async function(T,S,C,N){let x=S.view.ba(C);x.ls&&(x=await Xf(T.localStore,S.query,!1).then(({documents:b})=>S.view.ba(b,x)));const V=N&&N.targetChanges.get(S.targetId),F=N&&N.targetMismatches.get(S.targetId)!=null,B=S.view.applyChanges(x,T.isPrimaryClient,V,F);return cp(T,S.targetId,B.Ma),B.snapshot}(n,f,g,v);const s=await Xf(n.localStore,e,!0),o=new Uk(e,s.gs),c=o.ba(s.documents),u=Ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(c,n.isPrimaryClient,u);cp(n,t,l.Ma);const d=new Bk(e,t,o);return n.ka.set(e,d),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),l.snapshot}async function Wk(n,e,t){const r=J(n),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!La(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vl(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Nu(r.remoteStore,i.targetId),Tl(r,i.targetId)}).catch(ci)):(Tl(r,i.targetId),await vl(r.localStore,i.targetId,!0))}async function Gk(n,e){const t=J(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Nu(t.remoteStore,r.targetId))}async function Kk(n,e,t){const r=t1(n);try{const i=await function(o,c){const u=J(o),l=Ue.now(),d=c.reduce((v,y)=>v.add(y.key),te());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let y=pn(),T=te();return u.ds.getEntries(v,d).next(S=>{y=S,y.forEach((C,N)=>{N.isValidDocument()||(T=T.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,y)).next(S=>{f=S;const C=[];for(const N of c){const x=oP(N,f.get(N.key).overlayedDocument);x!=null&&C.push(new fr(N.key,x,cy(x.value.mapValue),cn.exists(!0)))}return u.mutationQueue.addMutationBatch(v,l,C,c)}).next(S=>{g=S;const C=S.applyToLocalDocumentSet(f,T);return u.documentOverlayCache.saveOverlays(v,S.batchId,C)})}).then(()=>({batchId:g.batchId,changes:vy(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let l=o.Wa[o.currentUser.toKey()];l||(l=new Ee(ne)),l=l.insert(c,u),o.Wa[o.currentUser.toKey()]=l}(r,i.batchId,t),await Vs(r,i.changes),await qa(r.remoteStore)}catch(i){const s=Mu(i,"Failed to persist write");t.reject(s)}}async function e_(n,e){const t=J(n);try{const r=await ik(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Ka.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?ae(o.Ba):i.removedDocuments.size>0&&(ae(o.Ba),o.Ba=!1))}),await Vs(t,r,e)}catch(r){await ci(r)}}function ap(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((s,o)=>{const c=o.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=J(o);u.onlineState=c;let l=!1;u.queries.forEach((d,f)=>{for(const g of f.ta)g.sa(c)&&(l=!0)}),l&&Fu(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qk(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ka.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,tt.newNoDocument(s,Q.min()));const c=te().add(s),u=new Ba(Q.min(),new Map,new Ee(ne),o,c);await e_(r,u),r.$a=r.$a.remove(s),r.Ka.delete(e),Bu(r)}else await vl(r.localStore,e,!1).then(()=>Tl(r,e,t)).catch(ci)}async function Jk(n,e){const t=J(n),r=e.batch.batchId;try{const i=await rk(t.localStore,e);n_(t,r,null),t_(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vs(t,i)}catch(i){await ci(i)}}async function Yk(n,e,t){const r=J(n);try{const i=await function(o,c){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return u.mutationQueue.lookupMutationBatch(l,c).next(f=>(ae(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(l,f))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>u.localDocuments.getDocuments(l,d))})}(r.localStore,e);n_(r,e,t),t_(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vs(r,i)}catch(i){await ci(i)}}function t_(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function n_(n,e,t){const r=J(n);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Tl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(r=>{n.Ua.containsKey(r)||r_(n,r)})}function r_(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Nu(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),Bu(n))}function cp(n,e,t){for(const r of t)r instanceof Yy?(n.Ua.addReference(r.key,e),Xk(n,r)):r instanceof Xy?(q(Uu,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,e),n.Ua.containsKey(r.key)||r_(n,r.key)):K()}function Xk(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(q(Uu,"New document in limbo: "+t),n.Qa.add(r),Bu(n))}function Bu(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new H(ge.fromString(e)),r=n.za.next();n.Ka.set(r,new $k(t)),n.$a=n.$a.insert(t,r),Hy(n.remoteStore,new bn(Kt(Iu(t.path)),r,"TargetPurposeLimboResolution",Da.ae))}}async function Vs(n,e,t){const r=J(n),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{o.push(r.Ha(u,e,t).then(l=>{var d;if((l||t)&&r.isPrimaryClient){const f=l?!l.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(l){i.push(l);const f=ku.Yi(u.targetId,l);s.push(f)}}))}),await Promise.all(o),r.La.p_(i),await async function(u,l){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>L.forEach(l,g=>L.forEach(g.Hi,v=>d.persistence.referenceDelegate.addReference(f,g.targetId,v)).next(()=>L.forEach(g.Ji,v=>d.persistence.referenceDelegate.removeReference(f,g.targetId,v)))))}catch(f){if(!li(f))throw f;q(Ou,"Failed to update sequence numbers: "+f)}for(const f of l){const g=f.targetId;if(!f.fromCache){const v=d.Ts.get(g),y=v.snapshotVersion,T=v.withLastLimboFreeSnapshotVersion(y);d.Ts=d.Ts.insert(g,T)}}}(r.localStore,s))}async function Zk(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){q(Uu,"User change. New user:",e.toKey());const r=await $y(t.localStore,e);t.currentUser=e,function(s,o){s.Ga.forEach(c=>{c.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vs(t,r.Rs)}}function e1(n,e){const t=J(n),r=t.Ka.get(e);if(r&&r.Ba)return te().add(r.key);{let i=te();const s=t.qa.get(e);if(!s)return i;for(const o of s){const c=t.ka.get(o);i=i.unionWith(c.view.Sa)}return i}}function i_(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=e_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=e1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qk.bind(null,e),e.La.p_=Lk.bind(null,e.eventManager),e.La.Ja=Mk.bind(null,e.eventManager),e}function t1(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yk.bind(null,e),e}class Xo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$a(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return nk(this.persistence,new ZP,e.initialUser,this.serializer)}Xa(e){return new By(Pu.ri,this.serializer)}Za(e){return new lk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xo.provider={build:()=>new Xo};class n1 extends Xo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ae(this.persistence.referenceDelegate instanceof Jo);const r=this.persistence.referenceDelegate.garbageCollector;return new FP(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new By(r=>Jo.ri(r,t),this.serializer)}}class Il{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ap(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zk.bind(null,this.syncEngine),await Ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dk}()}createDatastore(e){const t=$a(e.databaseInfo.databaseId),r=function(s){return new pk(s)}(e.databaseInfo);return function(s,o,c,u){return new _k(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new wk(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ap(this.syncEngine,t,0),function(){return tp.D()?new tp:new uk}())}createSyncEngine(e,t){return function(i,s,o,c,u,l,d){const f=new jk(i,s,o,c,u,l);return d&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=J(i);q(ar,"RemoteStore shutting down."),s.W_.add(5),await xs(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Il.provider={build:()=>new Il};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="FirestoreClient";class i1{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q($n,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q($n,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Mu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(n,e){n.asyncQueue.verifyOperationInProgress(),q($n,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $y(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function lp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await s1(n);q($n,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>rp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>rp(e.remoteStore,i)),n._onlineComponents=e}async function s1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q($n,"Using user provided OfflineComponentProvider");try{await Uc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Gr("Error using user provided cache. Falling back to memory cache: "+t),await Uc(n,new Xo)}}else q($n,"Using default OfflineComponentProvider"),await Uc(n,new n1(void 0));return n._offlineComponents}async function s_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q($n,"Using user provided OnlineComponentProvider"),await lp(n,n._uninitializedComponentsProvider._online)):(q($n,"Using default OnlineComponentProvider"),await lp(n,new Il))),n._onlineComponents}function o1(n){return s_(n).then(e=>e.syncEngine)}async function up(n){const e=await s_(n),t=e.eventManager;return t.onListen=qk.bind(null,e.syncEngine),t.onUnlisten=Wk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Gk.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n,e,t){if(!t)throw new z(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function a1(n,e,t,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dp(n){if(!H.isDocumentKey(n))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function fp(n){if(H.isDocumentKey(n))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function za(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function Ur(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=za(n);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firestore.googleapis.com",pp=!0;class mp{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=c_,this.ssl=pp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:pp;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LP)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=o_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ha{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fC;switch(r.type){case"firstParty":return new yC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hp.get(t);r&&(q("ComponentProvider","Removing Datastore"),hp.delete(t),r.terminate())}(this),Promise.resolve()}}function c1(n,e,t,r={}){var i;const s=(n=Ur(n,Ha))._getSettings(),o=`${e}:${t}`;if(s.host!==c_&&s.host!==o&&Gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=et.MOCK_USER;else{c=wI(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(l)}n._authCredentials=new pC(new Yg(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mr(this.firestore,e,this._query)}}class ht{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class Pn extends mr{constructor(e,t,r){super(e,t,Iu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new H(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function eN(n,e,...t){if(n=Z(n),a_("collection","path",e),n instanceof Ha){const r=ge.fromString(e,...t);return fp(r),new Pn(n,null,r)}{if(!(n instanceof ht||n instanceof Pn))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return fp(r),new Pn(n.firestore,null,r)}}function tN(n,e,...t){if(n=Z(n),arguments.length===1&&(e=Xg.newId()),a_("doc","path",e),n instanceof Ha){const r=ge.fromString(e,...t);return dp(r),new ht(n,null,new H(r))}{if(!(n instanceof ht||n instanceof Pn))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return dp(r),new ht(n.firestore,n instanceof Pn?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="AsyncQueue";class yp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new qy(this,"async_queue_retry"),this.Su=()=>{const r=Fc();r&&q(gp,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Fc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Fc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new nr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!li(e))throw e;q(gp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=Lu.createAndSchedule(this,e,t,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&K()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function _p(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Zo extends Ha{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new yp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yp(e),this._firestoreClient=void 0,await e}}}function nN(n,e){const t=typeof n=="object"?n:Yl(),r=typeof n=="string"?n:zo,i=bs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_I("firestore");s&&c1(i,...s)}return i}function l_(n){if(n._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||l1(n),n._firestoreClient}function l1(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,l,d){return new OC(c,u,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,o_(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new i1(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(Ke.fromBase64String(e))}catch(t){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zr(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=/^__.*__$/;class h1{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}}function h_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class zu{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new zu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ea(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(h_(this.Lu)&&u1.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class d1{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$a(e)}ju(e,t,r,i=!1){return new zu({Lu:e,methodName:t,zu:r,path:Ge.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function d_(n){const e=n._freezeSettings(),t=$a(n._databaseId);return new d1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function f1(n,e,t,r,i,s={}){const o=n.ju(s.merge||s.mergeFields?2:0,e,t,i);m_("Data must be an object, but it was:",o,r);const c=f_(r,o);let u,l;if(s.merge)u=new kt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const g=m1(e,f,t);if(!o.contains(g))throw new z(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);y1(d,g)||d.push(g)}u=new kt(d),l=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,l=o.fieldTransforms;return new h1(new bt(c),u,l)}function p1(n,e,t,r=!1){return Hu(t,n.ju(r?4:3,e))}function Hu(n,e){if(p_(n=Z(n)))return m_("Unsupported field value:",e,n),f_(n,e);if(n instanceof u_)return function(r,i){if(!h_(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=Hu(c,i.Uu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Qo(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qo(i.serializer,s)}}if(r instanceof ju)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:Ny(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ru(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qu)return function(o,c){return{mapValue:{fields:{[oy]:{stringValue:ay},[Ho]:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Wu("VectorValues must only contain numeric values.");return bu(c.serializer,l)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${za(r)}`)}(n,e)}function f_(n,e){const t={};return ey(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(n,(r,i)=>{const s=Hu(i,e.qu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function p_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof ju||n instanceof Zr||n instanceof ht||n instanceof u_||n instanceof qu)}function m_(n,e,t){if(!p_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=za(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function m1(n,e,t){if((e=Z(e))instanceof $u)return e._internalPath;if(typeof e=="string")return g_(n,e);throw ea("Field path arguments must be of type string or ",n,!1,void 0,t)}const g1=new RegExp("[~\\*/\\[\\]]");function g_(n,e,t){if(e.search(g1)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $u(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ea(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(M.INVALID_ARGUMENT,c+n+u)}function y1(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _1 extends y_{data(){return super.data()}}function Wu(n,e){return typeof e=="string"?g_(n,e):e instanceof $u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gu{}class __ extends Gu{}function rN(n,e,...t){let r=[];e instanceof Gu&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof Qu).length,c=s.filter(u=>u instanceof Ku).length;if(o>1||o>0&&c>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ku extends __{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ku(e,t,r)}_apply(e){const t=this._parse(e);return v_(e._query,t),new mr(e.firestore,e.converter,fl(e._query,t))}_parse(e){const t=d_(e.firestore);return function(s,o,c,u,l,d,f){let g;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){wp(f,d);const y=[];for(const T of f)y.push(vp(u,s,T));g={arrayValue:{values:y}}}else g=vp(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||wp(f,d),g=p1(c,o,f,d==="in"||d==="not-in");return Ve.create(l,d,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Qu extends Gu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Dt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)v_(o,u),o=fl(o,u)}(e._query,t),new mr(e.firestore,e.converter,fl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ju extends __{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ju(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ms(s,o)}(e._query,this._field,this._direction);return new mr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ui(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function iN(n,e="asc"){const t=e,r=Wu("orderBy",n);return Ju._create(r,t)}function vp(n,e,t){if(typeof(t=Z(t))=="string"){if(t==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!my(e)&&t.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!H.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Df(n,new H(r))}if(t instanceof ht)return Df(n,t._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${za(t)}.`)}function wp(n,e){if(!Array.isArray(n)||n.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function v_(n,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class w1{convertValue(e,t="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return hr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Ho].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new qu(s)}convertGeoPoint(e){return new ju(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Va(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const t=Mn(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);ae(Fy(r));const i=new fs(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w_ extends y_{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ro extends w_{data(e={}){return super.data(e)}}class T1{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ro(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new Ro(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Ro(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:I1(c.type),doc:u,oldIndex:l,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function I1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class E_ extends w1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function sN(n,e,t){n=Ur(n,ht);const r=Ur(n.firestore,Zo),i=E1(n.converter,e);return b1(r,[f1(d_(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,cn.none())])}function oN(n,...e){var t,r,i;n=Z(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||_p(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(_p(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,l,d;if(n instanceof ht)l=Ur(n.firestore,Zo),d=Iu(n._key.path),u={next:f=>{e[o]&&e[o](A1(l,n,f))},error:e[o+1],complete:e[o+2]};else{const f=Ur(n,mr);l=Ur(f.firestore,Zo),d=f._query;const g=new E_(l);u={next:v=>{e[o]&&e[o](new T1(l,g,f,v))},error:e[o+1],complete:e[o+2]},v1(n._query)}return function(g,v,y,T){const S=new r1(T),C=new Fk(v,S,y);return g.asyncQueue.enqueueAndForget(async()=>xk(await up(g),C)),()=>{S.su(),g.asyncQueue.enqueueAndForget(async()=>Vk(await up(g),C))}}(l_(l),d,c,u)}function b1(n,e){return function(r,i){const s=new nr;return r.asyncQueue.enqueueAndForget(async()=>Kk(await o1(r),i,s)),s.promise}(l_(n),e)}function A1(n,e,t){const r=t.docs.get(e._key),i=new E_(n);return new w_(n,i,e._key,r,new qi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){ai=i})(jn),xn(new un("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new Zo(new mC(r.getProvider("auth-internal")),new _C(o,r.getProvider("app-check-internal")),function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(l.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ot(Tf,If,e),Ot(Tf,If,"esm2017")})();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=2e3;async function R1(n,e,t){var r;const{BuildInfo:i}=cr();Nt(e.sessionId,"AuthEvent did not contain a session ID");const s=await N1(e.sessionId),o={};return Rs()?o.ibi=i.packageName:Ss()?o.apn=i.packageName:qe(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,al(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function C1(n){const{BuildInfo:e}=cr(),t={};Rs()?t.iosBundleId=e.packageName:Ss()?t.androidPackageName=e.packageName:qe(n,"operation-not-supported-in-this-environment"),await jg(n,t)}function P1(n){const{cordova:e}=cr();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,vA()?"_blank":"_system","location=yes"),t(i)})})}async function k1(n,e,t){const{cordova:r}=cr();let i=()=>{};try{await new Promise((s,o)=>{let c=null;function u(){var f;s();const g=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof g=="function"&&g(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){c||(c=window.setTimeout(()=>{o(Fe(n,"redirect-cancelled-by-user"))},S1))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Ss()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",d,!1),c&&window.clearTimeout(c)}})}finally{i()}}function O1(n){var e,t,r,i,s,o,c,u,l,d;const f=cr();U(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),U(typeof((t=f==null?void 0:f.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),U(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),U(typeof((u=(c=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||c===void 0?void 0:c.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),U(typeof((d=(l=f==null?void 0:f.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function N1(n){const e=D1(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function D1(n){if(Nt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=20;class V1 extends Bg{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function L1(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:U1(),postBody:null,tenantId:n.tenantId,error:Fe(n,"no-auth-event")}}function M1(n,e){return bl()._set(Al(n),e)}async function Ep(n){const e=await bl()._get(Al(n));return e&&await bl()._remove(Al(n)),e}function F1(n,e){var t,r;const i=$1(e);if(i.includes("/__/auth/callback")){const s=Co(i),o=s.firebaseError?B1(decodeURIComponent(s.firebaseError)):null,c=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],u=c?Fe(c):null;return u?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function U1(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<x1;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function bl(){return yt(Ca)}function Al(n){return er("authEvent",n.config.apiKey,n.name)}function B1(n){try{return JSON.parse(n)}catch{return null}}function $1(n){const e=Co(n),t=e.link?decodeURIComponent(e.link):void 0,r=Co(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Co(i).link||i||r||t||n}function Co(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Or(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=500;class q1{constructor(){this._redirectPersistence=Vn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Na,this._overrideRedirectResult=mu}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new V1(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){qe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){O1(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),IR(),await this._originValidation(e);const o=L1(e,r,i);await M1(e,o);const c=await R1(e,o,t),u=await P1(c);return k1(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=C1(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=cr(),o=setTimeout(async()=>{await Ep(e),t.onEvent(Tp())},j1),c=async d=>{clearTimeout(o);const f=await Ep(e);let g=null;f&&(d!=null&&d.url)&&(g=F1(f,d.url)),t.onEvent(g||Tp())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,c);const u=i,l=`${s.packageName.toLowerCase()}://`;cr().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(l)&&c({url:d}),typeof u=="function")try{u(d)}catch(f){console.error(f)}}}}const z1=q1;function Tp(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Fe("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(n,e){we(n)._logFramework(e)}var W1="@firebase/auth-compat",G1="0.5.18";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=1e3;function es(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function Q1(){return es()==="http:"||es()==="https:"}function T_(n=Me()){return!!((es()==="file:"||es()==="ionic:"||es()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function J1(){return Gl()||Wl()}function Y1(){return Mm()&&(document==null?void 0:document.documentMode)===11}function X1(n=Me()){return/Edge\/\d+/.test(n)}function Z1(n=Me()){return Y1()||X1(n)}function I_(){try{const n=self.localStorage,e=ks();if(n)return n.setItem(e,"1"),n.removeItem(e),Z1()?Vo():!0}catch{return Yu()&&Vo()}return!1}function Yu(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Bc(){return(Q1()||Lm()||T_())&&!J1()&&I_()&&!Yu()}function b_(){return T_()&&typeof document<"u"}async function eO(){return b_()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},K1);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function tO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={LOCAL:"local",NONE:"none",SESSION:"session"},Ni=U,A_="persistence";function nO(n,e){if(Ni(Object.values(mt).includes(e),n,"invalid-persistence-type"),Gl()){Ni(e!==mt.SESSION,n,"unsupported-persistence-type");return}if(Wl()){Ni(e===mt.NONE,n,"unsupported-persistence-type");return}if(Yu()){Ni(e===mt.NONE||e===mt.LOCAL&&Vo(),n,"unsupported-persistence-type");return}Ni(e===mt.NONE||I_(),n,"unsupported-persistence-type")}async function Sl(n){await n._initializationPromise;const e=S_(),t=er(A_,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function rO(n,e){const t=S_();if(!t)return[];const r=er(A_,n,e);switch(t.getItem(r)){case mt.NONE:return[zr];case mt.LOCAL:return[Wr,Vn];case mt.SESSION:return[Vn];default:return[]}}function S_(){var n;try{return((n=tO())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=U;class An{constructor(){this.browserResolver=yt(qg),this.cordovaResolver=yt(z1),this.underlyingResolver=null,this._redirectPersistence=Vn,this._completeRedirectFn=Na,this._overrideRedirectResult=mu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b_()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return iO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await eO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n){return n.unwrap()}function sO(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(n){return C_(n)}function aO(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new cO(n,FS(n,e))}else if(r){const i=C_(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function C_(n){const{_tokenResponse:e}=n instanceof at?n.customData:n;if(!e)return null;if(!(n instanceof at)&&"temporaryProof"in e&&"phoneNumber"in e)return sr.credentialFromResult(n);const t=e.providerId;if(!t||t===ki.PASSWORD)return null;let r;switch(t){case ki.GOOGLE:r=qt;break;case ki.FACEBOOK:r=jt;break;case ki.GITHUB:r=zt;break;case ki.TWITTER:r=Ht;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:c,nonce:u}=e;return!s&&!o&&!i&&!c?null:c?t.startsWith("saml.")?Hr._create(t,c):Jt._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:i,accessToken:s}):new Lr(t).credential({idToken:i,accessToken:s,rawNonce:u})}return n instanceof at?r.credentialFromError(n):r.credentialFromResult(n)}function lt(n,e){return e.catch(t=>{throw t instanceof at&&aO(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:oO(t),additionalUserInfo:VS(t),user:on.getOrCreate(i)}})}async function Rl(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>lt(n,t.confirm(r))}}class cO{constructor(e,t){this.resolver=t,this.auth=sO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return lt(R_(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._delegate=e,this.multiFactor=$S(e)}static getOrCreate(e){return on.USER_MAP.has(e)||on.USER_MAP.set(e,new on(e)),on.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return lt(this.auth,Ag(this._delegate,e))}async linkWithPhoneNumber(e,t){return Rl(this.auth,uR(this._delegate,e,t))}async linkWithPopup(e){return lt(this.auth,vR(this._delegate,e,An))}async linkWithRedirect(e){return await Sl(we(this.auth)),CR(this._delegate,e,An)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return lt(this.auth,Sg(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Rl(this.auth,hR(this._delegate,e,t))}reauthenticateWithPopup(e){return lt(this.auth,_R(this._delegate,e,An))}async reauthenticateWithRedirect(e){return await Sl(we(this.auth)),SR(this._delegate,e,An)}sendEmailVerification(e){return bS(this._delegate,e)}async unlink(e){return await uS(this._delegate,e),this}updateEmail(e){return CS(this._delegate,e)}updatePassword(e){return PS(this._delegate,e)}updatePhoneNumber(e){return dR(this._delegate,e)}updateProfile(e){return RS(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return AS(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}on.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=U;class Cl{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Di(r,"invalid-api-key",{appName:e.name}),Di(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?An:void 0;this._delegate=t.initialize({options:{persistence:lO(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(eA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?on.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){yg(this._delegate,e,t)}applyActionCode(e){return mS(this._delegate,e)}checkActionCode(e){return Rg(this._delegate,e)}confirmPasswordReset(e,t){return pS(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return lt(this._delegate,yS(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return IS(this._delegate,e)}isSignInWithEmailLink(e){return wS(this._delegate,e)}async getRedirectResult(){Di(Bc(),this._delegate,"operation-not-supported-in-this-environment");const e=await kR(this._delegate,An);return e?lt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){H1(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=Ip(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=Ip(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return vS(this._delegate,e,t)}sendPasswordResetEmail(e,t){return fS(this._delegate,e,t||void 0)}async setPersistence(e){nO(this._delegate,e);let t;switch(e){case mt.SESSION:t=Vn;break;case mt.LOCAL:t=await yt(Wr)._isAvailable()?Wr:Ca;break;case mt.NONE:t=zr;break;default:return qe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return lt(this._delegate,lS(this._delegate))}signInWithCredential(e){return lt(this._delegate,Sa(this._delegate,e))}signInWithCustomToken(e){return lt(this._delegate,dS(this._delegate,e))}signInWithEmailAndPassword(e,t){return lt(this._delegate,_S(this._delegate,e,t))}signInWithEmailLink(e,t){return lt(this._delegate,ES(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Rl(this._delegate,lR(this._delegate,e,t))}async signInWithPopup(e){return Di(Bc(),this._delegate,"operation-not-supported-in-this-environment"),lt(this._delegate,yR(this._delegate,e,An))}async signInWithRedirect(e){return Di(Bc(),this._delegate,"operation-not-supported-in-this-environment"),await Sl(this._delegate),bR(this._delegate,e,An)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return gS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Cl.Persistence=mt;function Ip(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&on.getOrCreate(o)),error:e,complete:t}}function lO(n,e){const t=rO(n,e);if(typeof self<"u"&&!t.includes(Wr)&&t.push(Wr),typeof window<"u")for(const r of[Ca,Vn])t.includes(r)||t.push(r);return t.includes(zr)||t.push(zr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{static credential(e,t){return sr.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new sr(R_(Ea.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Xu.PHONE_SIGN_IN_METHOD=sr.PHONE_SIGN_IN_METHOD;Xu.PROVIDER_ID=sr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=U;class hO{constructor(e,t,r=Ea.app()){var i;uO((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new aR(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO="auth-compat";function fO(n){n.INTERNAL.registerComponent(new un(dO,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Cl(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Sr.EMAIL_SIGNIN,PASSWORD_RESET:Sr.PASSWORD_RESET,RECOVER_EMAIL:Sr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Sr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Sr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Sr.VERIFY_EMAIL}},EmailAuthProvider:qn,FacebookAuthProvider:jt,GithubAuthProvider:zt,GoogleAuthProvider:qt,OAuthProvider:Lr,SAMLAuthProvider:Uo,PhoneAuthProvider:Xu,PhoneMultiFactorGenerator:zg,RecaptchaVerifier:hO,TwitterAuthProvider:Ht,Auth:Cl,AuthCredential:si,Error:at}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(W1,G1)}fO(Ea);var P_="https://js.stripe.com",pO="".concat(P_,"/v3"),mO=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,gO=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;var yO=function(e){return mO.test(e)||gO.test(e)},_O=function(){for(var e=document.querySelectorAll('script[src^="'.concat(P_,'"]')),t=0;t<e.length;t++){var r=e[t];if(yO(r.src))return r}return null},bp=function(e){var t="",r=document.createElement("script");r.src="".concat(pO).concat(t);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},vO=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"5.7.0",startTime:t})},xi=null,co=null,lo=null,wO=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},EO=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}},TO=function(e){return xi!==null?xi:(xi=new Promise(function(t,r){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe){t(window.Stripe);return}try{var i=_O();if(!(i&&e)){if(!i)i=bp(e);else if(i&&lo!==null&&co!==null){var s;i.removeEventListener("load",lo),i.removeEventListener("error",co),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=bp(e)}}lo=EO(t,r),co=wO(r),i.addEventListener("load",lo),i.addEventListener("error",co)}catch(o){r(o);return}}),xi.catch(function(t){return xi=null,Promise.reject(t)}))},IO=function(e,t,r){if(e===null)return null;var i=e.apply(void 0,t);return vO(i,r),i},Vi,k_=!1,O_=function(){return Vi||(Vi=TO(null).catch(function(e){return Vi=null,Promise.reject(e)}),Vi)};Promise.resolve().then(function(){return O_()}).catch(function(n){k_||console.warn(n)});var aN=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];k_=!0;var i=Date.now();return O_().then(function(s){return IO(s,t,i)})};export{HO as P,GO as R,hv as a,SO as b,WO as c,Le as d,nN as e,Ea as f,YO as g,tN as h,eN as i,oN as j,_S as k,yS as l,aN as m,KO as n,iN as o,rN as q,AO as r,sN as s};
