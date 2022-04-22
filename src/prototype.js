// Exo Il faut comprendre et définir l'héritage classique, prototypal et dynamique
// Les chaines de prototype, la modification dynamique du prototype et l'utilisation de for...in avec les prototypes

// Définition: En ce qui concene l'héritage, JS n'utilise qu'une seule structure: les objets.
// Chaque objet possède une propriété privée qui contient un lien vers un autre objet appelé le prototype. Ce prototype possède également son prototype et ainsi de suite, jusqu'à ce qu'un objet
// ait null comme prototype.

// L'héritage claissque : Tous le code orienté objet écrit en JS est un paradigme de prototype à l'héritage. JavaScript n'as tout simplement pas l'héritage classique mais prototypal.
// lors que la pluspart des langages en dehors de JS tel que C++, JAVA et C# prise en charge l'héritage classique.

// Il faut éviter d'uitliser l'héritage classique et utilise surtout la composition/héritage prototype
// https://www.youtube.com/watch?v=nnwD5Lwwqdo

// L'héritage classique et l'héritage prototypique sont tous deux des paradigmes de programmation orientée objet. Les objets dans la programmation oriénté-objet sont des abstraction qui encapsulent les propriétés d'une entité
// C'est ce qu'on appelle l'abstraction.
// https://www.30secondsofcode.org/articles/s/javascript-classical-vs-prototypal-inheritance

// Quand on a à faire avec plusieurs niveau d'abstraction, chaque niveau est plus général  ou plus spécifique. plus que l'abstraction est général d'une abstraction plus spécifique cela s'appelle une généralisation.

// Comme ce qui a été méntioné plus haut, les objets sont des abstractions de chaques entités. Nous utilisons sois la classe (l'héritage classique) ou de prototypes (l'héritage prototypal) pour créer la généralisation de ces objets.
// La généralisation est crée par l'héritage

// Regardez ces exemples

// Nous avons deux objets reprensentant deux animaux domestiques: Max le chien et Claire le chat. On va les appeller max et claire respectivement
// Chaque chien ont un characteristiques commun. Nous pouvons donc créer un abstraction, Chien, qui encapsule leur charactéristiques commun. Nous pouvons utiliser
// l'héritage pour passer les characteristiques depuis le Chien à max

// Le même principe s'applique poir le chat, nous permettant de créer un abstraction, Chat. De même, claire va hérité le charactéristiques de Chat.

// Chats et chiien ont tous les deux des charactéristiques commun. Nous povons créer un généralisation, Animal, pour encapsuler ces characteristiques. Chien et Chat
// va hériter ces charactéristiques commun depuis l'Animal.

// L'héritage classique exemple:
// Dans la programmation oriéntée objet classique, il y a deux types d'abstraction: objets et classes. Un objet est un abstraction d'un entité, quant au classe, c'est un abstraction d'un objet ou d'une autre classe

//  Si on doit modéliser l'exemple précedent avec un héritage classique, cela va ressembler à cela

class Animal {}
class Dog extends Animal {}
class Chat extends Animal {}

const max = new Dog();
max.name = "Max";

const claire = new Chat();
claire.name = "Claire";

// L'héritage protypal
// Dans la programmation orienté objet prototypal, il n'y a qu'une seule abstraction: objets. Les objets sont des abstractions des entités ou des objets, dans le cas ou ils sont appellé des prototypes.
// Une protoype est donc une généralisation

// Les objets peuvent être créer à partir de rien ou d'un autre objet, qui devient à son tour le prototype de l'objet nouvellement crée.

// Si nous devons modeliser l'exemple précedent en utilisant un héritage prototypal, cela va se ressembler a cela:

const animal = {};

const dog = Object.create(animal);
const cat = Object.create(animal);

const maxi = Object.create(dog);
max.name = "Max";

const clairee = Object.create(cat);
claire.name = "Claire";

// D'après https://codetrace.com/interview-questions/5d30565d4ccf4c0010333c36/what-is-the-difference-between-classical-and-prototypal-inheritance
// L'héritage classique est un mécanisme dans laquelle une classe

// Les idées clée
// 1. Les classes peuvent hériter d'autres classes
// 2. Les objets sont créer à partir des classes
// 3. Les classes sont immutable, il est impossible de les modifier au moment de l'execution
// 4.Les classes peuvent ou ne peuvent pas supporter un héritage multiple (cela dépends de langages de programmation)

// Exemple en Java
// class Animaux {
//     private name;
//     public Animaux(String name){
//         this.name = name
//     }
//     public String getName(){
//         return this.name
//     }
// }
// class Dog extends Animaux{}
// Dog dog = new Dog("Rex")

// Hértage prototypal

// L'héritage prototypal est un mécanisme par lequel un objet (ou une constructeur de fonction) peut étendre (extends) les méthodes d'un objet.
// Chaque objet a un prototype dans lequel il est connecté au objet parent, cette structure est appellé prototype chain.

// Key ideas

// 1. Objet peut être créer à partir d'un constructeur de fonction, en utilisant Objet.create méthode ou définit=r en tant qu'objet literal ({})
// 2. Prototype peut être changer au moment de l'execution.
// 3. Ds objets peuvent hérité depuis plusieurs prototypes.

// Exemple en JS
// function Animaux(nom) {
//     this.nom = nom;
//   }

//   Animaux.prototype.getName() {
//     return this.nom;
//   }

//   funciton Dogy(nom) {
//     Animaux.call(this, nom);
//   }

//   Dogy.prototype = Object.create(Animaux.prototype);

//   const dogy = new Dog("Rex");

// Dans ES6, le mot-clé class a été ajouté, ce qui permet d'utiliser une syntaxe similaire à celle des autres langages de type C.
// Mais sous le capot, JavaScript ne supporte que l'héritage prototypique, donc l'exemple ci-dessous est presque identique à l'exemple ci-dessus.

class Animala {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Dogy extends Animala {}

const dogy = new Dogy("Rex");

// Test
// 1 l'achitecture et l'environement
// IDE
// Es6
// node
// npm
// Babel
// webpack
// 3/10

// 2 Base de JS
// let, const, var
// de haut en bas
// type de variables = boolean, string, numerique, float, double, short
// if() else() === == != =>
// x = a
// && ||
// 8/10

// 3 boucle
// Condiitonel, if, switch, terniaire
// Iteratif cest des boucles
// 3/10

// 4 nombre
// const a = 10
// parse.float
// Math random
// 5/10

// 5 chaine de chractères
// let a = "da"
// a = "dada"
// 4.5/10

// 6 Objet
// objet ensemble clé/valeur
// let obj = {}
// obj.clé1 = 42
// obj['cle1']
// 4/10

// 7 obj.2
// const obj = {toto: 1, tutu:2}
// const {toto, titi} = obj
// console.log(titi)
// const obj2 = {tata: 3, ...obj}
// const {toto, tutu} = obj2
// 4/10
