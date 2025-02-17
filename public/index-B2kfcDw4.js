var yt=Object.defineProperty;var bt=(o,t,e)=>t in o?yt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var I=(o,t,e)=>bt(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,F=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Z=new WeakMap;let ht=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Z.set(e,t))}return t}toString(){return this.cssText}};const At=o=>new ht(typeof o=="string"?o:o+"",void 0,K),ct=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new ht(e,o,K)},xt=(o,t)=>{if(F)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},G=F?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return At(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wt,defineProperty:Et,getOwnPropertyDescriptor:St,getOwnPropertyNames:Ct,getOwnPropertySymbols:Pt,getPrototypeOf:kt}=Object,g=globalThis,Q=g.trustedTypes,Mt=Q?Q.emptyScript:"",B=g.reactiveElementPolyfillSupport,C=(o,t)=>o,W={toAttribute(o,t){switch(t){case Boolean:o=o?Mt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},lt=(o,t)=>!wt(o,t),X={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Et(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=St(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);r.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,s=[...Ct(e),...Pt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:W).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:W;this._$Em=i,this[i]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??lt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[C("elementProperties")]=new Map,x[C("finalized")]=new Map,B==null||B({ReactiveElement:x}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,O=P.trustedTypes,tt=O?O.createPolicy("lit-html",{createHTML:o=>o}):void 0,dt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+$,Tt=`<${pt}>`,y=document,M=()=>y.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",J=Array.isArray,Rt=o=>J(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",D=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,st=/>/g,_=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,ot=/"/g,ut=/^(?:script|style|textarea|title)$/i,Ut=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),b=Ut(1),A=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),rt=new WeakMap,v=y.createTreeWalker(y,129);function ft(o,t){if(!J(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}const Ht=(o,t)=>{const e=o.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",n=S;for(let l=0;l<e;l++){const a=o[l];let d,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=et:p[1]!==void 0?n=st:p[2]!==void 0?(ut.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=i??S,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?_:p[3]==='"'?ot:it):n===ot||n===it?n=_:n===et||n===st?n=S:(n=_,i=void 0);const m=n===_&&o[l+1].startsWith("/>")?" ":"";r+=n===S?a+Tt:h>=0?(s.push(d),a.slice(0,h)+dt+a.slice(h)+$+m):a+$+(h===-2?l:m)}return[ft(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[d,p]=Ht(t,e);if(this.el=R.createElement(d,s),v.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(dt)){const u=p[n++],m=i.getAttribute(h).split($),H=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:H[2],strings:m,ctor:H[1]==="."?Ot:H[1]==="?"?zt:H[1]==="@"?Lt:L}),i.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:r}),i.removeAttribute(h));if(ut.test(i.tagName)){const h=i.textContent.split($),u=h.length-1;if(u>0){i.textContent=O?O.emptyScript:"";for(let m=0;m<u;m++)i.append(h[m],M()),v.nextNode(),a.push({type:2,index:++r});i.append(h[u],M())}}}else if(i.nodeType===8)if(i.data===pt)a.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:r}),h+=$.length-1}r++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function w(o,t,e=o,s){var n,l;if(t===A)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const r=T(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=w(o,i._$AS(o,t.values),i,s)),t}class Nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??y).importNode(e,!0);v.currentNode=i;let r=v.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new U(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new It(r,this,t)),this._$AV.push(d),a=s[++l]}n!==(a==null?void 0:a.index)&&(r=v.nextNode(),n++)}return v.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),T(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Rt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(ft(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const n=new Nt(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new R(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new U(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(r===void 0)t=w(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const l=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=w(this,l[s+a],e,a),d===A&&(d=this._$AH[a]),n||(n=!T(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class zt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Lt extends L{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??c)===A)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const V=P.litHtmlPolyfillSupport;V==null||V(R,U),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.1");const Bt=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new U(t.insertBefore(M(),r),r,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}};var at;f._$litElement$=!0,f.finalized=!0,(at=globalThis.litElementHydrateSupport)==null||at.call(globalThis,{LitElement:f});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Dt=ct`
.material-symbols-rounded {
  font-family: 'Material Symbols Rounded';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
  :host {
    --headercolor: #f9f9f9;
    --maincolor: #4934fa;
    --lightgray: #E5E5EA;
    --messenger-sender: #5834fa;
  }
`,E=(()=>{let o={};return{publish:(t,e)=>{o[t].forEach(i=>{i(e)})},subscribe:(t,e,s)=>{o[t]=o[t]||[],o[t].push(e.bind(s||void 0))}}})();class Vt extends f{constructor(){super()}createRenderRoot(){return this}_onClickClose(){E.publish("closePopup")}render(){return b`
            <div class="chat-header">
                <div class="header-info">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
                    </svg>
                    <h2 class="logo-text">AI Chat bot Demo</h2>
                </div>
                <button class="material-symbols-rounded" @click=${this._onClickClose}>
                    keyboard_arrow_down
                </button>
            </div>                    
        `}}customElements.define("chat-header",Vt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={CHILD:2},$t=o=>(...t)=>({_$litDirective$:o,values:t});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let q=class extends gt{constructor(t){if(super(t),this.it=c,t.type!==mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===c||t==null)return this._t=void 0,this.it=t;if(t===A)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};q.directiveName="unsafeHTML",q.resultType=1;const nt=$t(q);class jt extends f{constructor(){super()}static get properties(){return{isBot:{type:String},text:{type:String}}}createRenderRoot(){return this}render(){return this.isBot==="true"?b`
            
            <div class="message bot-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
                    </svg>
                    <p class="messate-text">${nt(this.text)}
                    </p>
            </div>
            `:b`
            <div class="message user-message">
                    <p class="messate-text">${nt(this.text)}
                    </p>
            </div>           
        `}}customElements.define("chat-message",jt);class Yt extends f{static get properties(){return{active:{state:!0}}}constructor(){super(),this.active=!0,E.subscribe("closePopup",this._openConnect,this)}createRenderRoot(){return this}_openConnect(){this.active=!0,this.removeAttribute("inert")}render(){return b`
            <div class="floating-icon-container ${this.active?"show":""}" @click=${this._onClick}>
                <span class="material-symbols-rounded">
                    chat
                </span>
            </div>
        `}_onClick(){E.publish("showPopup"),this.active=!1,this.setAttribute("inert","")}}customElements.define("chat-connect",Yt);function Wt(){[{href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",rel:"stylesheet"},{href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0",rel:"stylesheet"}].forEach(t=>{const e=document.createElement("link");e.href=t.href,e.rel=t.rel,document.head.appendChild(e)})}function qt(){return document.querySelector("chat-app").shadowRoot}const Ft=[{text:"Hello! how can I help you!!!",role:"system"}];/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=o=>o.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(o,t)=>{var s;const e=o._$AN;if(e===void 0)return!1;for(const i of e)(s=i._$AO)==null||s.call(i,t,!1),k(i,t);return!0},z=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},_t=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),Gt(t)}};function Jt(o){this._$AN!==void 0?(z(this),this._$AM=o,_t(this)):this._$AM=o}function Zt(o,t=!1,e=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let r=e;r<s.length;r++)k(s[r],!1),z(s[r]);else s!=null&&(k(s,!1),z(s));else k(this,o)}const Gt=o=>{o.type==mt.CHILD&&(o._$AP??(o._$AP=Zt),o._$AQ??(o._$AQ=Jt))};class Qt extends gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),_t(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(i=this.disconnected)==null||i.call(this)),e&&(k(this,t),z(this))}setValue(t){if(Kt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=()=>new te;class te{}const Y=new WeakMap,ee=$t(class extends Qt{render(o){return c}update(o,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=o.options)==null?void 0:s.host,this.rt(this.ct=o.element)),c}rt(o){if(this.isConnected||(o=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=Y.get(t);e===void 0&&(e=new WeakMap,Y.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,o),o!==void 0&&this.Y.call(this.ht,o)}else this.Y.value=o}get lt(){var o,t;return typeof this.Y=="function"?(o=Y.get(this.ht??globalThis))==null?void 0:o.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class vt extends f{constructor(){super();I(this,"inputRef");this.messages=[...Ft],this.inputRef=Xt()}connectedCallback(){super.connectedCallback(),E.subscribe("showPopup",this._scrollToBottom,this)}createRenderRoot(){return this}async _scrollToBottom(){await this.updateComplete;const e=qt();e.querySelector(".chat-body").scrollTop=e.querySelector(".chat-body").scrollHeight}async _onClickSubmit(e){e.preventDefault(),this.messages=[...this.messages,{text:this.inputRef.value.value,role:"user"}],this.inputRef.value.value="",await new Promise(s=>setTimeout(s,500)).then(()=>{}),this._scrollToBottom(),this.messages=[...this.messages,{text:"typing...",role:"system"}],await new Promise(s=>setTimeout(s,1e3)).then(()=>{}),this.messages=[...this.messages,{text:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",role:"system"}].filter(s=>s.text!=="typing..."),this._scrollToBottom()}render(){return b`
            <div class="chat-popup">
                <chat-header></chat-header>
                <div class="chat-body">
                    ${this.messages.map((e,s)=>b`<chat-message key=${s} text=${e.text} isBot= ${e.role==="system"}></chat-message>`)}
                </div>
                <div class="chat-footer">
                    <form action="#" class="chat-form" novalidate @submit=${this._onClickSubmit}>
                        <input ${ee(this.inputRef)} type="text" placeholder="Message..." class="chat-input" required>
                        <button class="material-symbols-rounded">
                            arrow_upward
                        </button>
                    </form>
                </div>
            </div>      
        `}}I(vt,"properties",{messages:{type:Array}});customElements.define("chat-popup",vt);class se extends f{static get properties(){return{_active:{state:!0}}}constructor(){super(),Wt(),E.subscribe("showPopup",this._showPopup,this),E.subscribe("closePopup",this._closePopup,this)}_showPopup(){this._active=!0}_closePopup(){this._active=!1}render(){return b`
       <div class="container ${this._active?"show":""}">
            <chat-popup></chat-popup>
            <chat-connect></chat-connect>
        </div>
        `}static get styles(){return[Dt,ct`
        * {
            margin:0;
            padding: 0;
            box-sizing: border-box;
            font-family: "inter", sans-serif;
        }
        .container {
    position: absolute;
    bottom: 50px;
    right:10px;
}

.chat-popup{
    transform: scale(0.2);
    transform-origin: bottom right;
    
    display: flex;
    opacity: 0;
    pointer-events: none;
    flex-direction: column;
    justify-content: space-between;
   position: relative;
    width: 420px;
    overflow: hidden;
    background: #fff;
    border-radius: 15px;
    transition: all 0.1s ease;
    box-shadow: 0 0 128px 0 rgba(0,0,0,0.1), 0 32px 64px -48px rgba(0,0,0,0.5);
}

.container.show .chat-popup{
    opacity: 1;
    pointer-events: auto;
    transform:scale(1);
    transition: all 0.1s ease;
} 

.chat-popup .chat-header {
    display: flex;
    padding: 15px 22px;
    align-items: center;
    justify-content: space-between;
    background: var(--headercolor);
}

.chat-header .header-info{
    display: flex;
    gap: 10px;
    align-items: center;
}

.header-info svg{
    height: 35px;
    width: 35px;
    flex-shrink: 0;
    fill: #fff;
    background-color: var(--maincolor); 
    border-radius: 50%;
    padding: 6px;
}

.header-info .logo-text{
    color: var(--messenger-sender);
    font-size: 1.3rem;
    font-weight: 600;
}

.chat-header button {
    height: 40px;
    width: 40px;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 50%;
    background: var(--maincolor);
    transition: 0.3s;
    cursor: pointer;
}

.chat-header button:hover {
    background-color: var(--messenger-sender);
}



.chat-body {
    padding: 15px 23px;
    display: flex;
    flex-direction: column;
    gap:20px;
    overflow-y: auto;
    height: 460px;
    margin-bottom:76px;
}




.chat-body .bot-message svg{
    height: 30px;
    width: 30px;
    flex-shrink: 0;
    fill: #fff; 
    background-color: var(--maincolor);
    border-radius: 50%;
    padding: 6px;
    align-self: flex-end;
}

.chat-body .message .messate-text{
    padding: 12px 16px;
    max-width: 75%;
    word-wrap: break-word;
    white-space: pre-line;
    font-size: 0.9rem;
}

.chat-body .bot-message .messate-text {
    background: var(--lightgray);
    border-radius: 13px 13px 13px 0px;
}

.chat-body .bot-message {
    display: flex;
    align-items: center;
    gap: 11px
}

.chat-body .user-message .messate-text {
    background: var(--messenger-sender);
    border-radius: 13px 13px 0px 13px;
    color: #fff;
}

.chat-body .user-message {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.chat-footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 15px 22px 20px;
   /* Include padding and border in width */
}

.chat-footer .chat-form {
    display: flex;
    align-items: center;
    background-color: #fff;
    outline: 1px solid #cccce5;
    border-radius: 32px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.06)
}

.chat-form .chat-input {
    border:none;
    outline: none;
    height: 2.5rem;
    padding: 0 1rem;
    width: 100%;
}

.chat-form button {
    cursor: pointer;
    font-size: 1rem;
    color:#fff;
    display: none;
    height: 2.5rem;
    width: 2.5rem;
    border: none;
    outline: none;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--maincolor);
}

.chat-form button:hover {
    background: var(--messenger-sender);
}

.chat-form:focus-within {
   outline: 1px solid var(--maincolor);
}

.chat-form .chat-input:valid~button{
    display: block;
}

.floating-icon-container{
    opacity: 0;
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    border-radius: 50%;
    background: var(--messenger-sender);
    padding: 10px;
}

.floating-icon-container span {
    
    border-radius: 5px;
    color: #fff;
    margin:10px;
}

.floating-icon-container.show {
    opacity:1;
}
        
        `]}}window.customElements.define("chat-app",se);
