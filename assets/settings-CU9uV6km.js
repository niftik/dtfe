import{b as U,g as M,aN as Fe,aO as ee,eC as ye,aP as te,aU as _,aZ as Pe,bK as G,V as ne,ck as Ue,eD as Me,u as I,bi as N,aj as u,bJ as W,cH as D,b0 as C,d7 as Ne,eE as Be,cQ as ve,eF as Oe,cq as Ke,bI as He,dj as je,cR as z,bS as Se,bw as xe,cb as se,bD as V,eG as we,eH as Ge,eI as Ve,eJ as ke,bq as v,eK as _e,a as We,eL as O,l as oe,bU as qe,bV as Ye,bh as Xe,bj as K,be as Ze,bf as Je,d8 as re,d6 as Qe,bQ as et,eA as ae,b2 as le,du as tt,e4 as st,e5 as it,e6 as nt,eM as de,eN as ot,e8 as rt,en as A,A as q,eO as ce,aJ as Z,eP as Ce,b6 as at,cA as he,eQ as lt,eR as dt,cm as k,bO as ct,eS as ht,aK as ge,eT as ue,eU as Y,eV as gt}from"./inspector-CyOA7R9n.js";import{P as Ee}from"./utils-C4_HKhgT.js";import"./ChromeLink-Cmjg_CBV.js";const Le=new CSSStyleSheet;Le.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  break-inside: avoid;
  display: block;
  padding-bottom: 9px;
  width: 288px;
}

fieldset {
  border: 0;
  margin-left: 20px;
  padding: 0;
}

legend {
  color: var(--sys-color-token-subtle);
  font-size: 120%;
  margin-left: -20px;
  padding: 0;
  text-align: left;
}

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

img {
  border: 0;
  border-radius: var(--sys-shape-corner-full);
  display: block;
  height: var(--sys-size-9);
  width: var(--sys-size-9);
}

.warning {
  display: block;
  margin-top: 12px;
}

.account-info {
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.account-email {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}

/*# sourceURL=syncSection.css */
`);const{html:H}=te,T={syncDisabled:"To turn this setting on, you must enable Chrome sync.",preferencesSyncDisabled:"To turn this setting on, you must first enable settings sync in Chrome.",settings:"Go to Settings",signedIn:"Signed into Chrome as:"},ut=U("panels/settings/components/SyncSection.ts",T),R=M.bind(void 0,ut);class Te extends HTMLElement{#s=this.attachShadow({mode:"open"});#t={isSyncActive:!1};#e;#i=this.#n.bind(this);connectedCallback(){this.#s.adoptedStyleSheets=[Le]}set data(e){this.#t=e.syncInfo,this.#e=e.syncSetting,Fe(this,this.#i)}#n(){if(!this.#e)throw new Error("SyncSection not properly initialized");const e=!this.#t.isSyncActive||!this.#t.arePreferencesSynced;this.#e?.setDisabled(e),ee(H`
      <fieldset>
        <legend>${ye("SYNC")}</legend>
        ${pt(this.#t)}
        <setting-checkbox .data=${{setting:this.#e}}>
        </setting-checkbox>
      </fieldset>
    `,this.#s,{host:this})}}function pt(m){return m.isSyncActive?m.arePreferencesSynced?H`
    <div class="account-info">
      <img src="data:image/png;base64, ${m.accountImage}" alt="Account avatar" />
      <div class="account-email">
        <span>${R(T.signedIn)}</span>
        <span>${m.accountEmail}</span>
      </div>
    </div>`:H`
      <span class="warning">
        ${R(T.preferencesSyncDisabled)}
        <devtools-chrome-link .href=${"chrome://settings/syncSetup/advanced"}>${R(T.settings)}</devtools-chrome-link>
      </span>`:H`
      <span class="warning">
        ${R(T.syncDisabled)}
        <devtools-chrome-link .href=${"chrome://settings/syncSetup"}>${R(T.settings)}</devtools-chrome-link>
      </span>`}customElements.define("devtools-sync-section",Te);const j=new CSSStyleSheet;j.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.settings-window-main {
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
}

.settings-content {
  overflow-y: auto;
  overflow-x: hidden;
  margin: 8px 8px 8px 0;
  padding: 0 4px;
  flex: auto;
}

.settings-container {
  width: 100%;
  column-width: 288px;
}

.settings-block {
  display: block;
  padding-bottom: 9px;
  width: 288px;
  break-inside: avoid;
}

.settings-tab.settings-container {
  column-width: 308px;
}

.settings-tab .settings-block {
  margin-left: 20px;
}

.settings-line {
  padding-bottom: 5px;
  margin-bottom: 5px;
}

.settings-key-cell {
  display: inline-block;
  width: 153px;
  white-space: nowrap;
  text-align: right;
  vertical-align: middle;
  padding-right: 6px;
}

.settings-cell {
  display: inline-block;
  width: 135px;
  vertical-align: middle;
}

.settings-section-title {
  font-size: 120%;
  text-align: left;
}

.settings-combine-keys {
  margin: 0 0.3em;
  font-size: 9px;
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

.experiments-filter {
  padding-top: 1px;
  display: flex;
  align-items: center;
}

label {
  padding-right: 8px;
  padding-bottom: 8px;
}

.experiments-filter label {
  padding-bottom: 0;
}

.settings-tab p {
  margin: 6px 0;
}

.settings-block p p {
  padding-left: 30px;
}

.settings-select {
  align-items: center;
  display: grid;
}

.settings-experiments-warning-subsection-warning {
  color: var(--sys-color-error);
}

.settings-experiments-warning-subsection-message {
  color: inherit;
}

.settings-content input[type="checkbox"] {
  margin: 1px 7px 1px 2px;
}

.settings-window-label-element {
  flex: none;
}

.settings-window-title {
  display: flex;
  align-items: center;
  font-size: var(--sys-size-9);
  color: var(--sys-color-on-surface);
  margin: var(--sys-size-8) var(--sys-size-7);

  &::before {
    content: "";
    width: var(--sys-size-9);
    height: var(--sys-size-9);
    margin-right: var(--sys-size-6);
    background-image: var(--image-file-devtools);
  }
}

.settings-container-wrapper {
  position: absolute;
  top: 31px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-top: 9px;
  border-top: 1px solid var(--sys-color-divider);
}

.settings-tab.settings-content {
  margin: 0;
  padding: 0;
}

.settings-tab-container {
  flex: auto;
  overflow: hidden;
}

.settings-tab-container header {
  padding: 0 0 6px;
}

#experiments-tab-content .settings-container {
  column-width: auto;
}

#experiments-tab-content .settings-block {
  width: auto;
  margin-left: 0;
  margin-right: 10px;
}

.settings-tab-container header > h1 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding-bottom: 3px;
  white-space: nowrap;
}

.settings-tab .settings-section-title {
  margin-left: -20px;
  color: var(--sys-color-on-surface-subtle);
}

.settings-tab select {
  margin-left: 10px;
  width: 80%;
}

.settings-experiment {
  display: grid;
  grid-template-columns: auto min-content auto 1fr;
}

.settings-experiment .devtools-link {
  display: flex !important; /* stylelint-disable-line declaration-no-important */
  align-items: center;
}

.settings-experiment .devtools-link:has(.link-icon) {
  outline-offset: 0;
}

.experiment-label {
  margin-right: 2px;
}

.settings-experiment-unstable {
  color: var(--sys-color-token-subtle);
}

.settings-experiment .feedback-link {
  color: var(--sys-color-primary);
  text-decoration-line: underline;
  margin-left: 4px;
}

.tabbed-pane-content slot::slotted(.widget) {
  /* '!important' in order to overwrite the slotted widget's 'overflow-auto' class.
  This prevents the focus-ring of selectable elements from being cut off. */
  overflow: visible !important; /* stylelint-disable-line declaration-no-important */
}

@media (forced-colors: active) {
  .settings-window-title {
    color: canvastext;
  }

  .tabbed-pane-header-tab {
    background: ButtonFace;
  }

  .tabbed-pane-header-tab-title {
    color: canvastext;
  }
}

@media (forced-colors: active) and (prefers-color-scheme: dark) {
  .tabbed-pane-header-tab.selected {
    background: ButtonFace;
  }

  .tabbed-pane-header-tab.selected .tabbed-pane-header-tab-title {
    color: HighlightText;
  }
}

/*# sourceURL=settingsScreen.css */
`);const p={settings:"Settings",shortcuts:"Shortcuts",preferences:"Preferences",restoreDefaultsAndReload:"Restore defaults and reload",experiments:"Experiments",theseExperimentsCouldBeUnstable:"These experiments could be unstable or unreliable and may require you to restart DevTools.",theseExperimentsAreParticularly:"These experiments are particularly unstable. Enable at your own risk.",warning:"WARNING:",oneOrMoreSettingsHaveChanged:"One or more settings have changed which requires a reload to take effect.",filterExperimentsLabel:"Filter",noResults:"No experiments match the filter",learnMore:"Learn more",sendFeedback:"Send feedback"},mt=U("panels/settings/SettingsScreen.ts",p),b=M.bind(void 0,mt);let X;class f extends _{tabbedLocation;keybindsTab;reportTabOnReveal;constructor(){super(!0),this.contentElement.classList.add("settings-window-main"),this.contentElement.classList.add("vbox");const e=document.createElement("div");e.classList.add("settings-window-label-element");const t=Pe(e,{cssFile:[j],delegatesFocus:void 0}).createChild("div","settings-window-title");G(t,1),t.textContent=b(p.settings),this.tabbedLocation=ne.instance().createTabbedLocation(()=>f.revealSettingsScreen(),"settings-view");const s=this.tabbedLocation.tabbedPane();s.registerCSSFiles([j]),s.headerElement().prepend(e),s.setShrinkableTabs(!1),s.makeVerticalTabLayout();const n=ne.instance().view("keybinds");n&&n.widget().then(i=>{this.keybindsTab=i}),s.show(this.contentElement),s.selectTab("preferences"),s.addEventListener(Ue.TabInvoked,this.tabInvoked,this),this.reportTabOnReveal=!1}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!X||t)&&(X=new f),X}static revealSettingsScreen(){const e=f.instance();if(e.isShowing())return e;e.reportTabOnReveal=!0;const t=new Me("settings");return t.contentElement.tabIndex=-1,t.addCloseButton(),t.setOutsideClickCallback(()=>{}),t.setPointerEventsBehavior("PierceGlassPane"),t.setOutsideTabIndexBehavior("PreserveMainViewTabIndex"),e.show(t.contentElement),t.setEscapeKeyCallback(e.onEscapeKeyPressed.bind(e)),t.setMarginBehavior("NoMargin"),t.show(),e}static async showSettingsScreen(e={name:void 0,focusTabHeader:void 0}){const{name:t,focusTabHeader:s}=e,n=f.revealSettingsScreen();n.selectTab(t||"preferences");const i=n.tabbedLocation.tabbedPane();await i.waitForTabElementUpdate(),s?i.focusSelectedTabHeader():i.focus()}resolveLocation(e){return this.tabbedLocation}selectTab(e){this.tabbedLocation.tabbedPane().selectTab(e,!0)}tabInvoked(e){const t=e.data;if(!t.isUserGesture)return;const s=t.prevTabId,n=t.tabId;!this.reportTabOnReveal&&s&&s===n||(this.reportTabOnReveal=!1,this.reportSettingsPanelShown(n))}reportSettingsPanelShown(e){if(e===b(p.shortcuts)){I.settingsPanelShown("shortcuts");return}I.settingsPanelShown(e)}onEscapeKeyPressed(e){this.tabbedLocation.tabbedPane().selectedTabId==="keybinds"&&this.keybindsTab&&this.keybindsTab.onEscapeKeyPressed(e)}wasShown(){super.wasShown(),this.registerCSSFiles([j])}}class ie extends _{containerElement;constructor(e,t){super(),this.element.classList.add("settings-tab-container"),t&&(this.element.id=t);const s=this.element.createChild("header");Se(s.createChild("h1"),e),this.containerElement=this.element.createChild("div","settings-container-wrapper").createChild("div","settings-tab settings-content settings-container")}appendSection(e){const t=this.containerElement.createChild("div","settings-block");if(e){ke(t);const s=t.createChild("div","settings-section-title");s.textContent=e,G(s,2),v(t,e)}return t}}class E extends ie{syncSection=new Te;settingToControl=new Map;constructor(){super(b(p.preferences),"preferences-tab-content"),this.element.setAttribute("jslog",`${N("preferences")}`);const e=["","APPEARANCE","SOURCES","ELEMENTS","NETWORK","PERFORMANCE","MEMORY","CONSOLE","EXTENSIONS","PERSISTENCE","DEBUGGER","GLOBAL","SYNC"],t=u.instance().getRegisteredSettings().sort((i,o)=>i.order&&o.order?i.order-o.order:i.order?-1:o.order?1:0);for(const i of e){const o=t.filter(a=>a.category===i&&E.isSettingVisible(a));this.createSectionElement(i,o)}const s=W(b(p.restoreDefaultsAndReload),n,{jslogContext:"settings.restore-defaults-and-reload"});this.appendSection().appendChild(s);function n(){u.instance().clearAll(),_e()}}static isSettingVisible(e){return!!e.title?.()&&!!e.category}wasShown(){D.instance().setFlavor(E,this),super.wasShown(),this.updateSyncSection()}willHide(){super.willHide(),D.instance().setFlavor(E,null)}updateSyncSection(){C.getSyncInformation(e=>{this.syncSection.data={syncInfo:e,syncSetting:Ne("sync-preferences")}})}createExtensionSection(e){const t="EXTENSIONS",n=Be.instance().settingElement();n&&this.createStandardSectionElement(t,e).appendChild(n)}createSectionElement(e,t){e==="EXTENSIONS"?this.createExtensionSection(t):e==="SYNC"&&t.length>0?this.containerElement.appendChild(this.syncSection):t.length>0&&this.createStandardSectionElement(e,t)}createStandardSectionElement(e,t){const s=ye(e),n=this.appendSection(s);for(const i of t){const o=u.instance().moduleSetting(i.settingName),a=ve(o);a&&(this.settingToControl.set(o,a),n.appendChild(a))}return n}highlightObject(e){if(e instanceof Oe){const t=this.settingToControl.get(e);t&&Ee.highlightElement(t)}}}class F extends ie{#s;#t;#e;experimentToControl=new Map;constructor(){super(b(p.experiments),"experiments-tab-content");const e=this.appendSection();e.classList.add("experiments-filter"),this.element.setAttribute("jslog",`${N("experiments")}`);const t=e.createChild("label");t.textContent=b(p.filterExperimentsLabel),this.#e=Ke("","text","experiments-filter"),He(t,this.#e),e.appendChild(this.#e),this.#e.addEventListener("input",()=>this.renderExperiments(this.#e.value.toLowerCase()),!1),this.setDefaultFocusedElement(this.#e),this.setFilter("")}renderExperiments(e){this.experimentToControl.clear(),this.#s&&this.#s.remove(),this.#t&&this.#t.remove();const t=je.allConfigurableExperiments().sort(),s=t.filter(i=>i.unstable&&i.title.toLowerCase().includes(e)),n=t.filter(i=>!i.unstable&&i.title.toLowerCase().includes(e));if(n.length){this.#s=this.appendSection();const i=b(p.theseExperimentsCouldBeUnstable);this.#s.appendChild(this.createExperimentsWarningSubsection(i));for(const o of n)this.#s.appendChild(this.createExperimentCheckbox(o))}if(s.length){this.#t=this.appendSection();const i=b(p.theseExperimentsAreParticularly);this.#t.appendChild(this.createExperimentsWarningSubsection(i));for(const o of s)this.#t.appendChild(this.createExperimentCheckbox(o))}if(!n.length&&!s.length){this.#s=this.appendSection();const i=this.#s.createChild("span");i.textContent=b(p.noResults),z(i.textContent)}}createExperimentsWarningSubsection(e){const t=document.createElement("div"),s=t.createChild("span","settings-experiments-warning-subsection-warning");s.textContent=b(p.warning),Se(t," ");const n=t.createChild("span","settings-experiments-warning-subsection-message");return n.textContent=e,t}createExperimentCheckbox(e){const t=xe.create(e.title,e.isEnabled(),void 0,e.name);t.classList.add("experiment-label");const s=t.checkboxElement;s.name=e.name;function n(){e.setEnabled(s.checked),I.experimentChanged(e.name,e.isEnabled()),We.instance().displayReloadRequiredWarning(b(p.oneOrMoreSettingsHaveChanged))}s.addEventListener("click",n,!1);const i=document.createElement("p");this.experimentToControl.set(e,i),i.classList.add("settings-experiment"),e.unstable&&!e.isEnabled()&&i.classList.add("settings-experiment-unstable"),i.appendChild(t);const o=e.docLink;if(o){const a=new se;a.data={iconName:"help",variant:"icon",size:"SMALL",jslogContext:`${e.name}-documentation`},a.addEventListener("click",()=>C.openInNewTab(o)),a.ariaLabel=b(p.learnMore),a.classList.add("link-icon"),i.appendChild(a)}if(e.feedbackLink){const a=V.create(e.feedbackLink,void 0,void 0,void 0,`${e.name}-feedback`);a.textContent=b(p.sendFeedback),a.classList.add("feedback-link"),i.appendChild(a)}return i}highlightObject(e){if(e instanceof we){const t=this.experimentToControl.get(e);t&&Ee.highlightElement(t)}}setFilter(e){this.#e.value=e,this.#e.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))}wasShown(){D.instance().setFlavor(F,this),super.wasShown()}willHide(){super.willHide(),D.instance().setFlavor(F,null)}}class bt{handleAction(e,t){switch(t){case"settings.show":return f.showSettingsScreen({focusTabHeader:!0}),!0;case"settings.documentation":return C.openInNewTab(Ge("https://developer.chrome.com/docs/devtools/")),!0;case"settings.shortcuts":return f.showSettingsScreen({name:"keybinds",focusTabHeader:!0}),!0}return!1}}class ft{async reveal(e){const t=D.instance();if(e instanceof we){C.bringToFront(),await f.showSettingsScreen({name:"experiments"});const s=t.flavor(F);s!==null&&s.highlightObject(e);return}for(const s of u.instance().getRegisteredSettings())if(E.isSettingVisible(s)&&s.settingName===e.name){C.bringToFront(),await f.showSettingsScreen();const n=t.flavor(E);n!==null&&n.highlightObject(e);return}for(const s of Ve(u.instance().getHostConfig())){const n=s.viewId();if(s.location()!=="settings-view")continue;const o=s.settings();if(o&&o.indexOf(e.name)!==-1){C.bringToFront(),await f.showSettingsScreen({name:n});const a=await s.widget();a instanceof ie&&a.highlightObject(e);return}}}}const Tt=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:bt,ExperimentsSettingsTab:F,GenericSettingsTab:E,Revealer:ft,SettingsScreen:f},Symbol.toStringTag,{value:"Module"})),J=new CSSStyleSheet;J.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

.header {
  padding: 0 0 6px;
  border-bottom: 1px solid var(--sys-color-divider);
  font-size: 18px;
  font-weight: normal;
  flex: none;
}

.intro {
  margin-top: 10px;
}

.ignore-list-option {
  flex: none;
  padding: 3px 6px;
  min-height: 30px;
}

.ignore-list-option devtools-button {
  position: relative;
  top: var(--sys-size-2);
  margin-left: var(--sys-size-2);
}

.ignore-list-option-group {
  margin-top: 13px;
  margin-bottom: 3px;
  margin-left: 8px;
  flex-shrink: 0;
}

.add-button {
  margin: 10px 2px;
  align-self: flex-start;
  flex: none;
}

.ignore-list {
  max-width: 500px;
  flex: 0 1 auto;
}

.ignore-list-global-enable {
  padding: 3px 0;
  color: var(--sys-color-token-subtle);
  font-size: 120%;
  margin-top: 17px;
}

.ignore-list-item {
  padding: 3px 5px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  flex: auto 1 1;
}

.ignore-list-pattern {
  flex: auto;
  min-width: 100px;
}

.ignore-list-item > [is="dt-checkbox"] {
  width: 100%;
}

.ignore-list-item .ignore-list-pattern {
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  color: var(--sys-color-on-surface);
  overflow: hidden;
}

.ignore-list-edit-row {
  flex: none;
  display: flex;
  flex-direction: row;
  margin: 6px 5px;
  align-items: center;
}

.ignore-list-edit-row input,
.ignore-list-edit-row select {
  width: 100%;
  text-align: inherit;
}

.ignore-list-options {
  margin-left: 22px;
  display: flex;
  flex-direction: column;
}

.ignore-list-options.ignore-listing-disabled {
  opacity: 30%;
}

.list:has(.ignore-list-empty),
.list:has(.ignore-list-edit-row),
.list:has(.ignore-list-item) {
  border: none;
}

.editor-container:has(.ignore-list-edit-row) {
  background: var(--sys-color-surface1);
  border-radius: 10px;
}

.ignore-list.list-editing ~ .add-button {
  display: none;
}

.devtools-link:has(devtools-icon) {
  margin-left: 6px;
}

/*# sourceURL=frameworkIgnoreListSettingsTab.css */
`);const h={frameworkIgnoreList:"Framework ignore list",debuggerWillSkipThroughThe:"Debugger won't step through these scripts or break on exceptions that only affect them and Performance panel will collapse flamechart items that match.",ignoreListContentScripts:"Content scripts injected by extensions",ignoreListAnonymousScripts:"Anonymous scripts from eval or console",automaticallyIgnoreListKnownThirdPartyScripts:"Known third-party scripts from source maps",enableIgnoreListing:"Enable ignore listing",enableIgnoreListingTooltip:"Uncheck to disable all ignore listing",generalExclusionRules:"General exclusion rules:",customExclusionRules:"Custom exclusion rules:",addPattern:"Add regex rule...",addFilenamePattern:"Add a regular expression rule for the script's URL",ignoreScriptsWhoseNamesMatchS:"Ignore scripts whose names match ''{PH1}''",pattern:"Add a regular expression rule for the script's URL",patternCannotBeEmpty:"Rule can't be empty",patternAlreadyExists:"Rule already exists",patternMustBeAValidRegular:"Rule must be a valid regular expression",learnMore:"Learn more"},yt=U("panels/settings/FrameworkIgnoreListSettingsTab.ts",h),g=M.bind(void 0,yt);class vt extends _{list;setting;editor;constructor(){super(!0),this.element.setAttribute("jslog",`${N("blackbox")}`);const e=this.contentElement.createChild("div","header");e.textContent=g(h.frameworkIgnoreList),G(e,1),this.contentElement.createChild("div","intro").textContent=g(h.debuggerWillSkipThroughThe);const t=u.instance().moduleSetting("enable-ignore-listing"),s=this.contentElement.createChild("div","ignore-list-global-enable");s.appendChild(O(g(h.enableIgnoreListing),t)),oe.install(s,g(h.enableIgnoreListingTooltip));const n=this.contentElement.createChild("div","ignore-list-options"),i=this.createSettingGroup(g(h.generalExclusionRules));n.appendChild(i),i.createChild("div","ignore-list-option").appendChild(O(g(h.ignoreListContentScripts),u.instance().moduleSetting("skip-content-scripts")));const a=i.createChild("div","ignore-list-option");a.appendChild(O(g(h.automaticallyIgnoreListKnownThirdPartyScripts),u.instance().moduleSetting("automatically-ignore-list-known-third-party-scripts")));const y=new se;y.data={iconName:"help",variant:"icon",size:"SMALL",jslogContext:"learn-more",title:g(h.learnMore)},y.addEventListener("click",()=>C.openInNewTab("http://goo.gle/skip-third-party")),a.appendChild(y),i.createChild("div","ignore-list-option").appendChild(O(g(h.ignoreListAnonymousScripts),u.instance().moduleSetting("skip-anonymous-scripts")));const w=this.createSettingGroup(g(h.customExclusionRules));n.appendChild(w),this.list=new qe(this),this.list.element.classList.add("ignore-list");const $=document.createElement("div");$.classList.add("ignore-list-empty"),this.list.setEmptyPlaceholder($),this.list.show(w);const L=W(g(h.addPattern),this.addButtonClicked.bind(this),{className:"add-button",jslogContext:"settings.add-ignore-list-pattern"});v(L,g(h.addFilenamePattern)),w.appendChild(L),this.setting=u.instance().moduleSetting("skip-stack-frames-pattern"),this.setting.addChangeListener(this.settingUpdated,this),this.setDefaultFocusedElement(L),t.addChangeListener(S),S();function S(){t.get()?n.classList.remove("ignore-listing-disabled"):n.classList.add("ignore-listing-disabled")}}wasShown(){super.wasShown(),this.list.registerCSSFiles([J]),this.registerCSSFiles([J]),this.settingUpdated()}settingUpdated(){this.list.clear();const e=this.setting.getAsArray();for(let t=0;t<e.length;++t)this.list.appendItem(e[t],!0)}addButtonClicked(){this.list.addNewItem(this.setting.getAsArray().length,{pattern:"",disabled:!1})}createSettingGroup(e){const t=document.createElement("div");t.classList.add("ignore-list-option-group"),ke(t);const s=t.createChild("div","ignore-list-option-group-title");return G(s,2),v(t,e),s.textContent=e,t}renderItem(e,t){const s=document.createElement("div"),n=this.setting,i=xe.create(e.pattern,!e.disabled,void 0,"settings.ignore-list-pattern"),o=g(h.ignoreScriptsWhoseNamesMatchS,{PH1:e.pattern});return oe.install(i,o),i.checkboxElement.ariaLabel=o,i.checkboxElement.addEventListener("change",a,!1),s.appendChild(i),s.classList.add("ignore-list-item"),s;function a(){const y=!i.checkboxElement.checked;e.disabled!==y&&(e.disabled=y,e.disabledForUrl=void 0,n.setAsArray(n.getAsArray()))}}removeItemRequested(e,t){const s=this.setting.getAsArray();s.splice(t,1),this.setting.setAsArray(s)}commitEdit(e,t,s){e.pattern=t.control("pattern").value.trim();const n=this.setting.getAsArray();s&&n.push(e),this.setting.setAsArray(n)}beginEdit(e){const t=this.createEditor();return t.control("pattern").value=e.pattern,t}createEditor(){if(this.editor)return this.editor;const e=new Ye;this.editor=e;const t=e.contentElement(),s=t.createChild("div","ignore-list-edit-row");s.createChild("div","ignore-list-pattern").textContent=g(h.pattern);const n=t.createChild("div","ignore-list-edit-row"),i=e.createInput("pattern","text","/framework\\.js$",o.bind(this));return v(i,g(h.pattern)),n.createChild("div","ignore-list-pattern").appendChild(i),e;function o(a,y,B){const w=B.value.trim(),$=this.setting.getAsArray();if(!w.length)return{valid:!1,errorMessage:g(h.patternCannotBeEmpty)};for(let S=0;S<$.length;++S)if(S!==y&&$[S].pattern===w)return{valid:!1,errorMessage:g(h.patternAlreadyExists)};let L;try{L=new RegExp(w)}catch{}return L?{valid:!0,errorMessage:void 0}:{valid:!1,errorMessage:g(h.patternMustBeAValidRegular)}}}}const At=Object.freeze(Object.defineProperty({__proto__:null,FrameworkIgnoreListSettingsTab:vt},Symbol.toStringTag,{value:"Module"})),Ae=new CSSStyleSheet;Ae.replaceSync(`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  position: relative;
  display: inline-block;
  width: 26px;
  height: var(--sys-size-8);
}

input {
  opacity: 0%;
  width: 0;
  height: 0;
}

.slider {
  box-sizing: border-box;
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--sys-color-surface-variant);
  border: 1px solid var(--sys-color-outline);
  border-radius: var(--sys-shape-corner-full);
  transition: background-color 80ms linear;
}

.slider::before {
  position: absolute;
  content: "";
  height: var(--sys-size-5);
  width: var(--sys-size-5);
  border-radius: var(--sys-shape-corner-full);
  top: calc(50% - 4px);
  left: 3px;
  background-color: var(--sys-color-outline);
  transition:
    transform 80ms linear,
    background-color 80ms linear,
    width 80ms linear,
    height 80ms linear,
    top 80ms linear,
    left 80ms linear;
}

input:focus-visible + .slider {
  outline: 2px solid var(--sys-color-state-focus-ring);
  outline-offset: 2px;
}

input:checked {
  & + .slider {
    background-color: var(--sys-color-primary);
    border: 1px solid var(--sys-color-primary);
  }

  & + .slider::before {
    left: 11px;
    height: var(--sys-size-6);
    width: var(--sys-size-6);
    top: calc(50% - 6px);
    background-color: var(--sys-color-on-primary);
  }
}

input:disabled:not(:checked) {
  & + .slider {
    background-color: transparent;
    border-color: var(--sys-color-state-disabled);
  }

  & + .slider::before {
    background-color: var(--sys-color-state-disabled);
  }
}

input:disabled:checked {
  & + .slider {
    background-color: var(--sys-color-state-disabled-container);
    border-color: transparent;
  }

  & + .slider::before {
    background-color: var(--sys-color-surface);
  }
}

/*# sourceURL=switch.css */
`);const{html:St}=te;class P extends Event{checked;static eventName="switchchange";constructor(e){super(P.eventName),this.checked=e}}class Q extends HTMLElement{#s=this.attachShadow({mode:"open"});#t=!1;#e=!1;#i="";connectedCallback(){this.#s.adoptedStyleSheets=[Ae],this.#o()}set checked(e){this.#t=e,this.#o()}get checked(){return this.#t}set disabled(e){this.#e=e,this.#o()}get disabled(){return this.#e}get jslogContext(){return this.#i}set jslogContext(e){this.#i=e,this.#o()}#n=e=>{this.#t=e.target.checked,this.dispatchEvent(new P(this.#t))};#o(){const e=this.#i&&Xe(this.#i).track({change:!0});ee(St`
    <label role="button">
      <input type="checkbox"
        @change=${this.#n}
        ?disabled=${this.#e}
        .checked=${this.#t}
        jslog=${e||K}>
      <span class="slider" @click=${t=>t.stopPropagation()}></span>
    </label>
    `,this.#s,{host:this})}}customElements.define("devtools-switch",Q);const Ie=new CSSStyleSheet;Ie.replaceSync(`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
}

header > h1 {
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  white-space: nowrap;
}

.shared-disclaimer {
  background: linear-gradient(135deg, var(--sys-color-gradient-primary), var(--sys-color-gradient-tertiary));
  border-radius: var(--sys-size-5);
  padding: var(--sys-size-9) var(--sys-size-11);
  max-width: var(--sys-size-35);
  min-width: var(--sys-size-28);

  h2 {
    font: var(--sys-typescale-headline5);
    margin: 0 0 var(--sys-size-6);
  }
}

.disclaimer-list-header {
  font: var(--sys-typescale-body5-medium);
  margin: 0;
}

.disclaimer-list {
  padding: var(--sys-size-6) 0 0;
  display: grid;
  grid-template-columns: var(--sys-size-12) auto;
  gap: var(--sys-size-6) 0;
  line-height: var(--sys-typescale-body5-line-height);
}

.settings-container {
  display: grid;
  grid-template-columns: 1fr auto auto;
  border-radius: var(--sys-size-5);
  box-shadow: var(--sys-elevation-level3); /* stylelint-disable-line plugin/use_theme_colors */
  margin: var(--sys-size-11) 0 var(--sys-size-4);
  line-height: var(--sys-typescale-body5-line-height);
  min-width: var(--sys-size-28);
  max-width: var(--sys-size-35);
  background-color: var(--app-color-card-background);
}

.accordion-header {
  display: grid;
  grid-template-columns: auto 1fr auto;

  &:hover {
    background-color: var(--sys-color-state-hover-on-subtle);
  }
}

.icon-container,
.dropdown {
  padding: 0 var(--sys-size-8);
}

.toggle-container {
  padding: 0 var(--sys-size-8) 0 var(--sys-size-9);

  &:hover {
    background-color: var(--sys-color-state-hover-on-subtle);
  }
}

.expansion-grid {
  padding: var(--sys-size-4) var(--sys-size-8) var(--sys-size-6);
  display: grid;
  grid-template-columns: var(--sys-size-9) auto;
  gap: var(--sys-size-6) var(--sys-size-8);
  line-height: var(--sys-typescale-body5-line-height);
  color: var(--sys-color-on-surface-subtle);
}

.expansion-grid-whole-row {
  grid-column: span 2;
  font-weight: var(--ref-typeface-weight-medium);
  color: var(--sys-color-on-surface);
  padding-top: var(--sys-size-4);
  margin: 0;
  font-size: inherit;
}

.setting-description {
  color: var(--sys-color-on-surface-subtle);
}

.centered {
  display: grid;
  place-content: center;
}

.setting-card {
  padding: var(--sys-size-6) 0;

  h2 {
    margin: 0;
    font: inherit;
  }
}

.divider {
  margin: var(--sys-size-5) 0;
  border-left: var(--sys-size-1) solid var(--sys-color-divider);
}

.accordion-header ~ .accordion-header,
.divider ~ .divider,
.toggle-container ~ .toggle-container {
  border-top: var(--sys-size-1) solid var(--sys-color-divider);
}

.whole-row {
  grid-column: span 5;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--sys-motion-duration-short4) ease-in;
}

.whole-row.open {
  grid-template-rows: 1fr;
}

.overflow-hidden {
  overflow: hidden;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: var(--sys-size-2);
  padding: 0;
  font-weight: var(--ref-typeface-weight-regular);
}

.padded {
  padding: var(--sys-size-2) 0;
}

.settings-container-wrapper {
  position: absolute;
  top: 31px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding: var(--sys-size-6);
  border-top: 1px solid var(--sys-color-divider);
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .settings-container-wrapper {
    align-items: center;
  }
}

header {
  font-size: var(--sys-typescale-headline3-size);
  font-weight: var(--ref-typeface-weight-regular);
}

/*# sourceURL=aiSettingsTab.css */
`);const{html:x,Directives:{ifDefined:pe,classMap:me}}=te,r={boostYourProductivity:"Boost your productivity with AI",thingsToConsider:"Things to consider",experimentalFeatures:"These features are experimental. They use generative AI and may provide inaccurate or offensive information that doesn’t represent Google’s views.",sendsDataToGoogle:"These features send relevant data to Google. Google collects this data and feedback to improve its products and services with the help of human reviewers. Avoid sharing sensitive or personal information.",retainData:"Usage data will be retained for up to 18 months and stored in such a way that Google can’t tell who provided it.",adminSettings:"Depending on your Google account management and/or region, Google may refrain from data collection. Depending on your organization’s settings, features available to managed users may vary.",helpUnderstandConsole:"Helps you understand and fix console warnings and errors",showMore:"Show more",showLess:"Show less",whenOn:"When on",explainConsole:"Get explanations for console warnings and errors",receiveSuggestions:"Receive suggestions and code samples to address these issues",consoleInsightsSendsData:"The console message, associated stack trace, related source code, and the associated network headers are sent to Google to generate explanations. This data may be seen by human reviewers to improve this feature.",termsOfServicePrivacyNotice:"Use of these features is subject to the {PH1} and {PH2}",helpUnderstandStyling:"Get help with understanding CSS styles",helpUnderstandStylingAndNetworkRequest:"Get help with understanding CSS styles and network requests",helpUnderstandStylingNetworkAndFile:"Get help with understanding CSS styles, network requests, and files",learnMore:"Learn more",explainStyling:"Understand CSS styles with AI-powered insights",explainStylingAndNetworkRequest:"Understand CSS styles, and network activity with AI-powered insights",explainStylingNetworkAndFile:"Understand CSS styles, network activity, and file origins with AI-powered insights",receiveStylingSuggestions:"Improve your development workflow with contextual explanations and suggestions",freestylerSendsData:"Any data the inspected page can access via Web APIs, network requests, files, and performance traces are sent to Google to generate explanations. This data may be seen by human reviewers to improve this feature. Don’t use on pages with personal or sensitive information.",termsOfService:"Google Terms of Service",privacyNotice:"Google Privacy Policy",aiInnovations:"AI innovations",enableConsoleInsights:"Enable `Console insights`",enableAiAssistance:"Enable AI assistance",ageRestricted:"This feature is only available to users who are 18 years of age or older",notLoggedIn:"This feature is only available when you sign into Chrome with your Google account.",offline:"This feature is only available with an active internet connection."},$e=U("panels/settings/AISettingsTab.ts",r),l=M.bind(void 0,$e),be=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m10%2013.063-5-5L6.063%207%2010%2010.938%2013.938%207%2015%208.063l-5%205Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),fe=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.063%2013%205%2011.937l5-5%205%205L13.937%2013%2010%209.062%206.062%2013Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString();class Re extends Ze{#s=this.attachShadow({mode:"open"});#t;#e;#i=!1;#n=!1;#o="no-account-email";#a;constructor(){super();try{this.#t=u.instance().moduleSetting("console-insights-enabled")}catch{this.#t=void 0}try{this.#e=u.instance().moduleSetting("ai-assistance-enabled")}catch{this.#e=void 0}this.#a=this.#l.bind(this)}connectedCallback(){this.#s.adoptedStyleSheets=[Je,Ie],re.instance().addEventListener("aidaAvailabilityChanged",this.#a),this.#l()}disconnectedCallback(){re.instance().removeEventListener("aidaAvailabilityChanged",this.#a)}async#l(){const e=await Qe.checkAccessPreconditions();e!==this.#o&&(this.#o=e,this.render())}#g(){const e=u.instance().getHostConfig();return e.devToolsExplainThisResourceDogfood?.enabled?e.devToolsAiAssistanceFileAgentDogfood?.enabled?l(r.helpUnderstandStylingNetworkAndFile):l(r.helpUnderstandStylingAndNetworkRequest):l(r.helpUnderstandStyling)}#u(){const e=u.instance().getHostConfig();return e.devToolsExplainThisResourceDogfood?.enabled?e.devToolsAiAssistanceFileAgentDogfood?.enabled?l(r.explainStylingNetworkAndFile):l(r.explainStylingAndNetworkRequest):l(r.explainStyling)}#p(){this.#i=!this.#i,this.render()}#d(e){if(e.target instanceof Q&&e.type!==P.eventName||!this.#t)return;const t=this.#t.get();this.#t.set(!t),!t&&!this.#i&&(this.#i=!0),t===!1&&u.instance().createSetting("console-insights-skip-reminder",!0,"Session").set(!0),this.render()}#m(){this.#n=!this.#n,this.render()}#c(e){if(e.target instanceof Q&&e.type!==P.eventName||!this.#e)return;const t=this.#e.get();this.#e.set(!t),!t&&!this.#n&&(this.#n=!0),this.render()}#b(e,t){return x`
      <div>
        <devtools-icon .data=${{iconName:e,color:"var(--icon-default)",width:"var(--sys-size-8)",height:"var(--sys-size-8)"}}>
        </devtools-icon>
      </div>
      <div>${t}</div>
    `}#f(){const e=V.create("https://policies.google.com/terms",l(r.termsOfService),void 0,void 0,"terms-of-service"),t=V.create("https://policies.google.com/privacy",l(r.privacyNotice),void 0,void 0,"privacy-notice"),s=[{icon:"psychiatry",text:l(r.experimentalFeatures)},{icon:"google",text:l(r.sendsDataToGoogle)},{icon:"calendar-today",text:l(r.retainData)},{icon:"corporate-fare",text:l(r.adminSettings)},{icon:"policy",text:x`${et($e,r.termsOfServicePrivacyNotice,{PH1:e,PH2:t})}`}];return x`
      <div class="shared-disclaimer">
        <h2>${l(r.boostYourProductivity)}</h2>
        <h3 class="disclaimer-list-header">${l(r.thingsToConsider)}</h3>
        <div class="disclaimer-list">
          ${s.map(n=>this.#b(n.icon,n.text))}
        </div>
      </div>
    `}#r(e,t){return x`
      <div>
        <devtools-icon .data=${{iconName:e,width:"var(--sys-size-9)",height:"var(--sys-size-9)"}}>
        </devtools-icon>
      </div>
      <div class="padded">${t}</div>
    `}#h(e){switch(this.#o){case"no-account-email":case"sync-is-paused":return l(r.notLoggedIn);case"no-internet":return l(r.offline)}return u.instance().getHostConfig()?.aidaAvailability?.blockedByAge===!0?l(r.ageRestricted):e?.disabledReason()}#y(){const e={"whole-row":!0,open:this.#i},t=this.#i?"0":"-1",s=this.#h(this.#t);return x`
      <div class="accordion-header" @click=${this.#p}>
        <div class="icon-container centered">
          <devtools-icon name="lightbulb-spark"></devtools-icon>
        </div>
        <div class="setting-card">
          <h2>${ae("Console Insights")}</h2>
          <div class="setting-description">${l(r.helpUnderstandConsole)}</div>
        </div>
        <div class="dropdown centered">
          <devtools-button
            .data=${{title:this.#i?l(r.showLess):l(r.showMore),size:"SMALL",iconUrl:this.#i?fe:be,variant:"icon",jslogContext:"console-insights.accordion"}}
          ></devtools-button>
        </div>
      </div>
      <div class="divider"></div>
      <div class="toggle-container centered"
        title=${pe(s)}
        @click=${this.#d.bind(this)}
      >
        <devtools-switch
          .checked=${!!this.#t?.get()&&!s}
          .jslogContext=${this.#t?.name||""}
          .disabled=${!!s}
          @switchchange=${this.#d.bind(this)}
          aria-label=${s||l(r.enableConsoleInsights)}
        ></devtools-switch>
      </div>
      <div class=${me(e)}>
        <div class="overflow-hidden">
          <div class="expansion-grid">
            <h3 class="expansion-grid-whole-row">${l(r.whenOn)}</h3>
            ${this.#r("lightbulb",l(r.explainConsole))}
            ${this.#r("code",l(r.receiveSuggestions))}
            <h3 class="expansion-grid-whole-row">${l(r.thingsToConsider)}</h3>
            ${this.#r("google",l(r.consoleInsightsSendsData))}
            <div class="expansion-grid-whole-row">
              <x-link
                href="https://goo.gle/devtools-console-messages-ai"
                class="link"
                tabindex=${t}
                jslog=${le("learn-more.console-insights").track({click:!0})}
              >${l(r.learnMore)}</x-link>
            </div>
          </div>
        </div>
      </div>
    `}#v(){const e={"whole-row":!0,open:this.#n},t=this.#n?"0":"-1",s=this.#h(this.#e);return x`
      <div class="accordion-header" @click=${this.#m}>
        <div class="icon-container centered">
          <devtools-icon name="smart-assistant"></devtools-icon>
        </div>
        <div class="setting-card">
          <h2>${ae("AI assistance")}</h2>
          <div class="setting-description">${this.#g()}</div>
        </div>
        <div class="dropdown centered">
          <devtools-button
            .data=${{title:this.#n?l(r.showLess):l(r.showMore),size:"SMALL",iconUrl:this.#n?fe:be,variant:"icon",jslogContext:"freestyler.accordion"}}
          ></devtools-button>
        </div>
      </div>
      <div class="divider"></div>
      <div class="toggle-container centered"
        title=${pe(s)}
        @click=${this.#c.bind(this)}
      >
        <devtools-switch
          .checked=${!!this.#e?.get()&&!s}
          .jslogContext=${this.#e?.name||""}
          .disabled=${!!s}
          @switchchange=${this.#c.bind(this)}
          aria-label=${s||l(r.enableAiAssistance)}
        ></devtools-switch>
      </div>
      <div class=${me(e)}>
        <div class="overflow-hidden">
          <div class="expansion-grid">
            <h3 class="expansion-grid-whole-row">${l(r.whenOn)}</h3>
            ${this.#r("info",this.#u())}
            ${this.#r("pen-spark",l(r.receiveStylingSuggestions))}
            <h3 class="expansion-grid-whole-row">${l(r.thingsToConsider)}</h3>
            ${this.#r("google",l(r.freestylerSendsData))}
            <div class="expansion-grid-whole-row">
              <x-link
                href="https://goo.gle/devtools-ai-assistance"
                class="link"
                tabindex=${t}
                jslog=${le("learn-more.ai-assistance").track({click:!0})}
              >${l(r.learnMore)}</x-link>
            </div>
          </div>
        </div>
      </div>
    `}async render(){ee(x`
      <header>
        <h1>${l(r.aiInnovations)}</h1>
      </header>
      <div class="settings-container-wrapper" jslog=${N("chrome-ai")}>
        ${this.#f()}
        ${this.#t||this.#e?x`
          <div class="settings-container">
            ${this.#t?this.#y():K}
            ${this.#e?this.#v():K}
          </div>
        `:K}
      </div>
    `,this.#s,{host:this})}}customElements.define("devtools-settings-ai-settings-tab",Re);const It=Object.freeze(Object.defineProperty({__proto__:null,AISettingsTab:Re},Symbol.toStringTag,{value:"Module"})),ze=new CSSStyleSheet;ze.replaceSync(`/*
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

header {
  padding: 0 0 6px;
  border-bottom: 1px solid var(--sys-color-divider);
  flex: none;
  margin-bottom: 16px;
}

h1 {
  font-size: 18px;
  font-weight: normal;
  padding-bottom: 3px;
  margin: 0;
}

[role="list"] {
  overflow: auto;

  > * {
    min-width: 300px;
  }
}

.keybinds-key {
  padding: 0.1em 0.6em;
  border: 1px solid var(--sys-color-neutral-outline);
  font-size: 11px;
  background-color: var(--sys-color-neutral-container);
  color: var(--sys-color-on-surface);
  box-shadow: var(--box-shadow-outline-color);
  border-radius: 3px;
  display: inline-block;
  margin: 0 0.1em;
  text-shadow: 0 1px 0 var(--sys-color-cdt-base-container);
  line-height: 1.5;
  white-space: nowrap;
}

.keybinds-list-item {
  min-height: 30px;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(30px, auto));
  grid-template-columns: 1fr 30px 2fr 30px 30px;
  flex: auto 1 1;
}

.keybinds-list-item:focus-visible {
  background-color: var(--sys-color-tonal-container);
}

.keybinds-list-item:not(.keybinds-category-header) {
  padding: 4px 0 4px 20px;
  border-radius: 7px;
}

.keybinds-list-item:not(.keybinds-category-header):last-child {
  margin-bottom: 5px;
}

.keybinds-list-item.keybinds-editing {
  background-color: var(--sys-color-neutral-container);
}

.keybinds-list-text.keybinds-action-name {
  padding-top: 7px;
  grid-row: 1 / 3;
}

.keybinds-shortcut,
.keybinds-info {
  grid-row: auto;
  grid-column: 3 / span 1;
}

.keybinds-shortcut.devtools-link {
  align-items: center;
  margin-left: 3px;
}

.keybinds-shortcut .devtools-link {
  padding: 4px 0;
}

.keybinds-info .devtools-link {
  padding-top: 6px;
}

.keybinds-error {
  color: var(--sys-color-error);
}

.keybinds-list-item.keybinds-editing .keybinds-shortcut {
  display: flex;
}

.keybinds-modified {
  grid-column: 2 / span 1;
  margin-top: 2px;
}

.keybinds-list-item button {
  border: none;
  padding: 0;
  background: transparent;
}

.keybinds-list-item button:hover devtools-icon {
  color: var(--icon-default-hover);
}

.keybinds-list-item button:focus-visible {
  background-color: var(--sys-color-tonal-container);
}

.keybinds-list-item button[disabled] {
  opacity: 40%;
}

.keybinds-cancel-button {
  grid-column: -1 / span 1;
}

.keybinds-edit-button {
  display: none;
  grid-row: 1 / span 1;
  grid-column: 4 / span 1;
}

.keybinds-list-item:not(.keybinds-editing):hover .keybinds-edit-button,
.keybinds-list-item:not(.keybinds-editing):focus-within .keybinds-edit-button {
  display: inline-block;
}

.keybinds-list-text {
  padding: 3px 0;
  user-select: none;
  color: var(--sys-color-on-surface);
  text-align: start;
  position: relative;
  margin-right: 0;
}

.keybinds-category-header {
  font-weight: bold;
  line-height: 30px;
  white-space: nowrap;
}

.keybinds-category-header:not(:nth-child(2)) {
  border-top: 1px solid var(--sys-color-divider);
}

.keybinds-list-item:not(.keybinds-category-header):hover,
.keybinds-list-item:not(.keybinds-editing):focus-within {
  background: var(--sys-color-state-hover-on-subtle);
}

.keybinds-set-select {
  text-align: right;
  margin-bottom: 16px;
}

.keybinds-set-select label p {
  display: inline;
  color: var(--sys-color-on-surface);
}

.keybinds-set-select select {
  margin-left: 6px;
  margin-top: 6px;
}

button.text-button {
  width: fit-content;
  align-self: flex-end;
}

.keybinds-list-text input {
  margin: 0 2px;
}

.keybinds-list-text:has(.keybinds-delete-button) {
  grid-column: 3 / -1;
}

.docs-link.devtools-link {
  align-self: flex-start;
  min-height: 2em;
  line-height: 2em;
  margin-bottom: 4px;
}

.keybinds-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: fit-content;
  margin-top: 10px;
}

/*# sourceURL=keybindsSettingsTab.css */
`);const d={shortcuts:"Shortcuts",matchShortcutsFromPreset:"Match shortcuts from preset",keyboardShortcutsList:"Keyboard shortcuts list",shortcutModified:"Shortcut modified",noShortcutForAction:"No shortcut for action",addAShortcut:"Add a shortcut",confirmChanges:"Confirm changes",discardChanges:"Discard changes",removeShortcut:"Remove shortcut",editShortcut:"Edit shortcut",shortcutsCannotContainOnly:"Shortcuts cannot contain only modifier keys.",thisShortcutIsInUseByS:"This shortcut is in use by {PH1}: {PH2}.",RestoreDefaultShortcuts:"Restore default shortcuts",FullListOfDevtoolsKeyboard:"Full list of DevTools keyboard shortcuts and gestures",ResetShortcutsForAction:"Reset shortcuts for action",shortcutRemoved:"{PH1} Shortcut removed",shortcutChangesRestored:"Changes to shortcut restored to default",shortcutChangesApplied:"Changes to shortcut applied",shortcutChangesDiscared:"Changes to shortcut discarded"},xt=U("panels/settings/KeybindsSettingsTab.ts",d),c=M.bind(void 0,xt);class wt extends _{items;list;editingItem;editingRow;constructor(){super(!0),this.element.setAttribute("jslog",`${N("keybinds")}`);const e=this.contentElement.createChild("header");e.createChild("h1").textContent=c(d.shortcuts);const t=u.instance().moduleSetting("active-keybind-set"),s=u.instance().moduleSetting("user-shortcuts");t.addChangeListener(this.update,this);const n=ve(t,c(d.matchShortcutsFromPreset));n&&(n.classList.add("keybinds-set-select"),this.contentElement.appendChild(n)),this.items=new tt,this.list=new st(this.items,this,it.NonViewport),this.items.replaceAll(this.createListItems()),nt(this.list.element),this.contentElement.appendChild(this.list.element),v(this.list.element,c(d.keyboardShortcutsList));const i=this.contentElement.createChild("div");i.classList.add("keybinds-footer");const o=V.create("https://developer.chrome.com/docs/devtools/shortcuts/",c(d.FullListOfDevtoolsKeyboard),void 0,void 0,"learn-more");o.classList.add("docs-link"),i.appendChild(o);const a=W(c(d.RestoreDefaultShortcuts),()=>{s.set([]),t.set(gt)},{jslogContext:"restore-default-shortcuts"});i.appendChild(a),this.editingItem=null,this.editingRow=null,this.update()}createElementForItem(e){let t=document.createElement("div");if(typeof e=="string")de(t,1),t.classList.add("keybinds-category-header"),t.textContent=ot(e);else{const s=new De(e,this,e===this.editingItem);t=s.element,de(t,2),e===this.editingItem&&(this.editingRow=s)}return t.classList.add("keybinds-list-item"),rt(t),t.tabIndex=e===this.list.selectedItem()&&e!==this.editingItem?0:-1,t}commitChanges(e,t){for(const[s,n]of t)s.type!=="UnsetShortcut"&&(A.instance().removeShortcut(s),n||I.actionTaken(q.ShortcutRemoved)),n&&(A.instance().registerUserShortcut(s.changeKeys(n).changeType("UserShortcut")),s.type==="UnsetShortcut"?I.actionTaken(q.UserShortcutAdded):I.actionTaken(q.ShortcutModified));this.stopEditing(e)}heightForItem(e){return 0}isItemSelectable(e){return!0}selectedItemChanged(e,t,s,n){s&&(s.tabIndex=-1),n&&(t===this.editingItem&&this.editingRow?this.editingRow.focus():(n.tabIndex=0,this.list.element.hasFocus()&&n.focus()),this.setDefaultFocusedElement(n))}updateSelectedItemARIA(e,t){return!0}startEditing(e){this.list.selectItem(e),this.editingItem&&this.stopEditing(this.editingItem),ce(this.list.element,!0),this.editingItem=e,this.list.refreshItem(e)}stopEditing(e){ce(this.list.element,!1),this.editingItem=null,this.editingRow=null,this.list.refreshItem(e),this.focus()}createListItems(){const e=Z.instance().actions().sort((n,i)=>n.category()<i.category()?-1:n.category()>i.category()?1:n.id()<i.id()?-1:n.id()>i.id()?1:0),t=[];let s;return e.forEach(n=>{n.id()!=="elements.toggle-element-search"&&(s!==n.category()&&t.push(n.category()),t.push(n),s=n.category())}),t}onEscapeKeyPressed(e){const t=Ce(document);this.editingRow&&t&&t.nodeName==="INPUT"&&this.editingRow.onEscapeKeyPressed(e)}update(){this.editingItem&&this.stopEditing(this.editingItem),this.list.refreshAllItems(),this.list.selectedItem()||this.list.selectItem(this.items.at(0))}willHide(){this.editingItem&&this.stopEditing(this.editingItem)}wasShown(){super.wasShown(),this.registerCSSFiles([ze])}}class De{isEditing;settingsTab;item;element;editedShortcuts;shortcutInputs;shortcuts;elementToFocus;confirmButton;addShortcutLinkContainer;errorMessageElement;secondKeyTimeout;constructor(e,t,s){this.isEditing=!!s,this.settingsTab=t,this.item=e,this.element=document.createElement("div"),this.element.setAttribute("jslog",`${at().context(e.id()).track({keydown:"Escape"})}`),this.editedShortcuts=new Map,this.shortcutInputs=new Map,this.shortcuts=A.instance().shortcutsForAction(e.id()),this.elementToFocus=null,this.confirmButton=null,this.addShortcutLinkContainer=null,this.errorMessageElement=null,this.secondKeyTimeout=null,this.update()}focus(){this.elementToFocus&&this.elementToFocus.focus()}update(){this.element.removeChildren(),this.elementToFocus=null,this.shortcutInputs.clear(),this.element.classList.toggle("keybinds-editing",this.isEditing),this.element.createChild("div","keybinds-action-name keybinds-list-text").textContent=this.item.title(),this.shortcuts.forEach(this.createShortcutRow,this),this.shortcuts.length===0&&this.createEmptyInfo(),this.isEditing&&this.setupEditor()}createEmptyInfo(){if(A.instance().actionHasDefaultShortcut(this.item.id())){const e=he("keyboard-pen","keybinds-modified");v(e,c(d.shortcutModified)),this.element.appendChild(e)}if(!this.isEditing){const e=this.element.createChild("div","keybinds-shortcut keybinds-list-text");v(e,c(d.noShortcutForAction)),this.element.appendChild(this.createEditButton())}}setupEditor(){this.addShortcutLinkContainer=this.element.createChild("div","keybinds-shortcut");const e=W(c(d.addAShortcut),this.addShortcut.bind(this),{jslogContext:"add-shortcut"});this.addShortcutLinkContainer.appendChild(e),this.elementToFocus||(this.elementToFocus=e),this.errorMessageElement=this.element.createChild("div","keybinds-info keybinds-error hidden"),lt(this.errorMessageElement),this.element.appendChild(this.createIconButton(c(d.ResetShortcutsForAction),"undo","","undo",this.resetShortcutsToDefaults.bind(this))),this.confirmButton=this.createIconButton(c(d.confirmChanges),"checkmark","keybinds-confirm-button","confirm",()=>{this.settingsTab.commitChanges(this.item,this.editedShortcuts),z(c(d.shortcutChangesApplied,{PH1:this.item.title()}))}),this.element.appendChild(this.confirmButton),this.element.appendChild(this.createIconButton(c(d.discardChanges),"cross","keybinds-cancel-button","cancel",()=>{this.settingsTab.stopEditing(this.item),z(c(d.shortcutChangesDiscared))})),this.element.addEventListener("keydown",t=>{dt(t)&&(this.settingsTab.stopEditing(this.item),t.consume(!0))})}addShortcut(){const e=new k([],this.item.id(),"UnsetShortcut");this.shortcuts.push(e),this.update();const t=this.shortcutInputs.get(e);t&&t.focus()}createShortcutRow(e,t){if(this.editedShortcuts.has(e)&&!this.editedShortcuts.get(e))return;let s;e.type!=="UnsetShortcut"&&!e.isDefault()&&(s=he("keyboard-pen","keybinds-modified"),v(s,c(d.shortcutModified)),this.element.appendChild(s));const n=this.element.createChild("div","keybinds-shortcut keybinds-list-text");if(this.isEditing){const i=n.createChild("input","harmony-input");i.setAttribute("jslog",`${ct().track({change:!0})}`),i.spellcheck=!1,i.maxLength=0,this.shortcutInputs.set(e,i),this.elementToFocus||(this.elementToFocus=i),i.value=e.title();const o=this.editedShortcuts.get(e);o&&(i.value=this.shortcutInputTextForDescriptors(o)),i.addEventListener("keydown",this.onShortcutInputKeyDown.bind(this,e,i)),i.addEventListener("blur",()=>{this.secondKeyTimeout!==null&&(clearTimeout(this.secondKeyTimeout),this.secondKeyTimeout=null)}),n.appendChild(this.createIconButton(c(d.removeShortcut),"bin","keybinds-delete-button","delete",()=>{const a=this.shortcuts.indexOf(e);e.isDefault()||this.shortcuts.splice(a,1),this.editedShortcuts.set(e,null),this.update(),this.focus(),this.validateInputs(),z(c(d.shortcutRemoved,{PH1:this.item.title()}))}))}else e.descriptors.flatMap(o=>o.name.split(" + ")).forEach(o=>{n.createChild("span","keybinds-key").textContent=o}),t===0&&this.element.appendChild(this.createEditButton())}createEditButton(){return this.createIconButton(c(d.editShortcut),"edit","keybinds-edit-button","edit",()=>this.settingsTab.startEditing(this.item))}createIconButton(e,t,s,n,i){const o=new se;return o.data={variant:"icon",iconName:t,jslogContext:n,title:e},o.addEventListener("click",i),v(o,e),s&&o.classList.add(s),o}onShortcutInputKeyDown(e,t,s){if(s.key!=="Tab"){const n=this.descriptorForEvent(s),i=this.editedShortcuts.get(e)||[];this.editedShortcuts.set(e,i);const o=i.length===2&&k.isModifier(i[1].key);i.length===2&&!o&&i.splice(0,2),this.secondKeyTimeout?(clearTimeout(this.secondKeyTimeout),this.secondKeyTimeout=null,i.push(n)):o?i[1]=n:k.isModifier(n.key)?i[0]=n:(i[0]=n,this.secondKeyTimeout=window.setTimeout(()=>{this.secondKeyTimeout=null},ht)),t.value=this.shortcutInputTextForDescriptors(i),this.validateInputs(),s.consume(!0)}}descriptorForEvent(e){const t=k.makeKeyFromEvent(e),s=k.keyCodeAndModifiersFromKey(t);let n=ge[e.key]||ue[e.key];if(!n&&!/^[a-z]$/i.test(e.key)){const i=e.code;n=ge[i]||ue[i],i.startsWith("Digit")?n=i.slice(5):i.startsWith("Key")&&(n=i.slice(3))}return k.makeDescriptor(n||e.key,s.modifiers)}shortcutInputTextForDescriptors(e){return e.map(t=>t.name).join(" ")}resetShortcutsToDefaults(){this.editedShortcuts.clear();for(const t of this.shortcuts)if(t.type==="UnsetShortcut"){const s=this.shortcuts.indexOf(t);this.shortcuts.splice(s,1)}else t.type==="UserShortcut"&&this.editedShortcuts.set(t,null);A.instance().disabledDefaultsForAction(this.item.id()).forEach(t=>{this.shortcuts.includes(t)||(this.shortcuts.push(t),this.editedShortcuts.set(t,t.descriptors))}),this.update(),this.focus(),z(c(d.shortcutChangesRestored,{PH1:this.item.title()}))}onEscapeKeyPressed(e){const t=Ce(document);for(const[s,n]of this.shortcutInputs.entries())t===n&&this.onShortcutInputKeyDown(s,n,e)}validateInputs(){const e=this.confirmButton,t=this.errorMessageElement;!e||!t||(e.disabled=!1,t.classList.add("hidden"),this.shortcutInputs.forEach((s,n)=>{const i=this.editedShortcuts.get(n);if(!i)return;if(i.some(a=>k.isModifier(a.key))){e.disabled=!0,s.classList.add("error-input"),Y(s,!0),t.classList.remove("hidden"),t.textContent=c(d.shortcutsCannotContainOnly);return}const o=A.instance().actionsForDescriptors(i).filter(a=>a!==this.item.id());if(o.length){if(e.disabled=!0,s.classList.add("error-input"),Y(s,!0),t.classList.remove("hidden"),!Z.instance().hasAction(o[0]))return;const a=Z.instance().getAction(o[0]),y=a.title(),B=a.category();t.textContent=c(d.thisShortcutIsInUseByS,{PH1:B,PH2:y});return}s.classList.remove("error-input"),Y(s,!1)}))}}const $t=Object.freeze(Object.defineProperty({__proto__:null,KeybindsSettingsTab:wt,ShortcutListItem:De},Symbol.toStringTag,{value:"Module"}));export{It as AISettingsTab,At as FrameworkIgnoreListSettingsTab,$t as KeybindsSettingsTab,Tt as SettingsScreen};
//# sourceMappingURL=settings-CU9uV6km.js.map
