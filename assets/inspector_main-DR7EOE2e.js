import{b as A,g as I,aU as U,bp as $,aj as n,A as H,bw as V,dk as W,cQ as z,dl as G,dm as J,aM as y,dn as l,i as d,aE as K,dp as Q,b0 as P,dq as Z,aR as F,dr as X,aZ as D,ds as k,a as Y,dt as _,du as ee,dv as te,cH as p,dw as f,bS as L,dx as se,dy as ae}from"./inspector-CyOA7R9n.js";import{N as re}from"./mobile_throttling-CIMam4T2.js";const N=new CSSStyleSheet;N.replaceSync(`/*
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
`);const a={paintFlashing:"Paint flashing",highlightsAreasOfThePageGreen:"Highlights areas of the page (green) that need to be repainted. May not be suitable for people prone to photosensitive epilepsy.",layoutShiftRegions:"Layout shift regions",highlightsAreasOfThePageBlueThat:"Highlights areas of the page (blue) that were shifted. May not be suitable for people prone to photosensitive epilepsy.",layerBorders:"Layer borders",showsLayerBordersOrangeoliveAnd:"Shows layer borders (orange/olive) and tiles (cyan).",frameRenderingStats:"Frame Rendering Stats",plotsFrameThroughputDropped:"Plots frame throughput, dropped frames distribution, and GPU memory.",scrollingPerformanceIssues:"Scrolling performance issues",highlightsElementsTealThatCan:"Highlights elements (teal) that can slow down scrolling, including touch & wheel event handlers and other main-thread scrolling situations.",highlightAdFrames:"Highlight ad frames",highlightsFramesRedDetectedToBe:"Highlights frames (red) detected to be ads.",disableLocalFonts:"Disable local fonts",disablesLocalSourcesInFontface:"Disables `local()` sources in `@font-face` rules. Requires a page reload to apply.",emulateAFocusedPage:"Emulate a focused page",emulatesAFocusedPage:"Keep page focused. Commonly used for debugging disappearing elements.",emulateAutoDarkMode:"Enable automatic dark mode",emulatesAutoDarkMode:"Enables automatic dark mode and sets `prefers-color-scheme` to `dark`.",forcesMediaTypeForTestingPrint:"Forces media type for testing print and screen styles",forcesCssPreferscolorschemeMedia:"Forces CSS `prefers-color-scheme` media feature",forcesCssPrefersreducedmotion:"Forces CSS `prefers-reduced-motion` media feature",forcesCssPreferscontrastMedia:"Forces CSS `prefers-contrast` media feature",forcesCssPrefersreduceddataMedia:"Forces CSS `prefers-reduced-data` media feature",forcesCssPrefersreducedtransparencyMedia:"Forces CSS `prefers-reduced-transparency` media feature",forcesCssColorgamutMediaFeature:"Forces CSS `color-gamut` media feature",forcesVisionDeficiencyEmulation:"Forces vision deficiency emulation",disableAvifImageFormat:"Disable `AVIF` image format",requiresAPageReloadToApplyAnd:"Requires a page reload to apply and disables caching for image requests.",disableWebpImageFormat:"Disable `WebP` image format",forcesCssForcedColors:"Forces CSS forced-colors media feature"},ne=A("entrypoints/inspector_main/RenderingOptions.ts",a),r=I.bind(void 0,ne),ie=()=>window.matchMedia("not all and (prefers-reduced-data), (prefers-reduced-data)").matches,oe=()=>window.matchMedia("not all and (prefers-reduced-transparency), (prefers-reduced-transparency)").matches,de=()=>window.matchMedia("not all and (prefers-contrast), (prefers-contrast)").matches;class ce extends U{constructor(){super(!0),this.element.setAttribute("jslog",`${$("rendering").track({resize:!0})}`),this.#t(r(a.paintFlashing),r(a.highlightsAreasOfThePageGreen),n.instance().moduleSetting("show-paint-rects")),this.#t(r(a.layoutShiftRegions),r(a.highlightsAreasOfThePageBlueThat),n.instance().moduleSetting("show-layout-shift-regions")),this.#t(r(a.layerBorders),r(a.showsLayerBordersOrangeoliveAnd),n.instance().moduleSetting("show-debug-borders")),this.#t(r(a.frameRenderingStats),r(a.plotsFrameThroughputDropped),n.instance().moduleSetting("show-fps-counter")),this.#t(r(a.scrollingPerformanceIssues),r(a.highlightsElementsTealThatCan),n.instance().moduleSetting("show-scroll-bottleneck-rects")),this.#t(r(a.highlightAdFrames),r(a.highlightsFramesRedDetectedToBe),n.instance().moduleSetting("show-ad-highlights")),this.#t(r(a.disableLocalFonts),r(a.disablesLocalSourcesInFontface),n.instance().moduleSetting("local-fonts-disabled")),this.#t(r(a.emulateAFocusedPage),r(a.emulatesAFocusedPage),n.instance().moduleSetting("emulate-page-focus"),{toggle:H.ToggleEmulateFocusedPageFromRenderingTab}),this.#t(r(a.emulateAutoDarkMode),r(a.emulatesAutoDarkMode),n.instance().moduleSetting("emulate-auto-dark-mode")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#e(r(a.forcesCssPreferscolorschemeMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-color-scheme")),this.#e(r(a.forcesMediaTypeForTestingPrint),n.instance().moduleSetting("emulated-css-media")),this.#e(r(a.forcesCssForcedColors),n.instance().moduleSetting("emulated-css-media-feature-forced-colors")),de()&&this.#e(r(a.forcesCssPreferscontrastMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-contrast")),this.#e(r(a.forcesCssPrefersreducedmotion),n.instance().moduleSetting("emulated-css-media-feature-prefers-reduced-motion")),ie()&&this.#e(r(a.forcesCssPrefersreduceddataMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-reduced-data")),oe()&&this.#e(r(a.forcesCssPrefersreducedtransparencyMedia),n.instance().moduleSetting("emulated-css-media-feature-prefers-reduced-transparency")),this.#e(r(a.forcesCssColorgamutMediaFeature),n.instance().moduleSetting("emulated-css-media-feature-color-gamut")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#e(r(a.forcesVisionDeficiencyEmulation),n.instance().moduleSetting("emulated-vision-deficiency")),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.#t(r(a.disableAvifImageFormat),r(a.requiresAPageReloadToApplyAnd),n.instance().moduleSetting("avif-format-disabled")),this.#t(r(a.disableWebpImageFormat),r(a.requiresAPageReloadToApplyAnd),n.instance().moduleSetting("webp-format-disabled")),this.contentElement.createChild("div").classList.add("panel-section-separator")}#t(e,t,s,i){const o=V.create(e,!1,t,s.name);return W(o.checkboxElement,s,i),this.contentElement.appendChild(o),o}#e(e,t){const s=z(t,e);s&&this.contentElement.appendChild(s)}wasShown(){super.wasShown(),this.registerCSSFiles([N])}}let le=class{handleAction(e,t){const s=n.instance().moduleSetting("emulated-css-media-feature-prefers-color-scheme");switch(t){case"rendering.toggle-prefers-color-scheme":{const i=["","light","dark"],o=i.findIndex(x=>x===s.get()||"");return s.set(i[(o+1)%3]),!0}}return!1}};const Se=Object.freeze(Object.defineProperty({__proto__:null,ReloadActionDelegate:le,RenderingOptionsView:ce},Symbol.toStringTag,{value:"Module"})),O=new CSSStyleSheet;O.replaceSync(`/*
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
`);const u={main:"Main",tab:"Tab",javascriptIsDisabled:"JavaScript is disabled",openDedicatedTools:"Open dedicated DevTools for `Node.js`"},ge=A("entrypoints/inspector_main/InspectorMain.ts",u),h=I.bind(void 0,ge);let v;class S{static instance(e={forceNew:null}){const{forceNew:t}=e;return(!v||t)&&(v=new S),v}async run(){let e=!0;await G(async()=>{const t=y.queryParam("v8only")?l.NODE:y.queryParam("targetType")==="tab"?l.TAB:l.FRAME,s=t===l.FRAME&&y.queryParam("panel")==="sources",i=t===l.FRAME?h(u.main):h(u.tab),o=d.instance().createTarget("main",i,t,null,void 0,s);if(await new Promise(g=>{const E=d.instance();E.observeTargets({targetAdded:m=>{m===E.primaryPageTarget()&&(m.setName(h(u.main)),g(m))},targetRemoved:m=>{}})}),!!e){if(e=!1,s){const g=o.model(K);g&&(g.isReadyToPause()||await g.once(Q.DebuggerIsReadyToPause),g.pause())}t!==l.TAB&&o.runtimeAgent().invoke_runIfWaitingForDebugger()}},J.webSocketConnectionLost),new B,new q,new re,P.events.addEventListener(Z.ReloadInspectedPage,({data:t})=>{F.reloadAllPages(t)})}}X(S.instance);class ue{handleAction(e,t){switch(t){case"inspector-main.reload":return F.reloadAllPages(!1),!0;case"inspector-main.hard-reload":return F.reloadAllPages(!0),!0}return!1}}class he{handleAction(e,t){const s=d.instance().primaryPageTarget();return s?(s.pageAgent().invoke_bringToFront(),!0):!1}}let C;class R{#t;#e;constructor(){const e=document.createElement("div"),t=D(e,{cssFile:[O],delegatesFocus:void 0});this.#t=t.createChild("div","node-icon"),e.addEventListener("click",()=>P.openNodeFrontend(),!1),this.#e=new k(e),this.#e.setTitle(h(u.openDedicatedTools)),d.instance().addEventListener("AvailableTargetsChanged",s=>this.#s(s.data)),this.#e.setVisible(!1),this.#s([])}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!C||t)&&(C=new R),C}#s(e){const t=!!e.find(s=>s.type==="node"&&!s.attached);this.#t.classList.toggle("inactive",!t),t&&this.#e.setVisible(!0)}item(){return this.#e}}class B{constructor(){n.instance().moduleSetting("java-script-disabled").addChangeListener(e),e();function e(){const t=[];n.instance().moduleSetting("java-script-disabled").get()&&t.push(h(u.javascriptIsDisabled)),Y.instance().setPanelWarnings("sources",t)}}}class q{#t;#e;#s;constructor(){this.#t=n.instance().moduleSetting("auto-attach-to-created-pages"),this.#t.addChangeListener(this.#r,this),this.#r(),this.#e=n.instance().moduleSetting("network.ad-blocking-enabled"),this.#e.addChangeListener(this.#n,this),this.#s=n.instance().moduleSetting("emulate-page-focus"),this.#s.addChangeListener(this.#n,this),d.instance().observeTargets(this)}#a(e){e.type()!==l.FRAME||e.parentTarget()?.type()===l.FRAME||(e.pageAgent().invoke_setAdBlockingEnabled({enabled:this.#e.get()}),e.emulationAgent().invoke_setFocusEmulationEnabled({enabled:this.#s.get()}))}#r(){P.setOpenNewWindowForPopups(this.#t.get())}#n(){for(const e of d.instance().targets())this.#a(e)}targetAdded(e){this.#a(e)}targetRemoved(e){}}_.install();const ye=Object.freeze(Object.defineProperty({__proto__:null,BackendSettingsSync:q,FocusDebuggeeActionDelegate:he,InspectorMainImpl:S,NodeIndicator:R,ReloadActionDelegate:ue,SourcesPanelIndicator:B},Symbol.toStringTag,{value:"Module"})),j=new CSSStyleSheet;j.replaceSync(`/*
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
`);const b={targetNotSelected:"Page: Not selected",targetS:"Page: {PH1}"},me=A("entrypoints/inspector_main/OutermostTargetSelector.ts",b),w=I.bind(void 0,me);let T;class M{listItems;#t;#e;constructor(){this.listItems=new ee,this.#t=new te(this.listItems,this),this.#t.setRowHeight(36),this.#e=new k(this.#t.element),this.#e.setTitle(w(b.targetNotSelected)),this.listItems.addEventListener("ItemsReplaced",()=>this.#e.setEnabled(!!this.listItems.length)),this.#e.element.classList.add("toolbar-has-dropdown");const e=d.instance();e.addModelListener(_,"TargetInfoChanged",this.#a,this),e.addEventListener("NameChanged",this.#r,this),e.observeTargets(this),p.instance().addFlavorChangeListener(f,this.#n,this)}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!T||t)&&(T=new M),T}item(){return this.#e}highlightedItemChanged(e,t,s,i){s&&s.classList.remove("highlighted"),i&&i.classList.add("highlighted")}titleFor(e){return e.name()}targetAdded(e){e.outermostTarget()===e&&(this.listItems.insertWithComparator(e,this.#s()),this.#e.setVisible(this.listItems.length>1),e===p.instance().flavor(f)&&this.#t.selectItem(e))}targetRemoved(e){const t=this.listItems.indexOf(e);t!==-1&&(this.listItems.remove(t),this.#e.setVisible(this.listItems.length>1))}#s(){return(e,t)=>{const s=e.targetInfo(),i=t.targetInfo();return!s||!i?0:!s.subtype?.length&&i.subtype?.length?-1:s.subtype?.length&&!i.subtype?.length?1:s.url.localeCompare(i.url)}}#a(e){const s=d.instance().targetById(e.data.targetId);!s||s.outermostTarget()!==s||(this.targetRemoved(s),this.targetAdded(s))}#r(e){const t=e.data;!t||t.outermostTarget()!==t||(this.targetRemoved(t),this.targetAdded(t))}#n({data:e}){this.#t.selectItem(e?.outermostTarget()||null)}createElementForItem(e){const t=document.createElement("div");t.classList.add("target");const s=D(t,{cssFile:[j],delegatesFocus:void 0}),i=s.createChild("div","title");L(i,se(this.titleFor(e),100));const o=s.createChild("div","subtitle");return L(o,this.#i(e)),t}#i(e){const t=e.targetInfo();return e===d.instance().primaryPageTarget()&&t?ae(t.url):e.targetInfo()?.subtype||""}isItemSelectable(e){return!0}itemSelected(e){const t=e?w(b.targetS,{PH1:this.titleFor(e)}):w(b.targetNotSelected);this.#e.setTitle(t),e&&e!==p.instance().flavor(f)?.outermostTarget()&&p.instance().setFlavor(f,e)}}const ve=Object.freeze(Object.defineProperty({__proto__:null,OutermostTargetSelector:M},Symbol.toStringTag,{value:"Module"}));export{ye as InspectorMain,ve as OutermostTargetSelector,Se as RenderingOptions};
//# sourceMappingURL=inspector_main-DR7EOE2e.js.map
