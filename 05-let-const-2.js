"use strict";

{
  let a = 42;
  var b = 1;

  {
    let a = 24;
    var b = 2;
    console.log('a', a);
  }

  console.log('a', a);
}

console.log('b', b);
//console.log('a', a);