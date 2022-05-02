// Debugging 22/04/2022

// Utiliser la console de JS pour checker la valeur de la variable

// Chacun de firefox et JS ont des excellents JS consoles, aussi connu comme DevTools, pour déboguer votre JS

// Vous pouvez trouver le DevTools dans le menu de Chrome ou le console de web dans le menu de Firefox. Si vous utiliser un autre navigateur ou un mobile, nous recommendons fortement le navigateur a Firefox ou Chrome

// La méthode console.log(), qui "imprime" la sortie de ce qui se trouve entre ses paranthèses sur la console.
// Va surement être un outil de déboggage. Le mettre dans des endroits strategique dans votre code peut vous montrer la valeur intermediaire de la variable.

// C'est une bonne manière d'avoir une idée de ce que la sortie doit être avant de voir ce que c'est.

// Le fait de disposer de points de contrôle pour vérifier l'état de vos calculs dans l'ensemble de votre code aidera à déterminer ou se situe le problème.

// Voici un exemple pour imprimer le string "Hello World!" dans le console:
const helloWorld = "Hello World!";
console.log("Hello World!", helloWorld);

// Utiliser la méthode concole.log() pour "imprimer" la valeur de la variable a l'endoit indiqué dans le code

let a = 5;
let b = 1;
// a++ = 5 + 1
console.log(a++);
// Only change code below this line
console.log(a);
console.log(b);
let sumAB = a + b;
console.log(sumAB);

// Comprendre les différences entre la console de freeCodeCamp et celle du navigateur

// Vous avez peut être remarque que les défis de freeCodeCamp ont leur propre console. Cette console se comporte un peu différement de la console du navigateur

// Il y a beaucoup de méthodes pour utiliser le console pour imprimer les messages. log, warn, et clear pour nommer quelques uns. La console de freeCodeCamp utilise le massage log,
// tandis que la console de navigateur va imprimer tous les messages.

// Quand vous effectuez un changement dans votre code. n il va automatuquement le faire marcher et montrer les logs. Le freeCodeCamp console est alors "nettoyer"(clear) a chque fois votre code marche.

// D'abord, ouvrez le console de navigateur pour que vous puissiez regarder le logs.

// Ensuite, utiliser le console.log() pour enregistrer la variable de sortie. Afficher es deux consoles pour voir le journal.
// Enfin, utilisez le console.clear() après votre log pour effacer la console du navigateur. Visualisez la différence entre les deux consoles

let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// Utilisez le typeof pour vérifier le type de la variale

// Vous pouvez utilier le typeof pour vérifier la srtructure de donnée, ou le tyoe, de la variable. Cela est important pour débogger quand on travaille avec plusieurs types de données. Si vous pensez que vous ajouter deux nombres, mais un est en réalité un string, le résultat peut être innatendu.

// Le type d'érrors peut se cacher dans les calculs ou les appels de fonction.
// Attention surtout quand vous voulez acceder et travailler avec des données externes dans le forme de JS Object Notation (JSON) object.

// Voici les exemples de l'utilisation typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});

// Dans l'ordre, la console va afficher le strings: strings, number, object et object.

// JS reconnait 7 types de donnée primitifs (immutable) Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), et un type pour les éléments mjutables: Object.
// Notez quand dans JS, le tableau est techniqiuement un objet

// Ajouter deux console.log() pour vérifier le typeof de donnée de ces deux varibales sevent et three dans la console.
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven); // Number
console.log(typeof three); // Stringjugv
