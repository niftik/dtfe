import{bj as I,aP as D,I as et,dA as st,bW as ot,b as q,g as G,cR as H,bX as it,cM as rt,bv as R,cc as V,aO as K,dM as nt,bn as O,dN as lt,dO as at}from"./inspector-CyOA7R9n.js";const X=new CSSStyleSheet;X.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  height: 100%;
  display: block;
  position: relative;
}

/* Ensure that vertically we don't overflow */
.wrapping-container {
  overflow-y: auto;
  /* Use max-height instead of height to ensure that the
    table does not use more space than necessary. */
  height: 100%;
}

.wrapping-container:not(.show-scrollbar)::-webkit-scrollbar {
  display: none;
}

table {
  border-spacing: 0;
  width: 100%;
  height: 100%;
  /* To make sure that we properly hide overflowing text
    when horizontal space is too narrow. */
  table-layout: fixed;
}

tr {
  outline: none;
}

thead tr {
  height: 27px;
}

tbody tr {
  background-color: var(--override-data-grid-row-background-color, --sys-color-surface);
}

tbody tr:nth-child(odd) {
  background-color: var(--sys-color-surface1);
}

tbody tr:hover:not(.selected) {
  background-color: var(--sys-color-state-hover-on-subtle);
}

tbody tr.selected {
  background-color: var(--sys-color-neutral-container);
}

tbody tr.selected:focus-within {
  background-color: var(--sys-color-tonal-container);
}

.wrapping-container.striped tr:nth-child(odd):not(.selected):not(.padding-row):not(:hover) {
  background-color: var(--sys-color-surface1);
}

td,
th {
  box-sizing: border-box;
  padding: 1px 4px;
  border-left: 1px solid var(--sys-color-divider);
  color: var(--sys-color-on-surface);
  height: var(--table-row-height);
  user-select: text;
  /* Ensure that text properly cuts off if horizontal space is too narrow */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

th {
  font-weight: normal;
  text-align: left;
  border-bottom: 1px solid var(--sys-color-divider);
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--sys-color-surface1);
}

td:focus,
th:focus {
  outline: var(--sys-color-primary) auto 1px;
}

th:hover.sortable {
  background-color: var(--sys-color-surface2);
}

.cell-resize-handle {
  top: 0;
  height: 100%;
  z-index: 3;
  width: 20px;
  cursor: col-resize;
  position: absolute;
}

/* There is no divider before the first cell */
td.firstVisibleColumn,
th.firstVisibleColumn {
  border-left-width: 0;
}

.hidden {
  display: none;
}

.filler-row td {
  /* By making the filler row cells 100% they take up any extra height,
  * leaving the cells with content to be the regular height, and the
  * final filler row to be as high as it needs to be to fill the empty
  * space.
  */
  height: 100%;
  pointer-events: none;
  padding: 0;
}

.filler-row.empty-table td {
  /* If the table is empty and we have no renderable rows, the filler row cell
   * needs to have some form of padding to make it have some height, else it
   * stays at a height of 0px and doesn't fill the table. With this padding set,
   * it will then have some height & expand the row it's in to 100% high as
   * desired. */
  padding: 1px;
}

tbody tr.selected:focus-within td {
  border-left-color: var(--sys-color-divider-on-tonal-container);
}

/* Leave space for the sort indicator */
[aria-sort="ascending"],
[aria-sort="descending"] {
  padding-right: 20px;
}

[aria-sort="descending"]::after {
  content: "";
  width: 0;
  border-left: 0.4em solid transparent;
  border-right: 0.4em solid transparent;
  border-top: 0.4em solid var(--sys-color-token-subtle);
  position: absolute;
  right: 0.5em;
  top: 0.85em;
}

[aria-sort="ascending"]::after {
  content: "";
  width: 0;
  border-bottom: 0.4em solid var(--sys-color-token-subtle);
  border-left: 0.4em solid transparent;
  border-right: 0.4em solid transparent;
  position: absolute;
  right: 0.5em;
  top: 0.7em;
}

@media (forced-colors: active) {
  th.sortable {
    outline: Highlight auto 1px;
  }

  th:hover.sortable {
    background-color: Highlight;
  }

  [aria-sort="ascending"]::after {
    forced-color-adjust: none;
    border-bottom: 0.4em solid buttonText;
  }

  [aria-sort="descending"]::after {
    forced-color-adjust: none;
    border-top: 0.4em solid buttonText;
  }
}

/*# sourceURL=dataGrid.css */
`);class F extends Event{static eventName="columnheaderclick";data;constructor(t,e){super(F.eventName),this.data={column:t,columnIndex:e}}}class W extends Event{static eventName="contextmenucolumnsortclick";data;constructor(t){super(W.eventName),this.data={column:t}}}class E extends Event{static eventName="contextmenuheaderresetclick";constructor(){super(E.eventName)}}class N extends Event{static eventName="cellfocused";data;constructor(t,e){super(N.eventName,{composed:!0}),this.data={cell:t,row:e}}}class P extends Event{static eventName="rowmouseenter";data;constructor(t){super(P.eventName,{composed:!0}),this.data={row:t}}}class B extends Event{static eventName="rowmouseleave";data;constructor(t){super(B.eventName,{composed:!0}),this.data={row:t}}}function ct(n,t){const e=!t.visible,s=n.data.columns.map(o=>(o===t&&(o.visible=e),o));n.data={...n.data,columns:s}}function _(n,t){const{columns:e}=n.data;for(const s of e)s.hideable&&t.defaultSection().appendCheckboxItem(s.title,()=>{ct(n,s)},{checked:s.visible,jslogContext:s.id})}function U(n,t){const e=n.data.columns.filter(s=>s.sortable===!0);if(e.length>0)for(const s of e)t.defaultSection().appendItem(s.title,()=>{n.dispatchEvent(new W(s))},{jslogContext:s.id})}const{html:z}=D,dt=n=>z`${n}`,It=n=>{if(!n)return I;const t=String(n);return z`<code>${t}</code>`},$t=n=>n?z`<div style="display: flex; justify-content: center;">${n}</div>`:I;function j(n){return JSON.stringify(n.map(t=>t.value instanceof et?null:t.value)).toLowerCase()}function T(n,t){const e=n.cells.find(s=>s.columnId===t);if(e===void 0)throw new Error(`Found a row that was missing an entry for column ${t}.`);return e}function ht(n){return n.renderer?n.renderer(n.value):dt(n.value)}function ut(n,t){const e=n.filter(o=>o.visible).reduce((o,r)=>o+r.widthWeighting,0),s=n.find(o=>o.id===t);if(!s)throw new Error(`Could not find column with ID ${t}`);if(s.widthWeighting<1)throw new Error(`Error with column ${t}: width weightings must be >= 1.`);return s.visible?Math.round(s.widthWeighting/e*100):0}function ft(n){const{key:t,currentFocusedCell:e,columns:s,rows:o}=n,[r,i]=e;switch(t){case"ArrowLeft":{const c=s.findIndex(d=>d.visible);if(r===c)return[r,i];let l=r;for(let d=l-1;d>=0;d--)if(s[d].visible){l=d;break}return[l,i]}case"ArrowRight":{let c=r;for(let l=c+1;l<s.length;l++)if(s[l].visible){c=l;break}return[c,i]}case"ArrowUp":{const l=s.some(u=>u.sortable===!0)?0:1;if(i===l)return[r,i];let d=i;for(let u=i-1;u>=l;u--){if(u===0){d=0;break}if(!o[u-1].hidden){d=u;break}}return[r,d]}case"ArrowDown":{if(i===0){const l=o.findIndex(d=>!d.hidden);return l>-1?[r,l+1]:[r,i]}let c=i;for(let l=c+1;l<o.length+1;l++)if(!o[l-1].hidden){c=l;break}return[r,c]}default:return st(t,`Unknown arrow key: ${t}`)}}const bt=n=>{const{columns:t,rows:e}=n,o=t.some(i=>i.sortable===!0)?0:e.findIndex(i=>!i.hidden)+1;return[t.findIndex(i=>i.visible),o]},gt=n=>n.length<25?n:n.substr(0,20)+"…",x=ot.instance(),{html:g,Directives:{ifDefined:p,classMap:A,styleMap:S,repeat:mt}}=D,f={sortBy:"Sort By",resetColumns:"Reset Columns",headerOptions:"Header Options",enterToSort:"Column sort state: {PH1}. Press enter to apply sorting filter",sortAsc:"ascending",sortDesc:"descending",sortNone:"none"},pt=q("ui/components/data_grid/DataGrid.ts",f),w=G.bind(void 0,pt),wt=new Set([" ","Enter"]),C=20;class Ct extends HTMLElement{#o=this.attachShadow({mode:"open"});#t=[];#i=[];#n=null;#c=!1;#u="NOT_SCROLLED";#l=void 0;#f=void 0;#b=10;#d=!1;#s=!1;#h=!0;#e=null;#g=new WeakMap;#S=new ResizeObserver(()=>{this.#$()});#w=this.#N.bind(this);#C=[0,1];#r=null;#a=!1;#m=!1;#y=!1;connectedCallback(){this.#o.adoptedStyleSheets=[X],this.style.setProperty("--table-row-height",`${C}px`),this.#v()}get data(){return{columns:this.#t,rows:this.#i,activeSort:this.#n,contextMenus:this.#l,autoScrollToBottom:this.#h,label:this.#f,paddingRowsCount:this.#b,showScrollbar:this.#d,striped:this.#s}}set data(t){if(this.#t=t.columns,this.#i=t.rows,this.#i.forEach((e,s)=>{this.#g.set(e,s)}),this.#n=t.activeSort,this.#l=t.contextMenus,this.#f=t.label,this.#d=t.showScrollbar,this.#s=t.striped,typeof t.autoScrollToBottom=="boolean"&&(this.#h=t.autoScrollToBottom),this.#a||(this.#C=bt({columns:this.#t,rows:this.#i})),t.paddingRowsCount!==void 0&&(this.#b=t.paddingRowsCount),this.#a&&this.#A()){const[e,s]=this.#x(),o=e>this.#t.length,r=s>this.#i.length;(o||r)&&(this.#r=[o?this.#t.length:e,r?this.#i.length:s])}this.#v()}#p(){return this.#h?this.#u==="SCROLLED_TO_BOTTOM"||!this.#m&&this.#u!=="MANUAL_SCROLL_NOT_BOTTOM":!1}#M(){if(this.#a===!1||!this.#p())return;const t=this.#o.querySelector(".wrapping-container");t&&x.scroll(()=>{const e=t.scrollHeight;t.scrollTo(0,e)})}#O(){this.#a||this.#S.observe(this.#o.host)}#A(){return this.#r!==null}#R(){if(!this.#r)return null;const[t,e]=this.#r;return this.#o.querySelector(`[data-row-index="${e}"][data-col-index="${t}"]`)}#T(t){t.focus()}#I([t,e]){if(this.#m=!0,this.#r&&this.#r[0]===t&&this.#r[1]===e)return;this.#r=[t,e],this.#v();const s=this.#R();if(s&&(this.#T(s),e===0&&this.#t[t].sortable)){const o=this.#L(this.#t[t]);H(w(f.enterToSort,{PH1:o||""}))}}#L(t){switch(this.#E(t)){case"ascending":return f.sortAsc;case"descending":return f.sortDesc;case"none":return f.sortNone}}#H(t){const e=t.key;if(!this.#r)return;if(wt.has(e)){const[o,r]=this.#r,i=this.#t[o];r===0&&i&&i.sortable&&this.#k(i,o)}if(!it(e))return;const s=ft({key:e,currentFocusedCell:this.#r,columns:this.#t,rows:this.#i});t.preventDefault(),this.#I(s)}#k(t,e){this.dispatchEvent(new F(t,e))}#E(t){if(t.sortable&&(!this.#n||this.#n.columnId!==t.id))return"none";if(this.#n&&this.#n.columnId===t.id)return this.#n.direction==="ASC"?"ascending":"descending"}#D(t){const e=this.#t.map((o,r)=>{if(!o.visible)return I;const i=O({firstVisibleColumn:r===0});return g`<td aria-hidden="true" class=${i} data-filler-row-column-index=${r}></td>`}),s=O({"filler-row":!0,"padding-row":!0,"empty-table":t===0});return g`<tr aria-hidden="true" class=${s}>${e}</tr>`}#F(){this.#e&&(this.#e.documentForCursorChange.body.style.cursor=this.#e.cursorToRestore,this.#e=null,this.#$())}#W(t){if(t.buttons!==1||rt()&&t.ctrlKey)return;t.preventDefault();const e=t.target;if(!e)return;const s=e.dataset.columnIndex;if(!s)return;const o=globalThis.parseInt(s,10),r=this.#t.findIndex((a,h)=>h>o&&a.visible===!0),i=this.#o.querySelector(`td[data-filler-row-column-index="${o}"]`),c=this.#o.querySelector(`td[data-filler-row-column-index="${r}"]`);if(!i||!c)return;const l=this.#o.querySelector(`col[data-col-column-index="${o}"]`),d=this.#o.querySelector(`col[data-col-column-index="${r}"]`);if(!l||!d)return;const u=t.target.ownerDocument;u&&(this.#e={leftCellCol:l,rightCellCol:d,leftCellColInitialPercentageWidth:globalThis.parseInt(l.style.width,10),rightCellColInitialPercentageWidth:globalThis.parseInt(d.style.width,10),initialLeftCellWidth:i.clientWidth,initialRightCellWidth:c.clientWidth,initialMouseX:t.x,documentForCursorChange:u,cursorToRestore:e.style.cursor},u.body.style.cursor="col-resize",e.setPointerCapture(t.pointerId),e.addEventListener("pointermove",this.#w))}#N(t){if(t.preventDefault(),!this.#e)return;const e=10,s=this.#e.leftCellColInitialPercentageWidth+this.#e.rightCellColInitialPercentageWidth-e,o=t.x-this.#e.initialMouseX,i=Math.abs(o)/(this.#e.initialLeftCellWidth+this.#e.initialRightCellWidth)*100;let c,l;o>0?(c=R(this.#e.leftCellColInitialPercentageWidth+i,e,s),l=R(this.#e.rightCellColInitialPercentageWidth-i,e,s)):o<0&&(c=R(this.#e.leftCellColInitialPercentageWidth-i,e,s),l=R(this.#e.rightCellColInitialPercentageWidth+i,e,s)),!(!c||!l)&&(this.#e.leftCellCol.style.width=c.toFixed(2)+"%",this.#e.rightCellCol.style.width=l.toFixed(2)+"%")}#P(t){t.preventDefault();const e=t.target;e&&(e.releasePointerCapture(t.pointerId),e.removeEventListener("pointermove",this.#w),this.#F())}#B(t,e){const[s]=e,o=this.#z();return s===o||!t.visible?I:g`<span class="cell-resize-handle"
     @pointerdown=${this.#W}
     @pointerup=${this.#P}
     data-column-index=${s}
    ></span>`}#z(){let t=this.#t.length-1;for(;t>-1&&!this.#t[t].visible;t--);return t}#V(t){if(t.button!==2&&t.button!==-1)return;const e=new V(t);_(this,e);const s=e.defaultSection().appendSubMenuItem(w(f.sortBy),!1,"sort-by");U(this,s),e.defaultSection().appendItem(w(f.resetColumns),()=>{this.dispatchEvent(new E)},{jslogContext:"reset-columns"}),this.#l&&this.#l.headerRow&&this.#l.headerRow(e,this.#t),e.show()}#_(t){if(t.button!==2&&t.button!==-1||!t.target||!(t.target instanceof HTMLElement))return;const e=t.target.dataset.rowIndex;if(!e)return;const s=parseInt(e,10),o=this.#i[s-1],r=new V(t),i=r.defaultSection().appendSubMenuItem(w(f.sortBy),!1,"sort-by");U(this,i);const c=r.defaultSection().appendSubMenuItem(w(f.headerOptions),!1,"header-options");_(this,c),c.defaultSection().appendItem(w(f.resetColumns),()=>{this.dispatchEvent(new E)},{jslogContext:"reset-columns"}),this.#l&&this.#l.bodyRow&&this.#l.bodyRow(r,this.#t,o,this.#i),r.show()}#U(t){const e=t.target;if(!e)return;const s=Math.round(e.scrollTop+e.clientHeight)===Math.round(e.scrollHeight);this.#u=s?"SCROLLED_TO_BOTTOM":"MANUAL_SCROLL_NOT_BOTTOM",this.#v()}#$(){return x.read(()=>{const t=this.#o.querySelectorAll("th:not(.hidden)"),e=this.#o.querySelectorAll(".cell-resize-handle");this.#o.querySelector("table")&&t.forEach(async(o,r)=>{const i=o.clientWidth,c=o.offsetLeft;if(e[r]){const l=e[r].clientWidth;x.write(()=>{e[r].style.left=`${c+i-l}px`})}})})}#j(){return x.read(()=>{const t=this.#o.querySelector(".wrapping-container");let e=0,s=window.innerHeight;t&&(e=t.scrollTop,s=t.clientHeight);const o=C*this.#b;let r=Math.floor((e-o)/C),i=Math.ceil((e+s+o)/C);return r=Math.max(0,r),i=Math.min(this.#i.filter(c=>!c.hidden).length,i),{topVisibleRow:r,bottomVisibleRow:i}})}#q(){this.#m=!1}#x(){return this.#r||this.#C}async#v(){if(!this.isConnected)return;if(this.#c){this.#y=!0;return}this.#c=!0;const{topVisibleRow:t,bottomVisibleRow:e}=await this.#j(),s=this.#i.filter(a=>!a.hidden),o=s.filter((a,h)=>h>=t&&h<=e),r=this.#t.findIndex(a=>a.visible),i=this.#t.some(a=>a.sortable===!0),c={"wrapping-container":!0,"show-scrollbar":this.#d===!0,striped:this.#s===!0};await x.write(()=>{K(g`
      ${this.#t.map((a,h)=>this.#B(a,[h,0]))}
      <div class=${A(c)} @scroll=${this.#U} @focusout=${this.#q}>
        <table
          aria-label=${p(this.#f)}
          aria-rowcount=${this.#i.length}
          aria-colcount=${this.#t.length}
          @keydown=${this.#H}
        >
          <!-- @ts-ignore -->
          <colgroup>
            ${this.#t.map((a,h)=>{const b=`width: ${ut(this.#t,a.id)}%`;return a.visible?g`<col style=${b} data-col-column-index=${h}>`:I})}
          </colgroup>
          <thead>
            <tr @contextmenu=${this.#V}>
              ${this.#t.map((a,h)=>{const y=A({hidden:!a.visible,firstVisibleColumn:h===r,sortable:i}),b=this.#x(),M=i&&h===b[0]&&b[1]===0;return g`<th class=${y}
                  jslog=${nt().track({click:i,resize:!0}).context(a.id)}
                  style=${p(a.styles?S(a.styles):void 0)}
                  data-grid-header-cell=${a.id}
                  @focus=${()=>{this.#I([h,0])}}
                  @click=${()=>{this.#k(a,h)}}
                  title=${a.title}
                  aria-sort=${p(this.#E(a))}
                  aria-colindex=${h+1}
                  data-row-index='0'
                  data-col-index=${h}
                  tabindex=${p(i?M?"0":"-1":void 0)}
                >${a.titleElement||a.title}</th>`})}
            </tr>
          </thead>
          <tbody>
            <tr class="filler-row-top padding-row" style=${S({height:`${t*C}px`})} aria-hidden="true"></tr>
            ${mt(o,a=>this.#g.get(a),a=>{const h=this.#g.get(a);if(h===void 0)throw new Error("Trying to render a row that has no index in the rowIndexMap");const y=this.#x(),b=h+1,M=this.#r?b===this.#r[1]:!1,Y=O({selected:M,hidden:a.hidden===!0});return g`
                <tr
                  aria-rowindex=${h+1}
                  class=${Y}
                  style=${p(a.styles?S(a.styles):void 0)}
                  jslog=${lt().track({keydown:"ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Enter|Space"})}
                  @contextmenu=${this.#_}
                  @mouseenter=${()=>{this.dispatchEvent(new P(a))}}
                  @mouseleave=${()=>{this.dispatchEvent(new B(a))}}
                >${this.#t.map((m,v)=>{const $=T(a,m.id),Z=A({hidden:!m.visible,firstVisibleColumn:v===r}),Q=v===y[0]&&b===y[1],tt=m.visible?ht($):null;return g`<td
                    class=${Z}
                    jslog=${at().track({click:!0})}).context(col.id)}
                    style=${p(m.styles?S(m.styles):void 0)}
                    tabindex=${Q?"0":"-1"}
                    aria-colindex=${v+1}
                    title=${$.title||gt(String($.value))}
                    data-row-index=${b}
                    data-col-index=${v}
                    data-grid-value-cell-for-column=${m.id}
                    @focus=${()=>{this.#I([v,b]),this.dispatchEvent(new N($,a))}}
                  >${tt}</td>`})}
              </tr>`})}
            ${this.#D(o.length)}
            <tr class="filler-row-bottom padding-row" style=${S({height:`${Math.max(0,s.length-e)*C}px`})} aria-hidden="true"></tr>
          </tbody>
        </table>
      </div>
      `,this.#o,{host:this})});const d=this.#x()[1],u=this.#R();this.#m&&d>0&&u&&this.#T(u),this.#M(),this.#O(),this.#a&&this.#$(),this.#c=!1,this.#a=!0,this.#y&&(this.#y=!1,this.#v())}}customElements.define("devtools-data-grid",Ct);const J=new CSSStyleSheet;J.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
  height: 100%;
  overflow: hidden;
}

/*# sourceURL=dataGridController.css */
`);const{html:yt}=D,k={sortInAscendingOrder:"{PH1} sorted in ascending order",sortInDescendingOrder:"{PH1} sorted in descending order",sortingCanceled:"{PH1} sorting canceled"},vt=q("ui/components/data_grid/DataGridController.ts",k),L=G.bind(void 0,vt);class xt extends HTMLElement{#o=this.attachShadow({mode:"open"});#t=!1;#i=[];#n=[];#c=void 0;#u=void 0;#l=!1;#f=!1;#b=[];#d=[];#s=null;#h=[];#e=!0;#g;connectedCallback(){this.#o.adoptedStyleSheets=[J]}get data(){return{columns:this.#b,rows:this.#d,filters:this.#h,autoScrollToBottom:this.#e,contextMenus:this.#c,label:this.#u,paddingRowsCount:this.#g,showScrollbar:this.#l,striped:this.#f}}set data(t){this.#b=t.columns,this.#d=t.rows,this.#c=t.contextMenus,this.#h=t.filters||[],this.#c=t.contextMenus,this.#u=t.label,this.#l=t.showScrollbar,this.#f=t.striped,typeof t.autoScrollToBottom=="boolean"&&(this.#e=t.autoScrollToBottom),this.#i=[...this.#b],this.#n=this.#w(t.rows,this.#h),!this.#t&&t.initialSort&&(this.#s=t.initialSort),this.#s&&this.#C(this.#s),this.#g=t.paddingRowsCount,this.#p()}#S(t,e,s){let o=!1;const{key:r,text:i,negative:c,regex:l}=e;let d;return r?d=j([T(t,r)]):d=j(t.cells.filter(u=>s.has(u.columnId))),l?o=l.test(d):i&&(o=d.includes(i.toLowerCase())),c?!o:o}#w(t,e){if(e.length===0)return[...t];const s=new Set(this.#i.filter(o=>o.visible).map(o=>o.id));return t.map(o=>{let r=!0;for(const i of e)if(!this.#S(o,i,s)){r=!1;break}return{...o,hidden:!r}})}#C(t){const{columnId:e,direction:s}=t;this.#n.sort((o,r)=>{const i=T(o,e),c=T(r,e),l=typeof i.value=="number"?i.value:String(i.value).toUpperCase(),d=typeof c.value=="number"?c.value:String(c.value).toUpperCase();return l<d?s==="ASC"?-1:1:l>d?s==="ASC"?1:-1:0}),this.#p()}#r(t){const{column:e}=t.data;e.sortable&&this.#a(e)}#a(t){if(this.#s&&this.#s.columnId===t.id){const{columnId:s,direction:o}=this.#s;o==="DESC"?this.#s=null:this.#s={columnId:s,direction:"DESC"}}else this.#s={columnId:t.id,direction:"ASC"};const e=t.title;this.#s?(this.#C(this.#s),H(this.#s.direction==="ASC"?L(k.sortInAscendingOrder,{PH1:e||""}):L(k.sortInDescendingOrder,{PH1:e||""}))):(this.#n=this.#w(this.#d,this.#h),this.#p(),H(L(k.sortingCanceled,{PH1:e||""})))}#m(t){this.#a(t.data.column)}#y(){this.#s=null,this.#n=[...this.#d],this.#p()}#p(){K(yt`
      <devtools-data-grid .data=${{columns:this.#i,rows:this.#n,activeSort:this.#s,contextMenus:this.#c,label:this.#u,paddingRowsCount:this.#g,showScrollbar:this.#l,striped:this.#f,autoScrollToBottom:this.#e}}
        @columnheaderclick=${this.#r}
        @contextmenucolumnsortclick=${this.#m}
        @contextmenuheaderresetclick=${this.#y}
     ></devtools-data-grid>
    `,this.#o,{host:this}),this.#t=!0}}customElements.define("devtools-data-grid-controller",xt);export{xt as D,It as c,T as g,$t as i};
//# sourceMappingURL=DataGridController-DdQqp2ti.js.map
