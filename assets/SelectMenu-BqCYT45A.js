import{bW as S,aN as s,bX as I,a_ as a,aO as h,dK as M,bn as x,aP as C,dA as B,bj as L,bH as P,dL as T}from"./inspector-CyOA7R9n.js";import"./ShortcutDialog-D3xyB3nU.js";import{n as N}from"./directives-BpSiwtWR.js";const k=new CSSStyleSheet;k.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  border-radius: 3px;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: var(--override-menu-background-color, var(--sys-color-cdt-base-container));
}

:host([has-open-dialog]) {
  background-color: var(--override-menu-active-background-color, var(--sys-color-neutral-container));
}

#container {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: fit-content;
  display: block;
}

#container:focus {
  outline: none;
}

@keyframes slideIn {
  from {
    transform: var(--translate-dialog);
    opacity: 0%;
  }

  to {
    transform: none;
    opacity: 100%;
  }
}

/*# sourceURL=menu.css */
`);const E=new CSSStyleSheet;E.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.menu-group-label {
  margin: 4px 30px 4px 10px;
  font-size: 12px;
  line-height: 16px;
  position: relative;
  color: var(--sys-color-token-subtle);
  display: block;
}

/*# sourceURL=menuGroup.css */
`);const A=new CSSStyleSheet;A.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.menu-item {
  padding: 4px 30px 4px calc(10px + var(--menu-checkmark-width));
  font-size: 12px;
  line-height: 16px;
  position: relative;
  display: block;
  color: var(--sys-color-on-surface);
}

.menu-item:focus {
  outline: none;
}

:host(:not(:first-child)) .menu-item {
  border-top: var(--override-divider-line);
}

:host-context(devtools-menu-group) .menu-item {
  padding: 4px 30px 4px 36px;
}

.is-selected-item::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  mask-repeat: no-repeat;
  mask-position: center;
  width: calc(var(--menu-checkmark-width) - 10px);
  height: var(--menu-checkmark-height);
  mask-image: var(--selected-item-check);
  background: var(--sys-color-token-subtle);
}

:host(:hover:not(.prevents-close)) .menu-item,
:host(:focus-visible:not(.prevents-close)) .menu-item {
  background: var(--sys-color-state-hover-on-subtle);
}

:host(:focus) {
  outline: none;
}

/*# sourceURL=menuItem.css */
`);const{html:g}=C,y=S.instance(),j=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m8.229%2014.062-3.521-3.541L5.75%209.479l2.479%202.459%206.021-6L15.292%207l-7.063%207.062Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString();class z extends HTMLElement{#i=this.attachShadow({mode:"open"});#t=this.#v.bind(this);#s=null;#o=!1;#e={origin:null,open:!1,position:"auto",showConnector:!1,showDivider:!1,showSelectedItem:!0,horizontalAlignment:"auto",getConnectorCustomXPosition:null};get origin(){return this.#e.origin}set origin(e){this.#e.origin=e,s(this,this.#t)}get open(){return this.#e.open}set open(e){e!==this.open&&(this.#e.open=e,this.toggleAttribute("has-open-dialog",this.open),this.#n().setDialogVisible(this.open),s(this,this.#t))}get position(){return this.#e.position}set position(e){this.#e.position=e,s(this,this.#t)}get showConnector(){return this.#e.showConnector}set showConnector(e){this.#e.showConnector=e,s(this,this.#t)}get showDivider(){return this.#e.showDivider}set showDivider(e){this.#e.showDivider=e,s(this,this.#t)}get showSelectedItem(){return this.#e.showSelectedItem}set showSelectedItem(e){this.#e.showSelectedItem=e,s(this,this.#t)}get horizontalAlignment(){return this.#e.horizontalAlignment}set horizontalAlignment(e){this.#e.horizontalAlignment=e,s(this,this.#t)}get getConnectorCustomXPosition(){return this.#e.getConnectorCustomXPosition}set getConnectorCustomXPosition(e){this.#e.getConnectorCustomXPosition=e,s(this,this.#t)}connectedCallback(){this.#i.adoptedStyleSheets=[k],y.write(()=>{this.style.setProperty("--selected-item-check",`url(${j})`),this.style.setProperty("--menu-checkmark-width",this.#e.showSelectedItem?"26px":"0px"),this.style.setProperty("--menu-checkmark-height",this.#e.showSelectedItem?"12px":"0px");const e=this.showDivider?"1px var(--divider-line) solid":"none";this.style.setProperty("--override-divider-line",e)})}#n(){if(!this.#s)throw new Error("Dialog not found");return this.#s}async#r(){await y.write(()=>{this.setAttribute("has-open-dialog","has-open-dialog");const e=this.#i.querySelector("#container");e instanceof HTMLElement&&e.focus()})}#l(){this.#a().focus()}#a(){let o=(this.#i.querySelector("slot")?.assignedElements())[0];if(o instanceof HTMLSlotElement&&(o=o?.assignedElements()[0]),o instanceof r&&(o=o.shadowRoot?.querySelector("slot")?.assignedElements()[0]),o instanceof HTMLElement)return o;throw new Error("First item not found")}#c(e){const t=e.composedPath();if(e.stopPropagation(),t.find(n=>n instanceof HTMLInputElement))return;const o=e.composedPath().find(n=>n instanceof i);o instanceof i&&this.#h(o)}#u(e){const t=e.key;e.stopImmediatePropagation();let o=e.target;const n=e.composedPath(),u=t==="ArrowDown"||t==="ArrowRight";if(!this.#o&&u){this.#l(),this.#o=!0;return}if(!this.#o&&t==="ArrowUp"){this.#g(),this.#o=!0;return}!(o instanceof i)&&(o=n.find(p=>p instanceof i),!(o instanceof i))||(I(t)?this.#p(t,o):t==="Home"?this.#f(o):t==="End"?this.#g():t==="Enter"||e.code==="Space"?this.#h(o):t==="Escape"&&(e.preventDefault(),this.#d()))}#h(e){e.value!==""&&(this.dispatchEvent(new w(e.value)),!e.preventMenuCloseOnSelection&&this.#d())}#p(e,t){let o=t;e==="ArrowDown"?(o=t.nextElementSibling,o===null&&t.parentElement instanceof r&&(o=this.#m(t))):e==="ArrowUp"&&(o=t.previousElementSibling,o===null&&t.parentElement instanceof r&&(o=this.#w(t))),o instanceof i&&o.focus()}#m(e){const t=e.parentElement;if(!(t instanceof r))return null;const o=t.nextElementSibling;if(o instanceof i)return o;if(!(o instanceof r))return null;for(const n of o.children)if(n instanceof i)return n;return null}#w(e){const t=e.parentElement;if(!(t instanceof r))return null;const o=t.previousElementSibling;return o instanceof i?o:o instanceof r&&o.lastElementChild instanceof i?o.lastElementChild:null}#f(e){let t=e;for(e.parentElement instanceof r&&(t=e.parentElement);t?.previousElementSibling;)t=t?.previousElementSibling;if(t instanceof i){t.focus();return}for(const o of t.children)if(o instanceof i){o.focus();return}}#g(){const e=this.#a();let t=e;for(e.parentElement instanceof r&&(t=e.parentElement);t?.nextElementSibling;)t=t?.nextElementSibling;if(t instanceof i){t.focus();return}t instanceof r&&t.lastElementChild instanceof i&&t.lastElementChild.focus()}#d(e){e&&e.stopImmediatePropagation(),this.dispatchEvent(new f),this.#n().setDialogVisible(!1),this.#o=!1}async#v(){if(!a(this))throw new Error("Menu render was not scheduled");h(g`
      <devtools-dialog
        @clickoutsidedialog=${this.#d}
        @forceddialogclose=${this.#d}
        .position=${this.position}
        .showConnector=${this.showConnector}
        .origin=${this.origin}
        .dialogShownCallback=${this.#r.bind(this)}
        .horizontalAlignment=${this.horizontalAlignment}
        .getConnectorCustomXPosition=${this.getConnectorCustomXPosition}
        on-render=${N(e=>{this.#s=e})}
        >
        <span id="container" role="menu" tabIndex="0" @keydown=${this.#u} jslog=${M().track({resize:!0,keydown:"Escape"})}>
          <slot @click=${this.#c}>
          </slot>
        </span>
      </devtools-dialog>
    `,this.#i,{host:this})}}class i extends HTMLElement{#i=this.attachShadow({mode:"open"});#t=this.#o.bind(this);connectedCallback(){this.#i.adoptedStyleSheets=[A],this.tabIndex=0,this.setAttribute("role","menuitem")}#s={value:"",preventMenuCloseOnSelection:!1,selected:!1};get preventMenuCloseOnSelection(){return this.#s.preventMenuCloseOnSelection}set preventMenuCloseOnSelection(e){this.#s.preventMenuCloseOnSelection=e,s(this,this.#t)}get value(){return this.#s.value}set value(e){this.#s.value=e,s(this,this.#t)}get selected(){return this.#s.selected}set selected(e){this.#s.selected=e,s(this,this.#t)}async#o(){if(!a(this))throw new Error("MenuItem render was not scheduled");h(g`
      <span class=${x({"menu-item":!0,"is-selected-item":this.selected,"prevents-close":this.preventMenuCloseOnSelection})}
      >
        <slot></slot>
      </span>
    `,this.#i,{host:this})}}class r extends HTMLElement{#i=this.attachShadow({mode:"open"});#t=this.#o.bind(this);connectedCallback(){this.#i.adoptedStyleSheets=[E]}#s={name:null};get name(){return this.#s.name}set name(e){this.#s.name=e,s(this,this.#t)}async#o(){if(!a(this))throw new Error("MenuGroup render was not scheduled");h(g`
      <span class="menu-group">
        <span class="menu-group-label">${this.name}</span>
        <slot></slot>
      </span>
    `,this.#i,{host:this})}}customElements.define("devtools-menu",z);customElements.define("devtools-menu-item",i);customElements.define("devtools-menu-group",r);class w extends Event{itemValue;static eventName="menuitemselected";constructor(e){super(w.eventName,{bubbles:!0,composed:!0}),this.itemValue=e}}class f extends Event{static eventName="menucloserequest";constructor(){super(f.eventName,{bubbles:!0,composed:!0})}}const $=new CSSStyleSheet;$.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: 3px;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: var(--override-select-menu-background-color, var(--sys-color-cdt-base-container));
}

:host([has-open-dialog]) {
  background-color: var(--override-select-menu-active-background-color, var(--sys-color-neutral-container));
}

button {
  background: none;
}

#side-button {
  border: 1px solid var(--override-select-menu-border, var(--sys-color-neutral-outline));
  border-radius: 3px 0 0 3px;
  border-right: none;
  height: 100%;
  position: relative;
  padding: var(--override-select-button-padding);
}

button:disabled {
  cursor: not-allowed;
}

@keyframes slideIn {
  from {
    transform: var(--translate-dialog);
    opacity: 0%;
  }

  to {
    transform: none;
    opacity: 100%;
  }
}

/*# sourceURL=selectMenu.css */
`);const D=new CSSStyleSheet;D.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  height: 100%;
  width: 100%;
  display: block;
}

.show {
  display: block;
  font-size: 12px;
  color: var(--sys-color-on-surface);
  height: 100%;
  width: 100%;
  border: none;
  border-radius: var(--override-select-menu-show-button-border-radius);
  padding: var(--override-select-menu-show-button-padding, 1px 6px);
}

.show:focus-visible {
  outline: 2px solid var(--sys-color-state-focus-ring);
  outline-offset: 2px;
}

#button-label-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: fit-content;
  height: 100%;
}

#label[witharrow].single-arrow {
  padding: 0;
}

#label[witharrow] {
  padding: var(--override-select-menu-label-with-arrow-padding, 0 10px 0 0);
  text-align: left;
}

.single-arrow + span#arrow {
  margin: 0;
}

#arrow {
  mask-image: var(--deploy-menu-arrow);
  -webkit-mask-position-y: center;
  margin-left: 5px;
  width: 14px;
  flex-shrink: 0;
  height: 14px;
  display: inline-block;
  mask-repeat: no-repeat;
  background-color: var(--override-throttling-icon-and-text-color, var(--override-select-menu-arrow-color, var(--sys-color-on-surface)));
  transform: rotate(var(--arrow-angle));
  transform-origin: center;
  transition: 200ms;
}

.single-arrow {
  border-radius: 0 3px 3px 0;
  border: 1px solid var(--override-select-menu-border, var(--sys-color-neutral-outline));
  height: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

button[aria-expanded="true"] #arrow {
  transform: rotate(calc(var(--arrow-angle) + 180deg));
}

button {
  background: none;
}

button[disabled] {
  color: var(--sys-color-state-disabled);
}

/*# sourceURL=selectMenuButton.css */
`);const{html:l}=C,m=S.instance(),U=new URL("data:image/svg+xml,%3csvg%20width='14'%20height='14'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m7%209.45%203.85-5.6h-7.7'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString();class R extends HTMLElement{#i=this.attachShadow({mode:"open"});#t=this.#m.bind(this);#s=null;#o=!1;#e={buttonTitle:"",position:"bottom",horizontalAlignment:"auto",showArrow:!1,showConnector:!1,sideButton:!1,showDivider:!1,disabled:!1,showSelectedItem:!0,jslogContext:""};get buttonTitle(){return this.#e.buttonTitle}set buttonTitle(e){this.#e.buttonTitle=e,s(this,this.#t)}get position(){return this.#e.position}set position(e){this.#e.position=e,s(this,this.#t)}get horizontalAlignment(){return this.#e.horizontalAlignment}set horizontalAlignment(e){this.#e.horizontalAlignment=e,s(this,this.#t)}get showConnector(){return this.#e.showConnector}set showConnector(e){this.#e.showArrow||(this.#e.showArrow=e),this.#e.showConnector=e,s(this,this.#t)}get showArrow(){return this.#e.showArrow}set showArrow(e){this.#e.showArrow=e,s(this,this.#t)}get sideButton(){return this.#e.sideButton}set sideButton(e){this.#e.sideButton=e,s(this,this.#t)}get disabled(){return this.#e.disabled}set disabled(e){this.#e.disabled=e,s(this,this.#t)}get showDivider(){return this.#e.showDivider}set showDivider(e){this.#e.showDivider=e,s(this,this.#t)}get showSelectedItem(){return this.#e.showSelectedItem}set showSelectedItem(e){this.#e.showSelectedItem=e,s(this,this.#t)}get jslogContext(){return this.#e.jslogContext}set jslogContext(e){this.#e.jslogContext=e,s(this,this.#t)}connectedCallback(){this.#i.adoptedStyleSheets=[$]}#n(){if(!this.#s&&(this.#s=this.#i.querySelector("devtools-select-menu-button"),!this.#s))throw new Error("Arrow not found");return this.#s}#r(){this.#o=!0,this.setAttribute("has-open-dialog","has-open-dialog"),s(this,this.#t)}click(){this.#n().click()}#l(){this.dispatchEvent(new b)}#a(){if(this.showConnector){const e=this.#n().getBoundingClientRect();return(e.left+e.right)/2}return NaN}#c(){return this.buttonTitle instanceof Function?this.buttonTitle():this.buttonTitle}#u(){const e=this.#c();return this.sideButton?l`
      <button id="side-button" @click=${this.#l} ?disabled=${this.disabled}>
        ${e}
      </button>
      <devtools-select-menu-button
        @click=${this.#r}
        @selectmenubuttontrigger=${this.#r}
        .singleArrow=${!0}
        .open=${this.#o}
        .showArrow=${!0}
        .arrowDirection=${this.position}
        .disabled=${this.disabled}>
      </devtools-select-menu-button>
    `:l`
          <devtools-select-menu-button
            @selectmenubuttontrigger=${this.#r}
            .open=${this.#o} .showArrow=${this.showArrow}
            .arrowDirection=${this.position}
            .disabled=${this.disabled}
            .jslogContext=${this.jslogContext}>
              ${e}
            </devtools-select-menu-button>
        `}#h(e){e&&e.stopImmediatePropagation(),m.write(()=>{this.removeAttribute("has-open-dialog")}),this.#o=!1,s(this,this.#t)}#p(e){this.dispatchEvent(new v(e.itemValue))}async#m(){if(!a(this))throw new Error("SelectMenu render was not scheduled");h(l`
      <devtools-menu
        @menucloserequest=${this.#h}
        @menuitemselected=${this.#p}
        .position=${this.position}
        .origin=${this}
        .showConnector=${this.showConnector}
        .showDivider=${this.showDivider}
        .showSelectedItem=${this.showSelectedItem}
        .open=${this.#o}
        .getConnectorCustomXPosition=${this.showConnector?this.#a.bind(this):null}
      >
      <slot>
      </slot>
      </devtools-menu>
      ${this.#u()}
    `,this.#i,{host:this})}}class H extends HTMLElement{#i=this.attachShadow({mode:"open"});#t=this.#l.bind(this);#s=null;connectedCallback(){this.#i.adoptedStyleSheets=[D],this.style.setProperty("--deploy-menu-arrow",`url(${U})`),m.write(()=>{switch(this.arrowDirection){case"auto":case"top":{this.style.setProperty("--arrow-angle","180deg");break}case"bottom":{this.style.setProperty("--arrow-angle","0deg");break}default:B(this.arrowDirection,`Unknown position type: ${this.arrowDirection}`)}})}#o={showArrow:!1,arrowDirection:"bottom",disabled:!1,singleArrow:!1,jslogContext:""};get showArrow(){return this.#o.showArrow}set showArrow(e){this.#o.showArrow=e,s(this,this.#t)}get arrowDirection(){return this.#o.arrowDirection}set arrowDirection(e){this.#o.arrowDirection=e,s(this,this.#t)}get disabled(){return this.#o.disabled}set disabled(e){this.#o.disabled=e,s(this,this.#t)}set open(e){m.write(()=>{this.#e()?.setAttribute("aria-expanded",String(e))})}set singleArrow(e){this.#o.singleArrow=e,s(this,this.#t)}get jslogContext(){return this.#o.jslogContext}set jslogContext(e){this.#o.jslogContext=e,s(this,this.#t)}click(){this.#e()?.click()}#e(){return this.#s||(this.#s=this.#i.querySelector("button")),this.#s}#n(e){const t=e.key,o=this.arrowDirection==="bottom"&&t==="ArrowDown",n=this.arrowDirection==="top"&&t==="ArrowUp",u=t===T,p=e.code==="Space";(o||n||u||p)&&(this.dispatchEvent(new c),e.preventDefault())}#r(){this.dispatchEvent(new c)}async#l(){if(!a(this))throw new Error("SelectMenuItem render was not scheduled");const e=this.#o.showArrow?l`<span id="arrow"></span>`:L,t={"single-arrow":this.#o.singleArrow},o=l`
      <span id="button-label-wrapper">
        <span id="label" ?witharrow=${this.showArrow} class=${x(t)}><slot></slot></span>
        ${e}
      </span>
      `;h(l`
      <button aria-haspopup="true" aria-expanded="false" class="show" @keydown=${this.#n} @click=${this.#r} ?disabled=${this.disabled} jslog=${P(this.jslogContext)}>${o}</button>
    `,this.#i,{host:this})}}customElements.define("devtools-select-menu",R);customElements.define("devtools-select-menu-button",H);class v extends Event{itemValue;static eventName="selectmenuselected";constructor(e){super(v.eventName,{bubbles:!0,composed:!0}),this.itemValue=e}}class b extends Event{static eventName="selectmenusidebuttonclick";constructor(){super(b.eventName,{bubbles:!0,composed:!0})}}class c extends Event{static eventName="selectmenubuttontrigger";constructor(){super(c.eventName,{bubbles:!0,composed:!0})}}export{i as M,R as S,w as a};
//# sourceMappingURL=SelectMenu-BqCYT45A.js.map
