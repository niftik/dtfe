import{b as a,g as c,di as r,aN as x,b0 as w,a_ as g,aO as m,aP as d,b2 as k,bf as y,dj as v}from"./inspector-CyOA7R9n.js";const{html:S}=d,b={feedback:"Feedback"},$=a("ui/components/panel_feedback/FeedbackButton.ts",b),L=c.bind(void 0,$),U=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%2017.5v-13c0-.413.147-.766.44-1.06.294-.293.648-.44%201.06-.44h11c.412%200%20.766.147%201.06.44.293.294.44.647.44%201.06V13c0%20.412-.147.766-.44%201.06-.294.293-.647.44-1.06.44h-10l-2.5%203ZM4.5%2013h11V4.5h-11V13Z'%20fill='%23000'/%3e%3cpath%20d='M7.691%2011.501H6V9.81l3.648-3.697a.425.425%200%200%201%20.303-.143c.107%200%20.208.048.303.143l1.104%201.086a.426.426%200%200%201%20.142.302.426.426%200%200%201-.142.303L7.69%2011.5ZM14%2011.501H8.962l1.281-1.282H14v1.282Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString();class C extends HTMLElement{#i=this.attachShadow({mode:"open"});#n=this.#s.bind(this);#e={feedbackUrl:r};set data(e){this.#e=e,x(this,this.#n)}#t(){w.openInNewTab(this.#e.feedbackUrl)}#s(){if(!g(this))throw new Error("FeedbackButton render was not scheduled");m(S`
      <devtools-button
          @click=${this.#t}
          .iconUrl=${U}
          .variant=${"outlined"}
          .jslogContext=${"feedback"}
      >${L(b.feedback)}</devtools-button>
      `,this.#i,{host:this})}}customElements.define("devtools-feedback-button",C);const u=new CSSStyleSheet;u.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**
 * Copyright 2021 Google LLC. All rights reserved.
 */

:host {
  display: block;
}

.preview {
  padding: 12px 16px;
  border: 1px solid var(--sys-color-divider);
  color: var(--sys-color-on-surface);
  font-size: 13px;
  line-height: 20px;
  border-radius: 12px;
  margin: 42px 0;
  letter-spacing: 0.01em;
}

h2 {
  color: var(--sys-color-primary);
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  margin: 9px 0 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: normal;
}

h3 {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: var(--sys-color-on-surface);
  margin-bottom: 2px;
  font-weight: normal;
}

.preview p {
  margin-bottom: 24px;
}

.thumbnail {
  height: 92px;
}

.video {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
}

x-link { /* stylelint-disable-line selector-type-no-unknown */
  color: var(--sys-color-primary);
  text-decoration-line: underline;
}

x-link.quick-start-link { /* stylelint-disable-line selector-type-no-unknown */
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
}

.video-description {
  min-width: min-content;
  flex-basis: min-content;
  flex-grow: 1;
}

@media (forced-colors: active) {
  x-link { /* stylelint-disable-line selector-type-no-unknown */
    color: linktext;
  }
}

/*# sourceURL=panelFeedback.css */
`);const{html:T}=d,t={previewText:"Our team is actively working on this feature and we would love to know what you think.",previewTextFeedbackLink:"Send us your feedback.",previewFeature:"Preview feature",videoAndDocumentation:"Video and documentation"},F=a("ui/components/panel_feedback/PanelFeedback.ts",t),i=c.bind(void 0,F),E=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2017c-.639%200-1.097-.281-1.375-.844s-.216-1.087.187-1.573L7.5%209.5v-5h-.75a.723.723%200%200%201-.531-.219A.723.723%200%200%201%206%203.75c0-.208.073-.385.219-.531A.723.723%200%200%201%206.75%203h6.5c.208%200%20.385.073.531.219A.723.723%200%200%201%2014%203.75a.723.723%200%200%201-.219.531.723.723%200%200%201-.531.219h-.75v5l4.188%205.083c.389.486.444%201.01.166%201.573-.277.563-.729.844-1.354.844h-11Zm0-1.5h11L11%2010V4.5H9V10l-4.5%205.5Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),M=new URL("/assets/preview_feature_video_thumbnail-CGWp3HK7.svg",import.meta.url).toString();class R extends HTMLElement{#i=this.attachShadow({mode:"open"});#n=this.#t.bind(this);#e={feedbackUrl:r,quickStartUrl:r,quickStartLinkText:""};connectedCallback(){this.#i.adoptedStyleSheets=[u]}set data(e){this.#e=e,x(this,this.#n)}#t(){if(!g(this))throw new Error("PanelFeedback render was not scheduled");m(T`
      <div class="preview">
        <h2 class="flex">
          <devtools-icon .data=${{iconPath:E,width:"20px",height:"20px",color:"var(--icon-primary)"}}></devtools-icon> ${i(t.previewFeature)}
        </h2>
        <p>${i(t.previewText)} <x-link href=${this.#e.feedbackUrl} jslog=${k("feedback").track({click:!0})}>${i(t.previewTextFeedbackLink)}</x-link></p>
        <div class="video">
          <div class="thumbnail">
            <img src=${M} role="presentation" />
          </div>
          <div class="video-description">
            <h3>${i(t.videoAndDocumentation)}</h3>
            <x-link class="quick-start-link" href=${this.#e.quickStartUrl} jslog=${k("css-overview.quick-start").track({click:!0})}>${this.#e.quickStartLinkText}</x-link>
          </div>
        </div>
      </div>
      `,this.#i,{host:this})}}customElements.define("devtools-panel-feedback",R);const f=new CSSStyleSheet;f.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
}

.experiment-preview,
.feedback,
.learn-more {
  display: flex;
  align-items: center;
}

.helper {
  flex-basis: 100%;
  text-align: center;
  font-style: italic;
}

.spacer {
  flex: 1;
}

.x-link {
  color: var(--sys-color-primary);
  text-decoration-line: underline;
  margin: 0 4px;
}

.feedback .x-link {
  color: var(--sys-color-token-subtle);
}

/*# sourceURL=previewToggle.css */
`);const{render:A,html:n,nothing:o}=d,s={previewTextFeedbackLink:"Send us your feedback.",shortFeedbackLink:"Send feedback",learnMoreLink:"Learn More"},H=a("ui/components/panel_feedback/PreviewToggle.ts",s),l=c.bind(void 0,H);class I extends HTMLElement{#i=this.attachShadow({mode:"open"});#n="";#e=null;#t=null;#s;#o="";#l;connectedCallback(){this.#i.adoptedStyleSheets=[y,f]}set data(e){this.#n=e.name,this.#e=e.helperText,this.#t=e.feedbackURL,this.#s=e.learnMoreURL,this.#o=e.experiment,this.#l=e.onChangeCallback,this.#r()}#r(){const e=v.isEnabled(this.#o);A(n`
      <div class="container">
        <label class="experiment-preview">
          <input type="checkbox" ?checked=${e} @change=${this.#a} aria-label=${this.#n} />
          <devtools-icon .data=${{iconName:"experiment",width:"16px",height:"16px",color:"var(--icon-default)"}}>
          </devtools-icon>${this.#n}
        </label>
        <div class="spacer"></div>
        ${this.#t&&!this.#e?n`<div class="feedback"><x-link class="x-link" href=${this.#t}>${l(s.shortFeedbackLink)}</x-link></div>`:o}
        ${this.#s?n`<div class="learn-more"><x-link class="x-link" href=${this.#s}>${l(s.learnMoreLink)}</x-link></div>`:o}
        <div class="helper">
          ${this.#e&&this.#t?n`<p>${this.#e} <x-link class="x-link" href=${this.#t}>${l(s.previewTextFeedbackLink)}</x-link></p>`:o}
        </div>
      </div>`,this.#i,{host:this})}#a(e){const p=e.target.checked;v.setEnabled(this.#o,p),this.#l?.(p)}}customElements.define("devtools-preview-toggle",I);export{I as P};
//# sourceMappingURL=PreviewToggle-D6BBIbZ3.js.map
