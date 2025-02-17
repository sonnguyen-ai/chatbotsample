(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,j=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),K=new WeakMap;let rt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(e,t))}return t}toString(){return this.cssText}};const dt=r=>new rt(typeof r=="string"?r:r+"",void 0,W),ot=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new rt(e,r,W)},pt=(r,t)=>{if(j)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Z=j?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return dt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ut,defineProperty:ft,getOwnPropertyDescriptor:gt,getOwnPropertyNames:mt,getOwnPropertySymbols:$t,getPrototypeOf:_t}=Object,$=globalThis,F=$.trustedTypes,yt=F?F.emptyScript:"",z=$.reactiveElementPolyfillSupport,S=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>!ut(r,t),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ft(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=gt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const c=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=_t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[...mt(e),...$t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:D).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:D;this._$Em=i,this[i]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??nt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[S("elementProperties")]=new Map,A[S("finalized")]=new Map,z==null||z({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,N=P.trustedTypes,G=N?N.createPolicy("lit-html",{createHTML:r=>r}):void 0,at="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+m,vt=`<${ht}>`,v=document,C=()=>v.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",q=Array.isArray,bt=r=>q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,Q=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,tt=/"/g,ct=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),x=At(1),b=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),et=new WeakMap,y=v.createTreeWalker(v,129);function lt(r,t){if(!q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const xt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=E;for(let c=0;c<e;c++){const a=r[c];let d,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===E?p[1]==="!--"?n=Y:p[1]!==void 0?n=Q:p[2]!==void 0?(ct.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=i??E,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?_:p[3]==='"'?tt:X):n===tt||n===X?n=_:n===Y||n===Q?n=E:(n=_,i=void 0);const g=n===_&&r[c+1].startsWith("/>")?" ":"";o+=n===E?a+vt:h>=0?(s.push(d),a.slice(0,h)+at+a.slice(h)+m+g):a+m+(h===-2?c:g)}return[lt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[d,p]=xt(t,e);if(this.el=M.createElement(d,s),y.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=y.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(at)){const u=p[n++],g=i.getAttribute(h).split(m),O=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:O[2],strings:g,ctor:O[1]==="."?Et:O[1]==="?"?St:O[1]==="@"?Pt:R}),i.removeAttribute(h)}else h.startsWith(m)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(ct.test(i.tagName)){const h=i.textContent.split(m),u=h.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let g=0;g<u;g++)i.append(h[g],C()),y.nextNode(),a.push({type:2,index:++o});i.append(h[u],C())}}}else if(i.nodeType===8)if(i.data===ht)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(m,h+1))!==-1;)a.push({type:7,index:o}),h+=m.length-1}o++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function w(r,t,e=r,s){var n,c;if(t===b)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,s)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);y.currentNode=i;let o=y.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new k(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Ct(o,this,t)),this._$AV.push(d),a=s[++c]}n!==(a==null?void 0:a.index)&&(o=y.nextNode(),n++)}return y.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),U(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(lt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new wt(i,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new M(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new k(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const c=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=w(this,c[s+a],e,a),d===b&&(d=this._$AH[a]),n||(n=!U(d)||d!==this._$AH[a]),d===l?t=l:t!==l&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}}class St extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}}class Pt extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??l)===b)return;const s=this._$AH,i=t===l&&s!==l||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==l&&(s===l||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const B=P.litHtmlPolyfillSupport;B==null||B(M,k),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.1");const Ut=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new k(t.insertBefore(C(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var it;f._$litElement$=!0,f.finalized=!0,(it=globalThis.litElementHydrateSupport)==null||it.call(globalThis,{LitElement:f});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Mt=ot`
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
`,H=(()=>{let r={};return{publish:(t,e)=>{r[t].forEach(i=>{i(e)})},subscribe:(t,e,s)=>{r[t]=r[t]||[],r[t].push(e.bind(s||void 0))}}})();class Ht extends f{constructor(){super()}createRenderRoot(){return this}_onClickClose(){H.publish("closePopup")}render(){return x`
            <div class="chat-header">
                <div class="header-info">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
                    </svg>
                    <h2 class="logo-text">Zalo</h2>
                </div>
                <button class="material-symbols-rounded" @click=${this._onClickClose}>
                    keyboard_arrow_down
                </button>
            </div>                    
        `}}customElements.define("chat-header",Ht);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={CHILD:2},Ot=r=>(...t)=>({_$litDirective$:r,values:t});class Tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V extends Tt{constructor(t){if(super(t),this.it=l,t.type!==kt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===l||t==null)return this._t=void 0,this.it=t;if(t===b)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}V.directiveName="unsafeHTML",V.resultType=1;const st=Ot(V);class Nt extends f{constructor(){super()}static get properties(){return{isBot:{type:Boolean},text:{type:String}}}createRenderRoot(){return this}render(){return this.isBot===!0?x`
            
            <div class="message bot-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
                    </svg>
                    <p class="messate-text">${st(this.text)}
                    </p>
            </div>
            `:x`
            <div class="message user-message">
                    <p class="messate-text">${st(this.text)}
                    </p>
            </div>           
        `}}customElements.define("chat-message",Nt);class Rt extends f{static get properties(){return{closePopup:{type:String}}}constructor(){super(),this.closePopup="show",H.subscribe("closePopup",this._openConnect,this)}createRenderRoot(){return this}_openConnect(){this.closePopup="show"}render(){return x`
            <div class="floating-icon-container ${this.closePopup}" @click=${this._onClick}>
                <span class="material-symbols-rounded">
                    chat
                </span>
            </div>
        `}_onClick(){H.publish("showPopup"),this.closePopup=""}}customElements.define("chat-connect",Rt);class zt extends f{constructor(){super()}createRenderRoot(){return this}render(){return x`
            <div class="chat-popup">
                <chat-header></chat-header>
                <div class="chat-body">
                    <chat-message text="Hello! how are you bro?"></chat-message>
                    <chat-message text="let's make a call"></chat-message>
                    <chat-message isBot=${!0} text="..."></chat-message>
                    <chat-message isBot=${!0} text="I'm an AI chatbot. Good! let's catchup"></chat-message>
                    <chat-message text="Hãy giới thiệu bằng tiếng việt về công ty Sey Solutions"></chat-message>
                    <chat-message isBot=${!0} text="SEY SOLUTIONS là công ty gia công phần mềm hàng đầu Việt Nam với kinh nghiệm trong lĩnh vực Ecommerce và các hệ thống vận hành thương mại
                    \n Bạn muốn liên hệ bộ phận nào?
                    \n 1. Báo giá
                    \n 2. Đặt dịch vụ
                    \n 3. <strong>Live chat với CSKH</strong>"></chat-message>
                </div>
                <div class="chat-footer">
                    <form action="#" class="chat-form">
                        <input type="text" placeholder="Message..." class="chat-input" required>
                        <button class="material-symbols-rounded">
                            arrow_upward
                        </button>
                    </form>
                </div>
            </div>         
        `}}customElements.define("chat-popup",zt);class Lt extends f{static get properties(){return{showPopup:{type:String}}}constructor(){super(),H.subscribe("showPopup",this._showPopup,this),H.subscribe("closePopup",this._closePopup,this)}_showPopup(){this.showPopup="show"}_closePopup(){this.showPopup=""}render(){return x`
       <div class="container ${this.showPopup}">
            <chat-popup></chat-popup>
            <chat-connect></chat-connect>
        </div>
        `}static get styles(){return[Mt,ot`
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
        
        `]}}window.customElements.define("chat-app",Lt);
