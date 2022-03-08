import "./style.css";

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
  {
    text: "Demain, je vais faire le JavaScript",
    done: false,
    editMode: true,
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(value);
});

// On crée une fonction displayTodo pour afficher le do
const displayTodo = () => {
  // On recuprer ce tableau, et on affiche sur le HTML
  const todosNode = todos.map((todo, index) => {
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
  deleteButton.innerHTML = "Supprimer";
  const editButton = document.createElement("button");
  editButton.innerHTML = "Modification";
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteToDo(index);
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
    editToDo(index, input);
  });
  li.append(input, cancelButton, saveButton);
  return li;
};

const addToDo = (text) => {
  todos.push({
    text,
    done: false,
  });

  displayTodo();
};

const deleteToDo = (index) => {
  todos.splice(index, 1);

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

displayTodo();
