const comment = "This video is cool...bastard";
const insultList = ["fuck", "shit", "crap", "bastard"];
const insulte = (comment, insultList) => {
  return insultList.some((insult) => comment.match(RegExp(insult, "gi")));
};

console.log(insulte(comment, insultList));

const comments = "This video is cool...bastard";
const insultLists = ["fuck", "shit", "crap", "bastard"];

const insultes = (comments, insultLists) => {
  //const commentsLower = comments.toLowerCase()
  let result = insultLists.map((insult) =>
    insult.includes(comments.toLowerCase())
  );
  return result.some((unResultat) => unResultat);
};

console.log(insultes(comments, insultLists));

// Retourner les elements unique

const room = [1, 2, 3];
const roomVirtual = [2, 5, 3];

const getGuestList = (room, roomVirtual) => {
  return [...new Set([room, ...roomVirtual])];
};

console.log(getGuestList(room, roomVirtual));

// Trouver le siècle d'une année

const year = 2022;

const getCentury = (year) => {
  const siecle = Math.ceil(year / 100);
  return `l'année ${year} est dans le ${siecle}ème sècle`;
};

console.log(getCentury(year));
