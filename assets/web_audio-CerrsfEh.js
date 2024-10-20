import{b,g as v,eA as D,bE as g,aq as _,du as te,dv as ne,ds as oe,aZ as ie,bS as se,dx as ae,ce as $,i as h,aR as re,aS as de,f4 as ce,f5 as M,c$ as le,bp as he,bA as B,bz as ue,aU as pe}from"./inspector-CyOA7R9n.js";const d={state:"State",sampleRate:"Sample Rate",callbackBufferSize:"Callback Buffer Size",maxOutputChannels:"Max Output Channels",currentTime:"Current Time",callbackInterval:"Callback Interval",renderCapacity:"Render Capacity"},ge=b("panels/web_audio/AudioContextContentBuilder.ts",d),c=v.bind(void 0,ge);class W{fragment;container;constructor(e){this.fragment=document.createDocumentFragment(),this.container=document.createElement("div"),this.container.classList.add("context-detail-container"),this.fragment.appendChild(this.container),this.build(e)}build(e){const t=e.contextType==="realtime"?D("AudioContext"):D("OfflineAudioContext");this.addTitle(t,e.contextId),this.addEntry(c(d.state),e.contextState),this.addEntry(c(d.sampleRate),e.sampleRate,"Hz"),e.contextType==="realtime"&&this.addEntry(c(d.callbackBufferSize),e.callbackBufferSize,"frames"),this.addEntry(c(d.maxOutputChannels),e.maxOutputChannelCount,"ch")}addTitle(e,t){this.container.appendChild(g`
  <div class="context-detail-header">
  <div class="context-detail-title">${e}</div>
  <div class="context-detail-subtitle">${t}</div>
  </div>
  `)}addEntry(e,t,n){const o=t+(n?` ${n}`:"");this.container.appendChild(g`
  <div class="context-detail-row">
  <div class="context-detail-row-entry">${e}</div>
  <div class="context-detail-row-value">${o}</div>
  </div>
  `)}getFragment(){return this.fragment}}class A{fragment;constructor(e,t){const n=t.currentTime.toFixed(3),o=(t.callbackIntervalMean*1e3).toFixed(3),s=(Math.sqrt(t.callbackIntervalVariance)*1e3).toFixed(3),a=(t.renderCapacity*100).toFixed(3);this.fragment=document.createDocumentFragment(),this.fragment.appendChild(g`
  <div class="context-summary-container">
  <span>${c(d.currentTime)}: ${n} s</span>
  <span>\u2758</span>
  <span>${c(d.callbackInterval)}: μ = ${o} ms, σ = ${s} ms</span>
  <span>\u2758</span>
  <span>${c(d.renderCapacity)}: ${a} %</span>
  </div>
  `)}getFragment(){return this.fragment}}const Pe=Object.freeze(Object.defineProperty({__proto__:null,ContextDetailBuilder:W,ContextSummaryBuilder:A},Symbol.toStringTag,{value:"Module"})),R=new CSSStyleSheet;R.replaceSync(`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 2px 1px 2px 2px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 0;
}

/*# sourceURL=audioContextSelector.css */
`);const u={noRecordings:"(no recordings)",audioContextS:"Audio context: {PH1}"},me=b("panels/web_audio/AudioContextSelector.ts",u),p=v.bind(void 0,me);class z extends _{placeholderText;items;dropDown;toolbarItemInternal;selectedContextInternal;constructor(){super(),this.placeholderText=p(u.noRecordings),this.items=new te,this.dropDown=new ne(this.items,this,"audio-context"),this.dropDown.setPlaceholderText(this.placeholderText),this.toolbarItemInternal=new oe(this.dropDown.element),this.toolbarItemInternal.setEnabled(!1),this.toolbarItemInternal.setTitle(p(u.audioContextS,{PH1:this.placeholderText})),this.items.addEventListener("ItemsReplaced",this.onListItemReplaced,this),this.toolbarItemInternal.element.classList.add("toolbar-has-dropdown"),this.selectedContextInternal=null}onListItemReplaced(){const e=!!this.items.length;this.toolbarItemInternal.setEnabled(e),e||this.toolbarItemInternal.setTitle(p(u.audioContextS,{PH1:this.placeholderText}))}contextCreated({data:e}){this.items.insert(this.items.length,e),this.items.length===1&&this.dropDown.selectItem(e)}contextDestroyed({data:e}){const t=this.items.findIndex(n=>n.contextId===e);t>-1&&this.items.remove(t)}contextChanged({data:e}){const t=this.items.findIndex(n=>n.contextId===e.contextId);t>-1&&(this.items.replace(t,e),this.selectedContextInternal&&this.selectedContextInternal.contextId===e.contextId&&this.dropDown.selectItem(e))}createElementForItem(e){const t=document.createElement("div"),o=ie(t,{cssFile:[R],delegatesFocus:void 0}).createChild("div","title");return se(o,ae(this.titleFor(e),100)),t}selectedContext(){return this.selectedContextInternal?this.selectedContextInternal:null}highlightedItemChanged(e,t,n,o){n&&n.classList.remove("highlighted"),o&&o.classList.add("highlighted")}isItemSelectable(e){return!0}itemSelected(e){e&&((!this.selectedContextInternal||this.selectedContextInternal.contextId!==e.contextId)&&(this.selectedContextInternal=e,this.toolbarItemInternal.setTitle(p(u.audioContextS,{PH1:this.titleFor(e)}))),this.dispatchEventToListeners("ContextSelected",e))}reset(){this.items.replaceAll([])}titleFor(e){return`${e.contextType} (${e.contextId.substr(-6)})`}toolbarItem(){return this.toolbarItemInternal}}const Se=Object.freeze(Object.defineProperty({__proto__:null,AudioContextSelector:z},Symbol.toStringTag,{value:"Module"}));class l extends ${enabled;agent;constructor(e){super(e),this.enabled=!1,this.agent=e.webAudioAgent(),e.registerWebAudioDispatcher(this),h.instance().addModelListener(re,de.FrameNavigated,this.flushContexts,this)}flushContexts(){this.dispatchEventToListeners("ModelReset")}async suspendModel(){this.dispatchEventToListeners("ModelSuspend"),await this.agent.invoke_disable()}async resumeModel(){if(!this.enabled)return Promise.resolve();await this.agent.invoke_enable()}ensureEnabled(){this.enabled||(this.agent.invoke_enable(),this.enabled=!0)}contextCreated({context:e}){this.dispatchEventToListeners("ContextCreated",e)}contextWillBeDestroyed({contextId:e}){this.dispatchEventToListeners("ContextDestroyed",e)}contextChanged({context:e}){this.dispatchEventToListeners("ContextChanged",e)}audioListenerCreated({listener:e}){this.dispatchEventToListeners("AudioListenerCreated",e)}audioListenerWillBeDestroyed({listenerId:e,contextId:t}){this.dispatchEventToListeners("AudioListenerWillBeDestroyed",{listenerId:e,contextId:t})}audioNodeCreated({node:e}){this.dispatchEventToListeners("AudioNodeCreated",e)}audioNodeWillBeDestroyed({contextId:e,nodeId:t}){this.dispatchEventToListeners("AudioNodeWillBeDestroyed",{contextId:e,nodeId:t})}audioParamCreated({param:e}){this.dispatchEventToListeners("AudioParamCreated",e)}audioParamWillBeDestroyed({contextId:e,nodeId:t,paramId:n}){this.dispatchEventToListeners("AudioParamWillBeDestroyed",{contextId:e,nodeId:t,paramId:n})}nodesConnected({contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o,destinationInputIndex:s}){this.dispatchEventToListeners("NodesConnected",{contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o,destinationInputIndex:s})}nodesDisconnected({contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o,destinationInputIndex:s}){this.dispatchEventToListeners("NodesDisconnected",{contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o,destinationInputIndex:s})}nodeParamConnected({contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o}){this.dispatchEventToListeners("NodeParamConnected",{contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o})}nodeParamDisconnected({contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o}){this.dispatchEventToListeners("NodeParamDisconnected",{contextId:e,sourceId:t,destinationId:n,sourceOutputIndex:o})}async requestRealtimeData(e){return(await this.agent.invoke_getRealtimeData({contextId:e})).realtimeData}}$.register(l,{capabilities:2,autostart:!1});const we=Object.freeze(Object.defineProperty({__proto__:null,WebAudioModel:l},Symbol.toStringTag,{value:"Module"})),C=4,P=10,S=5,G=12,j=30,w=5,V=6,H=8,xe=12,Ie=20,fe=20,x=P*2+C,E=x,L=S*2+C,U="14px Segoe UI, Arial",k="12px Segoe UI, Arial",Ee=Object.freeze(Object.defineProperty({__proto__:null,ArrowHeadSize:xe,AudioParamRadius:S,BottomPaddingWithParam:H,BottomPaddingWithoutParam:V,GraphMargin:fe,GraphPadding:Ie,InputPortRadius:P,LeftMarginOfText:G,LeftSideTopPadding:w,NodeLabelFontStyle:U,ParamLabelFontStyle:k,PortPadding:C,RightMarginOfText:j,TotalInputPortHeight:x,TotalOutputPortHeight:E,TotalParamPortHeight:L},Symbol.toStringTag,{value:"Module"})),F=i=>({x:0,y:P+w+i*x}),Y=(i,e,t)=>{const{width:n,height:o}=e,s=o/2+(2*i-t+1)*E/2;return{x:n,y:s}},q=(i,e)=>({x:0,y:e+L*(i+1)-S}),Le=Object.freeze(Object.defineProperty({__proto__:null,calculateInputPortXY:F,calculateOutputPortXY:Y,calculateParamPortXY:q},Symbol.toStringTag,{value:"Module"}));class X{id;type;numberOfInputs;numberOfOutputs;label;size;position;layout;ports;constructor(e,t){this.id=e.nodeId,this.type=e.nodeType,this.numberOfInputs=e.numberOfInputs,this.numberOfOutputs=e.numberOfOutputs,this.label=t,this.size={width:0,height:0},this.position=null,this.layout={inputPortSectionHeight:0,outputPortSectionHeight:0,maxTextLength:0,totalHeight:0},this.ports=new Map,this.initialize(e)}initialize(e){this.updateNodeLayoutAfterAddingNode(e),this.setupInputPorts(),this.setupOutputPorts()}addParamPort(e,t){const o=this.getPortsByType("Param").length,{x:s,y:a}=q(o,this.layout.inputPortSectionHeight);this.addPort({id:O(this.id,e),type:"Param",label:t,x:s,y:a}),this.updateNodeLayoutAfterAddingParam(o+1,t),this.setupOutputPorts()}getPortsByType(e){const t=[];return this.ports.forEach(n=>{n.type===e&&t.push(n)}),t}updateNodeLayoutAfterAddingNode(e){const t=x*Math.max(1,e.numberOfInputs)+w;this.layout.inputPortSectionHeight=t,this.layout.outputPortSectionHeight=E*e.numberOfOutputs,this.layout.totalHeight=Math.max(t+V,this.layout.outputPortSectionHeight);const n=f(this.label,U);this.layout.maxTextLength=Math.max(this.layout.maxTextLength,n),this.updateNodeSize()}updateNodeLayoutAfterAddingParam(e,t){const n=this.layout.inputPortSectionHeight+e*L+H;this.layout.totalHeight=Math.max(n,this.layout.outputPortSectionHeight);const o=f(t,k);this.layout.maxTextLength=Math.max(this.layout.maxTextLength,o),this.updateNodeSize()}updateNodeSize(){this.size={width:Math.ceil(G+this.layout.maxTextLength+j),height:this.layout.totalHeight}}setupInputPorts(){for(let e=0;e<this.numberOfInputs;e++){const{x:t,y:n}=F(e);this.addPort({id:T(this.id,e),type:"In",x:t,y:n,label:void 0})}}setupOutputPorts(){for(let e=0;e<this.numberOfOutputs;e++){const t=N(this.id,e),{x:n,y:o}=Y(e,this.size,this.numberOfOutputs);if(this.ports.has(t)){const s=this.ports.get(t);if(!s)throw new Error(`Unable to find port with id ${t}`);s.x=n,s.y=o}else this.addPort({id:t,type:"Out",x:n,y:o,label:void 0})}}addPort(e){this.ports.set(e.id,e)}}const T=(i,e)=>`${i}-input-${e||0}`,N=(i,e)=>`${i}-output-${e||0}`,O=(i,e)=>`${i}-param-${e}`;class J{totalNumberOfNodes;constructor(){this.totalNumberOfNodes=0}generateLabel(e){return e.endsWith("Node")&&(e=e.slice(0,e.length-4)),this.totalNumberOfNodes+=1,`${e} ${this.totalNumberOfNodes}`}}let I;const f=(i,e)=>{if(!I){const o=document.createElement("canvas").getContext("2d");if(!o)throw new Error("Unable to create canvas context.");I=o}const t=I;t.save(),e&&(t.font=e);const n=ce(t,i);return t.restore(),n},Te=Object.freeze(Object.defineProperty({__proto__:null,NodeLabelGenerator:J,NodeView:X,generateInputPortId:T,generateOutputPortId:N,generateParamPortId:O,measureTextWidth:f},Symbol.toStringTag,{value:"Module"}));class y{id;type;sourceId;destinationId;sourcePortId;destinationPortId;constructor(e,t){const n=m(e,t);if(!n)throw new Error("Unable to generate edge port IDs");const{edgeId:o,sourcePortId:s,destinationPortId:a}=n;this.id=o,this.type=t,this.sourceId=e.sourceId,this.destinationId=e.destinationId,this.sourcePortId=s,this.destinationPortId=a}}const m=(i,e)=>{if(!i.sourceId||!i.destinationId)return console.error(`Undefined node message: ${JSON.stringify(i)}`),null;const t=N(i.sourceId,i.sourceOutputIndex),n=o(i,e);return{edgeId:`${t}->${n}`,sourcePortId:t,destinationPortId:n};function o(s,a){if(a==="NodeToNode"){const r=s;return T(s.destinationId,r.destinationInputIndex)}if(a==="NodeToParam"){const r=s;return O(s.destinationId,r.destinationParamId)}return console.error(`Unknown edge type: ${a}`),""}},Ne=Object.freeze(Object.defineProperty({__proto__:null,EdgeView:y,generateEdgePortIdsByData:m},Symbol.toStringTag,{value:"Module"}));class K extends _{contextId;nodes;edges;outboundEdgeMap;inboundEdgeMap;nodeLabelGenerator;paramIdToNodeIdMap;constructor(e){super(),this.contextId=e,this.nodes=new Map,this.edges=new Map,this.outboundEdgeMap=new M,this.inboundEdgeMap=new M,this.nodeLabelGenerator=new J,this.paramIdToNodeIdMap=new Map}addNode(e){const t=this.nodeLabelGenerator.generateLabel(e.nodeType),n=new X(e,t);this.nodes.set(e.nodeId,n),this.notifyShouldRedraw()}removeNode(e){this.outboundEdgeMap.get(e).forEach(t=>this.removeEdge(t)),this.inboundEdgeMap.get(e).forEach(t=>this.removeEdge(t)),this.nodes.delete(e),this.notifyShouldRedraw()}addParam(e){const t=this.getNodeById(e.nodeId);if(!t){console.error("AudioNode should be added before AudioParam");return}t.addParamPort(e.paramId,e.paramType),this.paramIdToNodeIdMap.set(e.paramId,e.nodeId),this.notifyShouldRedraw()}removeParam(e){this.paramIdToNodeIdMap.delete(e)}addNodeToNodeConnection(e){const t=new y(e,"NodeToNode");this.addEdge(t)}removeNodeToNodeConnection(e){if(e.destinationId){const t=m(e,"NodeToNode");if(!t)throw new Error("Unable to generate edge port IDs");const{edgeId:n}=t;this.removeEdge(n)}else this.outboundEdgeMap.get(e.sourceId).forEach(t=>this.removeEdge(t))}addNodeToParamConnection(e){const t=new y(e,"NodeToParam");this.addEdge(t)}removeNodeToParamConnection(e){const t=m(e,"NodeToParam");if(!t)throw new Error("Unable to generate edge port IDs");const{edgeId:n}=t;this.removeEdge(n)}getNodeById(e){return this.nodes.get(e)||null}getNodes(){return this.nodes}getEdges(){return this.edges}getNodeIdByParamId(e){return this.paramIdToNodeIdMap.get(e)||null}addEdge(e){const t=e.sourceId;this.outboundEdgeMap.hasValue(t,e.id)||(this.edges.set(e.id,e),this.outboundEdgeMap.set(t,e.id),this.inboundEdgeMap.set(e.destinationId,e.id),this.notifyShouldRedraw())}removeEdge(e){const t=this.edges.get(e);t&&(this.outboundEdgeMap.delete(t.sourceId,e),this.inboundEdgeMap.delete(t.destinationId,e),this.edges.delete(e),this.notifyShouldRedraw())}notifyShouldRedraw(){this.dispatchEventToListeners("ShouldRedraw",this)}}const Oe=Object.freeze(Object.defineProperty({__proto__:null,GraphView:K},Symbol.toStringTag,{value:"Module"}));class Z{graphMapByContextId=new Map;createContext(e){const t=new K(e);this.graphMapByContextId.set(e,t)}destroyContext(e){!this.graphMapByContextId.has(e)||!this.graphMapByContextId.get(e)||this.graphMapByContextId.delete(e)}hasContext(e){return this.graphMapByContextId.has(e)}clearGraphs(){this.graphMapByContextId.clear()}getGraph(e){return this.graphMapByContextId.get(e)||null}}const De=Object.freeze(Object.defineProperty({__proto__:null,GraphManager:Z},Symbol.toStringTag,{value:"Module"})),Q=new CSSStyleSheet;Q.replaceSync(`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

.web-audio-toolbar-container {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  min-height: fit-content;
}

.web-audio-toolbar {
  display: inline-block;
}

.web-audio-landing-page {
  position: absolute;
  background-color: var(--sys-color-cdt-base-container);
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-size: 13px;
  color: var(--sys-color-on-surface);
}

.web-audio-landing-page > div {
  max-width: 500px;
  margin: 10px;
}

.web-audio-landing-page > div > p {
  flex: none;
  white-space: pre-line;
}

.web-audio-content-container {
  overflow-y: auto;
}

.web-audio-details-container {
  min-height: fit-content;
}

.web-audio-summary-container {
  flex-shrink: 0;
}

.context-detail-container {
  flex: none;
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
  flex-direction: column;
}

.context-detail-header {
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 12px 24px;
  margin-bottom: 10px;
}

.context-detail-title {
  font-size: 15px;
  font-weight: 400;
}

.context-detail-subtitle {
  font-size: 12px;
  margin-top: 10px;
  user-select: text;
}

.context-detail-row {
  flex-direction: row;
  display: flex;
  line-height: 18px;
  padding-left: 24px;
}

.context-detail-row-entry:not(:empty) {
  color: var(--sys-color-token-subtle);
  overflow: hidden;
  width: 130px;
}

.context-detail-row-value {
  user-select: text;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.context-summary-container {
  flex: 0 0 27px;
  line-height: 27px;
  padding-left: 5px;
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.context-summary-container span {
  margin-right: 6px;
}

/*# sourceURL=webAudio.css */
`);const ee={openAPageThatUsesWebAudioApiTo:"Open a page that uses Web Audio API to start monitoring."},ye=b("panels/web_audio/WebAudioView.ts",ee),be=v.bind(void 0,ye);class ve extends le{contextSelector;contentContainer;detailViewContainer;graphManager;landingPage;summaryBarContainer;constructor(){super(!0,1e3),this.element.setAttribute("jslog",`${he("web-audio").track({resize:!0})}`),this.element.classList.add("web-audio-drawer");const e=this.contentElement.createChild("div","web-audio-toolbar-container vbox");this.contextSelector=new z;const t=new B("web-audio-toolbar",e);t.appendToolbarItem(B.createActionButtonForId("components.collect-garbage")),t.appendSeparator(),t.appendToolbarItem(this.contextSelector.toolbarItem()),t.element.setAttribute("jslog",`${ue()}`),this.contentContainer=this.contentElement.createChild("div","web-audio-content-container vbox flex-auto"),this.detailViewContainer=this.contentContainer.createChild("div","web-audio-details-container vbox flex-auto"),this.graphManager=new Z,this.landingPage=new pe,this.landingPage.contentElement.classList.add("web-audio-landing-page","fill"),this.landingPage.contentElement.appendChild(g`
  <div>
  <p>${be(ee.openAPageThatUsesWebAudioApiTo)}</p>
  </div>
  `),this.landingPage.show(this.detailViewContainer),this.summaryBarContainer=this.contentContainer.createChild("div","web-audio-summary-container"),this.contextSelector.addEventListener("ContextSelected",n=>{const o=n.data;o&&this.updateDetailView(o),this.doUpdate()}),h.instance().observeModels(l,this)}wasShown(){super.wasShown(),this.registerCSSFiles([Q]);for(const e of h.instance().models(l))this.addEventListeners(e)}willHide(){for(const e of h.instance().models(l))this.removeEventListeners(e)}modelAdded(e){this.isShowing()&&this.addEventListeners(e)}modelRemoved(e){this.removeEventListeners(e)}async doUpdate(){await this.pollRealtimeData(),this.update()}addEventListeners(e){e.ensureEnabled(),e.addEventListener("ContextCreated",this.contextCreated,this),e.addEventListener("ContextDestroyed",this.contextDestroyed,this),e.addEventListener("ContextChanged",this.contextChanged,this),e.addEventListener("ModelReset",this.reset,this),e.addEventListener("ModelSuspend",this.suspendModel,this),e.addEventListener("AudioListenerCreated",this.audioListenerCreated,this),e.addEventListener("AudioListenerWillBeDestroyed",this.audioListenerWillBeDestroyed,this),e.addEventListener("AudioNodeCreated",this.audioNodeCreated,this),e.addEventListener("AudioNodeWillBeDestroyed",this.audioNodeWillBeDestroyed,this),e.addEventListener("AudioParamCreated",this.audioParamCreated,this),e.addEventListener("AudioParamWillBeDestroyed",this.audioParamWillBeDestroyed,this),e.addEventListener("NodesConnected",this.nodesConnected,this),e.addEventListener("NodesDisconnected",this.nodesDisconnected,this),e.addEventListener("NodeParamConnected",this.nodeParamConnected,this),e.addEventListener("NodeParamDisconnected",this.nodeParamDisconnected,this)}removeEventListeners(e){e.removeEventListener("ContextCreated",this.contextCreated,this),e.removeEventListener("ContextDestroyed",this.contextDestroyed,this),e.removeEventListener("ContextChanged",this.contextChanged,this),e.removeEventListener("ModelReset",this.reset,this),e.removeEventListener("ModelSuspend",this.suspendModel,this),e.removeEventListener("AudioListenerCreated",this.audioListenerCreated,this),e.removeEventListener("AudioListenerWillBeDestroyed",this.audioListenerWillBeDestroyed,this),e.removeEventListener("AudioNodeCreated",this.audioNodeCreated,this),e.removeEventListener("AudioNodeWillBeDestroyed",this.audioNodeWillBeDestroyed,this),e.removeEventListener("AudioParamCreated",this.audioParamCreated,this),e.removeEventListener("AudioParamWillBeDestroyed",this.audioParamWillBeDestroyed,this),e.removeEventListener("NodesConnected",this.nodesConnected,this),e.removeEventListener("NodesDisconnected",this.nodesDisconnected,this),e.removeEventListener("NodeParamConnected",this.nodeParamConnected,this),e.removeEventListener("NodeParamDisconnected",this.nodeParamDisconnected,this)}contextCreated(e){const t=e.data;this.graphManager.createContext(t.contextId),this.contextSelector.contextCreated(e)}contextDestroyed(e){const t=e.data;this.graphManager.destroyContext(t),this.contextSelector.contextDestroyed(e)}contextChanged(e){const t=e.data;this.graphManager.hasContext(t.contextId)&&this.contextSelector.contextChanged(e)}reset(){this.landingPage.isShowing()&&this.landingPage.detach(),this.contextSelector.reset(),this.detailViewContainer.removeChildren(),this.landingPage.show(this.detailViewContainer),this.graphManager.clearGraphs()}suspendModel(){this.graphManager.clearGraphs()}audioListenerCreated(e){const t=e.data,n=this.graphManager.getGraph(t.contextId);n&&n.addNode({nodeId:t.listenerId,nodeType:"Listener",numberOfInputs:0,numberOfOutputs:0})}audioListenerWillBeDestroyed(e){const{contextId:t,listenerId:n}=e.data,o=this.graphManager.getGraph(t);o&&o.removeNode(n)}audioNodeCreated(e){const t=e.data,n=this.graphManager.getGraph(t.contextId);n&&n.addNode({nodeId:t.nodeId,nodeType:t.nodeType,numberOfInputs:t.numberOfInputs,numberOfOutputs:t.numberOfOutputs})}audioNodeWillBeDestroyed(e){const{contextId:t,nodeId:n}=e.data,o=this.graphManager.getGraph(t);o&&o.removeNode(n)}audioParamCreated(e){const t=e.data,n=this.graphManager.getGraph(t.contextId);n&&n.addParam({paramId:t.paramId,paramType:t.paramType,nodeId:t.nodeId})}audioParamWillBeDestroyed(e){const{contextId:t,paramId:n}=e.data,o=this.graphManager.getGraph(t);o&&o.removeParam(n)}nodesConnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:s,destinationInputIndex:a}=e.data,r=this.graphManager.getGraph(t);r&&r.addNodeToNodeConnection({sourceId:n,destinationId:o,sourceOutputIndex:s,destinationInputIndex:a})}nodesDisconnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:s,destinationInputIndex:a}=e.data,r=this.graphManager.getGraph(t);r&&r.removeNodeToNodeConnection({sourceId:n,destinationId:o,sourceOutputIndex:s,destinationInputIndex:a})}nodeParamConnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:s}=e.data,a=this.graphManager.getGraph(t);if(!a)return;const r=a.getNodeIdByParamId(o);r&&a.addNodeToParamConnection({sourceId:n,destinationId:r,sourceOutputIndex:s,destinationParamId:o})}nodeParamDisconnected(e){const{contextId:t,sourceId:n,destinationId:o,sourceOutputIndex:s}=e.data,a=this.graphManager.getGraph(t);if(!a)return;const r=a.getNodeIdByParamId(o);r&&a.removeNodeToParamConnection({sourceId:n,destinationId:r,sourceOutputIndex:s,destinationParamId:o})}updateDetailView(e){this.landingPage.isShowing()&&this.landingPage.detach();const t=new W(e);this.detailViewContainer.removeChildren(),this.detailViewContainer.appendChild(t.getFragment())}updateSummaryBar(e,t){const n=new A(e,t);this.summaryBarContainer.removeChildren(),this.summaryBarContainer.appendChild(n.getFragment())}clearSummaryBar(){this.summaryBarContainer.removeChildren()}async pollRealtimeData(){const e=this.contextSelector.selectedContext();if(!e){this.clearSummaryBar();return}for(const t of h.instance().models(l))if(e.contextType==="realtime"){if(!this.graphManager.hasContext(e.contextId))continue;const n=await t.requestRealtimeData(e.contextId);n&&this.updateSummaryBar(e.contextId,n)}else this.clearSummaryBar()}}const Me=Object.freeze(Object.defineProperty({__proto__:null,WebAudioView:ve},Symbol.toStringTag,{value:"Module"}));export{Pe as AudioContextContentBuilder,Se as AudioContextSelector,Ne as EdgeView,De as GraphManager,Ee as GraphStyle,Oe as GraphView,Le as NodeRendererUtility,Te as NodeView,we as WebAudioModel,Me as WebAudioView};
//# sourceMappingURL=web_audio-CerrsfEh.js.map
