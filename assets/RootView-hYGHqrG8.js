import{aU as s,aV as n}from"./inspector-CyOA7R9n.js";const r={cssContent:`/*
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.root-view {
  background-color: var(--sys-color-cdt-base-container);
  overflow: hidden;
  position: absolute !important; /* stylelint-disable-line declaration-no-important */
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

/*# sourceURL=rootView.css */
`};class l extends s{window;constructor(){super(),this.markAsRoot(),this.element.classList.add("root-view"),this.registerRequiredCSS(r),this.element.setAttribute("spellcheck","false")}attachToDocument(t){t.defaultView&&t.defaultView.addEventListener("resize",this.doResize.bind(this),!1),this.window=t.defaultView,this.doResize(),this.show(t.body)}doResize(){if(this.window){const t=this.constraints().minimum,e=n.instance().zoomFactor(),i=Math.min(0,this.window.innerWidth-t.width/e);this.element.style.marginRight=i+"px";const o=Math.min(0,this.window.innerHeight-t.height/e);this.element.style.marginBottom=o+"px"}super.doResize()}}export{l as R};
//# sourceMappingURL=RootView-hYGHqrG8.js.map
