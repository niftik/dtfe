import{b as K,g as R,aU as P,bp as I,i as U,by as j,aj as F,bz as D,bA as x,bB as $,bh as H,u as M,A as O,bC as k,bD as W,bE as _,bF as h,bG as w,bH as y,bI as m,bw as C,bJ as g,bK as Y,bL as z,bM as Q,bN as A,bO as q,l as L,bP as S,ba as J,bQ as X,bR as Z}from"./inspector-CyOA7R9n.js";const T=new CSSStyleSheet;T.replaceSync(`/*
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.webauthn-pane {
  overflow: auto;
  min-width: 500px;
}

.webauthn-toolbar-container {
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.webauthn-toolbar {
  display: inline-block;
}

.authenticators-view {
  margin: 0 10px;
  min-height: auto;
  display: none;
}

.webauthn-pane.enabled .authenticators-view {
  display: block;
}
/* New Authenticator Section */
.new-authenticator-title {
  line-height: 24px;
  font-weight: bold;
  display: block;
}

.new-authenticator-container {
  display: none;
  margin: 10px;
}

.webauthn-pane.enabled .new-authenticator-container {
  display: block;
}

.new-authenticator-form {
  border: none;
  padding: 10px 0;
  flex: 0 0 auto;
  margin: 0;
}

.webauthn-pane .chrome-select {
  width: 120px;
}
/* Active Authenticator Section */
.authenticator-section {
  display: block;
  padding: 16px 0;
  border-bottom: 1px solid var(--sys-color-divider);
}

.authenticator-fields {
  border: none;
  padding: 10px 0;
  flex: 0 0 auto;
  margin: 0;
}

.authenticator-field {
  display: flex;
  margin: auto;
}

.authenticator-section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.authenticator-section-title {
  line-height: 24px;
  display: inline-block;
}

.authenticator-section-title .authenticator-name-field {
  display: inline-block;
  font-weight: bold;
  border: none;
  animation: save-flash 0.2s;
  text-overflow: ellipsis;
}

.authenticator-section-title.editing-name .authenticator-name-field {
  border-bottom: 1px solid var(--sys-color-neutral-outline);
  font-weight: normal;
  animation: none;
}

.authenticator-field-value {
  padding: 5px 0;
  display: inline-block;
  font-family: monospace;
}

.authenticator-option-checkbox {
  position: relative;
  top: 2px;
}

.authenticator-option {
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  margin: auto;

  &:has(span[is="dt-checkbox"]) {
    padding-bottom: 4px;
  }
}

.authenticator-option-label {
  text-align: right;
  width: 200px;
  display: inline-block;
  padding: 0 10px 0 0;
}

td .text-button {
  min-width: 20px;
  margin: auto;
}

.active-button-container {
  display: inline-block;
  min-width: 28px;
}

.edit-name-toolbar {
  display: inline-block;
  vertical-align: middle;
}

@keyframes save-flash {
  from { opacity: 0%; }
  to { opacity: 100%; }
}
/* Credentials Table */

.data-grid-data-grid-node.centered {
  text-align: center;
}

.data-grid td {
  vertical-align: middle;
}

.credentials-title {
  display: block;
  font-weight: bold;
  margin: 8px 0;
}

.code {
  font-family: monospace;
}

.learn-more {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  overflow: hidden;
}

.webauthn-pane.enabled .learn-more {
  display: none;
}

/*# sourceURL=webauthnPane.css */
`);const n={export:"Export",remove:"Remove",noCredentialsTryCallingSFromYour:"No credentials. Try calling {PH1} from your website.",enableVirtualAuthenticator:"Enable virtual authenticator environment",id:"ID",isResident:"Is Resident",rpId:"RP ID",userHandle:"User Handle",signCount:"Signature Count",actions:"Actions",credentials:"Credentials",useWebauthnForPhishingresistant:"Use WebAuthn for phishing-resistant authentication",learnMore:"Learn more",newAuthenticator:"New authenticator",protocol:"Protocol",transport:"Transport",supportsResidentKeys:"Supports resident keys",supportsLargeBlob:"Supports large blob",add:"Add",addAuthenticator:"Add authenticator",active:"Active",editName:"Edit name",enterNewName:"Enter new name",saveName:"Save name",authenticatorS:"Authenticator {PH1}",privateKeypem:"Private key.pem",uuid:"UUID",supportsUserVerification:"Supports user verification",yes:"Yes",no:"No",setSAsTheActiveAuthenticator:"Set {PH1} as the active authenticator"},B=K("panels/webauthn/WebauthnPane.ts",n),s=R.bind(void 0,B);class tt extends S{credential;constructor(t){super(t),this.credential=t}nodeSelfHeight(){return 24}createCell(t){const i=super.createCell(t);if(L.install(i,i.textContent||""),t!=="actions")return i;const e=g(s(n.export),()=>{this.dataGrid&&this.dataGrid.dispatchEventToListeners("ExportCredential",this.credential)},{jslogContext:"webauthn.export-credential"});i.appendChild(e);const a=g(s(n.remove),()=>{this.dataGrid&&this.dataGrid.dispatchEventToListeners("RemoveCredential",this.credential)},{jslogContext:"webauthn.remove-credential"});return i.appendChild(a),i}}class et extends Z{}class it extends J(et){}class E extends S{createCells(t){t.removeChildren();const i=this.createTDWithClass("center");this.dataGrid&&(i.colSpan=this.dataGrid.visibleColumnsArray.length);const e=document.createElement("span",{is:"source-code"});e.textContent="navigator.credentials.create()",e.classList.add("code");const a=X(B,n.noCredentialsTryCallingSFromYour,{PH1:e});i.appendChild(a),t.appendChild(i)}}const G="PRIVATE",at=`-----BEGIN ${G} KEY-----
`,nt=`-----END ${G} KEY-----`,st={Ctap2:"ctap2",U2f:"u2f"};class ot extends P{#s=null;#C=!1;dataGrids=new Map;#d;#a;#t;#r;#u;#g;#x;#p;#o;#e;#i;#l;residentKeyCheckbox;#c;#n;#h;largeBlobCheckbox;addAuthenticatorButton;#b;constructor(){super(!0),this.element.setAttribute("jslog",`${I("webauthn").track({resize:!0})}`),U.instance().observeModels(j,this,{scoped:!0}),this.contentElement.classList.add("webauthn-pane"),this.#a=F.instance().createSetting("webauthn-authenticators",[]),this.#G(),this.#r=this.contentElement.createChild("div","authenticators-view"),this.#j(),this.#y(!1)}modelAdded(t){t.target()===t.target().outermostTarget()&&(this.#t=t)}modelRemoved(t){t.target()===t.target().outermostTarget()&&(this.#t=void 0)}async#B(){let t=null;const i=this.#a.get();for(const e of i){if(!this.#t)continue;const a=await this.#t.addAuthenticator(e);this.#E(a,e),e.authenticatorId=a,e.active&&(t=a)}this.#a.set(i),t&&this.#m(t)}async ownerViewDisposed(){this.#d&&this.#d.setChecked(!1),await this.#w(!1)}#G(){this.#u=this.contentElement.createChild("div","webauthn-toolbar-container"),this.#u.setAttribute("jslog",`${D()}`),this.#g=new x("webauthn-toolbar",this.#u);const t=s(n.enableVirtualAuthenticator);this.#d=new $(t,t,this.#U.bind(this)),this.#d.inputElement.setAttribute("jslog",`${H("virtual-authenticators").track({click:!0})}`),this.#g.appendToolbarItem(this.#d)}#N(t){const i=[{id:"credentialId",title:s(n.id),longText:!0,weight:24},{id:"isResidentCredential",title:s(n.isResident),dataType:"Boolean",weight:10},{id:"rpId",title:s(n.rpId)},{id:"userHandle",title:s(n.userHandle)},{id:"signCount",title:s(n.signCount)},{id:"actions",title:s(n.actions)}],e={displayName:s(n.credentials),columns:i,editCallback:void 0,deleteCallback:void 0,refreshCallback:void 0},a=new it(e);return a.renderInline(),a.setStriped(!0),a.addEventListener("ExportCredential",this.#V,this),a.addEventListener("RemoveCredential",this.#K.bind(this,t)),a.rootNode().appendChild(new E),this.dataGrids.set(t,a),a}#V({data:t}){this.#D(t)}#K(t,{data:i}){this.#$(t,i.credentialId)}#R(t,{data:i}){const e=this.dataGrids.get(t);if(!e)return;const a=e.rootNode().children.find(l=>!Object.keys(l.data).length);a&&e.rootNode().removeChild(a);const o=new tt(i.credential);e.rootNode().appendChild(o)}#k(t,{data:i}){const e=this.dataGrids.get(t);if(!e)return;const a=e.rootNode().children.find(o=>o.data?.credentialId===i.credential.credentialId);a&&(a.data=i.credential)}#P(t,{data:i}){const e=this.dataGrids.get(t);if(!e)return;const a=e.rootNode().children.find(o=>o.data?.credentialId===i.credentialId);a&&a.remove()}async#w(t){await this.#b,this.#b=new Promise(async i=>{t&&!this.#C&&(M.actionTaken(O.VirtualAuthenticatorEnvironmentEnabled),this.#C=!0),this.#t&&await this.#t.setVirtualAuthEnvEnabled(t),t?await this.#B():this.#I(),this.#y(t),this.#b=void 0,i()})}#y(t){this.contentElement.classList.toggle("enabled",t)}#I(){this.#r.innerHTML="";for(const t of this.dataGrids.values())t.asWidget().detach();this.dataGrids.clear()}#U(t){this.#w(t.target.checked)}#A(t){if(!this.#i)return;const i=this.#i.value;this.#i.removeChildren();for(const e of t)this.#i.appendChild(k(e,e,e));this.#i.value=i,this.#i.value||(this.#i.selectedIndex=0)}#v(){!this.#e||!this.residentKeyCheckbox||!this.#n||!this.largeBlobCheckbox||(this.#e.value==="ctap2"?(this.residentKeyCheckbox.disabled=!1,this.#n.disabled=!1,this.largeBlobCheckbox.disabled=!this.residentKeyCheckbox.checked,this.largeBlobCheckbox.disabled&&(this.largeBlobCheckbox.checked=!1),this.#A(["usb","ble","nfc","internal"])):(this.residentKeyCheckbox.checked=!1,this.residentKeyCheckbox.disabled=!0,this.#n.checked=!1,this.#n.disabled=!0,this.largeBlobCheckbox.checked=!1,this.largeBlobCheckbox.disabled=!0,this.#A(["usb","ble","nfc"])))}#j(){const t=W.create("https://developers.google.com/web/updates/2018/05/webauthn",s(n.learnMore),void 0,void 0,"learn-more");this.#x=this.contentElement.createChild("div","learn-more"),this.#x.appendChild(_`
  <div>
  ${s(n.useWebauthnForPhishingresistant)}<br /><br />
  ${t}
  </div>
  `),this.#p=this.contentElement.createChild("div","new-authenticator-container");const i=h(s(n.newAuthenticator),"new-authenticator-title");this.#p.appendChild(i),this.#o=this.#p.createChild("div","new-authenticator-form"),this.#o.setAttribute("jslog",`${w("new-authenticator")}`);const e=this.#o.createChild("div","authenticator-option"),a=this.#o.createChild("div","authenticator-option"),o=this.#o.createChild("div","authenticator-option"),l=this.#o.createChild("div","authenticator-option"),r=this.#o.createChild("div","authenticator-option"),u=this.#o.createChild("div","authenticator-option"),b=h(s(n.protocol),"authenticator-option-label");e.appendChild(b),this.#e=e.createChild("select","chrome-select"),this.#e.setAttribute("jslog",`${y("protocol").track({change:!0})}`),m(b,this.#e),Object.values(st).sort().forEach(d=>{this.#e&&this.#e.appendChild(k(d,d,d))}),this.#e&&(this.#e.value="ctap2");const c=h(s(n.transport),"authenticator-option-label");a.appendChild(c),this.#i=a.createChild("select","chrome-select"),this.#i.setAttribute("jslog",`${y("transport").track({change:!0})}`),m(c,this.#i),this.#l=C.create(s(n.supportsResidentKeys),!1,void 0,"resident-key"),this.#l.textElement.classList.add("authenticator-option-label"),o.appendChild(this.#l.textElement),this.residentKeyCheckbox=this.#l.checkboxElement,this.residentKeyCheckbox.checked=!1,this.residentKeyCheckbox.classList.add("authenticator-option-checkbox"),o.appendChild(this.#l),this.#c=C.create(s(n.supportsUserVerification),!1,void 0,"user-verification"),this.#c.textElement.classList.add("authenticator-option-label"),l.appendChild(this.#c.textElement),this.#n=this.#c.checkboxElement,this.#n.checked=!1,this.#n.classList.add("authenticator-option-checkbox"),l.appendChild(this.#c),this.#h=C.create(s(n.supportsLargeBlob),!1,void 0,"large-blob"),this.#h.textElement.classList.add("authenticator-option-label"),r.appendChild(this.#h.textElement),this.largeBlobCheckbox=this.#h.checkboxElement,this.largeBlobCheckbox.checked=!1,this.largeBlobCheckbox.classList.add("authenticator-option-checkbox"),this.largeBlobCheckbox.name="large-blob-checkbox",r.appendChild(this.#h),this.addAuthenticatorButton=g(s(n.add),this.#F.bind(this),{jslogContext:"webauthn.add-authenticator"}),u.createChild("div","authenticator-option-label"),u.appendChild(this.addAuthenticatorButton);const p=h(s(n.addAuthenticator),"");m(p,this.addAuthenticatorButton),this.#v(),this.#e&&this.#e.addEventListener("change",this.#v.bind(this)),this.residentKeyCheckbox&&this.residentKeyCheckbox.addEventListener("change",this.#v.bind(this))}async#F(){const t=this.#W();if(this.#t){const i=await this.#t.addAuthenticator(t),e=this.#a.get();e.push({authenticatorId:i,active:!0,...t}),this.#a.set(e.map(r=>({...r,active:r.authenticatorId===i})));const a=await this.#E(i,t),l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;a.scrollIntoView({block:"start",behavior:l?"auto":"smooth"})}}async#E(t,i){const e=document.createElement("div");e.classList.add("authenticator-section"),e.setAttribute("data-authenticator-id",t),e.setAttribute("jslog",`${w("authenticator")}`),this.#r.appendChild(e);const a=e.createChild("div","authenticator-section-header"),o=a.createChild("div","authenticator-section-title");Y(o,2),await this.#T();const l=a.createChild("div","active-button-container"),r=z(`active-authenticator-${t}`,s(n.active));r.radioElement.addEventListener("change",this.#m.bind(this,t)),l.appendChild(r),r.radioElement.checked=!0,this.#s=t;const u=a.createChild("button","text-button");u.textContent=s(n.remove),u.addEventListener("click",this.#O.bind(this,t)),u.setAttribute("jslog",`${Q("webauthn.remove-authenticator").track({click:!0})}`);const b=new x("edit-name-toolbar",o),c=new A(s(n.editName),"edit",void 0,"edit-name"),p=new A(s(n.saveName),"checkmark",void 0,"save-name");p.setVisible(!1);const d=o.createChild("input","authenticator-name-field");d.placeholder=s(n.enterNewName),d.disabled=!0,d.setAttribute("jslog",`${q("name").track({keydown:"Enter",change:!0})}`);const N=t.slice(-5);d.value=s(n.authenticatorS,{PH1:N}),this.#L(r,d.value),c.addEventListener("Click",()=>this.#M(o,d,c,p)),p.addEventListener("Click",()=>this.#f(o,d,c,p,r)),d.addEventListener("focusout",()=>this.#f(o,d,c,p,r)),d.addEventListener("keydown",V=>{V.key==="Enter"&&this.#f(o,d,c,p,r)}),b.appendToolbarItem(c),b.appendToolbarItem(p),this.#H(e,t,i);const f=document.createElement("div");return f.classList.add("credentials-title"),f.textContent=s(n.credentials),e.appendChild(f),this.#N(t).asWidget().show(e),this.#t&&(this.#t.addEventListener("CredentialAdded",this.#R.bind(this,t)),this.#t.addEventListener("CredentialAsserted",this.#k.bind(this,t)),this.#t.addEventListener("CredentialUpdated",this.#k.bind(this,t)),this.#t.addEventListener("CredentialDeleted",this.#P.bind(this,t))),e}#D(t){let i=at;for(let a=0;a<t.privateKey.length;a+=64)i+=t.privateKey.substring(a,a+64)+`
`;i+=nt;const e=document.createElement("a");e.download=s(n.privateKeypem),e.href="data:application/x-pem-file,"+encodeURIComponent(i),e.click()}async#$(t,i){const e=this.dataGrids.get(t);e&&(e.rootNode().children.find(a=>a.data.credentialId===i).remove(),e.rootNode().children.length||e.rootNode().appendChild(new E),this.#t&&await this.#t.removeCredential(t,i))}#H(t,i,e){const a=t.createChild("div","authenticator-fields"),o=a.createChild("div","authenticator-field"),l=a.createChild("div","authenticator-field"),r=a.createChild("div","authenticator-field"),u=a.createChild("div","authenticator-field"),b=a.createChild("div","authenticator-field"),c=a.createChild("div","authenticator-field");o.appendChild(h(s(n.uuid),"authenticator-option-label")),l.appendChild(h(s(n.protocol),"authenticator-option-label")),r.appendChild(h(s(n.transport),"authenticator-option-label")),u.appendChild(h(s(n.supportsResidentKeys),"authenticator-option-label")),b.appendChild(h(s(n.supportsLargeBlob),"authenticator-option-label")),c.appendChild(h(s(n.supportsUserVerification),"authenticator-option-label")),o.createChild("div","authenticator-field-value").textContent=i,l.createChild("div","authenticator-field-value").textContent=e.protocol,r.createChild("div","authenticator-field-value").textContent=e.transport,u.createChild("div","authenticator-field-value").textContent=e.hasResidentKey?s(n.yes):s(n.no),b.createChild("div","authenticator-field-value").textContent=e.hasLargeBlob?s(n.yes):s(n.no),c.createChild("div","authenticator-field-value").textContent=e.hasUserVerification?s(n.yes):s(n.no)}#M(t,i,e,a){i.disabled=!1,t.classList.add("editing-name"),i.focus(),a.setVisible(!0),e.setVisible(!1)}#f(t,i,e,a,o){const l=i.value;l&&(i.disabled=!0,t.classList.remove("editing-name"),e.setVisible(!0),a.setVisible(!1),this.#L(o,l))}#L(t,i){L.install(t.radioElement,s(n.setSAsTheActiveAuthenticator,{PH1:i}))}#O(t){if(this.#r){const o=this.#r.querySelector(`[data-authenticator-id=${CSS.escape(t)}]`);o&&o.remove()}const i=this.dataGrids.get(t);i&&(i.asWidget().detach(),this.dataGrids.delete(t)),this.#t&&this.#t.removeAuthenticator(t);const a=this.#a.get().filter(o=>o.authenticatorId!==t);if(this.#a.set(a),this.#s===t){const o=Array.from(this.dataGrids.keys());o.length?this.#m(o[0]):this.#s=null}}#W(){if(!this.#e||!this.#i||!this.residentKeyCheckbox||!this.#n||!this.largeBlobCheckbox)throw new Error("Unable to create options from current inputs");return{protocol:this.#e.options[this.#e.selectedIndex].value,ctap2Version:"ctap2_1",transport:this.#i.options[this.#i.selectedIndex].value,hasResidentKey:this.residentKeyCheckbox.checked,hasUserVerification:this.#n.checked,hasLargeBlob:this.largeBlobCheckbox.checked,automaticPresenceSimulation:!0,isUserVerified:!0}}async#m(t){await this.#T(),this.#t&&await this.#t.setAutomaticPresenceSimulation(t,!0),this.#s=t;const e=this.#a.get().map(a=>({...a,active:a.authenticatorId===t}));this.#a.set(e),this.#S()}#S(){const t=this.#r.getElementsByClassName("authenticator-section");Array.from(t).forEach(i=>{const e=i.querySelector("input.dt-radio-button");e&&(e.checked=i.dataset.authenticatorId===this.#s)})}async#T(){this.#s&&this.#t&&await this.#t.setAutomaticPresenceSimulation(this.#s,!1),this.#s=null,this.#S()}wasShown(){super.wasShown(),this.registerCSSFiles([T])}}const lt=Object.freeze(Object.defineProperty({__proto__:null,WebauthnPaneImpl:ot},Symbol.toStringTag,{value:"Module"}));export{lt as WebauthnPane};
//# sourceMappingURL=webauthn-Cf8Oc58W.js.map
