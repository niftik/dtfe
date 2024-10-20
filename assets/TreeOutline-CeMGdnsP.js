import{aA as M,aB as $,aC as D,bW as R,b3 as P,bX as H,bY as B,bn as F,bZ as K,b_ as W,aO as j,aP as q,bj as z}from"./inspector-CyOA7R9n.js";import{n as U}from"./directives-BpSiwtWR.js";const T=new CSSStyleSheet;T.replaceSync(`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  --list-group-padding: 16px;
}

li {
  border: 2px solid transparent;
  list-style: none;
  text-overflow: ellipsis;
  min-height: 12px;
}

.compact {
  border: 0;
}

.tree-item:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.tree-node-key {
  white-space: var(--override-key-whitespace-wrapping);
  /* Override the default |min-width: auto| to avoid overflows of flex items */
  min-width: 0;
  flex-grow: 1;
}

.arrow-icon {
  display: block;
  user-select: none;
  mask-image: var(--image-file-triangle-right);
  background-color: var(--icon-default);
  content: "";
  text-shadow: none;
  height: 14px;
  width: 14px;
  overflow: hidden;
  flex: none;
  transition: transform 200ms;
}

ul {
  margin: 0;
  padding: 0;
}

ul[role="group"] {
  padding-left: var(--list-group-padding);
}

li:not(.parent) > .arrow-and-key-wrapper > .arrow-icon {
  mask-size: 0;
}

li.parent.expanded > .arrow-and-key-wrapper > .arrow-icon {
  transform: rotate(90deg);
}

li.is-top-level {
  border-top: var(--override-top-node-border);
}

li.is-top-level:last-child {
  border-bottom: var(--override-top-node-border);
}

:host([animated]) li:not(.is-top-level) {
  animation-name: slideIn;
  animation-duration: 150ms;
  animation-timing-function: cubic-bezier(0, 0, 0.3, 1);
  animation-fill-mode: forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(-5px);
    opacity: 0%;
  }

  to {
    transform: none;
    opacity: 100%;
  }
}

.arrow-and-key-wrapper {
  display: flex;
  align-content: center;
  align-items: center;

  & ::selection {
    background-color: var(--sys-color-state-focus-select);
  }
}

[role="treeitem"]:focus {
  outline: 0;
}

ul[role="tree"]:focus-within [role="treeitem"].selected > .arrow-and-key-wrapper {
  /* stylelint-disable-next-line color-named */
  background-color: var(--sys-color-tonal-container);
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.inline-icon {
  vertical-align: sub;
}

@media (forced-colors: active) {
  .arrow-icon {
    background-color: ButtonText;
  }

  ul[role="tree"]:focus-within [role="treeitem"].selected {
    outline: solid 1px ButtonText;
  }
}

/*# sourceURL=treeOutline.css */
`);function a(i){return"children"in i}class Y extends ${constructor(e){if(super(e),e.type!==D.ATTRIBUTE)throw new Error("TrackDOMNodeToTreeNode directive must be used as an attribute.")}update(e,[t,r]){const n=e.element;if(!(n instanceof HTMLLIElement))throw new Error("trackTreeNodeToDOMNode must be used on <li> elements.");t.set(n,r)}render(e,t){}}const Z=M(Y),k=i=>{const e=i.parentElement?.parentElement;if(e&&e instanceof HTMLLIElement){const t=e.nextElementSibling;return t&&t instanceof HTMLLIElement?t:k(e)}return null},y=i=>{const e=i.querySelector(':scope > [role="group"] > [role="treeitem"]:first-child');if(!e)throw new Error("Could not find child of expanded node.");return e},S=i=>i.getAttribute("aria-expanded")!==null,J=i=>!S(i),l=i=>S(i)&&i.getAttribute("aria-expanded")==="true",C=i=>{const e=i.querySelector(':scope > [role="group"] > [role="treeitem"]:last-child');if(!e)throw new Error("Could not find child of expanded node.");return l(e)?C(e):e},V=i=>{const e=i.nextElementSibling;return e&&e instanceof HTMLLIElement?e:null},X=i=>{const e=i.previousElementSibling;return e&&e instanceof HTMLLIElement?e:null},v=i=>{let e=i.parentElement;if(!e)return null;for(;e&&e.getAttribute("role")!=="treeitem"&&!(e instanceof HTMLLIElement);)e=e.parentElement;return e},x=new WeakMap,p=async i=>{if(!i.children)throw new Error("Asked for children of node that does not have any children.");const e=x.get(i);if(e)return e;const t=await i.children();return x.set(i,t),t},_=async(i,e)=>{for(const t of i){const r=await A(t,e,[t]);if(r!==null)return r}return null},A=async(i,e,t)=>{if(i.id===e)return t;if(i.children){const r=await p(i);for(const n of r){const s=await A(n,e,[...t,n]);if(s!==null)return s}}return null},G=i=>{const{currentDOMNode:e,currentTreeNode:t,direction:r,setNodeExpandedState:n}=i;if(!t)return e;if(r==="ArrowDown"){if(l(e))return y(e);const s=V(e);if(s)return s;const o=k(e);if(o)return o}else{if(r==="ArrowRight")return J(e)?e:l(e)?y(e):(n(t,!0),e);if(r==="ArrowUp"){const s=X(e);if(s)return l(s)?C(s):s;const o=v(e);if(o&&o instanceof HTMLLIElement)return o}else if(r==="ArrowLeft"){if(l(e))return n(t,!1),e;const s=v(e);if(s&&s instanceof HTMLLIElement)return s}}return e},{html:d,Directives:{ifDefined:Q}}=q,E=R.instance();function ie(i){return d`${i.treeNodeData}`}class m extends Event{static eventName="itemselected";data;constructor(e){super(m.eventName,{bubbles:!0,composed:!0}),this.data={node:e}}}class w extends Event{static eventName="itemmouseover";data;constructor(e){super(w.eventName,{bubbles:!0,composed:!0}),this.data={node:e}}}class g extends Event{static eventName="itemmouseout";data;constructor(e){super(g.eventName,{bubbles:!0,composed:!0}),this.data={node:e}}}class ee extends HTMLElement{#l=this.attachShadow({mode:"open"});#t=[];#s=new Map;#i=new WeakMap;#m=!1;#n=null;#d=null;#c=(e,t)=>(typeof e.treeNodeData!="string"&&console.warn(`The default TreeOutline renderer simply stringifies its given value. You passed in ${JSON.stringify(e.treeNodeData,null,2)}. Consider providing a different defaultRenderer that can handle nodes of this type.`),d`${String(e.treeNodeData)}`);#w;#g=!1;#u=!1;#h=!1;static get observedAttributes(){return["nowrap","toplevelbordercolor"]}attributeChangedCallback(e,t,r){switch(e){case"nowrap":{this.#N(r);break}case"toplevelbordercolor":{this.#b(r);break}}}connectedCallback(){this.#b(this.getAttribute("toplevelbordercolor")),this.#N(this.getAttribute("nowrap")),this.#l.adoptedStyleSheets=[T,P]}get data(){return{tree:this.#t,defaultRenderer:this.#c}}set data(e){this.#c=e.defaultRenderer,this.#t=e.tree,this.#w=e.filter,this.#g=e.compact||!1,this.#m||(this.#d=this.#t[0]),this.#e()}async expandRecursively(e=2){await Promise.all(this.#t.map(t=>this.#x(t,0,e))),await this.#e()}async collapseAllNodes(){this.#s.clear(),await this.#e()}async expandToAndSelectTreeNode(e){return this.expandToAndSelectTreeNodeId(e.id)}async expandToAndSelectTreeNodeId(e){const t=await _(this.#t,e);if(t===null)throw new Error(`Could not find node with id ${e} in the tree.`);t.forEach((r,n)=>{n<t.length-1&&this.#r(r,!0)}),this.#n=e,await this.#e()}expandNodeIds(e){return e.forEach(t=>this.#s.set(t,!0)),this.#e()}focusNodeId(e){return this.#n=e,this.#e()}async collapseChildrenOfNode(e){const t=this.#i.get(e);t&&(await this.#y(t),await this.#e())}#N(e){this.style.setProperty("--override-key-whitespace-wrapping",e!==null?"nowrap":"initial")}#b(e){this.style.setProperty("--override-top-node-border",e?`1px solid ${e}`:"")}async#y(e){if(!a(e)||!this.#o(e))return;const t=await this.#f(e);await Promise.all(t.map(n=>this.#y(n))),this.#r(e,!1)}async#v(e,t){const r=await p(e),n=[];for(const s of r){const o=t(s.treeNodeData),N=this.#p(s)||s.id===this.#n,u=this.#s.get(s.id);if(o==="SHOW"||N||u)n.push(s);else if(o==="FLATTEN"&&a(s)){const h=await this.#v(s,t);n.push(...h)}}return n}async#f(e){const t=await p(e),r=this.#w;if(!r)return t;const n=await this.#v(e,r);return n.length?n:t}#r(e,t){this.#s.set(e.id,t)}#o(e){return this.#s.get(e.id)||!1}async#x(e,t,r){if(!a(e)||(this.#r(e,!0),t===r||!a(e)))return;const n=await this.#f(e);await Promise.all(n.map(s=>this.#x(s,t+1,r)))}#T(e){return t=>{t.stopPropagation(),a(e)&&(this.#r(e,!this.#o(e)),this.#e())}}#k(e){e.stopPropagation();const t=this.getAttribute("clickabletitle")!==null,r=e.currentTarget,n=this.#i.get(r);t&&n&&a(n)&&this.#r(n,!this.#o(n)),this.#a(r)}async#a(e){const t=this.#i.get(e);t&&(this.#d=t,await this.#e(),this.dispatchEvent(new m(t)),E.write("DOMNode focus",()=>{e.focus()}))}#S(e){if(e==="Home"){const t=this.#l.querySelector('ul[role="tree"] > li[role="treeitem"]');t&&this.#a(t)}else if(e==="End"){const t=this.#l.querySelectorAll('li[role="treeitem"]'),r=t[t.length-1];r&&this.#a(r)}}async#C(e,t){const r=this.#i.get(t);if(!r)return;const n=G({currentDOMNode:t,currentTreeNode:r,direction:e,setNodeExpandedState:(s,o)=>this.#r(s,o)});await this.#a(n)}#A(e){const t=this.#i.get(e);if(t&&a(t)){const r=this.#o(t);this.#r(t,!r),this.#e()}}async#L(e){if(!(e.target instanceof HTMLLIElement))throw new Error("event.target was not an <li> element");e.key==="Home"||e.key==="End"?(e.preventDefault(),this.#S(e.key)):H(e.key)?(e.preventDefault(),await this.#C(e.key,e.target)):(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.#A(e.target))}#I(e){this.#n=null,this.#a(e)}#p(e){return this.#d?e.id===this.#d.id:!1}#E(e,{depth:t,setSize:r,positionInSet:n}){let s;const o=this.#o(e);if(!a(e)||!o)s=z;else{const c=this.#f(e).then(b=>b.map((I,O)=>this.#E(I,{depth:t+1,setSize:b.length,positionInSet:O})));s=d`<ul role="group">${B(c)}</ul>`}const u=this.#p(e)?0:-1,h=F({expanded:a(e)&&o,parent:a(e),selected:this.#p(e),"is-top-level":t===0,compact:this.#g}),L=a(e)?o?"true":"false":void 0;let f;return e.renderer?f=e.renderer(e,{isExpanded:o}):f=this.#c(e,{isExpanded:o}),d`
      <li role="treeitem"
        tabindex=${u}
        aria-setsize=${r}
        aria-expanded=${Q(L)}
        aria-level=${t+1}
        aria-posinset=${n+1}
        class=${h}
        jslog=${K(e.jslogContext).track({click:!0,keydown:"ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Enter|Space|Home|End"})}
        @click=${this.#k}
        track-dom-node-to-tree-node=${Z(this.#i,e)}
        on-render=${U(c=>{c instanceof HTMLLIElement&&this.#n&&e.id===this.#n&&this.#I(c)})}
      >
        <span class="arrow-and-key-wrapper"
          @mouseover=${()=>{this.dispatchEvent(new w(e))}}
          @mouseout=${()=>{this.dispatchEvent(new g(e))}}
        >
          <span class="arrow-icon" @click=${this.#T(e)} jslog=${W().track({click:!0})}>
          </span>
          <span class="tree-node-key" data-node-key=${e.treeNodeData}>${f}</span>
        </span>
        ${s}
      </li>
    `}async#e(){if(this.#u){this.#h=!0;return}if(this.#u=!0,await E.write("TreeOutline render",()=>{j(d`
      <div class="wrapping-container">
        <ul role="tree" @keydown=${this.#L}>
          ${this.#t.map((e,t)=>this.#E(e,{depth:0,setSize:this.#t.length,positionInSet:t}))}
        </ul>
      </div>
      `,this.#l,{host:this})}),this.#m=!0,this.#u=!1,this.#h)return this.#h=!1,this.#e()}}customElements.define("devtools-tree-outline",ee);export{ee as T,ie as d};
//# sourceMappingURL=TreeOutline-CeMGdnsP.js.map
