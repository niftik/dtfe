import{bW as xt,dz as Ct,aN as d,dA as st,dB as $t,a_ as j,aO as P,df as St,aY as Dt,aP as G,b as at,g as lt,db as ht,bj as dt}from"./inspector-CyOA7R9n.js";import{n as k}from"./directives-BpSiwtWR.js";const ct=new CSSStyleSheet;ct.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  --override-transparent: rgb(0 0 0 / 0%);

  display: var(--dialog-display);
}

dialog::backdrop {
  background: var(--override-transparent);
}

dialog {
  background: transparent;
  border: none;
  border-radius: 4px;
  top: var(--dialog-top);
  padding: var(--dialog-padding);
  left: var(--dialog-left);
  right: var(--dialog-right);
  margin: var(--dialog-margin);
  margin-left: var(--dialog-margin-left, 0);
  margin-bottom: var(--dialog-margin-bottom);
  animation-name: slideIn;
  animation-duration: 100ms;
  animation-timing-function: cubic-bezier(0, 0, 0.3, 1);
  overflow: hidden;
}

dialog:focus,
dialog:focus-visible {
  outline: none;
}

#content {
  min-width: var(--content-min-width);
  background: var(--color-background-elevation-dark-only);
  border-radius: 4px;
  padding-top: var(--content-padding-top);
  padding-bottom: var(--content-padding-bottom);
  box-shadow: var(--override-content-box-shadow);
  max-height: var(--dialog-max-height);
  max-width: var(--dialog-max-width);
  overflow: auto;
  outline: none;
  clip-path: polygon(var(--content-clip-path));
}

#content-wrap {
  filter: drop-shadow(0 1px 2px rgb(60 64 67 / 30%)) drop-shadow(0 2px 0 rgb(60 64 67 / 15%));
}

@keyframes slideIn {
  from {
    transform: translateY(var(--dialog-offset-y));
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}

/*# sourceURL=dialog.css */
`);const{html:nt}=G,m=xt.instance(),_="HTMLDialogElement"in globalThis,o=10,x=2*o,C=20,$=5,Et=3,a=3*o,S="MODAL";class Pt extends HTMLElement{#r=this.attachShadow({mode:"open"});#l=this.#T.bind(this);#e=this.#O.bind(this);#o=this.#k.bind(this);#t={origin:S,position:"bottom",horizontalAlignment:"center",showConnector:!1,getConnectorCustomXPosition:null,dialogShownCallback:null,windowBoundsService:Ct.instance(),closeOnESC:!0,closeOnScroll:!0,jslogContext:""};#i=null;#s=!1;#d=!1;#n=new DOMRect(0,0,0,0);#y=new DOMRect(0,0,0,0);#c=null;#g=null;#m=new MutationObserver(this.#e);#w=new ResizeObserver(this.#b.bind(this));#p=this.windowBoundsService.getDevToolsBoundingElement();#v=this.#A.bind(this);get showConnector(){return this.#t.showConnector}set showConnector(t){this.#t.showConnector=t,this.#a()}get origin(){return this.#t.origin}set origin(t){this.#t.origin=t,this.#a()}get position(){return this.#t.position}set position(t){this.#t.position=t,this.#a()}get horizontalAlignment(){return this.#t.horizontalAlignment}set horizontalAlignment(t){this.#t.horizontalAlignment=t,this.#a()}get windowBoundsService(){return this.#t.windowBoundsService}set windowBoundsService(t){this.#t.windowBoundsService=t,this.#p=this.windowBoundsService.getDevToolsBoundingElement(),this.#a()}get bestVerticalPosition(){return this.#c}get bestHorizontalAlignment(){return this.#g}get getConnectorCustomXPosition(){return this.#t.getConnectorCustomXPosition}set getConnectorCustomXPosition(t){this.#t.getConnectorCustomXPosition=t,this.#a()}get dialogShownCallback(){return this.#t.dialogShownCallback}get jslogContext(){return this.#t.jslogContext}set dialogShownCallback(t){this.#t.dialogShownCallback=t,this.#a()}set closeOnESC(t){this.#t.closeOnESC=t,this.#a()}set closeOnScroll(t){this.#t.closeOnScroll=t,this.#a()}set jslogContext(t){this.#t.jslogContext=t,this.#a()}#b(){this.#y=this.#h().getBoundingClientRect()}#a(){d(this,this.#l)}connectedCallback(){this.#r.adoptedStyleSheets=[ct],window.addEventListener("resize",this.#e),this.#m.observe(this.#p,{childList:!0,subtree:!0}),this.#p.addEventListener("wheel",this.#o),this.style.setProperty("--dialog-padding","0"),this.style.setProperty("--override-content-box-shadow","none"),this.style.setProperty("--dialog-display",_?"block":"none"),this.style.setProperty("--override-dialog-content-border",`${o}px solid transparent`),this.style.setProperty("--dialog-padding",`${Et}px ${$}px`)}disconnectedCallback(){window.removeEventListener("resize",this.#e),this.#p.removeEventListener("wheel",this.#o),this.#m.disconnect(),this.#w.disconnect()}#h(){if(!this.#i){if(this.#i=this.#r.querySelector("dialog"),!this.#i)throw new Error("Dialog not found");this.#w.observe(this.#i)}return this.#i}getHitArea(){return this.#n}async setDialogVisible(t){if(t){await this.#P();return}this.#u()}async#f(t){if(t.stopPropagation(),t instanceof PointerEvent&&t.pointerType==="")return;const e=this.#x(t),i=this.#C(t);if(!e){if(t.type==="pointermove"){if(i)return;this.dispatchEvent(new Y);return}this.dispatchEvent(new F)}}#x(t){const e=this.#y;let i=this.bestVerticalPosition==="bottom"?C:-1*C;this.#t.origin===S&&(i=0);const n=t.pageX>=e.left&&t.pageX<=e.left+e.width,w=t.pageY>=e.top+i&&t.pageY<=e.top+e.height+i;return n&&w}#C(t){const e=this.#n,i=t.pageX>=e.left&&t.pageX<=e.left+e.width,n=t.pageY>=e.top&&t.pageY<=e.top+e.height;return i&&n}#$(t){if(!t||t===S)throw new Error("Dialog origin is null");const e=t instanceof Function?t():t;return e instanceof DOMPoint?{top:e.y,bottom:e.y,left:e.x,right:e.x}:e instanceof HTMLElement?e.getBoundingClientRect():e}#S(t,e){return e.right-t.left>t.right-e.left?"left":"right"}#D(t,e,i){return t.bottom+e>i.height&&t.top-e>i.top?"top":"bottom"}#E(){this.#t.origin&&(this.#s=!0,m.read(()=>{const t=this.#p.getBoundingClientRect(),e=t.width,i=t.height,n=t.left,w=t.top,v=t.right;if(this.#t.origin===S){m.write(()=>{this.style.setProperty("--dialog-top",`${w}px`),this.style.setProperty("--dialog-left",`${n}px`),this.style.setProperty("--dialog-margin","auto"),this.style.setProperty("--dialog-margin-left","auto"),this.style.setProperty("--dialog-margin-bottom","auto"),this.style.setProperty("--dialog-max-height",`${i-a}px`),this.style.setProperty("--dialog-max-width",`${e-a}px`),this.style.setProperty("--dialog-right",`${document.body.clientWidth-v}px`)});return}const mt=this.#t.origin,A=this.#$(mt),{top:p,right:B,bottom:O,left:u}=A,T=(u+B)/2,I=B-u+o,b=document.body.clientWidth,f=this.#t.getConnectorCustomXPosition?this.#t.getConnectorCustomXPosition():T;m.write(()=>{this.style.setProperty("--dialog-top","0");const c=this.#h();c.style.visibility="hidden",this.#s&&!c.hasAttribute("open")&&(c.showModal(),this.setAttribute("open",""),this.#s=!1);const{width:Z,height:wt}=c.getBoundingClientRect();if(this.#g=this.#t.horizontalAlignment==="auto"?this.#S(A,t):this.#t.horizontalAlignment,this.#c=this.#t.position==="auto"?this.#D(A,wt,t):this.#t.position,this.#g==="auto"||this.#c==="auto")return;this.#n.height=O-p+o*(this.showConnector?2:1),this.#n.width=I;let l=0;this.style.setProperty("--content-min-width",`${f-u+x+$*2}px`),this.style.setProperty("--dialog-left","auto"),this.style.setProperty("--dialog-right","auto"),this.style.setProperty("--dialog-margin","0");const J=this.showConnector?x*3/4:0;switch(this.#g){case"left":{const s=Math.max(u-J,n),y=v-s-a;l=f-s-$,this.style.setProperty("--dialog-left",`${s}px`),this.#n.x=u,this.style.setProperty("--dialog-max-width",`${y}px`);break}case"right":{const s=b-B,h=b-v,y=Math.max(s-J,h),ot=b-y,it=ot-n-a,bt=Math.min(it,Z),ft=ot-bt;l=f-ft,this.#n.x=b-y-I,this.style.setProperty("--dialog-right",`${y}px`),this.style.setProperty("--dialog-max-width",`${it}px`);break}case"center":{const s=Math.min(e-a,Z);let h=Math.max(T-s*.5,n);h=Math.min(h,v-s),l=f-h-$,this.style.setProperty("--dialog-left",`${h}px`),this.#n.x=T-I*.5,this.style.setProperty("--dialog-max-width",`${e-a}px`);break}default:st(this.#g,`Unknown alignment type: ${this.#g}`)}const Q=this.showConnector?o:0,tt=l-x/2,et=l+x/2;let[R,L,N,M,z,W,H,X,U]=["","","","","","","","","",""];const r=2;switch(this.#c){case"top":{const s=`calc(100% - ${o}px)`;this.#t.showConnector&&(R="0 0",L="100% 0",N=`100% calc(${s} - ${r}px)`,M=`calc(100% - ${r}px) ${s}`,z=`${tt}px ${s}`,W=`${l}px 100%`,H=`${et}px ${s}`,X=`${r}px ${s}`,U=`0 calc(${s} - ${r}px)`),this.style.setProperty("--content-padding-bottom",`${o+(this.#t.showConnector?o:0)}px`),this.style.setProperty("--content-padding-top",`${o}px`),this.style.setProperty("--dialog-top","0"),this.style.setProperty("--dialog-margin","auto"),this.style.setProperty("--dialog-margin-bottom",`${innerHeight-p}px`),this.#n.y=p-2*o,this.style.setProperty("--dialog-offset-y",`${C}px`),this.style.setProperty("--dialog-max-height",`${i-(innerHeight-p)-a-Q}px`);break}case"bottom":{this.#t.showConnector&&(R=`0 ${o+r}px`,L=`${r}px ${o}px`,N=`${tt}px ${o}px`,M=`${l}px 0`,z=`${et}px ${o}px`,W=`calc(100% - ${r}px) ${o}px`,H=`100% ${o+r}px`,X="100% 100%",U="0 100%"),this.style.setProperty("--content-padding-top",`${o+(this.#t.showConnector?o:0)}px`),this.style.setProperty("--content-padding-bottom",`${o}px`),this.style.setProperty("--dialog-top",`${O}px`),this.#n.y=p,this.style.setProperty("--dialog-offset-y",`-${C}px`),this.style.setProperty("--dialog-max-height",`${i-(O-w)-a-Q}px`);break}default:st(this.#c,`Unknown position type: ${this.#c}`)}const vt=[R,L,N,M,z,W,H,X,U].join();this.style.setProperty("--content-clip-path",vt),c.close(),c.style.visibility=""})}))}async#P(){if(!_||this.#s||this.hasAttribute("open"))return;this.#s=!0,this.#E(),await m.done(),this.#s=!1;const t=this.#h();t.hasAttribute("open")||t.showModal(),this.#t.dialogShownCallback&&await this.#t.dialogShownCallback(),this.#b(),document.body.addEventListener("keydown",this.#v)}#k(t){this.#x(t)||!this.#t.closeOnScroll||!this.#h().hasAttribute("open")||(this.#u(),this.dispatchEvent(new g))}#A(t){!this.#h().hasAttribute("open")||!this.#t.closeOnESC||t.key===$t&&(t.stopPropagation(),t.preventDefault(),this.#u(),this.dispatchEvent(new g))}#B(t){t.stopPropagation(),t.preventDefault(),!(!this.#h().hasAttribute("open")||!this.#t.closeOnESC)&&this.dispatchEvent(new g)}#O(){this.#i?.hasAttribute("open")&&this.#p!==document.body&&(this.#u(),this.dispatchEvent(new g))}#u(){this.#d||!this.#h().hasAttribute("open")||(this.#d=!0,m.write(()=>{this.#n.width=0,this.removeAttribute("open"),this.#h().close(),this.#d=!1,document.body.removeEventListener("keydown",this.#v)}))}getDialogBounds(){return this.#y}#T(){if(!j(this))throw new Error("Dialog render was not scheduled");if(!_){P(nt`
        <slot></slot>
      `,this.#r,{host:this});return}P(nt`
      <dialog @click=${this.#f} @pointermove=${this.#f} @cancel=${this.#B}
              jslog=${St(this.#t.jslogContext).track({resize:!0,keydown:"Escape"}).parent("mapped")}>
        <div id="content-wrap">
          <div id="content">
            <slot></slot>
          </div>
        </div>
      </dialog>
    `,this.#r,{host:this}),Dt(this.#h(),this.parentElementOrShadowHost())}}customElements.define("devtools-dialog",Pt);class Y extends Event{static eventName="pointerleftdialog";constructor(){super(Y.eventName,{bubbles:!0,composed:!0})}}class F extends Event{static eventName="clickoutsidedialog";constructor(){super(F.eventName,{bubbles:!0,composed:!0})}}class g extends Event{static eventName="forceddialogclose";constructor(){super(g.eventName,{bubbles:!0,composed:!0})}}const gt=new CSSStyleSheet;gt.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

#close-button-container {
  height: 0;
  width: 100%;
}

#close-button-container #close-button-right-aligner {
  position: relative;
  z-index: 1;
  width: fit-content;
  left: 100%;
  transform: translateX(-100%);
  padding-right: 12px;
}

#slot-container {
  margin-top: -14px;
  padding: 0 12px;
}

/*# sourceURL=iconDialog.css */
`);const{html:rt}=G,pt={close:"Close"},kt=at("ui/components/dialogs/IconDialog.ts",pt),At=lt.bind(void 0,kt);let Bt=class ut extends Event{static eventName="showdialog";constructor(){super(ut.eventName)}};class Ot extends HTMLElement{#r=this.attachShadow({mode:"open"});#l=this.#d.bind(this);#e=null;#o=null;#t=null;connectedCallback(){this.#r.adoptedStyleSheets=[gt]}set data(t){this.#e=t,d(this,this.#l)}#i(){if(!this.#o)throw new Error("Dialog not found");this.#o.setDialogVisible(!0),d(this,this.#l),this.dispatchEvent(new Bt)}#s(){if(!this.#o)throw new Error("Dialog not found");this.#o.setDialogVisible(!1),d(this,this.#l)}#d(){if(this.#e===null)throw new Error("IconDialog.data is not set");if(!j(this))throw new Error("IconDialog render was not scheduled");let t=dt;this.#e.closeButton&&(t=rt`
        <div id='close-button-container'>
          <div id='close-button-right-aligner'>
            <devtools-icon
              @click=${this.#s}
              .data=${{iconName:"cross",color:"var(--icon-default-hover)",width:"16px",height:"16px"}}
              jslog=${ht().track({click:!0})}
              title=${At(pt.close)}
            ></devtools-icon>
          </div>
        </div>
      `),P(rt`
      <devtools-icon
        @click=${this.#i}
        on-render=${k(e=>{this.#t=e})}
        .data=${this.#e.iconData}
      ></devtools-icon>
      <devtools-dialog
        @clickoutsidedialog=${this.#s}
        .showConnector=${!0}
        .origin=${()=>{if(!this.#t)throw new Error("Icon not found");return this.#t}}
        .position=${this.#e.position}
        .horizontalAlignment=${this.#e.horizontalAlignment}
        .closeOnESC=${this.#e.closeOnESC}
        .closeOnScroll=${this.#e.closeOnScroll}
        on-render=${k(e=>{this.#o=e})}
      >
        ${t}
        <div id='slot-container'>
          <slot></slot>
        </div>
      </devtools-dialog>
    `,this.#r,{host:this})}}customElements.define("devtools-icon-dialog",Ot);const yt=new CSSStyleSheet;yt.replaceSync(`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.keybinds-category-header {
  white-space: nowrap;
  padding: 0 10px 20px;
  display: flex;
}

.keybinds-category-header-text {
  line-height: 24px;
  flex: auto;
  font-weight: bold;
}

.keybinds-key {
  padding: 0.1em 0.6em;
  border: 1px solid var(--sys-color-neutral-outline);
  font-size: 11px;
  background-color: var(--sys-color-neutral-container);
  color: var(--sys-color-on-surface);
  border-radius: 3px;
  display: inline-block;
  margin: 0 0.1em;
  text-shadow: 0 1px 0 var(--sys-color-cdt-base-container);
  line-height: 1.5;
  white-space: nowrap;
}

.keybinds-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.keybinds-list-item {
  line-height: 30px;
  display: flex;
  padding: 0 10px;
}

.keybinds-list-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  user-select: none;
  color: var(--sys-color-on-surface);
  text-align: start;
  position: relative;
  margin-right: 0;
}

.keybinds-shortcut-separator {
  white-space: pre-wrap;
}

.keybinds-action-name {
  flex: auto;
  padding-right: 30px;
}

.keybinds-shortcut {
  flex: none;
}

.close-icon {
  width: 12px;
  height: 12px;
  padding-top: 2px;
}

/*# sourceURL=shortcutDialog.css */
`);const{html:D}=G,E={showShortcutTitle:"Show shortcuts",dialogTitle:"Keyboard shortcuts",close:"Close"},Tt=at("ui/components/dialogs/ShortcutDialog.ts",E),V=lt.bind(void 0,Tt);class K extends Event{static eventName="showdialog";constructor(){super(K.eventName)}}class It extends HTMLElement{#r=this.attachShadow({mode:"open"});#l=this.#n.bind(this);#e=null;#o=null;#t=[];#i=!1;connectedCallback(){this.#r.adoptedStyleSheets=[yt]}set data(t){this.#t=t.shortcuts,t.open&&(this.#i=t.open),d(this,this.#l)}#s(){if(!this.#e)throw new Error("Dialog not found");this.#e.setDialogVisible(!0),d(this,this.#l),this.dispatchEvent(new K)}#d(t){if(!this.#e)throw new Error("Dialog not found");this.#e.setDialogVisible(!1),t&&t.stopImmediatePropagation(),d(this,this.#l)}#n(){if(!j(this))throw new Error("Shortcut dialog render was not scheduled");P(D`
      <devtools-button
        @click=${this.#s}
        on-render=${k(t=>{this.#o=t})}
        .data=${{variant:"toolbar",iconName:"help",title:V(E.showShortcutTitle)}}
      ></devtools-button>
      <devtools-dialog
        @clickoutsidedialog=${this.#d}
        .showConnector=${!0}
        .origin=${()=>{if(!this.#o)throw new Error("Button not found");return this.#o}}
        .position=${"bottom"}
        .horizontalAlignment=${"right"}
        .jslogContext=${"shortcuts"}
        on-render=${k(t=>{this.#e=t})}
      >
        <div class="keybinds-category-header">
          <span class="keybinds-category-header-text">${V(E.dialogTitle)}</span>
          <devtools-button
            @click=${this.#d}
            class='close-icon'
            .data=${{variant:"toolbar",iconName:"cross",title:V(E.close)}}
            jslog=${ht().track({click:!0})}
          ></devtools-button>
        </div>
        <ul class="keybinds-list">
          ${this.#t.map(t=>D`
              <li class="keybinds-list-item">
                <div class="keybinds-action-name keybinds-list-text">${t.title}</div>
                ${t.bindings.map((e,i)=>D`
                    <div class="keybinds-shortcut keybinds-list-text">
                      <span class="keybinds-key">${e}</span>
                    </div>
                    ${t.bindings.at(i+1)?D`<span class="keybinds-shortcut-separator"> - </span>`:dt}
                `)}
              </li>`)}
        </ul>
      </devtools-dialog>
      `,this.#r,{host:this}),this.#i&&(this.#s(),this.#i=!1)}}customElements.define("devtools-shortcut-dialog",It);
//# sourceMappingURL=ShortcutDialog-D3xyB3nU.js.map
