const objet = {
  a: 1,
};

objet.b = 2;
objet["c"] = 3;

// Exo, réaliser un tableau et un objet en ajoutant la valeur à la main
// Et les supprimer via une méthode jS
const band = ["Guitare", "Drum", "Bass", "Chanteur", 4, "Synthé"];
const bandShallowCopy = band; // Shallo copy, change la mémmoire affecté donc change l'original
const bandDeepCopy = [...band];
console.log(bandDeepCopy);
console.log((bandDeepCopy[5] = "Metal"));
console.log(bandDeepCopy); // Uniquement la copie qui est affecté
console.log(band); // L'oiginal n'est pas affecté

// // Enlevé le dernier element de l'array
// const removed = bandDeepCopy.pop(); // Synthé enlevé
// console.log(removed); // Uniquement la copie qui est affecté
// console.log(bandDeepCopy); // Uniquement la copie qui est affecté
// console.log(band); // L'oiginal n'est pas affecté

// // Enlevé le premier element de l'array
// const removed1 = bandDeepCopy.shift(); // Synthé enlevé
// console.log(removed1); // Uniquement la copie qui est affecté
// console.log(bandDeepCopy); // Uniquement la copie qui est affecté
// console.log(band); // L'oiginal n'est pas affecté

// Methode splice pour supprimer
let removedBandSplice = bandDeepCopy.splice(2, 1); // A partir de l'index 2 (bass) alors on efface 1 element (bass)
console.log(removedBandSplice);
console.log(bandDeepCopy); // Uniquement la copie qui est affecté
console.log(band); // L'oiginal n'est pas affecté

// Méthode splice pour supprimer et ajouter
let removedAndInseredBandSplice = bandDeepCopy.splice(
  2,
  1,
  "Bassiste",
  "Chanteur"
); // A partir de l'index 2 (chanteur, car la bass a été éfacé plus haut) alors on efface 1 element (bass)
console.log(removedAndInseredBandSplice);
console.log(bandDeepCopy); // Uniquement la copie qui est affecté
console.log(band); // L'oiginal n'est pas affecté

// Méthode splice pour supprimer et ajouter
let InseredBandSplice = bandDeepCopy.splice(2, 0, "Guitariste Chanteur"); // A partir de l'index 2 (chanteur, car la bass a été éfacé plus haut) alors on efface 1 element (bass)
console.log(InseredBandSplice);
console.log(bandDeepCopy); // Uniquement la copie qui est affecté
console.log(band); // L'oiginal n'est pas affecté

const musicien = [
  {
    guitare: "Kirk Hammet",
    bass: "Robert Trujillo",
    drum: "Lars Ulrich",
    Chanteur: "James Hetfield",
  },
];

const style = {
  genre: "Heavy Metal",
};

// 30/03/2022

// Les classes JS ont été introduites avec ECMAScript 2015. Elles sont un sucre syntaxique par rapport à l’héritage protoypal. En effet, cette syntaxe n’introduit pas un nouveau modèle d’héritage  dans JS ! Elle fournit uniquement une syntaxe plus simple pour créer des objets et manipuler l’héritage.

// Définition
// Les classes sont juste des fonctions spéciales. Ainsi, les classes sont définies de la même façon que les fonctions : par déclaration, ou par fonctions.

// La déclaration de classes, pour utiliser une déclaration de classe simple, on utilisera le mot clé class, suivi par le nom de la classe que l'on déclare

class Rectangle {
  constructeur(hauteur, largeur) {
    this._hauteur = hauteur;
    this._largeur = largeur;
  }
}
// Il faut declarer la classe avant de l'intancier contrairement les déclarations des fonctions, si on intancie avant la classe alors on obtient une erreur: ReferenceError
// Il est interdit de faire de cette manière

// const p = new Rond(); // ReferenceError
// class Rond {}

// Mais plutot

// class Ronde {}
// const rond = new Ronde();

// Les expressions de classes

// Il est possible d'utiliser des expressions de classes, nommées ou anonymes. Si on utilise un nom dans l'expression, ce nom ne sera accessible que depuis le corps de la classe via la propriété "name"
// Cette valeur ne sera pas directement accessible pour les instances. Par exemple:

// Anonyme
let RectangleAnonyme = class {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};

console.log("Rectangle anonyme :", RectangleAnonyme);

// Nommée
let RectangleNommee = class RectangleNommee {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
};

console.log(RectangleNommee.name);

console.log("Rectangle Nommée :", RectangleNommee);

// Le corps d'une classe est la partie contenue entre les accolades. C'est dans cette partie que l'on définit les proporétés
// D'une classe comme ses méthodes et son constructeur

// Mode strict. Le corps des classes, pourles expressions et pour les déclarations de classes, est exécuté en mode strict (autrement dit, le constructeur, les méthodes statiques, le protorype et les set get sont exéctués en mode strict)

// La méthode constructor est une méthode spéciale qui permet de créer et d'initialiser les objet créées avec une classe. Il ne peut y avoir qu'une seule méthode avec le nom constructor
// pour une classe donée. Si la classe continent plusieurs occurences  d'une méthode "constructor", cela provoquera une exception SyntaxError
// Le constructeur ainsi déclaré peut utiliser rle mot-clé "super" afin d'appeler le constructeur de la classe parente.

// Méthodes du prototype

class Rectangle2 {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.hauteur * this.largeur;
  }
}

const carre = new Rectangle2(10, 15);
console.log("carre", carre);
console.log("carre resultat :", carre.area);

// Méthodes statiques
// Le mot-clé static permet de définir une méthode statique pour une classe. Le smétjodes statiques sont appelées par rapport à la classe entère et non par rapport à une instance donnée
// (Ces méthodes ne peuvent pas être aooekées "depuis" une instance). Ces méthdoes sont généralement utilisées sous formes d'utilitaires au sein d'applications

class Point {
  constructor(x, y) {
    console.log(x, y); // On récupère les valeurs instanciés : 10 10
    this.x = x;
    this.y = y;
  }
  // Si je comprends, on a pas le droit de modifier directement le constructeur
  // Donc, il faut une étape de plus
  static distance(a, b) {
    console.log(a, b); // On met dans un objet la valeur qu'on récupèrer dans le constructeur x(5) et y(10): Object { x: 5, y: 5 } Object { x: 10, y: 10 }
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    console.log(a.x, b.y); // On éclate les valeurs de a et b (qu'ils ont récuperer sur x, y) a un nombre au lieu dans un objet: 5 10
    console.log(dx, dy); // Le résultat du calcule en haut: -5 -5
    return console.log(Math.hypot(dx, dy)); // Donne le résultat de la racine carré de la somme de carrés de ses arguments ci dessus, le resultat est : 7.0710678118654755
  }
}

const p1 = new Point(5, 5); // On instancie la valeur, donc 5 et 5
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2)); // Il faut toujours écrire le nom de la classe et ensuite les méthodes de la classe et ensuite la variable qui contient l'instanciation: Point.distance(p1,p2)

// Gestion de "this" pour le prototype et les méthodes statiques
// Losqu'une méthde statique ou une méthode liée au prototype est appelée sans valeur this, celle-ci voudra "undefined" au sein de la function. Il ,'y aura pas d'autodétermination de "this" (autboxing en anglais).
// On aura le même résultat si on invoque ces fnoctions dans du code non-strict car les fonctions liées aux classes sont exécutées en mode strict

class Animal {
  crie() {
    return this;
  }
  static mange() {
    return this;
  }
}

let animal = new Animal();
animal.crie(); // Animal{}
let crie = animal.crie;
crie(); // Undefined
console.log(crie);

// Ici, pour le statique
Animal.mange(); // Class Animal
let mange = Animal.mange;
mange(); // Undefined

// Si on décrit le code avec des fonctions traditionelles plutôt qu'avec des classes et qu'on utilise le mode non-strict, l'autodétermination de "this" sera
// faite en fonction du contexte dans lequel la fonction a été appelée. Si la valeur initiale est "undefined", "this" corespondra à l'objet global. Par exemple:
function Animaux() {}

Animaux.prototype.crie = function () {
  return this;
};

Animaux.mange = function () {
  return this;
};

let obje = new Animaux();
let criee = obje.crie;
criee(); // l'objet global

let mangee = Animaux.mange;
mangee(); // l'objet global
// Propriété des instances
// Les propriétés des instances doivent être définies dans les méthodes de la classe

class Rectangle3 {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}

// Les propriétés statiques ou les donées relatives au prototype doivent être définies en dehrs de la déclaration comportant le corpsn de la classe
const p = (Rectangle3.largeurStatique = 20);
const pi = (Rectangle3.prototype.largeurProto = 25);
console.log(p);
console.log(pi);

// Declaratons de champs !!! Experimentale
// Déclarations de champs publics

// En tuilisant la syntaxe pour la déclarations des champs, on peut réécrire l'exemple précédent de la facçon suivante:

class Rectangle4 {
  hauteur = 0; // On déclare les champs hauteur et largeur avec une valeur par défaut
  largeur;
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
}

// En déclarant les champs en préalable, il est plus facile de comprendre la classe dans son ensemble. De plus, on s'assure que les champs soient toujours présents.
// Comme on peut le voir dans cet exemple, les champs peuvent éventuellement être céclarés avec une valeur par défaut

// Déclartions de champs privés
// En utilisant des champs privés, on peut revoir la définition de l facon suivante
class Rectangle5 {
  #hauteur = 0;
  #largeur;
  constructor(hauteur, largeur) {
    this.#hauteur = hauteur;
    this.#largeur = largeur;
  }
}

// Si on utilise les chams privés hors de la classe, cela génèrera une erreur. Ces champs ne peuvent pas être lu ou modifiés que depuis le corps de la classe. En évitant d'exposer des éléments
// à l'extérieur, on s'assure qe les portions de code qui consoment cette celasse n'utilis pas ses détails internes et on peut alors maintenir
// La classe dans son ensemble et modfier les détails internes si besoin

// Les chmpas privés doivent nécessairement être déclarés en premier dans les déclarations de champ

// Créer une sous classe avec extends
// Le mot-clé "extends", utilisé dans les déclarations ou les expressions de classes, permet de créer une classe qui hérite d'une autre classe (on parle aussi de "sous-classe" ou de "classe-fille")

class Animal2 {
  constructor(nom) {
    this.nom = nom;
  }
  crie() {
    console.log(`${this.nom} fait du bruit.`);
  }
}

class Chien2 extends Animal2 {
  parle1() {
    super.crie();
    console.log(`${this.nom} aboie.`);
  }
}

let c = new Chien2("David");
console.log(c);
c.parle1();

// Si on déclare un constructeur dans une classe fille, on doit utiliser super() avant this.
// On peut également étendre des classes plus traditionnelles basées sur des constructeurs fonctionnels:

function Animal1(nom) {
  this.nom = nom;
}
Animal1.prototype.crie = function () {
  console.log(`${this.nom} fait du bruit.`);
};

class Chien1 extends Animal1 {
  parle1() {
    super.crie();
    console.log(`${this.nom} aboie.`);
  }
}

let c1 = new Chien1("Ida");
console.log(c1);
c1.parle1();
// Ida fait du bruit.
// Ida aboie.

// En revanche, les classes ne permettent pas d'étendre des objets classiques non-constructibles. Si on souhaite créer un lien d'héritage en un objet d'une ckasse, on utilisera Objet.setPrototypeOf()

const Animala = {
  crie() {
    console.log(`${this.nom} fait du bruit.`);
  },
};

class Chat {
  constructor(nom) {
    this.nom = nom;
  }
  crie() {
    super.crie();
    console.log(`${this.nom} miaule.`);
  }
}
Object.setPrototypeOf(Chat.prototype, Animala);

let d = new Chat("Minou");
d.crie();
// Ida fait du bruit
// Ida aboie.

// Le symbole species
// Lorsqu'on souhaite revoyer des objets Array avec une sous-classe MonArrau, on peut utiliser symbole species pour surchager le constructeur par défaut

// Par exemple, si, lorsuqu'on utilise des méthodes comme map() qui renvoient le constructeur par défaut et qu'on veut qu'elles renvoient Array plutôt que MonArray, on utilisera Symbol.species
// Par exemple:
class MonArray extends Array {
  // On surcharge species avec le constructeur Array du parent.
  static get [Symbol.species]() {
    return Array;
  }
}
let a = new MonArray(1, 2, 3);
let mapped = a.map((element) => element * element);

console.log(mapped instanceof MonArray); // false
console.log(mapped instanceof Array); // true

// Utiliser "super" pour la classe parente
// Le mot clé "super" est utilisé pour appeler les fonctions rattachées à un objet parent

class Chatou {
  constructor(nom) {
    this.nom = nom;
  }

  miaule() {
    console.log(`${this.nom} fait du bruit.`);
  }
}

class Lion extends Chatou {
  miaule() {
    super.miaule();
    console.log(`${this.nom} rugit.`);
  }
}

const minou = new Lion("Iduk");
minou.miaule();

// Regader sur l'internet la classe Objet en JS pour voir les méthodes, exemples:*
// entries, values, keys...

// 31/03/2022

// Tous les objets héritent d'une propriété "constructor" de leur proototype (à l'exception de ceux crées avec Objet.create(null))
// Les objets crées sansconstructeur (c'est a dire avec des littéraux) auront le constructeur correspondant au type de littéral
const o = {};
o.constructeur === Object;
const ax = [];
ax.constructeur === Array;

// Afficher le constructeur d'un objet
// L'exemple ci dessous crée un constructeur "Arbre", et un bjet de ce type, monArbre. Le script affiche ensuite la propriété "constructor" de l'objet monArbre

class Arbre {
  nom;
  constructor(nom) {
    this.nom = nom;
  }

  get arbreNom() {
    return this.nom;
  }
}

const monArbre = new Arbre("Sequoia");
console.log(`monArbre s'appelle ${monArbre.arbreNom}`);
console.log(`monArbre.constructor vaut ${monArbre.constructor}`); //Affiche la propriété "constructor" de l'objet monArbre

// Modifier le constructeur d'un objet

// Dans l'exemple suivant, on illustre comment modifier la valeur d'un constructeur pour les objets génériques. Dans l'exemple suivant, seules ls valeurs true, "1" et "test" ne seront pas affectées car leurs constructeurs sont en lecture seule uniquement.
// Cet exemple montre qu'il ne faut pas se reposer de façon aevugle sur la propriété constructor d'un objet

function Type() {}

const types = [
  new Array(),
  [],
  new Boolean(),
  true, // restera tel quel
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1, // restera tel quel
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  "test", // restera tel quel
];

// for (let type of types) {
//   type.constructor = Type;
//   type = [type.constructor, type instanceof Type, type.toString()];
// }

for (let i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  console.log(
    (types[i] = [
      types[i].constructor,
      types[i] instanceof Type,
      types[i].toString(),
    ])
  );
}

// console.log(types.join("\n"));

// Modifier le constructeur d'une fonction
// A continuer mais je ne comprends pastout simplement.

// Accesseurs et Mutateurs
// Un accesseurs se définit avec un mot get
const obj = {
  get unGetter() {},
};
const utilisateurs = {
  prenom: "Jean",
  nom: "Dupont",

  get nomComplet() {
    return `${this.prenom} ${this.nom}`;
  },
};
// Ici, on peut récuperer le getters nomComplet
console.log(utilisateurs.nomComplet);

// Un mutateur se définit avec un mot set
const utilisateur = {
  prenom: "",
  nom: "",

  /**
   * @param {string} val
   */
  set nomComplet(val) {
    [this.prenom, this.nom] = val.split(" ");
  },
};

utilisateur.nomComplet = "David Bouhaben"; // David Bouhaben est le val que le set nomComplet prend en charge

console.log(utilisateur.prenom); // Jean
console.log(utilisateur.nom); // Dupont

// Getters et setters sur freecodecamp

class Music {
  constructor(bassist) {
    this._bassist = bassist;
  }
  // Getters
  get musician() {
    return this._bassist;
  }

  // Setter
  set musician(updatedBassist) {
    this._bassist = updatedBassist;
  }
}

const bassPlayer = new Music("Jason Newsted");
console.log(bassPlayer);
// thrashMetal.bassist;
bassPlayer.bassist = "Robert Trujillo";
console.log(bassPlayer.bassist);

