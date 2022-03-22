// Exo 15/03/2022 sur la date

// console.log("Date ici :", Date());
// Instancier la date
const date = new Date(); // Objet
const date1 = Date(); // String
// Classe et forcement un objet, toute est objet dans JS
console.log("type date:", typeof date);
console.log("type date:", typeof date1);
console.log("date", date);
const dateString = date.toString();
console.log("date", dateString);

// Exo, récuperer un petit tableau qui affiche la date d'auhourd'hui complet sur des diffeents formats
// let dateNow = Date.now();
// console.log(dateNow);

// let setYear = date.setYear();
// console.log(setYear);
// let setFullYear = date.setFullYear();
// console.group(setFullYear);

const annee = date.getFullYear();
const mois = date.getMonth();
const jour = date.getDay();
const heure = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const today = `${annee}/${mois}/${jour} ${heure}:${minutes}:${seconds}`;

console.log(today);

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
const dateLocalTimeZone = dates.toLocaleString("fr-FR", { timeZone: "UTC" });
console.log(dateLocalTimeZone);

// Commence ici
const dateComplete = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

// une application peut vouloir utiliser UTC et le rendre visible
dateComplete.timeZone = "UTC";
dateComplete.timeZoneName = "short";

const dateLocal = dates.toLocaleString("fr-FR", dateComplete);
console.log(dateLocal);

// Finit ici

console.log(dates.toLocaleString());
// dates.toLocaleString("en-US");
// dates.toLocaleString("de-AT");
// dates.toLocaleString("de-AT");

function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
console.log(toLocaleStringSupportsLocales());

// Formatage international de la date et de l'heure en JS

const dateFR = new Intl.DateTimeFormat("fr-FR").format(date); // date === today
console.log(dateFR);

const dateFullFR = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "full",
  timeStyle: "full",
}).format(date); // date === today
console.log(dateFullFR);

const dateCompleteInt = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Europe/Paris",
  timeZoneName: "short",
  hour12: false,
  dayPeriod: "short",
  calendar: "France",
  numberingSystem: "France",
};

dateCompleteInt.fractionalSecondDigits = 3;

const dateAllFR = new Intl.DateTimeFormat("fr-FR", dateCompleteInt).format(
  date
); // date === today
console.log(dateAllFR);
