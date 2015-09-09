"use strict";
class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  name() {
    return this.firstName + ' ' + this.lastName;
  }

  die() {
    console.log(this.name(), 'is dead');
    return new Zombie(this.firstName, this.lastName);
  }
}

class Zombie extends Human {
  die(headshot) {
    if (headshot) {
      super.die();
    } else {
      console.log('arghhhhharghhhhharghhhh...');
    }
  }

  name() {
    return 'Zombie ' + super.name();
  }

  static createZombie(human) {
    human.die();
    return new Zombie(human.firstName, human.lastName);
  }
}

var rick = new Human('Rick', 'Grimes');
console.log(rick.name());

var zombieRick = rick.die();
console.log(zombieRick.name());

zombieRick.die();

zombieRick.die(true);