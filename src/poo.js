// Programmation orienté objet et les constructeurs

// 22/03/2022
// Exo : 3 définition de la programmation objet en JS explicitement en Anglais
// Qu'est ce que l'encapsulation, l'abstraction, l'héritage et constructeur

const obj = {
  a: 42,
};
console.log(obj);
// Exo définir une fonction et le scop du this
// function Utilisateur(nom, prenom, age) {
//   this.nom = nom;
//   this.prenom = prenom;
//   this.age = age;
//   this.dateCreation = new Date();
//   this.admin = false;
// }

// Exo définir une fonction et le scop du this
class Utilisateur {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.dateCreation = new Date();
    this.admin = false;
  }
}

// Instancier une méthode en faisant new Utilisateur
const paul = new Utilisateur("Bouhaben", "David", 27);
const jean = new Utilisateur("baba", "cool", 29);
console.log(paul, jean);
// grace a this.nom (l'hretirage), automatiquement ça se connecte

// Fonction constructeur
// Les constructeur est une fonction qui permet de créer des objets, les fonctuons constructeurs
// sont des modèles pour créer des objets. New permet d'instancier un objet depuis la fonction
// Constructeur avec l'opérateur New. Pour l'instant, ne fonctionne pas avec la fonction flécher

// 1 - Un objet vide est créé auquel this est assigné.

// 2 - Les instructions de la fonction sont exécutées : nous ajoutons des propriétés et des méthodes à l'objet vide.

// 3 - this, donc le nouvel objet avec les nouvelles propriétés, est retourné.

// 4 - Le prototype de l'objet instancié est le prototype du constructeur (nous y reviendrons en détails dans les leçons suivantes).

// L'interet du constructeur est de ne pas se repeter
