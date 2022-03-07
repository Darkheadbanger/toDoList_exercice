// Exo
// HTML et JS, faire un site très simple pour gerer un input et un bouton et au clique ca créer une liste que j'ai crée et s'affiche dans le console log
// Utiliser ...spread
// Il faut que ca reste dans le localstorage

import "./style.css";

// On récupère le ul pour pouvoir afficheer dans la liste
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");

const element = [];
// On simule la base de donées en créant une variable qui comporte des objets dans un tableau
const todos = [
  {
    text: "Je suis un todo",
    done: true,
  },
  {
    text: "Je dois faire le JavaScript demain",
    done: false,
  },
  {
    text: "Je dois faire le HTML/CSS demain",
    done: false,
  },
];

window.onload = function () {
  if (JSON.parse(localStorage.getItem("todo-element")) !== null) {
    element.push(JSON.parse(localStorage.getItem("todo-element")));
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() === "") {
    return alert("Bonjour, veuillez remplir le champ!");
  } else {
    // Le push ne fonctionne pas
    element.push({
      text: input.value.trim(),
      done: false,
    });
    if (input.value.trim() !== "") {
      input.value = "";
    }
    // Maintenant, on doit sauvegarder tous cela dans le localstorage pour que la page mémorise les noms ajoutés
    // Si le localstorage est null alors on retourne element null si non element non null
    if (JSON.parse(localStorage.getItem("todo-element")) === null) {
      localStorage.setItem("todo-element", JSON.stringify(element));
    } else {
      localStorage.setItem("todo-element", JSON.stringify(element));
    }
    displayTodo();
  }
});

// On crée une fonction displayTodo pour afficher le do
const displayTodo = () => {
  // On recuprer ce tableau, et on affiche sur le HTML
  const todosNode = todos.map((todo, index) => {
    console.log("todo", todo);
    console.log("index", index);
    // On retourne la function createToDoElement qui comporte la création de todo list en function de resultat que la boucle map donne
    // C'est à dire, le résultat itéré du tableau todos c'est à dire les deux objets
    return createToDoElement(todo, index);
  });
  // On prends la variable ul et on ajoute une chaine de caractères vide car on commence toujours avec un string vide
  ul.innerHTML = "";
  // Ensuite, on ajoute le résultat de la liste todolist qui a été itéré avec la boucle map (qui modifie ses element) dans la page
  ul.append(...todosNode);
};
// On crée une fonction qui permet de créer les élements todo
const createToDoElement = (todo) => {
  // Creation de la variable li qui permet de récuperer la liste li
  const li = document.createElement("li");
  // On ajoute via la propriété innerHTML le html complet de ce qu'on veut afficher
  // Donc, le texte dans le tableau
  // todo.done est pour acceder le tableau de la variable todos qui a été itéré, pour ca il faut utiliser le paramètre du function
  // Donc si todo.done est true alors on met done qui représente le style css si non rien dans le style
  // todo.text permet de récuperer le text et d'ajouter dans le paragraphe
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
