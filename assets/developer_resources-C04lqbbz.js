import{b as f,g as m,aU as w,cV as C,b0 as c,cW as y,cX as R,l as u,bk as S,as as E,cY as T,cZ as F,c_ as x,V as g,c$ as V,bp as I,bz as U,bA as L,d0 as N,d1 as G,d2 as M,d3 as D}from"./inspector-CyOA7R9n.js";const b=new CSSStyleSheet;b.replaceSync(`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.data-grid {
  border: none;
}

.data-grid td .url-outer {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
}

.data-grid td .url-outer .filter-highlight {
  font-weight: bold;
}

.data-grid td .url-prefix {
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.data-grid td .url-suffix {
  flex: none;
}

.data-grid td.error-message .filter-highlight {
  font-weight: bold;
}

/*# sourceURL=developerResourcesListView.css */
`);const o={status:"Status",url:"URL",initiator:"Initiator",totalBytes:"Total Bytes",error:"Error",developerResources:"Developer resources",copyUrl:"Copy URL",copyInitiatorUrl:"Copy initiator URL",pending:"pending",success:"success",failure:"failure",sBytes:"{n, plural, =1 {# byte} other {# bytes}}"},k=f("panels/developer_resources/DeveloperResourcesListView.ts",o),l=m.bind(void 0,k);class z extends w{nodeForItem;isVisibleFilter;highlightRegExp;dataGrid;constructor(t){super(!0),this.nodeForItem=new Map,this.isVisibleFilter=t,this.highlightRegExp=null;const s=[{id:"status",title:l(o.status),width:"60px",fixedWidth:!0,sortable:!0},{id:"url",title:l(o.url),width:"250px",fixedWidth:!1,sortable:!0},{id:"initiator",title:l(o.initiator),width:"80px",fixedWidth:!1,sortable:!0},{id:"size",title:l(o.totalBytes),width:"80px",fixedWidth:!0,sortable:!0,align:"right"},{id:"error-message",title:l(o.error),width:"200px",fixedWidth:!1,sortable:!0}];this.dataGrid=new C({displayName:l(o.developerResources),columns:s,editCallback:void 0,refreshCallback:void 0,deleteCallback:void 0}),this.dataGrid.setResizeMethod("last"),this.dataGrid.setStriped(!0),this.dataGrid.element.classList.add("flex-auto"),this.dataGrid.addEventListener("SortingChanged",this.sortingChanged,this),this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));const e=this.dataGrid.asWidget();e.show(this.contentElement),this.setDefaultFocusedChild(e)}select(t){const s=this.nodeForItem.get(t);s&&s.select()}selectedItem(){return this.dataGrid.selectedNode?this.dataGrid.selectedNode.item:null}populateContextMenu(t,s){const e=s.item;t.clipboardSection().appendItem(l(o.copyUrl),()=>{c.copyText(e.url)},{jslogContext:"copy-url"}),e.initiator.initiatorUrl&&t.clipboardSection().appendItem(l(o.copyInitiatorUrl),()=>{c.copyText(e.initiator.initiatorUrl)},{jslogContext:"copy-initiator-url"})}update(t){let s=!1;const e=this.dataGrid.rootNode();for(const i of t){let r=this.nodeForItem.get(i);if(r){this.isVisibleFilter(r.item)&&(s=r.refreshIfNeeded()||s);continue}r=new p(i),this.nodeForItem.set(i,r),this.isVisibleFilter(r.item)&&(e.appendChild(r),s=!0)}s&&this.sortingChanged()}reset(){this.nodeForItem.clear(),this.dataGrid.rootNode().removeChildren()}updateFilterAndHighlight(t){this.highlightRegExp=t;let s=!1;for(const e of this.nodeForItem.values()){const i=this.isVisibleFilter(e.item),r=!!e.parent;i&&e.setHighlight(this.highlightRegExp),i!==r&&(s=!0,i?this.dataGrid.rootNode().appendChild(e):e.remove())}s&&this.sortingChanged()}sortingChanged(){const t=this.dataGrid.sortColumnId();if(!t)return;const s=p.sortFunctionForColumn(t);s&&this.dataGrid.sortNodes(s,!this.dataGrid.isSortOrderAscending())}wasShown(){super.wasShown(),this.registerCSSFiles([b])}}class p extends y{item;highlightRegExp;constructor(t){super(),this.item=t,this.highlightRegExp=null}setHighlight(t){this.highlightRegExp!==t&&(this.highlightRegExp=t,this.refresh())}refreshIfNeeded(){return this.refresh(),!0}createCell(t){const s=this.createTD(t);switch(t){case"url":{u.install(s,this.item.url);const e=s.createChild("div","url-outer"),i=e.createChild("div","url-prefix"),r=e.createChild("div","url-suffix"),d=/^(.*)(\/[^/]*)$/.exec(this.item.url);i.textContent=d?d[1]:this.item.url,r.textContent=d?d[2]:"",this.highlightRegExp&&this.highlight(e,this.item.url),this.setCellAccessibleName(this.item.url,s,t);break}case"initiator":{const e=this.item.initiator.initiatorUrl||"";s.textContent=e,u.install(s,e),this.setCellAccessibleName(e,s,t),s.onmouseenter=()=>{const i=this.item.initiator.frameId,r=i?S.instance().getFrame(i):null;r&&r.highlight()},s.onmouseleave=()=>E.hideDOMNodeHighlight();break}case"status":{this.item.success===null?s.textContent=l(o.pending):s.textContent=this.item.success?l(o.success):l(o.failure);break}case"size":{const e=this.item.size;if(e!==null){const i=s.createChild("span");i.textContent=R(e);const r=l(o.sBytes,{n:e});this.setCellAccessibleName(r,s,t)}break}case"error-message":{s.classList.add("error-message"),this.item.errorMessage&&(s.textContent=this.item.errorMessage,this.highlightRegExp&&this.highlight(s,this.item.errorMessage));break}}return s}highlight(t,s){if(!this.highlightRegExp)return;const e=this.highlightRegExp.exec(s);if(!e||!e.length)return;const i=new T(e.index,e[0].length);F(t,[i],"filter-highlight")}static sortFunctionForColumn(t){const s=e=>e===null?-1:Number(e);switch(t){case"url":return(e,i)=>e.item.url.localeCompare(i.item.url);case"status":return(e,i)=>s(e.item.success)-s(i.item.success);case"size":return(e,i)=>s(e.item.size)-s(i.item.size);case"initiator":return(e,i)=>(e.item.initiator.initiatorUrl||"").localeCompare(i.item.initiator.initiatorUrl||"");case"error-message":return(e,i)=>(e.item.errorMessage||"").localeCompare(i.item.errorMessage||"");default:return console.assert(!1,"Unknown sort field: "+t),null}}}const v=new CSSStyleSheet;v.replaceSync(`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

.developer-resource-view-toolbar-container {
  display: flex;
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.developer-resource-view-toolbar {
  display: inline-block;
  width: 100%;
}

.developer-resource-view-toolbar-summary {
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  padding-left: 5px;
  flex: 0 0 19px;
  display: flex;
  padding-right: 5px;
}

.developer-resource-view-toolbar-summary .developer-resource-view-message {
  padding-top: 2px;
  padding-left: 1ex;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.developer-resource-view-results {
  overflow-y: auto;
  display: flex;
  flex: auto;
}

/*# sourceURL=developerResourcesView.css */
`);const a={filterByText:"Filter by URL and error",loadHttpsDeveloperResources:"Load `HTTP(S)` developer resources through the website you inspect, not through DevTools",enableLoadingThroughTarget:"Load through website",resourcesCurrentlyLoading:"{PH1} resources, {PH2} currently loading",resources:"{n, plural, =1 {# resource} other {# resources}}"},A=f("panels/developer_resources/DeveloperResourcesView.ts",a),n=m.bind(void 0,A);class H{async reveal(t){const e=x.instance().getResourcesLoaded().get(t.key);if(e)return await g.instance().showView("developer-resources"),(await g.instance().view("developer-resources").widget()).select(e)}}class B extends V{textFilterRegExp;filterInput;coverageResultsElement;listView;statusToolbarElement;statusMessageElement;loader;constructor(){super(!0),this.element.setAttribute("jslog",`${I("developer-resources").track({resize:!0})}`);const t=this.contentElement.createChild("div","developer-resource-view-toolbar-container");t.setAttribute("jslog",`${U()}`);const s=new L("developer-resource-view-toolbar",t);this.textFilterRegExp=null,this.filterInput=new N(n(a.filterByText),1),this.filterInput.addEventListener("TextChanged",this.onFilterChanged,this),s.appendToolbarItem(this.filterInput);const e=G(),i=new M(e,n(a.loadHttpsDeveloperResources),n(a.enableLoadingThroughTarget));s.appendToolbarItem(i),this.coverageResultsElement=this.contentElement.createChild("div","developer-resource-view-results"),this.listView=new z(this.isVisible.bind(this)),this.listView.show(this.coverageResultsElement),this.statusToolbarElement=this.contentElement.createChild("div","developer-resource-view-toolbar-summary"),this.statusMessageElement=this.statusToolbarElement.createChild("div","developer-resource-view-message"),this.loader=x.instance(),this.loader.addEventListener("Update",this.update,this),this.update()}async doUpdate(){const t=this.listView.selectedItem();this.listView.reset(),this.listView.update(this.loader.getScopedResourcesLoaded().values()),t&&this.listView.select(t),this.updateStats()}async select(t){await this.lastUpdatePromise,this.listView.select(t)}async selectedItem(){return await this.lastUpdatePromise,this.listView.selectedItem()}updateStats(){const{loading:t,resources:s}=this.loader.getScopedNumberOfResources();t>0?this.statusMessageElement.textContent=n(a.resourcesCurrentlyLoading,{PH1:s,PH2:t}):this.statusMessageElement.textContent=n(a.resources,{n:s})}isVisible(t){return!this.textFilterRegExp||this.textFilterRegExp.test(t.url)||this.textFilterRegExp.test(t.errorMessage||"")}onFilterChanged(){if(!this.listView)return;const t=this.filterInput.value();this.textFilterRegExp=t?D(t,"i"):null,this.listView.updateFilterAndHighlight(this.textFilterRegExp),this.updateStats()}wasShown(){super.wasShown(),this.registerCSSFiles([v])}}const W=Object.freeze(Object.defineProperty({__proto__:null,DeveloperResourcesRevealer:H,DeveloperResourcesView:B},Symbol.toStringTag,{value:"Module"}));export{W as DeveloperResourcesView};
//# sourceMappingURL=developer_resources-C04lqbbz.js.map
