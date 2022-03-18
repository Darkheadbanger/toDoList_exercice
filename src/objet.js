const objet = {
  a: 1,
};

objet.b = 2;
objet["c"] = 3;
// Exo, réaliser un tableau et un objet en ajoutant la valeur à la main
// Et les supprimer via uene méthode jS
// Regader sur l'internet la classe Objet en JS pour voir es méthodes, exemples:*
// entries, values, keys...

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

// const obj2 = {
//   //   set unSetter() {},
// };
// const utilisateurs2 = {
//   prenom: "",
//   nom: "",

//   set nomComplet() {
//     return `${this.prenom} ${this.nom}`;
//   },
// };
