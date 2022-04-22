// Les classes sont des sucres syntaxique
class Voiture {
  constructor(roues, portes, moteur) {
    this.roues = roues;
    this.portes = portes;
    this.moteur = moteur;
  }

  marque = () => {
    return "peugeot";
  };

  static mode = () => {
    return "Sport";
  };
}

const voitureDeDavid = new Voiture(4, 4, "essence");
console.log(voitureDeDavid.portes);
console.log(voitureDeDavid.marque());
console.log(Voiture.mode()); // Méthode statique est hyper important, on ne peut l'acceder directement dans la classe

class Sportif extends Voiture {
  constructor(roues, portes, moteur) {
    super(roues, portes, moteur);
  }
}

const voitureSportifDeDavid = new Sportif(4, 4, "V12");
console.log(voitureSportifDeDavid);
console.log(Sportif.mode()); // Héritage de la méthode statique, la seule façon pour appeler la classe enfant

// L'operateur instance of

console.log(voitureDeDavid instanceof Voiture); // true car parent
console.log(voitureDeDavid instanceof Sportif); // false car fille

// Mixins de JS

// Exo: créer un calculateur
