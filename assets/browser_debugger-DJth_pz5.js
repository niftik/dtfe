import{b as _,g as V,d_ as ne,aU as U,c3 as ke,d$ as me,i as B,aE as P,dp as X,cH as g,dw as W,bw as M,c7 as G,e0 as v,b1 as q,e1 as E,V as D,e2 as fe,e3 as b,bG as C,du as ie,e4 as oe,e5 as se,e6 as re,bq as x,b$ as y,e7 as ge,e8 as ae,bh as ve,dX as xe,cc as F,r as ye,e9 as ce,cR as Z,ea as J,c$ as Be,bA as Ee,eb as A,bN as we,b4 as K,ec as Q,ed as Y,ee as Se,ef as Ce,b6 as Le}from"./inspector-CyOA7R9n.js";import{o as Ie,p as ee}from"./WatchExpressionsSidebarPane-ByQ6h9QR.js";import"./PreviewFactory-7rWtg079.js";import"./utils-C4_HKhgT.js";import{E as Me}from"./EventListenersView-ZykD45RN.js";import"./ScriptFormatter-CdcZyJ9a.js";import"./PopoverHelper-fEnxzApM.js";import"./coverage-nL5Jv5gw.js";import"./cssOverview.css-C_I9lWrq.js";import"./PanelIntroductionSteps-BeLT2-qM.js";import"./PreviewToggle-D6BBIbZ3.js";import"./swatchPopover.css-CdLS3b97.js";import"./FloatingButton-ChdjBnjy.js";import"./Debouncer-BW_30p93.js";import"./BezierUI-Cu0bTMGR.js";import"./components-nB6c8Px-.js";import"./DropTarget-DDkHhLsd.js";const de=new CSSStyleSheet;de.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  margin: 0;
  padding: 2px 4px;
  min-height: 18px;
}

.tree-outline {
  padding: 0;
}

.tree-outline li {
  margin-left: 14px;
  user-select: text;
}

.tree-outline li.parent {
  margin-left: 1px;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.breakpoint-hit {
  background-color: var(--sys-color-yellow-container);
  color: var(--sys-color-on-yellow-container);
}

.breakpoint-hit .breakpoint-hit-marker {
  background-color: var(--sys-color-yellow-container);
  border-right: 3px solid var(--sys-color-yellow-outline);
  color: var(--sys-color-on-yellow-container);
  height: 100%;
  left: 0;
  margin-left: -30px;
  position: absolute;
  right: -4px;
  z-index: -1;
}

.source-code[is="dt-checkbox"] {
  max-width: 100%;
}

/*# sourceURL=categorizedBreakpointsSidebarPane.css */
`);const r={auctionWorklet:"Ad Auction Worklet",animation:"Animation",breakpointHit:"breakpoint hit",canvas:"Canvas",clipboard:"Clipboard",control:"Control",device:"Device",domMutation:"DOM Mutation",dragDrop:"Drag / drop",geolocation:"Geolocation",keyboard:"Keyboard",load:"Load",media:"Media",mouse:"Mouse",notification:"Notification",parse:"Parse",pictureinpicture:"Picture-in-Picture",pointer:"Pointer",script:"Script",sharedStorageWorklet:"Shared Storage Worklet",timer:"Timer",touch:"Touch",trustedTypeViolations:"Trusted Type Violations",webaudio:"WebAudio",window:"Window",worker:"Worker",xhr:"XHR"},le=_("panels/browser_debugger/CategorizedBreakpointsSidebarPane.ts",r),De=V.bind(void 0,le),a=ne.bind(void 0,le);class he extends U{#t;#e;#i;#n;#o;#s;constructor(e,t,n){super(!0),this.#t=new ke,this.#t.setShowSelectionOnKeyboardFocus(!0),this.contentElement.appendChild(this.#t.element),this.#e=t,this.#i=n;const o=[...new Set(e.map(s=>s.category()))].sort((s,d)=>{const c=O(s),h=O(d);return c.localeCompare(h,me.instance().locale)});this.#n=new Map;for(const s of o)this.createCategory(s);if(o.length>0){const s=this.#n.get(o[0]);s&&s.element.select()}this.#o=new Map;for(const s of e)this.createBreakpoint(s);B.instance().addModelListener(P,X.DebuggerPaused,this.update,this),B.instance().addModelListener(P,X.DebuggerResumed,this.update,this),g.instance().addFlavorChangeListener(W,this.update,this)}get categories(){return this.#n}get breakpoints(){return this.#o}focus(){this.#t.forceSelect()}handleSpaceKeyEventOnBreakpoint(e,t){e&&e.key===" "&&(t&&t.checkbox.click(),e.consume(!0))}createCategory(e){const t=M.create(O(e),void 0,void 0,e,!0);t.checkboxElement.addEventListener("click",this.categoryCheckboxClicked.bind(this,e),!0),t.checkboxElement.tabIndex=-1;const n=new G(t,void 0,e);n.listItemElement.addEventListener("keydown",i=>{this.handleSpaceKeyEventOnBreakpoint(i,this.#n.get(e))}),t.checkboxElement.addEventListener("keydown",i=>{n.listItemElement.focus(),this.handleSpaceKeyEventOnBreakpoint(i,this.#n.get(e))}),v(n.listItemElement,!1),this.#t.appendChild(n),this.#n.set(e,{element:n,checkbox:t.checkboxElement})}createBreakpoint(e){const t=M.create(Ie(e.name),void 0,void 0,q(e.name),!0);t.classList.add("source-code"),t.checkboxElement.addEventListener("click",this.breakpointCheckboxClicked.bind(this,e),!0),t.checkboxElement.tabIndex=-1;const n=new G(t,void 0,q(e.name));n.listItemElement.addEventListener("keydown",o=>{this.handleSpaceKeyEventOnBreakpoint(o,this.#o.get(e))}),t.checkboxElement.addEventListener("keydown",o=>{n.listItemElement.focus(),this.handleSpaceKeyEventOnBreakpoint(o,this.#o.get(e))}),v(n.listItemElement,!1),n.listItemElement.createChild("div","breakpoint-hit-marker");const i=this.#n.get(e.category());i&&i.element.appendChild(n),this.#o.set(e,{element:n,checkbox:t.checkboxElement})}getBreakpointFromPausedDetails(e){return null}update(){const e=g.instance().flavor(W),t=e?e.model(P):null,n=t?t.debuggerPausedDetails():null;if(!n||n.reason!==this.#i||!n.auxData){this.#s&&(E(this.#s,""),this.#s.classList.remove("breakpoint-hit"),this.#s=void 0);return}const i=this.getBreakpointFromPausedDetails(n);if(!i)return;D.instance().showView(this.#e);const o=this.#n.get(i.category());o&&o.element.expand();const s=this.#o.get(i);s&&(this.#s=s.element.listItemElement,E(this.#s,De(r.breakpointHit)),this.#s.classList.add("breakpoint-hit"))}categoryCheckboxClicked(e){const t=this.#n.get(e);if(!t)return;const n=t.checkbox.checked;v(t.element.listItemElement,n);for(const[i,o]of this.#o)if(i.category()===e){const s=this.#o.get(i);s&&(s.checkbox.checked=n,this.toggleBreakpoint(i,n),v(o.element.listItemElement,n))}}toggleBreakpoint(e,t){e.setEnabled(t)}breakpointCheckboxClicked(e){const t=this.#o.get(e);if(!t)return;this.toggleBreakpoint(e,t.checkbox.checked),v(t.element.listItemElement,t.checkbox.checked);let n=!1,i=!1;for(const s of this.#o.keys())s.category()===e.category()&&(s.enabled()?n=!0:i=!0);const o=this.#n.get(e.category());o&&(o.checkbox.checked=n,o.checkbox.indeterminate=n&&i,o.checkbox.indeterminate?fe(o.element.listItemElement):v(o.element.listItemElement,n))}wasShown(){super.wasShown(),this.#t.registerCSSFiles([de])}}const Pe={animation:a(r.animation),"auction-worklet":a(r.auctionWorklet),canvas:a(r.canvas),clipboard:a(r.clipboard),control:a(r.control),device:a(r.device),"dom-mutation":a(r.domMutation),"drag-drop":a(r.dragDrop),geolocation:a(r.geolocation),keyboard:a(r.keyboard),load:a(r.load),media:a(r.media),mouse:a(r.mouse),notification:a(r.notification),parse:a(r.parse),"picture-in-picture":a(r.pictureinpicture),pointer:a(r.pointer),script:a(r.script),"shared-storage-worklet":a(r.sharedStorageWorklet),timer:a(r.timer),touch:a(r.touch),"trusted-type-violation":a(r.trustedTypeViolations),"web-audio":a(r.webaudio),window:a(r.window),worker:a(r.worker),xhr:a(r.xhr)};function O(w){return Pe[w]()}class Ae extends he{constructor(){const e=b.instance().cspViolationBreakpoints();super(e,"sources.csp-violation-breakpoints","CSPViolation"),this.contentElement.setAttribute("jslog",`${C("sources.csp-violation-breakpoints")}`)}getBreakpointFromPausedDetails(e){const t=e.auxData&&e.auxData.violationType?e.auxData.violationType:"",i=b.instance().cspViolationBreakpoints().find(o=>o.type()===t);return i||null}toggleBreakpoint(e,t){e.setEnabled(t),b.instance().updateCSPViolationBreakpoints()}}const et=Object.freeze(Object.defineProperty({__proto__:null,CSPViolationBreakpointsSidebarPane:Ae},Symbol.toStringTag,{value:"Module"})),pe=new CSSStyleSheet;pe.replaceSync(`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.breakpoint-list {
  padding-bottom: 3px;
}

.breakpoint-list .dom-breakpoint > div {
  overflow: hidden;
  text-overflow: ellipsis;
}

.breakpoint-entry {
  display: flex;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 2px 0;
}

.breakpoint-entry:focus-visible {
  background-color: var(--sys-color-tonal-container);
}

.breakpoint-hit {
  background-color: var(--sys-color-neutral-container);
  color: var(--sys-color-on-surface);
}

@media (forced-colors: active) {
  .breakpoint-entry:focus-visible,
  .breakpoint-list .breakpoint-entry:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .breakpoint-entry:focus-visible *,
  .breakpoint-list .breakpoint-entry:hover * {
    color: HighlightText;
  }
}

/*# sourceURL=domBreakpointsSidebarPane.css */
`);const l={noBreakpoints:"No breakpoints",domBreakpointsList:"DOM Breakpoints list",sS:"{PH1}: {PH2}",sSS:"{PH1}: {PH2}, {PH3}",checked:"checked",unchecked:"unchecked",sBreakpointHit:"{PH1} breakpoint hit",breakpointHit:"breakpoint hit",revealDomNodeInElementsPanel:"Reveal DOM node in Elements panel",removeBreakpoint:"Remove breakpoint",removeAllDomBreakpoints:"Remove all DOM breakpoints",subtreeModified:"Subtree modified",attributeModified:"Attribute modified",nodeRemoved:"Node removed",breakOn:"Break on",breakpointRemoved:"Breakpoint removed",breakpointSet:"Breakpoint set"},ue=_("panels/browser_debugger/DOMBreakpointsSidebarPane.ts",l),p=V.bind(void 0,ue),T=ne.bind(void 0,ue);let H;class $ extends U{elementToCheckboxes;#t;#e;#i;#n;constructor(){super(!0),this.elementToCheckboxes=new WeakMap,this.contentElement.setAttribute("jslog",`${C("sources.dom-breakpoints").track({resize:!0})}`),this.#t=this.contentElement.createChild("div","gray-info-message"),this.#t.textContent=p(l.noBreakpoints),this.#e=new ie,this.#i=new oe(this.#e,this,se.NonViewport),this.contentElement.appendChild(this.#i.element),this.#i.element.classList.add("breakpoint-list","hidden"),re(this.#i.element),x(this.#i.element,p(l.domBreakpointsList)),this.#t.tabIndex=-1,B.instance().addModelListener(y,"DOMBreakpointAdded",this.breakpointAdded,this),B.instance().addModelListener(y,"DOMBreakpointToggled",this.breakpointToggled,this),B.instance().addModelListener(y,"DOMBreakpointsRemoved",this.breakpointsRemoved,this);for(const e of B.instance().models(y)){e.retrieveDOMBreakpoints();for(const t of e.domBreakpoints())this.addBreakpoint(t)}this.#n=null,this.update()}static instance(){return H||(H=new $),H}createElementForItem(e){const t=document.createElement("div");t.classList.add("breakpoint-entry"),t.setAttribute("jslog",`${ge().context(e.type).track({keydown:"ArrowUp|ArrowDown|PageUp|PageDown"})}`),t.addEventListener("contextmenu",this.contextMenu.bind(this,e),!0),ae(t),t.tabIndex=-1;const n=M.create(void 0,e.enabled),i=n.checkboxElement;i.addEventListener("click",this.checkboxClicked.bind(this,e),!1),i.tabIndex=-1,this.elementToCheckboxes.set(t,i),t.appendChild(n),t.addEventListener("keydown",f=>{f.key===" "&&(n.checkboxElement.click(),f.consume(!0))});const o=document.createElement("div");o.classList.add("dom-breakpoint"),t.appendChild(o);const s=document.createElement("div"),d=Oe.get(e.type);s.textContent=d?d():null;const c=d?d():"";x(i,c),i.setAttribute("jslog",`${ve().track({click:!0})}`);const h=e.enabled?p(l.checked):p(l.unchecked),m=document.createElement("monospace");return m.style.display="block",o.appendChild(m),xe.linkify(e.node,{preventKeyboardFocus:!0,tooltip:void 0}).then(f=>{m.appendChild(f),x(i,p(l.sS,{PH1:c,PH2:f.deepTextContent()})),x(t,p(l.sSS,{PH1:c,PH2:f.deepTextContent(),PH3:h}))}),o.appendChild(s),e===this.#n?(t.classList.add("breakpoint-hit"),E(t,p(l.sBreakpointHit,{PH1:h})),E(i,p(l.breakpointHit))):E(t,h),this.#t.classList.add("hidden"),this.#i.element.classList.remove("hidden"),t}heightForItem(e){return 0}isItemSelectable(e){return!0}updateSelectedItemARIA(e,t){return!0}selectedItemChanged(e,t,n,i){n&&(n.tabIndex=-1),i&&(this.setDefaultFocusedElement(i),i.tabIndex=0,this.hasFocus()&&i.focus())}breakpointAdded(e){this.addBreakpoint(e.data)}breakpointToggled(e){const t=this.hasFocus(),n=e.data;this.#i.refreshItem(n),t&&this.focus()}breakpointsRemoved(e){const t=this.hasFocus(),n=e.data;let i=-1;for(const o of n){const s=this.#e.indexOf(o);s>=0&&(this.#e.remove(s),i=s)}if(this.#e.length===0)this.#t.classList.remove("hidden"),this.setDefaultFocusedElement(this.#t),this.#i.element.classList.add("hidden");else if(i>=0){const o=this.#e.at(i);o&&this.#i.selectItem(o)}t&&this.focus()}addBreakpoint(e){this.#e.insertWithComparator(e,(t,n)=>t.type>n.type?-1:t.type<n.type?1:0),(!this.#i.selectedItem()||!this.hasFocus())&&this.#i.selectItem(this.#e.at(0))}contextMenu(e,t){const n=new F(t);n.defaultSection().appendItem(p(l.revealDomNodeInElementsPanel),()=>ye(e.node),{jslogContext:"reveal-in-elements"}),n.defaultSection().appendItem(p(l.removeBreakpoint),()=>{e.domDebuggerModel.removeDOMBreakpoint(e.node,e.type)},{jslogContext:"remove-breakpoint"}),n.defaultSection().appendItem(p(l.removeAllDomBreakpoints),()=>{e.domDebuggerModel.removeAllDOMBreakpoints()},{jslogContext:"remove-all-dom-breakpoints"}),n.show()}checkboxClicked(e,t){e.domDebuggerModel.toggleDOMBreakpoint(e,t.target?t.target.checked:!1)}flavorChanged(e){this.update()}update(){const e=g.instance().flavor(ce);if(this.#n){const i=this.#n;this.#n=null,this.#i.refreshItem(i)}if(!e||!e.auxData||e.reason!=="DOM")return;const t=e.debuggerModel.target().model(y);if(!t)return;const n=t.resolveDOMBreakpointData(e.auxData);if(n){for(const i of this.#e)i.node===n.node&&i.type===n.type&&(this.#n=i);this.#n&&this.#i.refreshItem(this.#n),D.instance().showView("sources.dom-breakpoints")}}wasShown(){super.wasShown(),this.registerCSSFiles([pe])}}const Oe=new Map([["subtree-modified",T(l.subtreeModified)],["attribute-modified",T(l.attributeModified)],["node-removed",T(l.nodeRemoved)]]);class Te{appendApplicableItems(e,t,n){if(n.pseudoType())return;const i=n.domModel().target().model(y);if(!i)return;function o(c){if(!i)return;const h=ee.get(c),m=h?h():"";i.hasDOMBreakpoint(n,c)?(i.removeDOMBreakpoint(n,c),Z(`${p(l.breakpointRemoved)}: ${m}`)):(i.setDOMBreakpoint(n,c),Z(`${p(l.breakpointSet)}: ${m}`))}const s=t.debugSection().appendSubMenuItem(p(l.breakOn),!1,"break-on"),d={SubtreeModified:"subtree-modified",AttributeModified:"attribute-modified",NodeRemoved:"node-removed"};for(const c of Object.values(d)){const h=ee.get(c);h&&s.defaultSection().appendCheckboxItem(h(),o.bind(null,c),{checked:i.hasDOMBreakpoint(n,c),jslogContext:c})}}}const tt=Object.freeze(Object.defineProperty({__proto__:null,ContextMenuProvider:Te,DOMBreakpointsSidebarPane:$},Symbol.toStringTag,{value:"Module"}));let j;class z extends he{constructor(){let e=b.instance().eventListenerBreakpoints();const t=J.instance().eventListenerBreakpoints();e=e.concat(t),super(e,"sources.event-listener-breakpoints","EventListener"),this.contentElement.setAttribute("jslog",`${C("sources.event-listener-breakpoints")}`)}static instance(){return j||(j=new z),j}getBreakpointFromPausedDetails(e){const t=e.auxData,n=b.instance().resolveEventListenerBreakpoint(t);return n||J.instance().resolveEventListenerBreakpoint(t)}}const nt=Object.freeze(Object.defineProperty({__proto__:null,EventListenerBreakpointsSidebarPane:z},Symbol.toStringTag,{value:"Module"}));class S extends Be{#t;eventListenersView;constructor(){super(),this.contentElement.setAttribute("jslog",`${C("sources.global-listeners")}`),this.eventListenersView=new Me(this.update.bind(this),!0),this.eventListenersView.show(this.element),this.setDefaultFocusedChild(this.eventListenersView),this.update()}toolbarItems(){const e=Ee.createActionButtonForId("browser-debugger.refresh-global-event-listeners");return e.setSize("SMALL"),[e]}async doUpdate(){this.#t&&(this.#t.runtimeModel.releaseObjectGroup(I),this.#t=void 0);const e=[],t=g.instance().flavor(A);if(t){this.#t=t;const n=await t.evaluate({expression:"self",objectGroup:I,includeCommandLineAPI:!1,silent:!0,returnByValue:!1,generatePreview:!1},!1,!1);!("error"in n)&&!n.exceptionDetails&&e.push(n.object)}await this.eventListenersView.addObjects(e)}wasShown(){super.wasShown(),g.instance().addFlavorChangeListener(A,this.update,this),g.instance().setFlavor(S,this)}willHide(){g.instance().setFlavor(S,null),g.instance().removeFlavorChangeListener(A,this.update,this),super.willHide(),this.#t&&(this.#t.runtimeModel.releaseObjectGroup(I),this.#t=void 0)}}class He{handleAction(e,t){switch(t){case"browser-debugger.refresh-global-event-listeners":{const n=e.flavor(S);return n?(n.update(),!0):!1}}return!1}}const I="object-event-listeners-sidebar-pane",it=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:He,ObjectEventListenersSidebarPane:S,objectGroupName:I},Symbol.toStringTag,{value:"Module"})),be=new CSSStyleSheet;be.replaceSync(`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.breakpoint-list {
  padding-bottom: 3px;
}

.breakpoint-list .editing.being-edited {
  overflow: hidden;
  white-space: nowrap;
}

.breakpoint-condition {
  display: block;
  margin: 4px 8px 4px 23px;
}

.breakpoint-condition-input {
  display: block;
  margin-left: 0;
  margin-right: 0;
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: 4px;

  &:focus {
    outline: 5px auto var(--sys-color-tonal-outline);
    box-shadow: none;
  }
}

.breakpoint-entry {
  white-space: nowrap;
  padding: 2px 0;
}

.breakpoint-list .breakpoint-entry:focus-visible {
  background-color: var(--sys-color-tonal-container);
}

.breakpoint-entry [is="dt-checkbox"] {
  max-width: 100%;
}

.breakpoint-hit {
  background-color: var(--sys-color-yellow-container);
  border-right: 3px solid var(--sys-color-yellow-outline);
  color: var(--sys-color-on-yellow-container);
}

@media (forced-colors: active) {
  .breakpoint-list .breakpoint-entry:hover,
  .breakpoint-list .breakpoint-entry:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .breakpoint-list .breakpoint-entry:hover *,
  .breakpoint-list .breakpoint-entry:focus-visible * {
    color: HighlightText;
  }
}

/*# sourceURL=xhrBreakpointsSidebarPane.css */
`);const u={xhrfetchBreakpoints:"XHR/fetch Breakpoints",noBreakpoints:"No breakpoints",addXhrfetchBreakpoint:"Add XHR/fetch breakpoint",addBreakpoint:"Add breakpoint",breakWhenUrlContains:"Break when URL contains:",urlBreakpoint:"URL Breakpoint",urlContainsS:'URL contains "{PH1}"',anyXhrOrFetch:"Any XHR or fetch",breakpointHit:"breakpoint hit",removeAllBreakpoints:"Remove all breakpoints",removeBreakpoint:"Remove breakpoint"},je=_("panels/browser_debugger/XHRBreakpointsSidebarPane.ts",u),k=V.bind(void 0,je),L=new WeakMap,te=new WeakMap;let R;class N extends U{#t;#e;#i;#n;#o;#s;constructor(){super(!0),this.#t=new ie,this.#e=new oe(this.#t,this,se.NonViewport),this.contentElement.setAttribute("jslog",`${C("source.xhr-breakpoints")}`),this.contentElement.appendChild(this.#e.element),this.#e.element.classList.add("breakpoint-list","hidden"),re(this.#e.element),x(this.#e.element,k(u.xhrfetchBreakpoints)),this.#i=this.contentElement.createChild("div","gray-info-message"),this.#i.textContent=k(u.noBreakpoints),this.#n=new Map,this.#o=new we(k(u.addXhrfetchBreakpoint),"plus",void 0,"sources.add-xhr-fetch-breakpoint"),this.#o.setSize("SMALL"),this.#o.addEventListener("Click",()=>{this.addButtonClicked()}),this.#i.addEventListener("contextmenu",this.emptyElementContextMenu.bind(this),!0),this.#i.tabIndex=-1,this.restoreBreakpoints(),this.update()}static instance(){return R||(R=new N),R}toolbarItems(){return[this.#o]}emptyElementContextMenu(e){const t=new F(e);t.defaultSection().appendItem(k(u.addBreakpoint),this.addButtonClicked.bind(this),{jslogContext:"sources.add-xhr-fetch-breakpoint"}),t.show()}async addButtonClicked(){await D.instance().showView("sources.xhr-breakpoints");const e=document.createElement("p");e.classList.add("breakpoint-condition"),e.textContent=k(u.breakWhenUrlContains),e.setAttribute("jslog",`${K("condition").track({change:!0})}`);const t=e.createChild("span","breakpoint-condition-input");x(t,k(u.urlBreakpoint)),this.addListElement(e,this.#e.element.firstChild);function n(o,s,d){this.removeListElement(e),o&&(b.instance().addXHRBreakpoint(d,!0),this.setBreakpoint(d)),this.update()}const i=new Q(n.bind(this,!0),n.bind(this,!1));Y.startEditing(t,i)}heightForItem(e){return 0}isItemSelectable(e){return!0}setBreakpoint(e){this.#t.indexOf(e)!==-1?this.#e.refreshItem(e):this.#t.insertWithComparator(e,(t,n)=>t>n?1:t<n?-1:0),(!this.#e.selectedItem()||!this.hasFocus())&&this.#e.selectItem(this.#t.at(0))}createElementForItem(e){const t=document.createElement("div");ae(t);const n=t.createChild("div","breakpoint-entry");L.set(t,n);const i=b.instance().xhrBreakpoints().get(e)||!1;Se(n),v(n,i),n.addEventListener("contextmenu",this.contextMenu.bind(this,e),!0);const o=e?k(u.urlContainsS,{PH1:e}):k(u.anyXhrOrFetch),s=M.create(o,i,void 0,void 0,!0);return Ce(s),x(n,o),n.appendChild(s),s.checkboxElement.addEventListener("click",this.checkboxClicked.bind(this,e,i),!1),n.addEventListener("click",d=>{d.target===n&&this.checkboxClicked(e,i)},!1),te.set(n,s.checkboxElement),s.checkboxElement.tabIndex=-1,n.tabIndex=-1,e===this.#e.selectedItem()&&(n.tabIndex=0,this.setDefaultFocusedElement(n)),n.addEventListener("keydown",d=>{let c=!1;d.key===" "?(this.checkboxClicked(e,i),c=!0):d.key==="Enter"&&(this.labelClicked(e),c=!0),c&&d.consume(!0)}),e===this.#s&&(n.classList.add("breakpoint-hit"),E(n,k(u.breakpointHit))),s.classList.add("cursor-auto"),s.textElement.addEventListener("dblclick",this.labelClicked.bind(this,e),!1),this.#n.set(e,t),t.setAttribute("jslog",`${Le().track({click:!0,dblclick:!0,keydown:"ArrowUp|ArrowDown|PageUp|PageDown|Enter|Space"})}`),t}selectedItemChanged(e,t,n,i){if(n){const o=L.get(n);if(!o)throw new Error("Expected breakpoint entry to be found for an element");o.tabIndex=-1}if(i){const o=L.get(i);if(!o)throw new Error("Expected breakpoint entry to be found for an element");this.setDefaultFocusedElement(o),o.tabIndex=0,this.hasFocus()&&o.focus()}}updateSelectedItemARIA(e,t){return!0}removeBreakpoint(e){const t=this.#t.indexOf(e);t>=0&&this.#t.remove(t),this.#n.delete(e),this.update()}addListElement(e,t){this.#e.element.insertBefore(e,t),this.#i.classList.add("hidden"),this.#e.element.classList.remove("hidden")}removeListElement(e){this.#e.element.removeChild(e),this.#e.element.firstElementChild||(this.#i.classList.remove("hidden"),this.#e.element.classList.add("hidden"))}contextMenu(e,t){const n=new F(t);function i(){b.instance().removeXHRBreakpoint(e),this.removeBreakpoint(e)}function o(){for(const d of this.#n.keys())b.instance().removeXHRBreakpoint(d),this.removeBreakpoint(d);this.update()}const s=k(u.removeAllBreakpoints);n.defaultSection().appendItem(k(u.addBreakpoint),this.addButtonClicked.bind(this),{jslogContext:"sources.add-xhr-fetch-breakpoint"}),n.defaultSection().appendItem(k(u.removeBreakpoint),i.bind(this),{jslogContext:"sources.remove-xhr-fetch-breakpoint"}),n.defaultSection().appendItem(s,o.bind(this),{jslogContext:"sources.remove-all-xhr-fetch-breakpoints"}),n.show()}checkboxClicked(e,t){const n=this.hasFocus();b.instance().toggleXHRBreakpoint(e,!t),this.#e.refreshItem(e),this.#e.selectItem(e),n&&this.focus()}labelClicked(e){const t=this.#n.get(e),n=document.createElement("span");n.classList.add("breakpoint-condition"),n.textContent=e,n.setAttribute("jslog",`${K("condition").track({change:!0})}`),t&&(this.#e.element.insertBefore(n,t),t.classList.add("hidden"));function i(s,d,c){if(this.removeListElement(n),s){b.instance().removeXHRBreakpoint(e),this.removeBreakpoint(e);let h=!0;if(t){const m=L.get(t),f=m?te.get(m):void 0;f&&(h=f.checked)}b.instance().addXHRBreakpoint(c,h),this.setBreakpoint(c),this.#e.selectItem(c)}else t&&t.classList.remove("hidden");this.focus()}const o=new Q(i.bind(this,!0),i.bind(this,!1));Y.startEditing(n,o)}flavorChanged(e){this.update()}update(){const e=this.#t.length===0;this.#e.element.classList.toggle("hidden",e),this.#i.classList.toggle("hidden",!e);const t=g.instance().flavor(ce);if(!t||t.reason!=="XHR"){if(this.#s){const i=this.#s;this.#s=void 0,this.#t.indexOf(i)>=0&&this.#e.refreshItem(i)}return}const n=t.auxData&&t.auxData.breakpointURL;this.#s=n,!(this.#t.indexOf(n)<0)&&(this.#e.refreshItem(n),D.instance().showView("sources.xhr-breakpoints"))}restoreBreakpoints(){const e=b.instance().xhrBreakpoints();for(const t of e.keys())this.setBreakpoint(t)}wasShown(){super.wasShown(),this.registerCSSFiles([be])}}const ot=Object.freeze(Object.defineProperty({__proto__:null,XHRBreakpointsSidebarPane:N},Symbol.toStringTag,{value:"Module"}));export{et as CSPViolationBreakpointsSidebarPane,tt as DOMBreakpointsSidebarPane,nt as EventListenerBreakpointsSidebarPane,it as ObjectEventListenersSidebarPane,ot as XHRBreakpointsSidebarPane};
//# sourceMappingURL=browser_debugger-DJth_pz5.js.map
