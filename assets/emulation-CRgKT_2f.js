import{aO as le,bO as ce,ov as he,aP as me,b as q,g as _,aj as E,bz as ue,bA as k,i$ as y,ds as V,bN as G,cG as pe,ct as ge,b0 as D,b1 as K,aZ as ve,cc as Z,cC as se,ow as fe,i as Q,fk as be,aV as g,fd as f,iq as Se,f_ as J,r as we,l as C,cv as ee,aU as X,h as oe,ox as xe,bM as Me,oy as ye,gM as Ie,fS as T,u as Ce,A as Ee,oz as ke,hS as Re,oA as ze,aJ as Te,aM as De,as as Le,dR as Pe,ba as We,oB as I,cd as Ae,a as R,bc as Fe,oC as Ve,oD as Be,oE as Ue}from"./inspector-CyOA7R9n.js";import{R as te}from"./RootView-hYGHqrG8.js";import{b as L,c as P,E as je,d as Oe,e as Qe,T as p,f as He,a as Ne,V as $e,H as qe,D as ne}from"./DeviceModeModel-fDJ3OPwb.js";import{t as _e}from"./mobile_throttling-CIMam4T2.js";const{html:Ze}=me;class W extends Event{size;static eventName="sizechanged";constructor(e){super(W.eventName),this.size=e}}function ie(v){return Number(v.target.value)}class H extends HTMLElement{#n=this.attachShadow({mode:"open"});#e=!1;#t="0";#i="";#s;#o;constructor(e,{jslogContext:t}){super(),this.#s=e,this.#o=t}connectedCallback(){this.render()}set disabled(e){this.#e=e,this.render()}set size(e){this.#t=e,this.render()}set placeholder(e){this.#i=e,this.render()}render(){le(Ze`
      <style>
        input {
          /*
           * 4 characters for the maximum size of the value,
           * 2 characters for the width of the step-buttons,
           * 2 pixels padding between the characters and the
           * step-buttons.
           */
          width: calc(4ch + 2ch + 2px);
          max-height: 18px;
          border: var(--sys-color-neutral-outline);
          border-radius: 4px;
          margin: 0 2px;
          text-align: center;
          font-size: inherit;
          font-family: inherit;
        }

        input:disabled {
          user-select: none;
        }

        input:focus::-webkit-input-placeholder {
          color: transparent;
        }
      </style>
      <input type="number"
             max=${L}
             min=${P}
             jslog=${ce().track({change:!0}).context(this.#o)}
             maxlength="4"
             title=${this.#s}
             placeholder=${this.#i}
             ?disabled=${this.#e}
             .value=${this.#t}
             @change=${this.#r}
             @keydown=${this.#a} />
    `,this.#n,{host:this})}#r(e){this.dispatchEvent(new W(ie(e)))}#a(e){let t=he(ie(e),e);t!==null&&(t=Math.min(t,L),t=Math.max(t,P),e.preventDefault(),e.target.value=String(t),this.dispatchEvent(new W(t)))}}customElements.define("device-mode-emulation-size-input",H);const Xe={cssContent:`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.device-mode-x {
  margin: 0 1px;
  font-size: 16px;
}

.device-mode-empty-toolbar-element {
  width: 0;
}

/*# sourceURL=deviceModeToolbar.css */
`},h={dimensions:"Dimensions",width:"Width",heightLeaveEmptyForFull:"Height (leave empty for full)",zoom:"Zoom",devicePixelRatio:"Device pixel ratio",deviceType:"Device type",experimentalWebPlatformFeature:'"`Experimental Web Platform Feature`" flag is enabled. Click to disable it.',experimentalWebPlatformFeatureFlag:'"`Experimental Web Platform Feature`" flag is disabled. Click to enable it.',moreOptions:"More options",fitToWindowF:"Fit to window ({PH1}%)",autoadjustZoom:"Auto-adjust zoom",defaultF:"Default: {PH1}",hideDeviceFrame:"Hide device frame",showDeviceFrame:"Show device frame",hideMediaQueries:"Hide media queries",showMediaQueries:"Show media queries",hideRulers:"Hide rulers",showRulers:"Show rulers",removeDevicePixelRatio:"Remove device pixel ratio",addDevicePixelRatio:"Add device pixel ratio",removeDeviceType:"Remove device type",addDeviceType:"Add device type",resetToDefaults:"Reset to defaults",closeDevtools:"Close DevTools",responsive:"Responsive",edit:"Edit…",portrait:"Portrait",landscape:"Landscape",rotate:"Rotate",none:"None",screenOrientationOptions:"Screen orientation options",toggleDualscreenMode:"Toggle dual-screen mode",devicePosture:"Device posture"},Ye=q("panels/emulation/DeviceModeToolbar.ts",h),m=_.bind(void 0,Ye);function x(v,e){v.setTitle(e),v.element.title=e}class re{model;showMediaInspectorSetting;showRulersSetting;deviceOutlineSetting;showDeviceScaleFactorSetting;showUserAgentTypeSetting;autoAdjustScaleSetting;lastMode;elementInternal;emulatedDevicesList;persistenceSetting;spanButton;postureItem;modeButton;widthInput;heightInput;deviceScaleItem;deviceSelectItem;scaleItem;uaItem;experimentalButton;cachedDeviceScale;cachedUaType;xItem;throttlingConditionsItem;cachedModelType;cachedScale;cachedModelDevice;cachedModelMode;constructor(e,t,i){this.model=e,this.showMediaInspectorSetting=t,this.showRulersSetting=i,this.deviceOutlineSetting=this.model.deviceOutlineSetting(),this.showDeviceScaleFactorSetting=E.instance().createSetting("emulation.show-device-scale-factor",!1),this.showDeviceScaleFactorSetting.addChangeListener(this.updateDeviceScaleFactorVisibility,this),this.showUserAgentTypeSetting=E.instance().createSetting("emulation.show-user-agent-type",!1),this.showUserAgentTypeSetting.addChangeListener(this.updateUserAgentTypeVisibility,this),this.autoAdjustScaleSetting=E.instance().createSetting("emulation.auto-adjust-scale",!0),this.lastMode=new Map,this.elementInternal=document.createElement("div"),this.elementInternal.classList.add("device-mode-toolbar"),this.elementInternal.setAttribute("jslog",`${ue("device-mode").track({resize:!0})}`);const o=this.elementInternal.createChild("div","device-mode-toolbar-spacer");o.createChild("div","device-mode-toolbar-spacer");const s=new k("",o);this.fillLeftToolbar(s);const n=new k("",this.elementInternal);n.makeWrappable(),this.widthInput=new H(m(h.width),{jslogContext:"width"}),this.widthInput.addEventListener("sizechanged",({size:u})=>{this.autoAdjustScaleSetting.get()?this.model.setWidthAndScaleToFit(u):this.model.setWidth(u)}),this.heightInput=new H(m(h.heightLeaveEmptyForFull),{jslogContext:"height"}),this.heightInput.addEventListener("sizechanged",({size:u})=>{this.autoAdjustScaleSetting.get()?this.model.setHeightAndScaleToFit(u):this.model.setHeight(u)}),this.fillMainToolbar(n);const r=this.elementInternal.createChild("div","device-mode-toolbar-spacer"),l=new k("device-mode-toolbar-fixed-size",r);l.makeWrappable(),this.fillRightToolbar(l);const a=new k("device-mode-toolbar-fixed-size",r);a.makeWrappable(),this.fillModeToolbar(a),r.createChild("div","device-mode-toolbar-spacer");const d=new k("device-mode-toolbar-options",r);d.makeWrappable(),this.fillOptionsToolbar(d),this.emulatedDevicesList=je.instance(),this.emulatedDevicesList.addEventListener("CustomDevicesUpdated",this.deviceListChanged,this),this.emulatedDevicesList.addEventListener("StandardDevicesUpdated",this.deviceListChanged,this),this.persistenceSetting=E.instance().createSetting("emulation.device-mode-value",{device:"",orientation:"",mode:""}),this.model.toolbarControlsEnabledSetting().addChangeListener(c),c();function c(){const u=e.toolbarControlsEnabledSetting().get();s.setEnabled(u),n.setEnabled(u),l.setEnabled(u),a.setEnabled(u),d.setEnabled(u)}}createEmptyToolbarElement(){const e=document.createElement("div");return e.classList.add("device-mode-empty-toolbar-element"),e}fillLeftToolbar(e){e.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement())),this.deviceSelectItem=new y(this.appendDeviceMenuItems.bind(this),void 0,void 0,"device"),this.deviceSelectItem.turnShrinkable(),this.deviceSelectItem.setDarkText(),e.appendToolbarItem(this.deviceSelectItem)}fillMainToolbar(e){e.appendToolbarItem(new V(this.widthInput));const t=document.createElement("div");t.classList.add("device-mode-x"),t.textContent="×",this.xItem=this.wrapToolbarItem(t),e.appendToolbarItem(this.xItem),e.appendToolbarItem(new V(this.heightInput))}fillRightToolbar(e){e.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement())),this.scaleItem=new y(this.appendScaleMenuItems.bind(this),void 0,void 0,"scale"),x(this.scaleItem,m(h.zoom)),this.scaleItem.setDarkText(),e.appendToolbarItem(this.scaleItem),e.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement())),this.deviceScaleItem=new y(this.appendDeviceScaleMenuItems.bind(this),void 0,void 0,"device-pixel-ratio"),this.deviceScaleItem.setVisible(this.showDeviceScaleFactorSetting.get()),x(this.deviceScaleItem,m(h.devicePixelRatio)),this.deviceScaleItem.setDarkText(),e.appendToolbarItem(this.deviceScaleItem),e.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement())),this.uaItem=new y(this.appendUserAgentMenuItems.bind(this),void 0,void 0,"device-type"),this.uaItem.setVisible(this.showUserAgentTypeSetting.get()),x(this.uaItem,m(h.deviceType)),this.uaItem.setDarkText(),e.appendToolbarItem(this.uaItem),this.throttlingConditionsItem=_e().createMobileThrottlingButton(),e.appendToolbarItem(this.throttlingConditionsItem)}fillModeToolbar(e){e.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement())),this.modeButton=new G("","screen-rotation",void 0,"screen-rotation"),this.modeButton.addEventListener("Click",this.modeMenuClicked,this),e.appendToolbarItem(this.modeButton),this.spanButton=new G("","device-fold",void 0,"device-fold"),this.spanButton.addEventListener("Click",this.spanClicked,this),e.appendToolbarItem(this.spanButton),e.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement())),this.postureItem=new y(this.appendDevicePostureItems.bind(this),void 0,void 0,"device-posture"),this.postureItem.setDarkText(),x(this.postureItem,m(h.devicePosture)),e.appendToolbarItem(this.postureItem),this.createExperimentalButton(e)}createExperimentalButton(e){e.appendToolbarItem(new pe(!0));const t=this.model.webPlatformExperimentalFeaturesEnabled()?m(h.experimentalWebPlatformFeature):m(h.experimentalWebPlatformFeatureFlag);this.experimentalButton=new ge(t,"experiment-check"),this.experimentalButton.setToggled(this.model.webPlatformExperimentalFeaturesEnabled()),this.experimentalButton.setEnabled(!0),this.experimentalButton.addEventListener("Click",this.experimentalClicked,this),e.appendToolbarItem(this.experimentalButton)}experimentalClicked(){D.openInNewTab("chrome://flags/#enable-experimental-web-platform-features")}fillOptionsToolbar(e){e.appendToolbarItem(this.wrapToolbarItem(this.createEmptyToolbarElement()));const t=new y(this.appendOptionsMenuItems.bind(this),!0,void 0,"more-options","dots-vertical");t.setTitle(m(h.moreOptions)),e.appendToolbarItem(t)}appendDevicePostureItems(e){for(const t of["Continuous","Folded"])e.defaultSection().appendCheckboxItem(t,this.spanClicked.bind(this),{checked:t===this.currentDevicePosture(),jslogContext:t.toLowerCase()})}currentDevicePosture(){const e=this.model.mode();return e&&(e.orientation===Oe||e.orientation===Qe)?"Folded":"Continuous"}appendScaleMenuItems(e){this.model.type()===p.Device&&e.footerSection().appendItem(m(h.fitToWindowF,{PH1:this.getPrettyFitZoomPercentage()}),this.onScaleMenuChanged.bind(this,this.model.fitScale()),{jslogContext:"fit-to-window"}),e.footerSection().appendCheckboxItem(m(h.autoadjustZoom),this.onAutoAdjustScaleChanged.bind(this),{checked:this.autoAdjustScaleSetting.get(),jslogContext:"auto-adjust-zoom"});const t=i.bind(this);t("50%",.5),t("75%",.75),t("100%",1),t("125%",1.25),t("150%",1.5),t("200%",2);function i(o,s){e.defaultSection().appendCheckboxItem(o,this.onScaleMenuChanged.bind(this,s),{checked:this.model.scaleSetting().get()===s,jslogContext:o})}}onScaleMenuChanged(e){this.model.scaleSetting().set(e)}onAutoAdjustScaleChanged(){this.autoAdjustScaleSetting.set(!this.autoAdjustScaleSetting.get())}appendDeviceScaleMenuItems(e){const t=this.model.deviceScaleFactorSetting(),i=this.model.uaSetting().get()==="Mobile"||this.model.uaSetting().get()==="Mobile (no touch)"?He:window.devicePixelRatio;o(e.headerSection(),m(h.defaultF,{PH1:i}),0,"dpr-default"),o(e.defaultSection(),"1",1,"dpr-1"),o(e.defaultSection(),"2",2,"dpr-2"),o(e.defaultSection(),"3",3,"dpr-3");function o(s,n,r,l){s.appendCheckboxItem(n,t.set.bind(t,r),{checked:t.get()===r,jslogContext:l})}}appendUserAgentMenuItems(e){const t=this.model.uaSetting();i("Mobile","Mobile"),i("Mobile (no touch)","Mobile (no touch)"),i("Desktop","Desktop"),i("Desktop (touch)","Desktop (touch)");function i(o,s){e.defaultSection().appendCheckboxItem(o,t.set.bind(t,s),{checked:t.get()===s,jslogContext:K(s)})}}appendOptionsMenuItems(e){const t=this.model;i(e.headerSection(),this.deviceOutlineSetting,m(h.hideDeviceFrame),m(h.showDeviceFrame),t.type()!==p.Device,"device-frame"),i(e.headerSection(),this.showMediaInspectorSetting,m(h.hideMediaQueries),m(h.showMediaQueries),void 0,"media-queries"),i(e.headerSection(),this.showRulersSetting,m(h.hideRulers),m(h.showRulers),void 0,"rulers"),i(e.defaultSection(),this.showDeviceScaleFactorSetting,m(h.removeDevicePixelRatio),m(h.addDevicePixelRatio),void 0,"device-pixel-ratio"),i(e.defaultSection(),this.showUserAgentTypeSetting,m(h.removeDeviceType),m(h.addDeviceType),void 0,"device-type"),e.appendItemsAtLocation("deviceModeMenu"),e.footerSection().appendItem(m(h.resetToDefaults),this.reset.bind(this),{jslogContext:"reset-to-defaults"}),e.footerSection().appendItem(m(h.closeDevtools),D.closeWindow.bind(D),{jslogContext:"close-dev-tools"});function i(o,s,n,r,l,a){typeof l>"u"&&(l=t.type()===p.None);const d=s.get(),c=`${a}-${d?"disable":"enable"}`;o.appendItem(d?n:r,s.set.bind(s,!s.get()),{disabled:l,jslogContext:c})}}reset(){this.deviceOutlineSetting.set(!1),this.showDeviceScaleFactorSetting.set(!1),this.showUserAgentTypeSetting.set(!1),this.showMediaInspectorSetting.set(!1),this.showRulersSetting.set(!1),this.model.reset()}wrapToolbarItem(e){const t=document.createElement("div");return ve(t,{cssFile:Xe,delegatesFocus:void 0}).appendChild(e),new V(t)}emulateDevice(e){const t=this.autoAdjustScaleSetting.get()?void 0:this.model.scaleSetting().get();this.model.emulate(p.Device,e,this.lastMode.get(e)||e.modes[0],t)}switchToResponsive(){this.model.emulate(p.Responsive,null,null)}filterDevices(e){return e=e.filter(function(t){return t.show()}),e.sort(Ne.deviceComparator),e}standardDevices(){return this.filterDevices(this.emulatedDevicesList.standard())}customDevices(){return this.filterDevices(this.emulatedDevicesList.custom())}allDevices(){return this.standardDevices().concat(this.customDevices())}appendDeviceMenuItems(e){e.headerSection().appendCheckboxItem(m(h.responsive),this.switchToResponsive.bind(this),{checked:this.model.type()===p.Responsive,jslogContext:"responsive"}),t.call(this,this.standardDevices()),t.call(this,this.customDevices()),e.footerSection().appendItem(m(h.edit),this.emulatedDevicesList.revealCustomSetting.bind(this.emulatedDevicesList),{jslogContext:"edit"});function t(i){if(!i.length)return;const o=e.section();for(const s of i)o.appendCheckboxItem(s.title,this.emulateDevice.bind(this,s),{checked:this.model.device()===s,jslogContext:K(s.title)})}}deviceListChanged(){const e=this.model.device();if(!e)return;const t=this.allDevices();t.indexOf(e)===-1?t.length?this.emulateDevice(t[0]):this.model.emulate(p.Responsive,null,null):this.emulateDevice(e)}updateDeviceScaleFactorVisibility(){this.deviceScaleItem&&this.deviceScaleItem.setVisible(this.showDeviceScaleFactorSetting.get())}updateUserAgentTypeVisibility(){this.uaItem&&this.uaItem.setVisible(this.showUserAgentTypeSetting.get())}spanClicked(){const e=this.model.device();if(!e||!e.isDualScreen&&!e.isFoldableScreen)return;const t=this.autoAdjustScaleSetting.get()?void 0:this.model.scaleSetting().get(),i=this.model.mode();if(!i)return;const o=e.getSpanPartner(i);o&&this.model.emulate(this.model.type(),e,o,t)}modeMenuClicked(e){const t=this.model.device(),i=this.model,o=this.autoAdjustScaleSetting;if(i.type()===p.Responsive){const a=i.appliedDeviceSize();o.get()?i.setSizeAndScaleToFit(a.height,a.width):(i.setWidth(a.height),i.setHeight(a.width));return}if(!t)return;if((t.isDualScreen||t.isFoldableScreen||t.modes.length===2)&&t.modes[0].orientation!==t.modes[1].orientation){const a=o.get()?void 0:i.scaleSetting().get(),d=i.mode();if(!d)return;const c=t.getRotationPartner(d);if(!c)return;i.emulate(i.type(),i.device(),c,a);return}if(!this.modeButton)return;const s=new Z(e.data,{useSoftMenu:!1,x:this.modeButton.element.getBoundingClientRect().left,y:this.modeButton.element.getBoundingClientRect().top+this.modeButton.element.offsetHeight});n($e,m(h.portrait)),n(qe,m(h.landscape)),s.show();function n(a,d){if(!t)return;const c=t.modesForOrientation(a);if(c.length)if(c.length===1)r(c[0],d);else for(let u=0;u<c.length;u++)r(c[u],d+" – "+c[u].title)}function r(a,d){s.defaultSection().appendCheckboxItem(d,l.bind(null,a),{checked:i.mode()===a,jslogContext:"device-mode"})}function l(a){const d=o.get()?void 0:i.scaleSetting().get();i.emulate(i.type(),i.device(),a,d)}}getPrettyFitZoomPercentage(){return`${(this.model.fitScale()*100).toFixed(0)}`}getPrettyZoomPercentage(){return`${(this.model.scale()*100).toFixed(0)}`}element(){return this.elementInternal}update(){this.model.type()!==this.cachedModelType&&(this.cachedModelType=this.model.type(),this.widthInput.disabled=this.model.type()!==p.Responsive,this.heightInput.disabled=this.model.type()!==p.Responsive,this.deviceScaleItem.setEnabled(this.model.type()===p.Responsive),this.uaItem.setEnabled(this.model.type()===p.Responsive),this.model.type()===p.Responsive?(this.modeButton.setEnabled(!0),x(this.modeButton,m(h.rotate))):this.modeButton.setEnabled(!1));const e=this.model.appliedDeviceSize();this.widthInput.size=String(e.width),this.heightInput.size=this.model.type()===p.Responsive&&this.model.isFullHeight()?"":String(e.height),this.heightInput.placeholder=String(e.height),this.model.scale()!==this.cachedScale&&(this.scaleItem.setText(`${this.getPrettyZoomPercentage()}%`),this.cachedScale=this.model.scale());const t=this.model.appliedDeviceScaleFactor();t!==this.cachedDeviceScale&&(this.deviceScaleItem.setText(`DPR: ${t.toFixed(1)}`),this.cachedDeviceScale=t);const i=this.model.appliedUserAgentType();i!==this.cachedUaType&&(this.uaItem.setText(i),this.cachedUaType=i);let o=m(h.none);this.model.type()===p.Responsive&&(o=m(h.responsive));const s=this.model.device();if(this.model.type()===p.Device&&s&&(o=s.title),this.deviceSelectItem.setText(`${m(h.dimensions)}: ${o}`),this.model.device()!==this.cachedModelDevice){const n=this.model.device();if(n){const r=n?n.modes.length:0;this.modeButton.setEnabled(r>=2),x(this.modeButton,m(r===2?h.rotate:h.screenOrientationOptions))}this.cachedModelDevice=n}if(this.experimentalButton){const n=this.model.device();n&&(n.isDualScreen||n.isFoldableScreen)?(n.isDualScreen?(this.spanButton.setVisible(!0),this.postureItem.setVisible(!1)):n.isFoldableScreen&&(this.spanButton.setVisible(!1),this.postureItem.setVisible(!0),this.postureItem.setText(this.currentDevicePosture())),this.experimentalButton.setVisible(!0)):(this.spanButton.setVisible(!1),this.postureItem.setVisible(!1),this.experimentalButton.setVisible(!1)),x(this.spanButton,m(h.toggleDualscreenMode))}if(this.model.type()===p.Device&&this.lastMode.set(this.model.device(),this.model.mode()),this.model.mode()!==this.cachedModelMode&&this.model.type()!==p.None){this.cachedModelMode=this.model.mode();const n=this.persistenceSetting.get(),r=this.model.device();if(r){n.device=r.title;const l=this.model.mode();n.orientation=l?l.orientation:"",n.mode=l?l.title:""}else n.device="",n.orientation="",n.mode="";this.persistenceSetting.set(n)}}restore(){for(const e of this.allDevices())if(e.title===this.persistenceSetting.get().device){for(const t of e.modes)if(t.orientation===this.persistenceSetting.get().orientation&&t.title===this.persistenceSetting.get().mode){this.lastMode.set(e,t),this.emulateDevice(e);return}}this.model.emulate(p.Responsive,null,null)}}const Ge=Object.freeze(Object.defineProperty({__proto__:null,DeviceModeToolbar:re},Symbol.toStringTag,{value:"Module"})),Ke={cssContent:`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
  align-items: stretch;
  flex: auto;
  background-color: var(--app-color-toolbar-background);
}

.device-mode-toolbar {
  flex: none;
  background-color: var(--app-color-toolbar-background);
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.device-mode-toolbar .toolbar {
  overflow: hidden;
  flex: 0 100000 auto;
  padding: 0 5px;
}

.device-mode-toolbar .toolbar.device-mode-toolbar-fixed-size {
  flex: 0 1 auto;
}

.device-mode-toolbar-options.toolbar {
  position: sticky;
  right: 0;
  flex: none;
}

.device-mode-toolbar-spacer {
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.device-mode-content-clip {
  overflow: hidden;
  flex: auto;
}

.device-mode-media-container {
  flex: none;
  overflow: hidden;
  box-shadow: inset 0 -1px var(--sys-color-divider);
}

.device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-media-container {
  margin-bottom: 20px;
}

.device-mode-presets-container {
  flex: 0 0 20px;
  display: flex;
}

.device-mode-presets-container-inner {
  flex: auto;
  justify-content: center;
  position: relative;
  background-color: var(--sys-color-surface1);
  border-bottom: 1px solid var(--sys-color-divider);
}

.device-mode-presets-container:hover {
  transition: opacity 0.1s;
  transition-delay: 50ms;
  opacity: 100%;
}

.device-mode-preset-bar-outer {
  pointer-events: none;
  display: flex;
  justify-content: center;
}

.device-mode-preset-bar {
  border-left: 2px solid var(--sys-color-divider);
  border-right: 2px solid var(--sys-color-divider);
  pointer-events: auto;
  text-align: center;
  flex: none;
  color: var(--sys-color-on-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  margin-bottom: 1px;
}

.device-mode-preset-bar:hover {
  transition: background-color 0.1s;
  transition-delay: 50ms;
  background-color: var(--sys-color-state-hover-on-subtle);
}

.device-mode-preset-bar > span {
  visibility: hidden;
}

.device-mode-preset-bar:hover > span {
  transition: visibility 0.1s;
  transition-delay: 50ms;
  visibility: visible;
}

.device-mode-content-area {
  flex: auto;
  position: relative;
  margin: 0;
}

.device-mode-screen-area {
  position: absolute;
  left: 0;
  right: 0;
  width: 0;
  height: 0;
  background-color: var(--sys-color-inverse-surface);
}

.device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area {
  --override-screen-area-box-shadow: hsl(240deg 3% 84%) 0 0 0 0.5px, hsl(0deg 0% 80% / 40%) 0 0 20px;

  box-shadow: var(--override-screen-area-box-shadow);
}

.theme-with-dark-background .device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area,
:host-context(.theme-with-dark-background) .device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area {
  --override-screen-area-box-shadow: rgb(40 40 42) 0 0 0 0.5px, rgb(51 51 51 / 40%) 0 0 20px;
}

.device-mode-screen-image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.device-mode-resizer {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.1s ease, opacity 0.1s ease;
}

.device-mode-resizer:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  opacity: 100%;
}

.device-mode-resizer > div {
  pointer-events: none;
}

.device-mode-right-resizer {
  top: 0;
  bottom: -1px;
  right: -20px;
  width: 20px;
}

.device-mode-left-resizer {
  top: 0;
  bottom: -1px;
  left: -20px;
  width: 20px;
  opacity: 0%;
}

.device-mode-bottom-resizer {
  left: 0;
  right: -1px;
  bottom: -20px;
  height: 20px;
}

.device-mode-bottom-right-resizer {
  left: 0;
  top: 0;
  right: -20px;
  bottom: -20px;
  background-color: var(--sys-color-surface1);
}

.device-mode-bottom-left-resizer {
  left: -20px;
  top: 0;
  right: 0;
  bottom: -20px;
  opacity: 0%;
}

.device-mode-right-resizer > div {
  content: var(--image-file-resizeHorizontal);
  width: 6px;
  height: 26px;
}

.device-mode-left-resizer > div {
  content: var(--image-file-resizeHorizontal);
  width: 6px;
  height: 26px;
}

.device-mode-bottom-resizer > div {
  content: var(--image-file-resizeVertical);
  margin-bottom: -2px;
  width: 26px;
  height: 6px;
}

.device-mode-bottom-right-resizer > div {
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 13px;
  height: 13px;
  content: var(--image-file-resizeDiagonal);
}

.device-mode-bottom-left-resizer > div {
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 13px;
  height: 13px;
  content: var(--image-file-resizeDiagonal);
  transform: rotate(90deg);
}

.device-mode-page-area {
  position: absolute;
  left: 0;
  right: 0;
  width: 0;
  height: 0;
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
}

.device-mode-ruler {
  position: absolute;
  overflow: visible;
}

.device-mode-ruler-top {
  height: 20px;
  right: 0;
}

.device-mode-ruler-left {
  width: 20px;
  bottom: 0;
}

.device-mode-ruler-content {
  pointer-events: none;
  position: absolute;
  left: -20px;
  top: -20px;
}

.device-mode-ruler-top .device-mode-ruler-content {
  border-top: 1px solid transparent;
  right: 0;
  bottom: 20px;
  background-color: var(--sys-color-cdt-base-container);
}

.device-mode-ruler-left .device-mode-ruler-content {
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  right: 20px;
  bottom: 0;
}

.device-mode-content-clip.device-mode-outline-visible .device-mode-ruler-top .device-mode-ruler-content {
  border-top: 1px solid var(--sys-color-token-subtle);
}

.device-mode-content-clip.device-mode-outline-visible .device-mode-ruler-left .device-mode-ruler-content {
  border-left: 1px solid var(--sys-color-token-subtle);
  border-top: 1px solid var(--sys-color-token-subtle);
}

.device-mode-ruler-inner {
  position: absolute;
}

.device-mode-ruler-top .device-mode-ruler-inner {
  top: 0;
  bottom: 0;
  left: 20px;
  right: 0;
  border-bottom: 1px solid var(--sys-color-token-subtle);
}

.device-mode-ruler-left .device-mode-ruler-inner {
  left: 0;
  right: 0;
  top: 19px;
  bottom: 0;
  border-right: 1px solid var(--sys-color-token-subtle);
  background-color: var(--sys-color-cdt-base-container);
}

.device-mode-ruler-marker {
  position: absolute;
}

.device-mode-ruler-top .device-mode-ruler-marker {
  width: 0;
  height: 5px;
  bottom: 0;
  border-right: 1px solid var(--sys-color-token-subtle);
  margin-right: -1px;
}

.device-mode-ruler-top .device-mode-ruler-marker.device-mode-ruler-marker-medium {
  height: 10px;
}

.device-mode-ruler-top .device-mode-ruler-marker.device-mode-ruler-marker-large {
  height: 15px;
}

.device-mode-ruler-left .device-mode-ruler-marker {
  height: 0;
  width: 5px;
  right: 0;
  border-bottom: 1px solid var(--sys-color-token-subtle);
  margin-bottom: -1px;
}

.device-mode-ruler-left .device-mode-ruler-marker.device-mode-ruler-marker-medium {
  width: 10px;
}

.device-mode-ruler-left .device-mode-ruler-marker.device-mode-ruler-marker-large {
  width: 15px;
}

.device-mode-ruler-text {
  color: var(--sys-color-token-subtle);
  position: relative;
  pointer-events: auto;
}

.device-mode-ruler-text:hover {
  color: var(--sys-color-on-surface);
}

.device-mode-ruler-top .device-mode-ruler-text {
  left: 2px;
  top: -2px;
}

.device-mode-ruler-left .device-mode-ruler-text {
  left: -4px;
  top: -15px;
  transform: rotate(270deg);
}

/*# sourceURL=deviceModeView.css */
`},Je={cssContent:`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
/* Media query bars */

.media-inspector-view {
  height: 50px;
}

.media-inspector-marker-container {
  height: 14px;
  margin: 2px 0;
  position: relative;
}

.media-inspector-bar {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.media-inspector-marker {
  flex: none;
  pointer-events: auto;
  margin: 1px 0;
  white-space: nowrap;
  z-index: auto;
  position: relative;
}

.media-inspector-marker-spacer {
  flex: auto;
}

.media-inspector-marker:hover {
  margin: -1px 0;
  opacity: 100%;
}

.media-inspector-marker-min-width {
  flex: auto;
  background-color: var(--sys-color-yellow-container);
  border-right: 2px solid var(--sys-color-yellow-bright);
  border-left: 2px solid var(--sys-color-yellow-bright);

  &:hover {
    background-color: color-mix(in sRGB, var(--sys-color-yellow-container), var(--sys-color-yellow-bright) 30%);
  }
}

.media-inspector-marker-min-width-right {
  border-left: 2px solid var(--sys-color-yellow-bright);
}

.media-inspector-marker-min-width-left {
  border-right: 2px solid var(--sys-color-yellow-bright);
}

.media-inspector-marker-min-max-width {
  background-color: var(--sys-color-tertiary-container);
  border-left: 2px solid var(--sys-color-tertiary);
  border-right: 2px solid var(--sys-color-tertiary);
}

.media-inspector-marker-min-max-width:hover {
  z-index: 1;
}

.media-inspector-marker-max-width {
  background-color: var(--sys-color-inverse-primary);
  border-right: 2px solid var(--sys-color-primary-bright);
  border-left: 2px solid var(--sys-color-primary-bright);
}

/* Clear background colors when query is not active and not hovering */

.media-inspector-marker-inactive .media-inspector-marker-min-width:not(:hover) {
  background-color: var(--sys-color-surface-yellow);
}

.media-inspector-marker-inactive .media-inspector-marker-min-max-width:not(:hover) {
  background-color: color-mix(in sRGB, var(--sys-color-tertiary-container), var(--sys-color-cdt-base-container) 30%);
}

.media-inspector-marker-inactive .media-inspector-marker-max-width:not(:hover) {
  background-color: var(--sys-color-tonal-container);
}

/* Media query labels */

.media-inspector-marker-label-container {
  position: absolute;
  z-index: 1;
}

.media-inspector-marker:not(:hover) .media-inspector-marker-label-container {
  display: none;
}

.media-inspector-marker-label-container-left {
  left: -2px;
}

.media-inspector-marker-label-container-right {
  right: -2px;
}

.media-inspector-marker-label {
  color: var(--sys-color-on-surface);
  position: absolute;
  top: 1px;
  bottom: 0;
  font-size: 12px;
  pointer-events: none;
}

.media-inspector-label-right {
  right: 4px;
}

.media-inspector-label-left {
  left: 4px;
}

/*# sourceURL=mediaQueryInspector.css */
`},ae={revealInSourceCode:"Reveal in source code"},et=q("panels/emulation/MediaQueryInspector.ts",ae),tt=_.bind(void 0,et);class de extends se{mediaThrottler;getWidthCallback;setWidthCallback;scale;elementsToMediaQueryModel;elementsToCSSLocations;cssModel;cachedQueryModels;constructor(e,t,i){super(!0),this.registerRequiredCSS(Je),this.contentElement.classList.add("media-inspector-view"),this.contentElement.setAttribute("jslog",`${fe().track({click:!0})}`),this.contentElement.addEventListener("click",this.onMediaQueryClicked.bind(this),!1),this.contentElement.addEventListener("contextmenu",this.onContextMenu.bind(this),!1),this.mediaThrottler=i,this.getWidthCallback=e,this.setWidthCallback=t,this.scale=1,this.elementsToMediaQueryModel=new WeakMap,this.elementsToCSSLocations=new WeakMap,Q.instance().observeModels(be,this),g.instance().addEventListener("ZoomChanged",this.renderMediaQueries.bind(this),this)}modelAdded(e){e.target()===Q.instance().primaryPageTarget()&&(this.cssModel=e,this.cssModel.addEventListener(f.StyleSheetAdded,this.scheduleMediaQueriesUpdate,this),this.cssModel.addEventListener(f.StyleSheetRemoved,this.scheduleMediaQueriesUpdate,this),this.cssModel.addEventListener(f.StyleSheetChanged,this.scheduleMediaQueriesUpdate,this),this.cssModel.addEventListener(f.MediaQueryResultChanged,this.scheduleMediaQueriesUpdate,this))}modelRemoved(e){e===this.cssModel&&(this.cssModel.removeEventListener(f.StyleSheetAdded,this.scheduleMediaQueriesUpdate,this),this.cssModel.removeEventListener(f.StyleSheetRemoved,this.scheduleMediaQueriesUpdate,this),this.cssModel.removeEventListener(f.StyleSheetChanged,this.scheduleMediaQueriesUpdate,this),this.cssModel.removeEventListener(f.MediaQueryResultChanged,this.scheduleMediaQueriesUpdate,this),delete this.cssModel)}setAxisTransform(e){Math.abs(this.scale-e)<1e-8||(this.scale=e,this.renderMediaQueries())}onMediaQueryClicked(e){const t=e.target.enclosingNodeOrSelfWithClass("media-inspector-bar");if(!t)return;const i=this.elementsToMediaQueryModel.get(t);if(!i)return;const o=i.maxWidthExpression(),s=i.minWidthExpression();if(i.section()===0){this.setWidthCallback(o&&o.computedLength()||0);return}if(i.section()===2){this.setWidthCallback(s&&s.computedLength()||0);return}const n=this.getWidthCallback();s&&n!==s.computedLength()?this.setWidthCallback(s.computedLength()||0):this.setWidthCallback(o&&o.computedLength()||0)}onContextMenu(e){if(!this.cssModel||!this.cssModel.isEnabled())return;const t=e.target.enclosingNodeOrSelfWithClass("media-inspector-bar");if(!t)return;const i=this.elementsToCSSLocations.get(t)||[],o=new Map;for(let l=0;l<i.length;++l){const a=Se.instance().rawLocationToUILocation(i[l]);if(!a)continue;const d=typeof a.columnNumber=="number"?J("%s:%d:%d",a.uiSourceCode.url(),a.lineNumber+1,a.columnNumber+1):J("%s:%d",a.uiSourceCode.url(),a.lineNumber+1);o.set(d,a)}const s=[...o.keys()].sort(),n=new Z(e),r=n.defaultSection().appendSubMenuItem(tt(ae.revealInSourceCode),void 0,"reveal-in-source-list");for(let l=0;l<s.length;++l){const a=s[l];r.defaultSection().appendItem(a,this.revealSourceLocation.bind(this,o.get(a)),{jslogContext:"reveal-in-source"})}n.show()}revealSourceLocation(e){we(e)}scheduleMediaQueriesUpdate(){this.isShowing()&&this.mediaThrottler.schedule(this.refetchMediaQueries.bind(this))}refetchMediaQueries(){return!this.isShowing()||!this.cssModel?Promise.resolve():this.cssModel.getMediaQueries().then(this.rebuildMediaQueries.bind(this))}squashAdjacentEqual(e){const t=[];for(let i=0;i<e.length;++i){const o=t[t.length-1];(!o||!o.equals(e[i]))&&t.push(e[i])}return t}rebuildMediaQueries(e){let t=[];for(let s=0;s<e.length;++s){const n=e[s];if(n.mediaList)for(let r=0;r<n.mediaList.length;++r){const l=n.mediaList[r],a=A.createFromMediaQuery(n,l);a&&t.push(a)}}t.sort(o),t=this.squashAdjacentEqual(t);let i=this.cachedQueryModels&&this.cachedQueryModels.length===t.length;for(let s=0;i&&s<t.length;++s)i=i&&this.cachedQueryModels&&this.cachedQueryModels[s].equals(t[s]);if(i)return;this.cachedQueryModels=t,this.renderMediaQueries();function o(s,n){return s.compareTo(n)}}renderMediaQueries(){if(!this.cachedQueryModels||!this.isShowing())return;const e=[];let t=null;for(const o of this.cachedQueryModels){t&&t.model.dimensionsEqual(o)?t.active=t.active||o.active():(t={active:o.active(),model:o,locations:[]},e.push(t));const s=o.rawLocation();s&&t.locations.push(s)}this.contentElement.removeChildren();let i=null;for(let o=0;o<e.length;++o){(!o||e[o].model.section()!==e[o-1].model.section())&&(i=this.contentElement.createChild("div","media-inspector-marker-container"));const s=e[o],n=this.createElementFromMediaQueryModel(s.model);if(this.elementsToMediaQueryModel.set(n,s.model),this.elementsToCSSLocations.set(n,s.locations),n.classList.toggle("media-inspector-marker-inactive",!s.active),!i)throw new Error("Could not find container to render media queries into.");i.appendChild(n)}}zoomFactor(){return g.instance().zoomFactor()/this.scale}wasShown(){super.wasShown(),this.scheduleMediaQueriesUpdate()}createElementFromMediaQueryModel(e){const t=this.zoomFactor(),i=e.minWidthExpression(),o=e.maxWidthExpression(),s=i?(i.computedLength()||0)/t:0,n=o?(o.computedLength()||0)/t:0,r=document.createElement("div");if(r.classList.add("media-inspector-bar"),e.section()===0){r.createChild("div","media-inspector-marker-spacer");const a=r.createChild("div","media-inspector-marker media-inspector-marker-max-width");a.style.width=n+"px",C.install(a,e.mediaText()),l(a,e.maxWidthExpression(),!1,!1),l(a,e.maxWidthExpression(),!0,!0),r.createChild("div","media-inspector-marker-spacer")}if(e.section()===1){r.createChild("div","media-inspector-marker-spacer");const a=r.createChild("div","media-inspector-marker media-inspector-marker-min-max-width");a.style.width=(n-s)*.5+"px",C.install(a,e.mediaText()),l(a,e.maxWidthExpression(),!0,!1),l(a,e.minWidthExpression(),!1,!0),r.createChild("div","media-inspector-marker-spacer").style.flex="0 0 "+s+"px";const d=r.createChild("div","media-inspector-marker media-inspector-marker-min-max-width");d.style.width=(n-s)*.5+"px",C.install(d,e.mediaText()),l(d,e.minWidthExpression(),!0,!1),l(d,e.maxWidthExpression(),!1,!0),r.createChild("div","media-inspector-marker-spacer")}if(e.section()===2){const a=r.createChild("div","media-inspector-marker media-inspector-marker-min-width media-inspector-marker-min-width-left");C.install(a,e.mediaText()),l(a,e.minWidthExpression(),!1,!1),r.createChild("div","media-inspector-marker-spacer").style.flex="0 0 "+s+"px";const d=r.createChild("div","media-inspector-marker media-inspector-marker-min-width media-inspector-marker-min-width-right");C.install(d,e.mediaText()),l(d,e.minWidthExpression(),!0,!0)}function l(a,d,c,u){d&&(a.createChild("div","media-inspector-marker-label-container "+(c?"media-inspector-marker-label-container-left":"media-inspector-marker-label-container-right")).createChild("span","media-inspector-marker-label "+(u?"media-inspector-label-left":"media-inspector-label-right")).textContent=d.value()+d.unit())}return r}}class A{cssMedia;minWidthExpressionInternal;maxWidthExpressionInternal;activeInternal;sectionInternal;rawLocationInternal;constructor(e,t,i,o){this.cssMedia=e,this.minWidthExpressionInternal=t,this.maxWidthExpressionInternal=i,this.activeInternal=o,i&&!t?this.sectionInternal=0:t&&i?this.sectionInternal=1:this.sectionInternal=2}static createFromMediaQuery(e,t){let i=null,o=Number.MAX_VALUE,s=null,n=Number.MIN_VALUE;const r=t.expressions();if(!r)return null;for(let l=0;l<r.length;++l){const a=r[l],d=a.feature();if(d.indexOf("width")===-1)continue;const c=a.computedLength();d.startsWith("max-")&&c&&c<o?(i=a,o=c):d.startsWith("min-")&&c&&c>n&&(s=a,n=c)}return n>o||!i&&!s?null:new A(e,s,i,t.active())}equals(e){return this.compareTo(e)===0}dimensionsEqual(e){const t=this.minWidthExpression(),i=e.minWidthExpression(),o=this.maxWidthExpression(),s=e.maxWidthExpression(),n=this.section()===e.section(),r=!t||t.computedLength()===i?.computedLength(),l=!o||o.computedLength()===s?.computedLength();return n&&r&&l}compareTo(e){if(this.section()!==e.section())return this.section()-e.section();if(this.dimensionsEqual(e)){const d=this.rawLocation(),c=e.rawLocation();return!d&&!c?ee(this.mediaText(),e.mediaText()):d&&!c?1:!d&&c?-1:this.active()!==e.active()?this.active()?-1:1:!d||!c?0:ee(d.url,c.url)||d.lineNumber-c.lineNumber||d.columnNumber-c.columnNumber}const t=this.maxWidthExpression(),i=e.maxWidthExpression(),o=t&&t.computedLength()||0,s=i&&i.computedLength()||0,n=this.minWidthExpression(),r=e.minWidthExpression(),l=n&&n.computedLength()||0,a=r&&r.computedLength()||0;return this.section()===0?s-o:this.section()===2?l-a:l-a||s-o}section(){return this.sectionInternal}mediaText(){return this.cssMedia.text||""}rawLocation(){return this.rawLocationInternal||(this.rawLocationInternal=this.cssMedia.rawLocation()),this.rawLocationInternal}minWidthExpression(){return this.minWidthExpressionInternal}maxWidthExpression(){return this.maxWidthExpressionInternal}active(){return this.activeInternal}}const it=Object.freeze(Object.defineProperty({__proto__:null,MediaQueryInspector:de,MediaQueryUIModel:A},Symbol.toStringTag,{value:"Module"})),b={doubleclickForFullHeight:"Double-click for full height",mobileS:"Mobile S",mobileM:"Mobile M",mobileL:"Mobile L",tablet:"Tablet",laptop:"Laptop",laptopL:"Laptop L"},st=q("panels/emulation/DeviceModeView.ts",b),M=_.bind(void 0,st);class N extends X{wrapperInstance;blockElementToWidth;model;mediaInspector;showMediaInspectorSetting;showRulersSetting;topRuler;leftRuler;presetBlocks;responsivePresetsContainer;screenArea;pageArea;outlineImage;contentClip;contentArea;rightResizerElement;leftResizerElement;bottomResizerElement;bottomRightResizerElement;bottomLeftResizerElement;cachedResizable;mediaInspectorContainer;screenImage;toolbar;slowPositionStart;resizeStart;cachedCssScreenRect;cachedCssVisiblePageRect;cachedOutlineRect;cachedMediaInspectorVisible;cachedShowRulers;cachedScale;handleWidth;handleHeight;constructor(){super(!0),this.blockElementToWidth=new WeakMap,this.setMinimumSize(150,150),this.element.classList.add("device-mode-view"),this.registerRequiredCSS(Ke),this.model=ne.instance(),this.model.addEventListener("Updated",this.updateUI,this),this.mediaInspector=new de(()=>this.model.appliedDeviceSize().width,this.model.setWidth.bind(this.model),new oe(0)),this.showMediaInspectorSetting=E.instance().moduleSetting("show-media-query-inspector"),this.showMediaInspectorSetting.addChangeListener(this.updateUI,this),this.showRulersSetting=E.instance().moduleSetting("emulation.show-rulers"),this.showRulersSetting.addChangeListener(this.updateUI,this),this.topRuler=new $(!0,this.model.setWidthAndScaleToFit.bind(this.model)),this.topRuler.element.classList.add("device-mode-ruler-top"),this.leftRuler=new $(!1,this.model.setHeightAndScaleToFit.bind(this.model)),this.leftRuler.element.classList.add("device-mode-ruler-left"),this.createUI(),g.instance().addEventListener("ZoomChanged",this.zoomChanged,this)}createUI(){this.toolbar=new re(this.model,this.showMediaInspectorSetting,this.showRulersSetting),this.contentElement.appendChild(this.toolbar.element()),this.contentClip=this.contentElement.createChild("div","device-mode-content-clip vbox"),this.responsivePresetsContainer=this.contentClip.createChild("div","device-mode-presets-container"),this.responsivePresetsContainer.setAttribute("jslog",`${xe()}`),this.populatePresetsContainer(),this.mediaInspectorContainer=this.contentClip.createChild("div","device-mode-media-container"),this.contentArea=this.contentClip.createChild("div","device-mode-content-area"),this.outlineImage=this.contentArea.createChild("img","device-mode-outline-image hidden fill"),this.outlineImage.addEventListener("load",this.onImageLoaded.bind(this,this.outlineImage,!0),!1),this.outlineImage.addEventListener("error",this.onImageLoaded.bind(this,this.outlineImage,!1),!1),this.screenArea=this.contentArea.createChild("div","device-mode-screen-area"),this.screenImage=this.screenArea.createChild("img","device-mode-screen-image hidden"),this.screenImage.addEventListener("load",this.onImageLoaded.bind(this,this.screenImage,!0),!1),this.screenImage.addEventListener("error",this.onImageLoaded.bind(this,this.screenImage,!1),!1),this.bottomRightResizerElement=this.screenArea.createChild("div","device-mode-resizer device-mode-bottom-right-resizer"),this.bottomRightResizerElement.createChild("div",""),this.createResizer(this.bottomRightResizerElement,2,1),this.bottomLeftResizerElement=this.screenArea.createChild("div","device-mode-resizer device-mode-bottom-left-resizer"),this.bottomLeftResizerElement.createChild("div",""),this.createResizer(this.bottomLeftResizerElement,-2,1),this.rightResizerElement=this.screenArea.createChild("div","device-mode-resizer device-mode-right-resizer"),this.rightResizerElement.createChild("div",""),this.createResizer(this.rightResizerElement,2,0),this.leftResizerElement=this.screenArea.createChild("div","device-mode-resizer device-mode-left-resizer"),this.leftResizerElement.createChild("div",""),this.createResizer(this.leftResizerElement,-2,0),this.bottomResizerElement=this.screenArea.createChild("div","device-mode-resizer device-mode-bottom-resizer"),this.bottomResizerElement.createChild("div",""),this.createResizer(this.bottomResizerElement,0,1),this.bottomResizerElement.addEventListener("dblclick",this.model.setHeight.bind(this.model,0),!1),C.install(this.bottomResizerElement,M(b.doubleclickForFullHeight)),this.pageArea=this.screenArea.createChild("div","device-mode-page-area"),this.pageArea.createChild("slot")}populatePresetsContainer(){const e=[320,375,425,768,1024,1440,2560],t=[M(b.mobileS),M(b.mobileM),M(b.mobileL),M(b.tablet),M(b.laptop),M(b.laptopL),"4K"];this.presetBlocks=[];const i=this.responsivePresetsContainer.createChild("div","device-mode-presets-container-inner");for(let s=e.length-1;s>=0;--s){const r=i.createChild("div","fill device-mode-preset-bar-outer").createChild("div","device-mode-preset-bar");r.createChild("span").textContent=t[s]+" – "+e[s]+"px",r.setAttribute("jslog",`${Me().track({click:!0}).context(`device-mode-preset-${e[s]}px`)}`),r.addEventListener("click",o.bind(this,e[s]),!1),this.blockElementToWidth.set(r,e[s]),this.presetBlocks.push(r)}function o(s,n){this.model.emulate(p.Responsive,null,null),this.model.setWidthAndScaleToFit(s),n.consume()}}createResizer(e,t,i){const o=new ye;e.setAttribute("jslog",`${Ie("device-mode-resizer").track({drag:!0})}`),o.addElement(e);let s=t?"ew-resize":"ns-resize";return t*i>0&&(s="nwse-resize"),t*i<0&&(s="nesw-resize"),o.setCursor(s),o.addEventListener("ResizeStart",this.onResizeStart,this),o.addEventListener("ResizeUpdateXY",this.onResizeUpdate.bind(this,t,i)),o.addEventListener("ResizeEnd",this.onResizeEnd,this),o}onResizeStart(){this.slowPositionStart=null;const e=this.model.screenRect();this.resizeStart=new T(e.width,e.height)}onResizeUpdate(e,t,i){i.data.shiftKey!==!!this.slowPositionStart&&(this.slowPositionStart=i.data.shiftKey?{x:i.data.currentX,y:i.data.currentY}:null);let o=i.data.currentX-i.data.startX,s=i.data.currentY-i.data.startY;if(this.slowPositionStart&&(o=(i.data.currentX-this.slowPositionStart.x)/10+this.slowPositionStart.x-i.data.startX,s=(i.data.currentY-this.slowPositionStart.y)/10+this.slowPositionStart.y-i.data.startY),e&&this.resizeStart){const n=o*g.instance().zoomFactor();let r=this.resizeStart.width+n*e;r=Math.round(r/this.model.scale()),r>=P&&r<=L&&this.model.setWidth(r)}if(t&&this.resizeStart){const n=s*g.instance().zoomFactor();let r=this.resizeStart.height+n*t;r=Math.round(r/this.model.scale()),r>=P&&r<=L&&this.model.setHeight(r)}}exitHingeMode(){this.model&&this.model.exitHingeMode()}onResizeEnd(){delete this.resizeStart,Ce.actionTaken(Ee.ResizedViewInResponsiveMode)}updateUI(){function e(u,w){u.style.left=w.left+"px",u.style.top=w.top+"px",u.style.width=w.width+"px",u.style.height=w.height+"px"}if(!this.isShowing())return;const t=g.instance().zoomFactor();let i=!1;const o=this.showRulersSetting.get()&&this.model.type()!==p.None;let s=!1,n=!1;const r=this.model.screenRect().scale(1/t);(!this.cachedCssScreenRect||!r.isEqual(this.cachedCssScreenRect))&&(e(this.screenArea,r),n=!0,i=!0,this.cachedCssScreenRect=r);const l=this.model.visiblePageRect().scale(1/t);(!this.cachedCssVisiblePageRect||!l.isEqual(this.cachedCssVisiblePageRect))&&(e(this.pageArea,l),i=!0,this.cachedCssVisiblePageRect=l);const a=this.model.outlineRect();if(a){const u=a.scale(1/t);(!this.cachedOutlineRect||!u.isEqual(this.cachedOutlineRect))&&(e(this.outlineImage,u),i=!0,this.cachedOutlineRect=u)}this.contentClip.classList.toggle("device-mode-outline-visible",!!this.model.outlineImage());const d=this.model.type()===p.Responsive;d!==this.cachedResizable&&(this.rightResizerElement.classList.toggle("hidden",!d),this.leftResizerElement.classList.toggle("hidden",!d),this.bottomResizerElement.classList.toggle("hidden",!d),this.bottomRightResizerElement.classList.toggle("hidden",!d),this.bottomLeftResizerElement.classList.toggle("hidden",!d),this.cachedResizable=d);const c=this.showMediaInspectorSetting.get()&&this.model.type()!==p.None;if(c!==this.cachedMediaInspectorVisible&&(c?this.mediaInspector.show(this.mediaInspectorContainer):this.mediaInspector.detach(),s=!0,i=!0,this.cachedMediaInspectorVisible=c),o!==this.cachedShowRulers&&(this.contentClip.classList.toggle("device-mode-rulers-visible",o),o?(this.topRuler.show(this.contentArea),this.leftRuler.show(this.contentArea)):(this.topRuler.detach(),this.leftRuler.detach()),s=!0,i=!0,this.cachedShowRulers=o),this.model.scale()!==this.cachedScale){n=!0,i=!0;for(const u of this.presetBlocks){const w=this.blockElementToWidth.get(u);if(!w)throw new Error("Could not get width for block.");u.style.width=w*this.model.scale()+"px"}this.cachedScale=this.model.scale()}this.toolbar.update(),this.loadImage(this.screenImage,this.model.screenImage()),this.loadImage(this.outlineImage,this.model.outlineImage()),this.mediaInspector.setAxisTransform(this.model.scale()),i&&this.doResize(),n&&(this.topRuler.render(this.model.scale()),this.leftRuler.render(this.model.scale()),this.topRuler.element.positionAt(this.cachedCssScreenRect?this.cachedCssScreenRect.left:0,this.cachedCssScreenRect?this.cachedCssScreenRect.top:0),this.leftRuler.element.positionAt(this.cachedCssScreenRect?this.cachedCssScreenRect.left:0,this.cachedCssScreenRect?this.cachedCssScreenRect.top:0)),s&&this.contentAreaResized()}loadImage(e,t){e.getAttribute("srcset")!==t&&(e.setAttribute("srcset",t),t||e.classList.toggle("hidden",!0))}onImageLoaded(e,t){e.classList.toggle("hidden",!t)}setNonEmulatedAvailableSize(e){if(this.model.type()!==p.None)return;const t=g.instance().zoomFactor(),i=e.getBoundingClientRect(),o=new T(Math.max(i.width*t,1),Math.max(i.height*t,1));this.model.setAvailableSize(o,o)}contentAreaResized(){const e=g.instance().zoomFactor(),t=this.contentArea.getBoundingClientRect(),i=new T(Math.max(t.width*e,1),Math.max(t.height*e,1)),o=new T(Math.max((t.width-2*(this.handleWidth||0))*e,1),Math.max((t.height-(this.handleHeight||0))*e,1));this.model.setAvailableSize(i,o)}measureHandles(){const e=this.rightResizerElement.classList.contains("hidden");this.rightResizerElement.classList.toggle("hidden",!1),this.bottomResizerElement.classList.toggle("hidden",!1),this.handleWidth=this.rightResizerElement.offsetWidth,this.handleHeight=this.bottomResizerElement.offsetHeight,this.rightResizerElement.classList.toggle("hidden",e),this.bottomResizerElement.classList.toggle("hidden",e)}zoomChanged(){delete this.handleWidth,delete this.handleHeight,this.isShowing()&&(this.measureHandles(),this.contentAreaResized())}onResize(){this.isShowing()&&this.contentAreaResized()}wasShown(){this.measureHandles(),this.toolbar.restore()}willHide(){this.model.emulate(p.None,null,null)}async captureScreenshot(){const e=await this.model.captureScreenshot(!1);if(e===null)return;const t=new Image;t.src="data:image/png;base64,"+e,t.onload=async()=>{const i=t.naturalWidth/this.model.screenRect().width,o=this.model.outlineRect();if(!o)throw new Error("Unable to take screenshot: no outlineRect available.");const s=o.scale(i),n=this.model.screenRect().scale(i),r=this.model.visiblePageRect().scale(i),l=n.left+r.left-s.left,a=n.top+r.top-s.top,d=document.createElement("canvas");d.width=Math.floor(s.width),d.height=Math.min(16384,Math.floor(s.height));const c=d.getContext("2d");if(!c)throw new Error("Could not get 2d context from canvas.");c.imageSmoothingEnabled=!1,this.model.outlineImage()&&await this.paintImage(c,this.model.outlineImage(),s.relativeTo(s)),this.model.screenImage()&&await this.paintImage(c,this.model.screenImage(),n.relativeTo(s)),c.drawImage(t,Math.floor(l),Math.floor(a)),this.saveScreenshot(d)}}async captureFullSizeScreenshot(){const e=await this.model.captureScreenshot(!0);if(e!==null)return this.saveScreenshotBase64(e)}async captureAreaScreenshot(e){const t=await this.model.captureScreenshot(!1,e);if(t!==null)return this.saveScreenshotBase64(t)}saveScreenshotBase64(e){const t=new Image;t.src="data:image/png;base64,"+e,t.onload=()=>{const i=document.createElement("canvas");i.width=t.naturalWidth,i.height=Math.min(16384,Math.floor(t.naturalHeight));const o=i.getContext("2d");if(!o)throw new Error("Could not get 2d context for base64 screenshot.");o.imageSmoothingEnabled=!1,o.drawImage(t,0,0),this.saveScreenshot(i)}}paintImage(e,t,i){return new Promise(o=>{const s=new Image;s.crossOrigin="Anonymous",s.srcset=t,s.onerror=()=>o(),s.onload=()=>{e.drawImage(s,i.left,i.top,i.width,i.height),o()}})}saveScreenshot(e){const t=this.model.inspectedURL();let i="";if(t){const n=ke(t);i=Re(n)}const o=this.model.device();o&&this.model.type()===p.Device&&(i+=`(${o.title})`);const s=document.createElement("a");s.download=i+".png",e.toBlob(n=>{n!==null&&(s.href=URL.createObjectURL(n),s.click())})}}class $ extends X{contentElementInternal;horizontal;scale;count;throttler;applyCallback;renderedScale;renderedZoomFactor;constructor(e,t){super(),this.element.classList.add("device-mode-ruler"),this.element.setAttribute("jslog",`${ze().track({click:!0})}`),this.contentElementInternal=this.element.createChild("div","device-mode-ruler-content").createChild("div","device-mode-ruler-inner"),this.horizontal=e,this.scale=1,this.count=0,this.throttler=new oe(0),this.applyCallback=t}render(e){this.scale=e,this.throttler.schedule(this.update.bind(this))}onResize(){this.throttler.schedule(this.update.bind(this))}update(){const e=g.instance().zoomFactor(),t=this.horizontal?this.contentElementInternal.offsetWidth:this.contentElementInternal.offsetHeight;(this.scale!==this.renderedScale||e!==this.renderedZoomFactor)&&(this.contentElementInternal.removeChildren(),this.count=0,this.renderedScale=this.scale,this.renderedZoomFactor=e);const i=t*e/this.scale,o=Math.ceil(i/5);let s=1;this.scale<.8&&(s=2),this.scale<.6&&(s=4),this.scale<.4&&(s=8),this.scale<.2&&(s=16),this.scale<.1&&(s=32);for(let n=o;n<this.count;n++)if(!(n%s)){const r=this.contentElementInternal.lastChild;r&&r.remove()}for(let n=this.count;n<o;n++){if(n%s)continue;const r=this.contentElementInternal.createChild("div","device-mode-ruler-marker");if(n&&(this.horizontal?r.style.left=5*n*this.scale/e+"px":r.style.top=5*n*this.scale/e+"px",!(n%20))){const l=r.createChild("div","device-mode-ruler-text");l.textContent=String(n*5),l.addEventListener("click",this.onMarkerClick.bind(this,n*5),!1)}n%10?n%5||r.classList.add("device-mode-ruler-marker-medium"):r.classList.add("device-mode-ruler-marker-large")}return this.count=o,Promise.resolve()}onMarkerClick(e){this.applyCallback.call(null,e)}}const ot=Object.freeze(Object.defineProperty({__proto__:null,DeviceModeView:N,Ruler:$},Symbol.toStringTag,{value:"Module"}));let B;class S extends X{inspectedPagePlaceholder;deviceModeView;toggleDeviceModeAction;showDeviceModeSetting;constructor(e){super(),this.inspectedPagePlaceholder=e,this.deviceModeView=null,this.toggleDeviceModeAction=Te.instance().getAction("emulation.toggle-device-mode");const t=ne.instance();this.showDeviceModeSetting=t.enabledSetting(),this.showDeviceModeSetting.setRequiresUserAction(!!De.queryParam("hasOtherClients")),this.showDeviceModeSetting.addChangeListener(this.update.bind(this,!1)),Q.instance().addModelListener(Le,"ScreenshotRequested",this.screenshotRequestedFromOverlay,this),this.update(!0)}static instance(e={forceNew:null,inspectedPagePlaceholder:null}){const{forceNew:t,inspectedPagePlaceholder:i}=e;if(!B||t){if(!i)throw new Error(`Unable to create DeviceModeWrapper: inspectedPagePlaceholder must be provided: ${new Error().stack}`);B=new S(i)}return B}toggleDeviceMode(){this.showDeviceModeSetting.set(!this.showDeviceModeSetting.get())}isDeviceModeOn(){return this.showDeviceModeSetting.get()}captureScreenshot(e,t){return this.deviceModeView||(this.deviceModeView=new N),this.deviceModeView.setNonEmulatedAvailableSize(this.inspectedPagePlaceholder.element),e?this.deviceModeView.captureFullSizeScreenshot():t?this.deviceModeView.captureAreaScreenshot(t):this.deviceModeView.captureScreenshot(),!0}screenshotRequestedFromOverlay(e){const t=e.data;this.captureScreenshot(!1,t)}update(e){if(this.toggleDeviceModeAction.setToggled(this.showDeviceModeSetting.get()),!e){const t=this.deviceModeView&&this.deviceModeView.isShowing();if(this.showDeviceModeSetting.get()===t)return}this.showDeviceModeSetting.get()?(this.deviceModeView||(this.deviceModeView=new N),this.deviceModeView.show(this.element),this.inspectedPagePlaceholder.clearMinimumSize(),this.inspectedPagePlaceholder.show(this.deviceModeView.element)):(this.deviceModeView&&(this.deviceModeView.exitHingeMode(),this.deviceModeView.detach()),this.inspectedPagePlaceholder.restoreMinimumSize(),this.inspectedPagePlaceholder.show(this.element))}}class nt{handleAction(e,t){switch(t){case"emulation.capture-screenshot":return S.instance().captureScreenshot();case"emulation.capture-node-screenshot":{const i=e.flavor(Pe);if(!i)return!0;async function o(){if(!i)return;const s=await i.resolveToObject();if(!s)return;const n=await s.callFunction(function(){const c=this.getBoundingClientRect(),u=this.ownerDocument.documentElement.getBoundingClientRect();return JSON.stringify({x:c.left-u.left,y:c.top-u.top,width:c.width,height:c.height,scale:1})});if(!n.object)throw new Error("Clipping error: could not get object data.");const r=JSON.parse(n.object.value),l=await i.domModel().target().pageAgent().invoke_getLayoutMetrics(),d=!l.getError()&&l.visualViewport.zoom||1;r.x*=d,r.y*=d,r.width*=d,r.height*=d,S.instance().captureScreenshot(!1,r)}return o(),!0}case"emulation.capture-full-height-screenshot":return S.instance().captureScreenshot(!0);case"emulation.toggle-device-mode":return S.instance().toggleDeviceMode(),!0}return!1}}const rt=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:nt,DeviceModeWrapper:S},Symbol.toStringTag,{value:"Module"})),at={cssContent:`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  background-color: var(--sys-color-cdt-base-container);
}

/*# sourceURL=inspectedPagePlaceholder.css */
`};let U;class F extends We(se){updateId;constructor(){super(!0),this.registerRequiredCSS(at),g.instance().addEventListener("ZoomChanged",this.onResize,this),this.restoreMinimumSize()}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!U||t)&&(U=new F),U}onResize(){this.updateId&&this.element.window().cancelAnimationFrame(this.updateId),this.updateId=this.element.window().requestAnimationFrame(this.update.bind(this,!1))}restoreMinimumSize(){this.setMinimumSize(150,150)}clearMinimumSize(){this.setMinimumSize(1,1)}dipPageRect(){const e=g.instance().zoomFactor(),t=this.element.getBoundingClientRect(),i=this.element.ownerDocument.body.getBoundingClientRect(),o=Math.max(t.left*e,i.left*e),s=Math.max(t.top*e,i.top*e),n=Math.min(t.bottom*e,i.bottom*e),r=Math.min(t.right*e,i.right*e);return{x:o,y:s,width:r-o,height:n-s}}update(e){delete this.updateId;const t=this.dipPageRect(),i={x:Math.round(t.x),y:Math.round(t.y),height:Math.max(1,Math.round(t.height)),width:Math.max(1,Math.round(t.width))};e&&(--i.height,this.dispatchEventToListeners("Update",i),++i.height),this.dispatchEventToListeners("Update",i)}}const dt=Object.freeze(Object.defineProperty({__proto__:null,InspectedPagePlaceholder:F},Symbol.toStringTag,{value:"Module"}));let j;class z{rootSplitWidget;deviceModeView;inspectedPagePlaceholder;toolboxWindow;toolboxRootView;changingDockSide;toolboxDocument;constructor(){I.instance().addEventListener("BeforeDockSideChanged",this.openToolboxWindow,this)}static instance(){return j||(j=new z),j}presentUI(e){const t=new te;this.rootSplitWidget=new Ae(!1,!0,"inspector-view.split-view-state",555,300,!0),this.rootSplitWidget.show(t.element),this.rootSplitWidget.setSidebarWidget(R.instance()),this.rootSplitWidget.setDefaultFocusedChild(R.instance()),R.instance().setOwnerSplit(this.rootSplitWidget),this.inspectedPagePlaceholder=F.instance(),this.inspectedPagePlaceholder.addEventListener("Update",this.onSetInspectedPageBounds.bind(this),this),this.deviceModeView=S.instance({inspectedPagePlaceholder:this.inspectedPagePlaceholder,forceNew:!1}),I.instance().addEventListener("BeforeDockSideChanged",this.onBeforeDockSideChange,this),I.instance().addEventListener("DockSideChanged",this.onDockSideChange,this),I.instance().addEventListener("AfterDockSideChanged",this.onAfterDockSideChange,this),this.onDockSideChange(),console.timeStamp("AdvancedApp.attachToBody"),t.attachToDocument(e),t.focus(),this.inspectedPagePlaceholder.update()}openToolboxWindow(e){if(e.data.to!=="undocked"||this.toolboxWindow)return;const t=window.location.href.replace("devtools_app.html","device_mode_emulation_frame.html");this.toolboxWindow=window.open(t,void 0)}deviceModeEmulationFrameLoaded(e){Fe.instance().addDocumentToTheme(e),Ve(e),Be(e.documentElement),Ue(e.body),Z.installHandler(e),this.toolboxRootView=new te,this.toolboxRootView.attachToDocument(e),this.toolboxDocument=e,this.updateDeviceModeView()}updateDeviceModeView(){this.isDocked()?this.rootSplitWidget.setMainWidget(this.deviceModeView):this.toolboxRootView&&this.deviceModeView.show(this.toolboxRootView.element)}onBeforeDockSideChange(e){e.data.to==="undocked"&&this.toolboxRootView&&(this.rootSplitWidget.hideSidebar(),this.inspectedPagePlaceholder.update()),this.changingDockSide=!0}onDockSideChange(e){this.updateDeviceModeView();const t=e?e.data.to:I.instance().dockSide();if(t===void 0)throw new Error("Got onDockSideChange event with unexpected undefined for dockSide()");t==="undocked"?this.updateForUndocked():this.toolboxRootView&&e&&e.data.from==="undocked"?this.rootSplitWidget.hideSidebar():this.updateForDocked(t)}onAfterDockSideChange(e){this.changingDockSide&&(e.data.from&&e.data.from==="undocked"&&this.updateForDocked(e.data.to),this.changingDockSide=!1,this.inspectedPagePlaceholder.update())}updateForDocked(e){const t=this.rootSplitWidget.resizerElement();t.style.transform=e==="right"?"translateX(2px)":e==="left"?"translateX(-2px)":"",this.rootSplitWidget.setVertical(e==="right"||e==="left"),this.rootSplitWidget.setSecondIsSidebar(e==="right"||e==="bottom"),this.rootSplitWidget.toggleResizer(this.rootSplitWidget.resizerElement(),!0),this.rootSplitWidget.toggleResizer(R.instance().topResizerElement(),e==="bottom"),this.rootSplitWidget.showBoth()}updateForUndocked(){this.rootSplitWidget.toggleResizer(this.rootSplitWidget.resizerElement(),!1),this.rootSplitWidget.toggleResizer(R.instance().topResizerElement(),!1),this.rootSplitWidget.hideMain()}isDocked(){return I.instance().dockSide()!=="undocked"}onSetInspectedPageBounds(e){if(this.changingDockSide)return;const t=this.inspectedPagePlaceholder.element.window();if(!t.innerWidth||!t.innerHeight||!this.inspectedPagePlaceholder.isShowing())return;const i=e.data;console.timeStamp("AdvancedApp.setInspectedPageBounds"),D.setInspectedPageBounds(i)}}globalThis.Emulation=globalThis.Emulation||{};globalThis.Emulation.AdvancedApp=z;let O;class Y{static instance(e={forceNew:null}){const{forceNew:t}=e;return(!O||t)&&(O=new Y),O}createApp(){return z.instance()}}const lt=Object.freeze(Object.defineProperty({__proto__:null,AdvancedApp:z,AdvancedAppProvider:Y},Symbol.toStringTag,{value:"Module"})),pt=Object.freeze(Object.defineProperty({__proto__:null,AdvancedApp:lt,DeviceModeToolbar:Ge,DeviceModeView:ot,DeviceModeWrapper:rt,InspectedPagePlaceholder:dt,MediaQueryInspector:it},Symbol.toStringTag,{value:"Module"}));export{nt as A,S as D,F as I,pt as e};
//# sourceMappingURL=emulation-CRgKT_2f.js.map
