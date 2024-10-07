class AppHeader extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _clearContent() {
    this._shadowRoot.innerHTML = "";
  }

  _setStyle() {
    this._style.textContent = `
    div {
      display: fixed;
      width: 100%; 
      color: #020420;
      border-bottom: 2px solid #00d07c;
      background-color: #020420;
      color: white;
      text-align: center;
      padding-block: 1rem;
    }

    h2 {
      margin: 0;
      font-weight: 600;
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
        <div>
          <h2>Notes App</h2>
        </div>
      `;
  }
}

customElements.define("app-header", AppHeader);
