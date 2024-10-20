import{aW as n,aX as h,aY as u}from"./inspector-CyOA7R9n.js";const d={cssContent:`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.widget {
  display: flex;
  background: var(--sys-color-cdt-base-container);
  border: 1px solid transparent;
  box-shadow: var(--drop-shadow);
  border-radius: 2px;
  overflow: auto;
  user-select: text;
  line-height: 11px;

  &.borderless-popover {
    border: 0;
  }
}

.widget.has-padding {
  padding: 6px;
}

/*# sourceURL=popover.css */
`};class r{static createPopover=o=>{const e=new n(`${h(o).parent("mapped")}`);return e.registerRequiredCSS(d),e.setSizeBehavior("MeasureContent"),e.setMarginBehavior("Arrow"),e};disableOnClick;hasPadding;getRequest;scheduledRequest;hidePopoverCallback;container;showTimeout;hideTimeout;hidePopoverTimer;showPopoverTimer;boundMouseDown;boundMouseMove;boundMouseOut;jslogContext;constructor(o,e,t){this.disableOnClick=!1,this.hasPadding=!1,this.getRequest=e,this.jslogContext=t,this.scheduledRequest=null,this.hidePopoverCallback=null,this.container=o,this.showTimeout=0,this.hideTimeout=0,this.hidePopoverTimer=null,this.showPopoverTimer=null,this.boundMouseDown=this.mouseDown.bind(this),this.boundMouseMove=this.mouseMove.bind(this),this.boundMouseOut=this.mouseOut.bind(this),this.container.addEventListener("mousedown",this.boundMouseDown,!1),this.container.addEventListener("mousemove",this.boundMouseMove,!1),this.container.addEventListener("mouseout",this.boundMouseOut,!1),this.setTimeout(1e3)}setTimeout(o,e){this.showTimeout=o,this.hideTimeout=typeof e=="number"?e:o/2}setHasPadding(o){this.hasPadding=o}setDisableOnClick(o){this.disableOnClick=o}eventInScheduledContent(o){const e=o;return this.scheduledRequest?this.scheduledRequest.box.contains(e.clientX,e.clientY):!1}mouseDown(o){if(this.disableOnClick){this.hidePopover();return}this.eventInScheduledContent(o)||(this.startHidePopoverTimer(0),this.stopShowPopoverTimer(),this.startShowPopoverTimer(o,0))}mouseMove(o){const e=o;if(this.eventInScheduledContent(e)){this.stopShowPopoverTimer(),this.startShowPopoverTimer(e,this.isPopoverVisible()?this.showTimeout*.6:this.showTimeout);return}this.startHidePopoverTimer(this.hideTimeout),this.stopShowPopoverTimer(),!(e.buttons&&this.disableOnClick)&&this.startShowPopoverTimer(e,this.isPopoverVisible()?this.showTimeout*.6:this.showTimeout)}popoverMouseMove(o){this.stopHidePopoverTimer()}popoverMouseOut(o,e){const t=e;if(!o.isShowing())return;const i=t.relatedTarget;i&&!i.isSelfOrDescendant(o.contentElement)&&this.startHidePopoverTimer(this.hideTimeout)}mouseOut(o){this.isPopoverVisible()&&(this.eventInScheduledContent(o)||this.startHidePopoverTimer(this.hideTimeout))}startHidePopoverTimer(o){!this.hidePopoverCallback||this.hidePopoverTimer||(this.hidePopoverTimer=window.setTimeout(()=>{this.hidePopoverInternal(),this.hidePopoverTimer=null},o))}startShowPopoverTimer(o,e){this.scheduledRequest=this.getRequest.call(null,o),this.scheduledRequest&&(this.showPopoverTimer=window.setTimeout(()=>{this.showPopoverTimer=null,this.stopHidePopoverTimer(),this.hidePopoverInternal();const t=o.target.ownerDocument;this.showPopover(t)},e))}stopShowPopoverTimer(){this.showPopoverTimer&&(clearTimeout(this.showPopoverTimer),this.showPopoverTimer=null)}isPopoverVisible(){return!!this.hidePopoverCallback}hidePopover(){this.stopShowPopoverTimer(),this.hidePopoverInternal()}hidePopoverInternal(){this.hidePopoverCallback&&(this.hidePopoverCallback.call(null),this.hidePopoverCallback=null)}showPopover(o){const e=r.createPopover(this.jslogContext),t=this.scheduledRequest;t&&t.show.call(null,e).then(i=>{if(i){if(this.scheduledRequest!==t){t.hide&&t.hide.call(null);return}s&&s.hidePopover(),s=this,u(e.contentElement,this.container),e.contentElement.classList.toggle("has-padding",this.hasPadding),e.contentElement.addEventListener("mousemove",this.popoverMouseMove.bind(this),!0),e.contentElement.addEventListener("mouseout",this.popoverMouseOut.bind(this,e),!0),e.setContentAnchorBox(t.box),e.show(o),this.hidePopoverCallback=()=>{t.hide&&t.hide.call(null),e.hide(),s=null}}})}stopHidePopoverTimer(){this.hidePopoverTimer&&(clearTimeout(this.hidePopoverTimer),this.hidePopoverTimer=null,this.stopShowPopoverTimer())}dispose(){this.container.removeEventListener("mousedown",this.boundMouseDown,!1),this.container.removeEventListener("mousemove",this.boundMouseMove,!1),this.container.removeEventListener("mouseout",this.boundMouseOut,!1)}}let s=null;export{r as P};
//# sourceMappingURL=PopoverHelper-fEnxzApM.js.map
