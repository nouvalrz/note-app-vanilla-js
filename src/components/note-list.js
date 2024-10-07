import Utils from "../scripts/utils.js";

class NoteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _itemMinWidth = 16;
  _gap = 1;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.render();
  }

  static get observedAttributes() {
    return ["item-min-width", "gap"];
  }

  set itemMinWidth(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this._itemMinWidth = value;
  }

  get itemMinWidth() {
    return this._itemMinWidth;
  }

  set gap(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this._gap = value;
  }

  get gap() {
    return this._gap;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "item-min-width":
        this.itemMinWidth = newValue;
        break;
      case "gap":
        this.gap = newValue;
        break;
    }

    this.render();
  }

  _setStyle() {
    this._style.textContent = `
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      .note-list__wrapper {
        margin-block: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(${this.itemMinWidth}rem, 1fr));
        gap: 1rem;
      }
    `;
  }

  _clearContent() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this._clearContent();
    this._setStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="note-list__wrapper">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("note-list", NoteList);
