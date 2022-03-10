import "./style.css";
import "./asynchrone";
// On récupère le ul pour pouvoir afficheer dans la liste
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

// On simule la base de donées en créant une variable qui comporte des objets dans un tableau
let todos = [
  {
    text: "Je suis un todo",
    done: true,
    editMode: false,
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  if (value) {
    input.value = "";
  }
  addToDo(value);
});

// On crée une fonction displayTodo pour afficher le do
const displayTodo = () => {
  // On recuprer ce tableau, et on affiche sur le HTML
  const todosNode = todos.map((todo, index) => {
    // Si edite mode est true alors, on peut le modifier
    if (todo.editMode) {
      return createToDoEditElement(todo, index);
    } else {
      return createToDoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

// On crée une fonction qui permet de créer les élements todo
const createToDoElement = (todo, index) => {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Supprimer";
  const editButton = document.createElement("button");
  editButton.innerText = "Modification";
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (confirm("Est ce que vous êtes sûr de vouloir effacer cette tâches ?")) {
      deleteToDo(todo, index);
    } else {
      return;
    }
  });
  editButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  li.innerHTML = `
  <span class="todo ${todo.done ? "done" : ""}"></span>
  <p>${
    todo.text.charAt(0).toUpperCase() + todo.text.slice(1).toLowerCase()
  }</p> 
  `;

  li.append(deleteButton, editButton);
  li.addEventListener("click", () => {
    toggleTodo(index);
  });

  // On va retourner li qui corresponds au codeHTML complet qu'on va utiliser pour afficher plus haut
  return li;
};

const createToDoEditElement = (todo, index) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  const cancelButton = document.createElement("Button");
  cancelButton.innerHTML = "Cancel";
  cancelButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  saveButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (confirm("Êtes vous sur de vouloir modifier cette tâches ?")) {
      editToDo(index, input);
    } else {
      return;
    }
  });
  li.append(input, cancelButton, saveButton);
  return li;
};

const addToDo = (text) => {
  console.log(text);
  if (!text) {
    return alert("Veuillez remplir le champ!");
  } else {
    todos.push({
      text,
      done: false,
    });
    localSaved();
    displayTodo();
  }
};

const deleteToDo = (index) => {
  todos.splice(index, 1);
  deleteDataFromLocalStorage(index);
  displayTodo();
};

const toggleTodo = (index) => {
  todos[index].done = !todos[index].done;
  displayTodo();
};

const toggleEditMode = (index) => {
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
};

const editToDo = (index, input) => {
  const value = input.value;
  todos[index].text = value;
  todos[index].editMode = false;
  displayTodo();
};

const localSaved = () => {
  console.log("ici todo :", todos);
  if (JSON.parse(localStorage.getItem("todo-element")) === null) {
    localStorage.setItem("todo-element", JSON.stringify(todos));
  } else {
    localStorage.setItem("todo-element", JSON.stringify(todos));
  }
};

const retrieveLocalStorage = () => {
  if (JSON.parse(localStorage.getItem("todo-element")) !== null) {
    todos = JSON.parse(localStorage.getItem("todo-element"));
  }
  // Toujours afficher le displayTodo c'est a dire, afficher tent que le données du localStorage active
  displayTodo();
};
const deleteDataFromLocalStorage = (index) => {
  console.log("index ici :", index);
  const store = JSON.parse(localStorage.getItem("todo-element")) || [];
  store.splice(index, 1);
  localStorage.setItem("todo-element", JSON.stringify(todos));
  displayTodo();
};
displayTodo();
// Il faut toujours mettre le localStorage en global (pas dans une fonction) pour le faire fonctionner
retrieveLocalStorage();

// Exo Todo et BONNNNNNNEEEE CHHAAAAANNNCEEEEEEEEEEEEEE!!!!!!!!!!!!!!
// 1. d'empecher l'ajout de todo vide (fait)
// 2. LocalStorage et que ca reste (fait)
// 3. d'empecher d'ajouter le même tache
// 3. Mettre une majuscule a la premiere lettre du texte de la todo
// 4. Barré le text de la todo lorsqu'elle est terminer
// 5.Ajouter un curseur pointer sur les todos
// 6. Ajouter un effet hover sur les todos pour mieux voir sur laquelle l'utilisateur va cliquer
// 7. Créer des classes pour colorer les boutons
// 8. a voir : Lors de l'édition, ajoutez un écouteur pour sauvegarder avec la touche entrée si le champ est focus ou annuler avec la touche escape.
// 9. a voir : Rendre l'édition possible sur un double clic.
