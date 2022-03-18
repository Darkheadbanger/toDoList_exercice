// Exo 15/03/2022 sur la date

// console.log("Date ici :", Date());
// Instancier la date
const date = new Date();
// Classe et forcement un objet, toute est objet dans JS
console.log("type date:", typeof date);
console.log("date", date);
console.log("date", date.toString());

// Exo, récuperer un petit tableau qui affiche la date d'auhourd'hui complet sur des diffeents formats

// YYYY-MM-DDTHH:mm:ss.sssZ
// moment.js (plus supporté)

const timeStamp = Date.now();
console.log("timestamp", timeStamp);
console.log(timeStamp.toPrecision);

// Exo 2, utiliser les setters de l'objet Date
const dates = new Date();
console.log("set :", dates.setFullYear);
dates.getFullYear;

// Pour la localité
dates.toLocaleString("fr-FR", {
  month: "short",
  year: "numeric",
});
// dates.toLocaleString("en-US");
// dates.toLocaleString("de-AT");
// dates.toLocaleString("de-AT");

