var firstName = 'Rick';
var lastName = 'Grimes';

console.log(`Me is ${firstName} ${lastName}`);

// Expressions
var input = 1;
console.log(`You rated 'The walking dead' with ${Math.min(input + 1, 5)} stars`);

// Tagging
logParts`You rated 'The walking dead' with ${Math.min(input + 1, 5)} stars`;

function logParts(strings, firstValue) {
  console.log(strings, firstValue);
}

var str = String.raw`You rated 'The walking dead' with ${Math.min(input + 1, 5)} stars`;
console.log(str);