import{ex as xe,ir as C,b as ae,g as re,bW as ye,aj as Z,j6 as X,j1 as J,i as we,dn as Ee,u as g,A as u,r as Y,fN as Se,cH as Ce,e9 as Le,aF as $e,av as Te,ay as Ie,be as Be,i0 as Ae,cC as De,bG as Oe,bf as Ne,bh as B,aO as V,bX as He,gR as Re,bM as U,cc as _,dx as Pe,bj as je,aP as le,f5 as Q,eX as Me,eA as ce,bi as Ue,aw as A,n_ as Fe,aN as Ve,a_ as _e,b2 as Ge,bZ as ee,k6 as We,b4 as qe,nS as ze,kd as Ke}from"./inspector-CyOA7R9n.js";const de=new CSSStyleSheet;de.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
  flex-direction: column;
}

.code-snippet {
  width: 100%;
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  color: var(--sys-color-token-subtle);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 100;
  cursor: pointer;
}

.code-snippet:hover {
  color: var(--sys-color-on-surface);
  text-decoration: underline;
}

input {
  height: 12px;
  width: 12px;
  flex-shrink: 0;
  margin: 3px 0;
}

details {
  border-top: 1px solid var(--sys-color-divider);
  padding: 2px 0;
}

details:not(.active) {
  background-color: var(--sys-color-state-disabled-container);
  opacity: 30%;
}

details > summary {
  min-height: 20px;
  list-style: none;
  display: flex;
  padding: 0 8px 0 6px;
  align-items: center;
}

details > summary:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

details > summary::before {
  display: block;
  user-select: none;
  mask-image: var(--image-file-triangle-right);
  background-color: var(--icon-default);
  content: "";
  height: 14px;
  min-width: 14px;
  max-width: 14px;
  margin-left: -4px;
  overflow: hidden;
  transition: transform 200ms;
}

details[open] > summary::before {
  transform: rotate(90deg);
}

.group-header {
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding-right: 8px;
  overflow: hidden;
}

.group-icon-or-disable {
  justify-content: center;
  display: flex;
  width: 16px;
  margin-left: 2px;
}

.group-header-title {
  margin-left: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.group-header-differentiator {
  font-weight: normal;
  color: var(--sys-color-state-disabled);
  margin-left: 8px;
}

.group-hover-actions {
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 10px;
  font-weight: 500;
}

.breakpoint-item-location-or-actions {
  min-width: 20px;
  flex: 0 0 auto;
  display: flex;
  padding-left: 8px;
  justify-content: right;
}

button {
  cursor: pointer;
  width: 13px;
  height: 13px;
  border: none;
  background-color: transparent;
  display: none;
  align-items: center;
  justify-content: center;
}

button + span {
  padding-left: 6px;
}

button + button {
  padding-left: 11px;
}

summary:hover button {
  display: flex;
}

devtools-icon {
  width: 16px;
  height: 16px;

  button:hover & {
    color: var(--icon-default-hover);
  }
}

.type-indicator {
  --override-color-conditional-breakpoint: var(--ref-palette-orange70);
  --override-color-logpoint: var(--ref-palette-pink60);

  border-right: 4px solid;
  border-radius: 0 2px 2px 0;
  border-color: transparent;
  height: 16px;
}

.breakpoint-item {
  display: flex;
  align-items: center;
  line-height: 13px;
  height: 20px;
  padding-right: 8px;
}

.breakpoint-item.hit {
  background-color: var(--sys-color-yellow-container);
  color: var(--sys-color-on-yellow-container);
}

.breakpoint-item.hit:focus {
  background-color: var(--sys-color-tonal-container);
}

.theme-with-dark-background .type-indicator,
:host-context(.theme-with-dark-background) .type-indicator {
  --override-color-conditional-breakpoint: var(--ref-palette-yellow60);
  --override-color-logpoint: var(--ref-palette-pink70);
}

.breakpoint-item.logpoint > label > .type-indicator {
  border-color: var(--override-color-logpoint);
}

.breakpoint-item.conditional-breakpoint > label > .type-indicator {
  border-color: var(--override-color-conditional-breakpoint);
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.checkbox-label > input {
  margin-left: 16px;
  margin-right: 6px;
}

devtools-icon[name="file-script"] {
  color: var(--icon-file-script);
  width: 18px;
  height: 18px;

  summary:hover & {
    display: none;
  }
}

input.group-checkbox {
  margin: 0;
  display: none;
}

summary:hover .group-checkbox {
  display: flex;
}

.location {
  line-height: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.breakpoint-item:hover button {
  display: flex;
}

.pause-on-uncaught-exceptions {
  margin-top: 3px;
}

.pause-on-caught-exceptions {
  margin-bottom: 3px;
}

/* TODO(crbug.com/1382762): Remove special casing with dependent toggles as soon as Node LTS caught up on independent pause of exception toggles. */
input:disabled + span {
  color: var(--sys-color-state-disabled);
}

.pause-on-caught-exceptions > .checkbox-label > input,
.pause-on-uncaught-exceptions > .checkbox-label > input {
  margin-left: 6px;
}

.pause-on-caught-exceptions > .checkbox-label > span,
.pause-on-uncaught-exceptions > .checkbox-label > span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.pause-on-uncaught-exceptions,
.pause-on-caught-exceptions {
  line-height: 13px;
  height: 18px;
  padding-right: 8px;

  & > label {
    width: fit-content;
  }
}

details > summary:focus,
.breakpoint-item:focus,
.pause-on-uncaught-exceptions:focus,
.pause-on-caught-exceptions:focus {
  background-color: var(--sys-color-tonal-container);
  outline-width: 0;
}

/*# sourceURL=breakpointsView.css */
`);const Ze="summary",Xe=s=>s.getAttribute("role")==="tree",Je=s=>s.getAttribute("role")==="treeitem",P=s=>s.getAttribute("data-first-pause")!==null||s.getAttribute("data-last-pause")!==null,D=s=>!Je(s),O=s=>s.getAttribute("open")!==null,te=s=>s.querySelector("[data-first-breakpoint]"),Ye=s=>s.querySelector("[data-last-breakpoint]"),ne=s=>{const e=Qe(s);return e&&e instanceof HTMLDetailsElement?e?.querySelector("summary"):null},G=s=>s.querySelector(Ze),Qe=s=>{const e=s.nextElementSibling;return e&&e instanceof HTMLDetailsElement?e:null},et=s=>{const e=s.previousElementSibling;return e&&e instanceof HTMLDetailsElement?e:null};function tt(s,e){console.assert(P(s));let t=null;switch(e){case"ArrowUp":{const n=s.previousElementSibling;n instanceof HTMLElement&&(t=n,console.assert(P(t)));break}case"ArrowDown":{const n=s.nextElementSibling;if(n instanceof HTMLElement)if(Xe(n)){const o=n.querySelector("[data-first-group]");o&&(t=G(o))}else t=n,console.assert(P(t));break}}return t}async function pe(s,e,t){if(P(s))return tt(s,e);const n=s.parentElement;if(!n||!(n instanceof HTMLDetailsElement))throw new Error("The selected nodes should be direct children of an HTMLDetails element.");let o=null;switch(e){case"ArrowLeft":{if(D(s))O(n)&&await t(n,!1);else return G(n);break}case"ArrowRight":{if(D(s)){if(O(n))return te(n);await t(n,!0)}break}case"ArrowDown":{if(D(s))O(n)?o=te(n):o=ne(n);else{const i=s.nextElementSibling;i&&i instanceof HTMLDivElement?o=i:o=ne(n)}break}case"ArrowUp":{if(D(s)){const i=et(n);if(i)O(i)?o=Ye(i):o=G(i);else{const a=n.parentElement?.previousElementSibling;a instanceof HTMLElement&&(o=a)}}else{const i=s.previousElementSibling;i instanceof HTMLElement&&(o=i)}break}}return o}function nt(s){const e=s[0];let t=-1;for(let n=0;n<e.length&&t===-1;++n){const o=e[n];for(let i=1;i<s.length;++i){const a=s[i];if(a.length<=n||a[n]!==o){t=n;break}}}return t===-1?e.length:t}function ot(s,e,t){const n=[];let o=e.filter(i=>i!==s);for(let i=t;i<s.length;++i){const a=s[i];if(n.push(a),o=o.filter(d=>d.length>i&&d[i]===a),o.length===0)break}return n}function it(s,e){const t=s.map(o=>{const i=xe.fromString(o)?.folderPathComponents.slice(1);return C(i),i.split("/").reverse()}),n=nt(t);for(let o=0;o<t.length;++o){const i=t[o],d=ot(i,t,n).reverse().join("/");n===0?e.set(s[o],d+"/"):e.set(s[o],d+"/…/")}console.assert(new Set(e.values()).size===s.length,"Differentiators should be unique.")}function he(s){const e=new Map,t=new Map;for(const{name:n,url:o}of s)e.has(n)||e.set(n,[]),e.get(n)?.push(o);for(const n of e.values())n.length>1&&it(n,t);return t}const st=Object.freeze(Object.defineProperty({__proto__:null,findNextNodeForKeyboardNavigation:pe,getDifferentiatingPathMap:he},Symbol.toStringTag,{value:"Module"})),{html:m,Directives:{ifDefined:at,repeat:oe,classMap:ie,live:rt}}=le,l={pauseOnUncaughtExceptions:"Pause on uncaught exceptions",pauseOnCaughtExceptions:"Pause on caught exceptions",checked:"checked",unchecked:"unchecked",indeterminate:"mixed",breakpointHit:"{PH1} breakpoint hit",removeAllBreakpointsInFile:"Remove all breakpoints in file",disableAllBreakpointsInFile:"Disable all breakpoints in file",enableAllBreakpointsInFile:"Enable all breakpoints in file",editCondition:"Edit condition",editLogpoint:"Edit logpoint",disableAllBreakpoints:"Disable all breakpoints",enableAllBreakpoints:"Enable all breakpoints",removeBreakpoint:"Remove breakpoint",removeAllBreakpoints:"Remove all breakpoints",removeOtherBreakpoints:"Remove other breakpoints",revealLocation:"Reveal location",conditionCode:"Condition: {PH1}",logpointCode:"Logpoint: {PH1}"},lt=ae("panels/sources/components/BreakpointsView.ts",l),c=re.bind(void 0,lt),w=ye.instance(),ct=200;let F,N;class L{#e;#n=new WeakMap;#t;#i;#a;#s;#o;#d;#c=!1;#r=!1;constructor(e,t){this.#s=Z.instance().createSetting("collapsed-files",[]),this.#o=new Set(this.#s.get()),this.#e=e,this.#e.addEventListener(X.BreakpointAdded,this.#b,this),this.#e.addEventListener(X.BreakpointRemoved,this.#f,this),this.#t=t.moduleSetting("breakpoints-active"),this.#t.addChangeListener(this.update,this),this.#i=t.moduleSetting("pause-on-uncaught-exception"),this.#i.addChangeListener(this.update,this),this.#a=t.moduleSetting("pause-on-caught-exception"),this.#a.addChangeListener(this.update,this)}static instance({forceNew:e,breakpointManager:t,settings:n}={forceNew:null,breakpointManager:J.instance(),settings:Z.instance()}){return(!N||e)&&(N=new L(t,n)),N}static removeInstance(){N=null}static targetSupportsIndependentPauseOnExceptionToggles(){return!we.instance().targets().some(t=>t.type()===Ee.NODE)}flavorChanged(e){this.update()}breakpointEditFinished(e,t){this.#d&&this.#d===e&&(t&&g.actionTaken(u.BreakpointConditionEditedFromSidebar),this.#d=void 0)}breakpointStateChanged(e,t){this.#h(e).forEach(o=>{o.breakpoint.setEnabled(t)})}async breakpointEdited(e,t){const n=this.#h(e);let o;for(const i of n)(!o||i.uiLocation.compareTo(o.uiLocation)<0)&&(o=i);o&&(t&&(this.#d=o.breakpoint),await Y(o))}breakpointsRemoved(e){e.flatMap(n=>this.#h(n)).forEach(n=>n?.breakpoint.remove(!1))}expandedStateChanged(e,t){t?this.#o.delete(e):this.#o.add(e),this.#p()}async jumpToSource(e){const t=this.#h(e).map(o=>o.uiLocation);let n;for(const o of t)(!n||o.compareTo(n)<0)&&(n=o);n&&await Y(n)}setPauseOnUncaughtExceptions(e){this.#i.set(e)}setPauseOnCaughtExceptions(e){this.#a.set(e)}async update(){if(this.#c=!0,!this.#r){for(this.#r=!0;this.#c;){this.#c=!1;const e=await this.getUpdatedBreakpointViewData();$.instance().data=e}this.#r=!1}}async getUpdatedBreakpointViewData(){const e=this.#t.get(),t=L.targetSupportsIndependentPauseOnExceptionToggles(),n=this.#i.get(),o=this.#a.get(),i=this.#m();if(!i.length)return{breakpointsActive:e,pauseOnCaughtExceptions:o,pauseOnUncaughtExceptions:n,independentPauseToggles:t,groups:[]};const a=this.#v(i),d=this.#g(i),[r,h]=await Promise.all([this.#x(a),this.#k()]),E=new Map;for(let v=0;v<a.length;v++){const p=a[v],x=p[0],T=x.uiLocation.uiSourceCode.url(),q=x.uiLocation.uiSourceCode.canononicalScriptId(),y=x.uiLocation,z=h!==null&&p.some(M=>M.uiLocation.id()===h.id()),ge=d.get(y.lineId()).size>1,me=y.lineAndColumnText(ge),I=r[v],be=I instanceof Se?I.lines[I.bytecodeOffsetToLineNumber(y.columnNumber??0)]??"":I.textObj.lineAt(y.lineNumber);z&&this.#o.has(T)&&(this.#o.delete(T),this.#p());const K=!this.#o.has(T),fe=this.#l(p),{type:ke,hoverText:ve}=this.#u(p),j={id:x.breakpoint.breakpointStorageId(),location:me,codeSnippet:be,isHit:z,status:fe,type:ke,hoverText:ve};this.#n.set(j,p);let S=E.get(q);if(S)S.breakpointItems.push(j),S.expanded||=K;else{const M=this.#e.supportsConditionalBreakpoints(y.uiSourceCode);S={url:T,name:y.uiSourceCode.displayName(),editable:M,expanded:K,breakpointItems:[j]},E.set(q,S)}}return{breakpointsActive:e,pauseOnCaughtExceptions:o,pauseOnUncaughtExceptions:n,independentPauseToggles:t,groups:Array.from(E.values())}}#b(e){const t=e.data.breakpoint;return t.origin==="USER_ACTION"&&this.#o.has(t.url())&&(this.#o.delete(t.url()),this.#p()),this.update()}#f(e){const t=e.data.breakpoint;return this.#o.has(t.url())&&(J.instance().allBreakpointLocations().some(i=>i.breakpoint.url()===t.url())||(this.#o.delete(t.url()),this.#p())),this.update()}#p(){this.#s.set(Array.from(this.#o.values()))}#u(e){const n=e.find(i=>!!i.breakpoint.condition())?.breakpoint;if(!n||!n.condition())return{type:"REGULAR_BREAKPOINT"};const o=n.condition();return n.isLogpoint()?{type:"LOGPOINT",hoverText:o}:{type:"CONDITIONAL_BREAKPOINT",hoverText:o}}#h(e){const t=this.#n.get(e);return C(t),t}async#k(){const e=Ce.instance().flavor(Le);return e&&e.callFrames.length?await $e.instance().rawLocationToUILocation(e.callFrames[0].location()):null}#m(){const e=this.#e.allBreakpointLocations().filter(i=>i.uiLocation.uiSourceCode.project().type()!==Te.Debugger);e.sort((i,a)=>i.uiLocation.compareTo(a.uiLocation));const t=[];let n=null,o=null;for(const i of e)(i.breakpoint!==n||o&&i.uiLocation.compareTo(o))&&(t.push(i),n=i.breakpoint,o=i.uiLocation);return t}#v(e){const t=new Q;for(const o of e){const i=o.uiLocation;t.set(i.id(),o)}const n=[];for(const o of t.keysArray()){const i=Array.from(t.get(o));i.length&&n.push(i)}return n}#g(e){const t=new Q;for(const n of e){const o=n.uiLocation;t.set(o.lineId(),o.id())}return t}#l(e){const t=e.some(i=>i.breakpoint.enabled()),n=e.some(i=>!i.breakpoint.enabled());let o;return t?o=n?"INDETERMINATE":"ENABLED":o="DISABLED",o}#x(e){return Promise.all(e.map(async([{uiLocation:{uiSourceCode:t}}])=>{const n=await t.requestContentData({cachedWasmOnly:!0});return Ie.contentDataOrEmpty(n)}))}}class $ extends Be{#e;static instance({forceNew:e}={forceNew:!1}){return(!F||e)&&(F=Ae(De,new $)),F.getComponent()}constructor(){super(),this.#e=L.instance(),this.setAttribute("jslog",`${Oe("sources.js-breakpoints")}`),this.#e.update()}#n=this.attachShadow({mode:"open"});#t=!1;#i=!1;#a=!1;#s=!0;#o=[];#d=new Map;set data(e){this.#t=e.pauseOnUncaughtExceptions,this.#i=e.pauseOnCaughtExceptions,this.#a=e.independentPauseToggles,this.#s=e.breakpointsActive,this.#o=e.groups;const t=[];for(const n of e.groups)t.push({name:n.name,url:n.url});this.#d=he(t),this.render()}connectedCallback(){this.#n.adoptedStyleSheets=[Ne,de]}async render(){await w.write("BreakpointsView render",()=>{const e=async i=>{const a=i.currentTarget;await this.#r(a),i.consume()},t=(this.#a||this.#t)&&this.#i,n=!this.#a&&!this.#t,o=m`
        <div class='pause-on-uncaught-exceptions'
            tabindex='0'
            @click=${e}
            @keydown=${this.#c}
            role='checkbox'
            aria-checked=${this.#t}
            data-first-pause>
          <label class='checkbox-label'>
            <input type='checkbox' tabindex=-1 class="small" ?checked=${this.#t} @change=${this.#y.bind(this)} jslog=${B("pause-uncaught").track({change:!0})}>
            <span>${c(l.pauseOnUncaughtExceptions)}</span>
          </label>
        </div>
        <div class='pause-on-caught-exceptions'
              tabindex='-1'
              @click=${e}
              @keydown=${this.#c}
              role='checkbox'
              aria-checked=${t}
              data-last-pause>
            <label class='checkbox-label'>
              <input data-pause-on-caught-checkbox type='checkbox' class="small" tabindex=-1 ?checked=${t} ?disabled=${n} @change=${this.#S.bind(this)} jslog=${B("pause-on-caught-exception").track({change:!0})}>
              <span>${c(l.pauseOnCaughtExceptions)}</span>
            </label>
        </div>
        <div role=tree>
          ${oe(this.#o,i=>i.url,(i,a)=>m`${this.#k(i,a)}`)}
        </div>`;V(o,this.#n,{host:this})}),await w.write("BreakpointsView make pause-on-exceptions focusable",()=>{this.#n.querySelector('[tabindex="0"]')===null&&this.#n.querySelector("[data-first-pause]")?.setAttribute("tabindex","0")})}async#c(e){if(!(!e.target||!(e.target instanceof HTMLElement))){if(e.key==="Home"||e.key==="End")return e.consume(!0),this.#f(e.key);if(He(e.key))return e.consume(!0),this.#b(e.key,e.target);if(Re(e)){const t=e.currentTarget;await this.#r(t);const n=t.querySelector("input");n&&n.click(),e.consume()}}}async#r(e){e&&w.write("BreakpointsView focus on selected element",()=>{this.#n.querySelector('[tabindex="0"]')?.setAttribute("tabindex","-1"),e.setAttribute("tabindex","0"),e.focus()})}async#b(e,t){const o=await pe(t,e,(i,a)=>a?w.write("BreakpointsView expand",()=>{i.setAttribute("open","")}):w.write("BreakpointsView expand",()=>{i.removeAttribute("open")}));return this.#r(o)}async#f(e){if(e==="Home"){const t=this.#n.querySelector("[data-first-pause]");return this.#r(t)}if(e==="End"){const t=this.#o.length;if(t===0){const a=this.#n.querySelector("[data-last-pause]");return this.#r(a)}const n=t-1;if(this.#o[n].expanded){const a=this.#n.querySelector("[data-last-group] > [data-last-breakpoint]");return this.#r(a)}const i=this.#n.querySelector("[data-last-group] > summary");return this.#r(i)}}#p(e){const t=o=>{this.#e.breakpointEdited(e,!0),o.consume()},n=e.type==="LOGPOINT"?c(l.editLogpoint):c(l.editCondition);return m`
    <button data-edit-breakpoint @click=${t} title=${n} jslog=${U("edit-breakpoint").track({click:!0})}>
      <devtools-icon name="edit"></devtools-icon>
    </button>
      `}#u(e,t,n){return m`
    <button data-remove-breakpoint @click=${i=>{g.actionTaken(n),this.#e.breakpointsRemoved(e),i.consume()}} title=${t} aria-label=${t} jslog=${U("remove-breakpoint").track({click:!0})}>
      <devtools-icon name="bin"></devtools-icon>
    </button>
      `}#h(e,t){const{breakpointItems:n}=t,o=new _(e);o.defaultSection().appendItem(c(l.removeAllBreakpointsInFile),()=>{g.actionTaken(u.BreakpointsInFileRemovedFromContextMenu),this.#e.breakpointsRemoved(n)},{jslogContext:"remove-file-breakpoints"});const i=this.#o.filter(r=>r!==t);o.defaultSection().appendItem(c(l.removeOtherBreakpoints),()=>{const r=i.map(({breakpointItems:h})=>h).flat();this.#e.breakpointsRemoved(r)},{disabled:i.length===0,jslogContext:"remove-other-breakpoints"}),o.defaultSection().appendItem(c(l.removeAllBreakpoints),()=>{const r=this.#o.map(({breakpointItems:h})=>h).flat();this.#e.breakpointsRemoved(r)},{jslogContext:"remove-all-breakpoints"});const a=n.filter(r=>r.status!=="ENABLED");o.debugSection().appendItem(c(l.enableAllBreakpointsInFile),()=>{g.actionTaken(u.BreakpointsInFileEnabledDisabledFromContextMenu);for(const r of a)this.#e.breakpointStateChanged(r,!0)},{disabled:a.length===0,jslogContext:"enable-file-breakpoints"});const d=n.filter(r=>r.status!=="DISABLED");o.debugSection().appendItem(c(l.disableAllBreakpointsInFile),()=>{g.actionTaken(u.BreakpointsInFileEnabledDisabledFromContextMenu);for(const r of d)this.#e.breakpointStateChanged(r,!1)},{disabled:d.length===0,jslogContext:"disable-file-breakpoints"}),o.show()}#k(e,t){const n=a=>{this.#h(a,e),a.consume()},o=a=>{const d=a.target;e.expanded=d.open,this.#e.expandedStateChanged(e.url,e.expanded)},i=async a=>{const d=a.currentTarget;await this.#r(d),g.actionTaken(u.BreakpointGroupExpandedStateChanged),a.consume()};return m`
      <details class=${ie({active:this.#s})}
               ?data-first-group=${t===0}
               ?data-last-group=${t===this.#o.length-1}
               role=group
               aria-label='${e.name}'
               aria-description='${e.url}'
               ?open=${rt(e.expanded)}
               @toggle=${o}>
          <summary @contextmenu=${n}
                   tabindex='-1'
                   @keydown=${this.#c}
                   @click=${i}>
            <span class='group-header' aria-hidden=true><span class='group-icon-or-disable'>${this.#v()}${this.#m(e)}</span><span class='group-header-title' title='${e.url}'>${e.name}<span class='group-header-differentiator'>${this.#d.get(e.url)}</span></span></span>
            <span class='group-hover-actions'>
              ${this.#u(e.breakpointItems,c(l.removeAllBreakpointsInFile),u.BreakpointsInFileRemovedFromRemoveButton)}
            </span>
          </summary>
        ${oe(e.breakpointItems,a=>a.id,(a,d)=>this.#l(a,e.editable,t,d))}
      </details>
      `}#m(e){const t=o=>{g.actionTaken(u.BreakpointsInFileCheckboxToggled);const i=o.target,a=i.checked?"ENABLED":"DISABLED";e.breakpointItems.filter(r=>r.status!==a).forEach(r=>{this.#e.breakpointStateChanged(r,i.checked)}),o.consume()},n=e.breakpointItems.some(o=>o.status==="ENABLED");return m`
      <input class='group-checkbox small' type='checkbox'
            aria-label=''
            .checked=${n}
            @change=${t}
            tabindex=-1
            jslog=${B("breakpoint-group").track({change:!0})}>
    `}#v(){return m`<devtools-icon name="file-script"></devtools-icon>`}#g(e,t,n){const o=this.#o.map(({breakpointItems:r})=>r).flat(),i=o.filter(r=>r!==t),a=new _(e),d=t.type==="LOGPOINT"?c(l.editLogpoint):c(l.editCondition);a.revealSection().appendItem(c(l.revealLocation),()=>{this.#e.jumpToSource(t)},{jslogContext:"jump-to-breakpoint"}),a.editSection().appendItem(d,()=>{this.#e.breakpointEdited(t,!1)},{disabled:!n,jslogContext:"edit-breakpoint"}),a.defaultSection().appendItem(c(l.enableAllBreakpoints),o.forEach.bind(o,r=>this.#e.breakpointStateChanged(r,!0)),{disabled:o.every(r=>r.status==="ENABLED"),jslogContext:"enable-all-breakpoints"}),a.defaultSection().appendItem(c(l.disableAllBreakpoints),o.forEach.bind(o,r=>this.#e.breakpointStateChanged(r,!1)),{disabled:o.every(r=>r.status==="DISABLED"),jslogContext:"disable-all-breakpoints"}),a.footerSection().appendItem(c(l.removeBreakpoint),()=>{g.actionTaken(u.BreakpointRemovedFromContextMenu),this.#e.breakpointsRemoved([t])},{jslogContext:"remove-breakpoint"}),a.footerSection().appendItem(c(l.removeOtherBreakpoints),()=>{this.#e.breakpointsRemoved(i)},{disabled:i.length===0,jslogContext:"remove-other-breakpoints"}),a.footerSection().appendItem(c(l.removeAllBreakpoints),()=>{const r=this.#o.map(({breakpointItems:h})=>h).flat();this.#e.breakpointsRemoved(r)},{jslogContext:"remove-all-breakpoints"}),a.show()}#l(e,t,n,o){const i=p=>{this.#e.jumpToSource(e),p.consume()},a=async p=>{const x=p.currentTarget;await this.#r(x),p.consume()},d=p=>{this.#g(p,e,t),p.consume()},r=this.#w(e),h=Pe(e.codeSnippet,ct),E=this.#x(e.type,e.hoverText),v=this.#o[n].breakpointItems;return m`
    <div class=${ie({"breakpoint-item":!0,hit:e.isHit,"conditional-breakpoint":e.type==="CONDITIONAL_BREAKPOINT",logpoint:e.type==="LOGPOINT"})}
         ?data-first-breakpoint=${o===0}
         ?data-last-breakpoint=${o===v.length-1}
         aria-label=${r}
         role=treeitem
         tabindex='-1'
         @contextmenu=${d}
         @click=${a}
         @keydown=${this.#c}>
      <label class='checkbox-label'>
        <span class='type-indicator'></span>
        <input type='checkbox'
              aria-label=${e.location}
              class='small'
              ?indeterminate=${e.status==="INDETERMINATE"}
              .checked=${e.status==="ENABLED"}
              @change=${p=>this.#E(p,e)}
              tabindex=-1
              jslog=${B("breakpoint").track({change:!0})}>
      </label>
      <span class='code-snippet' @click=${i} title=${at(E)} jslog=${U("sources.jump-to-breakpoint").track({click:!0})}>${h}</span>
      <span class='breakpoint-item-location-or-actions'>
        ${t?this.#p(e):je}
        ${this.#u([e],c(l.removeBreakpoint),u.BreakpointRemovedFromRemoveButton)}
        <span class='location'>${e.location}</span>
      </span>
    </div>
    `}#x(e,t){switch(e){case"REGULAR_BREAKPOINT":return;case"CONDITIONAL_BREAKPOINT":return C(t),c(l.conditionCode,{PH1:t});case"LOGPOINT":return C(t),c(l.logpointCode,{PH1:t})}}#w(e){let t;switch(e.status){case"ENABLED":t=c(l.checked);break;case"DISABLED":t=c(l.unchecked);break;case"INDETERMINATE":t=c(l.indeterminate);break}return e.isHit?c(l.breakpointHit,{PH1:t}):t}#E(e,t){const n=e.target;this.#e.breakpointStateChanged(t,n.checked)}#S(e){const{checked:t}=e.target;this.#e.setPauseOnCaughtExceptions(t)}#y(e){const{checked:t}=e.target;if(!this.#a){const n=this.#n.querySelector("[data-pause-on-caught-checkbox]");C(n),!t&&n.checked&&n.click(),w.write("BreakpointsView update pause-on-uncaught-exception",()=>{t?n.disabled=!1:n.disabled=!0})}this.#e.setPauseOnUncaughtExceptions(t)}}customElements.define("devtools-breakpoint-view",$);const dt=Object.freeze(Object.defineProperty({__proto__:null,BreakpointsSidebarController:L,BreakpointsView:$},Symbol.toStringTag,{value:"Module"})),ue=new CSSStyleSheet;ue.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex-grow: 1;
  padding: 6px;
}

.row {
  display: flex;
  flex-direction: row;
  color: var(--sys-color-token-property-special);
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  align-items: center;
  line-height: 24px;
}

.row devtools-button {
  line-height: 1;
  margin-left: 0.1em;
}

.row devtools-button:nth-of-type(1) {
  margin-left: 0.8em;
}

.padded {
  margin-left: 2em;
}

.separator {
  margin-right: 0.5em;
  color: var(--sys-color-on-surface);
}

.editable {
  cursor: text;
  color: var(--sys-color-on-surface);
  overflow-wrap: break-word;
  min-height: 18px;
  line-height: 18px;
  min-width: 0.5em;
  background: transparent;
  border: none;
  outline: none;
  display: inline-block;
}

.editable.red {
  color: var(--sys-color-token-property-special);
}

.editable:hover,
.editable:focus {
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: 2px;
}

.row .inline-button {
  opacity: 0%;
  visibility: hidden;
  transition: opacity 200ms;
}

.row:focus-within .inline-button:not([hidden]),
.row:hover .inline-button:not([hidden]) {
  opacity: 100%;
  visibility: visible;
}

.center-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered {
  margin: 1em;
  max-width: 300px;
  text-align: center;
}

.error-header {
  font-weight: bold;
  margin-bottom: 1em;
}

.error-body {
  line-height: 1.5em;
  color: var(--sys-color-token-subtle);
}

.add-block {
  margin-top: 3px;
}

.header-name,
.header-value {
  min-width: min-content;
}

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  padding: 0;
}

.learn-more-row {
  line-height: 24px;
}

/*# sourceURL=HeadersView.css */
`);const{html:f}=le,b={addHeader:"Add a header",removeHeader:"Remove this header",removeBlock:"Remove this '`ApplyTo`'-section",errorWhenParsing:"Error when parsing ''{PH1}''.",parsingErrorExplainer:"This is most likely due to a syntax error in ''{PH1}''. Try opening this file in an external editor to fix the error or delete the file and re-create the override.",addOverrideRule:"Add override rule",learnMore:"Learn more"},pt=ae("panels/sources/components/HeadersView.ts",b),k=re.bind(void 0,pt),ht=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.25%2016v-5.25H4v-1.5h5.25V4h1.5v5.25H16v1.5h-5.25V16h-1.5Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),se=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%2017c-.417%200-.77-.146-1.062-.438A1.444%201.444%200%200%201%205%2015.5v-10H4V4h4V3h4v1h4v1.5h-1v10c0%20.417-.146.77-.438%201.062A1.444%201.444%200%200%201%2013.5%2017h-7Zm7-11.5h-7v10h7v-10ZM8%2014h1.5V7H8v7Zm2.5%200H12V7h-1.5v7Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),H="header value",R=s=>`header-name-${s}`;class ut extends Me{#e=new W;#n;constructor(e){super(ce("HeadersView")),this.element.setAttribute("jslog",`${Ue("headers-view")}`),this.#n=e,this.#n.addEventListener(A.WorkingCopyChanged,this.#a,this),this.#n.addEventListener(A.WorkingCopyCommitted,this.#s,this),this.element.appendChild(this.#e),this.#t()}async#t(){const e=await this.#n.requestContent();this.#i(e.content||"")}#i(e){let t=!1,n=[];e=e||"[]";try{if(n=JSON.parse(e),!n.every(Fe))throw"Type mismatch after parsing"}catch{console.error("Failed to parse",this.#n.url(),"for locally overriding headers."),t=!0}this.#e.data={headerOverrides:n,uiSourceCode:this.#n,parsingError:t}}#a(){this.#i(this.#n.workingCopy())}#s(){this.#i(this.#n.workingCopy())}getComponent(){return this.#e}dispose(){this.#n.removeEventListener(A.WorkingCopyChanged,this.#a,this),this.#n.removeEventListener(A.WorkingCopyCommitted,this.#s,this)}}class W extends HTMLElement{#e=this.attachShadow({mode:"open"});#n=this.#w.bind(this);#t=[];#i=null;#a=!1;#s=null;#o="";constructor(){super(),this.#e.addEventListener("focusin",this.#b.bind(this)),this.#e.addEventListener("focusout",this.#f.bind(this)),this.#e.addEventListener("click",this.#h.bind(this)),this.#e.addEventListener("input",this.#v.bind(this)),this.#e.addEventListener("keydown",this.#d.bind(this)),this.#e.addEventListener("paste",this.#x.bind(this)),this.addEventListener("contextmenu",this.#p.bind(this))}connectedCallback(){this.#e.adoptedStyleSheets=[ue]}set data(e){this.#t=e.headerOverrides,this.#i=e.uiSourceCode,this.#a=e.parsingError,Ve(this,this.#n)}#d(e){const t=e.target;if(!t.matches(".editable"))return;const n=e;t.matches(".header-name")&&t.innerText===""&&(n.key==="Enter"||n.key==="Tab")?(e.preventDefault(),t.blur()):n.key==="Enter"?(e.preventDefault(),t.blur(),this.#c(t)):n.key==="Escape"&&(e.consume(),t.innerText=this.#o,t.blur(),this.#g(t))}#c(e){const t=Array.from(this.#e.querySelectorAll(".editable")),n=t.indexOf(e);n!==-1&&n+1<t.length&&t[n+1].focus()}#r(e){const t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t?.removeAllRanges(),t?.addRange(n)}#b(e){const t=e.target;t.matches(".editable")&&(this.#r(t),this.#o=t.innerText)}#f(e){const t=e.target;if(t.innerText===""){const o=t.closest(".row"),i=Number(o.dataset.blockIndex),a=Number(o.dataset.headerIndex);t.matches(".apply-to")?(t.innerText="*",this.#t[i].applyTo="*",this.#l()):t.matches(".header-name")&&this.#m(i,a)}window.getSelection()?.removeAllRanges(),this.#i?.commitWorkingCopy()}#p(e){if(!this.#i)return;const t=new _(e);t.appendApplicableItems(this.#i),t.show()}#u(e){const t=new Set(e.map(o=>o.name));let n=1;for(;t.has(R(n));)n++;return R(n)}#h(e){const t=e.target,n=t.closest(".row"),o=Number(n?.dataset.blockIndex||0),i=Number(n?.dataset.headerIndex||0);t.matches(".add-header")?(this.#t[o].headers.splice(i+1,0,{name:this.#u(this.#t[o].headers),value:H}),this.#s={blockIndex:o,headerIndex:i+1},this.#l()):t.matches(".remove-header")?this.#m(o,i):t.matches(".add-block")?(this.#t.push({applyTo:"*",headers:[{name:R(1),value:H}]}),this.#s={blockIndex:this.#t.length-1},this.#l()):t.matches(".remove-block")&&(this.#t.splice(o,1),this.#l())}#k(e,t){return!(t===0&&this.#t[e].headers.length===1&&this.#t[e].headers[t].name===R(1)&&this.#t[e].headers[t].value===H)}#m(e,t){this.#t[e].headers.splice(t,1),this.#t[e].headers.length===0&&this.#t[e].headers.push({name:this.#u(this.#t[e].headers),value:H}),this.#l()}#v(e){this.#g(e.target)}#g(e){const t=e.closest(".row"),n=Number(t.dataset.blockIndex),o=Number(t.dataset.headerIndex);e.matches(".header-name")&&(this.#t[n].headers[o].name=e.innerText,this.#l()),e.matches(".header-value")&&(this.#t[n].headers[o].value=e.innerText,this.#l()),e.matches(".apply-to")&&(this.#t[n].applyTo=e.innerText,this.#l())}#l(){this.#i?.setWorkingCopy(JSON.stringify(this.#t,null,2)),g.actionTaken(u.HeaderOverrideHeadersFileEdited)}#x(e){const t=e;if(e.preventDefault(),t.clipboardData){const n=t.clipboardData.getData("text/plain"),o=this.#e.getSelection()?.getRangeAt(0);if(!o)return;o.deleteContents();const i=document.createTextNode(n);o.insertNode(i),o.selectNodeContents(i),o.collapse(!1);const a=window.getSelection();a?.removeAllRanges(),a?.addRange(o),this.#g(e.target)}}#w(){if(!_e(this))throw new Error("HeadersView render was not scheduled");if(this.#a){const e=this.#i?.name()||".headers";V(f`
        <div class="center-wrapper">
          <div class="centered">
            <div class="error-header">${k(b.errorWhenParsing,{PH1:e})}</div>
            <div class="error-body">${k(b.parsingErrorExplainer,{PH1:e})}</div>
          </div>
        </div>
      `,this.#e,{host:this});return}if(V(f`
      ${this.#t.map((e,t)=>f`
          ${this.#E(e.applyTo,t)}
          ${e.headers.map((n,o)=>f`
              ${this.#S(n,t,o)}
            `)}
        `)}
      <devtools-button
          .variant=${"outlined"}
          .jslogContext=${"headers-view.add-override-rule"}
          class="add-block">
        ${k(b.addOverrideRule)}
      </devtools-button>
      <div class="learn-more-row">
        <x-link
            href="https://goo.gle/devtools-override"
            class="link"
            jslog=${Ge("learn-more").track({click:!0})}>${k(b.learnMore)}</x-link>
      </div>
    `,this.#e,{host:this}),this.#s){let e=null;this.#s.headerIndex?e=this.#e.querySelector(`[data-block-index="${this.#s.blockIndex}"][data-header-index="${this.#s.headerIndex}"] .header-name`):e=this.#e.querySelector(`[data-block-index="${this.#s.blockIndex}"] .apply-to`),e&&e.focus(),this.#s=null}}#E(e,t){return f`
      <div class="row" data-block-index=${t}
           jslog=${ee(e==="*"?e:void 0)}>
        <div>${ce("Apply to")}</div>
        <div class="separator">:</div>
        ${this.#y(e,"apply-to")}
        <devtools-button
        title=${k(b.removeBlock)}
        .size=${"SMALL"}
        .iconUrl=${se}
        .iconWidth=${"14px"}
        .iconHeight=${"14px"}
        .variant=${"icon"}
        .jslogContext=${"headers-view.remove-apply-to-section"}
        class="remove-block inline-button"
      ></devtools-button>
      </div>
    `}#S(e,t,n){return f`
      <div class="row padded" data-block-index=${t} data-header-index=${n}
           jslog=${ee(e.name).parent("headers-editor-row-parent")}>
        ${this.#y(e.name,"header-name red",!0)}
        <div class="separator">:</div>
        ${this.#y(e.value,"header-value")}
        <devtools-button
          title=${k(b.addHeader)}
          .size=${"SMALL"}
          .iconUrl=${ht}
          .variant=${"icon"}
          .jslogContext=${"headers-view.add-header"}
          class="add-header inline-button"
        ></devtools-button>
        <devtools-button
          title=${k(b.removeHeader)}
          .size=${"SMALL"}
          .iconUrl=${se}
          .variant=${"icon"}
          ?hidden=${!this.#k(t,n)}
          .jslogContext=${"headers-view.remove-header"}
          class="remove-header inline-button"
        ></devtools-button>
      </div>
    `}#y(e,t,n){const o=n?We():qe();return f`<span jslog=${o.track({change:!0,keydown:"Enter|Escape|Tab",click:!0})}
                              contenteditable="true"
                              class="editable ${t}"
                              tabindex="0"
                              .innerText=${ze(e)}></span>`}}Ke("headers-editor-row-parent",s=>{for(;s.previousElementSibling?.classList?.contains("padded");)s=s.previousElementSibling;return s.previousElementSibling||void 0});customElements.define("devtools-sources-headers-view",W);const gt=Object.freeze(Object.defineProperty({__proto__:null,HeadersView:ut,HeadersViewComponent:W},Symbol.toStringTag,{value:"Module"})),ft=Object.freeze(Object.defineProperty({__proto__:null,BreakpointsView:dt,BreakpointsViewUtils:st,HeadersView:gt},Symbol.toStringTag,{value:"Module"}));export{L as B,ut as H,ft as c};
//# sourceMappingURL=components-nB6c8Px-.js.map
