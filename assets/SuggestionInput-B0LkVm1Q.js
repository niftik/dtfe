import{b3 as k,b4 as S,aP as C,b5 as $,b6 as T}from"./inspector-CyOA7R9n.js";const g=new CSSStyleSheet;g.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  font-size: inherit;
  margin: 0;
  padding: 0;
}

:host {
  position: relative;
}

devtools-editable-content {
  background: transparent;
  border: none;
  color: var(--override-color-recorder-input, var(--sys-color-on-surface));
  cursor: text;
  display: inline-block;
  line-height: 18px;
  min-height: 18px;
  min-width: 0.5em;
  outline: none;
  overflow-wrap: anywhere;
}

devtools-editable-content:hover,
devtools-editable-content:focus {
  box-shadow: 0 0 0 1px var(--sys-color-divider);
  border-radius: 2px;
}

devtools-editable-content[placeholder]:empty::before {
  content: attr(placeholder);
  color: var(--sys-color-on-surface);
  opacity: 50%;
}

devtools-editable-content[placeholder]:empty:focus::before {
  content: "";
}

devtools-suggestion-box {
  position: absolute;
  display: none;
}

devtools-editable-content:focus ~ devtools-suggestion-box {
  display: block;
}

.suggestions {
  background-color: var(--sys-color-cdt-base-container);
  box-shadow: var(--drop-shadow);
  min-height: 1em;
  min-width: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  z-index: 100;
  max-height: 350px;
}

.suggestions > li {
  padding: 1px;
  border: 1px solid transparent;
  white-space: nowrap;
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  color: var(--sys-color-on-surface);
}

.suggestions > li:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.suggestions > li.selected {
  background-color: var(--sys-color-primary);
  color: var(--sys-color-cdt-base-container);
}

.strikethrough {
  text-decoration: line-through;
}

/*# sourceURL=suggestionInput.css */
`);var t=function(s,e,o,r){var d=arguments.length,l=d<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(s,e,o,r);else for(var c=s.length-1;c>=0;c--)(h=s[c])&&(l=(d<3?h(l):d>3?h(e,o,l):h(e,o))||l);return d>3&&l&&Object.defineProperty(e,o,l),l};const A=(s,e)=>(s%e+e)%e;function m(s,e="Assertion failed!"){if(!s)throw new Error(e)}const{html:u,Decorators:D,Directives:L,LitElement:p}=C,{customElement:v,property:n,state:x}=D,{classMap:w}=L,E={hasChanged(s,e){return JSON.stringify(s)!==JSON.stringify(e)},attribute:!1};let y=class extends HTMLElement{static get observedAttributes(){return["disabled","placeholder"]}set disabled(e){this.contentEditable=String(!e)}get disabled(){return this.contentEditable!=="true"}set value(e){this.innerText=e,this.#t()}get value(){return this.innerText}set mimeType(e){this.#e=e,this.#t()}get mimeType(){return this.#e}#e="";constructor(){super(),this.contentEditable="true",this.tabIndex=0,this.addEventListener("focus",()=>{this.innerHTML=this.innerText}),this.addEventListener("blur",this.#t.bind(this))}#t(){this.#e&&$(this,this.#e)}attributeChangedCallback(e,o,r){switch(e){case"disabled":this.disabled=r!==null;break}}};y=t([v("devtools-editable-content")],y);class b extends Event{static eventName="suggest";constructor(e){super(b.eventName),this.suggestion=e}}class f extends Event{static eventName="suggestioninit";listeners;constructor(e){super(f.eventName),this.listeners=e}}const j=(s,e)=>s.toLowerCase().startsWith(e.toLowerCase());let a=class extends p{static styles=[g];#e=[];constructor(){super(),this.options=[],this.expression="",this.cursor=0}#t=e=>{if(m(e instanceof KeyboardEvent,"Bound to the wrong event."),this.#e.length>0)switch(e.key){case"ArrowDown":e.stopPropagation(),e.preventDefault(),this.#o(1);break;case"ArrowUp":e.stopPropagation(),e.preventDefault(),this.#o(-1);break}switch(e.key){case"Enter":this.#e[this.cursor]&&this.#s(this.#e[this.cursor]),e.preventDefault();break}};#o(e){this.cursor=A(this.cursor+e,this.#e.length)}#s(e){this.dispatchEvent(new b(e))}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new f([["keydown",this.#t]]))}willUpdate(e){e.has("options")&&(this.options=Object.freeze([...this.options].sort())),(e.has("expression")||e.has("options"))&&(this.cursor=0,this.#e=this.options.filter(o=>(this.suggestionFilter||j)(o,this.expression)))}render(){if(this.#e.length!==0)return u`<ul class="suggestions">
      ${this.#e.map((e,o)=>u`<li
          class=${w({selected:o===this.cursor})}
          @mousedown=${this.#s.bind(this,e)}
          jslog=${T("suggestion").track({click:!0})}
        >
          ${e}
        </li>`)}
    </ul>`}};t([n(E)],a.prototype,"options",void 0);t([n()],a.prototype,"expression",void 0);t([n()],a.prototype,"suggestionFilter",void 0);t([x()],a.prototype,"cursor",void 0);a=t([v("devtools-suggestion-box")],a);let i=class extends p{static shadowRootOptions={...p.shadowRootOptions,delegatesFocus:!0};static styles=[g,k];constructor(){super(),this.options=[],this.expression="",this.placeholder="",this.value="",this.disabled=!1,this.strikethrough=!0,this.mimeType="",this.autocomplete=!0,this.addEventListener("blur",this.#o);let e=S().track({keydown:"ArrowUp|ArrowDown|Enter",change:!0,click:!0});this.jslogContext&&(e=e.context(this.jslogContext)),this.setAttribute("jslog",e.toString())}#e;get#t(){if(this.#e)return this.#e;const e=this.renderRoot.querySelector("devtools-editable-content");if(!e)throw new Error("Attempted to query node before rendering.");return this.#e=e,e}#o=()=>{window.getSelection()?.removeAllRanges(),this.value=this.#t.value,this.expression=this.#t.value};#s=e=>{m(e.target instanceof Node);const o=document.createRange();o.selectNodeContents(e.target);const r=window.getSelection();r.removeAllRanges(),r.addRange(o)};#i=e=>{e.key==="Enter"&&e.preventDefault()};#n=e=>{this.expression=e.target.value};#r=e=>{for(const[o,r]of e.listeners)this.addEventListener(o,r)};#l=e=>{this.#t.value=e.suggestion,setTimeout(this.blur.bind(this),0)};willUpdate(e){e.has("value")&&(this.expression=this.value)}render(){return u`<devtools-editable-content
        ?disabled=${this.disabled}
        class=${w({strikethrough:!this.strikethrough})}
        .enterKeyHint=${"done"}
        .value=${this.value}
        .mimeType=${this.mimeType}
        @focus=${this.#s}
        @input=${this.#n}
        @keydown=${this.#i}
        autocapitalize="off"
        inputmode="text"
        placeholder=${this.placeholder}
        spellcheck="false"
      ></devtools-editable-content>
      <devtools-suggestion-box
        @suggestioninit=${this.#r}
        @suggest=${this.#l}
        .options=${this.options}
        .suggestionFilter=${this.suggestionFilter}
        .expression=${this.autocomplete?this.expression:""}
      ></devtools-suggestion-box>`}};t([n(E)],i.prototype,"options",void 0);t([n({type:Boolean})],i.prototype,"autocomplete",void 0);t([n()],i.prototype,"suggestionFilter",void 0);t([x()],i.prototype,"expression",void 0);t([n()],i.prototype,"placeholder",void 0);t([n()],i.prototype,"value",void 0);t([n({type:Boolean})],i.prototype,"disabled",void 0);t([n({type:Boolean})],i.prototype,"strikethrough",void 0);t([n()],i.prototype,"mimeType",void 0);t([n()],i.prototype,"jslogContext",void 0);i=t([v("devtools-suggestion-input")],i);export{i as S};
//# sourceMappingURL=SuggestionInput-B0LkVm1Q.js.map
