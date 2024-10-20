import{nc as lc,aP as je,nQ as Eo,b as et,g as tt,aj as ot,cm as xo,aq as js,i as xt,dt as bs,aR as Xt,a$ as Co,fc as Pr,ar as Lt,ev as dc,mY as Pt,en as Bs,dn as To,f3 as uc,ir as Yt,cB as In,dP as Ss,aS as zi,j3 as hc,cn as pc,bG as Hr,fh as _o,bf as fc,aO as lt,db as qs,bO as mi,b2 as ks,bh as Hs,bM as Ye,aN as ge,b6 as Ar,nR as ri,u as J,b0 as Ro,bx as $n,b1 as Ct,bn as Gt,bi as gc,bz as Io,fP as mc,X as Pn,eh as yc,ag as An,cJ as wc,b4 as vc,nS as bc,nT as $o,nU as Po,nV as Ao,nW as Fo,bZ as Ue,k6 as Sc,jv as kc,cb as Ec,cc as xc,i1 as Cc,b_ as Tc,bH as Es,hJ as _c,nX as Rc,a as Ic,co as Fn,hN as $c,cM as Pc,fi as Gi,nM as Ac,bd as Fc,bp as Nc,cH as Nn,V as Dn}from"./inspector-CyOA7R9n.js";import{D as Dc}from"./emulation-CRgKT_2f.js";import{Q as Mc}from"./CompatibilityTracksAppender-Bm26C5B2.js";import"./timelineOverviewInfo.css-BT4HnMd6.js";import"./PreviewFactory-7rWtg079.js";import"./PaintProfilerView-caNlpRTi.js";import{n as Lc}from"./directives-BpSiwtWR.js";import"./SplitView-C2CpDj9e.js";import"./ShortcutDialog-D3xyB3nU.js";import{a as Ji}from"./SelectMenu-BqCYT45A.js";import"./PanelIntroductionSteps-BeLT2-qM.js";import"./PreviewToggle-D6BBIbZ3.js";import{S as Qi}from"./SuggestionInput-B0LkVm1Q.js";import"./RootView-hYGHqrG8.js";import"./DeviceModeModel-fDJ3OPwb.js";import"./mobile_throttling-CIMam4T2.js";import"./ModelImpl-DjdwMiMr.js";import"./DataGridController-DdQqp2ti.js";import"./MarkdownView-IOiMoU4I.js";import"./Debouncer-BW_30p93.js";import"./UserVisibleError-YMOzvDSx.js";import"./LineLevelProfile-C_ytZbMi.js";import"./DropTarget-DDkHhLsd.js";import"./IsolateManager-NiMHBY0n.js";import"./TimelineOverviewPane-DjPkTYph.js";import"./ScriptFormatter-CdcZyJ9a.js";class Oc{#e=[];#t=null;#r;constructor(e,t){this.#t=e.model(lc),this.#r=t}async start(){if(this.#e.length=0,!this.#t)throw new Error("No tracing manager");const e=["-*","blink.console","blink.user_timing","devtools.timeline","disabled-by-default-devtools.screenshot","disabled-by-default-devtools.timeline","disabled-by-default-devtools.timeline.invalidationTracking","disabled-by-default-devtools.timeline.frame","disabled-by-default-devtools.timeline.stack","disabled-by-default-v8.cpu_profiler","disabled-by-default-v8.cpu_profiler.hires","latencyInfo","loading","disabled-by-default-lighthouse","v8.execute","v8"].join(",");if(!await this.#t.start(this,e,""))throw new Error("Unable to start tracing.")}async stop(){return this.#t?.stop()}getTraceEvents(){return this.#e}traceEventsCollected(e){this.#e.push(...e)}tracingBufferUsage(e){this.#r.tracingBufferUsage(e)}eventsRetrievalProgress(e){this.#r.eventsRetrievalProgress(e)}tracingComplete(){this.#r.tracingComplete(this.#e)}}const No=new CSSStyleSheet;No.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.control {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.control[disabled] {
  filter: grayscale(100%);
  cursor: auto;
}

.icon {
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--sys-color-error-bright);
  margin-bottom: 8px;
  position: relative;
  transition: background 200ms;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.icon::before {
  --override-white: #fff;

  box-sizing: border-box;
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border: 1px solid var(--override-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--override-white);
}

.icon.square::before {
  border-radius: 0;
}

.icon.circle::before {
  border-radius: 50%;
}

.icon:hover {
  background: color-mix(in sRGB, var(--sys-color-error-bright), var(--sys-color-state-hover-on-prominent) 10%);
}

.icon:active {
  background: color-mix(in sRGB, var(--sys-color-error-bright), var(--sys-color-state-ripple-neutral-on-prominent) 16%);
}

.control[disabled] .icon:hover {
  background: var(--sys-color-error);
}

.label {
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--sys-color-on-surface);
}

/*# sourceURL=controlButton.css */
`);var Pi=function(i,e,t,r){var s=arguments.length,n=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const{html:jc,Decorators:Bc,LitElement:qc}=je,{customElement:Hc,property:Us}=Bc;let Fr=class extends qc{static styles=[No];constructor(){super(),this.label="",this.shape="square",this.disabled=!1}#e=e=>{this.disabled&&(e.stopPropagation(),e.preventDefault())};render(){return jc`
            <button
                @click=${this.#e}
                .disabled=${this.disabled}
                class="control"
            >
                <div class="icon ${this.shape}"></div>
                <div class="label">${this.label}</div>
            </button>
        `}};Pi([Us()],Fr.prototype,"label",void 0);Pi([Us()],Fr.prototype,"shape",void 0);Pi([Us({type:Boolean})],Fr.prototype,"disabled",void 0);Fr=Pi([Hc("devtools-control-button")],Fr);var G;(function(i){i.CSS="css",i.ARIA="aria",i.Text="text",i.XPath="xpath",i.Pierce="pierce"})(G||(G={}));var w;(function(i){i.Change="change",i.Click="click",i.Close="close",i.CustomStep="customStep",i.DoubleClick="doubleClick",i.EmulateNetworkConditions="emulateNetworkConditions",i.Hover="hover",i.KeyDown="keyDown",i.KeyUp="keyUp",i.Navigate="navigate",i.Scroll="scroll",i.SetViewport="setViewport",i.WaitForElement="waitForElement",i.WaitForExpression="waitForExpression"})(w||(w={}));var Ee;(function(i){i.Navigation="navigation"})(Ee||(Ee={}));function Do(i){throw new Error(`Unknown step type: ${i.type}`)}const Mo=new Set(["mouse","pen","touch"]),ar=new Map([["primary","left"],["auxiliary","middle"],["secondary","right"],["back","back"],["forward","forward"]]);function H(i,e){return Object.prototype.hasOwnProperty.call(i,e)?i[e]!==void 0:!1}function Nr(i){return typeof i=="object"&&i!==null}function Tt(i){return typeof i=="string"}function Zt(i){return typeof i=="number"}function er(i){return Array.isArray(i)}function Uc(i){return typeof i=="boolean"}function Vc(i){return er(i)&&i.every(e=>Number.isInteger(e))}function Kc(i){return typeof i=="string"&&Mo.has(i)}function Wc(i){return typeof i=="string"&&ar.has(i)}function Lo(i){if(H(i,"target")&&Tt(i.target))return i.target}function zc(i){if(H(i,"frame")){if(Vc(i.frame))return i.frame;throw new Error("Step `frame` is not an integer array")}}function at(i,e){if(H(i,e)){const t=i[e];if(Zt(t))return t}throw new Error(`Step.${e} is not a number`)}function ii(i,e){if(H(i,e)){const t=i[e];if(Uc(t))return t}throw new Error(`Step.${e} is not a boolean`)}function yi(i,e){if(H(i,e))return at(i,e)}function Dr(i,e){if(H(i,e))return mr(i,e)}function Gc(i,e){if(H(i,e))return ii(i,e)}function mr(i,e){if(H(i,e)){const t=i[e];if(Tt(t))return t}throw new Error(`Step.${e} is not a string`)}function Oo(i){if(!H(i,"selectors"))throw new Error("Step does not have required selectors");if(!er(i.selectors))throw new Error("Step selectors are not an array");if(i.selectors.length===0)throw new Error("Step does not have required selectors");return i.selectors.map(e=>{if(!Tt(e)&&!er(e))throw new Error("Selector is not an array or string");return er(e)?e.map(t=>{if(!Tt(t))throw new Error("Selector element is not a string");return t}):e})}function Jc(i){if(H(i,"selectors"))return Oo(i)}function Qc(i){if(!Nr(i))throw new Error("Asserted event is not an object");if(!H(i,"type"))throw new Error("Asserted event is missing type");if(i.type===Ee.Navigation)return{type:Ee.Navigation,url:Dr(i,"url"),title:Dr(i,"title")};throw new Error("Unknown assertedEvent type")}function Xc(i){if(er(i))return i.map(Qc)}function Yc(i,e){if(H(e,"timeout")&&Zt(e.timeout)&&!Vo(e.timeout))throw new Error(Uo);return{type:i,assertedEvents:H(e,"assertedEvents")?Xc(e.assertedEvents):void 0,timeout:H(e,"timeout")&&Zt(e.timeout)?e.timeout:void 0}}function Bt(i,e){return{...Yc(i,e),target:Lo(e)}}function Ai(i,e){return{...Bt(i,e),frame:zc(e)}}function Ur(i,e){return{...Ai(i,e),selectors:Oo(e)}}function jo(i){const e={offsetX:at(i,"offsetX"),offsetY:at(i,"offsetY"),duration:yi(i,"duration")},t=Dr(i,"deviceType");if(t){if(!Kc(t))throw new Error(`'deviceType' for click steps must be one of the following: ${[...Mo].join(", ")}`);e.deviceType=t}const r=Dr(i,"button");if(r){if(!Wc(r))throw new Error(`'button' for click steps must be one of the following: ${[...ar.keys()].join(", ")}`);e.button=r}return e}function Zc(i){return{...Ur(w.Click,i),...jo(i),type:w.Click}}function el(i){return{...Ur(w.DoubleClick,i),...jo(i),type:w.DoubleClick}}function tl(i){return{...Ur(w.Hover,i),type:w.Hover}}function rl(i){return{...Ur(w.Change,i),type:w.Change,value:mr(i,"value")}}function il(i){return{...Bt(w.KeyDown,i),type:w.KeyDown,key:mr(i,"key")}}function sl(i){return{...Bt(w.KeyUp,i),type:w.KeyUp,key:mr(i,"key")}}function nl(i){return{...Bt(w.EmulateNetworkConditions,i),type:w.EmulateNetworkConditions,download:at(i,"download"),upload:at(i,"upload"),latency:at(i,"latency")}}function ol(i){return{...Bt(w.Close,i),type:w.Close}}function al(i){return{...Bt(w.SetViewport,i),type:w.SetViewport,width:at(i,"width"),height:at(i,"height"),deviceScaleFactor:at(i,"deviceScaleFactor"),isMobile:ii(i,"isMobile"),hasTouch:ii(i,"hasTouch"),isLandscape:ii(i,"isLandscape")}}function cl(i){return{...Ai(w.Scroll,i),type:w.Scroll,x:yi(i,"x"),y:yi(i,"y"),selectors:Jc(i)}}function ll(i){return{...Bt(w.Navigate,i),type:w.Navigate,target:Lo(i),url:mr(i,"url")}}function dl(i){const e=Dr(i,"operator");if(e&&e!==">="&&e!=="=="&&e!=="<=")throw new Error("WaitForElement step's operator is not one of '>=','==','<='");if(H(i,"attributes")&&(!Nr(i.attributes)||Object.values(i.attributes).some(t=>typeof t!="string")))throw new Error("WaitForElement step's attribute is not a dictionary of strings");if(H(i,"properties")&&!Nr(i.properties))throw new Error("WaitForElement step's attribute is not an object");return{...Ur(w.WaitForElement,i),type:w.WaitForElement,operator:e,count:yi(i,"count"),visible:Gc(i,"visible"),attributes:H(i,"attributes")?i.attributes:void 0,properties:H(i,"properties")?i.properties:void 0}}function ul(i){if(!H(i,"expression"))throw new Error("waitForExpression step is missing `expression`");return{...Ai(w.WaitForExpression,i),type:w.WaitForExpression,expression:mr(i,"expression")}}function hl(i){if(!H(i,"name"))throw new Error("customStep is missing name");if(!Tt(i.name))throw new Error("customStep's name is not a string");return{...Ai(w.CustomStep,i),type:w.CustomStep,name:i.name,parameters:H(i,"parameters")?i.parameters:void 0}}function Bo(i,e){if(!Nr(i))throw new Error(e?`Step ${e} is not an object`:"Step is not an object");if(!H(i,"type"))throw new Error(e?`Step ${e} does not have a type`:"Step does not have a type");if(!Tt(i.type))throw new Error(e?`Type of the step ${e} is not a string`:"Type of the step is not a string");switch(i.type){case w.Click:return Zc(i);case w.DoubleClick:return el(i);case w.Hover:return tl(i);case w.Change:return rl(i);case w.KeyDown:return il(i);case w.KeyUp:return sl(i);case w.EmulateNetworkConditions:return nl(i);case w.Close:return ol(i);case w.SetViewport:return al(i);case w.Scroll:return cl(i);case w.Navigate:return ll(i);case w.CustomStep:return hl(i);case w.WaitForElement:return dl(i);case w.WaitForExpression:return ul(i);default:throw new Error(`Step type ${i.type} is not supported`)}}function pl(i){const e=[];if(!er(i))throw new Error("Recording `steps` is not an array");for(const[t,r]of i.entries())e.push(Bo(r,t));return e}function fl(i){return JSON.parse(JSON.stringify(i))}const qo=1,Ho=3e4,Uo=`Timeout is not between ${qo} and ${Ho} milliseconds`;function Vo(i){return i>=qo&&i<=Ho}function gl(i){if(!Nr(i))throw new Error("Recording is not an object");if(!H(i,"title"))throw new Error("Recording is missing `title`");if(!Tt(i.title))throw new Error("Recording `title` is not a string");if(H(i,"timeout")&&!Zt(i.timeout))throw new Error("Recording `timeout` is not a number");if(!H(i,"steps"))throw new Error("Recording is missing `steps`");if(H(i,"timeout")&&Zt(i.timeout)&&!Vo(i.timeout))throw new Error(Uo);return fl({title:i.title,timeout:H(i,"timeout")&&Zt(i.timeout)?i.timeout:void 0,selectorAttribute:H(i,"selectorAttribute")&&Tt(i.selectorAttribute)?i.selectorAttribute:void 0,steps:pl(i.steps)})}function ml(i){for(const e of Object.values(G))if(i.startsWith(`${e}/`))return e;return G.CSS}function zt(i){Array.isArray(i)||(i=[i]);function e(r){return r.replace(/['"()]/g,"\\$&")}return i.map(r=>{switch(ml(r)){case G.ARIA:return`::-p-aria(${e(r.substring(G.ARIA.length+1))})`;case G.CSS:return r;case G.XPath:return`::-p-xpath(${e(r.substring(G.XPath.length+1))})`;case G.Pierce:return`:scope >>> ${r.substring(G.Pierce.length+1)}`;case G.Text:return`::-p-text(${e(r.substring(G.Text.length+1))})`}}).join(" >>>> ")}class Vs{async beforeAllSteps(e,t){}async afterAllSteps(e,t){}async beforeEachStep(e,t,r){}async stringifyStep(e,t,r){}async afterEachStep(e,t,r){}}class Mn extends Vs{async beforeAllSteps(e,t){const r={...t,steps:void 0},n=JSON.stringify(r,null,e.getIndent()).split(`
`);n.pop(),n[n.length-1]+=",",n.push(e.getIndent()+'"steps": ['),e.appendLine(n.join(`
`)).startBlock().startBlock()}async afterAllSteps(e){e.endBlock().endBlock().appendLine(e.getIndent()+"]").appendLine("}")}async stringifyStep(e,t,r){const s=JSON.stringify(t,null,e.getIndent());if(!r){e.appendLine(s);return}const n=r.steps.lastIndexOf(t)===r.steps.length-1?"":",";e.appendLine(s+n)}}class Ko{#e;#t=0;#r=[];constructor(e){this.#e=e}appendLine(e){const t=e.split(`
`).map(r=>r?this.#e.repeat(this.#t)+r.trimEnd():"");return this.#r.push(...t),this}startBlock(){return this.#t++,this}endBlock(){if(this.#t--,this.#t<0)throw new Error("Extra endBlock");return this}toString(){return this.#r.join(`
`)+`
`}getIndent(){return this.#e}getSize(){return this.#r.length}}function Me(i,e){const t=[];return xs(i,t,1,e),t.join("")}function xs(i,e=[],t=1,r="  "){switch(typeof i){case"bigint":case"symbol":case"function":case"undefined":throw new Error("Invalid JSON");case"number":case"boolean":e.push(String(i));break;case"string":e.push(yl(i));break;case"object":{if(i===null)e.push("null");else if(Array.isArray(i)){e.push(`[
`);for(let s=0;s<i.length;s++)e.push(r.repeat(t)),xs(i[s],e,t+1,r),s!==i.length-1&&e.push(","),e.push(`
`);e.push(r.repeat(t-1)+"]")}else{e.push(`{
`);const s=Object.keys(i);for(let n=0;n<s.length;n++){const o=s[n],a=i[o];a!==void 0&&(e.push(r.repeat(t)),e.push(o),e.push(": "),xs(a,e,t+1,r),n!==s.length-1&&e.push(","),e.push(`
`))}e.push(r.repeat(t-1)+"}")}break}default:throw new Error("Unknown object type")}return e}const Ln=(i,e)=>i.toString(16).toUpperCase().padStart(e,"0"),Xi=new Map([["\b","\\b"],["\f","\\f"],[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\v","\\v"],["'","\\'"],["\\","\\\\"],["<!--","\\x3C!--"],["<script","\\x3Cscript"],["<\/script","\\x3C/script"]]),yl=i=>{const e=/(\\|<(?:!--|\/?script))|(\p{Control})|(\p{Surrogate})/gu,t=/(\\|'|<(?:!--|\/?script))|(\p{Control})|(\p{Surrogate})/gu,r=(o,a,c,l)=>c?Xi.has(c)?Xi.get(c):"\\x"+Ln(c.charCodeAt(0),2):l?"\\u"+Ln(l.charCodeAt(0),4):a?Xi.get(a)||"":o;let s="",n="";return i.includes("'")?i.includes('"')?!i.includes("`")&&!i.includes("${")?(n="`",s=i.replace(e,r)):(n="'",s=i.replace(t,r)):(n='"',s=i.replace(e,r)):(n="'",s=i.replace(e,r)),`${n}${s}${n}`};class Vr extends Vs{#e=!1;#t;constructor(e="chrome"){super(),this.#t=e}async beforeAllSteps(e,t){e.appendLine("const puppeteer = require('puppeteer'); // v23.0.0 or later"),e.appendLine(""),e.appendLine("(async () => {").startBlock(),this.#t==="firefox"?e.appendLine("const browser = await puppeteer.launch({browser: 'firefox'});"):e.appendLine("const browser = await puppeteer.launch();"),e.appendLine("const page = await browser.newPage();"),e.appendLine(`const timeout = ${t.timeout||wl};`),e.appendLine("page.setDefaultTimeout(timeout);"),e.appendLine(""),this.#e=!1}async afterAllSteps(e,t){if(e.appendLine(""),e.appendLine("await browser.close();"),e.appendLine(""),this.#e)for(const r of vl.split(`
`))e.appendLine(r);e.endBlock().appendLine("})().catch(err => {").startBlock(),e.appendLine("console.error(err);"),e.appendLine("process.exit(1);"),e.endBlock().appendLine("});")}async stringifyStep(e,t,r){e.appendLine("{").startBlock(),t.timeout!==void 0&&e.appendLine(`const timeout = ${t.timeout};`),this.#s(e,t);const s=t.assertedEvents&&t.type!==w.Navigate;if(s){e.appendLine("const promises = [];"),e.appendLine("const startWaitingForEvents = () => {").startBlock();for(const n of t.assertedEvents)switch(n.type){case Ee.Navigation:{e.appendLine(`promises.push(${"frame"in t&&t.frame?"frame":"targetPage"}.waitForNavigation());`);break}default:throw new Error(`Event type ${n.type} is not supported`)}e.endBlock().appendLine("}")}this.#y(e,t),s&&e.appendLine("await Promise.all(promises);"),e.endBlock().appendLine("}")}#r(e,t){t==="main"?e.appendLine("const targetPage = page;"):(e.appendLine(`const target = await browser.waitForTarget(t => t.url() === ${Me(t,e.getIndent())}, { timeout });`),e.appendLine("const targetPage = await target.page();"),e.appendLine("targetPage.setDefaultTimeout(timeout);"))}#i(e,t){e.appendLine("let frame = targetPage.mainFrame();");for(const r of t)e.appendLine(`frame = frame.childFrames()[${r}];`)}#s(e,t){this.#r(e,t.target||"main"),t.frame&&this.#i(e,t.frame)}#n(e,t,r){e.appendLine("await puppeteer.Locator.race([").startBlock(),e.appendLine(t.selectors.map(s=>`${t.frame?"frame":"targetPage"}.locator(${Me(zt(s),e.getIndent())})`).join(`,
`)),e.endBlock().appendLine("])"),e.startBlock().appendLine(".setTimeout(timeout)"),t.assertedEvents?.length&&e.appendLine(".on('action', () => startWaitingForEvents())"),r(),e.endBlock()}#o(e,t){this.#n(e,t,()=>{e.appendLine(".click({"),t.duration&&e.appendLine(`  delay: ${t.duration},`),t.button&&e.appendLine(`  button: '${ar.get(t.button)}',`),e.appendLine("  offset: {"),e.appendLine(`    x: ${t.offsetX},`),e.appendLine(`    y: ${t.offsetY},`),e.appendLine("  },"),e.appendLine("});")})}#a(e,t){this.#n(e,t,()=>{e.appendLine(".click({"),e.appendLine("  count: 2,"),t.duration&&e.appendLine(`  delay: ${t.duration},`),t.button&&e.appendLine(`  button: '${ar.get(t.button)}',`),e.appendLine("  offset: {"),e.appendLine(`    x: ${t.offsetX},`),e.appendLine(`    y: ${t.offsetY},`),e.appendLine("  },"),e.appendLine("});")})}#c(e,t){this.#n(e,t,()=>{e.appendLine(".hover();")})}#l(e,t){this.#n(e,t,()=>{e.appendLine(`.fill(${Me(t.value,e.getIndent())});`)})}#u(e,t){e.appendLine("await targetPage.emulateNetworkConditions({"),e.appendLine(`  offline: ${!t.download&&!t.upload},`),e.appendLine(`  downloadThroughput: ${t.download},`),e.appendLine(`  uploadThroughput: ${t.upload},`),e.appendLine(`  latency: ${t.latency},`),e.appendLine("});")}#d(e,t){e.appendLine(`await targetPage.keyboard.down(${Me(t.key,e.getIndent())});`)}#h(e,t){e.appendLine(`await targetPage.keyboard.up(${Me(t.key,e.getIndent())});`)}#p(e,t){e.appendLine("await targetPage.close()")}#f(e,t){e.appendLine(`await targetPage.setViewport(${Me({width:t.width,height:t.height},e.getIndent())})`)}#g(e,t){"selectors"in t?this.#n(e,t,()=>{e.appendLine(`.scroll({ scrollTop: ${t.y}, scrollLeft: ${t.x}});`)}):e.appendLine(`await targetPage.evaluate((x, y) => { window.scroll(x, y); }, ${t.x}, ${t.y})`)}#y(e,t){switch(t.type){case w.Click:return this.#o(e,t);case w.DoubleClick:return this.#a(e,t);case w.Hover:return this.#c(e,t);case w.Change:return this.#l(e,t);case w.EmulateNetworkConditions:return this.#u(e,t);case w.KeyDown:return this.#d(e,t);case w.KeyUp:return this.#h(e,t);case w.Close:return this.#p(e,t);case w.SetViewport:return this.#f(e,t);case w.Scroll:return this.#g(e,t);case w.Navigate:return this.#m(e,t);case w.WaitForElement:return this.#v(e,t);case w.WaitForExpression:return this.#b(e,t);case w.CustomStep:return;default:return Do(t)}}#m(e,t){e.appendLine(`await targetPage.goto(${Me(t.url,e.getIndent())});`)}#b(e,t){e.appendLine(`await ${t.frame?"frame":"targetPage"}.waitForFunction(${Me(t.expression,e.getIndent())}, { timeout });`)}#v(e,t){this.#e=!0,e.appendLine(`await waitForElement(${Me(t,e.getIndent())}, ${t.frame?"frame":"targetPage"}, timeout);`)}}const wl=5e3,vl=`async function waitForElement(step, frame, timeout) {
  const {
    count = 1,
    operator = '>=',
    visible = true,
    properties,
    attributes,
  } = step;
  const compFn = {
    '==': (a, b) => a === b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
  }[operator];
  await waitForFunction(async () => {
    const elements = await querySelectorsAll(step.selectors, frame);
    let result = compFn(elements.length, count);
    const elementsHandle = await frame.evaluateHandle((...elements) => {
      return elements;
    }, ...elements);
    await Promise.all(elements.map((element) => element.dispose()));
    if (result && (properties || attributes)) {
      result = await elementsHandle.evaluate(
        (elements, properties, attributes) => {
          for (const element of elements) {
            if (attributes) {
              for (const [name, value] of Object.entries(attributes)) {
                if (element.getAttribute(name) !== value) {
                  return false;
                }
              }
            }
            if (properties) {
              if (!isDeepMatch(properties, element)) {
                return false;
              }
            }
          }
          return true;

          function isDeepMatch(a, b) {
            if (a === b) {
              return true;
            }
            if ((a && !b) || (!a && b)) {
              return false;
            }
            if (!(a instanceof Object) || !(b instanceof Object)) {
              return false;
            }
            for (const [key, value] of Object.entries(a)) {
              if (!isDeepMatch(value, b[key])) {
                return false;
              }
            }
            return true;
          }
        },
        properties,
        attributes
      );
    }
    await elementsHandle.dispose();
    return result === visible;
  }, timeout);
}

async function querySelectorsAll(selectors, frame) {
  for (const selector of selectors) {
    const result = await querySelectorAll(selector, frame);
    if (result.length) {
      return result;
    }
  }
  return [];
}

async function querySelectorAll(selector, frame) {
  if (!Array.isArray(selector)) {
    selector = [selector];
  }
  if (!selector.length) {
    throw new Error('Empty selector provided to querySelectorAll');
  }
  let elements = [];
  for (let i = 0; i < selector.length; i++) {
    const part = selector[i];
    if (i === 0) {
      elements = await frame.$$(part);
    } else {
      const tmpElements = elements;
      elements = [];
      for (const el of tmpElements) {
        elements.push(...(await el.$$(part)));
      }
    }
    if (elements.length === 0) {
      return [];
    }
    if (i < selector.length - 1) {
      const tmpElements = [];
      for (const el of elements) {
        const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        if (newEl) {
          tmpElements.push(newEl);
        }
      }
      elements = tmpElements;
    }
  }
  return elements;
}

async function waitForFunction(fn, timeout) {
  let isActive = true;
  const timeoutId = setTimeout(() => {
    isActive = false;
  }, timeout);
  while (isActive) {
    const result = await fn();
    if (result) {
      clearTimeout(timeoutId);
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Timed out');
}`,Wo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bl=Wo.split("").reduce((i,e,t)=>(i.set(e,t),i),new Map),zo=31,Go=32,On=2147483647;function Sl(i){if(i<0)throw new Error("Only postive integers and zero are supported");if(i>On)throw new Error("Only integers between 0 and "+On+" are supported");const e=[];do{let t=i&zo;i>>>=5,i>0&&(t|=Go),e.push(Wo[t])}while(i!==0);return e.join("")}function kl(i){const e=[];for(const t of i)e.push(Sl(t));return e.join("")}function El(i){const e=[],t=i.split("");let r=0,s=0;for(const n of t){const o=bl.get(n);r|=(o&zo)<<s,s+=5,o&Go||(e.push(r),r=0,s=0)}return e}const Ks="//# recorderSourceMap=";async function Fi(i,e){e||(e={});const t=e.extension??new Vr,r=e.writer??new Ko(e.indentation??"  ");await t.beforeAllSteps?.(r,i);const s=[1];for(const n of i.steps){const o=r.getSize();await t.beforeEachStep?.(r,n,i),await t.stringifyStep(r,n,i),await t.afterEachStep?.(r,n,i);const a=r.getSize();s.push(o,a-o)}return await t.afterAllSteps?.(r,i),r.appendLine(Ks+kl(s)),r.toString()}async function Ni(i,e){e||(e={});let t=e.extension;t||(t=new Vr),e.indentation||(e.indentation="  ");const r=e.writer??new Ko(e.indentation??"  ");return await t.beforeEachStep?.(r,i),await t.stringifyStep(r,i),await t.afterEachStep?.(r,i),r.toString()}function Jo(i){return i.trim().startsWith(Ks)}function Kr(i){const e=i.split(`
`);for(let t=e.length-1;t>=0;t--){const r=e[t];if(Jo(r))return El(r.trim().substring(Ks.length))}}function Wr(i){return i.split(`
`).filter(t=>!Jo(t)).join(`
`)}class Cs{async beforeAllSteps(e){}async afterAllSteps(e){}async beforeEachStep(e,t){}async runStep(e,t){}async afterEachStep(e,t){}}const xl={"==":(i,e)=>i===e,">=":(i,e)=>i>=e,"<=":(i,e)=>i<=e};function jn(i){return new Promise(e=>{setTimeout(e,i)})}class Qo extends Cs{browser;page;timeout;constructor(e,t,r){super(),this.browser=e,this.page=t,this.timeout=r?.timeout||5e3}async#e(e){try{await e._client().send("Emulation.setAutomationOverride",{enabled:!0})}catch{}}#t(e,t){return e.timeout||t?.timeout||this.timeout}async runStep(e,t){const r=this.#t(e,t),s=this.page,n=this.browser,o=await _l(n,s,e,r);let a=null;!o&&e.target&&(a=await s.waitForFrame(e.target,{timeout:r}));const c=a||o;if(!c)throw new Error("Target is not found for step: "+JSON.stringify(e));await this.#e(c);const l=await Tl(c,e);await this.runStepInFrame(e,s,c,l,r)}async runStepInFrame(e,t,r,s,n){let o=null;const a=()=>{o=Rl(s,e,n)},c=this.page.locatorRace;switch(e.type){case w.DoubleClick:await c(e.selectors.map(l=>s.locator(zt(l)))).setTimeout(n).on("action",()=>a()).click({count:2,button:e.button&&ar.get(e.button),delay:e.duration,offset:{x:e.offsetX,y:e.offsetY}});break;case w.Click:await c(e.selectors.map(l=>s.locator(zt(l)))).setTimeout(n).on("action",()=>a()).click({delay:e.duration,button:e.button&&ar.get(e.button),offset:{x:e.offsetX,y:e.offsetY}});break;case w.Hover:await c(e.selectors.map(l=>s.locator(zt(l)))).setTimeout(n).on("action",()=>a()).hover();break;case w.EmulateNetworkConditions:a(),await t.emulateNetworkConditions(e);break;case w.KeyDown:a(),await t.keyboard.down(e.key),await jn(100);break;case w.KeyUp:a(),await t.keyboard.up(e.key),await jn(100);break;case w.Close:"close"in r&&(a(),await r.close());break;case w.Change:await c(e.selectors.map(l=>s.locator(zt(l)))).on("action",()=>a()).setTimeout(n).fill(e.value);break;case w.SetViewport:{"setViewport"in r&&(a(),await r.setViewport(e));break}case w.Scroll:{"selectors"in e?await c(e.selectors.map(l=>s.locator(zt(l)))).on("action",()=>a()).setTimeout(n).scroll({scrollLeft:e.x||0,scrollTop:e.y||0}):(a(),await s.evaluate((l,d)=>{window.scroll(l,d)},e.x||0,e.y||0));break}case w.Navigate:{a(),await s.goto(e.url);break}case w.WaitForElement:{try{a(),await Il(e,s,n)}catch(l){throw l.message==="Timed out"?new Error("waitForElement timed out. The element(s) could not be found."):l}break}case w.WaitForExpression:{a(),await s.waitForFunction(e.expression,{timeout:n});break}case w.CustomStep:break;default:Do(e)}await o}}class Cl extends Qo{async afterAllSteps(){await this.browser.close()}}async function Tl(i,e){let t="mainFrame"in i?i.mainFrame():i;if("frame"in e&&e.frame)for(const r of e.frame)t=t.childFrames()[r];return t}async function _l(i,e,t,r){if(!t.target||t.target==="main")return e;const n=await(await i.waitForTarget(o=>o.url()===t.target,{timeout:r})).page();return n?(n.setDefaultTimeout(r),n):null}async function Rl(i,e,t){const r=[];if(e.assertedEvents)for(const s of e.assertedEvents)switch(s.type){case Ee.Navigation:{r.push(i.waitForNavigation({timeout:t}));continue}default:throw new Error(`Event type ${s.type} is not supported`)}await Promise.all(r)}async function Il(i,e,t){const{count:r=1,operator:s=">=",visible:n=!0,properties:o,attributes:a}=i,c=xl[s];await Al(async()=>{const l=await $l(i.selectors,e);let d=c(l.length,r);const h=await e.evaluateHandle((...p)=>p,...l);return await Promise.all(l.map(p=>p.dispose())),d&&(o||a)&&(d=await h.evaluate((p,y,b)=>{if(b){for(const S of p)for(const[E,V]of Object.entries(b))if(S.getAttribute(E)!==V)return!1}if(y){for(const S of p)if(!v(y,S))return!1}return!0;function v(S,E){if(S===E)return!0;if(S&&!E||!S&&E||!(S instanceof Object)||!(E instanceof Object))return!1;for(const[V,be]of Object.entries(S))if(!v(be,E[V]))return!1;return!0}},o,a)),await h.dispose(),d===n},t)}async function $l(i,e){for(const t of i){const r=await Pl(t,e);if(r.length)return r}return[]}async function Pl(i,e){if(Array.isArray(i)||(i=[i]),!i.length)throw new Error("Empty selector provided to querySelectorAll");let t=await e.$$(i[0]);if(!t.length)return[];for(const r of i.slice(1,i.length))if(t=(await Promise.all(t.map(async s=>{const n=await s.evaluateHandle(a=>a.shadowRoot?a.shadowRoot:a),o=await n.$$(r);return n.dispose(),s.dispose(),o}))).flat(),!t.length)return[];return t}async function Al(i,e){let t=!0;const r=setTimeout(()=>{t=!1},e);for(;t;){if(await i()){clearTimeout(r);return}await new Promise(n=>setTimeout(n,100))}throw new Error("Timed out")}async function Bn(i,e,t){await i.beforeEachStep?.(e,t),await i.runStep(e,t),await i.afterEachStep?.(e,t)}class Fl{#e;#t;#r=!1;constructor(e){this.#t=e}abort(){this.#r=!0}set flow(e){this.#e=e}async runBeforeAllSteps(e){await this.#t.beforeAllSteps?.(e)}async runAfterAllSteps(e){await this.#t.afterAllSteps?.(e)}async runStep(e){await Bn(this.#t,e)}async run(){if(!this.#e)throw new Error("Set the flow on the runner instance before calling `run`.");const e=this.#e;if(this.#r=!1,await this.#t.beforeAllSteps?.(e),this.#r)return!1;for(const t of e.steps){if(this.#r)return await this.#t.afterAllSteps?.(e),!1;await Bn(this.#t,t,e)}return await this.#t.afterAllSteps?.(e),!0}}async function Nl(i,e){const t=i instanceof Cs?i:e,r=i instanceof Cs?void 0:i,s=new Fl(t??await Dl());return r&&(s.flow=r),s}async function Dl(){const{default:i}=await Eo(async()=>{const{default:r}=await import("puppeteer");return{default:r}},[]),e=await i.launch(),t=await e.newPage();return new Cl(e,t)}class qn extends Vs{async beforeAllSteps(e){e.appendLine("import url from 'url';"),e.appendLine("import { createRunner } from '@puppeteer/replay';"),e.appendLine(""),e.appendLine("export async function run(extension) {").startBlock(),e.appendLine("const runner = await createRunner(extension);"),e.appendLine(""),e.appendLine("await runner.runBeforeAllSteps();"),e.appendLine("")}async afterAllSteps(e){e.appendLine(""),e.appendLine("await runner.runAfterAllSteps();").endBlock().appendLine("}"),e.appendLine(""),e.appendLine("if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {").startBlock().appendLine("run()").endBlock().appendLine("}")}async stringifyStep(e,t){e.appendLine(`await runner.runStep(${Me(t,e.getIndent())});`)}}function Ml(i){return!!(i.type===w.Navigate||i.assertedEvents?.some(e=>e.type===Ee.Navigation))}function Ll(i){for(const e of i.steps)if(e.type===w.SetViewport)return e.isMobile;return!1}class Ol extends Vr{#e=!1;async beforeAllSteps(e,t){e.appendLine("const fs = require('fs');"),await super.beforeAllSteps(e,t),e.appendLine("const lhApi = await import('lighthouse'); // v10.0.0 or later");const r={screenEmulation:{disabled:!0}};e.appendLine(`const flags = ${Me(r,e.getIndent())}`),Ll(t)?e.appendLine("const config = undefined;"):e.appendLine("const config = lhApi.desktopConfig;"),e.appendLine(`const lhFlow = await lhApi.startFlow(page, {name: ${Me(t.title,e.getIndent())}, config, flags});`)}async stringifyStep(e,t,r){if(t.type===w.SetViewport){await super.stringifyStep(e,t,r);return}const s=Ml(t);s?(this.#e&&(e.appendLine("await lhFlow.endTimespan();"),this.#e=!1),e.appendLine("await lhFlow.startNavigation();")):this.#e||(e.appendLine("await lhFlow.startTimespan();"),this.#e=!0),await super.stringifyStep(e,t,r),s&&e.appendLine("await lhFlow.endNavigation();")}async afterAllSteps(e,t){this.#e&&e.appendLine("await lhFlow.endTimespan();"),e.appendLine("const lhFlowReport = await lhFlow.generateReport();"),e.appendLine("fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)"),await super.afterAllSteps(e,t)}}const Xo={defaultRecordingName:"Recording {DATE} at {TIME}"},jl=et("panels/recorder/models/RecorderSettings.ts",Xo),Bl=tt.bind(void 0,jl);class ql{#e=ot.instance().createSetting("recorder-selector-attribute","");#t=ot.instance().createSetting("recorder-panel-replay-speed","normal");#r=ot.instance().createSetting("recorder-panel-replay-extension","");#i=new Map;#s=ot.instance().createSetting("recorder-preferred-copy-format","json");constructor(){for(const e of Object.values(G))this.#i.set(e,ot.instance().createSetting(`recorder-${e}-selector-enabled`,!0))}get selectorAttribute(){return this.#e.get()}set selectorAttribute(e){this.#e.set(e)}get speed(){return this.#t.get()}set speed(e){this.#t.set(e)}get replayExtension(){return this.#r.get()}set replayExtension(e){this.#r.set(e)}get defaultTitle(){const e=new Date;return Bl(Xo.defaultRecordingName,{DATE:e.toLocaleDateString(),TIME:e.toLocaleTimeString()})}get defaultSelectors(){return Object.values(G).filter(e=>this.getSelectorByType(e))}getSelectorByType(e){return this.#i.get(e)?.get()}setSelectorByType(e,t){this.#i.get(e)?.set(t)}get preferredCopyFormat(){return this.#s.get()}set preferredCopyFormat(e){this.#s.set(e)}}class Hl{#e;#t=null;#r;constructor(e=200){this.#r=e,this.#e=new AbortController}#i(){this.#e.abort(),this.#t&&clearTimeout(this.#t),this.#e=new AbortController}#s(e){this.#i(),e()}handleShortcut(e){this.#i(),document.addEventListener("keyup",t=>{xo.eventHasCtrlEquivalentKey(t)&&this.#s(e)},{signal:this.#e.signal}),this.#t=setTimeout(()=>this.#s(e),this.#r)}}var Ts=function(i,e){return Ts=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])},Ts(i,e)};function dt(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ts(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Ul(i,e,t,r){function s(n){return n instanceof t?n:new t(function(o){o(n)})}return new(t||(t=Promise))(function(n,o){function a(d){try{l(r.next(d))}catch(h){o(h)}}function c(d){try{l(r.throw(d))}catch(h){o(h)}}function l(d){d.done?n(d.value):s(d.value).then(a,c)}l((r=r.apply(i,[])).next())})}function Yo(i,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,s,n,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(d){return c([l,d])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(r=1,s&&(n=l[0]&2?s.return:l[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,l[1])).done)return n;switch(s=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,s=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){t.label=l[1];break}if(l[0]===6&&t.label<n[1]){t.label=n[1],n=l;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(l);break}n[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(i,t)}catch(d){l=[6,d],s=0}finally{r=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function cr(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],r=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&r>=i.length&&(i=void 0),{value:i&&i[r++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ot(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var r=t.call(i),s,n=[],o;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)n.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(t=r.return)&&t.call(r)}finally{if(o)throw o.error}}return n}function lr(i,e,t){if(arguments.length===2)for(var r=0,s=e.length,n;r<s;r++)(n||!(r in e))&&(n||(n=Array.prototype.slice.call(e,0,r)),n[r]=e[r]);return i.concat(n||Array.prototype.slice.call(e))}function tr(i){return this instanceof tr?(this.v=i,this):new tr(i)}function Vl(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(i,e||[]),s,n=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(p){r[p]&&(s[p]=function(y){return new Promise(function(b,v){n.push([p,y,b,v])>1||a(p,y)})})}function a(p,y){try{c(r[p](y))}catch(b){h(n[0][3],b)}}function c(p){p.value instanceof tr?Promise.resolve(p.value.v).then(l,d):h(n[0][2],p)}function l(p){a("next",p)}function d(p){a("throw",p)}function h(p,y){p(y),n.shift(),n.length&&a(n[0][0],n[0][1])}}function Kl(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof cr=="function"?cr(i):i[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=i[n]&&function(o){return new Promise(function(a,c){o=i[n](o),s(a,c,o.done,o.value)})}}function s(n,o,a,c){Promise.resolve(c).then(function(l){n({value:l,done:a})},o)}}function z(i){return typeof i=="function"}function Ws(i){var e=function(r){Error.call(r),r.stack=new Error().stack},t=i(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Yi=Ws(function(i){return function(t){i(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(r,s){return s+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function wi(i,e){if(i){var t=i.indexOf(e);0<=t&&i.splice(t,1)}}var zr=function(){function i(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var e,t,r,s,n;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=cr(o),c=a.next();!c.done;c=a.next()){var l=c.value;l.remove(this)}}catch(v){e={error:v}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var d=this.initialTeardown;if(z(d))try{d()}catch(v){n=v instanceof Yi?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var p=cr(h),y=p.next();!y.done;y=p.next()){var b=y.value;try{Hn(b)}catch(v){n=n??[],v instanceof Yi?n=lr(lr([],Ot(n)),Ot(v.errors)):n.push(v)}}}catch(v){r={error:v}}finally{try{y&&!y.done&&(s=p.return)&&s.call(p)}finally{if(r)throw r.error}}}if(n)throw new Yi(n)}},i.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Hn(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},i.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},i.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},i.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&wi(t,e)},i.prototype.remove=function(e){var t=this._finalizers;t&&wi(t,e),e instanceof i&&e._removeParent(this)},i.EMPTY=function(){var e=new i;return e.closed=!0,e}(),i}(),Zo=zr.EMPTY;function ea(i){return i instanceof zr||i&&"closed"in i&&z(i.remove)&&z(i.add)&&z(i.unsubscribe)}function Hn(i){z(i)?i():i.unsubscribe()}var ta={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Wl={setTimeout:function(i,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setTimeout.apply(void 0,lr([i,e],Ot(t)))},clearTimeout:function(i){return clearTimeout(i)},delegate:void 0};function ra(i){Wl.setTimeout(function(){throw i})}function dr(){}function si(i){i()}var zs=function(i){dt(e,i);function e(t){var r=i.call(this)||this;return r.isStopped=!1,t?(r.destination=t,ea(t)&&t.add(r)):r.destination=Ql,r}return e.create=function(t,r,s){return new vi(t,r,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(zr),zl=Function.prototype.bind;function Zi(i,e){return zl.call(i,e)}var Gl=function(){function i(e){this.partialObserver=e}return i.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(r){Jr(r)}},i.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(r){Jr(r)}else Jr(e)},i.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Jr(t)}},i}(),vi=function(i){dt(e,i);function e(t,r,s){var n=i.call(this)||this,o;if(z(t)||!t)o={next:t??void 0,error:r??void 0,complete:s??void 0};else{var a;n&&ta.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return n.unsubscribe()},o={next:t.next&&Zi(t.next,a),error:t.error&&Zi(t.error,a),complete:t.complete&&Zi(t.complete,a)}):o=t}return n.destination=new Gl(o),n}return e}(zs);function Jr(i){ra(i)}function Jl(i){throw i}var Ql={closed:!0,next:dr,error:Jl,complete:dr},Gs=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function _t(i){return i}function Xl(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return ia(i)}function ia(i){return i.length===0?_t:i.length===1?i[0]:function(t){return i.reduce(function(r,s){return s(r)},t)}}var ce=function(){function i(e){e&&(this._subscribe=e)}return i.prototype.lift=function(e){var t=new i;return t.source=this,t.operator=e,t},i.prototype.subscribe=function(e,t,r){var s=this,n=Zl(e)?e:new vi(e,t,r);return si(function(){var o=s,a=o.operator,c=o.source;n.add(a?a.call(n,c):c?s._subscribe(n):s._trySubscribe(n))}),n},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},i.prototype.forEach=function(e,t){var r=this;return t=Un(t),new t(function(s,n){var o=new vi({next:function(a){try{e(a)}catch(c){n(c),o.unsubscribe()}},error:n,complete:s});r.subscribe(o)})},i.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},i.prototype[Gs]=function(){return this},i.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ia(e)(this)},i.prototype.toPromise=function(e){var t=this;return e=Un(e),new e(function(r,s){var n;t.subscribe(function(o){return n=o},function(o){return s(o)},function(){return r(n)})})},i.create=function(e){return new i(e)},i}();function Un(i){var e;return(e=i??ta.Promise)!==null&&e!==void 0?e:Promise}function Yl(i){return i&&z(i.next)&&z(i.error)&&z(i.complete)}function Zl(i){return i&&i instanceof zs||Yl(i)&&ea(i)}function ed(i){return z(i?.lift)}function we(i){return function(e){if(ed(e))return e.lift(function(t){try{return i(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ye(i,e,t,r,s){return new td(i,e,t,r,s)}var td=function(i){dt(e,i);function e(t,r,s,n,o,a){var c=i.call(this,t)||this;return c.onFinalize=o,c.shouldUnsubscribe=a,c._next=r?function(l){try{r(l)}catch(d){t.error(d)}}:i.prototype._next,c._error=n?function(l){try{n(l)}catch(d){t.error(d)}finally{this.unsubscribe()}}:i.prototype._error,c._complete=s?function(){try{s()}catch(l){t.error(l)}finally{this.unsubscribe()}}:i.prototype._complete,c}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;i.prototype.unsubscribe.call(this),!r&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(zs),rd=Ws(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),sa=function(i){dt(e,i);function e(){var t=i.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var r=new Vn(this,this);return r.operator=t,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new rd},e.prototype.next=function(t){var r=this;si(function(){var s,n;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=cr(r.currentObservers),a=o.next();!a.done;a=o.next()){var c=a.value;c.next(t)}}catch(l){s={error:l}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var r=this;si(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=t;for(var s=r.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;si(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var r=t.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var r=this,s=this,n=s.hasError,o=s.isStopped,a=s.observers;return n||o?Zo:(this.currentObservers=null,a.push(t),new zr(function(){r.currentObservers=null,wi(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var r=this,s=r.hasError,n=r.thrownError,o=r.isStopped;s?t.error(n):o&&t.complete()},e.prototype.asObservable=function(){var t=new ce;return t.source=this,t},e.create=function(t,r){return new Vn(t,r)},e}(ce),Vn=function(i){dt(e,i);function e(t,r){var s=i.call(this)||this;return s.destination=t,s.source=r,s}return e.prototype.next=function(t){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.next)===null||s===void 0||s.call(r,t)},e.prototype.error=function(t){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.error)===null||s===void 0||s.call(r,t)},e.prototype.complete=function(){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||r===void 0||r.call(t)},e.prototype._subscribe=function(t){var r,s;return(s=(r=this.source)===null||r===void 0?void 0:r.subscribe(t))!==null&&s!==void 0?s:Zo},e}(sa),Js={now:function(){return(Js.delegate||Date).now()},delegate:void 0},id=function(i){dt(e,i);function e(t,r,s){t===void 0&&(t=1/0),r===void 0&&(r=1/0),s===void 0&&(s=Js);var n=i.call(this)||this;return n._bufferSize=t,n._windowTime=r,n._timestampProvider=s,n._buffer=[],n._infiniteTimeWindow=!0,n._infiniteTimeWindow=r===1/0,n._bufferSize=Math.max(1,t),n._windowTime=Math.max(1,r),n}return e.prototype.next=function(t){var r=this,s=r.isStopped,n=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,c=r._windowTime;s||(n.push(t),!o&&n.push(a.now()+c)),this._trimBuffer(),i.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(t),s=this,n=s._infiniteTimeWindow,o=s._buffer,a=o.slice(),c=0;c<a.length&&!t.closed;c+=n?1:2)t.next(a[c]);return this._checkFinalizedStatuses(t),r},e.prototype._trimBuffer=function(){var t=this,r=t._bufferSize,s=t._timestampProvider,n=t._buffer,o=t._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<n.length&&n.splice(0,n.length-a),!o){for(var c=s.now(),l=0,d=1;d<n.length&&n[d]<=c;d+=2)l=d;l&&n.splice(0,l+1)}},e}(sa),sd=function(i){dt(e,i);function e(t,r){return i.call(this)||this}return e.prototype.schedule=function(t,r){return this},e}(zr),Kn={setInterval:function(i,e){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return setInterval.apply(void 0,lr([i,e],Ot(t)))},clearInterval:function(i){return clearInterval(i)},delegate:void 0},nd=function(i){dt(e,i);function e(t,r){var s=i.call(this,t,r)||this;return s.scheduler=t,s.work=r,s.pending=!1,s}return e.prototype.schedule=function(t,r){var s;if(r===void 0&&(r=0),this.closed)return this;this.state=t;var n=this.id,o=this.scheduler;return n!=null&&(this.id=this.recycleAsyncId(o,n,r)),this.pending=!0,this.delay=r,this.id=(s=this.id)!==null&&s!==void 0?s:this.requestAsyncId(o,this.id,r),this},e.prototype.requestAsyncId=function(t,r,s){return s===void 0&&(s=0),Kn.setInterval(t.flush.bind(t,this),s)},e.prototype.recycleAsyncId=function(t,r,s){if(s===void 0&&(s=0),s!=null&&this.delay===s&&this.pending===!1)return r;r!=null&&Kn.clearInterval(r)},e.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var s=this._execute(t,r);if(s)return s;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,r){var s=!1,n;try{this.work(t)}catch(o){s=!0,n=o||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),n},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,r=t.id,s=t.scheduler,n=s.actions;this.work=this.state=this.scheduler=null,this.pending=!1,wi(n,this),r!=null&&(this.id=this.recycleAsyncId(s,r,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},e}(sd),Wn=function(){function i(e,t){t===void 0&&(t=i.now),this.schedulerActionCtor=e,this.now=t}return i.prototype.schedule=function(e,t,r){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(r,t)},i.now=Js.now,i}(),od=function(i){dt(e,i);function e(t,r){r===void 0&&(r=Wn.now);var s=i.call(this,t,r)||this;return s.actions=[],s._active=!1,s}return e.prototype.flush=function(t){var r=this.actions;if(this._active){r.push(t);return}var s;this._active=!0;do if(s=t.execute(t.state,t.delay))break;while(t=r.shift());if(this._active=!1,s){for(;t=r.shift();)t.unsubscribe();throw s}},e}(Wn),ad=new od(nd),cd=ad,Ft=new ce(function(i){return i.complete()});function ld(i){return i&&z(i.schedule)}function na(i){return i[i.length-1]}function Di(i){return ld(na(i))?i.pop():void 0}function dd(i,e){return typeof na(i)=="number"?i.pop():e}var Qs=function(i){return i&&typeof i.length=="number"&&typeof i!="function"};function oa(i){return z(i?.then)}function aa(i){return z(i[Gs])}function ca(i){return Symbol.asyncIterator&&z(i?.[Symbol.asyncIterator])}function la(i){return new TypeError("You provided "+(i!==null&&typeof i=="object"?"an invalid object":"'"+i+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ud(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var da=ud();function ua(i){return z(i?.[da])}function ha(i){return Vl(this,arguments,function(){var t,r,s,n;return Yo(this,function(o){switch(o.label){case 0:t=i.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,tr(t.read())];case 3:return r=o.sent(),s=r.value,n=r.done,n?[4,tr(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,tr(s)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function pa(i){return z(i?.getReader)}function $e(i){if(i instanceof ce)return i;if(i!=null){if(aa(i))return hd(i);if(Qs(i))return pd(i);if(oa(i))return fd(i);if(ca(i))return fa(i);if(ua(i))return gd(i);if(pa(i))return md(i)}throw la(i)}function hd(i){return new ce(function(e){var t=i[Gs]();if(z(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function pd(i){return new ce(function(e){for(var t=0;t<i.length&&!e.closed;t++)e.next(i[t]);e.complete()})}function fd(i){return new ce(function(e){i.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,ra)})}function gd(i){return new ce(function(e){var t,r;try{for(var s=cr(i),n=s.next();!n.done;n=s.next()){var o=n.value;if(e.next(o),e.closed)return}}catch(a){t={error:a}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}e.complete()})}function fa(i){return new ce(function(e){yd(i,e).catch(function(t){return e.error(t)})})}function md(i){return fa(ha(i))}function yd(i,e){var t,r,s,n;return Ul(this,void 0,void 0,function(){var o,a;return Yo(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),t=Kl(i),c.label=1;case 1:return[4,t.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(o=r.value,e.next(o),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),s={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(n=t.return)?[4,n.call(t)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Nt(i,e,t,r,s){r===void 0&&(r=0),s===void 0&&(s=!1);var n=e.schedule(function(){t(),s?i.add(this.schedule(null,r)):this.unsubscribe()},r);if(i.add(n),!s)return n}function ga(i,e){return e===void 0&&(e=0),we(function(t,r){t.subscribe(ye(r,function(s){return Nt(r,i,function(){return r.next(s)},e)},function(){return Nt(r,i,function(){return r.complete()},e)},function(s){return Nt(r,i,function(){return r.error(s)},e)}))})}function ma(i,e){return e===void 0&&(e=0),we(function(t,r){r.add(i.schedule(function(){return t.subscribe(r)},e))})}function wd(i,e){return $e(i).pipe(ma(e),ga(e))}function vd(i,e){return $e(i).pipe(ma(e),ga(e))}function bd(i,e){return new ce(function(t){var r=0;return e.schedule(function(){r===i.length?t.complete():(t.next(i[r++]),t.closed||this.schedule())})})}function Sd(i,e){return new ce(function(t){var r;return Nt(t,e,function(){r=i[da](),Nt(t,e,function(){var s,n,o;try{s=r.next(),n=s.value,o=s.done}catch(a){t.error(a);return}o?t.complete():t.next(n)},0,!0)}),function(){return z(r?.return)&&r.return()}})}function ya(i,e){if(!i)throw new Error("Iterable cannot be null");return new ce(function(t){Nt(t,e,function(){var r=i[Symbol.asyncIterator]();Nt(t,e,function(){r.next().then(function(s){s.done?t.complete():t.next(s.value)})},0,!0)})})}function kd(i,e){return ya(ha(i),e)}function Ed(i,e){if(i!=null){if(aa(i))return wd(i,e);if(Qs(i))return bd(i,e);if(oa(i))return vd(i,e);if(ca(i))return ya(i,e);if(ua(i))return Sd(i,e);if(pa(i))return kd(i,e)}throw la(i)}function j(i,e){return e?Ed(i,e):$e(i)}function zn(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];var t=Di(i);return j(i,t)}var Xs=Ws(function(i){return function(){i(this),this.name="EmptyError",this.message="no elements in sequence"}});function Ie(i,e){return new Promise(function(t,r){var s=new vi({next:function(n){t(n),s.unsubscribe()},error:r,complete:function(){r(new Xs)}});i.subscribe(s)})}function xd(i){return i instanceof Date&&!isNaN(i)}function Re(i,e){return we(function(t,r){var s=0;t.subscribe(ye(r,function(n){r.next(i.call(e,n,s++))}))})}var Cd=Array.isArray;function Td(i,e){return Cd(e)?i.apply(void 0,lr([],Ot(e))):i(e)}function _d(i){return Re(function(e){return Td(i,e)})}function wa(i,e,t,r,s,n,o,a){var c=[],l=0,d=0,h=!1,p=function(){h&&!c.length&&!l&&e.complete()},y=function(v){return l<r?b(v):c.push(v)},b=function(v){n&&e.next(v),l++;var S=!1;$e(t(v,d++)).subscribe(ye(e,function(E){s?.(E),n?y(E):e.next(E)},function(){S=!0},void 0,function(){if(S)try{l--;for(var E=function(){var V=c.shift();o||b(V)};c.length&&l<r;)E();p()}catch(V){e.error(V)}}))};return i.subscribe(ye(e,y,function(){h=!0,p()})),function(){a?.()}}function pe(i,e,t){return t===void 0&&(t=1/0),z(e)?pe(function(r,s){return Re(function(n,o){return e(r,n,s,o)})($e(i(r,s)))},t):(typeof e=="number"&&(t=e),we(function(r,s){return wa(r,s,i,t)}))}function va(i){return i===void 0&&(i=1/0),pe(_t,i)}function Rd(){return va(1)}function _s(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return Rd()(j(i,Di(i)))}function rr(i){return new ce(function(e){$e(i()).subscribe(e)})}var Id=["addListener","removeListener"],$d=["addEventListener","removeEventListener"],Pd=["on","off"];function Rs(i,e,t,r){if(z(t)&&(r=t,t=void 0),r)return Rs(i,e,t).pipe(_d(r));var s=Ot(Nd(i)?$d.map(function(a){return function(c){return i[a](e,c,t)}}):Ad(i)?Id.map(Gn(i,e)):Fd(i)?Pd.map(Gn(i,e)):[],2),n=s[0],o=s[1];if(!n&&Qs(i))return pe(function(a){return Rs(a,e,t)})($e(i));if(!n)throw new TypeError("Invalid event target");return new ce(function(a){var c=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return a.next(1<l.length?l:l[0])};return n(c),function(){return o(c)}})}function Gn(i,e){return function(t){return function(r){return i[t](e,r)}}}function Ad(i){return z(i.addListener)&&z(i.removeListener)}function Fd(i){return z(i.on)&&z(i.off)}function Nd(i){return z(i.addEventListener)&&z(i.removeEventListener)}function Ys(i,e,t){return i===void 0&&(i=0),t===void 0&&(t=cd),new ce(function(r){var s=xd(i)?+i-t.now():i;s<0&&(s=0);var n=0;return t.schedule(function(){r.closed||(r.next(n++),r.complete())},s)})}function Mr(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];var t=Di(i),r=dd(i,1/0),s=i;return s.length?s.length===1?$e(s[0]):va(r)(j(s,t)):Ft}var ba=new ce(dr),Dd=Array.isArray;function Md(i){return i.length===1&&Dd(i[0])?i[0]:i}function yr(i,e){return we(function(t,r){var s=0;t.subscribe(ye(r,function(n){return i.call(e,n,s++)&&r.next(n)}))})}function Ld(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return i=Md(i),i.length===1?$e(i[0]):new ce(Sa(i))}function Sa(i){return function(e){for(var t=[],r=function(n){t.push($e(i[n]).subscribe(ye(e,function(o){if(t){for(var a=0;a<t.length;a++)a!==n&&t[a].unsubscribe();t=null}e.next(o)})))},s=0;t&&!e.closed&&s<i.length;s++)r(s)}}function xr(i){return we(function(e,t){var r=null,s=!1,n;r=e.subscribe(ye(t,void 0,void 0,function(o){n=$e(i(o,xr(i)(e))),r?(r.unsubscribe(),r=null,n.subscribe(t)):s=!0})),s&&(r.unsubscribe(),r=null,n.subscribe(t))})}function ka(i){return we(function(e,t){var r=!1;e.subscribe(ye(t,function(s){r=!0,t.next(s)},function(){r||t.next(i),t.complete()}))})}function Ea(i){return i<=0?function(){return Ft}:we(function(e,t){var r=0;e.subscribe(ye(t,function(s){++r<=i&&(t.next(s),i<=r&&t.complete())}))})}function ni(){return we(function(i,e){i.subscribe(ye(e,dr))})}function Mi(i){return i===void 0&&(i=Od),we(function(e,t){var r=!1;e.subscribe(ye(t,function(s){r=!0,t.next(s)},function(){return r?t.complete():t.error(i())}))})}function Od(){return new Xs}function bi(i,e){var t=arguments.length>=2;return function(r){return r.pipe(i?yr(function(s,n){return i(s,n,r)}):_t,Ea(1),t?ka(e):Mi(function(){return new Xs}))}}function jd(i,e,t){return t===void 0&&(t=1/0),we(function(r,s){var n=e;return wa(r,s,function(o,a){return i(n,o,a)},t,function(o){n=o},!1,void 0,function(){return n=null})})}function Qe(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return i.length?we(function(t,r){Sa(lr([t],Ot(i)))(r)}):_t}function oi(i){i===void 0&&(i=1/0);var e;i&&typeof i=="object"?e=i:e={count:i};var t=e.count,r=t===void 0?1/0:t,s=e.delay,n=e.resetOnSuccess,o=n===void 0?!1:n;return r<=0?_t:we(function(a,c){var l=0,d,h=function(){var p=!1;d=a.subscribe(ye(c,function(y){o&&(l=0),c.next(y)},void 0,function(y){if(l++<r){var b=function(){d?(d.unsubscribe(),d=null,h()):p=!0};if(s!=null){var v=typeof s=="number"?Ys(s):$e(s(y,l)),S=ye(c,function(){S.unsubscribe(),b()},function(){c.complete()});v.subscribe(S)}else b()}else c.error(y)})),p&&(d.unsubscribe(),d=null,h())};h()})}function Bd(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];var t=Di(i);return we(function(r,s){(t?_s(i,r,t):_s(i,r)).subscribe(s)})}function qd(i,e){return we(function(t,r){var s=null,n=0,o=!1,a=function(){return o&&!s&&r.complete()};t.subscribe(ye(r,function(c){s?.unsubscribe();var l=0,d=n++;$e(i(c,d)).subscribe(s=ye(r,function(h){return r.next(e?e(c,h,d,l++):h)},function(){s=null,a()}))},function(){o=!0,a()}))})}function Hd(i){return we(function(e,t){$e(i).subscribe(ye(t,function(){return t.complete()},dr)),!t.closed&&e.subscribe(t)})}function Qr(i,e,t){var r=z(i)||e||t?{next:i,error:e,complete:t}:i;return r?we(function(s,n){var o;(o=r.subscribe)===null||o===void 0||o.call(r);var a=!0;s.subscribe(ye(n,function(c){var l;(l=r.next)===null||l===void 0||l.call(r,c),n.next(c)},function(){var c;a=!1,(c=r.complete)===null||c===void 0||c.call(r),n.complete()},function(c){var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,c),n.error(c)},function(){var c,l;a&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):_t}function Ud(i){return{all:i=i||new Map,on:function(e,t){var r=i.get(e);r?r.push(t):i.set(e,[t])},off:function(e,t){var r=i.get(e);r&&(t?r.splice(r.indexOf(t)>>>0,1):i.set(e,[]))},emit:function(e,t){var r=i.get(e);r&&r.slice().map(function(s){s(t)}),(r=i.get("*"))&&r.slice().map(function(s){s(e,t)})}}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */Symbol.dispose??=Symbol("dispose");Symbol.asyncDispose??=Symbol("asyncDispose");const U=Symbol.dispose,qe=Symbol.asyncDispose;class rt{#e=!1;#t=[];get disposed(){return this.#e}dispose(){if(!this.#e){this.#e=!0;for(const e of this.#t.reverse())e[U]()}}use(e){return e&&this.#t.push(e),e}adopt(e,t){return this.#t.push({[U](){t(e)}}),e}defer(e){this.#t.push({[U](){e()}})}move(){if(this.#e)throw new ReferenceError("a disposed stack can not use anything new");const e=new rt;return e.#t=this.#t,this.#e=!0,e}[U]=this.dispose;[Symbol.toStringTag]="DisposableStack"}class Li{#e=!1;#t=[];get disposed(){return this.#e}async dispose(){if(!this.#e){this.#e=!0;for(const e of this.#t.reverse())await e[qe]()}}use(e){return e&&this.#t.push(e),e}adopt(e,t){return this.#t.push({[qe](){return t(e)}}),e}defer(e){this.#t.push({[qe](){return e()}})}move(){if(this.#e)throw new ReferenceError("a disposed stack can not use anything new");const e=new Li;return e.#t=this.#t,this.#e=!0,e}[qe]=this.dispose;[Symbol.toStringTag]="AsyncDisposableStack"}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Q{#e;#t=new Map;constructor(e=Ud(new Map)){this.#e=e}on(e,t){const r=this.#t.get(e);return r===void 0?this.#t.set(e,[t]):r.push(t),this.#e.on(e,t),this}off(e,t){const r=this.#t.get(e)??[];if(t===void 0){for(const n of r)this.#e.off(e,n);return this.#t.delete(e),this}const s=r.lastIndexOf(t);return s>-1&&this.#e.off(e,...r.splice(s,1)),this}emit(e,t){return this.#e.emit(e,t),this.listenerCount(e)>0}once(e,t){const r=s=>{t(s),this.off(e,r)};return this.on(e,r)}listenerCount(e){return this.#t.get(e)?.length||0}removeAllListeners(e){return e!==void 0?this.off(e):(this[U](),this)}[U](){for(const[e,t]of this.#t)for(const r of t)this.#e.off(e,r);this.#t.clear()}}/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const Vd=!!(typeof process<"u"&&process.version),Dt={value:{get fs(){throw new Error("fs is not available in this environment")},get path(){throw new Error("path is not available in this environment")},get ScreenRecorder(){throw new Error("ScreenRecorder is not available in this environment")}}},Kd="23.6.0";/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const k=(i,e)=>{if(!i)throw new Error(e)};/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */function xa(i,e=!1){if(e){const t=atob(i);return Uint8Array.from(t,r=>r.codePointAt(0))}return new TextEncoder().encode(i)}function Wd(i){return Ca(new TextEncoder().encode(i))}function Ca(i){const t=[];for(let s=0;s<i.length;s+=65534){const n=i.subarray(s,s+65534);t.push(String.fromCodePoint.apply(null,n))}const r=t.join("");return btoa(r)}function zd(i){let e=0;for(const s of i)e+=s.length;const t=new Uint8Array(e);let r=0;for(const s of i)t.set(s,r),r+=s.length;return t}let es=null;async function Gd(){return es||(es=(await Eo(async()=>{const{default:i}=await import("debug");return{default:i}},[])).default),es}const Zs=i=>Vd?async(...e)=>{(await Gd())(i)(e)}:(...e)=>{const t=globalThis.__PUPPETEER_DEBUG;!t||!(t==="*"||(t.endsWith("*")?i.startsWith(t):i===t))||console.log(`${i}:`,...e)};/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class en extends Error{constructor(e,t){super(e,t),this.name=this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}}class tn extends en{}class Lr extends en{#e;#t="";set code(e){this.#e=e}get code(){return this.#e}set originalMessage(e){this.#t=e}get originalMessage(){return this.#t}}class Ta extends en{}class bt extends Lr{}/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const Jd={letter:{width:8.5,height:11},legal:{width:8.5,height:14},tabloid:{width:11,height:17},ledger:{width:17,height:11},a0:{width:33.1102,height:46.811},a1:{width:23.3858,height:33.1102},a2:{width:16.5354,height:23.3858},a3:{width:11.6929,height:16.5354},a4:{width:8.2677,height:11.6929},a5:{width:5.8268,height:8.2677},a6:{width:4.1339,height:5.8268}};/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const I=Zs("puppeteer:error"),Si=Symbol("Source URL for Puppeteer evaluation scripts");class Ze{static INTERNAL_URL="pptr:internal";static fromCallSite(e,t){const r=new Ze;return r.#e=e,r.#t=t.toString(),r}static parse=e=>{e=e.slice(5);const[t="",r=""]=e.split(";"),s=new Ze;return s.#e=t,s.#t=decodeURIComponent(r),s};static isPuppeteerURL=e=>e.startsWith("pptr:");#e;#t;get functionName(){return this.#e}get siteString(){return this.#t}toString(){return`pptr:${[this.#e,encodeURIComponent(this.#t)].join(";")}`}}const ae=(i,e)=>{if(Object.prototype.hasOwnProperty.call(e,Si))return e;const t=Error.prepareStackTrace;Error.prepareStackTrace=(s,n)=>n[2];const r=new Error().stack;return Error.prepareStackTrace=t,Object.assign(e,{[Si]:Ze.fromCallSite(i,r)})},Qd=i=>{if(Object.prototype.hasOwnProperty.call(i,Si))return i[Si]},qt=i=>typeof i=="string"||i instanceof String,Xd=i=>typeof i=="number"||i instanceof Number;function _a(i,...e){if(qt(i))return k(e.length===0,"Cannot evaluate a string with arguments"),i;function t(r){return Object.is(r,void 0)?"undefined":JSON.stringify(r)}return`(${i})(${e.map(t).join(",")})`}async function Ra(i,e){const t=[],r=i.getReader();if(e){const s=await Dt.value.fs.promises.open(e,"w+");try{for(;;){const{done:n,value:o}=await r.read();if(n)break;t.push(o),await s.writeFile(o)}}finally{await s.close()}}else for(;;){const{done:s,value:n}=await r.read();if(s)break;t.push(n)}try{const s=zd(t);return s.length===0?null:s}catch(s){return I(s),null}}async function Ia(i,e){return new ReadableStream({async pull(t){function r(a,c){return c?Uint8Array.from(atob(a),d=>d.codePointAt(0)):new TextEncoder().encode(a)}const{data:s,base64Encoded:n,eof:o}=await i.send("IO.read",{handle:e});t.enqueue(r(s,n??!1)),o&&(await i.send("IO.close",{handle:e}),t.close())}})}function Yd(i){let e=null;return new Set(["alert","confirm","prompt","beforeunload"]).has(i)&&(e=i),k(e,`Unknown javascript dialog type: ${i}`),e}function Xe(i,e){return i===0?ba:Ys(i).pipe(Re(()=>{throw new tn(`Timed out after waiting ${i}ms`,{cause:e})}))}const Jn="__puppeteer_utility_world__"+Kd,Qn=/^[\x20\t]*\/\/[@#] sourceURL=\s{0,10}(\S*?)\s{0,10}$/m;function Zd(i){return`//# sourceURL=${i}`}const eu=500;function tu(i={},e="in"){const t={scale:1,displayHeaderFooter:!1,headerTemplate:"",footerTemplate:"",printBackground:!1,landscape:!1,pageRanges:"",preferCSSPageSize:!1,omitBackground:!1,outline:!1,tagged:!0,waitForFonts:!0};let r=8.5,s=11;if(i.format){const o=Jd[i.format.toLowerCase()];k(o,"Unknown paper format: "+i.format),r=o.width,s=o.height}else r=Vt(i.width,e)??r,s=Vt(i.height,e)??s;const n={top:Vt(i.margin?.top,e)||0,left:Vt(i.margin?.left,e)||0,bottom:Vt(i.margin?.bottom,e)||0,right:Vt(i.margin?.right,e)||0};return i.outline&&(i.tagged=!0),{...t,...i,width:r,height:s,margin:n}}const ts={px:1,in:96,cm:37.8,mm:3.78};function Vt(i,e="in"){if(typeof i>"u")return;let t;if(Xd(i))t=i;else if(qt(i)){const r=i;let s=r.substring(r.length-2).toLowerCase(),n="";s in ts?n=r.substring(0,r.length-2):(s="px",n=r);const o=Number(n);k(!isNaN(o),"Failed to parse parameter value: "+r),t=o*ts[s]}else throw new Error("page.pdf() Cannot handle parameter type: "+typeof i);return t/ts[e]}function te(i,e){return new ce(t=>{const r=s=>{t.next(s)};return i.on(e,r),()=>{i.off(e,r)}})}function Jt(i,e){return i?Rs(i,"abort").pipe(Re(()=>{throw i.reason instanceof Error?(i.reason.cause=e,i.reason):new Error(i.reason,{cause:e})})):ba}function Tr(i){return pe(e=>j(Promise.resolve(i(e))).pipe(yr(t=>t),Re(()=>e)))}const ru=new Map([["geolocation","geolocation"],["midi","midi"],["notifications","notifications"],["camera","videoCapture"],["microphone","audioCapture"],["background-sync","backgroundSync"],["ambient-light-sensor","sensors"],["accelerometer","sensors"],["gyroscope","sensors"],["magnetometer","sensors"],["accessibility-events","accessibilityEvents"],["clipboard-read","clipboardReadWrite"],["clipboard-write","clipboardReadWrite"],["clipboard-sanitized-write","clipboardSanitizedWrite"],["payment-handler","paymentHandler"],["persistent-storage","durableStorage"],["idle-detection","idleDetection"],["midi-sysex","midiSysex"]]);class iu extends Q{constructor(){super()}async waitForTarget(e,t={}){const{timeout:r=3e4,signal:s}=t;return await Ie(Mr(te(this,"targetcreated"),te(this,"targetchanged"),j(this.targets())).pipe(Tr(e),Qe(Jt(s),Xe(r))))}async pages(){return(await Promise.all(this.browserContexts().map(t=>t.pages()))).reduce((t,r)=>t.concat(r),[])}isConnected(){return this.connected}[U](){return this.process()?void this.close().catch(I):void this.disconnect().catch(I)}[qe](){return this.process()?this.close():this.disconnect()}}var W;(function(i){i.Disconnected=Symbol("CDPSession.Disconnected"),i.Swapped=Symbol("CDPSession.Swapped"),i.Ready=Symbol("CDPSession.Ready"),i.SessionAttached="sessionattached",i.SessionDetached="sessiondetached"})(W||(W={}));class ai extends Q{constructor(){super()}parentSession(){}}/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class B{static create(e){return new B(e)}static async race(e){const t=new Set;try{const r=e.map(s=>s instanceof B?(s.#n&&t.add(s),s.valueOrThrow()):s);return await Promise.race(r)}finally{for(const r of t)r.reject(new Error("Timeout cleared"))}}#e=!1;#t=!1;#r;#i;#s=new Promise(e=>{this.#i=e});#n;#o;constructor(e){e&&e.timeout>0&&(this.#o=new tn(e.message),this.#n=setTimeout(()=>{this.reject(this.#o)},e.timeout))}#a(e){clearTimeout(this.#n),this.#r=e,this.#i()}resolve(e){this.#t||this.#e||(this.#e=!0,this.#a(e))}reject(e){this.#t||this.#e||(this.#t=!0,this.#a(e))}resolved(){return this.#e}finished(){return this.#e||this.#t}value(){return this.#r}#c;valueOrThrow(){return this.#c||(this.#c=(async()=>{if(await this.#s,this.#t)throw this.#r;return this.#r})()),this.#c}}/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class ur{static Guard=class{#r;#i;constructor(t,r){this.#r=t,this.#i=r}[U](){return this.#i?.(),this.#r.release()}};#e=!1;#t=[];async acquire(e){if(!this.#e)return this.#e=!0,new ur.Guard(this);const t=B.create();return this.#t.push(t.resolve.bind(t)),await t.valueOrThrow(),new ur.Guard(this,e)}release(){const e=this.#t.shift();if(!e){this.#e=!1;return}e()}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class su extends Q{constructor(){super()}#e;#t=0;startScreenshot(){const e=this.#e||new ur;return this.#e=e,this.#t++,e.acquire(()=>{this.#t--,this.#t===0&&(this.#e=void 0)})}waitForScreenshotOperations(){return this.#e?.acquire()}async waitForTarget(e,t={}){const{timeout:r=3e4}=t;return await Ie(Mr(te(this,"targetcreated"),te(this,"targetchanged"),j(this.targets())).pipe(Tr(e),Qe(Xe(r))))}get closed(){return!this.browser().browserContexts().includes(this)}get id(){}[U](){return void this.close().catch(I)}[qe](){return this.close()}}/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var nu=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},ou=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});class rs extends su{#e;#t;#r;constructor(e,t,r){super(),this.#e=e,this.#t=t,this.#r=r}get id(){return this.#r}targets(){return this.#t.targets().filter(e=>e.browserContext()===this)}async pages(){return(await Promise.all(this.targets().filter(t=>t.type()==="page"||t.type()==="other"&&this.#t._getIsPageTargetCallback()?.(t)).map(t=>t.page()))).filter(t=>!!t)}async overridePermissions(e,t){const r=t.map(s=>{const n=ru.get(s);if(!n)throw new Error("Unknown permission: "+s);return n});await this.#e.send("Browser.grantPermissions",{origin:e,browserContextId:this.#r||void 0,permissions:r})}async clearPermissionOverrides(){await this.#e.send("Browser.resetPermissions",{browserContextId:this.#r||void 0})}async newPage(){const e={stack:[],error:void 0,hasError:!1};try{const t=nu(e,await this.waitForScreenshotOperations(),!1);return await this.#t._createPageInContext(this.#r)}catch(t){e.error=t,e.hasError=!0}finally{ou(e)}}browser(){return this.#t}async close(){k(this.#r,"Default BrowserContext cannot be closed!"),await this.#t._disposeContext(this.#r)}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var Ne;(function(i){i.PAGE="page",i.BACKGROUND_PAGE="background_page",i.SERVICE_WORKER="service_worker",i.SHARED_WORKER="shared_worker",i.BROWSER="browser",i.WEBVIEW="webview",i.OTHER="other",i.TAB="tab"})(Ne||(Ne={}));class au{constructor(){}async worker(){return null}async page(){return null}}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */function ct(i){return typeof i=="object"&&i!==null&&"name"in i&&"message"in i}function $a(i,e,t){return i.message=e,i.originalMessage=t??i.originalMessage,i}function Pa(i){let e=i.error.message;return i.error&&typeof i.error=="object"&&"data"in i.error&&(e+=` ${i.error.data}`),e}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Aa{#e=new Map;#t=lu();create(e,t,r){const s=new cu(this.#t(),e,t);this.#e.set(s.id,s);try{r(s.id)}catch(n){throw s.promise.catch(I).finally(()=>{this.#e.delete(s.id)}),s.reject(n),n}return s.promise.finally(()=>{this.#e.delete(s.id)})}reject(e,t,r){const s=this.#e.get(e);s&&this._reject(s,t,r)}_reject(e,t,r){let s,n;t instanceof Lr?(s=t,s.cause=e.error,n=t.message):(s=e.error,n=t),e.reject($a(s,`Protocol error (${e.label}): ${n}`,r))}resolve(e,t){const r=this.#e.get(e);r&&r.resolve(t)}clear(){for(const e of this.#e.values())this._reject(e,new bt("Target closed"));this.#e.clear()}getPendingProtocolErrors(){const e=[];for(const t of this.#e.values())e.push(new Error(`${t.label} timed out. Trace: ${t.error.stack}`));return e}}class cu{#e;#t=new Lr;#r=B.create();#i;#s;constructor(e,t,r){this.#e=e,this.#s=t,r&&(this.#i=setTimeout(()=>{this.#r.reject($a(this.#t,`${t} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`))},r))}resolve(e){clearTimeout(this.#i),this.#r.resolve(e)}reject(e){clearTimeout(this.#i),this.#r.reject(e)}get id(){return this.#e}get promise(){return this.#r.valueOrThrow()}get error(){return this.#t}get label(){return this.#s}}function lu(){let i=0;return()=>++i}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class ir extends ai{#e;#t;#r=new Aa;#i;#s;#n;constructor(e,t,r,s){super(),this.#i=e,this.#t=t,this.#e=r,this.#s=s}_setTarget(e){this.#n=e}_target(){return k(this.#n,"Target must exist"),this.#n}connection(){return this.#i}parentSession(){return this.#s?this.#i?.session(this.#s)??void 0:this}send(e,t,r){return this.#i?this.#i._rawSend(this.#r,e,t,this.#e,r):Promise.reject(new bt(`Protocol error (${e}): Session closed. Most likely the ${this.#t} has been closed.`))}_onMessage(e){e.id?e.error?this.#r.reject(e.id,Pa(e),e.error.message):this.#r.resolve(e.id,e.result):(k(!e.id),this.emit(e.method,e.params))}async detach(){if(!this.#i)throw new Error(`Session already detached. Most likely the ${this.#t} has been closed.`);await this.#i.send("Target.detachFromTarget",{sessionId:this.#e})}_onClosed(){this.#r.clear(),this.#i=void 0,this.emit(W.Disconnected,void 0)}id(){return this.#e}getPendingProtocolErrors(){return this.#r.getPendingProtocolErrors()}}/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const Xn=3e4;class rn{#e;#t;constructor(){this.#e=null,this.#t=null}setDefaultTimeout(e){this.#e=e}setDefaultNavigationTimeout(e){this.#t=e}navigationTimeout(){return this.#t!==null?this.#t:this.#e!==null?this.#e:Xn}timeout(){return this.#e!==null?this.#e:Xn}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var du=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},uu=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});const vr=new WeakSet;function hu(i,e){let t=!1;if(i.prototype[U]){const r=i.prototype[U];i.prototype[U]=function(){if(vr.has(this)){vr.delete(this);return}return r.call(this)},t=!0}if(i.prototype[qe]){const r=i.prototype[qe];i.prototype[qe]=function(){if(vr.has(this)){vr.delete(this);return}return r.call(this)},t=!0}return t&&(i.prototype.move=function(){return vr.add(this),this}),i}function P(i=e=>`Attempted to use disposed ${e.constructor.name}.`){return(e,t)=>function(...r){if(this.disposed)throw new Error(i(this));return e.call(this,...r)}}function Ve(i,e){const t=new WeakMap;let r=-1;return function(...s){if(r===-1&&(r=s.length),r!==s.length)throw new Error("Memoized method was called with the wrong number of arguments");let n=!1,o=t;for(const a of s)o.has(a)||(n=!0,o.set(a,new WeakMap)),o=o.get(a);if(n)return i.call(this,...s)}}function pu(i=function(){return this}){return(e,t)=>{const r=new WeakMap;return async function(...s){const n={stack:[],error:void 0,hasError:!1};try{const o=i.call(this);let a=r.get(o);a||(a=new ur,r.set(o,a));const c=du(n,await a.acquire(),!0);return await e.call(this,...s)}catch(o){n.error=o,n.hasError=!0}finally{const o=uu(n);o&&await o}}}}var fu=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},gu=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r}),Qt;(function(i){i.Action="action"})(Qt||(Qt={}));class wr extends Q{static race(e){return xi.create(e)}visibility=null;_timeout=3e4;#e=!0;#t=!0;#r=!0;operators={conditions:(e,t)=>pe(r=>Mr(...e.map(s=>s(r,t))).pipe(ka(r))),retryAndRaceWithSignalAndTimer:(e,t)=>{const r=[];return e&&r.push(Jt(e,t)),r.push(Xe(this._timeout,t)),Xl(oi({delay:ci}),Qe(...r))}};get timeout(){return this._timeout}setTimeout(e){const t=this._clone();return t._timeout=e,t}setVisibility(e){const t=this._clone();return t.visibility=e,t}setWaitForEnabled(e){const t=this._clone();return t.#t=e,t}setEnsureElementIsInTheViewport(e){const t=this._clone();return t.#e=e,t}setWaitForStableBoundingBox(e){const t=this._clone();return t.#r=e,t}copyOptions(e){return this._timeout=e._timeout,this.visibility=e.visibility,this.#t=e.#t,this.#e=e.#e,this.#r=e.#r,this}#i=(e,t)=>this.#t?j(e.frame.waitForFunction(r=>r instanceof HTMLElement?!["BUTTON","INPUT","SELECT","TEXTAREA","OPTION","OPTGROUP"].includes(r.nodeName)||!r.hasAttribute("disabled"):!0,{timeout:this._timeout,signal:t},e)).pipe(ni()):Ft;#s=e=>this.#r?rr(()=>j(e.evaluate(t=>new Promise(r=>{window.requestAnimationFrame(()=>{const s=t.getBoundingClientRect();window.requestAnimationFrame(()=>{const n=t.getBoundingClientRect();r([{x:s.x,y:s.y,width:s.width,height:s.height},{x:n.x,y:n.y,width:n.width,height:n.height}])})})})))).pipe(bi(([t,r])=>t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height),oi({delay:ci}),ni()):Ft;#n=e=>this.#e?j(e.isIntersectingViewport({threshold:0})).pipe(yr(t=>!t),pe(()=>j(e.scrollIntoView())),pe(()=>rr(()=>j(e.isIntersectingViewport({threshold:0}))).pipe(bi(_t),oi({delay:ci}),ni()))):Ft;#o(e){const t=e?.signal,r=new Error("Locator.click");return this._wait(e).pipe(this.operators.conditions([this.#n,this.#s,this.#i],t),Qr(()=>this.emit(Qt.Action,void 0)),pe(s=>j(s.click(e)).pipe(xr(n=>{throw s.dispose().catch(I),n}))),this.operators.retryAndRaceWithSignalAndTimer(t,r))}#a(e,t){const r=t?.signal,s=new Error("Locator.fill");return this._wait(t).pipe(this.operators.conditions([this.#n,this.#s,this.#i],r),Qr(()=>this.emit(Qt.Action,void 0)),pe(n=>j(n.evaluate(o=>o instanceof HTMLSelectElement?"select":o instanceof HTMLTextAreaElement?"typeable-input":o instanceof HTMLInputElement?new Set(["textarea","text","url","tel","search","password","number","email"]).has(o.type)?"typeable-input":"other-input":o.isContentEditable?"contenteditable":"unknown")).pipe(pe(o=>{switch(o){case"select":return j(n.select(e).then(dr));case"contenteditable":case"typeable-input":return j(n.evaluate((a,c)=>{const l=a.isContentEditable?a.innerText:a.value;if(c.length<=l.length||!c.startsWith(a.value))return a.isContentEditable?a.innerText="":a.value="",c;const d=a.isContentEditable?a.innerText:a.value;return a.isContentEditable?(a.innerText="",a.innerText=d):(a.value="",a.value=d),c.substring(d.length)},e)).pipe(pe(a=>j(n.type(a))));case"other-input":return j(n.focus()).pipe(pe(()=>j(n.evaluate((a,c)=>{a.value=c,a.dispatchEvent(new Event("input",{bubbles:!0})),a.dispatchEvent(new Event("change",{bubbles:!0}))},e))));case"unknown":throw new Error("Element cannot be filled out.")}})).pipe(xr(o=>{throw n.dispose().catch(I),o}))),this.operators.retryAndRaceWithSignalAndTimer(r,s))}#c(e){const t=e?.signal,r=new Error("Locator.hover");return this._wait(e).pipe(this.operators.conditions([this.#n,this.#s],t),Qr(()=>this.emit(Qt.Action,void 0)),pe(s=>j(s.hover()).pipe(xr(n=>{throw s.dispose().catch(I),n}))),this.operators.retryAndRaceWithSignalAndTimer(t,r))}#l(e){const t=e?.signal,r=new Error("Locator.scroll");return this._wait(e).pipe(this.operators.conditions([this.#n,this.#s],t),Qr(()=>this.emit(Qt.Action,void 0)),pe(s=>j(s.evaluate((n,o,a)=>{o!==void 0&&(n.scrollTop=o),a!==void 0&&(n.scrollLeft=a)},e?.scrollTop,e?.scrollLeft)).pipe(xr(n=>{throw s.dispose().catch(I),n}))),this.operators.retryAndRaceWithSignalAndTimer(t,r))}clone(){return this._clone()}async waitHandle(e){const t=new Error("Locator.waitHandle");return await Ie(this._wait(e).pipe(this.operators.retryAndRaceWithSignalAndTimer(e?.signal,t)))}async wait(e){const t={stack:[],error:void 0,hasError:!1};try{return await fu(t,await this.waitHandle(e),!1).jsonValue()}catch(r){t.error=r,t.hasError=!0}finally{gu(t)}}map(e){return new Ei(this._clone(),t=>t.evaluateHandle(e))}filter(e){return new ki(this._clone(),async(t,r)=>(await t.frame.waitForFunction(e,{signal:r,timeout:this._timeout},t),!0))}filterHandle(e){return new ki(this._clone(),e)}mapHandle(e){return new Ei(this._clone(),e)}click(e){return Ie(this.#o(e))}fill(e,t){return Ie(this.#a(e,t))}hover(e){return Ie(this.#c(e))}scroll(e){return Ie(this.#l(e))}}class Or extends wr{static create(e,t){return new Or(e,t).setTimeout("getDefaultTimeout"in e?e.getDefaultTimeout():e.page().getDefaultTimeout())}#e;#t;constructor(e,t){super(),this.#e=e,this.#t=t}_clone(){return new Or(this.#e,this.#t)}_wait(e){const t=e?.signal;return rr(()=>j(this.#e.waitForFunction(this.#t,{timeout:this.timeout,signal:t}))).pipe(Mi())}}class Fa extends wr{#e;constructor(e){super(),this.#e=e,this.copyOptions(this.#e)}get delegate(){return this.#e}setTimeout(e){const t=super.setTimeout(e);return t.#e=this.#e.setTimeout(e),t}setVisibility(e){const t=super.setVisibility(e);return t.#e=t.#e.setVisibility(e),t}setWaitForEnabled(e){const t=super.setWaitForEnabled(e);return t.#e=this.#e.setWaitForEnabled(e),t}setEnsureElementIsInTheViewport(e){const t=super.setEnsureElementIsInTheViewport(e);return t.#e=this.#e.setEnsureElementIsInTheViewport(e),t}setWaitForStableBoundingBox(e){const t=super.setWaitForStableBoundingBox(e);return t.#e=this.#e.setWaitForStableBoundingBox(e),t}}class ki extends Fa{#e;constructor(e,t){super(e),this.#e=t}_clone(){return new ki(this.delegate.clone(),this.#e).copyOptions(this)}_wait(e){return this.delegate._wait(e).pipe(pe(t=>j(Promise.resolve(this.#e(t,e?.signal))).pipe(yr(r=>r),Re(()=>t))),Mi())}}class Ei extends Fa{#e;constructor(e,t){super(e),this.#e=t}_clone(){return new Ei(this.delegate.clone(),this.#e).copyOptions(this)}_wait(e){return this.delegate._wait(e).pipe(pe(t=>j(Promise.resolve(this.#e(t,e?.signal)))))}}class jr extends wr{static create(e,t){return new jr(e,t).setTimeout("getDefaultTimeout"in e?e.getDefaultTimeout():e.page().getDefaultTimeout())}#e;#t;constructor(e,t){super(),this.#e=e,this.#t=t}#r=e=>this.visibility?(()=>{switch(this.visibility){case"hidden":return rr(()=>j(e.isHidden()));case"visible":return rr(()=>j(e.isVisible()))}})().pipe(bi(_t),oi({delay:ci}),ni()):Ft;_clone(){return new jr(this.#e,this.#t).copyOptions(this)}_wait(e){const t=e?.signal;return rr(()=>j(this.#e.waitForSelector(this.#t,{visible:!1,timeout:this._timeout,signal:t}))).pipe(yr(r=>r!==null),Mi(),this.operators.conditions([this.#r],t))}}function mu(i){for(const e of i)if(!(e instanceof wr))throw new Error("Unknown locator for race candidate");return i}class xi extends wr{static create(e){const t=mu(e);return new xi(t)}#e;constructor(e){super(),this.#e=e}_clone(){return new xi(this.#e.map(e=>e.clone())).copyOptions(this)}_wait(e){return Ld(...this.#e.map(t=>t._wait(e)))}}const ci=100;/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var yu=function(i,e,t){for(var r=arguments.length>2,s=0;s<e.length;s++)t=r?e[s].call(i,t):e[s].call(i);return r?t:void 0},wu=function(i,e,t,r,s,n){function o(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?r.static?i:i.prototype:null,d=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),h,p=!1,y=t.length-1;y>=0;y--){var b={};for(var v in r)b[v]=v==="access"?{}:r[v];for(var v in r.access)b.access[v]=r.access[v];b.addInitializer=function(E){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(E||null))};var S=(0,t[y])(a==="accessor"?{get:d.get,set:d.set}:d[c],b);if(a==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(h=o(S.get))&&(d.get=h),(h=o(S.set))&&(d.set=h),(h=o(S.init))&&s.unshift(h)}else(h=o(S))&&(a==="field"?s.unshift(h):d[c]=h)}l&&Object.defineProperty(l,r.name,d),p=!0},is=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},Yn=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});function vu(i){i.optimizeForSpeed??=!1,i.type??="png",i.fromSurface??=!0,i.fullPage??=!1,i.omitBackground??=!1,i.encoding??="binary",i.captureBeyondViewport??=!0}let bu=(()=>{let i=Q,e=[],t;return class extends i{static{const s=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;wu(this,null,t,{kind:"method",name:"screenshot",static:!1,private:!1,access:{has:n=>"screenshot"in n,get:n=>n.screenshot},metadata:s},null,e),s&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:s})}_isDragging=(yu(this,e),!1);_timeoutSettings=new rn;#e=new WeakMap;#t=new id(1);constructor(){super(),te(this,"request").pipe(pe(s=>_s(zn(1),Mr(te(this,"requestfailed"),te(this,"requestfinished"),te(this,"response").pipe(Re(n=>n.request()))).pipe(yr(n=>n.id===s.id),Ea(1),Re(()=>-1)))),jd((s,n)=>zn(s+n),0),Hd(te(this,"close")),Bd(0)).subscribe(this.#t)}on(s,n){if(s!=="request")return super.on(s,n);let o=this.#e.get(n);return o===void 0&&(o=a=>{a.enqueueInterceptAction(()=>n(a))},this.#e.set(n,o)),super.on(s,o)}off(s,n){return s==="request"&&(n=this.#e.get(n)||n),super.off(s,n)}get accessibility(){return this.mainFrame().accessibility}locator(s){return typeof s=="string"?jr.create(this,s):Or.create(this,s)}locatorRace(s){return wr.race(s)}async $(s){return await this.mainFrame().$(s)}async $$(s,n){return await this.mainFrame().$$(s,n)}async evaluateHandle(s,...n){return s=ae(this.evaluateHandle.name,s),await this.mainFrame().evaluateHandle(s,...n)}async $eval(s,n,...o){return n=ae(this.$eval.name,n),await this.mainFrame().$eval(s,n,...o)}async $$eval(s,n,...o){return n=ae(this.$$eval.name,n),await this.mainFrame().$$eval(s,n,...o)}async addScriptTag(s){return await this.mainFrame().addScriptTag(s)}async addStyleTag(s){return await this.mainFrame().addStyleTag(s)}url(){return this.mainFrame().url()}async content(){return await this.mainFrame().content()}async setContent(s,n){await this.mainFrame().setContent(s,n)}async goto(s,n){return await this.mainFrame().goto(s,n)}async waitForNavigation(s={}){return await this.mainFrame().waitForNavigation(s)}waitForRequest(s,n={}){const{timeout:o=this._timeoutSettings.timeout(),signal:a}=n;if(typeof s=="string"){const l=s;s=d=>d.url()===l}const c=te(this,"request").pipe(Tr(s),Qe(Xe(o),Jt(a),te(this,"close").pipe(Re(()=>{throw new bt("Page closed!")}))));return Ie(c)}waitForResponse(s,n={}){const{timeout:o=this._timeoutSettings.timeout(),signal:a}=n;if(typeof s=="string"){const l=s;s=d=>d.url()===l}const c=te(this,"response").pipe(Tr(s),Qe(Xe(o),Jt(a),te(this,"close").pipe(Re(()=>{throw new bt("Page closed!")}))));return Ie(c)}waitForNetworkIdle(s={}){return Ie(this.waitForNetworkIdle$(s))}waitForNetworkIdle$(s={}){const{timeout:n=this._timeoutSettings.timeout(),idleTime:o=eu,concurrency:a=0,signal:c}=s;return this.#t.pipe(qd(l=>l>a?Ft:Ys(o)),Re(()=>{}),Qe(Xe(n),Jt(c),te(this,"close").pipe(Re(()=>{throw new bt("Page closed!")}))))}async waitForFrame(s,n={}){const{timeout:o=this.getDefaultTimeout(),signal:a}=n,c=qt(s)?l=>s===l.url():s;return await Ie(Mr(te(this,"frameattached"),te(this,"framenavigated"),j(this.frames())).pipe(Tr(c),bi(),Qe(Xe(o),Jt(a),te(this,"close").pipe(Re(()=>{throw new bt("Page closed.")})))))}async emulate(s){await Promise.all([this.setUserAgent(s.userAgent),this.setViewport(s.viewport)])}async evaluate(s,...n){return s=ae(this.evaluate.name,s),await this.mainFrame().evaluate(s,...n)}async _maybeWriteTypedArrayToFile(s,n){s&&await Dt.value.fs.promises.writeFile(s,n)}async screencast(s={}){const n=Dt.value.ScreenRecorder,[o,a,c]=await this.#s();let l;if(s.crop){const{x:h,y:p,width:y,height:b}=eo(Zn(s.crop));if(h<0||p<0)throw new Error("`crop.x` and `crop.y` must be greater than or equal to 0.");if(y<=0||b<=0)throw new Error("`crop.height` and `crop.width` must be greater than or equal to 0.");const v=o/c,S=a/c;if(h+y>v)throw new Error(`\`crop.width\` cannot be larger than the viewport width (${v}).`);if(p+b>S)throw new Error(`\`crop.height\` cannot be larger than the viewport height (${S}).`);l={x:h*c,y:p*c,width:y*c,height:b*c}}if(s.speed!==void 0&&s.speed<=0)throw new Error("`speed` must be greater than 0.");if(s.scale!==void 0&&s.scale<=0)throw new Error("`scale` must be greater than 0.");const d=new n(this,o,a,{...s,path:s.ffmpegPath,crop:l});try{await this._startScreencast()}catch(h){throw d.stop(),h}if(s.path){const{createWriteStream:h}=Dt.value.fs,p=h(s.path,"binary");d.pipe(p)}return d}#r=0;#i;async _startScreencast(){++this.#r,this.#i||(this.#i=this.mainFrame().client.send("Page.startScreencast",{format:"png"}).then(()=>new Promise(s=>this.mainFrame().client.once("Page.screencastFrame",()=>s())))),await this.#i}async _stopScreencast(){--this.#r,this.#i&&(this.#i=void 0,this.#r===0&&await this.mainFrame().client.send("Page.stopScreencast"))}async#s(){const s={stack:[],error:void 0,hasError:!1};try{const n=this.viewport(),o=is(s,new rt,!1);return n&&n.deviceScaleFactor!==0&&(await this.setViewport({...n,deviceScaleFactor:0}),o.defer(()=>{this.setViewport(n).catch(I)})),await this.mainFrame().isolatedRealm().evaluate(()=>[window.visualViewport.width*window.devicePixelRatio,window.visualViewport.height*window.devicePixelRatio,window.devicePixelRatio])}catch(n){s.error=n,s.hasError=!0}finally{Yn(s)}}async screenshot(s={}){const n={stack:[],error:void 0,hasError:!1};try{const o=is(n,await this.browserContext().startScreenshot(),!1);await this.bringToFront();const a={...s,clip:s.clip?{...s.clip}:void 0};if(a.type===void 0&&a.path!==void 0){const h=a.path;switch(h.slice(h.lastIndexOf(".")+1).toLowerCase()){case"png":a.type="png";break;case"jpeg":case"jpg":a.type="jpeg";break;case"webp":a.type="webp";break}}if(a.quality!==void 0){if(a.quality<0||a.quality>100)throw new Error(`Expected 'quality' (${a.quality}) to be between 0 and 100, inclusive.`);if(a.type===void 0||!["jpeg","webp"].includes(a.type))throw new Error(`${a.type??"png"} screenshots do not support 'quality'.`)}if(a.clip){if(a.clip.width<=0)throw new Error("'width' in 'clip' must be positive.");if(a.clip.height<=0)throw new Error("'height' in 'clip' must be positive.")}vu(a);const c=is(n,new Li,!0);if(a.clip){if(a.fullPage)throw new Error("'clip' and 'fullPage' are mutually exclusive");a.clip=eo(Zn(a.clip))}else if(a.fullPage){if(!a.captureBeyondViewport){const h=await this.mainFrame().isolatedRealm().evaluate(()=>{const y=document.documentElement;return{width:y.scrollWidth,height:y.scrollHeight}}),p=this.viewport();await this.setViewport({...p,...h}),c.defer(async()=>{await this.setViewport(p).catch(I)})}}else a.captureBeyondViewport=!1;const l=await this._screenshot(a);if(a.encoding==="base64")return l;const d=xa(l,!0);return await this._maybeWriteTypedArrayToFile(a.path,d),d}catch(o){n.error=o,n.hasError=!0}finally{const o=Yn(n);o&&await o}}async title(){return await this.mainFrame().title()}click(s,n){return this.mainFrame().click(s,n)}focus(s){return this.mainFrame().focus(s)}hover(s){return this.mainFrame().hover(s)}select(s,...n){return this.mainFrame().select(s,...n)}tap(s){return this.mainFrame().tap(s)}type(s,n,o){return this.mainFrame().type(s,n,o)}async waitForSelector(s,n={}){return await this.mainFrame().waitForSelector(s,n)}waitForFunction(s,n,...o){return this.mainFrame().waitForFunction(s,n,...o)}[(t=[pu(function(){return this.browser()})],U)](){return void this.close().catch(I)}[qe](){return this.close()}}})();function Zn(i){return{...i,...i.width<0?{x:i.x+i.width,width:-i.width}:{x:i.x,width:i.width},...i.height<0?{y:i.y+i.height,height:-i.height}:{y:i.y,height:i.height}}}function eo(i){const e=Math.round(i.x),t=Math.round(i.y),r=Math.round(i.width+i.x-e),s=Math.round(i.height+i.y-t);return{...i,x:e,y:t,width:r,height:s}}/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class to{#e;#t;#r;#i;constructor(e,t,r,s){this.#e=e,this.#t=t,this.#r=r,this.#i=s}type(){return this.#e}text(){return this.#t}args(){return this.#r}location(){return this.#i[0]??{}}stackTrace(){return this.#i}}/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Su{#e;#t;#r=!1;constructor(e,t){this.#e=e,this.#t=t.mode!=="selectSingle"}isMultiple(){return this.#t}async accept(e){k(!this.#r,"Cannot accept FileChooser which is already handled!"),this.#r=!0,await this.#e.uploadFile(...e)}async cancel(){k(!this.#r,"Cannot cancel FileChooser which is already handled!"),this.#r=!0,await this.#e.evaluate(e=>{e.dispatchEvent(new Event("cancel",{bubbles:!0}))})}}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var ne;(function(i){i.Request=Symbol("NetworkManager.Request"),i.RequestServedFromCache=Symbol("NetworkManager.RequestServedFromCache"),i.Response=Symbol("NetworkManager.Response"),i.RequestFailed=Symbol("NetworkManager.RequestFailed"),i.RequestFinished=Symbol("NetworkManager.RequestFinished")})(ne||(ne={}));/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var ro=function(i,e,t){for(var r=arguments.length>2,s=0;s<e.length;s++)t=r?e[s].call(i,t):e[s].call(i);return r?t:void 0},ss=function(i,e,t,r,s,n){function o(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?r.static?i:i.prototype:null,d=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),h,p=!1,y=t.length-1;y>=0;y--){var b={};for(var v in r)b[v]=v==="access"?{}:r[v];for(var v in r.access)b.access[v]=r.access[v];b.addInitializer=function(E){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(E||null))};var S=(0,t[y])(a==="accessor"?{get:d.get,set:d.set}:d[c],b);if(a==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(h=o(S.get))&&(d.get=h),(h=o(S.set))&&(d.set=h),(h=o(S.init))&&s.unshift(h)}else(h=o(S))&&(a==="field"?s.unshift(h):d[c]=h)}l&&Object.defineProperty(l,r.name,d),p=!0},ku=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},Eu=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});let sr=(()=>{let i=[hu],e,t=[],r,s=[],n,o;return class{static{r=this}static{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;ss(this,null,n,{kind:"method",name:"getProperty",static:!1,private:!1,access:{has:c=>"getProperty"in c,get:c=>c.getProperty},metadata:a},null,s),ss(this,null,o,{kind:"method",name:"getProperties",static:!1,private:!1,access:{has:c=>"getProperties"in c,get:c=>c.getProperties},metadata:a},null,s),ss(null,e={value:r},i,{kind:"class",name:r.name,metadata:a},null,t),r=e.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),ro(r,t)}constructor(){ro(this,s)}async evaluate(a,...c){return a=ae(this.evaluate.name,a),await this.realm.evaluate(a,this,...c)}async evaluateHandle(a,...c){return a=ae(this.evaluateHandle.name,a),await this.realm.evaluateHandle(a,this,...c)}async getProperty(a){return await this.evaluateHandle((c,l)=>c[l],a)}async getProperties(){const a=await this.evaluate(d=>{const h=[],p=Object.getOwnPropertyDescriptors(d);for(const y in p)p[y]?.enumerable&&h.push(y);return h}),c=new Map,l=await Promise.all(a.map(d=>this.getProperty(d)));for(const[d,h]of Object.entries(a)){const p={stack:[],error:void 0,hasError:!1};try{const y=ku(p,l[d],!1);y&&c.set(h,y.move())}catch(y){p.error=y,p.hasError=!0}finally{Eu(p)}}return c}[(n=[P()],o=[P()],U)](){return void this.dispose().catch(I)}[qe](){return this.dispose()}},r})();var xu=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},Cu=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});class Ci{#e;#t;#r;constructor(e,t,r){this.#e=e,this.#t=t,this.#r=r}get name(){return this.#e}get initSource(){return this.#r}async run(e,t,r,s){const n=new rt;try{if(!s){const o={stack:[],error:void 0,hasError:!1};try{const c=await xu(o,await e.evaluateHandle((l,d)=>globalThis[l].args.get(d),this.#e,t),!1).getProperties();for(const[l,d]of c)if(l in r)switch(d.remoteObject().subtype){case"node":r[+l]=d;break;default:n.use(d)}else n.use(d)}catch(a){o.error=a,o.hasError=!0}finally{Cu(o)}}await e.evaluate((o,a,c)=>{const l=globalThis[o].callbacks;l.get(a).resolve(c),l.delete(a)},this.#e,t,await this.#t(...r));for(const o of r)o instanceof sr&&n.use(o)}catch(o){ct(o)?await e.evaluate((a,c,l,d)=>{const h=new Error(l);h.stack=d;const p=globalThis[a].callbacks;p.get(c).reject(h),p.delete(c)},this.#e,t,o.message,o.stack).catch(I):await e.evaluate((a,c,l)=>{const d=globalThis[a].callbacks;d.get(c).reject(l),d.delete(c)},this.#e,t,o).catch(I)}}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const Tu=Zs("puppeteer:protocol:SEND ►"),_u=Zs("puppeteer:protocol:RECV ◀");class Ru extends Q{#e;#t;#r;#i;#s=new Map;#n=!1;#o=new Set;#a=new Aa;constructor(e,t,r=0,s){super(),this.#e=e,this.#r=r,this.#i=s??18e4,this.#t=t,this.#t.onmessage=this.onMessage.bind(this),this.#t.onclose=this.#c.bind(this)}static fromSession(e){return e.connection()}get delay(){return this.#r}get timeout(){return this.#i}get _closed(){return this.#n}get _sessions(){return this.#s}session(e){return this.#s.get(e)||null}url(){return this.#e}send(e,t,r){return this._rawSend(this.#a,e,t,void 0,r)}_rawSend(e,t,r,s,n){return this.#n?Promise.reject(new Error("Protocol error: Connection closed.")):e.create(t,n?.timeout??this.#i,o=>{const a=JSON.stringify({method:t,params:r,id:o,sessionId:s});Tu(a),this.#t.send(a)})}async closeBrowser(){await this.send("Browser.close")}async onMessage(e){this.#r&&await new Promise(r=>setTimeout(r,this.#r)),_u(e);const t=JSON.parse(e);if(t.method==="Target.attachedToTarget"){const r=t.params.sessionId,s=new ir(this,t.params.targetInfo.type,r,t.sessionId);this.#s.set(r,s),this.emit(W.SessionAttached,s);const n=this.#s.get(t.sessionId);n&&n.emit(W.SessionAttached,s)}else if(t.method==="Target.detachedFromTarget"){const r=this.#s.get(t.params.sessionId);if(r){r._onClosed(),this.#s.delete(t.params.sessionId),this.emit(W.SessionDetached,r);const s=this.#s.get(t.sessionId);s&&s.emit(W.SessionDetached,r)}}if(t.sessionId){const r=this.#s.get(t.sessionId);r&&r._onMessage(t)}else t.id?t.error?this.#a.reject(t.id,Pa(t),t.error.message):this.#a.resolve(t.id,t.result):this.emit(t.method,t.params)}#c(){if(!this.#n){this.#n=!0,this.#t.onmessage=void 0,this.#t.onclose=void 0,this.#a.clear();for(const e of this.#s.values())e._onClosed();this.#s.clear(),this.emit(W.Disconnected,void 0)}}dispose(){this.#c(),this.#t.close()}isAutoAttached(e){return!this.#o.has(e)}async _createSession(e,t=!0){t||this.#o.add(e.targetId);const{sessionId:r}=await this.send("Target.attachToTarget",{targetId:e.targetId,flatten:!0});this.#o.delete(e.targetId);const s=this.#s.get(r);if(!s)throw new Error("CDPSession creation failed.");return s}async createSession(e){return await this._createSession(e,!1)}getPendingProtocolErrors(){const e=[];e.push(...this.#a.getPendingProtocolErrors());for(const t of this.#s.values())e.push(...t.getPendingProtocolErrors());return e}}function Is(i){return i instanceof bt}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Iu{#e;#t;constructor(e){this.#e=new $u(e),this.#t=new Pu(e)}updateClient(e){this.#e.updateClient(e),this.#t.updateClient(e)}async startJSCoverage(e={}){return await this.#e.start(e)}async stopJSCoverage(){return await this.#e.stop()}async startCSSCoverage(e={}){return await this.#t.start(e)}async stopCSSCoverage(){return await this.#t.stop()}}class $u{#e;#t=!1;#r=new Map;#i=new Map;#s;#n=!1;#o=!1;#a=!1;constructor(e){this.#e=e}updateClient(e){this.#e=e}async start(e={}){k(!this.#t,"JSCoverage is already enabled");const{resetOnNavigation:t=!0,reportAnonymousScripts:r=!1,includeRawScriptCoverage:s=!1,useBlockCoverage:n=!0}=e;this.#n=t,this.#o=r,this.#a=s,this.#t=!0,this.#r.clear(),this.#i.clear(),this.#s=new rt;const o=this.#s.use(new Q(this.#e));o.on("Debugger.scriptParsed",this.#l.bind(this)),o.on("Runtime.executionContextsCleared",this.#c.bind(this)),await Promise.all([this.#e.send("Profiler.enable"),this.#e.send("Profiler.startPreciseCoverage",{callCount:this.#a,detailed:n}),this.#e.send("Debugger.enable"),this.#e.send("Debugger.setSkipAllPauses",{skip:!0})])}#c(){this.#n&&(this.#r.clear(),this.#i.clear())}async#l(e){if(!Ze.isPuppeteerURL(e.url)&&!(!e.url&&!this.#o))try{const t=await this.#e.send("Debugger.getScriptSource",{scriptId:e.scriptId});this.#r.set(e.scriptId,e.url),this.#i.set(e.scriptId,t.scriptSource)}catch(t){I(t)}}async stop(){k(this.#t,"JSCoverage is not enabled"),this.#t=!1;const e=await Promise.all([this.#e.send("Profiler.takePreciseCoverage"),this.#e.send("Profiler.stopPreciseCoverage"),this.#e.send("Profiler.disable"),this.#e.send("Debugger.disable")]);this.#s?.dispose();const t=[],r=e[0];for(const s of r.result){let n=this.#r.get(s.scriptId);!n&&this.#o&&(n="debugger://VM"+s.scriptId);const o=this.#i.get(s.scriptId);if(o===void 0||n===void 0)continue;const a=[];for(const l of s.functions)a.push(...l.ranges);const c=Na(a);this.#a?t.push({url:n,ranges:c,text:o,rawScriptCoverage:s}):t.push({url:n,ranges:c,text:o})}return t}}class Pu{#e;#t=!1;#r=new Map;#i=new Map;#s;#n=!1;constructor(e){this.#e=e}updateClient(e){this.#e=e}async start(e={}){k(!this.#t,"CSSCoverage is already enabled");const{resetOnNavigation:t=!0}=e;this.#n=t,this.#t=!0,this.#r.clear(),this.#i.clear(),this.#s=new rt;const r=this.#s.use(new Q(this.#e));r.on("CSS.styleSheetAdded",this.#a.bind(this)),r.on("Runtime.executionContextsCleared",this.#o.bind(this)),await Promise.all([this.#e.send("DOM.enable"),this.#e.send("CSS.enable"),this.#e.send("CSS.startRuleUsageTracking")])}#o(){this.#n&&(this.#r.clear(),this.#i.clear())}async#a(e){const t=e.header;if(t.sourceURL)try{const r=await this.#e.send("CSS.getStyleSheetText",{styleSheetId:t.styleSheetId});this.#r.set(t.styleSheetId,t.sourceURL),this.#i.set(t.styleSheetId,r.text)}catch(r){I(r)}}async stop(){k(this.#t,"CSSCoverage is not enabled"),this.#t=!1;const e=await this.#e.send("CSS.stopRuleUsageTracking");await Promise.all([this.#e.send("CSS.disable"),this.#e.send("DOM.disable")]),this.#s?.dispose();const t=new Map;for(const s of e.ruleUsage){let n=t.get(s.styleSheetId);n||(n=[],t.set(s.styleSheetId,n)),n.push({startOffset:s.startOffset,endOffset:s.endOffset,count:s.used?1:0})}const r=[];for(const s of this.#r.keys()){const n=this.#r.get(s);k(typeof n<"u",`Stylesheet URL is undefined (styleSheetId=${s})`);const o=this.#i.get(s);k(typeof o<"u",`Stylesheet text is undefined (styleSheetId=${s})`);const a=Na(t.get(s)||[]);r.push({url:n,ranges:a,text:o})}return r}}function Na(i){const e=[];for(const n of i)e.push({offset:n.startOffset,type:0,range:n}),e.push({offset:n.endOffset,type:1,range:n});e.sort((n,o)=>{if(n.offset!==o.offset)return n.offset-o.offset;if(n.type!==o.type)return o.type-n.type;const a=n.range.endOffset-n.range.startOffset,c=o.range.endOffset-o.range.startOffset;return n.type===0?c-a:a-c});const t=[],r=[];let s=0;for(const n of e){if(t.length&&s<n.offset&&t[t.length-1]>0){const o=r[r.length-1];o&&o.end===s?o.end=n.offset:r.push({start:s,end:n.offset})}s=n.offset,n.type===0?t.push(n.range.count):t.pop()}return r.filter(n=>n.end-n.start>0)}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Au{#e;#t;#r;handled=!1;constructor(e,t,r=""){this.#e=e,this.#t=t,this.#r=r}type(){return this.#e}message(){return this.#t}defaultValue(){return this.#r}async accept(e){k(!this.handled,"Cannot accept dialog which is already handled!"),this.handled=!0,await this.handle({accept:!0,text:e})}async dismiss(){k(!this.handled,"Cannot dismiss dialog which is already handled!"),this.handled=!0,await this.handle({accept:!1})}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Fu extends Au{#e;constructor(e,t,r,s=""){super(t,r,s),this.#e=e}async handle(e){await this.#e.send("Page.handleJavaScriptDialog",{accept:e.accept,promptText:e.text})}}var Nu=function(i,e,t){for(var r=arguments.length>2,s=0;s<e.length;s++)t=r?e[s].call(i,t):e[s].call(i);return r?t:void 0},Ke=function(i,e,t,r,s,n){function o(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?r.static?i:i.prototype:null,d=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),h,p=!1,y=t.length-1;y>=0;y--){var b={};for(var v in r)b[v]=v==="access"?{}:r[v];for(var v in r.access)b.access[v]=r.access[v];b.addInitializer=function(E){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(E||null))};var S=(0,t[y])(a==="accessor"?{get:d.get,set:d.set}:d[c],b);if(a==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(h=o(S.get))&&(d.get=h),(h=o(S.set))&&(d.set=h),(h=o(S.init))&&s.unshift(h)}else(h=o(S))&&(a==="field"?s.unshift(h):d[c]=h)}l&&Object.defineProperty(l,r.name,d),p=!0},We=function(i,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:t?"".concat(t," ",e):e})};class ze{#e;#t;#r;constructor(e,t,r){this.#e=e,this.#t=t,this.#r=r,this.#t.registerState(this)}async setState(e){this.#e=e,await this.sync()}get state(){return this.#e}async sync(){await Promise.all(this.#t.clients().map(e=>this.#r(e,this.#e)))}}let Du=(()=>{let i=[],e,t,r,s,n,o,a,c,l,d,h,p,y,b,v,S,E,V,be,De;return class{static{const C=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;e=[Ve],r=[Ve],n=[Ve],a=[Ve],l=[Ve],h=[Ve],y=[Ve],v=[Ve],E=[Ve],be=[Ve],Ke(this,t={value:We(async function(g,f){if(!f.viewport){await Promise.all([g.send("Emulation.clearDeviceMetricsOverride"),g.send("Emulation.setTouchEmulationEnabled",{enabled:!1})]).catch(I);return}const{viewport:x}=f,A=x.isMobile||!1,X=x.width,Ce=x.height,st=x.deviceScaleFactor??1,xe=x.isLandscape?{angle:90,type:"landscapePrimary"}:{angle:0,type:"portraitPrimary"},Pe=x.hasTouch||!1;await Promise.all([g.send("Emulation.setDeviceMetricsOverride",{mobile:A,width:X,height:Ce,deviceScaleFactor:st,screenOrientation:xe}).catch(ut=>{if(ut.message.includes("Target does not support metrics override")){I(ut);return}throw ut}),g.send("Emulation.setTouchEmulationEnabled",{enabled:Pe})])},"#applyViewport")},e,{kind:"method",name:"#applyViewport",static:!1,private:!0,access:{has:g=>#g in g,get:g=>g.#g},metadata:C},null,i),Ke(this,s={value:We(async function(g,f){f.active&&(f.overrides?await g.send("Emulation.setIdleOverride",{isUserActive:f.overrides.isUserActive,isScreenUnlocked:f.overrides.isScreenUnlocked}):await g.send("Emulation.clearIdleOverride"))},"#emulateIdleState")},r,{kind:"method",name:"#emulateIdleState",static:!1,private:!0,access:{has:g=>#y in g,get:g=>g.#y},metadata:C},null,i),Ke(this,o={value:We(async function(g,f){if(f.active)try{await g.send("Emulation.setTimezoneOverride",{timezoneId:f.timezoneId||""})}catch(x){throw ct(x)&&x.message.includes("Invalid timezone")?new Error(`Invalid timezone ID: ${f.timezoneId}`):x}},"#emulateTimezone")},n,{kind:"method",name:"#emulateTimezone",static:!1,private:!0,access:{has:g=>#m in g,get:g=>g.#m},metadata:C},null,i),Ke(this,c={value:We(async function(g,f){f.active&&await g.send("Emulation.setEmulatedVisionDeficiency",{type:f.visionDeficiency||"none"})},"#emulateVisionDeficiency")},a,{kind:"method",name:"#emulateVisionDeficiency",static:!1,private:!0,access:{has:g=>#b in g,get:g=>g.#b},metadata:C},null,i),Ke(this,d={value:We(async function(g,f){f.active&&await g.send("Emulation.setCPUThrottlingRate",{rate:f.factor??1})},"#emulateCpuThrottling")},l,{kind:"method",name:"#emulateCpuThrottling",static:!1,private:!0,access:{has:g=>#v in g,get:g=>g.#v},metadata:C},null,i),Ke(this,p={value:We(async function(g,f){f.active&&await g.send("Emulation.setEmulatedMedia",{features:f.mediaFeatures})},"#emulateMediaFeatures")},h,{kind:"method",name:"#emulateMediaFeatures",static:!1,private:!0,access:{has:g=>#S in g,get:g=>g.#S},metadata:C},null,i),Ke(this,b={value:We(async function(g,f){f.active&&await g.send("Emulation.setEmulatedMedia",{media:f.type||""})},"#emulateMediaType")},y,{kind:"method",name:"#emulateMediaType",static:!1,private:!0,access:{has:g=>#w in g,get:g=>g.#w},metadata:C},null,i),Ke(this,S={value:We(async function(g,f){f.active&&await g.send("Emulation.setGeolocationOverride",f.geoLocation?{longitude:f.geoLocation.longitude,latitude:f.geoLocation.latitude,accuracy:f.geoLocation.accuracy}:void 0)},"#setGeolocation")},v,{kind:"method",name:"#setGeolocation",static:!1,private:!0,access:{has:g=>#E in g,get:g=>g.#E},metadata:C},null,i),Ke(this,V={value:We(async function(g,f){f.active&&await g.send("Emulation.setDefaultBackgroundColorOverride",{color:f.color})},"#setDefaultBackgroundColor")},E,{kind:"method",name:"#setDefaultBackgroundColor",static:!1,private:!0,access:{has:g=>#x in g,get:g=>g.#x},metadata:C},null,i),Ke(this,De={value:We(async function(g,f){f.active&&await g.send("Emulation.setScriptExecutionDisabled",{value:!f.javaScriptEnabled})},"#setJavaScriptEnabled")},be,{kind:"method",name:"#setJavaScriptEnabled",static:!1,private:!0,access:{has:g=>#k in g,get:g=>g.#k},metadata:C},null,i),C&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:C})}#e=Nu(this,i);#t=!1;#r=!1;#i=[];#s=new ze({active:!1},this,this.#g);#n=new ze({active:!1},this,this.#y);#o=new ze({active:!1},this,this.#m);#a=new ze({active:!1},this,this.#b);#c=new ze({active:!1},this,this.#v);#l=new ze({active:!1},this,this.#S);#u=new ze({active:!1},this,this.#w);#d=new ze({active:!1},this,this.#E);#h=new ze({active:!1},this,this.#x);#p=new ze({javaScriptEnabled:!0,active:!1},this,this.#k);#f=new Set;constructor(C){this.#e=C}updateClient(C){this.#e=C,this.#f.delete(C)}registerState(C){this.#i.push(C)}clients(){return[this.#e,...Array.from(this.#f)]}async registerSpeculativeSession(C){this.#f.add(C),C.once(W.Disconnected,()=>{this.#f.delete(C)}),Promise.all(this.#i.map(g=>g.sync().catch(I)))}get javascriptEnabled(){return this.#p.state.javaScriptEnabled}async emulateViewport(C){const g=this.#s.state;if(!C&&!g.active)return!1;await this.#s.setState(C?{viewport:C,active:!0}:{active:!1});const f=C?.isMobile||!1,x=C?.hasTouch||!1,A=this.#t!==f||this.#r!==x;return this.#t=f,this.#r=x,A}get#g(){return t.value}async emulateIdleState(C){await this.#n.setState({active:!0,overrides:C})}get#y(){return s.value}get#m(){return o.value}async emulateTimezone(C){await this.#o.setState({timezoneId:C,active:!0})}get#b(){return c.value}async emulateVisionDeficiency(C){k(!C||new Set(["none","achromatopsia","blurredVision","deuteranopia","protanopia","tritanopia"]).has(C),`Unsupported vision deficiency: ${C}`),await this.#a.setState({active:!0,visionDeficiency:C})}get#v(){return d.value}async emulateCPUThrottling(C){k(C===null||C>=1,"Throttling rate should be greater or equal to 1"),await this.#c.setState({active:!0,factor:C??void 0})}get#S(){return p.value}async emulateMediaFeatures(C){if(Array.isArray(C))for(const g of C){const f=g.name;k(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(f),"Unsupported media feature: "+f)}await this.#l.setState({active:!0,mediaFeatures:C})}get#w(){return b.value}async emulateMediaType(C){k(C==="screen"||C==="print"||(C??void 0)===void 0,"Unsupported media type: "+C),await this.#u.setState({type:C,active:!0})}get#E(){return S.value}async setGeolocation(C){const{longitude:g,latitude:f,accuracy:x=0}=C;if(g<-180||g>180)throw new Error(`Invalid longitude "${g}": precondition -180 <= LONGITUDE <= 180 failed.`);if(f<-90||f>90)throw new Error(`Invalid latitude "${f}": precondition -90 <= LATITUDE <= 90 failed.`);if(x<0)throw new Error(`Invalid accuracy "${x}": precondition 0 <= ACCURACY failed.`);await this.#d.setState({active:!0,geoLocation:{longitude:g,latitude:f,accuracy:x}})}get#x(){return V.value}async resetDefaultBackgroundColor(){await this.#h.setState({active:!0,color:void 0})}async setTransparentBackgroundColor(){await this.#h.setState({active:!0,color:{r:0,g:0,b:0,a:0}})}get#k(){return De.value}async setJavaScriptEnabled(C){await this.#p.setState({active:!0,javaScriptEnabled:C})}}})();/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class sn extends Q{#e;#t=new Map;#r=new Map;#i=new Map;#s;#n;#o=new WeakMap;#a=B.create();#c=new Set;constructor(e,t,r){super(),this.#e=e,this.#s=r,this.#n=t,this.#e.on("Target.targetCreated",this.#u),this.#e.on("Target.targetDestroyed",this.#d),this.#e.on(W.SessionDetached,this.#l),this.setupAttachmentListeners(this.#e)}setupAttachmentListeners(e){const t=r=>this.#h(e,r);k(!this.#o.has(e)),this.#o.set(e,t),e.on("Target.attachedToTarget",t)}#l=e=>{this.removeSessionListeners(e),this.#i.delete(e.id())};removeSessionListeners(e){this.#o.has(e)&&(e.off("Target.attachedToTarget",this.#o.get(e)),this.#o.delete(e))}getAvailableTargets(){return this.#r}getChildTargets(e){return new Set}dispose(){this.#e.off("Target.targetCreated",this.#u),this.#e.off("Target.targetDestroyed",this.#d)}async initialize(){await this.#e.send("Target.setDiscoverTargets",{discover:!0,filter:[{}]}),this.#c=new Set(this.#t.keys()),await this.#a.valueOrThrow()}#u=async e=>{if(this.#t.has(e.targetInfo.targetId))return;if(this.#t.set(e.targetInfo.targetId,e.targetInfo),e.targetInfo.type==="browser"&&e.targetInfo.attached){const r=this.#n(e.targetInfo,void 0);r._initialize(),this.#r.set(e.targetInfo.targetId,r),this.#p(r._targetId);return}const t=this.#n(e.targetInfo,void 0);if(this.#s&&!this.#s(t)){this.#p(e.targetInfo.targetId);return}t._initialize(),this.#r.set(e.targetInfo.targetId,t),this.emit("targetAvailable",t),this.#p(t._targetId)};#d=e=>{this.#t.delete(e.targetId),this.#p(e.targetId);const t=this.#r.get(e.targetId);t&&(this.emit("targetGone",t),this.#r.delete(e.targetId))};#h=async(e,t)=>{const r=t.targetInfo,s=this.#e.session(t.sessionId);if(!s)throw new Error(`Session ${t.sessionId} was not created.`);const n=this.#r.get(r.targetId);k(n,`Target ${r.targetId} is missing`),s._setTarget(n),this.setupAttachmentListeners(s),this.#i.set(s.id(),this.#r.get(r.targetId)),e.emit(W.Ready,s)};#p(e){this.#c.delete(e),this.#c.size===0&&this.#a.resolve()}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const li=Symbol("_isElementHandle");/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const io=new Map,Mu=i=>{let e=io.get(i);return e||(e=new Function(`return ${i}`)(),io.set(i,e),e)};function Et(i){let e=i.toString();try{new Function(`(${e})`)}catch(t){if(t.message.includes("Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive"))return e;let r="function ";e.startsWith("async ")&&(r=`async ${r}`,e=e.substring(6)),e=`${r}${e}`;try{new Function(`(${e})`)}catch{throw new Error("Passed function cannot be serialized!")}}return e}const _r=(i,e)=>{let t=Et(i);for(const[r,s]of Object.entries(e))t=t.replace(new RegExp(`PLACEHOLDER\\(\\s*(?:'${r}'|"${r}")\\s*\\)`,"g"),`(${s})`);return Mu(t)};/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var di=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},$s=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});const Lu=20;async function*Ou(i,e){const t={stack:[],error:void 0,hasError:!1};try{const s=await di(t,await i.evaluateHandle(async(a,c)=>{const l=[];for(;l.length<c;){const d=await a.next();if(d.done)break;l.push(d.value)}return l},e),!1).getProperties(),n=s.values();return di(t,new rt,!1).defer(()=>{for(const a of n){const c={stack:[],error:void 0,hasError:!1};try{di(c,a,!1)[U]()}catch(l){c.error=l,c.hasError=!0}finally{$s(c)}}}),yield*n,s.size===0}catch(r){t.error=r,t.hasError=!0}finally{$s(t)}}async function*ju(i){let e=Lu;for(;!(yield*Ou(i,e));)e<<=1}async function*Da(i){const e={stack:[],error:void 0,hasError:!1};try{const t=di(e,await i.evaluateHandle(r=>async function*(){yield*r}()),!1);yield*ju(t)}catch(t){e.error=t,e.hasError=!0}finally{$s(e)}}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class He{static create=e=>new He(e);#e;constructor(e){this.#e=e}async get(e){return await this.#e(e)}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var Xr=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},Yr=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});class Ht{static querySelectorAll;static querySelector;static get _querySelector(){if(this.querySelector)return this.querySelector;if(!this.querySelectorAll)throw new Error("Cannot create default `querySelector`.");return this.querySelector=_r(async(e,t,r)=>{const n=PLACEHOLDER("querySelectorAll")(e,t,r);for await(const o of n)return o;return null},{querySelectorAll:Et(this.querySelectorAll)})}static get _querySelectorAll(){if(this.querySelectorAll)return this.querySelectorAll;if(!this.querySelector)throw new Error("Cannot create default `querySelectorAll`.");return this.querySelectorAll=_r(async function*(e,t,r){const n=await PLACEHOLDER("querySelector")(e,t,r);n&&(yield n)},{querySelector:Et(this.querySelector)})}static async*queryAll(e,t){const r={stack:[],error:void 0,hasError:!1};try{const s=Xr(r,await e.evaluateHandle(this._querySelectorAll,t,He.create(n=>n.puppeteerUtil)),!1);yield*Da(s)}catch(s){r.error=s,r.hasError=!0}finally{Yr(r)}}static async queryOne(e,t){const r={stack:[],error:void 0,hasError:!1};try{const s=Xr(r,await e.evaluateHandle(this._querySelector,t,He.create(n=>n.puppeteerUtil)),!1);return li in s?s.move():null}catch(s){r.error=s,r.hasError=!0}finally{Yr(r)}}static async waitFor(e,t,r){const s={stack:[],error:void 0,hasError:!1};try{let n;const o=Xr(s,await(async()=>{if(!(li in e)){n=e;return}return n=e.frame,await n.isolatedRealm().adoptHandle(e)})(),!1),{visible:a=!1,hidden:c=!1,timeout:l,signal:d}=r,h=a||c?"raf":r.polling;try{const p={stack:[],error:void 0,hasError:!1};try{d?.throwIfAborted();const y=Xr(p,await n.isolatedRealm().waitForFunction(async(b,v,S,E,V)=>{const De=await b.createFunction(v)(E??document,S,b);return b.checkVisibility(De,V)},{polling:h,root:o,timeout:l,signal:d},He.create(b=>b.puppeteerUtil),Et(this._querySelector),t,o,a?!0:c?!1:void 0),!1);if(d?.aborted)throw d.reason;return li in y?await n.mainRealm().transferHandle(y):null}catch(y){p.error=y,p.hasError=!0}finally{Yr(p)}}catch(p){throw!ct(p)||p.name==="AbortError"||(p.message=`Waiting for selector \`${t}\` failed: ${p.message}`),p}}catch(n){s.error=n,s.hasError=!0}finally{Yr(s)}}}class Oi{static async*map(e,t){for await(const r of e)yield await t(r)}static async*flatMap(e,t){for await(const r of e)yield*t(r)}static async collect(e){const t=[];for await(const r of e)t.push(r);return t}static async first(e){for await(const t of e)return t}}/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const Bu=i=>["name","role"].includes(i),qu=/\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g,Hu=i=>{const e={},t=i.replace(qu,(r,s,n,o)=>(k(Bu(s),`Unknown aria attribute "${s}" in selector`),e[s]=o,""));return t&&!e.name&&(e.name=t),e};class nn extends Ht{static querySelector=async(e,t,{ariaQuerySelector:r})=>await r(e,t);static async*queryAll(e,t){const{name:r,role:s}=Hu(t);yield*e.queryAXTree(r,s)}static queryOne=async(e,t)=>await Oi.first(this.queryAll(e,t))??null}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class so extends Ht{static querySelector=(e,t,{cssQuerySelector:r})=>r(e,t);static querySelectorAll=(e,t,{cssQuerySelectorAll:r})=>r(e,t)}const Uu='"use strict";var g=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var l=(t,e)=>{for(var r in e)g(t,r,{get:e[r],enumerable:!0})},J=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of B(e))!Y.call(t,n)&&n!==r&&g(t,n,{get:()=>e[n],enumerable:!(o=X(e,n))||o.enumerable});return t};var z=t=>J(g({},"__esModule",{value:!0}),t);var pe={};l(pe,{default:()=>he});module.exports=z(pe);var N=class extends Error{constructor(e,r){super(e,r),this.name=this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}},p=class extends N{};var c=class t{static create(e){return new t(e)}static async race(e){let r=new Set;try{let o=e.map(n=>n instanceof t?(n.#n&&r.add(n),n.valueOrThrow()):n);return await Promise.race(o)}finally{for(let o of r)o.reject(new Error("Timeout cleared"))}}#e=!1;#r=!1;#o;#t;#a=new Promise(e=>{this.#t=e});#n;#i;constructor(e){e&&e.timeout>0&&(this.#i=new p(e.message),this.#n=setTimeout(()=>{this.reject(this.#i)},e.timeout))}#l(e){clearTimeout(this.#n),this.#o=e,this.#t()}resolve(e){this.#r||this.#e||(this.#e=!0,this.#l(e))}reject(e){this.#r||this.#e||(this.#r=!0,this.#l(e))}resolved(){return this.#e}finished(){return this.#e||this.#r}value(){return this.#o}#s;valueOrThrow(){return this.#s||(this.#s=(async()=>{if(await this.#a,this.#r)throw this.#o;return this.#o})()),this.#s}};var L=new Map,F=t=>{let e=L.get(t);return e||(e=new Function(`return ${t}`)(),L.set(t,e),e)};var x={};l(x,{ariaQuerySelector:()=>G,ariaQuerySelectorAll:()=>b});var G=(t,e)=>globalThis.__ariaQuerySelector(t,e),b=async function*(t,e){yield*await globalThis.__ariaQuerySelectorAll(t,e)};var E={};l(E,{cssQuerySelector:()=>K,cssQuerySelectorAll:()=>Z});var K=(t,e)=>t.querySelector(e),Z=function(t,e){return t.querySelectorAll(e)};var A={};l(A,{customQuerySelectors:()=>P});var v=class{#e=new Map;register(e,r){if(!r.queryOne&&r.queryAll){let o=r.queryAll;r.queryOne=(n,i)=>{for(let s of o(n,i))return s;return null}}else if(r.queryOne&&!r.queryAll){let o=r.queryOne;r.queryAll=(n,i)=>{let s=o(n,i);return s?[s]:[]}}else if(!r.queryOne||!r.queryAll)throw new Error("At least one query method must be defined.");this.#e.set(e,{querySelector:r.queryOne,querySelectorAll:r.queryAll})}unregister(e){this.#e.delete(e)}get(e){return this.#e.get(e)}clear(){this.#e.clear()}},P=new v;var R={};l(R,{pierceQuerySelector:()=>ee,pierceQuerySelectorAll:()=>te});var ee=(t,e)=>{let r=null,o=n=>{let i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&o(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==n&&!r&&s.matches(e)&&(r=s)}while(!r&&i.nextNode())};return t instanceof Document&&(t=t.documentElement),o(t),r},te=(t,e)=>{let r=[],o=n=>{let i=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&o(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==n&&s.matches(e)&&r.push(s)}while(i.nextNode())};return t instanceof Document&&(t=t.documentElement),o(t),r};var u=(t,e)=>{if(!t)throw new Error(e)};var y=class{#e;#r;#o;#t;constructor(e,r){this.#e=e,this.#r=r}async start(){let e=this.#t=c.create(),r=await this.#e();if(r){e.resolve(r);return}this.#o=new MutationObserver(async()=>{let o=await this.#e();o&&(e.resolve(o),await this.stop())}),this.#o.observe(this.#r,{childList:!0,subtree:!0,attributes:!0})}async stop(){u(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped")),this.#o&&(this.#o.disconnect(),this.#o=void 0)}result(){return u(this.#t,"Polling never started."),this.#t.valueOrThrow()}},w=class{#e;#r;constructor(e){this.#e=e}async start(){let e=this.#r=c.create(),r=await this.#e();if(r){e.resolve(r);return}let o=async()=>{if(e.finished())return;let n=await this.#e();if(!n){window.requestAnimationFrame(o);return}e.resolve(n),await this.stop()};window.requestAnimationFrame(o)}async stop(){u(this.#r,"Polling never started."),this.#r.finished()||this.#r.reject(new Error("Polling stopped"))}result(){return u(this.#r,"Polling never started."),this.#r.valueOrThrow()}},T=class{#e;#r;#o;#t;constructor(e,r){this.#e=e,this.#r=r}async start(){let e=this.#t=c.create(),r=await this.#e();if(r){e.resolve(r);return}this.#o=setInterval(async()=>{let o=await this.#e();o&&(e.resolve(o),await this.stop())},this.#r)}async stop(){u(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped")),this.#o&&(clearInterval(this.#o),this.#o=void 0)}result(){return u(this.#t,"Polling never started."),this.#t.valueOrThrow()}};var _={};l(_,{PCombinator:()=>H,pQuerySelector:()=>fe,pQuerySelectorAll:()=>$});var a=class{static async*map(e,r){for await(let o of e)yield await r(o)}static async*flatMap(e,r){for await(let o of e)yield*r(o)}static async collect(e){let r=[];for await(let o of e)r.push(o);return r}static async first(e){for await(let r of e)return r}};var C={};l(C,{textQuerySelectorAll:()=>m});var re=new Set(["checkbox","image","radio"]),oe=t=>t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&!re.has(t.type),ne=new Set(["SCRIPT","STYLE"]),f=t=>!ne.has(t.nodeName)&&!document.head?.contains(t),I=new WeakMap,j=t=>{for(;t;)I.delete(t),t instanceof ShadowRoot?t=t.host:t=t.parentNode},W=new WeakSet,se=new MutationObserver(t=>{for(let e of t)j(e.target)}),d=t=>{let e=I.get(t);if(e||(e={full:"",immediate:[]},!f(t)))return e;let r="";if(oe(t))e.full=t.value,e.immediate.push(t.value),t.addEventListener("input",o=>{j(o.target)},{once:!0,capture:!0});else{for(let o=t.firstChild;o;o=o.nextSibling){if(o.nodeType===Node.TEXT_NODE){e.full+=o.nodeValue??"",r+=o.nodeValue??"";continue}r&&e.immediate.push(r),r="",o.nodeType===Node.ELEMENT_NODE&&(e.full+=d(o).full)}r&&e.immediate.push(r),t instanceof Element&&t.shadowRoot&&(e.full+=d(t.shadowRoot).full),W.has(t)||(se.observe(t,{childList:!0,characterData:!0,subtree:!0}),W.add(t))}return I.set(t,e),e};var m=function*(t,e){let r=!1;for(let o of t.childNodes)if(o instanceof Element&&f(o)){let n;o.shadowRoot?n=m(o.shadowRoot,e):n=m(o,e);for(let i of n)yield i,r=!0}r||t instanceof Element&&f(t)&&d(t).full.includes(e)&&(yield t)};var k={};l(k,{checkVisibility:()=>le,pierce:()=>S,pierceAll:()=>O});var ie=["hidden","collapse"],le=(t,e)=>{if(!t)return e===!1;if(e===void 0)return t;let r=t.nodeType===Node.TEXT_NODE?t.parentElement:t,o=window.getComputedStyle(r),n=o&&!ie.includes(o.visibility)&&!ae(r);return e===n?t:!1};function ae(t){let e=t.getBoundingClientRect();return e.width===0||e.height===0}var ce=t=>"shadowRoot"in t&&t.shadowRoot instanceof ShadowRoot;function*S(t){ce(t)?yield t.shadowRoot:yield t}function*O(t){t=S(t).next().value,yield t;let e=[document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT)];for(let r of e){let o;for(;o=r.nextNode();)o.shadowRoot&&(yield o.shadowRoot,e.push(document.createTreeWalker(o.shadowRoot,NodeFilter.SHOW_ELEMENT)))}}var Q={};l(Q,{xpathQuerySelectorAll:()=>q});var q=function*(t,e,r=-1){let n=(t.ownerDocument||document).evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),i=[],s;for(;(s=n.iterateNext())&&(i.push(s),!(r&&i.length===r)););for(let h=0;h<i.length;h++)s=i[h],yield s,delete i[h]};var ue=/[-\\w\\P{ASCII}*]/u,H=(r=>(r.Descendent=">>>",r.Child=">>>>",r))(H||{}),V=t=>"querySelectorAll"in t,M=class{#e;#r=[];#o=void 0;elements;constructor(e,r){this.elements=[e],this.#e=r,this.#t()}async run(){if(typeof this.#o=="string")switch(this.#o.trimStart()){case":scope":this.#t();break}for(;this.#o!==void 0;this.#t()){let e=this.#o;typeof e=="string"?e[0]&&ue.test(e[0])?this.elements=a.flatMap(this.elements,async function*(r){V(r)&&(yield*r.querySelectorAll(e))}):this.elements=a.flatMap(this.elements,async function*(r){if(!r.parentElement){if(!V(r))return;yield*r.querySelectorAll(e);return}let o=0;for(let n of r.parentElement.children)if(++o,n===r)break;yield*r.parentElement.querySelectorAll(`:scope>:nth-child(${o})${e}`)}):this.elements=a.flatMap(this.elements,async function*(r){switch(e.name){case"text":yield*m(r,e.value);break;case"xpath":yield*q(r,e.value);break;case"aria":yield*b(r,e.value);break;default:let o=P.get(e.name);if(!o)throw new Error(`Unknown selector type: ${e.name}`);yield*o.querySelectorAll(r,e.value)}})}}#t(){if(this.#r.length!==0){this.#o=this.#r.shift();return}if(this.#e.length===0){this.#o=void 0;return}let e=this.#e.shift();switch(e){case">>>>":{this.elements=a.flatMap(this.elements,S),this.#t();break}case">>>":{this.elements=a.flatMap(this.elements,O),this.#t();break}default:this.#r=e,this.#t();break}}},D=class{#e=new WeakMap;calculate(e,r=[]){if(e===null)return r;e instanceof ShadowRoot&&(e=e.host);let o=this.#e.get(e);if(o)return[...o,...r];let n=0;for(let s=e.previousSibling;s;s=s.previousSibling)++n;let i=this.calculate(e.parentNode,[n]);return this.#e.set(e,i),[...i,...r]}},U=(t,e)=>{if(t.length+e.length===0)return 0;let[r=-1,...o]=t,[n=-1,...i]=e;return r===n?U(o,i):r<n?-1:1},de=async function*(t){let e=new Set;for await(let o of t)e.add(o);let r=new D;yield*[...e.values()].map(o=>[o,r.calculate(o)]).sort(([,o],[,n])=>U(o,n)).map(([o])=>o)},$=function(t,e){let r=JSON.parse(e);if(r.some(o=>{let n=0;return o.some(i=>(typeof i=="string"?++n:n=0,n>1))}))throw new Error("Multiple deep combinators found in sequence.");return de(a.flatMap(r,o=>{let n=new M(t,o);return n.run(),n.elements}))},fe=async function(t,e){for await(let r of $(t,e))return r;return null};var me=Object.freeze({...x,...A,...R,..._,...C,...k,...Q,...E,Deferred:c,createFunction:F,createTextContent:d,IntervalPoller:T,isSuitableNodeForTextMatching:f,MutationPoller:y,RAFPoller:w}),he=me;\n';/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Vu{#e=!1;#t=new Set;append(e){this.#r(()=>{this.#t.add(e)})}pop(e){this.#r(()=>{this.#t.delete(e)})}inject(e,t=!1){(this.#e||t)&&e(this.#i()),this.#e=!1}#r(e){e(),this.#e=!0}#i(){return`(() => {
      const module = {};
      ${Uu}
      ${[...this.#t].map(e=>`(${e})(module.exports.default);`).join("")}
      return module.exports.default;
    })()`}}const ui=new Vu;/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Ku{#e=new Map;get(e){const t=this.#e.get(e);return t?t[1]:void 0}register(e,t){k(!this.#e.has(e),`Cannot register over existing handler: ${e}`),k(/^[a-zA-Z]+$/.test(e),"Custom query handler names may only contain [a-zA-Z]"),k(t.queryAll||t.queryOne,"At least one query method must be implemented.");const r=class extends Ht{static querySelectorAll=_r((n,o,a)=>a.customQuerySelectors.get(PLACEHOLDER("name")).querySelectorAll(n,o),{name:JSON.stringify(e)});static querySelector=_r((n,o,a)=>a.customQuerySelectors.get(PLACEHOLDER("name")).querySelector(n,o),{name:JSON.stringify(e)})},s=_r(n=>{n.customQuerySelectors.register(PLACEHOLDER("name"),{queryAll:PLACEHOLDER("queryAll"),queryOne:PLACEHOLDER("queryOne")})},{name:JSON.stringify(e),queryAll:t.queryAll?Et(t.queryAll):String(void 0),queryOne:t.queryOne?Et(t.queryOne):String(void 0)}).toString();this.#e.set(e,[s,r]),ui.append(s)}unregister(e){const t=this.#e.get(e);if(!t)throw new Error(`Cannot unregister unknown handler: ${e}`);ui.pop(t[0]),this.#e.delete(e)}names(){return[...this.#e.keys()]}clear(){for(const[e]of this.#e)ui.pop(e);this.#e.clear()}}const no=new Ku;/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Wu extends Ht{static querySelector=(e,t,{pierceQuerySelector:r})=>r(e,t);static querySelectorAll=(e,t,{pierceQuerySelectorAll:r})=>r(e,t)}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class zu extends Ht{static querySelectorAll=(e,t,{pQuerySelectorAll:r})=>r(e,t);static querySelector=(e,t,{pQuerySelector:r})=>r(e,t)}var hr={attribute:/\[\s*(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)\s*(?:(?<operator>\W?=)\s*(?<value>.+?)\s*(\s(?<caseSensitive>[iIsS]))?\s*)?\]/gu,id:/#(?<name>[-\w\P{ASCII}]+)/gu,class:/\.(?<name>[-\w\P{ASCII}]+)/gu,comma:/\s*,\s*/g,combinator:/\s*[\s>+~]\s*/g,"pseudo-element":/::(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,"pseudo-class":/:(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,universal:/(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?\*/gu,type:/(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)/gu},Gu=new Set(["combinator","comma"]),Ju=i=>{switch(i){case"pseudo-element":case"pseudo-class":return new RegExp(hr[i].source.replace("(?<argument>¶*)","(?<argument>.*)"),"gu");default:return hr[i]}};function Qu(i,e){let t=0,r="";for(;e<i.length;e++){const s=i[e];switch(s){case"(":++t;break;case")":--t;break}if(r+=s,t===0)return r}return r}function Xu(i,e=hr){if(!i)return[];const t=[i];for(const[s,n]of Object.entries(e))for(let o=0;o<t.length;o++){const a=t[o];if(typeof a!="string")continue;n.lastIndex=0;const c=n.exec(a);if(!c)continue;const l=c.index-1,d=[],h=c[0],p=a.slice(0,l+1);p&&d.push(p),d.push({...c.groups,type:s,content:h});const y=a.slice(l+h.length+1);y&&d.push(y),t.splice(o,1,...d)}let r=0;for(const s of t)switch(typeof s){case"string":throw new Error(`Unexpected sequence ${s} found at index ${r}`);case"object":r+=s.content.length,s.pos=[r-s.content.length,r],Gu.has(s.type)&&(s.content=s.content.trim()||" ");break}return t}var Yu=/(['"])([^\\\n]+?)\1/g,Zu=/\\./g;function eh(i,e=hr){if(i=i.trim(),i==="")return[];const t=[];i=i.replace(Zu,(n,o)=>(t.push({value:n,offset:o}),"".repeat(n.length))),i=i.replace(Yu,(n,o,a,c)=>(t.push({value:n,offset:c}),`${o}${"".repeat(a.length)}${o}`));{let n=0,o;for(;(o=i.indexOf("(",n))>-1;){const a=Qu(i,o);t.push({value:a,offset:o}),i=`${i.substring(0,o)}(${"¶".repeat(a.length-2)})${i.substring(o+a.length)}`,n=o+a.length}}const r=Xu(i,e),s=new Set;for(const n of t.reverse())for(const o of r){const{offset:a,value:c}=n;if(!(o.pos[0]<=a&&a+c.length<=o.pos[1]))continue;const{content:l}=o,d=a-o.pos[0];o.content=l.slice(0,d)+c+l.slice(d+c.length),o.content!==l&&s.add(o)}for(const n of s){const o=Ju(n.type);if(!o)throw new Error(`Unknown token type: ${n.type}`);o.lastIndex=0;const a=o.exec(n.content);if(!a)throw new Error(`Unable to parse content for ${n.type}: ${n.content}`);Object.assign(n,a.groups)}return r}function*hi(i,e){switch(i.type){case"list":for(let t of i.list)yield*hi(t,i);break;case"complex":yield*hi(i.left,i),yield*hi(i.right,i);break;case"compound":yield*i.list.map(t=>[t,i]);break;default:yield[i,e]}}function br(i){let e;return Array.isArray(i)?e=i:e=[...hi(i)].map(([t])=>t),e.map(t=>t.content).join("")}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */hr.nesting=/&/g;hr.combinator=/\s*(>>>>?|[\s>+~])\s*/g;const th=/\\[\s\S]/g,rh=i=>i.length<=1?i:((i[0]==='"'||i[0]==="'")&&i.endsWith(i[0])&&(i=i.slice(1,-1)),i.replace(th,e=>e[1]));function ih(i){let e=!0,t=!1,r=!1;const s=eh(i);if(s.length===0)return[[],e,r,!1];let n=[],o=[n];const a=[o],c=[];for(const l of s){switch(l.type){case"combinator":switch(l.content){case">>>":e=!1,c.length&&(n.push(br(c)),c.splice(0)),n=[],o.push(">>>"),o.push(n);continue;case">>>>":e=!1,c.length&&(n.push(br(c)),c.splice(0)),n=[],o.push(">>>>"),o.push(n);continue}break;case"pseudo-element":if(!l.name.startsWith("-p-"))break;e=!1,c.length&&(n.push(br(c)),c.splice(0));const d=l.name.slice(3);d==="aria"&&(t=!0),n.push({name:d,value:rh(l.argument??"")});continue;case"pseudo-class":r=!0;break;case"comma":c.length&&(n.push(br(c)),c.splice(0)),n=[],o=[n],a.push(o);continue}c.push(l)}return c.length&&n.push(br(c)),[a,e,r,t]}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class sh extends Ht{static querySelectorAll=(e,t,{textQuerySelectorAll:r})=>r(e,t)}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class nh extends Ht{static querySelectorAll=(e,t,{xpathQuerySelectorAll:r})=>r(e,t);static querySelector=(e,t,{xpathQuerySelectorAll:r})=>{for(const s of r(e,t,1))return s;return null}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const oh={aria:nn,pierce:Wu,xpath:nh,text:sh},ah=["=","/"];function pi(i){for(const e of[no.names().map(t=>[t,no.get(t)]),Object.entries(oh)])for(const[t,r]of e)for(const s of ah){const n=`${t}${s}`;if(i.startsWith(n))return i=i.slice(n.length),{updatedSelector:i,polling:t==="aria"?"raf":"mutation",QueryHandler:r}}try{const[e,t,r,s]=ih(i);return t?{updatedSelector:i,polling:r?"raf":"mutation",QueryHandler:so}:{updatedSelector:JSON.stringify(e),polling:s?"raf":"mutation",QueryHandler:zu}}catch{return{updatedSelector:i,polling:"mutation",QueryHandler:so}}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var ch=function(i,e,t){for(var r=arguments.length>2,s=0;s<e.length;s++)t=r?e[s].call(i,t):e[s].call(i);return r?t:void 0},Z=function(i,e,t,r,s,n){function o(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?r.static?i:i.prototype:null,d=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),h,p=!1,y=t.length-1;y>=0;y--){var b={};for(var v in r)b[v]=v==="access"?{}:r[v];for(var v in r.access)b.access[v]=r.access[v];b.addInitializer=function(E){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(E||null))};var S=(0,t[y])(a==="accessor"?{get:d.get,set:d.set}:d[c],b);if(a==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(h=o(S.get))&&(d.get=h),(h=o(S.set))&&(d.set=h),(h=o(S.init))&&s.unshift(h)}else(h=o(S))&&(a==="field"?s.unshift(h):d[c]=h)}l&&Object.defineProperty(l,r.name,d),p=!0},gt=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},mt=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r}),fe;(function(i){i.FrameNavigated=Symbol("Frame.FrameNavigated"),i.FrameSwapped=Symbol("Frame.FrameSwapped"),i.LifecycleEvent=Symbol("Frame.LifecycleEvent"),i.FrameNavigatedWithinDocument=Symbol("Frame.FrameNavigatedWithinDocument"),i.FrameDetached=Symbol("Frame.FrameDetached"),i.FrameSwappedByActivation=Symbol("Frame.FrameSwappedByActivation")})(fe||(fe={}));const K=P(i=>`Attempted to use detached Frame '${i._id}'.`);let lh=(()=>{let i=Q,e=[],t,r,s,n,o,a,c,l,d,h,p,y,b,v,S,E,V,be,De,it;return class extends i{static{const g=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;t=[K],r=[K],s=[K],n=[K],o=[K],a=[K],c=[K],l=[K],d=[K],h=[K],p=[K],y=[K],b=[K],v=[K],S=[K],E=[K],V=[K],be=[K],De=[K],it=[K],Z(this,null,t,{kind:"method",name:"frameElement",static:!1,private:!1,access:{has:f=>"frameElement"in f,get:f=>f.frameElement},metadata:g},null,e),Z(this,null,r,{kind:"method",name:"evaluateHandle",static:!1,private:!1,access:{has:f=>"evaluateHandle"in f,get:f=>f.evaluateHandle},metadata:g},null,e),Z(this,null,s,{kind:"method",name:"evaluate",static:!1,private:!1,access:{has:f=>"evaluate"in f,get:f=>f.evaluate},metadata:g},null,e),Z(this,null,n,{kind:"method",name:"locator",static:!1,private:!1,access:{has:f=>"locator"in f,get:f=>f.locator},metadata:g},null,e),Z(this,null,o,{kind:"method",name:"$",static:!1,private:!1,access:{has:f=>"$"in f,get:f=>f.$},metadata:g},null,e),Z(this,null,a,{kind:"method",name:"$$",static:!1,private:!1,access:{has:f=>"$$"in f,get:f=>f.$$},metadata:g},null,e),Z(this,null,c,{kind:"method",name:"$eval",static:!1,private:!1,access:{has:f=>"$eval"in f,get:f=>f.$eval},metadata:g},null,e),Z(this,null,l,{kind:"method",name:"$$eval",static:!1,private:!1,access:{has:f=>"$$eval"in f,get:f=>f.$$eval},metadata:g},null,e),Z(this,null,d,{kind:"method",name:"waitForSelector",static:!1,private:!1,access:{has:f=>"waitForSelector"in f,get:f=>f.waitForSelector},metadata:g},null,e),Z(this,null,h,{kind:"method",name:"waitForFunction",static:!1,private:!1,access:{has:f=>"waitForFunction"in f,get:f=>f.waitForFunction},metadata:g},null,e),Z(this,null,p,{kind:"method",name:"content",static:!1,private:!1,access:{has:f=>"content"in f,get:f=>f.content},metadata:g},null,e),Z(this,null,y,{kind:"method",name:"addScriptTag",static:!1,private:!1,access:{has:f=>"addScriptTag"in f,get:f=>f.addScriptTag},metadata:g},null,e),Z(this,null,b,{kind:"method",name:"addStyleTag",static:!1,private:!1,access:{has:f=>"addStyleTag"in f,get:f=>f.addStyleTag},metadata:g},null,e),Z(this,null,v,{kind:"method",name:"click",static:!1,private:!1,access:{has:f=>"click"in f,get:f=>f.click},metadata:g},null,e),Z(this,null,S,{kind:"method",name:"focus",static:!1,private:!1,access:{has:f=>"focus"in f,get:f=>f.focus},metadata:g},null,e),Z(this,null,E,{kind:"method",name:"hover",static:!1,private:!1,access:{has:f=>"hover"in f,get:f=>f.hover},metadata:g},null,e),Z(this,null,V,{kind:"method",name:"select",static:!1,private:!1,access:{has:f=>"select"in f,get:f=>f.select},metadata:g},null,e),Z(this,null,be,{kind:"method",name:"tap",static:!1,private:!1,access:{has:f=>"tap"in f,get:f=>f.tap},metadata:g},null,e),Z(this,null,De,{kind:"method",name:"type",static:!1,private:!1,access:{has:f=>"type"in f,get:f=>f.type},metadata:g},null,e),Z(this,null,it,{kind:"method",name:"title",static:!1,private:!1,access:{has:f=>"title"in f,get:f=>f.title},metadata:g},null,e),g&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:g})}_id=ch(this,e);_parentId;_name;_hasStartedLoading=!1;constructor(){super()}#e;#t(){return this.#e||(this.#e=this.mainRealm().evaluateHandle(()=>document)),this.#e}clearDocumentHandle(){this.#e=void 0}async frameElement(){const g={stack:[],error:void 0,hasError:!1};try{const f=this.parentFrame();if(!f)return null;const x=gt(g,await f.isolatedRealm().evaluateHandle(()=>document.querySelectorAll("iframe,frame")),!1);for await(const A of Da(x)){const X={stack:[],error:void 0,hasError:!1};try{const Ce=gt(X,A,!1);if((await Ce.contentFrame())?._id===this._id)return Ce.move()}catch(Ce){X.error=Ce,X.hasError=!0}finally{mt(X)}}return null}catch(f){g.error=f,g.hasError=!0}finally{mt(g)}}async evaluateHandle(g,...f){return g=ae(this.evaluateHandle.name,g),await this.mainRealm().evaluateHandle(g,...f)}async evaluate(g,...f){return g=ae(this.evaluate.name,g),await this.mainRealm().evaluate(g,...f)}locator(g){return typeof g=="string"?jr.create(this,g):Or.create(this,g)}async $(g){return await(await this.#t()).$(g)}async $$(g,f){return await(await this.#t()).$$(g,f)}async $eval(g,f,...x){return f=ae(this.$eval.name,f),await(await this.#t()).$eval(g,f,...x)}async $$eval(g,f,...x){return f=ae(this.$$eval.name,f),await(await this.#t()).$$eval(g,f,...x)}async waitForSelector(g,f={}){const{updatedSelector:x,QueryHandler:A,polling:X}=pi(g);return await A.waitFor(this,x,{polling:X,...f})}async waitForFunction(g,f={},...x){return await this.mainRealm().waitForFunction(g,f,...x)}async content(){return await this.evaluate(()=>{let g="";for(const f of document.childNodes)switch(f){case document.documentElement:g+=document.documentElement.outerHTML;break;default:g+=new XMLSerializer().serializeToString(f);break}return g})}async setFrameContent(g){return await this.evaluate(f=>{document.open(),document.write(f),document.close()},g)}name(){return this._name||""}isDetached(){return this.detached}get disposed(){return this.detached}async addScriptTag(g){let{content:f="",type:x}=g;const{path:A}=g;if(+!!g.url+ +!!A+ +!!f!=1)throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");return A&&(f=await Dt.value.fs.promises.readFile(A,"utf8"),f+=`//# sourceURL=${A.replace(/\n/g,"")}`),x=x??"text/javascript",await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async({url:X,id:Ce,type:st,content:xe})=>await new Promise((Pe,ut)=>{const Ae=document.createElement("script");Ae.type=st,Ae.text=xe,Ae.addEventListener("error",cc=>{ut(new Error(cc.message??"Could not load script"))},{once:!0}),Ce&&(Ae.id=Ce),X?(Ae.src=X,Ae.addEventListener("load",()=>{Pe(Ae)},{once:!0}),document.head.appendChild(Ae)):(document.head.appendChild(Ae),Pe(Ae))}),{...g,type:x,content:f}))}async addStyleTag(g){let{content:f=""}=g;const{path:x}=g;if(+!!g.url+ +!!x+ +!!f!=1)throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");return x&&(f=await Dt.value.fs.promises.readFile(x,"utf8"),f+="/*# sourceURL="+x.replace(/\n/g,"")+"*/",g.content=f),await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async({url:A,content:X})=>await new Promise((Ce,st)=>{let xe;if(!A)xe=document.createElement("style"),xe.appendChild(document.createTextNode(X));else{const Pe=document.createElement("link");Pe.rel="stylesheet",Pe.href=A,xe=Pe}return xe.addEventListener("load",()=>{Ce(xe)},{once:!0}),xe.addEventListener("error",Pe=>{st(new Error(Pe.message??"Could not load style"))},{once:!0}),document.head.appendChild(xe),xe}),g))}async click(g,f={}){const x={stack:[],error:void 0,hasError:!1};try{const A=gt(x,await this.$(g),!1);k(A,`No element found for selector: ${g}`),await A.click(f),await A.dispose()}catch(A){x.error=A,x.hasError=!0}finally{mt(x)}}async focus(g){const f={stack:[],error:void 0,hasError:!1};try{const x=gt(f,await this.$(g),!1);k(x,`No element found for selector: ${g}`),await x.focus()}catch(x){f.error=x,f.hasError=!0}finally{mt(f)}}async hover(g){const f={stack:[],error:void 0,hasError:!1};try{const x=gt(f,await this.$(g),!1);k(x,`No element found for selector: ${g}`),await x.hover()}catch(x){f.error=x,f.hasError=!0}finally{mt(f)}}async select(g,...f){const x={stack:[],error:void 0,hasError:!1};try{const A=gt(x,await this.$(g),!1);return k(A,`No element found for selector: ${g}`),await A.select(...f)}catch(A){x.error=A,x.hasError=!0}finally{mt(x)}}async tap(g){const f={stack:[],error:void 0,hasError:!1};try{const x=gt(f,await this.$(g),!1);k(x,`No element found for selector: ${g}`),await x.tap()}catch(x){f.error=x,f.hasError=!0}finally{mt(f)}}async type(g,f,x){const A={stack:[],error:void 0,hasError:!1};try{const X=gt(A,await this.$(g),!1);k(X,`No element found for selector: ${g}`),await X.type(f,x)}catch(X){A.error=X,A.hasError=!0}finally{mt(A)}}async title(){return await this.isolatedRealm().evaluate(()=>document.title)}}})();/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class dh{#e;#t;#r=new WeakMap;constructor(e,t,r){this.#e=t,this.#t=r,this.#r.set(e,t)}get id(){return this.#e}get source(){return this.#t}getIdForFrame(e){return this.#r.get(e)}setIdForFrame(e,t){this.#r.set(e,t)}}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class uh{id;name;constructor(e,t){this.id=e,this.name=t}}class hh{#e;#t;#r;#i=!1;#s=this.#o.bind(this);#n=new Set;devices=[];constructor(e,t,r){this.#e=e,this.#t=t,this.#r=r.id,this.#e.on("DeviceAccess.deviceRequestPrompted",this.#s),this.#e.on("Target.detachedFromTarget",()=>{this.#e=null}),this.#o(r)}#o(e){if(e.id===this.#r)for(const t of e.devices){if(this.devices.some(s=>s.id===t.id))continue;const r=new uh(t.id,t.name);this.devices.push(r);for(const s of this.#n)s.filter(r)&&s.promise.resolve(r)}}async waitForDevice(e,t={}){for(const o of this.devices)if(e(o))return o;const{timeout:r=this.#t.timeout()}=t,s=B.create({message:`Waiting for \`DeviceRequestPromptDevice\` failed: ${r}ms exceeded`,timeout:r});t.signal&&t.signal.addEventListener("abort",()=>{s.reject(t.signal?.reason)},{once:!0});const n={filter:e,promise:s};this.#n.add(n);try{return await s.valueOrThrow()}finally{this.#n.delete(n)}}async select(e){return k(this.#e!==null,"Cannot select device through detached session!"),k(this.devices.includes(e),"Cannot select unknown device!"),k(!this.#i,"Cannot select DeviceRequestPrompt which is already handled!"),this.#e.off("DeviceAccess.deviceRequestPrompted",this.#s),this.#i=!0,await this.#e.send("DeviceAccess.selectPrompt",{id:this.#r,deviceId:e.id})}async cancel(){return k(this.#e!==null,"Cannot cancel prompt through detached session!"),k(!this.#i,"Cannot cancel DeviceRequestPrompt which is already handled!"),this.#e.off("DeviceAccess.deviceRequestPrompted",this.#s),this.#i=!0,await this.#e.send("DeviceAccess.cancelPrompt",{id:this.#r})}}class ph{#e;#t;#r=new Set;constructor(e,t){this.#e=e,this.#t=t,this.#e.on("DeviceAccess.deviceRequestPrompted",r=>{this.#i(r)}),this.#e.on("Target.detachedFromTarget",()=>{this.#e=null})}async waitForDevicePrompt(e={}){k(this.#e!==null,"Cannot wait for device prompt through detached session!");const t=this.#r.size===0;let r;t&&(r=this.#e.send("DeviceAccess.enable"));const{timeout:s=this.#t.timeout()}=e,n=B.create({message:`Waiting for \`DeviceRequestPrompt\` failed: ${s}ms exceeded`,timeout:s});e.signal&&e.signal.addEventListener("abort",()=>{n.reject(e.signal?.reason)},{once:!0}),this.#r.add(n);try{const[o]=await Promise.all([n.valueOrThrow(),r]);return o}finally{this.#r.delete(n)}}#i(e){if(!this.#r.size)return;k(this.#e!==null);const t=new hh(this.#e,this.#t,e);for(const r of this.#r)r.resolve(t);this.#r.clear()}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var fh=function(i,e,t){for(var r=arguments.length>2,s=0;s<e.length;s++)t=r?e[s].call(i,t):e[s].call(i);return r?t:void 0},D=function(i,e,t,r,s,n){function o(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?r.static?i:i.prototype:null,d=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),h,p=!1,y=t.length-1;y>=0;y--){var b={};for(var v in r)b[v]=v==="access"?{}:r[v];for(var v in r.access)b.access[v]=r.access[v];b.addInitializer=function(E){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(E||null))};var S=(0,t[y])(a==="accessor"?{get:d.get,set:d.set}:d[c],b);if(a==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(h=o(S.get))&&(d.get=h),(h=o(S.set))&&(d.set=h),(h=o(S.init))&&s.unshift(h)}else(h=o(S))&&(a==="field"?s.unshift(h):d[c]=h)}l&&Object.defineProperty(l,r.name,d),p=!0},Sr=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},kr=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r}),gh=function(i,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:t?"".concat(t," ",e):e})};function N(i,e){return async function(...t){if(this.realm===this.frame.isolatedRealm())return await i.call(this,...t);let r;this.isolatedHandle?r=this.isolatedHandle:this.isolatedHandle=r=await this.frame.isolatedRealm().adoptHandle(this);const s=await i.call(r,...t);return s===r?this:s instanceof sr?await this.realm.transferHandle(s):(Array.isArray(s)&&await Promise.all(s.map(async(n,o,a)=>{n instanceof sr&&(a[o]=await this.realm.transferHandle(n))})),s instanceof Map&&await Promise.all([...s.entries()].map(async([n,o])=>{o instanceof sr&&s.set(n,await this.realm.transferHandle(o))})),s)}}let mh=(()=>{let i=sr,e=[],t,r,s,n,o,a,c,l,d,h,p,y,b,v,S,E,V,be,De,it,C,g,f,x,A,X,Ce,st,xe,Pe,ut,Ae;return class Ps extends i{static{const m=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;t=[P(),N],r=[P(),N],s=[P(),N],n=[P(),N],o=[P()],a=[N],l=[P(),N],d=[P(),N],h=[P(),N],p=[P(),N],y=[P(),N],b=[P(),N],v=[P(),N],S=[P(),N],E=[P(),N],V=[P(),N],be=[P(),N],De=[P(),N],it=[P(),N],C=[P(),N],g=[P(),N],f=[P(),N],x=[P(),N],A=[P(),N],X=[P(),N],Ce=[P(),N],st=[P(),N],xe=[P(),N],Pe=[P(),N],ut=[P(),N],Ae=[P(),N],D(this,null,t,{kind:"method",name:"getProperty",static:!1,private:!1,access:{has:u=>"getProperty"in u,get:u=>u.getProperty},metadata:m},null,e),D(this,null,r,{kind:"method",name:"getProperties",static:!1,private:!1,access:{has:u=>"getProperties"in u,get:u=>u.getProperties},metadata:m},null,e),D(this,null,s,{kind:"method",name:"jsonValue",static:!1,private:!1,access:{has:u=>"jsonValue"in u,get:u=>u.jsonValue},metadata:m},null,e),D(this,null,n,{kind:"method",name:"$",static:!1,private:!1,access:{has:u=>"$"in u,get:u=>u.$},metadata:m},null,e),D(this,null,o,{kind:"method",name:"$$",static:!1,private:!1,access:{has:u=>"$$"in u,get:u=>u.$$},metadata:m},null,e),D(this,c={value:gh(async function(u){return await this.#t(u)},"#$$")},a,{kind:"method",name:"#$$",static:!1,private:!0,access:{has:u=>#e in u,get:u=>u.#e},metadata:m},null,e),D(this,null,l,{kind:"method",name:"waitForSelector",static:!1,private:!1,access:{has:u=>"waitForSelector"in u,get:u=>u.waitForSelector},metadata:m},null,e),D(this,null,d,{kind:"method",name:"isVisible",static:!1,private:!1,access:{has:u=>"isVisible"in u,get:u=>u.isVisible},metadata:m},null,e),D(this,null,h,{kind:"method",name:"isHidden",static:!1,private:!1,access:{has:u=>"isHidden"in u,get:u=>u.isHidden},metadata:m},null,e),D(this,null,p,{kind:"method",name:"toElement",static:!1,private:!1,access:{has:u=>"toElement"in u,get:u=>u.toElement},metadata:m},null,e),D(this,null,y,{kind:"method",name:"clickablePoint",static:!1,private:!1,access:{has:u=>"clickablePoint"in u,get:u=>u.clickablePoint},metadata:m},null,e),D(this,null,b,{kind:"method",name:"hover",static:!1,private:!1,access:{has:u=>"hover"in u,get:u=>u.hover},metadata:m},null,e),D(this,null,v,{kind:"method",name:"click",static:!1,private:!1,access:{has:u=>"click"in u,get:u=>u.click},metadata:m},null,e),D(this,null,S,{kind:"method",name:"drag",static:!1,private:!1,access:{has:u=>"drag"in u,get:u=>u.drag},metadata:m},null,e),D(this,null,E,{kind:"method",name:"dragEnter",static:!1,private:!1,access:{has:u=>"dragEnter"in u,get:u=>u.dragEnter},metadata:m},null,e),D(this,null,V,{kind:"method",name:"dragOver",static:!1,private:!1,access:{has:u=>"dragOver"in u,get:u=>u.dragOver},metadata:m},null,e),D(this,null,be,{kind:"method",name:"drop",static:!1,private:!1,access:{has:u=>"drop"in u,get:u=>u.drop},metadata:m},null,e),D(this,null,De,{kind:"method",name:"dragAndDrop",static:!1,private:!1,access:{has:u=>"dragAndDrop"in u,get:u=>u.dragAndDrop},metadata:m},null,e),D(this,null,it,{kind:"method",name:"select",static:!1,private:!1,access:{has:u=>"select"in u,get:u=>u.select},metadata:m},null,e),D(this,null,C,{kind:"method",name:"tap",static:!1,private:!1,access:{has:u=>"tap"in u,get:u=>u.tap},metadata:m},null,e),D(this,null,g,{kind:"method",name:"touchStart",static:!1,private:!1,access:{has:u=>"touchStart"in u,get:u=>u.touchStart},metadata:m},null,e),D(this,null,f,{kind:"method",name:"touchMove",static:!1,private:!1,access:{has:u=>"touchMove"in u,get:u=>u.touchMove},metadata:m},null,e),D(this,null,x,{kind:"method",name:"touchEnd",static:!1,private:!1,access:{has:u=>"touchEnd"in u,get:u=>u.touchEnd},metadata:m},null,e),D(this,null,A,{kind:"method",name:"focus",static:!1,private:!1,access:{has:u=>"focus"in u,get:u=>u.focus},metadata:m},null,e),D(this,null,X,{kind:"method",name:"type",static:!1,private:!1,access:{has:u=>"type"in u,get:u=>u.type},metadata:m},null,e),D(this,null,Ce,{kind:"method",name:"press",static:!1,private:!1,access:{has:u=>"press"in u,get:u=>u.press},metadata:m},null,e),D(this,null,st,{kind:"method",name:"boundingBox",static:!1,private:!1,access:{has:u=>"boundingBox"in u,get:u=>u.boundingBox},metadata:m},null,e),D(this,null,xe,{kind:"method",name:"boxModel",static:!1,private:!1,access:{has:u=>"boxModel"in u,get:u=>u.boxModel},metadata:m},null,e),D(this,null,Pe,{kind:"method",name:"screenshot",static:!1,private:!1,access:{has:u=>"screenshot"in u,get:u=>u.screenshot},metadata:m},null,e),D(this,null,ut,{kind:"method",name:"isIntersectingViewport",static:!1,private:!1,access:{has:u=>"isIntersectingViewport"in u,get:u=>u.isIntersectingViewport},metadata:m},null,e),D(this,null,Ae,{kind:"method",name:"scrollIntoView",static:!1,private:!1,access:{has:u=>"scrollIntoView"in u,get:u=>u.scrollIntoView},metadata:m},null,e),m&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:m})}isolatedHandle=fh(this,e);handle;constructor(m){super(),this.handle=m,this[li]=!0}get id(){return this.handle.id}get disposed(){return this.handle.disposed}async getProperty(m){return await this.handle.getProperty(m)}async getProperties(){return await this.handle.getProperties()}async evaluate(m,...u){return m=ae(this.evaluate.name,m),await this.handle.evaluate(m,...u)}async evaluateHandle(m,...u){return m=ae(this.evaluateHandle.name,m),await this.handle.evaluateHandle(m,...u)}async jsonValue(){return await this.handle.jsonValue()}toString(){return this.handle.toString()}remoteObject(){return this.handle.remoteObject()}dispose(){return this.handle.dispose()}asElement(){return this}async $(m){const{updatedSelector:u,QueryHandler:T}=pi(m);return await T.queryOne(this,u)}async $$(m,u){return u?.isolate===!1?await this.#t(m):await this.#e(m)}get#e(){return c.value}async#t(m){const{updatedSelector:u,QueryHandler:T}=pi(m);return await Oi.collect(T.queryAll(this,u))}async $eval(m,u,...T){const _={stack:[],error:void 0,hasError:!1};try{u=ae(this.$eval.name,u);const R=Sr(_,await this.$(m),!1);if(!R)throw new Error(`Error: failed to find element matching selector "${m}"`);return await R.evaluate(u,...T)}catch(R){_.error=R,_.hasError=!0}finally{kr(_)}}async $$eval(m,u,...T){const _={stack:[],error:void 0,hasError:!1};try{u=ae(this.$$eval.name,u);const R=await this.$$(m),F=Sr(_,await this.evaluateHandle((de,...Te)=>Te,...R),!1),[re]=await Promise.all([F.evaluate(u,...T),...R.map(de=>de.dispose())]);return re}catch(R){_.error=R,_.hasError=!0}finally{kr(_)}}async waitForSelector(m,u={}){const{updatedSelector:T,QueryHandler:_,polling:R}=pi(m);return await _.waitFor(this,T,{polling:R,...u})}async#r(m){return await this.evaluate(async(u,T,_)=>!!T.checkVisibility(u,_),He.create(u=>u.puppeteerUtil),m)}async isVisible(){return await this.#r(!0)}async isHidden(){return await this.#r(!1)}async toElement(m){if(!await this.evaluate((T,_)=>T.nodeName===_.toUpperCase(),m))throw new Error(`Element is not a(n) \`${m}\` element`);return this}async clickablePoint(m){const u=await this.#i();if(!u)throw new Error("Node is either not clickable or not an Element");return m!==void 0?{x:u.x+m.x,y:u.y+m.y}:{x:u.x+u.width/2,y:u.y+u.height/2}}async hover(){await this.scrollIntoViewIfNeeded();const{x:m,y:u}=await this.clickablePoint();await this.frame.page().mouse.move(m,u)}async click(m={}){await this.scrollIntoViewIfNeeded();const{x:u,y:T}=await this.clickablePoint(m.offset);await this.frame.page().mouse.click(u,T,m)}async drag(m){await this.scrollIntoViewIfNeeded();const u=this.frame.page();if(u.isDragInterceptionEnabled()){const T=await this.clickablePoint();return m instanceof Ps&&(m=await m.clickablePoint()),await u.mouse.drag(T,m)}try{u._isDragging||(u._isDragging=!0,await this.hover(),await u.mouse.down()),m instanceof Ps?await m.hover():await u.mouse.move(m.x,m.y)}catch(T){throw u._isDragging=!1,T}}async dragEnter(m={items:[],dragOperationsMask:1}){const u=this.frame.page();await this.scrollIntoViewIfNeeded();const T=await this.clickablePoint();await u.mouse.dragEnter(T,m)}async dragOver(m={items:[],dragOperationsMask:1}){const u=this.frame.page();await this.scrollIntoViewIfNeeded();const T=await this.clickablePoint();await u.mouse.dragOver(T,m)}async drop(m={items:[],dragOperationsMask:1}){const u=this.frame.page();if("items"in m){await this.scrollIntoViewIfNeeded();const T=await this.clickablePoint();await u.mouse.drop(T,m)}else await m.drag(this),u._isDragging=!1,await u.mouse.up()}async dragAndDrop(m,u){const T=this.frame.page();k(T.isDragInterceptionEnabled(),"Drag Interception is not enabled!"),await this.scrollIntoViewIfNeeded();const _=await this.clickablePoint(),R=await m.clickablePoint();await T.mouse.dragAndDrop(_,R,u)}async select(...m){for(const u of m)k(qt(u),'Values must be strings. Found value "'+u+'" of type "'+typeof u+'"');return await this.evaluate((u,T)=>{const _=new Set(T);if(!(u instanceof HTMLSelectElement))throw new Error("Element is not a <select> element.");const R=new Set;if(u.multiple)for(const F of u.options)F.selected=_.has(F.value),F.selected&&R.add(F.value);else{for(const F of u.options)F.selected=!1;for(const F of u.options)if(_.has(F.value)){F.selected=!0,R.add(F.value);break}}return u.dispatchEvent(new Event("input",{bubbles:!0})),u.dispatchEvent(new Event("change",{bubbles:!0})),[...R.values()]},m)}async tap(){await this.scrollIntoViewIfNeeded();const{x:m,y:u}=await this.clickablePoint();await this.frame.page().touchscreen.tap(m,u)}async touchStart(){await this.scrollIntoViewIfNeeded();const{x:m,y:u}=await this.clickablePoint();await this.frame.page().touchscreen.touchStart(m,u)}async touchMove(){await this.scrollIntoViewIfNeeded();const{x:m,y:u}=await this.clickablePoint();await this.frame.page().touchscreen.touchMove(m,u)}async touchEnd(){await this.scrollIntoViewIfNeeded(),await this.frame.page().touchscreen.touchEnd()}async focus(){await this.evaluate(m=>{if(!(m instanceof HTMLElement))throw new Error("Cannot focus non-HTMLElement");return m.focus()})}async type(m,u){await this.focus(),await this.frame.page().keyboard.type(m,u)}async press(m,u){await this.focus(),await this.frame.page().keyboard.press(m,u)}async#i(){const m=await this.evaluate(R=>R instanceof Element?[...R.getClientRects()].map(F=>({x:F.x,y:F.y,width:F.width,height:F.height})):null);if(!m?.length)return null;await this.#s(m);let u=this.frame,T;for(;T=u?.parentFrame();){const R={stack:[],error:void 0,hasError:!1};try{const F=Sr(R,await u.frameElement(),!1);if(!F)throw new Error("Unsupported frame type");const re=await F.evaluate(de=>{if(de.getClientRects().length===0)return null;const Te=de.getBoundingClientRect(),ht=window.getComputedStyle(de);return{left:Te.left+parseInt(ht.paddingLeft,10)+parseInt(ht.borderLeftWidth,10),top:Te.top+parseInt(ht.paddingTop,10)+parseInt(ht.borderTopWidth,10)}});if(!re)return null;for(const de of m)de.x+=re.left,de.y+=re.top;await F.#s(m),u=T}catch(F){R.error=F,R.hasError=!0}finally{kr(R)}}const _=m.find(R=>R.width>=1&&R.height>=1);return _?{x:_.x,y:_.y,height:_.height,width:_.width}:null}async#s(m){const{documentWidth:u,documentHeight:T}=await this.frame.isolatedRealm().evaluate(()=>({documentWidth:document.documentElement.clientWidth,documentHeight:document.documentElement.clientHeight}));for(const _ of m)yh(_,u,T)}async boundingBox(){const m=await this.evaluate(T=>{if(!(T instanceof Element)||T.getClientRects().length===0)return null;const _=T.getBoundingClientRect();return{x:_.x,y:_.y,width:_.width,height:_.height}});if(!m)return null;const u=await this.#n();return u?{x:m.x+u.x,y:m.y+u.y,height:m.height,width:m.width}:null}async boxModel(){const m=await this.evaluate(T=>{if(!(T instanceof Element)||T.getClientRects().length===0)return null;const _=T.getBoundingClientRect(),R=window.getComputedStyle(T),F={padding:{left:parseInt(R.paddingLeft,10),top:parseInt(R.paddingTop,10),right:parseInt(R.paddingRight,10),bottom:parseInt(R.paddingBottom,10)},margin:{left:-parseInt(R.marginLeft,10),top:-parseInt(R.marginTop,10),right:-parseInt(R.marginRight,10),bottom:-parseInt(R.marginBottom,10)},border:{left:parseInt(R.borderLeft,10),top:parseInt(R.borderTop,10),right:parseInt(R.borderRight,10),bottom:parseInt(R.borderBottom,10)}},re=[{x:_.left,y:_.top},{x:_.left+_.width,y:_.top},{x:_.left+_.width,y:_.top+_.height},{x:_.left,y:_.top+_.height}],de=Wi(re,F.border),Te=Wi(de,F.padding),ht=Wi(re,F.margin);return{content:Te,padding:de,border:re,margin:ht,width:_.width,height:_.height};function Wi(pt,ft){return[{x:pt[0].x+ft.left,y:pt[0].y+ft.top},{x:pt[1].x-ft.right,y:pt[1].y+ft.top},{x:pt[2].x-ft.right,y:pt[2].y-ft.bottom},{x:pt[3].x+ft.left,y:pt[3].y-ft.bottom}]}});if(!m)return null;const u=await this.#n();if(!u)return null;for(const T of["content","padding","border","margin"])for(const _ of m[T])_.x+=u.x,_.y+=u.y;return m}async#n(){const m={x:0,y:0};let u=this.frame,T;for(;T=u?.parentFrame();){const _={stack:[],error:void 0,hasError:!1};try{const R=Sr(_,await u.frameElement(),!1);if(!R)throw new Error("Unsupported frame type");const F=await R.evaluate(re=>{if(re.getClientRects().length===0)return null;const de=re.getBoundingClientRect(),Te=window.getComputedStyle(re);return{left:de.left+parseInt(Te.paddingLeft,10)+parseInt(Te.borderLeftWidth,10),top:de.top+parseInt(Te.paddingTop,10)+parseInt(Te.borderTopWidth,10)}});if(!F)return null;m.x+=F.left,m.y+=F.top,u=T}catch(R){_.error=R,_.hasError=!0}finally{kr(_)}}return m}async screenshot(m={}){const{scrollIntoView:u=!0,clip:T}=m,_=this.frame.page();u&&await this.scrollIntoViewIfNeeded();const R=await this.#o(),[F,re]=await this.evaluate(()=>{if(!window.visualViewport)throw new Error("window.visualViewport is not supported.");return[window.visualViewport.pageLeft,window.visualViewport.pageTop]});return R.x+=F,R.y+=re,T&&(R.x+=T.x,R.y+=T.y,R.height=T.height,R.width=T.width),await _.screenshot({...m,clip:R})}async#o(){const m=await this.boundingBox();return k(m,"Node is either not visible or not an HTMLElement"),k(m.width!==0,"Node has 0 width."),k(m.height!==0,"Node has 0 height."),m}async assertConnectedElement(){const m=await this.evaluate(async u=>{if(!u.isConnected)return"Node is detached from document";if(u.nodeType!==Node.ELEMENT_NODE)return"Node is not of type HTMLElement"});if(m)throw new Error(m)}async scrollIntoViewIfNeeded(){await this.isIntersectingViewport({threshold:1})||await this.scrollIntoView()}async isIntersectingViewport(m={}){const u={stack:[],error:void 0,hasError:!1};try{await this.assertConnectedElement();const T=await this.#a();return await(Sr(u,T&&await T.#c(),!1)??this).evaluate(async(R,F)=>{const re=await new Promise(de=>{const Te=new IntersectionObserver(ht=>{de(ht[0].intersectionRatio),Te.disconnect()});Te.observe(R)});return F===1?re===1:re>F},m.threshold??0)}catch(T){u.error=T,u.hasError=!0}finally{kr(u)}}async scrollIntoView(){await this.assertConnectedElement(),await this.evaluate(async m=>{m.scrollIntoView({block:"center",inline:"center",behavior:"instant"})})}async#a(){return await this.evaluate(m=>m instanceof SVGElement)?this:null}async#c(){return await this.evaluateHandle(m=>m instanceof SVGSVGElement?m:m.ownerSVGElement)}}})();function yh(i,e,t){i.width=Math.max(i.x>=0?Math.min(e-i.x,i.width):Math.min(e,i.width+i.x),0),i.height=Math.max(i.y>=0?Math.min(t-i.y,i.height):Math.min(t,i.height+i.y),0)}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */function oo(i){let e,t;if(!i.exception)e="Error",t=i.text;else{if((i.exception.type!=="object"||i.exception.subtype!=="error")&&!i.exception.objectId)return jt(i.exception);{const a=Ma(i);e=a.name,t=a.message}}const r=t.split(`
`).length,s=new Error(t);s.name=e;const n=s.stack.split(`
`),o=n.splice(0,r);if(n.shift(),i.stackTrace&&n.length<Error.stackTraceLimit)for(const a of i.stackTrace.callFrames.reverse()){if(Ze.isPuppeteerURL(a.url)&&a.url!==Ze.INTERNAL_URL){const c=Ze.parse(a.url);n.unshift(`    at ${a.functionName||c.functionName} (${c.functionName} at ${c.siteString}, <anonymous>:${a.lineNumber}:${a.columnNumber})`)}else n.push(`    at ${a.functionName||"<anonymous>"} (${a.url}:${a.lineNumber}:${a.columnNumber})`);if(n.length>=Error.stackTraceLimit)break}return s.stack=[...o,...n].join(`
`),s}const Ma=i=>{let e="",t;const r=i.exception?.description?.split(`
    at `)??[],s=Math.min(i.stackTrace?.callFrames.length??0,r.length-1);return r.splice(-s,s),i.exception?.className&&(e=i.exception.className),t=r.join(`
`),e&&t.startsWith(`${e}: `)&&(t=t.slice(e.length+2)),{message:t,name:e}};function wh(i){let e,t;if(!i.exception)e="Error",t=i.text;else{if((i.exception.type!=="object"||i.exception.subtype!=="error")&&!i.exception.objectId)return jt(i.exception);{const a=Ma(i);e=a.name,t=a.message}}const r=new Error(t);r.name=e;const s=r.message.split(`
`).length,n=r.stack.split(`
`).splice(0,s),o=[];if(i.stackTrace){for(const a of i.stackTrace.callFrames)if(o.push(`    at ${a.functionName||"<anonymous>"} (${a.url}:${a.lineNumber+1}:${a.columnNumber+1})`),o.length>=Error.stackTraceLimit)break}return r.stack=[...n,...o].join(`
`),r}function jt(i){if(k(!i.objectId,"Cannot extract value when objectId is given"),i.unserializableValue){if(i.type==="bigint")return BigInt(i.unserializableValue.replace("n",""));switch(i.unserializableValue){case"-0":return-0;case"NaN":return NaN;case"Infinity":return 1/0;case"-Infinity":return-1/0;default:throw new Error("Unsupported unserializable value: "+i.unserializableValue)}}return i.value}function La(i,e,t){globalThis[e]||Object.assign(globalThis,{[e](...r){const s=globalThis[e];s.args??=new Map,s.callbacks??=new Map;const n=(s.lastSeq??0)+1;return s.lastSeq=n,s.args.set(n,r),globalThis[t+e](JSON.stringify({type:i,name:e,seq:n,args:r,isTrivial:!r.some(o=>o instanceof Node)})),new Promise((o,a)=>{s.callbacks.set(n,{resolve(c){s.args.delete(n),o(c)},reject(c){s.args.delete(n),a(c)}})})}})}const nr="puppeteer_";function vh(i,e){return _a(La,i,e,nr)}/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class ji extends sr{#e=!1;#t;#r;constructor(e,t){super(),this.#r=e,this.#t=t}get disposed(){return this.#e}get realm(){return this.#r}get client(){return this.realm.environment.client}async jsonValue(){if(!this.#t.objectId)return jt(this.#t);const e=await this.evaluate(t=>t);if(e===void 0)throw new Error("Could not serialize referenced object");return e}asElement(){return null}async dispose(){this.#e||(this.#e=!0,await Oa(this.client,this.#t))}toString(){return this.#t.objectId?"JSHandle@"+(this.#t.subtype||this.#t.type):"JSHandle:"+jt(this.#t)}get id(){return this.#t.objectId}remoteObject(){return this.#t}async getProperties(){const e=await this.client.send("Runtime.getProperties",{objectId:this.#t.objectId,ownProperties:!0}),t=new Map;for(const r of e.result)!r.enumerable||!r.value||t.set(r.name,this.#r.createCdpHandle(r.value));return t}}async function Oa(i,e){e.objectId&&await i.send("Runtime.releaseObject",{objectId:e.objectId}).catch(t=>{I(t)})}/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var bh=function(i,e,t){for(var r=arguments.length>2,s=0;s<e.length;s++)t=r?e[s].call(i,t):e[s].call(i);return r?t:void 0},Zr=function(i,e,t,r,s,n){function o(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?r.static?i:i.prototype:null,d=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),h,p=!1,y=t.length-1;y>=0;y--){var b={};for(var v in r)b[v]=v==="access"?{}:r[v];for(var v in r.access)b.access[v]=r.access[v];b.addInitializer=function(E){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(E||null))};var S=(0,t[y])(a==="accessor"?{get:d.get,set:d.set}:d[c],b);if(a==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(h=o(S.get))&&(d.get=h),(h=o(S.set))&&(d.set=h),(h=o(S.init))&&s.unshift(h)}else(h=o(S))&&(a==="field"?s.unshift(h):d[c]=h)}l&&Object.defineProperty(l,r.name,d),p=!0};const Sh=new Set(["StaticText","InlineTextBox"]);let ja=(()=>{let i=mh,e=[],t,r,s,n;return class extends i{static{const a=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;t=[P()],r=[P(),N],s=[P(),N],n=[P()],Zr(this,null,t,{kind:"method",name:"contentFrame",static:!1,private:!1,access:{has:c=>"contentFrame"in c,get:c=>c.contentFrame},metadata:a},null,e),Zr(this,null,r,{kind:"method",name:"scrollIntoView",static:!1,private:!1,access:{has:c=>"scrollIntoView"in c,get:c=>c.scrollIntoView},metadata:a},null,e),Zr(this,null,s,{kind:"method",name:"uploadFile",static:!1,private:!1,access:{has:c=>"uploadFile"in c,get:c=>c.uploadFile},metadata:a},null,e),Zr(this,null,n,{kind:"method",name:"autofill",static:!1,private:!1,access:{has:c=>"autofill"in c,get:c=>c.autofill},metadata:a},null,e),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}constructor(a,c){super(new ji(a,c)),bh(this,e)}get realm(){return this.handle.realm}get client(){return this.handle.client}remoteObject(){return this.handle.remoteObject()}get#e(){return this.frame._frameManager}get frame(){return this.realm.environment}async contentFrame(){const a=await this.client.send("DOM.describeNode",{objectId:this.id});return typeof a.node.frameId!="string"?null:this.#e.frame(a.node.frameId)}async scrollIntoView(){await this.assertConnectedElement();try{await this.client.send("DOM.scrollIntoViewIfNeeded",{objectId:this.id})}catch(a){I(a),await super.scrollIntoView()}}async uploadFile(...a){const c=await this.evaluate(p=>p.multiple);k(a.length<=1||c,"Multiple file uploads only work with <input type=file multiple>");const l=Dt.value.path,d=a.map(p=>l.win32.isAbsolute(p)||l.posix.isAbsolute(p)?p:l.resolve(p));if(d.length===0){await this.evaluate(p=>{p.files=new DataTransfer().files,p.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),p.dispatchEvent(new Event("change",{bubbles:!0}))});return}const{node:{backendNodeId:h}}=await this.client.send("DOM.describeNode",{objectId:this.id});await this.client.send("DOM.setFileInputFiles",{objectId:this.id,files:d,backendNodeId:h})}async autofill(a){const l=(await this.client.send("DOM.describeNode",{objectId:this.handle.id})).node.backendNodeId,d=this.frame._id;await this.client.send("Autofill.trigger",{fieldId:l,frameId:d,card:a.creditCard})}async*queryAXTree(a,c){const{nodes:l}=await this.client.send("Accessibility.queryAXTree",{objectId:this.id,accessibleName:a,role:c}),d=l.filter(h=>!(h.ignored||!h.role||Sh.has(h.role.value)));return yield*Oi.map(d,h=>this.realm.adoptBackendNode(h.backendDOMNodeId))}}})();/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var kh=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},Eh=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});const xh=new Ci("__ariaQuerySelector",nn.queryOne,""),Ch=new Ci("__ariaQuerySelectorAll",async(i,e)=>{const t=nn.queryAll(i,e);return await i.realm.evaluateHandle((...r)=>r,...await Oi.collect(t))},"");class Ba extends Q{#e;#t;#r;#i;#s=new rt;constructor(e,t,r){super(),this.#e=e,this.#t=r,this.#r=t.id,t.name&&(this.#i=t.name);const s=this.#s.use(new Q(this.#e));s.on("Runtime.bindingCalled",this.#c.bind(this)),s.on("Runtime.executionContextDestroyed",async n=>{n.executionContextId===this.#r&&this[U]()}),s.on("Runtime.executionContextsCleared",async()=>{this[U]()}),s.on("Runtime.consoleAPICalled",this.#l.bind(this)),s.on(W.Disconnected,()=>{this[U]()})}#n=new Map;#o=new ur;async#a(e){const t={stack:[],error:void 0,hasError:!1};try{if(this.#n.has(e.name))return;const r=kh(t,await this.#o.acquire(),!1);try{await this.#e.send("Runtime.addBinding",this.#i?{name:nr+e.name,executionContextName:this.#i}:{name:nr+e.name,executionContextId:this.#r}),await this.evaluate(La,"internal",e.name,nr),this.#n.set(e.name,e)}catch(s){if(s instanceof Error&&(s.message.includes("Execution context was destroyed")||s.message.includes("Cannot find context with specified id")))return;I(s)}}catch(r){t.error=r,t.hasError=!0}finally{Eh(t)}}async#c(e){if(e.executionContextId!==this.#r)return;let t;try{t=JSON.parse(e.payload)}catch{return}const{type:r,name:s,seq:n,args:o,isTrivial:a}=t;if(r!=="internal"){this.emit("bindingcalled",e);return}if(!this.#n.has(s)){this.emit("bindingcalled",e);return}try{await this.#n.get(s)?.run(this,n,o,a)}catch(c){I(c)}}get id(){return this.#r}#l(e){e.executionContextId===this.#r&&this.emit("consoleapicalled",e)}#u=!1;#d;get puppeteerUtil(){let e=Promise.resolve();return this.#u||(e=Promise.all([this.#h(xh),this.#h(Ch)]),this.#u=!0),ui.inject(t=>{this.#d&&this.#d.then(r=>{r.dispose()}),this.#d=e.then(()=>this.evaluateHandle(t))},!this.#d),this.#d}async#h(e){try{await this.#a(e)}catch(t){I(t)}}async evaluate(e,...t){return await this.#p(!0,e,...t)}async evaluateHandle(e,...t){return await this.#p(!1,e,...t)}async#p(e,t,...r){const s=Zd(Qd(t)?.toString()??Ze.INTERNAL_URL);if(qt(t)){const p=this.#r,y=t,b=Qn.test(y)?y:`${y}
${s}
`,{exceptionDetails:v,result:S}=await this.#e.send("Runtime.evaluate",{expression:b,contextId:p,returnByValue:e,awaitPromise:!0,userGesture:!0}).catch(ao);if(v)throw oo(v);return e?jt(S):this.#t.createCdpHandle(S)}const n=Et(t),o=Qn.test(n)?n:`${n}
${s}
`;let a;try{a=this.#e.send("Runtime.callFunctionOn",{functionDeclaration:o,executionContextId:this.#r,arguments:r.some(p=>p instanceof He)?await Promise.all(r.map(p=>d(this,p))):r.map(p=>h(this,p)),returnByValue:e,awaitPromise:!0,userGesture:!0})}catch(p){throw p instanceof TypeError&&p.message.startsWith("Converting circular structure to JSON")&&(p.message+=" Recursive objects are not allowed."),p}const{exceptionDetails:c,result:l}=await a.catch(ao);if(c)throw oo(c);return e?jt(l):this.#t.createCdpHandle(l);async function d(p,y){return y instanceof He&&(y=await y.get(p)),h(p,y)}function h(p,y){if(typeof y=="bigint")return{unserializableValue:`${y.toString()}n`};if(Object.is(y,-0))return{unserializableValue:"-0"};if(Object.is(y,1/0))return{unserializableValue:"Infinity"};if(Object.is(y,-1/0))return{unserializableValue:"-Infinity"};if(Object.is(y,NaN))return{unserializableValue:"NaN"};const b=y&&(y instanceof ji||y instanceof ja)?y:null;if(b){if(b.realm!==p.#t)throw new Error("JSHandles can be evaluated only in the context they were created!");if(b.disposed)throw new Error("JSHandle is disposed!");return b.remoteObject().unserializableValue?{unserializableValue:b.remoteObject().unserializableValue}:b.remoteObject().objectId?{objectId:b.remoteObject().objectId}:{value:b.remoteObject().value}}return{value:y}}}[U](){this.#s.dispose(),this.emit("disposed",void 0)}}const ao=i=>{if(i.message.includes("Object reference chain is too long"))return{result:{type:"undefined"}};if(i.message.includes("Object couldn't be returned by value"))return{result:{type:"undefined"}};throw i.message.endsWith("Cannot find context with specified id")||i.message.endsWith("Inspected target navigated or closed")?new Error("Execution context was destroyed, most likely because of a navigation."):i};/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Th{#e;constructor(e){this.#e=e}async snapshot(e={}){const{interestingOnly:t=!0,root:r=null}=e,{nodes:s}=await this.#e.environment.client.send("Accessibility.getFullAXTree");let n;if(r){const{node:l}=await this.#e.environment.client.send("DOM.describeNode",{objectId:r.id});n=l.backendNodeId}const o=on.createTree(this.#e,s);let a=o;if(!o||(n&&(a=o.find(l=>l.payload.backendDOMNodeId===n)),!a))return null;if(!t)return this.serializeTree(a)[0]??null;const c=new Set;return this.collectInterestingNodes(c,o,!1),c.has(a)?this.serializeTree(a,c)[0]??null:null}serializeTree(e,t){const r=[];for(const n of e.children)r.push(...this.serializeTree(n,t));if(t&&!t.has(e))return r;const s=e.serialize();return r.length&&(s.children=r),[s]}collectInterestingNodes(e,t,r){if(t.isInteresting(r)&&e.add(t),!t.isLeafNode()){r=r||t.isControl();for(const s of t.children)this.collectInterestingNodes(e,s,r)}}}class on{payload;children=[];#e=!1;#t=!1;#r=!1;#i=!1;#s;#n;#o;#a;#c;constructor(e,t){this.payload=t,this.#s=this.payload.name?this.payload.name.value:"",this.#n=this.payload.role?this.payload.role.value:"Unknown",this.#o=this.payload.ignored,this.#c=e;for(const r of this.payload.properties||[])r.name==="editable"&&(this.#e=r.value.value==="richtext",this.#t=!0),r.name==="focusable"&&(this.#r=r.value.value),r.name==="hidden"&&(this.#i=r.value.value)}#l(){return this.#e?!1:this.#t?!0:this.#n==="textbox"||this.#n==="searchbox"}#u(){const e=this.#n;return e==="LineBreak"||e==="text"||e==="InlineTextBox"||e==="StaticText"}#d(){if(this.#a===void 0){this.#a=!1;for(const e of this.children)if(e.#r||e.#d()){this.#a=!0;break}}return this.#a}find(e){if(e(this))return this;for(const t of this.children){const r=t.find(e);if(r)return r}return null}isLeafNode(){if(!this.children.length||this.#l()||this.#u())return!0;switch(this.#n){case"doc-cover":case"graphics-symbol":case"img":case"image":case"Meter":case"scrollbar":case"slider":case"separator":case"progressbar":return!0}return this.#d()?!1:!!(this.#r&&this.#s||this.#n==="heading"&&this.#s)}isControl(){switch(this.#n){case"button":case"checkbox":case"ColorWell":case"combobox":case"DisclosureTriangle":case"listbox":case"menu":case"menubar":case"menuitem":case"menuitemcheckbox":case"menuitemradio":case"radio":case"scrollbar":case"searchbox":case"slider":case"spinbutton":case"switch":case"tab":case"textbox":case"tree":case"treeitem":return!0;default:return!1}}isInteresting(e){return this.#n==="Ignored"||this.#i||this.#o?!1:this.#r||this.#e||this.isControl()?!0:e?!1:this.isLeafNode()&&!!this.#s}serialize(){const e=new Map;for(const p of this.payload.properties||[])e.set(p.name.toLowerCase(),p.value.value);this.payload.name&&e.set("name",this.payload.name.value),this.payload.value&&e.set("value",this.payload.value.value),this.payload.description&&e.set("description",this.payload.description.value);const t={role:this.#n,elementHandle:async()=>this.payload.backendDOMNodeId?await this.#c.adoptBackendNode(this.payload.backendDOMNodeId):null},r=["name","value","description","keyshortcuts","roledescription","valuetext"],s=p=>e.get(p);for(const p of r)e.has(p)&&(t[p]=s(p));const n=["disabled","expanded","focused","modal","multiline","multiselectable","readonly","required","selected"],o=p=>e.get(p);for(const p of n)p==="focused"&&this.#n==="RootWebArea"||!o(p)||(t[p]=o(p));const a=["checked","pressed"];for(const p of a){if(!e.has(p))continue;const y=e.get(p);t[p]=y==="mixed"?"mixed":y==="true"}const c=["level","valuemax","valuemin"],l=p=>e.get(p);for(const p of c)e.has(p)&&(t[p]=l(p));const d=["autocomplete","haspopup","invalid","orientation"],h=p=>e.get(p);for(const p of d){const y=h(p);!y||y==="false"||(t[p]=h(p))}return t}static createTree(e,t){const r=new Map;for(const s of t)r.set(s.nodeId,new on(e,s));for(const s of r.values())for(const n of s.payload.childIds||[]){const o=r.get(n);o&&s.children.push(o)}return r.values().next().value??null}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var oe;(function(i){i.FrameAttached=Symbol("FrameManager.FrameAttached"),i.FrameNavigated=Symbol("FrameManager.FrameNavigated"),i.FrameDetached=Symbol("FrameManager.FrameDetached"),i.FrameSwapped=Symbol("FrameManager.FrameSwapped"),i.LifecycleEvent=Symbol("FrameManager.LifecycleEvent"),i.FrameNavigatedWithinDocument=Symbol("FrameManager.FrameNavigatedWithinDocument"),i.ConsoleApiCalled=Symbol("FrameManager.ConsoleApiCalled"),i.BindingCalled=Symbol("FrameManager.BindingCalled")})(oe||(oe={}));/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class _h{#e;#t;#r;#i;#s;#n;#o;#a=B.create();#c;#l;#u=[];constructor(e,t,r,...s){switch(this.#e=e,this.#t=t.polling,this.#r=t.root,this.#l=t.signal,this.#l?.addEventListener("abort",()=>{this.terminate(this.#l?.reason)},{once:!0}),typeof r){case"string":this.#i=`() => {return (${r});}`;break;default:this.#i=Et(r);break}this.#s=s,this.#e.taskManager.add(this),t.timeout&&(this.#o=new tn(`Waiting failed: ${t.timeout}ms exceeded`),this.#n=setTimeout(()=>{this.terminate(this.#o)},t.timeout)),this.rerun()}get result(){return this.#a.valueOrThrow()}async rerun(){for(const t of this.#u)t.abort();this.#u.length=0;const e=new AbortController;this.#u.push(e);try{switch(this.#t){case"raf":this.#c=await this.#e.evaluateHandle(({RAFPoller:r,createFunction:s},n,...o)=>{const a=s(n);return new r(()=>a(...o))},He.create(r=>r.puppeteerUtil),this.#i,...this.#s);break;case"mutation":this.#c=await this.#e.evaluateHandle(({MutationPoller:r,createFunction:s},n,o,...a)=>{const c=s(o);return new r(()=>c(...a),n||document)},He.create(r=>r.puppeteerUtil),this.#r,this.#i,...this.#s);break;default:this.#c=await this.#e.evaluateHandle(({IntervalPoller:r,createFunction:s},n,o,...a)=>{const c=s(o);return new r(()=>c(...a),n)},He.create(r=>r.puppeteerUtil),this.#t,this.#i,...this.#s);break}await this.#c.evaluate(r=>{r.start()});const t=await this.#c.evaluateHandle(r=>r.result());this.#a.resolve(t),await this.terminate()}catch(t){if(e.signal.aborted)return;const r=this.getBadError(t);r&&await this.terminate(r)}}async terminate(e){if(this.#e.taskManager.delete(this),clearTimeout(this.#n),e&&!this.#a.finished()&&this.#a.reject(e),this.#c)try{await this.#c.evaluateHandle(async t=>{await t.stop()}),this.#c&&(await this.#c.dispose(),this.#c=void 0)}catch{}}getBadError(e){return ct(e)?e.message.includes("Execution context is not available in detached frame")?new Error("Waiting failed: Frame detached"):e.message.includes("Execution context was destroyed")||e.message.includes("Cannot find context with specified id")||e.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed")?void 0:e:new Error("WaitTask failed with an error",{cause:e})}}class Rh{#e=new Set;add(e){this.#e.add(e)}delete(e){this.#e.delete(e)}terminateAll(e){for(const t of this.#e)t.terminate(e);this.#e.clear()}async rerunAll(){await Promise.all([...this.#e].map(e=>e.rerun()))}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Ih{timeoutSettings;taskManager=new Rh;constructor(e){this.timeoutSettings=e}async waitForFunction(e,t={},...r){const{polling:s="raf",timeout:n=this.timeoutSettings.timeout(),root:o,signal:a}=t;if(typeof s=="number"&&s<0)throw new Error("Cannot poll with non-positive interval");return await new _h(this,{polling:s,root:o,timeout:n,signal:a},e,...r).result}get disposed(){return this.#e}#e=!1;dispose(){this.#e=!0,this.taskManager.terminateAll(new Error("waitForFunction failed: frame got detached."))}[U](){this.dispose()}}/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class As extends Ih{#e;#t=new Q;#r;constructor(e,t){super(t),this.#r=e}get environment(){return this.#r}get client(){return this.#r.client}get emitter(){return this.#t}setContext(e){this.#e?.[U](),e.once("disposed",this.#i.bind(this)),e.on("consoleapicalled",this.#s.bind(this)),e.on("bindingcalled",this.#n.bind(this)),this.#e=e,this.#t.emit("context",e),this.taskManager.rerunAll()}#i(){this.#e=void 0,"clearDocumentHandle"in this.#r&&this.#r.clearDocumentHandle()}#s(e){this.#t.emit("consoleapicalled",e)}#n(e){this.#t.emit("bindingcalled",e)}hasContext(){return!!this.#e}get context(){return this.#e}#o(){if(this.disposed)throw new Error(`Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`);return this.#e}async#a(){const e=new Error("Execution context was destroyed");return await Ie(te(this.#t,"context").pipe(Qe(te(this.#t,"disposed").pipe(Re(()=>{throw e})),Xe(this.timeoutSettings.timeout()))))}async evaluateHandle(e,...t){e=ae(this.evaluateHandle.name,e);let r=this.#o();return r||(r=await this.#a()),await r.evaluateHandle(e,...t)}async evaluate(e,...t){e=ae(this.evaluate.name,e);let r=this.#o();return r||(r=await this.#a()),await r.evaluate(e,...t)}async adoptBackendNode(e){let t=this.#o();t||(t=await this.#a());const{object:r}=await this.client.send("DOM.resolveNode",{backendNodeId:e,executionContextId:t.id});return this.createCdpHandle(r)}async adoptHandle(e){if(e.realm===this)return await e.evaluateHandle(r=>r);const t=await this.client.send("DOM.describeNode",{objectId:e.id});return await this.adoptBackendNode(t.node.backendNodeId)}async transferHandle(e){if(e.realm===this||e.remoteObject().objectId===void 0)return e;const t=await this.client.send("DOM.describeNode",{objectId:e.remoteObject().objectId}),r=await this.adoptBackendNode(t.node.backendNodeId);return await e.dispose(),r}createCdpHandle(e){return e.subtype==="node"?new ja(this,e):new ji(this,e)}[U](){this.#e?.[U](),this.#t.emit("disposed",void 0),super[U](),this.#t.removeAllListeners()}}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const Ge=Symbol("mainWorld"),fi=Symbol("puppeteerWorld");/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const $h=new Map([["load","load"],["domcontentloaded","DOMContentLoaded"],["networkidle0","networkIdle"],["networkidle2","networkAlmostIdle"]]);class ns{#e;#t;#r;#i=null;#s=new rt;#n;#o;#a=B.create();#c=B.create();#l=B.create();#u;#d;#h;constructor(e,t,r,s,n){Array.isArray(r)?r=r.slice():typeof r=="string"&&(r=[r]),this.#n=t._loaderId,this.#e=r.map(l=>{const d=$h.get(l);return k(d,"Unknown value for options.waitUntil: "+l),d}),n?.addEventListener("abort",()=>{this.#o.reject(n.reason)}),this.#t=t,this.#r=s,this.#s.use(new Q(t._frameManager)).on(oe.LifecycleEvent,this.#S.bind(this));const a=this.#s.use(new Q(t));a.on(fe.FrameNavigatedWithinDocument,this.#m.bind(this)),a.on(fe.FrameNavigated,this.#b.bind(this)),a.on(fe.FrameSwapped,this.#v.bind(this)),a.on(fe.FrameSwappedByActivation,this.#v.bind(this)),a.on(fe.FrameDetached,this.#y.bind(this));const c=this.#s.use(new Q(e));c.on(ne.Request,this.#p.bind(this)),c.on(ne.Response,this.#g.bind(this)),c.on(ne.RequestFailed,this.#f.bind(this)),this.#o=B.create({timeout:this.#r,message:`Navigation timeout of ${this.#r} ms exceeded`}),this.#S()}#p(e){e.frame()!==this.#t||!e.isNavigationRequest()||(this.#i=e,this.#h?.resolve(),this.#h=B.create(),e.response()!==null&&this.#h?.resolve())}#f(e){this.#i?.id===e.id&&this.#h?.resolve()}#g(e){this.#i?.id===e.request().id&&this.#h?.resolve()}#y(e){if(this.#t===e){this.#o.resolve(new Error("Navigating frame was detached"));return}this.#S()}async navigationResponse(){return await this.#h?.valueOrThrow(),this.#i?this.#i.response():null}sameDocumentNavigationPromise(){return this.#a.valueOrThrow()}newDocumentNavigationPromise(){return this.#l.valueOrThrow()}lifecyclePromise(){return this.#c.valueOrThrow()}terminationPromise(){return this.#o.valueOrThrow()}#m(){this.#u=!0,this.#S()}#b(e){if(e==="BackForwardCacheRestore")return this.#v();this.#S()}#v(){this.#d=!0,this.#S()}#S(){if(!e(this.#t,this.#e))return;this.#c.resolve(),this.#u&&this.#a.resolve(void 0),(this.#d||this.#t._loaderId!==this.#n)&&this.#l.resolve(void 0);function e(t,r){for(const s of r)if(!t._lifecycleEvents.has(s))return!1;for(const s of t.childFrames())if(s._hasStartedLoading&&!e(s,r))return!1;return!0}}dispose(){this.#s.dispose(),this.#o.resolve(new Error("LifecycleWatcher disposed"))}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var Ph=function(i,e,t){for(var r=arguments.length>2,s=0;s<e.length;s++)t=r?e[s].call(i,t):e[s].call(i);return r?t:void 0},Rt=function(i,e,t,r,s,n){function o(E){if(E!==void 0&&typeof E!="function")throw new TypeError("Function expected");return E}for(var a=r.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&i?r.static?i:i.prototype:null,d=e||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),h,p=!1,y=t.length-1;y>=0;y--){var b={};for(var v in r)b[v]=v==="access"?{}:r[v];for(var v in r.access)b.access[v]=r.access[v];b.addInitializer=function(E){if(p)throw new TypeError("Cannot add initializers after decoration has completed");n.push(o(E||null))};var S=(0,t[y])(a==="accessor"?{get:d.get,set:d.set}:d[c],b);if(a==="accessor"){if(S===void 0)continue;if(S===null||typeof S!="object")throw new TypeError("Object expected");(h=o(S.get))&&(d.get=h),(h=o(S.set))&&(d.set=h),(h=o(S.init))&&s.unshift(h)}else(h=o(S))&&(a==="field"?s.unshift(h):d[c]=h)}l&&Object.defineProperty(l,r.name,d),p=!0};let co=(()=>{let i=lh,e=[],t,r,s,n,o,a,c;return class extends i{static{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(i[Symbol.metadata]??null):void 0;Rt(this,null,t,{kind:"method",name:"goto",static:!1,private:!1,access:{has:h=>"goto"in h,get:h=>h.goto},metadata:d},null,e),Rt(this,null,r,{kind:"method",name:"waitForNavigation",static:!1,private:!1,access:{has:h=>"waitForNavigation"in h,get:h=>h.waitForNavigation},metadata:d},null,e),Rt(this,null,s,{kind:"method",name:"setContent",static:!1,private:!1,access:{has:h=>"setContent"in h,get:h=>h.setContent},metadata:d},null,e),Rt(this,null,n,{kind:"method",name:"addPreloadScript",static:!1,private:!1,access:{has:h=>"addPreloadScript"in h,get:h=>h.addPreloadScript},metadata:d},null,e),Rt(this,null,o,{kind:"method",name:"addExposedFunctionBinding",static:!1,private:!1,access:{has:h=>"addExposedFunctionBinding"in h,get:h=>h.addExposedFunctionBinding},metadata:d},null,e),Rt(this,null,a,{kind:"method",name:"removeExposedFunctionBinding",static:!1,private:!1,access:{has:h=>"removeExposedFunctionBinding"in h,get:h=>h.removeExposedFunctionBinding},metadata:d},null,e),Rt(this,null,c,{kind:"method",name:"waitForDevicePrompt",static:!1,private:!1,access:{has:h=>"waitForDevicePrompt"in h,get:h=>h.waitForDevicePrompt},metadata:d},null,e),d&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})}#e=(Ph(this,e),"");#t=!1;#r;_frameManager;_loaderId="";_lifecycleEvents=new Set;_id;_parentId;accessibility;worlds;constructor(d,h,p,y){super(),this._frameManager=d,this.#e="",this._id=h,this._parentId=p,this.#t=!1,this.#r=y,this._loaderId="",this.worlds={[Ge]:new As(this,this._frameManager.timeoutSettings),[fi]:new As(this,this._frameManager.timeoutSettings)},this.accessibility=new Th(this.worlds[Ge]),this.on(fe.FrameSwappedByActivation,()=>{this._onLoadingStarted(),this._onLoadingStopped()}),this.worlds[Ge].emitter.on("consoleapicalled",this.#i.bind(this)),this.worlds[Ge].emitter.on("bindingcalled",this.#s.bind(this))}#i(d){this._frameManager.emit(oe.ConsoleApiCalled,[this.worlds[Ge],d])}#s(d){this._frameManager.emit(oe.BindingCalled,[this.worlds[Ge],d])}_client(){return this.#r}updateId(d){this._id=d}updateClient(d){this.#r=d}page(){return this._frameManager.page()}async goto(d,h={}){const{referer:p=this._frameManager.networkManager.extraHTTPHeaders().referer,referrerPolicy:y=this._frameManager.networkManager.extraHTTPHeaders()["referer-policy"],waitUntil:b=["load"],timeout:v=this._frameManager.timeoutSettings.navigationTimeout()}=h;let S=!1;const E=new ns(this._frameManager.networkManager,this,b,v);let V=await B.race([be(this.#r,d,p,y,this._id),E.terminationPromise()]);V||(V=await B.race([E.terminationPromise(),S?E.newDocumentNavigationPromise():E.sameDocumentNavigationPromise()]));try{if(V)throw V;return await E.navigationResponse()}finally{E.dispose()}async function be(De,it,C,g,f){try{const x=await De.send("Page.navigate",{url:it,referrer:C,frameId:f,referrerPolicy:g});return S=!!x.loaderId,x.errorText==="net::ERR_HTTP_RESPONSE_CODE_FAILURE"?null:x.errorText?new Error(`${x.errorText} at ${it}`):null}catch(x){if(ct(x))return x;throw x}}}async waitForNavigation(d={}){const{waitUntil:h=["load"],timeout:p=this._frameManager.timeoutSettings.navigationTimeout(),signal:y}=d,b=new ns(this._frameManager.networkManager,this,h,p,y),v=await B.race([b.terminationPromise(),...d.ignoreSameDocumentNavigation?[]:[b.sameDocumentNavigationPromise()],b.newDocumentNavigationPromise()]);try{if(v)throw v;const S=await B.race([b.terminationPromise(),b.navigationResponse()]);if(S instanceof Error)throw v;return S||null}finally{b.dispose()}}get client(){return this.#r}mainRealm(){return this.worlds[Ge]}isolatedRealm(){return this.worlds[fi]}async setContent(d,h={}){const{waitUntil:p=["load"],timeout:y=this._frameManager.timeoutSettings.navigationTimeout()}=h;await this.setFrameContent(d);const b=new ns(this._frameManager.networkManager,this,p,y),v=await B.race([b.terminationPromise(),b.lifecyclePromise()]);if(b.dispose(),v)throw v}url(){return this.#e}parentFrame(){return this._frameManager._frameTree.parentFrame(this._id)||null}childFrames(){return this._frameManager._frameTree.childFrames(this._id)}#n(){return this._frameManager._deviceRequestPromptManager(this.#r)}async addPreloadScript(d){const h=this.parentFrame();if(h&&this.#r===h.client||d.getIdForFrame(this))return;const{identifier:p}=await this.#r.send("Page.addScriptToEvaluateOnNewDocument",{source:d.source});d.setIdForFrame(this,p)}async addExposedFunctionBinding(d){this!==this._frameManager.mainFrame()&&!this._hasStartedLoading||await Promise.all([this.#r.send("Runtime.addBinding",{name:nr+d.name}),this.evaluate(d.initSource).catch(I)])}async removeExposedFunctionBinding(d){this!==this._frameManager.mainFrame()&&!this._hasStartedLoading||await Promise.all([this.#r.send("Runtime.removeBinding",{name:nr+d.name}),this.evaluate(h=>{globalThis[h]=void 0},d.name).catch(I)])}async waitForDevicePrompt(d={}){return await this.#n().waitForDevicePrompt(d)}_navigated(d){this._name=d.name,this.#e=`${d.url}${d.urlFragment||""}`}_navigatedWithinDocument(d){this.#e=d}_onLifecycleEvent(d,h){h==="init"&&(this._loaderId=d,this._lifecycleEvents.clear()),this._lifecycleEvents.add(h)}_onLoadingStopped(){this._lifecycleEvents.add("DOMContentLoaded"),this._lifecycleEvents.add("load")}_onLoadingStarted(){this._hasStartedLoading=!0}get detached(){return this.#t}[(t=[K],r=[K],s=[K],n=[K],o=[K],a=[K],c=[K],U)](){this.#t||(this.#t=!0,this.worlds[Ge][U](),this.worlds[fi][U]())}exposeFunction(){throw new Ta}async frameElement(){if(this.page().target()._targetManager()instanceof sn)return await super.frameElement();const h=this.parentFrame();if(!h)return null;const{backendNodeId:p}=await h.client.send("DOM.getFrameOwner",{frameId:this._id});return await h.mainRealm().adoptBackendNode(p)}}})();/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Ah{#e=new Map;#t=new Map;#r=new Map;#i;#s=!1;#n=new Map;getMainFrame(){return this.#i}getById(e){return this.#e.get(e)}waitForFrame(e){const t=this.getById(e);if(t)return Promise.resolve(t);const r=B.create();return(this.#n.get(e)||new Set).add(r),r.valueOrThrow()}frames(){return Array.from(this.#e.values())}addFrame(e){this.#e.set(e._id,e),e._parentId?(this.#t.set(e._id,e._parentId),this.#r.has(e._parentId)||this.#r.set(e._parentId,new Set),this.#r.get(e._parentId).add(e._id)):(!this.#i||this.#s)&&(this.#i=e,this.#s=!1),this.#n.get(e._id)?.forEach(t=>t.resolve(e))}removeFrame(e){this.#e.delete(e._id),this.#t.delete(e._id),e._parentId?this.#r.get(e._parentId)?.delete(e._id):this.#s=!0}childFrames(e){const t=this.#r.get(e);return t?Array.from(t).map(r=>this.getById(r)).filter(r=>r!==void 0):[]}parentFrame(e){const t=this.#t.get(e);return t?this.getById(t):void 0}}class lo{_interceptionId;_failureText=null;_response=null;_fromMemoryCache=!1;_redirectChain=[];interception={enabled:!1,handled:!1,handlers:[],resolutionState:{action:Je.None},requestOverrides:{},response:null,abortReason:null};constructor(){}continueRequestOverrides(){return k(this.interception.enabled,"Request Interception is not enabled!"),this.interception.requestOverrides}responseForRequest(){return k(this.interception.enabled,"Request Interception is not enabled!"),this.interception.response}abortErrorReason(){return k(this.interception.enabled,"Request Interception is not enabled!"),this.interception.abortReason}interceptResolutionState(){return this.interception.enabled?this.interception.handled?{action:Je.AlreadyHandled}:{...this.interception.resolutionState}:{action:Je.Disabled}}isInterceptResolutionHandled(){return this.interception.handled}enqueueInterceptAction(e){this.interception.handlers.push(e)}async finalizeInterceptions(){await this.interception.handlers.reduce((t,r)=>t.then(r),Promise.resolve()),this.interception.handlers=[];const{action:e}=this.interceptResolutionState();switch(e){case"abort":return await this._abort(this.interception.abortReason);case"respond":if(this.interception.response===null)throw new Error("Response is missing for the interception");return await this._respond(this.interception.response);case"continue":return await this._continue(this.interception.requestOverrides)}}#e(){return!this.url().startsWith("data:")&&!this._fromMemoryCache}async continue(e={},t){if(this.#e()){if(k(this.interception.enabled,"Request Interception is not enabled!"),k(!this.interception.handled,"Request is already handled!"),t===void 0)return await this._continue(e);if(this.interception.requestOverrides=e,this.interception.resolutionState.priority===void 0||t>this.interception.resolutionState.priority){this.interception.resolutionState={action:Je.Continue,priority:t};return}if(t===this.interception.resolutionState.priority){if(this.interception.resolutionState.action==="abort"||this.interception.resolutionState.action==="respond")return;this.interception.resolutionState.action=Je.Continue}}}async respond(e,t){if(this.#e()){if(k(this.interception.enabled,"Request Interception is not enabled!"),k(!this.interception.handled,"Request is already handled!"),t===void 0)return await this._respond(e);if(this.interception.response=e,this.interception.resolutionState.priority===void 0||t>this.interception.resolutionState.priority){this.interception.resolutionState={action:Je.Respond,priority:t};return}if(t===this.interception.resolutionState.priority){if(this.interception.resolutionState.action==="abort")return;this.interception.resolutionState.action=Je.Respond}}}async abort(e="failed",t){if(!this.#e())return;const r=Nh[e];if(k(r,"Unknown error code: "+e),k(this.interception.enabled,"Request Interception is not enabled!"),k(!this.interception.handled,"Request is already handled!"),t===void 0)return await this._abort(r);if(this.interception.abortReason=r,this.interception.resolutionState.priority===void 0||t>=this.interception.resolutionState.priority){this.interception.resolutionState={action:Je.Abort,priority:t};return}}static getResponse(e){const t=qt(e)?new TextEncoder().encode(e):e;return{contentLength:t.byteLength,base64:Ca(t)}}}var Je;(function(i){i.Abort="abort",i.Respond="respond",i.Continue="continue",i.Disabled="disabled",i.None="none",i.AlreadyHandled="already-handled"})(Je||(Je={}));function uo(i){const e=[];for(const t in i){const r=i[t];if(!Object.is(r,void 0)){const s=Array.isArray(r)?r:[r];e.push(...s.map(n=>({name:t,value:n+""})))}}return e}const Fh={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required"},Nh={aborted:"Aborted",accessdenied:"AccessDenied",addressunreachable:"AddressUnreachable",blockedbyclient:"BlockedByClient",blockedbyresponse:"BlockedByResponse",connectionaborted:"ConnectionAborted",connectionclosed:"ConnectionClosed",connectionfailed:"ConnectionFailed",connectionrefused:"ConnectionRefused",connectionreset:"ConnectionReset",internetdisconnected:"InternetDisconnected",namenotresolved:"NameNotResolved",timedout:"TimedOut",failed:"Failed"};function os(i){if(i.originalMessage.includes("Invalid header")||i.originalMessage.includes('Expected "header"')||i.originalMessage.includes("invalid argument"))throw i;I(i)}class Fs extends lo{id;#e;#t;#r;#i;#s;#n=!1;#o;#a={};#c;#l;get client(){return this.#e}constructor(e,t,r,s,n,o){super(),this.#e=e,this.id=n.requestId,this.#t=n.requestId===n.loaderId&&n.type==="Document",this._interceptionId=r,this.#r=n.request.url,this.#i=(n.type||"other").toLowerCase(),this.#s=n.request.method,this.#o=n.request.postData,this.#n=n.request.hasPostData??!1,this.#c=t,this._redirectChain=o,this.#l=n.initiator,this.interception.enabled=s;for(const[a,c]of Object.entries(n.request.headers))this.#a[a.toLowerCase()]=c}url(){return this.#r}resourceType(){return this.#i}method(){return this.#s}postData(){return this.#o}hasPostData(){return this.#n}async fetchPostData(){try{return(await this.#e.send("Network.getRequestPostData",{requestId:this.id})).postData}catch(e){I(e);return}}headers(){return this.#a}response(){return this._response}frame(){return this.#c}isNavigationRequest(){return this.#t}initiator(){return this.#l}redirectChain(){return this._redirectChain.slice()}failure(){return this._failureText?{errorText:this._failureText}:null}async _continue(e={}){const{url:t,method:r,postData:s,headers:n}=e;this.interception.handled=!0;const o=s?Wd(s):void 0;if(this._interceptionId===void 0)throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.continueRequest");await this.#e.send("Fetch.continueRequest",{requestId:this._interceptionId,url:t,method:r,postData:o,headers:n?uo(n):void 0}).catch(a=>(this.interception.handled=!1,os(a)))}async _respond(e){this.interception.handled=!0;let t;e.body&&(t=lo.getResponse(e.body));const r={};if(e.headers)for(const n of Object.keys(e.headers)){const o=e.headers[n];r[n.toLowerCase()]=Array.isArray(o)?o.map(a=>String(a)):String(o)}e.contentType&&(r["content-type"]=e.contentType),t?.contentLength&&!("content-length"in r)&&(r["content-length"]=String(t.contentLength));const s=e.status||200;if(this._interceptionId===void 0)throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest");await this.#e.send("Fetch.fulfillRequest",{requestId:this._interceptionId,responseCode:s,responsePhrase:Fh[s],responseHeaders:uo(r),body:t?.base64}).catch(n=>(this.interception.handled=!1,os(n)))}async _abort(e){if(this.interception.handled=!0,this._interceptionId===void 0)throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.failRequest");await this.#e.send("Fetch.failRequest",{requestId:this._interceptionId,errorReason:e||"Failed"}).catch(os)}}/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Dh{constructor(){}ok(){const e=this.status();return e===0||e>=200&&e<=299}async buffer(){const e=await this.content();return Buffer.from(e)}async text(){const e=await this.content();return new TextDecoder().decode(e)}async json(){const e=await this.text();return JSON.parse(e)}}/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Mh{#e;#t;#r;#i;#s;#n;constructor(e){this.#e=e.subjectName,this.#t=e.issuer,this.#r=e.validFrom,this.#i=e.validTo,this.#s=e.protocol,this.#n=e.sanList}issuer(){return this.#t}validFrom(){return this.#r}validTo(){return this.#i}protocol(){return this.#s}subjectName(){return this.#e}subjectAlternativeNames(){return this.#n}}class ho extends Dh{#e;#t;#r=null;#i=B.create();#s;#n;#o;#a;#c;#l;#u={};#d;#h;constructor(e,t,r,s){super(),this.#e=e,this.#t=t,this.#s={ip:r.remoteIPAddress,port:r.remotePort},this.#o=this.#p(s)||r.statusText,this.#a=t.url(),this.#c=!!r.fromDiskCache,this.#l=!!r.fromServiceWorker,this.#n=s?s.statusCode:r.status;const n=s?s.headers:r.headers;for(const[o,a]of Object.entries(n))this.#u[o.toLowerCase()]=a;this.#d=r.securityDetails?new Mh(r.securityDetails):null,this.#h=r.timing||null}#p(e){if(!e||!e.headersText)return;const t=e.headersText.split("\r",1)[0];if(!t)return;const r=t.match(/[^ ]* [^ ]* (.*)/);if(!r)return;const s=r[1];if(s)return s}_resolveBody(e){return e?this.#i.reject(e):this.#i.resolve()}remoteAddress(){return this.#s}url(){return this.#a}status(){return this.#n}statusText(){return this.#o}headers(){return this.#u}securityDetails(){return this.#d}timing(){return this.#h}content(){return this.#r||(this.#r=this.#i.valueOrThrow().then(async()=>{try{const e=await this.#e.send("Network.getResponseBody",{requestId:this.#t.id});return xa(e.body,e.base64Encoded)}catch(e){throw e instanceof Lr&&e.originalMessage==="No resource with given identifier found"?new Lr("Could not load body for this request. This might happen if the request is a preflight request."):e}})),this.#r}request(){return this.#t}fromCache(){return this.#c||this.#t._fromMemoryCache}fromServiceWorker(){return this.#l}frame(){return this.#t.frame()}}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Lh{#e=new Map;#t=new Map;#r=new Map;#i=new Map;#s=new Map;#n=new Map;forget(e){this.#e.delete(e),this.#t.delete(e),this.#n.delete(e),this.#s.delete(e),this.#i.delete(e)}responseExtraInfo(e){return this.#i.has(e)||this.#i.set(e,[]),this.#i.get(e)}queuedRedirectInfo(e){return this.#s.has(e)||this.#s.set(e,[]),this.#s.get(e)}queueRedirectInfo(e,t){this.queuedRedirectInfo(e).push(t)}takeQueuedRedirectInfo(e){return this.queuedRedirectInfo(e).shift()}inFlightRequestsCount(){let e=0;for(const t of this.#r.values())t.response()||e++;return e}storeRequestWillBeSent(e,t){this.#e.set(e,t)}getRequestWillBeSent(e){return this.#e.get(e)}forgetRequestWillBeSent(e){this.#e.delete(e)}getRequestPaused(e){return this.#t.get(e)}forgetRequestPaused(e){this.#t.delete(e)}storeRequestPaused(e,t){this.#t.set(e,t)}getRequest(e){return this.#r.get(e)}storeRequest(e,t){this.#r.set(e,t)}forgetRequest(e){this.#r.delete(e)}getQueuedEventGroup(e){return this.#n.get(e)}queueEventGroup(e,t){this.#n.set(e,t)}forgetQueuedEventGroup(e){this.#n.delete(e)}printState(){function e(t,r){return r instanceof Map?{dataType:"Map",value:Array.from(r.entries())}:r instanceof Fs?{dataType:"CdpHTTPRequest",value:`${r.id}: ${r.url()}`}:r}console.log("httpRequestsMap",JSON.stringify(this.#r,e,2)),console.log("requestWillBeSentMap",JSON.stringify(this.#e,e,2)),console.log("requestWillBeSentMap",JSON.stringify(this.#i,e,2)),console.log("requestWillBeSentMap",JSON.stringify(this.#t,e,2))}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Oh extends Q{#e;#t=new Lh;#r;#i=null;#s=new Set;#n=!1;#o=!1;#a;#c;#l;#u;#d=[["Fetch.requestPaused",this.#E],["Fetch.authRequired",this.#w],["Network.requestWillBeSent",this.#S],["Network.requestServedFromCache",this.#_],["Network.responseReceived",this.#D],["Network.loadingFinished",this.#T],["Network.loadingFailed",this.#$],["Network.responseReceivedExtraInfo",this.#M],[W.Disconnected,this.#p]];#h=new Map;constructor(e){super(),this.#e=e}async addClient(e){if(this.#h.has(e))return;const t=new rt;this.#h.set(e,t);const r=t.use(new Q(e));for(const[s,n]of this.#d)r.on(s,o=>n.bind(this)(e,o));await Promise.all([e.send("Network.enable"),this.#f(e),this.#y(e),this.#v(e),this.#b(e),this.#m(e)])}async#p(e){this.#h.get(e)?.dispose(),this.#h.delete(e)}async authenticate(e){this.#i=e;const t=this.#n||!!this.#i;t!==this.#o&&(this.#o=t,await this.#g(this.#b.bind(this)))}async setExtraHTTPHeaders(e){const t={};for(const[r,s]of Object.entries(e))k(qt(s),`Expected value of header "${r}" to be String, but "${typeof s}" is found.`),t[r.toLowerCase()]=s;this.#r=t,await this.#g(this.#f.bind(this))}async#f(e){this.#r!==void 0&&await e.send("Network.setExtraHTTPHeaders",{headers:this.#r})}extraHTTPHeaders(){return Object.assign({},this.#r)}inFlightRequestsCount(){return this.#t.inFlightRequestsCount()}async setOfflineMode(e){this.#c||(this.#c={offline:!1,upload:-1,download:-1,latency:0}),this.#c.offline=e,await this.#g(this.#y.bind(this))}async emulateNetworkConditions(e){this.#c||(this.#c={offline:!1,upload:-1,download:-1,latency:0}),this.#c.upload=e?e.upload:-1,this.#c.download=e?e.download:-1,this.#c.latency=e?e.latency:0,await this.#g(this.#y.bind(this))}async#g(e){await Promise.all(Array.from(this.#h.keys()).map(t=>e(t)))}async#y(e){this.#c!==void 0&&await e.send("Network.emulateNetworkConditions",{offline:this.#c.offline,latency:this.#c.latency,uploadThroughput:this.#c.upload,downloadThroughput:this.#c.download})}async setUserAgent(e,t){this.#l=e,this.#u=t,await this.#g(this.#m.bind(this))}async#m(e){this.#l!==void 0&&await e.send("Network.setUserAgentOverride",{userAgent:this.#l,userAgentMetadata:this.#u})}async setCacheEnabled(e){this.#a=!e,await this.#g(this.#v.bind(this))}async setRequestInterception(e){this.#n=e;const t=this.#n||!!this.#i;t!==this.#o&&(this.#o=t,await this.#g(this.#b.bind(this)))}async#b(e){this.#a===void 0&&(this.#a=!1),this.#o?await Promise.all([this.#v(e),e.send("Fetch.enable",{handleAuthRequests:!0,patterns:[{urlPattern:"*"}]})]):await Promise.all([this.#v(e),e.send("Fetch.disable")])}async#v(e){this.#a!==void 0&&await e.send("Network.setCacheDisabled",{cacheDisabled:this.#a})}#S(e,t){if(this.#n&&!t.request.url.startsWith("data:")){const{requestId:r}=t;this.#t.storeRequestWillBeSent(r,t);const s=this.#t.getRequestPaused(r);if(s){const{requestId:n}=s;this.#x(t,s),this.#C(e,t,n),this.#t.forgetRequestPaused(r)}return}this.#C(e,t,void 0)}#w(e,t){let r="Default";this.#s.has(t.requestId)?r="CancelAuth":this.#i&&(r="ProvideCredentials",this.#s.add(t.requestId));const{username:s,password:n}=this.#i||{username:void 0,password:void 0};e.send("Fetch.continueWithAuth",{requestId:t.requestId,authChallengeResponse:{response:r,username:s,password:n}}).catch(I)}#E(e,t){!this.#n&&this.#o&&e.send("Fetch.continueRequest",{requestId:t.requestId}).catch(I);const{networkId:r,requestId:s}=t;if(!r){this.#k(e,t);return}const n=(()=>{const o=this.#t.getRequestWillBeSent(r);if(o&&(o.request.url!==t.request.url||o.request.method!==t.request.method)){this.#t.forgetRequestWillBeSent(r);return}return o})();n?(this.#x(n,t),this.#C(e,n,s)):this.#t.storeRequestPaused(r,t)}#x(e,t){e.request.headers={...e.request.headers,...t.request.headers}}#k(e,t){const r=t.frameId?this.#e.frame(t.frameId):null,s=new Fs(e,r,t.requestId,this.#n,t,[]);this.emit(ne.Request,s),s.finalizeInterceptions()}#C(e,t,r,s=!1){let n=[];if(t.redirectResponse){let c=null;if(t.redirectHasExtraInfo&&(c=this.#t.responseExtraInfo(t.requestId).shift(),!c)){this.#t.queueRedirectInfo(t.requestId,{event:t,fetchRequestId:r});return}const l=this.#t.getRequest(t.requestId);l&&(this.#N(e,l,t.redirectResponse,c),n=l._redirectChain)}const o=t.frameId?this.#e.frame(t.frameId):null,a=new Fs(e,o,r,this.#n,t,n);a._fromMemoryCache=s,this.#t.storeRequest(t.requestId,a),this.emit(ne.Request,a),a.finalizeInterceptions()}#_(e,t){const r=this.#t.getRequestWillBeSent(t.requestId);let s=this.#t.getRequest(t.requestId);if(s&&(s._fromMemoryCache=!0),!s&&r&&(this.#C(e,r,void 0,!0),s=this.#t.getRequest(t.requestId)),!s){I(new Error(`Request ${t.requestId} was served from cache but we could not find the corresponding request object`));return}this.emit(ne.RequestServedFromCache,s)}#N(e,t,r,s){const n=new ho(e,t,r,s);t._response=n,t._redirectChain.push(t),n._resolveBody(new Error("Response body is unavailable for redirect responses")),this.#R(t,!1),this.emit(ne.Response,n),this.emit(ne.RequestFinished,t)}#A(e,t,r){const s=this.#t.getRequest(t.requestId);if(!s)return;this.#t.responseExtraInfo(t.requestId).length&&I(new Error("Unexpected extraInfo events for request "+t.requestId)),t.response.fromDiskCache&&(r=null);const o=new ho(e,s,t.response,r);s._response=o,this.emit(ne.Response,o)}#D(e,t){const r=this.#t.getRequest(t.requestId);let s=null;if(r&&!r._fromMemoryCache&&t.hasExtraInfo&&(s=this.#t.responseExtraInfo(t.requestId).shift(),!s)){this.#t.queueEventGroup(t.requestId,{responseReceivedEvent:t});return}this.#A(e,t,s)}#M(e,t){const r=this.#t.takeQueuedRedirectInfo(t.requestId);if(r){this.#t.responseExtraInfo(t.requestId).push(t),this.#C(e,r.event,r.fetchRequestId);return}const s=this.#t.getQueuedEventGroup(t.requestId);if(s){this.#t.forgetQueuedEventGroup(t.requestId),this.#A(e,s.responseReceivedEvent,t),s.loadingFinishedEvent&&this.#I(s.loadingFinishedEvent),s.loadingFailedEvent&&this.#P(s.loadingFailedEvent);return}this.#t.responseExtraInfo(t.requestId).push(t)}#R(e,t){const r=e.id,s=e._interceptionId;this.#t.forgetRequest(r),s!==void 0&&this.#s.delete(s),t&&this.#t.forget(r)}#T(e,t){const r=this.#t.getQueuedEventGroup(t.requestId);r?r.loadingFinishedEvent=t:this.#I(t)}#I(e){const t=this.#t.getRequest(e.requestId);t&&(t.response()&&t.response()?._resolveBody(),this.#R(t,!0),this.emit(ne.RequestFinished,t))}#$(e,t){const r=this.#t.getQueuedEventGroup(t.requestId);r?r.loadingFailedEvent=t:this.#P(t)}#P(e){const t=this.#t.getRequest(e.requestId);if(!t)return;t._failureText=e.errorText;const r=t.response();r&&r._resolveBody(),this.#R(t,!0),this.emit(ne.RequestFailed,t)}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const jh=100;class Bh extends Q{#e;#t;#r;#i=new Set;#s;#n=new Map;#o=new Set;_frameTree=new Ah;#a=new Set;#c=new WeakMap;#l;get timeoutSettings(){return this.#r}get networkManager(){return this.#t}get client(){return this.#s}constructor(e,t,r){super(),this.#s=e,this.#e=t,this.#t=new Oh(this),this.#r=r,this.setupEventListeners(this.#s),e.once(W.Disconnected,()=>{this.#u().catch(I)})}async#u(){const e=this._frameTree.getMainFrame();if(!e)return;for(const r of e.childFrames())this.#w(r);const t=B.create({timeout:jh,message:"Frame was not swapped"});e.once(fe.FrameSwappedByActivation,()=>{t.resolve()});try{await t.valueOrThrow()}catch{this.#w(e)}}async swapFrameTree(e){this.#s=e,k(this.#s instanceof ir,"CDPSession is not an instance of CDPSessionImpl.");const t=this._frameTree.getMainFrame();t&&(this.#a.add(this.#s._target()._targetId),this._frameTree.removeFrame(t),t.updateId(this.#s._target()._targetId),this._frameTree.addFrame(t),t.updateClient(e)),this.setupEventListeners(e),e.once(W.Disconnected,()=>{this.#u().catch(I)}),await this.initialize(e,t),await this.#t.addClient(e),t&&t.emit(fe.FrameSwappedByActivation,void 0)}async registerSpeculativeSession(e){await this.#t.addClient(e)}setupEventListeners(e){e.on("Page.frameAttached",async t=>{await this.#l?.valueOrThrow(),this.#g(e,t.frameId,t.parentFrameId)}),e.on("Page.frameNavigated",async t=>{this.#a.add(t.frame.id),await this.#l?.valueOrThrow(),this.#y(t.frame,t.type)}),e.on("Page.navigatedWithinDocument",async t=>{await this.#l?.valueOrThrow(),this.#b(t.frameId,t.url)}),e.on("Page.frameDetached",async t=>{await this.#l?.valueOrThrow(),this.#v(t.frameId,t.reason)}),e.on("Page.frameStartedLoading",async t=>{await this.#l?.valueOrThrow(),this.#h(t.frameId)}),e.on("Page.frameStoppedLoading",async t=>{await this.#l?.valueOrThrow(),this.#p(t.frameId)}),e.on("Runtime.executionContextCreated",async t=>{await this.#l?.valueOrThrow(),this.#S(t.context,e)}),e.on("Page.lifecycleEvent",async t=>{await this.#l?.valueOrThrow(),this.#d(t)})}async initialize(e,t){try{this.#l?.resolve(),this.#l=B.create(),await Promise.all([this.#t.addClient(e),e.send("Page.enable"),e.send("Page.getFrameTree").then(({frameTree:r})=>{this.#f(e,r),this.#l?.resolve()}),e.send("Page.setLifecycleEventsEnabled",{enabled:!0}),e.send("Runtime.enable").then(()=>this.#m(e,Jn)),...(t?Array.from(this.#n.values()):[]).map(r=>t?.addPreloadScript(r)),...(t?Array.from(this.#o.values()):[]).map(r=>t?.addExposedFunctionBinding(r))])}catch(r){if(this.#l?.resolve(),ct(r)&&Is(r))return;throw r}}page(){return this.#e}mainFrame(){const e=this._frameTree.getMainFrame();return k(e,"Requesting main frame too early!"),e}frames(){return Array.from(this._frameTree.frames())}frame(e){return this._frameTree.getById(e)||null}async addExposedFunctionBinding(e){this.#o.add(e),await Promise.all(this.frames().map(async t=>await t.addExposedFunctionBinding(e)))}async removeExposedFunctionBinding(e){this.#o.delete(e),await Promise.all(this.frames().map(async t=>await t.removeExposedFunctionBinding(e)))}async evaluateOnNewDocument(e){const{identifier:t}=await this.mainFrame()._client().send("Page.addScriptToEvaluateOnNewDocument",{source:e}),r=new dh(this.mainFrame(),t,e);return this.#n.set(t,r),await Promise.all(this.frames().map(async s=>await s.addPreloadScript(r))),{identifier:t}}async removeScriptToEvaluateOnNewDocument(e){const t=this.#n.get(e);if(!t)throw new Error(`Script to evaluate on new document with id ${e} not found`);this.#n.delete(e),await Promise.all(this.frames().map(r=>{const s=t.getIdForFrame(r);if(s)return r._client().send("Page.removeScriptToEvaluateOnNewDocument",{identifier:s}).catch(I)}))}onAttachedToTarget(e){if(e._getTargetInfo().type!=="iframe")return;const t=this.frame(e._getTargetInfo().targetId);t&&t.updateClient(e._session()),this.setupEventListeners(e._session()),this.initialize(e._session(),t)}_deviceRequestPromptManager(e){let t=this.#c.get(e);return t===void 0&&(t=new ph(e,this.#r),this.#c.set(e,t)),t}#d(e){const t=this.frame(e.frameId);t&&(t._onLifecycleEvent(e.loaderId,e.name),this.emit(oe.LifecycleEvent,t),t.emit(fe.LifecycleEvent,void 0))}#h(e){const t=this.frame(e);t&&t._onLoadingStarted()}#p(e){const t=this.frame(e);t&&(t._onLoadingStopped(),this.emit(oe.LifecycleEvent,t),t.emit(fe.LifecycleEvent,void 0))}#f(e,t){if(t.frame.parentId&&this.#g(e,t.frame.id,t.frame.parentId),this.#a.has(t.frame.id)?this.#a.delete(t.frame.id):this.#y(t.frame,"Navigation"),!!t.childFrames)for(const r of t.childFrames)this.#f(e,r)}#g(e,t,r){let s=this.frame(t);if(s){const n=this.frame(r);e&&n&&s.client!==n?.client&&s.updateClient(e);return}s=new co(this,t,r,e),this._frameTree.addFrame(s),this.emit(oe.FrameAttached,s)}async#y(e,t){const r=e.id,s=!e.parentId;let n=this._frameTree.getById(r);if(n)for(const o of n.childFrames())this.#w(o);s&&(n?(this._frameTree.removeFrame(n),n._id=r):n=new co(this,r,void 0,this.#s),this._frameTree.addFrame(n)),n=await this._frameTree.waitForFrame(r),n._navigated(e),this.emit(oe.FrameNavigated,n),n.emit(fe.FrameNavigated,t)}async#m(e,t){const r=`${e.id()}:${t}`;this.#i.has(r)||(await e.send("Page.addScriptToEvaluateOnNewDocument",{source:`//# sourceURL=${Ze.INTERNAL_URL}`,worldName:t}),await Promise.all(this.frames().filter(s=>s.client===e).map(s=>e.send("Page.createIsolatedWorld",{frameId:s._id,worldName:t,grantUniveralAccess:!0}).catch(I))),this.#i.add(r))}#b(e,t){const r=this.frame(e);r&&(r._navigatedWithinDocument(t),this.emit(oe.FrameNavigatedWithinDocument,r),r.emit(fe.FrameNavigatedWithinDocument,void 0),this.emit(oe.FrameNavigated,r),r.emit(fe.FrameNavigated,"Navigation"))}#v(e,t){const r=this.frame(e);if(r)switch(t){case"remove":this.#w(r);break;case"swap":this.emit(oe.FrameSwapped,r),r.emit(fe.FrameSwapped,void 0);break}}#S(e,t){const r=e.auxData,s=r&&r.frameId,n=typeof s=="string"?this.frame(s):void 0;let o;if(n){if(n.client!==t)return;e.auxData&&e.auxData.isDefault?o=n.worlds[Ge]:e.name===Jn&&(o=n.worlds[fi])}if(!o)return;const a=new Ba(n?.client||this.#s,e,o);o.setContext(a)}#w(e){for(const t of e.childFrames())this.#w(t);e[U](),this._frameTree.removeFrame(e),this.emit(oe.FrameDetached,e),e.emit(fe.FrameDetached,e)}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class qh{constructor(){}}const me=Object.freeze({Left:"left",Right:"right",Middle:"middle",Back:"back",Forward:"forward"});class Hh{constructor(){}}class Uh{constructor(){}async tap(e,t){await this.touchStart(e,t),await this.touchEnd()}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */const po={0:{keyCode:48,key:"0",code:"Digit0"},1:{keyCode:49,key:"1",code:"Digit1"},2:{keyCode:50,key:"2",code:"Digit2"},3:{keyCode:51,key:"3",code:"Digit3"},4:{keyCode:52,key:"4",code:"Digit4"},5:{keyCode:53,key:"5",code:"Digit5"},6:{keyCode:54,key:"6",code:"Digit6"},7:{keyCode:55,key:"7",code:"Digit7"},8:{keyCode:56,key:"8",code:"Digit8"},9:{keyCode:57,key:"9",code:"Digit9"},Power:{key:"Power",code:"Power"},Eject:{key:"Eject",code:"Eject"},Abort:{keyCode:3,code:"Abort",key:"Cancel"},Help:{keyCode:6,code:"Help",key:"Help"},Backspace:{keyCode:8,code:"Backspace",key:"Backspace"},Tab:{keyCode:9,code:"Tab",key:"Tab"},Numpad5:{keyCode:12,shiftKeyCode:101,key:"Clear",code:"Numpad5",shiftKey:"5",location:3},NumpadEnter:{keyCode:13,code:"NumpadEnter",key:"Enter",text:"\r",location:3},Enter:{keyCode:13,code:"Enter",key:"Enter",text:"\r"},"\r":{keyCode:13,code:"Enter",key:"Enter",text:"\r"},"\n":{keyCode:13,code:"Enter",key:"Enter",text:"\r"},ShiftLeft:{keyCode:16,code:"ShiftLeft",key:"Shift",location:1},ShiftRight:{keyCode:16,code:"ShiftRight",key:"Shift",location:2},ControlLeft:{keyCode:17,code:"ControlLeft",key:"Control",location:1},ControlRight:{keyCode:17,code:"ControlRight",key:"Control",location:2},AltLeft:{keyCode:18,code:"AltLeft",key:"Alt",location:1},AltRight:{keyCode:18,code:"AltRight",key:"Alt",location:2},Pause:{keyCode:19,code:"Pause",key:"Pause"},CapsLock:{keyCode:20,code:"CapsLock",key:"CapsLock"},Escape:{keyCode:27,code:"Escape",key:"Escape"},Convert:{keyCode:28,code:"Convert",key:"Convert"},NonConvert:{keyCode:29,code:"NonConvert",key:"NonConvert"},Space:{keyCode:32,code:"Space",key:" "},Numpad9:{keyCode:33,shiftKeyCode:105,key:"PageUp",code:"Numpad9",shiftKey:"9",location:3},PageUp:{keyCode:33,code:"PageUp",key:"PageUp"},Numpad3:{keyCode:34,shiftKeyCode:99,key:"PageDown",code:"Numpad3",shiftKey:"3",location:3},PageDown:{keyCode:34,code:"PageDown",key:"PageDown"},End:{keyCode:35,code:"End",key:"End"},Numpad1:{keyCode:35,shiftKeyCode:97,key:"End",code:"Numpad1",shiftKey:"1",location:3},Home:{keyCode:36,code:"Home",key:"Home"},Numpad7:{keyCode:36,shiftKeyCode:103,key:"Home",code:"Numpad7",shiftKey:"7",location:3},ArrowLeft:{keyCode:37,code:"ArrowLeft",key:"ArrowLeft"},Numpad4:{keyCode:37,shiftKeyCode:100,key:"ArrowLeft",code:"Numpad4",shiftKey:"4",location:3},Numpad8:{keyCode:38,shiftKeyCode:104,key:"ArrowUp",code:"Numpad8",shiftKey:"8",location:3},ArrowUp:{keyCode:38,code:"ArrowUp",key:"ArrowUp"},ArrowRight:{keyCode:39,code:"ArrowRight",key:"ArrowRight"},Numpad6:{keyCode:39,shiftKeyCode:102,key:"ArrowRight",code:"Numpad6",shiftKey:"6",location:3},Numpad2:{keyCode:40,shiftKeyCode:98,key:"ArrowDown",code:"Numpad2",shiftKey:"2",location:3},ArrowDown:{keyCode:40,code:"ArrowDown",key:"ArrowDown"},Select:{keyCode:41,code:"Select",key:"Select"},Open:{keyCode:43,code:"Open",key:"Execute"},PrintScreen:{keyCode:44,code:"PrintScreen",key:"PrintScreen"},Insert:{keyCode:45,code:"Insert",key:"Insert"},Numpad0:{keyCode:45,shiftKeyCode:96,key:"Insert",code:"Numpad0",shiftKey:"0",location:3},Delete:{keyCode:46,code:"Delete",key:"Delete"},NumpadDecimal:{keyCode:46,shiftKeyCode:110,code:"NumpadDecimal",key:"\0",shiftKey:".",location:3},Digit0:{keyCode:48,code:"Digit0",shiftKey:")",key:"0"},Digit1:{keyCode:49,code:"Digit1",shiftKey:"!",key:"1"},Digit2:{keyCode:50,code:"Digit2",shiftKey:"@",key:"2"},Digit3:{keyCode:51,code:"Digit3",shiftKey:"#",key:"3"},Digit4:{keyCode:52,code:"Digit4",shiftKey:"$",key:"4"},Digit5:{keyCode:53,code:"Digit5",shiftKey:"%",key:"5"},Digit6:{keyCode:54,code:"Digit6",shiftKey:"^",key:"6"},Digit7:{keyCode:55,code:"Digit7",shiftKey:"&",key:"7"},Digit8:{keyCode:56,code:"Digit8",shiftKey:"*",key:"8"},Digit9:{keyCode:57,code:"Digit9",shiftKey:"(",key:"9"},KeyA:{keyCode:65,code:"KeyA",shiftKey:"A",key:"a"},KeyB:{keyCode:66,code:"KeyB",shiftKey:"B",key:"b"},KeyC:{keyCode:67,code:"KeyC",shiftKey:"C",key:"c"},KeyD:{keyCode:68,code:"KeyD",shiftKey:"D",key:"d"},KeyE:{keyCode:69,code:"KeyE",shiftKey:"E",key:"e"},KeyF:{keyCode:70,code:"KeyF",shiftKey:"F",key:"f"},KeyG:{keyCode:71,code:"KeyG",shiftKey:"G",key:"g"},KeyH:{keyCode:72,code:"KeyH",shiftKey:"H",key:"h"},KeyI:{keyCode:73,code:"KeyI",shiftKey:"I",key:"i"},KeyJ:{keyCode:74,code:"KeyJ",shiftKey:"J",key:"j"},KeyK:{keyCode:75,code:"KeyK",shiftKey:"K",key:"k"},KeyL:{keyCode:76,code:"KeyL",shiftKey:"L",key:"l"},KeyM:{keyCode:77,code:"KeyM",shiftKey:"M",key:"m"},KeyN:{keyCode:78,code:"KeyN",shiftKey:"N",key:"n"},KeyO:{keyCode:79,code:"KeyO",shiftKey:"O",key:"o"},KeyP:{keyCode:80,code:"KeyP",shiftKey:"P",key:"p"},KeyQ:{keyCode:81,code:"KeyQ",shiftKey:"Q",key:"q"},KeyR:{keyCode:82,code:"KeyR",shiftKey:"R",key:"r"},KeyS:{keyCode:83,code:"KeyS",shiftKey:"S",key:"s"},KeyT:{keyCode:84,code:"KeyT",shiftKey:"T",key:"t"},KeyU:{keyCode:85,code:"KeyU",shiftKey:"U",key:"u"},KeyV:{keyCode:86,code:"KeyV",shiftKey:"V",key:"v"},KeyW:{keyCode:87,code:"KeyW",shiftKey:"W",key:"w"},KeyX:{keyCode:88,code:"KeyX",shiftKey:"X",key:"x"},KeyY:{keyCode:89,code:"KeyY",shiftKey:"Y",key:"y"},KeyZ:{keyCode:90,code:"KeyZ",shiftKey:"Z",key:"z"},MetaLeft:{keyCode:91,code:"MetaLeft",key:"Meta",location:1},MetaRight:{keyCode:92,code:"MetaRight",key:"Meta",location:2},ContextMenu:{keyCode:93,code:"ContextMenu",key:"ContextMenu"},NumpadMultiply:{keyCode:106,code:"NumpadMultiply",key:"*",location:3},NumpadAdd:{keyCode:107,code:"NumpadAdd",key:"+",location:3},NumpadSubtract:{keyCode:109,code:"NumpadSubtract",key:"-",location:3},NumpadDivide:{keyCode:111,code:"NumpadDivide",key:"/",location:3},F1:{keyCode:112,code:"F1",key:"F1"},F2:{keyCode:113,code:"F2",key:"F2"},F3:{keyCode:114,code:"F3",key:"F3"},F4:{keyCode:115,code:"F4",key:"F4"},F5:{keyCode:116,code:"F5",key:"F5"},F6:{keyCode:117,code:"F6",key:"F6"},F7:{keyCode:118,code:"F7",key:"F7"},F8:{keyCode:119,code:"F8",key:"F8"},F9:{keyCode:120,code:"F9",key:"F9"},F10:{keyCode:121,code:"F10",key:"F10"},F11:{keyCode:122,code:"F11",key:"F11"},F12:{keyCode:123,code:"F12",key:"F12"},F13:{keyCode:124,code:"F13",key:"F13"},F14:{keyCode:125,code:"F14",key:"F14"},F15:{keyCode:126,code:"F15",key:"F15"},F16:{keyCode:127,code:"F16",key:"F16"},F17:{keyCode:128,code:"F17",key:"F17"},F18:{keyCode:129,code:"F18",key:"F18"},F19:{keyCode:130,code:"F19",key:"F19"},F20:{keyCode:131,code:"F20",key:"F20"},F21:{keyCode:132,code:"F21",key:"F21"},F22:{keyCode:133,code:"F22",key:"F22"},F23:{keyCode:134,code:"F23",key:"F23"},F24:{keyCode:135,code:"F24",key:"F24"},NumLock:{keyCode:144,code:"NumLock",key:"NumLock"},ScrollLock:{keyCode:145,code:"ScrollLock",key:"ScrollLock"},AudioVolumeMute:{keyCode:173,code:"AudioVolumeMute",key:"AudioVolumeMute"},AudioVolumeDown:{keyCode:174,code:"AudioVolumeDown",key:"AudioVolumeDown"},AudioVolumeUp:{keyCode:175,code:"AudioVolumeUp",key:"AudioVolumeUp"},MediaTrackNext:{keyCode:176,code:"MediaTrackNext",key:"MediaTrackNext"},MediaTrackPrevious:{keyCode:177,code:"MediaTrackPrevious",key:"MediaTrackPrevious"},MediaStop:{keyCode:178,code:"MediaStop",key:"MediaStop"},MediaPlayPause:{keyCode:179,code:"MediaPlayPause",key:"MediaPlayPause"},Semicolon:{keyCode:186,code:"Semicolon",shiftKey:":",key:";"},Equal:{keyCode:187,code:"Equal",shiftKey:"+",key:"="},NumpadEqual:{keyCode:187,code:"NumpadEqual",key:"=",location:3},Comma:{keyCode:188,code:"Comma",shiftKey:"<",key:","},Minus:{keyCode:189,code:"Minus",shiftKey:"_",key:"-"},Period:{keyCode:190,code:"Period",shiftKey:">",key:"."},Slash:{keyCode:191,code:"Slash",shiftKey:"?",key:"/"},Backquote:{keyCode:192,code:"Backquote",shiftKey:"~",key:"`"},BracketLeft:{keyCode:219,code:"BracketLeft",shiftKey:"{",key:"["},Backslash:{keyCode:220,code:"Backslash",shiftKey:"|",key:"\\"},BracketRight:{keyCode:221,code:"BracketRight",shiftKey:"}",key:"]"},Quote:{keyCode:222,code:"Quote",shiftKey:'"',key:"'"},AltGraph:{keyCode:225,code:"AltGraph",key:"AltGraph"},Props:{keyCode:247,code:"Props",key:"CrSel"},Cancel:{keyCode:3,key:"Cancel",code:"Abort"},Clear:{keyCode:12,key:"Clear",code:"Numpad5",location:3},Shift:{keyCode:16,key:"Shift",code:"ShiftLeft",location:1},Control:{keyCode:17,key:"Control",code:"ControlLeft",location:1},Alt:{keyCode:18,key:"Alt",code:"AltLeft",location:1},Accept:{keyCode:30,key:"Accept"},ModeChange:{keyCode:31,key:"ModeChange"}," ":{keyCode:32,key:" ",code:"Space"},Print:{keyCode:42,key:"Print"},Execute:{keyCode:43,key:"Execute",code:"Open"},"\0":{keyCode:46,key:"\0",code:"NumpadDecimal",location:3},a:{keyCode:65,key:"a",code:"KeyA"},b:{keyCode:66,key:"b",code:"KeyB"},c:{keyCode:67,key:"c",code:"KeyC"},d:{keyCode:68,key:"d",code:"KeyD"},e:{keyCode:69,key:"e",code:"KeyE"},f:{keyCode:70,key:"f",code:"KeyF"},g:{keyCode:71,key:"g",code:"KeyG"},h:{keyCode:72,key:"h",code:"KeyH"},i:{keyCode:73,key:"i",code:"KeyI"},j:{keyCode:74,key:"j",code:"KeyJ"},k:{keyCode:75,key:"k",code:"KeyK"},l:{keyCode:76,key:"l",code:"KeyL"},m:{keyCode:77,key:"m",code:"KeyM"},n:{keyCode:78,key:"n",code:"KeyN"},o:{keyCode:79,key:"o",code:"KeyO"},p:{keyCode:80,key:"p",code:"KeyP"},q:{keyCode:81,key:"q",code:"KeyQ"},r:{keyCode:82,key:"r",code:"KeyR"},s:{keyCode:83,key:"s",code:"KeyS"},t:{keyCode:84,key:"t",code:"KeyT"},u:{keyCode:85,key:"u",code:"KeyU"},v:{keyCode:86,key:"v",code:"KeyV"},w:{keyCode:87,key:"w",code:"KeyW"},x:{keyCode:88,key:"x",code:"KeyX"},y:{keyCode:89,key:"y",code:"KeyY"},z:{keyCode:90,key:"z",code:"KeyZ"},Meta:{keyCode:91,key:"Meta",code:"MetaLeft",location:1},"*":{keyCode:106,key:"*",code:"NumpadMultiply",location:3},"+":{keyCode:107,key:"+",code:"NumpadAdd",location:3},"-":{keyCode:109,key:"-",code:"NumpadSubtract",location:3},"/":{keyCode:111,key:"/",code:"NumpadDivide",location:3},";":{keyCode:186,key:";",code:"Semicolon"},"=":{keyCode:187,key:"=",code:"Equal"},",":{keyCode:188,key:",",code:"Comma"},".":{keyCode:190,key:".",code:"Period"},"`":{keyCode:192,key:"`",code:"Backquote"},"[":{keyCode:219,key:"[",code:"BracketLeft"},"\\":{keyCode:220,key:"\\",code:"Backslash"},"]":{keyCode:221,key:"]",code:"BracketRight"},"'":{keyCode:222,key:"'",code:"Quote"},Attn:{keyCode:246,key:"Attn"},CrSel:{keyCode:247,key:"CrSel",code:"Props"},ExSel:{keyCode:248,key:"ExSel"},EraseEof:{keyCode:249,key:"EraseEof"},Play:{keyCode:250,key:"Play"},ZoomOut:{keyCode:251,key:"ZoomOut"},")":{keyCode:48,key:")",code:"Digit0"},"!":{keyCode:49,key:"!",code:"Digit1"},"@":{keyCode:50,key:"@",code:"Digit2"},"#":{keyCode:51,key:"#",code:"Digit3"},$:{keyCode:52,key:"$",code:"Digit4"},"%":{keyCode:53,key:"%",code:"Digit5"},"^":{keyCode:54,key:"^",code:"Digit6"},"&":{keyCode:55,key:"&",code:"Digit7"},"(":{keyCode:57,key:"(",code:"Digit9"},A:{keyCode:65,key:"A",code:"KeyA"},B:{keyCode:66,key:"B",code:"KeyB"},C:{keyCode:67,key:"C",code:"KeyC"},D:{keyCode:68,key:"D",code:"KeyD"},E:{keyCode:69,key:"E",code:"KeyE"},F:{keyCode:70,key:"F",code:"KeyF"},G:{keyCode:71,key:"G",code:"KeyG"},H:{keyCode:72,key:"H",code:"KeyH"},I:{keyCode:73,key:"I",code:"KeyI"},J:{keyCode:74,key:"J",code:"KeyJ"},K:{keyCode:75,key:"K",code:"KeyK"},L:{keyCode:76,key:"L",code:"KeyL"},M:{keyCode:77,key:"M",code:"KeyM"},N:{keyCode:78,key:"N",code:"KeyN"},O:{keyCode:79,key:"O",code:"KeyO"},P:{keyCode:80,key:"P",code:"KeyP"},Q:{keyCode:81,key:"Q",code:"KeyQ"},R:{keyCode:82,key:"R",code:"KeyR"},S:{keyCode:83,key:"S",code:"KeyS"},T:{keyCode:84,key:"T",code:"KeyT"},U:{keyCode:85,key:"U",code:"KeyU"},V:{keyCode:86,key:"V",code:"KeyV"},W:{keyCode:87,key:"W",code:"KeyW"},X:{keyCode:88,key:"X",code:"KeyX"},Y:{keyCode:89,key:"Y",code:"KeyY"},Z:{keyCode:90,key:"Z",code:"KeyZ"},":":{keyCode:186,key:":",code:"Semicolon"},"<":{keyCode:188,key:"<",code:"Comma"},_:{keyCode:189,key:"_",code:"Minus"},">":{keyCode:190,key:">",code:"Period"},"?":{keyCode:191,key:"?",code:"Slash"},"~":{keyCode:192,key:"~",code:"Backquote"},"{":{keyCode:219,key:"{",code:"BracketLeft"},"|":{keyCode:220,key:"|",code:"Backslash"},"}":{keyCode:221,key:"}",code:"BracketRight"},'"':{keyCode:222,key:'"',code:"Quote"},SoftLeft:{key:"SoftLeft",code:"SoftLeft",location:4},SoftRight:{key:"SoftRight",code:"SoftRight",location:4},Camera:{keyCode:44,key:"Camera",code:"Camera",location:4},Call:{key:"Call",code:"Call",location:4},EndCall:{keyCode:95,key:"EndCall",code:"EndCall",location:4},VolumeDown:{keyCode:182,key:"VolumeDown",code:"VolumeDown",location:4},VolumeUp:{keyCode:183,key:"VolumeUp",code:"VolumeUp",location:4}};/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Vh extends qh{#e;#t=new Set;_modifiers=0;constructor(e){super(),this.#e=e}updateClient(e){this.#e=e}async down(e,t={text:void 0,commands:[]}){const r=this.#i(e),s=this.#t.has(r.code);this.#t.add(r.code),this._modifiers|=this.#r(r.key);const n=t.text===void 0?r.text:t.text;await this.#e.send("Input.dispatchKeyEvent",{type:n?"keyDown":"rawKeyDown",modifiers:this._modifiers,windowsVirtualKeyCode:r.keyCode,code:r.code,key:r.key,text:n,unmodifiedText:n,autoRepeat:s,location:r.location,isKeypad:r.location===3,commands:t.commands})}#r(e){return e==="Alt"?1:e==="Control"?2:e==="Meta"?4:e==="Shift"?8:0}#i(e){const t=this._modifiers&8,r={key:"",keyCode:0,code:"",text:"",location:0},s=po[e];return k(s,`Unknown key: "${e}"`),s.key&&(r.key=s.key),t&&s.shiftKey&&(r.key=s.shiftKey),s.keyCode&&(r.keyCode=s.keyCode),t&&s.shiftKeyCode&&(r.keyCode=s.shiftKeyCode),s.code&&(r.code=s.code),s.location&&(r.location=s.location),r.key.length===1&&(r.text=r.key),s.text&&(r.text=s.text),t&&s.shiftText&&(r.text=s.shiftText),this._modifiers&-9&&(r.text=""),r}async up(e){const t=this.#i(e);this._modifiers&=~this.#r(t.key),this.#t.delete(t.code),await this.#e.send("Input.dispatchKeyEvent",{type:"keyUp",modifiers:this._modifiers,key:t.key,windowsVirtualKeyCode:t.keyCode,code:t.code,location:t.location})}async sendCharacter(e){await this.#e.send("Input.insertText",{text:e})}charIsKey(e){return!!po[e]}async type(e,t={}){const r=t.delay||void 0;for(const s of e)this.charIsKey(s)?await this.press(s,{delay:r}):(r&&await new Promise(n=>setTimeout(n,r)),await this.sendCharacter(s))}async press(e,t={}){const{delay:r=null}=t;await this.down(e,t),r&&await new Promise(s=>setTimeout(s,t.delay)),await this.up(e)}}const fo=i=>{switch(i){case me.Left:return 1;case me.Right:return 2;case me.Middle:return 4;case me.Back:return 8;case me.Forward:return 16}},Kh=i=>i&1?me.Left:i&2?me.Right:i&4?me.Middle:i&8?me.Back:i&16?me.Forward:"none";class Wh extends Hh{#e;#t;constructor(e,t){super(),this.#e=e,this.#t=t}updateClient(e){this.#e=e}#r={position:{x:0,y:0},buttons:0};get#i(){return Object.assign({...this.#r},...this.#s)}#s=[];#n(){const e={};this.#s.push(e);const t=()=>{this.#s.splice(this.#s.indexOf(e),1)};return{update:r=>{Object.assign(e,r)},commit:()=>{this.#r={...this.#r,...e},t()},rollback:t}}async#o(e){const{update:t,commit:r,rollback:s}=this.#n();try{await e(t),r()}catch(n){throw s(),n}}async reset(){const e=[];for(const[t,r]of[[1,me.Left],[4,me.Middle],[2,me.Right],[16,me.Forward],[8,me.Back]])this.#i.buttons&t&&e.push(this.up({button:r}));(this.#i.position.x!==0||this.#i.position.y!==0)&&e.push(this.move(0,0)),await Promise.all(e)}async move(e,t,r={}){const{steps:s=1}=r,n=this.#i.position,o={x:e,y:t};for(let a=1;a<=s;a++)await this.#o(c=>{c({position:{x:n.x+(o.x-n.x)*(a/s),y:n.y+(o.y-n.y)*(a/s)}});const{buttons:l,position:d}=this.#i;return this.#e.send("Input.dispatchMouseEvent",{type:"mouseMoved",modifiers:this.#t._modifiers,buttons:l,button:Kh(l),...d})})}async down(e={}){const{button:t=me.Left,clickCount:r=1}=e,s=fo(t);if(!s)throw new Error(`Unsupported mouse button: ${t}`);if(this.#i.buttons&s)throw new Error(`'${t}' is already pressed.`);await this.#o(n=>{n({buttons:this.#i.buttons|s});const{buttons:o,position:a}=this.#i;return this.#e.send("Input.dispatchMouseEvent",{type:"mousePressed",modifiers:this.#t._modifiers,clickCount:r,buttons:o,button:t,...a})})}async up(e={}){const{button:t=me.Left,clickCount:r=1}=e,s=fo(t);if(!s)throw new Error(`Unsupported mouse button: ${t}`);if(!(this.#i.buttons&s))throw new Error(`'${t}' is not pressed.`);await this.#o(n=>{n({buttons:this.#i.buttons&~s});const{buttons:o,position:a}=this.#i;return this.#e.send("Input.dispatchMouseEvent",{type:"mouseReleased",modifiers:this.#t._modifiers,clickCount:r,buttons:o,button:t,...a})})}async click(e,t,r={}){const{delay:s,count:n=1,clickCount:o=n}=r;if(n<1)throw new Error("Click must occur a positive number of times.");const a=[this.move(e,t)];if(o===n)for(let c=1;c<n;++c)a.push(this.down({...r,clickCount:c}),this.up({...r,clickCount:c}));a.push(this.down({...r,clickCount:o})),typeof s=="number"&&(await Promise.all(a),a.length=0,await new Promise(c=>{setTimeout(c,s)})),a.push(this.up({...r,clickCount:o})),await Promise.all(a)}async wheel(e={}){const{deltaX:t=0,deltaY:r=0}=e,{position:s,buttons:n}=this.#i;await this.#e.send("Input.dispatchMouseEvent",{type:"mouseWheel",pointerType:"mouse",modifiers:this.#t._modifiers,deltaY:r,deltaX:t,buttons:n,...s})}async drag(e,t){const r=new Promise(s=>{this.#e.once("Input.dragIntercepted",n=>s(n.data))});return await this.move(e.x,e.y),await this.down(),await this.move(t.x,t.y),await r}async dragEnter(e,t){await this.#e.send("Input.dispatchDragEvent",{type:"dragEnter",x:e.x,y:e.y,modifiers:this.#t._modifiers,data:t})}async dragOver(e,t){await this.#e.send("Input.dispatchDragEvent",{type:"dragOver",x:e.x,y:e.y,modifiers:this.#t._modifiers,data:t})}async drop(e,t){await this.#e.send("Input.dispatchDragEvent",{type:"drop",x:e.x,y:e.y,modifiers:this.#t._modifiers,data:t})}async dragAndDrop(e,t,r={}){const{delay:s=null}=r,n=await this.drag(e,t);await this.dragEnter(t,n),await this.dragOver(t,n),s&&await new Promise(o=>setTimeout(o,s)),await this.drop(t,n),await this.up()}}class zh extends Uh{#e;#t;constructor(e,t){super(),this.#e=e,this.#t=t}updateClient(e){this.#e=e}async touchStart(e,t){await this.#e.send("Input.dispatchTouchEvent",{type:"touchStart",touchPoints:[{x:Math.round(e),y:Math.round(t),radiusX:.5,radiusY:.5,force:.5}],modifiers:this.#t._modifiers})}async touchMove(e,t){await this.#e.send("Input.dispatchTouchEvent",{type:"touchMove",touchPoints:[{x:Math.round(e),y:Math.round(t),radiusX:.5,radiusY:.5,force:.5}],modifiers:this.#t._modifiers})}async touchEnd(){await this.#e.send("Input.dispatchTouchEvent",{type:"touchEnd",touchPoints:[],modifiers:this.#t._modifiers})}}class Gh{#e;#t=!1;#r;constructor(e){this.#e=e}updateClient(e){this.#e=e}async start(e={}){k(!this.#t,"Cannot start recording trace while already recording trace.");const t=["-*","devtools.timeline","v8.execute","disabled-by-default-devtools.timeline","disabled-by-default-devtools.timeline.frame","toplevel","blink.console","blink.user_timing","latencyInfo","disabled-by-default-devtools.timeline.stack","disabled-by-default-v8.cpu_profiler"],{path:r,screenshots:s=!1,categories:n=t}=e;s&&n.push("disabled-by-default-devtools.screenshot");const o=n.filter(c=>c.startsWith("-")).map(c=>c.slice(1)),a=n.filter(c=>!c.startsWith("-"));this.#r=r,this.#t=!0,await this.#e.send("Tracing.start",{transferMode:"ReturnAsStream",traceConfig:{excludedCategories:o,includedCategories:a}})}async stop(){const e=B.create();return this.#e.once("Tracing.tracingComplete",async t=>{try{k(t.stream,'Missing "stream"');const r=await Ia(this.#e,t.stream),s=await Ra(r,this.#r);e.resolve(s??void 0)}catch(r){ct(r)?e.reject(r):e.reject(new Error(`Unknown error: ${r}`))}}),await this.#e.send("Tracing.end"),this.#t=!1,await e.valueOrThrow()}}/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class Jh extends Q{timeoutSettings=new rn;#e;constructor(e){super(),this.#e=e}url(){return this.#e}async evaluate(e,...t){return e=ae(this.evaluate.name,e),await this.mainRealm().evaluate(e,...t)}async evaluateHandle(e,...t){return e=ae(this.evaluateHandle.name,e),await this.mainRealm().evaluateHandle(e,...t)}async close(){throw new Ta("WebWorker.close() is not supported")}}class qa extends Jh{#e;#t;#r;#i;constructor(e,t,r,s,n,o){super(t),this.#r=r,this.#t=e,this.#i=s,this.#e=new As(this,new rn),this.#t.once("Runtime.executionContextCreated",async a=>{this.#e.setContext(new Ba(e,a.context,this.#e))}),this.#e.emitter.on("consoleapicalled",async a=>{try{return n(a.type,a.args.map(c=>new ji(this.#e,c)),a.stackTrace)}catch(c){I(c)}}),this.#t.on("Runtime.exceptionThrown",o),this.#t.once(W.Disconnected,()=>{this.#e.dispose()}),this.#t.send("Runtime.enable").catch(I)}mainRealm(){return this.#e}get client(){return this.#t}async close(){switch(this.#i){case Ne.SERVICE_WORKER:case Ne.SHARED_WORKER:{await this.client.connection()?.send("Target.closeTarget",{targetId:this.#r}),await this.client.connection()?.send("Target.detachFromTarget",{sessionId:this.client.id()});break}default:await this.evaluate(()=>{self.close()})}}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var as=function(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,s;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],t&&(s=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");s&&(r=function(){try{s.call(this)}catch(n){return Promise.reject(n)}}),i.stack.push({value:e,dispose:r,async:t})}else t&&i.stack.push({async:!0});return e},cs=function(i){return function(e){function t(s){e.error=e.hasError?new i(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}function r(){for(;e.stack.length;){var s=e.stack.pop();try{var n=s.dispose&&s.dispose.call(s.value);if(s.async)return Promise.resolve(n).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}}(typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var r=new Error(t);return r.name="SuppressedError",r.error=i,r.suppressed=e,r});function ls(i){switch(i){case"warning":return"warn";default:return i}}class Br extends bu{static async _create(e,t,r){const s=new Br(e,t);if(await s.#N(),r)try{await s.setViewport(r)}catch(n){if(ct(n)&&Is(n))I(n);else throw n}return s}#e=!1;#t;#r;#i;#s;#n;#o;#a;#c;#l;#u;#d;#h=new Map;#p=new Map;#f;#g;#y=new Map;#m=new Set;#b=B.create();#v=!1;#S=!1;constructor(e,t){super(),this.#r=e,this.#s=e.parentSession(),k(this.#s,"Tab target session is not defined."),this.#n=this.#s._target(),k(this.#n,"Tab target is not defined."),this.#i=t,this.#t=t._targetManager(),this.#o=new Vh(e),this.#a=new Wh(e,this.#o),this.#c=new zh(e,this.#o),this.#l=new Bh(e,this,this._timeoutSettings),this.#u=new Du(e),this.#d=new Gh(e),this.#f=new Iu(e),this.#g=null;const r=new Q(this.#l);r.on(oe.FrameAttached,n=>{this.emit("frameattached",n)}),r.on(oe.FrameDetached,n=>{this.emit("framedetached",n)}),r.on(oe.FrameNavigated,n=>{this.emit("framenavigated",n)}),r.on(oe.ConsoleApiCalled,([n,o])=>{this.#$(n,o)}),r.on(oe.BindingCalled,([n,o])=>{this.#P(n,o)});const s=new Q(this.#l.networkManager);s.on(ne.Request,n=>{this.emit("request",n)}),s.on(ne.RequestServedFromCache,n=>{this.emit("requestservedfromcache",n)}),s.on(ne.Response,n=>{this.emit("response",n)}),s.on(ne.RequestFailed,n=>{this.emit("requestfailed",n)}),s.on(ne.RequestFinished,n=>{this.emit("requestfinished",n)}),this.#s.on(W.Swapped,this.#E.bind(this)),this.#s.on(W.Ready,this.#x.bind(this)),this.#t.on("targetGone",this.#C),this.#n._isClosedDeferred.valueOrThrow().then(()=>{this.#t.off("targetGone",this.#C),this.emit("close",void 0),this.#e=!0}).catch(I),this.#k(),this.#w()}#w(){const e=[];for(const r of this.#t.getChildTargets(this.#i))e.push(r);let t=0;for(;t<e.length;){const r=e[t];t++;const s=r._session();s&&this.#_(s);for(const n of this.#t.getChildTargets(r))e.push(n)}}async#E(e){this.#r=e,k(this.#r instanceof ir,"CDPSession is not instance of CDPSessionImpl"),this.#i=this.#r._target(),k(this.#i,"Missing target on swap"),this.#o.updateClient(e),this.#a.updateClient(e),this.#c.updateClient(e),this.#u.updateClient(e),this.#d.updateClient(e),this.#f.updateClient(e),await this.#l.swapFrameTree(e),this.#k()}async#x(e){k(e instanceof ir),e._target()._subtype()==="prerender"&&(this.#l.registerSpeculativeSession(e).catch(I),this.#u.registerSpeculativeSession(e).catch(I))}#k(){const e=new Q(this.#r);e.on(W.Ready,this.#_),e.on(W.Disconnected,()=>{this.#b.reject(new bt("Target closed"))}),e.on("Page.domContentEventFired",()=>{this.emit("domcontentloaded",void 0)}),e.on("Page.loadEventFired",()=>{this.emit("load",void 0)}),e.on("Page.javascriptDialogOpening",this.#O.bind(this)),e.on("Runtime.exceptionThrown",this.#I.bind(this)),e.on("Inspector.targetCrashed",this.#D.bind(this)),e.on("Performance.metrics",this.#R.bind(this)),e.on("Log.entryAdded",this.#M.bind(this)),e.on("Page.fileChooserOpened",this.#A.bind(this))}#C=e=>{const t=e._session()?.id(),r=this.#y.get(t);r&&(this.#y.delete(t),this.emit("workerdestroyed",r))};#_=e=>{if(k(e instanceof ir),this.#l.onAttachedToTarget(e._target()),e._target()._getTargetInfo().type==="worker"){const t=new qa(e,e._target().url(),e._target()._targetId,e._target().type(),this.#F.bind(this),this.#I.bind(this));this.#y.set(e.id(),t),this.emit("workercreated",t)}e.on(W.Ready,this.#_)};async#N(){try{await Promise.all([this.#l.initialize(this.#r),this.#r.send("Performance.enable"),this.#r.send("Log.enable")])}catch(e){if(ct(e)&&Is(e))I(e);else throw e}}async#A(e){const t={stack:[],error:void 0,hasError:!1};try{if(!this.#m.size)return;const r=this.#l.frame(e.frameId);k(r,"This should never happen.");const s=as(t,await r.worlds[Ge].adoptBackendNode(e.backendNodeId),!1),n=new Su(s.move(),e);for(const o of this.#m)o.resolve(n);this.#m.clear()}catch(r){t.error=r,t.hasError=!0}finally{cs(t)}}_client(){return this.#r}isServiceWorkerBypassed(){return this.#v}isDragInterceptionEnabled(){return this.#S}isJavaScriptEnabled(){return this.#u.javascriptEnabled}async waitForFileChooser(e={}){const t=this.#m.size===0,{timeout:r=this._timeoutSettings.timeout()}=e,s=B.create({message:`Waiting for \`FileChooser\` failed: ${r}ms exceeded`,timeout:r});e.signal&&e.signal.addEventListener("abort",()=>{s.reject(e.signal?.reason)},{once:!0}),this.#m.add(s);let n;t&&(n=this.#r.send("Page.setInterceptFileChooserDialog",{enabled:!0}));try{const[o]=await Promise.all([s.valueOrThrow(),n]);return o}catch(o){throw this.#m.delete(s),o}}async setGeolocation(e){return await this.#u.setGeolocation(e)}target(){return this.#i}browser(){return this.#i.browser()}browserContext(){return this.#i.browserContext()}#D(){this.emit("error",new Error("Page crashed!"))}#M(e){const{level:t,text:r,args:s,source:n,url:o,lineNumber:a}=e.entry;s&&s.map(c=>{Oa(this.#r,c)}),n!=="worker"&&this.emit("console",new to(ls(t),r,[],[{url:o,lineNumber:a}]))}mainFrame(){return this.#l.mainFrame()}get keyboard(){return this.#o}get touchscreen(){return this.#c}get coverage(){return this.#f}get tracing(){return this.#d}frames(){return this.#l.frames()}workers(){return Array.from(this.#y.values())}async setRequestInterception(e){return await this.#l.networkManager.setRequestInterception(e)}async setBypassServiceWorker(e){return this.#v=e,await this.#r.send("Network.setBypassServiceWorker",{bypass:e})}async setDragInterception(e){return this.#S=e,await this.#r.send("Input.setInterceptDrags",{enabled:e})}async setOfflineMode(e){return await this.#l.networkManager.setOfflineMode(e)}async emulateNetworkConditions(e){return await this.#l.networkManager.emulateNetworkConditions(e)}setDefaultNavigationTimeout(e){this._timeoutSettings.setDefaultNavigationTimeout(e)}setDefaultTimeout(e){this._timeoutSettings.setDefaultTimeout(e)}getDefaultTimeout(){return this._timeoutSettings.timeout()}async queryObjects(e){k(!e.disposed,"Prototype JSHandle is disposed!"),k(e.id,"Prototype JSHandle must not be referencing primitive value");const t=await this.mainFrame().client.send("Runtime.queryObjects",{prototypeObjectId:e.id});return this.mainFrame().mainRealm().createCdpHandle(t.objects)}async cookies(...e){const t=(await this.#r.send("Network.getCookies",{urls:e.length?e:[this.url()]})).cookies,r=["sourcePort"],s=n=>{for(const o of r)delete n[o];return n};return t.map(s).map(n=>({...n,partitionKey:n.partitionKey?n.partitionKey.topLevelSite:void 0}))}async deleteCookie(...e){const t=this.url();for(const r of e){const s={...r,partitionKey:r.partitionKey?{topLevelSite:r.partitionKey,hasCrossSiteAncestor:!1}:void 0};if(!r.url&&t.startsWith("http")&&(s.url=t),await this.#r.send("Network.deleteCookies",s),t.startsWith("http")&&!s.partitionKey){const n=new URL(t);await this.#r.send("Network.deleteCookies",{...s,partitionKey:{topLevelSite:n.origin.replace(`:${n.port}`,""),hasCrossSiteAncestor:!1}})}}}async setCookie(...e){const t=this.url(),r=t.startsWith("http"),s=e.map(n=>{const o=Object.assign({},n);return!o.url&&r&&(o.url=t),k(o.url!=="about:blank",`Blank page can not have cookie "${o.name}"`),k(!String.prototype.startsWith.call(o.url||"","data:"),`Data URL page can not have cookie "${o.name}"`),o});await this.deleteCookie(...s),s.length&&await this.#r.send("Network.setCookies",{cookies:s.map(n=>({...n,partitionKey:n.partitionKey?{topLevelSite:n.partitionKey,hasCrossSiteAncestor:!1}:void 0}))})}async exposeFunction(e,t){if(this.#h.has(e))throw new Error(`Failed to add page binding with name ${e}: window['${e}'] already exists!`);const r=vh("exposedFun",e);let s;switch(typeof t){case"function":s=new Ci(e,t,r);break;default:s=new Ci(e,t.default,r);break}this.#h.set(e,s);const[{identifier:n}]=await Promise.all([this.#l.evaluateOnNewDocument(r),this.#l.addExposedFunctionBinding(s)]);this.#p.set(e,n)}async removeExposedFunction(e){const t=this.#p.get(e);if(!t)throw new Error(`Function with name "${e}" does not exist`);const r=this.#h.get(e);this.#p.delete(e),this.#h.delete(e),await Promise.all([this.#l.removeScriptToEvaluateOnNewDocument(t),this.#l.removeExposedFunctionBinding(r)])}async authenticate(e){return await this.#l.networkManager.authenticate(e)}async setExtraHTTPHeaders(e){return await this.#l.networkManager.setExtraHTTPHeaders(e)}async setUserAgent(e,t){return await this.#l.networkManager.setUserAgent(e,t)}async metrics(){const e=await this.#r.send("Performance.getMetrics");return this.#T(e.metrics)}#R(e){this.emit("metrics",{title:e.title,metrics:this.#T(e.metrics)})}#T(e){const t={};for(const r of e||[])Qh.has(r.name)&&(t[r.name]=r.value);return t}#I(e){this.emit("pageerror",wh(e.exceptionDetails))}#$(e,t){const r=t.args.map(s=>e.createCdpHandle(s));this.#F(ls(t.type),r,t.stackTrace)}async#P(e,t){let r;try{r=JSON.parse(t.payload)}catch{return}const{type:s,name:n,seq:o,args:a,isTrivial:c}=r;if(s!=="exposedFun")return;const l=e.context;if(!l)return;await this.#h.get(n)?.run(l,o,a,c)}#F(e,t,r){if(!this.listenerCount("console")){t.forEach(a=>a.dispose());return}const s=[];for(const a of t){const c=a.remoteObject();c.objectId?s.push(a.toString()):s.push(jt(c))}const n=[];if(r)for(const a of r.callFrames)n.push({url:a.url,lineNumber:a.lineNumber,columnNumber:a.columnNumber});const o=new to(ls(e),s.join(" "),t,n);this.emit("console",o)}#O(e){const t=Yd(e.type),r=new Fu(this.#r,t,e.message,e.defaultPrompt);this.emit("dialog",r)}async reload(e){const[t]=await Promise.all([this.waitForNavigation({...e,ignoreSameDocumentNavigation:!0}),this.#r.send("Page.reload")]);return t}async createCDPSession(){return await this.target().createCDPSession()}async goBack(e={}){return await this.#L(-1,e)}async goForward(e={}){return await this.#L(1,e)}async#L(e,t){const r=await this.#r.send("Page.getNavigationHistory"),s=r.entries[r.currentIndex+e];return s?(await Promise.all([this.waitForNavigation(t),this.#r.send("Page.navigateToHistoryEntry",{entryId:s.id})]))[0]:null}async bringToFront(){await this.#r.send("Page.bringToFront")}async setJavaScriptEnabled(e){return await this.#u.setJavaScriptEnabled(e)}async setBypassCSP(e){await this.#r.send("Page.setBypassCSP",{enabled:e})}async emulateMediaType(e){return await this.#u.emulateMediaType(e)}async emulateCPUThrottling(e){return await this.#u.emulateCPUThrottling(e)}async emulateMediaFeatures(e){return await this.#u.emulateMediaFeatures(e)}async emulateTimezone(e){return await this.#u.emulateTimezone(e)}async emulateIdleState(e){return await this.#u.emulateIdleState(e)}async emulateVisionDeficiency(e){return await this.#u.emulateVisionDeficiency(e)}async setViewport(e){const t=await this.#u.emulateViewport(e);this.#g=e,t&&await this.reload()}viewport(){return this.#g}async evaluateOnNewDocument(e,...t){const r=_a(e,...t);return await this.#l.evaluateOnNewDocument(r)}async removeScriptToEvaluateOnNewDocument(e){return await this.#l.removeScriptToEvaluateOnNewDocument(e)}async setCacheEnabled(e=!0){await this.#l.networkManager.setCacheEnabled(e)}async _screenshot(e){const t={stack:[],error:void 0,hasError:!1};try{const{fromSurface:r,omitBackground:s,optimizeForSpeed:n,quality:o,clip:a,type:c,captureBeyondViewport:l}=e,d=this.target()._targetManager()instanceof sn,h=as(t,new Li,!0);!d&&s&&(c==="png"||c==="webp")&&(await this.#u.setTransparentBackgroundColor(),h.defer(async()=>{await this.#u.resetDefaultBackgroundColor().catch(I)}));let p=a;if(p&&!l){const b=await this.mainFrame().isolatedRealm().evaluate(()=>{const{height:v,pageLeft:S,pageTop:E,width:V}=window.visualViewport;return{x:S,y:E,height:v,width:V}});p=Xh(p,b)}const{data:y}=await this.#r.send("Page.captureScreenshot",{format:c,...n?{optimizeForSpeed:n}:{},...o!==void 0?{quality:Math.round(o)}:{},...p?{clip:{...p,scale:p.scale??1}}:{},...r?{}:{fromSurface:r},captureBeyondViewport:l});return y}catch(r){t.error=r,t.hasError=!0}finally{const r=cs(t);r&&await r}}async createPDFStream(e={}){const{timeout:t=this._timeoutSettings.timeout()}=e,{landscape:r,displayHeaderFooter:s,headerTemplate:n,footerTemplate:o,printBackground:a,scale:c,width:l,height:d,margin:h,pageRanges:p,preferCSSPageSize:y,omitBackground:b,tagged:v,outline:S,waitForFonts:E}=tu(e);b&&await this.#u.setTransparentBackgroundColor(),E&&await Ie(j(this.mainFrame().isolatedRealm().evaluate(()=>document.fonts.ready)).pipe(Qe(Xe(t))));const V=this.#r.send("Page.printToPDF",{transferMode:"ReturnAsStream",landscape:r,displayHeaderFooter:s,headerTemplate:n,footerTemplate:o,printBackground:a,scale:c,paperWidth:l,paperHeight:d,marginTop:h.top,marginBottom:h.bottom,marginLeft:h.left,marginRight:h.right,pageRanges:p,preferCSSPageSize:y,generateTaggedPDF:v,generateDocumentOutline:S}),be=await Ie(j(V).pipe(Qe(Xe(t))));return b&&await this.#u.resetDefaultBackgroundColor(),k(be.stream,"`stream` is missing from `Page.printToPDF"),await Ia(this.#r,be.stream)}async pdf(e={}){const{path:t=void 0}=e,r=await this.createPDFStream(e),s=await Ra(r,t);return k(s,"Could not create typed array"),s}async close(e={runBeforeUnload:void 0}){const t={stack:[],error:void 0,hasError:!1};try{const r=as(t,await this.browserContext().waitForScreenshotOperations(),!1),s=this.#r.connection();k(s,"Protocol error: Connection closed. Most likely the page has been closed."),!!e.runBeforeUnload?await this.#r.send("Page.close"):(await s.send("Target.closeTarget",{targetId:this.#i._targetId}),await this.#n._isClosedDeferred.valueOrThrow())}catch(r){t.error=r,t.hasError=!0}finally{cs(t)}}isClosed(){return this.#e}get mouse(){return this.#a}async waitForDevicePrompt(e={}){return await this.mainFrame().waitForDevicePrompt(e)}}const Qh=new Set(["Timestamp","Documents","Frames","JSEventListeners","Nodes","LayoutCount","RecalcStyleCount","LayoutDuration","RecalcStyleDuration","ScriptDuration","TaskDuration","JSHeapUsedSize","JSHeapTotalSize"]);function Xh(i,e){const t=Math.max(i.x,e.x),r=Math.max(i.y,e.y);return{x:t,y:r,width:Math.max(Math.min(i.x+i.width,e.x+e.width)-t,0),height:Math.max(Math.min(i.y+i.height,e.y+e.height)-r,0)}}/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */var Oe;(function(i){i.SUCCESS="success",i.ABORTED="aborted"})(Oe||(Oe={}));class Bi extends au{#e;#t;#r;#i;#s;#n=new Set;_initializedDeferred=B.create();_isClosedDeferred=B.create();_targetId;constructor(e,t,r,s,n){super(),this.#t=t,this.#i=s,this.#r=e,this.#e=r,this._targetId=e.targetId,this.#s=n,this.#t&&this.#t instanceof ir&&this.#t._setTarget(this)}async asPage(){const e=this._session();return e?await Br._create(e,this,null):await this.createCDPSession().then(t=>Br._create(t,this,null))}_subtype(){return this.#r.subtype}_session(){return this.#t}_addChildTarget(e){this.#n.add(e)}_removeChildTarget(e){this.#n.delete(e)}_childTargets(){return this.#n}_sessionFactory(){if(!this.#s)throw new Error("sessionFactory is not initialized");return this.#s}createCDPSession(){if(!this.#s)throw new Error("sessionFactory is not initialized");return this.#s(!1).then(e=>(e._setTarget(this),e))}url(){return this.#r.url}type(){switch(this.#r.type){case"page":return Ne.PAGE;case"background_page":return Ne.BACKGROUND_PAGE;case"service_worker":return Ne.SERVICE_WORKER;case"shared_worker":return Ne.SHARED_WORKER;case"browser":return Ne.BROWSER;case"webview":return Ne.WEBVIEW;case"tab":return Ne.TAB;default:return Ne.OTHER}}_targetManager(){if(!this.#i)throw new Error("targetManager is not initialized");return this.#i}_getTargetInfo(){return this.#r}browser(){if(!this.#e)throw new Error("browserContext is not initialized");return this.#e.browser()}browserContext(){if(!this.#e)throw new Error("browserContext is not initialized");return this.#e}opener(){const{openerId:e}=this.#r;if(e)return this.browser().targets().find(t=>t._targetId===e)}_targetInfoChanged(e){this.#r=e,this._checkIfInitialized()}_initialize(){this._initializedDeferred.resolve(Oe.SUCCESS)}_isTargetExposed(){return this.type()!==Ne.TAB&&!this._subtype()}_checkIfInitialized(){this._initializedDeferred.resolved()||this._initializedDeferred.resolve(Oe.SUCCESS)}}class qi extends Bi{#e;pagePromise;constructor(e,t,r,s,n,o){super(e,t,r,s,n),this.#e=o??void 0}_initialize(){this._initializedDeferred.valueOrThrow().then(async e=>{if(e===Oe.ABORTED)return;const t=this.opener();if(!(t instanceof qi))return;if(!t||!t.pagePromise||this.type()!=="page")return!0;const r=await t.pagePromise;if(!r.listenerCount("popup"))return!0;const s=await this.page();return r.emit("popup",s),!0}).catch(I),this._checkIfInitialized()}async page(){if(!this.pagePromise){const e=this._session();this.pagePromise=(e?Promise.resolve(e):this._sessionFactory()(!1)).then(t=>Br._create(t,this,this.#e??null))}return await this.pagePromise??null}_checkIfInitialized(){this._initializedDeferred.resolved()||this._getTargetInfo().url!==""&&this._initializedDeferred.resolve(Oe.SUCCESS)}}class Yh extends qi{}class Zh extends Bi{#e;async worker(){if(!this.#e){const e=this._session();this.#e=(e?Promise.resolve(e):this._sessionFactory()(!1)).then(t=>new qa(t,this._getTargetInfo().url,this._targetId,this.type(),()=>{},()=>{}))}return await this.#e}}class ep extends Bi{}/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */function tp(i,e){return!!i._subtype()&&!e.subtype}class rp extends Q{#e;#t=new Map;#r=new Map;#i=new Map;#s=new Set;#n;#o;#a=new WeakMap;#c=new WeakMap;#l=B.create();#u=new Set;#d=!0;#h=[{}];constructor(e,t,r,s=!0){super(),this.#e=e,this.#n=r,this.#o=t,this.#d=s,this.#e.on("Target.targetCreated",this.#m),this.#e.on("Target.targetDestroyed",this.#b),this.#e.on("Target.targetInfoChanged",this.#v),this.#e.on(W.SessionDetached,this.#y),this.#f(this.#e)}#p=()=>{if(this.#d)for(const[e,t]of this.#t.entries()){const r=new Bi(t,void 0,void 0,this,void 0),s=t.type==="page"||t.type==="iframe",n=t.url.startsWith("chrome-extension://");(!this.#n||this.#n(r))&&s&&!n&&this.#u.add(e)}};async initialize(){await this.#e.send("Target.setDiscoverTargets",{discover:!0,filter:this.#h}),this.#p(),await this.#e.send("Target.setAutoAttach",{waitForDebuggerOnStart:!0,flatten:!0,autoAttach:!0,filter:[{type:"page",exclude:!0},...this.#h]}),this.#w(),await this.#l.valueOrThrow()}getChildTargets(e){return e._childTargets()}dispose(){this.#e.off("Target.targetCreated",this.#m),this.#e.off("Target.targetDestroyed",this.#b),this.#e.off("Target.targetInfoChanged",this.#v),this.#e.off(W.SessionDetached,this.#y),this.#g(this.#e)}getAvailableTargets(){return this.#r}#f(e){const t=s=>{this.#S(e,s)};k(!this.#a.has(e)),this.#a.set(e,t),e.on("Target.attachedToTarget",t);const r=s=>this.#E(e,s);k(!this.#c.has(e)),this.#c.set(e,r),e.on("Target.detachedFromTarget",r)}#g(e){const t=this.#a.get(e);t&&(e.off("Target.attachedToTarget",t),this.#a.delete(e)),this.#c.has(e)&&(e.off("Target.detachedFromTarget",this.#c.get(e)),this.#c.delete(e))}#y=e=>{this.#g(e)};#m=async e=>{if(this.#t.set(e.targetInfo.targetId,e.targetInfo),this.emit("targetDiscovered",e.targetInfo),e.targetInfo.type==="browser"&&e.targetInfo.attached){if(this.#r.has(e.targetInfo.targetId))return;const t=this.#o(e.targetInfo,void 0);t._initialize(),this.#r.set(e.targetInfo.targetId,t)}};#b=e=>{const t=this.#t.get(e.targetId);if(this.#t.delete(e.targetId),this.#w(e.targetId),t?.type==="service_worker"&&this.#r.has(e.targetId)){const r=this.#r.get(e.targetId);r&&(this.emit("targetGone",r),this.#r.delete(e.targetId))}};#v=e=>{if(this.#t.set(e.targetInfo.targetId,e.targetInfo),this.#s.has(e.targetInfo.targetId)||!this.#r.has(e.targetInfo.targetId)||!e.targetInfo.attached)return;const t=this.#r.get(e.targetInfo.targetId);if(!t)return;const r=t.url(),s=t._initializedDeferred.value()===Oe.SUCCESS;if(tp(t,e.targetInfo)){const n=t?._session();k(n,"Target that is being activated is missing a CDPSession."),n.parentSession()?.emit(W.Swapped,n)}t._targetInfoChanged(e.targetInfo),s&&r!==t.url()&&this.emit("targetChanged",{target:t,wasInitialized:s,previousURL:r})};#S=async(e,t)=>{const r=t.targetInfo,s=this.#e.session(t.sessionId);if(!s)throw new Error(`Session ${t.sessionId} was not created.`);const n=async()=>{await s.send("Runtime.runIfWaitingForDebugger").catch(I),await e.send("Target.detachFromTarget",{sessionId:s.id()}).catch(I)};if(!this.#e.isAutoAttached(r.targetId))return;if(r.type==="service_worker"){if(this.#w(r.targetId),await n(),this.#r.has(r.targetId))return;const l=this.#o(r);l._initialize(),this.#r.set(r.targetId,l),this.emit("targetAvailable",l);return}const o=this.#r.has(r.targetId),a=o?this.#r.get(r.targetId):this.#o(r,s,e instanceof ai?e:void 0);if(this.#n&&!this.#n(a)){this.#s.add(r.targetId),this.#w(r.targetId),await n();return}this.#f(s),o?(s._setTarget(a),this.#i.set(s.id(),this.#r.get(r.targetId))):(a._initialize(),this.#r.set(r.targetId,a),this.#i.set(s.id(),a)),(e instanceof ai?e._target():null)?._addChildTarget(a),e.emit(W.Ready,s),this.#u.delete(a._targetId),o||this.emit("targetAvailable",a),this.#w(),await Promise.all([s.send("Target.setAutoAttach",{waitForDebuggerOnStart:!0,flatten:!0,autoAttach:!0,filter:this.#h}),s.send("Runtime.runIfWaitingForDebugger")]).catch(I)};#w(e){e!==void 0&&this.#u.delete(e),this.#u.size===0&&this.#l.resolve()}#E=(e,t)=>{const r=this.#i.get(t.sessionId);this.#i.delete(t.sessionId),r&&(e instanceof ai&&e._target()._removeChildTarget(r),this.#r.delete(r._targetId),this.emit("targetGone",r))}}/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */class an extends iu{protocol="cdp";static async _create(e,t,r,s,n,o,a,c,l,d=!0){const h=new an(e,t,r,n,o,a,c,l,d);return s&&await t.send("Security.setIgnoreCertificateErrors",{ignore:!0}),await h._attach(),h}#e;#t;#r;#i;#s;#n;#o;#a=new Map;#c;constructor(e,t,r,s,n,o,a,c,l=!0){super(),e=e||"chrome",this.#e=s,this.#t=n,this.#r=t,this.#i=o||(()=>{}),this.#s=a||(()=>!0),this.#u(c),e==="firefox"?this.#c=new sn(t,this.#d,this.#s):this.#c=new rp(t,this.#d,this.#s,l),this.#o=new rs(this.#r,this);for(const d of r)this.#a.set(d,new rs(this.#r,this,d))}#l=()=>{this.emit("disconnected",void 0)};async _attach(){this.#r.on(W.Disconnected,this.#l),this.#c.on("targetAvailable",this.#h),this.#c.on("targetGone",this.#p),this.#c.on("targetChanged",this.#f),this.#c.on("targetDiscovered",this.#g),await this.#c.initialize()}_detach(){this.#r.off(W.Disconnected,this.#l),this.#c.off("targetAvailable",this.#h),this.#c.off("targetGone",this.#p),this.#c.off("targetChanged",this.#f),this.#c.off("targetDiscovered",this.#g)}process(){return this.#t??null}_targetManager(){return this.#c}#u(e){this.#n=e||(t=>t.type()==="page"||t.type()==="background_page"||t.type()==="webview")}_getIsPageTargetCallback(){return this.#n}async createBrowserContext(e={}){const{proxyServer:t,proxyBypassList:r}=e,{browserContextId:s}=await this.#r.send("Target.createBrowserContext",{proxyServer:t,proxyBypassList:r&&r.join(",")}),n=new rs(this.#r,this,s);return this.#a.set(s,n),n}browserContexts(){return[this.#o,...Array.from(this.#a.values())]}defaultBrowserContext(){return this.#o}async _disposeContext(e){e&&(await this.#r.send("Target.disposeBrowserContext",{browserContextId:e}),this.#a.delete(e))}#d=(e,t)=>{const{browserContextId:r}=e,s=r&&this.#a.has(r)?this.#a.get(r):this.#o;if(!s)throw new Error("Missing browser context");const n=a=>this.#r._createSession(e,a),o=new ep(e,t,s,this.#c,n);return e.url?.startsWith("devtools://")?new Yh(e,t,s,this.#c,n,this.#e??null):this.#n(o)?new qi(e,t,s,this.#c,n,this.#e??null):e.type==="service_worker"||e.type==="shared_worker"?new Zh(e,t,s,this.#c,n):o};#h=async e=>{e._isTargetExposed()&&await e._initializedDeferred.valueOrThrow()===Oe.SUCCESS&&(this.emit("targetcreated",e),e.browserContext().emit("targetcreated",e))};#p=async e=>{e._initializedDeferred.resolve(Oe.ABORTED),e._isClosedDeferred.resolve(),e._isTargetExposed()&&await e._initializedDeferred.valueOrThrow()===Oe.SUCCESS&&(this.emit("targetdestroyed",e),e.browserContext().emit("targetdestroyed",e))};#f=({target:e})=>{this.emit("targetchanged",e),e.browserContext().emit("targetchanged",e)};#g=e=>{this.emit("targetdiscovered",e)};wsEndpoint(){return this.#r.url()}async newPage(){return await this.#o.newPage()}async _createPageInContext(e){const{targetId:t}=await this.#r.send("Target.createTarget",{url:"about:blank",browserContextId:e||void 0}),r=await this.waitForTarget(o=>o._targetId===t);if(!r)throw new Error(`Missing target for page (id = ${t})`);if(!(await r._initializedDeferred.valueOrThrow()===Oe.SUCCESS))throw new Error(`Failed to create target for page (id = ${t})`);const n=await r.page();if(!n)throw new Error(`Failed to create a page for context (id = ${e})`);return n}targets(){return Array.from(this.#c.getAvailableTargets().values()).filter(e=>e._isTargetExposed()&&e._initializedDeferred.value()===Oe.SUCCESS)}target(){const e=this.targets().find(t=>t.type()==="browser");if(!e)throw new Error("Browser target is not found");return e}async version(){return(await this.#y()).product}async userAgent(){return(await this.#y()).userAgent}async close(){await this.#i.call(null),await this.disconnect()}disconnect(){return this.#c.dispose(),this.#r.dispose(),this._detach(),Promise.resolve()}get connected(){return!this.#r._closed}#y(){return this.#r.send("Browser.getVersion")}get debugInfo(){return{pendingProtocolErrors:this.#r.getPendingProtocolErrors()}}}class ip{#e;constructor(e){this.#e=e}send(e){this.#e.sendRawMessage(e)}close(){this.#e.disconnect()}set onmessage(e){this.#e.setOnMessage(t=>{const r=t;if(r.sessionId)return e(JSON.stringify({...r,sessionId:r.sessionId===this.#e.getSessionId()?void 0:r.sessionId}))})}set onclose(e){const t=this.#e.getOnDisconnect();this.#e.setOnDisconnect(r=>{t&&t(r),e&&e()})}}class sp extends Ru{async onMessage(e){const t=JSON.parse(e);t.sessionId&&!this._sessions.has(t.sessionId)||super.onMessage(e)}}class np{static async connectPuppeteerToConnectionViaTab(e){const{connection:t,rootTargetId:r,isPageTargetCallback:s}=e,n=new ip(t),o=new sp("",n),a=an._create("chrome",o,[],!1,void 0,void 0,void 0,void 0,d=>s(d._getTargetInfo()),!1),[,c]=await Promise.all([o._createSession({targetId:r},!0),a]);return await c.waitForTarget(d=>d.type()==="page"),{page:(await c.pages())[0],browser:c,puppeteerConnection:o}}}const op={normal:0,slow:500,very_slow:1e3,extremely_slow:2e3},Ns=5e3;function ap(i){return Co(i.url,"devtools:")||i.type==="page"||i.type==="background_page"||i.type==="webview"}class pr extends js{#e;#t;userFlow;speed;timeout;breakpointIndexes;steppingOver=!1;aborted=!1;abortPromise;#r;#i;constructor(e,{speed:t,breakpointIndexes:r=new Set}){super(),this.userFlow=e,this.speed=t,this.timeout=e.timeout||Ns,this.breakpointIndexes=r,this.#e=new Promise(s=>{this.#t=s}),this.abortPromise=new Promise(s=>{this.#r=s})}#s(){this.#t?.(),this.#e=new Promise(e=>{this.#t=e})}static async connectPuppeteer(){const e=xt.instance().rootTarget();if(!e)throw new Error("Could not find the root target");const t=xt.instance().primaryPageTarget();if(!t)throw new Error("Could not find the primary page target");const r=t.model(bs);if(!r)throw new Error("Could not get childTargetManager");const s=t.model(Xt);if(!s)throw new Error("Could not get resource tree model");if(!s.mainFrame)throw new Error("Could not find main frame");const o=e.model(bs);if(!o)throw new Error("Could not find the child target manager class for the root target");const c=(await o.createParallelConnection(()=>{})).connection,l=await r.getParentTargetId(),d=await o.getParentTargetId(),{page:h,browser:p,puppeteerConnection:y}=await np.connectPuppeteerToConnectionViaTab({connection:c,rootTargetId:d,isPageTargetCallback:ap});if(!h)throw new Error("could not find main page!");return p.on("targetdiscovered",b=>{b.type==="page"&&b.targetId!==l&&b.openerId===l&&y._createSession(b,!0)}),{page:h,browser:p}}static async disconnectPuppeteer(e){try{const t=await e.pages();for(const r of t){const s=r._client();await s.send("Network.disable"),await s.send("Page.disable"),await s.send("Log.disable"),await s.send("Performance.disable"),await s.send("Runtime.disable"),await s.send("Emulation.clearDeviceMetricsOverride"),await s.send("Emulation.setAutomationOverride",{enabled:!1});for(const n of r.frames()){const o=n.client;await o.send("Network.disable"),await o.send("Page.disable"),await o.send("Log.disable"),await o.send("Performance.disable"),await o.send("Runtime.disable"),await o.send("Emulation.setAutomationOverride",{enabled:!1})}}await e.disconnect()}catch(t){console.error("Error disconnecting Puppeteer",t.message)}}async stop(){await Promise.race([this.#e,this.abortPromise])}abort(){this.aborted=!0,this.#r?.(),this.#i?.abort()}disposeForTesting(){this.#t?.(),this.#r?.()}continue(){this.steppingOver=!1,this.#s()}stepOver(){this.steppingOver=!0,this.#s()}updateBreakpointIndexes(e){this.breakpointIndexes=e}async play(){const{page:e,browser:t}=await pr.connectPuppeteer();this.aborted=!1;const r=this;class s extends Qo{#n;constructor(c,l,{timeout:d,speed:h}){super(c,l,{timeout:d}),this.#n=h}async beforeEachStep(c,l){let d=()=>{};const h=new Promise(v=>{d=v});r.dispatchEventToListeners("Step",{step:c,resolve:d}),await h;const p=l.steps.indexOf(c),y=r.steppingOver||r.breakpointIndexes.has(p),b=c.type!=="setViewport"&&c.type!=="navigate"&&!r.aborted;y?(r.dispatchEventToListeners("Stop"),await r.stop(),r.dispatchEventToListeners("Continue")):b&&await Promise.race([new Promise(v=>setTimeout(v,op[this.#n])),r.abortPromise])}async runStep(c,l){Co(e?.url(),"devtools:")&&(c.type==="setViewport"||c.type==="navigate")||(await this.page.bringToFront(),await super.runStep(c,l))}}const n=new s(t,e,{timeout:this.timeout,speed:this.speed});this.#i=await Nl(this.userFlow,n);let o;try{await this.#i.run()}catch(a){o=a,console.error("Replay error",a.message)}finally{await pr.disconnectPuppeteer(t)}this.aborted?this.dispatchEventToListeners("Abort"):o?this.dispatchEventToListeners("Error",o):this.dispatchEventToListeners("Done")}}class cp{#e=new Pr;#t=0;#r;#i;#s;constructor(e,t){this.#i=e,this.#s=t}async acquire(){return await this.#e.run(async()=>{this.#t===0&&(this.#r=await this.#i()),++this.#t}),[this.#r,this.#n.bind(this,{released:!1})]}async run(e){const[t,r]=await this.acquire();try{return await e(t)}finally{await r()}}async#n(e){if(e.released)throw new Error("Attempted to release object multiple times.");try{e.released=!0,await this.#e.run(async()=>{this.#t===1&&(await this.#s(this.#r),this.#r=void 0),--this.#t})}catch(t){throw e.released=!1,t}}}const gi=!1,St="devtools_recorder";class Ha{static#e;static async get(){return this.#e||(this.#e=(await fetch(new URL("/assets/injected.generated-RV-m1fJ6.js",import.meta.url))).text()),this.#e}}function lp(i){return{type:w.SetViewport,width:i.clientWidth,height:i.clientHeight,deviceScaleFactor:1,isMobile:!1,hasTouch:!1,isLandscape:!1}}function Ua(i){return{type:w.EmulateNetworkConditions,...i}}function dp(i,e){return"selectors"in i&&"selectors"in e?JSON.stringify(i.selectors)===JSON.stringify(e.selectors):!("selectors"in i)&&!("selectors"in e)}const up=1,hp=3e4,go=gl,pp=Bo;function fp(i){return xt.instance().primaryPageTarget()===i||i.id()==="main"?"main":i.inspectedURL()}function Va(i,e){const t=[];for(;e;){const r=e.sameTargetParentFrame();if(!r)break;const n=r.childFrames.indexOf(e);t.unshift(n),e=r}return{target:fp(i),frame:t}}async function Ti(i,e,t){const s=e.model(Lt).executionContexts(),n=e.model(Xt);for(const o of n.frames()){if(!s.find(l=>l.frameId===o.id))continue;const{executionContextId:c}=await e.pageAgent().invoke_createIsolatedWorld({frameId:o.id,worldName:i});await e.runtimeAgent().invoke_evaluate({expression:t,includeCommandLineAPI:!0,contextId:c})}}function gp(i,e){for(const t of i){const r=t.model(Lt);if(r){for(const s of r.executionContexts())if(s.id===e)return t}}}function mp(i,e){for(const t of i){const r=t.model(Lt);if(r){for(const s of r.executionContexts())if(s.id===e&&s.frameId!==void 0)return s.frameId}}}const yp=hc,wp=new Set(["typed","address_bar","auto_bookmark","auto_subframe","generated","auto_toplevel","reload","keyword","keyword_generated"]),vp=i=>{const e=[];for(const t of i)for(const r of t){const s={meta:!1,ctrl:!1,shift:!1,alt:!1,keyCode:-1},{keyCode:n,modifiers:o}=xo.keyCodeAndModifiersFromKey(r);s.keyCode=n;const a=pc;s.ctrl=!!(o&a.Ctrl),s.meta=!!(o&a.Meta),s.shift=!!(o&a.Shift),s.shift=!!(o&a.Alt),s.keyCode!==-1&&e.push(s)}return e},bp=async(i,e,t)=>{await Promise.all(e.map(r=>Ti(i,r,t)))},ei=Object.freeze({addStep:"addStep",stopShortcut:"stopShortcut"});class cn extends js{#e;#t;#r;#i;#s;#n=new Map;#o=new Map;#a=new Map;#c=new Map;#l=new Map;#u=new Map;#d=new Pr;#h;#p=new Map;#f=!1;#g=[];constructor(e,t){super(),this.#e=e,this.#t=e.pageAgent(),this.#r=e.targetAgent(),this.#i=dc.instance();const r=e.model(Xt);if(!r)throw new Error("ResourceTreeModel is missing for the target: "+e.id());this.#s=r,this.#e=e,this.#h={title:t.title,selectorAttribute:t.selectorAttribute,steps:[]},this.#g=t.selectorTypesToRecord}cloneUserFlow(){return structuredClone(this.#h)}overwriteUserFlow(e){this.#h=structuredClone(e)}async start(){if(this.#f)throw new Error("The session has started");this.#f=!0,this.#i.addEventListener("ConditionsChanged",this.#b,this),await this.#y(),await this.#t.invoke_bringToFront(),await this.#T(this.#e)}async stop(){await this.#w(),this.#d.acquire(),await Promise.all([...this.#n.values()].map(this.#I)),this.#i.removeEventListener("ConditionsChanged",this.#b,this)}async#y(){const e=this.#s.mainFrame;if(!e)throw new Error("Could not find mainFrame.");this.#i.networkConditions()!==Pt&&this.#b();const{cssLayoutViewport:t}=await this.#e.pageAgent().invoke_getLayoutMetrics();this.#k(lp(t));const r=await this.#s.navigationHistory();if(r){const s=r.entries[r.currentIndex];this.#o.set(this.#e.id(),s.id),this.#a.set(this.#e.id(),r.entries.map(n=>n.id)),this.#h.steps.push({type:w.Navigate,url:s.url,assertedEvents:[{type:Ee.Navigation,url:s.url,title:s.title}]})}else this.#h.steps.push({type:w.Navigate,url:e.url,assertedEvents:[{type:Ee.Navigation,url:e.url,title:await this.#m(this.#e)}]});this.#w()}async#m(e){return(await e.runtimeAgent().invoke_evaluate({expression:"document.title"})).result?.value||""}#b(){const e=this.#i.networkConditions();this.#k(Ua(e))}#v;#S=[];#w(){return this.#v&&clearTimeout(this.#v),this.#v=setTimeout(()=>{this.dispatchEventToListeners("recordingupdated",structuredClone(this.#h)),this.#v=void 0;for(const e of this.#S)e();this.#S.length=0},100),new Promise(e=>{this.#S.push(e)})}get#E(){return this.#h.steps.slice(-1)[0]}#x=new Set;#k(e){switch(e.type){case"doubleClick":{for(let t=this.#h.steps.length-1;t>0;t--){const r=this.#h.steps[t];if(r.type==="click"){e.selectors=r.selectors,this.#h.steps.splice(t,1);break}}break}case"change":{const t=this.#E;if(!t)break;switch(t.type){case"change":if(!dp(e,t))break;this.#h.steps[this.#h.steps.length-1]=e,this.#w();return;case"keyDown":this.#x.add(t.key),this.#h.steps.pop(),this.#k(e);return}break}case"keyDown":{if(this.#x.has(e.key))return;break}case"keyUp":{if(this.#x.has(e.key)){this.#x.delete(e.key);return}break}}this.#h.steps.push(e),this.#w()}#C(e,t){const r=this.#h.steps[this.#h.steps.length-1];if(r&&!r.assertedEvents?.find(s=>s.type===Ee.Navigation)){const s=e.target||"main",n=(e.frame||[]).join(","),o=r.target||"main",a=(("frame"in r?r.frame:[])||[]).join(",");s===o&&n===a&&(r.assertedEvents=[{type:Ee.Navigation}],this.#p.set(t.id(),r),this.#w())}}#_(e,t){const r=this.#p.get(e.id());if(!r)return;const s=r;if(!s.assertedEvents)return;const n=s.assertedEvents.find(o=>o.type===Ee.Navigation);!n||n.url||(n.url=t.url,n.title=t.title,this.#w())}#N(e){const t=Number(e.data.payload);for(let r=0;r<t-1;r++)this.#h.steps.pop();this.dispatchEventToListeners("recordingstopped",structuredClone(this.#h))}#A(e,t){switch(t.data.name){case ei.stopShortcut:this.#N(t);return;case ei.addStep:this.#D(e,t);return;default:return}}#D(e,t){const r=t.data.executionContextId;let s;const n=e.model(Lt);if(n){for(const d of n.executionContexts())if(d.id===r){s=d.frameId;break}}if(!s)throw new Error("No execution context found for the binding call + "+JSON.stringify(t.data));const o=JSON.parse(t.data.payload),c=e.model(Xt).frameForId(s);if(!c)throw new Error("Could not find frame.");const l=Va(e,c);if(o.type==="beforeUnload"){this.#C(l,e);return}switch(o.type){case"change":{this.#k({type:"change",value:o.value,selectors:o.selectors,frame:l.frame.length?l.frame:void 0,target:l.target});break}case"doubleClick":{this.#k({type:"doubleClick",target:l.target,selectors:o.selectors,offsetY:o.offsetY,offsetX:o.offsetX,frame:l.frame.length?l.frame:void 0,deviceType:o.deviceType,button:o.button});break}case"click":{this.#k({type:"click",target:l.target,selectors:o.selectors,offsetY:o.offsetY,offsetX:o.offsetX,frame:l.frame.length?l.frame:void 0,duration:o.duration,deviceType:o.deviceType,button:o.button});break}case"keyUp":{this.#k({type:"keyUp",key:o.key,frame:l.frame.length?l.frame:void 0,target:l.target});break}case"keyDown":{this.#k({type:"keyDown",frame:l.frame.length?l.frame:void 0,target:l.target,key:o.key});break}default:throw new Error("Unhandled client event")}}#M(){const e=Bs.instance().shortcutsForAction("chrome-recorder.start-recording").map(t=>t.descriptors.map(r=>r.key));return vp(e)}static get#R(){try{return ot.instance().settingForTest("untrusted-recorder-events"),!0}catch{}return!1}#T=async e=>{if(e.type()!==To.FRAME)return;this.#n.set(e.id(),e);const t=e.model(uc);Yt(t),await t.resumeModel(),await this.#$(e),await this.#F(e);const r=e.model(bs);Yt(r),this.#u.set(e,[r.addEventListener("TargetCreated",this.#L.bind(this,e)),r.addEventListener("TargetDestroyed",this.#H.bind(this,e)),r.addEventListener("TargetInfoChanged",this.#U.bind(this,e))]),await Promise.all(r.childTargets().map(this.#T))};#I=async e=>{const t=this.#u.get(e);t&&In(t),await this.#O(e),await this.#P(e)};async#$(e){const t=e.model(Lt);Yt(t),this.#l.set(e,[t.addEventListener(Ss.BindingCalled,this.#A.bind(this,e))]),await Promise.all(Object.values(ei).map(r=>t.addBinding({name:r,executionContextName:St})))}async#P(e){await Promise.all(Object.values(ei).map(r=>e.runtimeAgent().invoke_removeBinding({name:r})));const t=this.#l.get(e);t&&In(t)}async#F(e){const r=`
      ${await Ha.get()};DevToolsRecorder.startRecording({getAccessibleName, getAccessibleRole}, {
        debug: ${gi},
        allowUntrustedEvents: ${cn.#R},
        selectorTypesToRecord: ${JSON.stringify(this.#g)},
        selectorAttribute: ${this.#h.selectorAttribute?yp(this.#h.selectorAttribute):void 0},
        stopShortcuts: ${JSON.stringify(this.#M())},
      });
    `,[{identifier:s}]=await Promise.all([e.pageAgent().invoke_addScriptToEvaluateOnNewDocument({source:r,worldName:St,includeCommandLineAPI:!0}),Ti(St,e,r)]);this.#c.set(e.id(),s)}async#O(e){const t=this.#c.get(e.id());t&&(await e.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({identifier:t}),await bp(St,[...this.#n.values()],"DevToolsRecorder.stopRecording()"))}#L(e,t){this.#j({type:"targetCreated",event:t,target:e})}#H(e,t){const r=this.#n.get(t.data);r&&this.#j({type:"targetClosed",event:t,target:r})}#U(e,t){const r=this.#n.get(t.data.targetId)||e;this.#j({type:"targetInfoChanged",event:t,target:r})}#j(e){return this.#d.run(async()=>{try{switch(e.type){case"targetClosed":await this.#K(e);break;case"targetCreated":await this.#V(e);break;case"targetInfoChanged":await this.#q(e);break}}catch(t){console.error("Error happened while processing recording events: ",t.message,t.stack)}})}async#V(e){if(e.event.data.type!=="page"&&e.event.data.type!=="iframe")return;await this.#r.invoke_attachToTarget({targetId:e.event.data.targetId,flatten:!0});const t=xt.instance().targets().find(r=>r.id()===e.event.data.targetId);if(!t)throw new Error("Could not find target.");await this.#T(t),window.dispatchEvent(new Event("recorderAttachedToTarget"))}async#K(e){const t=this.#p.get(e.target.id());t&&(delete t.assertedEvents,this.#p.delete(e.target.id()))}async#W(e,t){const r=await e.navigationHistory();if(!r)return!1;const s=r.entries[r.currentIndex];if(this.#o.get(t.id())===s.id)return!0;this.#o.set(t.id(),s.id);const o=this.#a.get(t.id())||[];if(this.#a.set(t.id(),r.entries.map(a=>a.id)),wp.has(s.transitionType)||o.includes(s.id)){const a=this.#p.get(t.id());a&&(delete a.assertedEvents,this.#p.delete(t.id())),this.#k({type:w.Navigate,url:s.url,assertedEvents:[{type:Ee.Navigation,url:s.url,title:s.title}]})}else this.#_(t,{type:Ee.Navigation,url:s.url,title:s.title});return!0}async#q(e){if(e.event.data.type!=="page"&&e.event.data.type!=="iframe")return;const t=e.target,r=t.model(Xt);if(!r)throw new Error("ResourceTreeModel is missing in handleNavigation");if(e.event.data.type==="iframe")this.#_(t,{type:Ee.Navigation,url:e.event.data.url,title:await this.#m(t)});else if(e.event.data.type==="page"){if(await this.#W(r,t))return;await this.#z(r,500),this.#_(t,{type:Ee.Navigation,url:e.event.data.url,title:await this.#m(t)})}}async#z(e,t){let r=()=>Promise.resolve();const s=new Promise(o=>{r=o}),n=()=>{e.removeEventListener(zi.DOMContentLoaded,n),r()};e.addEventListener(zi.DOMContentLoaded,n),await Promise.any([s,new Promise(o=>setTimeout(()=>{e.removeEventListener(zi.DOMContentLoaded,n),o()},t))])}}let ds=null;class mo{next(){return crypto.randomUUID()}}class ln{#e;#t=new Pr;#r=new mo;constructor(){this.#e=ot.instance().createSetting("recorder-recordings-ng",[])}clearForTest(){this.#e.set([]),this.#r=new mo}setIdGeneratorForTest(e){this.#r=e}async saveRecording(e){const t=await this.#t.acquire();try{const r=await this.#e.forceGet(),n={storageName:this.#r.next(),flow:e};return r.push(n),this.#e.set(r),n}finally{t()}}async updateRecording(e,t){const r=await this.#t.acquire();try{const s=await this.#e.forceGet(),n=s.find(o=>o.storageName===e);if(!n)throw new Error("No recording is found during updateRecording");return n.flow=t,this.#e.set(s),n}finally{r()}}async deleteRecording(e){const t=await this.#t.acquire();try{const r=await this.#e.forceGet();this.#e.set(r.filter(s=>s.storageName!==e))}finally{t()}}getRecording(e){return this.#e.get().find(r=>r.storageName===e)}getRecordings(){return this.#e.get()}static instance(){return ds||(ds=new ln),ds}}let us=null;const yo=50*1024*1024;class Rr{#e;#t;#r;constructor(e=yo){this.#e=ot.instance().createSetting("recorder-screenshots",[]),this.#t=this.#s(),this.#r=e}clear(){this.#e.set([]),this.#t=new Map}getScreenshotForSection(e,t){const r=this.#t.get(this.#i(e,t));return r?(this.#n(r),r.data):null}storeScreenshotForSection(e,t,r){const s={recordingName:e,index:t,data:r};this.#t.set(this.#i(e,t),s),this.#n(s)}deleteScreenshotsForRecording(e){for(const[t,r]of this.#t)r.recordingName===e&&this.#t.delete(t);this.#n()}#i(e,t){return`${e}:${t}`}#s(){const e=new Map,t=this.#e.get();for(const r of t)e.set(this.#i(r.recordingName,r.index),r);return e}#n(e){if(e){const s=this.#i(e.recordingName,e.index);this.#t.delete(s),this.#t.set(s,e)}const t=[];let r=0;for(const[s,n]of Array.from(this.#t.entries()).reverse())r<this.#r?(r+=n.data.length,t.push(n)):this.#t.delete(s);this.#e.set(t.reverse())}static instance(e={forceNew:null,maxStorageSize:yo}){const{forceNew:t,maxStorageSize:r}=e;return(!us||t)&&(us=new Rr(r)),us}}const hs=160,Sp=240;async function kp(){const i=xt.instance().primaryPageTarget();if(!i)throw new Error("Could not find main target");const{data:e}=await i.pageAgent().invoke_captureScreenshot({});return e?"data:image/png;base64,"+e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}async function Ep(i){const e=new Image,t=new Promise(a=>{e.onload=a});e.src=i,await t;const r=document.createElement("canvas"),s=r.getContext("2d");if(!s)throw new Error("Could not create context.");const n=e.width/e.height;r.width=hs,r.height=Math.min(Sp,hs/n);const o=await createImageBitmap(e,{resizeWidth:hs,resizeQuality:"high"});return s.drawImage(o,0,0),r.toDataURL("image/png")}async function wo(){const i=await kp();return await Ep(i)}function vo(i){const e=i.assertedEvents?.find(t=>t.type==="navigation");return i.type==="navigate"?{title:e?.title||"",url:i.url,steps:[],causingStep:i}:e?{title:e.title||"",url:e.url||"",steps:[]}:null}function xp(i){let e=null;const t=[];for(const r of i){if(e)e.steps.push(r);else if(r.type==="navigate"){e=vo(r);continue}else e={title:"Current page",url:"",steps:[r]};const s=vo(r);s&&(e&&t.push(e),e=s)}return e&&(!t.length||e.steps.length)&&t.push(e),t}function Mt(i,e){let t=i;const r=Bs.instance().shortcutsForAction(e);for(const s of r)t+=` - ${s.title()}`;return t}const Ka=new CSSStyleSheet;Ka.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-size: inherit;
}

.wrapper {
  padding: 24px;
  flex: 1;
}

h1 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: var(--sys-color-on-surface);
  margin: 0;
  font-weight: normal;
}

.row-label {
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--sys-color-secondary);
  margin-bottom: 8px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 3px;
}

.footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--sys-color-divider);
  padding: 12px;
  background: var(--sys-color-cdt-base-container);
}

.controls {
  display: flex;
}

.error {
  margin: 16px 0 0;
  padding: 8px;
  background: var(--sys-color-error-container);
  color: var(--sys-color-error);
}

.row-label .link:focus-visible {
  outline: var(--sys-color-state-focus-ring) auto 1px;
}

.header-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 4px;
  line-height: 1.1;
  padding: 4px;
}

.checkbox-container {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}

input[type="checkbox"]:focus-visible {
  outline: var(--sys-color-state-focus-ring) auto 1px;
}

devtools-icon[name="help"] {
  width: 16px;
  height: 16px;
}

/*# sourceURL=createRecordingView.css */
`);const{html:ps,Directives:{ifDefined:Cp}}=je,ue={recordingName:"Recording name",startRecording:"Start recording",createRecording:"Create a new recording",recordingNameIsRequired:"Recording name is required",selectorAttribute:"Selector attribute",cancelRecording:"Cancel recording",selectorTypeCSS:"CSS",selectorTypePierce:"Pierce",selectorTypeARIA:"ARIA",selectorTypeText:"Text",selectorTypeXPath:"XPath",selectorTypes:"Selector types to record",includeNecessarySelectors:"You must choose CSS, Pierce, or XPath as one of your options. Only these selectors are guaranteed to be recorded since ARIA and text selectors may not be unique.",learnMore:"Learn more"},Tp=et("panels/recorder/components/CreateRecordingView.ts",ue),Se=tt.bind(void 0,Tp);class Hi extends Event{static eventName="recordingstarted";name;selectorAttribute;selectorTypesToRecord;constructor(e,t,r){super(Hi.eventName,{}),this.name=e,this.selectorAttribute=r||void 0,this.selectorTypesToRecord=t}}class dn extends Event{static eventName="recordingcancelled";constructor(){super(dn.eventName)}}class _p extends HTMLElement{#e=this.attachShadow({mode:"open"});#t="";#r;#i;constructor(){super(),this.setAttribute("jslog",`${Hr("create-recording-view")}`)}connectedCallback(){this.#e.adoptedStyleSheets=[Ka,_o,fc],this.#a(),this.#e.querySelector("input")?.focus()}set data(e){this.#i=e.recorderSettings,this.#t=this.#i.defaultTitle}#s(e){this.#r&&(this.#r=void 0,this.#a()),e.key==="Enter"&&(this.startRecording(),e.stopPropagation(),e.preventDefault())}startRecording(){const e=this.#e.querySelector("#user-flow-name");if(!e)throw new Error("input#user-flow-name not found");if(!this.#i)throw new Error("settings not set");if(!e.value.trim()){this.#r=new Error(Se(ue.recordingNameIsRequired)),this.#a();return}const t=this.#e.querySelectorAll(".selector-type input[type=checkbox]"),r=[];for(const o of t){const a=o,c=a.value;a.checked&&r.push(c)}if(!r.includes(G.CSS)&&!r.includes(G.XPath)&&!r.includes(G.Pierce)){this.#r=new Error(Se(ue.includeNecessarySelectors)),this.#a();return}for(const o of Object.values(G))this.#i.setSelectorByType(o,r.includes(o));const n=this.#e.querySelector("#selector-attribute").value.trim();this.#i.selectorAttribute=n,this.dispatchEvent(new Hi(e.value.trim(),r,n))}#n(){this.dispatchEvent(new dn)}#o=()=>{this.#e.querySelector("#user-flow-name")?.select()};#a(){const e=new Map([[G.ARIA,Se(ue.selectorTypeARIA)],[G.CSS,Se(ue.selectorTypeCSS)],[G.Text,Se(ue.selectorTypeText)],[G.XPath,Se(ue.selectorTypeXPath)],[G.Pierce,Se(ue.selectorTypePierce)]]);lt(ps`
        <div class="wrapper">
          <div class="header-wrapper">
            <h1>${Se(ue.createRecording)}</h1>
            <devtools-button
              title=${Se(ue.cancelRecording)}
              jslog=${qs().track({click:!0})}
              .data=${{variant:"icon",size:"SMALL",iconName:"cross"}}
              @click=${this.#n}
            ></devtools-button>
          </div>
          <label class="row-label" for="user-flow-name">${Se(ue.recordingName)}</label>
          <input
            value=${this.#t}
            @focus=${this.#o}
            @keydown=${this.#s}
            jslog=${mi("user-flow-name").track({change:!0})}
            class="devtools-text-input"
            id="user-flow-name"
          />
          <label class="row-label" for="selector-attribute">
            <span>${Se(ue.selectorAttribute)}</span>
            <x-link
              class="link" href="https://g.co/devtools/recorder#selector"
              title=${Se(ue.learnMore)}
              jslog=${ks("recorder-selector-help").track({click:!0})}>
              <devtools-icon name="help">
              </devtools-icon>
            </x-link>
          </label>
          <input
            value=${Cp(this.#i?.selectorAttribute)}
            placeholder="data-testid"
            @keydown=${this.#s}
            jslog=${mi("selector-attribute").track({change:!0})}
            class="devtools-text-input"
            id="selector-attribute"
          />
          <label class="row-label">
            <span>${Se(ue.selectorTypes)}</span>
            <x-link
              class="link" href="https://g.co/devtools/recorder#selector"
              title=${Se(ue.learnMore)}
              jslog=${ks("recorder-selector-help").track({click:!0})}>
              <devtools-icon name="help">
              </devtools-icon>
            </x-link>
          </label>
          <div class="checkbox-container">
            ${Object.values(G).map(t=>{const r=this.#i?.getSelectorByType(t);return ps`
                  <label class="checkbox-label selector-type">
                    <input
                      @keydown=${this.#s}
                      .value=${t}
                      jslog=${Hs().track({click:!0}).context(`selector-${t}`)}
                      ?checked=${r}
                      type="checkbox"
                    />
                    ${e.get(t)||t}
                  </label>
                `})}
          </div>

          ${this.#r&&ps`
          <div class="error" role="alert">
            ${this.#r.message}
          </div>
        `}
        </div>
        <div class="footer">
          <div class="controls">
            <devtools-control-button
              @click=${this.startRecording}
              .label=${Se(ue.startRecording)}
              .shape=${"circle"}
              jslog=${Ye("chrome-recorder.start-recording").track({click:!0})}
              title=${Mt(Se(ue.startRecording),"chrome-recorder.start-recording")}
            ></devtools-control-button>
          </div>
        </div>
      `,this.#e,{host:this})}}customElements.define("devtools-create-recording-view",_p);const Wa=new CSSStyleSheet;Wa.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

*:focus,
*:focus-visible {
  outline: none;
}

.wrapper {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

h1 {
  font-size: 16px;
  line-height: 19px;
  color: var(--sys-color-on-surface);
  font-weight: normal;
}

.icon,
.icon devtools-icon {
  width: 20px;
  height: 20px;
  color: var(--sys-color-primary);
}

.table {
  margin-top: 35px;
}

.title {
  font-size: 13px;
  color: var(--sys-color-on-surface);
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.row {
  display: flex;
  align-items: center;
  padding-right: 5px;
  height: 28px;
  border-bottom: 1px solid var(--sys-color-divider);
}

.row:focus-within,
.row:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.row:last-child {
  border-bottom: none;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button {
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.actions .divider {
  width: 1px;
  height: 17px;
  background-color: var(--sys-color-divider);
  margin: 0 6px;
}

/*# sourceURL=recordingListView.css */
`);const{html:fs}=je,It={savedRecordings:"Saved recordings",createRecording:"Create a new recording",playRecording:"Play recording",deleteRecording:"Delete recording",openRecording:"Open recording"},Rp=et("panels/recorder/components/RecordingListView.ts",It),Kt=tt.bind(void 0,Rp);let Ip=class za extends Event{static eventName="createrecording";constructor(){super(za.eventName)}};class Ui extends Event{storageName;static eventName="deleterecording";constructor(e){super(Ui.eventName),this.storageName=e}}class Vi extends Event{storageName;static eventName="openrecording";constructor(e){super(Vi.eventName),this.storageName=e}}let Ga=class Ja extends Event{storageName;static eventName="playrecording";constructor(e){super(Ja.eventName),this.storageName=e}};class $p extends HTMLElement{#e=this.attachShadow({mode:"open"});#t={recordings:[],replayAllowed:!0};constructor(){super()}connectedCallback(){this.#e.adoptedStyleSheets=[Wa],ge(this,this.#c)}set recordings(e){this.#t.recordings=e,ge(this,this.#c)}set replayAllowed(e){this.#t.replayAllowed=e,ge(this,this.#c)}#r(){this.dispatchEvent(new Ip)}#i(e,t){t.stopPropagation(),this.dispatchEvent(new Ui(e))}#s(e,t){t.stopPropagation(),this.dispatchEvent(new Vi(e))}#n(e,t){t.stopPropagation(),this.dispatchEvent(new Ga(e))}#o(e,t){t.key==="Enter"&&this.#s(e,t)}#a(e){e.stopPropagation()}#c=()=>{lt(fs`
        <div class="wrapper">
          <div class="header">
            <h1>${Kt(It.savedRecordings)}</h1>
            <devtools-button
              .variant=${"primary"}
              @click=${this.#r}
              title=${Mt(Kt(It.createRecording),"chrome-recorder.create-recording")}
              .jslogContext=${"create-recording"}
            >
              ${Kt(It.createRecording)}
            </devtools-button>
          </div>
          <div class="table">
            ${this.#t.recordings.map(e=>fs`
                  <div
                    role="button"
                    tabindex="0"
                    aria-label=${Kt(It.openRecording)}
                    class="row"
                    @keydown=${this.#o.bind(this,e.storageName)}
                    @click=${this.#s.bind(this,e.storageName)}
                    jslog=${Ar().track({click:!0}).context("recording")}>
                    <div class="icon">
                      <devtools-icon name="flow">
                      </devtools-icon>
                    </div>
                    <div class="title">${e.name}</div>
                    <div class="actions">
                      ${this.#t.replayAllowed?fs`
                              <devtools-button
                                title=${Kt(It.playRecording)}
                                .data=${{variant:"icon",iconName:"play",jslogContext:"play-recording"}}
                                @click=${this.#n.bind(this,e.storageName)}
                                @keydown=${this.#a}
                              ></devtools-button>
                              <div class="divider"></div>`:""}
                      <devtools-button
                        class="delete-recording-button"
                        title=${Kt(It.deleteRecording)}
                        .data=${{variant:"icon",iconName:"bin",jslogContext:"delete-recording"}}
                        @click=${this.#i.bind(this,e.storageName)}
                        @keydown=${this.#a}
                      ></devtools-button>
                    </div>
                  </div>
                `)}
          </div>
        </div>
      `,this.#e,{host:this})}}customElements.define("devtools-recording-list-view",$p);let gs=null;class or extends js{static instance(){return gs||(gs=new or),gs}#e=new Map;constructor(){super(),this.attach()}attach(){const e=ri.instance();e.addEventListener("pluginAdded",this.#t),e.addEventListener("pluginRemoved",this.#t),e.addEventListener("viewRegistered",this.#r);for(const t of e.views())this.#r({data:t})}detach(){const e=ri.instance();e.removeEventListener("pluginAdded",this.#t),e.removeEventListener("pluginRemoved",this.#t),e.removeEventListener("viewRegistered",this.#r),this.#e.clear()}extensions(){return ri.instance().plugins()}getView(e){const t=this.#e.get(e);if(!t)throw new Error("View not found");return t}#t=()=>{this.dispatchEventToListeners("extensionsUpdated",this.extensions())};#r=e=>{const t=e.data;this.#e.has(t.id)||this.#e.set(t.id,new Pp(t))}}class Pp{#e;#t;#r=!1;#i=!1;constructor(e){this.#e=e,this.#t=document.createElement("iframe"),this.#t.src=e.pagePath,this.#t.onload=this.#s}#s=()=>{this.#i=!0,this.#r&&this.#e.onShown()};show(){this.#r||(this.#r=!0,this.#i&&this.#e.onShown())}hide(){this.#r&&(this.#r=!1,this.#i=!1,this.#e.onHidden())}frame(){return this.#t}}const Qa=new CSSStyleSheet;Qa.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-size: inherit;
}

.extension-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  flex: 1;
}

iframe {
  border: none;
  height: 100%;
  width: 100%;
}

header {
  display: flex;
  padding: 3px 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(--sys-color-divider);
}

header > div {
  align-self: center;
}

.icon {
  display: block;
  width: 16px;
  height: 16px;
  color: var(--sys-color-secondary);
}

.title {
  display: flex;
  flex-direction: row;
  gap: 6px;
  color: var(--sys-color-secondary);
  align-items: center;
  font-weight: 500;
}

/*# sourceURL=extensionView.css */
`);const{html:Ap}=je,Ds={closeView:"Close",extension:"Content provided by a browser extension"},Fp=et("panels/recorder/components/ExtensionView.ts",Ds),bo=tt.bind(void 0,Fp);class un extends Event{static eventName="recorderextensionviewclosed";constructor(){super(un.eventName,{bubbles:!0,composed:!0})}}class Np extends HTMLElement{#e=this.attachShadow({mode:"open"});#t;constructor(){super(),this.setAttribute("jslog",`${Hr("extension-view")}`)}connectedCallback(){this.#e.adoptedStyleSheets=[Qa],this.#i()}disconnectedCallback(){this.#t&&or.instance().getView(this.#t.id).hide()}set descriptor(e){this.#t=e,this.#i(),or.instance().getView(e.id).show()}#r(){this.dispatchEvent(new un)}#i(){if(!this.#t)return;const e=or.instance().getView(this.#t.id).frame();lt(Ap`
        <div class="extension-view">
          <header>
            <div class="title">
              <devtools-icon
                class="icon"
                title=${bo(Ds.extension)}
                name="extension">
              </devtools-icon>
              ${this.#t.title}
            </div>
            <devtools-button
              title=${bo(Ds.closeView)}
              jslog=${qs().track({click:!0})}
              .data=${{variant:"icon",size:"SMALL",iconName:"cross"}}
              @click=${this.#r}
            ></devtools-button>
          </header>
          <main>
            ${e}
          </main>
      </div>
    `,this.#e,{host:this})}}customElements.define("devtools-recorder-extension-view",Np);const{html:Dp}=je,Le={Replay:"Replay",ReplayNormalButtonLabel:"Normal speed",ReplayNormalItemLabel:"Normal (Default)",ReplaySlowButtonLabel:"Slow speed",ReplaySlowItemLabel:"Slow",ReplayVerySlowButtonLabel:"Very slow speed",ReplayVerySlowItemLabel:"Very slow",ReplayExtremelySlowButtonLabel:"Extremely slow speed",ReplayExtremelySlowItemLabel:"Extremely slow",speedGroup:"Speed",extensionGroup:"Extensions"},Mp=[{value:"normal",buttonIconName:"play",buttonLabel:()=>Be(Le.ReplayNormalButtonLabel),label:()=>Be(Le.ReplayNormalItemLabel)},{value:"slow",buttonIconName:"play",buttonLabel:()=>Be(Le.ReplaySlowButtonLabel),label:()=>Be(Le.ReplaySlowItemLabel)},{value:"very_slow",buttonIconName:"play",buttonLabel:()=>Be(Le.ReplayVerySlowButtonLabel),label:()=>Be(Le.ReplayVerySlowItemLabel)},{value:"extremely_slow",buttonIconName:"play",buttonLabel:()=>Be(Le.ReplayExtremelySlowButtonLabel),label:()=>Be(Le.ReplayExtremelySlowItemLabel)}],Lp={normal:1,slow:2,very_slow:3,extremely_slow:4},Op=et("panels/recorder/components/ReplaySection.ts",Le),Be=tt.bind(void 0,Op);class _i extends Event{speed;extension;static eventName="startreplay";constructor(e,t){super(_i.eventName,{bubbles:!0,composed:!0}),this.speed=e,this.extension=t}}const ms="extension";class jp extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#a.bind(this);#r={disabled:!1};#i;#s=[];set data(e){this.#i=e.settings,this.#s=e.replayExtensions}get disabled(){return this.#r.disabled}set disabled(e){this.#r.disabled=e,ge(this,this.#t)}connectedCallback(){ge(this,this.#t)}#n(e){const t=e.value;this.#i&&e.value&&(this.#i.speed=t,this.#i.replayExtension=""),J.recordingReplaySpeed(Lp[t]),ge(this,this.#t)}#o(e){if(e.stopPropagation(),e.value&&e.value.startsWith(ms)){this.#i&&(this.#i.replayExtension=e.value);const t=Number(e.value.substring(ms.length));this.dispatchEvent(new _i("normal",this.#s[t])),ge(this,this.#t);return}this.dispatchEvent(new _i(this.#i?this.#i.speed:"normal")),ge(this,this.#t)}#a(){const e=[{name:Be(Le.speedGroup),items:Mp}];this.#s.length&&e.push({name:Be(Le.extensionGroup),items:this.#s.map((t,r)=>({value:ms+r,buttonIconName:"play",buttonLabel:()=>t.getName(),label:()=>t.getName()}))}),lt(Dp`
    <devtools-select-button
      @selectmenuselected=${this.#n}
      @selectbuttonclick=${this.#o}
      .variant=${"primary"}
      .showItemDivider=${!1}
      .disabled=${this.#r.disabled}
      .action=${"chrome-recorder.replay-recording"}
      .value=${this.#i?.replayExtension||this.#i?.speed||""}
      .buttonLabel=${Be(Le.Replay)}
      .groups=${e}
      jslog=${Ye("chrome-recorder.replay-recording").track({click:!0})}>
    </devtools-select-button>`,this.#e,{host:this})}}customElements.define("devtools-replay-section",jp);const Xa=new CSSStyleSheet;Xa.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
}

.main {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.sections {
  flex: 1;
  min-height: 0;
  overflow: hidden auto;
  background-color: var(--sys-color-cdt-base-container);
  z-index: 0;
  position: relative;
  container: sections / inline-size; /* stylelint-disable-line property-no-unknown */
}

.section {
  display: flex;
  padding: 0 16px;
  gap: 8px;
  position: relative;
}

.section::after {
  content: "";
  border-bottom: 1px solid var(--sys-color-divider);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.section:last-child {
  /* Make sure there is enough space for the context menu. */
  margin-bottom: 70px;
}

.section:last-child::after {
  content: none;
}

.screenshot-wrapper {
  flex: 0 0 80px;
  padding-top: 32px;
  z-index: 2; /* We want this to be on top of \\'.step-overlay\\' */
}

/* stylelint-disable-next-line at-rule-no-unknown */
@container sections (max-width: 400px) {
  .screenshot-wrapper {
    display: none;
  }
}

.screenshot {
  object-fit: cover;
  object-position: top center;
  max-width: 100%;
  width: 200px;
  height: auto;
  border: 1px solid var(--sys-color-divider);
  border-radius: 1px;
}

.content {
  flex: 1;
  min-width: 0;
}

.steps {
  flex: 1;
  position: relative;
  align-self: flex-start;
  overflow: visible;
}

.step {
  position: relative;
  padding-left: 40px;
  margin: 16px 0;
}

.step .action {
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
}

.recording {
  color: var(--sys-color-primary);
  font-style: italic;
  margin-top: 8px;
  margin-bottom: 0;
}

.add-assertion-button {
  margin-top: 8px;
}

.details {
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.url {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--sys-color-secondary);
  max-width: 100%;
  margin-bottom: 16px;
}

.header {
  align-items: center;
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  padding: 16px;
}

.header-title-wrapper {
  max-width: 100%;
}

.header-title {
  align-items: center;
  display: flex;
  flex: 1;
  max-width: 100%;
}

.header-title::before {
  content: "";
  min-width: 12px;
  height: 12px;
  display: inline-block;
  background: var(--sys-color-primary);
  border-radius: 50%;
  margin-right: 7px;
}

#title-input {
  box-sizing: content-box;
  font-family: inherit;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  padding: 1px 4px;
  border: 1px solid transparent;
  border-radius: 1px;
  word-break: break-all;
}

#title-input:hover {
  border-color: var(--input-outline);
}

#title-input.has-error {
  border-color: var(--sys-color-error);
}

#title-input.disabled {
  color: var(--sys-color-state-disabled);
}

.title-input-error-text {
  margin-top: 4px;
  margin-left: 19px;
  color: var(--sys-color-error);
}

.title-button-bar {
  padding-left: 2px;
  display: flex;
}

#title-input:focus + .title-button-bar {
  display: none;
}

.settings-row {
  padding: 16px 28px;
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.settings-title {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: var(--sys-color-on-surface);
  display: flex;
  align-items: center;
  align-content: center;
  gap: 5px;
  width: fit-content;
}

.settings {
  margin-top: 4px;
  display: flex;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.03em;
  color: var(--sys-color-on-surface-subtle);
}

.settings.expanded {
  gap: 10px;
}

.settings .separator {
  width: 1px;
  height: 20px;
  background-color: var(--sys-color-divider);
  margin: 0 5px;
}

.actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.actions .separator {
  width: 1px;
  height: 24px;
  background-color: var(--sys-color-divider);
}

.is-recording .header-title::before {
  background: var(--sys-color-error-bright);
}

.footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--sys-color-divider);
  padding: 12px;
  background: var(--sys-color-cdt-base-container);
  z-index: 1;
}

.controls {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}

.chevron {
  width: 14px;
  height: 14px;
  transform: rotate(-90deg);
  color: var(--sys-color-on-surface);
}

.expanded .chevron {
  transform: rotate(0);
}

.editable-setting {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}

.editable-setting devtools-select-menu {
  height: 32px;
}

.editable-setting .devtools-text-input {
  width: fit-content;
}

.wrapping-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.text-editor {
  height: 100%;
  overflow: auto;
}

.section-toolbar {
  display: flex;
  align-items: center;
  padding: 3px 5px;
  justify-content: space-between;
  gap: 3px;
}

.section-toolbar > devtools-select-menu {
  height: 24px;
  min-width: 50px;
}

.sections .section-toolbar {
  justify-content: flex-end;
}

devtools-split-view {
  flex: 1 1 0%;
  min-height: 0;
}

[slot="sidebar"] {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  width: 100%;
}

[slot="sidebar"] .section-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
}

.show-code {
  margin-right: 14px;
  margin-top: 8px;
}

devtools-recorder-extension-view {
  flex: 1;
}

/*# sourceURL=recordingView.css */
`);const{html:$}=je,O={mobile:"Mobile",desktop:"Desktop",latency:"Latency: {value} ms",upload:"Upload: {value}",download:"Download: {value}",editReplaySettings:"Edit replay settings",replaySettings:"Replay settings",default:"Default",environment:"Environment",screenshotForSection:"Screenshot for this section",editTitle:"Edit title",requiredTitleError:"Title is required",recording:"Recording…",endRecording:"End recording",recordingIsBeingStopped:"Stopping recording…",timeout:"Timeout: {value} ms",network:"Network",timeoutLabel:"Timeout",timeoutExplanation:"The timeout setting (in milliseconds) applies to every action when replaying the recording. For example, if a DOM element identified by a CSS selector does not appear on the page within the specified timeout, the replay fails with an error.",cancelReplay:"Cancel replay",showCode:"Show code",hideCode:"Hide code",addAssertion:"Add assertion",performancePanel:"Performance panel"},Bp=et("panels/recorder/components/RecordingView.ts",O),q=tt.bind(void 0,Bp);class hn extends Event{static eventName="recordingfinished";constructor(){super(hn.eventName)}}class fr extends Event{static eventName="playrecording";data;constructor(e={targetPanel:"chrome-recorder",speed:"normal"}){super(fr.eventName),this.data=e}}class pn extends Event{static eventName="abortreplay";constructor(){super(pn.eventName)}}class fn extends Event{static eventName="addassertion";constructor(){super(fn.eventName)}}class gn extends Event{static eventName="recordingtitlechanged";title;constructor(e){super(gn.eventName,{}),this.title=e}}class mn extends Event{static eventName="networkconditionschanged";data;constructor(e){super(mn.eventName,{composed:!0,bubbles:!0}),this.data=e}}class yn extends Event{static eventName="timeoutchanged";data;constructor(e){super(yn.eventName,{composed:!0,bubbles:!0}),this.data=e}}const ys=[Pt,$o,Po,Ao,Fo];function qp(i){switch(i){case"puppeteer":case"puppeteer-firefox":return 1;case"json":return 2;case"@puppeteer/replay":return 3;default:return 4}}function Hp(i){switch(i){case"puppeteer":case"puppeteer-firefox":return 5;case"json":return 6;case"@puppeteer/replay":return 7;default:return 8}}class Up extends HTMLElement{#e=this.attachShadow({mode:"open"});#t={isPlaying:!1,isPausedOnBreakpoint:!1};#r=null;#i=!1;#s=!1;#n=!1;#o;#a=[];#c;#l=[];#u;#d;#h;#p=new Set;#f;#g=!1;#y=!0;#m=[];#b=[];#v;#S=!1;#w="";#E="";#x;#k;#C;#_=this.#J.bind(this);constructor(){super()}set data(e){this.#i=e.isRecording,this.#t=e.replayState,this.#s=e.recordingTogglingInProgress,this.#o=e.currentStep,this.#r=e.recording,this.#a=this.#r.steps,this.#l=e.sections,this.#u=e.settings,this.#d=e.recorderSettings,this.#c=e.currentError,this.#h=e.lastReplayResult,this.#y=e.replayAllowed,this.#n=!1,this.#p=e.breakpointIndexes,this.#m=e.builtInConverters,this.#b=e.extensionConverters,this.#v=e.replayExtensions,this.#C=e.extensionDescriptor,this.#E=this.#d?.preferredCopyFormat??e.builtInConverters[0]?.getId(),this.#te(),this.#B()}connectedCallback(){this.#e.adoptedStyleSheets=[Xa,_o],document.addEventListener("copy",this.#_),this.#B()}disconnectedCallback(){document.removeEventListener("copy",this.#_)}scrollToBottom(){const e=this.shadowRoot?.querySelector(".sections");e&&(e.scrollTop=e.scrollHeight)}#N(){this.dispatchEvent(new fn)}#A(){this.dispatchEvent(new hn)}#D(){this.dispatchEvent(new pn)}#M(e){this.dispatchEvent(new fr({targetPanel:"chrome-recorder",speed:e.speed,extension:e.extension}))}#R(e){if(!this.#o)return"default";if(e===this.#o)return this.#c?"error":this.#t.isPlaying?this.#t.isPausedOnBreakpoint?"stopped":"current":"success";const t=this.#a.indexOf(this.#o);return t===-1?"default":this.#a.indexOf(e)<t?"success":"outstanding"}#T(e){const t=this.#o;if(!t)return"default";const r=this.#l.find(o=>o.steps.includes(t));if(!r&&this.#c)return"error";if(e===r)return"success";const s=this.#l.indexOf(r),n=this.#l.indexOf(e);return s>=n?"success":"outstanding"}#I(e,t,r){const s=this.#a.indexOf(t);return $`
      <devtools-step-view
      @click=${this.#P}
      @mouseover=${this.#$}
      @copystep=${this.#z}
      .data=${{step:t,state:this.#R(t),error:this.#o===t?this.#c:void 0,isFirstSection:!1,isLastSection:r&&this.#a[this.#a.length-1]===t,isStartOfGroup:!1,isEndOfGroup:e.steps[e.steps.length-1]===t,stepIndex:s,hasBreakpoint:this.#p.has(s),sectionIndex:-1,isRecording:this.#i,isPlaying:this.#t.isPlaying,removable:this.#a.length>1,builtInConverters:this.#m,extensionConverters:this.#b,isSelected:this.#f===t,recorderSettings:this.#d}}
      jslog=${Hr("step").track({click:!0})}
      ></devtools-step-view>
    `}#$=e=>{const t=e.target,r=t.step||t.section?.causingStep;!r||this.#f||this.#re(r)};#P(e){e.stopPropagation();const t=e.target,r=t.step||t.section?.causingStep||null;this.#f!==r&&(this.#f=r,this.#B(),r&&this.#re(r,!0))}#F(){this.#f!==void 0&&(this.#f=void 0,this.#B())}#O(e){e.key==="Enter"&&(e.preventDefault(),this.#L(e))}#L(e){e.stopPropagation(),this.#g=!this.#g,this.#B()}#H(e){const t=ys.find(r=>r.i18nTitleKey===e.itemValue);this.dispatchEvent(new mn(t?.i18nTitleKey===Pt.i18nTitleKey?void 0:t))}#U(e){const t=e.target;if(!t.checkValidity()){t.reportValidity();return}this.dispatchEvent(new yn(Number(t.value)))}#j=e=>{const r=e.target.innerText.trim();if(!r){this.#n=!0,this.#B();return}this.dispatchEvent(new gn(r))};#V=e=>{switch(e.code){case"Escape":case"Enter":e.target.blur(),e.stopPropagation();break}};#K=()=>{const e=this.#e.getElementById("title-input");e.focus();const t=document.createRange();t.selectNodeContents(e),t.collapse(!1);const r=window.getSelection();r?.removeAllRanges(),r?.addRange(t)};#W=e=>{const t=e.target;t.matches(".wrapping-label")&&t.querySelector("devtools-select-menu")?.click()};async#q(e){let t=[...this.#m,...this.#b].find(n=>n.getId()===this.#d?.preferredCopyFormat);if(t||(t=this.#m[0]),!t)throw new Error("No default converter found");let r="";e?r=await t.stringifyStep(e):this.#r&&([r]=await t.stringify(this.#r)),Ro.copyText(r);const s=e?Hp(t.getId()):qp(t.getId());J.recordingCopiedToClipboard(s)}#z(e){e.stopPropagation(),this.#q(e.step)}async#J(e){e.target===document.body&&(e.preventDefault(),await this.#q(this.#f),J.keyboardShortcutFired("chrome-recorder.copy-recording-or-step"))}#Q(){if(!this.#u)return $``;const e=[];this.#u.viewportSettings&&(e.push($`<div>${this.#u.viewportSettings.isMobile?q(O.mobile):q(O.desktop)}</div>`),e.push($`<div class="separator"></div>`),e.push($`<div>${this.#u.viewportSettings.width}×${this.#u.viewportSettings.height} px</div>`));const t=[];if(!this.#g)this.#u.networkConditionsSettings?this.#u.networkConditionsSettings.title?t.push($`<div>${this.#u.networkConditionsSettings.title}</div>`):t.push($`<div>
            ${q(O.download,{value:$n(this.#u.networkConditionsSettings.download)})},
            ${q(O.upload,{value:$n(this.#u.networkConditionsSettings.upload)})},
            ${q(O.latency,{value:this.#u.networkConditionsSettings.latency})}
          </div>`):t.push($`<div>${Pt.title instanceof Function?Pt.title():Pt.title}</div>`),t.push($`<div class="separator"></div>`),t.push($`<div>${q(O.timeout,{value:this.#u.timeout||Ns})}</div>`);else{const o=this.#u.networkConditionsSettings?.i18nTitleKey||Pt.i18nTitleKey,a=ys.find(l=>l.i18nTitleKey===o);let c="";a&&(c=a.title instanceof Function?a.title():a.title),t.push($`<div class="editable-setting">
        <label class="wrapping-label" @click=${this.#W}>
          ${q(O.network)}
          <devtools-select-menu
            @selectmenuselected=${this.#H}
            .disabled=${!this.#a.find(l=>l.type==="navigate")}
            .showDivider=${!0}
            .showArrow=${!0}
            .sideButton=${!1}
            .showSelectedItem=${!0}
            .showConnector=${!1}
            .jslogContext=${"network-conditions"}
            .position=${"bottom"}
            .buttonTitle=${c}
          >
            ${ys.map(l=>$`<devtools-menu-item
                .value=${l.i18nTitleKey||""}
                .selected=${o===l.i18nTitleKey}
                jslog=${Ar(Ct(l.i18nTitleKey||""))}
              >
                ${l.title instanceof Function?l.title():l.title}
              </devtools-menu-item>`)}
          </devtools-select-menu>
        </label>
      </div>`),t.push($`<div class="editable-setting">
        <label class="wrapping-label" title=${q(O.timeoutExplanation)}>
          ${q(O.timeoutLabel)}
          <input
            @input=${this.#U}
            required
            min=${up}
            max=${hp}
            value=${this.#u.timeout||Ns}
            jslog=${mi("timeout").track({change:!0})}
            class="devtools-text-input"
            type="number">
        </label>
      </div>`)}const r=!this.#i&&!this.#t.isPlaying,s={"settings-title":!0,expanded:this.#g},n={expanded:this.#g,settings:!0};return $`
      <div class="settings-row">
        <div class="settings-container">
          <div
            class=${Gt(s)}
            @keydown=${r&&this.#O}
            @click=${r&&this.#L}
            tabindex="0"
            role="button"
            jslog=${Ye("replay-settings").track({click:!0})}
            aria-label=${q(O.editReplaySettings)}>
            <span>${q(O.replaySettings)}</span>
            ${r?$`<devtools-icon
                    class="chevron"
                    name="triangle-down">
                  </devtools-icon>`:""}
          </div>
          <div class=${Gt(n)}>
            ${t.length?t:$`<div>${q(O.default)}</div>`}
          </div>
        </div>
        <div class="settings-container">
          <div class="settings-title">${q(O.environment)}</div>
          <div class="settings">
            ${e.length?e:$`<div>${q(O.default)}</div>`}
          </div>
        </div>
      </div>
    `}#G(){const e=[...this.#m||[],...this.#b||[]].find(t=>t.getId()===this.#E);return e||this.#m[0]}#X(){if(this.#C)return $`
        <devtools-recorder-extension-view .descriptor=${this.#C}>
        </devtools-recorder-extension-view>
      `;const t=this.#G()?.getFormatName();return this.#S?$`
        <devtools-split-view>
          <div slot="main">
            ${this.#ie()}
          </div>
          <div slot="sidebar" jslog=${gc("source-code").track({resize:!0})}>
            <div class="section-toolbar" jslog=${Io()}>
              <devtools-select-menu
                @selectmenuselected=${this.#ne}
                .showDivider=${!0}
                .showArrow=${!0}
                .sideButton=${!1}
                .showSelectedItem=${!0}
                .showConnector=${!1}
                .position=${"bottom"}
                .buttonTitle=${t||""}
                .jslogContext=${"code-format"}
              >
                ${this.#m.map(r=>$`<devtools-menu-item
                    .value=${r.getId()}
                    .selected=${this.#E===r.getId()}
                    jslog=${Ye().track({click:!0}).context(`converter-${Ct(r.getId())}`)}
                  >
                    ${r.getFormatName()}
                  </devtools-menu-item>`)}
                ${this.#b.map(r=>$`<devtools-menu-item
                    .value=${r.getId()}
                    .selected=${this.#E===r.getId()}
                    jslog=${Ye().track({click:!0}).context("converter-extension")}
                  >
                    ${r.getFormatName()}
                  </devtools-menu-item>`)}
              </devtools-select-menu>
              <devtools-button
                title=${Mt(q(O.hideCode),"chrome-recorder.toggle-code-view")}
                .data=${{variant:"icon",size:"SMALL",iconName:"cross"}}
                @click=${this.showCodeToggle}
                jslog=${qs().track({click:!0})}
              ></devtools-button>
            </div>
            ${this.#Y()}
          </div>
        </devtools-split-view>
      `:this.#ie()}#Y(){if(!this.#x)throw new Error("Unexpected: trying to render the text editor without editorState");return $`
      <div class="text-editor" jslog=${mi().track({change:!0})}>
        <devtools-text-editor .state=${this.#x}></devtools-text-editor>
      </div>
    `}#Z(e){return e.screenshot?$`
      <img class="screenshot" src=${e.screenshot} alt=${q(O.screenshotForSection)} />
    `:null}#ee(){return this.#t.isPlaying?$`
        <devtools-button .jslogContext=${"abort-replay"} @click=${this.#D} .iconName=${"pause"} .variant=${"outlined"}>
          ${q(O.cancelReplay)}
        </devtools-button>`:$`<devtools-replay-section
        .data=${{settings:this.#d,replayExtensions:this.#v}}
        .disabled=${this.#t.isPlaying}
        @startreplay=${this.#M}
        >
      </devtools-replay-section>`}#se(e){e.stopPropagation(),this.dispatchEvent(new fr({targetPanel:"timeline",speed:"normal"}))}showCodeToggle=()=>{this.#S=!this.#S,J.recordingCodeToggled(this.#S?1:2),this.#te()};#te=async()=>{if(!this.#r)return;const e=this.#G();if(!e)return;const[t,r]=await e.stringify(this.#r);this.#w=t,this.#k=r,this.#k?.shift();const s=e.getMediaType(),n=s?await mc(s):null;this.#x=Pn.create({doc:this.#w,extensions:[yc(this.#w),Pn.readOnly.of(!0),An.lineWrapping,n||[]]}),this.#B(),this.dispatchEvent(new Event("code-generated"))};#re=(e,t=!1)=>{if(!this.#k)return;const r=this.#a.indexOf(e);if(r===-1)return;const s=this.#e.querySelector("devtools-text-editor");if(!s)return;const n=s.editor;if(!n)return;const o=this.#k[r*2],a=this.#k[r*2+1];let c=s.createSelection({lineNumber:o+a,columnNumber:0},{lineNumber:o,columnNumber:0});const l=s.state.doc.lineAt(c.main.anchor);c=s.createSelection({lineNumber:o+a-1,columnNumber:l.length+1},{lineNumber:o,columnNumber:0}),n.dispatch({selection:c,effects:t?[An.scrollIntoView(c.main,{y:"nearest"})]:void 0})};#ne=e=>{this.#E=e.itemValue,this.#d&&(this.#d.preferredCopyFormat=e.itemValue),this.#te()};#ie(){return $`
      <div class="sections">
      ${this.#S?"":$`<div class="section-toolbar">
        <devtools-button
          @click=${this.showCodeToggle}
          class="show-code"
          .data=${{variant:"outlined",title:Mt(q(O.showCode),"chrome-recorder.toggle-code-view")}}
          jslog=${wc("chrome-recorder.toggle-code-view").track({click:!0})}
        >
          ${q(O.showCode)}
        </devtools-button>
      </div>`}
      ${this.#l.map((e,t)=>$`
            <div class="section">
              <div class="screenshot-wrapper">
                ${this.#Z(e)}
              </div>
              <div class="content">
                <div class="steps">
                  <devtools-step-view
                    @click=${this.#P}
                    @mouseover=${this.#$}
                    .data=${{section:e,state:this.#T(e),isStartOfGroup:!0,isEndOfGroup:e.steps.length===0,isFirstSection:t===0,isLastSection:t===this.#l.length-1&&e.steps.length===0,isSelected:this.#f===(e.causingStep||null),sectionIndex:t,isRecording:this.#i,isPlaying:this.#t.isPlaying,error:this.#T(e)==="error"?this.#c:void 0,hasBreakpoint:!1,removable:this.#a.length>1&&e.causingStep}}
                  >
                  </devtools-step-view>
                  ${e.steps.map(r=>this.#I(e,r,t===this.#l.length-1))}
                  ${!this.#s&&this.#i&&t===this.#l.length-1?$`<devtools-button
                    class="step add-assertion-button"
                    .data=${{variant:"outlined",title:q(O.addAssertion),jslogContext:"add-assertion"}}
                    @click=${this.#N}
                  >${q(O.addAssertion)}</devtools-button>`:void 0}
                  ${this.#i&&t===this.#l.length-1?$`<div class="step recording">${q(O.recording)}</div>`:null}
                </div>
              </div>
            </div>
      `)}
      </div>
    `}#oe(){if(!this.#r)return"";const{title:e}=this.#r,t=!this.#t.isPlaying&&!this.#i;return $`
      <div class="header">
        <div class="header-title-wrapper">
          <div class="header-title">
            <span @blur=${this.#j}
                  @keydown=${this.#V}
                  id="title-input"
                  .contentEditable=${t?"true":"false"}
                  jslog=${vc("title").track({change:!0})}
                  class=${Gt({"has-error":this.#n,disabled:!t})}
                  .innerText=${bc(e)}></span>
            <div class="title-button-bar">
              <devtools-button
                @click=${this.#K}
                .data=${{disabled:!t,variant:"toolbar",iconName:"edit",title:q(O.editTitle),jslogContext:"edit-title"}}
              ></devtools-button>
            </div>
          </div>
          ${this.#n?$`<div class="title-input-error-text">
            ${q(O.requiredTitleError)}
          </div>`:""}
        </div>
        ${!this.#i&&this.#y?$`<div class="actions">
                <devtools-button
                  @click=${this.#se}
                  .data=${{disabled:this.#t.isPlaying,variant:"outlined",iconName:"performance",title:q(O.performancePanel),jslogContext:"measure-performance"}}
                >
                  ${q(O.performancePanel)}
                </devtools-button>
                <div class="separator"></div>
                ${this.#ee()}
              </div>`:""}
      </div>`}#ae(){if(!this.#i)return"";const e=this.#s?q(O.recordingIsBeingStopped):q(O.endRecording);return $`
      <div class="footer">
        <div class="controls">
          <devtools-control-button
            jslog=${Hs("toggle-recording").track({click:!0})}
            @click=${this.#A}
            .disabled=${this.#s}
            .shape=${"square"}
            .label=${e}
            title=${Mt(e,"chrome-recorder.start-recording")}
          >
          </devtools-control-button>
        </div>
      </div>
    `}#B(){const e={wrapper:!0,"is-recording":this.#i,"is-playing":this.#t.isPlaying,"was-successful":this.#h==="Success","was-failure":this.#h==="Failure"};lt($`
      <div @click=${this.#F} class=${Gt(e)}>
        <div class="main">
          ${this.#oe()}
          ${this.#C?$`
            <devtools-recorder-extension-view .descriptor=${this.#C}>
            </devtools-recorder-extension-view>
          `:$`
            ${this.#Q()}
            ${this.#X()}
          `}
          ${this.#ae()}
        </div>
      </div>
    `,this.#e,{host:this})}}customElements.define("devtools-recording-view",Up);const Ya=new CSSStyleSheet;Ya.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.select-button {
  display: flex;
  gap: 12px;
}

.select-button devtools-button {
  position: relative; /* Needed for outline to appear on top of the next element */
}

.select-menu-item-content-with-icon {
  display: flex;
  align-items: center;
}

/* .select-menu-item-content-with-icon::before {
  content: "";
  position: relative;
  left: 0;
  top: 0;
  background-color: var(--sys-color-on-surface);
  display: inline-block;
  mask-repeat: no-repeat;
  mask-position: center;
  width: 24px;
  height: 24px;
  margin-right: 4px;
  mask-image: var(--item-mask-icon);
} */

/* devtools-select-menu {
  height: var(--override-select-menu-height, 24px);
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;

  --override-select-menu-show-button-outline: var(--sys-color-state-focus-ring);
  --override-select-menu-label-with-arrow-padding: 0;
  --override-select-menu-border: none;
  --override-select-menu-show-button-padding: 0 6px 0 0;
} */

/* devtools-select-menu.primary {
  border: none;
  border-left: 1px solid var(--override-icon-and-text-color);

  --override-icon-and-text-color: var(--sys-color-cdt-base-container);
  --override-select-menu-arrow-color: var(--override-icon-and-text-color);
  --override-divider-color: var(--override-icon-and-text-color);
  --override-select-menu-background-color: var(--sys-color-primary);
  --override-select-menu-active-background-color:
    var(
      --override-select-menu-background-color
    );
} */

/* devtools-select-menu.primary:hover {
  --override-select-menu-background-color: color-mix(in sRGB, var(--sys-color-primary), var(--sys-color-state-hover-on-prominent) 10%);
} */

/* devtools-select-menu[disabled].primary,
devtools-select-menu[disabled].primary:hover {
  --override-icon-and-text-color: var(--sys-color-state-disabled);
  --override-select-menu-background-color: var(--sys-color-cdt-base-container-elevation-1);
} */

/*# sourceURL=selectButton.css */
`);const{html:Er,Directives:{ifDefined:Vp,classMap:Kp}}=je;class wn extends Event{value;static eventName="selectbuttonclick";constructor(e){super(wn.eventName,{bubbles:!0,composed:!0}),this.value=e}}class vn extends Event{value;static eventName="selectmenuselected";constructor(e){super(vn.eventName,{bubbles:!0,composed:!0}),this.value=e}}class Wp extends HTMLElement{#e=this.attachShadow({mode:"open"});#t={disabled:!1,value:"",items:[],buttonLabel:"",groups:[],variant:"primary"};connectedCallback(){this.#e.adoptedStyleSheets=[Ya],ge(this,this.#a)}get disabled(){return this.#t.disabled}set disabled(e){this.#t.disabled=e,ge(this,this.#a)}get items(){return this.#t.items}set items(e){this.#t.items=e,ge(this,this.#a)}set buttonLabel(e){this.#t.buttonLabel=e}set groups(e){this.#t.groups=e,ge(this,this.#a)}get value(){return this.#t.value}set value(e){this.#t.value=e,ge(this,this.#a)}get variant(){return this.#t.variant}set variant(e){this.#t.variant=e,ge(this,this.#a)}set action(e){this.#t.action=e,ge(this,this.#a)}#r(e){e.stopPropagation(),this.dispatchEvent(new wn(this.#t.value))}#i(e){this.dispatchEvent(new vn(e.itemValue)),ge(this,this.#a)}#s(e,t){return Er`
      <devtools-menu-item .value=${e.value} .selected=${e.value===t.value} jslog=${Ar(Ct(e.value)).track({click:!0})}>
        ${e.label()}
      </devtools-menu-item>
    `}#n(e,t){return Er`
      <devtools-menu-group .name=${e.name}>
        ${e.items.map(r=>this.#s(r,t))}
      </devtools-menu-group>
    `}#o(e){return this.#t.action?Mt(e,this.#t.action):""}#a=()=>{const e=!!this.#t.groups.length,t=e?this.#t.groups.flatMap(a=>a.items):this.#t.items,r=t.find(a=>a.value===this.#t.value)||t[0];if(!r)return;const s={primary:this.#t.variant==="primary",secondary:this.#t.variant==="outlined"},n=this.#t.variant==="outlined"?"outlined":"primary",o=r.buttonLabel?r.buttonLabel():r.label();lt(Er`
      <div class="select-button" title=${Vp(this.#o(o))}>
      <devtools-select-menu
          class=${Kp(s)}
          @selectmenuselected=${this.#i}
          ?disabled=${this.#t.disabled}
          .showArrow=${!0}
          .sideButton=${!1}
          .showSelectedItem=${!0}
          .disabled=${this.#t.disabled}
          .buttonTitle=${()=>Er`${o}`}
          .position=${"bottom"}
          .horizontalAlignment=${"right"}
        >
          ${e?this.#t.groups.map(a=>this.#n(a,r)):this.#t.items.map(a=>this.#s(a,r))}
        </devtools-select-menu>
        ${r?Er`
        <devtools-button
            .disabled=${this.#t.disabled}
            .variant=${n}
            .iconName=${r.buttonIconName}
            @click=${this.#r}>
            ${this.#t.buttonLabel}
        </devtools-button>`:""}
      </div>`,this.#e,{host:this})}}customElements.define("devtools-select-button",Wp);const Za=new CSSStyleSheet;Za.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: normal;
  font-size: inherit;
}

:host {
  flex: 1;
  display: block;
  overflow: auto;
}

.wrapper {
  padding: 24px;
  background-color: var(--sys-color-cdt-base-container);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fit-content {
  width: fit-content;
}

.align-right {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

/*# sourceURL=startView.css */
`);const{html:zp}=je,$t={header:"Measure performance across an entire user journey",step1:"Record a common user journey on your website or app",step2:"Replay the recording to check if the flow is working",step3:"Generate a detailed performance trace or export a Puppeteer script for testing",createRecording:"Create a new recording",quickStart:"Quick start: learn the new Recorder panel in DevTools"},Gp=et("panels/recorder/components/StartView.ts",$t),Wt=tt.bind(void 0,Gp),Ms="https://goo.gle/recorder-feedback",Jp="https://developer.chrome.com/docs/devtools/recorder";class bn extends Event{static eventName="createrecording";constructor(){super(bn.eventName)}}class Qp extends HTMLElement{#e=this.attachShadow({mode:"open"});constructor(){super(),this.setAttribute("jslog",`${Hr("start-view")}`)}connectedCallback(){this.#e.adoptedStyleSheets=[Za],ge(this,this.#r)}#t(){this.dispatchEvent(new bn)}#r=()=>{lt(zp`
        <div class="wrapper">
          <devtools-panel-introduction-steps>
            <span slot="title">${Wt($t.header)}</span>
            <span slot="step-1">${Wt($t.step1)}</span>
            <span slot="step-2">${Wt($t.step2)}</span>
            <span slot="step-3">${Wt($t.step3)}</span>
          </devtools-panel-introduction-steps>
          <div class="fit-content">
            <devtools-button .variant=${"primary"} @click=${this.#t}
              .jslogContext=${"chrome-recorder.create-recording"}>
              ${Wt($t.createRecording)}
            </devtools-button>
          </div>
          <devtools-panel-feedback .data=${{feedbackUrl:Ms,quickStartUrl:Jp,quickStartLinkText:Wt($t.quickStart)}}>
          </devtools-panel-feedback>
          <div class="align-right">
            <devtools-feedback-button .data=${{feedbackUrl:Ms}}>
            </devtools-feedback-button>
          </div>
        </div>
      `,this.#e,{host:this})}}customElements.define("devtools-start-view",Qp);const ws="captureSelectors";class Sn extends Event{static eventName="selectorpicked";data;constructor(e){super(Sn.eventName,{bubbles:!0,composed:!0}),this.data=e}}class kn extends Event{static eventName="requestselectorattribute";send;constructor(e){super(kn.eventName,{bubbles:!0,composed:!0}),this.send=e}}class Ir{static get#e(){return xt.instance()}#t;#r;#i=new Pr;active=!1;constructor(e){this.#t=e}start=()=>this.#i.run(async()=>{this.active||(this.active=!0,this.#r=await new Promise((e,t)=>{const r=setTimeout(t,1e3);this.#t.dispatchEvent(new kn(s=>{clearTimeout(r),e(s)}))}),Ir.#e.observeTargets(this),this.#t.requestUpdate())});stop=()=>this.#i.run(async()=>{this.active&&(this.active=!1,Ir.#e.unobserveTargets(this),Ir.#e.targets().map(this.targetRemoved.bind(this)),this.#r=void 0,this.#t.requestUpdate())});toggle=()=>this.active?this.stop():this.start();#s=new Map;targetAdded(e){if(e.type()!==To.FRAME)return;let t=this.#s.get(e);t||(t=new Pr,this.#s.set(e,t)),t.run(async()=>{await this.#l(e),await this.#a(e)})}targetRemoved(e){const t=this.#s.get(e);t&&t.run(async()=>{try{await this.#c(e),await this.#u(e)}catch{}})}#n=e=>{if(e.data.name!==ws)return;const t=e.data.executionContextId,r=xt.instance().targets(),s=gp(r,t),n=mp(r,t);if(!s||!n)throw new Error(`No execution context found for the binding call + ${JSON.stringify(e.data)}`);const o=s.model(Xt);if(!o)throw new Error(`ResourceTreeModel instance is missing for the target: ${s.id()}`);const a=o.frameForId(n);if(!a)throw new Error("Frame is not found");this.#t.dispatchEvent(new Sn({...JSON.parse(e.data.payload),...Va(s,a)})),this.stop()};#o=new Map;async#a(e){const r=`${await Ha.get()};DevToolsRecorder.startSelectorPicker({getAccessibleName, getAccessibleRole}, ${JSON.stringify(this.#r?this.#r:void 0)}, ${gi})`,[{identifier:s}]=await Promise.all([e.pageAgent().invoke_addScriptToEvaluateOnNewDocument({source:r,worldName:St,includeCommandLineAPI:!0}),Ti(St,e,r)]);this.#o.set(e,s)}async#c(e){const t=this.#o.get(e);Yt(t),this.#o.delete(e),await e.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({identifier:t}),await Ti(St,e,"DevToolsRecorder.stopSelectorPicker()")}async#l(e){const t=e.model(Lt);Yt(t),t.addEventListener(Ss.BindingCalled,this.#n),await t.addBinding({name:ws,executionContextName:St})}async#u(e){await e.runtimeAgent().invoke_removeBinding({name:ws});const t=e.model(Lt);Yt(t),t.removeEventListener(Ss.BindingCalled,this.#n)}}const En=new CSSStyleSheet;En.replaceSync(`/*
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

.row {
  display: flex;
  flex-direction: row;
  color: var(--sys-color-token-property-special);
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  align-items: center;
  line-height: 18px;
  margin-top: 3px;
}

.row devtools-button {
  line-height: 1;
  margin-left: 0.5em;
}

.separator {
  margin-right: 0.5em;
  color: var(--sys-color-on-surface);
}

.padded {
  margin-left: 2em;
}

.padded.double {
  margin-left: 4em;
}

.selector-picker {
  width: 18px;
  height: 18px;
}

.inline-button {
  width: 18px;
  height: 18px;
  opacity: 0%;
  visibility: hidden;
  transition: opacity 200ms;
  flex-shrink: 0;
}

.row:focus-within .inline-button,
.row:hover .inline-button {
  opacity: 100%;
  visibility: visible;
}

.wrapped.row {
  flex-wrap: wrap;
}

.gap.row {
  gap: 5px;
}

.gap.row devtools-button {
  margin-left: 0;
}

.regular-font {
  font-family: inherit;
  font-size: inherit;
}

.no-margin {
  margin: 0;
}

.row-buttons {
  margin-top: 3px;
}

.error {
  margin: 3px 0 6px;
  padding: 8px 12px;
  background: var(--sys-color-error-container);
  color: var(--sys-color-error);
}

/*# sourceURL=stepEditor.css */
`);function $r(i,e="Assertion failed!"){if(!i)throw new Error(e)}const Gr=i=>{for(const e of Reflect.ownKeys(i)){const t=i[e];(t&&typeof t=="object"||typeof t=="function")&&Gr(t)}return Object.freeze(i)};class Cr{value;constructor(e){this.value=e}}class ee{value;constructor(e){this.value=e}}const vt=(i,e)=>{if(e instanceof ee){$r(Array.isArray(i),`Expected an array. Got ${typeof i}.`);const t=[...i],r=Object.keys(e.value).sort((s,n)=>Number(n)-Number(s));for(const s of r){const n=e.value[Number(s)];n===void 0?t.splice(Number(s),1):n instanceof Cr?t.splice(Number(s),0,n.value):t[Number(s)]=vt(t[s],n)}return Object.freeze(t)}if(typeof e=="object"&&!Array.isArray(e)){$r(!Array.isArray(i),"Expected an object. Got an array.");const t={...i},r=Object.keys(e);for(const s of r){const n=e[s];n===void 0?delete t[s]:t[s]=vt(t[s],n)}return Object.freeze(t)}return e};var Ut=function(i,e,t,r){var s=arguments.length,n=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const{html:ie,Decorators:Xp,Directives:Yp,LitElement:ec}=je,{customElement:tc,property:xn,state:rc}=Xp,{live:yt}=Yp,Zp=Object.freeze({string:i=>i.trim(),number:i=>{const e=parseFloat(i);return Number.isNaN(e)?0:e},boolean:i=>i.toLowerCase()==="true"}),So=Object.freeze({selectors:"string",offsetX:"number",offsetY:"number",target:"string",frame:"number",assertedEvents:"string",value:"string",key:"string",operator:"string",count:"number",expression:"string",x:"number",y:"number",url:"string",type:"string",timeout:"number",duration:"number",button:"string",deviceType:"string",width:"number",height:"number",deviceScaleFactor:"number",isMobile:"boolean",hasTouch:"boolean",isLandscape:"boolean",download:"number",upload:"number",latency:"number",name:"string",parameters:"string",visible:"boolean",properties:"string",attributes:"string"}),se=Gr({selectors:[[".cls"]],offsetX:1,offsetY:1,target:"main",frame:[0],assertedEvents:[{type:"navigation",url:"https://example.com",title:"Title"}],value:"Value",key:"Enter",operator:">=",count:1,expression:"true",x:0,y:0,url:"https://example.com",timeout:5e3,duration:50,deviceType:"mouse",button:"primary",type:"click",width:800,height:600,deviceScaleFactor:1,isMobile:!1,hasTouch:!1,isLandscape:!0,download:1e3,upload:1e3,latency:25,name:"customParam",parameters:"{}",properties:"{}",attributes:[{name:"attribute",value:"value"}],visible:!0}),Ls=Gr({[w.Click]:{required:["selectors","offsetX","offsetY"],optional:["assertedEvents","button","deviceType","duration","frame","target","timeout"]},[w.DoubleClick]:{required:["offsetX","offsetY","selectors"],optional:["assertedEvents","button","deviceType","frame","target","timeout"]},[w.Hover]:{required:["selectors"],optional:["assertedEvents","frame","target","timeout"]},[w.Change]:{required:["selectors","value"],optional:["assertedEvents","frame","target","timeout"]},[w.KeyDown]:{required:["key"],optional:["assertedEvents","target","timeout"]},[w.KeyUp]:{required:["key"],optional:["assertedEvents","target","timeout"]},[w.Scroll]:{required:[],optional:["assertedEvents","frame","target","timeout","x","y"]},[w.Close]:{required:[],optional:["assertedEvents","target","timeout"]},[w.Navigate]:{required:["url"],optional:["assertedEvents","target","timeout"]},[w.WaitForElement]:{required:["selectors"],optional:["assertedEvents","attributes","count","frame","operator","properties","target","timeout","visible"]},[w.WaitForExpression]:{required:["expression"],optional:["assertedEvents","frame","target","timeout"]},[w.CustomStep]:{required:["name","parameters"],optional:["assertedEvents","target","timeout"]},[w.EmulateNetworkConditions]:{required:["download","latency","upload"],optional:["assertedEvents","target","timeout"]},[w.SetViewport]:{required:["deviceScaleFactor","hasTouch","height","isLandscape","isMobile","width"],optional:["assertedEvents","target","timeout"]}}),_e={notSaved:"Not saved: {error}",addAttribute:"Add {attributeName}",deleteRow:"Delete row",selectorPicker:"Select an element in the page to update selectors",addFrameIndex:"Add frame index within the frame tree",removeFrameIndex:"Remove frame index",addSelectorPart:"Add a selector part",removeSelectorPart:"Remove a selector part",addSelector:"Add a selector",removeSelector:"Remove a selector",unknownActionType:"Unknown action type."},ef=et("panels/recorder/components/StepEditor.ts",_e),Fe=tt.bind(void 0,ef);class Cn extends Event{static eventName="stepedited";data;constructor(e){super(Cn.eventName,{bubbles:!0,composed:!0}),this.data=e}}const tf=i=>JSON.parse(JSON.stringify(i));class ti{static#e=new cp(()=>pr.connectPuppeteer(),({browser:e})=>pr.disconnectPuppeteer(e));static async default(e){const t={type:e},r=Ls[t.type];let s=Promise.resolve();for(const n of r.required)s=Promise.all([s,(async()=>Object.assign(t,{[n]:await this.defaultByAttribute(t,n)}))()]);return await s,Object.freeze(t)}static async defaultByAttribute(e,t){return this.#e.run(r=>{switch(t){case"assertedEvents":return vt(se.assertedEvents,new ee({0:{url:r.page.url()||se.assertedEvents[0].url}}));case"url":return r.page.url()||se.url;case"height":return r.page.evaluate(()=>visualViewport.height)||se.height;case"width":return r.page.evaluate(()=>visualViewport.width)||se.width;default:return se[t]}})}static fromStep(e){const t=structuredClone(e);for(const r of["parameters","properties"])r in e&&e[r]!==void 0&&(t[r]=JSON.stringify(e[r]));if("attributes"in e&&e.attributes){t.attributes=[];for(const[r,s]of Object.entries(e.attributes))t.attributes.push({name:r,value:s})}return"selectors"in e&&(t.selectors=e.selectors.map(r=>typeof r=="string"?[r]:[...r])),Gr(t)}static toStep(e){const t=structuredClone(e);for(const r of["parameters","properties"]){const s=e[r];s&&Object.assign(t,{[r]:JSON.parse(s)})}if(e.attributes)if(e.attributes.length!==0){const r={};for(const{name:s,value:n}of e.attributes)Object.assign(r,{[s]:n});Object.assign(t,{attributes:r})}else"attributes"in t&&delete t.attributes;if(e.selectors){const r=e.selectors.filter(s=>s.length>0).map(s=>s.length===1?s[0]:[...s]);r.length!==0?Object.assign(t,{selectors:r}):"selectors"in t&&delete t.selectors}return e.frame&&e.frame.length===0&&"frame"in t&&delete t.frame,tf(pp(t))}}let Os=class extends ec{static styles=[En];#e=new Ir(this);constructor(){super(),this.disabled=!1}#t=e=>{e.preventDefault(),e.stopPropagation(),this.#e.toggle()};disconnectedCallback(){super.disconnectedCallback(),this.#e.stop()}render(){if(!this.disabled)return ie`<devtools-button
      @click=${this.#t}
      .title=${Fe(_e.selectorPicker)}
      class="selector-picker"
      .size=${"SMALL"}
      .iconName=${"select-element"}
      .active=${this.#e.active}
      .variant=${"icon"}
      jslog=${Hs("selector-picker").track({click:!0})}
    ></devtools-button>`}};Ut([xn({type:Boolean})],Os.prototype,"disabled",void 0);Os=Ut([tc("devtools-recorder-selector-picker-button")],Os);let gr=class extends ec{static styles=[En];#e=new Set;constructor(){super(),this.state={type:w.WaitForElement},this.isTypeEditable=!0,this.disabled=!1}createRenderRoot(){const e=super.createRenderRoot();return e.addEventListener("keydown",this.#s),e}set step(e){this.state=Gr(ti.fromStep(e)),this.error=void 0}#t(e){try{this.dispatchEvent(new Cn(ti.toStep(e))),this.state=e}catch(t){this.error=t.message}}#r=e=>{e.preventDefault(),e.stopPropagation(),this.#t(vt(this.state,{target:e.data.target,frame:e.data.frame,selectors:e.data.selectors.map(t=>typeof t=="string"?[t]:t),offsetX:e.data.offsetX,offsetY:e.data.offsetY}))};#i=(e,t,r)=>s=>{s.preventDefault(),s.stopPropagation(),this.#t(vt(this.state,e)),this.#m(t),r&&J.recordingEdited(r)};#s=e=>{if($r(e instanceof KeyboardEvent),e.target instanceof Qi&&e.key==="Enter"){e.preventDefault(),e.stopPropagation();const t=this.renderRoot.querySelectorAll("devtools-suggestion-input"),r=[...t].findIndex(s=>s===e.target);r>=0&&r+1<t.length?t[r+1].focus():e.target.blur()}};#n=e=>t=>{if($r(t.target instanceof Qi),t.target.disabled)return;const r=So[e.attribute],s=Zp[r](t.target.value),n=e.from.bind(this)(s);n&&(this.#t(vt(this.state,n)),e.metric&&J.recordingEdited(e.metric))};#o=async e=>{if($r(e.target instanceof Qi),e.target.disabled)return;const t=e.target.value;if(t!==this.state.type){if(!Object.values(w).includes(t)){this.error=Fe(_e.unknownActionType);return}this.#t(await ti.default(t)),J.recordingEdited(9)}};#a=async e=>{e.preventDefault(),e.stopPropagation();const t=e.target.dataset.attribute;this.#t(vt(this.state,{[t]:await ti.defaultByAttribute(this.state,t)})),this.#m(`[data-attribute=${t}].attribute devtools-suggestion-input`)};#c(e){if(!this.disabled)return ie`
      <devtools-button
        title=${e.title}
        .size=${"SMALL"}
        .iconName=${e.iconName}
        .variant=${"icon"}
        jslog=${Ye(e.class).track({click:!0})}
        class="inline-button ${e.class}"
        @click=${e.onClick}
      ></devtools-button>
    `}#l(e){if(!(this.disabled||![...Ls[this.state.type].optional].includes(e)||this.disabled))return ie`<devtools-button
      .size=${"SMALL"}
      .iconName=${"bin"}
      .variant=${"icon"}
      .title=${Fe(_e.deleteRow)}
      class="inline-button delete-row"
      data-attribute=${e}
      jslog=${Ye("delete").track({click:!0})}
      @click=${s=>{s.preventDefault(),s.stopPropagation(),this.#t(vt(this.state,{[e]:void 0}))}}
    ></devtools-button>`}#u(e){return this.#e.add("type"),ie`<div class="row attribute" data-attribute="type" jslog=${Ue("type")}>
      <div>type<span class="separator">:</span></div>
      <devtools-suggestion-input
        .disabled=${!e||this.disabled}
        .options=${Object.values(w)}
        .placeholder=${se.type}
        .value=${yt(this.state.type)}
        @blur=${this.#o}
      ></devtools-suggestion-input>
    </div>`}#d(e){this.#e.add(e);const t=this.state[e]?.toString();if(t!==void 0)return ie`<div class="row attribute" data-attribute=${e} jslog=${Ue(Ct(e))}>
      <div>${e}<span class="separator">:</span></div>
      <devtools-suggestion-input
        .disabled=${this.disabled}
        .placeholder=${se[e].toString()}
        .value=${yt(t)}
        .mimeType=${(()=>{switch(e){case"expression":return"text/javascript";case"properties":return"application/json";default:return""}})()}
        @blur=${this.#n({attribute:e,from(r){if(this.state[e]!==void 0){switch(e){case"properties":J.recordingAssertion(2);break}return{[e]:r}}},metric:10})}
      ></devtools-suggestion-input>
      ${this.#l(e)}
    </div>`}#h(){if(this.#e.add("frame"),this.state.frame!==void 0)return ie`
      <div class="attribute" data-attribute="frame" jslog=${Ue("frame")}>
        <div class="row">
          <div>frame<span class="separator">:</span></div>
          ${this.#l("frame")}
        </div>
        ${this.state.frame.map((e,t,r)=>ie`
            <div class="padded row">
              <devtools-suggestion-input
                .disabled=${this.disabled}
                .placeholder=${se.frame[0].toString()}
                .value=${yt(e.toString())}
                data-path=${`frame.${t}`}
                @blur=${this.#n({attribute:"frame",from(s){if(this.state.frame?.[t]!==void 0)return{frame:new ee({[t]:s})}},metric:10})}
              ></devtools-suggestion-input>
              ${this.#c({class:"add-frame",title:Fe(_e.addFrameIndex),iconName:"plus",onClick:this.#i({frame:new ee({[t+1]:new Cr(se.frame[0])})},`devtools-suggestion-input[data-path="frame.${t+1}"]`,10)})}
              ${this.#c({class:"remove-frame",title:Fe(_e.removeFrameIndex),iconName:"minus",onClick:this.#i({frame:new ee({[t]:void 0})},`devtools-suggestion-input[data-path="frame.${Math.min(t,r.length-2)}"]`,10)})}
            </div>
          `)}
      </div>
    `}#p(){if(this.#e.add("selectors"),this.state.selectors!==void 0)return ie`<div class="attribute" data-attribute="selectors" jslog=${Ue("selectors")}>
      <div class="row">
        <div>selectors<span class="separator">:</span></div>
        <devtools-recorder-selector-picker-button
          @selectorpicked=${this.#r}
          .disabled=${this.disabled}
        ></devtools-recorder-selector-picker-button>
        ${this.#l("selectors")}
      </div>
      ${this.state.selectors.map((e,t,r)=>ie`<div class="padded row" data-selector-path=${t}>
            <div>selector #${t+1}<span class="separator">:</span></div>
            ${this.#c({class:"add-selector",title:Fe(_e.addSelector),iconName:"plus",onClick:this.#i({selectors:new ee({[t+1]:new Cr(structuredClone(se.selectors[0]))})},`devtools-suggestion-input[data-path="selectors.${t+1}.0"]`,4)})}
            ${this.#c({class:"remove-selector",title:Fe(_e.removeSelector),iconName:"minus",onClick:this.#i({selectors:new ee({[t]:void 0})},`devtools-suggestion-input[data-path="selectors.${Math.min(t,r.length-2)}.0"]`,5)})}
          </div>
          ${e.map((s,n,o)=>ie`<div
              class="double padded row"
              data-selector-path="${t}.${n}"
            >
              <devtools-suggestion-input
                .disabled=${this.disabled}
                .placeholder=${se.selectors[0][0]}
                .value=${yt(s)}
                data-path=${`selectors.${t}.${n}`}
                @blur=${this.#n({attribute:"selectors",from(a){if(this.state.selectors?.[t]?.[n]!==void 0)return{selectors:new ee({[t]:new ee({[n]:a})})}},metric:7})}
              ></devtools-suggestion-input>
              ${this.#c({class:"add-selector-part",title:Fe(_e.addSelectorPart),iconName:"plus",onClick:this.#i({selectors:new ee({[t]:new ee({[n+1]:new Cr(se.selectors[0][0])})})},`devtools-suggestion-input[data-path="selectors.${t}.${n+1}"]`,6)})}
              ${this.#c({class:"remove-selector-part",title:Fe(_e.removeSelectorPart),iconName:"minus",onClick:this.#i({selectors:new ee({[t]:new ee({[n]:void 0})})},`devtools-suggestion-input[data-path="selectors.${t}.${Math.min(n,o.length-2)}"]`,8)})}
            </div>`)}`)}
    </div>`}#f(){if(this.#e.add("assertedEvents"),this.state.assertedEvents!==void 0)return ie`<div class="attribute" data-attribute="assertedEvents" jslog=${Ue("asserted-events")}>
      <div class="row">
        <div>asserted events<span class="separator">:</span></div>
        ${this.#l("assertedEvents")}
      </div>
      ${this.state.assertedEvents.map((e,t)=>ie` <div class="padded row" jslog=${Ue("event-type")}>
            <div>type<span class="separator">:</span></div>
            <div>${e.type}</div>
          </div>
          <div class="padded row" jslog=${Ue("event-title")}>
            <div>title<span class="separator">:</span></div>
            <devtools-suggestion-input
              .disabled=${this.disabled}
              .placeholder=${se.assertedEvents[0].title}
              .value=${yt(e.title??"")}
              @blur=${this.#n({attribute:"assertedEvents",from(r){if(this.state.assertedEvents?.[t]?.title!==void 0)return{assertedEvents:new ee({[t]:{title:r}})}},metric:10})}
            ></devtools-suggestion-input>
          </div>
          <div class="padded row" jslog=${Ue("event-url")}>
            <div>url<span class="separator">:</span></div>
            <devtools-suggestion-input
              .disabled=${this.disabled}
              .placeholder=${se.assertedEvents[0].url}
              .value=${yt(e.url??"")}
              @blur=${this.#n({attribute:"url",from(r){if(this.state.assertedEvents?.[t]?.url!==void 0)return{assertedEvents:new ee({[t]:{url:r}})}},metric:10})}
            ></devtools-suggestion-input>
          </div>`)}
    </div> `}#g(){if(this.#e.add("attributes"),this.state.attributes!==void 0)return ie`<div class="attribute" data-attribute="attributes" jslog=${Ue("attributes")}>
      <div class="row">
        <div>attributes<span class="separator">:</span></div>
        ${this.#l("attributes")}
      </div>
      ${this.state.attributes.map(({name:e,value:t},r,s)=>ie`<div class="padded row" jslog=${Ue("attribute")}>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${se.attributes[0].name}
            .value=${yt(e)}
            data-path=${`attributes.${r}.name`}
            jslog=${Sc().track({change:!0})}
            @blur=${this.#n({attribute:"attributes",from(n){if(this.state.attributes?.[r]?.name!==void 0)return J.recordingAssertion(3),{attributes:new ee({[r]:{name:n}})}},metric:10})}
          ></devtools-suggestion-input>
          <span class="separator">:</span>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${se.attributes[0].value}
            .value=${yt(t)}
            data-path=${`attributes.${r}.value`}
            @blur=${this.#n({attribute:"attributes",from(n){if(this.state.attributes?.[r]?.value!==void 0)return J.recordingAssertion(3),{attributes:new ee({[r]:{value:n}})}},metric:10})}
          ></devtools-suggestion-input>
          ${this.#c({class:"add-attribute-assertion",title:Fe(_e.addSelectorPart),iconName:"plus",onClick:this.#i({attributes:new ee({[r+1]:new Cr((()=>{{const n=new Set(s.map(({name:l})=>l)),o=se.attributes[0];let a=o.name,c=0;for(;n.has(a);)++c,a=`${o.name}-${c}`;return{...o,name:a}}})())})},`devtools-suggestion-input[data-path="attributes.${r+1}.name"]`,10)})}
          ${this.#c({class:"remove-attribute-assertion",title:Fe(_e.removeSelectorPart),iconName:"minus",onClick:this.#i({attributes:new ee({[r]:void 0})},`devtools-suggestion-input[data-path="attributes.${Math.min(r,s.length-2)}.value"]`,10)})}
        </div>`)}
    </div>`}#y(){return[...Ls[this.state.type].optional].filter(t=>this.state[t]===void 0).map(t=>ie`<devtools-button
          .variant=${"outlined"}
          class="add-row"
          data-attribute=${t}
          jslog=${Ye(`add-${Ct(t)}`)}
          @click=${this.#a}
        >
          ${Fe(_e.addAttribute,{attributeName:t})}
        </devtools-button>`)}#m=e=>{this.updateComplete.then(()=>{this.renderRoot.querySelector(e)?.focus()})};render(){this.#e=new Set;const e=ie`
      <div class="wrapper" jslog=${kc("step-editor")}>
        ${this.#u(this.isTypeEditable)} ${this.#d("target")}
        ${this.#h()} ${this.#p()}
        ${this.#d("deviceType")} ${this.#d("button")}
        ${this.#d("url")} ${this.#d("x")}
        ${this.#d("y")} ${this.#d("offsetX")}
        ${this.#d("offsetY")} ${this.#d("value")}
        ${this.#d("key")} ${this.#d("operator")}
        ${this.#d("count")} ${this.#d("expression")}
        ${this.#d("duration")} ${this.#f()}
        ${this.#d("timeout")} ${this.#d("width")}
        ${this.#d("height")} ${this.#d("deviceScaleFactor")}
        ${this.#d("isMobile")} ${this.#d("hasTouch")}
        ${this.#d("isLandscape")} ${this.#d("download")}
        ${this.#d("upload")} ${this.#d("latency")}
        ${this.#d("name")} ${this.#d("parameters")}
        ${this.#d("visible")} ${this.#d("properties")}
        ${this.#g()}
        ${this.error?ie`
              <div class="error">
                ${Fe(_e.notSaved,{error:this.error})}
              </div>
            `:void 0}
        ${this.disabled?void 0:ie`<div
              class="row-buttons wrapped gap row regular-font no-margin"
            >
              ${this.#y()}
            </div>`}
      </div>
    `;for(const t of Object.keys(So))if(!this.#e.has(t))throw new Error(`The editable attribute ${t} does not have UI`);return e}};Ut([rc()],gr.prototype,"state",void 0);Ut([rc()],gr.prototype,"error",void 0);Ut([xn({type:Boolean})],gr.prototype,"isTypeEditable",void 0);Ut([xn({type:Boolean})],gr.prototype,"disabled",void 0);gr=Ut([tc("devtools-recorder-step-editor")],gr);const ic=new CSSStyleSheet;ic.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.timeline-section {
  position: relative;
  padding: 16px 0 16px 40px;
  margin-left: 8px;

  --override-color-recording-successful-text: #36a854;
  --override-color-recording-successful-background: #e6f4ea;
}

.overlay {
  position: absolute;
  width: 100vw;
  height: 100%;
  /* Offset of 32px for spacing and 80px for screenshot */
  left: calc(-32px - 80px);
  top: 0;
  z-index: -1;
  pointer-events: none;
}

/* stylelint-disable-next-line at-rule-no-unknown */
@container (max-width: 400px) {
  .overlay {
    /* Offset of 32px for spacing */
    left: -32px;
  }
}

:hover .overlay {
  background: var(--sys-color-state-hover-on-subtle);
}

.is-selected .overlay {
  background: var(--sys-color-tonal-container);
}

:host-context(.is-stopped) .overlay {
  background: var(--sys-color-state-ripple-primary);
  outline: 1px solid var(--sys-color-state-focus-ring);
  z-index: 4;
}

.is-start-of-group {
  padding-top: 28px;
}

.is-end-of-group {
  padding-bottom: 24px;
}

.icon {
  position: absolute;
  left: 4px;
  transform: translateX(-50%);
  z-index: 2;
}

.bar {
  position: absolute;
  left: 4px;
  display: block;
  transform: translateX(-50%);
  top: 18px;
  height: calc(100% + 8px);
  z-index: 1; /* We want this to be below of \\'.overlay\\' for stopped case */
}

.bar .background {
  fill: var(--sys-color-state-hover-on-subtle);
}

.bar .line {
  fill: var(--sys-color-primary);
}

.is-first-section .bar {
  top: 32px;
  height: calc(100% - 8px);
  display: none;
}

.is-first-section:not(.is-last-section) .bar {
  display: block;
}

.is-last-section .bar .line {
  display: none;
}

.is-last-section .bar .background {
  display: none;
}

:host-context(.is-error) .bar .line {
  fill: var(--sys-color-error);
}

:host-context(.is-error) .bar .background {
  fill: var(--sys-color-error-container);
}

:host-context(.was-successful) .bar .background {
  animation: flash-background 2s;
}

:host-context(.was-successful) .bar .line {
  animation: flash-line 2s;
}

@keyframes flash-background {
  25% {
    fill: var(--override-color-recording-successful-background);
  }

  75% {
    fill: var(--override-color-recording-successful-background);
  }
}

@keyframes flash-line {
  25% {
    fill: var(--override-color-recording-successful-text);
  }

  75% {
    fill: var(--override-color-recording-successful-text);
  }
}

/*# sourceURL=timelineSection.css */
`);const{html:rf}=je;class sf extends HTMLElement{#e=!1;#t=!1;#r=!1;#i=!1;#s=!1;constructor(){super();const e=this.attachShadow({mode:"open"});e.adoptedStyleSheets=[ic]}set data(e){this.#r=e.isFirstSection,this.#i=e.isLastSection,this.#e=e.isEndOfGroup,this.#t=e.isStartOfGroup,this.#s=e.isSelected,this.#n()}connectedCallback(){this.#n()}#n(){const e={"timeline-section":!0,"is-end-of-group":this.#e,"is-start-of-group":this.#t,"is-first-section":this.#r,"is-last-section":this.#i,"is-selected":this.#s};lt(rf`
      <div class=${Gt(e)}>
        <div class="overlay"></div>
        <div class="icon"><slot name="icon"></slot></div>
        <svg width="24" height="100%" class="bar">
          <rect class="line" x="7" y="0" width="2" height="100%" />
        </svg>
        <slot></slot>
      </div>
    `,this.shadowRoot,{host:this})}}customElements.define("devtools-timeline-section",sf);const sc=new CSSStyleSheet;sc.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.title-container {
  /* 18px for 3 dot menu icon */
  max-width: calc(100% - 18px);
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
  display: flex;
  flex-direction: row;
  gap: 3px;
  outline-offset: 3px;
}

.action {
  display: flex;
  align-items: flex-start;
}

.title {
  flex: 1;
  min-width: 0;
}

.is-start-of-group .title {
  font-weight: bold;
}

.error-icon {
  display: none;
}

.breakpoint-icon {
  visibility: hidden;
  cursor: pointer;
  opacity: 0%;
  fill: var(--sys-color-primary);
  stroke: #1a73e8; /* stylelint-disable-line plugin/use_theme_colors */
  transform: translate(-1.92px, -3px);
}

.circle-icon {
  fill: var(--sys-color-primary);
  stroke: var(--sys-color-cdt-base-container);
  stroke-width: 4px;
  r: 5px;
  cx: 8px;
  cy: 8px;
}

.is-start-of-group .circle-icon {
  r: 7px;
  fill: var(--sys-color-cdt-base-container);
  stroke: var(--sys-color-primary);
  stroke-width: 2px;
}

.step.is-success .circle-icon {
  fill: var(--sys-color-primary);
  stroke: var(--sys-color-primary);
}

.step.is-current .circle-icon {
  stroke-dasharray: 24 10;
  animation: rotate 1s linear infinite;
  fill: var(--sys-color-cdt-base-container);
  stroke: var(--sys-color-primary);
  stroke-width: 2px;
}

.error {
  margin: 16px 0 0;
  padding: 8px;
  background: var(--sys-color-error-container);
  color: var(--sys-color-error);
  position: relative;
}

@keyframes rotate {
  0% {
    transform: translate(8px, 8px) rotate(0) translate(-8px, -8px);
  }

  100% {
    transform: translate(8px, 8px) rotate(360deg) translate(-8px, -8px);
  }
}

.step.is-error .circle-icon {
  fill: var(--sys-color-error);
  stroke: var(--sys-color-error);
}

.step.is-error .error-icon {
  display: block;
  transform: translate(4px, 4px);
}

:host-context(.was-successful) .circle-icon {
  animation: flash-circle 2s;
}

:host-context(.was-successful) .breakpoint-icon {
  animation: flash-breakpoint-icon 2s;
}

@keyframes flash-circle {
  25% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }

  75% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }
}

@keyframes flash-breakpoint-icon {
  25% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }

  75% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }
}

.chevron {
  width: 14px;
  height: 14px;
  transition: 200ms;
  position: absolute;
  top: 18px;
  left: 24px;
  transform: rotate(-90deg);
  color: var(--sys-color-on-surface);
}

.expanded .chevron {
  transform: rotate(0deg);
}

.is-start-of-group .chevron {
  top: 34px;
}

.details {
  display: none;
  margin-top: 8px;
  position: relative;
}

.expanded .details {
  display: block;
}

.step-details {
  overflow: auto;
}

devtools-recorder-step-editor {
  border: 1px solid var(--sys-color-neutral-outline);
  padding: 3px 6px 6px;
  margin-left: -6px;
  border-radius: 3px;
}

devtools-recorder-step-editor:hover {
  border: 1px solid var(--sys-color-neutral-outline);
}

devtools-recorder-step-editor.is-selected {
  background-color: color-mix(in sRGB, var(--sys-color-tonal-container), var(--sys-color-cdt-base-container) 50%);
  border: 1px solid var(--sys-color-tonal-outline);
}

.summary {
  display: flex;
  flex-flow: row nowrap;
}

.filler {
  flex-grow: 1;
}

.subtitle {
  font-weight: normal;
  color: var(--sys-color-on-surface-subtle);
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main-title {
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.step-actions {
  border: none;
  border-radius: 0;
  height: 24px;

  --override-select-menu-show-button-border-radius: 0;
  --override-select-menu-show-button-outline: none;
  --override-select-menu-show-button-padding: 0;
}

.step.has-breakpoint .circle-icon {
  visibility: hidden;
}

.step:not(.is-start-of-group).has-breakpoint .breakpoint-icon {
  visibility: visible;
  opacity: 100%;
}

.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .circle-icon {
  transition: opacity 0.2s;
  opacity: 0%;
}

.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .error-icon {
  visibility: hidden;
}

.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .breakpoint-icon {
  transition: opacity 0.2s;
  visibility: visible;
  opacity: 50%;
}

/*# sourceURL=stepView.css */
`);const{html:At}=je,M={setViewportClickTitle:"Set viewport",customStepTitle:"Custom step",clickStepTitle:"Click",doubleClickStepTitle:"Double click",hoverStepTitle:"Hover",emulateNetworkConditionsStepTitle:"Emulate network conditions",changeStepTitle:"Change",closeStepTitle:"Close",scrollStepTitle:"Scroll",keyUpStepTitle:"Key up",navigateStepTitle:"Navigate",keyDownStepTitle:"Key down",waitForElementStepTitle:"Wait for element",waitForExpressionStepTitle:"Wait for expression",elementRoleButton:"Button",elementRoleInput:"Input",elementRoleFallback:"Element",addStepBefore:"Add step before",addStepAfter:"Add step after",removeStep:"Remove step",openStepActions:"Open step actions",addBreakpoint:"Add breakpoint",removeBreakpoint:"Remove breakpoint",copyAs:"Copy as",stepManagement:"Manage steps",breakpoints:"Breakpoints"},nf=et("panels/recorder/components/StepView.ts",M),L=tt.bind(void 0,nf);class Tn extends Event{static eventName="copystep";step;constructor(e){super(Tn.eventName,{bubbles:!0,composed:!0}),this.step=e}}class _n extends Event{static eventName="stepchanged";currentStep;newStep;constructor(e,t){super(_n.eventName,{bubbles:!0,composed:!0}),this.currentStep=e,this.newStep=t}}class Ri extends Event{static eventName="addstep";position;stepOrSection;constructor(e,t){super(Ri.eventName,{bubbles:!0,composed:!0}),this.stepOrSection=e,this.position=t}}class Rn extends Event{static eventName="removestep";step;constructor(e){super(Rn.eventName,{bubbles:!0,composed:!0}),this.step=e}}class Ii extends Event{static eventName="addbreakpoint";index;constructor(e){super(Ii.eventName,{bubbles:!0,composed:!0}),this.index=e}}class $i extends Event{static eventName="removebreakpoint";index;constructor(e){super($i.eventName,{bubbles:!0,composed:!0}),this.index=e}}const wt="copy-step-as-";function of(i){if(i.section)return i.section.title?i.section.title:At`<span class="fallback">(No Title)</span>`;if(!i.step)throw new Error("Missing both step and section");switch(i.step.type){case w.CustomStep:return L(M.customStepTitle);case w.SetViewport:return L(M.setViewportClickTitle);case w.Click:return L(M.clickStepTitle);case w.DoubleClick:return L(M.doubleClickStepTitle);case w.Hover:return L(M.hoverStepTitle);case w.EmulateNetworkConditions:return L(M.emulateNetworkConditionsStepTitle);case w.Change:return L(M.changeStepTitle);case w.Close:return L(M.closeStepTitle);case w.Scroll:return L(M.scrollStepTitle);case w.KeyUp:return L(M.keyUpStepTitle);case w.KeyDown:return L(M.keyDownStepTitle);case w.WaitForElement:return L(M.waitForElementStepTitle);case w.WaitForExpression:return L(M.waitForExpressionStepTitle);case w.Navigate:return L(M.navigateStepTitle)}}function af(i){return""}function cf(i){return""}function lf(i){return At`
    <devtools-button
      class="step-actions"
      title=${L(M.openStepActions)}
      aria-label=${L(M.openStepActions)}
      @click=${i.onStepContextMenu}
      @keydown=${e=>{e.stopPropagation()}}
      jslog=${Es("step-actions").track({click:!0})}
      .data=${{variant:"icon",iconName:"dots-vertical",title:L(M.openStepActions)}}
    ></devtools-button>
  `}function df(i,e,t){if(!i.step&&!i.section)return;const r={step:!0,expanded:i.showDetails,"is-success":i.state==="success","is-current":i.state==="current","is-outstanding":i.state==="outstanding","is-error":i.state==="error","is-stopped":i.state==="stopped","is-start-of-group":i.isStartOfGroup,"is-first-section":i.isFirstSection,"has-breakpoint":i.hasBreakpoint},s=!!i.step,n=of({step:i.step,section:i.section}),o=i.step?af():cf();lt(At`
    <devtools-timeline-section .data=${{isFirstSection:i.isFirstSection,isLastSection:i.isLastSection,isStartOfGroup:i.isStartOfGroup,isEndOfGroup:i.isEndOfGroup,isSelected:i.isSelected}} @contextmenu=${i.onStepContextMenu} data-step-index=${i.stepIndex} data-section-index=${i.sectionIndex} class=${Gt(r)}>
      <svg slot="icon" width="24" height="24" height="100%" class="icon">
        <circle class="circle-icon"/>
        <g class="error-icon">
          <path d="M1.5 1.5L6.5 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.5 6.5L6.5 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <path @click=${i.onBreakpointClick} jslog=${Ye("breakpoint").track({click:!0})} class="breakpoint-icon" d="M2.5 5.5H17.7098L21.4241 12L17.7098 18.5H2.5V5.5Z"/>
      </svg>
      <div class="summary">
        <div class="title-container ${s?"action":""}"
          @click=${s&&i.toggleShowDetails}
          @keydown=${s&&i.onToggleShowDetailsKeydown}
          tabindex="0"
          jslog=${Cc().track({click:!0})}
          aria-role=${s?"button":""}
          aria-label=${s?"Show details for step":""}
        >
          ${s?At`<devtools-icon
                  class="chevron"
                  jslog=${Tc().track({click:!0})}
                  name="triangle-down">
                </devtools-icon>`:""}
          <div class="title">
            <div class="main-title" title=${n}>${n}</div>
            <div class="subtitle" title=${o}>${o}</div>
          </div>
        </div>
        <div class="filler"></div>
        ${lf(i)}
      </div>
      <div class="details">
        ${i.step&&At`<devtools-recorder-step-editor
          class=${i.isSelected?"is-selected":""}
          .step=${i.step}
          .disabled=${i.isPlaying}
          @stepedited=${i.stepEdited}>
        </devtools-recorder-step-editor>`}
        ${i.section?.causingStep&&At`<devtools-recorder-step-editor
          .step=${i.section.causingStep}
          .isTypeEditable=${!1}
          .disabled=${i.isPlaying}
          @stepedited=${i.stepEdited}>
        </devtools-recorder-step-editor>`}
      </div>
      ${i.error&&At`
        <div class="error" role="alert">
          ${i.error.message}
        </div>
      `}
    </devtools-timeline-section>
  `,t)}class uf extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=new IntersectionObserver(e=>{this.#r.isVisible=e[0].isIntersecting});#r={state:"default",showDetails:!1,isEndOfGroup:!1,isStartOfGroup:!1,stepIndex:0,sectionIndex:0,isFirstSection:!1,isLastSection:!1,isRecording:!1,isPlaying:!1,isVisible:!1,hasBreakpoint:!1,removable:!0,builtInConverters:[],extensionConverters:[],isSelected:!1,recorderSettings:void 0,actions:[],stepEdited:this.#o.bind(this),onBreakpointClick:this.#c.bind(this),handleStepAction:this.#a.bind(this),toggleShowDetails:this.#s.bind(this),onToggleShowDetailsKeydown:this.#n.bind(this),onStepContextMenu:this.#u.bind(this)};#i=df;constructor(e){super(),e&&(this.#i=e),this.setAttribute("jslog",`${Hr("step-view")}`)}set data(e){const t=this.#r.state;this.#r.step=e.step,this.#r.section=e.section,this.#r.state=e.state,this.#r.error=e.error,this.#r.isEndOfGroup=e.isEndOfGroup,this.#r.isStartOfGroup=e.isStartOfGroup,this.#r.stepIndex=e.stepIndex,this.#r.sectionIndex=e.sectionIndex,this.#r.isFirstSection=e.isFirstSection,this.#r.isLastSection=e.isLastSection,this.#r.isRecording=e.isRecording,this.#r.isPlaying=e.isPlaying,this.#r.hasBreakpoint=e.hasBreakpoint,this.#r.removable=e.removable,this.#r.builtInConverters=e.builtInConverters,this.#r.extensionConverters=e.extensionConverters,this.#r.isSelected=e.isSelected,this.#r.recorderSettings=e.recorderSettings,this.#r.actions=this.#l(),this.#d(),this.#r.state!==t&&this.#r.state==="current"&&!this.#r.isVisible&&this.scrollIntoView()}get step(){return this.#r.step}get section(){return this.#r.section}connectedCallback(){this.#e.adoptedStyleSheets=[sc],this.#t.observe(this),this.#d()}disconnectedCallback(){this.#t.unobserve(this)}#s(){this.#r.showDetails=!this.#r.showDetails,this.#d()}#n(e){const t=e;(t.key==="Enter"||t.key===" ")&&(this.#s(),e.stopPropagation(),e.preventDefault())}#o(e){const t=this.#r.step||this.#r.section?.causingStep;if(!t)throw new Error("Expected step.");this.dispatchEvent(new _n(t,e.data))}#a(e){switch(e.itemValue){case"add-step-before":{const t=this.#r.step||this.#r.section;if(!t)throw new Error("Expected step or section.");this.dispatchEvent(new Ri(t,"before"));break}case"add-step-after":{const t=this.#r.step||this.#r.section;if(!t)throw new Error("Expected step or section.");this.dispatchEvent(new Ri(t,"after"));break}case"remove-step":{const t=this.#r.section?.causingStep;if(!this.#r.step&&!t)throw new Error("Expected step.");this.dispatchEvent(new Rn(this.#r.step||t));break}case"add-breakpoint":{if(!this.#r.step)throw new Error("Expected step");this.dispatchEvent(new Ii(this.#r.stepIndex));break}case"remove-breakpoint":{if(!this.#r.step)throw new Error("Expected step");this.dispatchEvent(new $i(this.#r.stepIndex));break}default:{const t=e.itemValue;if(!t.startsWith(wt))throw new Error("Unknown step action.");const r=this.#r.step||this.#r.section?.causingStep;if(!r)throw new Error("Step not found.");const s=t.substring(wt.length);this.#r.recorderSettings&&(this.#r.recorderSettings.preferredCopyFormat=s),this.dispatchEvent(new Tn(structuredClone(r)))}}}#c(){this.#r.hasBreakpoint?this.dispatchEvent(new $i(this.#r.stepIndex)):this.dispatchEvent(new Ii(this.#r.stepIndex)),this.#d()}#l=()=>{const e=[];if(this.#r.isPlaying||(this.#r.step&&e.push({id:"add-step-before",label:L(M.addStepBefore),group:"stepManagement",groupTitle:L(M.stepManagement)}),e.push({id:"add-step-after",label:L(M.addStepAfter),group:"stepManagement",groupTitle:L(M.stepManagement)}),this.#r.removable&&e.push({id:"remove-step",group:"stepManagement",groupTitle:L(M.stepManagement),label:L(M.removeStep)})),this.#r.step&&!this.#r.isRecording&&(this.#r.hasBreakpoint?e.push({id:"remove-breakpoint",label:L(M.removeBreakpoint),group:"breakPointManagement",groupTitle:L(M.breakpoints)}):e.push({id:"add-breakpoint",label:L(M.addBreakpoint),group:"breakPointManagement",groupTitle:L(M.breakpoints)})),this.#r.step){for(const t of this.#r.builtInConverters||[])e.push({id:wt+Ct(t.getId()),label:t.getFormatName(),group:"copy",groupTitle:L(M.copyAs)});for(const t of this.#r.extensionConverters||[])e.push({id:wt+Ct(t.getId()),label:t.getFormatName(),group:"copy",groupTitle:L(M.copyAs),jslogContext:wt+"extension"})}return e};#u(e){const t=e.target instanceof Ec?e.target:void 0,r=new xc(e,{x:t?.getBoundingClientRect().left,y:t?.getBoundingClientRect().bottom}),s=this.#l(),n=s.filter(c=>c.id.startsWith(wt)),o=s.filter(c=>!c.id.startsWith(wt));for(const c of o)r.section(c.group).appendItem(c.label,()=>{this.#a(new Ji(c.id))},{jslogContext:c.id});const a=n.find(c=>c.id===wt+this.#r.recorderSettings?.preferredCopyFormat);if(a&&r.section("copy").appendItem(a.label,()=>{this.#a(new Ji(a.id))},{jslogContext:a.id}),n.length){const c=r.section("copy").appendSubMenuItem(L(M.copyAs),!1,"copy");for(const l of n)l!==a&&c.section(l.group).appendItem(l.label,()=>{this.#a(new Ji(l.id))},{jslogContext:l.id})}r.show()}#d(){const e={};this.#i(this.#r,e,this.#e)}}customElements.define("devtools-step-view",uf);const nc="extension_";class hf{#e;#t;constructor(e,t){this.#e=e,this.#t=t}getId(){return nc+this.#e}getFormatName(){return this.#t.getName()}getMediaType(){return this.#t.getMediaType()}getFilename(e){const t=this.#r(this.#t.getMediaType());return`${e.title}${t}`}async stringify(e){const t=await this.#t.stringify(e),r=Kr(t);return[Wr(t),r]}async stringifyStep(e){return await this.#t.stringifyStep(e)}#r(e){switch(e){case"application/json":return".json";case"application/javascript":case"text/javascript":return".js";case"application/typescript":case"text/typescript":return".ts";default:return""}}}class pf{#e;constructor(e){this.#e=e}getId(){return"json"}getFormatName(){return"JSON"}getFilename(e){return`${e.title}.json`}async stringify(e){const t=await Fi(e,{extension:new Mn,indentation:this.#e}),r=Kr(t);return[Wr(t),r]}async stringifyStep(e){return await Ni(e,{extension:new Mn,indentation:this.#e})}getMediaType(){return"application/json"}}class ff{#e;constructor(e){this.#e=e}getId(){return"lighthouse"}getFormatName(){return"Puppeteer (including Lighthouse analysis)"}getFilename(e){return`${e.title}.js`}async stringify(e){const t=await Fi(e,{extension:new Ol,indentation:this.#e}),r=Kr(t);return[Wr(t),r]}async stringifyStep(e){return await Ni(e,{indentation:this.#e})}getMediaType(){return"text/javascript"}}class oc{#e;#t;constructor(e){this.#e=e,this.#t=this.createExtension()}getId(){return"puppeteer"}createExtension(){return new Vr}getFormatName(){return"Puppeteer"}getFilename(e){return`${e.title}.js`}async stringify(e){const t=await Fi(e,{indentation:this.#e,extension:this.#t}),r=Kr(t);return[Wr(t),r]}async stringifyStep(e){return await Ni(e,{indentation:this.#e,extension:this.#t})}getMediaType(){return"text/javascript"}}class gf extends oc{getId(){return"puppeteer-firefox"}createExtension(){return new Vr("firefox")}getFormatName(){return"Puppeteer (for Firefox)"}}class mf{#e;constructor(e){this.#e=e}getId(){return"@puppeteer/replay"}getFormatName(){return"@puppeteer/replay"}getFilename(e){return`${e.title}.js`}async stringify(e){const t=await Fi(e,{extension:new qn,indentation:this.#e}),r=Kr(t);return[Wr(t),r]}async stringifyStep(e){return await Ni(e,{extension:new qn})}getMediaType(){return"text/javascript"}}const ac=new CSSStyleSheet;ac.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

*:focus,
*:focus-visible {
  outline: none;
}

:host {
  overflow-x: auto;
}

:host,
devtools-recording-view,
devtools-create-recording-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  background-color: var(--sys-color-cdt-base-container);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 0 5px;
  min-height: 29px;
  max-height: 29px;
  gap: 3px;
}

.separator {
  background-color: var(--sys-color-divider);
  width: 1px;
  height: 17px;
  margin: 0;
}

select {
  border-radius: 2px;
  border: 1px solid transparent;
  height: 24px;
  max-width: 180px;
  min-width: 140px;
  padding: 0 5px;
  position: relative;
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  text-overflow: ellipsis;
}

select:disabled {
  color: var(--sys-color-state-disabled);
}

select:not([disabled]):hover,
select:not([disabled]):focus-visible,
select:not([disabled]):active {
  background-color: var(--sys-color-state-hover-on-subtle);
}

select:not([disabled]):focus-visible {
  box-shadow: 0 0 0 2px var(--sys-color-state-focus-ring);
}

select option {
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-on-surface);
}

devtools-menu {
  width: 0;
  height: 0;
  position: absolute;
}

devtools-recording-list-view {
  overflow: auto;
}

.error {
  color: var(--sys-color-error);
  border: 1px solid var(--sys-color-error);
  background-color: var(--sys-color-error-container);
  padding: 4px;
}

.feedback {
  margin-left: auto;
  margin-right: 4px;
}

.feedback .x-link {
  letter-spacing: 0.03em;
  text-decoration-line: underline;
  font-size: 9px;
  line-height: 16px;
  color: var(--sys-color-on-surface-subtle);
  outline-offset: 3px;
}

.feedback .x-link:focus-visible {
  outline: -webkit-focus-ring-color auto 1px;
}

devtools-shortcut-dialog {
  padding-right: 6px;
}

/*# sourceURL=recorderController.css */
`);class Ki extends Event{static eventName="replayfinished";constructor(){super(Ki.eventName,{bubbles:!0,composed:!0})}}class qr extends Event{recording;static eventName="recordingstatechanged";constructor(e){super(qr.eventName,{bubbles:!0,composed:!0}),this.recording=e}}const ng=Object.freeze(Object.defineProperty({__proto__:null,RecordingStateChangedEvent:qr,ReplayFinishedEvent:Ki},Symbol.toStringTag,{value:"Module"}));var le=function(i,e,t,r){var s=arguments.length,n=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const{html:nt,Decorators:yf,LitElement:wf}=je,{customElement:vf,state:ve}=yf,he={createRecording:"Create a new recording",importRecording:"Import recording",deleteRecording:"Delete recording",noRecordings:"No recordings",numberOfRecordings:"recording(s)",continueReplay:"Continue",stepOverReplay:"Execute one step",exportRecording:"Export",startStopRecording:"Start/Stop recording",replayRecording:"Replay recording",copyShortcut:"Copy recording or selected step",toggleCode:"Toggle code view",export:"Export",exportViaExtensions:"Export via extensions",getExtensions:"Get extensions…",sendFeedback:"Send feedback"},bf=et("panels/recorder/RecorderController.ts",he),ke=tt.bind(void 0,bf),ko="get-extensions-link",Sf="https://goo.gle/recorder-extension-list",kf={json:2,"@puppeteer/replay":3,puppeteer:1,"puppeteer-firefox":1,lighthouse:5};let Y=class extends wf{static styles=[ac];#e=ln.instance();#t=Rr.instance();#r=!0;#i={isPlaying:!1,isPausedOnBreakpoint:!1};#s;#n;#o=new Set;#a;#c=new ql;#l=new Hl;constructor(){super(),this.isRecording=!1,this.isToggling=!1,this.exportMenuExpanded=!1,this.currentPage="StartPage",this.#e.getRecordings().length&&this.#f("AllRecordingsPage");const e=ot.instance().moduleSetting("text-editor-indent").get();this.#a=Object.freeze([new pf(e),new mf(e),new oc(e),new gf(e),new ff(e)]);const t=or.instance();this.#u(t.extensions()),t.addEventListener("extensionsUpdated",r=>{this.#u(r.data)}),this.addEventListener("setrecording",r=>this.#k(r))}disconnectedCallback(){super.disconnectedCallback(),this.currentRecordingSession&&this.currentRecordingSession.stop()}#u(e){this.extensionConverters=e.filter(t=>t.getCapabilities().includes("export")).map((t,r)=>new hf(r,t)),this.replayExtensions=e.filter(t=>t.getCapabilities().includes("replay"))}setIsRecordingStateForTesting(e){this.isRecording=e}setRecordingStateForTesting(e){this.#i.isPlaying=e.isPlaying,this.#i.isPausedOnBreakpoint=e.isPausedOnBreakpoint}setCurrentPageForTesting(e){this.#f(e)}getCurrentPageForTesting(){return this.currentPage}getCurrentRecordingForTesting(){return this.currentRecording}getStepBreakpointIndexesForTesting(){return[...this.#o.values()]}#d(){this.importError=void 0}async#h(e){const t=new Ac,r=new _c(e,1e7);if(!await r.read(t))throw r.error();let n;try{n=go(JSON.parse(t.data()))}catch(o){this.importError=o;return}this.#p(await this.#e.saveRecording(n)),this.#f("RecordingPage"),this.#d()}setCurrentRecordingForTesting(e){this.#p(e)}getSectionsForTesting(){return this.sections}#p(e,t={}){const{keepBreakpoints:r=!1,updateSession:s=!1}=t;this.recordingPlayer?.abort(),this.currentStep=void 0,this.recordingError=void 0,this.lastReplayResult=void 0,this.recordingPlayer=void 0,this.#i.isPlaying=!1,this.#i.isPausedOnBreakpoint=!1,this.#o=r?this.#o:new Set,e?(this.currentRecording=e,this.sections=xp(e.flow.steps),this.settings=this.#g(e.flow),s&&this.currentRecordingSession&&this.currentRecordingSession.overwriteUserFlow(e.flow)):(this.currentRecording=void 0,this.sections=void 0,this.settings=void 0),this.#b()}#f(e){e!==this.currentPage&&(this.previousPage=this.currentPage,this.currentPage=e)}#g(e){const t=e.steps,r=t.findIndex(n=>n.type==="navigate"),s={timeout:e.timeout};for(let n=r-1;n>=0;n--){const o=t[n];if(!s.viewportSettings&&o.type==="setViewport"&&(s.viewportSettings=o),!s.networkConditionsSettings&&o.type==="emulateNetworkConditions"){s.networkConditionsSettings={...o};for(const a of[$o,Po,Ao,Fo])Rc({...a,title:a.i18nTitleKey||""},{...o,title:a.i18nTitleKey||""})&&(s.networkConditionsSettings.title=a.title instanceof Function?a.title():a.title,s.networkConditionsSettings.i18nTitleKey=a.i18nTitleKey)}}return s}#y(){const e=xt.instance().primaryPageTarget();if(!e)throw new Error("Missing main page target");return e}#m(e){if(!this.sections)return null;for(const t of this.sections)if(t.steps.indexOf(e)!==-1)return t;return null}#b(){if(!this.sections||!this.currentRecording)return;const e=this.currentRecording.storageName;for(let t=0;t<this.sections.length;t++){const r=this.#t.getScreenshotForSection(e,t);this.sections[t].screenshot=r||void 0}this.requestUpdate()}#v(){this.recordingPlayer?.abort()}async#S(e){if(!this.currentRecording||!this.#r)return;const r=ri.instance().once("showViewRequested");e.replay(this.currentRecording.flow);const s=await r;this.viewDescriptor=s,J.recordingReplayStarted(3)}async#w(e){if(!this.currentRecording||!this.#r)return;if(this.viewDescriptor&&(this.viewDescriptor=void 0),e.data.extension)return this.#S(e.data.extension);J.recordingReplayStarted(e.data.targetPanel!=="chrome-recorder"?2:1),this.#i.isPlaying=!0,this.currentStep=void 0,this.recordingError=void 0,this.lastReplayResult=void 0;const t=this.currentRecording;this.#d(),await this.#E(),this.recordingPlayer=new pr(this.currentRecording.flow,{speed:e.data.speed,breakpointIndexes:this.#o});const r=e.data.targetPanel==="timeline",s=new Set;this.recordingPlayer.addEventListener("Step",async({data:{step:c,resolve:l}})=>{this.currentStep=c;const d=this.#m(c);if(this.sections&&d&&!s.has(d)){s.add(d);const h=this.sections.indexOf(d),p=await wo();d.screenshot=p,Rr.instance().storeScreenshotForSection(t.storageName,h,p)}l()}),this.recordingPlayer.addEventListener("Stop",()=>{this.#i.isPausedOnBreakpoint=!0,this.requestUpdate()}),this.recordingPlayer.addEventListener("Continue",()=>{this.#i.isPausedOnBreakpoint=!1,this.requestUpdate()}),this.recordingPlayer.addEventListener("Error",({data:c})=>{this.recordingError=c,r||(this.#i.isPlaying=!1,this.recordingPlayer=void 0),this.lastReplayResult="Failure";const l=c.message.toLowerCase();l.startsWith("could not find element")?J.recordingReplayFinished(2):l.startsWith("waiting for target failed")?J.recordingReplayFinished(3):J.recordingReplayFinished(4)}),this.recordingPlayer.addEventListener("Done",()=>{r||(this.#i.isPlaying=!1,this.recordingPlayer=void 0),this.lastReplayResult="Success",this.dispatchEvent(new Ki),J.recordingReplayFinished(1)}),this.recordingPlayer.addEventListener("Abort",()=>{this.currentStep=void 0,this.recordingError=void 0,this.lastReplayResult=void 0,this.#i.isPlaying=!1});let n=c=>{};const o=new Promise(c=>{n=c});let a=null;switch(e.data?.targetPanel){case"timeline":a=new Oc(this.#y(),{tracingBufferUsage(){},eventsRetrievalProgress(){},tracingComplete(c){n(c)}});break}if(a&&await a.start(),this.#x(!1),await this.recordingPlayer.play(),this.#x(!0),a){await a.stop();const c=await o;switch(this.#i.isPlaying=!1,this.recordingPlayer=void 0,await Ic.instance().showPanel(e.data?.targetPanel),e.data?.targetPanel){case"timeline":Mc.instance().loadFromEvents(c);break}}}async#E(){try{const e=Dc.instance();e.isDeviceModeOn()&&(e.toggleDeviceMode(),await this.#y().model(Fn)?.emulateDevice(null))}catch{}}#x(e){this.#y().model(Fn)?.setTouchEmulationAllowed(e)}async#k(e){const t=JSON.parse(e.detail);this.#p(await this.#e.saveRecording(go(t))),this.#f("RecordingPage"),this.#d()}getUserFlow(){return this.currentRecording?.flow}async#C(e){if(!this.currentRecording)throw new Error("Current recording expected to be defined.");const t={...this.currentRecording,flow:{...this.currentRecording.flow,steps:this.currentRecording.flow.steps.map(r=>r===e.currentStep?e.newStep:r)}};this.#p(await this.#e.updateRecording(t.storageName,t.flow),{keepBreakpoints:!0,updateSession:!0})}async#_(e){if(!this.currentRecording)throw new Error("Current recording expected to be defined.");const t=e.stepOrSection;let r,s=e.position;if("steps"in t){const l=this.sections?.indexOf(t);if(l===void 0||l===-1)throw new Error("There is no section to add a step to");if(e.position==="after")this.sections?.[l].steps.length?(r=this.sections?.[l].steps[0],s="before"):(r=this.sections?.[l].causingStep,s="after");else{if(l<=0)throw new Error("There is no section to add a step to");const d=this.sections?.[l-1];r=d?.steps[d.steps.length-1],s="after"}}else r=t;if(!r)throw new Error("Anchor step is not found when adding a step");const n=this.currentRecording.flow.steps,a=n.indexOf(r)+(s==="before"?0:1);n.splice(a,0,{type:w.WaitForElement,selectors:["body"]});const c={...this.currentRecording,flow:{...this.currentRecording.flow,steps:n}};J.recordingEdited(2),this.#o=new Set([...this.#o.values()].map(l=>a>l?l:l+1)),this.#p(await this.#e.updateRecording(c.storageName,c.flow),{keepBreakpoints:!0,updateSession:!0})}async#N(e){if(!this.currentRecording)throw new Error("Current recording expected to be defined.");const t={...this.currentRecording.flow,title:e.title};this.#p(await this.#e.updateRecording(this.currentRecording.storageName,t))}async#A(e){if(!this.currentRecording)throw new Error("Current recording expected to be defined.");const t=this.currentRecording.flow.steps,r=t.indexOf(e.step);t.splice(r,1);const s={...this.currentRecording.flow,steps:t};J.recordingEdited(3),this.#o=new Set([...this.#o.values()].map(n=>r>n?n:r===n?-1:n-1).filter(n=>n>=0)),this.#p(await this.#e.updateRecording(this.currentRecording.storageName,s),{keepBreakpoints:!0,updateSession:!0})}async#D(e){if(!this.currentRecording)throw new Error("Current recording expected to be defined.");const t=this.currentRecording.flow.steps.findIndex(s=>s.type==="navigate");if(t===-1)throw new Error("Current recording does not have a navigate step");const r=this.currentRecording.flow.steps.findIndex((s,n)=>n>=t?!1:s.type==="emulateNetworkConditions");if(!e.data)r!==-1&&this.currentRecording.flow.steps.splice(r,1);else if(r===-1)this.currentRecording.flow.steps.splice(0,0,Ua({download:e.data.download,upload:e.data.upload,latency:e.data.latency}));else{const s=this.currentRecording.flow.steps[r];s.download=e.data.download,s.upload=e.data.upload,s.latency=e.data.latency}this.#p(await this.#e.updateRecording(this.currentRecording.storageName,this.currentRecording.flow))}async#M(e){if(!this.currentRecording)throw new Error("Current recording expected to be defined.");this.currentRecording.flow.timeout=e.data,this.#p(await this.#e.updateRecording(this.currentRecording.storageName,this.currentRecording.flow))}async#R(e){if(e.stopPropagation(),e instanceof Ui)await this.#e.deleteRecording(e.storageName),this.#t.deleteScreenshotsForRecording(e.storageName),this.requestUpdate();else{if(!this.currentRecording)return;await this.#e.deleteRecording(this.currentRecording.storageName),this.#t.deleteScreenshotsForRecording(this.currentRecording.storageName)}(await this.#e.getRecordings()).length?this.#f("AllRecordingsPage"):this.#f("StartPage"),this.#p(void 0),this.#d()}#T(e){e?.stopPropagation(),this.#f("CreateRecordingPage"),this.#d()}async#I(e){await this.#E(),this.isToggling=!0,this.#d(),J.recordingToggled(1),this.currentRecordingSession=new cn(this.#y(),{title:e.name,selectorAttribute:e.selectorAttribute,selectorTypesToRecord:e.selectorTypesToRecord.length?e.selectorTypesToRecord:Object.values(G)}),this.#p(await this.#e.saveRecording(this.currentRecordingSession.cloneUserFlow()));let t=-1,r;const s=async n=>{if(!this.sections)throw new Error("Could not find sections.");const o=this.sections.length-1,a=this.sections[o];if(r||t===o)return;r=wo();const c=await r;r=void 0,a.screenshot=c,Rr.instance().storeScreenshotForSection(n.storageName,o,c),t=o,this.#b()};this.currentRecordingSession.addEventListener("recordingupdated",async({data:n})=>{if(!this.currentRecording)throw new Error("No current recording found");this.#p(await this.#e.updateRecording(this.currentRecording.storageName,n)),this.shadowRoot?.querySelector("devtools-recording-view")?.scrollToBottom(),await s(this.currentRecording)}),this.currentRecordingSession.addEventListener("recordingstopped",async({data:n})=>{if(!this.currentRecording)throw new Error("No current recording found");J.keyboardShortcutFired("chrome-recorder.start-recording"),this.#p(await this.#e.updateRecording(this.currentRecording.storageName,n)),await this.#$()}),await this.currentRecordingSession.start(),this.isToggling=!1,this.isRecording=!0,this.#f("RecordingPage"),this.dispatchEvent(new qr(this.currentRecording.flow))}async#$(){if(!this.currentRecording||!this.currentRecordingSession)throw new Error("Recording was never started");this.isToggling=!0,this.#d(),J.recordingToggled(2),await this.currentRecordingSession.stop(),this.currentRecordingSession=void 0,this.isToggling=!1,this.isRecording=!1,this.dispatchEvent(new qr(this.currentRecording.flow))}async#P(){this.previousPage&&this.#f(this.previousPage)}async#F(e){const t=e instanceof Vi||e instanceof Ga?e.storageName:e.target?.value;this.#p(await this.#e.getRecording(t)),this.currentRecording?this.#f("RecordingPage"):t==="StartPage"?this.#f("StartPage"):t==="AllRecordingsPage"&&this.#f("AllRecordingsPage")}async#O(e){if(typeof e.itemValue!="string")throw new Error("Invalid export option value");if(e.itemValue===ko){Ro.openInNewTab(Sf);return}if(!this.currentRecording)throw new Error("No recording selected");const t=e.itemValue,r=a=>a.getId()===t,s=this.#a.find(r)||this.extensionConverters.find(r);if(!s)throw new Error("No recording selected");const[n]=await s.stringify(this.currentRecording.flow);await this.#L(s.getFilename(this.currentRecording.flow),n);const o=kf[s.getId()];if(o)J.recordingExported(o);else if(s.getId().startsWith(nc))J.recordingExported(4);else throw new Error("Could not find a metric for the export option with id = "+t)}async#L(e,t){try{const s=await(await window.showSaveFilePicker({suggestedName:e})).createWritable();await s.write(t),await s.close()}catch(r){if(r.name==="AbortError")return;throw r}}async#H(){if(!this.currentRecordingSession||!this.currentRecording)return;const e=this.currentRecordingSession.cloneUserFlow();e.steps.push({type:"waitForElement",selectors:[[".cls"]]}),this.#p(await this.#e.updateRecording(this.currentRecording.storageName,e),{keepBreakpoints:!0,updateSession:!0}),J.recordingAssertion(1),await this.updateComplete,this.renderRoot.querySelector("devtools-recording-view")?.shadowRoot?.querySelector(".section:last-child devtools-step-view:last-of-type")?.shadowRoot?.querySelector(".action")?.click()}#U(e){e.stopPropagation(),this.#d(),this.#s=$c(this.#h.bind(this)),this.#s.click()}async#j(e){await this.#F(e),await this.#w(new fr({targetPanel:"chrome-recorder",speed:this.#c.speed}))}#V=e=>{this.#o.add(e.index),this.recordingPlayer?.updateBreakpointIndexes(this.#o),this.requestUpdate()};#K=e=>{this.#o.delete(e.index),this.recordingPlayer?.updateBreakpointIndexes(this.#o),this.requestUpdate()};#W(){this.viewDescriptor=void 0}handleActions(e){if(this.isActionPossible(e))switch(e){case"chrome-recorder.create-recording":this.#T();return;case"chrome-recorder.start-recording":if(this.currentPage!=="CreateRecordingPage"&&!this.isRecording)this.#l.handleShortcut(this.#I.bind(this,new Hi(this.#c.defaultTitle,this.#c.defaultSelectors,this.#c.selectorAttribute)));else if(this.currentPage==="CreateRecordingPage"){const t=this.renderRoot.querySelector("devtools-create-recording-view");t&&this.#l.handleShortcut(t.startRecording.bind(t))}else this.isRecording&&this.#$();return;case"chrome-recorder.replay-recording":this.#w(new fr({targetPanel:"chrome-recorder",speed:this.#c.speed}));return;case"chrome-recorder.toggle-code-view":{const t=this.renderRoot.querySelector("devtools-recording-view");t&&t.showCodeToggle();return}}}isActionPossible(e){switch(e){case"chrome-recorder.create-recording":return!this.isRecording&&!this.#i.isPlaying;case"chrome-recorder.start-recording":return!this.#i.isPlaying;case"chrome-recorder.replay-recording":return this.currentPage==="RecordingPage"&&!this.#i.isPlaying;case"chrome-recorder.toggle-code-view":return this.currentPage==="RecordingPage";case"chrome-recorder.copy-recording-or-step":return!1}}#q(){const e=t=>Bs.instance().shortcutsForAction(t).map(s=>s.title());return[{title:ke(he.startStopRecording),bindings:e("chrome-recorder.start-recording")},{title:ke(he.replayRecording),bindings:e("chrome-recorder.replay-recording")},{title:ke(he.copyShortcut),bindings:[`${Pc()?"⌘ C":"Ctrl+C"}`]},{title:ke(he.toggleCode),bindings:e("chrome-recorder.toggle-code-view")}]}#z(){switch(this.currentPage){case"StartPage":return this.#Q();case"AllRecordingsPage":return this.#J();case"RecordingPage":return this.#G();case"CreateRecordingPage":return this.#X()}}#J(){const e=this.#e.getRecordings();return nt`
      <devtools-recording-list-view
        .recordings=${e.map(t=>({storageName:t.storageName,name:t.flow.title}))}
        .replayAllowed=${this.#r}
        @createrecording=${this.#T}
        @deleterecording=${this.#R}
        @openrecording=${this.#F}
        @playrecording=${this.#j}
        >
      </devtools-recording-list-view>
    `}#Q(){return nt`
      <devtools-start-view
        @createrecording=${this.#T}
      ></devtools-start-view>
    `}#G(){return nt`
      <devtools-recording-view
        .data=${{recording:this.currentRecording?.flow,replayState:this.#i,isRecording:this.isRecording,recordingTogglingInProgress:this.isToggling,currentStep:this.currentStep,currentError:this.recordingError,sections:this.sections,settings:this.settings,recorderSettings:this.#c,lastReplayResult:this.lastReplayResult,replayAllowed:this.#r,breakpointIndexes:this.#o,builtInConverters:this.#a,extensionConverters:this.extensionConverters,replayExtensions:this.replayExtensions,extensionDescriptor:this.viewDescriptor}}
        @networkconditionschanged=${this.#D}
        @timeoutchanged=${this.#M}
        @requestselectorattribute=${e=>{e.send(this.currentRecording?.flow.selectorAttribute)}}
        @recordingfinished=${this.#$}
        @stepchanged=${this.#C.bind(this)}
        @recordingtitlechanged=${this.#N.bind(this)}
        @addstep=${this.#_.bind(this)}
        @removestep=${this.#A.bind(this)}
        @addbreakpoint=${this.#V}
        @removebreakpoint=${this.#K}
        @playrecording=${this.#w}
        @abortreplay=${this.#v}
        @recorderextensionviewclosed=${this.#W}
        @addassertion=${this.#H}
      ></devtools-recording-view>
    `}#X(){return nt`
      <devtools-create-recording-view
        .data=${{recorderSettings:this.#c}}
        @recordingstarted=${this.#I}
        @recordingcancelled=${this.#P}
      ></devtools-create-recording-view>
    `}#Y=()=>{if(!this.#n)throw new Error("#exportMenuButton not found");return this.#n};#Z(e){e.stopPropagation(),this.#d(),this.exportMenuExpanded=!this.exportMenuExpanded}#ee(){this.exportMenuExpanded=!1}render(){const e=this.#e.getRecordings(),t=this.currentRecording?this.currentRecording.storageName:this.currentPage,r=[e.length===0?{value:"StartPage",name:ke(he.noRecordings),selected:t==="StartPage"}:{value:"AllRecordingsPage",name:`${e.length} ${ke(he.numberOfRecordings)}`,selected:t==="AllRecordingsPage"},...e.map(s=>({value:s.storageName,name:s.flow.title,selected:t===s.storageName}))];return nt`
        <div class="wrapper">
          <div class="header" jslog=${Io()}>
            <devtools-button
              @click=${this.#T}
              .data=${{variant:"toolbar",iconName:"plus",disabled:this.#i.isPlaying||this.isRecording||this.isToggling,title:Mt(ke(he.createRecording),"chrome-recorder.create-recording"),jslogContext:"chrome-recorder.create-recording"}}
            ></devtools-button>
            <div class="separator"></div>
            <select
              .disabled=${e.length===0||this.#i.isPlaying||this.isRecording||this.isToggling}
              @click=${s=>s.stopPropagation()}
              @change=${this.#F}
              jslog=${Es("recordings").track({change:!0})}
            >
              ${Gi(r,s=>s.value,s=>nt`<option .selected=${s.selected} value=${s.value}>${s.name}</option>`)}
            </select>
            <div class="separator"></div>
            <devtools-button
              @click=${this.#U}
              .data=${{variant:"toolbar",iconName:"import",title:ke(he.importRecording),jslogContext:"import-recording"}}
            ></devtools-button>
            <devtools-button
              id='origin'
              @click=${this.#Z}
              on-render=${Lc(s=>{this.#n=s})}
              .data=${{variant:"toolbar",iconName:"download",title:ke(he.exportRecording),disabled:!this.currentRecording}}
              jslog=${Es("export-recording").track({click:!0})}
            ></devtools-button>
            <devtools-menu
              @menucloserequest=${this.#ee}
              @menuitemselected=${this.#O}
              .origin=${this.#Y}
              .showDivider=${!1}
              .showSelectedItem=${!1}
              .showConnector=${!1}
              .open=${this.exportMenuExpanded}
            >
              <devtools-menu-group .name=${ke(he.export)}>
                ${Gi(this.#a,s=>nt`
                    <devtools-menu-item
                      .value=${s.getId()}
                      jslog=${Ar(`converter-${Ct(s.getId())}`).track({click:!0})}>
                      ${s.getFormatName()}
                    </devtools-menu-item>
                  `)}
              </devtools-menu-group>
              <devtools-menu-group .name=${ke(he.exportViaExtensions)}>
                ${Gi(this.extensionConverters,s=>nt`
                    <devtools-menu-item
                     .value=${s.getId()}
                      jslog=${Ar("converter-extension").track({click:!0})}>
                    ${s.getFormatName()}
                    </devtools-menu-item>
                  `)}
                <devtools-menu-item .value=${ko}>
                  ${ke(he.getExtensions)}
                </devtools-menu-item>
              </devtools-menu-group>
            </devtools-menu>
            <devtools-button
              @click=${this.#R}
              .data=${{variant:"toolbar",iconName:"bin",disabled:!this.currentRecording||this.#i.isPlaying||this.isRecording||this.isToggling,title:ke(he.deleteRecording),jslogContext:"delete-recording"}}
            ></devtools-button>
            <div class="separator"></div>
            <devtools-button
              @click=${()=>this.recordingPlayer?.continue()}
              .data=${{variant:"primary_toolbar",iconName:"resume",disabled:!this.recordingPlayer||!this.#i.isPausedOnBreakpoint,title:ke(he.continueReplay),jslogContext:"continue-replay"}}
            ></devtools-button>
            <devtools-button
              @click=${()=>this.recordingPlayer?.stepOver()}
              .data=${{variant:"toolbar",iconName:"step-over",disabled:!this.recordingPlayer||!this.#i.isPausedOnBreakpoint,title:ke(he.stepOverReplay),jslogContext:"step-over"}}
            ></devtools-button>
            <div class="feedback">
              <x-link class="x-link" href=${Ms} jslog=${ks("feedback").track({click:!0})}>${ke(he.sendFeedback)}</x-link>
            </div>
            <div class="separator"></div>
            <devtools-shortcut-dialog
              .data=${{shortcuts:this.#q()}} jslog=${Ye("show-shortcuts").track({click:!0})}
            ></devtools-shortcut-dialog>
          </div>
          ${this.importError?nt`<div class='error'>Import error: ${this.importError.message}</div>`:""}
          ${this.#z()}
        </div>
      `}};le([ve()],Y.prototype,"currentRecordingSession",void 0);le([ve()],Y.prototype,"currentRecording",void 0);le([ve()],Y.prototype,"currentStep",void 0);le([ve()],Y.prototype,"recordingError",void 0);le([ve()],Y.prototype,"isRecording",void 0);le([ve()],Y.prototype,"isToggling",void 0);le([ve()],Y.prototype,"recordingPlayer",void 0);le([ve()],Y.prototype,"lastReplayResult",void 0);le([ve()],Y.prototype,"currentPage",void 0);le([ve()],Y.prototype,"previousPage",void 0);le([ve()],Y.prototype,"sections",void 0);le([ve()],Y.prototype,"settings",void 0);le([ve()],Y.prototype,"importError",void 0);le([ve()],Y.prototype,"exportMenuExpanded",void 0);le([ve()],Y.prototype,"extensionConverters",void 0);le([ve()],Y.prototype,"replayExtensions",void 0);le([ve()],Y.prototype,"viewDescriptor",void 0);Y=le([vf("devtools-recorder-controller")],Y);const ag=Object.freeze(Object.defineProperty({__proto__:null,get RecorderController(){return Y}},Symbol.toStringTag,{value:"Module"}));let vs;class kt extends Fc{static panelName="chrome-recorder";#e;constructor(){super(kt.panelName),this.element.setAttribute("jslog",`${Nc("chrome-recorder").track({resize:!0})}`),this.#e=new Y,this.contentElement.append(this.#e),this.contentElement.style.minWidth="400px"}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!vs||t)&&(vs=new kt),vs}wasShown(){Nn.instance().setFlavor(kt,this),this.#e.focus()}willHide(){Nn.instance().setFlavor(kt,null)}handleActions(e){this.#e.handleActions(e)}isActionPossible(e){return this.#e.isActionPossible(e)}}class Ef{handleAction(e,t){return(async()=>{await Dn.instance().showView(kt.panelName);const r=Dn.instance().view(kt.panelName);r&&(await r.widget()).handleActions(t)})(),!0}}const cg=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:Ef,RecorderPanel:kt},Symbol.toStringTag,{value:"Module"}));export{ag as RecorderController,ng as RecorderEvents,cg as RecorderPanel};
//# sourceMappingURL=recorder-DTpf9ZRT.js.map
