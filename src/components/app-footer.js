class AppFooter extends HTMLElement {
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

        color: #020420;
        border-top: 1px solid var(--lightgray);
        background-color: #020420;
        color: white;
        text-align: center;
        padding-block: 1rem;
        
        display: flex;
        justify-content: space-between;

        padding: 1rem 2rem;
      }
  
      h4, h5 {
        margin: 0;
        font-weight: 600;
      }

      @media screen and (max-width: 768px){
        div {
            flex-direction: column;
            align-items: center;
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
          <div>
            <h4>Develop by Nouval Rizky</h4>
            <h5>Design inspired by Nuxt Official Website</h4>
          </div>
        `;
  }
}

customElements.define("app-footer", AppFooter);
