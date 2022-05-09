// Il faut retourner un tableau qui contient chaque musique

const singers = [
  {
    name: "John",
    music: ["Classic", "rap", "disco"],
  },
  {
    name: "Jack",
    music: ["Classic", "disco"],
  },
  {
    name: "Joe",
    music: ["Jazz"],
  },
];

function getMusicList(peopleList) {
  console.log(peopleList);
  // Il faut retourner un nouveau array qui contient le nouveau array qui contient les listes
  const musicGenre = peopleList.map((styleMusic) => styleMusic.music);
  // [] Je mets un tableau vide qui permettra de tous mettre dans ce tableau
  // concat c'est pour coller les multiples tableaux
  // destructuring (...) pour pouvoir récupèrer tous les styles et ensuite mettre tous ce style dans le tableau plus haut
  const style = [].concat(...musicGenre);
  const mergeStyle = new Set(style);
  console.log(mergeStyle);
}
getMusicList(singers);

function getMusicList2(peopleList) {
  console.log(peopleList);
  // Il faut retourner un nouveau array qui contient le nouveau array qui contient les listes

  // D'abord on cherche avoir musique: méthode map
  // On cherche avoir un seul niveau d'array: méthode flat
  // La méthode flatMap regroupe les deux méthodes (map et flat qui fait flatMap)
  // On cherche avoir des données unique: méthode set
  const musicGenre = new Set(
    peopleList.flatMap((styleMusic) => styleMusic.music)
  );
  console.log(musicGenre);
}

getMusicList2(singers);
// Algorithme

const room = [1, 2, 3];
const roomVirtuel = [2, 5, 3];

// function getGuestList(room, roomVirtuel) {
//   // const combineRoom = room.concat(roomVirtuel);
//   const combineRoom = [...room, ...roomVirtuel];
//   const combinedRoom = new Set(combineRoom);
//   console.log(combinedRoom);
//   // Un tableau avec des elements unique qui regroupe les deux tableaux
// }

getGuestList = (room, roomVirtuel) => {
  console.log(new Set([...room, ...roomVirtuel]));
};

getGuestList(room, roomVirtuel);

// HTML hypertext markup leangugage
// HTML 5
// World wide web

// 1. Math et des si sinon fin si fin début écrire et fin et y a aussi fin si
// then

// 2. Cet algorithme est destiné à prédire l'avenir, et il doit être infaillible !
// Il lira au clavier l’heure et les minutes, et il affichera l’heure qu’il sera une minute plus tard.
// Par exemple, si l'utilisateur tape 21 puis 32, l'algorithme doit répondre :
// "Dans une minute, il sera 21 heure(s) 33".
// NB : on suppose que l'utilisateur entre une heure valide. Pas besoin donc de la vérifier.

// Si Tutu > Toto + 4 OU Tata = "OK" Alors
//   Tutu ← Tutu + 1
// Sinon
//   Tutu ← Tutu – 1
// Finsi
// Formulez un algorithme équivalent à l’algorithme suivant :
// if (tutu > toto + 4 || tata === "ok") {
//   tutu = tutu + 1;
// } else {
//   tutu = tutu - 1;
// }

// Les questions
// http://www.jesuiscultive.com/spip.php?article212

// https://www.mesexercices.com/exercices/exercice-culture-2/exercice-culture-45768.php

// 1. Les différentes méthodes de tri de données

// 1. La méthode .sort()
tab = [3, 6, 1, 9, 2];
console.log(tab.sort());
const sortDesc = (a, b) => b - a;
tab.sort(sortDesc);

console.log(tab);

const langages = [
  { name: "JavaScript", value: 3 },
  { name: "HTML", value: 1 },
  { name: "PHP", value: 7 },
  { name: "Python", value: 5 },
  { name: "CSS", value: 2 },
];

// Utiliser la fonction fléchées pour trier par croissant en fonction de valuer
const croissantLangage = (a, b) => a.value - b.value;
console.log(langages.sort(croissantLangage));

const langages1 = [
  { name: "JavaScript", value: 3 },
  { name: "HTML", value: 1 },
  { name: "PHP", value: 7 },
  { name: "Python", value: 5 },
  { name: "CSS", value: 2 },
];

// Utiliser la fonction fléchées pour trier par décroissant en fonction de valuer
const décroisantLangage = (a, b) => b.value - a.value;
console.log(langages1.sort(décroisantLangage));

const foo = ["c", "b", "a"];
const bar = ["x", "z", "y"];
// Trier directement sur le tableau original
const fooSorted = foo.sort();
// Laisser le tableau originel pour trier
const barSorted = [...bar].sort();
console.log(fooSorted);
console.log(barSorted, [bar], [...bar]);

// 2. Les types de structures de données

// A. Teableau
// La première structure de données à apprendre en programmation et la structure de données la plus courante et la plus utilisée
// dans de nombreuse applications

// B. Pile (Stack)

// La pile suit une technique "LIFO" pour stocker et récupérér les éléments. L'element qui est stocé à la fin sera le premier à être récupéré de la pile.
// La pile a les fonctions prilaires suivantes:
// * Push(): Pour insérer un élément dans la pile
// * Pop(): Pour retirer un élément de la pile.

// C. Liste liée

// Une autre structure de données populaire et commune parmi les programmeurs est la liste chaînée.
// Les listes liées stockent des collections d’éléments dans un ordre linéaire. Chaque élément d’une liste liée contient un élément de données et un lien, ou une référence, vers l’élément suivant de la même liste.

// Par exemple, lorsqu’on crée une liste de lecture sur un smartphone, elle fonctionne sur le concept de la liste liée.
// Ces chansons sont jouées une par une, elles sont connectées et on peut passer de la chanson trois à la chanson quatre mais pas revenir en arrière. C’est le comportement d’une liste singulièrement liée.

// Lorsqu’on met en œuvre la fonctionnalité permettant de lire la chanson dans les deux sens, elle suit le comportement d’une liste doublement liée. Dans une liste doublement liée, les nœuds sont connectés dans les deux sens.
// La navigation bidirectionnelle est donc possible.

// Lorsqu’on lit les chansons en mode répétition, elles suivent le comportement d’une liste circulaire liée. Dans une liste circulaire, le dernier nœud est connecté au premier nœud.
// Ainsi, une fois la dernière chanson terminée, la première chanson sera rejouée et la lecture se fera en mode cyclique, sans jamais s’arrêter.

// D. Graphique

// La structure de données grapjique est une structure de données très puissante. Le graphique peut représenter non seulement la terre, mais aussi l'univers entier.

// Lorsqu’on utilise Google Map, toutes les villes sont reliées comme un graphique avec des informations sur la distance.
// Il existe de nombreuses façons de se rendre d’une ville à l’autre, mais pour trouver le chemin le plus court entre deux villes, on doit utiliser certains algorithmes.

// Pour décider du chemin le plus court vers votre destination, l’algorithme de Dijkstra active notre système de navigation/GPS dans notre téléphone.
// Uber utilise l’algorithme de Hungarian pour affecter chaque voiture aux personnes qui recherchent un trajet.

// E. Algorithme de recherche binaire

// L’algorithme de recherche binaire est également connu sous le nom de recherche par demi-intervalle, recherche logarithmique ou hachage binaire.
// Dans cet algorithme, nous recherchons la valeur cible dans un tableau trié.

// Cet algorithme facilite le processus de recherche car on n’a pas besoin de comparer chaque élément de la liste de nombres.
// La recherche binaire est un moyen rapide de rechercher la valeur cible dans une liste ordonnée de données. Elle donne la possibilité d’effectuer ce processus de manière efficace.

// L’un des scénarios réels de cet algorithme est la validation des informations d’identification des utilisateurs dans une application.
// En utilisant la recherche binaire, on peut valider les informations d’identification de millions d’utilisateurs en une fraction de seconde.

// Cet algorithme est également utilisé dans les bibliothèques de nombreux langages de programmation tels que Java, .NET, C++ STL, etc.
// La méthode list.sort() de Python utilise Timsort qui (AFAIK) utilise la recherche binaire pour localiser les positions des éléments.

// F. Structure de données Trie

// À ne pas confondre avec un arbre, les arbres sont des structures de données qui stockent des chaînes de caractères comme des éléments de données et sont placés dans un graphique visuel. Les tries sont également appelées arbres de mots-clés ou arbres de préfixes.
// Chaque fois qu’on utilise un moteur de recherche et que vous recevez des suggestions automatiques, on est témoin de la structure de données trie en action.

// G. Algorithme de tri par fusion
// Le tri par fusion fonctionne sur le concept de la technique « diviser pour mieux régner ». Nous divisons la liste en plusieurs sous-liste jusqu’à ce que la sous-liste ne contienne plus un seul élément.
// Ensuite, nous fusionnons ces sous-listes pour obtenir la liste triée des éléments.

// La plupart des sites de e-commerce ont une section « Vous pourriez aimer ».
// Cette section maintient le tableau de tous les comptes d’utilisateurs et ensuite celui qui a le moins d’inversion avec notre tableau de choix, commence à recommander ce qu’ils ont acheté, ou ce qu’ils aiment.

// G. Algorithmes de palindrome

// Le nombre ou la chaîne de caractères palindrome se lit dans l’ordre inverse.

// Les palindromes sont utilisés dans le traitement des séquences d’ADN.
// Mais comment sont-ils utilisés dans ce traitement ?

// Un grand nombre de séquences d’ADN deviennent disponibles. Pour stocker les informations sur ces séquences d’ADN, nous utilisons des bases de données de biologie moléculaire.
// La capacité de ces bases de données sera plus importante à l’avenir, il est donc important de communiquer et de stocker les données efficacement dans la base de données.

// Il est important de compresser ces séquences d’ADN pour une meilleure performance. Pour comprimer ces séquences, on peut utiliser la méthode CTW (Context Tree Weighting Method).
// Cette méthode permet de compresser les séquences d’ADN en moins de deux bits par symbole.

// On connaît principalement deux structures caractéristiques des séquences d’ADN. L’une est le palindrome ou les compliments inversés et l’autre les répétitions approximatives.
// En utilisant le hachage et la programmation dynamique, l’algorithme recherche les répétitions approximatives et les palindromes avant de coder le symbole suivant.
// S’il trouve un palindrome ou une répétition approximative avec une longueur suffisante, l’algorithme le représente avec la longueur et la distance.

// H. Les nombres Armstrong

// Dans les nombres Armstrong, la somme des cubes des chiffres d’un nombre est égale au nombre lui-même.
// Par exemple, 153 et 371 sont des nombres Armstrong. Les nombres d’Armstrong sont principalement utilisés dans les applications de sécurité des données pour le cryptage et le décryptage des données.

// Les nombres Armstrong sont mentionnés pour les réseaux de capteurs sans fil. Ils ont utilisé des algorithmes de sécurité basés sur Armstrong où une clé de 128 bits est générée en utilisant le nombre Armstrong
// Elle est utilisée dans l’algorithme AES pour le cryptage et le décryptage des données.

// Codage de Huffman

// Le codage de Huffman est utilisé en conjonction avec la cryptographie et la compression de données. Il est utilisé pour la compression de données sans perte.
// Basé sur la probabilité, il est mis en œuvre de manière à ce que vous n’ayez pas besoin de conserver plusieurs copies de la même chose.

// Le codage de Huffman est utilisé dans des formats de compression tels que GZIP, PKZIP (winzip, etc.) et BZIP2. Toutes les communications avec et depuis l’internet utilisent le codage Huffman.
// La plupart des fichiers d’image tels que JPEG et PNG sont codés en Huffman. De même, les fichiers musicaux tels que les MP3 sont codés en Huffman.

// Le code Huffman convertit les codes de longueur fixe en codes de longueur variable.
// Ces derniers sont ensuite compressés à l’aide des techniques JPEG et MPEG qui génèrent le taux de compression souhaité.

// I. Programmation dynamique

// Le problème du Knapsack 0-1, les problèmes de rupture de mots, la plus longue suite commune, tous ces problèmes sont les plus populaires et les plus courants de la programmation dynamique.

// La programmation dynamique est largement utilisée en bioinformatique, en mathématiques et en économie.
// En bioinformatique, des tâches telles que l’alignement des séquences, le repliement des protéines, la prédiction de la structure de l’ARN et la liaison protéine-ADN utilisent la programmation dynamique.

// En mathématiques, la programmation dynamique est utilisée dans la multiplication des matrices, qui est largement utilisée dans la technologie des fusées. La trajectoire des fusées est décidée en résolvant de nombreux paramètres.
// Tous les problèmes de prise de décision peuvent être résolus de manière optimale à l’aide de la programmation dynamique.

// Le coût algorithmique

// Le coût d'un algorithme est une estimation du nolbre d'opértions élementaires effectué par un algorithme. Cette estimation dépend du nombre de ses entrées et de leurs dimensions.

// Une operation élémentaires est une affection, un calcul, une comparaison.

// 3. La récursivité
// https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript/6280087-decouvrez-la-recursivite-lappel-de-fonctions-a-linterieur-delles-memes

// La récursivié est la fonction qui s'appelle elle-même jusqu'à l'atteindre son objectif.
// Par exemple: la recherche binaire.

// Le but de l'exercice: cherche un élement dans un array trié pourn savoir s'il s'y trouve.
// Une approche basique (et plutot lente) serait suivante:

const findElement = (array, thingToFind) => {
  for (const element of array) {
    if (element === thingToFind) {
      return true;
    }
  }
  return false;
};
console.log(findElement);

// Avec cette méthode, on avance, élément par élément, dans le tableau. Si on touve un élément qui correspond à ce que l'on recherche, la fonction renvoie true. Si on arrive à la fin du tableau sans l'avoir trouvé
// on passe à la ligne suivante et la fonction renvoie false

// C'est plutot clair comme approche, mais c'est lent ! Le temps pris pour chaque recherche se prolonge de manière linéaire avec des listes plus longues!

// Imaginons une autre approche.

const binarySearch = (array, thingToFind, start, end) => {
  console.log(array, thingToFind, start, end);
};

// On sait que le tableau est trié, donc on peut savoir, pour un élément donné, si ce que l'on recherche rsoqie de se troiver plus haut ou plus bas dans la liste.
// Par exemple: si on recherche le nombre 42 et que l'on tombre sur 32, on sait qu'il faudra chercher plus bas.

// Du coup, commencons par analyser l'élement median de la liste. On peut faire la somme de l'index de début et de l'index de fin, et diviser par deux pour trouver cet éement (arrondisspons vers le bas pour nous assurer de trouver un nombre entier):
const nomnbre = [1, 2, 3, 4, 5, 6];
const binarySearch1 = (array, thingToFind, start, end) => {
  const mid = Math.floor((start + end) / 2);
};
console.log(binarySearch1);

// Mais pourquoi utiliser les index de début et de fin plutôt que la propriété length du tableau

// Utiliser les index nous premettre de réutiliser le même code de sélections de plus en  plus petites du tableau, comme vous allez vite le découvrir!

const binarySearch2 = (array, thingToFind, start, end) => {
  // Algo pour trouver le nombre median
  const mid = Math.floor((start + end) / 2);
  //Si le nombre median est égale à ce qu'on cherche alors on retorune true si non on retourne false
  if (array[mid] === thingToFind) {
    return true;
  } else {
    return false;
  }
};
console.log(binarySearch1);

// La fonction retournera true si on a trouvé l'élément.

// Si on a pas eu de chance, ce n'est pas grave: puisque le tableay est trié, on sait dans quelle moitié du tableau chercher.!
// Du coup, on a juste à executer exactement la même  fonction sur la partir en question! Il suffit de modifier soit l'index de fin (pour chercher dans la première moitié) soit l'index de début
// (Pour chercher dans le deuxième moitié):

const binarySearch3 = (array, thingToFind, start, end) => {
  // Algo pour trouver le nombre median
  const mid = Math.floor((start + end) / 2);
  //Si le nombre median est égale à ce qu'on cherche alors on retorune true si non on retourne false
  if (array[mid] === thingToFind) {
    return true;
  }

  if (thingToFind < array[mid]) {
    // Il faut rechercher dans la première moitié
    return binarySearch3(array, thingToFind, start, mid - 1); // On utilise (mid - 1) car
    // On sait que 'on n'as pas besoin de l'élement mid, il a déjà été vérifié!
  } else {
    // Il faut rechercher dabs la deuxième partie
    return binarySearch3(array, thingToFind, mid + 1, end);
  }
};
console.log(binarySearch3);

// La fonction continuera à s'appeler elle-même jusqu'à trouver ce que l'on recherche n'existe dans le tableau ?
// Il faut ce que l'on appelle un cas de base, ou base case, pour dire à la fonction de s'arrêter.

// Quel est la base case dans cet algo ?

// On saura que l'algo est arrivé au bout si on a essayé de l'appeler avec un index de début qui est supérieur à l'index de fin.

// Pourquoi ? Parceque peu à peu, on divise le tableau, encore et encore, jusqu'à tomber sur une séléction d'un seul éléùe,t: On aura donc
// start = mid = end. Du coup, quand la fonction se rappellera encore, elle utilisera start = mid + 1, soit end = mid - 1, selon notre recherche. On aura donc start > end
// et la fonction peut retourner false, car on sait qu'elle est arrivé au bout sans trouver ce que l'onr recherche.

// On met donc ce base case au début de la fonction pour vérifier s'il s'agit du dernier appel :
const binarySearch4 = (array, thingToFind, start, end) => {
  // Base case: Si le start est supérieur qu'à la fin alors on retourne false
  if (start > end) {
    return false;
  }
  // Algo pour trouver le nombre median
  const mid = Math.floor((start + end) / 2);
  //Si le nombre median est égale à ce qu'on cherche alors on retorune true si non on retourne false
  if (array[mid] === thingToFind) {
    return true;
  }

  if (thingToFind < array[mid]) {
    // Il faut rechercher dans la première moitié
    return binarySearch4(array, thingToFind, start, mid - 1); // On utilise (mid - 1) car
    // On sait que 'on n'as pas besoin de l'élement mid, il a déjà été vérifié!
  } else {
    // Il faut rechercher dabs la deuxième partie
    return binarySearch4(array, thingToFind, mid + 1, end);
  }
};
console.log(binarySearch4);

// Et voilà, une fonction récursive, qui s'appelle elle-même, qui effectue une recherche d'élément dans
// Un tableau trié, et qui renvoie true si l'élément s'y trouve, ou false s'il ne s'y trouve pas (grace au base case)

// ATTENTION ! Sans base case (ou avec un base case incorrect), vos fonctions récursives peuvent causer des infinite loops et des stack overflows, car elles vont continuer à s'appeler à l'infini, donc faites bien attention !

// Cet algorithme s'appelle la recherche binaire, et il s'agit d'un exercice qui est souvent demandé en entretien d'embauche, donc vous venez de afire un pas de plus vers votre premier emploi de développeur!

// Exercice recursive : https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript/6280087-decouvrez-la-recursivite-lappel-de-fonctions-a-linterieur-delles-memes
// https://codepen.io/quentin-laurent/pen/oNYVwbb

// Les notions basiques de programmation

// La programmation est un ensemble d'ordre écrit par le programmeur via un IDE avec des langages de programmation de haut ou de bas niveau tel que JavaScript;, PHP, Java ou C++ pour ensuite convertir ces ordres en un logiciel par exemple
// A lire:
// https://zestedesavoir.com/tutoriels/531/les-bases-de-la-programmation/#2-15272_creer-des-programmes

// Les algorithmes de prises de décision: Je ne trouve pas

// 29/04/2022

// Exercice final! Boss final JS.
// Il y aura que du JS
// Client : Ce que je veux

// Pouvoir la possibilité de créer un article avec en plus la quantité, les catégorie exemple fruits, légumes + la possibilité de chercher la date d'achat souhaité
// Pendant la creation, il faut qu'il y a une possibilité de faire un lot avec le même date, il faut pouvoir rajouter le commentaires

// Un tableau ou on peut voir tout mes articles, un tableau ou on peut supprimer et modifier.
// On veut pouvoir chercher un article en particulier dans le tableau (barre de recherches)
// Trier par catégories
// Quand je clique un article, acceder a un page de l'article détaillé
// Niveau design professionnel! Vendable! PROPRE! PARFAIT! SANS FAUTE

// Demande du lead dev, dans le code obligation de passer par asnyc et await
// Au niveau de scss, il faut des variables
// Au niveau de JS, des classes, un ou deux pattern, la gestion d'erreurs de l'es-6 seuelement

// 3 scenarions (users story) creation todo, suppression todo et consulation todo
// Darkmode et lightmode

// Regarder le cours de modele conceptuelle de données
// Regarder le mind
// Regarder le trello

// Refaire la todolist sans regarder la solution
// Bootstrap 5, HTML, JS, SCSS, Flex, Grid
// Etape 1 creation mind
// Etape 2 creation de MCD (je ne sais pas)
// Etape 3 creation de prototype via adobe. (à la maison)
// Etape 4 Creation d'un trello pour faire une estimation de temps du projet
// Etape 5 Mise en place de template
// Etape 6 mise en place de CSS et du JS
// Etape 7 Présentation avec 5 slide plus 20 minutes

// Presentation dans deux semaines le 15 mai

// Article, quantité, catégorie (fruits, legumes etc), la date, commentaire

// 08/05/2022

// La fonction substract prend 2 arguments et retourne la soustraction du premier par le deuxième
// Exemple d'entrée
// (42, 24)
// Exemple de sortie
// 18

const soustraction = (a, b) => {
  return a - b;
};

console.log(soustraction(666, 333));

// Créer une variable nombre, et on assigne une valeur 42

const nombre = 42;
console.log(nombre);

// Déclarer une constante C et assigner lui un tableau [1,2,3]

const c = [1, 2, 3];

// La fonction substract prend 2 arguments et retourne la soustraction du premier par le deuxième
// Exemple d'entrée
// (42, 24)
// Exemple de sortie
// 18

const substraction = (a, b) => {
  return a - b;
};

console.log(substraction(42, 24));

// Énoncé
// Dans cet exercice vous allez devoir utiliser l'instruction switch pour itérer sur la valeur de la variable note et modifier en conséquence la valeur de la variable remarque.

// List des objectifs à remplir
//  Vous devez déclarer une variable remarque et une instruction switch qui va itérer sur la valeur de note
//  - pour la valeur 5, remarque doit être égal à 'Excellent'
//  - pour la valeur 4, remarque doit être égal à 'Très bien'
//  - pour la valeur 3, remarque doit être égal à 'Bien'
//  - pour la valeur 2, remarque doit être égal à 'Moyen'
//  - pour les valeurs 1 et 0, remarque doit être égal à 'Médiocre'
//  Dans tous les autres cas, remarque doit avoir la valeur 'La note doit être un nombre compris entre 0 et 5'

// Semaine prochaine finir cet exo et trouver une autre exo sur switch

const testFn = (note) => {
  // Déclarez en dessous :
  switch (note) {
    case 5:
      remarque = "Excelent";
      break;
    case 4:
      remarque = "Très bien";
      break;
    case 3:
      remarque = "Bien";
      break;
    case 2:
      remarque = "Moyen";
      break;
    case 1:
      remarque = "Médiocre";
      break;
    case 0:
      remarque = "Médiocre";
      break;
    default:
      console.log(`Désolé, vous venez de toucher le fond.`);
  }

  // Ne touchez pas au return.
  return remarque;
};

console.log(testFn(3));

// Revoir les classes en JS
// Revoir l'héritage
// Revoir les constructeur de JS

// Mixins de JS

// Exo: créer un calculateur
