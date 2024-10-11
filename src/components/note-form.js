import Utils from "../scripts/utils.js";

class NoteForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _submitEvent = "submit";
  _createNoteEvent = "create-note";

  _maxTitleLength = 50;

  _loading = false;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.maxTitleLength = this.getAttribute("max-title-length");
    this.render();
  }

  static get observedAttributes() {
    return ["max-title-length", "loading"];
  }

  get loading() {
    return this._loading;
  }

  set loading(value) {
    this._loading = String(value).toLowerCase() === "true";
  }

  set maxTitleLength(value) {
    const newValue = Number(value);
    if (!Utils.isValidInteger(newValue)) return;

    this._maxTitleLength = value;
  }

  get maxTitleLength() {
    return this._maxTitleLength;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
      this.connectedCallback();
    }
  }

  connectedCallback() {
    this._shadowRoot
      .querySelector("form")
      .addEventListener("submit", (event) => this._onNoteSubmit(event));
    this._shadowRoot
      .querySelector("#title")
      .addEventListener("keyup", (event) => this._onTitleChange(event));
  }

  disconnectedCallback() {
    this._shadowRoot
      .querySelector("form")
      .removeEventListener("submit", (event) => this._onFormSubmit(event));
    this._shadowRoot
      .querySelector("#title")
      .removeEventListener("keyup", (event) => this._onTitleChange(event));
  }

  _onTitleChange(event) {
    const title = event.target.value;
    const charLimitElement = this._shadowRoot.querySelector("#charLimit");
    charLimitElement.innerHTML = `${title.length}/${this.maxTitleLength}`;

    const validationElement = this._shadowRoot.querySelector(
      ".form-group__validation",
    );
    if (title.length > this.maxTitleLength) {
      validationElement.innerHTML = "Judul melebihi batas karakter";
      validationElement.style.display = "block";
    } else {
      validationElement.style.display = "none";
    }
  }

  _onNoteSubmit(event) {
    event.preventDefault();
    const title = this._shadowRoot.querySelector("#title").value;
    const content = this._shadowRoot.querySelector("#content").value;
    const note = {
      id: +new Date(),
      title,
      body: content,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    this._clearForm();
    document.dispatchEvent(new CustomEvent("add-note", { detail: note }));
  }

  _clearForm() {
    this._shadowRoot.querySelector("form").reset();
    const charLimitElement = this._shadowRoot.querySelector("#charLimit");
    charLimitElement.innerHTML = `0/${this.maxTitleLength}`;
  }

  _clearContent() {
    this._shadowRoot.innerHTML = "";
  }

  _setStyle() {
    this._style.textContent = `
      :host{
        display: block;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .note-form {
        margin: auto;
        border: 1px solid var(--lightgray);
        border-radius: 0.3rem;
        width: 100%;
        max-width: 38rem;
        background-color: var(--gray);
        overflow: hidden;
      }

      .note-form__header {
        border-bottom: 1px solid var(--lightgray);
        background-color: var(--darkgray);
        padding: 0.5rem 1rem;
      }

      .note-form__header h4 {
        font-weight: 400;
      }

      .note-form__body {
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .note-form__body button {
        border-radius: 0.2rem;
        padding: 0.5rem 1rem;
        transition: all 0.2s;
        border: none;
        background-color: var(--green);
        font-weight: 600;
      }

      .note-form__body button:hover {
        cursor: pointer;
        background-color: rgba(var(--green-rgb), 0.6);
      }

      .form-group__header{
        display: flex;
        justify-content: space-between;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
      }
        
      .form-group input,
      .form-group textarea {
        font-size: 0.9rem;
        font-family: "Poppins", sans-serif;
        line-height: 1.5;
        width: 100%;
        display: block;
        background-color: var(--gray);
        border: 1px solid var(--lightgray);
        color: white;
        padding: 0.7rem;
        border-radius: 0.3rem;
        resize: vertical;
        font-weight: 300;
      }

      .form-group input:focus-visible,
      .form-group textarea:focus-visible {
        appearance: none;
        outline: none;
        box-shadow: 0 0 0 1px var(--green);
      }

      .form-group__validation{
        color: red;
        font-size: 0.8rem;
        padding-block: 0.5rem;
        display: none;
      }
    `;
  }

  render() {
    this._clearContent();
    this._setStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="note-form">
        <div class="note-form__header">
          <h4>Tambah Note</h4>
        </div>
        <form class="note-form__body">
          <div class="form-group">
            <div class="form-group__header">
              <label for="title">Judul</label>
              <span id="charLimit">0/${this.maxTitleLength}</span>
            </div>
              <input type="text" name="title" id="title" required pattern=".{1,${
                this.maxTitleLength
              }}" title="Masukkan antara 1-${this.maxTitleLength} karakter"  />
              <span class="form-group__validation">Judul melebihi batas karakter</span>
          </div>
          <div class="form-group">
            <label for="content">Isi</label>
            <textarea name="content" id="content" rows="6" required></textarea>
          </div>
          <button type="submit">${
            this.loading
              ? "<app-loading display='block'></app-loading>"
              : "Simpan"
          }</button>
        </form>
      </div>
    `;
  }
}

customElements.define("note-form", NoteForm);
