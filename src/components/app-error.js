class AppError extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _message = "Terjadi kesalahan";

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.message = this.getAttribute("message");
  }

  static get observedAttributes() {
    return ["message"];
  }

  set message(value) {
    this._message = value;
  }

  get message() {
    return this._message;
  }

  _clearContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._clearContent();
    this._shadowRoot.innerHTML += `      
            <div>
              <i>${this.message}</i>
            </div>
          `;
  }
}

customElements.define("app-error", AppError);
