import{b as g,g as m,bj as p,bW as de,aO as he,aP as l,gf as zt,bf as ue,bh as V,bi as Ue,db as Bt,bM as pe,hY as Ut,aj as E,bn as L,hZ as Fe,h_ as Ft,aN as Ht,h$ as Vt,b6 as R,be as Rt,i0 as qt,cC as Wt,i as Se,bm as $e,cH as ke,dR as Ce,i1 as Ee,bG as Z,hw as Gt,bH as Yt,b1 as Xt,cR as Qt,r as Jt,as as Kt}from"./inspector-CyOA7R9n.js";import"./swatchPopover.css-CdLS3b97.js";import{s as He}from"./inspectorCommon.css-gVYvLA0h.js";const Ve=new CSSStyleSheet;Ve.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.container {
  width: 100%;
  display: inline-block;
}

.container:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

span {
  color: var(--sys-color-token-meta);
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.role-value {
  color: var(--sys-color-token-tag);
}

.attribute-name {
  color: var(--sys-color-token-attribute);
}

.attribute-value {
  color: var(--sys-color-token-attribute-value);
}

/*# sourceURL=accessibilityTreeNode.css */
`);const{html:$}=l,Re={ignored:"Ignored"},Zt=g("panels/elements/components/AccessibilityTreeNode.ts",Re),eo=m.bind(void 0,Zt);function to(n){return n.length>1e4?zt(n,1e4):n}function oo(n){switch(n){case"boolean":case"booleanOrUndefined":case"string":case"number":return!0;default:return!1}}class qe extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=!0;#o="";#n="";#s=[];#r="";set data(e){this.#e=e.ignored,this.#o=e.name,this.#n=e.role,this.#s=e.properties,this.#r=e.id,this.#i()}connectedCallback(){this.#t.adoptedStyleSheets=[Ve]}async#i(){const e=$`<span class='role-value'>${to(this.#n)}</span>`,t=$`"<span class='attribute-value'>${this.#o}</span>"`,o=this.#s.map(({name:r,value:i})=>oo(i.type)?$` <span class='attribute-name'>${r}</span>:&nbsp;<span class='attribute-value'>${i.value}</span>`:p),s=this.#e?$`<span>${eo(Re.ignored)}</span>`:$`${e}&nbsp;${t}${o}`;await de.instance().write(`Accessibility node ${this.#r} render`,()=>{he($`<div class='container'>${s}</div>`,this.#t,{host:this})})}}customElements.define("devtools-accessibility-tree-node",qe);const Qo=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityTreeNode:qe},Symbol.toStringTag,{value:"Module"}));var a;(function(n){n.GRID="grid",n.SUBGRID="subgrid",n.FLEX="flex",n.AD="ad",n.SCROLL_SNAP="scroll-snap",n.CONTAINER="container",n.SLOT="slot",n.TOP_LAYER="top-layer",n.REVEAL="reveal",n.MEDIA="media",n.SCROLL="scroll"})(a||(a={}));function ge(n){switch(n){case a.GRID:return{name:"grid",category:"Layout",enabledByDefault:!0};case a.SUBGRID:return{name:"subgrid",category:"Layout",enabledByDefault:!0};case a.FLEX:return{name:"flex",category:"Layout",enabledByDefault:!0};case a.AD:return{name:"ad",category:"Security",enabledByDefault:!0};case a.SCROLL_SNAP:return{name:"scroll-snap",category:"Layout",enabledByDefault:!0};case a.CONTAINER:return{name:"container",category:"Layout",enabledByDefault:!0};case a.SLOT:return{name:"slot",category:"Layout",enabledByDefault:!0};case a.TOP_LAYER:return{name:"top-layer",category:"Layout",enabledByDefault:!0};case a.REVEAL:return{name:"reveal",category:"Default",enabledByDefault:!0};case a.MEDIA:return{name:"media",category:"Default",enabledByDefault:!1};case a.SCROLL:return{name:"scroll",category:"Layout",enabledByDefault:!0}}}let D;function Te(n){if(!D){D=new Map;for(const{name:e,category:t}of Object.values(a).map(ge))D.set(e,t)}return D.get(n)||"Default"}const We=Object.values(a).map(ge).map(({name:n,enabledByDefault:e})=>({adorner:n,isEnabled:e}));class no{#t=new Map;#e;constructor(e){this.#e=e,this.#s()}updateSettings(e){this.#t=e,this.#o()}getSettings(){return this.#t}isAdornerEnabled(e){return this.#t.get(e)||!1}#o(){const e=[];for(const[t,o]of this.#t)e.push({adorner:t,isEnabled:o});this.#e.set(e)}#n(){const e=this.#e.get();for(const t of e)this.#t.set(t.adorner,t.isEnabled)}#s(){this.#n();const e=new Set(this.#t.keys());for(const{adorner:t,isEnabled:o}of We)e.delete(t),this.#t.has(t)||this.#t.set(t,o);for(const t of e)this.#t.delete(t);this.#o()}}const so=["Security","Layout","Default"],ie=new Map(so.map((n,e)=>[n,e+1]));function ro(n,e){const t=ie.get(Te(n))||Number.POSITIVE_INFINITY,o=ie.get(Te(e))||Number.POSITIVE_INFINITY;return t-o}const Jo=Object.freeze(Object.defineProperty({__proto__:null,AdornerCategoryOrder:ie,AdornerManager:no,DefaultAdornerSettings:We,get RegisteredAdorners(){return a},compareAdornerNamesByCategory:ro,getRegisteredAdorner:ge},Symbol.toStringTag,{value:"Module"})),Ge=new CSSStyleSheet;Ge.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.adorner-settings-pane {
  display: flex;
  height: auto;
  padding: var(--sys-size-4) var(--sys-size-6);
  color: var(--sys-color-on-surface);
  font-size: 12px;
  align-items: center;

  & > .settings-title {
    font-weight: var(--ref-typeface-weight-medium);
    margin-right: var(--sys-size-4);
    min-width: fit-content;
  }

  & > .setting-list {
    display: flex;
    flex-wrap: wrap;
  }
}

.setting {
  margin-left: 1em;
  display: flex;
  min-width: fit-content;
}

.adorner-status {
  margin: auto 0.4em auto 0;
}

.adorner-status,
.adorner-name {
  vertical-align: middle;
}

/*# sourceURL=adornerSettingsPane.css */
`);const F={settingsTitle:"Show badges",closeButton:"Close"},io=g("panels/elements/components/AdornerSettingsPane.ts",F),ee=m.bind(void 0,io),{render:ao,html:Le}=l;class q extends Event{static eventName="adornersettingupdated";data;constructor(e,t,o){super(q.eventName,{}),this.data={adornerName:e,isEnabledNow:t,newSettings:o}}}class Ye extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=new Map;connectedCallback(){this.#t.adoptedStyleSheets=[ue,Ge]}set data(e){this.#e=new Map(e.settings.entries()),this.#n()}show(){this.classList.remove("hidden");const e=this.#t.querySelector(".adorner-settings-pane");e&&e.focus()}hide(){this.classList.add("hidden")}#o(e){const t=e.target,o=t.dataset.adorner;if(o===void 0)return;const s=t.checked;this.#e.set(o,s),this.dispatchEvent(new q(o,s,this.#e)),this.#n()}#n(){const e=[];for(const[t,o]of this.#e)e.push(Le`
        <label class="setting" title=${t}>
          <input
            class="adorner-status"
            type="checkbox" name=${t}
            .checked=${o}
            jslog=${V(t).track({change:!0})}
            data-adorner=${t}>
          <span class="adorner-name">${t}</span>
        </label>
      `);ao(Le`
      <div class="adorner-settings-pane" tabindex="-1" jslog=${Ue("adorner-settings")}>
        <div class="settings-title">${ee(F.settingsTitle)}</div>
        <div class="setting-list" @change=${this.#o}>
          ${e}
        </div>
        <devtools-button aria-label=${ee(F.closeButton)}
                                             .iconName=${"cross"}
                                             .size=${"SMALL"}
                                             .title=${ee(F.closeButton)}
                                             .variant=${"icon"}
                                             jslog=${Bt().track({click:!0})}
                                             @click=${this.hide}></devtools-button>
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-adorner-settings-pane",Ye);const Ko=Object.freeze(Object.defineProperty({__proto__:null,AdornerSettingUpdatedEvent:q,AdornerSettingsPane:Ye},Symbol.toStringTag,{value:"Module"})),Xe=new CSSStyleSheet;Xe.replaceSync(`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.icon-link {
  color: var(--text-link);
  width: 13px;
  height: 13px;

  &:hover {
    cursor: pointer;
  }
}

/*# sourceURL=anchorFunctionLinkSwatch.css */
`);const Qe={jumpToAnchorNode:"Jump to anchor node"},lo=g("panels/elements/components/AnchorFunctionLinkSwatch.ts",Qe),co=m.bind(void 0,lo),{render:Ie,html:P}=l;class Je extends HTMLElement{#t=this.attachShadow({mode:"open"});#e;constructor(e){super(),this.#e=e}dataForTest(){return this.#e}connectedCallback(){this.#t.adoptedStyleSheets=[Xe],this.render()}set data(e){this.#e=e,this.render()}#o(e){e.stopPropagation(),this.#e.onLinkActivate()}#n(){return P`<devtools-link-swatch
      @mouseenter=${this.#e.onMouseEnter}
      @mouseleave=${this.#e.onMouseLeave}
      .data=${{text:this.#e.identifier,isDefined:!!this.#e.anchorNode,jslogContext:"anchor-link",onLinkActivate:this.#e.onLinkActivate}}></devtools-link-swatch>`}#s(){return P`<devtools-icon
      role='button'
      title=${co(Qe.jumpToAnchorNode)}
      class='icon-link'
      name='open-externally'
      jslog=${pe("jump-to-anchor-node").track({click:!0})}
      @mouseenter=${this.#e.onMouseEnter}
      @mouseleave=${this.#e.onMouseLeave}
      @mousedown=${e=>e.stopPropagation()}
      @click=${this.#o}
    ></devtools-icon>`}render(){!this.#e.identifier&&!this.#e.anchorNode||(this.#e.identifier?Ie(P`${this.#n()}${this.#e.needsSpace?" ":""}`,this.#t,{host:this}):Ie(P`${this.#s()}${this.#e.needsSpace?" ":""}`,this.#t,{host:this}))}}customElements.define("devtools-anchor-function-link-swatch",Je);const Zo=Object.freeze(Object.defineProperty({__proto__:null,AnchorFunctionLinkSwatch:Je},Symbol.toStringTag,{value:"Module"})),Ke=new CSSStyleSheet;Ke.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  position: relative;
  overflow: hidden;
  flex: auto;
  text-overflow: ellipsis;
}

.computed-style-property {
  --goto-size: 16px;

  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  min-height: 16px;
  box-sizing: border-box;
  padding-top: 2px;
  white-space: nowrap;
  user-select: text;
}

.computed-style-property:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  cursor: text;
}

.computed-style-property.inherited {
  opacity: 75%;
  font-style: italic;
}

.property-name,
.property-value {
  display: contents;
  overflow: hidden;
  text-overflow: ellipsis;
}

.property-name {
  width: 16em;
  max-width: 52%;
  margin-right: calc(var(--goto-size) / 2);
  display: inline-block;
  vertical-align: text-top;
  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */
}

.property-value {
  margin-left: 2em;
}

.goto {
  display: none;
  cursor: pointer;
  position: absolute;
  width: var(--goto-size);
  height: var(--goto-size);
  margin: -1px 0 0 calc(-1 * var(--goto-size));
  mask: var(--image-file-goto-filled) center / contain no-repeat;
  background-color: var(--sys-color-primary-bright);
}

.computed-style-property:hover .goto {
  display: inline-block;
}

.hidden {
  display: none;
}
/* narrowed styles */
:host-context(.computed-narrow) .computed-style-property {
  white-space: normal;

  & .goto {
    display: none;
    margin-left: 0;
  }
}

:host-context(.computed-narrow) .property-name,
:host-context(.computed-narrow) .property-value {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  white-space: nowrap;
}

:host-context(.computed-narrow) .computed-style-property:not(.inherited):hover {
  & .property-value {
    margin-left: var(--goto-size);
  }

  & .goto {
    display: inline-block;
  }
}
/* high-contrast styles */
@media (forced-colors: active) {
  .computed-style-property.inherited {
    opacity: 100%;
  }

  .computed-style-property:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .computed-style-property:hover * {
    color: HighlightText;
  }

  .goto {
    background-color: HighlightText;
  }
}

/*# sourceURL=computedStyleProperty.css */
`);const{render:ho,html:Me}=l;class W extends Event{static eventName="onnavigatetosource";constructor(){super(W.eventName,{bubbles:!0,composed:!0})}}class Ze extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=!1;#o=!1;connectedCallback(){this.#t.adoptedStyleSheets=[Ke],this.#s()}set inherited(e){e!==this.#e&&(this.#e=e,this.#s())}set traceable(e){e!==this.#o&&(this.#o=e,this.#s())}#n(){this.dispatchEvent(new W)}#s(){ho(Me`
      <div class="computed-style-property ${this.#e?"inherited":""}">
        <div class="property-name">
          <slot name="name"></slot>
        </div>
        <span class="hidden" aria-hidden="false">: </span>
        ${this.#o?Me`<span class="goto" @click=${this.#n} jslog=${pe("elements.jump-to-style").track({click:!0})}></span>`:null}
        <div class="property-value">
          <slot name="value"></slot>
        </div>
        <span class="hidden" aria-hidden="false">;</span>
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-computed-style-property",Ze);const en=Object.freeze(Object.defineProperty({__proto__:null,ComputedStyleProperty:Ze,NavigateToSourceEvent:W},Symbol.toStringTag,{value:"Module"})),et=new CSSStyleSheet;et.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
}

.computed-style-trace {
  margin-left: 16px;
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.computed-style-trace:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  cursor: text;
}

.goto {
  /* TODO: reuse with ComputedStyleProperty */
  --size: 16px;

  display: none;
  cursor: pointer;
  position: absolute;
  width: var(--size);
  height: var(--size);
  margin: -1px 0 0 calc(-1 * var(--size));
  mask: var(--image-file-goto-filled) center / contain no-repeat;
  background-color: var(--sys-color-surface-variant);
}

.computed-style-trace:hover .goto {
  display: inline-block;
}

.devtools-link {
  color: var(--sys-color-on-surface);
  text-decoration-color: var(--sys-color-token-subtle);
  text-decoration-line: underline;
  cursor: pointer;
}

.trace-value {
  margin-left: 16px;
}

.computed-style-trace.inactive slot[name="trace-value"] {
  text-decoration: line-through;
}

.trace-selector {
  --override-trace-selector-color: var(--sys-color-neutral-bright);

  color: var(--override-trace-selector-color);
  padding-left: 2em;
}

.trace-link {
  user-select: none;
  float: right;
  padding-left: 1em;
  position: relative;
  z-index: 1;
}
/* high-contrast styles */
@media (forced-colors: active) {
  .computed-style-trace:hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .goto {
    background-color: Highlight;
  }

  .computed-style-trace:hover * {
    color: HighlightText;
  }

  .computed-style-trace:hover .trace-selector {
    --override-trace-selector-color: HighlightText;
  }
}

/*# sourceURL=computedStyleTrace.css */
`);const{render:uo,html:po}=l;class tt extends HTMLElement{#t=this.attachShadow({mode:"open"});#e="";#o=!1;#n=()=>{};#s;connectedCallback(){this.#t.adoptedStyleSheets=[et],Ut(this.#t)}set data(e){this.#e=e.selector,this.#o=e.active,this.#n=e.onNavigateToSource,this.#s=e.ruleOriginNode,this.#r()}#r(){uo(po`
      <div class="computed-style-trace ${this.#o?"active":"inactive"}">
        <span class="goto" @click=${this.#n}></span>
        <slot name="trace-value" @click=${this.#n}></slot>
        <span class="trace-selector">${this.#e}</span>
        <span class="trace-link">${this.#s}</span>
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-computed-style-trace",tt);const tn=Object.freeze(Object.defineProperty({__proto__:null,ComputedStyleTrace:tt},Symbol.toStringTag,{value:"Module"})),ot=new CSSStyleSheet;ot.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 6px;
}

.hint-popup-wrapper {
  max-width: 232px;
  font-size: 12px;
  line-height: 1.4;
}

code {
  font-weight: bold;
  font-family: inherit;
}

.hint-popup-possible-fix {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

/*# sourceURL=cssHintDetailsView.css */
`);const nt={learnMore:"Learn More"},go=g("panels/elements/components/CSSHintDetailsView.ts",nt),mo=m.bind(void 0,go),{render:fo,html:te,Directives:Ne}=l;class st extends HTMLElement{#t=this.attachShadow({mode:"open"});#e;constructor(e){super(),this.#e=e,this.#t.adoptedStyleSheets=[ot],this.#o()}#o(){const e=this.#e.getLearnMoreLink();fo(te`
        <div class="hint-popup-wrapper">
          <div class="hint-popup-reason">
            ${Ne.unsafeHTML(this.#e.getMessage())}
          </div>
          ${this.#e.getPossibleFixMessage()?te`
              <div class="hint-popup-possible-fix">
                  ${Ne.unsafeHTML(this.#e.getPossibleFixMessage())}
                  ${e?te`
                      <x-link id="learn-more" href=${e} class="clickable underlined unbreakable-text">
                          ${mo(nt.learnMore)}
                      </x-link>
                  `:""}
              </div>
          `:""}
        </div>
      `,this.#t,{host:this})}}customElements.define("devtools-css-hint-details-view",st);const on=Object.freeze(Object.defineProperty({__proto__:null,CSSHintDetailsView:st},Symbol.toStringTag,{value:"Module"})),rt=new CSSStyleSheet;rt.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 6px;
}

.docs-popup-wrapper {
  max-width: 350px;
  font-size: 12px;
  line-height: 1.4;
}

.docs-popup-section {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.dont-show {
  display: inline-flex;
  align-items: center;
}

/*# sourceURL=cssPropertyDocsView.css */
`);const ae={learnMore:"Learn more",dontShow:"Don't show"},yo=g("panels/elements/components/CSSPropertyDocsView.ts",ae),je=m.bind(void 0,yo),{render:vo,html:oe}=l;class it extends HTMLElement{#t=this.attachShadow({mode:"open"});#e;constructor(e){super(),this.#e=e,this.#t.adoptedStyleSheets=[ue,rt],this.#n()}#o(e){const t=!e.target.checked;E.instance().moduleSetting("show-css-property-documentation-on-hover").set(t)}#n(){const e=this.#e.description,t=this.#e.references?.[0].url;vo(oe`
      <div class="docs-popup-wrapper">
        ${e?oe`
          <div id="description">
            ${e}
          </div>
        `:p}
        ${t?oe`
          <div class="docs-popup-section footer">
            <x-link
              id="learn-more"
              href=${t}
              class="clickable underlined unbreakable-text"
            >
              ${je(ae.learnMore)}
            </x-link>
            <label class="dont-show">
              <input type="checkbox" @change=${this.#o} jslog=${V("css-property-doc").track({change:!0})} />
              ${je(ae.dontShow)}
            </label>
          </div>
        `:p}
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-css-property-docs-view",it);const nn=Object.freeze(Object.defineProperty({__proto__:null,CSSPropertyDocsView:it},Symbol.toStringTag,{value:"Module"})),bo=new Set(["tb","tb-rl","vertical-lr","vertical-rl"]);function le(n){if(n==="left-to-right")return"right-to-left";if(n==="right-to-left")return"left-to-right";if(n==="top-to-bottom")return"bottom-to-top";if(n==="bottom-to-top")return"top-to-bottom";throw new Error("Unknown PhysicalFlexDirection")}function Oe(n){return{...n,"row-reverse":le(n.row),"column-reverse":le(n.column)}}function y(n){const e=n.get("direction")==="rtl",t=n.get("writing-mode");return t&&bo.has(t)?Oe({row:e?"bottom-to-top":"top-to-bottom",column:t==="vertical-lr"?"left-to-right":"right-to-left"}):Oe({row:e?"right-to-left":"left-to-right",column:"top-to-bottom"})}function at(n){let e=!0,t=!1,o=-90;return n==="right-to-left"?(o=90,t=!1,e=!1):n==="top-to-bottom"?(o=0,e=!1,t=!1):n==="bottom-to-top"&&(o=0,e=!1,t=!0),{iconName:"flex-direction",rotate:o,scaleX:e?-1:1,scaleY:t?-1:1}}function me(n,e){return{iconName:n,rotate:e==="right-to-left"?90:e==="left-to-right"?-90:0,scaleX:1,scaleY:1}}function fe(n,e){return{iconName:n,rotate:e==="top-to-bottom"?90:e==="bottom-to-top"?-90:0,scaleX:e==="right-to-left"?-1:1,scaleY:1}}function lt(n,e){return{iconName:n,rotate:e==="top-to-bottom"?90:e==="bottom-to-top"?-90:0,scaleX:e==="right-to-left"?-1:1,scaleY:1}}function ye(n,e){return{iconName:n,rotate:e==="right-to-left"?90:e==="left-to-right"?-90:0,scaleX:1,scaleY:1}}function b(n){function e(t){const o=y(t);return at(o[n])}return e}function d(n){function e(t){const o=y(t),s=new Map([["column",o.row],["row",o.column],["column-reverse",o.row],["row-reverse",o.column]]),r=t.get("flex-direction")||"row",i=s.get(r);if(!i)throw new Error("Unknown direction for flex-align icon");return me(n,i)}return e}function x(n){function e(t){const o=y(t);return me(n,o.column)}return e}function k(n){function e(t){const o=y(t);return fe(n,o[t.get("flex-direction")||"row"])}return e}function C(n){function e(t){const o=y(t);return fe(n,o.row)}return e}function A(n){function e(t){const o=y(t);return lt(n,o.row)}return e}function N(n){function e(t){const o=y(t),s=new Map([["column",o.row],["row",o.column],["column-reverse",o.row],["row-reverse",o.column]]),r=t.get("flex-direction")||"row",i=s.get(r);if(!i)throw new Error("Unknown direction for flex-align icon");return ye(n,i)}return e}function j(n){function e(t){const o=y(t);return ye(n,o.column)}return e}function S(){return{iconName:"align-items-baseline",rotate:0,scaleX:1,scaleY:1}}function _(n){function e(t,o){return N(n)(o)}return e}function z(n){function e(t,o){return j(n)(o)}return e}function ct(n,e){return{iconName:n,rotate:e==="bottom-to-top"||e==="top-to-bottom"?90:0,scaleX:1,scaleY:1}}function De(n){function e(t){const o=y(t),s=t.get("flex-direction")||"row";return ct(n,o[s])}return e}const xo=new Map([["flex-direction: row",b("row")],["flex-direction: column",b("column")],["flex-direction: column-reverse",b("column-reverse")],["flex-direction: row-reverse",b("row-reverse")],["flex-direction: initial",b("row")],["flex-direction: unset",b("row")],["flex-direction: revert",b("row")],["align-content: center",d("align-content-center")],["align-content: space-around",d("align-content-space-around")],["align-content: space-between",d("align-content-space-between")],["align-content: stretch",d("align-content-stretch")],["align-content: space-evenly",d("align-content-space-evenly")],["align-content: flex-end",d("align-content-end")],["align-content: flex-start",d("align-content-start")],["align-content: start",d("align-content-start")],["align-content: end",d("align-content-end")],["align-content: normal",d("align-content-stretch")],["align-content: revert",d("align-content-stretch")],["align-content: unset",d("align-content-stretch")],["align-content: initial",d("align-content-stretch")],["justify-content: center",k("justify-content-center")],["justify-content: space-around",k("justify-content-space-around")],["justify-content: space-between",k("justify-content-space-between")],["justify-content: space-evenly",k("justify-content-space-evenly")],["justify-content: flex-end",k("justify-content-end")],["justify-content: flex-start",k("justify-content-start")],["align-items: stretch",N("align-items-stretch")],["align-items: flex-end",N("align-items-end")],["align-items: flex-start",N("align-items-start")],["align-items: center",N("align-items-center")],["align-items: baseline",S],["align-content: baseline",S],["flex-wrap: wrap",De("flex-wrap")],["flex-wrap: nowrap",De("flex-no-wrap")]]),wo=new Map([["align-self: baseline",S],["align-self: center",_("align-self-center")],["align-self: flex-start",_("align-self-start")],["align-self: flex-end",_("align-self-end")],["align-self: stretch",_("align-self-stretch")]]),So=new Map([["align-content: center",x("align-content-center")],["align-content: space-around",x("align-content-space-around")],["align-content: space-between",x("align-content-space-between")],["align-content: stretch",x("align-content-stretch")],["align-content: space-evenly",x("align-content-space-evenly")],["align-content: end",x("align-content-end")],["align-content: start",x("align-content-start")],["align-content: baseline",S],["justify-content: center",C("justify-content-center")],["justify-content: space-around",C("justify-content-space-around")],["justify-content: space-between",C("justify-content-space-between")],["justify-content: space-evenly",C("justify-content-space-evenly")],["justify-content: end",C("justify-content-end")],["justify-content: start",C("justify-content-start")],["align-items: stretch",j("align-items-stretch")],["align-items: end",j("align-items-end")],["align-items: start",j("align-items-start")],["align-items: center",j("align-items-center")],["align-items: baseline",S],["justify-items: center",A("justify-items-center")],["justify-items: stretch",A("justify-items-stretch")],["justify-items: end",A("justify-items-end")],["justify-items: start",A("justify-items-start")],["justify-items: baseline",S]]),$o=new Map([["align-self: baseline",S],["align-self: center",z("align-self-center")],["align-self: start",z("align-self-start")],["align-self: end",z("align-self-end")],["align-self: stretch",z("align-self-stretch")]]),Pe=n=>{const e=n?.get("display");return e==="flex"||e==="inline-flex"},Ae=n=>{const e=n?.get("display");return e==="grid"||e==="inline-grid"};function ko(n,e,t){if(Pe(e)){const o=ve(n,e);if(o)return o}if(Pe(t)){const o=dt(n,e,t);if(o)return o}if(Ae(e)){const o=be(n,e);if(o)return o}if(Ae(t)){const o=ht(n,e,t);if(o)return o}return null}function ve(n,e){const t=xo.get(n);return t?t(e||new Map):null}function dt(n,e,t){const o=wo.get(n);return o?o(e||new Map,t||new Map):null}function be(n,e){const t=So.get(n);return t?t(e||new Map):null}function ht(n,e,t){const o=$o.get(n);return o?o(e||new Map,t||new Map):null}const sn=Object.freeze(Object.defineProperty({__proto__:null,findFlexContainerIcon:ve,findFlexItemIcon:dt,findGridContainerIcon:be,findGridItemIcon:ht,findIcon:ko,getPhysicalDirections:y,reverseDirection:le,roateFlexWrapIcon:ct,rotateAlignContentIcon:me,rotateAlignItemsIcon:ye,rotateFlexDirectionIcon:at,rotateJustifyContentIcon:fe,rotateJustifyItemsIcon:lt},Symbol.toStringTag,{value:"Module"})),ut=new CSSStyleSheet;ut.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.query:not(.editing-query) {
  overflow: hidden;
}

.editable .query-text {
  color: var(--sys-color-on-surface);
}

.editable .query-text:hover {
  text-decoration: var(--override-styles-section-text-hover-text-decoration);
  cursor: var(--override-styles-section-text-hover-cursor);
}

/*# sourceURL=cssQuery.css */
`);const{render:Co,html:B}=l;class pt extends HTMLElement{#t=this.attachShadow({mode:"open"});#e="";#o;#n="";#s;#r;set data(e){this.#e=e.queryPrefix,this.#o=e.queryName,this.#n=e.queryText,this.#s=e.onQueryTextClick,this.#r=e.jslogContext,this.#i()}connectedCallback(){this.#t.adoptedStyleSheets=[ut,He]}#i(){const e=L({query:!0,editable:!!this.#s}),t=B`
      <span class="query-text" @click=${this.#s}>${this.#n}</span>
    `;Co(B`
      <div class=${e} jslog=${Fe(this.#r).track({click:!0,change:!0})}>
        <slot name="indent"></slot>${this.#e?B`<span>${this.#e+" "}</span>`:p}${this.#o?B`<span>${this.#o+" "}</span>`:p}${t} {
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-css-query",pt);const rn=Object.freeze(Object.defineProperty({__proto__:null,CSSQuery:pt},Symbol.toStringTag,{value:"Module"})),xe=new CSSStyleSheet;xe.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.registered-property-popup-wrapper {
  max-width: 232px;
  font-size: 12px;
  line-height: 1.4;
}

.monospace {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

:host {
  padding: 11px 7px;
}

.divider {
  margin: 8px -7px;
  border: 1px solid var(--sys-color-divider);
}

.registered-property-links {
  margin-top: 8px;
}

.clickable {
  color: var(--sys-color-primary);
  cursor: pointer;
}

.underlined {
  text-decoration: underline;
}

.unbreakable-text {
  white-space: nowrap;
}

.css-property {
  color: var(--webkit-css-property-color, var(--sys-color-token-property-special)); /* stylelint-disable-line plugin/use_theme_colors */ /* See: crbug.com/1152736 for color variable migration. */
}

.title {
  color: var(--sys-color-state-disabled);
}

/*# sourceURL=cssVariableValueView.css */
`);const G={registeredPropertyLinkTitle:"View registered property",invalidPropertyValue:"Invalid property value, expected type {type}",sIsNotDefined:"{PH1} is not defined"},gt=g("panels/elements/components/CSSVariableValueView.ts",G),mt=m.bind(void 0,gt),Eo=Ft.bind(void 0,gt),{render:ft,html:T}=l;function yt(n){return T`<div class="registered-property-links">
            <span role="button" @click=${n?.goToDefinition} class="clickable underlined unbreakable-text">
              ${mt(G.registeredPropertyLinkTitle)}
            </span>
          </div>`}class vt extends HTMLElement{#t=this.attachShadow({mode:"open"});constructor(e){super(),this.#t.adoptedStyleSheets=[xe],this.#e(e)}#e(e){const t=T`<span class="monospace css-property">${e.registration.syntax()}</span>`;ft(T`
      <div class="variable-value-popup-wrapper">
        ${Eo(G.invalidPropertyValue,{type:t})}
        ${yt(e)}
      </div>`,this.#t,{host:this})}}class bt extends HTMLElement{#t=this.attachShadow({mode:"open"});variableName;value;details;constructor({variableName:e,value:t,details:o}){super(),this.#t.adoptedStyleSheets=[xe],this.variableName=e,this.value=t,this.details=o,this.#e()}#e(){const e=this.details?.registration.initialValue(),t=this.details?T`
        <hr class=divider />
        <div class=registered-property-popup-wrapper>
          <div class="monospace">
            <div><span class="css-property">syntax:</span> ${this.details.registration.syntax()}</div>
            <div><span class="css-property">inherits:</span> ${this.details.registration.inherits()}</div>
            ${e?T`<div><span class="css-property">initial-value:</span> ${e}</div>`:""}
          </div>
          ${yt(this.details)}
        </div>`:"",o=this.value??mt(G.sIsNotDefined,{PH1:this.variableName});ft(T`<div class="variable-value-popup-wrapper">
               ${o}
             </div>
             ${t}
             `,this.#t,{host:this})}}customElements.define("devtools-css-variable-value-view",bt);customElements.define("devtools-css-variable-parser-error",vt);const an=Object.freeze(Object.defineProperty({__proto__:null,CSSVariableParserError:vt,CSSVariableValueView:bt},Symbol.toStringTag,{value:"Module"})),xt=new CSSStyleSheet;xt.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* See: https://crbug.com/1227651 for details on changing these to --override pattern. */

.node-label-name {
  color: var(--override-node-text-label-color, var(--sys-color-token-tag));
}

.node-label-class {
  color: var(--override-node-text-class-color, var(--sys-color-token-attribute));
}

.node-label-id {
  color: var(--override-node-text-id-color, var(--sys-color-token-attribute));
}

.node-label-class.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-class, var(--override-node-text-class-color, var(--sys-color-token-attribute)));
}

.node-label-id.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-id, var(--override-node-text-id-color, var(--sys-color-token-attribute)));
}

/*# sourceURL=nodeText.css */
`);const{render:To,html:U}=l;class Lo extends HTMLElement{#t=this.attachShadow({mode:"open"});#e="";#o="";#n=[];connectedCallback(){this.#t.adoptedStyleSheets=[xt]}set data(e){this.#e=e.nodeTitle,this.#o=e.nodeId,this.#n=e.nodeClasses,this.#s()}#s(){const e=!!this.#o,t=!!(this.#n&&this.#n.length>0),o=[U`<span class="node-label-name">${this.#e}</span>`];if(this.#o){const s=L({"node-label-id":!0,"node-multiple-descriptors":t});o.push(U`<span class=${s}>#${CSS.escape(this.#o)}</span>`)}if(this.#n&&this.#n.length>0){const s=this.#n.map(i=>`.${CSS.escape(i)}`).join(""),r=L({"node-label-class":!0,"node-multiple-descriptors":e});o.push(U`<span class=${r}>${s}</span>`)}To(U`
      ${o}
    `,this.#t,{host:this})}}customElements.define("devtools-node-text",Lo);const wt=new CSSStyleSheet;wt.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  --override-node-text-label-color: var(--sys-color-token-tag);
  --override-node-text-class-color: var(--sys-color-token-attribute);
  --override-node-text-id-color: var(--sys-color-token-attribute);
  --override-node-text-multiple-descriptors-id: var(--sys-color-on-surface);
  --override-node-text-multiple-descriptors-class: var(--sys-color-token-property);
}

.crumbs {
  display: inline-flex;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
  pointer-events: auto;
  cursor: default;
  white-space: nowrap;
  position: relative;
  background: var(--sys-color-cdt-base-container);
  font-size: inherit;
  font-family: inherit;
}

.crumbs-window {
  flex-grow: 2;
  overflow: hidden;
}

.crumbs-scroll-container {
  display: inline-flex;
  margin: 0;
  padding: 0;
}

.crumb {
  display: block;
  padding: 0 7px;
  line-height: 23px;
  white-space: nowrap;
}

.overflow {
  padding: 0 5px;
  font-weight: bold;
  display: block;
  border: none;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-token-subtle);
  margin: 1px;
  outline: 1px solid var(--sys-color-neutral-outline);
}

.overflow.hidden {
  display: none;
}

.overflow:disabled {
  opacity: 50%;
}

.overflow:focus {
  outline-color: var(--sys-color-primary);
}

.overflow:not(:disabled):hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  color: var(--sys-color-on-surface);
}

.crumb-link {
  text-decoration: none;
  color: inherit;
}

.crumb:hover {
  background: var(--sys-color-state-hover-on-subtle);
}

.crumb.selected {
  background: var(--sys-color-tonal-container);
}

.crumb:focus {
  outline: var(--sys-color-primary) auto 1px;
}

/*# sourceURL=elementsBreadcrumbs.css */
`);const St={text:"(text)"},Io=g("panels/elements/components/ElementsBreadcrumbsUtils.ts",St),Mo=m.bind(void 0,Io),$t=(n,e)=>e?n.filter(t=>t.nodeType!==Node.DOCUMENT_NODE).map(t=>({title:kt(t),selected:t.id===e.id,node:t,originalNode:t.legacyDomNode})).reverse():[],w=(n,e={})=>({main:n,extras:e}),kt=n=>{switch(n.nodeType){case Node.ELEMENT_NODE:{if(n.pseudoType)return w("::"+n.pseudoType);const e=w(n.nodeNameNicelyCased),t=n.getAttribute("id");t&&(e.extras.id=t);const o=n.getAttribute("class");if(o){const s=new Set(o.split(/\s+/));e.extras.classes=Array.from(s)}return e}case Node.TEXT_NODE:return w(Mo(St.text));case Node.COMMENT_NODE:return w("<!-->");case Node.DOCUMENT_TYPE_NODE:return w("<!doctype>");case Node.DOCUMENT_FRAGMENT_NODE:return w(n.shadowRootType?"#shadow-root":n.nodeNameNicelyCased);default:return w(n.nodeNameNicelyCased)}},ln=Object.freeze(Object.defineProperty({__proto__:null,crumbsToRender:$t,determineElementTitle:kt},Symbol.toStringTag,{value:"Module"})),{html:ne}=l,H={breadcrumbs:"DOM tree breadcrumbs",scrollLeft:"Scroll left",scrollRight:"Scroll right"},No=g("panels/elements/components/ElementsBreadcrumbs.ts",H),se=m.bind(void 0,No);class Y extends Event{static eventName="breadcrumbsnodeselected";legacyDomNode;constructor(e){super(Y.eventName,{}),this.legacyDomNode=e.legacyDomNode}}const I=de.instance();class Ct extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=new ResizeObserver(()=>this.#p());#o=this.#u.bind(this);#n=[];#s=null;#r=!1;#i="start";#l=!1;#a=!1;connectedCallback(){this.#t.adoptedStyleSheets=[wt]}set data(e){this.#s=e.selectedNode,this.#n=e.crumbs,this.#a=!1,Ht(this,this.#o)}disconnectedCallback(){this.#l=!1,this.#e.disconnect()}#c(e){return t=>{t.preventDefault(),this.dispatchEvent(new Y(e))}}async#p(){const e=this.#t.querySelector(".crumbs-scroll-container"),t=this.#t.querySelector(".crumbs-window");if(!e||!t)return;const o=await I.read(()=>t.clientWidth),s=await I.read(()=>e.clientWidth);this.#r?s<o&&(this.#r=!1):s>o&&(this.#r=!0),this.#S(),this.#d(t)}#g(e){return()=>e.highlightNode()}#m(e){return()=>e.clearHighlight()}#f(e){return()=>e.highlightNode()}#y(e){return()=>e.clearHighlight()}#v(){if(!this.#e||this.#l===!0)return;const e=this.#t.querySelector(".crumbs");e&&(this.#e.observe(e),this.#l=!0)}async#b(){const e=this.#t.querySelector(".crumbs-scroll-container"),t=this.#t.querySelector(".crumbs-window");if(!e||!t)return;const o=await I.read(()=>t.clientWidth),s=await I.read(()=>e.clientWidth);this.#r?s<o&&(this.#r=!1,this.#u()):s>o&&(this.#r=!0,this.#u())}#x(e){if(!e.target)return;const t=e.target;this.#d(t)}#d(e){const t=e.scrollWidth-e.clientWidth,o=e.scrollLeft,s=10;o<s?this.#i="start":o>=t-s?this.#i="end":this.#i="middle",this.#u()}#w(e){return()=>{this.#a=!0;const t=this.#t.querySelector(".crumbs-window");if(!t)return;const o=t.clientWidth/2,s=e==="left"?Math.max(Math.floor(t.scrollLeft-o),0):t.scrollLeft+o;t.scrollTo({behavior:"smooth",left:s})}}#h(e,t){const o=L({overflow:!0,[e]:!0,hidden:!this.#r}),s=se(e==="left"?H.scrollLeft:H.scrollRight);return ne`
      <button
        class=${o}
        @click=${this.#w(e)}
        ?disabled=${t}
        aria-label=${s}
        title=${s}>
        <devtools-icon .data=${{iconName:"triangle-"+e,color:"var(--sys-color-on-surface)",width:"12px",height:"10px"}}>
        </devtools-icon>
      </button>
      `}#u(){const e=$t(this.#n,this.#s);he(ne`
      <nav class="crumbs" aria-label=${se(H.breadcrumbs)} jslog=${Vt()}>
        ${this.#h("left",this.#i==="start")}

        <div class="crumbs-window" @scroll=${this.#x}>
          <ul class="crumbs-scroll-container">
            ${e.map(t=>{const o={crumb:!0,selected:t.selected};return ne`
                <li class=${L(o)}
                  data-node-id=${t.node.id}
                  data-crumb="true"
                >
                  <a href="#"
                    draggable=false
                    class="crumb-link"
                    jslog=${R().track({click:!0})}
                    @click=${this.#c(t.node)}
                    @mousemove=${this.#g(t.node)}
                    @mouseleave=${this.#m(t.node)}
                    @focus=${this.#f(t.node)}
                    @blur=${this.#y(t.node)}
                  ><devtools-node-text data-node-title=${t.title.main} .data=${{nodeTitle:t.title.main,nodeId:t.title.extras.id,nodeClasses:t.title.extras.classes}}></devtools-node-text></a>
                </li>`})}
          </ul>
        </div>
        ${this.#h("right",this.#i==="end")}
      </nav>
    `,this.#t,{host:this}),this.#b(),this.#v(),this.#S()}async#S(){if(!this.#s||!this.#t||!this.#r||this.#a)return;const e=this.#s.id,t=this.#t.querySelector(`.crumb[data-node-id="${e}"]`);t&&await I.scroll(()=>{t.scrollIntoView({behavior:"auto"})})}}customElements.define("devtools-elements-breadcrumbs",Ct);const cn=Object.freeze(Object.defineProperty({__proto__:null,ElementsBreadcrumbs:Ct,NodeSelectedEvent:Y},Symbol.toStringTag,{value:"Module"})),Et=new CSSStyleSheet;Et.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: inline-flex;
  vertical-align: middle;
}

:host(.hidden) {
  display: none;
}

.expand-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 14px;
  height: 10px;
  margin: 0 2px;
  border: 1px solid var(--override-adorner-border-color, var(--sys-color-tonal-outline));
  border-radius: 10px;
  background: var(--override-adorner-background-color, var(--sys-color-cdt-base-container));
  padding: 0;
  position: relative;

  &:hover::after,
  &:active::before {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover::after {
    background-color: var(--sys-color-state-hover-on-subtle);
  }

  &:active::before {
    background-color: var(--sys-color-state-ripple-neutral-on-subtle);
  }
}

.expand-button devtools-icon {
  width: 14px;
  height: 14px;
  color: var(--sys-color-primary);
}

/*# sourceURL=elementsTreeExpandButton.css */
`);const{html:jo}=l,Tt={expand:"Expand"},Oo=g("panels/elements/components/ElementsTreeExpandButton.ts",Tt),Do=m.bind(void 0,Oo);class Lt extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=()=>{};set data(e){this.#e=e.clickHandler,this.#o()}#o(){this.#n()}connectedCallback(){this.#t.adoptedStyleSheets=[Et]}#n(){he(jo`<button
        class="expand-button"
        tabindex="-1"
        aria-label=${Do(Tt.expand)}
        jslog=${pe("expand").track({click:!0})}
        @click=${this.#e}><devtools-icon name="dots-horizontal"></devtools-icon></button>`,this.#t,{host:this})}}customElements.define("devtools-elements-tree-expand-button",Lt);const dn=Object.freeze(Object.defineProperty({__proto__:null,ElementsTreeExpandButton:Lt},Symbol.toStringTag,{value:"Module"})),It=new CSSStyleSheet;It.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  font-size: 12px;
}

.header {
  background-color: var(--sys-color-surface2);
  border-bottom: 1px solid var(--sys-color-divider);
  line-height: 1.6;
  overflow: hidden;
  padding: 0 5px;
  white-space: nowrap;
}

.header::marker {
  color: var(--sys-color-on-surface-subtle);
  font-size: 11px;
  line-height: 1;
}

.header:focus {
  background-color: var(--sys-color-tonal-container);
}

.content-section {
  padding: 16px;
  border-bottom: 1px solid var(--sys-color-divider);
  overflow-x: hidden;
}

.content-section-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.1;
  margin: 0;
  padding: 0;
}

.checkbox-settings {
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
}

.checkbox-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 40px;
  width: fit-content;
}

.checkbox-settings .checkbox-label {
  margin-bottom: 8px;
}

.checkbox-settings .checkbox-label:last-child {
  margin-bottom: 0;
}

.checkbox-label input {
  margin: 0 6px 0 0;
  padding: 0;
  flex: none;
}

.checkbox-label input:focus {
  outline: auto 5px -webkit-focus-ring-color;
}

.checkbox-label > span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.select-settings {
  margin-top: 16px;
  width: fit-content;
}

.select-label {
  display: flex;
  flex-direction: column;
}

.select-label span {
  margin-bottom: 4px;
}

.elements {
  margin-top: 12px;
  color: var(--sys-color-token-tag);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  gap: 8px;
}

.element {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.show-element {
  flex: none;
}

.chrome-select {
  min-width: 0;
  max-width: 150px;
}

.color-picker {
  opacity: 0%;
}

.color-picker-label {
  border: 1px solid var(--sys-color-neutral-outline);
  cursor: default;
  display: inline-block;
  flex: none;
  height: 10px;
  width: 10px;
  position: relative;

  &:focus-within {
    outline: 2px solid var(--sys-color-state-focus-ring);
    outline-offset: 2px;
    border-radius: 2px;
  }
}
/* We set dimensions for the invisible input to support quick highlight a11y feature
that uses the dimensions to draw an outline around the element. */
.color-picker-label input[type="color"] {
  width: 100%;
  height: 100%;
  position: absolute;
}

.color-picker-label:hover,
.color-picker-label:focus {
  border: 1px solid var(--sys-color-outline);
  transform: scale(1.2);
}

.node-text-container {
  line-height: 16px;
  padding: 0 0.5ex;
  border-radius: 5px;
}

/*# sourceURL=layoutPane.css */
`);const h={chooseElementOverlayColor:"Choose the overlay color for this element",showElementInTheElementsPanel:"Show element in the Elements panel",grid:"Grid",overlayDisplaySettings:"Overlay display settings",gridOverlays:"Grid overlays",noGridLayoutsFoundOnThisPage:"No grid layouts found on this page",flexbox:"Flexbox",flexboxOverlays:"Flexbox overlays",noFlexboxLayoutsFoundOnThisPage:"No flexbox layouts found on this page",colorPickerOpened:"Color picker opened."},Po=g("panels/elements/components/LayoutPane.ts",h),u=m.bind(void 0,Po),{render:Ao,html:f}=l,Mt=n=>{const e=n.getAttribute("class");return{id:n.id,color:"var(--sys-color-inverse-surface)",name:n.localName(),domId:n.getAttribute("id"),domClasses:e?e.split(/\s+/).filter(o=>!!o):void 0,enabled:!1,reveal:()=>{Jt(n),n.scrollIntoView()},highlight:()=>{n.highlight()},hideHighlight:()=>{Kt.hideDOMNodeHighlight()},toggle:o=>{throw new Error("Not implemented")},setColor(o){throw new Error("Not implemented")}}},_o=n=>n.map(e=>{const t=Mt(e),o=e.id;return{...t,color:e.domModel().overlayModel().colorOfGridInPersistentOverlay(o)||"var(--sys-color-inverse-surface)",enabled:e.domModel().overlayModel().isHighlightedGridInPersistentOverlay(o),toggle:s=>{s?e.domModel().overlayModel().highlightGridInPersistentOverlay(o):e.domModel().overlayModel().hideGridInPersistentOverlay(o)},setColor(s){this.color=s,e.domModel().overlayModel().setColorOfGridInPersistentOverlay(o,s)}}}),zo=n=>n.map(e=>{const t=Mt(e),o=e.id;return{...t,color:e.domModel().overlayModel().colorOfFlexInPersistentOverlay(o)||"var(--sys-color-inverse-surface)",enabled:e.domModel().overlayModel().isHighlightedFlexContainerInPersistentOverlay(o),toggle:s=>{s?e.domModel().overlayModel().highlightFlexContainerInPersistentOverlay(o):e.domModel().overlayModel().hideFlexContainerInPersistentOverlay(o)},setColor(s){this.color=s,e.domModel().overlayModel().setColorOfFlexInPersistentOverlay(o,s)}}});function Bo(n){return n.type==="enum"}function Uo(n){return n.type==="boolean"}const Fo=de.instance();let M;class X extends Rt{#t=this.attachShadow({mode:"open"});#e=[];#o;#n;constructor(){super(),this.#e=this.#l(),this.#o=E.instance().moduleSetting("show-ua-shadow-dom"),this.#n=[],this.#t.adoptedStyleSheets=[ue,It,He]}static instance(){return M||(M=qt(Wt,new X)),M.element.style.minWidth="min-content",M.element.setAttribute("jslog",`${Ue("layout").track({resize:!0})}`),M.getComponent()}modelAdded(e){const t=e.overlayModel();t.addEventListener("PersistentGridOverlayStateChanged",this.render,this),t.addEventListener("PersistentFlexContainerOverlayStateChanged",this.render,this),this.#n.push(e)}modelRemoved(e){const t=e.overlayModel();t.removeEventListener("PersistentGridOverlayStateChanged",this.render,this),t.removeEventListener("PersistentFlexContainerOverlayStateChanged",this.render,this),this.#n=this.#n.filter(o=>o!==e)}async#s(e){const t=this.#o.get(),o=[];for(const s of this.#n)try{const r=await s.getNodesByStyle(e,!0);for(const i of r){const c=s.nodeForId(i);c!==null&&(t||!c.ancestorUserAgentShadowRoot())&&o.push(c)}}catch(r){console.warn(r)}return o}async#r(){return await this.#s([{name:"display",value:"grid"},{name:"display",value:"inline-grid"}])}async#i(){return await this.#s([{name:"display",value:"flex"},{name:"display",value:"inline-flex"}])}#l(){const e=[];for(const t of["show-grid-line-labels","show-grid-track-sizes","show-grid-areas","extend-grid-lines"]){const o=E.instance().moduleSetting(t),s=o.get(),r=o.type();if(!r)throw new Error("A setting provided to LayoutSidebarPane does not have a setting type");if(r!=="boolean"&&r!=="enum")throw new Error("A setting provided to LayoutSidebarPane does not have a supported setting type");const i={type:r,name:o.name,title:o.title()};typeof s=="boolean"?e.push({...i,value:s,options:o.options().map(c=>({...c,value:c.value}))}):typeof s=="string"&&e.push({...i,value:s,options:o.options().map(c=>({...c,value:c.value}))})}return e}onSettingChanged(e,t){E.instance().moduleSetting(e).set(t)}wasShown(){for(const e of this.#e)E.instance().moduleSetting(e.name).addChangeListener(this.render,this);for(const e of this.#n)this.modelRemoved(e);this.#n=[],Se.instance().observeModels($e,this,{scoped:!0}),ke.instance().addFlavorChangeListener(Ce,this.render,this),this.#o.addChangeListener(this.render,this),this.render()}willHide(){for(const e of this.#e)E.instance().moduleSetting(e.name).removeChangeListener(this.render,this);Se.instance().unobserveModels($e,this),ke.instance().removeFlavorChangeListener(Ce,this.render,this),this.#o.removeChangeListener(this.render,this)}#a(e){if(!e.target)return;const o=e.target.parentElement;if(!o)throw new Error("<details> element is not found for a <summary> element");switch(e.key){case"ArrowLeft":o.open=!1;break;case"ArrowRight":o.open=!0;break}}async render(){const e=_o(await this.#r()),t=zo(await this.#i());await Fo.write("LayoutPane render",()=>{Ao(f`
        <details open>
          <summary class="header" @keydown=${this.#a} jslog=${Ee("grid-settings").track({click:!0})}>
            ${u(h.grid)}
          </summary>
          <div class="content-section" jslog=${Z("grid-settings")}>
            <h3 class="content-section-title">${u(h.overlayDisplaySettings)}</h3>
            <div class="select-settings">
              ${this.#c().map(o=>this.#h(o))}
            </div>
            <div class="checkbox-settings">
              ${this.#p().map(o=>this.#w(o))}
            </div>
          </div>
          ${e?f`<div class="content-section" jslog=${Z("grid-overlays")}>
              <h3 class="content-section-title">
                ${e.length?u(h.gridOverlays):u(h.noGridLayoutsFoundOnThisPage)}
              </h3>
              ${e.length?f`<div class="elements">
                  ${e.map(o=>this.#d(o))}
                </div>`:""}
            </div>`:""}
        </details>
        ${t!==void 0?f`
          <details open>
            <summary class="header" @keydown=${this.#a} jslog=${Ee("flexbox-overlays").track({click:!0})}>
              ${u(h.flexbox)}
            </summary>
            ${t?f`<div class="content-section" jslog=${Z("flexbox-overlays")}>
                <h3 class="content-section-title">
                  ${t.length?u(h.flexboxOverlays):u(h.noFlexboxLayoutsFoundOnThisPage)}
                </h3>
                ${t.length?f`<div class="elements">
                    ${t.map(o=>this.#d(o))}
                  </div>`:""}
              </div>`:""}
          </details>
          `:""}
      `,this.#t,{host:this})})}#c(){return this.#e.filter(Bo)}#p(){return this.#e.filter(Uo)}#g(e,t){t.preventDefault(),this.onSettingChanged(e.name,t.target.checked)}#m(e,t){t.preventDefault(),this.onSettingChanged(e.name,t.target.value)}#f(e,t){t.preventDefault(),e.toggle(t.target.checked)}#y(e,t){t.preventDefault(),e.reveal()}#v(e,t){t.preventDefault(),e.setColor(t.target.value),this.render()}#b(e,t){t.preventDefault(),e.highlight()}#x(e,t){t.preventDefault(),e.hideHighlight()}#d(e){const t=this.#f.bind(this,e),o=this.#y.bind(this,e),s=this.#v.bind(this,e),r=this.#b.bind(this,e),i=this.#x.bind(this,e),c=v=>{if(v.key!=="Enter"&&v.key!==" ")return;v.target.querySelector("input").click(),Qt(u(h.colorPickerOpened)),v.preventDefault()},O=v=>{v.key===" "&&v.preventDefault()};return f`<div class="element" jslog=${R()}>
      <label data-element="true" class="checkbox-label">
        <input data-input="true" type="checkbox" .checked=${e.enabled} @change=${t} jslog=${V().track({click:!0})} />
        <span class="node-text-container" data-label="true" @mouseenter=${r} @mouseleave=${i}>
          <devtools-node-text .data=${{nodeId:e.domId,nodeTitle:e.name,nodeClasses:e.domClasses}}></devtools-node-text>
        </span>
      </label>
      <label @keyup=${c} @keydown=${O} class="color-picker-label" style="background: ${e.color};" jslog=${Gt("color").track({click:!0})}>
        <input @change=${s} @input=${s} title=${u(h.chooseElementOverlayColor)} tabindex="0" class="color-picker" type="color" value=${e.color} />
      </label>
      <devtools-button class="show-element"
                                           .title=${u(h.showElementInTheElementsPanel)}
                                           aria-label=${u(h.showElementInTheElementsPanel)}
                                           .iconName=${"select-element"}
                                           .jslogContext=${"elements.select-element"}
                                           .size=${"SMALL"}
                                           .variant=${"icon"}
                                           @click=${o}></devtools-button>
    </div>`}#w(e){const t=this.#g.bind(this,e);return f`<label data-boolean-setting="true" class="checkbox-label" title=${e.title} jslog=${V().track({click:!0}).context(e.name)}>
      <input data-input="true" type="checkbox" .checked=${e.value} @change=${t} />
      <span data-label="true">${e.title}</span>
    </label>`}#h(e){const t=this.#m.bind(this,e);return f`<label data-enum-setting="true" class="select-label" title=${e.title}>
      <select
        class="chrome-select"
        data-input="true"
        jslog=${Yt().track({change:!0}).context(e.name)}
        @change=${t}>
        ${e.options.map(o=>f`<option value=${o.value} .selected=${e.value===o.value} jslog=${R(Xt(o.value)).track({click:!0})}>${o.title}</option>`)}
      </select>
    </label>`}}customElements.define("devtools-layout-pane",X);const hn=Object.freeze(Object.defineProperty({__proto__:null,LayoutPane:X},Symbol.toStringTag,{value:"Module"})),Nt=new CSSStyleSheet;Nt.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.container-link {
  display: inline-block;
  color: var(--sys-color-state-disabled);
}

.container-link:hover {
  color: var(--sys-color-primary);
}

.queried-size-details {
  color: var(--sys-color-on-surface);
}

.axis-icon {
  margin-left: 0.4em;
  width: 16px;
  height: 12px;
  vertical-align: text-top;
}

.axis-icon.hidden {
  display: none;
}

.axis-icon.vertical {
  transform: rotate(90deg);
}

/*# sourceURL=queryContainer.css */
`);const{render:Ho,html:_e}=l;class Q extends Event{static eventName="queriedsizerequested";constructor(){super(Q.eventName,{})}}class jt extends HTMLElement{#t=this.attachShadow({mode:"open"});#e;#o;#n;#s=!1;#r;set data(e){this.#e=e.queryName,this.#o=e.container,this.#n=e.onContainerLinkClick,this.#a()}connectedCallback(){this.#t.adoptedStyleSheets=[Nt]}updateContainerQueriedSizeDetails(e){this.#r=e,this.#a()}async#i(){this.#o?.highlightNode("container-outline"),this.#s=!0,this.dispatchEvent(new Q)}#l(){this.#o?.clearHighlight(),this.#s=!1,this.#a()}#a(){if(!this.#o)return;let e,t;this.#e||(e=this.#o.getAttribute("id"),t=this.#o.getAttribute("class")?.split(/\s+/).filter(Boolean));const o=this.#e||this.#o.nodeNameNicelyCased;Ho(_e`
      →
      <a href="#"
        draggable=false
        class="container-link"
        jslog=${Fe("container-query").track({click:!0})}
        @click=${this.#n}
        @mouseenter=${this.#i}
        @mouseleave=${this.#l}
      ><devtools-node-text
          data-node-title=${o}
          .data=${{nodeTitle:o,nodeId:e,nodeClasses:t}}></devtools-node-text></a>
      ${this.#s?this.#c():p}
    `,this.#t,{host:this})}#c(){if(!this.#r||this.#r.queryAxis==="")return p;const e=this.#r.queryAxis==="size",t=L({"axis-icon":!0,hidden:e,vertical:this.#r.physicalAxis==="Vertical"});return _e`
      <span class="queried-size-details">
        (${this.#r.queryAxis}<devtools-icon
          class=${t} .data=${{iconName:"width",color:"var(--icon-default)"}}></devtools-icon>)
        ${e&&this.#r.width?"width:":p}
        ${this.#r.width||p}
        ${e&&this.#r.height?"height:":p}
        ${this.#r.height||p}
      </span>
    `}}customElements.define("devtools-query-container",jt);const un=Object.freeze(Object.defineProperty({__proto__:null,QueriedSizeRequestedEvent:Q,QueryContainer:jt},Symbol.toStringTag,{value:"Module"})),Ot=new CSSStyleSheet;Ot.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.container {
  padding: 12px;
  min-width: 170px;
}

.row {
  padding: 0;
  color: var(--sys-color-on-surface);
  padding-bottom: 16px;
}

.row:last-child {
  padding-bottom: 0;
}

.property {
  padding-bottom: 4px;
  white-space: nowrap;
}

.property-name {
  color: var(--sys-color-token-property-special);
}

.property-value {
  color: var(--sys-color-on-surface);
}

.property-value.not-authored {
  color: var(--sys-color-state-disabled);
}

.buttons {
  display: flex;
  flex-direction: row;
}

.buttons > :first-child {
  border-radius: 3px 0 0 3px;
}

.buttons > :last-child {
  border-radius: 0 3px 3px 0;
}

.button {
  border: 1px solid var(--sys-color-neutral-outline);
  background-color: var(--sys-color-cdt-base-container);
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button:focus-visible {
  outline: auto 5px -webkit-focus-ring-color;
}

.button devtools-icon {
  color: var(--icon-default);
}

.button:hover devtools-icon {
  color: var(--icon-default-hover);
}

.button.selected devtools-icon {
  color: var(--icon-toggled);
}

/*# sourceURL=stylePropertyEditor.css */
`);const ce={selectButton:"Add {propertyName}: {propertyValue}",deselectButton:"Remove {propertyName}: {propertyValue}"},Vo=g("panels/elements/components/StylePropertyEditor.ts",ce),ze=m.bind(void 0,Vo),{render:Ro,html:re,Directives:Be}=l;class J extends Event{static eventName="propertyselected";data;constructor(e,t){super(J.eventName,{}),this.data={name:e,value:t}}}class K extends Event{static eventName="propertydeselected";data;constructor(e,t){super(K.eventName,{}),this.data={name:e,value:t}}}class we extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=new Map;#o=new Map;editableProperties=[];constructor(){super()}connectedCallback(){this.#t.adoptedStyleSheets=[Ot]}getEditableProperties(){return this.editableProperties}set data(e){this.#e=e.authoredProperties,this.#o=e.computedProperties,this.#n()}#n(){Ro(re`
      <div class="container">
        ${this.editableProperties.map(e=>this.#s(e))}
      </div>
    `,this.#t,{host:this})}#s(e){const t=this.#e.get(e.propertyName),o=!t,s=t||this.#o.get(e.propertyName),r=Be.classMap({"property-value":!0,"not-authored":o});return re`<div class="row">
      <div class="property">
        <span class="property-name">${e.propertyName}</span>: <span class=${r}>${s}</span>
      </div>
      <div class="buttons">
        ${e.propertyValues.map(i=>this.#r(i,e.propertyName,i===t))}
      </div>
    </div>`}#r(e,t,o=!1){const s=`${t}: ${e}`,r=this.findIcon(s,this.#o);if(!r)throw new Error(`Icon for ${s} is not found`);const i=`transform: rotate(${r.rotate}deg) scale(${r.scaleX}, ${r.scaleY})`,c=Be.classMap({button:!0,selected:o}),O={propertyName:t,propertyValue:e},v=ze(o?ce.deselectButton:ce.selectButton,O);return re`
      <button title=${v}
              class=${c}
              jslog=${R().track({click:!0}).context(`${t}-${e}`)}
              @click=${()=>this.#i(t,e,o)}>
        <devtools-icon style=${i} name=${r.iconName}>
        </devtools-icon>
      </button>
    `}#i(e,t,o){o?this.dispatchEvent(new K(e,t)):this.dispatchEvent(new J(e,t))}findIcon(e,t){throw new Error("Not implemented")}}class Dt extends we{jslogContext="cssFlexboxEditor";editableProperties=At;findIcon(e,t){return ve(e,t)}}customElements.define("devtools-flexbox-editor",Dt);class Pt extends we{jslogContext="cssGridEditor";editableProperties=_t;findIcon(e,t){return be(e,t)}}customElements.define("devtools-grid-editor",Pt);const At=[{propertyName:"flex-direction",propertyValues:["row","column","row-reverse","column-reverse"]},{propertyName:"flex-wrap",propertyValues:["nowrap","wrap"]},{propertyName:"align-content",propertyValues:["center","flex-start","flex-end","space-around","space-between","stretch"]},{propertyName:"justify-content",propertyValues:["center","flex-start","flex-end","space-between","space-around","space-evenly"]},{propertyName:"align-items",propertyValues:["center","flex-start","flex-end","stretch","baseline"]}],_t=[{propertyName:"align-content",propertyValues:["center","space-between","space-around","space-evenly","stretch"]},{propertyName:"justify-content",propertyValues:["center","start","end","space-between","space-around","space-evenly"]},{propertyName:"align-items",propertyValues:["center","start","end","stretch","baseline"]},{propertyName:"justify-items",propertyValues:["center","start","end","stretch"]}],pn=Object.freeze(Object.defineProperty({__proto__:null,FlexboxEditableProperties:At,FlexboxEditor:Dt,GridEditableProperties:_t,GridEditor:Pt,PropertyDeselectedEvent:K,PropertySelectedEvent:J,StylePropertyEditor:we},Symbol.toStringTag,{value:"Module"}));export{Qo as A,Ye as B,en as C,cn as E,Dt as F,Pt as G,hn as L,un as Q,a as R,pn as S,Jo as a,Ko as b,Zo as c,tn as d,on as e,nn as f,sn as g,rn as h,an as i,ln as j,dn as k,st as l,bt as m,vt as n,Je as o,pt as p,jt as q,it as r,ko as s,tt as t,ge as u,Lt as v,ro as w,Ct as x,no as y,X as z};
//# sourceMappingURL=StylePropertyEditor-BEGc-Ch4.js.map
