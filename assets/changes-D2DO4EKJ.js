import{b as p,g,ba as w,c3 as I,cv as T,cw as D,cx as E,bi as U,c7 as k,cy as x,cz as L,cA as A,aw as d,cB as F,cC as m,aU as W,bp as M,cd as $,cD as N,cE as V,bA as h,bz as j,cF as B,cG as O,aJ as R,cs as _,b0 as z,r as H,cH as u,cI as f}from"./inspector-CyOA7R9n.js";import{w as P}from"./WorkspaceDiff-_8IW6Oi2.js";import{D as q,P as G}from"./utils-C4_HKhgT.js";import"./ScriptFormatter-CdcZyJ9a.js";const S=new CSSStyleSheet;S.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline li {
  min-height: 20px;
}

devtools-icon {
  color: var(--icon-file-default);
}

.navigator-sm-script-tree-item devtools-icon,
.navigator-script-tree-item devtools-icon,
.navigator-snippet-tree-item devtools-icon {
  color: var(--icon-file-script);
}

.navigator-sm-stylesheet-tree-item devtools-icon,
.navigator-stylesheet-tree-item devtools-icon {
  color: var(--icon-file-styles);
}

.navigator-image-tree-item devtools-icon {
  color: var(--icon-file-image);
}

.navigator-font-tree-item devtools-icon {
  color: var(--icon-file-font);
}

.tree-outline li:hover:not(.selected) .selection {
  display: block;

  & devtools-icon {
    color: var(--icon-default-hover);
  }
}

@media (forced-colors: active) {
  li,
  devtools-icon {
    forced-color-adjust: none;
    color: ButtonText !important; /* stylelint-disable-line declaration-no-important */
  }
}

/*# sourceURL=changesSidebar.css */
`);const C={sFromSourceMap:"{PH1} (from source map)"},J=p("panels/changes/ChangesSidebar.ts",C),K=g.bind(void 0,J);class b extends w(m){treeoutline;treeElements;workspaceDiff;constructor(e){super(),this.treeoutline=new I,this.treeoutline.setFocusable(!1),this.treeoutline.setComparator((t,s)=>T(t.titleAsText(),s.titleAsText())),this.treeoutline.addEventListener(D.ElementSelected,this.selectionChanged,this),E(this.treeoutline.contentElement),this.element.appendChild(this.treeoutline.element),this.element.setAttribute("jslog",`${U("sidebar").track({resize:!0})}`),this.treeElements=new Map,this.workspaceDiff=e,this.workspaceDiff.modifiedUISourceCodes().forEach(this.addUISourceCode.bind(this)),this.workspaceDiff.addEventListener("ModifiedStatusChanged",this.uiSourceCodeMofiedStatusChanged,this)}selectUISourceCode(e,t){const s=this.treeElements.get(e);s&&s.select(t)}selectedUISourceCode(){return this.treeoutline.selectedTreeElement?this.treeoutline.selectedTreeElement.uiSourceCode:null}selectionChanged(){this.dispatchEventToListeners("SelectedUISourceCodeChanged")}uiSourceCodeMofiedStatusChanged(e){e.data.isModified?this.addUISourceCode(e.data.uiSourceCode):this.removeUISourceCode(e.data.uiSourceCode)}removeUISourceCode(e){const t=this.treeElements.get(e);if(this.treeElements.delete(e),this.treeoutline.selectedTreeElement===t){const s=t.previousSibling||t.nextSibling;s?s.select(!0):(t.deselect(),this.selectionChanged())}t&&(this.treeoutline.removeChild(t),t.dispose()),this.treeoutline.rootElement().childCount()===0&&this.treeoutline.setFocusable(!1)}addUISourceCode(e){const t=new v(e);this.treeElements.set(e,t),this.treeoutline.setFocusable(!0),this.treeoutline.appendChild(t),this.treeoutline.selectedTreeElement||t.select(!0)}wasShown(){super.wasShown(),this.treeoutline.registerCSSFiles([S])}}class v extends k{uiSourceCode;eventListeners;constructor(e){super(),this.uiSourceCode=e,this.listItemElement.classList.add("navigator-"+e.contentType().name()+"-tree-item"),x(this.listItemElement);let t="document";L(this.uiSourceCode)&&(t="snippet");const s=A(t);this.setLeadingIcons([s]),this.eventListeners=[e.addEventListener(d.TitleChanged,this.updateTitle,this),e.addEventListener(d.WorkingCopyChanged,this.updateTitle,this),e.addEventListener(d.WorkingCopyCommitted,this.updateTitle,this)],this.updateTitle()}updateTitle(){let e=this.uiSourceCode.displayName();this.uiSourceCode.isDirty()&&(e="*"+e),this.title=e;let t=this.uiSourceCode.url();this.uiSourceCode.contentType().isFromSourceMap()&&(t=K(C.sFromSourceMap,{PH1:this.uiSourceCode.displayName()})),this.tooltip=t}dispose(){F(this.eventListeners)}}const ie=Object.freeze(Object.defineProperty({__proto__:null,ChangesSidebar:b,UISourceCodeTreeElement:v},Symbol.toStringTag,{value:"Module"})),y=new CSSStyleSheet;y.replaceSync(`/*
 * Copyright (c) 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

[slot="insertion-point-main"] {
  flex-direction: column;
  display: flex;
}

[slot="insertion-point-sidebar"] {
  overflow: auto;
}

.diff-container {
  flex: 1;
  overflow: auto;
}

:focus.selected {
  background-color: var(--sys-color-tonal-container);
  color: var(--sys-color-on-tonal-container);
}

.changes-toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
}

/*# sourceURL=changesView.css */
`);const i={noChanges:"No changes",binaryData:"Binary data",sInsertions:"{n, plural, =1 {# insertion (+)} other {# insertions (+)}}",sDeletions:"{n, plural, =1 {# deletion (-)} other {# deletions (-)}}",copy:"Copy"},Q=p("panels/changes/ChangesView.ts",i),o=g.bind(void 0,Q);function X(n){const e=n.reduce((l,r)=>l+(r[0]===f.Insert?r[1].length:0),0),t=n.reduce((l,r)=>l+(r[0]===f.Delete?r[1].length:0),0),s=o(i.sDeletions,{n:t});return`${o(i.sInsertions,{n:e})}, ${s}`}class a extends W{emptyWidget;workspaceDiff;changesSidebar;selectedUISourceCode;#e;diffContainer;toolbar;diffStats;diffView;constructor(){super(!0),this.element.setAttribute("jslog",`${M("changes").track({resize:!0})}`);const e=new $(!0,!1),t=new m;e.setMainWidget(t),e.show(this.contentElement),this.emptyWidget=new N(""),this.emptyWidget.show(t.element),this.workspaceDiff=P(),this.changesSidebar=new b(this.workspaceDiff),this.changesSidebar.addEventListener("SelectedUISourceCodeChanged",this.selectedUISourceCodeChanged,this),e.setSidebarWidget(this.changesSidebar),this.selectedUISourceCode=null,this.diffContainer=t.element.createChild("div","diff-container"),V(this.diffContainer),this.diffContainer.addEventListener("click",s=>this.click(s)),this.diffView=this.diffContainer.appendChild(new q),this.toolbar=new h("changes-toolbar",t.element),this.toolbar.element.setAttribute("jslog",`${j()}`),this.toolbar.appendToolbarItem(h.createActionButtonForId("changes.revert")),this.diffStats=new B(""),this.toolbar.appendToolbarItem(this.diffStats),this.toolbar.appendToolbarItem(new O),this.toolbar.appendToolbarItem(h.createActionButtonForId("changes.copy",{showLabel:!0,label(){return o(i.copy)}})),this.hideDiff(o(i.noChanges)),this.selectedUISourceCodeChanged()}selectedUISourceCodeChanged(){this.revealUISourceCode(this.changesSidebar.selectedUISourceCode()),R.instance().getAction("changes.copy").setEnabled(this.selectedUISourceCode?.contentType()===_.Stylesheet)}revert(){const e=this.selectedUISourceCode;e&&this.workspaceDiff.revertToOriginal(e)}async copy(){const e=this.selectedUISourceCode;if(!e)return;const t=await this.workspaceDiff.requestDiff(e,{shouldFormatDiff:!0});if(!t||t?.diff.length<2)return;const s=await G.formatCSSChangesFromDiff(t.diff);z.copyText(s)}click(e){if(this.selectedUISourceCode)for(const t of e.composedPath()){if(!(t instanceof HTMLElement))continue;if(t.ownerDocument.getSelection()?.toString())break;if(t.classList.contains("diff-line-content")&&t.hasAttribute("data-line-number")){let c=Number(t.dataset.lineNumber)-1;this.#e&&(c=this.#e.formattedToOriginal(c,0)[0]),H(this.selectedUISourceCode.uiLocation(c,0),!1),e.consume(!0);break}else if(t.classList.contains("diff-listing"))break}}revealUISourceCode(e){this.selectedUISourceCode!==e&&(this.selectedUISourceCode&&this.workspaceDiff.unsubscribeFromDiffChange(this.selectedUISourceCode,this.refreshDiff,this),e&&this.isShowing()&&this.workspaceDiff.subscribeToDiffChange(e,this.refreshDiff,this),this.selectedUISourceCode=e,this.refreshDiff())}wasShown(){u.instance().setFlavor(a,this),this.registerCSSFiles([y]),super.wasShown(),this.refreshDiff()}willHide(){super.willHide(),u.instance().setFlavor(a,null)}async refreshDiff(){if(!this.isShowing())return;if(!this.selectedUISourceCode){this.renderDiffRows();return}const e=this.selectedUISourceCode;if(!e.contentType().isTextType()){this.hideDiff(o(i.binaryData));return}const t=await this.workspaceDiff.requestDiff(e,{shouldFormatDiff:!0});this.selectedUISourceCode===e&&(this.#e=t?.formattedCurrentMapping,this.renderDiffRows(t?.diff))}hideDiff(e){this.diffStats.setText(""),this.toolbar.setEnabled(!1),this.diffContainer.style.display="none",this.emptyWidget.text=e,this.emptyWidget.showWidget()}renderDiffRows(e){if(!e||e.length===1&&e[0][0]===f.Equal)this.hideDiff(o(i.noChanges));else{this.diffStats.setText(X(e)),this.toolbar.setEnabled(!0),this.emptyWidget.hideWidget();const t=this.selectedUISourceCode.mimeType();this.diffContainer.style.display="block",this.diffView.data={diff:e,mimeType:t}}}}class Y{handleAction(e,t){const s=e.flavor(a);if(s===null)return!1;switch(t){case"changes.revert":return s.revert(),!0;case"changes.copy":return s.copy(),!0}return!1}}const oe=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:Y,ChangesView:a},Symbol.toStringTag,{value:"Module"}));export{ie as ChangesSidebar,oe as ChangesView};
//# sourceMappingURL=changes-D2DO4EKJ.js.map
