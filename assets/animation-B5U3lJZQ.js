import{ar as F,dP as U,c5 as j,aR as et,ce as it,aS as Tt,cu as At,bl as _,aU as nt,b as st,g as ot,h as H,bp as St,an as u,bG as $,i as P,bm as kt,dQ as Ct,cH as rt,dR as at,cP as M,bz as Pt,bA as W,bN as K,u as b,A as g,ct as Et,dS as X,bq as T,bM as lt,dT as V,l as Rt,bb as Mt,dU as Lt,dV as q,dO as J,dW as It,bS as Ot,dX as Dt,dY as Gt,dZ as Nt,ao as Ft,dd as _t,V as Bt,r as zt,bu as v,cc as Ut,b6 as jt,cA as O}from"./inspector-CyOA7R9n.js";import"./swatchPopover.css-CdLS3b97.js";import{B as Ht,H as $t}from"./BezierUI-Cu0bTMGR.js";import{d as Wt}from"./Debouncer-BW_30p93.js";import"./cssOverview.css-C_I9lWrq.js";import"./PanelIntroductionSteps-BeLT2-qM.js";import"./PreviewToggle-D6BBIbZ3.js";const D="devtools_animations",E="__devtools_report_scroll_position__",Q=a=>`__devtools_scroll_listener_${a}__`;async function Y(a,t){const e=a.domModel().target().model(et),i=a.domModel().target().pageAgent();for(const n of e.frames()){const{executionContextId:s}=await i.invoke_createIsolatedWorld({frameId:n.id,worldName:t}),o=await a.resolveToObject(void 0,s);if(o)return o}return null}class S{#e;#t;#i;static lastAddedListenerId=0;constructor(t){this.#e=t,this.#t=new Map}async#n(){if(this.#i)return;this.#i=e=>{const{name:i,payload:n}=e.data;if(i!==E)return;const{scrollTop:s,scrollLeft:o,id:r}=JSON.parse(n),h=this.#t.get(r);h&&h({scrollTop:s,scrollLeft:o})};const t=this.#e.domModel().target().model(F);await t.addBinding({name:E,executionContextName:D}),t.addEventListener(U.BindingCalled,this.#i)}async#o(){if(!this.#i)return;const t=this.#e.domModel().target().model(F);await t.removeBinding({name:E}),t.removeEventListener(U.BindingCalled,this.#i),this.#i=void 0}async addScrollEventListener(t){S.lastAddedListenerId++;const e=S.lastAddedListenerId;this.#t.set(e,t),this.#i||await this.#n();const i=await Y(this.#e,D);if(!i)return null;return await i.callFunction(n,[e,E,Q(e)].map(s=>j.toCallArgument(s))),i.release(),e;function n(s,o,r){if("scrollingElement"in this&&!this.scrollingElement)return;const h="scrollingElement"in this?this.scrollingElement:this;this[r]=()=>{globalThis[o](JSON.stringify({scrollTop:h.scrollTop,scrollLeft:h.scrollLeft,id:s}))},this.addEventListener("scroll",this[r],!0)}}async removeScrollEventListener(t){const e=await Y(this.#e,D);if(!e)return;await e.callFunction(i,[Q(t)].map(n=>j.toCallArgument(n))),e.release(),this.#t.delete(t),this.#t.size===0&&await this.#o();function i(n){this.removeEventListener("scroll",this[n]),delete this[n]}}async scrollTop(){return this.#e.callFunction(t).then(e=>e?.value??null);function t(){return"scrollingElement"in this?this.scrollingElement?this.scrollingElement.scrollTop:0:this.scrollTop}}async scrollLeft(){return this.#e.callFunction(t).then(e=>e?.value??null);function t(){return"scrollingElement"in this?this.scrollingElement?this.scrollingElement.scrollLeft:0:this.scrollLeft}}async setScrollTop(t){await this.#e.callFunction(e,[t]);function e(i){if("scrollingElement"in this){if(!this.scrollingElement)return;this.scrollingElement.scrollTop=i}else this.scrollTop=i}}async setScrollLeft(t){await this.#e.callFunction(e,[t]);function e(i){if("scrollingElement"in this){if(!this.scrollingElement)return;this.scrollingElement.scrollLeft=i}else this.scrollLeft=i}}async verticalScrollRange(){return this.#e.callFunction(t).then(e=>e?.value??null);function t(){return"scrollingElement"in this?this.scrollingElement?this.scrollingElement.scrollHeight-this.scrollingElement.clientHeight:0:this.scrollHeight-this.clientHeight}}async horizontalScrollRange(){return this.#e.callFunction(t).then(e=>e?.value??null);function t(){return"scrollingElement"in this?this.scrollingElement?this.scrollingElement.scrollWidth-this.scrollingElement.clientWidth:0:this.scrollWidth-this.clientWidth}}}const se=Object.freeze(Object.defineProperty({__proto__:null,AnimationDOMNode:S},Symbol.toStringTag,{value:"Module"}));function ht(a,t){const e=a.viewOrScrollTimeline(),i=t.viewOrScrollTimeline();return e?!!(i&&e.sourceNodeId===i.sourceNodeId&&e.axis===i.axis):!i&&a.startTime()===t.startTime()}class A extends it{runtimeModel;agent;#e;animationGroups;#t;playbackRate;#i;#n;#o;constructor(t){super(t),this.runtimeModel=t.model(F),this.agent=t.animationAgent(),t.registerAnimationDispatcher(new ft(this)),this.#e=new Map,this.animationGroups=new Map,this.#t=new Set,this.playbackRate=1,t.model(et).addEventListener(Tt.PrimaryPageChanged,this.reset,this);const i=t.model(At);i&&(this.#i=new pt(this,i)),this.#o=Wt(()=>{for(;this.#t.size;)this.matchExistingGroups(this.createGroupFromPendingAnimations())},100)}reset(){this.#e.clear(),this.animationGroups.clear(),this.#t.clear(),this.dispatchEventToListeners(f.ModelReset)}async devicePixelRatio(){const t=await this.target().runtimeAgent().invoke_evaluate({expression:"window.devicePixelRatio"});return t?.result.type==="number"?t?.result.value??1:1}animationCanceled(t){this.#t.delete(t)}async animationUpdated(t){let e,i;for(const n of this.animationGroups.values())if(i=n.animations().find(s=>s.id()===t.id),i){e=n;break}!i||!e||(await i.setPayload(t),this.dispatchEventToListeners(f.AnimationGroupUpdated,e))}async animationStarted(t){if(!t.source||!t.source.backendNodeId)return;const e=await L.parsePayload(this,t),i=e.source().keyframesRule();e.type()==="WebAnimation"&&i&&i.keyframes().length===0?this.#t.delete(e.id()):(this.#e.set(e.id(),e),this.#t.add(e.id())),this.#o()}matchExistingGroups(t){let e=null;for(const i of this.animationGroups.values()){if(i.matches(t)){e=i,i.rebaseTo(t);break}if(i.shouldInclude(t)){e=i,i.appendAnimations(t.animations());break}}return e?this.dispatchEventToListeners(f.AnimationGroupUpdated,e):(this.animationGroups.set(t.id(),t),this.#i&&this.#i.captureScreenshots(t.finiteDuration(),t.screenshotsInternal),this.dispatchEventToListeners(f.AnimationGroupStarted,t)),!!e}createGroupFromPendingAnimations(){console.assert(this.#t.size>0);const t=this.#t.values().next().value;this.#t.delete(t);const e=this.#e.get(t);if(!e)throw new Error("Unable to locate first animation");const i=[e],n=new Set;for(const s of this.#t){const o=this.#e.get(s);ht(e,o)?i.push(o):n.add(s)}return this.#t=n,i.sort((s,o)=>s.startTime()-o.startTime()),new ut(this,t,i)}setPlaybackRate(t){this.playbackRate=t,this.agent.invoke_setPlaybackRate({playbackRate:t})}releaseAnimations(t){this.agent.invoke_releaseAnimations({animations:t})}async suspendModel(){this.reset(),await this.agent.invoke_disable()}async resumeModel(){this.#n&&await this.agent.invoke_enable()}async ensureEnabled(){this.#n||(await this.agent.invoke_enable(),this.#n=!0)}}var f;(function(a){a.AnimationGroupStarted="AnimationGroupStarted",a.AnimationGroupUpdated="AnimationGroupUpdated",a.ModelReset="ModelReset"})(f||(f={}));class L{#e;#t;#i;#n;constructor(t){this.#e=t}static async parsePayload(t,e){const i=new L(t);return await i.setPayload(e),i}async setPayload(t){if(t.viewOrScrollTimeline){const e=await this.#e.devicePixelRatio();t.viewOrScrollTimeline.startOffset&&(t.viewOrScrollTimeline.startOffset/=e),t.viewOrScrollTimeline.endOffset&&(t.viewOrScrollTimeline.endOffset/=e)}this.#t=t,this.#i&&t.source?this.#i.setPayload(t.source):!this.#i&&t.source&&(this.#i=new ct(this.#e,t.source))}percentageToPixels(t,e){const{startOffset:i,endOffset:n}=e;if(i===void 0||n===void 0)throw new Error("startOffset or endOffset does not exist in viewOrScrollTimeline");return(n-i)*(t/100)}viewOrScrollTimeline(){return this.#t.viewOrScrollTimeline}id(){return this.#t.id}name(){return this.#t.name}paused(){return this.#t.pausedState}playState(){return this.#n||this.#t.playState}setPlayState(t){this.#n=t}playbackRate(){return this.#t.playbackRate}startTime(){const t=this.viewOrScrollTimeline();return t?this.percentageToPixels(this.playbackRate()>0?this.#t.startTime:100-this.#t.startTime,t)+(this.viewOrScrollTimeline()?.startOffset??0):this.#t.startTime}iterationDuration(){const t=this.viewOrScrollTimeline();return t?this.percentageToPixels(this.source().duration(),t):this.source().duration()}endTime(){return this.source().iterations?this.viewOrScrollTimeline()?this.startTime()+this.iterationDuration()*this.source().iterations():this.startTime()+this.source().delay()+this.source().duration()*this.source().iterations()+this.source().endDelay():1/0}finiteDuration(){const t=Math.min(this.source().iterations(),3);return this.viewOrScrollTimeline()?this.iterationDuration()*t:this.source().delay()+this.source().duration()*t}currentTime(){const t=this.viewOrScrollTimeline();return t?this.percentageToPixels(this.#t.currentTime,t):this.#t.currentTime}source(){return this.#i}type(){return this.#t.type}overlaps(t){if(!this.source().iterations()||!t.source().iterations())return!0;const e=this.startTime()<t.startTime()?this:t,i=e===this?t:this;return e.endTime()>=i.startTime()}delayOrStartTime(){return this.viewOrScrollTimeline()?this.startTime():this.source().delay()}setTiming(t,e){this.#i.node().then(i=>{if(!i)throw new Error("Unable to find node");this.updateNodeStyle(t,e,i)}),this.#i.durationInternal=t,this.#i.delayInternal=e,this.#e.agent.invoke_setTiming({animationId:this.id(),duration:t,delay:e})}updateNodeStyle(t,e,i){let n;if(this.type()==="CSSTransition")n="transition-";else if(this.type()==="CSSAnimation")n="animation-";else return;if(!i.id)throw new Error("Node has no id");const s=i.domModel().cssModel();s.setEffectivePropertyValueForNode(i.id,n+"duration",t+"ms"),s.setEffectivePropertyValueForNode(i.id,n+"delay",e+"ms")}async remoteObjectPromise(){const t=await this.#e.agent.invoke_resolveAnimation({animationId:this.id()});return t?this.#e.runtimeModel.createRemoteObject(t.remoteObject):null}cssId(){return this.#t.cssId||""}}class ct{#e;#t;delayInternal;durationInternal;#i;#n;constructor(t,e){this.#e=t,this.setPayload(e)}setPayload(t){this.#t=t,!this.#i&&t.keyframesRule?this.#i=new dt(t.keyframesRule):this.#i&&t.keyframesRule&&this.#i.setPayload(t.keyframesRule),this.delayInternal=t.delay,this.durationInternal=t.duration}delay(){return this.delayInternal}endDelay(){return this.#t.endDelay}iterations(){return!this.delay()&&!this.endDelay()&&!this.duration()?0:this.#t.iterations||1/0}duration(){return this.durationInternal}direction(){return this.#t.direction}fill(){return this.#t.fill}node(){return this.#n||(this.#n=new _(this.#e.target(),this.backendNodeId())),this.#n.resolvePromise()}deferredNode(){return new _(this.#e.target(),this.backendNodeId())}backendNodeId(){return this.#t.backendNodeId}keyframesRule(){return this.#i||null}easing(){return this.#t.easing}}class dt{#e;#t;constructor(t){this.setPayload(t)}setPayload(t){this.#e=t,this.#t?this.#e.keyframes.forEach((e,i)=>{this.#t[i]?.setPayload(e)}):this.#t=this.#e.keyframes.map(e=>new mt(e))}name(){return this.#e.name}keyframes(){return this.#t}}class mt{#e;#t;constructor(t){this.setPayload(t)}setPayload(t){this.#e=t,this.#t=t.offset}offset(){return this.#t}setOffset(t){this.#t=t*100+"%"}offsetAsNumber(){return parseFloat(this.#t)/100}easing(){return this.#e.easing}}class ut{#e;#t;#i;#n;#o;screenshotsInternal;#a;constructor(t,e,i){this.#e=t,this.#t=e,this.#n=i,this.#o=!1,this.screenshotsInternal=[],this.#a=[]}isScrollDriven(){return!!this.#n[0]?.viewOrScrollTimeline()}id(){return this.#t}animations(){return this.#n}release(){this.#e.animationGroups.delete(this.id()),this.#e.releaseAnimations(this.animationIds())}animationIds(){function t(e){return e.id()}return this.#n.map(t)}startTime(){return this.#n[0].startTime()}groupDuration(){let t=0;for(const e of this.#n)t=Math.max(t,e.delayOrStartTime()+e.iterationDuration());return t}finiteDuration(){let t=0;for(let e=0;e<this.#n.length;++e)t=Math.max(t,this.#n[e].finiteDuration());return t}scrollOrientation(){const t=this.#n[0]?.viewOrScrollTimeline();return t?t.axis:null}async scrollNode(){if(this.#i)return this.#i;if(!this.isScrollDriven())return null;const t=this.#n[0]?.viewOrScrollTimeline()?.sourceNodeId;if(!t)return null;const i=await new _(this.#e.target(),t).resolvePromise();return i?(this.#i=new S(i),this.#i):null}seekTo(t){this.#e.agent.invoke_seekAnimations({animations:this.animationIds(),currentTime:t})}paused(){return this.#o}togglePause(t){t!==this.#o&&(this.#o=t,this.#e.agent.invoke_setPaused({animations:this.animationIds(),paused:t}))}currentTimePromise(){let t=null;for(const e of this.#n)(!t||e.endTime()>t.endTime())&&(t=e);if(!t)throw new Error("No longest animation found");return this.#e.agent.invoke_getCurrentTime({id:t.id()}).then(({currentTime:e})=>e||0)}matches(t){function e(s){const o=(s.viewOrScrollTimeline()?.sourceNodeId??"")+(s.viewOrScrollTimeline()?.axis??"");return(s.type()==="WebAnimation"?s.type()+s.id():s.cssId())+o}if(this.#n.length!==t.#n.length)return!1;const i=this.#n.map(e).sort(),n=t.#n.map(e).sort();for(let s=0;s<i.length;s++)if(i[s]!==n[s])return!1;return!0}shouldInclude(t){const[e]=t.#n,[i]=this.#n;return ht(i,e)}appendAnimations(t){this.#n.push(...t)}rebaseTo(t){this.#e.releaseAnimations(this.animationIds()),this.#n=t.#n,this.#i=void 0}screenshots(){for(let t=0;t<this.screenshotsInternal.length;++t){const e=new Image;e.src="data:image/jpeg;base64,"+this.screenshotsInternal[t],this.#a.push(e)}return this.screenshotsInternal=[],this.#a}}class ft{#e;constructor(t){this.#e=t}animationCreated(t){}animationCanceled({id:t}){this.#e.animationCanceled(t)}animationStarted({animation:t}){this.#e.animationStarted(t)}animationUpdated({animation:t}){this.#e.animationUpdated(t)}}class pt{#e;#t;#i;#n;#o;#a;constructor(t,e){this.#e=[],this.#t=e,this.#i=t,this.#i.addEventListener(f.ModelReset,this.stopScreencast,this)}captureScreenshots(t,e){const i=Math.min(t/this.#i.playbackRate,3e3),n=i+window.performance.now();this.#e.push({endTime:n,screenshots:e}),(!this.#o||n>this.#o)&&(clearTimeout(this.#n),this.#n=window.setTimeout(this.stopScreencast.bind(this),i),this.#o=n),!this.#a&&(this.#a=!0,this.#t.startScreencast("jpeg",80,void 0,300,2,this.screencastFrame.bind(this),s=>{}))}screencastFrame(t,e){function i(s){return s.endTime>=n}if(!this.#a)return;const n=window.performance.now();this.#e=this.#e.filter(i);for(const s of this.#e)s.screenshots.push(t)}stopScreencast(){this.#a&&(this.#n=void 0,this.#o=void 0,this.#e=[],this.#a=!1,this.#t.stopScreencast())}}it.register(A,{capabilities:2,autostart:!1});const oe=Object.freeze(Object.defineProperty({__proto__:null,AnimationDispatcher:ft,AnimationEffect:ct,AnimationGroup:ut,AnimationImpl:L,AnimationModel:A,get Events(){return f},KeyframeStyle:mt,KeyframesRule:dt,ScreenshotCapture:pt},Symbol.toStringTag,{value:"Module"})),bt=new CSSStyleSheet;bt.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

img {
  max-height: 300px;
  border-radius: 2px;
}

.animation-progress {
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  background: var(--legacy-selection-bg-color);
}

/*# sourceURL=animationScreenshotPopover.css */
`);class vt extends nt{#e;#t;#i;#n;#o;#a;constructor(t){super(!0),console.assert(t.length>0),this.contentElement.classList.add("animation-screenshot-popover"),this.#e=t;for(const e of t)this.contentElement.appendChild(e),e.style.display="none";this.#t=0,this.#i=0,this.#e[0].style.display="block",this.#n=this.contentElement.createChild("div","animation-progress")}wasShown(){this.#t=this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this)),this.registerCSSFiles([bt])}willHide(){this.contentElement.window().cancelAnimationFrame(this.#t),this.#a=void 0}changeFrame(){if(this.#t=this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this)),this.#a){this.#a--;return}if(this.#o=!this.#o,!this.#o)return;const t=this.#e.length;this.#e[this.#i%t].style.display="none",this.#i++,this.#e[this.#i%t].style.display="block",this.#i%t===t-1&&(this.#a=50),this.#n.style.width=(this.#i%t+1)/t*100+"%"}}const re=Object.freeze(Object.defineProperty({__proto__:null,AnimationScreenshotPopover:vt},Symbol.toStringTag,{value:"Module"})),gt=new CSSStyleSheet;gt.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;

  --timeline-controls-width: 150px;
}

.animation-node-row {
  width: 100%;
  display: flex;
  border-bottom: 1px dashed var(--sys-color-divider);
}

.animation-node-description {
  padding-left: 8px;
  overflow: hidden;
  position: relative;
  background-color: var(--sys-color-cdt-base-container);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  white-space: nowrap;
  flex: 0 0 var(--timeline-controls-width);
  z-index: 1;
}

.animation-node-description > * {
  flex: 0 0 auto;
}

.animation-timeline-row {
  height: 32px;
  position: relative;
}

path.animation-keyframe {
  fill-opacity: 0.2;
}

.animation-node-selected path.animation-keyframe,
svg.animation-ui g:first-child:hover path.animation-keyframe {
  fill-opacity: 0.4;
}

line.animation-line {
  stroke-width: 2px;
  stroke-linecap: round;
  fill: none;
}

line.animation-delay-line {
  stroke-width: 2px;
  stroke-dasharray: 6, 4;
}

line.animation-delay-line.animation-fill {
  stroke-dasharray: none;
}

circle.animation-keyframe-point {
  fill: var(--sys-color-cdt-base-container);
}

circle.animation-endpoint,
circle.animation-keyframe-point {
  stroke-width: 2px;
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
  transform-box: fill-box;
  transform-origin: 50% 50%;
}

circle.animation-endpoint:active,
circle.animation-keyframe-point:active {
  transform: scale(1);
}

.animation-ui circle.animation-endpoint:hover,
.animation-ui circle.animation-keyframe-point:hover {
  transform: scale(1.2);
}

.animation-name {
  position: absolute;
  top: 8px;
  color: var(--sys-color-on-surface);
  text-align: center;
  margin-left: -8px;
  white-space: nowrap;
}

.animation-timeline-toolbar-container {
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.animation-timeline-toolbar {
  display: inline-block;
}

.animation-timeline-header {
  height: 28px;
  border-bottom: 1px solid var(--sys-color-divider);
  flex-shrink: 0;
  display: flex;
}

.animation-timeline-header::after {
  content: "";
  height: calc(100% - 48px - 28px);
  position: absolute;
  width: var(--timeline-controls-width);
  left: 0;
  margin-top: 28px;
  background-color: var(--sys-color-cdt-base-container);
  z-index: 0;
  border-right: 1px solid var(--sys-color-divider);
}

.animation-controls {
  flex: 0 0 var(--timeline-controls-width);
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
}

.animation-timeline-current-time {
  flex: 0 0 auto;
  line-height: 28px;
  margin-right: 5px;
}

.animation-grid-header {
  flex: 1 0 auto;
  z-index: 2;
}

.animation-grid-header.scrubber-enabled {
  cursor: pointer;
}

.animation-timeline-buffer,
.animation-timeline-buffer-hint {
  height: 48px;
  flex: 0 0 auto;
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  padding: 0 2px;
}

.animation-timeline-buffer:empty,
.animation-timeline-buffer-hint {
  display: none;
}

.animation-timeline-buffer:empty ~ .animation-timeline-buffer-hint {
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 101;
  display: flex;
}

.animation-time-overlay {
  background-color: var(--sys-color-on-surface);
  opacity: 5%;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.animation-timeline-end > .animation-time-overlay {
  visibility: hidden;
}

.animation-scrubber {
  opacity: 100%;
  position: absolute;
  left: 10px;
  height: 100%;
  width: 100%;
  top: 28px;
  border-left: 1px solid var(--sys-color-error);
  z-index: 2;
}

.animation-scrubber-line {
  width: 11px;
  background: linear-gradient(to right, transparent 5px, var(--sys-color-error) 5px, var(--sys-color-error) 6px, transparent 6px);
  position: absolute;
  top: -28px;
  height: 28px;
  left: -6px;
  padding: 0 5px;
  z-index: 3;
}

.animation-scrubber-head {
  width: 7px;
  height: 7px;
  transform: rotate(45deg);
  background: var(--sys-color-error);
  position: absolute;
  left: 2px;
  top: 1px;
  z-index: 4;
}

.grid-overflow-wrapper {
  position: absolute;
  left: calc(var(--timeline-controls-width) - 10px);
  top: 76px;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

svg.animation-timeline-grid {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

rect.animation-timeline-grid-line {
  fill: var(--sys-color-divider);
}

.animation-timeline-row > svg.animation-ui {
  position: absolute;
}

.animation-node-timeline {
  flex-grow: 1;
}

.animation-node-description > div {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-height: 100%;
}

.animation-node-removed {
  filter: saturate(0);
  cursor: not-allowed;
}

.animation-node-removed-overlay {
  width: 100%;
  height: 100%;
  z-index: 100;
  cursor: not-allowed;
}

svg.animation-ui g:first-child {
  opacity: 100%;
}

svg.animation-ui circle:focus-visible,
svg.animation-ui path:focus-visible {
  outline: 2px solid -webkit-focus-ring-color;
}

.animation-tail-iterations {
  opacity: 50%;
}

.animation-keyframe-step line {
  stroke-width: 2;
  stroke-opacity: 0.3;
}

text.animation-timeline-grid-label {
  font-size: 10px;
  fill: var(--sys-color-token-subtle);
  text-anchor: middle;
}

@keyframes --full-opacity-for-screenshots-container {
  from {
    opacity: 100%;
  }

  to {
    opacity: 100%;
  }
}

.preview-ui-container {
  position: relative;

  & .screenshot-arrow {
    background-image: var(--image-file-popoverArrows);
    background-position: 0 76px;
    width: 19px;
    height: 19px;
    position: absolute;
    left: 6px;
    top: -19px;
    z-index: 100;
    pointer-events: none;
  }

  & .screenshots-container {
    position: absolute;
    display: none;
    opacity: 0%;
    left: 6px;
    top: 100%;
    z-index: 100;
    border: 1px solid transparent;
    box-shadow: var(--drop-shadow);
    border-radius: 2px;
    max-width: 220px;
    max-height: 220px;
  }

  & .screenshots-container.to-the-left {
    left: unset;
    right: 6px;
  }

  & .screenshots-container.to-the-left .screenshot-arrow {
    left: unset;
    right: 6px;
  }

  &:hover .screenshots-container:not(.no-screenshots) {
    display: block;
    animation-name: --full-opacity-for-screenshots-container;
    animation-duration: 0s;
    animation-delay: 0.2s; /* Show the screenshots after 0.2s delay */
    animation-fill-mode: forwards;
  }

  &:hover .screenshots-container:not(.no-screenshots):hover {
    display: none;
  }

  &:has(.selected):hover .screenshots-container:not(.no-screenshots) {
    display: none;
  }
}

.animation-timeline-rows,
.animation-timeline-rows-hint {
  flex-grow: 1;
  overflow-y: auto;
  z-index: 1;
  overflow-x: hidden;
}

.animation-timeline-rows-hint {
  display: none;
}

.animation-timeline-buffer:not(:empty) ~ .animation-timeline-rows:empty {
  flex-grow: 0;
}

.animation-timeline-buffer:not(:empty) ~ .animation-timeline-rows:empty ~ .animation-timeline-rows-hint {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--timeline-controls-width);
  padding: 10px;
}

.toolbar.animation-controls-toolbar {
  flex: 0 0 auto;
}

.animation-node-row.animation-node-selected {
  background-color: var(--sys-color-state-ripple-primary);
}

.animation-node-selected > .animation-node-description {
  background-color: var(--sys-color-tonal-container);
}

.animation-buffer-preview {
  height: 40px;
  margin: 4px 2px;
  background-color: var(--sys-color-neutral-container);
  border: 1px solid transparent;
  border-radius: 2px;
  flex: 1 1;
  padding: 4px;
  max-width: 100px;
  animation: newGroupAnim 200ms;
  position: relative;
}

.animation-buffer-preview.no-animation {
  animation: none;
}

.animation-buffer-preview .preview-icon {
  position: absolute;
  width: 14px;
  height: 14px;
  right: 1px;
  bottom: 2px;
  opacity: 60%;
}

.animation-buffer-preview-animation {
  width: 100%;
  height: 100%;
  border-radius: 2px 0 0 2px;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--sys-color-tonal-container);
  opacity: 0%;
  border-right: 1px solid var(--sys-color-divider);
}

.animation-buffer-preview:focus-visible {
  outline: -webkit-focus-ring-color auto 5px;
}

.animation-buffer-preview.selected .preview-icon {
  opacity: 100%;
}

.animation-buffer-preview:not(.selected):focus-visible,
.animation-buffer-preview:not(.selected):hover {
  background-color: var(--sys-color-surface-variant);

  & .preview-icon {
    opacity: 80%;
  }
}

.animation-buffer-preview.selected {
  background-color: var(--sys-color-tonal-container);
}

.animation-paused {
  align-items: center;
  justify-content: center;
  display: none;
}

.animation-paused::before,
.animation-paused::after {
  content: "";
  background: var(--sys-color-cdt-base-container);
  width: 7px;
  height: 20px;
  border-radius: 2px;
  margin: 2px;
  border: 1px solid var(--sys-color-divider);
}

.animation-buffer-preview.paused .animation-paused {
  display: flex;
}

.animation-buffer-preview > svg > line {
  stroke-width: 1px;
}

.animation-buffer-preview.selected > svg > line {
  stroke: var(--sys-color-on-tonal-container) !important; /* stylelint-disable-line declaration-no-important */
}

@keyframes newGroupAnim {
  from {
    clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%);
  }

  to {
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  }
}

.animation-playback-rate-control {
  margin: 4px 0 4px 2px;
  display: flex;
  width: 120px;
}

.animation-playback-rate-button {
  border-width: 1px;
  border-style: solid;
  border-color: var(--sys-color-tonal-outline);
  border-right-width: 0;
  color: var(--sys-color-on-surface);
  display: inline-block;
  margin-right: -1px;
  padding: 1px 4px;
  background-color: transparent;
  flex: 1 0 auto;
  text-align: center;
}

.animation-playback-rate-button:first-child {
  border-radius: 4px 0 0 4px;
}

.animation-playback-rate-button:last-child {
  border-radius: 0 4px 4px 0;
  border-right-width: 1px;
}

.animation-playback-rate-button.selected {
  color: var(--sys-color-on-tonal-container);
  background-color: var(--sys-color-tonal-container);
  border-color: var(--sys-color-tonal-container);
  z-index: 1;
}

.animation-playback-rate-button.selected:focus-visible {
  color: var(--sys-color-on-surface);
}

.animation-playback-rate-button:focus-visible {
  outline: 2px solid var(--sys-color-primary);
  outline-offset: 2px;
}

.animation-playback-rate-button:not(.selected):not([disabled]):hover {
  background: var(--sys-color-state-hover-on-subtle);
}

.animation-playback-rate-button[disabled] {
  background: unset;
  border-color: var(--sys-color-state-disabled);
  color: var(--sys-color-state-disabled);
}

.animation-remove-button {
  position: absolute;
  top: -3px;
  right: -3px;
  background: var(--sys-color-token-subtle);
  border-radius: 12px;
  border: 0;
  height: 16px;
  width: 16px;
  z-index: 100;
  display: none;
  padding: 0;

  & > devtools-icon {
    height: 16px;
    width: 16px;
    color: var(--sys-color-cdt-base-container);
  }

  &:hover {
    background-color: var(--sys-color-on-surface);
  }
}

.animation-buffer-preview:hover .animation-remove-button {
  display: flex;
}

.timeline-controls-resizer {
  position: absolute;
  width: 6px;
  height: 100%;
  left: var(--timeline-controls-width);
  top: 104px;
  z-index: 3;
  /* We put this a bit to the left of the line to allow dragging
  the delay point of the keyframes */
  margin-left: -4px;
}

@media (forced-colors: active) {
  .animation-playback-rate-button.selected,
  .animation-playback-rate-button.selected:first-child,
  .animation-playback-rate-button.selected:first-child:focus-visible,
  .animation-playback-rate-button:focus-visible {
    forced-color-adjust: none;
    color: HighlightText;
    background-color: Highlight;
  }

  .animation-node-description:focus-visible {
    background-color: var(--sys-color-cdt-base-container);
    forced-color-adjust: none;
  }

  .monospace {
    forced-color-adjust: auto;
  }
}

/*# sourceURL=animationTimeline.css */
`);const c={selectAnEffectAboveToInspectAnd:"Select an effect above to inspect and modify.",clearAll:"Clear all",pauseAll:"Pause all",playbackRates:"Playback rates",playbackRatePlaceholder:"{PH1}%",pause:"Pause",setSpeedToS:"Set speed to {PH1}",animationPreviews:"Animation previews",waitingForAnimations:"Waiting for animations...",replayTimeline:"Replay timeline",resumeAll:"Resume all",playTimeline:"Play timeline",pauseTimeline:"Pause timeline",animationPreviewS:"Animation Preview {PH1}"},Kt=st("panels/animation/AnimationTimeline.ts",c),m=ot.bind(void 0,Kt),Z=new WeakMap,tt=new WeakMap,Xt=120,Vt=150,qt=720;let G;class z extends nt{#e;#t;#i;#n;#o=[];#a;#l;#m;#f;#b;#w;#s;#v;#x;#c;#d;#g;#S;#h;#u;#E;#L;#y;#p;#T;#R;#I;#r;#C;#O;#M;#D;#G;#A;#P;#k;#_=new H(10);#B=new H(10);#N=!1;constructor(){super(!0),this.element.classList.add("animations-timeline"),this.element.setAttribute("jslog",`${St("animations").track({resize:!0})}`),this.#G=this.contentElement.createChild("div","timeline-controls-resizer"),this.#e=this.contentElement.createChild("div","grid-overflow-wrapper"),this.#t=u(this.#e,"svg","animation-timeline-grid"),this.#i=1,this.#n=!1,this.#M=!1,this.createHeader(),this.#a=this.contentElement.createChild("div","animation-timeline-rows"),this.#a.setAttribute("jslog",`${$("animations")}`);const t=this.contentElement.createChild("div","animation-timeline-rows-hint");t.textContent=m(c.selectAnEffectAboveToInspectAnd),this.#x=100,this.#c=this.#x,this.#g=new Map,this.#S=[],this.#h=[],this.#k=[],this.#u=new Map,this.#E=new Map,this.#d=Vt,this.element.style.setProperty("--timeline-controls-width",`${this.#d}px`),P.instance().addModelListener(kt,Ct.NodeRemoved,e=>this.markNodeAsRemoved(e.data.node),this,{scoped:!0}),P.instance().observeModels(A,this,{scoped:!0}),rt.instance().addFlavorChangeListener(at,this.nodeChanged,this),this.#z()}static instance(t){return(!G||t?.forceNew)&&(G=new z),G}#z(){let t;M(this.#G,e=>(t=e.clientX,!0),e=>{if(t===void 0)return;const i=this.#d+e.clientX-t;this.#d=Math.min(Math.max(i,Xt),qt),t=e.clientX,this.element.style.setProperty("--timeline-controls-width",this.#d+"px"),this.onResize()},()=>{t=void 0},"ew-resize")}get previewMap(){return this.#u}get uiAnimations(){return this.#S}get groupBuffer(){return this.#h}wasShown(){if(!this.#N){for(const t of P.instance().models(A,{scoped:!0}))this.addEventListeners(t);this.registerCSSFiles([gt]),this.#N=!0}}modelAdded(t){this.isShowing()&&this.addEventListeners(t)}modelRemoved(t){this.removeEventListeners(t)}addEventListeners(t){t.ensureEnabled(),t.addEventListener(f.AnimationGroupStarted,this.animationGroupStarted,this),t.addEventListener(f.AnimationGroupUpdated,this.animationGroupUpdated,this),t.addEventListener(f.ModelReset,this.reset,this)}removeEventListeners(t){t.removeEventListener(f.AnimationGroupStarted,this.animationGroupStarted,this),t.removeEventListener(f.AnimationGroupUpdated,this.animationGroupUpdated,this),t.removeEventListener(f.ModelReset,this.reset,this)}nodeChanged(){for(const t of this.#g.values())t.nodeChanged()}createScrubber(){return this.#f=document.createElement("div"),this.#f.classList.add("animation-scrubber"),this.#f.classList.add("hidden"),this.#L=this.#f.createChild("div","animation-scrubber-line"),this.#L.createChild("div","animation-scrubber-head"),this.#f.createChild("div","animation-time-overlay"),this.#f}createHeader(){const t=this.contentElement.createChild("div","animation-timeline-toolbar-container");t.setAttribute("jslog",`${Pt()}`);const e=new W("animation-timeline-toolbar",t);this.#w=new K(m(c.clearAll),"clear",void 0,"animations.clear"),this.#w.addEventListener("Click",()=>{b.actionTaken(g.AnimationGroupsCleared),this.reset()}),e.appendToolbarItem(this.#w),e.appendSeparator(),this.#y=new Et(m(c.pauseAll),"pause","resume","animations.pause-resume-all"),this.#y.addEventListener("Click",()=>{this.togglePauseAll()}),e.appendToolbarItem(this.#y);const i=t.createChild("div","animation-playback-rate-control");i.addEventListener("keydown",this.handlePlaybackRateControlKeyDown.bind(this)),X(i),T(i,m(c.playbackRates)),this.#l=[];for(const h of yt){const d=i.createChild("button","animation-playback-rate-button");d.textContent=h?m(c.playbackRatePlaceholder,{PH1:h*100}):m(c.pause),d.setAttribute("jslog",`${lt().context(`animations.playback-rate-${h*100}`).track({click:!0,keydown:"ArrowUp|ArrowDown|ArrowLeft|ArrowRight"})}`),tt.set(d,h),d.addEventListener("click",this.setPlaybackRate.bind(this,h)),V(d),Rt.install(d,m(c.setSpeedToS,{PH1:d.textContent})),d.tabIndex=-1,this.#l.push(d)}this.updatePlaybackControls(),this.#m=this.contentElement.createChild("div","animation-timeline-buffer"),this.#m.setAttribute("jslog",`${$("film-strip")}`),X(this.#m),T(this.#m,m(c.animationPreviews));const n=this.contentElement.createChild("div","animation-timeline-buffer-hint");n.textContent=m(c.waitingForAnimations);const s=this.contentElement.createChild("div","animation-timeline-header"),o=s.createChild("div","animation-controls");this.#b=o.createChild("div","animation-timeline-current-time monospace");const r=new W("animation-controls-toolbar",o);return this.#p=new K(m(c.replayTimeline),"replay",void 0,"animations.play-replay-pause-animation-group"),this.#p.element.classList.add("toolbar-state-on"),this.#T="replay-outline",this.#p.addEventListener("Click",this.controlButtonToggle.bind(this)),r.appendToolbarItem(this.#p),this.#A=s.createChild("div","animation-grid-header"),this.#A.setAttribute("jslog",`${Mt("animations.grid-header").track({drag:!0,click:!0})}`),M(this.#A,this.scrubberDragStart.bind(this),this.scrubberDragMove.bind(this),this.scrubberDragEnd.bind(this),null),this.#e.appendChild(this.createScrubber()),this.clearCurrentTimeText(),s}handlePlaybackRateControlKeyDown(t){switch(t.key){case"ArrowLeft":case"ArrowUp":this.focusNextPlaybackRateButton(t.target,!0);break;case"ArrowRight":case"ArrowDown":this.focusNextPlaybackRateButton(t.target);break}}focusNextPlaybackRateButton(t,e){const i=t,n=this.#l.indexOf(i),s=e?n-1:n+1;if(s<0||s>=this.#l.length)return;const o=this.#l[s];o.tabIndex=0,o.focus(),t&&(t.tabIndex=-1)}togglePauseAll(){this.#n=!this.#n,b.actionTaken(this.#n?g.AnimationsPaused:g.AnimationsResumed),this.setPlaybackRate(this.#i),this.#y&&this.#y.setTitle(this.#n?m(c.resumeAll):m(c.pauseAll))}setPlaybackRate(t){t!==this.#i&&b.animationPlaybackRateChanged(t===.1?2:t===.25?1:t===1?0:3),this.#i=t;for(const e of P.instance().models(A,{scoped:!0}))e.setPlaybackRate(this.#n?0:this.#i);b.actionTaken(g.AnimationsPlaybackRateChanged),this.#r&&(this.#r.playbackRate=this.effectivePlaybackRate()),this.updatePlaybackControls()}updatePlaybackControls(){for(const t of this.#l){const e=this.#i===tt.get(t);t.classList.toggle("selected",e),t.tabIndex=e?0:-1}}controlButtonToggle(){this.#T==="play-outline"?this.togglePause(!1):this.#T==="replay-outline"?(b.actionTaken(g.AnimationGroupReplayed),this.replay()):this.togglePause(!0)}updateControlButton(){this.#p&&(this.#p.setEnabled(!!this.#s&&this.hasAnimationGroupActiveNodes()&&!this.#s?.isScrollDriven()),this.#s&&this.#s.paused()?(this.#T="play-outline",this.#p.element.classList.toggle("toolbar-state-on",!0),this.#p.setTitle(m(c.playTimeline)),this.#p.setGlyph("play")):!this.#r||!this.#r.currentTime||typeof this.#r.currentTime!="number"||this.#r.currentTime>=this.duration()?(this.#T="replay-outline",this.#p.element.classList.toggle("toolbar-state-on",!0),this.#p.setTitle(m(c.replayTimeline)),this.#p.setGlyph("replay")):(this.#T="pause-outline",this.#p.element.classList.toggle("toolbar-state-on",!1),this.#p.setTitle(m(c.pauseTimeline)),this.#p.setGlyph("pause")))}effectivePlaybackRate(){return this.#n||this.#s&&this.#s.paused()?0:this.#i}togglePause(t){if(this.#s){this.#s.togglePause(t);const e=this.#u.get(this.#s);e&&e.element.classList.toggle("paused",t)}this.#r&&(this.#r.playbackRate=this.effectivePlaybackRate()),this.updateControlButton()}replay(){!this.#s||!this.hasAnimationGroupActiveNodes()||this.#s.isScrollDriven()||(this.#s.seekTo(0),this.animateTime(0),this.updateControlButton())}duration(){return this.#c}setDuration(t){this.#c=t,this.scheduleRedraw()}clearTimeline(){this.#s&&this.#P&&this.#s.scrollNode().then(t=>{t?.removeScrollEventListener(this.#P),this.#P=void 0}),this.#S=[],this.#g.clear(),this.#E.clear(),this.#a.removeChildren(),this.#c=this.#x,this.#f.classList.add("hidden"),this.#A.classList.remove("scrubber-enabled"),this.#s=null,this.#r&&this.#r.cancel(),this.#r=void 0,this.clearCurrentTimeText(),this.updateControlButton()}reset(){this.clearTimeline(),this.setPlaybackRate(this.#i);for(const t of this.#h)t.release();this.#h=[],this.clearPreviews(),this.renderGrid()}animationGroupStarted({data:t}){this.addAnimationGroup(t)}scheduledRedrawAfterAnimationGroupUpdatedForTest(){}animationGroupUpdated({data:t}){this.#B.schedule(async()=>{const e=this.#u.get(t);if(e&&e.replay(),this.#s===t){if(t.isScrollDriven()){const i=await t.scrollNode();if(i){const n=t.scrollOrientation()==="vertical"?await i.verticalScrollRange():await i.horizontalScrollRange(),s=t.scrollOrientation()==="vertical"?await i.scrollTop():await i.scrollLeft();n!==null&&this.setDuration(n),s!==null&&(this.setCurrentTimeText(s),this.setTimelineScrubberPosition(s))}}else this.setDuration(t.finiteDuration());this.updateControlButton(),this.scheduleRedraw(),this.scheduledRedrawAfterAnimationGroupUpdatedForTest()}})}clearPreviews(){this.#u.clear(),this.#o.forEach(t=>{t.detach()}),this.#m.removeChildren(),this.#o=[]}createPreview(t){const e=new xt(t),i=document.createElement("div");i.classList.add("preview-ui-container"),i.appendChild(e.element);const n=document.createElement("div");if(n.classList.add("screenshots-container","no-screenshots"),n.createChild("span","screenshot-arrow"),n.addEventListener("animationend",()=>{const{right:s,left:o,width:r}=n.getBoundingClientRect();s>window.innerWidth&&o-r>=0&&n.classList.add("to-the-left")}),i.appendChild(n),this.#h.push(t),this.#u.set(t,e),this.#m.appendChild(i),e.removeButton().addEventListener("click",this.removeAnimationGroup.bind(this,t)),e.element.addEventListener("click",this.selectAnimationGroup.bind(this,t)),e.element.addEventListener("keydown",this.handleAnimationGroupKeyDown.bind(this,t)),e.element.addEventListener("mouseover",()=>{const s=t.screenshots();if(!s.length)return;n.classList.remove("no-screenshots");const o=()=>{const r=new vt(s);this.#o.push(r),r.show(n)};s[0].complete?o():s[0].onload=o},{once:!0}),T(e.element,m(c.animationPreviewS,{PH1:this.#h.indexOf(t)+1})),V(e.element),this.#u.size===1){const s=this.#u.get(this.#h[0]);s&&(s.element.tabIndex=0)}}previewsCreatedForTest(){}createPreviewForCollectedGroups(){this.#k.sort((t,e)=>t.isScrollDriven()&&!e.isScrollDriven()?-1:!t.isScrollDriven()&&e.isScrollDriven()?1:t.startTime()!==e.startTime()?t.startTime()-e.startTime():t.animations.length-e.animations.length);for(const t of this.#k)this.createPreview(t);this.#k=[],this.previewsCreatedForTest()}addAnimationGroup(t){const e=this.#u.get(t);if(e){this.#s===t?this.syncScrubber():e.replay();return}this.#h.sort((s,o)=>s.startTime()-o.startTime());const i=[],n=this.width()/50;for(;this.#h.length>n;){const s=this.#h.splice(this.#h[0]===this.#s?1:0,1);i.push(s[0])}for(const s of i){const o=this.#u.get(s);o&&(o.element.remove(),this.#u.delete(s),s.release())}this.#k.push(t),this.#_.schedule(()=>Promise.resolve(this.createPreviewForCollectedGroups()))}handleAnimationGroupKeyDown(t,e){switch(e.key){case"Backspace":case"Delete":this.removeAnimationGroup(t,e);break;case"ArrowLeft":case"ArrowUp":this.focusNextGroup(t,e.target,!0);break;case"ArrowRight":case"ArrowDown":this.focusNextGroup(t,e.target)}}focusNextGroup(t,e,i){const n=this.#h.indexOf(t),s=i?n-1:n+1;if(s<0||s>=this.#h.length)return;const o=this.#u.get(this.#h[s]);o&&(o.element.tabIndex=0,o.element.focus()),e&&(e.tabIndex=-1)}removeAnimationGroup(t,e){const i=this.#h.indexOf(t);Lt(this.#h,t);const n=this.#u.get(t);if(n&&n.element.remove(),this.#u.delete(t),t.release(),e.consume(!0),this.#s===t&&(this.clearTimeline(),this.renderGrid()),this.#h.length===0){this.#w.element.focus();return}const o=i>=this.#h.length?this.#u.get(this.#h[this.#h.length-1]):this.#u.get(this.#h[i]);o&&(o.element.tabIndex=0,o.element.focus())}clearCurrentTimeText(){this.#b.textContent=""}setCurrentTimeText(t){this.#s&&(this.#b.textContent=this.#s?.isScrollDriven()?`${t.toFixed(0)}px`:q(t))}async selectAnimationGroup(t){if(this.#s===t){this.togglePause(!1),this.replay();return}if(this.clearTimeline(),this.#s=t,this.#u.forEach((e,i)=>{e.element.classList.toggle("selected",this.#s===i)}),t.isScrollDriven()){const e=await t.scrollNode();if(!e)throw new Error("Scroll container is not found for the scroll driven animation");const i=t.scrollOrientation()==="vertical"?await e.verticalScrollRange():await e.horizontalScrollRange(),n=t.scrollOrientation()==="vertical"?await e.scrollTop():await e.scrollLeft();if(typeof i!="number"||typeof n!="number")throw new Error("Scroll range or scroll offset is not resolved for the scroll driven animation");this.#P=await e.addScrollEventListener(({scrollTop:s,scrollLeft:o})=>{const r=t.scrollOrientation()==="vertical"?s:o;this.setCurrentTimeText(r),this.setTimelineScrubberPosition(r)}),this.setDuration(i),this.setCurrentTimeText(n),this.setTimelineScrubberPosition(n),this.#l.forEach(s=>{s.setAttribute("disabled","true")}),this.#y&&this.#y.setEnabled(!1)}else this.setDuration(Math.max(500,t.finiteDuration()+100)),this.#l.forEach(e=>{e.removeAttribute("disabled")}),this.#y&&this.#y.setEnabled(!0);await Promise.all(t.animations().map(e=>this.addAnimation(e))),this.scheduleRedraw(),this.togglePause(!1),this.replay(),this.hasAnimationGroupActiveNodes()&&(this.#f.classList.remove("hidden"),this.#A.classList.add("scrubber-enabled")),b.actionTaken(g.AnimationGroupSelected),this.#s.isScrollDriven()&&b.actionTaken(g.ScrollDrivenAnimationGroupSelected),this.animationGroupSelectedForTest()}animationGroupSelectedForTest(){}async addAnimation(t){let e=this.#g.get(t.source().backendNodeId());e||(e=new wt(t.source()),this.#a.appendChild(e.element),this.#g.set(t.source().backendNodeId(),e));const i=e.createNewRow(),n=new x(t,this,i),s=await t.source().deferredNode().resolvePromise();n.setNode(s),s&&e&&(e.nodeResolved(s),Z.set(s,e)),this.#S.push(n),this.#E.set(t.id(),t)}markNodeAsRemoved(t){Z.get(t)?.nodeRemoved();for(const e of t.pseudoElements().values())e.forEach(i=>this.markNodeAsRemoved(i));t.children()?.forEach(e=>{this.markNodeAsRemoved(e)}),this.hasAnimationGroupActiveNodes()||(this.#A.classList.remove("scrubber-enabled"),this.#f.classList.add("hidden"),this.#r?.cancel(),this.#r=void 0,this.clearCurrentTimeText(),this.updateControlButton())}hasAnimationGroupActiveNodes(){for(const t of this.#g.values())if(t.hasActiveNode())return!0;return!1}renderGrid(){const t=this.#s?.isScrollDriven(),e=t?this.duration()/10:250;this.#t.removeChildren();let i;for(let n=0;n<this.duration();n+=e){const s=u(this.#t,"rect","animation-timeline-grid-line");s.setAttribute("x",(n*this.pixelTimeRatio()+10).toString()),s.setAttribute("y","23"),s.setAttribute("height","100%"),s.setAttribute("width","1")}for(let n=0;n<this.duration();n+=e){const s=n*this.pixelTimeRatio();if(i===void 0||s-i>50){i=s;const o=u(this.#t,"text","animation-timeline-grid-label");o.textContent=t?`${n.toFixed(0)}px`:q(n),o.setAttribute("x",(s+10).toString()),o.setAttribute("y","16")}}}scheduleRedraw(){this.renderGrid(),this.#v=[];for(const t of this.#S)this.#v.push(t);this.#R||(this.#R=!0,this.#a.window().requestAnimationFrame(this.render.bind(this)))}render(t){for(;this.#v.length&&(!t||window.performance.now()-t<50);){const e=this.#v.shift();e&&e.redraw()}this.#v.length?this.#a.window().requestAnimationFrame(this.render.bind(this)):this.#R=void 0}onResize(){this.#I=Math.max(0,this.#a.offsetWidth-this.#d)||0,this.scheduleRedraw(),this.#r&&this.syncScrubber(),this.#C=void 0}width(){return this.#I||0}syncScrubber(){!this.#s||!this.hasAnimationGroupActiveNodes()||this.#s.currentTimePromise().then(this.animateTime.bind(this)).then(this.updateControlButton.bind(this))}animateTime(t){this.#s?.isScrollDriven()||(this.#r&&this.#r.cancel(),this.#r=this.#f.animate([{transform:"translateX(0px)"},{transform:"translateX("+this.width()+"px)"}],{duration:this.duration(),fill:"forwards"}),this.#r.playbackRate=this.effectivePlaybackRate(),this.#r.onfinish=this.updateControlButton.bind(this),this.#r.currentTime=t,this.element.window().requestAnimationFrame(this.updateScrubber.bind(this)))}pixelTimeRatio(){return this.width()/this.duration()||0}updateScrubber(t){this.#r&&(this.setCurrentTimeText(this.#F()),this.#r.playState.toString()==="pending"||this.#r.playState==="running"?this.element.window().requestAnimationFrame(this.updateScrubber.bind(this)):this.#r.playState==="finished"&&this.clearCurrentTimeText())}scrubberDragStart(t){if(!this.#s||!this.hasAnimationGroupActiveNodes())return!1;this.#C||(this.#C=this.#t.getBoundingClientRect().left+10);const{x:e}=t,i=Math.max(0,e-this.#C)/this.pixelTimeRatio();if(this.#O=i,this.#D=e,this.setCurrentTimeText(i),this.#s.isScrollDriven())this.setTimelineScrubberPosition(i),this.updateScrollOffsetOnPage(i);else{const n=this.#r?.currentTime;this.#M=this.#s.paused()||typeof n=="number"&&n>=this.duration(),this.#s.seekTo(i),this.togglePause(!0),this.animateTime(i)}return!0}async updateScrollOffsetOnPage(t){const e=await this.#s?.scrollNode();if(e)return this.#s?.scrollOrientation()==="vertical"?e.setScrollTop(t):e.setScrollLeft(t)}setTimelineScrubberPosition(t){this.#f.style.transform=`translateX(${t*this.pixelTimeRatio()}px)`}scrubberDragMove(t){const{x:e}=t,i=e-(this.#D||0),n=Math.max(0,Math.min((this.#O||0)+i/this.pixelTimeRatio(),this.duration()));this.#r?this.#r.currentTime=n:(this.setTimelineScrubberPosition(n),this.updateScrollOffsetOnPage(n)),this.setCurrentTimeText(n),this.#s&&!this.#s.isScrollDriven()&&this.#s.seekTo(n)}#F(){return typeof this.#r?.currentTime=="number"?this.#r.currentTime:0}scrubberDragEnd(t){if(this.#r){const e=Math.max(0,this.#F());this.#r.play(),this.#r.currentTime=e}b.actionTaken(g.AnimationGroupScrubbed),this.#s?.isScrollDriven()&&b.actionTaken(g.ScrollDrivenAnimationGroupScrubbed),this.#b.window().requestAnimationFrame(this.updateScrubber.bind(this)),this.#M||this.togglePause(!1)}}const yt=[1,.25,.1];class wt{element;#e;#t;#i;#n;constructor(t){this.element=document.createElement("div"),this.element.classList.add("animation-node-row"),this.#e=this.element.createChild("div","animation-node-description"),this.#e.setAttribute("jslog",`${J("description").track({resize:!0})}`),this.#t=this.element.createChild("div","animation-node-timeline"),this.#t.setAttribute("jslog",`${J("timeline").track({resize:!0})}`),It(this.#t)}nodeResolved(t){if(!t){Ot(this.#e,"<node>");return}this.#n=t,this.nodeChanged(),Dt.linkify(t).then(e=>{e.addEventListener("click",()=>{b.actionTaken(g.AnimatedNodeDescriptionClicked)}),this.#e.appendChild(e)}),t.ownerDocument||this.nodeRemoved()}createNewRow(){return this.#t.createChild("div","animation-timeline-row")}nodeRemoved(){this.element.classList.add("animation-node-removed"),this.#i||(this.#i=document.createElement("div"),this.#i.classList.add("animation-node-removed-overlay"),this.#e.appendChild(this.#i)),this.#n=null}hasActiveNode(){return!!this.#n}nodeChanged(){let t=!1;this.#n&&(t=this.#n===rt.instance().flavor(at)),this.element.classList.toggle("animation-node-selected",t)}}class k{steps;stepAtPosition;constructor(t,e){this.steps=t,this.stepAtPosition=e}static parse(t){let e=t.match(/^steps\((\d+), (start|middle)\)$/);return e?new k(parseInt(e[1],10),e[2]):(e=t.match(/^steps\((\d+)\)$/),e?new k(parseInt(e[1],10),"end"):null)}}const ae=Object.freeze(Object.defineProperty({__proto__:null,AnimationTimeline:z,GlobalPlaybackRates:yt,NodeUI:wt,StepTimingFunction:k},Symbol.toStringTag,{value:"Module"})),R={animationEndpointSlider:"Animation Endpoint slider",animationKeyframeSlider:"Animation Keyframe slider",sSlider:"{PH1} slider"},Jt=st("panels/animation/AnimationUI.ts",R),N=ot.bind(void 0,Jt);class x{#e;#t;#i;#n;#o;#a;#l;#m;#f;#b;#w;#s;#v;#x;#c;#d;#g;constructor(t,e,i){this.#e=t,this.#t=e;const n=this.#e.source().keyframesRule();n&&(this.#i=n.keyframes(),t.viewOrScrollTimeline()&&t.playbackRate()<0&&this.#i.reverse()),this.#n=i.createChild("div","animation-name"),this.#n.textContent=this.#e.name(),this.#o=u(i,"svg","animation-ui"),this.#o.setAttribute("height",l.AnimationSVGHeight.toString()),this.#o.style.marginLeft="-"+l.AnimationMargin+"px",this.#o.addEventListener("contextmenu",this.onContextMenu.bind(this)),this.#a=u(this.#o,"g"),this.#a.setAttribute("jslog",`${Gt().track({drag:!0})}`),this.#e.viewOrScrollTimeline()||(M(this.#a,this.mouseDown.bind(this,"AnimationDrag",null),this.mouseMove.bind(this),this.mouseUp.bind(this),"-webkit-grabbing","-webkit-grab"),x.installDragHandleKeyboard(this.#a,this.keydownMove.bind(this,"AnimationDrag",null))),this.#l=[],this.#m=0,this.#f=50,this.#b=x.colorForAnimation(this.#e)}static colorForAnimation(t){const e=Array.from(B.keys()),n=Nt(t.name()||t.id())%e.length,s=e[n],o=B.get(s);if(!o)throw new Error("Unable to locate color");return o.asString("rgb")||""}static installDragHandleKeyboard(t,e){t.addEventListener("keydown",e,!1)}animation(){return this.#e}get nameElement(){return this.#n}get svg(){return this.#o}setNode(t){this.#w=t}createLine(t,e){const i=u(t,"line",e);return i.setAttribute("x1",l.AnimationMargin.toString()),i.setAttribute("y1",l.AnimationHeight.toString()),i.setAttribute("y2",l.AnimationHeight.toString()),i.style.stroke=this.#b,i}drawAnimationLine(t,e){const i=this.#l[t];i.animationLine||(i.animationLine=this.createLine(e,"animation-line")),i.animationLine&&i.animationLine.setAttribute("x2",(this.duration()*this.#t.pixelTimeRatio()+l.AnimationMargin).toFixed(2))}drawDelayLine(t){(!this.#s||!this.#v)&&(this.#s=this.createLine(t,"animation-delay-line"),this.#v=this.createLine(t,"animation-delay-line"));const e=this.#e.source().fill();this.#s.classList.toggle("animation-fill",e==="backwards"||e==="both");const i=l.AnimationMargin;this.#s.setAttribute("x1",i.toString()),this.#s.setAttribute("x2",(this.delayOrStartTime()*this.#t.pixelTimeRatio()+i).toFixed(2));const n=e==="forwards"||e==="both";this.#v.classList.toggle("animation-fill",n);const s=Math.min(this.#t.width(),(this.delayOrStartTime()+this.duration()*this.#e.source().iterations())*this.#t.pixelTimeRatio());this.#v.style.transform="translateX("+s.toFixed(2)+"px)",this.#v.setAttribute("x1",i.toString()),this.#v.setAttribute("x2",n?(this.#t.width()-s+i).toFixed(2):(this.#e.source().endDelay()*this.#t.pixelTimeRatio()+i).toFixed(2))}drawPoint(t,e,i,n,s){if(this.#l[t].keyframePoints[n]){this.#l[t].keyframePoints[n].setAttribute("cx",i.toFixed(2));return}const o=u(e,"circle",n<=0?"animation-endpoint":"animation-keyframe-point");if(o.setAttribute("cx",i.toFixed(2)),o.setAttribute("cy",l.AnimationHeight.toString()),o.style.stroke=this.#b,o.setAttribute("r",(l.AnimationMargin/2).toString()),o.setAttribute("jslog",`${Ft("animations.keyframe").track({drag:!0})}`),o.tabIndex=0,T(o,n<=0?N(R.animationEndpointSlider):N(R.animationKeyframeSlider)),n<=0&&(o.style.fill=this.#b),this.#l[t].keyframePoints[n]=o,!s)return;let r;n===0?r="StartEndpointMove":n===-1?r="FinishEndpointMove":r="KeyframeMove",this.animation().viewOrScrollTimeline()||(M(o,this.mouseDown.bind(this,r,n),this.mouseMove.bind(this),this.mouseUp.bind(this),"ew-resize"),x.installDragHandleKeyboard(o,this.keydownMove.bind(this,r,n)))}renderKeyframe(t,e,i,n,s,o){function r(p,C,I){const w=u(p,"line");w.setAttribute("x1",C.toString()),w.setAttribute("x2",C.toString()),w.setAttribute("y1",l.AnimationMargin.toString()),w.setAttribute("y2",l.AnimationHeight.toString()),w.style.stroke=I}const h=_t.parse(o),d=this.#l[t].keyframeRender;if(!d[e]){const p=h?u(i,"path","animation-keyframe"):u(i,"g","animation-keyframe-step");d[e]=p}const y=d[e];if(y.tabIndex=0,T(y,N(R.sSlider,{PH1:this.#e.name()})),y.style.transform="translateX("+n.toFixed(2)+"px)",o==="linear"){y.style.fill=this.#b;const p=$t;y.setAttribute("d",["M",0,p,"L",0,5,"L",s.toFixed(2),5,"L",s.toFixed(2),p,"Z"].join(" "))}else if(h)y.style.fill=this.#b,Ht.drawVelocityChart(h,y,s);else{const p=k.parse(o);y.removeChildren();const C={start:0,middle:.5,end:1};if(p){const I=C[p.stepAtPosition];for(let w=0;w<p.steps;w++)r(y,(w+I)*s/p.steps,this.#b)}}}redraw(){const t=this.#t.width()-l.AnimationMargin;if(this.#o.setAttribute("width",(t+2*l.AnimationMargin).toFixed(2)),this.#a.style.transform="translateX("+(this.delayOrStartTime()*this.#t.pixelTimeRatio()).toFixed(2)+"px)",this.#n.style.transform="translateX("+(Math.max(this.delayOrStartTime(),0)*this.#t.pixelTimeRatio()+l.AnimationMargin).toFixed(2)+"px)",this.#n.style.width=(this.duration()*this.#t.pixelTimeRatio()).toFixed(2)+"px",this.drawDelayLine(this.#o),this.#e.type()==="CSSTransition"){this.renderTransition();return}this.renderIteration(this.#a,0),this.#x||(this.#x=u(this.#a,"g","animation-tail-iterations"));const e=this.duration()*this.#t.pixelTimeRatio();let i;const n=this.delayOrStartTime()<0?-this.delayOrStartTime()*this.#t.pixelTimeRatio():0;for(i=1;i<this.#e.source().iterations()&&e*(i-1)<n+this.#t.width()&&(e>0||this.#e.source().iterations()!==1/0);i++)this.renderIteration(this.#x,i);for(;i<this.#l.length;){const s=this.#l.pop();s&&s.group&&s.group.remove()}}renderTransition(){const t=this.#a;this.#l[0]||(this.#l[0]={animationLine:null,keyframePoints:{},keyframeRender:{},group:null}),this.drawAnimationLine(0,t),this.renderKeyframe(0,0,t,l.AnimationMargin,this.duration()*this.#t.pixelTimeRatio(),this.#e.source().easing()),this.drawPoint(0,t,l.AnimationMargin,0,!0),this.drawPoint(0,t,this.duration()*this.#t.pixelTimeRatio()+l.AnimationMargin,-1,!0)}renderIteration(t,e){this.#l[e]||(this.#l[e]={animationLine:null,keyframePoints:{},keyframeRender:{},group:u(t,"g")});const i=this.#l[e].group;if(i){if(i.style.transform="translateX("+(e*this.duration()*this.#t.pixelTimeRatio()).toFixed(2)+"px)",this.drawAnimationLine(e,i),this.#i&&this.#i.length>1)for(let n=0;n<this.#i.length-1;n++){const s=this.offset(n)*this.duration()*this.#t.pixelTimeRatio()+l.AnimationMargin,o=this.duration()*(this.offset(n+1)-this.offset(n))*this.#t.pixelTimeRatio();this.renderKeyframe(e,n,i,s,o,this.#i[n].easing()),(n||!n&&e===0)&&this.drawPoint(e,i,s,n,e===0)}this.drawPoint(e,i,this.duration()*this.#t.pixelTimeRatio()+l.AnimationMargin,-1,e===0)}}delayOrStartTime(){let t=this.#e.delayOrStartTime();return(this.#c==="AnimationDrag"||this.#c==="StartEndpointMove")&&(t+=this.#m),t}duration(){let t=this.#e.iterationDuration();return this.#c==="FinishEndpointMove"?t+=this.#m:this.#c==="StartEndpointMove"&&(t-=this.#m),Math.max(0,t)}offset(t){if(!this.#i)throw new Error("Unable to calculate offset; keyframes do not exist");let e=this.#i[t].offsetAsNumber();return this.#c==="KeyframeMove"&&t===this.#d&&(console.assert(t>0&&t<this.#i.length-1,"First and last keyframe cannot be moved"),e+=this.#m/this.#e.iterationDuration(),e=Math.max(e,this.#i[t-1].offsetAsNumber()),e=Math.min(e,this.#i[t+1].offsetAsNumber())),e}mouseDown(t,e,i){const n=i;if(n.buttons===2||this.#o.enclosingNodeOrSelfWithClass("animation-node-removed"))return!1;this.#c=t,this.#d=e,this.#g=n.clientX,i.consume(!0);const s=Bt.instance(),o=s.locationNameForViewId("animations"),r=s.locationNameForViewId("elements");return this.#w&&o!==r&&zt(this.#w),!0}mouseMove(t){const e=t;this.setMovementAndRedraw((e.clientX-(this.#g||0))/this.#t.pixelTimeRatio())}setMovementAndRedraw(t){this.#m=t,this.delayOrStartTime()+this.duration()>this.#t.duration()*.8&&this.#t.setDuration(this.#t.duration()*1.2),this.redraw()}mouseUp(t){const e=t;this.#m=(e.clientX-(this.#g||0))/this.#t.pixelTimeRatio(),this.#c==="KeyframeMove"?this.#i&&this.#d!==null&&typeof this.#d<"u"&&this.#i[this.#d].setOffset(this.offset(this.#d)):this.#e.setTiming(this.duration(),this.delayOrStartTime()),b.animationPointDragged(this.#c==="AnimationDrag"?0:this.#c==="KeyframeMove"?1:this.#c==="StartEndpointMove"?2:this.#c==="FinishEndpointMove"?3:4),this.#m=0,this.redraw(),this.#c=void 0,this.#g=void 0,this.#d=void 0}keydownMove(t,e,i){const n=i;switch(this.#c=t,this.#d=e,n.key){case"ArrowLeft":case"ArrowUp":this.#m=-this.#f;break;case"ArrowRight":case"ArrowDown":this.#m=this.#f;break;default:return}this.#c==="KeyframeMove"?this.#i&&this.#d!==null&&this.#i[this.#d].setOffset(this.offset(this.#d)):this.#e.setTiming(this.duration(),this.delayOrStartTime()),this.setMovementAndRedraw(0),this.#c=void 0,this.#d=void 0,i.consume(!0)}onContextMenu(t){function e(i){if(!i)return;const n=new Ut(t);n.appendApplicableItems(i),n.show()}this.#e.remoteObjectPromise().then(e),t.consume(!0)}}const l={AnimationHeight:26,AnimationSVGHeight:50,AnimationMargin:7,EndpointsClickRegionSize:10,GridCanvasHeight:40},B=new Map([["Purple",v("#9C27B0")],["Light Blue",v("#03A9F4")],["Deep Orange",v("#FF5722")],["Blue",v("#5677FC")],["Lime",v("#CDDC39")],["Blue Grey",v("#607D8B")],["Pink",v("#E91E63")],["Green",v("#0F9D58")],["Brown",v("#795548")],["Cyan",v("#00BCD4")]]),le=Object.freeze(Object.defineProperty({__proto__:null,AnimationUI:x,Colors:B,Options:l},Symbol.toStringTag,{value:"Module"}));class xt{#e;element;#t;#i;#n;#o;constructor(t){this.#e=t,this.element=document.createElement("button"),this.element.setAttribute("jslog",`${jt(`animations.buffer-preview${t.isScrollDriven()?"-sda":""}`).track({click:!0})}`),this.element.classList.add("animation-buffer-preview"),this.element.addEventListener("animationend",()=>{this.element.classList.add("no-animation")}),this.element.createChild("div","animation-paused fill"),t.isScrollDriven()?this.element.appendChild(O("mouse","preview-icon")):this.element.appendChild(O("watch","preview-icon")),this.#t=this.element.createChild("button","animation-remove-button"),this.#t.setAttribute("jslog",`${lt("animations.remove-preview").track({click:!0})}`),this.#t.appendChild(O("cross")),this.#i=this.element.createChild("div","animation-buffer-preview-animation"),this.#n=u(this.element,"svg"),this.#n.setAttribute("width","100%"),this.#n.setAttribute("preserveAspectRatio","none"),this.#n.setAttribute("height","100%"),this.#o=32,this.#n.setAttribute("viewBox","0 0 100 "+this.#o),this.#n.setAttribute("shape-rendering","crispEdges"),this.render()}removeButton(){return this.#t}replay(){this.#i.animate([{offset:0,width:"0%",opacity:1},{offset:.9,width:"100%",opacity:1},{offset:1,width:"100%",opacity:0}],{duration:200,easing:"cubic-bezier(0, 0, 0.2, 1)"})}render(){this.#n.removeChildren();const e=Math.min(this.#e.animations().length,10),i=100/Math.max(this.#e.groupDuration(),750);for(let n=0;n<e;n++){const s=this.#e.animations()[n],o=u(this.#n,"line"),r=s.delayOrStartTime(),h=r+s.iterationDuration();o.setAttribute("x1",String(r*i)),o.setAttribute("x2",String(h*i));const d=String(Math.floor(this.#o/Math.max(6,e)*n+1));o.setAttribute("y1",d),o.setAttribute("y2",d),o.style.stroke=x.colorForAnimation(this.#e.animations()[n])}}}const he=Object.freeze(Object.defineProperty({__proto__:null,AnimationGroupPreviewUI:xt},Symbol.toStringTag,{value:"Module"}));export{se as AnimationDOMNode,he as AnimationGroupPreviewUI,oe as AnimationModel,re as AnimationScreenshotPopover,ae as AnimationTimeline,le as AnimationUI};
//# sourceMappingURL=animation-B5U3lJZQ.js.map
