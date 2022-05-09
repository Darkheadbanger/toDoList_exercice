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

// Cours freecodecamp

// Les basiques

class Rectangle {
  //Setup = constructeur
  constructor(_width, _height, _color) {
    console.log("The Rectangle is being created!");
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  // La méthodes
  getArea() {
    return this.width * this.height;
  }

  getColor() {
    return this.color; // Properiétés d'instance
  }

  printDescription() {
    const paragrapheRectangle = `Je suis un rectangle de ${this.width} x ${
      this.height
    } qui vaut ${this.getArea()} et je suis de couleur ${this.color}`;
    console.log(paragrapheRectangle);
    return paragrapheRectangle;
  }
}

const myRectangle = new Rectangle(5, 3, "blue");
const myRectangle1 = new Rectangle(10, 5, "red");
console.log(myRectangle); // 5, 3, "blue"
console.log(myRectangle1); // 10, 5, "red"

console.log(myRectangle.getArea()); // Fait appel ç la méthode
console.log(myRectangle1.getArea());
console.log(myRectangle.getColor());
console.log(myRectangle1.getColor());
console.log(myRectangle.printDescription());
console.log(myRectangle1.printDescription());

// Getters et Setters

// Getters et setters sont utilisé pour définir la méthode dans la classe qui vont être utiliseer
// Ils ressemblent aux propriétés mais ils sont des méthodes de cette classe

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numberOfRequestForArea = 0;
  }
  // getter area
  get area() {
    this.numberOfRequestForArea++;
    return this.width * this.height;
  }
  // setters
  /**
   * @param {number} area
   */
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width; // === Math.sqrt(area);
  }
}

let square = new Square(4); // new permet de construire une nouvelle instances, c'est celui là le veritable truc, la classe est l'idée de ce truc en gros que comporte ce truc pour être ce truc
console.log(square);
console.log(square.area); // 4*4=16

square.area = 25;
console.log(square.width); //5 === racine carré de set area(area) this.width
console.log(square.height); // 5

console.log(square.area); //25 car dans square.area = 25
console.log(square.area);
console.log(square.numberOfRequestForArea); // Car console.log(square.area) 3 fois

// Static methode

class Square1 {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a, b) {
    // Dans static, on utilise pas this.
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimension(width, height) {
    return width === height;
  }
}
// static 1
const square1 = new Square1(8);
const square2 = new Square1(8);
const square3 = new Square1(7);
const square4 = new Square1(9);
console.log(Square1.equals(square1, square2)); // Si dans la classe Square1, l'instance de square1 et square2 est équivalent alors true
console.log(Square1.equals(square3, square4)); // Si dans la classe Square1, l'instance de square1 et square2 est équivalent alors true

// static 2

console.log(Square1.isValidDimension(7, 7));
console.log(Square1.isValidDimension(7, 8));

// Inheritance and extends
// Parents and Child Class

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    const describe = `I am ${this.name} and i am ${this.age} years old`;
    return describe;
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearOfExperience) {
    super(_name, _age);

    // Custom behaviour
    this.yearOfExperience = _yearOfExperience;
  }

  code() {
    const programmer = `${this.name} is coding`;
    return programmer;
  }
}

let person = new Person("David", 27);
let programmer = new Programmer("Adrien", 56, 12);

console.log(person);
console.log(programmer);

console.log(person.describe());
console.log(programmer.code());

let programmers = [
  new Programmer("David", 17, 2),
  new Programmer("Bouhaben", 27, 2),
];
const developSoftware = (programmers) => {
  // Develop software
  for (let programmer of programmers) {
    console.log(programmer);
    console.log(programmer.code());
  }
};
developSoftware(programmers);

// Polymorphisme

class Animal {
  constructor(_name) {
    this.name = _name;
  }

  makeSound() {
    console.log(`Génerci Animal sound !`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  // This called polymorphism, écraser celle de la classe de parent
  // Polymorphism, si on enlève ce makeSound, il va imprimer la méthode de parent
  makeSound() {
    super.makeSound(); // Va appeller la méthode makeSpund parent(classe Dog)
    console.log("Miau miau");
  }
}

const a1 = new Animal("Cat");
const a2 = new Dog("Jeff");

a1.makeSound();
a2.makeSound();
