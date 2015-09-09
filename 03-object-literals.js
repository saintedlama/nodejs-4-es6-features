function createPerson(firstName, lastName) {
  return {
    // __proto__
    __proto__: new Number(),

    firstName,
    lastName,

    print() {
      console.log(this.firstName, this.lastName);
    },

    [ 'go' + firstName ]: lastName
  }
}

var rick = createPerson('Rick', 'Grimes');

rick.print();
console.log(rick.goRick);
console.log(typeof rick.prototype);