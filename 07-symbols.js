var sym1 = Symbol();

console.log('typeof sym1', typeof sym1);

var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

console.log('sym2===sym3', sym2===sym3);

var sym4 = Symbol.for('foo');
var sym5 = Symbol.for('foo');

console.log('sym4===sym5', sym4===sym5);

console.log('sym4', Symbol.keyFor(sym4));

// Well known symbols
console.log('iterator', Symbol.iterator);












