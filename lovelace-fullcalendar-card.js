!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},o=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${o}--\x3e`,a=new RegExp(`${o}|${s}`);class l{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let s=0,l=-1,d=0;const{strings:p,values:{length:f}}=e;for(;d<f;){const e=i.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)c(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=p[d],n=h.exec(t)[2],r=n.toLowerCase()+"$lit$",i=e.getAttribute(r);e.removeAttribute(r);const o=i.split(a);this.parts.push({type:"attribute",index:l,name:n,strings:o}),d+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const r=e.parentNode,i=t.split(a),o=i.length-1;for(let t=0;t<o;t++){let n,o=i[t];if(""===o)n=u();else{const e=h.exec(o);null!==e&&c(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(o)}r.insertBefore(n,e),this.parts.push({type:"node",index:++l})}""===i[o]?(r.insertBefore(u(),e),n.push(e)):e.data=i[o],d+=o}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&l!==s||(l++,t.insertBefore(u(),e)),s=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(n.push(e),l--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),d++}}else i.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const c=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},d=e=>-1!==e.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,133,null,!1);let o=g(r),s=r[o],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,o=g(r,o),s=r[o]}c.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},g=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(d(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=new WeakMap,m=e=>"function"==typeof e&&v.has(e),y={},A={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,s=0,a=0,l=i.nextNode();for(;s<n.length;)if(o=n[s],d(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=` ${o} `;class E{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const a=h.exec(e);t+=null===a?e+(n?w:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=e=>null===e||!("object"==typeof e||"function"==typeof e),D=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class T{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(S(e)||!D(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||S(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof E?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):D(e)?this.__commitIterable(e):e===A?(this.value=A,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const n=new b(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const i of e)n=t[r],void 0===n&&(n=new x(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(i),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class I{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class R extends T{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends C{}let k=!1;(()=>{try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class _{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=B(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const B=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function N(e){let t=P.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},P.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(o);return n=t.keyString.get(r),void 0===n&&(n=new l(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const P=new Map,H=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,r){const i=t[0];if("."===i){return new R(e,t.slice(1),n).parts}return"@"===i?[new _(e,t.slice(1),r.eventContext)]:"?"===i?[new I(e,t.slice(1),n)]:new T(e,t,n).parts}handleTextExpression(e){return new x(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const O=(e,...t)=>new E(e,t,"html",z),U=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const Q=e=>t=>{const n=U(t.type,e);let r=P.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},P.set(n,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(o);if(i=r.keyString.get(s),void 0===i){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new l(t,n),r.keyString.set(s,i)}return r.stringsArray.set(t.strings,i),i},V=["html","svg"],F=new Set,G=(e,t,n)=>{F.add(e);const r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<o;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{V.forEach(t=>{const n=P.get(U(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),p(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:i}=e;if(null==n)return void r.appendChild(t);const o=document.createTreeWalker(r,133,null,!1);let s=g(i),a=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===n&&(a=f(t),n.parentNode.insertBefore(t,n));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=g(i,s);return}s=g(i,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),p(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const j={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),Y={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:W};class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Y){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Y}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=W){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||j,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||j.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Y){const r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,i=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Z.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const J="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol();class X{constructor(e,t){if(t!==q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const $=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new X(n,q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const K={};class ee extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==K&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return K}}ee.finalized=!0,ee.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=H.has(t),s=L&&11===t.nodeType&&!!t.host,a=s&&!F.has(r),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=H.get(t);void 0===r&&(i(t,t.firstChild),H.set(t,r=new x(Object.assign({templateFactory:N},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:Q(r)},n)),a){const e=H.get(l);H.delete(l);const n=e.value instanceof b?e.value.template:void 0;G(r,l,n),i(t,t.firstChild),t.appendChild(l),H.set(t,e)}!o&&s&&window.ShadyCSS.styleElement(t.host)};
/*!
FullCalendar Core Package v4.4.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
var te={className:!0,colSpan:!0,rowSpan:!0},ne={"<tr":"tbody","<td":"tr"};function re(e,t,n){var r=document.createElement(e);if(t)for(var i in t)"style"===i?Ae(r,t[i]):te[i]?r[i]=t[i]:r.setAttribute(i,t[i]);return"string"==typeof n?r.innerHTML=n:null!=n&&ae(r,n),r}function ie(e){e=e.trim();var t=document.createElement(se(e));return t.innerHTML=e,t.firstChild}function oe(e){return Array.prototype.slice.call(function(e){e=e.trim();var t=document.createElement(se(e));return t.innerHTML=e,t.childNodes}(e))}function se(e){return ne[e.substr(0,3)]||"div"}function ae(e,t){for(var n=de(t),r=0;r<n.length;r++)e.appendChild(n[r])}function le(e,t){for(var n=de(t),r=e.firstChild||null,i=0;i<n.length;i++)e.insertBefore(n[i],r)}function ce(e,t){for(var n=de(t),r=e.nextSibling||null,i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],r)}function de(e){return"string"==typeof e?oe(e):e instanceof Node?[e]:Array.prototype.slice.call(e)}function ue(e){e.parentNode&&e.parentNode.removeChild(e)}var he=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.msMatchesSelector,pe=Element.prototype.closest||function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(ge(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null};function fe(e,t){return pe.call(e,t)}function ge(e,t){return he.call(e,t)}function ve(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].querySelectorAll(t),s=0;s<o.length;s++)r.push(o[s]);return r}function me(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].children,s=0;s<o.length;s++){var a=o[s];t&&!ge(a,t)||r.push(a)}return r}var ye=/(top|left|right|bottom|width|height)$/i;function Ae(e,t){for(var n in t)be(e,n,t[n])}function be(e,t,n){null==n?e.style[t]="":"number"==typeof n&&ye.test(t)?e.style[t]=n+"px":e.style[t]=n}function we(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom}function Ee(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom&&n}var Se=null;function De(){return null===Se&&(Se=function(){var e=re("div",{style:{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}},"<div></div>");document.body.appendChild(e);var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left;return ue(e),t}()),Se}function Te(e){return e=Math.max(0,e),e=Math.round(e)}function Ce(e,t){void 0===t&&(t=!1);var n=window.getComputedStyle(e),r=parseInt(n.borderLeftWidth,10)||0,i=parseInt(n.borderRightWidth,10)||0,o=parseInt(n.borderTopWidth,10)||0,s=parseInt(n.borderBottomWidth,10)||0,a=Te(e.offsetWidth-e.clientWidth-r-i),l={borderLeft:r,borderRight:i,borderTop:o,borderBottom:s,scrollbarBottom:Te(e.offsetHeight-e.clientHeight-o-s),scrollbarLeft:0,scrollbarRight:0};return De()&&"rtl"===n.direction?l.scrollbarLeft=a:l.scrollbarRight=a,t&&(l.paddingLeft=parseInt(n.paddingLeft,10)||0,l.paddingRight=parseInt(n.paddingRight,10)||0,l.paddingTop=parseInt(n.paddingTop,10)||0,l.paddingBottom=parseInt(n.paddingBottom,10)||0),l}function xe(e,t){void 0===t&&(t=!1);var n=Ie(e),r=Ce(e,t),i={left:n.left+r.borderLeft+r.scrollbarLeft,right:n.right-r.borderRight-r.scrollbarRight,top:n.top+r.borderTop,bottom:n.bottom-r.borderBottom-r.scrollbarBottom};return t&&(i.left+=r.paddingLeft,i.right-=r.paddingRight,i.top+=r.paddingTop,i.bottom-=r.paddingBottom),i}function Ie(e){var t=e.getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function Re(e){return e.getBoundingClientRect().height+Me(e)}function Me(e){var t=window.getComputedStyle(e);return parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)}function ke(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e);if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}function _e(e){return ke(e).map((function(e){return xe(e)})).concat({left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight}).reduce((function(e,t){return Ee(e,t)||t}))}function Be(e){e.preventDefault()}function Ne(e,t,n,r){function i(e){var t=fe(e.target,n);t&&r.call(t,e,t)}return e.addEventListener(t,i),function(){e.removeEventListener(t,i)}}var Pe=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];var He=["sun","mon","tue","wed","thu","fri","sat"];function ze(e,t){var n=Ye(e);return n[2]+=7*t,Ze(n)}function Oe(e,t){var n=Ye(e);return n[2]+=t,Ze(n)}function Ue(e,t){var n=Ye(e);return n[6]+=t,Ze(n)}function Le(e,t){return(t.valueOf()-e.valueOf())/864e5}function Qe(e,t){return qe(e)===qe(t)?Math.round(Le(e,t)):null}function Ve(e){return Ze([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function Fe(e,t,n,r){var i=Ze([t,0,1+Ge(t,n,r)]),o=Ve(e),s=Math.round(Le(i,o));return Math.floor(s/7)+1}function Ge(e,t,n){var r=7+t-n;return-((7+Ze([e,0,r]).getUTCDay()-t)%7)+r-1}function je(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function We(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function Ye(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function Ze(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function Je(e){return!isNaN(e.valueOf())}function qe(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}var Xe=["years","months","days","milliseconds"],$e=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function Ke(e,t){var n;return"string"==typeof e?function(e){var t=$e.exec(e);if(t){var n=t[1]?-1:1;return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?et(e):"number"==typeof e?et(((n={})[t||"milliseconds"]=e,n)):null}function et(e){return{years:e.years||e.year||0,months:e.months||e.month||0,days:(e.days||e.day||0)+7*tt(e),milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)}}function tt(e){return e.weeks||e.week||0}function nt(e,t){return e.years===t.years&&e.months===t.months&&e.days===t.days&&e.milliseconds===t.milliseconds}function rt(e,t){return{years:e.years+t.years,months:e.months+t.months,days:e.days+t.days,milliseconds:e.milliseconds+t.milliseconds}}function it(e){return ot(e)/864e5}function ot(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function st(e,t){for(var n=null,r=0;r<Xe.length;r++){var i=Xe[r];if(t[i]){var o=e[i]/t[i];if(!wt(o)||null!==n&&n!==o)return null;n=o}else if(e[i])return null}return n}function at(e,t){var n=e.milliseconds;if(n){if(n%1e3!=0)return{unit:"millisecond",value:n};if(n%6e4!=0)return{unit:"second",value:n/1e3};if(n%36e5!=0)return{unit:"minute",value:n/6e4};if(n)return{unit:"hour",value:n/36e5}}return e.days?t||e.days%7!=0?{unit:"day",value:e.days}:{unit:"week",value:e.days/7}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function lt(e,t){t.left&&Ae(e,{borderLeftWidth:1,marginLeft:t.left-1}),t.right&&Ae(e,{borderRightWidth:1,marginRight:t.right-1})}function ct(e){Ae(e,{marginLeft:"",marginRight:"",borderLeftWidth:"",borderRightWidth:""})}function dt(){document.body.classList.add("fc-not-allowed")}function ut(){document.body.classList.remove("fc-not-allowed")}function ht(e,t,n){var r=Math.floor(t/e.length),i=Math.floor(t-r*(e.length-1)),o=[],s=[],a=[],l=0;pt(e),e.forEach((function(t,n){var c=n===e.length-1?i:r,d=t.getBoundingClientRect().height,u=d+Me(t);u<c?(o.push(t),s.push(u),a.push(d)):l+=u})),n&&(t-=l,r=Math.floor(t/o.length),i=Math.floor(t-r*(o.length-1))),o.forEach((function(e,t){var n=t===o.length-1?i:r,l=s[t],c=n-(l-a[t]);l<n&&(e.style.height=c+"px")}))}function pt(e){e.forEach((function(e){e.style.height=""}))}function ft(e){var t=0;return e.forEach((function(e){var n=e.firstChild;if(n instanceof HTMLElement){var r=n.getBoundingClientRect().width;r>t&&(t=r)}})),t++,e.forEach((function(e){e.style.width=t+"px"})),t}function gt(e,t){var n={position:"relative",left:-1};Ae(e,n),Ae(t,n);var r=e.getBoundingClientRect().height-t.getBoundingClientRect().height,i={position:"",left:""};return Ae(e,i),Ae(t,i),r}function vt(e,t,n){var r,i;for(r=0;r<n.length;r++)if(i=mt(e,t,n[r]))return i;return 0}function mt(e,t,n){return n.func?n.func(e,t):function(e,t){if(!e&&!t)return 0;if(null==t)return-1;if(null==e)return 1;if("string"==typeof e||"string"==typeof t)return String(e).localeCompare(String(t));return e-t}(e[n.field],t[n.field])*(n.order||1)}function yt(e){return e.charAt(0).toUpperCase()+e.slice(1)}function At(e,t){var n=String(e);return"000".substr(0,t-n.length)+n}function bt(e,t){return e-t}function wt(e){return e%1==0}function Et(e,t,n){if("function"==typeof e&&(e=[e]),e){var r=void 0,i=void 0;for(r=0;r<e.length;r++)i=e[r].apply(t,n)||i;return i}}function St(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0;n<e.length;n++)if(void 0!==e[n])return e[n]}function Dt(e,t){var n,r,i,o,s,a=function(){var l=(new Date).valueOf()-o;l<t?n=setTimeout(a,t-l):(n=null,s=e.apply(i,r),i=r=null)};return function(){return i=this,r=arguments,o=(new Date).valueOf(),n||(n=setTimeout(a,t)),s}}function Tt(e,t,n,r){void 0===n&&(n={});var i={};for(var o in t){var s=t[o];void 0!==e[o]?i[o]=s===Function?"function"==typeof e[o]?e[o]:null:s?s(e[o]):e[o]:void 0!==n[o]?i[o]=n[o]:s===String?i[o]="":s&&s!==Number&&s!==Boolean&&s!==Function?i[o]=s(null):i[o]=null}if(r)for(var o in e)void 0===t[o]&&(r[o]=e[o]);return i}function Ct(e){var t=Math.floor(Le(e.start,e.end))||1,n=Ve(e.start);return{start:n,end:Oe(n,t)}}function xt(e,t){void 0===t&&(t=Ke(0));var n=null,r=null;if(e.end){r=Ve(e.end);var i=e.end.valueOf()-r.valueOf();i&&i>=ot(t)&&(r=Oe(r,1))}return e.start&&(n=Ve(e.start),r&&r<=n&&(r=Oe(n,1))),{start:n,end:r}}function It(e,t,n,r){return"year"===r?Ke(n.diffWholeYears(e,t),"year"):"month"===r?Ke(n.diffWholeMonths(e,t),"month"):(o=t,s=Ve(i=e),a=Ve(o),{years:0,months:0,days:Math.round(Le(s,a)),milliseconds:o.valueOf()-a.valueOf()-(i.valueOf()-s.valueOf())});var i,o,s,a}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Rt=function(e,t){return(Rt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function Mt(e,t){function n(){this.constructor=e}Rt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var kt=function(){return(kt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function _t(e,t,n,r,i){var o=i[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:r.subtract(n.start,t),end:n.end},r);return e.allDay&&(o=o.map(Ve)),o}var Bt=Object.prototype.hasOwnProperty;function Nt(e,t){var n,r,i,o,s,a,l={};if(t)for(n=0;n<t.length;n++){for(r=t[n],i=[],o=e.length-1;o>=0;o--)if("object"==typeof(s=e[o][r])&&s)i.unshift(s);else if(void 0!==s){l[r]=s;break}i.length&&(l[r]=Nt(i))}for(n=e.length-1;n>=0;n--)for(r in a=e[n])r in l||(l[r]=a[r]);return l}function Pt(e,t){var n={};for(var r in e)t(e[r],r)&&(n[r]=e[r]);return n}function Ht(e,t){var n={};for(var r in e)n[r]=t(e[r],r);return n}function zt(e){for(var t={},n=0,r=e;n<r.length;n++){t[r[n]]=!0}return t}function Ot(e){var t=[];for(var n in e)t.push(e[n]);return t}function Ut(e,t){for(var n in e)if(Bt.call(e,n)&&!(n in t))return!1;for(var n in t)if(Bt.call(t,n)&&e[n]!==t[n])return!1;return!0}function Lt(e,t,n,r){for(var i={defs:{},instances:{}},o=0,s=e;o<s.length;o++){var a=ir(s[o],t,n,r);a&&Qt(a,i)}return i}function Qt(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function Vt(e,t,n){var r=n.dateEnv,i=e.defs,o=e.instances;for(var s in o=Pt(o,(function(e){return!i[e.defId].recurringDef})),i){var a=i[s];if(a.recurringDef){var l=a.recurringDef.duration;l||(l=a.allDay?n.defaultAllDayEventDuration:n.defaultTimedEventDuration);for(var c=0,d=_t(a,l,t,n.dateEnv,n.pluginSystem.hooks.recurringTypes);c<d.length;c++){var u=d[c],h=sr(s,{start:u,end:r.add(u,l)});o[h.instanceId]=h}}}return{defs:i,instances:o}}function Ft(e,t){var n=e.instances[t];if(n){var r=e.defs[n.defId],i=Wt(e,(function(e){return t=r,n=e,Boolean(t.groupId&&t.groupId===n.groupId);var t,n}));return i.defs[r.defId]=r,i.instances[n.instanceId]=n,i}return{defs:{},instances:{}}}function Gt(e,t){var n;if(t){n=[];for(var r=0,i=e;r<i.length;r++){var o=i[r],s=t(o);s?n.push(s):null==s&&n.push(o)}}else n=e;return n}function jt(e,t){return{defs:kt({},e.defs,t.defs),instances:kt({},e.instances,t.instances)}}function Wt(e,t){var n=Pt(e.defs,t),r=Pt(e.instances,(function(e){return n[e.defId]}));return{defs:n,instances:r}}function Yt(e,t){var n=null,r=null;return e.start&&(n=t.createMarker(e.start)),e.end&&(r=t.createMarker(e.end)),n||r?n&&r&&r<n?null:{start:n,end:r}:null}function Zt(e,t){var n,r,i=[],o=t.start;for(e.sort(Jt),n=0;n<e.length;n++)(r=e[n]).start>o&&i.push({start:o,end:r.start}),r.end>o&&(o=r.end);return o<t.end&&i.push({start:o,end:t.end}),i}function Jt(e,t){return e.start.valueOf()-t.start.valueOf()}function qt(e,t){var n=e.start,r=e.end,i=null;return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(r=null===r?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(null===n||null===r||n<r)&&(i={start:n,end:r}),i}function Xt(e,t){return(null===e.start?null:e.start.valueOf())===(null===t.start?null:t.start.valueOf())&&(null===e.end?null:e.end.valueOf())===(null===t.end?null:t.end.valueOf())}function $t(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function Kt(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function en(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function tn(e,t){var n,r=e.length;if(r!==t.length)return!1;for(n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}function nn(e){var t,n;return function(){return t&&tn(t,arguments)||(t=arguments,n=e.apply(this,arguments)),n}}var rn={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},on={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},sn=/\s*([ap])\.?m\.?/i,an=/,/g,ln=/\s+/g,cn=/\u200e/g,dn=/UTC|GMT/,un=function(){function e(e){var t={},n={},r=0;for(var i in e)i in rn?(n[i]=e[i],r=Math.max(rn[i],r)):(t[i]=e[i],i in on&&(r=Math.max(on[i],r)));this.standardDateProps=t,this.extendedSettings=n,this.severity=r,this.buildFormattingFunc=nn(hn)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n){var r=this.standardDateProps,i=this.extendedSettings,o=function(e,t,n){if(n.getMarkerYear(e)!==n.getMarkerYear(t))return 5;if(n.getMarkerMonth(e)!==n.getMarkerMonth(t))return 4;if(n.getMarkerDay(e)!==n.getMarkerDay(t))return 2;if(qe(e)!==qe(t))return 1;return 0}(e.marker,t.marker,n.calendarSystem);if(!o)return this.format(e,n);var s=o;!(s>1)||"numeric"!==r.year&&"2-digit"!==r.year||"numeric"!==r.month&&"2-digit"!==r.month||"numeric"!==r.day&&"2-digit"!==r.day||(s=1);var a=this.format(e,n),l=this.format(t,n);if(a===l)return a;var c=hn(function(e,t){var n={};for(var r in e)(!(r in on)||on[r]<=t)&&(n[r]=e[r]);return n}(r,s),i,n),d=c(e),u=c(t),h=function(e,t,n,r){var i=0;for(;i<e.length;){var o=e.indexOf(t,i);if(-1===o)break;var s=e.substr(0,o);i=o+t.length;for(var a=e.substr(i),l=0;l<n.length;){var c=n.indexOf(r,l);if(-1===c)break;var d=n.substr(0,c);l=c+r.length;var u=n.substr(l);if(s===d&&a===u)return{before:s,after:a}}}return null}(a,d,l,u),p=i.separator||"";return h?h.before+d+p+u+h.after:a+p+l},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";default:return"day"}},e}();function hn(e,t,n){var r=Object.keys(e).length;return 1===r&&"short"===e.timeZoneName?function(e){return mn(e.timeZoneOffset)}:0===r&&t.week?function(e){return function(e,t,n,r){var i=[];"narrow"===r?i.push(t):"short"===r&&i.push(t," ");i.push(n.simpleNumberFormat.format(e)),n.options.isRtl&&i.reverse();return i.join("")}(n.computeWeekNumber(e.marker),n.weekLabel,n.locale,t.week)}:function(e,t,n){e=kt({},e),t=kt({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit"));"long"===e.timeZoneName&&(e.timeZoneName="short");t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC";var r,i=new Intl.DateTimeFormat(n.locale.codes,e);if(t.omitZeroMinute){var o=kt({},e);delete o.minute,r=new Intl.DateTimeFormat(n.locale.codes,o)}return function(o){var s=o.marker;return function(e,t,n,r,i){e=e.replace(cn,""),"short"===n.timeZoneName&&(e=function(e,t){var n=!1;e=e.replace(dn,(function(){return n=!0,t})),n||(e+=" "+t);return e}(e,"UTC"===i.timeZone||null==t.timeZoneOffset?"UTC":mn(t.timeZoneOffset)));r.omitCommas&&(e=e.replace(an,"").trim());r.omitZeroMinute&&(e=e.replace(":00",""));!1===r.meridiem?e=e.replace(sn,"").trim():"narrow"===r.meridiem?e=e.replace(sn,(function(e,t){return t.toLocaleLowerCase()})):"short"===r.meridiem?e=e.replace(sn,(function(e,t){return t.toLocaleLowerCase()+"m"})):"lowercase"===r.meridiem&&(e=e.replace(sn,(function(e){return e.toLocaleLowerCase()})));return e=(e=e.replace(ln," ")).trim()}((r&&!s.getUTCMinutes()?r:i).format(s),o,e,t,n)}}(e,t,n)}var pn=function(){function e(e,t){this.cmdStr=e,this.separator=t}return e.prototype.format=function(e,t){return t.cmdFormatter(this.cmdStr,yn(e,null,t,this.separator))},e.prototype.formatRange=function(e,t,n){return n.cmdFormatter(this.cmdStr,yn(e,t,n,this.separator))},e}(),fn=function(){function e(e){this.func=e}return e.prototype.format=function(e,t){return this.func(yn(e,null,t))},e.prototype.formatRange=function(e,t,n){return this.func(yn(e,t,n))},e}();function gn(e,t){return"object"==typeof e&&e?("string"==typeof t&&(e=kt({separator:t},e)),new un(e)):"string"==typeof e?new pn(e,t):"function"==typeof e?new fn(e):void 0}function vn(e){return At(e.getUTCHours(),2)+":"+At(e.getUTCMinutes(),2)+":"+At(e.getUTCSeconds(),2)}function mn(e,t){void 0===t&&(t=!1);var n=e<0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=Math.round(r%60);return t?n+At(i,2)+":"+At(o,2):"GMT"+n+i+(o?":"+At(o,2):"")}function yn(e,t,n,r){var i=An(e,n.calendarSystem);return{date:i,start:i,end:t?An(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,separator:r}}function An(e,t){var n=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}var bn=function(){function e(e,t){this.calendar=e,this.internalEventSource=t}return e.prototype.remove=function(){this.calendar.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.calendar.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId]})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!0,configurable:!0}),e}(),wn=function(){function e(e,t,n){this._calendar=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,r;if(e in nr);else if(e in tr)"function"==typeof tr[e]&&(t=tr[e](t)),this.mutate({standardProps:(n={},n[e]=t,n)});else if(e in Jn){var i=void 0;"function"==typeof Jn[e]&&(t=Jn[e](t)),"color"===e?i={backgroundColor:t,borderColor:t}:"editable"===e?i={startEditable:t,durationEditable:t}:((r={})[e]=t,i=r),this.mutate({standardProps:{ui:i}})}},e.prototype.setExtendedProp=function(e,t){var n;this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={});var n=this._calendar.dateEnv,r=n.createMarker(e);if(r&&this._instance){var i=It(this._instance.range.start,r,n,t.granularity);t.maintainDuration?this.mutate({datesDelta:i}):this.mutate({startDelta:i})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={});var n,r=this._calendar.dateEnv;if((null==e||(n=r.createMarker(e)))&&this._instance)if(n){var i=It(this._instance.range.end,n,r,t.granularity);this.mutate({endDelta:i})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={});var r,i=this._calendar.dateEnv,o={allDay:n.allDay},s=i.createMarker(e);if(s&&(null==t||(r=i.createMarker(t)))&&this._instance){var a=this._instance.range;!0===n.allDay&&(a=Ct(a));var l=It(a.start,s,i,n.granularity);if(r){var c=It(a.end,r,i,n.granularity);nt(l,c)?this.mutate({datesDelta:l,standardProps:o}):this.mutate({startDelta:l,endDelta:c,standardProps:o})}else o.hasEnd=!1,this.mutate({datesDelta:l,standardProps:o})}},e.prototype.moveStart=function(e){var t=Ke(e);t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=Ke(e);t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=Ke(e);t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={});var n={allDay:e},r=t.maintainDuration;null==r&&(r=this._calendar.opt("allDayMaintainDuration")),this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._calendar.dateEnv,n=this._instance,r=gn(e,this._calendar.opt("defaultRangeSeparator"));return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(e){var t=this._def,n=this._instance;if(n){this._calendar.dispatch({type:"MUTATE_EVENTS",instanceId:n.instanceId,mutation:e,fromApi:!0});var r=this._calendar.state.eventStore;this._def=r.defs[t.defId],this._instance=r.instances[n.instanceId]}},e.prototype.remove=function(){this._calendar.dispatch({type:"REMOVE_EVENT_DEF",defId:this._def.defId})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId;return e?new bn(this._calendar,this._calendar.state.eventSources[e]):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._calendar.dateEnv.toDate(this._instance.range.start):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._calendar.dateEnv.toDate(this._instance.range.end):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rendering",{get:function(){return this._def.rendering},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!0,configurable:!0}),e}();function En(e,t,n,r){var i={},o={},s={},a=[],l=[],c=Cn(e.defs,t);for(var d in e.defs){"inverse-background"===(b=e.defs[d]).rendering&&(b.groupId?(i[b.groupId]=[],s[b.groupId]||(s[b.groupId]=b)):o[d]=[])}for(var u in e.instances){var h=e.instances[u],p=c[(b=e.defs[h.defId]).defId],f=h.range,g=!b.allDay&&r?xt(f,r):f,v=qt(g,n);v&&("inverse-background"===b.rendering?b.groupId?i[b.groupId].push(v):o[h.defId].push(v):("background"===b.rendering?a:l).push({def:b,ui:p,instance:h,range:v,isStart:g.start&&g.start.valueOf()===v.start.valueOf(),isEnd:g.end&&g.end.valueOf()===v.end.valueOf()}))}for(var m in i)for(var y=0,A=Zt(i[m],n);y<A.length;y++){var b,w=A[y];p=c[(b=s[m]).defId];a.push({def:b,ui:p,instance:null,range:w,isStart:!1,isEnd:!1})}for(var d in o)for(var E=0,S=Zt(o[d],n);E<S.length;E++){w=S[E];a.push({def:e.defs[d],ui:c[d],instance:null,range:w,isStart:!1,isEnd:!1})}return{bg:a,fg:l}}function Sn(e,t,n){var r=e.calendar,i=e.view;r.hasPublicHandlers("eventRender")&&(t=t.filter((function(e){var t=r.publiclyTrigger("eventRender",[{event:new wn(r,e.eventRange.def,e.eventRange.instance),isMirror:n,isStart:e.isStart,isEnd:e.isEnd,el:e.el,view:i}]);return!1!==t&&(t&&!0!==t&&(e.el=t),!0)})));for(var o=0,s=t;o<s.length;o++){var a=s[o];Dn(a.el,a)}return t}function Dn(e,t){e.fcSeg=t}function Tn(e){return e.fcSeg||null}function Cn(e,t){return Ht(e,(function(e){return xn(e,t)}))}function xn(e,t){var n=[];return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),Kn(n)}function In(e,t,n){var r=e.calendar,i=e.view;if(r.hasPublicHandlers("eventPositioned"))for(var o=0,s=t;o<s.length;o++){var a=s[o];r.publiclyTriggerAfterSizing("eventPositioned",[{event:new wn(r,a.eventRange.def,a.eventRange.instance),isMirror:n,isStart:a.isStart,isEnd:a.isEnd,el:a.el,view:i}])}r.state.loadingLevel||(r.afterSizingTriggers._eventsPositioned=[null])}function Rn(e,t,n){for(var r=e.calendar,i=e.view,o=0,s=t;o<s.length;o++){var a=s[o];r.trigger("eventElRemove",a.el)}if(r.hasPublicHandlers("eventDestroy"))for(var l=0,c=t;l<c.length;l++){a=c[l];r.publiclyTrigger("eventDestroy",[{event:new wn(r,a.eventRange.def,a.eventRange.instance),isMirror:n,el:a.el,view:i}])}}function Mn(e,t,n){for(var r=e.calendar,i=e.view,o=r.pluginSystem.hooks.isDraggableTransformers,s=n.startEditable,a=0,l=o;a<l.length;a++){s=(0,l[a])(s,t,n,i)}return s}function kn(e,t,n){return n.durationEditable&&e.options.eventResizableFromStart}function _n(e,t,n){return n.durationEditable}function Bn(e,t,n,r){var i=Cn(e.defs,t),o={defs:{},instances:{}};for(var s in e.defs){var a=e.defs[s];o.defs[s]=Nn(a,i[s],n,r.pluginSystem.hooks.eventDefMutationAppliers,r)}for(var l in e.instances){var c=e.instances[l];a=o.defs[c.defId];o.instances[l]=Pn(c,a,i[c.defId],n,r)}return o}function Nn(e,t,n,r,i){var o=n.standardProps||{};null==o.hasEnd&&t.durationEditable&&(n.startDelta||n.endDelta)&&(o.hasEnd=!0);var s=kt({},e,o,{ui:kt({},e.ui,o.ui)});n.extendedProps&&(s.extendedProps=kt({},s.extendedProps,n.extendedProps));for(var a=0,l=r;a<l.length;a++){(0,l[a])(s,n,i)}return!s.hasEnd&&i.opt("forceEventDuration")&&(s.hasEnd=!0),s}function Pn(e,t,n,r,i){var o=i.dateEnv,s=r.standardProps&&!0===r.standardProps.allDay,a=r.standardProps&&!1===r.standardProps.hasEnd,l=kt({},e);return s&&(l.range=Ct(l.range)),r.datesDelta&&n.startEditable&&(l.range={start:o.add(l.range.start,r.datesDelta),end:o.add(l.range.end,r.datesDelta)}),r.startDelta&&n.durationEditable&&(l.range={start:o.add(l.range.start,r.startDelta),end:l.range.end}),r.endDelta&&n.durationEditable&&(l.range={start:l.range.start,end:o.add(l.range.end,r.endDelta)}),a&&(l.range={start:l.range.start,end:i.getDefaultEventEnd(t.allDay,l.range.start)}),t.allDay&&(l.range={start:Ve(l.range.start),end:Ve(l.range.end)}),l.range.end<l.range.start&&(l.range.end=i.getDefaultEventEnd(t.allDay,l.range.start)),l}function Hn(e,t,n,r,i){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,n,r,i,o){if(t&&n===t.latestFetchId){var s=Lt(function(e,t,n){var r=n.opt("eventDataTransform"),i=t?t.eventDataTransform:null;return i&&(e=Gt(e,i)),r&&(e=Gt(e,r)),e}(i,t,o),t.sourceId,o);return r&&(s=Vt(s,r,o)),jt(zn(e,t.sourceId),s)}return e}(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,i);case"ADD_EVENTS":return function(e,t,n,r){n&&(t=Vt(t,n,r));return jt(e,t)}(e,t.eventStore,r?r.activeRange:null,i);case"MERGE_EVENTS":return jt(e,t.eventStore);case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return r?Vt(e,r.activeRange,i):e;case"CHANGE_TIMEZONE":return function(e,t,n){var r=e.defs,i=Ht(e.instances,(function(e){var i=r[e.defId];return i.allDay||i.recurringDef?e:kt({},e,{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})}));return{defs:r,instances:i}}(e,t.oldDateEnv,i.dateEnv);case"MUTATE_EVENTS":return function(e,t,n,r,i){var o=Ft(e,t),s=r?{"":{startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}}:i.eventUiBases;return o=Bn(o,s,n,i),jt(e,o)}(e,t.instanceId,t.mutation,t.fromApi,i);case"REMOVE_EVENT_INSTANCES":return On(e,t.instances);case"REMOVE_EVENT_DEF":return Wt(e,(function(e){return e.defId!==t.defId}));case"REMOVE_EVENT_SOURCE":return zn(e,t.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return Wt(e,(function(e){return!e.sourceId}));case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}};case"RESET_EVENTS":return{defs:e.defs,instances:e.instances};default:return e}}function zn(e,t){return Wt(e,(function(e){return e.sourceId!==t}))}function On(e,t){return{defs:e.defs,instances:Pt(e.instances,(function(e){return!t[e.instanceId]}))}}function Un(e,t){return Ln({eventDrag:e},t)}function Ln(e,t){var n=t.view,r=kt({businessHours:n?n.props.businessHours:{defs:{},instances:{}},dateSelection:"",eventStore:t.state.eventStore,eventUiBases:t.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e);return(t.pluginSystem.hooks.isPropsValid||Qn)(r,t)}function Qn(e,t,n,r){return void 0===n&&(n={}),!(e.eventDrag&&!function(e,t,n,r){var i=e.eventDrag,o=i.mutatedEvents,s=o.defs,a=o.instances,l=Cn(s,i.isEvent?e.eventUiBases:{"":t.selectionConfig});r&&(l=Ht(l,r));var c=On(e.eventStore,i.affectedEvents.instances),d=c.defs,u=c.instances,h=Cn(d,e.eventUiBases);for(var p in a){var f=a[p],g=f.range,v=l[f.defId],m=s[f.defId];if(!Vn(v.constraints,g,c,e.businessHours,t))return!1;var y=t.opt("eventOverlap");for(var A in"function"!=typeof y&&(y=null),u){var b=u[A];if($t(g,b.range)){if(!1===h[b.defId].overlap&&i.isEvent)return!1;if(!1===v.overlap)return!1;if(y&&!y(new wn(t,d[b.defId],b),new wn(t,m,f)))return!1}}for(var w=t.state.eventStore,E=0,S=v.allows;E<S.length;E++){var D=S[E],T=kt({},n,{range:f.range,allDay:m.allDay}),C=w.defs[m.defId],x=w.instances[p],I=void 0;if(I=C?new wn(t,C,x):new wn(t,m),!D(t.buildDateSpanApi(T),I))return!1}}return!0}(e,t,n,r))&&!(e.dateSelection&&!function(e,t,n,r){var i=e.eventStore,o=i.defs,s=i.instances,a=e.dateSelection,l=a.range,c=t.selectionConfig;r&&(c=r(c));if(!Vn(c.constraints,l,i,e.businessHours,t))return!1;var d=t.opt("selectOverlap");"function"!=typeof d&&(d=null);for(var u in s){var h=s[u];if($t(l,h.range)){if(!1===c.overlap)return!1;if(d&&!d(new wn(t,o[h.defId],h)))return!1}}for(var p=0,f=c.allows;p<f.length;p++){var g=f[p],v=kt({},n,a);if(!g(t.buildDateSpanApi(v),null))return!1}return!0}(e,t,n,r))}function Vn(e,t,n,r,i){for(var o=0,s=e;o<s.length;o++){if(!jn(Fn(s[o],t,n,r,i),t))return!1}return!0}function Fn(e,t,n,r,i){return"businessHours"===e?Gn(Vt(r,t,i)):"string"==typeof e?Gn(Wt(n,(function(t){return t.groupId===e}))):"object"==typeof e&&e?Gn(Vt(e,t,i)):[]}function Gn(e){var t=e.instances,n=[];for(var r in t)n.push(t[r].range);return n}function jn(e,t){for(var n=0,r=e;n<r.length;n++){if(Kt(r[n],t))return!0}return!1}function Wn(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function Yn(e){var t=[];for(var n in e){var r=e[n];null!=r&&""!==r&&t.push(n+":"+r)}return t.join(";")}function Zn(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var Jn={editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:null,overlap:null,allow:null,className:Zn,classNames:Zn,color:String,backgroundColor:String,borderColor:String,textColor:String};function qn(e,t,n){var r=Tt(e,Jn,{},n),i=function(e,t){return Array.isArray(e)?Lt(e,"",t,!0):"object"==typeof e&&e?Lt([e],"",t,!0):null!=e?String(e):null}(r.constraint,t);return{startEditable:null!=r.startEditable?r.startEditable:r.editable,durationEditable:null!=r.durationEditable?r.durationEditable:r.editable,constraints:null!=i?[i]:[],overlap:r.overlap,allows:null!=r.allow?[r.allow]:[],backgroundColor:r.backgroundColor||r.color,borderColor:r.borderColor||r.color,textColor:r.textColor,classNames:r.classNames.concat(r.className)}}function Xn(e,t,n,r){var i={},o={};for(var s in Jn){var a=e+yt(s);i[s]=t[a],o[a]=!0}if("event"===e&&(i.editable=t.editable),r)for(var s in t)o[s]||(r[s]=t[s]);return qn(i,n)}var $n={startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};function Kn(e){return e.reduce(er,$n)}function er(e,t){return{startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var tr={id:String,groupId:String,title:String,url:String,rendering:String,extendedProps:null},nr={start:null,date:null,end:null,allDay:null},rr=0;function ir(e,t,n,r){var i=function(e,t){var n=null;if(e){var r=t.state.eventSources[e];n=r.allDayDefault}null==n&&(n=t.opt("allDayDefault"));return n}(t,n),o={},s=function(e,t,n,r,i){for(var o=0;o<r.length;o++){var s={},a=r[o].parse(e,s,n);if(a){var l=s.allDay;return delete s.allDay,null==l&&null==(l=t)&&null==(l=a.allDayGuess)&&(l=!1),kt(i,s),{allDay:l,duration:a.duration,typeData:a.typeData,typeId:o}}}return null}(e,i,n.dateEnv,n.pluginSystem.hooks.recurringTypes,o);if(s)return(a=or(o,t,s.allDay,Boolean(s.duration),n)).recurringDef={typeId:s.typeId,typeData:s.typeData,duration:s.duration},{def:a,instance:null};var a,l={},c=function(e,t,n,r,i){var o,s,a=function(e,t){var n=Tt(e,nr,{},t);return n.start=null!==n.start?n.start:n.date,delete n.date,n}(e,r),l=a.allDay,c=null,d=!1,u=null;if(o=n.dateEnv.createMarkerMeta(a.start))c=o.marker;else if(!i)return null;null!=a.end&&(s=n.dateEnv.createMarkerMeta(a.end));null==l&&(l=null!=t?t:(!o||o.isTimeUnspecified)&&(!s||s.isTimeUnspecified));l&&c&&(c=Ve(c));s&&(u=s.marker,l&&(u=Ve(u)),c&&u<=c&&(u=null));u?d=!0:i||(d=n.opt("forceEventDuration")||!1,u=n.dateEnv.add(c,l?n.defaultAllDayEventDuration:n.defaultTimedEventDuration));return{allDay:l,hasEnd:d,range:{start:c,end:u},forcedStartTzo:o?o.forcedTzo:null,forcedEndTzo:s?s.forcedTzo:null}}(e,i,n,l,r);return c?{def:a=or(l,t,c.allDay,c.hasEnd,n),instance:sr(a.defId,c.range,c.forcedStartTzo,c.forcedEndTzo)}:null}function or(e,t,n,r,i){var o={},s=function(e,t,n){var r={},i=Tt(e,tr,{},r),o=qn(r,t,n);return i.publicId=i.id,delete i.id,i.ui=o,i}(e,i,o);s.defId=String(rr++),s.sourceId=t,s.allDay=n,s.hasEnd=r;for(var a=0,l=i.pluginSystem.hooks.eventDefParsers;a<l.length;a++){var c={};(0,l[a])(s,o,c),o=c}return s.extendedProps=kt(o,s.extendedProps||{}),Object.freeze(s.ui.classNames),Object.freeze(s.extendedProps),s}function sr(e,t,n,r){return{instanceId:String(rr++),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==r?null:r}}var ar={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],rendering:"inverse-background",classNames:"fc-nonbusiness",groupId:"_businessHours"};function lr(e,t){return Lt(function(e){var t;t=!0===e?[{}]:Array.isArray(e)?e.filter((function(e){return e.daysOfWeek})):"object"==typeof e&&e?[e]:[];return t=t.map((function(e){return kt({},ar,e)}))}(e),"",t)}function cr(e,t,n){void 0===n&&(n=[]);var r,i,o=[];function s(){if(i){for(var e=0,n=o;e<n.length;e++){n[e].unrender()}t&&t.apply(r,i),i=null}}function a(){i&&tn(i,arguments)||(s(),r=this,i=arguments,e.apply(this,arguments))}a.dependents=o,a.unrender=s;for(var l=0,c=n;l<c.length;l++){c[l].dependents.push(a)}return a}var dr={defs:{},instances:{}},ur=function(){function e(){this.getKeysForEventDefs=nn(this._getKeysForEventDefs),this.splitDateSelection=nn(this._splitDateSpan),this.splitEventStore=nn(this._splitEventStore),this.splitIndividualUi=nn(this._splitIndividualUi),this.splitEventDrag=nn(this._splitInteraction),this.splitEventResize=nn(this._splitInteraction),this.eventUiBuilders={}}return e.prototype.splitProps=function(e){var t=this,n=this.getKeyInfo(e),r=this.getKeysForEventDefs(e.eventStore),i=this.splitDateSelection(e.dateSelection),o=this.splitIndividualUi(e.eventUiBases,r),s=this.splitEventStore(e.eventStore,r),a=this.splitEventDrag(e.eventDrag),l=this.splitEventResize(e.eventResize),c={};for(var d in this.eventUiBuilders=Ht(n,(function(e,n){return t.eventUiBuilders[n]||nn(hr)})),n){var u=n[d],h=s[d]||dr,p=this.eventUiBuilders[d];c[d]={businessHours:u.businessHours||e.businessHours,dateSelection:i[d]||null,eventStore:h,eventUiBases:p(e.eventUiBases[""],u.ui,o[d]),eventSelection:h.instances[e.eventSelection]?e.eventSelection:"",eventDrag:a[d]||null,eventResize:l[d]||null}}return c},e.prototype._splitDateSpan=function(e){var t={};if(e)for(var n=0,r=this.getKeysForDateSpan(e);n<r.length;n++){t[r[n]]=e}return t},e.prototype._getKeysForEventDefs=function(e){var t=this;return Ht(e.defs,(function(e){return t.getKeysForEventDef(e)}))},e.prototype._splitEventStore=function(e,t){var n=e.defs,r=e.instances,i={};for(var o in n)for(var s=0,a=t[o];s<a.length;s++){i[h=a[s]]||(i[h]={defs:{},instances:{}}),i[h].defs[o]=n[o]}for(var l in r)for(var c=r[l],d=0,u=t[c.defId];d<u.length;d++){var h;i[h=u[d]]&&(i[h].instances[l]=c)}return i},e.prototype._splitIndividualUi=function(e,t){var n={};for(var r in e)if(r)for(var i=0,o=t[r];i<o.length;i++){var s=o[i];n[s]||(n[s]={}),n[s][r]=e[r]}return n},e.prototype._splitInteraction=function(e){var t={};if(e){var n=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),r=this._getKeysForEventDefs(e.mutatedEvents),i=this._splitEventStore(e.mutatedEvents,r),o=function(r){t[r]||(t[r]={affectedEvents:n[r]||dr,mutatedEvents:i[r]||dr,isEvent:e.isEvent,origSeg:e.origSeg})};for(var s in n)o(s);for(var s in i)o(s)}return t},e}();function hr(e,t,n){var r=[];e&&r.push(e),t&&r.push(t);var i={"":Kn(r)};return n&&kt(i,n),i}function pr(e,t,n,r,i){var o,s,a,l;return n instanceof Date?o=n:(o=n.date,s=n.type,a=n.forceOff),l={date:t.formatIso(o,{omitTime:!0}),type:s||"day"},"string"==typeof r&&(i=r,r=null),r=r?" "+function(e){var t=[];for(var n in e){var r=e[n];null!=r&&t.push(n+'="'+Wn(r)+'"')}return t.join(" ")}(r):"",i=i||"",!a&&e.navLinks?"<a"+r+' data-goto="'+Wn(JSON.stringify(l))+'">'+i+"</a>":"<span"+r+">"+i+"</span>"}function fr(e){return e.allDayHtml||Wn(e.allDayText)}function gr(e,t,n,r){var i,o,s=n.calendar,a=n.options,l=n.theme,c=n.dateEnv,d=[];return en(t.activeRange,e)?(d.push("fc-"+He[e.getUTCDay()]),a.monthMode&&c.getMonth(e)!==c.getMonth(t.currentRange.start)&&d.push("fc-other-month"),o=Oe(i=Ve(s.getNow()),1),e<i?d.push("fc-past"):e>=o?d.push("fc-future"):(d.push("fc-today"),!0!==r&&d.push(l.getClass("today")))):d.push("fc-disabled-day"),d}var vr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Mt(t,e),t.prototype.on=function(e,t){return mr(this._handlers||(this._handlers={}),e,t),this},t.prototype.one=function(e,t){return mr(this._oneHandlers||(this._oneHandlers={}),e,t),this},t.prototype.off=function(e,t){return this._handlers&&yr(this._handlers,e,t),this._oneHandlers&&yr(this._oneHandlers,e,t),this},t.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return this.triggerWith(e,this,t),this},t.prototype.triggerWith=function(e,t,n){return this._handlers&&Et(this._handlers[e],t,n),this._oneHandlers&&(Et(this._oneHandlers[e],t,n),delete this._oneHandlers[e]),this},t.prototype.hasHandlers=function(e){return this._handlers&&this._handlers[e]&&this._handlers[e].length||this._oneHandlers&&this._oneHandlers[e]&&this._oneHandlers[e].length},t}(function(){function e(){}return e.mixInto=function(e){this.mixIntoObj(e.prototype)},e.mixIntoObj=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach((function(n){e[n]||(e[n]=t.prototype[n])}))},e.mixOver=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach((function(n){e.prototype[n]=t.prototype[n]}))},e}());function mr(e,t,n){(e[t]||(e[t]=[])).push(n)}function yr(e,t,n){n?e[t]&&(e[t]=e[t].filter((function(e){return e!==n}))):delete e[t]}var Ar=function(){function e(e,t,n,r){this.originEl=e,this.els=t,this.isHorizontal=n,this.isVertical=r}return e.prototype.build=function(){var e=this.originEl,t=this.originClientRect=e.getBoundingClientRect();this.isHorizontal&&this.buildElHorizontals(t.left),this.isVertical&&this.buildElVerticals(t.top)},e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect();t.push(o.left-e),n.push(o.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect();t.push(o.top-e),n.push(o.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,r=this.rights,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,r=this.bottoms,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),br=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),wr=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return Mt(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(br),Er=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Mt(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(br),Sr=function(e){function t(t,n){var r=e.call(this,re("div",{className:"fc-scroller"}))||this;return r.overflowX=t,r.overflowY=n,r.applyOverflow(),r}return Mt(t,e),t.prototype.clear=function(){this.setHeight("auto"),this.applyOverflow()},t.prototype.destroy=function(){ue(this.el)},t.prototype.applyOverflow=function(){Ae(this.el,{overflowX:this.overflowX,overflowY:this.overflowY})},t.prototype.lockOverflow=function(e){var t=this.overflowX,n=this.overflowY;e=e||this.getScrollbarWidths(),"auto"===t&&(t=e.bottom||this.canScrollHorizontally()?"scroll":"hidden"),"auto"===n&&(n=e.left||e.right||this.canScrollVertically()?"scroll":"hidden"),Ae(this.el,{overflowX:t,overflowY:n})},t.prototype.setHeight=function(e){be(this.el,"height",e)},t.prototype.getScrollbarWidths=function(){var e=Ce(this.el);return{left:e.scrollbarLeft,right:e.scrollbarRight,bottom:e.scrollbarBottom}},t}(wr),Dr=function(){function e(e){this.calendarOptions=e,this.processIconOverride()}return e.prototype.processIconOverride=function(){this.iconOverrideOption&&this.setIconOverride(this.calendarOptions[this.iconOverrideOption])},e.prototype.setIconOverride=function(e){var t,n;if("object"==typeof e&&e){for(n in t=kt({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n]);this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix;return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e){var t=this.iconClasses[e];return t?this.baseIconClass+" "+t:""},e.prototype.getCustomButtonIconClass=function(e){var t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}();Dr.prototype.classes={},Dr.prototype.iconClasses={},Dr.prototype.baseIconClass="",Dr.prototype.iconOverridePrefix="";var Tr=0,Cr=function(){function e(e,t,n,r,i){this.calendar=e,this.theme=t,this.dateEnv=n,this.options=r,this.view=i,this.isRtl="rtl"===r.dir,this.eventOrderSpecs=function(e){var t,n,r=[],i=[];for("string"==typeof e?i=e.split(/\s*,\s*/):"function"==typeof e?i=[e]:Array.isArray(e)&&(i=e),t=0;t<i.length;t++)"string"==typeof(n=i[t])?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n});return r}(r.eventOrder),this.nextDayThreshold=Ke(r.nextDayThreshold)}return e.prototype.extend=function(t,n){return new e(this.calendar,this.theme,this.dateEnv,t||this.options,n||this.view)},e}(),xr=function(){function e(){this.uid=String(Tr++)}return e.addEqualityFuncs=function(e){this.prototype.equalityFuncs=kt({},this.prototype.equalityFuncs,e)},e.prototype.receiveProps=function(e,t){var n=this.context;this.context=t,n||this.firstContext(t);var r=function(e,t,n){var r={},i=!1;for(var o in t)o in e&&(e[o]===t[o]||n[o]&&n[o](e[o],t[o]))?r[o]=e[o]:(r[o]=t[o],i=!0);for(var o in e)if(!(o in t)){i=!0;break}return{anyChanges:i,comboProps:r}}(this.props||{},e,this.equalityFuncs),i=r.anyChanges,o=r.comboProps;this.props=o,i&&(n&&this.beforeUpdate(),this.render(o,t),n&&this.afterUpdate())},e.prototype.render=function(e,t){},e.prototype.firstContext=function(e){},e.prototype.beforeUpdate=function(){},e.prototype.afterUpdate=function(){},e.prototype.destroy=function(){},e}();xr.prototype.equalityFuncs={};var Ir=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return Mt(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),ue(this.el)},t.prototype.buildPositionCaches=function(){},t.prototype.queryHit=function(e,t,n,r){return null},t.prototype.isInteractionValid=function(e){var t=this.context.calendar,n=this.props.dateProfile,r=e.mutatedEvents.instances;if(n)for(var i in r)if(!Kt(n.validRange,r[i].range))return!1;return Un(e,t)},t.prototype.isDateSelectionValid=function(e){var t=this.context.calendar,n=this.props.dateProfile;return!(n&&!Kt(n.validRange,e.range))&&function(e,t){return Ln({dateSelection:e},t)}(e,t)},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!fe(e,".fc-mirror")&&(this.isPopover()||!this.isInPopover(e))},t.prototype.isValidDateDownEl=function(e){var t=fe(e,this.fgSegSelector);return(!t||t.classList.contains("fc-mirror"))&&!fe(e,".fc-more")&&!fe(e,"a[data-goto]")&&!this.isInPopover(e)},t.prototype.isPopover=function(){return this.el.classList.contains("fc-popover")},t.prototype.isInPopover=function(e){return Boolean(fe(e,".fc-popover"))},t}(xr);Ir.prototype.fgSegSelector=".fc-event-container > *",Ir.prototype.bgSegSelector=".fc-bgevent:not(.fc-nonbusiness)";var Rr=0;function Mr(e){return{id:String(Rr++),deps:e.deps||[],reducers:e.reducers||[],eventDefParsers:e.eventDefParsers||[],isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],eventResizeJoinTransforms:e.eventResizeJoinTransforms||[],viewContainerModifiers:e.viewContainerModifiers||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,defaultView:e.defaultView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{}}}var kr=function(){function e(){this.hooks={reducers:[],eventDefParsers:[],isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],eventResizeJoinTransforms:[],viewContainerModifiers:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,defaultView:"",elementDraggingImpl:null,optionChangeHandlers:{}},this.addedHash={}}return e.prototype.add=function(e){if(!this.addedHash[e.id]){this.addedHash[e.id]=!0;for(var t=0,n=e.deps;t<n.length;t++){var r=n[t];this.add(r)}this.hooks=(i=this.hooks,o=e,{reducers:i.reducers.concat(o.reducers),eventDefParsers:i.eventDefParsers.concat(o.eventDefParsers),isDraggableTransformers:i.isDraggableTransformers.concat(o.isDraggableTransformers),eventDragMutationMassagers:i.eventDragMutationMassagers.concat(o.eventDragMutationMassagers),eventDefMutationAppliers:i.eventDefMutationAppliers.concat(o.eventDefMutationAppliers),dateSelectionTransformers:i.dateSelectionTransformers.concat(o.dateSelectionTransformers),datePointTransforms:i.datePointTransforms.concat(o.datePointTransforms),dateSpanTransforms:i.dateSpanTransforms.concat(o.dateSpanTransforms),views:kt({},i.views,o.views),viewPropsTransformers:i.viewPropsTransformers.concat(o.viewPropsTransformers),isPropsValid:o.isPropsValid||i.isPropsValid,externalDefTransforms:i.externalDefTransforms.concat(o.externalDefTransforms),eventResizeJoinTransforms:i.eventResizeJoinTransforms.concat(o.eventResizeJoinTransforms),viewContainerModifiers:i.viewContainerModifiers.concat(o.viewContainerModifiers),eventDropTransformers:i.eventDropTransformers.concat(o.eventDropTransformers),calendarInteractions:i.calendarInteractions.concat(o.calendarInteractions),componentInteractions:i.componentInteractions.concat(o.componentInteractions),themeClasses:kt({},i.themeClasses,o.themeClasses),eventSourceDefs:i.eventSourceDefs.concat(o.eventSourceDefs),cmdFormatter:o.cmdFormatter||i.cmdFormatter,recurringTypes:i.recurringTypes.concat(o.recurringTypes),namedTimeZonedImpl:o.namedTimeZonedImpl||i.namedTimeZonedImpl,defaultView:i.defaultView||o.defaultView,elementDraggingImpl:i.elementDraggingImpl||o.elementDraggingImpl,optionChangeHandlers:kt({},i.optionChangeHandlers,o.optionChangeHandlers)})}var i,o},e}();var _r=Mr({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e)?e:Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),Br=Mr({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e?e:"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var r=e.calendar.dateEnv;!function(e,t,n){var r=!1,i=function(){r||(r=!0,t.apply(this,arguments))},o=function(){r||(r=!0,n&&n.apply(this,arguments))},s=e(i,o);s&&"function"==typeof s.then&&s.then(i,o)}(e.eventSource.meta.bind(null,{start:r.toDate(e.range.start),end:r.toDate(e.range.end),startStr:r.formatIso(e.range.start),endStr:r.formatIso(e.range.end),timeZone:r.timeZone}),(function(e){t({rawEvents:e})}),n)}}]});function Nr(e,t,n,r,i){var o=null;"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+Pr(t)}(t,n):o=Pr(n);var s=new XMLHttpRequest;s.open(e,t,!0),"GET"!==e&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onload=function(){if(s.status>=200&&s.status<400)try{var e=JSON.parse(s.responseText);r(e,s)}catch(e){i("Failure parsing JSON",s)}else i("Request failed",s)},s.onerror=function(){i("Request failed",s)},s.send(o)}function Pr(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}var Hr=Mr({eventSourceDefs:[{parseMeta:function(e){if("string"==typeof e)e={url:e};else if(!e||"object"!=typeof e||!e.url)return null;return{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,n){var r=e.eventSource.meta,i=function(e,t,n){var r,i,o,s,a=n.dateEnv,l={};null==(r=e.startParam)&&(r=n.opt("startParam"));null==(i=e.endParam)&&(i=n.opt("endParam"));null==(o=e.timeZoneParam)&&(o=n.opt("timeZoneParam"));s="function"==typeof e.extraParams?e.extraParams():e.extraParams||{};kt(l,s),l[r]=a.formatIso(t.start),l[i]=a.formatIso(t.end),"local"!==a.timeZone&&(l[o]=a.timeZone);return l}(r,e.range,e.calendar);Nr(r.method,r.url,i,(function(e,n){t({rawEvents:e,xhr:n})}),(function(e,t){n({message:e,xhr:t})}))}}]});var zr=Mr({recurringTypes:[{parse:function(e,t,n){var r,i,o=n.createMarker.bind(n),s=Tt(e,{daysOfWeek:null,startTime:Ke,endTime:Ke,startRecur:o,endRecur:o},{},t),a=!1;for(var l in s)if(null!=s[l]){a=!0;break}if(a){var c=null;return"duration"in t&&(c=Ke(t.duration),delete t.duration),!c&&s.startTime&&s.endTime&&(r=s.endTime,i=s.startTime,c={years:r.years-i.years,months:r.months-i.months,days:r.days-i.days,milliseconds:r.milliseconds-i.milliseconds}),{allDayGuess:Boolean(!s.startTime&&!s.endTime),duration:c,typeData:s}}return null},expand:function(e,t,n){var r=qt(t,{start:e.startRecur,end:e.endRecur});return r?function(e,t,n,r){var i=e?zt(e):null,o=Ve(n.start),s=n.end,a=[];for(;o<s;){var l=void 0;i&&!i[o.getUTCDay()]||(l=t?r.add(o,t):o,a.push(l)),o=Oe(o,1)}return a}(e.daysOfWeek,e.startTime,r,n):[]}}]});var Or=Mr({optionChangeHandlers:{events:function(e,t,n){Ur([e],t,n)},eventSources:Ur,plugins:function(e,t){t.addPluginInputs(e)}}});function Ur(e,t,n){for(var r=Ot(t.state.eventSources),i=[],o=0,s=e;o<s.length;o++){for(var a=s[o],l=!1,c=0;c<r.length;c++)if(n(r[c]._raw,a)){r.splice(c,1),l=!0;break}l||i.push(a)}for(var d=0,u=r;d<u.length;d++){var h=u[d];t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:h.sourceId})}for(var p=0,f=i;p<f.length;p++){var g=f[p];t.addEventSource(g)}}var Lr={},Qr={defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",columnHeader:!0,defaultView:"",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",timeGridEventMinHeight:0,themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",eventLimit:!1,eventLimitClick:"popover",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5},Vr={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"}},Fr=["header","footer","buttonText","buttonIcons"];var Gr=[_r,Br,Hr,zr,Or];var jr={code:"en",week:{dow:0,doy:4},dir:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekLabel:"W",allDayText:"all-day",eventLimitText:"more",noEventsMessage:"No events to display"};function Wr(e){for(var t=e.length>0?e[0].code:"en",n=window.FullCalendarLocalesAll||[],r=window.FullCalendarLocales||{},i=n.concat(Ot(r),e),o={en:jr},s=0,a=i;s<a.length;s++){var l=a[s];o[l.code]=l}return{map:o,defaultCode:t}}function Yr(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var n=[].concat(e||[]),r=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n].toLocaleLowerCase().split("-"),i=r.length;i>0;i--){var o=r.slice(0,i).join("-");if(t[o])return t[o]}return null}(n,t)||jr;return Zr(e,n,r)}(e,t):Zr(e.code,[e.code],e)}function Zr(e,t,n){var r=Nt([jr,n],["buttonText"]);delete r.code;var i=r.week;return delete r.week,{codeArg:e,codes:t,week:i,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}var Jr=function(){function e(e){this.overrides=kt({},e),this.dynamicOverrides={},this.compute()}return e.prototype.mutate=function(e,t,n){if(Object.keys(e).length||t.length){var r=n?this.dynamicOverrides:this.overrides;kt(r,e);for(var i=0,o=t;i<o.length;i++){delete r[o[i]]}this.compute()}},e.prototype.compute=function(){var e=St(this.dynamicOverrides.locales,this.overrides.locales,Qr.locales),t=St(this.dynamicOverrides.locale,this.overrides.locale,Qr.locale),n=Wr(e),r=Yr(t||n.defaultCode,n.map).options,i="rtl"===St(this.dynamicOverrides.dir,this.overrides.dir,r.dir)?Vr:{};this.dirDefaults=i,this.localeDefaults=r,this.computed=Nt([Qr,i,r,this.overrides,this.dynamicOverrides],Fr)},e}(),qr={};var Xr,$r=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return Ze(e)},e.prototype.markerToArray=function(e){return Ye(e)},e}();Xr=$r,qr["gregory"]=Xr;var Kr=/^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;var ei=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t;e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new qr[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekLabel=null!=e.weekLabel?e.weekLabel:e.locale.options.weekLabel,this.cmdFormatter=e.cmdFormatter}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e);return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):Ze(je(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e);var t=null;return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=Ze(e)),null!==t&&Je(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=function(e){var t=Kr.exec(e);if(t){var n=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0));if(Je(n)){var r=null;return t[13]&&(r=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:n,isTimeUnspecified:!t[6],timeZoneOffset:r}}}return null}(e);if(null===t)return null;var n=t.marker,r=null;return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem;return qe(e)===qe(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem;return qe(e)===qe(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t);return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:null!==(n=function(e,t){var n=Qe(e,t);return null!==n&&n%7==0?n/7:null}(e,t))?{unit:"week",value:n}:null!==(n=Qe(e,t))?{unit:"day",value:n}:wt(n=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t))?{unit:"hour",value:n}:wt(n=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t))?{unit:"minute",value:n}:wt(n=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t))?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}},e.prototype.countDurationsBetween=function(e,t,n){var r;return n.years&&null!==(r=this.diffWholeYears(e,t))?r/(it(n)/365):n.months&&null!==(r=this.diffWholeMonths(e,t))?r/function(e){return it(e)/30}(n):n.days&&null!==(r=Qe(e,t))?r/it(n):(t.valueOf()-e.valueOf())/ot(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?Ve(e):"hour"===t?function(e){return Ze([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return Ze([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return Ze([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):void 0},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,n){var r=e.getUTCFullYear(),i=Fe(e,r,t,n);if(i<1)return Fe(e,r-1,t,n);var o=Fe(e,r+1,t,n);return o>=1?Math.min(i,o):i}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,r){return void 0===r&&(r={}),r.isEndExclusive&&(t=Ue(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=r.forcedStartTzo?r.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=r.forcedEndTzo?r.forcedEndTzo:this.offsetForMarker(t)},this)},e.prototype.formatIso=function(e,t){void 0===t&&(t={});var n=null;return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),function(e,t,n){void 0===n&&(n=!1);var r=e.toISOString();return r=r.replace(".000",""),n&&(r=r.replace("T00:00:00Z","")),r.length>10&&(null==t?r=r.replace("Z",""):0!==t&&(r=r.replace("Z",mn(t,!0)))),r}(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?Ze(je(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?Ze(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-We(Ye(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(Ye(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?We(Ye(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(Ye(e))*60):new Date(e.valueOf()-(t||0))},e}(),ti={id:String,allDayDefault:Boolean,eventDataTransform:Function,success:Function,failure:Function},ni=0;function ri(e,t){return!t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange}function ii(e,t){for(var n=t.pluginSystem.hooks.eventSourceDefs,r=n.length-1;r>=0;r--){var i=n[r].parseMeta(e);if(i){var o=oi("object"==typeof e?e:{},i,r,t);return o._raw=e,o}}return null}function oi(e,t,n,r){var i={},o=Tt(e,ti,{},i),s={},a=qn(i,r,s);return o.isFetching=!1,o.latestFetchId="",o.fetchRange=null,o.publicId=String(e.id||""),o.sourceId=String(ni++),o.sourceDefId=n,o.meta=t,o.ui=a,o.extendedProps=s,o}function si(e,t,n,r){switch(t.type){case"ADD_EVENT_SOURCES":return function(e,t,n,r){for(var i={},o=0,s=t;o<s.length;o++){var a=s[o];i[a.sourceId]=a}n&&(i=li(i,n,r));return kt({},e,i)}(e,t.sources,n?n.activeRange:null,r);case"REMOVE_EVENT_SOURCE":return i=e,o=t.sourceId,Pt(i,(function(e){return e.sourceId!==o}));case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return n?li(e,n.activeRange,r):e;case"FETCH_EVENT_SOURCES":case"CHANGE_TIMEZONE":return ci(e,t.sourceIds?zt(t.sourceIds):function(e,t){return Pt(e,(function(e){return ri(e,t)}))}(e,r),n?n.activeRange:null,r);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,n,r){var i,o=e[t];if(o&&n===o.latestFetchId)return kt({},e,((i={})[t]=kt({},o,{isFetching:!1,fetchRange:r}),i));return e}(e,t.sourceId,t.fetchId,t.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return e}var i,o}var ai=0;function li(e,t,n){return ci(e,Pt(e,(function(e){return function(e,t,n){return ri(e,n)?!n.opt("lazyFetching")||!e.fetchRange||e.isFetching||t.start<e.fetchRange.start||t.end>e.fetchRange.end:!e.latestFetchId}(e,t,n)})),t,n)}function ci(e,t,n,r){var i={};for(var o in e){var s=e[o];t[o]?i[o]=di(s,n,r):i[o]=s}return i}function di(e,t,n){var r=n.pluginSystem.hooks.eventSourceDefs[e.sourceDefId],i=String(ai++);return r.fetch({eventSource:e,calendar:n,range:t},(function(r){var o,s,a=r.rawEvents,l=n.opt("eventSourceSuccess");e.success&&(s=e.success(a,r.xhr)),l&&(o=l(a,r.xhr)),a=s||o||a,n.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:i,fetchRange:t,rawEvents:a})}),(function(r){var o=n.opt("eventSourceFailure");console.warn(r.message,r),e.failure&&e.failure(r),o&&o(r),n.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:i,fetchRange:t,error:r})})),kt({},e,{isFetching:!0,latestFetchId:i})}var ui=function(){function e(e,t){this.viewSpec=e,this.options=e.options,this.dateEnv=t.dateEnv,this.calendar=t,this.initHiddenDays()}return e.prototype.buildPrev=function(e,t){var n=this.dateEnv,r=n.subtract(n.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(r,-1)},e.prototype.buildNext=function(e,t){var n=this.dateEnv,r=n.add(n.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(r,1)},e.prototype.build=function(e,t,n){var r;void 0===n&&(n=!1);var i,o,s,a,l,c,d,u,h;return r=this.buildValidRange(),r=this.trimHiddenDays(r),n&&(u=e,e=null!=(h=r).start&&u<h.start?h.start:null!=h.end&&u>=h.end?new Date(h.end.valueOf()-1):u),s=this.buildCurrentRangeInfo(e,t),a=/^(year|month|week|day)$/.test(s.unit),l=this.buildRenderRange(this.trimHiddenDays(s.range),s.unit,a),c=l=this.trimHiddenDays(l),this.options.showNonCurrentDates||(c=qt(c,s.range)),i=Ke(this.options.minTime),o=Ke(this.options.maxTime),c=qt(c=this.adjustActiveRange(c,i,o),r),d=$t(s.range,r),{validRange:r,currentRange:s.range,currentRangeUnit:s.unit,isRangeAllDay:a,activeRange:c,renderRange:l,minTime:i,maxTime:o,isValid:d,dateIncrement:this.buildDateIncrement(s.duration)}},e.prototype.buildValidRange=function(){return this.getRangeOption("validRange",this.calendar.getNow())||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,r=this.viewSpec,i=this.dateEnv,o=null,s=null,a=null;return r.duration?(o=r.duration,s=r.durationUnit,a=this.buildRangeFromDuration(e,t,o,s)):(n=this.options.dayCount)?(s="day",a=this.buildRangeFromDayCount(e,t,n)):(a=this.buildCustomVisibleRange(e))?s=i.greatestWholeUnit(a.start,a.end).unit:(s=at(o=this.getFallbackDuration()).unit,a=this.buildRangeFromDuration(e,t,o,s)),{duration:o,unit:s,range:a}},e.prototype.getFallbackDuration=function(){return Ke({day:1})},e.prototype.adjustActiveRange=function(e,t,n){var r=this.dateEnv,i=e.start,o=e.end;return this.viewSpec.class.prototype.usesMinMaxTime&&(it(t)<0&&(i=Ve(i),i=r.add(i,t)),it(n)>1&&(o=Oe(o=Ve(o),-1),o=r.add(o,n))),{start:i,end:o}},e.prototype.buildRangeFromDuration=function(e,t,n,r){var i,o,s,a,l,c=this.dateEnv,d=this.options.dateAlignment;function u(){s=c.startOf(e,d),a=c.add(s,n),l={start:s,end:a}}return d||((i=this.options.dateIncrement)?(o=Ke(i),d=ot(o)<ot(n)?at(o,!tt(i)).unit:r):d=r),it(n)<=1&&this.isHiddenDay(s)&&(s=Ve(s=this.skipHiddenDays(s,t))),u(),this.trimHiddenDays(l)||(e=this.skipHiddenDays(e,t),u()),l},e.prototype.buildRangeFromDayCount=function(e,t,n){var r,i=this.dateEnv,o=this.options.dateAlignment,s=0,a=e;o&&(a=i.startOf(a,o)),a=Ve(a),r=a=this.skipHiddenDays(a,t);do{r=Oe(r,1),this.isHiddenDay(r)||s++}while(s<n);return{start:a,end:r}},e.prototype.buildCustomVisibleRange=function(e){var t=this.dateEnv,n=this.getRangeOption("visibleRange",t.toDate(e));return!n||null!=n.start&&null!=n.end?n:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t,n=this.options.dateIncrement;return n?Ke(n):(t=this.options.dateAlignment)?Ke(1,t):e||Ke({days:1})},e.prototype.getRangeOption=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=this.options[e];return"function"==typeof r&&(r=r.apply(null,t)),r&&(r=Yt(r,this.dateEnv)),r&&(r=xt(r)),r},e.prototype.initHiddenDays=function(){var e,t=this.options.hiddenDays||[],n=[],r=0;for(!1===this.options.weekends&&t.push(0,6),e=0;e<7;e++)(n[e]=-1!==t.indexOf(e))||r++;if(!r)throw new Error("invalid hiddenDays");this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end;return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=Oe(e,t);return e},e}();function hi(e,t,n){for(var r=function(e,t){switch(t.type){case"SET_VIEW_TYPE":return t.viewType;default:return e}}(e.viewType,t),i=function(e,t,n,r,i){var o;switch(t.type){case"PREV":o=i.dateProfileGenerators[r].buildPrev(e,n);break;case"NEXT":o=i.dateProfileGenerators[r].buildNext(e,n);break;case"SET_DATE":e.activeRange&&en(e.currentRange,t.dateMarker)||(o=i.dateProfileGenerators[r].build(t.dateMarker,void 0,!0));break;case"SET_VIEW_TYPE":var s=i.dateProfileGenerators[r];if(!s)throw new Error(r?'The FullCalendar view "'+r+'" does not exist. Make sure your plugins are loaded correctly.':"No available FullCalendar view plugins.");o=s.build(t.dateMarker||n,void 0,!0)}return!o||!o.isValid||e&&(a=e,l=o,Xt(a.validRange,l.validRange)&&Xt(a.activeRange,l.activeRange)&&Xt(a.renderRange,l.renderRange)&&nt(a.minTime,l.minTime)&&nt(a.maxTime,l.maxTime))?e:o;var a,l}(e.dateProfile,t,e.currentDate,r,n),o=si(e.eventSources,t,i,n),s=kt({},e,{viewType:r,dateProfile:i,currentDate:pi(e.currentDate,t,i),eventSources:o,eventStore:Hn(e.eventStore,t,o,i,n),dateSelection:fi(e.dateSelection,t,n),eventSelection:gi(e.eventSelection,t),eventDrag:vi(e.eventDrag,t,o,n),eventResize:mi(e.eventResize,t,o,n),eventSourceLoadingLevel:yi(o),loadingLevel:yi(o)}),a=0,l=n.pluginSystem.hooks.reducers;a<l.length;a++){s=(0,l[a])(s,t,n)}return s}function pi(e,t,n){switch(t.type){case"PREV":case"NEXT":return en(n.currentRange,e)?e:n.currentRange.start;case"SET_DATE":case"SET_VIEW_TYPE":var r=t.dateMarker||e;return n.activeRange&&!en(n.activeRange,r)?n.currentRange.start:r;default:return e}}function fi(e,t,n){switch(t.type){case"SELECT_DATES":return t.selection;case"UNSELECT_DATES":return null;default:return e}}function gi(e,t){switch(t.type){case"SELECT_EVENT":return t.eventInstanceId;case"UNSELECT_EVENT":return"";default:return e}}function vi(e,t,n,r){switch(t.type){case"SET_EVENT_DRAG":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_DRAG":return null;default:return e}}function mi(e,t,n,r){switch(t.type){case"SET_EVENT_RESIZE":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_RESIZE":return null;default:return e}}function yi(e){var t=0;for(var n in e)e[n].isFetching&&t++;return t}var Ai={start:null,end:null,allDay:Boolean};function bi(e,t,n){var r=function(e,t){var n={},r=Tt(e,Ai,{},n),i=r.start?t.createMarkerMeta(r.start):null,o=r.end?t.createMarkerMeta(r.end):null,s=r.allDay;null==s&&(s=i&&i.isTimeUnspecified&&(!o||o.isTimeUnspecified));return n.range={start:i?i.marker:null,end:o?o.marker:null},n.allDay=s,n}(e,t),i=r.range;if(!i.start)return null;if(!i.end){if(null==n)return null;i.end=t.add(i.start,n)}return r}function wi(e,t,n){var r=or({editable:!1},"",e.allDay,!0,n);return{def:r,ui:xn(r,t),instance:sr(r.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}function Ei(e,t,n,r){if(t[e])return t[e];var i=function(e,t,n,r){var i=n[e],o=r[e],s=function(e){return i&&null!==i[e]?i[e]:o&&null!==o[e]?o[e]:null},a=s("class"),l=s("superType");!l&&a&&(l=Si(a,r)||Si(a,n));var c=null;if(l){if(l===e)throw new Error("Can't have a custom view type that references itself");c=Ei(l,t,n,r)}!a&&c&&(a=c.class);if(!a)return null;return{type:e,class:a,defaults:kt({},c?c.defaults:{},i?i.options:{}),overrides:kt({},c?c.overrides:{},o?o.options:{})}}(e,t,n,r);return i&&(t[e]=i),i}function Si(e,t){var n=Object.getPrototypeOf(e.prototype);for(var r in t){var i=t[r];if(i.class&&i.class.prototype===n)return r}return""}function Di(e){return Ht(e,Ci)}var Ti={type:String,class:null};function Ci(e){"function"==typeof e&&(e={class:e});var t={},n=Tt(e,Ti,{},t);return{superType:n.type,class:n.class,options:t}}function xi(e,t){var n=Di(e),r=Di(t.overrides.views);return Ht(function(e,t){var n,r={};for(n in e)Ei(n,r,e,t);for(n in t)Ei(n,r,e,t);return r}(n,r),(function(e){return function(e,t,n){var r=e.overrides.duration||e.defaults.duration||n.dynamicOverrides.duration||n.overrides.duration,i=null,o="",s="",a={};if(r&&(i=Ke(r))){var l=at(i,!tt(r));o=l.unit,1===l.value&&(s=o,a=t[o]?t[o].options:{})}var c=function(t){var n=t.buttonText||{},r=e.defaults.buttonTextKey;return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[s]?n[s]:void 0};return{type:e.type,class:e.class,duration:i,durationUnit:o,singleUnit:s,options:kt({},Qr,e.defaults,n.dirDefaults,n.localeDefaults,n.overrides,a,e.overrides,n.dynamicOverrides),buttonTextOverride:c(n.dynamicOverrides)||c(n.overrides)||e.overrides.buttonText,buttonTextDefault:c(n.localeDefaults)||c(n.dirDefaults)||e.defaults.buttonText||c(Qr)||e.type}}(e,r,t)}))}var Ii=function(e){function t(t){var n=e.call(this)||this;return n._renderLayout=cr(n.renderLayout,n.unrenderLayout),n._updateTitle=cr(n.updateTitle,null,[n._renderLayout]),n._updateActiveButton=cr(n.updateActiveButton,null,[n._renderLayout]),n._updateToday=cr(n.updateToday,null,[n._renderLayout]),n._updatePrev=cr(n.updatePrev,null,[n._renderLayout]),n._updateNext=cr(n.updateNext,null,[n._renderLayout]),n.el=re("div",{className:"fc-toolbar "+t}),n}return Mt(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this._renderLayout.unrender(),ue(this.el)},t.prototype.render=function(e){this._renderLayout(e.layout),this._updateTitle(e.title),this._updateActiveButton(e.activeButton),this._updateToday(e.isTodayEnabled),this._updatePrev(e.isPrevEnabled),this._updateNext(e.isNextEnabled)},t.prototype.renderLayout=function(e){var t=this.el;this.viewsWithButtons=[],ae(t,this.renderSection("left",e.left)),ae(t,this.renderSection("center",e.center)),ae(t,this.renderSection("right",e.right))},t.prototype.unrenderLayout=function(){this.el.innerHTML=""},t.prototype.renderSection=function(e,t){var n=this,r=this.context,i=r.theme,o=r.calendar,s=o.optionsManager,a=o.viewSpecs,l=re("div",{className:"fc-"+e}),c=s.computed.customButtons||{},d=s.overrides.buttonText||{},u=s.computed.buttonText||{};return t&&t.split(" ").forEach((function(e,t){var r,s=[],h=!0;if(e.split(",").forEach((function(e,t){var r,l,p,f,g,v,m,y,A;"title"===e?(s.push(ie("<h2>&nbsp;</h2>")),h=!1):((r=c[e])?(p=function(e){r.click&&r.click.call(y,e)},(f=i.getCustomButtonIconClass(r))||(f=i.getIconClass(e))||(g=r.text)):(l=a[e])?(n.viewsWithButtons.push(e),p=function(){o.changeView(e)},(g=l.buttonTextOverride)||(f=i.getIconClass(e))||(g=l.buttonTextDefault)):o[e]&&(p=function(){o[e]()},(g=d[e])||(f=i.getIconClass(e))||(g=u[e])),p&&(m=["fc-"+e+"-button",i.getClass("button")],g?(v=Wn(g),A=""):f&&(v="<span class='"+f+"'></span>",A=' aria-label="'+e+'"'),(y=ie('<button type="button" class="'+m.join(" ")+'"'+A+">"+v+"</button>")).addEventListener("click",p),s.push(y)))})),s.length>1){r=document.createElement("div");var p=i.getClass("buttonGroup");h&&p&&r.classList.add(p),ae(r,s),l.appendChild(r)}else ae(l,s)})),l},t.prototype.updateToday=function(e){this.toggleButtonEnabled("today",e)},t.prototype.updatePrev=function(e){this.toggleButtonEnabled("prev",e)},t.prototype.updateNext=function(e){this.toggleButtonEnabled("next",e)},t.prototype.updateTitle=function(e){ve(this.el,"h2").forEach((function(t){t.innerText=e}))},t.prototype.updateActiveButton=function(e){var t=this.context.theme.getClass("buttonActive");ve(this.el,"button").forEach((function(n){e&&n.classList.contains("fc-"+e+"-button")?n.classList.add(t):n.classList.remove(t)}))},t.prototype.toggleButtonEnabled=function(e,t){ve(this.el,".fc-"+e+"-button").forEach((function(e){e.disabled=!t}))},t}(xr),Ri=function(e){function t(t){var n=e.call(this)||this;return n.elClassNames=[],n.renderSkeleton=cr(n._renderSkeleton,n._unrenderSkeleton),n.renderToolbars=cr(n._renderToolbars,n._unrenderToolbars,[n.renderSkeleton]),n.buildComponentContext=nn(ki),n.buildViewPropTransformers=nn(_i),n.el=t,n.computeTitle=nn(Mi),n.parseBusinessHours=nn((function(e){return lr(e,n.context.calendar)})),n}return Mt(t,e),t.prototype.render=function(e,t){this.freezeHeight();var n=this.computeTitle(e.dateProfile,e.viewSpec.options);this.renderSkeleton(t),this.renderToolbars(e.viewSpec,e.dateProfile,e.currentDate,n),this.renderView(e,n),this.updateSize(),this.thawHeight()},t.prototype.destroy=function(){this.header&&this.header.destroy(),this.footer&&this.footer.destroy(),this.renderSkeleton.unrender(),e.prototype.destroy.call(this)},t.prototype._renderSkeleton=function(e){this.updateElClassNames(e),le(this.el,this.contentEl=re("div",{className:"fc-view-container"}));for(var t=e.calendar,n=0,r=t.pluginSystem.hooks.viewContainerModifiers;n<r.length;n++){(0,r[n])(this.contentEl,t)}},t.prototype._unrenderSkeleton=function(){this.view&&(this.savedScroll=this.view.queryScroll(),this.view.destroy(),this.view=null),ue(this.contentEl),this.removeElClassNames()},t.prototype.removeElClassNames=function(){for(var e=this.el.classList,t=0,n=this.elClassNames;t<n.length;t++){var r=n[t];e.remove(r)}this.elClassNames=[]},t.prototype.updateElClassNames=function(e){this.removeElClassNames();var t=e.theme,n=e.options;this.elClassNames=["fc","fc-"+n.dir,t.getClass("widget")];for(var r=this.el.classList,i=0,o=this.elClassNames;i<o.length;i++){var s=o[i];r.add(s)}},t.prototype._renderToolbars=function(e,t,n,r){var i=this.context,o=this.header,s=this.footer,a=i.options,l=i.calendar,c=a.header,d=a.footer,u=this.props.dateProfileGenerator,h=l.getNow(),p=u.build(h),f=u.buildPrev(t,n),g=u.buildNext(t,n),v={title:r,activeButton:e.type,isTodayEnabled:p.isValid&&!en(t.currentRange,h),isPrevEnabled:f.isValid,isNextEnabled:g.isValid};c?(o||(o=this.header=new Ii("fc-header-toolbar"),le(this.el,o.el)),o.receiveProps(kt({layout:c},v),i)):o&&(o.destroy(),o=this.header=null),d?(s||(s=this.footer=new Ii("fc-footer-toolbar"),ae(this.el,s.el)),s.receiveProps(kt({layout:d},v),i)):s&&(s.destroy(),s=this.footer=null)},t.prototype._unrenderToolbars=function(){this.header&&(this.header.destroy(),this.header=null),this.footer&&(this.footer.destroy(),this.footer=null)},t.prototype.renderView=function(e,t){var n=this.view,r=this.context,i=r.calendar,o=r.options,s=e.viewSpec,a=e.dateProfileGenerator;n&&n.viewSpec===s||(n&&n.destroy(),n=this.view=new s.class(s,this.contentEl),this.savedScroll&&(n.addScroll(this.savedScroll,!0),this.savedScroll=null)),n.title=t;for(var l={dateProfileGenerator:a,dateProfile:e.dateProfile,businessHours:this.parseBusinessHours(s.options.businessHours),eventStore:e.eventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize},c=0,d=this.buildViewPropTransformers(i.pluginSystem.hooks.viewPropsTransformers);c<d.length;c++){var u=d[c];kt(l,u.transform(l,s,e,o))}n.receiveProps(l,this.buildComponentContext(this.context,s,n))},t.prototype.updateSize=function(e){void 0===e&&(e=!1);var t=this.view;t&&((e||null==this.isHeightAuto)&&this.computeHeightVars(),t.updateSize(e,this.viewHeight,this.isHeightAuto),t.updateNowIndicator(),t.popScroll(e))},t.prototype.computeHeightVars=function(){var e=this.context.calendar,t=e.opt("height"),n=e.opt("contentHeight");if(this.isHeightAuto="auto"===t||"auto"===n,"number"==typeof n)this.viewHeight=n;else if("function"==typeof n)this.viewHeight=n();else if("number"==typeof t)this.viewHeight=t-this.queryToolbarsHeight();else if("function"==typeof t)this.viewHeight=t()-this.queryToolbarsHeight();else if("parent"===t){var r=this.el.parentNode;this.viewHeight=r.getBoundingClientRect().height-this.queryToolbarsHeight()}else this.viewHeight=Math.round(this.contentEl.getBoundingClientRect().width/Math.max(e.opt("aspectRatio"),.5))},t.prototype.queryToolbarsHeight=function(){var e=0;return this.header&&(e+=Re(this.header.el)),this.footer&&(e+=Re(this.footer.el)),e},t.prototype.freezeHeight=function(){Ae(this.el,{height:this.el.getBoundingClientRect().height,overflow:"hidden"})},t.prototype.thawHeight=function(){Ae(this.el,{height:"",overflow:""})},t}(xr);function Mi(e,t){var n;return n=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,this.context.dateEnv.formatRange(n.start,n.end,gn(t.titleFormat||function(e){var t=e.currentRangeUnit;if("year"===t)return{year:"numeric"};if("month"===t)return{year:"numeric",month:"long"};var n=Qe(e.currentRange.start,e.currentRange.end);return null!==n&&n>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}(e),t.titleRangeSeparator),{isEndExclusive:e.isRangeAllDay})}function ki(e,t,n){return e.extend(t.options,n)}function _i(e){return e.map((function(e){return new e}))}var Bi=function(){function e(e){this.component=e.component}return e.prototype.destroy=function(){},e}();function Ni(e){var t;return(t={})[e.component.uid]=e,t}var Pi={},Hi=function(e){function t(t){var n=e.call(this,t)||this;n.handleSegClick=function(e,t){var r=n.component,i=r.context,o=i.calendar,s=i.view,a=Tn(t);if(a&&r.isValidSegDownEl(e.target)){var l=fe(e.target,".fc-has-url"),c=l?l.querySelector("a[href]").href:"";o.publiclyTrigger("eventClick",[{el:t,event:new wn(r.context.calendar,a.eventRange.def,a.eventRange.instance),jsEvent:e,view:s}]),c&&!e.defaultPrevented&&(window.location.href=c)}};var r=t.component;return n.destroy=Ne(r.el,"click",r.fgSegSelector+","+r.bgSegSelector,n.handleSegClick),n}return Mt(t,e),t}(Bi),zi=function(e){function t(t){var n=e.call(this,t)||this;n.handleEventElRemove=function(e){e===n.currentSegEl&&n.handleSegLeave(null,n.currentSegEl)},n.handleSegEnter=function(e,t){Tn(t)&&(t.classList.add("fc-allow-mouse-resize"),n.currentSegEl=t,n.triggerEvent("eventMouseEnter",e,t))},n.handleSegLeave=function(e,t){n.currentSegEl&&(t.classList.remove("fc-allow-mouse-resize"),n.currentSegEl=null,n.triggerEvent("eventMouseLeave",e,t))};var r,i,o,s,a,l=t.component;return n.removeHoverListeners=(r=l.el,i=l.fgSegSelector+","+l.bgSegSelector,o=n.handleSegEnter,s=n.handleSegLeave,Ne(r,"mouseover",i,(function(e,t){if(t!==a){a=t,o(e,t);var n=function(e){a=null,s(e,t),t.removeEventListener("mouseleave",n)};t.addEventListener("mouseleave",n)}}))),l.context.calendar.on("eventElRemove",n.handleEventElRemove),n}return Mt(t,e),t.prototype.destroy=function(){this.removeHoverListeners(),this.component.context.calendar.off("eventElRemove",this.handleEventElRemove)},t.prototype.triggerEvent=function(e,t,n){var r=this.component,i=r.context,o=i.calendar,s=i.view,a=Tn(n);t&&!r.isValidSegDownEl(t.target)||o.publiclyTrigger(e,[{el:n,event:new wn(o,a.eventRange.def,a.eventRange.instance),jsEvent:t,view:s}])},t}(Bi),Oi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Mt(t,e),t}(Dr);Oi.prototype.classes={widget:"fc-unthemed",widgetHeader:"fc-widget-header",widgetContent:"fc-widget-content",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active",popoverHeader:"fc-widget-header",popoverContent:"fc-widget-content",headerRow:"fc-widget-header",dayRow:"fc-widget-content",listView:"fc-widget-content"},Oi.prototype.baseIconClass="fc-icon",Oi.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},Oi.prototype.iconOverrideOption="buttonIcons",Oi.prototype.iconOverrideCustomButtonOption="icon",Oi.prototype.iconOverridePrefix="fc-icon-";var Ui=function(){function e(e,t){var n,r,i,o=this;this.buildComponentContext=nn(Li),this.parseRawLocales=nn(Wr),this.buildLocale=nn(Yr),this.buildDateEnv=nn(Qi),this.buildTheme=nn(Vi),this.buildEventUiSingleBase=nn(this._buildEventUiSingleBase),this.buildSelectionConfig=nn(this._buildSelectionConfig),this.buildEventUiBySource=(n=Gi,r=Ut,i=null,function(){var e=n.apply(this,arguments);return(null===i||i!==e&&!r(i,e))&&(i=e),i}),this.buildEventUiBases=nn(ji),this.interactionsStore={},this.actionQueue=[],this.isReducing=!1,this.needsRerender=!1,this.isRendering=!1,this.renderingPauseDepth=0,this.buildDelayedRerender=nn(Fi),this.afterSizingTriggers={},this.isViewUpdated=!1,this.isDatesUpdated=!1,this.isEventsUpdated=!1,this.el=e,this.optionsManager=new Jr(t||{}),this.pluginSystem=new kr,this.addPluginInputs(this.optionsManager.computed.plugins||[]),this.handleOptions(this.optionsManager.computed),this.publiclyTrigger("_init"),this.hydrate(),this.calendarInteractions=this.pluginSystem.hooks.calendarInteractions.map((function(e){return new e(o)}))}return e.prototype.addPluginInputs=function(e){for(var t=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n];if("string"==typeof i){var o="FullCalendar"+yt(i);window[o]?t.push(window[o].default):console.warn("Plugin file not loaded for "+i)}else t.push(i)}return Gr.concat(t)}(e),n=0,r=t;n<r.length;n++){var i=r[n];this.pluginSystem.add(i)}},Object.defineProperty(e.prototype,"view",{get:function(){return this.component?this.component.view:null},enumerable:!0,configurable:!0}),e.prototype.render=function(){this.component?this.requestRerender():(this.component=new Ri(this.el),this.renderableEventStore={defs:{},instances:{}},this.bindHandlers(),this.executeRender())},e.prototype.destroy=function(){if(this.component){this.unbindHandlers(),this.component.destroy(),this.component=null;for(var e=0,t=this.calendarInteractions;e<t.length;e++){t[e].destroy()}this.publiclyTrigger("_destroyed")}},e.prototype.bindHandlers=function(){var e=this;this.removeNavLinkListener=Ne(this.el,"click","a[data-goto]",(function(t,n){var r=n.getAttribute("data-goto");r=r?JSON.parse(r):{};var i=e.dateEnv,o=i.createMarker(r.date),s=r.type,a=e.viewOpt("navLink"+yt(s)+"Click");"function"==typeof a?a(i.toDate(o),t):("string"==typeof a&&(s=a),e.zoomTo(o,s))})),this.opt("handleWindowResize")&&window.addEventListener("resize",this.windowResizeProxy=Dt(this.windowResize.bind(this),this.opt("windowResizeDelay")))},e.prototype.unbindHandlers=function(){this.removeNavLinkListener(),this.windowResizeProxy&&(window.removeEventListener("resize",this.windowResizeProxy),this.windowResizeProxy=null)},e.prototype.hydrate=function(){var e=this;this.state=this.buildInitialState();var t=this.opt("eventSources")||[],n=this.opt("events"),r=[];n&&t.unshift(n);for(var i=0,o=t;i<o.length;i++){var s=ii(o[i],this);s&&r.push(s)}this.batchRendering((function(){e.dispatch({type:"INIT"}),e.dispatch({type:"ADD_EVENT_SOURCES",sources:r}),e.dispatch({type:"SET_VIEW_TYPE",viewType:e.opt("defaultView")||e.pluginSystem.hooks.defaultView})}))},e.prototype.buildInitialState=function(){return{viewType:null,loadingLevel:0,eventSourceLoadingLevel:0,currentDate:this.getInitialDate(),dateProfile:null,eventSources:{},eventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null}},e.prototype.dispatch=function(e){if(this.actionQueue.push(e),!this.isReducing){this.isReducing=!0;for(var t=this.state;this.actionQueue.length;)this.state=this.reduce(this.state,this.actionQueue.shift(),this);var n=this.state;this.isReducing=!1,!t.loadingLevel&&n.loadingLevel?this.publiclyTrigger("loading",[!0]):t.loadingLevel&&!n.loadingLevel&&this.publiclyTrigger("loading",[!1]);var r=this.component&&this.component.view;t.eventStore!==n.eventStore&&t.eventStore&&(this.isEventsUpdated=!0),t.dateProfile!==n.dateProfile&&(t.dateProfile&&r&&this.publiclyTrigger("datesDestroy",[{view:r,el:r.el}]),this.isDatesUpdated=!0),t.viewType!==n.viewType&&(t.viewType&&r&&this.publiclyTrigger("viewSkeletonDestroy",[{view:r,el:r.el}]),this.isViewUpdated=!0),this.requestRerender()}},e.prototype.reduce=function(e,t,n){return hi(e,t,n)},e.prototype.requestRerender=function(){this.needsRerender=!0,this.delayedRerender()},e.prototype.tryRerender=function(){this.component&&this.needsRerender&&!this.renderingPauseDepth&&!this.isRendering&&this.executeRender()},e.prototype.batchRendering=function(e){this.renderingPauseDepth++,e(),this.renderingPauseDepth--,this.needsRerender&&this.requestRerender()},e.prototype.executeRender=function(){this.needsRerender=!1,this.isRendering=!0,this.renderComponent(),this.isRendering=!1,this.needsRerender&&this.delayedRerender()},e.prototype.renderComponent=function(){var e=this.state,t=this.component,n=e.viewType,r=this.viewSpecs[n];if(!r)throw new Error('View type "'+n+'" is not valid');var i=this.renderableEventStore=e.eventSourceLoadingLevel&&!this.opt("progressiveEventRendering")?this.renderableEventStore:e.eventStore,o=this.buildEventUiSingleBase(r.options),s=this.buildEventUiBySource(e.eventSources),a=this.eventUiBases=this.buildEventUiBases(i.defs,o,s);t.receiveProps(kt({},e,{viewSpec:r,dateProfileGenerator:this.dateProfileGenerators[n],dateProfile:e.dateProfile,eventStore:i,eventUiBases:a,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize}),this.buildComponentContext(this.theme,this.dateEnv,this.optionsManager.computed)),this.isViewUpdated&&(this.isViewUpdated=!1,this.publiclyTrigger("viewSkeletonRender",[{view:t.view,el:t.view.el}])),this.isDatesUpdated&&(this.isDatesUpdated=!1,this.publiclyTrigger("datesRender",[{view:t.view,el:t.view.el}])),this.isEventsUpdated&&(this.isEventsUpdated=!1),this.releaseAfterSizingTriggers()},e.prototype.setOption=function(e,t){var n;this.mutateOptions(((n={})[e]=t,n),[],!0)},e.prototype.getOption=function(e){return this.optionsManager.computed[e]},e.prototype.opt=function(e){return this.optionsManager.computed[e]},e.prototype.viewOpt=function(e){return this.viewOpts()[e]},e.prototype.viewOpts=function(){return this.viewSpecs[this.state.viewType].options},e.prototype.mutateOptions=function(e,t,n,r){var i=this,o=this.pluginSystem.hooks.optionChangeHandlers,s={},a={},l=this.dateEnv,c=!1,d=!1,u=Boolean(t.length);for(var h in e)o[h]?a[h]=e[h]:s[h]=e[h];for(var p in s)/^(height|contentHeight|aspectRatio)$/.test(p)?d=!0:/^(defaultDate|defaultView)$/.test(p)||(u=!0,"timeZone"===p&&(c=!0));this.optionsManager.mutate(s,t,n),u&&this.handleOptions(this.optionsManager.computed),this.batchRendering((function(){if(u?(c&&i.dispatch({type:"CHANGE_TIMEZONE",oldDateEnv:l}),i.dispatch({type:"SET_VIEW_TYPE",viewType:i.state.viewType})):d&&i.updateSize(),r)for(var e in a)o[e](a[e],i,r)}))},e.prototype.handleOptions=function(e){var t=this,n=this.pluginSystem.hooks;this.defaultAllDayEventDuration=Ke(e.defaultAllDayEventDuration),this.defaultTimedEventDuration=Ke(e.defaultTimedEventDuration),this.delayedRerender=this.buildDelayedRerender(e.rerenderDelay),this.theme=this.buildTheme(e);var r=this.parseRawLocales(e.locales);this.availableRawLocales=r.map;var i=this.buildLocale(e.locale||r.defaultCode,r.map);this.dateEnv=this.buildDateEnv(i,e.timeZone,n.namedTimeZonedImpl,e.firstDay,e.weekNumberCalculation,e.weekLabel,n.cmdFormatter),this.selectionConfig=this.buildSelectionConfig(e),this.viewSpecs=xi(n.views,this.optionsManager),this.dateProfileGenerators=Ht(this.viewSpecs,(function(e){return new e.class.prototype.dateProfileGeneratorClass(e,t)}))},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.availableRawLocales)},e.prototype._buildSelectionConfig=function(e){return Xn("select",e,this)},e.prototype._buildEventUiSingleBase=function(e){return e.editable&&(e=kt({},e,{eventEditable:!0})),Xn("event",e,this)},e.prototype.hasPublicHandlers=function(e){return this.hasHandlers(e)||this.opt(e)},e.prototype.publiclyTrigger=function(e,t){var n=this.opt(e);if(this.triggerWith(e,this,t),n)return n.apply(this,t)},e.prototype.publiclyTriggerAfterSizing=function(e,t){var n=this.afterSizingTriggers;(n[e]||(n[e]=[])).push(t)},e.prototype.releaseAfterSizingTriggers=function(){var e=this.afterSizingTriggers;for(var t in e)for(var n=0,r=e[t];n<r.length;n++){var i=r[n];this.publiclyTrigger(t,i)}this.afterSizingTriggers={}},e.prototype.isValidViewType=function(e){return Boolean(this.viewSpecs[e])},e.prototype.changeView=function(e,t){var n=null;t&&(t.start&&t.end?(this.optionsManager.mutate({visibleRange:t},[]),this.handleOptions(this.optionsManager.computed)):n=this.dateEnv.createMarker(t)),this.unselect(),this.dispatch({type:"SET_VIEW_TYPE",viewType:e,dateMarker:n})},e.prototype.zoomTo=function(e,t){var n;t=t||"day",n=this.viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"SET_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"SET_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,r=this.component,i=[];for(var o in r.header&&i.push.apply(i,r.header.viewsWithButtons),r.footer&&i.push.apply(i,r.footer.viewsWithButtons),this.viewSpecs)i.push(o);for(t=0;t<i.length;t++)if((n=this.viewSpecs[i[t]])&&n.singleUnit===e)return n},e.prototype.getInitialDate=function(){var e=this.opt("defaultDate");return null!=e?this.dateEnv.createMarker(e):this.getNow()},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,-1)})},e.prototype.nextYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,1)})},e.prototype.today=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.getNow()})},e.prototype.gotoDate=function(e){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=Ke(e);t&&(this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.add(this.state.currentDate,t)}))},e.prototype.getDate=function(){return this.dateEnv.toDate(this.state.currentDate)},e.prototype.formatDate=function(e,t){var n=this.dateEnv;return n.format(n.createMarker(e),gn(t))},e.prototype.formatRange=function(e,t,n){var r=this.dateEnv;return r.formatRange(r.createMarker(e),r.createMarker(t),gn(n,this.opt("defaultRangeSeparator")),n)},e.prototype.formatIso=function(e,t){var n=this.dateEnv;return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.windowResize=function(e){!this.isHandlingWindowResize&&this.component&&e.target===window&&(this.isHandlingWindowResize=!0,this.updateSize(),this.publiclyTrigger("windowResize",[this.view]),this.isHandlingWindowResize=!1)},e.prototype.updateSize=function(){this.component&&this.component.updateSize(!0)},e.prototype.registerInteractiveComponent=function(e,t){var n=function(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter}}(e,t),r=[Hi,zi].concat(this.pluginSystem.hooks.componentInteractions).map((function(e){return new e(n)}));this.interactionsStore[e.uid]=r,Pi[e.uid]=n},e.prototype.unregisterInteractiveComponent=function(e){for(var t=0,n=this.interactionsStore[e.uid];t<n.length;t++){n[t].destroy()}delete this.interactionsStore[e.uid],delete Pi[e.uid]},e.prototype.select=function(e,t){var n=bi(null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t},this.dateEnv,Ke({days:1}));n&&(this.dispatch({type:"SELECT_DATES",selection:n}),this.triggerDateSelect(n))},e.prototype.unselect=function(e){this.state.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),this.triggerDateUnselect(e))},e.prototype.triggerDateSelect=function(e,t){var n=kt({},this.buildDateSpanApi(e),{jsEvent:t?t.origEvent:null,view:this.view});this.publiclyTrigger("select",[n])},e.prototype.triggerDateUnselect=function(e){this.publiclyTrigger("unselect",[{jsEvent:e?e.origEvent:null,view:this.view}])},e.prototype.triggerDateClick=function(e,t,n,r){var i=kt({},this.buildDatePointApi(e),{dayEl:t,jsEvent:r,view:n});this.publiclyTrigger("dateClick",[i])},e.prototype.buildDatePointApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.datePointTransforms;i<o.length;i++){var s=o[i];kt(r,s(e,this))}return kt(r,(t=e,{date:(n=this.dateEnv).toDate(t.range.start),dateStr:n.formatIso(t.range.start,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.buildDateSpanApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.dateSpanTransforms;i<o.length;i++){var s=o[i];kt(r,s(e,this))}return kt(r,(t=e,{start:(n=this.dateEnv).toDate(t.range.start),end:n.toDate(t.range.end),startStr:n.formatIso(t.range.start,{omitTime:t.allDay}),endStr:n.formatIso(t.range.end,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.getNow=function(){var e=this.opt("now");return"function"==typeof e&&(e=e()),null==e?this.dateEnv.createNowMarker():this.dateEnv.createMarker(e)},e.prototype.getDefaultEventEnd=function(e,t){var n=t;return e?(n=Ve(n),n=this.dateEnv.add(n,this.defaultAllDayEventDuration)):n=this.dateEnv.add(n,this.defaultTimedEventDuration),n},e.prototype.addEvent=function(e,t){if(e instanceof wn){var n=e._def,r=e._instance;return this.state.eventStore.defs[n.defId]||this.dispatch({type:"ADD_EVENTS",eventStore:Qt({def:n,instance:r})}),e}var i;if(t instanceof bn)i=t.internalEventSource.sourceId;else if(null!=t){var o=this.getEventSourceById(t);if(!o)return console.warn('Could not find an event source with ID "'+t+'"'),null;i=o.internalEventSource.sourceId}var s=ir(e,i,this);return s?(this.dispatch({type:"ADD_EVENTS",eventStore:Qt(s)}),new wn(this,s.def,s.def.recurringDef?null:s.instance)):null},e.prototype.getEventById=function(e){var t=this.state.eventStore,n=t.defs,r=t.instances;for(var i in e=String(e),n){var o=n[i];if(o.publicId===e){if(o.recurringDef)return new wn(this,o,null);for(var s in r){var a=r[s];if(a.defId===o.defId)return new wn(this,o,a)}}}return null},e.prototype.getEvents=function(){var e=this.state.eventStore,t=e.defs,n=e.instances,r=[];for(var i in n){var o=n[i],s=t[o.defId];r.push(new wn(this,s,o))}return r},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.rerenderEvents=function(){this.dispatch({type:"RESET_EVENTS"})},e.prototype.getEventSources=function(){var e=this.state.eventSources,t=[];for(var n in e)t.push(new bn(this,e[n]));return t},e.prototype.getEventSourceById=function(e){var t=this.state.eventSources;for(var n in e=String(e),t)if(t[n].publicId===e)return new bn(this,t[n]);return null},e.prototype.addEventSource=function(e){if(e instanceof bn)return this.state.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e;var t=ii(e,this);return t?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[t]}),new bn(this,t)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES"})},e.prototype.scrollToTime=function(e){var t=Ke(e);t&&this.component.view.scrollToDuration(t)},e}();function Li(e,t,n){return new Cr(this,e,t,n,null)}function Qi(e,t,n,r,i,o,s){return new ei({calendarSystem:"gregory",timeZone:t,namedTimeZoneImpl:n,locale:e,weekNumberCalculation:i,firstDay:r,weekLabel:o,cmdFormatter:s})}function Vi(e){return new(this.pluginSystem.hooks.themeClasses[e.themeSystem]||Oi)(e)}function Fi(e){var t=this.tryRerender.bind(this);return null!=e&&(t=Dt(t,e)),t}function Gi(e){return Ht(e,(function(e){return e.ui}))}function ji(e,t,n){var r={"":t};for(var i in e){var o=e[i];o.sourceId&&n[o.sourceId]&&(r[i]=n[o.sourceId])}return r}vr.mixInto(Ui);var Wi=function(e){function t(t,n){var r=e.call(this,re("div",{className:"fc-view fc-"+t.type+"-view"}))||this;return r.renderDatesMem=cr(r.renderDatesWrap,r.unrenderDatesWrap),r.renderBusinessHoursMem=cr(r.renderBusinessHours,r.unrenderBusinessHours,[r.renderDatesMem]),r.renderDateSelectionMem=cr(r.renderDateSelectionWrap,r.unrenderDateSelectionWrap,[r.renderDatesMem]),r.renderEventsMem=cr(r.renderEvents,r.unrenderEvents,[r.renderDatesMem]),r.renderEventSelectionMem=cr(r.renderEventSelectionWrap,r.unrenderEventSelectionWrap,[r.renderEventsMem]),r.renderEventDragMem=cr(r.renderEventDragWrap,r.unrenderEventDragWrap,[r.renderDatesMem]),r.renderEventResizeMem=cr(r.renderEventResizeWrap,r.unrenderEventResizeWrap,[r.renderDatesMem]),r.viewSpec=t,r.type=t.type,n.appendChild(r.el),r.initialize(),r}return Mt(t,e),t.prototype.initialize=function(){},Object.defineProperty(t.prototype,"activeStart",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeEnd",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.activeRange.end)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentStart",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentEnd",{get:function(){return this.context.dateEnv.toDate(this.props.dateProfile.currentRange.end)},enumerable:!0,configurable:!0}),t.prototype.render=function(e,t){this.renderDatesMem(e.dateProfile),this.renderBusinessHoursMem(e.businessHours),this.renderDateSelectionMem(e.dateSelection),this.renderEventsMem(e.eventStore),this.renderEventSelectionMem(e.eventSelection),this.renderEventDragMem(e.eventDrag),this.renderEventResizeMem(e.eventResize)},t.prototype.beforeUpdate=function(){this.addScroll(this.queryScroll())},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderDatesMem.unrender()},t.prototype.updateSize=function(e,t,n){var r=this.context.calendar;e&&this.addScroll(this.queryScroll()),(e||r.isViewUpdated||r.isDatesUpdated||r.isEventsUpdated)&&this.updateBaseSize(e,t,n)},t.prototype.updateBaseSize=function(e,t,n){},t.prototype.renderDatesWrap=function(e){this.renderDates(e),this.addScroll({duration:Ke(this.context.options.scrollTime)})},t.prototype.unrenderDatesWrap=function(){this.stopNowIndicator(),this.unrenderDates()},t.prototype.renderDates=function(e){},t.prototype.unrenderDates=function(){},t.prototype.renderBusinessHours=function(e){},t.prototype.unrenderBusinessHours=function(){},t.prototype.renderDateSelectionWrap=function(e){e&&this.renderDateSelection(e)},t.prototype.unrenderDateSelectionWrap=function(e){e&&this.unrenderDateSelection(e)},t.prototype.renderDateSelection=function(e){},t.prototype.unrenderDateSelection=function(e){},t.prototype.renderEvents=function(e){},t.prototype.unrenderEvents=function(){},t.prototype.sliceEvents=function(e,t){var n=this.props;return En(e,n.eventUiBases,n.dateProfile.activeRange,t?this.context.nextDayThreshold:null).fg},t.prototype.renderEventSelectionWrap=function(e){e&&this.renderEventSelection(e)},t.prototype.unrenderEventSelectionWrap=function(e){e&&this.unrenderEventSelection(e)},t.prototype.renderEventSelection=function(e){},t.prototype.unrenderEventSelection=function(e){},t.prototype.renderEventDragWrap=function(e){e&&this.renderEventDrag(e)},t.prototype.unrenderEventDragWrap=function(e){e&&this.unrenderEventDrag(e)},t.prototype.renderEventDrag=function(e){},t.prototype.unrenderEventDrag=function(e){},t.prototype.renderEventResizeWrap=function(e){e&&this.renderEventResize(e)},t.prototype.unrenderEventResizeWrap=function(e){e&&this.unrenderEventResize(e)},t.prototype.renderEventResize=function(e){},t.prototype.unrenderEventResize=function(e){},t.prototype.startNowIndicator=function(e,t){var n,r,i,o=this,s=this.context,a=s.calendar,l=s.dateEnv;s.options.nowIndicator&&!this.initialNowDate&&(n=this.getNowIndicatorUnit(e,t))&&(r=this.updateNowIndicator.bind(this),this.initialNowDate=a.getNow(),this.initialNowQueriedMs=(new Date).valueOf(),i=l.add(l.startOf(this.initialNowDate,n),Ke(1,n)).valueOf()-this.initialNowDate.valueOf(),this.nowIndicatorTimeoutID=setTimeout((function(){o.nowIndicatorTimeoutID=null,r(),i="second"===n?1e3:6e4,o.nowIndicatorIntervalID=setInterval(r,i)}),i))},t.prototype.updateNowIndicator=function(){this.props.dateProfile&&this.initialNowDate&&(this.unrenderNowIndicator(),this.renderNowIndicator(Ue(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs)),this.isNowIndicatorRendered=!0)},t.prototype.stopNowIndicator=function(){this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearInterval(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.isNowIndicatorRendered&&(this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},t.prototype.getNowIndicatorUnit=function(e,t){},t.prototype.renderNowIndicator=function(e){},t.prototype.unrenderNowIndicator=function(){},t.prototype.addScroll=function(e,t){t&&(e.isForced=t),kt(this.queuedScroll||(this.queuedScroll={}),e)},t.prototype.popScroll=function(e){this.applyQueuedScroll(e),this.queuedScroll=null},t.prototype.applyQueuedScroll=function(e){this.queuedScroll&&this.applyScroll(this.queuedScroll,e)},t.prototype.queryScroll=function(){var e={};return this.props.dateProfile&&kt(e,this.queryDateScroll()),e},t.prototype.applyScroll=function(e,t){var n=e.duration,r=e.isForced;null==n||r||(delete e.duration,this.props.dateProfile&&kt(e,this.computeDateScroll(n))),this.props.dateProfile&&this.applyDateScroll(e)},t.prototype.computeDateScroll=function(e){return{}},t.prototype.queryDateScroll=function(){return{}},t.prototype.applyDateScroll=function(e){},t.prototype.scrollToDuration=function(e){this.applyScroll({duration:e},!1)},t}(Ir);vr.mixInto(Wi),Wi.prototype.usesMinMaxTime=!1,Wi.prototype.dateProfileGeneratorClass=ui;var Yi=function(){function e(){this.segs=[],this.isSizeDirty=!1}return e.prototype.renderSegs=function(e,t,n){this.context=e,this.rangeUpdated(),t=this.renderSegEls(t,n),this.segs=t,this.attachSegs(t,n),this.isSizeDirty=!0,In(this.context,this.segs,Boolean(n))},e.prototype.unrender=function(e,t,n){Rn(this.context,this.segs,Boolean(n)),this.detachSegs(this.segs),this.segs=[]},e.prototype.rangeUpdated=function(){var e,t,n=this.context.options;this.eventTimeFormat=gn(n.eventTimeFormat||this.computeEventTimeFormat(),n.defaultRangeSeparator),null==(e=n.displayEventTime)&&(e=this.computeDisplayEventTime()),null==(t=n.displayEventEnd)&&(t=this.computeDisplayEventEnd()),this.displayEventTime=e,this.displayEventEnd=t},e.prototype.renderSegEls=function(e,t){var n,r="";if(e.length){for(n=0;n<e.length;n++)r+=this.renderSegHtml(e[n],t);oe(r).forEach((function(t,n){var r=e[n];t&&(r.el=t)})),e=Sn(this.context,e,Boolean(t))}return e},e.prototype.getSegClasses=function(e,t,n,r){var i=["fc-event",e.isStart?"fc-start":"fc-not-start",e.isEnd?"fc-end":"fc-not-end"].concat(e.eventRange.ui.classNames);return t&&i.push("fc-draggable"),n&&i.push("fc-resizable"),r&&(i.push("fc-mirror"),r.isDragging&&i.push("fc-dragging"),r.isResizing&&i.push("fc-resizing")),i},e.prototype.getTimeText=function(e,t,n){var r=e.def,i=e.instance;return this._getTimeText(i.range.start,r.hasEnd?i.range.end:null,r.allDay,t,n,i.forcedStartTzo,i.forcedEndTzo)},e.prototype._getTimeText=function(e,t,n,r,i,o,s){var a=this.context.dateEnv;return null==r&&(r=this.eventTimeFormat),null==i&&(i=this.displayEventEnd),this.displayEventTime&&!n?i&&t?a.formatRange(e,t,r,{forcedStartTzo:o,forcedEndTzo:s}):a.format(e,r,{forcedTzo:o}):""},e.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0}},e.prototype.computeDisplayEventTime=function(){return!0},e.prototype.computeDisplayEventEnd=function(){return!0},e.prototype.getSkinCss=function(e){return{"background-color":e.backgroundColor,"border-color":e.borderColor,color:e.textColor}},e.prototype.sortEventSegs=function(e){var t=this.context.eventOrderSpecs,n=e.map(Zi);return n.sort((function(e,n){return vt(e,n,t)})),n.map((function(e){return e._seg}))},e.prototype.computeSizes=function(e){(e||this.isSizeDirty)&&this.computeSegSizes(this.segs)},e.prototype.assignSizes=function(e){(e||this.isSizeDirty)&&(this.assignSegSizes(this.segs),this.isSizeDirty=!1)},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e.prototype.hideByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="hidden")}},e.prototype.showByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="")}},e.prototype.selectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t],i=r.eventRange.instance;i&&i.instanceId===e&&r.el&&r.el.classList.add("fc-selected")}},e.prototype.unselectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];r.el&&r.el.classList.remove("fc-selected")}},e}();function Zi(e){var t=e.eventRange.def,n=e.eventRange.instance.range,r=n.start?n.start.valueOf():0,i=n.end?n.end.valueOf():0;return kt({},t.extendedProps,t,{id:t.publicId,start:r,end:i,duration:i-r,allDay:Number(t.allDay),_seg:e})}var Ji=function(){function e(){this.fillSegTag="div",this.dirtySizeFlags={},this.containerElsByType={},this.segsByType={}}return e.prototype.getSegsByType=function(e){return this.segsByType[e]||[]},e.prototype.renderSegs=function(e,t,n){var r;this.context=t;var i=this.renderSegEls(e,n),o=this.attachSegs(e,i);o&&(r=this.containerElsByType[e]||(this.containerElsByType[e]=[])).push.apply(r,o),this.segsByType[e]=i,"bgEvent"===e&&In(t,i,!1),this.dirtySizeFlags[e]=!0},e.prototype.unrender=function(e,t){var n=this.segsByType[e];n&&("bgEvent"===e&&Rn(t,n,!1),this.detachSegs(e,n))},e.prototype.renderSegEls=function(e,t){var n,r=this,i="";if(t.length){for(n=0;n<t.length;n++)i+=this.renderSegHtml(e,t[n]);oe(i).forEach((function(e,n){var r=t[n];e&&(r.el=e)})),"bgEvent"===e&&(t=Sn(this.context,t,!1)),t=t.filter((function(e){return ge(e.el,r.fillSegTag)}))}return t},e.prototype.renderSegHtml=function(e,t){var n=null,r=[];return"highlight"!==e&&"businessHours"!==e&&(n={"background-color":t.eventRange.ui.backgroundColor}),"highlight"!==e&&(r=r.concat(t.eventRange.ui.classNames)),"businessHours"===e?r.push("fc-bgevent"):r.push("fc-"+e.toLowerCase()),"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(n?' style="'+Yn(n)+'"':"")+"></"+this.fillSegTag+">"},e.prototype.detachSegs=function(e,t){var n=this.containerElsByType[e];n&&(n.forEach(ue),delete this.containerElsByType[e])},e.prototype.computeSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.computeSegSizes(this.segsByType[t])},e.prototype.assignSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.assignSegSizes(this.segsByType[t]);this.dirtySizeFlags={}},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e}(),qi=function(){function e(e){this.emitter=new vr}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}();var Xi={startTime:Ke,duration:Ke,create:Boolean,sourceId:String},$i={create:!0};function Ki(e){var t={},n=Tt(e,Xi,$i,t);return n.leftoverProps=t,n}function eo(e,t,n,r,i,o,s,a){var l,c=o.dateEnv,d=o.theme,u=o.options,h=en(t.activeRange,e),p=["fc-day-header",d.getClass("widgetHeader")];return l="function"==typeof u.columnHeaderHtml?u.columnHeaderHtml(c.toDate(e)):"function"==typeof u.columnHeaderText?Wn(u.columnHeaderText(c.toDate(e))):Wn(c.format(e,i)),n?p=p.concat(gr(e,t,o,!0)):p.push("fc-"+He[e.getUTCDay()]),'<th class="'+p.join(" ")+'"'+(h&&n?' data-date="'+c.formatIso(e,{omitTime:!0})+'"':"")+(s>1?' colspan="'+s+'"':"")+(a?" "+a:"")+">"+(h?pr(u,c,{date:e,forceOff:!n||1===r},l):l)+"</th>"}var to=function(e){function t(t){var n=e.call(this)||this;return n.renderSkeleton=cr(n._renderSkeleton,n._unrenderSkeleton),n.parentEl=t,n}return Mt(t,e),t.prototype.render=function(e,t){var n=e.dates,r=e.datesRepDistinctDays,i=[];this.renderSkeleton(t),e.renderIntroHtml&&i.push(e.renderIntroHtml());for(var o=gn(t.options.columnHeaderFormat||function(e,t){return!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"}}(r,n.length)),s=0,a=n;s<a.length;s++){var l=a[s];i.push(eo(l,e.dateProfile,r,n.length,o,t))}t.isRtl&&i.reverse(),this.thead.innerHTML="<tr>"+i.join("")+"</tr>"},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSkeleton.unrender()},t.prototype._renderSkeleton=function(e){var t=e.theme,n=this.parentEl;n.innerHTML="",n.appendChild(this.el=ie('<div class="fc-row '+t.getClass("headerRow")+'"><table class="'+t.getClass("tableGrid")+'"><thead></thead></table></div>')),this.thead=this.el.querySelector("thead")},t.prototype._unrenderSkeleton=function(){ue(this.el)},t}(xr),no=function(){function e(e,t){for(var n=e.start,r=e.end,i=[],o=[],s=-1;n<r;)t.isHiddenDay(n)?i.push(s+.5):(s++,i.push(s),o.push(n)),n=Oe(n,1);this.dates=o,this.indices=i,this.cnt=o.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(Oe(e.end,-1)),r=Math.max(0,t),i=Math.min(this.cnt-1,n);return(r=Math.ceil(r))<=(i=Math.floor(i))?{firstIndex:r,lastIndex:i,isStart:t===r,isEnd:n===i}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(Le(this.dates[0],e));return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}(),ro=function(){function e(e,t){var n,r,i,o=e.dates;if(t){for(r=o[0].getUTCDay(),n=1;n<o.length&&o[n].getUTCDay()!==r;n++);i=Math.ceil(o.length/n)}else i=1,n=o.length;this.rowCnt=i,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t++){for(var n=[],r=0;r<this.colCnt;r++)n.push(this.buildCell(t,r));e.push(n)}return e},e.prototype.buildCell=function(e,t){return{date:this.daySeries.dates[e*this.colCnt+t]}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t++)e.push(this.cells[0][t].date);return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),r=[];if(n)for(var i=n.firstIndex,o=n.lastIndex,s=i;s<=o;){var a=Math.floor(s/t),l=Math.min((a+1)*t,o+1);r.push({row:a,firstCol:s%t,lastCol:(l-1)%t,isStart:n.isStart&&s===i,isEnd:n.isEnd&&l-1===o}),s=l}return r},e}(),io=function(){function e(){this.sliceBusinessHours=nn(this._sliceBusinessHours),this.sliceDateSelection=nn(this._sliceDateSpan),this.sliceEventStore=nn(this._sliceEventStore),this.sliceEventDrag=nn(this._sliceInteraction),this.sliceEventResize=nn(this._sliceInteraction)}return e.prototype.sliceProps=function(e,t,n,r,i){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];var a=e.eventUiBases,l=this.sliceEventStore.apply(this,[e.eventStore,a,t,n,i].concat(o));return{dateSelectionSegs:this.sliceDateSelection.apply(this,[e.dateSelection,a,i].concat(o)),businessHourSegs:this.sliceBusinessHours.apply(this,[e.businessHours,t,n,r,i].concat(o)),fgEventSegs:l.fg,bgEventSegs:l.bg,eventDrag:this.sliceEventDrag.apply(this,[e.eventDrag,a,t,n,i].concat(o)),eventResize:this.sliceEventResize.apply(this,[e.eventResize,a,t,n,i].concat(o)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this._sliceDateSpan.apply(this,[{range:{start:e,end:Ue(e,1)},allDay:!1},{},t].concat(n))},e.prototype._sliceBusinessHours=function(e,t,n,r,i){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];return e?this._sliceEventStore.apply(this,[Vt(e,oo(t,Boolean(n)),r),{},t,n,i].concat(o)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,r,i){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];if(e){var a=En(e,t,oo(n,Boolean(r)),r);return{bg:this.sliceEventRanges(a.bg,i,o),fg:this.sliceEventRanges(a.fg,i,o)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,r,i){for(var o=[],s=5;s<arguments.length;s++)o[s-5]=arguments[s];if(!e)return null;var a=En(e.mutatedEvents,t,oo(n,Boolean(r)),r);return{segs:this.sliceEventRanges(a.fg,i,o),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent,sourceSeg:e.origSeg}},e.prototype._sliceDateSpan=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];if(!e)return[];for(var o=wi(e,t,n.context.calendar),s=this.sliceRange.apply(this,[e.range].concat(r)),a=0,l=s;a<l.length;a++){var c=l[a];c.component=n,c.eventRange=o}return s},e.prototype.sliceEventRanges=function(e,t,n){for(var r=[],i=0,o=e;i<o.length;i++){var s=o[i];r.push.apply(r,this.sliceEventRange(s,t,n))}return r},e.prototype.sliceEventRange=function(e,t,n){for(var r=this.sliceRange.apply(this,[e.range].concat(n)),i=0,o=r;i<o.length;i++){var s=o[i];s.component=t,s.eventRange=e,s.isStart=e.isStart&&s.isStart,s.isEnd=e.isEnd&&s.isEnd}return r},e}();function oo(e,t){var n=e.activeRange;return t?n:{start:Ue(n.start,e.minTime.milliseconds),end:Ue(n.end,e.maxTime.milliseconds-864e5)}}var so=function(e,t){return(so=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};
/*!
FullCalendar Day Grid Plugin v4.4.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function ao(e,t){function n(){this.constructor=e}so(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var lo=function(){return(lo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},co=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ao(t,e),t.prototype.buildRenderRange=function(t,n,r){var i,o=this.dateEnv,s=e.prototype.buildRenderRange.call(this,t,n,r),a=s.start,l=s.end;(/^(year|month)$/.test(n)&&(a=o.startOfWeek(a),(i=o.startOfWeek(l)).valueOf()!==l.valueOf()&&(l=ze(i,1))),this.options.monthMode&&this.options.fixedWeekCount)&&(l=ze(l,6-Math.ceil(Le(a,l)/7)));return{start:a,end:l}},t}(ui),uo=function(){function e(e){var t=this;this.isHidden=!0,this.margin=10,this.documentMousedown=function(e){t.el&&!t.el.contains(e.target)&&t.hide()},this.options=e}return e.prototype.show=function(){this.isHidden&&(this.el||this.render(),this.el.style.display="",this.position(),this.isHidden=!1,this.trigger("show"))},e.prototype.hide=function(){this.isHidden||(this.el.style.display="none",this.isHidden=!0,this.trigger("hide"))},e.prototype.render=function(){var e=this,t=this.options,n=this.el=re("div",{className:"fc-popover "+(t.className||""),style:{top:"0",left:"0"}});"function"==typeof t.content&&t.content(n),t.parentEl.appendChild(n),Ne(n,"click",".fc-close",(function(t){e.hide()})),t.autoHide&&document.addEventListener("mousedown",this.documentMousedown)},e.prototype.destroy=function(){this.hide(),this.el&&(ue(this.el),this.el=null),document.removeEventListener("mousedown",this.documentMousedown)},e.prototype.position=function(){var e,t,n=this.options,r=this.el,i=r.getBoundingClientRect(),o=Ie(r.offsetParent),s=_e(n.parentEl);e=n.top||0,t=void 0!==n.left?n.left:void 0!==n.right?n.right-i.width:0,e=Math.min(e,s.bottom-i.height-this.margin),e=Math.max(e,s.top+this.margin),t=Math.min(t,s.right-i.width-this.margin),t=Math.max(t,s.left+this.margin),Ae(r,{top:e-o.top,left:t-o.left})},e.prototype.trigger=function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1))},e}(),ho=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ao(t,e),t.prototype.renderSegHtml=function(e,t){var n,r,i=this.context,o=e.eventRange,s=o.def,a=o.ui,l=s.allDay,c=Mn(i,s,a),d=l&&e.isStart&&kn(i,0,a),u=l&&e.isEnd&&_n(0,0,a),h=this.getSegClasses(e,c,d||u,t),p=Yn(this.getSkinCss(a)),f="";return h.unshift("fc-day-grid-event","fc-h-event"),e.isStart&&(n=this.getTimeText(o))&&(f='<span class="fc-time">'+Wn(n)+"</span>"),r='<span class="fc-title">'+(Wn(s.title||"")||"&nbsp;")+"</span>",'<a class="'+h.join(" ")+'"'+(s.url?' href="'+Wn(s.url)+'"':"")+(p?' style="'+p+'"':"")+'><div class="fc-content">'+("rtl"===i.options.dir?r+" "+f:f+" "+r)+"</div>"+(d?'<div class="fc-resizer fc-start-resizer"></div>':"")+(u?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},t.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}},t.prototype.computeDisplayEventEnd=function(){return!1},t}(Yi),po=function(e){function t(t){var n=e.call(this)||this;return n.dayGrid=t,n}return ao(t,e),t.prototype.attachSegs=function(e,t){var n=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach((function(e,t){e.querySelector(".fc-content-skeleton > table").appendChild(n[t].tbodyEl)})),t||this.dayGrid.removeSegPopover()},t.prototype.detachSegs=function(){for(var e,t=this.rowStructs||[];e=t.pop();)ue(e.tbodyEl);this.rowStructs=null},t.prototype.renderSegRows=function(e){var t,n,r=[];for(t=this.groupSegRows(e),n=0;n<t.length;n++)r.push(this.renderSegRow(n,t[n]));return r},t.prototype.renderSegRow=function(e,t){var n,r,i,o,s,a,l,c=this.context.isRtl,d=this.dayGrid,u=d.colCnt,h=this.buildSegLevels(t),p=Math.max(1,h.length),f=document.createElement("tbody"),g=[],v=[],m=[];function y(e){for(;i<e;)(l=(m[n-1]||[])[i])?l.rowSpan=(l.rowSpan||1)+1:(l=document.createElement("td"),o.appendChild(l)),v[n][i]=l,m[n][i]=l,i++}for(n=0;n<p;n++){if(r=h[n],i=0,o=document.createElement("tr"),g.push([]),v.push([]),m.push([]),r)for(s=0;s<r.length;s++){a=r[s];var A=c?u-1-a.lastCol:a.firstCol,b=c?u-1-a.firstCol:a.lastCol;for(y(A),l=re("td",{className:"fc-event-container"},a.el),A!==b?l.colSpan=b-A+1:m[n][i]=l;i<=b;)v[n][i]=l,g[n][i]=a,i++;o.appendChild(l)}y(u);var w=d.renderProps.renderIntroHtml();w&&(c?ae(o,w):le(o,w)),f.appendChild(o)}return{row:e,tbodyEl:f,cellMatrix:v,segMatrix:g,segLevels:h,segs:t}},t.prototype.buildSegLevels=function(e){var t,n,r,i=this.context.isRtl,o=this.dayGrid.colCnt,s=[];for(e=this.sortEventSegs(e),t=0;t<e.length;t++){for(n=e[t],r=0;r<s.length&&fo(n,s[r]);r++);n.level=r,n.leftCol=i?o-1-n.lastCol:n.firstCol,n.rightCol=i?o-1-n.firstCol:n.lastCol,(s[r]||(s[r]=[])).push(n)}for(r=0;r<s.length;r++)s[r].sort(go);return s},t.prototype.groupSegRows=function(e){var t,n=[];for(t=0;t<this.dayGrid.rowCnt;t++)n.push([]);for(t=0;t<e.length;t++)n[e[t].row].push(e[t]);return n},t.prototype.computeDisplayEventEnd=function(){return 1===this.dayGrid.colCnt},t}(ho);function fo(e,t){var n,r;for(n=0;n<t.length;n++)if((r=t[n]).firstCol<=e.lastCol&&r.lastCol>=e.firstCol)return!0;return!1}function go(e,t){return e.leftCol-t.leftCol}var vo=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ao(t,e),t.prototype.attachSegs=function(e,t){var n=t.sourceSeg,r=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach((function(e,t){var i,o,s=ie('<div class="fc-mirror-skeleton"><table></table></div>');n&&n.row===t?i=n.el:(i=e.querySelector(".fc-content-skeleton tbody"))||(i=e.querySelector(".fc-content-skeleton table")),o=i.getBoundingClientRect().top-e.getBoundingClientRect().top,s.style.top=o+"px",s.querySelector("table").appendChild(r[t].tbodyEl),e.appendChild(s)}))},t}(po),mo=function(e){function t(t){var n=e.call(this)||this;return n.fillSegTag="td",n.dayGrid=t,n}return ao(t,e),t.prototype.renderSegs=function(t,n,r){"bgEvent"===t&&(r=r.filter((function(e){return e.eventRange.def.allDay}))),e.prototype.renderSegs.call(this,t,n,r)},t.prototype.attachSegs=function(e,t){var n,r,i,o=[];for(n=0;n<t.length;n++)r=t[n],i=this.renderFillRow(e,r),this.dayGrid.rowEls[r.row].appendChild(i),o.push(i);return o},t.prototype.renderFillRow=function(e,t){var n,r,i=this.dayGrid,o=this.context.isRtl,s=i.colCnt,a=o?s-1-t.lastCol:t.firstCol,l=(o?s-1-t.firstCol:t.lastCol)+1;r=(n=ie('<div class="fc-'+("businessHours"===e?"bgevent":e.toLowerCase())+'-skeleton"><table><tr></tr></table></div>')).getElementsByTagName("tr")[0],a>0&&ae(r,new Array(a+1).join('<td style="pointer-events:none"></td>')),t.el.colSpan=l-a,r.appendChild(t.el),l<s&&ae(r,new Array(s-l+1).join('<td style="pointer-events:none"></td>'));var c=i.renderProps.renderIntroHtml();return c&&(o?ae(r,c):le(r,c)),n},t}(Ji),yo=function(e){function t(t){var n=e.call(this,t)||this,r=n.eventRenderer=new Ao(n),i=n.renderFrame=cr(n._renderFrame);return n.renderFgEvents=cr(r.renderSegs.bind(r),r.unrender.bind(r),[i]),n.renderEventSelection=cr(r.selectByInstanceId.bind(r),r.unselectByInstanceId.bind(r),[n.renderFgEvents]),n.renderEventDrag=cr(r.hideByHash.bind(r),r.showByHash.bind(r),[i]),n.renderEventResize=cr(r.hideByHash.bind(r),r.showByHash.bind(r),[i]),n}return ao(t,e),t.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.el,useEventCenter:!1})},t.prototype.render=function(e,t){this.renderFrame(e.date),this.renderFgEvents(t,e.fgSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDragInstances),this.renderEventResize(e.eventResizeInstances)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderFrame.unrender(),this.context.calendar.unregisterInteractiveComponent(this)},t.prototype._renderFrame=function(e){var t=this.context,n=t.theme,r=t.dateEnv,i=t.options,o=r.format(e,gn(i.dayPopoverFormat));this.el.innerHTML='<div class="fc-header '+n.getClass("popoverHeader")+'"><span class="fc-title">'+Wn(o)+'</span><span class="fc-close '+n.getIconClass("close")+'"></span></div><div class="fc-body '+n.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>',this.segContainerEl=this.el.querySelector(".fc-event-container")},t.prototype.queryHit=function(e,t,n,r){var i=this.props.date;if(e<n&&t<r)return{component:this,dateSpan:{allDay:!0,range:{start:i,end:Oe(i,1)}},dayEl:this.el,rect:{left:0,top:0,right:n,bottom:r},layer:1}},t}(Ir),Ao=function(e){function t(t){var n=e.call(this)||this;return n.dayTile=t,n}return ao(t,e),t.prototype.attachSegs=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];this.dayTile.segContainerEl.appendChild(r.el)}},t.prototype.detachSegs=function(e){for(var t=0,n=e;t<n.length;t++){ue(n[t].el)}},t}(ho),bo=function(){function e(e){this.context=e}return e.prototype.renderHtml=function(e){var t=[];e.renderIntroHtml&&t.push(e.renderIntroHtml());for(var n=0,r=e.cells;n<r.length;n++){var i=r[n];t.push(wo(i.date,e.dateProfile,this.context,i.htmlAttrs))}return e.cells.length||t.push('<td class="fc-day '+this.context.theme.getClass("widgetContent")+'"></td>'),"rtl"===this.context.options.dir&&t.reverse(),"<tr>"+t.join("")+"</tr>"},e}();function wo(e,t,n,r){var i=n.dateEnv,o=n.theme,s=en(t.activeRange,e),a=gr(e,t,n);return a.unshift("fc-day",o.getClass("widgetContent")),'<td class="'+a.join(" ")+'"'+(s?' data-date="'+i.formatIso(e,{omitTime:!0})+'"':"")+(r?" "+r:"")+"></td>"}var Eo=gn({day:"numeric"}),So=gn({week:"numeric"}),Do=function(e){function t(t,n){var r=e.call(this,t)||this;r.bottomCoordPadding=0,r.isCellSizesDirty=!1,r.renderProps=n;var i=r.eventRenderer=new po(r),o=r.fillRenderer=new mo(r);r.mirrorRenderer=new vo(r);var s=r.renderCells=cr(r._renderCells,r._unrenderCells);return r.renderBusinessHours=cr(o.renderSegs.bind(o,"businessHours"),o.unrender.bind(o,"businessHours"),[s]),r.renderDateSelection=cr(o.renderSegs.bind(o,"highlight"),o.unrender.bind(o,"highlight"),[s]),r.renderBgEvents=cr(o.renderSegs.bind(o,"bgEvent"),o.unrender.bind(o,"bgEvent"),[s]),r.renderFgEvents=cr(i.renderSegs.bind(i),i.unrender.bind(i),[s]),r.renderEventSelection=cr(i.selectByInstanceId.bind(i),i.unselectByInstanceId.bind(i),[r.renderFgEvents]),r.renderEventDrag=cr(r._renderEventDrag,r._unrenderEventDrag,[s]),r.renderEventResize=cr(r._renderEventResize,r._unrenderEventResize,[s]),r}return ao(t,e),t.prototype.render=function(e,t){var n=e.cells;this.rowCnt=n.length,this.colCnt=n[0].length,this.renderCells(n,e.isRigid),this.renderBusinessHours(t,e.businessHourSegs),this.renderDateSelection(t,e.dateSelectionSegs),this.renderBgEvents(t,e.bgEventSegs),this.renderFgEvents(t,e.fgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize),this.segPopoverTile&&this.updateSegPopoverTile()},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderCells.unrender()},t.prototype.getCellRange=function(e,t){var n=this.props.cells[e][t].date;return{start:n,end:Oe(n,1)}},t.prototype.updateSegPopoverTile=function(e,t){var n=this.props;this.segPopoverTile.receiveProps({date:e||this.segPopoverTile.props.date,fgSegs:t||this.segPopoverTile.props.fgSegs,eventSelection:n.eventSelection,eventDragInstances:n.eventDrag?n.eventDrag.affectedInstances:null,eventResizeInstances:n.eventResize?n.eventResize.affectedInstances:null},this.context)},t.prototype._renderCells=function(e,t){var n,r,i=this.context,o=i.calendar,s=i.view,a=i.isRtl,l=i.dateEnv,c=this.rowCnt,d=this.colCnt,u="";for(n=0;n<c;n++)u+=this.renderDayRowHtml(n,t);for(this.el.innerHTML=u,this.rowEls=ve(this.el,".fc-row"),this.cellEls=ve(this.el,".fc-day, .fc-disabled-day"),a&&this.cellEls.reverse(),this.rowPositions=new Ar(this.el,this.rowEls,!1,!0),this.colPositions=new Ar(this.el,this.cellEls.slice(0,d),!0,!1),n=0;n<c;n++)for(r=0;r<d;r++)o.publiclyTrigger("dayRender",[{date:l.toDate(e[n][r].date),el:this.getCellEl(n,r),view:s}]);this.isCellSizesDirty=!0},t.prototype._unrenderCells=function(){this.removeSegPopover()},t.prototype.renderDayRowHtml=function(e,t){var n=this.context.theme,r=["fc-row","fc-week",n.getClass("dayRow")];t&&r.push("fc-rigid");var i=new bo(this.context);return'<div class="'+r.join(" ")+'"><div class="fc-bg"><table class="'+n.getClass("tableGrid")+'">'+i.renderHtml({cells:this.props.cells[e],dateProfile:this.props.dateProfile,renderIntroHtml:this.renderProps.renderBgIntroHtml})+'</table></div><div class="fc-content-skeleton"><table>'+(this.getIsNumbersVisible()?"<thead>"+this.renderNumberTrHtml(e)+"</thead>":"")+"</table></div></div>"},t.prototype.getIsNumbersVisible=function(){return this.getIsDayNumbersVisible()||this.renderProps.cellWeekNumbersVisible||this.renderProps.colWeekNumbersVisible},t.prototype.getIsDayNumbersVisible=function(){return this.rowCnt>1},t.prototype.renderNumberTrHtml=function(e){var t=this.context.isRtl,n=this.renderProps.renderNumberIntroHtml(e,this);return"<tr>"+(t?"":n)+this.renderNumberCellsHtml(e)+(t?n:"")+"</tr>"},t.prototype.renderNumberCellsHtml=function(e){var t,n,r=[];for(t=0;t<this.colCnt;t++)n=this.props.cells[e][t].date,r.push(this.renderNumberCellHtml(n));return this.context.isRtl&&r.reverse(),r.join("")},t.prototype.renderNumberCellHtml=function(e){var t,n,r=this.context,i=r.dateEnv,o=r.options,s="",a=en(this.props.dateProfile.activeRange,e),l=this.getIsDayNumbersVisible()&&a;return l||this.renderProps.cellWeekNumbersVisible?((t=gr(e,this.props.dateProfile,this.context)).unshift("fc-day-top"),this.renderProps.cellWeekNumbersVisible&&(n=i.weekDow),s+='<td class="'+t.join(" ")+'"'+(a?' data-date="'+i.formatIso(e,{omitTime:!0})+'"':"")+">",this.renderProps.cellWeekNumbersVisible&&e.getUTCDay()===n&&(s+=pr(o,i,{date:e,type:"week"},{class:"fc-week-number"},i.format(e,So))),l&&(s+=pr(o,i,e,{class:"fc-day-number"},i.format(e,Eo))),s+="</td>"):"<td></td>"},t.prototype.updateSize=function(e){var t=this.context.calendar,n=this.fillRenderer,r=this.eventRenderer,i=this.mirrorRenderer;(e||this.isCellSizesDirty||t.isEventsUpdated)&&(this.buildPositionCaches(),this.isCellSizesDirty=!1),n.computeSizes(e),r.computeSizes(e),i.computeSizes(e),n.assignSizes(e),r.assignSizes(e),i.assignSizes(e)},t.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildRowPositions()},t.prototype.buildColPositions=function(){this.colPositions.build()},t.prototype.buildRowPositions=function(){this.rowPositions.build(),this.rowPositions.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},t.prototype.positionToHit=function(e,t){var n=this.colPositions,r=this.rowPositions,i=n.leftToIndex(e),o=r.topToIndex(t);if(null!=o&&null!=i)return{row:o,col:i,dateSpan:{range:this.getCellRange(o,i),allDay:!0},dayEl:this.getCellEl(o,i),relativeRect:{left:n.lefts[i],right:n.rights[i],top:r.tops[o],bottom:r.bottoms[o]}}},t.prototype.getCellEl=function(e,t){return this.cellEls[e*this.colCnt+t]},t.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",this.context,e.segs))},t.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight",this.context))},t.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",this.context,e.segs),this.mirrorRenderer.renderSegs(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight",this.context),this.mirrorRenderer.unrender(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype.removeSegPopover=function(){this.segPopover&&this.segPopover.hide()},t.prototype.limitRows=function(e){var t,n,r=this.eventRenderer.rowStructs||[];for(t=0;t<r.length;t++)this.unlimitRow(t),!1!==(n=!!e&&("number"==typeof e?e:this.computeRowLevelLimit(t)))&&this.limitRow(t,n)},t.prototype.computeRowLevelLimit=function(e){var t,n,r=this.rowEls[e].getBoundingClientRect().bottom,i=me(this.eventRenderer.rowStructs[e].tbodyEl);for(t=0;t<i.length;t++)if((n=i[t]).classList.remove("fc-limited"),n.getBoundingClientRect().bottom>r)return t;return!1},t.prototype.limitRow=function(e,t){var n,r,i,o,s,a,l,c,d,u,h,p,f,g,v,m=this,y=this.colCnt,A=this.context.isRtl,b=this.eventRenderer.rowStructs[e],w=[],E=0,S=function(n){for(;E<n;)(a=m.getCellSegs(e,E,t)).length&&(d=r[t-1][E],v=m.renderMoreLink(e,E,a),g=re("div",null,v),d.appendChild(g),w.push(g)),E++};if(t&&t<b.segLevels.length){for(n=b.segLevels[t-1],r=b.cellMatrix,(i=me(b.tbodyEl).slice(t)).forEach((function(e){e.classList.add("fc-limited")})),o=0;o<n.length;o++){s=n[o];var D=A?y-1-s.lastCol:s.firstCol,T=A?y-1-s.firstCol:s.lastCol;for(S(D),c=[],l=0;E<=T;)a=this.getCellSegs(e,E,t),c.push(a),l+=a.length,E++;if(l){for(u=(d=r[t-1][D]).rowSpan||1,h=[],p=0;p<c.length;p++)f=re("td",{className:"fc-more-cell",rowSpan:u}),a=c[p],v=this.renderMoreLink(e,D+p,[s].concat(a)),g=re("div",null,v),f.appendChild(g),h.push(f),w.push(f);d.classList.add("fc-limited"),ce(d,h),i.push(d)}}S(this.colCnt),b.moreEls=w,b.limitedEls=i}},t.prototype.unlimitRow=function(e){var t=this.eventRenderer.rowStructs[e];t.moreEls&&(t.moreEls.forEach(ue),t.moreEls=null),t.limitedEls&&(t.limitedEls.forEach((function(e){e.classList.remove("fc-limited")})),t.limitedEls=null)},t.prototype.renderMoreLink=function(e,t,n){var r=this,i=this.context,o=i.calendar,s=i.view,a=i.dateEnv,l=i.options,c=i.isRtl,d=re("a",{className:"fc-more"});return d.innerText=this.getMoreLinkText(n.length),d.addEventListener("click",(function(i){var d=l.eventLimitClick,u=c?r.colCnt-t-1:t,h=r.props.cells[e][u].date,p=i.currentTarget,f=r.getCellEl(e,t),g=r.getCellSegs(e,t),v=r.resliceDaySegs(g,h),m=r.resliceDaySegs(n,h);"function"==typeof d&&(d=o.publiclyTrigger("eventLimitClick",[{date:a.toDate(h),allDay:!0,dayEl:f,moreEl:p,segs:v,hiddenSegs:m,jsEvent:i,view:s}])),"popover"===d?r.showSegPopover(e,t,p,v):"string"==typeof d&&o.zoomTo(h,d)})),d},t.prototype.showSegPopover=function(e,t,n,r){var i,o,s=this,a=this.context,l=a.calendar,c=a.view,d=a.theme,u=a.isRtl,h=u?this.colCnt-t-1:t,p=n.parentNode;i=1===this.rowCnt?c.el:this.rowEls[e],o={className:"fc-more-popover "+d.getClass("popover"),parentEl:c.el,top:Ie(i).top,autoHide:!0,content:function(t){s.segPopoverTile=new yo(t),s.updateSegPopoverTile(s.props.cells[e][h].date,r)},hide:function(){s.segPopoverTile.destroy(),s.segPopoverTile=null,s.segPopover.destroy(),s.segPopover=null}},u?o.right=Ie(p).right+1:o.left=Ie(p).left-1,this.segPopover=new uo(o),this.segPopover.show(),l.releaseAfterSizingTriggers()},t.prototype.resliceDaySegs=function(e,t){for(var n={start:t,end:Oe(t,1)},r=[],i=0,o=e;i<o.length;i++){var s=o[i],a=s.eventRange,l=a.range,c=qt(l,n);c&&r.push(lo({},s,{eventRange:{def:a.def,ui:lo({},a.ui,{durationEditable:!1}),instance:a.instance,range:c},isStart:s.isStart&&c.start.valueOf()===l.start.valueOf(),isEnd:s.isEnd&&c.end.valueOf()===l.end.valueOf()}))}return r},t.prototype.getMoreLinkText=function(e){var t=this.context.options.eventLimitText;return"function"==typeof t?t(e):"+"+e+" "+t},t.prototype.getCellSegs=function(e,t,n){for(var r,i=this.eventRenderer.rowStructs[e].segMatrix,o=n||0,s=[];o<i.length;)(r=i[o][t])&&s.push(r),o++;return s},t}(Ir),To=gn({week:"numeric"}),Co=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processOptions=nn(t._processOptions),t.renderSkeleton=cr(t._renderSkeleton,t._unrenderSkeleton),t.renderHeadIntroHtml=function(){var e=t.context,n=e.theme,r=e.options;return t.colWeekNumbersVisible?'<th class="fc-week-number '+n.getClass("widgetHeader")+'" '+t.weekNumberStyleAttr()+"><span>"+Wn(r.weekLabel)+"</span></th>":""},t.renderDayGridNumberIntroHtml=function(e,n){var r=t.context,i=r.options,o=r.dateEnv,s=n.props.cells[e][0].date;return t.colWeekNumbersVisible?'<td class="fc-week-number" '+t.weekNumberStyleAttr()+">"+pr(i,o,{date:s,type:"week",forceOff:1===n.colCnt},o.format(s,To))+"</td>":""},t.renderDayGridBgIntroHtml=function(){var e=t.context.theme;return t.colWeekNumbersVisible?'<td class="fc-week-number '+e.getClass("widgetContent")+'" '+t.weekNumberStyleAttr()+"></td>":""},t.renderDayGridIntroHtml=function(){return t.colWeekNumbersVisible?'<td class="fc-week-number" '+t.weekNumberStyleAttr()+"></td>":""},t}return ao(t,e),t.prototype._processOptions=function(e){e.weekNumbers?e.weekNumbersWithinDays?(this.cellWeekNumbersVisible=!0,this.colWeekNumbersVisible=!1):(this.cellWeekNumbersVisible=!1,this.colWeekNumbersVisible=!0):(this.colWeekNumbersVisible=!1,this.cellWeekNumbersVisible=!1)},t.prototype.render=function(t,n){e.prototype.render.call(this,t,n),this.processOptions(n.options),this.renderSkeleton(n)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSkeleton.unrender()},t.prototype._renderSkeleton=function(e){this.el.classList.add("fc-dayGrid-view"),this.el.innerHTML=this.renderSkeletonHtml(),this.scroller=new Sr("hidden","auto");var t=this.scroller.el;this.el.querySelector(".fc-body > tr > td").appendChild(t),t.classList.add("fc-day-grid-container");var n=re("div",{className:"fc-day-grid"});t.appendChild(n),this.dayGrid=new Do(n,{renderNumberIntroHtml:this.renderDayGridNumberIntroHtml,renderBgIntroHtml:this.renderDayGridBgIntroHtml,renderIntroHtml:this.renderDayGridIntroHtml,colWeekNumbersVisible:this.colWeekNumbersVisible,cellWeekNumbersVisible:this.cellWeekNumbersVisible})},t.prototype._unrenderSkeleton=function(){this.el.classList.remove("fc-dayGrid-view"),this.dayGrid.destroy(),this.scroller.destroy()},t.prototype.renderSkeletonHtml=function(){var e=this.context,t=e.theme,n=e.options;return'<table class="'+t.getClass("tableGrid")+'">'+(n.columnHeader?'<thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'"></td></tr></tbody></table>'},t.prototype.weekNumberStyleAttr=function(){return null!=this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},t.prototype.hasRigidRows=function(){var e=this.context.options.eventLimit;return e&&"number"!=typeof e},t.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.dayGrid.updateSize(t)},t.prototype.updateBaseSize=function(e,t,n){var r,i,o=this.dayGrid,s=this.context.options.eventLimit,a=this.header?this.header.el:null;o.rowEls?(this.colWeekNumbersVisible&&(this.weekNumberWidth=ft(ve(this.el,".fc-week-number"))),this.scroller.clear(),a&&ct(a),o.removeSegPopover(),s&&"number"==typeof s&&o.limitRows(s),r=this.computeScrollerHeight(t),this.setGridHeight(r,n),s&&"number"!=typeof s&&o.limitRows(s),n||(this.scroller.setHeight(r),((i=this.scroller.getScrollbarWidths()).left||i.right)&&(a&&lt(a,i),r=this.computeScrollerHeight(t),this.scroller.setHeight(r)),this.scroller.lockOverflow(i))):n||(r=this.computeScrollerHeight(t),this.scroller.setHeight(r))},t.prototype.computeScrollerHeight=function(e){return e-gt(this.el,this.scroller.el)},t.prototype.setGridHeight=function(e,t){this.context.options.monthMode?(t&&(e*=this.dayGrid.rowCnt/6),ht(this.dayGrid.rowEls,e,!t)):t?pt(this.dayGrid.rowEls):ht(this.dayGrid.rowEls,e,!0)},t.prototype.computeDateScroll=function(e){return{top:0}},t.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},t.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},t}(Wi);Co.prototype.dateProfileGeneratorClass=co;var xo=function(e){function t(t){var n=e.call(this,t.el)||this;return n.slicer=new Io,n.dayGrid=t,n}return ao(t,e),t.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.dayGrid.el})},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.context.calendar.unregisterInteractiveComponent(this)},t.prototype.render=function(e,t){var n=this.dayGrid,r=e.dateProfile,i=e.dayTable;n.receiveProps(lo({},this.slicer.sliceProps(e,r,e.nextDayThreshold,t.calendar,n,i),{dateProfile:r,cells:i.cells,isRigid:e.isRigid}),t)},t.prototype.buildPositionCaches=function(){this.dayGrid.buildPositionCaches()},t.prototype.queryHit=function(e,t){var n=this.dayGrid.positionToHit(e,t);if(n)return{component:this.dayGrid,dateSpan:n.dateSpan,dayEl:n.dayEl,rect:{left:n.relativeRect.left,right:n.relativeRect.right,top:n.relativeRect.top,bottom:n.relativeRect.bottom},layer:0}},t}(Ir),Io=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ao(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(io);function Ro(e,t){var n=new no(e.renderRange,t);return new ro(n,/year|month|week/.test(e.currentRangeUnit))}var Mo=Mr({defaultView:"dayGridMonth",views:{dayGrid:function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayTable=nn(Ro),t}return ao(t,e),t.prototype.render=function(t,n){e.prototype.render.call(this,t,n);var r=this.props.dateProfile,i=this.dayTable=this.buildDayTable(r,t.dateProfileGenerator);this.header&&this.header.receiveProps({dateProfile:r,dates:i.headerDates,datesRepDistinctDays:1===i.rowCnt,renderIntroHtml:this.renderHeadIntroHtml},n),this.simpleDayGrid.receiveProps({dateProfile:r,dayTable:i,businessHours:t.businessHours,dateSelection:t.dateSelection,eventStore:t.eventStore,eventUiBases:t.eventUiBases,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,isRigid:this.hasRigidRows(),nextDayThreshold:this.context.nextDayThreshold},n)},t.prototype._renderSkeleton=function(t){e.prototype._renderSkeleton.call(this,t),t.options.columnHeader&&(this.header=new to(this.el.querySelector(".fc-head-container"))),this.simpleDayGrid=new xo(this.dayGrid)},t.prototype._unrenderSkeleton=function(){e.prototype._unrenderSkeleton.call(this),this.header&&this.header.destroy(),this.simpleDayGrid.destroy()},t}(Co),dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}}),ko=function(e,t){return(ko=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function _o(e,t){function n(){this.constructor=e}ko(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var Bo=function(){return(Bo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},No=function(e){function t(t){var n=e.call(this)||this;return n.timeGrid=t,n}return _o(t,e),t.prototype.renderSegs=function(t,n,r){e.prototype.renderSegs.call(this,t,n,r),this.fullTimeFormat=gn({hour:"numeric",minute:"2-digit",separator:this.context.options.defaultRangeSeparator})},t.prototype.attachSegs=function(e,t){for(var n=this.timeGrid.groupSegsByCol(e),r=0;r<n.length;r++)n[r]=this.sortEventSegs(n[r]);this.segsByCol=n,this.timeGrid.attachSegsByCol(n,this.timeGrid.fgContainerEls)},t.prototype.detachSegs=function(e){e.forEach((function(e){ue(e.el)})),this.segsByCol=null},t.prototype.computeSegSizes=function(e){var t=this.timeGrid,n=this.segsByCol,r=t.colCnt;if(t.computeSegVerticals(e),n)for(var i=0;i<r;i++)this.computeSegHorizontals(n[i])},t.prototype.assignSegSizes=function(e){var t=this.timeGrid,n=this.segsByCol,r=t.colCnt;if(t.assignSegVerticals(e),n)for(var i=0;i<r;i++)this.assignSegCss(n[i])},t.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:!1}},t.prototype.computeDisplayEventEnd=function(){return!0},t.prototype.renderSegHtml=function(e,t){var n,r,i,o,s,a=e.eventRange,l=a.def,c=a.ui,d=l.allDay,u=Mn(this.context,l,c),h=e.isStart&&kn(this.context,0,c),p=e.isEnd&&_n(this.context,0,c),f=this.getSegClasses(e,u,h||p,t),g=Yn(this.getSkinCss(c));if(f.unshift("fc-time-grid-event"),o=a.range,Le((s=xt(o)).start,s.end)>1){if(e.isStart||e.isEnd){var v=e.start,m=e.end;n=this._getTimeText(v,m,d),r=this._getTimeText(v,m,d,this.fullTimeFormat),i=this._getTimeText(v,m,d,null,!1)}}else n=this.getTimeText(a),r=this.getTimeText(a,this.fullTimeFormat),i=this.getTimeText(a,null,!1);return'<a class="'+f.join(" ")+'"'+(l.url?' href="'+Wn(l.url)+'"':"")+(g?' style="'+g+'"':"")+'><div class="fc-content">'+(n?'<div class="fc-time" data-start="'+Wn(i)+'" data-full="'+Wn(r)+'"><span>'+Wn(n)+"</span></div>":"")+(l.title?'<div class="fc-title">'+Wn(l.title)+"</div>":"")+"</div>"+(p?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},t.prototype.computeSegHorizontals=function(e){var t,n,r;if(function(e){var t,n,r,i,o;for(t=0;t<e.length;t++)for(n=e[t],r=0;r<n.length;r++)for((i=n[r]).forwardSegs=[],o=t+1;o<e.length;o++)Ho(i,e[o],i.forwardSegs)}(t=function(e){var t,n,r,i=[];for(t=0;t<e.length;t++){for(n=e[t],r=0;r<i.length&&Ho(n,i[r]).length;r++);n.level=r,(i[r]||(i[r]=[])).push(n)}return i}(e)),n=t[0]){for(r=0;r<n.length;r++)Po(n[r]);for(r=0;r<n.length;r++)this.computeSegForwardBack(n[r],0,0)}},t.prototype.computeSegForwardBack=function(e,t,n){var r,i=e.forwardSegs;if(void 0===e.forwardCoord)for(i.length?(this.sortForwardSegs(i),this.computeSegForwardBack(i[0],t+1,n),e.forwardCoord=i[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-n)/(t+1),r=0;r<i.length;r++)this.computeSegForwardBack(i[r],0,e.forwardCoord)},t.prototype.sortForwardSegs=function(e){var t=e.map(zo),n=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(this.context.eventOrderSpecs);return t.sort((function(e,t){return vt(e,t,n)})),t.map((function(e){return e._seg}))},t.prototype.assignSegCss=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];Ae(r.el,this.generateSegCss(r)),r.level>0&&r.el.classList.add("fc-time-grid-event-inset"),r.eventRange.def.title&&r.bottom-r.top<30&&r.el.classList.add("fc-short")}},t.prototype.generateSegCss=function(e){var t,n,r=this.context.options.slotEventOverlap,i=e.backwardCoord,o=e.forwardCoord,s=this.timeGrid.generateSegVerticalCss(e),a=this.context.isRtl;return r&&(o=Math.min(1,i+2*(o-i))),a?(t=1-o,n=i):(t=i,n=1-o),s.zIndex=e.level+1,s.left=100*t+"%",s.right=100*n+"%",r&&e.forwardPressure&&(s[a?"marginLeft":"marginRight"]=20),s},t}(Yi);function Po(e){var t,n,r=e.forwardSegs,i=0;if(void 0===e.forwardPressure){for(t=0;t<r.length;t++)Po(n=r[t]),i=Math.max(i,1+n.forwardPressure);e.forwardPressure=i}}function Ho(e,t,n){void 0===n&&(n=[]);for(var r=0;r<t.length;r++)i=e,o=t[r],i.bottom>o.top&&i.top<o.bottom&&n.push(t[r]);var i,o;return n}function zo(e){var t=Zi(e);return t.forwardPressure=e.forwardPressure,t.backwardCoord=e.backwardCoord,t}var Oo=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _o(t,e),t.prototype.attachSegs=function(e,t){this.segsByCol=this.timeGrid.groupSegsByCol(e),this.timeGrid.attachSegsByCol(this.segsByCol,this.timeGrid.mirrorContainerEls),this.sourceSeg=t.sourceSeg},t.prototype.generateSegCss=function(t){var n=e.prototype.generateSegCss.call(this,t),r=this.sourceSeg;if(r&&r.col===t.col){var i=e.prototype.generateSegCss.call(this,r);n.left=i.left,n.right=i.right,n.marginLeft=i.marginLeft,n.marginRight=i.marginRight}return n},t}(No),Uo=function(e){function t(t){var n=e.call(this)||this;return n.timeGrid=t,n}return _o(t,e),t.prototype.attachSegs=function(e,t){var n,r=this.timeGrid;return"bgEvent"===e?n=r.bgContainerEls:"businessHours"===e?n=r.businessContainerEls:"highlight"===e&&(n=r.highlightContainerEls),r.attachSegsByCol(r.groupSegsByCol(t),n),t.map((function(e){return e.el}))},t.prototype.computeSegSizes=function(e){this.timeGrid.computeSegVerticals(e)},t.prototype.assignSegSizes=function(e){this.timeGrid.assignSegVerticals(e)},t}(Ji),Lo=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}],Qo=function(e){function t(t,n){var r=e.call(this,t)||this;r.isSlatSizesDirty=!1,r.isColSizesDirty=!1,r.processOptions=nn(r._processOptions),r.renderSkeleton=cr(r._renderSkeleton),r.renderSlats=cr(r._renderSlats,null,[r.renderSkeleton]),r.renderColumns=cr(r._renderColumns,r._unrenderColumns,[r.renderSkeleton]),r.renderProps=n;var i=r.renderColumns,o=r.eventRenderer=new No(r),s=r.fillRenderer=new Uo(r);return r.mirrorRenderer=new Oo(r),r.renderBusinessHours=cr(s.renderSegs.bind(s,"businessHours"),s.unrender.bind(s,"businessHours"),[i]),r.renderDateSelection=cr(r._renderDateSelection,r._unrenderDateSelection,[i]),r.renderFgEvents=cr(o.renderSegs.bind(o),o.unrender.bind(o),[i]),r.renderBgEvents=cr(s.renderSegs.bind(s,"bgEvent"),s.unrender.bind(s,"bgEvent"),[i]),r.renderEventSelection=cr(o.selectByInstanceId.bind(o),o.unselectByInstanceId.bind(o),[r.renderFgEvents]),r.renderEventDrag=cr(r._renderEventDrag,r._unrenderEventDrag,[i]),r.renderEventResize=cr(r._renderEventResize,r._unrenderEventResize,[i]),r}return _o(t,e),t.prototype._processOptions=function(e){var t,n,r=e.slotDuration,i=e.snapDuration;null===(t=st(r=Ke(r),i=i?Ke(i):r))&&(i=r,t=1),this.slotDuration=r,this.snapDuration=i,this.snapsPerSlot=t,n=e.slotLabelFormat,Array.isArray(n)&&(n=n[n.length-1]),this.labelFormat=gn(n||{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"}),n=e.slotLabelInterval,this.labelInterval=n?Ke(n):this.computeLabelInterval(r)},t.prototype.computeLabelInterval=function(e){var t,n,r;for(t=Lo.length-1;t>=0;t--)if(null!==(r=st(n=Ke(Lo[t]),e))&&r>1)return n;return e},t.prototype.render=function(e,t){this.processOptions(t.options);var n=e.cells;this.colCnt=n.length,this.renderSkeleton(t.theme),this.renderSlats(e.dateProfile),this.renderColumns(e.cells,e.dateProfile),this.renderBusinessHours(t,e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderFgEvents(t,e.fgEventSegs),this.renderBgEvents(t,e.bgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSlats.unrender(),this.renderColumns.unrender(),this.renderSkeleton.unrender()},t.prototype.updateSize=function(e){var t=this.fillRenderer,n=this.eventRenderer,r=this.mirrorRenderer;(e||this.isSlatSizesDirty)&&(this.buildSlatPositions(),this.isSlatSizesDirty=!1),(e||this.isColSizesDirty)&&(this.buildColPositions(),this.isColSizesDirty=!1),t.computeSizes(e),n.computeSizes(e),r.computeSizes(e),t.assignSizes(e),n.assignSizes(e),r.assignSizes(e)},t.prototype._renderSkeleton=function(e){var t=this.el;t.innerHTML='<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider '+e.getClass("widgetHeader")+'" style="display:none" />',this.rootBgContainerEl=t.querySelector(".fc-bg"),this.slatContainerEl=t.querySelector(".fc-slats"),this.bottomRuleEl=t.querySelector(".fc-divider")},t.prototype._renderSlats=function(e){var t=this.context.theme;this.slatContainerEl.innerHTML='<table class="'+t.getClass("tableGrid")+'">'+this.renderSlatRowHtml(e)+"</table>",this.slatEls=ve(this.slatContainerEl,"tr"),this.slatPositions=new Ar(this.el,this.slatEls,!1,!0),this.isSlatSizesDirty=!0},t.prototype.renderSlatRowHtml=function(e){for(var t,n,r,i=this.context,o=i.dateEnv,s=i.theme,a=i.isRtl,l="",c=Ve(e.renderRange.start),d=e.minTime,u=Ke(0);ot(d)<ot(e.maxTime);)t=o.add(c,d),n=null!==st(u,this.labelInterval),r='<td class="fc-axis fc-time '+s.getClass("widgetContent")+'">'+(n?"<span>"+Wn(o.format(t,this.labelFormat))+"</span>":"")+"</td>",l+='<tr data-time="'+vn(t)+'"'+(n?"":' class="fc-minor"')+">"+(a?"":r)+'<td class="'+s.getClass("widgetContent")+'"></td>'+(a?r:"")+"</tr>",d=rt(d,this.slotDuration),u=rt(u,this.slotDuration);return l},t.prototype._renderColumns=function(e,t){var n=this.context,r=n.calendar,i=n.view,o=n.isRtl,s=n.theme,a=n.dateEnv,l=new bo(this.context);this.rootBgContainerEl.innerHTML='<table class="'+s.getClass("tableGrid")+'">'+l.renderHtml({cells:e,dateProfile:t,renderIntroHtml:this.renderProps.renderBgIntroHtml})+"</table>",this.colEls=ve(this.el,".fc-day, .fc-disabled-day");for(var c=0;c<this.colCnt;c++)r.publiclyTrigger("dayRender",[{date:a.toDate(e[c].date),el:this.colEls[c],view:i}]);o&&this.colEls.reverse(),this.colPositions=new Ar(this.el,this.colEls,!0,!1),this.renderContentSkeleton(),this.isColSizesDirty=!0},t.prototype._unrenderColumns=function(){this.unrenderContentSkeleton()},t.prototype.renderContentSkeleton=function(){var e,t=this.context.isRtl,n=[];n.push(this.renderProps.renderIntroHtml());for(var r=0;r<this.colCnt;r++)n.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');t&&n.reverse(),e=this.contentSkeletonEl=ie('<div class="fc-content-skeleton"><table><tr>'+n.join("")+"</tr></table></div>"),this.colContainerEls=ve(e,".fc-content-col"),this.mirrorContainerEls=ve(e,".fc-mirror-container"),this.fgContainerEls=ve(e,".fc-event-container:not(.fc-mirror-container)"),this.bgContainerEls=ve(e,".fc-bgevent-container"),this.highlightContainerEls=ve(e,".fc-highlight-container"),this.businessContainerEls=ve(e,".fc-business-container"),t&&(this.colContainerEls.reverse(),this.mirrorContainerEls.reverse(),this.fgContainerEls.reverse(),this.bgContainerEls.reverse(),this.highlightContainerEls.reverse(),this.businessContainerEls.reverse()),this.el.appendChild(e)},t.prototype.unrenderContentSkeleton=function(){ue(this.contentSkeletonEl)},t.prototype.groupSegsByCol=function(e){var t,n=[];for(t=0;t<this.colCnt;t++)n.push([]);for(t=0;t<e.length;t++)n[e[t].col].push(e[t]);return n},t.prototype.attachSegsByCol=function(e,t){var n,r,i;for(n=0;n<this.colCnt;n++)for(r=e[n],i=0;i<r.length;i++)t[n].appendChild(r[i].el)},t.prototype.getNowIndicatorUnit=function(){return"minute"},t.prototype.renderNowIndicator=function(e,t){if(this.colContainerEls){var n,r=this.computeDateTop(t),i=[];for(n=0;n<e.length;n++){var o=re("div",{className:"fc-now-indicator fc-now-indicator-line"});o.style.top=r+"px",this.colContainerEls[e[n].col].appendChild(o),i.push(o)}if(e.length>0){var s=re("div",{className:"fc-now-indicator fc-now-indicator-arrow"});s.style.top=r+"px",this.contentSkeletonEl.appendChild(s),i.push(s)}this.nowIndicatorEls=i}},t.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.forEach(ue),this.nowIndicatorEls=null)},t.prototype.getTotalSlatHeight=function(){return this.slatContainerEl.getBoundingClientRect().height},t.prototype.computeDateTop=function(e,t){return t||(t=Ve(e)),this.computeTimeTop(Ke(e.valueOf()-t.valueOf()))},t.prototype.computeTimeTop=function(e){var t,n,r=this.slatEls.length,i=this.props.dateProfile,o=(e.milliseconds-ot(i.minTime))/ot(this.slotDuration);return o=Math.max(0,o),o=Math.min(r,o),t=Math.floor(o),n=o-(t=Math.min(t,r-1)),this.slatPositions.tops[t]+this.slatPositions.getHeight(t)*n},t.prototype.computeSegVerticals=function(e){var t,n,r,i=this.context.options.timeGridEventMinHeight;for(t=0;t<e.length;t++)n=e[t],r=this.props.cells[n.col].date,n.top=this.computeDateTop(n.start,r),n.bottom=Math.max(n.top+i,this.computeDateTop(n.end,r))},t.prototype.assignSegVerticals=function(e){var t,n;for(t=0;t<e.length;t++)Ae((n=e[t]).el,this.generateSegVerticalCss(n))},t.prototype.generateSegVerticalCss=function(e){return{top:e.top,bottom:-e.bottom}},t.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildSlatPositions()},t.prototype.buildColPositions=function(){this.colPositions.build()},t.prototype.buildSlatPositions=function(){this.slatPositions.build()},t.prototype.positionToHit=function(e,t){var n,r,i=this.context.dateEnv,o=this.snapsPerSlot,s=this.slatPositions,a=this.colPositions,l=a.leftToIndex(e),c=s.topToIndex(t);if(null!=l&&null!=c){var d=s.tops[c],u=s.getHeight(c),h=(t-d)/u,p=c*o+Math.floor(h*o),f=this.props.cells[l].date,g=rt(this.props.dateProfile.minTime,(n=this.snapDuration,r=p,{years:n.years*r,months:n.months*r,days:n.days*r,milliseconds:n.milliseconds*r})),v=i.add(f,g);return{col:l,dateSpan:{range:{start:v,end:i.add(v,this.snapDuration)},allDay:!1},dayEl:this.colEls[l],relativeRect:{left:a.lefts[l],right:a.rights[l],top:d,bottom:d+u}}}},t.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.renderSegs(this.context,e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.renderSegs("highlight",this.context,e.segs))},t.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.unrender(this.context,e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.unrender("highlight",this.context))},t.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.mirrorRenderer.renderSegs(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},t.prototype._renderDateSelection=function(e){e&&(this.context.options.selectMirror?this.mirrorRenderer.renderSegs(this.context,e,{isSelecting:!0}):this.fillRenderer.renderSegs("highlight",this.context,e))},t.prototype._unrenderDateSelection=function(e){e&&(this.context.options.selectMirror?this.mirrorRenderer.unrender(this.context,e,{isSelecting:!0}):this.fillRenderer.unrender("highlight",this.context))},t}(Ir),Vo=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _o(t,e),t.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},t.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},t.prototype.getKeysForEventDef=function(e){return e.allDay?"background"===(t=e).rendering||"inverse-background"===t.rendering?["timed","allDay"]:["allDay"]:["timed"];var t},t}(ur),Fo=gn({week:"short"}),Go=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.splitter=new Vo,t.renderSkeleton=cr(t._renderSkeleton,t._unrenderSkeleton),t.renderHeadIntroHtml=function(){var e,n=t.context,r=n.theme,i=n.dateEnv,o=n.options,s=t.props.dateProfile.renderRange,a=Le(s.start,s.end);return o.weekNumbers?(e=i.format(s.start,Fo),'<th class="fc-axis fc-week-number '+r.getClass("widgetHeader")+'" '+t.axisStyleAttr()+">"+pr(o,i,{date:s.start,type:"week",forceOff:a>1},Wn(e))+"</th>"):'<th class="fc-axis '+r.getClass("widgetHeader")+'" '+t.axisStyleAttr()+"></th>"},t.renderTimeGridBgIntroHtml=function(){return'<td class="fc-axis '+t.context.theme.getClass("widgetContent")+'" '+t.axisStyleAttr()+"></td>"},t.renderTimeGridIntroHtml=function(){return'<td class="fc-axis" '+t.axisStyleAttr()+"></td>"},t.renderDayGridBgIntroHtml=function(){var e=t.context,n=e.theme,r=e.options;return'<td class="fc-axis '+n.getClass("widgetContent")+'" '+t.axisStyleAttr()+"><span>"+fr(r)+"</span></td>"},t.renderDayGridIntroHtml=function(){return'<td class="fc-axis" '+t.axisStyleAttr()+"></td>"},t}return _o(t,e),t.prototype.render=function(t,n){e.prototype.render.call(this,t,n),this.renderSkeleton(n)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSkeleton.unrender()},t.prototype._renderSkeleton=function(e){this.el.classList.add("fc-timeGrid-view"),this.el.innerHTML=this.renderSkeletonHtml(),this.scroller=new Sr("hidden","auto");var t=this.scroller.el;this.el.querySelector(".fc-body > tr > td").appendChild(t),t.classList.add("fc-time-grid-container");var n=re("div",{className:"fc-time-grid"});if(t.appendChild(n),this.timeGrid=new Qo(n,{renderBgIntroHtml:this.renderTimeGridBgIntroHtml,renderIntroHtml:this.renderTimeGridIntroHtml}),e.options.allDaySlot){this.dayGrid=new Do(this.el.querySelector(".fc-day-grid"),{renderNumberIntroHtml:this.renderDayGridIntroHtml,renderBgIntroHtml:this.renderDayGridBgIntroHtml,renderIntroHtml:this.renderDayGridIntroHtml,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1});var r=this.el.querySelector(".fc-divider");this.dayGrid.bottomCoordPadding=r.getBoundingClientRect().height}},t.prototype._unrenderSkeleton=function(){this.el.classList.remove("fc-timeGrid-view"),this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),this.scroller.destroy()},t.prototype.renderSkeletonHtml=function(){var e=this.context,t=e.theme,n=e.options;return'<table class="'+t.getClass("tableGrid")+'">'+(n.columnHeader?'<thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'">'+(n.allDaySlot?'<div class="fc-day-grid"></div><hr class="fc-divider '+t.getClass("widgetHeader")+'" />':"")+"</td></tr></tbody></table>"},t.prototype.getNowIndicatorUnit=function(){return this.timeGrid.getNowIndicatorUnit()},t.prototype.unrenderNowIndicator=function(){this.timeGrid.unrenderNowIndicator()},t.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.timeGrid.updateSize(t),this.dayGrid&&this.dayGrid.updateSize(t)},t.prototype.updateBaseSize=function(e,t,n){var r,i,o,s=this;if(this.axisWidth=ft(ve(this.el,".fc-axis")),this.timeGrid.colEls){var a=ve(this.el,".fc-row").filter((function(e){return!s.scroller.el.contains(e)}));this.timeGrid.bottomRuleEl.style.display="none",this.scroller.clear(),a.forEach(ct),this.dayGrid&&(this.dayGrid.removeSegPopover(),(r=this.context.options.eventLimit)&&"number"!=typeof r&&(r=5),r&&this.dayGrid.limitRows(r)),n||(i=this.computeScrollerHeight(t),this.scroller.setHeight(i),((o=this.scroller.getScrollbarWidths()).left||o.right)&&(a.forEach((function(e){lt(e,o)})),i=this.computeScrollerHeight(t),this.scroller.setHeight(i)),this.scroller.lockOverflow(o),this.timeGrid.getTotalSlatHeight()<i&&(this.timeGrid.bottomRuleEl.style.display=""))}else n||(i=this.computeScrollerHeight(t),this.scroller.setHeight(i))},t.prototype.computeScrollerHeight=function(e){return e-gt(this.el,this.scroller.el)},t.prototype.computeDateScroll=function(e){var t=this.timeGrid.computeTimeTop(e);return(t=Math.ceil(t))&&t++,{top:t}},t.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},t.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},t.prototype.axisStyleAttr=function(){return null!=this.axisWidth?'style="width:'+this.axisWidth+'px"':""},t}(Wi);Go.prototype.usesMinMaxTime=!0;var jo=function(e){function t(t){var n=e.call(this,t.el)||this;return n.buildDayRanges=nn(Wo),n.slicer=new Yo,n.timeGrid=t,n}return _o(t,e),t.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.timeGrid.el})},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.context.calendar.unregisterInteractiveComponent(this)},t.prototype.render=function(e,t){var n=this.context.dateEnv,r=e.dateProfile,i=e.dayTable,o=this.dayRanges=this.buildDayRanges(i,r,n);this.timeGrid.receiveProps(Bo({},this.slicer.sliceProps(e,r,null,t.calendar,this.timeGrid,o),{dateProfile:r,cells:i.cells[0]}),t)},t.prototype.renderNowIndicator=function(e){this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e,this.timeGrid,this.dayRanges),e)},t.prototype.buildPositionCaches=function(){this.timeGrid.buildPositionCaches()},t.prototype.queryHit=function(e,t){var n=this.timeGrid.positionToHit(e,t);if(n)return{component:this.timeGrid,dateSpan:n.dateSpan,dayEl:n.dayEl,rect:{left:n.relativeRect.left,right:n.relativeRect.right,top:n.relativeRect.top,bottom:n.relativeRect.bottom},layer:0}},t}(Ir);function Wo(e,t,n){for(var r=[],i=0,o=e.headerDates;i<o.length;i++){var s=o[i];r.push({start:n.add(s,t.minTime),end:n.add(s,t.maxTime)})}return r}var Yo=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _o(t,e),t.prototype.sliceRange=function(e,t){for(var n=[],r=0;r<t.length;r++){var i=qt(e,t[r]);i&&n.push({start:i.start,end:i.end,isStart:i.start.valueOf()===e.start.valueOf(),isEnd:i.end.valueOf()===e.end.valueOf(),col:r})}return n},t}(io);function Zo(e,t){var n=new no(e.renderRange,t);return new ro(n,!1)}var Jo=Mr({defaultView:"timeGridWeek",views:{timeGrid:{class:function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayTable=nn(Zo),t}return _o(t,e),t.prototype.render=function(t,n){e.prototype.render.call(this,t,n);var r=this.props,i=r.dateProfile,o=r.dateProfileGenerator,s=n.nextDayThreshold,a=this.buildDayTable(i,o),l=this.splitter.splitProps(t);this.header&&this.header.receiveProps({dateProfile:i,dates:a.headerDates,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml},n),this.simpleTimeGrid.receiveProps(Bo({},l.timed,{dateProfile:i,dayTable:a}),n),this.simpleDayGrid&&this.simpleDayGrid.receiveProps(Bo({},l.allDay,{dateProfile:i,dayTable:a,nextDayThreshold:s,isRigid:!1}),n),this.startNowIndicator(i,o)},t.prototype._renderSkeleton=function(t){e.prototype._renderSkeleton.call(this,t),t.options.columnHeader&&(this.header=new to(this.el.querySelector(".fc-head-container"))),this.simpleTimeGrid=new jo(this.timeGrid),this.dayGrid&&(this.simpleDayGrid=new xo(this.dayGrid))},t.prototype._unrenderSkeleton=function(){e.prototype._unrenderSkeleton.call(this),this.header&&this.header.destroy(),this.simpleTimeGrid.destroy(),this.simpleDayGrid&&this.simpleDayGrid.destroy()},t.prototype.renderNowIndicator=function(e){this.simpleTimeGrid.renderNowIndicator(e)},t}(Go),allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}}),qo=function(e,t){return(qo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function Xo(e,t){function n(){this.constructor=e}qo(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var $o=function(){return($o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Lr.touchMouseIgnoreWait=500;var Ko=0,es=0,ts=!1,ns=function(){function e(e){var t=this;this.subjectEl=null,this.downEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&t.tryStart(e)){var n=t.createEventFromMouse(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var n=t.createEventFromMouse(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",t.createEventFromMouse(e)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0;var n=t.createEventFromTouch(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n);var r=e.target;t.shouldIgnoreMove||r.addEventListener("touchmove",t.handleTouchMove),r.addEventListener("touchend",t.handleTouchEnd),r.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var n=t.createEventFromTouch(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleTouchEnd=function(e){if(t.isDragging){var n=e.target;n.removeEventListener("touchmove",t.handleTouchMove),n.removeEventListener("touchend",t.handleTouchEnd),n.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",t.createEventFromTouch(e)),t.cleanup(),t.isTouchDragging=!1,Ko++,setTimeout((function(){Ko--}),Lr.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){if(!t.shouldIgnoreMove){var n=window.pageXOffset-t.prevScrollX+t.prevPageX,r=window.pageYOffset-t.prevScrollY+t.prevPageY;t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:n,pageY:r,deltaX:n-t.origPageX,deltaY:r-t.origPageY})}},this.containerEl=e,this.emitter=new vr,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),es++||window.addEventListener("touchmove",rs,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),--es||window.removeEventListener("touchmove",rs,{passive:!1})},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),n=e.target;return!(!t||this.handleSelector&&!fe(n,this.handleSelector))&&(this.subjectEl=t,this.downEl=n,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){ts=!1,this.isDragging=!1,this.subjectEl=null,this.downEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?fe(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return Ko||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(ts=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,r=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},e.prototype.createEventFromTouch=function(e,t){var n,r,i=e.touches,o=0,s=0;return i&&i.length?(n=i[0].pageX,r=i[0].pageY):(n=e.pageX,r=e.pageY),t?(this.origPageX=n,this.origPageY=r):(o=n-this.origPageX,s=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:o,deltaY:s}},e}();function rs(e){ts&&e.preventDefault()}var is=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,r=this.sourceEl.getBoundingClientRect();n.style.transition="top "+t+"ms,left "+t+"ms",Ae(n,{left:r.left,top:r.top}),function(e,t){var n=function(r){t(r),Pe.forEach((function(t){e.removeEventListener(t,n)}))};Pe.forEach((function(t){e.addEventListener(t,n)}))}(n,(function(){n.style.transition="",e()}))},e.prototype.cleanup=function(){this.mirrorEl&&(ue(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&Ae(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl;return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-dragging"),Ae(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}(),os=function(e){function t(t,n){var r=e.call(this)||this;return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return Xo(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(br),ss=function(e){function t(t,n){return e.call(this,new wr(t),n)||this}return Xo(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return xe(this.scrollController.el)},t}(os),as=function(e){function t(t){return e.call(this,new Er,t)||this}return Xo(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}(os),ls="function"==typeof performance?performance.now:Date.now,cs=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var n=ls();e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,i=null===this.pointerScreenY?0:r-this.pointerScreenY,o=null===this.pointerScreenX?0:n-this.pointerScreenX;i<0?this.everMovedUp=!0:i>0&&(this.everMovedDown=!0),o<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(ls()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,s=1;switch(e.name){case"left":s=-1;case"right":n.setScrollLeft(n.getScrollLeft()+o*s);break;case"top":s=-1;case"bottom":n.setScrollTop(n.getScrollTop()+o*s)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches;i<o.length;i++){var s=o[i],a=s.clientRect,l=e-a.left,c=a.right-e,d=t-a.top,u=a.bottom-t;l>=0&&c>=0&&d>=0&&u>=0&&(d<=n&&this.everMovedUp&&s.canScrollUp()&&(!r||r.distance>d)&&(r={scrollCache:s,name:"top",distance:d}),u<=n&&this.everMovedDown&&s.canScrollDown()&&(!r||r.distance>u)&&(r={scrollCache:s,name:"bottom",distance:u}),l<=n&&this.everMovedLeft&&s.canScrollLeft()&&(!r||r.distance>l)&&(r={scrollCache:s,name:"left",distance:l}),c<=n&&this.everMovedRight&&s.canScrollRight()&&(!r||r.distance>c)&&(r={scrollCache:s,name:"right",distance:c}))}return r},e.prototype.buildCaches=function(){return this.queryScrollEls().map((function(e){return e===window?new as(!1):new ss(e,!1)}))},e.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t];"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},e}(),ds=function(e){function t(t){var n=e.call(this,t)||this;n.delay=null,n.minDistance=0,n.touchScrollAllowed=!0,n.mirrorNeedsRevert=!1,n.isInteracting=!1,n.isDragging=!1,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,n.delayTimeoutId=null,n.onPointerDown=function(e){var t;n.isDragging||(n.isInteracting=!0,n.isDelayEnded=!1,n.isDistanceSurpassed=!1,(t=document.body).classList.add("fc-unselectable"),t.addEventListener("selectstart",Be),function(e){e.addEventListener("contextmenu",Be)}(document.body),e.isTouch||e.origEvent.preventDefault(),n.emitter.trigger("pointerdown",e),n.pointer.shouldIgnoreMove||(n.mirror.setIsVisible(!1),n.mirror.start(e.subjectEl,e.pageX,e.pageY),n.startDelay(e),n.minDistance||n.handleDistanceSurpassed(e)))},n.onPointerMove=function(e){if(n.isInteracting){if(n.emitter.trigger("pointermove",e),!n.isDistanceSurpassed){var t=n.minDistance,r=e.deltaX,i=e.deltaY;r*r+i*i>=t*t&&n.handleDistanceSurpassed(e)}n.isDragging&&("scroll"!==e.origEvent.type&&(n.mirror.handleMove(e.pageX,e.pageY),n.autoScroller.handleMove(e.pageX,e.pageY)),n.emitter.trigger("dragmove",e))}},n.onPointerUp=function(e){var t;n.isInteracting&&(n.isInteracting=!1,(t=document.body).classList.remove("fc-unselectable"),t.removeEventListener("selectstart",Be),function(e){e.removeEventListener("contextmenu",Be)}(document.body),n.emitter.trigger("pointerup",e),n.isDragging&&(n.autoScroller.stop(),n.tryStopDrag(e)),n.delayTimeoutId&&(clearTimeout(n.delayTimeoutId),n.delayTimeoutId=null))};var r=n.pointer=new ns(t);return r.emitter.on("pointerdown",n.onPointerDown),r.emitter.on("pointermove",n.onPointerMove),r.emitter.on("pointerup",n.onPointerUp),n.mirror=new is,n.autoScroller=new cs,n}return Xo(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout((function(){t.delayTimeoutId=null,t.handleDelayEnd(e)}),this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},t}(qi),us=function(){function e(e){this.origRect=Ie(e),this.scrollCaches=ke(e).map((function(e){return new ss(e,!0)}))}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var n,r,i={left:e,top:t},o=0,s=this.scrollCaches;o<s.length;o++){var a=s[o];if(n=a.getEventTarget(),r=void 0,"HTML"!==(r=n.tagName)&&"BODY"!==r&&!we(i,a.clientRect))return!1}return!0},e}();var hs=function(){function e(e,t){var n=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=n.dragging;n.initialHit=null,n.movingHit=null,n.finalHit=null,n.prepareHits(),n.processFirstCoord(e),n.initialHit||!n.requireInitial?(t.setIgnoreMove(!1),n.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){n.emitter.trigger("dragstart",e),n.handleMove(e,!0)},this.handleDragMove=function(e){n.emitter.trigger("dragmove",e),n.handleMove(e)},this.handlePointerUp=function(e){n.releaseHits(),n.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){n.movingHit&&n.emitter.trigger("hitupdate",null,!0,e),n.finalHit=n.movingHit,n.movingHit=null,n.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new vr}return e.prototype.processFirstCoord=function(e){var t,n,r,i={left:e.pageX,top:e.pageY},o=i,s=e.subjectEl;s!==document&&(t=Ie(s),n=o,r=t,o={left:Math.min(Math.max(n.left,r.left),r.right),top:Math.min(Math.max(n.top,r.top),r.bottom)});var a,l,c=this.initialHit=this.queryHitForOffset(o.left,o.top);if(c){if(this.useSubjectCenter&&t){var d=Ee(t,c.rect);d&&(o=function(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}(d))}this.coordAdjust=(l=i,{left:(a=o).left-l.left,top:a.top-l.top})}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&ps(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=Ht(this.droppableStore,(function(e){return e.component.buildPositionCaches(),new us(e.el)}))},e.prototype.releaseHits=function(){var e=this.offsetTrackers;for(var t in e)e[t].destroy();this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,t){var n=this.droppableStore,r=this.offsetTrackers,i=null;for(var o in n){var s=n[o].component,a=r[o];if(a.isWithinClipping(e,t)){var l=a.computeLeft(),c=a.computeTop(),d=e-l,u=t-c,h=a.origRect,p=h.right-h.left,f=h.bottom-h.top;if(d>=0&&d<p&&u>=0&&u<f){var g=s.queryHit(d,u,p,f);!g||s.props.dateProfile&&!Kt(s.props.dateProfile.activeRange,g.dateSpan.range)||i&&!(g.layer>i.layer)||(g.rect.left+=l,g.rect.right+=l,g.rect.top+=c,g.rect.bottom+=c,i=g)}}}return i},e}();function ps(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&(n=e.dateSpan,r=t.dateSpan,Xt(n.range,r.range)&&n.allDay===r.allDay&&function(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1;for(var n in e)if(!(n in t))return!1;return!0}(n,r));var n,r}var fs=function(e){function t(t){var n=e.call(this,t)||this;n.handlePointerDown=function(e){var t=n.dragging;t.setIgnoreMove(!n.component.isValidDateDownEl(t.pointer.downEl))},n.handleDragEnd=function(e){var t=n.component.context,r=t.calendar,i=t.view;if(!n.dragging.pointer.wasTouchScroll){var o=n.hitDragging,s=o.initialHit,a=o.finalHit;s&&a&&ps(s,a)&&r.triggerDateClick(s.dateSpan,s.dayEl,i,e.origEvent)}};var r=t.component;n.dragging=new ds(r.el),n.dragging.autoScroller.isEnabled=!1;var i=n.hitDragging=new hs(n.dragging,Ni(t));return i.emitter.on("pointerdown",n.handlePointerDown),i.emitter.on("dragend",n.handleDragEnd),n}return Xo(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Bi),gs=function(e){function t(t){var n=e.call(this,t)||this;n.dragSelection=null,n.handlePointerDown=function(e){var t=n,r=t.component,i=t.dragging,o=r.context.options.selectable&&r.isValidDateDownEl(e.origEvent.target);i.setIgnoreMove(!o),i.delay=e.isTouch?function(e){var t=e.context.options,n=t.selectLongPressDelay;null==n&&(n=t.longPressDelay);return n}(r):null},n.handleDragStart=function(e){n.component.context.calendar.unselect(e)},n.handleHitUpdate=function(e,t){var r=n.component.context.calendar,i=null,o=!1;e&&((i=function(e,t,n){var r=e.dateSpan,i=t.dateSpan,o=[r.range.start,r.range.end,i.range.start,i.range.end];o.sort(bt);for(var s={},a=0,l=n;a<l.length;a++){var c=(0,l[a])(e,t);if(!1===c)return null;c&&$o(s,c)}return s.range={start:o[0],end:o[3]},s.allDay=r.allDay,s}(n.hitDragging.initialHit,e,r.pluginSystem.hooks.dateSelectionTransformers))&&n.component.isDateSelectionValid(i)||(o=!0,i=null)),i?r.dispatch({type:"SELECT_DATES",selection:i}):t||r.dispatch({type:"UNSELECT_DATES"}),o?dt():ut(),t||(n.dragSelection=i)},n.handlePointerUp=function(e){n.dragSelection&&(n.component.context.calendar.triggerDateSelect(n.dragSelection,e),n.dragSelection=null)};var r=t.component,i=r.context.options,o=n.dragging=new ds(r.el);o.touchScrollAllowed=!1,o.minDistance=i.selectMinDistance||0,o.autoScroller.isEnabled=i.dragScroll;var s=n.hitDragging=new hs(n.dragging,Ni(t));return s.emitter.on("pointerdown",n.handlePointerDown),s.emitter.on("dragstart",n.handleDragStart),s.emitter.on("hitupdate",n.handleHitUpdate),s.emitter.on("pointerup",n.handlePointerUp),n}return Xo(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(Bi);var vs=function(e){function t(n){var r=e.call(this,n)||this;r.subjectSeg=null,r.isDragging=!1,r.eventRange=null,r.relevantEvents=null,r.receivingCalendar=null,r.validMutation=null,r.mutatedRelevantEvents=null,r.handlePointerDown=function(e){var t=e.origEvent.target,n=r,i=n.component,o=n.dragging,s=o.mirror,a=i.context.options,l=i.context.calendar,c=r.subjectSeg=Tn(e.subjectEl),d=(r.eventRange=c.eventRange).instance.instanceId;r.relevantEvents=Ft(l.state.eventStore,d),o.minDistance=e.isTouch?0:a.eventDragMinDistance,o.delay=e.isTouch&&d!==i.props.eventSelection?function(e){var t=e.context.options,n=t.eventLongPressDelay;null==n&&(n=t.longPressDelay);return n}(i):null,s.parentNode=l.el,s.revertDuration=a.dragRevertDuration;var u=i.isValidSegDownEl(t)&&!fe(t,".fc-resizer");o.setIgnoreMove(!u),r.isDragging=u&&e.subjectEl.classList.contains("fc-draggable")},r.handleDragStart=function(e){var t=r.component.context,n=t.calendar,i=r.eventRange,o=i.instance.instanceId;e.isTouch?o!==r.component.props.eventSelection&&n.dispatch({type:"SELECT_EVENT",eventInstanceId:o}):n.dispatch({type:"UNSELECT_EVENT"}),r.isDragging&&(n.unselect(e),n.publiclyTrigger("eventDragStart",[{el:r.subjectSeg.el,event:new wn(n,i.def,i.instance),jsEvent:e.origEvent,view:t.view}]))},r.handleHitUpdate=function(e,t){if(r.isDragging){var n=r.relevantEvents,i=r.hitDragging.initialHit,o=r.component.context.calendar,s=null,a=null,l=null,c=!1,d={affectedEvents:n,mutatedEvents:{defs:{},instances:{}},isEvent:!0,origSeg:r.subjectSeg};if(e){var u=e.component;s=u.context.calendar;var h=u.context.options;o===s||h.editable&&h.droppable?(a=function(e,t,n){var r=e.dateSpan,i=t.dateSpan,o=r.range.start,s=i.range.start,a={};r.allDay!==i.allDay&&(a.allDay=i.allDay,a.hasEnd=t.component.context.options.allDayMaintainDuration,i.allDay&&(o=Ve(o)));var l=It(o,s,e.component.context.dateEnv,e.component===t.component?e.component.largeUnit:null);l.milliseconds&&(a.allDay=!1);for(var c={datesDelta:l,standardProps:a},d=0,u=n;d<u.length;d++){(0,u[d])(c,e,t)}return c}(i,e,s.pluginSystem.hooks.eventDragMutationMassagers))&&(l=Bn(n,s.eventUiBases,a,s),d.mutatedEvents=l,u.isInteractionValid(d)||(c=!0,a=null,l=null,d.mutatedEvents={defs:{},instances:{}})):s=null}r.displayDrag(s,d),c?dt():ut(),t||(o===s&&ps(i,e)&&(a=null),r.dragging.setMirrorNeedsRevert(!a),r.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-mirror")),r.receivingCalendar=s,r.validMutation=a,r.mutatedRelevantEvents=l)}},r.handlePointerUp=function(){r.isDragging||r.cleanup()},r.handleDragEnd=function(e){if(r.isDragging){var t=r.component.context,n=t.calendar,i=t.view,o=r,s=o.receivingCalendar,a=o.validMutation,l=r.eventRange.def,c=r.eventRange.instance,d=new wn(n,l,c),u=r.relevantEvents,h=r.mutatedRelevantEvents,p=r.hitDragging.finalHit;if(r.clearDrag(),n.publiclyTrigger("eventDragStop",[{el:r.subjectSeg.el,event:d,jsEvent:e.origEvent,view:i}]),a){if(s===n){n.dispatch({type:"MERGE_EVENTS",eventStore:h});for(var f={},g=0,v=n.pluginSystem.hooks.eventDropTransformers;g<v.length;g++){var m=v[g];$o(f,m(a,n))}var y=$o({},f,{el:e.subjectEl,delta:a.datesDelta,oldEvent:d,event:new wn(n,h.defs[l.defId],c?h.instances[c.instanceId]:null),revert:function(){n.dispatch({type:"MERGE_EVENTS",eventStore:u})},jsEvent:e.origEvent,view:i});n.publiclyTrigger("eventDrop",[y])}else if(s){n.publiclyTrigger("eventLeave",[{draggedEl:e.subjectEl,event:d,view:i}]),n.dispatch({type:"REMOVE_EVENT_INSTANCES",instances:r.mutatedRelevantEvents.instances}),s.dispatch({type:"MERGE_EVENTS",eventStore:r.mutatedRelevantEvents}),e.isTouch&&s.dispatch({type:"SELECT_EVENT",eventInstanceId:c.instanceId});var A=$o({},s.buildDatePointApi(p.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:p.component});s.publiclyTrigger("drop",[A]),s.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new wn(s,h.defs[l.defId],h.instances[c.instanceId]),view:p.component}])}}else n.publiclyTrigger("_noEventDrop")}r.cleanup()};var i=r.component,o=i.context.options,s=r.dragging=new ds(i.el);s.pointer.selector=t.SELECTOR,s.touchScrollAllowed=!1,s.autoScroller.isEnabled=o.dragScroll;var a=r.hitDragging=new hs(r.dragging,Pi);return a.useSubjectCenter=n.useEventCenter,a.emitter.on("pointerdown",r.handlePointerDown),a.emitter.on("dragstart",r.handleDragStart),a.emitter.on("hitupdate",r.handleHitUpdate),a.emitter.on("pointerup",r.handlePointerUp),a.emitter.on("dragend",r.handleDragEnd),r}return Xo(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.displayDrag=function(e,t){var n=this.component.context.calendar,r=this.receivingCalendar;r&&r!==e&&(r===n?r.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:{defs:{},instances:{}},isEvent:!0,origSeg:t.origSeg}}):r.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},t.prototype.clearDrag=function(){var e=this.component.context.calendar,t=this.receivingCalendar;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},t.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null},t.SELECTOR=".fc-draggable, .fc-resizable",t}(Bi);var ms=function(e){function t(t){var n=e.call(this,t)||this;n.draggingSeg=null,n.eventRange=null,n.relevantEvents=null,n.validMutation=null,n.mutatedRelevantEvents=null,n.handlePointerDown=function(e){var t=n.component,r=n.querySeg(e),i=n.eventRange=r.eventRange;n.dragging.minDistance=t.context.options.eventDragMinDistance,n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&n.component.props.eventSelection!==i.instance.instanceId)},n.handleDragStart=function(e){var t=n.component.context,r=t.calendar,i=t.view,o=n.eventRange;n.relevantEvents=Ft(r.state.eventStore,n.eventRange.instance.instanceId),n.draggingSeg=n.querySeg(e),r.unselect(),r.publiclyTrigger("eventResizeStart",[{el:n.draggingSeg.el,event:new wn(r,o.def,o.instance),jsEvent:e.origEvent,view:i}])},n.handleHitUpdate=function(e,t,r){var i=n.component.context.calendar,o=n.relevantEvents,s=n.hitDragging.initialHit,a=n.eventRange.instance,l=null,c=null,d=!1,u={affectedEvents:o,mutatedEvents:{defs:{},instances:{}},isEvent:!0,origSeg:n.draggingSeg};e&&(l=function(e,t,n,r,i){for(var o=e.component.context.dateEnv,s=e.dateSpan.range.start,a=t.dateSpan.range.start,l=It(s,a,o,e.component.largeUnit),c={},d=0,u=i;d<u.length;d++){var h=(0,u[d])(e,t);if(!1===h)return null;h&&$o(c,h)}if(n){if(o.add(r.start,l)<r.end)return c.startDelta=l,c}else if(o.add(r.end,l)>r.start)return c.endDelta=l,c;return null}(s,e,r.subjectEl.classList.contains("fc-start-resizer"),a.range,i.pluginSystem.hooks.eventResizeJoinTransforms)),l&&(c=Bn(o,i.eventUiBases,l,i),u.mutatedEvents=c,n.component.isInteractionValid(u)||(d=!0,l=null,c=null,u.mutatedEvents=null)),c?i.dispatch({type:"SET_EVENT_RESIZE",state:u}):i.dispatch({type:"UNSET_EVENT_RESIZE"}),d?dt():ut(),t||(l&&ps(s,e)&&(l=null),n.validMutation=l,n.mutatedRelevantEvents=c)},n.handleDragEnd=function(e){var t=n.component.context,r=t.calendar,i=t.view,o=n.eventRange.def,s=n.eventRange.instance,a=new wn(r,o,s),l=n.relevantEvents,c=n.mutatedRelevantEvents;r.publiclyTrigger("eventResizeStop",[{el:n.draggingSeg.el,event:a,jsEvent:e.origEvent,view:i}]),n.validMutation?(r.dispatch({type:"MERGE_EVENTS",eventStore:c}),r.publiclyTrigger("eventResize",[{el:n.draggingSeg.el,startDelta:n.validMutation.startDelta||Ke(0),endDelta:n.validMutation.endDelta||Ke(0),prevEvent:a,event:new wn(r,c.defs[o.defId],s?c.instances[s.instanceId]:null),revert:function(){r.dispatch({type:"MERGE_EVENTS",eventStore:l})},jsEvent:e.origEvent,view:i}])):r.publiclyTrigger("_noEventResize"),n.draggingSeg=null,n.relevantEvents=null,n.validMutation=null};var r=t.component,i=n.dragging=new ds(r.el);i.pointer.selector=".fc-resizer",i.touchScrollAllowed=!1,i.autoScroller.isEnabled=r.context.options.dragScroll;var o=n.hitDragging=new hs(n.dragging,Ni(t));return o.emitter.on("pointerdown",n.handlePointerDown),o.emitter.on("dragstart",n.handleDragStart),o.emitter.on("hitupdate",n.handleHitUpdate),o.emitter.on("dragend",n.handleDragEnd),n}return Xo(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.querySeg=function(e){return Tn(fe(e.subjectEl,this.component.fgSegSelector))},t}(Bi);var ys=function(){function e(e){var t=this;this.isRecentPointerDateSelect=!1,this.onSelect=function(e){e.jsEvent&&(t.isRecentPointerDateSelect=!0)},this.onDocumentPointerUp=function(e){var n=t,r=n.calendar,i=n.documentPointer,o=r.state;if(!i.wasTouchScroll){if(o.dateSelection&&!t.isRecentPointerDateSelect){var s=r.viewOpt("unselectAuto"),a=r.viewOpt("unselectCancel");!s||s&&fe(i.downEl,a)||r.unselect(e)}o.eventSelection&&!fe(i.downEl,vs.SELECTOR)&&r.dispatch({type:"UNSELECT_EVENT"})}t.isRecentPointerDateSelect=!1},this.calendar=e;var n=this.documentPointer=new ns(document);n.shouldIgnoreMove=!0,n.shouldWatchScroll=!1,n.emitter.on("pointerup",this.onDocumentPointerUp),e.on("select",this.onSelect)}return e.prototype.destroy=function(){this.calendar.off("select",this.onSelect),this.documentPointer.destroy()},e}(),As=function(){function e(e,t){var n=this;this.receivingCalendar=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){n.dragMeta=n.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,t,r){var i=n.hitDragging.dragging,o=null,s=null,a=!1,l={affectedEvents:{defs:{},instances:{}},mutatedEvents:{defs:{},instances:{}},isEvent:n.dragMeta.create,origSeg:null};e&&(o=e.component.context.calendar,n.canDropElOnCalendar(r.subjectEl,o)&&(s=function(e,t,n){for(var r=$o({},t.leftoverProps),i=0,o=n.pluginSystem.hooks.externalDefTransforms;i<o.length;i++){var s=o[i];$o(r,s(e,t))}var a=or(r,t.sourceId,e.allDay,n.opt("forceEventDuration")||Boolean(t.duration),n),l=e.range.start;e.allDay&&t.startTime&&(l=n.dateEnv.add(l,t.startTime));var c=t.duration?n.dateEnv.add(l,t.duration):n.getDefaultEventEnd(e.allDay,l),d=sr(a.defId,{start:l,end:c});return{def:a,instance:d}}(e.dateSpan,n.dragMeta,o),l.mutatedEvents=Qt(s),(a=!Un(l,o))&&(l.mutatedEvents={defs:{},instances:{}},s=null))),n.displayDrag(o,l),i.setMirrorIsVisible(t||!s||!document.querySelector(".fc-mirror")),a?dt():ut(),t||(i.setMirrorNeedsRevert(!s),n.receivingCalendar=o,n.droppableEvent=s)},this.handleDragEnd=function(e){var t=n,r=t.receivingCalendar,i=t.droppableEvent;if(n.clearDrag(),r&&i){var o=n.hitDragging.finalHit,s=o.component.context.view,a=n.dragMeta,l=$o({},r.buildDatePointApi(o.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:s});r.publiclyTrigger("drop",[l]),a.create&&(r.dispatch({type:"MERGE_EVENTS",eventStore:Qt(i)}),e.isTouch&&r.dispatch({type:"SELECT_EVENT",eventInstanceId:i.instance.instanceId}),r.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new wn(r,i.def,i.instance),view:s}]))}n.receivingCalendar=null,n.droppableEvent=null};var r=this.hitDragging=new hs(e,Pi);r.requireInitial=!1,r.emitter.on("dragstart",this.handleDragStart),r.emitter.on("hitupdate",this.handleHitUpdate),r.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}return e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?Ki(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?Ki(this.suppliedDragMeta(e)):Ki((t=function(e,t){var n=Lr.dataAttrPrefix,r=(n?n+"-":"")+t;return e.getAttribute("data-"+r)||""}(e,"event"))?JSON.parse(t):{create:!1});var t},e.prototype.displayDrag=function(e,t){var n=this.receivingCalendar;n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingCalendar&&this.receivingCalendar.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,t){var n=t.opt("dropAccept");return"function"==typeof n?n(e):"string"!=typeof n||!n||Boolean(ge(e,n))},e}();Lr.dataAttrPrefix="";!function(){function e(e,t){var n=this;void 0===t&&(t={}),this.handlePointerDown=function(e){var t=n.dragging,r=n.settings,i=r.minDistance,o=r.longPressDelay;t.minDistance=null!=i?i:e.isTouch?0:Qr.eventDragMinDistance,t.delay=e.isTouch?null!=o?o:Qr.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&n.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&n.dragging.mirror.getMirrorEl().classList.add("fc-selected")},this.settings=t;var r=this.dragging=new ds(e);r.touchScrollAllowed=!1,null!=t.itemSelector&&(r.pointer.selector=t.itemSelector),null!=t.appendTo&&(r.mirror.parentNode=t.appendTo),r.emitter.on("pointerdown",this.handlePointerDown),r.emitter.on("dragstart",this.handleDragStart),new As(r,t.eventData)}e.prototype.destroy=function(){this.dragging.destroy()}}();var bs=function(e){function t(t){var n=e.call(this,t)||this;n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)};var r=n.pointer=new ns(t);return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}return Xo(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}},t}(qi),ws=(function(){function e(e,t){var n=document;e===document||e instanceof Element?(n=e,t=t||{}):t=e||{};var r=this.dragging=new bs(n);"string"==typeof t.itemSelector?r.pointer.selector=t.itemSelector:n===document&&(r.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(r.mirrorSelector=t.mirrorSelector),new As(r,t.eventData)}e.prototype.destroy=function(){this.dragging.destroy()}}(),Mr({componentInteractions:[fs,gs,vs,ms],calendarInteractions:[ys],elementDraggingImpl:ds})),Es=$`@charset "UTF-8";
.fc {
  direction: ltr;
  text-align: left;
}

.fc-rtl {
  text-align: right;
}

body .fc {
  /* extra precedence to overcome jqui */
  font-size: 1em;
}

/* Colors
--------------------------------------------------------------------------------------------------*/
.fc-highlight {
  /* when user is selecting cells */
  background: #bce8f1;
  opacity: 0.3;
}

.fc-bgevent {
  /* default look for background events */
  background: #8fdf82;
  opacity: 0.3;
}

.fc-nonbusiness {
  /* default look for non-business-hours areas */
  /* will inherit .fc-bgevent's styles */
  background: #d7d7d7;
}

/* Popover
--------------------------------------------------------------------------------------------------*/
.fc-popover {
  position: absolute;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.fc-popover .fc-header {
  /* TODO: be more consistent with fc-head/fc-body */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
}

.fc-rtl .fc-popover .fc-header {
  flex-direction: row-reverse;
}

.fc-popover .fc-header .fc-title {
  margin: 0 2px;
}

.fc-popover .fc-header .fc-close {
  cursor: pointer;
  opacity: 0.65;
  font-size: 1.1em;
}

/* Misc Reusable Components
--------------------------------------------------------------------------------------------------*/
.fc-divider {
  border-style: solid;
  border-width: 1px;
}

hr.fc-divider {
  height: 0;
  margin: 0;
  padding: 0 0 2px;
  /* height is unreliable across browsers, so use padding */
  border-width: 1px 0;
}

.fc-bg,
.fc-bgevent-skeleton,
.fc-highlight-skeleton,
.fc-mirror-skeleton {
  /* these element should always cling to top-left/right corners */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.fc-bg {
  bottom: 0;
  /* strech bg to bottom edge */
}

.fc-bg table {
  height: 100%;
  /* strech bg to bottom edge */
}

/* Tables
--------------------------------------------------------------------------------------------------*/
.fc table {
  width: 100%;
  box-sizing: border-box;
  /* fix scrollbar issue in firefox */
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  /* normalize cross-browser */
}

.fc th {
  text-align: center;
}

.fc th,
.fc td {
  border-style: solid;
  border-width: 1px;
  padding: 0;
  vertical-align: top;
}

.fc td.fc-today {
  border-style: double;
  /* overcome neighboring borders */
}

/* Internal Nav Links
--------------------------------------------------------------------------------------------------*/
a[data-goto] {
  cursor: pointer;
}

a[data-goto]:hover {
  text-decoration: underline;
}

/* Fake Table Rows
--------------------------------------------------------------------------------------------------*/
.fc .fc-row {
  /* extra precedence to overcome themes forcing a 1px border */
  /* no visible border by default. but make available if need be (scrollbar width compensation) */
  border-style: solid;
  border-width: 0;
}

.fc-row table {
  /* don't put left/right border on anything within a fake row.
     the outer tbody will worry about this */
  border-left: 0 hidden transparent;
  border-right: 0 hidden transparent;
  /* no bottom borders on rows */
  border-bottom: 0 hidden transparent;
}

.fc-row:first-child table {
  border-top: 0 hidden transparent;
  /* no top border on first row */
}

/* Day Row (used within the header and the DayGrid)
--------------------------------------------------------------------------------------------------*/
.fc-row {
  position: relative;
}

.fc-row .fc-bg {
  z-index: 1;
}

/* highlighting cells & background event skeleton */
.fc-row .fc-bgevent-skeleton,
.fc-row .fc-highlight-skeleton {
  bottom: 0;
  /* stretch skeleton to bottom of row */
}

.fc-row .fc-bgevent-skeleton table,
.fc-row .fc-highlight-skeleton table {
  height: 100%;
  /* stretch skeleton to bottom of row */
}

.fc-row .fc-highlight-skeleton td,
.fc-row .fc-bgevent-skeleton td {
  border-color: transparent;
}

.fc-row .fc-bgevent-skeleton {
  z-index: 2;
}

.fc-row .fc-highlight-skeleton {
  z-index: 3;
}

/*
row content (which contains day/week numbers and events) as well as "mirror" (which contains
temporary rendered events).
*/
.fc-row .fc-content-skeleton {
  position: relative;
  z-index: 4;
  padding-bottom: 2px;
  /* matches the space above the events */
}

.fc-row .fc-mirror-skeleton {
  z-index: 5;
}

.fc .fc-row .fc-content-skeleton table,
.fc .fc-row .fc-content-skeleton td,
.fc .fc-row .fc-mirror-skeleton td {
  /* see-through to the background below */
  /* extra precedence to prevent theme-provided backgrounds */
  background: none;
  /* in case <td>s are globally styled */
  border-color: transparent;
}

.fc-row .fc-content-skeleton td,
.fc-row .fc-mirror-skeleton td {
  /* don't put a border between events and/or the day number */
  border-bottom: 0;
}

.fc-row .fc-content-skeleton tbody td,
.fc-row .fc-mirror-skeleton tbody td {
  /* don't put a border between event cells */
  border-top: 0;
}

/* Scrolling Container
--------------------------------------------------------------------------------------------------*/
.fc-scroller {
  -webkit-overflow-scrolling: touch;
}

/* TODO: move to timegrid/daygrid */
.fc-scroller > .fc-day-grid,
.fc-scroller > .fc-time-grid {
  position: relative;
  /* re-scope all positions */
  width: 100%;
  /* hack to force re-sizing this inner element when scrollbars appear/disappear */
}

/* Global Event Styles
--------------------------------------------------------------------------------------------------*/
.fc-event {
  position: relative;
  /* for resize handle and other inner positioning */
  display: block;
  /* make the <a> tag block */
  font-size: 0.85em;
  line-height: 1.4;
  border-radius: 3px;
  border: 1px solid #3788d8;
}

.fc-event,
.fc-event-dot {
  background-color: #3788d8;
  /* default BACKGROUND color */
}

.fc-event,
.fc-event:hover {
  color: #fff;
  /* default TEXT color */
  text-decoration: none;
  /* if <a> has an href */
}

.fc-event[href],
.fc-event.fc-draggable {
  cursor: pointer;
  /* give events with links and draggable events a hand mouse pointer */
}

.fc-not-allowed,
.fc-not-allowed .fc-event {
  /* to override an event's custom cursor */
  cursor: not-allowed;
}

.fc-event .fc-content {
  position: relative;
  z-index: 2;
}

/* resizer (cursor AND touch devices) */
.fc-event .fc-resizer {
  position: absolute;
  z-index: 4;
}

/* resizer (touch devices) */
.fc-event .fc-resizer {
  display: none;
}

.fc-event.fc-allow-mouse-resize .fc-resizer,
.fc-event.fc-selected .fc-resizer {
  /* only show when hovering or selected (with touch) */
  display: block;
}

/* hit area */
.fc-event.fc-selected .fc-resizer:before {
  /* 40x40 touch area */
  content: "";
  position: absolute;
  z-index: 9999;
  /* user of this util can scope within a lower z-index */
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-top: -20px;
}

/* Event Selection (only for touch devices)
--------------------------------------------------------------------------------------------------*/
.fc-event.fc-selected {
  z-index: 9999 !important;
  /* overcomes inline z-index */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.fc-event.fc-selected:after {
  content: "";
  position: absolute;
  z-index: 1;
  /* same z-index as fc-bg, behind text */
  /* overcome the borders */
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  /* darkening effect */
  background: #000;
  opacity: 0.25;
}

/* Event Dragging
--------------------------------------------------------------------------------------------------*/
.fc-event.fc-dragging.fc-selected {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
}

.fc-event.fc-dragging:not(.fc-selected) {
  opacity: 0.75;
}

/* Horizontal Events
--------------------------------------------------------------------------------------------------*/
/* bigger touch area when selected */
.fc-h-event.fc-selected:before {
  content: "";
  position: absolute;
  z-index: 3;
  /* below resizers */
  top: -10px;
  bottom: -10px;
  left: 0;
  right: 0;
}

/* events that are continuing to/from another week. kill rounded corners and butt up against edge */
.fc-ltr .fc-h-event.fc-not-start,
.fc-rtl .fc-h-event.fc-not-end {
  margin-left: 0;
  border-left-width: 0;
  padding-left: 1px;
  /* replace the border with padding */
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.fc-ltr .fc-h-event.fc-not-end,
.fc-rtl .fc-h-event.fc-not-start {
  margin-right: 0;
  border-right-width: 0;
  padding-right: 1px;
  /* replace the border with padding */
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

/* resizer (cursor AND touch devices) */
/* left resizer  */
.fc-ltr .fc-h-event .fc-start-resizer,
.fc-rtl .fc-h-event .fc-end-resizer {
  cursor: w-resize;
  left: -1px;
  /* overcome border */
}

/* right resizer */
.fc-ltr .fc-h-event .fc-end-resizer,
.fc-rtl .fc-h-event .fc-start-resizer {
  cursor: e-resize;
  right: -1px;
  /* overcome border */
}

/* resizer (mouse devices) */
.fc-h-event.fc-allow-mouse-resize .fc-resizer {
  width: 7px;
  top: -1px;
  /* overcome top border */
  bottom: -1px;
  /* overcome bottom border */
}

/* resizer (touch devices) */
.fc-h-event.fc-selected .fc-resizer {
  /* 8x8 little dot */
  border-radius: 4px;
  border-width: 1px;
  width: 6px;
  height: 6px;
  border-style: solid;
  border-color: inherit;
  background: #fff;
  /* vertically center */
  top: 50%;
  margin-top: -4px;
}

/* left resizer  */
.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,
.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {
  margin-left: -4px;
  /* centers the 8x8 dot on the left edge */
}

/* right resizer */
.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,
.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {
  margin-right: -4px;
  /* centers the 8x8 dot on the right edge */
}

/* DayGrid events
----------------------------------------------------------------------------------------------------
We use the full "fc-day-grid-event" class instead of using descendants because the event won't
be a descendant of the grid when it is being dragged.
*/
.fc-day-grid-event {
  margin: 1px 2px 0;
  /* spacing between events and edges */
  padding: 0 1px;
}

tr:first-child > td > .fc-day-grid-event {
  margin-top: 2px;
  /* a little bit more space before the first event */
}

.fc-mirror-skeleton tr:first-child > td > .fc-day-grid-event {
  margin-top: 0;
  /* except for mirror skeleton */
}

.fc-day-grid-event .fc-content {
  /* force events to be one-line tall */
  white-space: nowrap;
  overflow: hidden;
}

.fc-day-grid-event .fc-time {
  font-weight: bold;
}

/* resizer (cursor devices) */
/* left resizer  */
.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,
.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {
  margin-left: -2px;
  /* to the day cell's edge */
}

/* right resizer */
.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,
.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {
  margin-right: -2px;
  /* to the day cell's edge */
}

/* Event Limiting
--------------------------------------------------------------------------------------------------*/
/* "more" link that represents hidden events */
a.fc-more {
  margin: 1px 3px;
  font-size: 0.85em;
  cursor: pointer;
  text-decoration: none;
}

a.fc-more:hover {
  text-decoration: underline;
}

.fc-limited {
  /* rows and cells that are hidden because of a "more" link */
  display: none;
}

/* popover that appears when "more" link is clicked */
.fc-day-grid .fc-row {
  z-index: 1;
  /* make the "more" popover one higher than this */
}

.fc-more-popover {
  z-index: 2;
  width: 220px;
}

.fc-more-popover .fc-event-container {
  padding: 10px;
}

/* Now Indicator
--------------------------------------------------------------------------------------------------*/
.fc-now-indicator {
  position: absolute;
  border: 0 solid red;
}

/* Utilities
--------------------------------------------------------------------------------------------------*/
.fc-unselectable {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/*
TODO: more distinction between this file and common.css
*/
/* Colors
--------------------------------------------------------------------------------------------------*/
.fc-unthemed th,
.fc-unthemed td,
.fc-unthemed thead,
.fc-unthemed tbody,
.fc-unthemed .fc-divider,
.fc-unthemed .fc-row,
.fc-unthemed .fc-content,
.fc-unthemed .fc-popover,
.fc-unthemed .fc-list-view,
.fc-unthemed .fc-list-heading td {
  border-color: #ddd;
}

.fc-unthemed .fc-popover {
  background-color: #fff;
}

.fc-unthemed .fc-divider,
.fc-unthemed .fc-popover .fc-header,
.fc-unthemed .fc-list-heading td {
  background: #eee;
}

.fc-unthemed td.fc-today {
  background: #fcf8e3;
}

.fc-unthemed .fc-disabled-day {
  background: #d7d7d7;
  opacity: 0.3;
}

/* Icons
--------------------------------------------------------------------------------------------------
from https://feathericons.com/ and built with IcoMoon
*/
@font-face {
  font-family: "fcicons";
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.fc-icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "fcicons" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fc-icon-chevron-left:before {
  content: "";
}

.fc-icon-chevron-right:before {
  content: "";
}

.fc-icon-chevrons-left:before {
  content: "";
}

.fc-icon-chevrons-right:before {
  content: "";
}

.fc-icon-minus-square:before {
  content: "";
}

.fc-icon-plus-square:before {
  content: "";
}

.fc-icon-x:before {
  content: "";
}

.fc-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  text-align: center;
}

/* Buttons
--------------------------------------------------------------------------------------------------
Lots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css
*/
/* reset */
.fc-button {
  border-radius: 0;
  overflow: visible;
  text-transform: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.fc-button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

.fc-button {
  -webkit-appearance: button;
}

.fc-button:not(:disabled) {
  cursor: pointer;
}

.fc-button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

/* theme */
.fc-button {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.4em 0.65em;
  font-size: 1em;
  line-height: 1.5;
  border-radius: 0.25em;
}

.fc-button:hover {
  color: #212529;
  text-decoration: none;
}

.fc-button:focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);
  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);
}

.fc-button:disabled {
  opacity: 0.65;
}

/* "primary" coloring */
.fc-button-primary {
  color: #fff;
  background-color: #2C3E50;
  border-color: #2C3E50;
}

.fc-button-primary:hover {
  color: #fff;
  background-color: #1e2b37;
  border-color: #1a252f;
}

.fc-button-primary:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);
  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);
}

.fc-button-primary:disabled {
  color: #fff;
  background-color: #2C3E50;
  border-color: #2C3E50;
}

.fc-button-primary:not(:disabled):active,
.fc-button-primary:not(:disabled).fc-button-active {
  color: #fff;
  background-color: #1a252f;
  border-color: #151e27;
}

.fc-button-primary:not(:disabled):active:focus,
.fc-button-primary:not(:disabled).fc-button-active:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);
  box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);
}

/* icons within buttons */
.fc-button .fc-icon {
  vertical-align: middle;
  font-size: 1.5em;
}

/* Buttons Groups
--------------------------------------------------------------------------------------------------*/
.fc-button-group {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

.fc-button-group > .fc-button {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.fc-button-group > .fc-button:hover {
  z-index: 1;
}

.fc-button-group > .fc-button:focus,
.fc-button-group > .fc-button:active,
.fc-button-group > .fc-button.fc-button-active {
  z-index: 1;
}

.fc-button-group > .fc-button:not(:first-child) {
  margin-left: -1px;
}

.fc-button-group > .fc-button:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.fc-button-group > .fc-button:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Popover
--------------------------------------------------------------------------------------------------*/
.fc-unthemed .fc-popover {
  border-width: 1px;
  border-style: solid;
}

/* List View
--------------------------------------------------------------------------------------------------*/
.fc-unthemed .fc-list-item:hover td {
  background-color: #f5f5f5;
}

/* Toolbar
--------------------------------------------------------------------------------------------------*/
.fc-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fc-toolbar.fc-header-toolbar {
  margin-bottom: 1.5em;
}

.fc-toolbar.fc-footer-toolbar {
  margin-top: 1.5em;
}

/* inner content */
.fc-toolbar > * > :not(:first-child) {
  margin-left: 0.75em;
}

.fc-toolbar h2 {
  font-size: 1.75em;
  margin: 0;
}

/* View Structure
--------------------------------------------------------------------------------------------------*/
.fc-view-container {
  position: relative;
}

/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */
/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */
.fc-view-container *,
.fc-view-container *:before,
.fc-view-container *:after {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.fc-view,
.fc-view > table {
  /* so dragged elements can be above the view's main element */
  position: relative;
  z-index: 1;
}

@media print {
  .fc {
    max-width: 100% !important;
  }

  /* Global Event Restyling
  --------------------------------------------------------------------------------------------------*/
  .fc-event {
    background: #fff !important;
    color: #000 !important;
    page-break-inside: avoid;
  }

  .fc-event .fc-resizer {
    display: none;
  }

  /* Table & Day-Row Restyling
  --------------------------------------------------------------------------------------------------*/
  .fc th,
.fc td,
.fc hr,
.fc thead,
.fc tbody,
.fc-row {
    border-color: #ccc !important;
    background: #fff !important;
  }

  /* kill the overlaid, absolutely-positioned components */
  /* common... */
  .fc-bg,
.fc-bgevent-skeleton,
.fc-highlight-skeleton,
.fc-mirror-skeleton,
.fc-bgevent-container,
.fc-business-container,
.fc-highlight-container,
.fc-mirror-container {
    display: none;
  }

  /* don't force a min-height on rows (for DayGrid) */
  .fc tbody .fc-row {
    height: auto !important;
    /* undo height that JS set in distributeHeight */
    min-height: 0 !important;
    /* undo the min-height from each view's specific stylesheet */
  }

  .fc tbody .fc-row .fc-content-skeleton {
    position: static;
    /* undo .fc-rigid */
    padding-bottom: 0 !important;
    /* use a more border-friendly method for this... */
  }

  .fc tbody .fc-row .fc-content-skeleton tbody tr:last-child td {
    /* only works in newer browsers */
    padding-bottom: 1em;
    /* ...gives space within the skeleton. also ensures min height in a way */
  }

  .fc tbody .fc-row .fc-content-skeleton table {
    /* provides a min-height for the row, but only effective for IE, which exaggerates this value,
       making it look more like 3em. for other browers, it will already be this tall */
    height: 1em;
  }

  /* Undo month-view event limiting. Display all events and hide the "more" links
  --------------------------------------------------------------------------------------------------*/
  .fc-more-cell,
.fc-more {
    display: none !important;
  }

  .fc tr.fc-limited {
    display: table-row !important;
  }

  .fc td.fc-limited {
    display: table-cell !important;
  }

  .fc-popover {
    display: none;
    /* never display the "more.." popover in print mode */
  }

  /* TimeGrid Restyling
  --------------------------------------------------------------------------------------------------*/
  /* undo the min-height 100% trick used to fill the container's height */
  .fc-time-grid {
    min-height: 0 !important;
  }

  /* don't display the side axis at all ("all-day" and time cells) */
  .fc-timeGrid-view .fc-axis {
    display: none;
  }

  /* don't display the horizontal lines */
  .fc-slats,
.fc-time-grid hr {
    /* this hr is used when height is underused and needs to be filled */
    display: none !important;
    /* important overrides inline declaration */
  }

  /* let the container that holds the events be naturally positioned and create real height */
  .fc-time-grid .fc-content-skeleton {
    position: static;
  }

  /* in case there are no events, we still want some height */
  .fc-time-grid .fc-content-skeleton table {
    height: 4em;
  }

  /* kill the horizontal spacing made by the event container. event margins will be done below */
  .fc-time-grid .fc-event-container {
    margin: 0 !important;
  }

  /* TimeGrid *Event* Restyling
  --------------------------------------------------------------------------------------------------*/
  /* naturally position events, vertically stacking them */
  .fc-time-grid .fc-event {
    position: static !important;
    margin: 3px 2px !important;
  }

  /* for events that continue to a future day, give the bottom border back */
  .fc-time-grid .fc-event.fc-not-end {
    border-bottom-width: 1px !important;
  }

  /* indicate the event continues via "..." text */
  .fc-time-grid .fc-event.fc-not-end:after {
    content: "...";
  }

  /* for events that are continuations from previous days, give the top border back */
  .fc-time-grid .fc-event.fc-not-start {
    border-top-width: 1px !important;
  }

  /* indicate the event is a continuation via "..." text */
  .fc-time-grid .fc-event.fc-not-start:before {
    content: "...";
  }

  /* time */
  /* undo a previous declaration and let the time text span to a second line */
  .fc-time-grid .fc-event .fc-time {
    white-space: normal !important;
  }

  /* hide the the time that is normally displayed... */
  .fc-time-grid .fc-event .fc-time span {
    display: none;
  }

  /* ...replace it with a more verbose version (includes AM/PM) stored in an html attribute */
  .fc-time-grid .fc-event .fc-time:after {
    content: attr(data-full);
  }

  /* Vertical Scroller & Containers
  --------------------------------------------------------------------------------------------------*/
  /* kill the scrollbars and allow natural height */
  .fc-scroller,
.fc-day-grid-container,
.fc-time-grid-container {
    /* */
    overflow: visible !important;
    height: auto !important;
  }

  /* kill the horizontal border/padding used to compensate for scrollbars */
  .fc-row {
    border: 0 !important;
    margin: 0 !important;
  }

  /* Button Controls
  --------------------------------------------------------------------------------------------------*/
  .fc-button-group,
.fc button {
    display: none;
    /* don't display any button-related controls */
  }
}`,Ss=$`/* DayGridView
--------------------------------------------------------------------------------------------------*/
/* day row structure */
.fc-dayGridWeek-view .fc-content-skeleton,
.fc-dayGridDay-view .fc-content-skeleton {
  /* there may be week numbers in these views, so no padding-top */
  padding-bottom: 1em;
  /* ensure a space at bottom of cell for user selecting/clicking */
}

.fc-dayGrid-view .fc-body .fc-row {
  min-height: 4em;
  /* ensure that all rows are at least this tall */
}

/* a "rigid" row will take up a constant amount of height because content-skeleton is absolute */
.fc-row.fc-rigid {
  overflow: hidden;
}

.fc-row.fc-rigid .fc-content-skeleton {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

/* week and day number styling */
.fc-day-top.fc-other-month {
  opacity: 0.3;
}

.fc-dayGrid-view .fc-week-number,
.fc-dayGrid-view .fc-day-number {
  padding: 2px;
}

.fc-dayGrid-view th.fc-week-number,
.fc-dayGrid-view th.fc-day-number {
  padding: 0 2px;
  /* column headers can't have as much v space */
}

.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number {
  float: right;
}

.fc-rtl .fc-dayGrid-view .fc-day-top .fc-day-number {
  float: left;
}

.fc-ltr .fc-dayGrid-view .fc-day-top .fc-week-number {
  float: left;
  border-radius: 0 0 3px 0;
}

.fc-rtl .fc-dayGrid-view .fc-day-top .fc-week-number {
  float: right;
  border-radius: 0 0 0 3px;
}

.fc-dayGrid-view .fc-day-top .fc-week-number {
  min-width: 1.5em;
  text-align: center;
  background-color: #f2f2f2;
  color: #808080;
}

/* when week/day number have own column */
.fc-dayGrid-view td.fc-week-number {
  text-align: center;
}

.fc-dayGrid-view td.fc-week-number > * {
  /* work around the way we do column resizing and ensure a minimum width */
  display: inline-block;
  min-width: 1.25em;
}`,Ds=$`@charset "UTF-8";
/* TimeGridView all-day area
--------------------------------------------------------------------------------------------------*/
.fc-timeGrid-view .fc-day-grid {
  position: relative;
  z-index: 2;
  /* so the "more.." popover will be over the time grid */
}

.fc-timeGrid-view .fc-day-grid .fc-row {
  min-height: 3em;
  /* all-day section will never get shorter than this */
}

.fc-timeGrid-view .fc-day-grid .fc-row .fc-content-skeleton {
  padding-bottom: 1em;
  /* give space underneath events for clicking/selecting days */
}

/* TimeGrid axis running down the side (for both the all-day area and the slot area)
--------------------------------------------------------------------------------------------------*/
.fc .fc-axis {
  /* .fc to overcome default cell styles */
  vertical-align: middle;
  padding: 0 4px;
  white-space: nowrap;
}

.fc-ltr .fc-axis {
  text-align: right;
}

.fc-rtl .fc-axis {
  text-align: left;
}

/* TimeGrid Structure
--------------------------------------------------------------------------------------------------*/
.fc-time-grid-container,
.fc-time-grid {
  /* so slats/bg/content/etc positions get scoped within here */
  position: relative;
  z-index: 1;
}

.fc-time-grid {
  min-height: 100%;
  /* so if height setting is 'auto', .fc-bg stretches to fill height */
}

.fc-time-grid table {
  /* don't put outer borders on slats/bg/content/etc */
  border: 0 hidden transparent;
}

.fc-time-grid > .fc-bg {
  z-index: 1;
}

.fc-time-grid .fc-slats,
.fc-time-grid > hr {
  /* the <hr> TimeGridView injects when grid is shorter than scroller */
  position: relative;
  z-index: 2;
}

.fc-time-grid .fc-content-col {
  position: relative;
  /* because now-indicator lives directly inside */
}

.fc-time-grid .fc-content-skeleton {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
}

/* divs within a cell within the fc-content-skeleton */
.fc-time-grid .fc-business-container {
  position: relative;
  z-index: 1;
}

.fc-time-grid .fc-bgevent-container {
  position: relative;
  z-index: 2;
}

.fc-time-grid .fc-highlight-container {
  position: relative;
  z-index: 3;
}

.fc-time-grid .fc-event-container {
  position: relative;
  z-index: 4;
}

.fc-time-grid .fc-now-indicator-line {
  z-index: 5;
}

.fc-time-grid .fc-mirror-container {
  /* also is fc-event-container */
  position: relative;
  z-index: 6;
}

/* TimeGrid Slats (lines that run horizontally)
--------------------------------------------------------------------------------------------------*/
.fc-time-grid .fc-slats td {
  height: 1.5em;
  border-bottom: 0;
  /* each cell is responsible for its top border */
}

.fc-time-grid .fc-slats .fc-minor td {
  border-top-style: dotted;
}

/* TimeGrid Highlighting Slots
--------------------------------------------------------------------------------------------------*/
.fc-time-grid .fc-highlight-container {
  /* a div within a cell within the fc-highlight-skeleton */
  position: relative;
  /* scopes the left/right of the fc-highlight to be in the column */
}

.fc-time-grid .fc-highlight {
  position: absolute;
  left: 0;
  right: 0;
  /* top and bottom will be in by JS */
}

/* TimeGrid Event Containment
--------------------------------------------------------------------------------------------------*/
.fc-ltr .fc-time-grid .fc-event-container {
  /* space on the sides of events for LTR (default) */
  margin: 0 2.5% 0 2px;
}

.fc-rtl .fc-time-grid .fc-event-container {
  /* space on the sides of events for RTL */
  margin: 0 2px 0 2.5%;
}

.fc-time-grid .fc-event,
.fc-time-grid .fc-bgevent {
  position: absolute;
  z-index: 1;
  /* scope inner z-index's */
}

.fc-time-grid .fc-bgevent {
  /* background events always span full width */
  left: 0;
  right: 0;
}

/* TimeGrid Event Styling
----------------------------------------------------------------------------------------------------
We use the full "fc-time-grid-event" class instead of using descendants because the event won't
be a descendant of the grid when it is being dragged.
*/
.fc-time-grid-event {
  margin-bottom: 1px;
}

.fc-time-grid-event-inset {
  -webkit-box-shadow: 0px 0px 0px 1px #fff;
  box-shadow: 0px 0px 0px 1px #fff;
}

.fc-time-grid-event.fc-not-start {
  /* events that are continuing from another day */
  /* replace space made by the top border with padding */
  border-top-width: 0;
  padding-top: 1px;
  /* remove top rounded corners */
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.fc-time-grid-event.fc-not-end {
  /* replace space made by the top border with padding */
  border-bottom-width: 0;
  padding-bottom: 1px;
  /* remove bottom rounded corners */
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.fc-time-grid-event .fc-content {
  overflow: hidden;
  max-height: 100%;
}

.fc-time-grid-event .fc-time,
.fc-time-grid-event .fc-title {
  padding: 0 1px;
}

.fc-time-grid-event .fc-time {
  font-size: 0.85em;
  white-space: nowrap;
}

/* short mode, where time and title are on the same line */
.fc-time-grid-event.fc-short .fc-content {
  /* don't wrap to second line (now that contents will be inline) */
  white-space: nowrap;
}

.fc-time-grid-event.fc-short .fc-time,
.fc-time-grid-event.fc-short .fc-title {
  /* put the time and title on the same line */
  display: inline-block;
  vertical-align: top;
}

.fc-time-grid-event.fc-short .fc-time span {
  display: none;
  /* don't display the full time text... */
}

.fc-time-grid-event.fc-short .fc-time:before {
  content: attr(data-start);
  /* ...instead, display only the start time */
}

.fc-time-grid-event.fc-short .fc-time:after {
  content: " - ";
  /* seperate with a dash, wrapped in nbsp's */
}

.fc-time-grid-event.fc-short .fc-title {
  font-size: 0.85em;
  /* make the title text the same size as the time */
  padding: 0;
  /* undo padding from above */
}

/* resizer (cursor device) */
.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {
  left: 0;
  right: 0;
  bottom: 0;
  height: 8px;
  overflow: hidden;
  line-height: 8px;
  font-size: 11px;
  font-family: monospace;
  text-align: center;
  cursor: s-resize;
}

.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {
  content: "=";
}

/* resizer (touch device) */
.fc-time-grid-event.fc-selected .fc-resizer {
  /* 10x10 dot */
  border-radius: 5px;
  border-width: 1px;
  width: 8px;
  height: 8px;
  border-style: solid;
  border-color: inherit;
  background: #fff;
  /* horizontally center */
  left: 50%;
  margin-left: -5px;
  /* center on the bottom edge */
  bottom: -5px;
}

/* Now Indicator
--------------------------------------------------------------------------------------------------*/
.fc-time-grid .fc-now-indicator-line {
  border-top-width: 1px;
  left: 0;
  right: 0;
}

/* arrow on axis */
.fc-time-grid .fc-now-indicator-arrow {
  margin-top: -5px;
  /* vertically center on top coordinate */
}

.fc-ltr .fc-time-grid .fc-now-indicator-arrow {
  left: 0;
  /* triangle pointing right... */
  border-width: 5px 0 5px 6px;
  border-top-color: transparent;
  border-bottom-color: transparent;
}

.fc-rtl .fc-time-grid .fc-now-indicator-arrow {
  right: 0;
  /* triangle pointing left... */
  border-width: 5px 6px 5px 0;
  border-top-color: transparent;
  border-bottom-color: transparent;
}`;customElements.define("fullcalendar-card",class extends ee{setConfig(e){if(!e||!e.entities)throw new Error("Invalid configuration");this._config=e,this.entities=this.processConfigEntities(this._config.entities)}createRenderRoot(){return this}get hostcss(){return this.isPanel?O`<style type="text/css">
			:host #calendar {
        		width: 100%;
        		height: 100%;
        		background-color: var(--paper-card-background-color);
      		}
      		</style>`:O`<style type="text/css">
      			:host #calendar {
        			background-color: var(--paper-card-background-color);
      			}
      		</style>`}get calendarcss(){return O`<style type="text/css">
      		${Es}
			${Ss}
			${Ds}
      		</style>`}render(){return[this.hostcss,this.calendarcss,O`<div id="calendar"></div>`]}get root(){return this.shadowRoot?this.shadowRoot:this}static get properties(){return{isPanel:{type:Boolean,reflectToAttribute:!0}}}processConfigEntities(e){if(!Array.isArray(e))throw new Error("Entities need to be an array");return e.map((e,t)=>{if("string"==typeof e)e={entity:e};else{if("object"!=typeof e||Array.isArray(e))throw new Error(`Invalid entity specified at position ${t}.`);if(!e.entity)throw new Error(`Entity object at position ${t} is missing entity field.`)}return e})}connectedCallback(){super.connectedCallback();let e=new CSSStyleSheet;e.replaceSync('@font-face {\n       \t\tfont-family: "fcicons";\n       \t\tsrc: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype");\n     \t}'),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}get isPanel(){return this._isPanel}set isPanel(e){this._isPanel=e}async getEvents(e,t){if(!this._hass)return[];var n=await Promise.all(this.entities.map(async n=>{let r=`calendars/${n.entity}?start=${e}&end=${t}`;return(await this._hass.callApi("get",r)).map(e=>({title:e.summary?e.summary:e.title,start:e.start.date?e.start.date:e.start.dateTime?e.start.dateTime:e.start,end:e.end.date?e.end.date:e.end.dateTime?e.end.dateTime:e.end,allDay:!!e.start.date,calendar:n}))}));return[].concat.apply([],n)}updateAspectRatio(){let e=window.innerHeight>window.innerWidth,t=this._isPanel?e?.4:2.5:1.35;t!=this.calendar.getOption("aspectRatio")&&this.calendar.setOption("aspectRatio",t)}firstUpdated(){var e=this.root.querySelector("#calendar");console.log("Calendar Element",e);let t=window.innerHeight>window.innerWidth;this.calendar=new Ui(e,{plugins:[Mo,Jo,ws],aspectRatio:this._isPanel?t?.4:2.5:1.35,header:{left:"title",center:"",right:"today dayGridMonth timeGridWeek timeGridDay prev,next"},eventTimeFormat:{hour:"numeric",minute:"2-digit",hour12:!1},events:e=>this.getEvents(e.start.toISOString(),e.end.toISOString()),windowResize:()=>{this.updateAspectRatio()},dateClick:e=>{this.calendar.changeView("timeGridDay",e.dateStr)}}),this.calendar.render()}getCardSize(){return 2}set hass(e){this._hass=e,this.calendar&&this.updateAspectRatio()}})}]);