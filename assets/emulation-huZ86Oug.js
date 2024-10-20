import{b as U,g as T,aU as V,bi as k,bS as v,bJ as N,bT as B,bU as F,bh as H,bV as P}from"./inspector-CyOA7R9n.js";import{E as z,a as w,V as R,I as D,H as j,M as S,D as g}from"./DeviceModeModel-fDJ3OPwb.js";import{U as O}from"./UserAgentClientHintsForm-CYAYtRuO.js";const f=new CSSStyleSheet;f.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.devices-settings-tab .settings-container-wrapper {
  padding-top: 5px;
}

.devices-settings-tab .settings-tab.settings-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin: 0;
}

.devices-settings-tab .devices-button-row {
  flex: none;
  display: flex;

  devtools-button {
    margin: 4px 0 0 5px;
  }
}

.devices-settings-tab .devices-list {
  width: min(350px, 100%);
  margin-top: 10px;
}

.devices-list-item {
  padding: 3px 5px;
  height: 30px;
  display: flex;
  align-items: center;
  flex: auto 1 1;
  overflow: hidden;
  color: var(--sys-color-on-surface);
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.devices-list-checkbox {
  height: 12px;
  width: 12px;
  margin: 2px 5px 2px 2px;
  flex: none;
  pointer-events: none;
}

.devices-list-checkbox:focus {
  outline: auto 5px -webkit-focus-ring-color;
}

.device-name {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.devices-edit-fields {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 4px;
  margin-bottom: 5px;
}

.devices-edit-fields b {
  margin-top: 8px;
  margin-bottom: 0;
}

.devices-edit-client-hints-heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
}
/* Don't want the bottom margin in the specific case of the folding one;
 * it messes with alignment with the arrow (which is a ::before) and  it's
 * spaced reasonably without it anyway
 */
li .devices-edit-client-hints-heading {
  margin-bottom: 0;
}

.devices-edit-client-hints-heading b {
  margin-inline-end: 2px;
}

.devices-edit-client-hints-heading .help-icon {
  margin-left: 2px;
  margin-right: 2px;
  vertical-align: middle;
}

.devices-edit-client-hints-heading a:focus {
  box-shadow: var(--sys-color-state-focus-ring);
}

.devices-edit-fields input {
  flex: auto;
  margin: 8px 5px 0;
}

li.devices-edit-client-hints-field {
  /* Cancel out padding from treeview's .tree-outline ol */
  left: -12px;
}

.devices-edit-client-hints-field input {
  flex: auto;
  margin: 8px 5px 0;
}

.devices-edit-fields .device-edit-fixed {
  flex: 0 0 140px;
}

.devices-edit-fields select {
  margin: 8px 5px 0;
}

/*# sourceURL=devicesSettingsTab.css */
`);const a={emulatedDevices:"Emulated Devices",addCustomDevice:"Add custom device...",device:"Device",deviceName:"Device Name",width:"Width",height:"Height",devicePixelRatio:"Device pixel ratio",userAgentString:"User agent string",userAgentType:"User agent type",deviceNameMustBeLessThanS:"Device name must be less than {PH1} characters.",deviceNameCannotBeEmpty:"Device name cannot be empty.",deviceAddedOrUpdated:"Device {PH1} successfully added/updated."},_=U("panels/settings/emulation/DevicesSettingsTab.ts",a),n=T.bind(void 0,_);class $ extends V{containerElement;addCustomButton;ariaSuccessMessageElement;list;muteUpdate;emulatedDevicesList;editor;constructor(){super(),this.element.setAttribute("jslog",`${k("devices")}`),this.element.classList.add("settings-tab-container"),this.element.classList.add("devices-settings-tab");const e=this.element.createChild("header");v(e.createChild("h1"),n(a.emulatedDevices)),this.containerElement=this.element.createChild("div","settings-container-wrapper").createChild("div","settings-tab settings-content settings-container");const t=this.containerElement.createChild("div","devices-button-row");this.addCustomButton=N(n(a.addCustomDevice),this.addCustomDevice.bind(this),{jslogContext:"add-custom-device"}),this.addCustomButton.id="custom-device-add-button",t.appendChild(this.addCustomButton),this.ariaSuccessMessageElement=this.containerElement.createChild("div","device-success-message"),B(this.ariaSuccessMessageElement,!1),this.list=new F(this,!1),this.list.element.classList.add("devices-list"),this.list.show(this.containerElement),this.muteUpdate=!1,this.emulatedDevicesList=z.instance(),this.emulatedDevicesList.addEventListener("CustomDevicesUpdated",this.devicesUpdated,this),this.emulatedDevicesList.addEventListener("StandardDevicesUpdated",this.devicesUpdated,this),this.setDefaultFocusedElement(this.addCustomButton)}wasShown(){super.wasShown(),this.devicesUpdated(),this.registerCSSFiles([f]),this.list.registerCSSFiles([f])}devicesUpdated(){if(this.muteUpdate)return;this.list.clear();let e=this.emulatedDevicesList.custom().slice();for(let t=0;t<e.length;++t)this.list.appendItem(e[t],!0);this.list.appendSeparator(),e=this.emulatedDevicesList.standard().slice(),e.sort(w.deviceComparator);for(let t=0;t<e.length;++t)this.list.appendItem(e[t],!1)}muteAndSaveDeviceList(e){this.muteUpdate=!0,e?this.emulatedDevicesList.saveCustomDevices():this.emulatedDevicesList.saveStandardDevices(),this.muteUpdate=!1}addCustomDevice(){const e=new w;e.deviceScaleFactor=0,e.horizontal.width=700,e.horizontal.height=400,e.vertical.width=400,e.vertical.height=700,this.list.addNewItem(this.emulatedDevicesList.custom().length,e)}toNumericInputValue(e){return e?String(e):""}renderItem(e,t){const s=document.createElement("label");s.classList.add("devices-list-item");const i=s.createChild("input","devices-list-checkbox");i.type="checkbox",i.checked=e.show(),i.addEventListener("click",o.bind(this),!1),i.setAttribute("jslog",`${H().track({click:!0})}`);const l=document.createElement("span");return l.classList.add("device-name"),l.appendChild(document.createTextNode(e.title)),s.appendChild(l),s;function o(c){const r=i.checked;e.setShow(r),this.muteAndSaveDeviceList(t),c.consume()}}removeItemRequested(e){this.emulatedDevicesList.removeCustomDevice(e)}commitEdit(e,t,s){e.title=t.control("title").value.trim(),e.vertical.width=t.control("width").value?parseInt(t.control("width").value,10):0,e.vertical.height=t.control("height").value?parseInt(t.control("height").value,10):0,e.horizontal.width=e.vertical.height,e.horizontal.height=e.vertical.width,e.deviceScaleFactor=t.control("scale").value?parseFloat(t.control("scale").value):0,e.userAgent=t.control("user-agent").value,e.modes=[],e.modes.push({title:"",orientation:R,insets:new D(0,0,0,0),image:null}),e.modes.push({title:"",orientation:j,insets:new D(0,0,0,0),image:null}),e.capabilities=[];const i=t.control("ua-type").value;(i==="Mobile"||i==="Mobile (no touch)")&&e.capabilities.push("mobile"),(i==="Mobile"||i==="Desktop (touch)")&&e.capabilities.push("touch");const l=t.control("ua-metadata").value.metaData;l&&(e.userAgentMetadata={...l,mobile:i==="Mobile"||i==="Mobile (no touch)"}),s?this.emulatedDevicesList.addCustomDevice(e):this.emulatedDevicesList.saveCustomDevices(),this.addCustomButton.scrollIntoViewIfNeeded(),this.addCustomButton.focus(),this.ariaSuccessMessageElement.setAttribute("aria-label",n(a.deviceAddedOrUpdated,{PH1:e.title}))}beginEdit(e){const t=this.createEditor();t.control("title").value=e.title,t.control("width").value=this.toNumericInputValue(e.vertical.width),t.control("height").value=this.toNumericInputValue(e.vertical.height),t.control("scale").value=this.toNumericInputValue(e.deviceScaleFactor),t.control("user-agent").value=e.userAgent;let s;return e.mobile()?s=e.touch()?"Mobile":"Mobile (no touch)":s=e.touch()?"Desktop (touch)":"Desktop",t.control("ua-type").value=s,t.control("ua-metadata").value={metaData:e.userAgentMetadata||void 0},t}createEditor(){if(this.editor)return this.editor;const e=new P;this.editor=e;const t=e.contentElement(),s=t.createChild("div","devices-edit-fields");v(s.createChild("b"),n(a.device));const i=e.createInput("title","text",n(a.deviceName),E);s.createChild("div","hbox").appendChild(i),i.id="custom-device-name-field";const l=s.createChild("div","hbox");l.appendChild(e.createInput("width","text",n(a.width),M)),l.appendChild(e.createInput("height","text",n(a.height),I));const o=e.createInput("scale","text",n(a.devicePixelRatio),A);o.classList.add("device-edit-fixed"),l.appendChild(o);const c=t.createChild("div","devices-edit-fields");v(c.createChild("b"),n(a.userAgentString));const r=c.createChild("div","hbox");r.appendChild(e.createInput("user-agent","text",n(a.userAgentString),()=>({valid:!0,errorMessage:void 0})));const L=["Mobile","Mobile (no touch)","Desktop","Desktop (touch)"],x=e.createSelect("ua-type",L,()=>({valid:!0,errorMessage:void 0}),n(a.userAgentType));x.classList.add("device-edit-fixed"),r.appendChild(x);const u=e.createCustomControl("ua-metadata",O,y);return u.value={},u.addEventListener("clienthintschange",()=>e.requestValidation(),!1),t.appendChild(u),e;function y(){return u.validate()}function E(h,m,d){let b=!1,p;const C=d.value.trim();return C.length>=S?p=n(a.deviceNameMustBeLessThanS,{PH1:S}):C.length===0?p=n(a.deviceNameCannotBeEmpty):b=!0,{valid:b,errorMessage:p}}function M(h,m,d){return g.widthValidator(d.value)}function I(h,m,d){return g.heightValidator(d.value)}function A(h,m,d){return g.scaleValidator(d.value)}}}const K=Object.freeze(Object.defineProperty({__proto__:null,DevicesSettingsTab:$},Symbol.toStringTag,{value:"Module"}));export{K as DevicesSettingsTab};
//# sourceMappingURL=emulation-huZ86Oug.js.map
