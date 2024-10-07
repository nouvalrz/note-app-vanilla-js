class NoteEmpty extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
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
            <i>Belum ada catatan</i>
          </div>
        `;
  }
}

customElements.define("note-empty", NoteEmpty);
