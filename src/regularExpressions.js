// Freecodecamp 06/04/2022

// Regular expression
// Utiliser la méthode Test

// Les expressions regulières sont utiliser dans les langages de programmation pour fairen correspondre
// des parties de chaine de charactères. Je crée des motifs pour m'aider à effectuer cette corresponance.

// Si vous voulez trouver le mot "the" dans le string "the  dog chassed tje cat", je peux utiliser cette expresiion régulières
// /the/. Remarque que les guillemets ne sont pas necessaires dans l'expression regulière

// JS a plusieurs moyens pour utiliser le regexs. Un moyen est de teter le regex avec la méthode "test()".
// La méthode test() prends le regex, l'appliquer dans la chaine de charactères (dans laquelle est placer dans le paranthèses),
// et retourner "true" ou "false" si mon motif trouve quelque chose ou non.

const testStr = "freeCodeCamp";
let testRegex = /Code/;
const testCodeString = testRegex.test(testStr);
console.log(testCodeString);

// la méthode test ici retourne true

// appliquer le regex myRegex dans la chaine de charactères myString en utilisant .test() méthode
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result);

// Correspondre a la chaine de charactères litéral

// Dans l'exo précedent, on cherche le mot Hello en utilisant l'expression régulières /Hello/. Cette regex a rechercé une correpondance littérale de la chaine de caractères "Hello"
// Voici d'autres exemples pour chercher la correspondance littérale de string "Kevin"

const testStr1 = "Hello, my name is Kevin.";
const testRegex1 = /Kevin/;
console.log(testRegex.test(testRegex1));
// Cet appel de test va returner true

// D'autres forme de "kevin" ne va correspondre. Par exemple, le regex /Kevin/ ne va pas matché kevin ou KEVIN ou KeViN etc

const wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr1));
// La méthode test va retourner false.

// Le prochaine exo va montrer comment matcher ces autres formes aussi

// Completer le regex waldoREGEX pour trouver "waldo" dans le string "waldIsHiding" avec un correspondance littérale

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let resultat = waldoRegex.test(waldoIsHiding);
console.log(resultat);

// 09/04/2022

// Ignorer les cases au moment de correspondance

// Jusqu'à maintenant, on regarde vers le regex poir faire un correspondance littéral de chaine de charactère. Mais parfois, peut être on veut aussi matché des cases difference.
// Les cases (ou parfois les cases de lettres) est la diffence entre des lettres majuscules et minuscules. L'exemple de majuscule A,B,C et D et minuscule a,b,c et d

// Vous pouvez matchez chaque cases en utilisant de ce qu'on appelle le flag(drapeau). Il y a des differents flags mais ici, vous devez vous concentrez au glag qui ignores les casses i.
// Vous pouvez utiliser cela en l'ajoutant dans le regex. Dans l'exemple d'utilisation de ce flag est /ignorecase/i. Ce regex va faire un correspondance au strings ignorecase, igNoreCasse, et ignoreCase.

// Ecrivez un regex fccRegex pour latcher a freeCodeCamp, peut importe la case. Votre regex ne doit pas matcher aucun abbrevations ou variations avec des espaces.

let myStringI = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let resultI = fccRegex.test(myStringI);
console.log(resultI);

// Jusqu'ici, vous n'avez que checké si un motif (pattern) existe ou non à l'inéterieur de string. Vous pouvez également extraire les correspondances réelles que vous avez trouvées avec la méthode .match().

// Pour utiliser la méthode .match(), il faut appliquer cette méthode a un string et passer le regex à l'intérieur les paranthèses.

// Voici l'exemple:
const helloWorld = "Hello, World!";
const hell = helloWorld.match(/Hello/);
console.log(hell);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
const ourStrRegex = ourStr.match(ourRegex);
console.log(ourStrRegex);

// Ici, le premier match va retourner ['Hello'] et la deuxième va nous retourner ["exoression"].

// Notez que le syntax .match() est "l'opposé" de la méthode ".test" que vous avez déjà utilisé jusqu'a maintenant.

console.log("string".match(/regex/));
console.log(/regex/.test("string"));

// Appliquer la méthode .match() pour extraire le string "coding"
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resultMatch = extractStr.match(codingRegex); // Change this line
console.log(resultMatch);

// Trouver au dela du premier correspondance

// Jusqu'ici, vous ne pouvez qu'extraire ou chercher le motif (pattern) qu'une fois.

const testString = "Repeat, Repeat, Repeat";
const ourRegexx = /Repeat/;

// Ici la méthode match va retourner ["Repeat"].

// Pour chercher ou extraire un motif (pattern) plus qu'une fois, vous devez utiliser le flag (drepaeu) g

const repeatRegex = /Repeat/g;
console.log(testString.match(repeatRegex));

// Et ici la méthode match retourne la valeur {"Repeat", "Repeat", "Repeat"}

// En utilisant le regex starRegex, trouver and extraite chacun de  mot Twinkle depuis le string
// Note: Vous pouvez avoir un flag multiple dans votre regex comme /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line g: global, i: majuscule et minuscule
let resultIG = twinkleStar.match(starRegex); // Change this line
console.log(resultIG);

// Faites correspondre n'importe quoi avec une période joker (wildcard period)

// Parfois vous ne voulez pas (ou vous n'avez pas besoin) savoir le string exact dans votre motif. Réflechir de tous les mots qui corresponds, disons, une faut d'orthographe prendrait beaucoup de temps
// Heureusement, vous pouvez gagner du temps en utilisant le caractère générique : "."

// Le caractère de remplacement "." va correspondre chaque charactère. Le caractère générique est également appelé point (.) et période.
// Vous pouvez utiliser le charactères générique comme tus les autres charactères dans le regex. Par exemple, si vous voulez matcher "hug", "huh", "hut" ou "hum", vous pouvez utiliser le regex /hu./ pour correspondre des ces quatres mots.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); // True
console.log(huRegex.test(hugStr)); // true

// Chacun de ces test va retourner true

// Completer le regex unRegex pour qu'ils puissent corresponds le string "run", "sun", "fun", "pun", "nun" et "bun". Votre regex doit utiliser le charactère générique.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let resultPeriod = unRegex.test(exampleStr);
console.log(resultPeriod);

// Faire correspondre un seul charactères avec un multiples possibilités

// Vous avez appris à faire correspondre des motifs littéraux (/litteral/) et des caractères générique (/./).

// Ce sont des extremes des expressions régulières, ou l'une trouve des correspondances exactes et l'autre correspond à tout. Il existe des options qui constituent un équilibre entre ces deux extremes.

// Vous pouvez chercher un motif littérale avec certains fléxibilité avec les classes de charactère (character classes). Les classes de charactère vous permet de définir un groupe de charactères que vous voulez faire correspondre en les mettant dans les les crochets [].

// Par exemple, vous voulez matché bag, big, et bug mais pas bog. Vous pouvez créer a regex de cette anière /b[aiu]g/. Le [aiu] est la classe de charactère qui va uniquement matché les charactères a,i ou u

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

// Dans l'ordre, les qutres "match" appelle et va retourner la valeur ["big"], ["bag"], ["bug"] et null

// Utiliser la classe de charactère avec des voyelles (a,e,i,o,u) dans votre regex vowelRegex pour trouver toues les voyelles dans le string quoteSimple

// Note: Il faut être sur pour matcher la majuscule et le minuscule voyelles

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line g:global, i:majuscule et mniuscule
console.log(quoteSample.match(vowelRegex)); // Change this line

// Matcher les lettres de l'alphabet

// Vous avez vous que vous pouvez utiliser les charactères pour spécifier un groupe de charactères pour qu'ils puissent matcher, mais il y a beaucoup des lettres à frapper
// lorsque vous devez matcher une large gamme de caractères (par eexemple, chaque lettre de l'alphabet). Heureusement, il existe une fonction qui rends cette tâche courte et simple

// A l'intérieur d'un jeu de caractères, vous pouvez définir une plage de caractères à faire matcher en utilisant le caractère trait d'union: "-"

// Par exemple, pour matcher le minuscule de lettre a jusqu'à la lettre e vous devez utiliser [a-e]

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegexx = /[a-e]at/;
console.log(catStr.match(bgRegexx)); // car
console.log(batStr.match(bgRegexx)); // bat
console.log(matStr.match(bgRegexx));

// Dans l(ordre), les trois méthodes match va retourner les valeurs ['cat'], ['bat'] et null

// Matcher toutes les lettres dans le string quoteSample.

// Note: Il faut être sur de matcher chacun de majuscule et minuscules.

let quoteSamples = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
console.log(quoteSample.match(alphabetRegex)); // Change this line

// Matcher les nombres et les lettres de l'alphabet

// L'utilisation du trait d'union (-) pour correspondre une série de caractères ne se limite pas aux lettres. L'utilisation du trait d'union (-) pour matcher
// une série de caractères ne se limite pas aux lettres. Il peut aussi fonctioner pour matcher une série de nombres.

// Pour exemple, /[0-5]/ permet de matcher chauque nomnbre comprise entre 0 et 5, y compris 0 et 5

let jennySty = "Jenny8675309";
let myRegexLN = /[a-z0-9]/gi;
console.log(jennySty.match(myRegexLN));

// Créer un seul regex qui va matcher une série de lettre entre h et s, et une série de nombre entre 2 et 6. N'oubliez pas d'inclure les flag approprié dans le regex

let quoteSampleNL = "Blueberry 3.141592653s are delicious.";
let myRegexNL = /[h-s2-6]/gi; // Change this line
console.log(quoteSampleNL.match(myRegexNL)); // Change this line

// Faire correspondre les caractères non spécifié

// Jusqu'ici, vous avez créer une série de caractères que vous voulez matcher, mais vous pouvez aussi créer une série de caractères que vous ne voulez pas matcher. Ces types de caractères sont appelé "jeux de caractères négative" (negated character sets)

// Pour créer un "jeux de caractères négative", vous devez placer un caractère de caret "^" après l'ouverture d'un crochet et avant e caractèrs que vous ne voulez pas matcher.

// Par exemple, /[^aieu]/gi va matcher toutes les caractèrs qui ne sont pas des voyelles. Notez que les caractères comme .,!,[],@,/ et un espace matchent. Le jeu de caractères voyelles negatives n'exluent que les caractères de voyelles.$

// Créer un seul regex qui peut matcher toutes les caractères qui ne sont pas des nombres ni des voyelles. N'oiubliez pas d'inclure les glags approriés

let quoteSampleNS = "3 blind mice.";
let myRegexNS = /[^aeiou0-9]/gi; // Change this line
let resultNS = quoteSample.match(myRegex); // Change this line

// Matcher les caractères qui apparaissent une ou plusieurs fois

// Parfois, vous devez matcher les caractères (ou un groupe de caractèrs) qui apparaissent un ou plusieurs fois d'affilé. Cela veut dire qu'il apparaisse au moins une fois, et peut etre répété.

// Vous pouvez utiliser le caractère + pour vérifier si cela est la case. N'oubliez pas, le caracter ou le motif (pattern) doit petre présent daffilé. C'est cela, le caracter devait repeter l'une après l'autre/

// Par exemple, /a+/g va trouver une correspondance dans "abc" et va retourner ["a"]. A cause du +, elle trouverai également une seuel correspondance dans "aabc" et renverrait ["aa"]

// Si cela vérifierait plutôt le string abab, il doit trouver deux correspondance et va retourner ["a", "a"] car le caractère "a" ne sont pas dans le même ligne, - il y a le "b" entre eux.
// Finalement, depuis qu'il n'y a pas le "a" dans le string bcd, il va rien trover

// Vous voulez trouver des correspondances lorsque lettre "s" apparait une ou plusieurs fois dans Mississippi. Ecrivez une regex qui utilise le signe +

let difficultSpelling = "Mississippi";
let myRegexRepeat = /s+/gi; // Change this line
console.log(difficultSpelling.match(myRegexRepeat));

// Matcher les caractères qui apparaissent zero fois ou plus

// Le dernier défi a utilisé le signe plus + poir voir les caractères qui apparaissent une fois ou plus. Il y a aussi un option qui permet de matcher les caractèes qui apparaissent 0 fois ou plus.

// Le caractère qui peut faire cela est l'asterisk ou l'étoile : *

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

// Dans l'ordre, il y a trois match qui va appeler et retourner les valeurs ["gooooooooo"], ["g"] et null

// Pour ce défi, chewieQuote a été initialisé comme la chaîne de caractères Aaaaaaaaaaaaaaaarrrgh ! en coulisses. Créer un regex chewieRegex qui utilise le caractère * pour matcher le caractère majuscule A immédiatement suivi d'un zero ou plus de caractère minuscule a dans chewieQuote. Votre regex n'as pas besoin des flags ou des classes de caractère, et il ne doit pas matcher quelque soi d'autre citation.
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
const chewieRegex = /Aab*/; // Change this line : b = 0 fois
// Only change code above this line

console.log(chewieQuote.match(chewieRegex)); //[ "Aaaaaaaaaaaaaaaa" ]

// Trouver le caractèrs avec un "lazy matching" ou corespondance paresseuse

// Dans l'expression régulières, une correspondance avide trouve la partie la plus longue possible d'une chaine de caractères qui correspond au motif de l'expression rationelle et la renvoie comme corresponce.
// L'alternative est appelée correspondance paresseuse (ou lazy match), dans laquelle trouve la plus petite partie de la chaîne de caractères qui satisfait le modèle regex.

// Vous pouvez appliquer le regex /t[a-z]*i/ au string "titanic". Ce regex est tout simplementunmotif (pattenr) qui commence avec t, et finit avec i et va avoir certains lettres entre les deux.

// L'expression régulières sont par défaut avider/gourmand (greedy), donc la correspondance retournerait ["titani"]. Il trouvera la plus grande sous-chaine de caractères qui correspond au motif (pattern)

// Cependant, vous pouvez utiliser le caractère "?" pour changer la correspondance paresseuse. "Titanic" est comparé à la regex ajustée de /t[a-z]*?i/ et renvoie ["ti"]

// Note: l'analyse (parsing) du langage HTML avec des expressions regulières  doit être éviée, mais le filtrage (pattern) d'un string HTML avec des expression régulières est tout a fait acceptable.

// Reparer le regex /<.*>/ pour retourner le tag HTML <h1></h1> et non le text "<h1>Winter is coming</h1>". N'oubliez pas le joker "." dans les expressions régulières permet de matcher tous les caractères:

let text = "<h1>Winter is coming</h1>";
let myRegexLazy = /<.*?>/; // Change this line
console.log(text.match(myRegexLazy));

// Trouver un criminel ou plus dans une chasse

// Il est temps de faire une pause et de tester vos nouvelles compétences en écriture de regex
// Un groupe de criminels s'est échappé de prison et s'est enfui, mais vous ne savez pas combien ils sont. Cependant, vous savez qu'ils restent groupés lorsqu'ils sont en présence d'autres personnes
// Vous êtes chargé de retrouver tous les criminels en même temps.

// Voici un exemple pour examiner comment procéder :

// La regex /z+/ correspond à la lettre z lorsqu'elle apparaît une ou plusieurs fois de suite. Elle trouvera des correspondances dans toutes les chaînes de caractères suivantes :

("z");
("zzzzzz");
("ABCzzzz");
("zzzzABC");
("abczzzzzzzzzzzzzzzzzzzzzabc");

// Mais il ne trouve pas de correspondance dans les chaînes suivantes car il n'y a pas de caractères de la lettre z :

("");
("ABC");
("abcabc");

// Écrivez une regex gourmande qui trouve un ou plusieurs criminels dans un groupe d'autres personnes. Un criminel est représenté par la lettre majuscule C.

let reCriminals = /C+/g; // Change this line
console.log(reCriminals);
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-one-or-more-criminals-in-a-hunt

// Matcher le string de début de la chaine

// Le challenge précedent a montré que les expressions réguières peuvent être utilisée pour voir les nombres de correspindances. Ils peuvent aussi être utilisée pour chercher des motifs dans des positions spécifiques deans les chaînes de caractèrs.

// Dans le défi précedent, vous utilisez le caractère caret (^) à l'intérieur d'un jeu de caractères pour créer un jeu de caractères nié sous la forme [^chosesQuiNeSerontPasAssorties].

// A l'éxterieur de jeu de caractère, le caret (^) est utilisé pour chercher un motif au départ d'un string

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); // True
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // False

// Le premier méthode test appelle et retourne true, aors que la deuxième retourne false

// Utiliser le caractère caret dans le regex pour trouver Cal uniquelebt au début du string rockyAndCal

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
console.log(calRegex.test(rickyAndCal));
// Trouver car Cal est au début de la chaine de caractère

// Matcher le dernier string

// Au challenge précédent, on apprends a utiliser le caractère caret ^ pour trouver le motif au début du string. Il y a aussi un moyen pour trouver le motif a la fin du string

// Vous pouvez chercher la fin du string en utilisant le signe dollar $ a la fin de la regex

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding)); // true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); // false

// Utiliser le signe $ pour matcher le string caboose à la fin du string caboose

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
console.log(lastRegex.test(caboose));

// 15/04/2022

// Matcher toutes les lettres et nombres

// Utiliser les classes de caractères, vous pouviez chercher toutes les lettres de l'alphabet avec [a-z]. Cet type de classe de caractères est assez commun qu'il y a aussi un raccourci pour cela,
// Même si cela inclue quelques caractères aussi.

// La plus proche de classe de caractère dans le JS pour matcher un alphabet est /w. Ce raccoyrci est équivalent à [A-Za-z0-9_]. Cette classe de caractèrecorresponds aux lettres majuscules et minuscules en plus des nombres
// Notez, cette classe de caractères inclue aussi les underscore (_)

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

// Les quatres méthodes test ci dessus va retourner true

// Ces raccourcis de la classe de caractères sont aussi connue comme la raccoyrci de la classe de caractère

// Utilisez ce raccourci de la classe de caractère \w pour compter les nombres d'alphanumérique dans des différénts citation et strings

let quoteSample1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
console.log(alphabetRegexV2.test(quoteSample));

// Et

let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegexV21 = /\w/gi; // Change this line
// On utilise .length pour compter le nombre de string
console.log(quoteSample.match(alphabetRegexV2).length); // 60
console.log(quoteSample.match(alphabetRegexV2)); //true;

// Tout matcher sauf les lettres et les nombres

// Vous avez appris que vous pouvez utiliser un raccourci pour matcher un alphanumérique [A-Za-z0-9_] en utilisant \w/ Un motif naturelle peut chercher un alphanumérique opposé

// Vous pouvez chercher les opposiées de \w avec \W. Notez, le motif opposé utilise une lettre capitale. Ce raccourci utilise le même [^A-za-z0-9_]

let shortHandd = /\W/gi;
let numberss = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand));
console.log(sentence.match(shortHand));

// Le premier match va retourner la valeur ["%"] et le second ["!"]
//  Problème, le mien retourne 42 et coding

// Utilisez le raccourci de la classe de caractère \W pour comoter le nombre de caractère non alphanumérique dans des differents citation et string

let quoteSampleAlpha = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
console.log(quoteSample.match(nonAlphabetRegex));

// Matcher toutes les nombres

// Vous avez appris les raccourcis pour les motifs de string communs tel que les alphanumériques.
// D'autres motifs communs est de chercher uniquement des chiffres ou des nombres.

// Le raccourci peut chercher des chiffres et des nomnbres est le \d, avec un d minuscule. C'est équivalelent de la classe de caractère [0-9], qui cherche un seul nombre entre 0 et 9.

// Utilisez un raccourci de la classe de caractère \d pour compter le nombre de chiffre dans les titres de films.
// Les chiffres écrits ("six" au lieu de 6) ne comptent pas.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; // Change this line
console.log(movieName.match(numRegex).length); // 4 car 2001
console.log(movieName.match(numRegex)); // ["2","0","0","1"]

// Matcher toutes les non nombres

// Le dernier challenge montre de comment chercher pour trouver le nombre des chiffres enutilisant le raccourci \d avec un d minuscule.
// Vous pouvez aussi chercher pour trouver le non-chiffres en utilisant un raccourci simmilaire mais cette fois ci avec un D majuscule.

// Le raccourci pour regarder les caractères non-chiffres est \D. Il est équivelent a la classe de caractère qui ne sont pas des nombres entre 0 et 9.

// Utilisez le raccourci de la classe de caractère pour les non chiffres \D pour compter il y a combien des non-chiffres dans des titres de films.

// Le raccourci va voir les non-chiffres est \DF. Il est équivalenet a la classe de caractères [^0-9], qui permet de voir des caractères qui ne sont pas des nombres entre 0 et 9.

// Utilisez le raccourci de la classe de caractère \D pour les non chiffres pour compter combien il y en a 7

let movieNames = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; // Change this line
console.log(movieName.match(noNumRegex).length); // 17
console.log(movieName.match(noNumRegex)); // [ ":", " ", "A", " ", "S", "p", "a", "c", "e", " ", … ]

// Restreindre les noms d'utilisateur possibles

// Le pseudeo (username) est utilisé partout sur internet. Ils donnent les utilisateurs un idéntifiant unique dans leur sites favoris.

// Vous pouvez checker toutes les pseudeos dans la base de données. Ici il y a des règles simples que les utilisateurs doivent suivre lors de la création de leur nom d'utilisateur.

// 1. Les pseudeos ne peuvent qu'avoir des charactères alpha-numérique/
// 2. Les seuls nombres dans les pseudeos doivent être en dernier.
// 3. Les lettres de pseudeos peuvent être majuscules et minuscules.
// 4. Les pseudeos doit avoir au moins deux caractères longues. Un nom d'utilisateur à deux caractères ne peut utiliser que des lettres de l'alphabet comme caractères.

// Changer le regex userCheck pour qu'elle corresponde aux contraints énumérées co-dessus

let username = "JackOfAllTrades";
let userCheck = /^[aA-zZ]+[aA-zZ]+\d*$|^[aA-zZ]+\d\d+$/gi; // Change this line
console.log(userCheck.test(username));
// ^ le commencement de l'input
// [aA-zZ]+ - les premiers caractères sont des lettres
// [aA-zZ]+ - suivi par des caractères lettres
// \d*$ l'input se finit avec 0 ou plus de chiffres
// | ou si non dans le cas ou il y a que 2 caractères
// ^le commenent de l'input
// [aA-zZ]+ les premiers caractères sont des lettres de a à z majuscules ou minuscules
// \d\d+ suivi par 2 ou plus de chiffres
// $ fin de l'input

// Matcher les espaces
// Les challenge jusqu'a maintenant consiste a matcher des lettres de l'alphabet et des nombres. Vous pouvez aussi matcher les espaces ou l'espace entre les lettres.

// Vous pouvez chercher les espaces en utilsant \s avec un s minuscule. Cette moitf ne va pas uniquement matcher les espaces, mais aussi le retour de chariot (cariage return), la tabulation (tab), le saut de page et les caractères de nouvelle ligne.
// Vous pouvez vous dire que cela est similaire à une classe de caractère [\r\t\n\v]

const whiteSpace = "Whitespace. Whitespace everywhere!";
const spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));
// La méthode match va retourner [" ", ""]

// Changer e regex countWhiteSpace pour voir les multiples caractères espaces dans le string

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
console.log(sample.match(countWhiteSpace));

// Matcher les non espaces

// Vous avez appris comment chercher les espaces en utilisant \s avec un s minuscule. Vous pouvez aussitout chercher sauf les espaces.$

// Chercher les non espaces en utilsant \S, qui est un majuscule s. Cette motif ne va pas matcher les espaces, les aractères de retour chariot, de tabulation, de saut de page ni de nouvelle ligne.
// Vous pouvez aussi voir cela similaire à la classe de aractère: [^ \r\t\f\n\v]

let whiteSpace1 = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
console.log(whiteSpace1.match(nonSpaceRegex).length); // 32
console.log(whiteSpace1.match(nonSpaceRegex)); // [ "W", "h", "i", "t", "e", "s", "p", "a", "c", "e", … ]
// La valeur retourner de la méthode .length est 32

// Changer le regex countNonWhiteSpace pour voir il y a combien de caractère de non espace dans le string.

let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
console.log(sample1.match(countNonWhiteSpace));

// Spécifier le nombre supérieur et inférieur de correspondances

// Souvenez vous que vous utiliser le signe + pour voir un ou plusieurs caractères et asterix * pour voir zero ou plus de caractères. Ils sont pratiques, mais il arrive que vous souhaitiez faire matcher une certaine gamme de motifs.

// Vous pouvez spécifier le nombre supérieur ou inférieur de motif avec des spécificateurs. Prescripteurs de quantité sont utilisé avec un curly brackets ({ et }). Vous pouvez mettre des nombres entre les curly brackets - pour le nombre supérieur et inférieur de motif.

// Par exemple, pour matcher uniquement la lettre a apparaissaiant entre 3 et 5 fois dans la chaine ah, votre regex serait /a{3,5}h/

const A4 = "aaaah";
const A2 = "aah";
const multipleA = /a{3,5}h/;
console.log(multipleA);
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
// Le premier test va retourner true, alors que le deuxième false

// Changer le regex ohRegex pour matcher la phrase complete Oh no uniquement quand il a 3 a 6 lettre de h
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno{1,1}/; // Change this line
console.log(ohRegex.test(ohStr));
// Entre 3 et 6 oh ohhh ok ohhhhh ok ohhhhhhh no

// Spécifier unuqement le nombre inférieur de correspondance (matching)

// Vous pouvez spécifier le nombre inférieur et supérieur de motifs avec des spécificateurs de quantité en utilisant des crochryd {}.
// Parofis vous voulez spécifier le nombre inférieur d'un motif sans le nombre supérieur.

// Pou spécifier uniquement le nombre inférieur d'une motif, gardez le premier nombre suivi par un virgule.

// Par exemple, pour matcher unuquement le string hah avec la lettre a qui apparaissent au moins 3 fois, votre regex va être comme /ha{3,}h/
const A5 = "haaaah";
const A3 = "haah";
const A100 = `h${`a`.repeat(100)}h`; // FRepeter 100*
const multipleAA = /ha{3,}h/;
console.log(multipleAA.test(A5)); //true
console.log(multipleAA.test(A3)); //false
console.log(multipleAA.test(A100)); // true
// True car a est au moins 3 fois

// Changer le regex haRegex pour matcher les mots Hazzah uniquement quand il a quatres ou plus de lettre z's
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
console.log(haRegex.test(haStr));

// Spécifier l'exact nombre de correspondances

// Vous pouvez spécifier le nombre inférieur et supérieur de motif avec des spécificateurs de quantité en utilisant les crochets {}
// Parfois vous voulez uniquement un nombre spécifique à matcher.

// Pour spécifier un certains nolmbre de motif, vous devez avoir ce fameux nombre entre les crochets.

// Par exemple, pour spécifier le mots uniquement le mot hah avec le lettre a 3 fois, votre regex doit êtrevde cette manière /ha{3}h/

let A6 = "haaaah";
let A1 = "haaah";
let A200 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A6); // false
multipleHA.test(A1); // true
multipleHA.test(A200); // true normalement false

// Changer le regex timRegex pour matcher le mot Timber uniquement quand il a 4 lettres m's
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
console.log(timRegex.test(timStr));

// Cjecker pour tout ou rien

// Parfois le motif que vous voulez rechercher peuvent comporter des parties qui peuvent ou non exister. Cependant, il peut être important de les vérifier quand même.

// Vous pouvez spécifier la possibilité d'existence d'un element avec un point d'interrogation
// Cela vérifie l'existence de l'un ou l'autre des éléments suivants. Vous pouvez considerer que ce symbole signifie que l'élement précédent est facultatif.

// Par exemple, il y a des petits diférences entre l'anglais américain et l'anglais britanique et vous pouvez utiliser le point d'intérrogation pour faire correspondre les deux orthographes.

const american = "color";
const british = "colour";
const rainbowRegex = /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
// Les deux utilisent la méthode test va retourner true

// Changer les regex favRegex pour matcher la version de mot americain anglais et anglais britanique

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
console.log(favRegex.test(favWord));

// Lookahead positif et negative

// Lookaheads sont des modèles qui dit à JS de regarder en avant dans votre string pour vérifier les motifs plus loins dans la chaine.
// . Cela va être utilie quand vous voulez chercher un multiple motif sur le même string;

// Il y a deux types de lookaheads: positive lookaheads et negative lookaheads.

// Un lookaheads positif va regarder pour être sur que les elements du modèle de recherce sont présents, mais il ne va pas les matcher. Un lookahead positive est utilisé de cette manière (?=...) ou les ... sont la partie réquise qui n'est pas appariée.

// De l'autre côté, un lookahead negative vérifiera que l'élément du modèle de recherche n'esr pas présent.. Un lookahead negative est utilisé de cette manière (?!...) ou les ... est le motif que vous ne voulez pas être la.. Le reste du modèle est retourner si le lookahead negative n'est pas présent.

// lookaheads sont un peu compliquer et donne beaucoup de confusion maus certains de ces exemples vont vous donner des idées:

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // Positive lookaheads, retourne q car il y a le u
let qRegex = /q(?!u)/; // Negative lookaheads, retourne q car il n'y a pas de u
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));
// Chacun de ces match vont retourner ["q"]

// L'utilisation plus pratique de l'utilisation lookaheads est de checker deux modèle ou plus dans un seul string
// Voici un vérificateur de mot de passe (naîvement) simple qui recherche entre 3 et 6 caractères et au moins un chiffre :

const password = "abc123";
const checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

// Utiliser le lookaheads dans le pxRegex pour matcher des mot de passe qui supérieur de 5 charactère long, et qui a deux nombres (digits) consecutive

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
console.log(pwRegex.test(sampleWord));
// /(?=\w{6}) au dela de 5 caractères donc minimale 6
// (?=\w*\d{2}) et peut avoir deux nombres consecutives après 0 ou plus de caractères lettres
// https://www.deepl.com/translator#en%2Ffr%2FHere+is+a+%28naively%29+simple+password+checker+that+looks+for+between+3+and+6+characters+and+at+least+one+number%3A=

// Checker un groupe de caractères mixe

// Parfois nous voulons checker un groupe de caractère en utilisant une expression régulières et pour arriver à cela, nous utilisons une paranthèse ()

// Si vous voulez trouver sois un Pinguin ou un Pumpkin dans le string, vous pouvez utiliser l'expression régulières
// P(engu|umpk)in/gi

// Vérifiez ensuite si les groupes de chaîne de test en utilisant la méthode test().

let testStrin = "Pumpkin";
let testRegex2 = /P(engu|umpk)in/;
testRegex2.test(testStrin); // True
// La méthode test va retourner true

// Reparer le regex so il va être capable de checker le nom de Franklin Roosevelt ou Eleanor Roosvelt en tenant compte des majuscules et des minuscules et en faisant des concessions pour les prénoms.

// Ensuite, reparer le code pour que le regex que vous avez créée soit vérifiée par rapport myString et que le résultat soit vrai ou faux selon que l'expression rationnelle correspond ou non.

let myStringRegex = "Eleanor Roosevelt";
let myRegexRegex = /(Franklin|Eleanor)\s(D\.|)(\s|)Roosevelt/; // Change this line
console.log(myRegex.test(myString)); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
// Slution freecodecamp

let myStringRegex1 = "Eleanor Roosevelt";
let myRegexRegex1 = /(Franklin|Eleanor).*Roosevelt/;
console.log(myRegex.test(myString));

// Modèles de réutilisation à l'aide de groupes de capture

// Disons que vous voulez matcher des mots qui apparaissent plusieurs fois comme l'exemple ci-dessous

const repeatString = "row row row your boat";

// Vous pouvez utiliser /row row row/, mais si il n'y a pas de nombre de répétition spécifique pour les mots.
// les groupes de captures (capture groupes) peut être utilisés pour trouver le sous-string répétées.

// Les groupes de capture sont construits en mettant entre paranthèeses le motif regex à capturer. Dans ce cas, l'objecif est de capturer un mot composé de caractères alp^hanumériques.
// Le groupes de capture sera donc \w+ entre paranhèses: /(\w+)/

// Les sous chaines correspondant au groupe est enregistrée dans une "variable" temporaire, à laquelle on peut accéder dans le même regex en utilisant une barre oblique inverse et le numéro du groupe de capture (par exemple \1).
// Les groupes de capture sont automatiquement numérotés en fonction de la position de leurs paranthèses ouvrantes (de gauche à droite), en commençant par 1.

// L'exemple ci-dessous va matcher à un mot qui apparait trois fois, séparé par des espaces:

const repeatRegex3 = /(\w+) \1 \1/;
console.log(repeatRegex3.test(repeatString)); // Returns true
console.log(repeatString.match(repeatRegex3)); // Returns ["row row row", "row"]

// En utilisant la méthode .match() dans le string renvoie un tableau contenant le sous-chaine trouvée, ainsi que ses groupes capturés.

// Utilisez les groupes de capture dans reRegex pour faire correspondre une chaîne de caractères qui se compose uniquement du même nombre répété exactement trois fois et séparé par des espaces simples.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/g; // Change this line
console.log(reRegex.test(repeatNum));
console.log(repeatNum.match(reRegex));

// Utiliser les groupes de capture pour rechercher et remplacer

// Chercher est utile. Cépendant, vous pouvez rendre la recherche encore plus puissante en modifiant (ou en remplacant) le texte que vous recherchez.

// Vous pouvez chercher et remplacer les textes dans le string en utilisant la méthode .replace dans le string. Les entrées (input) pour .replace() sont d'abord le motif regex que vous rechercher.
// La deuxième paramètre est le string que vous voulez rechercher ou la fonction  pour faire quelquechose

const wrongText = "The sky is silver";
const silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));
// La méthode réplace va retourner le string "The sky is blue"

// Vous pouvez aussi acceder au capture du groupe dans le remplacement du string avec un signe dollar ($)

console.log("Code Camp".replace(/^(\w+)\s(\w+)$/, "$2 $1")); // Camp Code, $2 deuxièmme mot, $1 première mot
// La méthode replace va retourner le string "Camp Code"

// Ecrivez le regex fixRegex en utilisant trois captures du groupe qui va chercher pour chaque mot dans le string one two three. Ensuite, mise a jour le variable de replaceText pour remplacer one two three avec le string three two one et assigner
// Le resultat dans la variable result. Soyez sur que vous utilisez un capture de groupe dans le remplacement strong en utilisant le signe dollar ($)
let str = "one two three";
let fixRegex = /^(\w+)\s(\w+)\s(\w+)$/gi; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
console.log(str.replace(fixRegex, replaceText));

// Challenge

// Enlever les espaces depuis le debut et la fin

// Parfois, les espaces autour de string ne sont pas voulue but ils sont la. Le traitement typique de chaine de caractères consiste à supprimer les espaces au début et à la fin du string.

// Ecrivez un regex et utiliser les méthodes string appropriés pour enlever le string au début et à la fin.

// Note, il ne faut pas utiliser String.prototype.trim()

const hello = "   Hello, World!  ";
const wsRegex = /\s+\s+/gi; // Change this line
console.log(hello.replace(wsRegex, "")); // Change this line
// \s+ On cherche un espace qui se suit (au dela de 1 espace)
// \s+ Deux fois car il y en a deux, au debut et à la fin.
// g global pour dire que c'est partout possible, sans global on ne choisit que le premier
// On utilise la méthode replace pour faire un remplacement
// (wsRegex, "") on remplace les deux espaces au dela de un de début et la fin avec un string vide

// Solution freecodecamp
const hello1 = "   Hello, World!  ";
const wsRegex1 = /^\s+|\s+$/g; // Change this line
console.log(hello.replace(wsRegex, "")); // Change this line
// Mieux car on dit clairement que cela commence sans espace et finit sans espace, on ne peut pas ajouter car un mot de plus car il y a $
// Utilisation de or: espace de début (au dela de 1) ou les espace de la fin (au dela de 1) et finit