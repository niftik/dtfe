import{ce as k,b as B,g as H,aU as Z,bm as M,as as _,aR as K,cl as z,bq as u,bS as R,cm as O,cn as X,i as g,co as P,aj as F,cp as j,I as f,cq as $,aS as v,b0 as Q,cr as N,cs as J,ct as ee,cu as te}from"./inspector-CyOA7R9n.js";import{R as ie}from"./RootView-hYGHqrG8.js";const A=["left","middle","right","back","forward"],L={mousedown:"mousePressed",mouseup:"mouseReleased",mousemove:"mouseMoved"};class C extends k{inputAgent;activeMouseOffsetTop;constructor(e){super(e),this.inputAgent=e.inputAgent(),this.activeMouseOffsetTop=null}emitKeyEvent(e){let t;switch(e.type){case"keydown":t="keyDown";break;case"keyup":t="keyUp";break;case"keypress":t="char";break;default:return}const i=e.type==="keypress"?String.fromCharCode(e.charCode):void 0;this.inputAgent.invoke_dispatchKeyEvent({type:t,modifiers:this.modifiersForEvent(e),text:i,unmodifiedText:i?i.toLowerCase():void 0,keyIdentifier:e.keyIdentifier,code:e.code,key:e.key,windowsVirtualKeyCode:e.keyCode,nativeVirtualKeyCode:e.keyCode,autoRepeat:e.repeat,isKeypad:e.location===3,isSystemKey:!1,location:e.location!==3?e.location:void 0})}emitMouseEvent(e,t,i){e.type in L&&((e.type==="mousedown"||this.activeMouseOffsetTop===null)&&(this.activeMouseOffsetTop=t),this.inputAgent.invoke_dispatchMouseEvent({type:L[e.type],x:Math.round(e.offsetX/i),y:Math.round(e.offsetY/i-this.activeMouseOffsetTop),modifiers:this.modifiersForEvent(e),button:A[e.button],clickCount:e.detail}),e.type==="mouseup"&&(this.activeMouseOffsetTop=null))}emitWheelEvent(e,t,i){this.activeMouseOffsetTop===null&&(this.activeMouseOffsetTop=t),this.inputAgent.invoke_dispatchMouseEvent({type:"mouseWheel",x:Math.round(e.offsetX/i),y:Math.round(e.offsetY/i-this.activeMouseOffsetTop),modifiers:this.modifiersForEvent(e),button:A[e.button],clickCount:e.detail,deltaX:e.deltaX/i,deltaY:e.deltaY/i})}modifiersForEvent(e){return Number(e.getModifierState("Alt"))|Number(e.getModifierState("Control"))<<1|Number(e.getModifierState("Meta"))<<2|Number(e.getModifierState("Shift"))<<3}}k.register(C,{capabilities:1024,autostart:!1});const he=Object.freeze(Object.defineProperty({__proto__:null,InputModel:C},Symbol.toStringTag,{value:"Module"})),U=new CSSStyleSheet;U.replaceSync(`/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

.screencast {
  overflow: hidden;
}

.screencast-navigation {
  flex-direction: row;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 1px;
  border-bottom: 1px solid var(--sys-color-divider);
  background-origin: padding-box;
  background-clip: padding-box;
}

.screencast-navigation button {
  border-width: 0;
  padding: 5px;
  width: 28px;
  height: 26px;
  background: none;
}

.screencast-navigation button devtools-icon {
  width: 100%;
  height: 100%;
}

.screencast-navigation button[disabled].navigation {
  opacity: 50%;
}

.screencast-navigation input {
  flex: 1;
  margin: 2px;
  max-height: 19px;
}

.screencast-navigation .progress {
  background-color: var(--sys-color-primary-bright);
  height: 3px;
  left: 0;
  position: absolute;
  top: 100%;  /* Align with the bottom edge of the parent. */
  width: 0;
  z-index: 2;  /* Above .screencast-glasspane. */
}

.screencast-viewport {
  display: flex;
  border: 0px solid var(--sys-color-divider);
  border-radius: 0px;
  flex: none;
  padding: 0px;
  margin: 0px;
  align-self: center;
  width: 100%;
  background-color: var(--sys-color-surface-variant);
}

.screencast-canvas-container {
  flex: auto;
  display: flex;
  border: 0px solid var(--sys-color-divider);
  position: relative;
}

.screencast-canvas-container.touchable {
  cursor: image-set(var(--image-file-touchCursor) 1x, var(--image-file-touchCursor_2x) 2x), default;
}

.screencast canvas {
  flex: auto;
  position: relative;
}

.screencast-element-title {
  position: absolute;
  z-index: 10;
}

.screencast-tag-name {
  color: var(--sys-color-token-tag);
}

.screencast-attribute {
  color: var(--sys-color-token-attribute);
}

.screencast-dimension {
  /* Keep this in sync with tool_highlight.css (.dimensions) */
  color: var(--sys-color-outline);
}

.screencast-glasspane {
  background-color: var(--color-background-opacity-80);
  font-size: 30px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*# sourceURL=screencastView.css */
`);const c={screencastViewOfDebugTarget:"Screencast view of debug target",theTabIsInactive:"The tab is inactive",profilingInProgress:"Profiling in progress",back:"back",forward:"forward",reload:"reload",addressBar:"Address bar",touchInput:"Use touch",mouseInput:"Use mouse"},se=B("panels/screencast/ScreencastView.ts",c),d=H.bind(void 0,se);class D extends Z{screenCaptureModel;domModel;overlayModel;resourceTreeModel;networkManager;inputModel;shortcuts;scrollOffsetX;scrollOffsetY;screenZoom;screenOffsetTop;pageScaleFactor;imageElement;viewportElement;glassPaneElement;canvasElement;titleElement;context;imageZoom;tagNameElement;attributeElement;nodeWidthElement;nodeHeightElement;model;highlightConfig;navigationUrl;navigationBack;navigationForward;canvasContainerElement;isCasting;checkerboardPattern;targetInactive;deferredCasting;highlightNode;config;node;inspectModeConfig;navigationBar;navigationReload;navigationProgressBar;touchInputToggle;mouseInputToggle;touchInputToggleIcon;mouseInputToggleIcon;historyIndex;historyEntries;constructor(e){super(),this.screenCaptureModel=e,this.domModel=e.target().model(M),this.overlayModel=e.target().model(_),this.resourceTreeModel=e.target().model(K),this.networkManager=e.target().model(z),this.inputModel=e.target().model(C),this.setMinimumSize(150,150),this.shortcuts={},this.scrollOffsetX=0,this.scrollOffsetY=0,this.screenZoom=1,this.screenOffsetTop=0,this.pageScaleFactor=1,this.imageZoom=1}initialize(){this.element.classList.add("screencast"),this.createNavigationBar(),this.viewportElement=this.element.createChild("div","screencast-viewport hidden"),this.canvasContainerElement=this.viewportElement.createChild("div","screencast-canvas-container"),this.glassPaneElement=this.canvasContainerElement.createChild("div","screencast-glasspane fill hidden"),this.canvasElement=this.canvasContainerElement.createChild("canvas"),u(this.canvasElement,d(c.screencastViewOfDebugTarget)),this.canvasElement.tabIndex=0,this.canvasElement.addEventListener("mousedown",this.handleMouseEvent.bind(this),!1),this.canvasElement.addEventListener("mouseup",this.handleMouseEvent.bind(this),!1),this.canvasElement.addEventListener("mousemove",this.handleMouseEvent.bind(this),!1),this.canvasElement.addEventListener("wheel",this.handleWheelEvent.bind(this),!1),this.canvasElement.addEventListener("click",this.handleMouseEvent.bind(this),!1),this.canvasElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!1),this.canvasElement.addEventListener("keydown",this.handleKeyEvent.bind(this),!1),this.canvasElement.addEventListener("keyup",this.handleKeyEvent.bind(this),!1),this.canvasElement.addEventListener("keypress",this.handleKeyEvent.bind(this),!1),this.canvasElement.addEventListener("blur",this.handleBlurEvent.bind(this),!1),this.titleElement=this.canvasContainerElement.createChild("div","screencast-element-title monospace hidden"),this.tagNameElement=this.titleElement.createChild("span","screencast-tag-name"),this.attributeElement=this.titleElement.createChild("span","screencast-attribute"),R(this.titleElement," ");const e=this.titleElement.createChild("span","screencast-dimension");this.nodeWidthElement=e.createChild("span"),R(e," × "),this.nodeHeightElement=e.createChild("span"),this.titleElement.style.top="0",this.titleElement.style.left="0",this.imageElement=new Image,this.isCasting=!1,this.context=this.canvasElement.getContext("2d"),this.checkerboardPattern=this.createCheckerboardPattern(this.context),this.shortcuts[O.makeKey("l",X.Ctrl)]=this.focusNavigationBar.bind(this),g.instance().addEventListener("SuspendStateChanged",this.onSuspendStateChange,this),this.updateGlasspane()}wasShown(){this.startCasting(),this.registerCSSFiles([U])}willHide(){this.stopCasting()}startCasting(){if(g.instance().allTargetsSuspended()||this.isCasting)return;this.isCasting=!0;const e=2048,t=this.viewportDimensions();if(t.width<0||t.height<0){this.isCasting=!1;return}t.width*=window.devicePixelRatio,t.height*=window.devicePixelRatio,this.screenCaptureModel.startScreencast("jpeg",80,Math.floor(Math.min(e,t.width)),Math.floor(Math.min(e,t.height)),void 0,this.screencastFrame.bind(this),this.screencastVisibilityChanged.bind(this)),this.overlayModel&&this.overlayModel.setHighlighter(this)}stopCasting(){if(this.isCasting){this.isCasting=!1,this.screenCaptureModel.stopScreencast();for(const e of g.instance().models(P))e.overrideEmulateTouch(!1);this.overlayModel&&this.overlayModel.setHighlighter(null)}}screencastFrame(e,t){this.imageElement.onload=()=>{this.pageScaleFactor=t.pageScaleFactor,this.screenOffsetTop=t.offsetTop,this.scrollOffsetX=t.scrollOffsetX,this.scrollOffsetY=t.scrollOffsetY;const i=t.deviceHeight/t.deviceWidth,s=this.viewportDimensions();this.imageZoom=Math.min(s.width/this.imageElement.naturalWidth,s.height/(this.imageElement.naturalWidth*i)),this.viewportElement.classList.remove("hidden");const n=w;this.imageZoom<1.01/window.devicePixelRatio&&(this.imageZoom=1/window.devicePixelRatio),this.screenZoom=this.imageElement.naturalWidth*this.imageZoom/t.deviceWidth,this.viewportElement.style.width=t.deviceWidth*this.screenZoom+n+"px",this.viewportElement.style.height=t.deviceHeight*this.screenZoom+n+"px";const h=this.highlightNode?{node:this.highlightNode,selectorList:void 0}:{clear:!0};this.updateHighlightInOverlayAndRepaint(h,this.highlightConfig)},this.imageElement.src="data:image/jpg;base64,"+e}isGlassPaneActive(){return!this.glassPaneElement.classList.contains("hidden")}screencastVisibilityChanged(e){this.targetInactive=!e,this.updateGlasspane()}onSuspendStateChange(){g.instance().allTargetsSuspended()?this.stopCasting():this.startCasting(),this.updateGlasspane()}updateGlasspane(){this.targetInactive?(this.glassPaneElement.textContent=d(c.theTabIsInactive),this.glassPaneElement.classList.remove("hidden")):g.instance().allTargetsSuspended()?(this.glassPaneElement.textContent=d(c.profilingInProgress),this.glassPaneElement.classList.remove("hidden")):this.glassPaneElement.classList.add("hidden")}async handleMouseEvent(e){if(this.isGlassPaneActive()){e.consume();return}if(!this.pageScaleFactor||!this.domModel)return;if(!this.inspectModeConfig){this.inputModel&&this.inputModel.emitMouseEvent(e,this.screenOffsetTop,this.screenZoom),e.preventDefault(),e.type==="mousedown"&&this.canvasElement.focus();return}const t=this.convertIntoScreenSpace(e),i=await this.domModel.nodeForLocation(Math.floor(t.x/this.pageScaleFactor+this.scrollOffsetX),Math.floor(t.y/this.pageScaleFactor+this.scrollOffsetY),F.instance().moduleSetting("show-ua-shadow-dom").get());i&&(e.type==="mousemove"?(this.updateHighlightInOverlayAndRepaint({node:i,selectorList:void 0},this.inspectModeConfig),this.domModel.overlayModel().nodeHighlightRequested({nodeId:i.id})):e.type==="click"&&this.domModel.overlayModel().inspectNodeRequested({backendNodeId:i.backendNodeId()}))}async handleWheelEvent(e){if(this.isGlassPaneActive()){e.consume();return}!this.pageScaleFactor||!this.domModel||(this.inputModel&&this.inputModel.emitWheelEvent(e,this.screenOffsetTop,this.screenZoom),e.preventDefault())}handleKeyEvent(e){if(this.isGlassPaneActive()){e.consume();return}const t=O.makeKeyFromEvent(e),i=this.shortcuts[t];if(i&&i(e)){e.consume();return}this.inputModel&&this.inputModel.emitKeyEvent(e),e.consume(),this.canvasElement.focus()}handleBlurEvent(){if(this.inputModel&&this.mouseInputToggle?.disabled){const e=new MouseEvent("mouseup");this.inputModel.emitMouseEvent(e,this.screenOffsetTop,this.screenZoom)}}handleContextMenuEvent(e){e.consume(!0)}convertIntoScreenSpace(e){return{x:Math.round(e.offsetX/this.screenZoom),y:Math.round(e.offsetY/this.screenZoom-this.screenOffsetTop)}}onResize(){this.deferredCasting&&(clearTimeout(this.deferredCasting),delete this.deferredCasting),this.stopCasting(),this.deferredCasting=window.setTimeout(this.startCasting.bind(this),100)}highlightInOverlay(e,t){this.updateHighlightInOverlayAndRepaint(e,t)}async updateHighlightInOverlayAndRepaint(e,t){let i=null;if("node"in e&&(i=e.node),!i&&"deferredNode"in e&&(i=await e.deferredNode.resolvePromise()),!i&&"object"in e){const s=e.object.runtimeModel().target().model(M);s&&(i=await s.pushObjectAsNodeToFrontend(e.object))}if(this.highlightNode=i,this.highlightConfig=t,!i){this.model=null,this.config=null,this.node=null,this.titleElement.classList.add("hidden"),this.repaint();return}this.node=i,i.boxModel().then(s=>{if(!s||!this.pageScaleFactor){this.repaint();return}this.model=this.scaleModel(s),this.config=t,this.repaint()})}scaleModel(e){function t(i){for(let s=0;s<i.length;s+=2)i[s]=i[s]*this.pageScaleFactor*this.screenZoom,i[s+1]=(i[s+1]*this.pageScaleFactor+this.screenOffsetTop)*this.screenZoom}return t.call(this,e.content),t.call(this,e.padding),t.call(this,e.border),t.call(this,e.margin),e}repaint(){const e=this.model,t=this.config,i=this.canvasElement.getBoundingClientRect().width,s=this.canvasElement.getBoundingClientRect().height;if(this.canvasElement.width=window.devicePixelRatio*i,this.canvasElement.height=window.devicePixelRatio*s,this.context.save(),this.context.scale(window.devicePixelRatio,window.devicePixelRatio),this.context.save(),this.checkerboardPattern&&(this.context.fillStyle=this.checkerboardPattern),this.context.fillRect(0,0,i,this.screenOffsetTop*this.screenZoom),this.context.fillRect(0,this.screenOffsetTop*this.screenZoom+this.imageElement.naturalHeight*this.imageZoom,i,s),this.context.restore(),e&&t){this.context.save();const n=[],h=l=>!!(l.a&&l.a===0);e.content&&t.contentColor&&!h(t.contentColor)&&n.push({quad:e.content,color:t.contentColor}),e.padding&&t.paddingColor&&!h(t.paddingColor)&&n.push({quad:e.padding,color:t.paddingColor}),e.border&&t.borderColor&&!h(t.borderColor)&&n.push({quad:e.border,color:t.borderColor}),e.margin&&t.marginColor&&!h(t.marginColor)&&n.push({quad:e.margin,color:t.marginColor});for(let l=n.length-1;l>0;--l)this.drawOutlinedQuadWithClip(n[l].quad,n[l-1].quad,n[l].color);n.length>0&&this.drawOutlinedQuad(n[0].quad,n[0].color),this.context.restore(),this.drawElementTitle(),this.context.globalCompositeOperation="destination-over"}this.context.drawImage(this.imageElement,0,this.screenOffsetTop*this.screenZoom,this.imageElement.naturalWidth*this.imageZoom,this.imageElement.naturalHeight*this.imageZoom),this.context.restore()}cssColor(e){return e?j.fromRGBA([e.r,e.g,e.b,e.a!==void 0?e.a:1]).asString("rgba")||"":"transparent"}quadToPath(e){return this.context.beginPath(),this.context.moveTo(e[0],e[1]),this.context.lineTo(e[2],e[3]),this.context.lineTo(e[4],e[5]),this.context.lineTo(e[6],e[7]),this.context.closePath(),this.context}drawOutlinedQuad(e,t){this.context.save(),this.context.lineWidth=2,this.quadToPath(e).clip(),this.context.fillStyle=this.cssColor(t),this.context.fill(),this.context.restore()}drawOutlinedQuadWithClip(e,t,i){this.context.fillStyle=this.cssColor(i),this.context.save(),this.context.lineWidth=0,this.quadToPath(e).fill(),this.context.globalCompositeOperation="destination-out",this.context.fillStyle="red",this.quadToPath(t).fill(),this.context.restore()}drawElementTitle(){if(!this.node)return;const e=this.canvasElement.getBoundingClientRect().width,t=this.canvasElement.getBoundingClientRect().height,i=this.node.localName()||this.node.nodeName().toLowerCase();this.tagNameElement.textContent=i,this.attributeElement.textContent=ne(this.node),this.nodeWidthElement.textContent=String(this.model?this.model.width:0),this.nodeHeightElement.textContent=String(this.model?this.model.height:0),this.titleElement.classList.remove("hidden");const s=this.titleElement.offsetWidth+6,n=this.titleElement.offsetHeight+4,h=this.model?this.model.margin[1]:0,l=this.model?this.model.margin[7]:0,a=7;let E=!1,T=!1,r=Math.max(2,this.model?this.model.margin[0]:0);r+s>e&&(r=e-s-2);let o;h>t?(o=t-n-a,T=!0):l<0?(o=a,E=!0):l+n+a<t?(o=l+a-4,E=!0):h-n-a>0?(o=h-n-a+3,T=!0):o=a,this.context.save(),this.context.translate(.5,.5),this.context.beginPath(),this.context.moveTo(r,o),E&&(this.context.lineTo(r+2*a,o),this.context.lineTo(r+3*a,o-a),this.context.lineTo(r+4*a,o)),this.context.lineTo(r+s,o),this.context.lineTo(r+s,o+n),T&&(this.context.lineTo(r+4*a,o+n),this.context.lineTo(r+3*a,o+n+a),this.context.lineTo(r+2*a,o+n)),this.context.lineTo(r,o+n),this.context.closePath(),this.context.fillStyle="var(--sys-color-yellow-container)",this.context.fill(),this.context.strokeStyle="var(--sys-color-outline)",this.context.stroke(),this.context.restore(),this.titleElement.style.top=o+3+"px",this.titleElement.style.left=r+3+"px"}viewportDimensions(){const t=w,i=this.element.offsetWidth-t-0,s=this.element.offsetHeight-t-0-q;return{width:i,height:s}}setInspectMode(e,t){return this.inspectModeConfig=e!=="none"?t:null,Promise.resolve()}highlightFrame(e){}createCheckerboardPattern(e){const t=document.createElement("canvas"),i=32;t.width=i*2,t.height=i*2;const s=t.getContext("2d");return s.fillStyle="var(--sys-color-neutral-outline)",s.fillRect(0,0,i*2,i*2),s.fillStyle="var(--sys-color-surface-variant)",s.fillRect(0,0,i,i),s.fillRect(i,i,i,i),e.createPattern(t,"repeat")}createNavigationBar(){this.navigationBar=this.element.createChild("div","screencast-navigation"),this.navigationBack=this.navigationBar.createChild("button","navigation");{const e=this.navigationBack.appendChild(new f);e.data={color:"var(--icon-default)",iconName:"arrow-back"}}this.navigationBack.disabled=!0,u(this.navigationBack,d(c.back)),this.navigationForward=this.navigationBar.createChild("button","navigation");{const e=this.navigationForward.appendChild(new f);e.data={color:"var(--icon-default)",iconName:"arrow-forward"}}this.navigationForward.disabled=!0,u(this.navigationForward,d(c.forward)),this.navigationReload=this.navigationBar.createChild("button","navigation");{const e=this.navigationReload.appendChild(new f);e.data={color:"var(--icon-default)",iconName:"refresh"}}u(this.navigationReload,d(c.reload)),this.navigationUrl=this.navigationBar.appendChild($()),this.navigationUrl.type="text",u(this.navigationUrl,d(c.addressBar)),this.mouseInputToggle=this.navigationBar.createChild("button"),this.mouseInputToggle.disabled=!0,this.mouseInputToggleIcon=this.mouseInputToggle.appendChild(new f),this.mouseInputToggleIcon.data={color:"var(--icon-toggled)",iconName:"mouse"},u(this.mouseInputToggle,d(c.mouseInput)),this.touchInputToggle=this.navigationBar.createChild("button"),this.touchInputToggleIcon=this.touchInputToggle.appendChild(new f),this.touchInputToggleIcon.data={color:"var(--icon-default)",iconName:"touch-app"},u(this.touchInputToggle,d(c.touchInput)),this.navigationProgressBar=new Y(this.resourceTreeModel,this.networkManager,this.navigationBar.createChild("div","progress")),this.resourceTreeModel&&(this.navigationBack.addEventListener("click",this.navigateToHistoryEntry.bind(this,-1),!1),this.navigationForward.addEventListener("click",this.navigateToHistoryEntry.bind(this,1),!1),this.navigationReload.addEventListener("click",this.navigateReload.bind(this),!1),this.navigationUrl.addEventListener("keyup",this.navigationUrlKeyUp.bind(this),!0),this.touchInputToggle.addEventListener("click",this.#e.bind(this,!0),!1),this.mouseInputToggle.addEventListener("click",this.#e.bind(this,!1),!1),this.requestNavigationHistory(),this.resourceTreeModel.addEventListener(v.PrimaryPageChanged,this.requestNavigationHistoryEvent,this),this.resourceTreeModel.addEventListener(v.CachedResourcesLoaded,this.requestNavigationHistoryEvent,this))}navigateToHistoryEntry(e){if(!this.resourceTreeModel)return;const t=(this.historyIndex||0)+e;!this.historyEntries||t<0||t>=this.historyEntries.length||(this.resourceTreeModel.navigateToHistoryEntry(this.historyEntries[t]),this.requestNavigationHistory())}navigateReload(){this.resourceTreeModel&&this.resourceTreeModel.reloadPage()}navigationUrlKeyUp(e){if(e.key!=="Enter")return;let t=this.navigationUrl.value;t&&(t.match(W)||(t="http://"+t),this.resourceTreeModel&&this.resourceTreeModel.navigate(t),this.canvasElement.focus())}#e(e){if(!this.canvasContainerElement||!this.isCasting||!this.mouseInputToggle||!this.touchInputToggle||!this.mouseInputToggleIcon||!this.touchInputToggleIcon)return;const t=g.instance().models(P);for(const i of t)i.overrideEmulateTouch(e);this.mouseInputToggle.disabled=!e,this.touchInputToggle.disabled=e,this.mouseInputToggleIcon.data={...this.mouseInputToggleIcon.data,color:this.mouseInputToggle.disabled?"var(--icon-toggled)":"var(--icon-default)"},this.touchInputToggleIcon.data={...this.touchInputToggleIcon.data,color:this.touchInputToggle.disabled?"var(--icon-toggled)":"var(--icon-default)"},this.canvasContainerElement.classList.toggle("touchable",e)}requestNavigationHistoryEvent(){this.requestNavigationHistory()}async requestNavigationHistory(){const e=this.resourceTreeModel?await this.resourceTreeModel.navigationHistory():null;if(!e)return;this.historyIndex=e.currentIndex,this.historyEntries=e.entries,this.navigationBack.disabled=this.historyIndex===0,this.navigationForward.disabled=this.historyIndex===this.historyEntries.length-1;let t=this.historyEntries[this.historyIndex].url;const i=t.match(V);i&&(t=i[1]),Q.inspectedURLChanged(t),this.navigationUrl.value=decodeURI(t)}focusNavigationBar(){return this.navigationUrl.focus(),this.navigationUrl.select(),!0}}const w=0,q=29,V=/^http:\/\/(.+)/,W=/^(https?|about|chrome):/;class Y{element;requestIds;startedRequests;finishedRequests;maxDisplayedProgress;constructor(e,t,i){this.element=i,e&&(e.addEventListener(v.PrimaryPageChanged,this.onPrimaryPageChanged,this),e.addEventListener(v.Load,this.onLoad,this)),t&&(t.addEventListener(N.RequestStarted,this.onRequestStarted,this),t.addEventListener(N.RequestFinished,this.onRequestFinished,this)),this.requestIds=null,this.startedRequests=0,this.finishedRequests=0,this.maxDisplayedProgress=0}onPrimaryPageChanged(){this.requestIds=new Map,this.startedRequests=0,this.finishedRequests=0,this.maxDisplayedProgress=0,this.updateProgress(.1)}onLoad(){this.requestIds=null,this.updateProgress(1),window.setTimeout(()=>{this.navigationProgressVisible()||this.displayProgress(0)},500)}navigationProgressVisible(){return this.requestIds!==null}onRequestStarted(e){if(!this.navigationProgressVisible())return;const t=e.data.request;t.resourceType()!==J.WebSocket&&(this.requestIds&&this.requestIds.set(t.requestId(),t),++this.startedRequests)}onRequestFinished(e){if(!this.navigationProgressVisible())return;const t=e.data;this.requestIds&&!this.requestIds.has(t.requestId())||(++this.finishedRequests,window.setTimeout(()=>{this.updateProgress(this.finishedRequests/this.startedRequests*.9)},500))}updateProgress(e){this.navigationProgressVisible()&&(this.maxDisplayedProgress>=e||(this.maxDisplayedProgress=e,this.displayProgress(e)))}displayProgress(e){this.element.style.width=100*e+"%"}}function ne(m){const e=m.getAttribute("id"),t=m.getAttribute("class");let i=e?"#"+e:"";return t&&(i+="."+t.trim().replace(/\s+/g,".")),i.length>50&&(i=i.substring(0,50)+"…"),i}const ce=Object.freeze(Object.defineProperty({__proto__:null,BORDERS_SIZE:w,HTTP_REGEX:V,NAVBAR_HEIGHT:q,ProgressTracker:Y,SCHEME_REGEX:W,ScreencastView:D},Symbol.toStringTag,{value:"Module"})),G={toggleScreencast:"Toggle screencast"},oe=B("panels/screencast/ScreencastApp.ts",G),ae=H.bind(void 0,oe);let b;class p{enabledSetting;toggleButton;screenCaptureModel;screencastView;rootView;constructor(){this.enabledSetting=F.instance().createSetting("screencast-enabled",!0),this.toggleButton=new ee(ae(G.toggleScreencast),"devices"),this.toggleButton.setToggled(this.enabledSetting.get()),this.toggleButton.setEnabled(!1),this.toggleButton.addEventListener("Click",this.toggleButtonClicked,this),g.instance().observeModels(te,this)}static instance(){return b||(b=new p),b}presentUI(e){this.rootView=new ie,this.rootView.attachToDocument(e),this.rootView.focus()}modelAdded(e){e.target()===g.instance().primaryPageTarget()&&(this.screenCaptureModel=e,this.toggleButton.setEnabled(!0),this.screencastView=new D(e),this?.rootView?.element&&this.screencastView.show(this.rootView.element),this.screencastView.initialize(),this.onScreencastEnabledChanged())}modelRemoved(e){this.screenCaptureModel===e&&(delete this.screenCaptureModel,this.toggleButton.setEnabled(!1),this.screencastView&&(this.screencastView.detach(),delete this.screencastView),this.onScreencastEnabledChanged())}toggleButtonClicked(){const e=this.toggleButton.isToggled();this.enabledSetting.set(e),this.onScreencastEnabledChanged()}onScreencastEnabledChanged(){const e=!!(this.enabledSetting.get()&&this.screencastView);this.toggleButton.setToggled(e)}}let I;class S{static instance(e={forceNew:!1}){const{forceNew:t}=e;return(!I||t)&&(I=new S),I}item(){return p.instance().toggleButton}}let y;class x{static instance(e={forceNew:!1}){const{forceNew:t}=e;return(!y||t)&&(y=new x),y}createApp(){return p.instance()}}const de=Object.freeze(Object.defineProperty({__proto__:null,ScreencastApp:p,ScreencastAppProvider:x,ToolbarButtonProvider:S},Symbol.toStringTag,{value:"Module"}));export{he as InputModel,de as ScreencastApp,ce as ScreencastView};
//# sourceMappingURL=screencast-R1gJLhUw.js.map
