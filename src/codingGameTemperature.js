/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
// Inputs est un tableau
var inputs = readline().split(" ");

// Deuxième méthode
// Si valeur absolue a(toujours positif) est plus petit que  la valeur absolue b alors on retourne la valeur absolue a
// Ou, si b - a retourne neative c'est a dire a est plus petit, par exemple si on retourne a negative alors cela fait negative b - positif a donc ca reviens au positif (-5 - 5)
//let tempsSorted = inputs.sort((a,b)=> Math.abs(a) - Math.abs(b) || b - a)
// On retourne la premiere valeur de ce tableau ou si elle n'existe pas on retourne 0
// console.log(tempsSorted[0] || 0)

// Je crée une condition, si le temperature est a 0 alors, on retourne 0 car il n'y a pas de valeur
if (n === 0) {
  console.log(0);
} else {
  // Si non
  // C'est le résultat qu'on va retourner, le result est égale a la première valeur qu'on va avoir donc 1, ca existe car n est differents que , donc la valeur minimum est au moins
  let result = parseInt(inputs[0]);
  // On créer une boucle pour lire toutes les valeurs donc la témpérature a analyser
  // On initialise i dans la boucle for car on veut commencer a partir de la deuxième variable car on veut pas tester la première variable car on a déjà dans le varable result
  for (let i = 1; i < n; i++) {
    // On parcours le tableau inputs et on stocke les temperatures dans la variable t
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    // On va comparer les deux valeurs pour trouver la plus proche de zero, astuce il faut utiliser la valeur absolue
    const tPositif = Math.abs(t);
    const resultAbs = Math.abs(result);
    // Si la valeur absolue de result est plus grande que la nouvelle valeur (t), ca veut dire que
    if (resultAbs > tPositif) {
      // Si on rentre dans ce cas, ca veut dire que notre valeur absolue de result est plus loin de zero que la valeur abs t
      // Donc, le t est notre nouvelle valeur de référence la plus proche de zero qu'on a croisé a l'heure acctuelle donc on stocke t dans reslt
      result = t;
    }
    // Si non, si les deux sont identiques, ca veut dire si la valeur absolue de result est identique que la valeur absolue de t sont dans le même distance (par exemple si -5 et 5)
    else if (resultAbs === tPositif || resultAbs < 0) {
      //Alors, on prends toujours le positif, si t est supérieur a 0 donc si t est positif alors on va prends forcement t
      if (t > 0) {
        // On stocke le t qui est positif a result
        result = t;
      }
    }
  }
  console.log(result);

  // Write an answer using console.log()
  // To debug: console.error('Debug messages...');
}
