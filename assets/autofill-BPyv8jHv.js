import{b as I,g as M,be as F,aj as m,bf as T,bg as v,i as C,aR as L,aS as j,aN as d,a_ as O,aO as w,bh as h,b2 as u,bi as $,bj as f,bk as R,bl as E,bm as V,as as _,aP as D,bn as N,b6 as P}from"./inspector-CyOA7R9n.js";import"./DataGridController-DdQqp2ti.js";const y=new CSSStyleSheet;y.replaceSync(`/*
 * Copyright (c) 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

main {
  height: 100%;
}

.header {
  display: flex;
  border-bottom: 1px solid var(--sys-color-divider);
  width: 100%;
}

.placeholder-container {
  height: calc(100% - 29px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder {
  font-size: 15px;
  text-align: center;
}

.address {
  padding: 10px;
  margin-right: auto;
}

.filled-fields-grid {
  border-top: 1px solid var(--sys-color-divider);
  box-sizing: border-box;
}

.content-container {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.grid-wrapper {
  flex-grow: 1;
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.right-to-left {
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: flex-end;
}

.label-container {
  padding: 5px;
  display: flex;
  align-items: flex-start;
}

.top-left-corner {
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  padding: 5px;
  gap: 10px;
}

.matches-filled-field {
  background-color: var(--sys-color-tonal-container);
}

.highlighted {
  background-color: var(--sys-color-state-focus-select);
}

.link {
  color: var(--sys-color-primary);
  text-decoration-line: underline;
}

.feedback {
  margin: auto 5px auto auto;
}

/*# sourceURL=autofillView.css */
`);const{html:n}=D,t={toStartDebugging:"To start debugging autofill, use Chrome's autofill menu to fill an address form.",value:"Value",predictedAutofillValue:"Predicted autofill value",formField:"Form field",autocompleteAttribute:"Autocomplete attribute",attr:"attr",inferredByHeuristics:"Inferred by heuristics",heur:"heur",autoShow:"Automatically open this panel",showTestAddressesInAutofillMenu:"Show test addresses in autofill menu",autoShowTooltip:"Open the autofill panel automatically when an autofill activity is detected.",addressPreview:"Address preview",formInspector:"Form inspector",learnMore:"Learn more",sendFeedback:"Send feedback"},U="https://goo.gle/devtools-autofill-panel",x="https://crbug.com/329106326",z=I("panels/autofill/AutofillView.ts",t),s=M.bind(void 0,z);class k extends F{#n=this.attachShadow({mode:"open"});#s=this.#u.bind(this);#a;#o;#i="";#e=[];#l=[];#t=[];constructor(){super(),this.#a=m.instance().createSetting("auto-open-autofill-view-on-event",!0),this.#o=m.instance().createSetting("show-test-addresses-in-autofill-menu-on-event",!1)}connectedCallback(){this.#n.adoptedStyleSheets=[T,y];const i=v.instance(),e=i.getLastFilledAddressForm();e&&({address:this.#i,filledFields:this.#e,matches:this.#l}=e),i.addEventListener("AddressFormFilled",this.#h,this),C.instance().addModelListener(L,j.PrimaryPageChanged,this.#c,this),d(this,this.#s)}#c(){this.#i="",this.#e=[],this.#l=[],this.#t=[],d(this,this.#s)}#h({data:i}){({address:this.#i,filledFields:this.#e,matches:this.#l}=i),this.#t=[],d(this,this.#s)}async#u(){if(!O(this))throw new Error("AutofillView render was not scheduled");if(!this.#i&&!this.#e.length){w(n`
        <main>
          <div class="top-left-corner">
            <label class="checkbox-label" title=${s(t.showTestAddressesInAutofillMenu)}>
              <input
                type="checkbox"
                ?checked=${this.#o.get()}
                @change=${this.#d.bind(this)}
                jslog=${h(this.#o.name).track({change:!0})}>
              <span>${s(t.showTestAddressesInAutofillMenu)}</span>
            </label>
            <label class="checkbox-label" title=${s(t.autoShowTooltip)}>
            <input
              type="checkbox"
              ?checked=${this.#a.get()}
              @change=${this.#r.bind(this)}
              jslog=${h(this.#a.name).track({change:!0})}>
            <span>${s(t.autoShow)}</span>
            </label>
            <x-link href=${x} class="feedback link" jslog=${u("feedback").track({click:!0})}>${s(t.sendFeedback)}</x-link>
          </div>
          <div class="placeholder-container" jslog=${$("autofill-empty")}>
            <div class="placeholder">
              <div>${s(t.toStartDebugging)}</div>
              <x-link href=${U} class="link" jslog=${u("learn-more").track({click:!0})}>${s(t.learnMore)}</x-link>
            </div>
          </div>
        </main>
      `,this.#n,{host:this});return}w(n`
      <main>
        <div class="content-container" jslog=${$("autofill")}>
          <div class="right-to-left" role="region" aria-label=${s(t.addressPreview)}>
            <div class="header">
              <div class="label-container">
                <label class="checkbox-label" title=${s(t.showTestAddressesInAutofillMenu)}>
                  <input
                    type="checkbox"
                    ?checked=${this.#o.get()}
                    @change=${this.#d.bind(this)}
                    jslog=${h(this.#o.name).track({change:!0})}
                  >
                  <span>${s(t.showTestAddressesInAutofillMenu)}</span>
                </label>
              </div>
              <div class="label-container">
                <label class="checkbox-label" title=${s(t.autoShowTooltip)}>
                  <input
                    type="checkbox"
                    ?checked=${this.#a.get()}
                    @change=${this.#r.bind(this)}
                    jslog=${h(this.#a.name).track({change:!0})}
                  >
                  <span>${s(t.autoShow)}</span>
                </label>
              </div>
              <x-link href=${x} class="feedback link" jslog=${u("feedback").track({click:!0})}>${s(t.sendFeedback)}</x-link>
            </div>
            ${this.#f()}
          </div>
          ${this.#b()}
        </div>
      </main>
    `,this.#n,{host:this})}#r(i){const{checked:e}=i.target;this.#a.set(e)}#d(i){const{checked:e}=i.target;this.#o.set(e),v.instance().onShowAutofillTestAddressesSettingsChanged()}#f(){if(!this.#i)return f;const i=(l,c)=>{const g=this.#i.substring(l,c).split(`
`),p=g.map((r,S)=>S===g.length-1?r:n`${r}<br>`),b=this.#l.some(r=>r.startIndex<=l&&r.endIndex>l);if(!b)return n`<span>${p}</span>`;const A=N({"matches-filled-field":b,highlighted:this.#t.some(r=>r.startIndex<=l&&r.endIndex>l)});return n`
        <span
          class=${A}
          @mouseenter=${()=>this.#g(l)}
          @mouseleave=${this.#p}
          jslog=${P("matched-address-item").track({hover:!0})}
        >${p}</span>`},e=[],a=new Set([0,this.#i.length]);for(const l of this.#l)a.add(l.startIndex),a.add(l.endIndex);const o=Array.from(a).sort((l,c)=>l-c);for(let l=0;l<o.length-1;l++)e.push(i(o[l],o[l+1]));return n`
      <div class="address">
        ${e}
      </div>
    `}#g(i){this.#t=this.#l.filter(e=>e.startIndex<=i&&e.endIndex>i),d(this,this.#s)}#p(){this.#t=[],d(this,this.#s)}#b(){if(!this.#e.length)return f;const i={columns:[{id:"name",title:s(t.formField),widthWeighting:50,hideable:!1,visible:!0,sortable:!0},{id:"autofill-type",title:s(t.predictedAutofillValue),widthWeighting:50,hideable:!1,visible:!0,sortable:!0},{id:"value",title:s(t.value),widthWeighting:50,hideable:!1,visible:!0,sortable:!0},{id:"filled-field-index",title:"filledFieldIndex",widthWeighting:50,hideable:!0,visible:!1}],rows:this.#w(),striped:!0};return n`
      <div class="grid-wrapper" role="region" aria-label=${s(t.formInspector)}>
        <devtools-data-grid-controller
          @rowmouseenter=${this.#m}
          @rowmouseleave=${this.#v}
          class="filled-fields-grid"
          .data=${i}
        >
        </devtools-data-grid-controller>
      </div>
    `}#m(i){const e=i.data.row.cells[3].value;if(typeof e!="number")return;this.#t=this.#l.filter(l=>l.filledFieldIndex===e),d(this,this.#s);const a=this.#e[e].fieldId,o=R.instance().getFrame(this.#e[e].frameId)?.resourceTreeModel().target();if(o){const l=new E(o,a),c=o.model(V);l&&c&&c.overlayModel().highlightInOverlay({deferredNode:l},"all")}}#v(){this.#t=[],d(this,this.#s),_.hideDOMNodeHighlight()}#w(){const i=new Set(this.#t.map(e=>e.filledFieldIndex));return this.#e.map((e,a)=>({cells:[{columnId:"name",value:`${e.name||`#${e.id}`} (${e.htmlType})`},{columnId:"autofill-type",value:e.autofillType,renderer:()=>this.#$(e.autofillType,e.fillingStrategy)},{columnId:"value",value:`"${e.value}"`},{columnId:"filled-field-index",value:a}],styles:{"font-family":"var(--monospace-font-family)","font-size":"var(--monospace-font-size)",...i.has(a)&&{"background-color":"var(--sys-color-state-hover-on-subtle)"}}}))}#$(i,e){const a=document.createElement("span");let o="";switch(e){case"autocompleteAttribute":a.textContent=s(t.attr),o=s(t.autocompleteAttribute);break;case"autofillInferred":a.textContent=s(t.heur),o=s(t.inferredByHeuristics)}return n`
      ${i}
      ${a.textContent?n`
          <devtools-adorner title=${o} .data=${{name:e,content:a}}></devtools-adorner>
        `:f}
    `}}customElements.define("devtools-autofill-view",k);const G=Object.freeze(Object.defineProperty({__proto__:null,AutofillView:k,i18nString:s},Symbol.toStringTag,{value:"Module"}));export{G as AutofillView};
//# sourceMappingURL=autofill-BPyv8jHv.js.map
