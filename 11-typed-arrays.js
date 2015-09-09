var buffer = new ArrayBuffer(16);

var int32View = new Int32Array(buffer);

for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

console.log('buffer[1]', buffer[1]);
console.log('int32View[1]', int32View[1]);

// Conversion
var array = Array.prototype.slice.call(int32View);
console.log(array);
console.log(Int32Array.from(array));