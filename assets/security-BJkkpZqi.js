import{b as _,g as K,d_ as Oe,ce as ge,aR as ye,cl as Me,c7 as V,bq as k,cA as Y,aU as X,c3 as Ve,aj as Fe,bK as b,di as Ue,bd as Be,bi as J,i as oe,aS as B,eu as q,bJ as P,ev as qe,b0 as ae,ew as ce,cs as $e,ex as j,cB as le,cr as ue,l as T,da as me,r as fe,ey as we,ez as G,eA as We,aP as je,cd as Ge,eB as de}from"./inspector-CyOA7R9n.js";const x={theSecurityOfThisPageIsUnknown:"The security of this page is unknown.",thisPageIsNotSecure:"This page is not secure.",thisPageIsSecureValidHttps:"This page is secure (valid HTTPS).",thisPageIsNotSecureBrokenHttps:"This page is not secure (broken HTTPS).",cipherWithMAC:"{PH1} with {PH2}",keyExchangeWithGroup:"{PH1} with {PH2}"},Se=_("panels/security/SecurityModel.ts",x),he=K.bind(void 0,Se),E=Oe.bind(void 0,Se);class Q extends ge{dispatcher;securityAgent;constructor(e){super(e),this.dispatcher=new _e(this),this.securityAgent=e.securityAgent(),e.registerSecurityDispatcher(this.dispatcher),this.securityAgent.invoke_enable()}resourceTreeModel(){return this.target().model(ye)}networkManager(){return this.target().model(Me)}}function ve(c,e){const t=["info","insecure-broken","insecure","neutral","secure","unknown"];return t.indexOf(c)-t.indexOf(e)}ge.register(Q,{capabilities:512,autostart:!1});var R;(function(c){c.VisibleSecurityStateChanged="VisibleSecurityStateChanged"})(R||(R={}));const be={unknown:E(x.theSecurityOfThisPageIsUnknown),insecure:E(x.thisPageIsNotSecure),neutral:E(x.thisPageIsNotSecure),secure:E(x.thisPageIsSecureValidHttps),"insecure-broken":E(x.thisPageIsNotSecureBrokenHttps)};class Ce{securityState;certificateSecurityState;safetyTipInfo;securityStateIssueIds;constructor(e,t,i,r){this.securityState=e,this.certificateSecurityState=t?new xe(t):null,this.safetyTipInfo=i?new ze(i):null,this.securityStateIssueIds=r}}class xe{protocol;keyExchange;keyExchangeGroup;cipher;mac;certificate;subjectName;issuer;validFrom;validTo;certificateNetworkError;certificateHasWeakSignature;certificateHasSha1Signature;modernSSL;obsoleteSslProtocol;obsoleteSslKeyExchange;obsoleteSslCipher;obsoleteSslSignature;constructor(e){this.protocol=e.protocol,this.keyExchange=e.keyExchange,this.keyExchangeGroup=e.keyExchangeGroup||null,this.cipher=e.cipher,this.mac=e.mac||null,this.certificate=e.certificate,this.subjectName=e.subjectName,this.issuer=e.issuer,this.validFrom=e.validFrom,this.validTo=e.validTo,this.certificateNetworkError=e.certificateNetworkError||null,this.certificateHasWeakSignature=e.certificateHasWeakSignature,this.certificateHasSha1Signature=e.certificateHasSha1Signature,this.modernSSL=e.modernSSL,this.obsoleteSslProtocol=e.obsoleteSslProtocol,this.obsoleteSslKeyExchange=e.obsoleteSslKeyExchange,this.obsoleteSslCipher=e.obsoleteSslCipher,this.obsoleteSslSignature=e.obsoleteSslSignature}isCertificateExpiringSoon(){const e=new Date(this.validTo*1e3).getTime();return e<new Date(Date.now()).setHours(48)&&e>Date.now()}getKeyExchangeName(){return this.keyExchangeGroup?this.keyExchange?he(x.keyExchangeWithGroup,{PH1:this.keyExchange,PH2:this.keyExchangeGroup}):this.keyExchangeGroup:this.keyExchange}getCipherFullName(){return this.mac?he(x.cipherWithMAC,{PH1:this.cipher,PH2:this.mac}):this.cipher}}class ze{safetyTipStatus;safeUrl;constructor(e){this.safetyTipStatus=e.safetyTipStatus,this.safeUrl=e.safeUrl||null}}class d{securityState;title;summary;description;certificate;mixedContentType;recommendations;constructor(e,t,i,r,o=[],a="none",l=[]){this.securityState=e,this.title=t,this.summary=i,this.description=r,this.certificate=o,this.mixedContentType=a,this.recommendations=l}}class _e{model;constructor(e){this.model=e}securityStateChanged(e){}visibleSecurityStateChanged({visibleSecurityState:e}){const t=new Ce(e.securityState,e.certificateSecurityState||null,e.safetyTipInfo||null,e.securityStateIssueIds);this.model.dispatchEventToListeners(R.VisibleSecurityStateChanged,t)}certificateError(e){}}const tt=Object.freeze(Object.defineProperty({__proto__:null,CertificateSecurityState:xe,get Events(){return R},PageVisibleSecurityState:Ce,SecurityModel:Q,SecurityStyleExplanation:d,SummaryMessages:be,securityStateCompare:ve},Symbol.toStringTag,{value:"Module"})),F=new CSSStyleSheet;F.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.lock-icon,
.security-property {
  height: var(--sys-size-9);
  width: var(--sys-size-9);
}

.lock-icon-secure {
  color: var(--sys-color-green);
}

.lock-icon-insecure {
  color: var(--sys-color-error);
}

.lock-icon-insecure-broken {
  color: var(--sys-color-error);
}

.security-property-secure {
  color: var(--sys-color-green);
}

.security-property-neutral {
  color: var(--sys-color-error);
}

.security-property-insecure {
  color: var(--sys-color-error);
}

.security-property-insecure-broken {
  color: var(--sys-color-error);
}

.security-property-info {
  color: var(--sys-color-on-surface-subtle);
}

.security-property-unknown {
  color: var(--sys-color-on-surface-subtle);
}

.url-scheme-secure {
  color: var(--sys-color-green);
}

.url-scheme-neutral,
.url-scheme-insecure,
.url-scheme-insecure-broken {
  color: var(--sys-color-error);
}

/*# sourceURL=lockIcon.css */
`);const ke=new CSSStyleSheet;ke.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.devtools-link {
  display: inline-block;
}

.security-main-view {
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--sys-color-cdt-base-container);
}

.security-main-view > div {
  flex-shrink: 0;
}

.security-summary-section-title {
  font-size: 15px;
  margin: 12px 16px;
  user-select: text;
}

.lock-spectrum {
  margin: 8px 16px;
  display: flex;
  align-items: flex-start;
}

.security-summary .lock-icon {
  flex: none;
  width: 16px;
  height: 16px;
  margin: 0;
}
/* Separate the middle icon from the other two. */

.security-summary .lock-icon-neutral {
  margin: 0 16px;
}

.security-summary:not(.security-summary-secure) .lock-icon-secure,
.security-summary:not(.security-summary-neutral) .lock-icon-neutral,
.security-summary:not(.security-summary-insecure) .lock-icon-insecure,
.security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {
  color: var(--sys-color-state-disabled);
}

@media (forced-colors: active) {
  .security-summary-neutral .lock-icon-neutral {
    color: Highlight;
  }

  .security-summary:not(.security-summary-secure) .lock-icon-secure,
  .security-summary:not(.security-summary-neutral) .lock-icon-neutral,
  .security-summary:not(.security-summary-insecure) .lock-icon-insecure,
  .security-summary:not(.security-summary-insecure-broken) .lock-icon-insecure-broken {
    color: canvastext;
  }
}

.triangle-pointer-container {
  margin: 8px 24px 0;
  padding: 0;
}

.triangle-pointer-wrapper {
  /* Defaults for dynamic properties. */
  transform: translateX(0);
  transition: transform 0.3s;
}

.triangle-pointer {
  width: 12px;
  height: 12px;
  margin-bottom: -6px;
  margin-left: -6px;
  transform: rotate(-45deg);
  border-style: solid;
  border-width: 1px 1px 0 0;
  background: var(--sys-color-cdt-base-container);
  border-color: var(--sys-color-neutral-outline);
}

.security-summary-secure .triangle-pointer-wrapper {
  transform: translateX(0);
}

.security-summary-neutral .triangle-pointer-wrapper {
  transform: translateX(32px);
}

.security-summary-insecure .triangle-pointer-wrapper {
  transform: translateX(64px);
}

.security-summary-insecure-broken .triangle-pointer-wrapper {
  transform: translateX(64px);
}

.security-summary-text {
  padding: 16px 24px;
  border-style: solid;
  border-width: 1px 0;
  font-size: 15px;
  background: var(--sys-color-cdt-base-container);
  border-color: var(--sys-color-neutral-outline);
  user-select: text;
}

.security-summary-secure .triangle-pointer,
.security-summary-secure .security-summary-text,
.security-explanation-title-secure {
  color: var(--sys-color-green);
}

.security-summary-insecure-broken .triangle-pointer,
.security-summary-insecure-broken .security-summary-text,
.security-explanation-title-neutral,
.security-explanation-title-insecure,
.security-explanation-title-insecure-broken {
  color: var(--sys-color-error);
}

.security-explanation-list {
  padding-bottom: 16px;
}

.security-explanation-list:empty {
  border-bottom: none;
  padding: 0;
}

.security-explanations-main {
  margin-top: -5px;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
}

.security-explanations-extra {
  background-color: transparent;
}

.security-explanation {
  padding: 11px;
  display: flex;
  white-space: nowrap;
  border: none;
  color: var(--sys-color-token-subtle);
}

.security-explanation-text {
  flex: auto;
  white-space: normal;
  max-width: 400px;
}

.origin-button {
  margin-top: var(--sys-size-4);
}

.security-explanation .security-property {
  flex: none;
  width: 16px;
  height: 16px;
  margin-right: 16px;
}

.security-explanation-title {
  color: var(--sys-color-token-subtle);
  margin-top: 1px;
  margin-bottom: 8px;
}

.security-mixed-content {
  margin-top: 8px;
}

.security-explanation-recommendations {
  padding-inline-start: 16px;
}

.security-explanation-recommendations > li {
  margin-bottom: 4px;
}

/*# sourceURL=mainView.css */
`);class Te extends V{constructor(e="",t=!1){super(e,t),k(this.listItemElement,e)}}class U extends Event{static eventName="showorigin";origin;constructor(e){super(U.eventName,{bubbles:!0,composed:!0}),this.origin=e}}class $ extends Te{#i;#e;#t=null;constructor(e,t,i=null){super(),this.#e=t,this.#t=i,this.listItemElement.classList.add(e),this.#i=null,this.setSecurityState("unknown")}setSecurityState(e){this.#i=e,this.#e(this)}securityState(){return this.#i}origin(){return this.#t}onselect(){return this.listItemElement.dispatchEvent(new U(this.#t)),!0}}const Ee=new CSSStyleSheet;Ee.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.title-section {
  padding: 16px 0 24px;
  border-bottom: 1px solid var(--sys-color-divider);
}

.title-section-header {
  padding-left: 16px;
  padding-bottom: 10px;
  font-size: 14px;
}

.security-origin-view {
  overflow-x: hidden;
  overflow-y: scroll;
  display: block;
  user-select: text;
}

.security-origin-view .origin-view-section {
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 12px 6px 12px  24px;
  font-size: 12px;
}

.origin-view-notes {
  margin-top: 2px;
  color: var(--sys-color-token-subtle);
}

.origin-view-section-notes {
  margin-top: 6px;
  color: var(--sys-color-token-subtle);
}

.security-origin-view .origin-display {
  font-size: 12px;
  padding-left: var(--sys-size-8);
  display: flex;
  align-items: center;
}

.title-section > .view-network-button {
  padding: 6px 0 0 16px;
}

.security-origin-view .origin-display devtools-icon {
  width: var(--sys-size-8);
  height: var(--sys-size-8);
  margin-right: var(--sys-size-6);
}

.security-origin-view .origin-view-section-title {
  margin-top: 4px;
  margin-bottom: 4px;
  font-weight: bold;
}

.security-origin-view .details-table {
  border-spacing: 0;
}

.security-origin-view .details-table-row {
  white-space: nowrap;
  overflow: hidden;
  line-height: 22px;
  vertical-align: top;
}

.security-origin-view .details-table-row > td {
  padding: 0;
}

.security-origin-view .details-table-row > td:first-child {
  color: var(--sys-color-token-subtle);
  width: calc(120px + 1em);
  text-align: right;
  padding-right: 1em;
}

.security-origin-view .details-table-row > td:nth-child(2) {
  white-space: normal;
}

.security-origin-view .sct-details .details-table .details-table-row:last-child td:last-child {
  border-bottom: 1px solid var(--sys-color-divider);
  padding-bottom: 10px;
}

.security-origin-view .sct-details .details-table:last-child .details-table-row:last-child td:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.security-origin-view .details-toggle {
  margin-left: 126px;
}

.security-origin-view .sct-toggle {
  margin-left: 145px;
  padding-top: 5px;
}

.security-origin-view .details-table .empty-san {
  color: var(--sys-color-state-disabled);
}

.security-origin-view .details-table .san-entry {
  display: block;
}

.security-origin-view .truncated-san .truncated-entry {
  display: none;
}

.origin-view-section:last-child {
  border-bottom: none;
}

.devtools-link {
  display: inline-flex;
}

/*# sourceURL=originView.css */
`);class Z extends Event{static eventName="showcookiereport";constructor(){super(Z.eventName,{bubbles:!0,composed:!0})}}class Ke extends Te{constructor(e){super(e),this.setLeadingIcons([Y("cookie","cookie-icon")])}onselect(){return this.listItemElement.dispatchEvent(new Z),!0}}const Ie=new CSSStyleSheet;Ie.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline-disclosure {
  width: 100%;
}

.tree-outline li.security-group-list-item {
  & + ol {
    padding-left: 0;
  }

  &::before {
    display: none;
  }

  &:not(:first-child) {
    margin-top: var(--sys-size-6);
  }
}

.security-main-view-reload-message {
  color: var(--sys-color-token-subtle);
}

.tree-outline li.security-sidebar-origins + .children > li {
  &.selected {
    .url-scheme-secure {
      color: var(--sys-color-green);
    }

    .url-scheme-neutral,
    .url-scheme-insecure,
    .url-scheme-insecure-broken {
      color: var(--sys-color-error);
    }
  }
}

.security-main-view-reload-message,
.tree-outline li.security-sidebar-origins,
.tree-outline li.security-group-list-item,
.tree-outline span  {

  font: var(--sys-typescale-body4-medium);

  &:hover:not(:has(span[is="dt-checkbox"])) .selection {
    background: transparent;
  }
}

.tree-outline li {
  & .leading-icons {
    flex: none;
  }

  & .tree-element-title,
  .highlighted-url,
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

/*# sourceURL=sidebar.css */
`);const w={security:"Security",privacy:"Privacy",cookieReport:"Third-party cookies",mainOrigin:"Main origin",nonsecureOrigins:"Non-secure origins",secureOrigins:"Secure origins",unknownCanceled:"Unknown / canceled",overview:"Overview",reloadToViewDetails:"Reload to view details",mainOriginSecure:"Main origin (secure)",mainOriginNonsecure:"Main origin (non-secure)"},Ye=_("panels/security/SecurityPanelSidebar.ts",w),S=K.bind(void 0,Ye);class pe extends X{sidebarTree;#i;#e;securityOverviewElement;#t;#s;#n;constructor(e){super(void 0,void 0,e),this.#n=null,this.sidebarTree=new Ve("NavigationTree"),this.sidebarTree.element.classList.add("security-sidebar"),this.contentElement.appendChild(this.sidebarTree.element),Fe.instance().getHostConfig().devToolsPrivacyUI?.enabled&&this.#o(S(w.privacy),"privacy").appendChild(new Ke(S(w.cookieReport)));const t=S(w.security),i=this.#o(t,"security");this.securityOverviewElement=new $("security-main-view-sidebar-tree-item",this.#c),this.securityOverviewElement.tooltip=S(w.overview),i.appendChild(this.securityOverviewElement),this.#i=new Map([[g.MainOrigin,S(w.mainOrigin)],[g.NonSecure,S(w.nonsecureOrigins)],[g.Secure,S(w.secureOrigins)],[g.Unknown,S(w.unknownCanceled)]]),this.#e=new Map;for(const o of Object.values(g)){const a=this.#u(this.#i.get(o));this.#e.set(o,a),i.appendChild(a)}this.#s=new V(S(w.reloadToViewDetails)),this.#s.selectable=!1,this.#s.listItemElement.classList.add("security-main-view-reload-message"),this.#e.get(g.MainOrigin).appendChild(this.#s),this.#a(),this.#t=new Map}#o(e,t){const i=new V(e,!0,t);return i.listItemElement.classList.add("security-group-list-item"),i.setCollapsible(!1),i.selectable=!1,this.sidebarTree.appendChild(i),b(i.listItemElement,3),k(i.childrenListElement,e),i}#l(e){return this.#i.get(e)}#r(e){return this.#e.get(e)}#u(e){const t=new V(e,!0);return t.selectable=!1,t.setCollapsible(!1),t.expand(),t.listItemElement.classList.add("security-sidebar-origins"),k(t.childrenListElement,e),t}toggleOriginsList(e){for(const t of this.#e.values())t.hidden=e}addOrigin(e,t){this.#s.hidden=!0;const i=new $("security-sidebar-tree-item",this.#c,e);i.tooltip=e,this.#t.set(e,i),this.updateOrigin(e,t)}setMainOrigin(e){this.#n=e}get mainOrigin(){return this.#n}get originGroups(){return this.#e}updateOrigin(e,t){const i=this.#t.get(e);i.setSecurityState(t);let r;if(e===this.#n)r=this.#e.get(g.MainOrigin),t==="secure"?r.title=S(w.mainOriginSecure):r.title=S(w.mainOriginNonsecure),k(r.childrenListElement,r.title);else switch(t){case"secure":r=this.#r(g.Secure);break;case"unknown":r=this.#r(g.Unknown);break;default:r=this.#r(g.NonSecure);break}const o=i.parent;o!==r&&(o&&(o.removeChild(i),o.childCount()===0&&(o.hidden=!0)),r.appendChild(i),r.hidden=!1)}#a(){for(const[e,t]of this.#e)if(e===g.MainOrigin){for(let i=t.childCount()-1;i>0;i--)t.removeChildAtIndex(i);t.title=this.#l(g.MainOrigin),t.hidden=!1,this.#s.hidden=!1}else t.removeChildren(),t.hidden=!0}clearOrigins(){this.#a(),this.#t.clear()}wasShown(){super.wasShown(),this.sidebarTree.registerCSSFiles([F,Ie])}#c(e){if(e instanceof $){const t=e.securityState()??"unknown",i=e.listItemElement.classList.contains("security-main-view-sidebar-tree-item"),r=i?A(t,`lock-icon lock-icon-${t}`):D(t,`security-property security-property-${t}`),o=i?(()=>{const a=document.createElement("span");return a.classList.add("title"),a.textContent=S(w.overview),a})():ee(e.origin()??Ue,t);e.setLeadingIcons([r]),e.listItemElement.lastChild&&e.listItemElement.removeChild(e.listItemElement.lastChild),e.listItemElement.appendChild(o)}}}const s={securityOverview:"Security overview",secure:"Secure",info:"Info",notSecure:"Not secure",viewCertificate:"View certificate",notSecureBroken:"Not secure (broken)",thisPageIsDangerousFlaggedBy:"This page is dangerous (flagged by Google Safe Browsing).",flaggedByGoogleSafeBrowsing:"Flagged by Google Safe Browsing",toCheckThisPagesStatusVisit:"To check this page's status, visit g.co/safebrowsingstatus.",thisIsAnErrorPage:"This is an error page.",thisPageIsInsecureUnencrypted:"This page is insecure (unencrypted HTTP).",thisPageHasANonhttpsSecureOrigin:"This page has a non-HTTPS secure origin.",thisPageIsSuspicious:"This page is suspicious",chromeHasDeterminedThatThisSiteS:"Chrome has determined that this site could be fake or fraudulent.",ifYouBelieveThisIsShownIn:"If you believe this is shown in error please visit https://g.co/chrome/lookalike-warnings.",possibleSpoofingUrl:"Possible spoofing URL",thisSitesHostnameLooksSimilarToP:"This site's hostname looks similar to {PH1}. Attackers sometimes mimic sites by making small, hard-to-see changes to the domain name.",ifYouBelieveThisIsShownInErrorSafety:"If you believe this is shown in error please visit https://g.co/chrome/lookalike-warnings.",thisPageIsSuspiciousFlaggedBy:"This page is suspicious (flagged by Chrome).",certificate:"Certificate",insecureSha:"insecure (SHA-1)",theCertificateChainForThisSite:"The certificate chain for this site contains a certificate signed using SHA-1.",subjectAlternativeNameMissing:"`Subject Alternative Name` missing",theCertificateForThisSiteDoesNot:"The certificate for this site does not contain a `Subject Alternative Name` extension containing a domain name or IP address.",missing:"missing",thisSiteIsMissingAValidTrusted:"This site is missing a valid, trusted certificate ({PH1}).",validAndTrusted:"valid and trusted",theConnectionToThisSiteIsUsingA:"The connection to this site is using a valid, trusted server certificate issued by {PH1}.",publickeypinningBypassed:"Public-Key-Pinning bypassed",publickeypinningWasBypassedByA:"Public-Key-Pinning was bypassed by a local root certificate.",certificateExpiresSoon:"Certificate expires soon",theCertificateForThisSiteExpires:"The certificate for this site expires in less than 48 hours and needs to be renewed.",connection:"Connection",secureConnectionSettings:"secure connection settings",theConnectionToThisSiteIs:"The connection to this site is encrypted and authenticated using {PH1}, {PH2}, and {PH3}.",sIsObsoleteEnableTlsOrLater:"{PH1} is obsolete. Enable TLS 1.2 or later.",rsaKeyExchangeIsObsoleteEnableAn:"RSA key exchange is obsolete. Enable an ECDHE-based cipher suite.",sIsObsoleteEnableAnAesgcmbased:"{PH1} is obsolete. Enable an AES-GCM-based cipher suite.",theServerSignatureUsesShaWhichIs:"The server signature uses SHA-1, which is obsolete. Enable a SHA-2 signature algorithm instead. (Note this is different from the signature in the certificate.)",obsoleteConnectionSettings:"obsolete connection settings",resources:"Resources",activeMixedContent:"active mixed content",youHaveRecentlyAllowedNonsecure:"You have recently allowed non-secure content (such as scripts or iframes) to run on this site.",mixedContent:"mixed content",thisPageIncludesHttpResources:"This page includes HTTP resources.",nonsecureForm:"non-secure form",thisPageIncludesAFormWithA:'This page includes a form with a non-secure "action" attribute.',activeContentWithCertificate:"active content with certificate errors",youHaveRecentlyAllowedContent:"You have recently allowed content loaded with certificate errors (such as scripts or iframes) to run on this site.",contentWithCertificateErrors:"content with certificate errors",thisPageIncludesResourcesThat:"This page includes resources that were loaded with certificate errors.",allServedSecurely:"all served securely",allResourcesOnThisPageAreServed:"All resources on this page are served securely.",blockedMixedContent:"Blocked mixed content",yourPageRequestedNonsecure:"Your page requested non-secure resources that were blocked.",reloadThePageToRecordRequestsFor:"Reload the page to record requests for HTTP resources.",viewDRequestsInNetworkPanel:"{n, plural, =1 {View # request in Network Panel} other {View # requests in Network Panel}}",origin:"Origin",viewRequestsInNetworkPanel:"View requests in Network Panel",protocol:"Protocol",keyExchange:"Key exchange",cipher:"Cipher",serverSignature:"Server signature",encryptedClientHello:"Encrypted ClientHello",certificateTransparency:"Certificate Transparency",subject:"Subject",validFrom:"Valid from",validUntil:"Valid until",issuer:"Issuer",openFullCertificateDetails:"Open full certificate details",sct:"SCT",logName:"Log name",logId:"Log ID",validationStatus:"Validation status",source:"Source",issuedAt:"Issued at",hashAlgorithm:"Hash algorithm",signatureAlgorithm:"Signature algorithm",signatureData:"Signature data",showFullDetails:"Show full details",hideFullDetails:"Hide full details",thisRequestCompliesWithChromes:"This request complies with `Chrome`'s Certificate Transparency policy.",thisRequestDoesNotComplyWith:"This request does not comply with `Chrome`'s Certificate Transparency policy.",thisResponseWasLoadedFromCache:"This response was loaded from cache. Some security details might be missing.",theSecurityDetailsAboveAreFrom:"The security details above are from the first inspected response.",thisOriginIsANonhttpsSecure:"This origin is a non-HTTPS secure origin.",yourConnectionToThisOriginIsNot:"Your connection to this origin is not secure.",noSecurityInformation:"No security information",noSecurityDetailsAreAvailableFor:"No security details are available for this origin.",na:"(n/a)",showLess:"Show less",showMoreSTotal:"Show more ({PH1} total)",unknownField:"unknown",enabled:"enabled"},Xe=_("panels/security/SecurityPanel.ts",s),n=K.bind(void 0,Xe);let W;const Je=new Map([[513,"RSA with SHA-1"],[1025,"RSA with SHA-256"],[1281,"RSA with SHA-384"],[1537,"RSA with SHA-512"],[1027,"ECDSA with SHA-256"],[1283,"ECDSA with SHA-384"],[2052,"RSA-PSS with SHA-256"],[2053,"RSA-PSS with SHA-384"],[2054,"RSA-PSS with SHA-512"]]),Pe="lock",Ae="warning",Re="info";function D(c,e){let t;switch(c){case"neutral":case"insecure":case"insecure-broken":t=Ae;break;case"secure":t=Pe;break;case"info":case"unknown":t=Re;break}return Y(t,e)}function A(c,e){let t;switch(c){case"unknown":case"neutral":t=Re;break;case"insecure":case"insecure-broken":t=Ae;break;case"secure":t=Pe;break;case"info":throw new Error(`Unexpected security state ${c}`)}return Y(t,e)}function ee(c,e){const t="://",i=c.indexOf(t);if(i===-1){const l=document.createElement("span");return l.textContent=c,l}const r=document.createElement("span");r.classList.add("highlighted-url");const o=c.substr(0,i),a=c.substr(i+t.length);return r.createChild("span","url-scheme-"+e).textContent=o,r.createChild("span","url-scheme-separator").textContent=t,r.createChild("span").textContent=a,r}const{render:Qe,html:Ze}=je;class L extends Be{view;mainView;sidebar;lastResponseReceivedForLoaderId;origins;filterRequestCounts;visibleView;eventListeners;securityModel;splitWidget;constructor(e=(t,i,r)=>{Qe(Ze`
    <devtools-split-widget
    .options=${{vertical:!0,settingName:"security"}}
    ${q(Ge,o=>{i.splitWidget=o})}>
          <devtools-widget
          slot="main"
          .widgetClass=${z}
          .widgetParams=${[t.panel]}
          ${q(z,o=>{i.mainView=o})}>
        </devtools-widget>
        <devtools-widget
          slot="sidebar"
          .widgetClass=${pe}
          ${q(pe,o=>{i.sidebar=o})}>
        </devtools-widget>
    </devtools-split-widget>`,r,{host:this})}){super("security"),this.view=e,this.doUpdate(),this.sidebar.setMinimumSize(100,25),this.sidebar.element.classList.add("panel-sidebar"),this.sidebar.element.setAttribute("jslog",`${J("sidebar").track({resize:!0})}`),this.element.addEventListener(U.eventName,t=>{t.origin?this.showOrigin(t.origin):this.setVisibleView(this.mainView)}),this.lastResponseReceivedForLoaderId=new Map,this.origins=new Map,this.filterRequestCounts=new Map,this.visibleView=null,this.eventListeners=[],this.securityModel=null,oe.instance().observeModels(Q,this,{scoped:!0}),oe.instance().addModelListener(ye,B.PrimaryPageChanged,this.onPrimaryPageChanged,this)}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!W||t)&&(W=new L),W}static createCertificateViewerButtonForOrigin(e,t){const i=P(e,async r=>{r.consume();const o=await qe.instance().getCertificate(t);o.length>0&&ae.showCertificateViewer(o)},{className:"origin-button",jslogContext:"security.view-certificate-for-origin",title:e});return ce(i),i}static createCertificateViewerButtonForCert(e,t){const i=P(e,r=>{r.consume(),ae.showCertificateViewer(t)},{className:"origin-button",jslogContext:"security.view-certificate"});return ce(i),i}doUpdate(){this.view({panel:this},this,this.contentElement)}updateVisibleSecurityState(e){this.sidebar.securityOverviewElement.setSecurityState(e.securityState),this.mainView.updateVisibleSecurityState(e)}onVisibleSecurityStateChanged({data:e}){this.updateVisibleSecurityState(e)}selectAndSwitchToMainView(){this.sidebar.securityOverviewElement.select(!0)}showOrigin(e){const t=this.origins.get(e);t&&(t.originView||(t.originView=new De(this,e,t)),this.setVisibleView(t.originView))}wasShown(){super.wasShown(),this.visibleView||this.selectAndSwitchToMainView()}focus(){this.sidebar.focus()}setVisibleView(e){this.visibleView!==e&&(this.visibleView&&this.visibleView.detach(),this.visibleView=e,e&&this.splitWidget.setMainWidget(e))}onResponseReceived(e){const t=e.data.request;t.resourceType()===$e.Document&&t.loaderId&&this.lastResponseReceivedForLoaderId.set(t.loaderId,t)}processRequest(e){const t=j.extractOrigin(e.url());if(!t)return;let i=e.securityState();(e.mixedContentType==="blockable"||e.mixedContentType==="optionally-blockable")&&(i="insecure");const r=this.origins.get(t);if(r){if(ve(i,r.securityState)<0){r.securityState=i;const o=e.securityDetails();o&&(r.securityDetails=o),this.sidebar.updateOrigin(t,i),r.originView&&r.originView.setSecurityState(i)}}else{const o={securityState:i,securityDetails:e.securityDetails(),loadedFromCache:e.cached(),originView:void 0};this.origins.set(t,o),this.sidebar.addOrigin(t,i)}}onRequestFinished(e){const t=e.data;this.updateFilterRequestCounts(t),this.processRequest(t)}updateFilterRequestCounts(e){if(e.mixedContentType==="none")return;let t="all";e.wasBlocked()?t="blocked":e.mixedContentType==="blockable"?t="block-overridden":e.mixedContentType==="optionally-blockable"&&(t="displayed");const i=this.filterRequestCounts.get(t);i?this.filterRequestCounts.set(t,i+1):this.filterRequestCounts.set(t,1),this.mainView.refreshExplanations()}filterRequestCount(e){return this.filterRequestCounts.get(e)||0}modelAdded(e){if(e.target()!==e.target().outermostTarget())return;this.securityModel=e;const t=e.resourceTreeModel(),i=e.networkManager();this.eventListeners.length&&le(this.eventListeners),this.eventListeners=[e.addEventListener(R.VisibleSecurityStateChanged,this.onVisibleSecurityStateChanged,this),t.addEventListener(B.InterstitialShown,this.onInterstitialShown,this),t.addEventListener(B.InterstitialHidden,this.onInterstitialHidden,this),i.addEventListener(ue.ResponseReceived,this.onResponseReceived,this),i.addEventListener(ue.RequestFinished,this.onRequestFinished,this)],t.isInterstitialShowing&&this.onInterstitialShown()}modelRemoved(e){this.securityModel===e&&(this.securityModel=null,le(this.eventListeners))}onPrimaryPageChanged(e){const{frame:t}=e.data,i=this.lastResponseReceivedForLoaderId.get(t.loaderId);this.selectAndSwitchToMainView(),this.sidebar.clearOrigins(),this.origins.clear(),this.lastResponseReceivedForLoaderId.clear(),this.filterRequestCounts.clear(),this.mainView.refreshExplanations();const r=j.extractOrigin(i?i.url():t.url);this.sidebar.setMainOrigin(r),i&&this.processRequest(i)}onInterstitialShown(){this.selectAndSwitchToMainView(),this.sidebar.toggleOriginsList(!0)}onInterstitialHidden(){this.sidebar.toggleOriginsList(!1)}}var g;(function(c){c.MainOrigin="MainOrigin",c.NonSecure="NonSecure",c.Secure="Secure",c.Unknown="Unknown"})(g||(g={}));class z extends X{panel;summarySection;securityExplanationsMain;securityExplanationsExtra;lockSpectrum;summaryText;explanations;securityState;constructor(e,t){super(void 0,void 0,t),this.element.setAttribute("jslog",`${J("security.main-view")}`),this.setMinimumSize(200,100),this.contentElement.classList.add("security-main-view"),this.panel=e,this.summarySection=this.contentElement.createChild("div","security-summary"),this.securityExplanationsMain=this.contentElement.createChild("div","security-explanation-list security-explanations-main"),this.securityExplanationsExtra=this.contentElement.createChild("div","security-explanation-list security-explanations-extra");const i=this.summarySection.createChild("div","security-summary-section-title");i.textContent=n(s.securityOverview),b(i,1);const r=this.summarySection.createChild("div","lock-spectrum");this.lockSpectrum=new Map([["secure",r.appendChild(A("secure","lock-icon lock-icon-secure"))],["neutral",r.appendChild(A("neutral","lock-icon lock-icon-neutral"))],["insecure",r.appendChild(A("insecure","lock-icon lock-icon-insecure"))]]),T.install(this.getLockSpectrumDiv("secure"),n(s.secure)),T.install(this.getLockSpectrumDiv("neutral"),n(s.info)),T.install(this.getLockSpectrumDiv("insecure"),n(s.notSecure)),this.summarySection.createChild("div","triangle-pointer-container").createChild("div","triangle-pointer-wrapper").createChild("div","triangle-pointer"),this.summaryText=this.summarySection.createChild("div","security-summary-text"),b(this.summaryText,2),this.explanations=null,this.securityState=null}getLockSpectrumDiv(e){const t=this.lockSpectrum.get(e);if(!t)throw new Error(`Invalid argument: ${e}`);return t}addExplanation(e,t){const i=e.createChild("div","security-explanation");i.classList.add("security-explanation-"+t.securityState);const r=D(t.securityState,"security-property security-property-"+t.securityState);i.appendChild(r);const o=i.createChild("div","security-explanation-text"),a=o.createChild("div","security-explanation-title");if(t.title?(a.createChild("span").textContent=t.title+" - ",a.createChild("span","security-explanation-title-"+t.securityState).textContent=t.summary):a.textContent=t.summary,o.createChild("div").textContent=t.description,t.certificate.length&&o.appendChild(L.createCertificateViewerButtonForCert(n(s.viewCertificate),t.certificate)),t.recommendations&&t.recommendations.length){const l=o.createChild("ul","security-explanation-recommendations");for(const v of t.recommendations)l.createChild("li").textContent=v}return o}updateVisibleSecurityState(e){this.summarySection.classList.remove("security-summary-"+this.securityState),this.securityState=e.securityState,this.summarySection.classList.add("security-summary-"+this.securityState),this.securityState==="insecure"?(this.getLockSpectrumDiv("insecure").classList.add("lock-icon-insecure"),this.getLockSpectrumDiv("insecure").classList.remove("lock-icon-insecure-broken"),T.install(this.getLockSpectrumDiv("insecure"),n(s.notSecure))):this.securityState==="insecure-broken"&&(this.getLockSpectrumDiv("insecure").classList.add("lock-icon-insecure-broken"),this.getLockSpectrumDiv("insecure").classList.remove("lock-icon-insecure"),T.install(this.getLockSpectrumDiv("insecure"),n(s.notSecureBroken)));const{summary:t,explanations:i}=this.getSecuritySummaryAndExplanations(e);this.summaryText.textContent=t||be[this.securityState](),this.explanations=this.orderExplanations(i),this.refreshExplanations()}getSecuritySummaryAndExplanations(e){const{securityState:t,securityStateIssueIds:i}=e;let r;const o=[];if(r=this.explainSafetyTipSecurity(e,r,o),i.includes("malicious-content"))r=n(s.thisPageIsDangerousFlaggedBy),o.unshift(new d("insecure",void 0,n(s.flaggedByGoogleSafeBrowsing),n(s.toCheckThisPagesStatusVisit)));else{if(i.includes("is-error-page")&&(e.certificateSecurityState===null||e.certificateSecurityState.certificateNetworkError===null))return r=n(s.thisIsAnErrorPage),{summary:r,explanations:o};t==="insecure-broken"&&i.includes("scheme-is-not-cryptographic")&&(r=r||n(s.thisPageIsInsecureUnencrypted))}return i.includes("scheme-is-not-cryptographic")?(t==="neutral"&&!i.includes("insecure-origin")&&(r=n(s.thisPageHasANonhttpsSecureOrigin)),{summary:r,explanations:o}):(this.explainCertificateSecurity(e,o),this.explainConnectionSecurity(e,o),this.explainContentSecurity(e,o),{summary:r,explanations:o})}explainSafetyTipSecurity(e,t,i){const{securityStateIssueIds:r,safetyTipInfo:o}=e,a=[];if(r.includes("bad_reputation")){const l=`${n(s.chromeHasDeterminedThatThisSiteS)}

${n(s.ifYouBelieveThisIsShownIn)}`;a.push({summary:n(s.thisPageIsSuspicious),description:l})}else if(r.includes("lookalike")&&o&&o.safeUrl){const v={PH1:new URL(o.safeUrl).hostname},N=`${n(s.thisSitesHostnameLooksSimilarToP,v)}

${n(s.ifYouBelieveThisIsShownInErrorSafety)}`;a.push({summary:n(s.possibleSpoofingUrl),description:N})}return a.length>0&&(t=t||n(s.thisPageIsSuspiciousFlaggedBy),i.push(new d("insecure",void 0,a[0].summary,a[0].description))),t}explainCertificateSecurity(e,t){const{certificateSecurityState:i,securityStateIssueIds:r}=e,o=n(s.certificate);if(i&&i.certificateHasSha1Signature){const a=n(s.insecureSha),l=n(s.theCertificateChainForThisSite);i.certificateHasWeakSignature?t.push(new d("insecure",o,a,l,i.certificate,"none")):t.push(new d("neutral",o,a,l,i.certificate,"none"))}i&&r.includes("cert-missing-subject-alt-name")&&t.push(new d("insecure",o,n(s.subjectAlternativeNameMissing),n(s.theCertificateForThisSiteDoesNot),i.certificate,"none")),i&&i.certificateNetworkError!==null?t.push(new d("insecure",o,n(s.missing),n(s.thisSiteIsMissingAValidTrusted,{PH1:i.certificateNetworkError}),i.certificate,"none")):i&&!i.certificateHasSha1Signature&&t.push(new d("secure",o,n(s.validAndTrusted),n(s.theConnectionToThisSiteIsUsingA,{PH1:i.issuer}),i.certificate,"none")),r.includes("pkp-bypassed")&&t.push(new d("info",o,n(s.publickeypinningBypassed),n(s.publickeypinningWasBypassedByA))),i&&i.isCertificateExpiringSoon()&&t.push(new d("info",void 0,n(s.certificateExpiresSoon),n(s.theCertificateForThisSiteExpires)))}explainConnectionSecurity(e,t){const i=e.certificateSecurityState;if(!i)return;const r=n(s.connection);if(i.modernSSL){t.push(new d("secure",r,n(s.secureConnectionSettings),n(s.theConnectionToThisSiteIs,{PH1:i.protocol,PH2:i.getKeyExchangeName(),PH3:i.getCipherFullName()})));return}const o=[];i.obsoleteSslProtocol&&o.push(n(s.sIsObsoleteEnableTlsOrLater,{PH1:i.protocol})),i.obsoleteSslKeyExchange&&o.push(n(s.rsaKeyExchangeIsObsoleteEnableAn)),i.obsoleteSslCipher&&o.push(n(s.sIsObsoleteEnableAnAesgcmbased,{PH1:i.cipher})),i.obsoleteSslSignature&&o.push(n(s.theServerSignatureUsesShaWhichIs)),t.push(new d("info",r,n(s.obsoleteConnectionSettings),n(s.theConnectionToThisSiteIs,{PH1:i.protocol,PH2:i.getKeyExchangeName(),PH3:i.getCipherFullName()}),void 0,void 0,o))}explainContentSecurity(e,t){let i=!0;const r=n(s.resources),o=e.securityStateIssueIds;o.includes("ran-mixed-content")&&(i=!1,t.push(new d("insecure",r,n(s.activeMixedContent),n(s.youHaveRecentlyAllowedNonsecure),[],"blockable"))),o.includes("displayed-mixed-content")&&(i=!1,t.push(new d("neutral",r,n(s.mixedContent),n(s.thisPageIncludesHttpResources),[],"optionally-blockable"))),o.includes("contained-mixed-form")&&(i=!1,t.push(new d("neutral",r,n(s.nonsecureForm),n(s.thisPageIncludesAFormWithA)))),(e.certificateSecurityState===null||e.certificateSecurityState.certificateNetworkError===null)&&(o.includes("ran-content-with-cert-error")&&(i=!1,t.push(new d("insecure",r,n(s.activeContentWithCertificate),n(s.youHaveRecentlyAllowedContent)))),o.includes("displayed-content-with-cert-errors")&&(i=!1,t.push(new d("neutral",r,n(s.contentWithCertificateErrors),n(s.thisPageIncludesResourcesThat))))),i&&(o.includes("scheme-is-not-cryptographic")||t.push(new d("secure",r,n(s.allServedSecurely),n(s.allResourcesOnThisPageAreServed))))}orderExplanations(e){if(e.length===0)return e;const t=["insecure","neutral","secure","info"],i=[];for(const r of t)i.push(...e.filter(o=>o.securityState===r));return i}refreshExplanations(){if(this.securityExplanationsMain.removeChildren(),this.securityExplanationsExtra.removeChildren(),!!this.explanations){for(const e of this.explanations)if(e.securityState==="info")this.addExplanation(this.securityExplanationsExtra,e);else switch(e.mixedContentType){case"blockable":this.addMixedContentExplanation(this.securityExplanationsMain,e,"block-overridden");break;case"optionally-blockable":this.addMixedContentExplanation(this.securityExplanationsMain,e,"displayed");break;default:this.addExplanation(this.securityExplanationsMain,e);break}if(this.panel.filterRequestCount("blocked")>0){const e={securityState:"info",summary:n(s.blockedMixedContent),description:n(s.yourPageRequestedNonsecure),mixedContentType:"blockable",certificate:[],title:""};this.addMixedContentExplanation(this.securityExplanationsMain,e,"blocked")}}}addMixedContentExplanation(e,t,i){const r=this.addExplanation(e,t),o=this.panel.filterRequestCount(i);if(!o){const l=r.createChild("div","security-mixed-content");l.textContent=n(s.reloadThePageToRecordRequestsFor);return}const a=r.createChild("button","security-mixed-content devtools-link text-button link-style");me(a),a.tabIndex=0,a.textContent=n(s.viewDRequestsInNetworkPanel,{n:o}),a.addEventListener("click",this.showNetworkFilter.bind(this,i))}showNetworkFilter(e,t){t.consume(),fe(we.filters([{filterType:G.MixedContent,filterValue:e}]))}wasShown(){super.wasShown(),this.registerCSSFiles([F,ke])}}class De extends X{panel;originLockIcon;constructor(e,t,i){super(),this.element.setAttribute("jslog",`${J("security.origin-view")}`),this.panel=e,this.setMinimumSize(200,100),this.element.classList.add("security-origin-view");const r=this.element.createChild("div","title-section"),o=r.createChild("div","title-section-header");o.textContent=n(s.origin),b(o,1);const a=r.createChild("div","origin-display");this.originLockIcon=a.createChild("span");const l=D(i.securityState,`security-property security-property-${i.securityState}`);this.originLockIcon.appendChild(l),a.appendChild(ee(t,i.securityState));const v=r.createChild("div","view-network-button"),N=P(n(s.viewRequestsInNetworkPanel),m=>{m.consume();const y=new j(t);fe(we.filters([{filterType:G.Domain,filterValue:y.host},{filterType:G.Scheme,filterValue:y.scheme}]))},{jslogContext:"reveal-in-network"});if(v.appendChild(N),me(N),i.securityDetails){const m=this.element.createChild("div","origin-view-section"),y=m.createChild("div","origin-view-section-title");y.textContent=n(s.connection),b(y,2);let h=new I;if(m.appendChild(h.element()),h.addRow(n(s.protocol),i.securityDetails.protocol),i.securityDetails.keyExchange&&i.securityDetails.keyExchangeGroup?h.addRow(n(s.keyExchange),i.securityDetails.keyExchange+" with "+i.securityDetails.keyExchangeGroup):i.securityDetails.keyExchange?h.addRow(n(s.keyExchange),i.securityDetails.keyExchange):i.securityDetails.keyExchangeGroup&&h.addRow(n(s.keyExchange),i.securityDetails.keyExchangeGroup),i.securityDetails.serverSignatureAlgorithm){let p=Je.get(i.securityDetails.serverSignatureAlgorithm);p??=n(s.unknownField)+" ("+i.securityDetails.serverSignatureAlgorithm+")",h.addRow(n(s.serverSignature),p)}h.addRow(n(s.cipher),i.securityDetails.cipher+(i.securityDetails.mac?" with "+i.securityDetails.mac:"")),i.securityDetails.encryptedClientHello&&h.addRow(n(s.encryptedClientHello),n(s.enabled));const te=this.element.createChild("div","origin-view-section"),ie=te.createChild("div","origin-view-section-title");ie.textContent=n(s.certificate),b(ie,2);const H=i.securityDetails.signedCertificateTimestampList.length,se=i.securityDetails.certificateTransparencyCompliance;let C;if(H||se!=="unknown"){C=this.element.createChild("div","origin-view-section");const p=C.createChild("div","origin-view-section-title");p.textContent=n(s.certificateTransparency),b(p,2)}const Le=this.createSanDiv(i.securityDetails.sanList),Ne=new Date(1e3*i.securityDetails.validFrom).toUTCString(),He=new Date(1e3*i.securityDetails.validTo).toUTCString();if(h=new I,te.appendChild(h.element()),h.addRow(n(s.subject),i.securityDetails.subjectName),h.addRow(We("SAN"),Le),h.addRow(n(s.validFrom),Ne),h.addRow(n(s.validUntil),He),h.addRow(n(s.issuer),i.securityDetails.issuer),h.addRow("",L.createCertificateViewerButtonForOrigin(n(s.openFullCertificateDetails),t)),!C)return;const O=new I;O.element().classList.add("sct-summary"),C.appendChild(O.element());for(let p=0;p<H;p++){const u=i.securityDetails.signedCertificateTimestampList[p];O.addRow(n(s.sct),u.logDescription+" ("+u.origin+", "+u.status+")")}const M=C.createChild("div","sct-details");M.classList.add("hidden");for(let p=0;p<H;p++){const u=new I;M.appendChild(u.element());const f=i.securityDetails.signedCertificateTimestampList[p];u.addRow(n(s.logName),f.logDescription),u.addRow(n(s.logId),f.logId.replace(/(.{2})/g,"$1 ")),u.addRow(n(s.validationStatus),f.status),u.addRow(n(s.source),f.origin),u.addRow(n(s.issuedAt),new Date(f.timestamp).toUTCString()),u.addRow(n(s.hashAlgorithm),f.hashAlgorithm),u.addRow(n(s.signatureAlgorithm),f.signatureAlgorithm),u.addRow(n(s.signatureData),f.signatureData.replace(/(.{2})/g,"$1 "))}if(H){let p=function(){let f;const re=!M.classList.contains("hidden");re?f=n(s.showFullDetails):f=n(s.hideFullDetails),u.textContent=f,k(u,f),de(u,!re),O.element().classList.toggle("hidden"),M.classList.toggle("hidden")};const u=P(n(s.showFullDetails),p,{className:"details-toggle",jslogContext:"security.toggle-scts-details"});C.appendChild(u)}switch(se){case"compliant":C.createChild("div","origin-view-section-notes").textContent=n(s.thisRequestCompliesWithChromes);break;case"not-compliant":C.createChild("div","origin-view-section-notes").textContent=n(s.thisRequestDoesNotComplyWith);break}const ne=this.element.createChild("div","origin-view-section origin-view-notes");i.loadedFromCache&&(ne.createChild("div").textContent=n(s.thisResponseWasLoadedFromCache)),ne.createChild("div").textContent=n(s.theSecurityDetailsAboveAreFrom)}else if(i.securityState==="secure"){const m=this.element.createChild("div","origin-view-section"),y=m.createChild("div","origin-view-section-title");y.textContent=n(s.secure),b(y,2),m.createChild("div").textContent=n(s.thisOriginIsANonhttpsSecure)}else if(i.securityState!=="unknown"){const m=this.element.createChild("div","origin-view-section"),y=m.createChild("div","origin-view-section-title");y.textContent=n(s.notSecure),b(y,2),m.createChild("div").textContent=n(s.yourConnectionToThisOriginIsNot)}else{const m=this.element.createChild("div","origin-view-section"),y=m.createChild("div","origin-view-section-title");y.textContent=n(s.noSecurityInformation),b(y,2),m.createChild("div").textContent=n(s.noSecurityDetailsAreAvailableFor)}}createSanDiv(e){const t=document.createElement("div");if(e.length===0)t.textContent=n(s.na),t.classList.add("empty-san");else{const r=e.length>3;for(let o=0;o<e.length;o++){const a=t.createChild("span","san-entry");a.textContent=e[o],r&&o>=2&&a.classList.add("truncated-entry")}if(r){let o=function(){const l=t.classList.contains("truncated-san");let v;l?(t.classList.remove("truncated-san"),v=n(s.showLess)):(t.classList.add("truncated-san"),v=n(s.showMoreSTotal,{PH1:e.length})),a.textContent=v,k(a,v),de(a,l)};const a=P(n(s.showMoreSTotal,{PH1:e.length}),o,{jslogContext:"security.toggle-san-truncation"});t.appendChild(a),o()}}return t}setSecurityState(e){this.originLockIcon.removeChildren();const t=D(e,`security-property security-property-${e}`);this.originLockIcon.appendChild(t)}wasShown(){super.wasShown(),this.registerCSSFiles([Ee,F])}}class I{elementInternal;constructor(){this.elementInternal=document.createElement("table"),this.elementInternal.classList.add("details-table")}element(){return this.elementInternal}addRow(e,t){const i=this.elementInternal.createChild("tr","details-table-row");i.createChild("td").textContent=e;const r=i.createChild("td");typeof t=="string"?r.textContent=t:r.appendChild(t)}}const it=Object.freeze(Object.defineProperty({__proto__:null,get OriginGroup(){return g},SecurityDetailsTable:I,SecurityMainView:z,SecurityOriginView:De,SecurityPanel:L,createHighlightedUrl:ee,getSecurityStateIconForDetailedView:D,getSecurityStateIconForOverview:A},Symbol.toStringTag,{value:"Module"}));export{tt as SecurityModel,it as SecurityPanel};
//# sourceMappingURL=security-BJkkpZqi.js.map
