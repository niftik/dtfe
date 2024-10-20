import{aZ as n}from"./inspector-CyOA7R9n.js";const i={cssContent:`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: var(--color-background-opacity-80);
  z-index: 1000;
}

.drop-target-message {
  flex: auto;
  font-size: 30px;
  color: var(--sys-color-token-subtle);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 4px dashed var(--sys-color-neutral-outline);
  pointer-events: none;
}

/*# sourceURL=dropTarget.css */
`};class l{element;transferTypes;messageText;handleDrop;enabled;dragMaskElement;constructor(e,t,s,r){e.addEventListener("dragenter",this.onDragEnter.bind(this),!0),e.addEventListener("dragover",this.onDragOver.bind(this),!0),this.element=e,this.transferTypes=t,this.messageText=s,this.handleDrop=r,this.enabled=!0,this.dragMaskElement=null}setEnabled(e){this.enabled=e}onDragEnter(e){this.enabled&&this.hasMatchingType(e)&&e.consume(!0)}hasMatchingType(e){const t=e;if(!t.dataTransfer)return!1;for(const s of this.transferTypes)if(Array.from(t.dataTransfer.items).find(a=>s.kind===a.kind&&!!s.type.exec(a.type)))return!0;return!1}onDragOver(e){const t=e;if(!this.enabled||!this.hasMatchingType(t)||(t.dataTransfer&&(t.dataTransfer.dropEffect="copy"),t.consume(!0),this.dragMaskElement))return;this.dragMaskElement=this.element.createChild("div","");const s=n(this.dragMaskElement,{cssFile:i,delegatesFocus:void 0});s.createChild("div","drop-target-message").textContent=this.messageText,this.dragMaskElement.addEventListener("drop",this.onDrop.bind(this),!0),this.dragMaskElement.addEventListener("dragleave",this.onDragLeave.bind(this),!0)}onDrop(e){const t=e;t.consume(!0),this.removeMask(),this.enabled&&t.dataTransfer&&this.handleDrop(t.dataTransfer)}onDragLeave(e){e.consume(!0),this.removeMask()}removeMask(){this.dragMaskElement&&(this.dragMaskElement.remove(),this.dragMaskElement=null)}}const h={URI:{kind:"string",type:/text\/uri-list/},Folder:{kind:"file",type:/$^/},File:{kind:"file",type:/.*/},WebFile:{kind:"file",type:/[\w]+/},ImageFile:{kind:"file",type:/image\/.*/}};export{l as D,h as T};
//# sourceMappingURL=DropTarget-DDkHhLsd.js.map
