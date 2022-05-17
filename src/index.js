import "./style.css";
import "./asynchrone";
import "./date";
import "./objet";
import "./poo";
import "./prototype";
import "./regularExpressions";
import "./keys-values-entrues-etc";
import "./debugging";
import "./gestionDErreurs";
import "./exo";
import "./canvas";
import "./classes";
// Exo Todo et BONNNNNNNEEEE CHHAAAAANNNCEEEEEEEEEEEEEE!!!!!!!!!!!!!!
// 1. d'empecher l'ajout de todo vide (fait)
// 2. LocalStorage et que ca reste (fait)
// 3. d'empecher d'ajouter le même tache (On verra avec prof si c'est bien)
// 3. Mettre une majuscule a la premiere lettre du texte de la todo (fait)
// 4. Barré le text de la todo lorsqu'elle est terminer (fait, mais  a un truc que je ne comprends pas)
// 5. Ajouter un curseur pointer sur les todos <fait>
// 6. Ajouter un effet hover sur les todos pour mieux voir sur laquelle l'utilisateur va cliquer (fait)
// 7. Créer des classes pour colorer les boutons (fait)
// 8. a voir : Lors de l'édition, ajoutez un écouteur pour sauvegarder avec la touche entrée si le champ est focus ou annuler avec la touche escape. (fait)
// 9. a voir : Rendre l'édition possible sur un double clic. (fait)
// On récupère le ul pour pouvoir afficheer dans la liste
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", pageReady);
} else {
  const pageReady = () => {
    // On simule la base de donées en créant une variable qui comporte des objets dans un tableau
    let todos = [
      {
        text: "Je suis un todo",
        done: true,
        editMode: false,
      },
    ];

    const addWork = () => {
      form.addEventListener("dblclick", (event) => {
        event.preventDefault();
        const value = input.value;
        if (value) {
          input.value = "";
        }
        addToDo(value, todos);
      });

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = input.value;
        if (value) {
          input.value = "";
        }
        console.log("array :", todos);
        addToDo(value, todos);
      });
    };

    const escapeFromInput = () => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          input.blur();
        }
        console.info(e.key);
      });
    };

    form.addEventListener(
      "focus",
      (event) => {
        if (event) {
          event.target.style.background = "#ebedf0";
        }
      },
      true
    );

    form.addEventListener(
      "blur",
      (event) => {
        event.target.style.background = "";
      },
      true
    );

    // On crée une fonction displayTodo pour afficher le todo
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
      const p = document.createElement("p");
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Supprimer";
      deleteButton.classList.add("danger");
      const modificationButton = document.createElement("button");
      modificationButton.innerText = "Modification";
      modificationButton.classList.add("modification");
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (
          confirm("Est ce que vous êtes sûr de vouloir effacer cette tâches ?")
        ) {
          deleteToDo(index);
        }
      });

      // Cette fonctionne sert pour barré les tâches effectués
      finishedTodo(todo, p);

      // Modification button
      modificationButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleEditMode(index);
      });

      // InnerHTML here
      li.innerHTML = `
  <span class="todo ${todo.done ? "done" : ""}"></span>
  `;
      p.innerHTML = `${
        todo.text.charAt(0).toUpperCase() + todo.text.slice(1).toLowerCase()
      }`;

      // p.style.cursor = "pointer"
      li.style.cursor = "pointer";

      // console.log((p.style.textDecoration = "line-through"));
      li.append(p, deleteButton, modificationButton);

      // Clicked dans la balise li
      li.addEventListener("click", (event) => {
        event.preventDefault();
        toggleTodo(todo);
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
      saveButton.classList.add("modification");
      saveButton.innerHTML = "Save";
      const cancelButton = document.createElement("button");
      cancelButton.classList.add("danger");
      cancelButton.innerHTML = "Cancel";
      cancelButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleEditMode(index);
      });
      saveButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (confirm("Êtes vous sur de vouloir modifier cette tâches ?")) {
          editToDo(index, todo, input);
        }
      });
      li.append(input, saveButton, cancelButton);
      return li;
    };

    const avoidDuplicateToDo = (text, todos) => {
      // Demander pourquoi si on met entrecote {} ne fonctionne pas
      const findTheSameText = (todo) => todo.text === text;
      const includesTodos = todos.findIndex(findTheSameText);
      // Demander pourquoi const includesTodos = todos.includes(text) ou todos.indexOf(text) === -1 fonctionne mais si on met un seul string, ca me retourne l'alert
      if (includesTodos === -1) {
        // sans === -1, il va chercher le premier index, le fait de
        // -1 veut dire si "si la valeur n'est pas inclu dans le tableau"
        todos.push({
          text,
          done: false,
        });
      } else {
        alert("Vous ne pouvez pas ajouter le même activiter!");
      }
    };

    const addToDo = (text, todos) => {
      if (!text) {
        return alert("Veuillez remplir le champ!");
      } else {
        avoidDuplicateToDo(text, todos);
      }

      dataSetToLocalStorage();
      displayTodo();
    };

    const deleteToDo = (index) => {
      todos.splice(index, 1);
      deleteDataFromLocalStorage(index);
      displayTodo();
    };
    // (todo, index)
    const toggleTodo = (todo) => {
      // todos[index].done = !todos[index].done;
      todo.done = !todo.done;
      displayTodo();
    };

    const finishedTodo = (todo, p) => {
      // todo.done
      //   ? (p.style.textDecoration = "line-through") ? todo.done
      //   : (p.style.textDecoration = "none");
      if (todo.done) {
        p.style.textDecoration = "line-through solid 1.5px green";
      } else {
        p.style.textDecoration = "none";
      }
    };

    const toggleEditMode = (index) => {
      todos[index].editMode = !todos[index].editMode;
      displayTodo();
    };

    const editToDo = (index, todo, input) => {
      console.log(todo.text === input.value);
      const InputValue = input.value;
      const findTheSameText = (todo) => todo.text === InputValue;
      const includesTodos = todos.findIndex(findTheSameText);
      if (InputValue === "") {
        return alert("Veuillez mettre un text s'il vous plait!");
      }
      if (includesTodos - 1) {
        console.log(todo.text);
        todo.text = InputValue; // todo.text : Directement récuperer le paramètre itéré
        todos[index].editMode = false; //todos[index], on récupère le tableau et on pointe vers l'index a chaque fois
      } else {
        return alert("Vous ne pouvez pas modifier pour ajouter le même activiter!");
      }
      dataSetToLocalStorage();
      displayTodo();
    };

    const dataSetToLocalStorage = () => {
      localStorage.setItem("todo-element", JSON.stringify(todos));
      displayTodo();
    };

    const retrieveLocalStorage = () => {
      todos = JSON.parse(localStorage.getItem("todo-element")) || [];
      // Toujours afficher le displayTodo c'est a dire, afficher tent que le données du localStorage active
      displayTodo();
    };
    const deleteDataFromLocalStorage = (index) => {
      console.log("index ici :", index);
      let store = JSON.parse(localStorage.getItem("todo-element")) || [];
      store.splice(index, 1);
      localStorage.setItem("todo-element", JSON.stringify(todos));
      displayTodo();
    };
    addWork();
    displayTodo();
    // Il faut toujours mettre le localStorage en global (pas dans une fonction) pour le faire fonctionner
    retrieveLocalStorage();
    escapeFromInput();
  };
  pageReady();
}
