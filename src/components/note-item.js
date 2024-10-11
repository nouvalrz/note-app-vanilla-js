import "../scripts/utils.js";
import Utils from "../scripts/utils.js";
import { gsap } from "gsap";

class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: false,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  connectedCallback() {
    this._shadowRoot
      .querySelector("#toggleArchived")
      .addEventListener("click", (event) => this._onToggleArchived(event));
    this._shadowRoot
      .querySelector("#deleteNote")
      .addEventListener("click", (event) => this._onDeleteNote(event));

    gsap.to(this._shadowRoot.querySelector(".note-list__item"), {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  disconnectedCallback() {
    this._shadowRoot
      .querySelector("#toggleArchived")
      .removeEventListener("click", (event) => this._onToggleArchived(event));
    this._shadowRoot
      .querySelector("#deleteNote")
      .removeEventListener("click", (event) => this._onDeleteNote(event));
  }

  _onToggleArchived(event) {
    event.preventDefault();

    if (this.note.archived) {
      document.dispatchEvent(
        new CustomEvent("unarchive-note", { detail: this.note })
      );
    } else {
      document.dispatchEvent(
        new CustomEvent("archive-note", { detail: this.note })
      );
    }
  }

  _onDeleteNote(event) {
    event.preventDefault();
    document.dispatchEvent(
      new CustomEvent("delete-note", { detail: this.note })
    );
  }

  _clearContent() {
    this._shadowRoot.innerHTML = "";
  }

  _setStyle() {
    this._style.textContent = `
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      .note-list__item {
        opacity: 0;
        transform: translateY(2rem);
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 1px solid var(--lightgray);
        border-radius: 0.3rem;
        padding: 1rem;
      }

      .note-list__item-body {
        overflow: scroll;
        height: 10rem;

        flex-grow: 1;
        font-size: 0.9rem;
        padding-block: 1rem;
        border-block: 1.5px dashed var(--lightgray);
      }

      .note-list__button-group {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
      }

      .note-list__button-group button {
        border: 1px solid var(--lightgray);
        background-color: var(--gray);
        color: white;
        border-radius: 0.2rem;
        padding: 0.5rem 1rem;
        transition: all 0.2s;
      }

      .note-list__button-group button:hover {
        cursor: pointer;
        background-color: transparent;
      }

      i {
        margin-right: 0.3rem;
      }

      .red {
        color: red !important;
      }
    `;
  }

  render() {
    this._clearContent();
    this._setStyle();

    const formatedDate = Utils.formatDateString(this.note.createdAt);

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="note-list__item">
        <h4>${this.note.title}</h4>
        <p>${formatedDate}</p>
        <p class="note-list__item-body">
          ${this.note.body}
        </p>
        <div class="note-list__button-group">
          <button type="button" id="toggleArchived">${
            this.note.archived ? "Restore" : "Arsip"
          }
          </button>
          <button type="button" class="red" id="deleteNote">
            Hapus
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("note-item", NoteItem);
