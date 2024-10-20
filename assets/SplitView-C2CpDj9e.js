import{aN as n,aO as h,aP as l}from"./inspector-CyOA7R9n.js";const{html:m}=l,d=`
  :host {
    --current-main-area-size: 50%;
    --resizer-size: 3px;
    --min-main-area-size: 200px;
    --min-sidebar-size: 150px;
    --main-area-size: calc(max(var(--current-main-area-size), var(--min-main-area-size)));

    height: 100%;
    width: 100%;
    display: block;
    overflow: auto;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    container: sidebar / size; /* stylelint-disable-line property-no-unknown */
  }

  .container {
    --resizer-position: calc(min(var(--main-area-size), calc(100% - var(--min-sidebar-size))));
    --min-container-size: calc(var(--min-sidebar-size) + var(--min-main-area-size) + var(--resizer-size));

    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    position: relative;
    gap: var(--resizer-size);

    min-width: var(--min-container-size);
  }

  #resizer {
    background-color: var(--sys-color-surface1);
    position: absolute;
    user-select: none;

    /* horizontal */
    width: var(--resizer-size);
    cursor: col-resize;
    left: var(--resizer-position);
    bottom: 0;
    top: 0;
  }

  slot {
    overflow: auto;
    display: block;
  }

  slot[name="main"] {

    /* horizontal */
    width: var(--resizer-position);
    min-width: var(--min-main-area-size);
  }

  slot[name="sidebar"] {
    flex: 1 0 0;

    min-width: var(--min-sidebar-size);
  }

  .horizontal .container {
    flex-direction: column;
    min-height: var(--min-container-size);
    min-width: auto;
  }

  .horizontal #resizer {
    width: auto;
    height: var(--resizer-size);
    cursor: row-resize;
    top: var(--resizer-position);
    left: 0;
    right: 0;
  }

  .horizontal slot[name="main"] {
    width: auto;
    min-width: auto;
    height: var(--resizer-position);
    min-height: var(--min-main-area-size);
  }

  .horizontal slot[name="sidebar"] {
    min-width: auto;
    min-height: var(--min-sidebar-size);
  }
`,o=new CSSStyleSheet;o.replaceSync(d);class c extends HTMLElement{#e=this.attachShadow({mode:"open"});#n=[0,0];#i=0;#o=[0,0];#r;#t=!1;connectedCallback(){this.style.setProperty("--current-main-area-size","60%"),this.#e.adoptedStyleSheets=[o],this.#r=new ResizeObserver(i=>this.#l(i[0].contentRect)),this.#r.observe(this),this.#s()}get horizontal(){return this.#t}set horizontal(i){this.#t=i,n(this,this.#s)}#l=i=>{const e=this.#i;i.width<=600&&i.height>=600||this.#t?this.#i=1:this.#i=0,this.#i!==e&&n(this,this.#s)};#m=i=>{const e=this.#e.querySelector("slot[name=main]");if(!e)throw new Error("Main slot not found");const t=e.getBoundingClientRect();this.#o=[t.width,t.height],this.#n=[i.clientX,i.clientY],window.addEventListener("mousemove",this.#h,!0),window.addEventListener("mouseup",this.#a,!0)};#a=()=>{window.removeEventListener("mousemove",this.#h,!0),window.removeEventListener("mouseup",this.#a,!0)};#h=i=>{const t=[i.clientX,i.clientY][this.#i]-this.#n[this.#i],s=this.getBoundingClientRect(),r=[s.width,s.height],a=(this.#o[this.#i]+t)*100/r[this.#i];this.style.setProperty("--current-main-area-size",a+"%")};#s=()=>{h(m`
        <div class="wrapper ${this.#i===1?"horizontal":""}">
          <div class="container">
            <slot name="main"></slot>
            <div id="resizer" @mousedown=${this.#m}></div>
            <slot name="sidebar"></slot>
          </div>
        </div>
      `,this.#e,{host:this})}}customElements.define("devtools-split-view",c);
//# sourceMappingURL=SplitView-C2CpDj9e.js.map
