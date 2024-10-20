import{b as p,g as m,bn as I,bM as N,aP as b,eA as k,dA as Me,bH as Ae,b6 as Ie,bf as Ge,bi as qe,bh as We,b1 as ke,cJ as Ye,bG as Je,dO as de,bj as Ke,bO as Xe,ba as Ze,bp as Qe,cj as et,ck as tt,bz as st,aU as Te,o0 as K,o1 as nt,i as G,ar as it,aE as he,dp as ue,aj as rt,C as ot,V as ge,o2 as at,o3 as lt}from"./inspector-CyOA7R9n.js";import{s as ct}from"./inspectorCommon.css-gVYvLA0h.js";class dt{#e;#t;#r;#n;constructor(e){this.#e=[],this.#t=-1,this.#r=0,this.#n=e}readOnlyLock(){++this.#r}releaseReadOnlyLock(){--this.#r}getPreviousValidIndex(){if(this.empty())return-1;let e=this.#t-1;for(;e>=0&&!this.#e[e].valid();)--e;return e<0?-1:e}getNextValidIndex(){let e=this.#t+1;for(;e<this.#e.length&&!this.#e[e].valid();)++e;return e>=this.#e.length?-1:e}readOnly(){return!!this.#r}filterOut(e){if(this.readOnly())return;const t=[];let s=0;for(let n=0;n<this.#e.length;++n)e(this.#e[n])?n<=this.#t&&++s:t.push(this.#e[n]);this.#e=t,this.#t=Math.max(0,this.#t-s)}empty(){return!this.#e.length}active(){return this.empty()?null:this.#e[this.#t]}push(e){this.readOnly()||(this.empty()||this.#e.splice(this.#t+1),this.#e.push(e),this.#e.length>this.#n&&this.#e.shift(),this.#t=this.#e.length-1)}canRollback(){return this.getPreviousValidIndex()>=0}canRollover(){return this.getNextValidIndex()>=0}rollback(){const e=this.getPreviousValidIndex();return e===-1?!1:(this.readOnlyLock(),this.#t=e,this.#e[e].reveal(),this.releaseReadOnlyLock(),!0)}rollover(){const e=this.getNextValidIndex();return e===-1?!1:(this.readOnlyLock(),this.#t=e,this.#e[e].reveal(),this.releaseReadOnlyLock(),!0)}}const Ce=new CSSStyleSheet;Ce.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.highlight-chip-list {
  min-height: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  margin: 8px 0;
  gap: 8px;
  row-gap: 6px;
}

.highlight-chip {
  background: var(--sys-color-cdt-base-container);
  border: 1px solid var(--sys-color-divider);
  height: 18px;
  border-radius: 4px;
  flex: 0 0 auto;
  max-width: 250px;
  position: relative;
  padding: 0 6px;
}

.highlight-chip:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.delete-highlight-container {
  display: none;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 4px;
  width: 24px;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button {
  cursor: pointer;
  width: 13px;
  height: 13px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  border-radius: 50%;
}

.jump-to-highlight-button {
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  height: 100%;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
}

.delete-highlight-button devtools-icon {
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.source-code {
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--sys-color-on-surface);
}

.value {
  color: var(--sys-color-token-tag);
}

.separator {
  white-space: pre;
  flex-shrink: 0;
}

.highlight-chip.focused {
  outline: 2px solid var(--sys-color-state-focus-ring);
  outline-offset: 2px;
}

.highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(241 243 244) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

.highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(231 241 253) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.theme-with-dark-background) .highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(41 42 45) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.theme-with-dark-background) .highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(48 55 68) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

/*# sourceURL=linearMemoryHighlightChipList.css */
`);const X={jumpToAddress:"Jump to this memory",deleteHighlight:"Stop highlighting this memory"},ht=p("panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts",X),pe=m.bind(void 0,ht),{render:ut,html:me}=b;class U extends Event{static eventName="deletememoryhighlight";data;constructor(e){super(U.eventName,{bubbles:!0,composed:!0}),this.data=e}}class te extends Event{static eventName="jumptohighlightedmemory";data;constructor(e){super(te.eventName),this.data=e}}class gt extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=[];#r;connectedCallback(){this.#e.adoptedStyleSheets=[Ce]}set data(e){this.#t=e.highlightInfos,this.#r=e.focusedMemoryHighlight,this.#n()}#n(){const e=[];for(const s of this.#t)e.push(this.#s(s));const t=me`
            <div class="highlight-chip-list">
              ${e}
            </div>
        `;ut(t,this.#e,{host:this})}#s(e){const t=e.name||"<anonymous>",s=e.type,r={focused:e===this.#r,"highlight-chip":!0};return me`
      <div class=${I(r)}>
        <button class="jump-to-highlight-button" title=${pe(X.jumpToAddress)}
            jslog=${N("linear-memory-inspector.jump-to-highlight").track({click:!0})}
            @click=${()=>this.#i(e.startAddress)}>
          <span class="source-code">
            <span class="value">${t}</span><span class="separator">: </span><span>${s}</span>
          </span>
        </button>
        <div class="delete-highlight-container">
          <button class="delete-highlight-button" title=${pe(X.deleteHighlight)}
              jslog=${N("linear-memory-inspector.delete-highlight").track({click:!0})}
              @click=${()=>this.#a(e)}>
            <devtools-icon .data=${{iconName:"cross",color:"var(--icon-default-hover)",width:"16px"}}>
            </devtools-icon>
          </button>
        </div>
      </div>
    `}#i(e){this.dispatchEvent(new te(e))}#a(e){this.dispatchEvent(new U(e))}}customElements.define("devtools-linear-memory-highlight-chip-list",gt);const Le=new CSSStyleSheet;Le.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
}

.view {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  padding: 9px 12px 9px 7px;
}

devtools-linear-memory-inspector-viewer {
  justify-content: center;
}

devtools-linear-memory-inspector-navigator + devtools-linear-memory-inspector-viewer {
  margin-top: 12px;
}

.value-interpreter {
  display: flex;
}

/*# sourceURL=linearMemoryInspector.css */
`);const Oe=new CSSStyleSheet;Oe.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
}

.value-types {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 4px 24px;
  min-height: 24px;
  overflow: hidden;
  padding: 2px 12px;
  align-items: baseline;
  justify-content: start;
}

.value-type-cell {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 24px;
}

.value-type-value-with-link {
  display: flex;
  align-items: center;
}

.value-type-cell-no-mode {
  grid-column: 1 / 3;
}

.jump-to-button {
  display: flex;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--sys-color-cdt-base-container);
}

.signed-divider {
  width: 1px;
  height: 15px;
  background-color: var(--sys-color-divider);
  margin: 0 4px;
}

.selectable-text {
  user-select: text;
}

.selectable-text::selection {
  background-color: var(--sys-color-tonal-container);
}

/*# sourceURL=valueInterpreterDisplay.css */
`);const T={notApplicable:"N/A"},pt=p("panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts",T),j=m.bind(void 0,pt),mt=8;function B(){return new Map(ft)}const ft=new Map([["Integer 8-bit","dec"],["Integer 16-bit","dec"],["Integer 32-bit","dec"],["Integer 64-bit","dec"],["Float 32-bit","dec"],["Float 64-bit","dec"],["Pointer 32-bit","hex"],["Pointer 64-bit","hex"]]),yt=["dec","hex","oct","sci"];function fe(i){return k(i)}function ye(i,e){switch(i){case"Integer 8-bit":case"Integer 16-bit":case"Integer 32-bit":case"Integer 64-bit":return e==="dec"||e==="hex"||e==="oct";case"Float 32-bit":case"Float 64-bit":return e==="sci"||e==="dec";case"Pointer 32-bit":case"Pointer 64-bit":return e==="hex";default:return Me(i,`Unknown value type: ${i}`)}}function vt(i){switch(i){case"Integer 8-bit":case"Integer 16-bit":case"Integer 32-bit":case"Integer 64-bit":case"Float 32-bit":case"Float 64-bit":return!0;default:return!1}}function bt(i,e,t){if(!Re(i))return console.error(`Requesting address of a non-pointer type: ${i}.
`),NaN;try{const s=new DataView(e),n=t==="Little Endian";return i==="Pointer 32-bit"?s.getUint32(0,n):s.getBigUint64(0,n)}catch{return NaN}}function Re(i){return i==="Pointer 32-bit"||i==="Pointer 64-bit"}function wt(i){if(!i.mode)return console.error(`No known way of showing value for ${i.type}`),j(T.notApplicable);const e=new DataView(i.buffer),t=i.endianness==="Little Endian";let s;try{switch(i.type){case"Integer 8-bit":return s=i.signed?e.getInt8(0):e.getUint8(0),x(s,i.mode);case"Integer 16-bit":return s=i.signed?e.getInt16(0,t):e.getUint16(0,t),x(s,i.mode);case"Integer 32-bit":return s=i.signed?e.getInt32(0,t):e.getUint32(0,t),x(s,i.mode);case"Integer 64-bit":return s=i.signed?e.getBigInt64(0,t):e.getBigUint64(0,t),x(s,i.mode);case"Float 32-bit":return s=e.getFloat32(0,t),ve(s,i.mode);case"Float 64-bit":return s=e.getFloat64(0,t),ve(s,i.mode);case"Pointer 32-bit":return s=e.getUint32(0,t),x(s,"hex");case"Pointer 64-bit":return s=e.getBigUint64(0,t),x(s,"hex");default:return Me(i.type,`Unknown value type: ${i.type}`)}}catch{return j(T.notApplicable)}}function ve(i,e){switch(e){case"dec":return i.toFixed(2).toString();case"sci":return i.toExponential(2).toString();default:throw new Error(`Unknown mode for floats: ${e}.`)}}function x(i,e){switch(e){case"dec":return i.toString();case"hex":return i<0?j(T.notApplicable):"0x"+i.toString(16).toUpperCase();case"oct":return i<0?j(T.notApplicable):i.toString(8);default:throw new Error(`Unknown mode for integers: ${e}.`)}}const $={unsignedValue:"`Unsigned` value",changeValueTypeMode:"Change mode",signedValue:"`Signed` value",jumpToPointer:"Jump to address",addressOutOfRange:"Address out of memory range"},xt=p("panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts",$),M=m.bind(void 0,xt),{render:St,html:u}=b,$t=Array.from(B().keys());class se extends Event{static eventName="valuetypemodechanged";data;constructor(e,t){super(se.eventName,{composed:!0}),this.data={type:e,mode:t}}}class ne extends Event{static eventName="jumptopointeraddress";data;constructor(e){super(ne.eventName,{composed:!0}),this.data=e}}class Et extends HTMLElement{#e=this.attachShadow({mode:"open"});#t="Little Endian";#r=new ArrayBuffer(0);#n=new Set;#s=B();#i=0;constructor(){super(),this.#e.adoptedStyleSheets=[ct]}connectedCallback(){this.#e.adoptedStyleSheets=[Oe]}set data(e){this.#r=e.buffer,this.#t=e.endianness,this.#n=e.valueTypes,this.#i=e.memoryLength,e.valueTypeModes&&e.valueTypeModes.forEach((t,s)=>{ye(s,t)&&this.#s.set(s,t)}),this.#a()}#a(){St(u`
      <div class="value-types">
        ${$t.map(e=>this.#n.has(e)?this.#l(e):"")}
      </div>
    `,this.#e,{host:this})}#l(e){if(vt(e))return this.#d(e);if(Re(e))return this.#c(e);throw new Error(`No known way to format ${e}`)}#c(e){const t=this.#g({type:e,signed:!1}),s=bt(e,this.#r,this.#t),n=Number.isNaN(s)||BigInt(s)>=BigInt(this.#i),r=M(n?$.addressOutOfRange:$.jumpToPointer),o=n?"var(--icon-default)":"var(--icon-link)";return u`
      <span class="value-type-cell-no-mode value-type-cell selectable-text">${k(e)}</span>
      <div class="value-type-cell">
        <div class="value-type-value-with-link" data-value="true">
        <span class="selectable-text">${t}</span>
          ${u`
              <button class="jump-to-button" data-jump="true" title=${r} ?disabled=${n}
                jslog=${N("linear-memory-inspector.jump-to-address").track({click:!0})}
                @click=${this.#o.bind(this,Number(s))}>
                <devtools-icon .data=${{iconName:"open-externally",color:o,width:"16px"}}>
                </devtools-icon>
              </button>`}
        </div>
      </div>
    `}#o(e){this.dispatchEvent(new ne(e))}#d(e){return u`
      <span class="value-type-cell selectable-text">${k(e)}</span>
      <div>
        <select title=${M($.changeValueTypeMode)}
          data-mode-settings="true"
          class="chrome-select"
          style="border: none; background-color: transparent; cursor: pointer; color: var(--sys-color-token-subtle);"
          jslog=${Ae("linear-memory-inspector.value-type-mode").track({change:!0})}
          @change=${this.#u.bind(this,e)}>
            ${yt.filter(t=>ye(e,t)).map(t=>u`
                <option value=${t} .selected=${this.#s.get(e)===t}
                        jslog=${Ie(t).track({click:!0})}>${k(t)}
                </option>`)}
        </select>
      </div>
      ${this.#h(e)}
    `}#h(e){const t=this.#g({type:e,signed:!1}),s=this.#g({type:e,signed:!0}),n=this.#s.get(e),r=s!==t&&n!=="hex"&&n!=="oct",o=u`<span class="value-type-cell selectable-text"  title=${M($.unsignedValue)} data-value="true">${t}</span>`;if(!r)return o;const l=e==="Integer 32-bit"||e==="Integer 64-bit",d=u`<span class="selectable-text" data-value="true" title=${M($.signedValue)}>${s}</span>`;return l?u`
        <div class="value-type-cell">
          ${o}
          ${d}
        </div>
        `:u`
      <div class="value-type-cell" style="flex-direction: row;">
        ${o}
        <span class="signed-divider"></span>
        ${d}
      </div>
    `}#u(e,t){t.preventDefault();const n=t.target.value;this.dispatchEvent(new se(e,n))}#g(e){const t=this.#s.get(e.type);return wt({buffer:this.#r,type:e.type,endianness:this.#t,signed:e.signed||!1,mode:t})}}customElements.define("devtools-linear-memory-inspector-interpreter-display",Et);const Ne=new CSSStyleSheet;Ne.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
  min-height: 20px;
}

.settings {
  display: flex;
  flex-wrap: wrap;
  margin: 0 12px 12px;
  column-gap: 45px;
  row-gap: 15px;
}

.value-types-selection {
  display: flex;
  flex-direction: column;
}

.group {
  font-weight: bold;
  margin-bottom: 11px;
}

.type-label {
  white-space: nowrap;
}

.group + .type-label {
  margin-top: 5px;
}

.type-label input {
  margin: 0 6px 0 0;
  padding: 0;
}

.type-label + .type-label {
  margin-top: 6px;
}

/*# sourceURL=valueInterpreterSettings.css */
`);const{render:Mt,html:O}=b,je={otherGroup:"Other"},At=p("panels/linear_memory_inspector/components/ValueInterpreterSettings.ts",je),It=m.bind(void 0,At),be=new Map([["Integer",["Integer 8-bit","Integer 16-bit","Integer 32-bit","Integer 64-bit"]],["Floating point",["Float 32-bit","Float 64-bit"]],["Other",["Pointer 32-bit","Pointer 64-bit"]]]);function kt(i){return i==="Other"?It(je.otherGroup):i}class ie extends Event{static eventName="typetoggle";data;constructor(e,t){super(ie.eventName),this.data={type:e,checked:t}}}class Tt extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=new Set;connectedCallback(){this.#e.adoptedStyleSheets=[Ge,Ne]}set data(e){this.#t=e.valueTypes,this.#r()}#r(){Mt(O`
      <div class="settings" jslog=${qe("settings")}>
       ${[...be.keys()].map(e=>O`
          <div class="value-types-selection">
            <span class="group">${kt(e)}</span>
            ${this.#n(e)}
          </div>
        `)}
      </div>
      `,this.#e,{host:this})}#n(e){const t=be.get(e);if(!t)throw new Error(`Unknown group ${e}`);return O`
      ${t.map(s=>O`
          <label class="type-label" title=${fe(s)}>
            <input data-input="true" type="checkbox" .checked=${this.#t.has(s)} @change=${n=>this.#s(s,n)} jslog=${We().track({change:!0}).context(ke(s))}>
            <span data-title="true">${fe(s)}</span>
          </label>
     `)}`}#s(e,t){const s=t.target;this.dispatchEvent(new ie(e,s.checked))}}customElements.define("devtools-linear-memory-inspector-interpreter-settings",Tt);const He=new CSSStyleSheet;He.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
}

.value-interpreter {
  border: 1px solid var(--sys-color-divider);
  background-color: var(--sys-color-cdt-base-container);
  overflow: hidden;
  width: 400px;
}

.settings-toolbar {
  min-height: 26px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
}

.settings-toolbar-button {
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  background-color: transparent;
}

.settings-toolbar-button.active devtools-icon {
  color: var(--icon-toggled);
}

.divider {
  display: block;
  height: 1px;
  margin-bottom: 12px;
  background-color: var(--sys-color-divider);
}

/*# sourceURL=linearMemoryValueInterpreter.css */
`);const Z={toggleValueTypeSettings:"Toggle value type settings",changeEndianness:"Change `Endianness`"},Ct=p("panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts",Z),we=m.bind(void 0,Ct),{render:Lt,html:A}=b;class re extends Event{static eventName="endiannesschanged";data;constructor(e){super(re.eventName),this.data=e}}class oe extends Event{static eventName="valuetypetoggled";data;constructor(e,t){super(oe.eventName),this.data={type:e,checked:t}}}class Ot extends HTMLElement{#e=this.attachShadow({mode:"open"});#t="Little Endian";#r=new ArrayBuffer(0);#n=new Set;#s=new Map;#i=0;#a=!1;connectedCallback(){this.#e.adoptedStyleSheets=[He]}set data(e){this.#t=e.endianness,this.#r=e.value,this.#n=e.valueTypes,this.#s=e.valueTypeModes||new Map,this.#i=e.memoryLength,this.#l()}#l(){Lt(A`
      <div class="value-interpreter">
        <div class="settings-toolbar">
          ${this.#o()}
          <button data-settings="true" class="settings-toolbar-button ${this.#a?"active":""}"
              title=${we(Z.toggleValueTypeSettings)} @click=${this.#d}
              jslog=${Ye("linear-memory-inspector.toggle-value-settings").track({click:!0})}>
            <devtools-icon name=${this.#a?"gear-filled":"gear"}></devtools-icon>
          </button>
        </div>
        <span class="divider"></span>
        <div>
          ${this.#a?A`
              <devtools-linear-memory-inspector-interpreter-settings
                .data=${{valueTypes:this.#n}}
                @typetoggle=${this.#h}>
              </devtools-linear-memory-inspector-interpreter-settings>`:A`
              <devtools-linear-memory-inspector-interpreter-display
                .data=${{buffer:this.#r,valueTypes:this.#n,endianness:this.#t,valueTypeModes:this.#s,memoryLength:this.#i}}>
              </devtools-linear-memory-inspector-interpreter-display>`}
        </div>
      </div>
    `,this.#e,{host:this})}#c(e){e.preventDefault();const s=e.target.value;this.dispatchEvent(new re(s))}#o(){const e=this.#c.bind(this);return A`
    <label data-endianness-setting="true" title=${we(Z.changeEndianness)}>
      <select class="chrome-select"
        jslog=${Ae("linear-memory-inspector.endianess").track({change:!0})}
        style="border: none; background-color: transparent; cursor: pointer;"
        data-endianness="true" @change=${e}>
        ${["Little Endian","Big Endian"].map(t=>A`<option value=${t} .selected=${this.#t===t}
            jslog=${Ie(ke(t)).track({click:!0})}>${k(t)}</option>`)}
      </select>
    </label>
    `}#d(){this.#a=!this.#a,this.#l()}#h(e){this.dispatchEvent(new oe(e.data.type,e.data.checked))}}customElements.define("devtools-linear-memory-inspector-interpreter",Ot);const Rt=/^0x[a-fA-F0-9]+$/,Nt=/^0$|[1-9]\d*$/;function Q(i){const t=i.number.toString(16).padStart(i.pad,"0").toUpperCase();return i.prefix?"0x"+t:t}function q(i){return Q({number:i,pad:8,prefix:!0})}function xe(i){const e=i.match(Rt),t=i.match(Nt);let s;return e&&e[0].length===i.length?s=parseInt(i,16):t&&t[0].length===i.length&&(s=parseInt(i,10)),s}const Pe=new CSSStyleSheet;Pe.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
  min-height: 20px;
}

.view {
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  background: var(--sys-color-cdt-base-container);
  outline: none;
}

.row {
  display: flex;
  height: 20px;
  align-items: center;
}

.cell {
  text-align: center;
  border: 1px solid transparent;
  border-radius: 2px;

  &.focused-area {
    background-color: var(--sys-color-tonal-container);
    color: var(--sys-color-on-tonal-container);
  }

  &.selected {
    border-color: var(--sys-color-state-focus-ring);
    color: var(--sys-color-on-tonal-container);
    background-color: var(--sys-color-state-focus-select);
  }
}

.byte-cell {
  min-width: 21px;
  color: var(--sys-color-on-surface);
}

.byte-group-margin {
  margin-left: var(--byte-group-margin);
}

.text-cell {
  min-width: 14px;
  color: var(--sys-color-on-surface-subtle);
}

.address {
  color: var(--sys-color-state-disabled);
}

.address.selected {
  font-weight: bold;
  color: var(--sys-color-on-surface);
}

.divider {
  width: 1px;
  height: inherit;
  background-color: var(--sys-color-divider);
  margin: 0 4px;
}

.highlight-area {
  background-color: var(--sys-color-surface-variant);
}

/*# sourceURL=linearMemoryViewer.css */
`);const{render:jt,html:g}=b;class H extends Event{static eventName="byteselected";data;constructor(e){super(H.eventName),this.data=e}}class ae extends Event{static eventName="resize";data;constructor(e){super(ae.eventName),this.data=e}}const Se=8,y=4;class Ht extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=new ResizeObserver(()=>this.#p());#r=!1;#n=new Uint8Array;#s=0;#i=0;#a;#l;#c=1;#o=y;#d=!0;#h=void 0;set data(e){if(e.address<e.memoryOffset||e.address>e.memoryOffset+e.memory.length||e.address<0)throw new Error("Address is out of bounds.");if(e.memoryOffset<0)throw new Error("Memory offset has to be greater or equal to zero.");this.#n=e.memory,this.#s=e.address,this.#a=e.highlightInfo,this.#l=e.focusedMemoryHighlight,this.#i=e.memoryOffset,this.#d=e.focus,this.#u()}connectedCallback(){this.style.setProperty("--byte-group-margin",`${Se}px`),this.#e.adoptedStyleSheets=[Pe]}disconnectedCallback(){this.#r=!1,this.#t.disconnect()}#u(){this.#y(),this.#S(),this.#g(),this.#x()}#g(){if(this.#d){const e=this.#e.querySelector(".view");e&&e.focus()}}#p(){this.#u(),this.dispatchEvent(new ae(this.#o*this.#c))}#y(){if(this.clientWidth===0||this.clientHeight===0||!this.shadowRoot){this.#o=y,this.#c=1;return}const e=this.shadowRoot.querySelector(".byte-cell"),t=this.shadowRoot.querySelector(".text-cell"),s=this.shadowRoot.querySelector(".divider"),n=this.shadowRoot.querySelector(".row"),r=this.shadowRoot.querySelector(".address");if(!e||!t||!s||!n||!r){this.#o=y,this.#c=1;return}const o=e.getBoundingClientRect().width,l=t.getBoundingClientRect().width,d=y*(o+l)+Se,h=s.getBoundingClientRect().width,a=e.getBoundingClientRect().left-r.getBoundingClientRect().left,f=this.clientWidth-1-a-h;if(f<d){this.#o=y,this.#c=1;return}this.#o=Math.floor(f/d)*y,this.#c=Math.floor(this.clientHeight/n.clientHeight)}#x(){!this.#t||this.#r||(this.#t.observe(this),this.#r=!0)}#S(){const e=Je().track({keydown:"ArrowUp|ArrowDown|ArrowLeft|ArrowRight|PageUp|PageDown"}).context("linear-memory-inspector.viewer");jt(g`
      <div class="view" tabindex="0" @keydown=${this.#f} jslog=${e}>
        ${this.#$()}
      </div>
      `,this.#e,{host:this})}#f(e){const t=e;let s;t.code==="ArrowUp"?s=this.#s-this.#o:t.code==="ArrowDown"?s=this.#s+this.#o:t.code==="ArrowLeft"?s=this.#s-1:t.code==="ArrowRight"?s=this.#s+1:t.code==="PageUp"?s=this.#s-this.#o*this.#c:t.code==="PageDown"&&(s=this.#s+this.#o*this.#c),s!==void 0&&s!==this.#h&&(this.#h=s,this.dispatchEvent(new H(s)))}#$(){const e=[];for(let t=0;t<this.#c;++t)e.push(this.#v(t));return g`${e}`}#v(e){const{startIndex:t,endIndex:s}={startIndex:e*this.#o,endIndex:(e+1)*this.#o},n={address:!0,selected:Math.floor((this.#s-this.#i)/this.#o)===e};return g`
    <div class="row">
      <span class=${I(n)}>${Q({number:t+this.#i,pad:8,prefix:!1})}</span>
      <span class="divider"></span>
      ${this.#E(t,s)}
      <span class="divider"></span>
      ${this.#M(t,s)}
    </div>
    `}#E(e,t){const s=[];for(let n=e;n<t;++n){const r=n+this.#i,o=n!==e&&(n-e)%y===0,l=n===this.#s-this.#i,d=this.#w(r),h=this.#m(r),a={cell:!0,"byte-cell":!0,"byte-group-margin":o,selected:l,"highlight-area":d,"focused-area":h},f=n<this.#n.length,w=f?g`${Q({number:this.#n[n],pad:2,prefix:!1})}`:"",L=f?this.#b.bind(this,r):"",D=de("linear-memory-inspector.byte-cell").track({click:!0});s.push(g`<span class=${I(a)} @click=${L} jslog=${D}>${w}</span>`)}return g`${s}`}#M(e,t){const s=[];for(let n=e;n<t;++n){const r=n+this.#i,o=this.#w(r),l=this.#m(r),d={cell:!0,"text-cell":!0,selected:this.#s-this.#i===n,"highlight-area":o,"focused-area":l},h=n<this.#n.length,a=h?g`${this.#A(this.#n[n])}`:"",f=h?this.#b.bind(this,n+this.#i):"",w=de("linear-memory-inspector.text-cell").track({click:!0});s.push(g`<span class=${I(d)} @click=${f} jslog=${w}>${a}</span>`)}return g`${s}`}#A(e){return e>=20&&e<=127?String.fromCharCode(e):"."}#b(e){this.dispatchEvent(new H(e))}#w(e){return this.#a===void 0?!1:this.#a.startAddress<=e&&e<this.#a.startAddress+this.#a.size}#m(e){return this.#l?this.#l.startAddress<=e&&e<this.#l.startAddress+this.#l.size:!1}}customElements.define("devtools-linear-memory-inspector-viewer",Ht);const{render:Pt,html:$e}=b,Ve={addressHasToBeANumberBetweenSAnd:"Address has to be a number between {PH1} and {PH2}"},Vt=p("panels/linear_memory_inspector/components/LinearMemoryInspector.ts",Ve),Ut=m.bind(void 0,Vt);class C extends Event{static eventName="memoryrequest";data;constructor(e,t,s){super(C.eventName),this.data={start:e,end:t,address:s}}}class _ extends Event{static eventName="addresschanged";data;constructor(e){super(_.eventName),this.data=e}}class E extends Event{static eventName="settingschanged";data;constructor(e){super(E.eventName),this.data=e}}class Bt{#e=0;#t;constructor(e,t){if(e<0)throw new Error("Address should be a greater or equal to zero");this.#e=e,this.#t=t}valid(){return!0}reveal(){this.#t(this.#e)}}class Ue extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=new dt(10);#r=new Uint8Array;#n=0;#s=0;#i=-1;#a;#l="Submitted";#c=`${this.#i}`;#o=4;#d=B();#h=new Set(this.#d.keys());#u="Little Endian";#g=!1;connectedCallback(){this.#e.adoptedStyleSheets=[Le]}set data(e){if(e.address<e.memoryOffset||e.address>e.memoryOffset+e.memory.length||e.address<0)throw new Error("Address is out of bounds.");if(e.memoryOffset<0)throw new Error("Memory offset has to be greater or equal to zero.");if(e.highlightInfo){if(e.highlightInfo.size<0)throw new Error("Object size has to be greater than or equal to zero");if(e.highlightInfo.startAddress<0||e.highlightInfo.startAddress>=e.outerMemoryLength)throw new Error("Object start address is out of bounds.")}this.#r=e.memory,this.#n=e.memoryOffset,this.#s=e.outerMemoryLength,this.#d=e.valueTypeModes||this.#d,this.#h=e.valueTypes||this.#h,this.#u=e.endianness||this.#u,this.#a=e.highlightInfo,this.#g=e.hideValueInspector??this.#g,this.#T(e.address),this.#p()}#p(){const{start:e,end:t}=this.#I(this.#i,this.#o),s=this.#l==="Submitted"?q(this.#i):this.#c,n=this.#v(s),r=Ut(Ve.addressHasToBeANumberBetweenSAnd,{PH1:q(0),PH2:q(this.#s)}),o=n?void 0:r,l=this.#t.canRollback(),d=this.#t.canRollover(),h=this.#a?[this.#a]:[],a=this.#L(h,this.#i);Pt($e`
      <div class="view">
        <devtools-linear-memory-inspector-navigator
          .data=${{address:s,valid:n,mode:this.#l,error:o,canGoBackInHistory:l,canGoForwardInHistory:d}}
          @refreshrequested=${this.#x}
          @addressinputchanged=${this.#E}
          @pagenavigation=${this.#w}
          @historynavigation=${this.#b}></devtools-linear-memory-inspector-navigator>
          <devtools-linear-memory-highlight-chip-list
          .data=${{highlightInfos:h,focusedMemoryHighlight:a}}
          @jumptohighlightedmemory=${this.#y}>
          </devtools-linear-memory-highlight-chip-list>
        <devtools-linear-memory-inspector-viewer
          .data=${{memory:this.#r.slice(e-this.#n,t-this.#n),address:this.#i,memoryOffset:e,focus:this.#l==="Submitted",highlightInfo:this.#a,focusedMemoryHighlight:a}}
          @byteselected=${this.#S}
          @resize=${this.#C}>
        </devtools-linear-memory-inspector-viewer>
      </div>
      ${this.#g?Ke:$e`
      <div class="value-interpreter">
        <devtools-linear-memory-inspector-interpreter
          .data=${{value:this.#r.slice(this.#i-this.#n,this.#i+mt).buffer,valueTypes:this.#h,valueTypeModes:this.#d,endianness:this.#u,memoryLength:this.#s}}
          @valuetypetoggled=${this.#M}
          @valuetypemodechanged=${this.#A}
          @endiannesschanged=${this.#$}
          @jumptopointeraddress=${this.#y}
          >
        </devtools-linear-memory-inspector-interpreter/>
      </div>`}
      `,this.#e,{host:this})}#y(e){e.stopPropagation(),this.#l="Submitted";const t=Math.max(0,Math.min(e.data,this.#s-1));this.#m(t)}#x(){const{start:e,end:t}=this.#I(this.#i,this.#o);this.dispatchEvent(new C(e,t,this.#i))}#S(e){this.#l="Submitted";const t=Math.max(0,Math.min(e.data,this.#s-1));this.#m(t)}#f(){return{valueTypes:this.#h,modes:this.#d,endianness:this.#u}}#$(e){this.#u=e.data,this.dispatchEvent(new E(this.#f())),this.#p()}#v(e){const t=xe(e);return t!==void 0&&t>=0&&t<this.#s}#E(e){const{address:t,mode:s}=e.data,n=this.#v(t),r=xe(t);if(this.#c=t,r!==void 0&&n){this.#l=s,this.#m(r);return}s==="Submitted"&&!n?this.#l="InvalidSubmit":this.#l="Edit",this.#p()}#M(e){const{type:t,checked:s}=e.data;s?this.#h.add(t):this.#h.delete(t),this.dispatchEvent(new E(this.#f())),this.#p()}#A(e){e.stopImmediatePropagation();const{type:t,mode:s}=e.data;this.#d.set(t,s),this.dispatchEvent(new E(this.#f())),this.#p()}#b(e){return e.data==="Forward"?this.#t.rollover():this.#t.rollback()}#w(e){const t=e.data==="Forward"?this.#i+this.#o:this.#i-this.#o,s=Math.max(0,Math.min(t,this.#s-1));this.#m(s)}#m(e){if(e<0||e>=this.#s){console.warn(`Specified address is out of bounds: ${e}`);return}this.#T(e),this.#k()}#I(e,t){const n=Math.floor(e/t)*t,r=Math.min(n+t,this.#s);return{start:n,end:r}}#C(e){this.#o=e.data,this.#k()}#k(){const{start:e,end:t}=this.#I(this.#i,this.#o);e<this.#n||t>this.#n+this.#r.length?this.dispatchEvent(new C(e,t,this.#i)):this.#p()}#T(e){if(this.#i===e)return;const t=new Bt(e,()=>this.#m(e));this.#t.push(t),this.#i=e,this.dispatchEvent(new _(this.#i))}#L(e,t){let s;for(const n of e)n.startAddress<=t&&t<n.startAddress+n.size&&(s?n.size<s.size&&(s=n):s=n);return s}}customElements.define("devtools-linear-memory-inspector-inspector",Ue);const Be=new CSSStyleSheet;Be.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.navigator {
  min-height: 24px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-on-surface);
}

.navigator-item {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.address-input {
  text-align: center;
  outline: none;
  color: var(--sys-color-on-surface);
  border: 1px solid var(--sys-color-neutral-outline);
  background: transparent;
}

.address-input.invalid {
  color: var(--sys-color-error);
}

.navigator-button {
  display: flex;
  width: 20px;
  height: 20px;
  background: transparent;
  overflow: hidden;
  border: none;
  padding: 0;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.navigator-button:disabled devtools-icon {
  opacity: 50%;
}

.navigator-button:enabled:hover devtools-icon {
  color: var(--icon-default-hover);
}

.navigator-button:enabled:focus devtools-icon {
  color: var(--icon-default-hover);
}

/*# sourceURL=linearMemoryNavigator.css */
`);const v={enterAddress:"Enter address",goBackInAddressHistory:"Go back in address history",goForwardInAddressHistory:"Go forward in address history",previousPage:"Previous page",nextPage:"Next page",refresh:"Refresh"},_t=p("panels/linear_memory_inspector/components/LinearMemoryNavigator.ts",v),S=m.bind(void 0,_t),{render:Ft,html:W,Directives:{ifDefined:Dt}}=b;class le extends Event{static eventName="addressinputchanged";data;constructor(e,t){super(le.eventName),this.data={address:e,mode:t}}}class P extends Event{static eventName="pagenavigation";data;constructor(e){super(P.eventName,{}),this.data=e}}class V extends Event{static eventName="historynavigation";data;constructor(e){super(V.eventName,{}),this.data=e}}class ce extends Event{static eventName="refreshrequested";constructor(){super(ce.eventName,{})}}class zt extends HTMLElement{#e=this.attachShadow({mode:"open"});#t="0";#r=void 0;#n=!0;#s=!1;#i=!1;connectedCallback(){this.#e.adoptedStyleSheets=[Be]}set data(e){this.#t=e.address,this.#r=e.error,this.#n=e.valid,this.#s=e.canGoBackInHistory,this.#i=e.canGoForwardInHistory,this.#a();const t=this.#e.querySelector(".address-input");t&&(e.mode==="Submitted"?t.blur():e.mode==="InvalidSubmit"&&t.select())}#a(){const e=W`
      <div class="navigator">
        <div class="navigator-item">
          ${this.#o({icon:"undo",title:S(v.goBackInAddressHistory),event:new V("Backward"),enabled:this.#s,jslogContext:"linear-memory-inspector.history-back"})}
          ${this.#o({icon:"redo",title:S(v.goForwardInAddressHistory),event:new V("Forward"),enabled:this.#i,jslogContext:"linear-memory-inspector.history-forward"})}
        </div>
        <div class="navigator-item">
          ${this.#o({icon:"chevron-left",title:S(v.previousPage),event:new P("Backward"),enabled:!0,jslogContext:"linear-memory-inspector.previous-page"})}
          ${this.#l()}
          ${this.#o({icon:"chevron-right",title:S(v.nextPage),event:new P("Forward"),enabled:!0,jslogContext:"linear-memory-inspector.next-page"})}
        </div>
        ${this.#o({icon:"refresh",title:S(v.refresh),event:new ce,enabled:!0,jslogContext:"linear-memory-inspector.refresh"})}
      </div>
      `;Ft(e,this.#e,{host:this})}#l(){const e={"address-input":!0,invalid:!this.#n};return W`
      <input class=${I(e)} data-input="true" .value=${this.#t}
        jslog=${Xe("linear-memory-inspector.address").track({change:!0})}
        title=${Dt(this.#n?S(v.enterAddress):this.#r)} @change=${this.#c.bind(this,"Submitted")} @input=${this.#c.bind(this,"Edit")}/>`}#c(e,t){const s=t.target;this.dispatchEvent(new le(s.value,e))}#o(e){return W`
      <button class="navigator-button" ?disabled=${!e.enabled}
        jslog=${N().track({click:!0,keydown:"Enter"}).context(e.jslogContext)}
        data-button=${e.event.type} title=${e.title}
        @click=${this.dispatchEvent.bind(this,e.event)}>
        <devtools-icon name=${e.icon}></devtools-icon>
      </button>`}}customElements.define("devtools-linear-memory-inspector-navigator",zt);const _e={noOpenInspections:"No open inspections"},Gt=p("panels/linear_memory_inspector/LinearMemoryInspectorPane.ts",_e),qt=m.bind(void 0,Gt);let Y;class F extends Ze(Te){#e;constructor(){super(!1),this.element.setAttribute("jslog",`${Qe("linear-memory-inspector").track({resize:!0})}`);const e=document.createElement("div");e.textContent=qt(_e.noOpenInspections),e.style.display="flex",this.#e=new et,this.#e.setPlaceholderElement(e),this.#e.setCloseableTabs(!0),this.#e.setAllowTabReorder(!0,!0),this.#e.addEventListener(tt.TabClosed,this.#r,this),this.#e.show(this.contentElement),this.#e.headerElement().setAttribute("jslog",`${st().track({keydown:"ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space"})}`)}static instance(){return Y||(Y=new F),Y}#t(e){const t=this.#e.tabView(e);if(t===null)throw new Error(`No linear memory inspector view for the given tab id: ${e}`);return t}create(e,t,s,n){const r=new Fe(s,n,e);this.#e.appendTab(e,t,r,void 0,!1,!0),this.#e.selectTab(e)}close(e){this.#e.closeTab(e,!1)}reveal(e,t){const s=this.#t(e);t!==void 0&&s.updateAddress(t),this.refreshView(e),this.#e.selectTab(e)}refreshView(e){this.#t(e).refreshData()}#r(e){const{tabId:t}=e.data;this.dispatchEventToListeners("ViewClosed",t)}}class Fe extends Te{#e;#t;#r;#n;firstTimeOpen;#s;constructor(e,t=0,s,n){if(super(!1),t<0||t>=e.length())throw new Error("Requested address is out of bounds.");this.#e=e,this.#t=t,this.#r=s,this.#s=!!n,this.#n=new Ue,this.#n.addEventListener(C.eventName,r=>{this.#i(r)}),this.#n.addEventListener(_.eventName,r=>{this.updateAddress(r.data)}),this.#n.addEventListener(E.eventName,r=>{r.stopPropagation(),this.saveSettings(r.data)}),this.#n.addEventListener(U.eventName,r=>{c.instance().removeHighlight(this.#r,r.data),this.refreshData()}),this.contentElement.appendChild(this.#n),this.firstTimeOpen=!0}wasShown(){this.refreshData()}saveSettings(e){c.instance().saveSettings(e)}updateAddress(e){if(e<0||e>=this.#e.length())throw new Error("Requested address is out of bounds.");this.#t=e}refreshData(){c.getMemoryForAddress(this.#e,this.#t).then(({memory:e,offset:t})=>{let s,n,r;if(this.firstTimeOpen){const o=c.instance().loadSettings();s=o.valueTypes,n=o.modes,r=o.endianness,this.firstTimeOpen=!1}this.#n.data={memory:e,address:this.#t,memoryOffset:t,outerMemoryLength:this.#e.length(),valueTypes:s,valueTypeModes:n,endianness:r,highlightInfo:this.#a(),hideValueInspector:this.#s}})}#i(e){const{start:t,end:s,address:n}=e.data;if(n<t||n>=s)throw new Error("Requested address is out of bounds.");c.getMemoryRange(this.#e,t,s).then(r=>{this.#n.data={memory:r,address:n,memoryOffset:t,outerMemoryLength:this.#e.length(),highlightInfo:this.#a(),hideValueInspector:this.#s}})}#a(){const e=c.instance().getHighlightInfo(this.#r);if(e!==void 0){if(e.startAddress<0||e.startAddress>=this.#e.length())throw new Error("HighlightInfo start address is out of bounds.");if(e.size<=0)throw new Error("Highlight size must be a positive number.")}return e}}const Wt=Object.freeze(Object.defineProperty({__proto__:null,LinearMemoryInspectorPane:F,LinearMemoryInspectorView:Fe},Symbol.toStringTag,{value:"Module"})),ee={couldNotOpenLinearMemory:"Could not open linear memory inspector: failed locating buffer.",revealInMemoryInspectorPanel:"Reveal in Memory inspector panel"},Yt=p("panels/linear_memory_inspector/LinearMemoryInspectorController.ts",ee),Ee=m.bind(void 0,Yt),Jt="linear-memory-inspector",J=1e3;let R;class De{#e;constructor(e){this.#e=e}length(){return this.#e.byteLength()}async getRange(e,t){const s=Math.min(t,this.length());if(e<0||e>s)return console.error(`Requesting invalid range of memory: (${e}, ${t})`),new Uint8Array(0);const n=await this.#e.bytes(e,s);return new Uint8Array(n)}}async function Kt(i){const e=await i.runtimeModel().agent.invoke_callFunctionOn({objectId:i.objectId,functionDeclaration:"function() { return this instanceof ArrayBuffer || (typeof SharedArrayBuffer !== 'undefined' && this instanceof SharedArrayBuffer) ? this : this.buffer; }",silent:!0,objectGroup:Jt}),t=e.getError();if(t)throw new Error(`Remote object representing ArrayBuffer could not be retrieved: ${t}`);return i=i.runtimeModel().createRemoteObject(e.result),new lt(i)}function Xt(i){return i instanceof K?i.linearMemoryAddress!==void 0:!1}class c extends nt{#e=F.instance();#t=new Map;#r=new Map;#n;constructor(){super(),G.instance().observeModels(it,this),G.instance().addModelListener(he,ue.GlobalObjectCleared,this.#a,this),this.#e.addEventListener("ViewClosed",this.#l.bind(this)),G.instance().addModelListener(he,ue.DebuggerPaused,this.#i,this);const e=B(),t={valueTypes:Array.from(e.keys()),valueTypeModes:Array.from(e),endianness:"Little Endian"};this.#n=rt.instance().createSetting("lmi-interpreter-settings",t)}static instance(){return R||(R=new c,R)}static async getMemoryForAddress(e,t){const s=Math.max(0,t-J/2),n=s+J;return{memory:await e.getRange(s,n),offset:s}}static async getMemoryRange(e,t,s){if(t<0||t>s||t>=e.length())throw new Error("Requested range is out of bounds.");const n=Math.max(s,t+J);return await e.getRange(t,n)}async evaluateExpression(e,t){const s=await e.evaluate({expression:t});if("error"in s){console.error(`Tried to evaluate the expression '${t}' but got an error: ${s.error}`);return}if("exceptionDetails"in s&&s?.exceptionDetails?.text){console.error(`Tried to evaluate the expression '${t}' but got an exception: ${s.exceptionDetails.text}`);return}return s.object}saveSettings(e){const t=Array.from(e.valueTypes),s=[...e.modes];this.#n.set({valueTypes:t,valueTypeModes:s,endianness:e.endianness})}loadSettings(){const e=this.#n.get();return{valueTypes:new Set(e.valueTypes),modes:new Map(e.valueTypeModes),endianness:e.endianness}}getHighlightInfo(e){return this.#r.get(e)}removeHighlight(e,t){this.getHighlightInfo(e)===t&&this.#r.delete(e)}setHighlightInfo(e,t){this.#r.set(e,t)}#s(e){this.#r.delete(e)}static async retrieveDWARFMemoryObjectAndAddress(e){if(!(e instanceof K))return;const t=e,s=e.linearMemoryAddress;if(s===void 0)return;const n=t.callFrame,r=await e.debuggerModel().agent.invoke_evaluateOnCallFrame({callFrameId:n.id,expression:"memories[0]"}),o=r.getError();return o&&(console.error(o),ot.instance().error(Ee(ee.couldNotOpenLinearMemory))),{obj:e.debuggerModel().runtimeModel().createRemoteObject(r.result),address:s}}static extractObjectSize(e){return e.linearMemorySize??0}static extractObjectTypeDescription(e){const t=e.description;if(!t)return"";const s=t.charAt(t.length-1),n=t.charAt(t.length-2),r=s==="*"||s==="&",o=n===" ";return r?o?t.slice(0,t.length-2):t.slice(0,t.length-1):t}static extractObjectName(e,t){return e.description?.charAt(e.description.length-1)==="*"?"*"+t:t}async reveal({object:e,expression:t},s){const n=await c.retrieveDWARFMemoryObjectAndAddress(e);let r=e,o;n!==void 0&&(o=n.address,r=n.obj);const l=await Kt(r),{internalProperties:d}=await l.object().getOwnProperties(!1),a=d?.find(({name:z})=>z==="[[ArrayBufferData]]")?.value?.value;if(!a)throw new Error("Unable to find backing store id for array buffer");const w=d?.find(({name:z})=>z==="[[WebAssemblyMemory]]")?.value,L=c.extractHighlightInfo(e,t);if(L?this.setHighlightInfo(a,L):this.#s(a),this.#t.has(a)){this.#e.reveal(a,o),ge.instance().showView("linear-memory-inspector",s);return}const D=String(w?w.description:l.object().description);this.#t.set(a,l.object());const ze=new De(l);this.#e.create(a,D,ze,o),ge.instance().showView("linear-memory-inspector",s)}appendApplicableItems(e,t,s){if(s.property.value?.isLinearMemoryInspectable()){const n=s.path(),r=s.property.value;t.debugSection().appendItem(Ee(ee.revealInMemoryInspectorPanel),this.reveal.bind(this,new at(r,n)),{jslogContext:"reveal-in-memory-inspector"})}}static extractHighlightInfo(e,t){if(!(e instanceof K))return;const s=e.linearMemoryAddress??0;let n;try{n={startAddress:s,size:c.extractObjectSize(e),name:t&&c.extractObjectName(e,t),type:c.extractObjectTypeDescription(e)}}catch{n=void 0}return n}modelRemoved(e){for(const[t,s]of this.#t)e===s.runtimeModel()&&(this.#t.delete(t),this.#s(t),this.#e.close(t))}#i(e){const t=e.data;for(const[s,n]of this.#t)if(t.runtimeModel()===n.runtimeModel()){const r=t.debuggerPausedDetails()?.callFrames[0];r?this.updateHighlightedMemory(s,r).then(()=>this.#e.refreshView(s)):(this.#s(s),this.#e.refreshView(s))}}#a(e){this.modelRemoved(e.data.runtimeModel())}#l({data:e}){const t=this.#t.get(e);t&&t.release(),this.#t.delete(e),this.#s(e)}async updateHighlightedMemory(e,t){const s=this.getHighlightInfo(e),n=s?.name;if(!s||!n){this.#s(e);return}const r=await this.evaluateExpression(t,n);if(!r){this.#s(e);return}const o=c.extractHighlightInfo(r,n);!o||!this.#c(o,s)?this.#s(e):this.setHighlightInfo(e,o)}#c(e,t){return e.type===t.type&&e.startAddress===t.startAddress}}const Zt=Object.freeze(Object.defineProperty({__proto__:null,LinearMemoryInspectorController:c,RemoteArrayBufferWrapper:De,isDWARFMemoryObject:Xt},Symbol.toStringTag,{value:"Module"})),ts=Object.freeze(Object.defineProperty({__proto__:null,LinearMemoryInspectorController:Zt,LinearMemoryInspectorPane:Wt},Symbol.toStringTag,{value:"Module"}));export{Fe as L,ts as l};
//# sourceMappingURL=linear_memory_inspector-Cc8YvoCp.js.map
