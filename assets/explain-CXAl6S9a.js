import"./Spinner-1sNtsCwz.js";import{d4 as q,d5 as H,aF as G,c4 as W,b as B,g as V,d6 as S,aj as y,d7 as F,bf as P,u as r,A as l,d8 as L,b0 as T,d9 as K,i as Q,b2 as b,bG as w,da as Z,V as $,bM as M,bQ as X,b_ as Y,bj as k,db as J,bi as ee,aP as te,dc as se}from"./inspector-CyOA7R9n.js";import{M as ne}from"./MarkdownView-IOiMoU4I.js";import{a as ie}from"./ScriptFormatter-CdcZyJ9a.js";const oe=1e3,ae=1e3,I=1e3,re=1e3;var p;(function(i){i.MESSAGE="message",i.STACKTRACE="stacktrace",i.NETWORK_REQUEST="networkRequest",i.RELATED_CODE="relatedCode"})(p||(p={}));class le{#t;constructor(e){this.#t=e}async getNetworkRequest(){const e=this.#t.consoleMessage().getAffectedResources()?.requestId;return e?q.instance().requestsForId(e)[0]:void 0}async getMessageSourceCode(){const e=this.#t.consoleMessage().stackTrace?.callFrames[0],t=this.#t.consoleMessage().runtimeModel(),n=t?.debuggerModel();if(!n||!t||!e)return{text:"",columnNumber:0,lineNumber:0};const s=new H(n,e.scriptId,e.lineNumber,e.columnNumber),d=await G.instance().rawLocationToUILocation(s),o=await d?.uiSourceCode.requestContent(),g=!o?.isEncoded&&o?.content?o.content:"",f=g.indexOf(`
`);if(g.length>I&&(f<0||f>I)){const{formattedContent:m,formattedMapping:C}=await ie(d?.uiSourceCode.mimeType()??"text/javascript",g),[u,v]=C.originalToFormatted(d?.lineNumber??0,d?.columnNumber??0);return{text:m,columnNumber:v,lineNumber:u}}return{text:g,columnNumber:d?.columnNumber??0,lineNumber:d?.lineNumber??0}}async buildPrompt(e=Object.values(p)){const[t,n]=await Promise.all([e.includes(p.RELATED_CODE)?this.getMessageSourceCode():void 0,e.includes(p.NETWORK_REQUEST)?this.getNetworkRequest():void 0]),s=t?.text?de(t):"",d=n?he(n):"",o=e.includes(p.STACKTRACE)?ue(this.#t):"",g=ge(this.#t),f=this.formatPrompt({message:[g,o].join(`
`).trim(),relatedCode:s,relatedRequest:d}),m=[{type:p.MESSAGE,value:g}];return o&&m.push({type:p.STACKTRACE,value:o}),s&&m.push({type:p.RELATED_CODE,value:s}),d&&m.push({type:p.NETWORK_REQUEST,value:d}),{prompt:f,sources:m,isPageReloadRecommended:e.includes(p.NETWORK_REQUEST)&&!!this.#t.consoleMessage().getAffectedResources()?.requestId&&!d}}formatPrompt({message:e,relatedCode:t,relatedRequest:n}){let s=`Why does browser show an error
${e}`;return t&&(s+=`
For the following code in my web app

\`\`\`
${t}
\`\`\``),n&&(s+=`
For the following network request in my web app

\`\`\`
${n}
\`\`\``),s}getSearchQuery(){let e=this.#t.toMessageTextString();return e&&(e=e.split(`
`)[0]),e}}function ce(i){const e=i.name.toLowerCase().trim();return!(e.startsWith("x-")||e==="cookie"||e==="set-cookie"||e==="authorization")}function x(i){const e=/^\s*/.exec(i);if(!e||!e.length)return null;const t=e[0];return t===i?null:t}function de({text:i,columnNumber:e,lineNumber:t},n=I){const s=i.split(`
`);if(s[t].length>=n/2){const u=Math.max(e-n/2,0),v=Math.min(e+n/2,s[t].length);return s[t].substring(u,v)}let d=0,o=t,g=x(s[t]);const f=new Map;for(;s[o]!==void 0&&d+s[o].length<=n/2;){const u=x(s[o]);u!==null&&g!==null&&(u===g||!u.startsWith(g))&&(/^\s*[\}\)\]]/.exec(s[o])||f.set(u,o),g=u),d+=s[o].length+1,o--}o=t+1;let m=t,C=t;for(g=x(s[t]);s[o]!==void 0&&d+s[o].length<=n;){d+=s[o].length;const u=x(s[o]);if(u!==null&&g!==null&&(u===g||!u.startsWith(g))){const v=s[o+1],E=v?x(v):null;(!E||E===u||!E.startsWith(u))&&f.has(u)&&(m=f.get(u)??0,C=o),g=u}o++}return s.slice(m,C+1).join(`
`)}function _(i,e,t){let n="";for(const s of e){if(n.length+s.length>t)break;n+=s}return n=n.trim(),n&&i?i+`
`+n:n}function he(i){const e=(t,n)=>_(t,n.filter(ce).map(s=>s.name+": "+s.value+`
`),re);return`Request: ${i.url()}

${e("Request headers:",i.requestHeaders())}

${e("Response headers:",i.responseHeaders)}

Response status: ${i.statusCode} ${i.statusText}`}function ge(i){return i.toMessageTextString().substr(0,oe)}function ue(i){const e=i.contentElement().querySelector(".stack-preview-container");if(!e)return"";const s=(e.shadowRoot?.querySelector(".stack-preview-container")).childTextNodes().filter(d=>!d.parentElement?.closest(".show-all-link,.show-less-link,.hidden-row")).map(W.untruncatedNodeText);return _("",s,ae)}const j=new CSSStyleSheet;j.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:host {
  font-family: var(--default-font-family);
  font-size: inherit;
  display: block;
}

.wrapper {
  background-color: var(--sys-color-cdt-base-container);
  border-radius: 16px;
  /* stylelint-disable-next-line property-no-unknown */
  container-type: inline-size;
  display: grid;
  animation: expand var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized) forwards;
}

:host-context(.closing) .wrapper {
  animation: collapse var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized) forwards;
}

@keyframes expand {
  from {
    grid-template-rows: 0fr;
  }

  to {
    grid-template-rows: 1fr;
  }
}

@keyframes collapse {
  from {
    grid-template-rows: 1fr;
  }

  to {
    grid-template-rows: 0fr;
    padding-top: 0;
    padding-bottom: 0;
  }
}

.animation-wrapper {
  overflow: hidden;
  padding: var(--sys-size-6) var(--sys-size-8);
}

.wrapper.top {
  border-radius: 16px 16px 4px 4px;
}

.wrapper.bottom {
  margin-top: 5px;
  border-radius: 4px 4px 16px 16px;
}

header {
  display: flex;
  flex-direction: row;
  gap: 6px;
  color: var(--sys-color-on-surface);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: var(--sys-size-6);
  align-items: center;
}

header:focus-visible {
  outline: none;
}

header > .filler {
  display: flex;
  flex-direction: row;
  gap: var(--sys-size-5);
  align-items: center;
  flex: 1;
}

.reminder-container {
  border-radius: var(--sys-size-5);
  background-color: var(--sys-color-surface4);
  padding: var(--sys-size-8);
  font-weight: var(--ref-typeface-weight-medium);

  h3 {
    font: inherit;
  }
}

.reminder-items {
  display: grid;
  grid-template-columns: var(--sys-size-8) auto;
  gap: var(--sys-size-5) var(--sys-size-6);
  margin-top: var(--sys-size-6);
  line-height: var(--sys-size-8);
  font-weight: var(--ref-typeface-weight-regular);
}

main {
  --override-markdown-view-message-color: var(--sys-color-on-surface);

  color: var(--sys-color-on-surface);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    padding-inline-start: 0.2em;

    li {
      display: list-item;
      list-style-type: disc;
      list-style-position: outside;
      margin-inline-start: 1em;
    }

    li::marker {
      font-size: 11px;
      line-height: 1;
    }
  }

  label {
    display: inline-flex;
    flex-direction: row;
    gap: 0.5em;

    input,
    span {
      vertical-align: middle;
    }

    input[type="checkbox"] {
      margin-top: 0.3em;
    }
  }
}

.opt-in-teaser {
  display: flex;
  gap: var(--sys-size-5);
}

devtools-markdown-view {
  margin-bottom: 12px;
}

footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--sys-color-on-surface);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 14px;
  gap: 32px;
}

/* stylelint-disable-next-line at-rule-no-unknown */
@container (max-width: 600px) {
  footer {
    gap: 8px;
  }
}

footer > .filler {
  flex: 1;
}

footer .rating {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

textarea {
  height: 84px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--sys-color-neutral-outline);
  width: 100%;
  font-family: var(--default-font-family);
  font-size: inherit;
}

.buttons {
  display: flex;
  gap: 5px;
}

@media (max-width: 500px) {
  .buttons {
    flex-wrap: wrap;
  }
}

main .buttons {
  margin-top: 12px;
}

.disclaimer {
  display: flex;
  gap: 2px;
  color: var(--sys-color-on-surface-subtle);
  font-size: 11px;
  align-items: flex-start;
  flex-direction: column;
}

.link {
  color: var(--sys-color-primary);
  text-decoration-line: underline;

  devtools-icon {
    color: var(--sys-color-primary);
    width: 14px;
    height: 14px;
  }
}

button.link {
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
}

.loader {
  background:
    linear-gradient(
      130deg,
      transparent 0%,
      var(--sys-color-gradient-tertiary) 20%,
      var(--sys-color-gradient-primary) 40%,
      transparent 60%,
      var(--sys-color-gradient-tertiary) 80%,
      var(--sys-color-gradient-primary) 100%
    );
  background-position: 0% 0%;
  background-size: 250% 250%;
  animation: gradient 5s infinite linear;
}

@keyframes gradient {
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}

summary {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

details {
  --collapsed-height: 20px;

  overflow: hidden;
  height: var(--collapsed-height);
  margin-top: 10px;
}

details[open] {
  height: calc(var(--list-height) + var(--collapsed-height) + /* margin */ 8px);
  transition: height var(--sys-motion-duration-short4) var(--sys-motion-easing-emphasized);
}

h2 {
  display: block;
  font-size: var(--sys-size-7);
  margin: 0;
  font-weight: var(--ref-typeface-weight-medium);
  line-height: var(--sys-size-9);
}

h2:focus-visible {
  outline: none;
}

.info {
  width: 20px;
  height: 20px;
}

.badge {
  background: linear-gradient(135deg, var(--sys-color-gradient-primary), var(--sys-color-gradient-tertiary));
  border-radius: var(--sys-size-3);
  height: var(--sys-size-9);

  devtools-icon {
    margin: var(--sys-size-2);
  }
}

.header-icon-container {
  background: linear-gradient(135deg, var(--sys-color-gradient-primary), var(--sys-color-gradient-tertiary));
  border-radius: var(--sys-size-4);
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button {
  align-self: flex-start;
}

/*# sourceURL=./components/consoleInsight.css */
`);const O=new CSSStyleSheet;O.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:host {
  display: block;
}

ul {
  color: var(--sys-color-primary);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
}

li {
  list-style-type: none;
}

ul .link {
  color: var(--sys-color-primary);
  display: inline-flex !important; /* stylelint-disable-line declaration-no-important */
  align-items: center;
  gap: 4px;
  text-decoration-line: underline;
}

devtools-icon {
  height: 16px;
  width: 16px;
}

devtools-icon[name="open-externally"] {
  color: var(--icon-link);
}

.source-disclaimer {
  color: var(--sys-color-on-surface-subtle);
}

/*# sourceURL=./components/consoleInsightSourcesList.css */
`);const a={consoleMessage:"Console message",stackTrace:"Stacktrace",networkRequest:"Network request",relatedCode:"Related code",generating:"Generating explanation…",insight:"Explanation",closeInsight:"Close explanation",inputData:"Data used to understand this message",goodResponse:"Good response",badResponse:"Bad response",report:"Report legal issue",error:"DevTools has encountered an error",errorBody:"Something went wrong. Try again.",opensInNewTab:"(opens in a new tab)",learnMore:"Learn more",notLoggedIn:"This feature is only available when you sign into Chrome with your Google account.",updateSettings:"Update Settings",offlineHeader:"DevTools can’t reach the internet",offline:"Check your internet connection and try again.",signInToUse:"Sign in to use this feature",search:"Use search instead",reloadRecommendation:"Reload the page to capture related network request data for this message in order to create a better insight.",turnOnInSettings:"Turn on {PH1} to receive AI assistance for understanding and addressing console warnings and errors.",settingsLink:"`Console insights` in Settings"},D=B("panels/explain/components/ConsoleInsight.ts",a),h=V.bind(void 0,D),{render:U,html:c,Directives:pe}=te;class A extends Event{static eventName="close";constructor(){super(A.eventName,{composed:!0,bubbles:!0})}}function z(i){switch(i){case p.MESSAGE:return h(a.consoleMessage);case p.STACKTRACE:return h(a.stackTrace);case p.NETWORK_REQUEST:return h(a.networkRequest);case p.RELATED_CODE:return h(a.relatedCode)}}const me="https://policies.google.com/terms",fe="https://policies.google.com/privacy",ve="https://support.google.com/legal/answer/13505487",N="https://goo.gle/devtools-console-messages-ai",ye="https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504",be="chrome://settings";class R extends HTMLElement{static async create(e,t){const n=await S.checkAccessPreconditions();return new R(e,t,n)}#t=this.attachShadow({mode:"open"});#i;#a;#r=new ne;#e;#s;#n;#l;#d;constructor(e,t,n){super(),this.#i=e,this.#a=t,this.#l=n,this.#n=this.#y(),this.#e=this.#h(),this.#d=this.#p.bind(this),this.#u(),this.addEventListener("keydown",s=>{s.stopPropagation()}),this.addEventListener("keyup",s=>{s.stopPropagation()}),this.addEventListener("keypress",s=>{s.stopPropagation()}),this.addEventListener("click",s=>{s.stopPropagation()}),this.focus()}#h(){switch(this.#l){case"available":{const e=y.instance().createSetting("console-insights-skip-reminder",!1,"Session").get();return{type:"loading",consentOnboardingCompleted:this.#g().get()||e}}case"no-account-email":return{type:"not-logged-in"};case"sync-is-paused":return{type:"sync-is-paused"};case"no-internet":return{type:"offline"}}}#y(){try{return F("console-insights-enabled")}catch{return}}#g(){return y.instance().createLocalSetting("console-insights-onboarding-finished",!1)}connectedCallback(){this.#t.adoptedStyleSheets=[j,P],this.classList.add("opening"),this.#n?.addChangeListener(this.#m,this);const e=y.instance().getHostConfig().aidaAvailability?.blockedByAge===!0;this.#e.type==="loading"&&this.#n?.getIfNotDisabled()===!0&&!e&&this.#e.consentOnboardingCompleted&&r.actionTaken(l.GeneratingInsightWithoutDisclaimer),L.instance().addEventListener("aidaAvailabilityChanged",this.#d),this.#p(),this.#e.type!=="insight"&&this.#e.type!=="error"&&(this.#e=this.#h()),this.#c()}disconnectedCallback(){this.#n?.removeChangeListener(this.#m,this),L.instance().removeEventListener("aidaAvailabilityChanged",this.#d)}async#p(){const e=await S.checkAccessPreconditions();e!==this.#l&&(this.#l=e,this.#e=this.#h(),this.#c())}#m(){this.#n?.getIfNotDisabled()===!0&&this.#g().set(!0),this.#e.type==="setting-is-not-true"&&this.#n?.getIfNotDisabled()===!0&&(this.#o({type:"loading",consentOnboardingCompleted:!0}),r.actionTaken(l.InsightsOptInTeaserConfirmedInSettings),this.#c()),this.#e.type==="consent-reminder"&&this.#n?.getIfNotDisabled()===!1&&(this.#o({type:"loading",consentOnboardingCompleted:!1}),r.actionTaken(l.InsightsReminderTeaserAbortedInSettings),this.#c())}#o(e){const t=this.#e;this.#e=e,this.#u(),e.type!==t.type&&this.#E()}async#c(){if(this.#e.type!=="loading")return;const e=y.instance().getHostConfig().aidaAvailability?.blockedByAge===!0;if(this.#n?.getIfNotDisabled()!==!0||e){this.#o({type:"setting-is-not-true"}),r.actionTaken(l.InsightsOptInTeaserShown);return}if(!this.#e.consentOnboardingCompleted){const{sources:t,isPageReloadRecommended:n}=await this.#i.buildPrompt();this.#o({type:"consent-reminder",sources:t,isPageReloadRecommended:n}),r.actionTaken(l.InsightsReminderTeaserShown);return}await this.#v()}#b(){this.#e.type==="consent-reminder"&&r.actionTaken(l.InsightsReminderTeaserCanceled),this.shadowRoot?.addEventListener("animationend",()=>{this.dispatchEvent(new A)},{once:!0}),this.classList.add("closing")}#f(e){if(this.#e.type!=="insight")throw new Error("Unexpected state");if(this.#e.metadata?.rpcGlobalId===void 0)throw new Error("RPC Id not in metadata");if(this.#s!==void 0)return;this.#s=e.target.dataset.rating==="true",this.#u(),this.#s?r.actionTaken(l.InsightRatedPositive):r.actionTaken(l.InsightRatedNegative);const t=y.instance().getHostConfig().aidaAvailability?.disallowLogging??!0;this.#a.registerClientEvent({corresponding_aida_rpc_global_id:this.#e.metadata.rpcGlobalId,disable_user_content_logging:t,do_conversation_client_event:{user_feedback:{sentiment:this.#s?"POSITIVE":"NEGATIVE"}}})}#k(){T.openInNewTab(ye)}#w(){const e=this.#i.getSearchQuery();T.openSearchResultsInNewTab(e)}async#x(){this.#g().set(!0),this.#o({type:"loading",consentOnboardingCompleted:!0}),r.actionTaken(l.InsightsReminderTeaserConfirmed),await this.#v()}async#v(){try{for await(const{sources:e,isPageReloadRecommended:t,explanation:n,metadata:s,completed:d}of this.#S()){const o=this.#C(n),g=o!==!1;this.#o({type:"insight",tokens:g?o:[],validMarkdown:g,explanation:n,sources:e,metadata:s,isPageReloadRecommended:t,completed:d})}r.actionTaken(l.InsightGenerated)}catch(e){r.actionTaken(l.InsightErrored),this.#o({type:"error",error:e.message})}}#C(e){try{const t=K(e);for(const n of t)this.#r.renderToken(n);return t}catch{return r.actionTaken(l.InsightErroredMarkdown),!1}}async*#S(){const{prompt:e,sources:t,isPageReloadRecommended:n}=await this.#i.buildPrompt();try{for await(const s of this.#a.fetch(S.buildConsoleInsightsRequest(e)))yield{sources:t,isPageReloadRecommended:n,...s}}catch(s){throw s.message==="Server responded: permission denied"?r.actionTaken(l.InsightErroredPermissionDenied):s.message.startsWith("Cannot send request:")?r.actionTaken(l.InsightErroredCannotSend):s.message.startsWith("Request failed:")?r.actionTaken(l.InsightErroredRequestFailed):s.message.startsWith("Cannot parse chunk:")?r.actionTaken(l.InsightErroredCannotParseChunk):s.message==="Unknown chunk result"?r.actionTaken(l.InsightErroredUnknownChunk):s.message.startsWith("Server responded:")?r.actionTaken(l.InsightErroredApi):r.actionTaken(l.InsightErroredOther),s}}#R(){const e=Q.instance().rootTarget();if(e===null)return;const t=be;e.targetAgent().invoke_createTarget({url:t}).then(n=>{n.getError()&&T.openInNewTab(t)})}#E(){this.addEventListener("animationend",()=>{this.#t.querySelector("header h2")?.focus()},{once:!0})}#T(){return c`<devtools-button
      @click=${this.#w}
      class="search-button"
      .data=${{variant:"outlined",jslogContext:"search"}}
    >
      ${h(a.search)}
    </devtools-button>`}#$(){return c`<x-link href=${N} class="link" jslog=${b("learn-more").track({click:!0})}>
      ${h(a.learnMore)}
    </x-link>`}#I(){const e=`${w(this.#e.type).track({resize:!0})}`;switch(this.#e.type){case"loading":return c`<main jslog=${e}>
            <div role="presentation" aria-label="Loading" class="loader" style="clip-path: url('#clipPath');">
              <svg width="100%" height="64">
                <clipPath id="clipPath">
                  <rect x="0" y="0" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="24" width="100%" height="16" rx="8"></rect>
                  <rect x="0" y="48" width="100%" height="16" rx="8"></rect>
                </clipPath>
              </svg>
            </div>
          </main>`;case"insight":return c`
        <main jslog=${e}>
          ${this.#e.validMarkdown?c`<devtools-markdown-view
              .data=${{tokens:this.#e.tokens,renderer:this.#r}}>
            </devtools-markdown-view>`:this.#e.explanation}
          <details style="--list-height: ${(this.#e.sources.length+(this.#e.isPageReloadRecommended?1:0))*20}px;" jslog=${Y("sources").track({click:!0})}>
            <summary>${h(a.inputData)}</summary>
            <devtools-console-insight-sources-list .sources=${this.#e.sources} .isPageReloadRecommended=${this.#e.isPageReloadRecommended}>
            </devtools-console-insight-sources-list>
          </details>
          <div class="buttons">
            ${this.#T()}
          </div>
        </main>`;case"error":return c`
        <main jslog=${e}>
          <div class="error">${h(a.errorBody)}</div>
        </main>`;case"consent-reminder":return c`
          <main class="reminder-container" jslog=${e}>
            <h3>Things to consider</h3>
            <div class="reminder-items">
              <div>
                <devtools-icon .data=${{iconName:"google",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
                </devtools-icon>
              </div>
              <div>The console message, associated stack trace, related source code, and the associated network headers are sent to Google to generate explanations. This data may be seen by human reviewers to improve this feature. Avoid sharing sensitive or personal information.</div>
              <div>
                <devtools-icon .data=${{iconName:"policy",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
                </devtools-icon>
              </div>
              <div>Use of this feature is subject to the
                <x-link
                  href=${me}
                  class="link"
                  jslog=${b("terms-of-service.console-insights").track({click:!0})}
                >Google Terms of Service</x-link>
                and
                <x-link
                  href=${fe}
                  class="link"
                  jslog=${b("privacy-policy.console-insights").track({click:!0})}
                >Google Privacy Policy</x-link>
              </div>
              <div>
                <devtools-icon .data=${{iconName:"warning",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
                </devtools-icon>
              </div>
              <div>
                <x-link
                  href=${ve}
                  class="link"
                  jslog=${b("code-snippets-explainer.console-insights").track({click:!0})}
                >Use generated code snippets with caution</x-link>
              </div>
            </div>
          </main>
        `;case"setting-is-not-true":{const t=document.createElement("button");return t.textContent=h(a.settingsLink),t.classList.add("link"),Z(t),t.addEventListener("click",()=>{r.actionTaken(l.InsightsOptInTeaserSettingsLinkClicked),$.instance().showView("chrome-ai")}),t.setAttribute("jslog",`${M("open-ai-settings").track({click:!0})}`),c`<main class="opt-in-teaser" jslog=${e}>
          <div class="badge">
            <devtools-icon .data=${{iconName:"lightbulb-spark",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
            </devtools-icon>
          </div>
          <div>
            ${X(D,a.turnOnInSettings,{PH1:t})}
            ${this.#$()}
          </div>
        </main>`}case"not-logged-in":case"sync-is-paused":return c`
          <main jslog=${e}>
            <div class="error">${h(a.notLoggedIn)}</div>
          </main>`;case"offline":return c`
          <main jslog=${e}>
            <div class="error">${h(a.offline)}</div>
          </main>`}}#A(){return c`<span>
      AI tools may generate inaccurate info that doesn't represent Google's views. Data sent to Google may be seen by human reviewers to improve this feature.
      <button class="link" role="link" @click=${()=>$.instance().showView("chrome-ai")}
        jslog=${M("open-ai-settings").track({click:!0})}
      >Open settings</button>
      or
      <x-link href=${N} class="link" jslog=${b("learn-more").track({click:!0})}>learn more</x-link>
    </span>`}#L(){const e=!(y.instance().getHostConfig().aidaAvailability?.disallowLogging??!0),t=this.#A();switch(this.#e.type){case"loading":case"setting-is-not-true":return k;case"error":case"offline":return c`<footer jslog=${w("footer")}>
          <div class="disclaimer">
            ${t}
          </div>
        </footer>`;case"not-logged-in":case"sync-is-paused":return c`<footer jslog=${w("footer")}>
        <div class="filler"></div>
        <div>
          <devtools-button
            @click=${this.#R}
            .data=${{variant:"primary",jslogContext:"update-settings"}}
          >
            ${a.updateSettings}
          </devtools-button>
        </div>
      </footer>`;case"consent-reminder":return c`<footer jslog=${w("footer")}>
          <div class="filler"></div>
          <div class="buttons">
            <devtools-button
              @click=${()=>{r.actionTaken(l.InsightsReminderTeaserSettingsLinkClicked),$.instance().showView("chrome-ai")}}
              .data=${{variant:"tonal",jslogContext:"settings",title:"Settings"}}
            >
              Settings
            </devtools-button>
            <devtools-button
              class='continue-button'
              @click=${this.#x}
              .data=${{variant:"primary",jslogContext:"continue",title:"continue"}}
              >
              Continue
            </devtools-button>
          </div>
        </footer>`;case"insight":return c`<footer jslog=${w("footer")}>
        <div class="disclaimer">
          ${t}
        </div>
        <div class="filler"></div>
        <div class="rating">
          ${e?c`
            <devtools-button
              data-rating=${"true"}
              .data=${{variant:"icon",size:"SMALL",iconName:"thumb-up",active:this.#s!==void 0&&this.#s,title:h(a.goodResponse),jslogContext:"thumbs-up"}}
              @click=${this.#f}
            ></devtools-button>
            <devtools-button
              data-rating=${"false"}
              .data=${{variant:"icon",size:"SMALL",iconName:"thumb-down",active:this.#s!==void 0&&!this.#s,title:h(a.badResponse),jslogContext:"thumbs-down"}}
              @click=${this.#f}
            ></devtools-button>
          `:k}
          <devtools-button
            .data=${{variant:"icon",size:"SMALL",iconName:"report",title:h(a.report),jslogContext:"report"}}
            @click=${this.#k}
          ></devtools-button>
        </div>

      </footer>`}}#M(){switch(this.#e.type){case"not-logged-in":case"sync-is-paused":return h(a.signInToUse);case"offline":return h(a.offlineHeader);case"loading":return h(a.generating);case"insight":return h(a.insight);case"error":return h(a.error);case"consent-reminder":return"Understand console messages with AI";case"setting-is-not-true":return""}}#z(){return this.#e.type==="insight"&&!this.#e.completed?c`<devtools-spinner></devtools-spinner>`:k}#N(){if(this.#e.type==="setting-is-not-true")return k;const e=this.#e.type==="consent-reminder";return c`
      <header>
        ${e?c`
          <div class="header-icon-container">
            <devtools-icon .data=${{iconName:"lightbulb-spark",width:"18px",height:"18px"}}>
            </devtools-icon>
          </div>`:k}
        <div class="filler">
          <h2 tabindex="-1">
            ${this.#M()}
          </h2>
          ${this.#z()}
        </div>
        <div class="close-button">
          <devtools-button
            .data=${{variant:"icon",size:"SMALL",iconName:"cross",title:h(a.closeInsight)}}
            jslog=${J().track({click:!0})}
            @click=${this.#b}
          ></devtools-button>
        </div>
      </header>
    `}#u(){U(c`
      <div class="wrapper" jslog=${ee("console-insights").track({resize:!0})}>
        <div class="animation-wrapper">
          ${this.#N()}
          ${this.#I()}
          ${this.#L()}
        </div>
      </div>
    `,this.#t,{host:this})}}class ke extends HTMLElement{#t=this.attachShadow({mode:"open"});#i=[];#a=!1;constructor(){super(),this.#t.adoptedStyleSheets=[O,P]}#r(){U(c`
      <ul>
        ${pe.repeat(this.#i,e=>e.value,e=>c`<li><x-link class="link" title="${z(e.type)} ${h(a.opensInNewTab)}" href="data:text/plain,${encodeURIComponent(e.value)}" jslog=${b("source-"+e.type).track({click:!0})}>
            <devtools-icon name="open-externally"></devtools-icon>
            ${z(e.type)}
          </x-link></li>`)}
        ${this.#a?c`<li class="source-disclaimer">
          <devtools-icon name="warning"></devtools-icon>
          ${h(a.reloadRecommendation)}</li>`:k}
      </ul>
    `,this.#t,{host:this})}set sources(e){this.#i=e,this.#r()}set isPageReloadRecommended(e){this.#a=e,this.#r()}}customElements.define("devtools-console-insight",R);customElements.define("devtools-console-insight-sources-list",ke);class Re{handleAction(e,t){switch(t){case"explain.console-message.context":case"explain.console-message.context.error":case"explain.console-message.context.warning":case"explain.console-message.context.other":case"explain.console-message.hover":{const n=e.flavor(se);if(n){t.startsWith("explain.console-message.context")?r.actionTaken(l.InsightRequestedViaContextMenu):t==="explain.console-message.hover"&&r.actionTaken(l.InsightRequestedViaHoverButton);const s=new le(n),d=new S;return R.create(s,d).then(o=>{n.setInsight(o)}),!0}return!1}}return!1}}export{Re as ActionDelegate,A as CloseEvent,R as ConsoleInsight,le as PromptBuilder,p as SourceType,ce as allowHeader,ge as formatConsoleMessage,he as formatNetworkRequest,de as formatRelatedCode,ue as formatStackTrace,x as lineWhitespace};
//# sourceMappingURL=explain-CXAl6S9a.js.map
