"use strict";

// Map/WeakMap

var myMap = new Map();

myMap.set('rick', 'No Zombie');
myMap.set('michonne', 'No Zombie');

console.log(myMap.get('rick'));

for (let entry of myMap) {
  console.log(entry);
}

console.log();

// Set/WeakSet

var mySet = new Set();

mySet.add('rick');
mySet.add('rick');
mySet.add('michonne');

console.log('Has rick?', mySet.has('rick'));

for (let entry of mySet) {
  console.log(entry);
}
