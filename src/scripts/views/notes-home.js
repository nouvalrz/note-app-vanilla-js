import "../utils.js";
import "../data/local/notes.js";
import Note from "../data/local/notes.js";
import Utils from "../utils.js";

const allNotes = [...Note.getAll()];

const notesHome = () => {
  document.addEventListener("add-note", (event) => {
    allNotes.push(event.detail);
    render();
  });

  document.addEventListener("edit-note", (event) => {
    const selectedNoteIndex = allNotes.findIndex(
      (note) => note.id === event.detail.id
    );
    allNotes.splice(selectedNoteIndex, 1, event.detail);
    render();
  });

  document.addEventListener("delete-note", (event) => {
    const selectedNoteIndex = allNotes.findIndex(
      (note) => note.id === event.detail.id
    );
    allNotes.splice(selectedNoteIndex, 1);
    render();
  });

  const render = () => {
    renderActive();
    renderArchived();
  };

  const renderActive = () => {
    const noteActiveListElement = document.querySelector("#note-list-active");
    const activeNotesSorted = allNotes
      .filter((note) => !note.archived)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const noteItemElements = activeNotesSorted.map((note) => {
      const noteItemElement = document.createElement("note-item");
      noteItemElement.note = note;
      return noteItemElement;
    });

    if (noteItemElements.length === 0) {
      const noteEmptyElement = document.createElement("note-empty");
      noteItemElements.push(noteEmptyElement);
    }

    Utils.emptyElement(noteActiveListElement);
    noteActiveListElement.append(...noteItemElements);
  };

  const renderArchived = () => {
    const noteArchivedListElement = document.querySelector(
      "#note-list-archived"
    );
    const archivedNotesSorted = allNotes
      .filter((note) => note.archived)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const noteItemElements = archivedNotesSorted.map((note) => {
      const noteItemElement = document.createElement("note-item");
      noteItemElement.note = note;
      return noteItemElement;
    });

    if (noteItemElements.length === 0) {
      const noteEmptyElement = document.createElement("note-empty");
      noteItemElements.push(noteEmptyElement);
    }

    Utils.emptyElement(noteArchivedListElement);
    noteArchivedListElement.append(...noteItemElements);
  };

  render();
};

export default notesHome;
