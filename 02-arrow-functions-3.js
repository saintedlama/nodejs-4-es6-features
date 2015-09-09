"use strict"

class Person {
  constructor(firstName, lastName, friends) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.friends = friends || [];
  }

  printFriends() {
    this.friends
      .map(friend => friend + ' is a friend of ' + this.firstName + ' ' + this.lastName)
      .forEach(x => console.log(x));
  }
}

var rick = new Person('Rick', 'Grimes', ['Daryl Dixon', 'Michonne']);
rick.printFriends();