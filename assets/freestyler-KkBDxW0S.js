import{f6 as le,f7 as Be,f8 as Je,f9 as We,fa as Ge,fb as Ye,fc as xe,fd as ce,fe as Ve,ff as G,aj as b,eA as R,fg as Qe,d4 as Ce,fh as Xe,b0 as M,bO as Ie,aO as ie,bj as p,aP as re,b as Ae,g as $e,d9 as Ke,fi as de,bn as D,bG as $,bY as Ze,dX as et,fj as q,da as tt,V as P,bM as st,bQ as ue,b2 as nt,cH as m,dR as O,dw as Ne,aR as oe,ar as _,dP as he,fk as it,fl as Y,i as rt,aS as ot,fm as at,u as I,bd as lt,aJ as ct,d7 as dt,d6 as V,fn as Q,fo as X,d8 as pe,fp as ut,r as ge,A as N,cR as K,bA as fe,bN as Z,bD as ht,ds as pt,fq as gt}from"./inspector-CyOA7R9n.js";import{N as ft,R as mt}from"./network-BQDRpQID.js";import"./linear_memory_inspector-Cc8YvoCp.js";import"./Spinner-1sNtsCwz.js";import{M as yt}from"./MarkdownView-IOiMoU4I.js";import{P as ee}from"./utils-C4_HKhgT.js";import"./PreviewFactory-7rWtg079.js";import"./DropTarget-DDkHhLsd.js";import"./ScriptFormatter-CdcZyJ9a.js";import"./mobile_throttling-CIMam4T2.js";import"./UserAgentClientHintsForm-CYAYtRuO.js";import"./FloatingButton-ChdjBnjy.js";import"./Debouncer-BW_30p93.js";import"./swatchPopover.css-CdLS3b97.js";import"./cssOverview.css-C_I9lWrq.js";import"./PanelIntroductionSteps-BeLT2-qM.js";import"./PreviewToggle-D6BBIbZ3.js";import"./BezierUI-Cu0bTMGR.js";import"./timelineOverviewInfo.css-BT4HnMd6.js";import"./directives-BpSiwtWR.js";import"./WatchExpressionsSidebarPane-ByQ6h9QR.js";import"./PopoverHelper-fEnxzApM.js";import"./coverage-nL5Jv5gw.js";import"./components-nB6c8Px-.js";import"./DataGridController-DdQqp2ti.js";import"./TimelineOverviewPane-DjPkTYph.js";import"./ModelImpl-DjdwMiMr.js";import"./inspectorCommon.css-gVYvLA0h.js";var h;(function(r){r.CONTEXT="context",r.TITLE="title",r.THOUGHT="thought",r.ACTION="action",r.SIDE_EFFECT="side-effect",r.ANSWER="answer",r.ERROR="error",r.QUERYING="querying"})(h||(h={}));const me=10;class A{static validTemperature(e){return typeof e=="number"&&e>=0?e:void 0}#n=crypto.randomUUID();#i;#s;#e=new Map;constructor(e){this.#i=e.aidaClient,this.#s=e.serverSideLoggingEnabled??!1}get historyEntry(){return[...this.#e.values()].flat()}get chatHistoryForTesting(){return this.historyEntry}set chatHistoryForTesting(e){this.#e=e}removeHistoryRun(e){this.#e.delete(e)}addToHistory(e){const t=e.response;if("answer"in t){this.#r({id:e.id,query:e.query,output:t.answer});return}const{title:s,thought:n,action:i}=t;n?this.#r({id:e.id,query:e.query,output:`THOUGHT: ${n}
TITLE: ${s}
ACTION
${i}
STOP`}):this.#r({id:e.id,query:e.query,output:`ACTION
${i}
STOP`})}#r({id:e,query:t,output:s}){const n=this.#e.get(e)??[];this.#e.set(e,[...n,{text:t,entity:le.USER},{text:s,entity:le.SYSTEM}])}#o=[];async aidaFetch(e,t){const s=this.buildRequest({input:e});let n,i="",o;for await(n of this.#i.fetch(s,t))if(i=n.explanation,o=n.metadata.rpcGlobalId??o,n.metadata.attributionMetadata?.some(l=>l.attributionAction===Be.BLOCK))throw new Error("Attribution action does not allow providing the response");return B({request:s,response:n}),this.#o.push({request:structuredClone(s),response:i,rawResponse:n}),localStorage.setItem("freestylerStructuredLog",JSON.stringify(this.#o)),{response:i,rpcId:o}}buildRequest(e){return{input:e.input,preamble:this.preamble,chat_history:this.#e.size?this.historyEntry:void 0,client:Je,options:this.options,metadata:{disable_user_content_logging:!(this.#s??!1),string_session_id:this.#n,user_tier:We(this.userTier)},functionality_type:Ge.CHAT,client_feature:this.clientFeature}}handleAction(e,t){throw new Error("Unexpected action found")}async enhanceQuery(e){return e}parseResponse(e){return{answer:e}}#c=0;async*run(e,t){yield*this.handleContextDetails(t.selected),e=await this.enhanceQuery(e,t.selected);const s=++this.#c;for(let n=0;n<me;n++){yield{type:h.QUERYING};let i,o;try{const w=await this.aidaFetch(e,{signal:t.signal});i=w.response,o=w.rpcId}catch(w){if(B("Error calling the AIDA API",w),w instanceof Ye){this.removeHistoryRun(s),yield{type:h.ERROR,error:"abort",rpcId:o};break}yield{type:h.ERROR,error:"unknown",rpcId:o};break}const l=this.parseResponse(i);if(this.addToHistory({id:s,query:e,response:l}),"answer"in l){const{answer:w,suggestions:f}=l;w?yield{type:h.ANSWER,text:w,rpcId:o,suggestions:f}:(this.removeHistoryRun(s),yield{type:h.ERROR,error:"unknown",rpcId:o});break}const{title:c,thought:y,action:T}=l;if(c&&(yield{type:h.TITLE,title:c,rpcId:o}),y&&(yield{type:h.THOUGHT,thought:y,rpcId:o}),T){const w=yield*this.handleAction(T,o);yield w,e=`OBSERVATION: ${w.output}`}if(n===me-1){yield{type:h.ERROR,error:"max-steps"};break}}ae()&&window.dispatchEvent(new CustomEvent("freestylerdone"))}}function ae(){return!!localStorage.getItem("debugFreestylerEnabled")}function B(...r){ae()&&console.log(...r)}function vt(r){r?localStorage.setItem("debugFreestylerEnabled","true"):localStorage.removeItem("debugFreestylerEnabled")}globalThis.setDebugFreestylerEnabled=vt;const ye="ai-style-change";class Re{#n=new xe;#i=new Map;#s=new Map;async#e(e,t){return await this.#n.run(async()=>{let s=this.#i.get(e);s||(s=new Map,this.#i.set(e,s),e.addEventListener(ce.ModelDisposed,this.#r,this));let n=s.get(t);if(!n){const i=await e.createInspectorStylesheet(t);if(!i)throw new Error("inspector-stylesheet is not found");n=i.id}return n})}async#r(e){return await this.#n.run(async()=>{const t=e.data;t.removeEventListener(ce.ModelDisposed,this.#r,this);const s=Array.from(this.#i.get(t)?.values()??[]),n=await Promise.allSettled(s.map(async o=>{this.#s.delete(o),await t.setStyleSheetText(o,"",!0)}));this.#i.delete(t);const i=n.find(o=>o.status==="rejected");if(i)throw new Error(i.reason)})}async clear(){const e=Array.from(this.#i.keys()),t=await Promise.allSettled(e.map(async n=>{await this.#r({data:n})}));this.#i.clear(),this.#s.clear();const s=t.find(n=>n.status==="rejected");if(s)throw new Error(s.reason)}async addChange(e,t,s){const n=await this.#e(e,t),i=this.#s.get(n)||[],o=i.find(l=>l.className===s.className);o?Object.assign(o.styles,s.styles):i.push(s),await e.setStyleSheetText(n,this.buildChanges(i),!0),this.#s.set(n,i)}buildChanges(e){function t(s){const n=Ve(s);return Object.entries(n).map(([o,l])=>`${o}: ${l};`).join(`
`)}return e.map(s=>`.${s.className} {
  ${s.selector}& {
    ${t(s.styles)}
  }
}`).join(`
`)}}const bt=`You are a highly skilled software engineer with expertise in various programming languages and frameworks.
You are provided with the content of a file from the Chrome DevTools Sources panel.

**Important Note:** The provided code may represent an incomplete fragment of a larger file.

Analyze the code and provide the following information:
* Describe the primary functionality of the code. What does it do? Be specific and concise.
* If possible, identify the framework or library the code is associated with (e.g., React, Angular, jQuery). List any key technologies, APIs, or patterns used in the code (e.g., Fetch API, WebSockets, object-oriented programming).
* (Only provide if available and accessible externally) External Resources: Suggest relevant documentation that could help a developer understand the code better. Prioritize official documentation if available. Do not provide any internal resources.

# Considerations
* Keep your analysis concise and focused, highlighting only the most critical aspects for a software engineer.
* **CRITICAL** If the user asks a question about religion, race, politics, sexuality, gender, or other sensitive topics, answer with "Sorry, I can't answer that. I'm best at questions about files."

## Example session

**User:** (Selects a file containing the following JavaScript code)

function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}
Explain this file.


This code defines a function called calculateTotal that calculates the total cost by multiplying the price and quantity arguments.
This code is written in JavaScript and doesn't seem to be associated with a specific framework. It's likely a utility function.
Relevant Technologies: JavaScript, functions, arithmetic operations.
External Resources:
MDN Web Docs: JavaScript Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
`,wt={analyzingFile:"Analyzing file"},kt=R,St=5e4;class Tt extends A{preamble=bt;clientFeature=G.CHROME_DRJONES_FILE_AGENT;get userTier(){return b.instance().getHostConfig().devToolsAiAssistanceFileAgentDogfood?.userTier}get options(){const e=b.instance().getHostConfig(),t=A.validTemperature(e.devToolsAiAssistanceFileAgentDogfood?.temperature),s=e.devToolsAiAssistanceFileAgentDogfood?.modelId;return{temperature:t,model_id:s}}async*handleContextDetails(e){e&&(yield{type:h.CONTEXT,title:kt(wt.analyzingFile),details:Et(e)})}async enhanceQuery(e,t){return`${t?`# Selected file
${Fe(t)}

# User request

`:""}${e}`}parseResponse(e){return{answer:e}}}function Et(r){return[{title:"Selected file",text:Fe(r)}]}function Fe(r){return`File Name: ${r.displayName()}
URL: ${r.url()}
File Content:
${r.content().slice(0,St)}`}function xt(r){r?localStorage.setItem("debugFreestylerEnabled","true"):localStorage.removeItem("debugFreestylerEnabled")}globalThis.setDebugFreestylerEnabled=xt;const Ct=`You are the most advanced network request debugging assistant integrated into Chrome DevTools.
The user selected a network request in the browser's DevTools Network Panel and sends a query to understand the request.
Provide a comprehensive analysis of the network request, focusing on areas crucial for a software engineer. Your analysis should include:
* Briefly explain the purpose of the request based on the URL, method, and any relevant headers or payload.
* Analyze timing information to identify potential bottlenecks or areas for optimization.
* Highlight potential issues indicated by the status code.

# Considerations
* If the response payload or request payload contains sensitive data, redact or generalize it in your analysis to ensure privacy.
* Tailor your explanations and suggestions to the specific context of the request and the technologies involved (if discernible from the provided details).
* Keep your analysis concise and focused, highlighting only the most critical aspects for a software engineer.
* **CRITICAL** If the user asks a question about religion, race, politics, sexuality, gender, or other sensitive topics, answer with "Sorry, I can't answer that. I'm best at questions about network requests."

## Example session

Explain this network request
Request: https://api.example.com/products/search?q=laptop&category=electronics
Response Headers:
    Content-Type: application/json
    Cache-Control: max-age=300
...
Request Headers:
    User-Agent: Mozilla/5.0
...
Request Status: 200 OK


This request aims to retrieve a list of products matching the search query "laptop" within the "electronics" category. The successful 200 OK status confirms that the server fulfilled the request and returned the relevant data.
`,It=1e3,E={inspectingNetworkData:"Inspecting network data",request:"Request",response:"Response",requestUrl:"Request URL",requestHeaders:"Request Headers",timing:"Timing",responseHeaders:"Response Headers",responseStatus:"Response Status",requestInitiatorChain:"Request Initiator Chain"},x=R;class At extends A{preamble=Ct;clientFeature=G.CHROME_DRJONES_NETWORK_AGENT;get userTier(){return b.instance().getHostConfig().devToolsExplainThisResourceDogfood?.userTier}get options(){const e=b.instance().getHostConfig(),t=A.validTemperature(e.devToolsExplainThisResourceDogfood?.temperature),s=e.devToolsExplainThisResourceDogfood?.modelId;return{temperature:t,model_id:s}}async*handleContextDetails(e){e&&(yield{type:h.CONTEXT,title:x(E.inspectingNetworkData),details:Ft(e)})}async enhanceQuery(e,t){return`${t?`# Selected network request 
${Rt(t)}

# User request

`:""}${e}`}parseResponse(e){return{answer:e}}}function $t(r,e,t){let s="";for(const n of e){if(s.length+n.length>t)break;s+=n}return s=s.trim(),s&&r?r+`
`+s:s}function Nt(r){const e=r.name.toLowerCase().trim();return!(e.startsWith("x-")||e==="cookie"||e==="set-cookie"||e==="authorization")}function J(r,e){return $t(r,e.filter(Nt).map(t=>t.name+": "+t.value+`
`),It)}function Le(r){const e=ft.instance().networkLogView.timeCalculator(),t=mt.calculateRequestTimeRanges(r,e.minimumBoundary());function s(i){const o=t.find(l=>l.name===i);if(o)return Qe(o.end-o.start,!0)}return[{label:"Queued at (timestamp)",value:e.formatValue(r.issueTime(),2)},{label:"Started at (timestamp)",value:e.formatValue(r.startTime,2)},{label:"Queueing (duration)",value:s("queueing")},{label:"Connection start (stalled) (duration)",value:s("blocking")},{label:"Request sent (duration)",value:s("sending")},{label:"Waiting for server response (duration)",value:s("waiting")},{label:"Content download (duration)",value:s("receiving")},{label:"Duration (duration)",value:s("total")}].filter(i=>!!i.value).map(i=>`${i.label}: ${i.value}`).join(`
`)}function De(r,e,t){return Ce.instance().initiatorGraphForRequest(r).initiated.forEach((n,i)=>{r===n&&(e=e+t+i.url()+`
`,e=De(i,e,"	"+t))}),e}function ze(r){let e="",t="- URL: ";const s=Ce.instance().initiatorGraphForRequest(r).initiators;for(const n of Array.from(s).reverse())if(e=e+t+n.url()+`
`,t="	"+t,n===r){e=De(n,e,t);break}return e.trim()}function Rt(r){return`Request: ${r.url()}

${J("Request headers:",r.requestHeaders())}

${J("Response headers:",r.responseHeaders)}

Response status: ${r.statusCode} ${r.statusText}

Request Timing:
${Le(r)}

Request Initiator Chain:
${ze(r)}`}function Ft(r){const e={title:x(E.request),text:x(E.requestUrl)+": "+r.url()+`

`+J(x(E.requestHeaders),r.requestHeaders())},t={title:x(E.response),text:x(E.responseStatus)+": "+r.statusCode+" "+r.statusText+`

`+J(x(E.responseHeaders),r.responseHeaders)},s={title:x(E.timing),text:Le(r)},n={title:x(E.requestInitiatorChain),text:ze(r)};return[e,t,s,n]}const Lt=`You are a performance expert deeply integrated with Chrome DevTools.
You specialize in analyzing web application behavior captured by Chrome DevTools Performance Panel.
You will be provided with a string containing the JSON.stringify representation of a tree of events captured in a Chrome DevTools performance recording.
This tree originates from the root task of a specific event that was selected by a user in the Performance panel's flame graph.
Each node in this tree represents an event and contains the following information:
* id: A unique identifier for the event.
* url:  The URL of the JavaScript file where the event originated (if applicable).
* line: The line number in the JavaScript file where the event originated (if applicable).
* column: The column number in the JavaScript file where the event originated (if applicable).
* function: The name of the function associated with this event.
* start: The start time of the event in milliseconds.
* totalTime: The total duration of the event, including the time spent in its children, in milliseconds.
* selfTime:  The duration of the event itself, excluding the time spent in its children, in milliseconds.
* selected: A boolean value indicating whether this is the event the user selected in the Performance panel.
* children: An array of child events, each represented as another node with the same structure.

Your task is to analyze this event and its surrounding context within the performance recording. Your analysis may include:
* Clearly state the name and purpose of the selected event based on its properties (e.g., function name, URL, line number). Explain what the task is broadly doing. You can also mention the function
* Describe its execution context:
  * Ancestors: Trace back through the tree to identify the chain of parent events that led to the execution of the selected event. Describe this execution path.
  * Descendants:  Analyze the children of the selected event. What tasks did it initiate? Did it spawn any long-running or resource-intensive sub-tasks?
* Quantify performance:
    * Duration
    * Relative Cost:  How much did this event contribute to the overall duration of its parent tasks and the entire recorded trace?
    * Potential Bottlenecks: Analyze the totalTime and selfTime of the selected event and its children to identify any potential performance bottlenecks. Are there any excessively long tasks or periods of idle time?
4. (Only provide if you have specific suggestions) Based on your analysis, provide specific and actionable suggestions for improving the performance of the selected event and its related tasks.  Are there any resources being acquired or held for longer than necessary?

# Considerations
* Keep your analysis concise and focused, highlighting only the most critical aspects for a software engineer.
* Do not mention id of the event in your response.
* **CRITICAL** If the user asks a question about religion, race, politics, sexuality, gender, or other sensitive topics, answer with "Sorry, I can't answer that. I'm best at questions about performance of websites."

## Example session

Selected call tree
'{"id":"1","function":"main","start":0,"totalTime":500,"selfTime":100,"children":[{"id":"2","function":"update","start":100,"totalTime":200,"selfTime":50,"children":[{"id":"3","function":"animate","url":"[invalid URL removed]","line":120,"column":10,"start":150,"totalTime":150,"selfTime":20,"selected":true,"children":[{"id":"4","function":"calculatePosition","start":160,"totalTime":80,"selfTime":80,"children":[]},{"id":"5","function":"applyStyles","start":240,"totalTime":50,"selfTime":50,"children":[]}]}]}]}'
Explain the selected task.


It looks like you've selected the animate function, which is responsible for animating elements on the page.
This function took a total of 150ms to execute, but only 20ms of that time was spent within the animate function itself.
The remaining 130ms were spent in its child functions, calculatePosition and applyStyles.
It seems like a significant portion of the animation time is spent calculating the position of the elements.
Perhaps there's room for optimization there. You could investigate whether the calculatePosition function can be made more efficient or if the number of calculations can be reduced.
`,Dt={analyzingStackTrace:"Analyzing stack trace"},zt=R;class Ot extends A{preamble=Lt;clientFeature=G.CHROME_DRJONES_PERFORMANCE_AGENT;get userTier(){return b.instance().getHostConfig().devToolsAiAssistancePerformanceAgentDogfood?.userTier}get options(){const e=b.instance().getHostConfig(),t=A.validTemperature(e.devToolsAiAssistancePerformanceAgentDogfood?.temperature),s=e.devToolsAiAssistancePerformanceAgentDogfood?.modelId;return{temperature:t,model_id:s}}async*handleContextDetails(e){yield{type:h.CONTEXT,title:zt(Dt.analyzingStackTrace),details:Pt(e)}}async enhanceQuery(e,t){return`${t?`# Selected stack trace
${JSON.stringify(t)}

# User request

`:""}${e}`}parseResponse(e){return{answer:e}}}function Pt(r){return[{title:"Selected stack trace",text:JSON.stringify(r).trim()}]}function Ut(r){r?localStorage.setItem("debugFreestylerEnabled","true"):localStorage.removeItem("debugFreestylerEnabled")}globalThis.setDebugFreestylerEnabled=Ut;const Oe=new CSSStyleSheet;Oe.replaceSync(`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
}

.rate-buttons {
  display: flex;
  align-items: center;
  gap: var(--sys-size-2);
}

.feedback-form {
  display: flex;
  flex-direction: column;
  gap: var(--sys-size-5);
  margin-top: var(--sys-size-4);
  background-color: var(--sys-color-surface3);
  padding: var(--sys-size-6);
  border-radius: var(--sys-shape-corner-medium-small);

  .feedback-input {
    height: var(--sys-size-11);
    padding: 0 var(--sys-size-5);
    background-color: var(--sys-color-surface3);
  }

  .feedback-input::placeholder {
    color: var(--sys-color-on-surface-subtle);
    font: var(--sys-typescale-body4-regular);
  }
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.feedback-title {
  margin: 0;
  font: var(--sys-typescale-body3-medium);
}

.feedback-disclaimer {
  padding: 0 var(--sys-size-4);
}

.vertical-separator {
  height: 16px;
  width: 1px;
  vertical-align: top;
  margin: 0 var(--sys-size-2);
  background: var(--sys-color-divider);
  display: inline-block;
}

/*# sourceURL=./components/provideFeedback.css */
`);const{html:te}=re,k={thumbsUp:"Good response",thumbsDown:"Bad response",provideFeedbackPlaceholder:"Provide additional feedback",disclaimer:"Submitted feedback will also include your conversation",submit:"Submit",whyThisRating:"Why did you choose this rating? (optional)",close:"Close",report:"Report legal issue"},S=R,qt="https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504";class Ht extends HTMLElement{#n=this.attachShadow({mode:"open"});#i;#s=!1;#e;constructor(e){super(),this.#i=e}set props(e){this.#i=e,this.#l()}connectedCallback(){this.#n.adoptedStyleSheets=[Oe,Xe],this.#l()}#r(e){this.#e!==e&&(this.#e=e,this.#s=this.#i.canShowFeedbackForm,this.#i.onFeedbackSubmit(this.#e),this.#l())}#o=()=>{this.#s=!1,this.#l()};#c=e=>{e.preventDefault();const t=this.#n.querySelector(".feedback-input");!this.#e||!t||!t.value||(this.#i.onFeedbackSubmit(this.#e,t.value),this.#s=!1,this.#l())};#t=()=>{M.openInNewTab(qt)};#a(){return te`
      <devtools-button
        .data=${{variant:"icon",size:"SMALL",iconName:"thumb-up",toggledIconName:"thumb-up-filled",toggled:this.#e==="POSITIVE",toggleType:"primary-toggle",title:S(k.thumbsUp),jslogContext:"thumbs-up"}}
        @click=${()=>this.#r("POSITIVE")}
      ></devtools-button>
      <devtools-button
        .data=${{variant:"icon",size:"SMALL",iconName:"thumb-down",toggledIconName:"thumb-down-filled",toggled:this.#e==="NEGATIVE",toggleType:"primary-toggle",title:S(k.thumbsDown),jslogContext:"thumbs-down"}}
        @click=${()=>this.#r("NEGATIVE")}
      ></devtools-button>
      <div class="vertical-separator"></div>
      <devtools-button
        .data=${{variant:"icon",size:"SMALL",title:S(k.report),iconName:"report",jslogContext:"report"}}
        @click=${this.#t}
      ></devtools-button>
    `}#d(){return te`
      <form class="feedback-form" @submit=${this.#c}>
        <div class="feedback-header">
          <h4 class="feedback-title">${S(k.whyThisRating)}</h4>
          <devtools-button
            aria-label=${S(k.close)}
            @click=${this.#o}
            .data=${{variant:"icon",iconName:"cross",size:"SMALL",title:S(k.close),jslogContext:"close"}}
          ></devtools-button>
        </div>
        <input
          type="text"
          class="devtools-text-input feedback-input"
          placeholder=${S(k.provideFeedbackPlaceholder)}
          jslog=${Ie("feedback").track({keydown:"Enter"})}
        >
        <span class="feedback-disclaimer">${S(k.disclaimer)}</span>
        <devtools-button
        aria-label=${S(k.submit)}
        .data=${{type:"submit",variant:"outlined",size:"SMALL",title:S(k.submit),jslogContext:"send"}}
        >${S(k.submit)}</devtools-button>
      </div>
    </form>
    `}#l(){ie(te`
        <div class="feedback">
          <div class="rate-buttons">
            ${this.#a()}
          </div>
          ${this.#s?this.#d():p}
        </div>`,this.#n,{host:this})}}customElements.define("devtools-provide-feedback",Ht);const Pe=new CSSStyleSheet;Pe.replaceSync(`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:host {
  width: 100%;
  height: 100%;
  user-select: text;
  display: flex;
  flex-direction: column;
  background-color: var(--sys-color-cdt-base-container);
}

.chat-ui {
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

.input-form {
  display: flex;
  flex-direction: column;
  padding: var(--sys-size-8) var(--sys-size-5) 0 var(--sys-size-5);
  max-width: var(--sys-size-36);
  width: 100%;
}

.chat-input-container {
  margin: var(--sys-size-4) 0;
  width: 100%;
  display: flex;
  position: relative;
}

.chat-input {
  --right-padding:
    calc(
      var(--sys-size-3) + 26px
    ); /* Gap between the button and the edge + icon's width */

  scrollbar-width: none;
  field-sizing: content; /* stylelint-disable-line property-no-unknown */
  resize: none;
  width: 100%;
  max-height: 84px; /* 4 rows */
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: var(--sys-shape-corner-small);
  font: var(--sys-typescale-body4-regular);
  line-height: 18px;
  min-height: var(--sys-size-11);
  padding:
    var(--sys-size-4) var(--right-padding) var(--sys-size-4)
    var(--sys-size-4);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);

  &::placeholder {
    opacity: 60%;
  }

  &:focus-visible {
    outline: 1px solid var(--sys-color-primary);
    border-color: var(--sys-color-primary);
  }

  &:disabled {
    color: var(--sys-color-state-disabled);
    background-color: var(--sys-color-state-disabled-container);
    border-color: transparent;
  }
}

.chat-input-button {
  position: absolute;
  right: 0;
  bottom: 0;
  padding-bottom: 3px;
  padding-right: var(--sys-size-3);
}

.disclaimer {
  display: flex;
  justify-content: center;
  border-top: var(--sys-size-1) solid var(--sys-color-divider);

  .disclaimer-text {
    max-width: var(--sys-size-36);
    color: var(--sys-color-on-surface-subtle);
    font: var(--sys-typescale-body5-regular);
    text-wrap: pretty;
    padding: var(--sys-size-2) var(--sys-size-5);
  }
}

.messages-scroll-container {
  overflow: auto;
  flex-grow: 1;
  scrollbar-gutter: stable both-edges;
  scrollbar-width: thin;
  width: 100%;
}

.messages-container {
  margin: 0 auto;
  max-width: var(--sys-size-36);
}

.chat-message {
  user-select: text;
  cursor: initial;
  display: flex;
  flex-direction: column;
  gap: var(--sys-size-5);
  width: 100%;
  padding: var(--sys-size-7) var(--sys-size-5);
  font-size: 12px;
  word-break: break-word;
  border-bottom: var(--sys-size-1) solid var(--sys-color-divider);

  &:last-child {
    border-bottom: 0;
  }

  .message-info {
    display: flex;
    align-items: center;
    height: var(--sys-size-11);
    gap: var(--sys-size-4);
    font: var(--sys-typescale-body4-bold);

    img {
      border: 0;
      border-radius: var(--sys-shape-corner-full);
      display: block;
      height: var(--sys-size-9);
      width: var(--sys-size-9);
    }

    h2 {
      font: var(--sys-typescale-body4-bold);
    }
  }

  .actions {
    display: flex;
    gap: var(--sys-size-8);
    justify-content: space-between;
    align-items: flex-end;
  }

  /*
    Scroll driven animation below is used for generating shadows
    when the \\'.suggestions\\' area is scrollable.
  */
  .suggestions {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
    scrollbar-width: none;
    gap: var(--sys-size-3);
    scroll-timeline: --scroll-timeline x; /* stylelint-disable-line property-no-unknown */
    animation: detect-scroll;
    animation-timeline: --scroll-timeline; /* stylelint-disable-line property-no-unknown */
    animation-fill-mode: none;
    position: relative;
  }

  .suggestions::before,
  .suggestions::after {
    content: "";
    display: block;
    position: sticky;
    min-width: var(--sys-size-3);
    height: var(--sys-size-11);
    left: 0;
    right: 0;
    z-index: 999;
    animation-name: reveal;
    animation-timeline: --scroll-timeline; /* stylelint-disable-line property-no-unknown */
    animation-fill-mode: both;
  }

  .suggestions::before {
    top: 0;
    visibility: var(--visibility-if-can-scroll, hidden);
    animation-range: var(--sys-size-6) var(--sys-size-11); /* stylelint-disable-line property-no-unknown */
    background:
      radial-gradient(
        farthest-side at 0 50%,
        var(--app-color-scroll-area-shadow-start),
        transparent
      );
  }

  .suggestions::after {
    bottom: 0;
    visibility: var(--visibility-if-can-scroll, hidden);
    animation-direction: reverse;
    /* stylelint-disable-next-line property-no-unknown */
    animation-range:
      calc(100% - var(--sys-size-11))
      calc(100% - var(--sys-size-6));
    background:
      radial-gradient(
        farthest-side at 100% 50%,
        var(--app-color-scroll-area-shadow-start),
        transparent
      );
  }

  .aborted {
    color: var(--sys-color-on-surface-subtle);
  }
}

.select-element {
  display: flex;
  gap: var(--sys-size-3);
  align-items: center;
  width: 100%;

  .resource-link {
    cursor: pointer;
  }

  .resource-link,
  .resource-task {
    padding: var(--sys-size-2) var(--sys-size-4);
    font: var(--sys-typescale-body4-size);
    border: var(--sys-size-1) solid var(--sys-color-divider);
    border-radius: var(--sys-shape-corner-extra-small);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: var(--sys-size-32);

    .icon,
    devtools-file-source-icon {
      display: inline-flex;
      vertical-align: top;
      margin-right: var(--sys-size-3);
      width: var(--sys-size-9);
      height: var(--sys-size-9);
    }

    /*
      CSS styling for \\'network-override-marker\\' is similar to
      https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/panels/network/networkLogView.css;l=379.
      There is a difference in \\'left\\' and \\'top\\' values to make sure
      it is placed correctly for the network icon in assistance panel.
    */
    .network-override-marker {
      position: relative;
      float: left;
    }

    .network-override-marker::before {
      content: var(--image-file-empty);
      width: var(--sys-size-4);
      height: var(--sys-size-4);
      border-radius: 50%;
      outline: var(--sys-size-1) solid var(--icon-gap-focus-selected);
      left: 11px;
      position: absolute;
      top: 13px;
      z-index: 1;
      background-color: var(--sys-color-purple-bright);
    }

    .image.icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: var(--sys-size-3);

      img {
        max-width: var(--sys-size-8);
        max-height: var(--sys-size-8);
      }
    }
  }

  .resource-link.not-selected,
  .resource-task.not-selected {
    color: var(--sys-color-state-disabled);
    border-color: var(--sys-color-neutral-outline);
  }
}

.no-agent-message {
  user-select: text;
  cursor: initial;
  display: flex;
  flex-direction: column;
  gap: var(--sys-size-5);
  width: 100%;
  padding: var(--sys-size-7) var(--sys-size-5);
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    height: var(--sys-size-11);
    gap: var(--sys-size-4);

    h2 {
      font: var(--sys-typescale-body4-bold);
    }
  }

  .instructions {
    display: flex;
    flex-direction: column;
    gap: var(--sys-size-6);
    line-height: 18px;
  }
}

.indicator {
  color: var(--sys-color-green-bright);
}

.summary {
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: var(--sys-size-3);
  line-height: var(--sys-size-9);
  cursor: default;
  gap: var(--sys-size-3);
  justify-content: center;
  align-items: center;

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font: var(--sys-typescale-body4-regular);

    .paused {
      font: var(--sys-typescale-body4-bold);
    }
  }
}

.step-code {
  display: flex;
  flex-direction: column;
  gap: var(--sys-size-2);
}

.js-code-output {
  devtools-code-block {
    --code-block-max-code-height: 50px;
  }
}

.context-details {
  devtools-code-block {
    --code-block-max-code-height: 80px;
  }
}

.step {
  width: fit-content;
  background-color: var(--sys-color-surface3);
  border-radius: var(--sys-size-6);
  position: relative;

  &.empty {
    pointer-events: none;

    .arrow {
      display: none;
    }
  }

  &:not(&[open]):hover::after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: var(--sys-color-state-hover-on-subtle);
  }

  &.paused {
    .indicator {
      color: var(--sys-color-on-surface-subtle);
    }
  }

  &.canceled {
    .summary {
      color: var(--sys-color-state-disabled);
      text-decoration: line-through;
    }

    .indicator {
      color: var(--sys-color-state-disabled);
    }
  }

  devtools-markdown-view {
    --code-background-color: var(--sys-color-surface1);
  }

  devtools-icon {
    vertical-align: bottom;
  }

  devtools-spinner {
    width: var(--sys-size-9);
    height: var(--sys-size-9);
    padding: var(--sys-size-2);
  }

  &[open] {
    width: auto;

    .summary .title {
      white-space: normal;
      overflow: unset;
    }

    .summary .arrow {
      transform: rotate(180deg);
    }
  }

  summary::marker {
    content: "";
  }

  .step-details {
    padding: 0 var(--sys-size-5) var(--sys-size-4) var(--sys-size-12);
    display: flex;
    flex-direction: column;
    gap: var(--sys-size-6);

    devtools-code-block {
      --code-block-background-color: var(--sys-color-surface1);
    }
  }
}

.input-header {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  line-height: 20px;
  gap: var(--sys-size-8);

  & .feedback-icon {
    width: var(--sys-size-8);
    height: var(--sys-size-8);
  }

  & .header-link-container {
    display: inline-flex;
    align-items: center;
    gap: var(--sys-size-2);
    flex-shrink: 0;
  }

  & .header-link-container:first-of-type {
    flex-shrink: 1;
    min-width: 0;
  }
}

.link {
  color: var(--text-link);
  text-decoration: underline;
  cursor: pointer;
}

button.link {
  border: none;
  background: none;
  font: inherit;
}

.select-an-element-text {
  margin-left: 2px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
}

.empty-state-container {
  display: grid;
  align-items: center;
  justify-content: center;
  font: var(--sys-typescale-headline4);
  gap: var(--sys-size-11);
  padding: var(--sys-size-3);

  .header {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-self: end;
    gap: var(--sys-size-5);

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--sys-size-14);
      width: var(--sys-size-14);
      border-radius: var(--sys-shape-corner-small);
      background:
        linear-gradient(
          135deg,
          var(--sys-color-gradient-primary),
          var(--sys-color-gradient-tertiary)
        );
    }

    h1 {
      font: var(--sys-typescale-headline4);
    }
  }

  .suggestions {
    display: flex;
    flex-direction: column;
    gap: var(--sys-size-5);
    align-items: center;
    justify-content: center;
    align-self: start;
  }
}

.disabled-view {
  border-radius: var(--sys-shape-corner-small);
  padding: var(--sys-size-6) var(--sys-size-8);
  box-shadow: var(--drop-shadow);
  font: var(--sys-typescale-body4-regular);
  margin: var(--sys-size-4) 0;
  max-width: var(--sys-size-34);
  display: flex;
  text-wrap: pretty;

  .disabled-view-icon-container {
    border-radius: var(--sys-shape-corner-extra-small);
    width: var(--sys-size-9);
    height: var(--sys-size-9);
    background:
      linear-gradient(
        135deg,
        var(--sys-color-gradient-primary),
        var(--sys-color-gradient-tertiary)
      );
    margin-right: var(--sys-size-5);

    devtools-icon {
      margin: var(--sys-size-2);
    }
  }
}

.error-step {
  color: var(--sys-color-error);
}

.side-effect-confirmation {
  display: flex;
  flex-direction: column;
  gap: var(--sys-size-5);
  padding-bottom: var(--sys-size-4);
}

.side-effect-buttons-container {
  display: flex;
  gap: var(--sys-size-4);
}

@keyframes reveal {
  0% {
    opacity: 0%;
  }

  100% {
    opacity: 100%;
  }
}

@keyframes detect-scroll {
  from,
  to {
    --visibility-if-can-scroll: visible;
  }
}

/*# sourceURL=./components/freestylerChatUi.css */
`);const{html:a,Directives:{ifDefined:ve}}=re,C={notLoggedIn:"This feature is only available when you are signed into Chrome with your Google account",offline:"Check your internet connection and try again",inputDisclaimerForEmptyState:"This is an experimental AI feature and won't always get it right.",settingsLink:"AI assistance in Settings",followTheSteps:"Follow the steps above to ask a question",turnOnForStyles:"Turn on {PH1} to get help with understanding CSS styles",turnOnForStylesAndRequests:"Turn on {PH1} to get help with styles and network requests",learnAbout:"Learn about AI in DevTools"},d={inputDisclaimerForFreestylerAgent:"Chat messages and any data the inspected page can access via Web APIs are sent to Google and may be seen by human reviewers to improve this feature. This is an experimental AI feature and won’t always get it right.",inputDisclaimerForDrJonesNetworkAgent:"Chat messages and the selected network request are sent to Google and may be seen by human reviewers to improve this feature. This is an experimental AI feature and won’t always get it right.",inputDisclaimerForDrJonesFileAgent:"Chat messages and the selected file are sent to Google and may be seen by human reviewers to improve this feature. This is an experimental AI feature and won't always get it right.",inputDisclaimerForDrJonesPerformanceAgent:"Chat messages and the selected call stack are sent to Google and may be seen by human reviewers to improve this feature. This is an experimental AI feature and won't always get it right.",inputPlaceholderForFreestylerAgent:"Ask a question about the selected element",inputPlaceholderForDrJonesNetworkAgent:"Ask a question about the selected network request",inputPlaceholderForDrJonesFileAgent:"Ask a question about the selected file",inputPlaceholderForDrJonesPerformanceAgent:"Ask a question about the selected stack trace",sendButtonTitle:"Send",cancelButtonTitle:"Cancel",selectAnElement:"Select an element",noElementSelected:"No element selected",emptyStateText:"How can I help you?",systemError:"Something unforeseen happened and I can no longer continue. Try your request again and see if that resolves the issue.",maxStepsError:"Seems like I am stuck with the investigation. It would be better if you start over.",stoppedResponse:"You stopped this response",sideEffectConfirmationDescription:"This code may modify page content. Continue?",positiveSideEffectConfirmation:"Continue",negativeSideEffectConfirmation:"Cancel",ai:"AI",you:"You",investigating:"Investigating",paused:"Paused",codeExecuted:"Code executed",codeToExecute:"Code to execute",dataReturned:"Data returned",completed:"Completed",inProgress:"In progress",canceled:"Canceled",getStarted:"Hi! Here’s how to get started:",cssHelp:"CSS help:",cssHelpExplainer:'Navigate to the Elements panel, right-click a DOM element, and select "Ask AI assistant". I’ll be happy to explain its styles or behavior.',fileHelp:"File insights:",fileHelpExplainer:'Open the Sources panel, right-click a file, and select "Ask AI". I can provide insights into its purpose or origin.',networkHelp:"Network request insights:",networkHelpExplainer:'In the Network panel, right-click any request and select "Ask AI assistant". I’ll help break down what’s happening with each request.',performanceHelp:"Performance analysis:",performanceHelpExplainer:'In the Performance panel, run a trace. Then, right-click any function in the timeline and select "Ask AI". I’ll help you analyze its performance impact and suggest improvements.'},ne=Ae("panels/freestyler/components/FreestylerChatUi.ts",C),F=$e.bind(void 0,ne),u=R;function jt(r,e){if(r==="consent-view"||!e)return F(C.followTheSteps);switch(e){case"freestyler":return u(d.inputPlaceholderForFreestylerAgent);case"drjones-file":return u(d.inputPlaceholderForDrJonesFileAgent);case"drjones-network-request":return u(d.inputPlaceholderForDrJonesNetworkAgent);case"drjones-performance":return u(d.inputPlaceholderForDrJonesPerformanceAgent)}}class Ue extends yt{templateForToken(e){if(e.type==="code"){const t=e.text.split(`
`);t[0]?.trim()==="css"&&(e.lang="css",e.text=t.slice(1).join(`
`))}return super.templateForToken(e)}}class qe extends HTMLElement{#n=this.attachShadow({mode:"open"});#i=new Ue;#s;#e;constructor(e){super(),this.#e=e}set props(e){this.#e=e,this.#L()}connectedCallback(){this.#n.adoptedStyleSheets=[Pe],this.#L()}focusTextInput(){const e=this.#n.querySelector(".chat-input");e&&e.focus()}restoreScrollPosition(){if(this.#s===void 0)return;const e=this.#n.querySelector(".messages-scroll-container");e&&(e.scrollTop=this.#s)}scrollToLastMessage(){const e=this.#n.querySelector(".chat-message:last-child");e&&e.scrollIntoViewIfNeeded()}#r(e){const t=this.#n.querySelector(".chat-input");t&&(t.value=e)}#o=()=>{const e=this.#e.aidaAvailability==="available",t=this.#e.state==="consent-view",s=this.#e.messages.some(l=>l.entity==="model"&&l.steps.some(c=>!!c.sideEffect)),n=!this.#e.selectedElement||s,i=!this.#e.selectedNetworkRequest,o=!this.#e.selectedFile||!this.#e.selectedFile?.contentType().isTextType();return this.#e.agentType==="freestyler"&&n||this.#e.agentType==="drjones-network-request"&&i||this.#e.agentType==="drjones-file"&&o||!e||t||!this.#e.agentType};#c=e=>{!e.target||!(e.target instanceof HTMLElement)||(this.#s=e.target.scrollTop)};#t=e=>{e.preventDefault();const t=this.#n.querySelector(".chat-input");!t||!t.value||(this.#e.onTextSubmit(t.value),t.value="")};#a=e=>{!e.target||!(e.target instanceof HTMLTextAreaElement)||e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.#e.isLoading||(this.#e.onTextSubmit(e.target.value),e.target.value=""))};#d=e=>{e.preventDefault(),this.#e.isLoading&&this.#e.onCancelClick()};#l=e=>{this.#r(e),this.focusTextInput()};#E(e){return a`<devtools-provide-feedback
      .props=${{onFeedbackSubmit:(t,s)=>{this.#e.onFeedbackSubmit(e,t,s)},canShowFeedbackForm:this.#e.canShowFeedbackForm}}
      ></devtools-provide-feedback>`}#u(e){let t=[];try{t=Ke(e);for(const s of t)this.#i.renderToken(s)}catch{return a`${e}`}return a`<devtools-markdown-view
      .data=${{tokens:t,renderer:this.#i}}>
    </devtools-markdown-view>`}#x(e){const t=e.sideEffect?a`<span class="paused">${u(d.paused)}: </span>`:p,s=e.title??`${u(d.investigating)}…`;return a`<span class="title">${t}${s}</span>`}#f(e){if(!e.code&&!e.output)return p;const t=e.output&&!e.canceled?u(d.codeExecuted):u(d.codeToExecute),s=e.code?a`<div class="action-result">
        <devtools-code-block
          .code=${e.code.trim()}
          .codeLang=${"js"}
          .displayNotice=${!e.output}
          .header=${t}
          .showCopyButton=${!0}
        ></devtools-code-block>
    </div>`:p,n=e.output?a`<div class="js-code-output">
      <devtools-code-block
        .code=${e.output}
        .codeLang=${"js"}
        .displayNotice=${!0}
        .header=${u(d.dataReturned)}
        .showCopyButton=${!1}
      ></devtools-code-block>
    </div>`:p;return a`<div class="step-code">${s}${n}</div>`}#m(e,t){const s=t.isLast&&e.sideEffect?this.#p(e):p,n=e.thought?a`<p>${this.#u(e.thought)}</p>`:p,i=e.contextDetails?a`${de(e.contextDetails,o=>a`<div class="context-details">
        <devtools-code-block
          .code=${o.text}
          .codeLang=${o.codeLang||""}
          .displayNotice=${!1}
          .header=${o.title}
          .showCopyButton=${!0}
        ></devtools-code-block>
      </div>`)}`:p;return a`<div class="step-details">
      ${n}
      ${this.#f(e)}
      ${s}
      ${i}
    </div>`}#y(e,t){if(this.#e.isLoading&&t.isLast&&!e.sideEffect)return a`<devtools-spinner></devtools-spinner>`;let s="checkmark",n=u(d.completed),i="button";return t.isLast&&e.sideEffect?(i=void 0,n=void 0,s="pause-circle"):e.canceled&&(n=u(d.canceled),s="cross"),a`<devtools-icon
        class="indicator"
        role=${ve(i)}
        aria-label=${ve(n)}
        .name=${s}
      ></devtools-icon>`}#C(e,t){const s=D({step:!0,empty:!e.thought&&!e.code&&!e.contextDetails,paused:!!e.sideEffect,canceled:!!e.canceled});return a`
      <details class=${s}
        jslog=${$("step")}
        .open=${!!e.sideEffect}>
        <summary>
          <div class="summary">
            ${this.#y(e,t)}
            ${this.#x(e)}
            <devtools-icon
              class="arrow"
              .name=${"chevron-down"}
            ></devtools-icon>
          </div>
        </summary>
        ${this.#m(e,{isLast:t.isLast})}
      </details>`}#p(e){if(!e.sideEffect)return p;const t=s=>{e.sideEffect?.onAnswer(s),e.sideEffect=void 0,this.#L()};return a`<div
      class="side-effect-confirmation"
      jslog=${$("side-effect-confirmation")}
    >
      <p>${u(d.sideEffectConfirmationDescription)}</p>
      <div class="side-effect-buttons-container">
        <devtools-button
          .data=${{variant:"outlined",jslogContext:"decline-execute-code"}}
          @click=${()=>t(!1)}
        >${u(d.negativeSideEffectConfirmation)}</devtools-button>
        <devtools-button
          .data=${{variant:"primary",jslogContext:"accept-execute-code",iconName:"play"}}
          @click=${()=>t(!0)}
        >${u(d.positiveSideEffectConfirmation)}</devtools-button>
      </div>
    </div>`}#v(e){if(e.error){let t;switch(e.error){case"unknown":t=d.systemError;break;case"max-steps":t=d.maxStepsError;break;case"abort":return a`<p class="aborted" jslog=${$("aborted")}>${u(d.stoppedResponse)}</p>`}return a`<p class="error" jslog=${$("error")}>${u(t)}</p>`}return p}#b=(e,{isLast:t})=>{if(e.entity==="user"){const n=this.#e.userInfo.accountFullName||u(d.you),i=this.#e.userInfo.accountImage?a`<img src="data:image/png;base64, ${this.#e.userInfo.accountImage}" alt="Account avatar" />`:a`<devtools-icon
            .name=${"profile"}
          ></devtools-icon>`;return a`<section
        class="chat-message query"
        jslog=${$("question")}
      >
        <div class="message-info">
          ${i}
          <div class="message-name">
            <h2>${n}</h2>
          </div>
        </div>
        <div class="message-content">${this.#u(e.text)}</div>
      </section>`}const s=t&&!this.#e.isLoading&&e.suggestions;return a`
      <section class="chat-message answer" jslog=${$("answer")}>
        <div class="message-info">
          <devtools-icon
            name="smart-assistant"
          ></devtools-icon>
          <div class="message-name">
            <h2>${u(d.ai)}</h2>
          </div>
        </div>
        ${de(e.steps,(n,i)=>i,n=>this.#C(n,{isLast:[...e.steps.values()].at(-1)===n&&t}))}
        ${e.answer?a`<p>${this.#u(e.answer)}</p>`:p}
        ${this.#v(e)}
        <div class="actions">
          ${e.rpcId!==void 0?this.#E(e.rpcId):p}
          ${s?a`<div class="suggestions">
              ${e.suggestions?.map(n=>a`<devtools-button
                  .data=${{variant:"outlined",title:n,jslogContext:"suggestion"}}
                  @click=${()=>this.#l(n)}
                >${n}</devtools-button>`)}
            </div>`:p}
        </div>
      </section>
    `};#w(){if(!this.#e.agentType)return p;switch(this.#e.agentType){case"freestyler":return this.#g();case"drjones-file":return this.#k();case"drjones-network-request":return this.#S();case"drjones-performance":return this.#I()}}#k(){const e=D({"not-selected":!this.#e.selectedFile,"resource-link":!0});if(!this.#e.selectedFile)return a`${p}`;const t=ee.getIconForSourceFile(this.#e.selectedFile);return a`<div class="select-element">
    <div role=button class=${e}
    @click=${this.#e.onSelectedFileRequestClick}>
      ${t}${this.#e.selectedFile?.displayName()}
    </div></div>`}#S=()=>{const e=D({"not-selected":!this.#e.selectedNetworkRequest,"resource-link":!0});if(!this.#e.selectedNetworkRequest)return a`${p}`;const t=ee.getIconForNetworkRequest(this.#e.selectedNetworkRequest);return a`<div class="select-element">
    <div role=button class=${e}
    @click=${this.#e.onSelectedNetworkRequestClick}>
      ${t}${this.#e.selectedNetworkRequest?.name()}
    </div></div>`};#g=()=>{const e=D({"not-selected":!this.#e.selectedElement,"resource-link":!0});return a`
      <div class="select-element">
        <devtools-button
          .data=${{variant:"icon_toggle",size:"REGULAR",iconName:"select-element",toggledIconName:"select-element",toggleType:"primary-toggle",toggled:this.#e.inspectElementToggled,title:u(d.selectAnElement),jslogContext:"select-element"}}
          @click=${this.#e.onInspectElementClick}
        ></devtools-button>
        <div class=${e}>${this.#e.selectedElement?Ze(et.linkify(this.#e.selectedElement)):a`<span>${u(d.noElementSelected)}</span>`}</div>
      </div>`};#I=()=>{const e=D({"not-selected":!this.#e.selectedStackTrace,"resource-task":!0});if(!this.#e.selectedStackTrace)return a`${p}`;const t=q.getSelectedNodeForTraceEntryTreeForAI(this.#e.selectedStackTrace);if(!t)return a`${p}`;let s=t.type;t.type==="ProfileCall"&&t.function&&(s=t.function);const n={iconName:"performance",color:"var(--sys-color-on-surface-subtle)"},i=ee.createIconElement(n,"Performance");return i.classList.add("icon"),a`<div class="select-element">
    <div class=${e}>
      ${i}${s}
    </div></div>`};#A=()=>a`
      <div class="messages-scroll-container" @scroll=${this.#c}>
        <div class="messages-container">
          ${this.#e.messages.map((e,t,s)=>this.#b(e,{isLast:s.at(-1)===e}))}
        </div>
      </div>
    `;#$=()=>{const e=this.#N();return a`<div class="empty-state-container messages-scroll-container">
      <div class="header">
        <div class="icon">
          <devtools-icon
            name="smart-assistant"
          ></devtools-icon>
        </div>
        <h1>${u(d.emptyStateText)}</h1>
      </div>
      <div class="suggestions">
        ${e.map(t=>a`<devtools-button
            class="suggestion"
            @click=${()=>this.#l(t)}
            .data=${{variant:"outlined",size:"REGULAR",title:t,jslogContext:"suggestion",disabled:this.#o()}}
          >${t}</devtools-button>`)}
      </div>
    </div>`};#N=()=>{if(!this.#e.agentType)return[];switch(this.#e.agentType){case"freestyler":return["What can you help me with?","Why isn’t this element visible?","How do I center this element?"];case"drjones-file":return["What does this script do?","Is the script optimized for performance?","Does the script handle user input safely?"];case"drjones-network-request":return["Why is this network request taking so long?","Are there any security headers present?","Why is the request failing?"];case"drjones-performance":return["Identify performance issues in this call stack","Where is most of the time being spent in this call stack?","How can I reduce the time of this call stack?"]}};#R=()=>a`
      <div class="chat-input-container">
        <textarea class="chat-input"
          .disabled=${this.#o()}
          wrap="hard"
          @keydown=${this.#a}
          placeholder=${jt(this.#e.state,this.#e.agentType)}
          jslog=${Ie("query").track({keydown:"Enter"})}></textarea>
          ${this.#e.isLoading?a`<devtools-button
              class="chat-input-button"
              aria-label=${u(d.cancelButtonTitle)}
              @click=${this.#d}
              .data=${{variant:"icon",size:"REGULAR",disabled:this.#o(),iconName:"record-stop",title:u(d.cancelButtonTitle),jslogContext:"stop"}}
            ></devtools-button>`:a`<devtools-button
              class="chat-input-button"
              aria-label=${u(d.sendButtonTitle)}
              .data=${{type:"submit",variant:"icon",size:"REGULAR",disabled:this.#o(),iconName:"send",title:u(d.sendButtonTitle),jslogContext:"send"}}
            ></devtools-button>`}
      </div>`;#h=()=>{if(this.#e.state==="consent-view"||!this.#e.agentType)return F(C.inputDisclaimerForEmptyState);switch(this.#e.agentType){case"freestyler":return u(d.inputDisclaimerForFreestylerAgent);case"drjones-file":return u(d.inputDisclaimerForDrJonesFileAgent);case"drjones-network-request":return u(d.inputDisclaimerForDrJonesNetworkAgent);case"drjones-performance":return u(d.inputDisclaimerForDrJonesPerformanceAgent)}};#T(){const e=document.createElement("button");e.textContent=F(C.settingsLink),e.classList.add("link"),tt(e),e.addEventListener("click",()=>{P.instance().showView("chrome-ai")}),e.setAttribute("jslog",`${st("open-ai-settings").track({click:!0})}`);const t=b.instance().getHostConfig();return a`${t.devToolsExplainThisResourceDogfood?.enabled?ue(ne,C.turnOnForStylesAndRequests,{PH1:e}):ue(ne,C.turnOnForStyles,{PH1:e})}`}#F(e){switch(e){case"no-account-email":case"sync-is-paused":return a`${F(C.notLoggedIn)}`;case"no-internet":return a`${F(C.offline)}`}}#D(e){return a`
      <div class="empty-state-container messages-scroll-container">
        <div class="disabled-view">
          <div class="disabled-view-icon-container">
            <devtools-icon .data=${{iconName:"smart-assistant",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
            </devtools-icon>
          </div>
          <div>
            ${e}
          </div>
        </div>
      </div>
    `}#z(){const e=b.instance().getHostConfig();return a`
      <main class="messages-scroll-container" @scroll=${this.#c}>
        <div class="messages-container">
          <section class="no-agent-message" jslog=${$("no-agent-entrypoint")}>
            <div class="header">
              <devtools-icon name="smart-assistant"></devtools-icon>
              <h2>${u(d.ai)}</h2>
            </div>
            <div class="instructions">
              <p>${u(d.getStarted)}</p>
              ${e.devToolsFreestyler?.enabled?a`
                <p><strong>${u(d.cssHelp)}</strong> ${u(d.cssHelpExplainer)}</p>
              `:p}
              ${e.devToolsAiAssistanceFileAgentDogfood?.enabled?a`
                <p><strong>${u(d.fileHelp)}</strong> ${u(d.fileHelpExplainer)}</p>
              `:p}
              ${e.devToolsExplainThisResourceDogfood?.enabled?a`
                <p><strong>${u(d.networkHelp)}</strong> ${u(d.networkHelpExplainer)}</p>
              `:p}
              ${e.devToolsAiAssistancePerformanceAgentDogfood?.enabled?a`
                <p><strong>${u(d.performanceHelp)}</strong> ${u(d.performanceHelpExplainer)}</p>
              `:p}
            </div>
          </section>
        </div>
      </main>
    `}#O(){return this.#e.state==="consent-view"?this.#D(this.#T()):this.#e.aidaAvailability!=="available"?this.#D(this.#F(this.#e.aidaAvailability)):this.#e.agentType?this.#e.messages.length>0?this.#A():this.#$():this.#z()}#L(){ie(a`
      <div class="chat-ui">
        <main>
          ${this.#O()}
          <form class="input-form" @submit=${this.#t}>
            ${this.#e.state!=="consent-view"?a`
              <div class="input-header">
                <div class="header-link-container">
                  ${this.#w()}
                </div>
              </div>
            `:p}
            ${this.#R()}
          </form>
        </main>
        <footer class="disclaimer">
          <p class="disclaimer-text">
            ${this.#h()}
            <x-link
              class="link"
              jslog=${nt("open-ai-settings").track({click:!0})}
              @click=${e=>{e.preventDefault(),P.instance().showView("chrome-ai")}}
            >${F(C.learnAbout)}</x-link>
          </p>
        </footer>
      </div>
    `,this.#n,{host:this})}}const Fs={MarkdownRendererWithCodeBlock:Ue};customElements.define("devtools-freestyler-chat-ui",qe);const He="devtools_freestyler",H="__freestyler";class Mt{#n=[];#i;#s;#e;#r=new xe;constructor(e){this.#i=e;const t=m.instance().flavor(O),s=t?.frameId(),n=t?.domModel().target();this.#e=n,this.#s=s}get target(){if(this.#e)return this.#e;const e=m.instance().flavor(Ne);if(!e)throw new Error("Target is not found for executing code");return e}get frameId(){if(this.#s)return this.#s;const e=this.target.model(oe);if(!e?.mainFrame)throw new Error("Main frame is not found for executing code");return e.mainFrame.id}async install(){const e=this.target.model(_),t=this.target.pageAgent(),{executionContextId:s}=await t.invoke_createIsolatedWorld({frameId:this.frameId,worldName:He}),n=e?.executionContext(s);if(!n)throw new Error("Execution context is not found for executing code");const i=this.#c.bind(this,n);e?.addEventListener(he.BindingCalled,i),this.#n.push(i),await this.target.runtimeAgent().invoke_addBinding({name:H,executionContextId:s}),await this.#o(n,_t),await this.#o(n,Bt)}async uninstall(){const e=this.target.model(_);for(const t of this.#n)e?.removeEventListener(he.BindingCalled,t);this.#n=[],await this.target.runtimeAgent().invoke_removeBinding({name:H})}async#o(e,t){const s=await e.evaluate({expression:t,replMode:!0,includeCommandLineAPI:!1,returnByValue:!0,silent:!1,generatePreview:!1,allowUnsafeEvalBlockedByCSP:!0,throwOnSideEffect:!1},!1,!0);if(!s)throw new Error("Response is not found");if("error"in s)throw new Error(s.error);if(s.exceptionDetails){const n=s.exceptionDetails.exception?.description;throw new Error(n||"JS exception")}return s}async#c(e,t){const{data:s}=t;s.name===H&&await this.#r.run(async()=>{const n=s.payload,{object:i}=await this.#o(e,`freestyler.getArgs(${n})`),o=JSON.parse(i.value),l=o.selector,c=o.className,y=this.target.model(it);if(!y)throw new Error("CSSModel is not found");await this.#i.addChange(y,this.frameId,{selector:l,className:c,styles:o.styles}),await this.#o(e,`freestyler.respond(${n})`)})}}const _t=`globalThis.freestyler = (args) => {
  let resolver;
  let rejecter;
  const p = new Promise((resolve, reject) => {
    resolver = resolve;
    rejecter = reject;
  });
  freestyler.callbacks.set(freestyler.id , {
    args: JSON.stringify(args),
    callbackId: freestyler.id,
    resolver,
    rejecter
  });
  ${H}(String(freestyler.id));
  freestyler.id++;
  return p;
}
freestyler.id = 1;
freestyler.callbacks = new Map();
freestyler.getArgs = (callbackId) => {
  return freestyler.callbacks.get(callbackId).args;
}
freestyler.respond = (callbackId) => {
  freestyler.callbacks.get(callbackId).resolver();
  freestyler.callbacks.delete(callbackId);
}`,Bt=`async function setElementStyles(el, styles) {
  let selector = el.tagName.toLowerCase();
  if (el.id) {
    selector = '#' + el.id;
  } else if (el.classList.length) {
    const parts = [];
    for (const cls of el.classList) {
      if (cls.startsWith('${ye}')) {
        continue;
      }
      parts.push('.' + cls);
    }
    if (parts.length) {
      selector = parts.join('');
    }
  }

  // __freestylerClassName is not exposed to the page due to this being
  // run in the isolated world.
  const className = el.__freestylerClassName ?? '${ye}-' + freestyler.id;
  el.__freestylerClassName = className;
  el.classList.add(className);

  // Remove inline styles with the same keys so that the edit applies.
  for (const [key, value] of Object.entries(styles)) {
    // if it's kebap case.
    el.style.removeProperty(key);
    // If it's camel case.
    el.style[key] = '';
  }

  await freestyler({
    method: 'setElementStyles',
    selector: selector,
    className,
    styles
  });
}`;class j extends Error{}class je extends Error{}function Jt(){const r=new WeakMap;return JSON.stringify(this,function(t,s){if(typeof s=="object"&&s!==null){if(r.has(s))return"(cycle)";r.set(s,!0)}if(s instanceof HTMLElement){const n=s.id?` id="${s.id}"`:"",i=s.classList.value?` class="${s.classList.value}"`:"";return`<${s.nodeName.toLowerCase()}${n}${i}>${s.hasChildNodes()?"...":""}</${s.nodeName.toLowerCase()}>`}if(!(this instanceof CSSStyleDeclaration&&!isNaN(Number(t))))return s})}async function Wt(r){switch(r.type){case"string":return`'${r.value}'`;case"bigint":return`${r.value}n`;case"boolean":case"number":return`${r.value}`;case"undefined":return"undefined";case"symbol":case"function":return`${r.description}`;case"object":{const e=await r.callFunction(Jt);if(!e.object||e.object.type!=="string")throw new Error("Could not stringify the object"+r);return e.object.value}default:throw new Error("Unknown type to stringify "+r.type)}}class Gt{static async execute(e,t,{throwOnSideEffect:s}){if(t.debuggerModel.selectedCallFrame())throw new j("Cannot evaluate JavaScript because the execution is paused on a breakpoint.");const n=await t.evaluate({expression:e,replMode:!0,includeCommandLineAPI:!0,returnByValue:!1,silent:!1,generatePreview:!0,allowUnsafeEvalBlockedByCSP:!1,throwOnSideEffect:s},!1,!0);try{if(!n)throw new Error("Response is not found");if("error"in n)throw new j(n.error);if(n.exceptionDetails){const i=n.exceptionDetails.exception?.description;throw _.isSideEffectFailure(n)?new je(i):new j(i||"JS exception")}return Wt(n.object)}finally{t.runtimeModel.releaseEvaluationResult(n)}}}const be={analyzingThePrompt:"Analyzing the prompt",dataUsed:"Data used"},we=R,Yt=`You are the most advanced CSS debugging assistant integrated into Chrome DevTools.
You always suggest considering the best web development practices and the newest platform features such as view transitions.
The user selected a DOM element in the browser's DevTools and sends a query about the page or the selected DOM element.

# Considerations
* After applying a fix, please ask the user to confirm if the fix worked or not.
* Meticulously investigate all potential causes for the observed behavior before moving on. Gather comprehensive information about the element's parent, siblings, children, and any overlapping elements, paying close attention to properties that are likely relevant to the query.
* Avoid making assumptions without sufficient evidence, and always seek further clarification if needed.
* Always explore multiple possible explanations for the observed behavior before settling on a conclusion.
* When presenting solutions, clearly distinguish between the primary cause and contributing factors.
* Please answer only if you are sure about the answer. Otherwise, explain why you're not able to answer.
* When answering, always consider MULTIPLE possible solutions.
* You're also capable of executing the fix for the issue user mentioned. Reflect this in your suggestions.
* Use \`window.getComputedStyle\` to gather **rendered** styles and make sure that you take the distinction between authored styles and computed styles into account.
* **CRITICAL** Use \`window.getComputedStyle\` ALWAYS with property access, like \`window.getComputedStyle($0.parentElement)['color']\`.
* **CRITICAL** Never assume a selector for the elements unless you verified your knowledge.
* **CRITICAL** Consider that \`data\` variable from the previous ACTION blocks are not available in a different ACTION block.
* **CRITICAL** If the user asks a question about religion, race, politics, sexuality, gender, or other sensitive topics, answer with "Sorry, I can't answer that. I'm best at questions about debugging web pages."

# Instructions
You are going to answer to the query in these steps:
* THOUGHT
* TITLE
* ACTION
* ANSWER
* SUGGESTIONS
Use THOUGHT to explain why you take the ACTION. Use TITLE to provide a short summary of the thought.
Use ACTION to evaluate JavaScript code on the page to gather all the data needed to answer the query and put it inside the data variable - then return STOP.
You have access to a special $0 variable referencing the current element in the scope of the JavaScript code.
OBSERVATION will be the result of running the JS code on the page.
After that, you can answer the question with ANSWER or run another ACTION query.
Please run ACTION again if the information you received is not enough to answer the query.
Please answer only if you are sure about the answer. Otherwise, explain why you're not able to answer.
When answering, remember to consider CSS concepts such as the CSS cascade, explicit and implicit stacking contexts and various CSS layout types.
When answering, always consider MULTIPLE possible solutions.
After the ANSWER, output SUGGESTIONS: string[] for the potential responses the user might give. Make sure that the array and the \`SUGGESTIONS: \` text is in the same line.

If you need to set styles on an HTML element, always call the \`async setElementStyles(el: Element, styles: object)\` function.

## Example session

QUERY: Why am I not able to see the popup in this case?

THOUGHT: There are a few reasons why a popup might not be visible. It could be related to its positioning, its z-index, its display property, or overlapping elements. Let's gather information about these properties for the popup, its parent, and any potentially overlapping elements.
TITLE: Analyzing popup, container, and overlaps
ACTION
const computedStyles = window.getComputedStyle($0);
const parentComputedStyles = window.getComputedStyle($0.parentElement);
const data = {
  numberOfChildren: $0.children.length,
  numberOfSiblings: $0.parentElement.children.length,
  hasPreviousSibling: !!$0.previousElementSibling,
  hasNextSibling: !!$0.nextElementSibling,
  elementStyles: {
    display: computedStyles['display'],
    visibility: computedStyles['visibility'],
    position: computedStyles['position'],
    clipPath: computedStyles['clip-path'],
    zIndex: computedStyles['z-index']
  },
  parentStyles: {
    display: parentComputedStyles['display'],
    visibility: parentComputedStyles['visibility'],
    position: parentComputedStyles['position'],
    clipPath: parentComputedStyles['clip-path'],
    zIndex: parentComputedStyles['z-index']
  },
  overlappingElements: Array.from(document.querySelectorAll('*'))
    .filter(el => {
      const rect = el.getBoundingClientRect();
      const popupRect = $0.getBoundingClientRect();
      return (
        el !== $0 &&
        rect.left < popupRect.right &&
        rect.right > popupRect.left &&
        rect.top < popupRect.bottom &&
        rect.bottom > popupRect.top
      );
    })
    .map(el => ({
      tagName: el.tagName,
      id: el.id,
      className: el.className,
      zIndex: window.getComputedStyle(el)['z-index']
    }))
};
STOP

OBSERVATION: {"elementStyles":{"display":"block","visibility":"visible","position":"absolute","zIndex":"3","opacity":"1"},"parentStyles":{"display":"block","visibility":"visible","position":"relative","zIndex":"1","opacity":"1"},"overlappingElements":[{"tagName":"HTML","id":"","className":"","zIndex":"auto"},{"tagName":"BODY","id":"","className":"","zIndex":"auto"},{"tagName":"DIV","id":"","className":"container","zIndex":"auto"},{"tagName":"DIV","id":"","className":"background","zIndex":"2"}]}"

ANSWER: Even though the popup itself has a z-index of 3, its parent container has position: relative and z-index: 1. This creates a new stacking context for the popup. Because the "background" div has a z-index of 2, which is higher than the stacking context of the popup, it is rendered on top, obscuring the popup.
SUGGESTIONS: ["What is a stacking context?", "How can I change the stacking order?"]
`;async function Vt(r,{throwOnSideEffect:e}){const t=m.instance().flavor(O),s=t?.domModel().target()??m.instance().flavor(Ne);if(!s)throw new Error("Target is not found for executing code");const n=s.model(oe),i=t?.frameId()??n?.mainFrame?.id;if(!i)throw new Error("Main frame is not found for executing code");const o=s.model(_),l=s.pageAgent(),{executionContextId:c}=await l.invoke_createIsolatedWorld({frameId:i,worldName:He}),y=o?.executionContext(c);if(!y)throw new Error("Execution context is not found for executing code");try{return await Gt.execute(r,y,{throwOnSideEffect:e})}catch(T){if(T instanceof j)return`Error: ${T.message}`;throw T}}const Qt=25e3;class W extends A{preamble=Yt;clientFeature=G.CHROME_FREESTYLER;get userTier(){return b.instance().getHostConfig().devToolsFreestyler?.userTier}get executionMode(){return b.instance().getHostConfig().devToolsFreestyler?.executionMode??Y.ALL_SCRIPTS}get options(){const e=b.instance().getHostConfig(),t=A.validTemperature(e.devToolsFreestyler?.temperature),s=e.devToolsFreestyler?.modelId;return{temperature:t,model_id:s}}parseResponse(e){if(!e)return{answer:""};const t=e.split(`
`);let s,n,i,o,l,c=0;const y=f=>{const g=f.trim();return g.startsWith("THOUGHT:")||g.startsWith("ACTION")||g.startsWith("ANSWER:")},T=f=>{const g=f.trim();return y(f)||g.startsWith("OBSERVATION:")||g.startsWith("TITLE:")||g.startsWith("SUGGESTIONS:")};if(!t.some(f=>y(f)))return this.parseResponse(`ANSWER: ${e}`);for(;c<t.length;){const f=t[c].trim();if(f.startsWith("THOUGHT:")&&!s){const g=[f.substring(8).trim()];for(c++;c<t.length&&!T(t[c]);){const v=t[c].trim();v&&g.push(v),c++}s=g.join(`
`)}else if(f.startsWith("TITLE:"))n=f.substring(6).trim(),c++;else if(f.startsWith("ACTION")&&!i){const g=[];for(c++;c<t.length;){if(t[c].trim()==="STOP"){c++;break}if(T(t[c]))break;t[c].trim()!=="js"&&g.push(t[c]),c++}const v=g[g.length-1];v&&v.endsWith("STOP")&&(g[g.length-1]=v.substring(0,v.length-4)),i=g.join(`
`).replaceAll("```","").replaceAll("``","").trim()}else if(f.startsWith("ANSWER:")&&!o){const g=[f.substring(7).trim()];let v=c+1;for(;v<t.length;){const _e=t[v].trim();if(T(_e))break;g.push(t[v]),v++}o=g.join(`
`).trim(),c=v}else if(f.startsWith("SUGGESTIONS:")){try{l=JSON.parse(f.substring(12).trim())}catch{}c++}else c++}return i?{title:n,thought:s,action:i}:s&&!o?{title:n,thought:s}:{answer:o||e,suggestions:l}}#n;#i;#s;#e;constructor(e){super({aidaClient:e.aidaClient,serverSideLoggingEnabled:e.serverSideLoggingEnabled}),this.#s=e.changeManager||new Re,this.#n=e.execJs??Vt,this.#e=e.createExtensionScope??(t=>new Mt(t)),this.#i=e.confirmSideEffectForTest??(()=>Promise.withResolvers()),rt.instance().addModelListener(oe,ot.PrimaryPageChanged,this.onPrimaryPageChanged,this)}onPrimaryPageChanged(){this.#s.clear()}async#r(e,{throwOnSideEffect:t,confirmExecJs:s}){const n=`{
      const scope = {$0, $1, getEventListeners};
      with (scope) {
        ${e}
        ;((typeof data !== "undefined") ? data : undefined)
      }
    }`;try{if(!(await s??Promise.resolve(!0)))return{observation:"Error: User denied code execution with side effects.",sideEffect:!1,canceled:!0};const o=await this.#n(n,{throwOnSideEffect:t}),l=at(o);if(I.freestylerEvalResponseSize(l),l>Qt)throw new Error("Output exceeded the maximum allowed length.");return{observation:o,sideEffect:!1,canceled:!1}}catch(i){return i instanceof je?{observation:i.message,sideEffect:!0,canceled:!1}:{observation:`Error: ${i.message}`,sideEffect:!1,canceled:!1}}}static async describeElement(e){let t=`* Its selector is \`${e.simpleSelector()}\``;const s=await e.getChildNodesPromise();if(s){const i=s.filter(l=>l.nodeType()===Node.TEXT_NODE),o=s.filter(l=>l.nodeType()===Node.ELEMENT_NODE);switch(o.length){case 0:t+=`
* It doesn't have any child element nodes`;break;case 1:t+=`
* It only has 1 child element node: \`${o[0].simpleSelector()}\``;break;default:t+=`
* It has ${o.length} child element nodes: ${o.map(l=>`\`${l.simpleSelector()}\``).join(", ")}`}switch(i.length){case 0:t+=`
* It doesn't have any child text nodes`;break;case 1:t+=`
* It only has 1 child text node`;break;default:t+=`
* It has ${i.length} child text nodes`}}if(e.nextSibling){const i=e.nextSibling.nodeType()===Node.ELEMENT_NODE?"an element":"a non element";t+=`
* It has a next sibling and it is ${i} node`}if(e.previousSibling){const i=e.previousSibling.nodeType()===Node.ELEMENT_NODE?"an element":"a non element";t+=`
* It has a previous sibling and it is ${i} node`}const n=e.parentNode;if(n){const i=await n.getChildNodesPromise();if(t+=`
* Its parent's selector is \`${n.simpleSelector()}\``,i){const o=i.filter(c=>c.nodeType()===Node.ELEMENT_NODE);switch(o.length){case 0:break;case 1:t+=`
* Its parent has only 1 child element node`;break;default:t+=`
* Its parent has ${o.length} child element nodes: ${o.map(c=>`\`${c.simpleSelector()}\``).join(", ")}`;break}const l=i.filter(c=>c.nodeType()===Node.TEXT_NODE);switch(l.length){case 0:break;case 1:t+=`
* Its parent has only 1 child text node`;break;default:t+=`
* Its parent has ${l.length} child text nodes: ${l.map(c=>`\`${c.simpleSelector()}\``).join(", ")}`;break}}}return t.trim()}async*handleAction(e,t){if(B(`Action to execute: ${e}`),this.executionMode===Y.NO_SCRIPTS)return{type:h.ACTION,code:e,output:"Error: JavaScript execution is currently disabled.",canceled:!0,rpcId:t};const s=this.#e(this.#s);await s.install();try{let n=await this.#r(e,{throwOnSideEffect:!0});if(B(`Action result: ${JSON.stringify(n)}`),n.sideEffect){if(this.executionMode===Y.SIDE_EFFECT_FREE_SCRIPTS_ONLY)return{type:h.ACTION,code:e,output:"Error: JavaScript execution that modifies the page is currently disabled.",canceled:!0,rpcId:t};const i=this.#i();ae()&&window.dispatchEvent(new CustomEvent("freestylersideeffect",{detail:{confirm:i.resolve}})),yield{type:h.SIDE_EFFECT,code:e,confirm:i.resolve,rpcId:t},n=await this.#r(e,{throwOnSideEffect:!1,confirmExecJs:i.promise})}return{type:h.ACTION,code:e,output:n.observation,canceled:n.canceled,rpcId:t}}finally{await s.uninstall()}}async*handleContextDetails(e){e&&(yield{type:h.CONTEXT,title:we(be.analyzingThePrompt),details:[{title:we(be.dataUsed),text:await W.describeElement(e)}]})}async enhanceQuery(e,t){return`${t?`# Inspected element

${await W.describeElement(t)}

# User request

`:""}QUERY: ${e}`}addToHistory(e){const t=e.response;if("answer"in t){const s=`ANSWER: ${t.answer}`;return super.addToHistory({...e,response:{answer:s}})}return super.addToHistory(e)}}const Me=new CSSStyleSheet;Me.replaceSync(`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.freestyler-toolbar-container {
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
  justify-content: space-between;
}

.freestyler-chat-ui-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: hidden;
}

/*# sourceURL=./freestylerPanel.css */
`);const{html:Xt}=re,Kt="https://crbug.com/364805393",Zt="https://goo.gle/devtools-ai-assistance",L={clearChat:"Clear chat",help:"Help",settings:"Settings",sendFeedback:"Send feedback",chatCleared:"Chat cleared"},ke={answerLoading:"Answer loading",answerReady:"Answer ready"},es=Ae("panels/freestyler/FreestylerPanel.ts",L),z=$e.bind(void 0,es),Se=R;function Te(r){return r&&r.nodeType()===Node.ELEMENT_NODE?r:null}function ts(r,{onClearClick:e}){const t=r.createChild("div","freestyler-toolbar-container"),s=new fe("",t),n=new fe("freestyler-right-toolbar",t),i=new Z(z(L.clearChat),"clear",void 0,"freestyler.clear");i.addEventListener("Click",e),s.appendToolbarItem(i);const o=ht.create(Kt,z(L.sendFeedback),void 0,void 0,"freestyler.send-feedback");o.style.setProperty("display",null),o.style.setProperty("text-decoration","none"),o.style.setProperty("padding","0 var(--sys-size-3)");const l=new pt(o);n.appendToolbarItem(l),n.appendSeparator();const c=new Z(z(L.help),"help",void 0,"freestyler.help");c.addEventListener("Click",()=>{M.openInNewTab(Zt)}),n.appendToolbarItem(c);const y=new Z(z(L.settings),"gear",void 0,"freestyler.settings");y.addEventListener("Click",()=>{P.instance().showView("chrome-ai")}),n.appendToolbarItem(y)}function Ee(r,e,t){ie(Xt`
    <devtools-freestyler-chat-ui .props=${r} ${gt(s=>{!s||!(s instanceof qe)||(e.freestylerChatUi=s)})}></devtools-freestyler-chat-ui>
  `,t,{host:r})}let se;class U extends lt{view;static panelName="freestyler";#n;#i;#s;#e;#r;#o;#c;#t;#a={};#d=ns();#l;#E=new Re;constructor(e=Ee,{aidaClient:t,aidaAvailability:s,syncInfo:n}){super(U.panelName),this.view=e,this.#l=this.#x(),ts(this.contentElement,{onClearClick:this.#R.bind(this)}),this.#n=ct.instance().getAction("elements.toggle-element-search"),this.#s=t,this.#i=this.contentElement.createChild("div","freestyler-chat-ui-container"),this.#t={state:this.#u(),aidaAvailability:s,messages:[],inspectElementToggled:this.#n.toggled(),isLoading:!1,onTextSubmit:this.#F.bind(this),onInspectElementClick:this.#I.bind(this),onFeedbackSubmit:this.#A.bind(this),onCancelClick:this.#T.bind(this),onSelectedNetworkRequestClick:this.#$.bind(this),onSelectedFileRequestClick:this.#N.bind(this),canShowFeedbackForm:this.#d,userInfo:{accountImage:n.accountImage,accountFullName:n.accountFullName},selectedElement:null,selectedFile:null,selectedNetworkRequest:null,selectedStackTrace:null},this.#e=this.#f(),this.#r=this.#m(),this.#o=this.#y(),this.#c=this.#C()}#u(){const t=b.instance().getHostConfig().aidaAvailability?.blockedByAge===!0;return this.#l?.getIfNotDisabled()&&!t?"chat-view":"consent-view"}#x(){try{return dt("ai-assistance-enabled")}catch{return}}#f(){return new W({aidaClient:this.#s,changeManager:this.#E,serverSideLoggingEnabled:this.#d})}#m(){return new Tt({aidaClient:this.#s,serverSideLoggingEnabled:this.#d})}#y(){return new At({aidaClient:this.#s,serverSideLoggingEnabled:this.#d})}#C(){return new Ot({aidaClient:this.#s,serverSideLoggingEnabled:this.#d})}static async instance(e={forceNew:null}){const{forceNew:t}=e;if(!se||t){const s=new V,n=new Promise(l=>M.getSyncInformation(l)),[i,o]=await Promise.all([V.checkAccessPreconditions(),n]);se=new U(Ee,{aidaClient:s,aidaAvailability:i,syncInfo:o})}return se}wasShown(){this.registerCSSFiles([Me]),this.#a.freestylerChatUi?.restoreScrollPosition(),this.#a.freestylerChatUi?.focusTextInput(),this.#p(),this.#g(),this.#t={...this.#t,inspectElementToggled:this.#n.toggled(),selectedElement:Te(m.instance().flavor(O)),selectedNetworkRequest:m.instance().flavor(Q),selectedStackTrace:m.instance().flavor(q),selectedFile:m.instance().flavor(X)},this.doUpdate(),this.#l?.addChangeListener(this.#g,this),pe.instance().addEventListener("aidaAvailabilityChanged",this.#p),this.#n.addEventListener("Toggled",this.#v),m.instance().addFlavorChangeListener(O,this.#b),m.instance().addFlavorChangeListener(Q,this.#w),m.instance().addFlavorChangeListener(q,this.#k),m.instance().addFlavorChangeListener(X,this.#S)}willHide(){this.#l?.removeChangeListener(this.#g,this),pe.instance().removeEventListener("aidaAvailabilityChanged",this.#p),this.#n.removeEventListener("Toggled",this.#v),m.instance().removeFlavorChangeListener(O,this.#b),m.instance().removeFlavorChangeListener(Q,this.#w),m.instance().removeFlavorChangeListener(q,this.#k),m.instance().removeFlavorChangeListener(X,this.#S)}#p=async()=>{const e=await V.checkAccessPreconditions();if(e!==this.#t.aidaAvailability){this.#t.aidaAvailability=e;const t=await new Promise(s=>M.getSyncInformation(s));this.#t.userInfo={accountImage:t.accountImage,accountFullName:t.accountFullName},this.#t.state=this.#u(),this.doUpdate()}};#v=e=>{this.#t.inspectElementToggled!==e.data&&(this.#t.inspectElementToggled=e.data,this.doUpdate())};#b=e=>{this.#t.selectedElement!==e.data&&(this.#t.selectedElement=Te(e.data),this.doUpdate())};#w=e=>{this.#t.selectedNetworkRequest!==e.data&&(this.#t.selectedNetworkRequest=e.data?e.data:null,this.doUpdate())};#k=e=>{this.#t.selectedStackTrace!==e.data&&(this.#t.selectedStackTrace=e.data?e.data:null,this.doUpdate())};#S=e=>{this.#t.selectedFile!==e.data&&(this.#t.selectedFile=e.data?e.data:null,this.doUpdate())};#g=()=>{const e=this.#u();this.#t.state!==e&&(this.#t.state=e,this.doUpdate())};doUpdate(){this.view(this.#t,this.#a,this.#i)}#I(){this.#n.execute()}#A(e,t,s){this.#s.registerClientEvent({corresponding_aida_rpc_global_id:e,disable_user_content_logging:!this.#d,do_conversation_client_event:{user_feedback:{sentiment:t,user_input:{comment:s}}}})}#$(){if(this.#t.selectedNetworkRequest){const e=ut.tab(this.#t.selectedNetworkRequest,"headers-component");return ge(e)}}#N(){if(this.#t.selectedFile)return ge(this.#t.selectedFile.uiLocation(0,0))}handleAction(e){switch(e){case"freestyler.elements-floating-button":{this.#a.freestylerChatUi?.focusTextInput(),I.actionTaken(N.FreestylerOpenedFromElementsPanelFloatingButton),this.#t.agentType="freestyler",this.doUpdate();break}case"freestyler.element-panel-context":{this.#a.freestylerChatUi?.focusTextInput(),I.actionTaken(N.FreestylerOpenedFromElementsPanel),this.#t.agentType="freestyler",this.doUpdate();break}case"drjones.network-floating-button":{this.#a.freestylerChatUi?.focusTextInput(),I.actionTaken(N.DrJonesOpenedFromNetworkPanelFloatingButton),this.#t.agentType="drjones-network-request",this.doUpdate();break}case"drjones.network-panel-context":{this.#a.freestylerChatUi?.focusTextInput(),I.actionTaken(N.DrJonesOpenedFromNetworkPanel),this.#t.agentType="drjones-network-request",this.doUpdate();break}case"drjones.performance-panel-context":{this.#a.freestylerChatUi?.focusTextInput(),I.actionTaken(N.DrJonesOpenedFromPerformancePanel),this.#t.agentType="drjones-performance",this.doUpdate();break}case"drjones.sources-floating-button":{this.#a.freestylerChatUi?.focusTextInput(),I.actionTaken(N.DrJonesOpenedFromSourcesPanelFloatingButton),this.#t.agentType="drjones-file",this.doUpdate();break}case"drjones.sources-panel-context":{this.#a.freestylerChatUi?.focusTextInput(),I.actionTaken(N.DrJonesOpenedFromSourcesPanel),this.#t.agentType="drjones-file",this.doUpdate();break}}}#R(){this.#t.messages=[],this.#t.isLoading=!1,this.#e=this.#f(),this.#r=this.#m(),this.#o=this.#y(),this.#T(),this.doUpdate(),K(z(L.chatCleared))}#h=new AbortController;#T(){this.#h.abort(),this.#h=new AbortController,this.#t.isLoading=!1,this.doUpdate()}async#F(e){this.#t.messages.push({entity:"user",text:e}),this.#t.isLoading=!0;const t={entity:"model",steps:[]};this.#t.messages.push(t),this.doUpdate(),this.#h=new AbortController;const s=this.#h.signal;let n;if(this.#t.agentType==="freestyler"?n=this.#e.run(e,{signal:s,selected:this.#t.selectedElement}):this.#t.agentType==="drjones-file"?n=this.#r.run(e,{signal:s,selected:this.#t.selectedFile}):this.#t.agentType==="drjones-network-request"?n=this.#o.run(e,{signal:s,selected:this.#t.selectedNetworkRequest}):this.#t.agentType==="drjones-performance"&&(n=this.#c.run(e,{signal:s,selected:this.#t.selectedStackTrace})),!n)return;let i={isLoading:!0};K(Se(ke.answerLoading));for await(const o of n){switch(i.sideEffect=void 0,o.type){case h.QUERYING:{i={isLoading:!0},t.steps.length||t.steps.push(i);break}case h.CONTEXT:{i.title=o.title,i.contextDetails=o.details,i.isLoading=!1,t.steps.at(-1)!==i&&t.steps.push(i);break}case h.TITLE:{i.title=o.title,t.steps.at(-1)!==i&&t.steps.push(i);break}case h.THOUGHT:{i.isLoading=!1,i.thought=o.thought,t.steps.at(-1)!==i&&t.steps.push(i);break}case h.SIDE_EFFECT:{i.isLoading=!1,i.code=o.code,i.sideEffect={onAnswer:o.confirm},t.steps.at(-1)!==i&&t.steps.push(i);break}case h.ACTION:{i.isLoading=!1,i.code=o.code,i.output=o.output,i.canceled=o.canceled,t.steps.at(-1)!==i&&t.steps.push(i);break}case h.ANSWER:{t.suggestions=o.suggestions,t.answer=o.text,t.rpcId=o.rpcId,t.steps.length===1&&t.steps[0].isLoading&&t.steps.pop(),i.isLoading=!1,this.#t.isLoading=!1;break}case h.ERROR:{t.error=o.error,t.rpcId=void 0,this.#t.isLoading=!1;const l=t.steps.at(-1);l&&(o.error==="abort"?l.canceled=!0:l.isLoading&&t.steps.pop())}}this.doUpdate(),this.#a.freestylerChatUi?.scrollToLastMessage()}K(Se(ke.answerReady))}}class Ls{handleAction(e,t){switch(t){case"freestyler.elements-floating-button":case"freestyler.element-panel-context":case"drjones.network-floating-button":case"drjones.network-panel-context":case"drjones.performance-panel-context":case"drjones.sources-floating-button":case"drjones.sources-panel-context":return(async()=>{const s=P.instance().view(U.panelName);s&&(await P.instance().showView(U.panelName),(await s.widget()).handleAction(t))})(),!0}return!1}}function ss(r){r?localStorage.setItem("freestyler_enableServerSideLogging","true"):localStorage.setItem("freestyler_enableServerSideLogging","false")}function ns(){return b.instance().getHostConfig().aidaAvailability?.disallowLogging?!1:localStorage.getItem("freestyler_enableServerSideLogging")!=="false"}globalThis.setFreestylerServerSideLoggingEnabled=ss;export{ye as AI_ASSISTANCE_CSS_CLASS_NAME,Ls as ActionDelegate,A as AiAgent,Re as ChangeManager,Tt as DrJonesFileAgent,At as DrJonesNetworkAgent,Ot as DrJonesPerformanceAgent,j as ExecutionError,Mt as ExtensionScope,Fs as FOR_TEST,H as FREESTYLER_BINDING_NAME,He as FREESTYLER_WORLD_NAME,W as FreestylerAgent,qe as FreestylerChatUi,Gt as FreestylerEvaluateAction,U as FreestylerPanel,Ht as ProvideFeedback,h as ResponseType,je as SideEffectError,Nt as allowHeader,B as debugLog,J as formatHeaders,Rt as formatNetworkRequest,Le as formatNetworkRequestTiming,ae as isDebugMode};
//# sourceMappingURL=freestyler-KkBDxW0S.js.map
