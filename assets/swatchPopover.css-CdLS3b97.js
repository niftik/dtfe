import{ek as Ze,ba as q,bu as Qe,hu as _e,aO as L,hv as Je,aP as b,b as B,g as H,bn as et,hw as ye,dA as tt,hx as st,hy as it,hz as nt,hA as ot,hB as rt,hC as at,hD as lt,hE as Z,h as ct,df as Q,gU as Se,u as dt,aU as ke,eA as re,gM as K,cP as ht,cq as Ie,b4 as ut,hF as Ce,ap as g,cm as pt,bv as ae,cH as k,dR as E,i as _,eb as ft,cR as F,bq as A,hG as P,bH as Y,bF as Ee,bA as mt,bN as gt,gR as xt,eQ as vt,bI as wt,I as bt,gN as yt,ew as St,bh as kt,bc as It,hH as Ct,b2 as Te,aZ as Et,cA as Tt,hI as Mt}from"./inspector-CyOA7R9n.js";import{F as At,c as J}from"./cssOverview.css-C_I9lWrq.js";const Pt=Ze.cssLanguage.parser,le=new Intl.NumberFormat("en",{maximumFractionDigits:2});function zt(n,e){for(let t=e;t<n.length;t++)if(!isNaN(n[t].input))return t;return-1}function Lt(n,e){const t=[];for(;n.type.name!==","&&n.type.name!==")";){const o=e.substring(n.from,n.to);if(n.type.name!=="NumberLiteral")return null;t.push(o),n.next(!1)}if(t.length>3)return null;const s=t.filter(o=>o.includes("%"));if(s.length>2)return null;const i=t.filter(o=>!o.includes("%"));return i.length!==1?null:{number:Number(i[0]),lengthA:s[0]?Number(s[0].substring(0,s[0].length-1)):void 0,lengthB:s[1]?Number(s[1].substring(0,s[1].length-1)):void 0}}function Ft(n){const e=`*{--a: ${n}}`,s=Pt.parse(e).cursorAt(e.indexOf(":")+1);for(;s.name!=="ArgList"&&s.next(!0);)if(s.name==="Callee"&&e.substring(s.from,s.to)!=="linear")return null;if(s.name!=="ArgList")return null;s.firstChild();const i=[];for(;s.type.name!==")"&&s.next(!1);){const o=Lt(s,e);if(!o)return null;i.push(o)}return i}const j={linear:"linear(0 0%, 1 100%)"};class W{#e;constructor(e){this.#e=e}static parse(e){if(j[e])return W.parse(j[e]);const t=Ft(e);if(!t||t.length<2)return null;let s=-1/0;const i=[];for(let r=0;r<t.length;r++){const a=t[r],d={input:NaN,output:a.number};if(i.push(d),a.lengthA!==void 0){if(d.input=Math.max(a.lengthA,s),s=d.input,a.lengthB!==void 0){const h={input:NaN,output:d.output};i.push(h),h.input=Math.max(a.lengthB,s),s=h.input}}else r===0?(d.input=0,s=0):r===t.length-1&&(d.input=Math.max(100,s))}let o=0;for(let r=1;r<i.length;r++)isNaN(i[r].input)&&(r>o&&(o=zt(i,r)),i[r].input=i[r-1].input+(i[o].input-i[r-1].input)/(o-(r-1)));return new W(i)}addPoint(e,t){if(t!==void 0){this.#e.splice(t,0,e);return}this.#e.push(e)}removePoint(e){this.#e.splice(e,1)}setPoint(e,t){this.#e[e]=t}points(){return this.#e}asCSSText(){const t=`linear(${this.#e.map(s=>`${le.format(s.output)} ${le.format(s.input)}%`).join(", ")})`;for(const[s,i]of Object.entries(j))if(i===t)return s;return t}}const $t=new CSSStyleSheet;$t.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  width: 270px;
  height: 350px;
  user-select: none;
  padding: 16px;
  overflow: hidden;
}

.bezier-preset-selected > svg {
  background-color: var(--sys-color-tonal-container);
}

.bezier-container {
  --override-bezier-control-color: var(--sys-color-purple-bright);

  display: flex;
  margin-top: 38px;
  flex-shrink: 0;
  /* overflown bezier visualization must be on top of the source text */
  z-index: 2;
  background-image: radial-gradient(circle, var(--sys-color-surface-variant) 1px, var(--color-background-inverted-opacity-0) 1px);
  background-size: 17px 17px;
  background-position: -5px -10px;
}

.bezier-preset {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: auto;
  background-color: var(--sys-color-surface1);
  border-radius: 3px;
}

.bezier-preset line.bezier-control-line {
  stroke: var(--sys-color-token-subtle);
  stroke-width: 1;
  stroke-linecap: round;
  fill: none;
}

.bezier-preset circle.bezier-control-circle {
  fill: var(--sys-color-token-subtle);
}

.bezier-preset path.bezier-path {
  stroke: var(--sys-color-inverse-surface);
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
}

.bezier-preset-selected path.bezier-path,
.bezier-preset-selected line.bezier-control-line {
  stroke: var(--sys-color-on-tonal-container);
}

.bezier-preset-selected circle.bezier-control-circle {
  fill: var(--sys-color-on-tonal-container);
}

.bezier-curve line.linear-line {
  stroke: var(--sys-color-neutral-outline);
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
}

.bezier-curve line.bezier-control-line {
  stroke: var(--override-bezier-control-color);
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
  opacity: 60%;
}

.bezier-curve circle.bezier-control-circle {
  fill: var(--override-bezier-control-color);
  cursor: pointer;
}

.bezier-curve path.bezier-path {
  stroke: var(--sys-color-inverse-surface);
  stroke-width: 3;
  stroke-linecap: round;
  fill: none;
}

.bezier-curve path.bezier-path.linear-path {
  cursor: pointer;
}

.bezier-preview-container {
  position: relative;
  background-color: var(--sys-color-cdt-base-container);
  overflow: hidden;
  border-radius: 20px;
  width: 200%;
  height: 20px;
  z-index: 2;
  flex-shrink: 0;
  opacity: 0%;
}

.bezier-preview-animation {
  background-color: var(--sys-color-purple-bright);
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: absolute;
}

.bezier-preview-onion {
  margin-top: -20px;
  position: relative;
  z-index: 1;
}

.bezier-preview-onion > .bezier-preview-animation {
  opacity: 10%;
}

svg.bezier-preset-modify {
  background-color: var(--sys-color-cdt-base-container);
  border-radius: 35px;
  display: inline-block;
  visibility: hidden;
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: absolute;
}

svg.bezier-preset-modify:hover,
.bezier-preset:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.bezier-preset-selected .bezier-preset:hover {
  background-color: var(--sys-color-tonal-container);
}

.bezier-preset-modify path {
  stroke-width: 2;
  stroke: var(--sys-color-on-surface-subtle);
  fill: none;
}

.bezier-presets {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bezier-preset-selected .bezier-preset-modify {
  opacity: 100%;
}

.bezier-preset-category {
  width: 50px;
  cursor: pointer;
  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

span.bezier-display-value {
  width: 100%;
  user-select: text;
  display: block;
  text-align: center;
  line-height: 20px;
  min-height: 20px;
  cursor: text;
}

svg.bezier-curve {
  margin-left: 32px;
  margin-top: -8px;
}

svg.bezier-curve.linear {
  margin-top: 42px;
  overflow: visible;
}

svg.bezier-preset-modify.bezier-preset-plus {
  right: 0;
}

.bezier-header {
  margin-top: 16px;
  z-index: 1;
}

svg.bezier-preset-modify:active {
  transform: scale(1.1);
  background-color: var(--sys-color-state-ripple-neutral-on-subtle);
}

.bezier-preset-category:active {
  transform: scale(1.05);
}

.bezier-header-active > svg.bezier-preset-modify {
  visibility: visible;
}

.bezier-preset-modify:active path {
  stroke: var(--sys-color-on-surface-subtle);
}

/*# sourceURL=bezierEditor.css */
`);const Me=new CSSStyleSheet;Me.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* stylelint-disable */
.swatch-icon {
  display: inline-grid;
  inline-size: 15px;
  grid: [stack] 1fr / [stack] 1fr;
  margin-left: 1px;
  margin-right: 2px;
  color: var(--color);
}

.swatch {
  aspect-ratio: 1 / 1;
  display: inline-block;
  width: 10px;
  border-radius: 1e5px;
  background:
    linear-gradient(var(--color), var(--color)),
    var(--image-file-checker);
  box-shadow: inset 0 0 0 .5px rgb(128 128 128 / 60%);
  grid-area: stack;
}
/* stylelint-enable */

.swatch-right {
  justify-self: end;
}

.swatch-mix {
  box-shadow: none;
  justify-self: end;
  mask: radial-gradient(circle at 0% center, rgb(0 0 0) 50%, rgb(0 0 0 / 0%) calc(50% + 0.5px));
}

/*# sourceURL=colorMixSwatch.css */
`);const{html:Rt}=b;class Vt extends q(HTMLElement){shadow=this.attachShadow({mode:"open"});colorMixText="";firstColorText="";secondColorText="";#e;constructor(){super(),this.shadow.adoptedStyleSheets=[Me]}get icon(){return this.shadow.firstElementChild}mixedColor(){const e=this.icon?.computedStyleMap().get("color")?.toString()??null;return e?Qe(e):null}setFirstColor(e){this.firstColorText&&(this.colorMixText=this.colorMixText.replace(this.firstColorText,e)),this.firstColorText=e,this.dispatchEventToListeners("colorChanged",{text:this.colorMixText}),this.#t()}setSecondColor(e){this.secondColorText&&(this.colorMixText=_e(this.colorMixText,this.secondColorText,e)),this.secondColorText=e,this.dispatchEventToListeners("colorChanged",{text:this.colorMixText}),this.#t()}setColorMixText(e){this.colorMixText=e,this.dispatchEventToListeners("colorChanged",{text:this.colorMixText}),this.#t()}setRegisterPopoverCallback(e){this.#e=e,e(this)}getText(){return this.colorMixText}#t(){if(!this.colorMixText||!this.firstColorText||!this.secondColorText){L(this.colorMixText,this.shadow,{host:this});return}L(Rt`<div class="swatch-icon" jslog=${Je()} style="--color: ${this.colorMixText}">
        <span class="swatch swatch-left" id="swatch-1" style="--color: ${this.firstColorText}"></span>
        <span class="swatch swatch-right" id="swatch-2" style="--color: ${this.secondColorText}"></span>
        <span class="swatch swatch-mix" id="mix-result" style="--color: ${this.colorMixText}"></span>
      </div><slot>${this.colorMixText}</slot>`,this.shadow,{host:this}),this.#e&&this.#e(this)}}customElements.define("devtools-color-mix-swatch",Vt);const Ae=new CSSStyleSheet;Ae.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

.color-swatch {
  position: relative;
  margin-left: 1px;
  margin-right: 2px;
  width: 12px;
  height: 12px;
  transform: scale(0.8);
  vertical-align: -2px;
  display: inline-block;
  user-select: none;
  background-image: var(--image-file-checker);
  line-height: 10px;
}

.color-swatch-inner {
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 1px solid var(--sys-color-neutral-outline);
  box-sizing: border-box;
  cursor: pointer;
}

.color-swatch.readonly .color-swatch-inner {
  cursor: unset;
}

.color-swatch:not(.readonly) .color-swatch-inner:hover {
  border: 1px solid var(--sys-color-outline);
}

@media (forced-colors: active) {
  .color-swatch {
    forced-color-adjust: none;
  }
}

/*# sourceURL=colorSwatch.css */
`);const{html:Nt}=b,Pe={shiftclickToChangeColorFormat:"Shift-click to change color format"},Bt=B("ui/legacy/components/inline_editor/ColorSwatch.ts",Pe),Ht=H.bind(void 0,Bt);class $ extends Event{static eventName="colorchanged";data;constructor(e){super($.eventName,{}),this.data={color:e}}}class ee extends Event{static eventName="swatchclick";constructor(){super(ee.eventName,{})}}class Ut extends HTMLElement{shadow=this.attachShadow({mode:"open"});tooltip=Ht(Pe.shiftclickToChangeColorFormat);color=null;readonly=!1;constructor(e){super(),this.shadow.adoptedStyleSheets=[Ae],e&&(this.tooltip=e)}static isColorSwatch(e){return e.localName==="devtools-color-swatch"}getReadonly(){return this.readonly}setReadonly(e){this.readonly!==e&&(this.readonly=e,this.color&&this.renderColor(this.color))}getColor(){return this.color}get anchorBox(){const e=this.shadow.querySelector(".color-swatch");return e?e.boxInWindow():null}getText(){return this.color?.getAuthoredText()??this.color?.asString()}renderColor(e){this.color=e;const t=et({"color-swatch":!0,readonly:this.readonly});L(Nt`<span class=${t} title=${this.tooltip}><span class="color-swatch-inner"
        style="background-color: ${this.getText()};"
        jslog=${ye("color").track({click:!0})}
        @click=${this.onClick}
        @mousedown=${this.consume}
        @dblclick=${this.consume}></span></span><slot><span>${this.getText()}</span></slot>`,this.shadow,{host:this})}onClick(e){if(!this.readonly){if(e.shiftKey){e.stopPropagation(),this.showFormatPicker(e);return}this.dispatchEvent(new ee)}}consume(e){e.stopPropagation()}setColor(e){this.renderColor(e),this.dispatchEvent(new $(e))}setColorText(e){this.firstElementChild?.remove(),this.renderColor(e),this.appendChild(document.createElement("span")).appendChild(document.createTextNode(e.getAuthoredText()??e.asString())),this.dispatchEvent(new $(e))}showFormatPicker(e){if(!this.color)return;new At(this.color).show(e,s=>{this.setColorText(s)})}}customElements.define("devtools-color-swatch",Ut);const ze=new CSSStyleSheet;ze.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.swatch {
  position: relative;
  display: inline-block;
  margin-bottom: -2px;
  width: 1em;
  height: 1em;
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--sys-color-neutral-container);
}

.mini-hand {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55%;
  width: 2px;
  background-color: var(--sys-color-tonal-container);
  border-radius: 5px;
}

/*# sourceURL=cssAngleSwatch.css */
`);const Dt=/(?<value>[+-]?\d*\.?\d+)(?<unit>deg|grad|rad|turn)/,Ot=n=>{const e=n.match(Dt);return!e||!e.groups?null:{value:Number(e.groups.value),unit:e.groups.unit}},R=(n,e)=>{let t=n;switch(e){case"grad":t=ot(n);break;case"deg":t=nt(n);break;case"turn":t=it(n);break}return{value:t,unit:e}},U=n=>{switch(n.unit){case"deg":return lt(n.value);case"grad":return at(n.value);case"turn":return rt(n.value)}return n.value},G=(n,e)=>{const t=U(n);return{translateX:Math.sin(t)*e,translateY:-Math.cos(t)*e}},ce=n=>{let e=n.value;switch(n.unit){case"deg":case"grad":e=Math.round(n.value);break;case"rad":e=Math.round(n.value*1e4)/1e4;break;case"turn":e=Math.round(n.value*100)/100;break;default:tt(n.unit,`Unknown angle unit: ${n.unit}`)}return{value:e,unit:n.unit}},jt=n=>{switch(n){case"deg":return"grad";case"grad":return"rad";case"rad":return"turn";default:return"deg"}},de=(n,e)=>{if(n.unit===e)return n;const t=U(n);return R(t,e)},Le=(n,e)=>{const t=st(e);if(t===null)return;let s=t==="Up"?Math.PI/180:-Math.PI/180;e.shiftKey&&(s*=10);const i=U(n);return R(i+s,n.unit)},{render:Xt,html:Kt}=b,Yt=Z,Wt=11;class Gt extends HTMLElement{shadow=this.attachShadow({mode:"open"});angle={value:0,unit:"rad"};connectedCallback(){this.shadow.adoptedStyleSheets=[ze]}set data(e){this.angle=e.angle,this.render()}render(){const{translateX:e,translateY:t}=G(this.angle,Wt/4),s={transform:`translate(${e}px, ${t}px) rotate(${this.angle.value}${this.angle.unit})`};Xt(Kt`
      <div class="swatch">
        <span class="mini-hand" style=${Yt(s)}></span>
      </div>
    `,this.shadow,{host:this})}}customElements.define("devtools-css-angle-swatch",Gt);const Fe=new CSSStyleSheet;Fe.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.editor.interacting::before {
  content: "";
  position: fixed;
  inset: 0;
}

.clock,
.pointer,
.center,
.hand,
.dial {
  position: absolute;
}

.clock {
  top: 6px;
  width: 6em;
  height: 6em;
  background-color: var(--sys-color-cdt-base-container);
  border: 0.5em solid var(--sys-color-neutral-outline);
  border-radius: 9em;
  box-shadow: var(--drop-shadow), inset 0 0 15px var(--box-shadow-outline-color);
  transform: translateX(-3em);
}

.center,
.hand {
  box-shadow: 0 0 2px var(--box-shadow-outline-color);
}

.pointer {
  margin: auto;
  top: 0;
  left: -0.4em;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0.9em 0.9em;
  border-color: transparent transparent var(--sys-color-neutral-outline) transparent;
}

.center,
.hand,
.dial {
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.center {
  width: 0.7em;
  height: 0.7em;
  border-radius: 10px;
}

.dial {
  width: 2px;
  height: var(--clock-dial-length);
  background-color: var(--override-dial-color);
  border-radius: 1px;
}

.hand {
  height: 50%;
  width: 0.3em;
  background: var(--sys-color-tonal-container);
}

.hand::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: -0.6em;
  left: -0.35em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px var(--box-shadow-outline-color);
}

.hand::before,
.center {
  background-color: var(--sys-color-tonal-container);
}

:host-context(.theme-with-dark-background) .hand::before {
  box-shadow: 0 0 5px hsl(0deg 0% 0% / 80%);
}

:host-context(.theme-with-dark-background) .center,
:host-context(.theme-with-dark-background) .hand {
  box-shadow: 0 0 2px hsl(0deg 0% 0% / 60%);
}

:host-context(.theme-with-dark-background) .clock {
  background-color: hsl(225deg 5% 27%);
}

/*# sourceURL=cssAngleEditor.css */
`);const{render:qt,html:he}=b,X=Z,ue=6;class Zt extends HTMLElement{shadow=this.attachShadow({mode:"open"});angle={value:0,unit:"rad"};onAngleUpdate;background="";clockRadius=77/2;dialTemplates;mousemoveThrottler=new ct(16.67);mousemoveListener=this.onMousemove.bind(this);connectedCallback(){this.shadow.adoptedStyleSheets=[Fe],this.style.setProperty("--clock-dial-length",`${ue}px`)}set data(e){this.angle=e.angle,this.onAngleUpdate=e.onAngleUpdate,this.background=e.background,this.render()}updateAngleFromMousePosition(e,t,s){const i=this.shadow.querySelector(".clock");if(!i||!this.onAngleUpdate)return;const{top:o,right:r,bottom:a,left:d}=i.getBoundingClientRect();this.clockRadius=(r-d)/2;const h=(d+r)/2,m=(a+o)/2,v=-Math.atan2(e-h,t-m)+Math.PI;if(s){const w=U({value:15,unit:"deg"}),qe=Math.round(v/w)*w;this.onAngleUpdate(R(qe,this.angle.unit))}else this.onAngleUpdate(R(v,this.angle.unit))}onEditorMousedown(e){e.stopPropagation(),this.updateAngleFromMousePosition(e.pageX,e.pageY,e.shiftKey);const t=e.target instanceof Node&&e.target.ownerDocument,s=this.shadow.querySelector(".editor");t&&s&&(t.addEventListener("mousemove",this.mousemoveListener,{capture:!0}),s.classList.add("interacting"),t.addEventListener("mouseup",()=>{t.removeEventListener("mousemove",this.mousemoveListener,{capture:!0}),s.classList.remove("interacting")},{once:!0}))}onMousemove(e){e.buttons===1&&(e.preventDefault(),this.mousemoveThrottler.schedule(()=>(this.updateAngleFromMousePosition(e.pageX,e.pageY,e.shiftKey),Promise.resolve())))}onEditorWheel(e){if(!this.onAngleUpdate)return;const t=Le(this.angle,e);t&&this.onAngleUpdate(t),e.preventDefault()}render(){const e={background:this.background},{translateX:t,translateY:s}=G(this.angle,this.clockRadius/2),i={transform:`translate(${t}px, ${s}px) rotate(${this.angle.value}${this.angle.unit})`};qt(he`
      <div class="editor" jslog=${Q("cssAngleEditor").track({click:!0,drag:!0,resize:!0,keydown:"Enter|Escape"})}>
        <span class="pointer"></span>
        <div
          class="clock"
          style=${X(e)}
          @mousedown=${this.onEditorMousedown}
          @wheel=${this.onEditorWheel}>
          ${this.renderDials()}
          <div class="hand" style=${X(i)}></div>
          <span class="center"></span>
        </div>
      </div>
    `,this.shadow,{host:this})}renderDials(){return this.dialTemplates||(this.dialTemplates=[0,45,90,135,180,225,270,315].map(e=>{const t=this.clockRadius-ue-3,{translateX:s,translateY:i}=G({value:e,unit:"deg"},t),o={transform:`translate(${s}px, ${i}px) rotate(${e}deg)`};return he`<span class="dial" style=${X(o)}></span>`})),this.dialTemplates}}customElements.define("devtools-css-angle-editor",Zt);const $e=new CSSStyleSheet;$e.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.css-angle {
  display: inline-block;
  position: relative;
  outline: none;
}

devtools-css-angle-swatch {
  display: inline-block;
  margin-right: 2px;
  user-select: none;
}

devtools-css-angle-editor {
  --override-dial-color: var(--sys-color-neutral-outline);

  position: fixed;
  z-index: 2;
}

.preview {
  display: inline-block;
}

/*# sourceURL=cssAngle.css */
`);class D extends Event{static eventName="valuechanged";data;constructor(e){super(D.eventName,{}),this.data={value:e}}}const{render:Qt,html:pe}=b,_t=Z;class V extends Event{static eventName="popovertoggled";data;constructor(e){super(V.eventName,{}),this.data={open:e}}}class te extends Event{static eventName="unitchanged";data;constructor(e){super(te.eventName,{}),this.data={value:e}}}const fe={value:0,unit:"rad"};class Jt extends HTMLElement{shadow=this.attachShadow({mode:"open"});angle=fe;displayedAngle=fe;propertyValue="";containingPane;angleElement=null;swatchElement=null;popoverOpen=!1;popoverStyleTop="";popoverStyleLeft="";onMinifyingAction=this.minify.bind(this);connectedCallback(){this.shadow.adoptedStyleSheets=[$e]}set data(e){const t=Ot(e.angleText);t&&(this.angle=t,this.displayedAngle={...t},this.containingPane=e.containingPane,this.render())}disconnectedCallback(){this.unbindMinifyingAction()}popOver(){if(!this.containingPane||(this.angleElement||(this.angleElement=this.shadow.querySelector(".css-angle")),this.swatchElement||(this.swatchElement=this.shadow.querySelector("devtools-css-angle-swatch")),!this.angleElement||!this.swatchElement))return;this.dispatchEvent(new V(!0)),this.bindMinifyingAction();const e=this.swatchElement.getBoundingClientRect().bottom,t=this.swatchElement.getBoundingClientRect().left;if(e&&t){const s=this.containingPane.getBoundingClientRect().top,i=this.containingPane.getBoundingClientRect().left;this.popoverStyleTop=`${e-s}px`,this.popoverStyleLeft=`${t-i}px`}this.popoverOpen=!0,this.render(),this.angleElement.focus()}addEventListener(e,t,s){super.addEventListener(e,t,s)}minify(){this.popoverOpen!==!1&&(this.popoverOpen=!1,this.dispatchEvent(new V(!1)),this.unbindMinifyingAction(),this.render())}updateProperty(e){this.propertyValue=e,this.render()}updateAngle(e){this.displayedAngle=ce(de(e,this.displayedAngle.unit)),this.angle=this.displayedAngle,this.dispatchEvent(new D(`${this.angle.value}${this.angle.unit}`))}displayNextUnit(){const e=jt(this.displayedAngle.unit);this.displayedAngle=ce(de(this.angle,e)),this.dispatchEvent(new te(`${this.displayedAngle.value}${this.displayedAngle.unit}`))}bindMinifyingAction(){document.addEventListener("mousedown",this.onMinifyingAction),this.containingPane&&this.containingPane.addEventListener("scroll",this.onMinifyingAction)}unbindMinifyingAction(){document.removeEventListener("mousedown",this.onMinifyingAction),this.containingPane&&this.containingPane.removeEventListener("scroll",this.onMinifyingAction)}onMiniIconClick(e){if(e.stopPropagation(),e.shiftKey&&!this.popoverOpen){this.displayNextUnit();return}this.popoverOpen?this.minify():this.popOver()}consume(e){e.stopPropagation()}onKeydown(e){if(this.popoverOpen)switch(e.key){case"Escape":e.stopPropagation(),this.minify(),this.blur();break;case"ArrowUp":case"ArrowDown":{const t=Le(this.angle,e);t&&this.updateAngle(t),e.preventDefault();break}}}render(){Qt(pe`
      <div class="css-angle" @focusout=${this.minify} @keydown=${this.onKeydown} tabindex="-1">
        <div class="preview">
          <devtools-css-angle-swatch
            @click=${this.onMiniIconClick}
            @mousedown=${this.consume}
            @dblclick=${this.consume}
            .data=${{angle:this.angle}}>
          </devtools-css-angle-swatch><slot></slot></div>
        ${this.popoverOpen?this.renderPopover():null}
      </div>
    `,this.shadow,{host:this})}renderPopover(){let e="";return this.propertyValue&&!this.propertyValue.match(/url\(.*\)/i)&&(e=this.propertyValue),pe`
    <devtools-css-angle-editor
      class="popover popover-css-angle"
      style=${_t({top:this.popoverStyleTop,left:this.popoverStyleLeft})}
      .data=${{angle:this.angle,onAngleUpdate:t=>{this.updateAngle(t)},background:e}}
    ></devtools-css-angle-editor>
    `}}customElements.define("devtools-css-angle",Jt);const Re=new CSSStyleSheet;Re.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: inline-block;
  position: relative;
  outline: none;
}

:host(:not(:last-child)) {
  margin-right: 0.1em;
}

:host-context(.overloaded) {
  text-decoration: line-through;
}

.value {
  cursor: ew-resize;
}

::selection {
  background-color: var(--sys-color-tonal-container);
}

/*# sourceURL=cssLength.css */
`);const{render:es,html:me}=b;class se extends Event{static eventName="draggingfinished";constructor(){super(se.eventName,{})}}var N;(function(n){n.PIXEL="px",n.CENTIMETER="cm",n.MILLIMETER="mm",n.QUARTERMILLIMETER="Q",n.INCH="in",n.PICA="pc",n.POINT="pt",n.CAP="cap",n.CH="ch",n.EM="em",n.EX="ex",n.IC="ic",n.LH="lh",n.RCAP="rcap",n.RCH="rch",n.REM="rem",n.REX="rex",n.RIC="ric",n.RLH="rlh",n.VB="vb",n.VH="vh",n.VI="vi",n.VW="vw",n.VMIN="vmin",n.VMAX="vmax"})(N||(N={}));const ts=new RegExp(`(?<value>[+-]?\\d*\\.?\\d+([Ee][+-]?\\d+)?)(?<unit>${Object.values(N).join("|")})`);let ss=class extends HTMLElement{shadow=this.attachShadow({mode:"open"});onDraggingValue=this.dragValue.bind(this);value="";unit=N.PIXEL;isEditingSlot=!1;isDraggingValue=!1;#e=0;set data({lengthText:e}){const t=e.match(ts)?.groups;if(!t)throw new Error;this.value=t.value,this.unit=t.unit,this.render()}connectedCallback(){this.shadow.adoptedStyleSheets=[Re]}dragValue(e){if(e.preventDefault(),e.stopPropagation(),Date.now()-this.#e<=300)return;this.isDraggingValue=!0;const t=Se(this.value,e);t&&(this.value=t,this.dispatchEvent(new D(`${this.value}${this.unit}`)),dt.swatchActivated(8),this.render())}onValueMousedown(e){if(e.button!==0)return;this.#e=Date.now();const t=e.target instanceof Node&&e.target.ownerDocument;t&&(t.addEventListener("mousemove",this.onDraggingValue,{capture:!0}),t.addEventListener("mouseup",s=>{t.removeEventListener("mousemove",this.onDraggingValue,{capture:!0}),this.isDraggingValue&&(s.preventDefault(),s.stopPropagation(),this.isDraggingValue=!1,this.dispatchEvent(new se))},{once:!0,capture:!0}))}onValueMouseup(){this.isDraggingValue||(this.isEditingSlot=!0,this.render())}render(){es(this.renderContent(),this.shadow,{host:this})}renderContent(){return this.isEditingSlot?me`<slot></slot>`:me`<span class="value" @mousedown=${this.onValueMousedown} @mouseup=${this.onValueMouseup}>${this.value}</span><span class="unit">${this.unit}</span>`}};customElements.define("devtools-css-length",ss);const Ve=new CSSStyleSheet;Ve.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  user-select: none;
  padding: 4px 12px 12px;
  border: 1px solid transparent;
}

.shadow-editor-field {
  height: 24px;
  margin-top: 8px;
  font-size: 12px;
  flex-shrink: 0;
}

.shadow-editor-field:last-of-type {
  margin-bottom: 8px;
}

.shadow-editor-flex-field {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.shadow-editor-field.shadow-editor-blur-field {
  margin-top: 40px;
}

.shadow-editor-2D-slider {
  position: absolute;
  height: 88px;
  width: 88px;
  border: 1px solid var(--divider-line);
  border-radius: 2px;
}

.shadow-editor-label {
  display: inline-block;
  width: 52px;
  height: 24px;
  line-height: 24px;
  margin-right: 8px;
  text-align: right;
}

.shadow-editor-button-left,
.shadow-editor-button-right {
  width: 74px;
  height: 24px;
  padding: 3px 7px;
  line-height: 16px;
  border: 1px solid var(--divider-line);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  text-align: center;
  font-weight: 500;
}

.shadow-editor-button-left {
  border-radius: 2px 0 0 2px;
}

.shadow-editor-button-right {
  border-radius: 0 2px 2px 0;
  border-left-width: 0;
}

.shadow-editor-button-left:hover,
.shadow-editor-button-right:hover {
  box-shadow: 0 1px 1px var(--color-background-elevation-1);
}

.shadow-editor-button-left:focus,
.shadow-editor-button-right:focus {
  background-color: var(--color-background-elevation-1);
}

.shadow-editor-button-left.enabled,
.shadow-editor-button-right.enabled {
  --override-button-text-color: #fff;

  background-color: var(--color-primary-old);
  color: var(--override-button-text-color);
}

.shadow-editor-button-left.enabled:focus,
.shadow-editor-button-right.enabled:focus {
  background-color: var(--color-primary-variant);
}

.shadow-editor-text-input {
  width: 52px;
  margin-right: 8px;
  text-align: right;
  box-shadow: var(--legacy-focus-ring-inactive-shadow);
}

@media (forced-colors: active) {
  .shadow-editor-button-left:hover,
  .shadow-editor-button-left.enabled:focus,
  .shadow-editor-button-right:hover .shadow-editor-button-left.enabled,
  .shadow-editor-button-right.enabled,
  .shadow-editor-button-right.enabled:focus {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=cssShadowEditor.css */
`);const S={type:"Type",xOffset:"X offset",yOffset:"Y offset",blur:"Blur",spread:"Spread"},is=B("ui/legacy/components/inline_editor/CSSShadowEditor.ts",S),I=H.bind(void 0,is),x=20,f="px",T=6,C=88,ns=function(){const n="([+-]?(?:[0-9]*[.])?[0-9]+(?:[eE][+-]?[0-9]+)?)",e="(ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw)",t="[+-]?(?:0*[.])?0+(?:[eE][+-]?[0-9]+)?";return new RegExp(n+e+"|"+t,"gi").source}();class u{amount;unit;constructor(e,t){this.amount=e,this.unit=t}static parse(e){const t=new RegExp("^(?:"+ns+")$","i"),s=e.match(t);return s?s.length>2&&s[2]?new u(parseFloat(s[1]),s[2]):u.zero():null}static zero(){return new u(0,"")}asCSSText(){return this.amount+this.unit}}class _s extends q(ke){typeField;outsetButton;insetButton;xInput;yInput;xySlider;halfCanvasSize;innerCanvasSize;blurInput;blurSlider;spreadField;spreadInput;spreadSlider;model;canvasOrigin;changedElement;constructor(){super(!0),this.contentElement.tabIndex=0,this.contentElement.setAttribute("jslog",`${Q("cssShadowEditor").parent("mapped").track({keydown:"Enter|Escape"})}`),this.setDefaultFocusedElement(this.contentElement),this.typeField=this.contentElement.createChild("div","shadow-editor-field shadow-editor-flex-field"),this.typeField.createChild("label","shadow-editor-label").textContent=I(S.type),this.outsetButton=this.typeField.createChild("button","shadow-editor-button-left"),this.outsetButton.textContent=re("Outset"),this.outsetButton.addEventListener("click",this.onButtonClick.bind(this),!1),this.insetButton=this.typeField.createChild("button","shadow-editor-button-right"),this.insetButton.textContent=re("Inset"),this.insetButton.addEventListener("click",this.onButtonClick.bind(this),!1);const e=this.contentElement.createChild("div","shadow-editor-field");this.xInput=this.createTextInput(e,I(S.xOffset),"x-offset");const t=this.contentElement.createChild("div","shadow-editor-field");this.yInput=this.createTextInput(t,I(S.yOffset),"y-offset"),this.xySlider=e.createChild("canvas","shadow-editor-2D-slider"),this.xySlider.setAttribute("jslog",`${K("xy").track({click:!0,drag:!0,keydown:"ArrowUp|ArrowDown|ArrowLeft|ArrowRight"})}`),this.xySlider.width=C,this.xySlider.height=C,this.xySlider.tabIndex=-1,this.halfCanvasSize=C/2,this.innerCanvasSize=this.halfCanvasSize-T,ht(this.xySlider,this.dragStart.bind(this),this.dragMove.bind(this),null,"default"),this.xySlider.addEventListener("keydown",this.onCanvasArrowKey.bind(this),!1),this.xySlider.addEventListener("blur",this.onCanvasBlur.bind(this),!1);const s=this.contentElement.createChild("div","shadow-editor-field shadow-editor-flex-field shadow-editor-blur-field");this.blurInput=this.createTextInput(s,I(S.blur),"blur"),this.blurSlider=this.createSlider(s,"blur"),this.spreadField=this.contentElement.createChild("div","shadow-editor-field shadow-editor-flex-field"),this.spreadInput=this.createTextInput(this.spreadField,I(S.spread),"spread"),this.spreadSlider=this.createSlider(this.spreadField,"spread")}createTextInput(e,t,s){const i=e.createChild("label","shadow-editor-label");i.textContent=t,i.setAttribute("for",t);const o=Ie("shadow-editor-text-input","text");return e.appendChild(o),o.id=t,o.addEventListener("keydown",this.handleValueModification.bind(this),!1),o.addEventListener("wheel",this.handleValueModification.bind(this),!1),o.addEventListener("input",this.onTextInput.bind(this),!1),o.addEventListener("blur",this.onTextBlur.bind(this),!1),o.setAttribute("jslog",`${ut().track({change:!0,keydown:"ArrowUp|ArrowDown"}).context(s)}`),o}createSlider(e,t){const s=Ce(0,x,-1);return s.addEventListener("input",this.onSliderInput.bind(this),!1),s.setAttribute("jslog",`${K().track({click:!0,drag:!0}).context(t)}`),e.appendChild(s),s}wasShown(){this.registerCSSFiles([Ve]),this.updateUI()}setModel(e){this.model=e,this.typeField.classList.toggle("hidden",!e.isBoxShadow()),this.spreadField.classList.toggle("hidden",!e.isBoxShadow()),this.updateUI()}updateUI(){this.updateButtons(),this.xInput.value=this.model.offsetX().asCSSText(),this.yInput.value=this.model.offsetY().asCSSText(),this.blurInput.value=this.model.blurRadius().asCSSText(),this.spreadInput.value=this.model.spreadRadius().asCSSText(),this.blurSlider.value=this.model.blurRadius().amount.toString(),this.spreadSlider.value=this.model.spreadRadius().amount.toString(),this.updateCanvas(!1)}updateButtons(){this.insetButton.classList.toggle("enabled",this.model.inset()),this.outsetButton.classList.toggle("enabled",!this.model.inset())}updateCanvas(e){const t=this.xySlider.getContext("2d");if(!t)throw new Error("Unable to obtain canvas context");t.clearRect(0,0,this.xySlider.width,this.xySlider.height),t.save(),t.setLineDash([1,1]),t.strokeStyle="rgba(210, 210, 210, 0.8)",t.beginPath(),t.moveTo(this.halfCanvasSize,0),t.lineTo(this.halfCanvasSize,C),t.moveTo(0,this.halfCanvasSize),t.lineTo(C,this.halfCanvasSize),t.stroke(),t.restore();const s=this.sliderThumbPosition();t.save(),t.translate(this.halfCanvasSize,this.halfCanvasSize),t.lineWidth=2,t.strokeStyle="rgba(130, 130, 130, 0.75)",t.beginPath(),t.moveTo(0,0),t.lineTo(s.x,s.y),t.stroke(),e&&(t.beginPath(),t.fillStyle="rgba(66, 133, 244, 0.4)",t.arc(s.x,s.y,T+2,0,2*Math.PI),t.fill()),t.beginPath(),t.fillStyle="#4285F4",t.arc(s.x,s.y,T,0,2*Math.PI),t.fill(),t.restore()}onButtonClick(e){const t=e.currentTarget===this.insetButton;t&&this.model.inset()||!t&&!this.model.inset()||(this.model.setInset(t),this.updateButtons(),this.dispatchEventToListeners("ShadowChanged",this.model))}handleValueModification(e){const t=e.currentTarget,s=Se(t.value,e,o);if(!s)return;const i=u.parse(s);if(!i)return;e.currentTarget===this.blurInput&&i.amount<0&&(i.amount=0),t.value=i.asCSSText(),t.selectionStart=0,t.selectionEnd=t.value.length,this.onTextInput(e),e.consume(!0);function o(r,a,d){return d.length||(d=f),r+a+d}}onTextInput(e){const t=e.currentTarget;this.changedElement=t,this.changedElement.classList.remove("invalid");const s=u.parse(t.value);!s||t===this.blurInput&&s.amount<0||(t===this.xInput?(this.model.setOffsetX(s),this.updateCanvas(!1)):t===this.yInput?(this.model.setOffsetY(s),this.updateCanvas(!1)):t===this.blurInput?(this.model.setBlurRadius(s),this.blurSlider.value=s.amount.toString()):t===this.spreadInput&&(this.model.setSpreadRadius(s),this.spreadSlider.value=s.amount.toString()),this.dispatchEventToListeners("ShadowChanged",this.model))}onTextBlur(){if(!this.changedElement)return;let e=this.changedElement.value.trim()?u.parse(this.changedElement.value):u.zero();if(e||(e=u.parse(this.changedElement.value+f)),!e){this.changedElement.classList.add("invalid"),this.changedElement=null;return}this.changedElement===this.xInput?(this.model.setOffsetX(e),this.xInput.value=e.asCSSText(),this.updateCanvas(!1)):this.changedElement===this.yInput?(this.model.setOffsetY(e),this.yInput.value=e.asCSSText(),this.updateCanvas(!1)):this.changedElement===this.blurInput?(e.amount<0&&(e=u.zero()),this.model.setBlurRadius(e),this.blurInput.value=e.asCSSText(),this.blurSlider.value=e.amount.toString()):this.changedElement===this.spreadInput&&(this.model.setSpreadRadius(e),this.spreadInput.value=e.asCSSText(),this.spreadSlider.value=e.amount.toString()),this.changedElement=null,this.dispatchEventToListeners("ShadowChanged",this.model)}onSliderInput(e){e.currentTarget===this.blurSlider?(this.model.setBlurRadius(new u(Number(this.blurSlider.value),this.model.blurRadius().unit||f)),this.blurInput.value=this.model.blurRadius().asCSSText(),this.blurInput.classList.remove("invalid")):e.currentTarget===this.spreadSlider&&(this.model.setSpreadRadius(new u(Number(this.spreadSlider.value),this.model.spreadRadius().unit||f)),this.spreadInput.value=this.model.spreadRadius().asCSSText(),this.spreadInput.classList.remove("invalid")),this.dispatchEventToListeners("ShadowChanged",this.model)}dragStart(e){this.xySlider.focus(),this.updateCanvas(!0),this.canvasOrigin=new g(this.xySlider.getBoundingClientRect().left+this.halfCanvasSize,this.xySlider.getBoundingClientRect().top+this.halfCanvasSize);const t=new g(e.x-this.canvasOrigin.x,e.y-this.canvasOrigin.y),s=this.sliderThumbPosition();return t.distanceTo(s)>=T&&this.dragMove(e),!0}dragMove(e){let t=new g(e.x-this.canvasOrigin.x,e.y-this.canvasOrigin.y);e.shiftKey&&(t=this.snapToClosestDirection(t));const s=this.constrainPoint(t,this.innerCanvasSize),i=Math.round(s.x/this.innerCanvasSize*x),o=Math.round(s.y/this.innerCanvasSize*x);e.shiftKey?(this.model.setOffsetX(new u(i,this.model.offsetX().unit||f)),this.model.setOffsetY(new u(o,this.model.offsetY().unit||f))):(e.altKey||this.model.setOffsetX(new u(i,this.model.offsetX().unit||f)),pt.eventHasCtrlEquivalentKey(e)||this.model.setOffsetY(new u(o,this.model.offsetY().unit||f))),this.xInput.value=this.model.offsetX().asCSSText(),this.yInput.value=this.model.offsetY().asCSSText(),this.xInput.classList.remove("invalid"),this.yInput.classList.remove("invalid"),this.updateCanvas(!0),this.dispatchEventToListeners("ShadowChanged",this.model)}onCanvasBlur(){this.updateCanvas(!1)}onCanvasArrowKey(e){const t=e;let s=0,i=0;if(t.key==="ArrowRight"?s=1:t.key==="ArrowLeft"?s=-1:t.key==="ArrowUp"?i=-1:t.key==="ArrowDown"&&(i=1),!(!s&&!i)){if(e.consume(!0),s){const o=this.model.offsetX(),r=ae(o.amount+s,-x,x);if(r===o.amount)return;this.model.setOffsetX(new u(r,o.unit||f)),this.xInput.value=this.model.offsetX().asCSSText(),this.xInput.classList.remove("invalid")}if(i){const o=this.model.offsetY(),r=ae(o.amount+i,-x,x);if(r===o.amount)return;this.model.setOffsetY(new u(r,o.unit||f)),this.yInput.value=this.model.offsetY().asCSSText(),this.yInput.classList.remove("invalid")}this.updateCanvas(!0),this.dispatchEventToListeners("ShadowChanged",this.model)}}constrainPoint(e,t){return Math.abs(e.x)<=t&&Math.abs(e.y)<=t?new g(e.x,e.y):e.scale(t/Math.max(Math.abs(e.x),Math.abs(e.y)))}snapToClosestDirection(e){let t=Number.MAX_VALUE,s=e;const i=[new g(0,-1),new g(1,-1),new g(1,0),new g(1,1)];for(const o of i){const r=e.projectOn(o),a=e.distanceTo(r);a<t&&(t=a,s=r)}return s}sliderThumbPosition(){const e=this.model.offsetX().amount/x*this.innerCanvasSize,t=this.model.offsetY().amount/x*this.innerCanvasSize;return this.constrainPoint(new g(e,t),this.innerCanvasSize)}}const Ne=new CSSStyleSheet;Ne.replaceSync(`/*
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  user-select: none;
  padding: 4px 12px 12px;
}

.error-input {
  box-shadow: 0 0 0 1px var(--sys-color-error);
}

.error-text {
  color: var(--sys-color-error);
  padding: 6px 0;
}

.warning-input {
  --override-warning-input-color: #ffdd9e;

  box-shadow: 0 0 0 1px var(--override-warning-input-color);
}

.theme-with-dark-background .warning-input,
:host-context(.theme-with-dark-background) .warning-input {
  --override-warning-input-color: rgb(97 63 0);
}

.hide-warning {
  display: none;
}

.font-section-header {
  font-weight: normal;
  font-size: 17px;
  text-align: left;
}

.font-section-subheader {
  font-size: 12px;
  text-align: left;
  font-weight: bold;
}

.font-selector-section {
  overflow-y: auto;
  padding-bottom: 10px;
}

.font-selector-input {
  width: 204px;
  text-align-last: center;
}

.font-reset-button {
  width: 100%;
  margin-top: 10px;
}

.font-section {
  border-top: 1px solid var(--sys-color-divider);
}

.chrome-select.font-editor-select {
  min-width: 50px;
  min-height: 27px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
  margin: 0;
}

.preview-text {
  max-width: 300px;
  word-break: break-word;
  display: block;
}

.rendered-font-list-label {
  font-weight: bold;
  font-size: 12px;
}

.rendered-font-list {
  padding: 5px 0;
}

.shadow-editor-field {
  height: 24px;
  margin-top: 8px;
  font-size: 12px;
  flex-shrink: 0;
}

.shadow-editor-field:last-of-type {
  margin-bottom: 8px;
}

.shadow-editor-flex-field {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.shadow-editor-field.shadow-editor-blur-field {
  margin-top: 40px;
}

.shadow-editor-2D-slider {
  position: absolute;
  height: 88px;
  width: 88px;
  border: 1px solid var(--divider-line);
  border-radius: 2px;
}

.shadow-editor-label {
  display: inline-block;
  width: 70px;
  height: 24px;
  line-height: 24px;
  margin-right: 8px;
  text-align: left;
}

.shadow-editor-button-left,
.shadow-editor-button-right {
  width: 74px;
  height: 24px;
  padding: 3px 7px;
  line-height: 16px;
  border: 1px solid var(--divider-line);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  text-align: center;
  font-weight: 500;
}

.shadow-editor-button-left {
  border-radius: 2px 0 0 2px;
}

.shadow-editor-button-right {
  border-radius: 0 2px 2px 0;
  border-left-width: 0;
}

.shadow-editor-button-left:hover,
.shadow-editor-button-right:hover {
  box-shadow: 0 1px 1px var(--divider-line);
}

.shadow-editor-button-left:focus,
.shadow-editor-button-right:focus {
  background-color: var(--sys-color-state-focus-highlight);
}

.shadow-editor-text-input {
  width: 50px;
  margin: 8px;
  text-align: center;
  box-shadow: var(--legacy-focus-ring-inactive-shadow);
}

.spectrum-switcher {
  border-radius: 2px;
  height: 20px;
  width: 20px;
  padding: 2px;
  margin-left: 5px;
}

.spectrum-switcher:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.spectrum-switcher:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

/*# sourceURL=fontEditor.css */
`);const os=6;function rs(){return 1}async function Be(n){const e=k.instance().flavor(E);let t;if(e&&e.parentNode&&e.nodeName()!=="HTML"){const[s]=_.instance().models(J),i=n?e.parentNode.id:e.id,r=(await s.getComputedStyleForNode(i).then(He)).replace(/[a-z]/g,"");t=parseFloat(r)}else t=16;return t}async function as(){const n=k.instance().flavor(E),e=vs(n);if(!e||!e.id)return 16;const[t]=_.instance().models(J),i=(await t.getComputedStyleForNode(e.id).then(He)).replace(/[a-z]/g,"");return parseFloat(i)}async function ls(n){return await Be(n)/100}async function cs(){const n=await O();return n?n.height/100:1}async function ds(){const n=await O();return n?n.width/100:1}async function hs(){const n=await O();if(!n)return 1;const e=n.width,t=n.height;return Math.min(e,t)/100}async function us(){const n=await O();if(!n)return 1;const e=n.width,t=n.height;return Math.max(e,t)/100}function ps(){return 37.795}function fs(){return 3.7795}function ms(){return 96}function gs(){return 4/3}function xs(){return 16}function He(n){const e=n.computedStyle;let t=os;if(e[t].name&&e[t].name!=="font-size"){for(let s=0;s<e.length;s++)if(e[s].name==="font-size"){t=s;break}}return e[t].value}function vs(n){let e=n;for(;e&&e.nodeName()!=="HTML"&&e.parentNode;)e=e.parentNode;return e}const ws={expression:"window.innerWidth",includeCommandLineAPI:!1,silent:!0,returnByValue:!1,generatePreview:!1,userGesture:!1,awaitPromise:!0,throwOnSideEffect:!1,disableBreaks:!0,replMode:!1,allowUnsafeEvalBlockedByCSP:!1},bs={expression:"window.innerHeight",includeCommandLineAPI:!1,silent:!0,returnByValue:!1,generatePreview:!1,userGesture:!1,awaitPromise:!0,throwOnSideEffect:!1,disableBreaks:!0,replMode:!1,allowUnsafeEvalBlockedByCSP:!1};async function O(){const n=k.instance().flavor(ft);let e,t;if(n){const s=await n.evaluate(ws,!1,!1),i=await n.evaluate(bs,!1,!1);if("error"in s||"error"in i)return null;s.object&&(e=s.object.value),i.object&&(t=i.object.value)}if(e===void 0||t===void 0){const s=k.instance().flavor(E);if(!s)return null;const i=await s.domModel().target().pageAgent().invoke_getLayoutMetrics(),o=i.visualViewport.zoom?i.visualViewport.zoom:1;t=i.visualViewport.clientHeight/o,e=i.visualViewport.clientWidth/o}return{width:e,height:t}}const p=new Map;p.set("px",rs);p.set("em",Be);p.set("rem",as);p.set("%",ls);p.set("vh",cs);p.set("vw",ds);p.set("vmin",hs);p.set("vmax",us);p.set("cm",ps);p.set("mm",fs);p.set("in",ms);p.set("pt",gs);p.set("pc",xs);async function ys(n,e,t){n===""&&(n="em"),e===""&&(e="em");let s,i;const o=p.get(n),r=p.get(e);if(o&&r)n==="em"||n==="%"?s=await o(t):s=await o(),e==="em"||e==="%"?i=await r(t):i=await r();else return 1;return s/i}const Js=/^[^- ][a-zA-Z-]+$|^-?\+?(?:[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+)[a-zA-Z%]{0,4}$/,ei=/^"[\w \,-]+"$|^'[\w \,-]+'$|^[\w \-]+$/,Ss=/(^[\+\d\.]+)([a-zA-Z%]+)/,ks=/(^[\+\d\.]+)([a-zA-Z%]*)/,Is=/(^[\+\d\.]+)/,Cs=/([\+-0-9\.]+)([a-zA-Z%]+)/,Es=new Set(["px","em","rem","%","vh","vw"]),Ts=new Set(["","px","em","%"]),Ms=new Set(["em","rem","px"]),Ue=["","xx-small","x-small","smaller","small","medium","large","larger","x-large","xx-large"],De=["","normal"],Oe=["","lighter","normal","bold","bolder"],je=["","normal"],y=["inherit","initial","unset"];Ue.push(...y);De.push(...y);Oe.push(...y);je.push(...y);const As=new Set(Ue),Ps=new Set(De),zs=new Set(Oe),Ls=new Set(je),Fs=new Map([["px",{min:0,max:72,step:1}],["em",{min:0,max:4.5,step:.1}],["rem",{min:0,max:4.5,step:.1}],["%",{min:0,max:450,step:1}],["vh",{min:0,max:10,step:.1}],["vw",{min:0,max:10,step:.1}],["vmin",{min:0,max:10,step:.1}],["vmax",{min:0,max:10,step:.1}],["cm",{min:0,max:2,step:.1}],["mm",{min:0,max:20,step:.1}],["in",{min:0,max:1,step:.01}],["pt",{min:0,max:54,step:1}],["pc",{min:0,max:4.5,step:.1}]]),$s=new Map([["",{min:0,max:2,step:.1}],["em",{min:0,max:2,step:.1}],["%",{min:0,max:200,step:1}],["px",{min:0,max:32,step:1}],["rem",{min:0,max:2,step:.1}],["vh",{min:0,max:4.5,step:.1}],["vw",{min:0,max:4.5,step:.1}],["vmin",{min:0,max:4.5,step:.1}],["vmax",{min:0,max:4.5,step:.1}],["cm",{min:0,max:1,step:.1}],["mm",{min:0,max:8.5,step:.1}],["in",{min:0,max:.5,step:.1}],["pt",{min:0,max:24,step:1}],["pc",{min:0,max:2,step:.1}]]),Rs=new Map([["",{min:100,max:700,step:100}]]),Vs=new Map([["px",{min:-10,max:10,step:.01}],["em",{min:-.625,max:.625,step:.001}],["rem",{min:-.625,max:.625,step:.001}],["%",{min:-62.5,max:62.5,step:.1}],["vh",{min:-1.5,max:1.5,step:.01}],["vw",{min:-1.5,max:1.5,step:.01}],["vmin",{min:-1.5,max:1.5,step:.01}],["vmax",{min:-1.5,max:1.5,step:.01}],["cm",{min:-.25,max:.025,step:.001}],["mm",{min:-2.5,max:2.5,step:.01}],["in",{min:-.1,max:.1,step:.001}],["pt",{min:-7.5,max:7.5,step:.01}],["pc",{min:-.625,max:.625,step:.001}]]),ge={regex:Ss,units:Es,keyValues:As,rangeMap:Fs,defaultUnit:"px"},xe={regex:ks,units:Ts,keyValues:Ps,rangeMap:$s,defaultUnit:""},ve={regex:Is,units:null,keyValues:zs,rangeMap:Rs,defaultUnit:null},we={regex:Cs,units:Ms,keyValues:Ls,rangeMap:Vs,defaultUnit:"em"},Ns=["Arial","Bookman","Candara","Comic Sans MS","Courier New","Garamond","Georgia","Helvetica","Impact","Palatino","Roboto","Times New Roman","Verdana"],Bs=["serif","sans-serif","monspace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","emoji","math","fangsong"];async function Hs(){const n=_.instance().models(J);if(n){const e=n[0];if(e){const{fontInfo:t}=await e.getNodeStyleStats();return Array.from(t.keys())}}return[]}function Us(n){switch(n){case 1:return 0;case .1:return 1;case .01:return 2;case .001:return 3;default:return 0}}const l={fontFamily:"Font Family",cssProperties:"CSS Properties",fontSize:"Font Size",lineHeight:"Line Height",fontWeight:"Font Weight",spacing:"Spacing",fallbackS:"Fallback {PH1}",thereIsNoValueToDeleteAtIndexS:"There is no value to delete at index: {PH1}",fontSelectorDeletedAtIndexS:"Font Selector deleted at index: {PH1}",deleteS:"Delete {PH1}",PleaseEnterAValidValueForSText:"* Please enter a valid value for {PH1} text input",thisPropertyIsSetToContainUnits:"This property is set to contain units but does not have a defined corresponding unitsArray: {PH1}",sSliderInput:"{PH1} Slider Input",sTextInput:"{PH1} Text Input",units:"Units",sUnitInput:"{PH1} Unit Input",sKeyValueSelector:"{PH1} Key Value Selector",sToggleInputType:"{PH1} toggle input type",selectorInputMode:"Selector Input Mode",sliderInputMode:"Slider Input Mode"},Ds=B("ui/legacy/components/inline_editor/FontEditor.ts",l),c=H.bind(void 0,Ds);class ti extends q(ke){selectedNode;propertyMap;fontSelectorSection;fontSelectors;fontsList;constructor(e){super(!0),this.selectedNode=k.instance().flavor(E),this.propertyMap=e,this.contentElement.tabIndex=0,this.contentElement.setAttribute("jslog",`${Q("font-editor").parent("mapped").track({keydown:"Enter|Escape"})}`),this.setDefaultFocusedElement(this.contentElement),this.fontSelectorSection=this.contentElement.createChild("div","font-selector-section"),this.fontSelectorSection.createChild("h2","font-section-header").textContent=c(l.fontFamily),this.fontSelectors=[],this.fontsList=null;const t=this.propertyMap.get("font-family");this.createFontSelectorSection(t);const s=this.contentElement.createChild("div","font-section");s.createChild("h2","font-section-header").textContent=c(l.cssProperties);const i=this.getPropertyInfo("font-size",ge.regex),o=this.getPropertyInfo("line-height",xe.regex),r=this.getPropertyInfo("font-weight",ve.regex),a=this.getPropertyInfo("letter-spacing",we.regex);new M("font-size",c(l.fontSize),s,i,ge,this.updatePropertyValue.bind(this),this.resizePopout.bind(this),!0),new M("line-height",c(l.lineHeight),s,o,xe,this.updatePropertyValue.bind(this),this.resizePopout.bind(this),!0),new M("font-weight",c(l.fontWeight),s,r,ve,this.updatePropertyValue.bind(this),this.resizePopout.bind(this),!1),new M("letter-spacing",c(l.spacing),s,a,we,this.updatePropertyValue.bind(this),this.resizePopout.bind(this),!0)}wasShown(){this.registerCSSFiles([Ne])}async createFontSelectorSection(e){if(e){const t=e.split(",");if(await this.createFontSelector(t[0],!0),!y.includes(t[0]))for(let s=1;s<t.length+1;s++)this.createFontSelector(t[s])}else this.createFontSelector("",!0);this.resizePopout()}async createFontsList(){const e=await Hs(),t=new Map,s=this.splitComputedFontArray(e);t.set("Computed Fonts",s);const i=new Map;i.set("System Fonts",Ns),i.set("Generic Families",Bs);const o=[];return o.push(t),o.push(i),o}splitComputedFontArray(e){const t=[];for(const s of e)s.includes(",")?s.split(",").forEach(o=>{t.findIndex(r=>r.toLowerCase()===o.trim().toLowerCase().replace(/"/g,"'"))===-1&&t.push(o.trim().replace(/"/g,""))}):t.findIndex(i=>i.toLowerCase()===s.toLowerCase().replace('"',"'"))===-1&&t.push(s.replace(/"/g,""));return t}async createFontSelector(e,t){if(e=e?e.trim():"",e){const o=e.charAt(0);o==="'"?e=e.replace(/'/g,""):o==='"'&&(e=e.replace(/"/g,""))}const s=this.fontSelectorSection.createChild("div","shadow-editor-field shadow-editor-flex-field");this.fontsList||(this.fontsList=await this.createFontsList());let i;if(t){i=c(l.fontFamily);const o=new Map([["Global Values",y]]),r=[...this.fontsList];r.push(o),this.createSelector(s,i,r,e.trim(),"primary-font-family")}else i=c(l.fallbackS,{PH1:this.fontSelectors.length}),this.createSelector(s,i,this.fontsList,e.trim(),"fallback-font-family")}deleteFontSelector(e,t){let s=this.fontSelectors[e];const i=e===0;if(s.input.value===""&&!t){F(c(l.thereIsNoValueToDeleteAtIndexS,{PH1:e}));return}if(i){const r=this.fontSelectors[1];let a="";r&&(a=r.input.value,s=r);const d=this.fontSelectors[0].input;d.value=a,e=1}if(s.input.parentNode){const r=this.fontSelectors.length>1;if(!i||r){const a=s.input.parentElement;a&&(a.remove(),this.fontSelectors.splice(e,1),this.updateFontSelectorList())}F(c(l.fontSelectorDeletedAtIndexS,{PH1:e}))}this.onFontSelectorChanged(),this.resizePopout();const o=i?0:e-1;this.fontSelectors[o].input.focus()}updateFontSelectorList(){for(let e=0;e<this.fontSelectors.length;e++){const t=this.fontSelectors[e];let s;e===0?s=c(l.fontFamily):s=c(l.fallbackS,{PH1:e}),t.label.textContent=s,A(t.input,s),t.deleteButton.setTitle(c(l.deleteS,{PH1:s})),t.index=e}}getPropertyInfo(e,t){const s=this.propertyMap.get(e);if(s){const i=s,o=i.match(t);if(o){const r=o[1].charAt(0)==="+"?o[1].substr(1):o[1],a=o[2]?o[2]:"";return{value:r,units:a}}return{value:i,units:null}}return{value:null,units:null}}createSelector(e,t,s,i,o){const r=this.fontSelectors.length,a=P(t,s);a.value=i,a.setAttribute("jslog",`${Y(o).track({click:!0,change:!0})}`);const d=Ee(t,"shadow-editor-label",a);a.addEventListener("input",this.onFontSelectorChanged.bind(this),!1),a.addEventListener("keydown",w=>{w.key==="Enter"&&w.consume()},!1),e.appendChild(d),e.appendChild(a);const h=new mt("",e),m=new gt(c(l.deleteS,{PH1:t}),"bin",void 0,"delete");h.appendToolbarItem(m);const v={label:d,input:a,deleteButton:m,index:r};m.addEventListener("Click",()=>{this.deleteFontSelector(v.index)}),m.element.addEventListener("keydown",w=>{xt(w)&&(this.deleteFontSelector(v.index),w.consume())},!1),this.fontSelectors.push(v)}onFontSelectorChanged(){let e="";const t=y.includes(this.fontSelectors[0].input.value);if(t)for(let s=1;s<this.fontSelectors.length;s++)this.deleteFontSelector(s,!0);for(const s of this.fontSelectors){const i=s.input;i.value!==""&&(e===""?e=this.fontSelectors[0].input.value:e+=", "+i.value)}this.fontSelectors[this.fontSelectors.length-1].input.value!==""&&!t&&this.fontSelectors.length<10&&(this.createFontSelector(""),this.resizePopout()),this.updatePropertyValue("font-family",e)}updatePropertyValue(e,t){this.dispatchEventToListeners("FontChanged",{propertyName:e,value:t})}resizePopout(){this.dispatchEventToListeners("FontEditorResized")}}class M{showSliderMode;errorText;propertyInfo;propertyName;staticParams;hasUnits;units;addedUnit;initialRange;boundUpdateCallback;boundResizeCallback;selectedNode;sliderInput;textBoxInput;unitInput;selectorInput;applyNextInput;constructor(e,t,s,i,o,r,a,d){this.showSliderMode=!0;const h=s.createChild("div","shadow-editor-field shadow-editor-flex-field");if(this.errorText=s.createChild("div","error-text"),this.errorText.textContent=c(l.PleaseEnterAValidValueForSText,{PH1:e}),this.errorText.hidden=!0,vt(this.errorText),this.propertyInfo=i,this.propertyName=e,this.staticParams=o,this.hasUnits=d,this.hasUnits&&this.staticParams.units&&this.staticParams.defaultUnit!==null){const v=this.staticParams.defaultUnit;this.units=i.units!==null?i.units:v,this.addedUnit=!this.staticParams.units.has(this.units)}else{if(this.hasUnits)throw new Error(c(l.thisPropertyIsSetToContainUnits,{PH1:e}));this.units=""}this.initialRange=this.getUnitRange(),this.boundUpdateCallback=r,this.boundResizeCallback=a,this.selectedNode=k.instance().flavor(E);const m=Ee(t,"shadow-editor-label");h.append(m),this.sliderInput=this.createSliderInput(h,e),this.textBoxInput=this.createTextBoxInput(h,e),wt(m,this.textBoxInput),this.unitInput=this.createUnitInput(h,`${e}-unit`),this.selectorInput=this.createSelectorInput(h,e),this.createTypeToggle(h,`${e}-value-type`),this.checkSelectorValueAndToggle(),this.applyNextInput=!1}setInvalidTextBoxInput(e){e?this.errorText.hidden&&(this.errorText.hidden=!1,this.textBoxInput.classList.add("error-input"),this.boundResizeCallback()):this.errorText.hidden||(this.errorText.hidden=!0,this.textBoxInput.classList.remove("error-input"),this.boundResizeCallback())}checkSelectorValueAndToggle(){return this.staticParams.keyValues&&this.propertyInfo.value!==null&&this.staticParams.keyValues.has(this.propertyInfo.value)?(this.toggleInputType(),!0):!1}getUnitRange(){let e=0,t=100,s=1;if(this.propertyInfo.value!==null&&/\d/.test(this.propertyInfo.value))if(this.staticParams.rangeMap.get(this.units)){const i=this.staticParams.rangeMap.get(this.units);i&&(e=Math.min(i.min,parseFloat(this.propertyInfo.value)),t=Math.max(i.max,parseFloat(this.propertyInfo.value)),s=i.step)}else{const i=this.staticParams.rangeMap.get("px");i&&(e=Math.min(i.min,parseFloat(this.propertyInfo.value)),t=Math.max(i.max,parseFloat(this.propertyInfo.value)),s=i.step)}else{const i=this.staticParams.rangeMap.get(this.units);i&&(e=i.min,t=i.max,s=i.step)}return{min:e,max:t,step:s}}createSliderInput(e,t){const s=this.initialRange.min,i=this.initialRange.max,o=this.initialRange.step,r=Ce(s,i,-1);if(r.sliderElement.step=o.toString(),r.sliderElement.tabIndex=0,this.propertyInfo.value)r.value=parseFloat(this.propertyInfo.value);else{const a=(s+i)/2;r.value=a}return r.addEventListener("input",a=>{this.onSliderInput(a,!1)}),r.addEventListener("mouseup",a=>{this.onSliderInput(a,!0)}),r.addEventListener("keydown",a=>{(a.key==="ArrowUp"||a.key==="ArrowDown"||a.key==="ArrowLeft"||a.key==="ArrowRight")&&(this.applyNextInput=!0)}),e.appendChild(r),A(r.sliderElement,c(l.sSliderInput,{PH1:this.propertyName})),r.sliderElement.setAttribute("jslog",`${K(t).track({change:!0})}`),r}createTextBoxInput(e,t){const s=Ie("shadow-editor-text-input","number",t);return s.step=this.initialRange.step.toString(),s.classList.add("font-editor-text-input"),this.propertyInfo.value!==null&&(this.propertyInfo.value.charAt(0)==="+"&&(this.propertyInfo.value=this.propertyInfo.value.substr(1)),s.value=this.propertyInfo.value),s.step="any",s.addEventListener("input",this.onTextBoxInput.bind(this),!1),e.appendChild(s),A(s,c(l.sTextInput,{PH1:this.propertyName})),s}createUnitInput(e,t){let s;if(this.hasUnits&&this.staticParams.units){const i=this.propertyInfo.units,o=this.staticParams.units;s=P(c(l.units),o),s.classList.add("font-editor-select"),this.addedUnit&&i&&s.add(new Option(i,i)),i&&(s.value=i),s.addEventListener("change",this.onUnitInput.bind(this),!1)}else s=P(c(l.units),[]),s.classList.add("font-editor-select"),s.disabled=!0;return s.setAttribute("jslog",`${Y(t).track({click:!0,change:!0})}`),s.addEventListener("keydown",i=>{i.key==="Enter"&&i.consume()},!1),e.appendChild(s),A(s,c(l.sUnitInput,{PH1:this.propertyName})),s}createSelectorInput(e,t){const s=P(c(l.sKeyValueSelector,{PH1:this.propertyName}),this.staticParams.keyValues);return s.classList.add("font-selector-input"),this.propertyInfo.value&&(s.value=this.propertyInfo.value),s.addEventListener("input",this.onSelectorInput.bind(this),!1),s.addEventListener("keydown",i=>{i.key==="Enter"&&i.consume()},!1),e.appendChild(s),s.hidden=!0,s.setAttribute("jslog",`${Y(t).track({click:!0,change:!0})}`),s}onSelectorInput(e){if(e.currentTarget){const t=e.currentTarget.value;this.textBoxInput.value="";const s=(parseFloat(this.sliderInput.sliderElement.min)+parseFloat(this.sliderInput.sliderElement.max))/2;this.sliderInput.value=s,this.setInvalidTextBoxInput(!1),this.boundUpdateCallback(this.propertyName,t)}}onSliderInput(e,t){const s=e.currentTarget;if(s){const i=s.value;this.textBoxInput.value=i,this.selectorInput.value="";const o=this.hasUnits?i+this.unitInput.value:i.toString();this.setInvalidTextBoxInput(!1),(t||this.applyNextInput)&&(this.boundUpdateCallback(this.propertyName,o),this.applyNextInput=!1)}}onTextBoxInput(e){const t=e.currentTarget;if(t){const s=t.value,i=s===""?"":this.unitInput.value,o=s+i;this.staticParams.regex.test(o)||s===""&&!t.validationMessage.length?(parseFloat(s)>parseFloat(this.sliderInput.sliderElement.max)?this.sliderInput.sliderElement.max=s:parseFloat(s)<parseFloat(this.sliderInput.sliderElement.min)&&(this.sliderInput.sliderElement.min=s),this.sliderInput.value=parseFloat(s),this.selectorInput.value="",this.setInvalidTextBoxInput(!1),this.boundUpdateCallback(this.propertyName,o)):this.setInvalidTextBoxInput(!0)}}async onUnitInput(e){const t=e.currentTarget,s=t.hasFocus(),i=t.value;t.disabled=!0;const o=this.units,r=await ys(o,i,this.propertyName==="font-size");this.setInputUnits(r,i),this.textBoxInput.value&&this.boundUpdateCallback(this.propertyName,this.textBoxInput.value+i),this.units=i,t.disabled=!1,s&&t.focus()}createTypeToggle(e,t){const s=e.createChild("div","spectrum-switcher"),i=new bt;i.data={iconName:"fold-more",color:"var(--icon-default)",width:"16px",height:"16px"},s.appendChild(i),yt(s,c(l.sToggleInputType,{PH1:this.propertyName})),s.tabIndex=0,self.onInvokeElement(s,this.toggleInputType.bind(this)),St(s),s.setAttribute("jslog",`${kt(t).track({click:!0})}`)}toggleInputType(e){e&&e.key==="Enter"&&e.consume(),this.showSliderMode?(this.sliderInput.hidden=!0,this.textBoxInput.hidden=!0,this.unitInput.hidden=!0,this.selectorInput.hidden=!1,this.showSliderMode=!1,F(c(l.selectorInputMode))):(this.sliderInput.hidden=!1,this.textBoxInput.hidden=!1,this.unitInput.hidden=!1,this.selectorInput.hidden=!0,this.showSliderMode=!0,F(c(l.sliderInputMode)))}setInputUnits(e,t){const s=this.staticParams.rangeMap.get(t);let i,o,r;s?(i=s.min,o=s.max,r=s.step):(i=0,o=100,r=1);let a=!1;const d=Us(r);let h=(i+o)/2;this.textBoxInput.value&&(a=!0,h=parseFloat((parseFloat(this.textBoxInput.value)*e).toFixed(d))),this.sliderInput.sliderElement.min=Math.min(h,i).toString(),this.sliderInput.sliderElement.max=Math.max(h,o).toString(),this.sliderInput.sliderElement.step=r.toString(),this.textBoxInput.step=r.toString(),a&&(this.textBoxInput.value=h.toString()),this.sliderInput.value=h}}const Xe=new CSSStyleSheet;Xe.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.link-swatch-link {
  display: inline;
}

.link-swatch-link:not(.undefined) {
  cursor: pointer;
  text-underline-offset: 2px;
  color: var(--text-link);
}

.link-swatch-link:hover:not(.undefined) {
  text-decoration: underline;
}

.link-swatch-link:focus:not(:focus-visible) {
  outline: none;
}

.link-swatch-link.undefined {
  opacity: 100%;
  color: var(--text-disabled);
}

/*# sourceURL=linkSwatch.css */
`);const ie={sIsNotDefined:"{PH1} is not defined"},Os=B("ui/legacy/components/inline_editor/LinkSwatch.ts",ie),Ke=H.bind(void 0,Os),{render:ne,html:oe,Directives:{ifDefined:be,classMap:js}}=b;class Ye extends HTMLElement{shadow=this.attachShadow({mode:"open"});onLinkActivate=()=>{};#e;connectedCallback(){this.shadow.adoptedStyleSheets=[Xe],It.instance().appendStyle(this.shadow,Ct)}set data(e){this.onLinkActivate=(t,s)=>{s instanceof MouseEvent&&s.button!==0||(e.onLinkActivate(t),s.consume(!0))},e.showTitle=e.showTitle===void 0?!0:e.showTitle,this.render(e)}get linkElement(){return this.#e}render(e){const{isDefined:t,text:s,title:i}=e,o=js({"link-style":!0,"text-button":!0,"link-swatch-link":!0,undefined:!t}),r=t?this.onLinkActivate.bind(this,s.trim()):null,{startNode:a}=ne(oe`<button .disabled=${!t} class=${o}
                     title=${be(e.showTitle?i:void 0)}
                     data-title=${be(e.showTitle?void 0:i)}
                     @click=${r} role="link" tabindex="-1">${s}</button>`,this.shadow,{host:this});a?.nextSibling instanceof HTMLButtonElement&&(this.#e=a?.nextSibling)}}class Xs extends HTMLElement{shadow=this.attachShadow({mode:"open"});#e;constructor(){super(),this.tabIndex=-1,this.addEventListener("focus",()=>{const e=this.shadow.querySelector('[role="link"]');e&&e.focus()})}set data(e){this.render(e)}get link(){return this.#e}render(e){const{variableName:t,fromFallback:s,computedValue:i,onLinkActivate:o}=e,r=!!i&&!s,a=r?i??"":Ke(ie.sIsNotDefined,{PH1:t});this.#e=new Ye,this.#e.data={title:a,showTitle:!1,text:t,isDefined:r,onLinkActivate:o},this.#e.classList.add("css-var-link"),ne(oe`<span data-title=${e.computedValue||""}
          jslog=${Te("css-variable").track({click:!0,hover:!0})}
        >var(${this.#e}<slot name="fallback">${e.fallbackText?`, ${e.fallbackText}`:""}</slot>)</span>`,this.shadow,{host:this})}}class Ks extends HTMLElement{shadow=this.attachShadow({mode:"open"});set data(e){this.render(e)}render(e){const{text:t,isDefined:s,onLinkActivate:i,jslogContext:o}=e,r=s?t:Ke(ie.sIsNotDefined,{PH1:t});ne(oe`<span title=${e.text} jslog=${Te().track({click:!0}).context(o)}><devtools-base-link-swatch .data=${{text:t,isDefined:s,title:r,onLinkActivate:i}}></devtools-base-link-swatch></span>`,this.shadow,{host:this})}}customElements.define("devtools-base-link-swatch",Ye);customElements.define("devtools-link-swatch",Ks);customElements.define("devtools-css-var-swatch",Xs);const We=new CSSStyleSheet;We.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

devtools-icon.bezier-swatch-icon {
  position: relative;
  transform: scale(0.7);
  margin: -5px -2px -3px -4px;
  user-select: none;
  color: var(--icon-css);
  cursor: default;
}

devtools-icon.bezier-swatch-icon:hover {
  color: var(--icon-css-hover);
}

/*# sourceURL=bezierSwatch.css */
`);const Ge=new CSSStyleSheet;Ge.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

devtools-icon.shadow-swatch-icon {
  color: var(--icon-css);
  transform: scale(0.7);
  position: relative;
  margin: -5px -2px -5px -4px;
  user-select: none;
  vertical-align: baseline;
  cursor: pointer;

  &:hover {
    color: var(--icon-css-hover);
  }
}

/*# sourceURL=cssShadowSwatch.css */
`);const{html:Ys}=b;class z extends HTMLSpanElement{iconElementInternal;textElement;constructor(){super();const e=Et(this,{cssFile:[We],delegatesFocus:void 0});this.iconElementInternal=Tt("bezier-curve-filled","bezier-swatch-icon"),this.iconElementInternal.setAttribute("jslog",`${ye("bezier")}`),e.appendChild(this.iconElementInternal),this.textElement=this.createChild("span"),e.createChild("slot")}static create(){let e=z.constructorInternal;return e||(e=Mt("span","bezier-swatch",z),z.constructorInternal=e),e()}bezierText(){return this.textElement.textContent||""}setBezierText(e){this.textElement.textContent=e}hideText(e){this.textElement.hidden=e}iconElement(){return this.iconElementInternal}static constructorInternal=null}class Ws extends HTMLElement{#e=this.attachShadow({mode:"open"});#t;#s;constructor(e){super(),this.#s=e,this.#e.adoptedStyleSheets=[Ge],L(Ys`<devtools-icon name="shadow" class="shadow-swatch-icon"></devtools-icon><slot></slot>`,this.#e,{host:this}),this.#t=this.#e.querySelector("devtools-icon")}model(){return this.#s}iconElement(){return this.#t}}customElements.define("css-shadow-swatch",Ws);const Gs=new CSSStyleSheet;Gs.replaceSync(`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.widget {
  display: flex;
  background: var(--sys-color-cdt-base-container);
  box-shadow: var(--drop-shadow);
  border-radius: 2px;
  overflow: auto;
  user-select: text;
  line-height: 11px;
}

/*# sourceURL=swatchPopover.css */
`);export{z as B,W as C,ti as F,Ks as L,D as V,Ut as a,$ as b,ee as c,Gs as d,_s as e,ei as f,Js as g,ts as h,Xs as i,Jt as j,Vt as k,u as l,Ws as m,ss as n,$t as s};
//# sourceMappingURL=swatchPopover.css-CdLS3b97.js.map
