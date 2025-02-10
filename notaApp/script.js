const AddNote = document.querySelector("#add");
let firstNote = document.querySelector("#new-note");
const noteContainer = document.querySelector(".note-container");
const deleteNote = document.querySelector("#delete");
const text = document.querySelector(".text");
const app = document.querySelector(".app");

class noteControler {
  constructor() {
    this.notes = [];
  }
  handleAdd(nota) {
    const newContainer = document.createElement("div");
    newContainer.classList.add("note-container");
    newContainer.innerHTML = `
      <header class="tools">
        <button id="add">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            stroke-width="2"
          >
            <path d="M9 12l6 0"></path>
            <path d="M12 9l0 6"></path>
            <path
              d="M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5"
            ></path>
          </svg>
        </button>
        <button id="delete">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            stroke-width="2"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </header>
      <main class="text-area">
        <textarea
          placeholder="Start writing your note..."
          name="text"
          class="text"
        ></textarea>
        <!-- <button class="save">Save</button> -->
      </main>

    `;
    const newTextArea = newContainer.querySelector(".text");
    if (nota) {
      newContainer.dataset.id = nota.id;
      newTextArea.value = nota.text;
    }

    newTextArea.addEventListener("blur", () => {
      this.handleUpdate(newTextArea, newContainer);
    });

    return newContainer;
  }
  handleDelete(btnDelete) {
    const element = btnDelete.parentElement.parentElement;
    const id = element.getAttribute("data-id");
    console.log(id);
    this.notes = this.notes.filter((note) => note.id !== Number(id));
    this.updateUI(element);
    localStorage.setItem("notas", JSON.stringify(this.notes));
  }
  displayNotes() {
    // Clear the app before adding new notes to avoid duplicates
    app.innerHTML = "";

    // Create a fragment to hold new note elements temporarily
    const fragment = document.createDocumentFragment();

    this.notes.forEach((nota) => {
      // Use handleAdd to create a note container
      const newContainer = this.handleAdd(nota);

      // Append the note to the fragment
      fragment.appendChild(newContainer);
    });

    // Append all notes at once
    app.appendChild(fragment);
  }
  updateUI(element) {
    //  app.innerHTML = "";
    element.remove();
    console.log(this.notes);
  }
  handleUpdate(newTextArea, newContainer) {
    const noteId = newContainer.getAttribute("data-id");

    if (newTextArea.value) {
      const newNote = {
        id: noteId || Date.now(),
        text: newTextArea.value,
      };

      if (newNote.id === noteId) {
        const index = this.notes.findIndex(
          (note) => note.id === Number(noteId)
        );
        this.notes[index].text = newNote.text;
      } else {
        newContainer.dataset.id = newNote.id;
        this.notes = [...this.notes, newNote];
      }
      localStorage.setItem("notas", JSON.stringify(this.notes));
    }
  }
}

let note;
const startApp = () => {
  note = new noteControler();
  note.notes = JSON.parse(localStorage.getItem("notas")) || [];
  if (note.notes.length) note.displayNotes();

  eventInit();
};

const eventInit = () => {
  if (firstNote) {
    app.addEventListener("click", (e) => {
      const clickedButton = e.target.closest("button#new-note"); // Finds the closest button with id "add"
      if (clickedButton) {
        app.innerHTML = "";
        app.appendChild(note.handleAdd(null));
        firstNote.remove(); // Remove the first note button
      }
    });
  }

  app.addEventListener("click", (e) => {
    const clickedButton = e.target.closest("button#add"); // Finds the closest button with id "add"
    if (clickedButton) {
      // Find the note container that this button belongs to
      const cont = clickedButton.closest(".note-container");
      const textArea = cont.querySelector(".text");
      if (textArea.value) {
        app.appendChild(note.handleAdd(null));
      }
    }
  });

  app.addEventListener("click", (e) => {
    console.log("d");
    const clickedButton = e.target.closest("button#delete"); // Finds the closest button with id "delete"
    if (clickedButton) {
      note.handleDelete(clickedButton);
      console.log(note.notes.length);
      if (note.notes.length === 0) {
        app.innerHTML = `
         <button class="save" id="new-note">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="24"
          height="24"
          stroke-width="2"
        >
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
      </button>
        `;
      }
    }
  });
};
window.addEventListener("DOMContentLoaded", startApp);
