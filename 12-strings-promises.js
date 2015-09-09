"use strict";

// Additional string methods
let name = 'Rick Grimes';

console.log(name.startsWith('Rick'));
console.log(name.endsWith('Grimes'));
console.log(name.includes('k G'));

// Promises
var promise = new Promise((resolve, reject) => {
  //reject(new Error('Goes not'));
  resolve('Goes!');
});

promise
  .then(x => console.log('Works as expected', x))
  .catch(e => console.log('Got an error', e));