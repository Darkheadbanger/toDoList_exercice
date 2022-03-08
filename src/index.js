// Exo
// HTML et JS, faire un site très simple pour gerer un input et un bouton et au clique ca créer une liste que j'ai crée et s'affiche dans le console log
// Utiliser ...spread
// Il faut que ca reste dans le localstorage

import "./style.css";

// On récupère le ul pour pouvoir afficheer dans la liste
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");

// On simule la base de donées en créant une variable qui comporte des objets dans un tableau
let todos = [
  {
    text: "Je suis un todo",
    done: false,
  },
  {
    text: "Demain, je vais faire le JavaScript",
    done: false,
  },
];

if (JSON.parse(localStorage.getItem("todo-element")) !== null) {
  todos = JSON.parse(localStorage.getItem("todo-element"));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === "") {
    return alert("Bonjour, veuillez remplir le champ!");
  } else {
    // Le push ne fonctionne pas
    todos.push({
      text: input.value.trim(),
      done: false,
    });

    input.value = "";

    // Maintenant, on doit sauvegarder tous cela dans le localstorage pour que la page mémorise les noms ajoutés
    // Si le localstorage est null alors on retourne todos null si non todos non null
    // if (JSON.parse(localStorage.getItem("todo-todos")) === null) {
    //   localStorage.setItem("todo-todos", JSON.stringify(todos));
    // } else {
    //   localStorage.setItem("todo-todos", JSON.stringify(todos));
    // }
    localStorage.setItem("todo-element", JSON.stringify(todos));

    displayTodo();
  }
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
const createToDoElement = (todo) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <span class="todo ${todo.done ? "done" : ""}"></span>
  <p>${
    todo.text.charAt(0).toUpperCase() + todo.text.slice(1).toLowerCase()
  }</p> 
  `;
  // On va retourner li qui corresponds au codeHTML complet qu'on va utiliser pour afficher plus haut
  return li;
};

displayTodo();
