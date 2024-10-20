import "../utils.js";
import "../data/local/notes.js";
import Utils from "../utils.js";
import NotesApi from "../data/remote/notes-api.js";

const notesHome = () => {
  document.addEventListener("add-note", async (event) => {
    const noteFormElement = document.querySelector("note-form");
    noteFormElement.setAttribute("loading", true);
    try {
      const { title, body } = event.detail;
      const requestBody = { title, body };
      await NotesApi.createNote(requestBody);
      render();

      Utils.TimerToast.fire({
        title: "Success!",
        text: "Berhasil menambah catatan",
        icon: "success",
      });
    } catch (e) {
      Utils.PopUp.fire({
        title: "Error!",
        text: e,
        icon: "error",
      });
    }
    noteFormElement.setAttribute("loading", false);
  });

  document.addEventListener("archive-note", async (event) => {
    try {
      await NotesApi.setArchiveNote(event.detail.id);
      Utils.TimerToast.fire({
        title: "Success!",
        text: "Berhasil mengarsip catatan",
        icon: "success",
      });
      render();
    } catch (e) {
      Utils.PopUp.fire({
        title: "Error!",
        text: e,
        icon: "error",
      });
    }
  });

  document.addEventListener("unarchive-note", async (event) => {
    try {
      await NotesApi.setUnarchiveNote(event.detail.id);
      Utils.TimerToast.fire({
        title: "Success!",
        text: "Berhasil mengambalikan catatan",
        icon: "success",
      });
      render();
    } catch (e) {
      Utils.PopUp.fire({
        title: "Error!",
        text: e,
        icon: "error",
      });
    }
  });

  document.addEventListener("delete-note", async (event) => {
    try {
      const result = await Utils.PopUp.fire({
        title: "Apakah yakin menghapus catatan?",
        showCancelButton: true,
        confirmButtonText: "Ya",
      });

      if (!result.isConfirmed) {
        return;
      }

      await NotesApi.deleteNote(event.detail.id);
      render();
      Utils.TimerToast.fire({
        title: "Success!",
        text: "Berhasil menghapus catatan",
        icon: "success",
      });
    } catch (e) {
      Utils.PopUp.fire({
        title: "Error!",
        text: e,
        icon: "error",
      });
    }
  });

  const render = () => {
    renderActive();
    renderArchived();
  };

  const renderActive = async () => {
    const noteActiveLoading = document.querySelector("#note-active-loading");
    noteActiveLoading.setAttribute("display", "block");
    const noteActiveListElement = document.querySelector("#note-list-active");

    try {
      const response = await NotesApi.getActiveNotes();
      const notesSorted = response["data"].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      const noteItemElements = notesSorted.map((note) => {
        const noteItemElement = document.createElement("note-item");
        noteItemElement.note = note;
        return noteItemElement;
      });

      if (noteItemElements.length === 0) {
        const noteEmptyElement = document.createElement("note-empty");
        noteItemElements.push(noteEmptyElement);
      }

      noteActiveLoading.setAttribute("display", "none");
      Utils.emptyElement(noteActiveListElement);
      noteActiveListElement.append(...noteItemElements);
    } catch (e) {
      const appErrorElement = document.createElement("app-error");
      appErrorElement.message = e;
      Utils.emptyElement(noteActiveListElement);
      noteActiveListElement.append(appErrorElement);
    }
  };

  const renderArchived = async () => {
    const noteArchivedLoading = document.querySelector(
      "#note-archived-loading"
    );
    noteArchivedLoading.setAttribute("display", "block");
    const noteArchivedListElement = document.querySelector(
      "#note-list-archived"
    );

    try {
      const response = await NotesApi.getArchivedNotes();
      const notesSorted = response["data"].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      const noteItemElements = notesSorted.map((note) => {
        const noteItemElement = document.createElement("note-item");
        noteItemElement.note = note;
        return noteItemElement;
      });

      if (noteItemElements.length === 0) {
        const noteEmptyElement = document.createElement("note-empty");
        noteItemElements.push(noteEmptyElement);
      }

      noteArchivedLoading.setAttribute("display", "none");
      Utils.emptyElement(noteArchivedListElement);
      noteArchivedListElement.append(...noteItemElements);
    } catch (e) {
      const appErrorElement = document.createElement("app-error");
      appErrorElement.message = e;
      Utils.emptyElement(noteArchivedListElement);
      noteArchivedListElement.append(appErrorElement);
    }
  };

  render();
};

export default notesHome;
