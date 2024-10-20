import{b as f,g as x,eg as C,X as g,eh as S,ag as $,ei as c,b0 as T,b2 as m,bj as p,aO as h,bG as L,ej as E,ek as M,aP as u,bD as z,el as A}from"./inspector-CyOA7R9n.js";const b=new CSSStyleSheet;b.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:host {
  display: block;
  /**
    Adjusts the max height of the code area.
    This can be changed from outside by targeting \\'devtools-code-block\\' element.
  */
  --code-block-max-code-height: none;
  /**
    Adjusts the background color of the code block element.
    This can be changed from outside by targeting \\'devtools-code-block\\' element.
  */
  --code-block-background-color: var(--sys-color-surface2);
}

.codeblock {
  box-sizing: border-box;
  color: var(--sys-color-on-surface);
}

.codeblock .editor-wrapper {
  color: var(--sys-color-on-surface);
  background: var(--code-block-background-color); /* stylelint-disable-line plugin/use_theme_colors */
  padding: 10px 5px 0;
  border-bottom-left-radius: var(--sys-shape-corner-extra-small);
  border-bottom-right-radius: var(--sys-shape-corner-extra-small);
}

.codeblock .editor-wrapper:has(.heading) {
  padding: var(--sys-size-3) var(--sys-size-4) 0 5px;
}

.codeblock:not(:has(.toolbar)) .editor-wrapper {
  border-radius: var(--sys-shape-corner-extra-small);
}

.codeblock .editor-wrapper .code {
  max-height: var(--code-block-max-code-height);
  overflow: auto;
  padding-bottom: 10px;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--sys-size-11);
}

.heading-text {
  font: var(--sys-typescale-body5-bold);
  padding-left: var(--sys-size-4);
  padding-right: var(--sys-size-2);
}

.codeblock .lang {
  padding: var(--sys-size-4) 0;
  flex: 1;
}

.codeblock .copy-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--sys-typescale-body5-size);

  span {
    padding-right: var(--sys-size-4);
  }
}

.notice {
  margin-top: var(--sys-size-2);
  padding: var(--sys-size-4) var(--sys-size-5);
  background-color: var(--code-block-background-color); /* stylelint-disable-line plugin/use_theme_colors */
  border-radius: var(--sys-shape-corner-extra-small);

  .link {
    font: var(--sys-typescale-body4-regular);
    color: var(--sys-color-primary);
    text-decoration-line: underline;
  }
}

/*# sourceURL=codeBlock.css */
`);const{html:n}=u,a={code:"Code",copy:"Copy code",copied:"Copied to clipboard",disclaimer:"Use code snippets with caution"},I=f("ui/components/markdown_view/CodeBlock.ts",a),d=x.bind(void 0,I);class j extends HTMLElement{#t=this.attachShadow({mode:"open"});#e="";#s="";#r=1e3;#i;#n=!1;#a;#c=new C;#d=!1;#l;#h=!0;connectedCallback(){this.#t.adoptedStyleSheets=[b],this.#o()}set code(e){this.#e=e,this.#a=g.create({doc:this.#e,extensions:[S(this.#e),g.readOnly.of(!0),$.lineWrapping,this.#c.of(c.javascript())]}),this.#o()}get code(){return this.#e}set codeLang(e){this.#s=e,this.#o()}set timeout(e){this.#r=e,this.#o()}set displayNotice(e){this.#d=e,this.#o()}set header(e){this.#l=e,this.#o()}set showCopyButton(e){this.#h=e,this.#o()}#p(){T.copyText(this.#e),this.#n=!0,this.#o(),clearTimeout(this.#i),this.#i=setTimeout(()=>{this.#n=!1,this.#o()},this.#r)}#u(){return n`<p class="notice">
      <x-link class="link" href="https://support.google.com/legal/answer/13505487" jslog=${m("code-disclaimer").track({click:!0})}>
        ${d(a.disclaimer)}
      </x-link>
    </p>`}#g(){return n`
      <div class="copy-button-container">
        <devtools-button
          .data=${{variant:"icon",size:"SMALL",jslogContext:"copy",iconName:"copy",title:d(a.copy)}}
          @click=${this.#p}
        ></devtools-button>
        ${this.#n?n`<span>${d(a.copied)}</span>`:p}
      </div>`}#m(){if(!this.#a)throw new Error("Unexpected: trying to render the text editor without editorState");return n`
      <div class="code">
        <devtools-text-editor .state=${this.#a}></devtools-text-editor>
      </div>
    `}#o(){const e=(this.#l??this.#s)||d(a.code);h(n`<div class='codeblock' jslog=${L("code")}>
      <div class="editor-wrapper">
        <div class="heading">
          <h4 class="heading-text">${e}</h4>
          ${this.#h?this.#g():p}
        </div>
        ${this.#m()}
      </div>
      ${this.#d?this.#u():p}
    </div>`,this.#t,{host:this});const t=this.#t?.querySelector("devtools-text-editor")?.editor;if(!t)return;let r=E.html({autoCloseTags:!1,selfClosingTags:!0});switch(this.#s){case"js":r=c.javascript();break;case"ts":r=c.javascript({typescript:!0});break;case"jsx":r=c.javascript({jsx:!0});break;case"css":r=M.css();break}t.dispatch({effects:this.#c.reconfigure(r)})}}customElements.define("devtools-code-block",j);const v=new CSSStyleSheet;v.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.markdown-image {
  display: block;
}

/*# sourceURL=markdownImage.css */
`);const U=new Map([]),_=o=>{const e=U.get(o);if(!e)throw new Error(`Markdown image with key '${o}' is not available, please check MarkdownImagesMap.ts`);return e},{html:l,Directives:{ifDefined:R}}=u;class B extends HTMLElement{#t=this.attachShadow({mode:"open"});#e;#s;connectedCallback(){this.#t.adoptedStyleSheets=[v]}set data(e){const{key:t,title:r}=e,i=_(t);this.#e=i,this.#s=r,this.#n()}#r(){if(!this.#e)return l``;const{src:e,color:t,width:r="100%",height:i="100%"}=this.#e;return l`
      <devtools-icon .data=${{iconPath:e,color:t,width:r,height:i}}></devtools-icon>
    `}#i(){if(!this.#e)return l``;const{src:e,width:t="100%",height:r="100%"}=this.#e;return l`
      <img class="markdown-image" src=${e} alt=${R(this.#s)} width=${t} height=${r} />
    `}#n(){if(!this.#e)return;const{isIcon:e}=this.#e,t=e?this.#r():this.#i();h(t,this.#t,{host:this})}}customElements.define("devtools-markdown-image",B);const w=new CSSStyleSheet;w.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.devtools-link {
  color: var(--sys-color-primary);
  outline-offset: 2px;
  text-decoration: var(--markdown-link-text-decoration-style, none);
}

.devtools-link:hover {
  text-decoration: underline;
}

/*# sourceURL=markdownLink.css */
`);const D=new Map([["issuesContrastWCAG21AA","https://www.w3.org/TR/WCAG21/#contrast-minimum"],["issuesContrastWCAG21AAA","https://www.w3.org/TR/WCAG21/#contrast-enhanced"],["issuesContrastSuggestColor","https://developers.google.com/web/updates/2020/08/devtools#accessible-color"],["issuesCSPSetStrict","https://web.dev/strict-csp"],["issuesCSPWhyStrictOverAllowlist","https://web.dev/strict-csp/#why-a-strict-csp-is-recommended-over-allowlist-csps"],["issueCorsPreflightRequest","https://web.dev/cross-origin-resource-sharing/#preflight-requests-for-complex-http-calls"],["issueQuirksModeDoctype","https://web.dev/doctype/"],["sameSiteAndSameOrigin","https://web.dev/same-site-same-origin/"],["punycodeReference","https://wikipedia.org/wiki/Punycode"],["https://xhr.spec.whatwg.org/","https://xhr.spec.whatwg.org/"],["https://goo.gle/chrome-insecure-origins","https://goo.gle/chrome-insecure-origins"],["https://webrtc.org/web-apis/chrome/unified-plan/","https://webrtc.org/web-apis/chrome/unified-plan/"],["https://developer.chrome.com/blog/enabling-shared-array-buffer/","https://developer.chrome.com/blog/enabling-shared-array-buffer/"],["https://developer.chrome.com/docs/extensions/mv3/","https://developer.chrome.com/docs/extensions/mv3/"],["https://developer.chrome.com/blog/immutable-document-domain/","https://developer.chrome.com/blog/immutable-document-domain/"],["https://github.com/WICG/shared-element-transitions/blob/main/debugging_overflow_on_images.md","https://github.com/WICG/shared-element-transitions/blob/main/debugging_overflow_on_images.md"],["https://developer.chrome.com/docs/extensions/reference/privacy/#property-websites-privacySandboxEnabled","https://developer.chrome.com/docs/extensions/reference/privacy/#property-websites-privacySandboxEnabled"],["PNASecureContextRestrictionFeatureStatus","https://chromestatus.com/feature/5954091755241472"],["https://w3c.github.io/uievents/#legacy-event-types","https://w3c.github.io/uievents/#legacy-event-types"],["manageCookiesHelpPage","https://support.google.com/chrome/answer/95647"],["gracePeriodStagedControlExplainer","https://developers.google.com/privacy-sandbox/blog/grace-period-opt-out"]]),N=o=>{if(/^https:\/\/www\.chromestatus\.com\//.test(o)||/^https:\/\/developer\.chrome\.com\//.test(o)||/^https:\/\/developers\.google\.com\//.test(o)||/^https:\/\/web\.dev\//.test(o))return o;const e=D.get(o);if(!e)throw new Error(`Markdown link with key '${o}' is not available, please check MarkdownLinksMap.ts`);return e},{html:H}=u;class P extends HTMLElement{#t=this.attachShadow({mode:"open"});#e="";#s="";connectedCallback(){this.#t.adoptedStyleSheets=[w]}set data(e){const{key:t,title:r}=e,i=N(t);this.#e=r,this.#s=i,this.#r()}#r(){const e=H`<x-link class="devtools-link" href=${this.#s} jslog=${m().track({click:!0})}
    >${this.#e}</x-link>`;h(e,this.#t,{host:this})}}customElements.define("devtools-markdown-link",P);const y=new CSSStyleSheet;y.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  --code-background-color: var(--sys-color-surface4);
}

.message {
  line-height: 18px;
  font-size: 12px;
  color: var(--override-markdown-view-message-color, --sys-color-token-subtle);
  user-select: text;
}

.message p {
  margin: 0;
}

.message p:not(:first-child) {
  margin-block-start: 2px;
}

.message p:not(:last-child) {
  margin-bottom: 10px;
}

.message ul {
  list-style-type: none;
  padding-inline-start: var(--sys-size-8);
}

.message ul ul {
  padding-inline-start: 19px;
}

.message li {
  margin-top: 8px;
  display: list-item;
  list-style-type: disc;
}

.message code {
  color: var(--sys-color-on-surface);
  font-size: 11px;
  user-select: text;
  cursor: text;
  /* This is still using design tokens because \\'--code-background-color\\' is defined with them by default */
  /* stylelint-disable-next-line plugin/use_theme_colors */
  background-color: var(--code-background-color);
  border-radius: 2px;
  padding: 1px 3px;
}

devtools-code-block {
  margin-bottom: var(--sys-size-5);
}

.devtools-link {
  color: var(--sys-color-primary);
  outline-offset: 2px;
  text-decoration: none;
}

.devtools-link:hover {
  text-decoration: underline;
}

/*# sourceURL=markdownView.css */
`);const s=A,W=h;class F extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=[];#s=new k;connectedCallback(){this.#t.adoptedStyleSheets=[y]}set data(e){this.#e=e.tokens,e.renderer&&(this.#s=e.renderer),this.#r()}#r(){this.#i()}#i(){W(s`
      <div class='message'>
        ${this.#e.map(e=>this.#s.renderToken(e))}
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-markdown-view",F);class k{renderChildTokens(e){if("tokens"in e&&e.tokens)return e.tokens.map(t=>this.renderToken(t));throw new Error("Tokens not found")}unescape(e){const t=new Map([["&amp;","&"],["&lt;","<"],["&gt;",">"],["&quot;",'"'],["&#39;","'"]]);return e.replace(/&(amp|lt|gt|quot|#39);/g,r=>{const i=t.get(r);return i||r})}renderText(e){return"tokens"in e&&e.tokens?s`${this.renderChildTokens(e)}`:s`${this.unescape("text"in e?e.text:"")}`}renderHeading(e){switch(e.depth){case 1:return s`<h1>${this.renderText(e)}</h1>`;case 2:return s`<h2>${this.renderText(e)}</h2>`;case 3:return s`<h3>${this.renderText(e)}</h3>`;case 4:return s`<h4>${this.renderText(e)}</h4>`;case 5:return s`<h5>${this.renderText(e)}</h5>`;default:return s`<h6>${this.renderText(e)}</h6>`}}renderCodeBlock(e){return s`<devtools-code-block
      .code=${this.unescape(e.text)}
      .codeLang=${e.lang||""}>
    </devtools-code-block>`}templateForToken(e){switch(e.type){case"paragraph":return s`<p>${this.renderChildTokens(e)}</p>`;case"list":return s`<ul>${e.items.map(t=>this.renderToken(t))}</ul>`;case"list_item":return s`<li>${this.renderChildTokens(e)}</li>`;case"text":return this.renderText(e);case"codespan":return s`<code>${this.unescape(e.text)}</code>`;case"code":return this.renderCodeBlock(e);case"space":return s``;case"link":return s`<devtools-markdown-link .data=${{key:e.href,title:e.text}}></devtools-markdown-link>`;case"image":return s`<devtools-markdown-image .data=${{key:e.href,title:e.text}}></devtools-markdown-image>`;case"heading":return this.renderHeading(e);case"strong":return s`<strong>${this.renderText(e)}</strong>`;case"em":return s`<em>${this.renderText(e)}</em>`;default:return null}}renderToken(e){const t=this.templateForToken(e);if(t===null)throw new Error(`Markdown token type '${e.type}' not supported.`);return t}}class q extends k{renderToken(e){const t=this.templateForToken(e);return t===null?s`${e.raw}`:t}sanitizeUrl(e){try{const t=new URL(e);return t.protocol==="https:"||t.protocol==="http:"?t.toString():null}catch{return null}}detectCodeLanguage(e){return e.lang?e.lang:/^(\.|#)?[\w:\[\]="'-\.]* ?{/m.test(e.text)||/^@import/.test(e.text)?"css":/^(var|const|let|function|async|import)\s/.test(e.text)?"js":""}templateForToken(e){switch(e.type){case"heading":return s`<strong>${this.renderText(e)}</strong>`;case"link":case"image":{const t=this.sanitizeUrl(e.href);return t?s`${z.create(t,e.text,void 0,void 0,"link-in-explanation")}`:null}case"code":return s`<devtools-code-block
          .code=${this.unescape(e.text)}
          .codeLang=${this.detectCodeLanguage(e)}
          .displayNotice=${!0}>
        </devtools-code-block>`}return super.templateForToken(e)}}export{q as M,F as a};
//# sourceMappingURL=MarkdownView-IOiMoU4I.js.map
