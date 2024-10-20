import{b as G,g as q,aU as $,bi as X,bJ as B,bU as K,aj as L,l as D,bV as J,bp as Z,cK as C,cL as E,bG as V,bF as O,bH as U,bI as j,bC as y,bq as F,cM as W,cq as I,cN as M,i as H,co as R,cO as Q,cP as tt,cQ as A,cR as et,cS as it,cT as nt,cU as ot,cg as T,V as at,r as rt}from"./inspector-CyOA7R9n.js";import{t as st}from"./mobile_throttling-CIMam4T2.js";const P=new CSSStyleSheet;P.replaceSync(`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
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

.add-locations-button {
  flex: none;
  margin: 10px 5px;
  min-width: 140px;
  align-self: flex-start;
}

.locations-list {
  max-width: 600px;
  min-width: 340px;
  flex: auto;
}

.locations-list-item {
  padding: 3px 6px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  flex: auto 1 1;
}

.locations-list-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-basis: 170px;
  user-select: none;
  color: var(--sys-color-on-surface);
  position: relative;
  overflow: hidden;
}

.locations-list-title {
  text-align: start;
}

.locations-list-title-text {
  overflow: hidden;
  flex: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.locations-list-separator {
  flex: 0 0 1px;
  background-color: var(--sys-color-divider);
  height: 30px;
  margin: 0 4px;
}

.locations-list-separator-invisible {
  visibility: hidden;
  height: 100% !important; /* stylelint-disable-line declaration-no-important */
}

.locations-edit-row {
  display: flex;
  flex-direction: row;
  margin: 6px 5px;
}

.locations-edit-row input {
  width: 100%;
  text-align: inherit;
}

.locations-input-container {
  padding: 1px;
}

/*# sourceURL=locationsSettingsTab.css */
`);const c={customLocations:"Custom locations",locationName:"Location name",lat:"Lat",long:"Long",timezoneId:"Timezone ID",locale:"Locale",latitude:"Latitude",longitude:"Longitude",locationNameCannotBeEmpty:"Location name cannot be empty",locationNameMustBeLessThanS:"Location name must be less than {PH1} characters",latitudeMustBeANumber:"Latitude must be a number",latitudeMustBeGreaterThanOrEqual:"Latitude must be greater than or equal to {PH1}",latitudeMustBeLessThanOrEqualToS:"Latitude must be less than or equal to {PH1}",longitudeMustBeANumber:"Longitude must be a number",longitudeMustBeGreaterThanOr:"Longitude must be greater than or equal to {PH1}",longitudeMustBeLessThanOrEqualTo:"Longitude must be less than or equal to {PH1}",timezoneIdMustContainAlphabetic:"Timezone ID must contain alphabetic characters",localeMustContainAlphabetic:"Locale must contain alphabetic characters",addLocation:"Add location..."},lt=G("panels/sensors/LocationsSettingsTab.ts",c),d=q.bind(void 0,lt);class ct extends ${list;customSetting;editor;constructor(){super(!0),this.element.setAttribute("jslog",`${X("emulation-locations")}`),this.contentElement.createChild("div","header").textContent=d(c.customLocations);const t=B(d(c.addLocation),this.addButtonClicked.bind(this),{className:"add-locations-button",jslogContext:"emulation.add-location"});this.contentElement.appendChild(t),this.list=new K(this,void 0,!0),this.list.element.classList.add("locations-list"),this.list.show(this.contentElement),this.customSetting=L.instance().moduleSetting("emulation.locations");const e=this.customSetting.get().map(n=>i(n,this.customSetting.defaultValue));function i(n,o){if(!n.title){const s=o.find(l=>l.lat===n.lat&&l.long===n.long&&l.timezoneId===n.timezoneId&&l.locale===n.locale);if(!s)console.error("Could not determine a location setting title");else return s}return n}this.customSetting.set(e),this.customSetting.addChangeListener(this.locationsUpdated,this),this.setDefaultFocusedElement(t)}wasShown(){super.wasShown(),this.registerCSSFiles([P]),this.list.registerCSSFiles([P]),this.locationsUpdated()}locationsUpdated(){this.list.clear();const t=this.customSetting.get();for(const e of t)this.list.appendItem(e,!0);this.list.appendSeparator()}addButtonClicked(){this.list.addNewItem(this.customSetting.get().length,{title:"",lat:0,long:0,timezoneId:"",locale:""})}renderItem(t,e){const i=document.createElement("div");i.role="row",i.classList.add("locations-list-item");const n=i.createChild("div","locations-list-text locations-list-title");n.role="cell";const o=n.createChild("div","locations-list-title-text");o.textContent=t.title,D.install(o,t.title),i.createChild("div","locations-list-separator");const s=i.createChild("div","locations-list-text");s.textContent=String(t.lat),s.role="cell",i.createChild("div","locations-list-separator");const l=i.createChild("div","locations-list-text");l.textContent=String(t.long),l.role="cell",i.createChild("div","locations-list-separator");const h=i.createChild("div","locations-list-text");h.textContent=t.timezoneId,h.role="cell",i.createChild("div","locations-list-separator");const b=i.createChild("div","locations-list-text");return b.textContent=t.locale,b.role="cell",i}removeItemRequested(t,e){const i=this.customSetting.get();i.splice(e,1),this.customSetting.set(i)}commitEdit(t,e,i){t.title=e.control("title").value.trim();const n=e.control("lat").value.trim();t.lat=n?parseFloat(n):0;const o=e.control("long").value.trim();t.long=o?parseFloat(o):0;const s=e.control("timezone-id").value.trim();t.timezoneId=s;const l=e.control("locale").value.trim();t.locale=l;const h=this.customSetting.get();i&&h.push(t),this.customSetting.set(h)}beginEdit(t){const e=this.createEditor();return e.control("title").value=t.title,e.control("lat").value=String(t.lat),e.control("long").value=String(t.long),e.control("timezone-id").value=t.timezoneId,e.control("locale").value=t.locale,e}createEditor(){if(this.editor)return this.editor;const t=new J;this.editor=t;const e=t.contentElement(),i=e.createChild("div","locations-edit-row");i.createChild("div","locations-list-text locations-list-title").textContent=d(c.locationName),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=d(c.lat),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=d(c.long),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=d(c.timezoneId),i.createChild("div","locations-list-separator locations-list-separator-invisible"),i.createChild("div","locations-list-text").textContent=d(c.locale);const n=e.createChild("div","locations-edit-row");n.createChild("div","locations-list-text locations-list-title locations-input-container").appendChild(t.createInput("title","text",d(c.locationName),s)),n.createChild("div","locations-list-separator locations-list-separator-invisible");let o=n.createChild("div","locations-list-text locations-input-container");return o.appendChild(t.createInput("lat","text",d(c.latitude),l)),n.createChild("div","locations-list-separator locations-list-separator-invisible"),o=n.createChild("div","locations-list-text locations-list-text-longitude locations-input-container"),o.appendChild(t.createInput("long","text",d(c.longitude),h)),n.createChild("div","locations-list-separator locations-list-separator-invisible"),o=n.createChild("div","locations-list-text locations-input-container"),o.appendChild(t.createInput("timezone-id","text",d(c.timezoneId),b)),n.createChild("div","locations-list-separator locations-list-separator-invisible"),o=n.createChild("div","locations-list-text locations-input-container"),o.appendChild(t.createInput("locale","text",d(c.locale),S)),t;function s(p,w,f){const x=f.value.trim();let u;return x.length?x.length>50&&(u=d(c.locationNameMustBeLessThanS,{PH1:50})):u=d(c.locationNameCannotBeEmpty),u?{valid:!1,errorMessage:u}:{valid:!0,errorMessage:void 0}}function l(p,w,f){const u=f.value.trim(),z=Number(u);if(!u)return{valid:!0,errorMessage:void 0};let g;return Number.isNaN(z)?g=d(c.latitudeMustBeANumber):parseFloat(u)<-90?g=d(c.latitudeMustBeGreaterThanOrEqual,{PH1:-90}):parseFloat(u)>90&&(g=d(c.latitudeMustBeLessThanOrEqualToS,{PH1:90})),g?{valid:!1,errorMessage:g}:{valid:!0,errorMessage:void 0}}function h(p,w,f){const u=f.value.trim(),z=Number(u);if(!u)return{valid:!0,errorMessage:void 0};let g;return Number.isNaN(z)?g=d(c.longitudeMustBeANumber):parseFloat(u)<-180?g=d(c.longitudeMustBeGreaterThanOr,{PH1:-180}):parseFloat(u)>180&&(g=d(c.longitudeMustBeLessThanOrEqualTo,{PH1:180})),g?{valid:!1,errorMessage:g}:{valid:!0,errorMessage:void 0}}function b(p,w,f){const v=f.value.trim();return v===""||/[a-zA-Z]/.test(v)?{valid:!0,errorMessage:void 0}:{valid:!1,errorMessage:d(c.timezoneIdMustContainAlphabetic)}}function S(p,w,f){const v=f.value.trim();return v===""||/[a-zA-Z]{2}/.test(v)?{valid:!0,errorMessage:void 0}:{valid:!1,errorMessage:d(c.localeMustContainAlphabetic)}}}}const ft=Object.freeze(Object.defineProperty({__proto__:null,LocationsSettingsTab:ct},Symbol.toStringTag,{value:"Module"})),_=new CSSStyleSheet;_.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.sensors-view {
  padding: 12px;
  display: block;
}

.sensors-view input {
  width: 100%;
  max-width: 120px;
  margin: -5px 10px 0 0;
  text-align: end;
}

.sensors-view input[readonly] {
  background-color: var(--sys-color-neutral-container);
}

.sensors-view fieldset {
  border: none;
  padding: 10px 0;
  flex: 0 0 auto;
  margin: 0;
}

.sensors-view fieldset[disabled] {
  opacity: 50%;
}

.orientation-axis-input-container input {
  max-width: 120px;
}

.concurrency-details {
  margin: var(--sys-size-5) var(--sys-size-10);
  display: flex;
  align-items: center;
}

.concurrency-details input {
  width: 50px;
  /* Clear out unexpected margin applied to \\'.sensors-view input\\' */
  margin: 0;
}

.concurrency-hidden {
  visibility: hidden;
}

.sensors-view input:focus::-webkit-input-placeholder {
  color: transparent !important; /* stylelint-disable-line declaration-no-important */
}

.sensors-view .chrome-select {
  width: 200px;
}

.sensors-group-title {
  width: 80px;
  line-height: 24px;
}

.sensors-group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.manage-locations {
  margin-left: var(--sys-size-4);
}

.geo-fields {
  flex: 2 0 200px;
}

.latlong-group {
  display: flex;
  margin-bottom: 10px;
}

.latlong-title {
  width: 70px;
}

.timezone-error,
.locale-error {
  margin-left: 10px;
  color: var(--legacy-input-validation-error);
}

/* Device Orientation */

.orientation-content {
  display: flex;
  flex-wrap: wrap;
}

.orientation-fields {
  margin-right: 10px;
}

.orientation-stage {
  --override-gradient-color-1: var(--ref-palette-cyan95);
  --override-gradient-color-2: var(--ref-palette-cyan90);

  perspective: 700px;
  perspective-origin: 50% 50%;
  width: 160px;
  height: 150px;
  background: linear-gradient(var(--override-gradient-color-1) 0%, var(--override-gradient-color-1) 64%, var(--override-gradient-color-2) 64%, var(--override-gradient-color-1) 100%);
  transition: 0.2s ease opacity, 0.2s ease filter;
  overflow: hidden;
  margin-bottom: 10px;
}

.theme-with-dark-background .orientation-stage,
:host-context(.theme-with-dark-background) .orientation-stage {
  --override-gradient-color-1: var(--ref-palette-cyan10);
  --override-gradient-color-2: var(--ref-palette-cyan30);
}

.orientation-stage.disabled {
  filter: grayscale();
  opacity: 50%;
}

.orientation-element,
.orientation-element::before,
.orientation-element::after {
  position: absolute;
  box-sizing: border-box;
  transform-style: preserve-3d;
  background: no-repeat;
  background-size: cover;
  backface-visibility: hidden;
}

.orientation-box {
  width: 62px;
  height: 122px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: rotate3d(1, 0, 0, 90deg);
}

.orientation-layer {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.orientation-box.is-animating,
.is-animating .orientation-layer {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.orientation-front,
.orientation-back {
  width: 62px;
  height: 122px;
  border-radius: 8px;
}

.orientation-front {
  background-image: var(--image-file-accelerometer-front);
}

.orientation-back {
  transform: rotateY(180deg) translateZ(8px);
  background-image: var(--image-file-accelerometer-back);
}

.orientation-left,
.orientation-right {
  width: 8px;
  height: 106px;
  top: 8px;
  background-position: center center;
}

.orientation-left {
  left: -8px;
  transform-origin: right center;
  transform: rotateY(-90deg);
  background-image: var(--image-file-accelerometer-left);
}

.orientation-right {
  right: -8px;
  transform-origin: left center;
  transform: rotateY(90deg);
  background-image: var(--image-file-accelerometer-right);
}

.orientation-left::before,
.orientation-left::after,
.orientation-right::before,
.orientation-right::after {
  content: "";
  width: 8px;
  height: 6px;
}

.orientation-left::before,
.orientation-left::after {
  background-image: var(--image-file-accelerometer-left);
}

.orientation-right::before,
.orientation-right::after {
  background-image: var(--image-file-accelerometer-right);
}

.orientation-left::before,
.orientation-right::before {
  top: -6px;
  transform-origin: center bottom;
  transform: rotateX(26deg);
  background-position: center top;
}

.orientation-left::after,
.orientation-right::after {
  bottom: -6px;
  transform-origin: center top;
  transform: rotateX(-25deg);
  background-position: center bottom;
}

.orientation-top,
.orientation-bottom {
  width: 50px;
  height: 8px;
  left: 8px;
  background-position: center center;
}

.orientation-top {
  top: -8px;
  transform-origin: center bottom;
  transform: rotateX(90deg);
  background-image: var(--image-file-accelerometer-top);
}

.orientation-bottom {
  bottom: -8px;
  transform-origin: center top;
  transform: rotateX(-90deg);
  background-image: var(--image-file-accelerometer-bottom);
}

.orientation-top::before,
.orientation-top::after,
.orientation-bottom::before,
.orientation-bottom::after {
  content: "";
  width: 8px;
  height: 8px;
}

.orientation-top::before,
.orientation-top::after {
  background-image: var(--image-file-accelerometer-top);
}

.orientation-bottom::before,
.orientation-bottom::after {
  background-image: var(--image-file-accelerometer-bottom);
}

.orientation-top::before,
.orientation-bottom::before {
  left: -6px;
  transform-origin: right center;
  transform: rotateY(-26deg);
  background-position: left center;
}

.orientation-top::after,
.orientation-bottom::after {
  right: -6px;
  transform-origin: left center;
  transform: rotateY(26deg);
  background-position: right center;
}

.orientation-axis-input-container {
  margin-bottom: 10px;
}

.orientation-reset-button {
  min-width: 80px;
}

fieldset.device-orientation-override-section {
  margin: 0;
  display: flex;
}

.panel-section-separator {
  height: 1px;
  margin-bottom: 20px;
  margin-left: -12px;
  margin-right: -12px;
  background: var(--sys-color-divider);
}

button.text-button {
  margin: 4px 0 0 10px;
}

@media (forced-colors: active) {
  .sensors-view fieldset[disabled] {
    opacity: 100%;
  }
}

.chrome-select-label {
  margin-bottom: 16px;
}

/*# sourceURL=sensors.css */
`);const a={location:"Location",noOverride:"No override",overrides:"Overrides",manage:"Manage",manageTheListOfLocations:"Manage the list of locations",other:"Other…",error:"Error",locationUnavailable:"Location unavailable",adjustWithMousewheelOrUpdownKeys:"Adjust with mousewheel or up/down keys. {PH1}: ±10, Shift: ±1, Alt: ±0.01",latitude:"Latitude",longitude:"Longitude",timezoneId:"Timezone ID",locale:"Locale",orientation:"Orientation",off:"Off",customOrientation:"Custom orientation",enableOrientationToRotate:"Enable orientation to rotate",shiftdragHorizontallyToRotate:"Shift+drag horizontally to rotate around the y-axis",deviceOrientationSetToAlphaSBeta:"Device orientation set to alpha: {PH1}, beta: {PH2}, gamma: {PH3}",reset:"Reset",resetDeviceOrientation:"Reset device orientation",forcesTouchInsteadOfClick:"Forces touch instead of click",forcesSelectedIdleStateEmulation:"Forces selected idle state emulation",forcesSelectedPressureStateEmulation:"Forces selected pressure state emulation",presets:"Presets",portrait:"Portrait",portraitUpsideDown:"Portrait upside down",landscapeLeft:"Landscape left",landscapeRight:"Landscape right",displayUp:"Display up",displayDown:"Display down",alpha:"α (alpha)",beta:"β (beta)",gamma:"γ (gamma)"},dt=G("panels/sensors/SensorsView.ts",a),r=q.bind(void 0,dt);class ht extends ${#i;#t;#e;fieldsetElement;timezoneError;locationSelectElement;latitudeInput;longitudeInput;timezoneInput;localeInput;latitudeSetter;longitudeSetter;timezoneSetter;localeSetter;localeError;customLocationsGroup;deviceOrientationSetting;deviceOrientation;deviceOrientationOverrideEnabled;deviceOrientationFieldset;stageElement;orientationSelectElement;alphaElement;betaElement;gammaElement;alphaSetter;betaSetter;gammaSetter;orientationLayer;boxElement;boxMatrix;mouseDownVector;originalBoxMatrix;constructor(){super(!0),this.element.setAttribute("jslog",`${Z("sensors").track({resize:!0})}`),this.contentElement.classList.add("sensors-view"),this.#i=L.instance().createSetting("emulation.location-override",""),this.#t=C.parseSetting(this.#i.get()),this.#e=!1,this.createLocationSection(this.#t),this.createPanelSeparator(),this.deviceOrientationSetting=L.instance().createSetting("emulation.device-orientation-override",""),this.deviceOrientation=E.parseSetting(this.deviceOrientationSetting.get()),this.deviceOrientationOverrideEnabled=!1,this.createDeviceOrientationSection(),this.createPanelSeparator(),this.appendTouchControl(),this.createPanelSeparator(),this.appendIdleEmulator(),this.createPanelSeparator(),this.createHardwareConcurrencySection(),this.createPanelSeparator(),this.createPressureSection(),this.createPanelSeparator()}wasShown(){super.wasShown(),this.registerCSSFiles([_])}createPanelSeparator(){this.contentElement.createChild("div").classList.add("panel-section-separator")}createLocationSection(t){const e=this.contentElement.createChild("section","sensors-group");e.setAttribute("jslog",`${V("location")}`);const i=O(r(a.location),"sensors-group-title");e.appendChild(i);const n=e.createChild("div","geo-fields");let o=0;const s={title:r(a.noOverride),location:m.NoOverride};this.locationSelectElement=n.createChild("select","chrome-select"),this.locationSelectElement.setAttribute("jslog",`${U().track({change:!0})}`),j(i,this.locationSelectElement),this.locationSelectElement.appendChild(y(s.title,s.location,"no-override")),this.customLocationsGroup=this.locationSelectElement.createChild("optgroup"),this.customLocationsGroup.label=r(a.overrides);const l=L.instance().moduleSetting("emulation.locations"),h=B(r(a.manage),()=>rt(l),{className:"manage-locations",jslogContext:"sensors.manage-locations"});F(h,r(a.manageTheListOfLocations)),n.appendChild(h);const b=()=>{if(this.customLocationsGroup){this.customLocationsGroup.removeChildren();for(const[g,k]of l.get().entries())this.customLocationsGroup.appendChild(y(k.title,JSON.stringify(k),"custom")),t.latitude===k.lat&&t.longitude===k.long&&(o=g+1)}};l.addChangeListener(b),b();const S={title:r(a.other),location:m.Custom};this.locationSelectElement.appendChild(y(S.title,S.location,"other"));const p=this.locationSelectElement.createChild("optgroup");p.label=r(a.error),p.appendChild(y(r(a.locationUnavailable),m.Unavailable,"unavailable")),this.locationSelectElement.selectedIndex=o,this.locationSelectElement.addEventListener("change",this.#n.bind(this)),this.fieldsetElement=n.createChild("fieldset"),this.fieldsetElement.disabled=!this.#e,this.fieldsetElement.id="location-override-section";const w=this.fieldsetElement.createChild("div","latlong-group"),f=this.fieldsetElement.createChild("div","latlong-group"),v=this.fieldsetElement.createChild("div","latlong-group"),x=this.fieldsetElement.createChild("div","latlong-group"),u=W()?"⌘":"Ctrl",z=r(a.adjustWithMousewheelOrUpdownKeys,{PH1:u});this.latitudeInput=I("","number","latitude"),w.appendChild(this.latitudeInput),this.latitudeInput.setAttribute("step","any"),this.latitudeInput.value="0",this.latitudeSetter=M(this.latitudeInput,this.applyLocationUserInput.bind(this),C.latitudeValidator,!0,.1),this.latitudeSetter(String(t.latitude)),D.install(this.latitudeInput,z),w.appendChild(O(r(a.latitude),"latlong-title",this.latitudeInput)),this.longitudeInput=I("","number","longitude"),f.appendChild(this.longitudeInput),this.longitudeInput.setAttribute("step","any"),this.longitudeInput.value="0",this.longitudeSetter=M(this.longitudeInput,this.applyLocationUserInput.bind(this),C.longitudeValidator,!0,.1),this.longitudeSetter(String(t.longitude)),D.install(this.longitudeInput,z),f.appendChild(O(r(a.longitude),"latlong-title",this.longitudeInput)),this.timezoneInput=I("","text","timezone"),v.appendChild(this.timezoneInput),this.timezoneInput.value="Europe/Berlin",this.timezoneSetter=M(this.timezoneInput,this.applyLocationUserInput.bind(this),C.timezoneIdValidator,!1),this.timezoneSetter(t.timezoneId),v.appendChild(O(r(a.timezoneId),"timezone-title",this.timezoneInput)),this.timezoneError=v.createChild("div","timezone-error"),this.localeInput=I("","text","locale"),x.appendChild(this.localeInput),this.localeInput.value="en-US",this.localeSetter=M(this.localeInput,this.applyLocationUserInput.bind(this),C.localeValidator,!1),this.localeSetter(t.locale),x.appendChild(O(r(a.locale),"locale-title",this.localeInput)),this.localeError=x.createChild("div","locale-error")}#n(){this.fieldsetElement.disabled=!1,this.timezoneError.textContent="";const t=this.locationSelectElement.options[this.locationSelectElement.selectedIndex].value;if(t===m.NoOverride)this.#e=!1,this.clearFieldsetElementInputs(),this.fieldsetElement.disabled=!0;else if(t===m.Custom){this.#e=!0;const e=C.parseUserInput(this.latitudeInput.value.trim(),this.longitudeInput.value.trim(),this.timezoneInput.value.trim(),this.localeInput.value.trim());if(!e)return;this.#t=e}else if(t===m.Unavailable)this.#e=!0,this.#t=new C(0,0,"","",!0);else{this.#e=!0;const e=JSON.parse(t);this.#t=new C(e.lat,e.long,e.timezoneId,e.locale,!1),this.latitudeSetter(e.lat),this.longitudeSetter(e.long),this.timezoneSetter(e.timezoneId),this.localeSetter(e.locale)}this.applyLocation(),t===m.Custom&&this.latitudeInput.focus()}applyLocationUserInput(){const t=C.parseUserInput(this.latitudeInput.value.trim(),this.longitudeInput.value.trim(),this.timezoneInput.value.trim(),this.localeInput.value.trim());t&&(this.timezoneError.textContent="",this.setSelectElementLabel(this.locationSelectElement,m.Custom),this.#t=t,this.applyLocation())}applyLocation(){this.#e?this.#i.set(this.#t.toSetting()):this.#i.set("");for(const t of H.instance().models(R))t.emulateLocation(this.#e?this.#t:null).catch(e=>{switch(e.type){case"emulation-set-timezone":{this.timezoneError.textContent=e.message;break}case"emulation-set-locale":{this.localeError.textContent=e.message;break}}})}clearFieldsetElementInputs(){this.latitudeSetter("0"),this.longitudeSetter("0"),this.timezoneSetter(""),this.localeSetter("")}createDeviceOrientationSection(){const t=this.contentElement.createChild("section","sensors-group");t.setAttribute("jslog",`${V("device-orientation")}`);const e=O(r(a.orientation),"sensors-group-title");t.appendChild(e);const i=t.createChild("div","orientation-content"),n=i.createChild("div","orientation-fields"),o={title:r(a.off),orientation:m.NoOverride,jslogContext:"off"},s={title:r(a.customOrientation),orientation:m.Custom},l=[{title:r(a.presets),value:[{title:r(a.portrait),orientation:"[0, 90, 0]",jslogContext:"portrait"},{title:r(a.portraitUpsideDown),orientation:"[180, -90, 0]",jslogContext:"portrait-upside-down"},{title:r(a.landscapeLeft),orientation:"[90, 0, -90]",jslogContext:"landscape-left"},{title:r(a.landscapeRight),orientation:"[90, -180, -90]",jslogContext:"landscape-right"},{title:r(a.displayUp),orientation:"[0, 0, 0]",jslogContext:"display-up"},{title:r(a.displayDown),orientation:"[0, -180, 0]",jslogContext:"displayUp-down"}]}];this.orientationSelectElement=this.contentElement.createChild("select","chrome-select"),this.orientationSelectElement.setAttribute("jslog",`${U().track({change:!0})}`),j(e,this.orientationSelectElement),this.orientationSelectElement.appendChild(y(o.title,o.orientation,o.jslogContext)),this.orientationSelectElement.appendChild(y(s.title,s.orientation,"custom"));for(let h=0;h<l.length;++h){const b=this.orientationSelectElement.createChild("optgroup");b.label=l[h].title;const S=l[h].value;for(let p=0;p<S.length;++p)b.appendChild(y(S[p].title,S[p].orientation,S[p].jslogContext))}this.orientationSelectElement.selectedIndex=0,n.appendChild(this.orientationSelectElement),this.orientationSelectElement.addEventListener("change",this.orientationSelectChanged.bind(this)),this.deviceOrientationFieldset=this.createDeviceOrientationOverrideElement(this.deviceOrientation),this.stageElement=i.createChild("div","orientation-stage"),this.stageElement.setAttribute("jslog",`${Q().track({drag:!0})}`),this.orientationLayer=this.stageElement.createChild("div","orientation-layer"),this.boxElement=this.orientationLayer.createChild("section","orientation-box orientation-element"),this.boxElement.createChild("section","orientation-front orientation-element"),this.boxElement.createChild("section","orientation-top orientation-element"),this.boxElement.createChild("section","orientation-back orientation-element"),this.boxElement.createChild("section","orientation-left orientation-element"),this.boxElement.createChild("section","orientation-right orientation-element"),this.boxElement.createChild("section","orientation-bottom orientation-element"),tt(this.stageElement,this.onBoxDragStart.bind(this),h=>{this.onBoxDrag(h)},null,"-webkit-grabbing","-webkit-grab"),n.appendChild(this.deviceOrientationFieldset),this.enableOrientationFields(!0),this.setBoxOrientation(this.deviceOrientation,!1)}createPressureSection(){const t=this.contentElement.createChild("div","pressure-section"),e=A(L.instance().moduleSetting("emulation.cpu-pressure"),r(a.forcesSelectedPressureStateEmulation));e&&t.appendChild(e)}enableOrientationFields(t){t?(this.deviceOrientationFieldset.disabled=!0,this.stageElement.classList.add("disabled"),D.install(this.stageElement,r(a.enableOrientationToRotate))):(this.deviceOrientationFieldset.disabled=!1,this.stageElement.classList.remove("disabled"),D.install(this.stageElement,r(a.shiftdragHorizontallyToRotate)))}orientationSelectChanged(){const t=this.orientationSelectElement.options[this.orientationSelectElement.selectedIndex].value;if(this.enableOrientationFields(!1),t===m.NoOverride)this.deviceOrientationOverrideEnabled=!1,this.enableOrientationFields(!0),this.applyDeviceOrientation();else if(t===m.Custom)this.deviceOrientationOverrideEnabled=!0,this.resetDeviceOrientation(),this.alphaElement.focus();else{const e=JSON.parse(t);this.deviceOrientationOverrideEnabled=!0,this.deviceOrientation=new E(e[0],e[1],e[2]),this.setDeviceOrientation(this.deviceOrientation,"selectPreset")}}applyDeviceOrientation(){this.deviceOrientationOverrideEnabled&&this.deviceOrientationSetting.set(this.deviceOrientation.toSetting());for(const t of H.instance().models(R))t.emulateDeviceOrientation(this.deviceOrientationOverrideEnabled?this.deviceOrientation:null)}setSelectElementLabel(t,e){const i=Array.prototype.map.call(t.options,n=>n.value);t.selectedIndex=i.indexOf(e)}applyDeviceOrientationUserInput(){this.setDeviceOrientation(E.parseUserInput(this.alphaElement.value.trim(),this.betaElement.value.trim(),this.gammaElement.value.trim()),"userInput"),this.setSelectElementLabel(this.orientationSelectElement,m.Custom)}resetDeviceOrientation(){this.setDeviceOrientation(new E(0,90,0),"resetButton"),this.setSelectElementLabel(this.orientationSelectElement,"[0, 90, 0]")}setDeviceOrientation(t,e){if(!t)return;function i(o){return Math.round(o*1e4)/1e4}e!=="userInput"&&(this.alphaSetter(String(i(t.alpha))),this.betaSetter(String(i(t.beta))),this.gammaSetter(String(i(t.gamma))));const n=e!=="userDrag";this.setBoxOrientation(t,n),this.deviceOrientation=t,this.applyDeviceOrientation(),et(r(a.deviceOrientationSetToAlphaSBeta,{PH1:t.alpha,PH2:t.beta,PH3:t.gamma}))}createAxisInput(t,e,i,n){const o=t.createChild("div","orientation-axis-input-container");return o.appendChild(e),o.appendChild(O(i,"",e)),M(e,this.applyDeviceOrientationUserInput.bind(this),n,!0)}createDeviceOrientationOverrideElement(t){const e=document.createElement("fieldset");e.classList.add("device-orientation-override-section");const i=e.createChild("td","orientation-inputs-cell");this.alphaElement=I("","number","alpha"),this.alphaElement.setAttribute("step","any"),this.alphaSetter=this.createAxisInput(i,this.alphaElement,r(a.alpha),E.alphaAngleValidator),this.alphaSetter(String(t.alpha)),this.betaElement=I("","number","beta"),this.betaElement.setAttribute("step","any"),this.betaSetter=this.createAxisInput(i,this.betaElement,r(a.beta),E.betaAngleValidator),this.betaSetter(String(t.beta)),this.gammaElement=I("","number","gamma"),this.gammaElement.setAttribute("step","any"),this.gammaSetter=this.createAxisInput(i,this.gammaElement,r(a.gamma),E.gammaAngleValidator),this.gammaSetter(String(t.gamma));const n=B(r(a.reset),this.resetDeviceOrientation.bind(this),{className:"orientation-reset-button",jslogContext:"sensors.reset-device-orientiation"});return F(n,r(a.resetDeviceOrientation)),n.setAttribute("type","reset"),i.appendChild(n),e}setBoxOrientation(t,e){e?this.stageElement.classList.add("is-animating"):this.stageElement.classList.remove("is-animating");const{alpha:i,beta:n,gamma:o}=t;this.boxMatrix=new DOMMatrixReadOnly().rotate(0,0,i).rotate(n,0,0).rotate(0,o,0),this.orientationLayer.style.transform=`rotateY(${i}deg) rotateX(${-n}deg) rotateZ(${o}deg)`}onBoxDrag(t){const e=this.calculateRadiusVector(t.x,t.y);if(!e||!this.mouseDownVector)return!0;t.consume(!0);let i,n;t.shiftKey?(i=new T(0,0,1),n=(e.x-this.mouseDownVector.x)*Y):(i=it(this.mouseDownVector,e),n=nt(this.mouseDownVector,e));const o=new DOMMatrixReadOnly().rotateAxisAngle(-i.x,i.z,i.y,n).multiply(this.originalBoxMatrix),s=ot.fromDeviceOrientationRotationMatrix(o),l=new E(s.alpha,s.beta,s.gamma);return this.setDeviceOrientation(l,"userDrag"),this.setSelectElementLabel(this.orientationSelectElement,m.Custom),!1}onBoxDragStart(t){return!this.deviceOrientationOverrideEnabled||(this.mouseDownVector=this.calculateRadiusVector(t.x,t.y),this.originalBoxMatrix=this.boxMatrix,!this.mouseDownVector)?!1:(t.consume(!0),!0)}calculateRadiusVector(t,e){const i=this.stageElement.getBoundingClientRect(),n=Math.max(i.width,i.height)/2,o=(t-i.left-i.width/2)/n,s=(e-i.top-i.height/2)/n,l=o*o+s*s;return l>.5?new T(o,s,.5/Math.sqrt(l)):new T(o,s,Math.sqrt(1-l))}appendTouchControl(){const t=this.contentElement.createChild("div","touch-section"),e=A(L.instance().moduleSetting("emulation.touch"),r(a.forcesTouchInsteadOfClick));e&&t.appendChild(e)}appendIdleEmulator(){const t=this.contentElement.createChild("div","idle-section"),e=A(L.instance().moduleSetting("emulation.idle-detection"),r(a.forcesSelectedIdleStateEmulation));e&&t.appendChild(e)}createHardwareConcurrencySection(){const t=this.contentElement.createChild("div","concurrency-section"),{checkbox:e,numericInput:i,reset:n,warning:o}=st().createHardwareConcurrencySelector(),s=document.createElement("div");s.classList.add("concurrency-details"),s.append(i.element,n.element,o.element),t.append(e,s)}}const ut={NoOverride:"no-override",Nominal:"nominal",Fair:"fair",Serious:"serious",Critical:"critical"},m={NoOverride:"noOverride",Custom:"custom",Unavailable:"unavailable"};class mt{handleAction(t,e){return at.instance().showView("sensors"),!0}}const Y=16,vt=Object.freeze(Object.defineProperty({__proto__:null,NonPresetOptions:m,PressureOptions:ut,SensorsView:ht,ShiftDragOrientationSpeed:Y,ShowActionDelegate:mt},Symbol.toStringTag,{value:"Module"}));export{ft as LocationsSettingsTab,vt as SensorsView};
//# sourceMappingURL=sensors-BrpqHKHa.js.map
