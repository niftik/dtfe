import{aU as j,bK as ns,b2 as Je,bA as Ft,bG as Ce,l as mi,eJ as Ps,bq as Xe,c7 as jr,aj as qe,aO as re,b_ as Js,bj as S,aP as ne,b as P,d_ as Xs,eW as Le,g as B,bW as Pt,be as Ue,aS as We,i as w,aR as $e,bi as Z,a$ as $a,bM as de,bZ as qr,jv as os,c4 as wt,bQ as rt,eA as I,ik as Oa,hb as Ua,d$ as Ha,bk as dr,bY as rr,r as Ie,fp as br,dj as lr,aE as Va,at as Wa,iK as _a,ex as xe,as as Ni,ml as ja,di as as,cl as Sr,ey as ds,ez as Qs,bD as st,b6 as qa,b0 as ls,u as fe,A as cs,fh as Ga,mm as us,bx as sr,iO as Zs,ba as za,g5 as hs,cB as yr,eY as hi,cA as W,cb as Gr,cR as Ye,bu as Ki,bw as cr,bh as en,bC as Lr,i0 as xt,cC as fi,ce as Qe,b1 as Cr,mn as Mi,mo as Tt,mp as ur,aJ as Ka,bz as Wi,cd as Rt,bN as vt,bB as zr,bR as _i,mq as Ya,en as Ja,mr as Xa,dH as Qa,bP as Dr,cv as Za,dJ as ed,aq as Si,ar as tn,dP as Bs,ms as Vt,h as $i,eX as ps,ds as rn,bS as ye,cG as Kr,d0 as gs,ca as Ls,c$ as ms,mt as td,ir as me,dy as sn,az as Ns,cI as Yi,hE as bt,hg as id,cH as nn,dw as rd,mu as on,df as sd,bE as an,I as dn,fP as nd,X as Ms,eh as od,fB as ad,mv as dd,mw as ld,bl as cd,mx as ln,my as Ge,du as ud,dv as hd,aZ as cn,dx as pd,cr as Yr,cD as ji,fn as gd,mz as md,fW as $s,cs as kr,ay as fd,hS as vd,cj as wd,ck as bd,mA as un,cc as Bt,e0 as Os,d2 as Us,bJ as ut,cq as Sd,bO as hn,eQ as yd,C as Cd,mB as Dd,V as Oi,d4 as kd,k0 as Ed,bF as Ad,eL as Hs,mC as Jr,fs as Td,c3 as Fd,cw as Id,hV as xd,mD as hr,dU as Rd,dt as Ji,dn as nr,mE as Pd,mF as pn,mG as gn,ci as Bd}from"./inspector-CyOA7R9n.js";import{a as Ld,b as Nd,h as Md,C as $d,c as Od}from"./network-BQDRpQID.js";import{J as Er,c as fs,R as mn,I as Ud,a as Hd}from"./PreviewFactory-7rWtg079.js";import{a as Vs}from"./swatchPopover.css-CdLS3b97.js";import{C as Xr}from"./ChromeLink-Cmjg_CBV.js";import"./TreeOutline-CeMGdnsP.js";import"./DataGridController-DdQqp2ti.js";import{s as Vd}from"./inspectorCommon.css-gVYvLA0h.js";import"./SplitView-C2CpDj9e.js";import"./ShortcutDialog-D3xyB3nU.js";import{a as Wd}from"./ScriptFormatter-CdcZyJ9a.js";import"./linear_memory_inspector-Cc8YvoCp.js";import{t as _d}from"./mobile_throttling-CIMam4T2.js";import{d as jd}from"./timelineOverviewInfo.css-BT4HnMd6.js";import"./UserAgentClientHintsForm-CYAYtRuO.js";import"./FloatingButton-ChdjBnjy.js";import"./Debouncer-BW_30p93.js";import"./BezierUI-Cu0bTMGR.js";import"./utils-C4_HKhgT.js";import"./directives-BpSiwtWR.js";import"./WatchExpressionsSidebarPane-ByQ6h9QR.js";import"./PopoverHelper-fEnxzApM.js";import"./coverage-nL5Jv5gw.js";import"./cssOverview.css-C_I9lWrq.js";import"./PanelIntroductionSteps-BeLT2-qM.js";import"./PreviewToggle-D6BBIbZ3.js";import"./components-nB6c8Px-.js";import"./DropTarget-DDkHhLsd.js";import"./TimelineOverviewPane-DjPkTYph.js";import"./ModelImpl-DjdwMiMr.js";const qd={cssContent:`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  background-color: var(--sys-color-cdt-base-container);
}

.report-content-box {
  background-color: var(--sys-color-cdt-base-container);
  overflow: auto;
}

.report-content-box.no-scroll {
  overflow: visible;
}

.report-header {
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 12px 24px;
}

.report-header .toolbar {
  margin-bottom: -8px;
  margin-top: 5px;
  margin-left: -8px;
}

.report-title {
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.report-url,
.report-subtitle {
  font-size: 12px;
  margin-top: 10px;
}

.report-section {
  display: flex;
  padding: 12px;
  border-bottom: 1px solid var(--sys-color-divider);
  flex-direction: column;
}

.report-section-header {
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.report-section-title {
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 16px;
  font-weight: bold;
  color: var(--sys-color-on-surface);
}

.report-field {
  margin-top: 8px;
  display: flex;
  line-height: 28px;
}

.report-row {
  margin: 10px 0 2px 18px;

  &:has(span[is="dt-checkbox"]) {
    margin-top: 7px;
  }
}

.report-field-name {
  color: var(--sys-color-on-surface-subtle);
  flex: 0 0 128px;
  text-align: right;
  padding: 0 6px;
  white-space: pre-wrap;
}

.report-field-value {
  flex: auto;
  padding: 0 6px;
  white-space: pre;
  user-select: text;
}

.report-field-value-is-flexed {
  display: flex;
  white-space: pre-wrap;
}

.report-field-value-subtitle {
  color: var(--sys-color-state-disabled);
  line-height: 14px;
}

.report-row-selectable {
  user-select: text;
}

.image-wrapper,
.image-wrapper img {
  max-width: 200px;
  max-height: 200px;
  display: block;
  object-fit: contain;
}

.image-wrapper {
  height: fit-content;
  margin-right: 8px;
}

.show-mask img {
  /* The safe zone is a centrally positioned circle, with radius 2/5
  * (40%) of the minimum of the icon's width and height.
  * https://w3c.github.io/manifest/#icon-masks */
  clip-path: circle(40% at 50% 50%);
}

.show-mask .image-wrapper {
  background: var(--image-file-checker);
}

@media (forced-colors: active) {
  .report-field-value .inline-icon {
    color: ButtonText;
  }

  .report-field-value .multiline-value {
    color: ButtonText;
  }
}

/*# sourceURL=reportView.css */
`};class vi extends j{contentBox;headerElement;titleElement;sectionList;subtitleElement;urlElement;constructor(e){super(!0),this.registerRequiredCSS(qd),this.contentBox=this.contentElement.createChild("div","report-content-box"),this.headerElement=this.contentBox.createChild("div","report-header vbox"),this.titleElement=this.headerElement.createChild("div","report-title"),e?this.titleElement.textContent=e:this.headerElement.classList.add("hidden"),ns(this.titleElement,1),this.sectionList=this.contentBox.createChild("div","vbox")}getHeaderElement(){return this.headerElement}setTitle(e){this.titleElement.textContent!==e&&(this.titleElement.textContent=e,this.headerElement.classList.toggle("hidden",!!e))}setSubtitle(e){this.subtitleElement&&this.subtitleElement.textContent===e||(this.subtitleElement||(this.subtitleElement=this.headerElement.createChild("div","report-subtitle")),this.subtitleElement.textContent=e)}setURL(e){this.urlElement||(this.urlElement=this.headerElement.createChild("div","report-url link")),this.urlElement.removeChildren(),e&&this.urlElement.appendChild(e),this.urlElement.setAttribute("jslog",`${Je("source-location").track({click:!0})}`)}createToolbar(){const e=new Ft("");return this.headerElement.appendChild(e.element),e}appendSection(e,t,i){const r=new Gd(e,t,i);return r.show(this.sectionList),r}sortSections(e){const t=this.children().slice();if(!t.every((r,s,o)=>!s||e(o[s-1],o[s])<=0)){this.detachChildWidgets(),t.sort(e);for(const r of t)r.show(this.sectionList)}}setHeaderVisible(e){this.headerElement.classList.toggle("hidden",!e)}setBodyScrollable(e){this.contentBox.classList.toggle("no-scroll",!e)}}let Gd=class extends j{jslogContext;headerElement;headerButtons;titleElement;fieldList;fieldMap;constructor(e,t,i){super(),this.jslogContext=i,this.element.classList.add("report-section"),t&&this.element.classList.add(t),i&&this.element.setAttribute("jslog",`${Ce(i)}`),this.jslogContext=i,this.headerButtons=[],this.headerElement=this.element.createChild("div","report-section-header"),this.titleElement=this.headerElement.createChild("div","report-section-title"),this.setTitle(e),ns(this.titleElement,2),this.fieldList=this.element.createChild("div","vbox"),this.fieldMap=new Map}title(){return this.titleElement.textContent||""}getTitleElement(){return this.titleElement}getFieldElement(){return this.fieldList}appendFieldWithCustomView(e){this.fieldList.append(e)}setTitle(e,t){this.titleElement.textContent!==e&&(this.titleElement.textContent=e),mi.install(this.titleElement,t||""),this.titleElement.classList.toggle("hidden",!this.titleElement.textContent)}setUiGroupTitle(e){Ps(this.element),Xe(this.element,e)}appendButtonToHeader(e){this.headerButtons.push(e),this.headerElement.appendChild(e)}setHeaderButtonsState(e){this.headerButtons.map(t=>{t.disabled=e})}appendField(e,t){let i=this.fieldMap.get(e);return i||(i=this.fieldList.createChild("div","report-field"),i.createChild("div","report-field-name").textContent=e,this.fieldMap.set(e,i),i.createChild("div","report-field-value")),t&&i.lastElementChild&&(i.lastElementChild.textContent=t),i.lastElementChild}appendFlexedField(e,t){const i=this.appendField(e,t);return i.classList.add("report-field-value-is-flexed"),i}removeField(e){const t=this.fieldMap.get(e);t&&t.remove(),this.fieldMap.delete(e)}setFieldVisible(e,t){const i=this.fieldMap.get(e);i&&i.classList.toggle("hidden",!t)}fieldValue(e){const t=this.fieldMap.get(e);return t?t.lastElementChild:null}appendRow(){return this.fieldList.createChild("div","report-row")}appendSelectableRow(){return this.fieldList.createChild("div","report-row report-row-selectable")}clearContent(){this.fieldList.removeChildren(),this.fieldMap.clear()}markFieldListAsGroup(){Ps(this.fieldList),Xe(this.fieldList,this.title())}setIconMasked(e){this.element.classList.toggle("show-mask",e)}};class ee extends jr{resourcesPanel;constructor(e,t,i,r){super(t,i,r),this.resourcesPanel=e,Xe(this.listItemElement,t),this.listItemElement.tabIndex=-1}deselect(){super.deselect(),this.listItemElement.tabIndex=-1}get itemURL(){throw new Error("Unimplemented Method")}onselect(e){if(!e)return!1;const t=[];for(let i=this;i;i=i.parent){const r=i instanceof ee&&i.itemURL;if(!r)break;t.push(r)}return this.resourcesPanel.setLastSelectedItemPath(t),!1}showView(e){this.resourcesPanel.showView(e)}}class je extends ee{expandedSetting;categoryName;categoryLink;constructor(e,t,i,r=!1){super(e,t,!1,i),this.expandedSetting=qe.instance().createSetting("resources-"+i+"-expanded",r),this.categoryName=t,this.categoryLink=null}get itemURL(){return"category://"+this.categoryName}setLink(e){this.categoryLink=e}onselect(e){return super.onselect(e),this.resourcesPanel.showCategoryView(this.categoryName,this.categoryLink),!1}onattach(){super.onattach(),this.expandedSetting.get()&&this.expand()}onexpand(){this.expandedSetting.set(!0)}oncollapse(){this.expandedSetting.set(!1)}}const Qr=new CSSStyleSheet;Qr.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.report-field-name {
  flex-basis: 152px;
}

.manifest-view-header {
  min-width: 600px;
  flex-shrink: 0;
  flex-grow: 0;
}

.manifest-container {
  overflow: auto;
}

.inline-icon {
  margin-inline: 4px;
  width: 16px;
  height: 16px;

  &[name="check-circle"] {
    color: var(--icon-checkmark-green);
  }
}

.multiline-value {
  white-space: normal;
}

.chrome-select {
  margin: 4px;
}

.inline-button {
  vertical-align: sub;
}

/*# sourceURL=appManifestView.css */
`);const fn=new CSSStyleSheet;fn.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

div {
  line-height: 1.7em;
}

.arrow-icon-button {
  cursor: pointer;
  padding: 1px 0;
  border: none;
  background: none;
  margin-right: 2px;
}

.arrow-icon {
  display: inline-block;
  mask-image: var(--image-file-triangle-right);
  background-color: var(--icon-default);
  margin-top: 2px;
  height: 14px;
  width: 14px;
  transition: transform 200ms;
}

.arrow-icon.expanded {
  transform: rotate(90deg);
}

.expandable-list-container {
  display: flex;
  margin-top: 4px;
}

.expandable-list-items {
  overflow: hidden;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

button.link {
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*# sourceURL=expandableList.css */
`);const{html:Nr,Directives:{ifDefined:Ws}}=ne;class zd extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=!1;#i=[];#r;set data(e){this.#i=e.rows,this.#r=e.title,this.#n()}#s(){this.#e=!this.#e,this.#n()}connectedCallback(){this.#t.adoptedStyleSheets=[fn]}#n(){this.#i.length<1||re(Nr`
      <div class="expandable-list-container">
        <div>
          ${this.#i.length>1?Nr`
              <button title='${Ws(this.#r)}' aria-label='${Ws(this.#r)}' aria-expanded=${this.#e?"true":"false"} @click=${()=>this.#s()} class="arrow-icon-button">
                <span class="arrow-icon ${this.#e?"expanded":""}"
                jslog=${Js().track({click:!0})}></span>
              </button>
            `:S}
        </div>
        <div class="expandable-list-items">
          ${this.#i.filter((e,t)=>this.#e||t===0).map(e=>Nr`
            ${e}
          `)}
        </div>
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-expandable-list",zd);const c={notMainFrame:"Navigation happened in a frame other than the main frame.",backForwardCacheDisabled:"Back/forward cache is disabled by flags. Visit chrome://flags/#back-forward-cache to enable it locally on this device.",relatedActiveContentsExist:"The page was opened using '`window.open()`' and another tab has a reference to it, or the page opened a window.",HTTPStatusNotOK:"Only pages with a status code of 2XX can be cached.",schemeNotHTTPOrHTTPS:"Only pages whose URL scheme is HTTP / HTTPS can be cached.",loading:"The page did not finish loading before navigating away.",wasGrantedMediaAccess:"Pages that have granted access to record video or audio are not currently eligible for back/forward cache.",HTTPMethodNotGET:"Only pages loaded via a GET request are eligible for back/forward cache.",subframeIsNavigating:"An iframe on the page started a navigation that did not complete.",timeout:"The page exceeded the maximum time in back/forward cache and was expired.",cacheLimit:"The page was evicted from the cache to allow another page to be cached.",JavaScriptExecution:"Chrome detected an attempt to execute JavaScript while in the cache.",rendererProcessKilled:"The renderer process for the page in back/forward cache was killed.",rendererProcessCrashed:"The renderer process for the page in back/forward cache crashed.",grantedMediaStreamAccess:"Pages that have granted media stream access are not currently eligible for back/forward cache.",cacheFlushed:"The cache was intentionally cleared.",serviceWorkerVersionActivation:"The page was evicted from back/forward cache due to a service worker activation.",sessionRestored:"Chrome restarted and cleared the back/forward cache entries.",serviceWorkerPostMessage:"A service worker attempted to send the page in back/forward cache a `MessageEvent`.",enteredBackForwardCacheBeforeServiceWorkerHostAdded:"A service worker was activated while the page was in back/forward cache.",serviceWorkerClaim:"The page was claimed by a service worker while it is in back/forward cache.",haveInnerContents:"Pages that have certain kinds of embedded content (e.g. PDFs) are not currently eligible for back/forward cache.",timeoutPuttingInCache:"The page timed out entering back/forward cache (likely due to long-running pagehide handlers).",backForwardCacheDisabledByLowMemory:"Back/forward cache is disabled due to insufficient memory.",backForwardCacheDisabledByCommandLine:"Back/forward cache is disabled by the command line.",networkRequestDatapipeDrainedAsBytesConsumer:"Pages that have inflight fetch() or XHR are not currently eligible for back/forward cache.",networkRequestRedirected:"The page was evicted from back/forward cache because an active network request involved a redirect.",networkRequestTimeout:"The page was evicted from the cache because a network connection was open too long. Chrome limits the amount of time that a page may receive data while cached.",networkExceedsBufferLimit:"The page was evicted from the cache because an active network connection received too much data. Chrome limits the amount of data that a page may receive while cached.",navigationCancelledWhileRestoring:"Navigation was cancelled before the page could be restored from back/forward cache.",backForwardCacheDisabledForPrerender:"Back/forward cache is disabled for prerenderer.",userAgentOverrideDiffers:"Browser has changed the user agent override header.",foregroundCacheLimit:"The page was evicted from the cache to allow another page to be cached.",backForwardCacheDisabledForDelegate:"Back/forward cache is not supported by delegate.",unloadHandlerExistsInMainFrame:"The page has an unload handler in the main frame.",unloadHandlerExistsInSubFrame:"The page has an unload handler in a sub frame.",serviceWorkerUnregistration:"ServiceWorker was unregistered while a page was in back/forward cache.",noResponseHead:"Pages that do not have a valid response head cannot enter back/forward cache.",cacheControlNoStore:"Pages with cache-control:no-store header cannot enter back/forward cache.",ineligibleAPI:"Ineligible APIs were used.",internalError:"Internal error.",webSocket:"Pages with WebSocket cannot enter back/forward cache.",webTransport:"Pages with WebTransport cannot enter back/forward cache.",webRTC:"Pages with WebRTC cannot enter back/forward cache.",mainResourceHasCacheControlNoStore:"Pages whose main resource has cache-control:no-store cannot enter back/forward cache.",mainResourceHasCacheControlNoCache:"Pages whose main resource has cache-control:no-cache cannot enter back/forward cache.",subresourceHasCacheControlNoStore:"Pages whose subresource has cache-control:no-store cannot enter back/forward cache.",subresourceHasCacheControlNoCache:"Pages whose subresource has cache-control:no-cache cannot enter back/forward cache.",containsPlugins:"Pages containing plugins are not currently eligible for back/forward cache.",documentLoaded:"The document did not finish loading before navigating away.",dedicatedWorkerOrWorklet:"Pages that use a dedicated worker or worklet are not currently eligible for back/forward cache.",outstandingNetworkRequestOthers:"Pages with an in-flight network request are not currently eligible for back/forward cache.",outstandingIndexedDBTransaction:"Page with ongoing indexed DB transactions are not currently eligible for back/forward cache.",requestedNotificationsPermission:"Pages that have requested notifications permissions are not currently eligible for back/forward cache.",requestedMIDIPermission:"Pages that have requested MIDI permissions are not currently eligible for back/forward cache.",requestedAudioCapturePermission:"Pages that have requested audio capture permissions are not currently eligible for back/forward cache.",requestedVideoCapturePermission:"Pages that have requested video capture permissions are not currently eligible for back/forward cache.",requestedBackForwardCacheBlockedSensors:"Pages that have requested sensor permissions are not currently eligible for back/forward cache.",requestedBackgroundWorkPermission:"Pages that have requested background sync or fetch permissions are not currently eligible for back/forward cache.",broadcastChannel:"The page cannot be cached because it has a BroadcastChannel instance with registered listeners.",indexedDBConnection:"Pages that have an open IndexedDB connection are not currently eligible for back/forward cache.",webXR:"Pages that use WebXR are not currently eligible for back/forward cache.",sharedWorker:"Pages that use SharedWorker are not currently eligible for back/forward cache.",webLocks:"Pages that use WebLocks are not currently eligible for back/forward cache.",webHID:"Pages that use WebHID are not currently eligible for back/forward cache.",webShare:"Pages that use WebShare are not currently eligible for back/forwad cache.",requestedStorageAccessGrant:"Pages that have requested storage access are not currently eligible for back/forward cache.",webNfc:"Pages that use WebNfc are not currently eligible for back/forwad cache.",outstandingNetworkRequestFetch:"Pages with an in-flight fetch network request are not currently eligible for back/forward cache.",outstandingNetworkRequestXHR:"Pages with an in-flight XHR network request are not currently eligible for back/forward cache.",appBanner:"Pages that requested an AppBanner are not currently eligible for back/forward cache.",printing:"Pages that show Printing UI are not currently eligible for back/forward cache.",webDatabase:"Pages that use WebDatabase are not currently eligible for back/forward cache.",pictureInPicture:"Pages that use Picture-in-Picture are not currently eligible for back/forward cache.",speechRecognizer:"Pages that use SpeechRecognizer are not currently eligible for back/forward cache.",idleManager:"Pages that use IdleManager are not currently eligible for back/forward cache.",paymentManager:"Pages that use PaymentManager are not currently eligible for back/forward cache.",speechSynthesis:"Pages that use SpeechSynthesis are not currently eligible for back/forward cache.",keyboardLock:"Pages that use Keyboard lock are not currently eligible for back/forward cache.",webOTPService:"Pages that use WebOTPService are not currently eligible for bfcache.",outstandingNetworkRequestDirectSocket:"Pages with an in-flight network request are not currently eligible for back/forward cache.",injectedJavascript:"Pages that `JavaScript` is injected into by extensions are not currently eligible for back/forward cache.",injectedStyleSheet:"Pages that a `StyleSheet` is injected into by extensions are not currently eligible for back/forward cache.",contentDiscarded:"Undefined",contentSecurityHandler:"Pages that use SecurityHandler are not eligible for back/forward cache.",contentWebAuthenticationAPI:"Pages that use WebAuthetication API are not eligible for back/forward cache.",contentFileChooser:"Pages that use FileChooser API are not eligible for back/forward cache.",contentSerial:"Pages that use Serial API are not eligible for back/forward cache.",contentFileSystemAccess:"Pages that use File System Access API are not eligible for back/forward cache.",contentMediaDevicesDispatcherHost:"Pages that use Media Device Dispatcher are not eligible for back/forward cache.",contentWebBluetooth:"Pages that use WebBluetooth API are not eligible for back/forward cache.",contentWebUSB:"Pages that use WebUSB API are not eligible for back/forward cache.",contentMediaSession:"Pages that use MediaSession API and set a playback state are not eligible for back/forward cache.",contentMediaSessionService:"Pages that use MediaSession API and set action handlers are not eligible for back/forward cache.",contentMediaPlay:"A media player was playing upon navigating away.",contentScreenReader:"Back/forward cache is disabled due to screen reader.",embedderPopupBlockerTabHelper:"Popup blocker was present upon navigating away.",embedderSafeBrowsingTriggeredPopupBlocker:"Safe Browsing considered this page to be abusive and blocked popup.",embedderSafeBrowsingThreatDetails:"Safe Browsing details were shown upon navigating away.",embedderAppBannerManager:"App Banner was present upon navigating away.",embedderDomDistillerViewerSource:"DOM Distiller Viewer was present upon navigating away.",embedderDomDistillerSelfDeletingRequestDelegate:"DOM distillation was in progress upon navigating away.",embedderOomInterventionTabHelper:"Out-Of-Memory Intervention bar was present upon navigating away.",embedderOfflinePage:"The offline page was shown upon navigating away.",embedderChromePasswordManagerClientBindCredentialManager:"Chrome Password Manager was present upon navigating away.",embedderPermissionRequestManager:"There were permission requests upon navigating away.",embedderModalDialog:"Modal dialog such as form resubmission or http password dialog was shown for the page upon navigating away.",embedderExtensions:"Back/forward cache is disabled due to extensions.",embedderExtensionMessaging:"Back/forward cache is disabled due to extensions using messaging API.",embedderExtensionMessagingForOpenPort:"Extensions with long-lived connection should close the connection before entering back/forward cache.",embedderExtensionSentMessageToCachedFrame:"Extensions with long-lived connection attempted to send messages to frames in back/forward cache.",errorDocument:"Back/forward cache is disabled due to a document error.",fencedFramesEmbedder:"Pages using FencedFrames cannot be stored in bfcache.",keepaliveRequest:"Back/forward cache is disabled due to a keepalive request.",jsNetworkRequestReceivedCacheControlNoStoreResource:"Back/forward cache is disabled because some JavaScript network request received resource with `Cache-Control: no-store` header.",indexedDBEvent:"Back/forward cache is disabled due to an IndexedDB event.",cookieDisabled:"Back/forward cache is disabled because cookies are disabled on a page that uses `Cache-Control: no-store`.",webRTCSticky:"Back/forward cache is disabled because WebRTC has been used.",webTransportSticky:"Back/forward cache is disabled because WebTransport has been used.",webSocketSticky:"Back/forward cache is disabled because WebSocket has been used."},Kd=P("panels/application/components/BackForwardCacheStrings.ts",c),u=Xs.bind(void 0,Kd),_s={NotPrimaryMainFrame:{name:u(c.notMainFrame)},BackForwardCacheDisabled:{name:u(c.backForwardCacheDisabled)},RelatedActiveContentsExist:{name:u(c.relatedActiveContentsExist)},HTTPStatusNotOK:{name:u(c.HTTPStatusNotOK)},SchemeNotHTTPOrHTTPS:{name:u(c.schemeNotHTTPOrHTTPS)},Loading:{name:u(c.loading)},WasGrantedMediaAccess:{name:u(c.wasGrantedMediaAccess)},HTTPMethodNotGET:{name:u(c.HTTPMethodNotGET)},SubframeIsNavigating:{name:u(c.subframeIsNavigating)},Timeout:{name:u(c.timeout)},CacheLimit:{name:u(c.cacheLimit)},JavaScriptExecution:{name:u(c.JavaScriptExecution)},RendererProcessKilled:{name:u(c.rendererProcessKilled)},RendererProcessCrashed:{name:u(c.rendererProcessCrashed)},GrantedMediaStreamAccess:{name:u(c.grantedMediaStreamAccess)},CacheFlushed:{name:u(c.cacheFlushed)},ServiceWorkerVersionActivation:{name:u(c.serviceWorkerVersionActivation)},SessionRestored:{name:u(c.sessionRestored)},ServiceWorkerPostMessage:{name:u(c.serviceWorkerPostMessage)},EnteredBackForwardCacheBeforeServiceWorkerHostAdded:{name:u(c.enteredBackForwardCacheBeforeServiceWorkerHostAdded)},ServiceWorkerClaim:{name:u(c.serviceWorkerClaim)},HaveInnerContents:{name:u(c.haveInnerContents)},TimeoutPuttingInCache:{name:u(c.timeoutPuttingInCache)},BackForwardCacheDisabledByLowMemory:{name:u(c.backForwardCacheDisabledByLowMemory)},BackForwardCacheDisabledByCommandLine:{name:u(c.backForwardCacheDisabledByCommandLine)},NetworkRequestDatapipeDrainedAsBytesConsumer:{name:u(c.networkRequestDatapipeDrainedAsBytesConsumer)},NetworkRequestRedirected:{name:u(c.networkRequestRedirected)},NetworkRequestTimeout:{name:u(c.networkRequestTimeout)},NetworkExceedsBufferLimit:{name:u(c.networkExceedsBufferLimit)},NavigationCancelledWhileRestoring:{name:u(c.navigationCancelledWhileRestoring)},BackForwardCacheDisabledForPrerender:{name:u(c.backForwardCacheDisabledForPrerender)},UserAgentOverrideDiffers:{name:u(c.userAgentOverrideDiffers)},ForegroundCacheLimit:{name:u(c.foregroundCacheLimit)},BackForwardCacheDisabledForDelegate:{name:u(c.backForwardCacheDisabledForDelegate)},UnloadHandlerExistsInMainFrame:{name:u(c.unloadHandlerExistsInMainFrame)},UnloadHandlerExistsInSubFrame:{name:u(c.unloadHandlerExistsInSubFrame)},ServiceWorkerUnregistration:{name:u(c.serviceWorkerUnregistration)},NoResponseHead:{name:u(c.noResponseHead)},CacheControlNoStore:{name:u(c.cacheControlNoStore)},CacheControlNoStoreCookieModified:{name:u(c.cacheControlNoStore)},CacheControlNoStoreHTTPOnlyCookieModified:{name:u(c.cacheControlNoStore)},DisableForRenderFrameHostCalled:{name:u(c.ineligibleAPI)},BlocklistedFeatures:{name:u(c.ineligibleAPI)},SchedulerTrackedFeatureUsed:{name:u(c.ineligibleAPI)},DomainNotAllowed:{name:u(c.internalError)},ConflictingBrowsingInstance:{name:u(c.internalError)},NotMostRecentNavigationEntry:{name:u(c.internalError)},IgnoreEventAndEvict:{name:u(c.internalError)},BrowsingInstanceNotSwapped:{name:u(c.internalError)},ActivationNavigationsDisallowedForBug1234857:{name:u(c.internalError)},Unknown:{name:u(c.internalError)},RenderFrameHostReused_SameSite:{name:u(c.internalError)},RenderFrameHostReused_CrossSite:{name:u(c.internalError)},WebSocket:{name:u(c.webSocket)},WebTransport:{name:u(c.webTransport)},WebRTC:{name:u(c.webRTC)},MainResourceHasCacheControlNoStore:{name:u(c.mainResourceHasCacheControlNoStore)},MainResourceHasCacheControlNoCache:{name:u(c.mainResourceHasCacheControlNoCache)},SubresourceHasCacheControlNoStore:{name:u(c.subresourceHasCacheControlNoStore)},SubresourceHasCacheControlNoCache:{name:u(c.subresourceHasCacheControlNoCache)},ContainsPlugins:{name:u(c.containsPlugins)},DocumentLoaded:{name:u(c.documentLoaded)},DedicatedWorkerOrWorklet:{name:u(c.dedicatedWorkerOrWorklet)},OutstandingNetworkRequestOthers:{name:u(c.outstandingNetworkRequestOthers)},OutstandingIndexedDBTransaction:{name:u(c.outstandingIndexedDBTransaction)},RequestedNotificationsPermission:{name:u(c.requestedNotificationsPermission)},RequestedMIDIPermission:{name:u(c.requestedMIDIPermission)},RequestedAudioCapturePermission:{name:u(c.requestedAudioCapturePermission)},RequestedVideoCapturePermission:{name:u(c.requestedVideoCapturePermission)},RequestedBackForwardCacheBlockedSensors:{name:u(c.requestedBackForwardCacheBlockedSensors)},RequestedBackgroundWorkPermission:{name:u(c.requestedBackgroundWorkPermission)},BroadcastChannel:{name:u(c.broadcastChannel)},IndexedDBConnection:{name:u(c.indexedDBConnection)},WebXR:{name:u(c.webXR)},SharedWorker:{name:u(c.sharedWorker)},WebLocks:{name:u(c.webLocks)},WebHID:{name:u(c.webHID)},WebShare:{name:u(c.webShare)},RequestedStorageAccessGrant:{name:u(c.requestedStorageAccessGrant)},WebNfc:{name:u(c.webNfc)},OutstandingNetworkRequestFetch:{name:u(c.outstandingNetworkRequestFetch)},OutstandingNetworkRequestXHR:{name:u(c.outstandingNetworkRequestXHR)},AppBanner:{name:u(c.appBanner)},Printing:{name:u(c.printing)},WebDatabase:{name:u(c.webDatabase)},PictureInPicture:{name:u(c.pictureInPicture)},SpeechRecognizer:{name:u(c.speechRecognizer)},IdleManager:{name:u(c.idleManager)},PaymentManager:{name:u(c.paymentManager)},SpeechSynthesis:{name:u(c.speechSynthesis)},KeyboardLock:{name:u(c.keyboardLock)},WebOTPService:{name:u(c.webOTPService)},OutstandingNetworkRequestDirectSocket:{name:u(c.outstandingNetworkRequestDirectSocket)},InjectedJavascript:{name:u(c.injectedJavascript)},InjectedStyleSheet:{name:u(c.injectedStyleSheet)},Dummy:{name:u(c.internalError)},ContentDiscarded:{name:u(c.contentDiscarded)},ContentSecurityHandler:{name:u(c.contentSecurityHandler)},ContentWebAuthenticationAPI:{name:u(c.contentWebAuthenticationAPI)},ContentFileChooser:{name:u(c.contentFileChooser)},ContentSerial:{name:u(c.contentSerial)},ContentFileSystemAccess:{name:u(c.contentFileSystemAccess)},ContentMediaDevicesDispatcherHost:{name:u(c.contentMediaDevicesDispatcherHost)},ContentWebBluetooth:{name:u(c.contentWebBluetooth)},ContentWebUSB:{name:u(c.contentWebUSB)},ContentMediaSession:{name:u(c.contentMediaSession)},ContentMediaSessionService:{name:u(c.contentMediaSessionService)},ContentMediaPlay:{name:u(c.contentMediaPlay)},ContentScreenReader:{name:u(c.contentScreenReader)},EmbedderPopupBlockerTabHelper:{name:u(c.embedderPopupBlockerTabHelper)},EmbedderSafeBrowsingTriggeredPopupBlocker:{name:u(c.embedderSafeBrowsingTriggeredPopupBlocker)},EmbedderSafeBrowsingThreatDetails:{name:u(c.embedderSafeBrowsingThreatDetails)},EmbedderAppBannerManager:{name:u(c.embedderAppBannerManager)},EmbedderDomDistillerViewerSource:{name:u(c.embedderDomDistillerViewerSource)},EmbedderDomDistillerSelfDeletingRequestDelegate:{name:u(c.embedderDomDistillerSelfDeletingRequestDelegate)},EmbedderOomInterventionTabHelper:{name:u(c.embedderOomInterventionTabHelper)},EmbedderOfflinePage:{name:u(c.embedderOfflinePage)},EmbedderChromePasswordManagerClientBindCredentialManager:{name:u(c.embedderChromePasswordManagerClientBindCredentialManager)},EmbedderPermissionRequestManager:{name:u(c.embedderPermissionRequestManager)},EmbedderModalDialog:{name:u(c.embedderModalDialog)},EmbedderExtensions:{name:u(c.embedderExtensions)},EmbedderExtensionMessaging:{name:u(c.embedderExtensionMessaging)},EmbedderExtensionMessagingForOpenPort:{name:u(c.embedderExtensionMessagingForOpenPort)},EmbedderExtensionSentMessageToCachedFrame:{name:u(c.embedderExtensionSentMessageToCachedFrame)},ErrorDocument:{name:u(c.errorDocument)},FencedFramesEmbedder:{name:u(c.fencedFramesEmbedder)},KeepaliveRequest:{name:u(c.keepaliveRequest)},JsNetworkRequestReceivedCacheControlNoStoreResource:{name:u(c.jsNetworkRequestReceivedCacheControlNoStoreResource)},IndexedDBEvent:{name:u(c.indexedDBEvent)},CookieDisabled:{name:u(c.cookieDisabled)},WebRTCSticky:{name:u(c.webRTCSticky)},WebTransportSticky:{name:u(c.webTransportSticky)},WebSocketSticky:{name:u(c.webSocketSticky)},HTTPAuthRequired:{name:Le("HTTPAuthRequired")},CookieFlushed:{name:Le("CookieFlushed")},SmartCard:{name:Le("SmartCard")},LiveMediaStreamTrack:{name:Le("LiveMediaStreamTrack")},UnloadHandler:{name:Le("UnloadHandler")},ParserAborted:{name:Le("ParserAborted")},BroadcastChannelOnMessage:{name:Le("BroadcastChannelOnMessage")},RequestedByWebViewClient:{name:Le("RequestedByWebViewClient")},PostMessageByWebViewClient:{name:Le("PostMessageByWebViewClient")},WebViewSettingsChanged:{name:Le("WebViewSettingsChanged")},WebViewJavaScriptObjectChanged:{name:Le("WebViewJavaScriptObjectChanged")},WebViewMessageListenerInjected:{name:Le("WebViewMessageListenerInjected")},WebViewSafeBrowsingAllowlistChanged:{name:Le("WebViewSafeBrowsingAllowlistChanged")},WebViewDocumentStartJavascriptChanged:{name:Le("WebViewDocumentStartJavascriptChanged")}},vn=new CSSStyleSheet;vn.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.inline-icon {
  vertical-align: sub;
}

.gray-text {
  color: var(--sys-color-token-subtle);
  margin: 0 0 5px 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  overflow-wrap: break-word;
  overflow: hidden;
}

.details-list {
  margin-left: 56px;
  grid-column-start: span 2;
}

.help-outline-icon {
  margin: 0 2px;
}

.circled-exclamation-icon {
  margin-right: 10px;
  flex-shrink: 0;
}

.status {
  margin-right: 11px;
  flex-shrink: 0;
}

.report-line {
  grid-column-start: span 2;
  display: flex;
  align-items: center;
  margin: 0 30px;
  line-height: 26px;
}

.report-key {
  color: var(--sys-color-token-subtle);
  min-width: auto;
  overflow-wrap: break-word;
  align-self: start;
}

.report-value {
  padding: 0 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.tree-outline li .selection {
  margin-left: -5px;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=backForwardCacheView.css */
`);const{html:ve}=ne,Q={mainFrame:"Main Frame",backForwardCacheTitle:"Back/forward cache",unavailable:"unavailable",url:"URL:",unknown:"Unknown Status",normalNavigation:"Not served from back/forward cache: to trigger back/forward cache, use Chrome's back/forward buttons, or use the test button below to automatically navigate away and back.",restoredFromBFCache:"Successfully served from back/forward cache.",pageSupportNeeded:"Actionable",pageSupportNeededExplanation:"These reasons are actionable i.e. they can be cleaned up to make the page eligible for back/forward cache.",circumstantial:"Not Actionable",circumstantialExplanation:"These reasons are not actionable i.e. caching was prevented by something outside of the direct control of the page.",supportPending:"Pending Support",runTest:"Test back/forward cache",runningTest:"Running test",learnMore:"Learn more: back/forward cache eligibility",neverUseUnload:"Learn more: Never use unload handler",supportPendingExplanation:"Chrome support for these reasons is pending i.e. they will not prevent the page from being eligible for back/forward cache in a future version of Chrome.",blockingExtensionId:"Extension id: ",framesTitle:"Frames",issuesInSingleFrame:"{n, plural, =1 {# issue found in 1 frame.} other {# issues found in 1 frame.}}",issuesInMultipleFrames:"{n, plural, =1 {# issue found in {m} frames.} other {# issues found in {m} frames.}}",framesPerIssue:"{n, plural, =1 {# frame} other {# frames}}",blankURLTitle:"Blank URL [{PH1}]",filesPerIssue:"{n, plural, =1 {# file} other {# files}}"},Yd=P("panels/application/components/BackForwardCacheView.ts",Q),te=B.bind(void 0,Yd),Jd=Pt.instance();class wn extends Ue{#t=this.attachShadow({mode:"open"});#e="Result";#i=0;#r=0;constructor(){super(),this.#s()?.addEventListener(We.PrimaryPageChanged,this.render,this),this.#s()?.addEventListener(We.BackForwardCacheDetailsUpdated,this.render,this)}#s(){return w.instance().primaryPageTarget()?.model($e)||null}#n(){return this.#s()?.mainFrame||null}connectedCallback(){this.parentElement?.classList.add("overflow-auto"),this.#t.adoptedStyleSheets=[vn]}async render(){await Jd.write("BackForwardCacheView render",()=>{re(ve`
        <devtools-report .data=${{reportTitle:te(Q.backForwardCacheTitle)}} jslog=${Z("back-forward-cache")}>

          ${this.#l()}
        </devtools-report>
      `,this.#t,{host:this})})}#o(){w.instance().removeModelListener($e,We.FrameNavigated,this.#o,this),this.#e="Result",this.render()}async#a(){w.instance().removeModelListener($e,We.FrameNavigated,this.#a,this),await this.#d(50)}async#d(e){const i=w.instance().primaryPageTarget()?.model($e),r=await i?.navigationHistory();!i||!r||(r.currentIndex===this.#r?window.setTimeout(this.#d.bind(this,e*2),e):(w.instance().addModelListener($e,We.FrameNavigated,this.#o,this),i.navigateToHistoryEntry(r.entries[r.currentIndex-1])))}async#c(){const t=w.instance().primaryPageTarget()?.model($e),i=await t?.navigationHistory();!t||!i||(this.#r=i.currentIndex,this.#e="Running",this.render(),w.instance().addModelListener($e,We.FrameNavigated,this.#a,this),t.navigate("chrome://terms"))}#l(){const e=this.#n();if(!e)return ve`
        <devtools-report-key>
          ${te(Q.mainFrame)}
        </devtools-report-key>
        <devtools-report-value>
          ${te(Q.unavailable)}
        </devtools-report-value>
      `;const t=this.#e==="Running",i=$a(e.url,"devtools:");return ve`
      ${this.#m(e.backForwardCacheDetails.restoredFromCache)}
      <div class="report-line">
        <div class="report-key">
          ${te(Q.url)}
        </div>
        <div class="report-value" title=${e.url}>
          ${e.url}
        </div>
      </div>
      ${this.#u(e.backForwardCacheDetails.explanationsTree)}
      <devtools-report-section>
        <devtools-button
          aria-label=${te(Q.runTest)}
          .disabled=${t||i}
          .spinner=${t}
          .variant=${"primary"}
          @click=${this.#c}
          jslog=${de("back-forward-cache.run-test").track({click:!0})}>
          ${t?ve`
            ${te(Q.runningTest)}`:`
            ${te(Q.runTest)}
          `}
        </devtools-button>
      </devtools-report-section>
      <devtools-report-divider>
      </devtools-report-divider>
      ${this.#f(e.backForwardCacheDetails.explanations,e.backForwardCacheDetails.explanationsTree)}
      <devtools-report-section>
        <x-link href="https://web.dev/bfcache/" class="link"
        jslog=${de("learn-more.eligibility").track({click:!0})}>
          ${te(Q.learnMore)}
        </x-link>
      </devtools-report-section>
    `}#u(e){if(!e||e.explanations.length===0&&e.children.length===0)return S;function t(o){return ve`
        <div class="text-ellipsis">
          ${o.treeNodeData.iconName?ve`
            <devtools-icon class="inline-icon" style="margin-bottom: -3px;" .data=${{iconName:o.treeNodeData.iconName,color:"var(--icon-default)",width:"20px",height:"20px"}}>
            </devtools-icon>
          `:S}
          ${o.treeNodeData.text}
        </div>
      `}const i=this.#h(e,{blankCount:1});i.node.treeNodeData.iconName="frame";let r="";i.frameCount===1?r=te(Q.issuesInSingleFrame,{n:i.issueCount}):r=te(Q.issuesInMultipleFrames,{n:i.issueCount,m:i.frameCount});const s={treeNodeData:{text:r},id:"root",children:()=>Promise.resolve([i.node])};return ve`
      <div class="report-line"
      jslog=${Ce("frames")}>
        <div class="report-key">
          ${te(Q.framesTitle)}
        </div>
        <div class="report-value">
          <devtools-tree-outline .data=${{tree:[s],defaultRenderer:t,compact:!0}}>
          </devtools-tree-outline>
        </div>
      </div>
    `}#h(e,t){let i=1,r=0;const s=[];let o="";e.url.length?o=e.url:(o=te(Q.blankURLTitle,{PH1:t.blankCount}),t.blankCount+=1);for(const d of e.explanations){const h={treeNodeData:{text:d.reason},id:String(this.#i++)};r+=1,s.push(h)}for(const d of e.children){const h=this.#h(d,t);h.issueCount>0&&(s.push(h.node),r+=h.issueCount,i+=h.frameCount)}let a={treeNodeData:{text:`(${r}) ${o}`},id:String(this.#i++)};return s.length?(a={...a,children:()=>Promise.resolve(s)},a.treeNodeData.iconName="iframe"):e.url.length||(t.blankCount-=1),{node:a,frameCount:i,issueCount:r}}#m(e){switch(e){case!0:return ve`
          <devtools-report-section>
            <div class="status">
              <devtools-icon class="inline-icon" .data=${{iconName:"check-circle",color:"var(--icon-checkmark-green)",width:"20px",height:"20px"}}>
              </devtools-icon>
            </div>
            ${te(Q.restoredFromBFCache)}
          </devtools-report-section>
        `;case!1:return ve`
          <devtools-report-section>
            <div class="status">
              <devtools-icon class="inline-icon" .data=${{iconName:"clear",color:"var(--icon-default)",width:"20px",height:"20px"}}>
              </devtools-icon>
            </div>
            ${te(Q.normalNavigation)}
          </devtools-report-section>
        `}return ve`
    <devtools-report-section>
      ${te(Q.unknown)}
    </devtools-report-section>
    `}#g(e,t,i){let r=e.url;r.length===0&&(r=te(Q.blankURLTitle,{PH1:t.blankCount}),t.blankCount+=1),e.explanations.forEach(s=>{let o=i.get(s.reason);o===void 0?(o=[r],i.set(s.reason,o)):o.push(r)}),e.children.map(s=>{this.#g(s,t,i)})}#f(e,t){if(e.length===0)return S;const i=e.filter(a=>a.type==="PageSupportNeeded"),r=e.filter(a=>a.type==="SupportPending"),s=e.filter(a=>a.type==="Circumstantial"),o=new Map;return t&&this.#g(t,{blankCount:1},o),ve`
      ${this.#p(te(Q.pageSupportNeeded),te(Q.pageSupportNeededExplanation),i,o)}
      ${this.#p(te(Q.supportPending),te(Q.supportPendingExplanation),r,o)}
      ${this.#p(te(Q.circumstantial),te(Q.circumstantialExplanation),s,o)}
    `}#p(e,t,i,r){return ve`
      ${i.length>0?ve`
        <devtools-report-section-header>
          ${e}
          <div class="help-outline-icon">
            <devtools-icon class="inline-icon" .data=${{iconName:"help",color:"var(--icon-default)",width:"16px",height:"16px"}} title=${t}>
            </devtools-icon>
          </div>
        </devtools-report-section-header>
        ${i.map(s=>this.#y(s,r.get(s.reason)))}
      `:S}
    `}#v(e){if(e.reason==="EmbedderExtensionSentMessageToCachedFrame"&&e.context){const t="chrome://extensions/?id="+e.context;return ve`${te(Q.blockingExtensionId)}
      <devtools-chrome-link .href=${t}>${e.context}</devtools-chrome-link>`}return S}#w(e){if(e===void 0||e.length===0)return S;const t=[ve`<div>${te(Q.framesPerIssue,{n:e.length})}</div>`];return t.push(...e.map(i=>ve`<div class="text-ellipsis" title=${i}
    jslog=${qr()}>${i}</div>`)),ve`
      <div class="details-list"
      jslog=${os("frames-per-issue")}>
        <devtools-expandable-list .data=${{rows:t,title:te(Q.framesPerIssue,{n:e.length})}}
        jslog=${qr()}></devtools-expandable-list>
      </div>
    `}#b(e){return e.reason==="UnloadHandlerExistsInMainFrame"||e.reason==="UnloadHandlerExistsInSubFrame"?ve`
        <x-link href="https://web.dev/bfcache/#never-use-the-unload-event" class="link"
        jslog=${de("learn-more.never-use-unload").track({click:!0})}>
          ${te(Q.neverUseUnload)}
        </x-link>`:S}#S(e){if(e===void 0||e.length===0)return S;const t=50,i=new wt(t),r=[ve`<div>${te(Q.filesPerIssue,{n:e.length})}</div>`];return r.push(...e.map(s=>ve`${i.linkifyScriptLocation(null,null,s.url,s.lineNumber,{columnNumber:s.columnNumber,showColumnNumber:!0,inlineFrameIndex:0})}`)),ve`
      <div class="details-list">
        <devtools-expandable-list .data=${{rows:r}}></devtools-expandable-list>
      </div>
    `}#y(e,t){return ve`
      <devtools-report-section>
        ${e.reason in _s?ve`
            <div class="circled-exclamation-icon">
              <devtools-icon class="inline-icon" .data=${{iconName:"warning",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
              </devtools-icon>
            </div>
            <div>
              ${_s[e.reason].name()}
              ${this.#b(e)}
              ${this.#v(e)}
           </div>`:S}
      </devtools-report-section>
      <div class="gray-text">
        ${e.reason}
      </div>
      ${this.#S(e.details)}
      ${this.#w(t)}
    `}}customElements.define("devtools-resources-back-forward-cache-view",wn);const bn=new CSSStyleSheet;bn.replaceSync(`/*
 * Copyright (c) 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 0;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=bounceTrackingMitigationsView.css */
`);const{html:yt}=ne,et={bounceTrackingMitigationsTitle:"Bounce tracking mitigations",forceRun:"Force run",runningMitigations:"Running",stateDeletedFor:"State was deleted for the following sites:",checkingPotentialTrackers:"Checking for potential bounce tracking sites.",learnMore:"Learn more: Bounce Tracking Mitigations",noPotentialBounceTrackersIdentified:"State was not cleared for any potential bounce tracking sites. Either none were identified or third-party cookies are not blocked.",featureDisabled:'Bounce tracking mitigations are disabled. To enable them, set the flag at {PH1} to "Enabled With Deletion".',featureFlag:"Bounce Tracking Mitigations Feature Flag"},Sn=P("panels/application/components/BounceTrackingMitigationsView.ts",et),Ct=B.bind(void 0,Sn);class yn extends Ue{#t=this.attachShadow({mode:"open"});#e=[];#i="Result";#r=!1;#s=!1;connectedCallback(){this.#t.adoptedStyleSheets=[bn],this.#n()}async#n(){re(yt`
      <devtools-report .data=${{reportTitle:Ct(et.bounceTrackingMitigationsTitle)}}
      jslog=${Z("bounce-tracking-mitigations")}>
        ${await this.#o()}
      </devtools-report>
    `,this.#t,{host:this})}async#o(){if(this.#r||await this.#h(),this.#i==="Disabled"){const e=new Xr;return e.href="chrome://flags/#bounce-tracking-mitigations",e.textContent=Ct(et.featureFlag),yt`
        <devtools-report-section>
          ${rt(Sn,et.featureDisabled,{PH1:e})}
        </devtools-report-section>
      `}return yt`
      <devtools-report-section>
        ${this.#a()}
      </devtools-report-section>
        ${this.#d()}
      <devtools-report-divider>
      </devtools-report-divider>
      <devtools-report-section>
        <x-link href="https://privacycg.github.io/nav-tracking-mitigations/#bounce-tracking-mitigations" class="link"
        jslog=${Je("learn-more").track({click:!0})}>
          ${Ct(et.learnMore)}
        </x-link>
      </devtools-report-section>
    `}#a(){const e=this.#i==="Running";return yt`
      <devtools-button
        aria-label=${Ct(et.forceRun)}
        .disabled=${e}
        .spinner=${e}
        .variant=${"primary"}
        @click=${this.#c}
        jslog=${de("force-run").track({click:!0})}>
        ${e?yt`
          ${Ct(et.runningMitigations)}`:`
          ${Ct(et.forceRun)}
        `}
      </devtools-button>
    `}#d(){if(!this.#s)return yt``;if(this.#e.length===0)return yt`
        <devtools-report-section>
        ${this.#i==="Running"?yt`
          ${Ct(et.checkingPotentialTrackers)}`:`
          ${Ct(et.noPotentialBounceTrackersIdentified)}
        `}
        </devtools-report-section>
      `;const e={columns:[{id:"sites",title:Ct(et.stateDeletedFor),widthWeighting:10,hideable:!1,visible:!0,sortable:!0}],rows:this.#u(),initialSort:{columnId:"sites",direction:"ASC"}};return yt`
      <devtools-report-section>
        <devtools-data-grid-controller .data=${e}>
        </devtools-data-grid-controller>
      </devtools-report-section>
    `}async#c(){const e=w.instance().primaryPageTarget();if(!e)return;this.#s=!0,this.#i="Running",this.#n();const t=await e.storageAgent().invoke_runBounceTrackingMitigations();this.#e=[],t.deletedSites.forEach(i=>{this.#e.push(i)}),this.#l()}#l(){this.#i="Result",this.#n()}#u(){return this.#e.map(t=>({cells:[{columnId:"sites",value:t}]}))}async#h(){this.#r=!0;const e=w.instance().primaryPageTarget();e&&((await e.systemInfo().invoke_getFeatureState({featureState:"DIPS"})).featureEnabled||(this.#i="Disabled"))}}customElements.define("devtools-bounce-tracking-mitigations-view",yn);const Ar=new CSSStyleSheet;Ar.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

.reporting-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.reporting-header {
  font-size: 15px;
  background-color: var(--sys-color-surface2);
  padding: 1px 4px;
}

.reporting-placeholder {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  min-width: min-content;
  text-align: center;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
}

.inline-icon {
  vertical-align: text-bottom;
}

/*# sourceURL=reportingApiGrid.css */
`);const Cn={noEndpointsToDisplay:"No endpoints to display"},Xd=P("panels/application/components/EndpointsGrid.ts",Cn),Qd=B.bind(void 0,Xd),{render:Zd,html:Mr}=ne;class Dn extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=new Map;connectedCallback(){this.#t.adoptedStyleSheets=[Ar],this.#i()}set data(e){this.#e=e.endpoints,this.#i()}#i(){const e={columns:[{id:"origin",title:I("Origin"),widthWeighting:30,hideable:!1,visible:!0},{id:"name",title:I("Name"),widthWeighting:20,hideable:!1,visible:!0},{id:"url",title:I("URL"),widthWeighting:30,hideable:!1,visible:!0}],rows:this.#r()};Zd(Mr`
      <div class="reporting-container" jslog=${Ce("endpoints")}>
        <div class="reporting-header">${I("Endpoints")}</div>
        ${this.#e.size>0?Mr`
          <devtools-data-grid-controller .data=${e}>
          </devtools-data-grid-controller>
        `:Mr`
          <div class="reporting-placeholder">
            <div>${Qd(Cn.noEndpointsToDisplay)}</div>
          </div>
        `}
      </div>
    `,this.#t,{host:this})}#r(){return Array.from(this.#e).map(([e,t])=>t.map(i=>({cells:[{columnId:"origin",value:e},{columnId:"name",value:i.groupName},{columnId:"url",value:i.url}]}))).flat()}}customElements.define("devtools-resources-endpoints-grid",Dn);const kn=new CSSStyleSheet;kn.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

button.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

/*# sourceURL=stackTraceLinkButton.css */
`);const En=new CSSStyleSheet;En.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.stack-trace-row {
  display: flex;
}

.stack-trace-function-name {
  width: 100px;
}

.stack-trace-source-location {
  display: flex;
  overflow: hidden;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stack-trace-source-location .text-ellipsis {
  padding-right: 2px;
}

.ignore-list-link {
  opacity: 60%;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: var(--sys-size-6);

  &:focus-visible {
    outline: 2px solid var(--sys-color-state-focus-ring);
    outline-offset: 0;
    border-radius: var(--sys-shape-corner-extra-small);
  }
}

/*# sourceURL=stackTraceRow.css */
`);const{html:Ht}=ne,Ui={cannotRenderStackTrace:"Cannot render stack trace",showSMoreFrames:"{n, plural, =1 {Show # more frame} other {Show # more frames}}",showLess:"Show less",creationStackTrace:"Frame Creation `Stack Trace`"},el=P("panels/application/components/StackTrace.ts",Ui),pr=B.bind(void 0,el);class tl extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=null;set data(e){this.#e=e.stackTraceRowItem,this.#i()}connectedCallback(){this.#t.adoptedStyleSheets=[En]}#i(){this.#e&&re(Ht`
      <div class="stack-trace-row">
              <div class="stack-trace-function-name text-ellipsis" title=${this.#e.functionName}>
                ${this.#e.functionName}
              </div>
              <div class="stack-trace-source-location">
                ${this.#e.link?Ht`<div class="text-ellipsis">\xA0@\xA0${this.#e.link}</div>`:S}
              </div>
            </div>
    `,this.#t,{host:this})}}class il extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=()=>{};#i=null;#r=!1;set data(e){this.#e=e.onShowAllClick,this.#i=e.hiddenCallFramesCount,this.#r=e.expandedView,this.#s()}connectedCallback(){this.#t.adoptedStyleSheets=[kn]}#s(){if(!this.#i)return;const e=this.#r?pr(Ui.showLess):pr(Ui.showSMoreFrames,{n:this.#i});re(Ht`
      <div class="stack-trace-row">
          <button class="link" @click=${()=>this.#e()}>
            ${e}
          </button>
        </div>
    `,this.#t,{host:this})}}class rl extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=new wt;#i=[];#r=!1;set data(e){const t=e.frame,{creationStackTrace:i,creationStackTraceTarget:r}=t.getCreationStackTraceData();i&&(this.#i=e.buildStackTraceRows(i,r,this.#e,!0,this.#s.bind(this))),this.#o()}#s(e){this.#i=e,this.#o()}#n(){this.#r=!this.#r,this.#o()}createRowTemplates(){const e=[];let t=0;for(const i of this.#i){let r=!1;if("link"in i&&i.link){const s=wt.uiLocation(i.link);s&&Oa.instance().isUserOrSourceMapIgnoreListedUISourceCode(s.uiSourceCode)&&(r=!0)}(this.#r||!r)&&("functionName"in i&&e.push(Ht`
          <devtools-stack-trace-row data-stack-trace-row .data=${{stackTraceRowItem:i}}></devtools-stack-trace-row>`),"asyncDescription"in i&&e.push(Ht`
            <div>${i.asyncDescription}</div>
          `)),"functionName"in i&&r&&t++}return t&&e.push(Ht`
      <devtools-stack-trace-link-button data-stack-trace-row .data=${{onShowAllClick:this.#n.bind(this),hiddenCallFramesCount:t,expandedView:this.#r}}></devtools-stack-trace-link-button>
      `),e}#o(){if(!this.#i.length){re(Ht`
          <span>${pr(Ui.cannotRenderStackTrace)}</span>
        `,this.#t,{host:this});return}const e=this.createRowTemplates();re(Ht`
        <devtools-expandable-list .data=${{rows:e,title:pr(Ui.creationStackTrace)}}>
        jslog=${os()}>
        </devtools-expandable-list>
      `,this.#t,{host:this})}}customElements.define("devtools-stack-trace-row",tl);customElements.define("devtools-stack-trace-link-button",il);customElements.define("devtools-resources-stack-trace",rl);/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author lwe@google.com (Lukas Weichselbaum)
 */class gr{type;description;severity;directive;value;constructor(e,t,i,r,s){this.type=e,this.description=t,this.severity=i,this.directive=r,this.value=s}static getHighestSeverity(e){if(e.length===0)return wi.NONE;const t=e.map(r=>r.severity),i=(r,s)=>r<s?r:s;return t.reduce(i,wi.NONE)}equals(e){return e instanceof gr?e.type===this.type&&e.description===this.description&&e.severity===this.severity&&e.directive===this.directive&&e.value===this.value:!1}}var wi;(function(n){n[n.HIGH=10]="HIGH",n[n.SYNTAX=20]="SYNTAX",n[n.MEDIUM=30]="MEDIUM",n[n.HIGH_MAYBE=40]="HIGH_MAYBE",n[n.STRICT_CSP=45]="STRICT_CSP",n[n.MEDIUM_MAYBE=50]="MEDIUM_MAYBE",n[n.INFO=60]="INFO",n[n.NONE=100]="NONE"})(wi||(wi={}));var mr;(function(n){n[n.MISSING_SEMICOLON=100]="MISSING_SEMICOLON",n[n.UNKNOWN_DIRECTIVE=101]="UNKNOWN_DIRECTIVE",n[n.INVALID_KEYWORD=102]="INVALID_KEYWORD",n[n.NONCE_CHARSET=106]="NONCE_CHARSET",n[n.MISSING_DIRECTIVES=300]="MISSING_DIRECTIVES",n[n.SCRIPT_UNSAFE_INLINE=301]="SCRIPT_UNSAFE_INLINE",n[n.SCRIPT_UNSAFE_EVAL=302]="SCRIPT_UNSAFE_EVAL",n[n.PLAIN_URL_SCHEMES=303]="PLAIN_URL_SCHEMES",n[n.PLAIN_WILDCARD=304]="PLAIN_WILDCARD",n[n.SCRIPT_ALLOWLIST_BYPASS=305]="SCRIPT_ALLOWLIST_BYPASS",n[n.OBJECT_ALLOWLIST_BYPASS=306]="OBJECT_ALLOWLIST_BYPASS",n[n.NONCE_LENGTH=307]="NONCE_LENGTH",n[n.IP_SOURCE=308]="IP_SOURCE",n[n.DEPRECATED_DIRECTIVE=309]="DEPRECATED_DIRECTIVE",n[n.SRC_HTTP=310]="SRC_HTTP",n[n.STRICT_DYNAMIC=400]="STRICT_DYNAMIC",n[n.STRICT_DYNAMIC_NOT_STANDALONE=401]="STRICT_DYNAMIC_NOT_STANDALONE",n[n.NONCE_HASH=402]="NONCE_HASH",n[n.UNSAFE_INLINE_FALLBACK=403]="UNSAFE_INLINE_FALLBACK",n[n.ALLOWLIST_FALLBACK=404]="ALLOWLIST_FALLBACK",n[n.IGNORED=405]="IGNORED",n[n.REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS=500]="REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS",n[n.REPORTING_DESTINATION_MISSING=600]="REPORTING_DESTINATION_MISSING",n[n.REPORT_TO_ONLY=601]="REPORT_TO_ONLY"})(mr||(mr={}));/**
 * @fileoverview CSP definitions and helper functions.
 * @author lwe@google.com (Lukas Weichselbaum)
 *
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{directives={};clone(){const e=new fr;for(const[t,i]of Object.entries(this.directives))i&&(e.directives[t]=[...i]);return e}convertToString(){let e="";for(const[t,i]of Object.entries(this.directives)){if(e+=t,i!==void 0)for(let r,s=0;r=i[s];s++)e+=" ",e+=r;e+="; "}return e}getEffectiveCsp(e,t){const i=t||[],r=this.clone(),s=r.getEffectiveDirective(G.SCRIPT_SRC),o=this.directives[s]||[],a=r.directives[s];if(a&&(r.policyHasScriptNonces()||r.policyHasScriptHashes()))if(e>=Bi.CSP2)o.includes(pt.UNSAFE_INLINE)&&(Xi(a,pt.UNSAFE_INLINE),i.push(new gr(mr.IGNORED,"unsafe-inline is ignored if a nonce or a hash is present. (CSP2 and above)",wi.NONE,s,pt.UNSAFE_INLINE)));else for(const d of o)(d.startsWith("'nonce-")||d.startsWith("'sha"))&&Xi(a,d);if(a&&this.policyHasStrictDynamic())if(e>=Bi.CSP3)for(const d of o)(!d.startsWith("'")||d===pt.SELF||d===pt.UNSAFE_INLINE)&&(Xi(a,d),i.push(new gr(mr.IGNORED,"Because of strict-dynamic this entry is ignored in CSP3 and above",wi.NONE,s,d)));else Xi(a,pt.STRICT_DYNAMIC);return e<Bi.CSP3&&(delete r.directives[G.REPORT_TO],delete r.directives[G.WORKER_SRC],delete r.directives[G.MANIFEST_SRC],delete r.directives[G.TRUSTED_TYPES],delete r.directives[G.REQUIRE_TRUSTED_TYPES_FOR]),r}getEffectiveDirective(e){return!(e in this.directives)&&sl.includes(e)?G.DEFAULT_SRC:e}getEffectiveDirectives(e){return[...new Set(e.map(i=>this.getEffectiveDirective(i)))]}policyHasScriptNonces(){const e=this.getEffectiveDirective(G.SCRIPT_SRC);return(this.directives[e]||[]).some(i=>ll(i))}policyHasScriptHashes(){const e=this.getEffectiveDirective(G.SCRIPT_SRC);return(this.directives[e]||[]).some(i=>ul(i))}policyHasStrictDynamic(){const e=this.getEffectiveDirective(G.SCRIPT_SRC);return(this.directives[e]||[]).includes(pt.STRICT_DYNAMIC)}}var pt;(function(n){n.SELF="'self'",n.NONE="'none'",n.UNSAFE_INLINE="'unsafe-inline'",n.UNSAFE_EVAL="'unsafe-eval'",n.WASM_EVAL="'wasm-eval'",n.WASM_UNSAFE_EVAL="'wasm-unsafe-eval'",n.STRICT_DYNAMIC="'strict-dynamic'",n.UNSAFE_HASHED_ATTRIBUTES="'unsafe-hashed-attributes'",n.UNSAFE_HASHES="'unsafe-hashes'",n.REPORT_SAMPLE="'report-sample'",n.BLOCK="'block'",n.ALLOW="'allow'"})(pt||(pt={}));var js;(function(n){n.SCRIPT="'script'"})(js||(js={}));var G;(function(n){n.CHILD_SRC="child-src",n.CONNECT_SRC="connect-src",n.DEFAULT_SRC="default-src",n.FONT_SRC="font-src",n.FRAME_SRC="frame-src",n.IMG_SRC="img-src",n.MEDIA_SRC="media-src",n.OBJECT_SRC="object-src",n.SCRIPT_SRC="script-src",n.SCRIPT_SRC_ATTR="script-src-attr",n.SCRIPT_SRC_ELEM="script-src-elem",n.STYLE_SRC="style-src",n.STYLE_SRC_ATTR="style-src-attr",n.STYLE_SRC_ELEM="style-src-elem",n.PREFETCH_SRC="prefetch-src",n.MANIFEST_SRC="manifest-src",n.WORKER_SRC="worker-src",n.BASE_URI="base-uri",n.PLUGIN_TYPES="plugin-types",n.SANDBOX="sandbox",n.DISOWN_OPENER="disown-opener",n.FORM_ACTION="form-action",n.FRAME_ANCESTORS="frame-ancestors",n.NAVIGATE_TO="navigate-to",n.REPORT_TO="report-to",n.REPORT_URI="report-uri",n.BLOCK_ALL_MIXED_CONTENT="block-all-mixed-content",n.UPGRADE_INSECURE_REQUESTS="upgrade-insecure-requests",n.REFLECTED_XSS="reflected-xss",n.REFERRER="referrer",n.REQUIRE_SRI_FOR="require-sri-for",n.TRUSTED_TYPES="trusted-types",n.REQUIRE_TRUSTED_TYPES_FOR="require-trusted-types-for",n.WEBRTC="webrtc"})(G||(G={}));const sl=[G.CHILD_SRC,G.CONNECT_SRC,G.DEFAULT_SRC,G.FONT_SRC,G.FRAME_SRC,G.IMG_SRC,G.MANIFEST_SRC,G.MEDIA_SRC,G.OBJECT_SRC,G.SCRIPT_SRC,G.SCRIPT_SRC_ATTR,G.SCRIPT_SRC_ELEM,G.STYLE_SRC,G.STYLE_SRC_ATTR,G.STYLE_SRC_ELEM,G.WORKER_SRC];var Bi;(function(n){n[n.CSP1=1]="CSP1",n[n.CSP2=2]="CSP2",n[n.CSP3=3]="CSP3"})(Bi||(Bi={}));function nl(n){return Object.values(G).includes(n)}function ol(n){return Object.values(pt).includes(n)}function al(n){return new RegExp("^[a-zA-Z][+a-zA-Z0-9.-]*:$").test(n)}const dl=new RegExp("^'nonce-(.+)'$");function ll(n,e){return dl.test(n)}const cl=new RegExp("^'(sha256|sha384|sha512)-(.+)'$");function ul(n,e){return cl.test(n)}function Xi(n,e){if(n.includes(e)){const t=n.findIndex(i=>e===i);n.splice(t,1)}}/**
 * @fileoverview Collection of CSP evaluation checks.
 * @author lwe@google.com (Lukas Weichselbaum)
 *
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G.SCRIPT_SRC,G.OBJECT_SRC,G.BASE_URI;/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author lwe@google.com (Lukas Weichselbaum)
 */class hl{csp;constructor(e){this.csp=new fr,this.parse(e)}parse(e){this.csp=new fr;const t=e.split(";");for(let i=0;i<t.length;i++){const s=t[i].trim().match(/\S+/g);if(Array.isArray(s)){const o=s[0].toLowerCase();if(o in this.csp.directives)continue;nl(o);const a=[];for(let d,h=1;d=s[h];h++)d=pl(d),a.includes(d)||a.push(d);this.csp.directives[o]=a}}return this.csp}}function pl(n){n=n.trim();const e=n.toLowerCase();return ol(e)||al(n)?e:n}const An=new CSSStyleSheet;An.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

button ~ .text-ellipsis {
  padding-left: 2px;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  padding: 0;
}

button.link {
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  height: 16px;
}

button.link:has(devtools-icon) {
  margin-top: 5px;
}

devtools-button.help-button {
  top: 4px;
  position: relative;
}

button.text-link {
  padding-left: 2px;
  height: 26px;
}

.inline-button {
  padding-left: 1ex;
}

.inline-comment {
  padding-left: 1ex;
  white-space: pre-line;
}

.inline-comment::before {
  content: "(";
}

.inline-comment::after {
  content: ")";
}

.inline-name {
  color: var(--sys-color-token-subtle);
  padding-right: 4px;
  user-select: none;
  white-space: pre-line;
}

.inline-items {
  display: flex;
}

.span-cols {
  grid-column-start: span 2;
  margin: 0 0 8px 30px;
  line-height: 28px;
}

.without-min-width {
  min-width: auto;
}

.bold {
  font-weight: bold;
}

.link:not(button):has(devtools-icon) {
  vertical-align: baseline;
  margin-inline-start: 3px;
}

.inline-icon {
  margin-bottom: -5px;
  width: 18px;
  height: 18px;
  vertical-align: baseline;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=frameDetailsReportView.css */
`);const Tn=new CSSStyleSheet;Tn.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host .badge-error {
  --override-adorner-text-color: var(--sys-color-error-bright);
  --override-adorner-border-color: var(--sys-color-error-bright);
}

:host .badge-success {
  --override-adorner-text-color: var(--sys-color-tertiary);
  --override-adorner-border-color: var(--sys-color-tertiary);
}

:host .badge-secondary {
  --override-adorner-text-color: var(--sys-color-token-subtle);
  --override-adorner-border-color: var(--sys-color-token-subtle);
}

/* Use mono-space source code font to assist reading of adorner content */
:host {
  font-family: var(--source-code-font-family);
}

/*# sourceURL=badge.css */
`);const Fn=new CSSStyleSheet;Fn.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.content {
  display: grid;
  grid-template-columns: min-content 1fr;
}

.key {
  color: var(--sys-color-token-subtle);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
}

.value {
  color: var(--sys-color-token-subtle);
  margin-inline-start: 0;
  padding: 0 6px;
}

.error-text {
  color: var(--sys-color-error-bright);
  font-weight: bold;
}

/*# sourceURL=originTrialTokenRows.css */
`);const In=new CSSStyleSheet;In.replaceSync(`/*
 * Copyright (c) 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.status-badge {
  border-radius: 4px;
  padding: 4px;
  background: var(--sys-color-neutral-container);

  & > devtools-icon {
    vertical-align: sub;
  }
}

/*# sourceURL=originTrialTreeView.css */
`);const{html:Oe,Directives:{ifDefined:gl}}=ne,Ke={origin:"Origin",trialName:"Trial Name",expiryTime:"Expiry Time",usageRestriction:"Usage Restriction",isThirdParty:"Third Party",matchSubDomains:"Subdomain Matching",rawTokenText:"Raw Token",status:"Token Status",token:"Token",tokens:"{PH1} tokens",noTrialTokens:"No trial tokens"},ml=P("panels/application/components/OriginTrialTreeView.ts",Ke),it=B.bind(void 0,ml);class fl extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=new Ua;set data(e){this.#i(e)}connectedCallback(){this.#t.adoptedStyleSheets=[Tn]}#i(e){const t=document.createElement("span");t.textContent=e.badgeContent,this.#e.data={name:"badge",content:t},this.#e.classList.add(`badge-${e.style}`),re(Oe`
      ${this.#e}
    `,this.#t,{host:this})}}customElements.define("devtools-resources-origin-trial-tree-view-badge",fl);function vl(n){return{treeNodeData:n,id:"OriginTrialTreeNode#"+n.trialName,children:async()=>n.tokensWithStatus.length>1?n.tokensWithStatus.map(wl):xn(n.tokensWithStatus[0]),renderer:e=>{const t=e.treeNodeData,i=Oe`
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:it(Ke.tokens,{PH1:t.tokensWithStatus.length}),style:"secondary"}}></devtools-resources-origin-trial-tree-view-badge>
      `;return Oe`
        ${t.trialName}
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:t.status,style:t.status==="Enabled"?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>
        ${t.tokensWithStatus.length>1?i:S}
      `}}}function wl(n){return{treeNodeData:n.status,id:"TokenNode#"+n.rawTokenText,children:async()=>xn(n),renderer:(e,t)=>{const i=e.treeNodeData,r=Oe`
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:i,style:i==="Success"?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>
      `;return Oe`${it(Ke.token)} ${t.isExpanded?S:r}`}}}function bl(n){return Oe`
    <devtools-resources-origin-trial-token-rows .data=${{node:n}}>
    </devtools-resources-origin-trial-token-rows>
    `}function xn(n){return[{treeNodeData:n,id:"TokenDetailsNode#"+n.rawTokenText,renderer:bl},Sl(n.rawTokenText)]}function Sl(n){return{treeNodeData:it(Ke.rawTokenText),id:"TokenRawTextContainerNode#"+n,children:async()=>[{treeNodeData:n,id:"TokenRawTextNode#"+n,renderer:e=>{const t=e.treeNodeData;return Oe`
        <div style="overflow-wrap: break-word;">
          ${t}
        </div>
        `}}]}}function yl(n){return Oe`${String(n.treeNodeData)}`}class Cl extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=null;#i=[];#r=new Intl.DateTimeFormat(Ha.instance().locale,{dateStyle:"long",timeStyle:"long"});set data(e){this.#e=e.node.treeNodeData,this.#n()}connectedCallback(){this.#t.adoptedStyleSheets=[Fn],this.#o()}#s=(e,t)=>Oe`
        <div class=${gl(t?"error-text":void 0)}>
          ${e}
        </div>`;#n(){this.#e?.parsedToken&&(this.#i=[{name:it(Ke.origin),value:this.#s(this.#e.parsedToken.origin,this.#e.status==="WrongOrigin")},{name:it(Ke.expiryTime),value:this.#s(this.#r.format(this.#e.parsedToken.expiryTime*1e3),this.#e.status==="Expired")},{name:it(Ke.usageRestriction),value:this.#s(this.#e.parsedToken.usageRestriction)},{name:it(Ke.isThirdParty),value:this.#s(this.#e.parsedToken.isThirdParty.toString())},{name:it(Ke.matchSubDomains),value:this.#s(this.#e.parsedToken.matchSubDomains.toString())}],this.#e.status==="UnknownTrial"&&(this.#i=[{name:it(Ke.trialName),value:this.#s(this.#e.parsedToken.trialName)},...this.#i]))}#o(){if(!this.#e)return;const t=[{name:it(Ke.status),value:Oe`
          <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:this.#e.status,style:this.#e.status==="Success"?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>`},...this.#i].map(i=>Oe`
          <div class="key">${i.name}</div>
          <div class="value">${i.value}</div>
          `);re(Oe`
      <div class="content">
        ${t}
      </div>
    `,this.#t,{host:this})}}customElements.define("devtools-resources-origin-trial-token-rows",Cl);class Rn extends HTMLElement{#t=this.attachShadow({mode:"open"});set data(e){this.#e(e.trials)}connectedCallback(){this.#t.adoptedStyleSheets=[In]}#e(e){if(!e.length){re(Oe`
    <span class="status-badge">
      <devtools-icon
          .data=${{iconName:"clear",color:"var(--icon-default)",width:"16px",height:"16px"}}
        >
      </devtools-icon>
      <span>${it(Ke.noTrialTokens)}</span>
    </span>`,this.#t,{host:this});return}re(Oe`
      <devtools-tree-outline .data=${{tree:e.map(vl),defaultRenderer:yl}}>
      </devtools-tree-outline>
    `,this.#t,{host:this})}}customElements.define("devtools-resources-origin-trial-tree-view",Rn);const Pn=new CSSStyleSheet;Pn.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: contents;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

button.link {
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

.policies-list {
  padding-top: 3px;
}

.permissions-row {
  display: flex;
  line-height: 22px;
}

.permissions-row div {
  padding-right: 5px;
}

.feature-name {
  width: 135px;
}

.allowed-icon {
  vertical-align: sub;
}

.block-reason {
  width: 215px;
}

/*# sourceURL=permissionsPolicySection.css */
`);const{html:di}=ne,tt={showDetails:"Show details",hideDetails:"Hide details",allowedFeatures:"Allowed Features",disabledFeatures:"Disabled Features",clickToShowHeader:'Click to reveal the request whose "`Permissions-Policy`" HTTP header disables this feature.',clickToShowIframe:"Click to reveal the top-most iframe which does not allow this feature in the elements panel.",disabledByIframe:'missing in iframe "`allow`" attribute',disabledByHeader:'disabled by "`Permissions-Policy`" header',disabledByFencedFrame:"disabled inside a `fencedframe`"},Dl=P("panels/application/components/PermissionsPolicySection.ts",tt),dt=B.bind(void 0,Dl),kl=Pt.instance();function Li(n,e,t,i){return di`
  <devtools-button
    .iconName=${n}
    title=${e}
    .variant=${"icon"}
    .size=${"SMALL"}
    @click=${t}
    jslog=${de().track({click:!0}).context(i)}></devtools-button>
  `}class El extends HTMLElement{#t=this.attachShadow({mode:"open"});#e={policies:[],showDetails:!1};set data(e){this.#e=e,this.#n()}connectedCallback(){this.#t.adoptedStyleSheets=[Pn]}#i(){this.#e.showDetails=!this.#e.showDetails,this.#n()}#r(){const e=this.#e.policies.filter(t=>t.allowed).map(t=>t.feature).sort();return e.length?di`
      <devtools-report-key>${dt(tt.allowedFeatures)}</devtools-report-key>
      <devtools-report-value>
        ${e.join(", ")}
      </devtools-report-value>
    `:S}async#s(){const e=this.#e.policies.filter(r=>!r.allowed).sort((r,s)=>r.feature.localeCompare(s.feature));if(!e.length)return S;if(!this.#e.showDetails)return di`
        <devtools-report-key>${dt(tt.disabledFeatures)}</devtools-report-key>
        <devtools-report-value>
          ${e.map(r=>r.feature).join(", ")}
          <devtools-button
          .variant=${"outlined"}
          @click=${()=>this.#i()}
          jslog=${de("show-disabled-features-details").track({click:!0})}>${dt(tt.showDetails)}
        </devtools-button>
        </devtools-report-value>
      `;const t=dr.instance(),i=await Promise.all(e.map(async r=>{const s=r.locator?t.getFrame(r.locator.frameId):null,o=r.locator?.blockReason,a=await(o==="IframeAttribute"&&s&&s.getOwnerDOMNodeOrDocument()),d=s&&s.resourceForURL(s.url),h=o==="Header"&&d&&d.request,p=(()=>{switch(o){case"IframeAttribute":return dt(tt.disabledByIframe);case"Header":return dt(tt.disabledByHeader);case"InFencedFrameTree":return dt(tt.disabledByFencedFrame);default:return""}})(),b=async()=>{if(!h)return;const C=h.responseHeaderValue("permissions-policy")?"permissions-policy":"feature-policy",v=br.responseHeaderMatch(h,{name:C,value:""});await Ie(v)};return di`
        <div class="permissions-row">
          <div>
            <devtools-icon class="allowed-icon"
              .data=${{color:"var(--icon-error)",iconName:"cross-circle",width:"20px",height:"20px"}}>
            </devtools-icon>
          </div>
          <div class="feature-name text-ellipsis">
            ${r.feature}
          </div>
          <div class="block-reason">${p}</div>
          <div>
            ${a?Li("code-circle",dt(tt.clickToShowIframe),()=>Ie(a),"reveal-in-elements"):S}
            ${h?Li("arrow-up-down-circle",dt(tt.clickToShowHeader),b,"reveal-in-network"):S}
          </div>
        </div>
      `}));return di`
      <devtools-report-key>${dt(tt.disabledFeatures)}</devtools-report-key>
      <devtools-report-value class="policies-list">
        ${i}
        <div class="permissions-row">
        <devtools-button
          .variant=${"outlined"}
          @click=${()=>this.#i()}
          jslog=${de("hide-disabled-features-details").track({click:!0})}>${dt(tt.hideDetails)}
        </devtools-button>
        </div>
      </devtools-report-value>
    `}async#n(){await kl.write("PermissionsPolicySection render",()=>{re(di`
          <devtools-report-section-header>${I("Permissions Policy")}</devtools-report-section-header>
          ${this.#r()}
          ${rr(this.#s(),S)}
          <devtools-report-divider></devtools-report-divider>
        `,this.#t,{host:this})})}}customElements.define("devtools-resources-permissions-policy-section",El);const{html:K}=ne,A={additionalInformation:"Additional Information",thisAdditionalDebugging:"This additional (debugging) information is shown because the 'Protocol Monitor' experiment is enabled.",frameId:"Frame ID",document:"Document",url:"URL",clickToRevealInSourcesPanel:"Click to reveal in Sources panel",clickToRevealInNetworkPanel:"Click to reveal in Network panel",unreachableUrl:"Unreachable URL",clickToRevealInNetworkPanelMight:"Click to reveal in Network panel (might require page reload)",origin:"Origin",ownerElement:"Owner Element",clickToRevealInElementsPanel:"Click to reveal in Elements panel",adStatus:"Ad Status",rootDescription:"This frame has been identified as the root frame of an ad",root:"root",childDescription:"This frame has been identified as a child frame of an ad",child:"child",securityIsolation:"Security & Isolation",contentSecurityPolicy:"Content Security Policy (CSP)",secureContext:"Secure Context",yes:"Yes",no:"No",crossoriginIsolated:"Cross-Origin Isolated",localhostIsAlwaysASecureContext:"`Localhost` is always a secure context",aFrameAncestorIsAnInsecure:"A frame ancestor is an insecure context",theFramesSchemeIsInsecure:"The frame's scheme is insecure",reportingTo:"reporting to",apiAvailability:"API availability",availabilityOfCertainApisDepends:"Availability of certain APIs depends on the document being cross-origin isolated.",availableTransferable:"available, transferable",availableNotTransferable:"available, not transferable",unavailable:"unavailable",sharedarraybufferConstructorIs:"`SharedArrayBuffer` constructor is available and `SABs` can be transferred via `postMessage`",sharedarraybufferConstructorIsAvailable:"`SharedArrayBuffer` constructor is available but `SABs` cannot be transferred via `postMessage`",willRequireCrossoriginIsolated:"⚠️ will require cross-origin isolated context in the future",requiresCrossoriginIsolated:"requires cross-origin isolated context",transferRequiresCrossoriginIsolatedPermission:"`SharedArrayBuffer` transfer requires enabling the permission policy:",available:"available",thePerformanceAPI:"The `performance.measureUserAgentSpecificMemory()` API is available",thePerformancemeasureuseragentspecificmemory:"The `performance.measureUserAgentSpecificMemory()` API is not available",measureMemory:"Measure Memory",learnMore:"Learn more",creationStackTrace:"Frame Creation `Stack Trace`",creationStackTraceExplanation:"This frame was created programmatically. The `stack trace` shows where this happened.",parentIsAdExplanation:"This frame is considered an ad frame because its parent frame is an ad frame.",matchedBlockingRuleExplanation:"This frame is considered an ad frame because its current (or previous) main document is an ad resource.",createdByAdScriptExplanation:"There was an ad script in the `(async) stack` when this frame was created. Examining the creation `stack trace` of this frame might provide more insight.",creatorAdScript:"Creator Ad Script",none:"None",originTrialsExplanation:"Origin trials give you access to a new or experimental feature."},Al=P("panels/application/components/FrameDetailsView.ts",A),T=B.bind(void 0,Al),Tl=Pt.instance();class Zr extends Ue{#t=this.attachShadow({mode:"open"});#e;#i;#r=!1;#s=null;#n={policies:[],showDetails:!1};#o=new Rn;#a=new wt;#d=null;constructor(e){super(),this.#e=e,this.render()}connectedCallback(){this.parentElement?.classList.add("overflow-auto"),this.#r=lr.isEnabled("protocol-monitor"),this.#t.adoptedStyleSheets=[An]}async render(){this.#d=await this.#e?.parentFrame()?.getAdScriptId(this.#e?.id)||null;const e=this.#d?.debuggerId?await Va.modelForDebuggerId(this.#d?.debuggerId):null;this.#i=e?.target(),!this.#s&&this.#e&&(this.#s=this.#e.getPermissionsPolicyState()),await Tl.write("FrameDetailsView render",()=>{this.#e&&re(K`
        <devtools-report .data=${{reportTitle:this.#e.displayName()}}
        jslog=${Z("frames")}>
          ${this.#l()}
          ${this.#D()}
          ${this.#x()}
          ${this.#c()}
          ${rr(this.#s?.then(t=>(this.#n.policies=t||[],K`
              <devtools-resources-permissions-policy-section
                .data=${this.#n}
              >
              </devtools-resources-permissions-policy-section>
            `)),S)}
          ${this.#r?this.#B():S}
        </devtools-report>
      `,this.#t,{host:this})})}#c(){return this.#e?(this.#o.classList.add("span-cols"),this.#e.getOriginTrials().then(e=>{this.#o.data={trials:e}}),K`
    <devtools-report-section-header>${I("Origin trials")}</devtools-report-section-header>
    <div class="span-cols">
        ${T(A.originTrialsExplanation)}
        <x-link href="https://developer.chrome.com/docs/web-platform/origin-trials/" class="link"
        jslog=${Je("learn-more.origin-trials").track({click:!0})}>${T(A.learnMore)}</x-link>
    </div>
    ${this.#o}
    <devtools-report-divider></devtools-report-divider>
    `):S}#l(){return this.#e?K`
      <devtools-report-section-header>${T(A.document)}</devtools-report-section-header>
      <devtools-report-key>${T(A.url)}</devtools-report-key>
      <devtools-report-value>
        <div class="inline-items">
          ${this.#u()}
          ${this.#h()}
          <div class="text-ellipsis" title=${this.#e.url}>${this.#e.url}</div>
        </div>
      </devtools-report-value>
      ${this.#g()}
      ${this.#p()}
      ${rr(this.#v(),S)}
      ${this.#w()}
      ${this.#y()}
      <devtools-report-divider></devtools-report-divider>
    `:S}#u(){if(!this.#e||this.#e.unreachableUrl())return S;const e=this.#m(this.#e);return Li("breakpoint-circle",T(A.clickToRevealInSourcesPanel),()=>Ie(e),"reveal-in-sources")}#h(){if(this.#e){const e=this.#e.resourceForURL(this.#e.url);if(e&&e.request){const t=e.request;return Li("arrow-up-down-circle",T(A.clickToRevealInNetworkPanel),()=>{const i=br.tab(t,"headers-component");return Ie(i)},"reveal-in-network")}}return S}#m(e){for(const t of Wa.instance().projects()){const i=_a.getTargetForProject(t);if(i&&i===e.resourceTreeModel().target()){const r=t.uiSourceCodeForURL(e.url);if(r)return r}}return null}#g(){return!this.#e||!this.#e.unreachableUrl()?S:K`
      <devtools-report-key>${T(A.unreachableUrl)}</devtools-report-key>
      <devtools-report-value>
        <div class="inline-items">
          ${this.#f()}
          <div class="text-ellipsis" title=${this.#e.unreachableUrl()}>${this.#e.unreachableUrl()}</div>
        </div>
      </devtools-report-value>
    `}#f(){if(this.#e){const e=xe.fromString(this.#e.unreachableUrl());if(e)return Li("arrow-up-down-circle",T(A.clickToRevealInNetworkPanelMight),()=>{Ie(ds.filters([{filterType:Qs.Domain,filterValue:e.domain()},{filterType:null,filterValue:e.path}]))},"unreachable-url.reveal-in-network")}return S}#p(){return this.#e&&this.#e.securityOrigin&&this.#e.securityOrigin!=="://"?K`
        <devtools-report-key>${T(A.origin)}</devtools-report-key>
        <devtools-report-value>
          <div class="text-ellipsis" title=${this.#e.securityOrigin}>${this.#e.securityOrigin}</div>
        </devtools-report-value>
      `:S}async#v(){if(this.#e){const e=await this.#e.getOwnerDOMNodeOrDocument();if(e)return K`
          <devtools-report-key>${T(A.ownerElement)}</devtools-report-key>
          <devtools-report-value class="without-min-width">
            <div class="inline-items">
              <button class="link text-link" role="link" tabindex=0 title=${T(A.clickToRevealInElementsPanel)}
                @mouseenter=${()=>this.#e?.highlight()}
                @mouseleave=${()=>Ni.hideDOMNodeHighlight()}
                @click=${()=>Ie(e)}
                jslog=${de("reveal-in-elements").track({click:!0})}
              >
                &lt;${e.nodeName().toLocaleLowerCase()}&gt;
              </button>
            </div>
          </devtools-report-value>
        `}return S}#w(){const e=this.#e?.getCreationStackTraceData();return e&&e.creationStackTrace?K`
        <devtools-report-key title=${T(A.creationStackTraceExplanation)}>${T(A.creationStackTrace)}</devtools-report-key>
        <devtools-report-value
        jslog=${Ce("frame-creation-stack-trace")}
        >
          <devtools-resources-stack-trace .data=${{frame:this.#e,buildStackTraceRows:ja}}>
          </devtools-resources-stack-trace>
        </devtools-report-value>
      `:S}#b(e){switch(e){case"child":return{value:T(A.child),description:T(A.childDescription)};case"root":return{value:T(A.root),description:T(A.rootDescription)}}}#S(e){switch(e){case"CreatedByAdScript":return T(A.createdByAdScriptExplanation);case"MatchedBlockingRule":return T(A.matchedBlockingRuleExplanation);case"ParentIsAd":return T(A.parentIsAdExplanation)}}#y(){if(!this.#e)return S;const e=this.#e.adFrameType();if(e==="none")return S;const t=this.#b(e),i=[K`<div title=${t.description}>${t.value}</div>`];for(const s of this.#e.adFrameStatus()?.explanations||[])i.push(K`<div>${this.#S(s)}</div>`);const r=this.#i?this.#a.linkifyScriptLocation(this.#i,this.#d?.scriptId||null,as,void 0,void 0):null;return K`
      <devtools-report-key>${T(A.adStatus)}</devtools-report-key>
      <devtools-report-value
      jslog=${Ce("ad-status")}>
        <devtools-expandable-list .data=${{rows:i,title:T(A.adStatus)}}></devtools-expandable-list></devtools-report-value>
      ${this.#i?K`
        <devtools-report-key>${T(A.creatorAdScript)}</devtools-report-key>
        <devtools-report-value class="ad-script-link">${r?.setAttribute("jslog",`${Je("ad-script").track({click:!0})}`)}</devtools-report-value>
      `:S}
    `}#D(){return this.#e?K`
      <devtools-report-section-header>${T(A.securityIsolation)}</devtools-report-section-header>
      <devtools-report-key>${T(A.secureContext)}</devtools-report-key>
      <devtools-report-value>
        ${this.#e.isSecureContext()?T(A.yes):T(A.no)}\xA0${this.#k()}
      </devtools-report-value>
      <devtools-report-key>${T(A.crossoriginIsolated)}</devtools-report-key>
      <devtools-report-value>
        ${this.#e.isCrossOriginIsolated()?T(A.yes):T(A.no)}
      </devtools-report-value>
      ${rr(this.#A(),S)}
      <devtools-report-divider></devtools-report-divider>
    `:S}#k(){const e=this.#E();return e?K`<span class="inline-comment">${e}</span>`:S}#E(){switch(this.#e?.getSecureContextType()){case"Secure":return null;case"SecureLocalhost":return T(A.localhostIsAlwaysASecureContext);case"InsecureAncestor":return T(A.aFrameAncestorIsAnInsecure);case"InsecureScheme":return T(A.theFramesSchemeIsInsecure)}return null}async#A(){if(this.#e){const e=this.#e.resourceTreeModel().target().model(Sr),t=e&&await e.getSecurityIsolationStatus(this.#e.id);if(t)return K`
          ${this.#C(t.coep,I("Cross-Origin Embedder Policy (COEP)"),"None")}
          ${this.#C(t.coop,I("Cross-Origin Opener Policy (COOP)"),"UnsafeNone")}
          ${this.#I(t.csp)}
        `}return S}#C(e,t,i){if(!e)return S;const r=e.value!==i,s=!r&&e.reportOnlyValue!==i,o=r?e.reportingEndpoint:e.reportOnlyReportingEndpoint;return K`
      <devtools-report-key>${t}</devtools-report-key>
      <devtools-report-value>
        ${r?e.value:e.reportOnlyValue}
        ${s?K`<span class="inline-comment">report-only</span>`:S}
        ${o?K`<span class="inline-name">${T(A.reportingTo)}</span>${o}`:S}
      </devtools-report-value>
    `}#T(e){const t=new hl(e).csp.directives,i=[];for(const r in t)i.push(K`<div><span class="bold">${r}</span>${": "+t[r]?.join(", ")}</div>`);return i}#F(e){return K`
      <devtools-report-key>${e.isEnforced?I("Content-Security-Policy"):K`${I("Content-Security-Policy-Report-Only")}<devtools-button
          .iconName=${"help"}
          class='help-button'
          .variant=${"icon"}
          .size=${"SMALL"}
          @click=${()=>{window.location.href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only"}}
          jslog=${Je("learn-more.csp-report-only").track({click:!0})}
          ></devtools-button>`}
      </devtools-report-key>
      <devtools-report-value>
        ${e.source==="HTTP"?I("HTTP header"):I("Meta tag")}
        ${this.#T(e.effectiveDirectives)}
      </devtools-report-value>
    `}#I(e){return K`
      <devtools-report-divider></devtools-report-divider>
      <devtools-report-section-header>
        ${T(A.contentSecurityPolicy)}
      </devtools-report-section-header>
      ${e&&e.length?e.map(t=>this.#F(t)):K`
        <devtools-report-key>${I("Content-Security-Policy")}</devtools-report-key>
        <devtools-report-value>
          ${T(A.none)}
        </devtools-report-value>
      `}
    `}#x(){return this.#e?K`
      <devtools-report-section-header>${T(A.apiAvailability)}</devtools-report-section-header>
      <div class="span-cols">
        ${T(A.availabilityOfCertainApisDepends)}
        <x-link href="https://web.dev/why-coop-coep/" class="link" jslog=${Je("learn-more.coop-coep").track({click:!0})}>${T(A.learnMore)}</x-link>
      </div>
      ${this.#R()}
      ${this.#P()}
      <devtools-report-divider></devtools-report-divider>
    `:S}#R(){if(this.#e){const e=this.#e.getGatedAPIFeatures();if(e){let o=function(a){switch(a.getCrossOriginIsolatedContextType()){case"Isolated":return S;case"NotIsolated":return t?K`<span class="inline-comment">${T(A.willRequireCrossoriginIsolated)}</span>`:K`<span class="inline-comment">${T(A.requiresCrossoriginIsolated)}</span>`;case"NotIsolatedFeatureDisabled":if(!i)return K`<span class="inline-comment">${T(A.transferRequiresCrossoriginIsolatedPermission)} <code>cross-origin-isolated</code></span>`;break}return S};const t=e.includes("SharedArrayBuffers"),i=t&&e.includes("SharedArrayBuffersTransferAllowed"),r=T(i?A.availableTransferable:t?A.availableNotTransferable:A.unavailable),s=i?T(A.sharedarraybufferConstructorIs):t?T(A.sharedarraybufferConstructorIsAvailable):"";return K`
          <devtools-report-key>SharedArrayBuffers</devtools-report-key>
          <devtools-report-value title=${s}>
            ${r}\xA0${o(this.#e)}
          </devtools-report-value>
        `}}return S}#P(){if(this.#e){const e=this.#e.isCrossOriginIsolated(),t=T(e?A.available:A.unavailable),i=T(e?A.thePerformanceAPI:A.thePerformancemeasureuseragentspecificmemory);return K`
        <devtools-report-key>${T(A.measureMemory)}</devtools-report-key>
        <devtools-report-value>
          <span title=${i}>${t}</span>\xA0<x-link class="link" href="https://web.dev/monitor-total-page-memory-usage/" jslog=${Je("learn-more.monitor-memory-usage").track({click:!0})}>${T(A.learnMore)}</x-link>
        </devtools-report-value>
      `}return S}#B(){return this.#e?K`
      <devtools-report-section-header
        title=${T(A.thisAdditionalDebugging)}
      >${T(A.additionalInformation)}</devtools-report-section-header>
      <devtools-report-key>${T(A.frameId)}</devtools-report-key>
      <devtools-report-value>
        <div class="text-ellipsis" title=${this.#e.id}>${this.#e.id}</div>
      </devtools-report-value>
      <devtools-report-divider></devtools-report-divider>
    `:S}}customElements.define("devtools-resources-frame-details-view",Zr);const Bn=new CSSStyleSheet;Bn.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  padding: 20px;
}

.heading {
  font-size: 15px;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 20px;
}

.info-icon {
  vertical-align: text-bottom;
  height: 14px;
}

.no-events-message {
  margin-top: 20px;
}

/*# sourceURL=interestGroupAccessGrid.css */
`);const{html:Qi}=ne,jt={allInterestGroupStorageEvents:"All interest group storage events.",eventTime:"Event Time",eventType:"Access Type",groupOwner:"Owner",groupName:"Name",noEvents:"No interest group events recorded."},Fl=P("panels/application/components/InterestGroupAccessGrid.ts",jt),ii=B.bind(void 0,Fl);class Ln extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=[];connectedCallback(){this.#t.adoptedStyleSheets=[Bn],this.#i()}set data(e){this.#e=e,this.#i()}#i(){re(Qi`
      <div>
        <span class="heading">Interest Groups</span>
        <devtools-icon class="info-icon" title=${ii(jt.allInterestGroupStorageEvents)}
          .data=${{iconName:"info",color:"var(--icon-default)",width:"16px"}}>
        </devtools-icon>
        ${this.#r()}
      </div>
    `,this.#t,{host:this})}#r(){if(this.#e.length===0)return Qi`<div class="no-events-message">${ii(jt.noEvents)}</div>`;const e={columns:[{id:"event-time",title:ii(jt.eventTime),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-type",title:ii(jt.eventType),widthWeighting:5,hideable:!1,visible:!0,sortable:!0},{id:"event-group-owner",title:ii(jt.groupOwner),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-group-name",title:ii(jt.groupName),widthWeighting:10,hideable:!1,visible:!0,sortable:!0}],rows:this.#s(),initialSort:{columnId:"event-time",direction:"ASC"}};return Qi`
      <devtools-data-grid-controller .data=${e}></devtools-data-grid-controller>
    `}#s(){return this.#e.map(e=>({cells:[{columnId:"event-time",value:e.accessTime,renderer:this.#n.bind(this)},{columnId:"event-type",value:e.type},{columnId:"event-group-owner",value:e.ownerOrigin},{columnId:"event-group-name",value:e.name}]}))}#n(e){const t=new Date(1e3*e);return Qi`${t.toLocaleString()}`}}customElements.define("devtools-interest-group-access-grid",Ln);const Nn=new CSSStyleSheet;Nn.replaceSync(`/*
 * Copyright (c) 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.devtools-link:focus-visible {
  outline-width: unset;
}

input.devtools-text-input[type="text"] {
  padding: 3px 6px;
  margin-left: 4px;
  margin-right: 4px;
  width: 250px;
  height: 25px;
}

input.devtools-text-input[type="text"]::placeholder {
  color: var(--sys-color-token-subtle);
}

.protocol-handlers-row {
  margin: 10px 0 2px 18px;
}

.inline-icon {
  margin-inline: 4px;
  width: 16px;
  height: 16px;

  &[name="check-circle"] {
    color: var(--icon-checkmark-green);
  }
}

@media (forced-colors: active) {
  .devtools-link:not(.devtools-link-prevent-click) {
    color: linktext;
  }

  .devtools-link:focus-visible {
    background: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=protocolHandlersView.css */
`);const{html:Zi}=ne,Il="https://web.dev/url-protocol-handler/",ht={protocolDetected:"Found valid protocol handler registration in the {PH1}. With the app installed, test the registered protocols.",protocolNotDetected:"Define protocol handlers in the {PH1} to register your app as a handler for custom protocols when your app is installed.",needHelpReadOur:"Need help? Read {PH1}.",protocolHandlerRegistrations:"URL protocol handler registration for PWAs",manifest:"manifest",testProtocol:"Test protocol",dropdownLabel:"Select protocol handler",textboxLabel:"Query parameter or endpoint for protocol handler",textboxPlaceholder:"Enter URL"},es=P("panels/application/components/ProtocolHandlersView.ts",ht),ri=B.bind(void 0,es);class Mn extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=[];#i=as;#r="";#s="";set data(e){const t=this.#i!==e.manifestLink;this.#e=e.protocolHandlers,this.#i=e.manifestLink,t&&this.#n()}#n(){this.#s="",this.#r=this.#e[0]?.protocol??"",this.#u()}#o(){const e=st.create(this.#i,ri(ht.manifest),void 0,void 0,"manifest"),t=this.#e.length>0?ht.protocolDetected:ht.protocolNotDetected;return Zi`
    <div class="protocol-handlers-row status">
            <devtools-icon class="inline-icon"
                                                name=${this.#e.length>0?"check-circle":"info"}>
            </devtools-icon>
            ${rt(es,t,{PH1:e})}
    </div>
    `}#a(){if(this.#e.length===0)return S;const e=this.#e.filter(t=>t.protocol).map(t=>Zi`<option value=${t.protocol} jslog=${qa(t.protocol).track({click:!0})}>${t.protocol}://</option>`);return Zi`
       <div class="protocol-handlers-row">
        <select class="chrome-select protocol-select" @change=${this.#d} aria-label=${ri(ht.dropdownLabel)}>
           ${e}
        </select>
        <input .value=${this.#s} class="devtools-text-input" type="text" @change=${this.#c} aria-label=${ri(ht.textboxLabel)}
        placeholder=${ri(ht.textboxPlaceholder)} />
        <devtools-button .variant=${"primary"} @click=${this.#l}>
            ${ri(ht.testProtocol)}
        </devtools-button>
        </div>
      `}#d=e=>{this.#r=e.target.value};#c=e=>{this.#s=e.target.value,this.#u()};#l=()=>{const e=`${this.#r}://${this.#s}`;ls.openInNewTab(e),fe.actionTaken(cs.CaptureTestProtocolClicked)};connectedCallback(){this.#t.adoptedStyleSheets=[Nn,Vd,Ga]}#u(){const e=st.create(Il,ri(ht.protocolHandlerRegistrations),void 0,void 0,"learn-more");re(Zi`
      ${this.#o()}
      <div class="protocol-handlers-row">
          ${rt(es,ht.needHelpReadOur,{PH1:e})}
      </div>
      ${this.#a()}
    `,this.#t,{host:this})}}customElements.define("devtools-protocol-handlers-view",Mn);const pi={noReportsToDisplay:"No reports to display",status:"Status",destination:"Destination",generatedAt:"Generated at"},xl=P("panels/application/components/ReportsGrid.ts",pi),xi=B.bind(void 0,xl),{render:$n,html:Ri}=ne;class Rl extends HTMLElement{#t=this.attachShadow({mode:"open"});connectedCallback(){this.#t.adoptedStyleSheets=[Ar],this.#e()}#e(){$n(Ri`
      ${xi(pi.status)}
      <x-link href="https://web.dev/reporting-api/#report-status"
      jslog=${Je("report-status").track({click:!0})}>
        <devtools-icon class="inline-icon" .data=${{iconName:"help",color:"var(--icon-link)",width:"16px",height:"16px"}}></devtools-icon>
      </x-link>
    `,this.#t,{host:this})}}class On extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=[];#i=!1;connectedCallback(){this.#t.adoptedStyleSheets=[Ar],this.#i=lr.isEnabled("protocol-monitor"),this.#r()}set data(e){this.#e=e.reports,this.#r()}#r(){const e={columns:[{id:"url",title:I("URL"),widthWeighting:30,hideable:!1,visible:!0},{id:"type",title:I("Type"),widthWeighting:20,hideable:!1,visible:!0},{id:"status",title:xi(pi.status),widthWeighting:20,hideable:!1,visible:!0,titleElement:Ri`
          <devtools-resources-reports-grid-status-header></devtools-resources-reports-grid-status-header>
          `},{id:"destination",title:xi(pi.destination),widthWeighting:20,hideable:!1,visible:!0},{id:"timestamp",title:xi(pi.generatedAt),widthWeighting:20,hideable:!1,visible:!0},{id:"body",title:I("Body"),widthWeighting:20,hideable:!1,visible:!0}],rows:this.#s()};this.#i&&e.columns.unshift({id:"id",title:"ID",widthWeighting:30,hideable:!1,visible:!0}),$n(Ri`
      <div class="reporting-container" jslog=${Ce("reports")}>
        <div class="reporting-header">${I("Reports")}</div>
        ${this.#e.length>0?Ri`
          <devtools-data-grid-controller .data=${e}>
          </devtools-data-grid-controller>
        `:Ri`
          <div class="reporting-placeholder">
            <div>${xi(pi.noReportsToDisplay)}</div>
          </div>
        `}
      </div>
    `,this.#t,{host:this})}#s(){return this.#e.map(e=>({cells:[{columnId:"id",value:e.id},{columnId:"url",value:e.initiatorUrl},{columnId:"type",value:e.type},{columnId:"status",value:e.status},{columnId:"destination",value:e.destination},{columnId:"timestamp",value:new Date(e.timestamp*1e3).toLocaleString()},{columnId:"body",value:JSON.stringify(e.body)}]}))}}customElements.define("devtools-resources-reports-grid-status-header",Rl);customElements.define("devtools-resources-reports-grid",On);const Un=new CSSStyleSheet;Un.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  display: block;
  white-space: normal;
  max-width: 400px;
}

.router-rules {
  border: 1px solid var(--sys-color-divider);
  border-spacing: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: initial;
  margin-top: 0;
  padding-bottom: 12px;
  text-wrap: balance;
}

.router-rule {
  display: flex;
  margin-top: 12px;
  flex-direction: column;
}

.rule-id {
  color: var(--sys-color-token-subtle);
}

.item {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.condition,
.source {
  list-style: none;
  display: flex;
  margin-top: 4px;
  flex-direction: row;
}

.condition > *,
.source > * {
  word-break: break-all;
  line-height: 1.5em;
}

.rule-type {
  flex: 0 0 18%;
}

/*# sourceURL=serviceWorkerRouterView.css */
`);const{html:qs,render:Pl}=ne;class Hn extends Ue{#t=this.attachShadow({mode:"open"});#e=[];connectedCallback(){this.#t.adoptedStyleSheets=[Un]}update(e){this.#e=e,this.#e.length>0&&this.#i()}#i(){Pl(qs`
      <ul class="router-rules">
        ${this.#e.map(this.#r)}
      </ul>
    `,this.#t,{host:this})}#r(e){return qs`
      <li class="router-rule">
        <div class="rule-id">Rule ${e.id}</div>
        <ul class="item">
          <li class="condition">
            <div class="rule-type">Condition</div>
            <div class="rule-value">${e.condition}</div>
          </li>
          <li class="source">
            <div class="rule-type">Source</div>
            <div class="rule-value">${e.source}</div>
          </li>
        </ul>
      </li>
    `}}customElements.define("devtools-service-worker-router-view",Hn);const Vn=new CSSStyleSheet;Vn.replaceSync(`/*
 * Copyright (c) 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  padding: 20px;
}

.heading {
  font-size: 15px;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 20px;
}

.info-icon {
  vertical-align: text-bottom;
  height: 14px;
}

.no-events-message {
  margin-top: 20px;
}

/*# sourceURL=sharedStorageAccessGrid.css */
`);const{html:er}=ne,Dt={sharedStorage:"Shared storage",allSharedStorageEvents:"All shared storage events for this page.",eventTime:"Event Time",eventType:"Access Type",mainFrameId:"Main Frame ID",ownerOrigin:"Owner Origin",eventParams:"Optional Event Params",noEvents:"No shared storage events recorded."},Bl=P("panels/application/components/SharedStorageAccessGrid.ts",Dt),$t=B.bind(void 0,Bl);class Wn extends HTMLElement{#t=this.attachShadow({mode:"open"});#e=[];connectedCallback(){this.#t.adoptedStyleSheets=[Vn],this.#i()}set data(e){this.#e=e,this.#i()}#i(){re(er`
      <div>
        <span class="heading">${$t(Dt.sharedStorage)}</span>
        <devtools-icon class="info-icon" title=${$t(Dt.allSharedStorageEvents)}
          .data=${{iconName:"info",color:"var(--icon-default)",width:"16px"}}>
        </devtools-icon>
        ${this.#r()}
      </div>
    `,this.#t,{host:this})}#r(){if(this.#e.length===0)return er`<div
        class="no-events-message">${$t(Dt.noEvents)}</div>`;const e={columns:[{id:"event-main-frame-id",title:$t(Dt.mainFrameId),widthWeighting:10,hideable:!1,visible:!1,sortable:!1},{id:"event-time",title:$t(Dt.eventTime),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-type",title:$t(Dt.eventType),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-owner-origin",title:$t(Dt.ownerOrigin),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-params",title:$t(Dt.eventParams),widthWeighting:10,hideable:!1,visible:!0,sortable:!0}],rows:this.#s(),initialSort:{columnId:"event-time",direction:"ASC"}};return er`
      <devtools-data-grid-controller .data=${e}></devtools-data-grid-controller>
    `}#s(){return this.#e.map(e=>({cells:[{columnId:"event-main-frame-id",value:e.mainFrameId},{columnId:"event-time",value:e.accessTime,renderer:this.#n.bind(this)},{columnId:"event-type",value:e.type},{columnId:"event-owner-origin",value:e.ownerOrigin},{columnId:"event-params",value:JSON.stringify(e.params)}]}))}#n(e){const t=new Date(1e3*e);return er`${t.toLocaleString()}`}}customElements.define("devtools-shared-storage-access-grid",Wn);const _n=new CSSStyleSheet;_n.replaceSync(`/*
 * Copyright (c) 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

devtools-icon {
  vertical-align: text-bottom;
  margin-left: 2px;
  width: 16px;
  height: 16px;
}

devtools-button {
  vertical-align: sub;
}

/*# sourceURL=sharedStorageMetadataView.css */
`);const{html:Ot}=ne,oe={origin:"Origin",topLevelSite:"Top-level site",opaque:"(opaque)",isOpaque:"Is opaque",isThirdParty:"Is third-party",yes:"Yes",no:"No",yesBecauseTopLevelIsOpaque:"Yes, because the top-level site is opaque",yesBecauseKeyIsOpaque:"Yes, because the storage key is opaque",yesBecauseOriginNotInTopLevelSite:"Yes, because the origin is outside of the top-level site",yesBecauseAncestorChainHasCrossSite:"Yes, because the ancestry chain contains a third-party origin",loading:"Loading…",bucketName:"Bucket name",defaultBucket:"Default bucket",persistent:"Is persistent",durability:"Durability",quota:"Quota",expiration:"Expiration",none:"None",deleteBucket:"Delete bucket",confirmBucketDeletion:'Delete the "{PH1}" bucket?'},Ll=P("panels/application/components/StorageMetadataView.ts",oe),ce=B.bind(void 0,Ll),Nl=Pt.instance();class yi extends Ue{#t=this.attachShadow({mode:"open"});#e;#i=null;#r=null;getShadow(){return this.#t}setStorageKey(e){this.#i=us(e),this.render()}setStorageBucket(e){this.#r=e,this.setStorageKey(e.bucket.storageKey)}enableStorageBucketControls(e){this.#e=e,this.#i&&this.render()}render(){return Nl.write("StorageMetadataView render",async()=>{re(Ot`
        <devtools-report .data=${{reportTitle:this.getTitle()??ce(oe.loading)}}>
          ${await this.renderReportContent()}
        </devtools-report>`,this.#t,{host:this})})}getTitle(){if(!this.#i)return;const e=this.#i.origin,t=this.#r?.bucket.name||ce(oe.defaultBucket);return this.#e?`${t} - ${e}`:e}key(e){return Ot`<devtools-report-key>${e}</devtools-report-key>`}value(e){return Ot`<devtools-report-value>${e}</devtools-report-value>`}async renderReportContent(){if(!this.#i)return S;const e=this.#i.origin,t=!!this.#i.components.get("3"),i=!!this.#i.components.get("1"),r=!!this.#i.components.get("4"),s=this.#i.components.get("0"),o=t?ce(oe.yesBecauseAncestorChainHasCrossSite):i?ce(oe.yesBecauseKeyIsOpaque):r?ce(oe.yesBecauseTopLevelIsOpaque):s&&e!==s?ce(oe.yesBecauseOriginNotInTopLevelSite):null;return Ot`
        ${this.key(ce(oe.origin))}
        ${this.value(Ot`<div class="text-ellipsis" title=${e}>${e}</div>`)}
        ${s||r?this.key(ce(oe.topLevelSite)):S}
        ${s?this.value(s):S}
        ${r?this.value(ce(oe.opaque)):S}
        ${o?Ot`${this.key(ce(oe.isThirdParty))}${this.value(o)}`:S}
        ${i||r?this.key(ce(oe.isOpaque)):S}
        ${i?this.value(ce(oe.yes)):S}
        ${r?this.value(ce(oe.yesBecauseTopLevelIsOpaque)):S}
        ${this.#r?this.#s():S}
        ${this.#e?this.#o():S}`}#s(){if(!this.#r)throw new Error("Should not call #renderStorageBucketInfo if #bucket is null.");const{bucket:{name:e},persistent:t,durability:i,quota:r}=this.#r;return Ot`
      ${this.key(ce(oe.bucketName))}
      ${this.value(e||"default")}
      ${this.key(ce(oe.persistent))}
      ${this.value(ce(t?oe.yes:oe.no))}
      ${this.key(ce(oe.durability))}
      ${this.value(i)}
      ${this.key(ce(oe.quota))}
      ${this.value(sr(r))}
      ${this.key(ce(oe.expiration))}
      ${this.value(this.#n())}`}#n(){if(!this.#r)throw new Error("Should not call #getExpirationString if #bucket is null.");const{expiration:e}=this.#r;return e===0?ce(oe.none):new Date(e*1e3).toLocaleString()}#o(){return Ot`
      <devtools-report-section>
        <devtools-button
          aria-label=${ce(oe.deleteBucket)}
          .variant=${"primary"}
          @click=${this.#a}>
          ${ce(oe.deleteBucket)}
        </devtools-button>
      </devtools-report-section>`}async#a(){if(!this.#e||!this.#r)throw new Error("Should not call #deleteBucket if #storageBucketsModel or #storageBucket is null.");await Zs.show(ce(oe.confirmBucketDeletion,{PH1:this.#r.bucket.name||""}),this,{jslogContext:"delete-bucket-confirmation"})&&this.#e.deleteBucket(this.#r.bucket)}}customElements.define("devtools-storage-metadata-view",yi);const{html:si}=ne,kt={sharedStorage:"Shared storage",creation:"Creation Time",notYetCreated:"Not yet created",numEntries:"Number of Entries",entropyBudget:"Entropy Budget for Fenced Frames",budgetExplanation:"Remaining data leakage allowed within a 24-hour period for this origin in bits of entropy",resetBudget:"Reset Budget",numBytesUsed:"Number of Bytes Used"},Ml=P("panels/application/components/SharedStorageMetadataView.ts",kt),Ut=B.bind(void 0,Ml);class jn extends yi{#t;#e=null;#i=0;#r=0;#s=0;constructor(e,t){super(),this.#t=e,this.classList.add("overflow-auto"),this.setStorageKey(t)}async#n(){await this.#t.resetBudget(),await this.render()}connectedCallback(){this.getShadow().adoptedStyleSheets=[_n]}getTitle(){return Ut(kt.sharedStorage)}async renderReportContent(){const e=await this.#t.getMetadata();return this.#e=e?.creationTime??null,this.#i=e?.length??0,this.#r=e?.bytesUsed??0,this.#s=e?.remainingBudget??0,si`
      ${await super.renderReportContent()}
      ${this.key(Ut(kt.creation))}
      ${this.value(this.#o())}
      ${this.key(Ut(kt.numEntries))}
      ${this.value(String(this.#i))}
      ${this.key(Ut(kt.numBytesUsed))}
      ${this.value(String(this.#r))}
      ${this.key(si`${Ut(kt.entropyBudget)}<devtools-icon name="info" title=${Ut(kt.budgetExplanation)}></devtools-icon>`)}
      ${this.value(si`${this.#s}${this.#a()}`)}`}#o(){if(!this.#e)return si`${Ut(kt.notYetCreated)}`;const e=new Date(1e3*this.#e);return si`${e.toLocaleString()}`}#a(){return si`
      <devtools-button .iconName=${"undo"}
                       .jslogContext=${"reset-entropy-budget"}
                       .size=${"SMALL"}
                       .title=${Ut(kt.resetBudget)}
                       .variant=${"icon"}
                       @click=${this.#n.bind(this)}></devtools-button>
    `}}customElements.define("devtools-shared-storage-metadata-view",jn);const qn=new CSSStyleSheet;qn.replaceSync(`/*
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 20px;
}

.heading {
  font-size: 15px;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
  margin-top: 20px;

  & devtools-button {
    width: 14px;
    height: 14px;
  }
}

devtools-icon {
  width: 14px;
  height: 14px;
}

.no-tt-message {
  margin-top: 20px;
}

/*# sourceURL=trustTokensView.css */
`);const{html:tr}=ne,qt={issuer:"Issuer",storedTokenCount:"Stored token count",allStoredTrustTokensAvailableIn:"All stored private state tokens available in this browser instance.",noTrustTokensStored:"No private state tokens are currently stored.",deleteTrustTokens:"Delete all stored private state tokens issued by {PH1}.",trustTokens:"Private state tokens"},$l=P("panels/application/components/TrustTokensView.ts",qt),ni=B.bind(void 0,$l),Ol=Pt.instance(),Ul=1e3;class Gn extends Ue{#t=this.attachShadow({mode:"open"});#e(e){w.instance().primaryPageTarget()?.storageAgent().invoke_clearTrustTokens({issuerOrigin:e})}connectedCallback(){this.wrapper?.contentElement.classList.add("vbox"),this.#t.adoptedStyleSheets=[qn],this.render()}async render(){const e=w.instance().primaryPageTarget();if(!e)return;const{tokens:t}=await e.storageAgent().invoke_getTrustTokens();await Ol.write("Render TrustTokensView",()=>{re(tr`
        <div>
          <span class="heading">${ni(qt.trustTokens)}</span>
          <devtools-icon name="info" title=${ni(qt.allStoredTrustTokensAvailableIn)}></devtools-icon>
          ${this.#i(t)}
        </div>
      `,this.#t,{host:this}),this.isConnected&&setTimeout(()=>this.render(),Ul)})}#i(e){if(e.length===0)return tr`<div class="no-tt-message">${ni(qt.noTrustTokensStored)}</div>`;const t={columns:[{id:"issuer",title:ni(qt.issuer),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"count",title:ni(qt.storedTokenCount),widthWeighting:5,hideable:!1,visible:!0,sortable:!0},{id:"delete-button",title:"",widthWeighting:1,hideable:!1,visible:!0,sortable:!1}],rows:this.#r(e),initialSort:{columnId:"issuer",direction:"ASC"}};return tr`
      <devtools-data-grid-controller .data=${t}></devtools-data-grid-controller>
    `}#r(e){return e.filter(t=>t.count>0).map(t=>({cells:[{columnId:"delete-button",value:Gs(t.issuerOrigin),renderer:this.#s.bind(this)},{columnId:"issuer",value:Gs(t.issuerOrigin)},{columnId:"count",value:t.count}]}))}#s(e){return tr`
      <devtools-button .iconName=${"bin"}
                       .jslogContext=${"delete-all"}
                       .size=${"SMALL"}
                       .title=${ni(qt.deleteTrustTokens,{PH1:e})}
                       .variant=${"icon"}
                       @click=${this.#e.bind(this,e)}></devtools-button>
    `}}function Gs(n){return n.replace(/\/$/,"")}customElements.define("devtools-trust-tokens-storage-view",Gn);const g={errorsAndWarnings:"Errors and warnings",installability:"Installability",identity:"Identity",presentation:"Presentation",protocolHandlers:"Protocol Handlers",icons:"Icons",windowControlsOverlay:"Window Controls Overlay",name:"Name",shortName:"Short name",url:"URL",computedAppId:"Computed App ID",appIdExplainer:"This is used by the browser to know whether the manifest should be updating an existing application, or whether it refers to a new web app that can be installed.",learnMore:"Learn more",appIdNote:"{PH1} {PH2} is not specified in the manifest, {PH3} is used instead. To specify an App ID that matches the current identity, set the {PH4} field to {PH5} {PH6}.",note:"Note:",copyToClipboard:"Copy suggested ID to clipboard",copiedToClipboard:"Copied suggested ID {PH1} to clipboard",description:"Description",startUrl:"Start URL",themeColor:"Theme color",backgroundColor:"Background color",orientation:"Orientation",display:"Display",newNoteUrl:"New note URL",descriptionMayBeTruncated:"Description may be truncated.",shortcutsMayBeNotAvailable:"The maximum number of shortcuts is platform dependent. Some shortcuts may be not available.",showOnlyTheMinimumSafeAreaFor:"Show only the minimum safe area for maskable icons",documentationOnMaskableIcons:"documentation on maskable icons",needHelpReadOurS:"Need help? Read the {PH1}.",shortcutS:"Shortcut #{PH1}",shortcutSShouldIncludeAXPixel:"Shortcut #{PH1} should include a 96×96 pixel icon",screenshotS:"Screenshot #{PH1}",pageIsNotLoadedInTheMainFrame:"Page is not loaded in the main frame",pageIsNotServedFromASecureOrigin:"Page is not served from a secure origin",pageHasNoManifestLinkUrl:"Page has no manifest <link> `URL`",manifestCouldNotBeFetchedIsEmpty:"Manifest could not be fetched, is empty, or could not be parsed",manifestStartUrlIsNotValid:"Manifest '`start_url`' is not valid",manifestDoesNotContainANameOr:"Manifest does not contain a '`name`' or '`short_name`' field",manifestDisplayPropertyMustBeOne:"Manifest '`display`' property must be one of '`standalone`', '`fullscreen`', or '`minimal-ui`'",manifestDoesNotContainASuitable:"Manifest does not contain a suitable icon—PNG, SVG, or WebP format of at least {PH1}px is required, the '`sizes`' attribute must be set, and the '`purpose`' attribute, if set, must include '`any`'.",avoidPurposeAnyAndMaskable:"Declaring an icon with '`purpose`' of '`any maskable`' is discouraged. It is likely to look incorrect on some platforms due to too much or too little padding.",noSuppliedIconIsAtLeastSpxSquare:"No supplied icon is at least {PH1} pixels square in `PNG`, `SVG`, or `WebP` format, with the purpose attribute unset or set to '`any`'.",couldNotDownloadARequiredIcon:"Could not download a required icon from the manifest",downloadedIconWasEmptyOr:"Downloaded icon was empty or corrupted",theSpecifiedApplicationPlatform:"The specified application platform is not supported on Android",noPlayStoreIdProvided:"No Play store ID provided",thePlayStoreAppUrlAndPlayStoreId:"The Play Store app URL and Play Store ID do not match",theAppIsAlreadyInstalled:"The app is already installed",aUrlInTheManifestContainsA:"A URL in the manifest contains a username, password, or port",pageIsLoadedInAnIncognitoWindow:"Page is loaded in an incognito window",pageDoesNotWorkOffline:"Page does not work offline",couldNotCheckServiceWorker:"Could not check `service worker` without a '`start_url`' field in the manifest",manifestSpecifies:"Manifest specifies '`prefer_related_applications`: true'",preferrelatedapplicationsIsOnly:"'`prefer_related_applications`' is only supported on `Chrome` Beta and Stable channels on `Android`.",manifestContainsDisplayoverride:"Manifest contains '`display_override`' field, and the first supported display mode must be one of '`standalone`', '`fullscreen`', or '`minimal-ui`'",pageDoesNotWorkOfflineThePage:"Page does not work offline. Starting in Chrome 93, the installability criteria are changing, and this site will not be installable. See {PH1} for more information.",imageFromS:"Image from {PH1}",screenshot:"Screenshot",formFactor:"Form factor",label:"Label",platform:"Platform",icon:"Icon",sSrcIsNotSet:"{PH1} '`src`' is not set",sUrlSFailedToParse:"{PH1} URL ''{PH2}'' failed to parse",sSFailedToLoad:"{PH1} {PH2} failed to load",sSDoesNotSpecifyItsSizeInThe:"{PH1} {PH2} does not specify its size in the manifest",sSShouldSpecifyItsSizeAs:"{PH1} {PH2} should specify its size as `[width]x[height]`",sSShouldHaveSquareIcon:"Most operating systems require square icons. Please include at least one square icon in the array.",actualSizeSspxOfSSDoesNotMatch:"Actual size ({PH1}×{PH2})px of {PH3} {PH4} does not match specified size ({PH5}×{PH6}px)",actualWidthSpxOfSSDoesNotMatch:"Actual width ({PH1}px) of {PH2} {PH3} does not match specified width ({PH4}px)",actualHeightSpxOfSSDoesNotMatch:"Actual height ({PH1}px) of {PH2} {PH3} does not match specified height ({PH4}px)",sSSizeShouldBeAtLeast320:"{PH1} {PH2} size should be at least 320×320",sSSizeShouldBeAtMost3840:"{PH1} {PH2} size should be at most 3840×3840",sSWidthDoesNotComplyWithRatioRequirement:"{PH1} {PH2} width can't be more than 2.3 times as long as the height",sSHeightDoesNotComplyWithRatioRequirement:"{PH1} {PH2} height can't be more than 2.3 times as long as the width",screenshotPixelSize:"Screenshot {url} should specify a pixel size `[width]x[height]` instead of `any` as first size.",noScreenshotsForRicherPWAInstallOnDesktop:"Richer PWA Install UI won’t be available on desktop. Please add at least one screenshot with the `form_factor` set to `wide`.",noScreenshotsForRicherPWAInstallOnMobile:"Richer PWA Install UI won’t be available on mobile. Please add at least one screenshot for which `form_factor` is not set or set to a value other than `wide`.",tooManyScreenshotsForDesktop:"No more than 8 screenshots will be displayed on desktop. The rest will be ignored.",tooManyScreenshotsForMobile:"No more than 5 screenshots will be displayed on mobile. The rest will be ignored.",screenshotsMustHaveSameAspectRatio:"All screenshots with the same `form_factor` must have the same aspect ratio as the first screenshot with that `form_factor`. Some screenshots will be ignored.",wcoFound:"Chrome has successfully found the {PH1} value for the {PH2} field in the {PH3}.",wcoNotFound:"Define {PH1} in the manifest to use the Window Controls Overlay API and customize your app's title bar.",customizePwaTitleBar:"Customize the window controls overlay of your PWA's title bar",wcoNeedHelpReadMore:"Need help? Read {PH1}.",selectWindowControlsOverlayEmulationOs:"Emulate the Window Controls Overlay on"},li=P("panels/application/AppManifestView.ts",g),m=B.bind(void 0,li);class zn extends za(j){emptyView;reportView;errorsSection;installabilitySection;identitySection;presentationSection;iconsSection;windowControlsSection;protocolHandlersSection;shortcutSections;screenshotsSections;nameField;shortNameField;descriptionField;startURLField;themeColorSwatch;backgroundColorSwatch;orientationField;displayField;newNoteUrlField;throttler;registeredListeners;target;resourceTreeModel;serviceWorkerManager;overlayModel;protocolHandlersView;constructor(e,t,i){super(!0),this.contentElement.classList.add("manifest-container"),this.contentElement.setAttribute("jslog",`${Z("manifest")}`),this.emptyView=e,this.emptyView.appendLink("https://web.dev/add-manifest/"),this.emptyView.show(this.contentElement),this.emptyView.hideWidget(),this.reportView=t,this.reportView.element.classList.add("manifest-view-header"),this.reportView.show(this.contentElement),this.reportView.hideWidget(),this.errorsSection=this.reportView.appendSection(m(g.errorsAndWarnings),void 0,"errors-and-warnings"),this.installabilitySection=this.reportView.appendSection(m(g.installability),void 0,"installability"),this.identitySection=this.reportView.appendSection(m(g.identity),"undefined,identity"),this.presentationSection=this.reportView.appendSection(m(g.presentation),"undefined,presentation"),this.protocolHandlersSection=this.reportView.appendSection(m(g.protocolHandlers),"undefined,protocol-handlers"),this.protocolHandlersView=new Mn,this.protocolHandlersSection.appendFieldWithCustomView(this.protocolHandlersView),this.iconsSection=this.reportView.appendSection(m(g.icons),"report-section-icons","icons"),this.windowControlsSection=this.reportView.appendSection(g.windowControlsOverlay,void 0,"window-controls-overlay"),this.shortcutSections=[],this.screenshotsSections=[],this.nameField=this.identitySection.appendField(m(g.name)),this.shortNameField=this.identitySection.appendField(m(g.shortName)),this.descriptionField=this.identitySection.appendFlexedField(m(g.description)),this.startURLField=this.presentationSection.appendField(m(g.startUrl)),Xe(this.startURLField,m(g.startUrl));const r=this.presentationSection.appendField(m(g.themeColor));this.themeColorSwatch=new Vs,r.appendChild(this.themeColorSwatch);const s=this.presentationSection.appendField(m(g.backgroundColor));this.backgroundColorSwatch=new Vs,s.appendChild(this.backgroundColorSwatch),this.orientationField=this.presentationSection.appendField(m(g.orientation)),this.displayField=this.presentationSection.appendField(m(g.display)),this.newNoteUrlField=this.presentationSection.appendField(m(g.newNoteUrl)),this.throttler=i,w.instance().observeTargets(this),this.registeredListeners=[]}getStaticSections(){return[this.identitySection,this.presentationSection,this.protocolHandlersSection,this.iconsSection,this.windowControlsSection]}getManifestElement(){return this.reportView.getHeaderElement()}targetAdded(e){e===w.instance().primaryPageTarget()&&(this.target=e,this.resourceTreeModel=e.model($e),this.serviceWorkerManager=e.model(hs),this.overlayModel=e.model(Ni),!(!this.resourceTreeModel||!this.serviceWorkerManager||!this.overlayModel)&&(this.updateManifest(!0),this.registeredListeners=[this.resourceTreeModel.addEventListener(We.DOMContentLoaded,()=>{this.updateManifest(!0)}),this.serviceWorkerManager.addEventListener("RegistrationUpdated",()=>{this.updateManifest(!1)})]))}targetRemoved(e){this.target===e&&(!this.resourceTreeModel||!this.serviceWorkerManager||!this.overlayModel||(delete this.resourceTreeModel,delete this.serviceWorkerManager,delete this.overlayModel,yr(this.registeredListeners)))}async updateManifest(e){if(!this.resourceTreeModel)return;const[{url:t,data:i,errors:r},s,o]=await Promise.all([this.resourceTreeModel.fetchAppManifest(),this.resourceTreeModel.getInstallabilityErrors(),this.resourceTreeModel.getAppId()]);this.throttler.schedule(()=>this.renderManifest(t,i,r,s,o),e?"AsSoonAsPossible":"Default")}async renderManifest(e,t,i,r,s){const o=s?.appId||null,a=s?.recommendedId||null;if((!t||t==="{}")&&!i.length){this.emptyView.showWidget(),this.reportView.hideWidget(),this.dispatchEventToListeners("ManifestDetected",!1);return}this.emptyView.hideWidget(),this.reportView.showWidget(),this.dispatchEventToListeners("ManifestDetected",!0);const d=wt.linkifyURL(e);d.tabIndex=0,this.reportView.setURL(d),this.errorsSection.clearContent(),this.errorsSection.element.classList.toggle("hidden",!i.length);for(const y of i){const N=hi({title:y.message,iconName:y.critical?"cross-circle-filled":"warning-filled",color:y.critical?"var(--icon-error)":"var(--icon-warning)"});this.errorsSection.appendRow().appendChild(N)}if(!t)return;t.charCodeAt(0)===65279&&(t=t.slice(1));const h=JSON.parse(t);this.nameField.textContent=Re("name"),this.shortNameField.textContent=Re("short_name");const p=[],b=Re("description");this.descriptionField.textContent=b,b.length>300&&p.push(m(g.descriptionMayBeTruncated));const C=Re("start_url");if(o&&a){const y=this.identitySection.appendField(m(g.computedAppId));Xe(y,"App Id"),y.textContent=o;const N=W("help","inline-icon");N.title=m(g.appIdExplainer),N.setAttribute("jslog",`${de("help").track({hover:!0})}`),y.appendChild(N);const Ti=st.create("https://developer.chrome.com/blog/pwa-manifest-id/",m(g.learnMore),void 0,void 0,"learn-more");if(y.appendChild(Ti),!Re("id")){const _t=y.createChild("div","multiline-value"),at=document.createElement("b");at.textContent=m(g.note);const Nt=document.createElement("code");Nt.textContent="id";const ei=document.createElement("code");ei.textContent="id";const ti=document.createElement("code");ti.textContent="start_url";const zi=document.createElement("code");zi.textContent=a;const Mt=new Gr;Mt.data={variant:"icon",iconName:"copy",size:"SMALL",jslogContext:"manifest.copy-id",title:m(g.copyToClipboard)},Mt.className="inline-button",Mt.addEventListener("click",()=>{Ye(m(g.copiedToClipboard,{PH1:a})),ls.copyText(a)}),_t.appendChild(rt(li,g.appIdNote,{PH1:at,PH2:Nt,PH3:ti,PH4:ei,PH5:zi,PH6:Mt}))}}else this.identitySection.removeField(m(g.computedAppId));if(this.startURLField.removeChildren(),C){const y=xe.completeURL(e,C);if(y){const N=wt.linkifyURL(y,{text:C});N.tabIndex=0,N.setAttribute("jslog",`${Je("start-url").track({click:!0})}`),this.startURLField.appendChild(N)}}this.themeColorSwatch.classList.toggle("hidden",!Re("theme_color"));const v=Ki(Re("theme_color")||"white")||Ki("white");v&&this.themeColorSwatch.renderColor(v),this.backgroundColorSwatch.classList.toggle("hidden",!Re("background_color"));const D=Ki(Re("background_color")||"white")||Ki("white");D&&this.backgroundColorSwatch.renderColor(D),this.orientationField.textContent=Re("orientation");const De=Re("display");this.displayField.textContent=De;const F=(h.note_taking||{}).new_note_url,L=typeof F=="string";if(this.newNoteUrlField.parentElement?.classList.toggle("hidden",!L),this.newNoteUrlField.removeChildren(),L){const y=xe.completeURL(e,F),N=wt.linkifyURL(y,{text:F});N.tabIndex=0,this.newNoteUrlField.appendChild(N)}const H=h.protocol_handlers||[];this.protocolHandlersView.data={protocolHandlers:H,manifestLink:e};const l=h.icons||[];this.iconsSection.clearContent();const Y=h.shortcuts||[];for(const y of this.shortcutSections)y.detach(!0);const x=h.screenshots||[];for(const y of this.screenshotsSections)y.detach(!0);const V=[],le=cr.create(m(g.showOnlyTheMinimumSafeAreaFor));le.classList.add("mask-checkbox"),le.setAttribute("jslog",`${en("show-minimal-safe-area-for-maskable-icons").track({change:!0})}`),le.addEventListener("click",()=>{this.iconsSection.setIconMasked(le.checkboxElement.checked)}),this.iconsSection.appendRow().appendChild(le);const nt=st.create("https://web.dev/maskable-icon/",m(g.documentationOnMaskableIcons),void 0,void 0,"learn-more");this.iconsSection.appendRow().appendChild(rt(li,g.needHelpReadOurS,{PH1:nt}));let Wt=!1;for(const y of l){const N=await this.appendImageResourceToSection(e,y,this.iconsSection,!1);V.push(...N.imageResourceErrors),Wt=N.squareSizedIconAvailable||Wt}Wt||V.push(m(g.sSShouldHaveSquareIcon)),Y.length>4&&p.push(m(g.shortcutsMayBeNotAvailable));let ki=1;for(const y of Y){const N=this.reportView.appendSection(m(g.shortcutS,{PH1:ki}));N.element.setAttribute("jslog",`${Ce("shortcuts")}`),this.shortcutSections.push(N),N.appendFlexedField(m(g.name),y.name),y.short_name&&N.appendFlexedField(m(g.shortName),y.short_name),y.description&&N.appendFlexedField(m(g.description),y.description);const Ti=N.appendFlexedField(m(g.url)),_t=xe.completeURL(e,y.url),at=wt.linkifyURL(_t,{text:y.url});at.setAttribute("jslog",`${Je("shortcut").track({click:!0})}`),at.tabIndex=0,Ti.appendChild(at);const Nt=y.icons||[];let ei=!1;for(const ti of Nt){const{imageResourceErrors:zi}=await this.appendImageResourceToSection(e,ti,N,!1);if(V.push(...zi),!ei&&ti.sizes){const Mt=ti.sizes.match(/^(\d+)x(\d+)$/);Mt&&Mt[1]>=96&&Mt[2]>=96&&(ei=!0)}}ei||V.push(m(g.shortcutSShouldIncludeAXPixel,{PH1:ki})),ki++}let Zt=1;const Lt=new Map;let J=!1;for(const y of x){const N=this.reportView.appendSection(m(g.screenshotS,{PH1:Zt}));this.screenshotsSections.push(N),y.form_factor&&N.appendFlexedField(m(g.formFactor),y.form_factor),y.label&&N.appendFlexedField(m(g.label),y.label),y.platform&&N.appendFlexedField(m(g.platform),y.platform);const{imageResourceErrors:Ti,naturalWidth:_t,naturalHeight:at}=await this.appendImageResourceToSection(e,y,N,!0);if(V.push(...Ti),y.form_factor&&_t&&at){Lt.has(y.form_factor)||Lt.set(y.form_factor,{width:_t,height:at});const Nt=Lt.get(y.form_factor);Nt&&(J=J||_t*Nt.height!==at*Nt.width)}Zt++}J&&p.push(m(g.screenshotsMustHaveSameAspectRatio));const ot=x.filter(y=>y.form_factor==="wide"),Ei=x.filter(y=>y.form_factor!=="wide");ot.length<1&&p.push(m(g.noScreenshotsForRicherPWAInstallOnDesktop)),Ei.length<1&&p.push(m(g.noScreenshotsForRicherPWAInstallOnMobile)),ot.length>8&&p.push(m(g.tooManyScreenshotsForDesktop)),Ei.length>5&&p.push(m(g.tooManyScreenshotsForMobile)),this.installabilitySection.clearContent(),this.installabilitySection.element.classList.toggle("hidden",!r.length);const Br=this.getInstallabilityErrorMessages(r);for(const y of Br){const N=hi({title:y,iconName:"warning-filled",color:"var(--icon-warning)"});this.installabilitySection.appendRow().appendChild(N)}this.errorsSection.element.classList.toggle("hidden",!i.length&&!V.length&&!p.length);for(const y of p){const N=hi({title:y,iconName:"warning-filled",color:"var(--icon-warning)"});this.errorsSection.appendRow().appendChild(N)}for(const y of V){const N=hi({title:y,iconName:"warning-filled",color:"var(--icon-warning)"});this.errorsSection.appendRow().appendChild(N)}function Re(y){const N=h[y];return typeof N!="string"?"":N}this.windowControlsSection.clearContent();const k=(h.display_override||[]).includes("window-controls-overlay"),z=st.create("https://developer.mozilla.org/en-US/docs/Web/Manifest/display_override","display-override",void 0,void 0,"display-override"),Te=document.createElement("code");Te.appendChild(z);const ke=this.windowControlsSection.appendRow();if(k){const y=W("check-circle","inline-icon");ke.appendChild(y);const N=document.createElement("code");N.classList.add("wco"),N.textContent="window-controls-overlay",ke.appendChild(rt(li,g.wcoFound,{PH1:N,PH2:Te,PH3:d})),this.overlayModel&&await this.appendWindowControlsToSection(this.overlayModel,e,Re("theme_color"))}else{const y=W("info","inline-icon");ke.appendChild(y),ke.appendChild(rt(li,g.wcoNotFound,{PH1:Te}))}const St=st.create("https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay",m(g.customizePwaTitleBar),void 0,void 0,"customize-pwa-tittle-bar");this.windowControlsSection.appendRow().appendChild(rt(li,g.wcoNeedHelpReadMore,{PH1:St})),this.dispatchEventToListeners("ManifestRendered")}getInstallabilityErrorMessages(e){const t=[];for(const i of e){let r;switch(i.errorId){case"not-in-main-frame":r=m(g.pageIsNotLoadedInTheMainFrame);break;case"not-from-secure-origin":r=m(g.pageIsNotServedFromASecureOrigin);break;case"no-manifest":r=m(g.pageHasNoManifestLinkUrl);break;case"manifest-empty":r=m(g.manifestCouldNotBeFetchedIsEmpty);break;case"start-url-not-valid":r=m(g.manifestStartUrlIsNotValid);break;case"manifest-missing-name-or-short-name":r=m(g.manifestDoesNotContainANameOr);break;case"manifest-display-not-supported":r=m(g.manifestDisplayPropertyMustBeOne);break;case"manifest-missing-suitable-icon":if(i.errorArguments.length!==1||i.errorArguments[0].name!=="minimum-icon-size-in-pixels"){console.error("Installability error does not have the correct errorArguments");break}r=m(g.manifestDoesNotContainASuitable,{PH1:i.errorArguments[0].value});break;case"no-acceptable-icon":if(i.errorArguments.length!==1||i.errorArguments[0].name!=="minimum-icon-size-in-pixels"){console.error("Installability error does not have the correct errorArguments");break}r=m(g.noSuppliedIconIsAtLeastSpxSquare,{PH1:i.errorArguments[0].value});break;case"cannot-download-icon":r=m(g.couldNotDownloadARequiredIcon);break;case"no-icon-available":r=m(g.downloadedIconWasEmptyOr);break;case"platform-not-supported-on-android":r=m(g.theSpecifiedApplicationPlatform);break;case"no-id-specified":r=m(g.noPlayStoreIdProvided);break;case"ids-do-not-match":r=m(g.thePlayStoreAppUrlAndPlayStoreId);break;case"already-installed":r=m(g.theAppIsAlreadyInstalled);break;case"url-not-supported-for-webapk":r=m(g.aUrlInTheManifestContainsA);break;case"in-incognito":r=m(g.pageIsLoadedInAnIncognitoWindow);break;case"not-offline-capable":r=m(g.pageDoesNotWorkOffline);break;case"no-url-for-service-worker":r=m(g.couldNotCheckServiceWorker);break;case"prefer-related-applications":r=m(g.manifestSpecifies);break;case"prefer-related-applications-only-beta-stable":r=m(g.preferrelatedapplicationsIsOnly);break;case"manifest-display-override-not-supported":r=m(g.manifestContainsDisplayoverride);break;case"warn-not-offline-capable":r=m(g.pageDoesNotWorkOfflineThePage,{PH1:"https://developer.chrome.com/blog/improved-pwa-offline-detection/"});break;default:console.error(`Installability error id '${i.errorId}' is not recognized`);break}r&&t.push(r)}return t}async loadImage(e){const t=document.createElement("div");t.classList.add("image-wrapper");const i=document.createElement("img"),r=new Promise((s,o)=>{i.onload=s,i.onerror=o});i.src=e,i.alt=m(g.imageFromS,{PH1:e}),t.appendChild(i);try{return await r,{wrapper:t,image:i}}catch{}return null}parseSizes(e,t,i,r){const s=e?e.split(/\s+/):[],o=[];for(const a of s){if(a==="any"){o.find(h=>"any"in h)||o.push({any:"any",formatted:"any"});continue}const d=a.match(/^(?<width>\d+)[xX](?<height>\d+)$/);if(d){const h=parseInt(d.groups?.width||"",10),p=parseInt(d.groups?.height||"",10),b=`${h}×${p}px`;o.push({width:h,height:p,formatted:b})}else r.push(m(g.sSShouldSpecifyItsSizeAs,{PH1:t,PH2:i}))}return o}checkSizeProblem(e,t,i,r,s){if("any"in e)return{hasSquareSize:i.naturalWidth===i.naturalHeight};const o=e.width===e.height;return i.naturalWidth!==e.width&&i.naturalHeight!==e.height?{error:m(g.actualSizeSspxOfSSDoesNotMatch,{PH1:i.naturalWidth,PH2:i.naturalHeight,PH3:r,PH4:s,PH5:e.width,PH6:e.height}),hasSquareSize:o}:i.naturalWidth!==e.width?{error:m(g.actualWidthSpxOfSSDoesNotMatch,{PH1:i.naturalWidth,PH2:r,PH3:s,PH4:e.width}),hasSquareSize:o}:i.naturalHeight!==e.height?{error:m(g.actualHeightSpxOfSSDoesNotMatch,{PH1:i.naturalHeight,PH2:r,PH3:s,PH4:e.height}),hasSquareSize:o}:{hasSquareSize:o}}async appendImageResourceToSection(e,t,i,r){const s=[],o=m(r?g.screenshot:g.icon);if(!t.src)return s.push(m(g.sSrcIsNotSet,{PH1:o})),{imageResourceErrors:s};const a=xe.completeURL(e,t.src);if(!a)return s.push(m(g.sUrlSFailedToParse,{PH1:o,PH2:t.src})),{imageResourceErrors:s};const d=await this.loadImage(a);if(!d)return s.push(m(g.sSFailedToLoad,{PH1:o,PH2:a})),{imageResourceErrors:s};const{wrapper:h,image:p}=d,{naturalWidth:b,naturalHeight:C}=p,v=this.parseSizes(t.sizes,o,a,s),D=v.map(L=>L.formatted).join(" ")+`
`+(t.type||""),De=i.appendFlexedField(D);let R=!1;if(!t.sizes)s.push(m(g.sSDoesNotSpecifyItsSizeInThe,{PH1:o,PH2:a}));else{r&&v.length>0&&"any"in v[0]&&s.push(m(g.screenshotPixelSize,{url:a}));for(const L of v){const{error:H,hasSquareSize:l}=this.checkSizeProblem(L,t.type,p,o,a);if(R=R||l,H)s.push(H);else if(r){const Y="any"in L?p.naturalWidth:L.width,x="any"in L?p.naturalHeight:L.height;Y<320||x<320?s.push(m(g.sSSizeShouldBeAtLeast320,{PH1:o,PH2:a})):Y>3840||x>3840?s.push(m(g.sSSizeShouldBeAtMost3840,{PH1:o,PH2:a})):Y>x*2.3?s.push(m(g.sSWidthDoesNotComplyWithRatioRequirement,{PH1:o,PH2:a})):x>Y*2.3&&s.push(m(g.sSHeightDoesNotComplyWithRatioRequirement,{PH1:o,PH2:a}))}}}p.width=p.naturalWidth;const F=typeof t.purpose=="string"?t.purpose.toLowerCase():"";return F.includes("any")&&F.includes("maskable")&&s.push(m(g.avoidPurposeAnyAndMaskable)),De.appendChild(h),{imageResourceErrors:s,squareSizedIconAvailable:R,naturalWidth:b,naturalHeight:C}}wasShown(){super.wasShown(),this.reportView.registerCSSFiles([Qr]),this.registerCSSFiles([Qr])}async appendWindowControlsToSection(e,t,i){if(!await e.hasStyleSheetText(t))return;await e.toggleWindowControlsToolbar(!1);const s=cr.create(m(g.selectWindowControlsOverlayEmulationOs),!1);s.checkboxElement.addEventListener("click",async()=>{await this.overlayModel?.toggleWindowControlsToolbar(s.checkboxElement.checked)});const o=s.createChild("select","chrome-select");o.appendChild(Lr("Windows","Windows","windows")),o.appendChild(Lr("macOS","Mac","macos")),o.appendChild(Lr("Linux","Linux","linux")),o.selectedIndex=0,this.overlayModel&&(o.value=this.overlayModel?.getWindowControlsConfig().selectedPlatform),o.addEventListener("change",async()=>{const a=o.options[o.selectedIndex].value;this.overlayModel&&(this.overlayModel.setWindowControlsPlatform(a),await this.overlayModel.toggleWindowControlsToolbar(s.checkboxElement.checked))}),this.windowControlsSection.appendRow().appendChild(s),e.setWindowControlsThemeColor(i)}}const Wu=Object.freeze(Object.defineProperty({__proto__:null,AppManifestView:zn},Symbol.toStringTag,{value:"Module"})),Kn={backForwardCache:"Back/forward cache"},Hl=P("panels/application/BackForwardCacheTreeElement.ts",Kn),Vl=B.bind(void 0,Hl);class Wl extends ee{view;constructor(e){super(e,Vl(Kn.backForwardCache),!1,"bfcache");const t=W("database");this.setLeadingIcons([t])}get itemURL(){return"bfcache://"}onselect(e){return super.onselect(e),this.view||(this.view=xt(fi,new wn)),this.showView(this.view),fe.panelShown("back-forward-cache"),!1}}class vs extends Qe{backgroundServiceAgent;events;constructor(e){super(e),this.backgroundServiceAgent=e.backgroundServiceAgent(),e.registerBackgroundServiceDispatcher(this),this.events=new Map}enable(e){this.events.set(e,[]),this.backgroundServiceAgent.invoke_startObserving({service:e})}setRecording(e,t){this.backgroundServiceAgent.invoke_setRecording({shouldRecord:e,service:t})}clearEvents(e){this.events.set(e,[]),this.backgroundServiceAgent.invoke_clearEvents({service:e})}getEvents(e){return this.events.get(e)||[]}recordingStateChanged({isRecording:e,service:t}){this.dispatchEventToListeners(Xt.RecordingStateChanged,{isRecording:e,serviceName:t})}backgroundServiceEventReceived({backgroundServiceEvent:e}){this.events.get(e.service).push(e),this.dispatchEventToListeners(Xt.BackgroundServiceEventReceived,e)}}Qe.register(vs,{capabilities:1,autostart:!1});var Xt;(function(n){n.RecordingStateChanged="RecordingStateChanged",n.BackgroundServiceEventReceived="BackgroundServiceEventReceived"})(Xt||(Xt={}));const _u=Object.freeze(Object.defineProperty({__proto__:null,BackgroundServiceModel:vs,get Events(){return Xt}},Symbol.toStringTag,{value:"Module"})),Ci=new CSSStyleSheet;Ci.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.empty-bold-text {
  display: block;
  font-size: 1.5em;
  margin: 0.83em 0;
  font-weight: bold;
}

.empty-view {
  color: var(--sys-color-token-subtle);
  padding: 30px;
  text-align: center;
  min-width: 70px;
}

.empty-view-scroller {
  justify-content: center;
  overflow: auto;
}

.empty-view p {
  white-space: initial;
  line-height: 18px;
  max-width: 300px;
  flex-shrink: 0;
}

/*# sourceURL=emptyWidget.css */
`);const Yn=new CSSStyleSheet;Yn.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.background-service-toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: var(--sys-color-divider);
}

.data-grid {
  flex: auto;
  border: none;
}

[slot="insertion-point-main"] {
  overflow: auto;
}

.background-service-preview {
  position: absolute;
  background-color: var(--sys-color-cdt-base-container);
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-size: 13px;
  color: var(--sys-color-on-surface-subtle);
}

.background-service-preview > div {
  max-width: 450px;
  margin: 10px;
  text-align: center;
}

.background-service-preview > div > p {
  flex: none;
  white-space: pre-line;
}

.background-service-shortcut {
  color: var(--sys-color-on-surface-subtle);
}

.background-service-metadata {
  padding-left: 5px;
  padding-top: 10px;
}

.background-service-metadata-entry {
  padding-left: 10px;
  padding-bottom: 5px;
}

.background-service-metadata-name {
  color: var(--sys-color-on-surface-subtle);
  display: inline-block;
  margin-right: 0.25em;
  font-weight: bold;
}

.background-service-metadata-value {
  display: inline;
  margin-right: 1em;
  white-space: pre-wrap;
  word-break: break-all;
  user-select: text;
}

.background-service-empty-value {
  color: var(--sys-color-state-disabled);
  font-style: italic;
}

.background-service-record-inline-button {
  margin-bottom: 6px;
}

/*# sourceURL=backgroundServiceView.css */
`);const X={backgroundFetch:"Background fetch",backgroundSync:"Background sync",pushMessaging:"Push messaging",notifications:"Notifications",paymentHandler:"Payment handler",periodicBackgroundSync:"Periodic background sync",clear:"Clear",saveEvents:"Save events",showEventsFromOtherDomains:"Show events from other domains",showEventsForOtherStorageKeys:"Show events from other storage partitions",stopRecordingEvents:"Stop recording events",startRecordingEvents:"Start recording events",timestamp:"Timestamp",event:"Event",origin:"Origin",storageKey:"Storage Key",swScope:"Service Worker Scope",instanceId:"Instance ID",backgroundServices:"Background services",learnMore:"Learn more",selectAnEntryToViewMetadata:"Select an entry to view metadata",recordingSActivity:"Recording {PH1} activity...",devtoolsWillRecordAllSActivity:"DevTools will record all {PH1} activity for up to 3 days, even when closed.",clickTheRecordButtonSOrHitSTo:"Click the record button {PH1} or hit {PH2} to start recording.",empty:"empty",noMetadataForThisEvent:"No metadata for this event"},Jn=P("panels/application/BackgroundServiceView.ts",X),ie=B.bind(void 0,Jn);class Yt extends j{serviceName;model;serviceWorkerManager;securityOriginManager;storageKeyManager;recordAction;recordButton;originCheckbox;storageKeyCheckbox;saveButton;toolbar;splitWidget;dataGrid;previewPanel;selectedEventNode;preview;static getUIString(e){switch(e){case"backgroundFetch":return ie(X.backgroundFetch);case"backgroundSync":return ie(X.backgroundSync);case"pushMessaging":return ie(X.pushMessaging);case"notifications":return ie(X.notifications);case"paymentHandler":return ie(X.paymentHandler);case"periodicBackgroundSync":return ie(X.periodicBackgroundSync);default:return""}}constructor(e,t){super(!0),this.serviceName=e;const i=Cr(e);if(this.element.setAttribute("jslog",`${Z().context(i)}`),this.model=t,this.model.addEventListener(Xt.RecordingStateChanged,this.onRecordingStateChanged,this),this.model.addEventListener(Xt.BackgroundServiceEventReceived,this.onEventReceived,this),this.model.enable(this.serviceName),this.serviceWorkerManager=this.model.target().model(hs),this.securityOriginManager=this.model.target().model(Mi),!this.securityOriginManager)throw new Error("SecurityOriginManager instance is missing");if(this.securityOriginManager.addEventListener(Tt.MainSecurityOriginChanged,()=>this.onOriginChanged()),this.storageKeyManager=this.model.target().model(ur),!this.storageKeyManager)throw new Error("StorageKeyManager instance is missing");this.storageKeyManager.addEventListener("MainStorageKeyChanged",()=>this.onStorageKeyChanged()),this.recordAction=Ka.instance().getAction("background-service.toggle-recording"),this.toolbar=new Ft("background-service-toolbar",this.contentElement),this.toolbar.element.setAttribute("jslog",`${Wi()}`),this.setupToolbar(),this.splitWidget=new Rt(!1,!0),this.splitWidget.show(this.contentElement),this.dataGrid=this.createDataGrid(),this.previewPanel=new j,this.previewPanel.element.setAttribute("jslog",`${Z("preview").track({resize:!0})}`),this.selectedEventNode=null,this.preview=null,this.splitWidget.setMainWidget(this.dataGrid.asWidget()),this.splitWidget.setSidebarWidget(this.previewPanel),this.showPreview(null)}getDataGrid(){return this.dataGrid}async setupToolbar(){this.toolbar.makeWrappable(!0),this.recordButton=Ft.createActionButton(this.recordAction),this.recordButton.toggleOnClick(!1),this.toolbar.appendToolbarItem(this.recordButton);const e=new vt(ie(X.clear),"clear",void 0,"background-service.clear");e.addEventListener("Click",()=>this.clearEvents()),this.toolbar.appendToolbarItem(e),this.toolbar.appendSeparator(),this.saveButton=new vt(ie(X.saveEvents),"download",void 0,"background-service.save-events"),this.saveButton.addEventListener("Click",t=>{this.saveToFile()}),this.saveButton.setEnabled(!1),this.toolbar.appendToolbarItem(this.saveButton),this.toolbar.appendSeparator(),this.originCheckbox=new zr(ie(X.showEventsFromOtherDomains),ie(X.showEventsFromOtherDomains),()=>this.refreshView(),"show-events-from-other-domains"),this.toolbar.appendToolbarItem(this.originCheckbox),this.storageKeyCheckbox=new zr(ie(X.showEventsForOtherStorageKeys),ie(X.showEventsForOtherStorageKeys),()=>this.refreshView(),"show-events-from-other-partitions"),this.toolbar.appendToolbarItem(this.storageKeyCheckbox)}refreshView(){this.clearView();const e=this.model.getEvents(this.serviceName).filter(t=>this.acceptEvent(t));for(const t of e)this.addEvent(t)}clearView(){this.selectedEventNode=null,this.dataGrid.rootNode().removeChildren(),this.saveButton.setEnabled(!1),this.showPreview(null)}toggleRecording(){this.model.setRecording(!this.recordButton.isToggled(),this.serviceName)}clearEvents(){this.model.clearEvents(this.serviceName),this.clearView()}onRecordingStateChanged({data:e}){e.serviceName===this.serviceName&&e.isRecording!==this.recordButton.isToggled()&&(this.recordButton.setToggled(e.isRecording),this.updateRecordButtonTooltip(),this.showPreview(this.selectedEventNode))}updateRecordButtonTooltip(){const e=this.recordButton.isToggled()?ie(X.stopRecordingEvents):ie(X.startRecordingEvents);this.recordButton.setTitle(e,"background-service.toggle-recording")}onEventReceived({data:e}){this.acceptEvent(e)&&this.addEvent(e)}onOriginChanged(){this.originCheckbox.checked()||this.refreshView()}onStorageKeyChanged(){this.storageKeyCheckbox.checked()||this.refreshView()}addEvent(e){const t=this.createEventData(e),i=new Xn(t,e.eventMetadata);this.dataGrid.rootNode().appendChild(i),this.dataGrid.rootNode().children.length===1&&(this.saveButton.setEnabled(!0),this.showPreview(this.selectedEventNode))}createDataGrid(){const e=[{id:"id",title:"#",weight:1},{id:"timestamp",title:ie(X.timestamp),weight:7},{id:"event-name",title:ie(X.event),weight:8},{id:"origin",title:ie(X.origin),weight:8},{id:"storage-key",title:ie(X.storageKey),weight:8},{id:"sw-scope",title:ie(X.swScope),weight:4},{id:"instance-id",title:ie(X.instanceId),weight:8}],t=new _i({displayName:ie(X.backgroundServices),columns:e,editCallback:void 0,refreshCallback:void 0,deleteCallback:void 0});return t.setStriped(!0),t.addEventListener("SelectedNode",i=>this.showPreview(i.data)),t}createEventData(e){let t="";const i=this.serviceWorkerManager?this.serviceWorkerManager.registrations().get(e.serviceWorkerRegistrationId):void 0;return i&&(t=i.scopeURL.substr(i.securityOrigin.length)),{id:this.dataGrid.rootNode().children.length+1,timestamp:Ya(e.timestamp*1e3,!0),origin:e.origin,"storage-key":e.storageKey,"sw-scope":t,"event-name":e.eventName,"instance-id":e.instanceId}}acceptEvent(e){if(e.service!==this.serviceName)return!1;if(this.originCheckbox.checked()||this.storageKeyCheckbox.checked())return!0;const t=e.origin.substr(0,e.origin.length-1),i=e.storageKey;return this.securityOriginManager.securityOrigins().includes(t)||this.storageKeyManager.storageKeys().includes(i)}createLearnMoreLink(){let e="https://developer.chrome.com/docs/devtools/javascript/background-services/?utm_source=devtools";switch(this.serviceName){case"backgroundFetch":e+="#fetch";break;case"backgroundSync":e+="#sync";break;case"pushMessaging":e+="#push";break;case"notifications":e+="#notifications";break}return st.create(e,ie(X.learnMore),void 0,void 0,"learn-more")}showPreview(e){if(this.selectedEventNode&&this.selectedEventNode===e)return;if(this.selectedEventNode=e,this.preview&&this.preview.detach(),this.selectedEventNode){this.preview=this.selectedEventNode.createPreview(),this.preview.show(this.previewPanel.contentElement);return}this.preview=new j,this.preview.contentElement.classList.add("background-service-preview","fill");const t=this.preview.contentElement.createChild("div");if(this.dataGrid.rootNode().children.length)t.createChild("p").textContent=ie(X.selectAnEntryToViewMetadata);else if(this.recordButton.isToggled()){const i=Yt.getUIString(this.serviceName).toLowerCase();t.createChild("p").textContent=ie(X.recordingSActivity,{PH1:i}),t.createChild("p").textContent=ie(X.devtoolsWillRecordAllSActivity,{PH1:i})}else{const i=Ft.createActionButton(this.recordAction),r=document.createElement("b");r.classList.add("background-service-shortcut"),r.textContent=Ja.instance().shortcutsForAction("background-service.toggle-recording")[0].title();const s=Xa(i);s.classList.add("background-service-record-inline-button"),t.createChild("p").appendChild(rt(Jn,X.clickTheRecordButtonSOrHitSTo,{PH1:s,PH2:r})),t.appendChild(this.createLearnMoreLink())}this.preview.show(this.previewPanel.contentElement)}async saveToFile(){const e=`${this.serviceName}-${Qa(new Date)}.json`,t=new ed;if(!await t.open(e))return;const r=this.model.getEvents(this.serviceName).filter(s=>this.acceptEvent(s));await t.write(JSON.stringify(r,void 0,2)),t.close()}wasShown(){super.wasShown(),this.registerCSSFiles([Ci,Yn])}}class Xn extends Dr{eventMetadata;constructor(e,t){super(e),this.eventMetadata=t.sort((i,r)=>Za(i.key,r.key))}createPreview(){const e=new j;e.element.classList.add("background-service-metadata"),e.element.setAttribute("jslog",`${Ce("metadata")}`);for(const t of this.eventMetadata){const i=document.createElement("div");i.classList.add("background-service-metadata-entry"),i.createChild("div","background-service-metadata-name").textContent=t.key+": ",t.value?i.createChild("div","background-service-metadata-value source-code").textContent=t.value:i.createChild("div","background-service-metadata-value background-service-empty-value").textContent=ie(X.empty),e.element.appendChild(i)}if(!e.element.children.length){const t=document.createElement("div");t.classList.add("background-service-metadata-entry"),t.createChild("div","background-service-metadata-name background-service-empty-value").textContent=ie(X.noMetadataForThisEvent),e.element.appendChild(t)}return e}}let _l=class{handleAction(e,t){const i=e.flavor(Yt);switch(t){case"background-service.toggle-recording":{if(!i)throw new Error("BackgroundServiceView instance is missing");return i.toggleRecording(),!0}}return!1}};const qu=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:_l,BackgroundServiceView:Yt,EventDataNode:Xn},Symbol.toStringTag,{value:"Module"})),Qn={bounceTrackingMitigations:"Bounce tracking mitigations"},jl=P("panels/application/BounceTrackingMitigationsTreeElement.ts",Qn),Zn=B.bind(void 0,jl);class eo extends ee{view;constructor(e){super(e,Zn(Qn.bounceTrackingMitigations),!1,"bounce-tracking-mitigations");const t=W("database");this.setLeadingIcons([t])}get itemURL(){return"bounce-tracking-mitigations://"}onselect(e){return super.onselect(e),this.view||(this.view=xt(fi,new yn)),this.showView(this.view),fe.panelShown("bounce-tracking-mitigations"),!1}}const Gu=Object.freeze(Object.defineProperty({__proto__:null,BounceTrackingMitigationsTreeElement:eo,i18nString:Zn},Symbol.toStringTag,{value:"Module"}));class Hi extends Si{model;storageKeyInternal;isLocalStorageInternal;constructor(e,t,i){super(),this.model=e,this.storageKeyInternal=t,this.isLocalStorageInternal=i}static storageId(e,t){return{storageKey:e,isLocalStorage:t}}get id(){return Hi.storageId(this.storageKeyInternal,this.isLocalStorageInternal)}get storageKey(){return this.storageKeyInternal}get isLocalStorage(){return this.isLocalStorageInternal}getItems(){return this.model.agent.invoke_getDOMStorageItems({storageId:this.id}).then(({entries:e})=>e)}setItem(e,t){this.model.agent.invoke_setDOMStorageItem({storageId:this.id,key:e,value:t})}removeItem(e){this.model.agent.invoke_removeDOMStorageItem({storageId:this.id,key:e})}clear(){this.model.agent.invoke_clear({storageId:this.id})}}class Tr extends Qe{storageKeyManagerInternal;storagesInternal;agent;enabled;constructor(e){super(e),this.storageKeyManagerInternal=e.model(ur),this.storagesInternal={},this.agent=e.domstorageAgent()}get storageKeyManagerForTest(){return this.storageKeyManagerInternal}enable(){if(!this.enabled){if(this.target().registerDOMStorageDispatcher(new to(this)),this.storageKeyManagerInternal){this.storageKeyManagerInternal.addEventListener("StorageKeyAdded",this.storageKeyAdded,this),this.storageKeyManagerInternal.addEventListener("StorageKeyRemoved",this.storageKeyRemoved,this);for(const e of this.storageKeyManagerInternal.storageKeys())this.addStorageKey(e)}this.agent.invoke_enable(),this.enabled=!0}}clearForStorageKey(e){if(this.enabled){for(const t of[!0,!1]){const i=this.storageKey(e,t),r=this.storagesInternal[i];if(!r)return;r.clear()}this.removeStorageKey(e),this.addStorageKey(e)}}storageKeyAdded(e){this.addStorageKey(e.data)}addStorageKey(e){for(const t of[!0,!1]){const i=this.storageKey(e,t);console.assert(!this.storagesInternal[i]);const r=new Hi(this,e,t);this.storagesInternal[i]=r,this.dispatchEventToListeners("DOMStorageAdded",r)}}storageKeyRemoved(e){this.removeStorageKey(e.data)}removeStorageKey(e){for(const t of[!0,!1]){const i=this.storageKey(e,t),r=this.storagesInternal[i];r&&(delete this.storagesInternal[i],this.dispatchEventToListeners("DOMStorageRemoved",r))}}storageKey(e,t){return JSON.stringify(Hi.storageId(e,t))}domStorageItemsCleared(e){const t=this.storageForId(e);t&&t.dispatchEventToListeners("DOMStorageItemsCleared")}domStorageItemRemoved(e,t){const i=this.storageForId(e);if(!i)return;const r={key:t};i.dispatchEventToListeners("DOMStorageItemRemoved",r)}domStorageItemAdded(e,t,i){const r=this.storageForId(e);if(!r)return;const s={key:t,value:i};r.dispatchEventToListeners("DOMStorageItemAdded",s)}domStorageItemUpdated(e,t,i,r){const s=this.storageForId(e);if(!s)return;const o={key:t,oldValue:i,value:r};s.dispatchEventToListeners("DOMStorageItemUpdated",o)}storageForId(e){return console.assert(!!e.storageKey),this.storagesInternal[this.storageKey(e.storageKey||"",e.isLocalStorage)]}storages(){const e=[];for(const t in this.storagesInternal)e.push(this.storagesInternal[t]);return e}}Qe.register(Tr,{capabilities:2,autostart:!1});class to{model;constructor(e){this.model=e}domStorageItemsCleared({storageId:e}){this.model.domStorageItemsCleared(e)}domStorageItemRemoved({storageId:e,key:t}){this.model.domStorageItemRemoved(e,t)}domStorageItemAdded({storageId:e,key:t,newValue:i}){this.model.domStorageItemAdded(e,t,i)}domStorageItemUpdated({storageId:e,key:t,oldValue:i,newValue:r}){this.model.domStorageItemUpdated(e,t,i,r)}}const zu=Object.freeze(Object.defineProperty({__proto__:null,DOMStorage:Hi,DOMStorageDispatcher:to,DOMStorageModel:Tr},Symbol.toStringTag,{value:"Module"}));class io extends Si{#t;#e;#i;#r;constructor(e,t,i,r){super(),this.#t=e,this.#e=t,this.#i=i,this.#r=r}get model(){return this.#t}get extensionId(){return this.#e}get name(){return this.#i}get key(){return`${this.extensionId}-${this.storageArea}`}get storageArea(){return this.#r}async getItems(e){const t={id:this.#e,storageArea:this.#r};e&&(t.keys=e);const i=await this.#t.agent.invoke_getStorageItems(t);if(i.getError())throw new Error(i.getError());return i.data}async setItem(e,t){const i=await this.#t.agent.invoke_setStorageItems({id:this.#e,storageArea:this.#r,values:{[e]:t}});if(i.getError())throw new Error(i.getError())}async removeItem(e){const t=await this.#t.agent.invoke_removeStorageItems({id:this.#e,storageArea:this.#r,keys:[e]});if(t.getError())throw new Error(t.getError())}async clear(){const e=await this.#t.agent.invoke_clearStorageItems({id:this.#e,storageArea:this.#r});if(e.getError())throw new Error(e.getError())}matchesTarget(e){if(!e)return!1;const t=e.targetInfo()?.url,i=t?xe.fromString(t):null;return i?.scheme==="chrome-extension"&&i?.host===this.extensionId}}class ws extends Qe{#t;#e;agent;#i;constructor(e){super(e),this.#t=e.model(tn),this.#e=new Map,this.agent=e.extensionsAgent()}enable(){this.#i||(this.#t&&(this.#t.addEventListener(Bs.ExecutionContextCreated,this.#a,this),this.#t.addEventListener(Bs.ExecutionContextDestroyed,this.#l,this),this.#t.executionContexts().forEach(this.#o,this)),this.#i=!0)}#r(e){const t=this.#e.get(e);if(t)return t;const i=new Map;return this.#e.set(e,i),i}#s(e,t){for(const i of["session","local","sync","managed"]){const r=this.#r(e),s=new io(this,e,t,i);console.assert(!r.get(i)),s.getItems([]).then(()=>{this.#e.get(e)===r&&(r.get(i)||(r.set(i,s),this.dispatchEventToListeners("ExtensionStorageAdded",s)))}).catch(()=>{})}}#n(e){const t=this.#e.get(e);if(t){for(const[i,r]of t)t.delete(i),this.dispatchEventToListeners("ExtensionStorageRemoved",r);this.#e.delete(e)}}#o(e){const t=this.#d(e);t&&this.#s(t,e.name)}#a(e){this.#o(e.data)}#d(e){const t=xe.fromString(e.origin);return t&&t.scheme==="chrome-extension"?t.host:void 0}#c(e){const t=this.#d(e);if(t){if(this.#t?.executionContexts().some(i=>this.#d(i)===t))return;this.#n(t)}}#l(e){this.#c(e.data)}storageForIdAndArea(e,t){return this.#e.get(e)?.get(t)}storages(){const e=[];for(const t of this.#e.values())e.push(...t.values());return e}}Qe.register(ws,{capabilities:4,autostart:!1});const Ku=Object.freeze(Object.defineProperty({__proto__:null,ExtensionStorage:io,ExtensionStorageModel:ws},Symbol.toStringTag,{value:"Module"})),lt="";class Se extends Qe{storageBucketModel;indexedDBAgent;storageAgent;databasesInternal;databaseNamesByStorageKeyAndBucket;updatedStorageBuckets;throttler;enabled;constructor(e){super(e),e.registerStorageDispatcher(this),this.storageBucketModel=e.model(Vt),this.indexedDBAgent=e.indexedDBAgent(),this.storageAgent=e.storageAgent(),this.databasesInternal=new Map,this.databaseNamesByStorageKeyAndBucket=new Map,this.updatedStorageBuckets=new Set,this.throttler=new $i(1e3)}static keyFromIDBKey(e){if(typeof e>"u"||e===null)return;let t;switch(typeof e){case"number":t={type:"number",number:e};break;case"string":t={type:"string",string:e};break;case"object":if(e instanceof Date)t={type:"date",date:e.getTime()};else if(Array.isArray(e)){const i=[];for(let r=0;r<e.length;++r){const s=Se.keyFromIDBKey(e[r]);s&&i.push(s)}t={type:"array",array:i}}else return;break;default:return}return t}static keyRangeFromIDBKeyRange(e){return{lower:Se.keyFromIDBKey(e.lower),upper:Se.keyFromIDBKey(e.upper),lowerOpen:!!e.lowerOpen,upperOpen:!!e.upperOpen}}static idbKeyPathFromKeyPath(e){let t;switch(e.type){case"null":t=null;break;case"string":t=e.string;break;case"array":t=e.array;break}return t}static keyPathStringFromIDBKeyPath(e){return typeof e=="string"?'"'+e+'"':e instanceof Array?'["'+e.join('", "')+'"]':null}enable(){if(!this.enabled){if(this.indexedDBAgent.invoke_enable(),this.storageBucketModel){this.storageBucketModel.addEventListener("BucketAdded",this.storageBucketAdded,this),this.storageBucketModel.addEventListener("BucketRemoved",this.storageBucketRemoved,this);for(const{bucket:e}of this.storageBucketModel.getBuckets())this.addStorageBucket(e)}this.enabled=!0}}clearForStorageKey(e){if(!this.enabled||!this.databaseNamesByStorageKeyAndBucket.has(e))return;for(const[i]of this.databaseNamesByStorageKeyAndBucket.get(e)||[]){const r=this.storageBucketModel?.getBucketByName(e,i??void 0)?.bucket;r&&this.removeStorageBucket(r)}this.databaseNamesByStorageKeyAndBucket.delete(e);const t=this.storageBucketModel?.getBucketsForStorageKey(e)||[];for(const{bucket:i}of t)this.addStorageBucket(i)}async deleteDatabase(e){this.enabled&&(await this.indexedDBAgent.invoke_deleteDatabase({storageBucket:e.storageBucket,databaseName:e.name}),this.loadDatabaseNamesByStorageBucket(e.storageBucket))}async refreshDatabaseNames(){for(const[e]of this.databaseNamesByStorageKeyAndBucket){const t=this.databaseNamesByStorageKeyAndBucket.get(e)?.keys()||[];for(const i of t){const r=this.storageBucketModel?.getBucketByName(e,i??void 0)?.bucket;r&&await this.loadDatabaseNamesByStorageBucket(r)}}this.dispatchEventToListeners(_e.DatabaseNamesRefreshed)}refreshDatabase(e){this.loadDatabase(e,!0)}async clearObjectStore(e,t){await this.indexedDBAgent.invoke_clearObjectStore({storageBucket:e.storageBucket,databaseName:e.name,objectStoreName:t})}async deleteEntries(e,t,i){const r=Se.keyRangeFromIDBKeyRange(i);await this.indexedDBAgent.invoke_deleteObjectStoreEntries({storageBucket:e.storageBucket,databaseName:e.name,objectStoreName:t,keyRange:r})}storageBucketAdded({data:{bucketInfo:{bucket:e}}}){this.addStorageBucket(e)}storageBucketRemoved({data:{bucketInfo:{bucket:e}}}){this.removeStorageBucket(e)}addStorageBucket(e){const{storageKey:t}=e;this.databaseNamesByStorageKeyAndBucket.has(t)||(this.databaseNamesByStorageKeyAndBucket.set(t,new Map),this.storageAgent.invoke_trackIndexedDBForStorageKey({storageKey:t}));const i=this.databaseNamesByStorageKeyAndBucket.get(t)||new Map;console.assert(!i.has(e.name??lt)),i.set(e.name??lt,new Set),this.loadDatabaseNamesByStorageBucket(e)}removeStorageBucket(e){const{storageKey:t}=e;console.assert(this.databaseNamesByStorageKeyAndBucket.has(t));const i=this.databaseNamesByStorageKeyAndBucket.get(t)||new Map;console.assert(i.has(e.name??lt));const r=i.get(e.name??lt)||new Map;for(const s of r)this.databaseRemovedForStorageBucket(s);i.delete(e.name??lt),i.size===0&&(this.databaseNamesByStorageKeyAndBucket.delete(t),this.storageAgent.invoke_untrackIndexedDBForStorageKey({storageKey:t}))}updateStorageKeyDatabaseNames(e,t){const i=this.databaseNamesByStorageKeyAndBucket.get(e.storageKey);if(i===void 0)return;const r=new Set(t.map(o=>new or(e,o))),s=new Set(i.get(e.name??lt));i.set(e.name??lt,r);for(const o of s)o.inSet(r)||this.databaseRemovedForStorageBucket(o);for(const o of r)o.inSet(s)||this.databaseAddedForStorageBucket(o)}databases(){const e=[];for(const[,t]of this.databaseNamesByStorageKeyAndBucket)for(const[,i]of t)for(const r of i)e.push(r);return e}databaseAddedForStorageBucket(e){this.dispatchEventToListeners(_e.DatabaseAdded,{model:this,databaseId:e})}databaseRemovedForStorageBucket(e){this.dispatchEventToListeners(_e.DatabaseRemoved,{model:this,databaseId:e})}async loadDatabaseNamesByStorageBucket(e){const{storageKey:t}=e,{databaseNames:i}=await this.indexedDBAgent.invoke_requestDatabaseNames({storageBucket:e});return i?this.databaseNamesByStorageKeyAndBucket.has(t)?(this.databaseNamesByStorageKeyAndBucket.get(t)||new Map).has(e.name??lt)?(this.updateStorageKeyDatabaseNames(e,i),i):[]:[]:[]}async loadDatabase(e,t){const i=(await this.indexedDBAgent.invoke_requestDatabase({storageBucket:e.storageBucket,databaseName:e.name})).databaseWithObjectStores;if(!this.databaseNamesByStorageKeyAndBucket.get(e.storageBucket.storageKey)?.has(e.storageBucket.name??lt)||!i)return;const r=new so(e,i.version);this.databasesInternal.set(e,r);for(const s of i.objectStores){const o=Se.idbKeyPathFromKeyPath(s.keyPath),a=new no(s.name,o,s.autoIncrement);for(let d=0;d<s.indexes.length;++d){const h=s.indexes[d],p=Se.idbKeyPathFromKeyPath(h.keyPath),b=new oo(h.name,p,h.unique,h.multiEntry);a.indexes.set(b.name,b)}r.objectStores.set(a.name,a)}this.dispatchEventToListeners(_e.DatabaseLoaded,{model:this,database:r,entriesUpdated:t})}loadObjectStoreData(e,t,i,r,s,o){this.requestData(e,e.name,t,"",i,r,s,o)}loadIndexData(e,t,i,r,s,o,a){this.requestData(e,e.name,t,i,r,s,o,a)}async requestData(e,t,i,r,s,o,a,d){const h=s?Se.keyRangeFromIDBKeyRange(s):void 0,p=this.target().model(tn),b=await this.indexedDBAgent.invoke_requestData({storageBucket:e.storageBucket,databaseName:t,objectStoreName:i,indexName:r,skipCount:o,pageSize:a,keyRange:h});if(!p||!this.databaseNamesByStorageKeyAndBucket.get(e.storageBucket.storageKey)?.has(e.storageBucket.name??lt))return;if(b.getError()){console.error("IndexedDBAgent error: "+b.getError());return}const C=b.objectStoreDataEntries,v=[];for(const D of C){const De=p?.createRemoteObject(D.key),R=p?.createRemoteObject(D.primaryKey),F=p?.createRemoteObject(D.value);if(!De||!R||!F)return;v.push(new ro(De,R,F))}d(v,b.hasMore)}async getMetadata(e,t){const i=e.name,r=t.name,s=await this.indexedDBAgent.invoke_getMetadata({storageBucket:e.storageBucket,databaseName:i,objectStoreName:r});return s.getError()?(console.error("IndexedDBAgent error: "+s.getError()),null):{entriesCount:s.entriesCount,keyGeneratorValue:s.keyGeneratorValue}}async refreshDatabaseListForStorageBucket(e){const t=await this.loadDatabaseNamesByStorageBucket(e);for(const i of t)this.loadDatabase(new or(e,i),!1)}indexedDBListUpdated({storageKey:e,bucketId:t}){const i=this.storageBucketModel?.getBucketById(t)?.bucket;e&&i&&(this.updatedStorageBuckets.add(i),this.throttler.schedule(()=>{const r=Array.from(this.updatedStorageBuckets,s=>{this.refreshDatabaseListForStorageBucket(s)});return this.updatedStorageBuckets.clear(),Promise.all(r)}))}indexedDBContentUpdated({bucketId:e,databaseName:t,objectStoreName:i}){const r=this.storageBucketModel?.getBucketById(e)?.bucket;if(r){const s=new or(r,t);this.dispatchEventToListeners(_e.IndexedDBContentUpdated,{databaseId:s,objectStoreName:i,model:this})}}attributionReportingTriggerRegistered(e){}cacheStorageListUpdated(e){}cacheStorageContentUpdated(e){}interestGroupAccessed(e){}interestGroupAuctionEventOccurred(e){}interestGroupAuctionNetworkRequestCreated(e){}sharedStorageAccessed(e){}storageBucketCreatedOrUpdated(e){}storageBucketDeleted(e){}attributionReportingSourceRegistered(e){}}Qe.register(Se,{capabilities:8192,autostart:!1});var _e;(function(n){n.DatabaseAdded="DatabaseAdded",n.DatabaseRemoved="DatabaseRemoved",n.DatabaseLoaded="DatabaseLoaded",n.DatabaseNamesRefreshed="DatabaseNamesRefreshed",n.IndexedDBContentUpdated="IndexedDBContentUpdated"})(_e||(_e={}));class ro{key;primaryKey;value;constructor(e,t,i){this.key=e,this.primaryKey=t,this.value=i}}class or{storageBucket;name;constructor(e,t){this.storageBucket=e,this.name=t}inBucket(e){return this.storageBucket.name===e.name}equals(e){return this.name===e.name&&this.storageBucket.name===e.storageBucket.name&&this.storageBucket.storageKey===e.storageBucket.storageKey}inSet(e){for(const t of e)if(this.equals(t))return!0;return!1}}class so{databaseId;version;objectStores;constructor(e,t){this.databaseId=e,this.version=t,this.objectStores=new Map}}class no{name;keyPath;autoIncrement;indexes;constructor(e,t,i){this.name=e,this.keyPath=t,this.autoIncrement=i,this.indexes=new Map}get keyPathString(){return Se.keyPathStringFromIDBKeyPath(this.keyPath)}}class oo{name;keyPath;unique;multiEntry;constructor(e,t,i,r){this.name=e,this.keyPath=t,this.unique=i,this.multiEntry=r}get keyPathString(){return Se.keyPathStringFromIDBKeyPath(this.keyPath)}}const Yu=Object.freeze(Object.defineProperty({__proto__:null,Database:so,DatabaseId:or,Entry:ro,get Events(){return _e},Index:oo,IndexedDBModel:Se,ObjectStore:no},Symbol.toStringTag,{value:"Module"})),ao=new CSSStyleSheet;ao.replaceSync(`/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

.indexed-db-data-view .data-view-toolbar {
  position: relative;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
}

.indexed-db-data-view .data-grid {
  flex: auto;
}

.indexed-db-data-view .data-grid .data-container tr:nth-last-child(1) {
  background-color: var(--sys-color-cdt-base-container);
}

.indexed-db-data-view .data-grid .data-container tr:nth-last-child(1) td {
  border: 0;
}

.indexed-db-data-view .data-grid .data-container tr:nth-last-child(2) td {
  border-bottom: 1px solid var(--sys-color-divider);
}

.indexed-db-data-view .data-grid:focus .data-container tr.selected {
  background-color: var(--sys-color-tonal-container);
  color: inherit;
}

.indexed-db-data-view .section,
.indexed-db-data-view .section > .header,
.indexed-db-data-view .section > .header .title {
  margin: 0;
  min-height: inherit;
  line-height: inherit;
}

.indexed-db-data-view .data-grid .data-container td .section .header .title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.indexed-db-key-path {
  color: var(--sys-color-error);
  white-space: pre-wrap;
  unicode-bidi: -webkit-isolate;
}

.indexed-db-container {
  overflow: auto;
}

.indexed-db-header {
  min-width: 400px;
  flex-shrink: 0;
  flex-grow: 0;
}

.source-code.indexed-db-key-path {
  font-size: unset !important; /* stylelint-disable-line declaration-no-important */
}

.resources-toolbar {
  padding-right: 10px;
}

.object-store-summary-bar {
  flex: 0 0 27px;
  line-height: 27px;
  padding-left: 5px;
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/*# sourceURL=indexedDBViews.css */
`);const{html:ql}=ne,se={version:"Version",objectStores:"Object stores",deleteDatabase:"Delete database",refreshDatabase:"Refresh database",pleaseConfirmDeleteOfSDatabase:'Please confirm delete of "{PH1}" database.',idb:"IDB",refresh:"Refresh",deleteSelected:"Delete selected",clearObjectStore:"Clear object store",dataMayBeStale:"Data may be stale",someEntriesMayHaveBeenModified:"Some entries may have been modified",keyString:"Key",primaryKey:"Primary key",valueString:"Value",indexedDb:"Indexed DB",keyPath:"Key path: ",showPreviousPage:"Show previous page",showNextPage:"Show next page",filterByKey:"Filter by key (show keys greater or equal to)",expandRecursively:"Expand Recursively",collapse:"Collapse",totalEntriesS:"Total entries: {PH1}",keyGeneratorValueS:"Key generator value: {PH1}"},Gl=P("panels/application/IndexedDBViews.ts",se),ae=B.bind(void 0,Gl);class bs extends yi{model;database;constructor(e,t){super(),this.model=e,t&&this.update(t)}getTitle(){return this.database?.databaseId.name}async renderReportContent(){return this.database?ql`
      ${await super.renderReportContent()}
      ${this.key(ae(se.version))}
      ${this.value(this.database.version.toString())}
      ${this.key(ae(se.objectStores))}
      ${this.value(this.database.objectStores.size.toString())}
      <devtools-report-divider></devtools-report-divider>
      <devtools-report-section>
      <devtools-button
          aria-label=${ae(se.deleteDatabase)}
          .variant=${"outlined"}
          @click=${this.deleteDatabase}
          jslog=${de("delete-database").track({click:!0})}>
        ${ae(se.deleteDatabase)}
      </devtools-button>&nbsp;
      <devtools-button
          aria-label=${ae(se.refreshDatabase)}
          .variant=${"outlined"}
          @click=${this.refreshDatabaseButtonClicked}
          jslog=${de("refresh-database").track({click:!0})}>
        ${ae(se.refreshDatabase)}
      </devtools-button>
      </devtools-report-section>
      `:S}refreshDatabaseButtonClicked(){this.model.refreshDatabase(this.database.databaseId)}update(e){this.database=e;const t=this.model.target().model(Vt)?.getBucketByName(e.databaseId.storageBucket.storageKey,e.databaseId.storageBucket.name);t?this.setStorageBucket(t):this.setStorageKey(e.databaseId.storageBucket.storageKey),this.render().then(()=>this.updatedForTests())}updatedForTests(){}async deleteDatabase(){await Zs.show(ae(se.pleaseConfirmDeleteOfSDatabase,{PH1:this.database.databaseId.name}),this,{jslogContext:"delete-database-confirmation"})&&this.model.deleteDatabase(this.database.databaseId)}wasShown(){super.wasShown()}}customElements.define("devtools-idb-database-view",bs);class Ss extends ps{model;databaseId;isIndex;refreshObjectStoreCallback;refreshButton;deleteSelectedButton;clearButton;needsRefresh;clearingObjectStore;pageSize;skipCount;entries;objectStore;index;keyInput;dataGrid;previouslySelectedNode;lastPageSize;lastSkipCount;pageBackButton;pageForwardButton;lastKey;summaryBarElement;constructor(e,t,i,r,s){super(ae(se.idb)),this.model=e,this.databaseId=t,this.isIndex=!!r,this.refreshObjectStoreCallback=s,this.element.classList.add("indexed-db-data-view","storage-view"),this.element.setAttribute("jslog",`${Z("indexed-db-data-view")}`),this.refreshButton=new vt(ae(se.refresh),"refresh"),this.refreshButton.addEventListener("Click",this.refreshButtonClicked,this),this.refreshButton.element.setAttribute("jslog",`${de("refresh").track({click:!0})}`),this.deleteSelectedButton=new vt(ae(se.deleteSelected),"bin"),this.deleteSelectedButton.addEventListener("Click",a=>{this.deleteButtonClicked(null)}),this.deleteSelectedButton.element.setAttribute("jslog",`${de("delete-selected").track({click:!0})}`),this.clearButton=new vt(ae(se.clearObjectStore),"clear"),this.clearButton.addEventListener("Click",()=>{this.clearButtonClicked()},this),this.clearButton.element.setAttribute("jslog",`${de("clear-all").track({click:!0})}`);const o=hi({title:ae(se.dataMayBeStale),iconName:"warning",color:"var(--icon-warning)",width:"20px",height:"20px"});this.needsRefresh=new rn(o),this.needsRefresh.setVisible(!1),this.needsRefresh.setTitle(ae(se.someEntriesMayHaveBeenModified)),this.clearingObjectStore=!1,this.createEditorToolbar(),this.pageSize=50,this.skipCount=0,this.update(i,r),this.entries=[]}createDataGrid(){const e=this.isIndex&&this.index?this.index.keyPath:this.objectStore.keyPath,t=[],i={title:void 0,titleDOMFragment:void 0,sortable:!1,sort:void 0,align:void 0,width:void 0,fixedWidth:void 0,editable:void 0,nonSelectable:void 0,longText:void 0,disclosure:void 0,weight:void 0,allowInSortByEvenWhenHidden:void 0,dataType:void 0,defaultWeight:void 0};t.push({...i,id:"number",title:"#",sortable:!1,width:"50px"}),t.push({...i,id:"key",titleDOMFragment:this.keyColumnHeaderFragment(ae(se.keyString),e),sortable:!1}),this.isIndex&&t.push({...i,id:"primary-key",titleDOMFragment:this.keyColumnHeaderFragment(ae(se.primaryKey),this.objectStore.keyPath),sortable:!1});const r=ae(se.valueString);t.push({...i,id:"value",title:r,sortable:!1});const s=new _i({displayName:ae(se.indexedDb),columns:t,deleteCallback:this.deleteButtonClicked.bind(this),refreshCallback:this.updateData.bind(this,!0),editCallback:void 0});return s.setStriped(!0),s.addEventListener("SelectedNode",()=>{this.updateToolbarEnablement(),this.updateSelectionColor()},this),s}keyColumnHeaderFragment(e,t){const i=document.createDocumentFragment();if(ye(i,e),t===null)return i;if(ye(i," ("+ae(se.keyPath)),Array.isArray(t)){ye(i,"[");for(let r=0;r<t.length;++r)r!==0&&ye(i,", "),i.appendChild(this.keyPathStringFragment(t[r]));ye(i,"]")}else{const r=t;i.appendChild(this.keyPathStringFragment(r))}return ye(i,")"),i}keyPathStringFragment(e){const t=document.createDocumentFragment();ye(t,'"');const i=t.createChild("span","source-code indexed-db-key-path");return i.textContent=e,ye(t,'"'),t}createEditorToolbar(){const e=new Ft("data-view-toolbar",this.element);e.element.setAttribute("jslog",`${Wi()}`),e.appendToolbarItem(this.refreshButton),e.appendToolbarItem(this.clearButton),e.appendToolbarItem(this.deleteSelectedButton),e.appendToolbarItem(new Kr),this.pageBackButton=new vt(ae(se.showPreviousPage),"triangle-left",void 0,"prev-page"),this.pageBackButton.addEventListener("Click",this.pageBackButtonClicked,this),e.appendToolbarItem(this.pageBackButton),this.pageForwardButton=new vt(ae(se.showNextPage),"triangle-right",void 0,"next-page"),this.pageForwardButton.setEnabled(!1),this.pageForwardButton.addEventListener("Click",this.pageForwardButtonClicked,this),e.appendToolbarItem(this.pageForwardButton),this.keyInput=new gs(ae(se.filterByKey),.5),this.keyInput.addEventListener("TextChanged",this.updateData.bind(this,!1)),e.appendToolbarItem(this.keyInput),e.appendToolbarItem(new Kr),e.appendToolbarItem(this.needsRefresh)}pageBackButtonClicked(){this.skipCount=Math.max(0,this.skipCount-this.pageSize),this.updateData(!1)}pageForwardButtonClicked(){this.skipCount=this.skipCount+this.pageSize,this.updateData(!1)}populateContextMenu(e,t){const i=t;i.valueObjectPresentation&&(e.revealSection().appendItem(ae(se.expandRecursively),()=>{i.valueObjectPresentation&&i.valueObjectPresentation.objectTreeElement().expandRecursively()},{jslogContext:"expand-recursively"}),e.revealSection().appendItem(ae(se.collapse),()=>{i.valueObjectPresentation&&i.valueObjectPresentation.objectTreeElement().collapse()},{jslogContext:"collapse"}))}refreshData(){this.updateData(!0)}update(e,t){this.objectStore=e,this.index=t,this.dataGrid&&this.dataGrid.asWidget().detach(),this.dataGrid=this.createDataGrid(),this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this)),this.dataGrid.asWidget().show(this.element),this.skipCount=0,this.updateData(!0)}parseKey(e){let t;try{t=JSON.parse(e)}catch{t=e}return t}updateData(e){const t=this.parseKey(this.keyInput.value()),i=this.pageSize;let r=this.skipCount,s=this.dataGrid.selectedNode?this.dataGrid.selectedNode.data.number:0;if(s=Math.max(s,this.skipCount),this.clearButton.setEnabled(!this.isIndex),!e&&this.lastKey===t&&this.lastPageSize===i&&this.lastSkipCount===r)return;(this.lastKey!==t||this.lastPageSize!==i)&&(r=0,this.skipCount=0),this.lastKey=t,this.lastPageSize=i,this.lastSkipCount=r;function o(d,h){this.clear(),this.entries=d;let p=null;for(let b=0;b<d.length;++b){const C={};C.number=b+r,C.key=d[b].key,C["primary-key"]=d[b].primaryKey,C.value=d[b].value;const v=new lo(C);this.dataGrid.rootNode().appendChild(v),C.number<=s&&(p=v)}p&&p.select(),this.pageBackButton.setEnabled(!!r),this.pageForwardButton.setEnabled(h),this.needsRefresh.setVisible(!1),this.updateToolbarEnablement(),this.updateSelectionColor(),this.updatedDataForTests()}const a=t?window.IDBKeyRange.lowerBound(t):null;this.isIndex&&this.index?this.model.loadIndexData(this.databaseId,this.objectStore.name,this.index.name,a,r,i,o.bind(this)):this.model.loadObjectStoreData(this.databaseId,this.objectStore.name,a,r,i,o.bind(this)),this.model.getMetadata(this.databaseId,this.objectStore).then(this.updateSummaryBar.bind(this))}updateSummaryBar(e){if(this.summaryBarElement||(this.summaryBarElement=this.element.createChild("div","object-store-summary-bar")),this.summaryBarElement.removeChildren(),!e)return;const t=" ❘ ",i=this.summaryBarElement.createChild("span");i.textContent=ae(se.totalEntriesS,{PH1:String(e.entriesCount)}),this.objectStore.autoIncrement&&(i.textContent+=t,i.textContent+=ae(se.keyGeneratorValueS,{PH1:String(e.keyGeneratorValue)}))}updatedDataForTests(){}refreshButtonClicked(){this.updateData(!0)}async clearButtonClicked(){this.clearButton.setEnabled(!1),this.clearingObjectStore=!0,await this.model.clearObjectStore(this.databaseId,this.objectStore.name),this.clearingObjectStore=!1,this.clearButton.setEnabled(!0),this.updateData(!0)}markNeedsRefresh(){this.clearingObjectStore||this.needsRefresh.setVisible(!0)}async deleteButtonClicked(e){if(!e&&(e=this.dataGrid.selectedNode,!e))return;const i=(this.isIndex?e.data["primary-key"]:e.data.key).value;await this.model.deleteEntries(this.databaseId,this.objectStore.name,window.IDBKeyRange.only(i)),this.refreshObjectStoreCallback()}clear(){this.dataGrid.rootNode().removeChildren(),this.entries=[]}updateToolbarEnablement(){const e=!this.dataGrid||this.dataGrid.rootNode().children.length===0;this.deleteSelectedButton.setEnabled(!e&&this.dataGrid.selectedNode!==null)}updateSelectionColor(){this.previouslySelectedNode&&this.previouslySelectedNode.element().querySelectorAll(".source-code").forEach(e=>{e.shadowRoot?.adoptedStyleSheets.pop()}),this.previouslySelectedNode=this.dataGrid.selectedNode??void 0,this.dataGrid.selectedNode?.element().querySelectorAll(".source-code").forEach(e=>{const t=e.shadowRoot,i=new CSSStyleSheet;i.replaceSync("::selection {background-color: var(--sys-color-state-focus-select);}"),t?.adoptedStyleSheets.push(i)})}wasShown(){super.wasShown(),this.registerCSSFiles([ao])}}class lo extends Dr{selectable;valueObjectPresentation;constructor(e){super(e,!1),this.selectable=!0,this.valueObjectPresentation=null}createCell(e){const t=super.createCell(e),i=this.data[e];switch(e){case"value":{t.removeChildren();const r=Ls.defaultObjectPropertiesSection(i,void 0,!0,!0);t.appendChild(r.element),this.valueObjectPresentation=r;break}case"key":case"primary-key":{t.removeChildren();const r=Ls.defaultObjectPresentation(i,void 0,!0,!0);t.appendChild(r);break}}return t}}const Ju=Object.freeze(Object.defineProperty({__proto__:null,IDBDataGridNode:lo,IDBDataView:Ss,IDBDatabaseView:bs},Symbol.toStringTag,{value:"Module"}));class gi extends Qe{storageAgent;enabled;constructor(e){super(e),e.registerStorageDispatcher(this),this.storageAgent=e.storageAgent(),this.enabled=!1}enable(){this.enabled||this.storageAgent.invoke_setInterestGroupTracking({enable:!0})}disable(){this.enabled&&this.storageAgent.invoke_setInterestGroupTracking({enable:!1})}interestGroupAccessed(e){this.dispatchEventToListeners("InterestGroupAccess",e)}attributionReportingTriggerRegistered(e){}indexedDBListUpdated(e){}indexedDBContentUpdated(e){}interestGroupAuctionEventOccurred(e){}interestGroupAuctionNetworkRequestCreated(e){}cacheStorageListUpdated(e){}cacheStorageContentUpdated(e){}sharedStorageAccessed(e){}storageBucketCreatedOrUpdated(e){}storageBucketDeleted(e){}attributionReportingSourceRegistered(e){}}Qe.register(gi,{capabilities:8192,autostart:!1});const Xu=Object.freeze(Object.defineProperty({__proto__:null,InterestGroupStorageModel:gi},Symbol.toStringTag,{value:"Module"})),co=new CSSStyleSheet;co.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

devtools-interest-group-access-grid {
  overflow: auto;
}

.placeholder {
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  overflow: auto;
  text-align: center;

  & div {
    width: 100%;
  }
}

/*# sourceURL=interestGroupStorageView.css */
`);const ts={clickToDisplayBody:"Click on any interest group event to display the group's current state",noDataAvailable:"No details available for the selected interest group. The browser may have left the group."},zl=P("panels/application/InterestGroupStorageView.ts",ts),zs=B.bind(void 0,zl);function Kl(n,e){return n.accessTime===e.accessTime&&n.type===e.type&&n.ownerOrigin===e.ownerOrigin&&n.name===e.name}class uo extends Rt{interestGroupGrid=new Ln;events=[];detailsGetter;noDataView;noDisplayView;constructor(e){super(!1,!0),this.element.setAttribute("jslog",`${Z("interest-groups")}`),this.detailsGetter=e;const t=new j;this.noDisplayView=new j,this.noDataView=new j,t.setMinimumSize(0,80),this.setMainWidget(t),this.noDisplayView.setMinimumSize(0,40),this.setSidebarWidget(this.noDisplayView),this.noDataView.setMinimumSize(0,40),t.contentElement.appendChild(this.interestGroupGrid),this.interestGroupGrid.addEventListener("cellfocused",this.onFocus.bind(this)),this.noDisplayView.contentElement.classList.add("placeholder"),this.noDisplayView.contentElement.setAttribute("jslog",`${Z("details").track({resize:!0})}`);const i=this.noDisplayView.contentElement.createChild("div");i.textContent=zs(ts.clickToDisplayBody),this.noDataView.contentElement.classList.add("placeholder"),this.noDataView.contentElement.setAttribute("jslog",`${Z("details").track({resize:!0})}`);const r=this.noDataView.contentElement.createChild("div");r.textContent=zs(ts.noDataAvailable)}wasShown(){super.wasShown();const e=this.sidebarWidget();e&&e.registerCSSFiles([co])}addEvent(e){this.events.find(i=>Kl(i,e))||(this.events.push(e),this.interestGroupGrid.data=this.events)}clearEvents(){this.events=[],this.interestGroupGrid.data=this.events,this.setSidebarWidget(this.noDisplayView),this.sidebarUpdatedForTesting()}async onFocus(e){const i=e.data.row;if(!i)return;const r=i.cells.find(d=>d.columnId==="event-group-owner")?.value,s=i.cells.find(d=>d.columnId==="event-group-name")?.value,o=i.cells.find(d=>d.columnId==="event-type")?.value;if(!r||!s)return;let a=null;if(o!=="additionalBid"&&o!=="additionalBidWin"&&o!=="topLevelAdditionalBid"&&(a=await this.detailsGetter.getInterestGroupDetails(r,s)),a){const d=await Er.createView(JSON.stringify(a));d?.setMinimumSize(0,40),d&&(d.contentElement.setAttribute("jslog",`${Z("details").track({resize:!0})}`),this.setSidebarWidget(d))}else this.setSidebarWidget(this.noDataView);this.sidebarUpdatedForTesting()}getEventsForTesting(){return this.events}getInterestGroupGridForTesting(){return this.interestGroupGrid}sidebarUpdatedForTesting(){}}const Qu=Object.freeze(Object.defineProperty({__proto__:null,InterestGroupStorageView:uo},Symbol.toStringTag,{value:"Module"})),ho={interestGroups:"Interest groups"},Yl=P("panels/application/InterestGroupTreeElement.ts",ho),po=B.bind(void 0,Yl);class go extends ee{view;constructor(e){super(e,po(ho.interestGroups),!1,"interest-groups");const t=W("database");this.setLeadingIcons([t]),this.view=new uo(this)}get itemURL(){return"interest-groups://"}async getInterestGroupDetails(e,t){const i=w.instance().primaryPageTarget();return i?(await i.storageAgent().invoke_getInterestGroupDetails({ownerOrigin:e,name:t})).details:null}onselect(e){return super.onselect(e),this.showView(this.view),fe.panelShown("interest-groups"),!1}addEvent(e){this.view.addEvent(e)}clearEvents(){this.view.clearEvents()}}const Zu=Object.freeze(Object.defineProperty({__proto__:null,InterestGroupTreeElement:go,i18nString:po},Symbol.toStringTag,{value:"Module"})),Vi=new CSSStyleSheet;Vi.replaceSync(`/*
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.report-content-box {
  overflow: initial;
}

.report-field-name {
  flex: 0 0 200px;
}

.report-field-value {
  user-select: text;
  display: flex;
}

.report-field .inline-name {
  color: var(--sys-color-state-disabled);
  padding-left: 2ex;
  user-select: none;
  white-space: pre-line;
}

.report-field .inline-name::after {
  content: ":\\A0";
}

.report-field .inline-comment {
  color: var(--sys-color-token-subtle);
  padding-left: 1ex;
  white-space: pre-line;
}

.report-field .inline-comment::before {
  content: "(";
}

.report-field .inline-comment::after {
  content: ")";
}

.report-field .inline-span {
  color: var(--sys-color-token-subtle);
  padding-left: 1ex;
  white-space: pre-line;
}

.report-field-value-link {
  display: inline-block;
}

.icon-link.devtools-link {
  background-color: var(--sys-color-primary);
  vertical-align: sub;
}

.frame-details-container {
  overflow: auto;
}

.frame-details-report-container {
  min-width: 550px;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}

/*# sourceURL=openedWindowDetailsView.css */
`);const ge={yes:"Yes",no:"No",clickToRevealInElementsPanel:"Click to reveal in Elements panel",document:"Document",url:"URL",security:"Security",openerFrame:"Opener Frame",accessToOpener:"Access to opener",showsWhetherTheOpenedWindowIs:"Shows whether the opened window is able to access its opener and vice versa",windowWithoutTitle:"Window without title",closed:"closed",worker:"worker",type:"Type",securityIsolation:"Security & Isolation",crossoriginEmbedderPolicy:"Cross-Origin Embedder Policy",webWorker:"Web Worker",unknown:"Unknown",reportingTo:"reporting to"},Jl=P("panels/application/OpenedWindowDetailsView.ts",ge),be=B.bind(void 0,Jl),Xl=n=>be(n?ge.yes:ge.no);function Ql(n,e,t){const i=W(n,"icon-link devtools-link"),r=document.createElement("button");return mi.install(r,e),r.classList.add("devtools-link","link-style","text-button"),r.appendChild(i),r.addEventListener("click",s=>{s.consume(!0),t()}),r}async function Zl(n){let e=null;if(n instanceof td?e=n:n&&(e=dr.instance().getFrame(n)),!e)return null;const t=await e.getOwnerDOMNodeOrDocument();if(!t)return null;const i=Ql("code-circle",be(ge.clickToRevealInElementsPanel),()=>Ie(t)),r=document.createElement("span");return r.textContent=`<${t.nodeName().toLocaleLowerCase()}>`,i.insertBefore(r,i.firstChild),i.addEventListener("mouseenter",()=>{e&&e.highlight()}),i.addEventListener("mouseleave",()=>{Ni.hideDOMNodeHighlight()}),i}class mo extends ms{targetInfo;isWindowClosed;reportView;documentSection;#t;securitySection;openerElementField;hasDOMAccessValue;constructor(e,t){super(),this.targetInfo=e,this.isWindowClosed=t,this.contentElement.classList.add("frame-details-container"),this.reportView=new vi(this.buildTitle()),this.reportView.show(this.contentElement),this.reportView.element.classList.add("frame-details-report-container"),this.documentSection=this.reportView.appendSection(be(ge.document)),this.#t=this.documentSection.appendField(be(ge.url)).createChild("div","text-ellipsis"),this.securitySection=this.reportView.appendSection(be(ge.security)),this.openerElementField=this.securitySection.appendField(be(ge.openerFrame)),this.securitySection.setFieldVisible(be(ge.openerFrame),!1),this.hasDOMAccessValue=this.securitySection.appendField(be(ge.accessToOpener)),mi.install(this.hasDOMAccessValue,be(ge.showsWhetherTheOpenedWindowIs)),this.update()}async doUpdate(){this.reportView.setTitle(this.buildTitle()),this.#t.textContent=this.targetInfo.url,this.#t.title=this.targetInfo.url,this.hasDOMAccessValue.textContent=Xl(this.targetInfo.canAccessOpener),this.maybeDisplayOpenerFrame()}async maybeDisplayOpenerFrame(){this.openerElementField.removeChildren();const e=await Zl(this.targetInfo.openerFrameId);if(e){this.openerElementField.append(e),this.securitySection.setFieldVisible(be(ge.openerFrame),!0);return}this.securitySection.setFieldVisible(be(ge.openerFrame),!1)}buildTitle(){let e=this.targetInfo.title||be(ge.windowWithoutTitle);return this.isWindowClosed&&(e+=` (${be(ge.closed)})`),e}setIsWindowClosed(e){this.isWindowClosed=e}setTargetInfo(e){this.targetInfo=e}wasShown(){super.wasShown(),this.reportView.registerCSSFiles([Vi]),this.registerCSSFiles([Vi])}}class fo extends ms{targetInfo;reportView;documentSection;isolationSection;coepPolicy;constructor(e){super(),this.targetInfo=e,this.contentElement.classList.add("frame-details-container"),this.reportView=new vi(this.targetInfo.title||this.targetInfo.url||be(ge.worker)),this.reportView.show(this.contentElement),this.reportView.element.classList.add("frame-details-report-container"),this.documentSection=this.reportView.appendSection(be(ge.document));const t=this.documentSection.appendField(be(ge.url)).createChild("div","text-ellipsis");t.textContent=this.targetInfo.url,t.title=this.targetInfo.url;const i=this.documentSection.appendField(be(ge.type));i.textContent=this.workerTypeToString(this.targetInfo.type),this.isolationSection=this.reportView.appendSection(be(ge.securityIsolation)),this.coepPolicy=this.isolationSection.appendField(be(ge.crossoriginEmbedderPolicy)),this.update()}workerTypeToString(e){return e==="worker"?be(ge.webWorker):e==="service_worker"?I("Service Worker"):be(ge.unknown)}async updateCoopCoepStatus(){const e=w.instance().targetById(this.targetInfo.targetId);if(!e)return;const t=e.model(Sr),i=t&&await t.getSecurityIsolationStatus(null);if(!i)return;const r=s=>s!=="None";this.fillCrossOriginPolicy(this.coepPolicy,r,i.coep)}fillCrossOriginPolicy(e,t,i){if(!i){e.textContent="";return}const r=t(i.value);if(e.textContent=r?i.value:i.reportOnlyValue,!r&&t(i.reportOnlyValue)){const o=document.createElement("span");o.classList.add("inline-comment"),o.textContent="report-only",e.appendChild(o)}const s=r?i.reportingEndpoint:i.reportOnlyReportingEndpoint;if(s){const o=e.createChild("span","inline-name");o.textContent=be(ge.reportingTo);const a=e.createChild("span");a.textContent=s}}async doUpdate(){await this.updateCoopCoepStatus()}wasShown(){super.wasShown(),this.reportView.registerCSSFiles([Vi]),this.registerCSSFiles([Vi])}}const eh=Object.freeze(Object.defineProperty({__proto__:null,OpenedWindowDetailsView:mo,WorkerDetailsView:fo},Symbol.toStringTag,{value:"Module"})),f={PrefetchFailedIneligibleRedirect:"The prefetch was redirected, but the redirect URL is not eligible for prefetch.",PrefetchFailedInvalidRedirect:"The prefetch was redirected, but there was a problem with the redirect.",PrefetchFailedMIMENotSupported:"The prefetch failed because the response's Content-Type header was not supported.",PrefetchFailedNetError:"The prefetch failed because of a network error.",PrefetchFailedNon2XX:"The prefetch failed because of a non-2xx HTTP response status code.",PrefetchIneligibleRetryAfter:"A previous prefetch to the origin got a HTTP 503 response with an Retry-After header that has not elapsed yet.",PrefetchIsPrivacyDecoy:"The URL was not eligible to be prefetched because there was a registered service worker or cross-site cookies for that origin, but the prefetch was put on the network anyways and not used, to disguise that the user had some kind of previous relationship with the origin.",PrefetchIsStale:"Too much time elapsed between the prefetch and usage, so the prefetch was discarded.",PrefetchNotEligibleBrowserContextOffTheRecord:"The prefetch was not performed because the browser is in Incognito or Guest mode.",PrefetchNotEligibleDataSaverEnabled:"The prefetch was not performed because the operating system is in Data Saver mode.",PrefetchNotEligibleExistingProxy:"The URL is not eligible to be prefetched, because in the default network context it is configured to use a proxy server.",PrefetchNotEligibleHostIsNonUnique:"The URL was not eligible to be prefetched because its host was not unique (e.g., a non publicly routable IP address or a hostname which is not registry-controlled), but the prefetch was required to be proxied.",PrefetchNotEligibleNonDefaultStoragePartition:"The URL was not eligible to be prefetched because it uses a non-default storage partition.",PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy:"The URL was not eligible to be prefetched because the default network context cannot be configured to use the prefetch proxy for a same-site cross-origin prefetch request.",PrefetchNotEligibleSchemeIsNotHttps:"The URL was not eligible to be prefetched because its scheme was not https:.",PrefetchNotEligibleUserHasCookies:"The URL was not eligible to be prefetched because it was cross-site, but the user had cookies for that origin.",PrefetchNotEligibleUserHasServiceWorker:"The URL was not eligible to be prefetched because there was a registered service worker for that origin, which is currently not supported.",PrefetchNotUsedCookiesChanged:"The prefetch was not used because it was a cross-site prefetch, and cookies were added for that URL while the prefetch was ongoing, so the prefetched response is now out-of-date.",PrefetchProxyNotAvailable:"A network error was encountered when trying to set up a connection to the prefetching proxy.",PrefetchNotUsedProbeFailed:"The prefetch was blocked by your Internet Service Provider or network administrator.",PrefetchEvictedForNewerPrefetch:"The prefetch was discarded because the initiating page has too many prefetches ongoing, and this was one of the oldest.",PrefetchEvictedAfterCandidateRemoved:"The prefetch was discarded because no speculation rule in the initating page triggers a prefetch for this URL anymore.",PrefetchNotEligibleBatterySaverEnabled:"The prefetch was not performed because the Battery Saver setting was enabled.",PrefetchNotEligiblePreloadingDisabled:"The prefetch was not performed because speculative loading was disabled.",prerenderFinalStatusLowEndDevice:"The prerender was not performed because this device does not have enough total system memory to support prerendering.",prerenderFinalStatusInvalidSchemeRedirect:"The prerendering navigation failed because it redirected to a URL whose scheme was not http: or https:.",prerenderFinalStatusInvalidSchemeNavigation:"The URL was not eligible to be prerendered because its scheme was not http: or https:.",prerenderFinalStatusNavigationRequestBlockedByCsp:"The prerendering navigation was blocked by a Content Security Policy.",prerenderFinalStatusMainFrameNavigation:"The prerendered page navigated itself to another URL, which is currently not supported.",prerenderFinalStatusMojoBinderPolicy:"The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: {PH1})",prerenderFinalStatusRendererProcessCrashed:"The prerendered page crashed.",prerenderFinalStatusRendererProcessKilled:"The prerendered page was killed.",prerenderFinalStatusDownload:"The prerendered page attempted to initiate a download, which is currently not supported.",prerenderFinalStatusNavigationBadHttpStatus:"The prerendering navigation failed because of a non-2xx HTTP response status code.",prerenderFinalStatusClientCertRequested:"The prerendering navigation required a HTTP client certificate.",prerenderFinalStatusNavigationRequestNetworkError:"The prerendering navigation encountered a network error.",prerenderFinalStatusSslCertificateError:"The prerendering navigation failed because of an invalid SSL certificate.",prerenderFinalStatusLoginAuthRequested:"The prerendering navigation required HTTP authentication, which is currently not supported.",prerenderFinalStatusUaChangeRequiresReload:"Changing User Agent occured in prerendering navigation.",prerenderFinalStatusBlockedByClient:"Some resource load was blocked.",prerenderFinalStatusAudioOutputDeviceRequested:"The prerendered page requested audio output, which is currently not supported.",prerenderFinalStatusMixedContent:"The prerendered page contained mixed content.",prerenderFinalStatusTriggerBackgrounded:"The initiating page was backgrounded, so the prerendered page was discarded.",prerenderFinalStatusMemoryLimitExceeded:"The prerender was not performed because the browser exceeded the prerendering memory limit.",prerenderFinalStatusDataSaverEnabled:"The prerender was not performed because the user requested that the browser use less data.",prerenderFinalStatusHasEffectiveUrl:"The initiating page cannot perform prerendering, because it has an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusTimeoutBackgrounded:"The initiating page was backgrounded for a long time, so the prerendered page was discarded.",prerenderFinalStatusCrossSiteRedirectInInitialNavigation:"The prerendering navigation failed because the prerendered URL redirected to a cross-site URL.",prerenderFinalStatusCrossSiteNavigationInInitialNavigation:"The prerendering navigation failed because it targeted a cross-site URL.",prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInInitialNavigation:"The prerendering navigation failed because the prerendered URL redirected to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInInitialNavigation:"The prerendering navigation failed because it was to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusActivationNavigationParameterMismatch:"The prerender was not used because during activation time, different navigation parameters (e.g., HTTP headers) were calculated than during the original prerendering navigation request.",prerenderFinalStatusPrimaryMainFrameRendererProcessCrashed:"The initiating page crashed.",prerenderFinalStatusPrimaryMainFrameRendererProcessKilled:"The initiating page was killed.",prerenderFinalStatusActivationFramePolicyNotCompatible:"The prerender was not used because the sandboxing flags or permissions policy of the initiating page was not compatible with those of the prerendering page.",prerenderFinalStatusPreloadingDisabled:"The prerender was not performed because the user disabled preloading in their browser settings.",prerenderFinalStatusBatterySaverEnabled:"The prerender was not performed because the user requested that the browser use less battery.",prerenderFinalStatusActivatedDuringMainFrameNavigation:"Prerendered page activated during initiating page's main frame navigation.",prerenderFinalStatusCrossSiteRedirectInMainFrameNavigation:"The prerendered page navigated to a URL which redirected to a cross-site URL.",prerenderFinalStatusCrossSiteNavigationInMainFrameNavigation:"The prerendered page navigated to a cross-site URL.",prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInMainFrameNavigation:"The prerendered page navigated to a URL which redirected to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInMainFrameNavigation:"The prerendered page navigated to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusMemoryPressureOnTrigger:"The prerender was not performed because the browser was under critical memory pressure.",prerenderFinalStatusMemoryPressureAfterTriggered:"The prerendered page was unloaded because the browser came under critical memory pressure.",prerenderFinalStatusPrerenderingDisabledByDevTools:"The prerender was not performed because DevTools has been used to disable prerendering.",prerenderFinalStatusSpeculationRuleRemoved:'The prerendered page was unloaded because the initiating page removed the corresponding prerender rule from <script type="speculationrules">.',prerenderFinalStatusActivatedWithAuxiliaryBrowsingContexts:"The prerender was not used because during activation time, there were other windows with an active opener reference to the initiating page, which is currently not supported.",prerenderFinalStatusMaxNumOfRunningEagerPrerendersExceeded:'The prerender whose eagerness is "eager" was not performed because the initiating page already has too many prerenders ongoing. Remove other speculation rules with "eager" to enable further prerendering.',prerenderFinalStatusMaxNumOfRunningEmbedderPrerendersExceeded:"The browser-triggered prerender was not performed because the initiating page already has too many prerenders ongoing.",prerenderFinalStatusMaxNumOfRunningNonEagerPrerendersExceeded:'The old non-eager prerender (with a "moderate" or "conservative" eagerness and triggered by hovering or clicking links) was automatically canceled due to starting a new non-eager prerender. It can be retriggered by interacting with the link again.',prerenderFinalStatusPrerenderingUrlHasEffectiveUrl:"The prerendering navigation failed because it has an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusRedirectedPrerenderingUrlHasEffectiveUrl:"The prerendering navigation failed because it redirected to an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusActivationUrlHasEffectiveUrl:"The prerender was not used because during activation time, navigation has an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusJavaScriptInterfaceAdded:"The prerendered page was unloaded because a new JavaScript interface has been injected by WebView.addJavascriptInterface().",prerenderFinalStatusJavaScriptInterfaceRemoved:"The prerendered page was unloaded because a JavaScript interface has been removed by WebView.removeJavascriptInterface().",prerenderFinalStatusAllPrerenderingCanceled:"All prerendered pages were unloaded by the browser for some reason (For example, WebViewCompat.addWebMessageListener() was called during prerendering.)",statusNotTriggered:"Not triggered",statusPending:"Pending",statusRunning:"Running",statusReady:"Ready",statusSuccess:"Success",statusFailure:"Failure"},vo=P("panels/application/preloading/components/PreloadingString.ts",f),ue=Xs.bind(void 0,vo),E=B.bind(void 0,vo),he={PrefetchFailedIneligibleRedirect:{name:ue(f.PrefetchFailedIneligibleRedirect)},PrefetchFailedInvalidRedirect:{name:ue(f.PrefetchFailedInvalidRedirect)},PrefetchFailedMIMENotSupported:{name:ue(f.PrefetchFailedMIMENotSupported)},PrefetchFailedNetError:{name:ue(f.PrefetchFailedNetError)},PrefetchFailedNon2XX:{name:ue(f.PrefetchFailedNon2XX)},PrefetchIneligibleRetryAfter:{name:ue(f.PrefetchIneligibleRetryAfter)},PrefetchIsPrivacyDecoy:{name:ue(f.PrefetchIsPrivacyDecoy)},PrefetchIsStale:{name:ue(f.PrefetchIsStale)},PrefetchNotEligibleBrowserContextOffTheRecord:{name:ue(f.PrefetchNotEligibleBrowserContextOffTheRecord)},PrefetchNotEligibleDataSaverEnabled:{name:ue(f.PrefetchNotEligibleDataSaverEnabled)},PrefetchNotEligibleExistingProxy:{name:ue(f.PrefetchNotEligibleExistingProxy)},PrefetchNotEligibleHostIsNonUnique:{name:ue(f.PrefetchNotEligibleHostIsNonUnique)},PrefetchNotEligibleNonDefaultStoragePartition:{name:ue(f.PrefetchNotEligibleNonDefaultStoragePartition)},PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy:{name:ue(f.PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy)},PrefetchNotEligibleSchemeIsNotHttps:{name:ue(f.PrefetchNotEligibleSchemeIsNotHttps)},PrefetchNotEligibleUserHasCookies:{name:ue(f.PrefetchNotEligibleUserHasCookies)},PrefetchNotEligibleUserHasServiceWorker:{name:ue(f.PrefetchNotEligibleUserHasServiceWorker)},PrefetchNotUsedCookiesChanged:{name:ue(f.PrefetchNotUsedCookiesChanged)},PrefetchProxyNotAvailable:{name:ue(f.PrefetchProxyNotAvailable)},PrefetchNotUsedProbeFailed:{name:ue(f.PrefetchNotUsedProbeFailed)},PrefetchEvictedForNewerPrefetch:{name:ue(f.PrefetchEvictedForNewerPrefetch)},PrefetchEvictedAfterCandidateRemoved:{name:ue(f.PrefetchEvictedAfterCandidateRemoved)},PrefetchNotEligibleBatterySaverEnabled:{name:ue(f.PrefetchNotEligibleBatterySaverEnabled)},PrefetchNotEligiblePreloadingDisabled:{name:ue(f.PrefetchNotEligiblePreloadingDisabled)}};function ys({prefetchStatus:n}){switch(n){case null:return null;case"PrefetchNotStarted":return null;case"PrefetchNotFinishedInTime":return null;case"PrefetchResponseUsed":return null;case"PrefetchAllowed":case"PrefetchHeldback":return null;case"PrefetchSuccessfulButNotUsed":return null;case"PrefetchFailedIneligibleRedirect":return he.PrefetchFailedIneligibleRedirect.name();case"PrefetchFailedInvalidRedirect":return he.PrefetchFailedInvalidRedirect.name();case"PrefetchFailedMIMENotSupported":return he.PrefetchFailedMIMENotSupported.name();case"PrefetchFailedNetError":return he.PrefetchFailedNetError.name();case"PrefetchFailedNon2XX":return he.PrefetchFailedNon2XX.name();case"PrefetchIneligibleRetryAfter":return he.PrefetchIneligibleRetryAfter.name();case"PrefetchEvictedForNewerPrefetch":return he.PrefetchEvictedForNewerPrefetch.name();case"PrefetchEvictedAfterCandidateRemoved":return he.PrefetchEvictedAfterCandidateRemoved.name();case"PrefetchIsPrivacyDecoy":return he.PrefetchIsPrivacyDecoy.name();case"PrefetchIsStale":return he.PrefetchIsStale.name();case"PrefetchNotEligibleBrowserContextOffTheRecord":return he.PrefetchNotEligibleBrowserContextOffTheRecord.name();case"PrefetchNotEligibleDataSaverEnabled":return he.PrefetchNotEligibleDataSaverEnabled.name();case"PrefetchNotEligibleExistingProxy":return he.PrefetchNotEligibleExistingProxy.name();case"PrefetchNotEligibleHostIsNonUnique":return he.PrefetchNotEligibleHostIsNonUnique.name();case"PrefetchNotEligibleNonDefaultStoragePartition":return he.PrefetchNotEligibleNonDefaultStoragePartition.name();case"PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy":return he.PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy.name();case"PrefetchNotEligibleSchemeIsNotHttps":return he.PrefetchNotEligibleSchemeIsNotHttps.name();case"PrefetchNotEligibleUserHasCookies":return he.PrefetchNotEligibleUserHasCookies.name();case"PrefetchNotEligibleUserHasServiceWorker":return he.PrefetchNotEligibleUserHasServiceWorker.name();case"PrefetchNotUsedCookiesChanged":return he.PrefetchNotUsedCookiesChanged.name();case"PrefetchProxyNotAvailable":return he.PrefetchProxyNotAvailable.name();case"PrefetchNotUsedProbeFailed":return he.PrefetchNotUsedProbeFailed.name();case"PrefetchNotEligibleBatterySaverEnabled":return he.PrefetchNotEligibleBatterySaverEnabled.name();case"PrefetchNotEligiblePreloadingDisabled":return he.PrefetchNotEligiblePreloadingDisabled.name();default:return I(`Unknown failure reason: ${n}`)}}function Cs(n){switch(n.prerenderStatus){case null:case"Activated":return null;case"Destroyed":return I("Unknown");case"LowEndDevice":return E(f.prerenderFinalStatusLowEndDevice);case"InvalidSchemeRedirect":return E(f.prerenderFinalStatusInvalidSchemeRedirect);case"InvalidSchemeNavigation":return E(f.prerenderFinalStatusInvalidSchemeNavigation);case"NavigationRequestBlockedByCsp":return E(f.prerenderFinalStatusNavigationRequestBlockedByCsp);case"MainFrameNavigation":return E(f.prerenderFinalStatusMainFrameNavigation);case"MojoBinderPolicy":return me(n.disallowedMojoInterface),E(f.prerenderFinalStatusMojoBinderPolicy,{PH1:n.disallowedMojoInterface});case"RendererProcessCrashed":return E(f.prerenderFinalStatusRendererProcessCrashed);case"RendererProcessKilled":return E(f.prerenderFinalStatusRendererProcessKilled);case"Download":return E(f.prerenderFinalStatusDownload);case"TriggerDestroyed":return I("Internal error");case"NavigationNotCommitted":return I("Internal error");case"NavigationBadHttpStatus":return E(f.prerenderFinalStatusNavigationBadHttpStatus);case"ClientCertRequested":return E(f.prerenderFinalStatusClientCertRequested);case"NavigationRequestNetworkError":return E(f.prerenderFinalStatusNavigationRequestNetworkError);case"CancelAllHostsForTesting":throw new Error("unreachable");case"DidFailLoad":return I("Unknown");case"Stop":return I("Unknown");case"SslCertificateError":return E(f.prerenderFinalStatusSslCertificateError);case"LoginAuthRequested":return E(f.prerenderFinalStatusLoginAuthRequested);case"UaChangeRequiresReload":return E(f.prerenderFinalStatusUaChangeRequiresReload);case"BlockedByClient":return E(f.prerenderFinalStatusBlockedByClient);case"AudioOutputDeviceRequested":return E(f.prerenderFinalStatusAudioOutputDeviceRequested);case"MixedContent":return E(f.prerenderFinalStatusMixedContent);case"TriggerBackgrounded":return E(f.prerenderFinalStatusTriggerBackgrounded);case"MemoryLimitExceeded":return E(f.prerenderFinalStatusMemoryLimitExceeded);case"DataSaverEnabled":return E(f.prerenderFinalStatusDataSaverEnabled);case"TriggerUrlHasEffectiveUrl":return E(f.prerenderFinalStatusHasEffectiveUrl);case"ActivatedBeforeStarted":return I("Internal error");case"InactivePageRestriction":return I("Internal error");case"StartFailed":return I("Internal error");case"TimeoutBackgrounded":return E(f.prerenderFinalStatusTimeoutBackgrounded);case"CrossSiteRedirectInInitialNavigation":return E(f.prerenderFinalStatusCrossSiteRedirectInInitialNavigation);case"CrossSiteNavigationInInitialNavigation":return E(f.prerenderFinalStatusCrossSiteNavigationInInitialNavigation);case"SameSiteCrossOriginRedirectNotOptInInInitialNavigation":return E(f.prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInInitialNavigation);case"SameSiteCrossOriginNavigationNotOptInInInitialNavigation":return E(f.prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInInitialNavigation);case"ActivationNavigationParameterMismatch":return E(f.prerenderFinalStatusActivationNavigationParameterMismatch);case"ActivatedInBackground":return I("Internal error");case"EmbedderHostDisallowed":throw new Error("unreachable");case"ActivationNavigationDestroyedBeforeSuccess":return I("Internal error");case"TabClosedByUserGesture":throw new Error("unreachable");case"TabClosedWithoutUserGesture":throw new Error("unreachable");case"PrimaryMainFrameRendererProcessCrashed":return E(f.prerenderFinalStatusPrimaryMainFrameRendererProcessCrashed);case"PrimaryMainFrameRendererProcessKilled":return E(f.prerenderFinalStatusPrimaryMainFrameRendererProcessKilled);case"ActivationFramePolicyNotCompatible":return E(f.prerenderFinalStatusActivationFramePolicyNotCompatible);case"PreloadingDisabled":return E(f.prerenderFinalStatusPreloadingDisabled);case"BatterySaverEnabled":return E(f.prerenderFinalStatusBatterySaverEnabled);case"ActivatedDuringMainFrameNavigation":return E(f.prerenderFinalStatusActivatedDuringMainFrameNavigation);case"PreloadingUnsupportedByWebContents":throw new Error("unreachable");case"CrossSiteRedirectInMainFrameNavigation":return E(f.prerenderFinalStatusCrossSiteRedirectInMainFrameNavigation);case"CrossSiteNavigationInMainFrameNavigation":return E(f.prerenderFinalStatusCrossSiteNavigationInMainFrameNavigation);case"SameSiteCrossOriginRedirectNotOptInInMainFrameNavigation":return E(f.prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInMainFrameNavigation);case"SameSiteCrossOriginNavigationNotOptInInMainFrameNavigation":return E(f.prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInMainFrameNavigation);case"MemoryPressureOnTrigger":return E(f.prerenderFinalStatusMemoryPressureOnTrigger);case"MemoryPressureAfterTriggered":return E(f.prerenderFinalStatusMemoryPressureAfterTriggered);case"PrerenderingDisabledByDevTools":return E(f.prerenderFinalStatusPrerenderingDisabledByDevTools);case"SpeculationRuleRemoved":return E(f.prerenderFinalStatusSpeculationRuleRemoved);case"ActivatedWithAuxiliaryBrowsingContexts":return E(f.prerenderFinalStatusActivatedWithAuxiliaryBrowsingContexts);case"MaxNumOfRunningEagerPrerendersExceeded":return E(f.prerenderFinalStatusMaxNumOfRunningEagerPrerendersExceeded);case"MaxNumOfRunningEmbedderPrerendersExceeded":return E(f.prerenderFinalStatusMaxNumOfRunningEmbedderPrerendersExceeded);case"MaxNumOfRunningNonEagerPrerendersExceeded":return E(f.prerenderFinalStatusMaxNumOfRunningNonEagerPrerendersExceeded);case"PrerenderingUrlHasEffectiveUrl":return E(f.prerenderFinalStatusPrerenderingUrlHasEffectiveUrl);case"RedirectedPrerenderingUrlHasEffectiveUrl":return E(f.prerenderFinalStatusRedirectedPrerenderingUrlHasEffectiveUrl);case"ActivationUrlHasEffectiveUrl":return E(f.prerenderFinalStatusActivationUrlHasEffectiveUrl);case"JavaScriptInterfaceAdded":return E(f.prerenderFinalStatusJavaScriptInterfaceAdded);case"JavaScriptInterfaceRemoved":return E(f.prerenderFinalStatusJavaScriptInterfaceRemoved);case"AllPrerenderingCanceled":return E(f.prerenderFinalStatusAllPrerenderingCanceled);case"WindowClosed":case"SlowNetwork":case"OtherPrerenderedPageActivated":case"V8OptimizerDisabled":case"PrerenderFailedDuringPrefetch":return"";default:return I(`Unknown failure reason: ${n.prerenderStatus}`)}}function Ds(n,e){const t=n.url===void 0?e:n.url;return sn(t)}function ks(n){switch(n){case"Prefetch":return I("Prefetch");case"Prerender":return I("Prerender")}}function ec(n){switch(n){case"NotTriggered":return E(f.statusNotTriggered);case"Pending":return E(f.statusPending);case"Running":return E(f.statusRunning);case"Ready":return E(f.statusReady);case"Success":return E(f.statusSuccess);case"Failure":return E(f.statusFailure);case"NotSupported":return I("Internal error")}}function tc(n){const e=ec(n.status);if(n.status!=="Failure")return e;switch(n.action){case"Prefetch":{const t=ys(n)??I("Internal error");return e+" - "+t}case"Prerender":{const t=Cs(n);return me(t),e+" - "+t}}}const mt={url:"URL",action:"Action",status:"Status",statusNotTriggered:"Not triggered",statusPending:"Pending",statusRunning:"Running",statusReady:"Ready",statusSuccess:"Success",statusFailure:"Failure"},ic=P("panels/application/preloading/components/MismatchedPreloadingGrid.ts",mt),At=B.bind(void 0,ic);let rc=class{static status(e){switch(e){case"NotTriggered":return At(mt.statusNotTriggered);case"Pending":return At(mt.statusPending);case"Running":return At(mt.statusRunning);case"Ready":return At(mt.statusReady);case"Success":return At(mt.statusSuccess);case"Failure":return At(mt.statusFailure);case"NotSupported":return I("Internal error")}}};const{render:sc,html:$r}=ne;class nc extends Ue{#t=this.attachShadow({mode:"open"});#e=null;connectedCallback(){this.#t.adoptedStyleSheets=[],this.#i()}set data(e){this.#e=e,this.#i()}#i(){if(this.#e===null)return;const e={columns:[{id:"url",title:At(mt.url),widthWeighting:40,hideable:!1,visible:!0,sortable:!0},{id:"action",title:At(mt.action),widthWeighting:15,hideable:!1,visible:!0,sortable:!0},{id:"status",title:At(mt.status),widthWeighting:15,hideable:!1,visible:!0,sortable:!0}],rows:this.#r(),striped:!0};sc($r`
      <devtools-data-grid-controller .data=${e}>
      </devtools-data-grid-controller>
    `,this.#t,{host:this})}#r(){function e(i,r){function s(d,h){return $r`<span style=${bt(d)}>${h}</span>`}const a=Ns.charDiff(i,r).map(d=>{const h=d[1];switch(d[0]){case Yi.Equal:return s({},h);case Yi.Insert:return s({color:"var(--sys-color-green)","text-decoration":"line-through"},h);case Yi.Delete:return s({color:"var(--sys-color-error)"},h);case Yi.Edit:return s({color:"var(--sys-color-green)","text-decoration":"line-through"},h);default:throw new Error("unreachable")}},S);return $r`<div>${a}</div>`}me(this.#e);const t=this.#e.pageURL;return this.#e.rows.map(i=>({row:i,diffScore:Ns.characterScore(i.url,t)})).sort((i,r)=>r.diffScore-i.diffScore).map(({row:i})=>({cells:[{columnId:"url",value:i.url,renderer:()=>e(i.url,t)},{columnId:"action",value:ks(i.action)},{columnId:"status",value:rc.status(i.status)}]}))}}customElements.define("devtools-resources-mismatched-preloading-grid",nc);const wo=new CSSStyleSheet;wo.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

button.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  height: 16px;
}

button.link devtools-icon {
  vertical-align: sub;
}

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
}

/*# sourceURL=preloadingDetailsReportView.css */
`);const{html:ct}=ne,Ae={selectAnElementForMoreDetails:"Select an element for more details",detailsDetailedInformation:"Detailed information",detailsAction:"Action",detailsStatus:"Status",detailsFailureReason:"Failure reason",detailsRuleSet:"Rule set",detailedStatusNotTriggered:"Speculative load attempt is not yet triggered.",detailedStatusPending:"Speculative load attempt is eligible but pending.",detailedStatusRunning:"Speculative load is running.",detailedStatusReady:"Speculative load finished and the result is ready for the next navigation.",detailedStatusSuccess:"Speculative load finished and used for a navigation.",detailedStatusFailure:"Speculative load failed.",buttonInspect:"Inspect",buttonClickToInspect:"Click to inspect prerendered page",buttonClickToRevealRuleSet:"Click to reveal rule set"},oc=P("panels/application/preloading/components/PreloadingDetailsReportView.ts",Ae),Fe=B.bind(void 0,oc);let ac=class{static detailedStatus({status:e}){switch(e){case"NotTriggered":return Fe(Ae.detailedStatusNotTriggered);case"Pending":return Fe(Ae.detailedStatusPending);case"Running":return Fe(Ae.detailedStatusRunning);case"Ready":return Fe(Ae.detailedStatusReady);case"Success":return Fe(Ae.detailedStatusSuccess);case"Failure":return Fe(Ae.detailedStatusFailure);case"NotSupported":return I("Internal error")}}};const dc=Pt.instance();class bo extends Ue{#t=this.attachShadow({mode:"open"});#e=null;connectedCallback(){this.#t.adoptedStyleSheets=[wo]}set data(e){this.#e=e,this.#i()}async#i(){await dc.write("PreloadingDetailsReportView render",()=>{if(this.#e===null){re(ct`
          <div class="preloading-noselected">
            <div>
              <p>${Fe(Ae.selectAnElementForMoreDetails)}</p>
            </div>
          </div>
        `,this.#t,{host:this});return}const e=ac.detailedStatus(this.#e.preloadingAttempt),t=this.#e.pageURL;re(ct`
        <devtools-report .data=${{reportTitle:"Speculative Loading Attempt"}}
        jslog=${Ce("preloading-details")}>
          <devtools-report-section-header>${Fe(Ae.detailsDetailedInformation)}</devtools-report-section-header>

          ${this.#r()}
          ${this.#s()}

          <devtools-report-key>${Fe(Ae.detailsStatus)}</devtools-report-key>
          <devtools-report-value>
            ${e}
          </devtools-report-value>

          ${this.#n()}
          ${this.#o()}

          ${this.#e.ruleSets.map(i=>this.#a(i,t))}
        </devtools-report>
      `,this.#t,{host:this})})}#r(){me(this.#e);const e=this.#e.preloadingAttempt;let t;return e.action==="Prefetch"&&e.requestId!==void 0?t=ct`
          <devtools-request-link-icon
            .data=${{affectedRequest:{requestId:e.requestId,url:e.key.url},requestResolver:this.#e.requestResolver||new id,displayURL:!0,urlToDisplay:e.key.url}}
          >
          </devtools-request-link-icon>
      `:t=ct`
          <div class="text-ellipsis" title=${e.key.url}>${e.key.url}</div>
      `,ct`
        <devtools-report-key>${I("URL")}</devtools-report-key>
        <devtools-report-value>
          ${t}
        </devtools-report-value>
    `}#s(){me(this.#e);const e=this.#e.preloadingAttempt,t=ks(this.#e.preloadingAttempt.action);let i=S;return(()=>{if(e.action!=="Prerender"||w.instance().primaryPageTarget()===null)return;const s=w.instance().targets().find(d=>d.targetInfo()?.subtype==="prerender"&&d.inspectedURL()===e.key.url),o=s===void 0;i=ct`
          <devtools-button
            @click=${()=>{s!==void 0&&nn.instance().setFlavor(rd,s)}}
            .title=${Fe(Ae.buttonClickToInspect)}
            .size=${"SMALL"}
            .variant=${"outlined"}
            .disabled=${o}
            jslog=${de("inspect-prerendered-page").track({click:!0})}
          >
            ${Fe(Ae.buttonInspect)}
          </devtools-button>
      `})(),ct`
        <devtools-report-key>${Fe(Ae.detailsAction)}</devtools-report-key>
        <devtools-report-value>
          <div class="text-ellipsis" title="">
            ${t}
            ${i}
          </div>
        </devtools-report-value>
    `}#n(){me(this.#e);const e=this.#e.preloadingAttempt;if(e.action!=="Prefetch")return S;const t=ys(e);return t===null?S:ct`
        <devtools-report-key>${Fe(Ae.detailsFailureReason)}</devtools-report-key>
        <devtools-report-value>
          ${t}
        </devtools-report-value>
    `}#o(){me(this.#e);const e=this.#e.preloadingAttempt;if(e.action!=="Prerender")return S;const t=Cs(e);return t===null?S:ct`
        <devtools-report-key>${Fe(Ae.detailsFailureReason)}</devtools-report-key>
        <devtools-report-value>
          ${t}
        </devtools-report-value>
    `}#a(e,t){const i=()=>{Ie(new on(e.id))},r=Ds(e,t);return ct`
      <devtools-report-key>${Fe(Ae.detailsRuleSet)}</devtools-report-key>
      <devtools-report-value>
        <div class="text-ellipsis" title="">
          <button class="link" role="link"
            @click=${i}
            title=${Fe(Ae.buttonClickToRevealRuleSet)}
            style=${bt({color:"var(--sys-color-primary)","text-decoration":"underline"})}
            jslog=${de("reveal-rule-set").track({click:!0})}
          >
            ${r}
          </button>
        </div>
      </devtools-report-value>
    `}}customElements.define("devtools-resources-preloading-details-report-view",bo);const So=new CSSStyleSheet;So.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

#container {
  padding: 6px 12px;
  border-bottom: 1px solid var(--sys-color-divider);
}

#contents {
  margin-top: 14px;
}

#contents * {
  background: var(--color-background-elevation-dark-only);
}

#title {
  padding-bottom: 12px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
  color: var(--sys-color-token-subtle);
  grid-column-start: span 2;
  font-weight: bold;
}

#contents .key {
  grid-column-start: span 2;
  padding: 12px 0;
  font-weight: bold;
  margin-bottom: -1.2em;
}

#contents .value {
  grid-column-start: span 2;
  padding: 12px 0;
}

#footer {
  padding-top: 12px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--sys-color-token-subtle);
  grid-column-start: span 2;
  font-weight: bold;
}

#footer .icon-link {
  vertical-align: sub;
  float: right;
}

devtools-icon-dialog {
  vertical-align: sub;
}

/*# sourceURL=preloadingDisabledInfobar.css */
`);const{html:Or}=ne,Ee={infobarPreloadingIsDisabled:"Speculative loading is disabled",infobarPreloadingIsForceEnabled:"Speculative loading is force-enabled",titleReasonsPreventingPreloading:"Reasons preventing speculative loading",headerDisabledByPreference:"User settings or extensions",descriptionDisabledByPreference:"Speculative loading is disabled because of user settings or an extension. Go to {PH1} to update your preference. Go to {PH2} to disable any extension that blocks speculative loading.",preloadingPagesSettings:"Preload pages settings",extensionsSettings:"Extensions settings",headerDisabledByDataSaver:"Data Saver",descriptionDisabledByDataSaver:"Speculative loading is disabled because of the operating system's Data Saver mode.",headerDisabledByBatterySaver:"Battery Saver",descriptionDisabledByBatterySaver:"Speculative loading is disabled because of the operating system's Battery Saver mode.",headerDisabledByHoldbackPrefetchSpeculationRules:"Prefetch was disabled, but is force-enabled now",descriptionDisabledByHoldbackPrefetchSpeculationRules:"Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.",headerDisabledByHoldbackPrerenderSpeculationRules:"Prerendering was disabled, but is force-enabled now",descriptionDisabledByHoldbackPrerenderSpeculationRules:"Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.",footerLearnMore:"Learn more"},yo=P("panels/application/preloading/components/PreloadingDisabledInfobar.ts",Ee),Pe=B.bind(void 0,yo),lc=Pt.instance();class Co extends Ue{#t=this.attachShadow({mode:"open"});#e={disabledByPreference:!1,disabledByDataSaver:!1,disabledByBatterySaver:!1,disabledByHoldbackPrefetchSpeculationRules:!1,disabledByHoldbackPrerenderSpeculationRules:!1};connectedCallback(){this.#t.adoptedStyleSheets=[So],this.#i()}set data(e){this.#e=e,this.#i()}async#i(){await lc.write("PreloadingDisabledInfobar render",()=>{re(this.#r(),this.#t,{host:this})})}#r(){const e=this.#e.disabledByHoldbackPrefetchSpeculationRules||this.#e.disabledByHoldbackPrerenderSpeculationRules,t=this.#e.disabledByPreference||this.#e.disabledByDataSaver||this.#e.disabledByBatterySaver;let i;if(t)i=Pe(Ee.infobarPreloadingIsDisabled);else if(e)i=Pe(Ee.infobarPreloadingIsForceEnabled);else return S;return Or`
      <div id='container'>
        <span id='header'>
          ${i}
        </span>

        <devtools-icon-dialog
          .data=${{iconData:{iconName:"info",color:"var(--icon-default-hover)",width:"16px",height:"16px"},closeButton:!0,position:"auto",horizontalAlignment:"auto",closeOnESC:!0,closeOnScroll:!1}}
          jslog=${sd("preloading-disabled").track({resize:!0,keydown:"Escape"})}
        >
          ${this.#s()}
        </devtools-icon-dialog>
      </div>
    `}#s(){const e="https://developer.chrome.com/blog/prerender-pages/",t=st.create(e,Pe(Ee.footerLearnMore),void 0,void 0,"learn-more"),i=an`
      <x-link class="icon-link devtools-link" tabindex="0" href="${e}"></x-link>
    `,r=new dn;return r.data={iconName:"open-externally",color:"var(--icon-default-hover)",width:"16px",height:"16px"},i.append(r),Or`
      <div id='contents'>
        <div id='title'>${Pe(Ee.titleReasonsPreventingPreloading)}</div>

        <devtools-report>
          ${this.#o()}
          ${this.#a()}
          ${this.#d()}
          ${this.#c()}
          ${this.#l()}

          <devtools-report-divider>
          </devtools-report-divider>
        </devtools-report>

        <div id='footer'>
          ${t}
          ${i}
        </div>
      </div>
    `}#n(e,t,i){return e?Or`
      <div class='key'>
        ${t}
      </div>
      <div class='value'>
        ${i}
      </div>
    `:S}#o(){const e=new Xr;e.href="chrome://settings/performance",e.textContent=Pe(Ee.preloadingPagesSettings);const t=new Xr;t.href="chrome://extensions",t.textContent=Pe(Ee.extensionsSettings);const i=rt(yo,Ee.descriptionDisabledByPreference,{PH1:e,PH2:t});return this.#n(this.#e.disabledByPreference,Pe(Ee.headerDisabledByPreference),i)}#a(){return this.#n(this.#e.disabledByDataSaver,Pe(Ee.headerDisabledByDataSaver),Pe(Ee.descriptionDisabledByDataSaver))}#d(){return this.#n(this.#e.disabledByBatterySaver,Pe(Ee.headerDisabledByBatterySaver),Pe(Ee.descriptionDisabledByBatterySaver))}#c(){return this.#n(this.#e.disabledByHoldbackPrefetchSpeculationRules,Pe(Ee.headerDisabledByHoldbackPrefetchSpeculationRules),Pe(Ee.descriptionDisabledByHoldbackPrefetchSpeculationRules))}#l(){return this.#n(this.#e.disabledByHoldbackPrerenderSpeculationRules,Pe(Ee.headerDisabledByHoldbackPrerenderSpeculationRules),Pe(Ee.descriptionDisabledByHoldbackPrerenderSpeculationRules))}}customElements.define("devtools-resources-preloading-disabled-infobar",Co);const Es=new CSSStyleSheet;Es.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

.preloading-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.preloading-header {
  font-size: 15px;
  background-color: var(--sys-color-cdt-base-container);
  padding: 1px 4px;
}

.preloading-placeholder {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
}

.inline-icon {
  vertical-align: text-bottom;
}

/*# sourceURL=preloadingGrid.css */
`);const ar={action:"Action",ruleSet:"Rule set",status:"Status"},cc=P("panels/application/preloading/components/PreloadingGrid.ts",ar),Ur=B.bind(void 0,cc),{render:uc,html:Hr}=ne;class Do extends Ue{#t=this.attachShadow({mode:"open"});#e=null;connectedCallback(){this.#t.adoptedStyleSheets=[Es],this.#i()}update(e){this.#e=e,this.#i()}#i(){if(this.#e===null)return;const e={columns:[{id:"url",title:I("URL"),widthWeighting:40,hideable:!1,visible:!0,sortable:!0},{id:"action",title:Ur(ar.action),widthWeighting:15,hideable:!1,visible:!0,sortable:!0},{id:"rule-set",title:Ur(ar.ruleSet),widthWeighting:20,hideable:!1,visible:!0,sortable:!0},{id:"status",title:Ur(ar.status),widthWeighting:40,hideable:!1,visible:!0,sortable:!0}],rows:this.#r(),striped:!0};uc(Hr`
      <div class="preloading-container">
        <devtools-data-grid-controller .data=${e}>
        </devtools-data-grid-controller>
      </div>
    `,this.#t,{host:this})}#r(){function e(r,s){return s!=="Failure"?Hr`<div>${r}</div>`:Hr`
        <div
          style=${bt({color:"var(--sys-color-error)"})}
        >
          <devtools-icon
            .data=${{iconName:"cross-circle-filled",color:"var(--sys-color-error)",width:"16px",height:"16px"}}
            style=${bt({"vertical-align":"sub"})}
          >
          </devtools-icon>
          ${r}
        </div>
      `}me(this.#e);const t=this.#e.pageURL,i=t===""?null:new xe(t).securityOrigin();return this.#e.rows.map(r=>({cells:[{columnId:"id",value:r.id},{columnId:"url",value:this.#s(r,i),title:r.attempt.key.url},{columnId:"action",value:ks(r.attempt.action)},{columnId:"rule-set",value:r.ruleSets.length===0?"":Ds(r.ruleSets[0],t)},{columnId:"status",value:tc(r.attempt),renderer:s=>e(s,r.attempt.status)}]}))}#s(e,t){const i=e.attempt.key.url;return t&&i.startsWith(t)?i.slice(t.length):i}}customElements.define("devtools-resources-preloading-grid",Do);const ci={headerName:"Header name",initialNavigationValue:"Value in initial navigation",activationNavigationValue:"Value in activation navigation",missing:"(missing)"},hc=P("panels/application/preloading/components/PreloadingMismatchedHeadersGrid.ts",ci),Fi=B.bind(void 0,hc),{render:pc,html:gc}=ne;class mc extends Ue{#t=this.attachShadow({mode:"open"});#e=null;connectedCallback(){this.#t.adoptedStyleSheets=[Es],this.#i()}set data(e){e.mismatchedHeaders!==null&&(this.#e=e,this.#i())}#i(){if(this.#e===null)return;const e={columns:[{id:"header-name",title:Fi(ci.headerName),widthWeighting:30,hideable:!1,visible:!0,sortable:!0},{id:"initial-value",title:Fi(ci.initialNavigationValue),widthWeighting:30,hideable:!1,visible:!0,sortable:!0},{id:"activation-value",title:Fi(ci.activationNavigationValue),widthWeighting:30,hideable:!1,visible:!0,sortable:!0}],rows:this.#r(),striped:!0};pc(gc`
        <div class="preloading-container">
          <devtools-data-grid-controller .data=${e}>
          </devtools-data-grid-controller>
        </div>
      `,this.#t,{host:this})}#r(){return me(this.#e),me(this.#e.mismatchedHeaders),this.#e.mismatchedHeaders.map(e=>({cells:[{columnId:"header-name",value:e.headerName},{columnId:"initial-value",value:e.initialValue??Fi(ci.missing)},{columnId:"activation-value",value:e.activationValue??Fi(ci.missing)}]}))}}customElements.define("devtools-resources-preloading-mismatched-headers-grid",mc);const ko=new CSSStyleSheet;ko.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.ruleset-header {
  padding: 4px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
}

.ruleset-header devtools-icon {
  vertical-align: sub;
}

/*# sourceURL=RuleSetDetailsView.css */
`);const{html:Vr}=ne,fc=Pt.instance(),vc=await nd("application/json");class Eo extends Ue{#t=this.attachShadow({mode:"open"});#e=null;#i=!0;#r;connectedCallback(){this.#t.adoptedStyleSheets=[ko]}set data(e){this.#e=e,this.#s()}set shouldPrettyPrint(e){this.#i=e}async#s(){const e=await this.#a();await fc.write("RuleSetDetailsView render",()=>{if(this.#e===null){re(S,this.#t,{host:this});return}re(Vr`
        <div class="content">
          <div class="ruleset-header" id="ruleset-url">${this.#e?.url||w.instance().inspectedURL()}</div>
          ${this.#n()}
        </div>
        <div class="text-ellipsis">
          ${this.#o(e)}
        </div>
      `,this.#t,{host:this})})}#n(){return me(this.#e),this.#e.errorMessage===void 0?S:Vr`
      <div class="ruleset-header">
        <devtools-icon
          .data=${{iconName:"cross-circle",color:"var(--icon-error)",width:"16px",height:"16px"}}>
        </devtools-icon>
        <span id="error-message-text">${this.#e.errorMessage}</span>
      </div>
    `}#o(e){return this.#r=Ms.create({doc:e,extensions:[od(e||""),ad(),Ms.readOnly.of(!0),vc,dd(ld)]}),Vr`
      <devtools-text-editor .style.flexGrow=${"1"} .state=${this.#r}></devtools-text-editor>
    `}async#a(){return this.#i&&this.#e?.sourceText!==void 0?(await Wd("application/json",this.#e.sourceText)).formattedContent:this.#e?.sourceText||""}}customElements.define("devtools-resources-rulesets-details-view",Eo);const Ao=new CSSStyleSheet;Ao.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

.ruleset-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
}

.inline-icon {
  vertical-align: text-bottom;
}

/*# sourceURL=ruleSetGrid.css */
`);const{html:Jt}=ne,Qt={ruleSet:"Rule set",status:"Status",buttonClickToRevealInElementsPanel:"Click to reveal in Elements panel",buttonClickToRevealInNetworkPanel:"Click to reveal in Network panel",errors:"{errorCount, plural, =1 {# error} other {# errors}}",buttonRevealPreloadsAssociatedWithRuleSet:"Reveal speculative loads associated with this rule set"},wc=P("panels/application/preloading/components/RuleSetGrid.ts",Qt),bi=B.bind(void 0,wc);class To extends Ue{#t=this.attachShadow({mode:"open"});#e=null;connectedCallback(){this.#t.adoptedStyleSheets=[Ao],this.#i()}update(e){this.#e=e,this.#i()}#i(){if(this.#e===null)return;const e={columns:[{id:"rule-set",title:bi(Qt.ruleSet),widthWeighting:20,hideable:!1,visible:!0,sortable:!0},{id:"status",title:bi(Qt.status),widthWeighting:80,hideable:!1,visible:!0,sortable:!0}],rows:this.#r(),striped:!0};re(Jt`
      <div class="ruleset-container"
      jslog=${Z("preloading-rules")}>
        <devtools-data-grid-controller .data=${e}>
        </devtools-data-grid-controller>
      </div>
    `,this.#t,{host:this})}#r(){me(this.#e);const e=this.#e.pageURL;return this.#e.rows.map(t=>({cells:[{columnId:"id",value:t.ruleSet.id},{columnId:"rule-set",value:"",renderer:()=>bc(t.ruleSet,e)},{columnId:"status",value:t.preloadsStatusSummary,renderer:i=>Sc(i,t.ruleSet)}]}))}}customElements.define("devtools-resources-ruleset-grid",To);function bc(n,e){function t(s,o){return me(s.backendNodeId),Jt`
      <button class="link" role="link"
        @click=${async()=>{me(s.backendNodeId);const d=w.instance().scopeTarget();d!==null&&await Ie(new cd(d,s.backendNodeId))}}
        title=${bi(Qt.buttonClickToRevealInElementsPanel)}
        style=${bt({border:"none",background:"none",color:"var(--icon-link)",cursor:"pointer","text-decoration":"underline","padding-inline-start":"0","padding-inline-end":"0"})}
        jslog=${de("reveal-in-elements").track({click:!0})}
      >
        <devtools-icon
          .data=${{iconName:"code-circle",color:"var(--icon-link)",width:"16px",height:"16px"}}
          style=${bt({"vertical-align":"sub"})}
        >
        </devtools-icon>
        ${o}
      </button>
    `}function i(s,o){return me(s.url),me(s.requestId),Jt`
      <button class="link" role="link"
        @click=${async()=>{me(s.requestId);const d=w.instance().scopeTarget()?.model(Sr)?.requestForId(s.requestId)||null;if(d===null)return;const h=br.tab(d,"preview",{clearFilter:!1});await Ie(h)}}
        title=${bi(Qt.buttonClickToRevealInNetworkPanel)}
        style=${bt({border:"none",background:"none",color:"var(--icon-link)",cursor:"pointer","text-decoration":"underline","padding-inline-start":"0","padding-inline-end":"0"})}
      >
        <devtools-icon
         .data=${{iconName:"arrow-up-down-circle",color:"var(--icon-link)",width:"16px",height:"16px"}}
          style=${bt({"vertical-align":"sub"})}
        >
        </devtools-icon>
        ${o}
      </button>
    `}const r=Ds(n,e);return n.backendNodeId!==void 0?t(n,r):n.url!==void 0&&n.requestId?i(n,r):Jt`${r}`}function Sc(n,e){function t(r,s){return Jt`
      <button class="link" role="link"
        @click=${async()=>{await Ie(new ln(s.id))}}
        title=${bi(Qt.buttonRevealPreloadsAssociatedWithRuleSet)}
        style=${bt({color:"var(--sys-color-primary)","text-decoration":"underline",cursor:"pointer",border:"none",background:"none","padding-inline-start":"0","padding-inline-end":"0"})}
        jslog=${de("reveal-preloads").track({click:!0})}>
        ${r}
      </button>
    `}function i(){const r=bi(Qt.errors,{errorCount:1});return Jt`
      <span
        style=${bt({color:"var(--sys-color-error)"})}
      >
        ${r}
      </span>
    `}switch(e.errorType){case void 0:return t(n,e);case"SourceIsNotJsonObject":return i();case"InvalidRulesSkipped":return Jt`${i()} ${t(n,e)}`}}const Fo=new CSSStyleSheet;Fo.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: auto;
  height: 100%;
}

button {
  font-size: inherit;
}

devtools-report {
  padding: 1em 0;
}

devtools-report-section-header {
  padding-bottom: 0;
  margin-bottom: -1.5em;
}

devtools-report-section {
  min-width: fit-content;
}

devtools-report-divider {
  margin: 1em 0;
}

.reveal-links {
  white-space: nowrap;
}

.link {
  border: none;
  background: none;
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  padding: 0;
}

.status-badge-container {
  white-space: nowrap;
  margin: 8px 0 24px;
}

.status-badge-container span {
  margin-right: 2px;
}

.status-badge {
  border-radius: 4px;
  padding: 4px;

  devtools-icon {
    width: 16px;
    height: 16px;
  }
}

.status-badge-success {
  background: var(--sys-color-tertiary-container);
}

.status-badge-failure {
  background: var(--sys-color-error-container);
}

.status-badge-neutral {
  background: var(--sys-color-neutral-container);
}

/*# sourceURL=usedPreloadingView.css */
`);const{html:He}=ne,pe={speculativeLoadingStatusForThisPage:"Speculative loading status for this page",detailsFailureReason:"Failure reason",downgradedPrefetchUsed:"The initiating page attempted to prerender this page's URL. The prerender failed, but the resulting response body was still used as a prefetch.",prefetchUsed:"This page was successfully prefetched.",prerenderUsed:"This page was successfully prerendered.",prefetchFailed:"The initiating page attempted to prefetch this page's URL, but the prefetch failed, so a full navigation was performed instead.",prerenderFailed:"The initiating page attempted to prerender this page's URL, but the prerender failed, so a full navigation was performed instead.",noPreloads:"The initiating page did not attempt to speculatively load this page's URL.",currentURL:"Current URL",preloadedURLs:"URLs being speculatively loaded by the initiating page",speculationsInitiatedByThisPage:"Speculations initiated by this page",viewAllRules:"View all speculation rules",viewAllSpeculations:"View all speculations",learnMore:"Learn more: Speculative loading on developer.chrome.com",mismatchedHeadersDetail:"Mismatched HTTP request headers",badgeSuccess:"Success",badgeFailure:"Failure",badgeNoSpeculativeLoads:"No speculative loads",badgeNotTriggeredWithCount:"{n, plural, =1 {# not triggered} other {# not triggered}}",badgeInProgressWithCount:"{n, plural, =1 {# in progress} other {# in progress}}",badgeSuccessWithCount:"{n, plural, =1 {# success} other {# success}}",badgeFailureWithCount:"{n, plural, =1 {# failure} other {# failures}}"},yc=P("panels/application/preloading/components/UsedPreloadingView.ts",pe),we=B.bind(void 0,yc),Cc=Pt.instance();class Io extends Ue{#t=this.attachShadow({mode:"open"});#e={pageURL:"",previousAttempts:[],currentAttempts:[]};connectedCallback(){this.#t.adoptedStyleSheets=[Fo]}set data(e){this.#e=e,this.#i()}async#i(){await Cc.write("UsedPreloadingView render",()=>{re(this.#r(),this.#t,{host:this})})}#r(){return He`
      <devtools-report>
        ${this.#s()}

        <devtools-report-divider></devtools-report-divider>

        ${this.#a()}

        <devtools-report-divider></devtools-report-divider>

        <devtools-report-section>
          ${st.create("https://developer.chrome.com/blog/prerender-pages/",we(pe.learnMore),"link",void 0,"learn-more")}
        </devtools-report-section>
      </devtools-report>
    `}#s(){const e=xe.urlWithoutHash(this.#e.pageURL),t=this.#e.previousAttempts.filter(p=>xe.urlWithoutHash(p.key.url)===e),i=t.filter(p=>p.key.action==="Prefetch")[0],r=t.filter(p=>p.key.action==="Prerender")[0];let s="NoPreloads";r?.status==="Failure"&&i?.status==="Success"?s="DowngradedPrerenderToPrefetchAndUsed":i?.status==="Success"?s="PrefetchUsed":r?.status==="Success"?s="PrerenderUsed":i?.status==="Failure"?s="PrefetchFailed":r?.status==="Failure"?s="PrerenderFailed":s="NoPreloads";let o,a;switch(s){case"DowngradedPrerenderToPrefetchAndUsed":o=this.#d(),a=He`${we(pe.downgradedPrefetchUsed)}`;break;case"PrefetchUsed":o=this.#d(),a=He`${we(pe.prefetchUsed)}`;break;case"PrerenderUsed":o=this.#d(),a=He`${we(pe.prerenderUsed)}`;break;case"PrefetchFailed":o=this.#c(),a=He`${we(pe.prefetchFailed)}`;break;case"PrerenderFailed":o=this.#c(),a=He`${we(pe.prerenderFailed)}`;break;case"NoPreloads":o=this.#l(we(pe.badgeNoSpeculativeLoads)),a=He`${we(pe.noPreloads)}`;break}let d;s==="PrefetchFailed"?(me(i),d=ys(i)):(s==="PrerenderFailed"||s==="DowngradedPrerenderToPrefetchAndUsed")&&(me(r),d=Cs(r));let h=S;return d!==void 0&&(h=He`
      <devtools-report-section-header>${we(pe.detailsFailureReason)}</devtools-report-section-header>
      <devtools-report-section>
        ${d}
      </devtools-report-section>
      `),He`
      <devtools-report-section-header>${we(pe.speculativeLoadingStatusForThisPage)}</devtools-report-section-header>
      <devtools-report-section>
        <div>
          <div class="status-badge-container">
            ${o}
          </div>
          <div>
            ${a}
          </div>
        </div>
      </devtools-report-section>

      ${h}

      ${this.#n(s)}
      ${this.#o()}
    `}#n(e){if(e!=="NoPreloads"||this.#e.previousAttempts.length===0)return S;const t=this.#e.previousAttempts.map(r=>({url:r.key.url,action:r.key.action,status:r.status})),i={pageURL:this.#e.pageURL,rows:t};return He`
      <devtools-report-section-header>${we(pe.currentURL)}</devtools-report-section-header>
      <devtools-report-section>
        ${st.create(this.#e.pageURL,void 0,"link",void 0,"current-url")}
      </devtools-report-section>

      <devtools-report-section-header>${we(pe.preloadedURLs)}</devtools-report-section-header>
      <devtools-report-section
      jslog=${Ce("preloaded-urls")}>
        <devtools-resources-mismatched-preloading-grid
          .data=${i}></devtools-resources-mismatched-preloading-grid>
      </devtools-report-section>
    `}#o(){const e=this.#e.previousAttempts.find(t=>t.action==="Prerender"&&t.mismatchedHeaders!==null);if(e===void 0)return S;if(e.key.url!==this.#e.pageURL)throw new Error("unreachable");return He`
      <devtools-report-section-header>${we(pe.mismatchedHeadersDetail)}</devtools-report-section-header>
      <devtools-report-section>
        <devtools-resources-preloading-mismatched-headers-grid
          .data=${e}></devtools-resources-preloading-mismatched-headers-grid>
      </devtools-report-section>
    `}#a(){const e=this.#e.currentAttempts.reduce((h,p)=>(h.set(p.status,(h.get(p.status)??0)+1),h),new Map),t=e.get("NotTriggered")??0,i=e.get("Ready")??0,r=e.get("Failure")??0,s=(e.get("Pending")??0)+(e.get("Running")??0),o=[];this.#e.currentAttempts.length===0&&o.push(this.#l(we(pe.badgeNoSpeculativeLoads))),t>0&&o.push(this.#l(we(pe.badgeNotTriggeredWithCount,{n:t}))),s>0&&o.push(this.#l(we(pe.badgeInProgressWithCount,{n:s}))),i>0&&o.push(this.#d(i)),r>0&&o.push(this.#c(r));const a=()=>{Ie(new on(null))},d=()=>{Ie(new ln(null))};return He`
      <devtools-report-section-header>${we(pe.speculationsInitiatedByThisPage)}</devtools-report-section-header>
      <devtools-report-section>
        <div>
          <div class="status-badge-container">
            ${o}
          </div>

          <div class="reveal-links">
            <button class="link devtools-link" @click=${a}
            jslog=${de("view-all-rules").track({click:!0})}>
              ${we(pe.viewAllRules)}
            </button>
           ・
            <button class="link devtools-link" @click=${d}
            jslog=${de("view-all-speculations").track({click:!0})}>
             ${we(pe.viewAllSpeculations)}
            </button>
          </div>
        </div>
      </devtools-report-section>
    `}#d(e){let t;return e===void 0?t=we(pe.badgeSuccess):t=we(pe.badgeSuccessWithCount,{n:e}),this.#u("status-badge status-badge-success","check-circle",t)}#c(e){let t;return e===void 0?t=we(pe.badgeFailure):t=we(pe.badgeFailureWithCount,{n:e}),this.#u("status-badge status-badge-failure","cross-circle",t)}#l(e){return this.#u("status-badge status-badge-neutral","clear",e)}#u(e,t,i){return He`
      <span class=${e}>
        <devtools-icon name=${t}></devtools-icon>
        <span>
          ${i}
        </span>
      </span>
    `}}customElements.define("devtools-resources-used-preloading-view",Io);const Fr=new CSSStyleSheet;Fr.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.preloading-toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=preloading/preloadingView.css */
`);const xo=new CSSStyleSheet;xo.replaceSync(`/*
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 2px 1px 2px 2px;
}

.title {
  padding-left: 8px;
}

.subtitle {
  padding-left: 8px;
}

/*# sourceURL=preloading/preloadingViewDropDown.css */
`);const{html:Ro}=ne,Be={filterFilterByRuleSet:"Filter by rule set",filterAllPreloads:"All speculative loads",noRuleSets:"no rule sets",validityValid:"Valid",validityInvalid:"Invalid",validitySomeRulesInvalid:"Some rules invalid",statusNotTriggered:"Not triggered",statusPending:"Pending",statusRunning:"Running",statusReady:"Ready",statusSuccess:"Success",statusFailure:"Failure",prettyPrint:"Pretty print"},Dc=P("panels/application/preloading/PreloadingView.ts",Be),Me=B.bind(void 0,Dc),Wr=Symbol("AllRuleSetRootId");class is{static status(e){switch(e){case"NotTriggered":return Me(Be.statusNotTriggered);case"Pending":return Me(Be.statusPending);case"Running":return Me(Be.statusRunning);case"Ready":return Me(Be.statusReady);case"Success":return Me(Be.statusSuccess);case"Failure":return Me(Be.statusFailure);case"NotSupported":return I("Internal error")}}static preloadsStatusSummary(e){return["NotTriggered","Pending","Running","Ready","Success","Failure"].filter(i=>(e?.get(i)||0)>0).map(i=>(e?.get(i)||0)+" "+this.status(i)).join(", ").toLocaleLowerCase()}static validity({errorType:e}){switch(e){case void 0:return Me(Be.validityValid);case"SourceIsNotJsonObject":return Me(Be.validityInvalid);case"InvalidRulesSkipped":return Me(Be.validitySomeRulesInvalid)}}static location(e){if(e.backendNodeId!==void 0)return I("<script>");if(e.url!==void 0)return e.url;throw Error("unreachable")}static processLocalId(e){const t=e.indexOf(".");return t===-1?e:e.slice(t+1)}static ruleSetLocationShort(e,t){const i=e.url===void 0?t:e.url;return sn(i)}}function vr(){return w.instance().scopeTarget()?.inspectedURL()||""}class Po extends j{model;focusedRuleSetId=null;focusedPreloadingAttemptId=null;warningsContainer;warningsView=new Ir;hsplit;ruleSetGrid=new To;ruleSetDetails=new Eo;shouldPrettyPrint=qe.instance().moduleSetting("auto-pretty-print-minified").get();constructor(e){super(!0,!1),this.model=e,w.instance().addScopeChangeListener(this.onScopeChange.bind(this)),w.instance().addModelListener(Ge,"ModelUpdated",this.render,this,{scoped:!0}),w.instance().addModelListener(Ge,"WarningsUpdated",this.warningsView.onWarningsUpdated,this.warningsView,{scoped:!0}),this.warningsContainer=document.createElement("div"),this.warningsContainer.classList.add("flex-none"),this.contentElement.insertBefore(this.warningsContainer,this.contentElement.firstChild),this.warningsView.show(this.warningsContainer),this.ruleSetGrid.addEventListener("cellfocused",this.onRuleSetsGridCellFocused.bind(this));const t=()=>{this.shouldPrettyPrint=!this.shouldPrettyPrint,this.updateRuleSetDetails()};re(Ro`
        <devtools-split-view .horizontal=${!0} style="--min-sidebar-size: max(100vh-200px, 0px)">
          <div slot="main" class="overflow-auto" style="height: 100%">
            ${this.ruleSetGrid}
          </div>
          <div slot="sidebar" class="overflow-auto" style="height: 100%"
          jslog=${Ce("rule-set-details")}>
            ${this.ruleSetDetails}
          </div>
        </devtools-split-view>
        <div class="pretty-print-button" style="border-top: 1px solid var(--sys-color-divider)">
        <devtools-button
          .iconName=${"brackets"}
          .toggledIconName=${"brackets"}
          .toggled=${this.shouldPrettyPrint}
          .toggleType=${"primary-toggle"}
          .title=${Me(Be.prettyPrint)}
          .variant=${"icon_toggle"}
          .size=${"REGULAR"}
          @click=${t}
          jslog=${de().track({click:!0}).context("preloading-status-panel-pretty-print")}></devtools-button>
        </div>`,this.contentElement,{host:this}),this.hsplit=this.contentElement.querySelector("devtools-split-view")}wasShown(){super.wasShown(),this.registerCSSFiles([Ci,Fr]),this.warningsView.wasShown(),this.render()}onScopeChange(){const e=w.instance().scopeTarget()?.model(Ge);me(e),this.model=e,this.render()}revealRuleSet(e){this.focusedRuleSetId=e.ruleSetId,this.render()}updateRuleSetDetails(){const e=this.focusedRuleSetId,t=e===null?null:this.model.getRuleSetById(e);this.ruleSetDetails.shouldPrettyPrint=this.shouldPrettyPrint,this.ruleSetDetails.data=t,t===null?this.hsplit.style.setProperty("--current-main-area-size","100%"):this.hsplit.style.setProperty("--current-main-area-size","60%")}render(){const e=this.model.getPreloadCountsByRuleSetId(),t=this.model.getAllRuleSets().map(({id:i,value:r})=>{const s=e.get(i)||new Map;return{ruleSet:r,preloadsStatusSummary:is.preloadsStatusSummary(s)}});this.ruleSetGrid.update({rows:t,pageURL:vr()}),this.updateRuleSetDetails()}onRuleSetsGridCellFocused(e){const t=e;this.focusedRuleSetId=t.data.row.cells.find(i=>i.columnId==="id")?.value,this.render()}getInfobarContainerForTest(){return this.warningsView.contentElement}getRuleSetGridForTest(){return this.ruleSetGrid}getRuleSetDetailsForTest(){return this.ruleSetDetails}}class Bo extends j{model;focusedPreloadingAttemptId=null;warningsContainer;warningsView=new Ir;preloadingGrid=new Do;preloadingDetails=new bo;ruleSetSelector;constructor(e){super(!0,!1),this.element.setAttribute("jslog",`${Z("preloading-speculations")}`),this.model=e,w.instance().addScopeChangeListener(this.onScopeChange.bind(this)),w.instance().addModelListener(Ge,"ModelUpdated",this.render,this,{scoped:!0}),w.instance().addModelListener(Ge,"WarningsUpdated",this.warningsView.onWarningsUpdated,this.warningsView,{scoped:!0}),this.warningsContainer=document.createElement("div"),this.warningsContainer.classList.add("flex-none"),this.contentElement.insertBefore(this.warningsContainer,this.contentElement.firstChild),this.warningsView.show(this.warningsContainer);const t=new j,i=new Ft("preloading-toolbar",t.contentElement);i.element.setAttribute("jslog",`${Wi()}`),this.ruleSetSelector=new kc(()=>this.render()),i.appendToolbarItem(this.ruleSetSelector.item()),this.preloadingGrid.addEventListener("cellfocused",this.onPreloadingGridCellFocused.bind(this)),re(Ro`
        <devtools-split-view .horizontal=${!0} style="--min-sidebar-size: 0px">
          <div slot="main" class="overflow-auto" style="height: 100%">
            ${this.preloadingGrid}
          </div>
          <div slot="sidebar" class="overflow-auto" style="height: 100%">
            ${this.preloadingDetails}
          </div>
        </devtools-split-view>`,t.contentElement,{host:this}),t.show(this.contentElement)}wasShown(){super.wasShown(),this.registerCSSFiles([Ci,Fr]),this.warningsView.wasShown(),this.render()}onScopeChange(){const e=w.instance().scopeTarget()?.model(Ge);me(e),this.model=e,this.render()}setFilter(e){let t=e.ruleSetId;t!==null&&this.model.getRuleSetById(t)===void 0&&(t=null),this.ruleSetSelector.select(t)}updatePreloadingDetails(){const e=this.focusedPreloadingAttemptId,t=e===null?null:this.model.getPreloadingAttemptById(e);if(t===null)this.preloadingDetails.data=null;else{const i=t.ruleSetIds.map(r=>this.model.getRuleSetById(r)).filter(r=>r!==null);this.preloadingDetails.data={preloadingAttempt:t,ruleSets:i,pageURL:vr()}}}render(){const e=this.ruleSetSelector.getSelected(),t=this.model.getPreloadingAttempts(e).map(({id:i,value:r})=>{const s=r,o=s.ruleSetIds.flatMap(a=>{const d=this.model.getRuleSetById(a);return d===null?[]:[d]});return{id:i,attempt:s,ruleSets:o}});this.preloadingGrid.update({rows:t,pageURL:vr()}),this.updatePreloadingDetails()}onPreloadingGridCellFocused(e){const t=e;this.focusedPreloadingAttemptId=t.data.row.cells.find(i=>i.columnId==="id")?.value,this.render()}getRuleSetSelectorToolbarItemForTest(){return this.ruleSetSelector.item()}getPreloadingGridForTest(){return this.preloadingGrid}getPreloadingDetailsForTest(){return this.preloadingDetails}selectRuleSetOnFilterForTest(e){this.ruleSetSelector.select(e)}}class Lo extends j{model;warningsContainer;warningsView=new Ir;usedPreloading=new Io;constructor(e){super(!0,!1),this.element.setAttribute("jslog",`${Z("speculative-loads")}`),this.model=e,w.instance().addScopeChangeListener(this.onScopeChange.bind(this)),w.instance().addModelListener(Ge,"ModelUpdated",this.render,this,{scoped:!0}),w.instance().addModelListener(Ge,"WarningsUpdated",this.warningsView.onWarningsUpdated,this.warningsView,{scoped:!0}),this.warningsContainer=document.createElement("div"),this.warningsContainer.classList.add("flex-none"),this.contentElement.insertBefore(this.warningsContainer,this.contentElement.firstChild),this.warningsView.show(this.warningsContainer);const t=new j;t.contentElement.appendChild(this.usedPreloading),t.show(this.contentElement)}wasShown(){super.wasShown(),this.registerCSSFiles([Ci,Fr]),this.warningsView.wasShown(),this.render()}onScopeChange(){const e=w.instance().scopeTarget()?.model(Ge);me(e),this.model=e,this.render()}render(){this.usedPreloading.data={pageURL:w.instance().scopeTarget()?.inspectedURL()||"",previousAttempts:this.model.getPreloadingAttemptsOfPreviousPage().map(({value:e})=>e),currentAttempts:this.model.getPreloadingAttempts(null).map(({value:e})=>e)}}getUsedPreloadingForTest(){return this.usedPreloading}}class kc{model;onSelectionChanged=()=>{};toolbarItem;listModel;dropDown;constructor(e){const t=w.instance().scopeTarget()?.model(Ge);me(t),this.model=t,w.instance().addScopeChangeListener(this.onScopeChange.bind(this)),w.instance().addModelListener(Ge,"ModelUpdated",this.onModelUpdated,this,{scoped:!0}),this.listModel=new ud,this.dropDown=new hd(this.listModel,this),this.dropDown.setRowHeight(36),this.dropDown.setPlaceholderText(Me(Be.filterAllPreloads)),this.toolbarItem=new rn(this.dropDown.element),this.toolbarItem.setTitle(Me(Be.filterFilterByRuleSet)),this.toolbarItem.element.classList.add("toolbar-has-dropdown"),this.toolbarItem.element.setAttribute("jslog",`${de("filter-by-rule-set").track({click:!0})}`),this.onModelUpdated(),this.onSelectionChanged=e}onScopeChange(){const e=w.instance().scopeTarget()?.model(Ge);me(e),this.model=e,this.onModelUpdated()}onModelUpdated(){const e=this.model.getAllRuleSets().map(({id:r})=>r),t=[Wr,...e],i=this.dropDown.getSelectedItem();this.listModel.replaceAll(t),i===null?this.dropDown.selectItem(Wr):this.dropDown.selectItem(i),this.updateWidth(t)}updateWidth(e){const i=e.map(o=>this.titleFor(o).length),r=Math.max(...i),s=Math.min(r*6+16,315);this.dropDown.setWidth(s)}translateItemIdToRuleSetId(e){return e===Wr?null:e}getSelected(){const e=this.dropDown.getSelectedItem();return e===null?null:this.translateItemIdToRuleSetId(e)}select(e){this.dropDown.selectItem(e)}item(){return this.toolbarItem}titleFor(e){const t=this.translateItemIdToRuleSetId(e);if(t===null)return Me(Be.filterAllPreloads);const i=this.model.getRuleSetById(t);return i===null?I("Internal error"):is.ruleSetLocationShort(i,vr())}subtitleFor(e){const t=this.translateItemIdToRuleSetId(e),i=this.model.getPreloadCountsByRuleSetId().get(t)||new Map;return is.preloadsStatusSummary(i)||`(${Me(Be.noRuleSets)})`}createElementForItem(e){const t=document.createElement("div"),i=cn(t,{cssFile:[xo],delegatesFocus:void 0}),r=i.createChild("div","title");ye(r,pd(this.titleFor(e),100));const s=i.createChild("div","subtitle");return ye(s,this.subtitleFor(e)),t}isItemSelectable(e){return!0}itemSelected(e){this.onSelectionChanged()}highlightedItemChanged(e,t,i,r){}}class Ir extends j{infobar=new Co;constructor(){super(!1,!1)}wasShown(){super.wasShown(),this.registerCSSFiles([Ci]),this.contentElement.append(this.infobar)}onWarningsUpdated(e){this.infobar.data=e.data}}const rh=Object.freeze(Object.defineProperty({__proto__:null,PreloadingAttemptView:Bo,PreloadingRuleSetView:Po,PreloadingSummaryView:Lo,PreloadingWarningsView:Ir},Symbol.toStringTag,{value:"Module"})),xr={speculativeLoads:"Speculative loads",rules:"Rules",speculations:"Speculations"},Ec=P("panels/application/PreloadingTreeElement.ts",xr),As=B.bind(void 0,Ec);class No extends ee{#t;#e;view;#i;#r;constructor(e,t,i,r){super(e,r,!1,"speculative-loads"),this.#e=t,this.#i=i;const s=W("arrow-up-down");this.setLeadingIcons([s]),this.#r=!1}get itemURL(){return this.#i}initialize(e){this.#t=e,this.#r&&!this.view&&this.onselect(!1)}onselect(e){return super.onselect(e),this.#r=!0,this.#t&&(this.view||(this.view=new this.#e(this.#t)),this.showView(this.view)),!1}}class Mo extends je{#t;#e;#i;#r=null;#s=null;constructor(e){super(e,As(xr.speculativeLoads),"preloading");const t=W("arrow-up-down");this.setLeadingIcons([t]),this.#i=!1}constructChildren(e){this.#r=new $o(e),this.#s=new Ac(e),this.appendChild(this.#r),this.appendChild(this.#s)}initialize(e){if(this.#r===null||this.#s===null)throw new Error("unreachable");this.#t=e,this.#r.initialize(e),this.#s.initialize(e),this.#i&&!this.#e&&this.onselect(!1)}onselect(e){return super.onselect(e),this.#i=!0,this.#t&&(this.#e||(this.#e=new Lo(this.#t)),this.showView(this.#e)),!1}expandAndRevealRuleSet(e){if(this.#r===null)throw new Error("unreachable");this.expand(),this.#r.revealRuleSet(e)}expandAndRevealAttempts(e){if(this.#s===null)throw new Error("unreachable");this.expand(),this.#s.revealAttempts(e)}}class $o extends No{constructor(e){super(e,Po,"preloading://rule-set",As(xr.rules))}revealRuleSet(e){this.select(),this.view!==void 0&&this.view?.revealRuleSet(e)}}class Ac extends No{constructor(e){super(e,Bo,"preloading://attempt",As(xr.speculations))}revealAttempts(e){this.select(),this.view?.setFilter(e)}}const sh=Object.freeze(Object.defineProperty({__proto__:null,PreloadingRuleSetTreeElement:$o,PreloadingSummaryTreeElement:Mo},Symbol.toStringTag,{value:"Module"})),Oo=new CSSStyleSheet;Oo.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.placeholder {
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  overflow: auto;
  text-align: center;

  & div {
    width: 100%;
  }
}

/*# sourceURL=reportingApiReportsView.css */
`);const Uo={clickToDisplayBody:"Click on any report to display its body"},Tc=P("panels/application/ReportingApiReportsView.ts",Uo),Ho=B.bind(void 0,Tc);class Vo extends Rt{reportsGrid=new On;reports=[];constructor(e){super(!1,!0);const t=new j,i=new j;t.setMinimumSize(0,80),this.setMainWidget(t),i.setMinimumSize(0,40),i.element.setAttribute("jslog",`${Z("preview").track({resize:!0})}`),this.setSidebarWidget(i),t.contentElement.appendChild(this.reportsGrid),this.reportsGrid.addEventListener("cellfocused",this.onFocus.bind(this)),i.contentElement.classList.add("placeholder");const r=i.contentElement.createChild("div");r.textContent=Ho(Uo.clickToDisplayBody),e.addEventListener(Yr.ReportingApiReportAdded,s=>this.onReportAdded(s.data),this),e.addEventListener(Yr.ReportingApiReportUpdated,s=>this.onReportUpdated(s.data),this)}wasShown(){super.wasShown();const e=this.sidebarWidget();e&&e.registerCSSFiles([Oo])}onReportAdded(e){this.reports.push(e),this.reportsGrid.data={reports:this.reports}}onReportUpdated(e){const t=this.reports.findIndex(i=>i.id===e.id);this.reports[t]=e,this.reportsGrid.data={reports:this.reports}}async onFocus(e){const i=e.data.row.cells.find(s=>s.columnId==="id"),r=i&&this.reports.find(s=>s.id===i.value);if(r){const s=await Er.createView(JSON.stringify(r.body));s?.setMinimumSize(0,40),s&&this.setSidebarWidget(s)}}getReports(){return this.reports}getReportsGrid(){return this.reportsGrid}}const nh=Object.freeze(Object.defineProperty({__proto__:null,ReportingApiReportsView:Vo,i18nString:Ho},Symbol.toStringTag,{value:"Module"}));class Wo extends Rt{endpointsGrid;endpoints;constructor(e){super(!1,!0),this.element.setAttribute("jslog",`${Z("reporting-api")}`),this.endpointsGrid=e,this.endpoints=new Map;const t=w.instance().primaryPageTarget(),i=t&&t.model(Sr);if(i){i.addEventListener(Yr.ReportingApiEndpointsChangedForOrigin,o=>this.onEndpointsChangedForOrigin(o.data),this);const r=new Vo(i),s=new j;s.setMinimumSize(0,40),s.contentElement.appendChild(this.endpointsGrid),this.setMainWidget(r),this.setSidebarWidget(s),i.enableReportingApi()}}onEndpointsChangedForOrigin(e){this.endpoints.set(e.origin,e.endpoints),this.endpointsGrid.data={endpoints:this.endpoints}}}const oh=Object.freeze(Object.defineProperty({__proto__:null,ReportingApiView:Wo},Symbol.toStringTag,{value:"Module"})),_o={reportingApi:"Reporting API"},Fc=P("panels/application/ReportingApiTreeElement.ts",_o),Ic=B.bind(void 0,Fc);class xc extends ee{view;constructor(e){super(e,Ic(_o.reportingApi),!1,"reporting-api");const t=W("document");this.setLeadingIcons([t])}get itemURL(){return"reportingApi://"}onselect(e){return super.onselect(e),this.view||(this.view=new Wo(new Dn)),this.showView(this.view),fe.panelShown("reporting-api"),!1}}const jo=new CSSStyleSheet;jo.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  li.storage-group-list-item,
  li.storage-group-list-item:not(:has(span[is="dt-checkbox"])) {
    padding: 0 var(--sys-size-8) 0 var(--sys-size-3);

    &::before {
      display: none;
    }

    &:hover .selection,
    &:active .selection::before {
      background-color: transparent;
    }

    & + ol {
      padding-left: 0;
    }
  }

  li.storage-group-list-item:not(:first-child) {
    margin-top: var(--sys-size-6);
  }
}

.icons-container devtools-icon.red-icon {
  color: var(--icon-error);
}

.icons-container devtools-icon.warn-icon {
  color: var(--icon-warning);
}

devtools-icon.navigator-file-tree-item {
  color: var(--icon-file-default);
}

devtools-icon.navigator-folder-tree-item {
  color: var(--icon-folder-primary);
}

devtools-icon.navigator-script-tree-item {
  color: var(--icon-file-script);
}

devtools-icon.navigator-stylesheet-tree-item {
  color: var(--icon-file-styles);
}

devtools-icon.navigator-image-tree-item,
devtools-icon.navigator-font-tree-item {
  color: var(--icon-file-image);
}

.window-closed .tree-element-title {
  text-decoration: line-through;
}

/*# sourceURL=resourcesSidebar.css */
`);const qo=new CSSStyleSheet;qo.replaceSync(`/*
 * Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.service-worker-cache-data-view .data-view-toolbar {
  position: relative;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  padding-right: 10px;
}

.service-worker-cache-data-view .data-grid {
  flex: auto;
}

.service-worker-cache-data-view .data-grid .data-container tr:nth-last-child(1) td {
  border: 0;
}

.service-worker-cache-data-view .data-grid .data-container tr:nth-last-child(2) td {
  border-bottom: 1px solid var(--sys-color-divider);
}

.service-worker-cache-data-view .data-grid .data-container tr.selected {
  background-color: var(--sys-color-neutral-container);
  color: inherit;
}

.service-worker-cache-data-view .data-grid:focus .data-container tr.selected {
  background-color: var(--sys-color-tonal-container);
  color: var(--sys-color-on-tonal-container);
}

.service-worker-cache-data-view .section,
.service-worker-cache-data-view .section > .header,
.service-worker-cache-data-view .section > .header .title {
  margin: 0;
  min-height: inherit;
  line-height: inherit;
}

.service-worker-cache-data-view .data-grid .data-container td .section .header .title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.cache-preview-panel-resizer {
  background-color: var(--sys-color-surface1);
  height: 4px;
  border-bottom: 1px solid var(--sys-color-divider);
}

.cache-storage-summary-bar {
  flex: 0 0 27px;
  line-height: 27px;
  padding-left: 5px;
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/*# sourceURL=serviceWorkerCacheViews.css */
`);const Ne={cache:"Cache",refresh:"Refresh",deleteSelected:"Delete Selected",filterByPath:"Filter by path",selectACacheEntryAboveToPreview:"Select a cache entry above to preview",name:"Name",timeCached:"Time Cached",varyHeaderWarning:"⚠️ Set ignoreVary to true when matching this entry",serviceWorkerCache:"`Service Worker` Cache",matchingEntriesS:"Matching entries: {PH1}",totalEntriesS:"Total entries: {PH1}",headers:"Headers",preview:"Preview"},Rc=P("panels/application/ServiceWorkerCacheViews.ts",Ne),Ve=B.bind(void 0,Rc);class Go extends ps{model;entriesForTest;splitWidget;previewPanel;preview;cache;dataGrid;refreshThrottler;refreshButton;deleteSelectedButton;entryPathFilter;returnCount;summaryBarElement;loadingPromise;metadataView=new yi;constructor(e,t){super(Ve(Ne.cache)),this.model=e,this.entriesForTest=null,this.element.classList.add("service-worker-cache-data-view"),this.element.classList.add("storage-view"),this.element.setAttribute("jslog",`${Z("cache-storage-data")}`);const i=new Ft("data-view-toolbar",this.element);i.element.setAttribute("jslog",`${Wi()}`),this.element.appendChild(this.metadataView),this.splitWidget=new Rt(!1,!1),this.splitWidget.show(this.element),this.previewPanel=new j;const r=this.previewPanel.element.createChild("div","cache-preview-panel-resizer");this.splitWidget.setMainWidget(this.previewPanel),this.splitWidget.installResizer(r),this.preview=null,this.cache=t;const s=this.model.target().model(Vt)?.getBucketByName(t.storageBucket.storageKey,t.storageBucket.name);s?this.metadataView.setStorageBucket(s):t.storageKey&&this.metadataView.setStorageKey(t.storageKey),this.dataGrid=null,this.refreshThrottler=new $i(300),this.refreshButton=new vt(Ve(Ne.refresh),"refresh",void 0,"cache-storage.refresh"),this.refreshButton.addEventListener("Click",this.refreshButtonClicked,this),i.appendToolbarItem(this.refreshButton),this.deleteSelectedButton=new vt(Ve(Ne.deleteSelected),"cross",void 0,"cache-storage.delete-selected"),this.deleteSelectedButton.addEventListener("Click",d=>{this.deleteButtonClicked(null)}),i.appendToolbarItem(this.deleteSelectedButton);const o=new gs(Ve(Ne.filterByPath),1);i.appendToolbarItem(o);const a=new $i(300);this.entryPathFilter="",o.addEventListener("TextChanged",()=>{a.schedule(()=>(this.entryPathFilter=o.value(),this.updateData(!0)))}),this.returnCount=null,this.summaryBarElement=null,this.loadingPromise=null,this.update(t)}resetDataGrid(){this.dataGrid&&this.dataGrid.asWidget().detach(),this.dataGrid=this.createDataGrid();const e=this.dataGrid.asWidget();this.splitWidget.setSidebarWidget(e),e.setMinimumSize(0,250)}wasShown(){this.model.addEventListener("CacheStorageContentUpdated",this.cacheContentUpdated,this),this.registerCSSFiles([qo]),this.updateData(!0)}willHide(){this.model.removeEventListener("CacheStorageContentUpdated",this.cacheContentUpdated,this)}showPreview(e){e&&this.preview===e||(this.preview&&this.preview.detach(),e||(e=new ji(Ve(Ne.selectACacheEntryAboveToPreview))),this.preview=e,this.preview.show(this.previewPanel.element))}createDataGrid(){const e=[{id:"number",title:"#",sortable:!1,width:"3px"},{id:"name",title:Ve(Ne.name),weight:4,sortable:!0},{id:"response-type",title:I("Response-Type"),weight:1,align:"right",sortable:!0},{id:"content-type",title:I("Content-Type"),weight:1,sortable:!0},{id:"content-length",title:I("Content-Length"),weight:1,align:"right",sortable:!0},{id:"response-time",title:Ve(Ne.timeCached),width:"12em",weight:1,align:"right",sortable:!0},{id:"vary-header",title:I("Vary Header"),weight:1,sortable:!0}],t=new _i({displayName:Ve(Ne.serviceWorkerCache),columns:e,deleteCallback:this.deleteButtonClicked.bind(this),refreshCallback:this.updateData.bind(this,!0),editCallback:void 0});return t.addEventListener("SortingChanged",this.sortingChanged,this),t.addEventListener("SelectedNode",i=>{this.previewCachedResponse(i.data.data)},this),t.setStriped(!0),t}sortingChanged(){if(!this.dataGrid)return;const e=this.dataGrid,t=e.isSortOrderAscending(),i=e.sortColumnId();let r;i==="name"?r=(o,a)=>o.name.localeCompare(a.name):i==="content-type"?r=(o,a)=>o.data.mimeType.localeCompare(a.data.mimeType):i==="content-length"?r=(o,a)=>o.data.resourceSize-a.data.resourceSize:i==="response-time"?r=(o,a)=>o.data.endTime-a.data.endTime:i==="response-type"?r=(o,a)=>o.responseType.localeCompare(a.responseType):i==="vary-header"&&(r=(o,a)=>o.varyHeader.localeCompare(a.varyHeader));const s=e.rootNode().children.slice();e.rootNode().removeChildren(),s.sort((o,a)=>{const d=r(o,a);return t?d:-d}),s.forEach(o=>e.rootNode().appendChild(o))}async deleteButtonClicked(e){!e&&(e=this.dataGrid&&this.dataGrid.selectedNode,!e)||(await this.model.deleteCacheEntry(this.cache,e.data.url()),e.remove())}update(e){this.cache=e,this.resetDataGrid(),this.updateData(!0)}updateSummaryBar(){this.summaryBarElement||(this.summaryBarElement=this.element.createChild("div","cache-storage-summary-bar")),this.summaryBarElement.removeChildren();const e=this.summaryBarElement.createChild("span");this.entryPathFilter?e.textContent=Ve(Ne.matchingEntriesS,{PH1:String(this.returnCount)}):e.textContent=Ve(Ne.totalEntriesS,{PH1:String(this.returnCount)})}updateDataCallback(e,t,i){if(!this.dataGrid)return;const r=this.dataGrid.selectedNode&&this.dataGrid.selectedNode.data.url();this.refreshButton.setEnabled(!0),this.entriesForTest=t,this.returnCount=i,this.updateSummaryBar();const s=new Map,o=this.dataGrid.rootNode();for(const d of o.children)s.set(d.data.url,d);o.removeChildren();let a=null;for(let d=0;d<t.length;++d){const h=t[d];let p=s.get(h.requestURL);!p||p.data.responseTime!==h.responseTime?(p=new zo(d,this.createRequest(h),h.responseType),p.selectable=!0):p.data.number=d,o.appendChild(p),h.requestURL===r&&(a=p)}a?a.revealAndSelect():this.showPreview(null),this.updatedForTest()}async updateData(e){if(!e&&this.loadingPromise)return this.loadingPromise;if(this.refreshButton.setEnabled(!1),this.loadingPromise)return this.loadingPromise;this.loadingPromise=new Promise(r=>{this.model.loadAllCacheData(this.cache,this.entryPathFilter,(s,o)=>{r({entries:s,returnCount:o})})});const{entries:t,returnCount:i}=await this.loadingPromise;this.updateDataCallback(0,t,i),this.loadingPromise=null}refreshButtonClicked(){this.updateData(!0)}cacheContentUpdated(e){const{cacheName:t,storageBucket:i}=e.data;!this.cache.inBucket(i)||this.cache.cacheName!==t||this.refreshThrottler.schedule(()=>Promise.resolve(this.updateData(!0)),"AsSoonAsPossible")}async previewCachedResponse(e){let t=Ks.get(e);t||(t=new Ko(e),Ks.set(e,t)),this.dataGrid&&this.dataGrid.selectedNode&&e===this.dataGrid.selectedNode.data&&this.showPreview(t)}createRequest(e){const t=gd.createWithoutBackendRequest("cache-storage-"+e.requestURL,e.requestURL,as,null);t.requestMethod=e.requestMethod,t.setRequestHeaders(e.requestHeaders),t.statusCode=e.responseStatus,t.statusText=e.responseStatusText,t.protocol=new xe(e.requestURL).scheme,t.responseHeaders=e.responseHeaders,t.setRequestHeadersText(""),t.endTime=e.responseTime;let i=e.responseHeaders.find(o=>o.name.toLowerCase()==="content-type"),r="text/plain";if(i){const o=md(i.value);o.mimeType&&(r=o.mimeType)}t.mimeType=r,i=e.responseHeaders.find(o=>o.name.toLowerCase()==="content-length"),t.resourceSize=i&&Number(i.value)||0;let s=$s.fromMimeType(r);return s||(s=$s.fromURL(e.requestURL)||kr.Other),t.setResourceType(s),t.setContentDataProvider(this.requestContent.bind(this,t)),t}async requestContent(e){const t=await this.cache.requestCachedResponse(e.url(),e.requestHeaders());return t?new fd(t.body,!0,e.mimeType,e.charset()??void 0):{error:"No cached response found"}}updatedForTest(){}}const Ks=new WeakMap;class zo extends Dr{number;name;request;responseType;varyHeader;constructor(e,t,i){super(t),this.number=e;const r=new xe(t.url());r.isValid?this.name=vd(t.url(),r.domain()):this.name=t.url(),this.request=t,this.responseType=i,this.varyHeader=t.responseHeaders.find(s=>s.name.toLowerCase()==="vary")?.value||""}createCell(e){const t=this.createTD(e);let i,r=this.request.url();e==="number"?i=String(this.number):e==="name"?i=this.name:e==="response-type"?this.responseType==="opaqueResponse"?i="opaque":this.responseType==="opaqueRedirect"?i="opaqueredirect":i=this.responseType:e==="content-type"?i=this.request.mimeType:e==="content-length"?i=(this.request.resourceSize|0).toLocaleString("en-US"):e==="response-time"?i=new Date(this.request.endTime*1e3).toLocaleString():e==="vary-header"&&(i=this.varyHeader,this.varyHeader&&(r=Ve(Ne.varyHeaderWarning)));const s=t.parentElement;let o;return s&&this.dataGrid&&(o=this.dataGrid.elementToDataGridNode.get(s)),_i.setElementText(t,i||"",!0,o),mi.install(t,r),t}}class Ko extends j{tabbedPane;resourceViewTabSetting;constructor(e){super(),this.tabbedPane=new wd,this.tabbedPane.element.setAttribute("jslog",`${Ce("network-item-preview")}`),this.tabbedPane.addEventListener(bd.TabSelected,this.tabSelected,this),this.resourceViewTabSetting=qe.instance().createSetting("cache-storage-view-tab","preview"),this.tabbedPane.appendTab("headers",Ve(Ne.headers),xt(j,new Ld(e))),this.tabbedPane.appendTab("preview",Ve(Ne.preview),new Nd(e)),this.tabbedPane.show(this.element)}wasShown(){super.wasShown(),this.selectTab()}selectTab(e){e||(e=this.resourceViewTabSetting.get()),e&&!this.tabbedPane.selectTab(e)&&this.tabbedPane.selectTab("headers")}tabSelected(e){e.data.isUserGesture&&this.resourceViewTabSetting.set(e.data.tabId)}}const ah=Object.freeze(Object.defineProperty({__proto__:null,DataGridNode:zo,RequestView:Ko,ServiceWorkerCacheView:Go},Symbol.toStringTag,{value:"Module"})),wr={cacheStorage:"Cache storage",refreshCaches:"Refresh Caches",delete:"Delete"},Pc=P("panels/application/ServiceWorkerCacheTreeElement.ts",wr),rs=B.bind(void 0,Pc);class Yo extends je{swCacheModels;swCacheTreeElements;storageBucket;constructor(e,t){super(e,rs(wr.cacheStorage),"cache-storage");const i=W("database");this.setLink("https://developer.chrome.com/docs/devtools/storage/cache/?utm_source=devtools"),this.setLeadingIcons([i]),this.swCacheModels=new Set,this.swCacheTreeElements=new Set,this.storageBucket=t}initialize(){this.swCacheModels.clear(),this.swCacheTreeElements.clear(),w.instance().observeModels(un,{modelAdded:e=>this.serviceWorkerCacheModelAdded(e),modelRemoved:e=>this.serviceWorkerCacheModelRemoved(e)})}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(rs(wr.refreshCaches),this.refreshCaches.bind(this),{jslogContext:"refresh-caches"}),t.show()}refreshCaches(){for(const e of this.swCacheModels)e.refreshCacheNames()}serviceWorkerCacheModelAdded(e){e.enable(),this.swCacheModels.add(e);for(const t of e.caches())this.addCache(e,t);e.addEventListener("CacheAdded",this.cacheAdded,this),e.addEventListener("CacheRemoved",this.cacheRemoved,this)}serviceWorkerCacheModelRemoved(e){for(const t of e.caches())this.removeCache(e,t);e.removeEventListener("CacheAdded",this.cacheAdded,this),e.removeEventListener("CacheRemoved",this.cacheRemoved,this),this.swCacheModels.delete(e)}cacheAdded(e){const{model:t,cache:i}=e.data;this.addCache(t,i)}cacheInTree(e){return this.storageBucket?e.inBucket(this.storageBucket):!0}addCache(e,t){if(this.cacheInTree(t)){const i=new Bc(this.resourcesPanel,e,t,this.storageBucket===void 0);this.swCacheTreeElements.add(i),this.appendChild(i)}}cacheRemoved(e){const{model:t,cache:i}=e.data;this.cacheInTree(i)&&this.removeCache(t,i)}removeCache(e,t){const i=this.cacheTreeElement(e,t);i&&(this.removeChild(i),this.swCacheTreeElements.delete(i),this.setExpandable(this.childCount()>0))}cacheTreeElement(e,t){for(const i of this.swCacheTreeElements)if(i.hasModelAndCache(e,t))return i;return null}}class Bc extends ee{model;cache;view;constructor(e,t,i,r){let s;r?s=i.cacheName+" - "+i.storageKey:s=i.cacheName,super(e,s,!1,"cache-storage-instance"),this.model=t,this.cache=i,this.view=null;const o=W("table");this.setLeadingIcons([o])}get itemURL(){return"cache://"+this.cache.cacheId}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(rs(wr.delete),this.clearCache.bind(this),{jslogContext:"delete"}),t.show()}clearCache(){this.model.deleteCache(this.cache)}update(e){this.cache=e,this.view&&this.view.update(e)}onselect(e){return super.onselect(e),this.view||(this.view=new Go(this.model,this.cache)),this.showView(this.view),fe.panelShown("service-worker-cache"),!1}hasModelAndCache(e,t){return this.cache.equals(t)&&this.model===e}}const Ts=new CSSStyleSheet;Ts.replaceSync(`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.service-worker-version {
  display: flex;
  /* The status string can be long, allow this line of the report to wrap. */
  flex-wrap: wrap;

  devtools-button {
    margin-left: var(--sys-size-3);
  }
}

.service-worker-version-stack {
  position: relative;
}

.service-worker-version-stack-bar {
  position: absolute;
  top: 10px;
  bottom: 20px;
  left: 4px;
  content: "";
  border-left: 1px solid var(--sys-color-divider);
  z-index: 0;
}

.service-worker-version:not(:last-child) {
  margin-bottom: 7px;
}

.service-worker-version-string {
  /* This label contains important information that needs to be legible at all
     times. Don't shrink it. */
  flex-shrink: 0;
}

.service-worker-active-circle,
.service-worker-redundant-circle,
.service-worker-waiting-circle,
.service-worker-installing-circle {
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  z-index: 10;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid var(--sys-color-token-subtle);
  align-self: center;
  /* The circle should not shrink, to avoid risking becoming invisible. */
  flex-shrink: 0;
}

.service-worker-active-circle {
  background-color: var(--sys-color-green-bright);
}

.service-worker-waiting-circle {
  background-color: var(--sys-color-yellow-bright);
}

.service-worker-installing-circle {
  background-color: var(--sys-color-cdt-base-container);
}

.service-worker-redundant-circle {
  background-color: var(--sys-color-neutral-bright);
}

.service-worker-subtitle {
  padding-left: 14px;
  line-height: 14px;
  color: var(--sys-color-state-disabled);
}

.link {
  margin-left: 7px;
}

.service-worker-editor-with-button {
  align-items: baseline;
  display: flex;
}

.service-worker-notification-editor {
  border: 1px solid var(--sys-color-divider);
  display: flex;
  flex: auto;
  margin-right: 4px;
  max-width: 400px;
  min-width: 80px;
}

.report-field-value {
  white-space: normal;
}

.report-field-value-filename,
.service-worker-client-string {
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.report-field-value-filename {
  display: contents;
}

.report-field-value-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
}

.service-worker-client {
  display: flex;
}

.service-worker-client-focus-link {
  flex: none;
  margin-left: 2px;
  align-self: center;
}

.service-worker-notification-editor.source-code {
  /** Simulate CodeMirror that is shown above */
  padding: 4px;
}

.service-worker-list {
  background-color: var(--sys-color-cdt-base-container);
  overflow: auto;
}

.service-workers-this-origin {
  flex-shrink: 0;
  flex-grow: 0;
}

.service-workers-this-origin,
.service-workers-other-origin {
  min-width: max-content;
}

.service-worker-has-current .service-workers-other-origin {
  margin-top: 16px;
  border-top: 1px solid var(--sys-color-divider);
}

.devtools-link {
  line-height: 14px;
  align-self: center;
  padding: 1px;
}

button.link {
  padding: 1px;
}

button.link:focus-visible {
  background-color: inherit;
}

/*# sourceURL=serviceWorkersView.css */
`);const Jo=new CSSStyleSheet;Jo.replaceSync(`/*
 * Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.resource-service-worker-update-view {
  display: block;
  margin: 6px;
  color: var(--sys-color-on-surface-subtle);
  overflow: auto;
}

.service-worker-update-timing-table {
  border: 1px solid var(--sys-color-divider);
  border-spacing: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: initial;
  table-layout: auto;
  overflow: hidden;
}

.service-worker-update-timing-row {
  position: relative;
  height: 20px;
  overflow: hidden;
  min-width: 80px;
}

.service-worker-update-timing-bar {
  position: absolute;
  min-width: 1px;
  top: 0;
  bottom: 0;
}

.service-worker-update-timing-bar-clickable::before {
  user-select: none;
  mask-image: var(--image-file-triangle-right);
  float: left;
  width: 14px;
  height: 14px;
  margin-right: 2px;
  content: "";
  position: relative;
  background-color: var(--icon-default);
  transition: transform 200ms;
}

.service-worker-update-timing-bar-clickable {
  position: relative;
  left: -12px;
}

.service-worker-update-timing-bar-clickable:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.service-worker-update-timing-bar-clickable[aria-checked="true"]::before {
  transform: rotate(90deg);
}

.service-worker-update-timing-bar-details-collapsed {
  display: none;
}

.service-worker-update-timing-bar-details-expanded {
  display: table-row;
}

.service-worker-update-timing-bar-details:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.service-worker-update-timing-bar.activate {
  top: 5px;
  height: 10px;
  background-color: var(--sys-color-yellow-bright);
}

.service-worker-update-timing-bar.wait {
  top: 5px;
  height: 10px;
  background-color: var(--sys-color-purple-bright);
}

.service-worker-update-timing-bar.install {
  top: 5px;
  height: 10px;
  background-color: var(--sys-color-cyan-bright);
}

.service-worker-update-timing-table > tr > td {
  padding: 4px 0;
  padding-right: 10px;
}

table.service-worker-update-timing-table > tr.service-worker-update-timing-table-header > td {
  border-top: 5px solid transparent;
  color: var(--sys-color-token-subtle);
}

table.service-worker-update-timing-table > tr.service-worker-update-timing-bar-details > td:first-child {
  padding-left: 12px;
}

table.service-worker-update-timing-table > tr.service-worker-update-timeline > td:first-child {
  padding-left: 12px;
}

/*# sourceURL=serviceWorkerUpdateCycleView.css */
`);const ui={version:"Version",updateActivity:"Update Activity",timeline:"Timeline",startTimeS:"Start time: {PH1}",endTimeS:"End time: {PH1}"},Lc=P("panels/application/ServiceWorkerUpdateCycleView.ts",ui),Ii=B.bind(void 0,Lc);class Xo{registration;rows;selectedRowIndex;tableElement;constructor(e){this.registration=e,this.rows=[],this.selectedRowIndex=-1,this.tableElement=document.createElement("table"),this.createTimingTable()}calculateServiceWorkerUpdateRanges(){function e(o,a){a.start<Number.MAX_VALUE&&a.start<=a.end&&o.push(a)}function t(o,a,d,h,p,b,C){e(o,{id:a,phase:"Install",start:d,end:h}),(C==="activating"||C==="activated"||C==="redundant")&&(e(o,{id:a,phase:"Wait",start:h,end:p}),e(o,{id:a,phase:"Activate",start:p,end:b}))}function i(o){let a=o.currentState,d=0,h=0,p=0,b=0;const C=a.status;if(C==="new")return[];for(;a;)a.status==="activated"?d=a.lastUpdatedTimestamp:a.status==="activating"?(d===0&&(d=a.lastUpdatedTimestamp),h=a.lastUpdatedTimestamp):a.status==="installed"?p=a.lastUpdatedTimestamp:a.status==="installing"&&(p===0&&(p=a.lastUpdatedTimestamp),b=a.lastUpdatedTimestamp),a=a.previousState;const v=[];return t(v,o.id,b,p,h,d,C),v}const r=this.registration.versionsByMode(),s=["active","waiting","installing","redundant"];for(const o of s){const a=r.get(o);if(a)return i(a)}return[]}createTimingTable(){this.tableElement.classList.add("service-worker-update-timing-table"),this.tableElement.setAttribute("jslog",`${os("update-timing-table")}`);const e=this.calculateServiceWorkerUpdateRanges();this.updateTimingTable(e)}createTimingTableHead(){const e=this.tableElement.createChild("tr","service-worker-update-timing-table-header");ye(e.createChild("td"),Ii(ui.version)),ye(e.createChild("td"),Ii(ui.updateActivity)),ye(e.createChild("td"),Ii(ui.timeline))}removeRows(){const e=this.tableElement.getElementsByTagName("tr");for(;e[0];)e[0].parentNode&&e[0].parentNode.removeChild(e[0]);this.rows=[]}updateTimingTable(e){this.selectedRowIndex=-1,this.removeRows(),this.createTimingTableHead();const t=e;if(t.length===0)return;const i=t.map(d=>d.start),r=t.map(d=>d.end),s=i.reduce((d,h)=>Math.min(d,h)),o=r.reduce((d,h)=>Math.max(d,h)),a=100/(o-s);for(const d of t){const h=d.phase,p=a*(d.start-s),b=a*(o-d.end),C=this.tableElement.createChild("tr","service-worker-update-timeline");C.setAttribute("jslog",`${qr("update-timeline").track({click:!0,keydown:"ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Enter|Space"})}`),this.rows.push(C);const v=C.createChild("td");ye(v,"#"+d.id),v.classList.add("service-worker-update-timing-bar-clickable"),v.setAttribute("tabindex","0"),v.setAttribute("role","switch"),v.addEventListener("focus",F=>{this.onFocus(F)}),v.setAttribute("jslog",`${Js("timing-info").track({click:!0})}`),Os(v,!1);const D=C.createChild("td");ye(D,h);const R=C.createChild("td").createChild("div","service-worker-update-timing-row").createChild("span","service-worker-update-timing-bar "+h.toLowerCase());R.style.left=p+"%",R.style.right=b+"%",R.textContent="​",this.constructUpdateDetails(C,d)}}constructUpdateDetails(e,t){const i=this.tableElement.createChild("tr","service-worker-update-timing-bar-details");i.classList.add("service-worker-update-timing-bar-details-collapsed");const r=i.createChild("td");r.colSpan=3;const s=new Date(t.start).toISOString();ye(r.createChild("span"),Ii(ui.startTimeS,{PH1:s})),i.tabIndex=0;const o=this.tableElement.createChild("tr","service-worker-update-timing-bar-details");o.classList.add("service-worker-update-timing-bar-details-collapsed");const a=o.createChild("td");a.colSpan=3;const d=new Date(t.end).toISOString();ye(a.createChild("span"),Ii(ui.endTimeS,{PH1:d})),o.tabIndex=0,e.addEventListener("keydown",h=>{this.onKeydown(h,i,o)}),e.addEventListener("click",h=>{this.onClick(h,i,o)})}toggle(e,t,i,r){i.classList.contains("service-worker-update-timing-bar-clickable")&&(e.classList.toggle("service-worker-update-timing-bar-details-collapsed"),e.classList.toggle("service-worker-update-timing-bar-details-expanded"),t.classList.toggle("service-worker-update-timing-bar-details-collapsed"),t.classList.toggle("service-worker-update-timing-bar-details-expanded"),Os(i,!r))}onFocus(e){const t=e.target;if(!t)return;const i=t.parentElement;i&&(this.selectedRowIndex=this.rows.indexOf(i))}onKeydown(e,t,i){if(!e.target)return;const r=e.target,s=e,o=r.getAttribute("aria-checked")==="true";if(s.key==="Enter"||s.key===" "){this.toggle(t,i,r,o),e.preventDefault();return}if(!o&&s.key==="ArrowRight"||o&&s.key==="ArrowLeft"){this.toggle(t,i,r,o),e.preventDefault();return}s.key==="ArrowDown"&&(this.selectedRowIndex>=0?this.selectNextRow():this.selectFirstRow(),e.preventDefault()),s.key==="ArrowUp"&&(this.selectedRowIndex>=0?this.selectPreviousRow():this.selectLastRow(),e.preventDefault())}focusRow(e){e.cells[0].focus()}blurRow(e){e.cells[0].blur()}selectFirstRow(){this.rows.length!==0&&(this.selectedRowIndex=0,this.focusRow(this.rows[0]))}selectLastRow(){this.rows.length!==0&&(this.selectedRowIndex=this.rows.length-1,this.focusRow(this.rows[this.selectedRowIndex]))}selectNextRow(){if(this.rows.length===0)return;const e=this.selectedRowIndex;this.selectedRowIndex++,this.selectedRowIndex>=this.rows.length&&(this.selectedRowIndex=0),this.blurRow(this.rows[e]),this.focusRow(this.rows[this.selectedRowIndex])}selectPreviousRow(){if(this.rows.length===0)return;const e=this.selectedRowIndex;this.selectedRowIndex--,this.selectedRowIndex<0&&(this.selectedRowIndex=this.rows.length-1),this.blurRow(this.rows[e]),this.focusRow(this.rows[this.selectedRowIndex])}onClick(e,t,i){const r=e.target;if(!r)return;const s=r.getAttribute("aria-checked")==="true";this.toggle(t,i,r,s),e.preventDefault()}refresh(){const e=this.calculateServiceWorkerUpdateRanges();this.updateTimingTable(e)}}const dh=Object.freeze(Object.defineProperty({__proto__:null,ServiceWorkerUpdateCycleView:Xo},Symbol.toStringTag,{value:"Module"})),M={serviceWorkersFromOtherOrigins:"Service workers from other origins",updateOnReload:"Update on reload",onPageReloadForceTheService:"On page reload, force the `service worker` to update, and activate it",bypassForNetwork:"Bypass for network",bypassTheServiceWorkerAndLoad:"Bypass the `service worker` and load resources from the network",serviceWorkerForS:"`Service worker` for {PH1}",testPushMessageFromDevtools:"Test push message from DevTools.",networkRequests:"Network requests",update:"Update",unregisterServiceWorker:"Unregister service worker",unregister:"Unregister",source:"Source",status:"Status",clients:"Clients",pushString:"Push",pushData:"Push data",syncString:"Sync",syncTag:"Sync tag",periodicSync:"Periodic sync",periodicSyncTag:"Periodic sync tag",sRegistrationErrors:"{PH1} registration errors",receivedS:"Received {PH1}",routers:"Routers",sDeleted:"{PH1} - deleted",sActivatedAndIsS:"#{PH1} activated and is {PH2}",stopString:"Stop",inspect:"Inspect",startString:"Start",sIsRedundant:"#{PH1} is redundant",sWaitingToActivate:"#{PH1} waiting to activate",sTryingToInstall:"#{PH1} trying to install",updateCycle:"Update Cycle",workerS:"Worker: {PH1}",focus:"focus",seeAllRegistrations:"See all registrations"},Nc=P("panels/application/ServiceWorkersView.ts",M),$=B.bind(void 0,Nc);let Qo=!1;const Mc=n=>{Qo=n};class Zo extends j{currentWorkersView;toolbar;sections;manager;securityOriginManager;sectionToRegistration;eventListeners;constructor(){super(!0),this.currentWorkersView=new vi(I("Service workers")),this.currentWorkersView.setBodyScrollable(!1),this.contentElement.classList.add("service-worker-list"),this.contentElement.setAttribute("jslog",`${Z("service-workers")}`),this.currentWorkersView.show(this.contentElement),this.currentWorkersView.element.classList.add("service-workers-this-origin"),this.currentWorkersView.element.setAttribute("jslog",`${Ce("this-origin")}`),this.toolbar=this.currentWorkersView.createToolbar(),this.sections=new Map,this.manager=null,this.securityOriginManager=null,this.sectionToRegistration=new WeakMap;const e=this.contentElement.createChild("div","service-workers-other-origin");e.setAttribute("jslog",`${Ce("other-origin")}`);const t=new vi;t.setHeaderVisible(!1),t.show(e);const r=t.appendSection($(M.serviceWorkersFromOtherOrigins)).appendRow(),s=an`<a class="devtools-link" role="link" tabindex="0" href="chrome://serviceworker-internals" target="_blank" style="display: inline; cursor: pointer;">${$(M.seeAllRegistrations)}</a>`;s.setAttribute("jslog",`${Je("view-all").track({click:!0})}`),self.onInvokeElement(s,b=>{const C=w.instance().rootTarget();C&&C.targetAgent().invoke_createTarget({url:"chrome://serviceworker-internals?devtools"}),b.consume(!0)}),r.appendChild(s),this.toolbar.appendToolbarItem(_d().createOfflineToolbarCheckbox());const o=qe.instance().createSetting("service-worker-update-on-reload",!1);o.setTitle($(M.updateOnReload));const a=new Us(o,$(M.onPageReloadForceTheService));this.toolbar.appendToolbarItem(a);const d=qe.instance().createSetting("bypass-service-worker",!1);d.setTitle($(M.bypassForNetwork));const h=new Us(d,$(M.bypassTheServiceWorkerAndLoad));this.toolbar.appendToolbarItem(h),this.eventListeners=new Map,w.instance().observeModels(hs,this),this.updateListVisibility();const p=b=>{const C=b.detail&&b.detail.isDrawerOpen;if(this.manager&&!C){const{serviceWorkerNetworkRequestsPanelStatus:{isOpen:v,openedAt:D}}=this.manager;if(v){const De=Oi.instance().locationNameForViewId("network");Oi.instance().showViewInLocation("network",De,!1),Ie(ds.filters([])),Date.now()-D<2e3&&fe.actionTaken(cs.ServiceWorkerNetworkRequestClosedQuickly),this.manager.serviceWorkerNetworkRequestsPanelStatus={isOpen:!1,openedAt:0}}}};document.body.addEventListener("drawerchange",p)}modelAdded(e){if(e.target()===w.instance().primaryPageTarget()){this.manager=e,this.securityOriginManager=e.target().model(Mi);for(const t of this.manager.registrations().values())this.updateRegistration(t);this.eventListeners.set(e,[this.manager.addEventListener("RegistrationUpdated",this.registrationUpdated,this),this.manager.addEventListener("RegistrationDeleted",this.registrationDeleted,this),this.securityOriginManager.addEventListener(Tt.SecurityOriginAdded,this.updateSectionVisibility,this),this.securityOriginManager.addEventListener(Tt.SecurityOriginRemoved,this.updateSectionVisibility,this)])}}modelRemoved(e){!this.manager||this.manager!==e||(yr(this.eventListeners.get(e)||[]),this.eventListeners.delete(e),this.manager=null,this.securityOriginManager=null)}getTimeStamp(e){const t=e.versionsByMode();let i=0;const r=t.get("active"),s=t.get("installing"),o=t.get("waiting"),a=t.get("redundant");return r?i=r.scriptResponseTime:o?i=o.scriptResponseTime:s?i=s.scriptResponseTime:a&&(i=a.scriptResponseTime),i||0}updateSectionVisibility(){let e=!1;const t=[];for(const i of this.sections.values()){const r=this.getReportViewForOrigin(i.registration.securityOrigin);e=e||r===this.currentWorkersView,i.section.parentWidget()!==r&&t.push(i)}for(const i of t){const r=i.registration;this.removeRegistrationFromList(r),this.updateRegistration(r,!0)}this.currentWorkersView.sortSections((i,r)=>{const s=this.sectionToRegistration.get(i),o=this.sectionToRegistration.get(r),a=s?this.getTimeStamp(s):0;return(o?this.getTimeStamp(o):0)-a});for(const i of this.sections.values())i.section.parentWidget()===this.currentWorkersView||this.isRegistrationVisible(i.registration)?i.section.showWidget():i.section.hideWidget();this.contentElement.classList.toggle("service-worker-has-current",!!e),this.updateListVisibility()}registrationUpdated(e){this.updateRegistration(e.data),this.gcRegistrations()}gcRegistrations(){if(!this.manager||!this.securityOriginManager)return;let e=!1;const t=new Set(this.securityOriginManager.securityOrigins());for(const i of this.manager.registrations().values())if(!(!t.has(i.securityOrigin)&&!this.isRegistrationVisible(i))&&!i.canBeRemoved()){e=!0;break}if(e)for(const i of this.manager.registrations().values())!(t.has(i.securityOrigin)||this.isRegistrationVisible(i))&&i.canBeRemoved()&&this.removeRegistrationFromList(i)}getReportViewForOrigin(e){return this.securityOriginManager&&(this.securityOriginManager.securityOrigins().includes(e)||this.securityOriginManager.unreachableMainSecurityOrigin()===e)?this.currentWorkersView:null}updateRegistration(e,t){let i=this.sections.get(e);if(!i){const r=e.scopeURL,s=this.getReportViewForOrigin(e.securityOrigin);if(!s)return;const o=s.appendSection(r);o.setUiGroupTitle($(M.serviceWorkerForS,{PH1:r})),this.sectionToRegistration.set(o,e),i=new ea(this.manager,o,e),this.sections.set(e,i)}t||(this.updateSectionVisibility(),i.scheduleUpdate())}registrationDeleted(e){this.removeRegistrationFromList(e.data)}removeRegistrationFromList(e){const t=this.sections.get(e);t&&t.section.detach(),this.sections.delete(e),this.updateSectionVisibility()}isRegistrationVisible(e){return!e.scopeURL}updateListVisibility(){this.contentElement.classList.toggle("service-worker-list-empty",this.sections.size===0)}wasShown(){super.wasShown(),this.registerCSSFiles([Ts])}}class ea{manager;section;registration;fingerprint;pushNotificationDataSetting;syncTagNameSetting;periodicSyncTagNameSetting;updateCycleView;routerView;networkRequests;updateButton;deleteButton;sourceField;statusField;clientsField;linkifier;clientInfoCache;throttler;updateCycleField;routerField;constructor(e,t,i){this.manager=e,this.section=t,this.registration=i,this.fingerprint=null,this.pushNotificationDataSetting=qe.instance().createLocalSetting("push-data",$(M.testPushMessageFromDevtools)),this.syncTagNameSetting=qe.instance().createLocalSetting("sync-tag-name","test-tag-from-devtools"),this.periodicSyncTagNameSetting=qe.instance().createLocalSetting("periodic-sync-tag-name","test-tag-from-devtools"),this.updateCycleView=new Xo(i),this.routerView=new Hn,this.networkRequests=new Gr,this.networkRequests.data={iconName:"bottom-panel-open",variant:"text",title:$(M.networkRequests),jslogContext:"show-network-requests"},this.networkRequests.textContent=$(M.networkRequests),this.networkRequests.addEventListener("click",this.networkRequestsClicked.bind(this)),this.section.appendButtonToHeader(this.networkRequests),this.updateButton=ut($(M.update),this.updateButtonClicked.bind(this),{variant:"text",title:$(M.update),jslogContext:"update"}),this.section.appendButtonToHeader(this.updateButton),this.deleteButton=ut($(M.unregister),this.unregisterButtonClicked.bind(this),{variant:"text",title:$(M.unregisterServiceWorker),jslogContext:"unregister"}),this.section.appendButtonToHeader(this.deleteButton),this.sourceField=this.wrapWidget(this.section.appendField($(M.source))),this.statusField=this.wrapWidget(this.section.appendField($(M.status))),this.clientsField=this.wrapWidget(this.section.appendField($(M.clients))),this.createSyncNotificationField($(M.pushString),this.pushNotificationDataSetting.get(),$(M.pushData),this.push.bind(this),"push-message"),this.createSyncNotificationField($(M.syncString),this.syncTagNameSetting.get(),$(M.syncTag),this.sync.bind(this),"sync-tag"),this.createSyncNotificationField($(M.periodicSync),this.periodicSyncTagNameSetting.get(),$(M.periodicSyncTag),r=>this.periodicSync(r),"periodic-sync-tag"),this.createUpdateCycleField(),this.maybeCreateRouterField(),this.linkifier=new wt,this.clientInfoCache=new Map,this.throttler=new $i(500)}createSyncNotificationField(e,t,i,r,s){const o=this.wrapWidget(this.section.appendField(e)).createChild("form","service-worker-editor-with-button"),a=Sd("source-code service-worker-notification-editor");a.setAttribute("jslog",`${hn().track({change:!0}).context(s)}`),o.appendChild(a);const d=ut(e,void 0,{jslogContext:s});d.type="submit",o.appendChild(d),a.value=t,a.placeholder=i,Xe(a,e),o.addEventListener("submit",h=>{r(a.value||""),h.consume(!0)})}scheduleUpdate(){if(Qo){this.update();return}this.throttler.schedule(this.update.bind(this))}targetForVersionId(e){const t=this.manager.findVersion(e);return!t||!t.targetId?null:w.instance().targetById(t.targetId)}addVersion(e,t,i){const r=e.createChild("div","service-worker-version");r.createChild("div",t);const s=r.createChild("span","service-worker-version-string");return s.textContent=i,yd(s),r}updateClientsField(e){this.clientsField.removeChildren(),this.section.setFieldVisible($(M.clients),!!e.controlledClients.length);for(const t of e.controlledClients){const i=this.clientsField.createChild("div","service-worker-client"),r=this.clientInfoCache.get(t);r&&this.updateClientInfo(i,r),this.manager.target().targetAgent().invoke_getTargetInfo({targetId:t}).then(this.onClientInfo.bind(this,i))}}updateSourceField(e){this.sourceField.removeChildren();const t=xe.extractName(e.scriptURL),i=this.sourceField.createChild("div","report-field-value-filename"),r=wt.linkifyURL(e.scriptURL,{text:t});if(r.tabIndex=0,r.setAttribute("jslog",`${Je("source-location").track({click:!0})}`),i.appendChild(r),this.registration.errors.length){const s=hi({title:String(this.registration.errors.length),iconName:"cross-circle-filled",color:"var(--icon-error)"});s.classList.add("devtools-link","link"),s.tabIndex=0,Xe(s,$(M.sRegistrationErrors,{PH1:this.registration.errors.length})),self.onInvokeElement(s,()=>Cd.instance().show()),i.appendChild(s)}e.scriptResponseTime!==void 0&&(this.sourceField.createChild("div","report-field-value-subtitle").textContent=$(M.receivedS,{PH1:new Date(e.scriptResponseTime*1e3).toLocaleString()}))}update(){const e=this.registration.fingerprint();if(e===this.fingerprint)return Promise.resolve();this.fingerprint=e,this.section.setHeaderButtonsState(this.registration.isDeleted);const t=this.registration.versionsByMode(),i=this.registration.scopeURL,r=this.registration.isDeleted?$(M.sDeleted,{PH1:i}):i;this.section.setTitle(r);const s=t.get("active"),o=t.get("waiting"),a=t.get("installing"),d=t.get("redundant");this.statusField.removeChildren();const h=this.statusField.createChild("div","service-worker-version-stack");if(h.createChild("div","service-worker-version-stack-bar"),s){this.updateSourceField(s);const p=Dd.RunningStatus[s.currentState.runningStatus](),b=this.addVersion(h,"service-worker-active-circle",$(M.sActivatedAndIsS,{PH1:s.id,PH2:p}));if(s.isRunning()||s.isStarting()){const C=ut($(M.stopString),this.stopButtonClicked.bind(this,s.id),{jslogContext:"stop"});if(b.appendChild(C),!this.targetForVersionId(s.id)){const v=ut($(M.inspect),this.inspectButtonClicked.bind(this,s.id),{jslogContext:"inspect"});b.appendChild(v)}}else if(s.isStartable()){const C=ut($(M.startString),this.startButtonClicked.bind(this),{jslogContext:"start"});b.appendChild(C)}this.updateClientsField(s),this.maybeCreateRouterField()}else d&&(this.updateSourceField(d),this.addVersion(h,"service-worker-redundant-circle",$(M.sIsRedundant,{PH1:d.id})),this.updateClientsField(d));if(o){const p=this.addVersion(h,"service-worker-waiting-circle",$(M.sWaitingToActivate,{PH1:o.id})),b=ut(I("skipWaiting"),this.skipButtonClicked.bind(this),{title:I("skipWaiting"),jslogContext:"skip-waiting"});if(p.appendChild(b),o.scriptResponseTime!==void 0&&(p.createChild("div","service-worker-subtitle").textContent=$(M.receivedS,{PH1:new Date(o.scriptResponseTime*1e3).toLocaleString()})),!this.targetForVersionId(o.id)&&(o.isRunning()||o.isStarting())){const C=ut($(M.inspect),this.inspectButtonClicked.bind(this,o.id),{title:$(M.inspect),jslogContext:"waiting-entry-inspect"});p.appendChild(C)}}if(a){const p=this.addVersion(h,"service-worker-installing-circle",$(M.sTryingToInstall,{PH1:a.id}));if(a.scriptResponseTime!==void 0&&(p.createChild("div","service-worker-subtitle").textContent=$(M.receivedS,{PH1:new Date(a.scriptResponseTime*1e3).toLocaleString()})),!this.targetForVersionId(a.id)&&(a.isRunning()||a.isStarting())){const b=ut($(M.inspect),this.inspectButtonClicked.bind(this,a.id),{title:$(M.inspect),jslogContext:"installing-entry-inspect"});p.appendChild(b)}}return this.updateCycleView.refresh(),Promise.resolve()}unregisterButtonClicked(){this.manager.deleteRegistration(this.registration.id)}createUpdateCycleField(){this.updateCycleField=this.wrapWidget(this.section.appendField($(M.updateCycle))),this.updateCycleField.appendChild(this.updateCycleView.tableElement)}maybeCreateRouterField(){const t=this.registration.versionsByMode().get("active"),i=$(M.routers);t&&t.routerRules&&t.routerRules.length>0?(this.routerField||(this.routerField=this.wrapWidget(this.section.appendField(i))),this.routerField.lastElementChild||this.routerField.appendChild(this.routerView),this.routerView.update(t.routerRules)):(this.section.removeField(i),this.routerField=void 0)}updateButtonClicked(){this.manager.updateRegistration(this.registration.id)}networkRequestsClicked(){const t=Oi.instance().locationNameForViewId("resources")==="drawer-view"?"panel":"drawer-view";Oi.instance().showViewInLocation("network",t),Ie(ds.filters([{filterType:Qs.Is,filterValue:"service-worker-intercepted"}]));const i=kd.instance().requests();let r=null;if(Array.isArray(i))for(const s of i)!r&&s.fetchedViaServiceWorker&&(r=s),s.fetchedViaServiceWorker&&r&&r.responseReceivedTime<s.responseReceivedTime&&(r=s);if(r){const s=br.tab(r,"timing",{clearFilter:!1});Ie(s)}this.manager.serviceWorkerNetworkRequestsPanelStatus={isOpen:!0,openedAt:Date.now()},fe.actionTaken(cs.ServiceWorkerNetworkRequestClicked)}push(e){this.pushNotificationDataSetting.set(e),this.manager.deliverPushMessage(this.registration.id,e)}sync(e){this.syncTagNameSetting.set(e),this.manager.dispatchSyncEvent(this.registration.id,e,!0)}periodicSync(e){this.periodicSyncTagNameSetting.set(e),this.manager.dispatchPeriodicSyncEvent(this.registration.id,e)}onClientInfo(e,t){const i=t.targetInfo;i&&(this.clientInfoCache.set(i.targetId,i),this.updateClientInfo(e,i))}updateClientInfo(e,t){if(t.type!=="page"&&t.type==="iframe"){const s=e.createChild("span","service-worker-client-string");ye(s,$(M.workerS,{PH1:t.url}));return}e.removeChildren();const i=e.createChild("span","service-worker-client-string");ye(i,t.url);const r=new Gr;r.data={iconName:"select-element",variant:"icon",size:"SMALL",title:$(M.focus),jslogContext:"client-focus"},r.className="service-worker-client-focus-link",r.addEventListener("click",this.activateTarget.bind(this,t.targetId)),e.appendChild(r)}activateTarget(e){this.manager.target().targetAgent().invoke_activateTarget({targetId:e})}startButtonClicked(){this.manager.startWorker(this.registration.scopeURL)}skipButtonClicked(){this.manager.skipWaiting(this.registration.scopeURL)}stopButtonClicked(e){this.manager.stopWorker(e)}inspectButtonClicked(e){this.manager.inspectWorker(e)}wrapWidget(e){const t=cn(e,{cssFile:[Ts,Jo],delegatesFocus:void 0}),i=document.createElement("div");return t.appendChild(i),i}}const lh=Object.freeze(Object.defineProperty({__proto__:null,Section:ea,ServiceWorkersView:Zo,setThrottleDisabledForDebugging:Mc},Symbol.toStringTag,{value:"Module"})),ta=new CSSStyleSheet;ta.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

devtools-shared-storage-access-grid {
  overflow: auto;
}

.placeholder {
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  overflow: auto;
  text-align: center;

  & div {
    width: 100%;
  }
}

/*# sourceURL=sharedStorageEventsView.css */
`);const ia={clickToDisplayBody:"Click on any shared storage event to display the event parameters."},$c=P("panels/application/SharedStorageEventsView.ts",ia),Oc=B.bind(void 0,$c);function Uc(n,e){return JSON.stringify(n)===JSON.stringify(e)}class ra extends Rt{#t=new Wn;#e=[];#i;#r="";constructor(){super(!1,!0),this.element.setAttribute("jslog",`${Z("shared-storage-events")}`);const e=new j;this.#i=new j,e.setMinimumSize(0,80),this.setMainWidget(e),this.#i.setMinimumSize(0,40),this.setSidebarWidget(this.#i),e.contentElement.appendChild(this.#t),this.#t.addEventListener("cellfocused",this.#o.bind(this)),this.#t.setAttribute("jslog",`${Ce("events-table")}`),this.#s()?.addEventListener(We.PrimaryPageChanged,this.clearEvents,this),this.#i.contentElement.classList.add("placeholder");const t=this.#i.contentElement.createChild("div");t.textContent=Oc(ia.clickToDisplayBody)}#s(){return w.instance().primaryPageTarget()?.model($e)||null}#n(){return this.#s()?.mainFrame||null}get id(){return this.#n()?.id||this.#r}wasShown(){super.wasShown();const e=this.sidebarWidget();e&&e.registerCSSFiles([ta])}addEvent(e){e.mainFrameId===this.id&&(this.#e.some(t=>Uc(t,e))||(this.#e.push(e),this.#t.data=this.#e))}clearEvents(){this.#e=[],this.#t.data=this.#e,this.setSidebarWidget(this.#i)}async#o(e){const i=e.data.row;if(!i)return;const r={accessTime:i.cells.find(o=>o.columnId==="event-time")?.value,accessType:i.cells.find(o=>o.columnId==="event-type")?.value,ownerOrigin:i.cells.find(o=>o.columnId==="event-owner-origin")?.value,eventParams:JSON.parse(i.cells.find(o=>o.columnId==="event-params")?.value)},s=Er.createViewSync(r);s.setMinimumSize(0,40),this.setSidebarWidget(s)}setDefaultIdForTesting(e){this.#r=e}getEventsForTesting(){return this.#e}getSharedStorageAccessGridForTesting(){return this.#t}}const ch=Object.freeze(Object.defineProperty({__proto__:null,SharedStorageEventsView:ra},Symbol.toStringTag,{value:"Module"})),sa={sharedStorage:"Shared storage"},Hc=P("panels/application/SharedStorageListTreeElement.ts",sa),Vc=B.bind(void 0,Hc);class na extends ee{#t;view;constructor(e,t=!1){super(e,Vc(sa.sharedStorage),!1,"shared-storage"),this.#t=qe.instance().createSetting("resources-shared-storage-expanded",t);const i=W("database");this.setLeadingIcons([i]),this.view=new ra}get itemURL(){return"shared-storage://"}onselect(e){return super.onselect(e),this.resourcesPanel.showView(this.view),!1}onattach(){super.onattach(),this.#t.get()&&this.expand()}onexpand(){this.#t.set(!0)}oncollapse(){this.#t.set(!1)}addEvent(e){this.view.addEvent(e)}}const uh=Object.freeze(Object.defineProperty({__proto__:null,SharedStorageListTreeElement:na},Symbol.toStringTag,{value:"Module"}));class oa extends Si{#t;#e;constructor(e,t){super(),this.#t=e,this.#e=t}get securityOrigin(){return this.#e}async getMetadata(){return this.#t.storageAgent.invoke_getSharedStorageMetadata({ownerOrigin:this.securityOrigin}).then(({metadata:e})=>e)}async getEntries(){return this.#t.storageAgent.invoke_getSharedStorageEntries({ownerOrigin:this.securityOrigin}).then(({entries:e})=>e)}async setEntry(e,t,i){await this.#t.storageAgent.invoke_setSharedStorageEntry({ownerOrigin:this.securityOrigin,key:e,value:t,ignoreIfPresent:i})}async deleteEntry(e){await this.#t.storageAgent.invoke_deleteSharedStorageEntry({ownerOrigin:this.securityOrigin,key:e})}async clear(){await this.#t.storageAgent.invoke_clearSharedStorageEntries({ownerOrigin:this.securityOrigin})}async resetBudget(){await this.#t.storageAgent.invoke_resetSharedStorageBudget({ownerOrigin:this.securityOrigin})}}class Fs extends Qe{#t;#e;storageAgent;#i;constructor(e){super(e),e.registerStorageDispatcher(this),this.#t=e.model(Mi),this.#e=new Map,this.storageAgent=e.storageAgent(),this.#i=!1}async enable(){this.#i||(this.#t.addEventListener(Tt.SecurityOriginAdded,this.#n,this),this.#t.addEventListener(Tt.SecurityOriginRemoved,this.#a,this),await this.storageAgent.invoke_setSharedStorageTracking({enable:!0}),this.#r(),this.#i=!0)}disable(){this.#i&&(this.#t.removeEventListener(Tt.SecurityOriginAdded,this.#n,this),this.#t.removeEventListener(Tt.SecurityOriginRemoved,this.#a,this),this.storageAgent.invoke_setSharedStorageTracking({enable:!1}),this.#s(),this.#i=!1)}dispose(){this.disable()}#r(){for(const e of this.#t.securityOrigins())this.#o(e)}#s(){for(const e of this.#e.keys())this.#d(e)}#n(e){this.#o(e.data)}#o(e){const t=new xe(e);if(!t.isValid||t.scheme==="data"||t.scheme==="about"||t.scheme==="javascript"||this.#e.has(e))return;const i=new oa(this,e);this.#e.set(e,i),this.dispatchEventToListeners("SharedStorageAdded",i)}#a(e){this.#d(e.data)}#d(e){const t=this.storageForOrigin(e);t&&(this.#e.delete(e),this.dispatchEventToListeners("SharedStorageRemoved",t))}storages(){return this.#e.values()}storageForOrigin(e){return this.#e.get(e)||null}numStoragesForTesting(){return this.#e.size}isChangeEvent(e){return["documentSet","documentAppend","documentDelete","documentClear","workletSet","workletAppend","workletDelete","workletClear"].includes(e.type)}sharedStorageAccessed(e){if(this.isChangeEvent(e)){const t=this.storageForOrigin(e.ownerOrigin);if(t){const i={accessTime:e.accessTime,type:e.type,mainFrameId:e.mainFrameId,params:e.params};t.dispatchEventToListeners("SharedStorageChanged",i)}else this.#o(e.ownerOrigin)}this.dispatchEventToListeners("SharedStorageAccess",e)}attributionReportingTriggerRegistered(e){}indexedDBListUpdated(e){}indexedDBContentUpdated(e){}cacheStorageListUpdated(e){}cacheStorageContentUpdated(e){}interestGroupAccessed(e){}interestGroupAuctionEventOccurred(e){}interestGroupAuctionNetworkRequestCreated(e){}storageBucketCreatedOrUpdated(e){}storageBucketDeleted(e){}attributionReportingSourceRegistered(e){}}Qe.register(Fs,{capabilities:8192,autostart:!1});const hh=Object.freeze(Object.defineProperty({__proto__:null,SharedStorageForOrigin:oa,SharedStorageModel:Fs},Symbol.toStringTag,{value:"Module"})),Pi={refresh:"Refresh",clearAll:"Clear All",deleteSelected:"Delete Selected",refreshedStatus:"Table refreshed"},Wc=P("panels/application/StorageItemsView.ts",Pi),ir=B.bind(void 0,Wc);class Di extends j{filterRegex;refreshButton;mainToolbar;filterItem;deleteAllButton;deleteSelectedButton;metadataView=new yi;constructor(e,t){super(!1),this.filterRegex=null,this.refreshButton=this.addButton(ir(Pi.refresh),"refresh",()=>{this.refreshItems(),Ye(ir(Pi.refreshedStatus))}),this.refreshButton.element.setAttribute("jslog",`${de("storage-items-view.refresh").track({click:!0})}`),this.mainToolbar=new Ft("top-resources-toolbar",this.element),this.mainToolbar.element.setAttribute("jslog",`${Wi()}`),this.filterItem=new gs(void 0,.4),this.filterItem.addEventListener("TextChanged",this.filterChanged,this);const i=new Kr;this.deleteAllButton=this.addButton(ir(Pi.clearAll),"clear",this.deleteAllItems),this.deleteSelectedButton=this.addButton(ir(Pi.deleteSelected),"cross",this.deleteSelectedItem),this.deleteSelectedButton.element.setAttribute("jslog",`${de("storage-items-view.delete-selected").track({click:!0})}`),this.deleteAllButton.element.id="storage-items-delete-all",this.deleteAllButton.element.setAttribute("jslog",`${de("storage-items-view.clear-all").track({click:!0})}`);const r=[this.refreshButton,this.filterItem,i,this.deleteAllButton,this.deleteSelectedButton];for(const s of r)this.mainToolbar.appendToolbarItem(s);this.contentElement.appendChild(this.metadataView)}setDeleteAllTitle(e){this.deleteAllButton.setTitle(e)}setDeleteAllGlyph(e){this.deleteAllButton.setGlyph(e)}appendToolbarItem(e){this.mainToolbar.appendToolbarItem(e)}setStorageKey(e){this.metadataView.setStorageKey(e)}addButton(e,t,i){const r=new vt(e,t);return r.addEventListener("Click",i,this),r}filterChanged({data:e}){this.filterRegex=e?new RegExp(Ed(e),"i"):null,this.refreshItems()}filter(e,t){if(this.filterRegex){const i=this.filterRegex;return e.filter(r=>i.test(t(r)))}return e}hasFilter(){return!!this.filterRegex}wasShown(){this.refreshItems()}setCanDeleteAll(e){this.deleteAllButton.setEnabled(e)}setCanDeleteSelected(e){this.deleteSelectedButton.setEnabled(e)}setCanRefresh(e){this.refreshButton.setEnabled(e)}setCanFilter(e){this.filterItem.setEnabled(e)}deleteAllItems(){}deleteSelectedItem(){}refreshItems(){}}const ph=Object.freeze(Object.defineProperty({__proto__:null,StorageItemsView:Di},Symbol.toStringTag,{value:"Module"})),ze={sharedStorage:"Shared storage",key:"Key",value:"Value",sharedStorageItems:"Shared Storage Items",sharedStorageItemsCleared:"Shared Storage items cleared",sharedStorageFilteredItemsCleared:"Shared Storage filtered items cleared",selectAValueToPreview:"Select a value to preview",sharedStorageItemDeleted:"The storage item was deleted.",sharedStorageItemEdited:"The storage item was edited.",sharedStorageItemEditCanceled:"The storage item edit was canceled.",sharedStorageNumberEntries:"Number of entries shown in table: {PH1}"},_c=P("panels/application/SharedStorageItemsView.ts",ze),Ze=B.bind(void 0,_c);class Rr extends Di{#t;outerSplitWidget;innerSplitWidget;#e;dataGrid;#i;#r;sharedStorageItemsDispatcher;constructor(e){super(Ze(ze.sharedStorage),"sharedStoragePanel"),this.#t=e,this.element.classList.add("storage-view","table");const t=[{id:"key",title:Ze(ze.key),sortable:!1,editable:!0,longText:!0,weight:50},{id:"value",title:Ze(ze.value),sortable:!1,editable:!0,longText:!0,weight:50}];this.dataGrid=new _i({displayName:Ze(ze.sharedStorageItems),columns:t,editCallback:this.#n.bind(this),deleteCallback:this.#a.bind(this),refreshCallback:this.refreshItems.bind(this)}),this.dataGrid.addEventListener("SelectedNode",a=>{this.#d(a.data)}),this.dataGrid.addEventListener("DeselectedNode",()=>{this.#d(null)}),this.dataGrid.setStriped(!0),this.dataGrid.setName("shared-storage-items-view");const i=this.dataGrid.asWidget();i.setMinimumSize(0,100),this.#e=xt(j,new jn(e,e.securityOrigin)),this.#e.setMinimumSize(0,275);const r=this.#e.element.createChild("div","metadata-view-resizer");this.innerSplitWidget=new Rt(!1,!1,"shared-storage-inner-split-view-state"),this.innerSplitWidget.setSidebarWidget(this.#e),this.innerSplitWidget.setMainWidget(i),this.innerSplitWidget.installResizer(r),this.#i=new j,this.#i.setMinimumSize(0,25),this.#i.element.setAttribute("jslog",`${Z("preview").track({resize:!0})}`);const s=this.#i.element.createChild("div","preview-panel-resizer");this.outerSplitWidget=new Rt(!1,!0,"shared-storage-outer-split-view-state"),this.outerSplitWidget.show(this.element),this.outerSplitWidget.setMainWidget(this.innerSplitWidget),this.outerSplitWidget.setSidebarWidget(this.#i),this.outerSplitWidget.installResizer(s),this.#i.contentElement.classList.add("placeholder");const o=this.#i.contentElement.createChild("div");o.textContent=Ze(ze.selectAValueToPreview),this.#r=[],yr(this.#r),this.#t=e,this.#r=[this.#t.addEventListener("SharedStorageChanged",this.#s,this)],this.sharedStorageItemsDispatcher=new Si}static async createView(e){const t=new Rr(e);return await t.updateEntriesOnly(),t}async updateEntriesOnly(){if(!this.isShowing())return;const e=await this.#t.getEntries();e&&this.#o(e)}async#s(){await this.refreshItems()}async refreshItems(){this.isShowing()&&(await this.#e.getComponent().render(),await this.updateEntriesOnly(),this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemsRefreshed"))}async deleteSelectedItem(){this.dataGrid.selectedNode&&await this.#a(this.dataGrid.selectedNode)}async deleteAllItems(){if(!this.hasFilter()){await this.#t.clear(),await this.refreshItems(),this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemsCleared"),Ye(Ze(ze.sharedStorageItemsCleared));return}await Promise.all(this.dataGrid.rootNode().children.filter(e=>e.data.key).map(e=>this.#t.deleteEntry(e.data.key))),await this.refreshItems(),this.sharedStorageItemsDispatcher.dispatchEventToListeners("FilteredItemsCleared"),Ye(Ze(ze.sharedStorageFilteredItemsCleared))}async#n(e,t,i,r){if(t==="key"&&r===""){await this.refreshItems(),Ye(Ze(ze.sharedStorageItemEditCanceled));return}t==="key"?(await this.#t.deleteEntry(i),await this.#t.setEntry(r,e.data.value||"",!1)):await this.#t.setEntry(e.data.key||" ",r,!1),await this.refreshItems(),this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemEdited",{columnIdentifier:t,oldText:i,newText:r}),Ye(Ze(ze.sharedStorageItemEdited))}#o(e){const t=this.dataGrid.rootNode(),[i]=t.children.filter(a=>a.selected).map(a=>a.data.key);t.removeChildren();let r=null;const s=a=>`${a.key} ${a.value}`,o=this.filter(e,s);for(const a of o){const d=new Dr({key:a.key,value:a.value},!1);d.selectable=!0,t.appendChild(d),(!r||a.key===i)&&(r=d)}r&&(r.selected=!0),this.dataGrid.addCreationNode(!1),this.setCanDeleteSelected(!!r),Ye(Ze(ze.sharedStorageNumberEntries,{PH1:o.length}))}async#a(e){if(!e||e.isCreationNode||!this.#t)return;const t=e.data.key;await this.#t.deleteEntry(t),await this.refreshItems(),this.sharedStorageItemsDispatcher.dispatchEventToListeners("ItemDeleted",{key:t}),Ye(Ze(ze.sharedStorageItemDeleted))}async#d(e){const t=e?.data?.key,i=e?.data?.value,r=t&&{key:t,value:i||""};if(r){const s=Er.createViewSync(r);e.selected&&(this.outerSplitWidget.setSidebarWidget(s),s.element.setAttribute("jslog",`${Z("preview").track({resize:!0})}`))}else this.outerSplitWidget.setSidebarWidget(this.#i)}getEntriesForTesting(){return this.dataGrid.rootNode().children.filter(e=>e.data.key).map(e=>e.data)}}const gh=Object.freeze(Object.defineProperty({__proto__:null,SharedStorageItemsView:Rr},Symbol.toStringTag,{value:"Module"}));class Pr extends ee{view;constructor(e,t){super(e,t.securityOrigin,!1,"shared-storage-instance")}static async createElement(e,t){const i=new Pr(e,t);return i.view=await Rr.createView(t),i.view.element.setAttribute("jslog",`${Z("shared-storage-data")}`),i}get itemURL(){return"shared-storage://"}onselect(e){return super.onselect(e),this.resourcesPanel.showView(this.view),!1}}const mh=Object.freeze(Object.defineProperty({__proto__:null,SharedStorageTreeElement:Pr},Symbol.toStringTag,{value:"Module"})),aa={storageBuckets:"Storage buckets"},jc=P("panels/application/StorageBucketsTreeElement.ts",aa),da=B.bind(void 0,jc);class la extends je{bucketTreeElements=new Set;constructor(e){super(e,da(aa.storageBuckets),"storage-buckets");const t=W("database");this.setLeadingIcons([t]),this.setLink("https://github.com/WICG/storage-buckets/blob/gh-pages/explainer.md")}initialize(){w.instance().addModelListener(Vt,"BucketAdded",this.bucketAdded,this),w.instance().addModelListener(Vt,"BucketRemoved",this.bucketRemoved,this),w.instance().addModelListener(Vt,"BucketChanged",this.bucketChanged,this);for(const e of w.instance().models(Vt)){const t=e.getBuckets();for(const i of t)this.addBucketTreeElement(e,i)}}removeBucketsForModel(e){for(const t of this.bucketTreeElements)t.model===e&&this.removeBucketTreeElement(t)}bucketAdded({data:{model:e,bucketInfo:t}}){this.addBucketTreeElement(e,t)}bucketRemoved({data:{model:e,bucketInfo:t}}){const i=this.getBucketTreeElement(e,t);i&&this.removeBucketTreeElement(i)}bucketChanged({data:{model:e,bucketInfo:t}}){const i=this.getBucketTreeElement(e,t);i&&(i.bucketInfo=t)}addBucketTreeElement(e,t){if(t.bucket.name===void 0)return;const i=new ca(this.resourcesPanel,e,t);this.bucketTreeElements.add(i),this.appendChild(i),i.initialize()}removeBucketTreeElement(e){this.removeChild(e),this.bucketTreeElements.delete(e),this.setExpandable(this.bucketTreeElements.size>0)}get itemURL(){return"storage-buckets-group://"}getBucketTreeElement(e,{bucket:{storageKey:t,name:i}}){for(const r of this.bucketTreeElements)if(r.model===e&&r.bucketInfo.bucket.storageKey===t&&r.bucketInfo.bucket.name===i)return r;return null}}class ca extends je{storageBucketInfo;bucketModel;view;constructor(e,t,i){const{bucket:r}=i,{origin:s}=us(i.bucket.storageKey);super(e,`${r.name} - ${s}`,"storage-bucket"),this.bucketModel=t,this.storageBucketInfo=i;const o=W("database");this.setLeadingIcons([o])}initialize(){const{bucket:e}=this.bucketInfo,t=new xs(this.resourcesPanel,e);this.appendChild(t);const i=new Yo(this.resourcesPanel,e);this.appendChild(i),i.initialize()}get itemURL(){const{bucket:e}=this.bucketInfo;return`storage-buckets-group://${e.name}/${e.storageKey}`}get model(){return this.bucketModel}get bucketInfo(){return this.storageBucketInfo}set bucketInfo(e){this.storageBucketInfo=e,this.view&&this.view.getComponent().setStorageBucket(this.storageBucketInfo)}onselect(e){return super.onselect(e),this.view||(this.view=xt(fi,new yi),this.view.getComponent().enableStorageBucketControls(this.model),this.view.getComponent().setStorageBucket(this.storageBucketInfo)),this.showView(this.view),!1}}const fh=Object.freeze(Object.defineProperty({__proto__:null,StorageBucketsTreeElement:ca,StorageBucketsTreeParentElement:la,i18nString:da},Symbol.toStringTag,{value:"Module"})),ss=new CSSStyleSheet;ss.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.report-row {
  display: flex;
  align-items: center;
  white-space: normal;
}

.clear-storage-button .report-row {
  margin: 0 0 0 17px;
  display: flex;
}

.link {
  margin-left: 10px;
  display: none;
}

.report-row:hover .link {
  display: inline;
}

.quota-override-editor-with-button {
  align-items: baseline;
  display: flex;
}

.quota-override-notification-editor {
  border: solid 1px var(--sys-color-neutral-outline);
  border-radius: 4px;
  display: flex;
  flex: auto;
  margin-right: 4px;
  max-width: 200px;
  min-width: 50px;
  min-height: 19px;
  padding-left: 4px;

  &:focus {
    border-color: var(--sys-color-state-focus-ring);
  }

  &:hover:not(:focus) {
    background-color: var(--sys-color-state-hover-on-subtle);
  }
}

.quota-override-error {
  padding-top: 10px;
  color: var(--sys-color-error);
}

.usage-breakdown-row {
  min-width: fit-content;
}

.clear-storage-container {
  overflow: auto;
}

.clear-storage-header {
  min-width: 400px;
}

.report-content-box {
  overflow: initial;
}

.include-third-party-cookies {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
}

/*# sourceURL=storageView.css */
`);const _={storageQuotaUsed:"{PH1} used out of {PH2} storage quota",storageQuotaUsedWithBytes:"{PH1} bytes used out of {PH2} bytes storage quota",storageWithCustomMarker:"{PH1} (custom)",storageTitle:"Storage",usage:"Usage",mb:"MB",learnMore:"Learn more",clearSiteData:"Clear site data",SiteDataCleared:"Site data cleared",application:"Application",unregisterServiceWorker:"Unregister service workers",localAndSessionStorage:"Local and session storage",indexDB:"IndexedDB",webSql:"Web SQL",cookies:"Cookies",cacheStorage:"Cache storage",includingThirdPartyCookies:"including third-party cookies",sFailedToLoad:"{PH1} (failed to load)",internalError:"Internal error",pleaseEnterANumber:"Please enter a number",numberMustBeNonNegative:"Number must be non-negative",numberMustBeSmaller:"Number must be smaller than {PH1}",clearing:"Clearing...",storageQuotaIsLimitedIn:"Storage quota is limited in Incognito mode",fileSystem:"File System",other:"Other",storageUsage:"Storage usage",serviceWorkers:"Service workers",simulateCustomStorage:"Simulate custom storage quota"},ua=P("panels/application/StorageView.ts",_),q=B.bind(void 0,ua);class qi extends ms{pieColors;reportView;target;securityOrigin;storageKey;settings;includeThirdPartyCookiesSetting;quotaRow;quotaUsage;pieChart;previousOverrideFieldValue;quotaOverrideCheckbox;quotaOverrideControlRow;quotaOverrideEditor;quotaOverrideErrorMessage;clearButton;constructor(){super(!0,1e3),this.contentElement.classList.add("clear-storage-container"),this.contentElement.setAttribute("jslog",`${Z("clear-storage")}`),this.pieColors=new Map([["appcache","rgb(110, 161, 226)"],["cache_storage","rgb(229, 113, 113)"],["cookies","rgb(239, 196, 87)"],["indexeddb","rgb(155, 127, 230)"],["local_storage","rgb(116, 178, 102)"],["service_workers","rgb(255, 167, 36)"],["websql","rgb(203, 220, 56)"]]),this.reportView=new vi(q(_.storageTitle)),this.reportView.element.classList.add("clear-storage-header"),this.reportView.show(this.contentElement),this.target=null,this.securityOrigin=null,this.storageKey=null,this.settings=new Map;for(const b of Is)this.settings.set(b,qe.instance().createSetting("clear-storage-"+Cr(b),!0));this.includeThirdPartyCookiesSetting=qe.instance().createSetting("clear-storage-include-third-party-cookies",!1);const e=this.reportView.appendSection(q(_.usage));e.element.setAttribute("jslog",`${Ce("usage")}`),this.quotaRow=e.appendSelectableRow(),this.quotaRow.classList.add("quota-usage-row");const t=e.appendRow(),i=st.create("https://developer.chrome.com/docs/devtools/progressive-web-apps#opaque-responses",q(_.learnMore),void 0,void 0,"learn-more");t.appendChild(i),this.quotaUsage=null,this.pieChart=new jd,this.populatePieChart(0,[]);const r=e.appendRow();r.classList.add("usage-breakdown-row"),r.appendChild(this.pieChart),this.previousOverrideFieldValue="";const s=e.appendRow();s.classList.add("quota-override-row"),this.quotaOverrideCheckbox=cr.create(q(_.simulateCustomStorage),!1,""),this.quotaOverrideCheckbox.setAttribute("jslog",`${en("simulate-custom-quota").track({change:!0})}`),s.appendChild(this.quotaOverrideCheckbox),this.quotaOverrideCheckbox.checkboxElement.addEventListener("click",this.onClickCheckbox.bind(this),!1),this.quotaOverrideControlRow=e.appendRow(),this.quotaOverrideEditor=this.quotaOverrideControlRow.createChild("input","quota-override-notification-editor"),this.quotaOverrideEditor.setAttribute("jslog",`${hn("quota-override").track({change:!0})}`),this.quotaOverrideControlRow.appendChild(Ad(q(_.mb))),this.quotaOverrideControlRow.classList.add("hidden"),this.quotaOverrideEditor.addEventListener("keyup",b=>{b.key==="Enter"&&(this.applyQuotaOverrideFromInputField(),b.consume(!0))}),this.quotaOverrideEditor.addEventListener("focusout",b=>{this.applyQuotaOverrideFromInputField(),b.consume(!0)});const o=e.appendRow();this.quotaOverrideErrorMessage=o.createChild("div","quota-override-error");const a=this.reportView.appendSection("","clear-storage-button").appendRow();this.clearButton=ut(q(_.clearSiteData),this.clear.bind(this),{jslogContext:"storage.clear-site-data"}),this.clearButton.id="storage-view-clear-button",a.appendChild(this.clearButton);const d=Hs(q(_.includingThirdPartyCookies),this.includeThirdPartyCookiesSetting);d.classList.add("include-third-party-cookies"),a.appendChild(d);const h=this.reportView.appendSection(q(_.application));h.element.setAttribute("jslog",`${Ce("application")}`),this.appendItem(h,q(_.unregisterServiceWorker),"service_workers"),h.markFieldListAsGroup();const p=this.reportView.appendSection(q(_.storageTitle));p.element.setAttribute("jslog",`${Ce("storage")}`),this.appendItem(p,q(_.localAndSessionStorage),"local_storage"),this.appendItem(p,q(_.indexDB),"indexeddb"),this.appendItem(p,q(_.webSql),"websql"),this.appendItem(p,q(_.cookies),"cookies"),this.appendItem(p,q(_.cacheStorage),"cache_storage"),p.markFieldListAsGroup(),w.instance().observeTargets(this)}appendItem(e,t,i){const r=e.appendRow(),s=this.settings.get(i);s&&r.appendChild(Hs(t,s))}targetAdded(e){if(e!==w.instance().primaryPageTarget())return;this.target=e;const t=e.model(Mi);this.updateOrigin(t.mainSecurityOrigin(),t.unreachableMainSecurityOrigin()),t.addEventListener(Tt.MainSecurityOriginChanged,this.originChanged,this);const i=e.model(ur);this.updateStorageKey(i.mainStorageKey()),i.addEventListener("MainStorageKeyChanged",this.storageKeyChanged,this)}targetRemoved(e){if(this.target!==e)return;e.model(Mi).removeEventListener(Tt.MainSecurityOriginChanged,this.originChanged,this),e.model(ur).removeEventListener("MainStorageKeyChanged",this.storageKeyChanged,this)}originChanged(e){const{mainSecurityOrigin:t,unreachableMainSecurityOrigin:i}=e.data;this.updateOrigin(t,i)}storageKeyChanged(e){const{mainStorageKey:t}=e.data;this.updateStorageKey(t)}updateOrigin(e,t){const i=this.securityOrigin;t?(this.securityOrigin=t,this.reportView.setSubtitle(q(_.sFailedToLoad,{PH1:t}))):(this.securityOrigin=e,this.reportView.setSubtitle(e)),i!==this.securityOrigin&&(this.quotaOverrideControlRow.classList.add("hidden"),this.quotaOverrideCheckbox.checkboxElement.checked=!1,this.quotaOverrideErrorMessage.textContent=""),this.doUpdate()}updateStorageKey(e){const t=this.storageKey;this.storageKey=e,this.reportView.setSubtitle(e),t!==this.storageKey&&(this.quotaOverrideControlRow.classList.add("hidden"),this.quotaOverrideCheckbox.checkboxElement.checked=!1,this.quotaOverrideErrorMessage.textContent=""),this.doUpdate()}async applyQuotaOverrideFromInputField(){if(!this.target||!this.securityOrigin){this.quotaOverrideErrorMessage.textContent=q(_.internalError);return}this.quotaOverrideErrorMessage.textContent="";const e=this.quotaOverrideEditor.value;if(e===""){await this.clearQuotaForOrigin(this.target,this.securityOrigin),this.previousOverrideFieldValue="";return}const t=parseFloat(e);if(!Number.isFinite(t)){this.quotaOverrideErrorMessage.textContent=q(_.pleaseEnterANumber);return}if(t<0){this.quotaOverrideErrorMessage.textContent=q(_.numberMustBeNonNegative);return}const i=9e12;if(t>=i){this.quotaOverrideErrorMessage.textContent=q(_.numberMustBeSmaller,{PH1:i.toLocaleString()});return}const r=1e3*1e3,s=Math.round(t*r),o=`${s/r}`;this.quotaOverrideEditor.value=o,this.previousOverrideFieldValue=o,await this.target.storageAgent().invoke_overrideQuotaForOrigin({origin:this.securityOrigin,quotaSize:s})}async clearQuotaForOrigin(e,t){await e.storageAgent().invoke_overrideQuotaForOrigin({origin:t})}async onClickCheckbox(){this.quotaOverrideControlRow.classList.contains("hidden")?(this.quotaOverrideControlRow.classList.remove("hidden"),this.quotaOverrideCheckbox.checkboxElement.checked=!0,this.quotaOverrideEditor.value=this.previousOverrideFieldValue,this.quotaOverrideEditor.focus()):this.target&&this.securityOrigin&&(this.quotaOverrideControlRow.classList.add("hidden"),this.quotaOverrideCheckbox.checkboxElement.checked=!1,await this.clearQuotaForOrigin(this.target,this.securityOrigin),this.quotaOverrideErrorMessage.textContent="")}clear(){if(!this.securityOrigin)return;const e=[];for(const i of this.settings.keys()){const r=this.settings.get(i);r&&r.get()&&e.push(i)}if(this.target){const i=this.includeThirdPartyCookiesSetting.get();qi.clear(this.target,this.storageKey,this.securityOrigin,e,i)}this.clearButton.disabled=!0;const t=this.clearButton.textContent;this.clearButton.textContent=q(_.clearing),window.setTimeout(()=>{this.clearButton.disabled=!1,this.clearButton.textContent=t,this.clearButton.focus()},500),Ye(q(_.SiteDataCleared))}static clear(e,t,i,r,s){if(console.assert(!!t),!t)return;e.storageAgent().invoke_clearDataForStorageKey({storageKey:t,storageTypes:r.join(",")});const o=new Set(r),a=o.has("all");if(o.has("local_storage")||a){const d=e.model(Tr);d&&d.clearForStorageKey(t)}if(o.has("indexeddb")||a)for(const d of w.instance().targets()){const h=d.model(Se);h&&h.clearForStorageKey(t)}if(i&&(o.has("cookies")||a)){e.storageAgent().invoke_clearDataForOrigin({origin:i,storageTypes:"cookies"});const d=e.model(Jr);d&&d.clear(void 0,s?void 0:i)}if(o.has("cache_storage")||a){const d=w.instance().primaryPageTarget(),h=d&&d.model(un);h&&h.clearForStorageKey(t)}}async doUpdate(){if(!this.securityOrigin||!this.target){this.quotaRow.textContent="",this.populatePieChart(0,[]);return}const e=this.securityOrigin,t=await this.target.storageAgent().invoke_getUsageAndQuota({origin:e});if(this.quotaRow.textContent="",t.getError()){this.populatePieChart(0,[]);return}const i=t.overrideActive,r=sr(t.quota),s=sr(t.usage),o=q(_.storageWithCustomMarker,{PH1:r}),a=i?Td.build`<b>${o}</b>`.element():r,d=rt(ua,_.storageQuotaUsed,{PH1:s,PH2:a});if(this.quotaRow.appendChild(d),mi.install(this.quotaRow,q(_.storageQuotaUsedWithBytes,{PH1:t.usage.toLocaleString(),PH2:t.quota.toLocaleString()})),!t.overrideActive&&t.quota<125829120){const h=new dn;h.data={iconName:"info",color:"var(--icon-info)",width:"14px",height:"14px"},mi.install(this.quotaRow,q(_.storageQuotaIsLimitedIn)),this.quotaRow.appendChild(h)}if(this.quotaUsage===null||this.quotaUsage!==t.usage){this.quotaUsage=t.usage;const h=[];for(const p of t.usageBreakdown.sort((b,C)=>C.usage-b.usage)){const b=p.usage;if(!b)continue;const C=this.getStorageTypeName(p.storageType),v=this.pieColors.get(p.storageType)||"#ccc";h.push({value:b,color:v,title:C})}this.populatePieChart(t.usage,h)}this.update()}populatePieChart(e,t){this.pieChart.data={chartName:q(_.storageUsage),size:110,formatter:sr,showLegend:!0,total:e,slices:t}}getStorageTypeName(e){switch(e){case"file_systems":return q(_.fileSystem);case"websql":return q(_.webSql);case"appcache":return q(_.application);case"indexeddb":return q(_.indexDB);case"cache_storage":return q(_.cacheStorage);case"service_workers":return q(_.serviceWorkers);default:return q(_.other)}}wasShown(){super.wasShown(),this.reportView.registerCSSFiles([ss]),this.registerCSSFiles([ss])}}const Is=["appcache","cache_storage","cookies","indexeddb","local_storage","service_workers","websql"];class qc{handleAction(e,t){switch(t){case"resources.clear":return this.handleClear(!1);case"resources.clear-incl-third-party-cookies":return this.handleClear(!0)}return!1}handleClear(e){const t=w.instance().primaryPageTarget();if(!t)return!1;const i=t.model($e);if(!i)return!1;const r=i.getMainSecurityOrigin();return i.getMainStorageKey().then(s=>{qi.clear(t,s,r,Is,e)},s=>{}),!0}}const vh=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:qc,AllStorageTypes:Is,StorageView:qi},Symbol.toStringTag,{value:"Module"})),ha={trustTokens:"Private state tokens"},Gc=P("panels/application/TrustTokensTreeElement.ts",ha),pa=B.bind(void 0,Gc);class ga extends ee{view;constructor(e){super(e,pa(ha.trustTokens),!1,"private-state-tokens");const t=W("database");this.setLeadingIcons([t])}get itemURL(){return"trustTokens://"}onselect(e){return super.onselect(e),this.view||(this.view=xt(fi,new Gn,"trust-tokens")),this.showView(this.view),fe.panelShown("trust-tokens"),!1}}const wh=Object.freeze(Object.defineProperty({__proto__:null,TrustTokensTreeElement:ga,i18nString:pa},Symbol.toStringTag,{value:"Module"})),O={application:"Application",storage:"Storage",localStorage:"Local storage",sessionStorage:"Session storage",extensionStorage:"Extension storage",extensionSessionStorage:"Session",extensionLocalStorage:"Local",extensionSyncStorage:"Sync",extensionManagedStorage:"Managed",cookies:"Cookies",backgroundServices:"Background services",frames:"Frames",manifest:"Manifest",noManifestDetected:"No manifest detected",appManifest:"App Manifest",indexeddb:"IndexedDB",refreshIndexeddb:"Refresh IndexedDB",versionSEmpty:"Version: {PH1} (empty)",versionS:"Version: {PH1}",clear:"Clear",keyPathS:"Key path: {PH1}",localFiles:"Local Files",cookiesUsedByFramesFromS:"Cookies used by frames from {PH1}",openedWindows:"Opened Windows",webWorkers:"Web Workers",documentNotAvailable:"Document not available",theContentOfThisDocumentHasBeen:"The content of this document has been generated dynamically via 'document.write()'.",windowWithoutTitle:"Window without title",worker:"worker",onInvokeManifestAlert:"Manifest: Invoke to scroll to the top of manifest",beforeInvokeAlert:"{PH1}: Invoke to scroll to this section in manifest",onInvokeAlert:"Scrolled to {PH1}",applicationSidebarPanel:"Application panel sidebar",thirdPartyPhaseout:"Cookies from {PH1} may have been blocked due to third-party cookie phaseout."},zc=P("panels/application/ApplicationPanelSidebar.ts",O),U=B.bind(void 0,zc);function ma(n){if(n==="main")throw new Error("Unexpected main target id")}function Kc(n){switch(n){case"session":return U(O.extensionSessionStorage);case"local":return U(O.extensionLocalStorage);case"sync":return U(O.extensionSyncStorage);case"managed":return U(O.extensionManagedStorage);default:throw new Error(`Unrecognized storage type: ${n}`)}}class fa extends j{panel;sidebarTree;applicationTreeElement;serviceWorkersTreeElement;localStorageListTreeElement;sessionStorageListTreeElement;extensionStorageListTreeElement;indexedDBListTreeElement;interestGroupTreeElement;cookieListTreeElement;trustTokensTreeElement;cacheStorageListTreeElement;sharedStorageListTreeElement;storageBucketsTreeElement;backForwardCacheListTreeElement;backgroundFetchTreeElement;backgroundSyncTreeElement;bounceTrackingMitigationsTreeElement;notificationsTreeElement;paymentHandlerTreeElement;periodicBackgroundSyncTreeElement;pushMessagingTreeElement;reportingApiTreeElement;preloadingSummaryTreeElement;resourcesSection;domStorageTreeElements;extensionIdToStorageTreeParentElement;extensionStorageModels;extensionStorageTreeElements;sharedStorageTreeElements;domains;target;previousHoveredElement;sharedStorageTreeElementDispatcher;constructor(e){super(),this.panel=e,this.sidebarTree=new Fd("NavigationTree"),this.sidebarTree.element.classList.add("resources-sidebar"),this.sidebarTree.hideOverflow(),this.sidebarTree.element.classList.add("filter-all"),this.sidebarTree.addEventListener(Id.ElementAttached,this.treeElementAdded,this),this.contentElement.appendChild(this.sidebarTree.element);const t=U(O.application);this.applicationTreeElement=this.addSidebarSection(t,"application");const i=this.applicationTreeElement.treeOutline?.contentElement;i&&(i.ariaLabel=U(O.applicationSidebarPanel));const r=new wa(e);this.applicationTreeElement.appendChild(r),r.generateChildren(),this.serviceWorkersTreeElement=new va(e),this.applicationTreeElement.appendChild(this.serviceWorkersTreeElement);const s=new Sa(e);this.applicationTreeElement.appendChild(s);const o=U(O.storage),a=this.addSidebarSection(o,"storage");this.localStorageListTreeElement=new je(e,U(O.localStorage),"local-storage"),this.localStorageListTreeElement.setLink("https://developer.chrome.com/docs/devtools/storage/localstorage/?utm_source=devtools");const d=W("table");this.localStorageListTreeElement.setLeadingIcons([d]),a.appendChild(this.localStorageListTreeElement),this.sessionStorageListTreeElement=new je(e,U(O.sessionStorage),"session-storage"),this.sessionStorageListTreeElement.setLink("https://developer.chrome.com/docs/devtools/storage/sessionstorage/?utm_source=devtools");const h=W("table");if(this.sessionStorageListTreeElement.setLeadingIcons([h]),a.appendChild(this.sessionStorageListTreeElement),lr.isEnabled("extension-storage-viewer")){this.extensionStorageListTreeElement=new je(e,U(O.extensionStorage),"extension-storage"),this.extensionStorageListTreeElement.setLink("https://developer.chrome.com/docs/extensions/reference/api/storage/?utm_source=devtools");const R=W("table");this.extensionStorageListTreeElement.setLeadingIcons([R]),a.appendChild(this.extensionStorageListTreeElement)}this.indexedDBListTreeElement=new xs(e),this.indexedDBListTreeElement.setLink("https://developer.chrome.com/docs/devtools/storage/indexeddb/?utm_source=devtools"),a.appendChild(this.indexedDBListTreeElement),this.cookieListTreeElement=new je(e,U(O.cookies),"cookies"),this.cookieListTreeElement.setLink("https://developer.chrome.com/docs/devtools/storage/cookies/?utm_source=devtools");const p=W("cookie");this.cookieListTreeElement.setLeadingIcons([p]),a.appendChild(this.cookieListTreeElement),this.trustTokensTreeElement=new ga(e),a.appendChild(this.trustTokensTreeElement),this.interestGroupTreeElement=new go(e),a.appendChild(this.interestGroupTreeElement),this.sharedStorageListTreeElement=new na(e),a.appendChild(this.sharedStorageListTreeElement),this.cacheStorageListTreeElement=new Yo(e),a.appendChild(this.cacheStorageListTreeElement),this.storageBucketsTreeElement=new la(e),a.appendChild(this.storageBucketsTreeElement);const b=U(O.backgroundServices),C=this.addSidebarSection(b,"background-services");this.backForwardCacheListTreeElement=new Wl(e),C.appendChild(this.backForwardCacheListTreeElement),this.backgroundFetchTreeElement=new Gt(e,"backgroundFetch"),C.appendChild(this.backgroundFetchTreeElement),this.backgroundSyncTreeElement=new Gt(e,"backgroundSync"),C.appendChild(this.backgroundSyncTreeElement),this.bounceTrackingMitigationsTreeElement=new eo(e),C.appendChild(this.bounceTrackingMitigationsTreeElement),this.notificationsTreeElement=new Gt(e,"notifications"),C.appendChild(this.notificationsTreeElement),this.paymentHandlerTreeElement=new Gt(e,"paymentHandler"),C.appendChild(this.paymentHandlerTreeElement),this.periodicBackgroundSyncTreeElement=new Gt(e,"periodicBackgroundSync"),C.appendChild(this.periodicBackgroundSyncTreeElement),this.preloadingSummaryTreeElement=new Mo(e),C.appendChild(this.preloadingSummaryTreeElement),this.preloadingSummaryTreeElement.constructChildren(e),this.pushMessagingTreeElement=new Gt(e,"pushMessaging"),C.appendChild(this.pushMessagingTreeElement),this.reportingApiTreeElement=new xc(e),C.appendChild(this.reportingApiTreeElement);const v=U(O.frames),D=this.addSidebarSection(v,"frames");this.resourcesSection=new Ia(e,D),this.domStorageTreeElements=new Map,this.extensionIdToStorageTreeParentElement=new Map,this.extensionStorageTreeElements=new Map,this.extensionStorageModels=[],this.sharedStorageTreeElements=new Map,this.domains={},this.sidebarTree.contentElement.addEventListener("mousemove",this.onmousemove.bind(this),!1),this.sidebarTree.contentElement.addEventListener("mouseleave",this.onmouseleave.bind(this),!1),w.instance().observeTargets(this,{scoped:!0}),w.instance().addModelListener($e,We.FrameNavigated,this.frameNavigated,this,{scoped:!0}),this.panel.lastSelectedItemPath().length||r.select(),w.instance().observeModels(Tr,{modelAdded:R=>this.domStorageModelAdded(R),modelRemoved:R=>this.domStorageModelRemoved(R)},{scoped:!0}),lr.isEnabled("extension-storage-viewer")&&w.instance().observeModels(ws,{modelAdded:R=>this.extensionStorageModelAdded(R),modelRemoved:R=>this.extensionStorageModelRemoved(R)},{scoped:!0}),w.instance().observeModels(Se,{modelAdded:R=>this.indexedDBModelAdded(R),modelRemoved:R=>this.indexedDBModelRemoved(R)},{scoped:!0}),w.instance().observeModels(gi,{modelAdded:R=>this.interestGroupModelAdded(R),modelRemoved:R=>this.interestGroupModelRemoved(R)},{scoped:!0}),w.instance().observeModels(Fs,{modelAdded:R=>this.sharedStorageModelAdded(R).catch(F=>{console.error(F)}),modelRemoved:R=>this.sharedStorageModelRemoved(R)},{scoped:!0}),w.instance().observeModels(Vt,{modelAdded:R=>this.storageBucketsModelAdded(R),modelRemoved:R=>this.storageBucketsModelRemoved(R)},{scoped:!0}),this.sharedStorageTreeElementDispatcher=new Si,this.contentElement.style.contain="layout style"}addSidebarSection(e,t){const i=new jr(e,!0,t);return i.listItemElement.classList.add("storage-group-list-item"),i.setCollapsible(!1),i.selectable=!1,this.sidebarTree.appendChild(i),ns(i.listItemElement,3),Xe(i.childrenListElement,e),i}targetAdded(e){if(e!==e.outermostTarget())return;this.target=e;const t=e.model(gi);t&&t.addEventListener("InterestGroupAccess",this.interestGroupAccess,this);const i=e.model($e);i&&(i.cachedResourcesLoaded()&&this.initialize(),i.addEventListener(We.CachedResourcesLoaded,this.initialize,this),i.addEventListener(We.WillLoadCachedResources,this.resetWithFrames,this))}targetRemoved(e){if(e!==this.target)return;delete this.target;const t=e.model($e);t&&(t.removeEventListener(We.CachedResourcesLoaded,this.initialize,this),t.removeEventListener(We.WillLoadCachedResources,this.resetWithFrames,this));const i=e.model(gi);i&&i.removeEventListener("InterestGroupAccess",this.interestGroupAccess,this),this.resetWithFrames()}focus(){this.sidebarTree.focus()}initialize(){for(const r of $e.frames())this.addCookieDocument(r);const e=this.target&&this.target.model(gi);e&&e.enable(),this.cacheStorageListTreeElement.initialize();const t=this.target&&this.target.model(vs)||null;this.backgroundFetchTreeElement&&this.backgroundFetchTreeElement.initialize(t),this.backgroundSyncTreeElement&&this.backgroundSyncTreeElement.initialize(t),this.notificationsTreeElement.initialize(t),this.paymentHandlerTreeElement.initialize(t),this.periodicBackgroundSyncTreeElement.initialize(t),this.pushMessagingTreeElement.initialize(t),this.storageBucketsTreeElement?.initialize();const i=this.target?.model(Ge);i&&this.preloadingSummaryTreeElement?.initialize(i)}domStorageModelAdded(e){e.enable(),e.storages().forEach(this.addDOMStorage.bind(this)),e.addEventListener("DOMStorageAdded",this.domStorageAdded,this),e.addEventListener("DOMStorageRemoved",this.domStorageRemoved,this)}domStorageModelRemoved(e){e.storages().forEach(this.removeDOMStorage.bind(this)),e.removeEventListener("DOMStorageAdded",this.domStorageAdded,this),e.removeEventListener("DOMStorageRemoved",this.domStorageRemoved,this)}extensionStorageModelAdded(e){this.extensionStorageModels.push(e),e.enable(),e.storages().forEach(this.addExtensionStorage.bind(this)),e.addEventListener("ExtensionStorageAdded",this.extensionStorageAdded,this),e.addEventListener("ExtensionStorageRemoved",this.extensionStorageRemoved,this)}extensionStorageModelRemoved(e){console.assert(this.extensionStorageModels.includes(e)),this.extensionStorageModels.splice(this.extensionStorageModels.indexOf(e),1),e.storages().forEach(this.removeExtensionStorage.bind(this)),e.removeEventListener("ExtensionStorageAdded",this.extensionStorageAdded,this),e.removeEventListener("ExtensionStorageRemoved",this.extensionStorageRemoved,this)}indexedDBModelAdded(e){e.enable(),this.indexedDBListTreeElement.addIndexedDBForModel(e)}indexedDBModelRemoved(e){this.indexedDBListTreeElement.removeIndexedDBForModel(e)}interestGroupModelAdded(e){e.enable(),e.addEventListener("InterestGroupAccess",this.interestGroupAccess,this)}interestGroupModelRemoved(e){e.disable(),e.removeEventListener("InterestGroupAccess",this.interestGroupAccess,this)}async sharedStorageModelAdded(e){await e.enable();for(const t of e.storages())await this.addSharedStorage(t);e.addEventListener("SharedStorageAdded",this.sharedStorageAdded,this),e.addEventListener("SharedStorageRemoved",this.sharedStorageRemoved,this),e.addEventListener("SharedStorageAccess",this.sharedStorageAccess,this)}sharedStorageModelRemoved(e){e.disable();for(const t of e.storages())this.removeSharedStorage(t);e.removeEventListener("SharedStorageAdded",this.sharedStorageAdded,this),e.removeEventListener("SharedStorageRemoved",this.sharedStorageRemoved,this),e.removeEventListener("SharedStorageAccess",this.sharedStorageAccess,this)}storageBucketsModelAdded(e){e.enable()}storageBucketsModelRemoved(e){this.storageBucketsTreeElement?.removeBucketsForModel(e)}resetWithFrames(){this.resourcesSection.reset(),this.reset()}treeElementAdded(e){const t=this.panel.lastSelectedItemPath();if(!t.length)return;const i=e.data,r=[i];for(let a=i.parent;a&&"itemURL"in a&&a.itemURL;a=a.parent)r.push(a);let s=t.length-1,o=r.length-1;for(;s>=0&&o>=0&&t[s]===r[o].itemURL;)r[o].expanded||(s>0&&r[o].expand(),r[o].selected||r[o].select()),s--,o--}reset(){this.domains={},this.cookieListTreeElement.removeChildren(),this.interestGroupTreeElement.clearEvents()}frameNavigated(e){const t=e.data;t.isOutermostFrame()&&this.reset(),this.addCookieDocument(t)}interestGroupAccess(e){this.interestGroupTreeElement.addEvent(e.data)}addCookieDocument(e){const t=e.unreachableUrl()||e.url,i=xe.fromString(t);if(!i||i.scheme!=="http"&&i.scheme!=="https"&&i.scheme!=="file")return;const r=i.securityOrigin();if(!this.domains[r]){this.domains[r]=!0;const s=new Ta(this.panel,e,i);this.cookieListTreeElement.appendChild(s)}}domStorageAdded(e){const t=e.data;this.addDOMStorage(t)}addDOMStorage(e){console.assert(!this.domStorageTreeElements.get(e)),console.assert(!!e.storageKey);const t=new ka(this.panel,e);this.domStorageTreeElements.set(e,t),e.isLocalStorage?this.localStorageListTreeElement.appendChild(t,i):this.sessionStorageListTreeElement.appendChild(t,i);function i(r,s){const o=r.titleAsText().toLocaleLowerCase(),a=s.titleAsText().toLocaleUpperCase();return o.localeCompare(a)}}domStorageRemoved(e){const t=e.data;this.removeDOMStorage(t)}removeDOMStorage(e){const t=this.domStorageTreeElements.get(e);if(!t)return;const i=t.selected,r=t.parent;r&&(r.removeChild(t),i&&r.select()),this.domStorageTreeElements.delete(e)}extensionStorageAdded(e){const t=e.data;this.addExtensionStorage(t)}useTreeViewForExtensionStorage(e){return!e.matchesTarget(this.target)}getExtensionStorageAreaParent(e){if(!this.useTreeViewForExtensionStorage(e))return this.extensionStorageListTreeElement;const t=this.extensionIdToStorageTreeParentElement.get(e.extensionId);if(t)return t;const i=new Aa(this.panel,e.extensionId,e.name);return this.extensionIdToStorageTreeParentElement.set(e.extensionId,i),this.extensionStorageListTreeElement?.appendChild(i),i}addExtensionStorage(e){if(this.extensionStorageModels.find(r=>r!==e.model&&r.storageForIdAndArea(e.extensionId,e.storageArea)))return;console.assert(!!this.extensionStorageListTreeElement),console.assert(!this.extensionStorageTreeElements.get(e.key));const t=new Ea(this.panel,e);this.extensionStorageTreeElements.set(e.key,t),this.getExtensionStorageAreaParent(e)?.appendChild(t,i);function i(r,s){const o=d=>d.storageArea,a=["session","local","sync","managed"];return a.indexOf(o(r))-a.indexOf(o(s))}}extensionStorageRemoved(e){const t=e.data;this.removeExtensionStorage(t)}removeExtensionStorage(e){if(this.extensionStorageModels.find(s=>s.storageForIdAndArea(e.extensionId,e.storageArea)))return;const t=this.extensionStorageTreeElements.get(e.key);if(!t)return;const i=t.selected,r=t.parent;r&&(r.removeChild(t),this.useTreeViewForExtensionStorage(e)&&r.childCount()===0?(this.extensionStorageListTreeElement?.removeChild(r),this.extensionIdToStorageTreeParentElement.delete(e.extensionId)):i&&r.select()),this.extensionStorageTreeElements.delete(e.key)}async sharedStorageAdded(e){await this.addSharedStorage(e.data)}async addSharedStorage(e){const t=await Pr.createElement(this.panel,e);this.sharedStorageTreeElements.has(e.securityOrigin)||(this.sharedStorageTreeElements.set(e.securityOrigin,t),this.sharedStorageListTreeElement.appendChild(t),this.sharedStorageTreeElementDispatcher.dispatchEventToListeners("SharedStorageTreeElementAdded",{origin:e.securityOrigin}))}sharedStorageRemoved(e){this.removeSharedStorage(e.data)}removeSharedStorage(e){const t=this.sharedStorageTreeElements.get(e.securityOrigin);if(!t)return;const i=t.selected,r=t.parent;r&&(r.removeChild(t),r.setExpandable(r.childCount()>0),i&&r.select()),this.sharedStorageTreeElements.delete(e.securityOrigin)}sharedStorageAccess(e){this.sharedStorageListTreeElement.addEvent(e.data)}async showResource(e,t,i){await this.resourcesSection.revealResource(e,t,i)}showFrame(e){this.resourcesSection.revealAndSelectFrame(e)}showFileSystem(e){this.innerShowView(e)}innerShowView(e){this.panel.showView(e)}showPreloadingRuleSetView(e){this.preloadingSummaryTreeElement&&this.preloadingSummaryTreeElement.expandAndRevealRuleSet(e)}showPreloadingAttemptViewWithFilter(e){this.preloadingSummaryTreeElement&&this.preloadingSummaryTreeElement.expandAndRevealAttempts(e)}onmousemove(e){const t=e.target;if(!t)return;const i=xd(t,"li");if(!i)return;const r=jr.getTreeElementBylistItemNode(i);this.previousHoveredElement!==r&&(this.previousHoveredElement&&(this.previousHoveredElement.hovered=!1,delete this.previousHoveredElement),r instanceof ft&&(this.previousHoveredElement=r,r.hovered=!0))}onmouseleave(e){this.previousHoveredElement&&(this.previousHoveredElement.hovered=!1,delete this.previousHoveredElement)}wasShown(){super.wasShown(),this.sidebarTree.registerCSSFiles([jo])}}class Gt extends ee{serviceName;view;model;selectedInternal;constructor(e,t){super(e,Yt.getUIString(t),!1,Cr(t)),this.serviceName=t,this.selectedInternal=!1,this.view=null,this.model=null;const i=W(this.getIconType());this.setLeadingIcons([i])}getIconType(){switch(this.serviceName){case"backgroundFetch":return"arrow-up-down";case"backgroundSync":return"sync";case"pushMessaging":return"cloud";case"notifications":return"bell";case"paymentHandler":return"credit-card";case"periodicBackgroundSync":return"watch";default:return console.error(`Service ${this.serviceName} does not have a dedicated icon`),"table"}}initialize(e){this.model=e,this.selectedInternal&&!this.view&&this.onselect(!1)}get itemURL(){return`background-service://${this.serviceName}`}get selectable(){return this.model?super.selectable:!1}onselect(e){return super.onselect(e),this.selectedInternal=!0,this.model&&(this.view||(this.view=new Yt(this.serviceName,this.model)),this.showView(this.view),nn.instance().setFlavor(Yt,this.view),fe.panelShown("background_service_"+this.serviceName)),!1}}class va extends ee{view;constructor(e){super(e,I("Service workers"),!1,"service-workers");const t=W("gears");this.setLeadingIcons([t])}get itemURL(){return"service-workers://"}onselect(e){return super.onselect(e),this.view||(this.view=new Zo),this.showView(this.view),fe.panelShown("service-workers"),!1}}class wa extends ee{view;constructor(e){super(e,U(O.manifest),!0,"manifest");const t=W("document");this.setLeadingIcons([t]),self.onInvokeElement(this.listItemElement,this.onInvoke.bind(this));const i=new ji(U(O.noManifestDetected)),r=new vi(U(O.appManifest));this.view=new zn(i,r,new $i(1e3)),Xe(this.listItemElement,U(O.onInvokeManifestAlert));const s=o=>{this.setExpandable(o)};this.view.addEventListener("ManifestDetected",o=>s(o.data))}get itemURL(){return"manifest://"}onselect(e){return super.onselect(e),this.showView(this.view),fe.panelShown("app-manifest"),!1}generateChildren(){const e=this.view.getStaticSections();for(const t of e){const i=t.getTitleElement(),r=t.title(),s=t.getFieldElement(),o=new ba(this.resourcesPanel,i,r,s,t.jslogContext||"");this.appendChild(o)}}onInvoke(){this.view.getManifestElement().scrollIntoView(),Ye(U(O.onInvokeAlert,{PH1:this.listItemElement.title}))}showManifestView(){this.showView(this.view)}}class ba extends ee{#t;#e;constructor(e,t,i,r,s){super(e,i,!1,s);const o=W("document");this.setLeadingIcons([o]),this.#t=t,this.#e=r,self.onInvokeElement(this.listItemElement,this.onInvoke.bind(this)),this.listItemElement.addEventListener("keydown",this.onInvokeElementKeydown.bind(this)),Xe(this.listItemElement,U(O.beforeInvokeAlert,{PH1:this.listItemElement.title}))}get itemURL(){return"manifest://"+this.title}onInvoke(){this.parent?.showManifestView(),this.#t.scrollIntoView(),Ye(U(O.onInvokeAlert,{PH1:this.listItemElement.title})),fe.manifestSectionSelected(this.listItemElement.title)}onInvokeElementKeydown(e){if(e.key!=="Tab"||e.shiftKey)return;const t=this.#e.querySelector(".mask-checkbox");let i=this.#e.querySelector('[tabindex="0"]');t&&t.shadowRoot?i=t.shadowRoot.querySelector("input")||null:i||(i=this.#e.querySelector("devtools-protocol-handlers-view")?.shadowRoot?.querySelector('[tabindex="0"]')||null),i&&(i?.focus(),e.consume(!0))}}class Sa extends ee{view;constructor(e){super(e,U(O.storage),!1,"storage");const t=W("database");this.setLeadingIcons([t])}get itemURL(){return"clear-storage://"}onselect(e){return super.onselect(e),this.view||(this.view=new qi),this.showView(this.view),fe.panelShown(hr[hr.storage]),!1}}class xs extends je{idbDatabaseTreeElements;storageBucket;constructor(e,t){super(e,U(O.indexeddb),"indexed-db");const i=W("database");this.setLeadingIcons([i]),this.idbDatabaseTreeElements=[],this.storageBucket=t,this.initialize()}initialize(){w.instance().addModelListener(Se,_e.DatabaseAdded,this.indexedDBAdded,this,{scoped:!0}),w.instance().addModelListener(Se,_e.DatabaseRemoved,this.indexedDBRemoved,this,{scoped:!0}),w.instance().addModelListener(Se,_e.DatabaseLoaded,this.indexedDBLoaded,this,{scoped:!0}),w.instance().addModelListener(Se,_e.IndexedDBContentUpdated,this.indexedDBContentUpdated,this,{scoped:!0}),this.idbDatabaseTreeElements=[];for(const e of w.instance().models(Se,{scoped:!0})){const t=e.databases();for(let i=0;i<t.length;++i)this.addIndexedDB(e,t[i])}}addIndexedDBForModel(e){for(const t of e.databases())this.addIndexedDB(e,t)}removeIndexedDBForModel(e){const t=this.idbDatabaseTreeElements.filter(i=>i.model===e);for(const i of t)this.removeIDBDatabaseTreeElement(i)}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(U(O.refreshIndexeddb),this.refreshIndexedDB.bind(this),{jslogContext:"refresh-indexeddb"}),t.show()}refreshIndexedDB(){for(const e of w.instance().models(Se,{scoped:!0}))e.refreshDatabaseNames()}databaseInTree(e){return this.storageBucket?e.inBucket(this.storageBucket):!0}indexedDBAdded({data:{databaseId:e,model:t}}){this.addIndexedDB(t,e)}addIndexedDB(e,t){if(!this.databaseInTree(t))return;const i=new ya(this.resourcesPanel,e,t);this.idbDatabaseTreeElements.push(i),this.appendChild(i),e.refreshDatabase(t)}indexedDBRemoved({data:{databaseId:e,model:t}}){const i=this.idbDatabaseTreeElement(t,e);i&&this.removeIDBDatabaseTreeElement(i)}removeIDBDatabaseTreeElement(e){e.clear(),this.removeChild(e),Rd(this.idbDatabaseTreeElements,e),this.setExpandable(this.childCount()>0)}indexedDBLoaded({data:{database:e,model:t,entriesUpdated:i}}){const r=this.idbDatabaseTreeElement(t,e.databaseId);r&&(r.update(e,i),this.indexedDBLoadedForTest())}indexedDBLoadedForTest(){}indexedDBContentUpdated({data:{databaseId:e,objectStoreName:t,model:i}}){const r=this.idbDatabaseTreeElement(i,e);r&&r.indexedDBContentUpdated(t)}idbDatabaseTreeElement(e,t){return this.idbDatabaseTreeElements.find(i=>i.databaseId.equals(t)&&i.model===e)||null}}class ya extends ee{model;databaseId;idbObjectStoreTreeElements;database;view;constructor(e,t,i){super(e,i.name,!1,"indexed-db-database"),this.model=t,this.databaseId=i,this.idbObjectStoreTreeElements=new Map;const r=W("database");this.setLeadingIcons([r]),this.model.addEventListener(_e.DatabaseNamesRefreshed,this.refreshIndexedDB,this)}get itemURL(){return"indexedDB://"+this.databaseId.storageBucket.storageKey+"/"+(this.databaseId.storageBucket.name??"")+"/"+this.databaseId.name}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(U(O.refreshIndexeddb),this.refreshIndexedDB.bind(this),{jslogContext:"refresh-indexeddb"}),t.show()}refreshIndexedDB(){this.model.refreshDatabase(this.databaseId)}indexedDBContentUpdated(e){const t=this.idbObjectStoreTreeElements.get(e);t&&t.markNeedsRefresh()}update(e,t){this.database=e;const i=new Set;for(const r of[...this.database.objectStores.keys()].sort()){const s=this.database.objectStores.get(r);if(!s)continue;i.add(s.name);let o=this.idbObjectStoreTreeElements.get(s.name);o||(o=new Ca(this.resourcesPanel,this.model,this.databaseId,s),this.idbObjectStoreTreeElements.set(s.name,o),this.appendChild(o)),o.update(s,t)}for(const r of this.idbObjectStoreTreeElements.keys())i.has(r)||this.objectStoreRemoved(r);this.view&&this.view.getComponent().update(e),this.updateTooltip()}updateTooltip(){const e=this.database?this.database.version:"-";Object.keys(this.idbObjectStoreTreeElements).length===0?this.tooltip=U(O.versionSEmpty,{PH1:e}):this.tooltip=U(O.versionS,{PH1:e})}get selectable(){return this.database?super.selectable:!1}onselect(e){return super.onselect(e),this.database&&(this.view||(this.view=xt(j,new bs(this.model,this.database),"indexeddb-data")),this.showView(this.view),fe.panelShown("indexed-db")),!1}objectStoreRemoved(e){const t=this.idbObjectStoreTreeElements.get(e);t&&(t.clear(),this.removeChild(t)),this.idbObjectStoreTreeElements.delete(e),this.updateTooltip()}clear(){for(const e of this.idbObjectStoreTreeElements.keys())this.objectStoreRemoved(e)}}class Ca extends ee{model;databaseId;idbIndexTreeElements;objectStore;view;constructor(e,t,i,r){super(e,r.name,!1,"indexed-db-object-store"),this.model=t,this.databaseId=i,this.idbIndexTreeElements=new Map,this.objectStore=r,this.view=null;const s=W("table");this.setLeadingIcons([s])}get itemURL(){return"indexedDB://"+this.databaseId.storageBucket.storageKey+"/"+(this.databaseId.storageBucket.name??"")+"/"+this.databaseId.name+"/"+this.objectStore.name}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}markNeedsRefresh(){this.view&&this.view.markNeedsRefresh();for(const e of this.idbIndexTreeElements.values())e.markNeedsRefresh()}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(U(O.clear),this.clearObjectStore.bind(this),{jslogContext:"clear"}),t.show()}refreshObjectStore(){this.view&&this.view.refreshData();for(const e of this.idbIndexTreeElements.values())e.refreshIndex()}async clearObjectStore(){await this.model.clearObjectStore(this.databaseId,this.objectStore.name),this.update(this.objectStore,!0)}update(e,t){this.objectStore=e;const i=new Set;for(const r of this.objectStore.indexes.values()){i.add(r.name);let s=this.idbIndexTreeElements.get(r.name);s||(s=new Da(this.resourcesPanel,this.model,this.databaseId,this.objectStore,r,this.refreshObjectStore.bind(this)),this.idbIndexTreeElements.set(r.name,s),this.appendChild(s)),s.update(this.objectStore,r,t)}for(const r of this.idbIndexTreeElements.keys())i.has(r)||this.indexRemoved(r);for(const[r,s]of this.idbIndexTreeElements.entries())i.has(r)||(this.removeChild(s),this.idbIndexTreeElements.delete(r));this.childCount()&&this.expand(),this.view&&t&&this.view.update(this.objectStore,null),this.updateTooltip()}updateTooltip(){const e=this.objectStore.keyPathString;let t=e!==null?U(O.keyPathS,{PH1:e}):"";this.objectStore.autoIncrement&&(t+=`
`+I("autoIncrement")),this.tooltip=t}onselect(e){return super.onselect(e),this.view||(this.view=new Ss(this.model,this.databaseId,this.objectStore,null,this.refreshObjectStore.bind(this))),this.showView(this.view),fe.panelShown("indexed-db"),!1}indexRemoved(e){const t=this.idbIndexTreeElements.get(e);t&&(t.clear(),this.removeChild(t)),this.idbIndexTreeElements.delete(e)}clear(){for(const e of this.idbIndexTreeElements.keys())this.indexRemoved(e);this.view&&this.view.clear()}}class Da extends ee{model;databaseId;objectStore;index;refreshObjectStore;view;constructor(e,t,i,r,s,o){super(e,s.name,!1,"indexed-db"),this.model=t,this.databaseId=i,this.objectStore=r,this.index=s,this.refreshObjectStore=o}get itemURL(){return"indexedDB://"+this.databaseId.storageBucket.storageKey+"/"+(this.databaseId.storageBucket.name??"")+"/"+this.databaseId.name+"/"+this.objectStore.name+"/"+this.index.name}markNeedsRefresh(){this.view&&this.view.markNeedsRefresh()}refreshIndex(){this.view&&this.view.refreshData()}update(e,t,i){this.objectStore=e,this.index=t,this.view&&i&&this.view.update(this.objectStore,this.index),this.updateTooltip()}updateTooltip(){const e=[],t=this.index.keyPathString;e.push(U(O.keyPathS,{PH1:t})),this.index.unique&&e.push(I("unique")),this.index.multiEntry&&e.push(I("multiEntry")),this.tooltip=e.join(`
`)}onselect(e){return super.onselect(e),this.view||(this.view=new Ss(this.model,this.databaseId,this.objectStore,this.index,this.refreshObjectStore)),this.showView(this.view),fe.panelShown("indexed-db"),!1}clear(){this.view&&this.view.clear()}}class ka extends ee{domStorage;constructor(e,t){super(e,t.storageKey?us(t.storageKey).origin:U(O.localFiles),!1,t.isLocalStorage?"local-storage-for-domain":"session-storage-for-domain"),this.domStorage=t;const i=W("table");this.setLeadingIcons([i])}get itemURL(){return"storage://"+this.domStorage.storageKey+"/"+(this.domStorage.isLocalStorage?"local":"session")}onselect(e){return super.onselect(e),fe.panelShown("dom-storage"),this.resourcesPanel.showDOMStorage(this.domStorage),!1}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(U(O.clear),()=>this.domStorage.clear(),{jslogContext:"clear"}),t.show()}}class Ea extends ee{extensionStorage;constructor(e,t){super(e,Kc(t.storageArea),!1,"extension-storage-for-domain"),this.extensionStorage=t;const i=W("table");this.setLeadingIcons([i])}get storageArea(){return this.extensionStorage.storageArea}get itemURL(){return"extension-storage://"+this.extensionStorage.extensionId+"/"+this.extensionStorage.storageArea}onselect(e){return super.onselect(e),this.resourcesPanel.showExtensionStorage(this.extensionStorage),fe.panelShown("extension-storage"),!1}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(U(O.clear),()=>this.extensionStorage.clear(),{jslogContext:"clear"}),t.show()}}class Aa extends ee{extensionId;constructor(e,t,i){super(e,i||t,!0,"extension-storage-for-domain"),this.extensionId=t;const r=W("table");this.setLeadingIcons([r])}get itemURL(){return"extension-storage://"+this.extensionId}}class Ta extends ee{target;cookieDomainInternal;constructor(e,t,i){super(e,i.securityOrigin()||U(O.localFiles),!1,"cookies-for-frame"),this.target=t.resourceTreeModel().target(),this.cookieDomainInternal=i.securityOrigin(),this.tooltip=U(O.cookiesUsedByFramesFromS,{PH1:this.cookieDomainInternal});const r=W("cookie");Md(i.domain())&&(r.name="warning-filled",r.classList.add("warn-icon"),this.tooltip=U(O.thirdPartyPhaseout,{PH1:this.cookieDomainInternal})),this.setLeadingIcons([r])}get itemURL(){return"cookies://"+this.cookieDomainInternal}cookieDomain(){return this.cookieDomainInternal}onattach(){super.onattach(),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}handleContextMenuEvent(e){const t=new Bt(e);t.defaultSection().appendItem(U(O.clear),()=>this.resourcesPanel.clearCookies(this.target,this.cookieDomainInternal),{jslogContext:"clear"}),t.show()}onselect(e){return super.onselect(e),this.resourcesPanel.showCookies(this.target,this.cookieDomainInternal),fe.panelShown(hr[hr.cookies]),!1}}class Fa extends j{emptyWidget;linkElement;constructor(){super(),this.element.classList.add("storage-view"),this.emptyWidget=new ji(""),this.linkElement=null,this.emptyWidget.show(this.element)}setText(e){this.emptyWidget.text=e}setLink(e){e&&!this.linkElement&&(this.linkElement=this.emptyWidget.appendLink(e)),!e&&this.linkElement&&this.linkElement.classList.add("hidden"),e&&this.linkElement&&(this.linkElement.setAttribute("href",e),this.linkElement.classList.remove("hidden"))}}class Ia{panel;treeElement;treeElementForFrameId;treeElementForTargetId;constructor(e,t){this.panel=e,this.treeElement=t,Xe(this.treeElement.listItemNode,"Resources Section"),this.treeElementForFrameId=new Map,this.treeElementForTargetId=new Map;const i=dr.instance();i.addEventListener("FrameAddedToTarget",r=>this.frameAdded(r.data.frame),this),i.addEventListener("FrameRemoved",r=>this.frameDetached(r.data.frameId),this),i.addEventListener("FrameNavigated",r=>this.frameNavigated(r.data.frame),this),i.addEventListener("ResourceAdded",r=>this.resourceAdded(r.data.resource),this),w.instance().addModelListener(Ji,"TargetCreated",this.windowOpened,this,{scoped:!0}),w.instance().addModelListener(Ji,"TargetInfoChanged",this.windowChanged,this,{scoped:!0}),w.instance().addModelListener(Ji,"TargetDestroyed",this.windowDestroyed,this,{scoped:!0}),w.instance().observeTargets(this,{scoped:!0})}initialize(){const e=dr.instance();for(const t of e.getAllFrames()){this.treeElementForFrameId.get(t.id)||this.addFrameAndParents(t);const i=t.resourceTreeModel().target().model(Ji);if(i)for(const r of i.targetInfos())this.windowOpened({data:r})}}targetAdded(e){(e.type()===nr.Worker||e.type()===nr.ServiceWorker)&&this.workerAdded(e),e.type()===nr.FRAME&&e===e.outermostTarget()&&this.initialize()}async workerAdded(e){const t=e.parentTarget();if(!t)return;const i=t.id(),r=this.treeElementForTargetId.get(i),s=e.id();ma(s);const{targetInfo:o}=await t.targetAgent().invoke_getTargetInfo({targetId:s});r&&o&&r.workerCreated(o)}targetRemoved(e){}addFrameAndParents(e){const t=e.parentFrame();t&&!this.treeElementForFrameId.get(t.id)&&this.addFrameAndParents(t),this.frameAdded(e)}expandFrame(e){if(!e)return!1;let t=this.treeElementForFrameId.get(e.id);return!t&&!this.expandFrame(e.parentFrame())||(t=this.treeElementForFrameId.get(e.id),!t)?!1:(t.expand(),!0)}async revealResource(e,t,i){if(!this.expandFrame(e.frame()))return;const r=Rs.forResource(e);r&&await r.revealResource(t,i)}revealAndSelectFrame(e){const t=this.treeElementForFrameId.get(e.id);t?.reveal(),t?.select()}frameAdded(e){if(!w.instance().isInScope(e.resourceTreeModel()))return;const t=e.parentFrame(),i=t?this.treeElementForFrameId.get(t.id):this.treeElement;if(!i)return;const r=this.treeElementForFrameId.get(e.id);r&&(this.treeElementForFrameId.delete(e.id),r.parent&&r.parent.removeChild(r));const s=new ft(this,e);this.treeElementForFrameId.set(e.id,s);const o=e.resourceTreeModel().target().id();this.treeElementForTargetId.get(o)||this.treeElementForTargetId.set(o,s),i.appendChild(s);for(const a of e.resources())this.resourceAdded(a)}frameDetached(e){const t=this.treeElementForFrameId.get(e);t&&(this.treeElementForFrameId.delete(e),t.parent&&t.parent.removeChild(t))}frameNavigated(e){if(!w.instance().isInScope(e.resourceTreeModel()))return;const t=this.treeElementForFrameId.get(e.id);t&&t.frameNavigated(e)}resourceAdded(e){const t=e.frame();if(!t||!w.instance().isInScope(t.resourceTreeModel()))return;const i=this.treeElementForFrameId.get(t.id);i&&i.appendResource(e)}windowOpened(e){const t=e.data;if(t.openerId&&t.type==="page"){const i=this.treeElementForFrameId.get(t.openerId);i&&(this.treeElementForTargetId.set(t.targetId,i),i.windowOpened(t))}}windowDestroyed(e){const t=e.data,i=this.treeElementForTargetId.get(t);i&&(i.windowDestroyed(t),this.treeElementForTargetId.delete(t))}windowChanged(e){const t=e.data;if(t.openerId&&t.type==="page"){const i=this.treeElementForFrameId.get(t.openerId);i&&i.windowChanged(t)}}reset(){this.treeElement.removeChildren(),this.treeElementForFrameId.clear(),this.treeElementForTargetId.clear()}}class ft extends ee{section;frame;frameId;categoryElements;treeElementForResource;treeElementForWindow;treeElementForWorker;view;constructor(e,t){super(e.panel,"",!1,"frame"),this.section=e,this.frame=t,this.frameId=t.id,this.categoryElements=new Map,this.treeElementForResource=new Map,this.treeElementForWindow=new Map,this.treeElementForWorker=new Map,this.frameNavigated(t),this.view=null}getIconTypeForFrame(e){return e.isOutermostFrame()?e.unreachableUrl()?"frame-crossed":"frame":e.unreachableUrl()?"iframe-crossed":"iframe"}async frameNavigated(e){const t=W(this.getIconTypeForFrame(e));if(e.unreachableUrl()&&t.classList.add("red-icon"),this.setLeadingIcons([t]),this.invalidateChildren(),this.frameId=e.id,this.title!==e.displayName()&&(this.title=e.displayName(),Xe(this.listItemElement,this.title),this.parent)){const i=this.parent;i.removeChild(this),i.appendChild(this)}if(this.categoryElements.clear(),this.treeElementForResource.clear(),this.treeElementForWorker.clear(),this.selected?(this.view=xt(fi,new Zr(this.frame)),this.showView(this.view)):this.view=null,e.isOutermostFrame()){const i=w.instance().targets();for(const r of i)if(r.type()===nr.ServiceWorker&&w.instance().isInScope(r)){const s=r.id();ma(s);const a=(await e.resourceTreeModel().target().targetAgent().invoke_getTargetInfo({targetId:s})).targetInfo;this.workerCreated(a)}}}get itemURL(){return this.frame.isOutermostFrame()?"frame://":"frame://"+encodeURI(this.frame.url)}onselect(e){return super.onselect(e),this.view||(this.view=xt(fi,new Zr(this.frame))),fe.panelShown("frame-details"),this.showView(this.view),this.listItemElement.classList.remove("hovered"),Ni.hideDOMNodeHighlight(),!1}set hovered(e){e?(this.listItemElement.classList.add("hovered"),this.frame.highlight()):(this.listItemElement.classList.remove("hovered"),Ni.hideDOMNodeHighlight())}appendResource(e){const t=e.statusCode();if(t>=301&&t<=303)return;const i=e.resourceType(),r=i.name();let s=i===kr.Document?this:this.categoryElements.get(r);s||(s=new je(this.section.panel,e.resourceType().category().title(),r,r==="Frames"),this.categoryElements.set(i.name(),s),this.appendChild(s,ft.presentationOrderCompare));const o=new Rs(this.section.panel,e);s.appendChild(o,ft.presentationOrderCompare),this.treeElementForResource.set(e.url,o)}windowOpened(e){const t="opened-windows";let i=this.categoryElements.get(t);if(i||(i=new je(this.section.panel,U(O.openedWindows),t),this.categoryElements.set(t,i),this.appendChild(i,ft.presentationOrderCompare)),!this.treeElementForWindow.get(e.targetId)){const r=new Yc(this.section.panel,e);i.appendChild(r),this.treeElementForWindow.set(e.targetId,r)}}workerCreated(e){const t=e.type==="service_worker"?"service-workers":"web-workers",i=e.type==="service_worker"?I("Service workers"):U(O.webWorkers);let r=this.categoryElements.get(t);if(r||(r=new je(this.section.panel,i,t),this.categoryElements.set(t,r),this.appendChild(r,ft.presentationOrderCompare)),!this.treeElementForWorker.get(e.targetId)){const s=new Jc(this.section.panel,e);r.appendChild(s),this.treeElementForWorker.set(e.targetId,s)}}windowChanged(e){const t=this.treeElementForWindow.get(e.targetId);t&&(t.title!==e.title&&(t.title=e.title),t.update(e))}windowDestroyed(e){const t=this.treeElementForWindow.get(e);t&&t.windowClosed()}appendChild(e,t=ft.presentationOrderCompare){super.appendChild(e,t)}static presentationOrderCompare(e,t){function i(o){return o instanceof je?2:o instanceof ft?1:3}const r=i(e),s=i(t);return r-s||e.titleAsText().localeCompare(t.titleAsText())}}const Ys=new WeakMap;class Rs extends ee{panel;resource;previewPromise;constructor(e,t){super(e,t.isGenerated?U(O.documentNotAvailable):t.displayName,!1,"frame-resource"),this.panel=e,this.resource=t,this.previewPromise=null,this.tooltip=t.url,Ys.set(this.resource,this);const i=W("document","navigator-file-tree-item");i.classList.add("navigator-"+t.resourceType().name()+"-tree-item"),this.setLeadingIcons([i])}static forResource(e){return Ys.get(e)}get itemURL(){return this.resource.url}preparePreview(){if(this.previewPromise)return this.previewPromise;const e=fs.createPreview(this.resource,this.resource.mimeType);return this.previewPromise=e.then(t=>t||new ji(this.resource.url)),this.previewPromise}onselect(e){return super.onselect(e),this.resource.isGenerated?this.panel.showCategoryView(U(O.theContentOfThisDocumentHasBeen),null):this.panel.scheduleShowView(this.preparePreview()),fe.panelShown("frame-resource"),!1}ondblclick(e){return ls.openInNewTab(this.resource.url),!1}onattach(){super.onattach(),this.listItemElement.draggable=!0,this.listItemElement.addEventListener("dragstart",this.ondragstart.bind(this),!1),this.listItemElement.addEventListener("contextmenu",this.handleContextMenuEvent.bind(this),!0)}ondragstart(e){return e.dataTransfer?(e.dataTransfer.setData("text/plain",this.resource.content||""),e.dataTransfer.effectAllowed="copy",!0):!1}handleContextMenuEvent(e){const t=new Bt(e);t.appendApplicableItems(this.resource),t.show()}async revealResource(e,t){this.revealAndSelect(!0);const i=await this.panel.scheduleShowView(this.preparePreview());!(i instanceof mn)||typeof e!="number"||i.revealPosition({lineNumber:e,columnNumber:t},!0)}}class Yc extends ee{targetInfo;isWindowClosed;view;constructor(e,t){super(e,t.title||U(O.windowWithoutTitle),!1,"window"),this.targetInfo=t,this.isWindowClosed=!1,this.view=null,this.updateIcon(t.canAccessOpener)}updateIcon(e){const i=W(e?"popup":"frame");this.setLeadingIcons([i])}update(e){e.canAccessOpener!==this.targetInfo.canAccessOpener&&this.updateIcon(e.canAccessOpener),this.targetInfo=e,this.view&&(this.view.setTargetInfo(e),this.view.update())}windowClosed(){this.listItemElement.classList.add("window-closed"),this.isWindowClosed=!0,this.view&&(this.view.setIsWindowClosed(!0),this.view.update())}onselect(e){return super.onselect(e),this.view?this.view.update():this.view=new mo(this.targetInfo,this.isWindowClosed),this.showView(this.view),fe.panelShown("frame-window"),!1}get itemURL(){return this.targetInfo.url}}class Jc extends ee{targetInfo;view;constructor(e,t){super(e,t.title||t.url||U(O.worker),!1,"worker"),this.targetInfo=t,this.view=null;const i=W("gears","navigator-file-tree-item");this.setLeadingIcons([i])}onselect(e){return super.onselect(e),this.view?this.view.update():this.view=new fo(this.targetInfo),this.showView(this.view),fe.panelShown("frame-worker"),!1}get itemURL(){return this.targetInfo.url}}const bh=Object.freeze(Object.defineProperty({__proto__:null,AppManifestTreeElement:wa,ApplicationPanelSidebar:fa,BackgroundServiceTreeElement:Gt,ClearStorageTreeElement:Sa,CookieTreeElement:Ta,DOMStorageTreeElement:ka,ExtensionStorageTreeElement:Ea,ExtensionStorageTreeParentElement:Aa,FrameResourceTreeElement:Rs,FrameTreeElement:ft,IDBDatabaseTreeElement:ya,IDBIndexTreeElement:Da,IDBObjectStoreTreeElement:Ca,IndexedDBTreeElement:xs,ManifestChildTreeElement:ba,ResourcesSection:Ia,ServiceWorkersTreeElement:va,StorageCategoryView:Fa},Symbol.toStringTag,{value:"Module"})),xa=new CSSStyleSheet;xa.replaceSync(`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.cookie-preview-widget {
  padding: 2px 6px;
}

.cookie-preview-widget-header {
  font-weight: bold;
  user-select: none;
  white-space: nowrap;
  margin-bottom: 4px;
  flex: 0 0 18px;
  display: flex;
  align-items: center;
}

.cookie-preview-widget-header-label {
  line-height: 18px;
  flex-shrink: 0;
}

.cookie-preview-widget-cookie-value {
  user-select: text;
  word-break: break-all;
  flex: 1;
  overflow: auto;
}

.cookie-preview-widget-toggle {
  margin-left: 12px;
  font-weight: normal;
  flex-shrink: 1;
}

/*# sourceURL=cookieItemsView.css */
`);const gt={showUrlDecoded:"Show URL-decoded",cookies:"Cookies",selectACookieToPreviewItsValue:"Select a cookie to preview its value",onlyShowCookiesWithAnIssue:"Only show cookies with an issue",onlyShowCookiesWhichHaveAn:"Only show cookies that have an associated issue",clearFilteredCookies:"Clear filtered cookies",clearAllCookies:"Clear all cookies",numberOfCookiesShownInTableS:"Number of cookies shown in table: {PH1}"},Xc=P("panels/application/CookieItemsView.ts",gt),Et=B.bind(void 0,Xc);class Qc extends j{cookie;showDecodedSetting;toggle;value;constructor(){super(),this.setMinimumSize(230,45),this.cookie=null,this.showDecodedSetting=qe.instance().createSetting("cookie-view-show-decoded",!1);const e=document.createElement("div");e.classList.add("cookie-preview-widget-header");const t=document.createElement("span");t.classList.add("cookie-preview-widget-header-label"),t.textContent="Cookie Value",e.appendChild(t),this.contentElement.appendChild(e);const i=cr.create(Et(gt.showUrlDecoded),this.showDecodedSetting.get(),void 0,"show-url-decoded");i.title=Et(gt.showUrlDecoded),i.classList.add("cookie-preview-widget-toggle"),i.checkboxElement.addEventListener("click",()=>this.showDecoded(!this.showDecodedSetting.get())),e.appendChild(i),this.toggle=i;const r=document.createElement("div");r.classList.add("cookie-preview-widget-cookie-value"),r.textContent="",r.addEventListener("dblclick",this.handleDblClickOnCookieValue.bind(this)),this.value=r,this.contentElement.classList.add("cookie-preview-widget"),this.contentElement.setAttribute("jslog",`${Ce("cookie-preview")}`),this.contentElement.appendChild(r)}showDecoded(e){this.cookie&&(this.showDecodedSetting.set(e),this.toggle.checkboxElement.checked=e,this.updatePreview())}updatePreview(){this.cookie?this.value.textContent=this.showDecodedSetting.get()?decodeURIComponent(this.cookie.value()):this.cookie.value():this.value.textContent=""}setCookie(e){this.cookie=e,this.updatePreview()}handleDblClickOnCookieValue(e){e.preventDefault();const t=document.createRange();t.selectNode(this.value);const i=window.getSelection();i&&(i.removeAllRanges(),i.addRange(t))}}class Ra extends Di{model;cookieDomain;totalSize;cookiesTable;splitWidget;previewPanel;previewWidget;emptyWidget;onlyIssuesFilterUI;allCookies;shownCookies;selectedCookie;constructor(e,t){super(Et(gt.cookies),"cookiesPanel"),this.element.classList.add("storage-view"),this.element.setAttribute("jslog",`${Z("cookies-data")}`),this.model=e,this.cookieDomain=t,this.totalSize=0,this.cookiesTable=new $d(!1,this.saveCookie.bind(this),this.refreshItems.bind(this),this.handleCookieSelected.bind(this),this.deleteCookie.bind(this)),this.cookiesTable.setMinimumSize(0,50),this.splitWidget=new Rt(!1,!0,"cookie-items-split-view-state"),this.splitWidget.show(this.element),this.previewPanel=new j,this.previewPanel.element.setAttribute("jslog",`${Z("preview").track({resize:!0})}`);const i=this.previewPanel.element.createChild("div","preview-panel-resizer");this.splitWidget.setMainWidget(this.cookiesTable),this.splitWidget.setSidebarWidget(this.previewPanel),this.splitWidget.installResizer(i),this.previewWidget=new Qc,this.emptyWidget=new ji(Et(gt.selectACookieToPreviewItsValue)),this.emptyWidget.show(this.previewPanel.contentElement),this.onlyIssuesFilterUI=new zr(Et(gt.onlyShowCookiesWithAnIssue),Et(gt.onlyShowCookiesWhichHaveAn),()=>{this.updateWithCookies(this.allCookies)},"only-show-cookies-with-issues"),this.appendToolbarItem(this.onlyIssuesFilterUI),this.allCookies=[],this.shownCookies=[],this.selectedCookie=null,this.setCookiesDomain(e,t)}setCookiesDomain(e,t){this.model.removeEventListener("CookieListUpdated",this.onCookieListUpdate,this),this.model=e,this.cookieDomain=t,this.refreshItems(),this.model.addEventListener("CookieListUpdated",this.onCookieListUpdate,this)}showPreview(e){e!==this.selectedCookie&&(this.selectedCookie=e,e?(this.emptyWidget.detach(),this.previewWidget.setCookie(e),this.previewWidget.show(this.previewPanel.contentElement)):(this.previewWidget.detach(),this.emptyWidget.show(this.previewPanel.contentElement)))}handleCookieSelected(){const e=this.cookiesTable.selectedCookie();this.setCanDeleteSelected(!!e),this.showPreview(e)}async saveCookie(e,t){return t&&e.key()!==t.key()&&await this.model.deleteCookie(t),this.model.saveCookie(e)}deleteCookie(e,t){this.model.deleteCookie(e).then(t)}updateWithCookies(e){this.allCookies=e,this.totalSize=e.reduce((r,s)=>r+s.size(),0);const t=xe.fromString(this.cookieDomain),i=t?t.host:"";this.cookiesTable.setCookieDomain(i),this.shownCookies=this.filter(e,r=>`${r.name()} ${r.value()} ${r.domain()}`),this.hasFilter()?(this.setDeleteAllTitle(Et(gt.clearFilteredCookies)),this.setDeleteAllGlyph("filter-clear")):(this.setDeleteAllTitle(Et(gt.clearAllCookies)),this.setDeleteAllGlyph("clear-list")),this.cookiesTable.setCookies(this.shownCookies,this.model.getCookieToBlockedReasonsMap()),Ye(Et(gt.numberOfCookiesShownInTableS,{PH1:this.shownCookies.length})),this.setCanFilter(!0),this.setCanDeleteAll(this.shownCookies.length>0),this.setCanDeleteSelected(!!this.cookiesTable.selectedCookie()),this.cookiesTable.selectedCookie()||this.showPreview(null)}filter(e,t){const i=r=>this.onlyIssuesFilterUI.checked()?r instanceof Pd?Od(r):!1:!0;return super.filter(e,t).filter(i)}deleteAllItems(){this.showPreview(null),this.model.deleteCookies(this.shownCookies)}deleteSelectedItem(){const e=this.cookiesTable.selectedCookie();e&&(this.showPreview(null),this.model.deleteCookie(e))}onCookieListUpdate(){this.model.getCookiesForDomain(this.cookieDomain).then(this.updateWithCookies.bind(this))}refreshItems(){this.model.getCookiesForDomain(this.cookieDomain,!0).then(this.updateWithCookies.bind(this))}wasShown(){super.wasShown(),this.registerCSSFiles([xa])}}const Sh=Object.freeze(Object.defineProperty({__proto__:null,CookieItemsView:Ra},Symbol.toStringTag,{value:"Module"})),zt={domStorage:"DOM Storage",key:"Key",value:"Value",domStorageItems:"DOM Storage Items",domStorageItemsCleared:"DOM Storage Items cleared",domStorageItemDeleted:"The storage item was deleted."},Zc=P("panels/application/DOMStorageItemsView.ts",zt),oi=B.bind(void 0,Zc);class Pa extends Di{domStorage;eventListeners;grid;constructor(e){super(oi(zt.domStorage),"domStoragePanel"),this.domStorage=e,e.storageKey&&this.setStorageKey(e.storageKey),this.element.classList.add("storage-view","table");const t=[{id:"key",title:oi(zt.key),sortable:!0,editable:!0,longText:!0,weight:50},{id:"value",title:oi(zt.value),sortable:!1,editable:!0,longText:!0,weight:50}];this.grid=new pn("dom-storage",this.element,t,{refreshItems:this.refreshItems.bind(this),edit:{removeItem:i=>this.domStorage?.removeItem(i),setItem:(i,r)=>this.domStorage?.setItem(i,r)},createPreview:this.createPreview.bind(this),setCanDeleteSelected:this.setCanDeleteSelected.bind(this)},{title:oi(zt.domStorageItems),itemDeleted:oi(zt.domStorageItemDeleted),itemsCleared:oi(zt.domStorageItemsCleared)}),this.grid.showPreview(null,null),this.eventListeners=[],this.setStorage(e)}get dataGridForTesting(){return this.grid.dataGridForTesting}createPreview(e,t){const r=`${this.domStorage.isLocalStorage?"localstorage":"sessionstorage"}://${e}`,s=gn.fromString(r,kr.XHR,t);return fs.createPreview(s,"text/plain")}setStorage(e){yr(this.eventListeners),this.domStorage=e;const t=e.isLocalStorage?"local-storage-data":"session-storage-data";this.element.setAttribute("jslog",`${Z().context(t)}`),e.storageKey&&this.setStorageKey(e.storageKey),this.eventListeners=[this.domStorage.addEventListener("DOMStorageItemsCleared",this.domStorageItemsCleared,this),this.domStorage.addEventListener("DOMStorageItemRemoved",this.domStorageItemRemoved,this),this.domStorage.addEventListener("DOMStorageItemAdded",this.domStorageItemAdded,this),this.domStorage.addEventListener("DOMStorageItemUpdated",this.domStorageItemUpdated,this)],this.refreshItems()}domStorageItemsCleared(){this.isShowing()&&this.grid.clearItems()}domStorageItemRemoved(e){this.isShowing()&&this.grid.removeItem(e.data.key)}domStorageItemAdded(e){this.isShowing()&&this.grid.addItem([e.data.key,e.data.value])}domStorageItemUpdated(e){this.isShowing()&&this.grid.updateItem(e.data.key,e.data.value)}deleteSelectedItem(){this.grid.deleteSelectedItem()}refreshItems(){const e=t=>`${t[0]} ${t[1]}`;this.domStorage.getItems().then(t=>t&&this.grid.showItems(this.filter(t,e)))}deleteAllItems(){this.domStorage.clear(),this.domStorageItemsCleared()}}const yh=Object.freeze(Object.defineProperty({__proto__:null,DOMStorageItemsView:Pa},Symbol.toStringTag,{value:"Module"}));var eu=Object.getOwnPropertyNames,Gi=(n,e)=>function(){return e||(0,n[eu(n)[0]])((e={exports:{}}).exports,e),e.exports},tu=Gi({"package/lib/unicode.js"(n,e){e.exports.Space_Separator=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,e.exports.ID_Start=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,e.exports.ID_Continue=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/}}),Ba=Gi({"package/lib/util.js"(n,e){var t=tu();e.exports={isSpaceSeparator(i){return typeof i=="string"&&t.Space_Separator.test(i)},isIdStartChar(i){return typeof i=="string"&&(i>="a"&&i<="z"||i>="A"&&i<="Z"||i==="$"||i==="_"||t.ID_Start.test(i))},isIdContinueChar(i){return typeof i=="string"&&(i>="a"&&i<="z"||i>="A"&&i<="Z"||i>="0"&&i<="9"||i==="$"||i==="_"||i==="‌"||i==="‍"||t.ID_Continue.test(i))},isDigit(i){return typeof i=="string"&&/[0-9]/.test(i)},isHexDigit(i){return typeof i=="string"&&/[0-9A-Fa-f]/.test(i)}}}}),iu=Gi({"package/lib/parse.js"(n,e){var t=Ba(),i,r,s,o,a,d,h,p,b;e.exports=function(z,Te){i=String(z),r="start",s=[],o=0,a=1,d=0,h=void 0,p=void 0,b=void 0;do h=L(),ki[r]();while(h.type!=="eof");return typeof Te=="function"?C({"":b},"",Te):b};function C(k,z,Te){const ke=k[z];if(ke!=null&&typeof ke=="object")if(Array.isArray(ke))for(let St=0;St<ke.length;St++){const y=String(St),N=C(ke,y,Te);N===void 0?delete ke[y]:Object.defineProperty(ke,y,{value:N,writable:!0,enumerable:!0,configurable:!0})}else for(const St in ke){const y=C(ke,St,Te);y===void 0?delete ke[St]:Object.defineProperty(ke,St,{value:y,writable:!0,enumerable:!0,configurable:!0})}return Te.call(k,z,ke)}var v,D,De,R,F;function L(){for(v="default",D="",De=!1,R=1;;){F=H();const k=Y[v]();if(k)return k}}function H(){if(i[o])return String.fromCodePoint(i.codePointAt(o))}function l(){const k=H();return k===`
`?(a++,d=0):k?d+=k.length:d++,k&&(o+=k.length),k}var Y={default(){switch(F){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":l();return;case"/":l(),v="comment";return;case void 0:return l(),x("eof")}if(t.isSpaceSeparator(F)){l();return}return Y[r]()},comment(){switch(F){case"*":l(),v="multiLineComment";return;case"/":l(),v="singleLineComment";return}throw J(l())},multiLineComment(){switch(F){case"*":l(),v="multiLineCommentAsterisk";return;case void 0:throw J(l())}l()},multiLineCommentAsterisk(){switch(F){case"*":l();return;case"/":l(),v="default";return;case void 0:throw J(l())}l(),v="multiLineComment"},singleLineComment(){switch(F){case`
`:case"\r":case"\u2028":case"\u2029":l(),v="default";return;case void 0:return l(),x("eof")}l()},value(){switch(F){case"{":case"[":return x("punctuator",l());case"n":return l(),V("ull"),x("null",null);case"t":return l(),V("rue"),x("boolean",!0);case"f":return l(),V("alse"),x("boolean",!1);case"-":case"+":l()==="-"&&(R=-1),v="sign";return;case".":D=l(),v="decimalPointLeading";return;case"0":D=l(),v="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":D=l(),v="decimalInteger";return;case"I":return l(),V("nfinity"),x("numeric",1/0);case"N":return l(),V("aN"),x("numeric",NaN);case'"':case"'":De=l()==='"',D="",v="string";return}throw J(l())},identifierNameStartEscape(){if(F!=="u")throw J(l());l();const k=Wt();switch(k){case"$":case"_":break;default:if(!t.isIdStartChar(k))throw Ei();break}D+=k,v="identifierName"},identifierName(){switch(F){case"$":case"_":case"‌":case"‍":D+=l();return;case"\\":l(),v="identifierNameEscape";return}if(t.isIdContinueChar(F)){D+=l();return}return x("identifier",D)},identifierNameEscape(){if(F!=="u")throw J(l());l();const k=Wt();switch(k){case"$":case"_":case"‌":case"‍":break;default:if(!t.isIdContinueChar(k))throw Ei();break}D+=k,v="identifierName"},sign(){switch(F){case".":D=l(),v="decimalPointLeading";return;case"0":D=l(),v="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":D=l(),v="decimalInteger";return;case"I":return l(),V("nfinity"),x("numeric",R*(1/0));case"N":return l(),V("aN"),x("numeric",NaN)}throw J(l())},zero(){switch(F){case".":D+=l(),v="decimalPoint";return;case"e":case"E":D+=l(),v="decimalExponent";return;case"x":case"X":D+=l(),v="hexadecimal";return}return x("numeric",R*0)},decimalInteger(){switch(F){case".":D+=l(),v="decimalPoint";return;case"e":case"E":D+=l(),v="decimalExponent";return}if(t.isDigit(F)){D+=l();return}return x("numeric",R*Number(D))},decimalPointLeading(){if(t.isDigit(F)){D+=l(),v="decimalFraction";return}throw J(l())},decimalPoint(){switch(F){case"e":case"E":D+=l(),v="decimalExponent";return}if(t.isDigit(F)){D+=l(),v="decimalFraction";return}return x("numeric",R*Number(D))},decimalFraction(){switch(F){case"e":case"E":D+=l(),v="decimalExponent";return}if(t.isDigit(F)){D+=l();return}return x("numeric",R*Number(D))},decimalExponent(){switch(F){case"+":case"-":D+=l(),v="decimalExponentSign";return}if(t.isDigit(F)){D+=l(),v="decimalExponentInteger";return}throw J(l())},decimalExponentSign(){if(t.isDigit(F)){D+=l(),v="decimalExponentInteger";return}throw J(l())},decimalExponentInteger(){if(t.isDigit(F)){D+=l();return}return x("numeric",R*Number(D))},hexadecimal(){if(t.isHexDigit(F)){D+=l(),v="hexadecimalInteger";return}throw J(l())},hexadecimalInteger(){if(t.isHexDigit(F)){D+=l();return}return x("numeric",R*Number(D))},string(){switch(F){case"\\":l(),D+=le();return;case'"':if(De)return l(),x("string",D);D+=l();return;case"'":if(!De)return l(),x("string",D);D+=l();return;case`
`:case"\r":throw J(l());case"\u2028":case"\u2029":Br(F);break;case void 0:throw J(l())}D+=l()},start(){switch(F){case"{":case"[":return x("punctuator",l())}v="value"},beforePropertyName(){switch(F){case"$":case"_":D=l(),v="identifierName";return;case"\\":l(),v="identifierNameStartEscape";return;case"}":return x("punctuator",l());case'"':case"'":De=l()==='"',v="string";return}if(t.isIdStartChar(F)){D+=l(),v="identifierName";return}throw J(l())},afterPropertyName(){if(F===":")return x("punctuator",l());throw J(l())},beforePropertyValue(){v="value"},afterPropertyValue(){switch(F){case",":case"}":return x("punctuator",l())}throw J(l())},beforeArrayValue(){if(F==="]")return x("punctuator",l());v="value"},afterArrayValue(){switch(F){case",":case"]":return x("punctuator",l())}throw J(l())},end(){throw J(l())}};function x(k,z){return{type:k,value:z,line:a,column:d}}function V(k){for(const z of k){if(H()!==z)throw J(l());l()}}function le(){switch(H()){case"b":return l(),"\b";case"f":return l(),"\f";case"n":return l(),`
`;case"r":return l(),"\r";case"t":return l(),"	";case"v":return l(),"\v";case"0":if(l(),t.isDigit(H()))throw J(l());return"\0";case"x":return l(),nt();case"u":return l(),Wt();case`
`:case"\u2028":case"\u2029":return l(),"";case"\r":return l(),H()===`
`&&l(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw J(l());case void 0:throw J(l())}return l()}function nt(){let k="",z=H();if(!t.isHexDigit(z)||(k+=l(),z=H(),!t.isHexDigit(z)))throw J(l());return k+=l(),String.fromCodePoint(parseInt(k,16))}function Wt(){let k="",z=4;for(;z-- >0;){const Te=H();if(!t.isHexDigit(Te))throw J(l());k+=l()}return String.fromCodePoint(parseInt(k,16))}var ki={start(){if(h.type==="eof")throw ot();Zt()},beforePropertyName(){switch(h.type){case"identifier":case"string":p=h.value,r="afterPropertyName";return;case"punctuator":Lt();return;case"eof":throw ot()}},afterPropertyName(){if(h.type==="eof")throw ot();r="beforePropertyValue"},beforePropertyValue(){if(h.type==="eof")throw ot();Zt()},beforeArrayValue(){if(h.type==="eof")throw ot();if(h.type==="punctuator"&&h.value==="]"){Lt();return}Zt()},afterPropertyValue(){if(h.type==="eof")throw ot();switch(h.value){case",":r="beforePropertyName";return;case"}":Lt()}},afterArrayValue(){if(h.type==="eof")throw ot();switch(h.value){case",":r="beforeArrayValue";return;case"]":Lt()}},end(){}};function Zt(){let k;switch(h.type){case"punctuator":switch(h.value){case"{":k={};break;case"[":k=[];break}break;case"null":case"boolean":case"numeric":case"string":k=h.value;break}if(b===void 0)b=k;else{const z=s[s.length-1];Array.isArray(z)?z.push(k):Object.defineProperty(z,p,{value:k,writable:!0,enumerable:!0,configurable:!0})}if(k!==null&&typeof k=="object")s.push(k),Array.isArray(k)?r="beforeArrayValue":r="beforePropertyName";else{const z=s[s.length-1];z==null?r="end":Array.isArray(z)?r="afterArrayValue":r="afterPropertyValue"}}function Lt(){s.pop();const k=s[s.length-1];k==null?r="end":Array.isArray(k)?r="afterArrayValue":r="afterPropertyValue"}function J(k){return Ai(k===void 0?`JSON5: invalid end of input at ${a}:${d}`:`JSON5: invalid character '${Re(k)}' at ${a}:${d}`)}function ot(){return Ai(`JSON5: invalid end of input at ${a}:${d}`)}function Ei(){return d-=5,Ai(`JSON5: invalid identifier character at ${a}:${d}`)}function Br(k){console.warn(`JSON5: '${Re(k)}' in strings is not valid ECMAScript; consider escaping`)}function Re(k){const z={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(z[k])return z[k];if(k<" "){const Te=k.charCodeAt(0).toString(16);return"\\x"+("00"+Te).substring(Te.length)}return k}function Ai(k){const z=new SyntaxError(k);return z.lineNumber=a,z.columnNumber=d,z}}}),ru=Gi({"package/lib/stringify.js"(n,e){var t=Ba();e.exports=function(r,s,o){const a=[];let d="",h,p,b="",C;if(s!=null&&typeof s=="object"&&!Array.isArray(s)&&(o=s.space,C=s.quote,s=s.replacer),typeof s=="function")p=s;else if(Array.isArray(s)){h=[];for(const L of s){let H;typeof L=="string"?H=L:(typeof L=="number"||L instanceof String||L instanceof Number)&&(H=String(L)),H!==void 0&&h.indexOf(H)<0&&h.push(H)}}return o instanceof Number?o=Number(o):o instanceof String&&(o=String(o)),typeof o=="number"?o>0&&(o=Math.min(10,Math.floor(o)),b="          ".substr(0,o)):typeof o=="string"&&(b=o.substr(0,10)),v("",{"":r});function v(L,H){let l=H[L];switch(l!=null&&(typeof l.toJSON5=="function"?l=l.toJSON5(L):typeof l.toJSON=="function"&&(l=l.toJSON(L))),p&&(l=p.call(H,L,l)),l instanceof Number?l=Number(l):l instanceof String?l=String(l):l instanceof Boolean&&(l=l.valueOf()),l){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof l=="string")return D(l);if(typeof l=="number")return String(l);if(typeof l=="object")return Array.isArray(l)?F(l):De(l)}function D(L){const H={"'":.1,'"':.2},l={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let Y="";for(let V=0;V<L.length;V++){const le=L[V];switch(le){case"'":case'"':H[le]++,Y+=le;continue;case"\0":if(t.isDigit(L[V+1])){Y+="\\x00";continue}}if(l[le]){Y+=l[le];continue}if(le<" "){let nt=le.charCodeAt(0).toString(16);Y+="\\x"+("00"+nt).substring(nt.length);continue}Y+=le}const x=C||Object.keys(H).reduce((V,le)=>H[V]<H[le]?V:le);return Y=Y.replace(new RegExp(x,"g"),l[x]),x+Y+x}function De(L){if(a.indexOf(L)>=0)throw TypeError("Converting circular structure to JSON5");a.push(L);let H=d;d=d+b;let l=h||Object.keys(L),Y=[];for(const V of l){const le=v(V,L);if(le!==void 0){let nt=R(V)+":";b!==""&&(nt+=" "),nt+=le,Y.push(nt)}}let x;if(Y.length===0)x="{}";else{let V;if(b==="")V=Y.join(","),x="{"+V+"}";else{let le=`,
`+d;V=Y.join(le),x=`{
`+d+V+`,
`+H+"}"}}return a.pop(),d=H,x}function R(L){if(L.length===0)return D(L);const H=String.fromCodePoint(L.codePointAt(0));if(!t.isIdStartChar(H))return D(L);for(let l=H.length;l<L.length;l++)if(!t.isIdContinueChar(String.fromCodePoint(L.codePointAt(l))))return D(L);return L}function F(L){if(a.indexOf(L)>=0)throw TypeError("Converting circular structure to JSON5");a.push(L);let H=d;d=d+b;let l=[];for(let x=0;x<L.length;x++){const V=v(String(x),L);l.push(V!==void 0?V:"null")}let Y;if(l.length===0)Y="[]";else if(b==="")Y="["+l.join(",")+"]";else{let x=`,
`+d,V=l.join(x);Y=`[
`+d+V+`,
`+H+"]"}return a.pop(),d=H,Y}}}}),su=Gi({"package/lib/index.js"(n,e){var t=iu(),i=ru(),r={parse:t,stringify:i};e.exports=r}});const La=su(),nu=La.parse;La.stringify;const Kt={extensionStorage:"Extension Storage",key:"Key",value:"Value",extensionStorageItems:"Extension Storage Items",extensionStorageItemsCleared:"Extension Storage Items cleared",extensionStorageItemDeleted:"The storage item was deleted."},ou=P("panels/application/ExtensionStorageItemsView.ts",Kt),ai=B.bind(void 0,ou);class Na extends Di{#t;#e;extensionStorageItemsDispatcher;constructor(e){super(ai(Kt.extensionStorage),"extensionStoragePanel"),this.#t=e,this.element.setAttribute("jslog",`${Z().context("extension-storage-data")}`),this.element.classList.add("storage-view","table"),this.extensionStorageItemsDispatcher=new Si,this.#e=this.#r(),this.refreshItems()}get#i(){return this.#t.storageArea!=="managed"}parseValue(e){try{return nu(e)}catch{return e}}#r(){const e=[{id:"key",title:ai(Kt.key),sortable:!0,editable:!0,longText:!0,weight:50},{id:"value",title:ai(Kt.value),sortable:!1,editable:!0,longText:!0,weight:50}],t=new pn("extension-storage",this.element,e,{refreshItems:this.refreshItems.bind(this),edit:this.#i?{removeItem:async i=>{await this.#t.removeItem(i),this.refreshItems()},setItem:async(i,r)=>{await this.#t.setItem(i,this.parseValue(r)),this.refreshItems(),this.extensionStorageItemsDispatcher.dispatchEventToListeners("ItemEdited")}}:void 0,createPreview:this.#s.bind(this),setCanDeleteSelected:i=>{this.#i&&this.setCanDeleteSelected(i)}},{title:ai(Kt.extensionStorageItems),itemDeleted:ai(Kt.extensionStorageItemDeleted),itemsCleared:ai(Kt.extensionStorageItemsCleared)});return t.showPreview(null,null),t}#s(e,t){const i="extension-storage://"+this.#t.extensionId+"/"+this.#t.storageArea+"/preview/"+e,r=gn.fromString(i,kr.XHR,t);return fs.createPreview(r,"text/plain")}setStorage(e){this.#t=e,this.#e.detach(),this.#e=this.#r(),this.refreshItems()}#n(){this.isShowing()&&this.#e.clearItems()}deleteSelectedItem(){this.#i&&this.#e.deleteSelectedItem()}refreshItems(){const e=t=>`${t[0]} ${t[1]}`;this.#t.getItems().then(t=>{const i=Object.entries(t).map(([r,s])=>[r,typeof s=="string"?s:JSON.stringify(s)]);t&&this.#e.showItems(this.filter(i,e)),this.extensionStorageItemsDispatcher.dispatchEventToListeners("ItemsRefreshed")})}deleteAllItems(){this.#i&&this.#t.clear().then(()=>{this.#n()},()=>{throw new Error("Unable to clear storage.")})}getEntriesForTesting(){return this.#e.dataGridForTesting.rootNode().children.filter(e=>e.data.key).map(e=>e.data)}get dataGridForTesting(){return this.#e.dataGridForTesting}}const Ch=Object.freeze(Object.defineProperty({__proto__:null,ExtensionStorageItemsView:Na},Symbol.toStringTag,{value:"Module"})),Ma=new CSSStyleSheet;Ma.replaceSync(`/*
 * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

.resources-toolbar {
  border-top: 1px solid var(--sys-color-divider);
  background-color: var(--sys-color-cdt-base-container);
}

.top-resources-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
  background-color: var(--sys-color-cdt-base-container);
}

.resources.panel .status {
  float: right;
  height: 16px;
  margin-top: 1px;
  margin-left: 4px;
  line-height: 1em;
}

.storage-view {
  display: flex;
  overflow: hidden;
}

.storage-view .data-grid:not(.inline) {
  border: none;
  flex: auto;
}

.storage-view .storage-table-error {
  color: var(--sys-color-error);
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.storage-view.query {
  padding: 2px 0;
  overflow-y: overlay;
  overflow-x: hidden;
}

.storage-view .filter-bar {
  border-top: none;
  border-bottom: 1px solid var(--sys-color-divider);
}

.database-query-group-messages {
  overflow-y: auto;
}

.database-query-prompt-container {
  position: relative;
  padding: 1px 22px 1px 24px;
  min-height: 16px;
}

.database-query-prompt {
  white-space: pre-wrap;
}

.prompt-icon {
  position: absolute;
  display: block;
  left: 7px;
  top: 9px;
  margin-top: -7px;
  user-select: none;
}

.database-user-query .prompt-icon {
  margin-top: -10px;
}

.database-query-prompt-container .prompt-icon {
  top: 6px;
}

.database-user-query {
  position: relative;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 1px 22px 1px 24px;
  min-height: 16px;
  flex-shrink: 0;
}

.database-user-query:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.database-query-text {
  color: var(--sys-color-primary-bright);
  user-select: text;
}

.database-query-result {
  position: relative;
  padding: 1px 22px;
  min-height: 16px;
  margin-left: -22px;
  padding-right: 0;
}

.database-query-result.error {
  color: var(--sys-color-token-property-special);
  user-select: text;
}

.database-query-result.error .prompt-icon {
  margin-top: -9px;
}

.resources-sidebar {
  padding: 0;
  overflow-x: auto;
  background-color: var(--sys-color-cdt-base-container);
}

/*# sourceURL=resourcesPanel.css */
`);let _r;class It extends Bd{resourcesLastSelectedItemSetting;visibleView;pendingViewPromise;categoryView;storageViews;storageViewToolbar;domStorageView;extensionStorageView;cookieView;emptyWidget;sidebar;constructor(){super("resources"),this.resourcesLastSelectedItemSetting=qe.instance().createSetting("resources-last-selected-element-path",[]),this.visibleView=null,this.pendingViewPromise=null,this.categoryView=null;const e=new j;e.setMinimumSize(100,0),this.storageViews=e.element.createChild("div","vbox flex-auto"),this.storageViewToolbar=new Ft("resources-toolbar",e.element),this.splitWidget().setMainWidget(e),this.domStorageView=null,this.extensionStorageView=null,this.cookieView=null,this.emptyWidget=null,this.sidebar=new fa(this),this.sidebar.show(this.panelSidebarElement())}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!_r||t)&&(_r=new It),_r}static shouldCloseOnReset(e){return[mn,Ud,Hd,Di].some(i=>e instanceof i)}static async showAndGetSidebar(){return await Oi.instance().showView("resources"),It.instance().sidebar}focus(){this.sidebar.focus()}lastSelectedItemPath(){return this.resourcesLastSelectedItemSetting.get()}setLastSelectedItemPath(e){this.resourcesLastSelectedItemSetting.set(e)}resetView(){this.visibleView&&It.shouldCloseOnReset(this.visibleView)&&this.showView(null)}showView(e){this.pendingViewPromise=null,this.visibleView!==e&&(this.visibleView&&this.visibleView.detach(),e&&e.show(this.storageViews),this.visibleView=e,this.storageViewToolbar.removeToolbarItems(),this.storageViewToolbar.element.classList.toggle("hidden",!0),e instanceof ps&&e.toolbarItems().then(t=>{t.map(i=>this.storageViewToolbar.appendToolbarItem(i)),this.storageViewToolbar.element.classList.toggle("hidden",!t.length)}))}async scheduleShowView(e){this.pendingViewPromise=e;const t=await e;return this.pendingViewPromise!==e?null:(this.showView(t),t)}showCategoryView(e,t){this.categoryView||(this.categoryView=new Fa),this.categoryView.element.setAttribute("jslog",`${Z().context(Cr(e))}`),this.categoryView.setText(e),this.categoryView.setLink(t),this.showView(this.categoryView)}showDOMStorage(e){e&&(this.domStorageView?this.domStorageView.setStorage(e):this.domStorageView=new Pa(e),this.showView(this.domStorageView))}showExtensionStorage(e){e&&(this.extensionStorageView?this.extensionStorageView.setStorage(e):this.extensionStorageView=new Na(e),this.showView(this.extensionStorageView))}showCookies(e,t){const i=e.model(Jr);i&&(this.cookieView?this.cookieView.setCookiesDomain(i,t):this.cookieView=new Ra(i,t),this.showView(this.cookieView))}clearCookies(e,t){const i=e.model(Jr);i&&i.clear(t).then(()=>{this.cookieView&&this.cookieView.refreshItems()})}wasShown(){super.wasShown(),this.registerCSSFiles([Ma])}}class au{async reveal(e){await(await It.showAndGetSidebar()).showResource(e)}}class du{async reveal(e){(await It.showAndGetSidebar()).showFrame(e)}}class lu{async reveal(e){(await It.showAndGetSidebar()).showPreloadingRuleSetView(e)}}class cu{async reveal(e){(await It.showAndGetSidebar()).showPreloadingAttemptViewWithFilter(e)}}const Dh=Object.freeze(Object.defineProperty({__proto__:null,AttemptViewWithFilterRevealer:cu,FrameDetailsRevealer:du,ResourceRevealer:au,ResourcesPanel:It,RuleSetViewRevealer:lu},Symbol.toStringTag,{value:"Module"}));export{Wu as AppManifestView,bh as ApplicationPanelSidebar,_u as BackgroundServiceModel,qu as BackgroundServiceView,Gu as BounceTrackingMitigationsTreeElement,Sh as CookieItemsView,yh as DOMStorageItemsView,zu as DOMStorageModel,Ch as ExtensionStorageItemsView,Ku as ExtensionStorageModel,Yu as IndexedDBModel,Ju as IndexedDBViews,Xu as InterestGroupStorageModel,Qu as InterestGroupStorageView,Zu as InterestGroupTreeElement,eh as OpenedWindowDetailsView,sh as PreloadingTreeElement,rh as PreloadingView,nh as ReportingApiReportsView,oh as ReportingApiView,Dh as ResourcesPanel,ah as ServiceWorkerCacheViews,dh as ServiceWorkerUpdateCycleView,lh as ServiceWorkersView,ch as SharedStorageEventsView,gh as SharedStorageItemsView,uh as SharedStorageListTreeElement,hh as SharedStorageModel,mh as SharedStorageTreeElement,fh as StorageBucketsTreeElement,ph as StorageItemsView,vh as StorageView,wh as TrustTokensTreeElement};
//# sourceMappingURL=application-CHwkfGwg.js.map
