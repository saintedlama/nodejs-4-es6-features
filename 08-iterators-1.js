var myIterable = {
  values : [0, 1, 2, 3]
};

myIterable[Symbol.iterator] = function() {
  return {
    idx : -1,
    next() {
      if (this.idx == myIterable.values.length) {
        return { done : true }
      }

      this.idx++;

      return {
        done : false,
        value : myIterable.values[this.idx - 1]
      }
    }
  }
};

for (let value of myIterable) {
  console.log(value);
}