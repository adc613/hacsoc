/**
 * CLASSES
 *
 * in ES2015 classes were added to JavaScript
 */


/**
 * This how "classes" used to be declared. The syntax is stranged hence the
 * addition of class syntax is ES6/ES2015.
 *
 * Don't look too much into this
 */
function AnimalOld(name) {

  this.name = name;

  this.speak = function() {
    console.log("I am an animal and my name is: " + this.name);
  };

}

/*
 * Classes are new in ES6/ES2015
 */
class Animal {

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("I am an animal and my name is: " + this.name);
  }

}

/**
 * Classes can be extended
 */
class Dog extends Animal {

  // override speak
  speak() {
    console.log("No hablo espanol");
  }

}

/**
 * instances can be instantiated with "new"
 */
let fred = new Animal('fred');
fred.speak();

let spot = new Dog('spot');
spot.speak();

let adam = new AnimalOld("adam");
adam.speak();
