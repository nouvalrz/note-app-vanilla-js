class AppLoading extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _text = null;

  _display = "none";

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.text = this.getAttribute("text");
    this.display = this.getAttribute("display");
  }

  static get observedAttributes() {
    return ["text", "display"];
  }

  set text(value) {
    this._text = value;
  }

  get text() {
    return this._text;
  }

  set display(value) {
    if (value === null || value === undefined) return;
    this._display = value;
  }

  get display() {
    return this._display;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
    }
  }

  _clearContent() {
    this._shadowRoot.innerHTML = "";
  }

  _setStyle() {
    this._style.textContent = `
        :host {
            display:${this.display};
        }
        .loading-wrapper{
            display:flex;
            flex-direction: column;
            align-items: center;
        }
        .lds-ellipsis {
        color: white;
        }
        .lds-ellipsis,
        .lds-ellipsis div {
        box-sizing: border-box;
        }
        .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 50px;
        }
        .lds-ellipsis div {
        position: absolute;
        top: 33.33333px;
        width: 13.33333px;
        height: 13.33333px;
        border-radius: 50%;
        background: currentColor;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
        }
        @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
        }
        @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
        }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._clearContent();
    this._setStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <div class="loading-wrapper">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                ${this.text ? `<p><i>${this.text}</i></p>` : ""}
            </div>      
        `;
  }
}

customElements.define("app-loading", AppLoading);
