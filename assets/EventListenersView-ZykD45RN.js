import{b$ as W,c0 as Q,c1 as q,c2 as K,C as G,b as X,g as Y,aU as Z,c3 as ee,c4 as te,c5 as ne,c6 as re,c7 as _,bq as se,c8 as ie,c9 as oe,ca as le,cb as ae,l as U,bM as ce,cc as ue,r as de}from"./inspector-CyOA7R9n.js";async function he(S){const t=S.runtimeModel().target().model(W);if(!t)return{eventListeners:[],internalHandlers:null};const e={internalHandlers:null,eventListeners:[]};return S.callFunction(C,void 0).then(A).then(s).then(f).then(V).catch(i=>(console.error(i),e));function s(i){return i.getOwnProperties(!1)}async function f(i){if(!i.properties)throw new Error("Object properties is empty");const m=[];for(const a of i.properties)a.name==="eventListeners"&&a.value&&m.push(L(a.value).then(c)),a.name==="internalHandlers"&&a.value&&m.push(v(a.value).then(x)),a.name==="errorString"&&a.value&&d(a.value);await Promise.all(m)}function L(i){return Q.objectAsArray(i).map(m).then(k);function m(a){let F,b,P,M,B=null,O=null,j=null,D=null;const R=[];R.push(a.callFunctionJSON(n,void 0).then(r));function n(){return{type:this.type,useCapture:this.useCapture,passive:this.passive,once:this.once}}function r(o){o.type!==void 0&&(F=o.type),o.useCapture!==void 0&&(b=o.useCapture),o.passive!==void 0&&(P=o.passive),o.once!==void 0&&(M=o.once)}R.push(a.callFunction(g).then(A).then(h).then(l).then(u));function g(){return this.handler||null}function h(o){return O=o,O}function u(o){return B=o,o.debuggerModel().functionDetailsPromise(o).then(E)}function E(o){j=o?o.location:null}R.push(a.callFunction(y).then(A).then(p));function y(){return this.remove||null}function p(o){o.type==="function"&&(D=o)}return Promise.all(R).then(w).catch(o=>(console.error(o),null));function w(){if(!j)throw new Error("Empty event listener's location");return new q(t,S,F,b,P,M,B,O,j,D,"FrameworkUser")}}}function v(i){return Q.objectAsArray(i).map(l).then(Q.createFromRemoteObjects.bind(null))}function l(i){return K.objectAsFunction(i).targetFunction()}function c(i){e.eventListeners=i}function x(i){e.internalHandlers=i}function d(i){G.instance().error(String(i.value))}function V(){return e}function A(i){if(i.wasThrown||!i.object)throw new Error("Exception in callFunction or empty result");return i.object}function k(i){return i.filter(m);function m(a){return!!a}}function C(){const i=[];let m=[],a=[],F=[D];try{self.devtoolsFrameworkEventListeners&&P(self.devtoolsFrameworkEventListeners)&&(F=F.concat(self.devtoolsFrameworkEventListeners))}catch(n){i.push("devtoolsFrameworkEventListeners call produced error: "+O(n))}for(let n=0;n<F.length;++n)try{const r=F[n](this);if(r.eventListeners&&P(r.eventListeners)){const h=r.eventListeners.map(u=>M(u)).filter(j);m=m.concat(h)}if(r.internalHandlers&&P(r.internalHandlers)){const h=r.internalHandlers.map(u=>B(u)).filter(j);a=a.concat(h)}}catch(r){i.push("fetcher call produced error: "+O(r))}const b={eventListeners:m,internalHandlers:a.length?a:void 0,errorString:void 0};if(b.internalHandlers||delete b.internalHandlers,i.length){let n=`Framework Event Listeners API Errors:
	`+i.join(`
	`);n=n.substr(0,n.length-1),b.errorString=n}return(b.errorString===""||b.errorString===void 0)&&delete b.errorString,b;function P(n){if(!n||typeof n!="object")return!1;try{if(typeof n.splice=="function"){const r=n.length;return typeof r=="number"&&r>>>0===r&&(r>0||1/r>0)}}catch{}return!1}function M(n){try{let r="";if(!n)r+="empty event listener, ";else{const g=n.type;(!g||typeof g!="string")&&(r+="event listener's type isn't string or empty, ");const h=n.useCapture;typeof h!="boolean"&&(r+="event listener's useCapture isn't boolean or undefined, ");const u=n.passive;typeof u!="boolean"&&(r+="event listener's passive isn't boolean or undefined, ");const E=n.once;typeof E!="boolean"&&(r+="event listener's once isn't boolean or undefined, ");const y=n.handler;(!y||typeof y!="function")&&(r+="event listener's handler isn't a function or empty, ");const p=n.remove;if(p&&typeof p!="function"&&(r+="event listener's remove isn't a function, "),!r)return{type:g,useCapture:h,passive:u,once:E,handler:y,remove:p}}return i.push(r.substr(0,r.length-2)),null}catch(r){return i.push(O(r)),null}}function B(n){return n&&typeof n=="function"?n:(i.push("internal handler isn't a function or empty"),null)}function O(n){try{return String(n)}catch{return"<error>"}}function j(n){return!!n}function D(n){if(!n||!(n instanceof Node))return{eventListeners:[]};const r=window.jQuery;if(!r||!r.fn)return{eventListeners:[]};const g=r,h=r._data||r.data,u=[],E=[];if(typeof h=="function"){const p=h(n,"events");for(const o in p)for(const N in p[o]){const T=p[o][N];if(typeof T=="object"||typeof T=="function"){const J={handler:T.handler||T,useCapture:!0,passive:!1,once:!1,type:o,remove:R.bind(n,T.selector)};u.push(J)}}const w=h(n);w&&typeof w.handle=="function"&&E.push(w.handle)}const y=g(n)[0];if(y){const p=y.$events;for(const w in p){const o=p[w];for(const N in o)if(typeof o[N]=="function"){const T={handler:o[N],useCapture:!0,passive:!1,once:!1,type:w};u.push(T)}}y&&y.$handle&&E.push(y.$handle)}return{eventListeners:u,internalHandlers:E}}function R(n,r,g){if(!this||!(this instanceof Node))return;const h=this,u=window.jQuery;if(!u||!u.fn)return;u(h).off(r,n,g)}}}const z=new CSSStyleSheet;z.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline-disclosure li {
  padding: 0 0 0 5px;
  overflow: hidden;
  display: flex;
  min-height: 18px;
  align-items: center;
}

.tree-outline-disclosure {
  padding-left: 0 !important; /* stylelint-disable-line declaration-no-important */
  padding-right: 3px;
}

.tree-outline-disclosure li.parent::before {
  top: 0 !important; /* stylelint-disable-line declaration-no-important */
}

.tree-outline-disclosure .name {
  color: var(--sys-color-token-tag);
}

.tree-outline-disclosure .object-value-node,
.tree-outline-disclosure .object-value-object {
  overflow: hidden;
  text-overflow: ellipsis;
}

.event-listener-details {
  display: flex;
  min-height: 18px;
  align-items: center;

  devtools-button {
    height: 18px;
  }
}

.event-listener-tree-subtitle {
  float: right;
  margin-left: 5px;
  flex-shrink: 0;
}

.event-listener-button {
  padding: 0 5px;
  color: var(--sys-color-primary);
  background-color: var(--sys-color-cdt-base-container);
  border-radius: 7px;
  border: 1px solid var(--sys-color-tonal-outline);
  margin-left: 5px;
  display: block;
  flex-shrink: 0;

  &:hover {
    background-color: var(--sys-color-state-hover-on-subtle);
  }

  &:active {
    background-color: var(--sys-color-state-ripple-neutral-on-subtle);
  }
}

.tree-outline-disclosure li:hover .event-listener-button {
  display: inline;
}

@media (forced-colors: active) {
  .event-listener-details .event-listener-button {
    forced-color-adjust: none;
    opacity: 100%;
    background: ButtonFace;
    color: ButtonText;
    border-color: ButtonText;
  }

  .event-listener-button:hover {
    background-color: Highlight !important; /* stylelint-disable-line declaration-no-important */
    color: HighlightText;
    border-color: ButtonText;
  }

  .tree-outline.hide-selection-when-blurred .selected:focus-visible .event-listener-button,
  .tree-outline-disclosure li:focus-visible .gray-info-message {
    background-color: Highlight;
    color: HighlightText;
    border-color: HighlightText;
  }
}

/*# sourceURL=eventListenersView.css */
`);const I={noEventListeners:"No event listeners",deleteEventListener:"Delete event listener",togglePassive:"Toggle Passive",toggleWhetherEventListenerIs:"Toggle whether event listener is passive or blocking",revealInElementsPanel:"Reveal in Elements panel",passive:"Passive"},fe=X("panels/event_listeners/EventListenersView.ts",I),H=Y.bind(void 0,fe);class me extends Z{changeCallback;enableDefaultTreeFocus;treeOutline;emptyHolder;linkifier;treeItemMap;constructor(t,e=!1){super(),this.changeCallback=t,this.enableDefaultTreeFocus=e,this.treeOutline=new ee,this.treeOutline.setComparator($.comparator),this.treeOutline.element.classList.add("monospace"),this.treeOutline.setShowSelectionOnKeyboardFocus(!0),this.treeOutline.setFocusable(!0),this.element.appendChild(this.treeOutline.element),this.emptyHolder=document.createElement("div"),this.emptyHolder.classList.add("gray-info-message"),this.emptyHolder.textContent=H(I.noEventListeners),this.emptyHolder.tabIndex=-1,this.linkifier=new te,this.treeItemMap=new Map}focus(){this.enableDefaultTreeFocus&&(this.emptyHolder.parentNode?this.emptyHolder.focus():this.treeOutline.forceSelect())}async addObjects(t){this.reset(),await Promise.all(t.map(e=>e?this.addObject(e):Promise.resolve())),this.addEmptyHolderIfNeeded(),this.eventListenersArrivedForTest()}addObject(t){let e,s=null;const f=[],L=t.runtimeModel().target().model(W);return L&&f.push(L.eventListeners(t).then(v)),f.push(he(t).then(l)),Promise.all(f).then(c).then(x.bind(this));function v(d){e=d}function l(d){s=d}async function c(){if(!s||!s.internalHandlers)return;return s.internalHandlers.object().callFunctionJSON(V,e.map(d)).then(A);function d(k){return ne.toCallArgument(k.handler())}function V(){const k=[],C=new Set(this);for(const i of arguments)k.push(C.has(i));return k}function A(k){for(let C=0;C<e.length;++C)k[C]&&e[C].markAsFramework()}}function x(){this.addObjectEventListeners(t,e),s&&this.addObjectEventListeners(t,s.eventListeners)}}addObjectEventListeners(t,e){if(e)for(const s of e)this.getOrCreateTreeElementForType(s.type()).addObjectEventListener(s,t)}showFrameworkListeners(t,e,s){const f=this.treeOutline.rootElement().children();for(const L of f){let v=!0;for(const l of L.children()){const c=l,x=c.eventListener().origin();let d=!1;x==="FrameworkUser"&&!t&&(d=!0),x==="Framework"&&t&&(d=!0),!e&&c.eventListener().passive()&&(d=!0),!s&&!c.eventListener().passive()&&(d=!0),c.hidden=d,v=v&&d}L.hidden=v}}getOrCreateTreeElementForType(t){let e=this.treeItemMap.get(t);return e||(e=new $(t,this.linkifier,this.changeCallback),this.treeItemMap.set(t,e),e.hidden=!0,this.treeOutline.appendChild(e)),this.emptyHolder.remove(),e}addEmptyHolderIfNeeded(){let t=!0,e=null;for(const s of this.treeOutline.rootElement().children())s.hidden=!s.firstChild(),t=t&&s.hidden,!e&&!s.hidden&&(e=s);t&&!this.emptyHolder.parentNode&&this.element.appendChild(this.emptyHolder),e&&e.select(!0),this.treeOutline.setFocusable(!!e)}reset(){const t=this.treeOutline.rootElement().children();for(const e of t)e.removeChildren();this.linkifier.reset()}eventListenersArrivedForTest(){}wasShown(){super.wasShown(),this.treeOutline.registerCSSFiles([z,re])}}class $ extends _{toggleOnClick;linkifier;changeCallback;constructor(t,e,s){super(t),this.toggleOnClick=!0,this.linkifier=e,this.changeCallback=s,se(this.listItemElement,`${t}, event listener`)}static comparator(t,e){return t.title===e.title?0:t.title>e.title?1:-1}addObjectEventListener(t,e){const s=new pe(t,e,this.linkifier,this.changeCallback);this.appendChild(s)}}class pe extends _{eventListenerInternal;editable;changeCallback;valueTitle;constructor(t,e,s,f){super("",!0),this.eventListenerInternal=t,this.editable=!1,this.setTitle(e,s),this.changeCallback=f}async onpopulate(){const t=[],e=this.eventListenerInternal,s=e.domDebuggerModel().runtimeModel();t.push(s.createRemotePropertyFromPrimitiveValue("useCapture",e.useCapture())),t.push(s.createRemotePropertyFromPrimitiveValue("passive",e.passive())),t.push(s.createRemotePropertyFromPrimitiveValue("once",e.once())),typeof e.handler()<"u"&&t.push(new ie("handler",e.handler())),oe.populateWithProperties(this,t,[],!0,!0,null)}setTitle(t,e){const s=this.listItemElement.createChild("span","event-listener-details"),f=le.createPropertyValue(t,!1,!1);if(this.valueTitle=f.element,s.appendChild(this.valueTitle),this.eventListenerInternal.canRemove()){const l=new ae;l.data={variant:"icon",size:"SMALL",iconName:"bin",jslogContext:"delete-event-listener"},U.install(l,H(I.deleteEventListener)),l.addEventListener("click",c=>{this.removeListener(),c.consume()},!1),s.appendChild(l)}if(this.eventListenerInternal.isScrollBlockingType()&&this.eventListenerInternal.canTogglePassive()){const l=s.createChild("button","event-listener-button");l.textContent=H(I.togglePassive),l.setAttribute("jslog",`${ce("passive").track({click:!0})}`),U.install(l,H(I.toggleWhetherEventListenerIs)),l.addEventListener("click",c=>{this.togglePassiveListener(),c.consume()},!1),s.appendChild(l)}const L=s.createChild("span","event-listener-tree-subtitle"),v=e.linkifyRawLocation(this.eventListenerInternal.location(),this.eventListenerInternal.sourceURL());L.appendChild(v),this.listItemElement.addEventListener("contextmenu",l=>{const c=new ue(l);l.target!==v&&c.appendApplicableItems(v),t.subtype==="node"&&c.defaultSection().appendItem(H(I.revealInElementsPanel),()=>de(t),{jslogContext:"reveal-in-elements"}),c.defaultSection().appendItem(H(I.deleteEventListener),this.removeListener.bind(this),{disabled:!this.eventListenerInternal.canRemove(),jslogContext:"delete-event-listener"}),c.defaultSection().appendCheckboxItem(H(I.passive),this.togglePassiveListener.bind(this),{checked:this.eventListenerInternal.passive(),disabled:!this.eventListenerInternal.canTogglePassive(),jslogContext:"passive"}),c.show()})}removeListener(){this.removeListenerBar(),this.eventListenerInternal.remove()}togglePassiveListener(){this.eventListenerInternal.togglePassive().then(()=>this.changeCallback())}removeListenerBar(){const t=this.parent;if(!t)return;t.removeChild(this),t.childCount()||t.collapse();let e=!0;for(const s of t.children())s.hidden||(e=!1);t.hidden=e}eventListener(){return this.eventListenerInternal}onenter(){return this.valueTitle?(this.valueTitle.click(),!0):!1}ondelete(){return this.eventListenerInternal.canRemove()?(this.removeListener(),!0):!1}}export{me as E};
//# sourceMappingURL=EventListenersView-ZykD45RN.js.map
