import "./style.css";
import "./asynchrone";
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
        addToDo(value);
      });

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = input.value;
        if (value) {
          input.value = "";
        }
        addToDo(value);
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
      const p = document.createElement("p");
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Supprimer";
      deleteButton.classList.add("danger");
      const editButton = document.createElement("button");
      editButton.innerText = "Modification";
      editButton.classList.add("modification");
      deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        if (
          confirm("Est ce que vous êtes sûr de vouloir effacer cette tâches ?")
        ) {
          deleteToDo(todo, index);
        } else {
          return;
        }
      });
      editButton.addEventListener("click", (event) => {
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
      li.append(p, deleteButton, editButton);

      // Clicked dans la balise li
      li.addEventListener("click", (event) => {
        event.preventDefault();
        toggleTodo(todo);
      });

      // Cette fonctionne sert pour barré les tâches effectués
      finishedTodo(todo, p);

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
          editToDo(index, input);
        } else {
          return;
        }
      });
      li.append(input, saveButton, cancelButton);
      return li;
    };

    const addToDo = (text) => {
      console.log(text);
      if (!text) {
        return alert("Veuillez remplir le champ!");
      } else {
        // Pour empecher d'ajouter la même tâches
        // Ajouter todo et index itéré dans le paramètre, ensuite comparer le bon id avec le bon message et dire si
        // Le message est le même, on ne peut pas ajouter me même tâche
        todos.push({
          text,
          done: false,
        });

        dataSetToLocalStorage();
        displayTodo();
      }
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
        p.style.textDecoration = "line-through";
        p.style.textDecorationColor = "red";
      } else {
        p.style.textDecoration = "none";
      }
    };

    const toggleEditMode = (index) => {
      todos[index].editMode = !todos[index].editMode;
      displayTodo();
    };

    const editToDo = (index, input) => {
      const value = input.value;
      todos[index].text = value;
      todos[index].editMode = false;
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

    // Exo Todo et BONNNNNNNEEEE CHHAAAAANNNCEEEEEEEEEEEEEE!!!!!!!!!!!!!!
    // 1. d'empecher l'ajout de todo vide (fait)
    // 2. LocalStorage et que ca reste (fait)
    // 3. d'empecher d'ajouter le même tache (On verra avec prof si c'est bien)
    // 3. Mettre une majuscule a la premiere lettre du texte de la todo (fait)
    // 4. Barré le text de la todo lorsqu'elle est terminer (fait, mais  a un truc que je ne comprends pas)
    // 5. Ajouter un curseur pointer sur les todos <fait>
    // 6. Ajouter un effet hover sur les todos pour mieux voir sur laquelle l'utilisateur va cliquer (fait)
    // 7. Créer des classes pour colorer les boutons (fait)
    // 8. a voir : Lors de l'édition, ajoutez un écouteur pour sauvegarder avec la touche entrée si le champ est focus ou annuler avec la touche escape.
    // 9. a voir : Rendre l'édition possible sur un double clic.
  };
  pageReady();
}
