import{b as B,g as D,bf as I,bO as b,b1 as U,bh as _,bG as N,bj as M,cJ as F,b2 as T,aO as j,aP as z}from"./inspector-CyOA7R9n.js";const y=45,O=48,K=57,Z=65,q=90,x=97,V=122,W=58,A=42,S=95,L=46,G=47,X=43,J=33,Q=35,Y=36,ee=37,te=38,re=39,ne=94,ae=96,ie=124,se=126,le=32,oe=126;function R(t){return t===void 0?!1:t>=O&&t<=K}function H(t){return t===void 0?!1:t>=Z&&t<=q||t>=x&&t<=V}function k(t){return t===void 0?!1:t>=x&&t<=V}function de(t){if(t===void 0)return!1;if(R(t)||H(t))return!0;switch(t){case J:case Q:case Y:case ee:case te:case re:case A:case X:case y:case L:case ne:case S:case ae:case ie:case se:return!0;default:return!1}}function p(){return{kind:0}}function ce(t){const e=E(t.value);if(e.kind===0)return e;const r=ue(t.parameters);return r.kind===0?r:{kind:13,value:e.value+r.value}}function ue(t){let e="";for(const r of t.items){e+=";";const n=he(r.name);if(n.kind===0)return n;e+=n.value;const s=r.value;if(s.kind!==10||!s.value){e+="=";const l=E(s);if(l.kind===0)return l;e+=l.value}}return{kind:13,value:e}}function he(t){if(t.value.length===0)return p();const e=t.value.charCodeAt(0);if(!k(e)&&e!==A)return p();for(let r=1;r<t.value.length;++r){const n=t.value.charCodeAt(r);if(!k(n)&&!R(n)&&n!==S&&n!==y&&n!==L&&n!==A)return p()}return{kind:13,value:t.value}}function E(t){return t.kind===5?fe(t):t.kind===6?pe():t.kind===7?be(t):t.kind===8?me(t):t.kind===10?ge(t):t.kind===9?ve():p()}function fe(t){return t.value<-999999999999999||t.value>999999999999999||!Number.isInteger(t.value)?p():{kind:13,value:t.value.toString(10)}}function pe(t){throw"Unimplemented"}function be(t){for(let r=0;r<t.value.length;++r){const n=t.value.charCodeAt(r);if(n<le||n>oe)return p()}let e='"';for(let r=0;r<t.value.length;++r){const n=t.value[r];(n==='"'||n==="\\")&&(e+="\\"),e+=n}return e+='"',{kind:13,value:e}}function me(t){if(t.value.length===0)return p();const e=t.value.charCodeAt(0);if(!H(e)&&e!==A)return p();for(let r=1;r<t.value.length;++r){const n=t.value.charCodeAt(r);if(!de(n)&&n!==W&&n!==G)return p()}return{kind:13,value:t.value}}function ve(t){throw"Unimplemented"}function ge(t){return{kind:13,value:t.value?"?1":"?0"}}function $(t,e){return ce({kind:4,value:{kind:7,value:t},parameters:{kind:3,items:[]}}).kind===0?{valid:!1,errorMessage:e}:{valid:!0,errorMessage:void 0}}const P=new CSSStyleSheet;P.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.root {
  color: var(--sys-color-on-surface);
  width: 100%;
}

.tree-title {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.rotate-icon {
  transform: rotate(90deg);
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  column-gap: 10px;
  row-gap: 8px;
  padding: 0 10px;
}

.full-row {
  grid-column: 1 / 5;
}

.half-row {
  grid-column: span 2;
}

.mobile-checkbox-container {
  display: flex;
}

.device-model-input {
  grid-column: 1 / 4;
}

.input-field {
  color: var(--sys-color-on-surface);
  padding: 3px 6px;
  border-radius: 2px;
  border: 1px solid var(--sys-color-neutral-outline);
  background-color: var(--sys-color-cdt-base-container);
  font-size: inherit;
  height: 18px;
}

.input-field:focus {
  border: 1px solid var(--sys-color-state-focus-ring);
  outline-width: 0;
}

.add-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}

.add-icon {
  margin-right: 5px;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.brand-row > input {
  width: 100%;
}

.info-icon {
  margin-left: 5px;
  margin-right: 1px;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  font-weight: 400;
}

devtools-icon + .link {
  margin-inline-start: 2px;
}

.hide-container {
  display: none;
}

.input-field-label-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (forced-colors: active) {
  .input-field {
    border: 1px solid;
  }

  .tree-title[aria-disabled="true"] {
    color: GrayText;
  }
}

/*# sourceURL=userAgentClientHintsForm.css */
`);const{html:u}=z,a={title:"User agent client hints",useragent:"User agent (Sec-CH-UA)",fullVersionList:"Full version list (Sec-CH-UA-Full-Version-List)",brandProperties:"User agent properties",brandName:"Brand",brandNameAriaLabel:"Brand {PH1}",significantBrandVersionPlaceholder:"Significant version (e.g. 87)",brandVersionPlaceholder:"Version (e.g. 87.0.4280.88)",brandVersionAriaLabel:"Version {PH1}",addBrand:"Add Brand",brandUserAgentDelete:"Delete brand from user agent section",brandFullVersionListDelete:"Delete brand from full version list",fullBrowserVersion:"Full browser version (Sec-CH-UA-Full-Browser-Version)",fullBrowserVersionPlaceholder:"Full browser version (e.g. 87.0.4280.88)",platformLabel:"Platform (Sec-CH-UA-Platform / Sec-CH-UA-Platform-Version)",platformProperties:"Platform properties",platformVersion:"Platform version",platformPlaceholder:"Platform (e.g. Android)",architecture:"Architecture (Sec-CH-UA-Arch)",architecturePlaceholder:"Architecture (e.g. x86)",deviceProperties:"Device properties",deviceModel:"Device model (Sec-CH-UA-Model)",mobileCheckboxLabel:"Mobile",update:"Update",notRepresentable:"Not representable as structured headers string.",userAgentClientHintsInfo:"User agent client hints are an alternative to the user agent string that identify the browser and the device in a more structured way with better privacy accounting.",addedBrand:"Added brand row",deletedBrand:"Deleted brand row",learnMore:"Learn more"},Ae=B("panels/settings/emulation/components/UserAgentClientHintsForm.ts",a),i=D.bind(void 0,Ae);class f extends Event{static eventName="clienthintschange";constructor(){super(f.eventName)}}class C extends Event{static eventName="clienthintssubmit";detail;constructor(e){super(C.eventName),this.detail={value:e}}}const w={brands:[{brand:"",version:""}],fullVersionList:[{brand:"",version:""}],fullVersion:"",platform:"",platformVersion:"",architecture:"",model:"",mobile:!1};class $e extends HTMLElement{#o=this.attachShadow({mode:"open"});#r=!1;#n=!1;#e=w;#s=!1;#l=!1;#a="";connectedCallback(){this.#o.adoptedStyleSheets=[I,P]}set value(e){const{metaData:r=w,showMobileCheckbox:n=!1,showSubmitButton:s=!1}=e;this.#e={...this.#e,...r},this.#s=n,this.#l=s,this.#t()}get value(){return{metaData:this.#e}}set disabled(e){this.#n=e,this.#r=!1,this.#t()}get disabled(){return this.#n}#b=e=>{(e.code==="Space"||e.code==="Enter"||e.code==="ArrowLeft"||e.code==="ArrowRight")&&(e.stopPropagation(),this.#d(e.code))};#d=e=>{this.#n||e==="ArrowLeft"&&!this.#r||e==="ArrowRight"&&this.#r||(this.#r=!this.#r,this.#t())};#c=(e,r,n)=>{const s=this.#e.brands?.map((l,o)=>{if(o===r){const{brand:d,version:h}=l;return n==="brandName"?{brand:e,version:h}:{brand:d,version:e}}return l});this.#e={...this.#e,brands:s},this.dispatchEvent(new f),this.#t()};#u=(e,r,n)=>{const s=this.#e.fullVersionList?.map((l,o)=>{if(o===r){const{brand:d,version:h}=l;return n==="brandName"?{brand:e,version:h}:{brand:d,version:e}}return l});this.#e={...this.#e,fullVersionList:s},this.dispatchEvent(new f),this.#t()};#m=e=>{const{brands:r=[]}=this.#e;r.splice(e,1),this.#e={...this.#e,brands:r},this.dispatchEvent(new f),this.#a=i(a.deletedBrand),this.#t();let n=this.shadowRoot?.getElementById(`ua-brand-${e+1}-input`);n||(n=this.shadowRoot?.getElementById("add-brand-button")),n?.focus()};#v=e=>{const{fullVersionList:r=[]}=this.#e;r.splice(e,1),this.#e={...this.#e,fullVersionList:r},this.dispatchEvent(new f),this.#a=i(a.deletedBrand),this.#t();let n=this.shadowRoot?.getElementById(`fvl-brand-${e+1}-input`);n||(n=this.shadowRoot?.getElementById("add-fvl-brand-button")),n?.focus()};#h=()=>{const{brands:e}=this.#e;this.#e={...this.#e,brands:[...Array.isArray(e)?e:[],{brand:"",version:""}]},this.dispatchEvent(new f),this.#a=i(a.addedBrand),this.#t();const r=this.shadowRoot?.querySelectorAll(".ua-brand-name-input");if(r){const n=Array.from(r).pop();n&&n.focus()}};#g=e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),this.#h())};#f=()=>{const{fullVersionList:e}=this.#e;this.#e={...this.#e,fullVersionList:[...Array.isArray(e)?e:[],{brand:"",version:""}]},this.dispatchEvent(new f),this.#a=i(a.addedBrand),this.#t();const r=this.shadowRoot?.querySelectorAll(".fvl-brand-name-input");if(r){const n=Array.from(r).pop();n&&n.focus()}};#A=e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),this.#f())};#i=(e,r)=>{e in this.#e&&(this.#e={...this.#e,[e]:r},this.#t()),this.dispatchEvent(new f)};#$=e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),e.target.click())};#C=e=>{e.preventDefault(),this.#l&&(this.dispatchEvent(new C(this.#e)),this.#t())};#p(e,r,n,s){return u`
      <label class="full-row label input-field-label-container">
        ${e}
        <input
          class="input-field"
          type="text"
          @input=${o=>{const d=o.target.value;this.#i(s,d)}}
          .value=${n}
          placeholder=${r}
          jslog=${b().track({change:!0}).context(U(s))}
          />
      </label>
    `}#k(){const{platform:e,platformVersion:r}=this.#e,n=l=>{const o=l.target.value;this.#i("platform",o)},s=l=>{const o=l.target.value;this.#i("platformVersion",o)};return u`
      <span class="full-row label">${i(a.platformLabel)}</span>
      <div class="full-row brand-row" aria-label=${i(a.platformProperties)} role="group">
        <input
          class="input-field half-row"
          type="text"
          @input=${n}
          .value=${e}
          placeholder=${i(a.platformPlaceholder)}
          aria-label=${i(a.platformLabel)}
          jslog=${b("platform").track({change:!0})}
        />
        <input
          class="input-field half-row"
          type="text"
          @input=${s}
          .value=${r}
          placeholder=${i(a.platformVersion)}
          aria-label=${i(a.platformVersion)}
          jslog=${b("platform-version").track({change:!0})}
        />
      </div>
    `}#w(){const{model:e,mobile:r}=this.#e,n=o=>{const d=o.target.value;this.#i("model",d)},s=o=>{const d=o.target.checked;this.#i("mobile",d)},l=this.#s?u`
      <label class="mobile-checkbox-container">
        <input type="checkbox" @input=${s} .checked=${r}
          jslog=${_("mobile").track({click:!0})}
        />
        ${i(a.mobileCheckboxLabel)}
      </label>
    `:u``;return u`
      <span class="full-row label">${i(a.deviceModel)}</span>
      <div class="full-row brand-row" aria-label=${i(a.deviceProperties)} role="group">
        <input
          class="input-field ${this.#s?"device-model-input":"full-row"}"
          type="text"
          @input=${n}
          .value=${e}
          placeholder=${i(a.deviceModel)}
          jslog=${b("model").track({change:!0})}
        />
        ${l}
      </div>
    `}#y(){const{brands:e=[{brand:"",version:""}]}=this.#e,r=e.map((n,s)=>{const{brand:l,version:o}=n,d=()=>{this.#m(s)},h=c=>{(c.code==="Space"||c.code==="Enter")&&(c.preventDefault(),d())},v=c=>{const m=c.target.value;this.#c(m,s,"brandName")},g=c=>{const m=c.target.value;this.#c(m,s,"brandVersion")};return u`
        <div class="full-row brand-row" aria-label=${i(a.brandProperties)} role="group">
          <input
            class="input-field ua-brand-name-input"
            type="text"
            @input=${v}
            .value=${l}
            id="ua-brand-${s+1}-input"
            placeholder=${i(a.brandName)}
            aria-label=${i(a.brandNameAriaLabel,{PH1:s+1})}
            jslog=${b("brand-name").track({change:!0})}
          />
          <input
            class="input-field"
            type="text"
            @input=${g}
            .value=${o}
            placeholder=${i(a.significantBrandVersionPlaceholder)}
            aria-label=${i(a.brandVersionAriaLabel,{PH1:s+1})}
            jslog=${b("brand-version").track({change:!0})}
          />
          <devtools-icon
            .data=${{color:"var(--icon-default)",iconName:"bin",width:"16px",height:"16px"}}
            title=${i(a.brandUserAgentDelete)}
            class="delete-icon"
            tabindex="0"
            role="button"
            @click=${d}
            @keypress=${h}
            aria-label=${i(a.brandUserAgentDelete)}
          >
          </devtools-icon>
        </div>
      `});return u`
      <span class="full-row label">${i(a.useragent)}</span>
      ${r}
      <div
        class="add-container full-row"
        role="button"
        tabindex="0"
        id="add-brand-button"
        aria-label=${i(a.addBrand)}
        @click=${this.#h}
        @keypress=${this.#g}
      >
        <devtools-icon
          aria-hidden="true"
          .data=${{color:"var(--icon-default)",iconName:"plus",width:"16px"}}
        >
        </devtools-icon>
        ${i(a.addBrand)}
      </div>
    `}#x(){const{fullVersionList:e=[{brand:"",version:""}]}=this.#e,r=e.map((n,s)=>{const{brand:l,version:o}=n,d=()=>{this.#v(s)},h=c=>{(c.code==="Space"||c.code==="Enter")&&(c.preventDefault(),d())},v=c=>{const m=c.target.value;this.#u(m,s,"brandName")},g=c=>{const m=c.target.value;this.#u(m,s,"brandVersion")};return u`
        <div
          class="full-row brand-row"
          aria-label=${i(a.brandProperties)}
          jslog=${N("full-version")}
          role="group">
          <input
            class="input-field fvl-brand-name-input"
            type="text"
            @input=${v}
            .value=${l}
            id="fvl-brand-${s+1}-input"
            placeholder=${i(a.brandName)}
            aria-label=${i(a.brandNameAriaLabel,{PH1:s+1})}
            jslog=${b("brand-name").track({change:!0})}
          />
          <input
            class="input-field"
            type="text"
            @input=${g}
            .value=${o}
            placeholder=${i(a.brandVersionPlaceholder)}
            aria-label=${i(a.brandVersionAriaLabel,{PH1:s+1})}
            jslog=${b("brand-version").track({change:!0})}
          />
          <devtools-icon
            .data=${{color:"var(--icon-default)",iconName:"bin",width:"16px",height:"16px"}}
            title=${i(a.brandFullVersionListDelete)}
            class="delete-icon"
            tabindex="0"
            role="button"
            @click=${d}
            @keypress=${h}
            aria-label=${i(a.brandFullVersionListDelete)}
          >
          </devtools-icon>
        </div>
      `});return u`
      <span class="full-row label">${i(a.fullVersionList)}</span>
      ${r}
      <div
        class="add-container full-row"
        role="button"
        tabindex="0"
        id="add-fvl-brand-button"
        aria-label=${i(a.addBrand)}
        @click=${this.#f}
        @keypress=${this.#A}
      >
        <devtools-icon
          aria-hidden="true"
          .data=${{color:"var(--icon-default)",iconName:"plus",width:"16px"}}
        >
        </devtools-icon>
        ${i(a.addBrand)}
      </div>
    `}#t(){const{fullVersion:e,architecture:r}=this.#e,n=this.#y(),s=this.#x(),l=this.#p(i(a.fullBrowserVersion),i(a.fullBrowserVersionPlaceholder),e||"","fullVersion"),o=this.#k(),d=this.#p(i(a.architecture),i(a.architecturePlaceholder),r,"architecture"),h=this.#w(),v=this.#l?u`
      <devtools-button
        .variant=${"outlined"}
        .type=${"submit"}
      >
        ${i(a.update)}
      </devtools-button>
    `:M,g=u`
      <section class="root">
        <div
          class="tree-title"
          role="button"
          @click=${this.#d}
          tabindex=${this.#n?"-1":"0"}
          @keydown=${this.#b}
          aria-expanded=${this.#r}
          aria-controls="form-container"
          aria-disabled=${this.#n}
          aria-label=${i(a.title)}
          jslog=${F().track({click:!0})}
        >
          <devtools-icon
            class=${this.#r?"rotate-icon":""}
            .data=${{color:"var(--icon-default)",iconName:"triangle-right",width:"14px"}}
          ></devtools-icon>
          ${i(a.title)}
          <devtools-icon
            .data=${{color:"var(--icon-default)",iconName:"info",width:"16px"}}
            title=${i(a.userAgentClientHintsInfo)}
            class='info-icon'
          ></devtools-icon>
          <x-link
           tabindex=${this.#n?"-1":"0"}
           href="https://web.dev/user-agent-client-hints/"
           target="_blank"
           class="link"
           @keypress=${this.#$}
           aria-label=${i(a.userAgentClientHintsInfo)}
           jslog=${T("learn-more").track({click:!0})}
          >
            ${i(a.learnMore)}
          </x-link>
        </div>
        <form
          id="form-container"
          class="form-container ${this.#r?"":"hide-container"}"
          @submit=${this.#C}
        >
          ${n}
          ${s}
          ${l}
          ${o}
          ${d}
          ${h}
          ${v}
        </form>
        <div aria-live="polite" aria-label=${this.#a}></div>
      </section>
    `;j(g,this.#o,{host:this})}validate=()=>{for(const[e,r]of Object.entries(this.#e))if(e==="brands"||e==="fullVersionList"){if(!this.#e.brands?.every(({brand:s,version:l})=>{const o=$(s,i(a.notRepresentable)),d=$(l,i(a.notRepresentable));return o.valid&&d.valid}))return{valid:!1,errorMessage:i(a.notRepresentable)}}else{const n=$(r,i(a.notRepresentable));if(!n.valid)return n}return{valid:!0}}}customElements.define("devtools-user-agent-client-hints-form",$e);export{$e as U};
//# sourceMappingURL=UserAgentClientHintsForm-CYAYtRuO.js.map
