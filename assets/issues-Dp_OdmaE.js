import{g_ as Ke,g$ as ze,h0 as je,h1 as _e,h2 as Ge,h3 as Qe,h4 as Je,h5 as Xe,h6 as Ze,h7 as Ye,h8 as et,h9 as tt,ha as st,aq as it,b as f,g,c7 as A,bJ as nt,e as F,hb as le,aO as ke,b2 as H,aP as ve,hc as rt,cc as ot,aj as ye,I as de,hd as Re,he as at,hf as xe,hg as lt,bk as M,cB as dt,u as y,r as X,as as Se,hh as ct,bl as re,dX as ut,c4 as Ae,ey as Ee,ez as _,hi as pe,hj as fe,hk as ge,hl as me,hm as Ce,hn as Te,di as ht,gu as pt,bD as ft,eA as gt,h as mt,ho as V,hp as $,hq as Ct,hr as It,bE as bt,aU as wt,bp as kt,c3 as vt,bz as yt,bA as Ie,d2 as Z,hs as Rt,f as xt,m as St,d as At,ds as Et,ht as Tt,em as Lt,V as be}from"./inspector-CyOA7R9n.js";import{a as Pt}from"./MarkdownView-IOiMoU4I.js";class Le extends Ke{#e=new Map;#t=new Map;#s=new Map;#i=new Map;#n=new Set;#r=new Map;#l=new Set;#a=new Set;#o=new Set;#c=new Set;#p="Improvement";#g=new Set;#h=new Set;#m=new Set;#C=new Set;#f=new Set;#u=new Set;#b=new Set;#d;#w=0;#I;constructor(e,s){super(e),this.#I=s}primaryKey(){throw new Error("This should never be called")}aggregationKey(){return this.#I}getBlockedByResponseDetails(){return this.#r.values()}cookies(){return Array.from(this.#e.values()).map(e=>e.cookie)}getRawCookieLines(){return this.#t.values()}sources(){return this.#i.values()}getBounceTrackingSites(){return this.#l.values()}cookiesWithRequestIndicator(){return this.#e.values()}getHeavyAdIssues(){return this.#n}getCookieDeprecationMetadataIssues(){return this.#h}getMixedContentIssues(){return this.#m}getCorsIssues(){return this.#a}getCspIssues(){return this.#o}getDeprecationIssues(){return this.#c}getLowContrastIssues(){return this.#g}requests(){return this.#s.values()}getSharedArrayBufferIssues(){return this.#C}getQuirksModeIssues(){return this.#f}getAttributionReportingIssues(){return this.#u}getGenericIssues(){return this.#b}getDescription(){return this.#d?this.#d.getDescription():null}getCategory(){return this.#d?this.#d.getCategory():"Other"}getAggregatedIssuesCount(){return this.#w}#k(e){const{domain:s,path:t,name:i}=e;return`${s};${t};${i}`}addInstance(e){this.#w++,this.#d||(this.#d=e),this.#p=ze(this.#p,e.getKind());let s=!1;for(const t of e.requests())s=!0,this.#s.has(t.requestId)||this.#s.set(t.requestId,t);for(const t of e.cookies()){const i=this.#k(t);this.#e.has(i)||this.#e.set(i,{cookie:t,hasRequest:s})}for(const t of e.rawCookieLines())this.#t.has(t)||this.#t.set(t,{rawCookieLine:t,hasRequest:s});for(const t of e.trackingSites())this.#l.has(t)||this.#l.add(t);for(const t of e.sources()){const i=JSON.stringify(t);this.#i.has(i)||this.#i.set(i,t)}e instanceof je&&this.#h.add(e),e instanceof _e&&this.#m.add(e),e instanceof Ge&&this.#n.add(e);for(const t of e.getBlockedByResponseDetails()){const i=JSON.stringify(t,["parentFrame","blockedFrame","requestId","frameId","reason","request"]);this.#r.set(i,t)}e instanceof Qe&&this.#o.add(e),e instanceof Je&&this.#c.add(e),e instanceof Xe&&this.#C.add(e),e instanceof Ze&&this.#g.add(e),e instanceof Ye&&this.#a.add(e),e instanceof et&&this.#f.add(e),e instanceof tt&&this.#u.add(e),e instanceof st&&this.#b.add(e)}getKind(){return this.#p}isHidden(){return this.#d?.isHidden()||!1}setHidden(e){throw new Error("Should not call setHidden on aggregatedIssue")}}class Pe extends it{issuesManager;#e=new Map;#t=new Map;constructor(e){super(),this.issuesManager=e,this.issuesManager.addEventListener("IssueAdded",this.#s,this),this.issuesManager.addEventListener("FullUpdateRequired",this.#i,this);for(const s of this.issuesManager.issues())this.#n(s)}#s(e){this.#n(e.data.issue)}#i(){this.#e.clear(),this.#t.clear();for(const e of this.issuesManager.issues())this.#n(e);this.dispatchEventToListeners("FullUpdateRequired")}#n(e){const s=e.isHidden()?this.#t:this.#e,t=this.#r(s,e);return this.dispatchEventToListeners("AggregatedIssueUpdated",t),t}#r(e,s){const t=s.code();let i=e.get(t);return i||(i=new Le(s.code(),t),e.set(t,i)),i.addInstance(s),i}aggregatedIssues(){return[...this.#e.values(),...this.#t.values()]}hiddenAggregatedIssues(){return this.#t.values()}aggregatedIssueCodes(){return new Set([...this.#e.keys(),...this.#t.keys()])}aggregatedIssueCategories(){const e=new Set;for(const s of this.#e.values())e.add(s.getCategory());return e}aggregatedIssueKinds(){const e=new Set;for(const s of this.#e.values())e.add(s.getKind());return e}numberOfAggregatedIssues(){return this.#e.size}numberOfHiddenAggregatedIssues(){return this.#t.size}keyForIssue(e){return e.code()}}const xs=Object.freeze(Object.defineProperty({__proto__:null,AggregatedIssue:Le,IssueAggregator:Pe},Symbol.toStringTag,{value:"Module"})),oe={hiddenIssues:"Hidden issues",unhideAll:"Unhide all"},Dt=f("panels/issues/HiddenIssuesRow.ts",oe),we=g.bind(void 0,Dt);class Y extends A{#e;constructor(){super(void 0,!0),this.#e=document.createElement("span"),this.toggleOnClick=!0,this.listItemElement.classList.add("issue-category","hidden-issues"),this.childrenListElement.classList.add("hidden-issues-body"),this.#t()}#t(){const e=nt(we(oe.unhideAll),()=>F.instance().unhideAllIssues(),{className:"unhide-all-issues-button",jslogContext:"issues.unhide-all-hiddes"}),s=new le;s.data={name:"countWrapper",content:this.#e},s.classList.add("aggregated-issues-count"),this.#e.textContent="0";const t=document.createElement("div"),i=document.createElement("div");t.classList.add("header"),i.classList.add("title"),i.textContent=we(oe.hiddenIssues),t.appendChild(s),t.appendChild(i),t.appendChild(e),this.listItemElement.appendChild(t)}update(e){this.#e.textContent=`${e}`}}const De=new CSSStyleSheet;De.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.element-reveal-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  mask-image: var(--image-file-select-element);
  background-color: var(--icon-default);
}

/*# sourceURL=./elementsPanelLink.css */
`);const{html:qt}=ve;class qe extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=()=>{};#s=()=>{};#i=()=>{};set data(e){this.#t=e.onElementRevealIconClick,this.#s=e.onElementRevealIconMouseEnter,this.#i=e.onElementRevealIconMouseLeave,this.#n()}#n(){this.#r()}connectedCallback(){this.#e.adoptedStyleSheets=[De]}#r(){ke(qt`
      <span
        class="element-reveal-icon"
        jslog=${H("elements-panel").track({click:!0})}
        @click=${this.#t}
        @mouseenter=${this.#s}
        @mouseleave=${this.#i}></span>
      `,this.#e,{host:this})}}customElements.define("devtools-elements-panel-link",qe);const Me=new CSSStyleSheet;Me.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.hide-issues-menu-btn {
  position: relative;
  display: flex;
  background-color: transparent;
  flex: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 -2px 0 4px;
  overflow: hidden;
  border-radius: 0;
  border: none;

  &:hover > devtools-icon {
    color: var(--icon-default-hover);
  }
}

/*# sourceURL=./hideIssuesMenu.css */
`);const{html:Mt}=ve,Oe={tooltipTitle:"Hide issues"},Ot=f("panels/issues/components/HideIssuesMenu.ts",Oe),Nt=g.bind(void 0,Ot);class ce extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=rt;#s=()=>{};set data(e){this.#t=e.menuItemLabel,this.#s=e.menuItemAction,this.#i()}connectedCallback(){this.#e.adoptedStyleSheets=[Me]}onMenuOpen(e){e.stopPropagation();const s=this.#e.querySelector("button"),t=new ot(e,{x:s?.getBoundingClientRect().left,y:s?.getBoundingClientRect().bottom});t.headerSection().appendItem(this.#t,()=>this.#s(),{jslogContext:"toggle-similar-issues"}),t.show()}#i(){ke(Mt`
    <devtools-button
      .data=${{variant:"icon",iconName:"dots-vertical",title:Nt(Oe.tooltipTitle)}}
      .jslogContext=${"hide-issues"}
      class="hide-issues-menu-btn"
      @click=${this.onMenuOpen.bind(this)}></devtools-button>
    `,this.#e,{host:this})}}customElements.define("devtools-hide-issues-menu",ce);const G={hideAllCurrentPageErrors:"Hide all current Page Errors",hideAllCurrentBreakingChanges:"Hide all current Breaking Changes",hideAllCurrentImprovements:"Hide all current Improvements"},Ht=f("panels/issues/IssueKindView.ts",G),ee=g.bind(void 0,Ht);function K(){return ye.instance().createSetting("group-issues-by-kind",!1)}function Vt(c,e){return c.getKind()===e.getKind()?0:c.getKind()==="PageError"||c.getKind()==="BreakingChange"&&e.getKind()==="Improvement"?-1:1}function $t(c){switch(c){case"BreakingChange":return"breaking-changes";case"Improvement":return"improvements";case"PageError":return"page-errors"}}class te extends A{#e;#t;constructor(e){super(void 0,!0),this.#e=e,this.#t=document.createElement("span"),this.toggleOnClick=!0,this.listItemElement.classList.add("issue-kind"),this.listItemElement.classList.add($t(e)),this.childrenListElement.classList.add("issue-kind-body")}getKind(){return this.#e}getHideAllCurrentKindString(){switch(this.#e){case"PageError":return ee(G.hideAllCurrentPageErrors);case"Improvement":return ee(G.hideAllCurrentImprovements);case"BreakingChange":return ee(G.hideAllCurrentBreakingChanges)}}#s(){const e=document.createElement("div");e.classList.add("header");const s=new de;s.data=Re(this.#e),s.classList.add("leading-issue-icon");const t=new le;t.data={name:"countWrapper",content:this.#t},t.classList.add("aggregated-issues-count"),this.#t.textContent="0";const i=document.createElement("div");i.classList.add("title"),i.textContent=at(this.#e);const n=new ce;n.classList.add("hide-available-issues"),n.data={menuItemLabel:this.getHideAllCurrentKindString(),menuItemAction:()=>{const r=xe(),d=r.get();for(const l of F.instance().issues())l.getKind()===this.#e&&(d[l.code()]="Hidden");r.set(d)}},e.appendChild(s),e.appendChild(t),e.appendChild(i),e.appendChild(n),this.listItemElement.appendChild(e)}onattach(){this.#s(),this.expand()}update(e){this.#t.textContent=`${e}`}}const Ne=new CSSStyleSheet;Ne.replaceSync(`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.issues-pane {
  overflow: hidden;
}

.issues-pane-no-issues {
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  display: flex;
  flex: 1 1 auto;
  font-size: 14px;
  justify-content: center;
  padding: 30px;
}

.issues-toolbar-container {
  display: flex;
  flex: none;
}

.issues-toolbar-container > .toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
}

.issues-toolbar-left {
  flex: 1 1 auto;
}

.issues-toolbar-right {
  padding-right: 6px;
}

/*# sourceURL=issuesPane.css */
`);const He=new CSSStyleSheet;He.replaceSync(`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* Remove container padding from TreeOutline.
 * Allows issues to touch the edges of the container. */
:host,
.issues {
  padding: 0;
  overflow: auto;
}

.issues {
  --issue-indent: 8px;
}

/* Override whitespace behavior for tree items to allow wrapping */
.issues li {
  white-space: normal;
  align-items: flex-start;
  min-height: var(--sys-size-13);
}

/* Hide toggle for tree items which cannot be collapsed */
.issues .always-parent::before {
  display: none;
}

.issues li.parent::before {
  margin-top: 10px;
}

.issues .affected-resources li.parent::before {
  margin-top: 3px;
  margin-right: 0;
}

.issue-category,
.issue-kind,
.issue {
  padding: 0 8px;
  padding-left: var(--issue-indent);
  overflow: hidden;
  flex: none;
  transition: background-color 200ms;
  border: 1px solid var(--sys-color-divider);
  border-width: 0 0 1px;
}

.issue-category.hidden-issues.parent.expanded,
.issue-kind.parent.expanded {
  border-width: 0 0 1px;
  background-color: var(--sys-color-surface2);
}

.issue-category + .children .issue,
.issue.expanded {
  background: var(--sys-color-cdt-base-container);
}

.issue.expanded {
  border-width: 0;
}

.issue.selected,
.issue.expanded.selected {
  background-color: var(--sys-color-surface2);

  &:focus {
    background-color: var(--sys-color-tonal-container);
  }
}

.tree-outline li:not(.selected):hover .selection {
  background-color: unset;
}

.tree-outline li.issue:not(.expanded):not(.selected):hover .selection {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.tree-outline li.issue.expanded:not(.selected):hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.unhide-all-issues-button {
  margin: 0;
}

p {
  margin-block-start: 2px;
  margin-block-end: 2px;
}

/* Override selected tree item styles for issues to avoid changing width. */
.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-category.selected:focus-visible,
.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-kind.selected:focus-visible,
.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue.selected:focus-visible {
  width: auto;
  padding-right: 8px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 0;
  cursor: pointer;
  width: 100%;

  & > :not(.unhide-all-issues-button) {
    margin-top: var(--sys-size-2);
  }
}

.header devtools-hide-issues-menu {
  visibility: hidden;
}

.header:hover devtools-hide-issues-menu,
.issue.selected devtools-hide-issues-menu {
  visibility: visible;
}

.title {
  flex: 1;
  font-size: 12px;
  color: var(--sys-color-on-surface);
  font-weight: normal;
  user-select: text;
  padding-top: 2px;
}

.issue.expanded .title {
  font-weight: 450;
}

.issue-body.children {
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 6px 0;
  position: relative;
  padding-left: calc(var(--issue-indent) + 43px);
  padding-bottom: 26px;
  padding-right: 8px;
}

.issue-category + .children,
.issue-kind + .children {
  --issue-indent: 24px;

  padding-left: 0;
}

/* Show a colored border on the left side of opened issues. */
.issue-body::before {
  content: "";
  display: block;
  position: absolute;
  left: calc(var(--issue-indent) + 23px);
  top: 0;
  bottom: 20px;
  width: 2px;
}

.issue-kind-breaking-change.issue-body::before {
  border-left: 2px solid var(--issue-color-yellow);
}

.issue-kind-page-error.issue-body::before {
  border-left: 2px solid var(--issue-color-red);
}

.issue-kind-improvement.issue-body::before {
  border-left: 2px solid var(--issue-color-blue);
}

.tree-outline .issue-body li:hover:not(:has(span[is="dt-checkbox"])) .selection {
  background-color: unset;
}

devtools-icon.leading-issue-icon {
  margin: 1px 0 -1px 7px;
}

.message {
  line-height: 18px;
  font-size: 12px;
  color: var(--sys-color-token-subtle);
  margin-bottom: 4px;
  user-select: text;
}

.message p {
  margin-bottom: 16px;
}

.message li {
  margin-top: 8px;
}

.message code {
  color: var(--sys-color-on-surface);
  padding: 0 2px;
  font-size: 12px;
  user-select: text;
  cursor: text;
  background: var(--sys-color-surface2);
}

.separator::before {
  content: "·";
  padding-left: 1ex;
  padding-right: 1ex;
}

.link {
  font-size: 12px;
  color: var(--sys-color-primary);
}

.link-wrapper {
  margin-top: 15px;
  user-select: text;
}

.affected-resources-label,
.resolutions-label {
  margin-top: 5px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--sys-color-on-surface);
  display: inline-block;
}

.link-list {
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0;
}

.resolutions-list {
  list-style-type: none;
  list-style-position: inside;
  padding-inline-start: 0;
}

/* We inherit all the styles from treeoutline, but these are simple text <li>, so we override some styles */
.link-list li::before {
  content: none;
  mask-image: none;
}

.resolutions-list li::before {
  content: "→";
  mask-image: none;
  padding-right: 5px;
  position: relative;
  top: -1px;
}

.resolutions-list li {
  display: list-item;
}

ul > li.plain-enum {
  display: list-item;
}

/* This is a hack because the tree view's CSS overrides list styling in a non-compositional way. This
   can be removed once we've moved to proper components. */
ul > li.plain-enum::before {
  content: "";
  padding: 0;
  margin: 0;
  max-width: 0;
}

.affected-resources-label + .affected-resources {
  padding: 3px 0 0;
  position: relative;
  user-select: text;
}

.affected-resource-label {
  font-size: 12px;
  line-height: 18px;
  color: var(--sys-color-on-surface);
  position: relative;
  cursor: pointer;
}

.affected-resource-cookie {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-element {
  font-size: 12px;
  line-height: 18px;
  color: var(--sys-color-primary);
  border: 0;
  border-collapse: collapse;
}

.affected-resource-row {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
  vertical-align: top;
}

.affected-resource-mixed-content {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-heavy-ad {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-request {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-source {
  font-size: 12px;
  line-height: 18px;
  color: var(--sys-color-primary);
  border: 0;
  border-collapse: collapse;
}

.affected-resource-list {
  border-spacing: 10px 0;
  margin-left: -12px;
}

.affected-resource-header {
  font-size: 12px;
  color: var(--sys-color-on-surface);
  padding-left: 2px;
}

.code-example {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.affected-resource-blocked-status {
  color: var(--issue-color-red);
}

.affected-resource-report-only-status {
  color: var(--issue-color-yellow);
}

.affected-resource-cookie-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
  text-align: right;
}

.affected-resource-cookie-info-header {
  text-align: right;
}

.affected-resource-mixed-content-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-heavy-ad-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-heavy-ad-info-frame {
  display: flex;
  align-items: center;
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-cell {
  color: var(--sys-color-token-subtle);
  padding: 2px;
}

.affected-resource-cell.link {
  color: var(--sys-color-primary);
}

.affected-resource-cell span.icon {
  margin-right: 0.5ex;
  vertical-align: sub;
}

.affected-resources > .parent {
  margin-top: 0;
  padding: 2px 5px 0;
}

.affected-resources > .parent.expanded {
  background: var(--sys-color-cdt-base-container);
}

.affected-resources > .children.expanded {
  background: var(--sys-color-cdt-base-container);
  padding: 6px 0 9px 5px;
}

.aggregated-issues-count {
  padding: 3px 7px 0;
}

.affected-resource-directive-info-header {
  text-align: left;
}

.affected-resource-directive {
  font-size: 12px;
  line-height: 18px;
  border: 0;
  border-collapse: collapse;
}

.affected-resource-directive-info {
  color: var(--sys-color-token-subtle);
  padding: 2px;
  text-align: left;
}

.devtools-link {
  padding-top: 4px;
}

devtools-icon.link-icon {
  vertical-align: sub;
  margin-right: 0.5ch;
}

devtools-icon.elements-panel,
devtools-icon.network-panel {
  margin-right: 0.5ex;
  vertical-align: baseline;
  height: 14px;
}

@media (forced-colors: active) {
  .title {
    color: ButtonText;
  }

  .tree-outline:not(.hide-selection-when-blurred) .selected .header .title,
  .tree-outline.hide-selection-when-blurred .selected:focus-visible .header .title {
    color: HighlightText;
  }
}

/*# sourceURL=issuesTree.css */
`);const Q={unknown:"unknown",clickToRevealTheFramesDomNodeIn:"Click to reveal the frame's DOM node in the Elements panel",unavailable:"unavailable"},Ut=f("panels/issues/AffectedResourcesView.ts",Q),se=g.bind(void 0,Ut),Bt=c=>(/[^/]+$/.exec(c)||/[^/]+\/$/.exec(c)||[""])[0];class C extends A{#e;issue;affectedResourcesCountElement;affectedResources;#t;#s;#i;requestResolver;constructor(e,s,t){super(void 0,void 0,t),this.#e=e,this.issue=s,this.toggleOnClick=!0,this.affectedResourcesCountElement=this.createAffectedResourcesCounter(),this.affectedResources=this.createAffectedResources(),this.#t=0,this.requestResolver=new lt,this.#s=[],this.#i=new Set}setIssue(e){this.issue=e}createAffectedResourcesCounter(){const e=document.createElement("div");return e.classList.add("affected-resource-label"),this.listItemElement.appendChild(e),e}createAffectedResources(){const e=new A,s=document.createElement("table");return s.classList.add("affected-resource-list"),e.listItemElement.appendChild(s),this.appendChild(e),s}updateAffectedResourceCount(e){this.#t=e,this.affectedResourcesCountElement.textContent=this.getResourceNameWithCount(e),this.hidden=this.#t===0,this.#e.updateAffectedResourceVisibility()}isEmpty(){return this.#t===0}clear(){this.affectedResources.textContent="",this.requestResolver.clear()}expandIfOneResource(){this.#t===1&&this.expand()}#n(e){const s=M.instance().getFrame(e);if((!s||!s.url)&&(this.#i.add(e),!this.#s.length)){const t=M.instance().addEventListener("FrameAddedToTarget",this.#r,this),i=M.instance().addEventListener("FrameNavigated",this.#r,this);this.#s=[t,i]}return s}#r(e){const s=e.data.frame;if(!s.url)return;const t=this.#i.delete(s.id);this.#i.size===0&&this.#s.length&&(dt(this.#s),this.#s=[]),t&&this.update()}createFrameCell(e,s){const t=this.#n(e),i=t&&(t.unreachableUrl()||t.url)||se(Q.unknown),n=document.createElement("td");if(n.classList.add("affected-resource-cell"),t){const r=new de;r.data={iconName:"code-circle",color:"var(--icon-link)",width:"16px",height:"16px"},r.classList.add("link","elements-panel"),r.onclick=async()=>{y.issuesPanelResourceOpened(s,"Element");const d=M.instance().getFrame(e);if(d){const l=await d.getOwnerDOMNodeOrDocument();l&&X(l)}},r.title=se(Q.clickToRevealTheFramesDomNodeIn),n.appendChild(r)}return n.appendChild(document.createTextNode(i)),n.onmouseenter=()=>{const r=M.instance().getFrame(e);r&&r.highlight()},n.onmouseleave=()=>Se.hideDOMNodeHighlight(),n}createRequestCell(e,s={}){const t=document.createElement("td");t.classList.add("affected-resource-cell");const i=new ct;return i.data={...s,affectedRequest:e,requestResolver:this.requestResolver,displayURL:!0},t.appendChild(i),t}async createElementCell({backendNodeId:e,nodeName:s,target:t},i){if(!t){const I=document.createElement("td");return I.textContent=s||se(Q.unavailable),I}function n(){y.issuesPanelResourceOpened(i,"Element")}const r=new re(t,e),d=await ut.linkify(r);d.textContent=s,d.addEventListener("click",()=>n()),d.addEventListener("keydown",I=>{I.key==="Enter"&&n()});const l=document.createElement("td");return l.classList.add("affected-resource-element","devtools-link"),l.appendChild(d),l}appendSourceLocation(e,s,t){const i=document.createElement("td");if(i.classList.add("affected-source-location"),s){const d=new Ae(40).linkifyScriptLocation(t||null,s.scriptId||null,s.url,s.lineNumber,{columnNumber:s.columnNumber,inlineFrameIndex:0});d.setAttribute("jslog",`${H("source-location").track({click:!0})}`),i.appendChild(d)}e.appendChild(i)}appendColumnTitle(e,s,t=null){const i=document.createElement("td");i.classList.add("affected-resource-header"),t&&i.classList.add(t),i.textContent=s,e.appendChild(i)}createIssueDetailCell(e,s=null){const t=document.createElement("td");return typeof e=="string"?t.textContent=e:t.appendChild(e),s&&t.classList.add(s),t}appendIssueDetailCell(e,s,t=null){const i=this.createIssueDetailCell(s,t);return e.appendChild(i),i}}const U={nRequests:"{n, plural, =1 {# request} other {# requests}}",requestC:"Request",parentFrame:"Parent Frame",blockedResource:"Blocked Resource"},Ft=f("panels/issues/AffectedBlockedByResponseView.ts",U),z=g.bind(void 0,Ft);class Wt extends C{#e(e){const s=document.createElement("tr");this.appendColumnTitle(s,z(U.requestC)),this.appendColumnTitle(s,z(U.parentFrame)),this.appendColumnTitle(s,z(U.blockedResource)),this.affectedResources.appendChild(s);let t=0;for(const i of e)this.#t(i),t++;this.updateAffectedResourceCount(t)}getResourceNameWithCount(e){return z(U.nRequests,{n:e})}#t(e){const s=document.createElement("tr");s.classList.add("affected-resource-row");const t=this.createRequestCell(e.request,{additionalOnClickAction(){y.issuesPanelResourceOpened("CrossOriginEmbedderPolicy","Request")}});if(s.appendChild(t),e.parentFrame){const i=this.createFrameCell(e.parentFrame.frameId,this.issue.getCategory());s.appendChild(i)}else s.appendChild(document.createElement("td"));if(e.blockedFrame){const i=this.createFrameCell(e.blockedFrame.frameId,this.issue.getCategory());s.appendChild(i)}else s.appendChild(document.createElement("td"));this.affectedResources.appendChild(s)}update(){this.clear(),this.#e(this.issue.getBlockedByResponseDetails())}}const D={nCookies:"{n, plural, =1 {# cookie} other {# cookies}}",name:"Name",domain:"Domain",path:"Path",nRawCookieLines:"{n, plural, =1 {1 Raw `Set-Cookie` header} other {# Raw `Set-Cookie` headers}}",filterSetCookieTitle:"Show network requests that include this `Set-Cookie` header in the network panel"},Kt=f("panels/issues/AffectedCookiesView.ts",D),O=g.bind(void 0,Kt);class zt extends C{getResourceNameWithCount(e){return O(D.nCookies,{n:e})}#e(e){const s=document.createElement("tr");this.appendColumnTitle(s,O(D.name)),this.appendColumnTitle(s,O(D.domain)+" & "+O(D.path),"affected-resource-cookie-info-header"),this.affectedResources.appendChild(s);let t=0;for(const i of e)t++,this.#t(i.cookie,i.hasRequest);this.updateAffectedResourceCount(t)}#t(e,s){const t=document.createElement("tr");t.classList.add("affected-resource-cookie");const i=document.createElement("td");if(s){const n=document.createElement("button");n.classList.add("link","devtools-link"),n.textContent=e.name,n.tabIndex=0,n.setAttribute("jslog",`${H("issues.filter-network-requests-by-cookie").track({click:!0})}`),n.addEventListener("click",()=>{y.issuesPanelResourceOpened(this.issue.getCategory(),"Cookie"),X(Ee.filters([{filterType:_.CookieDomain,filterValue:e.domain},{filterType:_.CookieName,filterValue:e.name},{filterType:_.CookiePath,filterValue:e.path}]))}),i.appendChild(n)}else i.textContent=e.name;t.appendChild(i),this.appendIssueDetailCell(t,`${e.domain}${e.path}`,"affected-resource-cookie-info"),this.affectedResources.appendChild(t)}update(){this.clear(),this.#e(this.issue.cookiesWithRequestIndicator())}}class jt extends C{getResourceNameWithCount(e){return O(D.nRawCookieLines,{n:e})}update(){this.clear();const e=this.issue.getRawCookieLines();let s=0;for(const t of e){const i=document.createElement("tr");if(i.classList.add("affected-resource-directive"),t.hasRequest){const n=document.createElement("td"),r=document.createElement("button");r.classList.add("link","devtools-link"),r.textContent=t.rawCookieLine,r.title=O(D.filterSetCookieTitle),r.tabIndex=0,r.setAttribute("jslog",`${H("issues.filter-network-requests-by-raw-cookie").track({click:!0})}`),r.addEventListener("click",()=>{X(Ee.filters([{filterType:_.ResponseHeaderValueSetCookie,filterValue:t.rawCookieLine}]))}),n.appendChild(r),i.appendChild(n)}else this.appendIssueDetailCell(i,t.rawCookieLine);this.affectedResources.appendChild(i),s++}this.updateAffectedResourceCount(s)}}const u={nDirectives:"{n, plural, =1 {# directive} other {# directives}}",reportonly:"report-only",blocked:"blocked",clickToRevealTheViolatingDomNode:"Click to reveal the violating DOM node in the Elements panel",directiveC:"Directive",element:"Element",sourceLocation:"Source location",status:"Status",resourceC:"Resource"},_t=f("panels/issues/AffectedDirectivesView.ts",u),h=g.bind(void 0,_t);class Gt extends C{#e(e,s){const t=document.createElement("td");s?(t.classList.add("affected-resource-report-only-status"),t.textContent=h(u.reportonly)):(t.classList.add("affected-resource-blocked-status"),t.textContent=h(u.blocked)),e.appendChild(t)}getResourceNameWithCount(e){return h(u.nDirectives,{n:e})}#t(e,s){const t=document.createElement("td");t.textContent=s,e.appendChild(t)}#s(e,s){const t=document.createElement("td");t.classList.add("affected-resource-directive-info"),t.textContent=s,e.appendChild(t)}#i(e,s,t){const i=new qe;if(s){const r=s;i.title=h(u.clickToRevealTheViolatingDomNode);const d=()=>{const L=t.getTargetIfNotDisposed();if(L){y.issuesPanelResourceOpened(this.issue.getCategory(),"Element");const W=new re(L,r);X(W)}},l=()=>{const L=t.getTargetIfNotDisposed();if(L){const W=new re(L,r);W&&W.highlight()}},I=()=>{Se.hideDOMNodeHighlight()};i.data={onElementRevealIconClick:d,onElementRevealIconMouseEnter:l,onElementRevealIconMouseLeave:I}}const n=document.createElement("td");n.classList.add("affected-resource-csp-info-node"),n.appendChild(i),e.appendChild(n)}#n(e){const s=document.createElement("tr");if(this.issue.code()===pe)this.appendColumnTitle(s,h(u.directiveC)),this.appendColumnTitle(s,h(u.element)),this.appendColumnTitle(s,h(u.sourceLocation)),this.appendColumnTitle(s,h(u.status));else if(this.issue.code()===fe)this.appendColumnTitle(s,h(u.resourceC),"affected-resource-directive-info-header"),this.appendColumnTitle(s,h(u.status)),this.appendColumnTitle(s,h(u.directiveC)),this.appendColumnTitle(s,h(u.sourceLocation));else if(this.issue.code()===ge)this.appendColumnTitle(s,h(u.sourceLocation)),this.appendColumnTitle(s,h(u.directiveC)),this.appendColumnTitle(s,h(u.status));else if(this.issue.code()===me)this.appendColumnTitle(s,h(u.sourceLocation)),this.appendColumnTitle(s,h(u.status));else if(this.issue.code()===Ce)this.appendColumnTitle(s,h(u.sourceLocation)),this.appendColumnTitle(s,h(u.directiveC)),this.appendColumnTitle(s,h(u.status));else{this.updateAffectedResourceCount(0);return}this.affectedResources.appendChild(s);let t=0;for(const i of e)t++,this.#r(i);this.updateAffectedResourceCount(t)}#r(e){const s=document.createElement("tr");s.classList.add("affected-resource-directive");const t=e.details(),i=Te(t.sourceCodeLocation),n=e.model(),r=e.model()?.getTargetIfNotDisposed();if(this.issue.code()===pe&&n)this.#t(s,t.violatedDirective),this.#i(s,t.violatingNodeId,n),this.appendSourceLocation(s,i,r),this.#e(s,t.isReportOnly);else if(this.issue.code()===fe){const d=t.blockedURL?t.blockedURL:ht;this.#s(s,d),this.#e(s,t.isReportOnly),this.#t(s,t.violatedDirective),this.appendSourceLocation(s,i,r)}else if(this.issue.code()===ge)this.appendSourceLocation(s,i,r),this.#t(s,t.violatedDirective),this.#e(s,t.isReportOnly);else if(this.issue.code()===me)this.appendSourceLocation(s,i,r),this.#e(s,t.isReportOnly);else if(this.issue.code()===Ce)this.appendSourceLocation(s,i,r),this.#t(s,t.violatedDirective),this.#e(s,t.isReportOnly);else return;this.affectedResources.appendChild(s)}update(){this.clear(),this.#n(this.issue.getCspIssues())}}const Ve={nElements:"{n, plural, =1 {# element} other {# elements}}"},Qt=f("panels/issues/AffectedElementsView.ts",Ve),Jt=g.bind(void 0,Qt);class ue extends C{async#e(e){let s=0;for(const t of e)await this.#t(t),s++;this.updateAffectedResourceCount(s)}getResourceNameWithCount(e){return Jt(Ve.nElements,{n:e})}async#t(e){const s=await this.createElementCell(e,this.issue.getCategory()),t=document.createElement("tr");t.appendChild(s),this.affectedResources.appendChild(t)}update(){this.clear(),this.#e(this.issue.elements())}}const B={nDocuments:"{n, plural, =1 { document} other { documents}}",documentInTheDOMTree:"Document in the DOM tree",url:"URL",mode:"Mode"},Xt=f("panels/issues/AffectedDocumentsInQuirksModeView.ts",B),j=g.bind(void 0,Xt);class Zt extends ue{#e=Promise.resolve();update(){this.#e=this.#e.then(this.#t.bind(this))}getResourceName(e){return j(B.nDocuments,{n:e})}async#t(){this.clear(),await this.#i(this.issue.getQuirksModeIssues())}async#s(e){const s=document.createElement("tr");s.classList.add("affected-resource-quirks-mode");const t=e.details(),i=M.instance().getFrame(t.frameId)?.resourceTreeModel().target()||null;s.appendChild(await this.createElementCell({nodeName:"document",backendNodeId:t.documentNodeId,target:i},e.getCategory())),this.appendIssueDetailCell(s,t.isLimitedQuirksMode?"Limited Quirks Mode":"Quirks Mode"),this.appendIssueDetailCell(s,t.url),this.affectedResources.appendChild(s)}async#i(e){const s=document.createElement("tr");this.appendColumnTitle(s,j(B.documentInTheDOMTree)),this.appendColumnTitle(s,j(B.mode)),this.appendColumnTitle(s,j(B.url)),this.affectedResources.appendChild(s);let t=0;for(const i of e)t++,await this.#s(i);this.updateAffectedResourceCount(t)}}class Yt extends ue{#e=Promise.resolve();update(){this.#e=this.#e.then(this.#t.bind(this))}async#t(){this.clear(),await this.#i(this.issue.getLowContrastIssues())}async#s(e){const s=document.createElement("tr");s.classList.add("affected-resource-low-contrast");const t=e.details(),i=e.model()?.target()||null;s.appendChild(await this.createElementCell({nodeName:t.violatingNodeSelector,backendNodeId:t.violatingNodeId,target:i},e.getCategory())),this.appendIssueDetailCell(s,String(pt(t.contrastRatio,2))),this.appendIssueDetailCell(s,String(t.thresholdAA)),this.appendIssueDetailCell(s,String(t.thresholdAAA)),this.appendIssueDetailCell(s,t.fontSize),this.appendIssueDetailCell(s,t.fontWeight),this.affectedResources.appendChild(s)}async#i(e){const s=document.createElement("tr");this.appendColumnTitle(s,q(P.element)),this.appendColumnTitle(s,q(P.contrastRatio)),this.appendColumnTitle(s,q(P.minimumAA)),this.appendColumnTitle(s,q(P.minimumAAA)),this.appendColumnTitle(s,q(P.textSize)),this.appendColumnTitle(s,q(P.textWeight)),this.affectedResources.appendChild(s);let t=0;for(const i of e)t++,await this.#s(i);this.updateAffectedResourceCount(t)}}const P={element:"Element",contrastRatio:"Contrast ratio",minimumAA:"Minimum AA ratio",minimumAAA:"Minimum AAA ratio",textSize:"Text size",textWeight:"Text weight"},es=f("panels/issues/AffectedElementsWithLowContrastView.ts",P),q=g.bind(void 0,es),S={nResources:"{n, plural, =1 {# resource} other {# resources}}",limitExceeded:"Limit exceeded",resolutionStatus:"Resolution Status",frameUrl:"Frame URL",removed:"Removed",warned:"Warned",cpuPeakLimit:"CPU peak limit",cpuTotalLimit:"CPU total limit",networkLimit:"Network limit"},ts=f("panels/issues/AffectedHeavyAdView.ts",S),E=g.bind(void 0,ts);class ss extends C{#e(e){const s=document.createElement("tr");this.appendColumnTitle(s,E(S.limitExceeded)),this.appendColumnTitle(s,E(S.resolutionStatus)),this.appendColumnTitle(s,E(S.frameUrl)),this.affectedResources.appendChild(s);let t=0;for(const i of e)this.#i(i.details()),t++;this.updateAffectedResourceCount(t)}getResourceNameWithCount(e){return E(S.nResources,{n:e})}#t(e){switch(e){case"HeavyAdBlocked":return E(S.removed);case"HeavyAdWarning":return E(S.warned)}return""}#s(e){switch(e){case"CpuPeakLimit":return E(S.cpuPeakLimit);case"CpuTotalLimit":return E(S.cpuTotalLimit);case"NetworkTotalLimit":return E(S.networkLimit)}return""}#i(e){const s=document.createElement("tr");s.classList.add("affected-resource-heavy-ad");const t=document.createElement("td");t.classList.add("affected-resource-heavy-ad-info"),t.textContent=this.#s(e.reason),s.appendChild(t);const i=document.createElement("td");i.classList.add("affected-resource-heavy-ad-info"),i.textContent=this.#t(e.resolution),s.appendChild(i);const n=e.frame.frameId,r=this.createFrameCell(n,this.issue.getCategory());s.appendChild(r),this.affectedResources.appendChild(s)}update(){this.clear(),this.#e(this.issue.getHeavyAdIssues())}}const $e={nAllowedSites:"{n, plural, =1 {1 website allowed to access cookies} other {# websites allowed to access cookies}}"},is=f("panels/issues/AffectedMetadataAllowedSitesView.ts",$e),ns=g.bind(void 0,is);class rs extends C{getResourceNameWithCount(e){return ns($e.nAllowedSites,{n:e})}update(){this.clear();const e=this.issue.getCookieDeprecationMetadataIssues();let s=0;for(const t of e){const i=document.createElement("tr");i.classList.add("affected-resource-directive");const n=document.createElement("div"),r=document.createElement("span");if(r.textContent=t.details().allowedSites.join(", "),n.appendChild(r),!t.details().isOptOutTopLevel&&t.details().optOutPercentage>0){const d=document.createElement("span");d.textContent=" (opt-out: "+t.details().optOutPercentage+"% - ",n.appendChild(d);const l=ft.create("https://developers.google.com/privacy-sandbox/blog/grace-period-opt-out","learn more");n.appendChild(l);const I=document.createElement("span");I.textContent=")",n.appendChild(I)}this.appendIssueDetailCell(i,n),this.affectedResources.appendChild(i),s++}this.updateAffectedResourceCount(s)}}const w={nViolations:"{n, plural, =1 {# violation} other {# violations}}",warning:"warning",blocked:"blocked",instantiation:"Instantiation",aSharedarraybufferWas:"A `SharedArrayBuffer` was instantiated in a context that is not cross-origin isolated",transfer:"Transfer",sharedarraybufferWasTransferedTo:"`SharedArrayBuffer` was transfered to a context that is not cross-origin isolated",sourceLocation:"Source Location",trigger:"Trigger",status:"Status"},os=f("panels/issues/AffectedSharedArrayBufferIssueDetailsView.ts",w),R=g.bind(void 0,os);class as extends C{getResourceNameWithCount(e){return R(w.nViolations,{n:e})}#e(e,s){const t=document.createElement("td");s?(t.classList.add("affected-resource-report-only-status"),t.textContent=R(w.warning)):(t.classList.add("affected-resource-blocked-status"),t.textContent=R(w.blocked)),e.appendChild(t)}#t(e,s){const t=document.createElement("td");switch(s){case"CreationIssue":t.textContent=R(w.instantiation),t.title=R(w.aSharedarraybufferWas);break;case"TransferIssue":t.textContent=R(w.transfer),t.title=R(w.sharedarraybufferWasTransferedTo);break}e.appendChild(t)}#s(e){const s=document.createElement("tr");this.appendColumnTitle(s,R(w.sourceLocation)),this.appendColumnTitle(s,R(w.trigger)),this.appendColumnTitle(s,R(w.status)),this.affectedResources.appendChild(s);let t=0;for(const i of e)t++,this.#i(i);this.updateAffectedResourceCount(t)}#i(e){const s=document.createElement("tr");s.classList.add("affected-resource-directive");const t=e.details(),i=Te(t.sourceCodeLocation);this.appendSourceLocation(s,i,e.model()?.getTargetIfNotDisposed()),this.#t(s,t.type),this.#e(s,t.isWarning),this.affectedResources.appendChild(s)}update(){this.clear(),this.#s(this.issue.getSharedArrayBufferIssues())}}const Ue={nSources:"{n, plural, =1 {# source} other {# sources}}"},ls=f("panels/issues/AffectedSourcesView.ts",Ue),ds=g.bind(void 0,ls);class cs extends C{#e(e){let s=0;for(const t of e)this.#t(t),s++;this.updateAffectedResourceCount(s)}getResourceNameWithCount(e){return ds(Ue.nSources,{n:e})}#t({url:e,lineNumber:s,columnNumber:t}){const i=document.createElement("td"),n={columnNumber:t,lineNumber:s,tabStop:!0,showColumnNumber:!1,inlineFrameIndex:0},r=Ae.linkifyURL(e,n);r.setAttribute("jslog",`${H("source-location").track({click:!0})}`),i.appendChild(r);const d=document.createElement("tr");d.classList.add("affected-resource-source"),d.appendChild(i),this.affectedResources.appendChild(d)}update(){this.clear(),this.#e(this.issue.sources())}}const Be={nTrackingSites:"{n, plural, =1 {1 potentially tracking website} other {# potentially tracking websites}}"},us=f("panels/issues/AffectedTrackingSitesView.ts",Be),hs=g.bind(void 0,us);class ps extends C{getResourceNameWithCount(e){return hs(Be.nTrackingSites,{n:e})}update(){this.clear();const e=this.issue.getBounceTrackingSites();let s=0;for(const t of e){const i=document.createElement("tr");i.classList.add("affected-resource-directive"),this.appendIssueDetailCell(i,t),this.affectedResources.appendChild(i),s++}this.updateAffectedResourceCount(s)}}const k={nViolations:"{n, plural, =1 {# violation} other {# violations}}",element:"Element",invalidHeaderValue:"Invalid Header Value",request:"Request",untrustworthyOrigin:"Untrustworthy origin"},fs=f("panels/issues/AttributionReportingIssueDetailsView.ts",k),x=g.bind(void 0,fs);class gs extends C{getResourceNameWithCount(e){return x(k.nViolations,{n:e})}update(){this.clear();const e=this.issue.getAttributionReportingIssues(),s=e.values().next();s.done?this.updateAffectedResourceCount(0):this.#e(s.value.code(),e)}#e(e,s){const t=document.createElement("tr");switch(e){case"AttributionReportingIssue::InvalidRegisterSourceHeader":case"AttributionReportingIssue::InvalidRegisterTriggerHeader":case"AttributionReportingIssue::InvalidRegisterOsSourceHeader":case"AttributionReportingIssue::InvalidRegisterOsTriggerHeader":case"AttributionReportingIssue::OsSourceIgnored":case"AttributionReportingIssue::OsTriggerIgnored":case"AttributionReportingIssue::SourceIgnored":case"AttributionReportingIssue::TriggerIgnored":this.appendColumnTitle(t,x(k.request)),this.appendColumnTitle(t,x(k.invalidHeaderValue));break;case"AttributionReportingIssue::InsecureContext":case"AttributionReportingIssue::UntrustworthyReportingOrigin":this.appendColumnTitle(t,x(k.element)),this.appendColumnTitle(t,x(k.request)),this.appendColumnTitle(t,x(k.untrustworthyOrigin));break;case"AttributionReportingIssue::PermissionPolicyDisabled":this.appendColumnTitle(t,x(k.element)),this.appendColumnTitle(t,x(k.request));break;case"AttributionReportingIssue::SourceAndTriggerHeaders":case"AttributionReportingIssue::WebAndOsHeaders":this.appendColumnTitle(t,x(k.request));break;case"AttributionReportingIssue::NavigationRegistrationWithoutTransientUserActivation":this.appendColumnTitle(t,x(k.element));break}this.affectedResources.appendChild(t);let i=0;for(const n of s)i++,this.#t(e,n);this.updateAffectedResourceCount(i)}async#t(e,s){const t=document.createElement("tr");t.classList.add("affected-resource-directive");const i=s.issueDetails;switch(e){case"AttributionReportingIssue::InvalidRegisterSourceHeader":case"AttributionReportingIssue::InvalidRegisterTriggerHeader":case"AttributionReportingIssue::InvalidRegisterOsSourceHeader":case"AttributionReportingIssue::InvalidRegisterOsTriggerHeader":case"AttributionReportingIssue::OsSourceIgnored":case"AttributionReportingIssue::OsTriggerIgnored":case"AttributionReportingIssue::SourceIgnored":case"AttributionReportingIssue::TriggerIgnored":this.#i(t,i.request),this.appendIssueDetailCell(t,i.invalidParameter||"");break;case"AttributionReportingIssue::InsecureContext":case"AttributionReportingIssue::UntrustworthyReportingOrigin":await this.#s(t,s),this.#i(t,i.request),this.appendIssueDetailCell(t,i.invalidParameter||"");break;case"AttributionReportingIssue::PermissionPolicyDisabled":await this.#s(t,s),this.#i(t,i.request);break;case"AttributionReportingIssue::SourceAndTriggerHeaders":case"AttributionReportingIssue::WebAndOsHeaders":this.#i(t,i.request);break;case"AttributionReportingIssue::NavigationRegistrationWithoutTransientUserActivation":await this.#s(t,s);break}this.affectedResources.appendChild(t)}async#s(e,s){const t=s.issueDetails;if(t.violatingNodeId!==void 0){const i=s.model()?.target()||null;e.appendChild(await this.createElementCell({backendNodeId:t.violatingNodeId,target:i,nodeName:"Attribution source element"},s.getCategory()))}else this.appendIssueDetailCell(e,"")}#i(e,s){if(!s){this.appendIssueDetailCell(e,"");return}const t={additionalOnClickAction(){y.issuesPanelResourceOpened("AttributionReporting","Request")}};e.appendChild(this.createRequestCell(s,t))}}const o={nRequests:"{n, plural, =1 {# request} other {# requests}}",warning:"warning",blocked:"blocked",status:"Status",request:"Request",resourceAddressSpace:"Resource Address",initiatorAddressSpace:"Initiator Address",secure:"secure",insecure:"insecure",initiatorContext:"Initiator Context",preflightRequestIfProblematic:"Preflight Request (if problematic)",preflightRequest:"Preflight Request",header:"Header",problem:"Problem",invalidValue:"Invalid Value (if available)",problemMissingHeader:"Missing Header",problemMultipleValues:"Multiple Values",problemInvalidValue:"Invalid Value",preflightDisallowedRedirect:"Response to preflight was a redirect",preflightInvalidStatus:"HTTP status of preflight request didn't indicate success",allowedOrigin:"Allowed Origin (from header)",allowCredentialsValueFromHeader:"`Access-Control-Allow-Credentials` Header Value",disallowedRequestMethod:"Disallowed Request Method",disallowedRequestHeader:"Disallowed Request Header",sourceLocation:"Source Location",unsupportedScheme:"Unsupported Scheme",failedRequest:"Failed Request"},ms=f("panels/issues/CorsIssueDetailsView.ts",o),a=g.bind(void 0,ms);class T extends C{constructor(e,s,t){super(e,s,t),this.affectedResourcesCountElement.classList.add("cors-issue-affected-resource-label")}#e(e,s){const t=document.createElement("td");s?(t.classList.add("affected-resource-report-only-status"),t.textContent=a(o.warning)):(t.classList.add("affected-resource-blocked-status"),t.textContent=a(o.blocked)),e.appendChild(t)}getResourceNameWithCount(e){return a(o.nRequests,{n:e})}#t(e,s){const t=document.createElement("tr");switch(this.appendColumnTitle(t,a(o.request)),this.appendColumnTitle(t,a(o.status)),e){case"CorsIssue::InvalidHeaders":this.appendColumnTitle(t,a(o.preflightRequestIfProblematic)),this.appendColumnTitle(t,a(o.header)),this.appendColumnTitle(t,a(o.problem)),this.appendColumnTitle(t,a(o.invalidValue));break;case"CorsIssue::WildcardOriginWithCredentials":this.appendColumnTitle(t,a(o.preflightRequestIfProblematic));break;case"CorsIssue::PreflightResponseInvalid":this.appendColumnTitle(t,a(o.preflightRequest)),this.appendColumnTitle(t,a(o.problem));break;case"CorsIssue::OriginMismatch":this.appendColumnTitle(t,a(o.preflightRequestIfProblematic)),this.appendColumnTitle(t,a(o.initiatorContext)),this.appendColumnTitle(t,a(o.allowedOrigin));break;case"CorsIssue::AllowCredentialsRequired":this.appendColumnTitle(t,a(o.preflightRequestIfProblematic)),this.appendColumnTitle(t,a(o.allowCredentialsValueFromHeader));break;case"CorsIssue::InsecurePrivateNetwork":this.appendColumnTitle(t,a(o.resourceAddressSpace)),this.appendColumnTitle(t,a(o.initiatorAddressSpace)),this.appendColumnTitle(t,a(o.initiatorContext));break;case"CorsIssue::PreflightAllowPrivateNetworkError":this.appendColumnTitle(t,a(o.preflightRequest)),this.appendColumnTitle(t,a(o.invalidValue)),this.appendColumnTitle(t,a(o.initiatorAddressSpace)),this.appendColumnTitle(t,a(o.initiatorContext));break;case"CorsIssue::PreflightMissingPrivateNetworkAccessId":case"CorsIssue::PreflightMissingPrivateNetworkAccessName":this.appendColumnTitle(t,a(o.preflightRequest)),this.appendColumnTitle(t,a(o.invalidValue)),this.appendColumnTitle(t,a(o.resourceAddressSpace)),this.appendColumnTitle(t,a(o.initiatorAddressSpace)),this.appendColumnTitle(t,a(o.initiatorContext));break;case"CorsIssue::MethodDisallowedByPreflightResponse":this.appendColumnTitle(t,a(o.preflightRequest)),this.appendColumnTitle(t,a(o.disallowedRequestMethod));break;case"CorsIssue::HeaderDisallowedByPreflightResponse":this.appendColumnTitle(t,a(o.preflightRequest)),this.appendColumnTitle(t,a(o.disallowedRequestHeader));break;case"CorsIssue::RedirectContainsCredentials":break;case"CorsIssue::DisallowedByMode":this.appendColumnTitle(t,a(o.initiatorContext)),this.appendColumnTitle(t,a(o.sourceLocation));break;case"CorsIssue::CorsDisabledScheme":this.appendColumnTitle(t,a(o.initiatorContext)),this.appendColumnTitle(t,a(o.sourceLocation)),this.appendColumnTitle(t,a(o.unsupportedScheme));break;case"CorsIssue::NoCorsRedirectModeNotFollow":this.appendColumnTitle(t,a(o.sourceLocation));break}this.affectedResources.appendChild(t);let i=0;for(const n of s)i++,this.#i(e,n);this.updateAffectedResourceCount(i)}#s(e,s){if(s===void 0){this.appendIssueDetailCell(e,"");return}this.appendIssueDetailCell(e,a(s?o.secure:o.insecure))}static getHeaderFromError(e){switch(e){case"InvalidAllowHeadersPreflightResponse":return"Access-Control-Allow-Headers";case"InvalidAllowMethodsPreflightResponse":case"MethodDisallowedByPreflightResponse":return"Access-Control-Allow-Methods";case"PreflightMissingAllowOriginHeader":case"PreflightMultipleAllowOriginValues":case"PreflightInvalidAllowOriginValue":case"MissingAllowOriginHeader":case"MultipleAllowOriginValues":case"InvalidAllowOriginValue":case"WildcardOriginNotAllowed":case"PreflightWildcardOriginNotAllowed":case"AllowOriginMismatch":case"PreflightAllowOriginMismatch":return"Access-Control-Allow-Origin";case"InvalidAllowCredentials":case"PreflightInvalidAllowCredentials":return"Access-Control-Allow-Credentials";case"PreflightMissingAllowPrivateNetwork":case"PreflightInvalidAllowPrivateNetwork":return"Access-Control-Allow-Private-Network";case"RedirectContainsCredentials":case"PreflightDisallowedRedirect":return"Location";case"PreflightInvalidStatus":return"Status-Code";case"PreflightMissingPrivateNetworkAccessId":return"Private-Network-Access-Id";case"PreflightMissingPrivateNetworkAccessName":return"Private-Network-Access-Name"}return""}static getProblemFromError(e){switch(e.corsError){case"InvalidAllowHeadersPreflightResponse":case"InvalidAllowMethodsPreflightResponse":case"PreflightInvalidAllowOriginValue":case"InvalidAllowOriginValue":return a(o.problemInvalidValue);case"PreflightMultipleAllowOriginValues":case"MultipleAllowOriginValues":return a(o.problemMultipleValues);case"MissingAllowOriginHeader":case"PreflightMissingAllowOriginHeader":return a(o.problemMissingHeader);case"PreflightInvalidStatus":return a(o.preflightInvalidStatus);case"PreflightDisallowedRedirect":return a(o.preflightDisallowedRedirect);case"InvalidResponse":return a(o.failedRequest)}throw new Error("Invalid Argument")}#i(e,s){const t=document.createElement("tr");t.classList.add("affected-resource-directive");const i=s.details(),n=i.corsErrorStatus,r=i.corsErrorStatus.corsError,d={section:"Response",name:T.getHeaderFromError(r)},l={additionalOnClickAction(){y.issuesPanelResourceOpened("Cors","Request")}};switch(e){case"CorsIssue::InvalidHeaders":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),r.includes("Preflight")?t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:d})):this.appendIssueDetailCell(t,""),this.appendIssueDetailCell(t,T.getHeaderFromError(r),"code-example"),this.appendIssueDetailCell(t,T.getProblemFromError(i.corsErrorStatus)),this.appendIssueDetailCell(t,i.corsErrorStatus.failedParameter,"code-example");break;case"CorsIssue::WildcardOriginWithCredentials":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),r.includes("Preflight")?t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:d})):this.appendIssueDetailCell(t,"");break;case"CorsIssue::PreflightResponseInvalid":{t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning);const I=r==="PreflightInvalidStatus"?{section:"General",name:"Status-Code"}:d;t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:I})),this.appendIssueDetailCell(t,T.getProblemFromError(i.corsErrorStatus));break}case"CorsIssue::OriginMismatch":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),r.includes("Preflight")?t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:d})):this.appendIssueDetailCell(t,""),this.appendIssueDetailCell(t,i.initiatorOrigin??"","code-example"),this.appendIssueDetailCell(t,i.corsErrorStatus.failedParameter,"code-example");break;case"CorsIssue::AllowCredentialsRequired":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),r.includes("Preflight")?t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:d})):this.appendIssueDetailCell(t,""),this.appendIssueDetailCell(t,i.corsErrorStatus.failedParameter,"code-example");break;case"CorsIssue::InsecurePrivateNetwork":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),this.appendIssueDetailCell(t,i.resourceIPAddressSpace??""),this.appendIssueDetailCell(t,i.clientSecurityState?.initiatorIPAddressSpace??""),this.#s(t,i.clientSecurityState?.initiatorIsSecureContext);break;case"CorsIssue::PreflightAllowPrivateNetworkError":{t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:d})),this.appendIssueDetailCell(t,i.corsErrorStatus.failedParameter,"code-example"),this.appendIssueDetailCell(t,i.clientSecurityState?.initiatorIPAddressSpace??""),this.#s(t,i.clientSecurityState?.initiatorIsSecureContext);break}case"CorsIssue::MethodDisallowedByPreflightResponse":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:d})),this.appendIssueDetailCell(t,i.corsErrorStatus.failedParameter,"code-example");break;case"CorsIssue::HeaderDisallowedByPreflightResponse":t.appendChild(this.createRequestCell(i.request,{...l,highlightHeader:{section:"Request",name:n.failedParameter}})),this.#e(t,i.isWarning),t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:{section:"Response",name:"Access-Control-Allow-Headers"}})),this.appendIssueDetailCell(t,i.corsErrorStatus.failedParameter,"code-example");break;case"CorsIssue::RedirectContainsCredentials":t.appendChild(this.createRequestCell(i.request,{...l,highlightHeader:{section:"Response",name:T.getHeaderFromError(r)}})),this.#e(t,i.isWarning);break;case"CorsIssue::DisallowedByMode":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),this.appendIssueDetailCell(t,i.initiatorOrigin??"","code-example"),this.appendSourceLocation(t,i.location,s.model()?.getTargetIfNotDisposed());break;case"CorsIssue::CorsDisabledScheme":t.appendChild(this.createRequestCell(i.request,{...l,highlightHeader:{section:"Response",name:T.getHeaderFromError(r)}})),this.#e(t,i.isWarning),this.appendIssueDetailCell(t,i.initiatorOrigin??"","code-example"),this.appendSourceLocation(t,i.location,s.model()?.getTargetIfNotDisposed()),this.appendIssueDetailCell(t,i.corsErrorStatus.failedParameter??"","code-example");break;case"CorsIssue::NoCorsRedirectModeNotFollow":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),this.appendSourceLocation(t,i.location,s.model()?.getTargetIfNotDisposed());break;case"CorsIssue::PreflightMissingPrivateNetworkAccessId":case"CorsIssue::PreflightMissingPrivateNetworkAccessName":t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning),t.appendChild(this.createRequestCell(i.request,{...l,linkToPreflight:!0,highlightHeader:d})),this.appendIssueDetailCell(t,T.getHeaderFromError(r)),this.appendIssueDetailCell(t,i.resourceIPAddressSpace??""),this.appendIssueDetailCell(t,i.clientSecurityState?.initiatorIPAddressSpace??""),this.#s(t,i.clientSecurityState?.initiatorIsSecureContext);break;default:t.appendChild(this.createRequestCell(i.request,l)),this.#e(t,i.isWarning);break}this.affectedResources.appendChild(t)}update(){this.clear();const e=this.issue.getCorsIssues(),s=e.values().next();s.done?this.updateAffectedResourceCount(0):this.#t(s.value.code(),e)}}const J={nResources:"{n, plural, =1 {# resource} other {# resources}}",frameId:"Frame",violatingNode:"Violating node"},Cs=f("panels/issues/GenericIssueDetailsView.ts",J),ie=g.bind(void 0,Cs);class Is extends C{getResourceNameWithCount(e){return ie(J.nResources,{n:e})}#e(e){const s=document.createElement("tr");e.values().next().value?.details()?.frameId&&this.appendColumnTitle(s,ie(J.frameId)),this.affectedResources.appendChild(s);let i=0;for(const n of e)(n.details().frameId||n.details().violatingNodeId)&&(i++,this.#t(n));this.updateAffectedResourceCount(i)}async#t(e){const s=document.createElement("tr");s.classList.add("affected-resource-directive");const t=e.details();if(t.frameId&&s.appendChild(this.createFrameCell(t.frameId,e.getCategory())),t.violatingNodeId){const i=e.model()?.target()||null;s.appendChild(await this.createElementCell({backendNodeId:t.violatingNodeId,nodeName:this.violatingNodeIdName(t.errorType),target:i},e.getCategory()))}this.affectedResources.appendChild(s)}violatingNodeIdName(e){switch(e){case"FormLabelForNameError":return gt("Label");default:return ie(J.violatingNode)}}update(){this.clear();const e=this.issue.getGenericIssues();e.size>0?this.#e(e):this.updateAffectedResourceCount(0)}}const b={name:"Name",blocked:"blocked",nRequests:"{n, plural, =1 {# request} other {# requests}}",nResources:"{n, plural, =1 {# resource} other {# resources}}",restrictionStatus:"Restriction Status",warned:"Warned",affectedResources:"Affected Resources",learnMoreS:"Learn more: {PH1}",automaticallyUpgraded:"automatically upgraded",hideIssuesLikeThis:"Hide issues like this",unhideIssuesLikeThis:"Unhide issues like this"},bs=f("panels/issues/IssueView.ts",b),v=g.bind(void 0,bs);class ws extends C{#e(e){let s=0;for(const t of e){const i=document.createElement("tr");i.classList.add("affected-resource-request");const n=this.issue.getCategory(),r=Fe.get(n)||"headers-component";i.appendChild(this.createRequestCell(t,{networkTab:r,additionalOnClickAction(){y.issuesPanelResourceOpened(n,"Request")}})),this.affectedResources.appendChild(i),s++}this.updateAffectedResourceCount(s)}getResourceNameWithCount(e){return v(b.nRequests,{n:e})}update(){this.clear();for(const e of this.issue.getBlockedByResponseDetails()){this.updateAffectedResourceCount(0);return}if(this.issue.getCategory()==="MixedContent"){this.updateAffectedResourceCount(0);return}this.#e(this.issue.requests())}}const Fe=new Map([["Cookie","cookies"],["CrossOriginEmbedderPolicy","headers-component"],["MixedContent","headers-component"]]);class he extends C{#e(e){const s=document.createElement("tr");this.appendColumnTitle(s,v(b.name)),this.appendColumnTitle(s,v(b.restrictionStatus)),this.affectedResources.appendChild(s);let t=0;for(const i of e){const n=i.getDetails();this.appendAffectedMixedContent(n),t++}this.updateAffectedResourceCount(t)}getResourceNameWithCount(e){return v(b.nResources,{n:e})}appendAffectedMixedContent(e){const s=document.createElement("tr");if(s.classList.add("affected-resource-mixed-content"),e.request){const t=Fe.get(this.issue.getCategory())||"headers-component";s.appendChild(this.createRequestCell(e.request,{networkTab:t,additionalOnClickAction(){y.issuesPanelResourceOpened("MixedContent","Request")}}))}else{const t=Bt(e.insecureURL),i=this.appendIssueDetailCell(s,t,"affected-resource-mixed-content-info");i.title=e.insecureURL}this.appendIssueDetailCell(s,he.translateStatus(e.resolutionStatus),"affected-resource-mixed-content-info"),this.affectedResources.appendChild(s)}static translateStatus(e){switch(e){case"MixedContentBlocked":return v(b.blocked);case"MixedContentAutomaticallyUpgraded":return v(b.automaticallyUpgraded);case"MixedContentWarning":return v(b.warned)}}update(){this.clear(),this.#e(this.issue.getMixedContentIssues())}}class N extends A{#e;#t;toggleOnClick;affectedResources;#s;#i;#n=null;#r;#l;#a=!0;#o;#c=!1;constructor(e,s){super(),this.#e=e,this.#t=s,this.#l=new mt(250),this.toggleOnClick=!0,this.listItemElement.classList.add("issue"),this.childrenListElement.classList.add("issue-body"),this.childrenListElement.classList.add(N.getBodyCSSClass(this.#e.getKind())),this.affectedResources=this.#m(),this.#s=[new zt(this,this.#e,"affected-cookies"),new ue(this,this.#e,"affected-elements"),new ws(this,this.#e,"affected-requests"),new he(this,this.#e,"mixed-content-details"),new cs(this,this.#e,"affected-sources"),new ss(this,this.#e,"heavy-ad-details"),new Gt(this,this.#e,"directives-details"),new Wt(this,this.#e,"blocked-by-response-details"),new as(this,this.#e,"sab-details"),new Yt(this,this.#e,"low-contrast-details"),new T(this,this.#e,"cors-details"),new Is(this,this.#e,"generic-details"),new Zt(this,this.#e,"affected-documents"),new gs(this,this.#e,"attribution-reporting-details"),new jt(this,this.#e,"affected-raw-cookies"),new ps(this,this.#e,"tracking-sites-details"),new rs(this,this.#e,"metadata-allowed-sites-details")],this.#o=new ce,this.#i=null,this.#r=!1}setIssue(e){this.#e!==e&&(this.#a=!0),this.#e=e,this.#s.forEach(s=>s.setIssue(e))}static getBodyCSSClass(e){switch(e){case"BreakingChange":return"issue-kind-breaking-change";case"PageError":return"issue-kind-page-error";case"Improvement":return"issue-kind-improvement"}}getIssueTitle(){return this.#t.title}onattach(){if(!this.#c){this.createContent();return}this.update()}createContent(){this.#g(),this.#C(),this.appendChild(this.affectedResources);const e=[];for(const s of this.#s)this.appendAffectedResource(s),s.update(),s.isEmpty()||e.push(s);this.#p(e),this.#f(),this.updateAffectedResourceVisibility(),this.#c=!0}appendAffectedResource(e){this.affectedResources.appendChild(e)}#p(e){for(let s=0;s<e.length;s++){const t=e[s].listItemElement;V(t,s+1),$(t,e.length)}}#g(){const e=document.createElement("div");e.classList.add("header"),this.#n=new de,this.#n.classList.add("leading-issue-icon"),this.#i=document.createElement("span");const s=new le;s.data={name:"countWrapper",content:this.#i},s.classList.add("aggregated-issues-count"),e.appendChild(this.#n),e.appendChild(s);const t=document.createElement("div");t.classList.add("title"),t.textContent=this.#t.title,e.appendChild(t),this.#o&&e.appendChild(this.#o),this.#h(),this.listItemElement.appendChild(e)}onexpand(){const e=this.#e.getCategory();if(e==="Cookie"){const s=Ct.getSubCategory(this.#e.code());y.issuesPanelIssueExpanded(s)}else y.issuesPanelIssueExpanded(e);if(this.#a&&this.#u(),!this.#r){this.#r=!0;for(const s of this.#s)s.expandIfOneResource()}}#h(){if(this.#n){const e=this.#e.getKind();this.#n.data=Re(e),this.#n.title=It(e)}if(this.#i&&(this.#i.textContent=`${this.#e.getAggregatedIssuesCount()}`),this.listItemElement.classList.toggle("hidden-issue",this.#e.isHidden()),this.#o){const e={menuItemLabel:this.#e.isHidden()?v(b.unhideIssuesLikeThis):v(b.hideIssuesLikeThis),menuItemAction:()=>{const s=xe(),t=s.get();t[this.#e.code()]=this.#e.isHidden()?"Unhidden":"Hidden",s.set(t)}};this.#o.data=e}}updateAffectedResourceVisibility(){const e=this.#s.every(s=>s.isEmpty());this.affectedResources.hidden=e}#m(){const e=new A;return e.setCollapsible(!1),e.setExpandable(!0),e.expand(),e.selectable=!1,e.listItemElement.classList.add("affected-resources-label"),e.listItemElement.textContent=v(b.affectedResources),e.childrenListElement.classList.add("affected-resources"),V(e.listItemElement,2),$(e.listItemElement,this.#t.links.length===0?2:3),e}#C(){const e=new A;e.setCollapsible(!1),e.selectable=!1;const s=new Pt;s.data={tokens:this.#t.markdown},e.listItemElement.appendChild(s),V(e.listItemElement,1),$(e.listItemElement,this.#t.links.length===0?2:3),this.appendChild(e)}#f(){if(this.#t.links.length===0)return;const e=new A;e.setCollapsible(!1),e.listItemElement.classList.add("link-wrapper"),V(e.listItemElement,3),$(e.listItemElement,3);const s=e.listItemElement.createChild("ul","link-list");for(const t of this.#t.links){const i=bt`<x-link class="link devtools-link" tabindex="0" href=${t.link}>${v(b.learnMoreS,{PH1:t.linkTitle})}</x-link>`;i.setAttribute("jslog",`${H("learn-more").track({click:!0})}`),s.createChild("li").appendChild(i)}this.appendChild(e)}#u(){this.expanded&&(this.#s.forEach(e=>e.update()),this.updateAffectedResourceVisibility()),this.#a=!this.expanded,this.#h()}update(){this.#l.schedule(async()=>this.#u())}clear(){this.#s.forEach(e=>e.clear())}getIssueKind(){return this.#e.getKind()}isForHiddenIssue(){return this.#e.isHidden()}toggle(e){e||e===void 0&&!this.expanded?this.expand():this.collapse()}}const Ss=Object.freeze(Object.defineProperty({__proto__:null,IssueView:N},Symbol.toStringTag,{value:"Module"})),p={crossOriginEmbedderPolicy:"Cross Origin Embedder Policy",mixedContent:"Mixed Content",samesiteCookie:"SameSite Cookie",heavyAds:"Heavy Ads",contentSecurityPolicy:"Content Security Policy",other:"Other",lowTextContrast:"Low Text Contrast",cors:"Cross Origin Resource Sharing",groupDisplayedIssuesUnder:"Group displayed issues under associated categories",groupByCategory:"Group by category",groupDisplayedIssuesUnderKind:"Group displayed issues as Page errors, Breaking changes and Improvements",groupByKind:"Group by kind",includeCookieIssuesCausedBy:"Include cookie Issues caused by third-party sites",includeThirdpartyCookieIssues:"Include third-party cookie issues",onlyThirdpartyCookieIssues:"Only third-party cookie issues detected so far",noIssuesDetectedSoFar:"No issues detected so far",attributionReporting:"Attribution Reporting `API`",quirksMode:"Quirks Mode",generic:"Generic"},ks=f("panels/issues/IssuesPane.ts",p),m=g.bind(void 0,ks);class ne extends A{#e;constructor(e){super(),this.#e=e,this.toggleOnClick=!0,this.listItemElement.classList.add("issue-category"),this.childrenListElement.classList.add("issue-category-body")}getCategoryName(){switch(this.#e){case"CrossOriginEmbedderPolicy":return m(p.crossOriginEmbedderPolicy);case"MixedContent":return m(p.mixedContent);case"Cookie":return m(p.samesiteCookie);case"HeavyAd":return m(p.heavyAds);case"ContentSecurityPolicy":return m(p.contentSecurityPolicy);case"LowTextContrast":return m(p.lowTextContrast);case"Cors":return m(p.cors);case"AttributionReporting":return m(p.attributionReporting);case"QuirksMode":return m(p.quirksMode);case"Generic":return m(p.generic);case"Other":return m(p.other)}}onattach(){this.#t()}#t(){const e=document.createElement("div");e.classList.add("header");const s=document.createElement("div");s.classList.add("title"),s.textContent=this.getCategoryName(),e.appendChild(s),this.listItemElement.appendChild(e)}}function ae(){return ye.instance().createSetting("group-issues-by-category",!1)}class We extends wt{#e;#t;#s;#i;#n;#r;#l;#a;#o;#c=Promise.resolve();constructor(){super(!0),this.element.setAttribute("jslog",`${kt("issues")}`),this.contentElement.classList.add("issues-pane"),this.#e=new Map,this.#s=new Map,this.#t=new Map,this.#i=null,this.#p(),this.#n=new vt,this.#n.setShowSelectionOnKeyboardFocus(!0),this.#n.contentElement.classList.add("issues"),this.contentElement.appendChild(this.#n.element),this.#r=new Y,this.#n.appendChild(this.#r),this.#l=document.createElement("div"),this.#l.classList.add("issues-pane-no-issues"),this.contentElement.appendChild(this.#l),this.#a=F.instance(),this.#o=new Pe(this.#a),this.#o.addEventListener("AggregatedIssueUpdated",this.#g,this),this.#o.addEventListener("FullUpdateRequired",this.#b,this),this.#r.hidden=this.#a.numberOfHiddenIssues()===0,this.#b(),this.#a.addEventListener("IssuesCountUpdated",this.#I,this)}elementsToRestoreScrollPositionsFor(){return[this.#n.element]}#p(){const e=this.contentElement.createChild("div","issues-toolbar-container");e.setAttribute("jslog",`${yt()}`),new Ie("issues-toolbar-left",e);const s=new Ie("issues-toolbar-right",e),t=ae(),i=new Z(t,m(p.groupDisplayedIssuesUnder),m(p.groupByCategory));i.setVisible(!1),s.appendToolbarItem(i),t.addChangeListener(()=>{this.#d(!0)});const n=K(),r=new Z(n,m(p.groupDisplayedIssuesUnderKind),m(p.groupByKind));s.appendToolbarItem(r),n.addChangeListener(()=>{this.#d(!0)}),r.setVisible(!0);const d=Rt();this.#i=new Z(d,m(p.includeCookieIssuesCausedBy),m(p.includeThirdpartyCookieIssues)),s.appendToolbarItem(this.#i),this.setDefaultFocusedElement(this.#i.inputElement),s.appendSeparator();const l=new xt;l.data={tooltipCallback:()=>{const L=St(F.instance(),!1);l.title=L},displayMode:"ShowAlways",issuesManager:F.instance()},l.id="console-issues-counter",l.setAttribute("jslog",`${At("issues")}`);const I=new Et(l);return s.appendToolbarItem(I),{toolbarContainer:e}}#g(e){this.#h(e.data)}#h(e){this.#c=this.#c.then(()=>this.#m(e))}async#m(e){let s=this.#t.get(e.aggregationKey());if(s){s.setIssue(e);const t=this.#f(e);s.parent!==t&&!(t instanceof Lt&&s.parent===t.rootElement())&&(s.parent?.removeChild(s),this.appendIssueViewToParent(s,t))}else{const t=e.getDescription();if(!t){console.warn("Could not find description for issue code:",e.code());return}const i=await Tt(t);s=new N(e,i),this.#t.set(e.aggregationKey(),s);const n=this.#f(e);this.appendIssueViewToParent(s,n)}s.update(),this.#I()}appendIssueViewToParent(e,s){s.appendChild(e,(t,i)=>t instanceof Y?1:i instanceof Y?-1:t instanceof N&&i instanceof N?t.getIssueTitle().localeCompare(i.getIssueTitle()):(console.error("The issues tree should only contain IssueView objects as direct children"),0)),s instanceof A&&this.#C(s)}#C(e){const s=e.childrenListNode.children;let t=0;for(let i=0;i<s.length;i++){const n=s[i];n.classList.contains("issue")&&(V(n,++t),$(n,s.length/2))}}#f(e){if(e.isHidden())return this.#r;if(K().get()){const s=e.getKind(),t=this.#s.get(s);if(t)return t;const i=new te(s);return this.#n.appendChild(i,(n,r)=>n instanceof te&&r instanceof te?Vt(n,r):0),this.#s.set(s,i),i}if(ae().get()){const s=e.getCategory(),t=this.#e.get(s);if(t)return t;const i=new ne(s);return this.#n.appendChild(i,(n,r)=>n instanceof ne&&r instanceof ne?n.getCategoryName().localeCompare(r.getCategoryName()):0),this.#e.set(s,i),i}return this.#n}#u(e,s){for(const[t,i]of Array.from(e.entries()))s?.has(t)||(i.parent&&i.parent.removeChild(i),e.delete(t))}#b(){this.#d(!1)}#d(e){if(this.#u(this.#e,e?void 0:this.#o.aggregatedIssueCategories()),this.#u(this.#s,e?void 0:this.#o.aggregatedIssueKinds()),this.#u(this.#t,e?void 0:this.#o.aggregatedIssueCodes()),this.#o)for(const s of this.#o.aggregatedIssues())this.#h(s);this.#I()}#w(){for(const e of this.#s.values()){const s=this.#a.numberOfIssues(e.getKind());e.update(s)}}#I(){this.#k(this.#a.numberOfIssues(),this.#a.numberOfHiddenIssues()),K().get()&&this.#w()}#k(e,s){if(e>0||s>0){this.#r.hidden=s===0,this.#r.update(s),this.#n.element.hidden=!1,this.#l.style.display="none";const t=this.#n.firstChild();t&&(t.select(!0),this.setDefaultFocusedElement(t.listItemElement))}else{this.#n.element.hidden=!0,this.#i&&this.setDefaultFocusedElement(this.#i.inputElement);const t=this.#a.numberOfAllStoredIssues()>0;this.#l.textContent=m(t?p.onlyThirdpartyCookieIssues:p.noIssuesDetectedSoFar),this.#l.style.display="flex"}}async reveal(e){await this.#c;const s=this.#o.keyForIssue(e),t=this.#t.get(s);if(t){if(t.isForHiddenIssue()&&(this.#r.expand(),this.#r.reveal()),K().get()&&!t.isForHiddenIssue()){const i=this.#s.get(t.getIssueKind());i?.expand(),i?.reveal()}t.expand(),t.reveal(),t.select(!1,!0)}}wasShown(){super.wasShown(),this.#n.registerCSSFiles([He]),this.registerCSSFiles([Ne])}}const As=Object.freeze(Object.defineProperty({__proto__:null,IssuesPane:We,getGroupIssuesByCategorySetting:ae},Symbol.toStringTag,{value:"Module"}));class vs{async reveal(e){await be.instance().showView("issues-pane");const s=be.instance().view("issues-pane");if(s){const t=await s.widget();if(t instanceof We)await t.reveal(e);else throw new Error("Expected issues pane to be an instance of IssuesPane")}}}const Es=Object.freeze(Object.defineProperty({__proto__:null,IssueRevealer:vs},Symbol.toStringTag,{value:"Module"}));export{xs as IssueAggregator,Es as IssueRevealer,Ss as IssueView,As as IssuesPane};
//# sourceMappingURL=issues-Dp_OdmaE.js.map
