let array = ["A", "B", "C", "D"];

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let curr = this;
    for (let i = 0; i < curr.length; i++) {
      callback(curr[i], i, curr);
    }
  };
}

array.forEach((item, index, currArray) => {
  console.log(item, index, currArray);
});
