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
// Regader sur l'internet la classe Objet en JS pour voir les méthodes, exemples:*
// entries, values, keys...

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
