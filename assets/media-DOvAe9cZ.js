import{b as y,g as w,bP as $e,bS as u,aU as g,bi as L,bR as _e,fr as Ve,ce as re,bt as Ne,aj as Re,bc as ne,bs as Ae,bu as Be,bA as Oe,du as je,dv as He,ds as ze,bq as Ge,d0 as Ue,fs as oe,aZ as We,d_ as Je,dZ as Ze,eA as Y,cj as le,b6 as Ke,cA as q,cc as Xe,ci as Ye,i as _}from"./inspector-CyOA7R9n.js";import{J as de,P as he}from"./PreviewFactory-7rWtg079.js";import{e as qe,f as Qe}from"./timelineOverviewInfo.css-BT4HnMd6.js";import"./DropTarget-DDkHhLsd.js";import"./ScriptFormatter-CdcZyJ9a.js";const ce=new CSSStyleSheet;ce.replaceSync(`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.no-border-top-datagrid > .data-grid {
  /* make sure there is no top border, it ruins the menu view */
  border-top: 0;
}

.event-display-table-contents-table-container > .widget > .data-grid {
  height: 100%;
}

.data-grid .event-display-table-basic-text-table-entry {
  line-height: 26px;
}

.event-display-table-contents-json-wrapper > .json-view {
  overflow: visible;
}

/*# sourceURL=eventDisplayTable.css */
`);const E={timestamp:"Timestamp",eventName:"Event name",value:"Value",eventDisplay:"Event display"},et=y("panels/media/EventDisplayTable.ts",E),k=w.bind(void 0,et);class ue extends $e{expandableElement;constructor(e){super(e,!1),this.expandableElement=null}createCell(e){const t=this.createTD(e),s=this.data[e];if(e==="value"){const i=t.createChild("div","event-display-table-contents-json-wrapper");this.expandableElement=new de(new he(s,"",""),!0),this.expandableElement.markAsRoot(),this.expandableElement.show(i)}else t.classList.add("event-display-table-basic-text-table-entry"),u(t,s);return t}}class D extends g{dataGrid;firstEventTime;constructor(){super(),this.element.setAttribute("jslog",`${L("events")}`),this.contentElement.classList.add("event-display-table-contents-table-container"),this.dataGrid=this.createDataGrid([{id:"display-timestamp",title:k(E.timestamp),weight:1,sortable:!1},{id:"event",title:k(E.eventName),weight:2,sortable:!1},{id:"value",title:k(E.value),weight:7,sortable:!1}]),this.firstEventTime=0,this.dataGrid.setStriped(!0),this.dataGrid.asWidget().show(this.contentElement)}createDataGrid(e){const t=[];for(const i of e)t.push(D.convertToGridDescriptor(i));const s=new _e({displayName:k(E.eventDisplay),columns:t,deleteCallback:void 0,editCallback:void 0,refreshCallback:void 0});return s.asWidget().contentElement.classList.add("no-border-top-datagrid"),s}onEvent(e){this.firstEventTime===0&&typeof e.timestamp=="number"&&(this.firstEventTime=e.timestamp),e=this.subtractFirstEventTime(e);const t=e.value;try{const s=JSON.parse(t);e.event=s.event,delete s.event,e.value=s;const i=new ue(e),a=this.dataGrid.scrollContainer,l=a.scrollTop===a.scrollHeight-a.offsetHeight;this.dataGrid.rootNode().appendChild(i),l&&(a.scrollTop=a.scrollHeight)}catch{}}subtractFirstEventTime(e){return typeof e.timestamp=="number"&&(e.displayTimestamp=(e.timestamp-this.firstEventTime).toFixed(3)),e}static convertToGridDescriptor(e){return{id:e.id,title:e.title,sortable:e.sortable,weight:e.weight||0,sort:Ve.Ascending}}wasShown(){super.wasShown(),this.registerCSSFiles([ce])}}const wt=Object.freeze(Object.defineProperty({__proto__:null,EventNode:ue,PlayerEventsView:D},Symbol.toStringTag,{value:"Module"}));class P extends re{enabled;agent;constructor(e){super(e),this.enabled=!1,this.agent=e.mediaAgent(),e.registerMediaDispatcher(this)}async resumeModel(){if(!this.enabled)return Promise.resolve();await this.agent.invoke_enable()}ensureEnabled(){this.agent.invoke_enable(),this.enabled=!0}playerPropertiesChanged(e){this.dispatchEventToListeners("PlayerPropertiesChanged",e)}playerEventsAdded(e){this.dispatchEventToListeners("PlayerEventsAdded",e)}playerMessagesLogged(e){this.dispatchEventToListeners("PlayerMessagesLogged",e)}playerErrorsRaised(e){this.dispatchEventToListeners("PlayerErrorsRaised",e)}playersCreated({players:e}){this.dispatchEventToListeners("PlayersCreated",e)}}re.register(P,{capabilities:262144,autostart:!1});const Et=Object.freeze(Object.defineProperty({__proto__:null,MediaModel:P},Symbol.toStringTag,{value:"Module"}));function b(n,e){const t=Math.pow(10,3-e),s=Math.pow(10,Math.max(0,e));return`${Math.round(n/t)/s} s`}class me{minInternal;maxInternal;lowInternal;highInternal;maxRange;minRange;constructor(e,t,s,i){this.minInternal=e,this.maxInternal=t,this.lowInternal=this.minInternal,this.highInternal=this.maxInternal,this.maxRange=s,this.minRange=i}get low(){return this.lowInternal}get high(){return this.highInternal}get min(){return this.minInternal}get max(){return this.maxInternal}get range(){return this.highInternal-this.lowInternal}reassertBounds(){let e=!0;for(;e;){if(e=!1,this.range<this.minRange){e=!0;const t=(this.minRange-this.range)/2;this.highInternal+=t,this.lowInternal-=t}this.lowInternal<this.minInternal&&(e=!0,this.lowInternal=this.minInternal),this.highInternal>this.maxInternal&&(e=!0,this.highInternal=this.maxInternal)}}zoomOut(e,t){const s=this.highInternal-this.lowInternal,i=s*Math.pow(1.1,e)-s,a=i*t,l=i-a;this.lowInternal-=a,this.highInternal+=l,this.reassertBounds()}zoomIn(e,t){const s=this.highInternal-this.lowInternal;if(this.range<=this.minRange)return;const i=s-s/Math.pow(1.1,e),a=i*t,l=i-a;this.lowInternal+=a,this.highInternal-=l,this.reassertBounds()}addMax(e){const t=this.highInternal-this.lowInternal,s=this.highInternal===this.maxInternal,i=this.lowInternal===this.minInternal||t>=this.maxRange;this.maxInternal+=e,s&&i&&(this.highInternal=this.maxInternal),this.reassertBounds()}pushMaxAtLeastTo(e){return this.maxInternal<e?(this.addMax(e-this.maxInternal),!0):!1}}const Tt=Object.freeze(Object.defineProperty({__proto__:null,Bounds:me,formatMillisecondsToSeconds:b},Symbol.toStringTag,{value:"Module"})),pe="11px "+Ne();function ge(){return ne.instance().getComputedValue("--sys-color-on-surface")}const tt=()=>({height:20,padding:2,collapsible:!1,font:pe,color:ge(),backgroundColor:"rgba(100 0 0 / 10%)",nestingLevel:0,itemsHeight:20,shareHeaderLine:!1,useFirstLineForOverview:!1,useDecoratorsForOverview:!1}),v=["#ffba08","#faa307","#f48c06","#e85d04","#dc2f02","#d00000","#9d0208"],V=["#7400b8","#6930c3","#5e60ce","#5390d9","#4ea8de","#48bfe3","#56cfe1","#64dfdf"];function Q(n){const e=Be(n)?.as("hsl");return e&&e.l<.5?"#eee":"#444"}class fe{timelineData;setLive;setComplete;updateMaxTime;selfIndex;liveInternal;title;colorInternal;fontColorInternal;hoverData;constructor(e,t,s={color:void 0,duration:void 0,hoverData:{},level:0,name:"",startTime:0}){this.timelineData=e,this.setLive=t.setLive,this.setComplete=t.setComplete,this.updateMaxTime=t.updateMaxTime,this.selfIndex=this.timelineData.entryLevels.length,this.liveInternal=!1;const i=s.duration===void 0?0:s.duration;this.timelineData.entryLevels.push(s.level||0),this.timelineData.entryStartTimes.push(s.startTime||0),this.timelineData.entryTotalTimes.push(i),i===-1&&(this.endTime=-1),this.title=s.name||"",this.colorInternal=s.color||v[0],this.fontColorInternal=Q(this.colorInternal),this.hoverData=s.hoverData||{}}decorate(e){e.createChild("span").textContent=`Name: ${this.title}`,e.createChild("br");const t=b(this.startTime,2);if(this.liveInternal)e.createChild("span").textContent=`Duration: ${t} - LIVE!`;else if(isNaN(this.duration))e.createChild("span").textContent=`Time: ${t}`;else{const s=b(this.duration+this.startTime,2);e.createChild("span").textContent=`Duration: ${t} - ${s}`}}set endTime(e){if(e===-1)this.timelineData.entryTotalTimes[this.selfIndex]=this.setLive(this.selfIndex),this.liveInternal=!0;else{this.liveInternal=!1;const t=e-this.timelineData.entryStartTimes[this.selfIndex];this.timelineData.entryTotalTimes[this.selfIndex]=t,this.setComplete(this.selfIndex),this.updateMaxTime(e)}}get id(){return this.selfIndex}set level(e){this.timelineData.entryLevels[this.selfIndex]=e}set color(e){this.colorInternal=e,this.fontColorInternal=Q(this.colorInternal)}get color(){return this.colorInternal}get fontColor(){return this.fontColorInternal}get startTime(){return this.timelineData.entryStartTimes[this.selfIndex]}get duration(){return this.timelineData.entryTotalTimes[this.selfIndex]}get live(){return this.liveInternal}}class ve extends g{intervalTimer;lastTimestamp;canTickInternal;ticking;isShown;bounds;dataProvider;delegate;chartGroupExpansionSetting;chart;stoppedPermanently;constructor(){super(),this.intervalTimer=0,this.lastTimestamp=0,this.canTickInternal=!0,this.ticking=!1,this.isShown=!1,this.bounds=new me(0,1e3,3e4,1e3),this.dataProvider=new it(this.bounds,this.updateMaxTime.bind(this)),this.delegate=new st,this.chartGroupExpansionSetting=Re.instance().createSetting("media-flame-chart-group-expansion",{}),this.chart=new qe(this.dataProvider,this.delegate,this.chartGroupExpansionSetting),this.chart.disableRangeSelection(),this.chart.bindCanvasEvent("wheel",e=>{this.onScroll(e)}),this.chart.show(this.contentElement)}addMarker(e){e.duration=NaN,this.startEvent(e)}startEvent(e){e.duration===void 0&&(e.duration=-1);const t=e.startTime||0,s=this.dataProvider.startEvent(e);return this.updateMaxTime(t),s}addGroup(e,t){this.dataProvider.addGroup(e,t)}updateMaxTime(e){this.bounds.pushMaxAtLeastTo(e)&&this.updateRender()}onScroll(e){const t=Math.round(e.deltaY/50),s=e.offsetX/e.srcElement.clientWidth;t>0?this.bounds.zoomOut(t,s):this.bounds.zoomIn(-t,s),this.updateRender()}willHide(){this.isShown=!1,this.ticking&&this.stop()}wasShown(){this.isShown=!0,this.canTickInternal&&!this.ticking&&this.start()}set canTick(e){this.canTickInternal=e,this.ticking&&!e&&this.stop(),!this.ticking&&this.isShown&&e&&this.start()}start(){this.lastTimestamp===0&&(this.lastTimestamp=Date.now()),!(this.intervalTimer!==0||this.stoppedPermanently)&&(this.intervalTimer=window.setInterval(this.updateRender.bind(this),16),this.ticking=!0)}stop(e=!1){window.clearInterval(this.intervalTimer),this.intervalTimer=0,e&&(this.stoppedPermanently=!0),this.ticking=!1}updateRender(){if(this.ticking){const e=Date.now(),t=e-this.lastTimestamp;this.lastTimestamp=e,this.bounds.addMax(t)}this.dataProvider.updateMaxTime(this.bounds),this.chart.setWindowTimes(this.bounds.low,this.bounds.high,!0),this.chart.scheduleUpdate()}}class st{constructor(){}windowChanged(e,t,s){}updateRangeSelection(e,t){}updateSelectedGroup(e,t){}}class it{updateMaxTimeHandle;bounds;liveEvents;eventMap;timelineDataInternal;maxLevel;constructor(e,t){this.updateMaxTimeHandle=t,this.bounds=e,this.liveEvents=new Set,this.eventMap=new Map,this.timelineDataInternal=Qe.createEmpty(),this.maxLevel=0}hasTrackConfigurationMode(){return!1}addGroup(e,t){if(this.timelineDataInternal.groups){const s={name:e,startLevel:this.maxLevel,expanded:!0,selectable:!1,style:tt(),track:null};this.timelineDataInternal.groups.push(s),ne.instance().addEventListener(Ae.eventName,()=>{s.style.color=ge()})}this.maxLevel+=t}startEvent(e){if(e.level=e.level||0,e.level>this.maxLevel)throw`level ${e.level} is above the maximum allowed of ${this.maxLevel}`;const t=new fe(this.timelineDataInternal,{setLive:this.setLive.bind(this),setComplete:this.setComplete.bind(this),updateMaxTime:this.updateMaxTimeHandle},e);return this.eventMap.set(t.id,t),t}setLive(e){return this.liveEvents.add(e),this.bounds.max}setComplete(e){this.liveEvents.delete(e)}updateMaxTime(e){this.bounds=e;for(const t of this.liveEvents.entries())this.eventMap.get(t[0]).endTime=-1}maxStackDepth(){return this.maxLevel+1}timelineData(){return this.timelineDataInternal}minimumBoundary(){return this.bounds.low}totalTime(){return this.bounds.high}entryColor(e){return this.eventMap.get(e).color}textColor(e){return this.eventMap.get(e).fontColor}entryTitle(e){return this.eventMap.get(e).title}entryFont(e){return pe}decorateEntry(e,t,s,i,a,l,m,F,$){return!1}forceDecoration(e){return!1}prepareHighlightedEntryInfo(e){const t=document.createElement("div");return this.eventMap.get(e).decorate(t),t}formatValue(e,t){return e+=Math.round(this.bounds.low),this.bounds.range<2800?b(e,2):this.bounds.range<3e4?b(e,1):b(e,0)}canJumpToEntry(e){return!1}}const Pt=Object.freeze(Object.defineProperty({__proto__:null,ColdColorScheme:V,Event:fe,HotColorScheme:v,TickingFlameChart:ve},Symbol.toStringTag,{value:"Module"})),ee=-1.5,N={playbackStatus:"Playback Status",bufferingStatus:"Buffering Status"},at=y("panels/media/EventTimelineView.ts",N),te=w.bind(void 0,at);class rt extends ve{normalizedTimestamp;playbackStatusLastEvent;audioBufferingStateEvent;videoBufferingStateEvent;constructor(){super(),this.element.setAttribute("jslog",`${L("timeline")}`),this.normalizedTimestamp=ee,this.addGroup(te(N.playbackStatus),2),this.addGroup(te(N.bufferingStatus),2),this.playbackStatusLastEvent=null,this.audioBufferingStateEvent=null,this.videoBufferingStateEvent=null}ensureNoPreviousPlaybackEvent(e){this.playbackStatusLastEvent!==null&&(this.playbackStatusLastEvent.endTime=e,this.playbackStatusLastEvent=null)}onPlaybackEvent(e,t){switch(e.event){case"kPlay":this.canTick=!0,this.ensureNoPreviousPlaybackEvent(t),this.playbackStatusLastEvent=this.startEvent({level:0,startTime:t,name:"Play"});break;case"kPause":this.ensureNoPreviousPlaybackEvent(t),this.playbackStatusLastEvent=this.startEvent({level:0,startTime:t,name:"Pause",color:v[1]});break;case"kWebMediaPlayerDestroyed":this.canTick=!1,this.ensureNoPreviousPlaybackEvent(t),this.addMarker({level:1,startTime:t,name:"Destroyed",color:v[4]});break;case"kSuspended":this.canTick=!1,this.ensureNoPreviousPlaybackEvent(t),this.playbackStatusLastEvent=this.startEvent({level:1,startTime:t,name:"Suspended",color:v[3]});break;case"kEnded":this.ensureNoPreviousPlaybackEvent(t),this.playbackStatusLastEvent=this.startEvent({level:1,startTime:t,name:"Ended",color:v[2]});break;default:throw`_onPlaybackEvent cant handle ${e.event}`}}bufferedEnough(e){return e.state==="BUFFERING_HAVE_ENOUGH"}onBufferingStatus(e,t){let s=null,i=null;switch(e.event){case"kBufferingStateChanged":s=e.value.audio_buffering_state,i=e.value.video_buffering_state,s&&(this.audioBufferingStateEvent!==null&&(this.audioBufferingStateEvent.endTime=t,this.audioBufferingStateEvent=null),this.bufferedEnough(s)||(this.audioBufferingStateEvent=this.startEvent({level:3,startTime:t,name:"Audio Buffering",color:V[1]}))),i&&(this.videoBufferingStateEvent!==null&&(this.videoBufferingStateEvent.endTime=t,this.videoBufferingStateEvent=null),this.bufferedEnough(i)||(this.videoBufferingStateEvent=this.startEvent({level:2,startTime:t,name:"Video Buffering",color:V[0]})));break;default:throw`_onPlaybackEvent cant handle ${e.event}`}}onEvent(e){this.normalizedTimestamp===ee&&(this.normalizedTimestamp=Number(e.timestamp));const t=(Number(e.timestamp)-this.normalizedTimestamp)*1e3;switch(e.event){case"kPlay":case"kPause":case"kWebMediaPlayerDestroyed":case"kSuspended":case"kEnded":return this.onPlaybackEvent(e,t);case"kBufferingStateChanged":return this.onBufferingStatus(e,t)}}}const R=new CSSStyleSheet;R.replaceSync(`/*
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.media-messages-header {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  min-height: 26px;
}

.media-messages-body {
  overflow-y: scroll;
}

.media-messages-level-dropdown-element {
  height: 18px;
  line-height: 18px;
}

.media-messages-level-dropdown-text {
  float: left;
}

.media-messages-level-dropdown-checkbox {
  float: left;
  width: 18px;
  height: 100%;
  padding-left: 2px;
}

.media-messages-message-container {
  margin: 4px;
  font-size: 14px;
  line-height: 18px;
  padding: 4px;
  user-select: text;
}

.media-messages-message-container + .media-messages-message-container {
  border-top: 1px solid var(--sys-color-divider);

  &.media-message-warning,
  &.media-message-error {
    border: none;
  }
}

.media-message-warning {
  border-radius: 5px;
  background-color: var(--sys-color-surface-yellow);
  color: var(--sys-color-on-surface-yellow);
}

.media-message-error {
  border-radius: 5px;
  background-color: var(--sys-color-surface-error);
  color: var(--sys-color-on-surface-error);
}

.media-messages-message-filtered {
  display: none;
}

.media-messages-message-unselected {
  display: none;
}

.status-error-box {
  font-family: monospace;
  border: 1px solid var(--sys-color-error-outline);
  border-radius: 5px;
  padding: 4px;
}

.status-error-field-label {
  padding-right: 10px;
  color: var(--sys-color-token-subtle);
}

.status-error-field-labeled {
  display: flex;
}

/*# sourceURL=playerMessagesView.css */
`);const h={default:"Default",custom:"Custom",all:"All",error:"Error",warning:"Warning",info:"Info",debug:"Debug",logLevel:"Log level:",filterByLogMessages:"Filter by log messages",errorGroupLabel:"Error Group:",errorCodeLabel:"Error Code:",errorDataLabel:"Data:",errorStackLabel:"Stacktrace:",errorCauseLabel:"Caused by:"},nt=y("panels/media/PlayerMessagesView.ts",h),c=w.bind(void 0,nt);class ot{items;view;itemMap;hiddenLevels;bitFieldValue;savedBitFieldValue;defaultTitleInternal;customTitle;allTitle;elementsForItems;constructor(e,t){this.items=e,this.view=t,this.itemMap=new Map,this.hiddenLevels=[],this.bitFieldValue=7,this.savedBitFieldValue=7,this.defaultTitleInternal=c(h.default),this.customTitle=c(h.custom),this.allTitle=c(h.all),this.elementsForItems=new WeakMap}defaultTitle(){return this.defaultTitleInternal}setDefault(e){e.selectItem(this.items.at(0))}populate(){this.items.insert(this.items.length,{title:this.defaultTitleInternal,overwrite:!0,stringValue:"",value:7,selectable:void 0}),this.items.insert(this.items.length,{title:this.allTitle,overwrite:!0,stringValue:"",value:15,selectable:void 0}),this.items.insert(this.items.length,{title:c(h.error),overwrite:!1,stringValue:"error",value:1,selectable:void 0}),this.items.insert(this.items.length,{title:c(h.warning),overwrite:!1,stringValue:"warning",value:2,selectable:void 0}),this.items.insert(this.items.length,{title:c(h.info),overwrite:!1,stringValue:"info",value:4,selectable:void 0}),this.items.insert(this.items.length,{title:c(h.debug),overwrite:!1,stringValue:"debug",value:8,selectable:void 0})}updateCheckMarks(){this.hiddenLevels=[];for(const[e,t]of this.itemMap)if(!t.overwrite){const s=this.elementsForItems.get(t);s&&s.firstChild&&s.firstChild.remove(),s&&e&this.bitFieldValue?u(s.createChild("div"),"✓"):this.hiddenLevels.push(t.stringValue)}}titleFor(e){if(e.overwrite?this.bitFieldValue=e.value:this.bitFieldValue^=e.value,this.bitFieldValue===7)return this.defaultTitleInternal;if(this.bitFieldValue===15)return this.allTitle;const t=this.itemMap.get(this.bitFieldValue);return t?t.title:this.customTitle}createElementForItem(e){const t=document.createElement("div"),i=We(t,{cssFile:[R],delegatesFocus:void 0}).createChild("div","media-messages-level-dropdown-element"),a=i.createChild("div","media-messages-level-dropdown-checkbox"),l=i.createChild("span","media-messages-level-dropdown-text");return u(l,e.title),this.elementsForItems.set(e,a),this.itemMap.set(e.value,e),this.updateCheckMarks(),this.view.regenerateMessageDisplayCss(this.hiddenLevels),t}isItemSelectable(e){return!0}itemSelected(e){this.updateCheckMarks(),this.view.regenerateMessageDisplayCss(this.hiddenLevels)}highlightedItemChanged(e,t,s,i){}}class lt extends g{headerPanel;bodyPanel;messageLevelSelector;constructor(){super(),this.element.setAttribute("jslog",`${L("messages")}`),this.headerPanel=this.contentElement.createChild("div","media-messages-header"),this.bodyPanel=this.contentElement.createChild("div","media-messages-body"),this.buildToolbar()}buildToolbar(){const e=new Oe("media-messages-toolbar",this.headerPanel);e.appendText(c(h.logLevel)),e.appendToolbarItem(this.createDropdown()),e.appendSeparator(),e.appendToolbarItem(this.createFilterInput())}createDropdown(){const e=new je;this.messageLevelSelector=new ot(e,this);const t=new He(e,this.messageLevelSelector,"log-level");t.setRowHeight(18),this.messageLevelSelector.populate(),this.messageLevelSelector.setDefault(t);const s=new ze(t.element);return s.element.classList.add("toolbar-has-dropdown"),s.setEnabled(!0),s.setTitle(this.messageLevelSelector.defaultTitle()),Ge(s.element,`${c(h.logLevel)} ${this.messageLevelSelector.defaultTitle()}`),s}createFilterInput(){const e=new Ue(c(h.filterByLogMessages),1,1);return e.addEventListener("TextChanged",t=>{this.filterByString(t)},this),e}regenerateMessageDisplayCss(e){const t=this.bodyPanel.getElementsByClassName("media-messages-message-container");for(const s of t)this.matchesHiddenLevels(s,e)?s.classList.add("media-messages-message-unselected"):s.classList.remove("media-messages-message-unselected")}matchesHiddenLevels(e,t){for(const s of t)if(e.classList.contains("media-message-"+s))return!0;return!1}filterByString(e){const t=e.data,s=this.bodyPanel.getElementsByClassName("media-messages-message-container");for(const i of s)t===""||i.textContent&&i.textContent.includes(t)?i.classList.remove("media-messages-message-filtered"):i.classList.add("media-messages-message-filtered")}addMessage(e){const t=this.bodyPanel.createChild("div","media-messages-message-container media-message-"+e.level);u(t,e.message)}errorToDiv(e){const t=oe.build`
    <div class="status-error-box">
    <div class="status-error-field-labeled">
      <span class="status-error-field-label" $="status-error-group"></span>
      <span>${e.errorType}</span>
    </div>
    <div class="status-error-field-labeled">
      <span class="status-error-field-label" $="status-error-code"></span>
      <span>${e.code}</span>
    </div>
    <div class="status-error-field-labeled" $="status-error-data">
    </div>
    <div class="status-error-field-labeled" $="status-error-stack">
    </div>
    <div class="status-error-field-labeled" $="status-error-cause">
    </div>
    `;if(t.$("status-error-group").textContent=c(h.errorGroupLabel),t.$("status-error-code").textContent=c(h.errorCodeLabel),Object.keys(e.data).length!==0){const s=t.$("status-error-data").createChild("span","status-error-field-label");u(s,c(h.errorDataLabel));const i=t.$("status-error-data").createChild("div");for(const[a,l]of Object.entries(e.data)){const m=i.createChild("div");u(m,`${a}: ${l}`)}}if(e.stack.length!==0){const s=t.$("status-error-stack").createChild("span","status-error-field-label");u(s,c(h.errorStackLabel));const i=t.$("status-error-stack").createChild("div");for(const a of e.stack){const l=i.createChild("div");u(l,`${a.file}:${a.line}`)}}if(e.cause.length!==0){const s=t.$("status-error-cause").createChild("span","status-error-field-label");u(s,c(h.errorCauseLabel)),t.$("status-error-cause").appendChild(this.errorToDiv(e.cause[0]))}return t.element()}addError(e){this.bodyPanel.createChild("div","media-messages-message-container media-message-error").appendChild(this.errorToDiv(e))}wasShown(){super.wasShown(),this.registerCSSFiles([R])}}const be=new CSSStyleSheet;be.replaceSync(`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.media-attributes-view {
  border-bottom: 1px solid var(--sys-color-divider);
}

.media-property-renderer {
  line-height: 20px;
  min-height: 28px;
  padding: 4px 10px;
  display: block;
  overflow: hidden;

  &:hover {
    background: var(--sys-color-state-hover-on-subtle);
  }
}

.media-property-renderer:nth-child(even):not(:hover) {
  background: var(--sys-color-surface1);
}

.media-property-renderer:has(.json-view) {
  padding-bottom: 0;
}

.media-property-renderer:has(.json-view > .expanded) {
  padding-bottom: 4px;
}

.media-property-renderer-hidden {
  display: none;
}

.media-property-renderer-title {
  font-size: 12px;
  float: left;
  width: 150px;
}

.media-property-renderer-title::first-letter {
  text-transform: uppercase;
}

.media-property-renderer-contents {
  position: relative;

  & > .json-view {
    overflow: hidden;
    padding: 0;
  }
}

.media-properties-frame {
  display: block;
  overflow-x: hidden;
}

/*# sourceURL=playerPropertiesView.css */
`);const r={video:"Video",audio:"Audio",track:"Track",decoder:"Decoder",properties:"Properties",textTrack:"Text track",noTextTracks:"No text tracks",resolution:"Resolution",fileSize:"File size",bitrate:"Bitrate",duration:"Duration",startTime:"Start time",streaming:"Streaming",playbackFrameUrl:"Playback frame URL",playbackFrameTitle:"Playback frame title",singleoriginPlayback:"Single-origin playback",rangeHeaderSupport:"`Range` header support",frameRate:"Frame rate",videoPlaybackRoughness:"Video playback roughness",videoFreezingScore:"Video freezing score",rendererName:"Renderer name",decoderName:"Decoder name",noDecoder:"No decoder",hardwareDecoder:"Hardware decoder",decryptingDemuxer:"Decrypting demuxer",encoderName:"Encoder name",noEncoder:"No encoder",hardwareEncoder:"Hardware encoder"},ye=y("panels/media/PlayerPropertiesView.ts",r),o=w.bind(void 0,ye),se=Je.bind(void 0,ye);class d extends g{title;contents;value;pseudoColorProtectionElement;constructor(e){super(),this.contentElement.classList.add("media-property-renderer");const t=this.contentElement.createChild("span","media-property-renderer-title");this.contents=this.contentElement.createChild("div","media-property-renderer-contents"),u(t,e),this.title=e,this.value=null,this.pseudoColorProtectionElement=null,this.contentElement.classList.add("media-property-renderer-hidden")}updateData(e,t){if(t===""||t===null)return this.updateDataInternal(e,null);try{t=JSON.parse(t)}catch{}return this.updateDataInternal(e,t)}updateDataInternal(e,t){if(t===null)this.changeContents(null);else{if(this.value===t)return;this.value=t,this.changeContents(t)}}unsetNestedContents(){this.contentElement.classList.add("media-property-renderer-hidden"),this.pseudoColorProtectionElement===null&&(this.pseudoColorProtectionElement=document.createElement("div"),this.pseudoColorProtectionElement.classList.add("media-property-renderer"),this.pseudoColorProtectionElement.classList.add("media-property-renderer-hidden"),this.contentElement.parentNode.insertBefore(this.pseudoColorProtectionElement,this.contentElement))}changeNestedContents(e){e===null||Object.keys(e).length===0?this.unsetNestedContents():(this.pseudoColorProtectionElement!==null&&(this.pseudoColorProtectionElement.remove(),this.pseudoColorProtectionElement=null),this.contentElement.classList.remove("media-property-renderer-hidden"),this.contents.removeChildren(),new de(new he(e,"",""),!0).show(this.contents))}changeContents(e){if(e===null)this.unsetNestedContents();else{this.pseudoColorProtectionElement!==null&&(this.pseudoColorProtectionElement.remove(),this.pseudoColorProtectionElement=null),this.contentElement.classList.remove("media-property-renderer-hidden"),this.contents.removeChildren();const t=document.createElement("span");t.textContent=e,this.contents.appendChild(t)}}}class M extends d{formatfunction;constructor(e,t){super(e),this.formatfunction=t}updateDataInternal(e,t){t===null?this.changeContents(null):this.changeContents(this.formatfunction(t))}}class x extends d{constructor(e,t){super(e),this.changeContents(t)}}class we extends d{constructor(e,t){super(e),this.changeNestedContents(t)}}class dt extends d{width;height;constructor(e){super(e),this.width=0,this.height=0}updateDataInternal(e,t){let s=!1;e==="width"&&Number(t)!==this.width&&(this.width=Number(t),s=!0),e==="height"&&Number(t)!==this.height&&(this.height=Number(t),s=!0),this.width===0||this.height===0?this.changeContents(null):s&&this.changeContents(`${this.width}×${this.height}`)}}class S extends g{contentHash;constructor(e){super(),this.contentHash=0,this.contentElement.classList.add("media-attributes-view");for(const t of e){t.show(this.contentElement);const s=this.contentElement.textContent;s!==null&&(this.contentHash+=Ze(s))}}getContentHash(){return this.contentHash}}class I{type;view;constructor(e,t){this.type=t,this.view=e}updateData(e,t){const s=this.view.getTabs(this.type),i=JSON.parse(t);let a=1;for(const l of i)this.addNewTab(s,l,a),a++}addNewTab(e,t,s){const i=[];for(const[l,m]of Object.entries(t))typeof m=="object"?i.push(new we(Y(l),m)):i.push(new x(Y(l),m));const a=new S(i);e.addNewTab(s,a)}}class Ee extends I{constructor(e){super(e,"video")}}class Te extends I{constructor(e){super(e,"text")}}class Pe extends I{constructor(e){super(e,"audio")}}const ie={Video:se(r.video),Audio:se(r.audio)};class xe extends le{decoderName;trackName;constructor(e,t=o(r.track)){super(),this.decoderName=e,this.trackName=t}addNewTab(e,t){const s=o(r.track),i=`track-${e}`;if(this.hasTab(i)){const a=this.tabView(i);if(a===null||a.getContentHash()===t.getContentHash())return;this.closeTab(i,!1)}this.appendTab(i,`${this.trackName} #${e}`,t,`${this.decoderName} ${s} #${e}`)}}class ae extends xe{constructor(e,t){super(e);const s=o(r.decoder),i=`${e} ${s}`,a=o(r.properties),l=`${i} ${a}`;this.appendTab("decoder-properties",i,t,l)}}class ht extends g{isPlaceholder;wrapping;constructor(e,t){super(),this.isPlaceholder=!0,this.wrapping=e,this.wrapping.appendTab("_placeholder",t,new g,t),this.wrapping.show(this.contentElement)}addNewTab(e,t){this.isPlaceholder&&(this.wrapping.closeTab("_placeholder"),this.isPlaceholder=!1),this.wrapping.addNewTab(e,t)}}class Se extends g{mediaElements;videoDecoderElements;audioDecoderElements;textTrackElements;attributeMap;videoProperties;videoDecoderProperties;audioDecoderProperties;videoDecoderTabs;audioDecoderTabs;textTracksTabs;constructor(){super(),this.element.setAttribute("jslog",`${L("properties")}`),this.contentElement.classList.add("media-properties-frame"),this.mediaElements=[],this.videoDecoderElements=[],this.audioDecoderElements=[],this.textTrackElements=[],this.attributeMap=new Map,this.populateAttributesAndElements(),this.videoProperties=new S(this.mediaElements),this.videoDecoderProperties=new S(this.videoDecoderElements),this.audioDecoderProperties=new S(this.audioDecoderElements),this.videoProperties.show(this.contentElement),this.videoDecoderTabs=new ae(ie.Video(),this.videoDecoderProperties),this.videoDecoderTabs.show(this.contentElement),this.audioDecoderTabs=new ae(ie.Audio(),this.audioDecoderProperties),this.audioDecoderTabs.show(this.contentElement),this.textTracksTabs=null}lazyCreateTrackTabs(){let e=this.textTracksTabs;if(e===null){const t=new xe(o(r.textTrack));e=new ht(t,o(r.noTextTracks)),e.show(this.contentElement),this.textTracksTabs=e}return e}getTabs(e){if(e==="audio")return this.audioDecoderTabs;if(e==="video")return this.videoDecoderTabs;if(e==="text")return this.lazyCreateTrackTabs();throw new Error("Unreachable")}onProperty(e){const t=this.attributeMap.get(e.name);if(!t)throw new Error(`Player property "${e.name}" not supported.`);t.updateData(e.name,e.value)}formatKbps(e){return e===""?"0 kbps":`${Math.floor(Number(e)/1e3)} kbps`}formatTime(e){if(e==="")return"0:00";const t=new Date;return t.setSeconds(Number(e)),t.toISOString().substr(11,8)}formatFileSize(e){if(e==="")return"0 bytes";const t=Number(e);if(t<1e3)return`${e} bytes`;const s=Math.floor(Math.log10(t)/3),i=["bytes","kB","MB","GB","TB"][s];return`${(t/Math.pow(1e3,s)).toFixed(2)} ${i}`}populateAttributesAndElements(){const e=new d(o(r.resolution));this.mediaElements.push(e),this.attributeMap.set("kResolution",e);const t=new M(o(r.fileSize),this.formatFileSize);this.mediaElements.push(t),this.attributeMap.set("kTotalBytes",t);const s=new M(o(r.bitrate),this.formatKbps);this.mediaElements.push(s),this.attributeMap.set("kBitrate",s);const i=new M(o(r.duration),this.formatTime);this.mediaElements.push(i),this.attributeMap.set("kMaxDuration",i);const a=new d(o(r.startTime));this.mediaElements.push(a),this.attributeMap.set("kStartTime",a);const l=new d(o(r.streaming));this.mediaElements.push(l),this.attributeMap.set("kIsStreaming",l);const m=new d(o(r.playbackFrameUrl));this.mediaElements.push(m),this.attributeMap.set("kFrameUrl",m);const F=new d(o(r.playbackFrameTitle));this.mediaElements.push(F),this.attributeMap.set("kFrameTitle",F);const $=new d(o(r.singleoriginPlayback));this.mediaElements.push($),this.attributeMap.set("kIsSingleOrigin",$);const A=new d(o(r.rangeHeaderSupport));this.mediaElements.push(A),this.attributeMap.set("kIsRangeHeaderSupported",A);const B=new d(o(r.frameRate));this.mediaElements.push(B),this.attributeMap.set("kFramerate",B);const O=new d(o(r.videoPlaybackRoughness));this.mediaElements.push(O),this.attributeMap.set("kVideoPlaybackRoughness",O);const j=new d(o(r.videoFreezingScore));this.mediaElements.push(j),this.attributeMap.set("kVideoPlaybackFreezing",j);const H=new d(o(r.rendererName));this.mediaElements.push(H),this.attributeMap.set("kRendererName",H);const z=new x(o(r.decoderName),o(r.noDecoder));this.videoDecoderElements.push(z),this.attributeMap.set("kVideoDecoderName",z);const G=new d(o(r.hardwareDecoder));this.videoDecoderElements.push(G),this.attributeMap.set("kIsPlatformVideoDecoder",G);const U=new x(o(r.encoderName),o(r.noEncoder));this.videoDecoderElements.push(U),this.attributeMap.set("kVideoEncoderName",U);const W=new d(o(r.hardwareEncoder));this.videoDecoderElements.push(W),this.attributeMap.set("kIsPlatformVideoEncoder",W);const J=new d(o(r.decryptingDemuxer));this.videoDecoderElements.push(J),this.attributeMap.set("kIsVideoDecryptingDemuxerStream",J);const De=new Ee(this);this.attributeMap.set("kVideoTracks",De);const Z=new x(o(r.decoderName),o(r.noDecoder));this.audioDecoderElements.push(Z),this.attributeMap.set("kAudioDecoderName",Z);const K=new d(o(r.hardwareDecoder));this.audioDecoderElements.push(K),this.attributeMap.set("kIsPlatformAudioDecoder",K);const X=new d(o(r.decryptingDemuxer));this.audioDecoderElements.push(X),this.attributeMap.set("kIsAudioDecryptingDemuxerStream",X);const Ie=new Pe(this);this.attributeMap.set("kAudioTracks",Ie);const Fe=new Te(this);this.attributeMap.set("kTextTracks",Fe)}wasShown(){super.wasShown(),this.registerCSSFiles([be])}}const xt=Object.freeze(Object.defineProperty({__proto__:null,AttributesView:S,AudioTrackManager:Pe,DefaultPropertyRenderer:x,DimensionPropertyRenderer:dt,FormattedPropertyRenderer:M,NestedPropertyRenderer:we,PlayerPropertiesView:Se,PropertyRenderer:d,TextTrackManager:Te,TrackManager:I,VideoTrackManager:Ee},Symbol.toStringTag,{value:"Module"})),p={properties:"Properties",playerProperties:"Player properties",events:"Events",playerEvents:"Player events",messages:"Messages",playerMessages:"Player messages",timeline:"Timeline",playerTimeline:"Player timeline"},ct=y("panels/media/PlayerDetailView.ts",p),f=w.bind(void 0,ct);class ke extends le{eventView;propertyView;messageView;timelineView;constructor(){super(),this.eventView=new D,this.propertyView=new Se,this.messageView=new lt,this.timelineView=new rt,this.appendTab("properties",f(p.properties),this.propertyView,f(p.playerProperties)),this.appendTab("events",f(p.events),this.eventView,f(p.playerEvents)),this.appendTab("messages",f(p.messages),this.messageView,f(p.playerMessages)),this.appendTab("timeline",f(p.timeline),this.timelineView,f(p.playerTimeline))}onProperty(e){this.propertyView.onProperty(e)}onError(e){this.messageView.addError(e)}onMessage(e){this.messageView.addMessage(e)}onEvent(e){this.eventView.onEvent(e),this.timelineView.onEvent(e)}}const St=Object.freeze(Object.defineProperty({__proto__:null,PlayerDetailView:ke},Symbol.toStringTag,{value:"Module"})),Ce=new CSSStyleSheet;Ce.replaceSync(`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  padding-left: 0;
  color: var(--sys-color-token-subtle);
}

li.storage-group-list-item {
  padding: 10px 8px 6px;
}

li.storage-group-list-item:not(:first-child) {
  border-top: 1px solid var(--sys-color-divider);
}

li.storage-group-list-item::before {
  display: none;
}

.player-entry-row {
  height: 26px;
  min-height: 26px;
  line-height: 26px;

  &:nth-child(odd) {
    background: var(--sys-color-surface1);
  }

  &:hover {
    background: var(--sys-color-state-hover-on-subtle);
  }

  &.selected {
    background: var(--sys-color-tonal-container);
    color: var(--sys-color-on-tonal-container);
  }
}

.player-entry-status-icon-centering {
  margin: auto;
  display: inherit;
}

.player-entry-status-icon {
  width: 28px;
  min-width: 28px;
  height: 26px;
  border-right: 1px solid var(--sys-color-divider);
  overflow: hidden;
}

.player-entry-frame-title {
  height: 26px;
  width: 125px;
  min-width: 125px;
  text-overflow: elipsis;
  padding: 0 10px;
  border-right: 1px solid var(--sys-color-divider);
  overflow: hidden;
}

.player-entry-player-title {
  height: 26px;
  padding-left: 10px;
  overflow: hidden;
}

.player-entry-header {
  height: 27px;
  line-height: 27px;
  min-height: 27px;
  padding-left: 10px;
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=playerListView.css */
`);const T={hidePlayer:"Hide player",hideAllOthers:"Hide all others",savePlayerInfo:"Save player info",players:"Players"},ut=y("panels/media/PlayerListView.ts",T),C=w.bind(void 0,ut);class Me extends g{playerEntryFragments;playerEntriesWithHostnameFrameTitle;mainContainer;currentlySelectedEntry;constructor(e){super(!0),this.playerEntryFragments=new Map,this.playerEntriesWithHostnameFrameTitle=new Set,this.mainContainer=e,this.currentlySelectedEntry=null,this.contentElement.createChild("div","player-entry-header").textContent=C(T.players)}createPlayerListEntry(e){const t=oe.build`
    <div class="player-entry-row hbox">
    <div class="player-entry-status-icon vbox">
    <div $="icon" class="player-entry-status-icon-centering"></div>
    </div>
    <div $="frame-title" class="player-entry-frame-title">FrameTitle</div>
    <div $="player-title" class="player-entry-player-title">PlayerTitle</div>
    </div>
    `,s=t.element();return s.setAttribute("jslog",`${Ke("player").track({click:!0})}`),s.addEventListener("click",this.selectPlayer.bind(this,e,s)),s.addEventListener("contextmenu",this.rightClickPlayer.bind(this,e)),t.$("icon").appendChild(q("pause","media-player")),t}selectPlayer(e,t){this.mainContainer.renderMainPanel(e),this.currentlySelectedEntry!==null&&(this.currentlySelectedEntry.classList.remove("selected"),this.currentlySelectedEntry.classList.remove("force-white-icons")),t.classList.add("selected"),t.classList.add("force-white-icons"),this.currentlySelectedEntry=t}rightClickPlayer(e,t){const s=new Xe(t);return s.headerSection().appendItem(C(T.hidePlayer),this.mainContainer.markPlayerForDeletion.bind(this.mainContainer,e),{jslogContext:"hide-player"}),s.headerSection().appendItem(C(T.hideAllOthers),this.mainContainer.markOtherPlayersForDeletion.bind(this.mainContainer,e),{jslogContext:"hide-all-others"}),s.headerSection().appendItem(C(T.savePlayerInfo),this.mainContainer.exportPlayerData.bind(this.mainContainer,e),{jslogContext:"save-player-info"}),s.show(),!0}setMediaElementFrameTitle(e,t,s){if(this.playerEntriesWithHostnameFrameTitle.has(e))s||this.playerEntriesWithHostnameFrameTitle.delete(e);else if(s)return;if(!this.playerEntryFragments.has(e))return;const i=this.playerEntryFragments.get(e);i===void 0||i.element()===void 0||(i.$("frame-title").textContent=t)}setMediaElementPlayerTitle(e,t){if(!this.playerEntryFragments.has(e))return;const s=this.playerEntryFragments.get(e);s!==void 0&&(s.$("player-title").textContent=t)}setMediaElementPlayerIcon(e,t){if(!this.playerEntryFragments.has(e))return;const s=this.playerEntryFragments.get(e);if(s===void 0)return;const i=s.$("icon");i!==void 0&&(i.textContent="",i.appendChild(q(t,"media-player")))}formatAndEvaluate(e,t,s,i,a){s.length<=i||(s.length>=a&&(s=s.substring(0,a-3)+"..."),t.bind(this)(e,s))}addMediaElementItem(e){const t=this.createPlayerListEntry(e);this.contentElement.appendChild(t.element()),this.playerEntryFragments.set(e,t),this.playerEntriesWithHostnameFrameTitle.add(e)}deletePlayer(e){if(!this.playerEntryFragments.has(e))return;const t=this.playerEntryFragments.get(e);t===void 0||t.element()===void 0||(this.contentElement.removeChild(t.element()),this.playerEntryFragments.delete(e))}onEvent(e,t){const s=JSON.parse(t.value),i=s.event;if(i==="kLoad"){const a=s.url,l=a.substring(a.lastIndexOf("/")+1);this.formatAndEvaluate(e,this.setMediaElementPlayerTitle,l,1,20);return}if(i==="kPlay"){this.setMediaElementPlayerIcon(e,"play");return}if(i==="kPause"||i==="kEnded"){this.setMediaElementPlayerIcon(e,"pause");return}if(i==="kWebMediaPlayerDestroyed"){this.setMediaElementPlayerIcon(e,"cross");return}}onProperty(e,t){if(t.name==="kFrameUrl"){const s=new URL(t.value).hostname;this.formatAndEvaluate(e,this.setMediaElementFrameTitle,s,1,20);return}if(t.name==="kFrameTitle"&&t.value){this.formatAndEvaluate(e,this.setMediaElementFrameTitle,t.value,1,20);return}}onError(e,t){}onMessage(e,t){}wasShown(){super.wasShown(),this.registerCSSFiles([Ce])}}const kt=Object.freeze(Object.defineProperty({__proto__:null,PlayerListView:Me},Symbol.toStringTag,{value:"Module"}));class mt{properties;messages;events;errors;constructor(){this.properties=new Map,this.messages=[],this.events=[],this.errors=[]}onProperty(e){this.properties.set(e.name,e.value)}onError(e){this.errors.push(e)}onMessage(e){this.messages.push(e)}onEvent(e){this.events.push(e)}export(){return{properties:this.properties,messages:this.messages,events:this.events,errors:this.errors}}}class Le{playerDataCollection;constructor(){this.playerDataCollection=new Map}addPlayer(e){this.playerDataCollection.set(e,new mt)}onProperty(e,t){const s=this.playerDataCollection.get(e);s&&s.onProperty(t)}onError(e,t){const s=this.playerDataCollection.get(e);s&&s.onError(t)}onMessage(e,t){const s=this.playerDataCollection.get(e);s&&s.onMessage(t)}onEvent(e,t){const s=this.playerDataCollection.get(e);s&&s.onEvent(t)}exportPlayerData(e){const t=this.playerDataCollection.get(e);if(!t)throw new Error("Unable to find player");return t.export()}deletePlayer(e){this.playerDataCollection.delete(e)}}class pt extends Ye{detailPanels;deletedPlayers;downloadStore;sidebar;constructor(e=new Le){super("media"),this.detailPanels=new Map,this.deletedPlayers=new Set,this.downloadStore=e,this.sidebar=new Me(this),this.sidebar.show(this.panelSidebarElement()),_.instance().observeModels(P,this,{scoped:!0})}renderMainPanel(e){if(!this.detailPanels.has(e))return;const t=this.splitWidget().mainWidget();t&&t.detachChildWidgets(),this.detailPanels.get(e)?.show(this.mainElement())}wasShown(){super.wasShown();for(const e of _.instance().models(P,{scoped:!0}))this.addEventListeners(e)}willHide(){for(const e of _.instance().models(P,{scoped:!0}))this.removeEventListeners(e)}modelAdded(e){this.isShowing()&&this.addEventListeners(e)}modelRemoved(e){this.removeEventListeners(e)}addEventListeners(e){e.ensureEnabled(),e.addEventListener("PlayerPropertiesChanged",this.propertiesChanged,this),e.addEventListener("PlayerEventsAdded",this.eventsAdded,this),e.addEventListener("PlayerMessagesLogged",this.messagesLogged,this),e.addEventListener("PlayerErrorsRaised",this.errorsRaised,this),e.addEventListener("PlayersCreated",this.playersCreated,this)}removeEventListeners(e){e.removeEventListener("PlayerPropertiesChanged",this.propertiesChanged,this),e.removeEventListener("PlayerEventsAdded",this.eventsAdded,this),e.removeEventListener("PlayerMessagesLogged",this.messagesLogged,this),e.removeEventListener("PlayerErrorsRaised",this.errorsRaised,this),e.removeEventListener("PlayersCreated",this.playersCreated,this)}onPlayerCreated(e){this.sidebar.addMediaElementItem(e),this.detailPanels.set(e,new ke),this.downloadStore.addPlayer(e)}propertiesChanged(e){for(const t of e.data.properties)this.onProperty(e.data.playerId,t)}eventsAdded(e){for(const t of e.data.events)this.onEvent(e.data.playerId,t)}messagesLogged(e){for(const t of e.data.messages)this.onMessage(e.data.playerId,t)}errorsRaised(e){for(const t of e.data.errors)this.onError(e.data.playerId,t)}shouldPropagate(e){return!this.deletedPlayers.has(e)&&this.detailPanels.has(e)}onProperty(e,t){this.shouldPropagate(e)&&(this.sidebar.onProperty(e,t),this.downloadStore.onProperty(e,t),this.detailPanels.get(e)?.onProperty(t))}onError(e,t){this.shouldPropagate(e)&&(this.sidebar.onError(e,t),this.downloadStore.onError(e,t),this.detailPanels.get(e)?.onError(t))}onMessage(e,t){this.shouldPropagate(e)&&(this.sidebar.onMessage(e,t),this.downloadStore.onMessage(e,t),this.detailPanels.get(e)?.onMessage(t))}onEvent(e,t){this.shouldPropagate(e)&&(this.sidebar.onEvent(e,t),this.downloadStore.onEvent(e,t),this.detailPanels.get(e)?.onEvent(t))}playersCreated(e){for(const t of e.data)this.onPlayerCreated(t)}markPlayerForDeletion(e){this.deletedPlayers.add(e),this.detailPanels.delete(e),this.sidebar.deletePlayer(e),this.downloadStore.deletePlayer(e)}markOtherPlayersForDeletion(e){for(const t of this.detailPanels.keys())t!==e&&this.markPlayerForDeletion(t)}exportPlayerData(e){const t=this.downloadStore.exportPlayerData(e),s="data:application/octet-stream,"+encodeURIComponent(JSON.stringify(t,null,2)),i=document.createElement("a");i.href=s,i.download=e+".json",i.click()}}const Ct=Object.freeze(Object.defineProperty({__proto__:null,MainView:pt,PlayerDataDownloadManager:Le},Symbol.toStringTag,{value:"Module"}));export{Ct as MainView,Et as MediaModel,St as PlayerDetailView,wt as PlayerEventsView,kt as PlayerListView,xt as PlayerPropertiesView,Pt as TickingFlameChart,Tt as TickingFlameChartHelpers};
//# sourceMappingURL=media-DOvAe9cZ.js.map
