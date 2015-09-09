var arr = [0, 1, 2, 3];

var log = arg => console.log(arg);

arr
  .map(x => {
    return {
      x: x,
      pow2: Math.pow(x, 2)
    }
  })
  .forEach(log);