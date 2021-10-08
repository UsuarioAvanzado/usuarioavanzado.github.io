(()=>{"use strict";function t(t,e,o,n){var i,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(s<3?i(r):s>3?i(e,o,r):i(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r}Object.create;Object.create;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new Map;class i{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,o,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1]),t[0]);return new i(n,o)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new i("string"==typeof t?t:t+"",o))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l,c,a,h;const d={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const n=this._$Eh(o,e);void 0!==n&&(this._$Eu.set(n,o),t.push(n))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style");o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$Eg(t,e,o=p){var n,i;const s=this.constructor._$Eh(t,o);if(void 0!==s&&!0===o.reflect){const r=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:d.toAttribute)(e,o.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var o,n,i;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),l=t.converter,c=null!==(i=null!==(n=null===(o=l)||void 0===o?void 0:o.fromAttribute)&&void 0!==n?n:"function"==typeof l?l:null)&&void 0!==i?i:d.fromAttribute;this._$Ei=r,this[r]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let n=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$E_()}catch(t){throw e=!1,this._$E_(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$E_(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$E_()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m,v,y,b;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null===(c=(l=globalThis).reactiveElementPlatformSupport)||void 0===c||c.call(l,{ReactiveElement:f}),(null!==(a=(h=globalThis).reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.0.0-rc.3");const g=globalThis.trustedTypes,$=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,A="?"+_,w=`<${A}>`,x=document,S=(t="")=>x.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,C=t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,z=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,T=/"/g,R=/^(?:script|style|textarea)$/i,j=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),H=j(1),M=(j(2),Symbol.for("lit-noChange")),B=Symbol.for("lit-nothing"),F=new WeakMap,I=x.createTreeWalker(x,129,null,!1),L=(t,e)=>{const o=t.length-1,n=[];let i,s=2===e?"<svg>":"",r=P;for(let e=0;e<o;e++){const o=t[e];let l,c,a=-1,h=0;for(;h<o.length&&(r.lastIndex=h,c=r.exec(o),null!==c);)h=r.lastIndex,r===P?"!--"===c[1]?r=O:void 0!==c[1]?r=z:void 0!==c[2]?(R.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=N):void 0!==c[3]&&(r=N):r===N?">"===c[0]?(r=null!=i?i:P,a=-1):void 0===c[1]?a=-2:(a=r.lastIndex-c[2].length,l=c[1],r=void 0===c[3]?N:'"'===c[3]?T:U):r===T||r===U?r=N:r===O||r===z?r=P:(r=N,i=void 0);const d=r===N&&t[e+1].startsWith("/>")?" ":"";s+=r===P?o+w:a>=0?(n.push(l),o.slice(0,a)+"$lit$"+o.slice(a)+_+d):o+_+(-2===a?(n.push(void 0),e):d)}const l=s+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==$?$.createHTML(l):l,n]};class q{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let i=0,s=0;const r=t.length-1,l=this.parts,[c,a]=L(t,e);if(this.el=q.createElement(c,o),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=I.nextNode())&&l.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const o=a[s++];if(t.push(e),void 0!==o){const t=n.getAttribute(o.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(o);l.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Z:"@"===e[1]?G:J})}else l.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(R.test(n.tagName)){const t=n.textContent.split(_),e=t.length-1;if(e>0){n.textContent=g?g.emptyScript:"";for(let o=0;o<e;o++)n.append(t[o],S()),I.nextNode(),l.push({type:2,index:++i});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===A)l.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(_,t+1));)l.push({type:7,index:i}),t+=_.length-1}i++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function D(t,e,o=t,n){var i,s,r,l;if(e===M)return e;let c=void 0!==n?null===(i=o._$Cl)||void 0===i?void 0:i[n]:o._$Cu;const a=E(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==a&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===a?c=void 0:(c=new a(t),c._$AT(t,o,n)),void 0!==n?(null!==(r=(l=o)._$Cl)&&void 0!==r?r:l._$Cl=[])[n]=c:o._$Cu=c),void 0!==c&&(e=D(t,c._$AS(t,e.values),c,n)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);I.currentNode=i;let s=I.nextNode(),r=0,l=0,c=n[0];for(;void 0!==c;){if(r===c.index){let e;2===c.type?e=new W(s,s.nextSibling,this,t):1===c.type?e=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(e=new Q(s,this,t)),this.v.push(e),c=n[++l]}r!==(null==c?void 0:c.index)&&(s=I.nextNode(),r++)}return i}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class W{constructor(t,e,o,n){this.type=2,this._$C_=!0,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){return this._$AA.parentNode}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),E(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.A(t):C(t)?this.M(t):this.$(t)}C(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}A(t){this._$AH!==t&&(this._$AR(),this._$AH=this.C(t))}$(t){const e=this._$AA.nextSibling;null!==e&&3===e.nodeType&&(null===this._$AB?null===e.nextSibling:e===this._$AB.previousSibling)?e.data=t:this.A(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=q.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(o);else{const t=new V(i,this),e=t.p(this.options);t.m(o),this.A(e),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new q(t)),e}M(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const i of t)n===e.length?e.push(o=new W(this.C(S()),this.C(S()),this,this.options)):o=e[n],o._$AI(i),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,o,n,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(B),this.strings=o):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const i=this.strings;let s=!1;if(void 0===i)t=D(this,t,e,0),s=!E(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{const n=t;let r,l;for(t=i[0],r=0;r<i.length-1;r++)l=D(this,n[o+r],e,r),l===M&&(l=this._$AH[r]),s||(s=!E(l)||l!==this._$AH[r]),l===B?t=B:t!==B&&(t+=(null!=l?l:"")+i[r+1]),this._$AH[r]=l}s&&!n&&this.P(t)}P(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends J{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===B?void 0:t}}class Z extends J{constructor(){super(...arguments),this.type=4}P(t){t&&t!==B?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class G extends J{constructor(){super(...arguments),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=D(this,t,e,0))&&void 0!==o?o:B)===M)return;const n=this._$AH,i=t===B&&n!==B||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==B&&(n===B||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,Y,tt,et,ot,nt;null===(v=(m=globalThis).litHtmlPlatformSupport)||void 0===v||v.call(m,q,W),(null!==(y=(b=globalThis).litHtmlVersions)&&void 0!==y?y:b.litHtmlVersions=[]).push("2.0.0-rc.4");class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();super.update(t),this._$Dt=((t,e,o)=>{var n,i;const s=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:e;let r=s._$litPart$;if(void 0===r){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=r=new W(e.insertBefore(S(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}it.finalized=!0,it._$litElement$=!0,null===(Y=(X=globalThis).litElementHydrateSupport)||void 0===Y||Y.call(X,{LitElement:it}),null===(et=(tt=globalThis).litElementPlatformSupport)||void 0===et||et.call(tt,{LitElement:it});(null!==(ot=(nt=globalThis).litElementVersions)&&void 0!==ot?ot:nt.litElementVersions=[]).push("3.0.0-rc.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function rt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):st(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function lt(t){return rt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=Element.prototype;ct.msMatchesSelector||ct.webkitMatchesSelector;function at(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var ht="function"==typeof Symbol&&Symbol.observable||"@@observable",dt=function(){return Math.random().toString(36).substring(7).split("").join(".")},ut={INIT:"@@redux/INIT"+dt(),REPLACE:"@@redux/REPLACE"+dt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+dt()}};function pt(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}const ft=function(t){for(var e=Object.keys(t),o={},n=0;n<e.length;n++){var i=e[n];0,"function"==typeof t[i]&&(o[i]=t[i])}var s,r=Object.keys(o);try{!function(t){Object.keys(t).forEach((function(e){var o=t[e];if(void 0===o(void 0,{type:ut.INIT}))throw new Error(at(12));if(void 0===o(void 0,{type:ut.PROBE_UNKNOWN_ACTION()}))throw new Error(at(13))}))}(o)}catch(t){s=t}return function(t,e){if(void 0===t&&(t={}),s)throw s;for(var n=!1,i={},l=0;l<r.length;l++){var c=r[l],a=o[c],h=t[c],d=a(h,e);if(void 0===d){e&&e.type;throw new Error(at(14))}i[c]=d,n=n||d!==h}return(n=n||r.length!==Object.keys(t).length)?i:t}}({colorSystem:function(t="color-system",e){const o=document.querySelector(".wrapper");if("@color/toggle"===e.type){if("color-system"==t)return o.classList.replace("color-system","color-system--dark"),"color-system--dark";if("color-system--dark"==t)return o.classList.replace("color-system--dark","color-system"),"color-system"}return t},nav:function(t="collapse",e){const o=document.querySelector(".wrapper");return"@nav/toggle"===e.type?"collapse"==t?(o.classList.replace("collapse","expand"),"expand"):(o.classList.replace("expand","collapse"),"collapse"):t}}),mt={type:"@nav/toggle"},vt={type:"@color/toggle"};let yt=function t(e,o,n){var i;if("function"==typeof o&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(at(0));if("function"==typeof o&&void 0===n&&(n=o,o=void 0),void 0!==n){if("function"!=typeof n)throw new Error(at(1));return n(t)(e,o)}if("function"!=typeof e)throw new Error(at(2));var s=e,r=o,l=[],c=l,a=!1;function h(){c===l&&(c=l.slice())}function d(){if(a)throw new Error(at(3));return r}function u(t){if("function"!=typeof t)throw new Error(at(4));if(a)throw new Error(at(5));var e=!0;return h(),c.push(t),function(){if(e){if(a)throw new Error(at(6));e=!1,h();var o=c.indexOf(t);c.splice(o,1),l=null}}}function p(t){if(!pt(t))throw new Error(at(7));if(void 0===t.type)throw new Error(at(8));if(a)throw new Error(at(9));try{a=!0,r=s(r,t)}finally{a=!1}for(var e=l=c,o=0;o<e.length;o++){(0,e[o])()}return t}function f(t){if("function"!=typeof t)throw new Error(at(10));s=t,p({type:ut.REPLACE})}function m(){var t,e=u;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(at(11));function o(){t.next&&t.next(d())}return o(),{unsubscribe:e(o)}}})[ht]=function(){return this},t}return p({type:ut.INIT}),(i={dispatch:p,subscribe:u,getState:d,replaceReducer:f})[ht]=m,i}(ft);class bt extends it{constructor(){super(...arguments),this.fontSystem="font-system"}connectedCallback(){super.connectedCallback(),this.colorSystem=yt.getState().colorSystem,yt.subscribe((()=>{this.colorSystem=yt.getState().colorSystem}))}}t([lt()],bt.prototype,"colorSystem",void 0),t([lt()],bt.prototype,"fontSystem",void 0);const gt=s`html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

:focus {
  outline: 0;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type=search] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  max-width: 100%;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden] {
  display: none;
}

html {
  font-size: 100%;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -ms-text-size-adjust: 100%;
  /* 2 */
}

a:focus {
  outline: thin dotted;
}

a:active,
a:hover {
  outline: 0;
}

img {
  border: 0;
  /* 1 */
  -ms-interpolation-mode: bicubic;
  /* 2 */
}

figure {
  margin: 0;
}

form {
  margin: 0;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
  white-space: normal;
  *margin-left: -7px;
}

button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle;
}

button,
input {
  line-height: normal;
}

button,
select {
  text-transform: none;
}

button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
  *overflow: visible;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

input[type=checkbox],
input[type=radio] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  *height: 13px;
  *width: 13px;
}

input[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  /* 2 */
  box-sizing: content-box;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
  /* 1 */
  vertical-align: top;
  /* 2 */
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
button,
input,
select,
textarea {
  color: #222;
}

::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

img {
  vertical-align: middle;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

* {
  box-sizing: border-box;
}

/* untitled-font-1 */
@font-face {
  font-family: "untitled-font-1";
  src: url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.eot");
  src: url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.eot?#iefix") format("embedded-opentype"), url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.woff") format("woff"), url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.ttf") format("truetype"), url("https://file.myfontastic.com/pvaqcASjfomSubUJPVp6Nm/fonts/1625558285.svg#1625558285") format("svg");
  font-weight: normal;
  font-style: normal;
}
[data-icon]:before {
  font-family: "untitled-font-1" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^=icon-]:before,
[class*=" icon-"]:before {
  font-family: "untitled-font-1" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-twitter:before {
  content: "a";
}

.icon-bars:before {
  content: "b";
}

.icon-times:before {
  content: "d";
}

.icon-sun-o:before {
  content: "f";
}

.icon-paintbrush:before {
  content: "h";
}

.icon-paintbucket:before {
  content: "i";
}

.icon-color-mode:before {
  content: "j";
}

.icon-contrast:before {
  content: "k";
}

.icon-ying-yang:before {
  content: "l";
}

.icon-moon-o:before {
  content: "m";
}

.font-system .font-content {
  font-size: 20px;
  font-family: "Source Code Pro";
}
.font-system .font-header {
  font-size: 30px;
  font-family: "Source Code Pro";
  font-weight: bold;
}
.font-system .font-link {
  font-size: 20px;
  font-family: "Source Code Pro";
}
.font-system .font-acent {
  font-size: 20px;
}
.font-system .font-icon {
  font-size: 23px;
}
.font-system .font-header,
.font-system .font-link,
.font-system .font-icon {
  text-decoration: none;
}

.color-system {
  background-color: #F7F5FB;
}
.color-system nav[class~=container] {
  background: #F7F5FB;
}
.color-system .color-header {
  color: #32746D;
}
.color-system .color-header--reverse {
  color: #F7F5FB;
}
.color-system .color-content {
  color: #262626;
}
.color-system .color-content--reverse {
  color: #F7F5FB;
}
.color-system .color-link {
  color: #32746D;
}
.color-system .color-acent {
  color: #32746D;
}
.color-system .color-icon {
  color: #32746D;
}

.color-system--dark {
  background-color: #262626;
}
.color-system--dark nav[class~=container] {
  background: #262626;
}
.color-system--dark .color-header {
  color: #FF980B;
}
.color-system--dark .color-header--reverse {
  color: #262626;
}
.color-system--dark .color-content {
  color: #F7F5FB;
}
.color-system--dark .color-content--reverse {
  color: #262626;
}
.color-system--dark .color-link {
  color: #FF980B;
}
.color-system--dark .color-acent {
  color: #FF980B;
}
.color-system--dark .color-icon {
  color: #FF980B;
}
`,$t=s`div {
  height: 100%;
  width: 100%;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
}
`;class _t extends bt{constructor(){super(...arguments),this.icon="icon-bars"}connectedCallback(){super.connectedCallback(),yt.subscribe((()=>{if("expand"===yt.getState().nav)this.icon="icon-times";else this.icon="icon-bars"}))}handler(){yt.dispatch(mt)}render(){return H`
      <div class="${this.colorSystem} ${this.fontSystem} font-icon">
        <button @click="${this.handler}" class="font-icon color-icon ${this.icon}"></button>
      </div>
    `}}_t.styles=[gt,$t],t([lt()],_t.prototype,"icon",void 0);const At=s`div {
  height: 80px;
  width: 80px;
}

button {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;class wt extends bt{handler(){yt.dispatch(vt)}render(){return H`
      <div class="${this.colorSystem} ${this.fontSystem}">
        <button 
          @click="${this.handler}"
          class="${this.icon} icon-contrast color-icon font-icon">
        </button>
      </div>
    `}}wt.styles=[gt,At],t([rt()],wt.prototype,"icon",void 0);const xt=s`:host, div, section {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 7px;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

img {
  width: 100%;
}

.image, .content {
  position: absolute;
}

.image {
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.content {
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
`;class St extends bt{constructor(){super(...arguments),this.collection="3390567",this.source=`https://source.unsplash.com/collection/${this.collection}`}connectedCallback(){super.connectedCallback(),fetch(this.source).then((t=>{t.ok&&(this.url=t.url)})).catch((t=>{console.log(t)}))}render(){return H`
      <div class="${this.colorSystem} ${this.fontSystem}">

      <section class="content">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </section>
      <section class="image">
        <img src="${this.url}" alt="random image">
      </section>
      </div>
    `}}St.styles=[gt,xt],t([lt()],St.prototype,"collection",void 0),t([lt()],St.prototype,"source",void 0),t([lt()],St.prototype,"url",void 0),t([lt()],St.prototype,"response",void 0),customElements.define("collapse-expand",_t),customElements.define("toggle-theme",wt),customElements.define("header-component",St)})();