import{bu as w,gq as io,b as te,g as oe,aq as xt,bS as no,cA as Fe,bA as ne,bN as ge,eB as Ke,gr as ro,ct as yt,gs as ao,gt as lo,bq as N,l as ve,dj as J,gu as Oe,I as z,b0 as j,eH as co,dq as $e,cp as q,gv as ho,gw as uo,gx as ue,gy as Xe,gz as Ye,an as ke,h as po,gA as go,gB as _e,gC as Qe,gD as fe,gE as fo,gF as mo,gG as vo,cc as St,gH as bo,gI as Co,gJ as kt,bW as wo,aO as xo,aP as At,gK as Je,ba as Ue,aU as be,df as yo,eo as So,dW as ko,en as Ao,gL as Eo,gM as Ze,gj as et,bT as tt,cq as ot,b4 as st,bH as it,gN as nt,cP as Ae,bG as Po,gO as Io,ew as pe,bv as Ee,gP as rt,gQ as at,db as Bo,eR as lt,gR as ct,b6 as Et,f_ as dt,gS as Fo,gT as To,aj as ht,gU as Lo,i as $o,fk as Pt,bM as Te,gV as Ve,gW as Do,ce as It,gX as Ro,cC as Bt,bJ as Mo,fs as B,e$ as Vo,f1 as Ho,cd as ut,c4 as Oo,bm as No,cj as zo,ck as Wo,cV as pt,cW as _o,dX as Uo,gY as Go,gZ as jo}from"./inspector-CyOA7R9n.js";import"./PanelIntroductionSteps-BeLT2-qM.js";import"./PreviewToggle-D6BBIbZ3.js";const T=a=>a.map(e=>io(e,2)),L=a=>`${a[0]} ${a[1]} ${a[2]} / ${a[3]}`,gt={rgb:{label:"RGBA",toValues:function(a){return T(a.as("rgba").canonicalRGBA())},fromValues:function(a){return w(`rgb(${L(a)})`)}},hsl:{label:"HSLA",toValues:function(a){const e=T(a.as("hsla").canonicalHSLA());return e[1]=e[1]+"%",e[2]=e[2]+"%",e},fromValues:function(a){return w(`hsl(${L(a)})`)}},hwb:{label:"HWBA",toValues:function(a){const e=T(a.as("hwba").canonicalHWBA());return e[1]=e[1]+"%",e[2]=e[2]+"%",e},fromValues:function(a){return w(`hwb(${L(a)})`)}},lch:{label:"lchA",toValues:function(a){const e=a.as("lch");return T([e.l,e.c,e.h,e.alpha??1])},fromValues:function(a){return w(`lch(${L(a)})`)}},oklch:{label:"lchA",toValues:function(a){const e=a.as("oklch");return T([e.l,e.c,e.h,e.alpha??1])},fromValues:function(a){return w(`oklch(${L(a)})`)}},lab:{label:"labA",toValues:function(a){const e=a.as("lab");return T([e.l,e.a,e.b,e.alpha??1])},fromValues:function(a){return w(`lab(${L(a)})`)}},oklab:{label:"labA",toValues:function(a){const e=a.as("oklab");return T([e.l,e.a,e.b,e.alpha??1])},fromValues:function(a){return w(`oklab(${L(a)})`)}},srgb:{label:"RGBA",toValues:function(a){const e=a.as("srgb");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(srgb ${L(a)})`)}},"srgb-linear":{label:"RGBA",toValues:function(a){const e=a.as("srgb-linear");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(srgb-linear ${L(a)})`)}},"display-p3":{label:"RGBA",toValues(a){const e=a.as("display-p3");return T([e.p0,e.p1,e.p2,1])},fromValues(a){return w(`color(display-p3 ${L(a)})`)}},"a98-rgb":{label:"RGBA",toValues:function(a){const e=a.as("a98-rgb");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(a98-rgb ${L(a)})`)}},"prophoto-rgb":{label:"RGBA",toValues:function(a){const e=a.as("prophoto-rgb");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(prophoto-rgb ${L(a)})`)}},rec2020:{label:"RGBA",toValues:function(a){const e=a.as("rec2020");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(rec2020 ${L(a)})`)}},xyz:{label:"xyzA",toValues:function(a){const e=a.as("xyz");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(xyz ${L(a)})`)}},"xyz-d50":{label:"xyzA",toValues:function(a){const e=a.as("xyz-d50");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(xyz-d50 ${L(a)})`)}},"xyz-d65":{label:"xyzA",toValues:function(a){const e=a.as("xyz-d65");return T([e.p0,e.p1,e.p2,e.alpha??1])},fromValues:function(a){return w(`color(xyz-d65 ${L(a)})`)}}},M={noContrastInformationAvailable:"No contrast information available",contrastRatio:"Contrast ratio",showMore:"Show more",pickBackgroundColor:"Pick background color",toggleBackgroundColorPicker:"Toggle background color picker",useSuggestedColorStoFixLow:"Use suggested color {PH1}to fix low contrast",apca:"APCA",aa:"AA",placeholderWithColon:": {PH1}",aaa:"AAA",showLess:"Show less"},qo=te("ui/legacy/components/color_picker/ContrastDetails.ts",M),V=oe.bind(void 0,qo);class me extends xt{contrastInfo;elementInternal;toggleMainColorPicker;expandedChangedCallback;colorSelectedCallback;expandedInternal;passesAA;contrastUnknown;visibleInternal;noContrastInfoAvailable;contrastValueBubble;contrastValue;contrastValueBubbleIcons;expandButton;expandedDetails;contrastThresholds;contrastAA;contrastPassFailAA;contrastAAA;contrastPassFailAAA;contrastAPCA;contrastPassFailAPCA;chooseBgColor;bgColorPickerButton;bgColorPickedBound;bgColorSwatch;constructor(e,t,o,s,i){super(),this.contrastInfo=e,this.elementInternal=t.createChild("div","spectrum-contrast-details collapsed"),this.toggleMainColorPicker=o,this.expandedChangedCallback=s,this.colorSelectedCallback=i,this.expandedInternal=!1,this.passesAA=!0,this.contrastUnknown=!1,this.visibleInternal=!1,this.noContrastInfoAvailable=t.createChild("div","no-contrast-info-available"),this.noContrastInfoAvailable.textContent=V(M.noContrastInformationAvailable),this.noContrastInfoAvailable.classList.add("hidden");const n=this.elementInternal.createChild("div");n.addEventListener("click",this.topRowClicked.bind(this));const r=n.createChild("div","container");no(r,V(M.contrastRatio)),this.contrastValueBubble=r.createChild("span","contrast-details-value"),this.contrastValue=this.contrastValueBubble.createChild("span"),this.contrastValueBubbleIcons=[],this.contrastValueBubbleIcons.push(this.contrastValueBubble.appendChild(Fe("checkmark"))),this.contrastValueBubbleIcons.push(this.contrastValueBubble.appendChild(Fe("check-double"))),this.contrastValueBubbleIcons.push(this.contrastValueBubble.appendChild(Fe("clear"))),this.contrastValueBubbleIcons.forEach(c=>c.addEventListener("click",b=>{me.showHelp(),b.consume(!1)}));const l=new ne("expand",r);this.expandButton=new ge(V(M.showMore),"chevron-down"),this.expandButton.addEventListener("Click",this.expandButtonClicked.bind(this)),Ke(this.expandButton.element,!1),l.appendToolbarItem(this.expandButton),this.expandedDetails=this.elementInternal.createChild("div","expanded-details"),ro(this.expandButton.element,this.expandedDetails),this.contrastThresholds=this.expandedDetails.createChild("div","contrast-thresholds"),this.contrastAA=this.contrastThresholds.createChild("div","contrast-threshold"),this.contrastPassFailAA=this.contrastAA.createChild("div","contrast-pass-fail"),this.contrastAAA=this.contrastThresholds.createChild("div","contrast-threshold"),this.contrastPassFailAAA=this.contrastAAA.createChild("div","contrast-pass-fail"),this.contrastAPCA=this.contrastThresholds.createChild("div","contrast-threshold"),this.contrastPassFailAPCA=this.contrastAPCA.createChild("div","contrast-pass-fail"),this.chooseBgColor=this.expandedDetails.createChild("div","contrast-choose-bg-color"),this.chooseBgColor.textContent=V(M.pickBackgroundColor);const d=this.expandedDetails.createChild("div","background-color"),h=new ne("spectrum-eye-dropper",d);this.bgColorPickerButton=new yt(V(M.toggleBackgroundColorPicker),"color-picker","color-picker-filled"),this.bgColorPickerButton.addEventListener("Click",this.toggleBackgroundColorPickerInternal.bind(this,void 0,!0)),h.appendToolbarItem(this.bgColorPickerButton),this.bgColorPickedBound=this.bgColorPicked.bind(this),this.bgColorSwatch=new Ko(d),this.contrastInfo.addEventListener("ContrastInfoUpdated",this.update.bind(this))}showNoContrastInfoAvailableMessage(){this.noContrastInfoAvailable.classList.remove("hidden")}hideNoContrastInfoAvailableMessage(){this.noContrastInfoAvailable.classList.add("hidden")}computeSuggestedColor(e){const t=this.contrastInfo.color(),o=this.contrastInfo.bgColor();if(!t||!o)return;if(e==="APCA"){const i=this.contrastInfo.contrastRatioAPCAThreshold();return i===null?void 0:ao(t,o,i+1)}const s=this.contrastInfo.contrastRatioThreshold(e);if(s)return lo(t,o,s+.1)}onSuggestColor(e){const t=this.computeSuggestedColor(e);t&&this.colorSelectedCallback(t)}createFixColorButton(e,t){const o=e.createChild("button","contrast-fix-button"),s=t.asString(this.contrastInfo.colorFormat()),i=s?s+" ":"",n=V(M.useSuggestedColorStoFixLow,{PH1:i});return N(o,n),ve.install(o,n),o.tabIndex=0,o.style.backgroundColor=i,o}update(){if(this.contrastInfo.isNull()){this.showNoContrastInfoAvailableMessage(),this.setVisible(!1);return}this.setVisible(!0),this.hideNoContrastInfoAvailableMessage();const e=J.isEnabled("apca"),t=this.contrastInfo.color(),o=this.contrastInfo.bgColor();if(e){const h=this.contrastInfo.contrastRatioAPCA();if(h===null||!o||!t){this.contrastUnknown=!0,this.contrastValue.textContent="",this.contrastValueBubble.classList.add("contrast-unknown"),this.chooseBgColor.classList.remove("hidden"),this.contrastThresholds.classList.add("hidden"),this.showNoContrastInfoAvailableMessage();return}this.contrastUnknown=!1,this.chooseBgColor.classList.add("hidden"),this.contrastThresholds.classList.remove("hidden"),this.contrastValueBubble.classList.remove("contrast-unknown"),this.contrastValue.textContent=`${Oe(h,2)}%`;const c=this.contrastInfo.contrastRatioAPCAThreshold(),b=h&&c?Math.abs(h)>=c:!1;this.contrastPassFailAPCA.removeChildren();const y=this.contrastPassFailAPCA.createChild("span","contrast-link-label");if(y.textContent=V(M.apca),c!==null&&(this.contrastPassFailAPCA.createChild("span").textContent=`: ${c.toFixed(2)}%`),b){const S=new z;S.data={iconName:"checkmark",color:"var(--icon-checkmark-green)",width:"20px",height:"14px"},this.contrastPassFailAPCA.appendChild(S)}else{const S=new z;S.data={iconName:"clear",color:"var(--icon-error)",width:"14px",height:"14px"},this.contrastPassFailAPCA.appendChild(S);const A=this.computeSuggestedColor("APCA");A&&this.createFixColorButton(this.contrastPassFailAPCA,A).addEventListener("click",()=>this.onSuggestColor("APCA"))}y.addEventListener("click",S=>me.showHelp()),this.elementInternal.classList.toggle("contrast-fail",!b),this.contrastValueBubble.classList.toggle("contrast-aa",b),this.bgColorSwatch.setColors(t,o);return}const s=this.contrastInfo.contrastRatio();if(!s||!o||!t){this.contrastUnknown=!0,this.contrastValue.textContent="",this.contrastValueBubble.classList.add("contrast-unknown"),this.chooseBgColor.classList.remove("hidden"),this.contrastThresholds.classList.add("hidden"),this.showNoContrastInfoAvailableMessage();return}this.contrastUnknown=!1,this.chooseBgColor.classList.add("hidden"),this.contrastThresholds.classList.remove("hidden"),this.contrastValueBubble.classList.remove("contrast-unknown"),this.contrastValue.textContent=String(Oe(s,2)),this.bgColorSwatch.setColors(t,o);const i=this.contrastInfo.contrastRatioThreshold("aa")||0;this.passesAA=(this.contrastInfo.contrastRatio()||0)>=i,this.contrastPassFailAA.removeChildren();const n=this.contrastPassFailAA.createChild("span","contrast-link-label");if(n.textContent=V(M.aa),this.contrastPassFailAA.createChild("span").textContent=V(M.placeholderWithColon,{PH1:i.toFixed(1)}),this.passesAA){const h=new z;h.data={iconName:"checkmark",color:"var(--icon-checkmark-green)",width:"20px",height:"14px"},this.contrastPassFailAA.appendChild(h)}else{const h=new z;h.data={iconName:"clear",color:"var(--icon-error)",width:"14px",height:"14px"},this.contrastPassFailAA.appendChild(h);const c=this.computeSuggestedColor("aa");c&&this.createFixColorButton(this.contrastPassFailAA,c).addEventListener("click",()=>this.onSuggestColor("aa"))}const r=this.contrastInfo.contrastRatioThreshold("aaa")||0,l=(this.contrastInfo.contrastRatio()||0)>=r;this.contrastPassFailAAA.removeChildren();const d=this.contrastPassFailAAA.createChild("span","contrast-link-label");if(d.textContent=V(M.aaa),this.contrastPassFailAAA.createChild("span").textContent=V(M.placeholderWithColon,{PH1:r.toFixed(1)}),l){const h=new z;h.data={iconName:"checkmark",color:"var(--icon-checkmark-green)",width:"20px",height:"14px"},this.contrastPassFailAAA.appendChild(h)}else{const h=new z;h.data={iconName:"clear",color:"var(--icon-error)",width:"14px",height:"14px"},this.contrastPassFailAAA.appendChild(h);const c=this.computeSuggestedColor("aaa");c&&this.createFixColorButton(this.contrastPassFailAAA,c).addEventListener("click",()=>this.onSuggestColor("aaa"))}[n,d].forEach(h=>h.addEventListener("click",()=>me.showHelp())),this.elementInternal.classList.toggle("contrast-fail",!this.passesAA),this.contrastValueBubble.classList.toggle("contrast-aa",this.passesAA&&!l),this.contrastValueBubble.classList.toggle("contrast-aaa",l)}static showHelp(){j.openInNewTab(co("https://web.dev/color-and-contrast-accessibility/"))}setVisible(e){this.visibleInternal=e,this.elementInternal.classList.toggle("hidden",!e)}visible(){return this.visibleInternal}element(){return this.elementInternal}expandButtonClicked(){const e=this.contrastValueBubble.getComponentSelection();e&&e.empty(),this.toggleExpanded()}topRowClicked(e){const t=this.contrastValueBubble.getComponentSelection();t&&t.empty(),this.toggleExpanded(),e.consume(!0)}toggleExpanded(){this.expandedInternal=!this.expandedInternal,Ke(this.expandButton.element,this.expandedInternal),this.elementInternal.classList.toggle("collapsed",!this.expandedInternal),this.expandedInternal?(this.toggleMainColorPicker(!1),this.expandButton.setGlyph("chevron-up"),this.expandButton.setTitle(V(M.showLess)),this.contrastUnknown&&this.toggleBackgroundColorPickerInternal(!0)):(this.toggleBackgroundColorPickerInternal(!1),this.expandButton.setGlyph("chevron-down"),this.expandButton.setTitle(V(M.showMore))),this.expandedChangedCallback()}collapse(){this.elementInternal.classList.remove("expanded"),this.toggleBackgroundColorPickerInternal(!1),this.toggleMainColorPicker(!1)}expanded(){return this.expandedInternal}backgroundColorPickerEnabled(){return this.bgColorPickerButton.isToggled()}toggleBackgroundColorPicker(e){this.toggleBackgroundColorPickerInternal(e,!1)}toggleBackgroundColorPickerInternal(e,t=!0){e===void 0&&(e=this.bgColorPickerButton.isToggled()),t&&this.dispatchEventToListeners("BackgroundColorPickerWillBeToggled",e),j.setEyeDropperActive(e),e?j.events.addEventListener($e.EyeDropperPickedColor,this.bgColorPickedBound):j.events.removeEventListener($e.EyeDropperPickedColor,this.bgColorPickedBound)}bgColorPicked({data:e}){const t=[e.r,e.g,e.b,(e.a/2.55|0)/100],o=q.fromRGBA(t);this.contrastInfo.setBgColor(o),this.toggleBackgroundColorPickerInternal(!1),j.bringToFront()}}let Ko=class{parentElement;swatchElement;swatchInnerElement;textPreview;constructor(e){this.parentElement=e,this.swatchElement=e.createChild("span","swatch contrast swatch-inner-white"),this.swatchInnerElement=this.swatchElement.createChild("span","swatch-inner"),this.textPreview=this.swatchElement.createChild("div","text-preview"),this.textPreview.textContent="Aa"}setColors(e,t){this.textPreview.style.color=e.asString("rgba"),this.swatchInnerElement.style.backgroundColor=t.asString("rgba"),this.swatchElement.classList.toggle("swatch-inner-white",t.as("hsl").l>.9)}};class Xo extends xt{isNullInternal;contrastRatioInternal;contrastRatioAPCAInternal;contrastRatioThresholds;contrastRationAPCAThreshold;fgColor;bgColorInternal;colorFormatInternal;constructor(e){if(super(),this.isNullInternal=!0,this.contrastRatioInternal=null,this.contrastRatioAPCAInternal=null,this.contrastRatioThresholds=null,this.contrastRationAPCAThreshold=0,this.fgColor=null,this.bgColorInternal=null,!e||!e.computedFontSize||!e.computedFontWeight||!e.backgroundColors||e.backgroundColors.length!==1)return;this.isNullInternal=!1,this.contrastRatioThresholds=ho(e.computedFontSize,e.computedFontWeight),this.contrastRationAPCAThreshold=uo(e.computedFontSize,e.computedFontWeight);const t=e.backgroundColors[0],o=w(t)?.asLegacyColor();o&&this.setBgColorInternal(o)}isNull(){return this.isNullInternal}setColor(e,t){this.fgColor=e,this.colorFormatInternal=t,this.updateContrastRatio(),this.dispatchEventToListeners("ContrastInfoUpdated")}colorFormat(){return this.colorFormatInternal}color(){return this.fgColor}contrastRatio(){return this.contrastRatioInternal}contrastRatioAPCA(){return this.contrastRatioAPCAInternal}contrastRatioAPCAThreshold(){return this.contrastRationAPCAThreshold}setBgColor(e){this.setBgColorInternal(e),this.dispatchEventToListeners("ContrastInfoUpdated")}setBgColorInternal(e){if(this.bgColorInternal=e,!this.fgColor)return;const t=this.fgColor.rgba();if(e.hasAlpha()){const o=ue(e.rgba(),t);this.bgColorInternal=new q(o,"rgba")}this.contrastRatioInternal=Xe(t,this.bgColorInternal.rgba()),this.contrastRatioAPCAInternal=Ye(this.fgColor.rgba(),this.bgColorInternal.rgba())}bgColor(){return this.bgColorInternal}updateContrastRatio(){!this.bgColorInternal||!this.fgColor||(this.contrastRatioInternal=Xe(this.fgColor.rgba(),this.bgColorInternal.rgba()),this.contrastRatioAPCAInternal=Ye(this.fgColor.rgba(),this.bgColorInternal.rgba()))}contrastRatioThreshold(e){return this.contrastRatioThresholds?this.contrastRatioThresholds[e]:null}}class Yo{contrastInfo;visible;contrastRatioSVG;contrastRatioLines;width;height;contrastRatioLineBuilder;contrastRatioLinesThrottler;drawContrastRatioLinesBound;constructor(e,t){this.contrastInfo=e,this.visible=!1,this.contrastRatioSVG=ke(t,"svg","spectrum-contrast-container fill"),this.contrastRatioLines=new Map,J.isEnabled("apca")?this.contrastRatioLines.set("APCA",ke(this.contrastRatioSVG,"path","spectrum-contrast-line")):(this.contrastRatioLines.set("aa",ke(this.contrastRatioSVG,"path","spectrum-contrast-line")),this.contrastRatioLines.set("aaa",ke(this.contrastRatioSVG,"path","spectrum-contrast-line"))),this.width=0,this.height=0,this.contrastRatioLineBuilder=new Qo(this.contrastInfo),this.contrastRatioLinesThrottler=new po(0),this.drawContrastRatioLinesBound=this.drawContrastRatioLines.bind(this),this.contrastInfo.addEventListener("ContrastInfoUpdated",this.update.bind(this))}update(){!this.visible||this.contrastInfo.isNull()||J.isEnabled("apca")&&this.contrastInfo.contrastRatioAPCA()===null||this.contrastInfo.contrastRatio()&&this.contrastRatioLinesThrottler.schedule(this.drawContrastRatioLinesBound)}setDimensions(e,t){this.width=e,this.height=t,this.update()}setVisible(e){this.visible=e,this.contrastRatioSVG.classList.toggle("hidden",!e),this.update()}async drawContrastRatioLines(){for(const[e,t]of this.contrastRatioLines){const o=this.contrastRatioLineBuilder.drawContrastRatioLine(this.width,this.height,e);o?t.setAttribute("d",o):t.removeAttribute("d")}}}class Qo{contrastInfo;constructor(e){this.contrastInfo=e}drawContrastRatioLine(e,t,o){const s=J.isEnabled("apca"),i=s?this.contrastInfo.contrastRatioAPCAThreshold():this.contrastInfo.contrastRatioThreshold(o);if(!e||!t||i===null)return null;const n=.02,r=0,l=1,d=2,h=3,c=this.contrastInfo.color(),b=this.contrastInfo.bgColor();if(!c||!b)return null;const y=c.rgba(),S=c.as("hsl").hsva(),A=b.rgba(),C=fe(A);let x=ue(y,A);const u=fe(x)>C,f=s?fo(C,i,u):mo(C,i,u);if(s&&Math.abs(Math.round(go(f,C)))<i)return null;let m=S[d],v=0;const k=[S[r],0,0,S[h]];let F=[];const W=_e(k);x=ue(W,A);let _=U=>fe(ue(q.fromHSVA(U).rgba(),A));J.isEnabled("apca")&&(_=U=>vo(ue(q.fromHSVA(U).rgba(),A)));let $;for($=0;$<1+n;$+=n){$=Math.min(1,$),k[l]=$,k[d]=m+v*n;const U=Qe(k,A,d,f,_);if(U===null)break;v=$===0?0:(U-m)/n,m=U,F.push(F.length?"L":"M"),F.push(($*e).toFixed(2)),F.push(((1-U)*t).toFixed(2))}return $<1+n&&($-=n,k[d]=1,$=Qe(k,A,l,f,_),$!==null&&(F=F.concat(["L",($*e).toFixed(2),"-0.1"]))),F.length===0?null:F.join(" ")}}const Ft={colorClippedTooltipText:"This color was clipped to match the format's gamut. The actual result was {PH1}"},Jo=te("ui/legacy/components/color_picker/FormatPickerContextMenu.ts",Ft),Zo=oe.bind(void 0,Jo);class es{#e;constructor(e){this.#e=e}async show(e,t){let o;const s=new Promise(c=>{o=c}),i=["hex","hexa","rgb","rgba","hsl","hwb"],n=["lch","oklch","lab","oklab","srgb","srgb-linear","display-p3","a98-rgb","prophoto-rgb","rec2020","xyz","xyz-d50","xyz-d65"],r=new St(e,{onSoftMenuClosed:()=>o?.()}),l=r.section("legacy"),d=r.section("wide"),h=r.section("color-function").appendSubMenuItem("color()",!1,"color").section();if(!(this.#e instanceof bo)){const c=this.#e.asLegacyColor().nickname();c&&this.addColorToSection(c,l,t)}if(!(this.#e instanceof Co)){const c=this.#e.as((this.#e.alpha??1)===1?"hex":"hexa").shortHex();c&&this.addColorToSection(c,l,t)}for(const c of[...i,...n]){if(c===this.#e.format())continue;const b=this.#e.as(c),y=i.includes(c)?l:b instanceof kt?h:d;this.addColorToSection(b,y,t)}await r.show(),await s}addColorToSection(e,t,o){if(e instanceof q){const l=(this.#e.alpha??1)!==1;if(e.alpha!==null!==l)return}const s=e.asString();if(!s)return;let i;e.isGamutClipped()&&(i=new z,i.data={iconName:"warning",color:"var(--icon-default)",width:"16px",height:"16px"},i.style.marginLeft="1px",i.style.marginTop="-1px",i.style.minWidth="16px",i.style.minHeight="16px");const n=i?Zo(Ft.colorClippedTooltipText,{PH1:e.getAsRawString()??"none"}):void 0,r=()=>o(e);t.appendItem(s,r,{additionalElement:i,tooltip:n,jslogContext:e.isGamutClipped()?"color":"clipped-color"})}}const Tt=new CSSStyleSheet;Tt.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.gamut-line {
  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */
  stroke: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */
  fill: none;
}

.label {
  position: absolute;
  bottom: 3px;
  margin-right: 5px;
  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */
  color: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */
}

/*# sourceURL=srgbOverlay.css */
`);const{html:ts}=At,os=wo.instance(),ss=10,is=3,ns=ss+is,ft=.001;function rs(a){const e=_e([...a,1]),t=Je.displayP3ToXyzd50(e[0],e[1],e[2]);return Je.xyzd50ToSrgb(t[0],t[1],t[2]).every(s=>s+ft>=0&&s-ft<=1)}class Lt extends HTMLElement{#e=this.attachShadow({mode:"open"});constructor(){super(),this.#e.adoptedStyleSheets=[Tt]}#o({hue:e,width:t,height:o}){if(t===0||o===0)return null;const s=1/window.devicePixelRatio,i=[];let n=0;for(let l=0;l<o;l+=s){const d=1-l/o;for(;n<t;n+=s){const h=n/t;if(!rs([e,h,d])){i.push({x:n,y:l});break}}}if(i.length===0)return null;const r=i[i.length-1];return r.x<t&&i.push({y:r.y,x:t}),i}#t(e,t){let o=1/0,s=null;for(const i of e)Math.abs(t-i.y)<=o&&(o=Math.abs(t-i.y),s=i);return s}render({hue:e,width:t,height:o}){return os.write("Srgb Overlay render",()=>{const s=this.#o({hue:e,width:t,height:o});if(!s||s.length===0)return;const i=this.#t(s,o-ns);i&&xo(ts`
          <span class="label" style="right: ${t-i.x}px">sRGB</span>
          <svg>
            <polyline points=${s.map(n=>`${n.x.toFixed(2)},${n.y.toFixed(2)}`).join(" ")} class="gamut-line" />
          </svg>
        `,this.#e,{host:this})})}}customElements.define("devtools-spectrum-srgb-overlay",Lt);const $t=new CSSStyleSheet;$t.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* https://github.com/bgrins/spectrum */

:host {
  width: 232px;
  height: 319px;
  user-select: none;
  overflow: hidden;
}

:selection {
  background-color: var(--sys-color-tonal-container);
  color: var(--sys-color-on-tonal-container);
}

.spectrum-color {
  position: relative;
  width: 232px;
  height: 127px;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
  flex: none;
  touch-action: none;
}

.spectrum-dragger,
.spectrum-slider {
  user-select: none;
}

.spectrum-dragger {
  border-radius: 12px;
  height: 12px;
  width: 12px;
  border: 1px solid var(--sys-color-surface);
  cursor: move;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--sys-color-inverse-surface);
  box-shadow: var(--drop-shadow);
}

.spectrum-slider {
  position: absolute;
  top: -1px;
  cursor: ew-resize;
  width: 13px;
  height: 13px;
  border-radius: 13px;
  background-color: var(--sys-color-neutral-container);
  box-shadow: var(--drop-shadow);
}

.spectrum-color:focus .spectrum-dragger {
  border: 1px solid var(--sys-color-state-focus-ring);
}

.spectrum-tools {
  position: relative;
  height: 110px;
  width: 100%;
  flex: none;
}

.spectrum-hue {
  top: 16px;
  background: linear-gradient(to left, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); /* stylelint-disable-line plugin/use_theme_colors */
}

.spectrum-hue.display-p3 {
  background: linear-gradient(to left, color(display-p3 1 0 0) 0%, color(display-p3 1 1 0) 17%, color(display-p3 0 1 0) 33%, color(display-p3 0 1 1) 50%, color(display-p3 0 0 1) 67%, color(display-p3 1 0 1) 83%, color(display-p3 1 0 0) 100%); /* stylelint-disable-line plugin/use_theme_colors */
}

.spectrum-alpha {
  top: 35px;
  background-image: var(--image-file-checker);
  background-size: 12px 11px;
}

.spectrum-alpha-background {
  height: 100%;
  border-radius: 2px;
}

.spectrum-hue,
.spectrum-alpha {
  position: absolute;
  left: 86px;
  width: 130px;
  height: 11px;
  border-radius: 2px;
  touch-action: none;
}

.spectrum-hue:focus-visible .spectrum-slider,
.spectrum-alpha:focus-visible .spectrum-slider {
  border: 1px solid var(--sys-color-state-focus-ring);
  width: 14px;
  height: 14px;
  border-radius: 14px;
}

.spectrum-sat,
.-theme-preserve {
  background-image: linear-gradient(to right, #fff, rgb(204 154 129 / 0%)); /* stylelint-disable-line plugin/use_theme_colors */
}

.spectrum-val,
.-theme-preserve {
  background-image: linear-gradient(to top, #000, rgb(204 154 129 / 0%)); /* stylelint-disable-line plugin/use_theme_colors */
}

.spectrum-contrast-details {
  position: relative;
  background-color: var(--sys-color-cdt-base-container);
  width: 100%;
  height: 83px;
  top: 0;
  font-size: 13px;
  color: var(--sys-color-on-surface);
  border-top: 1px solid var(--sys-color-divider);
  line-height: initial;
  overflow: hidden;
  flex: none;
}

.spectrum-contrast-details.collapsed {
  height: 36px;
  flex: none;
}

.spectrum-contrast-details div.toolbar.expand {
  position: absolute;
  right: 6px;
  top: 6px;
  margin: 0;
}

.spectrum-contrast-details.visible {
  display: initial;
}

.spectrum-contrast-details div.container {
  margin: 10px;
}

.spectrum-contrast-details .expanded-details {
  display: flex;
  margin: 12px 12px 0 4px;
}

.spectrum-contrast-details.collapsed .expanded-details {
  display: none;
}

.contrast-pass-fail {
  margin-left: 0.5em;
  display: flex;
  align-items: center;
}

.contrast-choose-bg-color {
  margin: 8px 0 0 5px;
  font-style: italic;
}

.spectrum-contrast-details .contrast-choose-bg-color,
.spectrum-contrast-details .contrast-thresholds {
  width: 150px;
}

.contrast-threshold:first-child {
  margin-bottom: 5px;
}

.contrast-fix-button {
  cursor: pointer;
  font-size: 13px;
  padding: 0;
  margin: 0 0 0 10px;
  background: 0;
  width: 12px;
  height: 12px;
  border: 1px solid var(--sys-color-neutral-outline);
  display: inline-block;
  position: relative;
}

.contrast-fix-button::after {
  content: " ";
  width: 13px;
  height: 13px;
  background-image: var(--image-file-refresh);
  background-size: contain;
  position: absolute;
  left: 5.5px;
  top: 3.5px;
  background-color: var(--sys-color-cdt-base-container);
  border-radius: 50%;
}

.contrast-fix-button:hover,
.contrast-fix-button:focus {
  border: 1px solid var(--sys-color-state-focus-ring);
  transform: scale(1.2);
}

.contrast-link-label {
  cursor: pointer;
}

.contrast-link-label:hover {
  text-decoration: underline;
}

.spectrum-contrast-details .background-color {
  position: absolute;
  flex: none;
  right: 12px;
}

.spectrum-eye-dropper {
  width: 32px;
  height: 24px;
  position: relative;
  left: 8px;
  top: 17px;
  cursor: pointer;
}

.spectrum-contrast-details .spectrum-eye-dropper {
  top: 2px;
  right: 34px;
  position: absolute;
  left: auto;
}

.contrast-details-value {
  color: var(--sys-color-on-surface);
  margin: 1px 5px;
  user-select: text;
}

.contrast-pass-fail devtools-icon {
  margin-left: 5px;
}

.contrast-details-value devtools-icon {
  display: none;
  margin-left: 5px;
  color: var(--sys-color-on-surface);
}

.spectrum-contrast-details .toolbar-state-on devtools-icon {
  color: var(--sys-color-token-subtle);
}

devtools-icon.clear {
  transform: scale(0.7);
  color: var(--icon-error);
}

devtools-icon.checkmark,
devtools-icon.check-double {
  color: var(--icon-checkmark-green);
}

.spectrum-contrast-details .contrast-details-value.contrast-unknown {
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-on-surface);
  width: 3em;
  text-align: center;
}

.contrast-details-value .clear,
.contrast-details-value .checkmark,
.contrast-details-value .check-double {
  cursor: pointer;
  vertical-align: -5px;
}

.spectrum-contrast-details.contrast-fail .contrast-details-value .clear,
.contrast-details-value.contrast-aa .checkmark,
.contrast-details-value.contrast-aaa .check-double {
  display: inline-block;
}

.swatch {
  width: 32px;
  height: 32px;
  margin: 0;
  position: absolute;
  top: 15px;
  left: 44px;
  background-image: var(--image-file-checker);
  border-radius: 16px;
}

.swatch-inner,
.swatch-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-block;
  border-radius: 16px;
}

.swatch-inner-white {
  border: 1px solid var(--sys-color-neutral-outline);
}

.swatch-overlay {
  cursor: pointer;
  opacity: 0%;
  padding: 4px;
}

.swatch-overlay:hover,
.swatch-overlay:focus-visible {
  background-color: var(--color-background-inverted-opacity-30);
  opacity: 100%;
}

.swatch-overlay:active {
  background-color: var(--color-background-inverted-opacity-50);
}

devtools-icon.copy-color-icon {
  color: var(--sys-color-cdt-base-container);
  margin-top: 2px;
  margin-left: 2px;
}

.spectrum-text {
  position: absolute;
  top: 60px;
  left: 16px;
}

.spectrum-text-value {
  display: inline-block;
  width: 40px;
  overflow: hidden;
  text-align: center;
  margin-right: 6px;
  line-height: 20px;
  padding: 0;
  color: var(--sys-color-on-surface);
  border: 1px solid var(--sys-color-neutral-outline);
  white-space: nowrap;
}

.spectrum-text-label {
  letter-spacing: 39.5px;
  margin-top: 8px;
  display: block;
  color: var(--sys-color-state-disabled);
  margin-left: 16px;
  width: 174px;
}

.spectrum-text-hex > .spectrum-text-value {
  width: 178px;
}

.spectrum-text-hex > .spectrum-text-label {
  letter-spacing: normal;
  margin-left: 0;
  text-align: center;
}

.spectrum-switcher {
  border-radius: 2px;
  height: 20px;
  width: 20px;
  padding: 2px;
  border: none;
  background: none;
  margin: 0;
}

.spectrum-display-switcher {
  top: 72px;
  position: absolute;
  right: 10px;
}

.spectrum-switcher:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.spectrum-switcher:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.spectrum-palette-container {
  border-top: 1px solid var(--sys-color-divider);
  position: relative;
  width: 100%;
  padding: 6px 24px 6px 6px;
  display: flex;
  flex-wrap: wrap;
}

.spectrum-palette {
  display: flex;
  flex-wrap: wrap;
  width: 198px;
}

.spectrum-palette-color {
  width: 12px;
  height: 12px;
  flex: 0 0 12px;
  border-radius: 2px;
  margin: 6px;
  cursor: pointer;
  position: relative;
  border: 1px solid var(--sys-color-divider);
  background-position: -1px !important; /* stylelint-disable-line declaration-no-important */
  z-index: 14;
}

.spectrum-palette-color-shadow {
  position: absolute;
  opacity: 0%;
  margin: 0;
  top: -5px;
  left: 3px;
  border: 0;
  border-radius: 1px;
  width: 11px;
  height: 11px;
}

.spectrum-palette-color:hover:not(.spectrum-shades-shown) > .spectrum-palette-color-shadow,
.spectrum-palette-color:focus:not(.spectrum-shades-shown) > .spectrum-palette-color-shadow {
  opacity: 20%;
}

.spectrum-palette-color:hover:not(.spectrum-shades-shown) > .spectrum-palette-color-shadow:first-child,
.spectrum-palette-color:focus:not(.spectrum-shades-shown) > .spectrum-palette-color-shadow:first-child {
  opacity: 60%;
  top: -3px;
  left: 1px;
}

.palette-color-shades {
  position: absolute;
  background-color: var(--sys-color-cdt-base-container);
  height: 228px;
  width: 28px;
  box-shadow: var(--drop-shadow);
  z-index: 14;
  border-radius: 2px;
  transform-origin: 0 228px;
  margin-top: 16px;
  margin-left: -8px;
}

.spectrum-palette > .spectrum-palette-color.spectrum-shades-shown {
  z-index: 15;
}

.palette-color-shades > .spectrum-palette-color {
  margin: 8px 0 0;
  margin-left: 8px;
  width: 12px;
}

.spectrum-palette > .spectrum-palette-color {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  will-change: transform;
  z-index: 13;
}

.palette-preview > .spectrum-palette-color {
  margin-top: 1px;
}

.spectrum-palette > .spectrum-palette-color.empty-color {
  border-color: transparent;
}

.spectrum-palette-color:not(.has-material-shades):focus {
  border: 1px solid var(--sys-color-state-focus-ring);
  transform: scale(1.4);
}

.palette-color-shades > .spectrum-palette-color:not(.empty-color):hover,
.spectrum-palette > .spectrum-palette-color:not(.empty-color):not(.has-material-shades):hover {
  transform: scale(1.15);
}

.add-color-toolbar {
  margin-left: -3px;
  margin-top: -1px;
}

.spectrum-palette-switcher {
  right: 10px;
  top: 0;
  margin-top: 9px;
  position: absolute;
}

.palette-panel {
  width: 100%;
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--sys-color-cdt-base-container);
  z-index: 14;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1), visibility 0s 200ms;
  border-top: 1px solid var(--sys-color-divider);
  visibility: hidden;
}

.palette-panel-showing > .palette-panel {
  transform: translateY(-100%);
  transition-delay: 0s;
  visibility: visible;
}

.palette-panel > div.toolbar {
  position: absolute;
  right: 6px;
  top: 6px;
}

.palette-panel > div:not(.toolbar) {
  flex: 0 0 38px;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 12px;
  line-height: 14px;
  color: var(--sys-color-on-surface);
}

.palette-panel > div.palette-title {
  font-size: 14px;
  line-height: 16px;
  color: var(--sys-color-on-surface);
  flex-basis: 40px;
}

div.palette-preview {
  display: flex;
  cursor: pointer;
}

.palette-preview-title {
  flex: 0 0 84px;
}

.palette-preview:focus-visible,
.palette-preview:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.spectrum-overlay {
  z-index: 13;
  visibility: hidden;
  background-color: hsl(0deg 0% 0% / 50%); /* stylelint-disable-line plugin/use_theme_colors */
  /* See: crbug.com/1152736 for color variable migration. */
  opacity: 0%;
  transition: opacity 100ms cubic-bezier(0, 0, 0.2, 1), visibility 0s 100ms;
}

.palette-panel-showing > .spectrum-overlay {
  transition-delay: 0s;
  visibility: visible;
  opacity: 100%;
}

.spectrum-contrast-container {
  width: 100%;
  height: 100%;
}

.spectrum-contrast-line,
:host-context(.theme-with-dark-background) .spectrum-contrast-line {
  fill: none;
  stroke: #fff; /* stylelint-disable-line plugin/use_theme_colors */
  opacity: 70%;
  stroke-width: 1.5px;
}

.delete-color-toolbar {
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--sys-color-cdt-base-container);
  visibility: hidden;
  z-index: 3;
  width: 36px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  bottom: 2px;
  border-bottom-right-radius: 2px;
}

@keyframes showDeleteToolbar {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}

.delete-color-toolbar.dragging {
  visibility: visible;
  animation: showDeleteToolbar 100ms 150ms cubic-bezier(0, 0, 0.2, 1) backwards;
}

.delete-color-toolbar-active {
  background-color: var(--sys-color-state-hover-on-subtle);
  color: var(--sys-color-cdt-base-container);
}

.swatch.contrast {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  background-image: var(--image-file-checker);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swatch.contrast .swatch-overlay {
  padding: 0;
}

.background-color .text-preview {
  color: var(--sys-color-inverse-surface);
  font-size: 16px;
  position: relative;
  padding-bottom: 2px;
}

.swatch.contrast devtools-icon {
  margin: -2px;
}

.no-contrast-info-available {
  border-top: 1px solid var(--sys-color-divider);
  position: relative;
  width: 100%;
  padding: 10px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

@media (forced-colors: active) {
  :host {
    border: 1px solid canvastext !important; /* stylelint-disable-line declaration-no-important */
  }

  .spectrum-color {
    forced-color-adjust: none;
  }

  .spectrum-switcher:hover,
  .spectrum-switcher:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight !important; /* stylelint-disable-line declaration-no-important */
  }

  :host-context(.theme-with-dark-background) .spectrum-switcher {
    filter: unset;
  }

  .spectrum-switcher:hover svg,
  .spectrum-switcher:focus-visible svg {
    fill: HighlightText;
  }

  .swatch {
    forced-color-adjust: none;
  }

  .swatch-inner,
  .swatch-overlay,
  .swatch-inner-white {
    border: 1px solid ButtonText;
  }

  .swatch-overlay:hover,
  .swatch-overlay:focus-visible {
    background-color: canvas !important; /* stylelint-disable-line declaration-no-important */
  }

  .spectrum-slider {
    forced-color-adjust: none;
    background-color: ButtonText !important; /* stylelint-disable-line declaration-no-important */
    box-shadow: 0 1px 4px 0 ButtonFace !important; /* stylelint-disable-line declaration-no-important */
  }
}

/*# sourceURL=spectrum.css */
`);const P={toggleColorPicker:"Eye dropper [{PH1}]",changeHue:"Change hue",changeAlpha:"Change alpha",hex:"HEX",changeColorFormat:"Change color format",previewPalettes:"Preview palettes",addToPalette:"Add to palette",colorPalettes:"Color Palettes",returnToColorPicker:"Return to color picker",colorS:"Color {PH1}",longclickOrLongpressSpaceToShow:"Long-click or long-press space to show alternate shades of {PH1}",removeColor:"Remove color",removeAllToTheRight:"Remove all to the right",clearPalette:"Clear palette",sInS:"{PH1} in {PH2}",copyColorToClipboard:"Copy color to clipboard",pressArrowKeysMessage:"Press arrow keys with or without modifiers to move swatch position. Arrow key with Shift key moves position largely, with Ctrl key it is less and with Alt key it is even less"},as=te("ui/legacy/components/color_picker/Spectrum.ts",P),I=oe.bind(void 0,as),mt=new WeakMap,vt=new WeakMap,ls=["srgb","rgb","hex","hsl","hwb"],Pe="EyeDropper"in window;function bt(a){return!ls.includes(a)}function cs(a){return a==="rgba"?"rgb":a==="hsla"?"hsl":a==="hwba"?"hwb":a==="hexa"?"hex":a}function ds(a,e){switch(a){case"display-p3":{const t=e.as("display-p3");return[...Do([t.p0,t.p1,t.p2]),t.alpha||1]}case"srgb":return e.as("hsl").hsva()}}function Ie(a,e){const t=q.fromHSVA(e);switch(a){case"display-p3":{const o=_e(e);return new kt("display-p3",o[0],o[1],o[2],o[3],void 0)}case"srgb":return t}}class Bs extends Ue(be){colorInternal;gamut="srgb";colorElement;colorDragElement;dragX;dragY;colorPickerButton;swatch;hueElement;hueSlider;alphaElement;alphaElementBackground;alphaSlider;displayContainer;textValues;textLabels;hexContainer;hexValue;contrastInfo;srgbOverlay;contrastOverlay;contrastDetails;contrastDetailsBackgroundColorPickedToggledBound;palettes;palettePanel;palettePanelShowing;paletteSectionContainer;paletteContainer;shadesContainer;deleteIconToolbar;deleteButton;addColorToolbar;colorPickedBound;hsv;hueAlphaWidth;dragWidth;dragHeight;colorDragElementHeight;slideHelperWidth;numPaletteRowsShown;selectedColorPalette;customPaletteSetting;colorOffset;closeButton;paletteContainerMutable;shadesCloseHandler;dragElement;dragHotSpotX;dragHotSpotY;colorNameInternal;colorFormat="rgb";eyeDropperAbortController=null;isFormatPickerShown=!1;colorStringInternal;constructor(e){super(!0),this.contentElement.tabIndex=0,this.contentElement.setAttribute("jslog",`${yo("colorPicker").parent("mapped").track({keydown:"Enter|Escape"})}`),this.colorElement=this.contentElement.createChild("div","spectrum-color"),this.colorElement.tabIndex=0,this.colorElement.setAttribute("jslog",`${So("color").track({click:!0,drag:!0,keydown:"ArrowLeft|ArrowRight|ArrowDown|ArrowUp"})}`),this.setDefaultFocusedElement(this.colorElement),this.colorElement.addEventListener("keydown",this.onSliderKeydown.bind(this,A.bind(this)));const t=I(P.pressArrowKeysMessage);N(this.colorElement,t),ko(this.colorElement),this.colorDragElement=this.colorElement.createChild("div","spectrum-sat fill").createChild("div","spectrum-val fill").createChild("div","spectrum-dragger"),this.dragX=0,this.dragY=0;const o=this.contentElement.createChild("div","spectrum-tools"),s=new ne("spectrum-eye-dropper",o),n=Ao.instance().shortcutsForAction("elements.toggle-eye-dropper")[0]?.descriptors.flatMap(u=>u.name.split(" + "))[0];this.colorPickerButton=new yt(I(P.toggleColorPicker,{PH1:n||""}),"color-picker","color-picker-filled","color-eye-dropper"),this.colorPickerButton.setToggled(!0),this.colorPickerButton.addEventListener("Click",this.toggleColorPicker.bind(this,void 0)),s.appendToolbarItem(this.colorPickerButton),this.colorPickerButton.element.setAttribute("jslog",`${Eo().track({click:!0})}`),this.swatch=new us(o),this.hueElement=o.createChild("div","spectrum-hue"),this.hueElement.setAttribute("jslog",`${Ze("hue").track({click:!0,drag:!0,keydown:"ArrowLeft|ArrowRight|ArrowDown|ArrowUp"})}`),this.hueElement.tabIndex=0,this.hueElement.addEventListener("keydown",this.onSliderKeydown.bind(this,y.bind(this))),N(this.hueElement,I(P.changeHue)),et(this.hueElement,0,360),this.hueSlider=this.hueElement.createChild("div","spectrum-slider"),this.alphaElement=o.createChild("div","spectrum-alpha"),this.alphaElement.setAttribute("jslog",`${Ze("alpha").track({click:!0,drag:!0,keydown:"ArrowLeft|ArrowRight|ArrowDown|ArrowUp"})}`),this.alphaElement.tabIndex=0,this.alphaElement.addEventListener("keydown",this.onSliderKeydown.bind(this,S.bind(this))),N(this.alphaElement,I(P.changeAlpha)),et(this.alphaElement,0,1),this.alphaElementBackground=this.alphaElement.createChild("div","spectrum-alpha-background"),this.alphaSlider=this.alphaElement.createChild("div","spectrum-slider"),this.displayContainer=o.createChild("div","spectrum-text source-code"),tt(this.displayContainer,!0),this.textValues=[];for(let u=0;u<4;++u){const f=ot("spectrum-text-value");f.setAttribute("jslog",`${st().track({change:!0,keydown:"ArrowUp|ArrowDown"}).context(u)}`),this.displayContainer.appendChild(f),f.maxLength=4,this.textValues.push(f),f.addEventListener("keydown",this.inputChanged.bind(this),!1),f.addEventListener("input",this.inputChanged.bind(this),!1),f.addEventListener("wheel",this.inputChanged.bind(this),!1),f.addEventListener("paste",this.pasted.bind(this),!1)}this.textLabels=this.displayContainer.createChild("div","spectrum-text-label"),this.hexContainer=o.createChild("div","spectrum-text spectrum-text-hex source-code"),tt(this.hexContainer,!0),this.hexValue=ot("spectrum-text-value"),this.hexValue.setAttribute("jslog",`${st("hex").track({keydown:"ArrowUp|ArrowDown",change:!0})}`),this.hexContainer.appendChild(this.hexValue),this.hexValue.maxLength=9,this.hexValue.addEventListener("keydown",this.inputChanged.bind(this),!1),this.hexValue.addEventListener("input",this.inputChanged.bind(this),!1),this.hexValue.addEventListener("wheel",this.inputChanged.bind(this),!1),this.hexValue.addEventListener("paste",this.pasted.bind(this),!1);const r=this.hexContainer.createChild("div","spectrum-text-label");r.textContent=I(P.hex),N(this.hexValue,r.textContent);const l=o.createChild("button","spectrum-display-switcher spectrum-switcher");l.setAttribute("jslog",`${it("color-format").track({click:!0})}`),E(l),nt(l,I(P.changeColorFormat)),l.tabIndex=0,l.addEventListener("click",u=>{this.showFormatPicker(u)}),Ae(this.hueElement,this.dragStart.bind(this,y.bind(this)),y.bind(this),null,"ew-resize","crosshair"),Ae(this.alphaElement,this.dragStart.bind(this,S.bind(this)),S.bind(this),null,"ew-resize","crosshair"),Ae(this.colorElement,this.dragStart.bind(this,A.bind(this)),A.bind(this),null,"move","crosshair"),e&&(this.contrastInfo=e,this.contrastOverlay=new Yo(this.contrastInfo,this.colorElement),this.contrastDetails=new me(this.contrastInfo,this.contentElement,this.toggleColorPicker.bind(this),this.contrastPanelExpandedChanged.bind(this),this.colorSelected.bind(this)),this.contrastDetailsBackgroundColorPickedToggledBound=this.contrastDetailsBackgroundColorPickedToggled.bind(this)),this.element.classList.add("flex-none"),this.palettes=new Map,this.palettePanel=this.contentElement.createChild("div","palette-panel"),this.palettePanel.setAttribute("jslog",`${Po("palette-panel")}`),this.palettePanelShowing=!1,this.paletteSectionContainer=this.contentElement.createChild("div","spectrum-palette-container"),this.paletteContainer=this.paletteSectionContainer.createChild("div","spectrum-palette"),this.paletteContainer.addEventListener("contextmenu",this.showPaletteColorContextMenu.bind(this,-1)),this.shadesContainer=this.contentElement.createChild("div","palette-color-shades hidden"),this.shadesContainer.setAttribute("jslog",`${Io()}`),Ae(this.paletteContainer,this.paletteDragStart.bind(this),this.paletteDrag.bind(this),this.paletteDragEnd.bind(this),"default");const d=this.paletteSectionContainer.createChild("div","spectrum-palette-switcher spectrum-switcher");d.setAttribute("jslog",`${it("palette-switcher").track({click:!0})}`),E(d),nt(d,I(P.previewPalettes)),pe(d),d.tabIndex=0,self.onInvokeElement(d,u=>{this.togglePalettePanel(!0),u.consume(!0)}),this.deleteIconToolbar=new ne("delete-color-toolbar"),this.deleteButton=new ge("","bin"),this.deleteIconToolbar.appendToolbarItem(this.deleteButton),this.contentElement.createChild("div","spectrum-overlay fill").addEventListener("click",this.togglePalettePanel.bind(this,!1)),this.addColorToolbar=new ne("add-color-toolbar");const c=new ge(I(P.addToPalette),"plus",void 0,"add-color");c.addEventListener("Click",this.onAddColorMousedown.bind(this)),c.element.addEventListener("keydown",this.onAddColorKeydown.bind(this)),this.addColorToolbar.appendToolbarItem(c),this.colorPickedBound=this.colorPicked.bind(this),this.numPaletteRowsShown=-1,this.contentElement.addEventListener("focusout",u=>{this.isFormatPickerShown&&u.stopImmediatePropagation()}),this.srgbOverlay=new Lt,this.loadPalettes(),new hs(u=>{u.colors.length?this.addPalette(u):this.selectedColorPalette.get()===u.title&&this.paletteSelected(Be)});function b(u,f){const m=f,v=u.getBoundingClientRect();switch(m.key){case"ArrowLeft":case"ArrowDown":return v.left-1;case"ArrowRight":case"ArrowUp":return v.right+1;default:return f.x}}function y(u){const f=this.hsv.slice(),m=b(this.hueSlider,u),v=this.hueElement.getBoundingClientRect().left,F=1-(m-v)/this.hueAlphaWidth;f[0]=Ee(F,0,1),this.innerSetColor(f,"",void 0,void 0,R.Other);const _=Ie(this.gamut,f).as("hsl").canonicalHSLA();rt(this.hueElement,_[0])}function S(u){const f=this.hsv.slice(),m=b(this.alphaSlider,u),v=this.hueElement.getBoundingClientRect().left,k=(m-v)/this.hueAlphaWidth,F=Math.round(k*100)/100;f[3]=Ee(F,0,1),this.innerSetColor(f,"",void 0,void 0,R.Other);const _=Ie(this.gamut,f).as("hsl").canonicalHSLA();at(this.alphaElement,_[3])}function A(u){const f=this.hsv.slice(),m=C(this.colorDragElement,u);this.colorOffset=this.colorElement.getBoundingClientRect(),f[1]=Ee((m.x-this.colorOffset.left)/this.dragWidth,0,1),f[2]=Ee(1-(m.y-this.colorOffset.top)/this.dragHeight,0,1),this.innerSetColor(f,"",void 0,void 0,R.Other)}function C(u,f){const m=u.getBoundingClientRect(),v=m.x+m.width/2,k=m.y+m.width/2,F=m.width/4,W=x(F,f);switch(f.key){case"ArrowLeft":return{x:m.left-W,y:k};case"ArrowRight":return{x:m.right+W,y:k};case"ArrowDown":return{x:v,y:m.bottom+W};case"ArrowUp":return{x:v,y:m.top-W};default:return{x:f.x,y:f.y}}}function x(u,f){const m=f;return m.altKey?u=1:m.ctrlKey?u=10:m.shiftKey&&(u=20),u}function E(u){const f=new z;f.data={iconName:"fold-more",color:"var(--icon-default)",width:"16px",height:"16px"},u.appendChild(f)}}dragStart(e,t){return this.colorOffset=this.colorElement.getBoundingClientRect(),e(t),!0}contrastDetailsBackgroundColorPickedToggled(e){e.data&&this.toggleColorPicker(!1)}contrastPanelExpandedChanged(){!this.contrastOverlay||!this.contrastDetails||(this.contrastOverlay.setVisible(this.contrastDetails.expanded()),this.resizeForSelectedPalette(!0),this.contrastDetails.expanded()?this.hideSrgbOverlay():this.showSrgbOverlay())}updatePalettePanel(){this.palettePanel.removeChildren();const e=this.palettePanel.createChild("div","palette-title");e.textContent=I(P.colorPalettes);const t=new ne("",this.palettePanel);this.closeButton=new ge(I(P.returnToColorPicker),"cross"),this.closeButton.addEventListener("Click",this.togglePalettePanel.bind(this,!1)),this.closeButton.element.addEventListener("keydown",this.onCloseBtnKeydown.bind(this)),this.closeButton.element.setAttribute("jslog",`${Bo().track({click:!0})}`),t.appendToolbarItem(this.closeButton);for(const o of this.palettes.values())this.palettePanel.appendChild(this.createPreviewPaletteElement(o));this.contentElement.scrollIntoView({block:"end"})}togglePalettePanel(e){this.palettePanelShowing!==e&&(e&&this.updatePalettePanel(),this.palettePanelShowing=e,this.contentElement.classList.toggle("palette-panel-showing",e),this.focusInternal())}onCloseBtnKeydown(e){(lt(e)||ct(e))&&(this.togglePalettePanel(!1),e.consume(!0))}onSliderKeydown(e,t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"ArrowDown":case"ArrowUp":e(t),t.consume(!0)}}focusInternal(){this.isShowing()&&(this.palettePanelShowing&&this.closeButton?this.closeButton.element.focus({preventScroll:!0}):this.contentElement.focus())}createPaletteColor(e,t,o){const s=document.createElement("div");return s.classList.add("spectrum-palette-color"),s.setAttribute("jslog",`${Et().track({click:!0,drag:!0,keydown:"ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Escape|Tab"})}`),s.style.background=dt("linear-gradient(%s, %s), var(--image-file-checker)",e,e),o&&s.animate([{opacity:0},{opacity:1}],{duration:100,delay:o,fill:"backwards"}),ve.install(s,t||e),s}showPalette(e,t,o){this.resizeForSelectedPalette(),this.paletteContainer.removeChildren();for(let s=0;s<e.colors.length;s++){const i=t?s*100/e.colors.length:0,n=this.createPaletteColor(e.colors[s],e.colorNames[s],i);if(pe(n),N(n,I(P.colorS,{PH1:e.colors[s]})),n.tabIndex=-1,n.addEventListener("mousedown",this.paletteColorSelected.bind(this,e.colors[s],e.colorNames[s],!!e.matchUserFormat)),n.addEventListener("focus",this.paletteColorSelected.bind(this,e.colors[s],e.colorNames[s],!!e.matchUserFormat)),n.addEventListener("keydown",this.onPaletteColorKeydown.bind(this,s)),e.mutable)mt.set(n,!0),vt.set(n,e.colors[s]),n.addEventListener("contextmenu",this.showPaletteColorContextMenu.bind(this,s));else if(e===Be){n.classList.add("has-material-shades");let r=n.createChild("div","spectrum-palette-color spectrum-palette-color-shadow");r.style.background=e.colors[s],r=n.createChild("div","spectrum-palette-color spectrum-palette-color-shadow"),r.style.background=e.colors[s];const l=I(P.longclickOrLongpressSpaceToShow,{PH1:e.colors[s]});ve.install(n,l),N(n,l),new Fo(n,this.showLightnessShades.bind(this,n,e.colors[s]))}this.paletteContainer.appendChild(n)}this.paletteContainer.childNodes.length>0&&(this.paletteContainer.childNodes[0].tabIndex=0),this.paletteContainerMutable=e.mutable,e.mutable?(this.paletteContainer.appendChild(this.addColorToolbar.element),this.paletteContainer.appendChild(this.deleteIconToolbar.element)):(this.addColorToolbar.element.remove(),this.deleteIconToolbar.element.remove()),this.togglePalettePanel(!1),this.focusInternal()}showLightnessShades(e,t,o){function s(r){this.shadesContainer.classList.add("hidden"),r.classList.remove("spectrum-shades-shown"),this.shadesCloseHandler&&this.shadesContainer.ownerDocument.removeEventListener("mousedown",this.shadesCloseHandler,!0),delete this.shadesCloseHandler}this.shadesCloseHandler&&this.shadesCloseHandler(),this.shadesContainer.classList.remove("hidden"),this.shadesContainer.removeChildren(),this.shadesContainer.animate([{transform:"scaleY(0)",opacity:"0"},{transform:"scaleY(1)",opacity:"1"}],{duration:200,easing:"cubic-bezier(0.4, 0, 0.2, 1)"});let i=this.paletteContainer.offsetTop+e.offsetTop+(e.parentElement?e.parentElement.offsetTop:0);this.contrastDetails&&(i+=this.contrastDetails.element().offsetHeight),this.shadesContainer.style.top=i+"px",this.shadesContainer.style.left=e.offsetLeft+"px",e.classList.add("spectrum-shades-shown");const n=Rt.get(t);if(n!==void 0)for(let r=n.length-1;r>=0;r--){const l=this.createPaletteColor(n[r],void 0,r*200/n.length+100);pe(l),N(l,I(P.colorS,{PH1:n[r]})),l.tabIndex=-1,l.addEventListener("mousedown",this.paletteColorSelected.bind(this,n[r],n[r],!1)),l.addEventListener("focus",this.paletteColorSelected.bind(this,n[r],n[r],!1)),l.addEventListener("keydown",this.onShadeColorKeydown.bind(this,e)),this.shadesContainer.appendChild(l)}this.shadesContainer.childNodes.length>0&&this.shadesContainer.childNodes[this.shadesContainer.childNodes.length-1].focus(),this.shadesCloseHandler=s.bind(this,e),this.shadesContainer.ownerDocument.addEventListener("mousedown",this.shadesCloseHandler,!0)}slotIndexForEvent(e){const t=e,o=t.pageX-this.paletteContainer.getBoundingClientRect().left,s=t.pageY-this.paletteContainer.getBoundingClientRect().top,i=Math.min(o/re|0,Q-1),n=s/re|0;return Math.min(n*Q+i,this.customPaletteSetting.get().colors.length-1)}isDraggingToBin(e){return e.pageX>this.deleteIconToolbar.element.getBoundingClientRect().left}paletteDragStart(e){const t=To(e);if(!t||!mt.get(t))return!1;const o=this.slotIndexForEvent(e);this.dragElement=t;const s=e;return this.dragHotSpotX=s.pageX-o%Q*re,this.dragHotSpotY=s.pageY-(o/Q|0)*re,!0}paletteDrag(e){const t=e;if(t.pageX<this.paletteContainer.getBoundingClientRect().left||t.pageY<this.paletteContainer.getBoundingClientRect().top||!this.dragElement||this.dragHotSpotX===void 0||this.dragHotSpotY===void 0)return;const o=this.slotIndexForEvent(e),s=t.pageX-o%Q*re,i=t.pageY-(o/Q|0)*re,n=this.isDraggingToBin(e);this.deleteIconToolbar.element.classList.add("dragging"),this.deleteIconToolbar.element.classList.toggle("delete-color-toolbar-active",n);const r="translateX("+(s-this.dragHotSpotX)+"px) translateY("+(i-this.dragHotSpotY)+"px)";this.dragElement.style.transform=n?r+" scale(0.8)":r;const l=[...this.paletteContainer.children],d=l.indexOf(this.dragElement),h=new Map;for(const c of l)h.set(c,c.getBoundingClientRect());d!==o&&this.paletteContainer.insertBefore(this.dragElement,l[o>d?o+1:o]);for(const c of l){if(c===this.dragElement)continue;const b=h.get(c),y=c.getBoundingClientRect();b&&(b.left!==y.left||b.top!==y.top)&&c.animate([{transform:"translateX("+(b.left-y.left)+"px) translateY("+(b.top-y.top)+"px)"},{transform:"none"}],{duration:100,easing:"cubic-bezier(0, 0, 0.2, 1)"})}}paletteDragEnd(e){if(!this.dragElement)return;this.isDraggingToBin(e)&&this.dragElement.remove(),this.dragElement.style.removeProperty("transform");const t=this.paletteContainer.children,o=[];for(let i=0;i<t.length;++i){const n=vt.get(t[i]);n&&o.push(n)}const s=this.customPaletteSetting.get();s.colors=o,this.customPaletteSetting.set(s),this.showPalette(s,!1),this.deleteIconToolbar.element.classList.remove("dragging"),this.deleteIconToolbar.element.classList.remove("delete-color-toolbar-active")}loadPalettes(){this.palettes.set(Be.title,Be);const e={title:"Custom",colors:[],colorNames:[],mutable:!0,matchUserFormat:void 0};this.customPaletteSetting=ht.instance().createSetting("custom-color-palette",e);const t=this.customPaletteSetting.get();t.colorNames=t.colorNames||[],this.palettes.set(t.title,t),this.selectedColorPalette=ht.instance().createSetting("selected-color-palette",Dt);const o=this.palettes.get(this.selectedColorPalette.get());o&&this.showPalette(o,!0)}addPalette(e){this.palettes.set(e.title,e),this.selectedColorPalette.get()===e.title&&this.showPalette(e,!0)}createPreviewPaletteElement(e){const o=document.createElement("div");o.classList.add("palette-preview"),pe(o),o.tabIndex=0;const s=o.createChild("div","palette-preview-title");s.textContent=e.title;let i;for(i=0;i<5&&i<e.colors.length;i++)o.appendChild(this.createPaletteColor(e.colors[i],e.colorNames[i]));for(;i<5;i++)o.createChild("div","spectrum-palette-color empty-color");return self.onInvokeElement(o,n=>{this.paletteSelected(e),n.consume(!0)}),o}paletteSelected(e){this.selectedColorPalette.set(e.title),this.showPalette(e,!0)}resizeForSelectedPalette(e){const t=this.palettes.get(this.selectedColorPalette.get());if(!t)return;let o=t.colors.length;t===this.customPaletteSetting.get()&&o++;const s=Math.max(1,Math.ceil(o/Q));if(this.numPaletteRowsShown===s&&!e)return;this.numPaletteRowsShown=s;const i=12,n=12;let r=236;this.contrastDetails&&(this.contrastDetails.expanded()?r+=78:r+=36),this.element.style.height=r+n+(i+n)*s+"px",this.dispatchEventToListeners("SizeChanged")}paletteColorSelected(e,t,o){const s=w(e);s&&this.innerSetColor(s,e,t,o?this.colorFormat:s.format(),R.Other)}onPaletteColorKeydown(e,t){const o=t;let s;switch(o.key){case"ArrowLeft":s=e-1;break;case"ArrowRight":s=e+1;break;case"ArrowUp":s=e-Q;break;case"ArrowDown":s=e+Q;break}s!==void 0&&s>-1&&s<this.paletteContainer.childNodes.length&&this.paletteContainer.childNodes[s].focus()}onShadeColorKeydown(e,t){const o=t.target;lt(t)||t.key==="Tab"?(e.focus(),this.shadesCloseHandler&&this.shadesCloseHandler(),t.consume(!0)):t.key==="ArrowUp"&&o.previousElementSibling?(o.previousElementSibling.focus(),t.consume(!0)):t.key==="ArrowDown"&&o.nextElementSibling&&(o.nextElementSibling.focus(),t.consume(!0))}onAddColorMousedown(){this.addColorToCustomPalette()}onAddColorKeydown(e){ct(e)&&(this.addColorToCustomPalette(),e.consume(!0))}addColorToCustomPalette(){const e=this.customPaletteSetting.get();e.colors.push(this.colorString()),this.customPaletteSetting.set(e),this.showPalette(e,!1);const t=this.paletteContainer.querySelectorAll(".spectrum-palette-color");t[t.length-1].focus()}showPaletteColorContextMenu(e,t){if(!this.paletteContainerMutable)return;const o=new St(t);e!==-1&&(o.defaultSection().appendItem(I(P.removeColor),this.deletePaletteColors.bind(this,e,!1),{jslogContext:"remove-color"}),o.defaultSection().appendItem(I(P.removeAllToTheRight),this.deletePaletteColors.bind(this,e,!0),{jslogContext:"remove-all-to-the-right"})),o.defaultSection().appendItem(I(P.clearPalette),this.deletePaletteColors.bind(this,-1,!0),{jslogContext:"clear-palette"}),o.show()}deletePaletteColors(e,t){const o=this.customPaletteSetting.get();t?o.colors.splice(e+1,o.colors.length-e-1):o.colors.splice(e,1),this.customPaletteSetting.set(o),this.showPalette(o,!1)}setColor(e){this.innerSetColor(e,"",void 0,e.format(),R.Model);const t=e.as("hsl").canonicalHSLA();rt(this.hueElement,t[0]),at(this.alphaElement,t[3])}colorSelected(e){this.innerSetColor(e,"",void 0,void 0,R.Other)}get color(){return this.colorInternal?this.colorInternal:Ie(this.gamut,this.hsv)}innerSetColor(e,t,o,s,i){if(t!==void 0&&(this.colorStringInternal=t),s!==void 0&&(this.colorFormat=cs(s),this.gamut=bt(this.colorFormat)?"display-p3":"srgb"),Array.isArray(e))this.colorInternal=void 0,this.hsv=e;else if(e!==void 0){this.colorInternal=e;const n=this.hsv?this.hsv[0]:null;this.hsv=ds(this.gamut,e),n!==null&&e.as("lch").isHuePowerless()&&(this.hsv[0]=n)}this.colorNameInternal=o,this.contrastInfo&&this.contrastInfo.setColor(q.fromHSVA(this.hsv),this.colorFormat),this.updateHelperLocations(),this.updateUI(),i!==R.Input&&this.updateInput(),i!==R.Model&&this.dispatchEventToListeners("ColorChanged",this.colorString())}colorName(){return this.colorNameInternal}colorString(){if(this.colorStringInternal)return this.colorStringInternal;const e=this.color;let t=this.colorFormat&&this.colorFormat!==e.format()?e.asString(this.colorFormat):e.getAuthoredText()??e.asString();return t||(this.colorFormat==="hex"?t=e.asString("hexa"):this.colorFormat==="hsl"?t=e.asString("hsla"):this.colorFormat==="hwb"?t=e.asString("hwba"):t=e.asString("rgba"),console.assert(!!t),t||"")}updateHelperLocations(){const e=this.hsv[0],t=this.hsv[1],o=this.hsv[2],s=this.hsv[3];this.dragX=t*this.dragWidth,this.dragY=this.dragHeight-o*this.dragHeight;const i=Math.max(-this.colorDragElementHeight,Math.min(this.dragWidth-this.colorDragElementHeight,this.dragX-this.colorDragElementHeight)),n=Math.max(-this.colorDragElementHeight,Math.min(this.dragHeight-this.colorDragElementHeight,this.dragY-this.colorDragElementHeight));this.colorDragElement.positionAt(i,n);const r=(1-e)*this.hueAlphaWidth-this.slideHelperWidth;this.hueSlider.style.left=r+"px";const l=s*this.hueAlphaWidth-this.slideHelperWidth;this.alphaSlider.style.left=l+"px"}updateInput(){if(this.colorFormat==="hex")this.hexContainer.hidden=!1,this.displayContainer.hidden=!0,this.hexValue.value=this.color.asString((this.color.alpha??1)!==1?"hexa":"hex");else{this.hexContainer.hidden=!0,this.displayContainer.hidden=!1;const e=gt[this.colorFormat],t=e.toValues(this.color);this.textLabels.textContent=e.label;for(let o=0;o<this.textValues.length;++o)N(this.textValues[o],I(P.sInS,{PH1:this.textLabels.textContent.charAt(o),PH2:this.textLabels.textContent})),this.textValues[o].value=String(t[o])}}hideSrgbOverlay(){this.colorElement.contains(this.srgbOverlay)&&this.colorElement.removeChild(this.srgbOverlay)}showSrgbOverlay(){this.contrastDetails&&this.contrastDetails.expanded()||this.gamut!=="display-p3"||(this.srgbOverlay.render({hue:this.hsv[0],width:this.dragWidth,height:this.dragHeight}),this.colorElement.contains(this.srgbOverlay)||this.colorElement.appendChild(this.srgbOverlay))}updateSrgbOverlay(){this.gamut==="display-p3"?this.showSrgbOverlay():this.hideSrgbOverlay()}updateUI(){this.colorElement.style.backgroundColor=Ie(this.gamut,[this.hsv[0],1,1,1]).asString(),this.contrastOverlay&&this.contrastOverlay.setDimensions(this.dragWidth,this.dragHeight),this.updateSrgbOverlay(),this.swatch.setColor(this.color,this.colorString()),this.colorDragElement.style.backgroundColor=this.color.asString("lch");const e=q.fromHSVA(this.hsv.slice(0,3).concat(1));this.alphaElementBackground.style.backgroundImage=dt("linear-gradient(to right, rgba(0,0,0,0), %s)",e.asString("lch")),this.hueElement.classList.toggle("display-p3",bt(this.colorFormat))}async showFormatPicker(e){const t=new es(this.color);this.isFormatPickerShown=!0,await t.show(e,o=>{this.innerSetColor(o,void 0,void 0,o.format(),R.Other)}),this.isFormatPickerShown=!1}pasted(e){if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),o=w(t);o&&(this.innerSetColor(o,t,void 0,void 0,R.Other),e.preventDefault())}inputChanged(e){const t=e.currentTarget,o=Lo(t.value,e);o&&(t.value=o,t.selectionStart=0,t.selectionEnd=o.length,e.consume(!0));let s=null,i;if(this.colorFormat==="hex")s=w(this.hexValue.value);else{const n=gt[this.colorFormat],r=this.textValues.map(l=>l.value);if(r.length!==4)return;s=n.fromValues(r)}s&&this.innerSetColor(s,void 0,void 0,i,R.Input)}wasShown(){this.registerCSSFiles([$t]),this.hueAlphaWidth=this.hueElement.offsetWidth,this.slideHelperWidth=this.hueSlider.offsetWidth/2,this.dragWidth=this.colorElement.offsetWidth,this.dragHeight=this.colorElement.offsetHeight,this.colorDragElementHeight=this.colorDragElement.offsetHeight/2,this.innerSetColor(void 0,void 0,void 0,void 0,R.Model),Pe?this.colorPickerButton.setToggled(!1):this.toggleColorPicker(!0),this.contrastDetails&&this.contrastDetailsBackgroundColorPickedToggledBound&&this.contrastDetails.addEventListener("BackgroundColorPickerWillBeToggled",this.contrastDetailsBackgroundColorPickedToggledBound)}willHide(){this.toggleColorPicker(!1),this.contrastDetails&&this.contrastDetailsBackgroundColorPickedToggledBound&&this.contrastDetails.removeEventListener("BackgroundColorPickerWillBeToggled",this.contrastDetailsBackgroundColorPickedToggledBound)}async toggleColorPicker(e){if(e===void 0&&(e=this.colorPickerButton.isToggled()),this.contrastDetails&&e&&this.contrastDetails.backgroundColorPickerEnabled()&&this.contrastDetails.toggleBackgroundColorPicker(!1),!Pe)j.setEyeDropperActive(e),e?j.events.addEventListener($e.EyeDropperPickedColor,this.colorPickedBound):j.events.removeEventListener($e.EyeDropperPickedColor,this.colorPickedBound);else if(Pe&&e){const t=new window.EyeDropper;this.eyeDropperAbortController=new AbortController;try{const o=await t.open({signal:this.eyeDropperAbortController.signal}),s=w(o.sRGBHex);this.innerSetColor(s??void 0,"",void 0,void 0,R.Other)}catch(o){o.name!=="AbortError"&&console.error(o)}this.colorPickerButton.setToggled(!1)}else Pe&&!e&&(this.eyeDropperAbortController?.abort(),this.eyeDropperAbortController=null)}colorPicked({data:e}){const t=[e.r,e.g,e.b,(e.a/2.55|0)/100],o=q.fromRGBA(t);this.innerSetColor(o,"",void 0,void 0,R.Other),j.bringToFront()}}const R={Input:"Input",Model:"Model",Other:"Other"},re=24,Q=8,Dt="Page colors";class hs{callback;frequencyMap;constructor(e){this.callback=e,this.frequencyMap=new Map;const t=[];for(const o of $o.instance().models(Pt))for(const s of o.allStyleSheets())t.push(this.processStylesheet(s));Promise.all(t).catch(o=>{console.error(o)}).then(this.finish.bind(this))}frequencyComparator(e,t){return this.frequencyMap.get(t)-this.frequencyMap.get(e)}finish(){function e(i,n){const r=o.get(i).as("hsl").hsva(),l=o.get(n).as("hsl").hsva();return l[1]<.12&&r[1]<.12?l[2]*l[3]-r[2]*r[3]:l[1]<.12?-1:r[1]<.12?1:l[0]===r[0]?l[1]*l[3]-r[1]*r[3]:(l[0]+.94)%1-(r[0]+.94)%1}let t=[...this.frequencyMap.keys()];t=t.sort(this.frequencyComparator.bind(this));const o=new Map,s=24;for(;o.size<s&&t.length;){const i=t.shift(),n=w(i);n&&o.set(i,n)}this.callback({title:Dt,colors:[...o.keys()].sort(e),colorNames:[],mutable:!1,matchUserFormat:void 0})}async processStylesheet(e){let t=(await e.requestContent()).content||"";t=t.toLowerCase();const o=t.matchAll(/((?:rgb|hsl|hwb)a?\([^)]+\)|#[0-9a-f]{6}|#[0-9a-f]{3})/g);for(const{0:s,index:i}of o){if(t.indexOf(";",i)<0||t.indexOf(":",i)>-1&&t.indexOf(":",i)<t.indexOf(";",i))continue;const n=1+(this.frequencyMap.get(s)??0);this.frequencyMap.set(s,n)}}}const Rt=new Map([["#F44336",["#FFEBEE","#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71C1C"]],["#E91E63",["#FCE4EC","#F8BBD0","#F48FB1","#F06292","#EC407A","#E91E63","#D81B60","#C2185B","#AD1457","#880E4F"]],["#9C27B0",["#F3E5F5","#E1BEE7","#CE93D8","#BA68C8","#AB47BC","#9C27B0","#8E24AA","#7B1FA2","#6A1B9A","#4A148C"]],["#673AB7",["#EDE7F6","#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92"]],["#3F51B5",["#E8EAF6","#C5CAE9","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB","#303F9F","#283593","#1A237E"]],["#2196F3",["#E3F2FD","#BBDEFB","#90CAF9","#64B5F6","#42A5F5","#2196F3","#1E88E5","#1976D2","#1565C0","#0D47A1"]],["#03A9F4",["#E1F5FE","#B3E5FC","#81D4FA","#4FC3F7","#29B6F6","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B"]],["#00BCD4",["#E0F7FA","#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F","#006064"]],["#009688",["#E0F2F1","#B2DFDB","#80CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40"]],["#4CAF50",["#E8F5E9","#C8E6C9","#A5D6A7","#81C784","#66BB6A","#4CAF50","#43A047","#388E3C","#2E7D32","#1B5E20"]],["#8BC34A",["#F1F8E9","#DCEDC8","#C5E1A5","#AED581","#9CCC65","#8BC34A","#7CB342","#689F38","#558B2F","#33691E"]],["#CDDC39",["#F9FBE7","#F0F4C3","#E6EE9C","#DCE775","#D4E157","#CDDC39","#C0CA33","#AFB42B","#9E9D24","#827717"]],["#FFEB3B",["#FFFDE7","#FFF9C4","#FFF59D","#FFF176","#FFEE58","#FFEB3B","#FDD835","#FBC02D","#F9A825","#F57F17"]],["#FFC107",["#FFF8E1","#FFECB3","#FFE082","#FFD54F","#FFCA28","#FFC107","#FFB300","#FFA000","#FF8F00","#FF6F00"]],["#FF9800",["#FFF3E0","#FFE0B2","#FFCC80","#FFB74D","#FFA726","#FF9800","#FB8C00","#F57C00","#EF6C00","#E65100"]],["#FF5722",["#FBE9E7","#FFCCBC","#FFAB91","#FF8A65","#FF7043","#FF5722","#F4511E","#E64A19","#D84315","#BF360C"]],["#795548",["#EFEBE9","#D7CCC8","#BCAAA4","#A1887F","#8D6E63","#795548","#6D4C41","#5D4037","#4E342E","#3E2723"]],["#9E9E9E",["#FAFAFA","#F5F5F5","#EEEEEE","#E0E0E0","#BDBDBD","#9E9E9E","#757575","#616161","#424242","#212121"]],["#607D8B",["#ECEFF1","#CFD8DC","#B0BEC5","#90A4AE","#78909C","#607D8B","#546E7A","#455A64","#37474F","#263238"]]]),Be={title:"Material",mutable:!1,matchUserFormat:!0,colors:[...Rt.keys()],colorNames:[]};class us{colorString;swatchInnerElement;swatchOverlayElement;swatchCopyIcon;constructor(e){const t=e.createChild("span","swatch");t.setAttribute("jslog",`${Te("copy-color").track({click:!0})}`),this.swatchInnerElement=t.createChild("span","swatch-inner"),this.swatchOverlayElement=t.createChild("span","swatch-overlay"),pe(this.swatchOverlayElement),Ve(this.swatchOverlayElement,!1),this.swatchOverlayElement.tabIndex=0,self.onInvokeElement(this.swatchOverlayElement,this.onCopyText.bind(this)),this.swatchOverlayElement.addEventListener("mouseout",this.onCopyIconMouseout.bind(this)),this.swatchOverlayElement.addEventListener("blur",this.onCopyIconMouseout.bind(this)),this.swatchCopyIcon=Fe("copy","copy-color-icon"),ve.install(this.swatchCopyIcon,I(P.copyColorToClipboard)),this.swatchOverlayElement.appendChild(this.swatchCopyIcon),N(this.swatchOverlayElement,this.swatchCopyIcon.title)}setColor(e,t){const o=e.as("lch");this.swatchInnerElement.style.backgroundColor=o.asString(),this.swatchInnerElement.classList.toggle("swatch-inner-white",o.l>90),this.colorString=t||null,t?this.swatchOverlayElement.hidden=!1:this.swatchOverlayElement.hidden=!0}onCopyText(e){this.swatchCopyIcon.name="checkmark",j.copyText(this.colorString),Ve(this.swatchOverlayElement,!0),e.consume()}onCopyIconMouseout(){this.swatchCopyIcon.name="copy",Ve(this.swatchOverlayElement,!1)}}const ee={topAppliedToAStatically:"`Top` applied to a statically positioned element",leftAppliedToAStatically:"`Left` applied to a statically positioned element",rightAppliedToAStatically:"`Right` applied to a statically positioned element",bottomAppliedToAStatically:"`Bottom` applied to a statically positioned element",widthAppliedToAnInlineElement:"`Width` applied to an inline element",heightAppliedToAnInlineElement:"`Height` applied to an inline element",verticalAlignmentAppliedTo:"Vertical alignment applied to element which is neither `inline` nor `table-cell`"},ps=te("panels/css_overview/CSSOverviewUnusedDeclarations.ts",ee),se=oe.bind(void 0,ps);class Le{static add(e,t,o){const s=e.get(t)||[];s.push(o),e.set(t,s)}static checkForUnusedPositionValues(e,t,o,s,i,n,r,l){if(o[s]==="static"){if(o[i]!=="auto"){const d=se(ee.topAppliedToAStatically);this.add(e,d,{declaration:`top: ${o[i]}`,nodeId:t})}if(o[n]!=="auto"){const d=se(ee.leftAppliedToAStatically);this.add(e,d,{declaration:`left: ${o[n]}`,nodeId:t})}if(o[r]!=="auto"){const d=se(ee.rightAppliedToAStatically);this.add(e,d,{declaration:`right: ${o[r]}`,nodeId:t})}if(o[l]!=="auto"){const d=se(ee.bottomAppliedToAStatically);this.add(e,d,{declaration:`bottom: ${o[l]}`,nodeId:t})}}}static checkForUnusedWidthAndHeightValues(e,t,o,s,i,n){if(o[s]==="inline"){if(o[i]!=="auto"){const r=se(ee.widthAppliedToAnInlineElement);this.add(e,r,{declaration:`width: ${o[i]}`,nodeId:t})}if(o[n]!=="auto"){const r=se(ee.heightAppliedToAnInlineElement);this.add(e,r,{declaration:`height: ${o[n]}`,nodeId:t})}}}static checkForInvalidVerticalAlignment(e,t,o,s,i){if(!(!o[s]||o[s].startsWith("inline")||o[s].startsWith("table"))&&o[i]!=="baseline"){const n=se(ee.verticalAlignmentAppliedTo);this.add(e,n,{declaration:`vertical-align: ${o[i]}`,nodeId:t})}}}const Fs=Object.freeze(Object.defineProperty({__proto__:null,CSSOverviewUnusedDeclarations:Le},Symbol.toStringTag,{value:"Module"}));class Mt extends It{#e;#o;#t;#s;constructor(e){super(e),this.#e=e.runtimeAgent(),this.#o=e.cssAgent(),this.#t=e.domsnapshotAgent(),this.#s=e.overlayAgent()}highlightNode(e){const t={contentColor:Ro.Content.toProtocolRGBA(),showInfo:!0,contrastAlgorithm:J.isEnabled("apca")?"apca":"aa"};this.#s.invoke_hideHighlight(),this.#s.invoke_highlightNode({backendNodeId:e,highlightConfig:t})}async getNodeStyleStats(){const e=new Map,t=new Map,o=new Map,s=new Map,i=new Map,n=new Map,r=new Map,l={computedStyles:["background-color","color","fill","border-top-width","border-top-color","border-bottom-width","border-bottom-color","border-left-width","border-left-color","border-right-width","border-right-color","font-family","font-size","font-weight","line-height","position","top","right","bottom","left","display","width","height","vertical-align"],includeTextColorOpacities:!0,includeBlendedBackgroundColors:!0},d=x=>x instanceof q?x.hasAlpha()?x.asString("hexa"):x.asString("hex"):x.asString(),h=(x,E,u)=>{if(x===-1)return;const f=C[x];if(!f)return;const m=w(f);if(!m||m.asLegacyColor().rgba()[3]===0)return;const v=d(m);if(!v)return;const k=u.get(v)||new Set;return k.add(E),u.set(v,k),m},c=x=>new Set(["altglyph","circle","ellipse","path","polygon","polyline","rect","svg","text","textpath","tref","tspan"]).has(x.toLowerCase()),b=x=>new Set(["iframe","video","embed","img"]).has(x.toLowerCase()),y=(x,E)=>new Set(["tr","td","thead","tbody"]).has(x.toLowerCase())&&E.startsWith("table");let S=0;const{documents:A,strings:C}=await this.#t.invoke_captureSnapshot(l);for(const{nodes:x,layout:E}of A){S+=E.nodeIndex.length;for(let u=0;u<E.styles.length;u++){const f=E.styles[u],m=E.nodeIndex[u];if(!x.backendNodeId||!x.nodeName)continue;const v=x.backendNodeId[m],k=x.nodeName[m],[F,W,_,$,U,Gt,jt,qt,Kt,Xt,Yt,De,we,xe,je,Qt,Jt,Zt,eo,to,Re,oo,so,qe]=f;h(F,v,e);const Me=h(W,v,t);if(c(C[k])&&h(_,v,s),C[$]!=="0px"&&h(U,v,i),C[Gt]!=="0px"&&h(jt,v,i),C[qt]!=="0px"&&h(Kt,v,i),C[Xt]!=="0px"&&h(Yt,v,i),De&&De!==-1){const K=C[De],H=n.get(K)||new Map,ye="font-size",Se="font-weight",X="line-height",O=H.get(ye)||new Map,Y=H.get(Se)||new Map,G=H.get(X)||new Map;if(we!==-1){const D=C[we],Z=O.get(D)||[];Z.push(v),O.set(D,Z)}if(xe!==-1){const D=C[xe],Z=Y.get(D)||[];Z.push(v),Y.set(D,Z)}if(je!==-1){const D=C[je],Z=G.get(D)||[];Z.push(v),G.set(D,Z)}H.set(ye,O),H.set(Se,Y),H.set(X,G),n.set(K,H)}const de=Me&&E.blendedBackgroundColors&&E.blendedBackgroundColors[u]!==-1?w(C[E.blendedBackgroundColors[u]]):null;if(Me&&de){const K=new Xo({backgroundColors:[de.asString("hexa")],computedFontSize:we!==-1?C[we]:"",computedFontWeight:xe!==-1?C[xe]:""}),H=Me.asLegacyColor().blendWithAlpha(E.textColorOpacities?E.textColorOpacities[u]:1);K.setColor(H);const ye=d(H),Se=d(de.asLegacyColor()),X=`${ye}_${Se}`;if(J.isEnabled("apca")){const O=K.contrastRatioAPCA(),Y=K.contrastRatioAPCAThreshold();if(!(O&&Y?Math.abs(O)>=Y:!1)&&O){const D={nodeId:v,contrastRatio:O,textColor:H,backgroundColor:de,thresholdsViolated:{aa:!1,aaa:!1,apca:!0}};o.has(X)?o.get(X).push(D):o.set(X,[D])}}else{const O=K.contrastRatioThreshold("aa")||0,Y=K.contrastRatioThreshold("aaa")||0,G=K.contrastRatio()||0;if(O>G||Y>G){const D={nodeId:v,contrastRatio:G,textColor:H,backgroundColor:de,thresholdsViolated:{aa:O>G,aaa:Y>G,apca:!1}};o.has(X)?o.get(X).push(D):o.set(X,[D])}}}Le.checkForUnusedPositionValues(r,v,C,Qt,Jt,to,Zt,eo),!c(C[k])&&!b(C[k])&&Le.checkForUnusedWidthAndHeightValues(r,v,C,Re,oo,so),qe!==-1&&!y(C[k],C[Re])&&Le.checkForInvalidVerticalAlignment(r,v,C,Re,qe)}}return{backgroundColors:e,textColors:t,textColorContrastIssues:o,fillColors:s,borderColors:i,fontInfo:n,unusedDeclarations:r,elementCount:S}}getComputedStyleForNode(e){return this.#o.invoke_getComputedStyleForNode({nodeId:e})}async getMediaQueries(){const e=await this.#o.invoke_getMediaQueries(),t=new Map;if(!e)return t;for(const o of e.medias){if(o.source==="linkedSheet")continue;const s=t.get(o.text)||[];s.push(o),t.set(o.text,s)}return t}async getGlobalStylesheetStats(){const e=`(function() {
      let styleRules = 0;
      let inlineStyles = 0;
      let externalSheets = 0;
      const stats = {
        // Simple.
        type: new Set(),
        class: new Set(),
        id: new Set(),
        universal: new Set(),
        attribute: new Set(),

        // Non-simple.
        nonSimple: new Set()
      };

      for (const styleSheet of document.styleSheets) {
        if (styleSheet.href) {
          externalSheets++;
        } else {
          inlineStyles++;
        }

        // Attempting to grab rules can trigger a DOMException.
        // Try it and if it fails skip to the next stylesheet.
        let rules;
        try {
          rules = styleSheet.rules;
        } catch (err) {
          continue;
        }

        for (const rule of rules) {
          if ('selectorText' in rule) {
            styleRules++;

            // Each group that was used.
            for (const selectorGroup of rule.selectorText.split(',')) {
              // Each selector in the group.
              for (const selector of selectorGroup.split(/[\\t\\n\\f\\r ]+/g)) {
                if (selector.startsWith('.')) {
                  // Class.
                  stats.class.add(selector);
                } else if (selector.startsWith('#')) {
                  // Id.
                  stats.id.add(selector);
                } else if (selector.startsWith('*')) {
                  // Universal.
                  stats.universal.add(selector);
                } else if (selector.startsWith('[')) {
                  // Attribute.
                  stats.attribute.add(selector);
                } else {
                  // Type or non-simple selector.
                  const specialChars = /[#.:\\[\\]|\\+>~]/;
                  if (specialChars.test(selector)) {
                    stats.nonSimple.add(selector);
                  } else {
                    stats.type.add(selector);
                  }
                }
              }
            }
          }
        }
      }

      return {
        styleRules,
        inlineStyles,
        externalSheets,
        stats: {
          // Simple.
          type: stats.type.size,
          class: stats.class.size,
          id: stats.id.size,
          universal: stats.universal.size,
          attribute: stats.attribute.size,

          // Non-simple.
          nonSimple: stats.nonSimple.size
        }
      }
    })()`,{result:t}=await this.#e.invoke_evaluate({expression:e,returnByValue:!0});if(t.type==="object")return t.value}}It.register(Mt,{capabilities:2,autostart:!1});const Ts=Object.freeze(Object.defineProperty({__proto__:null,CSSOverviewModel:Mt},Symbol.toStringTag,{value:"Module"})),Vt=new CSSStyleSheet;Vt.replaceSync(`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-processing-view {
  overflow: hidden;
  padding: 16px;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.overview-processing-view h1 {
  font-size: 16px;
  text-align: center;
  font-weight: normal;
  margin: 0;
  padding: 8px;
}

.overview-processing-view h2 {
  font-size: 12px;
  text-align: center;
  font-weight: normal;
  margin: 0;
  padding-top: 32px;
}

/*# sourceURL=cssOverviewProcessingView.css */
`);const Ht={cancel:"Cancel"},gs=te("panels/css_overview/CSSOverviewProcessingView.ts",Ht),fs=oe.bind(void 0,gs);class ms extends Bt{#e;fragment;constructor(e){super(),this.#e=e,this.#o()}#o(){const e=Mo(fs(Ht.cancel),()=>this.#e.dispatchEventToListeners("RequestOverviewCancel"),{jslogContext:"css-overview.cancel-processing",variant:"outlined"});this.setDefaultFocusedElement(e),this.fragment=B.build`
      <div class="vbox overview-processing-view">
        <h1>Processing page</h1>
        <div>${e}</div>
      </div>
    `,this.contentElement.appendChild(this.fragment.element()),this.contentElement.style.overflow="auto"}wasShown(){super.wasShown(),this.registerCSSFiles([Vt])}}const Ls=Object.freeze(Object.defineProperty({__proto__:null,CSSOverviewProcessingView:ms},Symbol.toStringTag,{value:"Module"})),Ne=new CSSStyleSheet;Ne.replaceSync(`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-completed-view {
  overflow: auto;

  --overview-default-padding: 28px;
  --overview-icon-padding: 32px;
}

.overview-completed-view .summary ul,
.overview-completed-view .colors ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.overview-completed-view .summary ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-gap: 16px;
}

.overview-completed-view .colors ul li {
  display: inline-block;
  margin: 0 0 16px;
  padding: 0 8px 0 0;
}

.overview-completed-view .summary ul li {
  display: flex;
  flex-direction: column;
  grid-column-start: auto;
}

.overview-completed-view li .label {
  font-size: 12px;
  padding-bottom: 2px;
}

.overview-completed-view li .value {
  font-size: 17px;
}

.overview-completed-view ul li span {
  font-weight: bold;
}

.unused-rules-grid .header-container,
.unused-rules-grid .data-container,
.unused-rules-grid table.data {
  position: relative;
}

.unused-rules-grid .data-container {
  top: 0;
  max-height: 350px;
}

.unused-rules-grid {
  border-left: none;
  border-right: none;
}
/** Ensure links are rendered at the correct height */

.unused-rules-grid .monospace {
  display: block;
  height: 18px;
}

.element-grid {
  flex: 1;
  border-left: none;
  border-right: none;
  overflow: auto;
}

.block {
  width: 65px;
  height: 25px;
  border-radius: 3px;
  margin-right: 16px;
}

.block-title {
  padding-top: 4px;
  font-size: 12px;
  color: var(--sys-color-on-surface);
  letter-spacing: 0;
  text-transform: uppercase;
}

.block-title.color-text {
  text-transform: none;
  max-width: 65px;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  user-select: text;
  overflow: hidden;
}

.results-section {
  flex-shrink: 0;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: var(--overview-default-padding) 0 var(--overview-default-padding) 0;
}

.horizontally-padded {
  padding-left: var(--overview-default-padding);
  padding-right: var(--overview-default-padding);
}

.results-section h1 {
  font-size: 15px;
  font-weight: normal;
  padding: 0;
  margin: 0 0 20px;
  padding-left: calc(var(--overview-default-padding) + var(--overview-icon-padding));
  position: relative;
  height: 26px;
  line-height: 26px;
}

.results-section h1::before {
  content: "";
  display: block;
  position: absolute;
  left: var(--overview-default-padding);
  top: 0;
  width: 26px;
  height: 26px;
  background-image: var(--image-file-cssoverview_icons_2x);
  background-size: 104px 26px;
}

.results-section.horizontally-padded h1 {
  padding-left: var(--overview-icon-padding);
}

.results-section.horizontally-padded h1::before {
  left: 0;
}

.results-section.summary h1 {
  padding-left: 0;
}

.results-section.summary h1::before {
  display: none;
}

.results-section.colors h1::before {
  background-position: 0 0;
}

.results-section.font-info h1::before {
  background-position: -26px 0;
}

.results-section.unused-declarations h1::before {
  background-position: -52px 0;
}

.results-section.media-queries h1::before {
  background-position: -78px 0;
}

.results-section.colors h2 {
  margin-top: 20px;
  font-size: 13px;
  font-weight: normal;
}

.overview-completed-view .font-info ul,
.overview-completed-view .media-queries ul,
.overview-completed-view .unused-declarations ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0 var(--overview-default-padding);
}

.overview-completed-view .font-info ul li,
.overview-completed-view .media-queries ul li,
.overview-completed-view .unused-declarations ul li {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 12px;
  margin-bottom: 4px;
  align-items: center;
}

.overview-completed-view .font-info button .details,
.overview-completed-view .media-queries button .details,
.overview-completed-view .unused-declarations button .details {
  min-width: 100px;
  text-align: right;
  margin-right: 8px;
  color: var(--sys-color-primary);
  pointer-events: none;
}

.overview-completed-view .font-info button .bar-container,
.overview-completed-view .media-queries button .bar-container,
.overview-completed-view .unused-declarations button .bar-container {
  flex: 1;
  pointer-events: none;
}

.overview-completed-view .font-info button .bar,
.overview-completed-view .media-queries button .bar,
.overview-completed-view .unused-declarations button .bar {
  height: 8px;
  background: var(--sys-color-primary-bright);
  border-radius: 2px;
  min-width: 2px;
}

.overview-completed-view .font-info button,
.overview-completed-view .media-queries button,
.overview-completed-view .unused-declarations button {
  border: none;
  padding: 0;
  padding-right: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  height: 28px;
  background: none;

  &:focus-visible {
    outline: 2px solid var(--sys-color-state-focus-ring);
  }

  &:hover {
    border-radius: 12px;
    background: var(--sys-color-state-hover-on-subtle);
  }

  &:hover .details,
  &:focus .details {
    color: color-mix(in sRGB, var(--sys-color-primary), var(--sys-color-state-hover-on-prominent) 6%);
  }

  &:hover .bar,
  &:focus .bar {
    background-color: color-mix(in sRGB, var(--sys-color-primary-bright), var(--sys-color-state-hover-on-prominent) 6%);
    color: var(--sys-color-on-primary);
  }
}

.overview-completed-view .font-info .font-metric {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 12px;
}

.overview-completed-view .font-info ul {
  padding: 0;
}

.overview-completed-view .font-info ul li {
  grid-template-columns: 1fr 4fr;
}

.overview-completed-view .font-info h2 {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 1em;
}

.overview-completed-view .font-info h3 {
  font-size: 13px;
  font-weight: normal;
  font-style: italic;
  margin: 0 0 0.5em;
}

.overview-completed-view .font-info {
  padding-bottom: 0;
}

.overview-completed-view .font-family {
  padding: var(--overview-default-padding);
}

.overview-completed-view .font-family:nth-child(2n+1) {
  background: var(--sys-color-cdt-base-container);
}

.overview-completed-view .font-family:first-of-type {
  padding-top: 0;
}

.contrast-warning {
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.contrast-warning .threshold-label {
  font-weight: normal;
  width: 30px;
}

.contrast-warning devtools-icon {
  margin-left: 2px;
}

.contrast-preview {
  padding: 0 5px;
}

.contrast-container-in-grid {
  display: flex;
  align-items: center;
}

.contrast-container-in-grid > * {
  margin-right: 5px;
  min-width: initial;
}

.data .nodeId-column {
  align-items: center;
  display: flex;
  height: 20px;
}

.nodeId-column .monospace {
  overflow: hidden;
}

.show-element {
  margin: 0 0 0 8px;
  display: none;
  cursor: pointer;
  flex: none;

  --icon-show-element: var(--icon-default);
}

.show-element:focus,
.show-element:hover {
  --icon-show-element: var(--icon-default-hover);
}

.nodeId-column:focus-within .show-element,
.nodeId-column:hover .show-element {
  display: inline-block;
}

.results-section.colors {
  forced-color-adjust: none; /* show colors in high contrast theme */
}

/*# sourceURL=cssOverviewCompletedView.css */
`);const Ot=new CSSStyleSheet;Ot.replaceSync(`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-sidebar-panel {
  overflow: auto;
  display: flex;
  background: var(--sys-color-cdt-base-container);
}

.overview-sidebar-panel-container {
  min-width: fit-content;
}

.overview-sidebar-panel-item {
  height: 30px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  color: var(--sys-color-on-surface);
  white-space: nowrap;

  &:hover {
    background: var(--sys-color-state-hover-on-subtle);
  }

  &:focus {
    background: var(--sys-color-state-focus-highlight);
  }

  &.selected {
    background: var(--sys-color-tonal-container);
    color: var(--sys-color-on-tonal-container);
  }
}

.overview-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.overview-sidebar-panel-item:focus-visible {
  outline-width: unset;
}

@media (forced-colors: active) {
  .overview-sidebar-panel-item.selected {
    forced-color-adjust: none; /* crbug.com/1166705 workaround */
    background: Highlight;
    color: HighlightText;
  }

  .overview-sidebar-panel-item:hover {
    forced-color-adjust: none; /* crbug.com/1166705 workaround */
    background: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=cssOverviewSidebarPanel.css */
`);const ze={clearOverview:"Clear overview",cssOverviewPanelSidebar:"CSS overview panel sidebar"},vs=te("panels/css_overview/CSSOverviewSidebarPanel.ts",ze),Ct=oe.bind(void 0,vs),he="overview-sidebar-panel-item",He="selected";class Nt extends Ue(be){containerElement;constructor(){super(!0),this.contentElement.classList.add("overview-sidebar-panel"),this.contentElement.addEventListener("click",this.#t.bind(this)),this.contentElement.addEventListener("keydown",this.#s.bind(this)),this.containerElement=this.contentElement.createChild("div","overview-sidebar-panel-container"),N(this.containerElement,Ct(ze.cssOverviewPanelSidebar)),Vo(this.containerElement);const e=new ge(Ct(ze.clearOverview),"clear",void 0,"css-overview.clear-overview");e.addEventListener("Click",this.#e,this);const t=this.containerElement.createChild("div","overview-toolbar");new ne("",t).appendToolbarItem(e)}addItem(e,t){const o=this.containerElement.createChild("div",he);o.setAttribute("jslog",`${Et().track({click:!0,keydown:"Enter|ArrowUp|ArrowDown"}).context(`css-overview.${t}`)}`),Ho(o),o.textContent=e,o.dataset.id=t,o.tabIndex=0}#e(){this.dispatchEventToListeners("Reset")}#o(){this.containerElement.querySelectorAll(`.${he}`).forEach(t=>{t.classList.remove(He)})}#t(e){const t=e.composedPath()[0];if(!t.classList.contains(he))return;const{id:o}=t.dataset;o&&(this.select(o,!1),this.dispatchEventToListeners("ItemSelected",{id:o,isMouseEvent:!0,key:void 0}))}#s(e){if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown")return;const t=e.composedPath()[0];if(!t.classList.contains(he))return;const{id:o}=t.dataset;if(o){if(e.key==="Enter")this.select(o,!1),this.dispatchEventToListeners("ItemSelected",{id:o,isMouseEvent:!1,key:e.key});else{const s=this.containerElement.querySelectorAll(`.${he}`);let i=-1;for(let d=0;d<s.length;d++)if(s[d].dataset.id===o){i=d;break}if(i<0)return;const n=e.key==="ArrowDown"?1:-1,r=(i+n)%s.length,l=s[r].dataset.id;if(!l)return;this.select(l,!0),this.dispatchEventToListeners("ItemSelected",{id:l,isMouseEvent:!1,key:e.key})}e.consume(!0)}}select(e,t){const o=this.containerElement.querySelector(`[data-id=${CSS.escape(e)}]`);o&&(o.classList.contains(He)||(this.#o(),o.classList.add(He),t&&(o.contentEditable="true",o.focus(),o.contentEditable="false")))}wasShown(){super.wasShown(),this.registerCSSFiles([Ot])}}const $s=Object.freeze(Object.defineProperty({__proto__:null,CSSOverviewSidebarPanel:Nt},Symbol.toStringTag,{value:"Module"})),p={overviewSummary:"Overview summary",colors:"Colors",fontInfo:"Font info",unusedDeclarations:"Unused declarations",mediaQueries:"Media queries",elements:"Elements",externalStylesheets:"External stylesheets",inlineStyleElements:"Inline style elements",styleRules:"Style rules",typeSelectors:"Type selectors",idSelectors:"ID selectors",classSelectors:"Class selectors",universalSelectors:"Universal selectors",attributeSelectors:"Attribute selectors",nonsimpleSelectors:"Non-simple selectors",backgroundColorsS:"Background colors: {PH1}",textColorsS:"Text colors: {PH1}",fillColorsS:"Fill colors: {PH1}",borderColorsS:"Border colors: {PH1}",thereAreNoFonts:"There are no fonts.",thereAreNoUnusedDeclarations:"There are no unused declarations.",thereAreNoMediaQueries:"There are no media queries.",contrastIssues:"Contrast issues",nOccurrences:"{n, plural, =1 {# occurrence} other {# occurrences}}",contrastIssuesS:"Contrast issues: {PH1}",textColorSOverSBackgroundResults:"Text color {PH1} over {PH2} background results in low contrast for {PH3} elements",aa:"AA",aaa:"AAA",apca:"APCA",element:"Element",declaration:"Declaration",source:"Source",contrastRatio:"Contrast ratio",cssOverviewElements:"CSS overview elements",showElement:"Show element"},bs=te("panels/css_overview/CSSOverviewCompletedView.ts",p),g=oe.bind(void 0,bs);function We(a){let{h:e,s:t,l:o}=a.as("hsl");return e=Math.round(e*360),t=Math.round(t*100),o=Math.round(o*100),o=Math.max(0,o-15),`1px solid hsl(${e}deg ${t}% ${o}%)`}class Ce extends be{#e;#o;#t;#s;#a;#i;#n;#l;#u;#f;#c;#r;#p;constructor(e){super(),this.#o=e,this.#t=new Intl.NumberFormat("en-US"),this.#e=new ut(!0,!1,void 0,200),this.#e.show(this.element),this.#s=new ut(!0,!0),this.#a=new be,this.#i=new zt,this.#i.addEventListener("TabClosed",t=>{t.data===0&&this.#s.setSidebarMinimized(!0)}),this.#s.setMainWidget(this.#a),this.#s.setSidebarWidget(this.#i),this.#s.setVertical(!1),this.#s.setSecondIsSidebar(!0),this.#s.setSidebarMinimized(!0),this.#n=new Nt,this.#n.setMinimumSize(100,25),this.#e.setSidebarWidget(this.#n),this.#e.setMainWidget(this.#s),this.#f=new Oo(20,!0),this.#c=new Map,this.#n.addItem(g(p.overviewSummary),"summary"),this.#n.addItem(g(p.colors),"colors"),this.#n.addItem(g(p.fontInfo),"font-info"),this.#n.addItem(g(p.unusedDeclarations),"unused-declarations"),this.#n.addItem(g(p.mediaQueries),"media-queries"),this.#n.select("summary",!1),this.#n.addEventListener("ItemSelected",this.#m,this),this.#n.addEventListener("Reset",this.#v,this),this.#o.addEventListener("Reset",this.#b,this),this.#o.addEventListener("PopulateNodes",this.#x,this),this.#a.element.addEventListener("click",this.#C.bind(this)),this.#r=null}wasShown(){super.wasShown(),this.#s.registerCSSFiles([Ne]),this.registerCSSFiles([Ne])}initializeModels(e){const t=e.model(Pt),o=e.model(No);if(!t||!o)throw new Error("Target must provide CSS and DOM models");this.#l=t,this.#u=o}#m(e){const{data:t}=e,o=this.#p.$(t.id);o&&(o.scrollIntoView(),!t.isMouseEvent&&t.key==="Enter"&&o.querySelector('button, [tabindex="0"]')?.focus())}#v(){this.#o.dispatchEventToListeners("Reset")}#b(){this.#a.element.removeChildren(),this.#s.setSidebarMinimized(!0),this.#i.closeTabs(),this.#c=new Map,Ce.pushedNodes.clear(),this.#n.select("summary",!1)}#C(e){if(!e.target)return;const o=e.target.dataset,s=o.type;if(!s||!this.#r)return;let i;switch(s){case"contrast":{const n=o.section,r=o.key;if(!r)return;const l=this.#r.textColorContrastIssues.get(r)||[];i={type:s,key:r,nodes:l,section:n};break}case"color":{const n=o.color,r=o.section;if(!n)return;let l;switch(r){case"text":l=this.#r.textColors.get(n);break;case"background":l=this.#r.backgroundColors.get(n);break;case"fill":l=this.#r.fillColors.get(n);break;case"border":l=this.#r.borderColors.get(n);break}if(!l)return;l=Array.from(l).map(d=>({nodeId:d})),i={type:s,color:n,nodes:l,section:r};break}case"unused-declarations":{const n=o.declaration;if(!n)return;const r=this.#r.unusedDeclarations.get(n);if(!r)return;i={type:s,declaration:n,nodes:r};break}case"media-queries":{const n=o.text;if(!n)return;const r=this.#r.mediaQueries.get(n);if(!r)return;i={type:s,text:n,nodes:r};break}case"font-info":{const n=o.value;if(!o.path)return;const[r,l]=o.path.split("/");if(!n)return;const d=this.#r.fontInfo.get(r);if(!d)return;const h=d.get(l);if(!h)return;const c=h.get(n);if(!c)return;const b=c.map(S=>({nodeId:S})),y=`${n} (${r}, ${l})`;i={type:s,name:y,nodes:b};break}default:return}e.consume(),this.#o.dispatchEventToListeners("PopulateNodes",{payload:i}),this.#s.setSidebarMinimized(!1)}async#w(e){if(!e||!("backgroundColors"in e)||!("textColors"in e))return;this.#r=e;const{elementCount:t,backgroundColors:o,textColors:s,textColorContrastIssues:i,fillColors:n,borderColors:r,globalStyleStats:l,mediaQueries:d,unusedDeclarations:h,fontInfo:c}=this.#r,b=this.#h(o),y=this.#h(s),S=this.#h(n),A=this.#h(r);this.#p=B.build`
    <div class="vbox overview-completed-view">
      <div $="summary" class="results-section horizontally-padded summary">
        <h1>${g(p.overviewSummary)}</h1>

        <ul>
          <li>
            <div class="label">${g(p.elements)}</div>
            <div class="value">${this.#t.format(t)}</div>
          </li>
          <li>
            <div class="label">${g(p.externalStylesheets)}</div>
            <div class="value">${this.#t.format(l.externalSheets)}</div>
          </li>
          <li>
            <div class="label">${g(p.inlineStyleElements)}</div>
            <div class="value">${this.#t.format(l.inlineStyles)}</div>
          </li>
          <li>
            <div class="label">${g(p.styleRules)}</div>
            <div class="value">${this.#t.format(l.styleRules)}</div>
          </li>
          <li>
            <div class="label">${g(p.mediaQueries)}</div>
            <div class="value">${this.#t.format(d.size)}</div>
          </li>
          <li>
            <div class="label">${g(p.typeSelectors)}</div>
            <div class="value">${this.#t.format(l.stats.type)}</div>
          </li>
          <li>
            <div class="label">${g(p.idSelectors)}</div>
            <div class="value">${this.#t.format(l.stats.id)}</div>
          </li>
          <li>
            <div class="label">${g(p.classSelectors)}</div>
            <div class="value">${this.#t.format(l.stats.class)}</div>
          </li>
          <li>
            <div class="label">${g(p.universalSelectors)}</div>
            <div class="value">${this.#t.format(l.stats.universal)}</div>
          </li>
          <li>
            <div class="label">${g(p.attributeSelectors)}</div>
            <div class="value">${this.#t.format(l.stats.attribute)}</div>
          </li>
          <li>
            <div class="label">${g(p.nonsimpleSelectors)}</div>
            <div class="value">${this.#t.format(l.stats.nonSimple)}</div>
          </li>
        </ul>
      </div>

      <div $="colors" class="results-section horizontally-padded colors">
        <h1>${g(p.colors)}</h1>
        <h2>${g(p.backgroundColorsS,{PH1:b.length})}</h2>
        <ul>
          ${b.map(this.#d.bind(this,"background"))}
        </ul>

        <h2>${g(p.textColorsS,{PH1:y.length})}</h2>
        <ul>
          ${y.map(this.#d.bind(this,"text"))}
        </ul>

        ${i.size>0?this.#k(i):""}

        <h2>${g(p.fillColorsS,{PH1:S.length})}</h2>
        <ul>
          ${S.map(this.#d.bind(this,"fill"))}
        </ul>

        <h2>${g(p.borderColorsS,{PH1:A.length})}</h2>
        <ul>
          ${A.map(this.#d.bind(this,"border"))}
        </ul>
      </div>

      <div $="font-info" class="results-section font-info">
        <h1>${g(p.fontInfo)}</h1>
        ${c.size>0?this.#y(c):B.build`<div>${g(p.thereAreNoFonts)}</div>`}
      </div>

      <div $="unused-declarations" class="results-section unused-declarations">
        <h1>${g(p.unusedDeclarations)}</h1>
        ${h.size>0?this.#g(h,"unused-declarations","declaration"):B.build`<div class="horizontally-padded">${g(p.thereAreNoUnusedDeclarations)}</div>`}
      </div>

      <div $="media-queries" class="results-section media-queries">
        <h1>${g(p.mediaQueries)}</h1>
        ${d.size>0?this.#g(d,"media-queries","text"):B.build`<div class="horizontally-padded">${g(p.thereAreNoMediaQueries)}</div>`}
      </div>
    </div>`,this.#a.element.appendChild(this.#p.element())}#x(e){const{payload:t}=e.data;let o="",s="";switch(t.type){case"contrast":{const{section:n,key:r}=t;o=`${n}-${r}`,s=g(p.contrastIssues);break}case"color":{const{section:n,color:r}=t;o=`${n}-${r}`,s=`${r.toUpperCase()} (${n})`;break}case"unused-declarations":{const{declaration:n}=t;o=`${n}`,s=`${n}`;break}case"media-queries":{const{text:n}=t;o=`${n}`,s=`${n}`;break}case"font-info":{const{name:n}=t;o=`${n}`,s=`${n}`;break}}let i=this.#c.get(o);if(!i){if(!this.#u||!this.#l)throw new Error("Unable to initialize CSS overview, missing models");i=new Wt(this.#o,this.#u,this.#l,this.#f),i.populateNodes(t.nodes),this.#c.set(o,i)}this.#i.appendTab(o,s,i,t.type)}#y(e){const t=Array.from(e.entries());return B.build`
  ${t.map(([o,s])=>B.build`<section class="font-family"><h2>${o}</h2> ${this.#S(o,s)}</section>`)}
  `}#S(e,t){const o=Array.from(t.entries());return B.build`
  <div class="font-metric">
  ${o.map(([s,i])=>{const n=`${e}/${s}`;return B.build`
  <div>
  <h3>${s}</h3>
  ${this.#g(i,"font-info","value",n)}
  </div>`})}
  </div>`}#g(e,t,o,s=""){const i=Array.from(e.entries()).sort((r,l)=>{const d=r[1];return l[1].length-d.length}),n=i.reduce((r,l)=>r+l[1].length,0);return B.build`<ul>
    ${i.map(([r,l])=>{const d=100*l.length/n,h=g(p.nOccurrences,{n:l.length});return B.build`<li>
        <div class="title">${r}</div>
        <button data-type="${t}" data-path="${s}" data-${o}="${r}"
        jslog="${Te().track({click:!0}).context(`css-overview.${t}`)}">
          <div class="details">${h}</div>
          <div class="bar-container">
            <div class="bar" style="width: ${d}%;"></div>
          </div>
        </button>
      </li>`})}
    </ul>`}#k(e){return B.build`
  <h2>${g(p.contrastIssuesS,{PH1:e.size})}</h2>
  <ul>
  ${[...e.entries()].map(([t,o])=>this.#A(t,o))}
  </ul>
  `}#A(e,t){console.assert(t.length>0);let o=t[0];for(const h of t)Math.abs(h.contrastRatio)<Math.abs(o.contrastRatio)&&(o=h);const s=o.textColor.asString("hexa"),i=o.backgroundColor.asString("hexa"),n=J.isEnabled("apca"),r=g(p.textColorSOverSBackgroundResults,{PH1:s,PH2:i,PH3:t.length}),l=B.build`<li>
      <button
        title="${r}" aria-label="${r}"
        data-type="contrast" data-key="${e}" data-section="contrast" class="block" $="color"
        jslog="${Te("css-overview.contrast").track({click:!0})}">
        Text
      </button>
      <div class="block-title">
        <div class="contrast-warning hidden" $="aa"><span class="threshold-label">${g(p.aa)}</span></div>
        <div class="contrast-warning hidden" $="aaa"><span class="threshold-label">${g(p.aaa)}</span></div>
        <div class="contrast-warning hidden" $="apca"><span class="threshold-label">${g(p.apca)}</span></div>
      </div>
    </li>`;if(n){const h=l.$("apca");o.thresholdsViolated.apca?h.appendChild(le()):h.appendChild(ce()),h.classList.remove("hidden")}else{const h=l.$("aa");o.thresholdsViolated.aa?h.appendChild(le()):h.appendChild(ce());const c=l.$("aaa");o.thresholdsViolated.aaa?c.appendChild(le()):c.appendChild(ce()),h.classList.remove("hidden"),c.classList.remove("hidden")}const d=l.$("color");return d.style.backgroundColor=i,d.style.color=s,d.style.border=We(o.backgroundColor.asLegacyColor()),l}#d(e,t){const o=B.build`<li>
      <button title=${t} data-type="color" data-color="${t}"
        data-section="${e}" class="block" $="color"
        jslog="${Te("css-overview.color").track({click:!0})}"></button>
      <div class="block-title color-text">${t}</div>
    </li>`,s=o.$("color");s.style.backgroundColor=t;const i=w(t)?.asLegacyColor();if(i)return s.style.border=We(i),o}#h(e){return Array.from(e.keys()).sort((t,o)=>{const s=w(t)?.asLegacyColor(),i=w(o)?.asLegacyColor();return!s||!i?0:fe(i.rgba())-fe(s.rgba())})}setOverviewData(e){this.#w(e)}static pushedNodes=new Set}class zt extends Ue(be){#e;constructor(){super(),this.#e=new zo,this.#e.show(this.element),this.#e.addEventListener(Wo.TabClosed,()=>{this.dispatchEventToListeners("TabClosed",this.#e.tabIds().length)})}appendTab(e,t,o,s){this.#e.hasTab(e)||this.#e.appendTab(e,t,o,void 0,void 0,!0,void 0,void 0,s),this.#e.selectTab(e)}closeTabs(){this.#e.closeTabs(this.#e.tabIds())}}class Wt extends Bt{#e;#o;#t;#s;#a;#i;constructor(e,t,o,s){super(),this.#e=e,this.#o=t,this.#t=o,this.#s=s,this.#a=[{id:"node-id",title:g(p.element),sortable:!0,weight:50,titleDOMFragment:void 0,sort:void 0,align:void 0,width:void 0,fixedWidth:void 0,editable:void 0,nonSelectable:void 0,longText:void 0,disclosure:void 0,allowInSortByEvenWhenHidden:void 0,dataType:void 0,defaultWeight:void 0},{id:"declaration",title:g(p.declaration),sortable:!0,weight:50,titleDOMFragment:void 0,sort:void 0,align:void 0,width:void 0,fixedWidth:void 0,editable:void 0,nonSelectable:void 0,longText:void 0,disclosure:void 0,allowInSortByEvenWhenHidden:void 0,dataType:void 0,defaultWeight:void 0},{id:"source-url",title:g(p.source),sortable:!1,weight:100,titleDOMFragment:void 0,sort:void 0,align:void 0,width:void 0,fixedWidth:void 0,editable:void 0,nonSelectable:void 0,longText:void 0,disclosure:void 0,allowInSortByEvenWhenHidden:void 0,dataType:void 0,defaultWeight:void 0},{id:"contrast-ratio",title:g(p.contrastRatio),sortable:!0,weight:25,titleDOMFragment:void 0,sort:void 0,align:void 0,width:"150px",fixedWidth:!0,editable:void 0,nonSelectable:void 0,longText:void 0,disclosure:void 0,allowInSortByEvenWhenHidden:void 0,dataType:void 0,defaultWeight:void 0}],this.#i=new pt({displayName:g(p.cssOverviewElements),columns:this.#a,editCallback:void 0,deleteCallback:void 0,refreshCallback:void 0}),this.#i.element.classList.add("element-grid"),this.#i.element.addEventListener("mouseover",this.#l.bind(this)),this.#i.setStriped(!0),this.#i.addEventListener("SortingChanged",this.#n.bind(this)),this.#i.asWidget().show(this.element)}#n(){const e=this.#i.sortColumnId();if(!e)return;const t=pt.StringComparator.bind(null,e);this.#i.sortNodes(t,!this.#i.isSortOrderAscending())}#l(e){const t=e.composedPath().find(s=>s.dataset&&s.dataset.backendNodeId);if(!t)return;const o=Number(t.dataset.backendNodeId);this.#e.dispatchEventToListeners("RequestNodeHighlight",o)}async populateNodes(e){if(this.#i.rootNode().removeChildren(),!e.length)return;const[t]=e,o=new Set;"nodeId"in t&&t.nodeId&&o.add("node-id"),"declaration"in t&&t.declaration&&o.add("declaration"),"sourceURL"in t&&t.sourceURL&&o.add("source-url"),"contrastRatio"in t&&t.contrastRatio&&o.add("contrast-ratio");let s;if("nodeId"in t&&o.has("node-id")){const i=e.reduce((n,r)=>{const l=r.nodeId;return Ce.pushedNodes.has(l)?n:(Ce.pushedNodes.add(l),n.add(l))},new Set);s=await this.#o.pushNodesByBackendIdsToFrontend(i)}for(const i of e){let n;if("nodeId"in i&&o.has("node-id")&&(!s||(n=s.get(i.nodeId),!n)))continue;const r=new _t(i,n,this.#s,this.#t);r.selectable=!1,this.#i.insertChild(r)}this.#i.setColumnsVisibility(o),this.#i.renderInline(),this.#i.wasShown()}}class _t extends _o{#e;#o;#t;constructor(e,t,o,s){super(e),this.#t=t,this.#e=o,this.#o=s}createCell(e){const t=this.#t;if(e==="node-id"){const o=this.createTD(e);if(o.textContent="...",!t)throw new Error("Node entry is missing a related frontend node.");return Uo.linkify(t).then(s=>{o.textContent="",s.dataset.backendNodeId=t.backendNodeId().toString(),o.appendChild(s);const i=new z;i.data={iconName:"select-element",color:"var(--icon-show-element)",width:"16px"},i.classList.add("show-element"),ve.install(i,g(p.showElement)),i.tabIndex=0,i.onclick=()=>t.scrollIntoView(),o.appendChild(i)}),o}if(e==="source-url"){const o=this.createTD(e);if(this.data.range){const s=this.#s(this.#o,this.#e,this.data.styleSheetId,Go.fromObject(this.data.range));!s||s.textContent===""?o.textContent="(unable to link)":o.appendChild(s)}else o.textContent="(unable to link to inlined styles)";return o}if(e==="contrast-ratio"){const o=this.createTD(e),s=J.isEnabled("apca"),i=Oe(this.data.contrastRatio,2),n=s?i+"%":i,r=We(this.data.backgroundColor),l=this.data.textColor.asString(),d=this.data.backgroundColor.asString(),h=B.build`
        <div class="contrast-container-in-grid" $="container">
          <span class="contrast-preview" style="border: ${r};
          color: ${l};
          background-color: ${d};">Aa</span>
          <span>${n}</span>
        </div>
      `,c=h.$("container");return s?(c.append(B.build`<span>${g(p.apca)}</span>`.element()),this.data.thresholdsViolated.apca?c.appendChild(le()):c.appendChild(ce())):(c.append(B.build`<span>${g(p.aa)}</span>`.element()),this.data.thresholdsViolated.aa?c.appendChild(le()):c.appendChild(ce()),c.append(B.build`<span>${g(p.aaa)}</span>`.element()),this.data.thresholdsViolated.aaa?c.appendChild(le()):c.appendChild(ce())),o.appendChild(h.element()),o}return super.createCell(e)}#s(e,t,o,s){const i=e.styleSheetHeaderForId(o);if(!i)return;const n=i.lineNumberInSource(s.startLine),r=i.columnNumberInSource(s.startLine,s.startColumn),l=new jo(i,n,r);return t.linkifyCSSLocation(l)}}function le(){const a=new z;return a.data={iconName:"clear",color:"var(--icon-error)",width:"14px",height:"14px"},a}function ce(){const a=new z;return a.data={iconName:"checkmark",color:"var(--icon-checkmark-green)",width:"14px",height:"14px"},a}const Ds=Object.freeze(Object.defineProperty({__proto__:null,CSSOverviewCompletedView:Ce,DetailsView:zt,ElementDetailsView:Wt,ElementNode:_t},Symbol.toStringTag,{value:"Module"})),Ut=new CSSStyleSheet;Ut.replaceSync(`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

h1 {
  font-weight: normal;
}

.css-overview-start-view {
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: var(--sys-color-cdt-base-container);
  overflow: auto;
}

.start-capture-wrapper {
  width: fit-content;
}

.preview-feature {
  padding: 12px 16px;
  border: 1px solid var(--sys-color-neutral-outline);
  color: var(--sys-color-on-surface);
  font-size: 13px;
  line-height: 20px;
  border-radius: 12px;
  margin: 42px 0;
  letter-spacing: 0.01em;
}

.preview-header {
  color: var(--sys-color-primary);
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  margin: 9px 0 14px;
}

.preview-icon {
  vertical-align: middle;
}

.feedback-prompt {
  margin-bottom: 24px;
}

.feedback-prompt .devtools-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.resources {
  display: flex;
  flex-direction: row;
}

.thumbnail-wrapper {
  width: 144px;
  height: 92px;
  margin-right: 20px;
}

.video-doc-header {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: var(--sys-color-on-surface);
  margin-bottom: 2px;
}

devtools-feedback-button {
  align-self: flex-end;
}

.resources .devtools-link {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: var(--sys-color-primary);
}

/*# sourceURL=cssOverviewStartView.css */
`);const ie={captureOverview:"Capture overview",identifyCSSImprovements:"Identify potential CSS improvements",capturePageCSSOverview:"Capture an overview of your page’s CSS",identifyCSSImprovementsWithExampleIssues:"Identify potential CSS improvements (e.g. low contrast issues, unused declarations, color or font mismatches)",locateAffectedElements:"Locate the affected elements in the Elements panel",quickStartWithCSSOverview:"Quick start: get started with the new CSS overview panel"},Cs=te("panels/css_overview/components/CSSOverviewStartView.ts",ie),ae=oe.bind(void 0,Cs),{render:ws,html:xs}=At,wt="https://g.co/devtools/css-overview-feedback",ys="https://developer.chrome.com/docs/devtools/css-overview";class Ge extends Event{static eventName="overviewstartrequested";constructor(){super(Ge.eventName)}}class Ss extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[Ut],this.#t()}show(){this.classList.remove("hidden")}hide(){this.classList.add("hidden")}#o(){this.dispatchEvent(new Ge)}#t(){ws(xs`
      <div class="css-overview-start-view">
        <devtools-panel-introduction-steps>
          <span slot="title">${ae(ie.identifyCSSImprovements)}</span>
          <span slot="step-1">${ae(ie.capturePageCSSOverview)}</span>
          <span slot="step-2">${ae(ie.identifyCSSImprovementsWithExampleIssues)}</span>
          <span slot="step-3">${ae(ie.locateAffectedElements)}</span>
        </devtools-panel-introduction-steps>
        <div class="start-capture-wrapper">
          <devtools-button
            class="start-capture"
            .variant=${"primary"}
            .jslogContext=${"css-overview.capture-overview"}
            @click=${this.#o}>
            ${ae(ie.captureOverview)}
          </devtools-button>
        </div>
        <devtools-panel-feedback .data=${{feedbackUrl:wt,quickStartUrl:ys,quickStartLinkText:ae(ie.quickStartWithCSSOverview)}}>
        </devtools-panel-feedback>
        <devtools-feedback-button .data=${{feedbackUrl:wt}}>
        </devtools-feedback-button>
      </div>
    `,this.#e,{host:this});const e=this.#e.querySelector(".start-capture");e&&e.focus()}}customElements.define("devtools-css-overview-start-view",Ss);const ks=new CSSStyleSheet;ks.replaceSync(`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.css-overview-panel {
  overflow: hidden;
}

devtools-css-overview-start-view {
  overflow: auto;
}

/*# sourceURL=cssOverview.css */
`);export{Ss as C,es as F,Bs as S,ms as a,Ce as b,Mt as c,Ds as d,Ts as e,Ls as f,$s as g,Fs as h,Xo as i,ks as s};
//# sourceMappingURL=cssOverview.css-C_I9lWrq.js.map
