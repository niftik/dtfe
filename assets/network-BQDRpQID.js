import{e as ui,hq as no,r as Li,fn as dr,mE as ao,o4 as lo,mz as jn,ay as qi,o5 as Ut,fW as Lt,cs as Ye,mG as Yi,b as Z,g as Q,aU as me,bA as Ne,eA as Le,aj as H,dG as Xr,bN as Wt,cF as co,b0 as ne,bp as ho,ev as Oe,bB as zn,bz as Jr,bU as uo,i as kt,cl as Ge,cr as _n,d4 as ae,o6 as Et,bJ as po,bq as qt,bQ as Fi,di as Zr,bh as rr,cR as Qr,bV as mo,cH as li,bi as tt,d0 as go,cV as es,fr as $t,o7 as Y,cW as ts,bS as z,l as M,bH as fo,bC as Ns,b1 as wo,cq as Kn,bO as Yn,eQ as Xn,eL as vo,bw as xr,bG as di,c4 as Ze,o8 as Jn,o9 as Zn,gf as Mr,A as ct,cA as yo,dy as Qn,at as ko,bx as lt,fg as Me,aJ as ci,aN as ii,a_ as bo,b4 as ea,aP as Ht,bn as Tr,bj as K,u as _e,bM as sr,oa as Xi,ob as et,cv as cr,b6 as So,d_ as hr,ax as It,n_ as ta,ex as Gt,a as is,bW as ur,be as rs,au as zi,b2 as Br,oc as Ms,hc as ia,bf as ra,i1 as sa,cc as Qe,aO as _t,dj as Ji,bR as Bs,ey as oa,ez as q,bP as Co,I as dt,cC as na,cD as jt,bD as Hi,od as aa,oe as la,of as Os,og as da,oh as ca,kl as ha,c3 as pr,jv as ua,c7 as qe,c6 as pa,oi as ma,cb as ga,c5 as Or,jq as Dr,kn as fa,fV as Ds,fO as wa,eX as va,i0 as Ur,e0 as ya,dV as ka,bK as ba,hP as Sa,cd as or,k0 as ni,f$ as Ca,cj as xa,ck as Ta,aq as xo,h as To,aR as Ft,aS as At,b7 as We,bc as je,bu as Us,jJ as Vs,bs as Ra,dM as Ia,oj as Ro,eD as Ea,eW as gt,ba as Aa,ok as La,ol as Zt,om as qa,on as Ws,dD as Fa,dE as Ha,hJ as Pa,C as Na,en as Vr,gR as Ma,aL as Io,dn as Ba,iQ as $s,oo as Oa,fM as Da,op as Ua,fp as Ci,k9 as Va,hK as Wa,hb as $a,oq as Ga,nH as ja,nM as za,V as ze,dJ as _a,iB as Ka,iG as Ya,bd as Xa,or as Ja,bo as Za,dB as Qa,db as el,hN as tl,ct as il,d2 as Qt,ds as Gs,gd as rl,os as sl,ot as ol,fo as nl,ou as al,n3 as ll,l$ as dl,nc as cl,gS as hl,l_ as ul}from"./inspector-CyOA7R9n.js";import{R as Ii,d as pl,J as Eo,c as ml}from"./PreviewFactory-7rWtg079.js";import{t as Ao}from"./mobile_throttling-CIMam4T2.js";import{U as gl}from"./UserAgentClientHintsForm-CYAYtRuO.js";import{F as fl}from"./FloatingButton-ChdjBnjy.js";import{n as nr,u as ri,h as Rr,j as Ir,k as wl}from"./timelineOverviewInfo.css-BT4HnMd6.js";import{P as Zi}from"./utils-C4_HKhgT.js";import{n as vl}from"./directives-BpSiwtWR.js";import{q as Lo,r as js,s as yl}from"./WatchExpressionsSidebarPane-ByQ6h9QR.js";import"./DataGridController-DdQqp2ti.js";import{L as kl}from"./linear_memory_inspector-Cc8YvoCp.js";import{D as bl,T as Sl}from"./DropTarget-DDkHhLsd.js";import{P as qo}from"./PopoverHelper-fEnxzApM.js";import{b as Cl,c as xl}from"./TimelineOverviewPane-DjPkTYph.js";import{M as Tl,S as Rl,f as Il}from"./ModelImpl-DjdwMiMr.js";function El(w,e){return w.filter(t=>{for(const i of t.requests())if(i.requestId===e.requestId())return!0;return!1})}function Al(w,e,t,i){return w.filter(o=>{for(const a of o.cookies())if(a.domain===e&&a.name===t&&a.path===i)return!0;return!1})}function mr(w,e){if(e instanceof dr)return El(w,e);if(e instanceof ao)return Al(w,e.domain(),e.name(),e.path());throw new Error(`issues can not be associated with ${JSON.stringify(e)}`)}function Ll(w){const e=Array.from(ui.instance().issues());return mr(e,w).length>0}function ql(w,e){const t=Array.from(ui.instance().issues());return mr(t,w).some(i=>i.getCategory()===e)}function Fl(w){const e=Array.from(ui.instance().issues());return mr(e,w).some(t=>no.getSubCategory(t.code())==="ThirdPartyPhaseoutCookie")}function Jc(w){return Array.from(ui.instance().issues()).filter(i=>Array.from(i.cookies()).some(o=>o.domain===w)).some(i=>no.getSubCategory(i.code())==="ThirdPartyPhaseoutCookie")}async function ss(w,e){if(typeof w=="string"){const o=ui.instance().getIssueById(w);if(o)return Li(o)}const t=Array.from(ui.instance().issues()),i=mr(t,w).filter(o=>!e||o.getCategory()===e);if(i.length>0)return Li(i[0])}class x{custom;constructor(e){if(!e||typeof e!="object")throw"First parameter is expected to be an object";this.custom=new Map}static safeDate(e){const t=new Date(e);if(!Number.isNaN(t.getTime()))return t;throw"Invalid date format"}static safeNumber(e){const t=Number(e);if(!Number.isNaN(t))return t;throw"Casting to number results in NaN"}static optionalNumber(e){return e!==void 0?x.safeNumber(e):void 0}static optionalString(e){return e!==void 0?String(e):void 0}customAsString(e){const t=this.custom.get(e);if(t)return String(t)}customAsNumber(e){const t=this.custom.get(e);if(!t)return;const i=Number(t);if(!Number.isNaN(i))return i}customAsArray(e){const t=this.custom.get(e);if(t)return Array.isArray(t)?t:void 0}customInitiator(){return this.custom.get("initiator")}}class Hl extends x{log;constructor(e){super(e),this.log=new Pl(e.log)}}class Pl extends x{version;creator;browser;pages;entries;comment;constructor(e){if(super(e),this.version=String(e.version),this.creator=new zs(e.creator),this.browser=e.browser?new zs(e.browser):void 0,this.pages=Array.isArray(e.pages)?e.pages.map(t=>new Nl(t)):[],!Array.isArray(e.entries))throw"log.entries is expected to be an array";this.entries=e.entries.map(t=>new Bl(t)),this.comment=x.optionalString(e.comment)}}class zs extends x{name;version;comment;constructor(e){super(e),this.name=String(e.name),this.version=String(e.version),this.comment=x.optionalString(e.comment)}}class Nl extends x{startedDateTime;id;title;pageTimings;comment;constructor(e){super(e),this.startedDateTime=x.safeDate(e.startedDateTime),this.id=String(e.id),this.title=String(e.title),this.pageTimings=new Ml(e.pageTimings),this.comment=x.optionalString(e.comment)}}class Ml extends x{onContentLoad;onLoad;comment;constructor(e){super(e),this.onContentLoad=x.optionalNumber(e.onContentLoad),this.onLoad=x.optionalNumber(e.onLoad),this.comment=x.optionalString(e.comment)}}class Bl extends x{pageref;startedDateTime;time;request;response;cache;timings;serverIPAddress;connection;comment;constructor(e){super(e),this.pageref=x.optionalString(e.pageref),this.startedDateTime=x.safeDate(e.startedDateTime),this.time=x.safeNumber(e.time),this.request=new Ol(e.request),this.response=new Dl(e.response),this.cache={},this.timings=new Gl(e.timings),this.serverIPAddress=x.optionalString(e.serverIPAddress),this.connection=x.optionalString(e.connection),this.comment=x.optionalString(e.comment),this.custom.set("connectionId",x.optionalString(e._connectionId)),this.custom.set("fromCache",x.optionalString(e._fromCache)),this.custom.set("initiator",this.importInitiator(e._initiator)),this.custom.set("priority",x.optionalString(e._priority)),this.custom.set("resourceType",x.optionalString(e._resourceType)),this.custom.set("webSocketMessages",this.importWebSocketMessages(e._webSocketMessages))}importInitiator(e){if(typeof e=="object")return new jl(e)}importWebSocketMessages(e){if(!Array.isArray(e))return;const t=[];for(const i of e){if(typeof i!="object")return;t.push(new _l(i))}return t}}class Ol extends x{method;url;httpVersion;cookies;headers;queryString;postData;headersSize;bodySize;comment;constructor(e){super(e),this.method=String(e.method),this.url=String(e.url),this.httpVersion=String(e.httpVersion),this.cookies=Array.isArray(e.cookies)?e.cookies.map(t=>new Fo(t)):[],this.headers=Array.isArray(e.headers)?e.headers.map(t=>new Ho(t)):[],this.queryString=Array.isArray(e.queryString)?e.queryString.map(t=>new Ul(t)):[],this.postData=e.postData?new Vl(e.postData):void 0,this.headersSize=x.safeNumber(e.headersSize),this.bodySize=x.safeNumber(e.bodySize),this.comment=x.optionalString(e.comment)}}class Dl extends x{status;statusText;httpVersion;cookies;headers;content;redirectURL;headersSize;bodySize;comment;constructor(e){super(e),this.status=x.safeNumber(e.status),this.statusText=String(e.statusText),this.httpVersion=String(e.httpVersion),this.cookies=Array.isArray(e.cookies)?e.cookies.map(t=>new Fo(t)):[],this.headers=Array.isArray(e.headers)?e.headers.map(t=>new Ho(t)):[],this.content=new $l(e.content),this.redirectURL=String(e.redirectURL),this.headersSize=x.safeNumber(e.headersSize),this.bodySize=x.safeNumber(e.bodySize),this.comment=x.optionalString(e.comment),this.custom.set("transferSize",x.optionalNumber(e._transferSize)),this.custom.set("error",x.optionalString(e._error)),this.custom.set("fetchedViaServiceWorker",!!e._fetchedViaServiceWorker),this.custom.set("responseCacheStorageCacheName",x.optionalString(e._responseCacheStorageCacheName)),this.custom.set("serviceWorkerResponseSource",x.optionalString(e._serviceWorkerResponseSource))}}class Fo extends x{name;value;path;domain;expires;httpOnly;secure;comment;constructor(e){super(e),this.name=String(e.name),this.value=String(e.value),this.path=x.optionalString(e.path),this.domain=x.optionalString(e.domain),this.expires=e.expires?x.safeDate(e.expires):void 0,this.httpOnly=e.httpOnly!==void 0?!!e.httpOnly:void 0,this.secure=e.secure!==void 0?!!e.secure:void 0,this.comment=x.optionalString(e.comment)}}class Ho extends x{name;value;comment;constructor(e){super(e),this.name=String(e.name),this.value=String(e.value),this.comment=x.optionalString(e.comment)}}class Ul extends x{name;value;comment;constructor(e){super(e),this.name=String(e.name),this.value=String(e.value),this.comment=x.optionalString(e.comment)}}class Vl extends x{mimeType;params;text;comment;constructor(e){super(e),this.mimeType=String(e.mimeType),this.params=Array.isArray(e.params)?e.params.map(t=>new Wl(t)):[],this.text=String(e.text),this.comment=x.optionalString(e.comment)}}class Wl extends x{name;value;fileName;contentType;comment;constructor(e){super(e),this.name=String(e.name),this.value=x.optionalString(e.value),this.fileName=x.optionalString(e.fileName),this.contentType=x.optionalString(e.contentType),this.comment=x.optionalString(e.comment)}}class $l extends x{size;compression;mimeType;text;encoding;comment;constructor(e){super(e),this.size=x.safeNumber(e.size),this.compression=x.optionalNumber(e.compression),this.mimeType=String(e.mimeType),this.text=x.optionalString(e.text),this.encoding=x.optionalString(e.encoding),this.comment=x.optionalString(e.comment)}}class Gl extends x{blocked;dns;connect;send;wait;receive;ssl;comment;constructor(e){super(e),this.blocked=x.optionalNumber(e.blocked),this.dns=x.optionalNumber(e.dns),this.connect=x.optionalNumber(e.connect),this.send=x.safeNumber(e.send),this.wait=x.safeNumber(e.wait),this.receive=x.safeNumber(e.receive),this.ssl=x.optionalNumber(e.ssl),this.comment=x.optionalString(e.comment),this.custom.set("blocked_queueing",x.optionalNumber(e._blocked_queueing)),this.custom.set("blocked_proxy",x.optionalNumber(e._blocked_proxy)),this.custom.set("workerStart",x.optionalNumber(e._workerStart)),this.custom.set("workerReady",x.optionalNumber(e._workerReady)),this.custom.set("workerFetchStart",x.optionalNumber(e._workerFetchStart)),this.custom.set("workerRespondWithSettled",x.optionalNumber(e._workerRespondWithSettled))}}class jl extends x{type;url;lineNumber;requestId;stack;constructor(e){super(e),this.type=x.optionalString(e.type)??"other",this.url=x.optionalString(e.url),this.lineNumber=x.optionalNumber(e.lineNumber),this.requestId=x.optionalString(e.requestId),e.stack&&(this.stack=new os(e.stack))}}class os extends x{description;callFrames;parent;parentId;constructor(e){super(e),this.callFrames=Array.isArray(e.callFrames)?e.callFrames.map(i=>i?new zl(i):null).filter(Boolean):[],e.parent&&(this.parent=new os(e.parent)),this.description=x.optionalString(e.description);const t=e.parentId;t&&(this.parentId={id:x.optionalString(t.id)??"",debuggerId:x.optionalString(t.debuggerId)})}}class zl extends x{functionName;scriptId;url="";lineNumber=-1;columnNumber=-1;constructor(e){super(e),this.functionName=x.optionalString(e.functionName)??"",this.scriptId=x.optionalString(e.scriptId)??"",this.url=x.optionalString(e.url)??"",this.lineNumber=x.optionalNumber(e.lineNumber)??-1,this.columnNumber=x.optionalNumber(e.columnNumber)??-1}}class _l extends x{time;opcode;data;type;constructor(e){super(e),this.time=x.optionalNumber(e.time),this.opcode=x.optionalNumber(e.opcode),this.data=x.optionalString(e.data),this.type=x.optionalString(e.type)}}class ai{static requestsFromHARLog(e){const t=new Map;for(const a of e.pages)t.set(a.id,a);e.entries.sort((a,l)=>a.startedDateTime.valueOf()-l.startedDateTime.valueOf());const i=new Map,o=[];for(const a of e.entries){const l=a.pageref;let c=l?i.get(l):void 0;const d=c?c.mainRequest.url():a.request.url;let g=null;const p=a.customInitiator();p&&(g={type:p.type,url:p.url,lineNumber:p.lineNumber,requestId:p.requestId,stack:p.stack});const m=dr.createWithoutBackendRequest("har-"+o.length,a.request.url,d,g),f=l?t.get(l):void 0;!c&&l&&f&&(c=ai.buildPageLoad(f,m),i.set(l,c)),ai.fillRequestFromHAREntry(m,a,c),c&&c.bindRequest(m),o.push(m)}return o}static buildPageLoad(e,t){const i=new lo(t);return i.startTime=e.startedDateTime.valueOf(),i.contentLoadTime=Number(e.pageTimings.onContentLoad)*1e3,i.loadTime=Number(e.pageTimings.onLoad)*1e3,i}static fillRequestFromHAREntry(e,t,i){t.request.postData?e.setRequestFormData(!0,t.request.postData.text):e.setRequestFormData(!1,null),e.connectionId=t.customAsString("connectionId")||"",e.requestMethod=t.request.method,e.setRequestHeaders(t.request.headers),t.response.content.mimeType&&t.response.content.mimeType!=="x-unknown"&&(e.mimeType=t.response.content.mimeType),e.responseHeaders=t.response.headers,e.statusCode=t.response.status,e.statusText=t.response.statusText;let o=t.response.httpVersion.toLowerCase();o==="http/2.0"&&(o="h2"),e.protocol=o.replace(/^http\/2\.0?\+quic/,"http/2+quic");const a=t.startedDateTime.getTime()/1e3;e.setIssueTime(a,a);const l=t.response.content.size>0?t.response.content.size:0,c=t.response.headersSize>0?t.response.headersSize:0,d=t.response.bodySize>0?t.response.bodySize:0;e.resourceSize=l||c+d;let g=t.response.customAsNumber("transferSize");g===void 0&&(g=t.response.headersSize+t.response.bodySize),e.setTransferSize(g>=0?g:0);const p=t.customAsString("fromCache");p==="memory"?e.setFromMemoryCache():p==="disk"&&e.setFromDiskCache();const m=t.response.content.text,f=t.response.content.encoding==="base64",{mimeType:k,charset:u}=jn(t.response.content.mimeType);e.setContentDataProvider(async()=>new qi(m??"",f,k??"",u??void 0)),ai.setupTiming(e,a,t.time,t.timings),e.setRemoteAddress(t.serverIPAddress||"",Number(t.connection)||80),e.setResourceType(ai.getResourceType(e,t,i));const C=t.customAsString("priority");C&&Protocol.Network.ResourcePriority.hasOwnProperty(C)&&e.setPriority(C);const I=t.customAsArray("webSocketMessages");if(I)for(const W of I){if(W.time===void 0||!Object.values(Ut).includes(W.type)||W.opcode===void 0||W.data===void 0)continue;const ge=W.type===Ut.Send;e.addFrame({time:W.time,text:W.data,opCode:W.opcode,mask:ge,type:W.type})}e.fetchedViaServiceWorker=!!t.response.custom.get("fetchedViaServiceWorker");const U=t.response.customAsString("serviceWorkerResponseSource");U&&new Set(["cache-storage","fallback-code","http-cache","network"]).has(U)&&e.setServiceWorkerResponseSource(U);const P=t.response.customAsString("responseCacheStorageCacheName");P&&e.setResponseCacheStorageCacheName(P),e.finished=!0}static getResourceType(e,t,i){const o=t.customAsString("resourceType");if(o){const c=Lt.fromName(o);if(c)return c}if(i&&i.mainRequest===e)return Ye.Document;const a=Lt.fromMimeType(t.response.content.mimeType);if(a!==Ye.Other)return a;const l=Lt.fromURL(t.request.url);return l||Ye.Other}static setupTiming(e,t,i,o){function a(m){return m===void 0||m<0?-1:(l+=m,l)}let l=o.blocked&&o.blocked>=0?o.blocked:0;const c=o.customAsNumber("blocked_proxy")||-1,d=o.customAsNumber("blocked_queueing")||-1;l>0&&d>0&&(l-=d);const g=o.ssl&&o.ssl>=0?o.ssl:0;o.connect&&o.connect>0&&(o.connect-=g);const p={proxyStart:c>0?l-c:-1,proxyEnd:c>0?l:-1,requestTime:t+(d>0?d:0)/1e3,dnsStart:o.dns&&o.dns>=0?l:-1,dnsEnd:a(o.dns),connectStart:o.connect&&o.connect>=0?l:-1,connectEnd:a(o.connect)+g,sslStart:o.ssl&&o.ssl>=0?l:-1,sslEnd:a(o.ssl),workerStart:o.customAsNumber("workerStart")||-1,workerReady:o.customAsNumber("workerReady")||-1,workerFetchStart:o.customAsNumber("workerFetchStart")||-1,workerRespondWithSettled:o.customAsNumber("workerRespondWithSettled")||-1,sendStart:o.send>=0?l:-1,sendEnd:a(o.send),pushStart:0,pushEnd:0,receiveHeadersStart:o.wait&&o.wait>=0?l:-1,receiveHeadersEnd:a(o.wait)};a(o.receive),e.timing=p,e.endTime=t+Math.max(i,l)/1e3}}class Vt{base64content;contentUrl;resourceType;arrayPromise;hexPromise;utf8Promise;constructor(e,t,i){this.base64content=e,this.contentUrl=t,this.resourceType=i,this.arrayPromise=null,this.hexPromise=null,this.utf8Promise=null}async fetchContentAsArray(){return this.arrayPromise||(this.arrayPromise=new Promise(async e=>{const t=await fetch("data:;base64,"+this.base64content);e(new Uint8Array(await t.arrayBuffer()))})),await this.arrayPromise}async hex(){return this.hexPromise||(this.hexPromise=new Promise(async e=>{const t=await this.fetchContentAsArray(),i=Vt.uint8ArrayToHexString(t);e(i)})),this.hexPromise}base64(){return this.base64content}async utf8(){return this.utf8Promise||(this.utf8Promise=new Promise(async e=>{const t=await this.fetchContentAsArray(),i=new TextDecoder("utf8").decode(t);e(i)})),this.utf8Promise}createBase64View(){return new Ii(Yi.fromString(this.contentUrl,this.resourceType,this.base64content),this.resourceType.canonicalMimeType(),{lineNumbers:!1,lineWrapping:!0})}createHexView(){const e=new Yi(this.contentUrl,this.resourceType,async()=>{const t=await this.fetchContentAsArray(),i=Vt.uint8ArrayToHexViewer(t);return new qi(i,!1,"text/plain")});return new Ii(e,this.resourceType.canonicalMimeType(),{lineNumbers:!1,lineWrapping:!1})}createUtf8View(){const e=()=>this.utf8().then(i=>new qi(i,!1,"text/plain")),t=new Yi(this.contentUrl,this.resourceType,e);return new Ii(t,this.resourceType.canonicalMimeType(),{lineNumbers:!0,lineWrapping:!0})}static uint8ArrayToHexString(e){let t="";for(let i=0;i<e.length;i++)t+=Vt.numberToHex(e[i],2);return t}static numberToHex(e,t){let i=e.toString(16);for(;i.length<t;)i="0"+i;return i}static uint8ArrayToHexViewer(e){let t="",i=0;for(;i*16<e.length;){const o=e.slice(i*16,(i+1)*16);t+=Vt.numberToHex(i,8)+":";let a=0;for(let l=0;l<o.length;l++)l%2===0&&(t+=" ",a++),t+=Vt.numberToHex(o[l],2),a+=2;for(;a<42;)t+=" ",a++;for(let l=0;l<o.length;l++){const c=o[l];c>=32&&c<=126?t+=String.fromCharCode(c):t+="."}t+=`
`,i++}return t}}const Po=new CSSStyleSheet;Po.replaceSync(`/*
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.panel.network .toolbar.binary-view-toolbar {
  border-top: 1px solid var(--sys-color-divider);
  border-bottom: 0;
  padding-left: 5px;
}

.binary-view-copied-text {
  opacity: 100%;
}

.binary-view-copied-text.fadeout {
  opacity: 0%;
  transition: opacity 1s;
}

/*# sourceURL=binaryResourceView.css */
`);const ot={copiedAsBase:"Copied as `Base64`",hexViewer:"`Hex` Viewer",copiedAsHex:"Copied as `Hex`",copiedAsUtf:"Copied as `UTF-8`",binaryViewType:"Binary view type",copyToClipboard:"Copy to clipboard",copyAsBase:"Copy as `Base64`",copyAsHex:"Copy as `Hex`",copyAsUtf:"Copy as `UTF-8`"},Kl=Z("panels/network/BinaryResourceView.ts",ot),ft=Q.bind(void 0,Kl);class No extends me{binaryResourceViewFactory;toolbar;binaryViewObjects;binaryViewTypeSetting;binaryViewTypeCombobox;copiedText;addFadeoutSettimeoutId;lastView;constructor(e,t,i){super(),this.binaryResourceViewFactory=new Vt(e,t,i),this.toolbar=new Ne("binary-view-toolbar",this.element),this.binaryViewObjects=[new Qi("base64",Le("Base64"),ft(ot.copiedAsBase),this.binaryResourceViewFactory.createBase64View.bind(this.binaryResourceViewFactory),()=>Promise.resolve(this.binaryResourceViewFactory.base64())),new Qi("hex",ft(ot.hexViewer),ft(ot.copiedAsHex),this.binaryResourceViewFactory.createHexView.bind(this.binaryResourceViewFactory),this.binaryResourceViewFactory.hex.bind(this.binaryResourceViewFactory)),new Qi("utf8",Le("UTF-8"),ft(ot.copiedAsUtf),this.binaryResourceViewFactory.createUtf8View.bind(this.binaryResourceViewFactory),this.binaryResourceViewFactory.utf8.bind(this.binaryResourceViewFactory))],this.binaryViewTypeSetting=H.instance().createSetting("binary-view-type","hex"),this.binaryViewTypeCombobox=new Xr(this.binaryViewTypeChanged.bind(this),ft(ot.binaryViewType));for(const a of this.binaryViewObjects)this.binaryViewTypeCombobox.addOption(this.binaryViewTypeCombobox.createOption(a.label,a.type));this.toolbar.appendToolbarItem(this.binaryViewTypeCombobox);const o=new Wt(ft(ot.copyToClipboard),"copy");o.addEventListener("Click",a=>{this.copySelectedViewToClipboard()},this),this.toolbar.appendToolbarItem(o),this.copiedText=new co,this.copiedText.element.classList.add("binary-view-copied-text"),this.toolbar.element.appendChild(this.copiedText.element),this.addFadeoutSettimeoutId=null,this.lastView=null,this.updateView()}getCurrentViewObject(){const e=i=>i.type===this.binaryViewTypeSetting.get(),t=this.binaryViewObjects.find(e);return console.assert(!!t,`No binary view found for binary view type found in setting 'binary-view-type': ${this.binaryViewTypeSetting.get()}`),t||null}async copySelectedViewToClipboard(){const e=this.getCurrentViewObject();if(!e)return;ne.copyText(await e.content()),this.copiedText.setText(e.copiedMessage),this.copiedText.element.classList.remove("fadeout");function t(){this.copiedText.element.classList.add("fadeout")}this.addFadeoutSettimeoutId&&(clearTimeout(this.addFadeoutSettimeoutId),this.addFadeoutSettimeoutId=null),this.addFadeoutSettimeoutId=window.setTimeout(t.bind(this),2e3)}wasShown(){this.updateView(),this.registerCSSFiles([Po])}updateView(){const e=this.getCurrentViewObject();if(!e)return;const t=e.getView();t!==this.lastView&&(this.lastView&&this.lastView.detach(),this.lastView=t,t.show(this.element,this.toolbar.element),this.binaryViewTypeCombobox.selectElement().value=this.binaryViewTypeSetting.get())}binaryViewTypeChanged(){const e=this.binaryViewTypeCombobox.selectedOption();if(!e)return;const t=e.value;this.binaryViewTypeSetting.get()!==t&&(this.binaryViewTypeSetting.set(t),this.updateView())}addCopyToContextMenu(e,t){const o=e.clipboardSection().appendSubMenuItem(t,!1,"copy").footerSection();o.appendItem(ft(ot.copyAsBase),async()=>{const a=this.binaryResourceViewFactory.base64();ne.copyText(a)},{jslogContext:"copy-as-base"}),o.appendItem(ft(ot.copyAsHex),async()=>{const a=await this.binaryResourceViewFactory.hex();ne.copyText(a)},{jslogContext:"copy-as-hex"}),o.appendItem(ft(ot.copyAsUtf),async()=>{const a=await this.binaryResourceViewFactory.utf8();ne.copyText(a)},{jslogContext:"copy-as-utf"})}}class Qi{type;label;copiedMessage;content;createViewFn;view;constructor(e,t,i,o,a){this.type=e,this.label=t,this.copiedMessage=i,this.content=a,this.createViewFn=o,this.view=null}getView(){return this.view||(this.view=this.createViewFn()),this.view}}const Yl=Object.freeze(Object.defineProperty({__proto__:null,BinaryResourceView:No,BinaryViewObject:Qi},Symbol.toStringTag,{value:"Module"})),Wr=new CSSStyleSheet;Wr.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.list {
  border: none !important; /* stylelint-disable-line declaration-no-important */
  border-top: 1px solid var(--sys-color-divider) !important; /* stylelint-disable-line declaration-no-important */
}

.blocking-disabled {
  opacity: 80%;
}

.editor-container {
  padding: 0 4px;
}

.no-blocked-urls,
.blocked-urls {
  overflow-x: hidden;
  overflow-y: auto;
}

.no-blocked-urls {
  display: flex;
  justify-content: center;
  padding: 10px;

  & devtools-button {
    display: flex;
    justify-content: center;
    margin-top: var(--sys-size-8);
  }
}

.no-blocked-urls > span {
  white-space: pre;
}

.blocked-url {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
}

.blocked-url-count {
  flex: none;
  padding-right: 9px;
}

.blocked-url-checkbox {
  margin-left: 8px;
  flex: none;
}

.blocked-url-checkbox:focus {
  outline: auto 5px -webkit-focus-ring-color;
}

.blocked-url-label {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: auto;
  padding: 0 3px;
}

.blocked-url-edit-row {
  flex: none;
  display: flex;
  flex-direction: row;
  margin: 7px 5px 0;
  align-items: center;
}

.blocked-url-edit-value {
  user-select: none;
  flex: 1 1 0;
}

.blocked-url-edit-row input {
  width: 100%;
  text-align: inherit;
  height: 22px;
}

/*# sourceURL=blockedURLsPane.css */
`);const nt={enableNetworkRequestBlocking:"Enable network request blocking",addPattern:"Add pattern",addNetworkRequestBlockingPattern:"Add network request blocking pattern",networkRequestsAreNotBlockedS:"Network requests are not blocked. {PH1}",dBlocked:"{PH1} blocked",textPatternToBlockMatching:"Text pattern to block matching requests; use * for wildcard",patternInputCannotBeEmpty:"Pattern input cannot be empty.",patternAlreadyExists:"Pattern already exists.",itemDeleted:"Item successfully deleted"},Mo=Z("panels/network/BlockedURLsPane.ts",nt),Ot=Q.bind(void 0,Mo);class Pi extends me{manager;toolbar;enabledCheckbox;list;editor;blockedCountForUrl;constructor(){super(!0),this.element.setAttribute("jslog",`${ho("network.blocked-urls").track({resize:!0})}`),this.manager=Oe.instance(),this.manager.addEventListener("BlockedPatternsChanged",this.update,this),this.toolbar=new Ne("",this.contentElement),this.enabledCheckbox=new zn(Ot(nt.enableNetworkRequestBlocking),void 0,this.toggleEnabled.bind(this),"network.enable-request-blocking"),this.toolbar.appendToolbarItem(this.enabledCheckbox),this.toolbar.appendSeparator(),this.toolbar.appendToolbarItem(Ne.createActionButtonForId("network.add-network-request-blocking-pattern")),this.toolbar.appendToolbarItem(Ne.createActionButtonForId("network.remove-all-network-request-blocking-patterns")),this.toolbar.element.setAttribute("jslog",`${Jr()}`),this.list=new uo(this),this.list.element.classList.add("blocked-urls"),this.list.setEmptyPlaceholder(this.createEmptyPlaceholder()),this.list.show(this.contentElement),this.editor=null,this.blockedCountForUrl=new Map,kt.instance().addModelListener(Ge,_n.RequestFinished,this.onRequestFinished,this,{scoped:!0}),this.update(),ae.instance().addEventListener(Et.Reset,this.onNetworkLogReset,this)}createEmptyPlaceholder(){const e=this.contentElement.createChild("div","no-blocked-urls"),t=po(Ot(nt.addPattern),this.addPattern.bind(this),{className:"add-button",jslogContext:"network.add-network-request-blocking-pattern",variant:"primary"});return qt(t,Ot(nt.addNetworkRequestBlockingPattern)),e.appendChild(Fi(Mo,nt.networkRequestsAreNotBlockedS,{PH1:t})),e}addPattern(){this.manager.setBlockingEnabled(!0),this.list.addNewItem(0,{url:Zr,enabled:!0})}removeAllPatterns(){this.manager.setBlockedPatterns([])}renderItem(e,t){const i=this.blockedRequestsCount(e.url),o=document.createElement("div");o.classList.add("blocked-url");const a=o.createChild("input","blocked-url-checkbox");return a.type="checkbox",a.checked=e.enabled,a.disabled=!t,a.setAttribute("jslog",`${rr().track({change:!0})}`),o.createChild("div","blocked-url-label").textContent=e.url,o.createChild("div","blocked-url-count").textContent=Ot(nt.dBlocked,{PH1:i}),t&&(o.addEventListener("click",l=>this.togglePattern(e,l)),a.addEventListener("click",l=>this.togglePattern(e,l))),o}togglePattern(e,t){t.consume(!0);const i=this.manager.blockedPatterns();i.splice(i.indexOf(e),1,{enabled:!e.enabled,url:e.url}),this.manager.setBlockedPatterns(i)}toggleEnabled(){this.manager.setBlockingEnabled(!this.manager.blockingEnabled()),this.update()}removeItemRequested(e,t){const i=this.manager.blockedPatterns();i.splice(t,1),this.manager.setBlockedPatterns(i),Qr(nt.itemDeleted)}beginEdit(e){return this.editor=this.createEditor(),this.editor.control("url").value=e.url,this.editor}commitEdit(e,t,i){const o=t.control("url").value,a=this.manager.blockedPatterns();i?a.push({enabled:!0,url:o}):a.splice(a.indexOf(e),1,{enabled:!0,url:o}),this.manager.setBlockedPatterns(a)}createEditor(){if(this.editor)return this.editor;const e=new mo,t=e.contentElement(),i=t.createChild("div","blocked-url-edit-row");i.createChild("div").textContent=Ot(nt.textPatternToBlockMatching);const o=t.createChild("div","blocked-url-edit-row"),a=(c,d,g)=>{let p=!0,m;return g.value?this.manager.blockedPatterns().find(f=>f.url===g.value)&&(m=Ot(nt.patternAlreadyExists),p=!1):(m=Ot(nt.patternInputCannotBeEmpty),p=!1),{valid:p,errorMessage:m}},l=e.createInput("url","text","",a);return o.createChild("div","blocked-url-edit-value").appendChild(l),e}update(){const e=this.manager.blockingEnabled();this.list.element.classList.toggle("blocking-disabled",!e&&!!this.manager.blockedPatterns().length),this.enabledCheckbox.setChecked(e),this.list.clear();for(const t of this.manager.blockedPatterns())this.list.appendItem(t,e)}blockedRequestsCount(e){if(!e)return 0;let t=0;for(const i of this.blockedCountForUrl.keys())this.matches(e,i)&&(t+=this.blockedCountForUrl.get(i));return t}matches(e,t){let i=0;const o=e.split("*");for(let a=0;a<o.length;a++){const l=o[a];if(l.length){if(i=t.indexOf(l,i),i===-1)return!1;i+=l.length}}return!0}onNetworkLogReset(e){this.blockedCountForUrl.clear(),this.update()}onRequestFinished(e){const t=e.data;if(t.wasBlocked()){const i=this.blockedCountForUrl.get(t.url())||0;this.blockedCountForUrl.set(t.url(),i+1),this.update()}}wasShown(){li.instance().setFlavor(Pi,this),super.wasShown(),this.list.registerCSSFiles([Wr]),this.registerCSSFiles([Wr])}willHide(){super.willHide(),li.instance().setFlavor(Pi,null)}}let Xl=class{handleAction(e,t){const i=e.flavor(Pi);if(i===null)return!1;switch(t){case"network.add-network-request-blocking-pattern":return i.addPattern(),!0;case"network.remove-all-network-request-blocking-patterns":return i.removeAllPatterns(),!0}return!1}};const Jl=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:Xl,BlockedURLsPane:Pi},Symbol.toStringTag,{value:"Module"})),Bo=new CSSStyleSheet;Bo.replaceSync(`/*
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.event-source-messages-view .data-grid {
  flex: auto;
  border: none;
}

/*# sourceURL=eventSourceMessagesView.css */
`);const wt={id:"Id",type:"Type",data:"Data",time:"Time",eventSource:"Event Source",copyMessage:"Copy message",clearAll:"Clear all",filterByRegex:"Filter using regex (example: https?)"},Zl=Z("panels/network/EventSourceMessagesView.ts",wt),Tt=Q.bind(void 0,Zl);class Oo extends me{request;dataGrid;mainToolbar;clearAllButton;filterTextInput;filterRegex;messageFilterSetting=H.instance().createSetting("network-event-source-message-filter","");constructor(e){super(),this.element.classList.add("event-source-messages-view"),this.element.setAttribute("jslog",`${tt("event-stream").track({resize:!0})}`),this.request=e,this.mainToolbar=new Ne(""),this.clearAllButton=new Wt(Tt(wt.clearAll),"clear"),this.clearAllButton.addEventListener("Click",this.clearMessages,this),this.mainToolbar.appendToolbarItem(this.clearAllButton);const t=Tt(wt.filterByRegex);this.filterTextInput=new go(t,.4),this.filterTextInput.addEventListener("TextChanged",this.updateFilterSetting,this);const i=this.messageFilterSetting.get();this.filterRegex=null,this.setFilter(i),i&&this.filterTextInput.setValue(i),this.mainToolbar.appendToolbarItem(this.filterTextInput),this.element.appendChild(this.mainToolbar.element);const o=[{id:"id",title:Tt(wt.id),sortable:!0,weight:8},{id:"type",title:Tt(wt.type),sortable:!0,weight:8},{id:"data",title:Tt(wt.data),sortable:!1,weight:88},{id:"time",title:Tt(wt.time),sortable:!0,weight:8}];this.dataGrid=new es({displayName:Tt(wt.eventSource),columns:o,editCallback:void 0,deleteCallback:void 0,refreshCallback:void 0}),this.dataGrid.setStriped(!0),this.dataGrid.setStickToBottom(!0),this.dataGrid.setRowContextMenuCallback(this.onRowContextMenu.bind(this)),this.dataGrid.markColumnAsSortedBy("time",$t.Ascending),this.sortItems(),this.dataGrid.addEventListener("SortingChanged",this.sortItems,this),this.dataGrid.setName("event-source-messages-view"),this.dataGrid.asWidget().show(this.element)}wasShown(){this.refresh(),this.registerCSSFiles([Bo]),this.request.addEventListener(Y.EVENT_SOURCE_MESSAGE_ADDED,this.messageAdded,this)}willHide(){this.request.removeEventListener(Y.EVENT_SOURCE_MESSAGE_ADDED,this.messageAdded,this)}messageAdded(e){const t=e.data;this.messageFilter(t)&&this.dataGrid.insertChild(new $r(t))}messageFilter(e){return!this.filterRegex||this.filterRegex.test(e.eventName)||this.filterRegex.test(e.eventId)||this.filterRegex.test(e.data)}clearMessages(){_s.set(this.request,this.request.eventSourceMessages().length),this.refresh()}updateFilterSetting(){const e=this.filterTextInput.value();this.messageFilterSetting.set(e),this.setFilter(e),this.refresh()}setFilter(e){if(this.filterRegex=null,e)try{this.filterRegex=new RegExp(e,"i")}catch{this.filterRegex=new RegExp("(?!)","i")}}sortItems(){const e=this.dataGrid.sortColumnId();if(!e)return;const t=Do[e];t&&this.dataGrid.sortNodes(t,!this.dataGrid.isSortOrderAscending())}onRowContextMenu(e,t){e.clipboardSection().appendItem(Tt(wt.copyMessage),ne.copyText.bind(ne,t.data.data),{jslogContext:"copy"})}refresh(){this.dataGrid.rootNode().removeChildren();let e=this.request.eventSourceMessages();const t=_s.get(this.request)||0;e=e.slice(t),e=e.filter(this.messageFilter.bind(this)),e.forEach(i=>this.dataGrid.insertChild(new $r(i)))}}class $r extends ts{message;constructor(e){const t=new Date(e.time*1e3),i=("0"+t.getHours()).substr(-2)+":"+("0"+t.getMinutes()).substr(-2)+":"+("0"+t.getSeconds()).substr(-2)+"."+("00"+t.getMilliseconds()).substr(-3),o=document.createElement("div");z(o,i),M.install(o,t.toLocaleString()),super({id:e.eventId,type:e.eventName,data:e.data,time:o}),this.message=e}}function Er(w,e,t){const i=w(e.message),o=w(t.message);return i<o?-1:i>o?1:0}const Do={id:Er.bind(null,w=>w.eventId),type:Er.bind(null,w=>w.eventName),time:Er.bind(null,w=>w.time)},_s=new WeakMap,Ql=Object.freeze(Object.defineProperty({__proto__:null,Comparators:Do,EventSourceMessageNode:$r,EventSourceMessagesView:Oo},Symbol.toStringTag,{value:"Module"})),Uo=new CSSStyleSheet;Uo.replaceSync(`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.network-config {
  padding: 12px;
  display: block;
}

.network-config-group {
  display: flex;
  padding-bottom: 10px;
  flex-wrap: wrap;
  flex: 0 0 auto;
  min-height: 30px;
}

.network-config-title {
  margin-right: 16px;
  width: 130px;
}

.network-config-fields {
  flex: 2 0 200px;
}

.network-config-fields span:first-of-type,
.network-config-fields .network-config-accepted-encoding-custom {
  padding: 3px 0;
}

.panel-section-separator {
  height: 1px;
  margin-bottom: 10px;
  background: var(--sys-color-divider);
}
/* Disable cache */

.network-config-disable-cache {
  line-height: 28px;
  border-top: none;
  padding-top: 0;
}

.network-config-input-validation-error {
  color: var(--sys-color-error);
  margin: 5px 0;
}

.network-config-input-validation-error:empty {
  display: none;
}
/* Network throttling */

.network-config-throttling .chrome-select {
  width: 100%;
  max-width: 250px;
}

.network-config-throttling > .network-config-title {
  line-height: 24px;
}
/* User agent */

.network-config-ua > .network-config-title {
  line-height: 20px;
}

.network-config-ua span[is="dt-radio"].checked > * {
  display: none;
}

.network-config-ua input {
  display: block;
  width: calc(100% - 20px);
}

.network-config-ua input[type="text"],
.network-config-ua .chrome-select {
  margin-top: 8px;
}

.network-config-ua .chrome-select {
  width: calc(100% - 20px);
  max-width: 250px;

  &:disabled {
    opacity: unset;
  }
}

.network-config-ua span[is="dt-radio"] {
  display: block;
}

.network-config-ua-custom {
  padding-bottom: 8px;
  opacity: 38%;
  pointer-events: none;

  &.checked {
    opacity: revert;
    pointer-events: revert;
  }
}

devtools-user-agent-client-hints-form {
  display: block;
  margin-top: 14px;
  width: min(100%, 400px);
}

.status-text {
  padding: 10px;
  color: var(--sys-color-tertiary);
}

/*# sourceURL=networkConfigView.css */
`);const He={custom:"Custom...",enterACustomUserAgent:"Enter a custom user agent",customUserAgentFieldIsRequired:"Custom user agent field is required",caching:"Caching",disableCache:"Disable cache",networkThrottling:"Network throttling",userAgent:"User agent",selectAutomatically:"Use browser default",acceptedEncoding:"Accepted `Content-Encoding`s",clientHintsStatusText:"User agent updated.",networkConditionsPanelShown:"Network conditions shown"},ed=Z("panels/network/NetworkConfigView.ts",He),Be=Q.bind(void 0,ed);let Ar;class ar extends me{constructor(){super(!0),this.element.setAttribute("jslog",`${ho("network-conditions").track({resize:!0})}`),this.contentElement.classList.add("network-config"),this.createCacheSection(),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.createNetworkThrottlingSection(),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.createUserAgentSection(),this.contentElement.createChild("div").classList.add("panel-section-separator"),this.createAcceptedEncodingSection()}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!Ar||t)&&(Ar=new ar),Ar}static createUserAgentSelectAndInput(e){const t=H.instance().createSetting("custom-user-agent",""),i=H.instance().createSetting("custom-user-agent-metadata",null),o=document.createElement("select");o.setAttribute("jslog",`${fo().track({change:!0}).context(t.name)}`),qt(o,e);const a={title:Be(He.custom),value:"custom"};o.appendChild(Ns(a.title,a.value,"custom"));for(const m of ns){const f=o.createChild("optgroup");f.label=m.title;for(const k of m.values){const u=Oe.patchUserAgentWithChromeVersion(k.value);f.appendChild(Ns(k.title,u,wo(k.title)))}}o.selectedIndex=0;const l=Kn("","text");l.setAttribute("jslog",`${Yn().track({change:!0}).context(t.name)}`),l.value=t.get(),M.install(l,t.get()),l.placeholder=Be(He.enterACustomUserAgent),l.required=!0,qt(l,l.placeholder);const c=document.createElement("div");c.classList.add("network-config-input-validation-error"),Xn(c),l.value||(c.textContent=Be(He.customUserAgentFieldIsRequired)),g(),o.addEventListener("change",d,!1),l.addEventListener("input",p,!1);function d(){const m=o.options[o.selectedIndex].value;if(m!==a.value){t.set(m),l.value=m,M.install(l,m);const k=yi(m);i.set(k),Oe.instance().setCustomUserAgentOverride(m,k)}else i.set(null),l.select();c.textContent="";const f=new CustomEvent("user-agent-change",{detail:{value:m}});o.dispatchEvent(f)}function g(){const m=t.get(),f=o.options;let k=!1;for(let u=0;u<f.length;++u)if(f[u].value===m){o.selectedIndex=u,k=!0;break}k||(o.selectedIndex=0)}function p(){t.get()!==l.value&&(l.value?c.textContent="":c.textContent=Be(He.customUserAgentFieldIsRequired),t.set(l.value),M.install(l,l.value),g())}return{select:o,input:l,error:c}}createSection(e,t){const i=this.contentElement.createChild("section","network-config-group");return t&&i.classList.add(t),i.createChild("div","network-config-title").textContent=e,i.createChild("div","network-config-fields")}createCacheSection(){this.createSection(Be(He.caching),"network-config-disable-cache").appendChild(vo(Be(He.disableCache),H.instance().moduleSetting("cache-disabled")))}createNetworkThrottlingSection(){const e=Be(He.networkThrottling),i=this.createSection(e,"network-config-throttling").createChild("select","chrome-select");Ao().decorateSelectWithNetworkThrottling(i),qt(i,e)}createUserAgentSection(){const e=H.instance().createSetting("custom-user-agent-metadata",null),t=H.instance().createSetting("custom-user-agent",""),i=Be(He.userAgent),o=this.createSection(i,"network-config-ua"),a=xr.create(Be(He.selectAutomatically),!0,void 0,t.name);o.appendChild(a);const l=a.checkboxElement;t.addChangeListener(()=>{if(l.checked)return;const u=t.get(),C=yi(u);Oe.instance().setCustomUserAgentOverride(u,C)});const c=o.createChild("div","network-config-ua-custom");l.addEventListener("change",k);const d=ar.createUserAgentSelectAndInput(i);d.select.classList.add("chrome-select"),c.appendChild(d.select),c.appendChild(d.input),c.appendChild(d.error);const g=new gl,p=e.get(),m=yi(d.select.value);g.value={showMobileCheckbox:!0,showSubmitButton:!0,metaData:p||m||void 0},c.appendChild(g),d.select.addEventListener("user-agent-change",u=>{const C=u.detail.value,I=C?yi(C):null;g.value={metaData:I||void 0,showMobileCheckbox:!0,showSubmitButton:!0},f.textContent=""}),g.addEventListener("clienthintschange",()=>{d.select.value="custom",f.textContent=""}),g.addEventListener("clienthintssubmit",u=>{const C=u.detail.value,I=t.get();e.set(C),Oe.instance().setCustomUserAgentOverride(I,C),f.textContent=Be(He.clientHintsStatusText)});const f=o.createChild("span","status-text");f.textContent="",k();function k(){const u=!l.checked;c.classList.toggle("checked",u),d.select.disabled=!u,d.input.disabled=!u,d.error.hidden=!u,g.disabled=!u;const C=u?t.get():"",I=u?yi(C):null;Oe.instance().setCustomUserAgentOverride(C,I)}}createAcceptedEncodingSection(){const e=H.instance().createSetting("use-custom-accepted-encodings",!1),t=H.instance().createSetting("custom-accepted-encodings","gzip,br,deflate"),i=Be(He.acceptedEncoding),o=this.createSection(i,"network-config-accepted-encoding"),a=xr.create(Be(He.selectAutomatically),!0,void 0,e.name);o.appendChild(a);const l=a.checkboxElement;function c(){e.get()?Oe.instance().setCustomAcceptedEncodingsOverride(t.get()===""?[]:t.get().split(",")):Oe.instance().clearCustomAcceptedEncodingsOverride()}t.addChangeListener(c),e.addChangeListener(c);const d=o.createChild("div","network-config-accepted-encoding-custom");d.setAttribute("jslog",`${di().context(t.name)}`),l.checked=!e.get(),l.addEventListener("change",m);const g=new Map,p={Deflate:"deflate",Gzip:"gzip",Br:"br",Zstd:"zstd"};for(const f of Object.values(p)){const k=xr.create(f,!0,void 0,f);d.appendChild(k),g.set(f,k.checkboxElement)}for(const[f,k]of g)k.checked=t.get().includes(f),k.addEventListener("change",m);m();function m(){e.set(!l.checked);const f=[];for(const[k,u]of g)u.disabled=l.checked,u.checked&&f.push(k);t.set(f.join(","))}}wasShown(){super.wasShown(),this.registerCSSFiles([Uo]),Qr(Be(He.networkConditionsPanelShown))}}function yi(w){for(const e of ns)for(const t of e.values)if(w===Oe.patchUserAgentWithChromeVersion(t.value))return t.metadata?(Oe.patchUserAgentMetadataWithChromeVersion(t.metadata),t.metadata):null;return null}const ns=[{title:"Android",values:[{title:"Android (4.0.2) Browser — Galaxy Nexus",value:"Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"Android",platformVersion:"4.0.2",architecture:"",model:"Galaxy Nexus",mobile:!0}},{title:"Android (2.3) Browser — Nexus S",value:"Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"Android",platformVersion:"2.3.6",architecture:"",model:"Nexus S",mobile:!0}}]},{title:"BlackBerry",values:[{title:"BlackBerry — BB10",value:"Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+",metadata:null},{title:"BlackBerry — PlayBook 2.1",value:"Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+",metadata:null},{title:"BlackBerry — 9900",value:"Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11+",metadata:null}]},{title:"Chrome",values:[{title:"Chrome — Android Mobile",value:"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"Android",platformVersion:"6.0",architecture:"",model:"Nexus 5",mobile:!0}},{title:"Chrome — Android Mobile (high-end)",value:"Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"Android",platformVersion:"10",architecture:"",model:"Pixel 4",mobile:!0}},{title:"Chrome — Android Tablet",value:"Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"Android",platformVersion:"4.3",architecture:"",model:"Nexus 7",mobile:!0}},{title:"Chrome — iPhone",value:"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/%s Mobile/15E148 Safari/604.1",metadata:null},{title:"Chrome — iPad",value:"Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/%s Mobile/15E148 Safari/604.1",metadata:null},{title:"Chrome — Chrome OS",value:"Mozilla/5.0 (X11; CrOS x86_64 10066.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"Chrome OS",platformVersion:"10066.0.0",architecture:"x86",model:"",mobile:!1}},{title:"Chrome — Mac",value:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"macOS",platformVersion:"10_14_6",architecture:"x86",model:"",mobile:!1}},{title:"Chrome — Windows",value:"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Google Chrome",version:"%s"}],fullVersion:"%s",platform:"Windows",platformVersion:"10.0",architecture:"x86",model:"",mobile:!1}}]},{title:"Firefox",values:[{title:"Firefox — Android Mobile",value:"Mozilla/5.0 (Android 4.4; Mobile; rv:70.0) Gecko/70.0 Firefox/70.0",metadata:null},{title:"Firefox — Android Tablet",value:"Mozilla/5.0 (Android 4.4; Tablet; rv:70.0) Gecko/70.0 Firefox/70.0",metadata:null},{title:"Firefox — iPhone",value:"Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4",metadata:null},{title:"Firefox — iPad",value:"Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4",metadata:null},{title:"Firefox — Mac",value:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0",metadata:null},{title:"Firefox — Windows",value:"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0",metadata:null}]},{title:"Googlebot",values:[{title:"Googlebot",value:"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",metadata:null},{title:"Googlebot Desktop",value:"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/%s Safari/537.36",metadata:null},{title:"Googlebot Smartphone",value:"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",metadata:null}]},{title:"Internet Explorer",values:[{title:"Internet Explorer 11",value:"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko",metadata:null},{title:"Internet Explorer 10",value:"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)",metadata:null},{title:"Internet Explorer 9",value:"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",metadata:null},{title:"Internet Explorer 8",value:"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)",metadata:null},{title:"Internet Explorer 7",value:"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",metadata:null}]},{title:"Microsoft Edge",values:[{title:"Microsoft Edge (Chromium) — Windows",value:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36 Edg/%s",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Microsoft Edge",version:"%s"}],fullVersion:"%s",platform:"Windows",platformVersion:"10.0",architecture:"x86",model:"",mobile:!1}},{title:"Microsoft Edge (Chromium) — Mac",value:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/%s Safari/604.1 Edg/%s",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Microsoft Edge",version:"%s"}],fullVersion:"%s",platform:"macOS",platformVersion:"10_14_6",architecture:"x86",model:"",mobile:!1}},{title:"Microsoft Edge — iPhone",value:"Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 EdgiOS/44.5.0.10 Mobile/15E148 Safari/604.1",metadata:null},{title:"Microsoft Edge — iPad",value:"Mozilla/5.0 (iPad; CPU OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 EdgiOS/44.5.2 Mobile/15E148 Safari/605.1.15",metadata:null},{title:"Microsoft Edge — Android Mobile",value:"Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.D1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36 EdgA/42.0.0.2057",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Microsoft Edge",version:"%s"}],fullVersion:"%s",platform:"Android",platformVersion:"8.1.0",architecture:"",model:"Pixel",mobile:!0}},{title:"Microsoft Edge — Android Tablet",value:"Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 EdgA/42.0.0.2057",metadata:{brands:[{brand:"Not A;Brand",version:"99"},{brand:"Chromium",version:"%s"},{brand:"Microsoft Edge",version:"%s"}],fullVersion:"%s",platform:"Android",platformVersion:"6.0.1",architecture:"",model:"Nexus 7",mobile:!0}},{title:"Microsoft Edge (EdgeHTML) — Windows",value:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19042",metadata:null},{title:"Microsoft Edge (EdgeHTML) — XBox",value:"Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041",metadata:null}]},{title:"Opera",values:[{title:"Opera — Mac",value:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48",metadata:null},{title:"Opera — Windows",value:"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48",metadata:null},{title:"Opera (Presto) — Mac",value:"Opera/9.80 (Macintosh; Intel Mac OS X 10.9.1) Presto/2.12.388 Version/12.16",metadata:null},{title:"Opera (Presto) — Windows",value:"Opera/9.80 (Windows NT 6.1) Presto/2.12.388 Version/12.16",metadata:null},{title:"Opera Mobile — Android Mobile",value:"Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02",metadata:null},{title:"Opera Mini — iOS",value:"Opera/9.80 (iPhone; Opera Mini/8.0.0/34.2336; U; en) Presto/2.8.119 Version/11.10",metadata:null}]},{title:"Safari",values:[{title:"Safari — iPad iOS 13.2",value:"Mozilla/5.0 (iPad; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",metadata:null},{title:"Safari — iPhone iOS 13.2",value:"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",metadata:null},{title:"Safari — Mac",value:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15",metadata:null}]},{title:"UC Browser",values:[{title:"UC Browser — Android Mobile",value:"Mozilla/5.0 (Linux; U; Android 8.1.0; en-US; Nexus 6P Build/OPM7.181205.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.11.1.1197 Mobile Safari/537.36",metadata:null},{title:"UC Browser — iOS",value:"Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16B92 UCBrowser/12.1.7.1109 Mobile AliApp(TUnionSDK/0.1.20.3)",metadata:null},{title:"UC Browser — Windows Phone",value:"Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920) UCBrowser/10.1.0.563 Mobile",metadata:null}]}],td=Object.freeze(Object.defineProperty({__proto__:null,NetworkConfigView:ar,userAgentGroups:ns},Symbol.toStringTag,{value:"Module"})),A={redirect:"Redirect",sPreflight:"{PH1} + Preflight",preflight:"Preflight",selectPreflightRequest:"Select preflight request",failed:"(failed)",data:"(data)",canceled:"(canceled)",other:"other",csp:"csp",origin:"origin",devtools:"devtools",blockeds:"(blocked:{PH1})",blockedTooltip:"This request was blocked due to misconfigured response headers, click to view the headers",corsError:"CORS error",crossoriginResourceSharingErrorS:"Cross-Origin Resource Sharing error: {PH1}",finished:"Finished",pendingq:"(pending)",unknown:"(unknown)",unknownExplanation:"The request status cannot be shown here because the page that issued it unloaded while the request was in flight. You can use chrome://net-export to capture a network log and see all request details.",push:"Push / ",parser:"Parser",script:"Script",preload:"Preload",earlyHints:"early-hints",signedexchange:"signed-exchange",selectTheRequestThatTriggered:"Select the request that triggered this preflight",otherC:"Other",memoryCache:"(memory cache)",servedFromMemoryCacheResource:"Served from memory cache, resource size: {PH1}",serviceWorker:"(`ServiceWorker`)",servedFromServiceWorkerResource:"Served from `ServiceWorker`, resource size: {PH1}",servedFromSignedHttpExchange:"Served from Signed HTTP Exchange, resource size: {PH1}",servedFromWebBundle:"Served from Web Bundle, resource size: {PH1}",prefetchCache:"(prefetch cache)",servedFromPrefetchCacheResource:"Served from prefetch cache, resource size: {PH1}",diskCache:"(disk cache)",servedFromDiskCacheResourceSizeS:"Served from disk cache, resource size: {PH1}",matchedToServiceWorkerRouter:"Matched to `ServiceWorker router`#{PH1}, resource size: {PH2}",matchedToServiceWorkerRouterWithNetworkSource:"Matched to `ServiceWorker router`#{PH1}, {PH2} transferred over network, resource size: {PH3}",pending:"Pending",level:"level 1",webBundleError:"Web Bundle error",webBundleInnerRequest:"Served from Web Bundle",webBundle:"(Web Bundle)",timeSubtitleTooltipText:"Latency (response received time - start time)",alternativeJobWonWithoutRace:"`Chrome` used a `HTTP/3` connection induced by an '`Alt-Svc`' header without racing against establishing a connection using a different `HTTP` version.",alternativeJobWonRace:"`Chrome` used a `HTTP/3` connection induced by an '`Alt-Svc`' header because it won a race against establishing a connection using a different `HTTP` version.",mainJobWonRace:"`Chrome` used this protocol because it won a race against establishing a `HTTP/3` connection.",mappingMissing:"`Chrome` did not use an alternative `HTTP` version because no alternative protocol information was available when the request was issued, but an '`Alt-Svc`' header was present in the response.",broken:"`Chrome` did not try to establish a `HTTP/3` connection because it was marked as broken.",dnsAlpnH3JobWonWithoutRace:"`Chrome` used a `HTTP/3` connection due to the `DNS record` indicating `HTTP/3` support. There was no race against establishing a connection using a different `HTTP` version.",dnsAlpnH3JobWonRace:"`Chrome` used a `HTTP/3` connection due to the `DNS record` indicating `HTTP/3` support, which won a race against establishing a connection using a different `HTTP` version.",initialPriorityToolTip:"{PH1}, Initial priority: {PH2}"},id=Z("panels/network/NetworkDataGridNode.ts",A),F=Q.bind(void 0,id);class as extends ts{parentViewInternal;isHovered;showingInitiatorChainInternal;requestOrFirstKnownChildRequestInternal;constructor(e){super({}),this.parentViewInternal=e,this.isHovered=!1,this.showingInitiatorChainInternal=!1,this.requestOrFirstKnownChildRequestInternal=null}displayName(){return""}displayType(){return""}createCell(e){const t=this.createTD(e);return this.renderCell(t,e),t}renderCell(e,t){}isError(){return!1}isWarning(){return!1}backgroundColor(){const e=Vo,t=document.hasFocus(),i=this.dataGrid&&this.dataGrid.element===document.activeElement,o=this.isWarning(),a=this.isError();return this.selected&&t&&i&&a?e.FocusSelectedHasError:this.selected&&t&&i&&o?e.FocusSelectedHasWarning:this.selected&&t&&i?e.FocusSelected:this.selected?e.Selected:this.hovered()?e.Hovered:this.isOnInitiatorPath()?e.InitiatorPath:this.isOnInitiatedPath()?e.InitiatedPath:this.isStriped()?e.Stripe:e.Default}updateBackgroundColor(){const e=this.existingElement();e&&(e.style.backgroundColor=`var(${this.backgroundColor()})`,this.parentViewInternal.stylesChanged())}setStriped(e){super.setStriped(e),this.updateBackgroundColor()}select(e){super.select(e),this.updateBackgroundColor(),this.parentViewInternal.updateNodeSelectedClass(!0)}deselect(e){super.deselect(e),this.updateBackgroundColor(),this.parentViewInternal.updateNodeSelectedClass(!1)}parentView(){return this.parentViewInternal}hovered(){return this.isHovered}showingInitiatorChain(){return this.showingInitiatorChainInternal}nodeSelfHeight(){return this.parentViewInternal.rowHeight()}setHovered(e,t){this.isHovered===e&&this.showingInitiatorChainInternal===t||(this.isHovered!==e&&(this.isHovered=e,this.attached()&&this.element().classList.toggle("hover",e)),this.showingInitiatorChainInternal!==t&&(this.showingInitiatorChainInternal=t,this.showingInitiatorChainChanged()),this.parentViewInternal.stylesChanged(),this.updateBackgroundColor())}showingInitiatorChainChanged(){}isOnInitiatorPath(){return!1}isOnInitiatedPath(){return!1}request(){return null}isNavigationRequest(){return!1}clearFlatNodes(){super.clearFlatNodes(),this.requestOrFirstKnownChildRequestInternal=null}requestOrFirstKnownChildRequest(){if(this.requestOrFirstKnownChildRequestInternal)return this.requestOrFirstKnownChildRequestInternal;let e=this.request();if(e||!this.hasChildren())return this.requestOrFirstKnownChildRequestInternal=e,this.requestOrFirstKnownChildRequestInternal;let t=null;const i=this.flatChildren();for(let o=0;o<i.length;o++)e=i[o].request(),(!t||e&&e.issueTime()<t.issueTime())&&(t=e);return this.requestOrFirstKnownChildRequestInternal=t,this.requestOrFirstKnownChildRequestInternal}}const Vo={Default:"--color-grid-default",Stripe:"--color-grid-stripe",Navigation:"--network-grid-navigation-color",Hovered:"--color-grid-hovered",InitiatorPath:"--network-grid-initiator-path-color",InitiatedPath:"--network-grid-initiated-path-color",Selected:"--color-grid-selected",FocusSelected:"--color-grid-focus-selected",FocusSelectedHasError:"--network-grid-focus-selected-color-has-error",FocusSelectedHasWarning:"--network-grid-focus-selected-color-has-warning",FromFrame:"--network-grid-from-frame-color"};class G extends as{nameCell;initiatorCell;requestInternal;isNavigationRequestInternal;selectable;isOnInitiatorPathInternal;isOnInitiatedPathInternal;linkifiedInitiatorAnchor;constructor(e,t){super(e),this.nameCell=null,this.initiatorCell=null,this.requestInternal=t,this.isNavigationRequestInternal=!1,this.selectable=!0,this.isOnInitiatorPathInternal=!1,this.isOnInitiatedPathInternal=!1}static NameComparator(e,t){const i=e.displayName().toLowerCase(),o=t.displayName().toLowerCase();if(i===o){const a=e.requestOrFirstKnownChildRequest(),l=t.requestOrFirstKnownChildRequest();return a&&l?a.identityCompare(l):a?-1:1}return i<o?-1:1}static RemoteAddressComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=i.remoteAddress(),l=o.remoteAddress();return a>l?1:l>a?-1:i.identityCompare(o)}static SizeComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();return!i||!o?i?1:-1:o.cached()&&!i.cached()?1:i.cached()&&!o.cached()?-1:i.transferSize-o.transferSize||i.resourceSize-o.resourceSize||i.identityCompare(o)}static TypeComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=e.displayType(),l=t.displayType();return a>l?1:l>a?-1:i.identityCompare(o)}static InitiatorComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=e instanceof G&&e.initiatorCell,l=t instanceof G&&t.initiatorCell;if(!a||!l)return a?1:-1;const c=e,d=t,g=c.linkifiedInitiatorAnchor?c.linkifiedInitiatorAnchor.textContent||"":c.initiatorCell.title,p=d.linkifiedInitiatorAnchor?d.linkifiedInitiatorAnchor.textContent||"":d.initiatorCell.title;return g.localeCompare(p)}static InitiatorAddressSpaceComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=i.clientSecurityState(),l=o.clientSecurityState();return!a||!l?a?1:-1:a.initiatorIPAddressSpace.localeCompare(l.initiatorIPAddressSpace)}static RemoteAddressSpaceComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();return!i||!o?i?1:-1:i.remoteAddressSpace().localeCompare(o.remoteAddressSpace())}static RequestCookiesCountComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=i.includedRequestCookies().length,l=o.includedRequestCookies().length;return a-l||i.identityCompare(o)}static ResponseCookiesCountComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=i.responseCookies?i.responseCookies.length:0,l=o.responseCookies?o.responseCookies.length:0;return a-l||i.identityCompare(o)}static PriorityComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=i.priority();let l=a?nr(a):0;l=l||0;const c=o.priority();let d=c?nr(c):0;return d=d||0,l-d||i.identityCompare(o)}static RequestPropertyComparator(e,t,i){const o=t.requestOrFirstKnownChildRequest(),a=i.requestOrFirstKnownChildRequest();if(!o||!a)return o?1:-1;const l=o[e],c=a[e];return l===c?o.identityCompare(a):l>c?1:-1}static RequestURLComparator(e,t){const i=e.requestOrFirstKnownChildRequest(),o=t.requestOrFirstKnownChildRequest();if(!i||!o)return i?1:-1;const a=i.url(),l=o.url();return a===l?i.identityCompare(o):a>l?1:-1}static ResponseHeaderStringComparator(e,t,i){const o=t.requestOrFirstKnownChildRequest(),a=i.requestOrFirstKnownChildRequest();if(!o||!a)return o?1:-1;const l=String(o.responseHeaderValue(e)||""),c=String(a.responseHeaderValue(e)||"");return l.localeCompare(c)||o.identityCompare(a)}static ResponseHeaderNumberComparator(e,t,i){const o=t.requestOrFirstKnownChildRequest(),a=i.requestOrFirstKnownChildRequest();if(!o||!a)return o?1:-1;const l=o.responseHeaderValue(e),c=l!==void 0?parseFloat(l):-1/0,d=a.responseHeaderValue(e),g=d!==void 0?parseFloat(d):-1/0;return c===g?o.identityCompare(a):c>g?1:-1}static ResponseHeaderDateComparator(e,t,i){const o=t.requestOrFirstKnownChildRequest(),a=i.requestOrFirstKnownChildRequest();if(!o||!a)return o?1:-1;const l=o.responseHeaderValue(e),c=a.responseHeaderValue(e),d=l?new Date(l).getTime():-1/0,g=c?new Date(c).getTime():-1/0;return d===g?o.identityCompare(a):d>g?1:-1}showingInitiatorChainChanged(){const e=this.showingInitiatorChain(),t=ae.instance().initiatorGraphForRequest(this.requestInternal);for(const i of t.initiators){if(i===this.requestInternal)continue;const o=this.parentView().nodeForRequest(i);o&&o.setIsOnInitiatorPath(e)}for(const i of t.initiated.keys()){if(i===this.requestInternal)continue;const o=this.parentView().nodeForRequest(i);o&&o.setIsOnInitiatedPath(e)}}setIsOnInitiatorPath(e){this.isOnInitiatorPathInternal===e||!this.attached()||(this.isOnInitiatorPathInternal=e,this.updateBackgroundColor())}isOnInitiatorPath(){return this.isOnInitiatorPathInternal}setIsOnInitiatedPath(e){this.isOnInitiatedPathInternal===e||!this.attached()||(this.isOnInitiatedPathInternal=e,this.updateBackgroundColor())}isOnInitiatedPath(){return this.isOnInitiatedPathInternal}displayType(){const e=this.requestInternal.mimeType||this.requestInternal.requestContentType()||"",t=this.requestInternal.resourceType();let i=t.name();return this.requestInternal.fromEarlyHints()?F(A.earlyHints):((t===Ye.Other||t===Ye.Image)&&(i=e.replace(/^(application|image)\//,"")),this.requestInternal.isRedirect()&&(i+=" / "+F(A.redirect)),i)}displayName(){return this.requestInternal.name()}request(){return this.requestInternal}isNavigationRequest(){const e=lo.forRequest(this.requestInternal);return e?e.mainRequest===this.requestInternal:!1}nodeSelfHeight(){return this.parentView().rowHeight()}isPrefetch(){return this.requestInternal.resourceType()===Ye.Prefetch}isWarning(){return this.isFailed()&&this.isPrefetch()}isError(){return this.isFailed()&&!this.isPrefetch()}createCells(e){this.nameCell=null,this.initiatorCell=null,e.classList.toggle("network-warning-row",this.isWarning()),e.classList.toggle("network-error-row",this.isError()),e.classList.toggle("network-navigation-row",this.isNavigationRequestInternal),super.createCells(e),this.updateBackgroundColor()}setTextAndTitle(e,t,i){z(e,t),M.install(e,i||t)}setTextAndTitleAsLink(e,t,i,o){const a=document.createElement("span");a.classList.add("devtools-link"),a.textContent=t,a.addEventListener("click",o),e.appendChild(a),M.install(e,i)}renderCell(e,t){const i=e;switch(t){case"name":{this.renderPrimaryCell(i,t);break}case"path":{this.renderPrimaryCell(i,t,this.requestInternal.pathname);break}case"url":{this.renderPrimaryCell(i,t,this.requestInternal.url());break}case"method":{const o=this.requestInternal.preflightRequest();o?(this.setTextAndTitle(i,`${this.requestInternal.requestMethod} + `,F(A.sPreflight,{PH1:this.requestInternal.requestMethod})),i.appendChild(Ze.linkifyRevealable(o,F(A.preflight),void 0,F(A.selectPreflightRequest),void 0,"preflight-request"))):this.setTextAndTitle(i,this.requestInternal.requestMethod);break}case"status":{this.renderStatusCell(i);break}case"protocol":{this.renderProtocolCell(i);break}case"scheme":{this.setTextAndTitle(i,this.requestInternal.scheme);break}case"domain":{this.setTextAndTitle(i,this.requestInternal.domain);break}case"remote-address":{this.setTextAndTitle(i,this.requestInternal.remoteAddress());break}case"remote-address-space":{this.renderAddressSpaceCell(i,this.requestInternal.remoteAddressSpace());break}case"cookies":{this.setTextAndTitle(i,this.arrayLength(this.requestInternal.includedRequestCookies()));break}case"set-cookies":{this.setTextAndTitle(i,this.arrayLength(this.requestInternal.nonBlockedResponseCookies()));break}case"priority":{const o=this.requestInternal.priority(),a=this.requestInternal.initialPriority();o&&a?this.setTextAndTitle(i,ri(o),F(A.initialPriorityToolTip,{PH1:ri(o),PH2:ri(a)})):this.setTextAndTitle(i,o?ri(o):""),this.appendSubtitle(i,a?ri(a):"");break}case"connection-id":{this.setTextAndTitle(i,this.requestInternal.connectionId==="0"?"":this.requestInternal.connectionId);break}case"type":{this.setTextAndTitle(i,this.displayType());break}case"initiator":{this.renderInitiatorCell(i);break}case"initiator-address-space":{const o=this.requestInternal.clientSecurityState();this.renderAddressSpaceCell(i,o?o.initiatorIPAddressSpace:"Unknown");break}case"size":{this.renderSizeCell(i);break}case"time":{this.renderTimeCell(i);break}case"timeline":{this.setTextAndTitle(i,"");break}case"has-overrides":{this.setTextAndTitle(i,this.requestInternal.overrideTypes.join(", "));break}default:{this.setTextAndTitle(i,this.requestInternal.responseHeaderValue(t)||"");break}}}arrayLength(e){return e?String(e.length):""}select(e){super.select(e),this.parentView().dispatchEventToListeners("RequestSelected",this.requestInternal)}highlightMatchedSubstring(e){if(!e||!this.nameCell||this.nameCell.textContent===null)return[];this.element();const t=[],i=this.nameCell.textContent.match(e);return i&&Jn(this.nameCell,i.index||0,i[0].length,t),t}openInNewTab(){ne.openInNewTab(this.requestInternal.url())}isFailed(){return Zi.isFailedNetworkRequest(this.requestInternal)}renderPrimaryCell(e,t,i){if((this.dataGrid?.indexOfVisibleColumn(t)|0)===0){const l=this.leftPadding?this.leftPadding+"px":"";e.style.setProperty("padding-left",l),e.tabIndex=-1,this.nameCell=e,e.addEventListener("dblclick",this.openInNewTab.bind(this),!1),e.addEventListener("mousedown",()=>{this.select(),this.parentView().dispatchEventToListeners("RequestActivated",{showPanel:!0})}),e.addEventListener("focus",()=>this.parentView().resetFocus());const c=Zi.getIconForNetworkRequest(this.requestInternal);e.appendChild(c);const d=this.createAiButtonIfAvailable();d&&e.appendChild(d)}if(t==="name"){const l=this.requestInternal.webBundleInnerRequestInfo();if(l){const g={iconName:"bundle",color:"var(--icon-info)"},p=Zi.createIconElement(g,F(A.webBundleInnerRequest));p.classList.add("icon");const m=Ge.forRequest(this.requestInternal);l.bundleRequestId&&m?e.appendChild(Ze.linkifyRevealable(new Zn(l.bundleRequestId,m),p,void 0,void 0,void 0,"webbundle-request")):e.appendChild(p)}const c=Mr(this.requestInternal.name(),100),d=Ge.forRequest(this.requestInternal);z(e,d?d.target().decorateLabel(c):c),this.appendSubtitle(e,this.requestInternal.path()),this.requestInternal.url().startsWith("data")||M.install(e,this.requestInternal.url())}else i&&z(e,i)}renderStatusCell(e){e.classList.toggle("network-dim-cell",!this.isFailed()&&(this.requestInternal.cached()||!this.requestInternal.statusCode));const t=this.requestInternal.corsErrorStatus(),i=this.requestInternal.webBundleInfo()?.errorMessage||this.requestInternal.webBundleInnerRequestInfo()?.errorMessage;if(i)this.setTextAndTitle(e,F(A.webBundleError),i);else if(this.requestInternal.failed&&!this.requestInternal.canceled&&!this.requestInternal.wasBlocked()&&!t){const o=F(A.failed);this.requestInternal.localizedFailDescription?(z(e,o),this.appendSubtitle(e,this.requestInternal.localizedFailDescription,!0),M.install(e,o+" "+this.requestInternal.localizedFailDescription)):this.setTextAndTitle(e,o)}else if(this.requestInternal.statusCode&&this.requestInternal.statusCode>=400){const o=this.requestInternal.getInferredStatusText();z(e,String(this.requestInternal.statusCode)),this.appendSubtitle(e,o),M.install(e,this.requestInternal.statusCode+" "+o)}else if(!this.requestInternal.statusCode&&this.requestInternal.parsedURL.isDataURL())this.setTextAndTitle(e,F(A.data));else if(!this.requestInternal.statusCode&&this.requestInternal.canceled)this.setTextAndTitle(e,F(A.canceled));else if(this.requestInternal.wasBlocked()){let o=F(A.other),a=!1;switch(this.requestInternal.blockedReason()){case"other":o=F(A.other);break;case"csp":o=F(A.csp);break;case"mixed-content":o=Le("mixed-content");break;case"origin":o=F(A.origin);break;case"inspector":o=F(A.devtools);break;case"subresource-filter":o=Le("subresource-filter");break;case"content-type":o=Le("content-type");break;case"coep-frame-resource-needs-coep-header":a=!0,o=Le("CoepFrameResourceNeedsCoepHeader");break;case"coop-sandboxed-iframe-cannot-navigate-to-coop-page":a=!0,o=Le("CoopSandboxedIframeCannotNavigateToCoopPage");break;case"corp-not-same-origin":a=!0,o=Le("NotSameOrigin");break;case"corp-not-same-site":a=!0,o=Le("NotSameSite");break;case"corp-not-same-origin-after-defaulted-to-same-origin-by-coep":a=!0,o=Le("NotSameOriginAfterDefaultedToSameOriginByCoep");break}a?this.setTextAndTitleAsLink(e,F(A.blockeds,{PH1:o}),F(A.blockedTooltip),()=>{this.parentView().dispatchEventToListeners("RequestActivated",{showPanel:!0,tab:"headers-component"})}):this.setTextAndTitle(e,F(A.blockeds,{PH1:o}))}else if(t)this.setTextAndTitle(e,F(A.corsError),F(A.crossoriginResourceSharingErrorS,{PH1:t.corsError}));else if(this.requestInternal.statusCode){z(e,String(this.requestInternal.statusCode));const o=this.requestInternal.getInferredStatusText();this.appendSubtitle(e,o),M.install(e,this.requestInternal.statusCode+" "+o)}else this.requestInternal.finished?this.setTextAndTitle(e,F(A.finished)):this.requestInternal.preserved?this.setTextAndTitle(e,F(A.unknown),F(A.unknownExplanation)):this.setTextAndTitle(e,F(A.pendingq))}renderProtocolCell(e){switch(z(e,this.requestInternal.protocol),this.requestInternal.alternateProtocolUsage){case"alternativeJobWonWithoutRace":{M.install(e,A.alternativeJobWonWithoutRace);break}case"alternativeJobWonRace":{M.install(e,A.alternativeJobWonRace);break}case"mainJobWonRace":{M.install(e,A.mainJobWonRace);break}case"mappingMissing":{M.install(e,A.mappingMissing);break}case"broken":{M.install(e,A.broken);break}case"dnsAlpnH3JobWonWithoutRace":{M.install(e,A.dnsAlpnH3JobWonWithoutRace);break}case"dnsAlpnH3JobWonRace":{M.install(e,A.dnsAlpnH3JobWonRace);break}default:{M.install(e,this.requestInternal.protocol);break}}}#e(){if(this.requestInternal.resourceType().isStyleSheet())return ct.StyleSheetInitiatorLinkClicked}renderInitiatorCell(e){this.initiatorCell=e;const t=this.requestInternal,i=ae.instance().initiatorInfoForRequest(t),o=t.timing;switch(o&&o.pushStart&&e.appendChild(document.createTextNode(F(A.push))),i.type){case"parser":{const l=ko.instance().uiSourceCodeForURL(i.url)?.displayName(),c=l!==void 0&&i.lineNumber!==void 0?`${l}:${i.lineNumber}`:void 0;e.appendChild(Ze.linkifyURL(i.url,{text:c,lineNumber:i.lineNumber,columnNumber:i.columnNumber,userMetric:this.#e()})),this.appendSubtitle(e,F(A.parser));break}case"redirect":{M.install(e,i.url);const a=t.redirectSource();console.assert(a!==null),this.parentView().nodeForRequest(a)?e.appendChild(Ze.linkifyRevealable(a,Qn(a.url()),void 0,void 0,void 0,"redirect-source-request")):e.appendChild(Ze.linkifyURL(a.url(),{jslogContext:"redirect-source-request-url"})),this.appendSubtitle(e,F(A.redirect));break}case"script":{const a=Ge.forRequest(t)?.target()||null,l=this.parentView().linkifier();i.stack?this.linkifiedInitiatorAnchor=l.linkifyStackTraceTopFrame(a,i.stack):this.linkifiedInitiatorAnchor=l.linkifyScriptLocation(a,i.scriptId,i.url,i.lineNumber,{columnNumber:i.columnNumber,inlineFrameIndex:0}),M.install(this.linkifiedInitiatorAnchor,""),e.appendChild(this.linkifiedInitiatorAnchor),this.appendSubtitle(e,F(A.script)),e.classList.add("network-script-initiated");break}case"preload":{M.install(e,F(A.preload)),e.classList.add("network-dim-cell"),e.appendChild(document.createTextNode(F(A.preload)));break}case"signedExchange":{e.appendChild(Ze.linkifyURL(i.url)),this.appendSubtitle(e,F(A.signedexchange));break}case"preflight":{if(e.appendChild(document.createTextNode(F(A.preflight))),i.initiatorRequest){const a=yo("arrow-up-down-circle"),l=Ze.linkifyRevealable(i.initiatorRequest,a,void 0,F(A.selectTheRequestThatTriggered),"trailing-link-icon","initator-request");qt(l,F(A.selectTheRequestThatTriggered)),e.appendChild(l)}break}default:M.install(e,F(A.otherC)),e.classList.add("network-dim-cell"),e.appendChild(document.createTextNode(F(A.otherC)))}}renderAddressSpaceCell(e,t){t!=="Unknown"&&z(e,t)}renderSizeCell(e){const t=lt(this.requestInternal.resourceSize);if(this.requestInternal.cachedInMemory())z(e,F(A.memoryCache)),M.install(e,F(A.servedFromMemoryCacheResource,{PH1:t})),e.classList.add("network-dim-cell");else if(this.requestInternal.serviceWorkerRouterInfo){const{serviceWorkerRouterInfo:i}=this.requestInternal,o=i.ruleIdMatched??0;z(e,Le("(ServiceWorker router)"));let a;if(i.matchedSourceType==="network"){const l=lt(this.requestInternal.transferSize);a=F(A.matchedToServiceWorkerRouterWithNetworkSource,{PH1:o,PH2:l,PH3:t})}else a=F(A.matchedToServiceWorkerRouter,{PH1:o,PH2:t});M.install(e,a),e.classList.add("network-dim-cell")}else if(this.requestInternal.fetchedViaServiceWorker)z(e,F(A.serviceWorker)),M.install(e,F(A.servedFromServiceWorkerResource,{PH1:t})),e.classList.add("network-dim-cell");else if(this.requestInternal.redirectSourceSignedExchangeInfoHasNoErrors())z(e,Le("(signed-exchange)")),M.install(e,F(A.servedFromSignedHttpExchange,{PH1:t})),e.classList.add("network-dim-cell");else if(this.requestInternal.webBundleInnerRequestInfo())z(e,F(A.webBundle)),M.install(e,F(A.servedFromWebBundle,{PH1:t})),e.classList.add("network-dim-cell");else if(this.requestInternal.fromPrefetchCache())z(e,F(A.prefetchCache)),M.install(e,F(A.servedFromPrefetchCacheResource,{PH1:t})),e.classList.add("network-dim-cell");else if(this.requestInternal.cached())z(e,F(A.diskCache)),M.install(e,F(A.servedFromDiskCacheResourceSizeS,{PH1:t})),e.classList.add("network-dim-cell");else{const i=lt(this.requestInternal.transferSize);z(e,i),M.install(e,`${i} transferred over network, resource size: ${t}`)}this.appendSubtitle(e,t)}renderTimeCell(e){this.requestInternal.duration>0?(this.setTextAndTitle(e,Me(this.requestInternal.duration)),this.appendSubtitle(e,Me(this.requestInternal.latency),!1,F(A.timeSubtitleTooltipText))):this.requestInternal.preserved?this.setTextAndTitle(e,F(A.unknown),F(A.unknownExplanation)):(e.classList.add("network-dim-cell"),this.setTextAndTitle(e,F(A.pending)))}appendSubtitle(e,t,i=!1,o=""){const a=document.createElement("div");a.classList.add("network-cell-subtitle"),i&&a.classList.add("always-visible"),a.textContent=t,o&&M.install(a,o),e.appendChild(a)}createAiButtonIfAvailable(){if(ci.instance().hasAction("drjones.network-floating-button")){const e=ci.instance().getAction("drjones.network-floating-button"),t=document.createElement("span");t.classList.add("ai-button-container");const i=new fl({iconName:"smart-assistant"});return i.addEventListener("click",o=>{o.stopPropagation(),this.select(),e.execute()},{capture:!0}),i.addEventListener("mousedown",o=>{o.stopPropagation()},{capture:!0}),t.appendChild(i),t}}}class ls extends as{createCells(e){super.createCells(e);const t=this.dataGrid.visibleColumnsArray[0],i=`${t.title}`,o=F(A.level);this.nodeAccessibleText=`${o} ${i}: ${this.cellAccessibleTextMap.get(t.id)}`}renderCell(e,t){if(this.dataGrid.indexOfVisibleColumn(t)===0){const o=e,a=this.leftPadding?this.leftPadding+"px":"";o.style.setProperty("padding-left",a),o.classList.add("disclosure"),this.setCellAccessibleName(o.textContent||"",o,t)}}select(e){super.select(e);const i=this.traverseNextNode(!1,void 0,!0)?.request();i&&this.parentView().dispatchEventToListeners("RequestSelected",i)}}const rd=Object.freeze(Object.defineProperty({__proto__:null,NetworkGroupNode:ls,NetworkNode:as,NetworkRequestNode:G,_backgroundColors:Vo},Symbol.toStringTag,{value:"Module"})),Wo=new CSSStyleSheet;Wo.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: inline;
}

.editable {
  cursor: text;
  overflow-wrap: anywhere;
  min-height: 18px;
  line-height: 18px;
  min-width: 0.5em;
  background: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  display: inline-block;
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);

  &:hover {
    border: 1px solid var(--sys-color-neutral-outline);
  }

  &:focus {
    border: 1px solid var(--sys-color-state-focus-ring);
  }
}

.editable::selection {
  color: var(--sys-color-on-tonal-container);
  background-color: var(--sys-color-tonal-container);
}

/*# sourceURL=EditableSpan.css */
`);const{render:sd,html:od}=Ht;class nd extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=this.#o.bind(this);#i="";connectedCallback(){this.#e.adoptedStyleSheets=[Wo],this.#e.addEventListener("focusin",this.#a.bind(this)),this.#e.addEventListener("keydown",this.#r.bind(this)),this.#e.addEventListener("input",this.#s.bind(this))}set data(e){this.#i=e.value,ii(this,this.#t)}get value(){return this.#e.querySelector("span")?.innerText||""}set value(e){this.#i=e;const t=this.#e.querySelector("span");t&&(t.innerText=e)}#r(e){e.key==="Enter"&&(e.preventDefault(),e.target?.blur())}#s(e){this.#i=e.target.innerText}#a(e){const t=e.target,i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i?.removeAllRanges(),i?.addRange(o)}#o(){if(!bo(this))throw new Error("HeaderSectionRow render was not scheduled");sd(od`<span
        contenteditable="plaintext-only"
        class="editable"
        tabindex="0"
        .innerText=${this.#i}
        jslog=${ea("header-editor").track({change:!0,keydown:"Enter|Escape"})}
    </span>`,this.#e,{host:this})}focus(){requestAnimationFrame(()=>{this.#e.querySelector(".editable")?.focus()})}}customElements.define("devtools-editable-span",nd);const ds={};(function(){var w,e=this||self;function t(r){var s=typeof r;return s!="object"?s:r?Array.isArray(r)?"array":s:"null"}function i(r){var s=typeof r;return s=="object"&&r!=null||s=="function"}function o(r,s){r=r.split(".");var n=e;r[0]in n||typeof n.execScript>"u"||n.execScript("var "+r[0]);for(var h;r.length&&(h=r.shift());)r.length||s===void 0?n[h]&&n[h]!==Object.prototype[h]?n=n[h]:n=n[h]={}:n[h]=s}function a(r,s){function n(){}n.prototype=s.prototype,r.Ob=s.prototype,r.prototype=new n,r.prototype.constructor=r,r.base=function(h,v,b){for(var L=Array(arguments.length-2),N=2;N<arguments.length;N++)L[N-2]=arguments[N];return s.prototype[v].apply(h,L)}}function l(r,s){Array.prototype.forEach.call(r,s,void 0)}function c(r,s){return Array.prototype.map.call(r,s,void 0)}var d={},g=null;function p(r){var s=r.length,n=3*s/4;n%3?n=Math.floor(n):"=.".indexOf(r[s-1])!=-1&&(n="=.".indexOf(r[s-2])!=-1?n-2:n-1);var h=new Uint8Array(n),v=0;return m(r,function(b){h[v++]=b}),h.subarray(0,v)}function m(r,s){function n(Ce){for(;h<r.length;){var Jt=r.charAt(h++),Ps=g[Jt];if(Ps!=null)return Ps;if(!/^[\s\xa0]*$/.test(Jt))throw Error("Unknown base64 encoding at char: "+Jt)}return Ce}f();for(var h=0;;){var v=n(-1),b=n(0),L=n(64),N=n(64);if(N===64&&v===-1)break;s(v<<2|b>>4),L!=64&&(s(b<<4&240|L>>2),N!=64&&s(L<<6&192|N))}}function f(){if(!g){g={};for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),s=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var h=r.concat(s[n].split(""));d[n]=h;for(var v=0;v<h.length;v++){var b=h[v];g[b]===void 0&&(g[b]=v)}}}}function k(r,s,n,h){let v="Assertion failed",b;throw n?(v+=": "+n,b=h):r&&(v+=": "+r,b=s),Error(v,b||[])}function u(r,s){var n=[];return r||k("",null,s,n),r}function C(r,...s){throw Error("Failure"+(r?": "+r:""),s)}function I(r){var s=E,n=[];r instanceof s||k("Expected instanceof %s but got %s.",[U(s),U(r)],void 0,n)}function U(r){return r instanceof Function?r.displayName||r.name||"unknown type name":r instanceof Object?r.constructor.displayName||r.constructor.name||Object.prototype.toString.call(r):r===null?"null":typeof r}function P(r,s){this.g=r,this.h=s}function W(r){return new P((r.g>>>1|(r.h&1)<<31)>>>0,r.h>>>1>>>0)}function ge(r){return new P(r.g<<1>>>0,(r.h<<1|r.g>>>31)>>>0)}P.prototype.add=function(r){return new P((this.g+r.g&4294967295)>>>0>>>0,((this.h+r.h&4294967295)>>>0)+(4294967296<=this.g+r.g?1:0)>>>0)},P.prototype.sub=function(r){return new P((this.g-r.g&4294967295)>>>0>>>0,((this.h-r.h&4294967295)>>>0)-(0>this.g-r.g?1:0)>>>0)};function Te(r){var s=r&65535,n=r>>>16;for(r=10*s+65536*(0*s&65535)+65536*(10*n&65535),s=0*n+(0*s>>>16)+(10*n>>>16);4294967296<=r;)r-=4294967296,s+=1;return new P(r>>>0,s>>>0)}P.prototype.toString=function(){for(var r="",s=this;s.g!=0||s.h!=0;){var n=new P(0,0);s=new P(s.g,s.h);for(var h=new P(10,0),v=new P(1,0);!(h.h&2147483648);)h=ge(h),v=ge(v);for(;v.g!=0||v.h!=0;)0>=(h.h<s.h||h.h==s.h&&h.g<s.g?-1:h.h==s.h&&h.g==s.g?0:1)&&(n=n.add(v),s=s.sub(h)),h=W(h),v=W(v);n=[n,s],s=n[0],r=n[1].g+r}return r==""&&(r="0"),r},P.prototype.clone=function(){return new P(this.g,this.h)};var X=0,he=0;function Ui(r){var s=r>>>0;r=Math.floor((r-s)/4294967296)>>>0,X=s,he=r}function Pt(r){var s=0>r;r=Math.abs(r);var n=r>>>0;r=Math.floor((r-n)/4294967296),r>>>=0,s&&(r=~r>>>0,n=(~n>>>0)+1,4294967295<n&&(n=0,r++,4294967295<r&&(r=0))),X=n,he=r}function Kt(r,s){return 4294967296*s+(r>>>0)}function Yt(r,s){var n=s&2147483648;return n&&(r=~r+1>>>0,s=~s>>>0,r==0&&(s=s+1>>>0)),r=Kt(r,s),n?-r:r}function mi(r,s){var n=-(r&1);return Yt((r>>>1|s<<31)^n,s>>>1^n)}function gi(r){return r.constructor===Uint8Array?r:r.constructor===ArrayBuffer?new Uint8Array(r):r.constructor===Array?new Uint8Array(r):r.constructor===String?p(r):r instanceof Uint8Array?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):(C("Type not convertible to Uint8Array."),new Uint8Array(0))}function bt(r,s,n){this.h=null,this.g=this.j=this.o=0,this.D=!1,r&&Se(this,r,s,n)}var $=[];function ee(r,s,n){if($.length){var h=$.pop();return r&&Se(h,r,s,n),h}return new bt(r,s,n)}w=bt.prototype,w.clone=function(){return ee(this.h,this.o,this.j-this.o)},w.clear=function(){this.h=null,this.g=this.j=this.o=0,this.D=!1};function Se(r,s,n,h){r.h=gi(s),r.o=n!==void 0?n:0,r.j=h!==void 0?r.o+h:r.h.length,r.g=r.o}w.reset=function(){this.g=this.o};function St(r,s){r.g+=s,u(r.g<=r.j)}function ht(r,s){for(var n=128,h=0,v=0,b=0;4>b&&128<=n;b++)n=r.h[r.g++],h|=(n&127)<<7*b;if(128<=n&&(n=r.h[r.g++],h|=(n&127)<<28,v|=(n&127)>>4),128<=n)for(b=0;5>b&&128<=n;b++)n=r.h[r.g++],v|=(n&127)<<7*b+3;if(128>n)return s(h>>>0,v>>>0);C("Failed to read varint, encoding is invalid."),r.D=!0}w.v=function(){var r=this.h,s=r[this.g],n=s&127;return 128>s?(this.g+=1,u(this.g<=this.j),n):(s=r[this.g+1],n|=(s&127)<<7,128>s?(this.g+=2,u(this.g<=this.j),n):(s=r[this.g+2],n|=(s&127)<<14,128>s?(this.g+=3,u(this.g<=this.j),n):(s=r[this.g+3],n|=(s&127)<<21,128>s?(this.g+=4,u(this.g<=this.j),n):(s=r[this.g+4],n|=(s&15)<<28,128>s?(this.g+=5,u(this.g<=this.j),n>>>0):(this.g+=5,128<=r[this.g++]&&128<=r[this.g++]&&128<=r[this.g++]&&128<=r[this.g++]&&128<=r[this.g++]&&u(!1),u(this.g<=this.j),n)))))},w.fa=function(){return~~this.v()},w.qa=function(){var r=this.v();return r>>>1^-(r&1)},w.pa=function(){return ht(this,Kt)},w.ga=function(){return ht(this,Yt)},w.ra=function(){return ht(this,mi)},w.u=function(){var r=this.h[this.g],s=this.h[this.g+1],n=this.h[this.g+2],h=this.h[this.g+3];return this.g+=4,u(this.g<=this.j),(r<<0|s<<8|n<<16|h<<24)>>>0},w.R=function(){var r=this.u(),s=this.u();return Kt(r,s)},w.G=function(){var r=this.h[this.g],s=this.h[this.g+1],n=this.h[this.g+2],h=this.h[this.g+3];return this.g+=4,u(this.g<=this.j),r<<0|s<<8|n<<16|h<<24},w.P=function(){var r=this.u(),s=this.u();return Yt(r,s)},w.O=function(){var r=this.u(),s=2*(r>>31)+1,n=r>>>23&255;return r&=8388607,n==255?r?NaN:1/0*s:n==0?s*Math.pow(2,-149)*r:s*Math.pow(2,n-150)*(r+Math.pow(2,23))},w.N=function(){var r=this.u(),s=this.u(),n=2*(s>>31)+1,h=s>>>20&2047;return r=4294967296*(s&1048575)+r,h==2047?r?NaN:1/0*n:h==0?n*Math.pow(2,-1074)*r:n*Math.pow(2,h-1075)*(r+4503599627370496)},w.ba=function(){return!!this.h[this.g++]},w.da=function(){return this.fa()},w.ha=function(r){var s=this.h,n=this.g,h=n+r,v=[];for(r="";n<h;){var b=s[n++];if(128>b)v.push(b);else{if(192>b)continue;if(224>b){var L=s[n++];v.push((b&31)<<6|L&63)}else if(240>b){L=s[n++];var N=s[n++];v.push((b&15)<<12|(L&63)<<6|N&63)}else if(248>b){L=s[n++],N=s[n++];var Ce=s[n++];b=(b&7)<<18|(L&63)<<12|(N&63)<<6|Ce&63,b-=65536,v.push((b>>10&1023)+55296,(b&1023)+56320)}}8192<=v.length&&(r+=String.fromCharCode.apply(null,v),v.length=0)}if(8192>=v.length)v=String.fromCharCode.apply(null,v);else{for(s="",h=0;h<v.length;h+=8192)s+=String.fromCharCode.apply(null,Array.prototype.slice.call(v,h,h+8192));v=s}return this.g=n,r+v},w.ca=function(r){if(0>r||this.g+r>this.h.length)return this.D=!0,C("Invalid byte length!"),new Uint8Array(0);var s=this.h.subarray(this.g,this.g+r);return this.g+=r,u(this.g<=this.j),s};function ut(){this.g=[]}w=ut.prototype,w.length=function(){return this.g.length},w.end=function(){var r=this.g;return this.g=[],r};function Ue(r){var s=X,n=he;for(u(s==Math.floor(s)),u(n==Math.floor(n)),u(0<=s&&4294967296>s),u(0<=n&&4294967296>n);0<n||127<s;)r.g.push(s&127|128),s=(s>>>7|n<<25)>>>0,n>>>=7;r.g.push(s)}function Nt(r,s,n){u(s==Math.floor(s)),u(n==Math.floor(n)),u(0<=s&&4294967296>s),u(0<=n&&4294967296>n),r.A(s),r.A(n)}function pe(r,s){for(u(s==Math.floor(s)),u(0<=s&&4294967296>s);127<s;)r.g.push(s&127|128),s>>>=7;r.g.push(s)}function pt(r,s){if(u(s==Math.floor(s)),u(-2147483648<=s&&2147483648>s),0<=s)pe(r,s);else{for(var n=0;9>n;n++)r.g.push(s&127|128),s>>=7;r.g.push(1)}}function Ct(r,s){u(s==Math.floor(s)),u(0<=s&&18446744073709552e3>s),Pt(s),Ue(r)}function wr(r,s){u(s==Math.floor(s)),u(-9223372036854776e3<=s&&9223372036854776e3>s),Pt(s),Ue(r)}function vr(r,s){u(s==Math.floor(s)),u(-2147483648<=s&&2147483648>s),pe(r,(s<<1^s>>31)>>>0)}function yr(r,s){u(s==Math.floor(s)),u(-9223372036854776e3<=s&&9223372036854776e3>s);var n=s;s=0>n,n=2*Math.abs(n),Ui(n),n=X;var h=he;s&&(n==0?h==0?h=n=4294967295:(h--,n=4294967295):n--),X=n,he=h,Ue(r)}w.A=function(r){u(r==Math.floor(r)),u(0<=r&&4294967296>r),this.g.push(r>>>0&255),this.g.push(r>>>8&255),this.g.push(r>>>16&255),this.g.push(r>>>24&255)},w.W=function(r){u(r==Math.floor(r)),u(0<=r&&18446744073709552e3>r),Ui(r),this.A(X),this.A(he)},w.T=function(r){u(r==Math.floor(r)),u(-2147483648<=r&&2147483648>r),this.g.push(r>>>0&255),this.g.push(r>>>8&255),this.g.push(r>>>16&255),this.g.push(r>>>24&255)},w.U=function(r){u(r==Math.floor(r)),u(-9223372036854776e3<=r&&9223372036854776e3>r),Pt(r),Nt(this,X,he)},w.J=function(r){u(r===1/0||r===-1/0||isNaN(r)||-34028234663852886e22<=r&&34028234663852886e22>=r);var s=r;if(s=(r=0>s?1:0)?-s:s,s===0)0<1/s?X=he=0:(he=0,X=2147483648);else if(isNaN(s))he=0,X=2147483647;else if(34028234663852886e22<s)he=0,X=(r<<31|2139095040)>>>0;else if(11754943508222875e-54>s)s=Math.round(s/Math.pow(2,-149)),he=0,X=(r<<31|s)>>>0;else{var n=Math.floor(Math.log(s)/Math.LN2);s*=Math.pow(2,-n),s=Math.round(8388608*s),16777216<=s&&++n,he=0,X=(r<<31|n+127<<23|s&8388607)>>>0}this.A(X)},w.I=function(r){u(r===1/0||r===-1/0||isNaN(r)||-17976931348623157e292<=r&&17976931348623157e292>=r);var s=r;if(s=(r=0>s?1:0)?-s:s,s===0)he=0<1/s?0:2147483648,X=0;else if(isNaN(s))he=2147483647,X=4294967295;else if(17976931348623157e292<s)he=(r<<31|2146435072)>>>0,X=0;else if(22250738585072014e-324>s)s/=Math.pow(2,-1074),he=(r<<31|s/4294967296)>>>0,X=s>>>0;else{var n=s,h=0;if(2<=n)for(;2<=n&&1023>h;)h++,n/=2;else for(;1>n&&-1022<h;)n*=2,h--;s*=Math.pow(2,-h),he=(r<<31|h+1023<<20|1048576*s&1048575)>>>0,X=4503599627370496*s>>>0}this.A(X),this.A(he)},w.H=function(r){u(typeof r=="boolean"||typeof r=="number"),this.g.push(r?1:0)},w.S=function(r){u(r==Math.floor(r)),u(-2147483648<=r&&2147483648>r),pt(this,r)},w.ja=function(r){this.g.push.apply(this.g,r)},w.V=function(r){var s=this.g.length,n=[];for(typeof r!="string"&&k("Expected string but got %s: %s.",[t(r),r],void 0,n),n=0;n<r.length;n++){var h=r.charCodeAt(n);if(128>h)this.g.push(h);else if(2048>h)this.g.push(h>>6|192),this.g.push(h&63|128);else if(65536>h)if(55296<=h&&56319>=h&&n+1<r.length){var v=r.charCodeAt(n+1);56320<=v&&57343>=v&&(h=1024*(h-55296)+v-56320+65536,this.g.push(h>>18|240),this.g.push(h>>12&63|128),this.g.push(h>>6&63|128),this.g.push(h&63|128),n++)}else this.g.push(h>>12|224),this.g.push(h>>6&63|128),this.g.push(h&63|128)}return this.g.length-s};function S(r){this.g=ee(r,void 0,void 0),this.D=this.g.g,this.h=this.j=-1,this.o=!1}S.prototype.Ca=function(){return this.j},S.prototype.getFieldNumber=S.prototype.Ca,S.prototype.Z=function(){return this.h==2},S.prototype.isDelimited=S.prototype.Z,S.prototype.aa=function(){return this.h==4},S.prototype.isEndGroup=S.prototype.aa,S.prototype.reset=function(){this.g.reset(),this.h=this.j=-1},S.prototype.M=function(){var r=this.g;if(r.g==r.j)return!1;if((r=this.o)||(r=this.g,r=r.D||0>r.g||r.g>r.j),r)return C("Decoder hit an error"),!1;this.D=this.g.g;var s=this.g.v();return r=s>>>3,s&=7,s!=0&&s!=5&&s!=1&&s!=2&&s!=3&&s!=4?(C("Invalid wire type: %s (at position %s)",s,this.D),this.o=!0,!1):(this.j=r,this.h=s,!0)},S.prototype.nextField=S.prototype.M;function Mt(r){switch(r.h){case 0:if(r.h!=0)C("Invalid wire type for skipVarintField"),Mt(r);else{for(r=r.g;r.h[r.g]&128;)r.g++;r.g++}break;case 1:r.h!=1?(C("Invalid wire type for skipFixed64Field"),Mt(r)):St(r.g,8);break;case 2:if(r.h!=2)C("Invalid wire type for skipDelimitedField"),Mt(r);else{var s=r.g.v();St(r.g,s)}break;case 5:r.h!=5?(C("Invalid wire type for skipFixed32Field"),Mt(r)):St(r.g,4);break;case 3:s=r.j;do{if(!r.M()){C("Unmatched start-group tag: stream EOF"),r.o=!0;break}if(r.h==4){r.j!=s&&(C("Unmatched end-group tag"),r.o=!0);break}Mt(r)}while(!0);break;default:C("Invalid wire encoding for field.")}}S.prototype.Ja=function(r,s){u(this.h==2);var n=this.g.j,h=this.g.v();h=this.g.g+h,this.g.j=h,s(r,this),this.g.g=h,this.g.j=n},S.prototype.readMessage=S.prototype.Ja,S.prototype.Ia=function(r,s,n){u(this.h==3),u(this.j==r),n(s,this),this.o||this.h==4||(C("Group submessage did not end with an END_GROUP tag"),this.o=!0)},S.prototype.readGroup=S.prototype.Ia,S.prototype.G=function(){return u(this.h==0),this.g.fa()},S.prototype.readInt32=S.prototype.G,S.prototype.P=function(){return u(this.h==0),this.g.ga()},S.prototype.readInt64=S.prototype.P,S.prototype.u=function(){return u(this.h==0),this.g.v()},S.prototype.readUint32=S.prototype.u,S.prototype.R=function(){return u(this.h==0),this.g.pa()},S.prototype.readUint64=S.prototype.R,S.prototype.Za=function(){return u(this.h==0),this.g.qa()},S.prototype.readSint32=S.prototype.Za,S.prototype.$a=function(){return u(this.h==0),this.g.ra()},S.prototype.readSint64=S.prototype.$a,S.prototype.Ga=function(){return u(this.h==5),this.g.u()},S.prototype.readFixed32=S.prototype.Ga,S.prototype.Ha=function(){return u(this.h==1),this.g.R()},S.prototype.readFixed64=S.prototype.Ha,S.prototype.Xa=function(){return u(this.h==5),this.g.G()},S.prototype.readSfixed32=S.prototype.Xa,S.prototype.Ya=function(){return u(this.h==1),this.g.P()},S.prototype.readSfixed64=S.prototype.Ya,S.prototype.O=function(){return u(this.h==5),this.g.O()},S.prototype.readFloat=S.prototype.O,S.prototype.N=function(){return u(this.h==1),this.g.N()},S.prototype.readDouble=S.prototype.N,S.prototype.ba=function(){return u(this.h==0),!!this.g.v()},S.prototype.readBool=S.prototype.ba,S.prototype.da=function(){return u(this.h==0),this.g.ga()},S.prototype.readEnum=S.prototype.da,S.prototype.ha=function(){u(this.h==2);var r=this.g.v();return this.g.ha(r)},S.prototype.readString=S.prototype.ha,S.prototype.ca=function(){u(this.h==2);var r=this.g.v();return this.g.ca(r)},S.prototype.readBytes=S.prototype.ca;function Fe(r,s){u(r.h==2);var n=r.g.v();n=r.g.g+n;for(var h=[];r.g.g<n;)h.push(s.call(r.g));return h}S.prototype.ea=function(){return Fe(this,this.g.fa)},S.prototype.readPackedInt32=S.prototype.ea,S.prototype.Qa=function(){return Fe(this,this.g.ga)},S.prototype.readPackedInt64=S.prototype.Qa,S.prototype.Va=function(){return Fe(this,this.g.v)},S.prototype.readPackedUint32=S.prototype.Va,S.prototype.Wa=function(){return Fe(this,this.g.pa)},S.prototype.readPackedUint64=S.prototype.Wa,S.prototype.Ta=function(){return Fe(this,this.g.qa)},S.prototype.readPackedSint32=S.prototype.Ta,S.prototype.Ua=function(){return Fe(this,this.g.ra)},S.prototype.readPackedSint64=S.prototype.Ua,S.prototype.Na=function(){return Fe(this,this.g.u)},S.prototype.readPackedFixed32=S.prototype.Na,S.prototype.Oa=function(){return Fe(this,this.g.R)},S.prototype.readPackedFixed64=S.prototype.Oa,S.prototype.Ra=function(){return Fe(this,this.g.G)},S.prototype.readPackedSfixed32=S.prototype.Ra,S.prototype.Sa=function(){return Fe(this,this.g.P)},S.prototype.readPackedSfixed64=S.prototype.Sa,S.prototype.Pa=function(){return Fe(this,this.g.O)},S.prototype.readPackedFloat=S.prototype.Pa,S.prototype.La=function(){return Fe(this,this.g.N)},S.prototype.readPackedDouble=S.prototype.La,S.prototype.Ka=function(){return Fe(this,this.g.ba)},S.prototype.readPackedBool=S.prototype.Ka,S.prototype.Ma=function(){return Fe(this,this.g.da)},S.prototype.readPackedEnum=S.prototype.Ma;function y(){this.j=[],this.h=0,this.g=new ut,this.o=[]}function Xe(r,s){return _(r,s,2),s=r.g.end(),r.j.push(s),r.h+=s.length,s.push(r.h),s}function Je(r,s){var n=s.pop();for(n=r.h+r.g.length()-n,u(0<=n);127<n;)s.push(n&127|128),n>>>=7,r.h++;s.push(n),r.h++}y.prototype.reset=function(){this.j=[],this.g.end(),this.h=0,this.o=[]},y.prototype.oa=function(){u(this.o.length==0);for(var r=new Uint8Array(this.h+this.g.length()),s=this.j,n=s.length,h=0,v=0;v<n;v++){var b=s[v];r.set(b,h),h+=b.length}return s=this.g.end(),r.set(s,h),h+=s.length,u(h==r.length),this.j=[r],r},y.prototype.getResultBuffer=y.prototype.oa;function _(r,s,n){u(1<=s&&s==Math.floor(s)),pe(r.g,8*s+n)}y.prototype.T=function(r,s){s!=null&&(u(-2147483648<=s&&2147483648>s),s!=null&&(_(this,r,0),pt(this.g,s)))},y.prototype.writeInt32=y.prototype.T,y.prototype.U=function(r,s){s!=null&&(u(-9223372036854776e3<=s&&9223372036854776e3>s),s!=null&&(_(this,r,0),wr(this.g,s)))},y.prototype.writeInt64=y.prototype.U,y.prototype.A=function(r,s){s!=null&&(u(0<=s&&4294967296>s),s!=null&&(_(this,r,0),pe(this.g,s)))},y.prototype.writeUint32=y.prototype.A,y.prototype.W=function(r,s){s!=null&&(u(0<=s&&18446744073709552e3>s),s!=null&&(_(this,r,0),Ct(this.g,s)))},y.prototype.writeUint64=y.prototype.W,y.prototype.Kb=function(r,s){s!=null&&(u(-2147483648<=s&&2147483648>s),s!=null&&(_(this,r,0),vr(this.g,s)))},y.prototype.writeSint32=y.prototype.Kb,y.prototype.Lb=function(r,s){s!=null&&(u(-9223372036854776e3<=s&&9223372036854776e3>s),s!=null&&(_(this,r,0),yr(this.g,s)))},y.prototype.writeSint64=y.prototype.Lb,y.prototype.ua=function(r,s){s!=null&&(u(0<=s&&4294967296>s),_(this,r,5),this.g.A(s))},y.prototype.writeFixed32=y.prototype.ua,y.prototype.va=function(r,s){s!=null&&(u(0<=s&&18446744073709552e3>s),_(this,r,1),this.g.W(s))},y.prototype.writeFixed64=y.prototype.va,y.prototype.wa=function(r,s){s!=null&&(u(-2147483648<=s&&2147483648>s),_(this,r,5),this.g.T(s))},y.prototype.writeSfixed32=y.prototype.wa,y.prototype.xa=function(r,s){s!=null&&(u(-9223372036854776e3<=s&&9223372036854776e3>s),_(this,r,1),this.g.U(s))},y.prototype.writeSfixed64=y.prototype.xa,y.prototype.J=function(r,s){s!=null&&(_(this,r,5),this.g.J(s))},y.prototype.writeFloat=y.prototype.J,y.prototype.I=function(r,s){s!=null&&(_(this,r,1),this.g.I(s))},y.prototype.writeDouble=y.prototype.I,y.prototype.H=function(r,s){s!=null&&(u(typeof s=="boolean"||typeof s=="number"),_(this,r,0),this.g.H(s))},y.prototype.writeBool=y.prototype.H,y.prototype.S=function(r,s){s!=null&&(u(-2147483648<=s&&2147483648>s),_(this,r,0),pt(this.g,s))},y.prototype.writeEnum=y.prototype.S,y.prototype.V=function(r,s){s!=null&&(r=Xe(this,r),this.g.V(s),Je(this,r))},y.prototype.writeString=y.prototype.V,y.prototype.ja=function(r,s){s!=null&&(s=gi(s),_(this,r,2),pe(this.g,s.length),r=this.g.end(),this.j.push(r),this.j.push(s),this.h+=r.length+s.length)},y.prototype.writeBytes=y.prototype.ja,y.prototype.cb=function(r,s,n){s!=null&&(r=Xe(this,r),n(s,this),Je(this,r))},y.prototype.writeMessage=y.prototype.cb,y.prototype.bb=function(r,s,n){s!=null&&(_(this,r,3),n(s,this),_(this,r,4))},y.prototype.writeGroup=y.prototype.bb,y.prototype.ka=function(r,s){if(s!=null)for(var n=0;n<s.length;n++){var h=s[n];h!=null&&(_(this,r,0),pt(this.g,h))}},y.prototype.writeRepeatedInt32=y.prototype.ka,y.prototype.Bb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++){var h=s[n];h!=null&&(_(this,r,0),wr(this.g,h))}},y.prototype.writeRepeatedInt64=y.prototype.Bb,y.prototype.Ib=function(r,s){if(s!=null)for(var n=0;n<s.length;n++){var h=s[n];h!=null&&(_(this,r,0),pe(this.g,h))}},y.prototype.writeRepeatedUint32=y.prototype.Ib,y.prototype.Jb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++){var h=s[n];h!=null&&(_(this,r,0),Ct(this.g,h))}},y.prototype.writeRepeatedUint64=y.prototype.Jb,y.prototype.Fb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++){var h=s[n];h!=null&&(_(this,r,0),vr(this.g,h))}},y.prototype.writeRepeatedSint32=y.prototype.Fb,y.prototype.Gb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++){var h=s[n];h!=null&&(_(this,r,0),yr(this.g,h))}},y.prototype.writeRepeatedSint64=y.prototype.Gb,y.prototype.wb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.ua(r,s[n])},y.prototype.writeRepeatedFixed32=y.prototype.wb,y.prototype.xb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.va(r,s[n])},y.prototype.writeRepeatedFixed64=y.prototype.xb,y.prototype.yb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++){var h=r,v=s[n];if(v!=null){e:{for(var b=new P(0,0),L=new P(0,0),N=0;N<v.length;N++){if("0">v[N]||"9"<v[N]){v=null;break e}L.g=parseInt(v[N],10);var Ce=Te(b.g);b=Te(b.h),b.h=b.g,b.g=0,b=Ce.add(b).add(L)}v=b}_(this,h,1),Nt(this.g,v.g,v.h)}}},y.prototype.writeRepeatedFixed64String=y.prototype.yb,y.prototype.Db=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.wa(r,s[n])},y.prototype.writeRepeatedSfixed32=y.prototype.Db,y.prototype.Eb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.xa(r,s[n])},y.prototype.writeRepeatedSfixed64=y.prototype.Eb,y.prototype.zb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.J(r,s[n])},y.prototype.writeRepeatedFloat=y.prototype.zb,y.prototype.ub=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.I(r,s[n])},y.prototype.writeRepeatedDouble=y.prototype.ub,y.prototype.sb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.H(r,s[n])},y.prototype.writeRepeatedBool=y.prototype.sb,y.prototype.vb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.S(r,s[n])},y.prototype.writeRepeatedEnum=y.prototype.vb,y.prototype.Hb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.V(r,s[n])},y.prototype.writeRepeatedString=y.prototype.Hb,y.prototype.tb=function(r,s){if(s!=null)for(var n=0;n<s.length;n++)this.ja(r,s[n])},y.prototype.writeRepeatedBytes=y.prototype.tb,y.prototype.Cb=function(r,s,n){if(s!=null)for(var h=0;h<s.length;h++){var v=Xe(this,r);n(s[h],this),Je(this,v)}},y.prototype.writeRepeatedMessage=y.prototype.Cb,y.prototype.Ab=function(r,s,n){if(s!=null)for(var h=0;h<s.length;h++)_(this,r,3),n(s[h],this),_(this,r,4)},y.prototype.writeRepeatedGroup=y.prototype.Ab,y.prototype.kb=function(r,s){if(s!=null&&s.length){r=Xe(this,r);for(var n=0;n<s.length;n++)pt(this.g,s[n]);Je(this,r)}},y.prototype.writePackedInt32=y.prototype.kb,y.prototype.lb=function(r,s){if(s!=null&&s.length){r=Xe(this,r);for(var n=0;n<s.length;n++)wr(this.g,s[n]);Je(this,r)}},y.prototype.writePackedInt64=y.prototype.lb,y.prototype.qb=function(r,s){if(s!=null&&s.length){r=Xe(this,r);for(var n=0;n<s.length;n++)pe(this.g,s[n]);Je(this,r)}},y.prototype.writePackedUint32=y.prototype.qb,y.prototype.rb=function(r,s){if(s!=null&&s.length){r=Xe(this,r);for(var n=0;n<s.length;n++)Ct(this.g,s[n]);Je(this,r)}},y.prototype.writePackedUint64=y.prototype.rb,y.prototype.ob=function(r,s){if(s!=null&&s.length){r=Xe(this,r);for(var n=0;n<s.length;n++)vr(this.g,s[n]);Je(this,r)}},y.prototype.writePackedSint32=y.prototype.ob,y.prototype.pb=function(r,s){if(s!=null&&s.length){r=Xe(this,r);for(var n=0;n<s.length;n++)yr(this.g,s[n]);Je(this,r)}},y.prototype.writePackedSint64=y.prototype.pb,y.prototype.hb=function(r,s){if(s!=null&&s.length)for(_(this,r,2),pe(this.g,4*s.length),r=0;r<s.length;r++)this.g.A(s[r])},y.prototype.writePackedFixed32=y.prototype.hb,y.prototype.ib=function(r,s){if(s!=null&&s.length)for(_(this,r,2),pe(this.g,8*s.length),r=0;r<s.length;r++)this.g.W(s[r])},y.prototype.writePackedFixed64=y.prototype.ib,y.prototype.mb=function(r,s){if(s!=null&&s.length)for(_(this,r,2),pe(this.g,4*s.length),r=0;r<s.length;r++)this.g.T(s[r])},y.prototype.writePackedSfixed32=y.prototype.mb,y.prototype.nb=function(r,s){if(s!=null&&s.length)for(_(this,r,2),pe(this.g,8*s.length),r=0;r<s.length;r++)this.g.U(s[r])},y.prototype.writePackedSfixed64=y.prototype.nb,y.prototype.jb=function(r,s){if(s!=null&&s.length)for(_(this,r,2),pe(this.g,4*s.length),r=0;r<s.length;r++)this.g.J(s[r])},y.prototype.writePackedFloat=y.prototype.jb,y.prototype.fb=function(r,s){if(s!=null&&s.length)for(_(this,r,2),pe(this.g,8*s.length),r=0;r<s.length;r++)this.g.I(s[r])},y.prototype.writePackedDouble=y.prototype.fb,y.prototype.eb=function(r,s){if(s!=null&&s.length)for(_(this,r,2),pe(this.g,s.length),r=0;r<s.length;r++)this.g.H(s[r])},y.prototype.writePackedBool=y.prototype.eb,y.prototype.gb=function(r,s){if(s!=null&&s.length){r=Xe(this,r);for(var n=0;n<s.length;n++)this.g.S(s[n]);Je(this,r)}},y.prototype.writePackedEnum=y.prototype.gb;function B(r,s){if(this.j=r,this.h=s,this.g={},this.arrClean=!0,0<this.j.length){for(r=0;r<this.j.length;r++){s=this.j[r];var n=s[0];this.g[n.toString()]=new bs(n,s[1])}this.arrClean=!0}}o("jspb.Map",B),B.prototype.l=function(){if(this.arrClean){if(this.h){var r=this.g,s;for(s in r)if(Object.prototype.hasOwnProperty.call(r,s)){var n=r[s].g;n&&n.l()}}}else{for(this.j.length=0,r=xt(this),r.sort(),s=0;s<r.length;s++){var h=this.g[r[s]];(n=h.g)&&n.l(),this.j.push([h.key,h.value])}this.arrClean=!0}return this.j},B.prototype.toArray=B.prototype.l,B.prototype.ta=function(r,s){for(var n=this.l(),h=[],v=0;v<n.length;v++){var b=this.g[n[v][0].toString()];Xt(this,b);var L=b.g;L?(u(s),h.push([b.key,s(r,L)])):h.push([b.key,b.value])}return h},B.prototype.toObject=B.prototype.ta,B.fromObject=function(r,s,n){s=new B([],s);for(var h=0;h<r.length;h++){var v=r[h][0],b=n(r[h][1]);s.set(v,b)}return s};function fi(r){this.h=0,this.g=r}fi.prototype.next=function(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}},typeof Symbol<"u"&&(fi.prototype[Symbol.iterator]=function(){return this}),B.prototype.Ea=function(){return xt(this).length},B.prototype.getLength=B.prototype.Ea,B.prototype.clear=function(){this.g={},this.arrClean=!1},B.prototype.clear=B.prototype.clear,B.prototype.Aa=function(r){r=r.toString();var s=this.g.hasOwnProperty(r);return delete this.g[r],this.arrClean=!1,s},B.prototype.del=B.prototype.Aa,B.prototype.Ba=function(){var r=[],s=xt(this);s.sort();for(var n=0;n<s.length;n++){var h=this.g[s[n]];r.push([h.key,h.value])}return r},B.prototype.getEntryList=B.prototype.Ba,B.prototype.entries=function(){var r=[],s=xt(this);s.sort();for(var n=0;n<s.length;n++){var h=this.g[s[n]];r.push([h.key,Xt(this,h)])}return new fi(r)},B.prototype.entries=B.prototype.entries,B.prototype.keys=function(){var r=[],s=xt(this);s.sort();for(var n=0;n<s.length;n++)r.push(this.g[s[n]].key);return new fi(r)},B.prototype.keys=B.prototype.keys,B.prototype.values=function(){var r=[],s=xt(this);s.sort();for(var n=0;n<s.length;n++)r.push(Xt(this,this.g[s[n]]));return new fi(r)},B.prototype.values=B.prototype.values,B.prototype.forEach=function(r,s){var n=xt(this);n.sort();for(var h=0;h<n.length;h++){var v=this.g[n[h]];r.call(s,Xt(this,v),v.key,this)}},B.prototype.forEach=B.prototype.forEach,B.prototype.set=function(r,s){var n=new bs(r);return this.h?(n.g=s,n.value=s.l()):n.value=s,this.g[r.toString()]=n,this.arrClean=!1,this},B.prototype.set=B.prototype.set;function Xt(r,s){return r.h?(s.g||(s.g=new r.h(s.value)),s.g):s.value}B.prototype.get=function(r){if(r=this.g[r.toString()])return Xt(this,r)},B.prototype.get=B.prototype.get,B.prototype.has=function(r){return r.toString()in this.g},B.prototype.has=B.prototype.has,B.prototype.sa=function(r,s,n,h,v){var b=xt(this);b.sort();for(var L=0;L<b.length;L++){var N=this.g[b[L]];s.o.push(Xe(s,r)),n.call(s,1,N.key),this.h?h.call(s,2,Xt(this,N),v):h.call(s,2,N.value),N=s,u(0<=N.o.length),Je(N,N.o.pop())}},B.prototype.serializeBinary=B.prototype.sa,B.deserializeBinary=function(r,s,n,h,v,b,L){for(;s.M()&&!s.aa();){var N=s.j;N==1?b=n.call(s):N==2&&(r.h?(u(v),L||(L=new r.h),h.call(s,L,v)):L=h.call(s))}u(b!=null),u(L!=null),r.set(b,L)};function xt(r){r=r.g;var s=[],n;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&s.push(n);return s}function bs(r,s){this.key=r,this.value=s,this.g=void 0}function Vi(r,s,n,h,v){this.K=r,this.na=s,this.ctor=n,this.ia=h,this.L=v}o("jspb.ExtensionFieldInfo",Vi),o("jspb.ExtensionFieldBinaryInfo",function(r,s,n,h,v,b){this.ma=r,this.X=s,this.Y=n,this.la=h,this.ya=v,this.Fa=b}),Vi.prototype.C=function(){return!!this.ctor},Vi.prototype.isMessageType=Vi.prototype.C;function E(){}o("jspb.Message",E),E.GENERATE_TO_OBJECT=!0,E.GENERATE_FROM_OBJECT=!0;var Wi=typeof Uint8Array=="function";E.prototype.Da=function(){return this.h},E.prototype.getJsPbMessageId=E.prototype.Da;function Ss(r,s,n,h,v,b){r.i=null,s||(s=n?[n]:[]),r.h=n?String(n):void 0,r.B=n===0?-1:0,r.s=s;e:{if(n=r.s.length,s=-1,n&&(s=n-1,n=r.s[s],!(n===null||typeof n!="object"||Array.isArray(n)||Wi&&n instanceof Uint8Array))){r.F=s-r.B,r.m=n;break e}-1<h?(r.F=Math.max(h,s+1-r.B),r.m=null):r.F=Number.MAX_VALUE}if(r.g={},v)for(h=0;h<v.length;h++)s=v[h],s<r.F?(s+=r.B,r.s[s]=r.s[s]||wi):($i(r),r.m[s]=r.m[s]||wi);if(b&&b.length)for(h=0;h<b.length;h++)br(r,b[h])}E.initialize=Ss;var wi=Object.freeze?Object.freeze([]):[];function $i(r){var s=r.F+r.B;r.s[s]||(r.m=r.s[s]={})}function Cs(r,s,n){for(var h=[],v=0;v<r.length;v++)h[v]=s.call(r[v],n,r[v]);return h}E.toObjectList=Cs,E.toObjectExtension=function(r,s,n,h,v){for(var b in n){var L=n[b],N=h.call(r,L);if(N!=null){for(var Ce in L.na)if(L.na.hasOwnProperty(Ce))break;s[Ce]=L.ia?L.L?Cs(N,L.ia,v):L.ia(v,N):N}}},E.serializeBinaryExtensions=function(r,s,n,h){for(var v in n){var b=n[v],L=b.ma;if(!b.Y)throw Error("Message extension present that was generated without binary serialization support");var N=h.call(r,L);if(N!=null)if(L.C())if(b.la)b.Y.call(s,L.K,N,b.la);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");else b.Y.call(s,L.K,N)}},E.readBinaryExtension=function(r,s,n,h,v){var b=n[s.j];if(b){if(n=b.ma,!b.X)throw Error("Deserializing extension whose generated code does not support binary format");if(n.C()){var L=new n.ctor;b.X.call(s,L,b.ya)}else L=b.X.call(s);n.L&&!b.Fa?(s=h.call(r,n))?s.push(L):v.call(r,n,[L]):v.call(r,n,L)}else Mt(s)};function fe(r,s){if(s<r.F){s+=r.B;var n=r.s[s];return n===wi?r.s[s]=[]:n}if(r.m)return n=r.m[s],n===wi?r.m[s]=[]:n}E.getField=fe,E.getRepeatedField=function(r,s){return fe(r,s)};function xs(r,s){return r=fe(r,s),r==null?r:+r}E.getOptionalFloatingPointField=xs;function Ts(r,s){return r=fe(r,s),r==null?r:!!r}E.getBooleanField=Ts,E.getRepeatedFloatingPointField=function(r,s){var n=fe(r,s);if(r.g||(r.g={}),!r.g[s]){for(var h=0;h<n.length;h++)n[h]=+n[h];r.g[s]=!0}return n},E.getRepeatedBooleanField=function(r,s){var n=fe(r,s);if(r.g||(r.g={}),!r.g[s]){for(var h=0;h<n.length;h++)n[h]=!!n[h];r.g[s]=!0}return n};function Rs(r){if(r==null||typeof r=="string")return r;if(Wi&&r instanceof Uint8Array){var s;s===void 0&&(s=0),f(),s=d[s];const L=Array(Math.floor(r.length/3)),N=s[64]||"";let Ce=0,Jt=0;for(;Ce<r.length-2;Ce+=3){var n=r[Ce],h=r[Ce+1],v=r[Ce+2],b=s[n>>2];n=s[(n&3)<<4|h>>4],h=s[(h&15)<<2|v>>6],v=s[v&63],L[Jt++]=b+n+h+v}switch(b=0,v=N,r.length-Ce){case 2:b=r[Ce+1],v=s[(b&15)<<2]||N;case 1:r=r[Ce],L[Jt]=s[r>>2]+s[(r&3)<<4|b>>4]+v+N}return L.join("")}return C("Cannot coerce to b64 string: "+t(r)),null}E.bytesAsB64=Rs;function Is(r){return r==null||r instanceof Uint8Array?r:typeof r=="string"?p(r):(C("Cannot coerce to Uint8Array: "+t(r)),null)}E.bytesAsU8=Is,E.bytesListAsB64=function(r){return Es(r),r.length&&typeof r[0]!="string"?c(r,Rs):r},E.bytesListAsU8=function(r){return Es(r),!r.length||r[0]instanceof Uint8Array?r:c(r,Is)};function Es(r){if(r&&1<r.length){var s=t(r[0]);l(r,function(n){t(n)!=s&&C("Inconsistent type in JSPB repeated field array. Got "+t(n)+" expected "+s)})}}function As(r,s,n){return r=fe(r,s),r??n}E.getFieldWithDefault=As,E.getBooleanFieldWithDefault=function(r,s,n){return r=Ts(r,s),r??n},E.getFloatingPointFieldWithDefault=function(r,s,n){return r=xs(r,s),r??n},E.getFieldProto3=As,E.getMapField=function(r,s,n,h){if(r.i||(r.i={}),s in r.i)return r.i[s];var v=fe(r,s);if(!v){if(n)return;v=[],mt(r,s,v)}return r.i[s]=new B(v,h)};function mt(r,s,n){return I(r),s<r.F?r.s[s+r.B]=n:($i(r),r.m[s]=n),r}E.setField=mt,E.setProto3IntField=function(r,s,n){return Bt(r,s,n,0)},E.setProto3FloatField=function(r,s,n){return Bt(r,s,n,0)},E.setProto3BooleanField=function(r,s,n){return Bt(r,s,n,!1)},E.setProto3StringField=function(r,s,n){return Bt(r,s,n,"")},E.setProto3BytesField=function(r,s,n){return Bt(r,s,n,"")},E.setProto3EnumField=function(r,s,n){return Bt(r,s,n,0)},E.setProto3StringIntField=function(r,s,n){return Bt(r,s,n,"0")};function Bt(r,s,n,h){return I(r),n!==h?mt(r,s,n):s<r.F?r.s[s+r.B]=null:($i(r),delete r.m[s]),r}function kr(r,s,n,h){return I(r),s=fe(r,s),h!=null?s.splice(h,0,n):s.push(n),r}E.addToRepeatedField=kr;function Ls(r,s,n,h){return I(r),(n=br(r,n))&&n!==s&&h!==void 0&&(r.i&&n in r.i&&(r.i[n]=void 0),mt(r,n,void 0)),mt(r,s,h)}E.setOneofField=Ls;function br(r,s){for(var n,h,v=0;v<s.length;v++){var b=s[v],L=fe(r,b);L!=null&&(n=b,h=L,mt(r,b,void 0))}return n?(mt(r,n,h),n):0}E.computeOneofCase=br,E.getWrapperField=function(r,s,n,h){if(r.i||(r.i={}),!r.i[n]){var v=fe(r,n);(h||v)&&(r.i[n]=new s(v))}return r.i[n]},E.getRepeatedWrapperField=function(r,s,n){return qs(r,s,n),s=r.i[n],s==wi&&(s=r.i[n]=[]),s};function qs(r,s,n){if(r.i||(r.i={}),!r.i[n]){for(var h=fe(r,n),v=[],b=0;b<h.length;b++)v[b]=new s(h[b]);r.i[n]=v}}E.setWrapperField=function(r,s,n){I(r),r.i||(r.i={});var h=n&&n.l();return r.i[s]=n,mt(r,s,h)},E.setOneofWrapperField=function(r,s,n,h){I(r),r.i||(r.i={});var v=h&&h.l();return r.i[s]=h,Ls(r,s,n,v)},E.setRepeatedWrapperField=function(r,s,n){I(r),r.i||(r.i={}),n=n||[];for(var h=[],v=0;v<n.length;v++)h[v]=n[v].l();return r.i[s]=n,mt(r,s,h)},E.addToRepeatedWrapperField=function(r,s,n,h,v){qs(r,h,s);var b=r.i[s];return b||(b=r.i[s]=[]),n=n||new h,r=fe(r,s),v!=null?(b.splice(v,0,n),r.splice(v,0,n.l())):(b.push(n),r.push(n.l())),n},E.toMap=function(r,s,n,h){for(var v={},b=0;b<r.length;b++)v[s.call(r[b])]=n?n.call(r[b],h,r[b]):r[b];return v};function Fs(r){if(r.i)for(var s in r.i){var n=r.i[s];if(Array.isArray(n))for(var h=0;h<n.length;h++)n[h]&&n[h].l();else n&&n.l()}}E.prototype.l=function(){return Fs(this),this.s},E.prototype.toArray=E.prototype.l,E.prototype.toString=function(){return Fs(this),this.s.toString()},E.prototype.getExtension=function(r){if(this.m){this.i||(this.i={});var s=r.K;if(r.L){if(r.C())return this.i[s]||(this.i[s]=c(this.m[s]||[],function(n){return new r.ctor(n)})),this.i[s]}else if(r.C())return!this.i[s]&&this.m[s]&&(this.i[s]=new r.ctor(this.m[s])),this.i[s];return this.m[s]}},E.prototype.getExtension=E.prototype.getExtension,E.prototype.ab=function(r,s){this.i||(this.i={}),$i(this);var n=r.K;return r.L?(s=s||[],r.C()?(this.i[n]=s,this.m[n]=c(s,function(h){return h.l()})):this.m[n]=s):r.C()?(this.i[n]=s,this.m[n]=s&&s.l()):this.m[n]=s,this},E.prototype.setExtension=E.prototype.ab,E.difference=function(r,s){if(!(r instanceof s.constructor))throw Error("Messages have different types.");var n=r.l();s=s.l();var h=[],v=0,b=n.length>s.length?n.length:s.length;for(r.h&&(h[0]=r.h,v=1);v<b;v++)vi(n[v],s[v])||(h[v]=s[v]);return new r.constructor(h)},E.equals=function(r,s){return r==s||!(!r||!s)&&r instanceof s.constructor&&vi(r.l(),s.l())};function Sr(r,s){r=r||{},s=s||{};var n={},h;for(h in r)n[h]=0;for(h in s)n[h]=0;for(h in n)if(!vi(r[h],s[h]))return!1;return!0}E.compareExtensions=Sr;function vi(r,s){if(r==s)return!0;if(!i(r)||!i(s))return typeof r=="number"&&isNaN(r)||typeof s=="number"&&isNaN(s)?String(r)==String(s):!1;if(r.constructor!=s.constructor)return!1;if(Wi&&r.constructor===Uint8Array){if(r.length!=s.length)return!1;for(var n=0;n<r.length;n++)if(r[n]!=s[n])return!1;return!0}if(r.constructor===Array){var h=void 0,v=void 0,b=Math.max(r.length,s.length);for(n=0;n<b;n++){var L=r[n],N=s[n];if(L&&L.constructor==Object&&(u(h===void 0),u(n===r.length-1),h=L,L=void 0),N&&N.constructor==Object&&(u(v===void 0),u(n===s.length-1),v=N,N=void 0),!vi(L,N))return!1}return h||v?(h=h||{},v=v||{},Sr(h,v)):!0}if(r.constructor===Object)return Sr(r,s);throw Error("Invalid type in JSPB array")}E.compareFields=vi,E.prototype.za=function(){return Gi(this)},E.prototype.cloneMessage=E.prototype.za,E.prototype.clone=function(){return Gi(this)},E.prototype.clone=E.prototype.clone,E.clone=function(r){return Gi(r)};function Gi(r){return new r.constructor(Cr(r.l()))}E.copyInto=function(r,s){I(r),I(s),u(r.constructor==s.constructor,"Copy source and target message should have the same type."),r=Gi(r);for(var n=s.l(),h=r.l(),v=n.length=0;v<h.length;v++)n[v]=h[v];s.i=r.i,s.m=r.m};function Cr(r){if(Array.isArray(r)){for(var s=Array(r.length),n=0;n<r.length;n++){var h=r[n];h!=null&&(s[n]=typeof h=="object"?Cr(u(h)):h)}return s}if(Wi&&r instanceof Uint8Array)return new Uint8Array(r);s={};for(n in r)h=r[n],h!=null&&(s[n]=typeof h=="object"?Cr(u(h)):h);return s}E.registerMessageType=function(r,s){s.Nb=r};function ji(r){Ss(this,r,0,-1,Gn,null)}a(ji,E);var Gn=[1,3];ji.prototype.ta=function(r){var s,n={Qb:(s=fe(this,1))==null?void 0:s,Pb:(s=fe(this,3))==null?void 0:s};return r&&(n.Mb=this),n};function Hs(r){r=new S(r);for(var s=new ji;r.M()&&!r.aa();)switch(r.j){case 1:for(var n=r.Z()?r.ea():[r.G()],h=0;h<n.length;h++)kr(s,1,n[h],void 0);break;case 3:for(n=r.Z()?r.ea():[r.G()],h=0;h<n.length;h++)kr(s,3,n[h],void 0);break;default:Mt(r)}return s}ji.prototype.sa=function(){var r=new y,s=fe(this,1);return 0<s.length&&r.ka(1,s),s=fe(this,3),0<s.length&&r.ka(3,s),r.oa()},o("parseClientVariations",function(r){var s="";try{s=atob(r)}catch{}r=[];for(let n=0;n<s.length;n++)r.push(s.charCodeAt(n));s=null;try{s=Hs(r)}catch{s=Hs([])}return{variationIds:fe(s,1),triggerVariationIds:fe(s,3)}}),o("formatClientVariations",function(r,s="Active Google-visible variation IDs on this client. These are reported for analysis, but do not directly affect any server-side behavior.",n="Active Google-visible variation IDs on this client that trigger server-side behavior. These are reported for analysis *and* directly affect server-side behavior."){const h=r.variationIds;r=r.triggerVariationIds;const v=["message ClientVariations {"];return h.length&&v.push(`  // ${s}`,`  repeated int32 variation_id = [${h.join(", ")}];`),r.length&&v.push(`  // ${n}`,`  repeated int32 trigger_variation_id = [${r.join(", ")}];`),v.push("}"),v.join(`
`)})}).call(ds);function ad(w){return ds.parseClientVariations(w)}function ld(w){return ds.formatClientVariations(w)}const $o=new CSSStyleSheet;$o.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

.row {
  display: flex;
  line-height: 20px;
  padding-left: 8px;
  gap: 12px;
  user-select: text;
}

.row.header-editable {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.header-name {
  color: var(--sys-color-on-surface);
  font-weight: 400;
  width: 30%;
  min-width: 160px;
  max-width: 240px;
  flex-shrink: 0;
  text-transform: capitalize;
  overflow-wrap: break-word;
}

.header-name,
.header-value {
  &::selection {
    color: var(--sys-color-on-tonal-container);
    background-color: var(--sys-color-tonal-container);
  }
}

.header-name.pseudo-header {
  text-transform: none;
}

.header-editable .header-name {
  color: var(--sys-color-token-property-special);
}

.row.header-deleted .header-name {
  color: var(--sys-color-token-subtle);
}

.header-value {
  display: flex;
  overflow-wrap: anywhere;
  margin-inline-end: 14px;
}

.header-badge-text {
  font-variant: small-caps;
  font-weight: 500;
  white-space: pre-wrap;
  word-break: break-all;
  text-transform: none;
}

.header-badge {
  display: inline;
  background-color: var(--sys-color-error);
  color: var(--sys-color-on-error);
  border-radius: 100vh;
  padding-left: 6px;
  padding-right: 6px;
}

.call-to-action {
  background-color: var(--sys-color-neutral-container);
  padding: 8px;
  border-radius: 5px;
  margin: 4px;
}

.call-to-action-body {
  padding: 6px 0;
  margin-left: 9.5px;
  border-left: 2px solid var(--issue-color-yellow);
  padding-left: 18px;
  line-height: 20px;
}

.call-to-action .explanation {
  font-weight: bold;
}

.call-to-action code {
  font-size: 90%;
}

.call-to-action .example .comment::before {
  content: " — ";
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.explanation .link {
  font-weight: normal;
}

.inline-icon {
  vertical-align: middle;
}

.row-flex-icon {
  margin: 2px 5px 0;
}

.header-value code {
  display: block;
  white-space: pre-wrap;
  font-size: 90%;
  color: var(--sys-color-token-subtle);
}

x-link .inline-icon { /* stylelint-disable-line selector-type-no-unknown */
  padding-right: 3px;
}

.header-highlight {
  background-color: var(--sys-color-yellow-container);
}

.header-warning {
  color: var(--sys-color-error);
}

.header-overridden {
  background-color: var(--sys-color-tertiary-container);
  border-left: 3px solid var(--sys-color-tertiary);
  padding-left: 5px;
}

.header-deleted {
  background-color: var(--sys-color-surface-error);
  border-left: 3px solid var(--sys-color-error-bright);
  color: var(--sys-color-token-subtle);
  text-decoration: line-through;
}

.header-highlight.header-overridden {
  background-color: var(--sys-color-yellow-container);
  border-left: 3px solid var(--sys-color-tertiary);
  padding-left: 5px;
}

.inline-button {
  vertical-align: middle;
}

.row .inline-button {
  opacity: 0%;
  visibility: hidden;
  transition: opacity 200ms;
  padding-left: 2px;
}

.row.header-overridden:focus-within .inline-button,
.row.header-overridden:hover .inline-button {
  opacity: 100%;
  visibility: visible;
}

.row:hover .inline-button.enable-editing {
  opacity: 100%;
  visibility: visible;
}

.flex-right {
  margin-left: auto;
}

.flex-columns {
  flex-direction: column;
}

/*# sourceURL=HeaderSectionRow.css */
`);const{render:dd,html:Ee}=Ht,at={activeClientExperimentVariation:"Active `client experiment variation IDs`.",activeClientExperimentVariationIds:"Active `client experiment variation IDs` that trigger server-side behavior.",decoded:"Decoded:",editHeader:"Override header",headerNamesOnlyLetters:"Header names should contain only letters, digits, hyphens or underscores",learnMore:"Learn more",learnMoreInTheIssuesTab:"Learn more in the issues tab",reloadPrompt:"Refresh the page/request for these changes to take effect",removeOverride:"Remove this header override"},cd=Z("panels/network/components/HeaderSectionRow.ts",at),Dt=Q.bind(void 0,cd),hd=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%2017c-.417%200-.77-.146-1.062-.438A1.444%201.444%200%200%201%205%2015.5v-10H4V4h4V3h4v1h4v1.5h-1v10c0%20.417-.146.77-.438%201.062A1.444%201.444%200%200%201%2013.5%2017h-7Zm7-11.5h-7v10h7v-10ZM8%2014h1.5V7H8v7Zm2.5%200H12V7h-1.5v7Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),ud=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2015.5h.875l7.875-7.875-.438-.437-.437-.438L4.5%2014.625v.875ZM3%2017v-3L13.708%203.292A.965.965%200%200%201%2014.417%203c.277%200%20.513.097.708.292l1.583%201.583c.195.195.292.43.292.708a.965.965%200%200%201-.292.709L6%2017H3Zm10.25-9.375-.438-.437-.437-.438.875.875Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),Gr=w=>/^[a-z0-9_\-]+$/i.test(w),ke=(w,e)=>w?.replaceAll(/\s/g," ")===e?.replaceAll(/\s/g," ");class lr extends Event{static eventName="headeredited";headerName;headerValue;constructor(e,t){super(lr.eventName,{}),this.headerName=e,this.headerValue=t}}class cs extends Event{static eventName="headerremoved";headerName;headerValue;constructor(e,t){super(cs.eventName,{}),this.headerName=e,this.headerValue=t}}class hs extends Event{static eventName="enableheaderediting";constructor(){super(hs.eventName,{})}}class pd extends HTMLElement{#e=this.attachShadow({mode:"open"});#t=null;#i=this.#a.bind(this);#r=!1;#s=!0;connectedCallback(){this.#e.adoptedStyleSheets=[$o]}set data(e){this.#t=e.header,this.#r=this.#t.originalValue!==void 0&&this.#t.value!==this.#t.originalValue,this.#s=Gr(this.#t.name),ii(this,this.#i)}#a(){if(!bo(this))throw new Error("HeaderSectionRow render was not scheduled");if(!this.#t)return;const e=Tr({row:!0,"header-highlight":!!this.#t.highlight,"header-overridden":!!this.#t.isOverride||this.#r,"header-editable":this.#t.valueEditable===1,"header-deleted":!!this.#t.isDeleted}),t=Tr({"header-name":!0,"pseudo-header":this.#t.name.startsWith(":")}),i=Tr({"header-value":!0,"header-warning":!!this.#t.headerValueIncorrect,"flex-columns":this.#t.name==="x-client-data"&&!this.#t.isResponseHeader}),o=this.#t.nameEditable&&this.#t.valueEditable===1,a=this.#t.nameEditable||this.#t.isDeleted||this.#r;dd(Ee`
      <div class=${e}>
        <div class=${t}>
          ${this.#t.headerNotSet?Ee`<div class="header-badge header-badge-text">${Le("not-set")}</div> `:K}
          ${o&&!this.#s?Ee`<devtools-icon class="inline-icon disallowed-characters" title=${at.headerNamesOnlyLetters} .data=${{iconName:"cross-circle-filled",width:"16px",height:"16px",color:"var(--icon-error)"}}>
            </devtools-icon>`:K}
          ${o&&!this.#t.isDeleted?Ee`<devtools-editable-span
              @focusout=${this.#f}
              @keydown=${this.#p}
              @input=${this.#c}
              @paste=${this.#v}
              .data=${{value:this.#t.name}}
            ></devtools-editable-span>`:this.#t.name}:
        </div>
        <div
          class=${i}
          @copy=${()=>_e.actionTaken(ct.NetworkPanelCopyValue)}
        >
          ${this.#o()}
        </div>
        ${a?Ee`<devtools-icon class="row-flex-icon flex-right" title=${at.reloadPrompt} .data=${{iconName:"info",width:"16px",height:"16px",color:"var(--icon-default)"}}>
          </devtools-icon>`:K}
      </div>
      ${this.#l(this.#t.blockedDetails)}
    `,this.#e,{host:this}),this.#t.highlight&&this.scrollIntoView({behavior:"auto"})}#o(){if(!this.#t)return K;if(this.#t.name==="x-client-data"&&!this.#t.isResponseHeader)return this.#n(this.#t);if(this.#t.isDeleted||this.#t.valueEditable!==1){const e=this.#t.isResponseHeader&&!this.#t.isDeleted&&this.#t.valueEditable!==2;return Ee`
      ${this.#t.value||""}
      ${this.#h(this.#t)}
      ${e?Ee`
        <devtools-button
          title=${Dt(at.editHeader)}
          .size=${"SMALL"}
          .iconUrl=${ud}
          .variant=${"icon"}
          @click=${()=>{this.dispatchEvent(new hs)}}
          jslog=${sr("enable-header-overrides").track({click:!0})}
          class="enable-editing inline-button"
        ></devtools-button>
      `:K}
    `}return Ee`
      <devtools-editable-span
        @focusout=${this.#m}
        @input=${this.#u}
        @paste=${this.#u}
        @keydown=${this.#p}
        .data=${{value:this.#t.value||""}}
      ></devtools-editable-span>
      ${this.#h(this.#t)}
      <devtools-button
        title=${Dt(at.removeOverride)}
        .size=${"SMALL"}
        .iconUrl=${hd}
        .variant=${"icon"}
        class="remove-header inline-button"
        @click=${this.#g}
        jslog=${sr("remove-header-override").track({click:!0})}
      ></devtools-button>
    `}#n(e){const t=ad(e.value||""),i=ld(t,Dt(at.activeClientExperimentVariation),Dt(at.activeClientExperimentVariationIds));return Ee`
      <div>${e.value||""}</div>
      <div>${Dt(at.decoded)}</div>
      <code>${i}</code>
    `}focus(){requestAnimationFrame(()=>{this.#e.querySelector(".header-name devtools-editable-span")?.focus()})}#h(e){if(e.name==="set-cookie"&&e.setCookieBlockedReasons){const t=e.setCookieBlockedReasons.map(Xi).join(`
`);return Ee`
        <devtools-icon class="row-flex-icon" title=${t} .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
        </devtools-icon>
      `}return K}#l(e){return e?Ee`
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation">${e.explanation()}</div>
          ${e.examples.map(t=>Ee`
            <div class="example">
              <code>${t.codeSnippet}</code>
              ${t.comment?Ee`
                <span class="comment">${t.comment()}</span>
              `:""}
            </div>
          `)}
          ${this.#d(e)}
        </div>
      </div>
    `:K}#d(e){return e?.reveal?Ee`
        <div class="devtools-link" @click=${e.reveal}>
          <devtools-icon class="inline-icon" .data=${{iconName:"issue-exclamation-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
          </devtools-icon
          >${Dt(at.learnMoreInTheIssuesTab)}
        </div>
      `:e?.link?Ee`
        <x-link href=${e.link.url} class="link">
          <devtools-icon class="inline-icon" .data=${{iconName:"open-externally",color:"var(--icon-link)",width:"20px",height:"20px"}}>
          </devtools-icon
          >${Dt(at.learnMore)}
        </x-link>
      `:K}#m(e){const t=e.target;if(!this.#t)return;const i=t.value.trim();ke(i,this.#t.value?.trim())||(this.#t.value=i,this.dispatchEvent(new lr(this.#t.name,i)),ii(this,this.#i)),window.getSelection()?.removeAllRanges(),this.#t.originalName=""}#f(e){const t=e.target;if(!this.#t)return;const i=et(t.value.trim());i===""?t.value=this.#t.name:ke(i,this.#t.name.trim())||(this.#t.name=i,this.dispatchEvent(new lr(i,this.#t.value||"")),ii(this,this.#i)),window.getSelection()?.removeAllRanges()}#g(){if(!this.#t)return;const e=this.#e.querySelector(".header-value devtools-editable-span");this.#t.originalValue&&(e.value=this.#t?.originalValue),this.dispatchEvent(new cs(this.#t.name,this.#t.value||""))}#p(e){const t=e,i=e.target;if(t.key==="Escape"){if(e.consume(),i.matches(".header-name devtools-editable-span"))i.value=this.#t?.name||"",this.#c(e);else if(i.matches(".header-value devtools-editable-span")&&(i.value=this.#t?.value||"",this.#u(e),this.#t?.originalName)){const o=this.#e.querySelector(".header-name devtools-editable-span");o.value=this.#t.originalName,this.#t.originalName="",o.dispatchEvent(new Event("input")),o.focus();return}i.blur()}}#c(e){const t=e.target,i=Gr(t.value);this.#s!==i&&(this.#s=i,ii(this,this.#i))}#u(e){const t=e.target,i=this.#t?.originalValue!==void 0&&!ke(this.#t?.originalValue||"",t.value);this.#r!==i&&(this.#r=i,this.#t&&(this.#t.highlight=!1),ii(this,this.#i))}#v(e){if(!e.clipboardData)return;const t=e.target,i=e.clipboardData.getData("text/plain")||"",o=i.indexOf(":");if(o<1){t.value=i,e.preventDefault(),t.dispatchEvent(new Event("input",{bubbles:!0}));return}this.#t&&(this.#t.originalName=this.#t.name);const a=i.substring(o+1,i.length).trim(),l=i.substring(0,o);t.value=l,t.dispatchEvent(new Event("input"));const c=this.#e.querySelector(".header-value devtools-editable-span");c&&(c.focus(),c.value=a,c.dispatchEvent(new Event("input"))),e.preventDefault()}}customElements.define("devtools-header-section-row",pd);const Go=new CSSStyleSheet;Go.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

devtools-header-section-row:last-of-type {
  margin-bottom: 10px;
}

devtools-header-section-row:first-of-type {
  margin-top: 2px;
}

.call-to-action {
  background-color: var(--sys-color-neutral-container);
  padding: 8px;
  border-radius: 5px;
  margin: 4px;
}

.call-to-action-body {
  padding: 6px 0;
  margin-left: 9.5px;
  border-left: 2px solid var(--issue-color-yellow);
  padding-left: 18px;
  line-height: 20px;
}

.call-to-action .explanation {
  font-weight: bold;
}

.call-to-action code {
  font-size: 90%;
}

.call-to-action .example .comment::before {
  content: " — ";
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.explanation .link {
  font-weight: normal;
}

.inline-icon {
  vertical-align: middle;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=RequestHeaderSection.css */
`);const{render:md,html:Lr}=Ht,xi={learnMore:"Learn more",provisionalHeadersAreShownDisableCache:"Provisional headers are shown. Disable cache to see full headers.",onlyProvisionalHeadersAre:"Only provisional headers are available because this request was not sent over the network and instead was served from a local cache, which doesn’t store the original request headers. Disable cache to see full request headers.",provisionalHeadersAreShown:"Provisional headers are shown."},gd=Z("panels/network/components/RequestHeaderSection.ts",xi),_i=Q.bind(void 0,gd);class fd extends HTMLElement{#e=this.attachShadow({mode:"open"});#t;#i=[];connectedCallback(){this.#e.adoptedStyleSheets=[Go]}set data(e){this.#t=e.request,this.#i=this.#t.requestHeaders().map(t=>({name:et(t.name),value:t.value,valueEditable:2})),this.#i.sort((t,i)=>cr(t.name,i.name)),e.toReveal?.section==="Request"&&this.#i.filter(t=>t.name===e.toReveal?.header?.toLowerCase()).forEach(t=>{t.highlight=!0}),this.#r()}#r(){this.#t&&md(Lr`
      ${this.#s()}
      ${this.#i.map(e=>Lr`
        <devtools-header-section-row
          .data=${{header:e}}
          jslog=${So("request-header")}
        ></devtools-header-section-row>
      `)}
    `,this.#e,{host:this})}#s(){if(!this.#t||this.#t.requestHeadersText()!==void 0)return K;let e,t="";return this.#t.cachedInMemory()||this.#t.cached()?(e=_i(xi.provisionalHeadersAreShownDisableCache),t=_i(xi.onlyProvisionalHeadersAre)):e=_i(xi.provisionalHeadersAreShown),Lr`
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation" title=${t}>
            <devtools-icon class="inline-icon" .data=${{iconName:"warning-filled",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
            </devtools-icon>
            ${e} <x-link href="https://developer.chrome.com/docs/devtools/network/reference/#provisional-headers" class="link">${_i(xi.learnMore)}</x-link>
          </div>
        </div>
      </div>
    `}}customElements.define("devtools-request-header-section",fd);const us=new CSSStyleSheet;us.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.header {
  background-color: var(--sys-color-surface1);
  border-bottom: 1px solid var(--sys-color-divider);
  border-top: 1px solid var(--sys-color-divider);
  line-height: 25px;
  padding: 0 5px;
}

.header::marker {
  font-size: 11px;
  line-height: 1;
}

.header:focus {
  background-color: var(--sys-color-state-header-hover);
}

details[open] .header-count {
  display: none;
}

details .hide-when-closed {
  display: none;
}

details[open] .hide-when-closed {
  display: block;
}

details summary input {
  vertical-align: middle;
}

.row {
  display: flex;
  line-height: 20px;
  padding-left: 8px;
  gap: 12px;
  user-select: text;
}

div.raw-headers-row {
  display: block;
}

.row:first-of-type {
  margin-top: 2px;
}

.row:last-child {
  margin-bottom: 10px;
}

.header-name {
  color: var(--sys-color-on-surface);
  font-weight: 400;
  width: 30%;
  min-width: 160px;
  max-width: 240px;
  flex-shrink: 0;
  text-transform: capitalize;
}

.header-value {
  word-break: break-all;
  display: flex;
  align-items: center;
  gap: 2px;
}

.header-name,
.header-value {
  &::selection {
    color: var(--sys-color-on-tonal-container);
    background-color: var(--sys-color-tonal-container);
  }
}

.green-circle::before,
.red-circle::before,
.yellow-circle::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  vertical-align: text-top;
  margin-right: 2px;
}

.green-circle::before {
  background-color: var(--sys-color-green-bright);
}

.red-circle::before {
  background-color: var(--sys-color-error-bright);
}

.yellow-circle::before {
  background-color: var(--issue-color-yellow);
}

.status-with-comment {
  color: var(--sys-color-token-subtle);
}

.raw-headers {
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  white-space: pre-wrap;
  word-break: break-all;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.inline-icon {
  vertical-align: middle;
}

.header-grid-container {
  display: inline-grid;
  grid-template-columns: 156px 50px 1fr;
  grid-gap: 4px;
  /* Make this fit into the same line as the summary marker */
  width: calc(100% - 15px);
}

.header-grid-container div:last-child {
  text-align: right;
}

.header .devtools-link {
  color: var(--sys-color-on-surface);
}

x-link { /* stylelint-disable-line selector-type-no-unknown */
  position: relative;
}

x-link .inline-icon { /* stylelint-disable-line selector-type-no-unknown */
  padding-right: 3px;
}

.purple.dot::before {
  background-color: var(--sys-color-purple-bright);
  content: var(--image-file-empty);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  outline: 1px solid var(--icon-gap-toolbar);
  left: 9px;
  position: absolute;
  top: 11px;
  z-index: 1;
}

summary label input[type="checkbox"] {
  margin-top: 1px;
}

/*# sourceURL=RequestHeadersView.css */
`);const jo=new CSSStyleSheet;jo.replaceSync(`/*
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

devtools-header-section-row:last-of-type {
  margin-bottom: 10px;
}

devtools-header-section-row:first-of-type {
  margin-top: 2px;
}

.add-header-button {
  margin: -4px 0 10px 5px;
}

/*# sourceURL=ResponseHeaderSection.css */
`);const{render:zo,html:Ei}=Ht,$e={addHeader:"Add header",chooseThisOptionIfTheResourceAnd:"Choose this option if the resource and the document are served from the same site.",onlyChooseThisOptionIfAn:"Only choose this option if an arbitrary website including this resource does not impose a security risk.",thisDocumentWasBlockedFrom:"The document was blocked from loading in a popup opened by a sandboxed iframe because this document specified a cross-origin opener policy.",toEmbedThisFrameInYourDocument:"To embed this frame in your document, the response needs to enable the cross-origin embedder policy by specifying the following response header:",toUseThisResourceFromADifferent:"To use this resource from a different origin, the server needs to specify a cross-origin resource policy in the response headers:",toUseThisResourceFromADifferentOrigin:"To use this resource from a different origin, the server may relax the cross-origin resource policy response header:",toUseThisResourceFromADifferentSite:"To use this resource from a different site, the server may relax the cross-origin resource policy response header:"},_o=Z("panels/network/components/ResponseHeaderSection.ts",$e),wd=Q.bind(void 0,_o),it=hr.bind(void 0,_o),vd=new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.25%2016v-5.25H4v-1.5h5.25V4h1.5v5.25H16v1.5h-5.25V16h-1.5Z'%20fill='%23000'/%3e%3c/svg%3e",import.meta.url).toString(),er="ResponseHeaderSection";class Ko extends HTMLElement{shadow=this.attachShadow({mode:"open"});headerDetails=[];connectedCallback(){this.shadow.adoptedStyleSheets=[jo]}setHeaders(e){e.sort(function(t,i){return cr(t.name.toLowerCase(),i.name.toLowerCase())}),this.headerDetails=e.map(t=>({name:et(t.name),value:t.value.replace(/\s/g," ")}))}highlightHeaders(e){e.toReveal?.section==="Response"&&this.headerDetails.filter(t=>ke(t.name,e.toReveal?.header?.toLowerCase())).forEach(t=>{t.highlight=!0})}}class yd extends Ko{#e;set data(e){this.#e=e.request,this.setHeaders(this.#e.earlyHintsHeaders),this.highlightHeaders(e),this.#t()}#t(){this.#e&&zo(Ei`
      ${this.headerDetails.map(e=>Ei`
        <devtools-header-section-row .data=${{header:e}}></devtools-header-section-row>
      `)}
    `,this.shadow,{host:this})}}customElements.define("devtools-early-hints-header-section",yd);class kd extends Ko{#e;#t=[];#i=null;#r=[];#s=0;set data(e){this.#e=e.request,this.#s=It.isForbiddenNetworkUrl(this.#e.url())?2:0;const t=this.#e.sortedResponseHeaders.concat(this.#e.setCookieHeaders);this.setHeaders(t);const i=[];if(this.#e.wasBlocked()){const d=bd.get(this.#e.blockedReason());if(d){if(ql(this.#e,"CrossOriginEmbedderPolicy")){const g=()=>{_e.issuesPanelOpenedFrom(1),this.#e&&ss(this.#e,"CrossOriginEmbedderPolicy")};d.blockedDetails&&(d.blockedDetails.reveal=g)}i.push(d)}}function o(d,g){let p=0,m=0;const f=[];for(;p<d.length&&m<g.length;)d[p].name<g[m].name?f.push({...d[p++],headerNotSet:!1}):d[p].name>g[m].name?f.push({...g[m++],headerNotSet:!0}):f.push({...g[m++],...d[p++],headerNotSet:!1});for(;p<d.length;)f.push({...d[p++],headerNotSet:!1});for(;m<g.length;)f.push({...g[m++],headerNotSet:!0});return f}this.headerDetails=o(this.headerDetails,i);const a=this.#e.blockedResponseCookies(),l=new Map(a?.map(d=>[d.cookieLine.replace(/\s/g," "),d.blockedReasons]));for(const d of this.headerDetails)if(d.name==="set-cookie"&&d.value){const g=l.get(d.value);g&&(d.setCookieBlockedReasons=g)}this.highlightHeaders(e);const c=this.#e.getAssociatedData(er);c?this.#t=c:(this.#t=this.headerDetails.map(d=>({name:d.name,value:d.value,originalValue:d.value,valueEditable:this.#s})),this.#n()),this.#o(),this.#e.setAssociatedData(er,this.#t),this.#c()}#a(){this.#e&&(this.#s=It.isForbiddenNetworkUrl(this.#e.url())?2:0,this.#t=this.headerDetails.map(e=>({name:e.name,value:e.value,originalValue:e.value,valueEditable:this.#s})),this.#n(),this.#e.setAssociatedData(er,this.#t))}async#o(){if(this.#e){if(this.#i=It.instance().getHeadersUISourceCodeFromUrl(this.#e.url()),!this.#i){this.#a(),this.#c();return}try{const e=await this.#i.requestContent();if(this.#r=JSON.parse(e.content||"[]"),!this.#r.every(ta))throw"Type mismatch after parsing";H.instance().moduleSetting("persistence-network-overrides-enabled").get()&&this.#s===0&&(this.#s=1);for(const t of this.#t)t.valueEditable=this.#s}catch{console.error("Failed to parse",this.#i?.url()||"source code file","for locally overriding headers."),this.#a()}finally{this.#c()}}}#n(){if(!this.#e||this.#e.originalResponseHeaders.length===0)return;const e=this.#e.originalResponseHeaders.map(o=>({name:et(o.name),value:o.value.replace(/\s/g," ")}));e.sort(function(o,a){return cr(o.name,a.name)});let t=0,i=0;for(;t<this.headerDetails.length;){const o=this.headerDetails[t].name;let a=this.headerDetails[t].value||"";const l=this.headerDetails[t].headerNotSet;for(;t<this.headerDetails.length-1&&this.headerDetails[t+1].name===o;)t++,a+=`, ${this.headerDetails[t].value}`;for(;i<e.length&&e[i].name<o;)i++;if(i<e.length&&e[i].name===o){let c=e[i].value;for(;i<e.length-1&&e[i+1].name===o;)i++,c+=`, ${e[i].value}`;i++,o!=="set-cookie"&&!l&&!ke(a,c)&&this.#t.filter(d=>ke(d.name,o)).forEach(d=>{d.isOverride=!0})}else o!=="set-cookie"&&!l&&this.#t.filter(c=>ke(c.name,o)).forEach(c=>{c.isOverride=!0});t++}this.#t.filter(o=>o.name==="set-cookie").forEach(o=>{this.#e?.originalResponseHeaders.find(a=>et(a.name)==="set-cookie"&&ke(a.value,o.value))===void 0&&(o.isOverride=!0)})}#h(e){const t=e.target;if(t.dataset.index===void 0)return;const i=Number(t.dataset.index);Gr(e.headerName)&&(this.#g(e.headerName,e.headerValue,i),_e.actionTaken(ct.HeaderOverrideHeaderEdited))}#l(e){const t=It.instance().rawPathFromUrl(e,!0),i=t.lastIndexOf("/");return Gt.substring(t,i+1)}#d(){this.#i?.setWorkingCopy(JSON.stringify(this.#r,null,2)),this.#i?.commitWorkingCopy()}#m(e,t,i){for(let o=this.#r.length-1;o>=0;o--){const a=this.#r[o];if(a.applyTo!==e)continue;const l=a.headers.findIndex(c=>ke(c.name,t)&&ke(c.value,i));if(!(l<0)){a.headers.splice(l,1),a.headers.length===0&&this.#r.splice(o,1);return}}}#f(e){const t=e.target;if(t.dataset.index===void 0||!this.#e)return;const i=Number(t.dataset.index),o=this.#l(this.#e.url());this.#m(o,e.headerName,e.headerValue),this.#d(),this.#t[i].isDeleted=!0,this.#c(),_e.actionTaken(ct.HeaderOverrideHeaderRemoved)}#g(e,t,i){if(!this.#e)return;this.#e.originalResponseHeaders.length===0&&(this.#e.originalResponseHeaders=this.#e.sortedResponseHeaders.map(p=>({...p})));const o=this.#t[i].name,a=this.#t[i].value;this.#t[i].name=e,this.#t[i].value=t;let l=[];e==="set-cookie"?l.push({name:e,value:t,valueEditable:this.#s}):l=this.#t.filter(p=>ke(p.name,e)&&(!ke(p.value,p.originalValue)||p.isOverride));const c=this.#l(this.#e.url());let d=null;const[g]=this.#r.slice(-1);if(g?.applyTo===c?d=g:(d={applyTo:c,headers:[]},this.#r.push(d)),e==="set-cookie"){const p=d.headers.findIndex(m=>ke(m.name,o)&&ke(m.value,a));p>=0&&d.headers.splice(p,1)}else d.headers=d.headers.filter(p=>!ke(p.name,e));if(!ke(this.#t[i].name,o)){for(let p=0;p<d.headers.length;++p)if(ke(d.headers[p].name,o)&&ke(d.headers[p].value,a)){d.headers.splice(p,1);break}}for(const p of l)d.headers.push({name:p.name,value:p.value||""});d.headers.length===0&&this.#r.pop(),this.#d()}#p(){this.#t.push({name:et(Le("header-name")),value:Le("header value"),isOverride:!0,nameEditable:!0,valueEditable:1});const e=this.#t.length-1;this.#g(this.#t[e].name,this.#t[e].value||"",e),this.#c();const t=this.shadow.querySelectorAll("devtools-header-section-row"),[i]=Array.from(t).slice(-1);i?.focus(),_e.actionTaken(ct.HeaderOverrideHeaderAdded)}#c(){if(!this.#e)return;const e=this.#t.map((t,i)=>({...this.headerDetails[i],...t,isResponseHeader:!0}));zo(Ei`
      ${e.map((t,i)=>Ei`
        <devtools-header-section-row
            .data=${{header:t}}
            @headeredited=${this.#h}
            @headerremoved=${this.#f}
            @enableheaderediting=${this.#u}
            data-index=${i}
            jslog=${So("response-header")}
        ></devtools-header-section-row>
      `)}
      ${this.#s===1?Ei`
        <devtools-button
          class="add-header-button"
          .variant=${"outlined"}
          .iconUrl=${vd}
          @click=${this.#p}
          jslog=${sr("add-header").track({click:!0})}>
          ${wd($e.addHeader)}
        </devtools-button>
      `:K}
    `,this.shadow,{host:this})}async#u(){if(!this.#e)return;_e.actionTaken(ct.HeaderOverrideEnableEditingClicked);const e=this.#e.url(),t=It.instance();t.project()?(H.instance().moduleSetting("persistence-network-overrides-enabled").set(!0),await t.getOrCreateHeadersUISourceCodeFromUrl(e)):is.instance().displaySelectOverrideFolderInfobar(async()=>{await Lo.instance().setupNewWorkspace(),await t.getOrCreateHeadersUISourceCodeFromUrl(e)})}}customElements.define("devtools-response-header-section",kd);const bd=new Map([["coep-frame-resource-needs-coep-header",{name:et("cross-origin-embedder-policy"),value:null,blockedDetails:{explanation:it($e.toEmbedThisFrameInYourDocument),examples:[{codeSnippet:"Cross-Origin-Embedder-Policy: require-corp",comment:void 0}],link:{url:"https://web.dev/coop-coep/"}}}],["corp-not-same-origin-after-defaulted-to-same-origin-by-coep",{name:et("cross-origin-resource-policy"),value:null,blockedDetails:{explanation:it($e.toUseThisResourceFromADifferent),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: same-site",comment:it($e.chooseThisOptionIfTheResourceAnd)},{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:it($e.onlyChooseThisOptionIfAn)}],link:{url:"https://web.dev/coop-coep/"}}}],["coop-sandboxed-iframe-cannot-navigate-to-coop-page",{name:et("cross-origin-opener-policy"),value:null,headerValueIncorrect:!1,blockedDetails:{explanation:it($e.thisDocumentWasBlockedFrom),examples:[],link:{url:"https://web.dev/coop-coep/"}}}],["corp-not-same-site",{name:et("cross-origin-resource-policy"),value:null,headerValueIncorrect:!0,blockedDetails:{explanation:it($e.toUseThisResourceFromADifferentSite),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:it($e.onlyChooseThisOptionIfAn)}],link:null}}],["corp-not-same-origin",{name:et("cross-origin-resource-policy"),value:null,headerValueIncorrect:!0,blockedDetails:{explanation:it($e.toUseThisResourceFromADifferentOrigin),examples:[{codeSnippet:"Cross-Origin-Resource-Policy: same-site",comment:it($e.chooseThisOptionIfTheResourceAnd)},{codeSnippet:"Cross-Origin-Resource-Policy: cross-origin",comment:it($e.onlyChooseThisOptionIfAn)}],link:null}}]]),Ks=3e3,{render:Yo,html:Re}=Ht,oe={fromDiskCache:"(from disk cache)",fromMemoryCache:"(from memory cache)",fromEarlyHints:"(from early hints)",fromPrefetchCache:"(from prefetch cache)",fromServiceWorker:"(from `service worker`)",fromSignedexchange:"(from signed-exchange)",fromWebBundle:"(from Web Bundle)",general:"General",raw:"Raw",referrerPolicy:"Referrer Policy",remoteAddress:"Remote Address",requestHeaders:"Request Headers",requestMethod:"Request Method",requestUrl:"Request URL",responseHeaders:"Response Headers",earlyHintsHeaders:"Early Hints Headers",revealHeaderOverrides:"Reveal header override definitions",showMore:"Show more",statusCode:"Status Code"},Sd=Z("panels/network/components/RequestHeadersView.ts",oe),de=Q.bind(void 0,Sd),Cd=ur.instance();class Xo extends rs{#e;#t=this.attachShadow({mode:"open"});#i=!1;#r=!1;#s=!1;#a=!1;#o=void 0;#n=ko.instance();constructor(e){super(),this.#e=e,this.setAttribute("jslog",`${tt("headers").track({resize:!0})}`)}wasShown(){this.#e.addEventListener(Y.REMOTE_ADDRESS_CHANGED,this.#l,this),this.#e.addEventListener(Y.FINISHED_LOADING,this.#l,this),this.#e.addEventListener(Y.REQUEST_HEADERS_CHANGED,this.#l,this),this.#e.addEventListener(Y.RESPONSE_HEADERS_CHANGED,this.#h,this),this.#o=void 0,this.#l()}willHide(){this.#e.removeEventListener(Y.REMOTE_ADDRESS_CHANGED,this.#l,this),this.#e.removeEventListener(Y.FINISHED_LOADING,this.#l,this),this.#e.removeEventListener(Y.REQUEST_HEADERS_CHANGED,this.#l,this),this.#e.removeEventListener(Y.RESPONSE_HEADERS_CHANGED,this.#h,this)}#h(){this.#e.deleteAssociatedData(er),this.render()}#l(){this.render()}revealHeader(e,t){this.#o={section:e,header:t},this.render()}connectedCallback(){this.#t.adoptedStyleSheets=[us],this.#n.addEventListener(zi.UISourceCodeAdded,this.#d,this),this.#n.addEventListener(zi.UISourceCodeRemoved,this.#d,this),H.instance().moduleSetting("persistence-network-overrides-enabled").addChangeListener(this.render,this)}disconnectedCallback(){this.#n.removeEventListener(zi.UISourceCodeAdded,this.#d,this),this.#n.removeEventListener(zi.UISourceCodeRemoved,this.#d,this),H.instance().moduleSetting("persistence-network-overrides-enabled").removeChangeListener(this.render,this)}#d(e){this.#p()===e.data.url()&&this.render()}async render(){if(this.#e)return Cd.write(()=>{Yo(Re`
        ${this.#v()}
        ${this.#m()}
        ${this.#f()}
        ${this.#c()}
      `,this.#t,{host:this})})}#m(){return!this.#e||!this.#e.earlyHintsHeaders||this.#e.earlyHintsHeaders.length===0?K:Re`
      <devtools-request-headers-category
        @togglerawevent=${()=>{this.#i=!this.#i,this.render()}}
        .data=${{name:"early-hints-headers",title:de(oe.earlyHintsHeaders),headerCount:this.#e.earlyHintsHeaders.length,checked:void 0,additionalContent:void 0,forceOpen:this.#o?.section==="EarlyHints",loggingContext:"early-hints-headers"}}
        aria-label=${de(oe.earlyHintsHeaders)}
      >
        ${this.#i?this.#u(this.#e.responseHeadersText,!0):Re`
          <devtools-early-hints-header-section .data=${{request:this.#e,toReveal:this.#o}}></devtools-early-hints-header-section>
        `}
      </devtools-request-headers-category>
    `}#f(){return this.#e?Re`
      <devtools-request-headers-category
        @togglerawevent=${()=>{this.#i=!this.#i,this.render()}}
        .data=${{name:"response-headers",title:de(oe.responseHeaders),headerCount:this.#e.sortedResponseHeaders.length,checked:this.#e.responseHeadersText?this.#i:void 0,additionalContent:this.#g(),forceOpen:this.#o?.section==="Response",loggingContext:"response-headers"}}
        aria-label=${de(oe.responseHeaders)}
      >
        ${this.#i?this.#u(this.#e.responseHeadersText,!0):Re`
          <devtools-response-header-section .data=${{request:this.#e,toReveal:this.#o}} jslog=${di("response-headers")}></devtools-response-header-section>
        `}
      </devtools-request-headers-category>
    `:K}#g(){if(!this.#n.uiSourceCodeForURL(this.#p()))return K;const e=H.instance().moduleSetting("persistence-network-overrides-enabled"),t=Re`
      <devtools-icon class=${e.get()?"inline-icon dot purple":"inline-icon"} .data=${{iconName:"document",width:"16px",height:"16px"}}>
      </devtools-icon>`,i=o=>{o.preventDefault();const a=this.#n.uiSourceCodeForURL(this.#p());a&&(js.instance().showUISourceCode(a),js.instance().revealInNavigator(a))};return Re`
      <x-link
          href="https://goo.gle/devtools-override"
          class="link devtools-link"
          jslog=${Br("devtools-override").track({click:!0})}
      >
        <devtools-icon class="inline-icon" .data=${{iconName:"help",width:"16px",height:"16px"}}>
        </devtools-icon
      ></x-link>
      <x-link
          @click=${i}
          class="link devtools-link"
          title=${oe.revealHeaderOverrides}
          jslog=${Br("reveal-header-overrides").track({click:!0})}
      >
        ${t}${Ms}
      </x-link>
    `}#p(){if(!this.#e)return Zr;const e=It.instance().fileUrlFromNetworkUrl(this.#e.url(),!0);return e.substring(0,e.lastIndexOf("/"))+"/"+Ms}#c(){if(!this.#e)return K;const e=this.#e.requestHeadersText();return Re`
      <devtools-request-headers-category
        @togglerawevent=${()=>{this.#r=!this.#r,this.render()}}
        .data=${{name:"request-headers",title:de(oe.requestHeaders),headerCount:this.#e.requestHeaders().length,checked:e?this.#r:void 0,forceOpen:this.#o?.section==="Request",loggingContext:"request-headers"}}
        aria-label=${de(oe.requestHeaders)}
      >
        ${this.#r&&e?this.#u(e,!1):Re`
          <devtools-request-header-section .data=${{request:this.#e,toReveal:this.#o}} jslog=${di("request-headers")}></devtools-request-header-section>
        `}
      </devtools-request-headers-category>
    `}#u(e,t){const i=e.trim(),a=!(t?this.#s:this.#a)&&i.length>Ks,l=()=>{t?this.#s=!0:this.#a=!0,this.render()},c=g=>{if(!(t?this.#s:this.#a)){const m=new Qe(g);m.newSection().appendItem(de(oe.showMore),l,{jslogContext:"show-more"}),m.show()}};return Re`
      <div class="row raw-headers-row" on-render=${vl(g=>{a&&g.addEventListener("contextmenu",c)})}>
        <div class="raw-headers">${a?i.substring(0,Ks):i}</div>
        ${a?Re`
          <devtools-button
            .size=${"SMALL"}
            .variant=${"outlined"}
            @click=${l}
            jslog=${sr("raw-headers-show-more").track({click:!0})}
          >${de(oe.showMore)}</devtools-button>
        `:K}
      </div>
    `}#v(){if(!this.#e)return K;const e=["status"];this.#e.statusCode<300||this.#e.statusCode===304?e.push("green-circle"):this.#e.statusCode<400?e.push("yellow-circle"):e.push("red-circle");let t="";this.#e.cachedInMemory()?t=de(oe.fromMemoryCache):this.#e.fromEarlyHints()?t=de(oe.fromEarlyHints):this.#e.fetchedViaServiceWorker?t=de(oe.fromServiceWorker):this.#e.redirectSourceSignedExchangeInfoHasNoErrors()?t=de(oe.fromSignedexchange):this.#e.webBundleInnerRequestInfo()?t=de(oe.fromWebBundle):this.#e.fromPrefetchCache()?t=de(oe.fromPrefetchCache):this.#e.cached()&&(t=de(oe.fromDiskCache)),t&&e.push("status-with-comment");const i=[this.#e.statusCode,this.#e.getInferredStatusText(),t].join(" ");return Re`
      <devtools-request-headers-category
        .data=${{name:"general",title:de(oe.general),forceOpen:this.#o?.section==="General",loggingContext:"general"}}
        aria-label=${de(oe.general)}
      >
      <div jslog=${di("general")}>
        ${this.#w(de(oe.requestUrl),this.#e.url())}
        ${this.#e.statusCode?this.#w(de(oe.requestMethod),this.#e.requestMethod):K}
        ${this.#e.statusCode?this.#w(de(oe.statusCode),i,e):K}
        ${this.#e.remoteAddress()?this.#w(de(oe.remoteAddress),this.#e.remoteAddress()):K}
        ${this.#e.referrerPolicy()?this.#w(de(oe.referrerPolicy),String(this.#e.referrerPolicy())):K}
      </div>
      </devtools-request-headers-category>
    `}#w(e,t,i){const o=this.#o?.section==="General"&&e.toLowerCase()===this.#o?.header?.toLowerCase();return Re`
      <div class="row ${o?"header-highlight":""}">
        <div class="header-name">${e}:</div>
        <div
          class="header-value ${i?.join(" ")}"
          @copy=${()=>_e.actionTaken(ct.NetworkPanelCopyValue)}
        >${t}</div>
      </div>
    `}}class ps extends Event{static eventName="togglerawevent";constructor(){super(ps.eventName,{})}}let xd=class extends HTMLElement{#e=this.attachShadow({mode:"open"});#t;#i=ia;#r=void 0;#s=void 0;#a=void 0;#o=void 0;#n="";connectedCallback(){this.#e.adoptedStyleSheets=[us,ra]}set data(e){this.#i=e.title,this.#t=H.instance().createSetting("request-info-"+e.name+"-category-expanded",!0),this.#r=e.headerCount,this.#s=e.checked,this.#a=e.additionalContent,this.#o=e.forceOpen,this.#n=e.loggingContext,this.#l()}#h(){this.dispatchEvent(new ps)}#l(){const e=(this.#t?this.#t.get():!0)||this.#o;Yo(Re`
      <details ?open=${e} @toggle=${this.#m}>
        <summary
          class="header"
          @keydown=${this.#d}
          jslog=${sa().track({click:!0}).context(this.#n)}
        >
          <div class="header-grid-container">
            <div>
              ${this.#i}${this.#r!==void 0?Re`<span class="header-count"> (${this.#r})</span>`:K}
            </div>
            <div class="hide-when-closed">
              ${this.#s!==void 0?Re`
                <label><input
                    type="checkbox"
                    .checked=${this.#s}
                    @change=${this.#h}
                    jslog=${rr("raw-headers").track({change:!0})}
                />${de(oe.raw)}</label>
              `:K}
            </div>
            <div class="hide-when-closed">${this.#a}</div>
          </div>
        </summary>
        <slot></slot>
      </details>
    `,this.#e,{host:this})}#d(e){if(!e.target)return;const i=e.target.parentElement;if(!i)throw new Error("<details> element is not found for a <summary> element");switch(e.key){case"ArrowLeft":i.open=!1;break;case"ArrowRight":i.open=!0;break}}#m(e){this.#t?.set(e.target.open)}};customElements.define("devtools-request-headers",Xo);customElements.define("devtools-request-headers-category",xd);const Jo=new CSSStyleSheet;Jo.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

.content {
  background-color: var(--sys-color-cdt-base-container);
  display: grid;
  grid-template-columns: min-content 1fr;
  user-select: text;
}

.report-title {
  padding: 12px 24px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  grid-column-start: span 2;
}

/*# sourceURL=report.css */
`);const Zo=new CSSStyleSheet;Zo.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
}

.key {
  color: var(--sys-color-on-surface-subtle);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
  user-select: none;
}

/*# sourceURL=reportKey.css */
`);const Qo=new CSSStyleSheet;Qo.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
  min-width: min-content;
}

.section {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  overflow-wrap: break-word;
  overflow: hidden;
}

/*# sourceURL=reportSection.css */
`);const en=new CSSStyleSheet;en.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-divider {
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=reportSectionDivider.css */
`);const tn=new CSSStyleSheet;tn.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-header {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  user-select: none;
}

/*# sourceURL=reportSectionHeader.css */
`);const rn=new CSSStyleSheet;rn.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
  min-width: 150px;
}

.value {
  color: var(--sys-color-on-surface);
  margin-inline-start: 0;
  padding: 0 6px;
  overflow-wrap: break-word;
}

/*# sourceURL=reportValue.css */
`);const{html:zt}=Ht;class Td extends HTMLElement{#e=this.attachShadow({mode:"open"});#t="";set data({reportTitle:e}){this.#t=e,this.#i()}connectedCallback(){this.#e.adoptedStyleSheets=[Jo],this.#i()}#i(){_t(zt`
      <div class="content">
        ${this.#t?zt`<div class="report-title">${this.#t}</div>`:K}
        <slot></slot>
      </div>
    `,this.#e,{host:this})}}class Rd extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[Qo],this.#t()}#t(){_t(zt`
      <div class="section">
        <slot></slot>
      </div>
    `,this.#e,{host:this})}}class Id extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[tn],this.#t()}#t(){_t(zt`
      <div class="section-header">
        <slot></slot>
      </div>
    `,this.#e,{host:this})}}class Ed extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[en],this.#t()}#t(){_t(zt`
      <div class="section-divider">
      </div>
    `,this.#e,{host:this})}}class Ad extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[Zo],this.#t()}#t(){_t(zt`
      <div class="key"><slot></slot></div>
    `,this.#e,{host:this})}}class Ld extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[rn],this.#t()}#t(){_t(zt`
      <div class="value"><slot></slot></div>
    `,this.#e,{host:this})}}customElements.define("devtools-report",Td);customElements.define("devtools-report-section",Rd);customElements.define("devtools-report-section-header",Id);customElements.define("devtools-report-key",Ad);customElements.define("devtools-report-value",Ld);customElements.define("devtools-report-divider",Ed);const sn=new CSSStyleSheet;sn.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.code {
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.issuers-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.status-icon {
  margin: 0 0.3em 2px 0;
  vertical-align: middle;
}

/*# sourceURL=RequestTrustTokensView.css */
`);const{html:Rt}=Ht,ve={parameters:"Parameters",type:"Type",refreshPolicy:"Refresh policy",issuers:"Issuers",topLevelOrigin:"Top level origin",issuer:"Issuer",result:"Result",status:"Status",numberOfIssuedTokens:"Number of issued tokens",success:"Success",failure:"Failure",theOperationsResultWasServedFrom:"The operations result was served from cache.",theOperationWasFulfilledLocally:"The operation was fulfilled locally, no request was sent.",theKeysForThisPSTIssuerAreUnavailable:"The keys for this PST issuer are unavailable. The issuer may need to be registered via the Chrome registration process.",aClientprovidedArgumentWas:"A client-provided argument was malformed or otherwise invalid.",eitherNoInputsForThisOperation:"Either no inputs for this operation are available or the output exceeds the operations quota.",theServersResponseWasMalformedOr:"The servers response was malformed or otherwise invalid.",theOperationFailedForAnUnknown:"The operation failed for an unknown reason."},qd=Z("panels/network/components/RequestTrustTokensView.ts",ve),be=Q.bind(void 0,qd);class on extends rs{#e=this.attachShadow({mode:"open"});#t;constructor(e){super(),this.#t=e}wasShown(){this.#t.addEventListener(Y.TRUST_TOKEN_RESULT_ADDED,this.render,this),this.render()}willHide(){this.#t.removeEventListener(Y.TRUST_TOKEN_RESULT_ADDED,this.render,this)}connectedCallback(){this.#e.adoptedStyleSheets=[sn]}async render(){if(!this.#t)throw new Error("Trying to render a Trust Token report without providing data");_t(Rt`<devtools-report>
        ${this.#i()}
        ${this.#o()}
      </devtools-report>
    `,this.#e,{host:this})}#i(){const e=this.#t.trustTokenParams();return e?Rt`
      <devtools-report-section-header jslog=${tt("trust-tokens").track({resize:!0})}>${be(ve.parameters)}</devtools-report-section-header>
      ${Ys(be(ve.type),e.operation.toString())}
      ${this.#r(e)}
      ${this.#s(e)}
      ${this.#a()}
      <devtools-report-divider></devtools-report-divider>
    `:K}#r(e){return e.operation!=="Redemption"?K:Ys(be(ve.refreshPolicy),e.refreshPolicy.toString())}#s(e){return!e.issuers||e.issuers.length===0?K:Rt`
      <devtools-report-key>${be(ve.issuers)}</devtools-report-key>
      <devtools-report-value>
        <ul class="issuers-list">
          ${e.issuers.map(t=>Rt`<li>${t}</li>`)}
        </ul>
      </devtools-report-value>
    `}#a(){const e=this.#t.trustTokenOperationDoneEvent();return e?Rt`
      ${qr(be(ve.topLevelOrigin),e.topLevelOrigin)}
      ${qr(be(ve.issuer),e.issuerOrigin)}`:K}#o(){const e=this.#t.trustTokenOperationDoneEvent();return e?Rt`
      <devtools-report-section-header>${be(ve.result)}</devtools-report-section-header>
      <devtools-report-key>${be(ve.status)}</devtools-report-key>
      <devtools-report-value>
        <span>
          <devtools-icon class="status-icon"
            .data=${Pd(e.status)}>
          </devtools-icon>
          <strong>${Nd(e.status)}</strong>
          ${Md(e.status)}
        </span>
      </devtools-report-value>
      ${this.#n(e)}
      <devtools-report-divider></devtools-report-divider>
      `:K}#n(e){return e.type!=="Issuance"?K:qr(be(ve.numberOfIssuedTokens),e.issuedTokenCount)}}const Fd={color:"var(--icon-checkmark-green)",iconName:"check-circle",width:"16px",height:"16px"},Hd={color:"var(--icon-error)",iconName:"cross-circle-filled",width:"16px",height:"16px"};function ms(w){return w==="Ok"||w==="AlreadyExists"||w==="FulfilledLocally"}function Pd(w){return ms(w)?Fd:Hd}function Nd(w){return ms(w)?be(ve.success):be(ve.failure)}function Md(w){switch(w){case"Ok":return null;case"AlreadyExists":return be(ve.theOperationsResultWasServedFrom);case"FulfilledLocally":return be(ve.theOperationWasFulfilledLocally);case"InvalidArgument":return be(ve.aClientprovidedArgumentWas);case"ResourceExhausted":return be(ve.eitherNoInputsForThisOperation);case"BadResponse":return be(ve.theServersResponseWasMalformedOr);case"MissingIssuerKeys":return be(ve.theKeysForThisPSTIssuerAreUnavailable);case"FailedPrecondition":case"ResourceLimited":case"InternalError":case"Unauthorized":case"UnknownError":return be(ve.theOperationFailedForAnUnknown)}}function qr(w,e){return e===void 0?K:Rt`
    <devtools-report-key>${w}</devtools-report-key>
    <devtools-report-value>${e}</devtools-report-value>
  `}function Ys(w,e){return Rt`
    <devtools-report-key>${w}</devtools-report-key>
    <devtools-report-value class="code">${e}</devtools-report-value>
  `}customElements.define("devtools-trust-token-report",on);const nn=new CSSStyleSheet;nn.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  --icon-padding: 4px;
}

.header {
  display: flex;
  font-weight: bold;
  padding: calc(2 * var(--icon-padding)) var(--icon-padding);
  line-height: 20px;
}

.icon {
  margin: 0 var(--icon-padding);
}

/*# sourceURL=WebBundleInfoView.css */
`);const{render:Bd,html:Xs}=Ht,an={bundledResource:"Bundled resource"},Od=Z("panels/network/components/WebBundleInfoView.ts",an),Dd=Q.bind(void 0,Od);class ln extends rs{#e=this.attachShadow({mode:"open"});#t;#i;constructor(e){super();const t=e.webBundleInfo();if(!t)throw new Error("Trying to render a Web Bundle info without providing data");this.#t=t,this.#i=e.parsedURL.lastPathComponent,this.setAttribute("jslog",`${tt("webbundle").track({resize:!0})}`)}connectedCallback(){this.#e.adoptedStyleSheets=[nn]}async render(){const e=this.#t.resourceUrls?.map(t=>{const i=Lt.mimeFromURL(t)||null,o=Lt.fromMimeTypeOverride(i)||Lt.fromMimeType(i),a=Zi.iconDataForResourceType(o);return{cells:[{columnId:"url",value:null,renderer(){return Xs`
                <div style="display: flex;">
                  <devtools-icon class="icon"
                    .data=${{...a,width:"20px"}}>
                  </devtools-icon>
                  <span>${t}</span>
                </div>`}}]}});Bd(Xs`
      <div class="header">
        <devtools-icon class="icon"
          .data=${{color:"var(--icon-default)",iconName:"bundle",width:"20px"}}>
        </devtools-icon>
        <span>${this.#i}</span>
        <x-link href="https://web.dev/web-bundles/#explaining-web-bundles"
          jslog=${Br("webbundle-explainer").track({click:!0})}>
          <devtools-icon class="icon"
            .data=${{color:"var(--icon-default)",iconName:"help",width:"16px"}}>
          </devtools-icon>
        </x-link>
      </div>
      <div>
        <devtools-data-grid
          .data=${{columns:[{id:"url",title:Dd(an.bundledResource),widthWeighting:1,visible:!0,hideable:!1}],rows:e,activeSort:null}}>
        </devtools-data-grid>
      </div>`,this.#e,{host:this})}}customElements.define("devtools-web-bundle-info",ln);const dn=new CSSStyleSheet;dn.replaceSync(`/*
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.cookies-table devtools-icon {
  margin-right: 4px;
}

.cookies-table td.flagged-cookie-attribute-cell devtools-icon {
  filter: grayscale();
}

.cookies-table tr.revealed.data-grid-data-grid-node.flagged-cookie-attribute-row:not(.selected):nth-child(odd) {
  background-color: var(--sys-color-surface-yellow-high);
}

.cookies-table tr.revealed.data-grid-data-grid-node.flagged-cookie-attribute-row:not(.selected):nth-child(even) {
  background-color: var(--sys-color-surface-yellow);
}

/*# sourceURL=cookiesTable.css */
`);const xe={session:"Session",name:"Name",value:"Value",size:"Size",editableCookies:"Editable Cookies",cookies:"Cookies",na:"N/A",showRequestsWithThisCookie:"Show Requests With This Cookie",showIssueAssociatedWithThis:"Show issue associated with this cookie",sourcePortTooltip:"Shows the source port (range 1-65535) the cookie was set on. If the port is unknown, this shows -1.",sourceSchemeTooltip:"Shows the source scheme (`Secure`, `NonSecure`) the cookie was set on. If the scheme is unknown, this shows `Unset`.",timeAfter:"after {date}",timeAfterTooltip:"The expiration timestamp is {seconds}, which corresponds to a date after {date}",opaquePartitionKey:"(opaque)"},cn=Z("ui/legacy/components/cookie_table/CookiesTable.ts",xe),Ae=Q.bind(void 0,cn),Ud=hr.bind(void 0,cn),ki=Ud(xe.session);class Js extends me{saveCallback;refreshCallback;deleteCallback;dataGrid;lastEditedColumnId;data;cookieDomain;cookieToBlockedReasons;cookieToExemptionReason;constructor(e,t,i,o,a){super(),this.element.classList.add("cookies-table"),this.saveCallback=t,this.refreshCallback=i,this.deleteCallback=a;const l=!!t,c=[{id:"name",title:Ae(xe.name),sortable:!0,disclosure:l,sort:$t.Ascending,longText:!0,weight:24,editable:l},{id:"value",title:Ae(xe.value),sortable:!0,longText:!0,weight:34,editable:l},{id:"domain",title:"Domain",sortable:!0,weight:7,editable:l},{id:"path",title:"Path",sortable:!0,weight:7,editable:l},{id:"expires",title:"Expires / Max-Age",sortable:!0,weight:7,editable:l},{id:"size",title:Ae(xe.size),sortable:!0,align:"right",weight:7},{id:"http-only",title:"HttpOnly",sortable:!0,align:"center",weight:7,dataType:"Boolean",editable:l},{id:"secure",title:"Secure",sortable:!0,align:"center",weight:7,dataType:"Boolean",editable:l},{id:"same-site",title:"SameSite",sortable:!0,weight:7,editable:l},{id:"partition-key-site",title:"Partition Key Site",sortable:!0,weight:7,editable:l},{id:"has-cross-site-ancestor",title:"Cross Site",sortable:!0,align:"center",weight:7,dataType:"Boolean",editable:l},{id:"priority",title:"Priority",sortable:!0,weight:7,editable:l}];if(Ji.isEnabled("experimental-cookie-features")){const d=[{id:"source-scheme",title:"SourceScheme",sortable:!0,align:"center",weight:7,editable:l},{id:"source-port",title:"SourcePort",sortable:!0,align:"center",weight:7,editable:l}];c.push(...d)}l?this.dataGrid=new Bs({displayName:Ae(xe.editableCookies),columns:c,editCallback:this.onUpdateCookie.bind(this),deleteCallback:this.onDeleteCookie.bind(this),refreshCallback:i}):this.dataGrid=new Bs({displayName:Ae(xe.cookies),columns:c,editCallback:void 0,deleteCallback:void 0,refreshCallback:void 0}),this.dataGrid.setStriped(!0),this.dataGrid.setName("cookies-table"),this.dataGrid.addEventListener("SortingChanged",this.rebuildTable,this),this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this)),e&&this.dataGrid.renderInline(),o&&this.dataGrid.addEventListener("SelectedNode",o,this),this.lastEditedColumnId=null,this.dataGrid.asWidget().show(this.element),this.data=[],this.cookieDomain="",this.cookieToBlockedReasons=null,this.cookieToExemptionReason=null}wasShown(){this.registerCSSFiles([dn])}setCookies(e,t,i){this.setCookieFolders([{cookies:e,folderName:null}],t,i)}setCookieFolders(e,t,i){this.data=e,this.cookieToBlockedReasons=t||null,this.cookieToExemptionReason=i||null,this.rebuildTable()}setCookieDomain(e){this.cookieDomain=e}selectedCookie(){const e=this.dataGrid.selectedNode;return e?e.cookie:null}getSelectionCookies(){const e=this.dataGrid.selectedNode,t=e&&e.traverseNextNode(!0),i=e&&e.traversePreviousNode(!0);return{current:e&&e.cookie,neighbor:t&&t.cookie||i&&i.cookie}}willHide(){this.lastEditedColumnId=null}findSelectedCookie(e,t){if(!t)return null;const i=e.current,o=t.find(c=>this.isSameCookie(c,i));if(o)return o;const a=e.neighbor,l=t.find(c=>this.isSameCookie(c,a));return l||null}isSameCookie(e,t){return t!=null&&t.name()===e.name()&&t.domain()===e.domain()&&t.path()===e.path()}rebuildTable(){const e=this.dataGrid.element?.contains(document.activeElement),t=this.getSelectionCookies(),i=this.lastEditedColumnId;this.lastEditedColumnId=null,this.dataGrid.rootNode().removeChildren();for(let o=0;o<this.data.length;++o){const a=this.data[o],l=this.findSelectedCookie(t,a.cookies);if(a.folderName){const c={};c.name=a.folderName,c.value="",c.size=this.totalSize(a.cookies),c.domain="",c.path="",c.expires="",c["http-only"]="",c.secure="",c["same-site"]="",c["source-port"]="",c["source-scheme"]="",c.priority="";const d=new Co(c);d.selectable=!0,this.dataGrid.rootNode().appendChild(d),d.element().classList.add("row-group"),this.populateNode(d,a.cookies,l,i),d.expand()}else this.populateNode(this.dataGrid.rootNode(),a.cookies,l,i)}t.current&&i&&!this.dataGrid.selectedNode&&this.addInactiveNode(this.dataGrid.rootNode(),t.current,i),this.saveCallback&&this.dataGrid.addCreationNode(!1),e&&this.dataGrid.element.focus()}populateNode(e,t,i,o){if(e.removeChildren(),!!t){this.sortCookies(t);for(let a=0;a<t.length;++a){const l=t[a],c=this.createGridNode(l);e.appendChild(c),this.isSameCookie(l,i)&&(c.select(),o!==null&&this.dataGrid.startEditingNextEditableColumnOfDataGridNode(c,o))}}}addInactiveNode(e,t,i){const o=this.createGridNode(t);e.appendChild(o),o.select(),o.setInactive(!0),i!==null&&this.dataGrid.startEditingNextEditableColumnOfDataGridNode(o,i)}totalSize(e){let t=0;for(let i=0;e&&i<e.length;++i)t+=e[i].size();return t}sortCookies(e){const t=this.dataGrid.isSortOrderAscending()?1:-1;function i(p,m){switch(m){case"name":return String(p.name());case"value":return String(p.value());case"domain":return String(p.domain());case"path":return String(p.path());case"http-only":return String(p.httpOnly());case"secure":return String(p.secure());case"same-site":return String(p.sameSite());case"partition-key-site":return p.partitionKeyOpaque()?Ae(xe.opaquePartitionKey):String(p.topLevelSite());case"has-cross-site-ancestor":return String(p.partitioned()?p.hasCrossSiteAncestor():!1);case"source-scheme":return String(p.sourceScheme());default:return String(p.name())}}function o(p,m,f){return t*cr(i(m,p),i(f,p))}function a(p,m,f){return t*(p(m)-p(f))}function l(p,m){const f=["Low","Medium","High"],k=f.indexOf(p.priority()),u=f.indexOf(m.priority());return t*(k-u)}function c(p,m){return p.session()!==m.session()?t*(p.session()?1:-1):p.session()?0:p.maxAge()&&m.maxAge()?t*(p.maxAge()-m.maxAge()):p.expires()&&m.expires()?t*(p.expires()-m.expires()):t*(p.expires()?1:-1)}let d;const g=this.dataGrid.sortColumnId()||"name";g==="expires"?d=c:g==="size"?d=a.bind(null,p=>p.size()):g==="source-port"?d=a.bind(null,p=>p.sourcePort()):g==="priority"?d=l:d=o.bind(null,g),e.sort(d)}createGridNode(e){const t={};t.name=e.name(),t.value=e.value(),e.type()===0?(t.domain=e.domain()?e.domain():Ae(xe.na),t.path=e.path()?e.path():Ae(xe.na)):(t.domain=e.domain()||"",t.path=e.path()||"");let i;if(e.maxAge())t.expires=Me(Math.floor(e.maxAge()));else if(e.expires()){const c=e.expires();if(c<0)t.expires=ki();else if(c>864e13){const g=new Date(864e13).toISOString();t.expires=Ae(xe.timeAfter,{date:g}),i=Ae(xe.timeAfterTooltip,{seconds:c,date:g})}else t.expires=new Date(c).toISOString()}else t.expires=e.type()===0?Ae(xe.na):ki();t.size=e.size(),t["http-only"]=e.httpOnly(),t.secure=e.secure(),t["same-site"]=e.sameSite()||"",t["source-port"]=e.sourcePort(),t["source-scheme"]=e.sourceScheme(),t.priority=e.priority()||"",t["partition-key-site"]=e.topLevelSite(),t["has-cross-site-ancestor"]=e.hasCrossSiteAncestor()?"true":"";const o=this.cookieToBlockedReasons?.get(e),a=this.cookieToExemptionReason?.get(e),l=new Vd(t,e,o||null,a||null);return i&&l.setExpiresTooltip(i),l.selectable=!0,l}onDeleteCookie(e){e.cookie&&this.deleteCallback&&this.deleteCallback(e.cookie,()=>this.refresh())}onUpdateCookie(e,t,i,o){this.lastEditedColumnId=t,this.setDefaults(e),this.isValidCookieData(e.data)?this.saveNode(e):e.setDirty(!0)}setDefaults(e){e.data.name===null&&(e.data.name=""),e.data.value===null&&(e.data.value=""),e.data.domain===null&&(e.data.domain=this.cookieDomain),e.data.path===null&&(e.data.path="/"),e.data.expires===null&&(e.data.expires=ki()),e.data["partition-key"]===null&&(e.data["partition-key"]="")}saveNode(e){const t=e.cookie,i=this.createCookieFromData(e.data);e.cookie=i,this.saveCallback&&this.saveCallback(i,t).then(o=>{o?this.refresh():e.setDirty(!0)})}createCookieFromData(e){const t=new ao(e.name,e.value,null,e.priority);return t.addAttribute("domain",e.domain),t.addAttribute("path",e.path),e.expires&&e.expires!==ki()&&t.addAttribute("expires",new Date(e.expires).toUTCString()),e["http-only"]&&t.addAttribute("http-only"),e.secure&&t.addAttribute("secure"),e["same-site"]&&t.addAttribute("same-site",e["same-site"]),"source-scheme"in e&&t.addAttribute("source-scheme",e["source-scheme"]),"source-port"in e&&t.addAttribute("source-port",Number.parseInt(e["source-port"],10)||void 0),e["partition-key-site"]&&t.setPartitionKey(e["partition-key-site"],!!(e["has-cross-site-ancestor"]&&e["has-cross-site-ancestor"])),t.setSize(e.name.length+e.value.length),t}isValidCookieData(e){return(!!e.name||!!e.value)&&this.isValidDomain(e.domain)&&this.isValidPath(e.path)&&this.isValidDate(e.expires)&&this.isValidPartitionKey(e.PartitionKeySite)}isValidDomain(e){if(!e)return!0;const t=Gt.fromString("http://"+e);return t!==null&&t.domain()===e}isValidPath(e){const t=Gt.fromString("http://example.com"+e);return t!==null&&t.path===e}isValidDate(e){return e===""||e===ki()||!isNaN(Date.parse(e))}isValidPartitionKey(e){return e?Gt.fromString(e)!==null:!0}refresh(){this.refreshCallback&&this.refreshCallback()}populateContextMenu(e,t){const i=t.cookie;if(!i)return;const o=i;e.revealSection().appendItem(Ae(xe.showRequestsWithThisCookie),()=>{const a=oa.filters([{filterType:q.CookieDomain,filterValue:o.domain()},{filterType:q.CookieName,filterValue:o.name()}]);Li(a)},{jslogContext:"show-requests-with-this-cookie"}),Ll(o)&&e.revealSection().appendItem(Ae(xe.showIssueAssociatedWithThis),()=>{ss(o)},{jslogContext:"show-issue-associated-with-this"})}}class Vd extends Co{cookie;blockedReasons;exemptionReason;expiresTooltip;constructor(e,t,i,o){super(e),this.cookie=t,this.blockedReasons=i,this.exemptionReason=o}createCells(e){super.createCells(e),this.blockedReasons&&this.blockedReasons.length&&e.classList.add("flagged-cookie-attribute-row")}setExpiresTooltip(e){this.expiresTooltip=e}createCell(e){const t=super.createCell(e);e==="source-port"?M.install(t,Ae(xe.sourcePortTooltip)):e==="source-scheme"?M.install(t,Ae(xe.sourceSchemeTooltip)):e==="expires"&&this.expiresTooltip?M.install(t,this.expiresTooltip):M.install(t,t.textContent||"");let i="";if(this.blockedReasons)for(const o of this.blockedReasons){const a=o.attribute===e,l=!o.attribute&&e==="name";(a||l)&&(i&&(i+=`
`),i+=o.uiString)}if(i){const o=new dt;e==="name"&&Fl(this.cookie)?(o.data={iconName:"warning-filled",color:"var(--icon-warning)",width:"14px",height:"14px"},o.onclick=()=>ss(this.cookie),o.style.cursor="pointer"):(o.data={iconName:"info",color:"var(--icon-info)",width:"14px",height:"14px"},t.classList.add("flagged-cookie-attribute-cell")),o.title=i,t.insertBefore(o,t.firstChild)}if(this.exemptionReason?.uiString&&e==="name"){const o=new dt;o.data={iconName:"info",color:"var(--icon-info)",width:"14px",height:"14px"},t.classList.add("flagged-cookie-attribute-cell"),o.title=this.exemptionReason.uiString,t.insertBefore(o,t.firstChild)}return t}}const hn=new CSSStyleSheet;hn.replaceSync(`/*
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-cookies-view {
  overflow: auto;
  padding: 12px;
  height: 100%;
  background-color: var(--sys-color-cdt-base-container);
}

.request-cookies-view .request-cookies-title {
  font-size: 12px;
  font-weight: bold;
  margin-right: 30px;
  color: var(--sys-color-on-surface);
}

.request-cookies-view .cookie-line {
  margin-top: 6px;
  display: flex;
}

.request-cookies-view .cookies-panel-item {
  margin-top: 6px;
  margin-bottom: 16px;
  flex: none;
}

@media (forced-colors: active) {
  td.flagged-cookie-attribute-cell .cookie-warning-icon {
    forced-color-adjust: none;
    filter: grayscale();
  }
}

/*# sourceURL=requestCookiesView.css */
`);const Ve={thisRequestHasNoCookies:"This request has no cookies.",requestCookies:"Request Cookies",cookiesThatWereSentToTheServerIn:"Cookies that were sent to the server in the 'cookie' header of the request",showFilteredOutRequestCookies:"show filtered out request cookies",noRequestCookiesWereSent:"No request cookies were sent.",responseCookies:"Response Cookies",cookiesThatWereReceivedFromThe:"Cookies that were received from the server in the '`set-cookie`' header of the response",malformedResponseCookies:"Malformed Response Cookies",cookiesThatWereReceivedFromTheServer:"Cookies that were received from the server in the '`set-cookie`' header of the response but were malformed",siteHasCookieInOtherPartition:"This site has cookies in another partition, that were not sent with this request. {PH1}",learnMore:"Learn more"},un=Z("panels/network/RequestCookiesView.ts",Ve),rt=Q.bind(void 0,un);class pn extends na{request;showFilteredOutCookiesSetting;emptyWidget;requestCookiesTitle;requestCookiesEmpty;requestCookiesTable;responseCookiesTitle;responseCookiesTable;siteHasCookieInOtherPartition;malformedResponseCookiesTitle;malformedResponseCookiesList;constructor(e){super(),this.element.classList.add("request-cookies-view"),this.element.setAttribute("jslog",`${tt("cookies").track({resize:!0})}`),this.request=e,this.showFilteredOutCookiesSetting=H.instance().createSetting("show-filtered-out-request-cookies",!1),this.emptyWidget=new jt(rt(Ve.thisRequestHasNoCookies)),this.emptyWidget.show(this.element),this.requestCookiesTitle=this.element.createChild("div");const t=this.requestCookiesTitle.createChild("span","request-cookies-title");t.textContent=rt(Ve.requestCookies),M.install(t,rt(Ve.cookiesThatWereSentToTheServerIn));const i=vo(rt(Ve.showFilteredOutRequestCookies),this.showFilteredOutCookiesSetting);i.checkboxElement.addEventListener("change",()=>{this.refreshRequestCookiesView()}),this.requestCookiesTitle.appendChild(i),this.requestCookiesEmpty=this.element.createChild("div","cookies-panel-item"),this.requestCookiesEmpty.textContent=rt(Ve.noRequestCookiesWereSent),this.requestCookiesTable=new Js(!0),this.requestCookiesTable.contentElement.classList.add("cookie-table","cookies-panel-item"),this.requestCookiesTable.show(this.element),this.siteHasCookieInOtherPartition=this.element.createChild("div","cookies-panel-item site-has-cookies-in-other-partition"),this.siteHasCookieInOtherPartition.appendChild(Fi(un,Ve.siteHasCookieInOtherPartition,{PH1:Hi.create("https://developer.chrome.com/en/docs/privacy-sandbox/chips/",rt(Ve.learnMore),void 0,void 0,"learn-more")})),this.responseCookiesTitle=this.element.createChild("div","request-cookies-title"),this.responseCookiesTitle.textContent=rt(Ve.responseCookies),this.responseCookiesTitle.title=rt(Ve.cookiesThatWereReceivedFromThe),this.responseCookiesTable=new Js(!0),this.responseCookiesTable.contentElement.classList.add("cookie-table","cookies-panel-item"),this.responseCookiesTable.show(this.element),this.malformedResponseCookiesTitle=this.element.createChild("div","request-cookies-title"),this.malformedResponseCookiesTitle.textContent=rt(Ve.malformedResponseCookies),M.install(this.malformedResponseCookiesTitle,rt(Ve.cookiesThatWereReceivedFromTheServer)),this.malformedResponseCookiesList=this.element.createChild("div")}getRequestCookies(){const e=new Map,t=new Map,i=this.request.includedRequestCookies().map(o=>o.cookie);if(this.showFilteredOutCookiesSetting.get())for(const o of this.request.blockedRequestCookies())e.set(o.cookie,o.blockedReasons.map(a=>({attribute:aa(a),uiString:la(a)}))),i.push(o.cookie);for(const o of this.request.includedRequestCookies())o.exemptionReason&&t.set(o.cookie,{uiString:Os(o.exemptionReason)});return{requestCookies:i,requestCookieToBlockedReasons:e,requestCookieToExemptionReason:t}}getResponseCookies(){let e=[];const t=new Map,i=new Map,o=[];if(this.request.responseCookies.length){e=this.request.nonBlockedResponseCookies();for(const a of this.request.blockedResponseCookies()){const l=da.parseSetCookie(a.cookieLine);if(l&&!l.length||a.blockedReasons.includes("SyntaxError")||a.blockedReasons.includes("NameValuePairExceedsMaxSize")){o.push(a);continue}let c=a.cookie;!c&&l&&(c=l[0]),c&&(t.set(c,a.blockedReasons.map(d=>({attribute:ca(d),uiString:Xi(d)}))),e.push(c))}for(const a of this.request.exemptedResponseCookies()){const l=e.find(c=>a.cookieLine===c.getCookieLine());l&&i.set(l,{uiString:Os(a.exemptionReason)})}}return{responseCookies:e,responseCookieToBlockedReasons:t,responseCookieToExemptionReason:i,malformedResponseCookies:o}}refreshRequestCookiesView(){if(!this.isShowing())return;this.request.hasRequestCookies()||this.request.responseCookies.length?this.emptyWidget.hideWidget():this.emptyWidget.showWidget();const{requestCookies:t,requestCookieToBlockedReasons:i,requestCookieToExemptionReason:o}=this.getRequestCookies(),{responseCookies:a,responseCookieToBlockedReasons:l,responseCookieToExemptionReason:c,malformedResponseCookies:d}=this.getResponseCookies();if(t.length?(this.requestCookiesTitle.classList.remove("hidden"),this.requestCookiesEmpty.classList.add("hidden"),this.requestCookiesTable.showWidget(),this.requestCookiesTable.setCookies(t,i,o)):this.request.blockedRequestCookies().length?(this.requestCookiesTitle.classList.remove("hidden"),this.requestCookiesEmpty.classList.remove("hidden"),this.requestCookiesTable.hideWidget()):(this.requestCookiesTitle.classList.add("hidden"),this.requestCookiesEmpty.classList.add("hidden"),this.requestCookiesTable.hideWidget()),a.length?(this.responseCookiesTitle.classList.remove("hidden"),this.responseCookiesTable.showWidget(),this.responseCookiesTable.setCookies(a,l,c)):(this.responseCookiesTitle.classList.add("hidden"),this.responseCookiesTable.hideWidget()),d.length){this.malformedResponseCookiesTitle.classList.remove("hidden"),this.malformedResponseCookiesList.classList.remove("hidden"),this.malformedResponseCookiesList.removeChildren();for(const g of d){const p=this.malformedResponseCookiesList.createChild("span","cookie-line source-code"),m=new dt;m.data={iconName:"cross-circle-filled",color:"var(--icon-error)",width:"14px",height:"14px"},m.classList.add("cookie-warning-icon"),p.appendChild(m),z(p,g.cookieLine),g.blockedReasons.includes("NameValuePairExceedsMaxSize")?p.title=Xi("NameValuePairExceedsMaxSize"):p.title=Xi("SyntaxError")}}else this.malformedResponseCookiesTitle.classList.add("hidden"),this.malformedResponseCookiesList.classList.add("hidden");this.request.siteHasCookieInOtherPartition()?this.siteHasCookieInOtherPartition.classList.remove("hidden"):this.siteHasCookieInOtherPartition.classList.add("hidden")}wasShown(){super.wasShown(),this.registerCSSFiles([hn]),this.request.addEventListener(Y.REQUEST_HEADERS_CHANGED,this.refreshRequestCookiesView,this),this.request.addEventListener(Y.RESPONSE_HEADERS_CHANGED,this.refreshRequestCookiesView,this),this.refreshRequestCookiesView()}willHide(){this.request.removeEventListener(Y.REQUEST_HEADERS_CHANGED,this.refreshRequestCookiesView,this),this.request.removeEventListener(Y.RESPONSE_HEADERS_CHANGED,this.refreshRequestCookiesView,this)}}const Wd=Object.freeze(Object.defineProperty({__proto__:null,RequestCookiesView:pn},Symbol.toStringTag,{value:"Module"})),mn=new CSSStyleSheet;mn.replaceSync(`/*
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-initiator-view {
  display: block;
  margin: 6px;
}

/*# sourceURL=requestInitiatorView.css */
`);const gn=new CSSStyleSheet;gn.replaceSync(`/*
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-initiator-view-tree .fill {
  right: -6px; /* Same as the margin in .request-initiator-view but negative. */
}

.request-initiator-view-section-title {
  font-weight: bold;
  padding: 4px;
}

.request-initiator-view-section-title:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

@media (forced-colors: active) {
  .request-initiator-view-section-title:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=requestInitiatorViewTree.css */
`);const tr={thisRequestHasNoInitiatorData:"This request has no initiator data.",requestCallStack:"Request call stack",requestInitiatorChain:"Request initiator chain"},$d=Z("panels/network/RequestInitiatorView.ts",tr),Fr=Q.bind(void 0,$d);class Di extends me{linkifier;request;emptyWidget;hasShown;constructor(e){super(),this.element.classList.add("request-initiator-view"),this.element.setAttribute("jslog",`${tt("initiator").track({resize:!0})}`),this.linkifier=new Ze,this.request=e,this.emptyWidget=new jt(Fr(tr.thisRequestHasNoInitiatorData)),this.emptyWidget.show(this.element),this.hasShown=!1}static createStackTracePreview(e,t,i){const o=e.initiator();if(!o||!o.stack)return null;const a=Ge.forRequest(e),l=a?a.target():null;return ha(l,t,{stackTrace:o.stack,tabStops:i})}createTree(){const e=new pr;return e.registerCSSFiles([gn]),e.contentElement.classList.add("request-initiator-view-tree"),e.contentElement.setAttribute("jslog",`${ua("initiator-tree")}`),e}buildRequestChainTree(e,t,i){const o=new qe(t);i.appendChild(o),o.titleElement instanceof HTMLElement&&o.titleElement.classList.add("request-initiator-view-section-title");const a=e.initiators;let l=o;for(const g of Array.from(a).reverse()){const p=new qe(g.url());l.appendChild(p),l.expand(),l=p}o.expand(),l.select();const c=l.titleElement;c instanceof HTMLElement&&(c.style.fontWeight="bold");const d=e.initiated;return this.depthFirstSearchTreeBuilder(d,l,this.request),o}depthFirstSearchTreeBuilder(e,t,i){const o=new Set;o.add(this.request);for(const a of e.keys())if(e.get(a)===i){const l=new qe(a.url());t.appendChild(l),t.expand(),o.has(a)||(o.add(a),this.depthFirstSearchTreeBuilder(e,l,a))}}buildStackTraceSection(e,t,i){const o=new qe(t);i.appendChild(o),o.titleElement instanceof HTMLElement&&o.titleElement.classList.add("request-initiator-view-section-title");const a=new qe(e,!1);a.selectable=!1,o.appendChild(a),o.expand()}wasShown(){if(this.hasShown)return;this.registerCSSFiles([mn]);let e=!1;const t=this.createTree(),i=Di.createStackTracePreview(this.request,this.linkifier,!0);i&&(e=!0,this.buildStackTraceSection(i.element,Fr(tr.requestCallStack),t));const o=ae.instance().initiatorGraphForRequest(this.request);(o.initiators.size>1||o.initiated.size>1)&&(e=!0,this.buildRequestChainTree(o,Fr(tr.requestInitiatorChain),t));const a=t.firstChild();a&&a.select(!0),e&&(this.element.appendChild(t.element),this.emptyWidget.hideWidget()),this.hasShown=!0}}const Gd=Object.freeze(Object.defineProperty({__proto__:null,RequestInitiatorView:Di},Symbol.toStringTag,{value:"Module"})),fn=new CSSStyleSheet;fn.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  padding-left: 0;
}

.tree-outline > ol {
  padding-bottom: 5px;
  border-bottom: solid 1px var(--sys-color-divider);
}

.tree-outline > .parent {
  user-select: none;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  margin-top: -1px;
  display: flex;
  align-items: center;
  height: 26px;
}

.tree-outline li {
  padding-left: 5px;
  line-height: 20px;
}

.tree-outline li:not(.parent) {
  margin-left: 10px;
  display: block;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.tree-outline li.expanded .payload-count {
  display: none;
}

.tree-outline li .payload-toggle {
  display: none;
}

.tree-outline li.expanded .payload-toggle {
  display: inline;
  margin-left: 30px;
  font-weight: normal;
  color: var(--sys-color-on-surface);
  background: none;
  border: none;
}

.tree-outline li.expanded .payload-toggle:focus-visible {
  border: 2px solid var(--sys-color-state-focus-ring);
  border-radius: 5px;
}

.tree-outline li .header-toggle:hover {
  color: var(--sys-color-token-subtle);
}

.tree-outline .payload-name {
  color: var(--sys-color-token-subtle);
  display: inline-flex;
  margin-right: 0.25em;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
}

.tree-outline .payload-separator {
  user-select: none;
}

.tree-outline .payload-value {
  display: inline;
  margin-right: 1em;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 1px;
}

.tree-outline .empty-request-payload {
  color: var(--sys-color-state-disabled);
}

.request-payload-show-more-button {
  margin: 0 4px;
}

@media (forced-colors: active) {
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected:focus {
    background: Highlight;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li::before {
    background-color: ButtonText;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent::before {
    background-color: HighlightText;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected *,
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent,
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent span {
    color: HighlightText;
  }
}

.payload-decode-error {
  color: var(--sys-color-error);
}

/*# sourceURL=requestPayloadTree.css */
`);const wn=new CSSStyleSheet;wn.replaceSync(`/*
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-payload-view {
  user-select: text;
  overflow: auto;
}

.request-payload-tree {
  flex-grow: 1;
  overflow-y: auto;
  margin: 0;
}

/*# sourceURL=requestPayloadView.css */
`);const we={copyValue:"Copy value",requestPayload:"Request Payload",unableToDecodeValue:"(unable to decode value)",queryStringParameters:"Query String Parameters",formData:"Form Data",showMore:"Show more",viewParsed:"View parsed",empty:"(empty)",viewSource:"View source",viewUrlEncoded:"View URL-encoded",viewDecoded:"View decoded",viewUrlEncodedL:"view URL-encoded",viewDecodedL:"view decoded",viewParsedL:"view parsed",viewSourceL:"view source"},jd=Z("panels/network/RequestPayloadView.ts",we),ye=Q.bind(void 0,jd);class hi extends me{request;decodeRequestParameters;queryStringCategory;formDataCategory;requestPayloadCategory;constructor(e){super(),this.element.classList.add("request-payload-view"),this.element.setAttribute("jslog",`${tt("payload").track({resize:!0})}`),this.request=e,this.decodeRequestParameters=!0;const t=e.requestContentType();t&&(this.decodeRequestParameters=!!t.match(/^application\/x-www-form-urlencoded\s*(;.*)?$/i));const i=new pr;i.registerCSSFiles([pa,ma,fn]),i.element.classList.add("request-payload-tree"),i.makeDense(),this.element.appendChild(i.element),this.queryStringCategory=new ir(i,"query-string"),this.formDataCategory=new ir(i,"form-data"),this.requestPayloadCategory=new ir(i,"request-payload",ye(we.requestPayload))}wasShown(){this.registerCSSFiles([wn]),this.request.addEventListener(Y.REQUEST_HEADERS_CHANGED,this.refreshFormData,this),this.refreshQueryString(),this.refreshFormData()}willHide(){this.request.removeEventListener(Y.REQUEST_HEADERS_CHANGED,this.refreshFormData,this)}addEntryContextMenuHandler(e,t){e.listItemElement.addEventListener("contextmenu",i=>{i.consume(!0);const o=new Qe(i),a=decodeURIComponent(t),l=()=>{_e.actionTaken(ct.NetworkPanelCopyValue),ne.copyText(a)};o.clipboardSection().appendItem(ye(we.copyValue),l,{jslogContext:"copy-value"}),o.show()})}static formatParameter(e,t,i){let o=!1;if(i&&(e=e.replace(/\+/g," "),e.indexOf("%")>=0))try{e=decodeURIComponent(e)}catch{o=!0}const a=document.createElement("div");return t&&(a.className=t),e===""&&a.classList.add("empty-value"),o?a.createChild("span","payload-decode-error").textContent=ye(we.unableToDecodeValue):a.textContent=e,a}refreshQueryString(){const e=this.request.queryString(),t=this.request.queryParameters;this.queryStringCategory.hidden=!t,t&&this.refreshParams(ye(we.queryStringParameters),t,e,this.queryStringCategory)}async refreshFormData(){const e=await this.request.requestFormData();if(!e){this.formDataCategory.hidden=!0,this.requestPayloadCategory.hidden=!0;return}const t=await this.request.formParameters();if(t)this.formDataCategory.hidden=!1,this.requestPayloadCategory.hidden=!0,this.refreshParams(ye(we.formData),t,e,this.formDataCategory);else{this.requestPayloadCategory.hidden=!1,this.formDataCategory.hidden=!0;try{const i=JSON.parse(e);this.refreshRequestJSONPayload(i,e)}catch{this.populateTreeElementWithSourceText(this.requestPayloadCategory,e)}}}populateTreeElementWithSourceText(e,t){const o=(t||"").trim(),a=o.length>3e3,l=document.createElement("span");l.classList.add("payload-value"),l.classList.add("source-code"),l.textContent=a?o.substr(0,3e3):o;const c=new qe(l);if(e.removeChildren(),e.appendChild(c),!a)return;const d=new ga;d.data={variant:"outlined",jslogContext:"show-more"},d.innerText=ye(we.showMore),d.classList.add("request-payload-show-more-button");function g(){d.remove(),l.textContent=o,c.listItemElement.removeEventListener("contextmenu",p)}d.addEventListener("click",g);function p(m){const f=new Qe(m);f.newSection().appendItem(ye(we.showMore),g,{jslogContext:"show-more"}),f.show()}c.listItemElement.addEventListener("contextmenu",p),l.appendChild(d)}refreshParams(e,t,i,o){o.removeChildren(),o.listItemElement.removeChildren(),o.listItemElement.createChild("div","selection fill"),z(o.listItemElement,e);const a=document.createElement("span");a.classList.add("payload-count");const l=t?t.length:0;a.textContent=` (${l})`,o.listItemElement.appendChild(a),ei.has(o)?this.appendParamsSource(e,t,i,o):this.appendParamsParsed(e,t,i,o)}appendParamsSource(e,t,i,o){this.populateTreeElementWithSourceText(o,i);const a=o.listItemElement,l=function(g){a.removeEventListener("contextmenu",c),ei.delete(o),this.refreshParams(e,t,i,o),g.consume()},c=g=>{if(!o.expanded)return;const p=new Qe(g);p.newSection().appendItem(ye(we.viewParsed),l.bind(this,g),{jslogContext:"view-parsed"}),p.show()},d=this.createViewSourceToggle(!0,l.bind(this));a.appendChild(d),a.addEventListener("contextmenu",c)}appendParamsParsed(e,t,i,o){for(const f of t||[]){const k=document.createDocumentFragment();if(f.name!==""){const C=hi.formatParameter(f.name+": ","payload-name",this.decodeRequestParameters),I=hi.formatParameter(f.value,"payload-value source-code",this.decodeRequestParameters);k.appendChild(C),k.createChild("span","payload-separator"),k.appendChild(I)}else k.appendChild(hi.formatParameter(ye(we.empty),"empty-request-payload",this.decodeRequestParameters));const u=new qe(k);this.addEntryContextMenuHandler(u,f.value),o.appendChild(u)}const a=o.listItemElement,l=function(f){a.removeEventListener("contextmenu",d),ei.add(o),this.refreshParams(e,t,i,o),f.consume()},c=function(f){a.removeEventListener("contextmenu",d),this.toggleURLDecoding(f)},d=f=>{if(!o.expanded)return;const k=new Qe(f),u=k.newSection();u.appendItem(ye(we.viewSource),l.bind(this,f),{jslogContext:"view-source"});const C=this.decodeRequestParameters?ye(we.viewUrlEncoded):ye(we.viewDecoded);u.appendItem(C,c.bind(this,f),{jslogContext:"toggle-url-decoding"}),k.show()},g=this.createViewSourceToggle(!1,l.bind(this));a.appendChild(g);const p=this.decodeRequestParameters?ye(we.viewUrlEncodedL):ye(we.viewDecodedL),m=this.createToggleButton(p);m.setAttribute("jslog",`${rr("decode-encode").track({click:!0})}`),m.addEventListener("click",c.bind(this),!1),a.appendChild(m),a.addEventListener("contextmenu",d)}refreshRequestJSONPayload(e,t){const i=this.requestPayloadCategory;i.removeChildren();const o=i.listItemElement;o.removeChildren(),o.createChild("div","selection fill"),z(o,this.requestPayloadCategory.title.toString()),ei.has(i)?this.appendJSONPayloadSource(i,e,t):this.appendJSONPayloadParsed(i,e,t)}appendJSONPayloadSource(e,t,i){const o=e.listItemElement;this.populateTreeElementWithSourceText(e,i);const a=function(d){o.removeEventListener("contextmenu",c),ei.delete(e),this.refreshRequestJSONPayload(t,i),d.consume()},l=this.createViewSourceToggle(!0,a.bind(this));o.appendChild(l);const c=d=>{if(!e.expanded)return;const g=new Qe(d);g.newSection().appendItem(ye(we.viewParsed),a.bind(this,d),{jslogContext:"view-parsed"}),g.show()};o.addEventListener("contextmenu",c)}appendJSONPayloadParsed(e,t,i){const o=Or.fromLocalObject(t),a=new Dr(o);a.title=o.description,a.expand(),a.editable=!1,e.childrenListElement.classList.add("source-code","object-properties-section"),e.appendChild(a);const l=e.listItemElement,c=function(p){l.removeEventListener("contextmenu",d),ei.add(e),this.refreshRequestJSONPayload(t,i),p.consume()},d=p=>{if(!e.expanded)return;const m=new Qe(p);m.newSection().appendItem(ye(we.viewSource),c.bind(this,p),{jslogContext:"view-source"}),m.show()},g=this.createViewSourceToggle(!1,c.bind(this));l.appendChild(g),l.addEventListener("contextmenu",d)}createViewSourceToggle(e,t){const i=ye(e?we.viewParsedL:we.viewSourceL),o=this.createToggleButton(i);return o.setAttribute("jslog",`${rr("source-parse").track({click:!0})}`),o.addEventListener("click",t,!1),o}toggleURLDecoding(e){this.decodeRequestParameters=!this.decodeRequestParameters,this.refreshQueryString(),this.refreshFormData(),e.consume()}createToggleButton(e){const t=document.createElement("button");return t.classList.add("payload-toggle"),t.tabIndex=0,t.textContent=e,t}}const ei=new WeakSet;let ir=class extends qe{toggleOnClick;expandedSetting;expanded;constructor(e,t,i){super(i||"",!0),this.toggleOnClick=!0,this.hidden=!0,this.expandedSetting=H.instance().createSetting("request-info-"+t+"-category-expanded",!0),this.expanded=this.expandedSetting.get(),this.listItemElement.setAttribute("jslog",`${di().context(t)}`),e.appendChild(this)}createLeaf(){const e=new qe;return this.appendChild(e),e}onexpand(){this.expandedSetting.set(!0)}oncollapse(){this.expandedSetting.set(!1)}};const zd=Object.freeze(Object.defineProperty({__proto__:null,Category:ir,RequestPayloadView:hi},Symbol.toStringTag,{value:"Module"})),vn=new CSSStyleSheet;vn.replaceSync(`/*
 * Copyright (c) 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.html-preview-frame {
  box-shadow: var(--drop-shadow);
  /* We always want a white background, even in dark mode */
  background: var(--ref-palette-neutral100);
  color-scheme: light;
  flex-grow: 1;
  margin: 20px;
}

/*# sourceURL=requestHTMLView.css */
`);class gr extends me{dataURL;constructor(e){super(!0),this.dataURL=e,this.contentElement.classList.add("html","request-view")}static create(e){const t=e.asDataUrl();return t?new gr(t):null}wasShown(){this.createIFrame(),this.registerCSSFiles([vn])}willHide(){this.contentElement.removeChildren()}createIFrame(){this.contentElement.removeChildren();const e=document.createElement("iframe");e.className="html-preview-frame",e.setAttribute("sandbox",""),e.setAttribute("csp","default-src 'none';img-src data:;style-src 'unsafe-inline'"),e.setAttribute("src",this.dataURL),e.tabIndex=-1,fa(e),this.contentElement.appendChild(e)}}const _d=Object.freeze(Object.defineProperty({__proto__:null,RequestHTMLView:gr},Symbol.toStringTag,{value:"Module"}));class yn extends kl{#e;#t;constructor(e){const t=new Kd;super(t,0,"tabId is unused here",!0),this.#t=t,this.#e=e,this.refreshData()}wasShown(){this.refreshData(),this.#e.addEventListener("ChunkAdded",this.refreshData,this)}willHide(){super.willHide(),this.#e.removeEventListener("ChunkAdded",this.refreshData,this)}refreshData(){this.#t.updateWithContentData(this.#e.content()),super.refreshData()}}class Kd{#e=new Uint8Array([0]);updateWithContentData(e){const t=window.atob(e.base64);this.#e=Uint8Array.from(t,i=>i.codePointAt(0))}getRange(e,t){return Promise.resolve(this.#e.slice(e,t))}length(){return this.#e.length}}const Yd=Object.freeze(Object.defineProperty({__proto__:null,RequestBinaryResponseView:yn},Symbol.toStringTag,{value:"Module"})),jr={thisRequestHasNoResponseData:"This request has no response data available.",failedToLoadResponseData:"Failed to load response data"},Xd=Z("panels/network/RequestResponseView.ts",jr),Zs=Q.bind(void 0,Xd);class pi extends me{request;contentViewPromise;constructor(e){super(),this.element.classList.add("request-view"),this.element.setAttribute("jslog",`${tt("response").track({resize:!0})}`),this.request=e,this.contentViewPromise=null}static async sourceViewForRequest(e){let t=Hr.get(e);if(t!==void 0)return t;const i=await e.requestStreamingContent();if(Ds(i))return Hr.delete(e),null;let o;Lt.simplifyContentType(e.mimeType)==="application/json"?o=e.mimeType:o=e.resourceType().canonicalMimeType()||e.mimeType;const a=i.mimeType==="application/wasm",l=a||!i.isTextContent?!1:wa(i.content().text),c=Lt.mediaTypeForMetrics(o,e.resourceType().isFromSourceMap(),l,!1,!1);return _e.networkPanelResponsePreviewOpened(c),i.isTextContent||a?t=Ii.createSearchableView(e,o):t=new yn(i),Hr.set(e,t),t}wasShown(){this.doShowPreview()}doShowPreview(){return this.contentViewPromise||(this.contentViewPromise=this.showPreview()),this.contentViewPromise}async showPreview(){const e=await this.createPreview();return e.show(this.element),e}async createPreview(){const e=await this.request.requestStreamingContent();if(Ds(e))return new jt(Zs(jr.failedToLoadResponseData)+": "+e.error);const t=await pi.sourceViewForRequest(this.request);return!t||this.request.statusCode===204?new jt(Zs(jr.thisRequestHasNoResponseData)):t}async revealPosition(e){const t=await this.doShowPreview();t instanceof pl&&t.revealPosition(e)}}const Hr=new WeakMap,Jd=Object.freeze(Object.defineProperty({__proto__:null,RequestResponseView:pi},Symbol.toStringTag,{value:"Module"})),kn=new CSSStyleSheet;kn.replaceSync(`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  padding-left: 0;
}

.tree-outline > ol {
  padding-bottom: 5px;
  border-bottom: solid 1px var(--sys-color-divider);
}

.tree-outline > .parent {
  user-select: none;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  margin-top: -1px;
  display: flex;
  align-items: center;
  height: 26px;
}

.tree-outline li {
  padding-left: 5px;
  line-height: 20px;
}

.tree-outline li:not(.parent) {
  display: block;
  margin-left: 10px;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.tree-outline .header-name {
  color: var(--sys-color-token-subtle);
  display: inline-block;
  margin-right: 0.25em;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
}

.tree-outline .header-separator {
  user-select: none;
}

.tree-outline .header-value {
  display: inline;
  margin-right: 1em;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 1px;
}

.tree-outline .header-toggle {
  display: inline;
  margin-left: 30px;
  font-weight: normal;
  color: var(--sys-color-state-disabled);
}

.tree-outline .header-toggle:hover {
  color: var(--sys-color-state-hover-on-subtle);
}

.tree-outline .error-log {
  color: var(--sys-color-error);
  display: inline-block;
  margin-right: 0.25em;
  margin-left: 0.25em;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
}

.tree-outline .hex-data {
  display: block;
  word-break: break-word;
  margin-left: 20px;
}

.tree-outline .error-field {
  color: var(--sys-color-error);
}

.prompt-icon {
  margin-top: 2px;
}

/*# sourceURL=signedExchangeInfoTree.css */
`);const bn=new CSSStyleSheet;bn.replaceSync(`/*
 * Copyright (c) 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.signed-exchange-info-view {
  user-select: text;
  overflow: auto;
}

.signed-exchange-info-tree {
  flex-grow: 1;
  overflow-y: auto;
  margin: 0;
}

/*# sourceURL=signedExchangeInfoView.css */
`);const ce={errors:"Errors",signedHttpExchange:"Signed HTTP exchange",learnmore:"Learn more",requestUrl:"Request URL",responseCode:"Response code",headerIntegrityHash:"Header integrity hash",responseHeaders:"Response headers",signature:"Signature",label:"Label",certificateUrl:"Certificate URL",viewCertificate:"View certificate",integrity:"Integrity",certificateSha:"Certificate SHA256",validityUrl:"Validity URL",date:"Date",expires:"Expires",certificate:"Certificate",subject:"Subject",validFrom:"Valid from",validUntil:"Valid until",issuer:"Issuer"},Zd=Z("panels/network/SignedExchangeInfoView.ts",ce),ue=Q.bind(void 0,Zd);class Sn extends me{responseHeadersItem;constructor(e){super(),console.assert(e.signedExchangeInfo()!==null);const t=e.signedExchangeInfo();this.element.classList.add("signed-exchange-info-view");const i=new pr;i.registerCSSFiles([kn]),i.element.classList.add("signed-exchange-info-tree"),i.setFocusable(!1),i.makeDense(),i.expandTreeElementsWhenArrowing=!0,this.element.appendChild(i.element);const o=new Map;if(t.errors&&t.errors.length){const d=new Ti(i,ue(ce.errors));for(const g of t.errors){const p=document.createDocumentFragment(),m=new dt;if(m.data={iconName:"cross-circle-filled",color:"var(--icon-error)",width:"14px",height:"14px"},m.classList.add("prompt-icon"),p.appendChild(m),p.createChild("div","error-log").textContent=g.message,d.createLeaf(p),g.errorField){let f=o.get(g.signatureIndex);f||(f=new Set,o.set(g.signatureIndex,f)),f.add(g.errorField)}}}const a=document.createDocumentFragment();a.createChild("div","header-name").textContent=ue(ce.signedHttpExchange);const l=Hi.create("https://github.com/WICG/webpackage",ue(ce.learnmore),"header-toggle",void 0,"learn-more");a.appendChild(l);const c=new Ti(i,a);if(t.header){const d=t.header,g=e.redirectDestination(),p=this.formatHeader(ue(ce.requestUrl),d.requestUrl);if(g){const f=Ze.linkifyRevealable(g,"View request",void 0,void 0,void 0,"redirect-destination-request");f.classList.add("header-toggle"),p.appendChild(f)}c.createLeaf(p),c.createLeaf(this.formatHeader(ue(ce.responseCode),String(d.responseCode))),c.createLeaf(this.formatHeader(ue(ce.headerIntegrityHash),d.headerIntegrity)),this.responseHeadersItem=c.createLeaf(this.formatHeader(ue(ce.responseHeaders),""));const m=d.responseHeaders;for(const f in m){const k=new qe(this.formatHeader(f,m[f]));k.selectable=!1,this.responseHeadersItem.appendChild(k)}this.responseHeadersItem.expand();for(let f=0;f<d.signatures.length;++f){const k=o.get(f)||new Set,u=d.signatures[f],C=new Ti(i,ue(ce.signature));if(C.createLeaf(this.formatHeader(ue(ce.label),u.label)),C.createLeaf(this.formatHeaderForHexData(ue(ce.signature),u.signature,k.has("signatureSig"))),u.certUrl){const I=this.formatHeader(ue(ce.certificateUrl),u.certUrl,k.has("signatureCertUrl"));if(u.certificates){const U=I.createChild("span","devtools-link header-toggle");U.textContent=ue(ce.viewCertificate),U.addEventListener("click",ne.showCertificateViewer.bind(null,u.certificates),!1)}C.createLeaf(I)}C.createLeaf(this.formatHeader(ue(ce.integrity),u.integrity,k.has("signatureIntegrity"))),u.certSha256&&C.createLeaf(this.formatHeaderForHexData(ue(ce.certificateSha),u.certSha256,k.has("signatureCertSha256"))),C.createLeaf(this.formatHeader(ue(ce.validityUrl),u.validityUrl,k.has("signatureValidityUrl"))),C.createLeaf().title=this.formatHeader(ue(ce.date),new Date(1e3*u.date).toUTCString(),k.has("signatureTimestamps")),C.createLeaf().title=this.formatHeader(ue(ce.expires),new Date(1e3*u.expires).toUTCString(),k.has("signatureTimestamps"))}}if(t.securityDetails){const d=t.securityDetails,g=new Ti(i,ue(ce.certificate));g.createLeaf(this.formatHeader(ue(ce.subject),d.subjectName)),g.createLeaf(this.formatHeader(ue(ce.validFrom),new Date(1e3*d.validFrom).toUTCString())),g.createLeaf(this.formatHeader(ue(ce.validUntil),new Date(1e3*d.validTo).toUTCString())),g.createLeaf(this.formatHeader(ue(ce.issuer),d.issuer))}}formatHeader(e,t,i){const o=document.createDocumentFragment(),a=o.createChild("div","header-name");a.textContent=e+": ",o.createChild("span","header-separator");const l=o.createChild("div","header-value source-code");return l.textContent=t,i&&(a.classList.add("error-field"),l.classList.add("error-field")),o}formatHeaderForHexData(e,t,i){const o=document.createDocumentFragment(),a=o.createChild("div","header-name");a.textContent=e+": ",o.createChild("span","header-separator");const l=o.createChild("div","header-value source-code hex-data");return l.textContent=t.replace(/(.{2})/g,"$1 "),i&&(a.classList.add("error-field"),l.classList.add("error-field")),o}wasShown(){super.wasShown(),this.registerCSSFiles([bn])}}class Ti extends qe{toggleOnClick;expanded;constructor(e,t){super(t,!0),this.selectable=!1,this.toggleOnClick=!0,this.expanded=!0,e.appendChild(this)}createLeaf(e){const t=new qe(e);return t.selectable=!1,this.appendChild(t),t}}const Qd=Object.freeze(Object.defineProperty({__proto__:null,Category:Ti,SignedExchangeInfoView:Sn},Symbol.toStringTag,{value:"Module"})),zr={failedToLoadResponseData:"Failed to load response data",previewNotAvailable:"Preview not available"},ec=Z("panels/network/RequestPreviewView.ts",zr),Qs=Q.bind(void 0,ec);class Cn extends pi{constructor(e){super(e),this.element.setAttribute("jslog",`${tt("preview").track({resize:!0})}`)}async showPreview(){const e=await super.showPreview();if(!(e instanceof va))return e;const t=new Ne("network-item-preview-toolbar",this.element);return e.toolbarItems().then(i=>{i.map(o=>t.appendToolbarItem(o))}),e}async htmlPreview(){const e=await this.request.requestContentData();if(qi.isError(e))return new jt(Qs(zr.failedToLoadResponseData)+": "+e.error);if(!new Set(["text/html","text/plain","application/xhtml+xml"]).has(this.request.mimeType))return null;const i=await Eo.createView(e.text);return i||gr.create(e)}async createPreview(){if(this.request.signedExchangeInfo())return new Sn(this.request);if(this.request.webBundleInfo())return Ur(me,new ln(this.request));const e=await this.htmlPreview();if(e)return e;const t=await ml.createPreview(this.request,this.request.mimeType);return t||new jt(Qs(zr.previewNotAvailable))}}const tc=Object.freeze(Object.defineProperty({__proto__:null,RequestPreviewView:Cn},Symbol.toStringTag,{value:"Module"})),gs=new CSSStyleSheet;gs.replaceSync(`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.network-timing-table {
  width: 380px;
  border-spacing: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: initial;
  table-layout: fixed;
}

.network-timing-start {
  border-top: 5px solid transparent;
}

.network-timing-start th span.network-timing-hidden-header {
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
}

.network-timing-table-header td,
.network-timing-footer td {
  border-top: 10px solid transparent;
}

.network-timing-table-header td {
  color: var(--sys-color-token-subtle);
}

.network-timing-table td {
  padding: 4px 0;
}

.network-timing-table-header td:last-child {
  text-align: right;
}

.network-timing-footer td:last-child {
  font-weight: bold;
  text-align: right;
}

table.network-timing-table > tr:not(.network-timing-table-header):not(.network-timing-footer) > td:first-child {
  padding-left: 12px;
}

.network-timing-table col.labels {
  width: 156px;
}

.network-timing-table col.duration {
  width: 80px;
}

.network-timing-table td.caution {
  font-weight: bold;
  color: var(--issue-color-yellow);
  padding: 2px 0;
}

.network-timing-table hr.break {
  background-color: var(--sys-color-divider);
  border: none;
  height: 1px;
}

.network-timing-row {
  position: relative;
  height: 15px;
}

.network-timing-bar {
  position: absolute;
  min-width: 1px;
  top: 0;
  bottom: 0;
}

.network-timing-bar-title {
  color: var(--sys-color-on-surface);
  white-space: nowrap;
  text-align: right;
}

.network-timing-bar.queueing,
.network-timing-bar.total {
  border: 1px solid var(--sys-color-token-subtle);
}

.network-timing-bar.blocking,
.-theme-preserve {
  background-color: var(--network-overview-blocking); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.proxy,
.-theme-preserve {
  background-color: var(--override-network-overview-proxy);
}

.network-timing-bar.dns,
.-theme-preserve {
  background-color: var(--sys-color-cyan);
}

.network-timing-bar.connecting,
.network-timing-bar.serviceworker,
.network-timing-bar.serviceworker-preparation,
.network-timing-bar.serviceworker-routerevaluation,
.network-timing-bar.serviceworker-cachelookup,
.-theme-preserve {
  background-color: var(--network-overview-service-worker); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.ssl,
.-theme-preserve {
  background-color: var(--network-overview-ssl); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.serviceworker-respondwith,
.-theme-preserve {
  background-color: var(--network-overview-service-worker-respond-with); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-fetch-timing-bar-clickable::before {
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

.network-fetch-timing-bar-clickable {
  position: relative;
  left: -12px;
}

.network-fetch-timing-bar-clickable:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.network-fetch-timing-bar-clickable[aria-checked="true"]::before {
  transform: rotate(90deg);
}

.network-fetch-timing-bar-details-collapsed {
  display: none;
}

.network-fetch-timing-bar-details-expanded {
  display: block;
}

.network-fetch-timing-bar-details {
  padding-left: 11px;
  width: fit-content;
}

.network-fetch-details-treeitem {
  width: max-content;
}

.network-timing-bar.sending,
.-theme-preserve {
  background-color: var(--override-network-overview-sending);
}

.network-timing-bar.waiting,
.-theme-preserve {
  background-color: var(--network-overview-waiting); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.receiving,
.network-timing-bar.receiving-push,
.-theme-preserve {
  background-color: var(--network-overview-receiving); /* stylelint-disable-line plugin/use_theme_colors */
}

.network-timing-bar.push,
.-theme-preserve {
  background-color: var(--network-overview-push); /* stylelint-disable-line plugin/use_theme_colors */
}

.server-timing-row:nth-child(even) {
  background: var(--sys-color-surface1);
}

.network-timing-bar.server-timing,
.-theme-preserve {
  background-color: var(--sys-color-neutral-container);
}

.network-timing-table td.network-timing-metric {
  white-space: nowrap;
  max-width: 150px;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.network-timing-bar.proxy,
.network-timing-bar.dns,
.network-timing-bar.ssl,
.network-timing-bar.connecting,
.network-timing-bar.blocking {
  height: 10px;
  margin: auto;
}

@media (forced-colors: active) {
  .network-timing-bar.blocking,
  .network-timing-bar.proxy,
  .network-timing-bar.dns,
  .network-timing-bar.connecting,
  .network-timing-bar.serviceworker,
  .network-timing-bar.serviceworker-preparation,
  .network-timing-bar.ssl,
  .network-timing-bar.sending,
  .network-timing-bar.waiting,
  .network-timing-bar.receiving,
  .network-timing-bar.receiving-push,
  .network-timing-bar.push,
  .network-timing-bar.server-timing,
  .-theme-preserve {
    forced-color-adjust: none;
  }

  .network-timing-table-header td,
  .network-timing-footer td {
    forced-color-adjust: none;
    color: ButtonText;
  }
}

/*# sourceURL=networkTimingTable.css */
`);const D={receivingPush:"Receiving `Push`",queueing:"Queueing",stalled:"Stalled",initialConnection:"Initial connection",dnsLookup:"DNS Lookup",proxyNegotiation:"Proxy negotiation",readingPush:"Reading `Push`",contentDownload:"Content Download",requestSent:"Request sent",requestToServiceworker:"Request to `ServiceWorker`",startup:"Startup",respondwith:"respondWith",ssl:"SSL",total:"Total",waitingTtfb:"Waiting for server response",label:"Label",waterfall:"Waterfall",duration:"Duration",queuedAtS:"Queued at {PH1}",startedAtS:"Started at {PH1}",serverPush:"Server Push",resourceScheduling:"Resource Scheduling",connectionStart:"Connection Start",requestresponse:"Request/Response",cautionRequestIsNotFinishedYet:"CAUTION: request is not finished yet!",explanation:"Explanation",serverTiming:"Server Timing",time:"TIME",theServerTimingApi:"the Server Timing API",duringDevelopmentYouCanUseSToAdd:"During development, you can use {PH1} to add insights into the server-side timing of this request.",durationC:"DURATION",originalRequest:"Original Request",responseReceived:"Response Received",unknown:"Unknown",sourceOfResponseS:"Source of response: {PH1}",cacheStorageCacheNameS:"Cache storage cache name: {PH1}",cacheStorageCacheNameUnknown:"Cache storage cache name: Unknown",retrievalTimeS:"Retrieval Time: {PH1}",serviceworkerCacheStorage:"`ServiceWorker` cache storage",fromHttpCache:"From HTTP cache",networkFetch:"Network fetch",fallbackCode:"Fallback code"},xn=Z("panels/network/RequestTimingView.ts",D),V=Q.bind(void 0,xn);class Ke extends me{request;calculator;lastMinimumBoundary;tableElement;constructor(e,t){super(),this.element.classList.add("resource-timing-view"),this.request=e,this.calculator=t,this.lastMinimumBoundary=-1}static timeRangeTitle(e){switch(e){case"push":return V(D.receivingPush);case"queueing":return V(D.queueing);case"blocking":return V(D.stalled);case"connecting":return V(D.initialConnection);case"dns":return V(D.dnsLookup);case"proxy":return V(D.proxyNegotiation);case"receiving-push":return V(D.readingPush);case"receiving":return V(D.contentDownload);case"sending":return V(D.requestSent);case"serviceworker":return V(D.requestToServiceworker);case"serviceworker-preparation":return V(D.startup);case"serviceworker-respondwith":return V(D.respondwith);case"ssl":return V(D.ssl);case"total":return V(D.total);case"waiting":return V(D.waitingTtfb);default:return e}}static calculateRequestTimeRanges(e,t){const i=[];function o(u,C,I){C<Number.MAX_VALUE&&C<=I&&i.push({name:u,start:C,end:I})}function a(u){for(let C=0;C<u.length;++C)if(u[C]>0)return u[C]}function l(u,C,I){C>=0&&I>=0&&o(u,p+C/1e3,p+I/1e3)}function c(u,C,I){o(u,p+C/1e3,p+I/1e3)}const d=e.timing;if(!d){const u=e.issueTime()!==-1?e.issueTime():e.startTime!==-1?e.startTime:0,C=e.issueTime()!==-1&&e.startTime!==-1&&e.issueTime()!==e.startTime,I=e.responseReceivedTime===-1?C?e.startTime:Number.MAX_VALUE:e.responseReceivedTime,U=e.endTime===-1?Number.MAX_VALUE:e.endTime;o("total",u,U),o("blocking",u,I);const P=e.responseReceivedTime===-1?"connecting":"receiving";return o(P,I,U),i}const g=e.issueTime(),p=d.requestTime,m=a([e.endTime,e.responseReceivedTime])||p;if(o("total",g<p?g:p,m),d.pushStart){const u=d.pushEnd||m;u>t&&o("push",Math.max(d.pushStart,t),u)}g<p&&o("queueing",g,p);const f=(e.responseReceivedTime-p)*1e3;if(e.fetchedViaServiceWorker)l("blocking",0,d.workerStart),l("serviceworker-preparation",d.workerStart,d.workerReady),l("serviceworker-respondwith",d.workerFetchStart,d.workerRespondWithSettled),l("serviceworker",d.workerReady,d.sendEnd),l("waiting",d.sendEnd,f);else if(!d.pushStart){const u=a([d.dnsStart,d.connectStart,d.sendStart,f])||0;l("blocking",0,u),l("proxy",d.proxyStart,d.proxyEnd),l("dns",d.dnsStart,d.dnsEnd),l("connecting",d.connectStart,d.connectEnd),l("ssl",d.sslStart,d.sslEnd),l("sending",d.sendStart,d.sendEnd),l("waiting",Math.max(d.sendEnd,d.connectEnd,d.dnsEnd,d.proxyEnd,u),f)}const{serviceWorkerRouterInfo:k}=e;if(k){if(d.workerRouterEvaluationStart){let u=d.sendStart;k?.matchedSourceType==="cache"&&d.workerCacheLookupStart?u=d.workerCacheLookupStart:k?.actualSourceType==="fetch-event"&&(u=d.workerStart),c("serviceworker-routerevaluation",d.workerRouterEvaluationStart,u)}if(d.workerCacheLookupStart){let u=d.sendStart;k?.actualSourceType==="cache"&&(u=d.receiveHeadersStart),c("serviceworker-cachelookup",d.workerCacheLookupStart,u)}}return e.endTime!==-1&&o(d.pushStart?"receiving-push":"receiving",e.responseReceivedTime,m),i}static createTimingTable(e,t){const i=document.createElement("table");i.classList.add("network-timing-table"),i.setAttribute("jslog",`${tt("timing").track({resize:!0})}`);const o=i.createChild("colgroup");o.createChild("col","labels"),o.createChild("col","bars"),o.createChild("col","duration");const a=Ke.calculateRequestTimeRanges(e,t.minimumBoundary()),l=a.map($=>$.start).reduce(($,ee)=>Math.min($,ee)),c=a.map($=>$.end).reduce(($,ee)=>Math.max($,ee)),d=100/(c-l);let g,p,m,f,k=0;const u=i.createChild("thead","network-timing-start"),C=u.createChild("tr"),I=C.createChild("th");I.createChild("span","network-timing-hidden-header").textContent=V(D.label),I.scope="col";const U=C.createChild("th");U.createChild("span","network-timing-hidden-header").textContent=V(D.waterfall),U.scope="col";const P=C.createChild("th");P.createChild("span","network-timing-hidden-header").textContent=V(D.duration),P.scope="col";const W=u.createChild("tr").createChild("td"),ge=u.createChild("tr").createChild("td");W.colSpan=ge.colSpan=3,z(W,V(D.queuedAtS,{PH1:t.formatValue(e.issueTime(),2)})),z(ge,V(D.startedAtS,{PH1:t.formatValue(e.startTime,2)}));let Te;for(let $=0;$<a.length;++$){const ee=a[$],Se=ee.name;if(Se==="total"){k=ee.end-ee.start;continue}Se==="push"?bt(V(D.serverPush)):Se==="queueing"?f||(f=bt(V(D.resourceScheduling))):Rn.has(Se)?g||(g=bt(V(D.connectionStart))):Tn.has(Se)?p||(p=bt("Service Worker")):m||(m=bt(V(D.requestresponse)));const St=d*(ee.start-l);Te=d*(c-ee.end);const ht=ee.end-ee.start,ut=i.createChild("tr"),Ue=ut.createChild("td");z(Ue,Ke.timeRangeTitle(Se));const Nt=ut.createChild("td").createChild("div","network-timing-row"),pe=Nt.createChild("span","network-timing-bar "+Se);pe.style.left=St+"%",pe.style.right=Te+"%",pe.textContent="​",qt(Nt,V(D.startedAtS,{PH1:t.formatValue(ee.start,2)}));const pt=ut.createChild("td").createChild("div","network-timing-bar-title");pt.textContent=Me(ht,!0),ee.name==="serviceworker-respondwith"&&(Ue.classList.add("network-fetch-timing-bar-clickable"),i.createChild("tr","network-fetch-timing-bar-details"),Ue.setAttribute("tabindex","0"),Ue.setAttribute("role","switch"),ya(Ue,!1))}if(!e.finished&&!e.preserved){const $=i.createChild("tr").createChild("td","caution");$.colSpan=3,z($,V(D.cautionRequestIsNotFinishedYet))}const X=i.createChild("tr","network-timing-footer"),he=X.createChild("td");he.colSpan=1;const Ui=Hi.create("https://developer.chrome.com/docs/devtools/network/reference/#timing-explanation",V(D.explanation),void 0,void 0,"explanation");he.appendChild(Ui),X.createChild("td"),z(X.createChild("td"),Me(k,!0));const Pt=e.serverTimings,Kt=Te===void 0?100:Te,Yt=i.createChild("tr","network-timing-table-header").createChild("td");Yt.colSpan=3,Yt.createChild("hr","break");const mi=i.createChild("tr","network-timing-table-header");if(z(mi.createChild("td"),V(D.serverTiming)),mi.createChild("td"),z(mi.createChild("td"),V(D.time)),!Pt){const ee=i.createChild("tr").createChild("td");ee.colSpan=3;const Se=Hi.create("https://web.dev/custom-metrics/#server-timing-api",V(D.theServerTimingApi),void 0,void 0,"server-timing-api");return ee.appendChild(Fi(xn,D.duringDevelopmentYouCanUseSToAdd,{PH1:Se})),i}return Pt.filter($=>$.metric.toLowerCase()!=="total").forEach($=>gi($,Kt)),Pt.filter($=>$.metric.toLowerCase()==="total").forEach($=>gi($,Kt)),i;function gi($,ee){const Se=new Sa({min:0,max:360,count:36},{min:50,max:80,count:void 0},80),St=$.metric.toLowerCase()==="total",ht=i.createChild("tr",St?"network-timing-footer":"server-timing-row"),ut=ht.createChild("td","network-timing-metric"),Ue=$.description||$.metric;z(ut,Ue),M.install(ut,Ue);const Nt=ht.createChild("td").createChild("div","network-timing-row");if($.value===null)return;const pe=d*(c-l-$.value/1e3);if(pe>=0){const Ct=Nt.createChild("span","network-timing-bar server-timing");Ct.style.left=pe+"%",Ct.style.right=ee+"%",Ct.textContent="​",St||(Ct.style.backgroundColor=Se.colorForID($.metric))}const pt=ht.createChild("td").createChild("div","network-timing-bar-title");pt.textContent=ka($.value,!0)}function bt($){const ee=i.createChild("tr","network-timing-table-header"),Se=ee.createChild("td");return z(Se,$),ba(Se,2),z(ee.createChild("td"),""),z(ee.createChild("td"),V(D.durationC)),ee}}constructFetchDetailsView(){if(!this.tableElement)return;const e=this.tableElement.ownerDocument,t=e.querySelector(".network-fetch-timing-bar-details");if(!t)return;t.classList.add("network-fetch-timing-bar-details-collapsed"),self.onInvokeElement(this.tableElement,this.onToggleFetchDetails.bind(this,t));const i=new pr;t.appendChild(i.element);const o=ae.instance().originalRequestForURL(this.request.url());if(o){const u=Or.fromLocalObject(o),C=new Dr(u);C.title=V(D.originalRequest),i.appendChild(C)}const a=ae.instance().originalResponseForURL(this.request.url());if(a){const u=Or.fromLocalObject(a),C=new Dr(u);C.title=V(D.responseReceived),i.appendChild(C)}const l=e.createElement("div");l.classList.add("network-fetch-details-treeitem");let c=V(D.unknown);const d=this.request.serviceWorkerResponseSource();d&&(c=this.getLocalizedResponseSourceForCode(d)),l.textContent=V(D.sourceOfResponseS,{PH1:c});const g=new qe(l);i.appendChild(g);const p=e.createElement("div");p.classList.add("network-fetch-details-treeitem");const m=this.request.getResponseCacheStorageCacheName();m?p.textContent=V(D.cacheStorageCacheNameS,{PH1:m}):p.textContent=V(D.cacheStorageCacheNameUnknown);const f=new qe(p);i.appendChild(f);const k=this.request.getResponseRetrievalTime();if(k){const u=e.createElement("div");u.classList.add("network-fetch-details-treeitem"),u.textContent=V(D.retrievalTimeS,{PH1:k.toString()});const C=new qe(u);i.appendChild(C)}}getLocalizedResponseSourceForCode(e){switch(e){case"cache-storage":return V(D.serviceworkerCacheStorage);case"http-cache":return V(D.fromHttpCache);case"network":return V(D.networkFetch);default:return V(D.fallbackCode)}}onToggleFetchDetails(e,t){if(!t.target)return;const i=t.target;if(i.classList.contains("network-fetch-timing-bar-clickable")){e.classList.contains("network-fetch-timing-bar-details-collapsed")&&_e.actionTaken(ct.NetworkPanelServiceWorkerRespondWith);const o=i.getAttribute("aria-checked")==="true";i.setAttribute("aria-checked",String(!o)),e.classList.toggle("network-fetch-timing-bar-details-collapsed"),e.classList.toggle("network-fetch-timing-bar-details-expanded")}}wasShown(){this.request.addEventListener(Y.TIMING_CHANGED,this.refresh,this),this.request.addEventListener(Y.FINISHED_LOADING,this.refresh,this),this.calculator.addEventListener("BoundariesChanged",this.boundaryChanged,this),this.registerCSSFiles([gs]),this.refresh()}willHide(){this.request.removeEventListener(Y.TIMING_CHANGED,this.refresh,this),this.request.removeEventListener(Y.FINISHED_LOADING,this.refresh,this),this.calculator.removeEventListener("BoundariesChanged",this.boundaryChanged,this)}refresh(){this.tableElement&&this.tableElement.remove(),this.tableElement=Ke.createTimingTable(this.request,this.calculator),this.tableElement.classList.add("resource-timing-table"),this.element.appendChild(this.tableElement),this.request.fetchedViaServiceWorker&&this.constructFetchDetailsView()}boundaryChanged(){const e=this.calculator.minimumBoundary();e!==this.lastMinimumBoundary&&(this.lastMinimumBoundary=e,this.refresh())}}const Tn=new Set(["serviceworker","serviceworker-preparation","serviceworker-respondwith","serviceworker-routerevaluation","serviceworker-cachelookup"]),Rn=new Set(["queueing","blocking","connecting","dns","proxy","ssl"]),ic=Object.freeze(Object.defineProperty({__proto__:null,ConnectionSetupRangeNames:Rn,RequestTimingView:Ke,ServiceWorkerRangeNames:Tn},Symbol.toStringTag,{value:"Module"})),In=new CSSStyleSheet;In.replaceSync(`/*
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.websocket-frame-view {
  user-select: text;
}

.websocket-frame-view .data-grid {
  flex: auto;
  border: none;
}

.websocket-frame-view .data-grid .data {
  background-image: none;
}

.websocket-frame-view-td {
  border-bottom: 1px solid var(--sys-color-divider);
}

.websocket-frame-view .data-grid td,
.websocket-frame-view .data-grid th {
  border-left-color: 1px solid var(--sys-color-divider);
}

.websocket-frame-view-row-send td:first-child::before {
  content: "\\2B06";
  color: var(--sys-color-tertiary);
  padding-right: 4px;
}

.websocket-frame-view-row-receive td:first-child::before {
  content: "\\2B07";
  color: var(--sys-color-error);
  padding-right: 4px;
}

.websocket-frame-view-row-send {
  background-color: color-mix(in sRGB, var(--sys-color-tertiary-container), transparent 50%);
}

.websocket-frame-view-row-error {
  background-color: var(--sys-color-surface-error);
  color: var(--sys-color-on-surface-error);
}

.websocket-frame-view .toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=webSocketFrameView.css */
`);const le={data:"Data",length:"Length",time:"Time",webSocketFrame:"Web Socket Frame",clearAll:"Clear All",filter:"Filter",selectMessageToBrowseItsContent:"Select message to browse its content.",copyMessageD:"Copy message...",copyMessage:"Copy message",clearAllL:"Clear all",sOpcodeSMask:"{PH1} (Opcode {PH2}, mask)",sOpcodeS:"{PH1} (Opcode {PH2})",continuationFrame:"Continuation Frame",textMessage:"Text Message",binaryMessage:"Binary Message",connectionCloseMessage:"Connection Close Message",pingMessage:"Ping Message",pongMessage:"Pong Message",all:"All",send:"Send",receive:"Receive",na:"N/A",filterUsingRegex:"Filter using regex (example: (web)?socket)"},En=Z("panels/network/ResourceWebSocketFrameView.ts",le),Pe=Q.bind(void 0,En),yt=hr.bind(void 0,En);class fs extends me{request;splitWidget;dataGrid;timeComparator;mainToolbar;clearAllButton;filterTypeCombobox;filterType;filterTextInput;filterRegex;frameEmptyWidget;selectedNode;currentSelectedNode;messageFilterSetting=H.instance().createSetting("network-web-socket-message-filter","");constructor(e){super(),this.element.classList.add("websocket-frame-view"),this.element.setAttribute("jslog",`${tt("web-socket-messages").track({resize:!0})}`),this.request=e,this.splitWidget=new or(!1,!0,"resource-web-socket-frame-split-view-state"),this.splitWidget.show(this.element);const t=[{id:"data",title:Pe(le.data),sortable:!1,weight:88},{id:"length",title:Pe(le.length),sortable:!1,align:"right",weight:5},{id:"time",title:Pe(le.time),sortable:!0,weight:7}];this.dataGrid=new es({displayName:Pe(le.webSocketFrame),columns:t,editCallback:void 0,deleteCallback:void 0,refreshCallback:void 0}),this.dataGrid.setRowContextMenuCallback(l.bind(this)),this.dataGrid.setStickToBottom(!0),this.dataGrid.setCellClass("websocket-frame-view-td"),this.timeComparator=sc,this.dataGrid.sortNodes(this.timeComparator,!1),this.dataGrid.markColumnAsSortedBy("time",$t.Ascending),this.dataGrid.addEventListener("SortingChanged",this.sortItems,this),this.dataGrid.setName("resource-web-socket-frame-view"),this.dataGrid.addEventListener("SelectedNode",c=>{this.onFrameSelected(c)},this),this.dataGrid.addEventListener("DeselectedNode",this.onFrameDeselected,this),this.mainToolbar=new Ne(""),this.clearAllButton=new Wt(Pe(le.clearAll),"clear"),this.clearAllButton.addEventListener("Click",this.clearFrames,this),this.mainToolbar.appendToolbarItem(this.clearAllButton),this.filterTypeCombobox=new Xr(this.updateFilterSetting.bind(this),Pe(le.filter));for(const c of rc){const d=this.filterTypeCombobox.createOption(c.label(),c.name);this.filterTypeCombobox.addOption(d)}this.mainToolbar.appendToolbarItem(this.filterTypeCombobox),this.filterType=null;const i=Pe(le.filterUsingRegex);this.filterTextInput=new go(i,.4),this.filterTextInput.addEventListener("TextChanged",this.updateFilterSetting,this);const o=this.messageFilterSetting.get();o&&this.filterTextInput.setValue(o),this.filterRegex=null,this.mainToolbar.appendToolbarItem(this.filterTextInput);const a=new me;a.element.appendChild(this.mainToolbar.element),this.dataGrid.asWidget().show(a.element),a.setMinimumSize(0,72),this.splitWidget.setMainWidget(a),this.frameEmptyWidget=new jt(Pe(le.selectMessageToBrowseItsContent)),this.splitWidget.setSidebarWidget(this.frameEmptyWidget),this.selectedNode=null,o&&this.applyFilter(o);function l(c,d){const g=d,p=g.binaryView();p?p.addCopyToContextMenu(c,Pe(le.copyMessageD)):c.clipboardSection().appendItem(Pe(le.copyMessage),ne.copyText.bind(ne,g.data.data),{jslogContext:"copy"}),c.footerSection().appendItem(Pe(le.clearAllL),this.clearFrames.bind(this),{jslogContext:"clear-all"})}}static opCodeDescription(e,t){const i=ws[e]||(()=>"");return t?Pe(le.sOpcodeSMask,{PH1:i(),PH2:e}):Pe(le.sOpcodeS,{PH1:i(),PH2:e})}wasShown(){this.refresh(),this.registerCSSFiles([In]),this.request.addEventListener(Y.WEBSOCKET_FRAME_ADDED,this.frameAdded,this)}willHide(){this.request.removeEventListener(Y.WEBSOCKET_FRAME_ADDED,this.frameAdded,this)}frameAdded(e){const t=e.data;this.frameFilter(t)&&this.dataGrid.insertChild(new _r(this.request.url(),t))}frameFilter(e){return this.filterType&&e.type!==this.filterType?!1:!this.filterRegex||this.filterRegex.test(e.text)}clearFrames(){eo.set(this.request,this.request.frames().length),this.refresh()}updateFilterSetting(){const e=this.filterTextInput.value();this.messageFilterSetting.set(e),this.applyFilter(e)}applyFilter(e){const t=this.filterTypeCombobox.selectedOption().value;if(e)try{this.filterRegex=new RegExp(e,"i")}catch{this.filterRegex=new RegExp(ni(e),"i")}else this.filterRegex=null;this.filterType=t==="all"?null:t,this.refresh()}async onFrameSelected(e){this.currentSelectedNode=e.data;const t=this.currentSelectedNode.dataText(),i=this.currentSelectedNode.binaryView();if(i){this.splitWidget.setSidebarWidget(i);return}const o=await Eo.createView(t);if(o){this.splitWidget.setSidebarWidget(o);return}this.splitWidget.setSidebarWidget(new Ii(Yi.fromString(this.request.url(),Ye.WebSocket,t),""))}onFrameDeselected(){this.currentSelectedNode=null,this.splitWidget.setSidebarWidget(this.frameEmptyWidget)}refresh(){this.dataGrid.rootNode().removeChildren();const e=this.request.url();let t=this.request.frames();const i=eo.get(this.request)||0;t=t.slice(i),t=t.filter(this.frameFilter.bind(this)),t.forEach(o=>this.dataGrid.insertChild(new _r(e,o)))}sortItems(){this.dataGrid.sortNodes(this.timeComparator,!this.dataGrid.isSortOrderAscending())}}const ws=function(){const w=[];return w[0]=yt(le.continuationFrame),w[1]=yt(le.textMessage),w[2]=yt(le.binaryMessage),w[8]=yt(le.connectionCloseMessage),w[9]=yt(le.pingMessage),w[10]=yt(le.pongMessage),w}(),rc=[{name:"all",label:yt(le.all),jslogContext:"all"},{name:"send",label:yt(le.send),jslogContext:"send"},{name:"receive",label:yt(le.receive),jslogContext:"receive"}];class _r extends ts{url;frame;isTextFrame;dataTextInternal;binaryViewInternal;constructor(e,t){let i=String(t.text.length);const o=new Date(t.time*1e3),a=("0"+o.getHours()).substr(-2)+":"+("0"+o.getMinutes()).substr(-2)+":"+("0"+o.getSeconds()).substr(-2)+"."+("00"+o.getMilliseconds()).substr(-3),l=document.createElement("div");z(l,a),M.install(l,o.toLocaleString());let c=t.text,d=fs.opCodeDescription(t.opCode,t.mask);const g=t.opCode===1;t.type===Ut.Error?(d=c,i=Pe(le.na)):g?d=c:t.opCode===2?(i=lt(Ca(t.text)),d=ws[t.opCode]()):c=d,super({data:d,length:i,time:l}),this.url=e,this.frame=t,this.isTextFrame=g,this.dataTextInternal=c,this.binaryViewInternal=null}createCells(e){e.classList.toggle("websocket-frame-view-row-error",this.frame.type===Ut.Error),e.classList.toggle("websocket-frame-view-row-send",this.frame.type===Ut.Send),e.classList.toggle("websocket-frame-view-row-receive",this.frame.type===Ut.Receive),super.createCells(e)}nodeSelfHeight(){return 21}dataText(){return this.dataTextInternal}opCode(){return this.frame.opCode}binaryView(){return this.isTextFrame||this.frame.type===Ut.Error?null:(this.binaryViewInternal||this.dataTextInternal.length>0&&(this.binaryViewInternal=new No(this.dataTextInternal,Zr,Ye.WebSocket)),this.binaryViewInternal)}}function sc(w,e){return w.frame.time-e.frame.time}const eo=new WeakMap,oc=Object.freeze(Object.defineProperty({__proto__:null,ResourceWebSocketFrameNode:_r,ResourceWebSocketFrameView:fs,opCodeDescriptions:ws},Symbol.toStringTag,{value:"Module"})),te={headers:"Headers",payload:"Payload",messages:"Messages",websocketMessages:"WebSocket messages",eventstream:"EventStream",preview:"Preview",responsePreview:"Response preview",signedexchangeError:"SignedExchange error",response:"Response",rawResponseData:"Raw response data",initiator:"Initiator",requestInitiatorCallStack:"Request initiator call stack",timing:"Timing",requestAndResponseTimeline:"Request and response timeline",thirdPartyPhaseout:"Cookies blocked due to third-party cookie phaseout.",trustTokens:"Private state tokens",trustTokenOperationDetails:"Private State Token operation details",cookies:"Cookies",requestAndResponseCookies:"Request and response cookies",containsOverriddenHeaders:"This response contains headers which are overridden by DevTools",responseIsOverridden:"This response is overridden by DevTools"},nc=Z("panels/network/NetworkItemView.ts",te),re=Q.bind(void 0,nc);class An extends xa{requestInternal;resourceViewTabSetting;headersViewComponent;payloadView;responseView;cookiesView;initialTab;constructor(e,t,i){super(),this.requestInternal=e,this.element.classList.add("network-item-view"),this.headerElement().setAttribute("jslog",`${Jr("request-details").track({keydown:"ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space"})}`);const o="headers-component";if(this.resourceViewTabSetting=H.instance().createSetting("resource-view-tab","headers-component"),this.headersViewComponent=new Xo(e),this.appendTab(o,re(te.headers),Ur(me,this.headersViewComponent),re(te.headers)),this.requestInternal.hasOverriddenHeaders()){const a=new dt;a.data={iconName:"small-status-dot",color:"var(--sys-color-purple-bright)",width:"16px",height:"16px"},a.title=re(te.containsOverriddenHeaders),this.setTabIcon("headers-component",a)}if(this.payloadView=null,this.maybeAppendPayloadPanel(),this.addEventListener(Ta.TabSelected,this.tabSelected,this),e.resourceType()===Ye.WebSocket){const a=new fs(e);this.appendTab("web-socket-frames",re(te.messages),a,re(te.websocketMessages))}else if(e.mimeType==="text/event-stream")this.appendTab("eventSource",re(te.eventstream),new Oo(e)),this.responseView=new pi(e),this.appendTab("response",re(te.response),this.responseView,re(te.rawResponseData));else{this.responseView=new pi(e);const a=new Cn(e);this.appendTab("preview",re(te.preview),a,re(te.responsePreview));const l=e.signedExchangeInfo();if(l&&l.errors&&l.errors.length){const c=new dt;c.data={iconName:"cross-circle-filled",color:"var(--icon-error)",width:"14px",height:"14px"},M.install(c,re(te.signedexchangeError)),this.setTabIcon("preview",c)}if(this.appendTab("response",re(te.response),this.responseView,re(te.rawResponseData)),this.requestInternal.hasOverriddenContent){const c=new dt;c.title=re(te.responseIsOverridden),c.data={iconName:"small-status-dot",color:"var(--sys-color-purple-bright)",width:"16px",height:"16px"},this.setTabIcon("response",c)}}this.appendTab("initiator",re(te.initiator),new Di(e),re(te.requestInitiatorCallStack)),this.appendTab("timing",re(te.timing),new Ke(e,t),re(te.requestAndResponseTimeline)),e.trustTokenParams()&&this.appendTab("trust-tokens",re(te.trustTokens),Ur(me,new on(e)),re(te.trustTokenOperationDetails)),this.cookiesView=null,this.initialTab=i||this.resourceViewTabSetting.get(),this.setAutoSelectFirstItemOnShow(!1)}wasShown(){super.wasShown(),this.requestInternal.addEventListener(Y.REQUEST_HEADERS_CHANGED,this.requestHeadersChanged,this),this.requestInternal.addEventListener(Y.RESPONSE_HEADERS_CHANGED,this.maybeAppendCookiesPanel,this),this.requestInternal.addEventListener(Y.TRUST_TOKEN_RESULT_ADDED,this.maybeShowErrorIconInTrustTokenTabHeader,this),this.maybeAppendCookiesPanel(),this.maybeShowErrorIconInTrustTokenTabHeader(),this.initialTab&&(this.selectTabInternal(this.initialTab),this.initialTab=void 0)}willHide(){this.requestInternal.removeEventListener(Y.REQUEST_HEADERS_CHANGED,this.requestHeadersChanged,this),this.requestInternal.removeEventListener(Y.RESPONSE_HEADERS_CHANGED,this.maybeAppendCookiesPanel,this),this.requestInternal.removeEventListener(Y.TRUST_TOKEN_RESULT_ADDED,this.maybeShowErrorIconInTrustTokenTabHeader,this)}async requestHeadersChanged(){this.maybeAppendCookiesPanel(),this.maybeAppendPayloadPanel()}maybeAppendCookiesPanel(){const e=this.requestInternal.hasRequestCookies()||this.requestInternal.responseCookies.length>0;if(console.assert(e||!this.cookiesView,"Cookies were introduced in headers and then removed!"),e&&!this.cookiesView&&(this.cookiesView=new pn(this.requestInternal),this.appendTab("cookies",re(te.cookies),this.cookiesView,re(te.requestAndResponseCookies))),this.requestInternal.hasThirdPartyCookiePhaseoutIssue()){const t=new dt;t.data={iconName:"warning-filled",color:"var(--icon-warning)",width:"14px",height:"14px"},t.title=re(te.thirdPartyPhaseout),this.setTabIcon("cookies",t)}}async maybeAppendPayloadPanel(){this.hasTab("payload")||(this.requestInternal.queryParameters||await this.requestInternal.requestFormData())&&(this.payloadView=new hi(this.requestInternal),this.appendTab("payload",re(te.payload),this.payloadView,re(te.payload),void 0,void 0,void 0,1))}maybeShowErrorIconInTrustTokenTabHeader(){const e=this.requestInternal.trustTokenOperationDoneEvent();if(e&&!ms(e.status)){const t=new dt;t.data={iconName:"cross-circle-filled",color:"var(--icon-error)",width:"14px",height:"14px"},this.setTabIcon("trust-tokens",t)}}selectTabInternal(e){this.selectTab(e)||window.setTimeout(()=>{this.selectTab(e)||this.selectTab("headers-component")},0)}tabSelected(e){e.data.isUserGesture&&this.resourceViewTabSetting.set(e.data.tabId)}request(){return this.requestInternal}async revealResponseBody(e){this.selectTabInternal("response"),await this.responseView?.revealPosition(e)}revealHeader(e,t){this.selectTabInternal("headers-component"),this.headersViewComponent.revealHeader(e,t)}getHeadersViewComponent(){return this.headersViewComponent}}const ac=Object.freeze(Object.defineProperty({__proto__:null,NetworkItemView:An},Symbol.toStringTag,{value:"Module"})),si={sLatencySDownloadSTotal:"{PH1} latency, {PH2} download ({PH3} total)",sLatency:"{PH1} latency",sDownload:"{PH1} download",sFromServiceworker:"{PH1} (from `ServiceWorker`)",sFromCache:"{PH1} (from cache)"},lc=Z("panels/network/NetworkTimeCalculator.ts",si),bi=Q.bind(void 0,lc);class Ni{minimum;maximum;constructor(e,t){this.minimum=e,this.maximum=t}equals(e){return this.minimum===e.minimum&&this.maximum===e.maximum}}class vs extends xo{startAtZero;minimumBoundaryInternal;maximumBoundaryInternal;boundryChangedEventThrottler;window;workingArea;constructor(e){super(),this.startAtZero=e,this.minimumBoundaryInternal=-1,this.maximumBoundaryInternal=-1,this.boundryChangedEventThrottler=new To(0),this.window=null}setWindow(e){this.window=e,this.boundaryChanged()}setInitialUserFriendlyBoundaries(){this.minimumBoundaryInternal=0,this.maximumBoundaryInternal=1}computePosition(e){return(e-this.minimumBoundary())/this.boundarySpan()*(this.workingArea||0)}formatValue(e,t){return Me(e,!!t)}minimumBoundary(){return this.window?this.window.minimum:this.minimumBoundaryInternal}zeroTime(){return this.minimumBoundaryInternal}maximumBoundary(){return this.window?this.window.maximum:this.maximumBoundaryInternal}boundary(){return new Ni(this.minimumBoundary(),this.maximumBoundary())}boundarySpan(){return this.maximumBoundary()-this.minimumBoundary()}reset(){this.minimumBoundaryInternal=-1,this.maximumBoundaryInternal=-1,this.boundaryChanged()}value(){return 0}setDisplayWidth(e){this.workingArea=e}computeBarGraphPercentages(e){let t,i,o;return e.startTime!==-1?t=(e.startTime-this.minimumBoundary())/this.boundarySpan()*100:t=0,e.responseReceivedTime!==-1?i=(e.responseReceivedTime-this.minimumBoundary())/this.boundarySpan()*100:i=this.startAtZero?t:100,e.endTime!==-1?o=(e.endTime-this.minimumBoundary())/this.boundarySpan()*100:o=this.startAtZero?i:100,this.startAtZero&&(o-=t,i-=t,t=0),{start:t,middle:i,end:o}}computePercentageFromEventTime(e){return e!==-1&&!this.startAtZero?(e-this.minimumBoundary())/this.boundarySpan()*100:0}percentageToTime(e){return e*this.boundarySpan()/100+this.minimumBoundary()}boundaryChanged(){this.boundryChangedEventThrottler.schedule(async()=>{this.dispatchEventToListeners("BoundariesChanged")})}updateBoundariesForEventTime(e){e===-1||this.startAtZero||(this.maximumBoundaryInternal===void 0||e>this.maximumBoundaryInternal)&&(this.maximumBoundaryInternal=e,this.boundaryChanged())}computeBarGraphLabels(e){let t="";e.responseReceivedTime!==-1&&e.endTime!==-1&&(t=Me(e.endTime-e.responseReceivedTime));const i=e.latency>0,o=i?Me(e.latency):t;if(e.timing)return{left:o,right:t,tooltip:void 0};let a;if(i&&t){const l=Me(e.duration);a=bi(si.sLatencySDownloadSTotal,{PH1:o,PH2:t,PH3:l})}else i?a=bi(si.sLatency,{PH1:o}):t&&(a=bi(si.sDownload,{PH1:t}));return e.fetchedViaServiceWorker?a=bi(si.sFromServiceworker,{PH1:String(a)}):e.cached()&&(a=bi(si.sFromCache,{PH1:String(a)})),{left:o,right:t,tooltip:a}}updateBoundaries(e){const t=this.lowerBound(e),i=this.upperBound(e);let o=!1;(t!==-1||this.startAtZero)&&(o=this.extendBoundariesToIncludeTimestamp(this.startAtZero?0:t)),i!==-1&&(o=this.extendBoundariesToIncludeTimestamp(i)||o),o&&this.boundaryChanged()}extendBoundariesToIncludeTimestamp(e){const t=this.minimumBoundaryInternal,i=this.maximumBoundaryInternal,o=dc;return this.minimumBoundaryInternal===-1||this.maximumBoundaryInternal===-1?(this.minimumBoundaryInternal=e,this.maximumBoundaryInternal=e+o):(this.minimumBoundaryInternal=Math.min(e,this.minimumBoundaryInternal),this.maximumBoundaryInternal=Math.max(e,this.minimumBoundaryInternal+o,this.maximumBoundaryInternal)),t!==this.minimumBoundaryInternal||i!==this.maximumBoundaryInternal}lowerBound(e){return 0}upperBound(e){return 0}}const dc=.1;class ys extends vs{constructor(){super(!1)}formatValue(e,t){return Me(e-this.zeroTime(),!!t)}lowerBound(e){return e.issueTime()}upperBound(e){return e.endTime}}class Ln extends vs{constructor(){super(!0)}formatValue(e,t){return Me(e,!!t)}upperBound(e){return e.duration}}const cc=Object.freeze(Object.defineProperty({__proto__:null,NetworkTimeBoundary:Ni,NetworkTimeCalculator:vs,NetworkTransferDurationCalculator:Ln,NetworkTransferTimeCalculator:ys},Symbol.toStringTag,{value:"Module"}));class qn{parentView;activeGroups;constructor(e){this.parentView=e,this.activeGroups=new Map}groupNodeForRequest(e){const t=Ft.frameForRequest(e);if(!t||t.isOutermostFrame())return null;let i=this.activeGroups.get(t);return i||(i=new Fn(this.parentView,t),this.activeGroups.set(t,i),i)}reset(){this.activeGroups.clear()}}class Fn extends ls{frame;constructor(e,t){super(e),this.frame=t}displayName(){return new Gt(this.frame.url).domain()||this.frame.name||"<iframe>"}renderCell(e,t){if(super.renderCell(e,t),this.dataGrid.indexOfVisibleColumn(t)===0){const o=this.displayName();e.appendChild(yo("frame","network-frame-group-icon")),z(e,o),M.install(e,o),this.setCellAccessibleName(e.textContent||"",e,t)}}}const hc=Object.freeze(Object.defineProperty({__proto__:null,FrameGroupNode:Fn,NetworkFrameGrouper:qn},Symbol.toStringTag,{value:"Module"})),Hn=new CSSStyleSheet;Hn.replaceSync(`/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
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

.network-log-grid.data-grid {
  border: none !important; /* stylelint-disable-line declaration-no-important */
  flex: auto;
}

.network-log-grid.data-grid.no-selection:focus-visible {
  border: none !important; /* stylelint-disable-line declaration-no-important */
}

#network-container {
  overflow: hidden;
}

#network-container.grid-focused.no-node-selected:focus-within {
  border: 1px solid var(--sys-color-state-focus-ring);
}

.network-summary-bar {
  flex: 0 0 27px;
  line-height: 27px;
  padding-left: 5px;
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  user-select: text;
}

.panel.network .toolbar.network-summary-bar {
  border-bottom: 0;
}

.network-summary-bar span[is="dt-icon-label"] {
  margin-right: 6px;
}

.network-summary-bar > * {
  flex: none;
}

.network-log-grid.data-grid tbody {
  background: transparent;
}

.network-log-grid.data-grid td {
  height: 41px;
  border-left: 1px solid var(--sys-color-divider);
  vertical-align: middle;
}

.network-log-grid.data-grid .corner {
  display: none;
}

.network-log-grid.data-grid.small td {
  height: 21px;
}

.network-log-grid.data-grid th {
  border-bottom: none;
}

.network-waterfall-header,
.network-log-grid.data-grid thead th {
  border-bottom: 1px solid var(--sys-color-divider);
  border-left: 1px solid var(--sys-color-divider);
}

.network-waterfall-header,
.network-log-grid.data-grid thead {
  height: 31px;
  background-color: var(--sys-color-surface1);
}

.network-waterfall-header.small,
.network-log-grid.data-grid.small thead {
  height: 27px;
}

.network-log-grid.data-grid select {
  appearance: none;
  border: none;
  width: 100%;
  color: inherit;
}

.network-log-grid.data-grid .waterfall-column {
  padding: 1px 0;
}

.network-log-grid.data-grid .waterfall-column .sort-order-icon-container {
  right: 15px;
  pointer-events: none;
}

.network-log-grid.data-grid th.sortable:active {
  background-image: none !important; /* stylelint-disable-line declaration-no-important */
}

.network-cell-subtitle {
  font-weight: normal;
  color: var(--sys-color-token-subtle);
}

.network-badge {
  margin-right: 4px;
}

.status-column .devtools-link {
  color: inherit;
}

.initiator-column .text-button.devtools-link,
.initiator-column .text-button.devtools-link:focus-visible {
  color: inherit;
  background-color: transparent;
  outline-offset: 0;
  height: 16px;
}

.network-error-row,
.network-error-row .network-cell-subtitle {
  /* stylelint-disable-next-line declaration-no-important */
  color: var(--sys-color-error) !important;
}

.network-warning-row,
.network-warning-row .network-cell-subtitle {
  color: var(--sys-color-yellow);
}

.network-log-grid.data-grid tr.selected.network-error-row,
.network-log-grid.data-grid tr.selected.network-error-row .network-cell-subtitle,
.network-log-grid.data-grid tr.selected.network-error-row .network-dim-cell {
  color: var(--sys-color-error);
}

.network-log-grid.data-grid tr.selected.network-warning-row,
.network-log-grid.data-grid tr.selected.network-warning-row .network-cell-subtitle,
.network-log-grid.data-grid tr.selected.network-warning-row .network-dim-cell {
  color: var(--sys-color-yellow);
}

.network-log-grid.data-grid:focus-within tr.selected.network-error-row,
.network-log-grid.data-grid:focus-within tr.selected.network-error-row .devtools-link,
.network-log-grid.data-grid:focus-within tr.selected.network-error-row .network-cell-subtitle,
.network-log-grid.data-grid:focus-within tr.selected.network-error-row .network-dim-cell {
  color: var(--sys-color-error);
}

.network-log-grid.data-grid:focus-within tr.selected.network-warning-row,
.network-log-grid.data-grid:focus-within tr.selected.network-warning-row .devtools-link,
.network-log-grid.data-grid:focus-within tr.selected.network-warning-row .network-cell-subtitle,
.network-log-grid.data-grid:focus-within tr.selected.network-warning-row .network-dim-cell {
  color: var(--sys-color-yellow);
}

.network-log-grid.data-grid tr.selected,
.network-log-grid.data-grid tr.selected .network-cell-subtitle,
.network-log-grid.data-grid tr.selected .network-dim-cell {
  color: inherit;
}

.network-log-grid.data-grid:focus tr.selected,
.network-log-grid.data-grid:focus tr.selected .network-cell-subtitle,
.network-log-grid.data-grid:focus tr.selected .network-dim-cell {
  color: var(--sys-color-on-tonal-container);
}

.network-header-subtitle {
  color: var(--sys-color-token-subtle);
}

.network-log-grid.data-grid.small .network-cell-subtitle,
.network-log-grid.data-grid.small .network-header-subtitle {
  display: none;
}

.network-log-grid.data-grid.small .network-cell-subtitle.always-visible {
  display: inline;
  margin-left: 4px;
}

.network-log-grid tr.highlighted-row {
  animation: network-row-highlight-fadeout 2s 0s;
}

@keyframes network-row-highlight-fadeout {
  from {
    background-color: var(--sys-color-yellow-container);
  }

  to {
    background-color: transparent;
  }
}

/* Resource preview icons */
/* These rules are grouped by type */
/* stylelint-disable no-duplicate-selectors */

.network-log-grid.data-grid .icon.image {
  position: relative;
}

.network-log-grid.data-grid .icon {
  float: left;
  width: 32px;
  height: 32px;
  margin-top: 1px;
  margin-right: 3px;
}

.network-log-grid.data-grid:focus-within .network-error-row.selected div.icon:not(.image) {
  filter: none;
}

.network-log-grid.data-grid .network-error-row.data-grid-data-grid-node img.icon,
.network-log-grid.data-grid .network-error-row.data-grid-data-grid-node.selected img.icon {
  /* This is generated with https://codepen.io/sosuke/pen/Pjoqqp to target var(--color-red) */
  filter: brightness(0) saturate(100%) invert(35%) sepia(76%) saturate(1413%) hue-rotate(338deg) brightness(92%) contrast(103%);
}

.data-grid-data-grid-node devtools-icon[name="arrow-up-down-circle"],
.network-log-grid.data-grid.small .icon {
  width: 16px;
  height: 16px;
  vertical-align: sub;
}

.data-grid-data-grid-node .ai-button-container {
  display: none;
  float: right;
}

.data-grid-data-grid-node:hover .ai-button-container {
  display: inline-flex;
}

.image-network-icon-preview {
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
  right: 0;
  top: 0;
}

.network-log-grid.data-grid .image-network-icon-preview {
  position: absolute;
  max-width: 18px;
  max-height: 21px;
  min-width: 1px;
  min-height: 1px;
}

.network-log-grid.data-grid.small .image-network-icon-preview {
  left: 2px;
  right: 2px;
  max-width: 10px;
  max-height: 12px;
}

.network-log-grid.data-grid .trailing-link-icon {
  padding-left: 0.5ex;
}
/* stylelint-enable no-duplicate-selectors */
/* This is part of the large color block declared above, but should not be
   extracted out. */
.network-dim-cell {
  color: var(--sys-color-token-subtle);
}

.network-frame-divider {
  width: 2px;
  background-color: var(--network-frame-divider-color); /* stylelint-disable-line plugin/use_theme_colors */
  z-index: 10;
  visibility: hidden;
}

#network-container.has-waterfall .data-container {
  overflow: hidden;
}

.network-log-grid.data-grid .resources-dividers {
  z-index: 0;
}

.network-log-grid.data-grid .resources-dividers-label-bar {
  background-color: transparent;
  border: none;
  height: 30px;
  pointer-events: none;
}

.network-log-grid.data-grid span.separator-in-cell {
  user-select: none;
  min-width: 1ex;
  display: inline-block;
}

.network-status-pane {
  color: var(--sys-color-token-subtle);
  background-color: var(--sys-color-cdt-base-container);
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  overflow: auto;
}

.network-status-pane > .recording-hint {
  font-size: 14px;
  text-align: center;
  line-height: 28px;
}

.network-waterfall-header {
  position: absolute;
  border-left: 0;
  width: 100%;
  display: table;
  z-index: 200;

  & > div.hover-layer {
    display: none;
    background-color: var(--sys-color-state-hover-on-subtle);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover > div.hover-layer {
    display: block;
  }
}

.network-waterfall-header div {
  display: table-cell;
  line-height: 14px;
  margin: auto 0;
  vertical-align: middle;
  text-align: left;
  font-weight: normal;
  padding: 0 4px;
}

/* All network-waterfall-header rules are defined here instead of above */
.network-waterfall-header .sort-order-icon-container {
  position: absolute;
  top: 1px;
  right: 0;
  bottom: 1px;
  display: flex;
  align-items: center;
}

.network-waterfall-header .sort-order-icon {
  align-items: center;
  margin-right: 4px;
  margin-bottom: -2px;
}

.network-frame-group-icon {
  display: inline-block;
  margin: -7px 1px;
  vertical-align: baseline;
}

.network-frame-group-badge {
  margin-right: 4px;
}

.network-override-marker {
  position: relative;
  float: left;
}

.network-override-marker::before {
  background-color: var(--sys-color-purple-bright);
  content: var(--image-file-empty);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  outline: 1px solid var(--icon-gap-toolbar);
  left: 8px;
  position: absolute;
  top: 10px;
  z-index: 1;
}

@media (forced-colors: active) {
  .network-status-pane > .recording-hint {
    color: canvastext;
  }

  .initiator-column .devtools-link {
    color: linktext;
  }

  .network-log-grid.data-grid tbody tr.revealed.selected,
  .network-log-grid.data-grid:focus-within tbody tr.revealed.selected,
  .network-log-grid.data-grid:focus-within tr.selected .network-dim-cell,
  .network-log-grid.data-grid tr.selected .network-dim-cell,
  .network-log-grid.data-grid:focus-within tr.selected .initiator-column .devtools-link,
  .network-log-grid.data-grid tr.selected .initiator-column .devtools-link,
  .network-waterfall-header:hover * {
    color: HighlightText;
  }

  .network-log-grid {
    --color-grid-default: canvas;
    --color-grid-stripe: canvas;
    --color-grid-hovered: Highlight;
    --color-grid-selected: ButtonText;
    --color-grid-focus-selected: Highlight;
  }

  #network-container.no-node-selected:focus-within,
  .network-status-pane {
    forced-color-adjust: none;
    border-color: Highlight;
    background-color: canvas !important; /* stylelint-disable-line declaration-no-important */
  }

  .network-waterfall-header:hover {
    forced-color-adjust: none;
    background-color: Highlight !important; /* stylelint-disable-line declaration-no-important */

    & > div.hover-layer {
      display: none;
    }
  }

  .network-waterfall-header.small,
  .network-log-grid.data-grid.small thead .network-waterfall-header,
  .network-log-grid.data-grid thead {
    background-color: canvas;
  }

  .network-waterfall-header .sort-order-icon-container devtools-icon {
    background-color: inherit;
  }

  .network-waterfall-header:hover .sort-order-icon-container devtools-icon {
    color: HighlightText;
  }
}

/*# sourceURL=networkLogView.css */
`);const Kr=new CSSStyleSheet;Kr.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.custom-headers-list {
  height: 272px;
  width: 250px;
}

.custom-headers-wrapper {
  margin: 10px;
}

.header {
  padding: 0 0 6px;
  font-size: 18px;
  font-weight: normal;
  flex: none;
}

.custom-headers-header {
  padding: 2px;
}

.custom-headers-list-item {
  padding-left: 5px;
}

.editor-container {
  padding: 5px 0 0 5px;
}

.add-button {
  width: 150px;
  margin: auto;
  margin-top: 5px;
}

/*# sourceURL=networkManageCustomHeadersView.css */
`);const Ri={manageHeaderColumns:"Manage Header Columns",noCustomHeaders:"No custom headers",addCustomHeader:"Add custom header…",headerName:"Header Name"},uc=Z("panels/network/NetworkManageCustomHeadersView.ts",Ri),Ki=Q.bind(void 0,uc);class Pn extends me{list;columnConfigs;addHeaderColumnCallback;changeHeaderColumnCallback;removeHeaderColumnCallback;editor;constructor(e,t,i,o){super(!0),this.contentElement.classList.add("custom-headers-wrapper"),this.contentElement.createChild("div","header").textContent=Ki(Ri.manageHeaderColumns),this.list=new uo(this),this.list.element.classList.add("custom-headers-list");const a=document.createElement("div");a.classList.add("custom-headers-list-list-empty"),a.textContent=Ki(Ri.noCustomHeaders),this.list.setEmptyPlaceholder(a),this.list.show(this.contentElement),this.contentElement.appendChild(po(Ki(Ri.addCustomHeader),this.addButtonClicked.bind(this),{className:"add-button",jslogContext:"network.add-custom-header"})),this.columnConfigs=new Map,e.forEach(l=>this.columnConfigs.set(l.title.toLowerCase(),l)),this.addHeaderColumnCallback=t,this.changeHeaderColumnCallback=i,this.removeHeaderColumnCallback=o,this.contentElement.tabIndex=0}wasShown(){this.headersUpdated(),this.list.registerCSSFiles([Kr]),this.registerCSSFiles([Kr])}headersUpdated(){this.list.clear(),this.columnConfigs.forEach(e=>this.list.appendItem({header:e.title},e.editable))}addButtonClicked(){this.list.addNewItem(this.columnConfigs.size,{header:""})}renderItem(e,t){const i=document.createElement("div");i.classList.add("custom-headers-list-item");const o=i.createChild("div","custom-header-name");return o.textContent=e.header,M.install(o,e.header),i}removeItemRequested(e,t){this.removeHeaderColumnCallback(e.header),this.columnConfigs.delete(e.header.toLowerCase()),this.headersUpdated()}commitEdit(e,t,i){const o=t.control("header").value.trim();let a;i?a=this.addHeaderColumnCallback(o):a=this.changeHeaderColumnCallback(e.header,o),a&&!i&&this.columnConfigs.delete(e.header.toLowerCase()),a&&this.columnConfigs.set(o.toLowerCase(),{title:o,editable:!0}),this.headersUpdated()}beginEdit(e){const t=this.createEditor();return t.control("header").value=e.header,t}createEditor(){if(this.editor)return this.editor;const e=new mo;this.editor=e;const t=e.contentElement(),i=t.createChild("div","custom-headers-edit-row");return i.createChild("div","custom-headers-header").textContent=Ki(Ri.headerName),t.createChild("div","custom-headers-edit-row").createChild("div","custom-headers-header").appendChild(e.createInput("header","text","x-custom-header",a.bind(this))),e;function a(l,c,d){let g=!0;const p=e.control("header").value.trim().toLowerCase();return this.columnConfigs.has(p)&&l.header!==p&&(g=!1),{valid:g,errorMessage:void 0}}}}const pc=Object.freeze(Object.defineProperty({__proto__:null,NetworkManageCustomHeadersView:Pn},Symbol.toStringTag,{value:"Module"})),mc=ur.instance();class Nn extends Cl{selectedFilmStripTime;numBands;highlightedRequest;loadEvents;domContentLoadedEvents;nextBand;bandMap;requestsList;requestsSet;span;lastBoundary;constructor(){super(),this.selectedFilmStripTime=-1,this.element.classList.add("network-overview"),this.numBands=1,this.highlightedRequest=null,kt.instance().addModelListener(Ft,At.Load,this.loadEventFired,this,{scoped:!0}),kt.instance().addModelListener(Ft,At.DOMContentLoaded,this.domContentLoadedEventFired,this,{scoped:!0}),this.reset()}setHighlightedRequest(e){this.highlightedRequest=e,this.scheduleUpdate()}selectFilmStripFrame(e){this.selectedFilmStripTime=e,this.scheduleUpdate()}clearFilmStripFrame(){this.selectedFilmStripTime=-1,this.scheduleUpdate()}loadEventFired(e){const t=e.data.loadTime;t&&this.loadEvents.push(t*1e3),this.scheduleUpdate()}domContentLoadedEventFired(e){const{data:t}=e;t&&this.domContentLoadedEvents.push(t*1e3),this.scheduleUpdate()}bandId(e){if(!e||e==="0")return-1;if(this.bandMap.has(e))return this.bandMap.get(e);const t=this.nextBand++;return this.bandMap.set(e,t),t}updateRequest(e){this.requestsSet.has(e)||(this.requestsSet.add(e),this.requestsList.push(e)),this.scheduleUpdate()}wasShown(){this.onResize()}calculator(){return super.calculator()}onResize(){const e=this.element.offsetWidth,t=this.element.offsetHeight;this.calculator().setDisplayWidth(e),this.resetCanvas();const i=(t-to-1)/Si-1|0;this.numBands=i>0?i:1,this.scheduleUpdate()}reset(){this.span=1,this.lastBoundary=null,this.nextBand=0,this.bandMap=new Map,this.requestsList=[],this.requestsSet=new Set,this.loadEvents=[],this.domContentLoadedEvents=[],this.resetCanvas()}scheduleUpdate(){this.isShowing()&&mc.write("NetworkOverview.render",this.update.bind(this))}update(){const e=this.calculator(),t=new Ni(e.minimumBoundary(),e.maximumBoundary());if(!this.lastBoundary||!t.equals(this.lastBoundary)){const m=e.boundarySpan();for(;this.span<m;)this.span*=1.25;e.setBounds(e.minimumBoundary(),We(e.minimumBoundary()+this.span)),this.lastBoundary=new Ni(e.minimumBoundary(),e.maximumBoundary())}const i=this.context(),o=new Map,a=to;function l(m){const f=o.get(m);if(!f)return;const k=f.length;i.beginPath(),i.strokeStyle=je.instance().getComputedValue("--color-background-opacity-80"),i.lineWidth=gc,i.fillStyle=je.instance().getComputedValue(Ie[m]);for(let u=0;u<k;){const C=f[u++]*Si+a,I=f[u++];let U=f[u++];U===Number.MAX_VALUE&&(U=e.maximumBoundary());const P=e.computePosition(We(I)),W=e.computePosition(We(U))+1;i.fillRect(P,C,Math.max(W-P,io),Si),i.strokeRect(P,C,Math.max(W-P,io),Si)}}function c(m,f,k,u){let C=o.get(m);C||(C=[],o.set(m,C)),C.push(f,k,u)}const d=this.requestsList,g=d.length;for(let m=0;m<g;++m){const f=d[m],k=this.bandId(f.connectionId),u=k===-1?0:k%this.numBands+1,C=Ke.calculateRequestTimeRanges(f,this.calculator().minimumBoundary());for(let I=0;I<C.length;++I){const U=C[I].name;(k!==-1||U==="total")&&c(U,u,C[I].start*1e3,C[I].end*1e3)}}if(i.clearRect(0,0,this.width(),this.height()),i.save(),i.scale(window.devicePixelRatio,window.devicePixelRatio),i.lineWidth=2,l("total"),l("blocking"),l("connecting"),l("serviceworker"),l("serviceworker-preparation"),l("serviceworker-respondwith"),l("push"),l("proxy"),l("dns"),l("ssl"),l("sending"),l("waiting"),l("receiving"),this.highlightedRequest){const k=this.highlightedRequest,u=this.bandId(k.connectionId),C=(u===-1?0:u%this.numBands+1)*Si+a,I=Ke.calculateRequestTimeRanges(k,this.calculator().minimumBoundary());i.fillStyle=je.instance().getComputedValue("--sys-color-tonal-container");const U=We(I[0].start*1e3),P=We(I[0].end*1e3);i.fillRect(e.computePosition(U)-2,C-5/2-2,e.computePosition(P)-e.computePosition(U)+1+2*2,5*2);for(let W=0;W<I.length;++W){const ge=I[W].name;if(u!==-1||ge==="total"){i.beginPath(),i.strokeStyle=je.instance().getComputedValue(Ie[ge]),i.lineWidth=5;const Te=We(I[W].start*1e3),X=We(I[W].end*1e3);i.moveTo(e.computePosition(Te)-0,C),i.lineTo(e.computePosition(X)+1,C),i.stroke()}}}const p=this.element.offsetHeight;i.lineWidth=1,i.beginPath(),i.strokeStyle=je.instance().getComputedValue(O.getDCLEventColor());for(let m=this.domContentLoadedEvents.length-1;m>=0;--m){const f=e.computePosition(We(this.domContentLoadedEvents[m])),k=Math.round(f)+.5;i.moveTo(k,0),i.lineTo(k,p)}i.stroke(),i.beginPath(),i.strokeStyle=je.instance().getComputedValue(O.getLoadEventColor());for(let m=this.loadEvents.length-1;m>=0;--m){const f=e.computePosition(We(this.loadEvents[m])),k=Math.round(f)+.5;i.moveTo(k,0),i.lineTo(k,p)}if(i.stroke(),this.selectedFilmStripTime!==-1){i.lineWidth=2,i.beginPath(),i.strokeStyle=je.instance().getComputedValue("--network-frame-divider-color");const m=We(this.selectedFilmStripTime),f=Math.round(e.computePosition(m));i.moveTo(f,0),i.lineTo(f,p),i.stroke()}i.restore()}}const Ie={total:"--network-overview-total",blocking:"--network-overview-blocking",connecting:"--network-overview-connecting",serviceworker:"--network-overview-service-worker","serviceworker-preparation":"--network-overview-service-worker","serviceworker-respondwith":"--network-overview-service-worker-respond-with",push:"--network-overview-push",proxy:"--override-network-overview-proxy",dns:"--network-overview-dns",ssl:"--network-overview-ssl",sending:"--override-network-overview-sending",waiting:"--network-overview-waiting",receiving:"--network-overview-receiving",queueing:"--network-overview-queueing"},Si=3,to=5,io=10,gc=1,fc=Object.freeze(Object.defineProperty({__proto__:null,NetworkOverview:Nn,RequestTimeRangeNameToColor:Ie},Symbol.toStringTag,{value:"Module"})),Mn=new CSSStyleSheet;Mn.replaceSync(`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.network-waterfall-v-scroll {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  margin-top: 31px;
  z-index: 200;
}

.theme-with-dark-background .network-waterfall-v-scroll {
  /**
  * Waterfall scrollbars are implemented as overflowing elements on top of the
  * scrollable content. The actual content is a viewport without scrollbars.
  * When using a dark theme, we should inform Blink that the content is dark,
  * so that the native scrollbars are colored accordingly.
  */
  background: rgb(0 0 0 / 1%);
}

.network-waterfall-v-scroll.small {
  margin-top: 27px;
}

.network-waterfall-v-scroll-content {
  width: 15px;
  pointer-events: none;
}

/*# sourceURL=networkWaterfallColumn.css */
`);const wc=1,vc=ur.instance();class Mi extends me{canvas;canvasPosition;leftPadding;fontSize;rightPadding;scrollTop;headerHeight;calculator;rawRowHeight;rowHeight;offsetWidth;offsetHeight;startTime;endTime;popoverHelper;nodes;hoveredNode;eventDividers;styleForTimeRangeName;styleForWaitingResourceType;styleForDownloadingResourceType;wiskerStyle;hoverDetailsStyle;pathForStyle;textLayers;constructor(e){super(!1),this.canvas=this.contentElement.createChild("canvas"),this.canvas.tabIndex=-1,this.setDefaultFocusedElement(this.canvas),this.canvasPosition=this.canvas.getBoundingClientRect(),this.leftPadding=5,this.fontSize=10,this.rightPadding=0,this.scrollTop=0,this.headerHeight=0,this.calculator=e,this.rawRowHeight=0,this.rowHeight=0,this.offsetWidth=0,this.offsetHeight=0,this.startTime=this.calculator.minimumBoundary(),this.endTime=this.calculator.maximumBoundary(),this.popoverHelper=new qo(this.element,this.getPopoverRequest.bind(this),"network.timing"),this.popoverHelper.setHasPadding(!0),this.popoverHelper.setTimeout(300,300),this.nodes=[],this.hoveredNode=null,this.eventDividers=new Map,this.element.addEventListener("mousemove",this.onMouseMove.bind(this),!0),this.element.addEventListener("mouseleave",o=>this.setHoveredNode(null,!1),!0),this.element.addEventListener("click",this.onClick.bind(this),!0),this.styleForTimeRangeName=Mi.buildRequestTimeRangeStyle();const t=Mi.buildResourceTypeStyle();this.styleForWaitingResourceType=t[0],this.styleForDownloadingResourceType=t[1];const i=je.instance().getComputedValue("--sys-color-state-disabled");this.wiskerStyle={borderColor:i,lineWidth:1,fillStyle:void 0},this.hoverDetailsStyle={fillStyle:i,lineWidth:1,borderColor:i},this.pathForStyle=new Map,this.textLayers=[]}static buildRequestTimeRangeStyle(){const e=new Map;return e.set("connecting",{fillStyle:Ie.connecting}),e.set("ssl",{fillStyle:Ie.ssl}),e.set("dns",{fillStyle:Ie.dns}),e.set("proxy",{fillStyle:Ie.proxy}),e.set("blocking",{fillStyle:Ie.blocking}),e.set("push",{fillStyle:Ie.push}),e.set("queueing",{fillStyle:Ie.queueing,lineWidth:2,borderColor:"lightgrey"}),e.set("receiving",{fillStyle:Ie.receiving,lineWidth:2,borderColor:"#03A9F4"}),e.set("waiting",{fillStyle:Ie.waiting}),e.set("receiving-push",{fillStyle:Ie["receiving-push"]}),e.set("serviceworker",{fillStyle:Ie.serviceworker}),e.set("serviceworker-preparation",{fillStyle:Ie["serviceworker-preparation"]}),e.set("serviceworker-respondwith",{fillStyle:Ie["serviceworker-respondwith"]}),e}static buildResourceTypeStyle(){const e=new Map([["document","hsl(215, 100%, 80%)"],["font","hsl(8, 100%, 80%)"],["media","hsl(90, 50%, 80%)"],["image","hsl(90, 50%, 80%)"],["script","hsl(31, 100%, 80%)"],["stylesheet","hsl(272, 64%, 80%)"],["texttrack","hsl(8, 100%, 80%)"],["websocket","hsl(0, 0%, 95%)"],["xhr","hsl(53, 100%, 80%)"],["fetch","hsl(53, 100%, 80%)"],["other","hsl(0, 0%, 95%)"]]),t=new Map,i=new Map;for(const l of Object.values(Ye)){let c=e.get(l.name());c||(c=e.get("other"));const d=o(c);t.set(l,{fillStyle:a(c),lineWidth:1,borderColor:d}),i.set(l,{fillStyle:c,lineWidth:1,borderColor:d})}return[t,i];function o(l){const c=Us(l)?.as("hsl");if(!c)return"";let{s:d,l:g}=c;return d/=2,g-=Math.min(g,.2),new Vs(c.h,d,g,c.alpha).asString()}function a(l){const c=Us(l)?.as("hsl");if(!c)return"";let{l:d}=c;return d*=1.1,new Vs(c.h,c.s,d,c.alpha).asString()}}resetPaths(){this.pathForStyle.clear(),this.pathForStyle.set(this.wiskerStyle,new Path2D),this.styleForTimeRangeName.forEach(e=>this.pathForStyle.set(e,new Path2D)),this.styleForWaitingResourceType.forEach(e=>this.pathForStyle.set(e,new Path2D)),this.styleForDownloadingResourceType.forEach(e=>this.pathForStyle.set(e,new Path2D)),this.pathForStyle.set(this.hoverDetailsStyle,new Path2D)}willHide(){this.popoverHelper.hidePopover()}wasShown(){this.update(),this.registerCSSFiles([Mn])}onMouseMove(e){this.setHoveredNode(this.getNodeFromPoint(e.offsetX,e.offsetY),e.shiftKey)}onClick(e){this.setSelectedNode(this.getNodeFromPoint(e.offsetX,e.offsetY))&&e.consume(!0)}getPopoverRequest(e){if(!this.hoveredNode)return null;const t=this.hoveredNode.request();if(!t)return null;const i=!H.instance().moduleSetting("network-color-code-resource-types").get()&&!this.calculator.startAtZero;let o,a,l;if(i?(o=Ke.calculateRequestTimeRanges(t,0).find(m=>m.name==="total"),a=this.timeToPosition(o.start),l=this.timeToPosition(o.end)):(o=this.getSimplifiedBarRange(t,0),a=o.start,l=o.end),l-a<50){const m=(l-a)/2;a=a+m-25,l=l-m+25}if(e.clientX<this.canvasPosition.left+a||e.clientX>this.canvasPosition.left+l)return null;const c=this.nodes.findIndex(m=>m.hovered()),d=this.getBarHeight(o.name),g=this.headerHeight+(this.rowHeight*c-this.scrollTop)+(this.rowHeight-d)/2;if(e.clientY<this.canvasPosition.top+g||e.clientY>this.canvasPosition.top+g+d)return null;const p=this.element.boxInWindow();return p.x+=a,p.y+=g,p.width=l-a,p.height=d,{box:p,show:m=>{const f=Ke.createTimingTable(t,this.calculator);return m.registerCSSFiles([gs]),m.contentElement.appendChild(f),Promise.resolve(!0)},hide:void 0}}setHoveredNode(e,t){this.hoveredNode&&this.hoveredNode.setHovered(!1,!1),this.hoveredNode=e,this.hoveredNode&&this.hoveredNode.setHovered(!0,t)}setSelectedNode(e){return e&&e.dataGrid?(e.select(),e.dataGrid.element.focus(),!0):!1}setRowHeight(e){this.rawRowHeight=e,this.updateRowHeight()}updateRowHeight(){this.rowHeight=Math.round(this.rawRowHeight*window.devicePixelRatio)/window.devicePixelRatio}setHeaderHeight(e){this.headerHeight=e}setRightPadding(e){this.rightPadding=e,this.calculateCanvasSize()}setCalculator(e){this.calculator=e}getNodeFromPoint(e,t){return t<=this.headerHeight?null:this.nodes[Math.floor((this.scrollTop+t-this.headerHeight)/this.rowHeight)]}scheduleDraw(){vc.write("NetworkWaterfallColumn.render",()=>this.update())}update(e,t,i){e!==void 0&&this.scrollTop!==e&&(this.popoverHelper.hidePopover(),this.scrollTop=e),i&&(this.nodes=i,this.calculateCanvasSize()),t!==void 0&&(this.eventDividers=t),this.startTime=this.calculator.minimumBoundary(),this.endTime=this.calculator.maximumBoundary(),this.resetCanvas(),this.resetPaths(),this.textLayers=[],this.draw()}resetCanvas(){const e=window.devicePixelRatio;this.canvas.width=this.offsetWidth*e,this.canvas.height=this.offsetHeight*e,this.canvas.style.width=this.offsetWidth+"px",this.canvas.style.height=this.offsetHeight+"px"}onResize(){super.onResize(),this.updateRowHeight(),this.calculateCanvasSize(),this.scheduleDraw()}calculateCanvasSize(){this.offsetWidth=this.contentElement.offsetWidth-this.rightPadding,this.offsetHeight=this.contentElement.offsetHeight,this.calculator.setDisplayWidth(this.offsetWidth),this.canvasPosition=this.canvas.getBoundingClientRect()}timeToPosition(e){const i=(this.offsetWidth-this.leftPadding)/(this.endTime-this.startTime);return Math.floor(this.leftPadding+(e-this.startTime)*i)}didDrawForTest(){}draw(){const e=!H.instance().moduleSetting("network-color-code-resource-types").get()&&!this.calculator.startAtZero,t=this.nodes,i=this.canvas.getContext("2d");if(!i)return;i.save(),i.scale(window.devicePixelRatio,window.devicePixelRatio),i.translate(0,this.headerHeight),i.rect(0,0,this.offsetWidth,this.offsetHeight),i.clip();const o=Math.floor(this.scrollTop/this.rowHeight),a=Math.min(t.length,o+Math.ceil(this.offsetHeight/this.rowHeight));for(let g=o;g<a;g++){const p=this.rowHeight*g,m=t[g];this.decorateRow(i,m,p-this.scrollTop);let f=[];m.hasChildren()&&!m.expanded&&(f=m.flatChildren()),f.push(m);for(const k of f)e?this.buildTimingBarLayers(k,p-this.scrollTop):this.buildSimplifiedBarLayers(i,k,p-this.scrollTop)}this.drawLayers(i,e),i.save(),i.fillStyle=je.instance().getComputedValue("--sys-color-state-disabled");for(const g of this.textLayers)i.fillText(g.text,g.x,g.y);i.restore(),this.drawEventDividers(i),i.restore();const l=75,c=18,d=Rr.calculateGridOffsets(this.calculator);Rr.drawCanvasGrid(i,d),Rr.drawCanvasHeaders(i,d,g=>this.calculator.formatValue(g,d.precision),this.fontSize,this.headerHeight,l),i.save(),i.scale(window.devicePixelRatio,window.devicePixelRatio),i.clearRect(this.offsetWidth-c,0,c,this.headerHeight),i.restore(),this.didDrawForTest()}drawLayers(e,t){for(const i of this.pathForStyle){const o=i[0],a=i[1];e.save(),e.beginPath(),o.lineWidth&&(e.lineWidth=o.lineWidth,o.borderColor&&(e.strokeStyle=o.borderColor),e.stroke(a)),o.fillStyle&&(e.fillStyle=t?je.instance().getComputedValue(o.fillStyle):o.fillStyle,e.fill(a)),e.restore()}}drawEventDividers(e){e.save(),e.lineWidth=1;for(const t of this.eventDividers.keys()){e.strokeStyle=t;for(const i of this.eventDividers.get(t)||[]){e.beginPath();const o=this.timeToPosition(i);e.moveTo(o,0),e.lineTo(o,this.offsetHeight)}e.stroke()}e.restore()}getBarHeight(e){switch(e){case"connecting":case"ssl":case"dns":case"proxy":case"blocking":case"push":case"queueing":return 7;default:return 13}}getSimplifiedBarRange(e,t){const i=this.offsetWidth-this.leftPadding,o=this.calculator.computeBarGraphPercentages(e);return{start:this.leftPadding+Math.floor(o.start/100*i)+t,mid:this.leftPadding+Math.floor(o.middle/100*i)+t,end:this.leftPadding+Math.floor(o.end/100*i)+t}}buildSimplifiedBarLayers(e,t,i){const o=t.request();if(!o)return;const a=1,l=.5,c=this.getSimplifiedBarRange(o,l),d=this.getBarHeight();i+=Math.floor(this.rowHeight/2-d/2+a)-a/2;const g=this.styleForWaitingResourceType.get(o.resourceType());this.pathForStyle.get(g).rect(c.start,i,c.mid-c.start,d-a);const m=Math.max(2,c.end-c.mid),f=this.styleForDownloadingResourceType.get(o.resourceType());this.pathForStyle.get(f).rect(c.mid,i,m,d-a);let u=null;if(t.hovered()){u=this.calculator.computeBarGraphLabels(o);const C=10,I=e.measureText(u.left).width,U=e.measureText(u.right).width,P=this.pathForStyle.get(this.hoverDetailsStyle);if(I<c.mid-c.start){const ge=c.start+(c.mid-c.start-I)/2;this.textLayers.push({text:u.left,x:ge,y:i+this.fontSize})}else C+I+this.leftPadding<c.start&&(this.textLayers.push({text:u.left,x:c.start-I-C-1,y:i+this.fontSize}),P.moveTo(c.start-C,i+Math.floor(d/2)),P.arc(c.start,i+Math.floor(d/2),2,0,2*Math.PI),P.moveTo(c.start-C,i+Math.floor(d/2)),P.lineTo(c.start,i+Math.floor(d/2)));const W=c.mid+m+l;if(U<W-c.mid){const ge=c.mid+(W-c.mid-U)/2;this.textLayers.push({text:u.right,x:ge,y:i+this.fontSize})}else W+C+U<this.offsetWidth-this.leftPadding&&(this.textLayers.push({text:u.right,x:W+C+1,y:i+this.fontSize}),P.moveTo(W,i+Math.floor(d/2)),P.arc(W,i+Math.floor(d/2),2,0,2*Math.PI),P.moveTo(W,i+Math.floor(d/2)),P.lineTo(W+C,i+Math.floor(d/2)))}if(!this.calculator.startAtZero){const C=Ke.calculateRequestTimeRanges(o,0).find(Te=>Te.name==="total"),I=u?e.measureText(u.left).width:0,U=I<c.mid-c.start,W=u&&!U?I+13:0,ge=this.timeToPosition(C.start);if(c.start-W>ge){const Te=this.pathForStyle.get(this.wiskerStyle);Te.moveTo(ge,i+Math.floor(d/2)),Te.lineTo(c.start-W,i+Math.floor(d/2));const X=d/2;Te.moveTo(ge+l,i+X/2),Te.lineTo(ge+l,i+d-X/2-1)}}}buildTimingBarLayers(e,t){const i=e.request();if(!i)return;const o=Ke.calculateRequestTimeRanges(i,0);let a=0;for(const l of o){if(l.name==="total"||l.name==="sending"||l.end-l.start===0)continue;const c=this.styleForTimeRangeName.get(l.name),d=this.pathForStyle.get(c),g=c.lineWidth||0,p=this.getBarHeight(l.name),m=t+Math.floor(this.rowHeight/2-p/2)+g/2,f=this.timeToPosition(l.start),k=this.timeToPosition(l.end);d.rect(f+a*wc,m,k-f,p-g),a++}}decorateRow(e,t,i){const o=t.backgroundColor();e.save(),e.beginPath(),e.fillStyle=je.instance().getComputedValue(o),e.rect(0,i,this.offsetWidth,this.rowHeight),e.fill(),e.restore()}}const yc=Object.freeze(Object.defineProperty({__proto__:null,NetworkWaterfallColumn:Mi},Symbol.toStringTag,{value:"Module"})),j={networkLog:"Network Log",waterfall:"Waterfall",responseHeaders:"Response Headers",manageHeaderColumns:"Manage Header Columns…",startTime:"Start Time",responseTime:"Response Time",endTime:"End Time",totalDuration:"Total Duration",latency:"Latency",name:"Name",path:"Path",url:"Url",method:"Method",status:"Status",text:"Text",protocol:"Protocol",scheme:"Scheme",domain:"Domain",remoteAddress:"Remote Address",type:"Type",initiator:"Initiator",hasOverrides:"Has overrides",initiatorAddressSpace:"Initiator Address Space",cookies:"Cookies",setCookies:"Set Cookies",size:"Size",content:"Content",time:"Time",priority:"Priority",connectionId:"Connection ID",remoteAddressSpace:"Remote Address Space"},Bn=Z("panels/network/NetworkLogViewColumns.ts",j),st=Q.bind(void 0,Bn),se=hr.bind(void 0,Bn);class Bi{networkLogView;persistentSettings;networkLogLargeRowsSetting;eventDividers;eventDividersShown;gridMode;columns;waterfallRequestsAreStale;waterfallScrollerWidthIsStale;popupLinkifier;calculatorsMap;lastWheelTime;dataGridInternal;splitWidget;waterfallColumn;activeScroller;dataGridScroller;waterfallScroller;waterfallScrollerContent;waterfallHeaderElement;waterfallColumnSortIcon;activeWaterfallSortId;popoverHelper;hasScrollerTouchStarted;scrollerTouchStartPos;constructor(e,t,i,o){this.networkLogView=e,this.persistentSettings=H.instance().createSetting("network-log-columns",{}),this.networkLogLargeRowsSetting=o,this.networkLogLargeRowsSetting.addChangeListener(this.updateRowsSize,this),this.eventDividers=new Map,this.eventDividersShown=!1,this.gridMode=!0,this.columns=[],this.waterfallRequestsAreStale=!1,this.waterfallScrollerWidthIsStale=!0,this.popupLinkifier=new Ze,this.calculatorsMap=new Map,this.calculatorsMap.set("Time",t),this.calculatorsMap.set("Duration",i),this.lastWheelTime=0,this.setupDataGrid(),this.setupWaterfall(),je.instance().addEventListener(Ra.eventName,()=>{this.scheduleRefresh()})}static convertToDataGridDescriptor(e){const t=e.title instanceof Function?e.title():e.title;return{id:e.id,title:t,sortable:e.sortable,align:e.align,nonSelectable:e.nonSelectable,weight:e.weight,allowInSortByEvenWhenHidden:e.allowInSortByEvenWhenHidden}}wasShown(){this.updateRowsSize()}willHide(){this.popoverHelper&&this.popoverHelper.hidePopover()}reset(){this.popoverHelper&&this.popoverHelper.hidePopover(),this.eventDividers.clear()}setupDataGrid(){const e=bc,t=ro;this.columns=[];for(const o of e){const l=Object.assign({},t,o);if(l.id=l.id,l.subtitle){const c=l.title instanceof Function?l.title():l.title,d=l.subtitle instanceof Function?l.subtitle():l.subtitle;l.titleDOMFragment=this.makeHeaderFragment(c,d)}this.columns.push(l)}this.loadCustomColumnsAndSettings(),this.popoverHelper=new qo(this.networkLogView.element,this.getPopoverRequest.bind(this),"network.initiator-stacktrace"),this.popoverHelper.setHasPadding(!0),this.popoverHelper.setTimeout(300,300),this.dataGridInternal=new es({displayName:st(j.networkLog),columns:this.columns.map(Bi.convertToDataGridDescriptor),editCallback:void 0,deleteCallback:void 0,refreshCallback:void 0}),this.dataGridInternal.element.addEventListener("mousedown",o=>{!this.dataGridInternal.selectedNode&&o.button&&o.consume()},!0),this.dataGridScroller=this.dataGridInternal.scrollContainer,this.updateColumns(),this.dataGridInternal.addEventListener("SortingChanged",this.sortHandler,this),this.dataGridInternal.setHeaderContextMenuCallback(this.innerHeaderContextMenu.bind(this)),this.activeWaterfallSortId=Ai.StartTime,this.dataGridInternal.markColumnAsSortedBy(kc,$t.Ascending),this.splitWidget=new or(!0,!0,"network-panel-split-view-waterfall",200);const i=this.dataGridInternal.asWidget();i.setMinimumSize(150,0),this.splitWidget.setMainWidget(i)}setupWaterfall(){this.waterfallColumn=new Mi(this.networkLogView.calculator()),this.waterfallColumn.element.addEventListener("contextmenu",e.bind(this)),this.waterfallColumn.element.addEventListener("wheel",this.onMouseWheel.bind(this,!1),{passive:!0}),this.waterfallColumn.element.addEventListener("touchstart",this.onTouchStart.bind(this)),this.waterfallColumn.element.addEventListener("touchmove",this.onTouchMove.bind(this)),this.waterfallColumn.element.addEventListener("touchend",this.onTouchEnd.bind(this)),this.dataGridScroller.addEventListener("wheel",this.onMouseWheel.bind(this,!0),!0),this.dataGridScroller.addEventListener("touchstart",this.onTouchStart.bind(this)),this.dataGridScroller.addEventListener("touchmove",this.onTouchMove.bind(this)),this.dataGridScroller.addEventListener("touchend",this.onTouchEnd.bind(this)),this.waterfallScroller=this.waterfallColumn.contentElement.createChild("div","network-waterfall-v-scroll"),this.waterfallScrollerContent=this.waterfallScroller.createChild("div","network-waterfall-v-scroll-content"),this.dataGridInternal.addEventListener("PaddingChanged",()=>{this.waterfallScrollerWidthIsStale=!0,this.syncScrollers()}),this.dataGridInternal.addEventListener("ViewportCalculated",this.redrawWaterfallColumn.bind(this)),this.createWaterfallHeader(),this.waterfallColumn.contentElement.classList.add("network-waterfall-view"),this.waterfallColumn.setMinimumSize(100,0),this.splitWidget.setSidebarWidget(this.waterfallColumn),this.switchViewMode(!1);function e(t){const i=t,o=this.waterfallColumn.getNodeFromPoint(i.offsetX,i.offsetY);if(!o)return;const a=o.request();if(!a)return;const l=new Qe(i);this.networkLogView.handleContextMenuForRequest(l,a),l.show()}}onMouseWheel(e,t){e&&t.consume(!0);const i=t,o=Date.now()-this.lastWheelTime<80;this.activeScroller.scrollBy({top:i.deltaY,behavior:o?"auto":"smooth"}),this.syncScrollers(),this.lastWheelTime=Date.now()}onTouchStart(e){const t=e;this.hasScrollerTouchStarted=!0,this.scrollerTouchStartPos=t.changedTouches[0].pageY}onTouchMove(e){if(!this.hasScrollerTouchStarted)return;const i=e.changedTouches[0].pageY,o=this.scrollerTouchStartPos-i;this.activeScroller.scrollBy({top:o,behavior:"auto"}),this.syncScrollers(),this.scrollerTouchStartPos=i}onTouchEnd(){this.hasScrollerTouchStarted=!1}syncScrollers(){this.waterfallColumn.isShowing()&&(this.waterfallScrollerContent.style.height=this.dataGridScroller.scrollHeight-this.dataGridInternal.headerHeight()+"px",this.updateScrollerWidthIfNeeded(),this.dataGridScroller.scrollTop=this.waterfallScroller.scrollTop)}updateScrollerWidthIfNeeded(){this.waterfallScrollerWidthIsStale&&(this.waterfallScrollerWidthIsStale=!1,this.waterfallColumn.setRightPadding(this.waterfallScroller.offsetWidth-this.waterfallScrollerContent.offsetWidth))}redrawWaterfallColumn(){if(!this.waterfallRequestsAreStale){this.updateScrollerWidthIfNeeded(),this.waterfallColumn.update(this.activeScroller.scrollTop,this.eventDividersShown?this.eventDividers:void 0);return}this.syncScrollers();const e=this.networkLogView.flatNodesList();this.waterfallColumn.update(this.activeScroller.scrollTop,this.eventDividers,e)}createWaterfallHeader(){this.waterfallHeaderElement=this.waterfallColumn.contentElement.createChild("div","network-waterfall-header"),this.waterfallHeaderElement.setAttribute("jslog",`${Ia("waterfall").track({click:!0})}`),this.waterfallHeaderElement.addEventListener("click",t.bind(this)),this.waterfallHeaderElement.addEventListener("contextmenu",i=>{const o=new Qe(i);this.innerHeaderContextMenu(o),o.show()}),this.waterfallHeaderElement.createChild("div","hover-layer");const e=this.waterfallHeaderElement.createChild("div");e.textContent=st(j.waterfall),this.waterfallColumnSortIcon=new dt,this.waterfallColumnSortIcon.className="sort-order-icon",this.waterfallHeaderElement.createChild("div","sort-order-icon-container").appendChild(this.waterfallColumnSortIcon);function t(){const i=$t,o=this.dataGridInternal.sortColumnId()==="waterfall",a=this.dataGridInternal.isSortOrderAscending(),l=o&&a?i.Descending:i.Ascending;this.dataGridInternal.markColumnAsSortedBy("waterfall",l),this.sortHandler()}}setCalculator(e){this.waterfallColumn.setCalculator(e)}scheduleRefresh(){this.waterfallColumn.scheduleDraw()}updateRowsSize(){const e=!!this.networkLogLargeRowsSetting.get();this.dataGridInternal.element.classList.toggle("small",!e),this.dataGridInternal.scheduleUpdate(),this.waterfallScrollerWidthIsStale=!0,this.waterfallColumn.setRowHeight(e?41:21),this.waterfallScroller.classList.toggle("small",!e),this.waterfallHeaderElement.classList.toggle("small",!e),window.requestAnimationFrame(()=>{this.waterfallColumn.setHeaderHeight(this.waterfallScroller.offsetTop),this.waterfallColumn.scheduleDraw()})}show(e){this.splitWidget.show(e)}setHidden(e){Ro(this.splitWidget.element,e)}dataGrid(){return this.dataGridInternal}sortByCurrentColumn(){this.sortHandler()}sortHandler(){const e=this.dataGridInternal.sortColumnId();if(this.networkLogView.removeAllNodeHighlights(),this.waterfallRequestsAreStale=!0,e==="waterfall"){this.dataGridInternal.sortOrder()===$t.Ascending?this.waterfallColumnSortIcon.name="triangle-up":this.waterfallColumnSortIcon.name="triangle-down",this.waterfallColumnSortIcon.hidden=!1;const o=G.RequestPropertyComparator.bind(null,this.activeWaterfallSortId);this.dataGridInternal.sortNodes(o,!this.dataGridInternal.isSortOrderAscending()),this.dataGridSortedForTest();return}this.waterfallColumnSortIcon.hidden=!0,this.waterfallColumnSortIcon.name=null;const t=this.columns.find(o=>o.id===e);if(!t||!t.sortingFunction)return;const i=t.sortingFunction;i&&(this.dataGridInternal.sortNodes(i,!this.dataGridInternal.isSortOrderAscending()),this.dataGridSortedForTest())}dataGridSortedForTest(){}updateColumns(){if(!this.dataGridInternal)return;const e=new Set;if(this.gridMode)for(const t of this.columns)t.id==="waterfall"?this.setWaterfallVisibility(t.visible):t.visible&&e.add(t.id);else{const t=this.columns.find(i=>i.hideableGroup==="path"&&i.visible);t?e.add(t.id):e.add("name"),this.setWaterfallVisibility(!1)}this.dataGridInternal.setColumnsVisibility(e)}switchViewMode(e){this.gridMode!==e&&(this.gridMode=e,this.updateColumns(),this.updateRowsSize())}toggleColumnVisibility(e){this.loadCustomColumnsAndSettings(),e.visible=!e.visible,this.saveColumnsSettings(),this.updateColumns(),this.updateRowsSize()}setWaterfallVisibility(e){this.splitWidget&&(this.networkLogView.element.classList.toggle("has-waterfall",e),e?(this.splitWidget.showBoth(),this.activeScroller=this.waterfallScroller,this.waterfallScroller.scrollTop=this.dataGridScroller.scrollTop,this.dataGridInternal.setScrollContainer(this.waterfallScroller)):(this.networkLogView.removeAllNodeHighlights(),this.splitWidget.hideSidebar(),this.activeScroller=this.dataGridScroller,this.dataGridInternal.setScrollContainer(this.dataGridScroller)))}saveColumnsSettings(){const e={};for(const t of this.columns)e[t.id]={visible:t.visible,title:t.title};this.persistentSettings.set(e)}loadCustomColumnsAndSettings(){const e=this.persistentSettings.get(),t=Object.keys(e);for(const i of t){const o=e[i];let a=this.columns.find(l=>l.id===i);!a&&o.title&&(a=this.addCustomHeader(o.title,i)||void 0),a&&a.hideable&&typeof o.visible=="boolean"&&(a.visible=!!o.visible),a&&typeof o.title=="string"&&(a.title=o.title)}}makeHeaderFragment(e,t){const i=document.createDocumentFragment();z(i,e);const o=i.createChild("div","network-header-subtitle");return z(o,t),i}innerHeaderContextMenu(e){const t=this.columns.filter(m=>m.hideable),i=t.filter(m=>!m.isResponseHeader),o=new Map,a=[];for(const m of i)if(!m.hideableGroup)a.push(m);else{const f=m.hideableGroup;let k=o.get(f);k||(k=[],o.set(f,k)),k.push(m)}for(const m of o.values()){const f=m.filter(k=>k.visible);for(const k of m){const u=f.length===1&&f[0]===k,C=k.title instanceof Function?k.title():k.title;e.headerSection().appendCheckboxItem(C,this.toggleColumnVisibility.bind(this,k),{checked:k.visible,disabled:u,jslogContext:k.id})}e.headerSection().appendSeparator()}for(const m of a){const f=m.title instanceof Function?m.title():m.title;e.headerSection().appendCheckboxItem(f,this.toggleColumnVisibility.bind(this,m),{checked:m.visible,jslogContext:m.id})}const l=e.footerSection().appendSubMenuItem(st(j.responseHeaders),!1,"response-headers"),c=t.filter(m=>m.isResponseHeader);for(const m of c){const f=m.title instanceof Function?m.title():m.title;l.defaultSection().appendCheckboxItem(f,this.toggleColumnVisibility.bind(this,m),{checked:m.visible,jslogContext:m.id})}l.footerSection().appendItem(st(j.manageHeaderColumns),this.manageCustomHeaderDialog.bind(this),{jslogContext:"manage-header-columns"});const d=Ai,g=e.footerSection().appendSubMenuItem(st(j.waterfall),!1,"waterfall");g.defaultSection().appendCheckboxItem(st(j.startTime),p.bind(this,d.StartTime),{checked:this.activeWaterfallSortId===d.StartTime,jslogContext:"start-time"}),g.defaultSection().appendCheckboxItem(st(j.responseTime),p.bind(this,d.ResponseTime),{checked:this.activeWaterfallSortId===d.ResponseTime,jslogContext:"response-time"}),g.defaultSection().appendCheckboxItem(st(j.endTime),p.bind(this,d.EndTime),{checked:this.activeWaterfallSortId===d.EndTime,jslogContext:"end-time"}),g.defaultSection().appendCheckboxItem(st(j.totalDuration),p.bind(this,d.Duration),{checked:this.activeWaterfallSortId===d.Duration,jslogContext:"total-duration"}),g.defaultSection().appendCheckboxItem(st(j.latency),p.bind(this,d.Latency),{checked:this.activeWaterfallSortId===d.Latency,jslogContext:"latency"});function p(m){let f=this.calculatorsMap.get("Time");const k=Ai;(m===k.Duration||m===k.Latency)&&(f=this.calculatorsMap.get("Duration")),this.networkLogView.setCalculator(f),this.activeWaterfallSortId=m,this.dataGridInternal.markColumnAsSortedBy("waterfall",$t.Ascending),this.sortHandler()}}manageCustomHeaderDialog(){const e=[];for(const o of this.columns){const a=o.title instanceof Function?o.title():o.title;o.isResponseHeader&&e.push({title:a,editable:o.isCustomHeader})}const t=new Pn(e,o=>!!this.addCustomHeader(o),this.changeCustomHeader.bind(this),this.removeCustomHeader.bind(this)),i=new Ea("manage-custom-headers");t.show(i.contentElement),i.setSizeBehavior("MeasureContent"),i.show(this.networkLogView.element)}removeCustomHeader(e){e=e.toLowerCase();const t=this.columns.findIndex(i=>i.id===e);return t===-1?!1:(this.columns.splice(t,1),this.dataGridInternal.removeColumn(e),this.saveColumnsSettings(),this.updateColumns(),!0)}addCustomHeader(e,t,i){if(t||(t=e.toLowerCase()),i===void 0&&(i=this.columns.length-1),this.columns.find(c=>c.id===t))return null;const l=Object.assign({},ro,{id:t,title:e,isResponseHeader:!0,isCustomHeader:!0,visible:!0,sortingFunction:G.ResponseHeaderStringComparator.bind(null,t)});return this.columns.splice(i,0,l),this.dataGridInternal&&this.dataGridInternal.addColumn(Bi.convertToDataGridDescriptor(l),i),this.saveColumnsSettings(),this.updateColumns(),l}changeCustomHeader(e,t,i){i||(i=t.toLowerCase()),e=e.toLowerCase();const o=this.columns.findIndex(c=>c.id===e),a=this.columns[o],l=this.columns.find(c=>c.id===i);return!a||l&&e!==i?!1:(this.removeCustomHeader(e),this.addCustomHeader(t,i,o),!0)}getPopoverRequest(e){if(!this.gridMode)return null;const t=this.networkLogView.hoveredNode();if(!t||!e.target)return null;const i=e.target.enclosingNodeOrSelfWithClass("network-script-initiated");if(!i)return null;const o=t.request();return o?{box:i.boxInWindow(),show:async a=>{this.popupLinkifier.addEventListener("liveLocationUpdated",()=>{a.setSizeBehavior("MeasureContent")});const l=Di.createStackTracePreview(o,this.popupLinkifier,!1);return l?(a.contentElement.appendChild(l.element),!0):!1},hide:this.popupLinkifier.reset.bind(this.popupLinkifier)}:null}addEventDividers(e,t){let i="transparent";switch(t){case"network-dcl-divider":i="#0867CB";break;case"network-load-divider":i="#B31412";break;default:return}const o=this.eventDividers.get(i)||[];this.eventDividers.set(i,o.concat(e)),this.networkLogView.scheduleRefresh()}hideEventDividers(){this.eventDividersShown=!0,this.redrawWaterfallColumn()}showEventDividers(){this.eventDividersShown=!1,this.redrawWaterfallColumn()}selectFilmStripFrame(e){this.eventDividers.set(so,[e]),this.redrawWaterfallColumn()}clearFilmStripFrame(){this.eventDividers.delete(so),this.redrawWaterfallColumn()}}const kc="waterfall",ro={subtitle:null,visible:!1,weight:6,sortable:!0,hideable:!0,hideableGroup:null,nonSelectable:!1,isResponseHeader:!1,isCustomHeader:!1,allowInSortByEvenWhenHidden:!1},bc=[{id:"name",title:se(j.name),subtitle:se(j.path),visible:!0,weight:20,hideable:!0,hideableGroup:"path",sortingFunction:G.NameComparator},{id:"path",title:se(j.path),hideable:!0,hideableGroup:"path",sortingFunction:G.RequestPropertyComparator.bind(null,"pathname")},{id:"url",title:se(j.url),hideable:!0,hideableGroup:"path",sortingFunction:G.RequestURLComparator},{id:"method",title:se(j.method),sortingFunction:G.RequestPropertyComparator.bind(null,"requestMethod")},{id:"status",title:se(j.status),visible:!0,subtitle:se(j.text),sortingFunction:G.RequestPropertyComparator.bind(null,"statusCode")},{id:"protocol",title:se(j.protocol),sortingFunction:G.RequestPropertyComparator.bind(null,"protocol")},{id:"scheme",title:se(j.scheme),sortingFunction:G.RequestPropertyComparator.bind(null,"scheme")},{id:"domain",title:se(j.domain),sortingFunction:G.RequestPropertyComparator.bind(null,"domain")},{id:"remote-address",title:se(j.remoteAddress),weight:10,align:"right",sortingFunction:G.RemoteAddressComparator},{id:"remote-address-space",title:se(j.remoteAddressSpace),visible:!1,weight:10,sortingFunction:G.RemoteAddressSpaceComparator},{id:"type",title:se(j.type),visible:!0,sortingFunction:G.TypeComparator},{id:"initiator",title:se(j.initiator),visible:!0,weight:10,sortingFunction:G.InitiatorComparator},{id:"initiator-address-space",title:se(j.initiatorAddressSpace),visible:!1,weight:10,sortingFunction:G.InitiatorAddressSpaceComparator},{id:"cookies",title:se(j.cookies),align:"right",sortingFunction:G.RequestCookiesCountComparator},{id:"set-cookies",title:se(j.setCookies),align:"right",sortingFunction:G.ResponseCookiesCountComparator},{id:"size",title:se(j.size),visible:!0,subtitle:se(j.content),align:"right",sortingFunction:G.SizeComparator},{id:"time",title:se(j.time),visible:!0,subtitle:se(j.latency),align:"right",sortingFunction:G.RequestPropertyComparator.bind(null,"duration")},{id:"priority",title:se(j.priority),sortingFunction:G.PriorityComparator},{id:"connection-id",title:se(j.connectionId),sortingFunction:G.RequestPropertyComparator.bind(null,"connectionId")},{id:"cache-control",isResponseHeader:!0,title:gt("Cache-Control"),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"cache-control")},{id:"connection",isResponseHeader:!0,title:gt("Connection"),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"connection")},{id:"content-encoding",isResponseHeader:!0,title:gt("Content-Encoding"),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"content-encoding")},{id:"content-length",isResponseHeader:!0,title:gt("Content-Length"),align:"right",sortingFunction:G.ResponseHeaderNumberComparator.bind(null,"content-length")},{id:"etag",isResponseHeader:!0,title:gt("ETag"),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"etag")},{id:"has-overrides",title:se(j.hasOverrides),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"has-overrides")},{id:"keep-alive",isResponseHeader:!0,title:gt("Keep-Alive"),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"keep-alive")},{id:"last-modified",isResponseHeader:!0,title:gt("Last-Modified"),sortingFunction:G.ResponseHeaderDateComparator.bind(null,"last-modified")},{id:"server",isResponseHeader:!0,title:gt("Server"),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"server")},{id:"vary",isResponseHeader:!0,title:gt("Vary"),sortingFunction:G.ResponseHeaderStringComparator.bind(null,"vary")},{id:"waterfall",title:se(j.waterfall),allowInSortByEvenWhenHidden:!0}],so="#fccc49";var Ai;(function(w){w.StartTime="startTime",w.ResponseTime="responseReceivedTime",w.EndTime="endTime",w.Duration="duration",w.Latency="latency"})(Ai||(Ai={}));const Sc=Object.freeze(Object.defineProperty({__proto__:null,NetworkLogViewColumns:Bi},Symbol.toStringTag,{value:"Module"})),T={invertFilter:"Invert",invertsFilter:"Inverts the search filter",hideDataUrls:"Hide data URLs",hidesDataAndBlobUrls:"Hide 'data:' and 'blob:' URLs",chromeExtensions:"Hide extension URLs",hideChromeExtension:"Hide 'chrome-extension://' URLs",requestTypesToInclude:"Request types to include",hasBlockedCookies:"Blocked response cookies",onlyShowRequestsWithBlockedCookies:"Show only requests with blocked response cookies",blockedRequests:"Blocked requests",onlyShowBlockedRequests:"Show only blocked requests",thirdParty:"3rd-party requests",onlyShowThirdPartyRequests:"Show only requests with origin different from page origin",dropHarFilesHere:"Drop HAR files here",recordingNetworkActivity:"Recording network activity…",performARequestOrHitSToRecordThe:"Perform a request or hit {PH1} to record the reload.",recordToDisplayNetworkActivity:"Record network log ({PH1}) to display network activity.",learnMore:"Learn more",networkDataAvailable:"Network Data Available",sSRequests:"{PH1} / {PH2} requests",sSTransferred:"{PH1} / {PH2} transferred",sBSBTransferredOverNetwork:"{PH1} B / {PH2} B transferred over network",sSResources:"{PH1} / {PH2} resources",sBSBResourcesLoadedByThePage:"{PH1} B / {PH2} B resources loaded by the page",sRequests:"{PH1} requests",sTransferred:"{PH1} transferred",sBTransferredOverNetwork:"{PH1} B transferred over network",sResources:"{PH1} resources",sBResourcesLoadedByThePage:"{PH1} B resources loaded by the page",finishS:"Finish: {PH1}",domcontentloadedS:"DOMContentLoaded: {PH1}",loadS:"Load: {PH1}",copy:"Copy",copyURL:"Copy URL",copyRequestHeaders:"Copy request headers",copyResponseHeaders:"Copy response headers",copyResponse:"Copy response",copyStacktrace:"Copy stack trace",copyAsPowershell:"Copy as `PowerShell`",copyAsFetch:"Copy as `fetch`",copyAsNodejsFetch:"Copy as `fetch` (`Node.js`)",copyAsCurlCmd:"Copy as `cURL` (`cmd`)",copyAsCurlBash:"Copy as `cURL` (`bash`)",copyAllURLs:"Copy all URLs",copyAllListedURLs:"Copy all listed URLs",copyAllAsPowershell:"Copy all as `PowerShell`",copyAllListedAsPowershell:"Copy all listed as `PowerShell`",copyAllAsFetch:"Copy all as `fetch`",copyAllListedAsFetch:"Copy all listed as `fetch`",copyAllAsNodejsFetch:"Copy all as `fetch` (`Node.js`)",copyAllListedAsNodejsFetch:"Copy all listed as `fetch` (`Node.js`)",copyAllAsCurlCmd:"Copy all as `cURL` (`cmd`)",copyAllListedAsCurlCmd:"Copy all listed as `cURL` (`cmd`)",copyAllAsCurlBash:"Copy all as `cURL` (`bash`)",copyAllListedAsCurlBash:"Copy all listed as `cURL` (`bash`)",copyAsCurl:"Copy as `cURL`",copyAllAsCurl:"Copy all as `cURL`",copyAllListedAsCurl:"Copy all listed as `cURL`",copyAllAsHarSanitized:"Copy all as `HAR` (sanitized)",copyAllAsHarWithSensitiveData:"Copy all as `HAR` (with sensitive data)",copyAllListedAsHarSanitized:"Copy all listed as `HAR` (sanitized)",copyAllListedAsHarWithSensitiveData:"Copy all listed as `HAR` (with sensitive data)",clearBrowserCache:"Clear browser cache",clearBrowserCookies:"Clear browser cookies",blockRequestUrl:"Block request URL",unblockS:"Unblock {PH1}",blockRequestDomain:"Block request domain",replayXhr:"Replay XHR",areYouSureYouWantToClearBrowser:"Are you sure you want to clear browser cache?",areYouSureYouWantToClearBrowserCookies:"Are you sure you want to clear browser cookies?",overrideHeaders:"Override headers",showOnlyHideRequests:"Show only/hide requests",moreFilters:"More filters"},Yr=Z("panels/network/NetworkLogView.ts",T),R=Q.bind(void 0,Yr),Cc=ur.instance();class O extends Aa(me){networkInvertFilterSetting;networkHideDataURLSetting;networkHideChromeExtensions;networkShowBlockedCookiesOnlySetting;networkOnlyBlockedRequestsSetting;networkOnlyThirdPartySetting;networkResourceTypeFiltersSetting;networkShowOptionsToGenerateHarWithSensitiveData;rawRowHeight;progressBarContainer;networkLogLargeRowsSetting;rowHeightInternal;timeCalculatorInternal;durationCalculator;calculatorInternal;columnsInternal;staleRequests;mainRequestLoadTime;mainRequestDOMContentLoadedTime;filters;timeFilter;hoveredNodeInternal;recordingHint;highlightedNode;linkifierInternal;recording;needsRefresh;headerHeightInternal;groupLookups;activeGroupLookup;textFilterUI;invertFilterUI;dataURLFilterUI;moreFiltersDropDownUI;onlyBlockedResponseCookiesFilterUI;onlyBlockedRequestsUI;onlyThirdPartyFilterUI;hideChromeExtensionsUI;resourceCategoryFilterUI;filterParser;suggestionBuilder;dataGrid;summaryToolbarInternal;filterBar;textFilterSetting;constructor(e,t,i){super(),this.setMinimumSize(50,64),this.element.id="network-container",this.element.classList.add("no-node-selected"),this.networkInvertFilterSetting=H.instance().createSetting("network-invert-filter",!1),this.networkHideDataURLSetting=H.instance().createSetting("network-hide-data-url",!1),this.networkHideChromeExtensions=H.instance().createSetting("network-hide-chrome-extensions",!1),this.networkShowBlockedCookiesOnlySetting=H.instance().createSetting("network-show-blocked-cookies-only-setting",!1),this.networkOnlyBlockedRequestsSetting=H.instance().createSetting("network-only-blocked-requests",!1),this.networkOnlyThirdPartySetting=H.instance().createSetting("network-only-third-party-setting",!1),this.networkResourceTypeFiltersSetting=H.instance().createSetting("network-resource-type-filters",{}),this.networkShowOptionsToGenerateHarWithSensitiveData=H.instance().createSetting("network.show-options-to-generate-har-with-sensitive-data",!1),this.rawRowHeight=0,this.progressBarContainer=t,this.networkLogLargeRowsSetting=i,this.networkLogLargeRowsSetting.addChangeListener(o.bind(this),this);function o(){this.rawRowHeight=this.networkLogLargeRowsSetting.get()?41:21,this.rowHeightInternal=this.computeRowHeight()}this.rawRowHeight=0,this.rowHeightInternal=0,o.call(this),this.timeCalculatorInternal=new ys,this.durationCalculator=new Ln,this.calculatorInternal=this.timeCalculatorInternal,this.columnsInternal=new Bi(this,this.timeCalculatorInternal,this.durationCalculator,i),this.columnsInternal.show(this.element),this.staleRequests=new Set,this.mainRequestLoadTime=-1,this.mainRequestDOMContentLoadedTime=-1,this.filters=[],this.timeFilter=null,this.hoveredNodeInternal=null,this.recordingHint=null,this.highlightedNode=null,this.linkifierInternal=new Ze,this.recording=!1,this.needsRefresh=!1,this.headerHeightInternal=0,this.groupLookups=new Map,this.groupLookups.set("Frame",new qn(this)),this.activeGroupLookup=null,this.textFilterUI=new La,this.textFilterUI.addEventListener("FilterChanged",this.filterChanged,this),e.addFilter(this.textFilterUI),this.invertFilterUI=new Zt("invert-filter",R(T.invertFilter),!0,this.networkInvertFilterSetting,"invert-filter"),this.invertFilterUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),M.install(this.invertFilterUI.element(),R(T.invertsFilter)),e.addFilter(this.invertFilterUI),e.addDivider();const a=Object.entries(qa).map(([l,c])=>({name:c.name,label:()=>c.shortTitle(),title:c.title(),jslogContext:wo(l)}));Ji.isEnabled("network-panel-filter-bar-redesign")?(this.moreFiltersDropDownUI=new Dn,this.moreFiltersDropDownUI.addEventListener("FilterChanged",this.filterChanged,this),e.addFilter(this.moreFiltersDropDownUI),this.resourceCategoryFilterUI=new Ws(a,this.networkResourceTypeFiltersSetting),qt(this.resourceCategoryFilterUI.element(),R(T.requestTypesToInclude)),this.resourceCategoryFilterUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),e.addFilter(this.resourceCategoryFilterUI)):(this.dataURLFilterUI=new Zt("hide-data-url",R(T.hideDataUrls),!0,this.networkHideDataURLSetting,"hide-data-urls"),this.dataURLFilterUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),M.install(this.dataURLFilterUI.element(),R(T.hidesDataAndBlobUrls)),e.addFilter(this.dataURLFilterUI),this.hideChromeExtensionsUI=new Zt("chrome-extension",R(T.chromeExtensions),!0,this.networkHideChromeExtensions,"hide-extension-urls"),this.hideChromeExtensionsUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),M.install(this.hideChromeExtensionsUI.element(),R(T.hideChromeExtension)),e.addFilter(this.hideChromeExtensionsUI),this.resourceCategoryFilterUI=new Ws(a,this.networkResourceTypeFiltersSetting),qt(this.resourceCategoryFilterUI.element(),R(T.requestTypesToInclude)),this.resourceCategoryFilterUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),e.addFilter(this.resourceCategoryFilterUI),this.onlyBlockedResponseCookiesFilterUI=new Zt("only-show-blocked-cookies",R(T.hasBlockedCookies),!0,this.networkShowBlockedCookiesOnlySetting,"only-show-blocked-cookies"),this.onlyBlockedResponseCookiesFilterUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),M.install(this.onlyBlockedResponseCookiesFilterUI.element(),R(T.onlyShowRequestsWithBlockedCookies)),e.addFilter(this.onlyBlockedResponseCookiesFilterUI),this.onlyBlockedRequestsUI=new Zt("only-show-blocked-requests",R(T.blockedRequests),!0,this.networkOnlyBlockedRequestsSetting,"only-show-blocked-requests"),this.onlyBlockedRequestsUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),M.install(this.onlyBlockedRequestsUI.element(),R(T.onlyShowBlockedRequests)),e.addFilter(this.onlyBlockedRequestsUI),this.onlyThirdPartyFilterUI=new Zt("only-show-third-party",R(T.thirdParty),!0,this.networkOnlyThirdPartySetting,"only-show-third-party"),this.onlyThirdPartyFilterUI.addEventListener("FilterChanged",this.filterChanged.bind(this),this),M.install(this.onlyThirdPartyFilterUI.element(),R(T.onlyShowThirdPartyRequests)),e.addFilter(this.onlyThirdPartyFilterUI)),this.filterParser=new Fa(oo),this.suggestionBuilder=new Ha(oo,O.sortSearchValues),this.resetSuggestionBuilder(),this.dataGrid=this.columnsInternal.dataGrid(),this.setupDataGrid(),this.columnsInternal.sortByCurrentColumn(),e.filterButton().addEventListener("Click",this.dataGrid.scheduleUpdate.bind(this.dataGrid,!0)),this.summaryToolbarInternal=new Ne("network-summary-bar",this.element),this.summaryToolbarInternal.element.setAttribute("role","status"),new bl(this.element,[Sl.File],R(T.dropHarFilesHere),this.handleDrop.bind(this)),H.instance().moduleSetting("network-color-code-resource-types").addChangeListener(this.invalidateAllItems.bind(this,!1),this),kt.instance().observeModels(Ge,this,{scoped:!0}),ae.instance().addEventListener(Et.RequestAdded,this.onRequestUpdated,this),ae.instance().addEventListener(Et.RequestUpdated,this.onRequestUpdated,this),ae.instance().addEventListener(Et.RequestRemoved,this.onRequestRemoved,this),ae.instance().addEventListener(Et.Reset,this.reset,this),this.updateGroupByFrame(),H.instance().moduleSetting("network.group-by-frame").addChangeListener(()=>this.updateGroupByFrame()),this.filterBar=e,this.textFilterSetting=H.instance().createSetting("network-text-filter",""),this.textFilterSetting.get()&&this.textFilterUI.setValue(this.textFilterSetting.get())}getMoreFiltersDropdown(){return this.moreFiltersDropDownUI}updateGroupByFrame(){const e=H.instance().moduleSetting("network.group-by-frame").get();this.setGrouping(e?"Frame":null)}static sortSearchValues(e,t){e===q.Priority?t.sort((i,o)=>{const a=Ir(i),l=Ir(o);return nr(a)-nr(l)}):t.sort()}static negativeFilter(e,t){return!e(t)}static requestPathFilter(e,t){return e?e.test(t.path()+"/"+t.name()):!1}static subdomains(e){const t=[e];let i=e.indexOf(".");for(;i!==-1;)t.push("*"+e.substring(i)),i=e.indexOf(".",i+1);return t}static createRequestDomainFilter(e){const t=e.split("*").map(ni).join(".*");return O.requestDomainFilter.bind(null,new RegExp("^"+t+"$","i"))}static requestDomainFilter(e,t){return e.test(t.domain)}static runningRequestFilter(e){return!e.finished}static fromCacheRequestFilter(e){return e.cached()}static interceptedByServiceWorkerFilter(e){return e.fetchedViaServiceWorker}static initiatedByServiceWorkerFilter(e){return e.initiatedByServiceWorker()}static requestResponseHeaderFilter(e,t){return t.responseHeaderValue(e)!==void 0}static requestResponseHeaderSetCookieFilter(e,t){return!!t.responseHeaderValue("Set-Cookie")?.includes(e)}static requestMethodFilter(e,t){return t.requestMethod===e}static requestPriorityFilter(e,t){return t.priority()===e}static requestMimeTypeFilter(e,t){return t.mimeType===e}static requestMixedContentFilter(e,t){return e==="displayed"?t.mixedContentType==="optionally-blockable":e==="blocked"?t.mixedContentType==="blockable"&&t.wasBlocked():e==="block-overridden"?t.mixedContentType==="blockable"&&!t.wasBlocked():e==="all"?t.mixedContentType!=="none":!1}static requestSchemeFilter(e,t){return t.scheme===e}static requestCookieDomainFilter(e,t){return t.allCookiesIncludingBlockedOnes().some(i=>i.domain()===e)}static requestCookieNameFilter(e,t){return t.allCookiesIncludingBlockedOnes().some(i=>i.name()===e)}static requestCookiePathFilter(e,t){return t.allCookiesIncludingBlockedOnes().some(i=>i.path()===e)}static requestCookieValueFilter(e,t){return t.allCookiesIncludingBlockedOnes().some(i=>i.value()===e)}static requestSetCookieDomainFilter(e,t){return t.responseCookies.some(i=>i.domain()===e)}static requestSetCookieNameFilter(e,t){return t.responseCookies.some(i=>i.name()===e)}static requestSetCookieValueFilter(e,t){return t.responseCookies.some(i=>i.value()===e)}static requestSizeLargerThanFilter(e,t){return t.transferSize>=e}static statusCodeFilter(e,t){return String(t.statusCode)===e}static hasOverridesFilter(e,t){return e?e===vt.no?t.overrideTypes.length===0:e===vt.yes?t.overrideTypes.length>0:e===vt.content?t.overrideTypes.includes("content"):e===vt.headers?t.overrideTypes.includes("headers"):t.overrideTypes.join(",").includes(e):!1}static getHTTPRequestsFilter(e){return e.parsedURL.isValid&&e.scheme in On}static resourceTypeFilter(e,t){return t.resourceType().name()===e}static requestUrlFilter(e,t){return new RegExp(ni(e),"i").test(t.url())}static requestTimeFilter(e,t,i){return!(i.issueTime()>t||i.endTime!==-1&&i.endTime<e)}static copyRequestHeaders(e){ne.copyText(e.requestHeadersText())}static copyResponseHeaders(e){ne.copyText(e.responseHeadersText)}static async copyResponse(e){const t=await e.requestContentData();let i;qi.isError(t)?i="":t.isTextContent?i=t.text:i=t.asDataUrl()??"",ne.copyText(i)}handleDrop(e){const t=e.items;if(!t.length)return;const i=t[0].getAsFile();i&&this.onLoadFromFile(i)}async onLoadFromFile(e){const t=new za,i=new Pa(e,1e7);if(!await i.read(t)){const l=i.error();l&&this.harLoadFailed(l.message);return}let a;try{a=new Hl(JSON.parse(t.data()))}catch(l){this.harLoadFailed(l);return}ae.instance().importRequests(ai.requestsFromHARLog(a.log))}harLoadFailed(e){Na.instance().error("Failed to load HAR file with following error: "+e)}setGrouping(e){this.activeGroupLookup&&this.activeGroupLookup.reset();const t=e&&this.groupLookups.get(e)||null;this.activeGroupLookup=t,this.invalidateAllItems()}computeRowHeight(){return this.rawRowHeight}nodeForRequest(e){return ti.get(e)||null}headerHeight(){return this.headerHeightInternal}setRecording(e){this.recording=e,this.updateSummaryBar()}columns(){return this.columnsInternal}summaryToolbar(){return this.summaryToolbarInternal}modelAdded(e){const t=e.target();if(t.outermostTarget()!==t)return;const i=t.model(Ft);i&&(i.addEventListener(At.Load,this.loadEventFired,this),i.addEventListener(At.DOMContentLoaded,this.domContentLoadedEventFired,this));for(const o of ae.instance().requests())this.isInScope(o)&&this.refreshRequest(o)}modelRemoved(e){const t=e.target();if(t.outermostTarget()!==t)return;const i=t.model(Ft);i&&(i.removeEventListener(At.Load,this.loadEventFired,this),i.removeEventListener(At.DOMContentLoaded,this.domContentLoadedEventFired,this)),H.instance().moduleSetting("network-log.preserve-log").get()||this.reset()}linkifier(){return this.linkifierInternal}setWindow(e,t){!e&&!t?(this.timeFilter=null,this.timeCalculatorInternal.setWindow(null)):(this.timeFilter=O.requestTimeFilter.bind(null,e,t),this.timeCalculatorInternal.setWindow(new Ni(e,t))),this.filterRequests()}resetFocus(){this.dataGrid.element.focus()}resetSuggestionBuilder(){this.suggestionBuilder.clear(),this.suggestionBuilder.addItem(q.Is,"running"),this.suggestionBuilder.addItem(q.Is,"from-cache"),this.suggestionBuilder.addItem(q.Is,"service-worker-intercepted"),this.suggestionBuilder.addItem(q.Is,"service-worker-initiated"),this.suggestionBuilder.addItem(q.LargerThan,"100"),this.suggestionBuilder.addItem(q.LargerThan,"10k"),this.suggestionBuilder.addItem(q.LargerThan,"1M"),this.textFilterUI.setSuggestionProvider(this.suggestionBuilder.completions.bind(this.suggestionBuilder)),this.suggestionBuilder.addItem(q.HasOverrides,vt.yes),this.suggestionBuilder.addItem(q.HasOverrides,vt.no),this.suggestionBuilder.addItem(q.HasOverrides,vt.content),this.suggestionBuilder.addItem(q.HasOverrides,vt.headers)}filterChanged(){this.removeAllNodeHighlights(),this.parseFilterQuery(this.textFilterUI.value(),this.invertFilterUI.checked()),this.filterRequests(),this.textFilterSetting.set(this.textFilterUI.value()),this.moreFiltersDropDownUI?.updateActiveFiltersCount(),this.moreFiltersDropDownUI?.updateTooltip()}async resetFilter(){this.textFilterUI.clear()}showRecordingHint(){this.hideRecordingHint(),this.recordingHint=this.element.createChild("div","network-status-pane fill");const e=this.recordingHint.createChild("div","recording-hint");if(this.recording){let t=null;const i=Vr.instance().shortcutsForAction("inspector-main.reload")[0];i&&(t=this.recordingHint.createChild("b"),t.textContent=i.title());const o=e.createChild("span");o.textContent=R(T.recordingNetworkActivity),t&&(e.createChild("br"),e.appendChild(Fi(Yr,T.performARequestOrHitSToRecordThe,{PH1:t})))}else{const t=e.createChild("b");t.textContent=Vr.instance().shortcutTitleForAction("network.toggle-recording")||"",e.appendChild(Fi(Yr,T.recordToDisplayNetworkActivity,{PH1:t}))}e.createChild("br"),e.appendChild(Hi.create("https://developer.chrome.com/docs/devtools/network/?utm_source=devtools&utm_campaign=2019Q1",R(T.learnMore),void 0,void 0,"learn-more")),this.setHidden(!0)}hideRecordingHint(){this.setHidden(!1),this.recordingHint&&this.recordingHint.remove(),Qr(R(T.networkDataAvailable)),this.recordingHint=null}setHidden(e){this.columnsInternal.setHidden(e),Ro(this.summaryToolbarInternal.element,e)}elementsToRestoreScrollPositionsFor(){return this.dataGrid?[this.dataGrid.scrollContainer]:[]}columnExtensionResolved(){this.invalidateAllItems(!0)}setupDataGrid(){return this.dataGrid.setRowContextMenuCallback((e,t)=>{const i=t.request();i&&this.handleContextMenuForRequest(e,i)}),this.dataGrid.setStickToBottom(!0),this.dataGrid.setName("network-log"),this.dataGrid.setResizeMethod("last"),this.dataGrid.element.classList.add("network-log-grid"),this.dataGrid.element.addEventListener("mousedown",this.dataGridMouseDown.bind(this),!0),this.dataGrid.element.addEventListener("mousemove",this.dataGridMouseMove.bind(this),!0),this.dataGrid.element.addEventListener("mouseleave",()=>this.setHoveredNode(null),!0),this.dataGrid.element.addEventListener("keydown",e=>{if(e.key==="ArrowRight"&&this.dataGrid.selectedNode){const t=this.dataGrid.selectedNode.element().querySelector("button.devtools-link");t&&t.focus()}Ma(e)&&(this.dispatchEventToListeners("RequestActivated",{showPanel:!0,takeFocus:!0}),e.consume(!0))}),this.dataGrid.element.addEventListener("keyup",e=>{if((e.key==="r"||e.key==="R")&&this.dataGrid.selectedNode){const t=this.dataGrid.selectedNode.request();if(!t)return;Ge.canReplayRequest(t)&&(Ge.replayRequest(t),Io(this.dataGrid.selectedNode.element(),e,"replay-xhr"))}}),this.dataGrid.element.addEventListener("focus",this.onDataGridFocus.bind(this),!0),this.dataGrid.element.addEventListener("blur",this.onDataGridBlur.bind(this),!0),this.dataGrid}dataGridMouseMove(e){const t=e,i=this.dataGrid.dataGridNodeFromNode(t.target),o=t.shiftKey;this.setHoveredNode(i,o)}hoveredNode(){return this.hoveredNodeInternal}setHoveredNode(e,t){this.hoveredNodeInternal&&this.hoveredNodeInternal.setHovered(!1,!1),this.hoveredNodeInternal=e,this.hoveredNodeInternal&&this.hoveredNodeInternal.setHovered(!0,!!t)}dataGridMouseDown(e){const t=e;!this.dataGrid.selectedNode&&t.button&&t.consume()}updateSummaryBar(){this.hideRecordingHint();let e=0,t=0,i=0,o=0,a=0,l=-1,c=-1,d=0;for(const p of ae.instance().requests()){const m=ti.get(p);if(!m)continue;d++;const f=p.transferSize;e+=f;const k=p.resourceSize;t+=k,oi.has(m)||(i++,o+=f,a+=k);const u=Ge.forRequest(p);u&&p.url()===u.target().inspectedURL()&&p.resourceType()===Ye.Document&&u.target().parentTarget()?.type()!==Ba.FRAME&&(l=p.fromPrefetchCache()?p.issueTime():p.startTime),p.endTime>c&&(c=p.endTime)}if(!d){this.showRecordingHint();return}this.summaryToolbarInternal.removeToolbarItems();const g=(p,m)=>{const f=new co(p);return f.setTitle(m||p),this.summaryToolbarInternal.appendToolbarItem(f),f.element};if(i!==d?(g(R(T.sSRequests,{PH1:i,PH2:d})),this.summaryToolbarInternal.appendSeparator(),g(R(T.sSTransferred,{PH1:lt(o),PH2:lt(e)}),R(T.sBSBTransferredOverNetwork,{PH1:o,PH2:e})),this.summaryToolbarInternal.appendSeparator(),g(R(T.sSResources,{PH1:lt(a),PH2:lt(t)}),R(T.sBSBResourcesLoadedByThePage,{PH1:a,PH2:t}))):(g(R(T.sRequests,{PH1:d})),this.summaryToolbarInternal.appendSeparator(),g(R(T.sTransferred,{PH1:lt(e)}),R(T.sBTransferredOverNetwork,{PH1:e})),this.summaryToolbarInternal.appendSeparator(),g(R(T.sResources,{PH1:lt(t)}),R(T.sBResourcesLoadedByThePage,{PH1:t}))),l!==-1&&c!==-1){if(this.summaryToolbarInternal.appendSeparator(),g(R(T.finishS,{PH1:Me(c-l)})),this.mainRequestDOMContentLoadedTime!==-1&&this.mainRequestDOMContentLoadedTime>l){this.summaryToolbarInternal.appendSeparator();const p=R(T.domcontentloadedS,{PH1:Me(this.mainRequestDOMContentLoadedTime-l)});g(p).style.color=`var(${O.getDCLEventColor()})`}if(this.mainRequestLoadTime!==-1){this.summaryToolbarInternal.appendSeparator();const p=R(T.loadS,{PH1:Me(this.mainRequestLoadTime-l)});g(p).style.color=`var(${O.getLoadEventColor()})`}}}scheduleRefresh(){this.needsRefresh||(this.needsRefresh=!0,this.isShowing()&&Cc.write("NetworkLogView.render",this.refresh.bind(this)))}addFilmStripFrames(e){this.columnsInternal.addEventDividers(e,"network-frame-divider")}selectFilmStripFrame(e){this.columnsInternal.selectFilmStripFrame(e)}clearFilmStripFrame(){this.columnsInternal.clearFilmStripFrame()}refreshIfNeeded(){this.needsRefresh&&this.refresh()}invalidateAllItems(e){this.staleRequests=new Set(ae.instance().requests().filter(this.isInScope)),e?this.scheduleRefresh():this.refresh()}timeCalculator(){return this.timeCalculatorInternal}calculator(){return this.calculatorInternal}setCalculator(e){!e||this.calculatorInternal===e||(this.calculatorInternal!==e&&(this.calculatorInternal=e,this.columnsInternal.setCalculator(this.calculatorInternal)),this.calculatorInternal.reset(),this.calculatorInternal.startAtZero?this.columnsInternal.hideEventDividers():this.columnsInternal.showEventDividers(),this.invalidateAllItems())}loadEventFired(e){if(!this.recording)return;const t=e.data.loadTime;t&&(this.mainRequestLoadTime=t,this.columnsInternal.addEventDividers([t],"network-load-divider"))}domContentLoadedEventFired(e){if(!this.recording)return;const{data:t}=e;t&&(this.mainRequestDOMContentLoadedTime=t,this.columnsInternal.addEventDividers([t],"network-dcl-divider"))}wasShown(){this.refreshIfNeeded(),this.registerCSSFiles([Hn]),this.columnsInternal.wasShown()}willHide(){this.columnsInternal.willHide()}onResize(){this.rowHeightInternal=this.computeRowHeight()}flatNodesList(){return this.dataGrid.rootNode().flatChildren()}onDataGridFocus(){this.dataGrid.element.matches(":focus-visible")&&this.element.classList.add("grid-focused"),this.updateNodeBackground()}onDataGridBlur(){this.element.classList.remove("grid-focused"),this.updateNodeBackground()}updateNodeBackground(){this.dataGrid.selectedNode&&this.dataGrid.selectedNode.updateBackgroundColor()}updateNodeSelectedClass(e){e?this.element.classList.remove("no-node-selected"):this.element.classList.add("no-node-selected")}stylesChanged(){this.columnsInternal.scheduleRefresh()}removeNodeAndMaybeAncestors(e){let t=e.parent;if(t)for(t.removeChild(e);t&&!t.hasChildren()&&t.dataGrid&&t.dataGrid.rootNode()!==t;){const i=t.parent;i.removeChild(t),t=i}}refresh(){this.needsRefresh=!1,this.removeAllNodeHighlights(),this.timeCalculatorInternal.updateBoundariesForEventTime(this.mainRequestLoadTime),this.durationCalculator.updateBoundariesForEventTime(this.mainRequestLoadTime),this.timeCalculatorInternal.updateBoundariesForEventTime(this.mainRequestDOMContentLoadedTime),this.durationCalculator.updateBoundariesForEventTime(this.mainRequestDOMContentLoadedTime);const e=new Map,t=[],i=new Set;for(;this.staleRequests.size;){const o=this.staleRequests.values().next().value;this.staleRequests.delete(o);let a=ti.get(o);a||(a=this.createNodeForRequest(o)),i.add(a)}for(const o of i){const a=o.request(),l=!this.applyFilter(a);l?(o===this.hoveredNodeInternal&&this.setHoveredNode(null),o.selected=!1):t.push(o),this.timeCalculatorInternal.updateBoundaries(a),this.durationCalculator.updateBoundaries(a);const c=this.parentNodeForInsert(o);oi.has(o)===l&&o.parent===c||(l?oi.add(o):oi.delete(o),o.parent&&(l||o.parent!==c)&&this.removeNodeAndMaybeAncestors(o),!c||l)||(!c.dataGrid&&!e.has(c)&&(e.set(c,this.dataGrid.rootNode()),t.push(c)),e.set(o,c))}for(const o of e.keys())e.get(o).appendChild(o);for(const o of t)o.refresh();this.updateSummaryBar(),e.size&&this.columnsInternal.sortByCurrentColumn(),this.dataGrid.updateInstantly(),this.didRefreshForTest()}didRefreshForTest(){}parentNodeForInsert(e){if(!this.activeGroupLookup)return this.dataGrid.rootNode();const t=this.activeGroupLookup.groupNodeForRequest(e.request());return t||this.dataGrid.rootNode()}reset(){this.dispatchEventToListeners("RequestActivated",{showPanel:!1}),this.setHoveredNode(null),this.columnsInternal.reset(),this.timeFilter=null,this.calculatorInternal.reset(),this.timeCalculatorInternal.setWindow(null),this.linkifierInternal.reset(),this.activeGroupLookup&&this.activeGroupLookup.reset(),this.staleRequests.clear(),this.resetSuggestionBuilder(),this.mainRequestLoadTime=-1,this.mainRequestDOMContentLoadedTime=-1,this.dataGrid.rootNode().removeChildren(),this.updateSummaryBar(),this.dataGrid.setStickToBottom(!0),this.scheduleRefresh()}setTextFilterValue(e){this.textFilterUI.setValue(e),Ji.isEnabled("network-panel-filter-bar-redesign")?(this.networkHideDataURLSetting.set(!1),this.networkShowBlockedCookiesOnlySetting.set(!1),this.networkOnlyBlockedRequestsSetting.set(!1),this.networkOnlyThirdPartySetting.set(!1),this.networkHideChromeExtensions.set(!1)):(this.dataURLFilterUI?.setChecked(!1),this.onlyBlockedResponseCookiesFilterUI?.setChecked(!1),this.onlyBlockedRequestsUI?.setChecked(!1),this.onlyThirdPartyFilterUI?.setChecked(!1),this.hideChromeExtensionsUI?.setChecked(!1)),this.resourceCategoryFilterUI.reset()}createNodeForRequest(e){const t=new G(this,e);ti.set(e,t),oi.add(t);for(let i=e.redirectSource();i;i=i.redirectSource())this.refreshRequest(i);return t}isInScope(e){const t=Ge.forRequest(e);return!t||kt.instance().isInScope(t)}onRequestUpdated(e){const{request:t,preserveLog:i}=e.data;(this.isInScope(t)||i)&&this.refreshRequest(t)}onRequestRemoved(e){const{request:t}=e.data;this.staleRequests.delete(t);const i=ti.get(t);i&&this.removeNodeAndMaybeAncestors(i)}refreshRequest(e){O.subdomains(e.domain).forEach(this.suggestionBuilder.addItem.bind(this.suggestionBuilder,q.Domain)),this.suggestionBuilder.addItem(q.Method,e.requestMethod),this.suggestionBuilder.addItem(q.MimeType,e.mimeType),this.suggestionBuilder.addItem(q.Scheme,String(e.scheme)),this.suggestionBuilder.addItem(q.StatusCode,String(e.statusCode)),this.suggestionBuilder.addItem(q.ResourceType,e.resourceType().name()),this.suggestionBuilder.addItem(q.Url,e.securityOrigin());const t=e.priority();if(t&&this.suggestionBuilder.addItem(q.Priority,ri(t)),e.mixedContentType!=="none"&&this.suggestionBuilder.addItem(q.MixedContent,"all"),e.mixedContentType==="optionally-blockable"&&this.suggestionBuilder.addItem(q.MixedContent,"displayed"),e.mixedContentType==="blockable"){const o=e.wasBlocked()?"blocked":"block-overridden";this.suggestionBuilder.addItem(q.MixedContent,o)}const i=e.responseHeaders;for(const o of i)this.suggestionBuilder.addItem(q.HasResponseHeader,o.name),o.name==="Set-Cookie"&&this.suggestionBuilder.addItem(q.ResponseHeaderValueSetCookie);for(const o of e.responseCookies)this.suggestionBuilder.addItem(q.SetCookieDomain,o.domain()),this.suggestionBuilder.addItem(q.SetCookieName,o.name()),this.suggestionBuilder.addItem(q.SetCookieValue,o.value());for(const o of e.allCookiesIncludingBlockedOnes())this.suggestionBuilder.addItem(q.CookieDomain,o.domain()),this.suggestionBuilder.addItem(q.CookieName,o.name()),this.suggestionBuilder.addItem(q.CookiePath,o.path()),this.suggestionBuilder.addItem(q.CookieValue,o.value());this.staleRequests.add(e),this.scheduleRefresh()}rowHeight(){return this.rowHeightInternal}switchViewMode(e){this.columnsInternal.switchViewMode(e)}handleContextMenuForRequest(e,t){e.appendApplicableItems(t);const i=this.filterBar.hasActiveFilter(),o=e.clipboardSection().appendSubMenuItem(R(T.copy),!1,"copy");if(t){ci.instance().hasAction("drjones.network-panel-context")&&(li.instance().setFlavor(dr,t),e.headerSection().appendAction("drjones.network-panel-context")),o.defaultSection().appendItem(R(T.copyURL),ne.copyText.bind(ne,t.contentURL()),{jslogContext:"copy-url"}),o.footerSection().appendItem(R(i?T.copyAllListedURLs:T.copyAllURLs),this.copyAllURLs.bind(this),{jslogContext:"copy-all-urls"}),t.requestHeadersText()&&o.saveSection().appendItem(R(T.copyRequestHeaders),O.copyRequestHeaders.bind(null,t),{jslogContext:"copy-request-headers"}),t.responseHeadersText&&o.saveSection().appendItem(R(T.copyResponseHeaders),O.copyResponseHeaders.bind(null,t),{jslogContext:"copy-response-headers"}),t.finished&&o.saveSection().appendItem(R(T.copyResponse),O.copyResponse.bind(null,t),{jslogContext:"copy-response"});const a=t.initiator();if(a){const c=a.stack;if(c){const d=ks(c);d!==""&&o.saveSection().appendItem(R(T.copyStacktrace),()=>{ne.copyText(d)},{jslogContext:"copy-stacktrace"})}}const l=t.isBlobRequest();$s()?(o.defaultSection().appendItem(R(T.copyAsCurlCmd),this.copyCurlCommand.bind(this,t,"win"),{disabled:l,jslogContext:"copy-as-curl-cmd"}),o.defaultSection().appendItem(R(T.copyAsCurlBash),this.copyCurlCommand.bind(this,t,"unix"),{disabled:l,jslogContext:"copy-as-curl-bash"})):o.defaultSection().appendItem(R(T.copyAsCurl),this.copyCurlCommand.bind(this,t,"unix"),{disabled:l,jslogContext:"copy-as-curl"}),o.defaultSection().appendItem(R(T.copyAsPowershell),this.copyPowerShellCommand.bind(this,t),{disabled:l,jslogContext:"copy-as-powershell"}),o.defaultSection().appendItem(R(T.copyAsFetch),this.copyFetchCall.bind(this,t,0),{disabled:l,jslogContext:"copy-as-fetch"}),o.defaultSection().appendItem(R(T.copyAsNodejsFetch),this.copyFetchCall.bind(this,t,1),{disabled:l,jslogContext:"copy-as-nodejs-fetch"}),$s()?(o.footerSection().appendItem(R(i?T.copyAllListedAsCurlCmd:T.copyAllAsCurlCmd),this.copyAllCurlCommand.bind(this,"win"),{jslogContext:"copy-all-as-curl-cmd"}),o.footerSection().appendItem(R(i?T.copyAllListedAsCurlBash:T.copyAllAsCurlBash),this.copyAllCurlCommand.bind(this,"unix"),{jslogContext:"copy-all-as-curl-bash"})):o.footerSection().appendItem(R(i?T.copyAllListedAsCurl:T.copyAllAsCurl),this.copyAllCurlCommand.bind(this,"unix"),{jslogContext:"copy-all-as-curl"}),o.footerSection().appendItem(R(i?T.copyAllListedAsPowershell:T.copyAllAsPowershell),this.copyAllPowerShellCommand.bind(this),{jslogContext:"copy-all-as-powershell"}),o.footerSection().appendItem(R(i?T.copyAllListedAsFetch:T.copyAllAsFetch),this.copyAllFetchCall.bind(this,0),{jslogContext:"copy-all-as-fetch"}),o.footerSection().appendItem(R(i?T.copyAllListedAsNodejsFetch:T.copyAllAsNodejsFetch),this.copyAllFetchCall.bind(this,1),{jslogContext:"copy-all-as-nodejs-fetch"})}if(o.footerSection().appendItem(R(i?T.copyAllListedAsHarSanitized:T.copyAllAsHarSanitized),this.copyAllAsHAR.bind(this,{sanitize:!0}),{jslogContext:"copy-all-as-har"}),this.networkShowOptionsToGenerateHarWithSensitiveData.get()&&o.footerSection().appendItem(R(i?T.copyAllListedAsHarWithSensitiveData:T.copyAllAsHarWithSensitiveData),this.copyAllAsHAR.bind(this,{sanitize:!1}),{jslogContext:"copy-all-as-har-with-sensitive-data"}),e.overrideSection().appendItem(R(T.overrideHeaders),this.#e.bind(this,t),{disabled:It.isForbiddenNetworkUrl(t.url()),jslogContext:"override-headers"}),e.editSection().appendItem(R(T.clearBrowserCache),this.clearBrowserCache.bind(this),{jslogContext:"clear-browser-cache"}),e.editSection().appendItem(R(T.clearBrowserCookies),this.clearBrowserCookies.bind(this),{jslogContext:"clear-browser-cookies"}),t){let d=function(f){c.push({enabled:!0,url:f}),l.setBlockedPatterns(c),l.setBlockingEnabled(!0),ze.instance().showView("network.blocked-urls")},g=function(f){c=c.filter(k=>k.url!==f),l.setBlockedPatterns(c),ze.instance().showView("network.blocked-urls")};const l=Oe.instance();let c=l.blockedPatterns();const p=t.parsedURL.urlWithoutScheme();if(p&&!c.find(f=>f.url===p))e.debugSection().appendItem(R(T.blockRequestUrl),d.bind(null,p),{jslogContext:"block-request-url"});else if(p){const f=Mr(p,20);e.debugSection().appendItem(R(T.unblockS,{PH1:f}),g.bind(null,p),{jslogContext:"unblock"})}const m=t.parsedURL.domain();if(m&&!c.find(f=>f.url===m))e.debugSection().appendItem(R(T.blockRequestDomain),d.bind(null,m),{jslogContext:"block-request-domain"});else if(m){const f=Mr(m,20);e.debugSection().appendItem(R(T.unblockS,{PH1:f}),g.bind(null,m),{jslogContext:"unblock"})}Ge.canReplayRequest(t)&&e.debugSection().appendItem(R(T.replayXhr),Ge.replayRequest.bind(null,t),{jslogContext:"replay-xhr"})}}harRequests(){return ae.instance().requests().filter(t=>this.applyFilter(t)).filter(O.getHTTPRequestsFilter).filter(t=>t.finished||t.resourceType()===Ye.WebSocket&&t.responseReceivedTime)}async copyAllAsHAR(e){const t={log:await Oa.build(this.harRequests(),e)};ne.copyText(JSON.stringify(t,null,2))}copyAllURLs(){const e=ae.instance().requests().filter(o=>this.applyFilter(o)),i=this.filterOutBlobRequests(e).map(o=>o.url());ne.copyText(i.join(`
`))}async copyCurlCommand(e,t){const i=await O.generateCurlCommand(e,t);ne.copyText(i)}async copyAllCurlCommand(e){const t=ae.instance().requests().filter(o=>this.applyFilter(o)),i=await this.generateAllCurlCommand(t,e);ne.copyText(i)}async copyFetchCall(e,t){const i=await this.generateFetchCall(e,t);ne.copyText(i)}async copyAllFetchCall(e){const t=ae.instance().requests().filter(o=>this.applyFilter(o)),i=await this.generateAllFetchCall(t,e);ne.copyText(i)}async copyPowerShellCommand(e){const t=await this.generatePowerShellCommand(e);ne.copyText(t)}async copyAllPowerShellCommand(){const e=ae.instance().requests().filter(i=>this.applyFilter(i)),t=await this.generateAllPowerShellCommand(e);ne.copyText(t)}async exportAll(e){const t=kt.instance().scopeTarget();if(!t)return;const i=t.inspectedURL(),o=Gt.fromString(i),a=o?o.host:"network-log",l=new _a;if(!await l.open(Gt.concatenate(a,".har")))return;const c=new Da;this.progressBarContainer.appendChild(c.element),await Ua.write(l,this.harRequests(),e,c),c.done(),l.close()}async#e(e){const t=Ci.responseHeaderMatch(e,{name:"",value:""}),i=It.instance();i.project()?(H.instance().moduleSetting("persistence-network-overrides-enabled").set(!0),await i.getOrCreateHeadersUISourceCodeFromUrl(e.url()),await Li(t)):is.instance().displaySelectOverrideFolderInfobar(async()=>{await Lo.instance().setupNewWorkspace(),await i.getOrCreateHeadersUISourceCodeFromUrl(e.url()),await Li(t)})}clearBrowserCache(){confirm(R(T.areYouSureYouWantToClearBrowser))&&Oe.instance().clearBrowserCache()}clearBrowserCookies(){confirm(R(T.areYouSureYouWantToClearBrowserCookies))&&Oe.instance().clearBrowserCookies()}applyFilter(e){if(this.timeFilter&&!this.timeFilter(e))return!1;const t=e.resourceType().category().title();if(!this.resourceCategoryFilterUI.accept(t))return!1;const[i,o,a,l,c]=Ji.isEnabled("network-panel-filter-bar-redesign")?[this.networkHideDataURLSetting.get(),this.networkShowBlockedCookiesOnlySetting.get(),this.networkOnlyBlockedRequestsSetting.get(),this.networkOnlyThirdPartySetting.get(),this.networkHideChromeExtensions.get()]:[this.dataURLFilterUI?.checked(),this.onlyBlockedResponseCookiesFilterUI?.checked(),this.onlyBlockedRequestsUI?.checked(),this.onlyThirdPartyFilterUI?.checked(),this.hideChromeExtensionsUI?.checked()];if(i&&(e.parsedURL.isDataURL()||e.parsedURL.isBlobURL())||o&&!e.blockedResponseCookies().length||a&&!e.wasBlocked()&&!e.corsErrorStatus()||l&&e.isSameSite()||c&&e.scheme==="chrome-extension")return!1;for(let d=0;d<this.filters.length;++d)if(!this.filters[d](e))return!1;return!0}isValidUrl(e){try{return new URL(e),!0}catch{return!1}}parseFilterQuery(e,t){const i=this.filterParser.parse(e);this.filters=i.map(o=>{const a=o.key,l=o.text||"",c=o.regex;let d;if(a){const g=ni(a+":"+l);d=this.createSpecialFilter(a,l)||O.requestPathFilter.bind(null,new RegExp(g,"i"))}else o.regex?d=O.requestPathFilter.bind(null,c):this.isValidUrl(l)?d=O.requestUrlFilter.bind(null,l):d=O.requestPathFilter.bind(null,new RegExp(ni(l),"i"));return o.negative&&!t||!o.negative&&t?O.negativeFilter.bind(null,d):d})}createSpecialFilter(e,t){switch(e){case q.Domain:return O.createRequestDomainFilter(t);case q.HasResponseHeader:return O.requestResponseHeaderFilter.bind(null,t);case q.ResponseHeaderValueSetCookie:return O.requestResponseHeaderSetCookieFilter.bind(null,t);case q.Is:if(t.toLowerCase()==="running")return O.runningRequestFilter;if(t.toLowerCase()==="from-cache")return O.fromCacheRequestFilter;if(t.toLowerCase()==="service-worker-intercepted")return O.interceptedByServiceWorkerFilter;if(t.toLowerCase()==="service-worker-initiated")return O.initiatedByServiceWorkerFilter;break;case q.LargerThan:return this.createSizeFilter(t.toLowerCase());case q.Method:return O.requestMethodFilter.bind(null,t);case q.MimeType:return O.requestMimeTypeFilter.bind(null,t);case q.MixedContent:return O.requestMixedContentFilter.bind(null,t);case q.Scheme:return O.requestSchemeFilter.bind(null,t);case q.SetCookieDomain:return O.requestSetCookieDomainFilter.bind(null,t);case q.SetCookieName:return O.requestSetCookieNameFilter.bind(null,t);case q.SetCookieValue:return O.requestSetCookieValueFilter.bind(null,t);case q.CookieDomain:return O.requestCookieDomainFilter.bind(null,t);case q.CookieName:return O.requestCookieNameFilter.bind(null,t);case q.CookiePath:return O.requestCookiePathFilter.bind(null,t);case q.CookieValue:return O.requestCookieValueFilter.bind(null,t);case q.Priority:return O.requestPriorityFilter.bind(null,Ir(t));case q.StatusCode:return O.statusCodeFilter.bind(null,t);case q.HasOverrides:return O.hasOverridesFilter.bind(null,t);case q.ResourceType:return O.resourceTypeFilter.bind(null,t);case q.Url:return O.requestUrlFilter.bind(null,t)}return null}createSizeFilter(e){let t=1;e.endsWith("k")?(t=1e3,e=e.substring(0,e.length-1)):e.endsWith("m")&&(t=1e3*1e3,e=e.substring(0,e.length-1));const i=Number(e);return isNaN(i)?null:O.requestSizeLargerThanFilter.bind(null,i*t)}filterRequests(){this.removeAllNodeHighlights(),this.invalidateAllItems()}reveal(e){this.removeAllNodeHighlights();const t=ti.get(e);return!t||!t.dataGrid?null:(t.parent&&t.parent instanceof ls&&(t.parent.reveal(),t.parent.expand()),t.reveal(),t)}revealAndHighlightRequest(e){const t=this.reveal(e);t&&this.highlightNode(t)}revealAndHighlightRequestWithId(e){const t=ae.instance().requestByManagerAndId(e.manager,e.requestId);t&&this.revealAndHighlightRequest(t)}selectRequest(e,t){const i={clearFilter:!0},{clearFilter:o}=t||i;o&&this.setTextFilterValue("");const a=this.reveal(e);a&&a.select()}removeAllNodeHighlights(){this.highlightedNode&&(this.highlightedNode.element().classList.remove("highlighted-row"),this.highlightedNode=null)}highlightNode(e){Va(e.element(),"highlighted-row"),this.highlightedNode=e}filterOutBlobRequests(e){return e.filter(t=>!t.isBlobRequest())}async generateFetchCall(e,t){const i=new Set(["method","path","scheme","version","accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via","user-agent"]),o=new Set(["cookie","authorization"]),a=JSON.stringify(e.url()),l=e.requestHeaders(),c=l.reduce((I,U)=>{const P=U.name;return!i.has(P.toLowerCase())&&!P.includes(":")&&I.append(P,U.value),I},new Headers),d={};for(const I of c)d[I[0]]=I[1];const g=e.includedRequestCookies().length||l.some(({name:I})=>o.has(I.toLowerCase()))?"include":"omit",p=l.find(({name:I})=>I.toLowerCase()==="referer"),m=p?p.value:void 0,f=e.referrerPolicy()||void 0,k=await e.requestFormData(),u={headers:Object.keys(d).length?d:void 0,referrer:m,referrerPolicy:f,body:k,method:e.requestMethod,mode:"cors"};if(t===1){const I=l.find(P=>P.name.toLowerCase()==="cookie"),U={};delete u.mode,I&&(U.cookie=I.value),m&&(delete u.referrer,U.Referer=m),m&&(delete u.referrerPolicy,U["Referrer-Policy"]=f),Object.keys(U).length&&(u.headers={...d,...U})}else u.credentials=g;const C=JSON.stringify(u,null,2);return`fetch(${a}, ${C});`}async generateAllFetchCall(e,t){const i=this.filterOutBlobRequests(e);return(await Promise.all(i.map(a=>this.generateFetchCall(a,t)))).join(` ;
`)}static async generateCurlCommand(e,t){let i=[];const o=new Set(["accept-encoding","host","method","path","scheme","version","authority","protocol"]);function a(f){const k='^"';return k+f.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`]/g,"^$&").replace(/%(?=[a-zA-Z0-9_])/g,"%^").replace(/\r?\n/g,`^

`)+k}function l(f){function k(u){let I=u.charCodeAt(0).toString(16);for(;I.length<4;)I="0"+I;return"\\u"+I}return/[\0-\x1F\x7F-\x9F!]|\'/.test(f)?"$'"+f.replace(/\\/g,"\\\\").replace(/\'/g,"\\'").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\0-\x1F\x7F-\x9F!]/g,k)+"'":"'"+f+"'"}const c=t==="win"?a:l;i.push(c(e.url()).replace(/[[{}\]]/g,"\\$&"));let d="GET";const g=[],p=await e.requestFormData();p&&(g.push("--data-raw "+c(p)),o.add("content-length"),d="POST"),e.requestMethod!==d&&i.push("-X "+c(e.requestMethod));const m=e.requestHeaders();for(let f=0;f<m.length;f++){const k=m[f],u=k.name.replace(/^:/,"");o.has(u.toLowerCase())||(k.value.trim()?i.push("-H "+c(u+": "+k.value)):i.push("-H "+c(u+";")))}return i=i.concat(g),e.securityState()==="insecure"&&i.push("--insecure"),"curl "+i.join(i.length>=3?t==="win"?` ^
  `:` \\
  `:" ")}async generateAllCurlCommand(e,t){const i=this.filterOutBlobRequests(e),o=await Promise.all(i.map(a=>O.generateCurlCommand(a,t)));return t==="win"?o.join(` &\r
`):o.join(` ;
`)}async generatePowerShellCommand(e){const t=[],i=new Set(["host","connection","proxy-connection","content-length","expect","range","content-type","user-agent","cookie"]);function o(f){return'"'+f.replace(/[`\$"]/g,"`$&").replace(/[^\x20-\x7E]/g,k=>"$([char]"+k.charCodeAt(0)+")")+'"'}function a(f){const k=f.requestHeaders(),u=[],C=k.find(({name:I})=>I.toLowerCase()==="user-agent");C&&u.push(`$session.UserAgent = ${o(C.value)}`);for(const I of f.includedRequestCookies()){const U=o(I.cookie.name()),P=o(I.cookie.value()),W=o(I.cookie.domain());u.push(`$session.Cookies.Add((New-Object System.Net.Cookie(${U}, ${P}, "/", ${W})))`)}return u.length?`$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
`+u.join(`
`)+`
`:null}t.push("-Uri "+o(e.url())),e.requestMethod!=="GET"&&t.push("-Method "+o(e.requestMethod));const l=a(e);l&&t.push("-WebSession $session");const c=e.requestHeaders(),d=[];for(const f of c){const k=f.name.replace(/^:/,"");i.has(k.toLowerCase())||d.push(o(k)+"="+o(f.value))}d.length&&t.push(`-Headers @{
`+d.join(`
  `)+`
}`);const g=c.find(({name:f})=>f.toLowerCase()==="content-type");g&&t.push("-ContentType "+o(g.value));const p=await e.requestFormData();if(p){const f=o(p);/[^\x20-\x7E]/.test(p)?t.push("-Body ([System.Text.Encoding]::UTF8.GetBytes("+f+"))"):t.push("-Body "+f)}return(l||"")+"Invoke-WebRequest -UseBasicParsing "+t.join(t.length>=3?" `\n":" ")}async generateAllPowerShellCommand(e){const t=this.filterOutBlobRequests(e);return(await Promise.all(t.map(o=>this.generatePowerShellCommand(o)))).join(`;\r
`)}static getDCLEventColor(){return"--sys-color-token-attribute-value"}static getLoadEventColor(){return"--sys-color-token-property-special"}}function ks(w){let e="";for(const t of w.callFrames){const i=Wa(t.functionName);e+=`${i} @ ${t.url}:${t.lineNumber+1}
`}return w.parent&&(e+=ks(w.parent)),e}const oi=new WeakSet,ti=new WeakMap;function xc(w){return oi.has(w)}const On={http:!0,https:!0,ws:!0,wss:!0},oo=Object.values(q),vt={yes:"yes",no:"no",content:"content",headers:"headers"};class Dn extends xo{filterElement;dropDownButton;networkHideDataURLSetting;networkHideChromeExtensionsSetting;networkShowBlockedCookiesOnlySetting;networkOnlyBlockedRequestsSetting;networkOnlyThirdPartySetting;contextMenu;activeFiltersCount;activeFiltersCountAdorner;hasChanged=!1;constructor(){super(),this.networkHideDataURLSetting=H.instance().createSetting("network-hide-data-url",!1),this.networkHideChromeExtensionsSetting=H.instance().createSetting("network-hide-chrome-extensions",!1),this.networkShowBlockedCookiesOnlySetting=H.instance().createSetting("network-show-blocked-cookies-only-setting",!1),this.networkOnlyBlockedRequestsSetting=H.instance().createSetting("network-only-blocked-requests",!1),this.networkOnlyThirdPartySetting=H.instance().createSetting("network-only-third-party-setting",!1),this.filterElement=document.createElement("div"),this.filterElement.setAttribute("aria-label","Show only/hide requests dropdown"),this.filterElement.setAttribute("jslog",`${fo("more-filters").track({click:!0})}`),this.activeFiltersCountAdorner=new $a,this.activeFiltersCount=document.createElement("span"),this.activeFiltersCountAdorner.data={name:"countWrapper",content:this.activeFiltersCount},this.activeFiltersCountAdorner.classList.add("active-filters-count"),this.updateActiveFiltersCount(),this.dropDownButton=new Ga(R(T.showOnlyHideRequests)),this.dropDownButton.setText(R(T.moreFilters)),this.dropDownButton.setAdorner(this.activeFiltersCountAdorner),this.filterElement.appendChild(this.dropDownButton.element),this.dropDownButton.element.classList.add("dropdown-filterbar"),this.dropDownButton.addEventListener("Click",this.showMoreFiltersContextMenu.bind(this)),ja(this.dropDownButton.element),this.updateTooltip()}#e(){this.hasChanged=!0,this.dispatchEventToListeners("FilterChanged")}showMoreFiltersContextMenu(e){const t=e.data;this.hasChanged=!1,this.networkHideDataURLSetting.addChangeListener(this.#e.bind(this)),this.networkHideChromeExtensionsSetting.addChangeListener(this.#e.bind(this)),this.networkShowBlockedCookiesOnlySetting.addChangeListener(this.#e.bind(this)),this.networkOnlyBlockedRequestsSetting.addChangeListener(this.#e.bind(this)),this.networkOnlyThirdPartySetting.addChangeListener(this.#e.bind(this)),this.contextMenu=new Qe(t,{useSoftMenu:!0,keepOpen:!0,x:this.dropDownButton.element.getBoundingClientRect().left,y:this.dropDownButton.element.getBoundingClientRect().top+this.dropDownButton.element.offsetHeight}),this.contextMenu.defaultSection().appendCheckboxItem(R(T.hideDataUrls),()=>this.networkHideDataURLSetting.set(!this.networkHideDataURLSetting.get()),{checked:this.networkHideDataURLSetting.get(),tooltip:R(T.hidesDataAndBlobUrls),jslogContext:"hide-data-urls"}),this.contextMenu.defaultSection().appendCheckboxItem(R(T.chromeExtensions),()=>this.networkHideChromeExtensionsSetting.set(!this.networkHideChromeExtensionsSetting.get()),{checked:this.networkHideChromeExtensionsSetting.get(),tooltip:R(T.hideChromeExtension),jslogContext:"hide-extension-urls"}),this.contextMenu.defaultSection().appendSeparator(),this.contextMenu.defaultSection().appendCheckboxItem(R(T.hasBlockedCookies),()=>this.networkShowBlockedCookiesOnlySetting.set(!this.networkShowBlockedCookiesOnlySetting.get()),{checked:this.networkShowBlockedCookiesOnlySetting.get(),tooltip:R(T.onlyShowRequestsWithBlockedCookies),jslogContext:"only-blocked-response-cookies"}),this.contextMenu.defaultSection().appendCheckboxItem(R(T.blockedRequests),()=>this.networkOnlyBlockedRequestsSetting.set(!this.networkOnlyBlockedRequestsSetting.get()),{checked:this.networkOnlyBlockedRequestsSetting.get(),tooltip:R(T.onlyShowBlockedRequests),jslogContext:"only-blocked-requests"}),this.contextMenu.defaultSection().appendCheckboxItem(R(T.thirdParty),()=>this.networkOnlyThirdPartySetting.set(!this.networkOnlyThirdPartySetting.get()),{checked:this.networkOnlyThirdPartySetting.get(),tooltip:R(T.onlyShowThirdPartyRequests),jslogContext:"only-3rd-party-requests"}),this.contextMenu.show()}selectedFilters(){return[...this.networkHideDataURLSetting.get()?[R(T.hideDataUrls)]:[],...this.networkHideChromeExtensionsSetting.get()?[R(T.chromeExtensions)]:[],...this.networkShowBlockedCookiesOnlySetting.get()?[R(T.hasBlockedCookies)]:[],...this.networkOnlyBlockedRequestsSetting.get()?[R(T.blockedRequests)]:[],...this.networkOnlyThirdPartySetting.get()?[R(T.thirdParty)]:[]]}updateActiveFiltersCount(){const e=this.selectedFilters().length;this.activeFiltersCount.textContent=e.toString(),e?this.activeFiltersCountAdorner.classList.remove("hidden"):this.activeFiltersCountAdorner.classList.add("hidden")}updateTooltip(){this.selectedFilters().length?this.dropDownButton.setTitle(this.selectedFilters().join(", ")):this.dropDownButton.setTitle(T.showOnlyHideRequests)}discard(){this.contextMenu&&this.contextMenu.discard()}isActive(){return this.selectedFilters().length!==0}element(){return this.filterElement}}const Tc=Object.freeze(Object.defineProperty({__proto__:null,HTTPSchemas:On,MoreFiltersDropDownUI:Dn,NetworkLogView:O,computeStackTraceText:ks,isRequestFilteredOut:xc,overrideFilter:vt},Symbol.toStringTag,{value:"Module"})),Un={url:"URL"},Rc=Z("panels/network/NetworkSearchScope.ts",Un),Ic=Q.bind(void 0,Rc);class fr{#e;constructor(e){this.#e=e}performIndexing(e){queueMicrotask(()=>{e.done()})}async performSearch(e,t,i,o){const a=[],l=this.#e.requests().filter(g=>e.filePathMatchesFileQuery(g.url()));t.setTotalWork(l.length);for(const g of l){const p=this.searchRequest(e,g,t);a.push(p)}const d=(await Promise.all(a)).filter(g=>g!==null);if(t.isCanceled()){o(!1);return}for(const g of d.sort((p,m)=>p.label().localeCompare(m.label())))g.matchesCount()>0&&i(g);t.done(),o(!0)}async searchRequest(e,t,i){const o=await fr.#t(e,t);if(i.isCanceled())return null;const a=[];c(t.url())&&a.push(Ci.urlMatch(t));for(const d of t.requestHeaders())l(d)&&a.push(Ci.requestHeaderMatch(t,d));for(const d of t.responseHeaders)l(d)&&a.push(Ci.responseHeaderMatch(t,d));for(const d of o)a.push(Ci.bodyMatch(t,d));return i.incrementWorked(),new Vn(t,a);function l(d){return c(`${d.name}: ${d.value}`)}function c(d){const g=e.ignoreCase()?"i":"",p=e.queries().map(f=>new RegExp(ni(f),g));let m=0;for(const f of p){const k=d.substr(m).match(f);if(!k||k.index===void 0)return!1;m+=k.index+k[0].length}return!0}}static async#t(e,t){if(!t.contentType().isTextType())return[];let i=[];for(const o of e.queries()){const a=await t.searchInContent(o,!e.ignoreCase(),e.isRegex());if(a.length===0)return[];i=Ka(i,a,Ya.comparator)}return i}stopSearch(){}}class Vn{request;locations;constructor(e,t){this.request=e,this.locations=t}matchesCount(){return this.locations.length}label(){return this.request.displayName}description(){const e=this.request.parsedURL;return e?e.urlWithoutScheme():this.request.url()}matchLineContent(e){const t=this.locations[e];if(t.isUrlMatch)return this.request.url();const i=t?.header?.header;return i?i.value:t.searchMatch.lineContent}matchRevealable(e){return this.locations[e]}matchLabel(e){const t=this.locations[e];if(t.isUrlMatch)return Ic(Un.url);const i=t?.header?.header;return i?`${i.name}:`:(t.searchMatch.lineNumber+1).toString()}matchColumn(e){return this.locations[e].searchMatch?.columnNumber}matchLength(e){return this.locations[e].searchMatch?.matchLength}}const Ec=Object.freeze(Object.defineProperty({__proto__:null,NetworkSearchResult:Vn,NetworkSearchScope:fr},Symbol.toStringTag,{value:"Module"})),Wn=new CSSStyleSheet;Wn.replaceSync(`/*
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

:root {
  --network-overview-total: var(--sys-color-surface-variant);
  --network-overview-blocking: var(--sys-color-neutral-bright);
  --network-overview-connecting: var(--ref-palette-yellow60);
  --network-overview-service-worker: var(--sys-color-orange-bright);
  --network-overview-service-worker-respond-with: var(--sys-color-cyan-bright);
  --network-overview-push: var(--ref-palette-blue60);
  --override-network-overview-proxy: var(--ref-palette-neutral60);
  --network-overview-dns: var(--sys-color-cyan);
  --network-overview-ssl: var(--ref-palette-purple70);
  --override-network-overview-sending: var(--ref-palette-cyan60);
  --network-overview-waiting: var(--ref-palette-green70);
  --network-overview-receiving: var(--ref-palette-blue60);
  --network-overview-queueing: var(--ref-palette-neutral100);
  --network-grid-navigation-color: var(--ref-palette-blue90);
  --network-grid-initiator-path-color: var(--ref-palette-green90);
  --network-grid-initiated-path-color: var(--ref-palette-error80);
  --network-grid-focus-selected-color-has-error: var(--sys-color-surface-error);
  --network-grid-focus-selected-color-has-warning: var(--sys-color-surface-yellow);
  --network-grid-from-frame-color: var(--ref-palette-cyan95);
  --network-grid-is-product-color: var(--ref-palette-yellow95);
  --network-frame-divider-color: var(--ref-palette-yellow60);
}

.theme-with-dark-background {
  --network-grid-initiator-path-color: var(--ref-palette-green40);
  --network-grid-initiated-path-color: var(--ref-palette-error20);
  --network-grid-from-frame-color: var(--ref-palette-neutral50);
  --network-grid-is-product-color: var(--ref-palette-neutral70);
}

.network-details-view {
  background: var(--app-color-toolbar-background);
}

.network-details-view-tall-header {
  border-top: 4px solid var(--app-color-toolbar-background);
}

.network-item-view {
  display: flex;
  background: var(--sys-color-cdt-base-container);
}

.network-item-preview-toolbar {
  border-top: 1px solid var(--sys-color-divider);
  background-color: var(--sys-color-surface1);
}

.resource-timing-view {
  display: block;
  margin: 6px;
  color: var(--sys-color-on-surface);
  overflow: auto;
  background-color: var(--sys-color-cdt-base-container);
}

.resource-timing-table {
  width: 100% !important; /* stylelint-disable-line declaration-no-important */
}

#network-overview-panel {
  flex: none;
  position: relative;
}

#network-overview-container {
  overflow: hidden;
  flex: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid var(--sys-color-divider);
}

#network-overview-container canvas {
  width: 100%;
  height: 100%;
}

.resources-dividers-label-bar {
  background-color: var(--sys-color-cdt-base-container);
}

#network-overview-grid .resources-dividers-label-bar {
  pointer-events: auto;
}

.network .network-overview {
  flex: 0 0 60px;
}

.network-overview .resources-dividers-label-bar .resources-divider {
  background-color: transparent;
}

.network-overview .resources-dividers {
  z-index: 250;
}

.request-view.html iframe {
  width: 100%;
  height: 100%;
  position: absolute;
}

.network-film-strip {
  border-bottom: solid 1px var(--sys-color-divider);
  flex: none !important; /* stylelint-disable-line declaration-no-important */
}

.network-film-strip-placeholder {
  flex-shrink: 0;
}

.network-tabbed-pane {
  background-color: var(--sys-color-cdt-base-container);
}

.network-settings-pane {
  flex: none;
  background-color: var(--sys-color-cdt-base-container);
}

.network-settings-pane .toolbar {
  flex: 1 1;
}

.network-toolbar-container {
  display: flex;
  flex: none;
}

.network-toolbar-container > :first-child {
  flex: 1 1 auto;
}

.panel.network .toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
}

@media (forced-colors: active) {
  .panel.network .toolbar {
    background-color: canvas;
  }
}

devtools-request-headers {
  min-width: 360px;
}

/*# sourceURL=networkPanel.css */
`);const J={close:"Close",search:"Search",doNotClearLogOnPageReload:"Do not clear log on page reload / navigation",preserveLog:"Preserve log",disableCacheWhileDevtoolsIsOpen:"Disable cache while DevTools is open",disableCache:"Disable cache",networkSettings:"Network settings",showMoreInformationInRequestRows:"Show more information in request rows",useLargeRequestRows:"Big request rows",showOverviewOfNetworkRequests:"Show overview of network requests",showOverview:"Overview",groupRequestsByTopLevelRequest:"Group requests by top level request frame",groupByFrame:"Group by frame",captureScreenshotsWhenLoadingA:"Capture screenshots when loading a page",captureScreenshots:"Screenshots",importHarFile:"Import `HAR` file...",exportHarSanitized:"Export `HAR` (sanitized)...",exportHarWithSensitiveData:"Export `HAR` (with sensitive data)...",throttling:"Throttling",hitSToReloadAndCaptureFilmstrip:"Hit {PH1} to reload and capture filmstrip.",revealInNetworkPanel:"Reveal in Network panel",recordingFrames:"Recording frames...",fetchingFrames:"Fetching frames...",moreNetworkConditions:"More network conditions…"},Ac=Z("panels/network/NetworkPanel.ts",J),ie=Q.bind(void 0,Ac);let Pr;class De extends Xa{networkLogShowOverviewSetting;networkLogLargeRowsSetting;networkRecordFilmStripSetting;toggleRecordAction;pendingStopTimer;networkItemView;filmStripView;filmStripRecorder;currentRequest;panelToolbar;rightToolbar;filterBar;settingsPane;showSettingsPaneSetting;filmStripPlaceholderElement;overviewPane;networkOverview;overviewPlaceholderElement;calculator;splitWidget;sidebarLocation;progressBarContainer;networkLogView;fileSelectorElement;detailsWidget;closeButtonElement;preserveLogSetting;recordLogSetting;throttlingSelect;displayScreenshotDelay;constructor(e){super("network"),this.displayScreenshotDelay=e,this.networkLogShowOverviewSetting=H.instance().createSetting("network-log-show-overview",!0),this.networkLogLargeRowsSetting=H.instance().createSetting("network-log-large-rows",!1),this.networkRecordFilmStripSetting=H.instance().createSetting("network-record-film-strip-setting",!1),this.toggleRecordAction=ci.instance().getAction("network.toggle-recording"),this.networkItemView=null,this.filmStripView=null,this.filmStripRecorder=null,this.currentRequest=null;const t=new me,i=t.contentElement.createChild("div","network-toolbar-container");this.panelToolbar=new Ne("",i),this.panelToolbar.makeWrappable(!0),this.panelToolbar.element.setAttribute("jslog",`${Jr("network-main")}`),this.rightToolbar=new Ne("",i),this.filterBar=new Ja("network-panel",!0),this.filterBar.show(t.contentElement),this.filterBar.addEventListener("Changed",this.handleFilterChanged.bind(this)),this.settingsPane=new Za,this.settingsPane.element.classList.add("network-settings-pane"),this.settingsPane.show(t.contentElement),this.showSettingsPaneSetting=H.instance().createSetting("network-show-settings-toolbar",!1),this.showSettingsPaneSetting.addChangeListener(this.updateSettingsPaneVisibility.bind(this)),this.updateSettingsPaneVisibility(),this.filmStripPlaceholderElement=t.contentElement.createChild("div","network-film-strip-placeholder"),this.overviewPane=new xl("network"),this.overviewPane.addEventListener("OverviewPaneWindowChanged",this.onWindowChanged.bind(this)),this.overviewPane.element.id="network-overview-panel",this.networkOverview=new Nn,this.overviewPane.setOverviewControls([this.networkOverview]),this.overviewPlaceholderElement=t.contentElement.createChild("div"),this.calculator=new ys,this.splitWidget=new or(!0,!1,"network-panel-split-view-state"),this.splitWidget.hideMain(),this.splitWidget.show(t.contentElement),t.setDefaultFocusedChild(this.filterBar);const o=225,a=new or(!0,!1,"network-panel-sidebar-state",o);a.hideSidebar(),a.enableShowModeSaving(),a.show(this.element),this.sidebarLocation=ze.instance().createTabbedLocation(async()=>{ze.instance().showView("network"),a.showBoth()},"network-sidebar",!0);const l=this.sidebarLocation.tabbedPane();l.setMinimumSize(100,25),l.element.classList.add("network-tabbed-pane"),l.element.addEventListener("keydown",d=>{d.key===Qa&&(a.hideSidebar(),d.consume(),Io(d.currentTarget,d,"hide-sidebar"))});const c=new Wt(ie(J.close),"cross");c.addEventListener("Click",()=>a.hideSidebar()),c.element.setAttribute("jslog",`${el().track({click:!0})}`),l.rightToolbar().appendToolbarItem(c),a.setSidebarWidget(l),a.setMainWidget(t),a.setDefaultFocusedChild(t),this.setDefaultFocusedChild(a),this.progressBarContainer=document.createElement("div"),this.networkLogView=new O(this.filterBar,this.progressBarContainer,this.networkLogLargeRowsSetting),this.splitWidget.setSidebarWidget(this.networkLogView),this.fileSelectorElement=tl(this.networkLogView.onLoadFromFile.bind(this.networkLogView)),t.element.appendChild(this.fileSelectorElement),this.detailsWidget=new me,this.detailsWidget.element.classList.add("network-details-view"),this.splitWidget.setMainWidget(this.detailsWidget),this.closeButtonElement=document.createElement("div",{is:"dt-close-button"}),this.closeButtonElement.addEventListener("click",async()=>{await ci.instance().getAction("network.hide-request-details").execute()},!1),this.closeButtonElement.style.margin="0 5px",this.networkLogShowOverviewSetting.addChangeListener(this.toggleShowOverview,this),this.networkLogLargeRowsSetting.addChangeListener(this.toggleLargerRequests,this),this.networkRecordFilmStripSetting.addChangeListener(this.toggleRecordFilmStrip,this),this.preserveLogSetting=H.instance().moduleSetting("network-log.preserve-log"),this.recordLogSetting=H.instance().moduleSetting("network-log.record-log"),this.recordLogSetting.addChangeListener(({data:d})=>this.toggleRecord(d)),this.throttlingSelect=this.createThrottlingConditionsSelect(),this.setupToolbarButtons(a),this.toggleRecord(this.recordLogSetting.get()),this.toggleShowOverview(),this.toggleLargerRequests(),this.toggleRecordFilmStrip(),this.updateUI(),kt.instance().addModelListener(Ft,At.WillReloadPage,this.willReloadPage,this,{scoped:!0}),kt.instance().addModelListener(Ft,At.Load,this.load,this,{scoped:!0}),this.networkLogView.addEventListener("RequestSelected",this.onRequestSelected,this),this.networkLogView.addEventListener("RequestActivated",this.onRequestActivated,this),ae.instance().addEventListener(Et.RequestAdded,this.onUpdateRequest,this),ae.instance().addEventListener(Et.RequestUpdated,this.onUpdateRequest,this),ae.instance().addEventListener(Et.Reset,this.onNetworkLogReset,this)}static instance(e){return(!Pr||e?.forceNew)&&(Pr=new De(e?.displayScreenshotDelay??1e3)),Pr}static revealAndFilter(e){const t=De.instance();let i="";for(const o of e)o.filterType?i+=`${o.filterType}:${o.filterValue} `:i+=`${o.filterValue} `;return t.networkLogView.setTextFilterValue(i),ze.instance().showView("network")}static async selectAndShowRequest(e,t,i){await De.instance().selectAndActivateRequest(e,t,i)}throttlingSelectForTest(){return this.throttlingSelect}onWindowChanged(e){const t=Math.max(this.calculator.minimumBoundary(),e.data.startTime/1e3),i=Math.min(this.calculator.maximumBoundary(),e.data.endTime/1e3);t===this.calculator.minimumBoundary()&&i===this.calculator.maximumBoundary()?this.networkLogView.setWindow(0,0):this.networkLogView.setWindow(t,i)}async searchToggleClick(){await ci.instance().getAction("network.search").execute()}setupToolbarButtons(e){const t=new il(ie(J.search),"search",void 0,"search");function i(){const k=e.showMode()!=="OnlyMain";t.setToggled(k),k||t.element.focus()}this.panelToolbar.appendToolbarItem(Ne.createActionButton(this.toggleRecordAction)),this.panelToolbar.appendToolbarItem(Ne.createActionButtonForId("network.clear")),this.panelToolbar.appendSeparator(),this.panelToolbar.appendToolbarItem(this.filterBar.filterButton()),i(),e.addEventListener("ShowModeChanged",i),t.addEventListener("Click",()=>{this.searchToggleClick()}),this.panelToolbar.appendToolbarItem(t),this.panelToolbar.appendSeparator(),this.panelToolbar.appendToolbarItem(new Qt(this.preserveLogSetting,ie(J.doNotClearLogOnPageReload),ie(J.preserveLog))),this.panelToolbar.appendSeparator();const o=new Qt(H.instance().moduleSetting("cache-disabled"),ie(J.disableCacheWhileDevtoolsIsOpen),ie(J.disableCache));this.panelToolbar.appendToolbarItem(o),this.panelToolbar.appendToolbarItem(this.throttlingSelect);const a=new Wt(ie(J.moreNetworkConditions),"network-settings",void 0,"network-conditions");a.addEventListener("Click",()=>{ze.instance().showView("network.config")},this),this.panelToolbar.appendToolbarItem(a),this.rightToolbar.appendToolbarItem(new Gs(this.progressBarContainer)),this.rightToolbar.appendSeparator(),this.rightToolbar.appendToolbarItem(new rl(this.showSettingsPaneSetting,"gear",ie(J.networkSettings),"gear-filled","network-settings"));const l=new Ne("",this.settingsPane.element);l.makeVertical(),l.appendToolbarItem(new Qt(this.networkLogLargeRowsSetting,ie(J.showMoreInformationInRequestRows),ie(J.useLargeRequestRows))),l.appendToolbarItem(new Qt(this.networkLogShowOverviewSetting,ie(J.showOverviewOfNetworkRequests),ie(J.showOverview)));const c=new Ne("",this.settingsPane.element);c.makeVertical(),c.appendToolbarItem(new Qt(H.instance().moduleSetting("network.group-by-frame"),ie(J.groupRequestsByTopLevelRequest),ie(J.groupByFrame))),c.appendToolbarItem(new Qt(this.networkRecordFilmStripSetting,ie(J.captureScreenshotsWhenLoadingA),ie(J.captureScreenshots))),this.panelToolbar.appendSeparator();const d=new Wt(ie(J.importHarFile),"import",void 0,"import-har");d.addEventListener("Click",()=>this.fileSelectorElement.click(),this),this.panelToolbar.appendToolbarItem(d);const g=new Wt(ie(J.exportHarSanitized),"download",void 0,"export-har");g.addEventListener("Click",this.networkLogView.exportAll.bind(this.networkLogView,{sanitize:!0}),this),this.panelToolbar.appendToolbarItem(g);const p=H.instance().createSetting("network.show-options-to-generate-har-with-sensitive-data",!1);let m=null;const f=()=>{g.setLongClickable(p.get()),m!==null&&(m.dispose(),m=null),p.get()&&(m=new hl(g.element,k=>{const u=new Qe(k);u.defaultSection().appendItem(ie(J.exportHarSanitized),this.networkLogView.exportAll.bind(this.networkLogView,{sanitize:!0}),{jslogContext:"export-har"}),u.defaultSection().appendItem(ie(J.exportHarWithSensitiveData),this.networkLogView.exportAll.bind(this.networkLogView,{sanitize:!1}),{jslogContext:"export-har-with-sensitive-data"}),u.show()}))};p.addChangeListener(f),f()}updateSettingsPaneVisibility(){this.settingsPane.element.classList.toggle("hidden",!this.showSettingsPaneSetting.get())}createThrottlingConditionsSelect(){const e=new Xr(null,ie(J.throttling));return e.setMaxWidth(160),Ao().decorateSelectWithNetworkThrottling(e.selectElement()),e}toggleRecord(e){this.toggleRecordAction.setToggled(e),this.recordLogSetting.get()!==e&&this.recordLogSetting.set(e),this.networkLogView.setRecording(e),!e&&this.filmStripRecorder&&this.filmStripRecorder.stopRecording(this.filmStripAvailable.bind(this))}filmStripAvailable(e){this.filmStripView&&this.filmStripView.setModel(e);const t=e.frames.map(i=>sl(i.screenshotEvent.ts));this.networkLogView.addFilmStripFrames(t)}onNetworkLogReset(e){const{clearIfPreserved:t}=e.data;(!this.preserveLogSetting.get()||t)&&(this.calculator.reset(),this.overviewPane.reset()),this.filmStripView&&this.resetFilmStripView()}willReloadPage(){this.pendingStopTimer&&(clearTimeout(this.pendingStopTimer),delete this.pendingStopTimer),this.isShowing()&&this.filmStripRecorder&&this.filmStripRecorder.startRecording()}load(){this.filmStripRecorder&&this.filmStripRecorder.isRecording()&&(this.pendingStopTimer&&window.clearTimeout(this.pendingStopTimer),this.pendingStopTimer=window.setTimeout(this.stopFilmStripRecording.bind(this),this.displayScreenshotDelay))}stopFilmStripRecording(){this.filmStripRecorder&&this.filmStripRecorder.stopRecording(this.filmStripAvailable.bind(this)),delete this.pendingStopTimer}toggleLargerRequests(){this.updateUI()}toggleShowOverview(){this.networkLogShowOverviewSetting.get()?this.overviewPane.show(this.overviewPlaceholderElement):this.overviewPane.detach(),this.doResize()}toggleRecordFilmStrip(){const e=this.networkRecordFilmStripSetting.get();e&&!this.filmStripRecorder&&(this.filmStripView=new wl,this.filmStripView.element.classList.add("network-film-strip"),this.filmStripView.element.setAttribute("jslog",`${di("film-strip")}`),this.filmStripRecorder=new $n(this.networkLogView.timeCalculator(),this.filmStripView),this.filmStripView.show(this.filmStripPlaceholderElement),this.filmStripView.addEventListener("FrameSelected",this.onFilmFrameSelected,this),this.filmStripView.addEventListener("FrameEnter",this.onFilmFrameEnter,this),this.filmStripView.addEventListener("FrameExit",this.onFilmFrameExit,this),this.resetFilmStripView()),!e&&this.filmStripRecorder&&(this.filmStripView&&this.filmStripView.detach(),this.filmStripView=null,this.filmStripRecorder=null)}resetFilmStripView(){const e=Vr.instance().shortcutsForAction("inspector-main.reload")[0];this.filmStripView&&(this.filmStripView.reset(),e&&this.filmStripView.setStatusText(ie(J.hitSToReloadAndCaptureFilmstrip,{PH1:e.title()})))}elementsToRestoreScrollPositionsFor(){return this.networkLogView.elementsToRestoreScrollPositionsFor()}wasShown(){li.instance().setFlavor(De,this),this.registerCSSFiles([Wn]),_e.panelLoaded("network","DevTools.Launch.Network")}willHide(){li.instance().setFlavor(De,null)}revealAndHighlightRequest(e){this.hideRequestPanel(),e&&this.networkLogView.revealAndHighlightRequest(e)}revealAndHighlightRequestWithId(e){this.hideRequestPanel(),e&&this.networkLogView.revealAndHighlightRequestWithId(e)}async selectAndActivateRequest(e,t,i){return await ze.instance().showView("network"),this.networkLogView.selectRequest(e,i),this.showRequestPanel(t),this.networkLogView.revealAndHighlightRequest(e),this.networkItemView}handleFilterChanged(){this.hideRequestPanel()}onRowSizeChanged(){this.updateUI()}onRequestSelected(e){const t=e.data;this.currentRequest=t,this.networkOverview.setHighlightedRequest(t),this.updateNetworkItemView(),li.instance().setFlavor(dr,t)}onRequestActivated(e){const{showPanel:t,tab:i,takeFocus:o}=e.data;t?this.showRequestPanel(i,o):this.hideRequestPanel()}showRequestPanel(e,t){if(!(this.splitWidget.showMode()==="Both"&&!e&&!t)){if(this.clearNetworkItemView(),this.currentRequest){const i=this.createNetworkItemView(e);i&&t&&i.focus()}this.updateUI()}}hideRequestPanel(){this.clearNetworkItemView(),this.splitWidget.hideMain(),this.updateUI()}updateNetworkItemView(){this.splitWidget.showMode()==="Both"&&(this.clearNetworkItemView(),this.createNetworkItemView(),this.updateUI())}clearNetworkItemView(){this.networkItemView&&(this.networkItemView.detach(),this.networkItemView=null)}createNetworkItemView(e){if(this.currentRequest)return this.networkItemView=new An(this.currentRequest,this.networkLogView.timeCalculator(),e),this.networkItemView.leftToolbar().appendToolbarItem(new Gs(this.closeButtonElement)),this.networkItemView.show(this.detailsWidget.element),this.splitWidget.showBoth(),this.networkItemView}updateUI(){this.detailsWidget&&this.detailsWidget.element.classList.toggle("network-details-view-tall-header",this.networkLogLargeRowsSetting.get()),this.networkLogView&&this.networkLogView.switchViewMode(!this.splitWidget.isResizable())}appendApplicableItems(e,t,i){const o=l=>{t.revealSection().appendItem(ie(J.revealInNetworkPanel),()=>ze.instance().showView("network").then(this.networkLogView.resetFilter.bind(this.networkLogView)).then(this.revealAndHighlightRequest.bind(this,l)),{jslogContext:"reveal-in-network"})},a=l=>{t.revealSection().appendItem(ie(J.revealInNetworkPanel),()=>ze.instance().showView("network").then(this.networkLogView.resetFilter.bind(this.networkLogView)).then(this.selectAndActivateRequest.bind(this,l.request,"headers-component",void 0)),{jslogContext:"timeline.reveal-in-network"})};if(!e.target.isSelfOrDescendant(this.element)){if(i instanceof ol){i.request&&o(i.request);return}if(i instanceof nl){const l=al(i.url());l&&l.request&&o(l.request);return}if(i instanceof ll){a(i);return}this.networkItemView&&this.networkItemView.isShowing()&&this.networkItemView.request()===i||o(i)}}onFilmFrameSelected(e){const t=e.data;this.overviewPane.setWindowTimes(0,t)}onFilmFrameEnter(e){const t=e.data;this.networkOverview.selectFilmStripFrame(t),this.networkLogView.selectFilmStripFrame(t/1e3)}onFilmFrameExit(){this.networkOverview.clearFilmStripFrame(),this.networkLogView.clearFilmStripFrame()}onUpdateRequest(e){const{request:t}=e.data;this.calculator.updateBoundaries(t),this.overviewPane.setBounds(We(this.calculator.minimumBoundary()*1e3),We(this.calculator.maximumBoundary()*1e3)),this.networkOverview.updateRequest(t)}resolveLocation(e){return e==="network-sidebar"?this.sidebarLocation:null}}class Lc{reveal(e){const t=De.instance();return ze.instance().showView("network").then(t.revealAndHighlightRequest.bind(t,e))}}class qc{reveal(e){const t=De.instance();return ze.instance().showView("network").then(t.revealAndHighlightRequestWithId.bind(t,e))}}class Fc{reveal(e){return"filters"in e?De.revealAndFilter(e.filters):De.revealAndFilter(e.filter?[{filterType:null,filterValue:e.filter}]:[])}}class $n{tracingManager;resourceTreeModel;timeCalculator;filmStripView;callback;#e;#t=[];constructor(e,t){this.#e=Tl.createWithSubsetOfHandlers({Screenshots:Rl}),this.tracingManager=null,this.resourceTreeModel=null,this.timeCalculator=e,this.filmStripView=t,this.callback=null}traceEventsCollected(e){this.#t.push(...e)}async tracingComplete(){if(!this.tracingManager)return;this.tracingManager=null,await this.#e.parse(this.#t);const e=this.#e.parsedTrace(this.#e.size()-1);if(!e)return;const t=dl(this.timeCalculator.minimumBoundary()),i=Il(e,ul(t));this.callback&&this.callback(i),this.callback=null,this.#e.resetProcessor(),this.resourceTreeModel&&this.resourceTreeModel.resumeReload(),this.resourceTreeModel=null}tracingBufferUsage(){}eventsRetrievalProgress(e){}startRecording(){this.#t=[],this.filmStripView.reset(),this.filmStripView.setStatusText(ie(J.recordingFrames));const e=kt.instance().scopeTarget()?.model(cl);this.tracingManager||!e||(this.tracingManager=e,this.resourceTreeModel=this.tracingManager.target().model(Ft),this.tracingManager.start(this,"-*,disabled-by-default-devtools.screenshot",""),_e.actionTaken(ct.FilmStripStartedRecording))}isRecording(){return!!this.tracingManager}stopRecording(e){this.tracingManager&&(this.tracingManager.stop(),this.resourceTreeModel&&this.resourceTreeModel.suspendReload(),this.callback=e,this.filmStripView.setStatusText(ie(J.fetchingFrames)))}}class Hc{handleAction(e,t){const i=e.flavor(De);if(i===null)return!1;switch(t){case"network.toggle-recording":return i.toggleRecord(!i.recordLogSetting.get()),!0;case"network.hide-request-details":return i.networkItemView?(i.hideRequestPanel(),i.networkLogView.resetFocus(),!0):!1;case"network.search":{const o=is.instance().element.window().getSelection();if(!o)return!1;let a="";return o.rangeCount&&(a=o.toString().replace(/\r?\n.*/,"")),Oi.openSearch(a),!0}case"network.clear":return ae.instance().reset(!0),!0}return!1}}class Pc{async reveal(e){const t=await De.instance().selectAndActivateRequest(e.request,e.tab,e.filterOptions);if(t){if(e.searchMatch){const{lineNumber:i,columnNumber:o,matchLength:a}=e.searchMatch,l={from:{lineNumber:i,columnNumber:o},to:{lineNumber:i,columnNumber:o+a}};await t.revealResponseBody(l)}e.header&&t.revealHeader(e.header.section,e.header.header?.name)}}}let Nr;class Oi extends yl{constructor(){super("network",new To(200))}static instance(e={forceNew:null}){const{forceNew:t}=e;return(!Nr||t)&&(Nr=new Oi),Nr}static async openSearch(e,t){await ze.instance().showView("network.search-network-tab");const i=Oi.instance();return i.toggle(e,!!t),i}createScope(){return new fr(ae.instance())}}const Nc=Object.freeze(Object.defineProperty({__proto__:null,ActionDelegate:Hc,FilmStripRecorder:$n,NetworkLogWithFilterRevealer:Fc,NetworkPanel:De,RequestIdRevealer:qc,RequestLocationRevealer:Pc,RequestRevealer:Lc,SearchNetworkView:Oi},Symbol.toStringTag,{value:"Module"})),th=Object.freeze(Object.defineProperty({__proto__:null,BinaryResourceView:Yl,BlockedURLsPane:Jl,EventSourceMessagesView:Ql,NetworkConfigView:td,NetworkDataGridNode:rd,NetworkFrameGrouper:hc,NetworkItemView:ac,NetworkLogView:Tc,NetworkLogViewColumns:Sc,NetworkManageCustomHeadersView:pc,NetworkOverview:fc,NetworkPanel:Nc,NetworkSearchScope:Ec,NetworkTimeCalculator:cc,NetworkWaterfallColumn:yc,RequestBinaryResponseView:Yd,RequestCookiesView:Wd,RequestHTMLView:_d,RequestInitiatorView:Gd,RequestPayloadView:zd,RequestPreviewView:tc,RequestResponseView:Jd,RequestTimingView:ic,ResourceWebSocketFrameView:oc,SignedExchangeInfoView:Qd},Symbol.toStringTag,{value:"Module"}));export{Js as C,De as N,Ke as R,Xo as a,Cn as b,Ll as c,Jc as h,th as n};
//# sourceMappingURL=network-BQDRpQID.js.map
