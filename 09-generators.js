"use strict";

var myIterable = {
  values: [0, 1, 2, 3]
};

myIterable[Symbol.iterator] = function*() {
  var idx = 0;

  while (idx < myIterable.values.length) {
    yield myIterable.values[idx++];
  }
};

for (let value of myIterable) {
  console.log(value);
}