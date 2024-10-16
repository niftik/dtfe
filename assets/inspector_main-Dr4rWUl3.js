import{h as I,i as A,aN as j,bj as U,b4 as n,A as D,br as $,dk as H,d8 as z,dl as G,dm as J,dn as y,dp as c,T as d,dq as K,dr as X,ds as Q,aX as P,dt as Y,b7 as F,du as Z,dv as E,dw as _,a as ee,dx as O,dy as te,dz as se,cP as p,dA as f,bO as k,dB as ae,dC as re}from"./inspector-1W7GSp_t.js";const N=new CSSStyleSheet;N.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 12px;
}

[is="dt-checkbox"] {
  margin: 0 0 10px;
  flex: none;
}

.panel-section-separator {
  height: 1px;
  margin-bottom: 10px;
  background: var(--sys-color-divider);
  flex: none;
}

.panel-section-separator:last-child {
  background: transparent;
}

.chrome-select-label {
  margin-bottom: 16px;
}

/*# sourceURL=renderingOptions.css */
`);const a={paintFlashing:"Paint flashing",highlightsAreasOfThePageGreen:"Highlights areas of the page (green) that need to be repainted. May not be suitable for people prone to photosensitive epilepsy.",layoutShiftRegions:"Layout Shift Regions",highlightsAreasOfThePageBlueThat:"Highlights areas of the page (blue) that were shifted. May not be suitable for people prone to photosensitive epilepsy.",layerBorders:"Layer borders",showsLayerBordersOrangeoliveAnd:"Shows layer borders (orange/olive) and tiles (cyan).",frameRenderingStats:"Frame Rendering Stats",plotsFrameThroughputDropped:"Plots frame throughput, dropped frames distribution, and GPU memory.",scrollingPerformanceIssues:"Scrolling performance issues",highlightsElementsTealThatCan:"Highlights elements (teal) that can slow down scrolling, including touch & wheel event handlers and other main-thread scrolling situations.",highlightAdFrames:"Highlight ad frames",highlightsFramesRedDetectedToBe:"Highlights frames (red) detected to be ads.",coreWebVitals:"Core Web Vitals",showsAnOverlayWithCoreWebVitals:"Shows an overlay with Core Web Vitals.",disableLocalFonts:"Disable local fonts",disablesLocalSourcesInFontface:"Disables `local()` sources in `@font-face` rules. Requires a page reload to apply.",emulateAFocusedPage:"Emulate a focused page",emulatesAFocusedPage:"Keep page focused. Commonly used for debugging disappearing elements.",emulateAutoDarkMode:"Enable automatic dark mode",emulatesAutoDarkMode:"Enables automatic dark mode and sets `prefers-color-scheme` to `dark`.",forcesMediaTypeForTestingPrint:"Forces media type for testing print and screen styles",forcesCssPreferscolorschemeMedia:"Forces CSS `prefers-color-scheme` media feature",forcesCssPrefersreducedmotion:"Forces CSS `prefers-reduced-motion` media feature",forcesCssPreferscontrastMedia:"Forces CSS `prefers-contrast` media feature",forcesCssPrefersreduceddataMedia:"Forces CSS `prefers-reduced-data` media feature",forcesCssPrefersreducedtransparencyMedia:"Forces CSS `prefers-reduced-transparency` media feature",forcesCssColorgamutMediaFeature:"Forces CSS `color-gamut` media feature",forcesVisionDeficiencyEmulation:"Forces vision deficiency emulation",disableAvifImageFormat:"Disable `AVIF` image format",requiresAPageReloadToApplyAnd:"Requires a page reload to apply and disables caching for image requests.",disableWebpImageFormat:"Disable `WebP` image format",forcesCssForcedColors:"Forces CSS forced-colors media feature"},ne=I("entrypoints/inspector_main/RenderingOptions.ts",a),r=A.bind(void 0,ne),ie=()=>window.matchMedia("not all and (prefers-reduced-data), (prefers-reduced-data)").matches,oe=()=>window.matchMedia("not all and (prefers-reduced-transparency), (prefers-reduced-transparency)").matches,de=()=>window.matchMedia("not all and (prefers-contrast), (prefers-contrast)").matches;class le extends j{constructor(){super(!0),this.element.setAttribute("jslog",`${U("rendering").track({resize:!0})}`),this.#t(r(a.paintFlashing),r(a.highlightsAreasOfThePageGreen),n.instance().moduleSetting("show-paint-rects")),this.#t(r(a.layoutShiftRegions),r(a.highlightsAreasOfThePageBlueThat),n.instance().moduleSetting("show-layout-shift-regions")),this.#t(r(a.layerBorders),r(a.showsLayerBordersOrangeoliveAnd),n.instance().moduleSetting("show-debug-borders")),this.#t(r(a.frameRenderingStats),r(a.plotsFrameThroughputDropped),n.instance().moduleSetting("show-fps-counter")),this.#t(r(a.scrollingPerformanceIssues),r(a.highlightsElementsTealThatCan),n.instance().moduleSetting("show-scroll-bottleneck-rects")),this.#t(r(a.highlightAdFrames),r(a.highlightsFramesRedDetectedToBe),n.instance().moduleSetting("show-ad-highlights")),this.#t(r(a.coreWebVitals),r(a.showsAnOverlayWithCoreWebVitals),n.instance().moduleSetting("show-web-vitals"),{toggle:D.ToggleShowWebVitals}),this.#t(r(a.disableLocalFonts),r(a.disablesLocalSourcesInFontface),n.instance().moduleSetting("local-fonts-disabled")),this.#t(r(a.emulateAFocusedPage),r(a.emulatesAFocusedPage),n.instance().moduleSetting("emulate-page-focus"),{toggle:D.ToggleEmulateFocusedPageFromRenderingTab}),this.#t(r(a.emulateAutoDarkMode),r(a.emulatesAutoDarkMode),n.instance().moduleSetting("emulate-auto-dark-mode")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#e(r(a.forcesCssPreferscolorschemeMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-color-scheme")),this.#e(r(a.forcesMediaTypeForTestingPrint),n.instance().moduleSetting("emulated-css-media")),this.#e(r(a.forcesCssForcedColors),n.instance().moduleSetting("emulated-css-media-feature-forced-colors")),de()&&this.#e(r(a.forcesCssPreferscontrastMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-contrast")),this.#e(r(a.forcesCssPrefersreducedmotion),n.instance().moduleSetting("emulated-css-media-feature-prefers-reduced-motion")),ie()&&this.#e(r(a.forcesCssPrefersreduceddataMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-reduced-data")),oe()&&this.#e(r(a.forcesCssPrefersreducedtransparencyMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-reduced-transparency")),this.#e(r(a.forcesCssColorgamutMediaFeature),n.instance().moduleSetting("emulated-css-media-feature-color-gamut")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#e(r(a.forcesVisionDeficiencyEmulation),n.instance().moduleSetting("emulated-vision-deficiency")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#t(r(a.disableAvifImageFormat),r(a.requiresAPageReloadToApplyAnd),n.instance().moduleSetting("avif-format-disabled")),this.#t(r(a.disableWebpImageFormat),r(a.requiresAPageReloadToApplyAnd),n.instance().moduleSetting("webp-format-disabled")),this.contentElement.createChild("div").classList.add("panel-section-separator")}#t(e,t,s,i){const o=$.create(e,!1,t,s.name);return H(o.checkboxElement,s,i),this.contentElement.appendChild(o),o}#e(e,t){const s=z(t,e);s&&this.contentElement.appendChild(s)}wasShown(){super.wasShown(),this.registerCSSFiles([N])}}let ce=class{handleAction(e,t){const s=n.instance().moduleSetting("emulated-css-media-feature-prefers-color-scheme");switch(t){case"rendering.toggle-prefers-color-scheme":{const i=["","light","dark"],o=i.findIndex(M=>M===s.get()||"");return s.set(i[(o+1)%3]),!0}}return!1}};const be=Object.freeze(Object.defineProperty({__proto__:null,ReloadActionDelegate:ce,RenderingOptionsView:le},Symbol.toStringTag,{value:"Module"})),B=new CSSStyleSheet;B.replaceSync(`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.node-icon {
  width: 28px;
  height: 26px;
  background-image: var(--image-file-nodeIcon);
  background-size: 17px 17px;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 80%;
  cursor: auto;
}

.node-icon:hover {
  opacity: 100%;
}

.node-icon.inactive {
  filter: grayscale(100%);
}

/*# sourceURL=nodeIcon.css */
`);const h={main:"Main",tab:"Tab",javascriptIsDisabled:"JavaScript is disabled",openDedicatedTools:"Open dedicated DevTools for `Node.js`"},ge=I("entrypoints/inspector_main/InspectorMain.ts",h),u=A.bind(void 0,ge);let v;class S{static instance(e={forceNew:null}){const{forceNew:t}=e;return(!v||t)&&(v=new S),v}async run(){let e=!0;await G(async()=>{const t=y.queryParam("v8only")?c.Node:y.queryParam("targetType")==="tab"?c.Tab:c.Frame,s=t===c.Frame&&y.queryParam("panel")==="sources",i=t===c.Frame?u(h.main):u(h.tab),o=d.instance().createTarget("main",i,t,null,void 0,s);if(await new Promise(g=>{const L=d.instance();L.observeTargets({targetAdded:m=>{m===L.primaryPageTarget()&&(m.setName(u(h.main)),g(m))},targetRemoved:m=>{}})}),!!e){if(e=!1,s){const g=o.model(K);g&&(g.isReadyToPause()||await g.once(X.DebuggerIsReadyToPause),g.pause())}t!==c.Tab&&o.runtimeAgent().invoke_runIfWaitingForDebugger()}},J.webSocketConnectionLost),new W,new V,new Q,P.events.addEventListener(Y.ReloadInspectedPage,({data:t})=>{F.reloadAllPages(t)})}}Z(S.instance);class he{handleAction(e,t){switch(t){case"inspector-main.reload":return F.reloadAllPages(!1),!0;case"inspector-main.hard-reload":return F.reloadAllPages(!0),!0}return!1}}class ue{handleAction(e,t){const s=d.instance().primaryPageTarget();return s?(s.pageAgent().invoke_bringToFront(),!0):!1}}let w;class x{#t;#e;constructor(){const e=document.createElement("div"),t=E(e,{cssFile:[B],delegatesFocus:void 0});this.#t=t.createChild("div","node-icon"),e.addEventListener("click",()=>P.openNodeFrontend(),!1),this.#e=new _(e),this.#e.setTitle(u(h.openDedicatedTools)),d.instance().addEventListener("AvailableTargetsChanged",s=>this.#s(s.data)),this.#e.setVisible(!1),this.#s([])}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!w||t)&&(w=new x),w}#s(e){const t=!!e.find(s=>s.type==="node"&&!s.attached);this.#t.classList.toggle("inactive",!t),t&&this.#e.setVisible(!0)}item(){return this.#e}}class W{constructor(){n.instance().moduleSetting("java-script-disabled").addChangeListener(e),e();function e(){const t=[];n.instance().moduleSetting("java-script-disabled").get()&&t.push(u(h.javascriptIsDisabled)),ee.instance().setPanelWarnings("sources",t)}}}class V{#t;#e;#s;constructor(){this.#t=n.instance().moduleSetting("auto-attach-to-created-pages"),this.#t.addChangeListener(this.#r,this),this.#r(),this.#e=n.instance().moduleSetting("network.ad-blocking-enabled"),this.#e.addChangeListener(this.#n,this),this.#s=n.instance().moduleSetting("emulate-page-focus"),this.#s.addChangeListener(this.#n,this),d.instance().observeTargets(this)}#a(e){e.type()!==c.Frame||e.parentTarget()?.type()===c.Frame||(e.pageAgent().invoke_setAdBlockingEnabled({enabled:this.#e.get()}),e.emulationAgent().invoke_setFocusEmulationEnabled({enabled:this.#s.get()}))}#r(){P.setOpenNewWindowForPopups(this.#t.get())}#n(){for(const e of d.instance().targets())this.#a(e)}targetAdded(e){this.#a(e)}targetRemoved(e){}}O.install();const Se=Object.freeze(Object.defineProperty({__proto__:null,BackendSettingsSync:V,FocusDebuggeeActionDelegate:ue,InspectorMainImpl:S,NodeIndicator:x,ReloadActionDelegate:he,SourcesPanelIndicator:W},Symbol.toStringTag,{value:"Module"})),q=new CSSStyleSheet;q.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 2px 1px 2px 2px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
  overflow-y: auto;
}

.title {
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  flex-grow: 0;
}

.subtitle {
  color: var(--sys-color-token-subtle);
  margin-right: 3px;
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  flex-grow: 0;
}

:host(.highlighted) .subtitle {
  color: inherit;
}

/*# sourceURL=outermostTargetSelector.css */
`);const b={targetNotSelected:"Page: Not selected",targetS:"Page: {PH1}"},me=I("entrypoints/inspector_main/OutermostTargetSelector.ts",b),C=A.bind(void 0,me);let T;class R{listItems;#t;#e;constructor(){this.listItems=new te,this.#t=new se(this.listItems,this),this.#t.setRowHeight(36),this.#e=new _(this.#t.element),this.#e.setTitle(C(b.targetNotSelected)),this.listItems.addEventListener("ItemsReplaced",()=>this.#e.setEnabled(!!this.listItems.length)),this.#e.element.classList.add("toolbar-has-dropdown");const e=d.instance();e.addModelListener(O,"TargetInfoChanged",this.#a,this),e.addEventListener("NameChanged",this.#r,this),e.observeTargets(this),p.instance().addFlavorChangeListener(f,this.#n,this)}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!T||t)&&(T=new R),T}item(){return this.#e}highlightedItemChanged(e,t,s,i){s&&s.classList.remove("highlighted"),i&&i.classList.add("highlighted")}titleFor(e){return e.name()}targetAdded(e){e.outermostTarget()===e&&(this.listItems.insertWithComparator(e,this.#s()),this.#e.setVisible(this.listItems.length>1),e===p.instance().flavor(f)&&this.#t.selectItem(e))}targetRemoved(e){const t=this.listItems.indexOf(e);t!==-1&&(this.listItems.remove(t),this.#e.setVisible(this.listItems.length>1))}#s(){return(e,t)=>{const s=e.targetInfo(),i=t.targetInfo();return!s||!i?0:!s.subtype?.length&&i.subtype?.length?-1:s.subtype?.length&&!i.subtype?.length?1:s.url.localeCompare(i.url)}}#a(e){const s=d.instance().targetById(e.data.targetId);!s||s.outermostTarget()!==s||(this.targetRemoved(s),this.targetAdded(s))}#r(e){const t=e.data;!t||t.outermostTarget()!==t||(this.targetRemoved(t),this.targetAdded(t))}#n({data:e}){this.#t.selectItem(e?.outermostTarget()||null)}createElementForItem(e){const t=document.createElement("div");t.classList.add("target");const s=E(t,{cssFile:[q],delegatesFocus:void 0}),i=s.createChild("div","title");k(i,ae(this.titleFor(e),100));const o=s.createChild("div","subtitle");return k(o,this.#i(e)),t}#i(e){const t=e.targetInfo();return e===d.instance().primaryPageTarget()&&t?re(t.url):e.targetInfo()?.subtype||""}isItemSelectable(e){return!0}itemSelected(e){const t=e?C(b.targetS,{PH1:this.titleFor(e)}):C(b.targetNotSelected);this.#e.setTitle(t),e&&e!==p.instance().flavor(f)?.outermostTarget()&&p.instance().setFlavor(f,e)}}const ye=Object.freeze(Object.defineProperty({__proto__:null,OutermostTargetSelector:R},Symbol.toStringTag,{value:"Module"}));export{Se as InspectorMain,ye as OutermostTargetSelector,be as RenderingOptions};
//# sourceMappingURL=inspector_main-Dr4rWUl3.js.map
