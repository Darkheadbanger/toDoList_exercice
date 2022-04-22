// Programmation orienté objet et les constructeurs

const obj = {
  a: 42,
};
console.log(obj);
// Exo définir une fonction et le scop du this

// En JS, le mot-clé éthis" se comporte légèrement différemment des autres langages de programmation. Son comportement variera également légèrement
// selon qu'on utilise le mode strict ou non strict.

// Dans la plupart des cas, la valeur de this sera déterminée à partir de la façon dont une fonction est appelée. Il n'est pas possible de lui affecter une valeur
// lors de l'éxecution et sa valeur peut être différente à chaque fois que la fonction estn appelée.
// La méthode bind() a été introduite avec ECMADcript 5 pour définir la valeur de "this pour une fonction, indépendamment de la faàon dont elle est appelée.". ES6 a ajouté les fonctions fléchées
// dans lesquelles "this" correspond à la valeur du contexte englobant. Exemple:
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());

// Valeur: L'objet JS représentant le contexte dans lequel le code courant est exécuté

// Dans le contexte global de l'execution (c'est a dire, celui e dehors de toute fonction), this fait référence à l'objet global (qu'on utilise ou non le mode strict)
// Si l'environement de script est un navigateur, l'objet window sera l'objet global
// console.log(this === window); // true

// this.a = 37;
// console.log(window.a); // 37

// this.b = "MDN";
// console.log(window.b); // "MDN"
// console.log(b); // "MDN"

// Dans le contexte d'une fonction, s'il est utilisé dans une fonction, la valeur de this dépendra de la facon dont la fonction da été appelée
// Avec un appel simple
function f1() {
  return this;
}
// Dans un navigateur
console.log(f1() === window); // true
// Côté serveur
console.log(f1() === global); // true
// Dans cet exemple, la valeur de "this" n'est pas définie lors de l'appel. Le code n'étant pas en mode strict, "this" doit toujours être un objet et ce sera donc l'objet global (soit window pour un navigateur)

function f2() {
  "use strict"; // On utilise le mode strict
  return this;
}
console.log(f2() === undefined);
console.log(f2() === "undefined");

// En mode strict, la valeur de this est conservée 'il reste le même) entre le moment de sa définition et l'entrée dans le contexte d'exécution. S'il n'est pas défini, il reste undefined.
// Il pourrait être définit avec n'importe quelle autre valeur, telle que null ou 42 ou "je ne suis pas this"
// Note: Dans ce deuxième exemple, this vaut undefined car f2 a été apelé sans "base"(ex: window.f2). Cette fonctionnalité ne fut pas correctrement implementée dans certains navigateurs aux débuts du mode strict, en effet,
// certains renvoyaient alors l'objet window

// En tant que méthode d'un objet
// Lorsqu'une fontion est appelée comme méthode d'un objet, this correpondra à 'objet possédant la méthode qu'on appelle

// removedAndInseredBandSplice, dans l'exemple suivant, lorsqu'on appelle o.f(), le "this" contenu à l'interieur de la fonction correspond à l'objet o.

let o = {
  prop: 666,
  fun: function () {
    return this.prop;
  },
};

console.log(o.fun()); //666

// On notera que ce comporetement n'est pas du tout affecté par la façon ou l'endroit de la définition de la fonction. Dans l'exemple précédent, on aurait très bien pu définir la fonction plus tard et la rattacher à une proporiété
// de o plutôt que de la déclarer de cette faàon. On aura le même  résultat en faisant ainsi

var oo = { prop: 777 };

function indépendante() {
  return this.prop;
}

oo.funct = indépendante;

console.log(oo.funct()); // 777

// On voit ici que ce qui importe est la façon dont la fonction est appellée comme une propriété (méthode) de oo
// De la même façon, this n'est affecté que par la référecnce la plus proche. Autrement dit, dans l'exemple suivant quand on appele la fonction O.B.G, on appelle la méthode g de l'objet o.b.
// Ainsi, au moment de l'execution, "this" fera référence à o.b. Le fait que cet objet sois une propriété de  n'a aucun impact: seule la référence objet la plus proche compte
o.b = { g: indépendante, prop: 42 };
console.log(o.b.g()); // 42

// this sur la chaine de prototypes de l'objet
// Ce qui a été vu ci-avant est également applicable pour les méthodes qui sont résentes sur la chaine de prototupes de l'objet. Si ine méthode ce siture sur la chaine de prorotype, this fera référence à l'objet appelant
// (de la même façon que si la métjode était une propriété direct de l'objet)

let ooo = {
  methodF: function () {
    return this.a + this.b;
  },
};
let p = Object.create(ooo);
p.a = 444;
p.b = 222;
console.log(p.methodF()); // 666

// Dans cet exemple, l'objet qui est affecté à la variable p ne possède pas directement la propriété methodF, il en hérite de par son prototype.
// Cela n'impacte en rien la détermination de this car la recherce de prototype methodeF remonte le long de la chaine de prototype et s'arrête à ooo.
// Au début de cette recherce ou une référence à p.methodeF, aussi this fera référence à l'objet représeté par p.
// Autrement dit methodeF étant appelé comme une méthode de p, this fera ici référence à p. Cette fonctionalité fait partie des characteristiques de l'héritage
// prototypal de JS

// this dans un getter ou setter
// Ici aussi, on a le même principe lorsque la fonction est appelée à partir d'un accesseur (get) et mutateurs (setter). Une fonction utilisée comme get ou set
// On verra son this lié à l'objet à partir duquel on souhaite acceder/changer la propriété.
function moduleRéel() {
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o1 = {
  re: 1,
  im: -1,
  get phase() {
    return Math.atan2(this.im, this.re);
  },
};

Object.defineProperty(o1, "moduleRéel", {
  get: moduleRéel,
  enumerable: true,
  configurable: true,
});

console.log(o1.phase, o1.moduleRéel); // logs -0.78 1.4142

class Utilisateur {
  nom = "Francis"; // Par défaut
  prenom = "Bouhaben";
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.dateCreation = new Date();
    this.admin = false;
  }
}
// grace a this.nom (l'hretirage), automatiquement ça se connecte

// Instancier une méthode en faisant new Utilisateur
const David = new Utilisateur("Bouhaben", "David", 27);
const jean = new Utilisateur("baba", "cool", 29);
console.log(David, jean);
// Les constructeur est une fonction qui permet de créer des objets(constructor (nom, prenom, age) affichera {nom: "Bouhaben", prenom: "David", age: 27}), les fonctions constructor sont des modèles pour créer des objets.
// New permet d'instancier un objet depuis la fonction Constructeur.
// Pour l'instant, ne fonctionne pas avec la fonction flécher

// 1 - Un objet vide ({}) est créé auquel 'this' est assigné.

// 2 - Les instructions de la fonction sont exécutées : nous ajoutons des propriétés et des méthodes à l'objet vide ({ajouter: "ajouter"}).

// 3 - this, donc la nouvel objet avec les nouvelles propriétés, est retourné. // Object { nom: "Bouhaben", prenom: "David", age: 27, dateCreation: Date Sat Apr 02 2022 11:27:04 GMT+0200 (heure d’été d’Europe centrale), admin: false }

// 4 - Le prototype de l'objet instancié est le prototype du constructeur (nous y reviendrons en détails dans les leçons suivantes).

// 5 - L'interet du constructeur est de ne pas se repeter

// 02/03/2022
// Exo : 3 définition de la programmation objet en JS explicitement en Anglais
// Qu'est ce que l'encapsulation, l'héritage, l'abstraction, polymorphism et constructeur

// 1. Object-oriented programming is a way of writting code that allows you to create different objects from a common object.
// The common object is usually called a blueprint while the created objects are called instances.
// Eachs instances has properties that are not shared with other instances. For exemple, if you ahve a Human blueprint, you can create human instances with different names.
// 2. The second aspect of Object-Oriented Programming is about structuring code when you have multiple levels of blueprints. This is commonly called Inheritance or subclassing.
// 3. The third aspect of Object-Oriented Programming is about encapsulating where you hide certain pieces of information within the object so they're not accessible

// Constructor: Les constructeur est une fonction qui permet de créer des objets(constructor (nom, prenom, age) affichera {nom: "Bouhaben", prenom: "David", age: 27}), les fonctions constructor sont des modèles pour créer des objets.

// L'Encapsulation: Consiste à inclure les données et des fonctions dans un compossant (par exemple: une classe) et ensuite de contrôler l'accès à celui-ci pour réaliser une "boite noire" hors de l'objet.
// De cette façon, un utilisateur de cette classe n'aurait besoin de connaitre que son interface (autrement dit, les données et les fonctions exposées en dehors de la classe), et pas sno implémentation qui reste donc cachée.
// https://www.youtube.com/watch?v=ZYa_NiOUTQo

// Héritage: En ce qui concerne l'héritage, JS n'utilise qu'une structure: les objets.
// Chaque objet possède une proprété privée qui continent un lien vers un autre objet appelé le protoype. Ce prototype possède également son prototype et ainsi de suite, jusqu'à ce qu'un objet ait null comme prototype.

// L'abstraction: dans le domaine de la programmation informatique  permet de réduire la complexité et d'objtenir une conception et une implementation plus efficaces dans les système logiciels complexes.
// Elle dissimule les complexités techniques des systèmes derrières des API plus simple à manipuler.
// Abstraction est la représenattion des choses du monde réel dans les programmes informatiques
// https://fr.wikipedia.org/wiki/Abstraction_(informatique)

// Polymophisme: la polymorphisme est la présentation d'une unique interface pour plusieurs types de données.
// Par exemple: les entiers, flottants et doubles sont implicitement polymorphiques: il est poszsible de les ajouter, soustraire, multipliser etc. Sans se préoccuper de leurs différents types
// Dans le cas de la programmation orientée objet, en donnant à la classe la gestion aussi bien de son code que ses propres données, le polymorphisme peut être mis en oeuvre en faisant que chaque classe ait sa propre fonction
// qui (une fois appelée) agit en fonciton d'un objet quel que soit on type.

// regarder ce que fait la méthode bind(), apply() et call()|||||||||

// L'héritage protoypal a utilisé, l'héritage classique à oublier.

// Prototype natif