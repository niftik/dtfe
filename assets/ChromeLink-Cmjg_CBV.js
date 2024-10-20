import{aN as o,a$ as i,i as a,b0 as h,b1 as c,aO as l,b2 as d,aP as m}from"./inspector-CyOA7R9n.js";const r=new CSSStyleSheet;r.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

/*# sourceURL=chromeLink.css */
`);const{html:u}=m;class g extends HTMLElement{#t=this.attachShadow({mode:"open"});#s=this.#r.bind(this);#e="";connectedCallback(){this.#t.adoptedStyleSheets=[r],o(this,this.#s)}set href(e){if(!i(e,"chrome:"))throw new Error("ChromeLink href needs to start with 'chrome://'");this.#e=e,o(this,this.#s)}#o(e){const t=a.instance().rootTarget();if(t===null)return;const s=this.#e;t.targetAgent().invoke_createTarget({url:s}).then(n=>{n.getError()&&h.openInNewTab(s)}),e.consume(!0)}#r(){const e=new URL(this.#e);e.search="";const t=c(e.toString());l(u`
        <a href=${this.#e} class="link" target="_blank"
          jslog=${d().track({click:!0}).context(t)}
          @click=${this.#o}><slot></slot></a>
      `,this.#t,{host:this})}}customElements.define("devtools-chrome-link",g);export{g as C};
//# sourceMappingURL=ChromeLink-Cmjg_CBV.js.map
