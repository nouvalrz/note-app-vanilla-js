const BASE_URL = "https://notes-api.dicoding.dev/v2";

class NotesApi {
  static async handleResponse(response) {
    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error("Something went wrong");
    }
    return response.json();
  }

  static async getNote(id) {
    const response = await fetch(BASE_URL + `/notes/${id}`);
    return await this.handleResponse(response);
  }

  static async getActiveNotes() {
    const response = await fetch(BASE_URL + "/notes");
    return await this.handleResponse(response);
  }

  static async getArchivedNotes() {
    const response = await fetch(BASE_URL + "/notes/archived");
    return await this.handleResponse(response);
  }

  static async createNote(requestBody) {
    const options = {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(BASE_URL + "/notes", options);
    return await this.handleResponse(response);
  }

  static async setArchiveNote(id) {
    const response = await fetch(BASE_URL + `notes/${id}/archive`, {
      method: "POST",
    });
    return await this.handleResponse(response);
  }

  static async setUnarchiveNote(id) {
    const response = await fetch(BASE_URL + `notes/${id}/unarchive`, {
      method: "POST",
    });
    return await this.handleResponse(response);
  }

  static async deleteNote(id) {
    const response = await fetch(BASE_URL + `notes/${id}`, {
      method: "DELETE",
    });
    return await this.handleResponse(response);
  }
}

export default NotesApi;
