import{aU as O,h as xe,b as z,g as K,bM as oe,cM as Re,aP as Z,i as D,b0 as he,bH as je,dC as Y,ba as ge,bA as se,bz as ne,ct as Ne,bN as re,cd as fe,dD as Me,dE as De,d0 as ke,dF as Ae,dG as Be,I as ae,dH as Le,bp as Oe,cj as qe,cC as ie,cD as de,bi as Ge,dI as le,dJ as Fe}from"./inspector-CyOA7R9n.js";import{D as Ue,g as j,c as F,i as ce}from"./DataGridController-DdQqp2ti.js";import{J as ue}from"./PreviewFactory-7rWtg079.js";import"./SelectMenu-BqCYT45A.js";import"./ShortcutDialog-D3xyB3nU.js";import{S as A}from"./SuggestionInput-B0LkVm1Q.js";import{P as Ve}from"./PopoverHelper-fEnxzApM.js";import{l as We}from"./StylePropertyEditor-BEGc-Ch4.js";import"./DropTarget-DDkHhLsd.js";import"./ScriptFormatter-CdcZyJ9a.js";import"./directives-BpSiwtWR.js";import"./swatchPopover.css-CdLS3b97.js";import"./cssOverview.css-C_I9lWrq.js";import"./PanelIntroductionSteps-BeLT2-qM.js";import"./PreviewToggle-D6BBIbZ3.js";import"./inspectorCommon.css-gVYvLA0h.js";class Je extends O{dataGrid;#t;#e;constructor(e){super(!0,!0),this.dataGrid=new Ue,this.dataGrid.data=e,this.#e=e,this.contentElement.appendChild(this.dataGrid),this.#t=new xe(0)}data(){return this.#e}update(e){this.#e=e,this.#t.schedule(async()=>{this.dataGrid.data=e})}}const ye=new CSSStyleSheet;ye.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: inherit;
}

:host {
  display: block;
}

.toolbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 6px;
  padding-top: 1px;
  height: 27px;
  background-color: var(--sys-color-cdt-base-container);
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid var(--sys-color-divider);
}

/*# sourceURL=toolbar.css */
`);var _e=function(l,e,s,t){var n=arguments.length,o=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,s,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o};const{html:He,Decorators:ze,LitElement:Ke}=Z,{customElement:Ze}=ze,V={sendCommandCtrlEnter:"Send command - Ctrl+Enter",sendCommandCmdEnter:"Send command - ⌘+Enter",copyCommand:"Copy command"},Ye=z("panels/protocol_monitor/components/Toolbar.ts",V),J=K.bind(void 0,Ye),Qe=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2018c-.417%200-.77-.146-1.062-.438A1.444%201.444%200%200%201%203%2016.5V5h1.5v11.5H14V18H4.5Zm3-3c-.417%200-.77-.146-1.062-.438A1.444%201.444%200%200%201%206%2013.5v-10c0-.417.146-.77.438-1.062A1.444%201.444%200%200%201%207.5%202h8c.417%200%20.77.146%201.062.438.292.291.438.645.438%201.062v10c0%20.417-.146.77-.438%201.062A1.444%201.444%200%200%201%2015.5%2015h-8Zm0-1.5h8v-10h-8v10Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),Xe=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%2016V4l15%206-15%206Zm1.5-2.23L13.958%2010%204.5%206.23V8.5L9%2010l-4.5%201.5v2.27Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString();class Q extends Event{static eventName="copycommand";constructor(){super(Q.eventName,{bubbles:!0,composed:!0})}}class X extends Event{static eventName="commandsent";constructor(){super(X.eventName,{bubbles:!0,composed:!0})}}let pe=class extends Ke{static styles=[ye];#t=()=>{this.dispatchEvent(new Q)};#e=()=>{this.dispatchEvent(new X)};render(){return He`
        <div class="toolbar">
          <devtools-button
          title=${J(V.copyCommand)}
          .size=${"SMALL"}
          .iconUrl=${Qe}
          .variant=${"toolbar"}
          @click=${this.#t}
          jslog=${oe("protocol-monitor.copy-command").track({click:!0})}
        ></devtools-button>
        <devtools-button
          .size=${"REGULAR"}
          title=${Re()?J(V.sendCommandCmdEnter):J(V.sendCommandCtrlEnter)}
          .iconUrl=${Xe}
          .variant=${"primary_toolbar"}
          @click=${this.#e}
          jslog=${oe("protocol-monitor.send-command").track({click:!0})}
        ></devtools-button>
      </div>
    `}};pe=_e([Ze("devtools-pm-toolbar")],pe);const be=new CSSStyleSheet;be.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: inherit;
}

:host {
  display: block;
  height: 100%;
}

.target-select-menu {
  max-width: 180px;
}

.warning-icon {
  margin-left: -18px;
  margin-right: 4px;
}

.row {
  flex-wrap: wrap;
}

.row,
.row-icons {
  display: flex;
  flex-direction: row;
  color: var(--sys-color-token-property-special);
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  align-items: center;
  line-height: 18px;
  margin-top: 3px;
}

.separator {
  margin-right: 0.5em;
  color: var(--sys-color-on-surface);
}

ul {
  padding-left: 2em;
}

.optional-parameter {
  color: var(--sys-color-token-attribute-value);

  --override-color-recorder-input: var(--sys-color-on-surface);
}

.undefined-parameter {
  color: var(--sys-color-state-disabled);
}

.wrapper {
  padding-left: 1em;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
  padding-top: 0.5em;
}

.clear-button,
.add-button,
.delete-button {
  opacity: 0%;
  transition: opacity 0.3s ease-in-out;
}

.clear-button,
.delete-button {
  margin-left: 5px;
}

.row:focus-within .delete-button,
.row:focus-within .add-button,
.row:focus-within .clear-button,
.row:hover .delete-button,
.row:hover .add-button,
.row:hover .clear-button {
  opacity: 100%;
}

/*# sourceURL=JSONEditor.css */
`);var x=function(l,e,s,t){var n=arguments.length,o=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,s,t);else for(var a=l.length-1;a>=0;a--)(r=l[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o};const{html:m,Decorators:et,LitElement:tt,Directives:ot,nothing:v}=Z,{customElement:st,property:ee,state:W}=et,{live:N,classMap:B,repeat:me}=ot,T={deleteParameter:"Delete parameter",addParameter:"Add a parameter",resetDefaultValue:"Reset to default value",addCustomProperty:"Add custom property"},nt=z("panels/protocol_monitor/components/JSONEditor.ts",T),P=K.bind(void 0,nt);class L extends Event{static eventName="submiteditor";data;constructor(e){super(L.eventName),this.data=e}}const rt=l=>{if(l.length>150){const[e,s]=l.split(".");return[e,s]}return[l,""]},$=new Map([["string",""],["number",0],["boolean",!1]]),M="dummy",U="<empty_string>";function at(l,e){return l.toLowerCase().includes(e.toLowerCase())}let w=class extends tt{static styles=[be];command="";targetId;#t;constructor(){super(),this.parameters=[],this.targets=[],this.addEventListener("keydown",e=>{e.key==="Enter"&&(e.ctrlKey||e.metaKey)&&(this.#f(e),this.dispatchEvent(new L({command:this.command,parameters:this.getParameters(),targetId:this.targetId})))})}connectedCallback(){super.connectedCallback(),this.#t=new Ve(this,s=>this.#w(s),"protocol-monitor.hint"),this.#t.setDisableOnClick(!0),this.#t.setTimeout(300),this.#t.setHasPadding(!0),D.instance().addEventListener("AvailableTargetsChanged",this.#e,this),this.#e()}disconnectedCallback(){super.disconnectedCallback(),this.#t?.hidePopover(),this.#t?.dispose(),D.instance().removeEventListener("AvailableTargetsChanged",this.#e,this)}#e(){this.targets=D.instance().targets(),this.targets.length&&this.targetId===void 0&&(this.targetId=this.targets[0].id())}getParameters(){const e=t=>{if(t.value!==void 0)switch(t.type){case"number":return Number(t.value);case"boolean":return!!t.value;case"object":{const n={};for(const o of t.value)e(o)!==void 0&&(n[o.name]=e(o));return Object.keys(n).length===0?void 0:n}case"array":{const n=[];for(const o of t.value)n.push(e(o));return n.length===0?[]:n}default:return t.value}},s={};for(const t of this.parameters)s[t.name]=e(t);return e({type:"object",name:M,optional:!0,value:this.parameters,description:""})}displayCommand(e,s,t){this.targetId=t,this.command=e;const n=this.metadataByCommand.get(this.command);if(!n?.parameters)return;this.populateParametersForCommandWithDefaultValues();const o=this.#o("",s,{typeRef:M,type:"object",name:"",description:"",optional:!0,value:[]},n.parameters).value,r=new Map(this.parameters.map(a=>[a.name,a]));for(const a of o){const i=r.get(a.name);i&&(i.value=a.value)}this.requestUpdate()}#o(e,s,t,n){const o=t?.type||typeof s,r=t?.description??"",a=t?.optional??!0;switch(o){case"string":case"boolean":case"number":return this.#n(e,s,t);case"object":return this.#l(e,s,t,n);case"array":return this.#v(e,s,t)}return{type:o,name:e,optional:a,typeRef:t?.typeRef,value:s,description:r}}#n(e,s,t){const n=t?.type||typeof s,o=t?.description??"",r=t?.optional??!0;return{type:n,name:e,optional:r,typeRef:t?.typeRef,value:s,description:o,isCorrectType:t?this.#h(t,String(s)):!0}}#l(e,s,t,n){const o=t?.description??"";if(typeof s!="object"||s===null)throw Error("The value is not an object");const r=t?.typeRef;if(!r)throw Error("Every object parameters should have a type ref");const a=r===M?n:this.typesByName.get(r);if(!a)throw Error("No nested type for keys were found");const i=[];for(const d of Object.keys(s)){const g=a.find(f=>f.name===d);i.push(this.#o(d,s[d],g))}return{type:"object",name:e,optional:t.optional,typeRef:t.typeRef,value:i,description:o,isCorrectType:!0}}#v(e,s,t){const n=t?.description??"",o=t?.optional??!0,r=t?.typeRef;if(!r)throw Error("Every array parameters should have a type ref");if(!Array.isArray(s))throw Error("The value is not an array");const a=this.#u(r)?void 0:{optional:!0,type:"object",value:[],typeRef:r,description:"",name:""},i=[];for(let d=0;d<s.length;d++){const g=this.#o(`${d}`,s[d],a);i.push(g)}return{type:"array",name:e,optional:o,typeRef:t?.typeRef,value:i,description:n,isCorrectType:!0}}#w(e){const s=e.composedPath()[0],t=this.#C(s);if(!t?.description)return null;const[n,o]=rt(t.description),r=t.type,a=t.replyArgs;let i="";return a?i=o+`Returns: ${a}<br>`:r?i=o+`<br>Type: ${r}<br>`:i=o,{box:s.boxInWindow(),show:async d=>{const g=new We({getMessage:()=>`<code><span>${n}</span></code>`,getPossibleFixMessage:()=>i,getLearnMoreLink:()=>`https://chromedevtools.github.io/devtools-protocol/tot/${this.command.split(".")[0]}/`});return d.contentElement.appendChild(g),!0}}}#C(e){if(e.matches(".command")){const s=this.metadataByCommand.get(this.command);if(s)return{description:s.description,replyArgs:s.replyArgs}}if(e.matches(".parameter")){const s=e.dataset.paramid;if(!s)return;const t=s.split("."),{parameter:n}=this.#r(t);return n.description?{description:n.description,type:n.type}:void 0}}getCommandJson(){return this.command!==""?JSON.stringify({command:this.command,parameters:this.getParameters()}):""}#I(){const e=this.getCommandJson();he.copyText(e)}#$(){this.dispatchEvent(new L({command:this.command,parameters:this.getParameters(),targetId:this.targetId}))}populateParametersForCommandWithDefaultValues(){const e=this.metadataByCommand.get(this.command)?.parameters;e&&(this.parameters=e.map(s=>this.#i(s)))}#i(e){if(e.type==="object"){let s=e.typeRef;s||(s=M);const n=(this.typesByName.get(s)??[]).map(o=>this.#i(o));return{...e,value:e.optional?void 0:n,isCorrectType:!0}}return e.type==="array"?{...e,value:e?.optional?void 0:e.value?.map(s=>this.#i(s))||[],isCorrectType:!0}:{...e,value:e.optional?void 0:$.get(e.type),isCorrectType:!0}}#r(e){let s=this.parameters,t;for(let n=0;n<e.length;n++){const o=e[n],r=s.find(a=>a.name===o);if(n===e.length-1)return{parameter:r,parentParameter:t};if(r?.type==="array"||r?.type==="object")r.value&&(s=r.value);else throw new Error("Parameter on the path in not an object or an array");t=r}throw new Error("Not found")}#h(e,s){if(e.type==="number"&&isNaN(Number(s)))return!1;const t=this.#a(e);return!(t.length!==0&&!t.includes(s))}#g=e=>{if(!(e.target instanceof A))return;let s;if(e instanceof KeyboardEvent){const r=e.target.renderRoot.querySelector("devtools-editable-content");if(!r)return;s=r.innerText}else s=e.target.value;const t=e.target.getAttribute("data-paramid");if(!t)return;const n=t.split("."),o=this.#r(n).parameter;s===""?o.value=$.get(o.type):(o.value=s,o.isCorrectType=this.#h(o,s)),this.requestUpdate()};#T=e=>{if(!(e.target instanceof A))return;const s=e.target.value,t=e.target.getAttribute("data-paramid");if(!t)return;const n=t.split("."),{parameter:o}=this.#r(n);o.name=s,this.requestUpdate()};#f=e=>{e.target instanceof A&&e.key==="Enter"&&(e.ctrlKey||e.metaKey)&&this.#g(e)};#S(e){if(!(e.target instanceof A))return;const s=e.target.getAttribute("data-paramid");if(!s)return;const t=s.split("."),n=this.#r(t).parameter;n.isCorrectType=!0,this.requestUpdate()}#E=async e=>{e.target instanceof A&&(this.command=e.target.value),this.populateParametersForCommandWithDefaultValues()};#c(e){if(e)return`${e.name()} (${e.inspectedURL()})`}#u(e){return e==="string"||e==="boolean"||e==="number"}#p(e,s){if(e.type==="object"){let t=e.typeRef;t||(t=M);const o=(this.typesByName.get(t)??[]).map(r=>this.#p(r,r.name));return{type:"object",name:s,optional:e.optional,typeRef:t,value:o,isCorrectType:!0,description:e.description}}return{type:e.type,name:s,optional:e.optional,isCorrectType:!0,typeRef:e.typeRef,value:e.optional?void 0:$.get(e.type),description:e.description}}#d(e){const s=e.split("."),{parameter:t,parentParameter:n}=this.#r(s);if(t){switch(t.type){case"array":{const o=t.typeRef;if(!o)throw Error("Every array parameter must have a typeRef");const r=this.typesByName.get(o)??[],a=r.map(d=>this.#p(d,d.name));let i=this.#u(o)?o:"object";r.length===0&&this.enumsByName.get(o)&&(i="string"),t.value||(t.value=[]),t.value.push({type:i,name:String(t.value.length),optional:!0,typeRef:o,value:a.length!==0?a:"",description:"",isCorrectType:!0});break}case"object":{let o=t.typeRef;if(o||(o=M),t.value||(t.value=[]),!this.typesByName.get(o)){t.value.push({type:"string",name:"",optional:!0,value:"",isCorrectType:!0,description:"",isKeyEditable:!0});break}const r=this.typesByName.get(o)??[],a=r.map(d=>this.#p(d,d.name)),i=r.map(d=>this.#i(d));n?t.value.push({type:"object",name:"",optional:!0,typeRef:o,value:a,isCorrectType:!0,description:""}):t.value=i;break}default:t.value=$.get(t.type);break}this.requestUpdate()}}#m(e,s){if(!(!e||e.value===void 0)){switch(e.type){case"object":if(e.optional&&!s){e.value=void 0;break}!e.typeRef||!this.typesByName.get(e.typeRef)?e.value=[]:e.value.forEach(t=>this.#m(t,s));break;case"array":e.value=e.optional?void 0:[];break;default:e.value=e.optional?void 0:$.get(e.type),e.isCorrectType=!0;break}this.requestUpdate()}}#y(e,s){if(e&&Array.isArray(s.value)){if(s.value.splice(s.value.findIndex(t=>t===e),1),s.type==="array")for(let t=0;t<s.value.length;t++)s.value[t].name=String(t);this.requestUpdate()}}#P(){const e=this.targets.find(t=>t.id()===this.targetId),s=e?this.#c(e):this.#c(this.targets[0]);return m`
    <div class="row attribute padded">
      <div>target<span class="separator">:</span></div>
      <devtools-select-menu
            class="target-select-menu"
            @selectmenuselected=${this.#x}
            .showDivider=${!0}
            .showArrow=${!0}
            .sideButton=${!1}
            .showSelectedItem=${!0}
            .showConnector=${!1}
            .position=${"bottom"}
            .buttonTitle=${s||""}
            jslog=${je("targets").track({click:!0})}
          >
          ${me(this.targets,t=>m`
                <devtools-menu-item
                  .value=${t.id()}>
                    ${this.#c(t)}
                </devtools-menu-item>
              `)}
          </devtools-select-menu>
    </div>
  `}#x(e){this.targetId=e.itemValue,this.requestUpdate()}#a(e){if(e.type==="string"){const s=this.enumsByName.get(`${e.typeRef}`)??{};return Object.values(s)}return e.type==="boolean"?["true","false"]:[]}#s(e){return m`
          <devtools-button
            title=${e.title}
            .size=${"SMALL"}
            .iconName=${e.iconName}
            .variant=${"icon"}
            class=${B(e.classMap)}
            @click=${e.onClick}
            .jslogContext=${e.jslogContext}
          ></devtools-button>
        `}#R(){return m`<devtools-icon
    .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"14px",height:"14px"}}
    class=${B({"warning-icon":!0})}
  >
  </devtools-icon>`}#b(e,s,t,n){return e.sort((o,r)=>Number(o.optional)-Number(r.optional)),m`
      <ul>
        ${me(e,o=>{const r=t?`${n}.${o.name}`:o.name,a=o.type==="array"||o.type==="object"?o.value??[]:[],i=R=>{this.#g(R)},d=R=>{this.#f(R)},g=R=>{this.#S(R)},f=R=>{this.#T(R)},C=this.#u(o.type),q=o.type==="array",p=t&&t.type==="array",y=t&&t.type==="object",h=o.type==="object",b=o.value===void 0,I=o.optional,S=h&&o.typeRef&&this.typesByName.get(o.typeRef)!==void 0,E=o.isKeyEditable,k=h&&!S,G=o.type==="string"||o.type==="boolean",Se=q&&!b&&o.value?.length!==0||h&&!b,Ee={"optional-parameter":o.optional,parameter:!0,"undefined-parameter":o.value===void 0&&o.optional},Pe={"json-input":!0};return m`
                <li class="row">
                  <div class="row-icons">
                      ${o.isCorrectType?v:m`${this.#R()}`}

                      <!-- If an object parameter has no predefined keys, show an input to enter the key, otherwise show the name of the parameter -->
                      <div class=${B(Ee)} data-paramId=${r}>
                          ${E?m`<devtools-suggestion-input
                              data-paramId=${r}
                              isKey=${!0}
                              .isCorrectInput=${N(o.isCorrectType)}
                              .options=${G?this.#a(o):[]}
                              .autocomplete=${!1}
                              .value=${N(o.name??"")}
                              .placeholder=${o.value===""?U:`<${$.get(o.type)}>`}
                              @blur=${f}
                              @focus=${g}
                              @keydown=${d}
                            ></devtools-suggestion-input>`:m`${o.name}`} <span class="separator">:</span>
                      </div>

                      <!-- Render button to add values inside an array parameter -->
                      ${q?m`
                        ${this.#s({title:P(T.addParameter),iconName:"plus",onClick:()=>this.#d(r),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-parameter"})}
                      `:v}

                      <!-- Render button to complete reset an array parameter or an object parameter-->
                      ${Se?this.#s({title:P(T.resetDefaultValue),iconName:"clear",onClick:()=>this.#m(o,p),classMap:{"clear-button":!0},jslogContext:"protocol-monitor.reset-to-default-value"}):v}

                      <!-- Render the buttons to change the value from undefined to empty string for optional primitive parameters -->
                      ${C&&!p&&I&&b?m`  ${this.#s({title:P(T.addParameter),iconName:"plus",onClick:()=>this.#d(r),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-parameter"})}`:v}

                      <!-- Render the buttons to change the value from undefined to populate the values inside object with their default values -->
                      ${h&&I&&b&&S?m`  ${this.#s({title:P(T.addParameter),iconName:"plus",onClick:()=>this.#d(r),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-parameter"})}`:v}
                  </div>

                  <div class="row-icons">
                      <!-- If an object has no predefined keys, show an input to enter the value, and a delete icon to delete the whole key/value pair -->
                      ${E&&y?m`
                      <!-- @ts-ignore -->
                      <devtools-suggestion-input
                          data-paramId=${r}
                          .isCorrectInput=${N(o.isCorrectType)}
                          .options=${G?this.#a(o):[]}
                          .autocomplete=${!1}
                          .value=${N(o.value??"")}
                          .placeholder=${o.value===""?U:`<${$.get(o.type)}>`}
                          .jslogContext=${"parameter-value"}
                          @blur=${i}
                          @focus=${g}
                          @keydown=${d}
                        ></devtools-suggestion-input>

                        ${this.#s({title:P(T.deleteParameter),iconName:"bin",onClick:()=>this.#y(o,t),classMap:{deleteButton:!0,deleteIcon:!0},jslogContext:"protocol-monitor.delete-parameter"})}`:v}

                    <!-- In case  the parameter is not optional or its value is not undefined render the input -->
                    ${C&&!E&&(!b||!I)&&!p?m`
                        <!-- @ts-ignore -->
                        <devtools-suggestion-input
                          data-paramId=${r}
                          .strikethrough=${N(o.isCorrectType)}
                          .options=${G?this.#a(o):[]}
                          .autocomplete=${!1}
                          .value=${N(o.value??"")}
                          .placeholder=${o.value===""?U:`<${$.get(o.type)}>`}
                          .jslogContext=${"parameter-value"}
                          @blur=${i}
                          @focus=${g}
                          @keydown=${d}
                        ></devtools-suggestion-input>`:v}

                    <!-- Render the buttons to change the value from empty string to undefined for optional primitive parameters -->
                    ${C&&!E&&!p&&I&&!b?m`  ${this.#s({title:P(T.resetDefaultValue),iconName:"clear",onClick:()=>this.#m(o),classMap:{"clear-button":!0},jslogContext:"protocol-monitor.reset-to-default-value"})}`:v}

                    <!-- If the parameter is an object with no predefined keys, renders a button to add key/value pairs to it's value -->
                    ${k?m`
                      ${this.#s({title:P(T.addCustomProperty),iconName:"plus",onClick:()=>this.#d(r),classMap:{"add-button":!0},jslogContext:"protocol-monitor.add-custom-property"})}
                    `:v}

                    <!-- In case the parameter is nested inside an array we render the input field as well as a delete button -->
                    ${p?m`
                    <!-- If the parameter is an object we don't want to display the input field we just want the delete button-->
                    ${h?v:m`
                    <!-- @ts-ignore -->
                    <devtools-suggestion-input
                      data-paramId=${r}
                      .options=${G?this.#a(o):[]}
                      .autocomplete=${!1}
                      .value=${N(o.value??"")}
                      .placeholder=${o.value===""?U:`<${$.get(o.type)}>`}
                      .jslogContext=${"parameter"}
                      @blur=${i}
                      @keydown=${d}
                      class=${B(Pe)}
                    ></devtools-suggestion-input>`}

                    ${this.#s({title:P(T.deleteParameter),iconName:"bin",onClick:()=>this.#y(o,t),classMap:{"delete-button":!0},jslogContext:"protocol-monitor.delete-parameter"})}`:v}
                  </div>
                </li>
                ${this.#b(a,s,o,r)}
              `})}
      </ul>
    `}render(){return m`
    <div class="wrapper">
      ${this.#P()}
      <div class="row attribute padded">
        <div class="command">command<span class="separator">:</span></div>
        <devtools-suggestion-input
          .options=${[...this.metadataByCommand.keys()]}
          .value=${this.command}
          .placeholder=${"Enter your command..."}
          .suggestionFilter=${at}
          .jslogContext=${"command"}
          @blur=${this.#E}
          class=${B({"json-input":!0})}
        ></devtools-suggestion-input>
      </div>
      ${this.parameters.length?m`
      <div class="row attribute padded">
        <div>parameters<span class="separator">:</span></div>
      </div>
        ${this.#b(this.parameters)}
      `:v}
    </div>
    <devtools-pm-toolbar @copycommand=${this.#I} @commandsent=${this.#$}></devtools-pm-toolbar>`}};x([ee({attribute:!1})],w.prototype,"metadataByCommand",void 0);x([ee({attribute:!1})],w.prototype,"typesByName",void 0);x([ee({attribute:!1})],w.prototype,"enumsByName",void 0);x([W()],w.prototype,"parameters",void 0);x([W()],w.prototype,"targets",void 0);x([W()],w.prototype,"command",void 0);x([W()],w.prototype,"targetId",void 0);w=x([st("devtools-json-editor")],w);const ve=new CSSStyleSheet;ve.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.protocol-monitor .protocol-monitor-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
}

.protocol-monitor .protocol-monitor-bottom-toolbar {
  border-top: 1px solid var(--sys-color-divider);
}

/*# sourceURL=protocolMonitor.css */
`);const{html:it}=Z,c={method:"Method",type:"Type",request:"Request",response:"Response",timestamp:"Timestamp",elapsedTime:"Elapsed time",target:"Target",record:"Record",clearAll:"Clear all",filter:"Filter",documentation:"Documentation",editAndResend:"Edit and resend",sMs:"{PH1} ms",noMessageSelected:"No message selected",save:"Save",session:"Session",sendRawCDPCommand:"Send a raw `CDP` command",sendRawCDPCommandExplanation:"Format: `'Domain.commandName'` for a command without parameters, or `'{\"command\":\"Domain.commandName\", \"parameters\": {...}}'` as a JSON object for a command with parameters. `'cmd'`/`'method'` and `'args'`/`'params'`/`'arguments'` are also supported as alternative keys for the `JSON` object.",selectTarget:"Select a target",showCDPCommandEditor:"Show CDP command editor",hideCDPCommandEditor:"Hide  CDP command editor",CDPCommandEditorShown:"CDP command editor shown",CDPCommandEditorHidden:"CDP command editor hidden"},dt=z("panels/protocol_monitor/ProtocolMonitor.ts",c),u=K.bind(void 0,dt),_=l=>it`${u(c.sMs,{PH1:String(l)})}`,we=l=>{const e=new Map;for(const s of l)for(const t of Object.keys(s.metadata))e.set(t,s.metadata[t]);return e},Ce=we(Y.agentPrototypes.values()),lt=Y.typeMap,ct=Y.enumMap;class Ie extends ge(O){started;startTime;requestTimeForId;dataGridRowForId;infoWidget;dataGridIntegrator;filterParser;suggestionBuilder;textFilterUI;selector;#t=new $e;#e;#o;constructor(e){super(!0),this.started=!1,this.startTime=0,this.dataGridRowForId=new Map,this.requestTimeForId=new Map;const s=new se("protocol-monitor-toolbar",this.contentElement);s.element.setAttribute("jslog",`${ne("top")}`),this.contentElement.classList.add("protocol-monitor");const t=new Ne(u(c.record),"record-start","record-stop","protocol-monitor.toggle-recording");t.addEventListener("Click",()=>{this.setRecording(t.isToggled())}),t.enableToggleWithRedColor(),s.appendToolbarItem(t),t.setToggled(!0);const n=new re(u(c.clearAll),"clear",void 0,"protocol-monitor.clear-all");n.addEventListener("Click",()=>{this.dataGridIntegrator.update({...this.dataGridIntegrator.data(),rows:[]}),this.infoWidget.render(null)}),s.appendToolbarItem(n);const o=new re(u(c.save),"download",void 0,"protocol-monitor.save");o.addEventListener("Click",()=>{this.saveAsFile()}),s.appendToolbarItem(o),this.selector=this.#l(),this.infoWidget=new Te;const r={paddingRowsCount:100,showScrollbar:!0,columns:[{id:"type",title:u(c.type),sortable:!0,widthWeighting:1,visible:!0,hideable:!0,styles:{"text-align":"center"}},{id:"method",title:u(c.method),sortable:!1,widthWeighting:5,visible:!0,hideable:!1},{id:"request",title:u(c.request),sortable:!1,widthWeighting:5,visible:!0,hideable:!0},{id:"response",title:u(c.response),sortable:!1,widthWeighting:5,visible:!0,hideable:!0},{id:"elapsed-time",title:u(c.elapsedTime),sortable:!0,widthWeighting:2,visible:!1,hideable:!0},{id:"timestamp",title:u(c.timestamp),sortable:!0,widthWeighting:5,visible:!1,hideable:!0},{id:"target",title:u(c.target),sortable:!0,widthWeighting:5,visible:!1,hideable:!0},{id:"session",title:u(c.session),sortable:!0,widthWeighting:5,visible:!1,hideable:!0}],rows:[],contextMenus:{bodyRow:(p,y,h)=>{const b=j(h,"method"),I=j(h,"type");p.editSection().appendItem(u(c.editAndResend),()=>{if(!b.value)return;const S=this.infoWidget.request,E=this.infoWidget.targetId,k=String(b.value);e.showMode()==="OnlyMain"&&e.toggleSidebar(),this.dispatchEventToListeners("CommandChange",{command:k,parameters:S,targetId:E})},{jslogContext:"edit-and-resend",disabled:I.title!=="sent"}),p.editSection().appendItem(u(c.filter),()=>{const S=j(h,"method");this.textFilterUI.setValue(`method:${S.value}`,!0)},{jslogContext:"filter"}),p.footerSection().appendItem(u(c.documentation),()=>{if(!b.value)return;const[S,E]=String(b.value).split("."),k=I.title==="sent"?"method":"event";he.openInNewTab(`https://chromedevtools.github.io/devtools-protocol/tot/${S}#${k}-${E}`)},{jslogContext:"documentation"})}}};this.dataGridIntegrator=new Je(r),this.dataGridIntegrator.dataGrid.addEventListener("cellfocused",p=>{const y=p.data.row,h={request:j(y,"request"),response:j(y,"response"),target:j(y,"target"),type:j(y,"type").title,selectedTab:p.data.cell.columnId==="request"?"request":p.data.cell.columnId==="response"?"response":void 0};this.infoWidget.render(h)}),this.dataGridIntegrator.dataGrid.addEventListener("newuserfiltertext",p=>{this.textFilterUI.setValue(p.data.filterText,!0)});const a=new fe(!0,!0,"protocol-monitor-panel-split",250);a.show(this.contentElement),a.setMainWidget(this.dataGridIntegrator),a.setSidebarWidget(this.infoWidget);const i=["method","request","response","type","target","session"];this.filterParser=new Me(i),this.suggestionBuilder=new De(i),this.textFilterUI=new ke(void 0,1,.2,"",this.suggestionBuilder.completions.bind(this.suggestionBuilder),!0),this.textFilterUI.addEventListener("TextChanged",p=>{const y=p.data,h=this.filterParser.parse(y);this.dataGridIntegrator.update({...this.dataGridIntegrator.data(),filters:h})});const d=new se("protocol-monitor-bottom-toolbar",this.contentElement);d.element.setAttribute("jslog",`${ne("bottom")}`),d.appendToolbarItem(e.createShowHideSidebarButton(u(c.showCDPCommandEditor),u(c.hideCDPCommandEditor),u(c.CDPCommandEditorShown),u(c.CDPCommandEditorHidden),"protocol-monitor.toggle-command-editor")),this.#o=this.#n(),d.appendToolbarItem(this.#o),d.appendToolbarItem(this.selector);const g=d.element?.shadowRoot,f=g?.querySelector(".toolbar-input"),C=g?.querySelector(".toolbar-select-container"),q=()=>{const p=e.sidebarWidget();if(!(p instanceof te))return;const y=p.jsonEditor.getCommandJson(),h=p.jsonEditor.targetId;if(h){const b=this.selector.options().findIndex(I=>I.value===h);b!==-1&&(this.selector.setSelectedIndex(b),this.#e=h)}y&&this.#o.setValue(y)};e.addEventListener("ShowModeChanged",p=>{if(p.data==="OnlyMain")q(),f?.setAttribute("style","display:flex; flex-grow: 1"),C?.setAttribute("style","display:flex");else{const{command:y,parameters:h}=H(this.#o.value());this.dispatchEventToListeners("CommandChange",{command:y,parameters:h,targetId:this.#e}),f?.setAttribute("style","display:none"),C?.setAttribute("style","display:none")}}),s.appendToolbarItem(this.textFilterUI)}#n(){const e=u(c.sendRawCDPCommand),s=e,t=1,n=.2,o=u(c.sendRawCDPCommandExplanation),r=new Ae(e,s,t,n,o,this.#t.buildTextPromptCompletions,!1,"command-input");return r.addEventListener("EnterPressed",()=>{this.#t.addEntry(r.value());const{command:a,parameters:i}=H(r.value());this.onCommandSend(a,i,this.#e)}),r}#l(){const e=new Be(()=>{this.#e=e.selectedOption()?.value},u(c.selectTarget),void 0,"target-selector");e.setMaxWidth(120);const s=D.instance(),t=()=>{e.removeOptions();for(const n of s.targets())e.createOption(`${n.name()} (${n.inspectedURL()})`,n.id())};return s.addEventListener("AvailableTargetsChanged",t),t(),e}onCommandSend(e,s,t){const n=le,o=D.instance(),r=t?o.targetById(t):null,a=r?r.sessionId:"";n.sendRawMessage(e,s,()=>{},a)}wasShown(){this.started||(this.registerCSSFiles([ve]),this.started=!0,this.startTime=Date.now(),this.setRecording(!0))}setRecording(e){const s=le;e?(s.onMessageSent=this.messageSent.bind(this),s.onMessageReceived=this.messageReceived.bind(this)):(s.onMessageSent=null,s.onMessageReceived=null)}targetToString(e){return e?e.decorateLabel(`${e.name()} ${e===D.instance().rootTarget()?"":e.id()}`):""}messageReceived(e,s){if("id"in e&&e.id){const r=this.dataGridRowForId.get(e.id);if(!r)return;const i=this.dataGridIntegrator.data().rows.findIndex(f=>r===f),d={...r,cells:r.cells.map(f=>{if(f.columnId==="response")return{...f,value:JSON.stringify(e.result||e.error)};if(f.columnId==="elapsed-time"){const C=this.requestTimeForId.get(e.id);if(C)return{...f,value:Date.now()-C,renderer:_}}return f})},g=[...this.dataGridIntegrator.data().rows];g[i]=d,this.dataGridRowForId.delete(e.id),this.dataGridIntegrator.update({...this.dataGridIntegrator.data(),rows:g});return}const t=s,n=new ae;n.data={iconName:"arrow-down",color:"var(--icon-request)",width:"16px",height:"16px"};const o={cells:[{columnId:"method",value:e.method,title:e.method},{columnId:"request",value:"",renderer:F},{columnId:"response",value:JSON.stringify(e.params),renderer:F},{columnId:"timestamp",value:Date.now()-this.startTime,renderer:_},{columnId:"elapsed-time",value:""},{columnId:"type",value:n,title:"received",renderer:ce},{columnId:"target",value:this.targetToString(t)},{columnId:"session",value:e.sessionId||""}],hidden:!1};this.dataGridIntegrator.update({...this.dataGridIntegrator.data(),rows:this.dataGridIntegrator.data().rows.concat([o])})}messageSent(e,s){const t=s,n=new ae;n.data={iconName:"arrow-up-down",color:"var(--icon-request-response)",width:"16px",height:"16px"};const o={styles:{"--override-data-grid-row-background-color":"var(--sys-color-surface3)"},cells:[{columnId:"method",value:e.method,title:e.method},{columnId:"request",value:JSON.stringify(e.params),renderer:F},{columnId:"response",value:"(pending)",renderer:F},{columnId:"timestamp",value:Date.now()-this.startTime,renderer:_},{columnId:"elapsed-time",value:"(pending)"},{columnId:"type",value:n,title:"sent",renderer:ce},{columnId:"target",value:String(t?.id())},{columnId:"session",value:e.sessionId||""}],hidden:!1};this.requestTimeForId.set(e.id,Date.now()),this.dataGridRowForId.set(e.id,o),this.dataGridIntegrator.update({...this.dataGridIntegrator.data(),rows:this.dataGridIntegrator.data().rows.concat([o])})}async saveAsFile(){const s="ProtocolMonitor-"+Le(new Date)+".json",t=new Fe;if(!await t.open(s))return;const o=[];for(const r of this.dataGridIntegrator.data().rows){const a=Object.fromEntries(r.cells.map(i=>[i.columnId,i.value]));o.push(a)}t.write(JSON.stringify(o,null,"  ")),t.close()}}class ut extends O{#t;#e=new te;#o;#n=400;constructor(){super(!0),this.element.setAttribute("jslog",`${Oe("protocol-monitor").track({resize:!0})}`),this.#t=new fe(!0,!1,"protocol-monitor-split-container",this.#n),this.#t.show(this.contentElement),this.#o=new Ie(this.#t),this.#o.addEventListener("CommandChange",e=>{this.#e.jsonEditor.displayCommand(e.data.command,e.data.parameters,e.data.targetId)}),this.#e.element.style.overflow="hidden",this.#t.setMainWidget(this.#o),this.#t.setSidebarWidget(this.#e),this.#t.hideSidebar(!0),this.#e.addEventListener("CommandSent",e=>{this.#o.onCommandSend(e.data.command,e.data.parameters,e.data.targetId)})}}class $e{#t=200;#e=new Set;constructor(e){e!==void 0&&(this.#t=e)}buildTextPromptCompletions=async(e,s,t)=>{if(!s&&!t&&e)return[];const n=[...this.#e].reverse();return n.push(...Ce.keys()),n.filter(o=>o.startsWith(s)).map(o=>({text:o}))};addEntry(e){if(this.#e.has(e)&&this.#e.delete(e),this.#e.add(e),this.#e.size>this.#t){const s=this.#e.values().next().value;this.#e.delete(s)}}}class Te extends O{tabbedPane;request;targetId="";constructor(){super(),this.tabbedPane=new qe,this.tabbedPane.appendTab("request",u(c.request),new ie),this.tabbedPane.appendTab("response",u(c.response),new ie),this.tabbedPane.show(this.contentElement),this.tabbedPane.selectTab("response"),this.request={},this.render(null)}render(e){if(!e||!e.request||!e.response||!e.target){this.tabbedPane.changeTabView("request",new de(u(c.noMessageSelected))),this.tabbedPane.changeTabView("response",new de(u(c.noMessageSelected)));return}const s=e&&e.type&&e.type==="sent";this.tabbedPane.setTabEnabled("request",!!s),s||this.tabbedPane.selectTab("response");const t=JSON.parse(String(e.request.value)||"null");this.request=t,this.targetId=String(e.target.value),this.tabbedPane.changeTabView("request",ue.createViewSync(t));const n=e.response.value==="(pending)"?null:JSON.parse(String(e.response.value)||"null");this.tabbedPane.changeTabView("response",ue.createViewSync(n)),e.selectedTab&&this.tabbedPane.selectTab(e.selectedTab)}}class te extends ge(O){jsonEditor;constructor(){super(),this.element.setAttribute("jslog",`${Ge("command-editor").track({resize:!0})}`),this.jsonEditor=new w,this.jsonEditor.metadataByCommand=Ce,this.jsonEditor.typesByName=lt,this.jsonEditor.enumsByName=ct,this.element.append(this.jsonEditor),this.jsonEditor.addEventListener(L.eventName,e=>{this.dispatchEventToListeners("CommandSent",e.data)})}}function H(l){let e=null;try{e=JSON.parse(l)}catch{}const s=e?e.command||e.method||e.cmd||"":l,t=e?.parameters||e?.params||e?.args||e?.arguments||{};return{command:s,parameters:t}}const jt=Object.freeze(Object.defineProperty({__proto__:null,CommandAutocompleteSuggestionProvider:$e,EditorWidget:te,InfoWidget:Te,ProtocolMonitorDataGrid:Ie,ProtocolMonitorImpl:ut,buildProtocolMetadata:we,parseCommandInput:H},Symbol.toStringTag,{value:"Module"}));export{jt as ProtocolMonitor};
//# sourceMappingURL=protocol_monitor-DrXmqQix.js.map
