import{fR as j,b as $,g as U,dz as nt,bc as L,bt as ot,ba as Ne,bq as ie,e$ as at,cP as V,bs as lt,b7 as O,ge as ht,gf as dt,f0 as ct,cR as Q,cc as fe,dj as Xe,cm as $e,ak as ke,cb as ut,gg as ft,b8 as M,f4 as ee,bu as mt,gh as gt,l as he,bv as A,aU as Ue,aK as pt,bW as vt,aj as wt,b9 as bt,gi as yt,dV as Ke,cO as Et,ew as Tt,bJ as Pe,fs as St,eD as Ct,cM as De,bo as xt,aq as Lt,eJ as kt,gj as Ie,bM as Pt,I as Dt,gk as Re,gl as Oe,gm as te,gn as It,go as Me,gp as He,bG as Rt,aP as Ot}from"./inspector-CyOA7R9n.js";class Ye{begin;end;data;constructor(e,t,i){if(e>t)throw new Error("Invalid segment");this.begin=e,this.end=t,this.data=i}intersects(e){return this.begin<e.end&&e.begin<this.end}}class Mt{#t;#e;constructor(e){this.#t=[],this.#e=e}append(e){let t=j(this.#t,e,(r,n)=>r.begin-n.begin),i=t,s=null;if(t>0){const r=this.#t[t-1];s=this.tryMerge(r,e),s?(--t,e=s):this.#t[t-1].end>=e.begin&&(e.end<r.end&&this.#t.splice(t,0,new Ye(e.end,r.end,r.data)),r.end=e.begin)}for(;i<this.#t.length&&this.#t[i].end<=e.end;)++i;i<this.#t.length&&(s=this.tryMerge(e,this.#t[i]),s?(i++,e=s):e.intersects(this.#t[i])&&(this.#t[i].begin=e.end)),this.#t.splice(t,i-t,e)}appendRange(e){e.segments().forEach(t=>this.append(t))}segments(){return this.#t}tryMerge(e,t){const i=this.#e&&this.#e(e,t);return i?(i.begin=e.begin,i.end=Math.max(e.end,t.end),i):null}}const Te={congrats:"Congrats, you win!",ps:"PS: You can also open the game by typing `fixme`"},Ht=$("ui/legacy/components/perf_ui/BrickBreaker.ts",Te),Ae=U.bind(void 0,Ht),At=16,me=10,ge=150,zt=85,z=15,x=10,ze=[{light:"rgb(224,240,255)",mediumLighter:"rgb(176,208,255)",mediumDarker:"rgb(112,160,221)",dark:"rgb(0,92,153)"},{light:"rgb(253, 216, 229)",mediumLighter:"rgb(250, 157, 188)",mediumDarker:"rgb(249, 98, 154)",dark:"rgb(254, 5, 105)"},{light:"rgb(254, 234, 234)",mediumLighter:"rgb(255, 216, 216)",mediumDarker:"rgb(255, 195, 195)",dark:"rgb(235, 125, 138)"},{light:"rgb(226,183,206)",mediumLighter:"rgb(219,124,165)",mediumDarker:"rgb(146,60,129)",dark:"rgb(186, 85, 255)"},{light:"rgb(206,255,206)",mediumLighter:"rgb(128,255,128)",mediumDarker:"rgb(0,246,0)",dark:"rgb(0,187,0)"},{light:"rgb(255, 188, 181)",mediumLighter:"rgb(254, 170, 170)",mediumDarker:"rgb(215, 59, 43)",dark:"rgb(187, 37, 23)"},{light:"rgb(236, 254, 250)",mediumLighter:"rgb(204, 255, 245)",mediumDarker:"rgb(164, 240, 233)",dark:"rgb(72,189,144)"},{light:"rgb(255, 225, 185)",mediumLighter:"rgb(255, 204, 141)",mediumDarker:"rgb(240, 140, 115)",dark:"rgb(211, 96, 117)"},{light:"rgb(218, 255, 248)",mediumLighter:"rgb(177, 235, 236)",mediumDarker:"rgb(112, 214, 214)",dark:"rgb(34, 205, 181)"}];class je extends HTMLElement{timelineFlameChart;#t;#e;#i;#d;#f;#s=0;#u=new Set;#a=new Map;#w=this.#_.bind(this);#b=this.#W.bind(this);#D=this.#V.bind(this);#C=this.#k.bind(this);#I=this.#N.bind(this);#R=nt.instance().getDevToolsBoundingElement();#m=0;#y=!1;#M=devicePixelRatio;#r=0;#g=0;#l=0;#h=0;#n=0;#E=!1;#T=!1;#P=0;#x=0;#v=0;#o=ge;#p=150;#H=1500;#A=this.#H-this.#p;#L=0;#S=0;#c;constructor(e){super(),this.timelineFlameChart=e,this.#t=this.createChild("canvas","fill"),this.#e=this.#t.getContext("2d"),this.#i=document.createElement("canvas"),this.#d=this.#i.getContext("2d");const t=Math.floor(Math.random()*ze.length);this.#c=ze[t],this.#f=this.createChild("div"),this.#f.classList.add("scorePanel"),this.#f.style.borderImage="linear-gradient("+this.#c.mediumDarker+","+this.#c.dark+") 1",this.initButton()}initButton(){const e=this.createChild("div");e.classList.add("game-close-button"),e.innerHTML="<b><span style='font-size: 1.2em; color: white'>x</span></b>",e.style.background=this.#c.dark,e.style.boxShadow=this.#c.dark+" 1px 1px, "+this.#c.mediumDarker+" 3px 3px, "+this.#c.mediumLighter+" 5px 5px",e.addEventListener("click",this.#k.bind(this)),this.appendChild(e)}connectedCallback(){this.#y=!0,this.#F(),this.#R.addEventListener("keydown",this.#w),document.addEventListener("keydown",this.#w,!1),document.addEventListener("keyup",this.#b,!1),document.addEventListener("keypress",this.#D,!1),window.addEventListener("resize",this.#C),document.addEventListener("mousemove",this.#I,!1),this.tabIndex=1,this.focus()}disconnectedCallback(){this.#R.removeEventListener("keydown",this.#w),window.removeEventListener("resize",this.#C),document.removeEventListener("keydown",this.#w,!1),document.removeEventListener("keyup",this.#b,!1),window.removeEventListener("resize",this.#C),document.removeEventListener("keypress",this.#D,!1),document.removeEventListener("mousemove",this.#I,!1)}#z(){const e=window.devicePixelRatio,t=Math.round(this.offsetHeight*e),i=Math.round(this.offsetWidth*e);this.#t.height=t,this.#t.width=i,this.#t.style.height=t/e+"px",this.#t.style.width=i/e+"px"}#k(){this.#y=!1,this.remove()}#F(){this.#z(),this.#L=Math.max(.1,(this.offsetHeight-this.#p)/this.#A),this.#S=me*this.#L;const e=this.timelineFlameChart.drawTrackOnCanvas("Main",this.#e,x);if(e===null||e.visibleEntries.size===0){console.error("Could not draw game"),this.#k();return}this.#s=e.top,this.#u=e.visibleEntries,this.#m=this.#s+this.timelineFlameChart.getCanvas().getBoundingClientRect().top-this.timelineFlameChart.getScrollOffset(),requestAnimationFrame(()=>this.#G(e.top,e.height))}#G(e,t){if(e===0){this.#X();return}const i=window.devicePixelRatio,s=Math.round(e*i),r=Math.max(e-4,0),n=Math.round(r*i),o=this.#t;this.#i.height=o.height,this.#i.width=o.width,this.#i.style.height=o.style.height,this.#i.style.width=o.style.width,this.#d.drawImage(o,0,s,o.width,t*i,0,n,o.width,t*i),this.#z(),this.#e.drawImage(this.#i,0,0),requestAnimationFrame(()=>this.#G(r,t))}#W(e){e.key==="Right"||e.key==="ArrowRight"||e.key==="d"?(this.#E=!1,e.preventDefault()):e.key==="Left"||e.key==="ArrowLeft"||e.key==="a"?(this.#T=!1,e.preventDefault()):e.stopImmediatePropagation()}#V(e){e.stopImmediatePropagation(),e.preventDefault()}#_(e){e.key==="Escape"?(this.#k(),e.stopImmediatePropagation()):e.key==="Right"||e.key==="ArrowRight"||e.key==="d"?(this.#E=!0,e.preventDefault()):e.key==="Left"||e.key==="ArrowLeft"||e.key==="a"?(this.#T=!0,e.preventDefault()):(e.preventDefault(),e.stopImmediatePropagation())}#N(e){this.#n=Math.max(e.offsetX-this.#o/2,0),this.#n=Math.min(this.#n,this.offsetWidth-this.#o)}#X(){this.#r=this.offsetWidth/2,this.#g=this.offsetHeight-z-x,this.#l=0,this.#h=-Math.SQRT2*this.#S,this.#n=(this.#t.width-this.#o)/2,this.#E=!1,this.#T=!1,this.#P=this.timelineFlameChart.getBarHeight(),this.#v=this.#u.size,this.#x=Math.max(Math.round(this.#v/17),2),this.#B()}#$(){this.#r=this.offsetWidth/2,this.#g=this.offsetHeight-z-x,this.#l=0,this.#h=-Math.SQRT2*this.#S}#U(){if(!this.#e)return;const e=this.#e.createRadialGradient(this.#r+x/4,this.#g-x/4,0,this.#r+x/4,this.#g-x/4,x);e.addColorStop(.3,this.#c.mediumLighter),e.addColorStop(.6,this.#c.mediumDarker),e.addColorStop(1,this.#c.dark),this.#e.beginPath(),this.#e.arc(this.#r,this.#g,x,0,Math.PI*2),this.#e.fillStyle=e,this.#e.fill(),this.#e.closePath()}#K(){if(!this.#e)return;const e=this.#e.createRadialGradient(this.#n+this.#o/3,this.offsetHeight-z-z/4,0,this.#n+this.#o/3,this.offsetHeight-z-z/4,this.#o/2);e.addColorStop(.3,this.#c.dark),e.addColorStop(1,this.#c.mediumDarker),this.#e.beginPath(),this.#e.rect(this.#n,this.offsetHeight-z,this.#o,z),this.#e.fillStyle=e,this.#e.fill(),this.#e.closePath()}#Y(){if(this.#e)for(const e of this.#a.values())this.#e.beginPath(),this.#e.rect(e.x,e.y,e.width+.5,this.#P+.5),this.#e.fillStyle=L.instance().getComputedValue("--sys-color-neutral-container",this),this.#e.fill(),this.#e.closePath()}#B(){if(this.#M!==devicePixelRatio&&(this.#y=!1),this.#x===0){window.alert("GAME OVER"),this.#k();return}if(this.#v===0){this.#Z();return}this.#e.clearRect(0,0,this.#t.width,this.#t.height),this.#e.drawImage(this.#i,0,0),this.#e.save(),this.#e.scale(devicePixelRatio,devicePixelRatio),this.#d.save(),this.#d.scale(devicePixelRatio,devicePixelRatio),this.#Y(),this.#U(),this.#K(),this.#j();const e=`<div><b><span style='font-size: 1.3em; color:  ${this.#c.dark}'>&#x2764;&#xfe0f; ${this.#x}</span></b></div>`,t=`<div><b><span style='font-size: 1.3em; color: ${this.#c.dark}'> 🧱 ${this.#v}</span></b></div>`;if(this.#f.innerHTML=e+t,this.#v=this.#u.size-this.#a.size,this.#S=(me+(At-me)*this.#a.size/this.#u.size)*this.#L,this.#o=ge-(ge-zt)*this.#a.size/this.#u.size,(this.#r+this.#l>this.offsetWidth-x||this.#r+this.#l<x)&&(this.#l=-this.#l),this.#g+this.#h<x)this.#h=-this.#h;else if(this.#g+this.#h>this.offsetHeight-x&&this.#h>0)if(this.#r>this.#n-x&&this.#r<this.#n+this.#o+x){let s=Math.min(this.#r,this.#n+this.#o);s=Math.max(s,this.#n);const r=(s-this.#n)*this.#S*2/this.#o;this.#l=-this.#S+r,this.#h=-Math.sqrt(2*Math.pow(this.#S,2)-Math.pow(this.#l,2))}else this.#$(),this.#n=(this.offsetWidth-this.#o)/2,this.#x--;const i=Math.round(this.clientWidth/60);this.#E&&this.#n<this.offsetWidth-this.#o?this.#n+=i:this.#T&&this.#n>0&&(this.#n-=i),this.#r+=Math.round(this.#l),this.#g+=Math.round(this.#h),this.#e.restore(),this.#d.restore(),this.#y&&requestAnimationFrame(this.#B.bind(this))}#j(){const e=this.timelineFlameChart.getCanvas().getBoundingClientRect(),t=this.#g+this.#m-e.top,i=this.timelineFlameChart.coordinatesToEntryIndex(this.#r,t+x),s=this.timelineFlameChart.coordinatesToEntryIndex(this.#r,t-x),r=this.timelineFlameChart.coordinatesToEntryIndex(this.#r+x,t),n=this.timelineFlameChart.coordinatesToEntryIndex(this.#r-x,t),o=x/Math.SQRT2,h=this.timelineFlameChart.coordinatesToEntryIndex(this.#r+o,t+o),a=this.timelineFlameChart.coordinatesToEntryIndex(this.#r-o,t+o),c=this.timelineFlameChart.coordinatesToEntryIndex(this.#r+o,t-o),u=this.timelineFlameChart.coordinatesToEntryIndex(this.#r-o,t-o),l=g=>{const m=this.timelineFlameChart.entryIndexToCoordinates(g);if(m){const f=Math.max(m.x-e.left,0);this.#a.set(g,{x:f-.5,y:m.y-this.#m-.5,width:this.timelineFlameChart.entryWidth(g)})}};if(i>-1&&!this.#a.has(i)&&this.#u.has(i)){this.#h=-this.#h,l(i);return}if(s>-1&&!this.#a.has(s)&&this.#u.has(s)){this.#h=-this.#h,l(s);return}if(r>-1&&!this.#a.has(r)&&this.#u.has(r)){this.#l=-this.#l,l(r);return}if(n>-1&&!this.#a.has(n)&&this.#u.has(n)){this.#l=-this.#l,l(n);return}const d=[h,a,c,u];for(const g of d)if(g>-1&&!this.#a.has(g)&&this.#u.has(g)){this.#l=-this.#l,this.#h=-this.#h,l(g);return}}#O(e,t){return Math.floor(Math.random()*(t-e)+e)}#Z(){this.#z();let e=0;const t=15,i=5,s=this.offsetWidth/t,r=this.offsetHeight*.7/t,n=[],o=()=>-20+Math.random()*40,h=()=>{for(let a=0;a<t*i;a++){const c=document.createElement("span");c.className="confetti-100",c.append(this.#q(a%t*s+o(),a%i*r+o())),n.push(window.setTimeout(()=>this.append(c),Math.random()*100)),n.push(window.setTimeout(()=>{c.remove()},1e3))}if(++e<6){setTimeout(h,Math.random()*100+400);return}window.alert(`${Ae(Te.congrats)}
${Ae(Te.ps)}`),n.forEach(a=>clearTimeout(a)),this.#k()};h()}#q(e,t){const r=["💯","🎉","🎊"],n=document.createElement("span");return n.textContent=r[this.#O(0,r.length)],n.className="confetti-100-particle",n.style.setProperty("--rotation",this.#O(-3*360,3*360)+"deg"),n.style.setProperty("--to-X",this.#O(-400,400)+"px"),n.style.setProperty("--to-Y",this.#O(-400,400)+"px"),n.style.left=e+"px",n.style.top=t+"px",n}}customElements.define("brick-breaker",je);const li=Object.freeze(Object.defineProperty({__proto__:null,BrickBreaker:je},Symbol.toStringTag,{value:"Module"})),Gt={cssContent:`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.chart-viewport-v-scroll {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  z-index: 200;
  padding-left: 1px;
}

.chart-viewport-v-scroll.always-show-scrollbar {
  overflow-y: scroll;
}
/* force non overlay scrollbars for Mac */

:host-context(.platform-mac) .chart-viewport-v-scroll {
  right: 2px;
  top: 3px;
  bottom: 3px;
}

:host-context(.platform-mac) ::-webkit-scrollbar {
  width: 8px;
}

:host-context(.platform-mac) ::-webkit-scrollbar-thumb {
  background-color: var(--color-scrollbar-mac);
  border-radius: 50px;
}

:host-context(.platform-mac) .chart-viewport-v-scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--color-scrollbar-mac-hover);
}
/* force non overlay scrollbars for Aura Overlay Scrollbar enabled */

:host-context(.overlay-scrollbar-enabled) ::-webkit-scrollbar {
  width: 10px;
}

:host-context(.overlay-scrollbar-enabled) ::-webkit-scrollbar-thumb {
  background-color: var(--color-scrollbar-other);
}

:host-context(.overlay-scrollbar-enabled) .chart-viewport-v-scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--color-scrollbar-other-hover);
}

.chart-viewport-selection-overlay {
  position: absolute;
  z-index: 100;
  background-color: var(--sys-color-state-ripple-primary);
  border-color: var(--sys-color-primary);
  border-width: 0 1px;
  border-style: solid;
  pointer-events: none;
  top: 0;
  bottom: 0;
  text-align: center;
}

.chart-viewport-selection-overlay .time-span {
  white-space: nowrap;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

/*# sourceURL=chartViewport.css */
`};function Ge(v,e,t){v.moveTo(0,t),v.lineTo(e,t)}function Bt(v,e,t,i){const s=G*Math.sqrt(3)/2,r=Math.round(s/2);v.save(),v.beginPath(),v.translate(e,t),v.rotate(i?Math.PI/2:0),v.moveTo(-r,-G/2),v.lineTo(-r,G/2),v.lineTo(s-r,0),v.fill(),v.restore()}function pe(v,e,t,i,s,r="--sys-color-on-surface"){const n=new Path2D(s);v.save(),v.translate(e,t),v.fillStyle=L.instance().getComputedValue("--sys-color-cdt-base-container"),v.fillRect(0,0,i,i),v.fillStyle=L.instance().getComputedValue(r);const o=i/20;v.scale(o,o),v.fill(n),v.restore()}const Ft={cssContent:`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.flame-chart-main-pane {
  overflow: hidden;

  --selected-group-background: hsl(215deg 85% 98%);
  --selected-group-border: hsl(216deg 68% 54%);
}

:host-context(.theme-with-dark-background) .flame-chart-main-pane {
  --selected-group-background: hsl(215deg 85% 15%);
  --selected-group-border: hsl(216deg 68% 46%);
}

.flame-chart-marker-highlight-element {
  position: absolute;
  top: 1px;
  height: 18px;
  width: 6px;
  margin: 0 -3px;
  content: "";
  display: block;
}

.flame-chart-canvas:focus-visible {
  border-top: 1px solid var(--sys-color-state-focus-ring);
  border-bottom: 1px solid var(--sys-color-state-focus-ring);
}

.flame-chart-highlight-element {
  position: absolute;
  pointer-events: none;
  background-color: var(--sys-color-state-hover-on-subtle);
}

.reveal-descendants-arrow-highlight-element {
  position: absolute;
  pointer-events: none;
  background-color: var(--sys-color-state-hover-on-subtle);
}

.flame-chart-selected-element {
  position: absolute;
  pointer-events: none;
  outline: 2px solid var(--sys-color-primary);
  background-color: var(--sys-color-state-ripple-primary);
}

.flame-chart-search-element {
  position: absolute;
  pointer-events: none;
  outline: 1px solid var(--sys-color-on-surface-subtle);
  background-color: var(--sys-color-state-ripple-neutral-on-subtle);
}

.chart-cursor-element {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 2px;
  background-color: var(--sys-color-primary);
  pointer-events: none;

  &.using-new-overlays {
    background-color: var(--ref-palette-pink50);
  }
}

.flame-chart-entry-info:not(:empty) {
  z-index: 2000;
  position: absolute;
  contain: content;
  background-color: var(--sys-color-cdt-base-container);
  pointer-events: none;
  padding: 4px 8px;
  white-space: nowrap;
  max-width: 80%;
  box-shadow: var(--drop-shadow);
}

.flame-chart-entry-info table tr td:empty {
  padding: 0;
}

.flame-chart-entry-info table tr td:not(:empty) {
  padding: 0 5px;
  white-space: nowrap;
}

.flame-chart-entry-info table tr td:first-child {
  font-weight: bold;
}

.flame-chart-entry-info table tr td span {
  margin-right: 5px;
}

.flame-chart-edit-confirm {
  position: fixed;
  bottom: 10px;
  right: 10px;
}

/*# sourceURL=flameChart.css */
`};let K=null;function Se(){if(K)return K;const v=getComputedStyle(document.body);return v.fontFamily?K=v.fontFamily:K=ot(),K}const Ce="11px",hi=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_FONT_SIZE:Ce,getFontFamilyForCanvas:Se},Symbol.toStringTag,{value:"Module"})),Wt={cssContent:`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.resources-dividers {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -100;
  bottom: 0;
}

.resources-event-dividers {
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  top: 0;
  z-index: 300;
  pointer-events: none;
}

.resources-dividers-label-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-clip: padding-box;
  height: 20px;
  z-index: 200;
  pointer-events: none;
  overflow: hidden;
}

.resources-divider {
  position: absolute;
  width: 1px;
  top: 0;
  bottom: 0;
  background-color: var(--sys-color-divider);
}

.resources-event-divider {
  position: absolute;
  width: 1px;
  top: 0;
  bottom: 0;
  z-index: 300;
}

.resources-divider-label {
  position: absolute;
  top: 4px;
  right: 3px;
  font-size: 80%;
  white-space: nowrap;
  pointer-events: none;
}

.timeline-grid-header {
  height: 20px;
  pointer-events: none;
}

/*# sourceURL=timelineGrid.css */
`},Be=new Map;class _{element;dividersElementInternal;gridHeaderElement;eventDividersElement;dividersLabelBarElementInternal;constructor(){this.element=document.createElement("div"),L.instance().appendStyle(this.element,Wt),this.dividersElementInternal=this.element.createChild("div","resources-dividers"),this.gridHeaderElement=document.createElement("div"),this.gridHeaderElement.classList.add("timeline-grid-header"),this.eventDividersElement=this.gridHeaderElement.createChild("div","resources-event-dividers"),this.dividersLabelBarElementInternal=this.gridHeaderElement.createChild("div","resources-dividers-label-bar"),this.element.appendChild(this.gridHeaderElement)}static calculateGridOffsets(e,t){const s=e.computePosition(e.maximumBoundary());let r=s/64,n=e.boundarySpan()/r;const o=s/e.boundarySpan(),h=Math.ceil(Math.log(n)/Math.LN10);n=Math.pow(10,h),n*o>=5*64&&(n=n/5),n*o>=2*64&&(n=n/2);const a=Math.ceil((e.minimumBoundary()-e.zeroTime())/n)*n+e.zeroTime();let c=e.maximumBoundary();c+=64/o,r=Math.ceil((c-a)/n),n||(r=0);const u=[];for(let l=0;l<r;++l){const d=a+n*100*l/100,g=e.computePosition(d);g<(t||0)||u.push({position:Math.floor(g),time:d})}return{offsets:u,precision:Math.max(0,-Math.floor(Math.log(n*1.01)/Math.LN10))}}static drawCanvasGrid(e,t){e.save(),e.scale(window.devicePixelRatio,window.devicePixelRatio);const i=Math.floor(e.canvas.height/window.devicePixelRatio);e.strokeStyle=getComputedStyle(document.body).getPropertyValue("--app-color-strokestyle"),e.lineWidth=1,e.translate(.5,.5),e.beginPath();for(const s of t.offsets)e.moveTo(s.position,0),e.lineTo(s.position,i);e.stroke(),e.restore()}static drawCanvasHeaders(e,t,i,s,r,n){e.save(),e.scale(window.devicePixelRatio,window.devicePixelRatio);const o=Math.ceil(e.canvas.width/window.devicePixelRatio);e.beginPath(),e.fillStyle=L.instance().getComputedValue("--color-background-opacity-50"),e.fillRect(0,0,o,r),e.fillStyle=L.instance().getComputedValue("--sys-color-on-surface"),e.textBaseline="hanging",e.font=`${Ce} ${Se()}`;const h=4;for(const a of t.offsets){const c=i(a.time),u=e.measureText(c).width,l=a.position-u-h;(!n||n<l)&&e.fillText(c,l,s)}e.restore()}get dividersElement(){return this.dividersElementInternal}get dividersLabelBarElement(){return this.dividersLabelBarElementInternal}removeDividers(){this.dividersElementInternal.removeChildren(),this.dividersLabelBarElementInternal.removeChildren()}updateDividers(e,t){const i=_.calculateGridOffsets(e,t),s=i.offsets,r=i.precision,n=this.dividersElementInternal.clientWidth;let o=this.dividersElementInternal.firstChild,h=this.dividersLabelBarElementInternal.firstChild;for(let a=0;a<s.length;++a){if(!o){o=document.createElement("div"),o.className="resources-divider",this.dividersElementInternal.appendChild(o),h=document.createElement("div"),h.className="resources-divider";const d=document.createElement("div");d.className="resources-divider-label",Be.set(h,d),h.appendChild(d),this.dividersLabelBarElementInternal.appendChild(h)}const c=s[a].time,u=s[a].position;if(h){const d=Be.get(h);d&&(d.textContent=e.formatValue(c,r))}const l=100*u/n;o.style.left=l+"%",h&&(h.style.left=l+"%"),o=o.nextSibling,h&&(h=h.nextSibling)}for(;o;){const a=o.nextSibling;if(this.dividersElementInternal.removeChild(o),a)o=a;else break}for(;h;){const a=h.nextSibling;if(this.dividersLabelBarElementInternal.removeChild(h),a)h=a;else break}return!0}addEventDivider(e){this.eventDividersElement.appendChild(e)}addEventDividers(e){this.gridHeaderElement.removeChild(this.eventDividersElement);for(const t of e)this.eventDividersElement.appendChild(t);this.gridHeaderElement.appendChild(this.eventDividersElement)}removeEventDividers(){this.eventDividersElement.removeChildren()}hideEventDividers(){this.eventDividersElement.classList.add("hidden")}showEventDividers(){this.eventDividersElement.classList.remove("hidden")}hideDividers(){this.dividersElementInternal.classList.add("hidden")}showDividers(){this.dividersElementInternal.classList.remove("hidden")}setScrollTop(e){this.dividersLabelBarElementInternal.style.top=e+"px",this.eventDividersElement.style.top=e+"px"}}const di=Object.freeze(Object.defineProperty({__proto__:null,TimelineGrid:_},Symbol.toStringTag,{value:"Module"})),P={eventSelectedFromGroup:'Selected a {PH1} event within {PH2}. Press "enter" to focus this event.',flameChart:"Flame Chart",sHovered:"{PH1} hovered",sSelected:"{PH1} selected",sExpanded:"{PH1} expanded",sCollapsed:"{PH1} collapsed",labelEntry:"Label entry",linkEntries:"Link entries",deleteAnnotations:"Delete annotations",enterTrackConfigurationMode:"Configure tracks…",exitTrackConfigurationMode:"Finish configuring tracks"},Vt=$("ui/legacy/components/perf_ui/FlameChart.ts",P),I=U.bind(void 0,Vt),Z=6,G=8,ve=Z+G/2,we=3,Fe=2,H=16,xe=3,se=Z,re=se+H+xe,ne=re+H+xe,We=ne+H+xe,_t="M9.25 17V5.875L7.062 8.062L6 7L10 3L14 7L12.938 8.062L10.75 5.875V17H9.25Z",Nt="M9.25 3V14.125L7.062 11.938L6 13L10 17L14 13L12.938 11.938L10.75 14.125V3H9.25Z",Xt="M13.2708 11.1459L11.9792 9.85419C12.0347 9.32641 11.875 8.87155 11.5 8.4896C11.125 8.10766 10.6736 7.94446 10.1458 8.00002L8.85417 6.70835C9.03472 6.63891 9.22222 6.58683 9.41667 6.5521C9.61111 6.51738 9.80556 6.50002 10 6.50002C10.9722 6.50002 11.7986 6.8403 12.4792 7.52085C13.1597 8.20141 13.5 9.0278 13.5 10C13.5 10.1945 13.4826 10.3889 13.4479 10.5834C13.4132 10.7778 13.3542 10.9653 13.2708 11.1459ZM16.0417 13.9167L14.9583 12.8334C15.4583 12.4445 15.9132 12.0174 16.3229 11.5521C16.7326 11.0868 17.0764 10.5695 17.3542 10C16.6736 8.59724 15.6701 7.49655 14.3438 6.69794C13.0174 5.89933 11.5694 5.50002 10 5.50002C9.63889 5.50002 9.28472 5.52085 8.9375 5.56252C8.59028 5.60419 8.25 5.67363 7.91667 5.77085L6.70833 4.56252C7.23611 4.35419 7.77431 4.20835 8.32292 4.12502C8.87153 4.04169 9.43056 4.00002 10 4.00002C11.9861 4.00002 13.8021 4.53821 15.4479 5.6146C17.0938 6.69099 18.2778 8.1528 19 10C18.6944 10.7917 18.2882 11.5104 17.7813 12.1563C17.2743 12.8021 16.6944 13.3889 16.0417 13.9167ZM16 18.125L13.2917 15.4167C12.7639 15.6111 12.2257 15.757 11.6771 15.8542C11.1285 15.9514 10.5694 16 10 16C8.01389 16 6.19792 15.4618 4.55208 14.3854C2.90625 13.309 1.72222 11.8472 1 10C1.30556 9.20835 1.70833 8.48613 2.20833 7.83335C2.70833 7.18058 3.29167 6.5903 3.95833 6.06252L1.875 3.97919L2.9375 2.91669L17.0625 17.0625L16 18.125ZM5.02083 7.14585C4.53472 7.53474 4.08333 7.96183 3.66667 8.4271C3.25 8.89238 2.90972 9.41669 2.64583 10C3.32639 11.4028 4.32986 12.5035 5.65625 13.3021C6.98264 14.1007 8.43056 14.5 10 14.5C10.3611 14.5 10.7153 14.4757 11.0625 14.4271C11.4097 14.3785 11.7569 14.3125 12.1042 14.2292L11.1667 13.2917C10.9722 13.3611 10.7778 13.4132 10.5833 13.4479C10.3889 13.4827 10.1944 13.5 10 13.5C9.02778 13.5 8.20139 13.1597 7.52083 12.4792C6.84028 11.7986 6.5 10.9722 6.5 10C6.5 9.80558 6.52431 9.61113 6.57292 9.41669C6.62153 9.22224 6.66667 9.0278 6.70833 8.83335L5.02083 7.14585Z",$t="M10 13.5C10.972 13.5 11.7983 13.1597 12.479 12.479C13.1597 11.7983 13.5 10.972 13.5 10C13.5 9.028 13.1597 8.20167 12.479 7.521C11.7983 6.84033 10.972 6.5 10 6.5C9.028 6.5 8.20167 6.84033 7.521 7.521C6.84033 8.20167 6.5 9.028 6.5 10C6.5 10.972 6.84033 11.7983 7.521 12.479C8.20167 13.1597 9.028 13.5 10 13.5ZM10 12C9.44467 12 8.97233 11.8057 8.583 11.417C8.19433 11.0277 8 10.5553 8 10C8 9.44467 8.19433 8.97233 8.583 8.583C8.97233 8.19433 9.44467 8 10 8C10.5553 8 11.0277 8.19433 11.417 8.583C11.8057 8.97233 12 9.44467 12 10C12 10.5553 11.8057 11.0277 11.417 11.417C11.0277 11.8057 10.5553 12 10 12ZM10 16C8.014 16 6.20833 15.455 4.583 14.365C2.95833 13.2743 1.764 11.8193 1 10C1.764 8.18067 2.95833 6.72567 4.583 5.635C6.20833 4.545 8.014 4 10 4C11.986 4 13.7917 4.545 15.417 5.635C17.0417 6.72567 18.236 8.18067 19 10C18.236 11.8193 17.0417 13.2743 15.417 14.365C13.7917 15.455 11.986 16 10 16ZM10 14.5C11.5553 14.5 12.9927 14.0973 14.312 13.292C15.632 12.486 16.646 11.3887 17.354 10C16.646 8.61133 15.632 7.514 14.312 6.708C12.9927 5.90267 11.5553 5.5 10 5.5C8.44467 5.5 7.00733 5.90267 5.688 6.708C4.368 7.514 3.354 8.61133 2.646 10C3.354 11.3887 4.368 12.486 5.688 13.292C7.00733 14.0973 8.44467 14.5 10 14.5Z";class Ut extends Ne(Ue){groupExpansionSetting;groupExpansionState;groupHiddenState;flameChartDelegate;chartViewport;dataProvider;candyStripePattern;contextMenu;viewportElement;canvas;popoverElement;markerHighlighElement;highlightElement;revealDescendantsArrowHighlightElement;selectedElement=null;rulerEnabled;barHeight;hitMarginPx;textBaseline;textPadding;highlightedMarkerIndex;highlightedEntryIndex;selectedEntryIndex;rawTimelineDataLength;markerPositions;customDrawnPositions;lastMouseOffsetX;selectedGroupIndex;keyboardFocusedGroup;offsetWidth;offsetHeight;dragStartX;dragStartY;lastMouseOffsetY;minimumBoundaryInternal;maxDragOffset;timelineLevels;visibleLevelOffsets;visibleLevels;visibleLevelHeights;groupOffsets;rawTimelineData;forceDecorationCache;entryColorsCache;totalTime;lastPopoverState;#t=0;#e;#i;#d;#f=[];#s=!1;#u=!1;#a=null;#w=!0;#b=new Map;constructor(e,t,i={}){super(!0),this.#e=`${Ce} ${Se()}`,this.registerRequiredCSS(Ft),this.contentElement.classList.add("flame-chart-main-pane"),typeof i.selectedElementOutline=="boolean"&&(this.#w=i.selectedElementOutline),this.groupExpansionSetting=i.groupExpansionSetting,this.groupExpansionState=i.groupExpansionSetting?.get()||{},this.groupHiddenState={},this.flameChartDelegate=t;let s=!0;typeof i.useOverlaysForCursorRuler=="boolean"&&(s=!i.useOverlaysForCursorRuler),this.chartViewport=new Je(this,{enableCursorElement:s}),this.chartViewport.show(this.contentElement),this.dataProvider=e,this.viewportElement=this.chartViewport.viewportElement,this.canvas=this.viewportElement.createChild("canvas","fill"),this.candyStripePattern=null,this.canvas.tabIndex=0,ie(this.canvas,I(P.flameChart)),at(this.canvas),this.setDefaultFocusedElement(this.canvas),this.canvas.classList.add("flame-chart-canvas"),this.canvas.addEventListener("mousemove",this.onMouseMove.bind(this),!1),this.canvas.addEventListener("mouseout",this.onMouseOut.bind(this),!1),this.canvas.addEventListener("click",this.onClick.bind(this),!1),this.canvas.addEventListener("dblclick",this.#R.bind(this),!1),this.canvas.addEventListener("keydown",this.onKeyDown.bind(this),!1),this.canvas.addEventListener("contextmenu",this.onContextMenu.bind(this),!1),this.popoverElement=i.tooltipElement||this.viewportElement.createChild("div","flame-chart-entry-info"),this.markerHighlighElement=this.viewportElement.createChild("div","flame-chart-marker-highlight-element"),this.highlightElement=this.viewportElement.createChild("div","flame-chart-highlight-element"),this.revealDescendantsArrowHighlightElement=this.viewportElement.createChild("div","reveal-descendants-arrow-highlight-element"),this.#w&&(this.selectedElement=this.viewportElement.createChild("div","flame-chart-selected-element")),this.canvas.addEventListener("focus",()=>{this.dispatchEventToListeners("CanvasFocused")},!1),V(this.viewportElement,this.startDragging.bind(this),this.dragging.bind(this),this.endDragging.bind(this),null),this.rulerEnabled=!0,this.barHeight=17,this.hitMarginPx=3,this.textBaseline=5,this.textPadding=5,this.chartViewport.setWindowTimes(e.minimumBoundary(),e.minimumBoundary()+e.totalTime()),this.highlightedMarkerIndex=-1,this.highlightedEntryIndex=-1,this.selectedEntryIndex=-1,this.#d=-1,this.rawTimelineDataLength=0,this.markerPositions=new Map,this.customDrawnPositions=new Map,this.lastMouseOffsetX=0,this.selectedGroupIndex=-1,this.lastPopoverState={entryIndex:-1,groupIndex:-1,hiddenEntriesPopover:!1},this.keyboardFocusedGroup=-1,L.instance().addEventListener(lt.eventName,()=>{this.scheduleUpdate()})}willHide(){this.hideHighlight()}canvasBoundingClientRect(){return this.#a&&this.#a.width>0&&this.#a.height>0?this.#a:(this.#a=this.canvas.getBoundingClientRect(),this.#a)}setTooltipYPixelAdjustment(e){e!==this.#t&&(this.#t=e,this.popoverElement.children.length&&this.updatePopoverOffset())}getBarHeight(){return this.barHeight}setBarHeight(e){this.barHeight=e}setTextBaseline(e){this.textBaseline=e}setTextPadding(e){this.textPadding=e}enableRuler(e){this.rulerEnabled=e}alwaysShowVerticalScroll(){this.chartViewport.alwaysShowVerticalScroll()}disableRangeSelection(){this.chartViewport.disableRangeSelection()}highlightEntry(e){this.highlightedEntryIndex!==e&&this.dataProvider.entryColor(e)&&(this.highlightedEntryIndex=e,this.updateElementPosition(this.highlightElement,this.highlightedEntryIndex),this.dispatchEventToListeners("EntryHovered",e))}highlightAllEntries(e){for(const t of e){const i=this.viewportElement.createChild("div","flame-chart-search-element");this.#f.push(i),i.id=t.toString(),this.updateElementPosition(i,t)}}removeSearchResultHighlights(){for(const e of this.#f)e.remove();this.#f=[]}hideHighlight(){this.#d===-1&&(this.popoverElement.removeChildren(),this.lastPopoverState={entryIndex:-1,groupIndex:-1,hiddenEntriesPopover:!1}),this.highlightedEntryIndex!==-1&&(this.highlightedEntryIndex=-1,this.updateElementPosition(this.highlightElement,this.highlightedEntryIndex),this.dispatchEventToListeners("EntryHovered",-1))}createCandyStripePattern(){const t=document.createElement("canvas");t.width=17,t.height=17;const i=t.getContext("2d");i.translate(17*.5,17*.5),i.rotate(Math.PI*.25),i.translate(-17*.5,-17*.5),i.fillStyle="rgba(255, 0, 0, 0.8)";for(let s=-17;s<17*2;s+=3)i.fillRect(s,-17,1,17*3);return i.createPattern(t,"repeat")}resetCanvas(){const e=window.devicePixelRatio,t=Math.round(this.offsetWidth*e),i=Math.round(this.offsetHeight*e);this.canvas.width=t,this.canvas.height=i,this.canvas.style.width=`${t/e}px`,this.canvas.style.height=`${i/e}px`}windowChanged(e,t,i){this.flameChartDelegate.windowChanged(e,t,i)}updateRangeSelection(e,t){this.flameChartDelegate.updateRangeSelection(e,t)}setSize(e,t){this.offsetWidth=e,this.offsetHeight=t}startDragging(e){return this.hideHighlight(),this.maxDragOffset=0,this.dragStartX=e.pageX,this.dragStartY=e.pageY,!0}dragging(e){const t=e.pageX-this.dragStartX,i=e.pageY-this.dragStartY;this.maxDragOffset=Math.max(this.maxDragOffset,Math.sqrt(t*t+i*i))}endDragging(e){this.updateHighlight()}timelineData(e){if(!this.dataProvider)return null;const t=this.dataProvider.timelineData(e);return(t!==this.rawTimelineData||t&&t.entryStartTimes.length!==this.rawTimelineDataLength)&&this.processTimelineData(t),this.rawTimelineData||null}revealEntryVertically(e){const t=this.timelineData();if(!t)return;const i=t.entryLevels[e];this.chartViewport.setScrollOffset(this.levelToOffset(i),this.levelHeight(i),!0)}revealEntry(e){const t=this.timelineData();if(!t)return;const i=this.chartViewport.windowLeftTime(),s=this.chartViewport.windowRightTime(),r=t.entryStartTimes[e];let n=t.entryTotalTimes[e];Number.isNaN(n)&&(n=1);const o=r+n;let h=Math.min(n,s-i);const a=t.entryLevels[e];this.chartViewport.setScrollOffset(this.levelToOffset(a),this.levelHeight(a));const c=30,u=(s-i)/this.offsetWidth;if(h=Math.max(h,u*c),i>o){const l=i-o+h;this.windowChanged(i-l,s-l,!0)}else if(s<r){const l=r-s+h;this.windowChanged(i+l,s+l,!0)}}setWindowTimes(e,t,i){this.chartViewport.setWindowTimes(e,t,i),this.updateHighlight()}onMouseMove(e){if(this.#d=-1,this.lastMouseOffsetX=e.offsetX,this.lastMouseOffsetY=e.offsetY,!this.enabled()||this.chartViewport.isDragging())return;const t=O(this.chartViewport.pixelToTime(e.offsetX));this.dispatchEventToListeners("MouseMove",{mouseEvent:e,timeInMicroSeconds:ht(t)});const{groupIndex:i,hoverType:s}=this.coordinatesToGroupIndexAndHoverType(e.offsetX,e.offsetY);switch(s){case"TRACK_CONFIG_UP_BUTTON":case"TRACK_CONFIG_DOWN_BUTTON":case"TRACK_CONFIG_HIDE_BUTTON":case"TRACK_CONFIG_SHOW_BUTTON":{this.hideHighlight(),this.viewportElement.style.cursor="pointer";const r=this.#D(i,s);r&&(this.popoverElement.appendChild(r),this.updatePopoverOffset());return}case"INSIDE_TRACK_HEADER":this.updateHighlight(),this.viewportElement.style.cursor="pointer";return;case"INSIDE_TRACK":this.updateHighlight();return}}#D(e,t){const i=this.rawTimelineData?.groups[e];if(!i)return null;const r=dt(i.name,20);let n="";switch(t){case"TRACK_CONFIG_UP_BUTTON":n=`Move ${r} track up`;break;case"TRACK_CONFIG_DOWN_BUTTON":n=`Move ${r} track down`;break;case"TRACK_CONFIG_HIDE_BUTTON":this.groupIsLastVisibleTopLevel(i)?n="Can not hide the last top level track":n=`Hide ${r} track`;break;case"TRACK_CONFIG_SHOW_BUTTON":n=`Show ${r} track`;break;default:return null}const o=document.createElement("div");return o.createChild("span","timeline-info-title").textContent=n,o}updateHighlight(){const e=this.coordinatesToEntryIndex(this.lastMouseOffsetX,this.lastMouseOffsetY);if(this.updateHiddenChildrenArrowHighlighPosition(e),e===-1){this.hideHighlight();const{groupIndex:t,hoverType:i}=this.coordinatesToGroupIndexAndHoverType(this.lastMouseOffsetX,this.lastMouseOffsetY);i==="INSIDE_TRACK_HEADER"&&this.#I(t),t>=0&&this.rawTimelineData&&this.rawTimelineData.groups&&this.rawTimelineData.groups[t].selectable?this.viewportElement.style.cursor="pointer":this.viewportElement.style.cursor="default";return}this.chartViewport.isDragging()||(this.#C(e),this.viewportElement.style.cursor=this.dataProvider.canJumpToEntry(e)?"pointer":"default",this.highlightEntry(e))}onMouseOut(){this.lastMouseOffsetX=-1,this.lastMouseOffsetY=-1,this.hideHighlight()}showPopoverForSearchResult(e){this.#d=e,this.#C(e)}#C(e){const t=this.isMouseOverRevealChildrenArrow(this.lastMouseOffsetX,e);if(e===this.lastPopoverState.entryIndex&&t===this.lastPopoverState.hiddenEntriesPopover)return this.updatePopoverOffset();this.popoverElement.removeChildren();const i=this.timelineData();if(!i)return;const s=i.groups.at(this.selectedGroupIndex),r=t&&s?this.dataProvider.prepareHighlightedHiddenEntriesArrowInfo&&this.dataProvider.prepareHighlightedHiddenEntriesArrowInfo(e):this.dataProvider.prepareHighlightedEntryInfo(e);r&&(this.popoverElement.appendChild(r),this.updatePopoverOffset()),this.lastPopoverState={entryIndex:e,groupIndex:-1,hiddenEntriesPopover:t}}#I(e){if(e===this.lastPopoverState.groupIndex)return this.updatePopoverOffset();this.popoverElement.removeChildren();const t=this.timelineData();if(!t)return;const i=t.groups.at(e);i?.description&&(this.popoverElement.innerText=i?.description,this.updatePopoverOffset()),this.lastPopoverState={groupIndex:e,entryIndex:-1,hiddenEntriesPopover:!1}}updatePopoverOffset(){let e=this.lastMouseOffsetX,t=this.lastMouseOffsetY;if(this.#d!==-1){const u=this.entryIndexToCoordinates(this.selectedEntryIndex),{x:l,y:d}=this.canvas.getBoundingClientRect();e=u?.x?u.x-l:e,t=u?.y?u.y-d:t}const i=this.popoverElement.parentElement?this.popoverElement.parentElement.clientWidth:0,s=this.popoverElement.parentElement?this.popoverElement.parentElement.clientHeight:0,r=this.popoverElement.clientWidth,n=this.popoverElement.clientHeight,o=10,h=6+this.#t;let a,c;for(let u=0;u<2;++u)for(let l=0;l<4;++l){const d=l&2?-o-r:o,g=l&1?-h-n:h;if(a=A(e+d,0,i-r),c=A(t+g,0,s-n),u===0?(a>=e||e>=a+r)&&(c>=t||t>=c+n):a>=e||e>=a+r||c>=t||t>=c+n)break}this.popoverElement.style.left=a+"px",this.popoverElement.style.top=c+"px"}#R(e){this.focus();const{groupIndex:t}=this.coordinatesToGroupIndexAndHoverType(e.offsetX,e.offsetY);if(this.highlightedEntryIndex!==-1){this.#m(t),this.dispatchEventToListeners("EntryLabelAnnotationAdded",{entryIndex:this.highlightedEntryIndex,withLinkCreationButton:!0});const i=this.flameChartDelegate.containingElement?.();i&&ct(i,e,{doubleClick:!0})}}onClick(e){if(this.focus(),this.maxDragOffset>5)return;const{groupIndex:i,hoverType:s}=this.coordinatesToGroupIndexAndHoverType(e.offsetX,e.offsetY);if(i>=0)switch(s){case"TRACK_CONFIG_UP_BUTTON":this.moveGroupUp(i);return;case"TRACK_CONFIG_DOWN_BUTTON":this.moveGroupDown(i);return;case"TRACK_CONFIG_HIDE_BUTTON":if(this.groupIsLastVisibleTopLevel(this.rawTimelineData?.groups[i]))return;this.hideGroup(i);return;case"TRACK_CONFIG_SHOW_BUTTON":this.showGroup(i);return;case"INSIDE_TRACK_HEADER":this.#m(i),this.toggleGroupExpand(i);return;case"INSIDE_TRACK":{this.#m(i);const r=this.timelineData();if(e.shiftKey&&this.highlightedEntryIndex!==-1&&r){const n=r.entryStartTimes[this.highlightedEntryIndex],o=n+r.entryTotalTimes[this.highlightedEntryIndex];this.chartViewport.setRangeSelection(n,o)}else this.chartViewport.onClick(e),this.dispatchEventToListeners("EntryInvoked",this.highlightedEntryIndex);return}}}setLinkSelectionAnnotationIsInProgress(e){this.#u=e}#m(e){if(e<0||this.selectedGroupIndex===e||!this.rawTimelineData)return;const t=this.rawTimelineData.groups;if(!t)return;this.keyboardFocusedGroup=e,this.#u||this.scrollGroupIntoView(e);const i=t[e].name;t[e].selectable?(this.selectedGroupIndex=e,this.flameChartDelegate.updateSelectedGroup(this,t[e]),this.draw(),Q(I(P.sSelected,{PH1:i}))):(this.deselectAllGroups(),Q(I(P.sHovered,{PH1:i})))}deselectAllGroups(){this.selectedGroupIndex=-1,this.flameChartDelegate.updateSelectedGroup(this,null),this.draw()}deselectAllEntries(){this.selectedEntryIndex=-1,this.rawTimelineData?.resetFlowData(),this.draw()}isGroupFocused(e){return e===this.selectedGroupIndex||e===this.keyboardFocusedGroup}scrollGroupIntoView(e){if(e<0||!this.rawTimelineData)return;const t=this.rawTimelineData.groups,i=this.groupOffsets;if(!i||!t)return;const s=i[e];let r=i[e+1];e===t.length-1&&(r+=t[e].style.padding);const n=e===0?0:s,o=Math.min(r-n,this.chartViewport.chartHeight());this.chartViewport.setScrollOffset(n,o)}toggleGroupExpand(e){e<0||!this.isGroupCollapsible(e)||!this.rawTimelineData||!this.rawTimelineData.groups||this.expandGroup(e,!this.rawTimelineData.groups[e].expanded)}expandGroup(e,t=!0,i=!1){if(e<0||!this.isGroupCollapsible(e)||!this.rawTimelineData)return;const s=this.rawTimelineData.groups;if(!s)return;const r=s[e];if(r.expanded=t,this.groupExpansionState[r.name]=r.expanded,this.groupExpansionSetting&&this.groupExpansionSetting.set(this.groupExpansionState),this.updateLevelPositions(),this.updateHighlight(),!r.expanded){const n=this.timelineData();if(n){const o=n.entryLevels[this.selectedEntryIndex];this.selectedEntryIndex>=0&&o>=r.startLevel&&(e>=s.length-1||s[e+1].startLevel>o)&&(this.selectedEntryIndex=-1,this.rawTimelineData.resetFlowData())}}if(this.updateHeight(),this.draw(),this.scrollGroupIntoView(e),!i){const n=s[e].name,o=r.expanded?I(P.sExpanded,{PH1:n}):I(P.sCollapsed,{PH1:n});Q(o)}}moveGroupUp(e){if(!(e<0)&&!(!this.rawTimelineData||!this.rawTimelineData.groups)&&this.#i){for(let t=0;t<this.#i.children.length;t++){const i=this.#i.children[t];if(i.index===e&&t>=1){this.#i.children[t]=this.#i.children[t-1],this.#i.children[t-1]=i;break}}this.updateLevelPositions(),this.updateHighlight(),this.updateHeight(),this.draw()}}moveGroupDown(e){if(!(e<0)&&!(!this.rawTimelineData||!this.rawTimelineData.groups)&&this.#i){for(let t=0;t<this.#i.children.length;t++){const i=this.#i.children[t];if(i.index===e&&t<=this.#i.children.length-2){this.#i.children[t]=this.#i.children[t+1],this.#i.children[t+1]=i;break}}this.updateLevelPositions(),this.updateHighlight(),this.updateHeight(),this.draw()}}hideGroup(e){this.#y(e,!0)}showGroup(e){this.#y(e,!1)}#y(e,t){if(e<0||!this.rawTimelineData||!this.rawTimelineData.groups)return;const i=this.rawTimelineData.groups;if(!i)return;const s=i[e];s.hidden=t,this.groupHiddenState[s.name]=s.hidden,this.updateLevelPositions(),this.updateHighlight(),this.updateHeight(),this.draw()}modifyTree(e,t){!this.timelineData()||!this.dataProvider.modifyTree||(this.dataProvider.modifyTree(e,t),this.update())}#M(e){if(this.#s)return;this.contextMenu=new fe(e,{useSoftMenu:!0});const t=I(P.enterTrackConfigurationMode);this.contextMenu.defaultSection().appendItem(t,()=>{this.#n()},{jslogContext:"track-configuration-enter"}),this.contextMenu.show()}#r(e){if(this.#s===!1)return;this.contextMenu=new fe(e,{useSoftMenu:!0});const t=I(P.exitTrackConfigurationMode);this.contextMenu.defaultSection().appendItem(t,()=>{this.#T()},{jslogContext:"track-configuration-exit"}),this.contextMenu.show()}#g(){return!!(this.dataProvider.hasTrackConfigurationMode&&this.dataProvider.hasTrackConfigurationMode())}onContextMenu(e){const{groupIndex:t,hoverType:i}=this.coordinatesToGroupIndexAndHoverType(e.offsetX,e.offsetY);if(this.#s){this.#r(e);return}if(i==="INSIDE_TRACK_HEADER"&&this.#g()&&this.#M(e),this.highlightedEntryIndex!==-1){if(this.dispatchEventToListeners("EntryInvoked",this.highlightedEntryIndex),this.setSelectedEntry(this.highlightedEntryIndex),this.#m(t),this.contextMenu=this.dataProvider.customizedContextMenu?.(e,this.selectedEntryIndex,t)??new fe(e,{useSoftMenu:!0}),Xe.isEnabled("perf-panel-annotations")){const s=this.contextMenu.section("annotations");s.appendItem(I(P.labelEntry),()=>{this.dispatchEventToListeners("EntryLabelAnnotationAdded",{entryIndex:this.selectedEntryIndex,withLinkCreationButton:!1})},{jslogContext:"timeline.annotations.create-entry-label"}).setShortcut("Double Click"),s.appendItem(I(P.linkEntries),()=>{this.dispatchEventToListeners("EntriesLinkAnnotationCreated",{entryFromIndex:this.selectedEntryIndex})},{jslogContext:"timeline.annotations.create-entries-link"}).setShortcut("Double Click"),s.appendItem(I(P.deleteAnnotations),()=>{this.dataProvider.deleteAnnotationsForEntry?.(this.selectedEntryIndex)},{disabled:!this.dataProvider.entryHasAnnotations?.(this.selectedEntryIndex),jslogContext:"timeline.annotations.delete-entry-annotations"})}this.contextMenu.show()}}#l(e){this.selectedEntryIndex!==-1&&this.dataProvider.handleFlameChartTransformKeyboardEvent?.(e,this.selectedEntryIndex,this.selectedGroupIndex)}#h(){const e=this.timelineData()?.entryStartTimes[this.selectedEntryIndex],t=this.timelineData()?.entryLevels[this.selectedEntryIndex];if(!e||!t)return;const i=this.canvasBoundingClientRect();if(!i)return;const s=this.chartViewport.timeToPosition(e)+i.left,r=this.levelToOffset(t)-this.getScrollOffset()+i.top,n=new MouseEvent("contextmenu",{clientX:s,clientY:r});this.canvas.dispatchEvent(n)}onKeyDown(e){if($e.hasAtLeastOneModifier(e)||!this.timelineData())return;e.key===" "&&this.selectedEntryIndex>-1&&this.#h();let t=this.handleSelectionNavigation(e);!t&&this.rawTimelineData&&this.rawTimelineData.groups&&(t=this.handleKeyboardGroupNavigation(e)),t||this.#l(e)}bindCanvasEvent(e,t){this.canvas.addEventListener(e,t)}drawTrackOnCanvas(e,t,i){const s=this.timelineData();if(!s)return null;const r=this.offsetWidth,n=this.offsetHeight;t.save();const o=window.devicePixelRatio;t.scale(o,o),t.fillStyle="rgba(0, 0, 0, 0)",t.fillRect(0,0,r,n),t.font=this.#e;const h=this.rawTimelineData?.groups||[],a=this.groupOffsets;if(!h.length||!a)return null;const c=h.findIndex(T=>T.name.includes(e));if(c<0)return null;this.scrollGroupIntoView(c);const l=h[c].startLevel,d=h[c+1].startLevel,g=a[c],m=a[c+1],{colorBuckets:f,titleIndices:p}=this.getDrawableData(t,s),E=T=>{const w=Math.min(this.#p(s,T),r);return s.entryLevels[T]>=l&&s.entryLevels[T]<d&&w>i};let b=[];for(const[T,{indexes:w}]of f){const S=w.filter(E);b=[...b,...S],this.#P(t,s,T,S)}const y=p.filter(E);return this.drawEventTitles(t,s,y,r),t.restore(),{top:a[c],height:m-g,visibleEntries:new Set(b)}}handleKeyboardGroupNavigation(e){const t=e;let i=!1,s=!1;return t.code==="ArrowUp"?i=this.selectPreviousGroup():t.code==="ArrowDown"?i=this.selectNextGroup():t.code==="ArrowLeft"?this.keyboardFocusedGroup>=0&&(this.expandGroup(this.keyboardFocusedGroup,!1),i=!0):t.code==="ArrowRight"?this.keyboardFocusedGroup>=0&&(this.expandGroup(this.keyboardFocusedGroup,!0),this.selectFirstChild(),i=!0):t.key==="Enter"&&(s=this.selectFirstEntryInCurrentGroup(),i=s),i&&!s&&this.deselectAllEntries(),i&&t.consume(!0),i}selectFirstEntryInCurrentGroup(){if(!this.rawTimelineData)return!1;const e=this.rawTimelineData.groups;if(this.keyboardFocusedGroup<0||!e)return!1;const t=e[this.keyboardFocusedGroup],i=t.startLevel;if(i<0||this.keyboardFocusedGroup<e.length-1&&e[this.keyboardFocusedGroup+1].startLevel===i||!this.timelineLevels)return!1;const s=this.timelineData();if(!s)return!1;const r=O(1);let n=this.timelineLevels[i].find(h=>{const a=s.entryTotalTimes[h];return!Number.isNaN(a)&&a>=r});typeof n>"u"&&(n=this.timelineLevels[i][0]),this.expandGroup(this.keyboardFocusedGroup,!0);const o=this.dataProvider.entryTitle(n);return o&&Q(I(P.eventSelectedFromGroup,{PH1:o,PH2:t.name})),this.setSelectedEntry(n),!0}selectPreviousGroup(){if(this.keyboardFocusedGroup<=0)return!1;const e=this.getGroupIndexToSelect(-1);return this.#m(e),!0}selectNextGroup(){if(!this.rawTimelineData||!this.rawTimelineData.groups||this.keyboardFocusedGroup>=this.rawTimelineData.groups.length-1)return!1;const e=this.getGroupIndexToSelect(1);return this.#m(e),!0}getGroupIndexToSelect(e){if(!this.rawTimelineData||!this.rawTimelineData.groups)throw new Error("No raw timeline data");const t=this.rawTimelineData.groups;let i=this.keyboardFocusedGroup,s,r;do i+=e,s=this.rawTimelineData.groups[i].name,r=this.keyboardFocusedGroup!==-1&&t[i].style.nestingLevel>t[this.keyboardFocusedGroup].style.nestingLevel;while(i>0&&i<t.length-1&&(!s||r));return i}selectFirstChild(){if(!this.rawTimelineData||!this.rawTimelineData.groups)return;const e=this.rawTimelineData.groups;if(this.keyboardFocusedGroup<0||this.keyboardFocusedGroup>=e.length-1)return;const t=this.keyboardFocusedGroup+1;e[t].style.nestingLevel>e[this.keyboardFocusedGroup].style.nestingLevel&&this.#m(t)}handleSelectionNavigation(e){if(this.selectedEntryIndex===-1)return!1;const t=this.timelineData();if(!t)return!1;function i(o,h){if(!t)throw new Error("No timeline data");return o-t.entryStartTimes[h]}function s(o,h){if(!t)throw new Error("No timeline data");const a=t.entryStartTimes[o],c=t.entryStartTimes[h],u=a+t.entryTotalTimes[o],l=c+t.entryTotalTimes[h];return a<l&&c<u}const r=e,n=pt;if(r.keyCode===n.Left.code||r.keyCode===n.Right.code){const o=t.entryLevels[this.selectedEntryIndex],h=this.timelineLevels?this.timelineLevels[o]:[];let a=j(h,this.selectedEntryIndex,(c,u)=>c-u);return a+=r.keyCode===n.Left.code?-1:1,e.consume(!0),a>=0&&a<h.length&&this.dispatchEventToListeners("EntrySelected",h[a]),!0}if(r.keyCode===n.Up.code||r.keyCode===n.Down.code){let o=t.entryLevels[this.selectedEntryIndex];if(o+=r.keyCode===n.Up.code?-1:1,o<0||this.timelineLevels&&o>=this.timelineLevels.length)return this.deselectAllEntries(),r.consume(!0),!0;const h=t.entryStartTimes[this.selectedEntryIndex]+t.entryTotalTimes[this.selectedEntryIndex]/2,a=this.timelineLevels?this.timelineLevels[o]:[];let c=ke(a,h,i)-1;return!s(this.selectedEntryIndex,a[c])&&(++c,c>=a.length||!s(this.selectedEntryIndex,a[c]))?r.code==="ArrowDown"?!1:(this.deselectAllEntries(),r.consume(!0),!0):(r.consume(!0),this.dispatchEventToListeners("EntrySelected",a[c]),!0)}return e.key==="Enter"?(e.consume(!0),this.dispatchEventToListeners("EntryInvoked",this.selectedEntryIndex),!0):!1}coordinatesToEntryIndex(e,t){if(e<0||t<0)return-1;const i=this.timelineData();if(!i)return-1;if(t+=this.chartViewport.scrollOffset(),!this.visibleLevelOffsets||!this.visibleLevelHeights||!this.visibleLevels)throw new Error("No visible level offsets or heights");let s=-1;for(let l=0;l<this.dataProvider.maxStackDepth();l++)if(t>=this.visibleLevelOffsets[l]&&t<this.visibleLevelOffsets[l]+(this.visibleLevels[l]?this.visibleLevelHeights[l]:0)){s=l;break}if(s<0||!this.visibleLevels[s]||t-this.visibleLevelOffsets[s]>this.levelHeight(s))return-1;for(const[l,d]of this.customDrawnPositions)if(i.entryLevels[l]===s&&d.x<=e&&e<d.x+d.width)return l;for(const[l,d]of this.markerPositions)if(i.entryLevels[l]===s&&d.x<=e&&e<d.x+d.width)return l;const n=i.entryStartTimes,o=this.timelineLevels?this.timelineLevels[s]:[];if(!o||!o.length)return-1;const h=this.chartViewport.pixelToTime(e),a=Math.max(ke(o,h,(l,d)=>l-n[d])-1,0);function c(l){if(l===void 0||!i)return!1;const d=n[l],g=i.entryTotalTimes[l],m=this.chartViewport.timeToPosition(d),f=this.chartViewport.timeToPosition(d+g);return m-this.hitMarginPx<e&&e<f+this.hitMarginPx}let u=o[a];return c.call(this,u)||(u=o[a+1],c.call(this,u))?u:-1}isMouseOverRevealChildrenArrow(e,t){if(!this.entryHasDecoration(t,"HIDDEN_DESCENDANTS_ARROW"))return!1;const i=this.timelineData();if(!i)return!1;const s=i.entryStartTimes[t],r=i.entryTotalTimes[t],n=this.chartViewport.timeToPosition(s+r),h=this.#o(i,t);return n-h-this.hitMarginPx<e&&e<n+this.hitMarginPx}entryIndexToCoordinates(e){const t=this.timelineData(),{x:i,y:s}=this.canvas.getBoundingClientRect();if(!t||!this.visibleLevelOffsets)return null;const r=this.chartViewport.timeToPosition(t.entryStartTimes[e])+i,n=this.visibleLevelOffsets[t.entryLevels[e]]-this.chartViewport.scrollOffset()+s;return{x:r,y:n}}entryTitle(e){return this.dataProvider.entryTitle(e)}getCanvasOffset(){return this.canvas.getBoundingClientRect()}getCanvas(){return this.canvas}getScrollOffset(){return this.chartViewport.scrollOffset()}getContextMenu(){return this.contextMenu}coordinatesToGroupIndexAndHoverType(e,t){if(!this.rawTimelineData||!this.rawTimelineData.groups||!this.groupOffsets)return{groupIndex:-1,hoverType:"ERROR"};if(e<0||t<0)return{groupIndex:-1,hoverType:"ERROR"};t+=this.chartViewport.scrollOffset();const i=this.rawTimelineData.groups||[];if(this.#i){let r=function(n){s.push(n.index);for(const o of n.children)r(o)};const s=[];if(r(this.#i),s.shift(),s.length!==i.length)return console.warn("The data from the group tree doesn't match the data from DataProvider."),{groupIndex:-1,hoverType:"ERROR"};s.push(i.length);for(let n=0;n<s.length;n++){const o=s[n],h=s[n+1]??s.length;if(t>=this.groupOffsets[o]&&t<this.groupOffsets[h]){const a=this.canvas.getContext("2d");a.save(),a.font=this.#e;const c=Z+(this.#s?We:0)+this.labelWidthForGroup(a,i[o]);a.restore();const u=t>=this.groupOffsets[o]&&t<this.groupOffsets[o]+i[o].style.height;if(this.#s){if(u){if(se<=e&&e<se+H)return{groupIndex:o,hoverType:"TRACK_CONFIG_UP_BUTTON"};if(re<=e&&e<re+H)return{groupIndex:o,hoverType:"TRACK_CONFIG_DOWN_BUTTON"};if(ne<=e&&e<ne+H)return{groupIndex:o,hoverType:i[o].hidden?"TRACK_CONFIG_SHOW_BUTTON":"TRACK_CONFIG_HIDE_BUTTON"};if(u&&e<=c)return{groupIndex:o,hoverType:"INSIDE_TRACK_HEADER"}}}else return u&&e<=c?{groupIndex:o,hoverType:"INSIDE_TRACK_HEADER"}:{groupIndex:o,hoverType:"INSIDE_TRACK"}}}}return{groupIndex:-1,hoverType:"OUTSIDE_TRACKS"}}#n(){const e=document.createElement("div");e.classList.add("flame-chart-edit-confirm");const t=new ut;t.data={variant:"primary",jslogContext:"track-configuration-exit"},t.innerText=I(P.exitTrackConfigurationMode),e.appendChild(t),t.addEventListener("click",()=>{this.#T()}),this.viewportElement.appendChild(e),this.#s=!0,this.updateLevelPositions(),this.draw()}#E(){const e=this.viewportElement.querySelector(".flame-chart-edit-confirm");e&&this.viewportElement.removeChild(e)}#T(){this.#E(),this.#s=!1,this.updateLevelPositions(),this.draw()}markerIndexBeforeTime(e){const t=this.timelineData();if(!t)throw new Error("No timeline data");if(!t.markers)throw new Error("No timeline markers");return j(t.markers,e,(s,r)=>s-r.startTime())}draw(){const e=this.timelineData();if(!e)return;this.resetCanvas(),this.dispatchEventToListeners("LatestDrawDimensions",{chart:{widthPixels:this.offsetWidth,heightPixels:this.offsetHeight,scrollOffsetPixels:this.chartViewport.scrollOffset(),allGroupsCollapsed:this.rawTimelineData?.groups.every(w=>!w.expanded)??!0},traceWindow:ft(this.minimumBoundary(),this.maximumBoundary())});const t=this.offsetWidth,i=this.offsetHeight,s=this.canvas.getContext("2d");s.save();const r=window.devicePixelRatio,n=this.chartViewport.scrollOffset();s.scale(r,r),s.fillStyle="rgba(0, 0, 0, 0)",s.fillRect(0,0,t,i),s.translate(0,-n),s.font=this.#e;const{markerIndices:o,colorBuckets:h,titleIndices:a}=this.getDrawableData(s,e);s.save(),this.forEachGroupInViewport((w,S,C,D,k)=>{this.isGroupFocused(S)&&(s.fillStyle=L.instance().getComputedValue("--selected-group-background",this.contentElement),s.fillRect(0,w,t,k-C.style.padding))}),s.restore();const c=this.rawTimelineData?.groups||[],u=c.findIndex(w=>w.name.includes("Main")),d=c.at(u)?.startLevel,g=c.at(u+1)?.startLevel,m=w=>{if(u<0||d===void 0||g===void 0)return!1;const S=Math.min(this.#p(e,w),t);return e.entryLevels[w]>=d&&e.entryLevels[w]<g&&S>10};let f=!1;for(const[w,{indexes:S}]of h)f||(f=S.some(m)),this.#P(s,e,w,S);this.dispatchEventToListeners("ChartPlayableStateChange",f),this.#H(s,e),this.drawMarkers(s,e,o),this.drawEventTitles(s,e,a,t);const p=Array.from(h.values()).map(w=>w.indexes).flat();this.#x(s,e,p),s.restore(),this.drawGroupHeaders(t,i),this.drawFlowEvents(s,e),this.drawMarkerLines();const E=_.calculateGridOffsets(this),b=this.dataProvider.mainFrameNavigationStartEvents?.()||[];let y=0;const T=w=>{if(b.length===0)return this.formatValue(w,E.precision);if(b.length>y+1){const D=b[y+1],k=M(D.ts);w>k&&y++}const C=b[y];if(C){const D=M(C.ts);w-=D-this.zeroTime()}return this.formatValue(w,E.precision)};_.drawCanvasGrid(s,E),this.rulerEnabled&&_.drawCanvasHeaders(s,E,T,3,oe),this.updateElementPosition(this.highlightElement,this.highlightedEntryIndex),this.updateElementPosition(this.selectedElement,this.selectedEntryIndex),this.#d!==-1&&this.showPopoverForSearchResult(this.#d);for(const w of this.#f)this.updateElementPosition(w,Number(w.id));this.updateMarkerHighlight()}#P(e,t,i,s){e.save(),e.beginPath();for(let r=0;r<s.length;++r){const n=s[r];this.#b.has(n)||this.#v(e,t,n)}e.fillStyle=i,e.fill(),e.restore()}#x(e,t,i){const{entryTotalTimes:s,entryStartTimes:r,entryLevels:n}=t;e.save();for(let o=0;o<i.length;++o){const h=i[o],a=t.entryDecorations.at(h);if(!a||a.length<1)continue;a.length>1&&qe(a);const c=r[h],u=s[h],l=this.timeToPositionClipped(c),d=n[h],g=this.#o(t,h),m=this.levelToOffset(d);let f=this.#p(t,h);for(const p of a)switch(p.type){case"CANDY":{const E=M(p.startAtTime);if(u<E)continue;this.candyStripePattern||(this.candyStripePattern=this.createCandyStripePattern()),e.save(),e.beginPath();const b=this.timeToPositionClipped(c+E),y=p.endAtTime?M(p.endAtTime):c+u,T=this.timeToPositionClipped(y);this.#v(e,t,h,{startX:b,width:T-b}),e.fillStyle=this.candyStripePattern,e.fill(),e.restore();break}case"WARNING_TRIANGLE":{let E=l+f;if(typeof p.customEndTime<"u"){const T=M(p.customEndTime);E=this.timeToPositionClipped(T),f=E-l}const b=8;let y=8;if(typeof p.customStartTime<"u"){const T=M(p.customStartTime),w=this.timeToPositionClipped(T);y=Math.min(E-w,8)}e.save(),e.beginPath(),e.rect(l,m,f,g),e.clip(),e.beginPath(),e.fillStyle="red",e.moveTo(l+f-y,m),e.lineTo(l+f,m),e.lineTo(l+f,m+b),e.fill(),e.restore();break}case"HIDDEN_DESCENDANTS_ARROW":{if(e.save(),e.beginPath(),e.rect(l,m,f,g),f>g*2){e.clip(),e.beginPath(),e.fillStyle="#474747";const w=l+f-7-5,S=m+6;e.moveTo(w,S);const C=l+f-5,D=m+6;e.lineTo(C,D);const k=l+f-5-7/2,J=m+g-6;e.lineTo(k,J)}else e.clip(),e.beginPath(),e.fillStyle="#474747",e.moveTo(l+f-8,m+g),e.lineTo(l+f,m+g),e.lineTo(l+f,m+8);e.fill(),e.restore();break}}}e.restore()}#v(e,t,i,s){const{entryTotalTimes:r,entryStartTimes:n,entryLevels:o}=t,h=r[i];if(isNaN(h))return;const a=n[i],c=s?.startX??this.timeToPositionClipped(a),u=o[i],l=this.#o(t,i),d=this.levelToOffset(u),g=s?.width??this.#p(t,i);g!==0&&e.rect(c,d,g-.5,l-1)}#o(e,t){const{entryLevels:i}=e,s=i[t];return this.levelHeight(s)}entryWidth(e){const t=this.timelineData();return t?this.#p(t,e):0}#p(e,t){const{entryTotalTimes:i,entryStartTimes:s}=e,r=i[t],n=s[t],o=this.timeToPositionClipped(n),h=this.timeToPositionClipped(n+r);return Math.max(h-o,1)}getDrawableData(e,t){const i=[],s=[],{entryTotalTimes:r,entryStartTimes:n}=t,o=this.chartViewport.scrollOffset(),a=2*this.textPadding+ee(e,"…"),c=this.chartViewport.pixelToTimeOffset(a),u=new Map;for(let l=0;l<this.dataProvider.maxStackDepth();++l){if(this.levelToOffset(l)+this.levelHeight(l)<o||this.levelToOffset(l)>o+this.offsetHeight||!this.visibleLevels||!this.visibleLevels[l])continue;if(!this.timelineLevels)break;const d=this.timelineLevels[l],g=j(d,this.chartViewport.windowRightTime(),(f,p)=>f-n[p])-1;let m=1/0;for(let f=g;f>=0;--f){const p=d[f],E=r[p];if(isNaN(E)){s.push(p);continue}(E>=c||this.forceDecorationCache?.[p])&&i.push(p);const b=n[p],y=b+E,T=!!this.dataProvider.forceDrawableLevel?.(l);if(y<=this.chartViewport.windowLeftTime()&&!T)break;const w=this.timeToPositionClipped(b);if(!(w>=m)&&(m=w,this.entryColorsCache)){const S=this.entryColorsCache[p];let C=u.get(S);C||(C={indexes:[]},u.set(S,C)),C.indexes.push(p)}}}return{colorBuckets:u,titleIndices:i,markerIndices:s}}drawGroupHeaders(e,t){const i=this.canvas.getContext("2d"),s=this.chartViewport.scrollOffset(),r=window.devicePixelRatio;if(!this.rawTimelineData)return;const n=this.rawTimelineData.groups||[];if(!n.length)return;const o=this.groupOffsets;if(o==null)return;const h=o[o.length-1];i.save(),i.scale(r,r),i.translate(0,-s),i.font=this.#e,i.fillStyle=L.instance().getComputedValue("--sys-color-cdt-base-container"),this.forEachGroupInViewport((u,l,d)=>{const g=d.style.padding;g<5||i.fillRect(0,u-g+2,e,g-4)}),n.length&&h<s+t&&i.fillRect(0,h+2,e,s+t-h),i.strokeStyle=L.instance().getComputedValue("--sys-color-neutral-container"),i.beginPath(),this.forEachGroupInViewport((u,l,d,g)=>{g||d.style.padding<4||Ge(i,e,u-2.5)}),Ge(i,e,h+1.5),i.stroke(),this.forEachGroupInViewport((u,l,d)=>{if(d.style.useFirstLineForOverview)return;if(!this.isGroupCollapsible(l)||d.expanded){!d.style.shareHeaderLine&&this.isGroupFocused(l)&&(i.fillStyle=d.style.backgroundColor,i.fillRect(0,u,e,d.style.height));return}let g=l+1;for(;g<n.length&&n[g].style.nestingLevel>d.style.nestingLevel;)g++;const m=g<n.length?n[g].startLevel:this.dataProvider.maxStackDepth();this.drawCollapsedOverviewForGroup(d,u,m)}),i.save();const a=n.length>1,c=this.#s?We:0;this.forEachGroupInViewport((u,l,d)=>{if(i.font=this.#e,this.isGroupCollapsible(l)&&!d.expanded||d.style.shareHeaderLine){const m=this.labelWidthForGroup(i,d);if(this.isGroupFocused(l))i.fillStyle=L.instance().getComputedValue("--selected-group-background",this.contentElement);else{const f=mt(d.style.backgroundColor);f&&(i.fillStyle=f.setAlpha(.8).asString())}i.fillRect(c+Z,u+Fe,m,d.style.height-2*Fe)}i.fillStyle=this.#s&&d.hidden?L.instance().getComputedValue("--sys-color-token-subtle",this.contentElement):d.style.color;const g=c+ve*(d.style.nestingLevel+1)+G/2+we;if(i.fillText(d.name,g,u+d.style.height-this.textBaseline),this.#s&&d.hidden&&i.fillRect(g,u+d.style.height/2,ee(i,d.name),1),a&&this.#s){const m=d.hidden?"--sys-color-token-subtle":"--sys-color-on-surface";d.style.nestingLevel===0&&(pe(i,se,u,H,_t,m),pe(i,re,u,H,Nt,m)),pe(i,ne,u,H,d.hidden?$t:Xt,this.groupIsLastVisibleTopLevel(d)?"--sys-color-state-disabled":m)}}),i.restore(),i.fillStyle=L.instance().getComputedValue("--sys-color-token-subtle"),this.forEachGroupInViewport((u,l,d)=>{this.isGroupCollapsible(l)&&Bt(i,c+ve*(d.style.nestingLevel+1),u+d.style.height-this.textBaseline-G/2,this.#s?!1:!!d.expanded)}),i.strokeStyle=L.instance().getComputedValue("--sys-color-neutral-outline"),i.beginPath(),i.stroke(),this.forEachGroupInViewport((u,l,d,g,m)=>{this.isGroupFocused(l)&&(i.fillStyle=L.instance().getComputedValue("--selected-group-border",this.contentElement),i.fillRect(0,u-2,2,m-d.style.padding+2*2),i.fillRect(0,u-2,10,2),i.fillRect(0,u+m-d.style.padding,10,2))}),i.restore()}drawMarkers(e,t,i){const{entryStartTimes:s,entryLevels:r}=t;this.markerPositions.clear(),e.textBaseline="alphabetic",e.save(),e.beginPath();let n=-1,o=-1/0;for(let h=i.length-1;h>=0;--h){const a=i[h],c=this.entryTitle(a);if(!c)continue;const u=s[a],l=r[a];n!==l&&(o=-1/0);const d=Math.max(this.chartViewport.timeToPosition(u),o),g=this.levelToOffset(l),m=this.levelHeight(l),f=4,p=Math.ceil(ee(e,c))+2*f;o=d+p+1,n=l,this.markerPositions.set(a,{x:d,width:p}),e.fillStyle=this.dataProvider.entryColor(a),e.fillRect(d,g,p,m-1),e.fillStyle="white",e.fillText(c,d+f,g+m-this.textBaseline)}e.strokeStyle="rgba(0, 0, 0, 0.2)",e.stroke(),e.restore()}#H(e,t){const{entryStartTimes:i,entryTotalTimes:s,entryLevels:r}=t;this.customDrawnPositions.clear(),e.save();const n=[];for(const[o,h]of this.#b.entries()){const a=i[o],c=s[o],u=r[o],l=this.chartViewport.timeToPosition(a),d=this.chartViewport.timeToPosition(a+c),g=l,m=this.levelToOffset(u),f=this.levelHeight(u),p=d-l,E=h(e,g,m,p,f,b=>this.chartViewport.timeToPosition(b));n.push({entryIndex:o,pos:E})}n.sort((o,h)=>(h.pos.z??0)-(o.pos.z??0));for(const{entryIndex:o,pos:h}of n)this.customDrawnPositions.set(o,h);e.restore()}drawEventTitles(e,t,i,s){const r=this.chartViewport.timeToPixel(),n=this.textPadding;e.save(),e.beginPath();const{entryStartTimes:o,entryLevels:h}=t;for(let a=0;a<i.length;++a){const c=i[a],u=o[c],l=this.timeToPositionClipped(u),d=Math.min(this.#p(t,c),s),g=h[c],m=this.levelToOffset(g);let f=this.dataProvider.entryTitle(c);const p=this.#o(t,c);if(f&&f.length){e.font=this.#e;const y=this.entryHasDecoration(c,"HIDDEN_DESCENDANTS_ARROW")&&d>p*2?d-n-this.barHeight:d-2*n;f=gt(e,f,y)}const E=this.chartViewport.timeToPosition(u);this.dataProvider.decorateEntry(c,e,f,l,m,d,p,E,r)||!f||!f.length||(e.fillStyle=this.dataProvider.textColor(c),e.fillText(f,l+n,m+p-this.textBaseline))}e.restore()}forEachGroup(e){if(!this.rawTimelineData)return;const t=this.rawTimelineData.groups||[];if(!t.length)return;const i=this.groupOffsets;if(!i)return;const s=[{nestingLevel:-1,visible:!0}];for(let r=0;r<t.length;++r){let d=function(f){l.push(f.index);for(const p of f.children)d(p)};const n=i[r],o=t[r];let h=!0,a=s[s.length-1];for(;a&&a.nestingLevel>=o.style.nestingLevel;)s.pop(),h=!1,a=s[s.length-1];a=s[s.length-1];const c=a?a.visible:!1,u=!o.hidden&&c&&(!this.isGroupCollapsible(r)||o.expanded);if(s.push({nestingLevel:o.style.nestingLevel,visible:!!u}),!this.#i)return;const l=[];if(d(this.#i),l.shift(),l.length!==t.length){console.warn("The data from the group tree doesn't match the data from DataProvider.");return}l.push(t.length);const g=l.indexOf(r),m=i[l[g+1]];!this.#s&&(!c||o.hidden)||e(n,r,o,h,m-n)}}forEachGroupInViewport(e){const t=this.chartViewport.scrollOffset();this.forEachGroup((i,s,r,n,o)=>{i-r.style.padding>t+this.offsetHeight||i+o<t||e(i,s,r,n,o)})}labelWidthForGroup(e,t){return ve*(t.style.nestingLevel+1)+G/2+we+ee(e,t.name)+we-Z}drawCollapsedOverviewForGroup(e,t,i){const s=new Mt(g),r=this.chartViewport.windowLeftTime(),n=this.chartViewport.windowRightTime(),o=this.canvas.getContext("2d"),h=e.style.height;if(!this.rawTimelineData)return;const a=this.rawTimelineData.entryStartTimes,c=this.rawTimelineData.entryTotalTimes,u=this.chartViewport.timeToPixel();for(let m=e.startLevel;m<i;++m){const f=this.timelineLevels?this.timelineLevels[m]:[],p=j(f,n,(b,y)=>b-a[y])-1;let E=1/0;for(let b=p;b>=0;--b){const y=f[b],T=a[y],w=this.timeToPositionClipped(T),S=T+c[y];if(isNaN(S)||w>=E)continue;if(S<=r)break;E=w;const C=this.entryColorsCache?this.entryColorsCache[y]:"",D=this.timeToPositionClipped(S);if(e.style.useDecoratorsForOverview&&this.dataProvider.forceDecoration(y)){const k=this.chartViewport.timeToPosition(T),J=this.#p(this.rawTimelineData,y);o.beginPath(),o.fillStyle=C,o.fillRect(w,t,J,h-1),this.dataProvider.decorateEntry(y,o,"",w,t,J,h,k,u);continue}s.append(new Ye(w,D,C))}}const l=s.segments().slice().sort((m,f)=>m.data.localeCompare(f.data));let d;o.beginPath();for(let m=0;m<l.length;++m){const f=l[m];d!==l[m].data&&(o.fill(),o.beginPath(),d=l[m].data,o.fillStyle=d),o.rect(f.begin,t,f.end-f.begin,h)}o.fill();function g(m,f){return m.data===f.data&&m.end+.4>f.end?m:null}}drawFlowEvents(e,t){const i=this.timelineData();if(!i)return;const{entryTotalTimes:s,entryStartTimes:r,entryLevels:n}=t,o=window.devicePixelRatio,h=this.chartViewport.scrollOffset(),a=6,c=3;e.save(),e.scale(o,o),e.translate(0,-h),e.fillStyle="#7f5050",e.strokeStyle="#7f5050";for(let u=0;u<i.initiatorsData.length;++u){const l=i.initiatorsData[u],d=r[l.initiatorIndex],g=r[l.initiatorIndex]+s[l.initiatorIndex],m=r[l.eventIndex],f=g<m,p=f?g:Math.max(d,this.chartViewport.pixelToTime(5)),E=m;if(E<this.chartViewport.windowLeftTime())continue;let b=this.chartViewport.timeToPosition(p),y=this.chartViewport.timeToPosition(E);if(l.isInitiatorHidden){const{circleEndX:k}=this.drawCircleAroundCollapseArrow(l.initiatorIndex,e,t);k&&(b=k)}if(l.isEntryHidden){const{circleStartX:k}=this.drawCircleAroundCollapseArrow(l.eventIndex,e,t);k&&(y=k)}const T=n[l.initiatorIndex],w=n[l.eventIndex],S=this.levelToOffset(T)+this.levelHeight(T)/2,C=this.levelToOffset(w)+this.levelHeight(w)/2,D=y-b;D>c?(e.lineWidth=.5,e.beginPath(),e.moveTo(y,C),e.lineTo(y-a,C-3),e.lineTo(y-a,C+3),e.fill()):e.lineWidth=.2,f?(e.beginPath(),e.moveTo(b,S),e.lineTo(b+D/2,S),e.lineTo(b+D/2,C),e.lineTo(y,C),e.stroke()):(e.beginPath(),e.moveTo(b,S),e.lineTo(b,C),e.lineTo(y,C),e.stroke())}e.restore()}drawCircleAroundCollapseArrow(e,t,i){const s=i.entryDecorations.at(e);if(!s||!s.find(f=>f.type==="HIDDEN_DESCENDANTS_ARROW"))return{};const{entryStartTimes:r,entryLevels:n}=i,o=this.#p(i,e);if(o<this.barHeight*2)return{};const h=r[e],a=this.timeToPositionClipped(h),c=n[e],u=this.#o(i,e),l=this.levelToOffset(c);t.save(),t.beginPath(),t.rect(a,l,o,u),t.clip(),t.lineWidth=1,t.beginPath(),t.fillStyle="#474747";const d=a+o-this.barHeight/2,g=l+this.barHeight/2,m=6;return t.beginPath(),t.arc(d,g,m,0,2*Math.PI),t.stroke(),t.restore(),{circleStartX:d-m,circleEndX:d+m}}drawMarkerLines(){const e=this.timelineData();if(!e)return;const t=e.markers,i=this.markerIndexBeforeTime(this.minimumBoundary()),s=this.maximumBoundary(),r=this.chartViewport.timeToPixel(),n=this.canvas.getContext("2d");n.save();const o=window.devicePixelRatio;n.scale(o,o),n.translate(0,3);const h=oe-1;for(let a=i;a<t.length;a++){const c=t[a].startTime();if(c>s)break;t[a].draw(n,this.chartViewport.timeToPosition(c),h,r)}n.restore()}updateMarkerHighlight(){const e=this.markerHighlighElement;e.parentElement&&e.remove();const t=this.highlightedMarkerIndex;if(t===-1)return;const i=this.timelineData();if(!i)return;const s=i.markers[t],r=this.timeToPositionClipped(s.startTime());he.install(e,s.title()||"");const n=e.style;n.left=r+"px",n.backgroundColor=s.color(),this.viewportElement.appendChild(e)}processTimelineData(e){if(!e){this.timelineLevels=null,this.visibleLevelOffsets=null,this.visibleLevels=null,this.groupOffsets=null,this.rawTimelineData=null,this.forceDecorationCache=null,this.entryColorsCache=null,this.rawTimelineDataLength=0,this.#i=null,this.selectedGroupIndex=-1,this.keyboardFocusedGroup=-1,this.flameChartDelegate.updateSelectedGroup(this,null);return}this.rawTimelineData=e,this.rawTimelineDataLength=e.entryStartTimes.length,this.forceDecorationCache=new Array(this.rawTimelineDataLength),this.entryColorsCache=new Array(this.rawTimelineDataLength),this.#b.clear();for(let r=0;r<this.rawTimelineDataLength;++r){this.forceDecorationCache[r]=this.dataProvider.forceDecoration(r)??!1,this.entryColorsCache[r]=this.dataProvider.entryColor(r);const n=this.dataProvider.getDrawOverride?.(r);n&&this.#b.set(r,n)}const t=new Uint32Array(this.dataProvider.maxStackDepth()+1);for(let r=0;r<e.entryLevels.length;++r)++t[e.entryLevels[r]];const i=new Array(t.length);for(let r=0;r<i.length;++r)i[r]=new Uint32Array(t[r]),t[r]=0;for(let r=0;r<e.entryLevels.length;++r){const n=e.entryLevels[r];i[n][t[n]++]=r}this.timelineLevels=i;const s=this.rawTimelineData.groups||[];for(let r=0;r<s.length;++r){const n=this.groupExpansionState[s[r].name],o=this.groupHiddenState[s[r].name];n!==void 0&&(s[r].expanded=n),o!==void 0&&(s[r].hidden=o)}this.#i?this.updateGroupTree(s,this.#i):this.#i=this.buildGroupTree(s),this.updateLevelPositions(),this.updateHeight(),this.selectedGroupIndex===-1&&(this.selectedGroupIndex=e.selectedGroup?s.indexOf(e.selectedGroup):-1),this.keyboardFocusedGroup=this.selectedGroupIndex,this.flameChartDelegate.updateSelectedGroup(this,e.selectedGroup)}#A(e,t,i){return{index:t,nestingLevel:e.style.nestingLevel,startLevel:e.startLevel,endLevel:i,children:[]}}buildGroupTree(e){const t={index:-1,nestingLevel:-1,startLevel:0,endLevel:e.length?e[0].startLevel:this.dataProvider.maxStackDepth(),children:[]},i=[t];for(let s=0;s<e.length;s++){const r=e[s],n=r.style.nestingLevel;let o=i[i.length-1];for(;o&&o.nestingLevel>=n;)i.pop(),o=i[i.length-1];const a=e[s+1]?.startLevel??this.dataProvider.maxStackDepth(),c=this.#A(r,s,a);o.children.push(c),i.push(c)}return t}updateGroupTree(e,t){const i=this.dataProvider.maxStackDepth();function s(r){const n=r.index;if(n<0)r.startLevel=0,r.endLevel=e.length?e[0].startLevel:i;else{if(!e[n]){console.warn("The |groups| is changed. Please make sure the flamechart is reset after data change in the data provider");return}r.startLevel=e[n].startLevel;const o=e[n+1];r.endLevel=o?.startLevel??i}for(const o of r.children)s(o)}s(t)}#L(e,t,i){if(!this.visibleLevels||!this.visibleLevelOffsets||!this.visibleLevelHeights||!this.groupOffsets)return t;const s=this.rawTimelineData?.groups;if(!s)return t;if(e.index>=s.length)return console.warn("The data from the group tree is outdated. Please make sure the flamechart is reset after data change in the data provider"),t;e.index>=0&&(this.groupOffsets[e.index]=t,(this.#s&&s[e.index].name||!s[e.index].hidden&&i&&!s[e.index].style.shareHeaderLine)&&(t+=s[e.index].style.height));let r=!1;if(e.index<0)r=!0;else{const o=!(this.isGroupCollapsible(e.index)&&!s[e.index].expanded);r=!s[e.index].hidden&&o}const n=r&&i;for(let o=e.startLevel;o<e.endLevel;o++){if(o>=this.dataProvider.maxStackDepth())return console.warn("The data from the group tree is outdated. Please make sure the flamechart is reset after data change in the data provider"),t;const h=o===e.startLevel;let a;if(e.index<0)a=!0;else{const u=h&&s[e.index].style.useFirstLineForOverview;a=!s[e.index].hidden&&i&&(n||u)}let c;if(s[e.index]){const u=h&&!s[e.index].style.shareHeaderLine,l=this.isGroupCollapsible(e.index)&&!s[e.index].expanded;u||l?c=s[e.index].style.height:c=s[e.index].style.itemsHeight??this.barHeight}else c=this.barHeight;this.visibleLevels[o]=this.#s?!1:!!a,this.visibleLevelOffsets[o]=t,this.visibleLevelHeights[o]=this.#s?0:c,(e.index<0||!s[e.index].hidden&&(a||i&&s[e.index].style.shareHeaderLine&&h))&&(t+=this.visibleLevelHeights[o])}if(e.children.length===0)return t;for(const o of e.children)(this.#s&&s[o.index].name||n&&!s[o.index]?.hidden&&o!==e.children[0])&&(t+=s[o.index].style.padding??0),t=this.#L(o,t,n);return t}updateLevelPositions(){if(!this.#i){console.warn("Please make sure the new timeline data is processed before update the level positions.");return}const e=this.dataProvider.maxStackDepth(),t=this.rawTimelineData?.groups||[];this.visibleLevelOffsets=new Uint32Array(e+1),this.visibleLevelHeights=new Uint32Array(e),this.visibleLevels=new Array(e),this.groupOffsets=new Uint32Array(t.length+1);let i=this.rulerEnabled?oe+2:2;i=this.#L(this.#i,i,!0),this.groupOffsets[t.length]=i,this.visibleLevelOffsets[e]=i}isGroupCollapsible(e){if(!this.rawTimelineData||e<0)return;const t=this.rawTimelineData.groups||[],i=t[e].style;if(!i.shareHeaderLine||!i.collapsible)return!!i.collapsible;const s=e+1>=t.length;return!s&&t[e+1].style.nestingLevel>i.nestingLevel||(s?this.dataProvider.maxStackDepth():t[e+1].startLevel)!==t[e].startLevel+1?!0:i.height!==i.itemsHeight}groupIsLastVisibleTopLevel(e){return e?this.#i?.children.filter(i=>!this.rawTimelineData?.groups[i.index].hidden).length===1&&e.style.nestingLevel===0&&!e.hidden:!0}setSelectedEntry(e){this.isMouseOverRevealChildrenArrow(this.lastMouseOffsetX,e)&&this.modifyTree("RESET_CHILDREN",e),this.selectedEntryIndex!==e&&(e!==-1&&this.chartViewport.hideRangeSelection(),this.selectedEntryIndex=e,this.revealEntry(e),this.updateElementPosition(this.selectedElement,this.selectedEntryIndex),this.update())}entryHasDecoration(e,t){const i=this.timelineData();if(!i)return!1;const s=i.entryDecorations.at(e);return s&&s.length>=1?s.some(r=>r.type===t):!1}getCustomDrawnPositionForEntryIndex(e){const t=this.customDrawnPositions.get(e);return t||(this.markerPositions.get(e)??null)}updateElementPosition(e,t,i){if(!e)return;const s=2;if(e.classList.add("hidden"),t===-1)return;const r=this.timelineData();if(!r)return;const n=r.entryStartTimes[t],o=r.entryTotalTimes[t];let h=0,a=0,c=!0;const u=this.customDrawnPositions.get(t);if(u)h=u.x,a=u.width;else if(Number.isNaN(o)){const p=this.markerPositions.get(t);p?(h=p.x,a=p.width):c=!1}else h=this.chartViewport.timeToPosition(n),a=o*this.chartViewport.timeToPixel();if(h+a<=0||h>=this.offsetWidth)return;const l=h+a/2;a=Math.max(a,s),h=l-a/2;const d=r.entryLevels[t],g=this.levelToOffset(d)-this.chartViewport.scrollOffset(),m=this.levelHeight(d),f=e.style;i?(f.top=g+"px",f.width=m+"px",f.height=m+"px",f.left=h+a-m+"px"):(f.top=g+"px",f.width=a+"px",f.height=m-1+"px",f.left=h+"px"),e.classList.toggle("hidden",!c),this.viewportElement.appendChild(e)}updateHiddenChildrenArrowHighlighPosition(e){this.revealDescendantsArrowHighlightElement.classList.add("hidden"),!(e===-1||!this.isMouseOverRevealChildrenArrow(this.lastMouseOffsetX,e))&&this.updateElementPosition(this.revealDescendantsArrowHighlightElement,e,!0)}timeToPositionClipped(e){return A(this.chartViewport.timeToPosition(e),0,this.offsetWidth)}groupIndexToOffsetForTest(e){if(!this.groupOffsets)throw new Error("No visible group offsets");return this.groupOffsets[e]}setEditModeForTest(e){this.#s=e}levelIsVisible(e){if(!this.visibleLevels)throw new Error("No level visiblibities");return this.visibleLevels[e]}levelToOffset(e){if(!this.visibleLevelOffsets)throw new Error("No visible level offsets");return this.visibleLevelOffsets[e]}levelHeight(e){if(!this.visibleLevelHeights)throw new Error("No visible level heights");return this.visibleLevelHeights[e]}updateBoundaries(){this.totalTime=this.dataProvider.totalTime(),this.minimumBoundaryInternal=this.dataProvider.minimumBoundary(),this.chartViewport.setBoundaries(this.minimumBoundaryInternal,this.totalTime)}updateHeight(){const e=this.levelToOffset(this.dataProvider.maxStackDepth())+2;this.chartViewport.setContentHeight(e)}onResize(){this.#a=null,this.scheduleUpdate()}update(){this.timelineData()&&(this.updateHeight(),this.updateBoundaries(),this.draw(),this.chartViewport.isDragging()||this.updateHighlight())}reset(){this.#s&&(this.#E(),this.#s=!1),this.chartViewport.reset(),this.rawTimelineData=null,this.rawTimelineDataLength=0,this.#i=null,this.highlightedMarkerIndex=-1,this.highlightedEntryIndex=-1,this.selectedEntryIndex=-1,this.selectedGroupIndex=-1}scheduleUpdate(){this.chartViewport.scheduleUpdate()}enabled(){return this.rawTimelineDataLength!==0}computePosition(e){return this.chartViewport.timeToPosition(e)}formatValue(e,t){return this.dataProvider.formatValue(e-this.zeroTime(),t)}maximumBoundary(){return O(this.chartViewport.windowRightTime())}minimumBoundary(){return O(this.chartViewport.windowLeftTime())}zeroTime(){return O(this.dataProvider.minimumBoundary())}boundarySpan(){return O(this.maximumBoundary()-this.minimumBoundary())}}const oe=15,Ze=.5,Ve={CANDY:1,WARNING_TRIANGLE:2,HIDDEN_DESCENDANTS_ARROW:3};function qe(v){v.sort((e,t)=>Ve[e.type]-Ve[t.type])}class de{entryLevels;entryTotalTimes;entryStartTimes;entryDecorations;groups;markers;initiatorsData;selectedGroup;constructor(e,t,i,s,r=[],n=[]){this.entryLevels=e,this.entryTotalTimes=t,this.entryStartTimes=i,this.entryDecorations=r,this.groups=s||[],this.markers=[],this.initiatorsData=n||[],this.selectedGroup=null}static create(e){return new de(e.entryLevels,e.entryTotalTimes,e.entryStartTimes,e.groups,e.entryDecorations||[],e.initiatorsData||[])}static createEmpty(){return new de([],[],[],[])}resetFlowData(){this.initiatorsData=[]}}const ci=Object.freeze(Object.defineProperty({__proto__:null,ARROW_SIDE:G,EDIT_ICON_WIDTH:H,FlameChart:Ut,FlameChartTimelineData:de,MinimalTimeWindowMs:Ze,RulerHeight:oe,sortDecorationsForRenderingOrder:qe},Symbol.toStringTag,{value:"Module"})),Kt=vt.instance();class Je extends Ue{delegate;viewportElement;alwaysShowVerticalScrollInternal;rangeSelectionEnabled;vScrollElement;vScrollContent;selectionOverlay;selectedTimeSpanLabel;cursorElement;isDraggingInternal;totalHeight;offsetHeight;scrollTop;rangeSelectionStart;rangeSelectionEnd;dragStartPointX;dragStartPointY;dragStartScrollTop;visibleLeftTime;visibleRightTime;offsetWidth;targetLeftTime;targetRightTime;selectionOffsetShiftX;selectionStartX;lastMouseOffsetX;minimumBoundary;totalTime;isUpdateScheduled;cancelWindowTimesAnimation;#t;#e=Xe.isEnabled("perf-panel-annotations");constructor(e,t){super(),this.#t=t,this.registerRequiredCSS(Gt),this.delegate=e,this.viewportElement=this.contentElement.createChild("div","fill"),this.viewportElement.addEventListener("mousemove",this.updateCursorPosition.bind(this),!1),this.viewportElement.addEventListener("mouseout",this.onMouseOut.bind(this),!1),this.viewportElement.addEventListener("wheel",this.onMouseWheel.bind(this),!1),this.viewportElement.addEventListener("keydown",this.onChartKeyDown.bind(this),!1),this.viewportElement.addEventListener("keyup",this.onChartKeyUp.bind(this),!1),V(this.viewportElement,this.startDragging.bind(this),this.dragging.bind(this),this.endDragging.bind(this),"-webkit-grabbing",null),V(this.viewportElement,this.startRangeSelection.bind(this),this.rangeSelectionDragging.bind(this),this.endRangeSelection.bind(this),"text",null),this.alwaysShowVerticalScrollInternal=!1,this.rangeSelectionEnabled=!0,this.vScrollElement=this.contentElement.createChild("div","chart-viewport-v-scroll"),this.vScrollContent=this.vScrollElement.createChild("div"),this.vScrollElement.addEventListener("scroll",this.onScroll.bind(this),!1),this.selectionOverlay=this.contentElement.createChild("div","chart-viewport-selection-overlay hidden"),this.selectedTimeSpanLabel=this.selectionOverlay.createChild("div","time-span"),this.cursorElement=this.contentElement.createChild("div","chart-cursor-element hidden"),this.#e&&this.cursorElement.classList.add("using-new-overlays"),this.reset(),this.rangeSelectionStart=null,this.rangeSelectionEnd=null}alwaysShowVerticalScroll(){this.alwaysShowVerticalScrollInternal=!0,this.vScrollElement.classList.add("always-show-scrollbar")}disableRangeSelection(){this.rangeSelectionEnabled=!1,this.rangeSelectionStart=null,this.rangeSelectionEnd=null,this.updateRangeSelectionOverlay()}isDragging(){return this.isDraggingInternal}elementsToRestoreScrollPositionsFor(){return[this.vScrollElement]}updateScrollBar(){const e=this.alwaysShowVerticalScrollInternal||this.totalHeight>this.offsetHeight;this.vScrollElement.classList.contains("hidden")===e&&(this.vScrollElement.classList.toggle("hidden",!e),this.updateContentElementSize())}onResize(){this.updateScrollBar(),this.updateContentElementSize(),this.scheduleUpdate()}reset(){this.vScrollElement.scrollTop=0,this.scrollTop=0,this.rangeSelectionStart=null,this.rangeSelectionEnd=null,this.isDraggingInternal=!1,this.dragStartPointX=0,this.dragStartPointY=0,this.dragStartScrollTop=0,this.visibleLeftTime=0,this.visibleRightTime=0,this.offsetWidth=0,this.offsetHeight=0,this.totalHeight=0,this.targetLeftTime=0,this.targetRightTime=0,this.isUpdateScheduled=!1,this.updateContentElementSize()}updateContentElementSize(){let e=this.vScrollElement.offsetLeft;e||(e=this.contentElement.offsetWidth),this.offsetWidth=e,this.offsetHeight=this.contentElement.offsetHeight,this.delegate.setSize(this.offsetWidth,this.offsetHeight)}setContentHeight(e){this.totalHeight=e,this.vScrollContent.style.height=e+"px",this.updateScrollBar(),this.updateContentElementSize(),!(this.scrollTop+this.offsetHeight<=e)&&(this.scrollTop=Math.max(0,e-this.offsetHeight),this.vScrollElement.scrollTop=this.scrollTop)}setScrollOffset(e,t,i){if(t=t||0,i){const s=Math.floor(this.offsetHeight/2);this.vScrollElement.scrollTop>e&&(this.vScrollElement.scrollTop=e-(t+s))}else this.vScrollElement.scrollTop>e&&(this.vScrollElement.scrollTop=e);this.vScrollElement.scrollTop<e-this.offsetHeight+t&&(this.vScrollElement.scrollTop=e-this.offsetHeight+t)}scrollOffset(){return this.vScrollElement.scrollTop}chartHeight(){return this.offsetHeight}setBoundaries(e,t){this.minimumBoundary=e,this.totalTime=t}onMouseWheel(e){const t=e,i=t.shiftKey!==(wt.instance().moduleSetting("flamechart-mouse-wheel-action").get()==="zoom"),s=!i&&(t.deltaY||Math.abs(t.deltaX)===53),r=i&&Math.abs(t.deltaX)>Math.abs(t.deltaY);s?this.vScrollElement.scrollTop+=(t.deltaY||t.deltaX)/53*this.offsetHeight/8:r?this.handlePanGesture(t.deltaX,!0):this.handleZoomGesture(Math.pow(1.2,(t.deltaY||t.deltaX)*.018867924528301886)-1),e.consume(!0)}startDragging(e){return e.shiftKey?!1:(this.isDraggingInternal=!0,this.dragStartPointX=e.pageX,this.dragStartPointY=e.pageY,this.dragStartScrollTop=this.vScrollElement.scrollTop,this.viewportElement.style.cursor="",!0)}dragging(e){const t=this.dragStartPointX-e.pageX;this.dragStartPointX=e.pageX,this.handlePanGesture(t);const i=this.dragStartPointY-e.pageY;this.vScrollElement.scrollTop=this.dragStartScrollTop+i}endDragging(){this.isDraggingInternal=!1}startRangeSelection(e){if(!e.shiftKey||!this.rangeSelectionEnabled)return!1;if(this.isDraggingInternal=!0,this.selectionOffsetShiftX=e.offsetX-e.pageX,this.selectionStartX=e.offsetX,!this.#e){const t=this.selectionOverlay.style;t.left=this.selectionStartX+"px",t.width="1px",this.selectedTimeSpanLabel.textContent="",this.selectionOverlay.classList.remove("hidden")}return!0}endRangeSelection(){this.isDraggingInternal=!1,this.selectionStartX=null}hideRangeSelection(){this.selectionOverlay.classList.add("hidden"),this.rangeSelectionStart=null,this.rangeSelectionEnd=null}setRangeSelection(e,t){this.rangeSelectionEnabled&&(this.rangeSelectionStart=Math.min(e,t),this.rangeSelectionEnd=Math.max(e,t),this.updateRangeSelectionOverlay(),this.delegate.updateRangeSelection(this.rangeSelectionStart,this.rangeSelectionEnd))}onClick(e){const t=e,i=this.pixelToTime(t.offsetX);this.rangeSelectionStart!==null&&this.rangeSelectionEnd!==null&&i>=this.rangeSelectionStart&&i<=this.rangeSelectionEnd||this.hideRangeSelection()}rangeSelectionDragging(e){const t=A(e.pageX+this.selectionOffsetShiftX,0,this.offsetWidth),i=this.pixelToTime(this.selectionStartX||0),s=this.pixelToTime(t);this.setRangeSelection(i,s)}updateRangeSelectionOverlay(){if(this.#e)return;const e=this.rangeSelectionStart||0,t=this.rangeSelectionEnd||0,i=100,s=A(this.timeToPosition(e),-i,this.offsetWidth+i),r=A(this.timeToPosition(t),-i,this.offsetWidth+i),n=this.selectionOverlay.style;n.left=s+"px",n.width=r-s+"px";const o=t-e;this.selectedTimeSpanLabel.textContent=bt(o,2)}onScroll(){this.scrollTop=this.vScrollElement.scrollTop,this.scheduleUpdate()}onMouseOut(){this.lastMouseOffsetX=-1,this.showCursor(!1)}updateCursorPosition(e){const t=e;this.lastMouseOffsetX=t.offsetX;const i=this.#t.enableCursorElement&&t.shiftKey&&!t.metaKey;this.showCursor(i),i&&(this.cursorElement.style.left=t.offsetX+"px")}pixelToTime(e){return this.pixelToTimeOffset(e)+this.visibleLeftTime}pixelToTimeOffset(e){return e*(this.visibleRightTime-this.visibleLeftTime)/this.offsetWidth}timeToPosition(e){return Math.floor((e-this.visibleLeftTime)/(this.visibleRightTime-this.visibleLeftTime)*this.offsetWidth)}timeToPixel(){return this.offsetWidth/(this.visibleRightTime-this.visibleLeftTime)}showCursor(e){this.cursorElement.classList.toggle("hidden",!e||this.isDraggingInternal)}onChartKeyDown(e){const t=e;this.showCursor(t.shiftKey),this.handleZoomPanKeys(e)}onChartKeyUp(e){const t=e;this.showCursor(t.shiftKey)}handleZoomPanKeys(e){const t=e;if($e.hasAtLeastOneModifier(e)&&!t.shiftKey)return;const i=t.shiftKey?.8:.3,s=t.shiftKey?320:160;switch(t.code){case"KeyA":this.handlePanGesture(-s,!0);break;case"KeyD":this.handlePanGesture(s,!0);break;case"KeyW":this.handleZoomGesture(-i);break;case"KeyS":this.handleZoomGesture(i);break;default:return}e.consume(!0)}handleZoomGesture(e){const t={left:this.targetLeftTime,right:this.targetRightTime},i=this.pixelToTime(this.lastMouseOffsetX||0);t.left+=(t.left-i)*e,t.right+=(t.right-i)*e,this.requestWindowTimes(t,!0)}handlePanGesture(e,t){const i={left:this.targetLeftTime,right:this.targetRightTime},s=A(this.pixelToTimeOffset(e),this.minimumBoundary-i.left,this.totalTime+this.minimumBoundary-i.right);i.left+=s,i.right+=s,this.requestWindowTimes(i,!!t)}requestWindowTimes(e,t){const i=this.minimumBoundary+this.totalTime;e.left<this.minimumBoundary?(e.right=Math.min(e.right+this.minimumBoundary-e.left,i),e.left=this.minimumBoundary):e.right>i&&(e.left=Math.max(e.left-e.right+i,this.minimumBoundary),e.right=i),!(e.right-e.left<Ze)&&this.delegate.windowChanged(e.left,e.right,t)}scheduleUpdate(){this.cancelWindowTimesAnimation||this.isUpdateScheduled||(this.isUpdateScheduled=!0,Kt.write(()=>{this.isUpdateScheduled=!1,this.update()}))}update(){this.updateRangeSelectionOverlay(),this.delegate.update()}setWindowTimes(e,t,i){if(e===this.targetLeftTime&&t===this.targetRightTime)return;if(!i||this.visibleLeftTime===0||this.visibleRightTime===1/0||e===0&&t===1/0||e===1/0&&t===1/0){this.targetLeftTime=e,this.targetRightTime=t,this.visibleLeftTime=e,this.visibleRightTime=t,this.scheduleUpdate();return}this.cancelWindowTimesAnimation&&(this.cancelWindowTimesAnimation(),this.visibleLeftTime=this.targetLeftTime,this.visibleRightTime=this.targetRightTime),this.targetLeftTime=e,this.targetRightTime=t,this.cancelWindowTimesAnimation=yt(this.element.window(),s.bind(this),[{from:this.visibleLeftTime,to:e},{from:this.visibleRightTime,to:t}],100,()=>{this.cancelWindowTimesAnimation=null});function s(r,n){this.visibleLeftTime=r,this.visibleRightTime=n,this.update()}}windowLeftTime(){return this.visibleLeftTime}windowRightTime(){return this.visibleRightTime}}const ui=Object.freeze(Object.defineProperty({__proto__:null,ChartViewport:Je},Symbol.toStringTag,{value:"Module"})),Yt={cssContent:`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.film-strip-view {
  overflow-x: auto;
  overflow-y: hidden;
  align-content: flex-start;
  min-height: 81px;
}

.film-strip-view .frame .time {
  font-size: 10px;
  margin-top: 2px;
}

.film-strip-view .label {
  margin: auto;
  font-size: 18px;
  color: var(--sys-color-token-subtle);
}

.film-strip-view .frame {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  flex: none;
  cursor: pointer;
}

.film-strip-view .frame .thumbnail {
  min-width: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  pointer-events: none;
  margin: 4px 0 2px;
  border: 2px solid transparent;
}

.film-strip-view .frame:hover .thumbnail,
.film-strip-view .frame:focus .thumbnail {
  border-color: var(--sys-color-primary);
}

.film-strip-view .frame .thumbnail img {
  height: auto;
  width: auto;
  max-width: 80px;
  max-height: 50px;
  pointer-events: none;
  box-shadow: 0 0 3px var(--box-shadow-outline-color);
  flex: 0 0 auto;
}

.film-strip-view .frame:hover .thumbnail img,
.film-strip-view .frame:focus .thumbnail img {
  box-shadow: none;
}

/*# sourceURL=filmStripView.css */
`},X={doubleclickToZoomImageClickTo:"Doubleclick to zoom image. Click to view preceding requests.",screenshotForSSelectToView:"Screenshot for {PH1} - select to view preceding requests.",screenshot:"Screenshot",previousFrame:"Previous frame",nextFrame:"Next frame"},jt=$("ui/legacy/components/perf_ui/FilmStripView.ts",X),q=U.bind(void 0,jt);class ce extends Ne(xt){statusLabel;zeroTime=O(0);#t=null;constructor(){super(!0),this.registerRequiredCSS(Yt),this.contentElement.classList.add("film-strip-view"),this.statusLabel=this.contentElement.createChild("div","label"),this.reset()}static setImageData(e,t){t&&(e.src=t)}setModel(e){if(this.#t=e,this.zeroTime=M(e.zeroTime),!this.#t.frames.length){this.reset();return}this.update()}createFrameElement(e){const t=M(e.screenshotEvent.ts),i=Ke(t-this.zeroTime),s=document.createElement("button");s.classList.add("frame"),he.install(s,q(X.doubleclickToZoomImageClickTo)),s.createChild("div","time").textContent=i,s.tabIndex=0,s.setAttribute("jslog",`${Et("film-strip").track({click:!0,dblclick:!0})}`),s.setAttribute("aria-label",q(X.screenshotForSSelectToView,{PH1:i})),Tt(s);const r=s.createChild("div","thumbnail").createChild("img");return r.alt=q(X.screenshot),s.addEventListener("mousedown",this.onMouseEvent.bind(this,"FrameSelected",t),!1),s.addEventListener("mouseenter",this.onMouseEvent.bind(this,"FrameEnter",t),!1),s.addEventListener("mouseout",this.onMouseEvent.bind(this,"FrameExit",t),!1),s.addEventListener("dblclick",this.onDoubleClick.bind(this,e),!1),s.addEventListener("focusin",this.onMouseEvent.bind(this,"FrameEnter",t),!1),s.addEventListener("focusout",this.onMouseEvent.bind(this,"FrameExit",t),!1),ce.setImageData(r,e.screenshotEvent.args.dataUri),s}update(){const e=this.#t?.frames;if(!e||e.length<1)return;const t=e.map(i=>this.createFrameElement(i));this.contentElement.removeChildren();for(const i of t)this.contentElement.appendChild(i)}onMouseEvent(e,t){this.dispatchEventToListeners(e,t)}onDoubleClick(e){this.#t&&ue.fromFilmStrip(this.#t,e.index)}reset(){this.zeroTime=O(0),this.contentElement.removeChildren(),this.contentElement.appendChild(this.statusLabel)}setStatusText(e){this.statusLabel.textContent=e}}class ue{fragment;widget;index;dialog=null;#t;static fromFilmStrip(e,t){const i={source:"Trace",frames:e.frames,index:t,zeroTime:M(e.zeroTime)};return new ue(i)}constructor(e){this.#t=e,this.index=e.index;const t=Pe("◀",this.onPrevFrame.bind(this));he.install(t,q(X.previousFrame));const i=Pe("▶",this.onNextFrame.bind(this));he.install(i,q(X.nextFrame)),this.fragment=St.build`
      <x-widget flex=none margin=12px>
        <x-hbox overflow=auto border='1px solid #ddd'>
          <img $='image' data-film-strip-dialog-img style="max-height: 80vh; max-width: 80vw;"></img>
        </x-hbox>
        <x-hbox x-center justify-content=center margin-top=10px>
          ${t}
          <x-hbox $='time' margin=8px></x-hbox>
          ${i}
        </x-hbox>
      </x-widget>
    `,this.widget=this.fragment.element(),this.widget.tabIndex=0,this.widget.addEventListener("keydown",this.keyDown.bind(this),!1),this.dialog=null,this.render()}hide(){this.dialog&&this.dialog.hide()}#e(){return this.#t.frames.length}#i(){return this.#t.zeroTime}resize(){this.dialog||(this.dialog=new Ct,this.dialog.contentElement.appendChild(this.widget),this.dialog.setDefaultFocusedElement(this.widget),this.dialog.show()),this.dialog.setSizeBehavior("MeasureContent")}keyDown(e){const t=e;switch(t.key){case"ArrowLeft":De()&&t.metaKey?this.onFirstFrame():this.onPrevFrame();break;case"ArrowRight":De()&&t.metaKey?this.onLastFrame():this.onNextFrame();break;case"Home":this.onFirstFrame();break;case"End":this.onLastFrame();break}}onPrevFrame(){this.index>0&&--this.index,this.render()}onNextFrame(){this.index<this.#e()-1&&++this.index,this.render()}onFirstFrame(){this.index=0,this.render()}onLastFrame(){this.index=this.#e()-1,this.render()}render(){const e=this.#t.frames[this.index],t=M(e.screenshotEvent.ts);this.fragment.$("time").textContent=Ke(t-this.#i());const i=this.fragment.$("image");i.setAttribute("data-frame-index",this.index.toString()),ce.setImageData(i,e.screenshotEvent.args.dataUri),this.resize()}}const fi=Object.freeze(Object.defineProperty({__proto__:null,Dialog:ue,FilmStripView:ce},Symbol.toStringTag,{value:"Module"})),N={lowest:"Lowest",low:"Low",medium:"Medium",high:"High",highest:"Highest"},Zt=$("ui/legacy/components/perf_ui/NetworkPriorities.ts",N),Y=U.bind(void 0,Zt);function qt(v){return Le().get(v)||""}const be=new Map;function Jt(v){be.size===0&&Le().forEach((t,i)=>be.set(t,i));const e=be.get(v);if(e)return e;throw new Error("Priority not found")}const B=new Map;function Le(){return B.size===0&&(B.set("VeryLow",Y(N.lowest)),B.set("Low",Y(N.low)),B.set("Medium",Y(N.medium)),B.set("High",Y(N.high)),B.set("VeryHigh",Y(N.highest))),B}const F=new Map;function Qt(v){return F.size===0&&(F.set("VeryLow",1),F.set("Low",2),F.set("Medium",3),F.set("High",4),F.set("VeryHigh",5)),F.get(v)||0}const mi=Object.freeze(Object.defineProperty({__proto__:null,networkPriorityWeight:Qt,priorityUILabelMap:Le,uiLabelForNetworkPriority:qt,uiLabelToNetworkPriority:Jt},Symbol.toStringTag,{value:"Module"})),ei={cssContent:`/*
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-grid-window-selector {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: var(--sys-color-state-ripple-primary);
  z-index: 250;
  pointer-events: none;
}

.overview-grid-window-resizer {
  position: absolute;
  top: 0;
  height: 19px;
  width: 10px;
  margin-left: -5px; /* half width (incl the border) */
  background-color: var(--sys-color-tonal-container);
  border: 1px solid var(--sys-color-tonal-outline);
  z-index: 500;
  border-radius: 3px;
}

/* Grip lines within the handle */
.overview-grid-window-resizer::before,
.overview-grid-window-resizer::after {
  content: "";
  width: 1px;
  background: var(--sys-color-primary);
  height: 7px;
  position: absolute;
  left: 2px;
  top: 5px;
  border-radius: 1px;
}

.overview-grid-window-resizer::after {
  left: 5px;
}

.overview-grid-window-resizer:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.overview-grid-cursor-area {
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 0;
  z-index: 500;
  cursor: text;
}

.overview-grid-cursor-position {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--sys-color-primary);
  z-index: 500;
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
}

.window-curtain-left,
.window-curtain-right {
  background-color: var(--sys-color-state-ripple-primary);
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 300;
  pointer-events: none;
  border: 2px none var(--sys-color-tonal-outline);
}

.window-curtain-left {
  left: 0;
  border-right-style: solid;
}

.window-curtain-right {
  right: 0;
  border-left-style: solid;
}

.create-breadcrumb-button-container {
  visibility: hidden;
  opacity: 0%;
  transition: opacity 100ms 250ms;
  display: flex;
  position: absolute;
  top: 15px;
  justify-content: center;
  z-index: 600;
  left: 0;
  right: 0;
}

.is-breadcrumb-button-visible {
  visibility: visible;
  opacity: 100%;
}

.create-breadcrumb-button-container.with-screenshots {
  /* We have more room when screenshots are enabled,
   * so push the button down slightly */
  top: 20px;
}

.create-breadcrumb-button {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background: var(--sys-color-cdt-base-container);
  box-shadow: var(--drop-shadow-depth-3);
  border-radius: 50px;
  padding: 5px 10px;
  gap: 2px;
}

.create-breadcrumb-button:active {
  /* On minimap cursor changes to text to selected an area,
  * so keep it as default on the breadcrumb button */
  cursor: default;
}

.create-breadcrumb-button:hover {
  background: var(--sys-color-neutral-container);
}

@media (forced-colors: active) {
  .overview-grid-cursor-position {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .window-curtain-left,
  .window-curtain-right {
    background-color: transparent;
    border-color: ButtonText;
  }

  .overview-grid-window-resizer {
    background-color: ButtonText;
  }

  .overview-grid-window-resizer:hover,
  .overview-grid-window-resizer:active,
  .overview-grid-window-resizer:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
  }
}

/*# sourceURL=overviewGrid.css */
`},ae={overviewGridWindow:"Overview grid window",leftResizer:"Left Resizer",rightResizer:"Right Resizer"},ti=$("ui/legacy/components/perf_ui/OverviewGrid.ts",ae),ye=U.bind(void 0,ti);class ii{element;grid;window;constructor(e,t){this.element=document.createElement("div"),this.element.id=e+"-overview-container",this.grid=new _,this.grid.element.id=e+"-overview-grid",this.grid.setScrollTop(0),this.element.appendChild(this.grid.element),this.window=new et(this.element,this.grid.dividersLabelBarElement,t)}enableCreateBreadcrumbsButton(){return this.window.enableCreateBreadcrumbsButton()}set showingScreenshots(e){this.window.showingScreenshots=e}clientWidth(){return this.element.clientWidth}updateDividers(e){this.grid.updateDividers(e)}addEventDividers(e){this.grid.addEventDividers(e)}removeEventDividers(){this.grid.removeEventDividers()}reset(){this.window.reset()}windowLeft(){return this.window.windowLeft||0}windowRight(){return this.window.windowRight||0}setWindow(e,t){this.window.setWindow(e,t)}addEventListener(e,t,i){return this.window.addEventListener(e,t,i)}setClickHandler(e){this.window.setClickHandler(e)}zoom(e,t){this.window.zoom(e,t)}setResizeEnabled(e){this.window.setEnabled(e)}}const R=14,Qe=.3,le=5,W=10;class et extends Lt{parentElement;calculator;leftResizeElement;rightResizeElement;leftCurtainElement;rightCurtainElement;breadcrumbButtonContainerElement;createBreadcrumbButton;curtainsRange;breadcrumbZoomIcon;overviewWindowSelector;offsetLeft;dragStartPoint;dragStartLeft;dragStartRight;windowLeft;windowRight;enabled;clickHandler;resizerParentOffsetLeft;#t=!1;#e=!1;constructor(e,t,i){super(),this.parentElement=e,this.parentElement.classList.add("parent-element"),kt(this.parentElement),this.calculator=i,ie(this.parentElement,ye(ae.overviewGridWindow)),V(this.parentElement,this.startWindowSelectorDragging.bind(this),this.windowSelectorDragging.bind(this),this.endWindowSelectorDragging.bind(this),"text",null),t&&V(t,this.startWindowDragging.bind(this),this.windowDragging.bind(this),null,"-webkit-grabbing","-webkit-grab"),this.parentElement.addEventListener("wheel",this.onMouseWheel.bind(this),!0),this.parentElement.addEventListener("dblclick",this.resizeWindowMaximum.bind(this),!0),L.instance().appendStyle(this.parentElement,ei),this.leftResizeElement=e.createChild("div","overview-grid-window-resizer"),V(this.leftResizeElement,this.resizerElementStartDragging.bind(this),this.leftResizeElementDragging.bind(this),null,"ew-resize"),this.rightResizeElement=e.createChild("div","overview-grid-window-resizer"),V(this.rightResizeElement,this.resizerElementStartDragging.bind(this),this.rightResizeElementDragging.bind(this),null,"ew-resize"),ie(this.leftResizeElement,ye(ae.leftResizer)),Ie(this.leftResizeElement);const s=n=>this.handleKeyboardResizing(n,!1);this.leftResizeElement.addEventListener("keydown",s),this.leftResizeElement.addEventListener("click",this.onResizerClicked),ie(this.rightResizeElement,ye(ae.rightResizer)),Ie(this.rightResizeElement);const r=n=>this.handleKeyboardResizing(n,!0);this.rightResizeElement.addEventListener("keydown",r),this.rightResizeElement.addEventListener("focus",this.onRightResizeElementFocused.bind(this)),this.rightResizeElement.addEventListener("click",this.onResizerClicked),this.leftCurtainElement=e.createChild("div","window-curtain-left"),this.rightCurtainElement=e.createChild("div","window-curtain-right"),this.breadcrumbButtonContainerElement=e.createChild("div","create-breadcrumb-button-container"),this.createBreadcrumbButton=this.breadcrumbButtonContainerElement.createChild("div","create-breadcrumb-button"),this.createBreadcrumbButton.setAttribute("jslog",`${Pt("timeline.create-breadcrumb").track({click:!0})}`),this.reset()}enableCreateBreadcrumbsButton(){return this.curtainsRange=this.createBreadcrumbButton.createChild("div"),this.breadcrumbZoomIcon=new Dt,this.breadcrumbZoomIcon.data={iconName:"zoom-in",color:"var(--icon-default)",width:"20px",height:"20px"},this.createBreadcrumbButton.appendChild(this.breadcrumbZoomIcon),this.createBreadcrumbButton.addEventListener("click",()=>{this.#f()}),this.#t=!0,this.#i(this.parentElement),this.#i(this.rightResizeElement),this.#i(this.leftResizeElement),this.breadcrumbButtonContainerElement}set showingScreenshots(e){this.breadcrumbButtonContainerElement.classList.toggle("with-screenshots",e)}#i(e){this.#t&&(e.addEventListener("mouseover",()=>{(this.windowLeft??0)<=0&&(this.windowRight??1)>=1?(this.breadcrumbButtonContainerElement.classList.toggle("is-breadcrumb-button-visible",!1),this.#e=!1):(this.breadcrumbButtonContainerElement.classList.toggle("is-breadcrumb-button-visible",!0),this.#e=!0)}),e.addEventListener("mouseout",()=>{this.breadcrumbButtonContainerElement.classList.toggle("is-breadcrumb-button-visible",!1),this.#e=!1}))}onResizerClicked(e){e.target&&e.target.focus()}onRightResizeElementFocused(){this.parentElement.scrollLeft=0}reset(){this.windowLeft=0,this.windowRight=1,this.setEnabled(!0),this.updateCurtains()}setEnabled(e){this.enabled=e,this.rightResizeElement.tabIndex=e?0:-1,this.leftResizeElement.tabIndex=e?0:-1}setClickHandler(e){this.clickHandler=e}resizerElementStartDragging(e){const t=e,i=e.target;return this.enabled?(this.resizerParentOffsetLeft=t.pageX-t.offsetX-i.offsetLeft,e.stopPropagation(),!0):!1}leftResizeElementDragging(e){const t=e;this.resizeWindowLeft(t.pageX-(this.resizerParentOffsetLeft||0)),e.preventDefault()}rightResizeElementDragging(e){const t=e;this.resizeWindowRight(t.pageX-(this.resizerParentOffsetLeft||0)),e.preventDefault()}handleKeyboardResizing(e,t){const i=e,s=e.target;let r=!1;if(i.key==="ArrowLeft"||i.key==="ArrowRight"){i.key==="ArrowRight"&&(r=!0);const n=this.getNewResizerPosition(s.offsetLeft,r,i.ctrlKey);t?this.resizeWindowRight(n):this.resizeWindowLeft(n),e.consume(!0)}}getNewResizerPosition(e,t,i){let s,r=i?10:2;return r=t?r:-Math.abs(r),s=e+le+r,t&&s<W?s=W:!t&&s>this.parentElement.clientWidth-W&&(s=this.parentElement.clientWidth-W),s}startWindowSelectorDragging(e){if(!this.enabled)return!1;const t=e;this.offsetLeft=this.parentElement.getBoundingClientRect().left;const i=t.x-this.offsetLeft;return this.overviewWindowSelector=new tt(this.parentElement,i),!0}windowSelectorDragging(e){if(this.#e=!0,!this.overviewWindowSelector)return;const t=e;this.overviewWindowSelector.updatePosition(t.x-this.offsetLeft),e.preventDefault()}endWindowSelectorDragging(e){if(!this.overviewWindowSelector)return;const t=e,i=this.overviewWindowSelector.close(t.x-this.offsetLeft);if(this.#t&&i.start===i.end)return;if(delete this.overviewWindowSelector,i.end-i.start<3){if(this.clickHandler&&this.clickHandler.call(null,e))return;const r=i.end;i.start=Math.max(0,r-R/2),i.end=Math.min(this.parentElement.clientWidth,r+R/2)}else i.end-i.start<R&&(this.parentElement.clientWidth-i.end>R?i.end=i.start+R:i.start=i.end-R);this.setWindowPosition(i.start,i.end)}startWindowDragging(e){const t=e;return this.dragStartPoint=t.pageX,this.dragStartLeft=this.windowLeft||0,this.dragStartRight=this.windowRight||0,e.stopPropagation(),!0}windowDragging(e){this.#e=!0,this.#t&&this.breadcrumbButtonContainerElement.classList.toggle("is-breadcrumb-button-visible",!0);const t=e;t.preventDefault();let i=(t.pageX-this.dragStartPoint)/this.parentElement.clientWidth;this.dragStartLeft+i<0&&(i=-this.dragStartLeft),this.dragStartRight+i>1&&(i=1-this.dragStartRight),this.setWindow(this.dragStartLeft+i,this.dragStartRight+i)}resizeWindowLeft(e){this.#e=!0,e<W?e=0:e>this.rightResizeElement.offsetLeft-4&&(e=this.rightResizeElement.offsetLeft-4),this.setWindowPosition(e,null)}resizeWindowRight(e){this.#e=!0,e>this.parentElement.clientWidth-W?e=this.parentElement.clientWidth:e<this.leftResizeElement.offsetLeft+R&&(e=this.leftResizeElement.offsetLeft+R),this.setWindowPosition(null,e)}resizeWindowMaximum(){this.setWindowPosition(0,this.parentElement.clientWidth)}getRawSliderValue(e){if(!this.calculator)throw new Error("No calculator to calculate boundaries");const t=this.calculator.minimumBoundary(),i=this.calculator.maximumBoundary()-t;return e?t+i*(this.windowLeft||0):t+i*(this.windowRight||0)}updateResizeElementPositionValue(e,t){const i=e.toFixed(2),s=t.toFixed(2);Re(this.leftResizeElement,i),Re(this.rightResizeElement,s);const r=Number(s)-.5,n=Number(i)+.5;Oe(this.leftResizeElement,"0",r.toString()),Oe(this.rightResizeElement,n.toString(),"100")}updateResizeElementPositionLabels(){if(!this.calculator)return;const e=this.calculator.formatValue(O(this.getRawSliderValue(!0))),t=this.calculator.formatValue(O(this.getRawSliderValue(!1)));te(this.leftResizeElement,String(e)),te(this.rightResizeElement,String(t))}updateResizeElementPercentageLabels(e,t){te(this.leftResizeElement,e),te(this.rightResizeElement,t)}calculateWindowPosition(){return{rawStartValue:Number(this.getRawSliderValue(!0)),rawEndValue:Number(this.getRawSliderValue(!1))}}setWindow(e,t){this.windowLeft=e,this.windowRight=t,this.updateCurtains(),this.calculator&&this.dispatchEventToListeners("WindowChangedWithPosition",this.calculateWindowPosition()),this.dispatchEventToListeners("WindowChanged"),this.#d(e,t)}#d(e,t){this.#t&&(t>=1&&e<=0||!this.#e?this.breadcrumbButtonContainerElement.classList.toggle("is-breadcrumb-button-visible",!1):this.breadcrumbButtonContainerElement.classList.toggle("is-breadcrumb-button-visible",!0))}#f(){this.dispatchEventToListeners("BreadcrumbAdded",this.calculateWindowPosition())}updateCurtains(){const e=this.windowLeft||0,t=this.windowRight||0;let i=e,s=t;const r=s-i;if(this.parentElement.clientWidth!==0){const u=r*this.parentElement.clientWidth,l=R/2;if(u<l){const d=l/u;i=(t+e-r*d)/2,s=(t+e+r*d)/2}}const n=100*i,o=100*s,h=100-100*s,a=n+"%",c=o+"%";this.leftResizeElement.style.left=a,this.rightResizeElement.style.left=c,this.leftCurtainElement.style.width=a,this.rightCurtainElement.style.width=h+"%",this.breadcrumbButtonContainerElement.style.marginLeft=n>0?n+"%":"0%",this.breadcrumbButtonContainerElement.style.marginRight=h>0?h+"%":"0%",this.curtainsRange&&(this.curtainsRange.textContent=this.getWindowRange().toFixed(0)+" ms"),this.updateResizeElementPositionValue(n,o),this.calculator?this.updateResizeElementPositionLabels():this.updateResizeElementPercentageLabels(a,c),this.toggleZoomButtonDisplay()}toggleZoomButtonDisplay(){this.breadcrumbZoomIcon&&(this.getWindowRange()<4.5?(this.breadcrumbZoomIcon.style.display="none",this.breadcrumbButtonContainerElement.style.pointerEvents="none"):(this.breadcrumbZoomIcon.style.display="flex",this.breadcrumbButtonContainerElement.style.pointerEvents="auto"))}getWindowRange(){if(!this.calculator)throw new Error("No calculator to calculate window range");const e=this.windowLeft&&this.windowLeft>0?this.windowLeft:0,t=this.windowRight&&this.windowRight<1?this.windowRight:1;return this.calculator.boundarySpan()*(t-e)}setWindowPosition(e,t){const i=this.parentElement.clientWidth,s=typeof e=="number"?e/i:this.windowLeft,r=typeof t=="number"?t/i:this.windowRight;this.setWindow(s||0,r||0)}onMouseWheel(e){const t=e;if(this.enabled){if(t.deltaY){const s=.018867924528301886,r=t.offsetX/this.parentElement.clientWidth;this.zoom(Math.pow(1.1,t.deltaY*s),r)}if(t.deltaX){let i=Math.round(t.deltaX*Qe);const s=this.leftResizeElement.offsetLeft+le,r=this.rightResizeElement.offsetLeft+le;s-i<0&&(i=s),r-i>this.parentElement.clientWidth&&(i=r-this.parentElement.clientWidth),this.setWindowPosition(s-i,r-i),t.preventDefault()}}}zoom(e,t){let i=this.windowLeft||0,s=this.windowRight||0;const r=s-i;let n=e*r;n>1&&(n=1,e=n/r),i=t+(i-t)*e,i=A(i,0,1-n),s=t+(s-t)*e,s=A(s,n,1),this.setWindow(i,s)}}class tt{startPosition;width;windowSelector;constructor(e,t){this.startPosition=t,this.width=e.offsetWidth,this.windowSelector=document.createElement("div"),this.windowSelector.className="overview-grid-window-selector",this.windowSelector.style.left=this.startPosition+"px",this.windowSelector.style.right=this.width-this.startPosition+"px",e.appendChild(this.windowSelector)}close(e){return e=Math.max(0,Math.min(e,this.width)),this.windowSelector.remove(),this.startPosition<e?{start:this.startPosition,end:e}:{start:e,end:this.startPosition}}updatePosition(e){e=Math.max(0,Math.min(e,this.width)),e<this.startPosition?(this.windowSelector.style.left=e+"px",this.windowSelector.style.right=this.width-this.startPosition+"px"):(this.windowSelector.style.left=this.startPosition+"px",this.windowSelector.style.right=this.width-e+"px")}}const gi=Object.freeze(Object.defineProperty({__proto__:null,MinSelectableSize:R,OffsetFromWindowEnds:W,OverviewGrid:ii,ResizerOffset:le,Window:et,WindowScrollSpeedFactor:Qe,WindowSelector:tt},Symbol.toStringTag,{value:"Module"})),it=new CSSStyleSheet;it.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.root {
  align-items: flex-start; /* keep chart at top so it doesnt change position as the legend changes height */
  display: flex;
  min-width: fit-content;
  white-space: nowrap;
}

.chart-root {
  position: relative;
  overflow: hidden;
}

.pie-chart-foreground {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  display: flex;
  pointer-events: none;
}

.pie-chart-total {
  margin: auto;
  padding: 2px 5px;
  pointer-events: auto;
}

:focus {
  outline-width: 0;
}

.pie-chart-total.selected {
  font-weight: bold;
}

.chart-root .slice.selected {
  stroke: var(--sys-color-primary);
  stroke-opacity: 1;
  stroke-width: 0.04;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pie-chart-legend {
  margin-left: 30px;
}

.pie-chart-legend-row {
  margin: 5px 2px 5px auto;
  padding-right: 25px;
}

.pie-chart-legend-row.selected {
  font-weight: bold;
}

.pie-chart-legend-row:focus-visible {
  box-shadow: 0 0 0 2px var(--sys-color-state-focus-ring) !important; /* stylelint-disable-line declaration-no-important */
}

.pie-chart-swatch {
  display: inline-block;
  width: 11px;
  height: 11px;
  margin: 0 6px;
  top: 1px;
  position: relative;
  border: 1px solid var(--sys-color-neutral-outline);
}

.pie-chart-name {
  display: inline-block;
}

.pie-chart-size {
  display: inline-block;
  text-align: right;
  width: 70px;
}

@media (forced-colors: active) {
  .pie-chart-swatch {
    forced-color-adjust: none;
    border-color: ButtonText;
  }

  .pie-chart-total {
    forced-color-adjust: none;
    background-color: canvas;
  }
}

/*# sourceURL=pieChart.css */
`);const{render:si,html:Ee,svg:_e}=Ot,st={total:"Total"},ri=$("ui/legacy/components/perf_ui/PieChart.ts",st),ni=U.bind(void 0,ri);class rt extends HTMLElement{shadow=this.attachShadow({mode:"open"});chartName="";size=0;formatter=e=>String(e);showLegend=!1;total=0;slices=[];totalSelected=!0;sliceSelected=-1;innerR=.618;lastAngle=-Math.PI/2;connectedCallback(){this.shadow.adoptedStyleSheets=[it]}set data(e){this.chartName=e.chartName,this.size=e.size,this.formatter=e.formatter,this.showLegend=e.showLegend,this.total=e.total,this.slices=e.slices,this.render()}render(){this.lastAngle=-Math.PI/2;const e=Ee`
      <div class="root" role="group" @keydown=${this.onKeyDown} aria-label=${this.chartName}
          jslog=${It().track({keydown:"ArrowUp|ArrowDown"})}>
        <div class="chart-root" style="width: ${this.size}px; height: ${this.size}px;">
          ${_e`
          <svg>
          <g transform="scale(${this.size/2}) translate(1, 1) scale(0.99, 0.99)">
            <circle r="1" stroke="hsl(0, 0%, 80%)" fill="transparent" stroke-width=${1/this.size}></circle>
            <circle r=${this.innerR} stroke="hsl(0, 0%, 80%)" fill="transparent" stroke-width=${1/this.size}></circle>
            ${this.slices.map((t,i)=>{const s=this.sliceSelected===i,r=s&&!this.showLegend?"0":"-1";return _e`<path class="slice ${s?"selected":""}"
                  jslog=${Me().track({click:!0})}
                  @click=${this.onSliceClicked(i)} tabIndex=${r}
                  fill=${t.color} d=${this.getPathStringForSlice(t)}
                  aria-label=${t.title} id=${s?"selectedSlice":""}></path>`})}
            <!-- This is so that the selected slice is re-drawn on top, to avoid re-ordering slices
            just to render them properly. -->
            <use href="#selectedSlice" />
            </g>
          </svg>
          `}
          <div class="pie-chart-foreground">
            <div class="pie-chart-total ${this.totalSelected?"selected":""}" @click=${this.selectTotal}
                jslog=${He("select-total").track({click:!0})}
                tabIndex=${this.totalSelected&&!this.showLegend?"1":"-1"}>
              ${this.total?this.formatter(this.total):""}
            </div>
          </div>
        </div>
        ${this.showLegend?Ee`
        <div class="pie-chart-legend" jslog=${Rt("legend")}>
          ${this.slices.map((t,i)=>{const s=this.sliceSelected===i;return Ee`
              <div class="pie-chart-legend-row ${s?"selected":""}"
                  jslog=${Me().track({click:!0})}
                  @click=${this.onSliceClicked(i)} tabIndex=${s?"0":"-1"}>
                <div class="pie-chart-size">${this.formatter(t.value)}</div>
                <div class="pie-chart-swatch" style="background-color: ${t.color};"></div>
                <div class="pie-chart-name">${t.title}</div>
              </div>`})}
          <div class="pie-chart-legend-row ${this.totalSelected?"selected":""}"
              jslog=${He("select-total").track({click:!0})}
              @click=${this.selectTotal} tabIndex=${this.totalSelected?"0":"-1"}>
            <div class="pie-chart-size">${this.formatter(this.total)}</div>
            <div class="pie-chart-swatch"></div>
            <div class="pie-chart-name">${ni(st.total)}</div>
          </div>
        </div>
        `:""}
      </div>
    `;si(e,this.shadow,{host:this})}onSliceClicked(e){return()=>{this.selectSlice(e)}}selectSlice(e){this.totalSelected=!1,this.sliceSelected=e,this.render()}selectTotal(){this.totalSelected=!0,this.sliceSelected=-1,this.render()}selectAndFocusTotal(){this.selectTotal();const e=this.shadow.querySelector(".pie-chart-legend > :last-child");e&&e.focus()}selectAndFocusSlice(e){this.selectSlice(e);const t=this.shadow.querySelector(`.pie-chart-legend > :nth-child(${e+1})`);t&&t.focus()}focusNextElement(){this.totalSelected?this.selectAndFocusSlice(0):this.sliceSelected===this.slices.length-1?this.selectAndFocusTotal():this.selectAndFocusSlice(this.sliceSelected+1)}focusPreviousElement(){this.totalSelected?this.selectAndFocusSlice(this.slices.length-1):this.sliceSelected===0?this.selectAndFocusTotal():this.selectAndFocusSlice(this.sliceSelected-1)}onKeyDown(e){let t=!1;e.key==="ArrowDown"?(this.focusNextElement(),t=!0):e.key==="ArrowUp"&&(this.focusPreviousElement(),t=!0),t&&(e.stopImmediatePropagation(),e.preventDefault())}getPathStringForSlice(e){let i=e.value/this.total*2*Math.PI;if(!isFinite(i))return;i=Math.min(i,2*Math.PI*.9999);const s=Math.cos(this.lastAngle),r=Math.sin(this.lastAngle);this.lastAngle+=i;const n=Math.cos(this.lastAngle),o=Math.sin(this.lastAngle),h=this.innerR,a=n*h,c=o*h,u=s*h,l=r*h,d=i>Math.PI?1:0;return`M${s},${r} A1,1,0,${d},1,${n},${o} L${a},${c} A${h},${h},0,${d},0,${u},${l} Z`}}customElements.define("devtools-perf-piechart",rt);const pi=Object.freeze(Object.defineProperty({__proto__:null,PieChart:rt},Symbol.toStringTag,{value:"Module"})),oi=new CSSStyleSheet;oi.replaceSync(`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-info:not(:empty) {
  display: flex;
  background: var(--sys-color-cdt-base-container);
  box-shadow: var(--drop-shadow);
  padding: 3px;
}

.overview-info .frame .time {
  display: none;
}

.overview-info .frame .thumbnail img {
  max-width: 50vw;
  max-height: 50vh;
}

/*# sourceURL=timelineOverviewInfo.css */
`);export{li as B,ui as C,Ce as D,fi as F,mi as N,gi as O,pi as P,oe as R,di as T,et as W,ci as a,hi as b,ii as c,rt as d,Ut as e,de as f,Se as g,_ as h,ue as i,Jt as j,ce as k,Qt as n,oi as s,qt as u};
//# sourceMappingURL=timelineOverviewInfo.css-BT4HnMd6.js.map
