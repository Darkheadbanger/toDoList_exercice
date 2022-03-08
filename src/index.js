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
  },
  {
    text: "Demain, je vais faire le JavaScript",
    done: false,
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
    return createToDoElement(todo, index);
  });

  ul.innerHTML = "";
  ul.append(...todosNode);
};

// On crée une fonction qui permet de créer les élements todo
const createToDoElement = (todo, index) => {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Supprimer";
  deleteButton.addEventListener("click", (event) => {
    deleteToDo(index);
  });
  li.innerHTML = `
  <span class="todo ${todo.done ? "done" : ""}"></span>
  <p>${
    todo.text.charAt(0).toUpperCase() + todo.text.slice(1).toLowerCase()
  }</p> 
  `;
  li.appendChild(deleteButton);
  // On va retourner li qui corresponds au codeHTML complet qu'on va utiliser pour afficher plus haut
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

displayTodo();
