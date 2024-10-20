import{b as B,g as I,bo as R,bp as F,bc as u,bq as N,i as y,br as A,bs as U,bt as V,bu as D,bv as G,aq as J,aj as O,bh as W,b1 as _,bw as q,bx as $}from"./inspector-CyOA7R9n.js";const L=new CSSStyleSheet;L.replaceSync(`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.perfmon-pane {
  overflow: hidden;

  --override-color-perf-monitor-cpu: var(--sys-color-yellow-bright);
  --override-color-perf-monitor-cpu-task-duration: var(--sys-color-neutral-bright);
  --override-color-perf-monitor-cpu-script-duration: var(--sys-color-yellow-bright);
  --override-color-perf-monitor-cpu-layout-duration: var(--sys-color-purple);
  --override-color-perf-monitor-cpu-recalc-style-duration: var(--sys-color-purple-bright);
  --override-color-perf-monitor-jsheap: var(--sys-color-purple-bright);
  --override-color-perf-monitor-jsheap-total-size: var(--ref-palette-purple70);
  --override-color-perf-monitor-jsheap-used-size: var(--sys-color-purple-bright);
  --override-color-perf-monitor-dom-nodes: var(--sys-color-green);
  --override-color-perf-monitor-js-event-listeners: var(--ref-palette-green80);
  --override-color-perf-monitor-documents: var(--sys-color-blue);
  --override-color-perf-monitor-document-frames: var(--sys-color-cyan-bright);
  --override-color-perf-monitor-layout-count: var(--sys-color-pink-bright);
  --override-color-perf-monitor-recalc-style-count: var(--sys-color-pink);
}

:host-context(.theme-with-dark-background) .perfmon-pane {
  --override-color-perf-monitor-jsheap-total-size: var(--ref-palette-purple50);
  --override-color-perf-monitor-js-event-listeners: var(--ref-palette-green50);
}

.perfmon-pane.suspended {
  opacity: 40%;
  pointer-events: none;
}

.perfmon-pane .perfmon-chart-suspend-overlay {
  display: none;
  font-size: 26px;
  align-items: center;
  justify-content: center;
}

.perfmon-pane.suspended .perfmon-chart-suspend-overlay {
  display: flex;
}

.perfmon-control-pane {
  display: flex;
  flex-direction: column;
  padding: 6px 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.perfmon-chart-container {
  display: flex;
  flex: 1 1;
  border-left: 1px solid var(--sys-color-divider);
  overflow-y: auto;
}

.perfmon-chart-container canvas {
  width: 100%;
}

.perfmon-indicator {
  padding: 3px 9px;
  margin: -1px 0;
  display: flex;
  flex-shrink: 0;
  width: 210px;
}

.perfmon-indicator span {
  flex: 0 0 135px;
}

.perfmon-indicator-value {
  flex: 0 0 55px;
  text-align: right;
  overflow: visible;
}

.perfmon-indicator:not(.active) .perfmon-indicator-value {
  opacity: 0%;
}

/*# sourceURL=performanceMonitor.css */
`);const d={graphsDisplayingARealtimeViewOf:"Graphs displaying a real-time view of performance metrics",paused:"Paused",cpuUsage:"CPU usage",jsHeapSize:"JS heap size",domNodes:"DOM Nodes",jsEventListeners:"JS event listeners",documents:"Documents",documentFrames:"Document Frames",layoutsSec:"Layouts / sec",styleRecalcsSec:"Style recalcs / sec"},Y=B("panels/performance_monitor/PerformanceMonitor.ts",d),m=I.bind(void 0,Y);class X extends R{metricsBuffer;pixelsPerMs;pollIntervalMs;scaleHeight;graphHeight;gridColor;controlPane;canvas;animationId;width;height;model;startTimestamp;pollTimer;constructor(e=500){super(!0),this.element.setAttribute("jslog",`${F("performance.monitor").track({resize:!0})}`),this.contentElement.classList.add("perfmon-pane"),this.metricsBuffer=[],this.pixelsPerMs=10/1e3,this.pollIntervalMs=e,this.scaleHeight=16,this.graphHeight=90,this.gridColor=u.instance().getComputedValue("--divider-line"),this.controlPane=new j(this.contentElement);const t=this.contentElement.createChild("div","perfmon-chart-container");this.canvas=t.createChild("canvas"),this.canvas.tabIndex=-1,N(this.canvas,m(d.graphsDisplayingARealtimeViewOf)),this.contentElement.createChild("div","perfmon-chart-suspend-overlay fill").createChild("div").textContent=m(d.paused),this.controlPane.addEventListener("MetricChanged",this.recalcChartHeight,this),y.instance().observeModels(A,this)}wasShown(){if(!this.model)return;this.registerCSSFiles([L]),this.controlPane.instantiateMetricData(),u.instance().addEventListener(U.eventName,()=>{this.controlPane.instantiateMetricData(),this.draw()}),y.instance().addEventListener("SuspendStateChanged",this.suspendStateChanged,this),this.model.enable(),this.suspendStateChanged()}willHide(){this.model&&(y.instance().removeEventListener("SuspendStateChanged",this.suspendStateChanged,this),this.stopPolling(),this.model.disable())}modelAdded(e){e.target()===y.instance().primaryPageTarget()&&(this.model=e,this.isShowing()&&this.wasShown())}modelRemoved(e){this.model===e&&(this.isShowing()&&this.willHide(),this.model=null)}suspendStateChanged(){const e=y.instance().allTargetsSuspended();e?this.stopPolling():this.startPolling(),this.contentElement.classList.toggle("suspended",e)}startPolling(){this.startTimestamp=0,this.pollTimer=window.setInterval(()=>this.poll(),this.pollIntervalMs),this.onResize();const e=()=>{this.draw(),this.animationId=this.contentElement.window().requestAnimationFrame(()=>{e()})};e()}stopPolling(){window.clearInterval(this.pollTimer),this.contentElement.window().cancelAnimationFrame(this.animationId),this.metricsBuffer=[]}async poll(){if(!this.model)return;const e=await this.model.requestMetrics(),t=e.timestamp,i=e.metrics;this.metricsBuffer.push({timestamp:t,metrics:i});const o=this.width/this.pixelsPerMs,r=Math.ceil(o/this.pollIntervalMs*2);this.metricsBuffer.length>r*2&&this.metricsBuffer.splice(0,this.metricsBuffer.length-r),this.controlPane.updateMetrics(i)}draw(){const e=this.canvas.getContext("2d");e.save(),e.scale(window.devicePixelRatio,window.devicePixelRatio),e.clearRect(0,0,this.width,this.height),e.save(),e.translate(0,this.scaleHeight);for(const t of this.controlPane.charts())this.controlPane.isActive(t.metrics[0].name)&&(this.drawChart(e,t,this.graphHeight),e.translate(0,this.graphHeight));e.restore(),this.drawHorizontalGrid(e),e.restore()}drawHorizontalGrid(e){const i=u.instance().getComputedValue("--color-background-inverted-opacity-2");e.font="10px "+V(),e.fillStyle=u.instance().getComputedValue("--color-background-inverted-opacity-50");const o=Date.now()/1e3;for(let r=Math.ceil(o);;--r){const s=this.width-((o-r)*1e3-this.pollIntervalMs)*this.pixelsPerMs;if(s<-50)break;e.beginPath(),e.moveTo(s,0),e.lineTo(s,this.height),r>=0&&r%10===0&&e.fillText(new Date(r*1e3).toLocaleTimeString(),s+4,12),e.strokeStyle=r%10?i:this.gridColor,e.stroke()}}drawChart(e,t,i){e.save(),e.rect(0,0,this.width,i),e.clip();const o=8,s=this.calcMax(t)*1.05,p=t.stacked?new Map:null,l=[];for(let n=t.metrics.length-1;n>=0;--n){const a=t.metrics[n];l.push({path:this.buildMetricPath(t,a,i-o,s,n?p:null),color:a.color})}const f=D(u.instance().getComputedValue("--sys-color-cdt-base-container"))?.asLegacyColor();if(f)for(const n of l.reverse()){const a=n.color;e.save();const c=D(a);c&&(e.fillStyle=f.blendWith(c.setAlpha(.2).asLegacyColor()).asString()||"",e.fill(n.path),e.strokeStyle=a,e.lineWidth=.5,e.stroke(n.path),e.restore())}e.fillStyle=u.instance().getComputedValue("--color-background-inverted-opacity-50"),e.font=`10px  ${V()}`,e.fillText(t.title,8,10),this.drawVerticalGrid(e,i-o,s,t),e.restore()}calcMax(e){if(e.max)return e.max;const t=this.width,i=performance.now()-this.pollIntervalMs-t/this.pixelsPerMs;let o=-1/0;for(const p of e.metrics)for(let l=this.metricsBuffer.length-1;l>=0;--l){const f=this.metricsBuffer[l],n=f.metrics.get(p.name);if(n!==void 0&&(o=Math.max(o,n)),f.timestamp<i)break}if(!this.metricsBuffer.length)return 10;const r=Math.pow(10,Math.floor(Math.log10(o)));o=Math.ceil(o/r/2)*r*2;const s=.2;return e.currentMax=o*s+(e.currentMax||o)*(1-s),e.currentMax}drawVerticalGrid(e,t,i,o){let r=Math.pow(10,Math.floor(Math.log10(i)));const s=Math.floor(i/r);s!==1&&s%2===1&&(r*=2);let p=Math.floor(i/r)*r;const l=i,n=t-18;e.fillStyle=u.instance().getComputedValue("--color-background-inverted-opacity-50"),e.strokeStyle=this.gridColor,e.beginPath();for(let c=0;c<2;++c){const g=a(p),h=C.formatNumber(p,o);e.moveTo(0,g),e.lineTo(4,g),e.moveTo(e.measureText(h).width+12,g),e.lineTo(this.width,g),e.fillText(h,8,a(p)+3),p/=2}e.stroke(),e.beginPath(),e.moveTo(0,t+.5),e.lineTo(this.width,t+.5),e.strokeStyle=u.instance().getComputedValue("--color-background-inverted-opacity-2"),e.stroke();function a(c){return Math.round(t-n*c/l)+.5}}buildMetricPath(e,t,i,o,r){const s=new Path2D,l=i-18;if(l<1)return s;const f=o,n=t.name,a=this.pixelsPerMs,c=performance.now()-this.pollIntervalMs-this.width/a,g=e.smooth;let h=0,v=0,S=0;this.metricsBuffer.length&&(h=(this.metricsBuffer[0].timestamp-c)*a,s.moveTo(h,M(0)),s.lineTo(this.width+5,M(0)),v=M(this.metricsBuffer[this.metricsBuffer.length-1].metrics.get(n)||0),S=this.width+5,s.lineTo(S,v));for(let b=this.metricsBuffer.length-1;b>=0;--b){const k=this.metricsBuffer[b],P=k.timestamp;let w=k.metrics.get(n)||0;r&&(w+=r.get(P)||0,w=G(w,0,1),r.set(P,w));const T=M(w);if(h=(P-c)*a,g){const E=(S+h)/2;s.bezierCurveTo(E,v,E,T,h,T)}else s.lineTo(h,v),s.lineTo(h,T);if(S=h,v=T,P<c)break}return s;function M(b){return Math.round(i-l*b/f)+.5}}onResize(){super.onResize(),this.width=this.canvas.offsetWidth,this.canvas.width=Math.round(this.width*window.devicePixelRatio),this.recalcChartHeight()}recalcChartHeight(){let e=this.scaleHeight;for(const t of this.controlPane.charts())this.controlPane.isActive(t.metrics[0].name)&&(e+=this.graphHeight);this.height=Math.ceil(e*window.devicePixelRatio),this.canvas.height=this.height,this.canvas.style.height=`${this.height/window.devicePixelRatio}px`}}class j extends J{element;enabledChartsSetting;enabledCharts;chartsInfo=[];indicators=new Map;constructor(e){super(),this.element=e.createChild("div","perfmon-control-pane"),this.enabledChartsSetting=O.instance().createSetting("perfmon-active-indicators2",["TaskDuration","JSHeapTotalSize","Nodes"]),this.enabledCharts=new Set(this.enabledChartsSetting.get())}instantiateMetricData(){const e={color:void 0,format:void 0,currentMax:void 0,max:void 0,smooth:void 0,stacked:void 0},t=u.instance();this.chartsInfo=[{...e,title:m(d.cpuUsage),metrics:[{name:"TaskDuration",color:t.getComputedValue("--override-color-perf-monitor-cpu-task-duration",this.element)},{name:"ScriptDuration",color:t.getComputedValue("--override-color-perf-monitor-cpu-script-duration",this.element)},{name:"LayoutDuration",color:t.getComputedValue("--override-color-perf-monitor-cpu-layout-duration",this.element)},{name:"RecalcStyleDuration",color:t.getComputedValue("--override-color-perf-monitor-cpu-recalc-style-duration",this.element)}],format:"Percent",smooth:!0,stacked:!0,color:t.getComputedValue("--override-color-perf-monitor-cpu",this.element),max:1,currentMax:void 0},{...e,title:m(d.jsHeapSize),metrics:[{name:"JSHeapTotalSize",color:t.getComputedValue("--override-color-perf-monitor-jsheap-total-size",this.element)},{name:"JSHeapUsedSize",color:t.getComputedValue("--override-color-perf-monitor-jsheap-used-size",this.element)}],format:"Bytes",color:t.getComputedValue("--override-color-perf-monitor-jsheap")},{...e,title:m(d.domNodes),metrics:[{name:"Nodes",color:t.getComputedValue("--override-color-perf-monitor-dom-nodes",this.element)}]},{...e,title:m(d.jsEventListeners),metrics:[{name:"JSEventListeners",color:t.getComputedValue("--override-color-perf-monitor-js-event-listeners",this.element)}]},{...e,title:m(d.documents),metrics:[{name:"Documents",color:t.getComputedValue("--override-color-perf-monitor-documents",this.element)}]},{...e,title:m(d.documentFrames),metrics:[{name:"Frames",color:t.getComputedValue("--override-color-perf-monitor-document-frames",this.element)}]},{...e,title:m(d.layoutsSec),metrics:[{name:"LayoutCount",color:t.getComputedValue("--override-color-perf-monitor-layout-count",this.element)}]},{...e,title:m(d.styleRecalcsSec),metrics:[{name:"RecalcStyleCount",color:t.getComputedValue("--override-color-perf-monitor-recalc-style-count",this.element)}]}],this.element.removeChildren(),this.indicators=new Map;for(const i of this.chartsInfo){const o=i.metrics[0].name,r=this.enabledCharts.has(o),s=new C(this.element,i,r,this.onToggle.bind(this,o));s.element.setAttribute("jslog",`${W().track({click:!0,keydown:"Enter"}).context(_(o))}`),this.indicators.set(o,s)}}onToggle(e,t){t?this.enabledCharts.add(e):this.enabledCharts.delete(e),this.enabledChartsSetting.set(Array.from(this.enabledCharts)),this.dispatchEventToListeners("MetricChanged")}charts(){return this.chartsInfo}isActive(e){return this.enabledCharts.has(e)}updateMetrics(e){for(const t of this.indicators.keys()){const i=e.get(t);if(i!==void 0){const o=this.indicators.get(t);o&&o.setValue(i)}}}}let x,H;class C{info;element;swatchElement;valueElement;color;constructor(e,t,i,o){this.color=t.color||t.metrics[0].color,this.info=t,this.element=e.createChild("div","perfmon-indicator");const r=t.metrics[0].name;this.swatchElement=q.create(t.title,i,void 0,r),this.element.appendChild(this.swatchElement),this.swatchElement.checkboxElement.addEventListener("change",()=>{o(this.swatchElement.checkboxElement.checked),this.element.classList.toggle("active")}),this.valueElement=this.element.createChild("div","perfmon-indicator-value"),this.valueElement.style.color=this.color,this.element.classList.toggle("active",i)}static formatNumber(e,t){switch(x||(x=new Intl.NumberFormat("en-US",{maximumFractionDigits:1}),H=new Intl.NumberFormat("en-US",{maximumFractionDigits:1,style:"percent"})),t.format){case"Percent":return H.format(e);case"Bytes":return $(e);default:return x.format(e)}}setValue(e){this.valueElement.textContent=C.formatNumber(e,this.info)}}const K=new Intl.NumberFormat("en-US",{maximumFractionDigits:1}),Z=Object.freeze(Object.defineProperty({__proto__:null,ControlPane:j,MetricIndicator:C,PerformanceMonitorImpl:X,format:K},Symbol.toStringTag,{value:"Module"}));export{Z as PerformanceMonitor};
//# sourceMappingURL=performance_monitor-GbHpRDBK.js.map
