// 26/04/2022

// Gestion d'erreur

try {
  // Instructions... si réussit

  // Exceptions operateur
  // Nous créons une exceotions
  throw "error";
} catch (error) {
  // console.error(error)
  // La gestion de l'erreur
}

try {
  setTimeout(() => {
    throw "Error";
  }, 1000);
} catch (e) {
  console.log(e.message);
} finally {
  // Instructions, il executera tout le temps même après le try
  console.log("faim");
}
// A regarder
// Méthode throw à comprendre par coeur

// Deboggeur devtools
// deboggers de vicual studio code
// Asynchrone et synchrone, promise await
