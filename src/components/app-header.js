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
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%; 
      color: #020420;
      border-bottom: 2px solid #00d07c;
      background-color: #020420;
      color: white;
      text-align: center;
      padding-block: 1rem;
      
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 0.5rem;
    }

    h2 {
      margin: 0;
      font-weight: 600;
    }

    .badge {
      border: 1.5px solid var(--green-outline);
      border-radius: 2rem;
      font-size: 0.8rem;
      background-color: var(--dark-green);
      padding: 0.2rem 0.8rem;
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
          <span class="badge">by Nouval</>
        </div>
      `;
  }
}

customElements.define("app-header", AppHeader);
