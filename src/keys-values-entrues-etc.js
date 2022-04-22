// Regader sur l'internet la classe Objet en JS pour voir les méthodes, exemples:*
// entries, values, keys...

// 01 / 04 / 2022;

// for(let prop in arr)
// forEach() filter() mpa() reduce()

// La méthode Object.keys() renvoie un tableau (array) contenant les noms des propriétés propres à un objet (qui ne sont pas héritées via la chaine de prototype) et qui sont énumérables.
// L'ordre de ce tableau est le même que celui obtenu par une boucle for...in (à la difference qu'une boucle for...in liste également les propriétés héritées).

// getToto est une propriété non énumérable
// Je comprends pas trop
const monObjet = {
  ami: () => {
    console.log("salut");
  },
};

// let monObjet = Object.create({
// getToto: {
// value: () => {
// return this.Jerome;
//     },
//   },
// });

// monObjet.ami;
// console.log(Object.getOwnPropertyNames(monObjet)); // return Array [ "getToto", "toto" ]
console.log(Object.values(monObjet.ami)); // return: Array [ "toto" ]

monObjet.ami(); // return: Array [ "toto" ]
// Si on veut lister toutes les propriétés, y compris qui ne sont pas énumerables, on pourra utiliser Object.getOwnPropertyNames()

// "obj"
// L'objet dont on souhaite lister les propriétés propres et énumérables
// Valeur de retour: Un tableau de chaines de caractères qui sont les noms des propriétés énumérables de l'objet passé en argument
// Un tableau, renvoie un tableau
const arr = ["a", "b", "c"];
console.log(Object.keys(arr));
// retourne in tableau énumérable, affichera ['0', '1', '2']
// Un objet semblable à un tableau
const famille = { père: "Francis", mère: "Iduk", fils: "David" };
console.log(Object.keys(famille));
// affichera ['0', '1', '2']
// Un objet semblable a un tabeau avec un ordre de clé aléatoire
let an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(an_obj));
// affichera ['2', '7', '100']
console.log(Object.keys("David"));

// Object.values()

// La méthode Object.values() renvoie un tableau contenant les valeurs des propriétés propres énumérables d'un objet dont l'ordre est le même que celui obtenu avec une boucle for...in
// (La boucle for-in est differente car elle parcourt également les propriétés)

const object = { a: "something", b: 42 };
console.log(Object.values(object));
// Affichera la valeur dans un tableau énurmérable ["something", 42]

// Valeur de retour
// Un tableau dont les élements sont les values des propriétés énumérbables de l'objet passé en argument

// Description
// Object.values() renvoie un tableau contenant les elements sont les valeurs des propriétés énumérables directement rattachées à l'objet passé en argument. L'ordre du tableau est le meme que celui obtenu loesqu'on parcourt les propriétés manuellement

const famille1 = { père: "Francis", mère: "Iduk", fils: "David" };
console.log(Object.values(famille1));

// Les clées sont ordonées aléatorement, lorsque des clès numériques sont utilisées, les valeurs sont renvoyées selon l'ordre numérique des clées
const obj_aléatoire = { 100: "a", 50: "b", c: "75" };
console.log(Object.values(obj_aléatoire));
// Affichera [b, c, a]

// GeToto1 est une propriété qui n'est pas énumérable
const monObject = Object.create({
  getToto1: {
    function() {
      return this.nom;
    },
  },
});

monObject.nom = "David Bouhaben";
console.log(Object.values(monObject));
// Affichera ["David Bouhaben"]
console.log(
  Object.values(monObject)
    .toString()
    .split(" ")
    .reverse()
    .join()
    .replace(",", " ")
);

for (let nama of Object.values(monObject)) {
  console.log(`Nama ini: ${nama}`);
}

// Un argument de type primitif sera converti en un objet
console.log(Object.values("David")); // Affichera ["D","A","V","I","D"]
// Object.entries()

// La méthode Object.entries() renvoie un tableau des propriétés propres énumérables d'un objet dont la clé est une chaone de caractères, sous la forme de paires [clé, valeur], dans le même ordre qu'une boucle
// for...in 'la boucle for-in est différente car elle parcourt la chaine de prototypes

// Lordre du tableau renvoyé par cette méthode ne dépends pas de la façon dont l'objet est défini. S'il faut garantir un certain ordre, on pourra utiliser la méthode Array.sort()
const ObjectEntries = { a: "Reponse", b: 42 };
console.log(Object.entries(ObjectEntries));
// Affichera ["a", "Réponse"], ["b", 42]
console.log(Object.entries(ObjectEntries)[1][1]);
// Affichera 42
const objectEntriesArray = Object.entries(ObjectEntries);
for (const [key, value] of objectEntriesArray) {
  console.log(`Clé :${key} valeur : ${value}`);
}
// Valeur de retour
// Un tableau qui contient le propriétés énumérables propres de l'objet sous la forme de paires [clé, valeur] qui correspondent aux propriétés énumerable qui sont directement présentes sur l'objet passé en argument.
// L'ordre du tableau est le même que celui utilisé lorsqu'on parcourt les valeurs manuellement

const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj));
//Affichera [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const un_obj = { 100: "a", 50: "b", 75: "c" };
console.log(Object.entries(un_obj));
// Affichera [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// Get David est une propriété non énumerables
const objNonEnumerable = Object.create(
  {},
  {
    personne: () => {
      return this.nama;
    },
  }
);
objNonEnumerable.nama = "Francis Eduardo Bouhaben";
console.log(Object.entries(objNonEnumerable));
// Affichera [ "nama", "Francis Eduardo Bouhaben" ]

// Un argument de type primitif sera converti en un objet
console.log(Object.entries("toto")); // Affichera [ ['0', 't'], ['1', 'o'], ['2', 't'],  ['3', 'o'] ]

// Un tableau vide pourn les types primitif qui n'ont pas de propriétés
console.log(Object.entries(100)); // Affichera []

// Parcourir les clées*valeur
const autreObjet = { a: 5, b: 7, c: 9 };
for (let [cle, valeur] of Object.entries(autreObjet)) {
  console.log(`${cle} ${valeur}`);
} //Affichera a 5, b 7, c 9

// Ou encore, en utilisant les méthodes génériques
Object.entries(autreObjet).forEach(([cle, valeur]) => {
  console.log(`${cle} ${valeur}`);
}); // Affiche Map { toto: "truc", machin: 42 }

// Convertit l'objet en Map
// Le constructeur new Map() accepe una rgument itérable pour décrire les entrées du tableau associatif. Grace a Objet.entries; il est possible
// de convertir simplement un objet en un objet Map

const objMap = { instrument: "guitare", groupe: 3 };
const map = new Map(Object.entries(obj));
console.log(map);